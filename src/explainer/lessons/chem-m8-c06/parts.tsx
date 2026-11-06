// Drawing parts for M8 C06 (dissolved oxygen and BOD). Reuses M8 C05 (and through it C04, C03b to M5: chips, notes,
// crossed chips, plates, question text, countdown, key notes, the coded line graph, row cards, the framed answer, the
// water-column overlay, O2 glyphs, the 60-hour oxygen trace, sun and moon glyphs and the river strip) and M8 C01's burette
// rig. New here (exported for later lessons):
// - Pill row (StepPills): "1 fix", "2 acidify", "3 titrate", the current step lit;
// - BottleStates: the aligned Winkler bottle plates cross-fading in place, with an optional coded pale cloud;
// - FlaskTint: the aligned iodine flask set with a partial "pale straw" lightening, starch blue and the clear endpoint;
// - Glyph (a labelled species dot), EHop (electron dots hopping between two glyphs on a loop);
// - RatioLadder: rungs "1 O2", "2 MnO(OH)2", "2 I2", "4 S2O3 2-" with multiplier arrows, one rung per cue;
// - GuideBand: the 0 to 12 mg/L BOD teaching-guide band with grey zones and a marker;
// - DayStrip (five day ticks), Shutter (a camera-shutter glyph), Lock (a padlock glyph), MicrobeLens (microbes on
//   organic flecks while O2 glyphs fade), FillBar (a horizontal fill gauge) and SatBar (a vertical saturation bar).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {Fade, INK, INK_SOFT, NAVY, O2Glyph, O2_INK, O2C, PicF, Sx, clamp01, lerp, mw, natPt, smooth, vis, seeded} from '../chem-m8-c05/parts';
import type {PDef} from './common';
import {IFL, WB, WB_A} from './common';

export * from '../chem-m8-c05/parts';
export {MohrRig, FlaskStates, rigGeom} from '../chem-m8-c01/parts';
export {Dropper} from '../chem-m8-c03a/parts';
export {SignalPulse} from '../m8-shared/parts';

// ---------- colour key (design) ----------
export const MN2 = '#c9b4b4', MN2_INK = '#7d6262', MNO = '#8a5a2b', MNO_INK = '#5e3a17', IOD = '#b8860b', IOD_INK = '#7a5806';
export const STARCH = '#23306a', THIO = NAVY, ELEC = '#e2b93b', ELEC_INK = '#9a7a12', ANS = '#1f7a55', CROSSR = '#c4432f', GREYT = '#8a847a';

// ---------- step pills ----------
/** Three pills across the top; pill i is current between lit[i] and lit[i + 1]. Earlier pills stay calm with a tick. */
export const StepPills: React.FC<{x?: number; y?: number; lit: number[]; at?: number; size?: number}> = ({x = 1060, y = 112, lit, at = -1000, size = 34}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const items = ['1 fix', '2 acidify', '3 titrate'];
	let cx = x;
	return (
		<g opacity={v}>
			{items.map((t, i) => {
				const w = mw(t, size, true, 700) + size * 1.6, h = size * 1.7;
				const L = prog(f, lit[i] ?? 1e9, 12);
				const cur = L * (lit[i + 1] === undefined ? 1 : 1 - prog(f, lit[i + 1], 12));
				const px = cx;
				cx += w + 46;
				return (
					<g key={i}>
						<rect x={px} y={y} width={w} height={h} rx={h / 2} fill={cur > 0.5 ? '#fff1dd' : '#fffdf8'} stroke={cur > 0.5 ? MNO : L > 0.5 ? '#b9ad98' : 'rgba(60,45,20,0.25)'} strokeWidth={cur > 0.5 ? 5 : 2.5} />
						<Sx x={px + w / 2} y={y + h / 2 + size * 0.34} text={t} size={size} color={cur > 0.5 ? MNO_INK : L > 0.5 ? INK_SOFT : '#a59c8e'} anchor="middle" hand weight={700} at={-1000} />
						{i < 2 ? <path d={`M${px + w + 8},${y + h / 2} L${px + w + 38},${y + h / 2} M${px + w + 28},${y + h / 2 - 9} L${px + w + 38},${y + h / 2} L${px + w + 28},${y + h / 2 + 9}`} stroke="#b9ad98" strokeWidth={4} fill="none" strokeLinecap="round" /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- Winkler bottle states ----------
export type BState = {p: PDef; at: number; dur?: number};
export const wbPt = (x: number, y: number, h: number, n: [number, number]) => natPt(WB.clear, x, y, h, n[0], n[1]);
/** The aligned bottle plates cross-fading in place. `cloud`: [from, to] frames of a coded pale pink-grey cloud in the body. */
export const BottleStates: React.FC<{x: number; y: number; h: number; states: BState[]; cloud?: [number, number]; o?: number}> = ({x, y, h, states, cloud, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const q = states.map(s => prog(f, s.at, s.dur ?? 30));
	const [bx0, by0] = wbPt(x, y, h, [WB_A.bx0 + 30, WB_A.by0 + 200]);
	const [bx1, by1] = wbPt(x, y, h, [WB_A.bx1 - 30, WB_A.by1 - 60]);
	const cl = cloud ? vis(f, cloud[0], cloud[1], 20) : 0;
	return (
		<g opacity={o}>
			{states.map((s, i) => {
				const later = q.slice(i + 1).reduce((a, v) => Math.max(a, v), 0);
				const op = (i === 0 ? 1 : q[i]) * (later >= 0.999 ? 0 : 1);
				return op > 0.01 ? <PicF key={i} p={s.p} x={x} y={y} h={h} o={op} /> : null;
			})}
			{cl > 0.01 ? <ellipse cx={(bx0 + bx1) / 2} cy={(by0 + by1) / 2 + 20} rx={(bx1 - bx0) / 2} ry={(by1 - by0) / 2} fill={MN2} opacity={0.55 * cl} /> : null}
		</g>
	);
};
export const wbW = (h: number) => (WB.clear.box[2] / WB.clear.box[3]) * h;

// ---------- iodine flask with pale straw, starch blue and the endpoint ----------
export const FlaskTint: React.FC<{x: number; y: number; h: number; straw?: number; blue?: number; clear?: number; o?: number}> = ({x, y, h, straw, blue, clear, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const s = straw === undefined ? 0 : prog(f, straw, 40) * 0.62;
	const b = blue === undefined ? 0 : prog(f, blue, 26);
	const c = clear === undefined ? 0 : prog(f, clear, 26);
	return (
		<g opacity={o}>
			{c < 0.999 && b < 0.999 ? <PicF p={IFL.yellow} x={x} y={y} h={h} /> : null}
			{s > 0.01 && b < 0.999 && c < 0.999 ? <PicF p={IFL.clear} x={x} y={y} h={h} o={s} /> : null}
			{b > 0.01 && c < 0.999 ? <PicF p={IFL.blue} x={x} y={y} h={h} o={b} /> : null}
			{c > 0.01 ? <PicF p={IFL.clear} x={x} y={y} h={h} o={c} /> : null}
		</g>
	);
};

// ---------- species glyph and electron hop ----------
export const Glyph: React.FC<{x: number; y: number; label: string; fill: string; ink: string; r?: number; size?: number; o?: number}> = ({x, y, label, fill, ink, r = 44, size = 26, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={fill} stroke={ink} strokeWidth={3} />
		<Sx x={x} y={y + size * 0.35} text={label} size={size} color={ink} anchor="middle" weight={800} at={-1000} />
	</g>
));
/** Electron dots leaving a and landing on b, every `every` frames from `at` until `until`. */
export const EHop: React.FC<{a: [number, number]; b: [number, number]; at: number; until?: number; every?: number; bow?: number}> = ({a, b, at, until = 1e9, every = 22, bow = -90}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	const dots: React.ReactNode[] = [];
	for (let t0 = at; t0 <= Math.min(f, until); t0 += every) {
		const u = (f - t0) / 26;
		if (u < 0 || u > 1) continue;
		const p = smooth(u);
		const x = (1 - p) * (1 - p) * a[0] + 2 * (1 - p) * p * mx + p * p * b[0];
		const y = (1 - p) * (1 - p) * a[1] + 2 * (1 - p) * p * my + p * p * b[1];
		dots.push(
			<g key={t0}>
				<circle cx={x} cy={y} r={11} fill={ELEC} stroke={ELEC_INK} strokeWidth={2} />
				<Sx x={x} y={y + 6} text="e" size={16} color={ELEC_INK} anchor="middle" weight={800} at={-1000} />
			</g>,
		);
	}
	return (
		<g opacity={prog(f, at, 10)}>
			<path d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} fill="none" stroke={ELEC_INK} strokeWidth={3} strokeDasharray="8 8" opacity={0.5} />
			<path d={(() => { const ang = Math.atan2(b[1] - my, b[0] - mx); return `M${b[0] - 20 * Math.cos(ang - 0.5)},${b[1] - 20 * Math.sin(ang - 0.5)} L${b[0]},${b[1]} L${b[0] - 20 * Math.cos(ang + 0.5)},${b[1] - 20 * Math.sin(ang + 0.5)}`; })()} fill="none" stroke={ELEC_INK} strokeWidth={3} opacity={0.6} />
			{dots}
		</g>
	);
};

// ---------- ratio ladder ----------
export type Rung = {t: string; color: string; at: number; mult?: string};
/** Rungs stacked down from y; rung i writes at its `at`, with a multiplier arrow from the rung above. */
export const RatioLadder: React.FC<{x: number; y: number; rungs: Rung[]; gap?: number; size?: number; o?: number; w?: number}> = ({x, y, rungs, gap = 150, size = 52, o = 1, w = 470}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{rungs.map((r, i) => {
				const v = prog(f, r.at, 14);
				if (v <= 0.01) return null;
				const ry = y + i * gap;
				return (
					<g key={i} opacity={v}>
						<rect x={x} y={ry} width={w} height={size * 1.7} rx={18} fill="#fffdf8" stroke={r.color} strokeWidth={4} />
						<Sx x={x + w / 2} y={ry + size * 1.18} text={r.t} size={size} color={r.color} anchor="middle" weight={800} at={-1000} />
						{i > 0 ? (
							<g>
								<DrawPath d={`M${x + 60},${ry - gap + size * 1.7 + 6} L${x + 60},${ry - 8}`} at={r.at - 6} dur={12} color={INK_SOFT} width={4} />
								<path d={`M${x + 48},${ry - 22} L${x + 60},${ry - 8} L${x + 72},${ry - 22}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
								{r.mult ? <Sx x={x + 90} y={ry - (gap - size * 1.7) / 2 + 14} text={r.mult} size={40} color="#c9781a" hand weight={700} at={-1000} /> : null}
							</g>
						) : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- BOD guide band ----------
export const GuideBand: React.FC<{x: number; y: number; w: number; at: number; mark?: {v: number; at: number; label?: string; color?: string}[]; size?: number; caption?: boolean; o?: number}> = ({x, y, w, at, mark = [], size = 30, caption = true, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const X = (q: number) => x + (q / 12) * w;
	const zones: [number, number, string, string][] = [[0, 2, 'under 2', '#e7efe6'], [2, 8, '2 to under 8', '#efe8d6'], [8, 12, '8 or more', '#efdcd6']];
	const d = smooth(prog(f, at, 26));
	return (
		<g opacity={v}>
			{zones.map(([a, b, t, c], i) => (
				<g key={i}>
					<rect x={X(a)} y={y} width={(X(b) - X(a)) * d} height={56} fill={c} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />
					<Sx x={(X(a) + X(b)) / 2} y={y + 38} text={t} size={size} color={INK_SOFT} anchor="middle" weight={700} at={at + 10 + i * 6} />
				</g>
			))}
			{[0, 2, 4, 6, 8, 10, 12].map(q => <g key={q}><line x1={X(q)} x2={X(q)} y1={y + 56} y2={y + 68} stroke={INK} strokeWidth={2.5} /><Sx x={X(q)} y={y + 98} text={`${q}`} size={28} color={INK_SOFT} anchor="middle" weight={600} at={-1000} /></g>)}
			<Sx x={X(12) + 14} y={y + 98} text="mg/L" size={28} color={INK_SOFT} weight={600} at={-1000} />
			{caption ? <Sx x={x} y={y + 146} text="this card's teaching guide: not a legal limit, and a low BOD doesn't mean safe" size={28} color={GREYT} hand weight={700} at={at + 20} /> : null}
			{mark.map((m, i) => {
				const mv = prog(f, m.at, 12);
				if (mv <= 0.01) return null;
				const drop = (1 - smooth(prog(f, m.at, 16))) * -40;
				const c = m.color ?? ANS;
				return (
					<g key={i} opacity={mv} transform={`translate(0,${drop})`}>
						<path d={`M${X(m.v) - 18},${y - 30} L${X(m.v) + 18},${y - 30} L${X(m.v)},${y - 4} Z`} fill={c} />
						<line x1={X(m.v)} x2={X(m.v)} y1={y - 4} y2={y + 56} stroke={c} strokeWidth={5} />
						{m.label ? <Sx x={X(m.v)} y={y - 42} text={m.label} size={34} color={c} anchor="middle" weight={800} at={-1000} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- small glyphs ----------
/** Five day ticks that light one by one between from and to. */
export const DayStrip: React.FC<{x: number; y: number; at: number; from: number; to: number; w?: number; o?: number}> = ({x, y, at, from, to, w = 340, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const k = clamp01((f - from) / Math.max(1, to - from)) * 5;
	const cw = w / 5;
	return (
		<g opacity={v}>
			{[0, 1, 2, 3, 4].map(i => {
				const on = clamp01(k - i);
				return (
					<g key={i}>
						<rect x={x + i * cw + 4} y={y} width={cw - 8} height={58} rx={10} fill={on > 0.5 ? '#f3e2c4' : '#fffdf8'} stroke={on > 0.5 ? '#c9781a' : 'rgba(60,45,20,0.25)'} strokeWidth={3} />
						<Sx x={x + i * cw + cw / 2} y={y + 40} text={`${i + 1}`} size={30} color={on > 0.5 ? '#8a4f0e' : '#a59c8e'} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			<Sx x={x + w / 2} y={y - 12} text="days" size={28} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />
		</g>
	);
};
export const Shutter: React.FC<{x: number; y: number; r?: number; at?: number; snap?: number; o?: number}> = ({x, y, r = 40, at = -1000, snap, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10) * o;
	if (v <= 0.01) return null;
	const s = snap === undefined ? 0 : Math.sin(clamp01((f - snap) / 14) * Math.PI);
	return (
		<g opacity={v}>
			<rect x={x - r * 1.5} y={y - r * 1.05} width={r * 3} height={r * 2.1} rx={r * 0.35} fill="#5b5b66" stroke="#2f2f36" strokeWidth={3} />
			<rect x={x - r * 0.9} y={y - r * 1.35} width={r * 0.8} height={r * 0.35} rx={6} fill="#5b5b66" />
			<circle cx={x} cy={y} r={r * 0.78} fill="#dfe6ee" stroke="#2f2f36" strokeWidth={3} />
			<circle cx={x} cy={y} r={r * 0.78 * (1 - 0.85 * s)} fill="#2f2f36" opacity={0.25 + 0.75 * s} />
		</g>
	);
};
export const Lock: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 1, color = MNO}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	const shut = smooth(prog(f, at + 8, 14));
	return (
		<g opacity={v}>
			<path d={`M${x - 20 * s},${y} L${x - 20 * s},${y - 24 * s - 10 * (1 - shut) * s} A${20 * s},${20 * s} 0 0 1 ${x + 20 * s},${y - 24 * s - 10 * (1 - shut) * s} L${x + 20 * s},${y}`} fill="none" stroke={color} strokeWidth={7 * s} />
			<rect x={x - 32 * s} y={y - 4 * s} width={64 * s} height={50 * s} rx={8 * s} fill={color} />
			<circle cx={x} cy={y + 18 * s} r={6 * s} fill="#fffdf8" />
		</g>
	);
};
const FLECKS = (() => { const r = seeded(51); return Array.from({length: 7}, () => ({u: r() * 1.6 - 0.8, v: r() * 1.6 - 0.8, a: r() * 180})); })();
const MICR = (() => { const r = seeded(77); return Array.from({length: 14}, () => ({k: Math.floor(r() * 7), dx: r() * 2 - 1, dy: r() * 2 - 1, a: r() * 6})); })();
const O2P = (() => { const r = seeded(19); return Array.from({length: 9}, () => ({u: r() * 1.5 - 0.75, v: r() * 1.5 - 0.75, ph: r() * 6})); })();
/** A round lens: organic flecks (brown-grey), microbes that gather on them from `gather`, O2 glyphs that fade from `use`. */
export const MicrobeLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; gather: number; use: number; title?: string}> = ({cx, cy, r, at, out, gather, use, title}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14);
	if (v <= 0.01) return null;
	const g = smooth(prog(f, gather, 60));
	const id = `ml-${Math.round(cx)}-${Math.round(cy)}`;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill="#eef6fb" stroke={INK} strokeWidth={5} />
			<clipPath id={id}><circle cx={cx} cy={cy} r={r - 4} /></clipPath>
			<g clipPath={`url(#${id})`}>
				{FLECKS.map((p, i) => <ellipse key={'f' + i} cx={cx + p.u * r * 0.7} cy={cy + p.v * r * 0.7} rx={16} ry={9} fill="#a08e74" stroke="#6e5f48" strokeWidth={2} transform={`rotate(${p.a},${cx + p.u * r * 0.7},${cy + p.v * r * 0.7})`} />)}
				{O2P.map((p, i) => {
					const o = 1 - clamp01((f - use - i * 10) / 30);
					return <O2Glyph key={'o' + i} x={cx + p.u * r * 0.8 + Math.sin(f * 0.04 + p.ph) * 6} y={cy + p.v * r * 0.8} s={0.75} o={o * 0.95} />;
				})}
				{MICR.map((m, i) => {
					const fl = FLECKS[m.k];
					const fx = cx + fl.u * r * 0.7, fy = cy + fl.v * r * 0.7;
					const sx = cx + m.dx * r * 0.85, sy = cy + m.dy * r * 0.85;
					const x = lerp(sx, fx + Math.cos(m.a) * 22, g) + Math.sin(f * 0.07 + m.a) * 3, y = lerp(sy, fy + Math.sin(m.a) * 16, g);
					return <rect key={'m' + i} x={x - 9} y={y - 4.5} width={18} height={9} rx={4.5} fill="#7d6a58" transform={`rotate(${m.a * 30},${x},${y})`} />;
				})}
			</g>
			{title ? <Sx x={cx} y={cy + r + 40} text={title} size={30} color={INK} anchor="middle" hand weight={700} at={at + 6} /> : null}
		</g>
	);
};
/** Horizontal fill gauge: fraction k (0..1) fills from the left after `at`. */
export const FillBar: React.FC<{x: number; y: number; w: number; h?: number; k: number; at: number; color?: string; o?: number}> = ({x, y, w, h = 34, k, at, color = O2_INK, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const p = smooth(prog(f, at, 30)) * k;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
			<rect x={x + 4} y={y + 4} width={Math.max(0, (w - 8) * p)} height={h - 8} rx={(h - 8) / 2} fill={color} opacity={0.75} />
		</g>
	);
};
/** Vertical saturation bar: value v (mg/L) of a 0..10 scale, height h for 10. */
export const SatBar: React.FC<{x: number; base: number; v: number; h: number; at: number; color?: string; w?: number; label: string; sub?: string; o?: number; size?: number; labelAt?: number}> = ({x, base, v, h, at, color = O2C, w = 90, label, sub, o = 1, size = 34, labelAt}) => {
	const f = useCurrentFrame();
	const vv = prog(f, at, 12) * o;
	if (vv <= 0.01) return null;
	const bh = (v / 10) * h * smooth(prog(f, at, 24));
	return (
		<g opacity={vv}>
			<rect x={x} y={base - bh} width={w} height={bh} rx={10} fill={color} stroke={O2_INK} strokeWidth={3} />
			<Sx x={x + w / 2} y={base - bh - 16} text={label} size={size} color={O2_INK} anchor="middle" weight={800} at={labelAt ?? -1000} />
			{sub ? <Sx x={x + w / 2} y={base + 40} text={sub} size={30} color={INK} anchor="middle" weight={700} at={labelAt ?? -1000} /> : null}
		</g>
	);
};
export {Fade, INK, INK_SOFT, NAVY, clamp01, lerp, smooth, vis, prog};
