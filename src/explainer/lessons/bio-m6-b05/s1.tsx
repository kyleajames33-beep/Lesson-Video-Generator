// M6 B05 scenes 1 to 5 on the cell lineage board: the same BRCA1 change inherited (every cell) or arising in one
// breast cell (a patch) (hook); somatic and germ-line cells; a somatic mutation copied by mitosis into a patch, timing
// and cancer; a germ-line mutation carried into every cell of the next generation and onward; the distinction card.
// No person is drawn: the 2013 case is text only, with a coded chromosome pair and cells.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {pbPt} from '../bio-m5-b07/shared';
import {CardBox, CurveArrow, GTag, PlateAt, SlimStrand} from '../bio-m6-b01/parts';
import {ChromPlate, P_PAIR} from '../bio-m5-b05a/chrom';
import {Term} from '../bio-m6-b03/parts';
import {S, dur} from './common';
import {PLATES} from './assets';
import {
	AMBER, AMBER_INK, BIO_INK, Band, CellTree, Dot, GREYT, GREY_INK, INK, INK_SOFT, MiniChip, PLUM, RLab, StopMark, Tag, clamp01, lerp, prog, smooth, treePt, vis,
} from './parts';
import type {TreeProps} from './parts';

const GERM = {g: 3, j: 7};

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {y2013: 'In 2013', gene: 'a gene called', inh: "She'd inherited it", every: 'every cell of her body', pct: 'eighty-seven per cent', same: 'But the same change', single: 'a single breast cell', nochild: 'no child can inherit it', why: 'So why', dna: 'which part of the DNA'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const grow1 = 6 * clamp01((f - K1.inh) / (K1.every + 40 - K1.inh));
	const t1: TreeProps = {x: 800, y: 290, R: 330, grow: f < K1.inh - 12 ? -1 : grow1, mut: {g: 0, j: 0, t: 10}};
	const t2: TreeProps = {x: 1490, y: 290, R: 330, mut: {g: 4, j: 13, t: 3 * prog(f, K1.single + 26, 40)}};
	const sh = smooth(prog(f, K1.dna, 30));
	const chrO = vis(f, K1.gene - 4, K1.dna - 20, 14);
	const blink = (a: number) => vis(f, a, a + 18, 6);
	const sx = lerp(1940, 1080, smooth(prog(f, K1.dna + 4, 26)));
	return (
		<>
			<Heading text="Where it happens matters" at={K1.dna + 40} size={60} />
			<Overlay>
				{/* quality pass (6 Nov): the painted chromosome pair (B5a), one band ringed for the gene */}
				<g opacity={chrO}>
					<ChromPlate p={P_PAIR} cx={250} cy={500} h={400} />
					<circle cx={250 + 104} cy={500 + 128} r={34} fill="none" stroke={AMBER} strokeWidth={6} opacity={prog(f, K1.gene + 30, 12)} />
				</g>
				<GTag x={110} y={220} text="2013" at={K1.y2013} out={K1.inh + 30} size={28} />
				<Tag x={250} y={790} text="BRCA1, chromosome 17" at={K1.gene + 34} out={K1.dna - 20} size={38} color={BIO_INK} anchor="middle" />
				{/* the two trees, which shrink to the left on "which part of the DNA" */}
				<g transform={`translate(${lerp(0, -560, sh)},${lerp(0, 230, sh)}) translate(1125,300) scale(${lerp(1, 0.5, sh)}) translate(-1125,-300)`}>
					<CellTree {...t1} o={prog(f, K1.inh - 14, 12)} />
					<CellTree {...t2} o={prog(f, K1.single - 8, 16)} />
					<g opacity={vis(f, K1.nochild, K1.dna, 12)}>
						<DrawPath d="M1690,505 L1760,762" at={K1.nochild} dur={14} color={GREYT} width={3} dash="7 7" />
						<StopMark x={1726} y={636} o={prog(f, K1.nochild + 14, 8)} />
						<Dot x={1760} y={792} r={24} o={prog(f, K1.nochild + 4, 10)} />
						<RLab x={1760} y={856} text="egg" at={K1.nochild + 6} size={28} />
					</g>
				</g>
				<Tag x={800} y={720} text="inherited: in every cell" at={K1.every} out={K1.single + 10} anchor="middle" size={44} />
				<Sx x={800} y={830} text="87%" size={80} color={AMBER_INK} weight={800} anchor="middle" at={K1.pct} out={K1.single + 10} />
				<Sx x={800} y={880} text="her doctors' estimate of breast cancer risk" size={30} color={GREY_INK} weight={600} anchor="middle" at={K1.pct + 10} out={K1.single + 10} />
				<Tag x={1490} y={720} text="arises in one cell: a patch" at={K1.single + 34} out={K1.dna} anchor="middle" size={44} />
				{/* which part of the DNA: a short strand, one coding band, one grey band */}
				<g opacity={prog(f, K1.dna + 4, 14)}>
					<Band x1={sx + 3 * 32} x2={sx + 10 * 32} kind="warm" y={540} gap={40} />
					<Band x1={sx + 13 * 32} x2={sx + 20 * 32} kind="grey" y={540} gap={40} />
					<SlimStrand x={sx} y={540} n={23} pitch={32} gap={40} rung={i => (i === 6 && (blink(K1.dna + 34) + blink(K1.dna + 82)) > 0.01 ? {color: AMBER, w: 7, o: blink(K1.dna + 34) + blink(K1.dna + 82)} : i === 16 && (blink(K1.dna + 58) + blink(K1.dna + 106)) > 0.01 ? {color: AMBER, w: 7, o: blink(K1.dna + 58) + blink(K1.dna + 106)} : undefined)} />
				</g>
				{void K1.same}{void K1.why}
			</Overlay>
		</>
	);
};

// ---------- 2. Two kinds of cells ----------
const K2 = cues(S('two-kinds'), {two: 'two kinds of cells', somatic: 'somatic cells', skin: 'skin', muscle: 'muscle', liver: 'liver', germ: 'germ-line cells', eggs: 'make eggs or sperm', gametes: 'the gametes themselves'});
const T2: TreeProps = {x: 860, y: 240, R: 420};
const spermAt = (cx: number, cy: number, w: number) => pbPt(PLATES.sperm, cx, cy, w)(1712, 800);
export const SceneTwoKinds: React.FC = () => {
	const f = useCurrentFrame();
	const end = dur('two-kinds') - 46;
	const [tx, ty] = treePt(T2, 6, 60);
	return (
		<>
			<Heading text="Two kinds of cells" at={4} size={60} />
			<Overlay>
				<CellTree {...T2} o={prog(f, 2, 16)} soma={prog(f, K2.somatic, 12)} germ={{...GERM, o: prog(f, K2.germ, 12)}} />
				<Tag x={860} y={716} text="somatic: body cells" at={K2.somatic + 6} out={end} anchor="middle" size={44} />
				{/* quality pass (6 Nov): the body cells named in the narration, as painted plates */}
				<PlateAt p={PLATES.skin} cx={560} cy={850} w={190} at={K2.skin - 4} />
				<PlateAt p={PLATES.muscle} cx={860} cy={850} w={260} at={K2.muscle - 4} />
				<PlateAt p={PLATES.liver} cx={1160} cy={850} w={170} at={K2.liver - 4} />
				{([['skin', K2.skin, 560], ['muscle', K2.muscle, 860], ['liver', K2.liver, 1160]] as [string, number, number][]).map(([t, at, x]) => <RLab key={t} x={x} y={1000} text={t} at={at} size={36} color={GREY_INK} />)}
				<Tag x={1330} y={290} text="germ line: makes eggs or sperm" at={K2.germ + 6} out={end} size={42} color={PLUM} />
				<g opacity={prog(f, K2.gametes, 12)}>
					<DrawPath d={`M${tx + 12},${ty + 6} L1380,440`} at={K2.gametes} dur={12} color={PLUM} width={3} />
					<DrawPath d="M1560,440 L1620,440" at={K2.gametes + 8} dur={8} color={PLUM} width={3} />
				</g>
				<PlateAt p={PLATES.sperm} cx={1470} cy={440} w={220} at={K2.gametes + 4} />
				<PlateAt p={PLATES.egg} cx={1720} cy={440} w={190} at={K2.gametes + 10} />
				<RLab x={1470} y={540} text="sperm" at={K2.gametes + 4} size={34} color={PLUM} />
				<RLab x={1720} y={570} text="egg" at={K2.gametes + 10} size={34} color={PLUM} />
				{void K2.two}{void K2.eggs}
			</Overlay>
		</>
	);
};

// ---------- 3. A somatic mutation: a patch, and sometimes a cancer ----------
const K3 = cues(S('somatic'), {skin: 'one skin cell', divides: 'divides by mitosis', both: 'both daughter cells', soon: 'and so on', patch: 'ends up in a patch', rest: 'the rest of the body', somatic: 'somatic mutation', earlier: 'the earlier it happens', bigger: 'the bigger the patch', controls: 'controls cell division', more: 'more mutations follow', keep: 'keep dividing', cancer: 'become a cancer', uv: "That's how UV", skinc: 'most skin cancers'});
const MUT3 = {g: 3, j: 2};
export const SceneSomatic: React.FC = () => {
	const f = useCurrentFrame();
	const grow = 3 + prog(f, K3.divides + 8, 20) + prog(f, K3.both + 14, 20) + prog(f, K3.soon + 2, 20);
	const mt = prog(f, K3.skin + 6, 12) * (1 + (grow - 3));
	const T: TreeProps = {x: 1000, y: 250, R: 380};
	// camera: push into the branch, pull back on "patch", then the tree shrinks aside on "skin cancers"
	const push = smooth(prog(f, K3.skin - 6, 26)) * (1 - smooth(prog(f, K3.patch, 30)));
	const aside = smooth(prog(f, K3.skinc - 6, 26));
	const fx = lerp(1000, 850, push), fy = lerp(560, 520, push);
	const s2 = lerp(1, 1.85, push) * lerp(1, 0.55, aside);
	const cam = `translate(${lerp(960, 1500, aside)},${lerp(560, 600, aside)}) scale(${s2}) translate(${-fx},${-fy})`;
	const insetO = vis(f, K3.earlier, K3.bigger + 46, 12);
	return (
		<>
			<Heading text="A somatic mutation" at={4} size={60} />
			<Overlay>
				<PlateAt p={PLATES.uvSkin} cx={lerp(220, 330, aside)} cy={lerp(340, 470, aside)} w={lerp(210, 380, aside)} at={2} />
				<g transform={cam}>
					<CellTree {...T} grow={grow} mut={{...MUT3, t: mt}} extra={[{g: 6, j: 18, o: prog(f, K3.controls + 14, 10)}, {g: 6, j: 21, o: prog(f, K3.more + 8, 10)}]} crowd={prog(f, K3.keep, 70)} dimRest={0.25 * prog(f, K3.patch + 20, 16) * (1 - aside)} />
				</g>
				<Tag x={130} y={900} text="copied into its daughter cells" at={K3.both + 6} out={K3.patch} size={42} />
				<Tag x={130} y={900} text="a patch: the rest is normal" at={K3.patch + 10} out={K3.somatic - 4} size={42} />
				<Term x={130} y={980} term="somatic mutation" gloss="in a body cell" at={K3.somatic} out={K3.skinc} size={50} />
				{/* the earlier it happens: an inset tree, mutation at the two-cell stage */}
				<g opacity={insetO}>
					<CellTree x={1640} y={600} R={150} mut={{g: 1, j: 0, t: 6 * prog(f, K3.earlier + 10, 40)}} />
				</g>
				<Tag x={130} y={900} text="more mutations" at={K3.more + 6} out={K3.skinc} size={42} />
				<CurveArrow a={[540, 470]} b={[640, 470]} at={K3.skinc + 6} bow={0} color={AMBER_INK} width={5} />
				<PlateAt p={PLATES.melanoma} cx={860} cy={470} w={380} at={K3.skinc} />
				<Tag x={330} y={760} text="UV on skin cells" at={K3.skinc + 6} anchor="middle" size={40} />
				<Tag x={860} y={760} text="melanoma" at={K3.skinc + 10} anchor="middle" size={44} />
				{void K3.rest}{void K3.cancer}{void K3.uv}
			</Overlay>
		</>
	);
};

// ---------- 4. A germ-line mutation: every cell, and onward ----------
const K4 = cues(S('germ-line'), {gl: 'germ-line mutation', sperm: 'a cell that makes sperm', carrying: 'A sperm carrying it', fert: 'fertilises an egg', zyg: 'so the zygote has it', every: 'every cell copied from the zygote', own: 'own germ cells', again: 'passed on again', pool: 'enter the gene pool', parent: "The parent's body", show: 'may show nothing', rec: 'recessive'});
const TA: TreeProps = {x: 360, y: 290, R: 240};
const TB: TreeProps = {x: 1400, y: 290, R: 240};
export const SceneGermLine: React.FC = () => {
	const f = useCurrentFrame();
	const sp = [[690, 350], [700, 392], [690, 434]];
	const travel = smooth(prog(f, K4.fert - 4, 26));
	const mv = [lerp(sp[1][0], 870, travel), lerp(sp[1][1], 405, travel)];
	const growB = f < K4.zyg ? -1 : 6 * clamp01((f - K4.every + 6) / 60);
	const [gx, gy] = treePt(TB, 6, 60);
	return (
		<>
			<Heading text="A germ-line mutation" at={4} size={60} />
			<Overlay>
				<CellTree {...TA} o={prog(f, 2, 14)} germ={{...GERM, o: 1}} mut={{g: 5, j: 29, t: 2 * prog(f, K4.sperm + 10, 30)}} />
				{/* sperm from the mutated germ cell */}
				{sp.map(([x, y], k) => (k === 1 && travel > 0.01 ? null : (
					<g key={k}>
						<PlateAt p={PLATES.sperm} cx={x} cy={y} w={100} at={K4.sperm + 30 + k * 6} out={K4.every} />
						{k === 1 ? <circle cx={spermAt(x, y, 100)[0]} cy={spermAt(x, y, 100)[1]} r={6} fill={AMBER} opacity={vis(f, K4.sperm + 36, K4.every, 10)} /> : null}
					</g>
				)))}
				{travel > 0.01 ? (
					<g opacity={1 - prog(f, K4.zyg + 6, 10)}>
						<PlateAt p={PLATES.sperm} cx={mv[0]} cy={mv[1]} w={100} at={-100} />
						<circle cx={spermAt(mv[0], mv[1], 100)[0]} cy={spermAt(mv[0], mv[1], 100)[1]} r={6} fill={AMBER} />
					</g>
				) : null}
				<PlateAt p={PLATES.dish} cx={930} cy={420} w={230} at={K4.fert - 10} out={K4.parent} />
				<CurveArrow a={[1046, 380]} b={[1374, 296]} at={K4.zyg} bow={-30} color={INK_SOFT} width={3} out={K4.own} />
				<Dot x={1400} y={290} r={18} mut={1} o={vis(f, K4.zyg + 4, K4.every + 10, 10)} />
				<CellTree {...TB} grow={growB} mut={{g: 0, j: 0, t: 10}} germ={{...GERM, o: prog(f, K4.own, 12)}} pulse={prog(f, K4.own + 4, 30)} o={f < K4.zyg ? 0 : 1} />
				<Tag x={1400} y={620} text="every cell" at={K4.every + 30} out={K4.own} anchor="middle" size={40} />
				<Term x={120} y={980} term="germ-line mutation" gloss="in a cell that makes gametes" at={K4.gl} out={K4.own} size={50} />
				{/* passed on again */}
				<CurveArrow a={[gx + 14, gy + 10]} b={[1752, 500]} at={K4.again - 10} bow={-20} color={PLUM} width={4} />
				<Dot x={1770} y={526} r={20} mut={1} o={prog(f, K4.again + 4, 10)} />
				<Tag x={1690} y={640} text="passed on again" at={K4.again} out={K4.rec - 10} anchor="middle" size={38} />
				<GTag x={1770} y={570} text="gene pool" at={K4.pool} size={26} anchor="middle" />
				{/* the parent's body: no dot */}
				<DrawPath d="M300,600 L318,618 L352,580" at={K4.parent + 10} dur={12} color={GREYT} width={6} />
				<RLab x={366} y={612} text="body: no change" at={K4.parent + 16} anchor="start" size={28} color={GREY_INK} />
				<GTag x={1080} y={700} text="one copy, recessive: may show nothing" at={K4.rec - 4} size={26} />
				{void K4.carrying}{void K4.show}
			</Overlay>
		</>
	);
};

// ---------- 5. The distinction ----------
const K5 = cues(S('distinction'), {jcase: "Jolie's case", incl: 'including those that make eggs', half: 'one in two chance', som: 'A somatic mutation is copied', part: 'part of one organism', isnt: "isn't inherited", gl: 'A germ-line mutation can reach', every: 'every cell of the next generation', why: "That's why", pool: 'add to the gene pool'});
const DL: TreeProps = {x: 560, y: 180, R: 185};
const DR: TreeProps = {x: 1480, y: 180, R: 185};
export const SceneDistinction: React.FC = () => {
	const f = useCurrentFrame();
	const dim = 1 - 0.6 * prog(f, K5.som, 14);
	// quality pass (6 Nov): Jolie's inherited case fills the frame first, then shrinks to the top for the comparison
	const shr = smooth(prog(f, K5.som - 30, 30));
	const DLa: TreeProps = {...DL, x: lerp(640, DL.x, shr), y: lerp(220, DL.y, shr), R: lerp(380, DL.R ?? 185, shr)};
	const [ex, ey] = treePt(DLa, 6, 60);
	const C = {x: 260, y: 410, w: 1400, h: 500, c0: 290, c1: 600, c2: 1130};
	const rows: {lab: string; a: string; b: string; at: number; bAt?: number}[] = [
		{lab: 'where', a: "one body cell's descendants", b: 'a cell that makes gametes', at: K5.som + 20},
		{lab: 'affects', a: 'part of one organism', b: 'every cell of offspring', at: K5.part},
		{lab: 'inherited?', a: 'no (animals)', b: 'can be', at: K5.isnt, bAt: K5.every},
	];
	const rowY = (r: number) => C.y + 150 + r * 120;
	const rowO = (r: number) => (r < 2 ? 1 - 0.55 * prog(f, rows[r + 1].at, 12) : 1);
	return (
		<>
			<Heading text="Somatic or germ line?" at={4} size={60} />
			<Overlay>
				<g opacity={dim}>
					<CellTree {...DLa} germ={{...GERM, o: 1}} mut={{g: 0, j: 0, t: 10}} pulse={prog(f, K5.incl, 30)} o={prog(f, 2, 14)} />
					<CellTree {...DR} mut={{g: 4, j: 13, t: 3}} o={prog(f, K5.som - 20, 16)} />
					<Sx x={DLa.x - (DLa.R ?? 185) - 40} y={DLa.y + 40} text="inherited" size={40} color={AMBER_INK} hand anchor="end" at={8} />
					<Sx x={DR.x + 230} y={DR.y + 40} text="one cell" size={36} color={AMBER_INK} hand at={K5.som - 10} />
				</g>
				<g opacity={vis(f, K5.half - 6, K5.som, 12)}>
					<DrawPath d={`M${ex + 10},${ey} L1150,420`} at={K5.half - 6} dur={10} color={PLUM} width={3} />
					<DrawPath d={`M${ex + 10},${ey} L1150,600`} at={K5.half - 6} dur={10} color={PLUM} width={3} />
					<PlateAt p={PLATES.egg} cx={1230} cy={420} w={130} at={K5.half - 6} />
					<circle cx={1230} cy={420} r={16} fill={AMBER} />
					<PlateAt p={PLATES.egg} cx={1230} cy={600} w={130} at={K5.half - 6} />
					<Tag x={1330} y={524} text="each egg: 1 in 2" at={K5.half + 6} out={K5.som} size={48} />
				</g>
				<CardBox x={C.x} y={C.y} w={C.w} h={C.h} at={K5.som} />
				<g opacity={prog(f, K5.som + 6, 12)}>
					<line x1={C.c1 - 20} y1={C.y + 20} x2={C.c1 - 20} y2={C.y + C.h - 20} stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
					<line x1={C.c2 - 20} y1={C.y + 20} x2={C.c2 - 20} y2={C.y + C.h - 20} stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
					<Dot x={C.c1 + 22} y={C.y + 62} r={20} mut={1} fill="#fbf3df" />
					<Sx x={C.c1 + 56} y={C.y + 76} text="somatic" size={44} color={INK} hand />
					<Dot x={C.c2 + 22} y={C.y + 62} r={20} mut={1} plum />
					<Sx x={C.c2 + 56} y={C.y + 76} text="germ line" size={44} color={PLUM} hand />
				</g>
				{rows.map((r, i) => (
					<g key={r.lab} opacity={rowO(i)}>
						<Sx x={C.c0} y={rowY(i)} text={r.lab} size={34} color={INK_SOFT} hand at={r.at} />
						<Sx x={C.c1} y={rowY(i)} text={r.a} size={36} color={i === 2 ? GREY_INK : AMBER_INK} hand at={r.at + 4} />
						<Sx x={C.c2} y={rowY(i)} text={r.b} size={36} color={i === 2 ? PLUM : AMBER_INK} hand at={(r.bAt ?? r.at) + 6} />
					</g>
				))}
				<MiniChip x={C.c2 + 230} y={rowY(2)} text="gene pool" amber o={prog(f, K5.pool + 4, 12)} />
				{void K5.jcase}{void K5.gl}{void K5.why}{void BIO_INK}{void PLUM}
			</Overlay>
		</>
	);
};
