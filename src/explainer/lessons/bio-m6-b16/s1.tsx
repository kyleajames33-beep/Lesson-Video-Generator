// M6 B16 scenes 1 to 4: Dolly, a white-faced lamb born to a black-faced ewe, against a dish of bacteria copying one
// gene (hook); a clone is a genetically identical copy, so the question is a copy of what, and the "What is being
// copied?" board draws its two columns; somatic cell nuclear transfer step by step with Dolly's three ewes (the needle
// draws the egg's nucleus out, an electric pulse fuses the udder cell with the empty egg, the embryo divides and goes
// into a surrogate); whom she matches (the nucleus donor) and why she is still not a perfect copy.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {Brace, GreyCross, ScribbleRing, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {PT} from './assets';
import {
	AMBER, AMBER_INK, Arr, BAYS, BalanceG, Bay, COLS, ColFrame, ColHead, Colonies, DrawPath, GREYT, GREY_INK, GeneSeg, Gloss, INK, INK_SOFT, Meter, MiniBoard,
	MitoG, NucIcon, PLATES, Patch, Pill, Pl, QMark, Sx, clamp01, colCx, lerp, platePt, prog, smooth, tw, vis,
} from './parts';

const pp = platePt;

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {lamb: 'a white-faced lamb', ewe: 'black-faced ewe', daughter: "wasn't that ewe's daughter", clone: 'a clone of a different', genes: 'cloning genes', billions: 'billions of times', so: 'So what does each', well: 'how well does each'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const ewe = {cx: 380, cy: 640, w: 440};
	const slide = smooth(prog(f, K1.lamb, 30));
	const lamb = {cx: lerp(-200, 790, slide), cy: 720, w: 270};
	const eF = pp(PLATES.ewe, ewe.cx, ewe.cy, ewe.w, PT.eweFace[0], PT.eweFace[1]);
	const lF = pp(PLATES.lamb, lamb.cx, lamb.cy, lamb.w, PT.lambFace[0], PT.lambFace[1]);
	const sheep = {cx: 1060, cy: 330, w: 230};
	const sF = pp(PLATES.sheep, sheep.cx, sheep.cy, sheep.w, PT.sheepFace[0], PT.sheepFace[1]);
	const dish = {cx: 1500, cy: 760, w: 360};
	const R = (700 * dish.w) / 1599;
	const tagsOut = K1.well;
	return (
		<>
			<Heading text="What is being copied?" at={K1.well} size={64} />
			<Overlay>
				<Pl p={PLATES.ewe} cx={ewe.cx} cy={ewe.cy} w={ewe.w} o={prog(f, 0, 16)} />
				<Pl p={PLATES.lamb} cx={lamb.cx} cy={lamb.cy} w={lamb.w} o={prog(f, K1.lamb, 10)} />
				<GTag x={790} y={880} text="July 1996, Scotland" at={K1.lamb + 24} out={K1.daughter} size={26} anchor="middle" />
				<ScribbleRing cx={eF[0] - 10} cy={eF[1] + 10} rx={50} ry={44} at={K1.daughter} out={K1.genes} seed={3} color={GREYT} />
				<ScribbleRing cx={lF[0] - 6} cy={lF[1] + 8} rx={40} ry={36} at={K1.daughter + 6} out={K1.genes} seed={5} color={GREYT} />
				<QMark x={(eF[0] + lF[0]) / 2 + 10} y={Math.min(eF[1], lF[1]) - 30} size={90} o={vis(f, K1.daughter + 8, K1.genes, 10)} />
				{/* a clone of a different sheep */}
				<Pl p={PLATES.sheep} cx={sheep.cx} cy={sheep.cy} w={sheep.w} o={0.55 * vis(f, K1.clone, K1.genes + 30, 14)} />
				{f >= K1.clone + 6 ? <g opacity={vis(f, K1.clone + 6, K1.genes + 30, 10)}><DrawPath d={`M${sF[0] - 40},${sF[1] + 30} Q${(sF[0] + lF[0]) / 2},${sF[1] + 160} ${lF[0] + 20},${lF[1] - 30}`} at={K1.clone + 6} dur={20} color={GREYT} width={3} dash="6 8" /></g> : null}
				<GTag x={sheep.cx} y={432} text="a clone of ... ?" at={K1.clone + 14} out={K1.genes} size={26} anchor="middle" />
				{/* labs cloning genes: one gene copied many times in bacteria */}
				<Pl p={PLATES.dish} cx={dish.cx} cy={dish.cy} w={dish.w} o={prog(f, K1.genes - 6, 14)} />
				<Colonies cx={dish.cx} cy={dish.cy} R={R} n={46} t={prog(f, K1.genes + 6, 90, x => x)} o={prog(f, K1.genes, 10)} />
				{Array.from({length: 5}, (_, k) => {
					const a = k === 0 ? prog(f, K1.genes, 12) : smooth(prog(f, K1.billions + (k - 1) * 9, 16));
					return a > 0.01 ? <g key={k} opacity={a} transform={`translate(0,${k * 38 * a})`}><GeneSeg x={1434} y={350} n={6} pitch={22} gap={18} /></g> : null;
				})}
				<GTag x={dish.cx} y={960} text="billions of copies of one gene" at={K1.billions + 20} out={tagsOut} size={26} anchor="middle" />
				<Brace x1={790} x2={dish.cx} y={236} at={K1.so} out={K1.well + 20} label="cloning" size={36} />
			</Overlay>
		</>
	);
};

// ---------- 2. One word, two jobs ----------
const K2 = cues(S('one-word-two-jobs'), {what: 'a copy of what', natural: 'natural clones', parent: 'same alleles as', whole: 'Whole-organism cloning', newi: 'a new individual', gene: 'Gene cloning makes', piece: 'one selected piece', copied: 'is being copied'});
export const BOARD = {y0: 330, y1: 1030, head: 400, gloss: 455, how: [480, 150] as [number, number], what: [645, 180] as [number, number], well: [840, 175] as [number, number]};
/** The full board (both columns, bays and their contents), with opacities per column. */
export const FullBoard: React.FC<{oL: number; oR: number; drawL?: number; drawR?: number; glossL?: number; glossR?: number; whatLit?: number; dimAll?: number; meters?: boolean; fillsL?: number[]; fillsR?: number[]}> = ({oL, oR, drawL = 1, drawR = 1, glossL = 0, glossR = 0, whatLit = 0, dimAll = 0, meters = true, fillsL = [0, 0, 0], fillsR = [0, 0, 0]}) => {
	const lit = 1 - dimAll;
	const col = (s: 'L' | 'R', o: number, draw: number, gl: number, fills: number[]) => (o <= 0.01 ? null : (
		<g opacity={o}>
			<ColFrame side={s} y0={BOARD.y0} y1={BOARD.y1} draw={draw} />
			<ColHead side={s} x={COLS[s].x0 + 24} y={BOARD.head} pw={s === 'L' ? 120 : 140} lit={lit} />
			<Gloss side={s} y={BOARD.gloss} o={gl} lit={1 - whatLit} />
			<g opacity={clamp01(draw * 1.4 - 0.4)}>
				<Bay side={s} y={BOARD.how[0]} h={BOARD.how[1]} label={BAYS[0]} />
				<Bay side={s} y={BOARD.what[0]} h={BOARD.what[1]} label={BAYS[1]} lit={whatLit * lit} />
				<Bay side={s} y={BOARD.well[0]} h={BOARD.well[1]} label={BAYS[2]} />
				{s === 'L' ? <NucIcon x={colCx('L')} y={BOARD.what[0] + 100} r={56} o={0.25 + 0.75 * whatLit} /> : <GeneSeg x={colCx('R') - 66} y={BOARD.what[0] + 86} n={6} o={0.25 + 0.75 * whatLit} />}
				{meters ? <Meter x={COLS[s].x0 + 150} y={BOARD.well[0] + 22} labels={s === 'L' ? ['reliable', 'identical', 'healthy'] : ['reliable', 'identical', 'useful']} fills={fills} colors={[AMBER, AMBER, AMBER]} w={300} size={20} gap={46} /> : null}
			</g>
		</g>
	));
	return (
		<>
			{col('L', oL, drawL, glossL, fillsL)}
			{col('R', oR, drawR, glossR, fillsR)}
		</>
	);
};
export const SceneOneWord: React.FC = () => {
	const f = useCurrentFrame();
	const defDim = prog(f, K2.whole, 12);
	const pre = 'A copy ';
	const qx = 1110;
	const ux = qx + tw(pre, 52, true) * 1.02;
	return (
		<>
			<Heading text="One word, two jobs" at={4} size={60} />
			<Overlay>
				<Sx x={140} y={250} text="Clone: a genetically identical copy." size={52} color={INK} weight={800} at={4} opacity={1 - 0.6 * defDim} />
				<Sx x={qx} y={250} text="A copy of what?" size={52} color={AMBER_INK} hand at={K2.what} out={K2.whole} />
				{f >= K2.what + 14 ? <g opacity={1 - prog(f, K2.whole, 12)}><DrawPath d={`M${ux},${266} L${ux + tw('of what?', 52, true) * 1.04},${264}`} at={K2.what + 14} dur={12} color={AMBER} width={6} /></g> : null}
				{/* natural clones, recalled */}
				<Pl p={PLATES.cloneRow} cx={1180} cy={460} w={520} o={vis(f, K2.natural, K2.whole, 14)} />
				<Pl p={PLATES.bunch} cx={1620} cy={455} w={180} o={vis(f, K2.natural + 10, K2.whole, 14)} />
				<GTag x={1180} y={560} text="same alleles as the parent" at={K2.parent} out={K2.whole} size={26} anchor="middle" />
				<FullBoard oL={prog(f, K2.whole, 10)} oR={prog(f, K2.gene, 10)} drawL={prog(f, K2.whole, 30)} drawR={prog(f, K2.gene, 30)}
					glossL={prog(f, K2.newi, 12)} glossR={prog(f, K2.piece, 12)} whatLit={prog(f, K2.copied, 14)} />
			</Overlay>
		</>
	);
};

// ---------- 3. Somatic cell nuclear transfer ----------
const K3 = cues(S('nuclear-transfer'), {name: 'somatic cell nuclear transfer', somatic: 'Somatic just means', took: 'Scientists took cells', udder: 'the udder of a', egg: 'an egg from a', sucked: 'sucked out its nucleus', nochrom: 'no chromosomes of its own', pulse: 'An electric pulse', fused: 'fused the udder', dividing: 'started it dividing', week: 'After about a week', another: 'another black-faced ewe', carried: 'carried it to birth'});
const STAGE = {cx: 1080, cy: 620, w: 340};
const CYTO_ICSI = '#fad0ba', CYTO_EGG = '#fcc8aa';
/** The egg plate with its own nucleus covered (an empty egg), or with it showing. */
export const EggAt: React.FC<{cx: number; cy: number; w: number; o?: number; empty?: number; id: string; donorNuc?: number}> = ({cx, cy, w, o = 1, empty = 0, id, donorNuc = 0}) => {
	if (o <= 0.01) return null;
	const k = w / 1519;
	const n = pp(PLATES.egg, cx, cy, w, PT.eggNuc[0], PT.eggNuc[1]);
	return (
		<g opacity={o}>
			<Pl p={PLATES.egg} cx={cx} cy={cy} w={w} />
			<Patch cx={n[0]} cy={n[1]} rx={200 * k} ry={200 * k} fill={CYTO_EGG} o={empty} id={`${id}-p`} blur={Math.max(2, 14 * k)} />
			<Pl p={PLATES.eggNuc} cx={n[0]} cy={n[1]} w={363 * k} o={donorNuc} />
		</g>
	);
};
export const SceneNuclear: React.FC = () => {
	const f = useCurrentFrame();
	const titleX = 140;
	const words = ['somatic ', 'cell ', 'nuclear ', 'transfer'];
	const wx = (i: number) => titleX + words.slice(0, i).reduce((a, w) => a + tw(w, 50), 0);
	const glossOut = K3.took + 10;
	// rows
	const donor = {cx: 230, cy: 470, w: 250}, eweR = {cx: 230, cy: 800, w: 250};
	// the donor cell: in its row, then slides against the empty egg, then into it
	const slideC = smooth(prog(f, K3.pulse, 30));
	const into = smooth(prog(f, K3.fused + 14, 26));
	const cell = {cx: lerp(lerp(560, STAGE.cx + 250, slideC), STAGE.cx + 40, into), cy: lerp(470, STAGE.cy, slideC), w: lerp(220, 150, slideC) * (1 - 0.5 * into)};
	const cellN = pp(PLATES.cell, 560, 470, 220, PT.cellNuc[0], PT.cellNuc[1]);
	// the egg: row 2, then to the stage
	const moveE = smooth(prog(f, K3.egg + 30, 30));
	const egg = {cx: lerp(560, STAGE.cx, moveE), cy: lerp(800, STAGE.cy, moveE), w: lerp(220, STAGE.w, moveE)};
	const icsiO = vis(f, K3.sucked - 6, K3.pulse - 4, 10);
	const kI = (STAGE.w * 1600) / 630 / 1600;
	const icsiW = 1600 * kI;
	const icsi = {cx: STAGE.cx - (955 - 1000) * kI, cy: STAGE.cy - (1000 - 999.5) * kI, w: icsiW};
	const IP = (u: [number, number]) => pp(PLATES.icsi, icsi.cx, icsi.cy, icsi.w, u[0], u[1]);
	const nuc0 = IP(PT.icsiNuc), tip = IP(PT.icsiTip), sp = IP(PT.icsiSperm);
	const out1 = smooth(prog(f, K3.sucked + 12, 26));
	const out2 = smooth(prog(f, K3.sucked + 38, 26));
	const nucPos: [number, number] = [lerp(lerp(nuc0[0], tip[0] - 6, out1), icsi.cx + icsiW / 2 - 20, out2), lerp(nuc0[1], tip[1], out1)];
	const nucW = 216 * kI * lerp(1, 0.32, out1);
	// embryo stages
	const stageEggO = vis(f, K3.pulse - 8, K3.dividing, 10);
	const cl = [K3.dividing, K3.dividing + 18, K3.dividing + 36, K3.dividing + 54];
	const CLP = [PLATES.cl1, PLATES.cl2, PLATES.cl3, PLATES.cl5];
	const sur = {cx: 1640, cy: 650, w: 330};
	const ut = pp(PLATES.ewe, sur.cx, sur.cy, sur.w, 860, 1040);
	const go = smooth(prog(f, K3.carried - 26, 40));
	const flash = Math.max(0, Math.sin(clamp01((f - K3.fused - 4) / 22) * Math.PI));
	const contact: [number, number] = [STAGE.cx + STAGE.w / 2 + 4, STAGE.cy];
	return (
		<>
			<Heading text="How Dolly was made" at={4} size={60} />
			<Overlay>
				<MiniBoard active="L" bay={0} o={prog(f, 0, 14)} />
				<Sx x={titleX} y={250} text="somatic cell nuclear transfer" size={50} color={INK} weight={800} at={K3.name} opacity={1 - 0.6 * prog(f, K3.udder, 12)} />
				<Sx x={wx(0)} y={300} text="somatic: a body cell" size={28} color={GREY_INK} hand at={K3.somatic} out={glossOut} />
				<Sx x={wx(2)} y={340} text="nuclear: the nucleus" size={28} color={GREY_INK} hand at={K3.somatic + 14} out={glossOut} />
				<Sx x={wx(3)} y={380} text="transfer: moved into an egg" size={28} color={GREY_INK} hand at={K3.somatic + 28} out={glossOut} />
				{/* row 1: the white-faced ewe and a cell grown from her udder */}
				<Pl p={PLATES.sheep} cx={donor.cx} cy={donor.cy} w={donor.w} o={prog(f, K3.udder - 6, 14)} dim={prog(f, K3.egg, 12) * 0.6} />
				<g opacity={1 - 0.6 * prog(f, K3.egg, 10)}><GTag x={donor.cx} y={565} text="nucleus donor" at={K3.udder + 6} size={24} anchor="middle" /></g>
				<Arr a={[372, 470]} b={[438, 470]} at={K3.udder + 12} o={1 - prog(f, K3.pulse, 10)} />
				<Pl p={PLATES.cell} cx={cell.cx} cy={cell.cy} w={cell.w} o={prog(f, K3.udder + 12, 14) * (1 - prog(f, K3.fused + 30, 12))} />
				<ScribbleRing cx={cellN[0]} cy={cellN[1]} rx={46} ry={46} at={K3.udder + 26} out={K3.egg} seed={4} />
				{/* row 2: the black-faced ewe and her egg */}
				<Pl p={PLATES.ewe} cx={eweR.cx} cy={eweR.cy} w={eweR.w} o={prog(f, K3.egg - 6, 14)} dim={prog(f, K3.pulse, 12) * 0.6} />
				<g opacity={1 - 0.6 * prog(f, K3.pulse, 10)}><GTag x={eweR.cx} y={900} text="egg donor" at={K3.egg + 6} size={24} anchor="middle" /></g>
				<Arr a={[372, 800]} b={[438, 800]} at={K3.egg + 12} o={1 - prog(f, K3.sucked, 10)} />
				<EggAt cx={egg.cx} cy={egg.cy} w={egg.w} o={prog(f, K3.egg + 12, 14) * (1 - prog(f, K3.sucked - 6, 10))} id="b16-s3-egg0" empty={0} />
				{/* enucleation: the needle draws the nucleus out (the plate's sperm is covered) */}
				<g opacity={icsiO}>
					<Pl p={PLATES.icsi} cx={icsi.cx} cy={icsi.cy} w={icsi.w} />
					<Patch cx={sp[0] - 2} cy={sp[1]} rx={22 * kI * 1.6} ry={9 * kI * 1.8} fill={CYTO_ICSI} id="b16-s3-sp" blur={2} />
					<Patch cx={nuc0[0]} cy={nuc0[1]} rx={118 * kI} ry={118 * kI} fill={CYTO_ICSI} o={prog(f, K3.sucked + 12, 16)} id="b16-s3-hole" blur={5} />
					<Pl p={PLATES.eggNuc} cx={nucPos[0]} cy={nucPos[1]} w={nucW} o={f < K3.sucked + 12 ? 0 : 1 - prog(f, K3.sucked + 56, 10)} />
				</g>
				<Sx x={STAGE.cx} y={850} text="enucleated egg: nucleus removed" size={26} color={GREY_INK} hand anchor="middle" at={K3.sucked + 40} out={K3.pulse} />
				<Tg x={STAGE.cx} y={920} text="no chromosomes of its own" at={K3.nochrom} out={K3.pulse} size={36} anchor="middle" />
				{/* fusion: the empty egg and the udder cell, an electric pulse, the donor nucleus inside */}
				<EggAt cx={STAGE.cx} cy={STAGE.cy} w={STAGE.w} o={stageEggO} id="b16-s3-egg1" empty={1} donorNuc={prog(f, K3.fused + 26, 14)} />
				{flash > 0.01 ? <circle cx={contact[0]} cy={contact[1]} r={40 + 50 * flash} fill={AMBER} opacity={0.45 * flash} /> : null}
				{flash > 0.01 ? <path d={`M${contact[0] - 10},${contact[1] - 70} l18,40 l-14,6 l20,42`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" opacity={flash} /> : null}
				<Tg x={STAGE.cx} y={920} text="fused + started dividing" at={K3.fused + 14} out={K3.another} size={36} anchor="middle" />
				{/* the embryo divides */}
				{CLP.map((p, i) => {
					const a = prog(f, cl[i], 12) * (i < 3 ? 1 - prog(f, cl[i + 1], 12) : 1 - go);
					return <Pl key={i} p={p} cx={STAGE.cx} cy={STAGE.cy} w={STAGE.w} o={a} />;
				})}
				<GTag x={STAGE.cx + 190} y={410} text="about a week" at={K3.week} out={K3.carried + 30} size={24} />
				{/* the surrogate */}
				<Pl p={PLATES.ewe} cx={sur.cx} cy={sur.cy} w={sur.w} o={prog(f, K3.another - 6, 14)} />
				<GTag x={sur.cx} y={800} text="surrogate" at={K3.another + 6} size={24} anchor="middle" />
				<ellipse cx={ut[0]} cy={ut[1]} rx={58} ry={34} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="7 6" opacity={0.8 * prog(f, K3.another + 14, 12)} />
				<Pl p={PLATES.cl5} cx={lerp(STAGE.cx, ut[0], go)} cy={lerp(STAGE.cy, ut[1], go) - Math.sin(go * Math.PI) * 120} w={lerp(STAGE.w, 46, go)} o={go > 0.01 ? 1 : 0} />
				{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 4. Who is she a copy of? ----------
const K4 = cues(S('who-she-matches'), {three: 'three mothers', which: 'Which one does', nucleus: 'Her nucleus came', face: 'her white face', donor: 'the nucleus donor', notegg: 'not the egg donor', mito: 'Her mitochondria', egg2: 'came from the egg', develops: 'a clone develops', size: 'size, markings or health'});
const EWES = [{p: PLATES.sheep, cx: 380, tag: 'nucleus donor', face: PT.sheepFace}, {p: PLATES.ewe, cx: 960, tag: 'egg donor', face: PT.eweFace}, {p: PLATES.ewe, cx: 1540, tag: 'surrogate', face: PT.eweFace}];
export const SceneWho: React.FC = () => {
	const f = useCurrentFrame();
	const lamb = {cx: 960, cy: 790, w: 260};
	const lF = pp(PLATES.lamb, lamb.cx, lamb.cy, lamb.w, PT.lambFace[0], PT.lambFace[1]);
	const ey = 360, ew = 290;
	const faces = EWES.map(e => pp(e.p, e.cx, ey, ew, e.face[0], e.face[1]));
	const dimOthers = prog(f, K4.nucleus + 10, 12);
	const pulse = vis(f, K4.face, K4.face + 60, 8) * (0.5 + 0.5 * Math.sin((f - K4.face) / 4));
	const inset = {cx: 1680, cy: 840, w: 220};
	const insetO = vis(f, K4.mito, K4.develops, 12);
	const mitoPts: [number, number, number][] = [[-60, -40, 20], [50, -55, -30], [70, 30, 60], [-55, 50, -10], [0, 75, 15]];
	const sizeDim = prog(f, K4.size + 50, 14);
	return (
		<>
			<Heading text="Who is she a copy of?" at={4} size={60} />
			<Overlay>
				<MiniBoard active="L" bay={1} what={f >= K4.egg2 + 20 ? 'what: nuclear DNA (not mitochondria)' : undefined} o={prog(f, 0, 14)} />
				{EWES.map((e, i) => (
					<g key={i} opacity={prog(f, i * 8, 14)}>
						<Pl p={e.p} cx={e.cx} cy={ey} w={ew} dim={i === 0 ? 0 : dimOthers * 0.8} glow={i === 0 ? pulse : 0} />
						<g opacity={i === 0 ? 1 : 1 - 0.5 * dimOthers}><GTag x={e.cx} y={495} text={e.tag} at={6 + i * 8} size={24} anchor="middle" /></g>
					</g>
				))}
				<Pl p={PLATES.lamb} cx={lamb.cx} cy={lamb.cy} w={lamb.w} o={prog(f, K4.three, 14)} glow={pulse} />
				<QMark x={lamb.cx + 10} y={650} size={90} o={vis(f, K4.which, K4.nucleus + 10, 10)} />
				{/* the nucleus came from the white-faced ewe */}
				{f >= K4.nucleus + 6 ? <DrawPath d={`M${faces[0][0]},${faces[0][1] + 30} Q${faces[0][0] + 80},${lF[1] - 40} ${lF[0] - 30},${lF[1] - 10}`} at={K4.nucleus + 6} dur={22} color={AMBER} width={9} /> : null}
				<Pill x={1120} y={700} text="nuclear DNA: the nucleus donor" size={30} o={vis(f, K4.donor, K4.mito, 12)} />
				{/* not the egg donor or the surrogate */}
				{[1, 2].map((i, k) => {
					const a: [number, number] = [EWES[i].cx - (i === 1 ? 0 : 80), 525], b: [number, number] = [lamb.cx + (i === 1 ? -30 : 70), 690];
					return (
						<g key={i} opacity={prog(f, K4.notegg + k * 12, 10) * (1 - 0.5 * prog(f, K4.develops, 12))}>
							<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={GREYT} strokeWidth={2.5} strokeDasharray="6 6" />
							<GreyCross x={(a[0] + b[0]) / 2} y={(a[1] + b[1]) / 2} at={K4.notegg + 8 + k * 12} s={18} />
						</g>
					);
				})}
				{/* mitochondria came from the egg */}
				<g opacity={insetO}>
					<rect x={inset.cx - 150} y={inset.cy - 140} width={300} height={280} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
					<EggAt cx={inset.cx} cy={inset.cy} w={inset.w} id="b16-s4-egg" empty={1} donorNuc={1} />
					{mitoPts.map(([dx, dy, r], i) => <MitoG key={i} x={inset.cx + dx * 0.95} y={inset.cy + dy * 0.95} s={0.85} rot={r} color="#4a4643" fill="#d9d4cc" o={prog(f, K4.mito + 10 + i * 5, 8)} />)}
					<line x1={inset.cx - 40} y1={inset.cy - 140} x2={EWES[1].cx + 120} y2={480} stroke={GREYT} strokeWidth={2} strokeDasharray="5 5" />
				</g>
				<Pill x={1120} y={700} text="mitochondrial DNA: the egg" size={30} o={vis(f, K4.egg2, K4.develops + 20, 12)} />
				{/* development and environment */}
				<BalanceG x={lamb.cx} y={960} left="genes" right="environment" o={prog(f, K4.develops, 14)} />
				{['size', 'markings', 'health'].map((t, i) => (
					<g key={t} opacity={1 - 0.6 * sizeDim}><GTag x={1130} y={700 + i * 56} text={t} at={K4.size + i * 10} size={24} /></g>
				))}
				{void INK}
			</Overlay>
		</>
	);
};
