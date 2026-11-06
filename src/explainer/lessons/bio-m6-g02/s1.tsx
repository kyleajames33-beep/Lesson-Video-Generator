// M6 G02 scenes 1 to 6: the hook (NESA's biodiversity feedback quoted word for word, the judgement routine as s04's
// verdict strip, three question thumbnails) and question 1 (insect-resistant maize with a data table, assess): the
// protected attempt, the plan (verb, levels, baseline, sorting the evidence), the build (species up, crop genetic
// diversity down, resistance rising), the weighing (refuges, a conditional verdict, no ecosystem judgement) and the
// weak answer against the strong one.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {MistakeChip} from '../bio-m5-b13/shared';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrillCountdown, GREY, GREY_INK, GreyTag, HandLine, Heading, INK, INK_SOFT, LostMarksTag, Overlay, Plate, QuestionCard, T, TEAL,
	answerGeom, cardGeom, lerp, plateW, prog, smooth, vis,
} from '../skills-shared';
import type {Ann, ARow, AnsSpec} from '../skills-shared';
import {VerdictStrip} from '../skills-s04/pieces';
import {PL, Q1, STRIP, hold, q1Spec, sc} from './common';
import {CX, Levels, PANEL_W, RowBand, SW2, SX2, StagedAnswer, cardBottom, roleCol, sub} from './big';
import type {SRow} from './big';
import {CardThumb, InsectCluster, RefugeSquares} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {some: 'Some of the biggest', bio: 'biodiversity,', ethics: 'ethics answers', routine: 'You have the routine', verdict: 'verdict,', criteria: 'criteria you judge', evidence: 'evidence from the', three: 'three HSC-style', plan: 'Plan each one'});
const QUOTE = '“linking the biotechnology to its effect on biodiversity, rather than its effect on the organism”';
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = K1.plan + 10;
	return (
		<>
			<Heading text="Verdict, criteria, evidence: biotechnology" at={4} size={60} out={shrink} />
			<Overlay>
				<Chip x={96} y={190} text={QUOTE} at={K1.bio} out={K1.three - 16} size={34} color={INK_Q} fill="#fffdf8" maxW={1500} />
				<GreyTag x={96} y={300} text="NESA marking feedback, Biology 2023 Q34" at={K1.bio + 12} out={K1.three - 16} size={22} />
				<GreyTag x={600} y={300} text="HSCScience advice for ethics items" at={K1.ethics} out={K1.three - 16} size={22} />
				<VerdictStrip o={prog(f, K1.verdict - 8, 10) * (1 - prog(f, shrink, 16))} rows={[K1.verdict - 4, K1.criteria - 4, K1.evidence - 4, shrink + 20]} full={() => 1} fullBox={{x: 96, y: 380, w: 720}} miniBox={STRIP}
					lit={[{row: 0, from: K1.verdict, to: K1.criteria}, {row: 1, from: K1.criteria, to: K1.evidence}, {row: 2, from: K1.evidence, to: K1.three}]} />
				<GreyTag x={600} y={400} text="skills-s04" at={K1.verdict + 10} out={shrink} size={22} />
				<HandLine x={96} y={860} text="No verdict without a reason, no reason without evidence." at={K1.evidence + 20} out={shrink + 10} size={36} color={TEAL} />
				<CardThumb x={980} y={420} n={1} p={PL.maize} at={K1.three} h={140} />
				<CardThumb x={1260} y={420} n={2} p={PL.wild} at={K1.three + 8} h={140} />
				<CardThumb x={1540} y={420} n={3} p={PL.pig} at={K1.three + 16} h={120} />
				<GreyTag x={980} y={680} text="HSC-style questions, written for HSCScience" at={K1.three + 20} size={24} />
				{void K1.some}{void K1.routine}
			</Overlay>
		</>
	);
};
const INK_Q = '#2b2a28';

// ---------- 2a. Question 1 ----------
// Quality fix (6 Nov): the card runs full width at 32 px (table 30 px); the answer box sits under it at 30 px and the
// maize plate and countdown share the right of the box. No side rail.
const KQ = cues(sc('q1-question'), {q: 'Question one', farming: 'A farming district', table: 'The table shows', assess: 'Assess the effect', pause: 'Pause here to answer'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	const spec = q1Spec([KQ.farming, KQ.table, KQ.assess], KQ.assess + 10);
	const by = cardBottom(Q1) + 20;
	const box: AnsSpec = {x: CX, y: by, w: PANEL_W, lines: Math.max(3, Math.floor((1050 - by - 66) / 50)), lh: 50, size: 30};
	const f = useCurrentFrame();
	const mh = 130, mw = plateW(PL.maize, mh);
	return (
		<Overlay>
			<QuestionCard spec={spec} at={KQ.q} />
			<AnswerBox spec={box} at={KQ.assess + 20} counter={{total: 6}} />
			<g opacity={prog(f, KQ.farming, 14)}><Plate p={PL.maize} x={SX2 + 10} y={by + 6} h={mh} /></g>
			<DrillCountdown hold={h} at={KQ.pause} x={SX2} y={by + 250} cx={SX2 + mw + 170} cy={by + 72} r={52} />
		</Overlay>
	);
};

// ---------- shared Q1 walkthrough geometry ----------
const Q1_ROWS_TEXT = [
	"Species diversity increased but the crop's genetic diversity decreased, so the effect is mixed.",
	'Species level: sprays fell from 6 to 1, so fewer non-target insects were killed; insect species rose from 17 to 25.',
	"Genetic level (crop): varieties fell from 15 to 4, so the crop's gene pool narrowed and one disease could affect most of it.",
	'Pest: surviving caterpillars rising: resistance alleles becoming more common; a threat to the species gain.',
	'Limitation: refuges on only 3 in 10 farms, so resistance may spread, sprays may return and the species gain may be lost.',
	'Overall, mixed: species diversity up to a moderate extent, crop genetic diversity down;',
	'the gain lasts provided refuges are planted; more varieties with the trait would reduce the loss.',
];
const Q1_SHORT = [
	'Verdict: mixed effect',
	'Species: sprays 6 to 1, species 17 to 25',
	'Crop genes: varieties 15 to 4',
	'Pest: resistance alleles rising',
	'Limitation: refuges on 3 in 10 farms',
	'Overall: mixed, species up moderately',
	'Condition: provided refuges are planted',
];
const PURPLE = '#7a4a8c';
/** The walkthrough card: the table and the demand only. */
const Q1W = sub(Q1, [1, 2]);
const Q1W_BOT = () => cardBottom(Q1W) + 20;
const Bands: React.FC<{spec: typeof Q1; item: number; at?: [number, number, number, number]}> = ({spec, item, at = [-100, -100, -100, -100]}) => (
	<g>
		<RowBand spec={spec} item={item} r={1} at={at[0]} color={TEAL} />
		<RowBand spec={spec} item={item} r={2} at={at[0] + 10} color={TEAL} />
		<RowBand spec={spec} item={item} r={3} at={at[1]} color={PURPLE} />
		<RowBand spec={spec} item={item} r={5} at={at[2]} color={GREY} dashed />
	</g>
);
const Q1Card: React.FC<{ann?: Ann[]; badgeAt?: number}> = ({ann = [], badgeAt = -100}) => (
	<QuestionCard spec={Q1W} at={-100} ann={[{kind: 'verb', phrase: 'Assess', at: -100}, ...ann]}>
		<Bands spec={Q1W} item={0} />
		<BadgeIn spec={Q1W} text="Biodiversity" at={badgeAt} />
	</QuestionCard>
);
/** The question-type badge (hidden during the attempt; shown once the walkthrough starts), in card coordinates. */
export const BadgeIn: React.FC<{spec: typeof Q1; text: string; at: number}> = ({spec, text, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const g = cardGeom(spec);
	const w = text.length * 15 + 44;
	return (
		<g opacity={o}>
			<rect x={g.x + g.w - w - 470} y={g.y + 16} width={w} height={40} rx={20} fill="#1f6fb2" />
			<T x={g.x + g.w - w / 2 - 470} y={g.y + 45} text={text} size={26} color="#fffdf8" weight={700} anchor="middle" />
		</g>
	);
};

// ---------- 2b. Plan ----------
const KP = cues(sc('q1-plan'), {assess: 'Assess means', verdict: 'your verdict says', criteria: 'Your criteria', levels: 'levels:', baseline: 'The baseline', sprayed: 'sprayed maize,', sort: 'Now sort', sprays: 'Sprays and insect', varieties: 'Varieties are', genetic: "the crop's genetic level", surviving: 'Surviving caterpillars', pest: 'genetic change in the pest'});
export const SceneQ1Plan: React.FC = () => {
	const f = useCurrentFrame();
	const by = cardBottom(Q1) + 20;
	const lv = {x: CX, y: by + 84, w: 460, h: Math.min(250, 1050 - by - 84)};
	return (
		<Overlay>
			<QuestionCard spec={Q1} at={-100} ann={[{kind: 'verb', phrase: 'Assess', at: 4}, {kind: 'marks', at: 14}, {kind: 'given', phrase: 'sprayed with insecticide', at: KP.sprayed}]}>
				<Bands spec={Q1} item={1} at={[KP.sprays + 4, KP.genetic, KP.pest, 0]} />
				<BadgeIn spec={Q1} text="Biodiversity" at={10} />
			</QuestionCard>
			<Chip x={CX} y={by + 6} text="assess: how far, which way" at={KP.assess + 10} out={KP.sort} size={36} color={AMBER_INK} fill="#fff8e6" />
			<Levels x={lv.x} y={lv.y} w={lv.w} h={lv.h} o={prog(f, KP.levels, 14)} marks={[{r: 0, kind: 'q', o: prog(f, KP.levels + 20, 10)}]}
				lit={[0, vis(f, KP.sprays, KP.varieties, 8), vis(f, KP.genetic, undefined, 8)]} />
			<GreyTag x={lv.x + lv.w + 40} y={lv.y + 4} text="which level? compared with what?" at={KP.levels + 10} out={KP.sort + 40} size={28} />
			<Chip x={lv.x + lv.w + 40} y={lv.y + 84} text="baseline: sprayed maize" at={KP.sprayed + 10} size={38} color={TEAL} fill="#d5eeea" />
			<Chip x={1260} y={by + 6} text="species level" at={KP.sprays + 4} size={36} color={TEAL} fill="#d5eeea" />
			<Chip x={1260} y={by + 90} text="genetic level (crop)" at={KP.genetic} size={36} color={PURPLE} fill="#efe6f3" />
			<Chip x={1260} y={by + 174} text="allele change (pest)" at={KP.pest} size={36} color={GREY_INK} fill="#fffdf8" />
			{void KP.verdict}{void KP.baseline}{void KP.criteria}{void KP.surviving}
		</Overlay>
	);
};

// ---------- 2c. Build ----------
const KB = cues(sc('q1-build'), {bio: 'Biodiversity rose', mixed: 'is mixed.', species: 'Species:', six: 'six to one', killed: 'were killed,', seventeen: 'seventeen to', twenty: 'twenty-five.', genetic: 'Genetic:', fifteen: 'fifteen to four', disease: 'one new disease', crop: "district's crop.", surviving: 'And surviving', rising: 'rising:', threatens: 'which threatens', gain: 'species gain.'});
export const Q1_ROWS_A = (): SRow[] => [
	{text: Q1_ROWS_TEXT[0], short: Q1_SHORT[0], at: KB.bio + 4, dur: KB.mixed - KB.bio + 10, role: 'verdict', notes: [{text: 'condition to come', at: KB.mixed + 6}]},
	{text: Q1_ROWS_TEXT[1], short: Q1_SHORT[1], at: KB.six - 20, dur: KB.twenty - KB.six + 30, tick: KB.killed + 10, role: 'criterion + evidence'},
	{text: Q1_ROWS_TEXT[2], short: Q1_SHORT[2], at: KB.fifteen - 20, dur: KB.crop - KB.fifteen + 20, tick: KB.crop + 4, role: 'criterion + evidence'},
	{text: Q1_ROWS_TEXT[3], short: Q1_SHORT[3], at: KB.rising - 10, dur: KB.gain - KB.rising, tick: KB.gain + 6, role: 'evidence'},
];
const BUILD_EXTRA = (): number[] => [KB.twenty + 20];
export const SceneQ1Build: React.FC = () => {
	const f = useCurrentFrame();
	const py = Q1W_BOT();
	const LEV = {x: SX2, y: py + 6, w: SW2, h: 186};
	const CL = {x: SX2 + 270, y: py + 330};
	const nIns = lerp(3, 10, smooth(prog(f, KB.killed, 60)));
	return (
		<Overlay>
			<Q1Card ann={[
				{kind: 'given', phrase: '6', at: KB.six, color: AMBER}, {kind: 'given', phrase: '1', occ: 1, at: KB.six + 8, color: AMBER},
				{kind: 'given', phrase: '17', at: KB.seventeen, color: AMBER}, {kind: 'given', phrase: '25', at: KB.twenty, color: AMBER},
				{kind: 'given', phrase: '15', at: KB.fifteen, color: AMBER}, {kind: 'given', phrase: '4', at: KB.fifteen + 10, color: AMBER},
				{kind: 'given', phrase: 'rising since year 8', at: KB.rising, color: AMBER}]} />
			<StagedAnswer y={py} rows={Q1_ROWS_A()} total={6} extra={BUILD_EXTRA()} />
			<Levels x={LEV.x} y={LEV.y} w={LEV.w} h={LEV.h} marks={[{r: 0, kind: 'q'}, {r: 1, kind: 'up', o: prog(f, KB.twenty, 10)}, {r: 2, kind: 'down', o: prog(f, KB.fifteen + 20, 10)}]}
				lit={[0, vis(f, KB.species, KB.genetic, 8), vis(f, KB.fifteen, KB.surviving, 8)]} />
			<InsectCluster x={CL.x} y={CL.y} n={nIns} o={prog(f, KB.species, 14)} s={0.9} />
			<GreyTag x={SX2} y={LEV.y + LEV.h + 12} text="fewer sprays: more species" at={KB.killed + 10} out={KB.genetic} size={28} />
			<GreyTag x={SX2} y={LEV.y + LEV.h + 12} text="the banana problem returns" at={KB.fifteen + 24} out={KB.surviving} size={28} />
			<GreyTag x={SX2} y={LEV.y + LEV.h + 12} text="allele frequency, not lost diversity" at={KB.rising + 20} out={KB.threatens} size={28} />
			<GreyTag x={SX2} y={LEV.y + LEV.h + 12} text="threatens the species gain" at={KB.threatens + 10} size={28} />
			{void KB.disease}{void KB.bio}
		</Overlay>
	);
};

// ---------- 2d. Weigh ----------
const KW = cues(sc('q1-weigh'), {three: 'three farms in ten', spreading: 'keep spreading', returns: 'spraying returns', lost: 'could be lost', loop: 'close the loop', overall: 'Overall,', mixed: 'mixed:', provided: 'provided refuges', more: 'more varieties', loss: 'reduce the loss', eco: 'Ecosystem effects', invent: 'invent them'});
const loopAt = () => KW.loss + 18;
export const Q1_ROWS_B = (): SRow[] => [
	{text: Q1_ROWS_TEXT[4], short: Q1_SHORT[4], at: KW.three + 30, dur: KW.lost - KW.three, tick: KW.lost + 20, role: 'limitation'},
	{text: Q1_ROWS_TEXT[5], short: Q1_SHORT[5], at: KW.mixed, dur: KW.provided - KW.mixed - 20, role: 'verdict'},
	{text: Q1_ROWS_TEXT[6], short: Q1_SHORT[6], at: KW.provided, dur: KW.loss - KW.provided + 10, tick: KW.loss + 14, role: 'condition'},
];
export const prior = (rows: SRow[]): SRow[] => rows.map(r => ({...r, at: -1000, tick: r.tick === undefined ? undefined : -1000, notes: (r.notes ?? []).map(n => ({...n, at: -100}))}));
export const Q1_ALL = (): SRow[] => {
	const a = prior(Q1_ROWS_A());
	a[0] = {...a[0], notes: [{text: 'condition to come', at: -100, out: loopAt()}, {text: 'condition', at: loopAt() + 8, amber: true}]};
	return [...a, ...Q1_ROWS_B()];
};
export const SceneQ1Weigh: React.FC = () => {
	const f = useCurrentFrame();
	const py = Q1W_BOT();
	const nIns = 10 - 3 * smooth(prog(f, KW.returns, 24));
	const mh = 96, mw = plateW(PL.maize, mh);
	const LEV = {x: SX2, y: py + 120, w: SW2, h: 150};
	const CL = {x: SX2 + 270, y: py + 380};
	return (
		<Overlay>
			<Q1Card ann={[{kind: 'given', phrase: '3 in 10', at: KW.three, color: AMBER}]} />
			<StagedAnswer y={py} rows={Q1_ALL()} total={6} extra={BUILD_EXTRA().map(() => -1000)} loop={{from: 6, to: 0, at: loopAt()}} />
			<g opacity={prog(f, KW.three, 12)}>
				<Plate p={PL.maize} x={SX2} y={py + 6} h={mh} />
				<RefugeSquares x={SX2 + mw + 20} y={py + 10} p={prog(f, KW.three + 10, 20)} />
				<T x={SX2 + mw + 260} y={py + 60} text="3 in 10" size={36} color={AMBER_INK} hand weight={700} o={prog(f, KW.three + 30, 10)} />
			</g>
			<Levels x={LEV.x} y={LEV.y} w={LEV.w} h={LEV.h} marks={[{r: 0, kind: 'q'}, {r: 1, kind: 'up'}, {r: 2, kind: 'down'}]} lit={[Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - KW.eco) / 40)) * Math.PI)), 0, 0]} o={0.5 + 0.5 * prog(f, KW.overall, 12)} />
			<GreyTag x={SX2 + 190} y={LEV.y + 6} text="no data: not judged" at={KW.eco + 6} size={24} />
			<InsectCluster x={CL.x} y={CL.y} n={nIns} dashed={prog(f, KW.returns, 14)} s={0.85} />
			<GreyTag x={SX2} y={CL.y + 120} text="gain reversible" at={KW.returns + 10} out={KW.overall} size={28} />
			{void KW.spreading}{void KW.more}{void KW.invent}{void KW.loop}
		</Overlay>
	);
};

// ---------- 2e. Weak against strong ----------
const KK = cues(sc('q1-weak'), {weaker: 'a weaker answer', quote: 'The maize is good', kills: 'kills caterpillars', bigger: 'bigger harvests', pests: 'pests could become', organism: 'organism and the farm', names: 'never names', data: 'uses no data', verdict: 'no real verdict'});
const WEAK = 'The maize is good because it kills caterpillars and gives bigger harvests, but pests could become resistant.';
/** The strong answer, as its short ticked lines (right column). */
export const StrongList: React.FC<{rows: SRow[]; x: number; y: number; w: number; at: number}> = ({rows, x, y, w, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const h = 74 + rows.length * 50 + 14;
	return (
		<g opacity={o} transform={`translate(${(1 - smooth(prog(f, at, 18))) * 40},0)`}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
			<T x={x + 22} y={y + 46} text="Answer B (strong)" size={34} color={INK_SOFT} hand weight={700} />
			<T x={x + w - 22} y={y + 46} text="6 / 6" size={30} color="#2f8a5b" weight={800} anchor="end" />
			{rows.map((r, i) => (
				<g key={i}>
					<rect x={x + 18} y={y + 74 + i * 50 + 6} width={7} height={32} rx={3} fill={r.role ? roleCol(r.role) : GREY} />
					<T x={x + 40} y={y + 74 + i * 50 + 33} text={r.short} size={30} color={INK} hand weight={700} o={0.9} />
				</g>
			))}
		</g>
	);
};
export const SceneQ1Weak: React.FC = () => {
	const f = useCurrentFrame();
	const spec = sub(Q1, [0, 2]);
	const by = cardBottom(spec) + 20;
	const weak: AnsSpec = {x: CX, y: by, w: PANEL_W, lines: 3, lh: 58, size: 42};
	const wrows: ARow[] = [{text: WEAK, at: KK.quote, dur: KK.pests - KK.quote + 30}];
	const wg = answerGeom(weak, wrows);
	const slotY = wg.y + wg.h + 24;
	const slots: [string, number, number][] = [['which level?', weak.x, KK.names + 10], ['data?', weak.x + 290, KK.data], ['verdict?', weak.x + 480, KK.verdict]];
	return (
		<Overlay>
			<QuestionCard spec={spec} at={-100} ann={[{kind: 'verb', phrase: 'Assess', at: -100}]}><BadgeIn spec={spec} text="Biodiversity" at={-100} /></QuestionCard>
			<AnswerBox spec={{...weak, label: 'Answer A'}} rows={wrows} at={KK.weaker} counter={{total: 6, at: KK.weaker}} ann={[
				{kind: 'ring', row: 0, phrase: 'kills caterpillars', at: KK.organism, color: GREY},
				{kind: 'ring', row: 0, phrase: 'bigger harvests,', at: KK.organism + 8, color: GREY},
				{kind: 'tick', row: 0, phrase: 'pests could become resistant.', at: KK.pests + 40},
			]} />
			<StrongList rows={Q1_ALL()} x={SX2} y={by} w={SW2} at={2} />
			{slots.map(([t, x, at]) => (
				<g key={t} opacity={vis(f, at)}>
					<rect x={x} y={slotY} width={t.length * 17 + 44} height={62} rx={12} fill="none" stroke={GREY} strokeWidth={2.5} strokeDasharray="6 7" />
					<T x={x + 22} y={slotY + 43} text={t} size={36} hand weight={700} color={GREY_INK} />
				</g>
			))}
			<GreyTag x={weak.x + 690} y={slotY + 8} text="organism, not biodiversity" at={KK.organism + 14} size={28} />
			<LostMarksTag x={weak.x} y={slotY + 86} text="−5: no biodiversity level, no data, no judgement" at={KK.data + 10} size={32} maxW={1200} />
			<MistakeChip x={weak.x} y={slotY + 170} text="bigger harvests = more biodiversity" at={KK.verdict + 14} cross={KK.verdict + 34} size={36} />
			{void KK.kills}{void KK.bigger}
		</Overlay>
	);
};
