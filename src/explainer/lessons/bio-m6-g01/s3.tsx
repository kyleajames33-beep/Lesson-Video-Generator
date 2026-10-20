// M6 G01 scenes 4a to 4d: question 3. (a) An HSC-style chromosome diagram: compare gene by gene; the stretch B, C, D
// is reversed with the centromere inside it, on the same chromosome, so it is an inversion, not a translocation.
// (b) A 45,X karyotype: a change in number that can come from nondisjunction of the sex chromosomes in one parent's
// meiosis. Chromosomes are b04's clean bars and karyotype, never drawn over a painted cell.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {Heading, MistakeChip, Overlay, Sx} from '../bio-m5-b13/shared';
import {Badge, HscTag, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox, CurveArrow, GTag} from '../bio-m6-b01/parts';
import {Bar, BarTag, Glyph, KChrom, MCell, PLUMC, TEALC, TickC, gx, lay, lerp, vis} from '../bio-m6-b04/parts';
import type {Seg, Tone} from '../bio-m6-b04/parts';
import {smooth} from '../bio-m6-b05/parts';
import {S, hold} from './common';
import {AnsBox, Checks, Line, PauseHold} from './board';

// ---------- data ----------
const N3 = ['A', 'B', '●', 'C', 'D', 'E', 'F', 'G'];
const M3 = ['A', 'D', 'C', '●', 'B', 'E', 'F', 'G'];
(() => {
	const seg = N3.slice(1, 5);
	if ([N3[0], ...[...seg].reverse(), ...N3.slice(5)].join() !== M3.join()) throw new Error('M6 G01 Q3: mutated bar must be B, centromere, C, D reversed');
	if ([...N3].sort().join() !== [...M3].sort().join()) throw new Error('M6 G01 Q3: an inversion keeps every gene');
})();
const INV = new Set(['B', 'C', 'D']);
const toned = (L: {segs: Seg[]}, on: number, tone: Tone = 'amber'): Seg[] => L.segs.map(s => (INV.has(s.l) && on > 0.5 ? {...s, tone} : s));
type A3 = {a: number; da: number; b: number; db: number};
const Q3 = (t: A3, marks: QMark[] = []) => qCheck([
	{text: 'The diagram shows a normal chromosome and a mutated version of it. Letters represent genes; the narrow waist is the centromere.', at: t.a},
	{text: '(a) Name the type of chromosomal mutation shown. Justify your answer. (2 marks)', at: t.da, para: true, weight: 700},
	{text: '(b) A karyotype from a person with Turner syndrome shows 45 chromosomes: 44 autosomes and one X chromosome.', at: t.b, para: true},
	{text: 'Identify the type of mutation and explain how it could arise during meiosis in one parent. (3 marks)', at: t.db, weight: 700},
] as QBlock[], marks);
qCheck(Q3({a: 0, da: 0, b: 0, db: 0}).blocks, [{phrase: '45 chromosomes', at: 0}, {phrase: 'one X chromosome', at: 0}]);
const NONE: A3 = {a: -100, da: -100, b: -100, db: -100};
/** Walkthrough strip: the question (small) and the two bars, small, at the right. */
const SB = {x: 1420, gw: 40, cw: 22};
const SN = lay(N3, SB.x, SB.gw, SB.cw), SM = lay(M3, SB.x, SB.gw, SB.cw);
const Strip3: React.FC<{marks?: QMark[]}> = ({marks = []}) => (
	<>
		<CardBox x={100} y={175} w={1720} h={300} at={-100} />
		<QText q={Q3(NONE, marks)} x={130} y={214} w={1640} size={30} card={false} s={0.72} />
		<BarTag x={SB.x - 14} y={262} text="normal" size={24} at={-100} />
		<Bar segs={SN.segs} cen={SN.cen} y={262} gw={SB.gw} h={34} />
		<BarTag x={SB.x - 14} y={322} text="mutated" size={24} at={-100} />
		<Bar segs={SM.segs} cen={SM.cen} y={322} gw={SB.gw} h={34} />
	</>
);

// ---------- 4a. Question 3 (pause) ----------
const KA = cues(S('q3-question'), {q: 'Question three', diagram: 'The diagram shows', mutated: 'a mutated version', name: 'Name the mutation', turner: 'Turner syndrome', f45: 'forty-five chromosomes', onex: 'only one X', identify: 'Identify this type', meiosis: 'during meiosis', pause: 'Pause here to answer'});
const FN = lay(N3, 360, 60, 30), FM = lay(M3, 360, 60, 30);
export const SceneQ3Question: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('q3-question');
	const t: A3 = {a: KA.diagram, da: KA.name, b: KA.turner, db: KA.identify};
	const blocks = Q3(t).blocks;
	return (
		<>
			<Heading text="Question 3" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<CardBox x={100} y={175} w={1720} h={815} at={KA.diagram - 6} />
				<QText q={qCheck(blocks.slice(0, 1), [])} x={130} y={232} w={1660} size={30} card={false} />
				<g opacity={prog(f, KA.diagram + 20, 12)}>
					<BarTag x={340} y={360} text="Normal" size={30} at={-100} />
					<Bar segs={FN.segs} cen={FN.cen} y={360} gw={60} h={50} />
				</g>
				<g opacity={prog(f, KA.mutated, 12)}>
					<BarTag x={340} y={450} text="Mutated" size={30} at={-100} />
					<Bar segs={FM.segs} cen={FM.cen} y={450} gw={60} h={50} />
				</g>
				<QText q={qCheck(blocks.slice(1, 2), [])} x={130} y={548} w={1660} size={29} card={false} />
				<AnsBox x={130} y={570} w={1660} h={92} at={KA.name + 10} label="(a)" />
				<QText q={qCheck(blocks.slice(2), [])} x={130} y={720} w={1660} size={29} card={false} />
				<AnsBox x={130} y={830} w={1660} h={140} at={KA.identify + 10} label="(b)" />
				<PauseHold h={h} at={KA.pause} x={960} y={420} cx={1640} cy={380} />
				<Checks hold={h} />
				{void KA.f45}{void KA.onex}{void KA.meiosis}
			</Overlay>
		</>
	);
};

// ---------- 4b. Gene by gene ----------
const KB = cues(S('q3-diagram'), {compare: 'Compare gene by gene', a: 'A is where', normal: 'the normal B', reads: 'reads D, C', same: 'the same genes', reversed: 'stretch reversed', inversion: "So it's an inversion", nothing: 'Nothing is lost', another: 'from another chromosome'});
const WB = {x: 560, gw: 80, cw: 36, ny: 600, my: 770, h: 60};
const WN = lay(N3, WB.x, WB.gw, WB.cw), WM = lay(M3, WB.x, WB.gw, WB.cw);
const Guide: React.FC<{l: string; at: number; amber?: boolean; o?: number}> = ({l, at, amber = false, o = 1}) => {
	const x1 = l === '●' ? (WN.cen ?? 0) : gx(WN, l, WB.gw), x2 = l === '●' ? (WM.cen ?? 0) : gx(WM, l, WB.gw);
	return (
		<g opacity={o}>
			<DrawPath d={`M${x1},${WB.ny + WB.h / 2 + 6} L${x2},${WB.my - WB.h / 2 - 6}`} at={at} dur={12} color={amber ? AMBER_INK : '#9a948a'} width={amber ? 4 : 3} dash={l === '●' ? '6 5' : undefined} />
		</g>
	);
};
const BoxA: React.FC<{at?: number[]; compact?: boolean}> = ({at = [-100, -100, -100, -100], compact = false}) => (compact ? (
	<>
		<AnsBox x={1270} y={500} w={550} h={96} at={-100} label="(a)" />
		<Line x={1320} y={570} text="inversion (B, C, D reversed)" at={-100} size={30} />
	</>
) : (
	<>
		<AnsBox x={1270} y={500} w={550} h={300} at={-100} label="(a)" />
		<Line x={1300} y={576} text="inversion: segment B, C, D" at={at[0]} size={32} />
		<Line x={1300} y={622} text="reversed (including the" at={at[1]} size={32} />
		<Line x={1300} y={668} text="centromere); same genes," at={at[2]} size={32} />
		<Line x={1300} y={714} text="same chromosome" at={at[3]} size={32} />
	</>
));
export const SceneQ3Diagram: React.FC = () => {
	const f = useCurrentFrame();
	const shade = prog(f, KB.reads, 10);
	return (
		<>
			<Heading text="Compare gene by gene" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Chromosomes" at={6} />
				<Strip3 />
				<g opacity={prog(f, 6, 14)}>
					<BarTag x={WB.x - 20} y={WB.ny} text="normal" size={32} at={-100} />
					<Bar segs={toned(WN, shade)} cen={WN.cen} cenTone={shade > 0.5 ? 'amber' : 'n'} y={WB.ny} gw={WB.gw} h={WB.h} />
					<BarTag x={WB.x - 20} y={WB.my} text="mutated" size={32} at={-100} />
					<Bar segs={toned(WM, shade)} cen={WM.cen} cenTone={shade > 0.5 ? 'amber' : 'n'} y={WB.my} gw={WB.gw} h={WB.h} />
				</g>
				<Guide l="A" at={KB.a} />
				{['B', '●', 'C', 'D'].map((l, k) => <Guide key={l} l={l} at={KB.reads + k * 6} amber />)}
				{['E', 'F', 'G'].map((l, k) => <Guide key={l} l={l} at={KB.reversed + k * 6} />)}
				<CurveArrow a={[gx(WN, 'B', WB.gw) - 30, WB.ny - 52]} b={[gx(WN, 'D', WB.gw) + 30, WB.ny - 52]} at={KB.reads + 30} bow={-50} color={AMBER_INK} width={4} />
				<CurveArrow a={[gx(WM, 'B', WB.gw) + 30, WB.my + 52]} b={[gx(WM, 'D', WB.gw) - 30, WB.my + 52]} at={KB.reads + 40} bow={50} color={AMBER_INK} width={4} />
				<Line x={WB.x - 200} y={960} text="segment reversed, centromere included" at={KB.reads + 34} out={KB.another} size={36} />
				<Line x={WB.x - 200} y={960} text="nothing lost, added or swapped" at={KB.another + 6} size={36} />
				{M3.filter(l => l !== '●').map((l, k) => <TickC key={l} x={gx(WM, l, WB.gw)} y={WB.my + 118} o={prog(f, KB.another + 10 + k * 4, 8)} />)}
				<BoxA at={[KB.inversion, KB.inversion + 8, KB.inversion + 16, KB.inversion + 24]} />
				<Checks ticks={{0: [KB.inversion]}} />
				{void KB.compare}{void KB.normal}{void KB.same}{void KB.nothing}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 4c. One chromosome missing ----------
const KC = cues(S('q3-karyotype'), {partb: 'Now part b', f45: 'Forty-five chromosomes means', missing: 'is missing', number: 'mutation in number', nondis: 'nondisjunction', parent: "In one parent's meiosis", fail: 'fail to separate', nosex: 'no sex chromosome at all', xcar: 'If an X-carrying gamete', zyg: 'the zygote has', f44: 'forty-four autosomes'});
const KX0 = 170, KP = 44, KY = 790, KSC = 0.42;
export const SceneQ3Karyotype: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = smooth(prog(f, 4, 26));
	const kO = vis(f, KC.f45 - 10, KC.nondis + 10, 14);
	const mO = prog(f, KC.nondis + 6, 14);
	const mv = smooth(prog(f, KC.fail + 6, 30));
	const meet = smooth(prog(f, KC.xcar + 10, 30));
	const zy = prog(f, KC.zyg - 4, 14);
	const st = [330, 700], up = [640, 590], lo = [640, 830];
	const egg = [lerp(1080, lo[0] + 40, meet), lo[1]];
	const gam = [lo[0], lo[1]];
	return (
		<>
			<Heading text="One chromosome missing" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Chromosomes" at={-100} />
				<Strip3 marks={[{phrase: '45 chromosomes', at: KC.f45 + 4}, {phrase: 'one X chromosome', at: KC.f45 + 20}]} />
				{/* the bars dim and shrink aside, then leave */}
				<g opacity={(1 - 0.6 * shrink) * (1 - prog(f, KC.f45 - 20, 14))} transform={`translate(${lerp(0, -380, shrink)},${lerp(0, -110, shrink)}) translate(560,680) scale(${lerp(1, 0.5, shrink)}) translate(-560,-680)`}>
					<Bar segs={WN.segs} cen={WN.cen} y={WB.ny} gw={WB.gw} h={WB.h} />
					<Bar segs={WM.segs} cen={WM.cen} y={WB.my} gw={WB.gw} h={WB.h} />
				</g>
				<BoxA compact />
				{/* the karyotype: 22 pairs and one X, with an empty outline for the missing sex chromosome */}
				<g opacity={kO}>
					{Array.from({length: 22}, (_, i) => (
						<g key={i}>
							<KChrom x={KX0 + i * KP - 8} y={KY} i={i} sc={KSC} w={10} />
							<KChrom x={KX0 + i * KP + 8} y={KY} i={i} sc={KSC} w={10} />
							<text x={KX0 + i * KP} y={KY + 28} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 18}} fill={INK_SOFT}>{i + 1}</text>
						</g>
					))}
					<KChrom x={KX0 + 22 * KP + 4} y={KY} i={22} sc={KSC} w={10} amber />
					<rect x={KX0 + 22 * KP + 15} y={KY - 156 * KSC} width={10} height={156 * KSC} rx={5} fill="none" stroke={AMBER_INK} strokeWidth={2} strokeDasharray="5 4" />
					<text x={KX0 + 22 * KP + 14} y={KY + 28} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 18}} fill={AMBER_INK}>X</text>
					<Sx x={KX0 + 22 * KP + 14} y={KY - 110} text="45" size={60} color={AMBER_INK} weight={800} anchor="middle" at={KC.f45 + 10} />
					<Line x={KX0} y={880} text="one chromosome missing" at={KC.missing} out={KC.nondis} size={36} />
				</g>
				{/* the meiosis strip: the sex chromosome pair fails to separate */}
				<g opacity={mO}>
					<Sx x={st[0]} y={st[1] - 110} text="sex chromosomes" size={30} color={INK_SOFT} hand anchor="middle" />
					<MCell x={st[0]} y={st[1]} r={84} chroms={mv < 0.02 ? [{color: PLUMC, dx: -16, dy: 0, dup: true}, {color: TEALC, dx: 16, dy: 0, dup: true}] : []} o={1 - 0.5 * mv} />
					<DrawPath d={`M${st[0] + 84},${st[1] - 20} L${up[0] - 66},${up[1]}`} at={KC.fail} dur={10} color={INK_SOFT} width={2.5} dash="6 6" />
					<DrawPath d={`M${st[0] + 84},${st[1] + 20} L${lo[0] - 66},${lo[1]}`} at={KC.fail} dur={10} color={INK_SOFT} width={2.5} dash="6 6" />
					<MCell x={up[0]} y={up[1]} r={62} o={mv} chroms={mv >= 1 ? [{color: PLUMC, dx: -12, dy: 0, dup: true}, {color: TEALC, dx: 12, dy: 0, dup: true}] : []} />
					{mv > 0.01 && mv < 1 ? [PLUMC, TEALC].map((c, k) => <Glyph key={k} x={lerp(st[0] - 16 + 32 * k, up[0] - 12 + 24 * k, mv)} y={lerp(st[1], up[1], mv)} color={c} dup />) : null}
					{zy < 1 ? <MCell x={gam[0]} y={gam[1]} r={62} o={mv * (1 - zy)} stroke={prog(f, KC.nosex, 10) > 0.5 ? AMBER : '#8a7a63'} /> : null}
					<Sx x={lo[0] + 80} y={lo[1] + 10} text="no sex chromosome" size={32} color={AMBER_INK} hand anchor="start" at={KC.nosex + 4} out={KC.xcar + 20} />
					<GTag x={st[0] - 150} y={st[1] + 110} text="b04: fail to dis-join" at={KC.fail + 10} out={KC.nosex} size={26} />
					{zy < 1 ? <MCell x={egg[0]} y={egg[1]} r={52} o={prog(f, KC.xcar, 12) * (1 - zy)} chroms={[{color: PLUMC, dx: 0, dy: 0}]} /> : null}
					<MCell x={lo[0]} y={lo[1]} r={78} o={zy} chroms={[{color: PLUMC, dx: 0, dy: 0}]} />
					<Sx x={lo[0] + 300} y={lo[1] + 16} text="44 + X = 45" size={44} color={AMBER_INK} weight={800} anchor="middle" at={KC.f44} />
				</g>
				<AnsBox x={1270} y={616} w={550} h={360} at={-100} label="(b)" />
				<Line x={1300} y={690} text="change in number (one sex" at={KC.number} size={30} />
				<Line x={1300} y={732} text="chromosome missing);" at={KC.number + 8} size={30} />
				<Line x={1300} y={786} text="nondisjunction in one parent's" at={KC.fail + 20} size={30} />
				<Line x={1300} y={828} text="meiosis: a gamete with no" at={KC.nosex + 10} size={30} />
				<Line x={1300} y={870} text="sex chromosome;" at={KC.nosex + 18} size={30} />
				<Line x={1300} y={924} text="+ an X gamete = 45,X" at={KC.f44 + 10} size={30} />
				<Checks ticks={{0: [-100], 1: [KC.number]}} />
				{void KC.partb}{void KC.parent}
			</Overlay>
		</>
	);
};

// ---------- 4d. The classic mistake ----------
const KD = cues(S('q3-mistake'), {classic: 'The classic mistake', calling: 'calling it a translocation', every: 'But every gene', needs: 'A translocation needs', diff: 'a different, non-matching'});
const DB = {x: 330, gw: 66, cw: 30, ny: 600, my: 720, h: 50};
const DN = lay(N3, DB.x, DB.gw, DB.cw), DM = lay(M3, DB.x, DB.gw, DB.cw);
const GH = lay(['M', 'N', '●', 'O', 'P', 'Q'], 1180, 60, 28, 'blue');
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const ghost = vis(f, KD.diff - 4, KD.diff + 110, 14);
	return (
		<>
			<Heading text="Same chromosome: an inversion" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<Badge text="Chromosomes" at={-100} />
				<Strip3 />
				<g opacity={prog(f, 2, 14)}>
					<BarTag x={DB.x - 18} y={DB.ny} text="normal" size={30} at={-100} />
					<Bar segs={toned(DN, 1)} cen={DN.cen} cenTone="amber" y={DB.ny} gw={DB.gw} h={DB.h} />
					<BarTag x={DB.x - 18} y={DB.my} text="mutated" size={30} at={-100} />
					<Bar segs={toned(DM, 1)} cen={DM.cen} cenTone="amber" y={DB.my} gw={DB.gw} h={DB.h} />
				</g>
				<Line x={DB.x} y={DB.my + 84} text="every gene: still on this chromosome" at={KD.every + 6} out={KD.needs} size={32} color={INK_SOFT} />
				<g opacity={ghost}>
					<Bar segs={GH.segs} cen={GH.cen} cenTone="blue" y={660} gw={60} h={46} />
					<Sx x={1180} y={600} text="translocation: needs a second chromosome" size={30} color={INK_SOFT} hand />
				</g>
				<CurveArrow a={[DM.segs[6].x + DB.gw, DB.my]} b={[1170, 672]} at={KD.diff + 6} bow={60} color={INK_SOFT} width={3} dash="8 7" out={KD.diff + 110} />
				<CurveArrow a={[1176, 646]} b={[DM.segs[6].x + DB.gw + 10, DB.my - 24]} at={KD.diff + 14} bow={-50} color={INK_SOFT} width={3} dash="8 7" out={KD.diff + 110} />
				<MistakeChip x={100} y={862} text="translocation: the centromere moved" at={KD.classic} cross={KD.calling + 20} size={30} />
				<MistakeChip x={100} y={930} text="part b: a deletion (a whole chromosome is not a segment)" at={KD.diff + 70} cross={KD.diff + 86} size={28} />
				<Checks ticks={{0: [-100], 1: [-100]}} />
				{void AMBER}
			</Overlay>
		</>
	);
};
