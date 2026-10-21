// S03 lesson-local pieces: PairTable (feature | case A | case B, rows writing on one at a time), PairLines (amber
// links between matched clauses) and HairZoom (roan coat against pink petal, ported from B10 scene 8 and redrawn in
// the skills kit style). Also the small verb card used in scenes 2 and 14.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {rng} from '../../kit';
import {AMBER, AMBER_INK, CARD, GREY_INK, HI, INK, INK_SOFT, PenArrow, T, clamp01, prog, pulse, smooth, vis, wrap} from './kit';

/** Lines of wrapped text. */
export const linesOf = (text: string, w: number, size: number, hand = true, weight = 700) => {
	const L = wrap(text, w, size, hand, weight);
	const out: string[] = Array.from({length: L.lines}, () => '');
	L.words.forEach(wd => { out[wd.line] = out[wd.line] ? out[wd.line] + ' ' + wd.t : wd.t; });
	return out;
};

// ---------- PairLines ----------
export type PLink = {a: [number, number]; b: [number, number]; at: number; out?: number; color?: string; dash?: boolean; bow?: number; dots?: boolean};
/** Thin amber links between matched clauses (no heads), with small end dots. */
export const PairLines: React.FC<{links: PLink[]; o?: number}> = ({links, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{links.map((l, i) => {
				const v = vis(f, l.at, l.out, 8);
				if (v <= 0.01) return null;
				const c = l.color ?? AMBER;
				return (
					<g key={i} opacity={v}>
						<PenArrow a={l.a} b={l.b} at={l.at} bow={l.bow ?? 0} color={c} width={3.5} dash={l.dash} head={false} />
						{l.dots === false ? null : <><circle cx={l.a[0]} cy={l.a[1]} r={5} fill={c} /><circle cx={l.b[0]} cy={l.b[1]} r={5} fill={c} opacity={prog(f, l.at + 12, 6)} /></>}
					</g>
				);
			})}
		</g>
	);
};

// ---------- PairTable ----------
export type PRow = {cells: [string, string, string]; at: number; glow?: [number, number]; dim?: number; link?: {at: number; mark: string; out?: number}; note?: {at: number; text: string}; tick?: number};
export const pairGeom = (x: number, y: number, colW: number[], rows: PRow[], size: number, headH: number) => {
	const lh = Math.round(size * 1.12), pad = 14;
	const colX: number[] = [];
	let cx = x;
	colW.forEach(w => { colX.push(cx); cx += w; });
	colX.push(cx);
	const cellLines = rows.map(r => r.cells.map((c, k) => linesOf(c, colW[k] - 22, size)));
	const rowY: number[] = [], rowH: number[] = [];
	let cy = y + headH;
	rows.forEach((r, i) => {
		const n = Math.max(...cellLines[i].map(l => l.length)) + (r.note ? 1 : 0);
		rowY.push(cy);
		rowH.push(n * lh + 2 * pad);
		cy += n * lh + 2 * pad;
	});
	return {x, y, w: cx - x, colX, headH, lh, pad, cellLines, rowY, rowH, bottom: cy};
};
export type PairGeom = ReturnType<typeof pairGeom>;
/** Centre of a cell (row r, column c) in a pair table geometry. */
export const cellAt = (g: PairGeom, r: number, c: number): [number, number] => [(g.colX[c] + g.colX[c + 1]) / 2, g.rowY[r] + g.rowH[r] / 2];

/**
 * Hand-drawn three-column table. `head` labels (or nodes) per column write at head.at; each row writes cell by cell
 * from row.at. A row can glow (`glow`), dim (`dim` frame) and take an amber link from the case A cell to the case B
 * cell with a small "=" or "≠" chip (`link`).
 */
export const PairTable: React.FC<{x: number; y: number; colW: number[]; rows: PRow[]; head: {labels: string[]; at: number; extra?: React.ReactNode}; size?: number; headH?: number; headDim?: number; featureGlow?: [number, number]; o?: number; s?: number}> = ({x, y, colW, rows, head, size = 25, headH = 64, headDim, featureGlow, o = 1, s = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const g = pairGeom(x, y, colW, rows, size, headH);
	const ho = prog(f, head.at, 12) * (headDim === undefined ? 1 : 1 - 0.55 * prog(f, headDim, 14));
	const shown = rows.filter(r => f >= r.at - 2);
	const bottom = shown.length ? g.rowY[shown.length - 1] + g.rowH[shown.length - 1] : y + headH;
	const draw = prog(f, head.at, 18);
	const fg = featureGlow ? vis(f, featureGlow[0], featureGlow[1], 10) : 0;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s}) translate(${-x},${-y})`}>
			<rect x={x - 6} y={y - 6} width={g.w + 12} height={(bottom - y) + 12} rx={14} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} opacity={draw} />
			{fg > 0.01 ? <rect x={g.colX[0] - 2} y={y} width={colW[0] + 4} height={headH} rx={10} fill={HI} opacity={0.6 * fg} /> : null}
			<g opacity={ho}>
				{head.labels.map((l, k) => l ? <T key={k} x={(g.colX[k] + g.colX[k + 1]) / 2} y={y + headH - 14} text={l} size={size} hand weight={700} color={k === 0 ? INK_SOFT : INK} anchor="middle" /> : null)}
				{head.extra}
			</g>
			<line x1={x} x2={x + g.w * draw} y1={y + headH} y2={y + headH} stroke={INK_SOFT} strokeWidth={2.5} />
			{g.colX.slice(1, -1).map((cx, k) => <line key={k} x1={cx} x2={cx} y1={y + 8} y2={y + 8 + (bottom - y - 16) * draw} stroke="rgba(60,45,20,0.28)" strokeWidth={2} />)}
			{rows.map((r, i) => {
				const ro = prog(f, r.at, 10);
				if (ro <= 0.01) return null;
				const dim = r.dim === undefined ? 1 : 1 - 0.6 * prog(f, r.dim, 14);
				const gl = r.glow ? vis(f, r.glow[0], r.glow[1], 10) : 0;
				const top = g.rowY[i], h = g.rowH[i];
				return (
					<g key={i} opacity={ro * dim}>
						{gl > 0.01 ? <rect x={x} y={top + 3} width={g.w} height={h - 6} rx={10} fill={HI} opacity={0.5 * gl} /> : null}
						{i > 0 ? <line x1={x + 8} x2={x + g.w - 8} y1={top} y2={top} stroke="rgba(60,45,20,0.18)" strokeWidth={2} /> : null}
						{r.cells.map((_, k) => {
							const ls = g.cellLines[i][k];
							const t0 = r.at + k * 10;
							const p = clamp01((f - t0) / Math.max(8, ls.join(' ').length * 0.7));
							if (p <= 0) return null;
							return (
								<g key={k} style={p >= 1 ? undefined : {clipPath: `inset(-40% ${100 - p * 100}% -40% -2%)`}}>
									{ls.map((ln, j) => <T key={j} x={(g.colX[k] + g.colX[k + 1]) / 2} y={top + g.pad + size * 0.86 + j * g.lh} text={ln} size={size} hand weight={700} color={k === 0 ? INK_SOFT : INK} anchor="middle" />)}
								</g>
							);
						})}
						{r.note ? [1, 2].map(k => <T key={k} x={(g.colX[k] + g.colX[k + 1]) / 2} y={top + h - g.pad - 4} text={r.note!.text} size={size * 0.8} weight={700} color={AMBER_INK} anchor="middle" o={prog(f, r.note!.at + (k - 1) * 8, 10)} />) : null}
						{r.link ? (() => {
							const lv = vis(f, r.link.at, r.link.out, 10);
							if (lv <= 0.01) return null;
							const yy = top + h - 6;
							const a: [number, number] = [(g.colX[1] + g.colX[2]) / 2, yy], b: [number, number] = [(g.colX[2] + g.colX[3]) / 2, yy];
							const mx = g.colX[2];
							return (
								<g opacity={lv}>
									<PairLines links={[{a, b, at: r.link.at, bow: -10}]} />
									<circle cx={mx} cy={yy - 4} r={17} fill="#fff8e6" stroke={AMBER} strokeWidth={3} opacity={prog(f, r.link.at + 10, 8)} />
									<T x={mx} y={yy + 4} text={r.link.mark} size={24} weight={800} color={AMBER_INK} anchor="middle" o={prog(f, r.link.at + 10, 8)} />
								</g>
							);
						})() : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- HairZoom ----------
const Hair: React.FC<{x: number; y: number; r: number; k: number; id: string}> = ({x, y, r, k, id}) => {
	const rr = rng(31);
	const hairs = Array.from({length: 200}, () => {
		const a = rr() * Math.PI * 2, d = Math.sqrt(rr()) * r * 0.95;
		return {x: x + Math.cos(a) * d, y: y + Math.sin(a) * d, ang: -0.9 + (rr() - 0.5) * 0.5, len: r * 0.2 + rr() * r * 0.18, red: rr() < 0.55};
	});
	return (
		<g>
			<defs><clipPath id={id}><circle cx={x} cy={y} r={r * k} /></clipPath></defs>
			<circle cx={x} cy={y} r={r * k} fill="#b9a68e" />
			<g clipPath={`url(#${id})`}>
				{hairs.map((h, i) => <line key={i} x1={h.x} y1={h.y} x2={h.x + Math.cos(h.ang) * h.len} y2={h.y + Math.sin(h.ang) * h.len} stroke={h.red ? '#9b3b22' : '#f7f2ea'} strokeWidth={r * 0.035} strokeLinecap="round" />)}
			</g>
			<circle cx={x} cy={y} r={r * k} fill="none" stroke={INK} strokeWidth={4.5} />
		</g>
	);
};
const Petal: React.FC<{x: number; y: number; r: number; k: number; id: string}> = ({x, y, r, k, id}) => {
	const cells: React.ReactNode[] = [];
	const cw = r * 0.26;
	for (let i = -5; i <= 5; i++) for (let j = -5; j <= 5; j++) cells.push(<ellipse key={i + ',' + j} cx={x + i * cw + (j % 2) * cw / 2} cy={y + j * cw * 0.88} rx={cw * 0.44} ry={cw * 0.38} fill="none" stroke="#d987a6" strokeWidth={1.5} opacity={0.6} />);
	return (
		<g>
			<defs><clipPath id={id}><circle cx={x} cy={y} r={r * k} /></clipPath></defs>
			<circle cx={x} cy={y} r={r * k} fill="#efa3bf" />
			<g clipPath={`url(#${id})`}>{cells}</g>
			<circle cx={x} cy={y} r={r * k} fill="none" stroke={INK} strokeWidth={4.5} />
		</g>
	);
};
/**
 * Two magnified circles: an even pink wash over a petal (every cell in between) and separate red and white hair strokes
 * over the roan coat (each hair one colour). Each opens at its own cue and both close at `out`; `from` draws dashed
 * zoom lines from a spot (for example a table cell) to each circle.
 */
export const HairZoom: React.FC<{petal: [number, number]; roan: [number, number]; r: number; petalAt: number; roanAt: number; out: number; from?: {petal?: [number, number]; roan?: [number, number]}}> = ({petal, roan, r, petalAt, roanAt, out, from = {}}) => {
	const f = useCurrentFrame();
	const one = (c: [number, number], at: number, kind: 'petal' | 'roan', tag: string, src?: [number, number]) => {
		const k = smooth(prog(f, at, 16)) * (1 - smooth(prog(f, out, 14)));
		if (k <= 0.01) return null;
		const pl = pulse(f, at + 8, 30);
		return (
			<g>
				{src ? <line x1={src[0]} y1={src[1]} x2={c[0]} y2={c[1] - r * k} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" opacity={k} /> : null}
				{kind === 'petal' ? <Petal x={c[0]} y={c[1]} r={r} k={k} id="s3pz" /> : <Hair x={c[0]} y={c[1]} r={r} k={k} id="s3hz" />}
				<T x={c[0]} y={c[1] + r + 42} text={tag} size={30} hand weight={700} color={INK} anchor="middle" o={k} />
				{pl > 0.01 ? <circle cx={c[0]} cy={c[1]} r={r * k + 8} fill="none" stroke={AMBER} strokeWidth={4} opacity={pl} /> : null}
			</g>
		);
	};
	return (
		<g>
			{one(petal, petalAt, 'petal', 'pink: every cell in between', from.petal)}
			{one(roan, roanAt, 'roan', 'roan: each hair one colour', from.roan)}
			{void GREY_INK}
		</g>
	);
};

// ---------- verb card (scenes 2 and 14) ----------
/** Two-column icon: = link (similarity) and/or ≠ link (difference). */
export const PairIcon: React.FC<{x: number; y: number; kind: 'both' | 'diff'; s?: number}> = ({x, y, kind, s = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={-46} y={-28} width={22} height={56} rx={5} fill="#dcebf8" stroke="#6f9bc8" strokeWidth={2.5} />
		<rect x={24} y={-28} width={22} height={56} rx={5} fill="#fff8e6" stroke={AMBER} strokeWidth={2.5} />
		{kind === 'both' ? <T x={0} y={-4} text="=" size={28} weight={800} color={INK} anchor="middle" /> : null}
		<T x={0} y={kind === 'both' ? 24 : 10} text="≠" size={28} weight={800} color={AMBER_INK} anchor="middle" />
	</g>
);
export const VerbCard: React.FC<{x: number; y: number; w: number; h: number; verb: string; body: string; kind: 'both' | 'diff'; at: number; o?: number; lift?: number; lit?: [number, number]; size?: number; out?: number}> = ({x, y, w, h, verb, body, kind, at, o = 1, lift = 0, lit, size = 30, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const enter = (1 - smooth(prog(f, at, 16))) * 30;
	const l = lit ? vis(f, lit[0], lit[1], 10) : 0;
	const ls = linesOf(body, w - 60, size, false, 500);
	return (
		<g opacity={v} transform={`translate(0,${enter - lift})`}>
			{l > 0.01 ? <rect x={x - 8} y={y - 8} width={w + 16} height={h + 16} rx={22} fill={HI} opacity={0.55 * l} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			<PairIcon x={x + 58} y={y + 54} kind={kind} />
			<T x={x + 124} y={y + 70} text={verb} size={50} hand weight={700} color={INK} />
			{ls.map((t, i) => <T key={i} x={x + 30} y={y + 132 + i * size * 1.3} text={t} size={size} weight={500} color={INK} o={prog(f, at + 10 + i * 6, 10)} />)}
		</g>
	);
};
