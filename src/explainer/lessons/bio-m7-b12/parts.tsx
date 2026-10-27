// M7 B12 drawing parts: the mosquito life cycle wheel (four stations round a circle with the painted bucket, larva,
// pupa and adult plates, clockwise arrows, an adult "bites" arrow and b03's break marks at the stage a method attacks),
// a population row of tiny painted mosquito plates (alive, amber resistance ring, teal Wolbachia dot), an egg row (dark
// unhatched dots, pale hatched eggs with a tiny larva), and rain lines. B11, B10 (M7) and bio-m6-b11 parts are
// imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, AnsFill, Bact, BreakMark, CARD, CTag, CardBox, CritTable, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, StepChip, Sx, TEAL,
	TEAL_SOFT, TERRA, TickMark, WText, clamp01, fitW, lerp, pp, prog, pulse, rng, smooth, tw, vis, wOfH,
} from '../bio-m7-b11/parts';
import type {PB, Pt, TRow} from '../bio-m7-b11/parts';
import {Homolog} from '../bio-m6-b11/parts';
import {PLATES} from './assets';

export {
	AMBER, AMBER_INK, AnsFill, Bact, BreakMark, CARD, CTag, CardBox, CritTable, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, Ring, StepChip, Sx, TEAL,
	TEAL_SOFT, TERRA, TickMark, WText, clamp01, fitW, lerp, pp, prog, pulse, rng, smooth, tw, vis, wOfH, Homolog,
};
export type {PB, Pt, TRow};
export const HEAD = 'How can vector control reduce infection?';

// ---------- the life cycle wheel ----------
export type WG = {cx: number; cy: number; R: number; ps: number};
export const ANG = [-90, 0, 90, 180];
export const wPt = (g: WG, deg: number, r = g.R): Pt => [g.cx + r * Math.cos((deg * Math.PI) / 180), g.cy + r * Math.sin((deg * Math.PI) / 180)];
export const ST_LABEL = ['eggs on a container wall', 'larvae in water', 'pupae', 'adult female bites'];
/** Angle (degrees) between station i and the next. */
export const between = (i: number) => ANG[i] + 45;
export type WBreak = {deg: number; at: number; color?: string; r?: number; out?: number};
export const Wheel: React.FC<{g: WG; at?: number; o?: number; flood?: number; lit?: number[]; dim?: number[]; breaks?: WBreak[]; bite?: {o?: number; grey?: number; dash?: boolean}; labelSize?: number; adultDot?: number; plateAt?: number[]}> = ({g, at = -100, o = 1, flood = 0, lit = [], dim = [], breaks = [], bite, labelSize = 24, adultDot = 0, plateAt = [-100, -100, -100, -100]}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * o;
	if (p <= 0.01) return null;
	const plates: PB[] = [PLATES.dry, PLATES.larva, PLATES.pupa, PLATES.aedes];
	return (
		<g opacity={p}>
			<circle cx={g.cx} cy={g.cy} r={g.R} fill="none" stroke="#e3dccd" strokeWidth={2} />
			{ANG.map((a, i) => {
				const a0 = ((a + 24) * Math.PI) / 180, a1 = ((a + 66) * Math.PI) / 180;
				const P0: Pt = [g.cx + g.R * Math.cos(a0), g.cy + g.R * Math.sin(a0)], P1: Pt = [g.cx + g.R * Math.cos(a1), g.cy + g.R * Math.sin(a1)];
				const hd = a1 + Math.PI / 2;
				return (
					<g key={'a' + i} opacity={prog(f, at + 10 + i * 6, 10)}>
						<path d={`M${P0[0]},${P0[1]} A${g.R},${g.R} 0 0 1 ${P1[0]},${P1[1]}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} />
						<path d={`M${P1[0] - 12 * Math.cos(hd - 0.5)},${P1[1] - 12 * Math.sin(hd - 0.5)} L${P1[0]},${P1[1]} L${P1[0] - 12 * Math.cos(hd + 0.5)},${P1[1] - 12 * Math.sin(hd + 0.5)}`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeLinecap="round" />
					</g>
				);
			})}
			{ANG.map((a, i) => {
				const [x, y] = wPt(g, a);
				const po = prog(f, plateAt[i], 14);
				const d = clamp01(dim[i] ?? 0);
				const l = clamp01(lit[i] ?? 0);
				const pl = plates[i];
				const w = fitW(pl, g.ps, g.ps * 0.85);
				const ly = i === 0 ? y - g.ps * 0.5 - 10 : y + g.ps * 0.5 + labelSize + 4;
				return (
					<g key={'s' + i} opacity={(1 - 0.55 * d)}>
						{l > 0.01 ? <circle cx={x} cy={y} r={g.ps * 0.62} fill={AMBER} opacity={0.18 * l} /> : null}
						<circle cx={x} cy={y} r={g.ps * 0.6} fill={CARD} stroke={l > 0.5 ? AMBER : EDGE} strokeWidth={l > 0.5 ? 3.5 : 2.5} />
						{i === 0 ? (
							<g opacity={po}>
								<PlateB p={PLATES.dry} cx={x} cy={y} w={w} o={1 - clamp01(flood)} filter={d > 0.5 ? 'grayscale(0.8)' : undefined} />
								<PlateB p={PLATES.flooded} cx={x} cy={y} w={w} o={clamp01(flood)} filter={d > 0.5 ? 'grayscale(0.8)' : undefined} />
							</g>
						) : <PlateB p={pl} cx={x} cy={y} w={w} o={po} id={`wh-${i}-${pl.box.join('-')}`} filter={d > 0.5 ? 'grayscale(0.8)' : undefined} />}
						{i === 3 && adultDot > 0.01 ? <circle cx={x + w * 0.05} cy={y + w * 0.05} r={Math.max(6, g.ps * 0.06)} fill={TEAL} stroke="#1f5a60" strokeWidth={2} opacity={adultDot} /> : null}
						<Sx x={x} y={ly} text={ST_LABEL[i]} size={labelSize} color={l > 0.5 ? AMBER_INK : GREY_INK} hand weight={700} anchor="middle" at={-100} opacity={po} />
					</g>
				);
			})}
			{bite && (bite.o ?? 1) > 0.01 ? (() => {
				const [x, y] = wPt(g, 180);
				const x0 = x - g.ps * 0.62, x1 = x0 - g.ps * 0.8;
				const col = clamp01(bite.grey ?? 0) > 0.5 ? GREYT : AMBER;
				return (
					<g opacity={bite.o ?? 1}>
						<line x1={x0} y1={y - 10} x2={x1} y2={y - 10} stroke={col} strokeWidth={4} strokeDasharray={bite.dash ? '8 7' : undefined} />
						<path d={`M${x1 + 12},${y - 20} L${x1},${y - 10} L${x1 + 12},${y}`} fill="none" stroke={col} strokeWidth={4} />
						<Sx x={(x0 + x1) / 2} y={y - 22} text="bites" size={labelSize * 0.9} color={col === AMBER ? AMBER_INK : GREY_INK} hand weight={700} anchor="middle" at={-100} />
					</g>
				);
			})() : null}
			{breaks.map((b, k) => {
				const pt = b.deg === 180.5 ? [wPt(g, 180)[0] - g.ps * 1.0, wPt(g, 180)[1] - 10] as Pt : wPt(g, b.deg, b.r ?? g.R);
				return <BreakMark key={k} x={pt[0]} y={pt[1]} h={g.ps * 0.6} at={b.at} out={b.out} color={b.color ?? TERRA} />;
			})}
		</g>
	);
};
/** Break on the bite arrow (pass as `deg`). */
export const BITE = 180.5;

// ---------- population and egg rows ----------
export const PopRow: React.FC<{x: number; y: number; n: number; dx?: number; w?: number; p?: PB; alive?: (i: number) => number; ring?: (i: number) => number; teal?: (i: number) => number; o?: number; grey?: (i: number) => number}> = ({x, y, n, dx = 56, w = 50, p = PLATES.aedes, alive = () => 1, ring = () => 0, teal = () => 0, o = 1, grey = () => 0}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const a = clamp01(alive(i));
				if (a <= 0.01) return <circle key={i} cx={x + i * dx} cy={y} r={w * 0.3} fill="none" stroke={GREYT} strokeWidth={2} strokeDasharray="4 4" opacity={0.6} />;
				const r = clamp01(ring(i)), t = clamp01(teal(i)), g = clamp01(grey(i));
				return (
					<g key={i} opacity={a}>
						{r > 0.01 ? <circle cx={x + i * dx} cy={y} r={w * 0.55} fill="none" stroke={AMBER} strokeWidth={3.5} opacity={r} /> : null}
						<PlateB p={p} cx={x + i * dx} cy={y} w={w} filter={g > 0.01 ? `grayscale(${g})` : undefined} />
						{t > 0.01 ? <circle cx={x + i * dx + w * 0.06} cy={y + w * 0.06} r={Math.max(4.5, w * 0.1)} fill={TEAL} stroke="#1f5a60" strokeWidth={1.5} opacity={t} /> : null}
					</g>
				);
			})}
		</g>
	);
};
export const EggRow: React.FC<{x: number; y: number; n: number; dx?: number; hatch?: (i: number) => number; teal?: (i: number) => number; o?: number; s?: number}> = ({x, y, n, dx = 46, hatch = () => 0, teal = () => 0, o = 1, s = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const h = clamp01(hatch(i)), t = clamp01(teal(i));
				const cx = x + i * dx;
				return (
					<g key={i}>
						<ellipse cx={cx} cy={y} rx={9 * s} ry={15 * s} fill="#2e2a26" opacity={1 - h} />
						{h > 0.01 ? <ellipse cx={cx} cy={y} rx={9 * s} ry={15 * s} fill="#f4efe4" stroke={INK_SOFT} strokeWidth={2} opacity={h} /> : null}
						{h > 0.01 ? <PlateB p={PLATES.larva} cx={cx} cy={y + 30 * s} w={38 * s} o={h} id={`egg-l-${i}-${x}`} /> : null}
						{t > 0.01 ? <circle cx={cx} cy={y} r={4.5 * s} fill={TEAL} opacity={t} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Falling rain lines over a box. */
export const Rain: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number}> = ({x, y, w, h, at, out}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 10);
	if (o <= 0.01) return null;
	const r = rng(13);
	return (
		<g opacity={o}>
			{Array.from({length: 18}, (_, i) => {
				const xx = x + r() * w, ph = ((f - at) / 20 + r()) % 1;
				const yy = y + ph * h;
				return <line key={i} x1={xx} y1={yy} x2={xx - 6} y2={yy + 26} stroke="#4f86b8" strokeWidth={3} strokeLinecap="round" opacity={0.7} />;
			})}
		</g>
	);
};
export const useF = () => useCurrentFrame();
void AnsFill; void Bact; void CTag; void CardBox; void CritTable; void DrawPath; void GTag; void INK; void MistakeChip; void Pl; void PlainArrow; void Ring; void StepChip; void TEAL_SOFT; void TickMark; void WText; void lerp; void pp; void pulse; void smooth; void tw; void wOfH; void Homolog;
