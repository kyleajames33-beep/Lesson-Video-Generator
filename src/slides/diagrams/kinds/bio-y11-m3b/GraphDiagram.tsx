// GraphDiagram (bio11m3Graph) — a graph that draws itself on a stone slab,
// with a glossy bead riding each pen.
//
// Series are either explicit `points` (the lesson's own data, plotted to
// scale) or a `curve` the component computes:
//   logistic  K / (1 + e^(−r(t − t0)))            S-shaped growth to K
//   cycle     mean + amp·sin(2π(t − phase)/period)  a population cycle
//   decline   start·e^(−k(t − t0)) after t0          a population dying out
// `kLines` draw a dashed ceiling (carrying capacity) over an x-range, so a K
// that moves is drawn as separate segments. `markers` are labelled vertical
// events (a drought, a virus release); `lag` is a bracket between two x
// values (e.g. prey peak → predator peak), measured from the props.
// `bars` draws a categorical bar chart instead (values from props, printed on
// the bars). `panels` puts two small graphs side by side on the same axes
// (e.g. grown separately vs grown together).
// Axis numbers appear only where `ticks` are given; qualitative graphs carry
// no invented numbers.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Footer, H, Pill, Title, W, clamp, easeT, fadeAt, type FooterLine} from './shared';
import {EcoGloss} from './icons';

type Curve =
	| {type: 'logistic'; K: number; r: number; t0: number; floor?: number}
	| {type: 'cycle'; mean: number; amp: number; period: number; phase?: number}
	| {type: 'decline'; start: number; k: number; t0: number};
type Tone = 'accent' | 'warm' | 'teal' | 'amber' | 'grey';
export type GraphSeries = {label: string; points?: [number, number][]; curve?: Curve; at: number; dur?: number; tone?: Tone; dashed?: boolean; labelAt?: number; labelDy?: number};
type Axis = {label: string; min: number; max: number; ticks?: number[]; unit?: string};
type Panel = {title?: string; series: GraphSeries[]; kLines?: KLine[]; markers?: Marker[]};
type KLine = {y: number; label?: string; from?: number; to?: number; at: number; amber?: boolean};
type Marker = {x: number; text: string; at: number; amber?: boolean};
export type GraphProps = {
	title?: string;
	x: Axis;
	y: Axis;
	series?: GraphSeries[];
	kLines?: KLine[];
	markers?: Marker[];
	lag?: {x1: number; x2: number; y: number; text: string; at: number};
	bars?: {categories: string[]; values: number[]; at: number; step?: number; amberIndex?: number; decimals?: number};
	panels?: Panel[];
	notes?: {text: string; x: number; y: number; at: number; amber?: boolean}[];
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3graph';

const evalCurve = (c: Curve, t: number) => {
	switch (c.type) {
		case 'logistic':
			return (c.floor ?? 0) + (c.K - (c.floor ?? 0)) / (1 + Math.exp(-c.r * (t - c.t0)));
		case 'cycle':
			return c.mean + c.amp * Math.sin((2 * Math.PI * (t - (c.phase ?? 0))) / c.period);
		case 'decline':
			return t < c.t0 ? c.start : c.start * Math.exp(-c.k * (t - c.t0));
	}
};

const seriesPoints = (s: GraphSeries, x: Axis): [number, number][] => {
	if (s.points) return s.points;
	if (!s.curve) return [];
	const n = 90;
	return Array.from({length: n + 1}, (_, i) => {
		const t = x.min + ((x.max - x.min) * i) / n;
		return [t, evalCurve(s.curve!, t)];
	});
};

export const GraphDiagram = ({title, x, y, series = [], kLines = [], markers = [], lag, bars, panels, notes = [], footer = [], delay = 62}: GraphProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const toneCol = (t?: Tone) => (t === 'warm' ? '#c0562e' : t === 'teal' ? '#1f8a7a' : t === 'amber' ? TOK.amber : t === 'grey' ? '#8a8a8a' : theme.accent);
	const top = title ? 50 : 10;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const list: Panel[] = panels ?? [{series, kLines, markers}];
	const pw = (W - 20) / list.length;
	const pulse = idlePulse(frame);

	const renderPanel = (p: Panel, pi: number) => {
		const x0 = 10 + pi * pw;
		const L = x0 + (pi === 0 ? 74 : 40);
		const R = x0 + pw - 22;
		const T = top + (p.title ? 40 : 18);
		const B = H - footH - 64;
		const X = (v: number) => L + ((v - x.min) / (x.max - x.min)) * (R - L);
		const Y = (v: number) => B - ((v - y.min) / (y.max - y.min)) * (B - T);
		const axisOn = fadeAt(frame, 0, 14);
		return (
			<g key={pi}>
				{/* stone slab */}
				<rect x={x0 + 4} y={T - 12} width={pw - 8} height={B - T + 70} rx={14} fill="#eeebe5" stroke="#d3cfc7" strokeWidth={2} opacity={axisOn} />
				<rect x={x0 + 4} y={B + 50} width={pw - 8} height={10} rx={4} fill="#c7c2b9" opacity={axisOn} />
				{p.title && <text x={(L + R) / 2} y={top + 22} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800} opacity={axisOn}>{p.title}</text>}
				<g opacity={axisOn}>
					<line x1={L} y1={B} x2={R} y2={B} stroke={TOK.inkDim} strokeWidth={2.5} />
					<line x1={L} y1={B} x2={L} y2={T} stroke={TOK.inkDim} strokeWidth={2.5} />
					{(x.ticks ?? []).map((tv) => (
						<g key={tv}>
							<line x1={X(tv)} y1={B} x2={X(tv)} y2={B + 6} stroke={TOK.inkDim} strokeWidth={2} />
							<text x={X(tv)} y={B + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{tv}</text>
						</g>
					))}
					{(y.ticks ?? []).map((tv) => (
						<g key={tv}>
							<line x1={L - 6} y1={Y(tv)} x2={L} y2={Y(tv)} stroke={TOK.inkDim} strokeWidth={2} />
							<text x={L - 10} y={Y(tv) + 5} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{tv}</text>
						</g>
					))}
					<text x={(L + R) / 2} y={B + 44} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{x.label}</text>
					{pi === 0 && <text x={x0 + 20} y={(T + B) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} transform={`rotate(-90 ${x0 + 20} ${(T + B) / 2})`}>{y.label}</text>}
				</g>
				{/* K lines */}
				{(p.kLines ?? []).map((k, i) => {
					const o = fadeAt(frame, k.at, 14);
					const xa = X(k.from ?? x.min);
					const xb = X(k.to ?? x.max);
					const col = k.amber ? TOK.amber : TOK.inkDim;
					return (
						<g key={i} opacity={o}>
							<line x1={xa} y1={Y(k.y)} x2={xa + (xb - xa) * interpolate(frame, [k.at, k.at + 20], [0, 1], clamp)} y2={Y(k.y)} stroke={col} strokeWidth={k.amber ? 3 + pulse : 2.5} strokeDasharray="9 7" />
							{k.label && <text x={xb - 4} y={Y(k.y) - 8} textAnchor="end" fill={k.amber ? TOK.amberInk : TOK.inkDim} fontSize={15} fontWeight={800}>{k.label}</text>}
						</g>
					);
				})}
				{/* markers */}
				{(p.markers ?? []).map((m, i) => {
					const o = fadeAt(frame, m.at, 14);
					return (
						<g key={i} opacity={o}>
							<line x1={X(m.x)} y1={B} x2={X(m.x)} y2={T + 18} stroke={m.amber ? TOK.amber : TOK.inkMute} strokeWidth={2.5} strokeDasharray="4 5" />
							<Pill x={X(m.x)} y={T + 8} text={m.text} size={14} color={m.amber ? TOK.amber : TOK.inkDim} textColor={m.amber ? TOK.amberInk : TOK.inkDim} />
						</g>
					);
				})}
				{/* series */}
				{p.series.map((s, si) => {
					const pts = seriesPoints(s, x);
					if (pts.length < 2) return null;
					const dur = s.dur ?? 90;
					const t = easeT(frame, s.at, s.at + dur);
					if (t <= 0) return null;
					const upto = t * (pts.length - 1);
					const whole = Math.floor(upto);
					const drawn = pts.slice(0, whole + 1).map(([a, b2]) => [X(a), Y(b2)] as [number, number]);
					if (whole < pts.length - 1) {
						const f = upto - whole;
						const [a0, b0] = pts[whole];
						const [a1, b1] = pts[whole + 1];
						drawn.push([X(a0 + (a1 - a0) * f), Y(b0 + (b1 - b0) * f)]);
					}
					const d = drawn.map((q, i) => `${i ? 'L' : 'M'} ${q[0]} ${q[1]}`).join(' ');
					const col = toneCol(s.tone);
					const tip = drawn[drawn.length - 1];
					const last = drawn[drawn.length - 1];
					const lx = s.labelAt !== undefined ? X(s.labelAt) : last[0];
					const ly = s.labelAt !== undefined ? Y(evalOrPts(s, x, s.labelAt)) : last[1];
					return (
						<g key={si}>
							<path d={d} fill="none" stroke={col} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={s.dashed ? '10 7' : undefined} />
							{s.points && s.points.length <= 8 && s.points.map(([a, b2], k) => (k <= whole ? <circle key={k} cx={X(a)} cy={Y(b2)} r={4.5} fill={col} /> : null))}
							<circle cx={tip[0]} cy={tip[1] + (t >= 1 ? idleBob(frame, si, 1.2) : 0)} r={8} fill={`url(#${ID}-ball-${s.tone === 'warm' ? 'red' : s.tone === 'teal' ? 'algae' : s.tone === 'amber' ? 'marked' : s.tone === 'grey' ? 'grey' : 'dna1'})`} stroke="#fff" strokeWidth={1.5} />
							{t >= 1 && s.label && <text x={Math.min(R - 4, lx + 6)} y={ly + (s.labelDy ?? -12)} textAnchor={lx > R - 90 ? 'end' : 'start'} fill={col} fontSize={16} fontWeight={800} opacity={fadeAt(frame, s.at + dur, 12)}>{s.label}</text>}
						</g>
					);
				})}
			</g>
		);
	};

	// bars mode
	if (bars) {
		const L = 90;
		const R = W - 30;
		const T = top + 20;
		const B = H - footH - 64;
		const n = bars.categories.length;
		const slot = (R - L) / n;
		const bw = Math.min(90, slot * 0.6);
		const Y = (v: number) => B - ((v - y.min) / (y.max - y.min)) * (B - T);
		const step = bars.step ?? 18;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Bar chart'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<EcoGloss id={ID} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				<rect x={L - 70} y={T - 14} width={R - L + 84} height={B - T + 72} rx={14} fill="#eeebe5" stroke="#d3cfc7" strokeWidth={2} />
				<line x1={L} y1={B} x2={R} y2={B} stroke={TOK.inkDim} strokeWidth={2.5} />
				<line x1={L} y1={B} x2={L} y2={T} stroke={TOK.inkDim} strokeWidth={2.5} />
				{(y.ticks ?? []).map((tv) => (
					<g key={tv}>
						<line x1={L - 6} y1={Y(tv)} x2={L} y2={Y(tv)} stroke={TOK.inkDim} strokeWidth={2} />
						<text x={L - 10} y={Y(tv) + 5} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{tv}</text>
					</g>
				))}
				<text x={L - 54} y={(T + B) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} transform={`rotate(-90 ${L - 54} ${(T + B) / 2})`}>{y.label}</text>
				<text x={(L + R) / 2} y={B + 48} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{x.label}</text>
				{bars.categories.map((c, i) => {
					const v = bars.values[i];
					const at = bars.at + i * step;
					const g = easeT(frame, at, at + 22);
					const cxm = L + slot * (i + 0.5);
					const top2 = Y(y.min + (v - y.min) * g);
					const amber = bars.amberIndex === i;
					return (
						<g key={i}>
							<rect x={cxm - bw / 2} y={top2} width={bw} height={B - top2} rx={6} fill={amber ? TOK.amber : theme.accent} opacity={amber ? 0.75 + 0.25 * pulse : 0.88} />
							<text x={cxm} y={B + 24} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800} opacity={fadeAt(frame, at, 10)}>{c}</text>
							<text x={cxm} y={top2 - 10} textAnchor="middle" fill={amber ? TOK.amberInk : TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, at + 18, 10)}>{v.toFixed(bars.decimals ?? 0)}{y.unit ?? ''}</text>
						</g>
					);
				})}
				{notes.map((nt, i) => (
					<text key={i} x={nt.x} y={nt.y} textAnchor="middle" fill={nt.amber ? TOK.amberInk : TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, nt.at, 12)}>{nt.text}</text>
				))}
				<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
			</svg>
		);
	}

	// lag bracket (single panel only)
	const lagEl = lag && !panels && (() => {
		const L = 84;
		const R = W - 32;
		const T = top + 18;
		const B = H - footH - 64;
		const X = (v: number) => L + ((v - x.min) / (x.max - x.min)) * (R - L);
		const Yv = (v: number) => B - ((v - y.min) / (y.max - y.min)) * (B - T);
		const o = fadeAt(frame, lag.at, 14);
		const yy = Yv(lag.y);
		return (
			<g opacity={o}>
				<line x1={X(lag.x1)} y1={yy - 30} x2={X(lag.x1)} y2={B} stroke={TOK.amber} strokeWidth={2} strokeDasharray="4 4" />
				<line x1={X(lag.x2)} y1={yy - 30} x2={X(lag.x2)} y2={B} stroke={TOK.amber} strokeWidth={2} strokeDasharray="4 4" />
				<path d={`M ${X(lag.x1)} ${yy} L ${X(lag.x2)} ${yy}`} stroke={TOK.amber} strokeWidth={4} />
				<path d={`M ${X(lag.x2) - 10} ${yy - 6} L ${X(lag.x2)} ${yy} L ${X(lag.x2) - 10} ${yy + 6}`} stroke={TOK.amber} strokeWidth={4} fill="none" />
				<Pill x={(X(lag.x1) + X(lag.x2)) / 2} y={yy - 26} text={lag.text} size={15} color={TOK.amber} textColor={TOK.amberInk} />
			</g>
		);
	})();

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Graph'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{list.map((p, i) => renderPanel(p, i))}
			{lagEl}
			{notes.map((nt, i) => (
				<text key={i} x={nt.x} y={nt.y} textAnchor="middle" fill={nt.amber ? TOK.amberInk : TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, nt.at, 12)}>{nt.text}</text>
			))}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};

const evalOrPts = (s: GraphSeries, x: Axis, at: number) => {
	if (s.curve) return evalCurve(s.curve, at);
	const pts = seriesPoints(s, x);
	let best = pts[0];
	for (const p of pts) if (Math.abs(p[0] - at) < Math.abs(best[0] - at)) best = p;
	return best[1];
};

