// HessCycleDiagram — Hess's law as a triangle of plinths: the direct route
// from reactants to products has the same ΔH as the indirect route through an
// intermediate. Two travellers leave the reactants together, one on each
// route, and both arrive at the same products: the path doesn't matter.
//
// Diorama restyle: three plinths with painted signposts, routes that draw
// themselves, glossy travellers that repeat the trip during the hold, and a
// breathing amber verdict (the one idea: ΔH = ΔH₁ + ΔH₂).
//
// Timing: used on Chem Y11 M4 CP2, L8, L9 and L10; all reveal the card at
// frame 90 (START).
// Beat plan (frames after START):
//   0     plinths + signposts
//   20    direct route draws (ΔH)
//   70    indirect route draws via the intermediate (ΔH₁, ΔH₂)
//   160   travellers run both routes (then repeat every 300 frames)
//   260   verdict

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idlePulse} from './diorama';
import {ArrowHead, Ball, BallDefs, clamp, drawProps, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'hess';
const START = 90;
const W = 760;
const R = {x: 150, y: 196};
const P = {x: 610, y: 196};
const I = {x: 380, y: 420};
const DIRECT = '#2f9e84';
const INDIRECT = '#3f6fd8';
const RUN_AT = 160, RUN_LEN = 110, LOOP = 300, VERDICT_AT = 260;

// Route geometry (between plinth rims).
const D0 = {x: R.x + 100, y: R.y - 70}, D1 = {x: P.x - 100, y: P.y - 70};
const A0 = {x: R.x + 40, y: R.y + 48}, A1 = {x: I.x - 104, y: I.y - 42};
const B0 = {x: I.x + 104, y: I.y - 42}, B1 = {x: P.x - 40, y: P.y + 48};
const lerp = (a: {x: number; y: number}, b: {x: number; y: number}, t: number) => ({x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t});
const ang = (a: {x: number; y: number}, b: {x: number; y: number}) => (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;

export const HessCycleDiagram = () => {
	const frame = useCurrentFrame() - START;
	const pulse = idlePulse(frame + START);
	const direct = interpolate(frame, [20, 50], [0, 1], clamp);
	const legA = interpolate(frame, [70, 96], [0, 1], clamp);
	const legB = interpolate(frame, [96, 122], [0, 1], clamp);
	const verdict = fadeAt(frame, VERDICT_AT, 16);

	// Travellers: 0..1 progress along each route, repeating.
	const cyc = frame < RUN_AT ? -1 : (frame - RUN_AT) % LOOP;
	const t = cyc < 0 ? 0 : Math.min(1, cyc / RUN_LEN);
	const travel = cyc >= 0 && cyc < RUN_LEN + 40 ? interpolate(cyc, [0, 8, RUN_LEN + 20, RUN_LEN + 40], [0, 1, 1, 0], clamp) : 0;
	const ease = (u: number) => u * u * (3 - 2 * u);
	const d = lerp(D0, D1, ease(t));
	const iv = ease(t) * 2;
	const ip = iv < 1 ? lerp(A0, A1, iv) : lerp(B0, B1, iv - 1);
	const hop = (u: number) => -Math.abs(Math.sin(u * Math.PI * 3)) * 10;

	const plinth = (n: {x: number; y: number}, label: string, delay: number) => (
		<g opacity={fadeAt(frame, delay - START, 14)}>
			<DioramaPlinth id={ID} cx={n.x} cy={n.y} rx={96}>
				{/* signpost */}
				<rect x={n.x - 4} y={n.y - 70} width={8} height={70} rx={3} fill="#7a4f2c" />
				<rect x={n.x - 82} y={n.y - 106} width={164} height={44} rx={8} fill="#b07b45" stroke="#7a4f2c" strokeWidth={3} />
				<rect x={n.x - 76} y={n.y - 101} width={152} height={8} rx={4} fill="#ffffff" opacity={0.18} />
				<text x={n.x} y={n.y - 76} textAnchor="middle" fill="#fffaf0" fontSize={23} fontWeight={800}>{label}</text>
			</DioramaPlinth>
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Hess cycle: the direct route has the same enthalpy change as the sum of the indirect route" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BallDefs id={ID} colors={{d: DIRECT, i: INDIRECT}} />

			{plinth(R, 'reactants', 0)}
			{plinth(P, 'products', 0)}
			{plinth(I, 'intermediate', 0)}

			{/* direct route: an arc over the top */}
			<path d={`M ${D0.x} ${D0.y} L ${D1.x} ${D1.y}`} stroke={DIRECT} strokeWidth={6} fill="none" strokeLinecap="round" {...drawProps(direct)} />
			{direct > 0.98 ? <ArrowHead x={D1.x + 6} y={D1.y} angleDeg={0} size={18} fill={DIRECT} /> : null}
			<text x={(D0.x + D1.x) / 2} y={D0.y - 16} textAnchor="middle" fill={DIRECT} fontSize={26} fontWeight={850} opacity={fadeAt(frame, 44)}>ΔH</text>
			<text x={(D0.x + D1.x) / 2} y={D0.y + 30} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} opacity={fadeAt(frame, 50)}>direct route</text>

			{/* indirect route via the intermediate */}
			<path d={`M ${A0.x} ${A0.y} L ${A1.x} ${A1.y}`} stroke={INDIRECT} strokeWidth={6} fill="none" strokeLinecap="round" {...drawProps(legA)} />
			{legA > 0.98 ? <ArrowHead x={A1.x + 4} y={A1.y + 3} angleDeg={ang(A0, A1)} size={18} fill={INDIRECT} /> : null}
			<path d={`M ${B0.x} ${B0.y} L ${B1.x} ${B1.y}`} stroke={INDIRECT} strokeWidth={6} fill="none" strokeLinecap="round" {...drawProps(legB)} />
			{legB > 0.98 ? <ArrowHead x={B1.x + 3} y={B1.y - 4} angleDeg={ang(B0, B1)} size={18} fill={INDIRECT} /> : null}
			<text x={(A0.x + A1.x) / 2 - 26} y={(A0.y + A1.y) / 2 + 8} textAnchor="end" fill={INDIRECT} fontSize={25} fontWeight={850} opacity={fadeAt(frame, 92)}>ΔH₁</text>
			<text x={(B0.x + B1.x) / 2 + 26} y={(B0.y + B1.y) / 2 + 8} textAnchor="start" fill={INDIRECT} fontSize={25} fontWeight={850} opacity={fadeAt(frame, 118)}>ΔH₂</text>

			{/* travellers */}
			<g opacity={travel}>
				<Ball id={ID} fill="d" edge={DIRECT} x={d.x} y={d.y - 14 + hop(t)} r={11} shadow />
				<Ball id={ID} fill="i" edge={INDIRECT} x={ip.x} y={ip.y - 14 + hop(t)} r={11} shadow />
			</g>

			{/* verdict */}
			<g opacity={verdict}>
				<rect x={W / 2 - 250} y={474} width={500} height={46} rx={23} fill="#fff8e8" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} />
				<text x={W / 2} y={505} textAnchor="middle" fill={TOK.amberInk} fontSize={23} fontWeight={850}>ΔH = ΔH₁ + ΔH₂: the path doesn't matter</text>
			</g>
		</svg>
	);
};
