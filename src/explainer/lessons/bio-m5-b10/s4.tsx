// B10 scenes 12a to 14: two harder unseen items (a colour blindness family; an ABO family) with brief feedback, the
// decision rule with the handoff, and the key notes. Each question card stays complete through its 10 s countdown and
// after it; nothing answer-bearing is on a card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	ABO, AMBER, AMBER_INK, AlleleChip, AnswerBox, AntigenCell, CB, Chip, Countdown, Enter, FONT_DISPLAY, FONT_HAND, Fade, GenoTag, HairZoom, HandText, Heading,
	INK, INK_SOFT, MistakeChip, ModelLine, Overlay, PCB, PL10, PSym, Pedigree, PlateB, Punnett, S, SexChrom, Sx, TEALC, groupMarks, hold, lerp, notesCheck,
	pedXY, prog, wrap, fadeV,
} from './shared';
import {PunnettHSC} from '../bio-m5-b09/punnett-hsc';
import type {PLay} from './shared';
import {SexBands} from './s1';

const Legend: React.FC<{x: number; y: number; at: number; label: string}> = ({x, y, at, label}) => (
	<Fade at={at}>
		<PSym x={x} y={y} sex="M" aff={false} sz={36} />
		<PSym x={x + 48} y={y} sex="F" aff={false} sz={36} />
		<Sx x={x + 82} y={y + 10} text="normal vision" size={28} color={INK} hand />
		<PSym x={x + 290} y={y} sex="M" aff sz={36} />
		<Sx x={x + 324} y={y + 10} text={label} size={28} color={INK} hand />
	</Fade>
);
/** The "?" child below a couple. */
const QChild: React.FC<{x: number; y: number; sz: number; o?: number}> = ({x, y, sz, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<rect x={x - sz / 2} y={y - sz / 2} width={sz} height={sz} rx={8} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" />
		<text x={x} y={y + sz * 0.22} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: sz * 0.62}} fill={INK_SOFT}>?</text>
	</g>
));

// ---------- 12a. Attempt one (colour blindness) ----------
const K12 = cues(S('attempt'), {two: 'Two harder questions now', first: 'First, red-green colour blindness', rec: 'a recessive allele on the X chromosome', woman: 'A woman with normal vision', father: 'whose father was colour-blind', man: 'a man with normal vision', p1: "What's the probability that their first child", p2: "What's the probability that a son", p3: 'And could a daughter', explain: 'Explain', pause: 'Pause here to answer'});
const L12: PLay = {x0: 300, y0: 330, gap: 240, row: 250, sz: 78};
const D1A = '(a) Probability that their first child is a colour-blind son?';
const D1B = '(b) Probability that a son of theirs is colour-blind?';
const D1C = '(c) Could a daughter of theirs be colour-blind? Explain.';
export const SceneAttemptB10: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('attempt');
	const xy = pedXY(PCB, L12);
	const appear: Record<string, number> = {'II-1': K12.woman, 'I-1': K12.father, 'I-2': K12.father + 6, 'II-2': K12.man};
	const [wx, wy] = xy('II-1'), [mx] = xy('II-2');
	const cx = (wx + mx) / 2;
	return (
		<>
			<Heading text="Red-green colour blindness: recessive allele on the X" at={K12.first} size={46} />
			<Overlay>
				<Pedigree ped={PCB} L={L12} o={id => prog(f, appear[id], 12)} />
				<Sx x={xy('I-1')[0]} y={xy('I-1')[1] - 56} text="her father" size={28} color={INK_SOFT} hand anchor="middle" at={K12.father + 4} />
				<Sx x={wx - 60} y={wy + 10} text="woman" size={28} color={INK_SOFT} hand anchor="end" at={K12.woman + 4} />
				<Sx x={mx + 60} y={wy + 10} text="man" size={28} color={INK_SOFT} hand at={K12.man + 4} />
				<g opacity={prog(f, K12.p1, 12)}>
					<line x1={cx} y1={wy} x2={cx} y2={wy + 170} stroke={INK} strokeWidth={4} />
					<QChild x={cx} y={wy + 210} sz={70} />
				</g>
				<Legend x={210} y={930} at={K12.woman} label="colour-blind" />
				<Sx x={900} y={320} text={D1A} size={30} color={INK} weight={700} at={K12.p1} />
				<AnswerBox x={900} y={336} w={920} h={62} at={K12.p1 + 8} lines={1} />
				<Sx x={900} y={480} text={D1B} size={30} color={INK} weight={700} at={K12.p2} />
				<AnswerBox x={900} y={496} w={920} h={62} at={K12.p2 + 8} lines={1} />
				<Sx x={900} y={640} text={D1C} size={30} color={INK} weight={700} at={K12.p3} />
				<AnswerBox x={900} y={656} w={920} h={96} at={K12.explain} lines={2} />
				<Sx x={96} y={1046} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K12.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1700} y={890} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Feedback one ----------
const K13 = cues(S('feedback-one'), {father: 'Her father gave her his only X', allele: 'with the colour-blind allele', carrier: "so she's a carrier", son: 'Each son gets his X from her', half: 'a son has a one in two chance', all: 'Among all their children', quarter: 'a one in four chance of a colour-blind son', every: "Every daughter gets her father's normal X", nod: 'no daughter can be colour-blind', ifs: 'If you said one in two', sons: 'you answered for sons'});
const L13: PLay = {x0: 210, y0: 330, gap: 170, row: 210, sz: 60};
export const SceneFeedbackOneB10: React.FC = () => {
	const f = useCurrentFrame();
	const xy = pedXY(PCB, L13);
	const t = prog(f, K13.father, 26);
	const [ax, ay] = xy('I-1'), [bx, by] = xy('II-1');
	const G = {x: 790, y: 390, cell: 150, dr: 34};
	const fills = [K13.carrier + 6, K13.son + 6, K13.carrier + 12, K13.son + 12];
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text="(a) first child a colour-blind son?   (b) a son colour-blind?   (c) could a daughter be colour-blind?" size={26} color={INK_SOFT} weight={600} at={0} />
				<Pedigree ped={PCB} L={L13} />
				{/* the woman is a carrier (dot drawn on her circle) */}
				<g opacity={prog(f, K13.carrier, 10)}><circle cx={bx} cy={by} r={L13.sz * 0.14} fill={INK} /></g>
				<g opacity={fadeV(f, K13.father - 4, K13.carrier + 30)}><SexChrom x={lerp(ax, bx, t) + 46} y={lerp(ay, by, t) - Math.sin(Math.PI * t) * 30} kind="X" tag="b" s={0.7} /></g>
				<GenoTag x={bx} y={by + 90} text="X^{B} X^{b}" size={26} o={prog(f, K13.carrier, 12)} stroke={AMBER} />
				<GenoTag x={xy('II-2')[0]} y={by + 90} text="X^{B} Y" size={26} o={prog(f, K13.carrier + 8, 12)} />
				<PunnettHSC x={G.x} y={G.y} cell={G.cell} res={CB} top={['X^{B}', 'Y']} side={['X^{B}', 'X^{b}']} gridAt={K13.carrier} topAt={K13.carrier + 2} sideAt={K13.carrier + 4} fillAt={i => fills[i]} discR={G.dr} chipR={18} phen />
				<SexBands x={G.x} y={G.y} cell={G.cell} dr={G.dr} at={K13.carrier + 4} />
				<g opacity={fadeV(f, K13.half - 4, K13.all)}><rect x={G.x + G.cell - 2} y={G.y - 2} width={G.cell + 4} height={2 * G.cell + 4} rx={12} fill="none" stroke={AMBER} strokeWidth={6} /></g>
				<g opacity={fadeV(f, K13.all, K13.every)}><rect x={G.x - 8} y={G.y - 8} width={2 * G.cell + 16} height={2 * G.cell + 16} rx={14} fill="none" stroke={AMBER} strokeWidth={6} /></g>
				<g opacity={prog(f, K13.every, 12)}><rect x={G.x - 2} y={G.y - 2} width={G.cell + 4} height={2 * G.cell + 4} rx={12} fill="none" stroke={TEALC} strokeWidth={6} /></g>
				<ModelLine x={1180} y={360} text={`(b) ${CB.frac(c => c.ph === 'colour-blind', CB.sons)} of sons`} at={K13.half} size={34} />
				<ModelLine x={1180} y={430} text={`(a) ${CB.frac(c => c.male && c.ph === 'colour-blind')} of all children`} at={K13.quarter} size={34} />
				<ModelLine x={1180} y={500} text="(c) No: every daughter gets X^{B}" at={K13.nod} size={32} />
				<Sx x={1180} y={546} text="from her father; half are carriers" size={32} color={INK} weight={600} at={K13.nod + 8} />
				<MistakeChip x={790} y={790} text="first child: 1/2 colour-blind son" at={K13.ifs} cross={K13.sons} size={30} />
				<Sx x={1450} y={828} text="that's sons only" size={34} color={AMBER_INK} hand at={K13.sons + 8} />
			</Overlay>
		</>
	);
};

// ---------- 12c. Attempt two (an ABO family) ----------
const K14 = cues(S('attempt-two'), {second: 'Second', mother: 'A mother with type A blood', father: 'a father with type B blood', child: 'have a child with type O blood', work: 'Work out the genotypes of all three', then: 'Then find the probability', pause: 'Pause here to answer'});
const D2A = '(a) Genotypes of the mother, father and child?';
const D2B = '(b) Probability that their next child is type AB?';
/** Family card: mother and father symbols, a child (diamond: sex not given), each with a type and a genotype line. */
const Family: React.FC<{x: number; y: number; s?: number; at: [number, number, number]; geno?: [string, string, string]; genoAt?: [number, number, number]}> = ({x, y, s = 1, at, geno, genoAt}) => {
	const f = useCurrentFrame();
	const mum: [number, number] = [x - 170 * s, y], dad: [number, number] = [x + 170 * s, y], kid: [number, number] = [x, y + 230 * s];
	const card = (p: [number, number], label: string, a: number, i: number, cell: {a: number; b: number}) => (
		<g opacity={prog(f, a, 12)}>
			<AntigenCell id={'fam' + i + x} x={p[0] + (i === 1 ? 84 : -84) * s} y={p[1]} w={52 * s} a={cell.a} b={cell.b} labels={false} />
			<Sx x={p[0]} y={p[1] + 70 * s} text={label} size={30 * s} color={INK} hand anchor="middle" />
			<line x1={p[0] - 80 * s} y1={p[1] + 110 * s} x2={p[0] + 80 * s} y2={p[1] + 110 * s} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
			{geno && genoAt ? <GenoTag x={p[0]} y={p[1] + 100 * s} text={geno[i]} size={28 * s} o={prog(f, genoAt[i], 12)} stroke={AMBER} /> : null}
		</g>
	);
	const sz = 64 * s;
	return (
		<g>
			<g opacity={prog(f, at[0], 12)}><PSym x={mum[0]} y={mum[1]} sex="F" aff={false} sz={sz} /></g>
			<g opacity={prog(f, at[1], 12)}><PSym x={dad[0]} y={dad[1]} sex="M" aff={false} sz={sz} /></g>
			<g opacity={Math.min(prog(f, at[0], 12), prog(f, at[1], 12))}><line x1={mum[0] + sz / 2} y1={y} x2={dad[0] - sz / 2} y2={y} stroke={INK} strokeWidth={4} /></g>
			<g opacity={prog(f, at[2], 12)}>
				<line x1={x} y1={y} x2={x} y2={kid[1] - sz / 2 - 4} stroke={INK} strokeWidth={4} />
				<rect x={kid[0] - sz * 0.36} y={kid[1] - sz * 0.36} width={sz * 0.72} height={sz * 0.72} fill="#fffdf8" stroke={INK} strokeWidth={4} transform={`rotate(45 ${kid[0]} ${kid[1]})`} />
			</g>
			{card(mum, 'mother: type A', at[0], 0, {a: 1, b: 0})}
			{card(dad, 'father: type B', at[1], 1, {a: 0, b: 1})}
			{card(kid, 'child: type O', at[2], 2, {a: 0, b: 0})}
		</g>
	);
};
export const SceneAttemptTwoB10: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="An ABO family" at={K14.second} size={52} />
			<Overlay>
				<Family x={460} y={360} at={[K14.mother, K14.father, K14.child]} />
				<Fade at={K14.mother}>
					<rect x={120} y={860} width={680} height={70} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<Sx x={150} y={906} text="alleles: I^{A}, I^{B}, i" size={34} color={INK} weight={700} />
				</Fade>
				<Sx x={920} y={340} text={D2A} size={32} color={INK} weight={700} at={K14.work} />
				<AnswerBox x={920} y={358} w={900} h={96} at={K14.work + 8} lines={2} />
				<Sx x={920} y={560} text={D2B} size={32} color={INK} weight={700} at={K14.then} />
				<AnswerBox x={920} y={578} w={900} h={62} at={K14.then + 8} lines={1} />
				<Sx x={96} y={1046} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K14.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1700} y={870} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 12d. Feedback two ----------
const K15 = cues(S('feedback-two'), {twoi: 'Type O means two small i alleles', fromeach: 'the child got one from each parent', mother: 'So the mother is type A', father: 'the father is type B', sq: 'Their square gives', chance: 'the chance of type AB is one in four', ifs: 'If you said', cant: "can't have a type O child", remember: 'remember that each can carry'});
export const SceneFeedbackTwoB10: React.FC = () => {
	const f = useCurrentFrame();
	const G = {x: 1100, y: 330, cell: 150, dr: 34};
	const up = (to: [number, number], at: number) => {
		const t = prog(f, at, 22);
		return <AlleleChip x={lerp(460, to[0], t)} y={lerp(560, to[1], t)} t="i" r={18} o={fadeV(f, at - 4, at + 40)} />;
	};
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text="(a) genotypes of mother, father and child   (b) chance the next child is type AB" size={26} color={INK_SOFT} weight={600} at={0} />
				<Family x={460} y={330} s={0.85} at={[-30, -30, -30]} geno={['I^{A} i', 'I^{B} i', 'i i']} genoAt={[K15.mother, K15.father, K15.twoi + 4]} />
				{up([316, 330], K15.fromeach)}
				{up([604, 330], K15.fromeach + 6)}
				<PunnettHSC x={G.x} y={G.y} cell={G.cell} res={ABO} top={['I^{A}', 'i']} side={['I^{B}', 'i']} gridAt={K15.sq - 4} topAt={K15.sq - 2} sideAt={K15.sq} fillAt={i => K15.sq + 4 + i * 5} discR={G.dr} chipR={18}
					phen={i => prog(f, K15.sq + 14 + i * 5, 12)} phenText={i => `type ${ABO.cells[i].ph}`} phenSize={26}
					ring={i => (ABO.cells[i].ph === 'AB' ? prog(f, K15.chance, 10) : 0)} />
				<ModelLine x={1000} y={720} text="(a) mother I^{A} i, father I^{B} i, child i i" at={K15.father + 6} size={34} />
				<ModelLine x={1000} y={790} text={`(b) ${ABO.frac(c => c.ph === 'AB')} (25%)`} at={K15.chance} size={34} />
				<MistakeChip x={96} y={880} text="type A × type B can't give type O" at={K15.ifs} cross={K15.cant + 10} size={30} />
				<Sx x={760} y={918} text="both can hide i" size={36} color={AMBER_INK} hand at={K15.remember} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const K16 = cues(S('decision-rule'), {when: "So when a cross doesn't give 3 to 1", read: 'read the heterozygote first', between: 'In between means incomplete dominance', both: 'Both showing means co-dominance', more: 'More than two alleles', sons: 'if sons and daughters show different ratios', next: "Next, you'll use all of these"});
export const SceneDecisionB10: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="When a cross doesn't give 3 : 1" at={K16.when} size={56} />
			<Overlay>
				<Chip x={150} y={210} text="read the heterozygote first" at={K16.read} size={40} color={AMBER_INK} stroke={AMBER} />
				<PlateB p={PL10.snapPink} cx={200} cy={346} w={60} o={prog(f, K16.between, 12)} />
				<Chip x={260} y={312} text="heterozygote in between: incomplete dominance" at={K16.between} size={40} color={INK} stroke={AMBER} />
				<HairZoom x={200} y={462} r={34} o={prog(f, K16.both, 12)} />
				<Chip x={260} y={428} text="heterozygote shows both: co-dominance" at={K16.both} size={40} color={INK} stroke={AMBER} />
				<g opacity={prog(f, K16.more, 12)}>
					{['I^{A}', 'I^{B}', 'i'].map((a, i) => <AlleleChip key={a} x={140 + i * 48} y={578} t={a} r={18} />)}
				</g>
				<Chip x={260} y={544} text="more than two alleles in the population: multiple alleles" at={K16.more} size={40} color={INK} stroke={AMBER} />
				<SexChrom x={200} y={694} kind="X" s={0.8} o={prog(f, K16.sons, 12)} />
				<Chip x={260} y={660} text="sons and daughters differ: look for a gene on the X" at={K16.sons} size={40} color={INK} stroke={AMBER} />
				<Fade at={K16.next}>
					<rect x={1040} y={860} width={780} height={110} rx={26} fill="#fffdf8" stroke={AMBER} strokeWidth={3.5} />
					<PSym x={1100} y={900} sex="M" aff sz={30} />
					<PSym x={1150} y={900} sex="F" aff={false} sz={30} />
					<Sx x={1125} y={958} text="?" size={36} color={AMBER_INK} weight={800} anchor="middle" />
					<Sx x={1200} y={930} text="Next: unfamiliar crosses and pedigrees" size={38} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = notesCheck([
	'Sex-linked (X-linked) genes: females XX, males XY; the Y has no copy. One recessive allele shows in a male. Write X^{H} X^{h}, X^{h} Y.',
	'A father gives his X to every daughter and his Y to every son. X^{H} X^{h} × X^{H} Y: 1/4 of all children an affected son, 1/2 of sons; no affected daughters.',
	'X-linked recessive pedigrees: mostly males; through carrier mothers; never father to son. An affected daughter of an unaffected father rules it out.',
	'Incomplete dominance: heterozygote in between (pink snapdragon). Co-dominance: both expressed (roan; AB). Two heterozygotes give 1 : 2 : 1 in both.',
	'ABO: three alleles (I^{A}, I^{B}, i), two per person. I^{A} and I^{B} co-dominant, both dominant over i. Type O = ii.',
]);
/** Notes text with ^{x} superscripts as HTML sup. */
const supText = (t: string) => t.split(/(\^\{[^}]*\})/g).map((part, i) => (part.startsWith('^{') ? <sup key={i} style={{fontSize: '0.62em'}}>{part.slice(2, -1)}</sup> : <React.Fragment key={i}>{part}</React.Fragment>));
export const SceneNotesB10: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 175, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 22}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 34, fontWeight: 500, color: INK, lineHeight: 1.28}}>{supText(n)}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 900}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: AMBER_INK, lineHeight: 1.2}}>Memory: Incomplete is in-between; co shows both.<br />Dad gives his X to daughters and his Y to sons.</div>
		</Enter>
	</>
);
void wrap; void PL10;
