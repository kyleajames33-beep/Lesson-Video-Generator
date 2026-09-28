// GibbsLnKDiagram (kind: chem12m5LnK) — ΔG° = −RT ln Keq as a graph.
//
// ΔG° against Keq on a log axis is a straight falling line that draws itself
// and crosses zero at Keq = 1 (amber). Keq > 1: ln Keq > 0, ΔG° < 0, forward
// favoured (a plinth of mostly product particles); Keq < 1: ln Keq < 0,
// ΔG° > 0, reactants favoured (mostly reactant particles). No numeric ticks:
// the scene gives no temperature. Notes on their beats: T in kelvin, answer in
// J (÷ 1000 for kJ), and ΔG° is not ΔG (at equilibrium ΔG = 0).
//
// Beats are frames after `delay`.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {AtomDefs, Ball, eramp, ramp} from './shared';
import {P, Rich, VIOLET, partsW} from './kbKit';

export type GibbsLnKProps = {
	delay?: number;
	eqAt?: number;
	constantsAt?: number;
	graphAt?: number;
	bigAt?: number;
	smallAt?: number;
	kelvinAt?: number;
	joulesAt?: number;
	notDgAt?: number;
};

const W = 760;
const GX0 = 70, GX1 = 700, GY0 = 112, GY1 = 388;
const GZ = 250;
const GXM = (GX0 + GX1) / 2;

export const GibbsLnKDiagram = ({
	delay = 62,
	eqAt = 110,
	constantsAt = 240,
	graphAt = 364,
	bigAt = 404,
	smallAt = 593,
	kelvinAt = 769,
	joulesAt = 867,
	notDgAt = 906,
}: GibbsLnKProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const A = theme.accent;

	// line: ΔG° ∝ −log K, straight on a log axis
	const draw = eramp(frame, graphAt, 44);
	const xEnd = GX0 + (GX1 - GX0) * draw;
	const lineY = (x: number) => GZ + ((x - GXM) / (GX1 - GXM)) * 118;

	const bigIn = ramp(frame, bigAt, 16);
	const smallIn = ramp(frame, smallAt, 16);

	const card = (x: number, y: number, lines: {t: string; c?: string}[], o: number, color: string) => (
		<g opacity={o}>
			<rect x={x} y={y} width={212} height={lines.length * 25 + 18} rx={14} fill="#ffffff" stroke={color} strokeWidth={2.5} />
			{lines.map((l, i) => (
				<Rich key={i} x={x + 16} y={y + 32 + i * 25} size={i === lines.length - 1 ? 20 : 19} parts={P(l.t, l.c ?? TOK.ink)} anchor="start" weight={i === lines.length - 1 ? 900 : 800} />
			))}
		</g>
	);

	const plinth = (cx: number, major: string, minor: string, o: number, k: number) => {
		const slots = plinthSlots(cx, 462, 76, 7);
		return (
			<g opacity={o}>
				<DioramaPlinth id={`c12m5lnk${k}`} cx={cx} cy={462} rx={76}>
					{slots
						.map((s, j) => ({s, j}))
						.sort((a, b) => a.s.y - b.s.y)
						.map(({s, j}) => (
							<Ball key={j} id="c12m5lnk" el={j === 3 ? minor : major} x={s.x} y={s.y - 8 + idleBob(frame, j + k * 9, 1.4)} r={12} shadow />
						))}
				</DioramaPlinth>
			</g>
		);
	};

	const eq = P('ΔG° = −RT ln K_{eq}');
	const eqW = partsW(eq, 36);
	const consts = P('R = 8.314 J K⁻¹ mol⁻¹    T in kelvin');
	const kelv = P(' = °C + 273');

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Graph of ΔG° against Keq on a log scale: a falling straight line crossing zero at Keq = 1; Keq above 1 gives negative ΔG°, forward favoured; Keq below 1 gives positive ΔG°, reactants favoured" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id="c12m5lnk" elements={['A', 'B']} />

			{/* Equation */}
			<g opacity={ramp(frame, eqAt, 14)}>
				<rect x={W / 2 - eqW / 2 - 20} y={8} width={eqW + 40} height={54} rx={14} fill="#ffffff" stroke="rgba(0,0,0,0.12)" strokeWidth={2} />
				<Rich x={W / 2} y={48} size={36} parts={eq} />
			</g>
			<g opacity={ramp(frame, constantsAt, 14)}>
				<Rich x={W / 2} y={90} size={19} parts={[...consts, ...kelv.map((p) => ({...p, o: ramp(frame, kelvinAt, 14)}))]} fill={TOK.inkDim} />
			</g>

			{/* Graph */}
			<g opacity={ramp(frame, graphAt - 24, 14)}>
				<rect x={GXM} y={GZ} width={GX1 - GXM} height={GY1 - GZ} fill={VIOLET} opacity={0.08 * bigIn} />
				<rect x={GX0} y={GY0} width={GXM - GX0} height={GZ - GY0} fill={A} opacity={0.08 * smallIn} />
				<line x1={GX0} y1={GY0} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={GX0} y1={GZ} x2={GX1 + 6} y2={GZ} stroke={TOK.ink} strokeWidth={2.5} />
				<line x1={GXM} y1={GY0} x2={GXM} y2={GY1} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="5 6" />
				<text x={GX0 - 12} y={GY0 + 20} textAnchor="end" fill={TOK.inkDim} fontSize={24} fontWeight={800}>+</text>
				<text x={GX0 - 12} y={GZ + 7} textAnchor="end" fill={TOK.inkDim} fontSize={19} fontWeight={800}>0</text>
				<text x={GX0 - 12} y={GY1 - 4} textAnchor="end" fill={TOK.inkDim} fontSize={26} fontWeight={800}>−</text>
				<text x={GX0 + 10} y={GY0 + 2} fill={TOK.inkDim} fontSize={19} fontWeight={800}>ΔG°</text>
				<Rich x={GXM} y={GY1 + 26} size={20} parts={P('K_{eq} = 1', TOK.amberInk)} opacity={ramp(frame, graphAt + 22, 12)} />
				<Rich x={GX1} y={GY1 + 24} size={18} parts={P('K_{eq} (log scale) →', TOK.inkDim)} anchor="end" />
			</g>
			<line x1={GX0} y1={lineY(GX0)} x2={xEnd} y2={lineY(xEnd)} stroke={TOK.ink} strokeWidth={4.5} strokeLinecap="round" opacity={draw > 0 ? 1 : 0} />
			{/* zero crossing at Keq = 1 */}
			<g opacity={ramp(frame, graphAt + 22, 12)}>
				<circle cx={GXM} cy={GZ} r={10 + pulse * 3} fill={TOK.amber} stroke="#ffffff" strokeWidth={3} />
				<Rich x={GXM + 14} y={GZ - 14} size={19} parts={P('ΔG° = 0', TOK.amberInk)} anchor="start" />
			</g>

			{/* Cards */}
			{card(GX1 - 214, GY0 + 2, [{t: 'K_{eq} > 1'}, {t: 'ln K_{eq} > 0'}, {t: 'ΔG° < 0'}, {t: 'forward favoured', c: VIOLET}], bigIn, VIOLET)}
			{card(GX0 + 14, GZ + 16, [{t: 'K_{eq} < 1'}, {t: 'ln K_{eq} < 0'}, {t: 'ΔG° > 0'}, {t: 'reactants favoured', c: A}], smallIn, A)}

			{/* Mixtures */}
			{plinth(112, 'A', 'B', smallIn, 0)}
			{plinth(648, 'B', 'A', bigIn, 1)}
			<text x={112} y={525} textAnchor="middle" fill={A} fontSize={17} fontWeight={800} opacity={smallIn}>reactants win</text>
			<text x={648} y={525} textAnchor="middle" fill={VIOLET} fontSize={17} fontWeight={800} opacity={bigIn}>products win</text>

			{/* Notes */}
			<Rich x={W / 2} y={448} size={21} parts={P('answer in J: ÷ 1000 for kJ', TOK.ink)} opacity={ramp(frame, joulesAt, 14)} />
			<Rich x={W / 2} y={486} size={21} parts={P('ΔG° is not ΔG: at equilibrium ΔG = 0', TOK.ink)} opacity={ramp(frame, notDgAt, 14)} />
		</svg>
	);
};
