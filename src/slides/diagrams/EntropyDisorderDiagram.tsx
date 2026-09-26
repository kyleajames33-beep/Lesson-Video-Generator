// EntropyDisorderDiagram — entropy increases solid → liquid → gas. The same
// nine water molecules on three plinths: locked in an ordered grid (solid),
// jumbled and sliding past each other (liquid), and flying freely round a
// glass box (gas). A rising arrow underneath: S increases, so ΔS > 0 for
// solid → gas.
//
// Diorama restyle: glossy CPK H₂O models (bent, O red, H white) on plinths,
// motion that grows with the state (a jiggle, a slide, a free flight), and a
// self-drawing entropy arrow. The motion itself is the hold life.
//
// Timing: Chem Y11 M4 L11 and L12 reveal the card at frame 90 (START).
// Beat plan (frames after START):
//   0     plinths, containers, titles
//   20    solid molecules pop in; 70 liquid; 120 gas
//   200   entropy arrow draws left to right
//   250   verdict

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob} from './diorama';
import {ArrowHead, GLASS_EDGE, GlassDefs, clamp, drawProps, fadeAt, pingPong} from './kinds/restyle-chem-specials/props';

const ID = 'entropy';
const START = 90;
const W = 760;
const PLINTH_Y = 392;
const XS = [130, 380, 630];
const WATER = ['O', 'H', 'H'];
const MR = 11;

export const EntropyDisorderDiagram = () => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();
	const f = frame + START; // absolute clock for continuous motion
	const pop = (i: number, start: number) => Math.max(0, spring({frame: frame - start - i * 2, fps, config: {damping: 13, stiffness: 220, mass: 0.6}}));
	const arrow = interpolate(frame, [200, 250], [0, 1], clamp);

	// SOLID: neat 3 × 3 grid, vibrating in place.
	const solid = Array.from({length: 9}, (_, i) => ({x: XS[0] + ((i % 3) - 1) * 36 + idleBob(f, i, 1.3), y: PLINTH_Y - 24 - Math.floor(i / 3) * 34 + idleBob(f + 7, i + 3, 1.3)}));
	// LIQUID: a close-packed jumble that slides slowly within the dish.
	const liquid = Array.from({length: 9}, (_, i) => {
		const bx = ((i % 4) - 1.5) * 34 + (Math.floor(i / 4) % 2) * 14;
		const by = -Math.floor(i / 4) * 26;
		return {x: XS[1] + bx + Math.sin(f / 23 + i * 1.9) * 8, y: PLINTH_Y - 24 + by + Math.cos(f / 29 + i * 1.3) * 4};
	});
	// GAS: free flight, bouncing off the box walls (triangle waves).
	const BOX = {x0: XS[2] - 84, x1: XS[2] + 84, y0: 188, y1: PLINTH_Y - 8};
	const gas = Array.from({length: 9}, (_, i) => {
		const px = pingPong(f + i * 37, 70 + (i % 4) * 17);
		const py = pingPong(f + i * 53, 58 + (i % 3) * 21);
		return {x: BOX.x0 + 18 + px * (BOX.x1 - BOX.x0 - 36), y: BOX.y0 + 18 + py * (BOX.y1 - BOX.y0 - 36)};
	});

	const header = (x: number, title: string, sub: string) => (
		<g>
			<text x={x} y={52} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800}>{title}</text>
			<text x={x} y={80} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={600}>{sub}</text>
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Entropy increases from solid to liquid to gas" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['O', 'H']} />
			<GlassDefs id={ID} />

			<g opacity={fadeAt(frame, -START, 14)}>
				{header(XS[0], 'solid', 'low entropy')}
				{header(XS[1], 'liquid', 'more entropy')}
				{header(XS[2], 'gas', 'high entropy')}
			</g>

			<g opacity={fadeAt(frame, -START, 16)}>
				<DioramaPlinth id={ID} cx={XS[0]} cy={PLINTH_Y} rx={108}>
					{solid.map((p, i) => <Molecule key={i} id={ID} atoms={WATER} x={p.x} y={p.y} r={MR} scale={pop(i, 20)} opacity={pop(i, 20) > 0.02 ? 1 : 0} />)}
				</DioramaPlinth>
				<DioramaPlinth id={ID} cx={XS[1]} cy={PLINTH_Y} rx={108}>
					{liquid.map((p, i) => <Molecule key={i} id={ID} atoms={WATER} x={p.x} y={p.y} r={MR} scale={pop(i, 70)} opacity={pop(i, 70) > 0.02 ? 1 : 0} />)}
					{/* glass dish holding the liquid */}
					<path d={`M ${XS[1] - 86} ${PLINTH_Y - 92} L ${XS[1] - 86} ${PLINTH_Y - 6} Q ${XS[1] - 86} ${PLINTH_Y + 2} ${XS[1] - 76} ${PLINTH_Y + 2} L ${XS[1] + 76} ${PLINTH_Y + 2} Q ${XS[1] + 86} ${PLINTH_Y + 2} ${XS[1] + 86} ${PLINTH_Y - 6} L ${XS[1] + 86} ${PLINTH_Y - 92}`} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={3} strokeLinejoin="round" />
				</DioramaPlinth>
				<DioramaPlinth id={ID} cx={XS[2]} cy={PLINTH_Y} rx={108}>
					{gas.map((p, i) => <Molecule key={i} id={ID} atoms={WATER} x={p.x} y={p.y} r={MR} scale={pop(i, 120)} opacity={pop(i, 120) > 0.02 ? 1 : 0} />)}
					<rect x={BOX.x0} y={BOX.y0} width={BOX.x1 - BOX.x0} height={BOX.y1 - BOX.y0} rx={8} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={3} />
					<path d={`M ${BOX.x0 + 12} ${BOX.y0 + 14} L ${BOX.x0 + 12} ${BOX.y1 - 16}`} stroke="#ffffff" strokeOpacity={0.8} strokeWidth={5} strokeLinecap="round" />
				</DioramaPlinth>
			</g>

			{/* entropy arrow */}
			<path d={`M 60 468 L 690 468`} stroke={TOK.chem2} strokeWidth={6} strokeLinecap="round" fill="none" {...drawProps(arrow)} />
			{arrow > 0.98 ? <ArrowHead x={704} y={468} angleDeg={0} size={20} fill={TOK.chem2} /> : null}
			<text x={W / 2} y={496} textAnchor="middle" fill={TOK.chem1} fontSize={19} fontWeight={800} opacity={fadeAt(frame, 230)}>entropy (S) increases →</text>
			<text x={W / 2} y={525} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fadeAt(frame, 250, 16)}>
				more spread out, more disorder: ΔS &gt; 0
			</text>
		</svg>
	);
};
