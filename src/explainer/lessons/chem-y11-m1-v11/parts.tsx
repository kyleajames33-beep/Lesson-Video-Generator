// Drawing parts for Y11 Chem M1 V11 (electron configuration and spdf notation). Reuses the M1 V10 parts (and through
// them V08, V06, V01 and M2 V06: text, chips, framed answers, pen marks, plates, the staircase and ball). New here, all
// coded (abstract models): electron arrows and orbital boxes, the subshell ladder (rows of boxes at their energy
// heights, 4s just below 3d, driven by the filling rule in common.ts: lowest first, one per box before pairing), the
// core fold to [Ne] or [Ar], live readouts, the short periodic table with lit cells, and the Stage 5 shell atom.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CELLS, ORBS, ORDER, slotOf, symOf, typeOf, unpairedIn, occ} from './common';
import type {Sub} from './common';
import {scribbleEllipse as scribbleEllipseV11} from '../../kit';
import {Chip, DrawPath, INK, Sx, clamp01, prog, smooth} from '../chem-y11-m1-v10/parts';

export * from '../chem-y11-m1-v10/parts';

// ---------- colour key (design Revision 4, fixed for the whole video) ----------
export const S_INK = '#1f4f9e', S_FILL = '#dde8f8';
export const P_INK = '#23704a', P_FILL = '#dcefe2';
export const D_INK = '#a35c00', D_FILL = '#fbe7c6';
export const F_INK = '#5a6470', F_FILL = '#e6e8ec';
export const TEAL_R = '#12827b';
export const ROSE_T = '#b8325f';
export const TINT: Record<'s' | 'p' | 'd' | 'f', {ink: string; fill: string}> = {s: {ink: S_INK, fill: S_FILL}, p: {ink: P_INK, fill: P_FILL}, d: {ink: D_INK, fill: D_FILL}, f: {ink: F_INK, fill: F_FILL}};
export const ARROW_INK = '#26231f';

// ---------- electron arrows and orbital boxes ----------
/** One electron arrow centred at (x, y), length L, pointing up or down. p (0..1) drops it in from above. */
export const EArrow: React.FC<{x: number; y: number; L: number; up: boolean; p?: number; color?: string; width?: number}> = ({x, y, L, up, p = 1, color = ARROW_INK, width}) => {
	if (p <= 0.005) return null;
	const e = smooth(p), dy = -(1 - e) * L * 0.9, w = width ?? Math.max(4, L * 0.085), h = L * 0.26;
	const y0 = y - L / 2 + dy, y1 = y + L / 2 + dy;
	const tip = up ? y0 : y1, s = up ? 1 : -1;
	return (
		<g opacity={Math.min(1, e * 1.6)}>
			<line x1={x} x2={x} y1={y0 + (up ? w : 0)} y2={y1 - (up ? 0 : w)} stroke={color} strokeWidth={w} strokeLinecap="round" />
			<path d={`M${x - h * 0.75},${tip + s * h} L${x},${tip} L${x + h * 0.75},${tip + s * h}`} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" />
		</g>
	);
};
/** One orbital box; up and down are 0..1 drop progress for its two electrons. */
export const OBox: React.FC<{x: number; y: number; b: number; up?: number; down?: number; t?: 's' | 'p' | 'd' | 'f'; stroke?: string; fill?: string; sw?: number}> = ({x, y, b, up = 0, down = 0, t = 'p', stroke, fill, sw}) => (
	<g>
		<rect x={x} y={y} width={b} height={b} rx={Math.max(4, b * 0.08)} fill={fill ?? TINT[t].fill} stroke={stroke ?? TINT[t].ink} strokeWidth={sw ?? Math.max(3, b * 0.045)} />
		<EArrow x={x + b * (down > 0.005 ? 0.33 : 0.5)} y={y + b / 2} L={b * 0.7} up p={up} />
		<EArrow x={x + b * 0.67} y={y + b / 2} L={b * 0.7} up={false} p={down} />
	</g>
);
/** x of box i in a row starting at x. */
export const boxX = (x: number, i: number, b: number, gap: number) => x + i * (b + gap);
/** A row of boxes with explicit contents: each entry [up, down] (0..1). */
export const ORow: React.FC<{x: number; y: number; b: number; gap?: number; cells: [number, number][]; t?: 's' | 'p' | 'd' | 'f'; label?: string; labelSize?: number; o?: number}> = ({x, y, b, gap = 8, cells, t = 'p', label, labelSize = 38, o = 1}) => (o <= 0.005 ? null : (
	<g opacity={o}>
		{label ? <Sx x={x - 16} y={y + b / 2 + labelSize * 0.36} text={label} size={labelSize} color={TINT[t].ink} anchor="end" weight={800} at={-1000} /> : null}
		{cells.map((c, i) => <OBox key={i} x={boxX(x, i, b, gap)} y={y} b={b} up={c[0]} down={c[1]} t={t} />)}
	</g>
));
/** Hund cells for k electrons in m boxes (no animation). */
export const hund = (m: number, k: number): [number, number][] => Array.from({length: m}, (_, i) => [i < Math.min(k, m) ? 1 : 0, i < k - m ? 1 : 0]);
/** Hund cells animated by a continuous electron count c (0..2m) inside the row: one per box, then the downs. */
export const hundC = (m: number, c: number): [number, number][] => Array.from({length: m}, (_, i) => [clamp01(c - i), clamp01(c - m - i)]);

// ---------- the subshell ladder ----------
export type LadG = {b: number; gap: number; col: {s: number; p: number; d: number}; y: Partial<Record<Sub, number>>; labelSize?: number};
export const rowX = (g: LadG, s: Sub) => g.col[typeOf(s)];
export const rowW = (g: LadG, s: Sub) => ORBS[s] * g.b + (ORBS[s] - 1) * g.gap;
/** Centre of box i of row s. */
export const boxC = (g: LadG, s: Sub, i: number): [number, number] => [boxX(rowX(g, s), i, g.b, g.gap) + g.b / 2, (g.y[s] as number) + g.b / 2];
/**
 * The ladder: every row in g.y drawn at its energy height. c is the continuous number of electrons placed by the
 * filling rule (an arrow drops in as c passes its number). fold (0..1) folds the listed core rows into a slate block.
 */
export const Ladder: React.FC<{g: LadG; c: number; fold?: number; core?: Sub[]; coreLabel?: string; coreSub?: string; hide?: Sub[]; o?: number; labels?: boolean; hi?: Partial<Record<Sub, number>>}> = ({g, c, fold = 0, core = [], coreLabel = '', coreSub = '', hide = [], o = 1, labels = true, hi = {}}) => {
	if (o <= 0.005) return null;
	const rows = ORDER.filter(s => g.y[s] !== undefined && !hide.includes(s));
	const cells: Record<string, [number, number][]> = {};
	for (const s of rows) cells[s] = Array.from({length: ORBS[s]}, () => [0, 0] as [number, number]);
	const nMax = Math.ceil(c);
	for (let k = 1; k <= nMax; k++) {
		const sl = slotOf(k);
		if (!cells[sl.s]) continue;
		cells[sl.s][sl.box][sl.up ? 0 : 1] = clamp01(c - (k - 1));
	}
	const fm = smooth(fold);
	// core block bounds
	let bx0 = 1e9, by0 = 1e9, bx1 = -1e9, by1 = -1e9;
	for (const s of core) { if (g.y[s] === undefined) continue; const x0 = rowX(g, s) - (g.labelSize ?? 38) * 1.6, y0 = g.y[s] as number; bx0 = Math.min(bx0, x0); by0 = Math.min(by0, y0); bx1 = Math.max(bx1, rowX(g, s) + rowW(g, s)); by1 = Math.max(by1, y0 + g.b); }
	return (
		<g opacity={o}>
			{rows.map(s => {
				const t = typeOf(s), inCore = core.includes(s);
				const ro = inCore ? 1 - fm : 1;
				if (ro <= 0.005) return null;
				const h = hi[s] !== undefined ? 1 : 0;
				return (
					<g key={s} opacity={ro}>
						{h ? <rect x={rowX(g, s) - 10} y={(g.y[s] as number) - 10} width={rowW(g, s) + 20} height={g.b + 20} rx={14} fill="none" stroke={TINT[t].ink} strokeWidth={6} /> : null}
						<ORow x={rowX(g, s)} y={g.y[s] as number} b={g.b} gap={g.gap} cells={cells[s]} t={t} label={labels ? s : undefined} labelSize={g.labelSize ?? 38} />
					</g>
				);
			})}
			{core.length && fm > 0.005 ? (
				<g opacity={fm}>
					<rect x={bx0} y={by0} width={bx1 - bx0} height={by1 - by0} rx={18} fill={F_FILL} stroke={F_INK} strokeWidth={5} />
					<Sx x={(bx0 + bx1) / 2} y={(by0 + by1) / 2 + 6} text={coreLabel} size={60} color={INK} anchor="middle" weight={800} at={-1000} />
					{coreSub ? <Sx x={(bx0 + bx1) / 2} y={(by0 + by1) / 2 + 52} text={coreSub} size={32} color={INK} anchor="middle" weight={700} at={-1000} /> : null}
				</g>
			) : null}
		</g>
	);
};
/** Bounds of the folded core block (for tags and arrows). */
export const coreBox = (g: LadG, core: Sub[]) => {
	let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
	for (const s of core) { if (g.y[s] === undefined) continue; x0 = Math.min(x0, rowX(g, s) - (g.labelSize ?? 38) * 1.6); y0 = Math.min(y0, g.y[s] as number); x1 = Math.max(x1, rowX(g, s) + rowW(g, s)); y1 = Math.max(y1, (g.y[s] as number) + g.b); }
	return {x0, y0, x1, y1};
};
/** Teal pen rings round the single arrows of one ladder row holding k electrons. */
export const SingleRings: React.FC<{g: LadG; s: Sub; k: number; at: number; out?: number}> = ({g, s, k, at, out}) => {
	const m = ORBS[s], n = unpairedIn(s, k), first = k <= m ? 0 : k - m;
	return <>{Array.from({length: n}, (_, j) => { const [cx, cy] = boxC(g, s, first + j); return <PenRingV11 key={j} cx={cx} cy={cy} rx={g.b * 0.5} ry={g.b * 0.58} at={at + j * 4} out={out} color={TEAL_R} seed={11 + j} />; })}</>;
};
/** Rings round single arrows in a free row (x, y, b, gap) holding k of m. */
export const RowRings: React.FC<{x: number; y: number; b: number; gap: number; m: number; k: number; at: number; out?: number}> = ({x, y, b, gap, m, k, at, out}) => {
	const n = k <= m ? k : 2 * m - k, first = k <= m ? 0 : k - m;
	return <>{Array.from({length: n}, (_, j) => <PenRingV11 key={j} cx={boxX(x, first + j, b, gap) + b / 2} cy={y + b / 2} rx={b * 0.5} ry={b * 0.58} at={at + j * 4} out={out} color={TEAL_R} seed={21 + j} />)}</>;
};
const PenRingV11: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; out?: number; color: string; seed: number}> = ({cx, cy, rx, ry, at, out, color, seed}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	if (f < at || o <= 0.005) return null;
	return <g opacity={o}><DrawPath d={scribbleEllipseV11(cx, cy, rx, ry, seed)} at={at} dur={16} color={color} width={5} /></g>;
};
export {occ};

// ---------- readouts (label in full ink above a framed value) ----------
export const RO: React.FC<{x: number; y: number; w: number; label: string; text: string; size?: number; color?: string; frame?: string; o?: number}> = ({x, y, w, label, text, size = 52, color = INK, frame, o = 1}) => {
	if (o <= 0.005) return null;
	const H = size * 1.45;
	return (
		<g opacity={o}>
			<Sx x={x + 4} y={y - 12} text={label} size={30} color={INK} weight={800} at={-1000} />
			<rect x={x} y={y} width={w} height={H} rx={14} fill="#fffdf8" stroke={frame ?? '#24407a'} strokeWidth={4} />
			<Sx x={x + 22} y={y + H / 2 + size * 0.36} text={text} size={size} color={color} weight={800} at={-1000} />
		</g>
	);
};

// ---------- the short periodic table ----------
export type PTG = {x: number; y: number; cw: number; ch: number};
export const ptCell = (g: PTG, z: number): [number, number] => { const c = CELLS.find(q => q[0] === z) as [number, number, number]; return [g.x + (c[2] - 1) * g.cw, g.y + (c[1] - 1) * g.ch]; };
export type Lit = {z: number; at: number; color: string; fill: string; end?: string; out?: number};
/** The short table outline in dark ink, symbols (and atomic numbers when zSize > 0); lit cells pop on cue. */
export const PTable: React.FC<{g: PTG; maxP?: number; zSize?: number; symSize?: number; lit?: Lit[]; o?: number; pop?: number; plain?: boolean; symFor?: (z: number) => boolean}> = ({g, maxP = 7, zSize = 22, symSize, lit = [], o = 1, pop = 1.32, plain = false, symFor}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const ss = symSize ?? Math.round(g.ch * 0.42);
	const litZ = new Set(lit.filter(l => f >= l.at).map(l => l.z));
	return (
		<g opacity={o}>
			{CELLS.filter(c => c[1] <= maxP).map(([z]) => {
				const [x, y] = ptCell(g, z);
				return (
					<g key={z}>
						<rect x={x} y={y} width={g.cw} height={g.ch} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
						{plain || litZ.has(z) || (symFor && !symFor(z)) ? null : <>
							{zSize > 0 ? <Sx x={x + 5} y={y + zSize + 1} text={`${z}`} size={zSize} color={INK} weight={700} at={-1000} /> : null}
							<Sx x={x + g.cw / 2} y={y + g.ch * (zSize > 0 ? 0.8 : 0.66)} text={symOf(z)} size={ss} color={INK} anchor="middle" weight={800} at={-1000} />
						</>}
					</g>
				);
			})}
			{lit.map(l => {
				const v = prog(f, l.at, 12) * (l.out === undefined ? 1 : 1 - prog(f, l.out, 10));
				if (v <= 0.005) return null;
				const [x, y] = ptCell(g, l.z), s = 1 + (pop - 1) * smooth(prog(f, l.at, 14)), cx = x + g.cw / 2, cy = y + g.ch / 2;
				return (
					<g key={'l' + l.z} opacity={v} transform={`translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`}>
						<rect x={x} y={y} width={g.cw} height={g.ch} rx={6} fill={l.fill} stroke={l.color} strokeWidth={5} />
						{l.end ? <>
							<Sx x={cx} y={y + g.ch * 0.46} text={symOf(l.z)} size={Math.round(g.ch * 0.4)} color={INK} anchor="middle" weight={800} at={-1000} />
							<Sx x={cx} y={y + g.ch * 0.88} text={l.end} size={Math.max(26, Math.round(g.ch * 0.34))} color={l.color} anchor="middle" weight={800} at={-1000} />
						</> : plain ? (
							<Sx x={cx} y={y + g.ch * 0.72} text={symOf(l.z)} size={Math.round(g.ch * 0.6)} color={INK} anchor="middle" weight={800} at={-1000} />
						) : <>
							<Sx x={x + 5} y={y + Math.max(20, zSize) + 1} text={`${l.z}`} size={Math.max(20, zSize)} color={INK} weight={800} at={-1000} />
							<Sx x={cx} y={y + g.ch * 0.8} text={symOf(l.z)} size={ss} color={INK} anchor="middle" weight={800} at={-1000} />
						</>}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the Stage 5 shell atom (rings of dots) ----------
export const ShellAtom: React.FC<{cx: number; cy: number; R: number; counts: number[]; sym?: string; o?: number; dot?: number; hiOuter?: number}> = ({cx, cy, R, counts, sym = 'Cl', o = 1, dot = 11, hiOuter = 0}) => {
	if (o <= 0.005) return null;
	const n = counts.length;
	return (
		<g opacity={o}>
			{counts.map((k, i) => {
				const r = R * (i + 1) / n;
				return (
					<g key={i}>
						<circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={3.5} />
						{Array.from({length: k}, (_, j) => {
							const a = -Math.PI / 2 + (j / k) * Math.PI * 2 + i * 0.35;
							const glow = i === n - 1 ? hiOuter : 0;
							return <circle key={j} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r={dot} fill={glow > 0.5 ? '#e8a33d' : '#2f6fd0'} stroke="#1f4f9e" strokeWidth={2.5} />;
						})}
					</g>
				);
			})}
			<circle cx={cx} cy={cy} r={R / n * 0.55} fill="#d24a3c" stroke="#a8322a" strokeWidth={3} />
			<Sx x={cx} y={cy + 11} text={sym} size={30} color="#ffffff" anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- a subshell-letter badge (s, p, d, f) ----------
export const Letter: React.FC<{x: number; y: number; t: 's' | 'p' | 'd' | 'f'; size?: number; at?: number; out?: number}> = ({x, y, t, size = 52, at = -1000, out}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (v <= 0.005) return null;
	const r = size * 0.78, s = 0.6 + 0.4 * smooth(prog(f, at, 14));
	return (
		<g opacity={v} transform={`translate(${x},${y}) scale(${s})`}>
			<circle r={r} fill={TINT[t].fill} stroke={TINT[t].ink} strokeWidth={5} />
			<Sx x={0} y={size * 0.33} text={t} size={size} color={TINT[t].ink} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- chem-y11-ws-v03's final frame (V11 opens on it; the ws-v03 build imports this read-only) ----------
/** The data-sheet table geometry shared by ws-v03's final frame and V11's hook. */
export const WS_PT: PTG = {x: 204, y: 230, cw: 84, ch: 72};
/** Symbols shown on ws-v03's final table: H, He, periods 2 and 3, and Fe. */
export const wsSym = (z: number) => z <= 18 || z === 26;
/** The two f-block rows below the table (14 empty cells each, under columns 4 to 17). */
export const FBlock: React.FC<{g?: PTG}> = ({g = WS_PT}) => (
	<g>
		{[0, 1].map(r => Array.from({length: 14}, (_, i) => <rect key={r + '-' + i} x={g.x + (3 + i) * g.cw} y={g.y + 7 * g.ch + 16 + r * 52} width={g.cw} height={52} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />))}
	</g>
);
/** A highlighted data-sheet cell with its atomic number, symbol and "?" for its electrons. */
export const QCell: React.FC<{z: number; g?: PTG}> = ({z, g = WS_PT}) => {
	const [x, y] = ptCell(g, z);
	return (
		<g>
			<rect x={x} y={y} width={g.cw} height={g.ch} fill="#fde7c2" stroke="#e8a33d" strokeWidth={6} />
			<Sx x={x + 5} y={y + 23} text={`${z}`} size={22} color={INK} weight={800} at={-1000} />
			<Sx x={x + g.cw * 0.42} y={y + g.ch * 0.8} text={symOf(z)} size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={x + g.cw - 8} y={y + 30} text="?" size={30} color={D_INK} anchor="end" weight={800} at={-1000} />
		</g>
	);
};
/** v10's s, p, d, f chips in a column at the right of the table. */
export const SpdfColumn: React.FC = () => <>{(['s', 'p', 'd', 'f'] as const).map((t, i) => <Letter key={t} x={1790} y={300 + i * 96} t={t} size={44} />)}</>;
export const WS_NEXT = 'Next: How does spdf notation locate the electrons in an atom?';
/** chem-y11-ws-v03's final frame, exactly as V11's first frame (cream paper, dark-ink grid). No props. */
export const WsV03FinalFrame: React.FC = () => (
	<g>
		<PTable g={WS_PT} symFor={wsSym} />
		<FBlock />
		{[15, 17, 26].map(z => <QCell key={z} z={z} />)}
		<SpdfColumn />
		<Chip x={960} y={872} segs={[{t: WS_NEXT}]} at={-1000} size={44} color="#24407a" anchor="middle" />
	</g>
);
