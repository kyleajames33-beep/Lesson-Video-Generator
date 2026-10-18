// G02 scenes 5a to 7: question 4 (which pattern? rule out X-linked recessive with named individuals, show that
// autosomal dominant and recessive both fit, and judge which is more likely for a rare condition), the decision board
// and the key notes. Every fit and genotype comes from fitsMode on pedigree P-Q4.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AMBER, AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {Overlay} from '../bio-m5-b06b/shared';
import {PSym, Pedigree, Trio, onlyGeno, pedXY} from '../bio-m5-b09/genetics';
import type {PLay} from '../bio-m5-b09/genetics';
import {Badge, BIO, CheckStrip, Crossed, DecisionRows, GreyTag, QText, qCheck, HscTag, ModelLine, NextChip, Note, NotesBoard, PauseHold, RED, Sx, TaskLine, smooth, vis} from './board';
import {AD_G, Demands, Lines, MOVES, MOVES_TITLE, PQ4, hold, sc} from './shared';

const TASK4 = 'Which pattern can you rule out? Which is more likely?';
const L4: PLay = {x0: 230, y0: 300, gap: 150, row: 200, sz: 64};
const xy = pedXY(PQ4, L4);
const MODES = ['autosomal dominant', 'autosomal recessive', 'X-linked recessive'];
const TBL = {x: 980, y: 850, w: 620, rh: 46};
/** The mode-test table: marks[i] is [kind, frame] for row i. */
const ModeTable: React.FC<{at: number; lit?: [number, number, number]; marks?: Record<number, ['tick' | 'cross', number]>}> = ({at, lit, marks = {}}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	if (p <= 0.01) return null;
	return (
		<g opacity={p}>
			<rect x={TBL.x} y={TBL.y} width={TBL.w} height={3 * TBL.rh} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={2.5} />
			{[1, 2].map(r => <line key={r} x1={TBL.x} y1={TBL.y + r * TBL.rh} x2={TBL.x + TBL.w} y2={TBL.y + r * TBL.rh} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />)}
			<line x1={TBL.x + TBL.w - 90} y1={TBL.y} x2={TBL.x + TBL.w - 90} y2={TBL.y + 3 * TBL.rh} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
			{MODES.map((m, i) => {
				const l = lit && lit[i] >= 0 ? vis(f, lit[i], lit[i] + 120) : 0;
				const mk = marks[i];
				const mp = mk ? prog(f, mk[1], 10) : 0;
				const cx = TBL.x + TBL.w - 45, cy = TBL.y + i * TBL.rh + TBL.rh / 2;
				return (
					<g key={m}>
						{l > 0.01 ? <rect x={TBL.x + 4} y={TBL.y + i * TBL.rh + 4} width={TBL.w - 8} height={TBL.rh - 8} rx={8} fill={AMBER} opacity={0.25 * l} /> : null}
						<Sx x={TBL.x + 20} y={cy + 10} text={m} size={28} color={INK} weight={600} at={-100} />
						{mk && mp > 0.01 ? (mk[0] === 'tick'
							? <path d={`M${cx - 16},${cy} L${cx - 4},${cy + 13} L${cx + 18},${cy - 14}`} fill="none" stroke="#2f8a5b" strokeWidth={6} strokeLinecap="round" opacity={mp} />
							: <path d={`M${cx - 14},${cy - 14} L${cx + 14},${cy + 14} M${cx + 14},${cy - 14} L${cx - 14},${cy + 14}`} stroke={RED} strokeWidth={6} strokeLinecap="round" opacity={mp} />) : null}
					</g>
				);
			})}
		</g>
	);
};
const Legend: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	return (
		<g opacity={prog(f, at, 12)}>
			<PSym x={760} y={330} sex="F" aff={false} sz={30} /><PSym x={800} y={330} sex="M" aff={false} sz={30} />
			<Sx x={826} y={340} text="unaffected" size={26} color={INK_SOFT} hand at={-100} />
			<PSym x={760} y={380} sex="F" aff sz={30} /><PSym x={800} y={380} sex="M" aff sz={30} />
			<Sx x={826} y={390} text="affected" size={26} color={INK_SOFT} hand at={-100} />
		</g>
	);
};
type Q4At = {ped: number; rare: number; three: number; then: number; more: number};
const NO4: Q4At = {ped: -100, rare: -100, three: -100, then: -100, more: -100};
const M4 = ['X-linked recessive', 'anyone with the genotype for the trait shows it', 'autosomal dominant, autosomal recessive', 'a rare condition'];
const Q4Q = (t: Q4At) => qCheck([
	{text: 'This pedigree shows a rare condition.', at: t.rare},
	{text: 'Assume one gene and no new mutation, and that anyone with the genotype for the trait shows it.', at: t.rare + 20},
	{text: '(a) Of three patterns, autosomal dominant, autosomal recessive and X-linked recessive, which can you rule out? Justify with numbered individuals.', at: t.three, para: true, weight: 650},
	{text: "(b) Explain why this pedigree can't decide between the other two.", at: t.then, para: true, weight: 650},
	{text: '(c) Which is more likely? Why?', at: t.more, para: true, weight: 650},
], M4.map(phrase => ({phrase, at: 1e9})));
Q4Q(NO4);
const Q4Head: React.FC<{a?: Q4At; m?: Record<string, number>}> = ({a, m = {}}) => {
	const f = useCurrentFrame();
	const t = a ?? NO4;
	return (
		<g>
			<TaskLine text={TASK4} at={a ? 6 : -100} size={48} />
			<HscTag at={a ? 10 : -100} />
			<Badge text="Pedigree: which pattern?" at={a ? 14 : -100} />
			<g opacity={prog(f, t.ped, 16)}><Pedigree ped={PQ4} L={L4} /></g>
			<Legend at={t.ped + 10} />
			<QText q={Q4Q(t)} x={1004} y={216} w={796} size={28} lh={36} at={t.rare} markAt={m} />
		</g>
	);
};
const chipLayer = (map: Record<string, string | null>, at: number) => Object.fromEntries(Object.entries(map).map(([id, g]) => [id, [g ?? '?', at]])) as Record<string, [string, number]>;
const AR_G = Object.fromEntries(PQ4.inds.map(p => [p.id, onlyGeno(PQ4, 'AR', p.id)]));

// ---------- 5a. Question 4 (pause) ----------
const KA = cues(sc('q4-question'), {q: 'Question four', ped: 'This pedigree shows', rare: 'a rare condition', three: 'Of three patterns', rule: 'which can you rule out', just: 'Justify with numbered', then: 'Then explain why', more: 'which is more likely', pause: 'Pause here'});
export const SceneQ4QuestionG2: React.FC = () => {
	const h = hold('q4-question');
	return (
		<Overlay>
			<Q4Head a={{rare: KA.rare, three: KA.three, ped: KA.ped, then: KA.then, more: KA.more}} />
			<ModeTable at={KA.three + 30} />
			<PauseHold h={h} at={KA.pause} x={96} y={900} cx={760} cy={860} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} hold={h} />
		</Overlay>
	);
};

// ---------- 5b. Test X-linked recessive ----------
const KB = cues(sc('q4-rule-out'), {test: 'Test X-linked recessive first', mother: 'an affected mother', both: 'both her X chromosomes', every: 'every son gets it', son: 'But her son', unaff: 'is unaffected', dau: 'her daughter is affected', father: 'an unaffected father', not: "So it's not"});
export const SceneQ4RuleOut: React.FC = () => {
	const f = useCurrentFrame();
	const [mx, my] = xy('I-2'), [sx, sy] = xy('II-2');
	const arrow = smooth((f - KB.every) / 22);
	const clash = prog(f, KB.unaff, 10);
	const a1 = [mx + 44, my + 10], a2 = [sx + 44, sy - 30];
	return (
		<Overlay>
			<Q4Head m={{[M4[0]]: KB.test}} />
			<Pedigree ped={PQ4} L={L4} o={() => 0} chips={{'I-2': ['X^{a} X^{a}', KB.both]}} chipSize={24} rings={{'I-2': KB.mother, 'II-2': KB.unaff, 'II-1': KB.dau, 'I-1': KB.father}} />
			<GreyTag x={mx + 60} y={my - 70} text="if X-linked recessive" at={KB.both + 6} size={22} />
			{arrow > 0.01 ? <path d={`M${a1[0]},${a1[1]} C${a1[0] + 60},${a1[1] + 50} ${a2[0] + 60},${a2[1] - 50} ${a2[0]},${a2[1]}`} fill="none" stroke={AMBER_INK} strokeWidth={5} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - arrow} /> : null}
			<Sx x={a1[0] + 96} y={(a1[1] + a2[1]) / 2 + 8} text="X^{a}" size={30} color={AMBER_INK} weight={800} at={KB.every + 10} />
			{clash > 0.01 ? <g opacity={clash}><path d={`M${a1[0] + 30},${(a1[1] + a2[1]) / 2 - 22} l36,36 M${a1[0] + 66},${(a1[1] + a2[1]) / 2 - 22} l-36,36`} stroke={RED} strokeWidth={7} strokeLinecap="round" /></g> : null}
			<Note x={980} y={630} text="affected daughter, unaffected father:" at={KB.dau + 10} size={32} color={INK} />
			<Note x={980} y={672} text="not X-linked recessive" at={KB.father + 10} size={32} color={INK} />
			<GreyTag x={1360} y={644} text="B10" at={KB.father + 16} size={24} />
			<ModeTable at={-100} lit={[-1, -1, KB.test]} marks={{2: ['cross', KB.not]}} />
			<ModelLine x={130} y={870} text="(a) not X-linked recessive: I-2 is affected," at={KB.not} size={28} />
			<Lines x={130} y={910} lines={['but her son II-2 is unaffected (and II-1 is', 'affected with an unaffected father, I-1)']} at={KB.not + 8} size={28} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [KB.test]}} />
		</Overlay>
	);
};

// ---------- 5c. No giveaway, so both fit ----------
const KC = cues(sc('q4-both-fit'), {give: 'look for the giveaways', noA: 'no unaffected parents', noB: 'no affected parents', without: 'Without one', both: 'both patterns fit', dom: 'Dominant fits', rec: 'Recessive fits too', only: 'but only if', ind1: 'individual 1 in generation one', ind4: 'individual 4 in generation two', carriers: 'are both carriers'});
export const SceneQ4BothFit: React.FC = () => {
	const f = useCurrentFrame();
	const couples = [['I-1', 'I-2'], ['II-4', 'II-1']].map(c => { const a = xy(c[0]), b = xy(c[1]); return [(a[0] + b[0]) / 2, a[1]]; });
	const scan = (t0: number) => { const u = (f - t0) / 50; return u < 0 || u > 1 ? null : couples[u < 0.5 ? 0 : 1]; };
	const s1 = scan(KC.noA), s2 = scan(KC.noB);
	const domO = vis(f, KC.dom, KC.rec);
	const recO = prog(f, KC.rec + 4, 12);
	return (
		<Overlay>
			<Q4Head m={{[M4[0]]: -100, [M4[1]]: KC.dom, [M4[2]]: KC.both}} />
			<Trio x={1100} y={620} sz={28} parentsAff={false} childAff o={prog(f, KC.give, 12)} />
			<Sx x={1190} y={642} text="Hidden in the parents: recessive" size={28} color={INK} hand at={KC.give + 6} />
			<GreyTag x={1600} y={616} text="no match" at={KC.noA + 50} size={24} />
			<Trio x={1100} y={730} sz={28} parentsAff childAff={false} o={prog(f, KC.give + 10, 12)} />
			<Sx x={1190} y={752} text="Hidden in the child: dominant" size={28} color={INK} hand at={KC.give + 16} />
			<GreyTag x={1600} y={726} text="no match" at={KC.noB + 50} size={24} />
			{s1 ? <ellipse cx={s1[0]} cy={s1[1] + 80} rx={130} ry={130} fill="none" stroke={AMBER} strokeWidth={5} strokeDasharray="10 8" /> : null}
			{s2 ? <ellipse cx={s2[0]} cy={s2[1] + 80} rx={130} ry={130} fill="none" stroke={AMBER} strokeWidth={5} strokeDasharray="10 8" /> : null}
			<g opacity={domO}><Pedigree ped={PQ4} L={L4} o={() => 0} chips={chipLayer(AD_G, KC.dom)} chipSize={24} /></g>
			<g opacity={recO}><Pedigree ped={PQ4} L={L4} o={() => 0} chips={chipLayer(AR_G, KC.rec + 4)} chipSize={24} rings={{'I-1': KC.ind1, 'II-4': KC.ind4}} /></g>
			<Sx x={980} y={820} text={domO > 0.5 ? 'dominant: affected people have one copy' : recO > 0.5 ? 'recessive: affected people aa' : ''} size={28} color={INK_SOFT} hand at={KC.dom} />
			<ModeTable at={-100} lit={[KC.both, KC.both, -1]} marks={{2: ['cross', -100], 0: ['tick', KC.both + 6], 1: ['tick', KC.both + 12]}} />
			<ModelLine x={130} y={870} text="(b) no giveaway pattern: both fit" at={KC.both + 10} size={28} />
			<Lines x={130} y={910} lines={['(recessive needs I-1 and II-4 to be carriers)']} at={KC.carriers + 4} size={28} />
			<GreyTag x={300} y={192} text="both must be carriers" at={KC.carriers} size={24} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [-100], 1: [KC.dom]}} />
		</Overlay>
	);
};

// ---------- 5d. Judge, and the classic mistake ----------
const KD = cues(sc('q4-more-likely'), {rare: 'For a rare condition', unl: 'is unlikely', more: 'dominant is more likely', proven: "isn't proven", classic: 'The classic mistake', every: 'in every generation', clue: "That's a clue", fits: 'recessive fits too'});
export const SceneQ4MoreLikely: React.FC = () => {
	const f = useCurrentFrame();
	const pulse = (at: number) => Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (f - at) / 40))));
	const p = Math.max(pulse(KD.rare), pulse(KD.rare + 40));
	return (
		<Overlay>
			<Q4Head m={{[M4[0]]: -100, [M4[1]]: -100, [M4[2]]: -100, [M4[3]]: KD.rare}} />
			<Pedigree ped={PQ4} L={L4} o={() => 0} chips={chipLayer({'I-1': AR_G['I-1'], 'II-4': AR_G['II-4']}, -100)} chipSize={24} />
			{['I-1', 'II-4'].map(id => { const [x, y] = xy(id); return <ellipse key={id} cx={x} cy={y} rx={50 + 6 * p} ry={44 + 6 * p} fill="none" stroke={AMBER} strokeWidth={6} opacity={0.5 + 0.5 * p} />; })}
			<GreyTag x={96} y={792} text="two unrelated carriers: unlikely if rare" at={KD.rare + 10} size={26} />
			<ModeTable at={-100} marks={{2: ['cross', -100], 0: ['tick', -100], 1: ['tick', -100]}} />
			<Sx x={TBL.x + TBL.w + 20} y={TBL.y + 32} text="more likely" size={28} color={AMBER_INK} hand at={KD.more} />
			<ModelLine x={130} y={870} text="(c) autosomal dominant is more likely" at={KD.more} size={28} />
			<Lines x={130} y={910} lines={['(recessive needs two unrelated carriers), but not proven']} at={KD.proven} size={28} />
			<Sx x={980} y={612} text="decisive future evidence: II-3 and an unaffected" size={24} color={INK_SOFT} weight={600} at={KD.proven + 20} />
			<Sx x={980} y={644} text="partner having an affected child would mean recessive" size={24} color={INK_SOFT} weight={600} at={KD.proven + 26} />
			<Crossed x={980} y={690} text="dominant: it's in every generation" at={KD.classic} cross={KD.every + 10} caption="a clue, not proof" size={30} />
			<CheckStrip labels={MOVES} title={MOVES_TITLE} ticks={{0: [-100], 1: [-100]}} />
		</Overlay>
	);
};

// ---------- 6. Decision board ----------
const K6 = cues(sc('decision-board'), {model: 'Choose the model', sons: 'do sons and daughters differ', write: 'Write every genotype', unaff: "For someone who's unaffected", sep: 'For separate offspring', give: "if there's no giveaway", next: 'Next'});
const Herd: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>{Array.from({length: 12}, (_, i) => <circle key={i} cx={x - 30 + (i % 4) * 20} cy={y - 16 + Math.floor(i / 4) * 16} r={6} fill={i % 3 === 0 ? AMBER : '#d9cbb3'} stroke={INK_SOFT} strokeWidth={1.5} />)}</g>
);
export const SceneDecisionG2: React.FC = () => (
	<Overlay>
		<TaskLine text="Choose the model, then the chance" at={4} size={56} />
		<DecisionRows y0={290} lh={100} seeSize={34} dooSize={30} split={720} rows={[
			{see: 'a third phenotype, or both shown', doo: ['incomplete or co-dominance'], badge: 'Q1, Q2', at: K6.model, lit: [K6.model, K6.sons]},
			{see: 'sons and daughters differ', doo: ['a gene on the X'], badge: 'Q2', at: K6.sons, lit: [K6.sons, K6.write]},
			{see: 'certain genotypes first', doo: ['affected people, parents of affected children'], badge: 'Q3', at: K6.write, lit: [K6.write, K6.unaff]},
			{see: 'an unaffected relative', doo: ["cross out the box they can't be"], badge: 'Q3', at: K6.unaff, lit: [K6.unaff, K6.sep]},
			{see: 'two offspring, parents known', doo: ['multiply'], badge: 'Q1', at: K6.sep, lit: [K6.sep, K6.give]},
			{see: 'no giveaway', doo: ["name what fits; 'more likely' is not 'proven'"], badge: 'Q4', at: K6.give, lit: [K6.give, K6.next]},
		]} />
		<NextChip x={1000} y={900} w={824} text="Next: frequencies in a population" at={K6.next}>
			<Herd x={1062} y={942} />
		</NextChip>
	</Overlay>
);

// ---------- 7. Key notes ----------
const NOTES = [
	'First moves: choose the model, write the genotypes you are sure of, then combine the chances.',
	'A third, in-between phenotype: incomplete dominance. Heterozygotes do not breed true: two heterozygotes give 1 : 2 : 1.',
	'X-linked: sons get their X from their mother. Give answers "of all offspring" or "of sons" as asked.',
	'An unaffected child of two carriers has a 2/3 chance of being a carrier (cross out the affected box). Separate offspring, known parents: multiply the chances. New evidence (an affected child) can change the chance.',
	'Pedigrees: rule out a pattern with named individuals. With no giveaway, more than one pattern can fit; say which is more likely and why.',
];
export const SceneNotesG2: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Cross out the box they can't be." tag="when you know a person's phenotype but not their genotype" size={30} aidTop={790} />
);
void BIO; void INK; void Demands;
