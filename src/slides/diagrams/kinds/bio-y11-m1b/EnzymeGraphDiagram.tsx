// EnzymeGraphDiagram (bio11m1bEnzymeGraph): illustrative enzyme-rate curves,
// drawn by a pen in step with the narration, with the active site shown in an
// inset beside the graph.
//
// factor 'temperature'  rate doubles every 10 °C below the optimum (a gentle
//                       rise), then an imposed quadratic fall to `zeroAt`.
//                       This shape alone does not establish denaturation.
// factor 'ph'           a bell curve around each series' optimum pH; two
//                       series allowed (e.g. pepsin at 2, a cytoplasmic enzyme
//                       at 7). Ticks 0–14.
// factor 'substrate'    rate = Vmax·S/(K + S): rises, then plateaus
//                       (saturation). Optional second line with double the
//                       active enzyme (2·Vmax), under otherwise fixed conditions.
// factor 'trio'         all three shapes as small panels, one after another.
//
// Every curve is computed from these formulas and the props (optimum, zeroAt,
// width), so the optimum sits exactly where the label says. Axes carry no
// rate numbers (the site's graphs give none). Inset: the enzyme's state at the
// pen's position (colliding slowly / binding fast / denatured, or how many of
// three active sites are busy). Hold: a reading cursor glides along the curve
// and the inset follows it (re-reading, no new information).
//
// Props: `factor`, `optimum`, `zeroAt`, `series` (ph), `moreEnzyme` (beat),
// `notes` [{text, x (data units), at, tone?}], `at`: axes / draw / optimum /
// rule; `rule` text.

import type {ReactNode} from 'react';
import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {fadeAt, ease, lerp, mix, shade, CORAL, SLATE, Ledge} from './shared';
import {enzymePath, substratePath, FIT} from './EnzymeDiagram';
import {temperatureRate as tempRate, phRate, substrateRate as subRate, enzymeInsetState} from '../../scientific-models.mjs';

type Note = {text: string; x: number; at?: number; tone?: 'accent' | 'coral' | 'amber' | 'ink'; dy?: number; dx?: number; r?: number};
export type EnzymeGraphProps = {
	factor?: 'temperature' | 'ph' | 'substrate' | 'trio';
	optimum?: number;
	zeroAt?: number;
	series?: {label: string; optimum: number; at?: number}[];
	moreEnzyme?: number;
	notes?: Note[];
	at?: {axes?: number; draw?: number; drawEnd?: number; optimum?: number; rule?: number; temperature?: number; ph?: number; substrate?: number};
	inset?: boolean;
	/** Distortion is an assumed mechanism, never inferred from the plotted rate. */
	temperatureMechanism?: 'activity-only' | 'denaturation';
	rule?: string;
	delay?: number;
};

const ID = 'b11m1bEg';
const W = 760, H = 530;
const DRAW = 110;

type Box = {x0: number; x1: number; y0: number; y1: number};
const toneCol = (t: Note['tone'], accent: string) => (t === 'coral' ? CORAL : t === 'amber' ? TOK.amberInk : t === 'ink' ? TOK.ink : accent);

/** Axes + a list of curves (each fn over [xMin, xMax] → 0..1), drawn by a pen. */
const Graph = ({box, xMin, xMax, ticks, xLabel, curves, frame, tAx, notes = [], accent, cursor, drawLen = DRAW}: {
	box: Box; xMin: number; xMax: number; ticks?: {v: number; label: string}[]; xLabel: string;
	curves: {fn: (x: number) => number; at: number; color: string; dash?: string; label?: string; labelAt?: number; width?: number}[];
	frame: number; tAx: number; notes?: Note[]; accent: string; cursor?: number | null; drawLen?: number;
}) => {
	const gx = (v: number) => box.x0 + ((v - xMin) / (xMax - xMin)) * (box.x1 - box.x0);
	const gy = (r: number) => box.y1 - r * (box.y1 - box.y0) * 0.86;
	const out: ReactNode[] = [];
	curves.forEach((c, ci) => {
		const prog = ci === 0 ? Math.min(1, Math.max(0, (frame - c.at) / drawLen)) : ease(frame, c.at, c.at + DRAW);
		if (prog <= 0) return;
		let d = '';
		const N = 120;
		for (let i = 0; i <= N * prog; i++) {
			const v = xMin + ((xMax - xMin) * i) / N;
			d += `${i === 0 ? 'M' : ' L'} ${gx(v).toFixed(1)} ${gy(c.fn(v)).toFixed(1)}`;
		}
		const penV = xMin + (xMax - xMin) * prog;
		out.push(
			<g key={ci}>
				<path d={d} fill="none" stroke={c.color} strokeWidth={c.width ?? 5} strokeDasharray={c.dash} strokeLinecap="round" strokeLinejoin="round" />
				{prog < 1 && <circle cx={gx(penV)} cy={gy(c.fn(penV))} r={7} fill={c.color} stroke="#ffffff" strokeWidth={2} />}
				{c.label && <text x={gx(c.labelAt ?? xMax)} y={gy(c.fn(c.labelAt ?? xMax)) - 14} textAnchor="middle" fill={c.color} fontSize={15} fontWeight={800} opacity={fadeAt(frame, c.at + (ci === 0 ? drawLen : DRAW) - 20)}>{c.label}</text>}
			</g>,
		);
	});
	return (
		<g>
			<g opacity={fadeAt(frame, tAx)}>
				<line x1={box.x0} y1={box.y1} x2={box.x1 + 6} y2={box.y1} stroke={TOK.inkMute} strokeWidth={2.5} />
				<line x1={box.x0} y1={box.y1} x2={box.x0} y2={box.y0 - 8} stroke={TOK.inkMute} strokeWidth={2.5} />
				<text x={box.x0 - 12} y={(box.y0 + box.y1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} transform={`rotate(-90 ${box.x0 - 12} ${(box.y0 + box.y1) / 2})`}>rate of reaction</text>
				<text x={(box.x0 + box.x1) / 2} y={box.y1 + (ticks ? 46 : 26)} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{xLabel}</text>
				{ticks?.map((t) => (
					<g key={t.v}>
						<line x1={gx(t.v)} y1={box.y1} x2={gx(t.v)} y2={box.y1 + 6} stroke={TOK.inkMute} strokeWidth={2} />
						<text x={gx(t.v)} y={box.y1 + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{t.label}</text>
					</g>
				))}
			</g>
			{out}
			{cursor !== null && cursor !== undefined && curves[0] && (
				<g>
					<line x1={gx(cursor)} y1={box.y1} x2={gx(cursor)} y2={gy(curves[0].fn(cursor))} stroke={TOK.rule} strokeWidth={2} strokeDasharray="4 4" />
					<circle cx={gx(cursor)} cy={gy(curves[0].fn(cursor))} r={7} fill="#ffffff" stroke={curves[0].color} strokeWidth={3} />
				</g>
			)}
			{notes.map((n, i) => {
				const f = curves[0]?.fn ?? (() => 0);
				const x = gx(n.x) + (n.dx ?? 0), y = gy(n.r ?? f(n.x)) - 22 + (n.dy ?? 0);
				return (
					<text key={i} x={x} y={y} textAnchor={n.dx ? 'start' : 'middle'} fill={toneCol(n.tone, accent)} fontSize={16} fontWeight={800} opacity={fadeAt(frame, n.at ?? tAx)}>{n.text}</text>
				);
			})}
		</g>
	);
};

/** Inset: one enzyme (warp 0..1) with its substrate bound (bound 0..1). */
const EnzymeInset = ({x, y, warp, bound, label, accent}: {x: number; y: number; warp: number; bound: number; label: string; accent: string}) => (
	<g>
		<Ledge x={x - 80} y={y + 34} w={160} />
		<g transform={`translate(${x},${y}) scale(0.5) translate(${-x},${-y})`}>
			<path d={enzymePath(x, y - 30, 250, 124, FIT, 'trap', warp)} fill={mix(accent, SLATE, warp * 0.5)} stroke={shade(accent, -0.3)} strokeWidth={3} />
			<path d={substratePath(x + (1 - bound) * 150, y - 30 + 44 - (1 - bound) * 110)} fill={CORAL} stroke={shade(CORAL, -0.3)} strokeWidth={3} />
		</g>
		<text x={x} y={y + 76} textAnchor="middle" fill={warp > 0.5 ? '#c0473a' : TOK.ink} fontSize={15} fontWeight={800}>{label}</text>
	</g>
);

export const EnzymeGraphDiagram = ({factor = 'temperature', optimum, zeroAt, series, moreEnzyme, notes = [], at = {}, inset = true, temperatureMechanism = 'activity-only', rule, delay = 62}: EnzymeGraphProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const tAx = at.axes ?? 0, tD = at.draw ?? 30, tR = at.rule ?? 9999;
	const pulse = idlePulse(frame, 50);
	const ruleEl = rule ? <text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, tR) * (0.82 + 0.18 * pulse)}>{rule}</text> : null;

	if (factor === 'trio') {
		const tT = at.temperature ?? 20, tP = at.ph ?? 140, tS = at.substrate ?? 260;
		const panels = [
			{t: tT, title: 'temperature', fn: (v: number) => tempRate(v, 40, 60), min: 0, max: 70, word: 'assay peak, then lower rate', label: 'temperature →'},
			{t: tP, title: 'pH', fn: (v: number) => phRate(v, 7), min: 0, max: 14, word: 'optimum pH', label: 'pH →'},
			{t: tS, title: 'substrate', fn: (v: number) => subRate(v), min: 0, max: 10, word: 'approaches a limiting rate', label: 'substrate conc. →'},
		];
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Enzyme activity against temperature, pH and substrate concentration" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<text x={W / 2} y={24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>Illustrative models, not measured data</text>
				{panels.map((p, i) => {
					const box = {x0: 50 + i * 245, x1: 50 + i * 245 + 190, y0: 130, y1: 330};
					return (
						<g key={i} opacity={fadeAt(frame, p.t - 10, 12)}>
							<rect x={box.x0 - 36} y={box.y0 - 70} width={box.x1 - box.x0 + 56} height={box.y1 - box.y0 + 130} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
							<text x={(box.x0 + box.x1) / 2} y={box.y0 - 36} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{p.title}</text>
							<Graph box={box} xMin={p.min} xMax={p.max} xLabel={p.label} curves={[{fn: p.fn, at: p.t, color: theme.accent}]} frame={frame} tAx={p.t} accent={theme.accent} />
							<text x={(box.x0 + box.x1) / 2} y={box.y1 + 90} textAnchor="middle" fill={i === 2 ? TOK.amberInk : theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, p.t + DRAW)}>{p.word}</text>
						</g>
					);
				})}
				{ruleEl}
			</svg>
		);
	}

	const box: Box = inset ? {x0: 70, x1: 520, y0: 70, y1: 390} : {x0: 80, x1: 720, y0: 70, y1: 390};
	let xMin = 0, xMax = 70, ticks: {v: number; label: string}[] | undefined, xLabel = '';
	let curves: {fn: (x: number) => number; at: number; color: string; dash?: string; label?: string; labelAt?: number}[] = [];
	let insetState: (v: number) => {warp: number; bound: number; label: string};
	const opt = optimum ?? (factor === 'ph' ? 7 : 40);
	const zero = zeroAt ?? 60;
	if (factor === 'temperature') {
		xMax = 70; xLabel = 'temperature (°C)';
		ticks = [0, 10, 20, 30, 40, 50, 60, 70].map((v) => ({v, label: `${v}`}));
		curves = [{fn: (v) => tempRate(v, opt, zero), at: tD, color: theme.accent}];
		insetState = (v) => enzymeInsetState('temperature', v, opt, zero, temperatureMechanism === 'denaturation');
	} else if (factor === 'ph') {
		xMax = 14; xLabel = 'pH';
		ticks = [0, 2, 4, 6, 7, 8, 10, 12, 14].filter((v) => v !== 6 && v !== 8).map((v) => ({v, label: `${v}`}));
		const ss = series?.length ? series : [{label: 'enzyme', optimum: opt, at: tD}];
		curves = ss.map((s, i) => ({fn: (v: number) => phRate(v, s.optimum), at: s.at ?? tD, color: i === 0 ? theme.accent : CORAL, label: s.label, labelAt: s.optimum}));
		const o0 = ss[0].optimum;
		insetState = (v) => enzymeInsetState('ph', v, o0);
	} else {
		xMax = 10; xLabel = 'substrate concentration →';
		const top = moreEnzyme !== undefined ? 2 : 1;
		curves = [{fn: (v) => subRate(v) / top, at: tD, color: theme.accent, label: 'fixed amount of enzyme', labelAt: 6.6}];
		if (moreEnzyme !== undefined) curves.push({fn: (v) => subRate(v, 2) / top, at: moreEnzyme, color: CORAL, dash: '10 8', label: 'double active enzyme', labelAt: 6.6});
		insetState = (v) => enzymeInsetState('substrate', v);
	}

	const drawLen = at.drawEnd !== undefined ? Math.max(40, at.drawEnd - tD) : DRAW;
	const lastAt = Math.max(curves[0].at + drawLen, ...curves.slice(1).map((c) => c.at + DRAW)) + 20;
	const cursor = frame > lastAt ? xMin + (xMax - xMin) * (0.5 - 0.46 * Math.cos((frame - lastAt) / 70)) : null;
	const penV = xMin + (xMax - xMin) * Math.min(1, Math.max(0, (frame - curves[0].at) / drawLen));
	const readV = cursor ?? penV;
	const st = insetState(readV);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Enzyme activity against ${factor}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<text x={W / 2} y={24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>Illustrative assay model; other conditions fixed</text>
			<Graph box={box} xMin={xMin} xMax={xMax} ticks={ticks} xLabel={xLabel} curves={curves} frame={frame} tAx={tAx} notes={notes} accent={theme.accent} cursor={cursor} drawLen={drawLen} />
			{/* optimum marker */}
			{factor !== 'substrate' && at.optimum !== undefined && (() => {
				const gx = box.x0 + ((opt - xMin) / (xMax - xMin)) * (box.x1 - box.x0);
				return (
					<g opacity={fadeAt(frame, at.optimum)}>
						<line x1={gx} y1={box.y1} x2={gx} y2={box.y0 + 8} stroke={TOK.amber} strokeWidth={3} strokeDasharray="6 5" />
						<text x={gx} y={box.y0 - 2} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={0.8 + 0.2 * pulse}>optimum{factor === 'temperature' ? ` ${opt} °C` : factor === 'ph' && !series ? ` pH ${opt}` : ''}</text>
					</g>
				);
			})()}
			{inset && (
				<g opacity={fadeAt(frame, tD)}>
					<EnzymeInset x={640} y={220} warp={st.warp} bound={st.bound} label={st.label} accent={theme.accent} />
				</g>
			)}
			{ruleEl}
		</svg>
	);
};
