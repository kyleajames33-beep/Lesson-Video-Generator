// ReductionPotentialLadderDiagram — a ladder of standard reduction potentials
// with H⁺/H₂ = 0.00 V as the reference rung. Higher up = more positive E° =
// stronger oxidant (the cathode, it gets reduced); lower down = more negative
// E° = stronger reductant (the anode, it gets oxidised). The gap between the
// chosen cathode and anode rungs is E°cell = E°(cathode) − E°(anode).
//
// The highlighted pair is Cu (cathode) and Zn (anode): the same Zn–Cu cell
// the lesson (Chem Y11 M3 L9) works through, E°cell = +0.34 − (−0.76) =
// +1.10 V. (It previously highlighted Ag/Mg, +3.17 V, which is correct but
// didn't match the lesson's worked example.) E° values match the course's
// data (Ag +0.80, Cu +0.34, H 0.00, Zn −0.76, Mg −2.37 V) and the rungs are
// drawn to scale.
//
// Diorama restyle: a wooden ladder standing on a plinth, rungs to scale,
// glossy tokens on every rung that shuffle gently during the hold (the two
// chosen half-cells in their metal colours), and a breathing amber gap.
//
// Timing: the formula scene reveals the card at the default frame 62 (START).
// The narration reaches "higher E° becomes the cathode" at about 17 s and
// "lower E° becomes the anode" at about 20 s.
// Beat plan (frames after START):
//   0     ladder + plinth; 20 rungs and values
//   480   cathode tag on Cu; 580 anode tag on Zn
//   680   the gap between them lights amber: +1.10 V
//   780   the substitution line

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from './diorama';
import {Ball, BallDefs, fadeAt} from './kinds/restyle-chem-specials/props';

const ID = 'eladder';
const START = 62;
const W = 760;

// Standard reduction potentials (V).
const CELLS = [
	{label: 'Ag⁺ / Ag', e: 0.8},
	{label: 'Cu²⁺ / Cu', e: 0.34},
	{label: 'H⁺ / H₂', e: 0.0},
	{label: 'Zn²⁺ / Zn', e: -0.76},
	{label: 'Mg²⁺ / Mg', e: -2.37},
];
const CATHODE = 1; // Cu
const ANODE = 3; // Zn

const Y_TOP = 96, Y_BOT = 420, E_MAX = 0.95, E_MIN = -2.5;
const yOf = (e: number) => Y_TOP + ((E_MAX - e) / (E_MAX - E_MIN)) * (Y_BOT - Y_TOP);
const RAIL_L = 318, RAIL_R = 402;
const CATHODE_AT = 480, ANODE_AT = 580, GAP_AT = 680, SUB_AT = 780;
const sgn = (v: number) => `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toFixed(2)}`;

export const ReductionPotentialLadderDiagram = () => {
	const frame = useCurrentFrame() - START;
	const {fps} = useVideoConfig();
	const pulse = idlePulse(frame + START);
	const ecell = Math.round((CELLS[CATHODE].e - CELLS[ANODE].e) * 100) / 100;
	const gap = fadeAt(frame, GAP_AT, 16);
	const yc = yOf(CELLS[CATHODE].e), ya = yOf(CELLS[ANODE].e);

	const tag = (i: number, at: number, text: string, sub: string, color: string, ink: string) => {
		const s = Math.max(0, spring({frame: frame - at, fps, config: {damping: 12, stiffness: 170, mass: 0.7}}));
		const y = yOf(CELLS[i].e);
		return (
			<g opacity={Math.min(1, s * 2)} transform={`translate(${(1 - Math.min(1, s)) * 30}, 0)`}>
				<rect x={588} y={y - 24} width={160} height={48} rx={12} fill="#ffffff" stroke={color} strokeWidth={2.5} />
				<text x={668} y={y - 3} textAnchor="middle" fill={ink} fontSize={20} fontWeight={850}>{text}</text>
				<text x={668} y={y + 17} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{sub}</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Standard reduction potential ladder: E cell equals E cathode minus E anode" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<BallDefs id={ID} colors={{cu: '#c7773f', zn: '#9aa7b4', grey: '#b5bcc2'}} />
			<defs>
				<linearGradient id={`${ID}-wood`} x1="0" x2="1">
					<stop offset="0%" stopColor="#7a4f2c" />
					<stop offset="45%" stopColor="#b0804a" />
					<stop offset="100%" stopColor="#6a4224" />
				</linearGradient>
			</defs>

			<text x={W / 2} y={38} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={850} opacity={fadeAt(frame, -START, 14)}>E°cell = E°(cathode) − E°(anode)</text>
			<text x={500} y={76} fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={fadeAt(frame, 40)}>↑ stronger oxidant</text>
			<text x={500} y={466} fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={fadeAt(frame, 46)}>↓ stronger reductant</text>
			<text x={RAIL_L - 20} y={76} textAnchor="end" fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={fadeAt(frame, -START, 14)}>E° (V)</text>

			<g opacity={fadeAt(frame, -START, 16)}>
				<DioramaPlinth id={ID} cx={(RAIL_L + RAIL_R) / 2} cy={Y_BOT + 26} rx={92}>
					<rect x={RAIL_L - 8} y={Y_TOP - 26} width={14} height={Y_BOT - Y_TOP + 54} rx={5} fill={`url(#${ID}-wood)`} />
					<rect x={RAIL_R - 6} y={Y_TOP - 26} width={14} height={Y_BOT - Y_TOP + 54} rx={5} fill={`url(#${ID}-wood)`} />
				</DioramaPlinth>
			</g>

			{/* the cell gap (drawn behind the rungs) */}
			<g opacity={gap}>
				<rect x={RAIL_L + 6} y={yc} width={RAIL_R - RAIL_L - 12} height={ya - yc} fill={TOK.amber} opacity={0.2 + pulse * 0.12} />
				<path d={`M ${RAIL_L - 112} ${yc} h 14 M ${RAIL_L - 112} ${ya} h 14 M ${RAIL_L - 105} ${yc} V ${ya}`} stroke={TOK.amber} strokeWidth={3.5} />
				<text x={RAIL_L - 122} y={(yc + ya) / 2 - 4} textAnchor="end" fill={TOK.amberInk} fontSize={30} fontWeight={900}>{sgn(ecell)} V</text>
				<text x={RAIL_L - 122} y={(yc + ya) / 2 + 20} textAnchor="end" fill={TOK.amberInk} fontSize={17} fontWeight={800}>E°cell</text>
			</g>

			{CELLS.map((c, i) => {
				const y = yOf(c.e);
				const s = Math.max(0, spring({frame: frame - 20 - i * 6, fps, config: {damping: 13, stiffness: 200, mass: 0.6}}));
				const zero = c.e === 0;
				const chosen = i === CATHODE ? 'cu' : i === ANODE ? 'zn' : 'grey';
				return (
					<g key={c.label} opacity={Math.min(1, s * 2)}>
						<rect x={RAIL_L - 4} y={y - 6} width={RAIL_R - RAIL_L + 8} height={12} rx={5} fill={`url(#${ID}-wood)`} stroke={zero ? TOK.ink : 'none'} strokeWidth={zero ? 2 : 0} />
						<Ball id={ID} fill={chosen} edge={chosen === 'cu' ? '#c7773f' : chosen === 'zn' ? '#9aa7b4' : '#b5bcc2'} x={(RAIL_L + RAIL_R) / 2 + idleBob(frame, i, 2.5)} y={y - 16 + Math.min(0, idleBob(frame + 20, i + 4, 2))} r={10} scale={Math.min(1, s)} />
						<text x={RAIL_R + 20} y={y + 7} fill={TOK.ink} fontSize={21} fontWeight={zero ? 850 : 700}>{c.label}</text>
						<text x={RAIL_L - 20} y={y + 7} textAnchor="end" fill={TOK.inkDim} fontSize={20} fontWeight={700} fontFamily="monospace">
							{c.e > 0 ? '+' : ''}{c.e === 0 ? '0.00' : c.e.toFixed(2).replace('-', '−')}
						</text>
						{zero ? <text x={RAIL_R + 20} y={y + 27} fill={TOK.inkMute} fontSize={16} fontWeight={700}>reference</text> : null}
					</g>
				);
			})}

			{tag(CATHODE, CATHODE_AT, 'CATHODE', 'higher E°: reduced', TOK.chem2, TOK.chem1)}
			{tag(ANODE, ANODE_AT, 'ANODE', 'lower E°: oxidised', '#8e5bd6', '#6a3fb0')}

			<text x={W / 2} y={522} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fadeAt(frame, SUB_AT, 16)}>
				E°cell = ({sgn(CELLS[CATHODE].e)}) − ({sgn(CELLS[ANODE].e)}) = {sgn(ecell)} V &gt; 0: spontaneous
			</text>
		</svg>
	);
};
