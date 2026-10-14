import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b3a2/measured/lesson.json';
import {Plate, rng} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, GREEN, INK, INK_SOFT, prog} from '../bio-m5-b03a/shared';

export * from '../bio-m5-b03a/shared';

export const S = (id: string): CueScene & {durationInFrames: number} => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

// ---------- colours (amber progesterone, teal hCG, slate FSH/LH/pituitary, magenta oestrogen, violet oxytocin, green prolactin, cream milk) ----------
export const SLATE = '#4d6fa8';
export const SLATE_INK = '#34528a';
export const MAGENTA = '#c0338d';
export const MAGENTA_INK = '#9a2470';
export const VIOLET = '#7b4fb3';
export const VIOLET_INK = '#5b3591';
export const PROLACTIN = GREEN;
export const CREAM = '#f6e7bd';
export const CREAM_LINE = '#c9a85a';
export const MUSCLE = '#e0706f';

// ---------- the brain and pituitary outline (always at the same place) ----------
export const BRAIN = {x: 1540, y: 120};
export const PIT: [number, number] = [BRAIN.x + 178, BRAIN.y + 244];
export const Brain: React.FC<{at?: number; o?: number; pulse?: number; out?: number}> = ({at = 0, o = 1, pulse = 0, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 18) * (out === undefined ? 1 : 1 - prog(f, out, 12)) * o;
	const sc = 1 + 0.35 * pulse;
	if (A.HAVE.has(A.BRAIN)) {
		// painted brain (1800 x 1600 plate): the pituitary (plate 717, 1014) sits on PIT, so every route still starts on it; the part plate pulses
		const K = 0.2, ox = PIT[0] - 717.5 * K, oy = PIT[1] - 1014.5 * K;
		return (
			<g opacity={p}>
				<image href={staticFile(A.BRAIN)} x={ox} y={oy} width={1800 * K} height={1600 * K} />
				{pulse > 0 ? <circle cx={PIT[0]} cy={PIT[1]} r={26 * pulse} fill={AMBER} opacity={0.35 * pulse} /> : null}
				<g transform={`translate(${PIT[0]},${PIT[1]}) scale(${sc}) translate(${-PIT[0]},${-PIT[1]})`}>
					<image href={staticFile(A.PIT_PART)} x={ox} y={oy} width={1800 * K} height={1600 * K} />
				</g>
			</g>
		);
	}
	return (
		<g transform={`translate(${BRAIN.x},${BRAIN.y})`} opacity={p}>
			<path d="M60,150 C40,60 140,10 230,30 C310,48 335,130 290,190 C270,215 230,215 200,208 C170,200 120,212 90,200 C70,192 62,170 60,150Z" fill="#f3e7ee" stroke={INK_SOFT} strokeWidth={5} strokeLinejoin="round" />
			<path d="M110,90 C140,60 180,70 200,50 M150,140 C190,110 230,130 260,90 M100,160 C130,150 150,170 190,160 M220,170 C250,160 270,150 285,130" fill="none" stroke="#c9b3c0" strokeWidth={4} strokeLinecap="round" />
			<path d="M170,205 L176,232" stroke={INK_SOFT} strokeWidth={6} strokeLinecap="round" />
			<ellipse cx={178} cy={244} rx={20 * sc} ry={14 * sc} fill={SLATE} stroke={SLATE_INK} strokeWidth={4} />
		</g>
	);
};

// ---------- loop icons ----------
export const LoopIcon: React.FC<{k: 'neg' | 'pos'; cx: number; cy: number; r?: number; o?: number; sign?: number}> = ({k, cx, cy, r = 30, o = 1, sign = 1}) => (
	<g opacity={o}>
		<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK} strokeWidth={r * 0.14} />
		<line x1={cx - r * 0.5} x2={cx + r * 0.5} y1={cy} y2={cy} stroke={INK} strokeWidth={r * 0.18} strokeLinecap="round" opacity={sign} />
		{k === 'pos' ? <line x1={cx} x2={cx} y1={cy - r * 0.5} y2={cy + r * 0.5} stroke={INK} strokeWidth={r * 0.18} strokeLinecap="round" opacity={sign} /> : null}
	</g>
);

const CardFrame: React.FC<{k: 'neg' | 'pos'; at: number; fillAt: number; text: string; suffix?: {text: string; at: number}; out?: number}> = ({k, at, fillAt, text, suffix, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	const fill = prog(f, fillAt, 14);
	return (
		<div style={{display: 'flex', alignItems: 'center', gap: 14, width: 'fit-content', height: 62, padding: '0 24px 0 12px', background: '#fffdf8', borderRadius: 18, border: '1.5px solid rgba(60,45,20,0.12)', boxShadow: '0 12px 28px rgba(60,45,20,0.10)', opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
			<svg width={52} height={52} viewBox="0 0 52 52">
				<circle cx={26} cy={26} r={22} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="5 6" opacity={1 - fill} />
				<LoopIcon k={k} cx={26} cy={26} r={22} o={fill} />
			</svg>
			<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: INK, lineHeight: 1, paddingBottom: 4, whiteSpace: 'nowrap'}}>{text}</span>
			{suffix ? <span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, color: AMBER_INK, lineHeight: 1, paddingBottom: 4, whiteSpace: 'nowrap', opacity: prog(f, suffix.at, 12)}}>{suffix.text}</span> : null}
		</div>
	);
};

/** The loop card at the lower left. One frame at first; the second frame only exists from `second`. */
export const LoopCard: React.FC<{at: number; fill1: number; suffixAt?: number; second?: number; fill2?: number; out?: number; x?: number; y?: number}> = ({at, fill1, suffixAt, second, fill2 = 0, out, x = 96, y = 880}) => (
	<div style={{position: 'absolute', left: x, top: y, display: 'flex', flexDirection: 'column', gap: 12}}>
		<CardFrame k="neg" at={at} fillAt={fill1} text="the brake: negative feedback" suffix={suffixAt === undefined ? undefined : {text: 'in pregnancy', at: suffixAt}} out={out} />
		{second !== undefined ? <CardFrame k="pos" at={second} fillAt={fill2} text="birth: positive feedback" out={out} /> : null}
	</div>
);

// ---------- cervix plate pair ----------
export type CBox = [number, number, number, number];
export const CERVIX_BOX: CBox = [444, 214, 912, 1377];
/** Map natural plate pixels to screen for a crop placed at x, y with width w. */
export const cmap = (x: number, y: number, w: number, crop: CBox = CERVIX_BOX) => (nx: number, ny: number): [number, number] => [x + ((nx - crop[0]) * w) / crop[2], y + ((ny - crop[1]) * w) / crop[2]];
export const cH = (w: number, crop: CBox = CERVIX_BOX) => (w * crop[3]) / crop[2];
/** The aligned pair: plate 1 (closed cervix), crossfading to plate 2 (stretched) by `s` 0..1. */
export const CervixPair: React.FC<{x: number; y: number; w: number; s?: number; o?: number; crop?: CBox; style?: React.CSSProperties}> = ({x, y, w, s = 0, o = 1, crop = CERVIX_BOX, style}) => {
	const has2 = A.HAVE.has(A.CERVIX[1]);
	return (
		<>
			<Plate src={A.CERVIX[0]} natural={[1800, 1800]} crop={crop} width={w} style={{left: x, top: y, opacity: o * (has2 ? 1 - s * 0 : 1), ...style}} />
			{has2 && s > 0 ? <Plate src={A.CERVIX[1]} natural={[1800, 1800]} crop={crop} width={w} style={{left: x, top: y, opacity: o * s, ...style}} /> : null}
		</>
	);
};

// ---------- contraction trace ----------
/** Points of a contraction trace: mode 'calm' (flat), 'small' (low waves) or 'grow' (waves get taller and closer). */
export const traceD = (x: number, y: number, w: number, h: number, mode: 'calm' | 'small' | 'grow' | 'big', cycles = 4) => {
	const N = 160;
	let d = '';
	for (let i = 0; i <= N; i++) {
		const u = i / N;
		let a = 0.04, ph = u * 6;
		if (mode === 'small') { a = 0.28; ph = u * cycles * Math.PI; }
		if (mode === 'big') { a = 1; ph = u * cycles * Math.PI; }
		if (mode === 'grow') { a = 0.2 + 0.8 * u; ph = (cycles * u + 2.2 * u * u) * Math.PI; }
		const s = Math.abs(Math.sin(ph));
		const yy = y - h * a * Math.pow(s, 1.6) - (mode === 'calm' ? Math.sin(u * 30) * 2 : 0);
		d += `${i ? 'L' : 'M'}${(x + u * w).toFixed(1)},${yy.toFixed(1)} `;
	}
	return d;
};

// ---------- the five-step birth chain ----------
export const CHAIN = ['stretch', 'nerve signal', 'pituitary', 'oxytocin', 'contraction'];
export const ChainIcon: React.FC<{k: number; cx: number; cy: number; s?: number; o?: number; lit?: boolean}> = ({k, cx, cy, s = 1, o = 1, lit = true}) => {
	const line = lit ? INK : '#b9b3a8';
	return (
		<g transform={`translate(${cx},${cy}) scale(${s})`} opacity={o}>
			<circle r={46} fill="#fffdf8" stroke={lit ? '#1f6fb2' : '#cfc6b4'} strokeWidth={5} />
			{k === 0 ? <><ellipse rx={12} ry={20} fill="#f2c4c0" stroke={line} strokeWidth={4} /><path d="M-16,0 L-38,0 M-30,-8 L-38,0 L-30,8 M16,0 L38,0 M30,-8 L38,0 L30,8" fill="none" stroke={MUSCLE} strokeWidth={5} strokeLinecap="round" /></> : null}
			{k === 1 ? <><path d="M-30,16 L-14,-14 L2,12 L16,-16 L30,6" fill="none" stroke={AMBER_INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /><circle cx={30} cy={6} r={6} fill={AMBER} /></> : null}
			{k === 2 ? <><path d="M0,-26 L0,2" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" /><ellipse cx={0} cy={14} rx={20} ry={14} fill={SLATE} stroke={SLATE_INK} strokeWidth={4} /></> : null}
			{k === 3 ? [[-14, -10], [12, -14], [-2, 12], [18, 10]].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={9} fill={VIOLET} stroke="#fff" strokeWidth={2} />) : null}
			{k === 4 ? <><path d="M-24,0 C-24,-20 24,-20 24,0 C24,20 -24,20 -24,0Z" fill="#f2c4c0" stroke={line} strokeWidth={4} /><path d="M-40,-4 L-28,-4 M-34,-10 L-28,-4 L-34,2 M40,-4 L28,-4 M34,-10 L28,-4 L34,2" fill="none" stroke={VIOLET_INK} strokeWidth={5} strokeLinecap="round" transform="translate(0,4)" /></> : null}
		</g>
	);
};

// ---------- the milk gland schematic (local space 700 x 520) ----------
const PG = A.HAVE.has(A.GLAND[0]) && A.HAVE.has(A.GLAND[1]);
// painted gland (2000 x 1500 plate, scale 0.45): nipple tip at plate (1687, 810) lands on local (692, 260); six sac clusters measured on the plate grid
const PS = 0.45;
const plateXY = (px: number, py: number): [number, number] => [692 - (1687 - px) * PS, 260 + (py - 810) * PS];
export const SACS: [number, number][] = PG ? [[713, 313], [1047, 467], [473, 633], [560, 933], [800, 1127], [1080, 1133]].map(p => plateXY(p[0], p[1])) : [[180, 115], [110, 260], [180, 405], [310, 75], [310, 445]];
export const SAC_R = PG ? 46 : 54;
/** Which sac the "muscle cells" label points at. */
export const SAC_LABEL = PG ? 2 : 0;
export const DUCT_MAIN = 'M650,260 L330,260';
export const DUCT_BRANCH = ['M330,260 C280,200 240,160 205,138', 'M330,260 C270,260 220,260 160,260', 'M330,260 C280,320 240,360 205,382', 'M270,215 C250,170 280,110 296,100', 'M270,305 C250,350 280,410 296,420'];
export const NIPPLE: [number, number] = PG ? [684, 260] : [662, 260];
/** Where the main duct splits (local space). */
export const JUNCT: [number, number] = PG ? plateXY(1000, 790) : [330, 260];
export const MilkGland: React.FC<{x: number; y: number; s?: number; o?: number; fill?: number; crescent?: number; squeeze?: number; draw?: number; idp?: string}> = ({x, y, s = 1, o = 1, fill = 0.12, crescent = 0, squeeze = 0, draw = 1, idp = 'mg'}) => PG ? (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o * draw}>
		{/* empty and full plates are aligned: the milk fills by crossfade (fill 0.1 empty, about 0.95 full) */}
		<image href={staticFile(A.GLAND[0])} x={692 - 1687 * PS} y={260 - 810 * PS} width={2000 * PS} height={1500 * PS} />
		<image href={staticFile(A.GLAND[1])} x={692 - 1687 * PS} y={260 - 810 * PS} width={2000 * PS} height={1500 * PS} opacity={Math.max(0, Math.min(1, (fill - 0.1) / 0.85))} />
		{/* oxytocin: a violet ring round each sac that squeezes in as the muscle cells contract */}
		{SACS.map((c, i) => <circle key={i} cx={c[0]} cy={c[1]} r={SAC_R + 14 - 9 * squeeze} fill="none" stroke={VIOLET} strokeWidth={8} strokeLinecap="round" strokeDasharray="64 36" opacity={crescent} transform={`rotate(${i * 50},${c[0]},${c[1]})`} />)}
	</g>
) : (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<defs>
			{SACS.map((c, i) => (
				<clipPath key={i} id={`${idp}-clip-${i}`}><rect x={c[0] - SAC_R} y={c[1] + SAC_R - 2 * SAC_R * fill} width={2 * SAC_R} height={2 * SAC_R * fill + 2} /></clipPath>
			))}
		</defs>
		{[DUCT_MAIN, ...DUCT_BRANCH].map((d, i) => <path key={i} d={d} fill="none" stroke="#c9a08f" strokeWidth={i === 0 ? 24 : 16} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />)}
		{[DUCT_MAIN, ...DUCT_BRANCH].map((d, i) => <path key={'i' + i} d={d} fill="none" stroke="#fbf1ea" strokeWidth={i === 0 ? 12 : 7} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />)}
		<ellipse cx={NIPPLE[0] + 8} cy={NIPPLE[1]} rx={22} ry={34} fill="#e8b9a6" stroke="#b9826c" strokeWidth={5} opacity={draw} />
		{SACS.map((c, i) => {
			const sq = 1 - 0.09 * squeeze;
			return (
				<g key={i} transform={`translate(${c[0]},${c[1]}) scale(${sq}) translate(${-c[0]},${-c[1]})`} opacity={draw}>
					<circle cx={c[0]} cy={c[1]} r={SAC_R} fill="#fbf1ea" stroke="#b9826c" strokeWidth={5} />
					<circle cx={c[0]} cy={c[1]} r={SAC_R - 3} fill={CREAM} stroke={CREAM_LINE} strokeWidth={3} clipPath={`url(#${idp}-clip-${i})`} />
					<circle cx={c[0]} cy={c[1]} r={SAC_R + 12} fill="none" stroke={VIOLET} strokeWidth={9} strokeLinecap="round" strokeDasharray="70 40" opacity={crescent} transform={`rotate(${i * 50},${c[0]},${c[1]})`} />
				</g>
			);
		})}
	</g>
);
/** Map the gland's local space to the screen. */
export const gm = (x: number, y: number, s: number) => (lx: number, ly: number): [number, number] => [x + lx * s, y + ly * s];

// ---------- small shared bits ----------
/** Text with a hand-drawn scribble circle (used on "because"). */
export const Circled: React.FC<{at: number; children: React.ReactNode; color?: string}> = ({at, children, color = AMBER}) => {
	const r = rng(7);
	let d = '';
	for (let i = 0; i <= 80; i++) {
		const t = -Math.PI / 2 + (i / 60) * Math.PI * 2;
		const j = 1 + (r() - 0.5) * 0.06 + (i / 80) * 0.05;
		d += `${i ? 'L' : 'M'}${(60 + 62 * j * Math.cos(t)).toFixed(1)},${(22 + 25 * j * Math.sin(t)).toFixed(1)} `;
	}
	return (
		<span style={{position: 'relative', display: 'inline-block'}}>
			{children}
			<svg width={120} height={44} viewBox="0 0 120 44" style={{position: 'absolute', left: -8, top: 0, overflow: 'visible'}}><DrawPath d={d} at={at} dur={18} color={color} width={5} /></svg>
		</span>
	);
};

/** A word with a red strike that draws across it. */
export const Strike: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
	const f = useCurrentFrame();
	return (
		<span style={{position: 'relative', display: 'inline-block', opacity: 1 - 0.35 * prog(f, at, 10)}}>
			{children}
			<span style={{position: 'absolute', left: -4, top: '52%', height: 6, width: `${prog(f, at, 14) * 108}%`, background: '#c4432f', borderRadius: 3}} />
		</span>
	);
};

/** A tablet (capsule) icon. */
export const Tablet: React.FC<{x: number; y: number; s?: number; o?: number; rot?: number}> = ({x, y, s = 1, o = 1, rot = -20}) => A.HAVE.has(A.TABLET) ? (
	// painted capsule (plate box 288, 97, 1023 x 605, already tilted about 12 degrees); width 150 per unit of s keeps the old footprint
	<g transform={`translate(${x},${y}) rotate(${rot + 12}) scale(${(150 * s) / 1023}) translate(${-(288 + 511.5)},${-(97 + 302.5)})`} opacity={o}>
		<image href={staticFile(A.TABLET)} x={0} y={0} width={1600} height={800} />
	</g>
) : (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<rect x={-70} y={-30} width={140} height={60} rx={30} fill="#fffdf8" stroke={INK} strokeWidth={5} />
		<path d="M0,-30 L0,30" stroke={INK} strokeWidth={4} />
		<path d="M-40,-30 A30,30 0 0 0 -40,30 L0,30 L0,-30Z" fill="#f0b04a" stroke={INK} strokeWidth={5} />
	</g>
);

/** Blood-vessel path with a soft look. */
export const Vein: React.FC<{d: string; at: number; dur?: number; color?: string; o?: number; width?: number}> = ({d, at, dur = 30, color = '#e9a49c', o = 1, width = 10}) => (
	<g opacity={o}><DrawPath d={d} at={at} dur={dur} color={color} width={width} /><DrawPath d={d} at={at} dur={dur} color="#c4432f" width={2.5} opacity={0.45} /></g>
);

/** Flat-ended (inhibiting) arrow head at the end of a polyline: draws a perpendicular bar. */
export const BarHead: React.FC<{x: number; y: number; ang: number; at: number; len?: number; color?: string; width?: number}> = ({x, y, ang, at, len = 38, color = AMBER, width = 9}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 10);
	const nx = -Math.sin(ang), ny = Math.cos(ang);
	return <line x1={x - nx * len * p} y1={y - ny * len * p} x2={x + nx * len * p} y2={y + ny * len * p} stroke={color} strokeWidth={width} strokeLinecap="round" />;
};

export const Enter2 = Enter;
export {AMBER, FONT_DISPLAY, INK};

/** An egg marker that reads clearly over the pink tissue plates. */
export const EggMark: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 14, o = 1}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#fffdf8" stroke="#c4432f" strokeWidth={4} />
		<circle cx={x} cy={y} r={r * 0.4} fill="#f08f86" />
	</g>
);

/** The left ovary of the tract plate as a round inset (no hard crop edges). The follicle sits at fraction (0.487, 0.5). */
export const OVARY_DEF = {src: A.TRACT_THICK, nat: [1920, 1280] as [number, number], box: [310, 430, 230, 230] as [number, number, number, number]};
const OVP = {nat: [1800, 1800] as [number, number], box: [183, 427, 1434, 946] as [number, number, number, number], fol: [0.289, 0.556] as [number, number]};
const OVARY_ON = A.HAVE.has(A.OVARY[0]) && A.HAVE.has(A.OVARY[1]);
const OV_W = 1.25;
/** mix 0 shows the ovary with its ripe follicle, 1 the aligned ovary where nothing ripens. */
export const OvaryRound: React.FC<{x: number; y: number; d: number; o?: number; mix?: number}> = ({x, y, d, o = 1, mix = 0}) => {
	if (OVARY_ON) {
		const w = d * OV_W, k = w / OVP.box[2];
		const img = (src: string, op: number) => (
			<img src={staticFile(src)} style={{position: 'absolute', left: -OVP.box[0] * k + (d - w) / 2, top: -OVP.box[1] * k + (d - OVP.box[3] * k) / 2, width: OVP.nat[0] * k, height: OVP.nat[1] * k, opacity: op}} />
		);
		return (
			<div style={{position: 'absolute', left: x, top: y, width: d, height: d, opacity: o}}>
				{img(A.OVARY[0], 1)}
				{mix > 0 ? img(A.OVARY[1], mix) : null}
			</div>
		);
	}
	return (
	<div style={{position: 'absolute', left: x, top: y, width: d, height: d, borderRadius: '50%', overflow: 'hidden', border: `6px solid ${INK_SOFT}`, boxSizing: 'border-box', background: '#f1eadb', opacity: o}}>
		<Plate src={OVARY_DEF.src} natural={OVARY_DEF.nat} crop={OVARY_DEF.box} width={d} style={{left: -6, top: -6}} />
	</div>
	);
};
export const ovFol = (x: number, y: number, d: number): [number, number] => OVARY_ON
	? [x + d / 2 + (OVP.fol[0] - 0.5) * d * OV_W, y + d / 2 + (OVP.fol[1] - 0.5) * ((d * OV_W * OVP.box[3]) / OVP.box[2])]
	: [x + 0.487 * d, y + 0.5 * d];
export const OVARY_PAINTED = OVARY_ON;
