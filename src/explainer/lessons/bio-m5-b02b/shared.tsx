import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b2b/measured/lesson.json';
import {AMBER, AMBER_INK, BLUE, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, prog} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';
import {ART as B1ART} from '../bio-m5-b01/shared';
import type {ArtDef} from '../bio-m5-b01/shared';

export {
	AMBER, AMBER_INK, Arrow, Art, artH, BLUE, Body, Card, Chip, CORAL, DrawPath, dim, Enter, FONT_DISPLAY, FONT_HAND, GREEN, HandText, Heading, INK,
	INK_SOFT, Label, Overlay, prog, RED, Tag, Underline, W, H,
} from '../bio-m5-b01/shared';
export {Scribble, Trail, Note, Droplet, EggDot, SpermDot, WATER_LINE, SPERM} from '../bio-m5-b02a/shared';
export type {ArtDef};

export const S = (id: string): CueScene & {durationInFrames: number} => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

// Alpha bounding boxes measured with PIL (alpha > 20). Canvas 1600x1600 unless stated.
export const ART: Record<string, ArtDef> = {
	bee: {src: A.BEE, nat: [1600, 1600], box: [309, 227, 982, 1147]},
	flower: {src: A.FLOWER_CUT, nat: [1600, 1600], box: [324, 205, 953, 1189]},
	grass: {src: A.GRASS, nat: [1600, 1756], box: [468, 145, 663, 1467]},
	onion: {src: A.ONION, nat: [1600, 1782], box: [582, 147, 437, 1489]},
	potato: {src: A.POTATO, nat: [1600, 1600], box: [328, 418, 944, 764]},
	mint: {src: A.MINT, nat: [1344, 1856], box: [309, 251, 730, 1297]},
	bean: {src: A.BEAN_SEED, nat: [1600, 1600], box: [402, 242, 797, 1117]},
	seedling: {src: A.BEAN_SEEDLING, nat: [1600, 1600], box: [541, 151, 520, 1300]},
	ovule: {src: A.OVULE, nat: [1600, 1600], box: [519, 261, 563, 1078]},
	ovary: {src: A.OVARY, nat: [1600, 1600], box: [325, 634, 951, 332]},
	pod: {src: A.POD, nat: [1600, 1600], box: [325, 634, 951, 332]},
	grain: {src: A.GRAIN, nat: [1628, 1600], box: [544, 373, 558, 844]},
	// the grain alone (top of the grain plate), for the male-side pop-out
	grainOnly: {src: A.GRAIN, nat: [1628, 1600], box: [708, 372, 287, 293]},
	bagged: {src: A.BAGGED, nat: [1652, 1600], box: [397, 263, 877, 1035]},
	// brush plate delivered; tube overlay still a stand-in (tube is coded)
	brush: {src: A.PAINTBRUSH, nat: [1683, 1600], box: [332, 251, 1136, 1081]},
	tubeOverlay: {src: A.TUBE_OVERLAY, nat: [1600, 1600], box: [324, 205, 953, 1189]},
	// painted icon pack (alpha > 20 boxes as [x, y, w, h])
	stepLand: {src: A.STEP_LAND, nat: [1600, 1600], box: [160, 201, 1280, 1198]},
	stepTube: {src: A.STEP_TUBE, nat: [1600, 1600], box: [160, 201, 1280, 1198]},
	stepJoin: {src: A.STEP_JOIN, nat: [1600, 1600], box: [303, 302, 993, 994]},
	stepSeed: {src: A.STEP_SEED, nat: [1600, 1600], box: [444, 313, 712, 973]},
	// zygote set: one shared crop (union of 1, 2, 4, 8) keeps the centre fixed while cells divide
	zyg1: {src: A.ZYG1, nat: [1600, 1600], box: [193, 226, 1215, 1148]},
	zyg2: {src: A.ZYG2, nat: [1600, 1600], box: [193, 226, 1215, 1148]},
	zyg4: {src: A.ZYG4, nat: [1600, 1600], box: [193, 226, 1215, 1148]},
	zyg8: {src: A.ZYG8, nat: [1600, 1600], box: [193, 226, 1215, 1148]},
	embryo: {src: A.EMBRYO, nat: [1600, 1600], box: [337, 233, 926, 1132]},
	propParent: {src: A.PROP_PARENT, nat: [1600, 1600], box: [357, 196, 885, 1208]},
	// piece and rooting share one crop so the cutting does not move when roots appear
	propPiece: {src: A.PROP_PIECE, nat: [1600, 1600], box: [214, 160, 1171, 1280]},
	propRooting: {src: A.PROP_ROOTING, nat: [1600, 1600], box: [214, 160, 1171, 1280]},
	propNew: {src: A.PROP_NEW, nat: [1600, 1600], box: [490, 242, 621, 1118]},
	beeFly: {src: A.BEE_FLY, nat: [1600, 1600], box: [198, 318, 1210, 966]},
	waterPollen: {src: A.WATER_POLLEN, nat: [2200, 1600], box: [279, 280, 1650, 1030]},
	dispWind: {src: A.DISP_WIND, nat: [2200, 1600], box: [246, 161, 1703, 1278]},
	dispWater: {src: A.DISP_WATER, nat: [2200, 1600], box: [227, 188, 1748, 1218]},
	dispAnimal: {src: A.DISP_ANIMAL, nat: [2200, 1600], box: [221, 322, 1759, 956]},
	seedPara: {src: A.SEED_PARA, nat: [1600, 1600], box: [280, 161, 1038, 1279]},
	farFence: {src: A.FAR_FENCE, nat: [2200, 800], box: [221, 204, 1758, 391]},
	farBare: {src: A.FAR_BARE, nat: [2200, 800], box: [265, 191, 1669, 489]},
	farSprout: {src: A.FAR_SPROUT, nat: [2200, 800], box: [265, 191, 1669, 489]},
	// reused B1 plates
	runner: B1ART.runner, strawFlower: B1ART.flower, cloneRow: B1ART.cloneRow, seedlings: B1ART.seedlings,
};

export const TEAL = '#2a9d8f';
export const POLLEN = '#f2c230';
export const MALE = '#b8781a';
export const FEMALE = '#d4614a';
export const GOLD = '#e8b73a';

/** Map plate box coordinates to screen coordinates for a plate placed at x,y with width w. */
export const mapper = (a: ArtDef, x: number, y: number, w: number) => (bx: number, by: number): [number, number] => [x + (bx * w) / a.box[2], y + (by * w) / a.box[2]];

/** Point at fraction t (0..1) along a polyline. */
export const along = (pts: [number, number][], t: number): [number, number] => {
	const lens: number[] = [];
	let total = 0;
	for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); lens.push(l); total += l; }
	let d = Math.max(0, Math.min(1, t)) * total;
	for (let i = 0; i < lens.length; i++) {
		if (d <= lens[i] || i === lens.length - 1) { const u = lens[i] ? Math.min(1, d / lens[i]) : 0; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u]; }
		d -= lens[i];
	}
	return pts[0];
};
export const pathOf = (pts: [number, number][]) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

// Shared flower stage geometry (stigma, style channel, anthers and ovules in plate box coordinates).
export const FL = {x: 880, y: 110, w: 600};
export const fp = mapper(ART.flower, FL.x, FL.y, FL.w);
export const ANTHERS: [number, number][] = [[270, 395], [350, 300], [600, 310], [680, 390]];
export const TUBE_BOX: [number, number][] = [[470, 140], [468, 200], [466, 300], [464, 420], [463, 540], [468, 600], [488, 636], [512, 654], [527, 664]];
export const EGG_BOX: [number, number] = [527, 676];

/** True when the painted plate is delivered and listed in HAVE. */
export const has = (a: ArtDef) => A.HAVE.has(a.src);

/** Painted plate inside an SVG: the plate's alpha box goes to (x, y) at width w. */
export const SvgArt: React.FC<{a: ArtDef; x: number; y: number; w: number; o?: number; rot?: number; filter?: string; clip?: boolean}> = ({a, x, y, w, o = 1, rot = 0, filter, clip}) => {
	const sc = w / a.box[2];
	const h = a.box[3] * sc;
	return (
		<g opacity={o} transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined}>
			{clip ? <clipPath id={`clip-${a.box.join('-')}`}><ellipse cx={x + w / 2} cy={y + h / 2 - h * 0.01} rx={w * 0.515} ry={h * 0.5} /></clipPath> : null}
			<image clipPath={clip ? `url(#clip-${a.box.join('-')})` : undefined} href={staticFile(a.src)} x={x - a.box[0] * sc} y={y - a.box[1] * sc} width={a.nat[0] * sc} height={a.nat[1] * sc} style={filter ? {filter} : undefined} />
		</g>
	);
};
/** Same, centred on (cx, cy) with the longest side of the alpha box = d. */
export const SvgArtC: React.FC<{a: ArtDef; cx: number; cy: number; d: number; o?: number; rot?: number}> = ({a, cx, cy, d, o = 1, rot = 0}) => {
	const sc = d / Math.max(a.box[2], a.box[3]);
	const w = a.box[2] * sc, h = a.box[3] * sc;
	return <SvgArt a={a} x={cx - w / 2} y={cy - h / 2} w={w} o={o} rot={rot} />;
};

/** Group fade with optional fade out. */
export const Fade: React.FC<{at: number; out?: number; children: React.ReactNode; dur?: number}> = ({at, out, children, dur = 12}) => {
	const f = useCurrentFrame();
	return <g opacity={prog(f, at, dur) * (out === undefined ? 1 : 1 - prog(f, out, dur))}>{children}</g>;
};
export const FadeDiv: React.FC<{at: number; out?: number; children: React.ReactNode; style?: React.CSSProperties}> = ({at, out, children, style}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', inset: 0, opacity: prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 14)), pointerEvents: 'none', ...style}}>{children}</div>;
};

export const Pin: React.FC<{x: number; y: number; at: number; color: string; label?: string; dx?: number; out?: number}> = ({x, y, at, color, label, dx = 0, out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 10);
	return (
		<g opacity={p * (out === undefined ? 1 : 1 - prog(f, out, 12))} transform={`translate(${x},${y - (1 - p) * 40})`}>
			<path d="M0,0 C-26,-30 -22,-58 0,-58 C22,-58 26,-30 0,0Z" fill={color} stroke="#fff" strokeWidth={3} />
			<circle cx={0} cy={-38} r={8} fill="#fff" />
			{label ? <text x={dx} y={-72} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={color}>{label}</text> : null}
		</g>
	);
};

export const NameKey: React.FC<{items: {text: string; color: string; at: number}[]; top?: number}> = ({items, top = 240}) => {
	const f = useCurrentFrame();
	const first = Math.min(...items.map(i => i.at));
	return (
		<div style={{position: 'absolute', left: 96, top, width: 380, opacity: prog(f, first - 6, 14)}}>
			<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 20, letterSpacing: 3, color: INK_SOFT, marginBottom: 6}}>NAME KEY</div>
			{items.map(i => (
				<Enter key={i.text} at={i.at} dy={10} style={{display: 'flex', alignItems: 'center', gap: 14, height: 50, borderLeft: `6px solid ${i.color}`, paddingLeft: 14, marginBottom: 4}}>
					<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: i.color, whiteSpace: 'nowrap'}}>{i.text}</span>
				</Enter>
			))}
		</div>
	);
};
export const KEY_MALE = [{text: 'stamen', color: MALE}, {text: 'anther', color: MALE}, {text: 'pollen grain', color: MALE}];
export const KEY_FEMALE = [{text: 'stigma', color: FEMALE}, {text: 'style', color: FEMALE}, {text: 'ovary', color: FEMALE}, {text: 'ovule', color: FEMALE}, {text: 'egg cell', color: FEMALE}];
export const fullKey = (at: number, extra: {text: string; color: string; at: number}[] = []) => [...KEY_MALE, ...KEY_FEMALE].map(k => ({...k, at})).concat(extra);

// ---------- sequence strip: land, tube, join, seed ----------
export type SeqKind = 'land' | 'tube' | 'join' | 'seed';
const SEQ_ART: Record<SeqKind, ArtDef> = {land: ART.stepLand, tube: ART.stepTube, join: ART.stepJoin, seed: ART.stepSeed};
export const SeqIcon: React.FC<{k: SeqKind; x: number; y: number; s?: number}> = ({k, x, y, s = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		{has(SEQ_ART[k]) ? <SvgArtC a={SEQ_ART[k]} cx={0} cy={0} d={56} /> : null}
		{!has(SEQ_ART[k]) && k === 'land' ? (
			<>
				<path d="M-16,-4 Q0,-22 16,-4" fill="#e8f1c8" stroke={FEMALE} strokeWidth={4} strokeLinecap="round" />
				<path d="M0,-6 L0,22" stroke={FEMALE} strokeWidth={5} strokeLinecap="round" />
				<circle cx={0} cy={-15} r={6} fill={POLLEN} stroke={AMBER_INK} strokeWidth={2} />
			</>
		) : null}
		{!has(SEQ_ART[k]) && k === 'tube' ? (
			<>
				<circle cx={-8} cy={-18} r={7} fill={POLLEN} stroke={AMBER_INK} strokeWidth={2} />
				<path d="M-8,-14 C-18,0 10,8 6,22" fill="none" stroke={AMBER_INK} strokeWidth={9} strokeLinecap="round" />
				<path d="M-8,-14 C-18,0 10,8 6,22" fill="none" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
			</>
		) : null}
		{!has(SEQ_ART[k]) && k === 'join' ? (
			<>
				<circle cx={-6} cy={2} r={16} fill="#f6b0a4" stroke={FEMALE} strokeWidth={3} />
				<ellipse cx={12} cy={2} rx={9} ry={6} fill={BLUE} />
				<path d="M20,2 q8,-4 14,0" stroke={BLUE} strokeWidth={3} fill="none" strokeLinecap="round" />
			</>
		) : null}
		{!has(SEQ_ART[k]) && k === 'seed' ? (
			<>
				<ellipse cx={0} cy={2} rx={14} ry={20} fill="#c9a86a" stroke="#6b4b1d" strokeWidth={3} />
				<path d="M-3,-10 C6,-2 6,8 -2,16" fill="none" stroke="#6b4b1d" strokeWidth={2.5} />
			</>
		) : null}
	</g>
);
export const SeqStrip: React.FC<{x?: number; y?: number; items: {k: SeqKind; at: number}[]}> = ({x = 560, y = 892, items}) => {
	const f = useCurrentFrame();
	return (
		<div style={{position: 'absolute', left: x, top: y, display: 'flex', gap: 22}}>
			{items.map(it => {
				const p = prog(f, it.at, 12);
				return (
					<div key={it.k} style={{width: 168, height: 66, borderRadius: 999, background: '#fffdf8', border: `3px solid ${AMBER}`, display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 12, opacity: p, transform: `translateY(${(1 - p) * 20}px)`, boxShadow: '0 8px 18px rgba(60,45,20,0.08)'}}>
						<svg width={56} height={56} viewBox="-30 -30 60 60"><SeqIcon k={it.k} x={0} y={0} s={0.95} /></svg>
						<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: AMBER_INK}}>{it.k}</span>
					</div>
				);
			})}
		</div>
	);
};

// ---------- small coded drawings ----------
export const BeeIcon: React.FC<{x: number; y: number; s?: number; o?: number; rot?: number}> = ({x, y, s = 1, o = 1, rot = 0}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<ellipse cx={-4} cy={-24} rx={22} ry={11} fill="#dbeaf6" stroke={INK_SOFT} strokeWidth={2.5} opacity={0.9} transform="rotate(-18 -4 -24)" />
		<ellipse cx={0} cy={0} rx={34} ry={21} fill={POLLEN} stroke={INK} strokeWidth={3.5} />
		<path d="M-6,-19 Q-12,0 -6,19 M10,-19 Q4,0 10,19" fill="none" stroke={INK} strokeWidth={7} />
		<circle cx={-38} cy={-2} r={13} fill="#4b3a2a" stroke={INK} strokeWidth={3} />
		<circle cx={-43} cy={-5} r={2.6} fill="#fff" />
		<path d="M-8,18 l-5,14 M8,18 l4,14" stroke={INK} strokeWidth={3.5} strokeLinecap="round" />
	</g>
);

export const Specks: React.FC<{pts: [number, number][]; r?: number; o?: number}> = ({pts, r = 5, o = 1}) => (
	<g opacity={o}>{pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={r} fill={POLLEN} stroke={AMBER_INK} strokeWidth={1.4} />)}</g>
);

/** Coded paintbrush with its bristle tip at (x,y). Used while the painted plate is not delivered. */
export const Brush: React.FC<{x: number; y: number; s?: number; o?: number; rot?: number}> = ({x, y, s = 1, o = 1, rot = 38}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		<path d="M-8,0 C-14,-26 -10,-44 0,-52 C10,-44 14,-26 8,0 C4,6 -4,6 -8,0Z" fill="#e9d6b0" stroke={INK} strokeWidth={3} />
		<rect x={-9} y={-92} width={18} height={42} rx={4} fill="#9aa7b4" stroke={INK} strokeWidth={3} />
		<rect x={-7} y={-250} width={14} height={160} rx={7} fill="#b5703a" stroke={INK} strokeWidth={3} />
		<circle cx={-3} cy={-2} r={4} fill={POLLEN} /><circle cx={4} cy={4} r={3.4} fill={POLLEN} />
	</g>
);

export const Cross: React.FC<{x: number; y: number; s?: number; at: number; color?: string}> = ({x, y, s = 1, at, color = '#c4432f'}) => (
	<g>
		<DrawPath d={`M${x - 22 * s},${y - 22 * s} L${x + 22 * s},${y + 22 * s}`} at={at} dur={8} color={color} width={7} />
		<DrawPath d={`M${x + 22 * s},${y - 22 * s} L${x - 22 * s},${y + 22 * s}`} at={at + 6} dur={8} color={color} width={7} />
	</g>
);

export const PaperPill: React.FC<{children: React.ReactNode; color?: string; size?: number}> = ({children, color = INK, size = 40}) => (
	<span style={{display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, background: '#fffdf8', border: `3px solid ${PAPER_DEEP}`, borderRadius: 18, padding: '0 18px 4px', whiteSpace: 'nowrap'}}>{children}</span>
);
