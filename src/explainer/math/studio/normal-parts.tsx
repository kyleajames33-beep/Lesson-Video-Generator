// Kit pass 2B, normal distribution set (root decision 54; s09 to s12): NormalCurve (μ and σ, morph to N(0, 1),
// tail shading with live areas), BandSlider, ZSlider, TailLadder, SigmaRuler, ZTable (with a reverse scan),
// ScoreCompare, FormulaCrosswalk, BagFill, FillDial and PegBoard. Every probability is computed with stat-math's
// accurate Φ; every random value is seeded. Roles: curve teal, μ and σ violet, areas amber, data blue.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, PlateSpec, SvgPlate, fmtNum, vis} from './primitives';
import {MATH_AMBER, MATH_GRADIENT, MATH_MISTAKE, MATH_ROLES, MATH_TEAL, RoleKey} from './roles';
import {LiveReadoutBoard, ReadoutRow} from './readouts';
import {PlotMap, PlotTick, StudioPlot, TXT, fnPath, regionPath} from './plot-core';
import {usePlatePreload} from './rig';
import {StudioPace, paceArrival, paceCount} from './prob-parts';
import {nCk, normBetween, normCdf, normPdf, phi, seededRandom, zTableValue} from './stat-math';
import type {Range} from '../graphs';

const AREA_FILL = '#f3d9a6';
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;

// ---------- NormalCurve ----------
export type NormalShade = {from?: number; to?: number; at?: number; out?: number; color?: string; label?: (area: number) => string};
export type NormalState = {mu: number; sigma: number; morph: number; map: (v: number) => number; area: (from?: number, to?: number) => number; peak: number};
/** The standardising morph: at u, a value v sits at (1 − u)v + u(v − μ)/σ and the curve is N((1 − u)μ, ((1 − u)σ + u)²). */
export const standardiseAt = (mu: number, sigma: number, u: number) => ({mu: (1 - u) * mu, sigma: (1 - u) * sigma + u, map: (v: number) => (1 - u) * v + (u * (v - mu)) / sigma});
/**
 * A normal curve N(μ, σ²) on a StudioPlot. μ and σ are values now (drive them from frames). `shade` regions are in
 * the curve's own units and keep their exact area while the curve moves; their areas come from Φ. `morph` (0..1)
 * squeezes the curve onto N(0, 1) with marks and shading carried (use `windowTo` to move the window with it).
 * `marks` draws violet dashed lines at μ ± kσ (and a μ triangle); `ghost` a dashed grey second curve.
 */
export const NormalCurve: React.FC<{
	x: number; y: number; width?: number; height?: number; window: {x: Range; y: Range}; windowTo?: {x: Range; y: Range}; mu: number; sigma: number; morph?: number;
	shade?: readonly NormalShade[]; marks?: {ks: readonly number[]; at?: number; labels?: boolean; muLabel?: string}; muMark?: {at?: number}; ghost?: {mu: number; sigma: number; at?: number; label?: string};
	label?: {text: string; X?: number}; xTicks?: readonly (number | PlotTick)[] | ((s: NormalState) => readonly (number | PlotTick)[]); yTicks?: readonly (number | PlotTick)[];
	xLabel?: string; yLabel?: string; tailArrows?: boolean; curveColor?: string; readout?: {x: number; y: number; width?: number; rows: (s: NormalState) => ReadoutRow[]};
	overlay?: (m: PlotMap, s: NormalState) => React.ReactNode; html?: (m: PlotMap, s: NormalState) => React.ReactNode; at?: number; out?: number;
}> = ({x, y, width = 1200, height = 600, window: win0, windowTo, mu, sigma, morph = 0, shade = [], marks, muMark, ghost, label, xTicks, yTicks = [], xLabel = 'x', yLabel = '', tailArrows = false, curveColor = MATH_ROLES.b.stroke, readout, overlay, html, at = 0, out}) => {
	const f = useCurrentFrame();
	const sm = standardiseAt(mu, sigma, morph);
	const win = windowTo ? {x: [lerp(win0.x[0], windowTo.x[0], morph), lerp(win0.x[1], windowTo.x[1], morph)] as Range, y: [lerp(win0.y[0], windowTo.y[0], morph), lerp(win0.y[1], windowTo.y[1], morph)] as Range} : win0;
	const st: NormalState = {mu, sigma, morph, map: sm.map, area: (a = -Infinity, b = Infinity) => normBetween(a, b, mu, sigma), peak: normPdf(sm.mu, sm.mu, sm.sigma)};
	const dens = (v: number) => normPdf(v, sm.mu, sm.sigma);
	const ticks = typeof xTicks === 'function' ? xTicks(st) : xTicks;
	return <>
		<StudioPlot x={x} y={y} width={width} height={height} window={win} xTicks={ticks} yTicks={yTicks} xLabel={xLabel} yLabel={yLabel} grid={false} at={at} out={out}
			html={html ? m => html(m, st) : undefined}>
			{m => <>
				<g clipPath={m.clip}>
					{shade.map((s, i) => {
						const so = vis(f, s.at ?? at, s.out);
						if (so <= 0.001) return null;
						const a = s.from === undefined ? win.x[0] - 1 : Math.max(win.x[0] - 1, sm.map(s.from)), b = s.to === undefined ? win.x[1] + 1 : Math.min(win.x[1] + 1, sm.map(s.to));
						return <path key={i} d={regionPath(m, dens, a, b, () => 0, 200)} fill={s.color ?? AREA_FILL} stroke={MATH_ROLES.k.stroke} strokeWidth={3} opacity={so} />;
					})}
					{ghost ? (() => {const gm = standardiseAt(ghost.mu, ghost.sigma, morph); return <path d={fnPath(m, v => normPdf(v, gm.mu, gm.sigma), win.x[0], win.x[1], 300)} stroke={INK_SOFT} strokeWidth={5} strokeDasharray="14 10" fill="none" opacity={vis(f, ghost.at ?? at)} />;})() : null}
					<path d={fnPath(m, dens, win.x[0], win.x[1], 360)} stroke={curveColor} strokeWidth={7} fill="none" strokeLinejoin="round" />
				</g>
				{marks ? (() => {
					const mo = vis(f, marks.at ?? at);
					return <g opacity={mo}>{[0, ...marks.ks.flatMap(k => [-k, k])].map(k => {
						const v = sm.map(mu + k * sigma);
						if (v < win.x[0] || v > win.x[1]) return null;
						const [px, py] = m.p(v, dens(v)), [, by] = m.p(v, 0);
						return <g key={k}><line x1={px} x2={px} y1={by} y2={k === 0 ? m.box.top + 10 : py} stroke={MATH_GRADIENT} strokeWidth={k === 0 ? 4 : 3.5} strokeDasharray={k === 0 ? undefined : '10 8'} />
							{marks.labels !== false && k !== 0 ? <text x={px} y={by - 14} textAnchor="middle" style={TXT(28, MATH_GRADIENT, 800)} stroke={CARD} strokeWidth={6} paintOrder="stroke">{`${k > 0 ? '+' : '−'}${Math.abs(k) === 1 ? '' : Math.abs(k)}σ`}</text> : null}</g>;
					})}</g>;
				})() : null}
				{muMark ? (() => {const [px, by] = m.p(sm.map(mu), 0); return <path d={`M${px},${by + 4} L${px - 22},${by + 40} L${px + 22},${by + 40} Z`} fill={MATH_GRADIENT} opacity={vis(f, muMark.at ?? at)} />;})() : null}
				{tailArrows ? (() => {const [x0, y0] = m.p(win.x[0], 0), [x1] = m.p(win.x[1], 0); return <g stroke={curveColor} strokeWidth={5} fill="none"><path d={`M${x0 + 50},${y0 - 18} L${x0 + 10},${y0 - 6} M${x0 + 26},${y0 - 22} L${x0 + 10},${y0 - 6} L${x0 + 30},${y0 + 4}`} /><path d={`M${x1 - 50},${y0 - 18} L${x1 - 10},${y0 - 6} M${x1 - 26},${y0 - 22} L${x1 - 10},${y0 - 6} L${x1 - 30},${y0 + 4}`} /></g>;})() : null}
				{label ? (() => {const lx = label.X ?? sm.map(mu + 1.3 * sigma), [px, py] = m.p(lx, dens(lx)); return <text x={px + 14} y={py - 12} style={TXT(36, MATH_TEAL, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label.text}</text>;})() : null}
				{shade.map((s, i) => {
					if (!s.label) return null;
					const so = vis(f, s.at ?? at, s.out); if (so <= 0.001) return null;
					const a = s.from ?? mu - 4 * sigma, b = s.to ?? mu + 4 * sigma, cxv = sm.map(s.from === undefined ? b - 0.6 * sigma : s.to === undefined ? a + 0.6 * sigma : (a + b) / 2);
					const [px, py] = m.p(cxv, dens(cxv) + (win.y[1] - win.y[0]) * 0.1);
					return <text key={'l' + i} x={px} y={py} textAnchor="middle" style={TXT(36, MATH_ROLES.k.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke" opacity={so}>{s.label(st.area(s.from, s.to))}</text>;
				})}
				{overlay ? overlay(m, st) : null}
			</>}
		</StudioPlot>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 480} at={at} out={out} rows={readout.rows(st)} /> : null}
	</>;
};

// ---------- BandSlider ----------
/**
 * The symmetric band μ ± kσ (k now, from frames) shaded amber with a live area readout (Φ(k) − Φ(−k): 0.3829 at
 * 0.5, 0.6827 at 1, 0.9545 at 2, 0.9973 at 3). `screen` draws it inside a calculator-style screen panel.
 */
export const BandSlider: React.FC<{x: number; y: number; width?: number; height?: number; mu: number; sigma: number; k: number; window: {x: Range; y: Range}; xTicks?: readonly (number | PlotTick)[]; xLabel?: string; screen?: boolean; readout?: {x: number; y: number; width?: number}; at?: number; out?: number}> = ({x, y, width = 1100, height = 560, mu, sigma, k, window: win, xTicks, xLabel = 'x', screen = false, readout, at = 0, out}) => {
	const f = useCurrentFrame();
	const area = normBetween(mu - k * sigma, mu + k * sigma, mu, sigma);
	const o = vis(f, at, out, 14);
	return <>
		{screen ? <div style={{position: 'absolute', left: x - 24, top: y - 24, width: width + 48, height: height + 48, opacity: o, background: '#dfe8dc', borderRadius: 18, border: '10px solid #2a2d31', boxSizing: 'border-box', boxShadow: CARD_SHADOW}} /> : null}
		<NormalCurve x={x} y={y} width={width} height={height} window={win} mu={mu} sigma={sigma} xTicks={xTicks} xLabel={xLabel} shade={k > 0.001 ? [{from: mu - k * sigma, to: mu + k * sigma}] : []} marks={{ks: [1, 2, 3], labels: false}} at={at} out={out}
			overlay={m => {const [a, by] = m.p(mu - k * sigma, 0), [b] = m.p(mu + k * sigma, 0); return <g><path d={`M${a},${by + 50} V${by + 62} H${b} V${by + 50}`} fill="none" stroke={MATH_GRADIENT} strokeWidth={4} opacity={k > 0.02 ? 1 : 0} /></g>;}} />
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} rows={[
			{label: 'band μ ± kσ: k', value: k, digits: 2, role: 'gradient'},
			{label: 'area inside', value: area, digits: 4, role: 'k'},
		]} /> : null}
	</>;
};

// ---------- ZSlider ----------
/**
 * The standard normal with an amber z marker (z now, from frames) shading the right tail (or the left), with a
 * live probability readout from Φ. A sprite can ride the top of the marker (the snapper at 1.25).
 */
export const ZSlider: React.FC<{x: number; y: number; width?: number; height?: number; z: number; side?: 'right' | 'left'; window?: {x: Range; y: Range}; sprite?: {plate: PlateSpec; w: number}; readout?: {x: number; y: number; width?: number; label?: string}; digits?: number; at?: number; out?: number}> = ({x, y, width = 1200, height = 560, z, side = 'right', window: win = {x: [-3.6, 3.6], y: [0, 0.46]}, sprite, readout, digits = 4, at = 0, out}) => {
	usePlatePreload(sprite ? [sprite.plate.src] : []);
	const tail = side === 'right' ? 1 - phi(z) : phi(z);
	return <>
		<NormalCurve x={x} y={y} width={width} height={height} window={win} mu={0} sigma={1} xLabel="z" xTicks={[-3, -2, -1, 0, 1, 2, 3]} shade={[side === 'right' ? {from: z} : {to: z}]} at={at} out={out}
			overlay={m => {
				const [px, by] = m.p(z, 0), [, ty] = m.p(z, normPdf(z));
				const sh = sprite ? sprite.w * (sprite.plate.box[3] - sprite.plate.box[1]) / (sprite.plate.box[2] - sprite.plate.box[0]) : 0;
				return <g>
					<line x1={px} x2={px} y1={by + 16} y2={ty - 30} stroke={MATH_AMBER} strokeWidth={6} />
					<circle cx={px} cy={by} r={16} fill={MATH_AMBER} stroke={CARD} strokeWidth={5} />
					<text x={px} y={ty - 44 - (sprite ? sh : 0)} textAnchor="middle" style={TXT(40, MATH_ROLES.k.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{`z = ${fmtNum(z, 2)}`}</text>
					{sprite ? <SvgPlate plate={sprite.plate} x={px - sprite.w / 2} y={ty - 34 - sh} w={sprite.w} /> : null}
				</g>;
			}} />
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} rows={[
			{label: 'z', value: z, digits: 2, role: 'k'},
			{label: readout.label ?? (side === 'right' ? 'P(Z > z)' : 'P(Z < z)'), value: tail, digits, role: 'k'},
		]} /> : null}
	</>;
};

// ---------- TailLadder ----------
/** Rows of named regions, each with a small shaded bell, its label and its probability (from Φ, or given text). */
export const TailLadder: React.FC<{x: number; y: number; w?: number; mu: number; sigma: number; rows: readonly {from?: number; to?: number; label: React.ReactNode; value?: string; at: number; role?: RoleKey}[]; rowH?: number; digits?: number; out?: number}> = ({x, y, w = 760, mu, sigma, rows, rowH = 116, digits = 4, out}) => {
	const f = useCurrentFrame();
	const bw = 220, bh = 90, lo = mu - 3.6 * sigma, hi = mu + 3.6 * sigma;
	const P = (v: number) => (v - lo) / (hi - lo) * bw, Q = (v: number) => bh - (normPdf(v, mu, sigma) / normPdf(mu, mu, sigma)) * (bh - 8);
	const path = (a: number, b: number, close: boolean) => {let d = ''; for (let i = 0; i <= 60; i++) {const v = a + (b - a) * i / 60; d += `${i ? 'L' : 'M'}${P(v).toFixed(1)},${Q(v).toFixed(1)} `;} return close ? d + `L${P(b)},${bh} L${P(a)},${bh} Z` : d;};
	return <div style={{position: 'absolute', left: x, top: y, width: w}}>
		{rows.map((r, i) => {
			const o = vis(f, r.at, out, 12), a = Math.max(lo, r.from ?? lo), b = Math.min(hi, r.to ?? hi);
			return <div key={i} style={{opacity: o, display: 'flex', alignItems: 'center', gap: 22, height: rowH, borderTop: i ? `2px solid ${PAPER_DEEP}` : undefined}}>
				<svg width={bw} height={bh + 6} style={{overflow: 'visible', flex: 'none'}}><path d={path(a, b, true)} fill={AREA_FILL} stroke={MATH_ROLES.k.stroke} strokeWidth={2} /><path d={path(lo, hi, false)} fill="none" stroke={MATH_ROLES.b.stroke} strokeWidth={4} /><line x1={0} x2={bw} y1={bh} y2={bh} stroke={INK} strokeWidth={3} /></svg>
				<div style={{flex: 1, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK, whiteSpace: 'nowrap'}}>{r.label}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: MATH_ROLES[r.role ?? 'k'].ink, fontVariantNumeric: 'tabular-nums'}}>{r.value ?? fmtNum(normBetween(r.from ?? -Infinity, r.to ?? Infinity, mu, sigma), digits)}</div>
			</div>;
		})}
	</div>;
};

// ---------- SigmaRuler ----------
/** A number line from `from` to `to` filling with violet σ-steps (`progress` 0..1 of the way), with a live count "1.25 σ". */
export const SigmaRuler: React.FC<{x: number; y: number; width?: number; range: Range; from: number; to: number; sigma: number; progress: number; ticks?: readonly PlotTick[]; label?: (steps: number) => string; at?: number; out?: number}> = ({x, y, width = 1100, range, from, to, sigma, progress, ticks = [], label, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const px = (v: number) => x + ((v - range[0]) / (range[1] - range[0])) * width;
	const dir = Math.sign(to - from) || 1, total = Math.abs(to - from) / sigma, steps = total * Math.max(0, Math.min(1, progress));
	const segs: React.ReactNode[] = [];
	for (let i = 0; i < Math.ceil(steps - 1e-9); i++) {
		const a = from + dir * i * sigma, b = from + dir * Math.min(steps, i + 1) * sigma;
		segs.push(<rect key={i} x={Math.min(px(a), px(b))} y={y - 34} width={Math.abs(px(b) - px(a))} height={26} fill={i % 2 ? MATH_ROLES.gradient.soft : MATH_GRADIENT} stroke={MATH_GRADIENT} strokeWidth={2.5} />);
	}
	return <FrameSvg style={{opacity: o}}>
		<line x1={x} x2={x + width} y1={y} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{ticks.map(t => <g key={t.label}><line x1={px(t.value)} x2={px(t.value)} y1={y - 10} y2={y + 12} stroke={INK} strokeWidth={3} /><text x={px(t.value)} y={y + 46} textAnchor="middle" style={TXT(30, INK, 700)}>{t.label}</text></g>)}
		{segs}
		<text x={px(from + dir * steps * sigma) + dir * 16} y={y - 48} textAnchor={dir > 0 ? 'start' : 'end'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, fill: MATH_GRADIENT}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{label ? label(steps) : `${fmtNum(steps, 2)} σ`}</text>
	</FrameSvg>;
};

// ---------- ZTable ----------
/**
 * A printed standard normal table: rows z = rowStart + 0.1 i, columns +0.00 to +0.09, cells Φ to 4 decimals.
 * `highlight` lights the row heading, the column heading and the cell (amber). `scan` (reverse use) runs a
 * cursor through the cells in reading order from `from` until the cell nearest `target`, which is boxed.
 */
export const ZTable: React.FC<{
	x: number; y: number; rowStart?: number; rows?: number; cols?: number; cellW?: number; cellH?: number; size?: number;
	highlight?: {z: number; at: number; out?: number}; scan?: {target: number; at: number; dur: number; from?: number}; at?: number; out?: number;
}> = ({x, y, rowStart = 1.0, rows = 8, cols = 10, cellW = 120, cellH = 50, size = 30, highlight, scan, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const zr = (i: number) => Math.round((rowStart + 0.1 * i) * 10) / 10;
	let target = -1, cursor = -1;
	if (scan) {
		let best = Infinity;
		for (let i = 0; i < rows * cols; i++) {const v = zTableValue(zr(Math.floor(i / cols)) + 0.01 * (i % cols)); if (Math.abs(v - scan.target) < best) {best = Math.abs(v - scan.target); target = i;}}
		const s0 = scan.from ?? 0;
		cursor = f < scan.at ? -1 : Math.min(target, s0 + Math.floor(prog(f, scan.at, scan.dur, u => u) * (target - s0 + 0.999)));
	}
	const hz = highlight ? Math.round(highlight.z * 100) : NaN, ho = highlight ? vis(f, highlight.at, highlight.out) : 0;
	const hRow = Math.floor(hz / 10) / 10, hCol = hz % 10;
	const A = MATH_ROLES.k;
	const cellStyle = (bg?: string, bold = false, color = INK): React.CSSProperties => ({width: cellW, height: cellH, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: bold ? 800 : 600, fontSize: size, color, background: bg, fontVariantNumeric: 'tabular-nums', boxSizing: 'border-box', borderLeft: `1.5px solid ${PAPER_DEEP}`});
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', overflow: 'hidden'}}>
		<div style={{display: 'flex', borderBottom: `3px solid ${INK}`}}>
			<div style={cellStyle(undefined, true)}>z</div>
			{Array.from({length: cols}, (_, c) => <div key={c} style={cellStyle(ho > 0 && c === hCol ? `rgba(248,232,200,${ho})` : undefined, true)}>{`.0${c}`}</div>)}
		</div>
		{Array.from({length: rows}, (_, r) => {
			const rowHit = ho > 0 && Math.abs(zr(r) - hRow) < 1e-9;
			return <div key={r} style={{display: 'flex', borderTop: r ? `1.5px solid ${PAPER_DEEP}` : undefined}}>
				<div style={cellStyle(rowHit ? `rgba(248,232,200,${ho})` : undefined, true)}>{zr(r).toFixed(1)}</div>
				{Array.from({length: cols}, (_, c) => {
					const i = r * cols + c, v = zTableValue(zr(r) + 0.01 * c);
					const hit = rowHit && c === hCol, passed = scan && cursor >= 0 && i <= cursor, isT = scan && i === target && cursor === target;
					return <div key={c} style={{...cellStyle(hit || isT ? A.soft : passed ? 'rgba(248,232,200,0.45)' : undefined, hit || !!isT, hit || isT ? A.ink : INK), boxShadow: hit || isT ? `inset 0 0 0 4px ${A.stroke}` : scan && i === cursor ? `inset 0 0 0 3px ${A.stroke}` : undefined}}>{v.toFixed(4)}</div>;
				})}
			</div>;
		})}
	</div>;
};

// ---------- ScoreCompare ----------
/**
 * Two (or more) raw scores on their own scales: each row is a number line μ − 3σ to μ + 3σ with σ ticks and the
 * score's dot; at `toZ` (0..1) the dots slide down onto one shared z axis, where the further-out score is seen.
 */
export const ScoreCompare: React.FC<{x: number; y: number; width?: number; items: readonly {label: string; mu: number; sigma: number; value: number; role?: RoleKey; unit?: string; plate?: {plate: PlateSpec; w: number}}[]; toZ: number; rowGap?: number; zRange?: Range; at?: number; out?: number}> = ({x, y, width = 1100, items, toZ, rowGap = 190, zRange = [-3, 3], at = 0, out}) => {
	usePlatePreload(items.flatMap(it => (it.plate ? [it.plate.plate.src] : [])));
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const zx = (z: number) => x + ((z - zRange[0]) / (zRange[1] - zRange[0])) * width, zy = y + items.length * rowGap + 40;
	const u = Math.max(0, Math.min(1, toZ)), e = u * u * (3 - 2 * u);
	return <FrameSvg style={{opacity: o}}>
		{items.map((it, i) => {
			const ry = y + i * rowGap, R = MATH_ROLES[it.role ?? 'k'], z = (it.value - it.mu) / it.sigma;
			const vx = zx(z), dx = vx, dy = ry + (zy - ry) * e;
			const ph = it.plate ? it.plate.w * (it.plate.plate.box[3] - it.plate.plate.box[1]) / (it.plate.plate.box[2] - it.plate.plate.box[0]) : 0;
			return <g key={i}>
				<line x1={x} x2={x + width} y1={ry} y2={ry} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				{[-3, -2, -1, 0, 1, 2, 3].map(k => <g key={k}><line x1={zx(k)} x2={zx(k)} y1={ry - (k ? 10 : 18)} y2={ry + 10} stroke={k ? INK : MATH_GRADIENT} strokeWidth={k ? 3 : 5} /><text x={zx(k)} y={ry + 42} textAnchor="middle" style={TXT(28, k ? INK : MATH_GRADIENT, 700)}>{fmtNum(it.mu + k * it.sigma, Number.isInteger(it.sigma) && Number.isInteger(it.mu) ? 0 : 1)}</text></g>)}
				<text x={x} y={ry - 62} style={TXT(34, R.ink, 800)}>{it.label}</text>
				{it.plate ? <SvgPlate plate={it.plate.plate} x={x + width - it.plate.w} y={ry - 30 - ph} w={it.plate.w} /> : null}
				<circle cx={dx} cy={dy} r={16} fill={R.stroke} stroke={CARD} strokeWidth={5} />
				{u < 0.2 ? <text x={vx} y={ry - 26} textAnchor="middle" style={TXT(34, R.ink, 800)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{`${fmtNum(it.value, 0)}${it.unit ?? ''}`}</text> : null}
				{u > 0.95 ? <text x={vx} y={zy - 30 - i * 44} textAnchor="middle" style={TXT(36, R.ink, 800)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{`z = ${fmtNum(z, 2)}`}</text> : null}
			</g>;
		})}
		<g opacity={e}>
			<line x1={x} x2={x + width} y1={zy} y2={zy} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{[-3, -2, -1, 0, 1, 2, 3].map(k => <g key={k}><line x1={zx(k)} x2={zx(k)} y1={zy - 10} y2={zy + 10} stroke={INK} strokeWidth={3} /><text x={zx(k)} y={zy + 44} textAnchor="middle" style={TXT(30, INK, 700)}>{k}</text></g>)}
			<text x={x + width} y={zy + 86} textAnchor="end" style={TXT(30, INK, 700)}>z (standard deviations from the mean)</text>
		</g>
	</FrameSvg>;
};

// ---------- FormulaCrosswalk ----------
/** Discrete and continuous forms side by side, row by row (Σ ↔ ∫), joined by an arrow, each row on its cue. */
export const FormulaCrosswalk: React.FC<{x: number; y: number; w?: number; headers?: [React.ReactNode, React.ReactNode]; rows: readonly {left: React.ReactNode; right: React.ReactNode; at: number; glow?: [number, number]}[]; size?: number; at?: number; out?: number}> = ({x, y, w = 1300, headers = ['Discrete', 'Continuous'], rows, size = 44, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const colW = (w - 120) / 2;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', padding: '14px 26px', boxSizing: 'border-box'}}>
		<div style={{display: 'flex', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT, paddingBottom: 6, borderBottom: `3px solid ${INK}`}}>
			<div style={{width: colW}}>{headers[0]}</div><div style={{width: 72}} /><div style={{width: colW}}>{headers[1]}</div>
		</div>
		{rows.map((r, i) => {
			const ro = vis(f, r.at, undefined, 12), g = r.glow ? vis(f, r.glow[0], r.glow[1]) : 0;
			return <div key={i} style={{display: 'flex', alignItems: 'center', minHeight: size * 1.9, opacity: ro, borderTop: i ? `2px solid ${PAPER_DEEP}` : undefined, background: g ? `rgba(248,232,200,${g})` : undefined, margin: '0 -12px', padding: '0 12px', borderRadius: 10}}>
				<div style={{width: colW, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK}}>{r.left}</div>
				<div style={{width: 72, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: MATH_AMBER, textAlign: 'center'}}>→</div>
				<div style={{width: colW, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK}}>{r.right}</div>
			</div>;
		})}
	</div>;
};

// ---------- BagFill ----------
export type BagFillState = {bag: number; chips: number; mass: number; completed: number};
/** The state of a bag line at a frame: bag i fills over `fillFrames` from startAt + i × every, chips arriving evenly. */
export const bagFillAt = (masses: readonly number[], chipsPerBag: number, startAt: number, every: number, fillFrames: number, f: number): BagFillState => {
	const local = f - startAt;
	if (local < 0) return {bag: 0, chips: 0, mass: 0, completed: 0};
	const bag = Math.min(masses.length - 1, Math.floor(local / every)), t = local - bag * every;
	const chips = Math.min(chipsPerBag, Math.floor((t / fillFrames) * chipsPerBag));
	const completed = Math.min(masses.length, Math.floor((local - fillFrames) / every) + 1);
	return {bag, chips, mass: (chips / chipsPerBag) * masses[bag], completed: Math.max(0, completed)};
};
/**
 * Chips tumble into a bag (a plate, or a coded bag) from above its mouth while a scale readout counts chips and
 * mass; each full bag's mass is reported in `completed` (feed it to ClassHistogram's drop). Chip sprites can be a
 * plate or coded ovals. `mouth` is the frame point chips fall to; `scale` is a readout card position.
 */
export const BagFill: React.FC<{
	masses: readonly number[]; chipsPerBag: number; startAt: number; every: number; fillFrames?: number; bag: {x: number; y: number; w: number; plate?: PlateSpec}; mouth: [number, number];
	chip?: {plate: PlateSpec; w: number}; scale?: {x: number; y: number; width?: number; plate?: {plate: PlateSpec; x: number; y: number; w: number}}; unit?: string; at?: number; out?: number;
	children?: (s: BagFillState) => React.ReactNode;
}> = ({masses, chipsPerBag, startAt, every, fillFrames, bag, mouth, chip, scale, unit = 'g', at = 0, out, children}) => {
	usePlatePreload([...(bag.plate ? [bag.plate.src] : []), ...(chip ? [chip.plate.src] : []), ...(scale?.plate ? [scale.plate.plate.src] : [])]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	const ff = fillFrames ?? Math.round(every * 0.75);
	const st = bagFillAt(masses, chipsPerBag, startAt, every, ff, f);
	if (o <= 0.001) return null;
	const falling: React.ReactNode[] = [];
	const local = f - startAt - st.bag * every;
	for (let c = Math.max(0, st.chips - 6); c < Math.min(chipsPerBag, st.chips + 1); c++) {
		const t0 = (c / chipsPerBag) * ff, u = (local - t0) / 14;
		if (u < 0 || u > 1 || local > ff + 14) continue;
		const jx = (seededRandom(c * 31 + st.bag)() - 0.5) * bag.w * 0.4;
		const px = mouth[0] + jx, py = mouth[1] - 260 + 260 * u * u, rot = u * 300 + c * 40;
		falling.push(chip ? <g key={c} transform={`translate(${px},${py}) rotate(${rot})`}><SvgPlate plate={chip.plate} x={-chip.w / 2} y={-chip.w / 3} w={chip.w} /></g>
			: <ellipse key={c} cx={px} cy={py} rx={22} ry={13} transform={`rotate(${rot} ${px} ${py})`} fill="#e9b949" stroke="#b07a1e" strokeWidth={3} />);
	}
	const bh = bag.plate ? bag.w * (bag.plate.box[3] - bag.plate.box[1]) / (bag.plate.box[2] - bag.plate.box[0]) : bag.w * 1.3;
	const fillFrac = st.chips / chipsPerBag;
	return <>
		<FrameSvg style={{opacity: o}}>
			{scale?.plate ? <SvgPlate plate={scale.plate.plate} x={scale.plate.x} y={scale.plate.y} w={scale.plate.w} /> : null}
			{bag.plate ? <SvgPlate plate={bag.plate} x={bag.x} y={bag.y} w={bag.w} /> : <g>
				<path d={`M${bag.x},${bag.y + 30} L${bag.x + bag.w},${bag.y + 30} L${bag.x + bag.w - 16},${bag.y + bh} L${bag.x + 16},${bag.y + bh} Z`} fill="#f2ead8" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
				<rect x={bag.x + 22} y={bag.y + bh - 18 - (bh - 70) * fillFrac} width={bag.w - 44} height={(bh - 70) * fillFrac} rx={12} fill="#e9c46a" opacity={0.85} />
				<path d={`M${bag.x - 6},${bag.y + 30} L${bag.x + bag.w + 6},${bag.y + 30}`} stroke={INK} strokeWidth={8} strokeDasharray="12 8" />
			</g>}
			{falling}
		</FrameSvg>
		{scale ? <LiveReadoutBoard x={scale.x} y={scale.y} width={scale.width ?? 420} at={at} out={out} rows={[
			{label: 'bag', value: st.bag + 1, digits: 0},
			{label: 'chips', value: st.chips, digits: 0, role: 'k'},
			{label: `mass (${unit})`, value: st.mass, digits: 1, role: 'a'},
		]} /> : null}
		{children ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>{children(st)}</div> : null}
	</>;
};

// ---------- FillDial ----------
/**
 * The filling machine: a violet dial sets μ (now, from frames); bottles ride a conveyor under the head and each
 * fills to its stored level μ + σ zᵢ (zs from seededNormals, levels fixed at the μ when filled if `levelAt` is
 * given) against a dashed red limit line; short bottles are flagged red. Readouts: the dial, short n of shown and
 * the model's tail P(X < limit) from Φ. `shown` is how many bottles have passed (fractional, it drives the belt).
 */
export const FillDial: React.FC<{
	x: number; y: number; width?: number; mu: number; sigma: number; limit: number; zs: readonly number[]; shown: number; levelRange: Range;
	levelAt?: (i: number) => number; bottle?: {plate: PlateSpec; interior: readonly [number, number, number, number]}; bottleW?: number; spacing?: number; visible?: number;
	dial?: {cx: number; cy: number; r: number; range: Range}; head?: {plate: PlateSpec; x: number; y: number; w: number};
	readout?: {x: number; y: number; width?: number}; unit?: string; at?: number; out?: number;
}> = ({x, y, width = 1200, mu, sigma, limit, zs, shown, levelRange, levelAt, bottle, bottleW = 90, spacing = 150, visible = 8, dial, head, readout, unit = 'mL', at = 0, out}) => {
	usePlatePreload([...(bottle ? [bottle.plate.src] : []), ...(head ? [head.plate.src] : [])]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	const n = Math.max(0, Math.min(zs.length, Math.floor(shown)));
	const lvl = (i: number) => (levelAt ? levelAt(i) : mu) + sigma * zs[i];
	let short = 0;
	for (let i = 0; i < n; i++) if (lvl(i) < limit) short++;
	if (o <= 0.001) return null;
	const bh = bottle ? bottleW * (bottle.plate.box[3] - bottle.plate.box[1]) / (bottle.plate.box[2] - bottle.plate.box[0]) : bottleW * 2.4;
	const beltY = y + bh + 20, headX = x + width * 0.42;
	const levelY = (v: number, top: number, bot: number) => bot - ((v - levelRange[0]) / (levelRange[1] - levelRange[0])) * (bot - top);
	const bottles: React.ReactNode[] = [];
	for (let i = Math.max(0, Math.floor(shown) - visible + 2); i <= Math.min(zs.length - 1, Math.floor(shown) + 2); i++) {
		const bx = headX + (shown - i) * spacing - bottleW / 2;
		if (bx < x - bottleW || bx > x + width) continue;
		const filled = i < shown, v = lvl(i), sc = bottle ? bottleW / (bottle.plate.box[2] - bottle.plate.box[0]) : 1;
		const [ix0, iy0, ix1, iy1] = bottle ? [bx + (bottle.interior[0] - bottle.plate.box[0]) * sc, y + (bottle.interior[1] - bottle.plate.box[1]) * sc, bx + (bottle.interior[2] - bottle.plate.box[0]) * sc, y + (bottle.interior[3] - bottle.plate.box[1]) * sc] : [bx + 8, y + bh * 0.25, bx + bottleW - 8, y + bh - 8];
		const ly = levelY(v, iy0, iy1), limY = levelY(limit, iy0, iy1), isShort = filled && v < limit;
		bottles.push(<g key={i}>
			{bottle ? <SvgPlate plate={bottle.plate} x={bx} y={y} w={bottleW} /> : <rect x={bx} y={y} width={bottleW} height={bh} rx={18} fill="none" stroke={INK} strokeWidth={4} />}
			{filled ? <rect x={ix0} y={ly} width={ix1 - ix0} height={iy1 - ly} rx={6} fill={isShort ? '#e0675c' : '#4f9fd1'} opacity={0.55} /> : null}
			{filled ? <line x1={ix0} x2={ix1} y1={ly} y2={ly} stroke={isShort ? MATH_MISTAKE : MATH_ROLES.a.stroke} strokeWidth={4} /> : null}
			<line x1={ix0 - 6} x2={ix1 + 6} y1={limY} y2={limY} stroke={MATH_MISTAKE} strokeWidth={3} strokeDasharray="6 5" />
			{isShort ? <text x={bx + bottleW / 2} y={beltY + 42} textAnchor="middle" style={TXT(30, MATH_MISTAKE, 800)}>short</text> : null}
		</g>);
	}
	const tail = normCdf(limit, mu, sigma);
	const dAng = dial ? (-140 + 280 * (mu - dial.range[0]) / (dial.range[1] - dial.range[0])) * Math.PI / 180 : 0;
	return <>
		<FrameSvg style={{opacity: o}}>
			<line x1={x} x2={x + width} y1={beltY} y2={beltY} stroke={INK} strokeWidth={10} strokeLinecap="round" />
			{Array.from({length: Math.ceil(width / 60)}, (_, k) => <circle key={k} cx={x + ((k * 60 + shown * spacing) % width)} cy={beltY + 14} r={6} fill={INK_SOFT} />)}
			{bottles}
			{head ? <SvgPlate plate={head.plate} x={head.x} y={head.y} w={head.w} /> : <g><rect x={headX - 60} y={y - 110} width={120} height={70} rx={12} fill="#c9c2b4" stroke={INK} strokeWidth={4} /><rect x={headX - 12} y={y - 40} width={24} height={30} fill="#8a8378" /></g>}
			{dial ? <g>
				<circle cx={dial.cx} cy={dial.cy} r={dial.r} fill={CARD} stroke={MATH_GRADIENT} strokeWidth={7} />
				{Array.from({length: 9}, (_, k) => {const a = (-140 + 35 * k) * Math.PI / 180; return <line key={k} x1={dial.cx + Math.sin(a) * dial.r * 0.78} y1={dial.cy - Math.cos(a) * dial.r * 0.78} x2={dial.cx + Math.sin(a) * dial.r * 0.92} y2={dial.cy - Math.cos(a) * dial.r * 0.92} stroke={INK} strokeWidth={3} />;})}
				<line x1={dial.cx} y1={dial.cy} x2={dial.cx + Math.sin(dAng) * dial.r * 0.75} y2={dial.cy - Math.cos(dAng) * dial.r * 0.75} stroke={MATH_GRADIENT} strokeWidth={9} strokeLinecap="round" />
				<circle cx={dial.cx} cy={dial.cy} r={12} fill={MATH_GRADIENT} />
				<text x={dial.cx} y={dial.cy + dial.r + 44} textAnchor="middle" style={TXT(34, MATH_GRADIENT, 800)}>{`μ = ${fmtNum(mu, 2)}`}</text>
			</g> : null}
		</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 480} at={at} out={out} rows={[
			{label: 'dial: μ', value: mu, digits: 2, role: 'gradient', unit},
			{label: 'short', value: short, text: `${short} of ${n}`, role: 'mistake'},
			{label: `model: P(X < ${fmtNum(limit, 0)})`, value: tail, digits: 4, role: 'k'},
		]} /> : null}
	</>;
};

// ---------- PegBoard ----------
/** Seeded Galton board run: each ball's left/right choices (1 = right) and its bin (number of rights). */
export const pegBoardRun = (seed: number, rows: number, balls: number) => {
	const r = seededRandom(seed);
	const paths = Array.from({length: balls}, () => Array.from({length: rows}, () => (r() < 0.5 ? 0 : 1)));
	return {paths, bins: paths.map(p => p.reduce<number>((s, v) => s + v, 0))};
};
/**
 * A peg board: rows of pegs in a triangle; stored balls fall at a pace, bouncing peg to peg along their stored
 * paths, and stack in rows + 1 bins (blue). One path can be traced amber. Readouts: balls dropped, and the
 * number of paths to the highlighted bin (C(rows, k)).
 */
export const PegBoard: React.FC<{
	x: number; y: number; width?: number; height?: number; rows: number; run: {paths: number[][]; bins: number[]}; pace: StudioPace; fall?: number;
	tracePath?: {index: number; at: number}; binScale?: number; readout?: {x: number; y: number; width?: number; bin: number}; at?: number; out?: number;
}> = ({x, y, width = 900, height = 820, rows, run, pace, fall = 40, tracePath, binScale = 4, readout, at = 0, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	const N = run.paths.length, k = paceCount(N, f, pace);
	const binCounts = new Array(rows + 1).fill(0);
	const pegTop = y + 40, pegH = (height * 0.55) / rows, dx = width / (rows + 2);
	const peg = (r: number, j: number): [number, number] => [x + width / 2 + (j - r / 2) * dx, pegTop + r * pegH];
	const binTop = pegTop + rows * pegH + 20, binBase = y + height;
	const flying: React.ReactNode[] = [];
	for (let i = 0; i < k; i++) {
		const u = (f - paceArrival(i, N, pace)) / fall;
		if (u >= 1) {binCounts[run.bins[i]]++; continue;}
		const pos = Math.max(0, u) * (rows + 1), step = Math.floor(pos), t = pos - step;
		let j = 0; for (let s = 0; s < Math.min(step, rows); s++) j += run.paths[i][s];
		const [ax, ay] = step < rows ? peg(step, j) : [x + width / 2 + (j - rows / 2) * dx, binTop];
		const j2 = step < rows ? j + run.paths[i][step] : j;
		const [bx, by] = step + 1 < rows ? peg(step + 1, j2) : [x + width / 2 + (j2 - rows / 2) * dx, binTop + 30];
		flying.push(<circle key={i} cx={ax + (bx - ax) * t} cy={ay + (by - ay) * t - Math.sin(Math.PI * t) * pegH * 0.5 - 18} r={10} fill={MATH_ROLES.a.stroke} stroke={CARD} strokeWidth={3} />);
	}
	if (o <= 0.001) return null;
	const tp = tracePath ? run.paths[tracePath.index] : null, to = tracePath ? prog(f, tracePath.at, 24) : 0;
	let tj = 0;
	const traceD = tp ? [peg(0, 0), ...tp.map((v, s) => {tj += v; return s + 1 < rows ? peg(s + 1, tj) : [x + width / 2 + (tj - rows / 2) * dx, binTop + 20] as [number, number];})].map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1] - 18}`).join(' ') : '';
	return <>
		<FrameSvg style={{opacity: o}}>
			{Array.from({length: rows}, (_, r) => Array.from({length: r + 1}, (_, j) => {const [px, py] = peg(r, j); return <circle key={`${r}-${j}`} cx={px} cy={py} r={7} fill={INK} />;}))}
			{tp ? <path d={traceD} fill="none" stroke={MATH_AMBER} strokeWidth={7} strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - to} /> : null}
			{binCounts.map((c, b) => {const cx = x + width / 2 + (b - rows / 2) * dx, h = Math.min(binBase - binTop, c * binScale); return <g key={b}>
				<line x1={cx - dx / 2} x2={cx - dx / 2} y1={binTop} y2={binBase} stroke={PAPER_DEEP} strokeWidth={3} />
				<rect x={cx - dx * 0.38} y={binBase - h} width={dx * 0.76} height={h} fill={MATH_ROLES.a.stroke} />
				{c ? <text x={cx} y={binBase - h - 10} textAnchor="middle" style={TXT(26, MATH_ROLES.a.ink, 800)}>{c}</text> : null}
			</g>;})}
			<line x1={x} x2={x + width} y1={binBase} y2={binBase} stroke={INK} strokeWidth={4} />
			{flying}
		</FrameSvg>
		{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 460} at={at} out={out} rows={[
			{label: 'balls dropped', value: k, digits: 0, role: 'a'},
			{label: `paths to bin ${readout.bin}`, value: nCk(rows, readout.bin), digits: 0, role: 'k'},
		]} /> : null}
	</>;
};
