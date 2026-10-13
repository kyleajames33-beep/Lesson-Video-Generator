// Drawing parts for the G01 lesson: molecules, reaction box, energy levels, cards, guide bar, tube, icons.
import React, {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, Plate, prog, rng} from '../../kit';
import {Fade, Overlay, SvgText, TEAL} from '../chem-m5-c01/parts';
import {BAD, G1, HEAT, HEAT_SOFT, LIGHT, OXY, SPREAD, SPREAD_SOFT, SURR, SvgPaint, smooth} from './common';
import * as A from './assets';

export {Fade, Overlay, SvgText, TEAL};

// ---------- text helpers ----------
/** Subscripts in HTML text: C_6H_12O_6 renders with small lowered digits. */
export const Sub: React.FC<{text: string; size?: number; color?: string; weight?: number; style?: React.CSSProperties}> = ({text, size = 44, color = INK, weight = 600, style}) => (
	<span style={{fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, color, whiteSpace: 'pre', ...style}}>
		{text.split(/(_\d+)/).map((p, i) => p.startsWith('_') ? <sub key={i} style={{fontSize: size * 0.66, lineHeight: 0}}>{p.slice(1)}</sub> : <span key={i}>{p}</span>)}
	</span>
);

/** An SVG pill with centred hand text. */
export const Pill: React.FC<{x: number; y: number; w: number; text: string; at: number; out?: number; color?: string; size?: number; h?: number; fill?: string}> = ({x, y, w, text, at, out, color = INK, size = 40, h = 62, fill = '#fffdf8'}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={3} />
		<text x={x + w / 2} y={y + h / 2 + size * 0.3} textAnchor="middle" fill={color} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}}>{text}</text>
	</Fade>
);

/** HTML card with a staged entrance. */
export const Panel: React.FC<{x: number; y: number; w: number; at: number; out?: number; children: React.ReactNode; tint?: string; border?: string; pad?: string}> = ({x, y, w, at, out, children, tint = '#fffdf8', border = 'rgba(60,45,20,0.10)', pad = '18px 26px'}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: tint, borderRadius: 20, padding: pad, boxShadow: '0 14px 32px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: `2.5px solid ${border}`}}>{children}</div>
	</Enter>
);

export const T: React.FC<{children: React.ReactNode; size?: number; color?: string; weight?: number; hand?: boolean; style?: React.CSSProperties}> = ({children, size = 36, color = INK, weight = 600, hand = false, style}) => (
	<div style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontSize: size, fontWeight: hand ? 700 : weight, color, lineHeight: 1.18, ...style}}>{children}</div>
);

/** Coloured delta G equation, HTML. */
export const GFormula: React.FC<{size?: number; plain?: boolean}> = ({size = 52, plain}) => (
	<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, color: INK, whiteSpace: 'pre'}}>
		ΔG = <span style={{color: plain ? INK : HEAT}}>ΔH</span> − <span style={{color: plain ? INK : SPREAD}}>TΔS</span>
	</span>
);

/** Stage tab strip: current stage lit. */
export const StageTabs: React.FC<{x: number; y: number; labels: string[]; stageAt: number[]; w?: number}> = ({x, y, labels, stageAt, w = 1040}) => {
	const f = useCurrentFrame();
	const idx = stageAt.reduce((a, s, i) => (f >= s ? i : a), -1);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, display: 'flex', gap: 14, opacity: prog(f, stageAt[0] - 4, 10)}}>
			{labels.map((l, i) => (
				<div key={l} style={{flex: 1, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, textTransform: 'uppercase', padding: '8px 6px', borderRadius: 999, background: idx === i ? INK : 'transparent', color: idx === i ? '#fffdf8' : INK_SOFT, border: `2.5px solid ${idx === i ? INK : PAPER_DEEP}`}}>{i + 1}  {l}</div>
			))}
		</div>
	);
};

// ---------- molecules ----------
type MolP = {x: number; y: number; rot?: number; s?: number; o?: number};
export const O2Mol: React.FC<MolP> = ({x, y, rot = 0, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<circle cx={-9} cy={0} r={11} fill={OXY} stroke={INK} strokeWidth={1.8} />
		<circle cx={9} cy={0} r={11} fill={OXY} stroke={INK} strokeWidth={1.8} />
	</g>
);
export const CO2Mol: React.FC<MolP> = ({x, y, rot = 0, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<circle cx={-21} cy={0} r={10} fill={OXY} stroke={INK} strokeWidth={1.8} />
		<circle cx={21} cy={0} r={10} fill={OXY} stroke={INK} strokeWidth={1.8} />
		<circle cx={0} cy={0} r={11} fill="#8a857c" stroke={INK} strokeWidth={1.8} />
	</g>
);
export const H2OMol: React.FC<MolP> = ({x, y, rot = 0, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<circle cx={-12} cy={11} r={7} fill="#fffdf8" stroke={INK} strokeWidth={1.6} />
		<circle cx={12} cy={11} r={7} fill="#fffdf8" stroke={INK} strokeWidth={1.6} />
		<circle cx={0} cy={0} r={11} fill={OXY} stroke={INK} strokeWidth={1.8} />
	</g>
);
export const H2Mol: React.FC<MolP> = ({x, y, rot = 0, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<circle cx={-7} cy={0} r={7} fill="#fffdf8" stroke={INK} strokeWidth={1.6} />
		<circle cx={7} cy={0} r={7} fill="#fffdf8" stroke={INK} strokeWidth={1.6} />
	</g>
);
export const Crystal: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<rect x={-34} y={-34} width={68} height={68} rx={7} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
		{[-21, -7, 7, 21].flatMap(a => [-21, -7, 7, 21].map(b => <circle key={`${a}${b}`} cx={a} cy={b} r={6.4} fill="#c7bda9" stroke={INK} strokeWidth={1.2} />))}
	</g>
);

// ---------- reaction box: glucose burning (q=0 reactants) and its reverse (q from 1 to 0) ----------
const O2_AT = [[.40, .20], [.62, .30], [.84, .18], [.50, .50], [.76, .52], [.90, .38]];
const CO2_AT = [[.12, .26], [.30, .46], [.52, .22], [.72, .46], [.88, .28], [.24, .62]];
const H2O_AT = [[.55, .74], [.68, .72], [.82, .74], [.60, .88], [.74, .87], [.88, .88]];
const CRY = [.17, .76];
export const rbPos = (x: number, y: number, w: number, h: number) => ({crystal: [x + CRY[0] * w, y + CRY[1] * h] as [number, number], puddle: [x + 0.78 * w, y + 0.84 * h] as [number, number]});
export const ReactionBox: React.FC<{x: number; y: number; w: number; h: number; q: number; opacity?: number; ms?: number}> = ({x, y, w, h, q, opacity = 1, ms = 1}) => {
	const f = useCurrentFrame();
	const e = smooth(q);
	const wob = (i: number, k: number) => Math.sin(f * 0.055 + i * 1.9 + k) * 7 * Math.min(ms, 2);
	const cx = x + CRY[0] * w, cy = y + CRY[1] * h;
	const cryO = 1 - smooth(q * 2.2);
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill="rgba(255,255,255,0.55)" stroke={INK_SOFT} strokeWidth={4} />
			<ellipse cx={x + 0.72 * w} cy={y + 0.81 * h} rx={0.26 * w} ry={0.15 * h} fill="#bcd6ee" opacity={0.55 * smooth((q - 0.2) / 0.5)} />
			{cryO > 0.01 ? <Crystal x={cx} y={cy} s={(0.9 + 0.1 * cryO) * ms * 0.9} o={cryO} /> : null}
			{O2_AT.map(([ax, ay], i) => {
				const [bx, by] = CO2_AT[i];
				const px = x + (ax + (bx - ax) * e) * w + wob(i, 0), py = y + (ay + (by - ay) * e) * h + wob(i, 2);
				const oO = 1 - smooth((q - 0.05) / 0.5), oC = smooth((q - 0.3) / 0.5);
				return (
					<g key={i}>
						{oO > 0.01 ? <O2Mol x={px} y={py} rot={f * 0.8 + i * 40} o={oO} s={ms} /> : null}
						{oC > 0.01 ? <CO2Mol x={px} y={py} rot={-f * 0.6 + i * 30} o={oC} s={ms} /> : null}
					</g>
				);
			})}
			{H2O_AT.map(([wx, wy], i) => {
				const u = smooth((q - 0.2) / 0.7);
				const px = cx + (x + wx * w - cx) * u, py = cy + (y + wy * h - cy) * u;
				const o = smooth((q - 0.15) / 0.25);
				return o > 0.01 ? <H2OMol key={i} x={px + Math.sin(f * 0.04 + i) * 3} y={py + Math.cos(f * 0.05 + i) * 2} rot={i * 50} o={o} s={ms * 0.9} /> : null;
			})}
		</g>
	);
};

// ---------- scattering dots (entropy icon and recall block) ----------
export const DotBlock: React.FC<{cx: number; cy: number; cols: number; rows: number; gap: number; p: number; spread: number; seed?: number; r?: number; color?: string}> = ({cx, cy, cols, rows, gap, p, spread, seed = 3, r = 11, color = SPREAD}) => {
	const f = useCurrentFrame();
	const e = smooth(p);
	const pts = useMemo(() => {
		const g = rng(seed);
		return Array.from({length: cols * rows}, (_, i) => ({i, c: i % cols, r: Math.floor(i / cols), tx: (g() - 0.5) * 2, ty: (g() - 0.5) * 2, ph: g() * 6}));
	}, [cols, rows, seed]);
	return (
		<g>
			{pts.map(d => {
				const bx = (d.c - (cols - 1) / 2) * gap, by = (d.r - (rows - 1) / 2) * gap;
				const jx = Math.sin(f * 0.07 + d.ph) * 10 * e, jy = Math.cos(f * 0.06 + d.ph) * 10 * e;
				return <circle key={d.i} cx={cx + bx + (d.tx * spread - bx) * e + jx} cy={cy + by + (d.ty * spread * 0.62 - by) * e + jy} r={r} fill={color} stroke={INK} strokeWidth={1.5} opacity={0.92} />;
			})}
		</g>
	);
};

// ---------- energy level diagram ----------
const wavy = (x0: number, x1: number, y: number, amp: number, wl: number) => {
	let d = `M${x0},${y}`;
	for (let x = x0; x <= x1; x += 6) d += ` L${x},${(y + Math.sin(((x - x0) / wl) * 6.283) * amp).toFixed(1)}`;
	return d;
};
export type LevelT = {levels: number; arrow: number; heat: number};
export const LevelDiagram: React.FC<{x: number; y: number; w: number; h: number; dir: 'down' | 'up'; t: LevelT; value: string; valueColor?: string; startLabel: string; endLabel: string; heat?: boolean; light?: boolean; opacity?: number; lightAt?: number; valueSize?: number}> = ({x, y, w, h, dir, t, value, valueColor = HEAT, startLabel, endLabel, heat = false, light = false, opacity = 1, lightAt = 0, valueSize = 46}) => {
	const hi = y + 0.28 * h, lo = y + 0.84 * h;
	const ys = dir === 'down' ? hi : lo, ye = dir === 'down' ? lo : hi;
	const ax = x + 0.4 * w;
	const sign = dir === 'down' ? 1 : -1;
	const tipY = ye - sign * 16;
	return (
		<g opacity={opacity}>
			<DrawPath d={`M${x + 0.04 * w},${ys} L${ax},${ys}`} at={t.levels} dur={16} color={INK} width={6} />
			<DrawPath d={`M${ax},${ye} L${x + 0.76 * w},${ye}`} at={t.levels + 6} dur={16} color={INK} width={6} />
			<SvgText x={x + 0.04 * w} y={ys + (dir === 'down' ? -16 : 46)} text={startLabel} size={40} color={INK} at={t.levels + 4} />
			<SvgText x={x + 0.76 * w} y={ye + (dir === 'down' ? 46 : -16)} text={endLabel} size={40} color={INK} anchor="end" at={t.levels + 10} />
			<DrawPath d={`M${ax},${ys} L${ax},${tipY}`} at={t.arrow} dur={26} color={HEAT} width={11} />
			<DrawPath d={`M${ax - 18},${tipY - sign * 22} L${ax},${tipY + sign * 4} L${ax + 18},${tipY - sign * 22}`} at={t.arrow + 20} dur={10} color={HEAT} width={11} />
			<SvgText x={ax} y={y + 0.12 * h} text={value} size={valueSize} color={valueColor} anchor="middle" at={t.arrow + 6} hand={false} weight={800} />
			{heat ? (
				<>
					{[0.4, 0.5, 0.6].map((fy, i) => (
						<g key={i}>
							<DrawPath d={wavy(ax + 22, x + 0.79 * w - 12, y + fy * h, 7, 46)} at={t.heat + i * 10} dur={26} color={HEAT} width={5} />
							<DrawPath d={`M${x + 0.79 * w - 28},${y + fy * h - 12} L${x + 0.79 * w - 10},${y + fy * h} L${x + 0.79 * w - 28},${y + fy * h + 12}`} at={t.heat + 20 + i * 10} dur={8} color={HEAT} width={5} />
						</g>
					))}
					<Fade at={t.heat - 4}>
						<rect x={x + 0.8 * w} y={y + 0.3 * h} width={0.2 * w} height={0.4 * h} rx={16} fill={SURR} stroke="#7b8fa3" strokeWidth={3.5} />
						<text x={x + 0.9 * w} y={y + 0.5 * h + 12} textAnchor="middle" fill="#3d5266" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34}}>surroundings</text>
					</Fade>
				</>
			) : null}
			{light ? (
				<>
					<Fade at={lightAt}>
						<circle cx={x + 0.1 * w} cy={y + 0.12 * h} r={26} fill={LIGHT} stroke={INK} strokeWidth={2.5} />
						{Array.from({length: 8}, (_, i) => <path key={i} d={`M${x + 0.1 * w + Math.cos(i * 0.785) * 36},${y + 0.12 * h + Math.sin(i * 0.785) * 36} L${x + 0.1 * w + Math.cos(i * 0.785) * 50},${y + 0.12 * h + Math.sin(i * 0.785) * 50}`} stroke={LIGHT} strokeWidth={5} strokeLinecap="round" />)}
					</Fade>
					{[0, 1, 2].map(i => <DrawPath key={i} d={`M${x + 0.1 * w + 40 + i * 10},${y + 0.18 * h + i * 34} L${ax - 28},${y + 0.5 * h + i * 12}`} at={lightAt + 6 + i * 8} dur={20} color={LIGHT} width={6} />)}
					<SvgText x={ax + 26} y={y + 0.56 * h} text="energy in (light)" size={40} color="#8a6500" at={lightAt + 10} />
				</>
			) : null}
		</g>
	);
};

// ---------- cards used on the worked-example boards ----------
export type GivenRow = {sym: 'H' | 'S'; value: string; unit: string; at: number; note?: string; color?: string};
export const GivensCard: React.FC<{x: number; y: number; w: number; rows: GivenRow[]; title?: string; titleAt: number; out?: number}> = ({x, y, w, rows, title = 'Givens at 25 °C', titleAt, out}) => (
	<Panel x={x} y={y} w={w} at={titleAt} out={out}>
		<T size={28} color={INK_SOFT} weight={800} style={{letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6}}>{title}</T>
		{rows.map((r, i) => (
			<Enter key={i} at={r.at} dy={10} style={{marginTop: 8}}>
				<div style={{display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap'}}>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: r.color ?? (r.sym === 'H' ? HEAT : SPREAD)}}>{r.sym === 'H' ? 'ΔH' : 'TΔS'} = {r.value}</span>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 30, color: INK}}>{r.unit}</span>
				</div>
				{r.note ? <T size={28} color={INK_SOFT} weight={500}>{r.note}</T> : null}
			</Enter>
		))}
	</Panel>
);

/** Large boxed answer (dark ink). */
export const AnswerBox: React.FC<{x: number; y: number; at: number; text: string; size?: number; out?: number}> = ({x, y, at, text, size = 72, out}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: '#fffdf8', border: `5px solid ${INK}`, borderRadius: 16, padding: '6px 26px', boxShadow: '0 12px 26px rgba(60,45,20,0.12)'}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{text.split(/( kJ.*)/).map((t, i) => i === 1 ? <span key={i} style={{fontSize: size * 0.58, fontWeight: 700}}>{'  ' + t.trim()}</span> : <span key={i}>{t}</span>)}</span>
		</div>
	</Enter>
);

// ---------- calibration guide bar ----------
export const GuideBar: React.FC<{x: number; y: number; w: number; at: number; s?: number; marker?: boolean; markerAt?: number; leftAt?: number; rightAt?: number; thumb?: boolean; splitR?: number; lab?: number; twoLine?: boolean; out?: number}> = ({x, y, w, at, out, s = 1, marker = false, markerAt = 0, leftAt, rightAt, thumb = true, splitR = 0.74, lab, twoLine = false}) => {
	const f = useCurrentFrame();
	const LS = lab ?? 42 * s;
	const lines = twoLine ? 2 : 1;
	const bandY = 28 * s + lines * LS * 1.05 + 14 * s, bandH = 54 * s;
	const H = bandY + bandH + 80 * s + 90 * s;
	const split = splitR * w;
	const mk = marker ? prog(f, markerAt, 36) : 0;
	const mkX = split * 0.5;
	const rx = split + 8 * s + (w - split - 8 * s) / 2;
	const label = (cx: number, color: string, l1: string, l2: string, op: number) => (
		<text textAnchor="middle" fill={color} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: LS, opacity: op}}>
			{twoLine ? (<><tspan x={cx} y={bandY - 14 * s - LS * 1.02}>{l1}</tspan><tspan x={cx} y={bandY - 14 * s}>{l2}</tspan></>) : <tspan x={cx} y={bandY - 14 * s}>{l1 + ' ' + l2}</tspan>}
		</text>
	);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: H, opacity: prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 12))}}>
			<svg width={w} height={H} viewBox={`0 0 ${w} ${H}`} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<rect x={0} y={bandY} width={split} height={bandH} rx={bandH / 2} fill="#cfe8dc" stroke={TEAL} strokeWidth={3} />
				<rect x={split + 8 * s} y={bandY} width={w - split - 8 * s} height={bandH} rx={bandH / 2} fill="#f6e3b8" stroke="#b58a1d" strokeWidth={3} />
				{label(split / 2, TEAL, 'hundreds below zero:', 'essentially all products', leftAt === undefined ? 1 : prog(f, leftAt, 10))}
				{label(rx, '#7a5a00', 'near zero:', 'a real mixture', rightAt === undefined ? 1 : prog(f, rightAt, 10))}
				<path d={`M${w - 4 * s},${bandY + bandH + 8 * s} L${w - 4 * s},${bandY + bandH + 30 * s}`} stroke={INK} strokeWidth={4 * s} strokeLinecap="round" />
				<text x={w - 4 * s} y={bandY + bandH + 62 * s} textAnchor="end" fill={INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(28, 30 * s)}}>ΔG = 0</text>
				<text x={0} y={bandY + bandH + 62 * s} fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: Math.max(28, 28 * s)}}>more negative ΔG</text>
				{marker ? <circle cx={mkX} cy={bandY + bandH / 2} r={(bandH * 0.62) * mk} fill={HEAT} stroke={INK} strokeWidth={3} /> : null}
			</svg>
			{thumb ? <Plate src={A.FLASK_EQ} natural={A.FLASK_NAT} crop={A.FLASK_CROP} width={36 * s} style={{left: rx - 18 * s, top: bandY + bandH + 4 * s, opacity: 0.95}} /> : null}
		</div>
	);
};

// ---------- sealed tube, clock and calendar ----------
const H2_AT = [[.12, .32], [.30, .68], [.52, .30], [.72, .68]];
const O2T_AT = [[.36, .40], [.86, .36]];
const H2O_T = [[.14, .52], [.38, .52], [.62, .52], [.86, .52]];
export const Tube: React.FC<{x: number; y: number; w: number; h: number; q?: number; opacity?: number}> = ({x, y, w, h, q = 0, opacity = 1}) => {
	const f = useCurrentFrame();
	const e = smooth(q);
	const pos = (a: number[], tgt: number[], i: number) => [x + (a[0] + (tgt[0] - a[0]) * e) * w + Math.sin(f * 0.05 + i * 2.1) * 9 * (1 - e), y + (a[1] + (tgt[1] - a[1]) * e) * h + Math.cos(f * 0.045 + i * 1.7) * 7 * (1 - e)];
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill="rgba(255,255,255,0.6)" stroke={INK_SOFT} strokeWidth={5} />
			{H2_AT.map((a, i) => { const p = pos(a, H2O_T[i], i); return <H2Mol key={i} x={p[0]} y={p[1]} rot={f * 0.5 + i * 50} s={1.1} o={1 - smooth(q * 1.6)} />; })}
			{O2T_AT.map((a, i) => { const p = pos(a, H2O_T[i * 2 + 1], i + 5); return <O2Mol key={i} x={p[0]} y={p[1]} rot={-f * 0.6 + i * 70} s={1.1} o={1 - smooth(q * 1.6)} />; })}
			{H2O_T.map((a, i) => <H2OMol key={i} x={x + a[0] * w} y={y + a[1] * h - 6} rot={i * 25} s={1.1} o={smooth((q - 0.45) / 0.45)} />)}
		</g>
	);
};

/** Fast clock hand plus a calendar that counts years. */
export const ClockCal: React.FC<{cx: number; cy: number; r: number; at: number; out?: number}> = ({cx, cy, r, at, out}) => {
	const f = useCurrentFrame();
	const yr = Math.min(9, 1 + Math.floor(Math.max(0, f - at) / 55));
	const ang = Math.max(0, f - at) * 14;
	const rad = (d: number) => (d * Math.PI) / 180;
	return (
		<Fade at={at} out={out}>
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK} strokeWidth={5} />
			{Array.from({length: 12}, (_, i) => <path key={i} d={`M${cx + Math.sin(i * 0.5236) * (r - 5)},${cy - Math.cos(i * 0.5236) * (r - 5)} L${cx + Math.sin(i * 0.5236) * (r - 14)},${cy - Math.cos(i * 0.5236) * (r - 14)}`} stroke={INK} strokeWidth={3} />)}
			<path d={`M${cx},${cy} L${cx + Math.sin(rad(ang)) * (r - 16)},${cy - Math.cos(rad(ang)) * (r - 16)}`} stroke={HEAT} strokeWidth={5} strokeLinecap="round" />
			<path d={`M${cx},${cy} L${cx + Math.sin(rad(ang / 12)) * (r - 34)},${cy - Math.cos(rad(ang / 12)) * (r - 34)}`} stroke={INK} strokeWidth={6} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={6} fill={INK} />
			<rect x={cx + r + 18} y={cy - 46} width={150} height={92} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<rect x={cx + r + 18} y={cy - 46} width={150} height={28} rx={14} fill={BAD} />
			<text x={cx + r + 93} y={cy + 32} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}}>year {yr}</text>
		</Fade>
	);
};

// ---------- icons ----------
export const HeatIcon: React.FC<{cx: number; cy: number; s?: number; at: number}> = ({cx, cy, s = 1, at}) => (
	<g transform={`translate(${cx},${cy}) scale(${s})`}>
		{[-26, 0, 26].map((dx, i) => <DrawPath key={i} d={`M${dx},34 Q${dx - 14},12 ${dx},-4 T${dx},-40`} at={at + i * 6} dur={22} color={HEAT} width={7} />)}
	</g>
);
export const SpreadIcon: React.FC<{cx: number; cy: number; s?: number; p: number}> = ({cx, cy, s = 1, p}) => (
	<g transform={`translate(${cx},${cy}) scale(${s})`}><DotBlock cx={0} cy={0} cols={3} rows={3} gap={20} p={p} spread={52} r={7} seed={4} /></g>
);
export const DgIcon: React.FC<{cx: number; cy: number; s?: number; o?: number}> = ({cx, cy, s = 1, o = 1}) => (
	<g transform={`translate(${cx},${cy}) scale(${s})`} opacity={o}>
		<circle r={40} fill="#fffdf8" stroke={INK} strokeWidth={5} />
		<text y={15} textAnchor="middle" fill={INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 42}}>ΔG</text>
	</g>
);
export const FireIcon: React.FC<{cx: number; cy: number; s?: number; lit?: number}> = ({cx, cy, s = 1, lit = 1}) => (
	<g transform={`translate(${cx},${cy}) scale(${s})`} opacity={0.35 + 0.65 * lit}>
		<SvgPaint {...G1.flame} x={-17} y={-46} w={34} />
	</g>
);
export const LeafIcon: React.FC<{cx: number; cy: number; s?: number; lit?: number}> = ({cx, cy, s = 1, lit = 1}) => (
	<g transform={`translate(${cx},${cy}) scale(${s})`} opacity={0.35 + 0.65 * lit}>
		<SvgPaint {...G1.leaf} x={-43} y={-24} w={86} />
	</g>
);

/** Bar for rate thumbnails. */
export const RateBar: React.FC<{x: number; base: number; h: number; w?: number; color: string; label?: string; labelColor?: string; at: number}> = ({x, base, h, w = 100, color, label, labelColor = INK, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16);
	return (
		<g opacity={p}>
			<rect x={x} y={base - Math.max(2, h)} width={w} height={Math.max(2, h)} rx={6} fill={color} fillOpacity={0.55} stroke={color} strokeWidth={4} />
			{label ? <text x={x + w / 2} y={base + 40} textAnchor="middle" fill={labelColor} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>{label}</text> : null}
		</g>
	);
};
export {HEAT, HEAT_SOFT, SPREAD, SPREAD_SOFT, BAD};
