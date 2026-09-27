// BondEnergyDiagram — breaking bonds absorbs energy (in), forming bonds
// releases energy (out); ΔH is the balance. Left plinth: the reactant bonds
// (H–H and Cl–Cl) are pulled apart as energy goes IN. Right plinth: the
// product bonds (two H–Cl) snap together as energy comes OUT. Underneath, an
// energy ledger: the "out" bar is longer than the "in" bar, and the overhang
// is the net energy released, so ΔH = Σ(broken) − Σ(formed) is negative.
//
// The example is H₂ + Cl₂ → 2HCl drawn in CPK colours. The ledger bars are in
// the true ratio of its bond energies (436 + 242 = 678 kJ in, 2 × 431 = 862 kJ
// out, so exothermic), but no values are printed: the scene teaches the
// idea, not this reaction's numbers.
//
// Diorama restyle: glossy CPK molecules on plinths, painted energy wisps,
// self-drawing ledger bars, molecules that keep jostling during the hold.
//
// Timing: Chem Y11 M4 L6 concept reveals at frame 90 (START). The narration
// opens with an analogy, then reaches "breaking ... absorbs" at about 15 s,
// "forming ... releases" at about 19 s, "delta H equals" at about 25 s and
// "if forming releases more ... negative" at about 32 s.
// Beat plan (frames after START):
//   0     both plinths; intact H₂ and Cl₂ on the left
//   465   energy in: the left bonds break (atoms pull apart)
//   570   energy out: two H–Cl bonds form on the right
//   600   ledger bars draw (in, then out)
//   740   ΔH = Σ(bonds broken) − Σ(bonds formed)
//   950   the overhang lights amber: more released than absorbed, ΔH < 0

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from './diorama';
import {clamp, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'bonds';
const START = 90;
const W = 760;
const PLINTH_Y = 238;
const BREAK_AT = 465, FORM_AT = 570, BARS_AT = 600, EQ_AT = 740, NET_AT = 950;
const IN_COLOR = '#2f9e84';
const OUT_COLOR = '#3f6fd8';
// Ledger geometry (true 678 : 862 ratio).
const BAR_X = 300, OUT_LEN = 380, IN_LEN = Math.round((OUT_LEN * 678) / 862);

export const BondEnergyDiagram = () => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();
	const pulse = idlePulse(frame + START);

	const brk = spring({frame: frame - BREAK_AT, fps, config: {damping: 14, stiffness: 90, mass: 1}});
	const form = spring({frame: frame - FORM_AT, fps, config: {damping: 10, stiffness: 150, mass: 0.8}});
	const inBar = interpolate(frame, [BARS_AT, BARS_AT + 30], [0, 1], clamp);
	const outBar = interpolate(frame, [BARS_AT + 40, BARS_AT + 76], [0, 1], clamp);
	const net = fadeAt(frame, NET_AT, 16);

	const LX = 195, RX = 565, Y = PLINTH_Y - 18;
	const r = 20;
	// Left: two diatomics, atoms separating as the bonds break.
	const pair = (cx: number, a: string, b: string, sep: number, i: number) => {
		const ra = a === 'H' ? r * 0.72 : r, rb = b === 'H' ? r * 0.72 : r;
		const d = (ra + rb) * 0.42 + sep;
		const bob = idleBob(frame, i, 1.8);
		return [
			<Molecule key={`${i}a`} id={ID} atoms={[a]} x={cx - d} y={Y + bob} r={a === 'H' ? r * 0.72 : r} />,
			<Molecule key={`${i}b`} id={ID} atoms={[b]} x={cx + d} y={Y - bob * 0.6} r={b === 'H' ? r * 0.72 : r} />,
		];
	};
	const sepL = Math.max(0, brk) * 18;
	// Right: H and Cl atoms start apart and snap into two HCl.
	const sepR = (1 - Math.min(1, Math.max(0, form))) * 26;

	const wisp = (x: number, y: number, dir: 1 | -1, color: string, t: number, k: number) => {
		// short wavy energy arrow; dir 1 = pointing down into the plinth, -1 = up and away
		const a = ((((frame + START) * 0.02 + k * 0.37) % 1) + 1) % 1;
		const yy = y + dir * a * 26;
		return (
			<g key={k} opacity={t * (0.35 + 0.65 * (1 - a))}>
				<path d={`M ${x} ${yy - dir * 30} q 8 ${dir * 7} 0 ${dir * 14} q -8 ${dir * 7} 0 ${dir * 14}`} stroke={color} strokeWidth={4} fill="none" strokeLinecap="round" />
				<path d={`M ${x - 8} ${yy - dir * 2} L ${x} ${yy + dir * 8} L ${x + 8} ${yy - dir * 2}`} stroke={color} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			</g>
		);
	};
	const inGlow = fadeAt(frame, BREAK_AT - 20, 20) * (1 - fadeAt(frame, BREAK_AT + 150, 60) * 0.6);
	const outGlow = fadeAt(frame, FORM_AT, 16) * (1 - fadeAt(frame, FORM_AT + 150, 60) * 0.6);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Breaking bonds absorbs energy, forming bonds releases energy; delta H is the difference" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['H', 'Cl']} />

			<g opacity={fadeAt(frame, -START, 14)}>
				<text x={LX} y={42} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800}>breaking bonds</text>
				<text x={LX} y={68} textAnchor="middle" fill={IN_COLOR} fontSize={19} fontWeight={800}>absorbs energy (+)</text>
				<text x={RX} y={42} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800}>forming bonds</text>
				<text x={RX} y={68} textAnchor="middle" fill={OUT_COLOR} fontSize={19} fontWeight={800}>releases energy (−)</text>
			</g>

			<g opacity={fadeAt(frame, -START, 16)}>
				<DioramaPlinth id={ID} cx={LX} cy={PLINTH_Y} rx={128}>
					{pair(LX - 50, 'H', 'H', sepL, 0)}
					{pair(LX + 54, 'Cl', 'Cl', sepL, 1)}
				</DioramaPlinth>
				<DioramaPlinth id={ID} cx={RX} cy={PLINTH_Y} rx={128}>
					<g opacity={fadeAt(frame, FORM_AT - 40, 20)}>
						{pair(RX - 52, 'H', 'Cl', sepR, 2)}
						{pair(RX + 56, 'H', 'Cl', sepR, 3)}
					</g>
				</DioramaPlinth>
			</g>
			{/* energy IN arrows (down onto the breaking bonds), energy OUT arrows (up and away) */}
			{[-50, 54].map((dx, k) => wisp(LX + dx, 150, 1, IN_COLOR, inGlow, k))}
			{[-52, 56].map((dx, k) => wisp(RX + dx, 150, -1, OUT_COLOR, outGlow, k + 2))}

			{/* energy ledger */}
			<g opacity={fadeAt(frame, BARS_AT - 10)}>
				<text x={BAR_X - 16} y={360} textAnchor="end" fill={TOK.ink} fontSize={20} fontWeight={800}>energy in</text>
				<text x={BAR_X - 16} y={381} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={700}>Σ bonds broken</text>
				<rect x={BAR_X} y={346} width={IN_LEN * inBar} height={34} rx={8} fill={IN_COLOR} />
				<rect x={BAR_X + 6} y={351} width={Math.max(0, IN_LEN * inBar - 12)} height={7} rx={3.5} fill="#ffffff" opacity={0.28} />
				<text x={BAR_X - 16} y={420} textAnchor="end" fill={TOK.ink} fontSize={20} fontWeight={800}>energy out</text>
				<text x={BAR_X - 16} y={441} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={700}>Σ bonds formed</text>
				<rect x={BAR_X} y={406} width={OUT_LEN * outBar} height={34} rx={8} fill={OUT_COLOR} />
				<rect x={BAR_X + 6} y={411} width={Math.max(0, OUT_LEN * outBar - 12)} height={7} rx={3.5} fill="#ffffff" opacity={0.28} />
			</g>
			{/* the overhang = net energy released */}
			<g opacity={net}>
				<line x1={BAR_X + IN_LEN} y1={338} x2={BAR_X + IN_LEN} y2={448} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="5 5" />
				<rect x={BAR_X + IN_LEN} y={406} width={OUT_LEN - IN_LEN} height={34} rx={8} fill={TOK.amber} opacity={0.75 + pulse * 0.25} />
				<text x={BAR_X + (IN_LEN + OUT_LEN) / 2} y={470} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>more out than in: ΔH &lt; 0</text>
			</g>
			<text x={W / 2} y={514} textAnchor="middle" fill={TOK.chem1} fontSize={23} fontWeight={850} opacity={fadeAt(frame, EQ_AT, 16)}>
				ΔH = Σ(bonds broken) − Σ(bonds formed)
			</text>
		</svg>
	);
};
