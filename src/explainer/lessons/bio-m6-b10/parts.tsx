// M6 B10 drawing parts: the judging board (a case panel at the left; "benefit" and "harm or risk" columns, plus "the
// animal's welfare" for animal cases; a "who" row of coded stakeholder icons along the bottom, with join lines from
// each chip to the groups it reaches), the refuge field's caterpillar glyphs (open = susceptible, filled =
// resistant; shape, not colour, carries the meaning), a coin, a magnifier, embryo circles and the question bins.
// B09's plate helpers, strips and the bacterium with its amber plasmid arc are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {Sx} from '../bio-m5-b13/shared';
import {BIO_INK, CARD, EDGE, GREYT, GREY_INK, SlimStrand, clamp01, lerp, rungX, smooth, vis} from '../bio-m6-b01/parts';
import {BactIns, Pl, Strip, plH} from '../bio-m6-b09/parts';
import {platePt} from '../bio-m6-b07/parts';
import {BUDS, PLATES} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, BIO_INK, CARD, EDGE, GREYT, GREY_INK, SlimStrand, clamp01, lerp, rungX, smooth, vis, prog, DrawPath, BactIns, Pl, Strip, plH, PLATES};
export const GREEN = '#2f8a5b', RED = '#b5483a';

// ---------- board geometry ----------
export const PANEL = {x: 100, y: 215, w: 620, h: 775};
export type Cols = {x: number; w: number}[];
/** Two columns (benefit, harm or risk), or three with the animal's welfare; `t` 0..1 morphs between them. */
export const colsAt = (t: number): Cols => {
	const k = smooth(t);
	return [
		{x: 760, w: lerp(510, 340, k)},
		{x: lerp(1310, 1120, k), w: lerp(510, 340, k)},
		{x: lerp(1820, 1480, k), w: 340},
	];
};
export const ROWY = [310, 425, 525];
export const WHO_Y = 880;
export const slotX = (k: number) => 930 + k * 160;
export const HEADS = ['benefit', 'harm or risk', "the animal's welfare"];

/** Case panel (a plain card), column heads with an underline, and the "who" label. */
export const BoardFrame: React.FC<{cols: Cols; heads?: number[]; headDim?: number; welfare?: number; panel?: number; who?: number; whoAt?: number}> = ({cols, heads = [1, 1, 0], headDim = 0, welfare = 0, panel = 1, who = 1}) => (
	<g>
		{panel > 0.01 ? <rect x={PANEL.x} y={PANEL.y} width={PANEL.w} height={PANEL.h} rx={24} fill={CARD} stroke={EDGE} strokeWidth={2.5} opacity={panel} /> : null}
		{cols.map((c, i) => {
			const o = (i === 2 ? welfare : heads[i]) * (1 - 0.65 * headDim);
			if (o <= 0.01) return null;
			return (
				<g key={i} opacity={o}>
					<Sx x={c.x + 6} y={264} text={HEADS[i]} size={i === 2 ? 34 : 40} color={i === 2 ? BIO_INK : INK} weight={800} />
					<line x1={c.x} y1={282} x2={c.x + c.w - 20} y2={282} stroke={i === 2 ? BIO_INK : INK_SOFT} strokeWidth={3} />
				</g>
			);
		})}
		{who > 0.01 ? <Sx x={760} y={WHO_Y + 14} text="who" size={44} color={INK} weight={800} opacity={who * (1 - 0.65 * headDim)} /> : null}
	</g>
);

// ---------- chips ----------
export type ChipKind = 'benefit' | 'harm';
/** A board chip in a column: one or two lines; `lit` 1 bright, 0 grey. Benefit chips carry a green stripe and a plus,
 * harm chips a red stripe and a minus. `dash` marks an objection that is not about outcomes. */
export const JChip: React.FC<{col: {x: number; w: number}; y: number; lines: string[]; kind: ChipKind; o?: number; lit?: number; blank?: boolean; dash?: boolean; size?: number}> = ({col, y, lines, kind, o = 1, lit = 1, blank = false, dash = false, size = 30}) => {
	if (o <= 0.01) return null;
	const l = clamp01(lit);
	const w = col.w - 20, h = 24 + Math.max(1, lines.length) * size * 1.15;
	const c = kind === 'benefit' ? GREEN : RED;
	return (
		<g opacity={o}>
			<rect x={col.x} y={y} width={w} height={h} rx={16} fill={blank ? 'none' : l > 0.5 ? '#fff6e3' : CARD} stroke={l > 0.5 ? AMBER : EDGE} strokeWidth={l > 0.5 ? 3.5 : 2.5} strokeDasharray={blank || dash ? '10 8' : undefined} />
			{blank || dash ? null : <rect x={col.x + 3} y={y + 3} width={10} height={h - 6} rx={5} fill={c} opacity={l > 0.5 ? 0.9 : 0.45} />}
			{blank || dash ? null : <Sx x={col.x + 30} y={y + 12 + size * 0.88} text={kind === 'benefit' ? '+' : '−'} size={size} color={c} weight={800} opacity={l > 0.5 ? 1 : 0.55} />}
			{lines.map((t, k) => <Sx key={k} x={col.x + (blank || dash ? 22 : 58)} y={y + 12 + size * 0.88 + k * size * 1.15} text={t} size={size} color={l > 0.5 ? INK : GREY_INK} hand />)}
		</g>
	);
};
/** Bottom-centre anchor of a chip (for join lines). */
export const chipAnchor = (col: {x: number; w: number}, y: number, lines = 1, size = 30): [number, number] => [col.x + (col.w - 20) / 2, y + 24 + lines * size * 1.15];
/** A join line from a chip to a stakeholder icon, drawn on at `at`. */
export const Join: React.FC<{a: [number, number]; b: [number, number]; at: number; o?: number; lit?: number}> = ({a, b, at, o = 1, lit = 1}) => {
	const f = useCurrentFrame();
	if (f < at || o <= 0.01) return null;
	const my = (a[1] + b[1]) / 2;
	const l = clamp01(lit);
	return (
		<g opacity={o * (0.22 + 0.78 * l)}>
			<DrawPath d={`M${a[0]},${a[1]} C${a[0]},${my} ${b[0]},${my} ${b[0]},${b[1]}`} at={at} dur={16} color={l > 0.5 ? AMBER : GREYT} width={l > 0.5 ? 4 : 3} />
		</g>
	);
};

// ---------- stakeholder icons (coded outlines) ----------
export type WhoK = 'tractor' | 'spray' | 'house' | 'bee' | 'building' | 'field' | 'calf';
const icon = (k: WhoK, c: string) => {
	const sw = 3.5;
	switch (k) {
		case 'tractor': return (
			<g fill="none" stroke={c} strokeWidth={sw} strokeLinejoin="round">
				<path d="M-30,6 L-30,-8 L2,-8 L6,-26 L22,-26 L24,6 Z" fill="#f1ede4" />
				<line x1={-24} y1={-8} x2={-24} y2={-20} />
				<circle cx={14} cy={12} r={14} fill="#f1ede4" /><circle cx={14} cy={12} r={4} />
				<circle cx={-22} cy={16} r={9} fill="#f1ede4" />
			</g>
		);
		case 'spray': return (
			<g fill="none" stroke={c} strokeWidth={sw} strokeLinejoin="round">
				<rect x={-14} y={-14} width={28} height={42} rx={6} fill="#f1ede4" />
				<rect x={-7} y={-24} width={14} height={10} />
				<line x1={7} y1={-20} x2={16} y2={-20} />
				{[[24, -28], [28, -20], [24, -12], [32, -26], [32, -14]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={1.8} fill={c} stroke="none" />)}
			</g>
		);
		case 'house': return (
			<g fill="none" stroke={c} strokeWidth={sw} strokeLinejoin="round">
				<path d="M-26,-2 L0,-26 L26,-2 L20,-2 L20,26 L-20,26 L-20,-2 Z" fill="#f1ede4" />
				<rect x={-6} y={8} width={12} height={18} />
			</g>
		);
		case 'bee': return (
			<g fill="none" stroke={c} strokeWidth={sw}>
				<ellipse cx={-6} cy={-16} rx={10} ry={14} transform="rotate(-25 -6 -16)" fill="#ffffff" />
				<ellipse cx={8} cy={-16} rx={10} ry={14} transform="rotate(25 8 -16)" fill="#ffffff" />
				<ellipse cx={0} cy={6} rx={22} ry={14} fill="#f6d77a" />
				<line x1={-6} y1={-7} x2={-6} y2={19} /><line x1={6} y1={-7} x2={6} y2={19} />
				<circle cx={-26} cy={4} r={5} fill={c} />
			</g>
		);
		case 'building': return (
			<g fill="none" stroke={c} strokeWidth={sw} strokeLinejoin="round">
				<rect x={-22} y={-28} width={44} height={56} fill="#f1ede4" />
				{[-12, 0, 12].map(x => [-18, -6, 6].map(y => <rect key={`${x}${y}`} x={x - 3.5} y={y - 3.5} width={7} height={7} />))}
				<rect x={-5} y={16} width={10} height={12} />
			</g>
		);
		case 'field': return (
			<g fill="none" stroke={c} strokeWidth={sw} strokeLinejoin="round">
				<path d="M-32,20 L-20,-14 L20,-14 L32,20 Z" fill="#eef3e2" />
				{[-12, 0, 12].map(x => <line key={x} x1={x * 0.7} y1={-12} x2={x * 1.5} y2={18} stroke={GREEN} strokeWidth={3} />)}
			</g>
		);
		default: return null;
	}
};
export const WHO: Record<string, {k: WhoK; label: string[]}> = {
	growers: {k: 'tractor', label: ['growers']},
	workers: {k: 'spray', label: ['farm', 'workers']},
	workersT: {k: 'tractor', label: ['farm', 'workers']},
	community: {k: 'house', label: ['nearby', 'communities']},
	insects: {k: 'bee', label: ['beneficial', 'insects']},
	company: {k: 'building', label: ['seed', 'company']},
	ecosystem: {k: 'field', label: ['farm', 'ecosystem']},
	calves: {k: 'calf', label: ['calves']},
	regulators: {k: 'building', label: ['regulators']},
};
/** One stakeholder icon with its small grey label; `lit` brightens the outline. */
export const WhoIcon: React.FC<{name: keyof typeof WHO; x: number; y?: number; o?: number; lit?: number}> = ({name, x, y = WHO_Y, o = 1, lit = 0}) => {
	if (o <= 0.01) return null;
	const d = WHO[name];
	const l = clamp01(lit);
	return (
		<g opacity={o}>
			{l > 0.01 ? <circle cx={x} cy={y} r={44} fill={AMBER} opacity={0.18 * l} /> : null}
			{d.k === 'calf' ? <Pl p={PLATES.calf} cx={x} cy={y} w={78} /> : <g transform={`translate(${x},${y}) scale(1.05)`}>{icon(d.k, l > 0.5 ? INK : GREY_INK)}</g>}
			{d.label.map((t, i) => <Sx key={i} x={x} y={y + 64 + i * 26} text={t} size={24} color={GREY_INK} hand anchor="middle" />)}
		</g>
	);
};
/** Top-centre anchor of an icon (join lines end here). */
export const whoTop = (x: number): [number, number] => [x, WHO_Y - 40];

// ---------- caterpillar glyphs ----------
/** Open (susceptible) or filled (resistant) caterpillar glyph; `dead` greys and flattens it. */
export const CatG: React.FC<{x: number; y: number; res: boolean; o?: number; dead?: number; s?: number}> = ({x, y, res, o = 1, dead = 0, s = 1}) => {
	if (o <= 0.01) return null;
	const d = clamp01(dead);
	const ink = d > 0.5 ? GREYT : '#4d5a2a';
	return (
		<g opacity={o * (1 - 0.7 * d)} transform={`translate(${x},${y}) scale(${s})`}>
			{[0, 1, 2, 3].map(k => <circle key={k} cx={-15 + k * 10} cy={Math.sin(k * 1.2) * 2.5} r={6.5} fill={res && d < 0.5 ? '#4d5a2a' : '#fbfaf2'} stroke={ink} strokeWidth={2.4} />)}
			<circle cx={25} cy={0} r={5.5} fill={ink} />
		</g>
	);
};

// ---------- small coded pieces ----------
export const Coin: React.FC<{x: number; y: number; o?: number; r?: number}> = ({x, y, o = 1, r = 15}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#f3d27a" stroke={AMBER_INK} strokeWidth={3} />
		<Sx x={x} y={y + r * 0.42} text="$" size={r * 1.2} color={AMBER_INK} weight={800} anchor="middle" />
	</g>
));
export const Magnifier: React.FC<{x: number; y: number; o?: number; r?: number}> = ({x, y, o = 1, r = 40}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="rgba(255,255,255,0.25)" stroke={INK_SOFT} strokeWidth={6} />
		<line x1={x + r * 0.72} y1={y + r * 0.72} x2={x + r * 1.6} y2={y + r * 1.6} stroke={INK_SOFT} strokeWidth={10} strokeLinecap="round" />
	</g>
));
/** A no-entry mark (grey circle with a slash). */
export const StopMark: React.FC<{x: number; y: number; o?: number; r?: number}> = ({x, y, o = 1, r = 26}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="rgba(255,255,255,0.7)" stroke={GREYT} strokeWidth={6} />
		<line x1={x - r * 0.7} y1={y + r * 0.7} x2={x + r * 0.7} y2={y - r * 0.7} stroke={GREYT} strokeWidth={6} strokeLinecap="round" />
	</g>
));
/** The calf plate with a scribble ring on its horn buds drawn by the caller: point between the buds. */
export const budsPt = (cx: number, cy: number, w: number) => platePt(PLATES.calf, cx, cy, w, BUDS[0], BUDS[1]);
/** A slim strip with a cream "hornless allele" band and optional extra coloured rungs. */
export const AlleleStrip: React.FC<{cx: number; y: number; n?: number; pitch?: number; gap?: number; band?: number; bandAt?: number; o?: number; amber?: [number, number]; amberO?: number; grey?: number[]; greyO?: number; draw?: number}> = ({cx, y, n = 14, pitch = 32, gap = 34, band = 1, bandAt = 4, o = 1, amber, amberO = 0, grey = [], greyO = 0, draw = 1}) => {
	if (o <= 0.01) return null;
	const x = cx - (n * pitch) / 2;
	return (
		<g opacity={o}>
			{band > 0.01 ? <rect x={rungX(x, bandAt, pitch) - pitch / 2} y={y - 14} width={pitch} height={gap + 28} rx={8} fill="#fbf1d6" stroke="#c9ad6a" strokeWidth={2.5} opacity={band} /> : null}
			{amber && amberO > 0.01 ? <rect x={rungX(x, amber[0], pitch) - pitch / 2} y={y - 14} width={(amber[1] - amber[0] + 1) * pitch} height={gap + 28} rx={10} fill="#fff3d9" stroke={AMBER} strokeWidth={3} opacity={amberO} /> : null}
			<SlimStrand x={x} y={y} n={n} pitch={pitch} gap={gap} draw={draw} lineW={3.5}
				rung={i => (i === bandAt && band > 0.5 ? {color: '#b8963f', w: 7} : grey.includes(i) && greyO > 0.01 ? {color: '#6b6f74', w: 8, o: 1} : amber && amberO > 0.5 && i >= amber[0] && i <= amber[1] ? {color: AMBER, w: 6} : undefined)} />
		</g>
	);
};
export const stripRung = (cx: number, i: number, n = 14, pitch = 32) => rungX(cx - (n * pitch) / 2, i, pitch);
/** Embryo circles; `lost` k of them grey out after `at`. */
export const Embryos: React.FC<{x: number; y: number; n: number; lostIdx: number[]; o?: number; dead?: number; gap?: number}> = ({x, y, n, lostIdx, o = 1, dead = 0, gap = 38}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{Array.from({length: n}, (_, k) => {
			const d = lostIdx.includes(k) ? dead : 0;
			return (
				<g key={k} opacity={1 - 0.65 * d}>
					<circle cx={x + k * gap} cy={y} r={15} fill={d > 0.5 ? '#eceeef' : '#f7e6dc'} stroke={d > 0.5 ? GREYT : '#b9786a'} strokeWidth={2.5} />
					{[[-4, -3], [4, -3], [-4, 5], [4, 5]].map(([dx, dy], j) => <circle key={j} cx={x + k * gap + dx} cy={y + dy} r={3.6} fill="none" stroke={d > 0.5 ? GREYT : '#b9786a'} strokeWidth={1.5} />)}
				</g>
			);
		})}
	</g>
));
/** A question bin (open-topped box) with its title. */
export const Bin: React.FC<{cx: number; o?: number; title: string; w?: number; y0?: number; y1?: number}> = ({cx, o = 1, title, w = 460, y0 = 480, y1 = 800}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${cx - w / 2},${y0} L${cx - w / 2 + 16},${y1} L${cx + w / 2 - 16},${y1} L${cx + w / 2},${y0}`} fill="#f3eee2" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
		<Sx x={cx} y={y0 - 26} text={title} size={46} color={INK} weight={800} anchor="middle" />
	</g>
));
/** A loose chip (bins, mistake-free notes). */
export const LooseChip: React.FC<{cx: number; y: number; text: string; o?: number; dash?: boolean; size?: number; lit?: number}> = ({cx, y, text, o = 1, dash = false, size = 28, lit = 0}) => {
	if (o <= 0.01) return null;
	const w = text.length * size * 0.42 + 44;
	return (
		<g opacity={o}>
			<rect x={cx - w / 2} y={y} width={w} height={size + 26} rx={(size + 26) / 2} fill={lit > 0.5 ? '#fff3d9' : CARD} stroke={lit > 0.5 ? AMBER : INK_SOFT} strokeWidth={2.5} strokeDasharray={dash ? '9 7' : undefined} />
			<Sx x={cx} y={y + size + 4} text={text} size={size} color={INK} hand anchor="middle" />
		</g>
	);
};
export const useF = () => useCurrentFrame();
void vis;
