import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Arrow, DrawPath, FONT_HAND, GreyTag, Hand, Heading, INK, INK_SOFT, MStrip, Overlay, PenTap, Pill,
	prog, S, Scribble, STRIP_SCROLL, vis, Coin,
} from './shared';
import {AN, camAt, CD, Dissolve, Morph, Pieces, PL, Recombs, Ring, Stage, toS, smooth} from '../bio-m5-b05a/cd';
import type {Base, Cam, Piece} from '../bio-m5-b05a/cd';

// Revision 7: meiosis I and II crossfade through the brief 88 painted stage plates on one cell canvas, so the cell changes
// shape with the stage. Chromosomes are painted in; travelling chromosomes are painted crops over a dissolve of the empty
// plates. The crossed-over segment (one chromatid of each long homologue) is recoloured on the painted plates (cd.tsx
// RECOMB). The plates after metaphase I show plum long with teal short at the same end, which is line-up 2 in scene 6b,
// so the division follows line-up 2 (screen tag). Visual only; narration unchanged.

const ease3 = Easing.inOut(Easing.cubic);
const kf = (f: number, fr: number[], v: number[]) => interpolate(f, fr, v, {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease3});
const CAM1: Cam = {zoom: 1.05, fx: 1000, fy: 980};

/** m1-prophase to m1-metaphase: the four chromosomes travel to the middle (pink long, teal long, pink short, teal short). */
const LINE_UP: Piece[] = [
	{a: [825, 950], b: [875, 885], boxA: [690, 620, 875, 1300], boxB: [790, 600, 960, 1130]},
	{a: [925, 950], b: [1125, 885], boxA: [875, 640, 1010, 1300], boxB: [1040, 600, 1210, 1130]},
	{a: [1155, 1050], b: [1125, 1245], boxA: [1070, 860, 1207, 1250], boxB: [1050, 1110, 1200, 1390]},
	{a: [1260, 1050], b: [875, 1245], boxA: [1207, 870, 1310, 1260], boxB: [800, 1110, 950, 1390]},
];
/** m1-metaphase to m1-anaphase: whole X shapes travel; centromeres stay whole. */
const ANA1: Piece[] = [
	{a: [875, 885], b: [580, 900], boxA: [790, 600, 960, 1130], boxB: [540, 740, 975, 1030]},
	{a: [1125, 885], b: [1435, 900], boxA: [1040, 600, 1210, 1130], boxB: [1050, 740, 1470, 1030]},
	{a: [875, 1245], b: [620, 1125], boxA: [800, 1110, 950, 1390], boxB: [590, 1010, 870, 1225]},
	{a: [1125, 1245], b: [1405, 1130], boxA: [1050, 1110, 1200, 1390], boxB: [1130, 1035, 1440, 1230]},
];
/** m1-anaphase to m1-telophase: each chromosome settles in its new nucleus. */
const TEL1: Piece[] = [
	{a: [580, 900], b: [575, 1010], boxA: [540, 740, 975, 1030], boxB: [480, 740, 655, 1250]},
	{a: [620, 1125], b: [740, 1010], boxA: [590, 1010, 870, 1225], boxB: [668, 870, 805, 1180]},
	{a: [1435, 900], b: [1325, 1010], boxA: [1050, 740, 1470, 1030], boxB: [1225, 740, 1410, 1250]},
	{a: [1405, 1130], b: [1490, 1010], boxA: [1130, 1035, 1440, 1230], boxB: [1418, 875, 1555, 1175]},
];

// ---------- 6a. Metaphase I: the pairs line up ----------
export const SceneMetaphaseOne: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('metaphase-one-line-up'), {
		end: 'At the end', pro: 'prophase one', brk: 'breaks down', meta: 'in metaphase one', line: 'line up', across: 'across the middle', one: 'one partner', each: 'each end',
	});
	// pull back from the crossing-over close-up to the whole cell, its nucleus still whole
	const cam = camAt(f, [[0, 2.0, 870, 960], [44, CAM1.zoom, CAM1.fx, CAM1.fy]]);
	const P = (x: number, y: number) => toS(cam, x, y);
	const tBrk = prog(f, c.brk, 40);
	const tLine = prog(f, c.line, 58);
	const done = tLine >= 1;
	const envPt = P(1010 + 475 * 0.7, 975 - 475 * 0.7);
	return (
		<>
			<Heading items={[[0, 'Metaphase I: the pairs line up']]} size={60} />
			<Overlay>
				<Stage cam={cam} srcs={[CD('m1-prophase'), CD('m1-metaphase'), CD('m1-prophase', true), CD('m1-metaphase', true)]}>
					{done ? <><PL src={CD('m1-metaphase')} /><Recombs plate="m1-metaphase" /></> : (
						<>
							<Dissolve a={CD('m1-prophase', true)} b={CD('m1-metaphase', true)} t={tBrk} />
							<Pieces A={CD('m1-prophase')} B={CD('m1-metaphase')} move={tLine} fade={smooth(0.35, 0.8, tLine)} pieces={LINE_UP} />
						</>
					)}
				</Stage>
				<g opacity={vis(f, c.brk - 10, c.brk + 50, 10)}><Ring x={envPt[0]} y={envPt[1]} r={40} /></g>
			</Overlay>
			<Hand at={c.brk - 6} out={c.brk + 56} x={1480} y={250} size={46} w={360}>nuclear envelope breaks down</Hand>
			<Pill at={c.across + 40} x={P(1250, 885)[0] + 10} y={P(1250, 885)[1] - 30} size={34}>one homologous pair</Pill>
			<Pill at={c.across + 46} x={P(1250, 1245)[0] + 10} y={P(1250, 1245)[1] - 30} size={34}>one homologous pair</Pill>
			<Hand at={c.one} x={96} y={330} size={42} w={300}>one partner faces each end</Hand>
			<MStrip at={[-100, c.meta, null, null, null, null, null, null]} active={f >= c.meta ? 1 : 0} />
		</>
	);
};

// ---------- 6b. Chance and independent assortment ----------
const LONG_BOX: [number, number, number, number] = [760, 590, 1240, 1128];
const SHORT_BOX: [number, number, number, number] = [775, 1112, 1225, 1398];
/** One metaphase I cell. sl, ss: horizontal scale of the long and short pair (1 as painted, -1 mirrored: the pair faces the other way). */
const M1Board: React.FC<{base: Base; sl: number; ss: number; o?: number}> = ({base, sl, ss, o = 1}) => (
	<Stage cam={{zoom: 1, fx: 1000, fy: 980}} base={base} o={o} win={null}>
		<PL src={CD('m1-metaphase', true)} />
		<g transform={`translate(1000,0) scale(${sl.toFixed(4)},1) translate(-1000,0)`}>
			<PL src={CD('m1-metaphase')} box={LONG_BOX} feather={30} />
			<Recombs plate="m1-metaphase" />
		</g>
		<g transform={`translate(1000,0) scale(${ss.toFixed(4)},1) translate(-1000,0)`}>
			<PL src={CD('m1-metaphase')} box={SHORT_BOX} feather={30} />
		</g>
	</Stage>
);
export const SceneAssortment: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('independent-assortment'), {
		chance: 'is chance', each: 'each pair decides', here: 'Here plum', left: 'face left', another: 'Another cell', teal: 'teal short', ia: 'independent assortment',
	});
	// o = -1: the plum partner faces left. The plate shows plum long left and plum short right.
	const o1 = kf(f, [c.chance + 6, c.chance + 26, c.chance + 46], [-1, 1, -1]);
	const o2 = kf(f, [c.each + 6, c.each + 26, c.each + 46], [1, -1, -1]);
	const sh = prog(f, c.another, 44);
	const base1: Base = {cx: 960 + (520 - 960) * sh, cy: 540 + (500 - 540) * sh, size: 820 + (560 - 820) * sh};
	const base2: Base = {cx: 1400, cy: 500, size: 560};
	const ghost = prog(f, c.another + 14, 24);
	const o2g = kf(f, [c.teal - 30, c.teal], [-1, 1]);
	const P1 = (x: number, y: number) => toS({zoom: 1, fx: 1000, fy: 980}, x, y, base1);
	return (
		<>
			<Heading items={[[0, 'Which way does each pair face?']]} size={60} />
			<Overlay>
				<M1Board base={base1} sl={-o1} ss={o2} />
				<M1Board base={base2} sl={1} ss={o2g} o={ghost} />
				{/* which way each pair faces: a ring on the plum partner while that pair flips, until "face left" (no coin discs) */}
				{(() => {
					const pl = P1(1000 + (875 - 1000) * -o1, 868), ps = P1(1000 + (1125 - 1000) * o2, 1245);
					const k = base1.size / 2000;
					return (
						<>
							<g opacity={vis(f, c.chance, c.left + 30, 10) * (1 - sh)}><ellipse cx={pl[0]} cy={pl[1]} rx={95 * k} ry={290 * k} fill="none" stroke={AMBER} strokeWidth={5} /></g>
							<g opacity={vis(f, c.each, c.left + 30, 10) * (1 - sh)}><ellipse cx={ps[0]} cy={ps[1]} rx={85 * k} ry={170 * k} fill="none" stroke={AMBER} strokeWidth={5} /></g>
						</>
					);
				})()}
			</Overlay>
			<Hand at={c.here} out={c.another} x={96} y={330} size={42} w={300} color={AMBER_INK}>plum long and plum short face left</Hand>
			<Hand at={c.here} x={base1.cx - 200} y={730} size={46} w={400} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center', opacity: sh}}>line-up 1</span></Hand>
			<Hand at={c.another + 30} x={1200} y={730} size={46} w={400} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>line-up 2</span></Hand>
			<Hand at={c.ia} x={480} y={790} size={68} w={960}><span style={{display: 'block', textAlign: 'center'}}>independent assortment</span></Hand>
			<GreyTag at={c.ia + 24} x={530} y={186} text="each pair lines up independently of the other pairs" size={30} />
			<MStrip at={[-100, -100, null, null, null, null, null, null]} active={1} />
		</>
	);
};

// ---------- 7. Anaphase I and telophase I ----------
export const SceneFirstDivision: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('first-division'), {
		ana: 'In anaphase one', pull: 'the fibres pull', apart: 'apart', dont: 'centromeres do not', each: 'Each end', kind: 'one of each kind', set: ['one set', 1], telo: 'Telophase and', fin: 'finish the first', two: 'there are two', half: 'half the chromosome', that: 'That is how',
	});
	const cam = CAM1;
	const P = (x: number, y: number) => toS(cam, x, y);
	const a = prog(f, c.pull, 110);
	const tt = prog(f, c.fin - 10, 60);
	const cenL = AN.m1telophase.cen.map(([x, y]) => P(x, y));
	const penL: [number, number][] = [cenL[0], cenL[1]];
	const penR: [number, number][] = [cenL[2], cenL[3]];
	const anaL = P(660, 1010), anaR = P(1340, 1010);
	const vCen = P(580, 900);
	const cellBot = P(0, 1540)[1];
	return (
		<>
			<Heading items={[[0, 'Meiosis I: the first division']]} size={60} />
			<Overlay>
				<Stage cam={cam} srcs={[CD('m1-metaphase'), CD('m1-anaphase'), CD('m1-telophase'), CD('m1-metaphase', true), CD('m1-anaphase', true), CD('m1-telophase', true)]}>
					{a <= 0 ? <><PL src={CD('m1-metaphase')} /><Recombs plate="m1-metaphase" /></>
						: a < 1 ? <Morph A={CD('m1-metaphase')} B={CD('m1-anaphase')} t={a} pieces={ANA1} fade={[0.3, 0.75]} />
						: tt <= 0 ? <><PL src={CD('m1-anaphase')} /><Recombs plate="m1-anaphase" o={prog(f, c.pull + 110, 12)} /></>
						: tt < 1 ? <Morph A={CD('m1-anaphase')} B={CD('m1-telophase')} t={tt} pieces={TEL1} />
						: <><PL src={CD('m1-telophase')} /><Recombs plate="m1-telophase" o={prog(f, c.fin + 50, 12)} /></>}
				</Stage>
				{/* the parent, small, for the halving */}
				<g opacity={prog(f, c.half, 16)}>
					<Stage cam={{zoom: 1, fx: 1000, fy: 980}} base={{cx: 960, cy: 250, size: 150}} win={null}><PL src={CD('m1-metaphase')} /></Stage>
					<text x={1050} y={262} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36}} fill={INK_SOFT}>parent: 4</text>
					<Arrow x1={900} y1={300} x2={760} y2={350} at={c.half} color={AMBER_INK} width={5} />
					<Arrow x1={1020} y1={300} x2={1160} y2={350} at={c.half + 6} color={AMBER_INK} width={5} />
				</g>
				{/* the centromere stays whole */}
				<g opacity={vis(f, c.dont + 22, c.telo - 6, 10)}><Ring x={vCen[0]} y={vCen[1]} r={30} /></g>
				{/* one of each kind: one set at each end */}
				<g opacity={vis(f, c.set, c.telo - 12, 10)}>
					<Scribble cx={anaL[0]} cy={anaL[1]} rx={120} ry={110} at={c.set} color={AMBER_INK} seed={4} />
					<Scribble cx={anaR[0]} cy={anaR[1]} rx={120} ry={110} at={c.set + 10} color={AMBER_INK} seed={9} />
				</g>
				<PenTap pts={penL} at={[c.two + 20, c.two + 38]} badge={[40, -40]} out={c.half + 30} />
				<PenTap pts={penR} at={[c.two + 60, c.two + 78]} badge={[40, -40]} showPen={false} />
			</Overlay>
			<GreyTag at={0} out={c.dont} x={1450} y={186} text="following line-up 2" size={28} />
			<Hand at={c.dont + 4} out={c.each + 10} x={96} y={300} size={42} w={320}>centromere stays whole: chromatids not separated</Hand>
			<Hand at={c.kind + 12} out={c.telo - 10} x={96} y={300} size={42} w={320}>one of each kind at each end: one set</Hand>
			<Pill at={c.telo + 24} out={c.fin + 20} x={1480} y={300} size={40}>cytokinesis</Pill>
			<Hand at={c.two + 8} x={P(650, 0)[0] - 160} y={cellBot + 6} size={36} w={320} color={INK}><span style={{display: 'block', textAlign: 'center'}}>2 chromosomes</span></Hand>
			<Hand at={c.two + 56} x={P(1400, 0)[0] - 160} y={cellBot + 6} size={36} w={320} color={INK}><span style={{display: 'block', textAlign: 'center'}}>2 chromosomes</span></Hand>
			<GreyTag at={c.two + 30} x={P(650, 0)[0] - 90} y={cellBot + 52} text="4 chromatids" size={24} />
			<GreyTag at={c.two + 70} x={P(1400, 0)[0] - 90} y={cellBot + 52} text="4 chromatids" size={24} />
			<Hand at={c.half + 6} x={1450} y={380} size={40} w={400} color={AMBER_INK}>half the number: haploid (each chromosome still doubled)</Hand>
			<MStrip at={[-100, -100, c.ana, c.telo, null, null, null, null]} active={f >= c.telo ? 3 : 2} />
		</>
	);
};

// ---------- 8. Meiosis II ----------
/** pair-metaphase to pair-anaphase: each X splits at its centromere; its left chromatid goes left, its right chromatid right. */
const half = (cx: number, top: number, bot: number, hw: number, side: -1 | 1): [number, number, number, number] => (side < 0 ? [cx - hw, top, cx + 1, bot] : [cx - 1, top, cx + hw, bot]);
const ANA2: Piece[] = [
	{a: [470, 1000], b: [330, 910], boxA: half(470, 815, 1195, 70, -1), boxB: [245, 825, 465, 1000]},
	{a: [470, 1000], b: [690, 910], boxA: half(470, 815, 1195, 70, 1), boxB: [595, 830, 810, 955]},
	{a: [625, 1000], b: [330, 1100], boxA: half(625, 895, 1105, 48, -1), boxB: [250, 1065, 410, 1165]},
	{a: [625, 1000], b: [690, 1100], boxA: half(625, 895, 1105, 48, 1), boxB: [610, 1055, 790, 1165]},
	{a: [1400, 1000], b: [1300, 910], boxA: half(1400, 815, 1195, 70, -1), boxB: [1205, 825, 1430, 955]},
	{a: [1400, 1000], b: [1680, 910], boxA: half(1400, 815, 1195, 70, 1), boxB: [1570, 825, 1780, 955]},
	{a: [1540, 1000], b: [1300, 1100], boxA: half(1540, 895, 1105, 48, -1), boxB: [1225, 1060, 1395, 1165]},
	{a: [1540, 1000], b: [1680, 1100], boxA: half(1540, 895, 1105, 48, 1), boxB: [1595, 1060, 1770, 1165]},
];
export const SceneSecondDivision: React.FC = () => {
	const f = useCurrentFrame();
	const c = cues(S('second-division'), {
		straight: 'goes straight', second: 'second division', gam: 'A gamete cannot', again: 'divides again', share: 'share out', m2: 'metaphase two', own: 'each chromosome lines', own2: 'on its own', a2: 'anaphase two', split: 'the centromeres split', pulled: 'pulled apart', because: 'Because of crossing', differ: 'can differ', cells: 'cells get different', chrom: ['chromosomes', 2],
	});
	const cam: Cam = {zoom: 1.05, fx: 1000, fy: 1000};
	const P = (x: number, y: number) => toS(cam, x, y);
	const tM2 = prog(f, c.m2 - 30, 40);
	const tA2 = prog(f, c.split, c.pulled + 60 - c.split);
	const strip = prog(f, c.straight, 36) * STRIP_SCROLL;
	const dbl = AN.m1telophase.cen.slice(0, 1).map(([x, y]) => P(x, y))[0];
	// letters for the four long chromatids after anaphase II (screen, above each painted rod)
	const LT = [{p: P(330, 640), t: 'A B'}, {p: P(690, 640), t: 'A b'}, {p: P(1300, 640), t: 'a B'}, {p: P(1680, 640), t: 'a b'}];
	return (
		<>
			<Heading items={[[0, 'Meiosis II: the second division']]} size={60} />
			<Overlay>
				<Stage cam={cam} srcs={[CD('m1-telophase'), CD('pair-metaphase'), CD('pair-anaphase'), CD('pair-metaphase', true), CD('pair-anaphase', true)]}>
					{tM2 < 1 ? (
						<>
							<Dissolve a={CD('m1-telophase')} b={CD('pair-metaphase')} t={tM2} />
							<Recombs plate="m1-telophase" o={1 - Math.min(1, tM2 * 2)} />
							<Recombs plate="pair-metaphase" o={Math.max(0, tM2 * 2 - 1)} />
						</>
					) : tA2 <= 0 ? <><PL src={CD('pair-metaphase')} /><Recombs plate="pair-metaphase" /></>
						: tA2 < 1 ? <Morph A={CD('pair-metaphase')} B={CD('pair-anaphase')} t={tA2} pieces={ANA2} fade={[0.3, 0.7]} />
						: <><PL src={CD('pair-anaphase')} /><Recombs plate="pair-anaphase" o={prog(f, c.pulled + 60, 12)} /></>}
				</Stage>
				<g opacity={vis(f, c.gam + 10, c.m2 - 30, 10)}><Ring x={dbl[0]} y={dbl[1]} r={40} /></g>
				{/* each chromosome on its own on the line of each cell */}
				{AN.pairMetaphase.cen.map(([x, y], i) => { const [sx, sy] = P(x, y); return <g key={i} opacity={vis(f, c.own + i * 6, c.a2, 8)}><Ring x={sx} y={sy} r={i % 2 ? 54 : 84} w={4} /></g>; })}
			</Overlay>
			<GreyTag at={c.straight} out={c.gam} x={570} y={186} text="no copying between the divisions" size={32} />
			<Overlay><g opacity={vis(f, c.straight + 8, c.gam, 10)}><DrawPath d="M540,200 L566,232 M566,200 L540,232" at={c.straight + 6} dur={10} color="#7a8088" width={6} /></g></Overlay>
			<Hand at={c.gam + 10} out={c.m2 - 30} x={96} y={300} size={40} w={330}>still doubled: twice the DNA of one set</Hand>
			<GreyTag at={c.own2} out={c.a2} x={1360} y={186} text="like mitosis, but only one set" size={28} />
			{LT.map((l, i) => <Hand key={i} at={c.because + 6 + i * 6} out={c.cells + 60} x={l.p[0] - 60} y={l.p[1] - 60} size={44} w={120} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>{l.t}</span></Hand>)}
			<Hand at={c.differ} x={96} y={300} size={40} w={330}>sister chromatids differ after crossing over</Hand>
			<Hand at={c.cells} x={P(1000, 0)[0] - 300} y={P(0, 1300)[1] + 10} size={42} w={600} color={AMBER_INK}><span style={{display: 'block', textAlign: 'center'}}>so the two cells get different chromosomes</span></Hand>
			<MStrip at={[-100, -100, -100, -100, c.second + 6, c.m2, c.a2, c.cells + 30]} active={f >= c.cells + 30 ? 7 : f >= c.a2 ? 6 : f >= c.m2 ? 5 : 4} scroll={strip} />
		</>
	);
};

