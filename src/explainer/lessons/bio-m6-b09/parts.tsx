// M6 B09 drawing parts: the four-lane "What does it change?" board (lane cards, painted plates drawn by their alpha
// boxes, a slim DNA strip per lane: unchanged, carrying two allele rings, copied into identical strips, or taking an
// amber inserted segment), the small coded glyphs (sugar, gas bubbles, enzyme blob, detergent box, cheese wedge),
// advantage chips and the timeline. B01's SlimStrand, AlleleRing, FillBar and helpers are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {PlateB, Sx} from '../bio-m5-b13/shared';
import {AlleleRing, BIO_INK, CARD, EDGE, FillBar, GREYT, GREY_INK, SlimStrand, clamp01, lerp, rungX, smooth, vis} from '../bio-m6-b01/parts';
import type {Kind} from '../bio-m6-b01/parts';
import {platePt} from '../bio-m6-b07/parts';
import type {PB} from '../bio-m5-b07/shared';
import {CRUMB, PLATES, RING} from './assets';

export {AMBER, AMBER_INK, INK, INK_SOFT, BIO_INK, CARD, EDGE, GREYT, GREY_INK, FillBar, AlleleRing, SlimStrand, clamp01, lerp, smooth, vis, prog, FONT_DISPLAY, FONT_HAND, PLATES};

// ---------- plates ----------
/** A plate by its alpha box; `dim` greys and fades it, `glow` adds a soft amber halo. */
export const Pl: React.FC<{p: PB; cx: number; cy: number; w: number; o?: number; dim?: number; glow?: number}> = ({p, cx, cy, w, o = 1, dim = 0, glow = 0}) => {
	if (o <= 0.01) return null;
	const h = (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);
	const d = clamp01(dim);
	return (
		<g opacity={o * (1 - 0.55 * d)}>
			{glow > 0.01 ? <ellipse cx={cx} cy={cy} rx={w * 0.62} ry={h * 0.62} fill={AMBER} opacity={0.22 * glow} /> : null}
			<PlateB p={p} cx={cx} cy={cy} w={w} filter={d > 0.01 ? `grayscale(${d})` : undefined} />
		</g>
	);
};
export const plH = (p: PB, w: number) => (w * (p.box[3] - p.box[1])) / (p.box[2] - p.box[0]);
/** Screen point of the slice's cut face and of the plasmid ring for a plate drawn at (cx, cy, w). */
export const crumbPt = (cx: number, cy: number, w: number) => platePt(PLATES.bread, cx, cy, w, CRUMB[0], CRUMB[1]);
export const ringPt = (cx: number, cy: number, w: number) => platePt(PLATES.bact, cx, cy, w, RING[0], RING[1]);

// ---------- the board ----------
export const LW = 410;
export const LX = (i: number) => 95 + i * 440;
export const LCX = (i: number) => LX(i) + LW / 2;
export const LY0 = 215, LY1 = 960;
export const LANE_LABEL = ['uses a process', 'chooses the parents', 'copies DNA', 'inserts or edits DNA'];
/** One lane card with its small grey label; `active` gives it an amber edge, `dash` draws an empty slot. */
export const LaneCard: React.FC<{i: number; o?: number; active?: number; dash?: boolean; labelO?: number}> = ({i, o = 1, active = 0, dash = false, labelO = 1}) => {
	if (o <= 0.01) return null;
	const a = clamp01(active);
	return (
		<g opacity={o}>
			<rect x={LX(i)} y={LY0} width={LW} height={LY1 - LY0} rx={24} fill={dash ? 'none' : CARD} stroke={a > 0.5 ? AMBER : EDGE} strokeWidth={a > 0.5 ? 4 : 2.5} strokeDasharray={dash ? '12 9' : undefined} />
			<Sx x={LCX(i)} y={LY0 + 48} text={LANE_LABEL[i]} size={32} color={a > 0.5 ? AMBER_INK : GREY_INK} hand anchor="middle" opacity={labelO} />
		</g>
	);
};
/** A lane's screen term: bright while its lane is active (`bright` 1), then small and grey. */
export const LaneTerm: React.FC<{i: number; lines: string[]; o?: number; bright?: number; y?: number}> = ({i, lines, o = 1, bright = 0, y = 618}) => {
	if (o <= 0.01) return null;
	const b = clamp01(bright);
	const size = lerp(28, 36, b);
	return (
		<g opacity={o}>
			{lines.map((t, k) => <Sx key={k} x={LCX(i)} y={y + k * size * 1.1 - (lines.length - 1) * size * 0.55} text={t} size={size} color={b > 0.5 ? INK : GREY_INK} weight={b > 0.5 ? 800 : 600} anchor="middle" />)}
		</g>
	);
};

// ---------- DNA strips ----------
export const SN = 10, SP = 30, SG = 30;
/** Board strip row (lanes) and a small grey "DNA" label at the lane's left edge. */
export const STRIP_Y = 700;
const DnaLbl: React.FC<{i: number; o?: number}> = ({i, o = 1}) => (o <= 0.01 ? null : <Sx x={LX(i) + 8} y={STRIP_Y + 23} text="DNA" size={20} color={GREY_INK} weight={700} opacity={o} />);
export const stripX = (cx: number, n = SN, pitch = SP) => cx - (n * pitch) / 2;
/** A slim strip; `ins` (0..1) turns rungs i0..i1 amber inside an amber band (an inserted segment). */
export const Strip: React.FC<{cx: number; y: number; n?: number; pitch?: number; gap?: number; o?: number; draw?: number; ins?: number; i0?: number; i1?: number; dim?: number}> = ({cx, y, n = SN, pitch = SP, gap = SG, o = 1, draw = 1, ins = 0, i0 = 4, i1 = 6, dim = 0}) => {
	if (o <= 0.01) return null;
	const x = stripX(cx, n, pitch);
	const k = clamp01(ins);
	return (
		<g opacity={o * (1 - 0.5 * clamp01(dim))}>
			<SlimStrand x={x} y={y} n={n} pitch={pitch} gap={gap} draw={draw} lineW={3.5}
				band={k > 0.01 ? {i0, i1, o: k, fill: '#fff3d9', color: AMBER} : undefined}
				rung={i => (k > 0.01 && i >= i0 && i <= i1 ? {color: AMBER, w: 6, o: 1} : undefined)} />
		</g>
	);
};
/** Two allele rings above a strip (one from each parent; no new kind). */
export const StripRings: React.FC<{cx: number; y: number; kinds: [Kind, Kind]; o?: number; n?: number; pitch?: number; at?: [number, number]}> = ({cx, y, kinds, o = 1, n = SN, pitch = SP}) => {
	if (o <= 0.01) return null;
	const x = stripX(cx, n, pitch);
	return (
		<g opacity={o}>
			<AlleleRing x={rungX(x, 2, pitch)} y={y - 22} r={11} kind={kinds[0]} />
			<AlleleRing x={rungX(x, 7, pitch)} y={y - 22} r={11} kind={kinds[1]} />
		</g>
	);
};
/** A strip duplicating into identical copies (`t` 0..1 slides the copies down). */
export const StripCopy: React.FC<{cx: number; y: number; t: number; o?: number; n?: number; pitch?: number; gap?: number; dy?: number; copies?: number}> = ({cx, y, t, o = 1, n = 9, pitch = 28, gap = 22, dy = 46, copies = 2}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: copies}, (_, k) => {
				const tt = smooth(clamp01(t * (copies + 0.4) - k * 0.7));
				return tt > 0.01 ? <Strip key={k} cx={cx} y={y + dy * (k + 1) * tt} n={n} pitch={pitch} gap={gap} o={tt} /> : null;
			})}
			<Strip cx={cx} y={y} n={n} pitch={pitch} gap={gap} />
		</g>
	);
};
/** A small grey tick with an optional grey word. */
export const GreyTick: React.FC<{x: number; y: number; o?: number; text?: string; s?: number}> = ({x, y, o = 1, text, s = 26}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<path d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.45} L${x + s * 0.55},${y - s * 0.5}`} fill="none" stroke={GREYT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
		{text ? <Sx x={x + s * 0.9} y={y + 10} text={text} size={26} color={GREY_INK} hand /> : null}
	</g>
));

// ---------- lane contents (board positions) ----------
/** Lane 1: yeast and bread; the strip stays unchanged. */
export const Lane1: React.FC<{o?: number; dim?: number; plates?: number; strip?: number; tick?: number}> = ({o = 1, dim = 0, plates = 1, strip = 1, tick = 1}) => {
	if (o <= 0.01) return null;
	const cx = LCX(0);
	return (
		<g opacity={o}>
			<Pl p={PLATES.yeast} cx={cx - 95} cy={410} w={160} o={plates} dim={dim} />
			<Pl p={PLATES.bread} cx={cx + 88} cy={420} w={190} o={plates} dim={dim} />
			<Strip cx={cx} y={STRIP_Y} draw={strip} o={strip > 0.01 ? 1 : 0} dim={dim} />
			<DnaLbl i={0} o={strip * (1 - 0.5 * dim)} />
			<GreyTick x={cx - 60} y={790} o={tick * (1 - 0.5 * dim)} text="unchanged" />
		</g>
	);
};
/** Lane 2: the merino; reproductive technologies below it; a strip with one ring from each parent. */
export const Lane2: React.FC<{o?: number; dim?: number; sheep?: number; repro?: number; strip?: number; rings?: number; tick?: number}> = ({o = 1, dim = 0, sheep = 1, repro = 0, strip = 1, rings = 1, tick = 1}) => {
	if (o <= 0.01) return null;
	const cx = LCX(1);
	return (
		<g opacity={o}>
			<Pl p={PLATES.sheep} cx={cx} cy={360} w={200} o={sheep} dim={dim} />
			<Pl p={PLATES.straw} cx={cx - 90} cy={508} w={92} o={repro} dim={dim} />
			<Pl p={PLATES.brush} cx={cx + 85} cy={508} w={124} o={repro} dim={dim} />
			<Strip cx={cx} y={STRIP_Y} draw={strip} o={strip > 0.01 ? 1 : 0} dim={dim} />
			<DnaLbl i={1} o={strip * (1 - 0.5 * dim)} />
			<g opacity={1 - 0.5 * dim}><StripRings cx={cx} y={STRIP_Y} kinds={['a', 'b']} o={rings} /></g>
			<GreyTick x={cx - 110} y={790} o={tick * (1 - 0.5 * dim)} text="no new alleles" />
		</g>
	);
};
/** Lane 3: tissue-culture jars and a strawberry runner; the strip copies into identical strips. */
export const Lane3: React.FC<{o?: number; dim?: number; plates?: number; copy?: number}> = ({o = 1, dim = 0, plates = 1, copy = 1}) => {
	if (o <= 0.01) return null;
	const cx = LCX(2);
	return (
		<g opacity={o}>
			<Pl p={PLATES.jars} cx={cx} cy={370} w={270} o={plates} dim={dim} />
			<Pl p={PLATES.runner} cx={cx} cy={515} w={260} o={plates} dim={dim} />
			<g opacity={1 - 0.5 * dim}><StripCopy cx={cx} y={STRIP_Y - 10} t={copy} o={plates} dy={44} /></g>
			<DnaLbl i={2} o={plates * (1 - 0.5 * dim)} />
		</g>
	);
};
/** Lane 4: the bacterium with its plasmid, the insulin vial, Bt cotton; the strip takes an amber inserted segment. */
export const Lane4: React.FC<{o?: number; dim?: number; bact?: number; vial?: number; cotton?: number; strip?: number; ins?: number; arc?: number; cottonGlow?: number}> = ({o = 1, dim = 0, bact = 1, vial = 1, cotton = 0, strip = 1, ins = 1, arc = 1, cottonGlow = 0}) => {
	if (o <= 0.01) return null;
	const cx = LCX(3);
	return (
		<g opacity={o}>
			<BactIns cx={cx - 50} cy={375} w={250} o={bact} dim={dim} arc={arc} />
			<Pl p={PLATES.vial} cx={cx + 142} cy={392} w={62} o={vial} dim={dim} />
			<Pl p={PLATES.cotton} cx={cx} cy={512} w={100} o={cotton} dim={dim} glow={cottonGlow} />
			<Strip cx={cx} y={STRIP_Y} draw={strip} o={strip > 0.01 ? 1 : 0} ins={ins} dim={dim} />
			<DnaLbl i={3} o={strip * (1 - 0.5 * dim)} />
		</g>
	);
};
/** The bacterium plate with an amber arc added to its plasmid ring (the inserted DNA). */
export const BactIns: React.FC<{cx: number; cy: number; w: number; o?: number; dim?: number; arc?: number}> = ({cx, cy, w, o = 1, dim = 0, arc = 0}) => {
	if (o <= 0.01) return null;
	const [rx, ry] = ringPt(cx, cy, w);
	const r = (58 * w) / 1600;
	const a = clamp01(arc);
	return (
		<g opacity={o}>
			<Pl p={PLATES.bact} cx={cx} cy={cy} w={w} dim={dim} />
			{a > 0.01 ? <path d={`M${rx + r * Math.cos(-2.4)},${ry + r * Math.sin(-2.4)} A${r},${r} 0 0 1 ${rx + r * Math.cos(-0.7)},${ry + r * Math.sin(-0.7)}`} fill="none" stroke={AMBER} strokeWidth={Math.max(4, r * 0.42)} strokeLinecap="round" opacity={a * (1 - 0.5 * dim)} /> : null}
		</g>
	);
};

// ---------- small coded glyphs ----------
/** A sugar molecule (small hexagon). */
export const Sugar: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 12, o = 1}) => (o <= 0.01 ? null : (
	<polygon points={Array.from({length: 6}, (_, k) => `${x + r * Math.cos((k * Math.PI) / 3)},${y + r * Math.sin((k * Math.PI) / 3)}`).join(' ')} fill="#fbe9c2" stroke={AMBER_INK} strokeWidth={2.5} opacity={o} />
));
/** A gas bubble. */
export const Bubble: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 10, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="rgba(235,240,244,0.85)" stroke="#8a97a3" strokeWidth={2.5} />
		<circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.22} fill="#ffffff" />
	</g>
));
/** A protein (enzyme) blob with a notch. */
export const Enzyme: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-34,-6 C-36,-30 -10,-40 8,-34 C30,-28 38,-8 34,10 C30,32 6,38 -12,32 C-22,28 -18,14 -8,12 C2,10 4,-2 -6,-4 C-16,-6 -32,12 -34,-6 Z" fill="#cfe3d2" stroke="#3f7a52" strokeWidth={3} />
	</g>
));
/** A plain detergent box outline. */
export const Box: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-40,-50 L40,-50 L40,55 L-40,55 Z" fill="#eef3f7" stroke={INK_SOFT} strokeWidth={3.5} strokeLinejoin="round" />
		<path d="M-40,-50 L-28,-64 L52,-64 L40,-50 M40,55 L52,41 L52,-64" fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeLinejoin="round" />
		<circle cx={0} cy={6} r={20} fill="none" stroke="#8fb3cf" strokeWidth={3} />
	</g>
));
/** A cheese wedge. */
export const Cheese: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M-50,22 L-50,-6 L46,-30 L46,22 Z" fill="#f6dc8e" stroke={AMBER_INK} strokeWidth={3} strokeLinejoin="round" />
		<path d="M-50,-6 L-22,-34 L46,-30" fill="#fbe8ad" stroke={AMBER_INK} strokeWidth={3} strokeLinejoin="round" />
		<circle cx={-18} cy={6} r={6} fill="#e9c66a" /><circle cx={16} cy={-4} r={5} fill="#e9c66a" /><circle cx={28} cy={12} r={4} fill="#e9c66a" />
	</g>
));
/** A small caterpillar outline (coded, used tiny on a cotton boll). */
export const Caterpillar: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
		{[0, 1, 2, 3, 4].map(k => <circle key={k} cx={-20 + k * 10} cy={Math.sin(k * 1.1) * 3} r={6.5} fill="#b9c98a" stroke="#5b6b2e" strokeWidth={2} />)}
		<circle cx={30} cy={0} r={6} fill="#6d5a3a" />
	</g>
));

// ---------- chips ----------
/** An advantage chip (one or two lines); `lit` 1 is bright, 0 is grey. */
export const AdvChip: React.FC<{cx: number; y: number; lines: string[]; o?: number; lit?: number; w?: number; size?: number}> = ({cx, y, lines, o = 1, lit = 1, w = 360, size = 32}) => {
	if (o <= 0.01) return null;
	const l = clamp01(lit);
	const h = 26 + lines.length * size * 1.15;
	return (
		<g opacity={o}>
			<rect x={cx - w / 2} y={y} width={w} height={h} rx={18} fill={l > 0.5 ? '#fff3d9' : CARD} stroke={l > 0.5 ? AMBER : EDGE} strokeWidth={l > 0.5 ? 3.5 : 2.5} />
			{lines.map((t, k) => <Sx key={k} x={cx} y={y + 13 + size * 0.9 + k * size * 1.15} text={t} size={size} color={l > 0.5 ? AMBER_INK : GREY_INK} hand anchor="middle" />)}
		</g>
	);
};
/** A step chip (decision rule) with an icon slot above the text. */
export const StepCard: React.FC<{x: number; y: number; w: number; h: number; text: string; o?: number; children?: React.ReactNode}> = ({x, y, w, h, text, o = 1, children}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x} y={y} width={w} height={h} rx={22} fill={CARD} stroke={AMBER} strokeWidth={3} />
		{children}
		<Sx x={x + w / 2} y={y + h - 34} text={text} size={42} color={INK} hand anchor="middle" />
	</g>
));
/** A tick label on the timeline. */
export const TimeTick: React.FC<{x: number; y: number; text: string; o?: number}> = ({x, y, text, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<line x1={x} y1={y - 14} x2={x} y2={y + 14} stroke={INK_SOFT} strokeWidth={4} />
		<Sx x={x} y={y + 52} text={text} size={28} color={GREY_INK} hand anchor="middle" />
	</g>
));
export {DrawPath};
/** Frame-driven helper: 1 while f is in [a, b), with fades. */
export const useF = () => useCurrentFrame();
