// B8-12 coded parts (lesson-local; b13 to b16 may import them read-only). Abstract diagrams only; organs, cells and
// objects stay painted plates. Nothing here draws people, hands or faces.
// - SlotStrip: four linked boxes (the mechanism strip "liver, signal, glucose into cells, vessels" and the evidence frame
//   "mechanism, evidence, durability, access"). Heads show from the first frame; a box lights on its cue; action chips
//   dock into a box (flying in from where the action was shown), or short answer lines write in it.
// - Meter: the HbA1c gauge (5 to 10 %), a green typical-target band and a pointer that follows a frame function.
// - KeyLock: a coded keyhole plate with no key (type 1) or a key in it with a red jam mark (type 2).
// - GroupBars: a two or three bar trial chart; dashed outlines from the first frame, each bar fills on cue.
// - Clusters: practice clusters (six dots in a rounded outline) that move as whole clusters into two groups.
// - HexFlow: glucose hexagons streaming along a path; Calendar: a week with one marked day.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, BLUE, CARD, EDGE, GREEN, GREYT, Hex, INK, INK_SOFT, RED, Sx, TEAL, lerp, mw, prog, pulse, smooth, vis, wrapM} from '../bio-m8-b08/parts';

export * from '../bio-m8-b08/parts';
export type P2 = [number, number];
export const TEALD = '#2f5f8f';

// ---------- slot strip ----------
export type SItem = {t: string; at: number; out?: number; chip?: string; from?: P2};
export type SSlot = {head: string; lit?: number; items?: SItem[]};
export const stripXs = (x: number, ws: number[], gap: number) => ws.map((_, i) => x + ws.slice(0, i).reduce((a, b) => a + b + gap, 0));
export const SlotStrip: React.FC<{x: number; y: number; ws: number[]; h: number; slots: SSlot[]; gap?: number; headSize?: number; size?: number; pulseAt?: number; o?: number; dy?: number; title?: string}> = ({x, y, ws, h, slots, gap = 40, headSize = 30, size = 30, pulseAt, o = 1, dy = 0, title}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const xs = stripXs(x, ws, gap);
	const fly: React.ReactNode[] = [];
	const boxes = slots.map((s, i) => {
		const bx = xs[i], w = ws[i];
		const L = s.lit === undefined ? 0 : prog(f, s.lit, 12);
		const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt + i * 12, 30);
		const heads = wrapM(s.head, headSize, w - 30, true, 700).slice(0, 2);
		let cy = y + 14 + heads.length * Math.round(headSize * 1.08) + 12;
		let cx = bx + 16;
		const rowH = size * 1.5 + 8;
		const out: React.ReactNode[] = [];
		(s.items ?? []).forEach((it, k) => {
			if (it.out !== undefined && f >= it.out + 12) return;
			const v = vis(f, it.at, it.out, 12);
			if (it.chip) {
				const cw = mw(it.t, size, true, 700) + size * 1.1;
				if (cx + cw > bx + w - 12 && cx > bx + 16) { cx = bx + 16; cy += rowH; }
				const px = cx, py = cy;
				cx += cw + 10;
				if (v <= 0.01) return;
				const t = 1;
				const X = px, Y = py;
				const pop = it.at > -100 ? 1 + 0.25 * (1 - smooth(prog(f, it.at, 16))) : 1;
				const glow = it.at > -100 ? pulse(f, it.at, 40) : 0;
				const node = <g key={'c' + k} opacity={v} transform={pop !== 1 ? `translate(${X + cw / 2},${Y + size * 0.75}) scale(${pop}) translate(${-(X + cw / 2)},${-(Y + size * 0.75)})` : undefined}>
					{glow > 0.01 ? <rect x={X - 6} y={Y - 6} width={cw + 12} height={size * 1.5 + 12} rx={size} fill={AMBER} opacity={0.5 * glow} /> : null}
					<rect x={X} y={Y} width={cw} height={size * 1.5} rx={size * 0.75} fill={it.chip} stroke="rgba(0,0,0,0.12)" strokeWidth={2} />
					<Sx x={X + cw / 2} y={Y + size * 1.08} text={it.t} size={size} color={CARD} anchor="middle" hand weight={700} at={-1000} />
				</g>;
				if (t < 0.999) fly.push(node); else out.push(node);
			} else {
				if (cx > bx + 16) { cx = bx + 16; cy += rowH; }
				const lines = wrapM(it.t, size, w - 30, true, 700);
				const y0 = cy + size * 0.95;
				cy += lines.length * Math.round(size * 1.1) + 4;
				if (v <= 0.01) return;
				out.push(<g key={'t' + k} opacity={v}>{lines.map((ln, j) => <Sx key={j} x={bx + 16} y={y0 + j * Math.round(size * 1.1)} text={ln} size={size} color={INK} hand weight={700} at={-1000} />)}</g>);
			}
		});
		return (
			<g key={i}>
				{pu > 0.01 ? <rect x={bx - 8} y={y - 8} width={w + 16} height={h + 16} rx={24} fill={AMBER} opacity={0.35 * pu} /> : null}
				<rect x={bx} y={y} width={w} height={h} rx={18} fill={CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} strokeDasharray={L > 0.5 ? undefined : '10 8'} />
				{heads.map((ln, k) => <Sx key={k} x={bx + 16} y={y + 10 + headSize * 0.95 + k * Math.round(headSize * 1.08)} text={ln} size={headSize} color={L > 0.5 ? BLUE : GREYT} hand weight={700} at={-1000} />)}
				{out}
				{i < slots.length - 1 ? <path d={`M${bx + w + 6},${y + h / 2} L${bx + w + gap - 8},${y + h / 2} M${bx + w + gap - 20},${y + h / 2 - 11} L${bx + w + gap - 8},${y + h / 2} L${bx + w + gap - 20},${y + h / 2 + 11}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" /> : null}
			</g>
		);
	});
	return (
		<g opacity={o} transform={dy ? `translate(0,${dy})` : undefined}>
			{title ? <Sx x={x} y={y - 12} text={title} size={28} color={GREYT} hand weight={700} at={-1000} /> : null}
			{boxes}
			{fly}
		</g>
	);
};
/** The mechanism strip (scenes 3 to 7, 12): geometry and heads. */
export const MECH_WS = [330, 330, 330, 330];
export const MECH = {x: 96, y: 872, h: 170, gap: 40};
export const MECH_HEADS = ['glucose released by liver', 'insulin signal', 'glucose into cells', 'damage to vessels'];
/** The evidence frame (scenes 8 to 10, 12): four wider boxes across the frame. */
export const EV_WS = [411, 411, 411, 411];
export const EV = {x: 96, y: 852, h: 196, gap: 28};
export const EV_HEADS = ['mechanism', 'evidence: design, size, length, outcome', 'durability', 'access and cost'];

// chip colours per action
export const C_LIFE = '#2e7d4f', C_MET = '#1f6fb2', C_INS = TEALD, C_CARE = '#a8421c';

// ---------- HbA1c meter ----------
export type MG = {x: number; y: number; w: number};
const mx = (g: MG, v: number) => g.x + ((v - 5) / 5) * g.w;
export const meterX = mx;
export const Meter: React.FC<{g: MG; val?: (f: number) => number; size?: number; o?: number; bar?: number; title?: boolean; band?: string; valLabel?: boolean; marks?: {v: number; t: string; at: number}[]}> = ({g, val, size = 28, o = 1, bar = 34, title = true, band = 'typical target', valLabel = true, marks = []}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const v = val ? Math.max(5, Math.min(10, val(f))) : undefined;
	return (
		<g opacity={o}>
			{title ? <Sx x={g.x} y={g.y - 16} text="HbA1c (%)" size={size} color={INK} weight={800} at={-1000} /> : null}
			<rect x={g.x} y={g.y} width={g.w} height={bar} rx={bar / 2} fill={CARD} stroke={INK} strokeWidth={3} />
			<rect x={mx(g, 6)} y={g.y + 3} width={mx(g, 7) - mx(g, 6)} height={bar - 6} fill={GREEN} opacity={0.35} />
			<rect x={mx(g, 7)} y={g.y + 3} width={mx(g, 10) - mx(g, 7) - bar / 2} height={bar - 6} fill={AMBER} opacity={0.18} />
			{[5, 6, 7, 8, 9, 10].map(t => <g key={t}><line x1={mx(g, t)} x2={mx(g, t)} y1={g.y + bar} y2={g.y + bar + 10} stroke={INK} strokeWidth={3} /><Sx x={mx(g, t)} y={g.y + bar + 12 + size} text={`${t}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
			{band ? <Sx x={(mx(g, 6) + mx(g, 7)) / 2} y={g.y + bar + 26 + size * 2} text={band} size={size} color={GREEN} anchor="middle" hand weight={700} at={-1000} /> : null}
			{marks.map((m, i) => { const k = prog(f, m.at, 12); return k > 0.01 ? <g key={i} opacity={k}><line x1={mx(g, m.v)} x2={mx(g, m.v)} y1={g.y - 6} y2={g.y + bar + 6} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="6 5" /><Sx x={mx(g, m.v)} y={g.y - 16} text={m.t} size={size} color={INK_SOFT} anchor="middle" weight={700} at={-1000} /></g> : null; })}
			{v !== undefined ? <g>
				<path d={`M${mx(g, v)},${g.y + bar * 0.62} l-15,-${bar * 0.62 + 20} l30,0 Z`} fill={RED} stroke={CARD} strokeWidth={2} />
				{valLabel ? <Sx x={mx(g, v)} y={g.y - 30} text={`${v.toFixed(1)}%`} size={size + 8} color={RED} anchor="middle" weight={800} at={-1000} /> : null}
			</g> : null}
		</g>
	);
};

// ---------- key and lock ----------
export const KeyLock: React.FC<{x: number; y: number; s?: number; mode: 'none' | 'jam'; at?: number; out?: number; o?: number; jamAt?: number; lockAt?: number}> = ({x, y, s = 1, mode, at = -1000, out, o = 1, jamAt, lockAt}) => {
	const f = useCurrentFrame();
	const v = vis(f, lockAt ?? at, out, 12) * o;
	if (v <= 0.01) return null;
	const kin = mode === 'jam' ? smooth(prog(f, at, 20)) : 0;
	const kv = prog(f, at, 10);
	const jam = mode === 'jam' ? prog(f, jamAt ?? at + 14, 10) : 0;
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={-60} y={-80} width={120} height={160} rx={18} fill="#e9e2d3" stroke={INK} strokeWidth={4} />
			<circle cx={0} cy={-18} r={18} fill={INK} />
			<path d="M-10,-6 L-18,44 L18,44 L10,-6 Z" fill={INK} />
			{mode === 'none' ? <g opacity={kv}>
				<circle cx={-150} cy={0} r={30} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="7 6" />
				<line x1={-118} x2={-74} y1={0} y2={0} stroke={GREYT} strokeWidth={3} strokeDasharray="7 6" />
			</g> : <g opacity={kv} transform={`translate(${(1 - kin) * -70},0)`}>
				<circle cx={-150} cy={0} r={30} fill={AMBER} stroke={AMBER_INK} strokeWidth={4} />
				<circle cx={-150} cy={0} r={11} fill="#f6f1e7" stroke={AMBER_INK} strokeWidth={3} />
				<rect x={-120} y={-8} width={124} height={16} rx={4} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
				<path d="M-40,8 l0,14 l10,0 l0,-8 l10,0 l0,10 l10,0 l0,-16" fill={AMBER} stroke={AMBER_INK} strokeWidth={3} />
			</g>}
			{jam > 0.01 ? <g opacity={jam}>
				<path d="M24,-46 l14,10 l-12,8 l16,10 l-12,8 l14,10" fill="none" stroke={RED} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
			</g> : null}
		</g>
	);
};

// ---------- group bars ----------
export type GB = {x: number; y: number; w: number; h: number};
export type GBar = {lab: string; v: number; color: string; at: number; out?: number};
export const GroupBars: React.FC<{g: GB; bars: GBar[]; max?: number; size?: number; vsize?: number; o?: number; ticks?: number[]; unit?: string; slots?: number; yTitle?: string; dec?: number; showVal?: boolean}> = ({g, bars, max = 50, size = 28, vsize = 40, o = 1, ticks = [0, 10, 20, 30, 40, 50], unit = '%', slots, yTitle, dec = 0, showVal = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const Y = (v: number) => g.y + g.h - (v / max) * g.h;
	const n = slots ?? bars.length;
	const slot = g.w / n, bw = slot * 0.56;
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.9} />
			{ticks.map(t => <g key={t}><line x1={g.x} x2={g.x + g.w} y1={Y(t)} y2={Y(t)} stroke="#e6ddcc" strokeWidth={1.5} /><line x1={g.x - 10} x2={g.x} y1={Y(t)} y2={Y(t)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 16} y={Y(t) + size * 0.35} text={`${t}`} size={size} color={INK} anchor="end" weight={600} at={-1000} /></g>)}
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
			{yTitle ? <Sx x={g.x - 16} y={g.y - 20} text={yTitle} size={size} color={INK} weight={700} at={-1000} /> : null}
			{bars.map((b, i) => {
				const bx = g.x + slot * i + (slot - bw) / 2;
				const top = Y(b.v);
				const k = smooth(prog(f, b.at, 18)) * (b.out === undefined ? 1 : 1 - prog(f, b.out, 12));
				const hgt = Math.max(4, g.y + g.h - top);
				const lines = b.lab.split('|').flatMap(s => wrapM(s, size, slot - 6, false, 700));
				return (
					<g key={i}>
						<rect x={bx} y={top} width={bw} height={hgt} fill="none" stroke={b.color} strokeWidth={3} strokeDasharray="10 7" opacity={0.7} />
						<rect x={bx} y={g.y + g.h - hgt * k} width={bw} height={hgt * k} fill={b.color} opacity={0.9} />
						{k > 0.5 && showVal ? <Sx x={bx + bw / 2} y={top - 12} text={`${b.v.toFixed(dec)}${unit}`} size={vsize} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
						{lines.map((ln, j) => <Sx key={j} x={bx + bw / 2} y={g.y + g.h + size * 1.3 + j * size * 1.12} text={ln} size={size} color={INK} anchor="middle" weight={700} at={-1000} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- practice clusters ----------
const hsh = (i: number) => ((i * 2654435761) >>> 0) % 1000;
/** cluster i's group (0 or 1), balanced by chance. */
export const grpOf = (i: number) => (hsh(i + 7) % 2);
export const Clusters: React.FC<{n?: number; from: (i: number) => P2; to?: (i: number, grp: number, k: number) => P2; at?: number; o?: number; s?: number; tintAt?: number}> = ({n = 50, from, to, at = 100000, o = 1, s = 1, tintAt}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const cnt = [0, 0];
	const tint = tintAt === undefined ? 0 : prog(f, tintAt, 14);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const grp = grpOf(i);
				const k = cnt[grp]++;
				const t = to ? smooth(prog(f, at + (hsh(i) % 40), 26)) : 0;
				const a = from(i), b = to ? to(i, grp, k) : a;
				const X = lerp(a[0], b[0], t), Y = lerp(a[1], b[1], t);
				const col = tint > 0.5 ? (grp === 0 ? '#2e7d4f' : '#8d857a') : '#a8a092';
				return (
					<g key={i} transform={`translate(${X},${Y}) scale(${s})`}>
						<rect x={-30} y={-20} width={60} height={40} rx={14} fill={CARD} stroke={col} strokeWidth={2.5} />
						{[0, 1, 2, 3, 4, 5].map(d => <circle key={d} cx={-16 + (d % 3) * 16} cy={-7 + Math.floor(d / 3) * 14} r={5.5} fill={tint > 0.5 && grp === 0 ? '#7fb08f' : '#cfc8bb'} stroke={col} strokeWidth={1.4} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- glucose flow ----------
/** n glucose hexagons cycling from a to b (bowed), thinning to `thin` of the dots from `thinAt`. */
export const HexFlow: React.FC<{a: P2; b: P2; at?: number; out?: number; n?: number; period?: number; bow?: number; thinAt?: number; o?: number; r?: number}> = ({a, b, at = -1000, out, n = 5, period = 60, bow = 0, thinAt, o = 1, r = 11}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const thin = thinAt === undefined ? 0 : prog(f, thinAt, 30);
	const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
	return (
		<g opacity={v}>
			{Array.from({length: n}, (_, i) => {
				if (thin > 0.5 && i % 3 !== 0) return null;
				const u = (((f - Math.max(at, 0)) / period + i / n) % 1 + 1) % 1;
				const off = Math.sin(u * Math.PI) * bow;
				return <Hex key={i} x={a[0] + dx * u - (dy / L) * off} y={a[1] + dy * u + (dx / L) * off} r={r} o={Math.min(1, Math.sin(u * Math.PI) * 1.6)} />;
			})}
		</g>
	);
};
/** A coded blood vessel: a pale red tube from x0 to x1 at y. */
export const Vessel: React.FC<{x0: number; x1: number; y: number; h?: number; o?: number}> = ({x0, x1, y, h = 40, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x0} y={y - h / 2} width={x1 - x0} height={h} rx={h / 2} fill="#f6d6d0" stroke="#c8372d" strokeWidth={3} />
	</g>
));

// ---------- weekly calendar ----------
export const Calendar: React.FC<{x: number; y: number; at: number; cell?: number; mark?: number; o?: number}> = ({x, y, at, cell = 54, mark = 2, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={cell * 7 + 16} height={cell + 56} rx={12} fill={CARD} stroke={INK} strokeWidth={3} />
			<rect x={x} y={y} width={cell * 7 + 16} height={18} rx={9} fill={TEAL} />
			{days.map((d, i) => <g key={i}>
				<rect x={x + 8 + i * cell} y={y + 28} width={cell - 6} height={cell + 18} rx={6} fill={i === mark ? '#fbe6c4' : '#f6f1e7'} stroke={EDGE} strokeWidth={2} />
				<Sx x={x + 8 + i * cell + (cell - 6) / 2} y={y + 62} text={d} size={28} color={INK} anchor="middle" weight={700} at={-1000} />
				{i === mark ? <circle cx={x + 8 + i * cell + (cell - 6) / 2} cy={y + 84} r={7} fill={AMBER_INK} /> : null}
			</g>)}
		</g>
	);
};

/** A small tick or minus mark with a hand line beside it. */
export const TickLine: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; minus?: boolean; color?: string; dim?: number}> = ({x, y, text, at, out, size = 40, minus = false, color, dim}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * (dim === undefined ? 1 : 1 - 0.5 * prog(f, dim, 14));
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{minus ? <line x1={x} x2={x + 26} y1={y - size * 0.32} y2={y - size * 0.32} stroke={RED} strokeWidth={6} strokeLinecap="round" />
				: <path d={`M${x},${y - size * 0.35} l10,12 l20,-26`} fill="none" stroke={GREEN} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />}
			<Sx x={x + 44} y={y} text={text} size={size} color={color ?? INK} hand weight={700} at={-1000} />
		</g>
	);
};
