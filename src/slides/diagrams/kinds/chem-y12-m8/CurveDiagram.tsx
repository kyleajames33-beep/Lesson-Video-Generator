// CurveDiagram — a graph that draws itself in step with the narration
// (Chem Y12 M8: titration curves, calibration lines, HPLC chromatograms).
//
// Everything plotted is either given as points in the lesson JSON or computed
// here from real chemistry, so the picture can't drift from the numbers:
//   • `titration` series solve the exact charge balance for a strong or weak
//     monoprotic acid titrated with a strong base (Kw = 1.0 × 10⁻¹⁴, 25 °C);
//   • `peaks` series are Gaussian detector peaks (retention time, height, width);
//   • `line` series are y = m·x (a Beer–Lambert calibration through the origin).
// Optional parts, each on its own beat: shaded bands (indicator ranges, a
// calibrated range), reference lines, standard points, a read-off (across to
// the line, then down), notes, and a row of standard cuvettes on a stone plinth
// above the graph whose colour deepens with concentration.
//
// Beats are frames after `delay` (default 62, when ConceptSlide reveals the card).

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Flask, Mark, clamp, pop, ramp, textW} from './shared';

type Pt = [number, number];
type TitrationGen = {type: 'titration'; weak?: boolean; pKa?: number; ca: number; va: number; cb: number; vmax: number};
type PeaksGen = {type: 'peaks'; peaks: {t: number; h: number; w: number}[]; base?: number; from: number; to: number};
type LineGen = {type: 'line'; slope: number; from: number; to: number};
type ColorName = 'accent' | 'amber' | 'ink' | 'mute' | 'blue';

export type CurveSeries = {
	points?: Pt[];
	gen?: TitrationGen | PeaksGen | LineGen;
	color?: ColorName;
	width?: number;
	dash?: string;
	label?: string;
	/** Where the label sits, in data coordinates (defaults to the end of the line). */
	labelAt?: Pt;
	labelAnchor?: 'start' | 'middle' | 'end';
	beat: number;
	/** Frames the pen takes to draw the series (default 90). */
	dur?: number;
};
export type CurveBand = {
	axis: 'x' | 'y';
	from: number;
	to: number;
	label?: string;
	sub?: string;
	/** Two colours: a gradient across the band (e.g. an indicator's colour change). */
	colors?: [string, string];
	color?: ColorName;
	/** Label position along the other axis, in data coordinates. */
	labelPos?: number;
	labelAnchor?: 'start' | 'middle' | 'end';
	beat: number;
	/** Beat at which the band turns amber-outlined (the answer). */
	highlightBeat?: number;
	/** Beat at which a ✓ or ✗ appears beside the band label. */
	mark?: 'tick' | 'cross';
	markBeat?: number;
};
export type CurveRef = {axis: 'x' | 'y'; value: number; label?: string; beat: number; color?: ColorName; labelPos?: number};
export type CurvePoint = {x: number; y: number; label?: string; beat: number};
export type CurveReadoff = {x: number; y: number; beat: number; yLabel?: string; xLabel?: string; color?: ColorName};
export type CurveNote = {x: number; y: number; text: string; sub?: string; beat: number; color?: ColorName; anchor?: 'start' | 'middle' | 'end'; size?: number; mark?: 'tick' | 'cross'};
export type CurveTick = {value: number; label: string};
export type CurveCuvettes = {items: {label: string; strength: number; beat: number; unknown?: boolean}[]; color: string; title?: string};

/** A flask on a plinth whose liquid takes an indicator band's colour at the live pH of a series' pen. */
export type CurveFlask = {x: number; y: number; stages: {beat: number; series: number; band: number}[]; label?: string};

export type CurveProps = {
	delay?: number;
	title?: string;
	titleBeat?: number;
	xLabel?: string;
	yLabel?: string;
	xMin?: number;
	xMax?: number;
	yMin?: number;
	yMax?: number;
	xTicks?: CurveTick[];
	yTicks?: CurveTick[];
	series?: CurveSeries[];
	bands?: CurveBand[];
	refs?: CurveRef[];
	points?: CurvePoint[];
	readoffs?: CurveReadoff[];
	notes?: CurveNote[];
	cuvettes?: CurveCuvettes;
	/** Index into `series` whose pen keeps a gently pulsing dot at its end during the hold. */
	penSeries?: number;
	flask?: CurveFlask;
};

const ID = 'c12m8curve';
const W = 760;
const H = 530;
const KW = 1e-14;

// ── Chemistry generators ────────────────────────────────────────────────────
/** pH after adding vb mL of strong base (cb M) to va mL of acid (ca M): exact charge balance. */
const titrationPH = (g: TitrationGen, vb: number) => {
	const V = (g.va + vb) / 1000;
	const na = (g.ca * g.va) / 1000;
	const nb = (g.cb * vb) / 1000;
	const Na = nb / V;
	if (!g.weak) {
		const d = (na - nb) / V; // [H⁺] − [OH⁻]
		const h = (d + Math.sqrt(d * d + 4 * KW)) / 2;
		return -Math.log10(h);
	}
	const Ka = Math.pow(10, -(g.pKa ?? 4.76));
	const Ct = na / V;
	// f(h) = h + Na − Ct·Ka/(Ka + h) − Kw/h is increasing in h: bisect on log h.
	let lo = -14.5, hi = 0.5;
	for (let i = 0; i < 70; i++) {
		const mid = (lo + hi) / 2;
		const h = Math.pow(10, mid);
		const f = h + Na - (Ct * Ka) / (Ka + h) - KW / h;
		if (f > 0) hi = mid;
		else lo = mid;
	}
	return -(lo + hi) / 2;
};

const seriesPoints = (s: CurveSeries): Pt[] => {
	if (s.points) return s.points;
	const g = s.gen;
	if (!g) return [];
	if (g.type === 'line') return [[g.from, g.slope * g.from], [g.to, g.slope * g.to]];
	if (g.type === 'peaks') {
		const n = 320;
		return Array.from({length: n + 1}, (_, i) => {
			const t = g.from + ((g.to - g.from) * i) / n;
			const y = g.peaks.reduce((acc, p) => acc + p.h * Math.exp(-((t - p.t) ** 2) / (2 * p.w * p.w)), g.base ?? 0);
			return [t, y] as Pt;
		});
	}
	// titration: dense near equivalence so the steep jump is smooth
	const veq = (g.ca * g.va) / g.cb;
	const xs: number[] = [];
	for (let i = 0; i <= 160; i++) xs.push((g.vmax * i) / 160);
	for (let i = -40; i <= 40; i++) xs.push(veq + i * 0.02);
	return xs
		.filter((v) => v >= 0 && v <= g.vmax)
		.sort((a, b) => a - b)
		.map((v) => [v, titrationPH(g, v)] as Pt);
};

export const CurveDiagram = ({
	delay = 62,
	title,
	titleBeat = 0,
	xLabel = '',
	yLabel = '',
	xMin = 0,
	xMax = 1,
	yMin = 0,
	yMax = 1,
	xTicks = [],
	yTicks = [],
	series = [],
	bands = [],
	refs = [],
	points = [],
	readoffs = [],
	notes = [],
	cuvettes,
	penSeries,
	flask,
}: CurveProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const col = (c: ColorName | undefined, fallback: string) =>
		c === 'amber' ? TOK.amber : c === 'ink' ? TOK.ink : c === 'mute' ? TOK.inkMute : c === 'blue' ? '#3f6fd8' : c === 'accent' ? theme.accent : fallback;
	const inkOf = (c: ColorName | undefined) => (c === 'amber' ? TOK.amberInk : col(c, TOK.ink));

	// ── Layout ──────────────────────────────────────────────────────────────
	const top = (title ? 58 : 16) + (cuvettes ? 150 : 0);
	const GX0 = 104, GX1 = 712, GY0 = top + 24, GY1 = 452;
	const gx = (x: number) => GX0 + ((x - xMin) / (xMax - xMin)) * (GX1 - GX0);
	const gy = (y: number) => GY1 - ((y - yMin) / (yMax - yMin)) * (GY1 - GY0);
	const axesIn = ramp(frame, 0, 14);

	const penY = (s: CurveSeries) => {
		const pts = seriesPoints(s);
		if (!pts.length) return undefined;
		const p = interpolate(frame, [s.beat, s.beat + (s.dur ?? 90)], [0, 1], clamp);
		const xPen = pts[0][0] + (pts[pts.length - 1][0] - pts[0][0]) * p;
		let y = pts[0][1];
		for (const q of pts) if (q[0] <= xPen) y = q[1];
		return y;
	};
	const mix = (a: string, b: string, t: number) => {
		const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
		const ch = (sh: number) => Math.round(((pa >> sh) & 255) * (1 - t) + ((pb >> sh) & 255) * t);
		return `rgb(${ch(16)},${ch(8)},${ch(0)})`;
	};
	const flaskColor = (() => {
		if (!flask) return undefined;
		const st = [...flask.stages].reverse().find((q) => frame >= q.beat);
		if (!st) return undefined;
		const b = bands[st.band], sr = series[st.series];
		if (!b?.colors || !sr) return undefined;
		const y = penY(sr);
		if (y === undefined) return undefined;
		const t = Math.max(0, Math.min(1, (y - b.from) / (b.to - b.from)));
		return mix(b.colors[0], b.colors[1], t);
	})();

	const drawSeries = (s: CurveSeries, i: number) => {
		const pts = seriesPoints(s);
		if (!pts.length) return null;
		const dur = s.dur ?? 90;
		const p = interpolate(frame, [s.beat, s.beat + dur], [0, 1], clamp);
		if (p <= 0) return null;
		const x0 = pts[0][0], x1 = pts[pts.length - 1][0];
		const xPen = x0 + (x1 - x0) * p;
		const shown: Pt[] = [];
		for (let k = 0; k < pts.length; k++) {
			if (pts[k][0] <= xPen) shown.push(pts[k]);
			else {
				const a = pts[k - 1] ?? pts[k];
				const t = a[0] === pts[k][0] ? 1 : (xPen - a[0]) / (pts[k][0] - a[0]);
				shown.push([xPen, a[1] + (pts[k][1] - a[1]) * t]);
				break;
			}
		}
		const clampY = (y: number) => Math.max(yMin, Math.min(yMax, y));
		const d = shown.map((q, k) => `${k ? 'L' : 'M'} ${gx(q[0]).toFixed(1)} ${gy(clampY(q[1])).toFixed(1)}`).join(' ');
		const color = col(s.color, theme.accent);
		const end = shown[shown.length - 1];
		const lp = s.labelAt ?? pts[pts.length - 1];
		const done = ramp(frame, s.beat + dur - 6, 12);
		const isPen = penSeries === i;
		return (
			<g key={`s${i}`}>
				<path d={d} fill="none" stroke={color} strokeWidth={s.width ?? 4.5} strokeDasharray={s.dash} strokeLinecap="round" strokeLinejoin="round" />
				{p < 1 && <circle cx={gx(end[0])} cy={gy(clampY(end[1]))} r={6} fill={color} stroke="#ffffff" strokeWidth={2} />}
				{p >= 1 && isPen && <circle cx={gx(end[0])} cy={gy(clampY(end[1]))} r={5 + idlePulse(frame) * 2.5} fill={color} stroke="#ffffff" strokeWidth={2} />}
				{s.label && (
					<text x={gx(lp[0])} y={gy(clampY(lp[1]))} textAnchor={s.labelAnchor ?? 'start'} fill={inkOf(s.color ?? 'accent')} fontSize={17} fontWeight={800} opacity={done}>
						{s.label}
					</text>
				)}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? `${yLabel} against ${xLabel}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				{bands.map((b, i) =>
					b.colors ? (
						<linearGradient key={i} id={`${ID}-band-${i}`} x1="0" x2={b.axis === 'x' ? '1' : '0'} y1={b.axis === 'y' ? '1' : '0'} y2="0">
							<stop offset="0%" stopColor={b.colors[0]} />
							<stop offset="100%" stopColor={b.colors[1]} />
						</linearGradient>
					) : null,
				)}
			</defs>

			{title && (
				<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={ramp(frame, titleBeat)}>
					{title}
				</text>
			)}

			{/* Standards (and the unknown) as cuvettes on a stone plinth */}
			{cuvettes && (
				<g opacity={ramp(frame, 0, 14)}>
					<DioramaPlinth id={ID} cx={W / 2} cy={(title ? 58 : 16) + 104} rx={300} />
					{cuvettes.items.map((c, i) => {
						const n = cuvettes.items.length;
						const cx = W / 2 + (i - (n - 1) / 2) * (480 / Math.max(1, n - 1));
						const base = (title ? 58 : 16) + 112;
						const s = pop(frame, fps, c.beat);
						const bob = idleBob(frame, i, 1.2) * ramp(frame, c.beat + 20, 20);
						return (
							<g key={i} transform={`translate(${cx},${base + bob}) scale(${Math.max(0.001, s)})`}>
								<rect x={-17} y={-78} width={34} height={78} rx={4} fill="#ffffff" fillOpacity={0.5} stroke="rgba(70,90,110,0.6)" strokeWidth={2.5} />
								<rect x={-14} y={-60} width={28} height={57} rx={2} fill={cuvettes.color} opacity={0.08 + 0.82 * c.strength} />
								<rect x={-12} y={-72} width={5} height={60} rx={2.5} fill="#ffffff" opacity={0.55} />
								<text x={0} y={-88} textAnchor="middle" fill={c.unknown ? TOK.amberInk : TOK.inkDim} fontSize={16} fontWeight={800}>
									{c.label}
								</text>
							</g>
						);
					})}
					{cuvettes.title && (
						<text x={W / 2} y={(title ? 58 : 16) + 150} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>
							{cuvettes.title}
						</text>
					)}
				</g>
			)}

			{/* Bands (behind everything) */}
			{bands.map((b, i) => {
				const o = ramp(frame, b.beat, 16);
				if (o <= 0) return null;
				const hl = b.highlightBeat !== undefined ? ramp(frame, b.highlightBeat, 14) : 0;
				const [bx0, bx1, by0, by1] =
					b.axis === 'y' ? [GX0, GX1, gy(b.to), gy(b.from)] : [gx(b.from), gx(b.to), GY0, GY1];
				const fill = b.colors ? `url(#${ID}-band-${i})` : col(b.color, theme.accent);
				const lpos = b.labelPos;
				const lx = b.axis === 'y' ? (lpos !== undefined ? gx(lpos) : GX1 - 10) : (bx0 + bx1) / 2;
				const ly = b.axis === 'y' ? (by0 + by1) / 2 + 6 : lpos !== undefined ? gy(lpos) : GY0 + 22;
				const anchor = b.labelAnchor ?? (b.axis === 'y' ? 'end' : 'middle');
				const lw = b.label ? textW(b.label, 17) : 0;
				const markX = anchor === 'end' ? lx - lw - 20 : anchor === 'start' ? lx + lw + 20 : lx + lw / 2 + 20;
				return (
					<g key={`b${i}`} opacity={o}>
						<rect x={bx0} y={by0} width={bx1 - bx0} height={by1 - by0} fill={fill} opacity={b.colors ? 0.42 : 0.12} />
						{hl > 0 && (
							<rect x={bx0 - 2} y={by0 - 2} width={bx1 - bx0 + 4} height={by1 - by0 + 4} fill="none" stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 2 * hl} opacity={hl} rx={4} />
						)}
						{b.label && (
							<text x={lx} y={ly} textAnchor={anchor} fill={hl > 0.5 ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={800} stroke="#ffffff" strokeWidth={4} paintOrder="stroke">
								{b.label}
								{b.sub && (
									<tspan fill={TOK.inkDim} fontWeight={600} fontSize={15}>
										{`  ${b.sub}`}
									</tspan>
								)}
							</text>
						)}
						{b.mark && b.markBeat !== undefined && (
							<Mark x={markX + (b.sub ? textW(`  ${b.sub}`, 15) * (anchor === 'end' ? -1 : 1) : 0)} y={ly - 6} ok={b.mark === 'tick'} size={12} opacity={ramp(frame, b.markBeat, 10)} />
						)}
					</g>
				);
			})}

			{/* Axes */}
			<g opacity={axesIn}>
				<line x1={GX0} y1={GY1} x2={GX1 + 8} y2={GY1} stroke={TOK.inkMute} strokeWidth={2.5} />
				<line x1={GX0} y1={GY0 - 8} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2.5} />
				{xTicks.map((t) => (
					<g key={`xt${t.value}`}>
						<line x1={gx(t.value)} y1={GY1} x2={gx(t.value)} y2={GY1 + 6} stroke={TOK.inkMute} strokeWidth={2} />
						<text x={gx(t.value)} y={GY1 + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={600}>
							{t.label}
						</text>
					</g>
				))}
				{yTicks.map((t) => (
					<g key={`yt${t.value}`}>
						<line x1={GX0 - 6} y1={gy(t.value)} x2={GX0} y2={gy(t.value)} stroke={TOK.inkMute} strokeWidth={2} />
						<text x={GX0 - 11} y={gy(t.value) + 6} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={600}>
							{t.label}
						</text>
					</g>
				))}
				<text x={(GX0 + GX1) / 2} y={GY1 + 52} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>
					{xLabel}
				</text>
				<text x={GX0 - 58} y={(GY0 + GY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} transform={`rotate(-90 ${GX0 - 58} ${(GY0 + GY1) / 2})`}>
					{yLabel}
				</text>
			</g>

			{/* Reference lines */}
			{refs.map((r, i) => {
				const o = ramp(frame, r.beat, 14);
				if (o <= 0) return null;
				const c = col(r.color, TOK.inkMute);
				const isY = r.axis === 'y';
				const x1 = isY ? GX0 : gx(r.value), x2 = isY ? GX1 : gx(r.value);
				const y1 = isY ? gy(r.value) : GY0, y2 = isY ? gy(r.value) : GY1;
				return (
					<g key={`r${i}`} opacity={o}>
						<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={2.5} strokeDasharray="7 7" />
						{r.label && (
							<text
								x={isY ? (r.labelPos !== undefined ? gx(r.labelPos) : GX0 + 10) : x1 + 8}
								y={isY ? y1 - 9 : r.labelPos !== undefined ? gy(r.labelPos) : GY0 + 16}
								fill={inkOf(r.color ?? 'mute')}
								fontSize={16}
								fontWeight={800}
								stroke="#ffffff"
								strokeWidth={4}
								paintOrder="stroke"
							>
								{r.label}
							</text>
						)}
					</g>
				);
			})}

			{series.map(drawSeries)}

			{/* Standard points */}
			{points.map((pt, i) => {
				const s = pop(frame, fps, pt.beat);
				if (s <= 0.001) return null;
				return (
					<g key={`p${i}`} transform={`translate(${gx(pt.x)},${gy(pt.y)}) scale(${s})`}>
						<circle r={8 + idlePulse(frame + i * 11, 70) * 1.2} fill="#ffffff" stroke={theme.accent} strokeWidth={3.5} />
						<circle r={3.5} fill={theme.accent} />
						{pt.label && (
							<text x={-12} y={-12} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={700}>
								{pt.label}
							</text>
						)}
					</g>
				);
			})}

			{/* Read-offs: across from the y-axis to the line, then down to the x-axis */}
			{readoffs.map((r, i) => {
				const across = interpolate(frame, [r.beat, r.beat + 30], [0, 1], clamp);
				const down = interpolate(frame, [r.beat + 34, r.beat + 60], [0, 1], clamp);
				if (across <= 0) return null;
				const c = col(r.color ?? 'amber', TOK.amber);
				const ink = inkOf(r.color ?? 'amber');
				const X = gx(r.x), Y = gy(r.y);
				const pulse = idlePulse(frame) * ramp(frame, r.beat + 60, 20);
				return (
					<g key={`ro${i}`}>
						<line x1={GX0} y1={Y} x2={GX0 + (X - GX0) * across} y2={Y} stroke={c} strokeWidth={3.5} strokeDasharray="9 7" />
						{down > 0 && <line x1={X} y1={Y} x2={X} y2={Y + (GY1 - Y) * down} stroke={c} strokeWidth={3.5} strokeDasharray="9 7" />}
						<circle cx={GX0} cy={Y} r={7} fill={c} />
						{down >= 1 && <circle cx={X} cy={GY1} r={7 + pulse * 3} fill={c} />}
						{across >= 1 && <circle cx={X} cy={Y} r={7} fill="#ffffff" stroke={c} strokeWidth={3.5} />}
						{r.yLabel && (
							<text x={GX0 + 12} y={Y - 12} fill={ink} fontSize={17} fontWeight={800} stroke="#ffffff" strokeWidth={4} paintOrder="stroke">
								{r.yLabel}
							</text>
						)}
						{r.xLabel && (
							<text x={X + 12} y={GY1 - 14} fill={ink} fontSize={17} fontWeight={800} opacity={down} stroke="#ffffff" strokeWidth={4} paintOrder="stroke">
								{r.xLabel}
							</text>
						)}
					</g>
				);
			})}

			{/* Indicator flask */}
			{flask && (
				<g opacity={ramp(frame, flask.stages[0]?.beat ?? 0, 14)}>
					<DioramaPlinth id={`${ID}-fl`} cx={flask.x} cy={flask.y} rx={54}>
						<g transform={`translate(0,${idleBob(frame, 5, 0.8)})`}>
							<Flask cx={flask.x} baseY={flask.y + 4} w={58} h={66} level={0.55} liquid={flaskColor ?? 'rgba(210,225,235,0.6)'} />
						</g>
					</DioramaPlinth>
					{flask.label && (
						<text x={flask.x + 64} y={flask.y - 20} fill={TOK.inkDim} fontSize={15} fontWeight={700}>
							{flask.label}
						</text>
					)}
				</g>
			)}

			{/* Notes */}
			{notes.map((n, i) => {
				const o = ramp(frame, n.beat, 14);
				if (o <= 0) return null;
				const ink = inkOf(n.color ?? 'ink');
				const size = n.size ?? 18;
				const anchor = n.anchor ?? 'start';
				const X = gx(n.x), Y = gy(n.y);
				const markX = anchor === 'end' ? X - textW(n.text, size) - 22 : anchor === 'middle' ? X - textW(n.text, size) / 2 - 22 : X - 22;
				return (
					<g key={`n${i}`} opacity={o} transform={`translate(0,${(1 - o) * 8})`}>
						{n.mark && <Mark x={markX} y={Y - size * 0.35} ok={n.mark === 'tick'} size={13} />}
						<text x={X} y={Y} textAnchor={anchor} fill={ink} fontSize={size} fontWeight={800} stroke="#ffffff" strokeWidth={5} paintOrder="stroke">
							{n.text}
						</text>
						{n.sub && (
							<text x={X} y={Y + 21} textAnchor={anchor} fill={TOK.inkDim} fontSize={15} fontWeight={600} stroke="#ffffff" strokeWidth={4} paintOrder="stroke">
								{n.sub}
							</text>
						)}
					</g>
				);
			})}
		</svg>
	);
};
