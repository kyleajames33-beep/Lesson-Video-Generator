// SignaturesDiagram (kind: chem12m5Signatures) — concentration–time graphs
// computed from a real equilibrium model (A ⇌ 2B, e.g. N₂O₄ ⇌ 2NO₂; see
// lcEqSim: mass-action kinetics, Kc fixed unless the temperature changes).
//
// mode 'single' (L4): reactant falls, product rises, both flatten.
// Equilibrium is marked (amber) where ALL curves go flat; the crossing is
// marked separately as "equal concentrations only". Then reactant is added:
// its curve spikes straight up and the system re-levels at new constant
// values with the same Kc. A flask on a plinth shows the same mixture as
// balls, following the pen.
//
// mode 'panels' (L8): four small graphs on their beats — one line jumps
// (species added), all lines jump together (volume decreased), gradual drift
// with no jump (temperature changed, Kc changes), and nothing changes
// (catalyst added at equilibrium). Each shows the immediate change and the
// re-equilibration.
//
// Qualitative: no tick values.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {AtomDefs, Ball, beatCaption, clamp, hash01, ramp} from './shared';
import {Axes, PRODUCT, Tag} from './lcKit';
import {exactEq, flatAfter, simulate, type SimEvent, type SimResult} from './lcEqSim';

type Beat = {at: number; text: string};
export type SignaturesProps = {
	delay?: number;
	mode?: 'single' | 'panels';
	/** Line labels for A and B. */
	labels?: [string, string];
	/** Kc of A ⇌ 2B (dimensionless in the model). */
	kc?: number;
	/** single mode beats */
	beats?: {
		/** reactant/product curves start drawing */
		draw?: number;
		/** amber "equilibrium = all curves flat" marker */
		flat?: number;
		/** crossing marker */
		cross?: number;
		/** reactant added (spike) */
		disturb?: number;
		/** re-level: new equilibrium marker */
		relevel?: number;
		/** Keq unchanged chip */
		keq?: number;
	};
	captions?: Beat[];
	/** panels mode: when each panel appears, and when the 're-equilibration' bands show. */
	panelBeats?: [number, number, number, number];
	bothAt?: number;
	/** Show the equation header in panels mode. */
	equation?: string;
};

const ID = 'c12m5sg';
const W = 760;

export const SignaturesDiagram = (props: SignaturesProps) => (props.mode === 'panels' ? <Panels {...props} /> : <Single {...props} />);

// ─────────────────────────────── single ───────────────────────────────
const Single = ({
	delay = 62,
	labels = ['reactant', 'product'],
	kc = 2.4,
	beats = {},
	captions = [],
}: SignaturesProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {draw: 150, flat: 326, cross: 446, disturb: 786, relevel: 886, keq: 946, ...beats};
	const T_D = 4.6, T_END = 9.2, N = 920;
	const sim = simulate({A0: 1, B0: 0, kc, kf: 1.1, tEnd: T_END, n: N, events: [{t: T_D, type: 'add', dA: 0.4}]});
	const iD = Math.round((T_D / T_END) * N);
	const iEq1 = flatAfter(sim, 0, 0.0004);
	const iEq2 = flatAfter(sim, iD + 1, 0.0004);
	let iCross = 0;
	for (let i = 0; i < iD; i++) if (sim.A[i] >= sim.B[i] && sim.A[i + 1] < sim.B[i + 1]) iCross = i;

	// pen: phase 1 draws t ∈ [0, T_D) between draw and draw+170; phase 2 from disturb
	const p1 = interpolate(frame, [b.draw, b.draw + 170], [0, iD - 1], clamp);
	const p2 = interpolate(frame, [b.disturb, b.relevel + 10], [iD, N], clamp);
	const pen = Math.floor(frame >= b.disturb ? p2 : p1);

	const GX0 = 66, GX1 = 506, GY0 = 50, GY1 = 322;
	let yMax = 0;
	for (let i = 0; i <= N; i++) yMax = Math.max(yMax, sim.A[i], sim.B[i]);
	yMax *= 1.12;
	const gx = (i: number) => GX0 + 8 + (i / N) * (GX1 - GX0 - 20);
	const gy = (v: number) => GY1 - (v / yMax) * (GY1 - GY0);
	const path = (arr: Float64Array) => {
		const pts: string[] = [];
		for (let i = 0; i <= pen; i += 3) pts.push(`${i ? 'L' : 'M'} ${gx(i).toFixed(1)} ${gy(arr[i]).toFixed(1)}`);
		pts.push(`L ${gx(pen).toFixed(1)} ${gy(arr[pen]).toFixed(1)}`);
		// vertical spike segment is part of the data (jump at iD)
		return pts.join(' ');
	};
	const drawIn = ramp(frame, b.draw - 6, 10);
	const pulse = idlePulse(frame);
	const cap = beatCaption(frame, captions);

	// flask: balls follow the pen
	const A = sim.A[Math.max(0, pen)], B = sim.B[Math.max(0, pen)];
	const nA = frame < b.draw ? 10 : Math.round(A * 10), nB = frame < b.draw ? 0 : Math.round(B * 10);
	const PCX = 636, PCY = 300;
	const slots = plinthSlots(PCX, PCY - 6, 104, 24).map((s, i) => ({...s, k: hash01(i * 7 + 3)})).sort((p, q) => p.k - q.k);
	const balls = [
		...Array.from({length: nA}, (_, i) => ({el: 'A', i})),
		...Array.from({length: nB}, (_, i) => ({el: 'B', i: i + 12})),
	].map((q, j) => ({...q, s: slots[j % slots.length]}));
	balls.sort((p, q) => p.s.y - q.s.y);

	const eqX1 = gx(iEq1), eqX2 = gx(iEq2);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Concentration–time graph: the reactant curve falls and the product curve rises until both go flat; equilibrium is where all curves are flat, not where they cross; adding reactant makes its curve jump up, then the system re-levels at new constant values with Keq unchanged" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['A', 'B']} />
			<Axes x0={GX0} y0={GY0} x1={GX1} y1={GY1} xLabel="time" yLabel="concentration" size={17} opacity={ramp(frame, 0, 14)} />

			{/* equilibrium (amber): where all curves are flat */}
			<g opacity={ramp(frame, b.flat, 14)}>
				<rect x={eqX1} y={GY0} width={gx(iD) - eqX1} height={GY1 - GY0} fill={TOK.amber} opacity={0.1} />
				<line x1={eqX1} y1={GY0 - 4} x2={eqX1} y2={GY1} stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.2} strokeDasharray="7 6" />
				<text x={eqX1 + 8} y={GY0 + 14} fill={TOK.amberInk} fontSize={17} fontWeight={800}>equilibrium:</text>
				<text x={eqX1 + 8} y={GY0 + 35} fill={TOK.amberInk} fontSize={17} fontWeight={800}>ALL curves flat</text>
			</g>

			{/* curves */}
			<g opacity={drawIn}>
				<path d={path(sim.A)} fill="none" stroke={theme.accent} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
				<path d={path(sim.B)} fill="none" stroke={PRODUCT} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
				<text x={gx(40)} y={gy(sim.A[40]) - 14} fill={theme.accent} fontSize={17} fontWeight={800}>{labels[0]}</text>
				<text x={gx(40)} y={gy(sim.B[40]) + 30} fill={PRODUCT} fontSize={17} fontWeight={800} opacity={ramp(frame, b.draw + 60, 12)}>{labels[1]}</text>
			</g>

			{/* crossing: equal concentrations only */}
			<g opacity={ramp(frame, b.cross, 14)}>
				<circle cx={gx(iCross)} cy={gy(sim.A[iCross])} r={10 + pulse * 1.5} fill="none" stroke={TOK.inkDim} strokeWidth={2.5} />
				<line x1={gx(iCross) + 10} y1={gy(sim.A[iCross]) + 8} x2={gx(iCross) + 34} y2={gy(sim.A[iCross]) + 40} stroke={TOK.inkDim} strokeWidth={2} />
				<text x={gx(iCross) + 38} y={gy(sim.A[iCross]) + 54} fill={TOK.inkDim} fontSize={17} fontWeight={800}>crossing = equal</text>
				<text x={gx(iCross) + 38} y={gy(sim.A[iCross]) + 74} fill={TOK.inkDim} fontSize={17} fontWeight={800}>concentrations only</text>
			</g>

			{/* disturbance */}
			<g opacity={ramp(frame, b.disturb, 10)}>
				<line x1={gx(iD)} y1={GY0 - 4} x2={gx(iD)} y2={GY1} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 5" />
				<text x={gx(iD) - 8} y={gy(sim.A[iD]) - 12} textAnchor="end" fill={theme.accent} fontSize={17} fontWeight={800}>add reactant</text>
			</g>
			<g opacity={ramp(frame, b.relevel, 14)}>
				<line x1={eqX2} y1={GY0 - 4} x2={eqX2} y2={GY1} stroke={theme.accent} strokeWidth={2} strokeDasharray="7 6" />
				<text x={eqX2 + 6} y={GY0 + 14} fill={theme.accent} fontSize={16} fontWeight={800}>new</text>
				<text x={eqX2 + 6} y={GY0 + 33} fill={theme.accent} fontSize={16} fontWeight={800}>levels</text>
			</g>

			{/* flask on a plinth */}
			<g opacity={ramp(frame, 4, 14)}>
				<DioramaPlinth id={ID} cx={PCX} cy={PCY} rx={104}>
					{balls.map((q, j) => (
						<Ball key={`${q.el}${q.i}`} id={ID} el={q.el} x={q.s.x} y={q.s.y + idleBob(frame, j, 1.6)} r={q.el === 'A' ? 13 : 10} shadow />
					))}
				</DioramaPlinth>
				<text x={PCX} y={PCY + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>the flask</text>
				<g transform={`translate(${PCX - 92} ${PCY - 70})`}>
					<Ball id={ID} el="A" x={8} y={-4} r={8} />
					<text x={22} y={2} fill={theme.accent} fontSize={16} fontWeight={800}>{labels[0]}</text>
					<Ball id={ID} el="B" x={108} y={-4} r={7} />
					<text x={120} y={2} fill={PRODUCT} fontSize={16} fontWeight={800}>{labels[1]}</text>
				</g>
			</g>

			{/* caption + Keq chip */}
			<text x={W / 2} y={392} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={cap.opacity}>{cap.text}</text>
			<Tag x={W / 2} y={446} text="Keq unchanged: temperature unchanged" color={theme.accent} ink={theme.accent} size={18} anchor="middle" opacity={ramp(frame, b.keq, 14)} />
		</svg>
	);
};

// ─────────────────────────────── panels ───────────────────────────────
type PanelSpec = {title: string; meaning: string; events: SimEvent[]; amber?: boolean; drift?: boolean};

const Panels = ({
	delay = 62,
	labels = ['[N₂O₄]', '[NO₂]'],
	kc = 2.4,
	panelBeats = [215, 335, 462, 667],
	bothAt = 950,
	equation = 'N₂O₄(g) ⇌ 2NO₂(g)',
}: SignaturesProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const eq0 = exactEq(1, 0, kc); // start every panel at equilibrium
	const T_D = 2.2, T_END = 8, N = 480;
	const specs: PanelSpec[] = [
		{title: 'One line jumps', meaning: 'that species added or removed', events: [{t: T_D, type: 'add', dA: 0.5}]},
		{title: 'All lines jump together', meaning: 'volume decreased (pressure up)', events: [{t: T_D, type: 'scale', factor: 1.6}]},
		{title: 'Gradual drift, no jump', meaning: 'temperature changed: Keq changes', events: [{t: T_D, type: 'temp', kc: kc * 2.4, over: 2.2}], drift: true},
		{title: 'Nothing changes', meaning: 'catalyst added at equilibrium', events: [], amber: true},
	];
	const sims: SimResult[] = specs.map((s) => simulate({A0: eq0.A, B0: eq0.B, kc, kf: 1.3, tEnd: T_END, n: N, events: s.events}));
	let yMax = 0;
	sims.forEach((r) => r.A.forEach((v, i) => (yMax = Math.max(yMax, v, r.B[i]))));
	yMax *= 1.1;
	const iD = Math.round((T_D / T_END) * N);

	const PW = 366, PH = 232;
	const origin = [[6, 50], [388, 50], [6, 292], [388, 292]];

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Four concentration–time signatures: one line jumps when a species is added; all lines jump together when the volume is decreased; a gradual drift with no jump when the temperature changes; nothing changes when a catalyst is added at equilibrium" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<g opacity={ramp(frame, 0, 14)}>
				<text x={16} y={30} fill={TOK.ink} fontSize={22} fontWeight={800}>{equation}</text>
				<line x1={W - 250} y1={24} x2={W - 222} y2={24} stroke={theme.accent} strokeWidth={4.5} strokeLinecap="round" />
				<text x={W - 214} y={30} fill={theme.accent} fontSize={17} fontWeight={800}>{labels[0]}</text>
				<line x1={W - 112} y1={24} x2={W - 84} y2={24} stroke={PRODUCT} strokeWidth={4.5} strokeLinecap="round" />
				<text x={W - 76} y={30} fill={PRODUCT} fontSize={17} fontWeight={800}>{labels[1]}</text>
			</g>
			{specs.map((s, k) => {
				const at = panelBeats[k];
				const [ox, oy] = origin[k];
				const inn = ramp(frame, at, 14);
				const r = sims[k];
				const GX0 = ox + 30, GX1 = ox + PW - 18, GY0 = oy + 70, GY1 = oy + PH - 22;
				const gx = (i: number) => GX0 + 6 + (i / N) * (GX1 - GX0 - 14);
				const gy = (v: number) => GY1 - (v / yMax) * (GY1 - GY0);
				const pen = Math.floor(interpolate(frame, [at + 10, at + 100], [0, N], clamp));
				const path = (arr: Float64Array) => {
					const pts: string[] = [];
					for (let i = 0; i <= pen; i += 2) pts.push(`${i ? 'L' : 'M'} ${gx(i).toFixed(1)} ${gy(arr[i]).toFixed(1)}`);
					pts.push(`L ${gx(pen).toFixed(1)} ${gy(arr[pen]).toFixed(1)}`);
					return pts.join(' ');
				};
				const col = s.amber ? TOK.amber : TOK.rule;
				const iEq = s.events.length ? flatAfter(r, iD + 1, 0.0006) : iD;
				return (
					<g key={k} opacity={inn} transform={`translate(0 ${(1 - inn) * 8})`}>
						<rect x={ox} y={oy} width={PW} height={PH} rx={14} fill="#ffffff" stroke={col} strokeWidth={s.amber ? 2.5 + pulse : 2} />
						<text x={ox + 16} y={oy + 28} fill={s.amber ? TOK.amberInk : TOK.ink} fontSize={19} fontWeight={800}>{s.title}</text>
						<text x={ox + 16} y={oy + 51} fill={s.amber ? TOK.amberInk : theme.accent} fontSize={17} fontWeight={700}>→ {s.meaning}</text>
						{/* re-equilibration band */}
						{s.events.length > 0 && (
							<g opacity={ramp(frame, bothAt, 14)}>
								<rect x={gx(iD)} y={GY0} width={Math.max(0, gx(iEq) - gx(iD))} height={GY1 - GY0} fill={theme.accent} opacity={0.08} />
								<text x={gx(iD) + 4} y={GY1 - 6} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{s.drift ? 'drift' : 're-equilibrates'}</text>
							</g>
						)}
						<line x1={gx(iD)} y1={GY0 - 4} x2={gx(iD)} y2={GY1} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 5" opacity={ramp(frame, at + 40, 10)} />
						<Axes x0={GX0} y0={GY0 - 4} x1={GX1} y1={GY1} size={15} />
						<text x={GX0 - 8} y={(GY0 + GY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} transform={`rotate(-90 ${GX0 - 8} ${(GY0 + GY1) / 2})`}>conc.</text>
						<path d={path(r.A)} fill="none" stroke={theme.accent} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
						<path d={path(r.B)} fill="none" stroke={PRODUCT} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
					</g>
				);
			})}
		</svg>
	);
};
