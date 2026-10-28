// M7 P01 (Biology practical: epidemic transmission simulation) drawing parts: the constant board (question, seven-step
// rail, bench), the cup row (eight aligned cup plates under letter chips, each crossfading clear to pink in place),
// pour arcs, falling drops, the contact sheet (a coded grid on the clipboard's paper), the well plate with a row wipe
// to the aligned pink plate and well positions for arrows and rings, and small card rows. M7 P02, M6 P01 (Biology) and
// M7 B13 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, Bench, CARD, CTag, DrawPath, EDGE, FONT_DISPLAY, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, Pl, PlateB, RowBox, Sx, TEAL, TERRA, VIOLET, WText, clamp01, fitW,
	lerp, prog, ptOf, pulse, smooth, tw, vis, wrapT,
} from '../bio-m7-p02/parts';
import type {PB} from '../bio-m7-p02/parts';
import {MistakeChip} from '../bio-m5-b06b/shared';
import {FEAT, PLATES} from './assets';
import {FONT_HAND, rng} from '../../kit';

export {
	AMBER, AMBER_INK, Bench, CARD, CTag, DrawPath, EDGE, FONT_DISPLAY, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, Pl, PlateB, RowBox, Sx, TEAL, TERRA, VIOLET, WText, clamp01, fitW,
	lerp, prog, ptOf, pulse, smooth, tw, vis, wrapT, MistakeChip, FEAT, PLATES, rng,
};
export type {PB};
export type Pt = [number, number];
export const PINK = '#d9529a';
export const QUESTION = 'Who started it?';
export const STEPS = ['1 the model', '2 the marker', '3 method and controls', '4 test and trace', '5 the curve', '6 limits', '7 stay safe'];
export const RZ = {x: 1290, w: 570};
export const LET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
/** Worked dataset: partner of each student (A to H) in rounds 1 to 3; secret starter D. */
export const PAIRS: number[][] = [[1, 0, 3, 2, 5, 4, 7, 6], [2, 4, 0, 6, 1, 7, 3, 5], [7, 3, 5, 1, 6, 2, 4, 0]];
/** Pink after each time point: start, after rounds 1, 2, 3. */
export const PINKS: number[][] = [[3], [2, 3], [0, 2, 3, 6], [0, 1, 2, 3, 4, 5, 6, 7]];

/** The method step rail (as bio-m7-p02), with this practical's steps. */
export const Rail: React.FC<{lit: number; at?: number; o?: number}> = ({lit, at = 0, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let x = 96;
	return (
		<g opacity={o * prog(f, Math.min(at, 0), 10)}>
			{STEPS.map((s, i) => {
				const w = tw(s, 22) + 36;
				const x0 = x;
				x += w + 10;
				const on = i === lit ? prog(f, at, 12) : 0;
				const done = i < lit;
				return (
					<g key={s}>
						<rect x={x0} y={180} width={w} height={42} rx={21} fill={on > 0.5 ? AMBER : CARD} stroke={on > 0.5 ? AMBER_INK : done ? INK_SOFT : EDGE} strokeWidth={on > 0.5 ? 3 : 2} />
						<text x={x0 + w / 2} y={208} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={on > 0.5 ? INK : done ? INK_SOFT : GREYT}>{s}</text>
					</g>
				);
			})}
		</g>
	);
};

// ---------- cups ----------
/** One cup: the clear plate with the aligned pink plate crossfading over it by `pink` (0..1). */
export const Cup: React.FC<{cx: number; cy: number; w: number; pink?: number; o?: number; outline?: number; dim?: number; ring?: number; id?: string}> = ({cx, cy, w, pink = 0, o = 1, outline = 0, dim = 0, ring = 0}) => {
	if (o <= 0.01) return null;
	const h = (w * 1499) / 1338;
	const pk = clamp01(pink), d = clamp01(dim);
	return (
		<g opacity={o * (1 - 0.5 * d)}>
			{outline > 0.01 ? <rect x={cx - w * 0.58} y={cy - h * 0.58} width={w * 1.16} height={h * 1.16} rx={18} fill="none" stroke={TEAL} strokeWidth={5} opacity={outline} /> : null}
			{ring > 0.01 ? <circle cx={cx} cy={cy} r={w * 0.72} fill="none" stroke={GREYT} strokeWidth={6} opacity={ring} /> : null}
			<PlateB p={PLATES.cupC} cx={cx} cy={cy} w={w} o={1 - pk * 0.999} />
			{pk > 0.001 ? <PlateB p={PLATES.cupP} cx={cx} cy={cy} w={w} o={pk} /> : null}
		</g>
	);
};
export const cupH = (w: number) => (w * 1499) / 1338;
/** A letter chip above a cup. */
export const LetterChip: React.FC<{x: number; y: number; t: string; at?: number; o?: number; lit?: number; size?: number}> = ({x, y, t, at = -100, o = 1, lit = 0, size = 28}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 10) * o;
	if (p <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={p}>
			<circle cx={x} cy={y} r={size * 0.8} fill={on ? '#fff3d9' : '#eceeef'} stroke={on ? AMBER : GREYT} strokeWidth={2.5} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size}} fill={on ? AMBER_INK : GREY_INK}>{t}</text>
		</g>
	);
};
export type RowG = {x0: number; dx: number; y: number; w: number};
export const ROW: RowG = {x0: 150, dx: 140, y: 560, w: 108};
export const cupX = (g: RowG, i: number) => g.x0 + i * g.dx;
/** The cup row with letter chips; `pink(i)`, `outline(i)`, `o(i)` per cup. */
export const CupRow: React.FC<{g?: RowG; at?: number; pink?: (i: number) => number; outline?: (i: number) => number; o?: (i: number) => number; dx?: (i: number) => number; lit?: (i: number) => number; letters?: boolean}> = ({g = ROW, at = -100, pink = () => 0, outline = () => 0, o = () => 1, dx = () => 0, lit = () => 0, letters = true}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{LET.map((t, i) => {
				const a = prog(f, at + i * 4, 12) * o(i);
				if (a <= 0.01) return null;
				const x = cupX(g, i) + dx(i);
				return (
					<g key={t} opacity={a}>
						<Cup cx={x} cy={g.y} w={g.w} pink={pink(i)} outline={outline(i)} />
						{letters ? <LetterChip x={x} y={g.y - cupH(g.w) / 2 - 34} t={t} lit={lit(i)} size={g.w > 90 ? 26 : 20} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** A liquid arc from a to b (a coded pour), drawn on between at and at + dur, then fading. */
export const PourArc: React.FC<{a: Pt; b: Pt; at: number; dur?: number; color?: string; width?: number; hold?: number; bow?: number; o?: number}> = ({a, b, at, dur = 16, color = '#8fb7d6', width = 7, hold = 14, bow = -70, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || f > at + dur + hold + 12 || o <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = Math.min(a[1], b[1]) + bow;
	return (
		<g opacity={o * (1 - prog(f, at + dur + hold, 10))}>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={dur} color={color} width={width} />
		</g>
	);
};
/** A small drop falling from a to b (indicator or base), gone after landing. */
export const FallDrop: React.FC<{a: Pt; b: Pt; at: number; dur?: number; color?: string; r?: number}> = ({a, b, at, dur = 14, color = '#cfe2ee', r = 9}) => {
	const f = useCurrentFrame();
	if (f < at || f > at + dur + 4) return null;
	const u = smooth(clamp01((f - at) / dur));
	const x = lerp(a[0], b[0], u), y = lerp(a[1], b[1], u * u);
	return <path d={`M${x},${y - r * 1.6} C${x + r * 0.6},${y - r * 0.5} ${x + r},${y} ${x},${y + r} C${x - r},${y} ${x - r * 0.6},${y - r * 0.5} ${x},${y - r * 1.6} Z`} fill={color} stroke="#6f93ad" strokeWidth={2} />;
};
/** The dropper bottle with a coded "indicator" chip on its label. */
export const Dropper: React.FC<{cx: number; cy: number; h: number; o?: number; label?: boolean}> = ({cx, cy, h, o = 1, label = true}) => {
	if (o <= 0.01) return null;
	const w = fitW(PLATES.dropper, 400, h);
	return (
		<g opacity={o}>
			<Pl p={PLATES.dropper} cx={cx} cy={cy} w={w} />
			{label ? <Sx x={cx} y={cy + h * 0.2} text="indicator" size={Math.max(14, h * 0.075)} color={PINK} hand weight={700} anchor="middle" at={-100} /> : null}
		</g>
	);
};
export const dropTip = (cx: number, cy: number, h: number): Pt => ptOf(PLATES.dropper, cx, cy, fitW(PLATES.dropper, 400, h), FEAT.tip);

// ---------- the contact sheet ----------
export type SheetG = {cx: number; cy: number; w: number};
/** The clipboard with a coded grid on its paper: rows A to H, columns rounds 1 to 3; column r fills at `colAt[r]`. */
export const ContactSheet: React.FC<{g: SheetG; at?: number; colAt?: number[]; light?: Record<string, number>; o?: number}> = ({g, at = -100, colAt = [-100, -100, -100], light = {}, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	// The painted sheet is tilted about 6.8 degrees clockwise: the coded paper sits on it at the same tilt.
	const k = g.w / (PLATES.clip.box[2] - PLATES.clip.box[0]);
	const [pcx, pcy] = ptOf(PLATES.clip, g.cx, g.cy, g.w, FEAT.sheetC);
	const W = FEAT.sheetWH[0] * k, H = FEAT.sheetWH[1] * k;
	const sx0 = pcx - W / 2, sy0 = pcy - H / 2, sx1 = pcx + W / 2, sy1 = pcy + H / 2;
	const cw0 = W * 0.22, cw = (W - cw0) / 3, rh = H / 9;
	const fs = Math.min(rh * 0.62, cw * 0.32);
	return (
		<g opacity={p}>
			<Pl p={PLATES.clip} cx={g.cx} cy={g.cy} w={g.w} />
			<g transform={`rotate(6.8 ${pcx} ${pcy})`}>
			<rect x={sx0} y={sy0} width={W} height={H} fill="#fffef9" stroke="#d9d2c2" strokeWidth={1.5} />
			{Array.from({length: 10}, (_, i) => <line key={'h' + i} x1={sx0} x2={sx1} y1={sy0 + i * rh} y2={sy0 + i * rh} stroke="#d9d2c2" strokeWidth={1.5} />)}
			{[0, 1, 2, 3].map(i => <line key={'v' + i} x1={sx0 + cw0 + i * cw} x2={sx0 + cw0 + i * cw} y1={sy0} y2={sy1} stroke="#d9d2c2" strokeWidth={1.5} />)}
			{['round 1', 'round 2', 'round 3'].map((t, i) => <text key={t} x={sx0 + cw0 + (i + 0.5) * cw} y={sy0 + rh * 0.68} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs * 0.72}} fill={GREY_INK}>{t}</text>)}
			{LET.map((t, r) => <text key={t} x={sx0 + cw0 / 2} y={sy0 + (r + 1.68) * rh} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs}} fill={INK}>{t}</text>)}
			{[0, 1, 2].map(c => LET.map((t, r) => {
				const a = prog(f, colAt[c] + r * 4, 8);
				if (a <= 0.01) return null;
				const key = `${t}${c + 1}`;
				const l = light[key] !== undefined ? prog(f, light[key], 10) : 0;
				const x = sx0 + cw0 + c * cw, y = sy0 + (r + 1) * rh;
				return (
					<g key={key} opacity={a}>
						{l > 0.01 ? <rect x={x + 2} y={y + 2} width={cw - 4} height={rh - 4} fill="#ffe3a8" opacity={l} /> : null}
						<text x={x + cw / 2} y={y + rh * 0.68} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: fs * 1.15}} fill={l > 0.5 ? AMBER_INK : '#3a4f7a'}>{LET[PAIRS[c][r]]}</text>
					</g>
				);
			}))}
			</g>
		</g>
	);
};

// ---------- the well plate ----------
export type WellG = {cx: number; cy: number; w: number};
export const wellPt = (g: WellG, col: number, row: number): Pt => ptOf(PLATES.wellC, g.cx, g.cy, g.w, [FEAT.wellX[col], FEAT.wellY[row]]);
export const wellR = (g: WellG) => FEAT.wellR * g.w / (PLATES.wellC.box[2] - PLATES.wellC.box[0]);
/** The clear well plate; row k of the aligned pink plate is revealed by a left-to-right wipe from `rowAt[k]`. */
export const WellPlate: React.FC<{g: WellG; id: string; at?: number; rowAt?: number[]; dimRow?: number[]; o?: number; labels?: boolean; letters?: boolean; size?: number}> = ({g, id, at = -100, rowAt = [1e9, 1e9, 1e9, 1e9], dimRow = [0, 0, 0, 0], o = 1, labels = true, letters = true, size = 22}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * o;
	if (p <= 0.01) return null;
	const k = g.w / (PLATES.wellC.box[2] - PLATES.wellC.box[0]);
	const h = (PLATES.wellC.box[3] - PLATES.wellC.box[1]) * k;
	const x0 = g.cx - g.w / 2;
	const band = 100 * k;
	const NAMES = ['start', 'after round 1', 'after round 2', 'after round 3'];
	return (
		<g opacity={p}>
			<defs>
				<clipPath id={`${id}-wipe`}>
					{rowAt.map((a, r) => {
						const u = smooth(prog(f, a, 22, (t: number) => t));
						if (u <= 0) return null;
						const y = wellPt(g, 0, r)[1];
						return <rect key={r} x={x0} y={y - band} width={g.w * u} height={band * 2} />;
					})}
				</clipPath>
			</defs>
			<PlateB p={PLATES.wellC} cx={g.cx} cy={g.cy} w={g.w} />
			<g clipPath={`url(#${id}-wipe)`}><PlateB p={PLATES.wellP} cx={g.cx} cy={g.cy} w={g.w} /></g>
			{dimRow.map((d, r) => (d > 0.01 ? <rect key={'d' + r} x={x0 + 4} y={wellPt(g, 0, r)[1] - band} width={g.w - 8} height={band * 2} fill="#efece6" opacity={0.7 * clamp01(d)} /> : null))}
			{labels ? NAMES.map((t, r) => <Sx key={t} x={x0 - 12} y={wellPt(g, 0, r)[1] + size * 0.35} text={t} size={size} color={GREY_INK} weight={600} anchor="end" at={-100} />) : null}
			{letters ? LET.map((t, c) => <Sx key={t} x={wellPt(g, c, 0)[0]} y={g.cy - h / 2 - 12} text={t} size={size + 4} color={GREY_INK} weight={800} anchor="middle" at={-100} />) : null}
		</g>
	);
};
/** An arrow between two wells (partner to new case). */
export const WellArrow: React.FC<{a: Pt; b: Pt; at: number; color?: string; bow?: number; o?: number}> = ({a, b, at, color = AMBER_INK, bow = -40, o = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 + bow;
	const ang = Math.atan2(b[1] - my, b[0] - mx), hd = 14;
	return (
		<g opacity={o}>
			<DrawPath d={`M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`} at={at} dur={14} color={color} width={5} />
			<path d={`M${b[0] - hd * Math.cos(ang - 0.5)},${b[1] - hd * Math.sin(ang - 0.5)} L${b[0]},${b[1]} L${b[0] - hd * Math.cos(ang + 0.5)},${b[1] - hd * Math.sin(ang + 0.5)}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" opacity={prog(f, at + 10, 6)} />
		</g>
	);
};

// ---------- text rows ----------
/** A card row with wrapped hand text; bright while lit. Height from the text. */
export const TRow: React.FC<{x: number; y: number; w: number; text: string; at: number; lit: number; color?: string; size?: number}> = ({x, y, w, text, at, lit, color = AMBER_INK, size = 30}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const on = lit > 0.5;
	return (
		<g opacity={o * (on ? 1 : 0.7)}>
			<rect x={x} y={y} width={w} height={tRowH(text, size, w)} rx={18} fill={on ? '#fffaf0' : CARD} stroke={on ? color : EDGE} strokeWidth={on ? 3.5 : 2.5} />
			<WText x={x + 24} y={y + size + 14} text={text} size={size} maxW={w - 48} color={on ? (color === AMBER_INK ? INK : color) : GREY_INK} hand weight={700} at={-100} />
		</g>
	);
};
export const tRowH = (text: string, size: number, w: number) => wrapT(text, size, w - 48, true).length * Math.round(size * 1.28) + 24;
export const useF = () => useCurrentFrame();
void CTag; void GTag; void GREEN; void RowBox; void TERRA; void VIOLET; void pulse; void vis; void MistakeChip; void PINK;
