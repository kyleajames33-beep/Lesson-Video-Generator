// Drawing parts for M8 P03 (identifying unknown ions practical). Re-exports M8 C04 (and through it C03b, C03a, C01 and
// the M6/M5 chain: chips, notes, crossed chips, plates, flame loop, suspect strip, dropper, ion lock lens, question text,
// countdown, key notes, row cards, framed answer). New here (C04 and P04 may import them):
// - plate geometry (plateG, wxy, wr) and WellPlate: the painted 48-well plate (black card, cross-fading to the white
//   tile on the same grid) with optional A to F / 1 to 8 grid labels;
// - WellAt: one coded well fill (clear, faint haze, white solid, coloured solid) that blooms from a frame, with an
//   optional role ring (blank grey, known teal, unknown navy);
// - WellLens: a round close-up of one well on the black card;
// - LBottle: the painted bottle with a coded letter label; WBottle: the wash bottle with a coded label; DBot: the
//   dropper bottle with a coded reagent tag;
// - Wr: Inter text that writes on left to right;
// - ResultsTable: the results table writer (the Inference cell stays locked until its Observation is written, then a
//   pen tick unlocks it);
// - JCard: the four-slot justification card (Observation, Equation, Ruled out, Matches known);
// - RiskGrid: the risk table that fills row by row (icon and hazard listed, harm and control on cue, current row glows).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {DrawPath, prog, rng} from '../../kit';
import {Fade, INK, INK_SOFT, NAVY, PicF, Sx, clamp01, mw, natPt, picW, smooth, vis} from '../chem-m8-c04/parts';
import {BOTTLE, DROPB, DROPB_LABEL, LABEL_A, PB, PW, WASH, WELL_X, WELL_Y} from './common';
import type {PDef} from './common';

export * from '../chem-m8-c04/parts';

// ---------- colour key (design) ----------
export const BLANKC = '#7d776d', KNOWNC = '#1f7f78', UNKN = '#24407a';
export const R_CL = '#2f7d4a', R_SO = '#b07a12', R_OH = '#2f6f9e', R_AC = '#cc6a1e', R_AG = '#5f6670';
export const HAZ = '#b5502b', GOOD = '#2f8a5b', GREYX = '#8a847a', WARN = '#b5502b';

// ---------- plate geometry ----------
export type PG = {ox: number; oy: number; k: number};
/** Plate placed so its visible box (black card) is centred at (cx, cy) with width w. */
export const plateG = (cx: number, cy: number, w: number): PG => { const k = w / 1527; return {ox: cx - 1029.5 * k, oy: cy - 688 * k, k}; };
export const wxy = (g: PG, r: number, c: number): [number, number] => [g.ox + WELL_X[c] * g.k, g.oy + WELL_Y[r] * g.k];
export const wr = (g: PG) => 54 * g.k;
export const plateBox = (g: PG) => ({x: g.ox + 266 * g.k, y: g.oy + 139 * g.k, w: 1527 * g.k, h: 1098 * g.k});
export const ROWS = ['A', 'B', 'C', 'D', 'E', 'F'];
/** The painted plate. `white` 0..1 cross-fades the black card to the white tile; `grid` writes A to F and 1 to 8. */
export const WellPlate: React.FC<{g: PG; white?: number; o?: number; grid?: number; gridSize?: number}> = ({g, white = 0, o = 1, grid, gridSize = 28}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const W = 2048 * g.k, H = 1365 * g.k;
	const gr = grid === undefined ? 0 : prog(f, grid, 16);
	const b = plateBox(g);
	return (
		<g opacity={o}>
			{white < 0.999 ? <image href={staticFile(PB.src)} x={g.ox} y={g.oy} width={W} height={H} /> : null}
			{white > 0.001 ? <image href={staticFile(PW.src)} x={g.ox} y={g.oy} width={W} height={H} opacity={white} /> : null}
			{gr > 0.01 ? (
				<g opacity={gr}>
					{ROWS.map((l, r) => <Sx key={l} x={b.x - 14} y={wxy(g, r, 0)[1] + gridSize * 0.36} text={l} size={gridSize} color={INK} anchor="end" weight={800} at={-1000} opacity={prog(f, (grid as number) + r * 3, 8)} />)}
					{WELL_X.map((_, c) => <Sx key={c} x={wxy(g, 0, c)[0]} y={b.y - 12} text={`${c + 1}`} size={gridSize} color={INK} anchor="middle" weight={800} at={-1000} opacity={prog(f, (grid as number) + 18 + c * 3, 8)} />)}
				</g>
			) : null}
		</g>
	);
};

// ---------- a well fill (top view) ----------
export type WKind = 'clear' | 'faint' | 'white' | 'blue' | 'green' | 'brown' | 'q';
const WK: Record<Exclude<WKind, 'q'>, {c: string; o: number; solid: boolean}> = {
	clear: {c: '#cfe6f5', o: 0.3, solid: false},
	faint: {c: '#ffffff', o: 0.62, solid: false},
	white: {c: '#f7f6f2', o: 0.96, solid: true},
	blue: {c: '#8fc3e8', o: 0.96, solid: true},
	green: {c: '#8fa67a', o: 0.96, solid: true},
	brown: {c: '#8a4a24', o: 0.96, solid: true},
};
export const WFill: React.FC<{cx: number; cy: number; r: number; kind: WKind; p: number; seed?: number}> = ({cx, cy, r, kind, p, seed = 1}) => {
	if (p <= 0.01) return null;
	if (kind === 'q') return <Sx x={cx} y={cy + r * 0.45} text="?" size={r * 1.3} color="#e8eef4" anchor="middle" weight={800} at={-1000} opacity={p} />;
	const K = WK[kind];
	const liquid = clamp01(p * 2.5);
	const bloom = clamp01((p - 0.25) / 0.75);
	const q = rng(seed * 13 + 5);
	const blobs = Array.from({length: 9}, () => [q() * 2 - 1, q() * 2 - 1, 0.25 + q() * 0.3]);
	return (
		<g>
			<circle cx={cx} cy={cy} r={r * 0.94} fill="#d7ecf7" opacity={0.25 * liquid} />
			<path d={`M${cx - r * 0.55},${cy - r * 0.45} A${r * 0.75},${r * 0.75} 0 0 1 ${cx + r * 0.2},${cy - r * 0.72}`} fill="none" stroke="#ffffff" strokeWidth={Math.max(1.5, r * 0.07)} strokeLinecap="round" opacity={0.55 * liquid} />
			{kind === 'clear' ? null : K.solid ? (
				<g opacity={bloom}>
					<circle cx={cx} cy={cy} r={r * (0.45 + 0.4 * bloom)} fill={K.c} opacity={K.o} />
					{blobs.map(([u, v, s], i) => <circle key={i} cx={cx + u * r * 0.55} cy={cy + v * r * 0.55} r={r * s * bloom} fill={K.c} opacity={0.9} stroke="rgba(0,0,0,0.12)" strokeWidth={1} />)}
				</g>
			) : (
				<g opacity={bloom}>
					{blobs.map(([u, v, s], i) => <circle key={i} cx={cx + u * r * 0.55} cy={cy + v * r * 0.55} r={r * s * 0.9} fill={K.c} opacity={K.o * 0.6} />)}
					<circle cx={cx} cy={cy} r={r * 0.72} fill={K.c} opacity={K.o * 0.5} />
				</g>
			)}
		</g>
	);
};
export type Role = 'blank' | 'known' | 'unk';
export const roleC = (r: Role) => (r === 'blank' ? BLANKC : r === 'known' ? KNOWNC : UNKN);
/** One well on a placed plate: fill blooms from `at`; `role` ring draws from `roleAt`; `glow` pulses it. */
export const WellAt: React.FC<{g: PG; r: number; c: number; kind?: WKind; at?: number; dur?: number; role?: Role; roleAt?: number; glow?: number; o?: number; out?: number}> = ({g, r, c, kind = 'clear', at = 1e9, dur = 24, role, roleAt = -1000, glow, o = 1, out}) => {
	const f = useCurrentFrame();
	const v = (out === undefined ? 1 : 1 - prog(f, out, 12)) * o;
	if (v <= 0.01) return null;
	const [x, y] = wxy(g, r, c);
	const rad = wr(g);
	const ro = prog(f, roleAt, 12);
	const gl = glow === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - glow) / 40) * Math.PI));
	return (
		<g opacity={v}>
			{gl > 0.01 ? <circle cx={x} cy={y} r={rad * 1.7} fill="#f6d77a" opacity={0.55 * gl} /> : null}
			<WFill cx={x} cy={y} r={rad} kind={kind} p={prog(f, at, dur)} seed={r * 8 + c + 1} />
			{role && ro > 0.01 ? <circle cx={x} cy={y} r={rad * 1.22} fill="none" stroke={roleC(role)} strokeWidth={Math.max(4, rad * 0.16)} opacity={ro} /> : null}
		</g>
	);
};

// ---------- close-up lens of one well ----------
export const WellLens: React.FC<{cx: number; cy: number; r: number; kind: WKind; fillAt: number; dur?: number; at?: number; out?: number; role?: Role; label?: string; labelAt?: number; size?: number; o?: number; seed?: number}> = ({cx, cy, r, kind, fillAt, dur = 30, at = -1000, out, role, label, labelAt, size = 32, o = 1, seed = 4}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill="#1c1c1f" stroke={role ? roleC(role) : INK} strokeWidth={6} />
			<circle cx={cx} cy={cy} r={r * 0.78} fill="none" stroke="#c9d3da" strokeWidth={r * 0.06} opacity={0.85} />
			<circle cx={cx} cy={cy} r={r * 0.74} fill="#141416" />
			<WFill cx={cx} cy={cy} r={r * 0.74} kind={kind} p={prog(f, fillAt, dur)} seed={seed} />
			{label ? <Sx x={cx} y={cy + r + size + 8} text={label} size={size} color={role ? roleC(role) : INK} anchor="middle" weight={800} at={labelAt ?? at} /> : null}
		</g>
	);
};

// ---------- painted bottles with coded labels ----------
export const LBottle: React.FC<{x: number; y: number; h: number; letter: string; at?: number; out?: number; glow?: [number, number]; o?: number; dim?: number}> = ({x, y, h, letter, at = -1000, out, glow, o = 1, dim}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o * (dim === undefined ? 1 : 1 - 0.55 * prog(f, dim, 12));
	if (v <= 0.01) return null;
	const [lx, ly] = natPt(BOTTLE, x, y, h, LABEL_A.cx, LABEL_A.cy);
	const g = glow ? vis(f, glow[0], glow[1], 10) : 0;
	const w = picW(BOTTLE, h);
	return (
		<g opacity={v}>
			{g > 0.01 ? <ellipse cx={x + w / 2} cy={y + h * 0.55} rx={w * 0.75} ry={h * 0.6} fill="#f6d77a" opacity={0.45 * g} /> : null}
			<PicF p={BOTTLE} x={x} y={y} h={h} />
			<Sx x={lx} y={ly + h * 0.07} text={letter} size={h * 0.2} color={INK} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const WBottle: React.FC<{x: number; y: number; h: number; label: string; at?: number; out?: number; color?: string; size?: number; o?: number}> = ({x, y, h, label, at = -1000, out, color = INK, size = 30, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const w = picW(WASH, h);
	return (
		<g opacity={v}>
			<PicF p={WASH} x={x} y={y} h={h} />
			<Sx x={x + w * 0.42} y={y + h + size + 6} text={label} size={size} color={color} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const DBot: React.FC<{x: number; y: number; h: number; tag?: string; at?: number; out?: number; size?: number; o?: number; band?: string}> = ({x, y, h, tag, at = -1000, out, size = 28, o = 1, band}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const w = picW(DROPB, h);
	const [lx, ly] = natPt(DROPB, x, y, h, DROPB_LABEL.cx, DROPB_LABEL.cy);
	return (
		<g opacity={v}>
			<PicF p={DROPB} x={x} y={y} h={h} />
			{band ? <rect x={lx - w * 0.3} y={ly - h * 0.035} width={w * 0.6} height={h * 0.07} rx={4} fill={band} opacity={0.85} /> : null}
			{tag ? <Sx x={x + w / 2} y={y + h + size + 4} text={tag} size={size} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
		</g>
	);
};

// ---------- write-on text (Inter) ----------
export const Wr: React.FC<{x: number; y: number; text: string; at: number; out?: number; size?: number; color?: string; weight?: number; anchor?: 'start' | 'middle' | 'end'; hand?: boolean; dur?: number; o?: number}> = ({x, y, text, at, out, size = 40, color = INK, weight = 700, anchor = 'start', hand = false, dur, o = 1}) => {
	const f = useCurrentFrame();
	const d = dur ?? Math.max(10, Math.round(text.length * 0.7));
	const p = prog(f, at, d);
	const v = (out === undefined ? 1 : 1 - prog(f, out, 10)) * o;
	if (f < at || v <= 0.01) return null;
	return (
		<g opacity={v} style={p >= 1 ? undefined : {clipPath: `inset(-60% ${100 - p * 100}% -60% -5%)`}}>
			<Sx x={x} y={y} text={text} size={size} color={color} anchor={anchor} weight={weight} hand={hand} at={-1000} />
		</g>
	);
};

// ---------- results table writer ----------
export type RTRow = {cells: string[]; at: number; obsAt: number; infAt: number; grey?: boolean; dim?: number};
/** Columns Well | Solution | Reagent | Observation | Inference. Cells 0..2 write at `at`, the observation at `obsAt`; the
 *  inference cell is a locked grey box until `infAt`, when a pen tick unlocks it and the inference writes. */
export const ResultsTable: React.FC<{x: number; y: number; cols: number[]; rows: RTRow[]; size?: number; rowH?: number; head?: string[]; headGlow?: [number, number, number][]}> = ({x, y, cols, rows, size = 30, rowH = 110, head = ['Well', 'Solution', 'Reagent', 'Observation', 'Inference'], headGlow = []}) => {
	const f = useCurrentFrame();
	const W = cols.reduce((a, b) => a + b, 0);
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, b) => a + b, 0));
	const HH = 64;
	return (
		<g>
			<rect x={x} y={y} width={W} height={HH + rows.length * rowH} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
			<rect x={x} y={y} width={W} height={HH} rx={16} fill="#efe6d6" />
			{xs.slice(1).map((cx, i) => <line key={i} x1={cx} x2={cx} y1={y} y2={y + HH + rows.length * rowH} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />)}
			{head.map((t, i) => {
				const g = headGlow.filter(h => h[0] === i).reduce((m, h) => Math.max(m, vis(f, h[1], h[2], 10)), 0);
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={xs[i] + 4} y={y + 4} width={cols[i] - 8} height={HH - 8} rx={12} fill="#f6d77a" opacity={0.8 * g} /> : null}
						<Sx x={xs[i] + 16} y={y + 44} text={t} size={32} color={INK} hand weight={700} at={-1000} />
					</g>
				);
			})}
			{rows.map((r, j) => {
				const ry = y + HH + j * rowH;
				const d = r.dim === undefined ? 1 : 1 - 0.5 * prog(f, r.dim, 12);
				const c = r.grey ? INK_SOFT : INK;
				const lock = 1 - prog(f, r.infAt, 10);
				const cell = (i: number, t: string, at: number) => {
					const lines = t.split('\n');
					const lh = size * 1.18, top = ry + rowH / 2 - ((lines.length - 1) * lh) / 2 + size * 0.34;
					return lines.map((ln, k) => <Wr key={i + '-' + k} x={xs[i] + 16} y={top + k * lh} text={ln} at={at + k * 8} size={size} color={i === 4 ? NAVY : c} weight={i >= 3 ? 700 : 600} />);
				};
				return (
					<g key={j} opacity={d}>
						<line x1={x + 8} x2={x + W - 8} y1={ry} y2={ry} stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
						{r.cells.slice(0, 3).map((t, i) => cell(i, t, r.at + i * 4))}
						{cell(3, r.cells[3], r.obsAt)}
						{lock > 0.01 ? (
							<g opacity={lock * prog(f, r.at, 10)}>
								<rect x={xs[4] + 12} y={ry + 14} width={cols[4] - 24} height={rowH - 28} rx={10} fill="#e9e3d6" />
								<rect x={xs[4] + cols[4] / 2 - 14} y={ry + rowH / 2 - 6} width={28} height={22} rx={4} fill={INK_SOFT} />
								<path d={`M${xs[4] + cols[4] / 2 - 9},${ry + rowH / 2 - 6} v-8 a9,9 0 0 1 18,0 v8`} fill="none" stroke={INK_SOFT} strokeWidth={4} />
							</g>
						) : null}
						{f >= r.infAt ? <DrawPath d={`M${xs[4] + 18},${ry + rowH / 2} l10,12 l20,-26`} at={r.infAt} dur={10} color={GOOD} width={5} /> : null}
						{f >= r.infAt ? <g transform="translate(40,0)">{cell(4, r.cells[4], r.infAt + 8)}</g> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- justification card ----------
export type JSlot = {label: string; text: string; at: number; color?: string; size?: number; lines?: string[]};
export const JCard: React.FC<{x: number; y: number; w: number; title: string; slots: JSlot[]; at?: number; rowH?: number; size?: number; o?: number; labelW?: number; titleSize?: number}> = ({x, y, w, title, slots, at = -1000, rowH = 130, size = 36, o = 1, labelW = 300, titleSize = 40}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const H = 76 + slots.length * rowH;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={H} rx={20} fill="#fffdf8" stroke={NAVY} strokeWidth={3.5} />
			<Sx x={x + 28} y={y + 52} text={title} size={titleSize} color={NAVY} hand weight={700} at={-1000} />
			{slots.map((s, i) => {
				const sy = y + 76 + i * rowH;
				const lit = prog(f, s.at, 12);
				const cur = lit * (slots[i + 1] ? 1 - prog(f, slots[i + 1].at, 12) : 1);
				const lines = s.lines ?? [s.text];
				const sz = s.size ?? size;
				const lh = sz * 1.2, top = sy + rowH / 2 - ((lines.length - 1) * lh) / 2 + sz * 0.34;
				return (
					<g key={i}>
						<line x1={x + 20} x2={x + w - 20} y1={sy} y2={sy} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
						{cur > 0.01 ? <rect x={x + 10} y={sy + 6} width={w - 20} height={rowH - 12} rx={12} fill="#fff3d9" opacity={cur} /> : null}
						<Sx x={x + 28} y={sy + rowH / 2 + 12} text={s.label} size={34} color={lit > 0.5 ? (s.color ?? NAVY) : '#a59c8e'} hand weight={700} at={-1000} />
						{lines.map((ln, k) => <Wr key={k} x={x + labelW} y={top + k * lh} text={ln} at={s.at + k * 10} size={sz} color={s.color ?? INK} weight={700} />)}
					</g>
				);
			})}
		</g>
	);
};

// ---------- risk table that fills row by row ----------
export type RiskRow = {hazard: string[]; harm: string[]; control: string[]; at: number; icon: (x: number, y: number, w: number, h: number) => React.ReactNode};
/** Rows (icon and hazard) are listed from `listAt`; harm and control write on at each row's `at`; the row being narrated
 *  glows until the next row's cue (or `end`). */
export const RiskGrid: React.FC<{x: number; y: number; cols: [number, number, number, number]; rowH: number; rows: RiskRow[]; listAt: number; end: number; size?: number; headSize?: number}> = ({x, y, cols, rowH, rows, listAt, end, size = 27, headSize = 34}) => {
	const f = useCurrentFrame();
	const W = cols.reduce((a, b) => a + b, 0);
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, b) => a + b, 0));
	const HH = headSize + 26;
	const v = prog(f, listAt - 10, 12);
	const colors = [HAZ, INK, GOOD];
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={W} height={HH + rows.length * rowH} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<rect x={x} y={y} width={W} height={HH} rx={16} fill="#efe6d6" />
			{['Hazard', 'Harm', 'Control'].map((t, i) => <Sx key={t} x={xs[i + 1] + 14} y={y + HH / 2 + headSize * 0.36} text={t} size={headSize} color={colors[i]} hand weight={700} at={-1000} />)}
			{rows.map((r, j) => {
				const ry = y + HH + j * rowH;
				const lo = prog(f, listAt + j * 5, 10);
				if (lo <= 0.01) return null;
				const next = rows[j + 1]?.at ?? end;
				const g = vis(f, r.at, Math.min(next, end), 10);
				const block = (i: number, lines: string[], at: number, weight: number) => {
					const lh = size * 1.16, top = ry + rowH / 2 - ((lines.length - 1) * lh) / 2 + size * 0.34;
					return lines.map((ln, k) => <Sx key={i + '-' + k} x={xs[i] + 14} y={top + k * lh} text={ln} size={size} color={colors[i - 1]} weight={weight} at={at} />);
				};
				return (
					<g key={j} opacity={lo}>
						{g > 0.01 ? <rect x={x + 6} y={ry + 3} width={W - 12} height={rowH - 6} rx={12} fill="#fff1c9" opacity={g} /> : null}
						<line x1={x + 8} x2={x + W - 8} y1={ry} y2={ry} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
						{r.icon(xs[0] + 8, ry + 6, cols[0] - 16, rowH - 12)}
						{block(1, r.hazard, -1000, 800)}
						{block(2, r.harm, r.at, 600)}
						{block(3, r.control, r.at + 14, 600)}
					</g>
				);
			})}
		</g>
	);
};
/** A plate fitted (uniform scale, centred) into an icon box. */
export const IconP: React.FC<{p: PDef; x: number; y: number; w: number; h: number; o?: number}> = ({p, x, y, w, h, o = 1}) => {
	const hh = Math.min(h, (w * p.box[3]) / p.box[2]);
	const ww = picW(p, hh);
	return <PicF p={p} x={x + (w - ww) / 2} y={y + (h - hh) / 2} h={hh} o={o} />;
};
/** A soft glow pulse ellipse. */
export const Glow: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; len?: number}> = ({cx, cy, rx, ry, at, out, len}) => {
	const f = useCurrentFrame();
	const g = len === undefined ? vis(f, at, out, 10) : Math.max(0, Math.sin(clamp01((f - at) / len) * Math.PI));
	return g > 0.01 ? <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#f6d77a" opacity={0.5 * g} /> : null;
};
export {smooth, mw, Fade};
