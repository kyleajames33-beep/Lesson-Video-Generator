// Drawing parts for Y11 Chem WS V02 (planning investigations). Reuses the M1 V08 parts (and through them the V06, V01
// and M2 V06 text, chips, framed answers, pen marks, plates, readouts, brackets, the balance and the pause hold). New
// here, all coded: the colour key, crucible plate geometry, coded flames and steam, a crucible bowl clipped off its
// tripod (to sit on a balance pan), a balance with a large display, the plan board (four sections that fill as the
// plan is decided, with prompts until then and struck rewrites), a dashed inset card, the 3 by 3 risk matrix and the
// prediction axes with run dots.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {BAL, CRU_PT, predict} from './common';
import type {PDef} from './common';
import {DrawPath, INK, Plate, Rich, StrikeLine, Sx, TickMark, Write, clamp01, lerp, plateMap, prog, smooth, tw, vis} from '../chem-y11-m1-v08/parts';
import type {Seg} from '../chem-y11-m1-v08/parts';

export * from '../chem-y11-m1-v08/parts';

// ---------- colour key (design Revision 4, fixed across ws-v01 to ws-v03) ----------
export const NAVY_T = '#24407a'; // independent variable, givens
export const GOLD_S = '#b08a1e', GOLD_T = '#86650a'; // controlled variables and the "because" (stroke, text)
export const TEAL_S = '#1f8a8f', TEAL_T = '#0b625d'; // valid
export const VIOLET_S = '#7d62b3', VIOLET_T = '#5b3f94'; // reliable
export const GREEN_T = '#287347', GREEN_S = '#2f8a5b'; // framed answers, low risk
export const AMBER_S = '#d18f1f', AMBER_T = '#9c5a00'; // medium risk
export const RED_T = '#b8322a', RED_S = '#c4362f'; // crossed mistakes, high risk
export const ROSE_T = '#a3284f';
export const SLATE_T = '#5a6470';
export const WARM_T = '#a8421c'; // equipment section
export const CARD = '#fffdf8';
export const WATER_C = '#5aa7e6';

// ---------- crucible plates ----------
/** Screen mapping of a 1024 x 1536 crucible plate drawn at (x, y) with height h (box top at y). */
export const cruGeo = (p: PDef, x: number, y: number, h: number) => {
	const m = plateMap(p, x, y, h);
	return {...m, h, axis: m.X(CRU_PT.axis), crystals: m.Y(CRU_PT.crystals), mid: m.Y(CRU_PT.bowlMid), bottom: m.Y(CRU_PT.bottom), rim: m.Y(CRU_PT.rim), mouth: m.Y(CRU_PT.mouth), tip: m.Y(CRU_PT.tip), gap: [m.X(CRU_PT.lidGap[0]), m.Y(CRU_PT.lidGap[1])] as [number, number], ring: m.Y(CRU_PT.ring)};
};

/** A coded Bunsen flame standing on the burner mouth (x, y): h tall; roar > 0 adds the yellow-orange luminous outer. */
export const Flame: React.FC<{x: number; y: number; h: number; roar?: number; o?: number; seed?: number}> = ({x, y, h, roar = 0, o = 1, seed = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.005 || h <= 1) return null;
	const wob = Math.sin(f * 0.55 + seed) * h * 0.05, wob2 = Math.sin(f * 0.8 + seed * 2) * h * 0.03;
	const w = h * (0.34 + 0.1 * roar);
	const outer = `M${x - w / 2},${y} C${x - w * 0.62},${y - h * 0.45} ${x - w * 0.2 + wob},${y - h * 0.8} ${x + wob},${y - h} C${x + w * 0.2 + wob},${y - h * 0.8} ${x + w * 0.62},${y - h * 0.45} ${x + w / 2},${y} Z`;
	const ih = h * (roar > 0 ? 0.42 : 0.62), iw = w * 0.55;
	const inner = `M${x - iw / 2},${y} C${x - iw * 0.55},${y - ih * 0.5} ${x - iw * 0.1 + wob2},${y - ih * 0.85} ${x + wob2},${y - ih} C${x + iw * 0.1 + wob2},${y - ih * 0.85} ${x + iw * 0.55},${y - ih * 0.5} ${x + iw / 2},${y} Z`;
	return (
		<g opacity={o}>
			<path d={outer} fill={roar > 0 ? '#f6b23c' : '#7fbfff'} opacity={roar > 0 ? 0.92 : 0.75} stroke={roar > 0 ? '#d4731c' : '#3f86d8'} strokeWidth={2} />
			<path d={inner} fill="#2f6fe0" opacity={0.9} />
		</g>
	);
};

/** Rising steam wisps above (x, y), from frame `from` to `to`. */
export const Steam: React.FC<{x: number; y: number; from: number; to?: number; n?: number; spread?: number; s?: number}> = ({x, y, from, to = 1e9, n = 4, spread = 40, s = 1}) => {
	const f = useCurrentFrame();
	const o = prog(f, from, 14) * (1 - prog(f, to, 20));
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const ph = ((f * 1.3 + i * (120 / n)) % 120) / 120;
				return <path key={i} d={`M${x - ((n - 1) / 2) * spread + i * spread},${y - ph * 120 * s} q${-12 * s},${-18 * s} 0,${-36 * s} q${12 * s},${-18 * s} 0,${-36 * s}`} fill="none" stroke="#8fa9bd" strokeWidth={5} strokeLinecap="round" opacity={1 - ph} />;
			})}
		</g>
	);
};

// ---------- a crucible bowl clipped off its tripod ----------
/** Bowl (and lid) outline on the 1024 x 1536 canvas. */
const BOWL: [number, number][] = [[196, 84], [634, 84], [632, 255], [608, 305], [580, 352], [544, 400], [500, 433], [462, 447], [368, 447], [330, 433], [288, 400], [254, 352], [224, 305], [198, 255]];
/** The bowl of crucible plate p with its bottom centre on screen point (bx, by), scaled so the bowl's rim is `rimW`
 *  px wide. `cs` is the plate's canvas scale (1 for the 1024 x 1536 plates, 1.25 for the open white crucible). */
export const Bowl: React.FC<{id: string; p: PDef; bx: number; by: number; rimW: number; cs?: number; o?: number; children?: React.ReactNode}> = ({id, p, bx, by, rimW, cs = 1, o = 1, children}) => {
	if (o <= 0.005) return null;
	const k = rimW / (418 * cs);
	const ox = bx - CRU_PT.axis * cs * k, oy = by - 447 * cs * k;
	const pts = BOWL.map(([u, v]) => `${ox + u * cs * k},${oy + v * cs * k}`).join(' ');
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><polygon points={pts} /></clipPath></defs>
			<g clipPath={`url(#${id})`}>
				<image href={staticFile(p.src)} x={ox} y={oy} width={p.nat[0] * k} height={p.nat[1] * k} />
			</g>
			{children}
		</g>
	);
};
/** Screen point of a native bowl point for a Bowl placed at (bx, by) with rim width rimW. */
export const bowlPt = (bx: number, by: number, rimW: number, u: number, v: number, cs = 1): [number, number] => {
	const k = rimW / (418 * cs);
	return [bx + (u - CRU_PT.axis) * cs * k, by + (v - 447) * cs * k];
};

// ---------- the balance with a large display ----------
export type BalW = {k: number; x: number; y: number; w: number; h: number; pan: [number, number]; disp: [number, number]; X: (u: number) => number; Y: (v: number) => number};
export const balW = (x: number, y: number, w: number): BalW => {
	const k = w / BAL.box[2];
	const X = (u: number) => x + (u - BAL.box[0]) * k, Y = (v: number) => y + (v - BAL.box[1]) * k;
	return {k, x, y, w, h: BAL.box[3] * k, pan: [X(640), Y(272)], disp: [X(783), Y(620)], X, Y};
};
/** The painted balance with a coded reading in its blank display window (size in px, green digits). */
export const BalanceW: React.FC<{g: BalW; text: string; size?: number; at?: number; out?: number; o?: number; frame?: string; frameAt?: number}> = ({g, text, size = 52, at = -1000, out, o = 1, frame, frameAt = -1000}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.005) return null;
	const fo = frame ? prog(f, frameAt, 12) : 0;
	return (
		<g opacity={v}>
			{fo > 0.01 ? <rect x={g.x - 16} y={g.y - 16} width={g.w + 32} height={g.h + 32} rx={22} fill="none" stroke={frame} strokeWidth={6} opacity={fo} /> : null}
			<Plate p={BAL} x={g.x} y={g.y} h={g.h} />
			<Sx x={g.disp[0] - 10 * g.k} y={g.disp[1] + size * 0.36} text={text} size={size} color="#d8fbe0" anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- hand tags, inset cards ----------
/** A hand tag (Caveat) that writes on, in the colour of the idea it marks. */
export const Tag: React.FC<{x: number; y: number; text: string; at: number; out?: number; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, at, out, color = INK, size = 42, anchor = 'start'}) => <Write x={x} y={y} text={text} at={at} out={out} size={size} color={color} anchor={anchor} cps={34} />;
/** A dashed-border inset card (for a wrong or "what if" case). */
export const Inset: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; children?: React.ReactNode; strike?: number}> = ({x, y, w, h, at, out, children, strike}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.005) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke={INK} strokeWidth={3} strokeDasharray="12 8" />
			{children}
			{strike !== undefined && f >= strike ? <>
				<DrawPath d={`M${x + 14},${y + h - 14} L${x + w - 14},${y + 14}`} at={strike} dur={10} color={RED_S} width={7} />
				<DrawPath d={`M${x + 14},${y + 14} L${x + w - 14},${y + h - 14}`} at={strike + 5} dur={10} color={RED_S} width={7} />
			</> : null}
		</g>
	);
};
/** Red X across a box. */
export const CrossBox: React.FC<{x: number; y: number; w: number; h: number; at: number; color?: string; width?: number}> = ({x, y, w, h, at, color = RED_S, width = 8}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return (
		<g>
			<DrawPath d={`M${x},${y + h} L${x + w},${y}`} at={at} dur={10} color={color} width={width} />
			<DrawPath d={`M${x},${y} L${x + w},${y + h}`} at={at + 5} dur={10} color={color} width={width} />
		</g>
	);
};

// ---------- the plan board ----------
export type PLine = {segs: Seg[]; at?: number; strike?: number; hand?: boolean; strikeW?: number; strikeX?: number};
export type PSec = {title: string; color: string; prompt?: string; lines: PLine[]; hiAt?: number; hiOut?: number; summary?: Seg[]; tick?: boolean};
export const SEC = {valid: TEAL_T, reliable: VIOLET_T, equipment: WARM_T, safe: GREEN_T};
const secH = (s: PSec, tsize: number, lh: number) => tsize * 1.3 + Math.max(1, s.summary ? 1 : s.lines.length) * lh;
/** The plan board: a card with sections that fill as the plan is decided. A section shows its prompt (dark ink, hand)
 *  until its first line lands; `summary` collapses a finished section to one line. `cols` = 2 splits the sections
 *  into two columns (first half left). */
export const PlanBoard: React.FC<{x: number; y: number; w: number; h: number; secs: PSec[]; size?: number; tsize?: number; lh?: number; gap?: number; at?: number; out?: number; title?: string; cols?: 1 | 2; o?: number}> = ({x, y, w, h, secs, size = 30, tsize = 36, lh, gap = 18, at = -1000, out, title = 'Our plan', cols = 1, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.005) return null;
	const LH = lh ?? Math.round(size * 1.32);
	const pad = 26;
	const colW = cols === 2 ? (w - pad * 3) / 2 : w - pad * 2;
	const half = cols === 2 ? Math.ceil(secs.length / 2) : secs.length;
	const out2: React.ReactNode[] = [];
	let yy = y + 64;
	secs.forEach((s, i) => {
		if (cols === 2 && i === half) yy = y + 64;
		const cx = x + pad + (cols === 2 && i >= half ? colW + pad : 0);
		const sh = secH(s, tsize, LH);
		const hi = s.hiAt === undefined ? 0 : prog(f, s.hiAt, 12) * (s.hiOut === undefined ? 1 : 1 - prog(f, s.hiOut, 12));
		const first = s.lines.length ? (s.lines[0].at ?? -1000) : 1e9;
		const ty = yy + tsize;
		out2.push(
			<g key={i}>
				{hi > 0.01 ? <rect x={cx - 12} y={yy - 6} width={colW + 24} height={sh + 10} rx={12} fill={s.color} opacity={0.12 * hi} stroke={s.color} strokeWidth={3} strokeOpacity={hi} /> : null}
				<Sx x={cx} y={ty} text={s.title} size={tsize} color={s.color} weight={800} at={-1000} />
				{s.tick ? <TickMark x={cx + tw(s.title, tsize, false, 800) + 30} y={ty - tsize * 0.32} at={-1000} s={0.9} color={s.color} /> : null}
				{s.summary ? <Rich x={cx} y={ty + LH} segs={s.summary} size={size} weight={700} /> : <>
					{s.prompt ? <Sx x={cx} y={ty + LH} text={s.prompt} size={size + 6} color={INK} hand weight={700} at={-1000} opacity={1 - prog(f, first - 10, 10)} /> : null}
					{s.lines.map((l, j) => {
						const ly = ty + LH * (j + 1);
						return (
							<g key={j}>
								<Rich x={cx} y={ly} segs={l.segs} size={l.hand ? size + 6 : size} weight={700} hand={l.hand} at={l.at ?? -1000} />
								{l.strike !== undefined ? <StrikeLine x1={cx + (l.strikeX ?? 0) - 4} y1={ly - size * 0.32} x2={cx + (l.strikeX ?? 0) + (l.strikeW ?? 200) + 4} y2={ly - size * 0.32} at={l.strike} color={SLATE_T} width={5} /> : null}
							</g>
						);
					})}
				</>}
			</g>,
		);
		yy += sh + gap;
	});
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={20} fill={CARD} stroke={INK} strokeWidth={4} />
			<Sx x={x + pad} y={y + 50} text={title} size={40} color={INK} hand weight={700} at={-1000} />
			<line x1={x + pad} x2={x + w - pad} y1={y + 64} y2={y + 64} stroke="rgba(60,45,20,0.22)" strokeWidth={2} />
			{out2}
		</g>
	);
};

// ---------- risk matrix (example: likely, possible, unlikely by minor, moderate, major) ----------
export const RISK_LV = [['medium', 'high', 'high'], ['low', 'medium', 'high'], ['low', 'low', 'medium']] as const;
export const RISK_C: Record<string, {fill: string; ink: string; stroke: string}> = {
	low: {fill: '#dcefe2', ink: GREEN_T, stroke: GREEN_S},
	medium: {fill: '#f8e8c8', ink: AMBER_T, stroke: AMBER_S},
	high: {fill: '#f7dcd8', ink: RED_T, stroke: RED_S},
};
export type RM = {x: number; y: number; lw: number; cw: number; ch: number; th: number};
/** Centre of the matrix cell at row r (0 likely, 1 possible, 2 unlikely) and column c (0 minor, 1 moderate, 2 major). */
export const rmCell = (g: RM, r: number, c: number): [number, number] => [g.x + g.lw + (c + 0.5) * g.cw, g.y + g.th + (r + 0.5) * g.ch];
export const RiskMatrix: React.FC<{g: RM}> = ({g}) => {
	const rows = ['likely', 'possible', 'unlikely'], cols = ['minor', 'moderate', 'major'];
	return (
		<g>
			{cols.map((c, j) => <Sx key={c} x={g.x + g.lw + (j + 0.5) * g.cw} y={g.y + g.th - 14} text={c} size={30} color={INK} anchor="middle" weight={700} at={-1000} />)}
			{rows.map((r, i) => (
				<g key={r}>
					<Sx x={g.x + g.lw - 14} y={g.y + g.th + (i + 0.5) * g.ch + 11} text={r} size={30} color={INK} anchor="end" weight={700} at={-1000} />
					{cols.map((_, j) => {
						const lv = RISK_LV[i][j], c = RISK_C[lv];
						return (
							<g key={j}>
								<rect x={g.x + g.lw + j * g.cw} y={g.y + g.th + i * g.ch} width={g.cw} height={g.ch} fill={c.fill} stroke={INK} strokeWidth={2.5} />
								<Sx x={g.x + g.lw + (j + 0.5) * g.cw} y={g.y + g.th + (i + 0.5) * g.ch + 11} text={lv} size={30} color={c.ink} anchor="middle" weight={800} at={-1000} />
							</g>
						);
					})}
				</g>
			))}
		</g>
	);
};
/** The matrix marker: a thick ring that moves between cells over keyed frames [frame, row, col]. */
export const RiskMarker: React.FC<{g: RM; keys: [number, number, number][]; at: number; out?: number; color: (f: number) => string}> = ({g, keys, at, out, color}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.005) return null;
	let r = keys[0][1], c = keys[0][2];
	for (let i = 1; i < keys.length; i++) {
		const t = smooth(prog(f, keys[i][0], 20));
		r = lerp(r, keys[i][1], t); c = lerp(c, keys[i][2], t);
	}
	const [cx, cy] = [g.x + g.lw + (c + 0.5) * g.cw, g.y + g.th + (r + 0.5) * g.ch];
	const s = 0.7 + 0.3 * smooth(prog(f, at, 12));
	return <g opacity={v}><ellipse cx={cx} cy={cy} rx={(g.cw / 2 - 4) * s} ry={(g.ch / 2 - 4) * s} fill="none" stroke={color(f)} strokeWidth={8} /></g>;
};

// ---------- prediction axes and run dots ----------
export type GG = {x0: number; x1: number; y0: number; y1: number; tMax: number; pMax: number};
export const gX = (g: GG, t: number) => g.x0 + (t / g.tMax) * (g.x1 - g.x0);
export const gY = (g: GG, p: number) => g.y0 - (p / g.pMax) * (g.y0 - g.y1);
export const Axes: React.FC<{g: GG; xTitle?: string; yTitle?: string; ticks?: boolean; size?: number}> = ({g, xTitle = 'heating time (min)', yTitle = '% mass lost', ticks = true, size = 28}) => (
	<g>
		<line x1={g.x0} x2={g.x1 + 14} y1={g.y0} y2={g.y0} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<line x1={g.x0} x2={g.x0} y1={g.y0} y2={g.y1 - 14} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		{ticks ? [0, 2, 4, 6, 8, 10, 12].filter(t => t <= g.tMax).map(t => <Sx key={t} x={gX(g, t)} y={g.y0 + size + 8} text={`${t}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} />) : null}
		{ticks ? [0, 10, 20, 30, 40].filter(p => p <= g.pMax).map(p => <Sx key={p} x={g.x0 - 10} y={gY(g, p) + 10} text={`${p}`} size={size} color={INK} anchor="end" weight={700} at={-1000} />) : null}
		<Sx x={(g.x0 + g.x1) / 2} y={g.y0 + size * 2 + 20} text={xTitle} size={size} color={INK} anchor="middle" weight={700} at={-1000} />
		<Sx x={g.x0 + 8} y={g.y1 - 22} text={yTitle} size={size} color={INK} weight={700} at={-1000} />
	</g>
);
/** The dashed prediction curve (ws-v01), levelling off at 36.1%, with its dashed limit line. */
export const PredCurve: React.FC<{g: GG; o?: number; label?: boolean}> = ({g, o = 1, label = true}) => {
	if (o <= 0.005) return null;
	let d = '';
	for (let i = 0; i <= 60; i++) { const t = (g.tMax * i) / 60; d += `${i ? 'L' : 'M'}${gX(g, t).toFixed(1)},${gY(g, predict(t)).toFixed(1)} `; }
	return (
		<g opacity={o}>
			<line x1={g.x0} x2={g.x1} y1={gY(g, 36.1)} y2={gY(g, 36.1)} stroke={INK} strokeWidth={3} strokeDasharray="6 8" />
			<path d={d} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="14 10" strokeLinecap="round" />
			{label ? <Sx x={g.x1 + 18} y={gY(g, 36.1) + 10} text="36.1%" size={30} color={INK} weight={800} at={-1000} /> : null}
		</g>
	);
};
export {clamp01};
