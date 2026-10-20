// Drawing parts for M6 C07 (pH of strong acids and bases, dilution and mixing), reused by C08. One visual system with
// C01 to C06 (re-exported): proton token and hop, hydronium and hydroxide glyphs, the C03 board (task line, equation
// strip, givens card, working lines that dim, two-bar excess comparison), the C05 meter and pH chip, crossed chips,
// question card, countdown and key notes. New here:
// - the log ruler (concentrations 10^0 to 10^-14 over the pH scale, each power snapping to one pH step) and a small
//   pH track with a sliding marker and a wall at 7;
// - the full meter plate with an amber readout in its screen; a labelled beaker;
// - the hydronium/hydroxide bar pair (teal and violet) with a product chip; the temperature ladder (data rows);
// - the volumetric pipette (rotated about its tip, never stretched) and the flask with a coded liquid level;
// - a volume outline whose tokens spread when it widens; a pairing lens (H3O+ meets OH- and becomes water);
// - the grey-bordered conditional chip and the strong-or-weak gate.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, prog} from '../../kit';
import {
	AChip, BASE, BASE_INK, Fade, GREY_INK, GREYT, H3O, INK, INK_SOFT, LiquidBeaker, OHg, PicH, PROTON, PROTON_INK, READ_BG, READ_TXT, Sx, TEAL, WATER_INK, WATER_SOFT,
	clamp01, lerp, mw, picW, pulseAt, smooth, vis,
} from '../chem-m6-c06/parts';
import type {Piece} from '../chem-m6-c06/parts';
import {BEAKER, FLASK, FLASK_G, FLASK_IN, METER_G, PHMETER, PIPETTE, PIPETTE_G} from './assets';
import type {PDef} from './assets';

export * from '../chem-m6-c06/parts';

// ---------- small helpers ----------
/** x offset (from the line start) of piece k in a Pieces/WLine row. */
export const pieceX = (items: Piece[], k: number, size: number) => {
	let w = 0;
	for (let i = 0; i < k; i++) {
		const s = items[i].size ?? size;
		w += mw(items[i].t, s, items[i].hand, items[i].weight ?? 700) + (items[i].gap ?? s * 0.35);
	}
	return w;
};
/** Width of piece k. */
export const pieceW = (items: Piece[], k: number, size: number) => mw(items[k].t, items[k].size ?? size, items[k].hand, items[k].weight ?? 700);
/** x offset of a substring inside marked-up text drawn with Sx at `size`. */
export const subX = (text: string, sub: string, size: number, weight = 700, occ = 1) => {
	let idx = -1;
	for (let n = 0; n < occ; n++) idx = text.indexOf(sub, idx + 1);
	if (idx < 0) throw new Error(`"${sub}" not in "${text}"`);
	return {x1: mw(text.slice(0, idx), size, false, weight), x2: mw(text.slice(0, idx + sub.length), size, false, weight)};
};
/** A meter count from a to b between frames t0 and t1, shown to dp decimals; '' before `on`. */
export const countRead = (segs: {t0: number; t1: number; a: number; b: number}[], dp: number, on: number) => (f: number) => {
	if (f < on) return '';
	let v = segs[0].a;
	for (const s of segs) if (f >= s.t0) v = lerp(s.a, s.b, smooth(clamp01((f - s.t0) / Math.max(1, s.t1 - s.t0))));
	return v.toFixed(dp);
};
/** Dims children to `to` from `at` (and back from `undim`). */
export const DimG: React.FC<{at: number; to?: number; undim?: number; o?: number; children: React.ReactNode}> = ({at, to = 0.3, undim, o = 1, children}) => {
	const f = useCurrentFrame();
	const d = prog(f, at, 14) * (undim === undefined ? 1 : 1 - prog(f, undim, 14));
	return <g opacity={(1 - (1 - to) * d) * o}>{children}</g>;
};
/** Scales children about (cx, cy) from 1 to k between at and at + 20. */
export const ShrinkAt: React.FC<{cx: number; cy: number; k: number; at: number; tx?: number; ty?: number; children: React.ReactNode}> = ({cx, cy, k, at, tx = 0, ty = 0, children}) => {
	const f = useCurrentFrame();
	const e = smooth(prog(f, at, 22));
	const s = 1 - (1 - k) * e;
	return <g transform={`translate(${tx * e},${ty * e}) translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`}>{children}</g>;
};

// ---------- full meter plate with an amber readout ----------
const mNat = (x: number, y: number, h: number, nx: number, ny: number): [number, number] => {
	const k = h / PHMETER.box[3];
	return [x + (nx - PHMETER.box[0]) * k, y + (ny - PHMETER.box[1]) * k];
};
export const fullMeterW = (h: number) => picW(PHMETER, h);
/** The whole pH meter plate (probe already in its beaker). read(f): screen text. pulse: readout glow frame. */
export const FullMeter: React.FC<{x: number; y: number; h: number; at: number; out?: number; o?: number; read: (f: number) => string; pulse?: number}> = ({x, y, h, at, out, o = 1, read, pulse}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const sc = METER_G.screen.map(([nx, ny]) => mNat(x, y, h, nx, ny));
	const scx = (sc[0][0] + sc[1][0] + sc[2][0] + sc[3][0]) / 4, scy = (sc[0][1] + sc[1][1] + sc[2][1] + sc[3][1]) / 4;
	const sh = sc[3][1] - sc[0][1];
	const txt = read(f);
	const g = pulse === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - pulse) / 40) * Math.PI));
	return (
		<g opacity={v}>
			<PicH p={PHMETER} x={x} y={y} h={h} />
			<path d={`M${sc.map(q => q.join(',')).join(' L')} Z`} fill={READ_BG} opacity={0.94} />
			{g > 0.01 ? <path d={`M${sc.map(q => q.join(',')).join(' L')} Z`} fill="none" stroke={READ_TXT} strokeWidth={6} opacity={g} /> : null}
			{txt ? <text x={scx} y={scy + sh * 0.2} textAnchor="middle" fill={READ_TXT} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: sh * 0.56, fontVariantNumeric: 'tabular-nums'}}>{txt}</text> : null}
		</g>
	);
};
/** Centre of the meter plate's own beaker (for a label under it). */
export const meterBeaker = (x: number, y: number, h: number) => ({cx: mNat(x, y, h, 1560, 0)[0], bottom: mNat(x, y, h, 0, 1809)[1]});

// ---------- labelled beaker ----------
export const beakerW = (h: number) => picW(BEAKER, h);
export const LabelBeaker: React.FC<{x: number; y: number; h: number; at: number; out?: number; o?: number; lines?: {t: string; at: number; out?: number; color?: string}[]; size?: number; tint?: string}> = ({x, y, h, at, out, o = 1, lines = [], size = 34, tint}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const cx = x + beakerW(h) / 2;
	return (
		<g opacity={v}>
			<LiquidBeaker x={x} y={y} h={h} tint={tint} />
			{lines.map((l, i) => <Sx key={i} x={cx} y={y + h + 46 + i * size * 1.25} text={l.t} size={size} color={l.color ?? INK} anchor="middle" weight={600} at={l.at} out={l.out} />)}
		</g>
	);
};

// ---------- log ruler: concentration powers over the pH scale ----------
export const RULE = {top: 'mol/L', n: 15};
/** Concentrations 10^0 .. 10^-14 above, pH 0..14 below; each power snaps down to its pH step (sequentially from
 *  `at`). hi: an index lit teal from its frame. */
export const LogRuler: React.FC<{x: number; y: number; w: number; at: number; out?: number; o?: number; hi?: {i: number; at: number}[]; size?: number; captions?: boolean}> = ({x, y, w, at, out, o = 1, hi = [], size = 28, captions = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const X = (i: number) => x + (i / 14) * w;
	const d = prog(f, at, 20);
	return (
		<g opacity={v}>
			<line x1={x} y1={y} x2={x + w * d} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{captions ? <>
				<Sx x={x - 56} y={y - 52} text="[H_3O^{+}]" size={size} color={PROTON_INK} anchor="end" weight={700} at={at} />
				<Sx x={x - 56} y={y + 52} text="pH" size={size + 2} color={INK} anchor="end" weight={700} at={at} />
			</> : null}
			{Array.from({length: 15}, (_, i) => {
				const t0 = at + 6 + i * 2.2;
				const snap = smooth(prog(f, t0 + 6, 10));
				const lit = hi.filter(h => h.i === i).reduce((a, h) => Math.max(a, prog(f, h.at, 12)), 0);
				const col = lit > 0.5 ? PROTON_INK : INK_SOFT;
				return (
					<g key={i} opacity={prog(f, t0, 8)}>
						{lit > 0.01 ? <rect x={X(i) - 44} y={y - 92} width={88} height={180} rx={18} fill={PROTON} opacity={0.16 * lit} /> : null}
						<Sx x={X(i)} y={y - 52} text={`10^{${i === 0 ? '0' : '−' + i}}`} size={size} color={col} anchor="middle" weight={lit > 0.5 ? 800 : 600} at={-1000} />
						<line x1={X(i)} y1={y - 40} x2={X(i)} y2={y - 40 + 30 * snap} stroke={col} strokeWidth={2.5} strokeDasharray="4 4" />
						<line x1={X(i)} y1={y - 10} x2={X(i)} y2={y + 10} stroke={col} strokeWidth={lit > 0.5 ? 4 : 2.5} />
						<Sx x={X(i)} y={y + 50} text={String(i)} size={size + 4} color={lit > 0.5 ? PROTON_INK : INK} anchor="middle" weight={lit > 0.5 ? 800 : 600} at={-1000} opacity={snap} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- small pH track: marker slides, optional wall at 7, optional bracket ----------
export const PHTrack: React.FC<{x: number; y: number; w: number; at: number; out?: number; o?: number; mark?: {v: (f: number) => number; at: number; label?: (f: number) => string}; ghost?: {v: number; label: string; at: number}; wall?: number; bracket?: {a: number; b: number; text: string; at: number; out?: number}; size?: number}> = ({x, y, w, at, out, o = 1, mark, ghost, wall, bracket, size = 26}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const X = (q: number) => x + (q / 14) * w;
	const wl = wall === undefined ? 0 : prog(f, wall, 12);
	return (
		<g opacity={v}>
			<line x1={x} y1={y} x2={x + w * prog(f, at, 18)} y2={y} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			<Sx x={x - 18} y={y + 9} text="pH" size={size + 2} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
			{Array.from({length: 15}, (_, i) => (
				<g key={i}>
					<line x1={X(i)} y1={y - 9} x2={X(i)} y2={y + 9} stroke={i === 7 ? INK : INK_SOFT} strokeWidth={i === 7 ? 3.5 : 2} />
					<Sx x={X(i)} y={y + 38} text={String(i)} size={size} color={i === 7 ? INK : INK_SOFT} anchor="middle" weight={600} at={-1000} />
				</g>
			))}
			{wl > 0.01 ? <g opacity={wl}><rect x={X(7) - 5} y={y - 50} width={10} height={68} rx={5} fill={TEAL} /></g> : null}
			{ghost ? (
				<Fade at={ghost.at}>
					<path d={`M${X(ghost.v) - 10},${y - 24} L${X(ghost.v) + 10},${y - 24} L${X(ghost.v)},${y - 6} Z`} fill={GREYT} />
					<Sx x={X(ghost.v)} y={y - 34} text={ghost.label} size={size} color={GREY_INK} anchor="middle" weight={600} at={-1000} />
				</Fade>
			) : null}
			{mark ? (() => {
				const mo = prog(f, mark.at, 10);
				if (mo <= 0.01) return null;
				const mx = X(mark.v(f));
				return (
					<g opacity={mo}>
						<path d={`M${mx - 13},${y - 30} L${mx + 13},${y - 30} L${mx},${y - 6} Z`} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} />
						{mark.label ? <Sx x={mx} y={y - 42} text={mark.label(f)} size={size + 4} color={PROTON_INK} anchor="middle" weight={800} at={-1000} /> : null}
					</g>
				);
			})() : null}
			{bracket ? (
				<Fade at={bracket.at} out={bracket.out}>
					<DrawPath d={`M${X(bracket.a)},${y + 56} L${X(bracket.a)},${y + 68} L${X(bracket.b)},${y + 68} L${X(bracket.b)},${y + 56}`} at={bracket.at} dur={14} color={PROTON_INK} width={4} />
					<Sx x={X(bracket.a)} y={y + 104} text={bracket.text} size={size + 4} color={PROTON_INK} weight={700} at={bracket.at + 6} />
				</Fade>
			) : null}
		</g>
	);
};

// ---------- hydronium and hydroxide bars ----------
/** Two vertical bars on a common base: teal [H3O+] at x, violet [OH-] at x + gap. Heights are functions of frame. */
export const IonBars: React.FC<{x: number; base: number; gap?: number; bw?: number; hT: (f: number) => number; hV: (f: number) => number; at: number; out?: number; o?: number; labT?: string; labV?: string; valT?: {t: string; at: number; out?: number}; valV?: {t: string; at: number; out?: number}; size?: number; eq?: {at: number; out?: number}}> = ({x, base, gap = 180, bw = 90, hT, hV, at, out, o = 1, labT = '[H_3O^{+}]', labV = '[OH^{-}]', valT, valV, size = 30, eq}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const g = smooth(prog(f, at, 20));
	const t = hT(f) * g, w = hV(f) * g;
	const xV = x + gap;
	return (
		<g opacity={v}>
			<line x1={x - 40} y1={base} x2={xV + bw + 40} y2={base} stroke={INK_SOFT} strokeWidth={3} />
			<rect x={x} y={base - t} width={bw} height={Math.max(2, t)} rx={10} fill={PROTON} opacity={0.88} />
			<rect x={xV} y={base - w} width={bw} height={Math.max(2, w)} rx={10} fill={BASE} opacity={0.88} />
			<Sx x={x + bw / 2} y={base + size + 12} text={labT} size={size} color={PROTON_INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={xV + bw / 2} y={base + size + 12} text={labV} size={size} color={BASE_INK} anchor="middle" weight={700} at={-1000} />
			{valT ? <Sx x={x + bw / 2} y={base - t - 16} text={valT.t} size={size * 0.92} color={PROTON_INK} anchor="middle" weight={700} at={valT.at} out={valT.out} /> : null}
			{valV ? <Sx x={xV + bw / 2} y={base - w - 16} text={valV.t} size={size * 0.92} color={BASE_INK} anchor="middle" weight={700} at={valV.at} out={valV.out} /> : null}
			{eq ? <Sx x={(x + bw + xV) / 2} y={base - Math.min(t, w) / 2 + 16} text="=" size={52} color={INK} anchor="middle" weight={800} at={eq.at} out={eq.out} /> : null}
		</g>
	);
};

// ---------- temperature ladder (data rows) ----------
export type LRow = {temp: string; kw: string; ph: string; at: number};
export const LadderRows: React.FC<{x: number; y: number; rows: LRow[]; lh?: number; cols?: [number, number, number]; size?: number; lit?: (i: number, f: number) => number; dimAll?: number; head?: number; keep?: number}> = ({x, y, rows, lh = 78, cols = [0, 230, 640], size = 38, lit = () => 0, dimAll, head, keep}) => {
	const f = useCurrentFrame();
	const dAll = dimAll === undefined ? 0 : prog(f, dimAll, 14);
	return (
		<g>
			{head !== undefined ? (
				<g>
					<Sx x={x + cols[0]} y={y - 20} text="temperature" size={26} color={INK_SOFT} weight={600} at={head} />
					<Sx x={x + cols[1]} y={y - 20} text="Kw" size={26} color={INK_SOFT} weight={600} at={head} />
					<Sx x={x + cols[2]} y={y - 20} text="neutral pH" size={26} color={INK_SOFT} weight={600} at={head} />
				</g>
			) : null}
			{rows.map((r, i) => {
				const ly = y + 30 + i * lh;
				const l = lit(i, f);
				const kept = keep === i ? dAll : 0;
				const base = keep === i ? 1 : 1 - 0.68 * dAll;
				const o = prog(f, r.at, 14) * (0.42 + 0.58 * Math.max(l, kept)) * base;
				return (
					<g key={i} opacity={Math.min(1, o)}>
						{l > 0.01 ? <rect x={x - 18} y={ly - lh * 0.66} width={cols[2] + 300} height={lh * 0.88} rx={14} fill="#f6d77a" opacity={0.38 * l} /> : null}
						<Sx x={x + cols[0]} y={ly} text={r.temp} size={size} color={INK} weight={700} at={-1000} />
						<Sx x={x + cols[1]} y={ly} text={r.kw} size={size} color={INK} weight={600} at={-1000} />
						<Sx x={x + cols[2]} y={ly} text={r.ph} size={size} color={TEAL} weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- tokens ----------
/** Water molecule token (pale blue). */
export const WaterT: React.FC<{x: number; y: number; s?: number; o?: number; pop?: number}> = ({x, y, s = 1, o = 1, pop = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={pop !== 1 ? `translate(${x},${y}) scale(${pop}) translate(${-x},${-y})` : undefined}>
		<circle cx={x} cy={y} r={15 * s} fill={WATER_SOFT} stroke={WATER_INK} strokeWidth={2} />
	</g>
));
/** One hydronium and one hydroxide meeting at the midpoint between frames at and at + 24, popping into water. */
export const MeetPair: React.FC<{a: [number, number]; b: [number, number]; at: number; s?: number; o?: number}> = ({a, b, at, s = 1, o = 1}) => {
	const f = useCurrentFrame();
	const p = smooth(clamp01((f - at) / 24));
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
	if (o <= 0.01) return null;
	if (p >= 1) return <WaterT x={mx} y={my} s={s * 1.15} o={o} pop={pulseAt(f, at + 24, 0.4, 16)} />;
	return (
		<g opacity={o}>
			<H3O x={lerp(a[0], mx - 12 * s, p)} y={lerp(a[1], my, p)} s={s} />
			<OHg x={lerp(b[0], mx + 12 * s, p)} y={lerp(b[1], my, p)} s={s} />
		</g>
	);
};

// ---------- volume outline with tokens that spread as it widens ----------
/** A dashed rounded box of size (w(f), h(f)) centred at (cx, cy); tokens sit at unit positions inside it. */
export const VolBox: React.FC<{cx: number; cy: number; w: (f: number) => number; h: (f: number) => number; pts: [number, number][]; kind: 'H' | 'OH'; at: number; out?: number; o?: number; s?: number; stroke?: string}> = ({cx, cy, w, h, pts, kind, at, out, o = 1, s = 1, stroke = INK_SOFT}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const W = w(f), H = h(f);
	return (
		<g opacity={v}>
			<rect x={cx - W / 2} y={cy - H / 2} width={W} height={H} rx={18} fill={WATER_SOFT} fillOpacity={0.45} stroke={stroke} strokeWidth={3.5} strokeDasharray="12 8" />
			{pts.map(([u, q], i) => {
				const [dx, dy] = [Math.sin(f * 0.04 + i * 1.7) * 3, Math.cos(f * 0.035 + i * 2.1) * 3];
				const px = cx + u * (W / 2 - 22 * s) + dx, py = cy + q * (H / 2 - 22 * s) + dy;
				return kind === 'H' ? <H3O key={i} x={px} y={py} s={s} /> : <OHg key={i} x={px} y={py} s={s} />;
			})}
		</g>
	);
};

// ---------- volumetric pipette (rotated about its tip) and flask with a coded liquid level ----------
export const PipettePlate: React.FC<{tipX: number; tipY: number; h: number; rot: number; o?: number}> = ({tipX, tipY, h, rot, o = 1}) => {
	if (o <= 0.01) return null;
	const k = h / PIPETTE.box[3];
	const x = tipX - (PIPETTE_G.tip[0] - PIPETTE.box[0]) * k, y = tipY - (PIPETTE_G.tip[1] - PIPETTE.box[1]) * k;
	return <g opacity={o} transform={`rotate(${rot} ${tipX} ${tipY})`}><PicH p={PIPETTE} x={x} y={y} h={h} /></g>;
};
/** Natural point on the pipette placed by its tip. */
export const pipPt = (tipX: number, tipY: number, h: number, rot: number, nx: number, ny: number): [number, number] => {
	const k = h / PIPETTE.box[3];
	const dx = (nx - PIPETTE_G.tip[0]) * k, dy = (ny - PIPETTE_G.tip[1]) * k;
	const a = (rot * Math.PI) / 180;
	return [tipX + dx * Math.cos(a) - dy * Math.sin(a), tipY + dx * Math.sin(a) + dy * Math.cos(a)];
};
let flaskId = 0;
export const flaskW = (h: number) => picW(FLASK, h);
const fNat = (x: number, y: number, h: number, nx: number, ny: number): [number, number] => {
	const k = h / FLASK.box[3];
	return [x + (nx - FLASK.box[0]) * k, y + (ny - FLASK.box[1]) * k];
};
export const flaskPt = fNat;
/** Flask (cropped above the stopper) with a coded liquid filling to natural level `level(f)` (a y value). */
export const FlaskFill: React.FC<{x: number; y: number; h: number; level: (f: number) => number; o?: number; tint?: string; stopper?: number}> = ({x, y, h, level, o = 1, tint = '#bcd9ee', stopper = 0}) => {
	const f = useCurrentFrame();
	const id = React.useMemo(() => `flask-${++flaskId}`, []);
	if (o <= 0.01) return null;
	const k = h / FLASK.box[3];
	const p: PDef = FLASK;
	const ix = x - p.box[0] * k, iy = y - p.box[1] * k;
	const cut = fNat(x, y, h, 0, FLASK_G.cropTop)[1];
	const lv = fNat(x, y, h, 0, level(f))[1];
	const inner = FLASK_IN.map(([nx, ny]) => fNat(x, y, h, nx, ny));
	return (
		<g opacity={o}>
			<clipPath id={id + 'c'}><rect x={ix} y={cut} width={p.nat[0] * k} height={p.nat[1] * k} /></clipPath>
			<clipPath id={id + 'l'}><path d={`M${inner.map(q => q.join(',')).join(' L')} Z`} /></clipPath>
			<g clipPath={`url(#${id}c)`}><image href={staticFile(p.src)} x={ix} y={iy} width={p.nat[0] * k} height={p.nat[1] * k} /></g>
			{stopper > 0.01 ? <g opacity={stopper}><clipPath id={id + 's'}><rect x={ix} y={iy} width={p.nat[0] * k} height={cut - iy + 2} /></clipPath><g clipPath={`url(#${id}s)`}><image href={staticFile(p.src)} x={ix} y={iy} width={p.nat[0] * k} height={p.nat[1] * k} /></g></g> : null}
			<g clipPath={`url(#${id}l)`}><rect x={ix} y={lv} width={p.nat[0] * k} height={y + h - lv} fill={tint} opacity={0.5} /><line x1={ix} y1={lv} x2={ix + p.nat[0] * k} y2={lv} stroke="#8fb9d8" strokeWidth={3} opacity={0.8} /></g>
		</g>
	);
};

// ---------- conditional chip (grey border) ----------
export const CondChip: React.FC<{x: number; y: number; w: number; lines: {t: string; at: number; size?: number; color?: string; weight?: number}[]; at: number; out?: number; lh?: number}> = ({x, y, w, lines, at, out, lh = 56}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={30 + lines.length * lh} rx={20} fill="#fffdf8" stroke={GREYT} strokeWidth={3.5} />
		{lines.map((l, i) => <Sx key={i} x={x + 28} y={y + 18 + lh * (i + 0.72)} text={l.t} size={l.size ?? 34} color={l.color ?? INK} weight={l.weight ?? 600} at={l.at} />)}
	</Fade>
);

// ---------- strong or weak gate ----------
/** A small diamond gate labelled with a question; branches drawn by the caller. */
export const GateIcon: React.FC<{cx: number; cy: number; r?: number; text: string; at: number; out?: number; size?: number}> = ({cx, cy, r = 40, text, at, out, size = 36}) => (
	<Fade at={at} out={out}>
		<path d={`M${cx},${cy - r} L${cx + r},${cy} L${cx},${cy + r} L${cx - r},${cy} Z`} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
		<Sx x={cx} y={cy + 12} text="?" size={34} color={TEAL} anchor="middle" weight={800} at={-1000} />
		<Sx x={cx + r + 18} y={cy + size * 0.34} text={text} size={size} color={TEAL} hand weight={700} at={at} />
	</Fade>
);

// ---------- board helpers ----------
/** Step chip placed after the task line text. */
export const StepAfter: React.FC<{task: string; text: string; at: number; out?: number; size?: number}> = ({task, text, at, out, size = 52}) => (
	<AChip x={96 + mw(task, size, true, 700) + 46} y={106} text={text} size={30} color={TEAL} at={at} out={out} hand={false} />
);
/** A kept result chip that can pulse. */
export const KeptChip: React.FC<{x: number; y: number; text: string; at: number; out?: number; pulse?: number; color?: string; size?: number}> = ({x, y, text, at, out, pulse, color = INK, size = 34}) => {
	const f = useCurrentFrame();
	const s = pulse === undefined ? 1 : pulseAt(f, pulse, 0.08, 30);
	return <g transform={`translate(${x},${y + 26}) scale(${s}) translate(${-x},${-(y + 26)})`}><AChip x={x} y={y} text={text} size={size} color={color} hand={false} at={at} out={out} /></g>;
};
/** A thin tie line drawn between two points. */
export const Tie: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; color?: string}> = ({a, b, at, out, color = TEAL}) => (
	<Fade at={at} out={out}><DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={12} color={color} width={3} dash="6 6" /></Fade>
);
void BEAKER;
