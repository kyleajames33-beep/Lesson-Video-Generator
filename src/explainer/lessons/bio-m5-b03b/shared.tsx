import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b3b/measured/lesson.json';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, Plate, prog, rng} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';

export {
	AMBER, AMBER_INK, Arrow, BLUE, Body, Card, Chip, DrawPath, dim, Enter, FONT_DISPLAY, FONT_HAND, GREEN, Germ, HandText, Heading, INK,
	INK_SOFT, Label, Overlay, prog, RED, Underline, W, H,
} from '../bio-m5-b01/shared';
export {Scribble, Trail, EggDot, Shield} from '../bio-m5-b02a/shared';
export {Cross, Tick, Fade, FadeDiv, along, pathOf, Line, Pill, Stamp, WrongChip, pm} from '../bio-m5-b02c/shared';
export {Cam, Zoom, Dots, Bracket, Underlined, Hand, Say, vis, GreyTag} from '../bio-m5-b03a/shared';
import {along} from '../bio-m5-b02c/shared';

export const S = (id: string): CueScene & {durationInFrames: number} => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

// ---------- semantic colours: one colour per evaluation criterion, used everywhere ----------
export const GAIN = '#2f8a5b';
export const VAR = '#1f6fb2';
export const COST = '#d9a21b';
export const COST_INK = '#8a5a0c';
export const WELF = '#d9788a';
export const WELF_INK = '#b04a60';
export const ORANGE = '#e2702b';
export const TEAL = '#2a9d8f';
export const HARM = '#c4432f';
export const GREYC = '#8d949b';
export const POLLEN = '#f2c230';
/** The six allele colours of the gene pool. Orange is the popular bull's. */
export const POOL = [ORANGE, TEAL, '#b03a6b', '#3b6fa8', '#5aa14a', '#7b4fb3'];

// ---------- plates ----------
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const WN: [number, number] = [1900, 1300];
export const PL: Record<string, PDef> = {
	wheat: {src: A.WHEAT, nat: WN, box: [358, 147, 1255, 1003]},
	bullcow: {src: A.BULL_COW, nat: [2200, 1200], box: [243, 296, 1712, 589]},
	bull: {src: A.BULL_COW, nat: [2200, 1200], box: [243, 296, 907, 589]},
	cow: {src: A.BULL_COW, nat: [2200, 1200], box: [1150, 296, 805, 589]},
	ear: {src: A.WHEAT, nat: WN, box: [358, 147, 480, 1003]},
	floret: {src: A.WHEAT, nat: WN, box: [885, 225, 730, 865]},
	rust: {src: A.RUST, nat: WN, box: [606, 167, 796, 965]},
	potato: {src: A.POTATO, nat: [1600, 1600], box: [328, 418, 944, 764]},
	bunch: {src: A.BUNCH, nat: [1842, 1330], box: [430, 206, 1069, 900]},
	plantation: {src: A.PLANTATION, nat: [2330, 1197], box: [246, 267, 1835, 645]},
	flowerCut: {src: A.FLOWER_CUT, nat: [1600, 1600], box: [324, 205, 953, 1189]},
	bagged: {src: A.BAGGED, nat: [1652, 1600], box: [397, 263, 877, 1035]},
	// painted side views (alpha boxes measured with alpha > 20)
	cowSide: {src: A.COW_SIDE, nat: [2200, 1600], box: [404, 460, 1392, 900]},
	bullSide: {src: A.BULL_SIDE, nat: [2200, 1600], box: [401, 460, 1397, 900]},
	calfSide: {src: A.CALF_SIDE, nat: [2200, 1600], box: [782, 910, 636, 450]},
	sheepSide: {src: A.SHEEP_SIDE, nat: [2200, 1600], box: [549, 560, 1102, 800]},
	potatoPlant: {src: A.POTATO_PLANT, nat: [1400, 1600], box: [180, 194, 1078, 1245]},
	potatoSick: {src: A.POTATO_SICK, nat: [1400, 1600], box: [180, 194, 1078, 1245]},
	// brief 27 painted icons (alpha boxes measured with PIL, alpha > 20)
	tract: {src: A.COW_TRACT, nat: [2200, 1400], box: [221, 213, 1759, 974]},
	straw: {src: A.STRAW[0], nat: [2200, 500], box: [224, 204, 1748, 92]},
	strawFrost: {src: A.STRAW[0 + 1], nat: [2200, 500], box: [224, 204, 1748, 92]},
	vialEmpty: {src: A.VIAL[0], nat: [1000, 1600], box: [209, 163, 580, 1276]},
	vialFull: {src: A.VIAL[1], nat: [1000, 1600], box: [209, 163, 580, 1276]},
	freezer: {src: A.FREEZER, nat: [1600, 1600], box: [414, 192, 774, 1215]},
	forceps: {src: A.FORCEPS, nat: [800, 1600], box: [308, 192, 184, 1216]},
	bag: {src: A.COVER_BAG, nat: [1400, 2000], box: [206, 202, 988, 1596]},
	barn: {src: A.BARN, nat: [1600, 1400], box: [161, 228, 1279, 944]},
};
const have = (a: PDef) => A.HAVE.has(a.src);
export const pH = (a: PDef, w: number) => (w * a.box[3]) / a.box[2];
/** Map plate-native coordinates to screen for a plate placed at x,y with width w. */
export const plateMap = (a: PDef, x: number, y: number, w: number) => (cx: number, cy: number): [number, number] => [x + ((cx - a.box[0]) * w) / a.box[2], y + ((cy - a.box[1]) * w) / a.box[2]];

/** A painted plate (crop of its alpha box), or a labelled dashed stand-in when the file is not in HAVE. */
export const PArt: React.FC<{a: PDef; x: number; y: number; w: number; o?: number; style?: React.CSSProperties}> = ({a, x, y, w, o = 1, style}) => {
	if (!A.HAVE.has(a.src)) {
		return <div style={{position: 'absolute', left: x, top: y, width: w, height: pH(a, w), border: `4px dashed ${INK_SOFT}`, borderRadius: 24, opacity: o, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_HAND, fontSize: 40, color: INK_SOFT, ...style}}>plate not delivered</div>;
	}
	return <Plate src={a.src} natural={a.nat} crop={a.box} width={w} style={{left: x, top: y, opacity: o, ...style}} />;
};

/** A painted plate drawn inside an SVG (foreignObject), top-left at x,y with width w. Draws nothing when the file is missing. */
export const SvgPlate: React.FC<{a: PDef; x: number; y: number; w: number; filter?: string}> = ({a, x, y, w, filter}) => {
	if (!A.HAVE.has(a.src)) return null;
	const h = pH(a, w);
	return (
		<foreignObject x={x} y={y} width={w} height={h} style={{overflow: 'visible'}}>
			<div style={{position: 'relative', width: w, height: h, filter}}>
				<Plate src={a.src} natural={a.nat} crop={a.box} width={w} style={{left: 0, top: 0}} />
			</div>
		</foreignObject>
	);
};

/** SVG <image> version of SvgPlate (safe under mirrored or stretched transforms): alpha box top-left at x,y, width w. */
export const ImgPlate: React.FC<{a: PDef; x: number; y: number; w: number; o?: number}> = ({a, x, y, w, o = 1}) => {
	if (!A.HAVE.has(a.src)) return null;
	const k = w / a.box[2];
	return <image href={staticFile(a.src)} x={x - a.box[0] * k} y={y - a.box[1] * k} width={a.nat[0] * k} height={a.nat[1] * k} opacity={o} />;
};

// ---------- tiny icons (svg, centre origin) ----------
/** Coded side-view cow, bull or sheep, about 110 wide. `grey` 0..1 washes it grey (infected). */
export const AnimalIconCoded: React.FC<{x: number; y: number; s?: number; kind?: 'cow' | 'bull' | 'sheep'; grey?: number; o?: number; flip?: boolean; ring?: string}> = ({x, y, s = 1, kind = 'cow', grey = 0, o = 1, flip, ring}) => {
	const dark = '#4a4540';
	return (
		<g transform={`translate(${x},${y}) scale(${flip ? -s : s},${s})`} opacity={o}>
			{ring ? <ellipse cx={4} cy={-2} rx={72} ry={46} fill="none" stroke={ring} strokeWidth={6} /> : null}
			{kind === 'sheep' ? (
				<g>
					{[-34, 40].map(lx => <rect key={lx} x={lx - 3} y={6} width={7} height={30} rx={3} fill={dark} />)}
					{[-20, 24].map(lx => <rect key={lx} x={lx - 3} y={6} width={7} height={30} rx={3} fill={dark} />)}
					<ellipse cx={46} cy={-10} rx={15} ry={13} fill="#5b544d" />
					<ellipse cx={38} cy={-24} rx={6} ry={9} fill="#5b544d" transform="rotate(-30 38 -24)" />
					{[[-30, -8, 24], [-6, -18, 26], [20, -10, 25], [-8, 4, 24], [-34, 6, 18], [26, 6, 18]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />)}
					{grey > 0 ? [[-30, -8, 24], [-6, -18, 26], [20, -10, 25], [-8, 4, 24]].map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill={GREYC} opacity={grey * 0.85} />) : null}
				</g>
			) : (
				<g>
					{[-40, -24, 24, 40].map(lx => <rect key={lx} x={lx - 4} y={8} width={9} height={28} rx={3} fill={lx < 0 ? '#d9d1c2' : '#fffdf8'} stroke={INK_SOFT} strokeWidth={3} />)}
					<path d="M-48,-18 q-16,8 -10,30" fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
					<rect x={-50} y={kind === 'bull' ? -32 : -28} width={100} height={kind === 'bull' ? 50 : 42} rx={20} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} />
					{kind === 'bull' ? <path d="M30,-32 C44,-48 62,-40 66,-20 L62,6 L36,6Z" fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" /> : null}
					<ellipse cx={kind === 'bull' ? 68 : 62} cy={-14} rx={17} ry={13} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} />
					<ellipse cx={-6} cy={-12} rx={16} ry={10} fill={dark} />
					<ellipse cx={24} cy={-18} rx={10} ry={8} fill={dark} />
					<ellipse cx={kind === 'bull' ? 64 : 58} cy={-22} rx={7} ry={4} fill={dark} transform="rotate(-30 60 -22)" />
					{kind === 'cow' ? <ellipse cx={-26} cy={16} rx={9} ry={7} fill="#f1b5ab" stroke={INK_SOFT} strokeWidth={2.5} /> : null}
					{grey > 0 ? <rect x={-50} y={kind === 'bull' ? -32 : -28} width={100} height={kind === 'bull' ? 50 : 42} rx={20} fill={GREYC} opacity={grey * 0.85} /> : null}
				</g>
			)}
		</g>
	);
};

/** Painted side-view animal (hooves at y + 34, facing right; `flip` mirrors). `calf` is the young animal. Uses the coded animal if a plate is missing. */
const ANIMALS: Record<'cow' | 'bull' | 'sheep' | 'calf', {a: PDef; w: number; ring: [number, number]}> = {
	cow: {a: PL.cowSide, w: 140, ring: [84, 58]},
	bull: {a: PL.bullSide, w: 140, ring: [84, 58]},
	sheep: {a: PL.sheepSide, w: 112, ring: [70, 52]},
	calf: {a: PL.calfSide, w: 92, ring: [58, 44]},
};
export const AnimalIcon: React.FC<{x: number; y: number; s?: number; kind?: 'cow' | 'bull' | 'sheep' | 'calf'; grey?: number; o?: number; flip?: boolean; ring?: string}> = ({x, y, s = 1, kind = 'cow', grey = 0, o = 1, flip, ring}) => {
	const d = ANIMALS[kind];
	if (!A.HAVE.has(d.a.src)) return <AnimalIconCoded x={x} y={y} s={s} kind={kind === 'calf' ? 'cow' : kind} grey={grey} o={o} flip={flip} ring={ring} />;
	const h = pH(d.a, d.w);
	return (
		<g transform={`translate(${x},${y}) scale(${flip ? -s : s},${s})`} opacity={o}>
			{ring ? <ellipse cx={0} cy={34 - h / 2} rx={d.ring[0]} ry={d.ring[1]} fill="none" stroke={ring} strokeWidth={6} /> : null}
			<SvgPlate a={d.a} x={-d.w / 2} y={34 - h} w={d.w} filter={grey > 0 ? `grayscale(${grey * 0.9}) brightness(${1 - grey * 0.1})` : undefined} />
		</g>
	);
};

export const BeadDot: React.FC<{cx: number; cy: number; r?: number; color: string; o?: number}> = ({cx, cy, r = 11, color, o = 1}) => (
	<g opacity={o}>
		<circle cx={cx} cy={cy} r={r} fill={color} stroke={INK} strokeWidth={2.2} />
		<circle cx={cx - r * 0.3} cy={cy - r * 0.3} r={r * 0.28} fill="#fff" opacity={0.55} />
	</g>
);

/** A frozen-semen straw: thin tube with a plug. `frost` 0..1 adds a pale blue wash and dots. */
export const Straw: React.FC<{x: number; y: number; w?: number; rot?: number; frost?: number; o?: number; fill?: string}> = ({x, y, w = 120, rot = 0, frost = 0, o = 1, fill = '#f6e7a6'}) => {
	if (have(PL.straw)) {
		// painted straw (2200 x 500 plate): plug mirrored to the right as in the coded one, thickened 2x for legibility; the frosted plate fades in over it
		const k = w / PL.straw.box[2], h = PL.straw.box[3] * k;
		return (
			<g transform={`translate(${x},${y}) rotate(${rot})`} opacity={o}>
				<g transform={`scale(-1,2) translate(${-w / 2},${-h / 2})`}>
					<ImgPlate a={PL.straw} x={0} y={0} w={w} />
					{frost > 0 && have(PL.strawFrost) ? <ImgPlate a={PL.strawFrost} x={0} y={0} w={w} o={frost} /> : null}
				</g>
			</g>
		);
	}
	return (
	<g transform={`translate(${x},${y}) rotate(${rot})`} opacity={o}>
		<rect x={-w / 2} y={-8} width={w} height={16} rx={8} fill={fill} stroke={INK_SOFT} strokeWidth={3} />
		<rect x={w / 2 - 22} y={-8} width={22} height={16} rx={8} fill="#c9b3a3" stroke={INK_SOFT} strokeWidth={3} />
		{frost > 0 ? (
			<g opacity={frost}>
				<rect x={-w / 2 - 4} y={-12} width={w + 8} height={24} rx={12} fill="#dff0fb" opacity={0.75} />
				{[-0.4, -0.15, 0.1, 0.33].map((u, i) => <circle key={i} cx={u * w} cy={i % 2 ? -3 : 3} r={3} fill="#fff" />)}
			</g>
		) : null}
	</g>
	);
};

export const CoinIcon: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 30, o = 1}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={COST} stroke={COST_INK} strokeWidth={5} />
		<circle cx={x} cy={y} r={r * 0.68} fill="none" stroke={COST_INK} strokeWidth={3} opacity={0.6} />
		<text x={x} y={y + r * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.05}} fill={COST_INK}>$</text>
	</g>
);

export const HeartIcon: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<path transform={`translate(${x},${y}) scale(${s})`} opacity={o} d="M0,22 C-34,-2 -26,-30 -8,-26 C-2,-24 0,-18 0,-14 C0,-18 2,-24 8,-26 C26,-30 34,-2 0,22Z" fill={WELF} stroke={WELF_INK} strokeWidth={4} strokeLinejoin="round" />
);

export const BarnIcon: React.FC<{x: number; y: number; s?: number; o?: number; color?: string}> = ({x, y, s = 1, o = 1, color = '#d9c9a8'}) => have(PL.barn) ? (
	// painted barn: the old icon was 68 wide and 58 tall about its centre, so the plate is fitted to 84 wide
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}><SvgPlate a={PL.barn} x={-42} y={-pH(PL.barn, 84) / 2 - 2} w={84} /></g>
) : (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<path d="M-34,24 L-34,-8 L0,-34 L34,-8 L34,24Z" fill={color} stroke={INK_SOFT} strokeWidth={4} strokeLinejoin="round" />
		<rect x={-10} y={2} width={20} height={22} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
	</g>
);

/** Wheat plant icon for fields and rows: the painted ear and leaves plate (coded rust spots and the shield are overlays). */
export const WheatIcon: React.FC<{x: number; y: number; s?: number; o?: number; rust?: number; shield?: number}> = ({x, y, s = 1, o = 1, rust = 0, shield = 0}) => {
	const painted = A.HAVE.has(PL.ear.src);
	return (
		<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
			{painted ? <SvgPlate a={PL.ear} x={-31} y={-72} w={62} /> : (
				<g>
					<path d="M0,56 L0,-6" stroke="#6f8a3a" strokeWidth={5} strokeLinecap="round" />
					<path d="M0,40 C-18,34 -26,22 -28,10 M0,30 C18,24 26,12 28,0" fill="none" stroke="#6f8a3a" strokeWidth={4} strokeLinecap="round" />
					{[[-8, -14], [8, -18], [-8, -34], [8, -38], [0, -54]].map(([gx, gy], i) => <ellipse key={i} cx={gx} cy={gy} rx={8} ry={14} fill="#e8c35b" stroke="#9a7a1f" strokeWidth={2.5} transform={`rotate(${gx < 0 ? -14 : gx > 0 ? 14 : 0} ${gx} ${gy})`} />)}
				</g>
			)}
			{rust > 0 ? [[-2, 36], [-14, 18], [10, 8], [-6, -10], [6, -32]].map(([rx, ry], i) => <circle key={i} cx={rx} cy={ry} r={4.5} fill="#c25a1c" stroke="#8a3a0c" strokeWidth={1.5} opacity={rust} />) : null}
			{shield > 0 ? (
				<g transform="translate(26,-36)" opacity={shield}>
					<path d="M0,-18 L16,-12 L14,6 C12,16 6,20 0,24 C-6,20 -12,16 -14,6 L-16,-12Z" fill="#cfe6d6" stroke={GAIN} strokeWidth={4} strokeLinejoin="round" />
					<path d="M-6,2 L-1,8 L8,-6" fill="none" stroke={GAIN} strokeWidth={4} strokeLinecap="round" />
				</g>
			) : null}
		</g>
	);
};

/** Shattered shield: two halves flying apart as `p` goes 0..1. */
export const ShieldBreak: React.FC<{x: number; y: number; s?: number; p: number; o?: number}> = ({x, y, s = 1, p, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o * (1 - Math.max(0, p - 0.7) / 0.3)}>
		<g transform={`translate(${-p * 12},${p * 10}) rotate(${-p * 24})`}><path d="M0,-18 L-16,-12 L-14,6 C-12,16 -6,20 0,24 L-2,2 L2,-8Z" fill="#cfe6d6" stroke={GAIN} strokeWidth={4} strokeLinejoin="round" /></g>
		<g transform={`translate(${p * 12},${p * 14}) rotate(${p * 28})`}><path d="M0,-18 L16,-12 L14,6 C12,16 6,20 0,24 L-2,2 L2,-8Z" fill="#cfe6d6" stroke={GAIN} strokeWidth={4} strokeLinejoin="round" /></g>
	</g>
);

/** Coded balance. Returns the geometry too via `balancePans`. angle in degrees: positive tips the right pan down. */
export const balancePans = (x: number, y: number, w: number, angle: number) => {
	const a = (angle * Math.PI) / 180;
	const half = w / 2;
	const lx = x - Math.cos(a) * half, ly = y - Math.sin(a) * half;
	const rx = x + Math.cos(a) * half, ry = y + Math.sin(a) * half;
	return {left: [lx, ly + 70] as [number, number], right: [rx, ry + 70] as [number, number], lTop: [lx, ly] as [number, number], rTop: [rx, ry] as [number, number]};
};
export const Balance: React.FC<{x: number; y: number; w?: number; angle: number; o?: number; pivotLabel?: string}> = ({x, y, w = 420, angle, o = 1, pivotLabel}) => {
	const p = balancePans(x, y, w, angle);
	const pan = (c: [number, number], t: [number, number]) => (
		<g>
			<path d={`M${t[0]},${t[1]} L${c[0] - 70},${c[1]} M${t[0]},${t[1]} L${c[0] + 70},${c[1]}`} stroke={INK_SOFT} strokeWidth={4} fill="none" />
			<path d={`M${c[0] - 80},${c[1]} Q${c[0]},${c[1] + 40} ${c[0] + 80},${c[1]}Z`} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={5} strokeLinejoin="round" />
		</g>
	);
	return (
		<g opacity={o}>
			<path d={`M${x},${y} L${x - 36},${y + 170} L${x + 36},${y + 170}Z`} fill="#e6dccb" stroke={INK_SOFT} strokeWidth={5} strokeLinejoin="round" />
			<line x1={p.lTop[0]} y1={p.lTop[1]} x2={p.rTop[0]} y2={p.rTop[1]} stroke={INK} strokeWidth={9} strokeLinecap="round" />
			{pan(p.left, p.lTop)}
			{pan(p.right, p.rTop)}
			<circle cx={x} cy={y} r={14} fill={AMBER} stroke={AMBER_INK} strokeWidth={4} />
			{pivotLabel ? <text x={x} y={y + 215} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}} fill={AMBER_INK}>{pivotLabel}</text> : null}
		</g>
	);
};

/** Small illustrative line chart: axes and one curve that draws on. No values on the axes. */
export const MiniLine: React.FC<{x: number; y: number; w?: number; h?: number; at: number; dur?: number; color?: string; kind?: 'rise' | 'fall' | 'steep'; label?: string; labelAt?: number; tag?: string; o?: number}> = ({x, y, w = 420, h = 200, at, dur = 40, color = GAIN, kind = 'rise', label, labelAt, tag = 'illustrative', o = 1}) => {
	const f = useCurrentFrame();
	const d = kind === 'fall' ? `M20,${h * 0.15} C${w * 0.35},${h * 0.2} ${w * 0.6},${h * 0.5} ${w - 10},${h * 0.8}` : kind === 'steep' ? `M20,${h * 0.9} C${w * 0.4},${h * 0.8} ${w * 0.6},${h * 0.35} ${w - 10},${h * 0.05}` : `M20,${h * 0.85} C${w * 0.4},${h * 0.7} ${w * 0.65},${h * 0.35} ${w - 10},${h * 0.15}`;
	return (
		<g transform={`translate(${x},${y})`} opacity={o}>
			<path d={`M16,0 L16,${h} L${w},${h}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={prog(f, at - 6, 12)} />
			<DrawPath d={d} at={at} dur={dur} color={color} width={7} />
			{label ? <text x={w / 2} y={h + 38} textAnchor="middle" opacity={prog(f, labelAt ?? at + 10, 14)} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 25}} fill={INK_SOFT}>{label}</text> : null}
			<text x={w} y={-8} textAnchor="end" opacity={prog(f, labelAt ?? at + 10, 14)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 30}} fill={GREYC}>{tag}</text>
		</g>
	);
};

// ---------- scorecard ----------
export type RowKey = 'gain' | 'variety' | 'cost' | 'welfare';
export const ROWS: {k: RowKey; label: string; color: string}[] = [
	{k: 'gain', label: 'gain', color: GAIN}, {k: 'variety', label: 'variety', color: VAR}, {k: 'cost', label: 'cost', color: COST_INK}, {k: 'welfare', label: 'welfare', color: WELF_INK},
];
export const RowGlyph: React.FC<{k: RowKey; size?: number}> = ({k, size = 40}) => (
	<svg width={size} height={size} viewBox="-30 -30 60 60" style={{flex: 'none'}}>
		{k === 'gain' ? <path d="M-18,0 L-6,14 L20,-16" fill="none" stroke={GAIN} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" /> : null}
		{k === 'variety' ? <><circle r={20} fill={VAR} stroke={INK} strokeWidth={3} /><circle cx={-6} cy={-6} r={6} fill="#fff" opacity={0.55} /></> : null}
		{k === 'cost' ? <><circle r={22} fill={COST} stroke={COST_INK} strokeWidth={4} /><text y={9} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26}} fill={COST_INK}>$</text></> : null}
		{k === 'welfare' ? <path d="M0,22 C-34,-2 -26,-30 -8,-26 C-2,-24 0,-18 0,-14 C0,-18 2,-24 8,-26 C26,-30 34,-2 0,22Z" fill={WELF} stroke={WELF_INK} strokeWidth={4} strokeLinejoin="round" /> : null}
	</svg>
);

export type Cell = {at: number; text: string; grey?: boolean};
const LW = 214, HH = 86, RH = 112;
export const cardSize = (cols: number, colW = 440) => ({w: LW + cols * colW, h: HH + 4 * RH});
/** The evaluation scorecard: four criterion rows, one column per method. Cells appear at their own frames. */
export const Scorecard: React.FC<{x: number; y: number; s?: number; at: number; out?: number; titles: {text: string; at?: number}[]; cells: Partial<Record<RowKey, (Cell | null | undefined)[]>>; lit?: Partial<Record<RowKey, number>>; colW?: number; o?: number}> = ({x, y, s = 1, at, out, titles, cells, lit = {}, colW = 440, o = 1}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 16) * (out === undefined ? 1 : 1 - prog(f, out, 14)) * o;
	const {w, h} = cardSize(titles.length, colW);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, transformOrigin: '0 0', transform: `scale(${s}) translateY(${(1 - p) * 16}px)`, opacity: p, background: '#fffdf8', borderRadius: 22, boxShadow: '0 18px 40px rgba(60,45,20,0.10), 0 2px 6px rgba(60,45,20,0.06)', border: '1.5px solid rgba(60,45,20,0.08)', boxSizing: 'border-box', overflow: 'hidden'}}>
			<div style={{display: 'flex', height: HH, borderBottom: `3px solid ${PAPER_DEEP}`}}>
				<div style={{width: LW, flex: 'none'}} />
				{titles.map((t, i) => (
					<div key={i} style={{width: colW, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK, opacity: prog(f, t.at ?? at, 14), lineHeight: 1, paddingBottom: 6, textAlign: 'center'}}>{t.text}</div>
				))}
			</div>
			{ROWS.map(r => {
				const litP = lit[r.k] === undefined ? 0 : prog(f, lit[r.k] as number, 12);
				return (
					<div key={r.k} style={{display: 'flex', height: RH, borderBottom: `2px solid ${PAPER_DEEP}`, position: 'relative', background: litP > 0 ? `rgba(${r.k === 'gain' ? '47,138,91' : r.k === 'variety' ? '31,111,178' : r.k === 'cost' ? '217,162,27' : '217,120,138'},${0.14 * litP})` : undefined}}>
						<div style={{width: LW, flex: 'none', display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 18, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: r.color, lineHeight: 1}}>
							<RowGlyph k={r.k} size={38} /><span style={{paddingBottom: 6}}>{r.label}</span>
						</div>
						{titles.map((_, ci) => {
							const c = cells[r.k]?.[ci];
							const cp = c ? prog(f, c.at, 14) : 0;
							return (
								<div key={ci} style={{width: colW, flex: 'none', display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px', borderLeft: `2px solid ${PAPER_DEEP}`, boxSizing: 'border-box'}}>
									{c ? (
										<div style={{display: 'flex', alignItems: 'center', gap: 12, opacity: cp, transform: `translateY(${(1 - cp) * 10}px)`}}>
											{c.grey ? null : <RowGlyph k={r.k} size={34} />}
											<span style={{fontFamily: FONT_DISPLAY, fontWeight: c.grey ? 500 : 600, fontSize: 28, lineHeight: 1.15, color: c.grey ? GREYC : INK, fontStyle: c.grey ? 'italic' : undefined}}>{c.text}</span>
										</div>
									) : null}
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

// ---------- gene pool herd ----------
/** Deterministic base allele colour per animal: four of each of the six colours, shuffled; animals 2, 13 and 20 are teal (the two colours left at the end). */
export const BASE = (() => {
	const r = rng(77);
	const arr = POOL.flatMap(c => [c, c, c, c]);
	for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
	const keep = [2, 13, 20];
	// make sure the kept ones are teal by swapping teal into them
	for (const k of keep) {
		if (arr[k] === TEAL) continue;
		const j = arr.findIndex((c, i) => c === TEAL && !keep.includes(i));
		[arr[k], arr[j]] = [arr[j], arr[k]];
	}
	return arr;
})();
/** Order in which animals take the popular bull's colour (the three kept teal ones never do). */
export const ORDER = (() => {
	const r = rng(31);
	const idx = Array.from({length: 24}, (_, i) => i).filter(i => ![2, 13, 20].includes(i));
	for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
	return idx;
})();
/** Bead colour of animal i at frame f when orange spreads from `start` at `per` frames per animal, up to `count` animals. */
export const poolColor = (i: number, f: number, start: number, per: number, count = 21) => {
	const k = ORDER.indexOf(i);
	return k >= 0 && k < count && f >= start + k * per ? ORANGE : BASE[i];
};
export const HerdGrid: React.FC<{x: number; y: number; cols?: number; n?: number; cw?: number; ch?: number; s?: number; kind?: 'cow' | 'sheep'; color: (i: number) => string; grey?: (i: number) => number; ringed?: number[]; ringAt?: number; ringColor?: string; o?: number}> = ({x, y, cols = 6, n = 24, cw = 130, ch = 104, s = 0.78, kind = 'cow', color, grey, ringed = [], ringAt = 0, ringColor = AMBER, o = 1}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const cx = x + (i % cols) * cw + cw / 2, cy = y + Math.floor(i / cols) * ch + ch / 2 + 12;
				const ringP = ringed.includes(i) ? prog(f, ringAt, 12) : 0;
				return (
					<g key={i}>
						<AnimalIconCoded x={cx} y={cy} s={s} kind={kind} grey={grey ? grey(i) : 0} />
						<BeadDot cx={cx} cy={cy - 40 * s - 12} r={11} color={color(i)} />
						{ringP > 0 ? <ellipse cx={cx} cy={cy - 8} rx={66 * ringP} ry={50 * ringP} fill="none" stroke={ringColor} strokeWidth={6} opacity={ringP} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Row of swatches of the six colours; a swatch dims once no animal has that colour. */
export const PoolLegend: React.FC<{x: number; y: number; colors: string[]; label?: string; off?: number}> = ({x, y, colors, label = 'colours in the gene pool', off = 380}) => {
	const present = new Set(colors);
	return (
		<g>
			<text x={x} y={y + 9} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK_SOFT}>{label}</text>
			{POOL.map((c, i) => <g key={c} opacity={present.has(c) ? 1 : 0.18}><BeadDot cx={x + off + i * 50} cy={y} r={16} color={c} /></g>)}
			<text x={x + off + 6 * 50 + 12} y={y + 11} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44}} fill={INK}>{present.size}</text>
		</g>
	);
};

/** A pan of plain notes: the standard small copy line for a coded chip. */
export const Tag: React.FC<{at: number; out?: number; x: number; y: number; text: string; color?: string; size?: number; w?: number}> = ({at, out, x, y, text, color = AMBER_INK, size = 44, w}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, lineHeight: 1.05, whiteSpace: w ? undefined : 'nowrap'}}>{text}</div>
	</Enter>
);

/** A text card (white, shadow) with a coloured title and body. */
export const NoteCard: React.FC<{x: number; y: number; w: number; at: number; out?: number; title?: string; color?: string; size?: number; children?: React.ReactNode; glyph?: RowKey; h?: number; bg?: string}> = ({x, y, w, at, out, title, color = INK, size = 28, children, glyph, h, bg = '#fffdf8'}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: bg, borderRadius: 20, padding: '12px 22px 14px', border: `3px solid ${color}`, boxShadow: '0 10px 24px rgba(60,45,20,0.08)', boxSizing: 'border-box', height: h, display: 'flex', gap: 16, alignItems: 'flex-start'}}>
			{glyph ? <div style={{paddingTop: 4}}><RowGlyph k={glyph} size={42} /></div> : null}
			<div>
				{title ? <div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color, lineHeight: 1}}>{title}</div> : null}
				{children ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: size, color: INK, lineHeight: 1.22, marginTop: title ? 4 : 0}}>{children}</div> : null}
			</div>
		</div>
	</Enter>
);

/** Coded forceps (two arms meeting at a pivot), tip at x,y, pointing down-left. `open` 0..1. */
export const Forceps: React.FC<{x: number; y: number; s?: number; open?: number; rot?: number; o?: number}> = ({x, y, s = 1, open = 0.5, rot = 0, o = 1}) => have(PL.forceps) ? (
	// painted forceps, tips down, tip at (x, y); the plate is slightly open and does not open further
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}><SvgPlate a={PL.forceps} x={-18} y={-pH(PL.forceps, 36) + 4} w={36} /></g>
) : (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<path d={`M${-4 - open * 10},0 L-4,-110 L-26,-230`} fill="none" stroke="#7d7a76" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
		<path d={`M${4 + open * 10},0 L4,-110 L26,-230`} fill="none" stroke="#9a9792" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
		<rect x={-30} y={-240} width={60} height={14} rx={7} fill="#6a6762" />
	</g>
);

/** Plain bag shape (translucent) over a region, for the cover step. `p` 0..1 draws it down over the floret. */
export const CoverBag: React.FC<{x: number; y: number; w: number; h: number; p: number}> = ({x, y, w, h, p}) => have(PL.bag) ? (
	// painted cover bag, fitted by height into the old slot and lowered the same way
	<g transform={`translate(0,${-(1 - p) * 120})`} opacity={Math.min(1, p * 2) * 0.8}>
		<SvgPlate a={PL.bag} x={x + (w - (h * PL.bag.box[2]) / PL.bag.box[3]) / 2} y={y - 20} w={(h * PL.bag.box[2]) / PL.bag.box[3]} />
	</g>
) : (
	<g transform={`translate(0,${-(1 - p) * 120})`} opacity={Math.min(1, p * 2)}>
		<path d={`M${x},${y + 40} C${x},${y - 10} ${x + w * 0.2},${y - 20} ${x + w / 2},${y - 20} C${x + w * 0.8},${y - 20} ${x + w},${y - 10} ${x + w},${y + 40} L${x + w * 0.92},${y + h} L${x + w * 0.08},${y + h}Z`} fill="#eef5f7" fillOpacity={0.55} stroke="#9bb7c2" strokeWidth={6} strokeLinejoin="round" />
		<path d={`M${x + w * 0.1},${y + h - 10} L${x + w * 0.9},${y + h - 10}`} stroke="#c4a15a" strokeWidth={10} strokeLinecap="round" />
		<path d={`M${x + w * 0.3},${y + 30} C${x + w * 0.25},${y + 80} ${x + w * 0.3},${y + 120} ${x + w * 0.34},${y + 150}`} stroke="#fff" strokeWidth={8} strokeLinecap="round" opacity={0.7} fill="none" />
	</g>
);

/** Pollen dots that travel along a path once, staggered. */
export const PollenFlow: React.FC<{pts: [number, number][]; at: number; n?: number; per?: number; dur?: number; color?: string; r?: number}> = ({pts, at, n = 6, per = 6, dur = 40, color = POLLEN, r = 8}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const t = (f - at - i * per) / dur;
				if (t < 0 || t > 1.15) return null;
				const [px, py] = along(pts, Math.min(1, t));
				return <circle key={i} cx={px} cy={py + Math.sin(i * 2.1) * 4} r={r} fill={color} stroke="#a9830a" strokeWidth={2} opacity={Math.min(1, t * 6) * (t > 1 ? Math.max(0, 1 - (t - 1) * 6) : 1)} />;
			})}
		</g>
	);
};

/** A wind wisp doodle. */
export const Wisp: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o} fill="none" stroke={GREYC} strokeWidth={6} strokeLinecap="round">
		<path d="M0,0 C30,-16 60,16 90,0 C106,-8 118,-2 120,10" /><path d="M10,24 C36,10 64,36 100,22" /><path d="M-6,-24 C16,-34 40,-18 60,-26" />
	</g>
);

/** Soft dim helper for backgrounds. */
export const fadeTo = (f: number, from: number, to = 0.25, d = 16) => 1 - (1 - to) * prog(f, from, d);

/** Fade and slide a whole layer in (and optionally out). */
export const SlideIn: React.FC<{at: number; dx?: number; dy?: number; out?: number; dur?: number; children: React.ReactNode}> = ({at, dx = 0, dy = 0, out, dur = 22, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, dur);
	const o = out === undefined ? 1 : 1 - prog(f, out, 14);
	return <div style={{position: 'absolute', inset: 0, opacity: p * o, transform: `translate(${(1 - p) * dx}px,${(1 - p) * dy}px)`, pointerEvents: 'none'}}>{children}</div>;
};

// ---------- the cow's reproductive tract (local space 560 x 340) ----------
// Painted plate (2200 x 1400, mirrored so the opening is on the left and the ovaries on the right, as the coded cut-away was):
// local x = (1980 - plate x) * K, local y = (plate y - 213) * K + 10, with K = 560 / 1759. Landmarks measured on a plate grid.
const TK = 560 / 1759;
const TP = (px: number, py: number): [number, number] => [Math.round((1980 - px) * TK), Math.round((py - 213) * TK + 10)];
export const TRACT_PAINTED = A.HAVE.has(A.COW_TRACT);
const CODED_CT = {
	entrance: [36, 262] as [number, number], cervix: [215, 236] as [number, number], body: [300, 214] as [number, number], uterus: [372, 188] as [number, number],
	ovaryA: [452, 62] as [number, number], ovaryB: [508, 196] as [number, number], funnelA: [428, 40] as [number, number],
	hornA: 'M318,208 C372,186 416,138 440,90', hornB: 'M318,214 C372,236 436,236 482,206',
	vagina: 'M36,262 C100,262 160,244 214,236', uterusBody: 'M240,234 L318,212',
	tube: [[60, 120], [64, 190], [70, 252], [150, 252], [214, 238], [262, 226], [320, 210], [372, 188]] as [number, number][],
};
const PAINT_CT = {
	entrance: TP(1940, 728), cervix: TP(1415, 728), body: TP(1180, 728), uterus: TP(1050, 728),
	ovaryA: TP(300, 464), ovaryB: TP(336, 950), funnelA: TP(400, 414),
	hornA: '', hornB: '', vagina: '', uterusBody: '',
	// the applicator enters from the left edge and runs along the middle of the vagina and cervix into the uterus
	tube: [[-4, 174], [40, 174], [110, 174], [180, 174], [250, 174], [296, 174]] as [number, number][],
};
export const CT = TRACT_PAINTED ? PAINT_CT : CODED_CT;
export const CowTract: React.FC<{x: number; y: number; s?: number; o?: number; at?: number; labels?: {text: string; at: number; x: number; y: number}[]}> = ({x, y, s = 1, o = 1, at = 0, labels = []}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 24);
	const wall = '#f1b5ab', line = '#c0766a';
	return (
		<g transform={`translate(${x},${y}) scale(${s})`} opacity={o * Math.min(1, p * 3)}>
			<rect x={-10} y={-10} width={580} height={360} rx={26} fill="#fffdf8" fillOpacity={0.7} stroke={PAPER_DEEP} strokeWidth={4} />
			{TRACT_PAINTED ? (
				<g transform={`translate(${1980 * TK},${10 - 213 * TK}) scale(${-TK},${TK})`}>
					<image href={staticFile(A.COW_TRACT)} x={0} y={0} width={2200} height={1400} />
				</g>
			) : null}
			{TRACT_PAINTED ? null : [CT.vagina, CT.uterusBody, CT.hornA, CT.hornB].map((d, i) => <path key={i} d={d} fill="none" stroke={line} strokeWidth={(i < 2 ? 40 : 26) + 6} strokeLinecap="round" />)}
			{TRACT_PAINTED ? null : [CT.vagina, CT.uterusBody, CT.hornA, CT.hornB].map((d, i) => <path key={'i' + i} d={d} fill="none" stroke={wall} strokeWidth={i < 2 ? 40 : 26} strokeLinecap="round" />)}
			{TRACT_PAINTED ? null : <ellipse cx={CT.cervix[0] + 8} cy={CT.cervix[1]} rx={11} ry={28} fill="#e0877b" stroke={line} strokeWidth={4} />}
			{TRACT_PAINTED ? null : [CT.ovaryA, CT.ovaryB].map((c, i) => <ellipse key={i} cx={c[0]} cy={c[1]} rx={26} ry={20} fill="#f6d9c8" stroke="#c9906f" strokeWidth={4} />)}
			{TRACT_PAINTED ? null : <path d="M410,52 C418,30 438,26 446,38" fill="none" stroke={line} strokeWidth={8} strokeLinecap="round" />}
			{labels.map((l, i) => <text key={i} x={l.x} y={l.y} opacity={prog(f, l.at, 14)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}} fill={INK}>{l.text}</text>)}
		</g>
	);
};
