// M7 G01 (Biology practice: outbreak data) drawing parts: the question strip (the whole question, scaled, with amber
// underlines on cue), an answer box whose lines write one by one on their cues, the Camp Wollemi lunch table, fraction
// bars (a bar filled to a share, numerator over a boxed denominator), the 4-hour epidemic curve with its meal
// timeline, the Province K table, the weekly cholera graph with intervention arrows, the leave-travel-enter chain and
// a dot field. B13 (M7) parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlateB, Ring, Sx, TEAL, TERRA, Tank, WText, clamp01, fitW, lerp, prog,
	pulse, rng, smooth, tw, vis,
} from '../bio-m7-b13/parts';
import type {PB, Pt} from '../bio-m7-b13/parts';
import {HscTag, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {wrapT} from '../bio-m6-p01/parts';
import {PLATES} from './assets';

export {
	AMBER, AMBER_INK, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlateB, Ring, Sx, TEAL, TERRA, Tank, WText, clamp01, fitW, lerp, prog,
	pulse, rng, smooth, tw, vis, PLATES, wrapT,
};
export type {PB, Pt, QBlock, QMark};
const TF = '"Inter Tight"';

// ---------- question strip ----------
/** The shrunken question: card, tag and the whole question text at scale `s` with its marks. */
export const QStrip: React.FC<{blocks: QBlock[]; marks: QMark[]; h: number; s?: number; w?: number}> = ({blocks, marks, h, s = 0.56, w = 2860}) => (
	<>
		<HscTag at={-100} />
		<CardBox x={100} y={150} w={1720} h={h} at={-100} />
		<QText q={qCheck(blocks.map(b => ({...b, at: -100, para: false})), marks)} x={130} y={186} w={w} size={30} card={false} s={s} />
	</>
);

// ---------- answer box ----------
export type ALine = {t: string; at: number};
/** An answer box whose lines write one by one; the newest line is ink, earlier ones soften. */
export const AnsLines: React.FC<{x: number; y: number; w: number; h: number; label: string; lines: ALine[]; at?: number; size?: number; color?: string}> = ({x, y, w, h, label, lines, at = -100, size = 26, color = INK}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const L = Math.round(size * 1.24);
	let yy = y + 66;
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={CARD} stroke={lines.some(l => f >= l.at) ? AMBER : EDGE} strokeWidth={2.5} />
			<Sx x={x + 20} y={y + 32} text={label} size={22} color={INK_SOFT} weight={700} at={-100} />
			{lines.map((l, i) => {
				const rows = wrapT(l.t, size, w - 40, true);
				const y0 = yy;
				yy += rows.length * L + 8;
				const p = prog(f, l.at, 12);
				if (p <= 0.01) return null;
				const newest = !lines[i + 1] || f < lines[i + 1].at;
				return <g key={i} opacity={p}>{rows.map((r, k) => <Sx key={k} x={x + 20} y={y0 + k * L} text={r} size={size} color={newest ? color : INK_SOFT} hand weight={700} at={-100} />)}</g>;
			})}
		</g>
	);
};

// ---------- Q1: the lunch table ----------
export const LUNCH = [['Food eaten', 'Number of students', 'Number who became ill (Wednesday 2 am to 6 am)'], ['Chicken sandwiches', '28', '16'], ['Salad rolls', '14', '0']];
/** The Tuesday lunch table; `ring` marks cells keyed 'r,c' from a frame (amber scribble ring). */
export const LunchTable: React.FC<{x: number; y: number; s?: number; at?: number; o?: number; ring?: Record<string, number>; size?: number}> = ({x, y, s = 1, at = -100, o = 1, ring = {}, size = 24}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const cw = [260, 200, 360], rh = 56, hh = 70;
	const cx = (c: number) => cw.slice(0, c).reduce((a, b) => a + b, 0);
	const W = cw[0] + cw[1] + cw[2];
	return (
		<g opacity={p} transform={`translate(${x},${y}) scale(${s})`}>
			<Sx x={0} y={-12} text="Tuesday lunch" size={size} color={INK} weight={800} at={-100} />
			<rect x={0} y={0} width={W} height={hh + rh * 2} rx={10} fill={CARD} stroke={INK} strokeWidth={2.5} />
			<line x1={0} x2={W} y1={hh} y2={hh} stroke={EDGE} strokeWidth={2} />
			<line x1={0} x2={W} y1={hh + rh} y2={hh + rh} stroke={EDGE} strokeWidth={2} />
			{[1, 2].map(c => <line key={c} x1={cx(c)} x2={cx(c)} y1={0} y2={hh + rh * 2} stroke={EDGE} strokeWidth={2} />)}
			{LUNCH[0].map((t, c) => wrapT(t, size * 0.82, cw[c] - 20).map((r, k) => <text key={c + '-' + k} x={cx(c) + 10} y={26 + k * size * 0.95} style={{fontFamily: TF, fontWeight: 700, fontSize: size * 0.82}} fill={INK}>{r}</text>))}
			{LUNCH.slice(1).map((row, ri) => row.map((t, c) => <text key={ri + '-' + c} x={c === 0 ? 10 : cx(c) + cw[c] / 2} y={hh + rh * ri + rh * 0.66} textAnchor={c === 0 ? 'start' : 'middle'} style={{fontFamily: TF, fontWeight: 600, fontSize: size}} fill={INK}>{t}</text>))}
			{Object.entries(ring).map(([k, a]) => {
				const [r, c] = k.split(',').map(Number);
				return <Ring key={k} cx={cx(c) + cw[c] / 2} cy={hh + rh * (r - 1) + rh / 2} rx={44} ry={24} at={a} color={AMBER} width={4} />;
			})}
		</g>
	);
};

// ---------- fraction bar ----------
/** A share bar: "num / den" with the denominator boxed, a bar filled to num/den from `fillAt`. */
export const FractionBar: React.FC<{x: number; y: number; w: number; num: number; den: number; label: string; at: number; fillAt?: number; o?: number; pulseAt?: number; grey?: number; size?: number}> = ({x, y, w, num, den, label, at, fillAt = 1e9, o = 1, pulseAt, grey = 0, size = 34}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const share = num / den * smooth(prog(f, fillAt, 24));
	const pu = pulseAt !== undefined ? pulse(f, pulseAt, 30) : 0;
	const g = clamp01(grey) > 0.5;
	return (
		<g opacity={p}>
			<text x={x + 40} y={y - 14} textAnchor="middle" style={{fontFamily: TF, fontWeight: 800, fontSize: size}} fill={g ? GREY_INK : INK}>{num}</text>
			<line x1={x + 4} x2={x + 76} y1={y} y2={y} stroke={g ? GREYT : INK} strokeWidth={3} />
			<rect x={x + 8} y={y + 6} width={64} height={size + 12} rx={8} fill={pu > 0.01 ? '#fff3d9' : 'none'} stroke={g ? GREYT : AMBER} strokeWidth={3 + 3 * pu} />
			<text x={x + 40} y={y + size + 6} textAnchor="middle" style={{fontFamily: TF, fontWeight: 800, fontSize: size}} fill={g ? GREY_INK : INK}>{den}</text>
			<rect x={x + 100} y={y - 18} width={w} height={36} rx={18} fill="#f3f2ee" stroke={GREYT} strokeWidth={2} />
			{share > 0.002 ? <rect x={x + 100} y={y - 18} width={w * share} height={36} rx={18} fill={g ? '#b9b2a4' : TEAL} opacity={0.85} /> : null}
			<Sx x={x + 100} y={y + 50} text={label} size={22} color={GREY_INK} weight={700} at={-100} />
		</g>
	);
};

// ---------- Q1: the epidemic curve ----------
/** 4-hour blocks from Monday 6 pm (hour 0) to Thursday 6 am (hour 60). Bars: 18 at hours 8 to 12, 16 at 32 to 36. */
export type CG = {x: number; y: number; w: number; h: number};
export const cgX = (g: CG, hour: number) => g.x + (hour / 60) * g.w;
export const cgY = (g: CG, v: number) => g.y + g.h - (v / 20) * g.h;
export const EpiCurve: React.FC<{g: CG; at?: number; o?: number; size?: number; outline?: number; shade?: number; meals?: boolean; barO?: number}> = ({g, at = -100, o = 1, size = 18, outline = 0, shade = 0, meals = true, barO = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const bars: [number, number][] = [[8, 18], [32, 16]];
	const ticks: [number, string][] = [[0, 'Mon 6 pm'], [12, 'Tue 6 am'], [24, 'Tue 6 pm'], [36, 'Wed 6 am'], [48, 'Wed 6 pm'], [60, 'Thu 6 am']];
	return (
		<g opacity={p}>
			{shade > 0.01 ? <rect x={cgX(g, 12)} y={g.y} width={cgX(g, 32) - cgX(g, 12)} height={g.h} fill="#e9e6df" opacity={shade} /> : null}
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
			{[0, 10, 20].map(v => <Sx key={v} x={g.x - 8} y={cgY(g, v) + 6} text={`${v}`} size={size} color={GREY_INK} weight={600} anchor="end" at={-100} />)}
			{Array.from({length: 16}, (_, i) => <line key={i} x1={cgX(g, i * 4)} x2={cgX(g, i * 4)} y1={g.y + g.h} y2={g.y + g.h + 6} stroke={INK_SOFT} strokeWidth={2} />)}
			{ticks.map(([h, t]) => <Sx key={t} x={cgX(g, h)} y={g.y + g.h + size + 10} text={t} size={size * 0.9} color={GREY_INK} weight={600} anchor="middle" at={-100} />)}
			<text x={g.x - size * 2.2} y={g.y + g.h / 2} textAnchor="middle" transform={`rotate(-90 ${g.x - size * 2.2} ${g.y + g.h / 2})`} style={{fontFamily: TF, fontWeight: 700, fontSize: size}} fill={INK}>new cases</text>
			<Sx x={g.x + g.w} y={g.y + g.h + size * 2 + 18} text="time of symptom onset (4-hour blocks)" size={size * 0.9} color={GREY_INK} weight={600} anchor="end" at={-100} />
			{bars.map(([h, v]) => (
				<g key={h} opacity={barO}>
					<rect x={cgX(g, h) + 2} y={cgY(g, v)} width={cgX(g, h + 4) - cgX(g, h) - 4} height={g.h - (cgY(g, v) - g.y)} fill="#c9a24d" />
					{outline > 0.01 ? <rect x={cgX(g, h) - 2} y={cgY(g, v) - 4} width={cgX(g, h + 4) - cgX(g, h) + 4} height={g.h - (cgY(g, v) - g.y) + 4} fill="none" stroke={AMBER} strokeWidth={4} opacity={outline} /> : null}
					<Sx x={cgX(g, h + 2)} y={cgY(g, v) - 8} text={`${v}`} size={size} color={INK} weight={800} anchor="middle" at={-100} />
				</g>
			))}
			{meals ? [[0, 'Mon dinner: chicken pasta'], [18.5, 'Tue lunch: chicken sandwiches or salad rolls']].map(([h, t], i) => (
				<g key={i}>
					<line x1={cgX(g, h as number)} x2={cgX(g, h as number)} y1={g.y - 20} y2={g.y + g.h} stroke={TERRA} strokeWidth={2.5} strokeDasharray="6 5" />
					<Sx x={cgX(g, h as number) + 6} y={g.y - 8} text={t as string} size={size * 0.9} color={TERRA} weight={700} at={-100} />
				</g>
			)) : null}
		</g>
	);
};

// ---------- Q2: the province table ----------
export const PROV = [['Year', 'Population', 'New confirmed malaria cases that year', 'Blood survey: people tested', 'Blood survey: people carrying the malaria parasite'], ['2018', '400 000', '4800', '2000', '50'], ['2023', '420 000', '840', '2000', '6']];
export const ProvTable: React.FC<{x: number; y: number; s?: number; at?: number; o?: number; mark?: Record<string, number>; size?: number}> = ({x, y, s = 1, at = -100, o = 1, mark = {}, size = 24}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const cw = [120, 200, 300, 300, 380], hh = 92, rh = 54;
	const cx = (c: number) => cw.slice(0, c).reduce((a, b) => a + b, 0);
	const W = cw.reduce((a, b) => a + b, 0);
	return (
		<g opacity={p} transform={`translate(${x},${y}) scale(${s})`}>
			<rect x={0} y={0} width={W} height={hh + rh * 2} rx={10} fill={CARD} stroke={INK} strokeWidth={2.5} />
			{[hh, hh + rh].map(yy => <line key={yy} x1={0} x2={W} y1={yy} y2={yy} stroke={EDGE} strokeWidth={2} />)}
			{[1, 2, 3, 4].map(c => <line key={c} x1={cx(c)} x2={cx(c)} y1={0} y2={hh + rh * 2} stroke={EDGE} strokeWidth={2} />)}
			{PROV[0].map((t, c) => wrapT(t, size * 0.82, cw[c] - 20).map((r, k) => <text key={c + '-' + k} x={cx(c) + 10} y={26 + k * size * 0.95} style={{fontFamily: TF, fontWeight: 700, fontSize: size * 0.82}} fill={INK}>{r}</text>))}
			{PROV.slice(1).map((row, ri) => row.map((t, c) => <text key={ri + '-' + c} x={cx(c) + cw[c] / 2} y={hh + rh * ri + rh * 0.66} textAnchor="middle" style={{fontFamily: TF, fontWeight: 600, fontSize: size}} fill={INK}>{t}</text>))}
			{Object.entries(mark).map(([k, a]) => {
				const [r, c] = k.split(',').map(Number);
				if (f < a) return null;
				const yy = r === 0 ? hh - 8 : hh + rh * (r - 1) + rh * 0.84;
				const ww = r === 0 ? cw[c] - 24 : tw(PROV[r][c], size) + 14;
				const x0 = r === 0 ? cx(c) + 12 : cx(c) + cw[c] / 2 - ww / 2;
				return <DrawPath key={k} d={`M${x0},${yy} L${x0 + ww},${yy}`} at={a} dur={12} color={AMBER} width={4} />;
			})}
		</g>
	);
};

// ---------- Q3: the weekly cholera graph ----------
export const CHOL = [4, 9, 15, 24, 33, 38, 22, 9, 3, 1];
export type WG3 = {x: number; y: number; w: number; h: number};
export const wx = (g: WG3, wk: number) => g.x + ((wk - 0.5) / 10) * g.w;
export const wy = (g: WG3, v: number) => g.y + g.h - (v / 40) * g.h;
/** The weekly graph; `seg` outlines a span of weeks in a colour; `guides` draws dotted reading guides at weeks. */
export const CholGraph: React.FC<{g: WG3; at?: number; o?: number; size?: number; pulseA?: number; pulseB?: number; seg?: {from: number; to: number; color: string; at: number}[]; guides?: {wk: number; at: number; out?: number}[]}> = ({g, at = -100, o = 1, size = 18, pulseA, pulseB, seg = [], guides = []}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	const pts = CHOL.map((v, i) => `${wx(g, i + 1)},${wy(g, v)}`).join(' ');
	const arrow = (wk: number, label: string, pa?: number) => {
		const pu = pa !== undefined ? pulse(f, pa, 36) : 0;
		const x = g.x + ((wk - 0.5) / 10) * g.w;
		return (
			<g>
				<path d={`M${x},${g.y + g.h + 66} L${x},${g.y + g.h + 32} m-9,12 l9,-12 l9,12`} fill="none" stroke={TERRA} strokeWidth={4 + 3 * pu} strokeLinecap="round" />
				<circle cx={x} cy={g.y + g.h + 84} r={15 + 4 * pu} fill="#fff3ea" stroke={TERRA} strokeWidth={3} />
				<Sx x={x} y={g.y + g.h + 91} text={label} size={20} color={TERRA} weight={800} anchor="middle" at={-100} />
			</g>
		);
	};
	return (
		<g opacity={p}>
			{[10, 20, 30, 40].map(v => <line key={v} x1={g.x} x2={g.x + g.w} y1={wy(g, v)} y2={wy(g, v)} stroke="#ebe5d8" strokeWidth={2} />)}
			<path d={`M${g.x},${g.y} L${g.x},${g.y + g.h} L${g.x + g.w},${g.y + g.h}`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
			{[0, 10, 20, 30, 40].map(v => <Sx key={v} x={g.x - 8} y={wy(g, v) + 6} text={`${v}`} size={size} color={GREY_INK} weight={600} anchor="end" at={-100} />)}
			{CHOL.map((_, i) => <Sx key={i} x={wx(g, i + 1)} y={g.y + g.h + size + 6} text={`${i + 1}`} size={size} color={GREY_INK} weight={600} anchor="middle" at={-100} />)}
			<Sx x={g.x} y={g.y - 10} text="new cholera cases" size={size} color={INK} weight={700} at={-100} />
			<Sx x={g.x + g.w} y={g.y + g.h + size + 6} text="week" size={size} color={GREY_INK} weight={600} anchor="start" at={-100} />
			<polyline points={pts} fill="none" stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			{seg.map((s, i) => (f >= s.at ? <DrawPath key={i} d={'M' + CHOL.slice(s.from - 1, s.to).map((v, k) => `${wx(g, s.from + k)},${wy(g, v)}`).join(' L')} at={s.at} dur={18} color={s.color} width={9} opacity={0.7} /> : null))}
			{CHOL.map((v, i) => <circle key={i} cx={wx(g, i + 1)} cy={wy(g, v)} r={6} fill={INK} />)}
			{guides.map((gd, i) => {
				const o2 = vis(f, gd.at, gd.out, 10);
				if (o2 <= 0.01) return null;
				const v = CHOL[gd.wk - 1];
				return (
					<g key={i} opacity={o2}>
						<line x1={g.x} x2={wx(g, gd.wk)} y1={wy(g, v)} y2={wy(g, v)} stroke={AMBER_INK} strokeWidth={2.5} strokeDasharray="5 6" />
						<Sx x={wx(g, gd.wk) + 10} y={wy(g, v) - 10} text={`${v}`} size={size + 4} color={AMBER_INK} weight={800} at={-100} />
					</g>
				);
			})}
			{arrow(3, 'A', pulseA)}
			{arrow(6, 'B', pulseB)}
		</g>
	);
};

// ---------- Q3: the link chain ----------
export const CHAIN = ['leave', 'travel', 'enter'];
export const chainX = (x: number, i: number) => x + i * 260;
export const Chain3: React.FC<{x: number; y: number; at?: number; o?: number; cutAt?: number; lit?: number[]}> = ({x, y, at = -100, o = 1, cutAt, lit = [0, 0, 0]}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * o;
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			{CHAIN.map((t, i) => {
				const cx = chainX(x, i);
				const on = (lit[i] ?? 0) > 0.5;
				return (
					<g key={t}>
						<rect x={cx - 90} y={y - 30} width={180} height={60} rx={30} fill={on ? '#fff3d9' : CARD} stroke={on ? AMBER : INK_SOFT} strokeWidth={3} />
						<Sx x={cx} y={y + 10} text={t} size={30} color={INK} hand weight={700} anchor="middle" at={-100} />
						{i < 2 ? <path d={`M${cx + 95},${y} l70,0 m-12,-10 l12,10 l-12,10`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} /> : null}
					</g>
				);
			})}
			{cutAt !== undefined && f >= cutAt ? <g><DrawPath d={`M${chainX(x, 1) - 20},${y - 54} L${chainX(x, 1) + 20},${y + 54}`} at={cutAt} dur={10} color={TEAL} width={8} /></g> : null}
		</g>
	);
};
/** A field of plain grey dots (people, never drawn as people). */
export const DotField: React.FC<{x: number; y: number; w: number; h: number; n: number; seed?: number; o?: number; r?: number; color?: string}> = ({x, y, w, h, n, seed = 5, o = 1, r = 7, color = '#b9b2a4'}) => {
	if (o <= 0.01) return null;
	const R = rng(seed);
	return <g opacity={o}>{Array.from({length: n}, (_, i) => <circle key={i} cx={x + R() * w} cy={y + R() * h} r={r} fill={color} stroke="#fffdf8" strokeWidth={1.5} />)}</g>;
};
export const useF = () => useCurrentFrame();
void CTag; void GTag; void MistakeChip; void Pl; void PlateB; void Tank; void WText; void fitW; void lerp; void PLATES;
