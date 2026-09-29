// MitosisDiagram — one cell runs through mitosis and cytokinesis on a stone
// plinth, each stage landing when the narration names it.
//
// The model cell has two homologous pairs (a long pair and a short pair; one
// of each pair in the accent colour, one in coral, the usual "one from each
// parent" convention). It starts in interphase with DNA already copied, so
// each chromosome is two sister chromatids:
//   prophase     loose chromatin condenses into X-shaped chromosomes; the
//                nuclear membrane fades away
//   metaphase    chromosomes line up on the equator, spindle fibres attach
//   anaphase     SISTER CHROMATIDS (not homologues) separate to opposite poles
//   telophase    a nuclear membrane re-forms around each set
//   cytokinesis  the cell pinches in two (cleavage furrow)
// Each daughter ends with one chromatid of every chromosome, so both get the
// same 4 chromosomes as the parent: the counts are computed from the model,
// not typed. A stage strip across the top tracks where we are.
//
// Props: `at` = frames (after `delay`) for each stage and the final count.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CORAL, CellBody, Chromosome, GlossDefs, Pill, ease, fadeAt, lerp, popAt} from './shared';

type Stage = 'prophase' | 'metaphase' | 'anaphase' | 'telophase' | 'cytokinesis';
export type MitosisProps = {
	at?: Partial<Record<Stage | 'result', number>>;
	/** Cleavage furrow (animal) or cell plate (plant). */
	cytokinesis?: 'furrow' | 'plate';
	delay?: number;
};

const ID = 'b12m5mit';
const W = 760, H = 530;
const CX = 380, CY = 236, RX = 236, RY = 142;
const STAGES: {key: Stage; label: string}[] = [
	{key: 'prophase', label: 'Prophase'},
	{key: 'metaphase', label: 'Metaphase'},
	{key: 'anaphase', label: 'Anaphase'},
	{key: 'telophase', label: 'Telophase'},
	{key: 'cytokinesis', label: 'Cytokinesis'},
];

// Four chromosomes: [pair 0 long, pair 1 short] × [accent, coral].
const CHROMS = [
	{len: 64, color: 'pat', p: {x: -52, y: -34, a: 24}},
	{len: 64, color: 'mat', p: {x: 44, y: -26, a: -38}},
	{len: 42, color: 'pat', p: {x: -26, y: 42, a: 68}},
	{len: 42, color: 'mat', p: {x: 50, y: 40, a: -12}},
];
const EQ_Y = [-96, -30, 32, 84]; // metaphase plate slots (centromeres on the equator)
const ANA_Y = [-54, -18, 18, 54]; // rows once the chromatids lie side-on at the poles

export const MitosisDiagram = ({at = {}, cytokinesis = 'furrow', delay = 62}: MitosisProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tP = at.prophase ?? 60, tM = at.metaphase ?? 180, tA = at.anaphase ?? 300, tT = at.telophase ?? 420, tC = at.cytokinesis ?? 520;
	const tR = at.result ?? tC + 120;

	const condense = ease(frame, tP - 6, tP + 40);
	const envGone = ease(frame, tP + 20, tP + 60);
	const toPlate = ease(frame, tM - 8, tM + 40);
	const spindle = ease(frame, tM - 20, tM + 20);
	const apart = ease(frame, tA - 4, tA + 60);
	const envBack = ease(frame, tT - 4, tT + 40);
	const spindleOff = ease(frame, tT, tT + 30);
	const split = ease(frame, tC - 4, tC + 70);
	const poleX = lerp(148, 140, split);

	const active = frame >= tC ? 4 : frame >= tT ? 3 : frame >= tA ? 2 : frame >= tM ? 1 : frame >= tP ? 0 : -1;
	const settled = frame > tC + 80;

	// Centromere position of chromosome i before anaphase.
	const preAnaphase = (i: number) => {
		const c = CHROMS[i];
		const bob = idleBob(frame, i, 1.6) * (1 - toPlate);
		return {
			x: CX + lerp(c.p.x, 0, toPlate) + bob,
			y: CY + lerp(c.p.y, EQ_Y[i], toPlate) + bob * 0.6,
			a: lerp(c.p.a, 0, toPlate),
		};
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Mitosis: prophase, metaphase, anaphase, telophase, then cytokinesis gives two cells with the parent's chromosome number" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: theme.accent, mat: CORAL}} />

			{/* Stage strip */}
			{STAGES.map((s, i) => {
				const x = 78 + i * 151;
				const on = i === active;
				const done = i < active;
				return (
					<g key={s.key} opacity={fadeAt(frame, 0 + i * 3)}>
						<Pill x={x} y={28} text={s.label} color={on ? theme.accent : done ? TOK.inkDim : TOK.inkMute} fill={on ? theme.soft : '#ffffff'} size={16} strokeWidth={on ? 3 : 1.5} />
						{i < STAGES.length - 1 && <text x={x + 75} y={34} textAnchor="middle" fill={TOK.inkMute} fontSize={16} fontWeight={800}>›</text>}
					</g>
				);
			})}

			<g opacity={fadeAt(frame, 0, 16)}>
				<DioramaPlinth id={ID} cx={CX} cy={396} rx={236} />

				{/* The cell (pinches in two at cytokinesis) */}
				<CellBody id={ID} cx={CX} cy={CY} rx={RX} ry={RY} split={split} gap={24 * split} />
				{cytokinesis === 'plate' && split > 0 && (
					<line x1={CX} y1={CY - RY * 0.8} x2={CX} y2={CY + RY * 0.8} stroke="#8a7a5c" strokeWidth={6} strokeLinecap="round" opacity={split} />
				)}

				{/* Nuclear membrane: present in interphase, fades in prophase */}
				<ellipse cx={CX} cy={CY} rx={128} ry={108} fill={`url(#${ID}-nuc)`} stroke="#9fb2c6" strokeWidth={3} strokeDasharray={envGone > 0.05 ? '10 8' : undefined} opacity={1 - envGone} />

				{/* Loose chromatin (interphase) */}
				<g opacity={(1 - condense) * 0.9}>
					{CHROMS.map((c, i) => {
						const x0 = CX + c.p.x, y0 = CY + c.p.y;
						const d = Array.from({length: 7}, (_, k) => `${k === 0 ? 'M' : 'Q'} ${x0 - 30 + k * 10 + (k ? Math.sin(k + i + frame / 20) * 6 : 0)} ${y0 + Math.cos(k * 1.7 + i) * 18}${k ? ` ${x0 - 25 + k * 10} ${y0 + Math.sin(k * 2.1 + i) * 16}` : ''}`).join(' ');
						return <path key={i} d={d} fill="none" stroke={c.color === 'pat' ? theme.accent : CORAL} strokeWidth={3.5} strokeLinecap="round" />;
					})}
				</g>

				{/* Spindle fibres + poles (metaphase → telophase) */}
				<g opacity={spindle * (1 - spindleOff)}>
					{[-1, 1].map((s) => (
						<g key={s}>
							{CHROMS.map((_, i) => {
								const pa = preAnaphase(i);
								const tipX = apart > 0 ? CX + s * lerp(9, poleX - 20, apart) : pa.x + s * 9;
								const tipY = apart > 0 ? lerp(pa.y, CY + ANA_Y[i], apart) : pa.y;
								return <line key={i} x1={CX + s * 200} y1={CY} x2={tipX} y2={tipY} stroke="#9aa7b4" strokeWidth={2} opacity={0.8} />;
							})}
							<circle cx={CX + s * 200} cy={CY} r={8} fill="#6b7a8f" />
						</g>
					))}
				</g>

				{/* Chromosomes */}
				{CHROMS.map((c, i) => {
					if (apart <= 0) {
						const pa = preAnaphase(i);
						return <Chromosome key={i} id={ID} x={pa.x} y={pa.y} len={c.len} w={13} color={c.color} chromatids={2} angle={pa.a} splay={7} scale={lerp(0.3, 1, condense)} opacity={condense} />;
					}
					// Anaphase on: the two sister chromatids part to opposite poles.
					// Chromatids trail behind their centromeres, so they turn side-on as they go.
					const y = lerp(CY + EQ_Y[i], CY + ANA_Y[i], apart);
					return [-1, 1].map((s) => {
						const x = CX + s * lerp(8, poleX, apart) + idleBob(frame, i * 2 + (s > 0 ? 1 : 0), settled ? 1.4 : 0);
						return <Chromosome key={`${i}${s}`} id={ID} x={x} y={y + idleBob(frame, i + 9, settled ? 1 : 0)} len={c.len} w={13} color={c.color} chromatids={1} angle={s * 90 * apart} />;
					});
				})}

				{/* Nuclear membranes re-form (telophase) */}
				{[-1, 1].map((s) => (
					<ellipse key={s} cx={CX + s * poleX} cy={CY} rx={66} ry={80} fill="none" stroke="#9fb2c6" strokeWidth={3} opacity={envBack} />
				))}
			</g>

			{/* Chromosome counts: computed from the model */}
			<g opacity={fadeAt(frame, 4, 14) * (1 - fadeAt(frame, tA - 10, 12))}>
				<Pill x={CX} y={CY + RY + 36} text={`${CHROMS.length} chromosomes, each 2 sister chromatids`} color={TOK.inkDim} size={16} />
			</g>
			{[-1, 1].map((s) => (
				<g key={s} transform={`translate(${CX + s * 140},${CY + RY + 36})`} opacity={popAt(frame, fps, tR)}>
					<Pill x={0} y={0} text={`${CHROMS.length} chromosomes`} color={theme.accent} fill={theme.soft} size={17} strokeWidth={2 + idlePulse(frame) * 1.5} />
				</g>
			))}
			<text x={CX} y={72} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tR + 20)}>
				each daughter has {CHROMS.length}: the same number as the parent
			</text>
		</svg>
	);
};
