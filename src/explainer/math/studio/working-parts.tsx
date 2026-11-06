// Studio-sized working parts: the growing rectangle (product rule), growth bars, cancellation, rate chain
// strips and the moving domain strip. All type at or above the maths-visual-standard sizes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, PlateSpec, SvgPlate, fmtNum, kf, smooth, vis} from './primitives';
import {MATH_AMBER, MATH_EXCLUDED, MATH_MISTAKE, MATH_ROLES, RoleKey, roleInk} from './roles';
import {usePlatePreload} from './rig';

const hexA = (h: string, a: number) => {
	const n = parseInt(h.slice(1), 16);
	return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

// ---------- AreaStrips ----------
/**
 * A rectangle of sides u (across) and v (up) growing from its bottom-left corner at (x, y) on an equal-unit
 * scale. The added side strip (du × v), top strip (u × dv) and corner (du × dv) each take a role colour and
 * a hand tag. With a plate underlay, the plate's `region` (file pixels) is fitted to the ORIGINAL u0 × v0
 * rectangle at native aspect: the scale comes from the plate, so it is never stretched (the region's aspect
 * must equal u0 : v0; the component throws if it is off by more than 2%).
 */
export const AreaStrips: React.FC<{
	x: number; y: number; unit?: number;
	u: number; v: number; du: number; dv: number;
	roles?: {u?: RoleKey; v?: RoleKey; corner?: RoleKey};
	plate?: {spec: PlateSpec; region: readonly [number, number, number, number]; u0: number; v0: number; w: number};
	tags?: {side?: string; top?: string; corner?: string; at?: number};
	sideLabels?: {u: (u: number) => string; v: (v: number) => string; at?: number};
	at?: number; out?: number; stripsAt?: number;
}> = ({x, y, unit: unitIn, u, v, du, dv, roles = {}, plate, tags, sideLabels, at = 0, out, stripsAt}) => {
	usePlatePreload(plate ? [plate.spec.src] : []);
	const f = useCurrentFrame();
	if (!(u > 0 && v > 0)) throw new RangeError('AreaStrips: sides u and v must stay positive');
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	let unit = unitIn ?? 100;
	let plateEl: React.ReactNode = null;
	if (plate) {
		const [r0, r1, r2, r3] = plate.region;
		const rw = r2 - r0, rh = r3 - r1;
		if (Math.abs(rw / rh - plate.u0 / plate.v0) / (plate.u0 / plate.v0) > 0.02) throw new RangeError('AreaStrips: plate region aspect must match u0 : v0');
		const s = plate.w / (plate.spec.box[2] - plate.spec.box[0]);
		unit = (rw * s) / plate.u0;
		// put the region's bottom-left on (x, y)
		const left = x - (r0 - plate.spec.box[0]) * s, top = y - (r3 - plate.spec.box[1]) * s;
		plateEl = <SvgPlate plate={plate.spec} x={left} y={top} w={plate.w} />;
	}
	const uR = roles.u ?? 'b', vR = roles.v ?? 'a', cR = roles.corner ?? 'k';
	const W = u * unit, Hh = v * unit, dW = du * unit, dH = dv * unit;
	const so = stripsAt === undefined ? 1 : prog(f, stripsAt, 14);
	const tagAt = tags?.at ?? stripsAt ?? at;
	const tagO = prog(f, tagAt, 14);
	const hand = (size: number, color: string): React.CSSProperties => ({fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, fill: color} as React.CSSProperties);
	return (
		<FrameSvg style={{opacity: o}}>
			{plateEl}
			<rect x={x} y={y - Hh} width={W} height={Hh} fill={plate ? 'none' : '#efe7d8'} stroke={INK} strokeWidth={4} />
			<g opacity={so}>
				<rect x={x + W} y={y - Hh} width={dW} height={Hh} fill={hexA(MATH_ROLES[uR].soft, 0.85)} stroke={MATH_ROLES[uR].stroke} strokeWidth={4} />
				<rect x={x} y={y - Hh - dH} width={W} height={dH} fill={hexA(MATH_ROLES[vR].soft, 0.85)} stroke={MATH_ROLES[vR].stroke} strokeWidth={4} />
				<rect x={x + W} y={y - Hh - dH} width={dW} height={dH} fill={hexA(MATH_ROLES[cR].soft, 0.95)} stroke={MATH_ROLES[cR].stroke} strokeWidth={4} />
			</g>
			{tags ? <g opacity={tagO * so}>
				{tags.side ? <text x={x + W + dW + 18} y={y - Hh / 2 + 14} style={hand(42, MATH_ROLES[uR].ink)}>{tags.side}</text> : null}
				{tags.top ? <text x={x + W / 2} y={y - Hh - dH - 18} textAnchor="middle" style={hand(42, MATH_ROLES[vR].ink)}>{tags.top}</text> : null}
				{tags.corner ? <text x={x + W + dW + 18} y={y - Hh - dH - 12} style={hand(38, MATH_ROLES[cR].ink)}>{tags.corner}</text> : null}
			</g> : null}
			{sideLabels ? <g opacity={prog(f, sideLabels.at ?? at, 12)}>
				<text x={x + W / 2} y={y + 50} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: MATH_ROLES[uR].ink} as React.CSSProperties} stroke={CARD} strokeWidth={8} paintOrder="stroke">{sideLabels.u(u)}</text>
				<text x={x - 20} y={y - Hh / 2 + 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: MATH_ROLES[vR].ink} as React.CSSProperties} stroke={CARD} strokeWidth={8} paintOrder="stroke">{sideLabels.v(v)}</text>
			</g> : null}
		</FrameSvg>
	);
};

/** Two or more horizontal bars on one shared scale with live values (area added against a guess). */
export const GrowthBars: React.FC<{x: number; y: number; w?: number; max: number; rows: readonly {label: React.ReactNode; value: number; digits?: number; unit?: string; role?: RoleKey; dashed?: boolean; at?: number}[]; at?: number; out?: number; title?: string}> = ({x, y, w = 760, max, rows, at = 0, out, title}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const barW = w - 300;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, padding: '16px 26px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
			{title ? <div style={{fontFamily: FONT_DISPLAY, fontSize: 28, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT, marginBottom: 8}}>{title}</div> : null}
			{rows.map((r, i) => {
				const ro = prog(f, r.at ?? at, 12);
				const c = r.role ? MATH_ROLES[r.role] : {ink: INK_SOFT, stroke: INK_SOFT, soft: PAPER_DEEP};
				const len = Math.max(0, Math.min(1, r.value / max)) * barW;
				return <div key={i} style={{opacity: ro, display: 'flex', alignItems: 'center', gap: 18, margin: '8px 0'}}>
					<div style={{width: 150, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: c.ink}}>{r.label}</div>
					<svg width={barW} height={44} viewBox={`0 0 ${barW} 44`} style={{flex: 'none'}}>
						<rect x={0} y={6} width={barW} height={32} rx={16} fill={PAPER_DEEP} />
						<rect x={0} y={6} width={len} height={32} rx={16} fill={r.dashed ? 'none' : c.stroke} stroke={c.stroke} strokeWidth={r.dashed ? 4 : 0} strokeDasharray={r.dashed ? '10 7' : undefined} />
					</svg>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: c.ink, fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre'}}>{fmtNum(r.value, r.digits ?? 1)}{r.unit ? <span style={{fontSize: 28, fontWeight: 600, color: INK_SOFT}}> {r.unit}</span> : null}</div>
				</div>;
			})}
		</div>
	);
};

// ---------- StudioCancellation ----------
export type FactorPart = {content: React.ReactNode; cancel?: boolean; role?: RoleKey};
/**
 * A fraction at 52 px or more whose common factors are slashed top and bottom on a cue (red strokes drawn
 * on), then the result appears beside it. A domain strip (or any node) can sit beside it via `aside`.
 */
export const StudioCancellation: React.FC<{x: number; y: number; top: readonly FactorPart[]; bottom: readonly FactorPart[]; strikeAt: number; result?: {content: React.ReactNode; at: number}; size?: number; at?: number; out?: number; aside?: React.ReactNode; prefix?: React.ReactNode}> = ({x, y, top, bottom, strikeAt, result, size = 60, at = 0, out, aside, prefix}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const row = (parts: readonly FactorPart[], seed: number) => (
		<div style={{display: 'flex', justifyContent: 'center', gap: '0.18em', whiteSpace: 'pre'}}>
			{parts.map((p, i) => {
				const sp = p.cancel ? prog(f, strikeAt + (seed + i) * 4, 12) : 0;
				return <span key={i} style={{position: 'relative', display: 'inline-block', color: p.cancel && sp > 0.5 ? INK_SOFT : roleInk(p.role, INK)}}>
					{p.content}
					{p.cancel && f >= strikeAt ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: '-6%', top: '4%', width: '112%', height: '92%', overflow: 'visible'}}>
						<path d="M8,92 L92,8" stroke={MATH_MISTAKE} strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - sp} />
					</svg> : null}
				</span>;
			})}
		</div>
	);
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', alignItems: 'center', gap: 34, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK}}>
			{prefix ? <span style={{whiteSpace: 'pre'}}>{prefix}</span> : null}
			<div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch'}}>
				{row(top, 0)}
				<div style={{height: Math.max(4, size * 0.07), background: INK, borderRadius: 3, margin: '6px 0'}} />
				{row(bottom, 3)}
			</div>
			{result ? <div style={{display: 'flex', alignItems: 'center', gap: 24, opacity: prog(f, result.at, 14), whiteSpace: 'pre'}}><span>=</span>{result.content}</div> : null}
			{aside}
		</div>
	);
};

// ---------- StudioRateChainStrips ----------
/**
 * Rates multiplying in a chain: horizontal number strips (x, then u, then y) with start and end values and
 * brackets proportional to each change at one shared magnification, joined by arrows labelled with the
 * role-coloured rates. Each row and link reveals on its cue.
 */
export const StudioRateChainStrips: React.FC<{
	x: number; y: number; w?: number; rowGap?: number;
	rows: readonly {label: React.ReactNode; from: number; to: number; digits?: number; role?: RoleKey; at: number}[];
	links: readonly {label: React.ReactNode; role?: RoleKey; at: number}[];
	magnify?: number; out?: number;
}> = ({x, y, w = 1100, rowGap = 150, rows, links, magnify, out}) => {
	const f = useCurrentFrame();
	const maxChange = Math.max(...rows.map(r => Math.abs(r.to - r.from)), 1e-9);
	const barMax = w - 470 - 300; // room on the right for the "change" label
	const scale = magnify ?? barMax / maxChange;
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	const BX = x + 470;
	return (
		<>
			{rows.map((r, i) => {
				const ro = prog(f, r.at, 14);
				const c = roleInk(r.role, INK), st = r.role ? MATH_ROLES[r.role].stroke : INK;
				const len = (r.to - r.from) * scale * smooth(prog(f, r.at + 8, 22));
				const top = y + i * rowGap;
				return <React.Fragment key={i}>
					<div style={{position: 'absolute', left: x, top, width: 450, opacity: ro * o, fontFamily: FONT_DISPLAY}}>
						<div style={{fontWeight: 800, fontSize: 44, color: c, whiteSpace: 'pre'}}>{r.label}</div>
						<div style={{fontWeight: 700, fontSize: 32, color: INK, fontVariantNumeric: 'tabular-nums', whiteSpace: 'pre'}}>{fmtNum(r.from, r.digits ?? 3)} → {fmtNum(r.to, r.digits ?? 3)}</div>
					</div>
					<FrameSvg style={{opacity: ro * o}}>
						<line x1={BX} x2={BX + barMax} y1={top + 50} y2={top + 50} stroke={PAPER_DEEP} strokeWidth={12} strokeLinecap="round" />
						<path d={`M${BX},${top + 30} V${top + 50} H${BX + len} V${top + 30}`} stroke={st} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" />
						<text x={BX + Math.max(len, 0) + 18} y={top + 62} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: c, fontVariantNumeric: 'tabular-nums'} as React.CSSProperties}>{`change ${fmtNum(r.to - r.from, r.digits ?? 3)}`}</text>
					</FrameSvg>
				</React.Fragment>;
			})}
			{links.map((l, i) => {
				const top = y + i * rowGap + 92, bot = y + (i + 1) * rowGap - 4;
				return <React.Fragment key={'l' + i}>
					<FrameSvg style={{opacity: o}}>
						<DrawPath d={`M${BX - 40},${top} L${BX - 40},${bot}`} at={l.at} dur={12} color={l.role ? MATH_ROLES[l.role].stroke : INK} width={5} />
						<DrawPath d={`M${BX - 52},${bot - 14} L${BX - 40},${bot} L${BX - 28},${bot - 14}`} at={l.at + 10} dur={6} color={l.role ? MATH_ROLES[l.role].stroke : INK} width={5} />
					</FrameSvg>
					<div style={{position: 'absolute', left: BX - 20, top: (top + bot) / 2 - 26, opacity: prog(f, l.at + 6, 12) * o, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: roleInk(l.role, INK), whiteSpace: 'pre'}}>{l.label}</div>
				</React.Fragment>;
			})}
		</>
	);
};

// ---------- StudioDomainStrip ----------
/**
 * The amber domain strip: conditions such as "x > 0", "cos x ≠ 0" or "x ≠ −1" on a card that moves along a
 * keyed path (written under the equation first, then slid beside the framed answer). `greyAt` turns it grey
 * (d08 to d09 join).
 */
export const StudioDomainStrip: React.FC<{conditions: readonly React.ReactNode[]; path: readonly {frame: number; x: number; y: number}[]; at: number; out?: number; size?: number; title?: string; greyAt?: number}> = ({conditions, path, at, out, size = 40, title = 'domain', greyAt}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001 || !path.length) return null;
	const px = kf(f, path.map(p => [p.frame, p.x] as const)), py = kf(f, path.map(p => [p.frame, p.y] as const));
	const g = greyAt === undefined ? 0 : prog(f, greyAt, 16);
	const col = g > 0.5 ? MATH_EXCLUDED : MATH_AMBER;
	return (
		<div style={{position: 'absolute', left: px, top: py, opacity: o, display: 'flex', alignItems: 'center', gap: 16, background: CARD, borderRadius: 16, padding: '6px 22px', border: `4px solid ${col}`, boxShadow: '0 10px 22px rgba(60,45,20,0.10)', whiteSpace: 'pre'}}>
			<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 0.95, color: col}}>{title}</span>
			{conditions.map((c, i) => <span key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: g > 0.5 ? MATH_EXCLUDED : '#7a4600'}}>{i ? ', ' : ''}{c}</span>)}
		</div>
	);
};
