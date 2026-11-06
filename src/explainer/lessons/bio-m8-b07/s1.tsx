// B8-07 scenes 1 to 5: the asbestos hook (a ban in 2003, cases today), the exposure, change, effect spine, then tobacco
// smoke's three pathways: lung cancer (carcinogens, DNA, mutations), COPD (inflammation, enzymes, lost walls, cilia and
// mucus, no mutation) and the arteries (plaque, carbon monoxide on haemoglobin, nicotine). The pathway strip owns the
// bottom of the frame from scene 2.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Damage, RepairBlob, SlimStrand, rungX} from '../bio-m6-b02/parts';
import {
	mw, AMBER, AMBER_INK, BLUE, Bracket, CARD, CellO, Chip, DrawPath, DropDots, EDGE, GREYT, GTag, INK, INK_SOFT, PathwayStrip, Pic, PicH, PicPair, RED, SMOKE_C, Svg, Sx, T, TEAL, Timeline, Title, Wisps,
	pbPt, prog, pulse, smooth, tlx, vis,
} from './parts';
import type {SBox, TL} from './parts';
import {FP, PL} from './assets';
import {K} from './common';

// ---------- the tobacco strip (scenes 3 to 9) ----------
export const SW = [420, 640, 560];
export const STRIP_Y = 862;
export type TobAt = {c0?: number; c1?: number; c2?: number; e0?: number; e1?: number; e2?: number; dim0?: number; dim1?: number; dim2?: number; hot?: SBox['hot']; hotE?: SBox['hot']};
const ON = -1000;
export const tobaccoBoxes = (t: TobAt): SBox[] => [
	{head: 'exposure', w: SW[0], thumbW: 120, rows: [{t: 'tobacco smoke', at: ON}], thumb: (x, y, w, h) => <Wisps a={[x + 14, y + h - 6]} b={[x + w - 10, y + 6]} n={3} spread={22} width={5} />},
	{head: 'change in cells or tissue', w: SW[1], slots: 3, splitAt: ON, hot: t.hot, rows: [
		...(t.c0 !== undefined ? [{t: 'DNA damage → mutations', at: t.c0, slot: 0, dim: t.dim0}] : []),
		...(t.c1 !== undefined ? [{t: 'inflammation → walls destroyed', at: t.c1, slot: 1, dim: t.dim1}] : []),
		...(t.c2 !== undefined ? [{t: 'damaged arteries, less O₂ carried', at: t.c2, slot: 2, dim: t.dim2}] : []),
	]},
	{head: 'effect on health', w: SW[2], slots: 3, splitAt: ON, hot: t.hotE, rows: [
		...(t.e0 !== undefined ? [{t: 'lung cancer risk', at: t.e0, slot: 0, dim: t.dim0}] : []),
		...(t.e1 !== undefined ? [{t: 'COPD', at: t.e1, slot: 1, dim: t.dim1}] : []),
		...(t.e2 !== undefined ? [{t: 'heart attack, stroke risk', at: t.e2, slot: 2, dim: t.dim2}] : []),
	]},
];
export const TobaccoStrip: React.FC<{t: TobAt; o?: number}> = ({t, o = 1}) => <PathwayStrip x={96} y={STRIP_Y} h={180} boxes={tobaccoBoxes(t)} o={o} />;

/** A dashed zoom line from a point on one plate to the edge of another, with a ring at the source. */
export const Zoomline: React.FC<{from: [number, number]; to: [number, number]; at: number; out?: number; color?: string}> = ({from, to, at, out, color = TEAL}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={from[0]} cy={from[1]} r={22} fill="none" stroke={color} strokeWidth={5} />
			<DrawPath d={`M${from[0] + 20},${from[1]} L${to[0]},${to[1]}`} at={at} dur={16} color={color} width={4} dash="12 9" />
		</g>
	);
};
/** A thin pointer from a label point to a feature, with a dot. */
export const Ptr: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; color?: string; o?: number}> = ({a, b, at, out, color = INK_SOFT, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10) * o;
	if (v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={12} color={color} width={3.5} /><circle cx={b[0]} cy={b[1]} r={8} fill={color} /></g>;
};
/** A copying fork marker (the strands open into a V), labelled at 30 px. */
const CopyFork: React.FC<{x: number; y: number; gap?: number}> = ({x, y, gap = 44}) => (
	<g>
		<path d={`M${x - 40},${y} L${x},${y} M${x - 40},${y + gap} L${x},${y + gap}`} stroke="#4f86ad" strokeWidth={5} strokeLinecap="round" />
		<path d={`M${x},${y - 6} L${x + 18},${y + gap / 2} L${x},${y + gap + 6}`} fill="#dcebf6" stroke="#4f86ad" strokeWidth={3} strokeLinejoin="round" />
		<Sx x={x - 10} y={y + gap + 44} text="copying" size={30} color="#4f86ad" anchor="middle" hand at={-1000} />
	</g>
);
/** Fade a label to dim (0.45) from `dim`. */
const Lab: React.FC<{x: number; y: number; t: string; at: number; dim?: number; out?: number; size?: number; w?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, t, at, dim, out, size = 40, w = 700, color = INK, anchor}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	return <g opacity={1 - 0.55 * d}><T x={x} y={y} text={t} size={size} w={w} color={color} at={at} out={out} anchor={anchor} /></g>;
};
export {Lab};

// ---------- 1. hook ----------
const K1 = K('hook', {banned: 'banned asbestos', y2003: '2003', hundreds: 'hundreds of Australians', meso: 'mesothelioma', decades: 'decades after', stopped: 'stopped', never: 'never get sick', q: "That's today's question"});
const TL1: TL = {x0: 820, x1: 1790, y: 330, yr0: 1940, yr1: 2025};
const DOTS1 = (() => {
	const out: [number, number][] = [];
	for (let yr = 2004; yr <= 2024; yr += 2) for (let k = 0; k < 3; k++) out.push([tlx(TL1, yr), 404 + k * 26]);
	return out;
})();
const CROWD = Array.from({length: 30}, (_, i) => [880 + (i % 15) * 62, 744 + Math.floor(i / 15) * 62] as [number, number]);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const crowd = prog(f, K1.never, 16);
	const sick = prog(f, K1.never + 30, 14);
	return (
		<Svg>
			<Title text="How does environmental exposure cause disease?" />
			<Pic p={PL.fibro} cx={400} cy={560} w={600} />
			<GTag x={400} y={800} text="old fibro sheeting, 1940s to 1980s" size={32} anchor="middle" />
			<Wisps a={[560, 650]} b={[700, 560]} n={2} spread={20} width={3} at={K1.banned} color="#c8c2b6" />
			<Timeline t={TL1} ticks={[1940, 1960, 1980, 2000, 2025]} at={K1.banned} />
			<g opacity={prog(f, K1.banned + 20, 14)}>
				<rect x={tlx(TL1, 1945)} y={316} width={tlx(TL1, 1985) - tlx(TL1, 1945)} height={28} rx={14} fill="#bdb6aa" opacity={0.55} />
				<Sx x={tlx(TL1, 1965)} y={300} text="fibro widely used" size={32} color={GREYT} anchor="middle" hand at={-1000} />
			</g>
			<g opacity={prog(f, K1.y2003, 12) * (1 - 0.0 * pulse(f, 0, 1))}>
				<DrawPath d={`M${tlx(TL1, 2003)},${270} L${tlx(TL1, 2003)},${500}`} at={K1.y2003} dur={12} color={RED} width={5} dash="12 8" />
				<Sx x={tlx(TL1, 2003) - 16} y={440} text="ban: 31 Dec 2003" size={42} color={RED} anchor="end" hand at={K1.y2003 + 6} />
			</g>
			<DropDots pts={DOTS1} at={K1.hundreds} step={3} r={10} color={AMBER_INK} />
			<Sx x={1790} y={510} text="new mesothelioma diagnoses each year (AIHW)" size={30} color={GREYT} anchor="end" hand at={K1.hundreds + 40} />
			<T x={820} y={600} w={980} text="mesothelioma: a cancer that asbestos can cause" size={44} at={K1.meso} />
			<Bracket xa={tlx(TL1, 1975)} xb={tlx(TL1, 2025)} y={236} at={K1.decades} label="decades later" size={42} />
			{crowd > 0.01 ? <g opacity={crowd}>
				<Sx x={880} y={706} text="breathed the same dust:" size={38} color={INK} hand at={-1000} />
				{CROWD.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={20} fill={(i === 7 || i === 19) && sick > 0.5 ? AMBER : '#cfc8bb'} stroke={(i === 7 || i === 19) && sick > 0.5 ? AMBER_INK : '#a59d90'} strokeWidth={3} />)}
				<Sx x={1790} y={706} text="most never get sick" size={38} color={AMBER_INK} anchor="end" hand at={K1.never + 30} />
			</g> : null}
		</Svg>
	);
};

// ---------- 2. one spine ----------
const K2 = K('one-spine', {spine: 'one spine', env: 'environmental causes', outside: 'outside the body', every: 'Every case', exposure: 'an exposure', real: 'real contact', change: 'a change in cells', effect: 'an effect on health', tobacco: 'tobacco smoke', three: 'three different diseases'});
export const SceneSpine: React.FC = () => {
	const f = useCurrentFrame();
	const env = prog(f, K2.env, 12);
	const others = 1 - 0.6 * prog(f, K2.tobacco, 14);
	const boxes: SBox[] = [
		{head: 'exposure', w: 470, showAt: K2.every, litAt: K2.exposure, thumbW: 150, rows: [{t: 'real contact: how much, how long', at: K2.real, out: K2.tobacco}, {t: 'tobacco smoke', at: K2.tobacco + 10}], thumb: (x, y, w, h) => <g><g opacity={1 - prog(f, K2.tobacco, 12)}><PicH p={PL.fibro} cx={x + w / 2} cy={y + h * 0.3} h={h * 0.4} /><PicH p={PL.sun} cx={x + w / 2} cy={y + h * 0.76} h={h * 0.42} /></g><Wisps a={[x + 12, y + h - 10]} b={[x + w - 10, y + 10]} n={3} spread={30} width={6} at={K2.tobacco} /></g>},
		{head: 'change in cells or tissue', w: 640, showAt: K2.every + 8, litAt: K2.change, slots: 3, splitAt: K2.three, thumbW: 250, rows: [{t: 'cells or tissue change', at: K2.change + 8, out: K2.three - 12}], thumb: (x, y, w, h) => <g><PicH p={PL.airway} cx={x + 50} cy={y + h / 2} h={h * 0.95} /><PicH p={PL.alv} cx={x + 170} cy={y + h / 2} h={h * 0.8} /></g>},
		{head: 'effect on health', w: 510, showAt: K2.every + 16, litAt: K2.effect, slots: 3, splitAt: K2.three, thumbW: 200, rows: [{t: 'a disease', at: K2.effect + 8, out: K2.three - 12}], thumb: (x, y, w, h) => <PicH p={PL.lungsS} cx={x + w / 2} cy={y + h / 2} h={h * 0.95} />},
	];
	return (
		<Svg>
			<Title text="One spine for every case" />
			<GTag x={96} y={160} text="b06: causes of non-infectious disease" size={30} />
			<rect x={96} y={226} width={560} height={84} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<Sx x={376} y={280} text="non-infectious disease: causes" size={36} color={INK} anchor="middle" hand at={-1000} />
			<path d="M260,310 L200,370 M500,310 L560,370" stroke={INK_SOFT} strokeWidth={4} fill="none" />
			<Chip x={200} y={372} text="inherited" size={38} color={INK_SOFT} ink={INK} anchor="middle" />
			<g opacity={0.5 + 0.5 * env}><Chip x={560} y={372} text="environmental" size={38} color={env > 0.5 ? BLUE : INK_SOFT} ink={INK} anchor="middle" glow={env} /></g>
			<Sx x={560} y={480} text="from outside the body" size={38} color={BLUE} anchor="middle" hand at={K2.outside} />
			<path d="M760,330 L860,330 M845,316 L860,330 L845,344" stroke={INK_SOFT} strokeWidth={4} fill="none" opacity={prog(f, K2.outside, 12)} />
			<g opacity={others}><Pic p={PL.fibro} cx={1430} cy={320} w={260} /><Sx x={1430} y={460} text="asbestos" size={36} color={INK} anchor="middle" hand at={-1000} /></g>
			<g opacity={others}><Pic p={PL.sun} cx={1700} cy={320} w={210} /><Sx x={1700} y={460} text="UV" size={36} color={INK} anchor="middle" hand at={-1000} /></g>
			<g>
				<rect x={940} y={210} width={250} height={210} rx={18} fill={CARD} stroke={vis(f, K2.tobacco, undefined, 12) > 0.5 ? AMBER_INK : EDGE} strokeWidth={3} />
				<Wisps a={[990, 400]} b={[1150, 230]} n={3} spread={30} width={7} />
				<Sx x={1065} y={460} text="tobacco smoke" size={36} color={INK} anchor="middle" hand at={-1000} />
			</g>
			<PathwayStrip x={96} y={540} h={290} boxes={boxes} size={44} headSize={40} at={K2.every} />
			<Sx x={960} y={900} text="exposure → change in cells or tissue → effect on health" size={46} color={BLUE} anchor="middle" hand at={K2.spine} />
			<Sx x={960} y={970} text="one exposure, three different diseases" size={44} color={AMBER_INK} anchor="middle" hand at={K2.three} />
		</Svg>
	);
};

// ---------- 3. pathway one: lung cancer ----------
const K3 = K('lung-cancer', {smoke: 'Smoke carries', carc: 'carcinogens', chem: 'chemicals that raise', reach: 'They reach', lining: 'cells lining', attach: 'attach to', seen: "You've seen", copied: 'copied before', mutation: 'becomes a mutation', build: 'mutations build up', genes: 'genes that control', dividing: 'dividing when', tumour: 'start of a tumour'});
const LU = {cx: 330, cy: 505, w: 560};
const AC = {cx: 900, cy: 515, w: 262};
export const SceneLung: React.FC = () => {
	const f = useCurrentFrame();
	const lp = pbPt(PL.lungs, LU.cx, LU.cy, LU.w);
	const ap = pbPt(PL.airway, AC.cx, AC.cy, AC.w);
	const [nx, ny] = ap(FP.nucleus[0], FP.nucleus[1]);
	const cell = vis(f, K3.lining, undefined, 16);
	const sx = 1090, sy = 440, pitch = 34, n = 16, dmg = 9;
	const fork = smooth(prog(f, K3.copied, 60));
	const fx = rungX(sx, 0, pitch) - 30 + (rungX(sx, dmg, pitch) - rungX(sx, 0, pitch) + 30) * fork;
	const mut = prog(f, K3.mutation, 12);
	const grow = prog(f, K3.dividing, 70);
	const PATCH: [number, number][] = [[0, 0], [52, 0], [-52, 0], [26, -45], [-26, -45], [26, 45], [-26, 45], [78, -45], [78, 45], [-78, 45], [104, 0], [0, -90]];
	return (
		<Svg>
			<Title text="Pathway 1: lung cancer" />
			<PicPair a={PL.lungs} b={PL.lungsS} cx={LU.cx} cy={LU.cy} w={LU.w} at={K3.carc} dur={40} />
			<Wisps a={lp(990, 120)} b={lp(990, 760)} n={2} spread={18} width={6} at={K3.smoke} />
			<Wisps a={lp(1040, 800)} b={lp(1300, 1080)} n={2} spread={16} width={5} at={K3.smoke + 10} />
			<Wisps a={lp(950, 800)} b={lp(700, 1080)} n={2} spread={16} width={5} at={K3.smoke + 10} />
			<GTag x={LU.cx} y={808} text="tar deposits" size={30} anchor="middle" at={K3.carc + 30} />
			<Zoomline from={lp(FP.bronchiR[0], FP.bronchiR[1])} to={[AC.cx - AC.w / 2 - 4, 400]} at={K3.lining} />
			<g opacity={cell}><Pic p={PL.airway} cx={AC.cx} cy={AC.cy} w={AC.w} /></g>
			<Sx x={AC.cx} y={192} text="airway lining cell" size={34} color={INK} anchor="middle" hand at={K3.lining + 10} />
			<DropDots pts={[[nx - 34, ny - 50], [nx + 30, ny - 40], [nx - 10, ny + 10], [nx + 36, ny + 34], [nx - 40, ny + 40]]} at={K3.attach} step={5} r={9} color="#3b3532" />
			{[[nx + 6, ny - 20], [nx - 22, ny + 28], [nx + 26, ny + 60]].map(([x, y], i) => {
				const a = prog(f, i < 2 ? K3.build + i * 12 : K3.genes, 10);
				return a > 0.01 ? <g key={i} opacity={a}><circle cx={x} cy={y} r={13} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} /></g> : null;
			})}
			<T x={1090} y={240} w={720} text="carcinogens: chemicals that raise cancer risk" size={44} at={K3.chem} out={K3.copied} />
			<Lab x={1090} y={340} t="they attach to the cell's DNA" at={K3.attach} dim={K3.copied} />
			<g opacity={vis(f, K3.copied, undefined, 12)}>
				<SlimStrand x={sx} y={sy} n={n} pitch={pitch} gap={46} lineW={4} />
				<Damage x={rungX(sx, dmg, pitch)} y={sy} o={1 - mut} pulse={pulse(f, K3.copied, 30)} r={12} />
				{mut > 0.01 ? <rect x={rungX(sx, dmg, pitch) - 12} y={sy - 6} width={24} height={58} rx={6} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} opacity={mut} /> : null}
				<CopyFork x={fx} y={sy} gap={46} />
				<RepairBlob x={rungX(sx, n - 2, pitch)} y={sy - 50} s={0.9} />
				<Sx x={rungX(sx, n - 2, pitch)} y={sy + 110} text="repair" size={32} color={INK_SOFT} anchor="middle" hand at={-1000} />
			</g>
			<GTag x={1090} y={530} text="Module 6: mutagens" size={28} at={K3.copied} />
			<Sx x={1090} y={404} text="copied before it's repaired" size={38} color={INK} hand at={K3.copied} />
			<Sx x={1090 + mw("copied before it's repaired", 38, true, 700) + 14} y={404} text="→ a mutation" size={42} color={AMBER_INK} hand at={K3.mutation} />
			<Lab x={1090} y={622} t="mutations build up in genes that control division" w={740} at={K3.build} dim={K3.dividing} size={40} />
			{grow > 0.01 ? <g>
				{PATCH.map(([dx, dy], i) => <CellO key={i} x={1220 + dx} y={772 + dy * 0.6} r={24} amb={1} o={prog(f, K3.dividing + i * 6, 10)} />)}
			</g> : null}
			<Lab x={1370} y={744} t="dividing when it shouldn't" at={K3.dividing} w={460} size={40} color={AMBER_INK} />
			<GTag x={1370} y={768} text="how: b09" size={28} at={K3.dividing + 20} />
			<Sx x={1600} y={840} text="start of a tumour" size={36} color={INK} hand at={K3.tumour} />
			<TobaccoStrip t={{c0: K3.build, e0: K3.tumour - 30, hot: [{slot: 0, at: K3.build}], hotE: [{slot: 0, at: K3.tumour - 30}]}} />
		</Svg>
	);
};

// ---------- 4. pathway two: COPD ----------
const K4 = K('copd', {no: "doesn't need", smoke: 'Smoke irritates', inflamed: 'inflamed', white: 'White blood cells', release: 'release enzymes', digest: 'digest the thin walls', many: 'Many small sacs', merge: 'merge', surface: 'much less surface', mucus: 'Mucus builds up', cilia: 'cilia', damaged: 'are damaged', copd: 'COPD', chronic: 'chronic obstructive', lost: 'the lost walls'});
const AL = {cx: 760, cy: 500, w: 540};
const AW = {cx: 170, cy: 470, w: 226};
export const SceneCOPD: React.FC = () => {
	const f = useCurrentFrame();
	const ap = pbPt(PL.alv, AL.cx, AL.cy, AL.w);
	const cp = pbPt(PL.airway, AW.cx, AW.cy, AW.w);
	const [cx0, cy0] = ap(FP.alvC[0], FP.alvC[1]);
	const infl = vis(f, K4.inflamed, K4.merge + 40, 16);
	const J = FP.alvJ.map(([u, v]) => ap(u, v));
	const wbc = smooth(prog(f, K4.white, 40));
	const START: [number, number][] = [[cx0 - 330, cy0 - 120], [cx0 + 330, cy0 - 160], [cx0 + 320, cy0 + 220], [cx0 - 320, cy0 + 220]];
	const enz = vis(f, K4.release, K4.merge + 20, 10);
	const bar = 1 - 0.62 * smooth(prog(f, K4.surface, 40));
	const ciliaTop = cp(1000, 240)[1], ciliaBase = cp(1000, FP.ciliaTop)[1];
	const cx1 = cp(780, 0)[0], cx2 = cp(1290, 0)[0];
	const flat = prog(f, K4.cilia, 20);
	const mucus = prog(f, K4.mucus, 30);
	return (
		<Svg>
			<Title text="Pathway 2: COPD, no mutation needed" />
			<Pic p={PL.airway} cx={AW.cx} cy={AW.cy} w={AW.w} />
			{flat > 0.01 ? <g opacity={flat}>
				<rect x={cx1 - 6} y={ciliaTop - 6} width={cx2 - cx1 + 12} height={ciliaBase - ciliaTop + 2} fill="#f3ede1" opacity={0.85} />
				{Array.from({length: 9}, (_, i) => <path key={i} d={`M${cx1 + 8 + i * ((cx2 - cx1 - 16) / 9)},${ciliaBase - 4} q14,-12 30,-8`} fill="none" stroke="#9a6f93" strokeWidth={4} strokeLinecap="round" />)}
			</g> : null}
			{mucus > 0.01 ? <g opacity={mucus}>{[[-60, -30], [-10, -48], [40, -34], [80, -16], [-90, -10]].map(([dx, dy], i) => <ellipse key={i} cx={AW.cx + dx} cy={ciliaBase + dy * (0.6 + 0.4 * mucus)} rx={34} ry={20} fill="#c9cfa4" stroke="#8f9568" strokeWidth={3} opacity={0.9} />)}</g> : null}
			<Lab x={56} y={790} t="cilia damaged, mucus builds up" w={330} size={36} at={K4.cilia} />
			<PicPair a={PL.alv} b={PL.alvE} cx={AL.cx} cy={AL.cy} w={AL.w} at={K4.merge} dur={44} />
			{infl > 0.01 ? <ellipse cx={cx0} cy={cy0 - 10} rx={300} ry={330} fill="#e0503c" opacity={infl * (0.1 + 0.06 * Math.sin(f / 9))} /> : null}
			{wbc > 0.01 ? J.map(([x, y], i) => {
				const [sx, sy] = START[i];
				const px = sx + (x - sx) * wbc, py = sy + (y - sy) * wbc;
				return <g key={i} opacity={vis(f, K4.white, K4.merge + 30, 12)}><path d={`M${px - 26},${py} C${px - 28},${py - 22} ${px + 4},${py - 30} ${px + 22},${py - 16} C${px + 34},${py} ${px + 20},${py + 24} ${px},${py + 22} C${px - 16},${py + 22} ${px - 24},${py + 12} ${px - 26},${py} Z`} fill="#f4f1e6" stroke="#8c86a8" strokeWidth={3} /><circle cx={px} cy={py} r={8} fill="#9b8fc0" /></g>;
			}) : null}
			{enz > 0.01 ? J.map(([x, y], i) => <g key={'e' + i} opacity={enz}>{[0, 1, 2, 3].map(k => { const u = ((f - K4.release) / 30 + k / 4 + i * 0.13) % 1; const a = k * 1.6 + i; return <circle key={k} cx={x + Math.cos(a) * 46 * u} cy={y + Math.sin(a) * 46 * u} r={6} fill={TEAL} opacity={1 - u} />; })}</g>) : null}
			<GTag x={1090} y={160} text="Year 11: alveoli, gas exchange" size={30} />
			<g>
				<Sx x={1110} y={262} text="surface for gas exchange" size={34} color={INK} hand at={-1000} />
				<rect x={1110} y={290} width={440} height={56} rx={12} fill={CARD} stroke={EDGE} strokeWidth={3} />
				<rect x={1114} y={294} width={432 * bar} height={48} rx={10} fill={TEAL} opacity={0.8} />
			</g>
			<Lab x={1110} y={420} t="stays inflamed for years" at={K4.inflamed} dim={K4.white} size={40} />
			<Lab x={1110} y={480} t="white blood cells release enzymes that digest the thin walls" w={700} at={K4.release} dim={K4.merge} size={40} />
			<Lab x={1110} y={600} t="fewer, bigger sacs: much less surface" w={700} at={K4.merge + 20} dim={K4.copd} size={40} color={AMBER_INK} />
			<T x={1110} y={700} w={720} text="COPD: chronic obstructive pulmonary disease" size={44} color={INK} at={K4.copd} />
			<GTag x={1110} y={760} text="emphysema + chronic bronchitis" size={28} at={K4.chronic + 20} />
			<Chip x={1500} y={760} text="lost walls don't grow back" size={32} color={AMBER_INK} at={K4.lost} />
			<TobaccoStrip t={{c0: ON, e0: ON, dim0: ON, c1: K4.digest, e1: K4.copd, hot: [{slot: 1, at: K4.digest}], hotE: [{slot: 1, at: K4.copd}]}} />
		</Svg>
	);
};

// ---------- 5. pathway three: blood vessels ----------
const K5 = K('blood-vessels', {chem: 'Chemicals in smoke', damage: 'damage the smooth', fatty: 'Fatty deposits', build: 'build up', plaque: 'plaque', narrows: 'narrows the artery', carbon: 'carbon monoxide', place: "oxygen's place", hb: 'haemoglobin', less: 'carries less oxygen', nicotine: 'nicotine', faster: 'beat faster', narrowed: 'A narrowed artery', attack: 'heart attack'});
const HT = {cx: 210, cy: 470, w: 330};
const AR = {cx: 800, cy: 500, w: 640};
const RB = {cx: 1550, cy: 560, w: 420};
export const SceneVessels: React.FC = () => {
	const f = useCurrentFrame();
	const hp = pbPt(PL.heart, HT.cx, HT.cy, HT.w);
	const arp = pbPt(PL.art, AR.cx, AR.cy, AR.w);
	const rp = pbPt(PL.rbc, RB.cx, RB.cy, RB.w);
	const fast = prog(f, K5.faster, 20);
	const period = 30 - 14 * fast;
	const beat = Math.pow(Math.max(0, Math.sin((f / period) * Math.PI * 2)), 6);
	const s = 1 + (0.025 + 0.02 * fast) * beat;
	const [lx, ly] = arp(FP.lining[0], FP.lining[1]);
	const [pqx, pqy] = arp(FP.plaque[0], FP.plaque[1]);
	const rbcOn = vis(f, K5.carbon, undefined, 14);
	const co = prog(f, K5.place, 16);
	const cells = [FP.rbcC[0], FP.rbcC[2]].map(([u, v]) => rp(u, v));
	return (
		<Svg>
			<Title text="Pathway 3: the arteries and the heart" />
			<g transform={`translate(${HT.cx},${HT.cy}) scale(${s}) translate(${-HT.cx},${-HT.cy})`}><Pic p={PL.heart} cx={HT.cx} cy={HT.cy} w={HT.w} /></g>
			<Zoomline from={hp(FP.coronary[0], FP.coronary[1])} to={[AR.cx - AR.w / 2 + 20, 420]} at={-1000} />
			<Sx x={HT.cx} y={250} text="coronary artery" size={32} color={INK} anchor="middle" hand at={-1000} />
			<PicPair a={PL.art} b={PL.artP} cx={AR.cx} cy={AR.cy} w={AR.w} at={K5.build} dur={44} />
			{[0, 1, 2, 3].map(i => <path key={i} d={`M${lx - 80 + i * 46},${ly + 14 + i * 10} l10,-12 l10,12 l10,-12`} fill="none" stroke={RED} strokeWidth={4} strokeLinecap="round" opacity={vis(f, K5.damage + i * 4, K5.build + 30, 10)} />)}
			<Lab x={1150} y={220} t="lining damaged" at={K5.damage} dim={K5.fatty} size={40} />
			<GTag x={1150} y={244} text="endothelium" size={28} at={K5.damage + 20} out={K5.fatty} />
			<Ptr a={[1140, 210]} b={[lx + 40, ly + 20]} at={K5.damage} out={K5.fatty} />
			<Ptr a={[1140, 310]} b={[pqx + 30, pqy + 20]} at={K5.plaque} out={K5.carbon + 30} color={AMBER_INK} />
			<T x={1150} y={320} w={680} text="plaque: fatty deposits and white blood cells narrow the artery" size={40} at={K5.plaque} out={K5.carbon + 30} color={INK} />
			<g opacity={rbcOn}><Pic p={PL.rbc} cx={RB.cx} cy={RB.cy} w={RB.w} /></g>
			{rbcOn > 0.01 ? cells.map(([x, y], i) => (
				<g key={i} opacity={rbcOn}>
					{[[-38, -6], [32, 10]].map(([dx, dy], k) => {
						const isCO = k === 0 && co > 0.5;
						return <g key={k}><circle cx={x + dx} cy={y + dy} r={27} fill={isCO ? '#5d5852' : '#e8f4f4'} stroke={isCO ? INK : TEAL} strokeWidth={3} /><Sx x={x + dx} y={y + dy + 10} text={isCO ? 'CO' : 'O₂'} size={27} color={isCO ? '#fffdf8' : TEAL} anchor="middle" weight={800} at={-1000} /></g>;
					})}
				</g>
			)) : null}
			<Lab x={1340} y={330} t="CO takes oxygen's place" w={480} at={K5.place} size={40} color={INK} />
			<GTag x={1350} y={790} text="Year 11: haemoglobin carries O₂" size={28} at={K5.hb} />
			<Lab x={56} y={750} t="nicotine: faster heartbeat" w={330} at={K5.nicotine} size={38} color={AMBER_INK} />
			<Sx x={890} y={852} text="one exposure, three changes" size={36} color={AMBER_INK} anchor="middle" hand at={K5.attack} />
			<TobaccoStrip t={{c0: ON, e0: ON, dim0: ON, c1: ON, e1: ON, dim1: ON, c2: K5.less, e2: K5.attack, hot: [{slot: 2, at: K5.less}], hotE: [{slot: 2, at: K5.attack}]}} />
			{void SMOKE_C}{void AMBER_INK}
		</Svg>
	);
};
