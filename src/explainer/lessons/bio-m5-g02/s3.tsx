// G02 scenes 4a to 4d: question 3, a PKU family (autosomal recessive). Certain genotypes first (fitsMode), then the
// woman's 2/3 carrier chance by crossing out the box she can't be, the 1/6 child chance, and the update to 1/4 when an
// affected child proves she is a carrier. Every fraction is computed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {GREYT, Overlay} from '../bio-m5-b06b/shared';
import {AlleleChip, PSym, Pedigree, Punnett, pedXY, pgeom} from '../bio-m5-b09/genetics';
import type {PLay} from '../bio-m5-b09/genetics';
import {DrawPath, scribbleEllipse} from '../../kit';
import {AidChip, Badge, CheckStrip, Crossed, GreyTag, QText, qCheck, HscTag, ModelLine, Note, PauseHold, RED, Sx, TaskLine, lerp, smooth, vis} from './board';
import {CARRIER, CHILD_A, CHILD_B, Demands, MOVES, MOVES_TITLE, PKU_SQ, PQ3, PQ3B, SLIP, hold, sc} from './shared';

const TASK3 = 'Probability that their first child has PKU, then the second.';
const L3: PLay = {x0: 210, y0: 320, gap: 150, row: 230, sz: 64};
const xy = pedXY(PQ3B, L3);
const chipY = (id: string) => xy(id)[1] + L3.sz / 2 + L3.sz * 0.42 + 28 + 14;
const PP = PKU_SQ.cells.findIndex(c => c.g === 'pp');
const Roles: React.FC<{at?: Record<string, number>}> = ({at}) => {
	const t = at ?? {};
	const r = (id: string, text: string, dx = 40, dy = -38, anchor: 'start' | 'end' = 'start') => {
		const [x, y] = xy(id);
		return <Sx key={id} x={x + dx} y={y + dy} text={text} size={26} color={AMBER_INK} hand anchor={anchor} at={t[id] ?? -100} />;
	};
	return <>{r('II-1', 'brother')}{r('II-2', 'woman')}{r('II-3', 'partner')}{r('I-3', 'his mother', -44, -46, 'end')}</>;
};
const Legend: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={prog(f, at, 12)}>
			<PSym x={116} y={850} sex="M" aff sz={30} />
			<Sx x={142} y={860} text="filled: has PKU" size={28} color={INK_SOFT} hand at={-100} />
		</g>
	);
};
/** The unknown child under the couple (dashed diamond with a question mark). */
const QChild: React.FC<{o: number}> = ({o}) => {
	if (o <= 0.01) return null;
	const [x, y] = xy('III-1');
	const s = 34;
	return (
		<g opacity={o}>
			<line x1={x} y1={L3.y0 + L3.row} x2={x} y2={y - s} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="8 6" />
			<path d={`M${x},${y - s} L${x + s},${y} L${x},${y + s} L${x - s},${y} Z`} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="8 6" />
			<text x={x} y={y + 14} textAnchor="middle" style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>?</text>
		</g>
	);
};
const QMark: React.FC<{id: string; o?: number}> = ({id, o = 1}) => {
	if (o <= 0.01) return null;
	const [x] = xy(id);
	const y = chipY(id);
	return (
		<g opacity={o}>
			<rect x={x - 30} y={y - 18} width={60} height={36} rx={18} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 5" />
			<text x={x} y={y + 10} textAnchor="middle" style={{fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 28}} fill={INK_SOFT}>?</text>
		</g>
	);
};
type Q3At = {pku: number; fam: number; partner: number; mother: number; first: number; second: number};
const NO3: Q3At = {pku: -100, fam: -100, partner: -100, mother: -100, first: -100, second: -100};
const M3 = ['autosomal recessive', 'his mother does', 'her brother does, and their parents do not', 'a woman does not have PKU'];
const Q3Q = (t: Q3At) => qCheck([
	{text: 'Phenylketonuria (PKU) is an autosomal recessive condition.', at: t.pku},
	{text: 'In this family, a woman does not have PKU, but her brother does, and their parents do not.', at: t.fam},
	{text: 'Her partner does not have PKU, but his mother does.', at: t.partner},
	{text: 'Assume one gene and no new mutation.', at: t.mother + 20},
	{text: '(a) What is the probability that their first child has PKU?', at: t.first, para: true, weight: 650},
	{text: '(b) If their first child does have PKU, what is the probability for the second child?', at: t.second, para: true, weight: 650},
], M3.map(phrase => ({phrase, at: 1e9})));
Q3Q(NO3);
const done3 = (n: number) => Object.fromEntries(M3.slice(0, n).map(p => [p, -100])) as Record<string, number>;
const Q3Head: React.FC<{a?: Q3At; m?: Record<string, number>}> = ({a, m = {}}) => {
	const t = a ?? NO3;
	return (
		<g>
			<TaskLine text={TASK3} at={a ? 6 : -100} size={48} />
			<HscTag at={a ? 10 : -100} />
			<Badge text="Pedigree: probability" at={a ? 14 : -100} />
			<QText q={Q3Q(t)} x={1004} y={278} w={796} size={28} lh={36} at={t.pku} markAt={m} />
		</g>
	);
};
const SURE: Record<string, [string, number]> = {'I-3': ['pp', -100], 'II-3': ['Pp', -100], 'II-1': ['pp', -100], 'I-1': ['Pp', -100], 'I-2': ['Pp', -100]};
const ANS3 = {a: `(a) ${CHILD_A}`, b: `(b) ${CHILD_B}`};

// ---------- 4a. Question 3 (pause) ----------
const KA = cues(sc('q3-question'), {q: 'Question three', pku: 'Phenylketonuria', ar: 'autosomal recessive', fam: 'In this family', woman: 'a woman', brother: 'her brother does', parents: 'their parents', partner: 'Her partner', mother: 'his mother does', first: 'their first child has', second: 'And if their first child', pause: 'Pause here'});
export const SceneQ3QuestionG2: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q3-question');
	const at: Record<string, number> = {'II-2': KA.woman, 'II-1': KA.brother, 'I-1': KA.parents, 'I-2': KA.parents + 6, 'II-3': KA.partner, 'I-3': KA.mother, 'I-4': KA.mother + 8};
	return (
		<Overlay>
			<Q3Head a={{pku: KA.pku, fam: KA.fam, partner: KA.partner, mother: KA.mother, first: KA.first - 40, second: KA.second}} />
			<Pedigree ped={PQ3} L={L3} o={id => prog(f, at[id] ?? 0, 12)} />
			<Roles at={{'II-2': KA.woman + 6, 'II-1': KA.brother + 6, 'II-3': KA.partner + 6, 'I-3': KA.mother + 6}} />
			<QChild o={prog(f, KA.first, 12)} />
			<Legend at={KA.brother + 10} />
			<PauseHold h={h} at={KA.pause} x={980} y={930} cx={1680} cy={850} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} hold={h} />
		</Overlay>
	);
};

// ---------- 4b. The genotypes you can be sure of ----------
const KB = cues(sc('q3-sure'), {sure: 'people you can be sure of', two: 'two recessive alleles', gave: 'she gave him one', unaff: "He's unaffected", carrier: 'he must be a carrier', brother: "The woman's brother", both: 'both parents are carriers'});
export const SceneQ3Sure: React.FC = () => {
	const f = useCurrentFrame();
	const chips: Record<string, [string, number]> = {'I-3': ['pp', KB.two + 10], 'II-3': ['Pp', KB.carrier + 6], 'II-1': ['pp', KB.brother + 14], 'I-1': ['Pp', KB.both + 6], 'I-2': ['Pp', KB.both + 12]};
	const t = smooth((f - KB.gave) / 26);
	const [x1] = xy('I-3'), [x2] = xy('II-3');
	const p = f >= KB.gave && f < KB.carrier + 10;
	return (
		<Overlay>
			<Q3Head m={{[M3[0]]: KB.sure + 4, [M3[1]]: KB.two, [M3[2]]: KB.brother}} />
			<Pedigree ped={PQ3} L={L3} chips={chips} chipSize={28} rings={{'I-3': KB.two, 'II-1': KB.brother + 6, 'I-1': KB.both, 'I-2': KB.both + 4}} />
			<Roles />
			<QChild o={1} />
			<QMark id="II-2" o={prog(f, KB.both + 30, 12)} />
			<Legend at={-100} />
			{p ? <AlleleChip x={lerp(x1, x2, t)} y={lerp(chipY('I-3'), chipY('II-3') - 40, t)} t="p" r={20} edge={AMBER} /> : null}
			<GreyTag x={xy('II-3')[0] + 50} y={chipY('II-3') - 20} text="carrier: certain" at={KB.carrier + 10} size={26} />
			<GreyTag x={980} y={650} text="unaffected parents, affected child: both carriers (B9)" at={KB.both + 16} size={26} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{1: [KB.sure]}} />
		</Overlay>
	);
};

// ---------- 4c. Cross out the box she can't be ----------
const KC = cues(sc('q3-two-thirds'), {woman: 'Now the woman', sq: "Her parents' square", cross: 'cross out the affected box', three: 'That leaves three', two: 'two of them are carriers', twoThirds: 'a two in three chance', ifShe: 'If she is', quarter: 'each child has a one in four', mult: 'Two thirds times', six: 'one in six'});
const G3 = {x: 1060, y: 690, cell: 105};
export const SceneQ3TwoThirds: React.FC = () => {
	const f = useCurrentFrame();
	const G = pgeom(G3.x, G3.y, G3.cell, 30);
	const [bx, by] = G.box(PP);
	const crossP = smooth((f - KC.cross - 8) / 14);
	const SURE_DONE = Object.fromEntries(Object.entries(SURE)) as typeof SURE;
	return (
		<Overlay>
			<Q3Head m={{...done3(3), [M3[3]]: KC.woman + 6}} />
			<Pedigree ped={PQ3} L={L3} chips={SURE_DONE} chipSize={28} rings={{'II-2': KC.woman}} />
			<Roles />
			<QChild o={1} />
			<QMark id="II-2" />
			<Legend at={-100} />
			<Punnett x={G3.x} y={G3.y} cell={G3.cell} res={PKU_SQ} top={['P', 'p']} side={['P', 'p']} gridAt={KC.sq - 6} topAt={KC.sq} sideAt={KC.sq + 8} fillAt={i => KC.sq + 24 + i * 6} discR={30} plain
				dim={i => (i === PP ? 1 - 0.6 * prog(f, KC.cross + 8, 12) : 1)}
				ring={i => (i === PP ? 0 : vis(f, KC.three, KC.ifShe))} hi={i => (PKU_SQ.cells[i].g === 'Pp' ? prog(f, KC.two, 10) : 0)} />
			{crossP > 0.01 ? <g opacity={crossP}><path d={`M${bx - 40},${by - 40} L${bx + 40},${by + 40} M${bx + 40},${by - 40} L${bx - 40},${by + 40}`} stroke={GREYT} strokeWidth={8} strokeLinecap="round" /></g> : null}
			<GreyTag x={G3.x - 40} y={G3.y + 2 * G3.cell + 14} text="she's unaffected: not this box" at={KC.cross + 14} size={24} />
			<AidChip x={1320} y={606} text="Cross out the box they can't be." at={KC.cross + 20} size={28} />
			<Sx x={1320} y={700} text={`P(she's a carrier) = ${CARRIER}`} size={30} color={AMBER_INK} weight={800} at={KC.twoThirds} />
			<Sx x={1320} y={742} text="× 1 (he's a carrier)" size={28} color={INK} weight={600} at={KC.ifShe} />
			<Sx x={1320} y={782} text={`× ${CHILD_B} (a pp child from Pp × Pp)`} size={28} color={INK} weight={600} at={KC.quarter} />
			<Sx x={1320} y={830} text={`= 2/12 = ${CHILD_A}`} size={32} color={AMBER_INK} weight={800} at={KC.six} />
			<ModelLine x={130} y={910} text={ANS3.a} at={KC.six + 8} size={32} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{1: [-100], 2: [KC.mult]}} />
		</Overlay>
	);
};

// ---------- 4d. New evidence, and the classic mistake ----------
const KD = cues(sc('q3-update'), {sup: 'Now suppose their first child', needed: 'needed a recessive allele from her', proves: 'proves', both: 'Now both are carriers', quarter: 'one in four', classic: 'The classic mistake', half: 'a one in two chance', keeps: 'keeps the affected box', cant: "which she can't be"});
const MG = {x: 1000, y: 700, cell: 80};
const GG = {x: 1660, y: 700, cell: 56};
export const SceneQ3Update: React.FC = () => {
	const f = useCurrentFrame();
	const [cx, cy] = xy('III-1'), [wx] = xy('II-2');
	const t = smooth((f - KD.needed) / 30);
	const moving = f >= KD.needed && f < KD.proves + 6;
	const proved = prog(f, KD.proves, 10);
	const chips: Record<string, [string, number]> = {...SURE, 'II-2': ['Pp', KD.proves], 'III-1': ['pp', KD.sup + 20]};
	const g = pgeom(GG.x, GG.y, GG.cell, 16);
	const [gx, gy] = g.box(PP);
	const mg = pgeom(MG.x, MG.y, MG.cell, 22);
	const [mx, my] = mg.box(PP);
	return (
		<Overlay>
			<Q3Head m={done3(4)} />
			<Pedigree ped={PQ3B} L={L3} o={id => (id === 'III-1' ? prog(f, KD.sup + 6, 12) : 1)} chips={chips} chipSize={28} rings={{'II-2': KD.proves + 4}} />
			<Roles />
			<QChild o={1 - prog(f, KD.sup, 10)} />
			<QMark id="II-2" o={1 - proved} />
			<Legend at={-100} />
			<Sx x={cx + 48} y={cy + 10} text="first child: PKU" size={28} color={AMBER_INK} hand at={KD.sup + 14} />
			{moving ? <AlleleChip x={lerp(cx, wx, t)} y={lerp(cy - 40, chipY('II-2'), t)} t="p" r={20} edge={AMBER} /> : null}
			<Sx x={MG.x} y={MG.y - 62} text="the couple: Pp × Pp" size={28} color={INK_SOFT} hand at={KD.both} />
			<Punnett x={MG.x} y={MG.y} cell={MG.cell} res={PKU_SQ} top={['P', 'p']} side={['P', 'p']} gridAt={KD.both} topAt={KD.both + 6} sideAt={KD.both + 12} fillAt={i => KD.both + 20 + i * 5} discR={22} plain ring={i => (i === PP ? prog(f, KD.quarter, 10) : 0)} />
			<Sx x={1200} y={752} text="she is now a known carrier;" size={28} color={INK_SOFT} hand at={KD.quarter + 10} />
			<Sx x={1200} y={788} text="each child is a new chance" size={28} color={INK_SOFT} hand at={KD.quarter + 16} />
			<ModelLine x={130} y={910} text={ANS3.a} at={-100} size={32} />
			<ModelLine x={130} y={956} text={ANS3.b} at={KD.quarter + 6} size={32} />
			{/* the classic mistake: keeping the affected box in her parents' square */}
			<g opacity={prog(f, KD.half - 10, 12)}>
				<Punnett x={GG.x} y={GG.y} cell={GG.cell} res={PKU_SQ} top={['P', 'p']} side={['P', 'p']} gridAt={-100} topAt={-100} sideAt={-100} fillAt={() => -100} discR={16} plain />
				<Sx x={GG.x + GG.cell} y={GG.y + 2 * GG.cell + 40} text="her parents' square" size={24} color={INK_SOFT} hand anchor="middle" at={-100} />
				<DrawPath d={scribbleEllipse(gx, gy, 30, 28, 5)} at={KD.keeps} dur={14} color={RED} width={4} />
			</g>
			<Crossed x={1000} y={872} text={`her carrier chance = 2/4 = 1/2, child = ${SLIP}`} at={KD.half - 6} cross={KD.half + 12} caption="keeps the affected box" size={30} />
			{f >= KD.keeps ? <path d={`M1600,885 C1650,860 ${gx - 20},${gy + 60} ${gx - 8},${gy + 26}`} fill="none" stroke={RED} strokeWidth={4} strokeLinecap="round" opacity={prog(f, KD.keeps, 10)} /> : null}
			<Crossed x={330} y={920} text="1/4 for the first child (assumed both certain carriers)" at={KD.cant + 4} cross={KD.cant + 22} size={24} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{1: [KD.proves], 2: [KD.quarter]}} />
			{void mx}{void my}
		</Overlay>
	);
};
void INK; void AMBER; void Demands; void CARRIER;
