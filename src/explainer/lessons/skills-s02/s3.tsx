// S02 scenes 9 to 16: the same three verbs on the s01 iron tube, the "what causes what" test, two explain drills
// (full card through the 10 s countdown), brief feedback with one crossed habit each, the decision board, key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, CardSpec, Chip, CrossedHabit, DrillCountdown, GREY, GREY_INK, GreyTag, HandLine, INK, INK_SOFT, IRON, KeyNotes, Overlay, PenArrow, Plate, PlatePair,
	QuestionCard, RoutineStrip, SODA, T, TEAL, ZONE, cardGeom, chipW, clamp01, lerp, measure, plateW, prog, smooth, vis,
} from './kit';
import type {AnsSpec} from './kit';
import {DnaLadder, VerbLadder, hold, sc} from './common';

const SX = ZONE.side.x;
const ALL4 = [-100, -100, -100, -100];

// ---------- 9. The same ladder in Chemistry ----------
const K9 = cues(sc('chem-ladder'), {same: 'The same ladder', take: 'Take the iron tube', identify: 'Identify the colour', deeper: 'deeper red', describe: 'Describe what happens', pale: 'the pale red solution', explain: 'Explain it', more: 'with more iron', forms: 'red ion forms', same2: 'Same tube', verb: 'Only the verb'});
export const EXPLAIN_CHIP = 'More Fe^{3+}, so Fe^{3+} and SCN^{−} collide more often, so the forward rate rises above the reverse rate, so more FeSCN^{2+} (red) forms.';
export const DESCRIBE_CHIP = 'The pale red solution turns a deeper red as the crystals dissolve.';
export const SceneChemLadder: React.FC = () => {
	const f = useCurrentFrame();
	const lit: [number, number] = [K9.verb, K9.verb + 70];
	return (
		<Overlay>
			<g opacity={vis(f, K9.take - 10)}>
				<T x={96} y={196} text="Fe^{3+} (pale yellow) + SCN^{−} ⇌ FeSCN^{2+} (red)" size={40} weight={600} />
				<Chip x={1060} y={160} text="crystals of Fe(NO_3)_3 added" at={K9.take + 10} size={30} color={INK} hand={false} />
				<GreyTag x={1520} y={164} text="from s01" at={K9.take + 16} size={24} />
			</g>
			<g opacity={vis(f, K9.take)}><PlatePair a={IRON.start} b={IRON.deep} x={110} y={300} h={600} swap={K9.deeper} /></g>
			<VerbLadder x={380} y={290} w={1450} rungH={[128, 150, 180]} size={32} rungs={[
				{at: K9.identify, body: 'deeper red', bodyAt: K9.deeper, hand: true, lit, bodyColor: '#a31f2a'},
				{at: K9.describe, body: DESCRIBE_CHIP, bodyAt: K9.pale, hand: true, lit},
				{at: K9.explain, body: EXPLAIN_CHIP, bodyAt: K9.more, hand: true, lit, so: K9.forms + 10},
			]} />
			<Chip x={380} y={880} text="same content, three different jobs" at={K9.verb + 10} size={36} color={TEAL} />
			{void K9.same}{void K9.same2}
		</Overlay>
	);
};

// ---------- 10. Does it say what causes what? ----------
const K10 = cues(sc('because-test'), {test: 'quick test', does: 'does it say what causes what', only: 'If it only says', desc: 'description', nesa: "NESA's marking guidelines", outlining: 'outlining', effect: 'its effect', two: 'two marks to seven', more: 'More marks means', chain: 'longer chain', list: 'longer list'});
export const SceneTest: React.FC = () => {
	const f = useCurrentFrame();
	const dimA = 1 - 0.7 * vis(f, K10.outlining - 10, undefined, 14);
	const dimB = 1 - 0.65 * vis(f, K10.two, undefined, 14);
	const tail = '... so more FeSCN^{2+} (red) forms.';
	const soX = 120 + measure('... ', 30, true, 700);
	const sx = 96, segK = 14;
	let cx = sx + 150;
	return (
		<Overlay>
			<g opacity={dimA}>
				<g opacity={vis(f, K10.does - 8)}>
					<rect x={96} y={150} width={1728} height={84} rx={18} fill={CARD} stroke={TEAL} strokeWidth={3.5} />
					<HandLine x={130} y={208} text="Does this sentence say what causes what?" at={K10.does} size={50} color={TEAL} />
				</g>
				<g opacity={vis(f, K10.only)}>
					<T x={120} y={300} text={DESCRIBE_CHIP} size={30} hand weight={700} color={INK} />
					<GreyTag x={1080} y={272} text="describes" at={K10.only + 10} size={24} />
				</g>
				<g opacity={vis(f, K10.desc + 10)}>
					<T x={120} y={366} text={tail} size={30} hand weight={700} color={INK} />
					<line x1={soX - 2} x2={soX + measure('so', 30, true, 700) + 2} y1={374} y2={374} stroke={AMBER} strokeWidth={5} strokeLinecap="round" />
					<Chip x={1080} y={338} text="explains" at={K10.desc + 20} size={24} color={TEAL} hand={false} />
				</g>
			</g>
			<g opacity={vis(f, K10.outlining - 6) * dimB}>
				<rect x={96} y={430} width={760 * smooth(prog(f, K10.outlining, 20))} height={74} rx={10} fill="#ecd9b5" />
				<T x={116} y={479} text="outlines the campaign’s features: 2" size={32} weight={600} o={prog(f, K10.outlining + 10, 10)} />
				<rect x={866} y={430} width={760 * smooth(prog(f, K10.effect, 20))} height={74} rx={10} fill={AMBER} />
				<T x={886} y={479} text="+ explains its effect: 3" size={32} weight={700} color="#3d2a05" o={prog(f, K10.effect + 10, 10)} />
				<GreyTag x={96} y={520} text="a NESA Biology marking guideline, 2024" at={K10.outlining + 16} size={22} />
			</g>
			<g opacity={vis(f, K10.two) * (1 - 0.6 * vis(f, K10.chain, undefined, 14))}>
				<T x={sx} y={640} text="explain:" size={36} hand weight={700} color={AMBER_INK} />
				{[['2', 13], ['3', 20], ['4', 16], ['5', 5], ['7', 3]].map(([m, c]) => {
					const w = (c as number) * segK, x = cx; cx += w;
					return <g key={m as string}><rect x={x} y={606} width={w - 3} height={48} rx={6} fill={AMBER} opacity={prog(f, K10.two + 6, 12)} /><T x={x + w / 2} y={642} text={m as string} size={24} weight={800} color="#3d2a05" anchor="middle" o={prog(f, K10.two + 10, 10)} /></g>;
				})}
				<T x={cx + 20} y={642} text="marks: from 2 to 7" size={30} hand weight={700} color={AMBER_INK} o={prog(f, K10.two + 16, 10)} />
			</g>
			{/* chain against list */}
			<g opacity={vis(f, K10.more - 6)}>
				<T x={96} y={730} text="longer chain" size={34} hand weight={700} color={TEAL} />
				{[0, 1, 2, 3, 4].map(i => {
					const at = i < 3 ? K10.more : K10.chain + (i - 3) * 10;
					return (
						<g key={i} opacity={prog(f, at, 10)}>
							<rect x={96 + i * 160} y={756} width={110} height={56} rx={10} fill="#dcebf8" stroke="#6f9bc8" strokeWidth={2.5} />
							{i > 0 ? <PenArrow a={[96 + i * 160 - 48, 784]} b={[96 + i * 160 - 4, 784]} at={at} color={AMBER_INK} /> : null}
						</g>
					);
				})}
				<T x={1050} y={730} text="longer list" size={34} hand weight={700} color={GREY_INK} o={prog(f, K10.list - 10, 10)} />
				{[0, 1, 2, 3, 4].map(i => <rect key={i} x={1050 + (i % 3) * 150 + (i > 2 ? 70 : 0)} y={756 + (i > 2 ? 70 : 0)} width={120} height={50} rx={25} fill="none" stroke={GREY} strokeWidth={2.5} opacity={prog(f, K10.list - 10 + i * 4, 10)} />)}
			</g>
			<HandLine x={96} y={985} text="Describe says what. Explain says how one thing causes the next." at={K10.list + 14} size={52} color={TEAL} dur={56} />
			{void K10.test}{void K10.nesa}{void chipW}
		</Overlay>
	);
};

// ---------- 11/12. Drill 1 (Chemistry, soda water) ----------
const sodaSpec = (t: number[] = [-100, -100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Chemistry', slotW: 300,
	items: [
		{text: 'A sealed bottle of soda water contains the equilibrium CO_2(g) ⇌ CO_2(aq).', at: t[0]},
		{text: 'When the cap is removed, bubbles form in the drink.', at: t[1]},
		{text: 'Explain this observation.', marks: '3 marks', at: t[2], marksAt},
	],
});
const SODA_CARD = sodaSpec();
const boxUnder = (spec: CardSpec, lines: number): AnsSpec => ({x: ZONE.box.x, y: spec.y + cardGeom(spec).h + 30, w: ZONE.box.w, lines, lh: 52, size: 33});
const SodaSlot: React.FC<{spec: CardSpec; at: number}> = ({spec, at}) => {
	const f = useCurrentFrame();
	const g = cardGeom(spec);
	const h = Math.min(200, g.slot.h - 10);
	return (
		<g opacity={prog(f, at, 14)}>
			<Plate p={SODA.sealed} x={g.slot.x + 30} y={g.slot.y + 4} h={h} />
			<Plate p={SODA.open} x={g.slot.x + 60 + plateW(SODA.sealed, h)} y={g.slot.y + 4} h={h} />
		</g>
	);
};
const D1 = 'drill-1';
const K11 = cues(sc(D1), {turn: 'Your turn', chem: 'Chemistry first', sealed: 'A sealed bottle', cap: 'When the cap', explain: 'Explain why', three: 'Three marks', pause: 'Pause here'});
export const SceneDrill1: React.FC = () => {
	const h = hold(D1);
	const spec = sodaSpec([K11.sealed, K11.cap, K11.explain], K11.three);
	const box = boxUnder(SODA_CARD, 6);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} />
			<QuestionCard spec={spec} at={K11.chem - 6}><SodaSlot spec={spec} at={K11.sealed} /></QuestionCard>
			<AnswerBox spec={box} at={K11.explain} counter={{total: 3, label: true}} />
			<DrillCountdown hold={h} at={K11.pause} x={SX} y={box.y + 70} cx={SX + 245} cy={box.y + 210} />
		</Overlay>
	);
};
/** Two coded rate bars (C1 style, no values). */
const Bars: React.FC<{x: number; base: number; a: number; b: number; la: string; lb: string; at: number}> = ({x, base, a, b, la, lb, at}) => {
	const f = useCurrentFrame();
	const o = vis(f, at);
	if (o <= 0.01) return null;
	const bw = 80, gap = 90;
	return (
		<g opacity={o}>
			<line x1={x - 20} x2={x + 2 * bw + gap + 20} y1={base} y2={base} stroke={GREY_INK} strokeWidth={3} />
			<T x={x - 20} y={base - 190} text="rate" size={26} hand weight={700} color={GREY_INK} />
			<rect x={x} y={base - a} width={bw} height={a} rx={8} fill="#1f6fb2" />
			<rect x={x + bw + gap} y={base - b} width={bw} height={b} rx={8} fill="#e0962a" />
			<T x={x + bw / 2} y={base + 34} text={la} size={28} hand weight={700} anchor="middle" />
			<T x={x + bw * 1.5 + gap} y={base + 34} text={lb} size={28} hand weight={700} anchor="middle" />
		</g>
	);
};
const F1 = 'feedback-1';
const K12 = cues(sc(F1), {removing: 'Removing the cap', drink: 'above the drink', fewer: 'Fewer gas molecules', falls: 'rate falls', first: 'at first', leaving: 'Leaving is now', bubbles: 'as bubbles', lc: 'A linked Le Chatelier', habit: 'The habit to drop', describes: 'just describes'});
const SODA_ROWS = [
	'Removing the cap lets CO_2(g) escape, so the concentration of CO_2 gas above the drink falls.',
	'Fewer CO_2 molecules dissolve, so the forward (dissolving) rate decreases, while the reverse rate is unchanged at first.',
	'The reverse reaction is now faster, so CO_2(aq) leaves solution as gas, forming bubbles.',
];
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const box = boxUnder(SODA_CARD, 6);
	const diss = lerp(150, 70, smooth(prog(f, K12.falls, 24)));
	const ch = K12.bubbles + 14;
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} />
			<QuestionCard spec={SODA_CARD} at={-100} ann={[
				{kind: 'verb', phrase: 'Explain', at: 4}, {kind: 'marks', at: 12}, {kind: 'given', phrase: 'cap is removed', at: 20}, {kind: 'given', phrase: 'bubbles form', at: 28},
				{kind: 'ring', phrase: 'CO_2(g) ⇌ CO_2(aq).', at: 36},
			]}><SodaSlot spec={SODA_CARD} at={-100} /></QuestionCard>
			<AnswerBox spec={box} at={-100} counter={{total: 3, label: true}} rows={[
				{text: SODA_ROWS[0], at: K12.removing + 4, dur: K12.drink - 10, tick: K12.drink + 12},
				{text: SODA_ROWS[1], at: K12.fewer, dur: K12.first - K12.fewer, tick: K12.first + 10},
				{text: SODA_ROWS[2], at: K12.leaving, dur: K12.bubbles - K12.leaving, tick: K12.bubbles + 8},
			]} ann={[
				{kind: 'chain', row: 0, cause: 'Removing the cap lets CO_2(g) escape,', effect: 'above the drink falls.', at: ch},
				{kind: 'chain', row: 1, cause: 'Fewer CO_2 molecules dissolve,', effect: 'rate decreases,', at: ch + 12},
				{kind: 'chain', row: 2, cause: 'The reverse reaction is now faster,', effect: 'forming bubbles.', at: ch + 24},
				...[0, 1, 2].map(r => ({kind: 'under' as const, row: r, phrase: 'so', occ: 'all' as const, at: ch + 36})),
			]} />
			<Bars x={SX + 110} base={box.y + 220} a={diss} b={150} la="dissolving" lb="leaving" at={K12.fewer} />
			<GreyTag x={SX} y={box.y + 280} text="also full value: less CO_2(g), so the equilibrium shifts left, CO_2 leaves solution" at={K12.lc} size={22} maxW={480} />
			<CrossedHabit x={SX} y={box.y + 400} text="Bubbles form because gas comes out of the drink." at={K12.habit} cross={K12.describes} caption="what happens, not why" size={28} maxW={470} />
		</Overlay>
	);
};

// ---------- 13/14. Drill 2 (Biology, DNA replication) ----------
const dnaSpec = (t: number[] = [-100, -100], marksAt?: number): CardSpec => ({
	x: ZONE.card.x, y: ZONE.card.y, w: ZONE.card.w, subject: 'Biology',
	items: [
		{text: 'DNA replication produces two DNA molecules that are identical to each other.', at: t[0]},
		{text: 'Assuming no copying errors, explain why the two molecules are identical.', marks: '2 marks', at: t[1], marksAt},
	],
});
const DNA_CARD = dnaSpec();
const D2 = 'drill-2';
const K13 = cues(sc(D2), {bio: 'Now Biology', dna: 'When a DNA molecule', assuming: 'Assuming no copying', two: 'Two marks', pause: 'Pause here'});
export const SceneDrill2: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(D2);
	const box = boxUnder(DNA_CARD, 5);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h.startFrame - 20, 1e9]} />
			<QuestionCard spec={dnaSpec([K13.dna, K13.assuming], K13.two)} at={K13.bio - 6} />
			<AnswerBox spec={box} at={K13.assuming} counter={{total: 2, label: true}} />
			<DnaLadder cx={SX + 110} y={box.y + 110} unzip={i => (i === 0 ? 0.32 : i === 1 ? 0.14 : 0)} o={prog(f, K13.dna, 14)} s={0.9} />
			<DrillCountdown hold={h} at={K13.pause} x={SX} y={box.y + 50} cx={SX + 360} cy={box.y + 190} r={52} />
		</Overlay>
	);
};
const F2 = 'feedback-2';
const K14 = cues(sc(F2), {two: 'two linked points', strands: 'The strands separate', template: 'each original strand', one: 'a new one', nucleo: 'Nucleotides join', comp: 'complementary base pairing', partner: 'old partner', original: 'original sequence', habit: 'The habit to drop', says: 'That says how'});
const DNA_ROWS = [
	'The two strands separate and each original strand acts as a template for a new strand.',
	'Free nucleotides pair by complementary base pairing (A with T, C with G), so each new strand has the same sequence as the template’s old partner strand, and both molecules have the original base sequence.',
];
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const box = boxUnder(DNA_CARD, 5);
	const unzip = (i: number) => clamp01((f - K14.strands - i * 10) / 40);
	const dock = clamp01((f - K14.comp) / 90);
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} />
			<QuestionCard spec={DNA_CARD} at={-100} ann={[
				{kind: 'verb', phrase: 'explain', at: 4}, {kind: 'marks', at: 12}, {kind: 'given', phrase: 'identical.', at: 20}, {kind: 'constraint', phrase: 'Assuming no copying errors,', at: 30},
			]} />
			<AnswerBox spec={box} at={-100} counter={{total: 2, label: true}} rows={[
				{text: DNA_ROWS[0], at: K14.strands, dur: K14.one - K14.strands, tick: K14.one + 8},
				{text: DNA_ROWS[1], at: K14.nucleo, dur: K14.original - K14.nucleo, tick: K14.original + 10},
			]} ann={[
				{kind: 'chain', row: 1, cause: 'complementary base pairing (A with T, C with G),', effect: 'the same sequence', at: K14.original + 20},
				{kind: 'under', row: 1, phrase: 'so', occ: 'all', at: K14.original + 40},
			]} />
			<DnaLadder cx={SX + 245} y={box.y + 40} unzip={unzip} dock={dock} sep={100} s={0.9} />
			<g opacity={vis(f, K14.original)}>
				<T x={SX + 245 - 90} y={box.y + 262} text="same" size={30} hand weight={700} color={TEAL} anchor="middle" />
				<T x={SX + 245 + 90} y={box.y + 262} text="same" size={30} hand weight={700} color={TEAL} anchor="middle" />
				<T x={SX + 245} y={box.y + 298} text="identical molecules" size={28} hand weight={700} color={TEAL} anchor="middle" />
			</g>
			<CrossedHabit x={SX} y={box.y + 380} text="Each has one old strand and one new strand." at={K14.habit} cross={K14.says} caption="describes the result: why do the sequences match?" size={28} maxW={470} />
			{void K14.two}{void K14.template}{void K14.partner}
		</Overlay>
	);
};

// ---------- 15. Decision board ----------
const K15 = cues(sc('decision-rule'), {identify: 'identify', describe: 'Describe, give', outline: 'Outline', explain: 'Explain, show', next: 'Next', pairs: 'pairs'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const y = 180, H = [150, 170, 150], W = 1728, X = 96;
	const dTop = y + H[2] + 22;
	return (
		<Overlay>
			<VerbLadder x={X} y={y} w={W} rungH={H} size={32} rungs={[
				{at: -100, body: 'name the item or items the question asks for; use the marks to check the scope', bodyAt: K15.identify + 8, lit: [K15.identify, K15.describe]},
				{at: -100, body: 'features, with values from the data', bodyAt: K15.describe + 8, lit: [K15.describe, K15.explain],
					extra: <g opacity={vis(f, K15.outline)}><rect x={X + W - 560} y={dTop + 24} width={530} height={H[1] - 48} rx={14} fill={CARD} stroke="rgba(60,45,20,0.3)" strokeWidth={2.5} strokeDasharray="10 6" /><T x={X + W - 534} y={dTop + 76} text="outline" size={40} hand weight={700} /><T x={X + W - 534} y={dTop + 116} text="main features, briefly" size={30} weight={500} /></g>},
				{at: -100, body: 'how each cause leads to its effect; a because alone is not enough', bodyAt: K15.explain + 8, lit: [K15.explain, K15.next]},
			]} />
			<Chip x={X} y={770} text="Next: compare, contrast, distinguish" at={K15.next} size={44} color={TEAL} />
			<g opacity={vis(f, K15.next + 16)}>
				{[0, 1, 2].map(i => (
					<g key={i}>
						<rect x={1180} y={770 + i * 62} width={180} height={40} rx={8} fill="#dcebf8" stroke="#6f9bc8" strokeWidth={2} />
						<rect x={1540} y={770 + i * 62} width={180} height={40} rx={8} fill="#fff8e6" stroke={AMBER} strokeWidth={2} />
						<line x1={1362} x2={1538} y1={790 + i * 62} y2={790 + i * 62} stroke={INK_SOFT} strokeWidth={3} strokeDasharray={`${prog(f, K15.pairs - 10 + i * 6, 12) * 180} 400`} />
					</g>
				))}
			</g>
		</Overlay>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	'Identify: recognise and name. Describe: give the features or characteristics. Outline: the main features in general terms (NESA glossary, paraphrased). Tip: for identify, name the item or items the question asks for, and use the marks to check the scope; no reasons are needed. Describe uses values from any data.',
	'Explain: show the cause and the effect, how or why it happens (NESA glossary, paraphrased). Show how each cause leads to its effect; a “because” alone is not enough.',
	'Explain is the most common key word in recent HSC Chemistry and Biology written sections (57 question parts, 2021 to 2025), usually for 2 to 4 marks. More marks need a longer chain of links, not a longer list.',
	'Test each sentence: does it say what causes what? If it only says what happened, it is a description.',
];
export const SceneNotes: React.FC = () => <KeyNotes notes={NOTES} aid="Describe says what. Explain says how one thing causes the next." tag="check every sentence: what causes what?" size={30} aidTop={800} />;
void INK;
