// M8 G01 (Biology practice) drawing parts: the three question cards (full card for each attempt, a left column for each
// walkthrough), the Q1 answer grid and rate bars, population blocks drawn to scale, age pyramids (shape only), the Q2
// graph paper whose axes, ticks, points, lines, key and title draw stage by stage, the TAILS rail, the Q3 dot fields, the
// four-slot frame strip, the confounder triangle, the two-way arrow and the cohort arrow. Board pieces come from
// ./board. Coded diagrams only; organisms and organs stay painted plates. No people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, Arrow, BLUE, Box, CARD, Chip, DrawPath, EDGE, GLOW, GREYT, GREY_FILL, GTag, INK, INK_SOFT, Pic, QPart, RED, Sx, TEAL, Tag, Tbl, VIOLET, clamp01, marksCheck, mw,
	prog, pulse, smooth, vis,
} from './board';
import type {QMark} from './board';
import {PL} from './assets';
import {Q1_DEM, Q1_STEM, Q1_T_COL, Q1_T_FULL, Q2_CHIP, Q2_DATA, Q2_DEM, Q2_STEM, Q2_T_COL, Q2_T_FULL, Q3_CLAIM, Q3_DEM, Q3_STEM, Q3_T_COL, Q3_T_FULL} from './common';

export * from './board';
export const P_COL = '#7f9cbd';
export const Q_COL = AMBER;
const rng = (seed: number) => { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; };

// ---------- question cards ----------
const Illus: React.FC<{x: number; y: number; size?: number}> = ({x, y, size = 28}) => <GTag x={x} y={y} text="illustrative data" size={size} />;
export const Q1Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={214} w={1150} size={40} />
		<Tbl t={Q1_T_FULL} x={126} y={300} size={36} headSize={30} rowH={62} />
		<Illus x={126} y={534} />
		<QPart blocks={Q1_DEM} x={126} y={656} w={1150} size={38} />
	</g>
);
export const Q1Col: React.FC<{marks?: QMark[]; cells?: Record<string, number>; plate?: boolean}> = ({marks = [], cells = {}, plate = true}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q1_STEM} marks={marks} x={62} y={196} w={636} size={27} />
		<Tbl t={Q1_T_COL} x={62} y={258} size={27} headSize={26} rowH={46} marks={cells} />
		<Illus x={62} y={514} size={26} />
		<QPart blocks={Q1_DEM} marks={marks} x={62} y={598} w={636} size={27} />
		{plate ? <Pic p={PL.pancreas} cx={540} cy={952} w={300} /> : null}
	</g>
);
export const q1Marks = (m: QMark[]) => marksCheck([Q1_STEM, Q1_DEM], m);

export const Q2Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={214} w={1150} size={40} />
		<Tbl t={Q2_T_FULL} x={126} y={300} size={36} headSize={30} rowH={54} />
		<GTag x={126} y={682} text={Q2_CHIP} size={28} />
		<QPart blocks={Q2_DEM} x={126} y={800} w={1150} size={38} />
	</g>
);
export const Q2Col: React.FC<{marks?: QMark[]; cells?: Record<string, number>; hot?: {r: number; at: number; out?: number; color?: string}[]}> = ({marks = [], cells = {}, hot = []}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q2_STEM} marks={marks} x={62} y={196} w={636} size={27} />
		<Tbl t={Q2_T_COL} x={62} y={258} size={27} headSize={26} rowH={40} marks={cells} hot={hot} />
		<Tag x={62} y={620} w={636} text={Q2_CHIP} size={26} color="#8d857a" ink={GREYT} fill={GREY_FILL} />
		<QPart blocks={Q2_DEM} marks={marks} x={62} y={748} w={636} size={27} />
	</g>
);
export const q2Marks = (m: QMark[]) => marksCheck([Q2_STEM, Q2_DEM], m);

export const Q3Full: React.FC = () => (
	<g>
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q3_STEM} x={126} y={212} w={1150} size={38} />
		<Tbl t={Q3_T_FULL} x={126} y={350} size={34} headSize={28} rowH={56} boldCol0={false} />
		<QPart blocks={Q3_CLAIM} x={126} y={660} w={1150} size={38} />
		<Illus x={126} y={732} />
		<QPart blocks={Q3_DEM} x={126} y={846} w={1150} size={36} />
	</g>
);
export const Q3Col: React.FC<{marks?: QMark[]; cells?: Record<string, number>}> = ({marks = [], cells = {}}) => (
	<g>
		<Box x={40} y={150} w={680} h={890} />
		<QPart blocks={Q3_STEM} marks={marks} x={62} y={196} w={636} size={27} />
		<Tbl t={Q3_T_COL} x={62} y={362} size={26} headSize={26} rowH={70} marks={cells} />
		<QPart blocks={Q3_CLAIM} marks={marks} x={62} y={694} w={636} size={27} />
		<Illus x={62} y={746} size={26} />
		<QPart blocks={Q3_DEM} marks={marks} x={62} y={830} w={636} size={27} />
	</g>
);
export const q3Marks = (m: QMark[]) => marksCheck([Q3_STEM, Q3_CLAIM, Q3_DEM], m);

// ---------- Q1: answer grid and rate bars ----------
export type Cells = {pi: number; qi: number; pm: number; qm: number};
/** The Q1 answer table: incidence and mortality per 100 000 per year for P and Q; cells fill on their cues. */
export const ResultGrid: React.FC<{x: number; y: number; at: Cells; size?: number; glowQ?: number; o?: number}> = ({x, y, at, size = 48, glowQ, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const c0 = size * 1.9, c1 = size * 4.6, rh = size * 1.6, hh = size * 1.2;
	const W = c0 + 2 * c1;
	const g = glowQ === undefined ? 0 : vis(f, glowQ, glowQ + 90, 12);
	const cell = (v: string, a: number, cx: number, cy: number) => <Sx x={cx} y={cy} text={v} size={size} color={TEAL} anchor="middle" weight={800} at={a} />;
	return (
		<g opacity={o}>
			<Sx x={x} y={y - 12} text="per 100 000 per year" size={30} color={INK} hand weight={700} at={-1000} />
			<rect x={x} y={y} width={W} height={hh + 2 * rh} rx={12} fill={CARD} stroke="rgba(60,45,20,0.45)" strokeWidth={2.5} />
			{g > 0.01 ? <rect x={x + 4} y={y + hh + rh + 4} width={W - 8} height={rh - 8} rx={10} fill={AMBER} opacity={0.28 * g} /> : null}
			<line x1={x} x2={x + W} y1={y + hh} y2={y + hh} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
			<line x1={x} x2={x + W} y1={y + hh + rh} y2={y + hh + rh} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
			<line x1={x + c0} x2={x + c0} y1={y} y2={y + hh + 2 * rh} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
			<line x1={x + c0 + c1} x2={x + c0 + c1} y1={y} y2={y + hh + 2 * rh} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
			<Sx x={x + c0 + c1 / 2} y={y + hh * 0.72} text="incidence" size={size * 0.62} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={x + c0 + c1 * 1.5} y={y + hh * 0.72} text="mortality" size={size * 0.62} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={x + c0 / 2} y={y + hh + rh * 0.68} text="P" size={size} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={x + c0 / 2} y={y + hh + rh * 1.68} text="Q" size={size} color={INK} anchor="middle" weight={800} at={-1000} />
			{cell('550', at.pi, x + c0 + c1 / 2, y + hh + rh * 0.68)}
			{cell('700', at.qi, x + c0 + c1 / 2, y + hh + rh * 1.68)}
			{cell('25', at.pm, x + c0 + c1 * 1.5, y + hh + rh * 0.68)}
			{cell('36', at.qm, x + c0 + c1 * 1.5, y + hh + rh * 1.68)}
		</g>
	);
};
export const gridW = (size = 48) => size * 1.9 + 2 * size * 4.6;
/** Paired bars (P, Q) for incidence and mortality, each pair on its own scale; bars grow on their result cues. */
export const RateBars: React.FC<{x: number; base: number; h: number; at: Cells; check?: number; o?: number}> = ({x, base, h, at, check, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const bw = 70, gap = 14, grp = 2 * bw + gap + 70;
	const bar = (i: number, v: number, max: number, a: number, col: string, lab: string, letter: string) => {
		const k = smooth(prog(f, a, 22));
		const bh = (v / max) * h * k;
		const bx = x + (i >= 2 ? grp : 0) + (i % 2) * (bw + gap);
		return (
			<g key={i}>
				<rect x={bx} y={base - bh} width={bw} height={bh} rx={8} fill={col} opacity={0.9} />
				{k > 0.05 ? <Sx x={bx + bw / 2} y={base - bh - 12} text={lab} size={34} color={INK} anchor="middle" weight={800} at={a} /> : null}
				<Sx x={bx + bw / 2} y={base + 36} text={letter} size={32} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
		);
	};
	const ck = check === undefined ? 0 : prog(f, check, 14);
	return (
		<g opacity={o}>
			<line x1={x - 10} x2={x + 2 * grp - 50} y1={base} y2={base} stroke={INK_SOFT} strokeWidth={3} />
			{bar(0, 550, 700, at.pi, P_COL, '550', 'P')}
			{bar(1, 700, 700, at.qi, Q_COL, '700', 'Q')}
			{bar(2, 25, 36, at.pm, P_COL, '25', 'P')}
			{bar(3, 36, 36, at.qm, Q_COL, '36', 'Q')}
			<Sx x={x + bw + gap / 2} y={base + 74} text="incidence" size={30} color={INK} anchor="middle" hand weight={700} at={-1000} />
			<Sx x={x + grp + bw + gap / 2} y={base + 74} text="mortality" size={30} color={INK} anchor="middle" hand weight={700} at={-1000} />
			{ck > 0.01 ? <g opacity={ck}>
				<rect x={x + bw + gap - 6} y={base - h - 56} width={bw + 12} height={h + 62} rx={12} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				<rect x={x + grp + bw + gap - 6} y={base - h - 56} width={bw + 12} height={h + 62} rx={12} fill="none" stroke={AMBER_INK} strokeWidth={4} />
			</g> : null}
		</g>
	);
};

// ---------- Q1: population blocks and age pyramids ----------
/** P: 12 blocks of 100 000 (4 by 3); Q: 1.5 blocks. `hi` rings one block in each from a frame. */
export const PopBlocks: React.FC<{x: number; y: number; sq?: number; hi?: number; pulseAt?: number; o?: number; labels?: boolean}> = ({x, y, sq = 74, hi, pulseAt, o = 1, labels = true}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const g = 8, n = 6, sp = sq / n;
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	const sqr = (sx: number, sy: number, frac: number, col: string, key: string) => (
		<g key={key}>
			<rect x={sx} y={sy} width={sq * frac} height={sq} rx={6} fill={CARD} stroke={col} strokeWidth={2} />
			{Array.from({length: n * Math.round(n * frac)}, (_, i) => <circle key={i} cx={sx + sp / 2 + (i % Math.round(n * frac)) * sp} cy={sy + sp / 2 + Math.floor(i / Math.round(n * frac)) * sp} r={sp * 0.3} fill={col} opacity={0.75} />)}
		</g>
	);
	const qx = x + 4 * (sq + g) + 70;
	const h = hi === undefined ? 0 : prog(f, hi, 12);
	return (
		<g opacity={o} transform={pu > 0.01 ? `translate(${x + 200},${y + 120}) scale(${1 + 0.04 * pu}) translate(${-x - 200},${-y - 120})` : undefined}>
			{labels ? <Sx x={x} y={y - 18} text="P: 1 200 000 people" size={36} color={INK} hand weight={700} at={-1000} /> : null}
			{labels ? <Sx x={qx} y={y - 18} text="Q: 150 000" size={36} color={INK} hand weight={700} at={-1000} /> : null}
			{Array.from({length: 12}, (_, i) => sqr(x + (i % 4) * (sq + g), y + Math.floor(i / 4) * (sq + g), 1, P_COL, 'p' + i))}
			{sqr(qx, y, 1, AMBER_INK, 'q0')}
			{sqr(qx + sq + g, y, 0.5, AMBER_INK, 'q1')}
			{h > 0.01 ? <g opacity={h}>
				<rect x={x - 6} y={y - 6} width={sq + 12} height={sq + 12} rx={9} fill="none" stroke={TEAL} strokeWidth={6} />
				<rect x={qx - 6} y={y - 6} width={sq + 12} height={sq + 12} rx={9} fill="none" stroke={TEAL} strokeWidth={6} />
			</g> : null}
		</g>
	);
};
export const popW = (sq = 74) => 4 * (sq + 8) + 70 + 1.5 * sq + 8;
/** A small age pyramid (shape only): bands from young (bottom) to old (top). */
export const AgePyr: React.FC<{x: number; y: number; w: number; h: number; old: boolean; label: string; color: string; at?: number; o?: number}> = ({x, y, w, h, old, label, color, at = -1000, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const young = [0.95, 0.85, 0.72, 0.58, 0.42, 0.26];
	const older = [0.5, 0.6, 0.72, 0.85, 0.92, 0.78];
	const ws = old ? older : young;
	const bh = h / ws.length;
	return (
		<g opacity={v}>
			{ws.map((k, i) => {
				const ww = w * k * smooth(prog(f, at + i * 3, 14));
				return <rect key={i} x={x + (w - ww) / 2} y={y + h - (i + 1) * bh + 2} width={ww} height={bh - 4} rx={4} fill={color} opacity={0.8} />;
			})}
			<line x1={x + w / 2} x2={x + w / 2} y1={y} y2={y + h} stroke={INK_SOFT} strokeWidth={2} />
			<Sx x={x + w / 2} y={y + h + 40} text={label} size={32} color={INK} anchor="middle" hand weight={700} at={-1000} />
		</g>
	);
};

// ---------- Q2: the graph ----------
export type GG = {x: number; y: number; w: number; h: number; x0: number; x1: number; y0: number; y1: number};
export const gx = (g: GG, v: number) => g.x + ((v - g.x0) / (g.x1 - g.x0)) * g.w;
export const gy = (g: GG, v: number) => g.y + g.h - ((v - g.y0) / (g.y1 - g.y0)) * g.h;
export const YEARS = Q2_DATA.map(d => d[0]);
export const Q2_DATA_X = Q2_DATA;
export type GStage = {xAxis?: number; yAxis?: number; xTicks?: number; yTicks?: number; pts?: number; mpts?: number; lines?: number; key?: number; title?: number};
const ALL: GStage = {xAxis: -1000, yAxis: -1000, xTicks: -1000, yTicks: -1000, pts: -1000, mpts: -1000, lines: -1000, key: -1000, title: -1000};
/** The melanoma graph on faint graph paper. Each stage draws from its frame (undefined = not yet). */
export const MelGraph: React.FC<{g: GG; st?: GStage; size?: number; titleSize?: number; o?: number; dimLines?: number; zeroPulse?: number; brPulse?: number; segInc?: [number, number, number][]; segMort?: [number, number, number][]; ptsEvery?: number; keyAt?: [number, number]; yLabel?: string; ghost?: boolean}> = ({g, st = ALL, ghost = false, size = 30, titleSize = 30, o = 1, dimLines, zeroPulse, brPulse, segInc = [], segMort = [], ptsEvery = 9, keyAt, yLabel = 'Rate (per 100 000 people per year)'}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const on = (a?: number) => (a === undefined ? 0 : prog(f, a, 14));
	const yt = [0, 10, 20, 30, 40, 50, 60];
	const gridX: number[] = []; for (let v = g.x0; v <= g.x1; v += 5) gridX.push(v);
	const gridY: number[] = []; for (let v = g.y0; v <= g.y1; v += 5) gridY.push(v);
	const xa = on(st.xAxis), ya = on(st.yAxis), xt = on(st.xTicks), ytk = on(st.yTicks), ln = on(st.lines), ky = on(st.key), tt = on(st.title);
	const dl = dimLines === undefined ? 1 : 1 - 0.55 * prog(f, dimLines, 14);
	const inc = Q2_DATA.map(d => [d[0], d[1]] as [number, number]);
	const mor = Q2_DATA.map(d => [d[0], d[2]] as [number, number]);
	const ptO = (base: number | undefined, i: number) => (base === undefined ? 0 : prog(f, base + i * ptsEvery, 8));
	const cross = (x: number, y: number, c: string, k: number, key: string) => (k <= 0.01 ? null : <g key={key} opacity={k}><path d={`M${x - 11},${y - 11} L${x + 11},${y + 11} M${x + 11},${y - 11} L${x - 11},${y + 11}`} stroke={c} strokeWidth={5} strokeLinecap="round" transform={`translate(0,${(1 - smooth(k)) * -26})`} /></g>);
	const path = (pts: [number, number][]) => 'M' + pts.map(([a, b]) => `${gx(g, a)},${gy(g, b)}`).join(' L');
	const seg = (pts: [number, number][], s: [number, number, number], c: string, k: string) => {
		const v = vis(f, s[2], undefined, 12);
		if (v <= 0.01) return null;
		const sub = pts.filter(p => p[0] >= s[0] && p[0] <= s[1]);
		return <path key={k} d={path(sub)} fill="none" stroke={c} strokeWidth={13} strokeLinecap="round" strokeLinejoin="round" opacity={0.32 * v} />;
	};
	const zp = zeroPulse === undefined ? 0 : pulse(f, zeroPulse, 40);
	const bp = brPulse === undefined ? 0 : pulse(f, brPulse, 40);
	const bx0 = gx(g, 2015), bx1 = gx(g, 2020);
	const [kx, ky0] = keyAt ?? [g.x + g.w - 230, g.y + g.h * 0.42];
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} fill={CARD} opacity={0.85} />
			{gridX.map(v => <line key={'gx' + v} x1={gx(g, v)} x2={gx(g, v)} y1={g.y} y2={g.y + g.h} stroke="#d9e3ea" strokeWidth={1.5} />)}
			{gridY.map(v => <line key={'gy' + v} x1={g.x} x2={g.x + g.w} y1={gy(g, v)} y2={gy(g, v)} stroke="#d9e3ea" strokeWidth={v % 10 === 0 ? 2 : 1.2} />)}
			{ghost ? <g opacity={0.3 * (1 - Math.min(xa, ya, xt, ytk))}>
				<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK} strokeWidth={3} />
				{YEARS.map(v => <g key={'gh' + v}><line x1={gx(g, v)} x2={gx(g, v)} y1={g.y + g.h} y2={g.y + g.h + 12} stroke={INK} strokeWidth={3} /><Sx x={gx(g, v) + (v === 2015 ? -8 : v === 2020 ? 8 : 0)} y={g.y + g.h + size * 1.3} text={`${v}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
				{[0, 10, 20, 30, 40, 50, 60].map(v => <g key={'gy' + v}><line x1={g.x - 12} x2={g.x} y1={gy(g, v)} y2={gy(g, v)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 18} y={gy(g, v) + size * 0.35} text={`${v}`} size={size} color={INK} anchor="end" weight={700} at={-1000} /></g>)}
			</g> : null}
			{xa > 0.01 ? <g opacity={xa}>
				<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w * smooth(xa)} y2={g.y + g.h} stroke={INK} strokeWidth={4} />
				<Sx x={g.x + g.w / 2} y={g.y + g.h + size * 2.5} text="Year" size={size + 6} color={VIOLET} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			{ya > 0.01 ? <g opacity={ya}>
				<line x1={g.x} y1={g.y + g.h} x2={g.x} y2={g.y + g.h - g.h * smooth(ya)} stroke={INK} strokeWidth={4} />
				<g transform={`translate(${g.x - size * 2.4},${g.y + g.h / 2}) rotate(-90)`}><Sx x={0} y={0} text={yLabel} size={size} color={AMBER_INK} anchor="middle" weight={800} at={-1000} /></g>
			</g> : null}
			{xt > 0.01 ? <g opacity={xt}>
				{YEARS.map((v, i) => {
					const lw = mw(`${v}`, size, false, 700), gap5 = gx(g, 2020) - gx(g, 2015);
					const sh = gap5 < lw + 10 ? (lw + 10 - gap5) / 2 : 0;
					const dx = v === 2015 ? -sh : v === 2020 ? sh : 0;
					return <g key={v} opacity={prog(f, (st.xTicks as number) + i * 5, 8)}><line x1={gx(g, v)} x2={gx(g, v)} y1={g.y + g.h} y2={g.y + g.h + 12} stroke={INK} strokeWidth={3} /><Sx x={gx(g, v) + dx} y={g.y + g.h + size * 1.3} text={`${v}`} size={size} color={INK} anchor="middle" weight={700} at={-1000} /></g>;
				})}
				<g transform={bp > 0.01 ? `translate(${(bx0 + bx1) / 2},${g.y + g.h + size * 1.7}) scale(${1 + 0.25 * bp}) translate(${-(bx0 + bx1) / 2},${-(g.y + g.h + size * 1.7)})` : undefined}>
					<path d={`M${bx0},${g.y + g.h + size * 1.55} l0,8 L${bx1},${g.y + g.h + size * 1.55 + 8} l0,-8`} fill="none" stroke={bp > 0.01 ? AMBER_INK : INK_SOFT} strokeWidth={3} />
					<Sx x={(bx0 + bx1) / 2} y={g.y + g.h + size * 2.55} text="5 years" size={size * 0.95} color={AMBER_INK} anchor="middle" hand weight={700} at={-1000} />
				</g>
			</g> : null}
			{ytk > 0.01 ? <g opacity={ytk}>{yt.map((v, i) => <g key={v} opacity={prog(f, (st.yTicks as number) + i * 3, 8)}><line x1={g.x - 12} x2={g.x} y1={gy(g, v)} y2={gy(g, v)} stroke={INK} strokeWidth={3} /><Sx x={g.x - 18} y={gy(g, v) + size * 0.35} text={`${v}`} size={v === 0 ? size * (1 + 0.5 * zp) : size} color={v === 0 && zp > 0.01 ? AMBER_INK : INK} anchor="end" weight={700} at={-1000} /></g>)}</g> : null}
			{segInc.map((s, i) => seg(inc, s, TEAL, 'si' + i))}
			{segMort.map((s, i) => seg(mor, s, AMBER_INK, 'sm' + i))}
			{ln > 0.01 ? <g opacity={dl}>
				<DrawPath d={path(inc)} at={st.lines as number} dur={30} color={TEAL} width={5} />
				<DrawPath d={path(mor)} at={(st.lines as number) + 14} dur={30} color={AMBER_INK} width={5} />
			</g> : null}
			<g opacity={dl}>
				{inc.map(([a, b], i) => cross(gx(g, a), gy(g, b), TEAL, ptO(st.pts, i), 'pi' + i))}
				{mor.map(([a, b], i) => cross(gx(g, a), gy(g, b), AMBER_INK, ptO(st.mpts, i), 'pm' + i))}
			</g>
			{ky > 0.01 ? <g opacity={ky}>
				<rect x={kx} y={ky0} width={220} height={98} rx={10} fill={CARD} stroke={EDGE} strokeWidth={2} />
				<line x1={kx + 16} x2={kx + 60} y1={ky0 + 32} y2={ky0 + 32} stroke={TEAL} strokeWidth={5} /><Sx x={kx + 72} y={ky0 + 42} text="incidence" size={28} color={INK} weight={700} at={-1000} />
				<line x1={kx + 16} x2={kx + 60} y1={ky0 + 72} y2={ky0 + 72} stroke={AMBER_INK} strokeWidth={5} /><Sx x={kx + 72} y={ky0 + 82} text="mortality" size={28} color={INK} weight={700} at={-1000} />
			</g> : null}
			{tt > 0.01 ? <g opacity={tt}>
				<Sx x={g.x} y={g.y - titleSize * 1.75} text="Melanoma incidence and mortality rates" size={titleSize} color={INK} weight={800} at={-1000} />
				<Sx x={g.x} y={g.y - titleSize * 0.6} text="in Australia, 1985 to 2020" size={titleSize} color={INK} weight={800} at={-1000} />
			</g> : null}
		</g>
	);
};
/** A dashed reading guide from a data point to the y axis with its value. */
export const Guide: React.FC<{g: GG; yr: number; v: number; at: number; out?: number; color?: string; label?: string; size?: number; dy?: number}> = ({g, yr, v, at, out, color = TEAL, label, size = 36, dy = -12}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<DrawPath d={`M${gx(g, yr)},${gy(g, v)} L${g.x},${gy(g, v)}`} at={at} dur={14} color={color} width={3} dash="8 7" />
			<circle cx={gx(g, yr)} cy={gy(g, v)} r={9} fill={color} />
			<Sx x={gx(g, yr) + 12} y={gy(g, v) + dy} text={label ?? `${v}`} size={size} color={color} weight={800} at={at + 6} />
		</g>
	);
};
/** The TAILS rail: five rows that light on their cues. */
export const Rail: React.FC<{x: number; y: number; lit: Record<string, number>; pulseAt?: number; o?: number; rh?: number}> = ({x, y, lit, pulseAt, o = 1, rh = 92}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const rows: [string, string][] = [['T', 'title'], ['A', 'axes'], ['I', 'intervals'], ['L', 'labels'], ['S', 'scale']];
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	return (
		<g opacity={o}>
			{rows.map(([k, w], i) => {
				const L = lit[k] === undefined ? 0 : prog(f, lit[k], 12);
				const yy = y + i * rh;
				return (
					<g key={k}>
						<rect x={x} y={yy} width={240} height={rh - 12} rx={14} fill={L > 0.5 ? TEAL : CARD} stroke={L > 0.5 ? TEAL : EDGE} strokeWidth={3} />
						<Sx x={x + 22} y={yy + rh * 0.58} text={k} size={52 * (1 + 0.15 * pu)} color={L > 0.5 ? CARD : INK_SOFT} weight={900} at={-1000} />
						<Sx x={x + 76} y={yy + rh * 0.55} text={w} size={36} color={L > 0.5 ? CARD : INK} hand weight={700} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- Q3: dot fields ----------
/** cols x rows plain dots; `n` of them (scattered, fixed) tint amber from `tint`, one by one. */
export const DotBlock: React.FC<{x: number; y: number; cols: number; rows: number; sp: number; n: number; tint?: number; seed?: number; o?: number; pulseAt?: number; label?: string; labelAt?: number}> = ({x, y, cols, rows, sp, n, tint, seed = 7, o = 1, pulseAt, label, labelAt = -1000}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const N = cols * rows;
	const R = rng(seed * 977 + N);
	const order = Array.from({length: N}, (_, i) => i);
	for (let i = N - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); const t = order[i]; order[i] = order[j]; order[j] = t; }
	const hot = new Map<number, number>();
	order.slice(0, n).forEach((idx, k) => hot.set(idx, k));
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	const cx = x + (cols * sp) / 2, cy = y + (rows * sp) / 2;
	return (
		<g opacity={o} transform={pu > 0.01 ? `translate(${cx},${cy}) scale(${1 + 0.05 * pu}) translate(${-cx},${-cy})` : undefined}>
			<rect x={x - sp * 0.6} y={y - sp * 0.6} width={cols * sp + sp * 0.2} height={rows * sp + sp * 0.2} rx={8} fill={CARD} stroke={EDGE} strokeWidth={2} />
			{Array.from({length: N}, (_, i) => {
				const k = hot.get(i);
				const t = k === undefined || tint === undefined ? 0 : prog(f, tint + Math.floor((k / n) * 30), 6);
				return <circle key={i} cx={x + (i % cols) * sp} cy={y + Math.floor(i / cols) * sp} r={sp * (0.3 + 0.12 * t)} fill={t > 0.5 ? AMBER_INK : '#b9b2a4'} />;
			})}
			{label ? <Sx x={x - sp * 0.6} y={y - sp * 0.6 - 14} text={label} size={34} color={INK} hand weight={700} at={labelAt} /> : null}
		</g>
	);
};

// ---------- Q3: frame strip, confounder triangle, arrows ----------
export const SLOTS = ['design', 'strength', 'limitation', 'judgement'];
export type Fill = {t: string; at: number; parts?: [string, number][]};
/** b11's four-slot frame (design, strength, limitation, judgement); each slot fills on its cue. */
export const FrameStrip: React.FC<{x: number; y: number; w: number; h: number; fills: (Fill | undefined)[]; size?: number; pulseAt?: [number, number][]; o?: number; only?: number[]}> = ({x, y, w, h, fills, size = 34, pulseAt = [], o = 1, only}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const idx = only ?? [0, 1, 2, 3];
	const gap = 14, sw = (w - gap * (idx.length - 1)) / idx.length;
	return (
		<g opacity={o}>
			{idx.map((i, k) => {
				const sx = x + k * (sw + gap);
				const fl = fills[i];
				const v = fl ? prog(f, fl.at, 12) : 0;
				const pu = pulseAt.filter(p => p[0] === i).reduce((m, p) => Math.max(m, pulse(f, p[1], 40)), 0);
				return (
					<g key={i}>
						{pu > 0.01 ? <rect x={sx - 8} y={y - 8} width={sw + 16} height={h + 16} rx={20} fill={AMBER} opacity={0.35 * pu} /> : null}
						<rect x={sx} y={y} width={sw} height={h} rx={16} fill={v > 0.5 ? '#fffaf0' : CARD} stroke={v > 0.5 ? BLUE : EDGE} strokeWidth={v > 0.5 ? 4 : 3} strokeDasharray={v > 0.5 ? undefined : '10 8'} />
						<Sx x={sx + 18} y={y + 40} text={SLOTS[i]} size={32} color={BLUE} hand weight={700} at={-1000} />
						{fl && v > 0.01 ? <g opacity={v}>{wrapLines(fl.parts ? fl.parts.filter(p => f >= p[1]).map(p => p[0]).join(' ') : fl.t, size, sw - 30).map((l, j) => <Sx key={j} x={sx + 16} y={y + 44 + size * 1.08 * (j + 1)} text={l} size={size} color={INK} hand weight={700} at={-1000} />)}</g> : null}
					</g>
				);
			})}
		</g>
	);
};
const wrapLines = (text: string, size: number, maxW: number) => {
	const out: string[] = [];
	let line = '';
	for (const w of text.split(' ')) { const t = line ? line + ' ' + w : w; if (line && mw(t, size, true, 700) > maxW) { out.push(line); line = w; } else line = t; }
	if (line) out.push(line);
	return out;
};
/** Two base nodes and a grey apex whose word cycles (possible confounders), arrows from the apex to both. */
export const ConfTri: React.FC<{x: number; y: number; w: number; h: number; at?: number; words: [string, number][]; label?: string; labelAt?: number; pulseAt?: number; o?: number; size?: number}> = ({x, y, w, h, at = -1000, words, label, labelAt = -1000, pulseAt, o = 1, size = 34}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const nwOf = (t: string) => mw(t, size, true, 700) + 40;
	const ax = x + w / 2, ay = y + 40, lx = x + nwOf('energy drinks') / 2 + 4, rx = x + w - nwOf('type 2 diabetes') / 2 - 4, by = y + h - 40;
	let cur = words.length ? words[0][0] : '?';
	for (const [t, a] of words) if (f >= a) cur = t;
	const pu = pulseAt === undefined ? 0 : pulse(f, pulseAt, 40);
	const node = (cx: number, cy: number, t: string, col: string, fill: string) => {
		const nw = mw(t, size, true, 700) + 40;
		return <g><rect x={cx - nw / 2} y={cy - size * 0.85} width={nw} height={size * 1.7} rx={size * 0.85} fill={fill} stroke={col} strokeWidth={3} /><Sx x={cx} y={cy + size * 0.33} text={t} size={size} color={INK} anchor="middle" hand weight={700} at={-1000} /></g>;
	};
	return (
		<g opacity={v} transform={pu > 0.01 ? `translate(${ax},${(ay + by) / 2}) scale(${1 + 0.05 * pu}) translate(${-ax},${-(ay + by) / 2})` : undefined}>
			<line x1={lx} x2={rx} y1={by} y2={by} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
			<Arrow a={[ax - 40, ay + 34]} b={[lx + 20, by - 40]} color={GREYT} width={4} />
			<Arrow a={[ax + 40, ay + 34]} b={[rx - 20, by - 40]} color={GREYT} width={4} />
			{node(lx, by, 'energy drinks', BLUE, CARD)}
			{node(rx, by, 'type 2 diabetes', BLUE, CARD)}
			{node(ax, ay, cur, '#8d857a', GREY_FILL)}
			{label ? <Sx x={ax} y={ay + size * 1.95} text={label} size={32} color={AMBER_INK} anchor="middle" hand weight={700} at={labelAt} /> : null}
		</g>
	);
};
