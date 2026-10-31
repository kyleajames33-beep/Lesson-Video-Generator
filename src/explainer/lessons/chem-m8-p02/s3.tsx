// M8 P02 scenes 13 to 18: two worded attempts (the full question stays on screen through the countdown, one small plate
// beside it), brief feedback with the givens underlined as they are used and one crossed mistake each (feedback 1 adds a
// small recovery gauge; feedback 2 uses S07's fix rail and a variables strip), the decision rule and handoff, and the
// key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {CardBox, Shrink} from '../chem-m6-c07/s4';
import {FixRail} from '../skills-s07/pieces';
import {BAL, FUNNEL, NB, TUBE, hold, sc} from './common';
import {AChip, Fade, GREENC, GREYX, HAZ, INK, INK_SOFT, KeyNotesBoard, MistakeX, NAVY, Note, Overlay, P, PauseHold, PicF, QText, RecGauge, SETA, SETB, Sx, TaskLine, WLine, qCheck, vis} from './parts';
import type {QBlock, QMark} from './parts';

const QX = 140, QW = 1300;
const HSC = 'HSC-style question, written for HSCScience';

// ---------- 13/14. Attempt 1 ----------
const K13 = cues(sc('attempt-1'), {turn: 'Your turn', check: 'To check a method', collects: 'and collects', calc: 'Calculate the percentage', state: 'and state what', pause: 'Pause here'});
const Q1 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: `To check a gravimetric method for sulfate, a student dissolved 0.350${NB}g of pure, dry anhydrous sodium sulfate, Na₂SO₄, in water, acidified the solution and added excess barium chloride solution.`, at: t[0]},
	{text: 'The barium sulfate precipitate was filtered, washed and dried to constant mass.', at: t[0] + 20},
	{text: `Its mass was 0.561${NB}g.`, at: t[1]},
	{text: '(a) Calculate the percentage recovery of sulfate.', at: t[2], para: true},
	{text: '(b) State what this result suggests about the accuracy of the method.', at: t[3], para: true},
	{text: `M(Na₂SO₄) = 142.04${NB}g mol⁻¹;  M(BaSO₄) = 233.39${NB}g mol⁻¹`, at: t[2] + 10, para: true},
] as QBlock[], marks);
const Question1: React.FC<{t: number[]; marks?: QMark[]; plate?: boolean}> = ({t, marks, plate = true}) => {
	const f = useCurrentFrame();
	return (
	<>
		<CardBox y={200} h={570} at={t[0] - 6} />
		<QText q={Q1(t, marks)} x={QX} y={272} w={QW} size={38} card={false} />
		{plate ? <PicF p={BAL} x={1520} y={330} h={300} o={prog(f, t[0], 12)} /> : null}
	</>
	);
};
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K13.turn} />
		<Sx x={1820} y={186} text={HSC} size={22} color={GREYX} anchor="end" weight={600} at={K13.check} />
		<Question1 t={[K13.check, K13.collects, K13.calc, K13.state]} />
		<PauseHold h={hold('attempt-1')} at={K13.pause} x={140} y={880} cx={1560} cy={870} />
	</Overlay>
);
const K14 = cues(sc('feedback-1'), {p350: 'Point three five', gives: 'gives the moles', one: 'one to one', should: 'So you should', grams: 'five grams', p561: 'Point five six', pct: 'half percent', close: 'close, but', low: 'slightly low', trap: 'The trap is', directly: 'masses directly'});
export const SceneFeedback1: React.FC = () => {
	const X = 140, S = 34;
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question1 t={[-100, -100, -100, -100]} plate={false} marks={[
					{phrase: `0.350${NB}g`, at: K14.p350, color: NAVY}, {phrase: 'M(Na₂SO₄) = 142.04', at: K14.p350 + 20, color: NAVY},
					{phrase: 'M(BaSO₄) = 233.39', at: K14.should, color: NAVY}, {phrase: `0.561${NB}g.`, at: K14.p561, color: NAVY},
					{phrase: 'State what this result suggests about the accuracy', at: K14.low, color: SETB},
				]} />
			</Shrink>
			<WLine x={X} y={590} size={S} dim={K14.one + 20} items={P('n = 0.350 ÷ 142.04', K14.p350 + 10, {t: `= 2.46 × 10^{−3}${NB}mol`, color: NAVY}, K14.gives)} />
			<WLine x={X} y={655} size={S} dim={K14.should + 20} items={P(`1 : 1 → n(BaSO_4) = 2.46 × 10^{−3}${NB}mol`, K14.one)} />
			<WLine x={X} y={720} size={S} dim={K14.p561 + 20} items={P('expected = 2.464 × 10^{−3} × 233.39', K14.should, {t: `= 0.5751${NB}g`, color: NAVY}, K14.grams)} />
			<Note x={X + 940} y={720} text="keep a guard digit" size={26} color={GREYX} at={K14.grams + 10} />
			<WLine x={X} y={785} size={S + 4} items={P('% recovery = 0.561 ÷ 0.5751 × 100', K14.p561, {t: '= 97.5%', color: SETB}, K14.pct)} />
			<RecGauge G={{x: 1300, y: 640, w: 480}} at={K14.pct - 10} label={() => 'expected'} fills={[{v: 97.5, at: K14.pct, color: SETB, label: '97.5%'}]} size={24} />
			<Note x={X} y={860} text="close to 100%, slightly low: small loss of sulfate" size={36} color={INK} at={K14.low} />
			<MistakeX x={1080} y={880} text="0.561 ÷ 0.350 × 100 = 160%" at={K14.trap} cross={K14.directly} note="different substances: go through moles" size={30} />
			{void K14.close}
		</Overlay>
	);
};

// ---------- 15/16. Attempt 2 ----------
const K15 = cues(sc('attempt-2'), {last: 'Last one', test: 'To test digestion', d: "Set D doesn't", higher: "Set C's recovery", explain: 'Explain why', pause: 'Pause here'});
const Q2 = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'Two sets of students tested whether digestion improves the recovery of barium sulfate.', at: t[0]},
	{text: 'Set C digested the precipitate for 30 minutes and washed it with three portions of warm distilled water.', at: t[0] + 20},
	{text: 'Set D did not digest the precipitate and washed it with one portion.', at: t[1]},
	{text: "Both sets were filtered at room temperature. Set C's mean recovery was higher than Set D's.", at: t[2]},
	{text: 'Explain why this comparison is not valid, and propose a change that fixes the problem.', at: t[3], para: true},
] as QBlock[], marks);
const Question2: React.FC<{t: number[]; marks?: QMark[]; plate?: boolean}> = ({t, marks, plate = true}) => {
	const f = useCurrentFrame();
	return (
	<>
		<CardBox y={200} h={520} at={t[0] - 6} />
		<QText q={Q2(t, marks)} x={QX} y={272} w={QW} size={38} card={false} />
		{plate ? <PicF p={FUNNEL} x={1530} y={300} h={340} o={prog(f, t[0], 12)} /> : null}
	</>
	);
};
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K15.last} />
		<Sx x={1820} y={186} text={HSC} size={22} color={GREYX} anchor="end" weight={600} at={K15.test} />
		<Question2 t={[K15.test, K15.d, K15.higher, K15.explain]} />
		<PauseHold h={hold('attempt-2')} at={K15.pause} x={140} y={860} cx={1560} cy={850} />
	</Overlay>
);
const K16 = cues(sc('feedback-2'), {two: 'Two things changed', washing: 'and washing', less: 'Less washing', add: 'add mass', alone: 'digestion alone', fix: 'Fix it by', nitrate: 'with silver nitrate', trap: 'The trap is', helps: 'That helps reliability', unequal: 'still be unequal'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const good = f >= K16.nitrate;
	return (
		<Overlay>
			<Shrink k={0.6}>
				<Question2 t={[-100, -100, -100, -100]} plate={false} marks={[
					{phrase: 'digested the precipitate for 30 minutes', at: K16.two + 10, color: HAZ}, {phrase: 'three portions', at: K16.washing, color: HAZ},
					{phrase: 'one portion.', at: K16.washing + 10, color: HAZ}, {phrase: 'propose a change that fixes the problem.', at: K16.fix, color: GREENC},
				]} />
			</Shrink>
			<FixRail box={{x: 120, y: 480, w: 1080}} rowH={100} rows={[K16.washing, K16.washing + 14, K16.fix]} lit={[{row: 1, from: K16.washing + 14, to: K16.fix}, {row: 2, from: K16.nitrate}]} ex={[{text: 'validity', at: K16.washing + 6}, {text: 'digestion and washing both changed', at: K16.washing + 20}, {text: 'wash both sets the same way, until the washings stay clear with AgNO₃', at: K16.nitrate}]} size={32} />
			<Fade at={K16.washing + 20}>
				<rect x={1260} y={480} width={580} height={120} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
				<Sx x={1280} y={524} text="independent: digestion" size={28} color={INK} weight={700} at={-1000} />
				<Sx x={1280} y={572} text={good ? 'washing: same for both' : 'washing: not controlled'} size={28} color={good ? GREENC : HAZ} weight={800} at={-1000} />
			</Fade>
			<Note x={1260} y={660} text="less washing → impurities dried on" size={28} color={HAZ} at={K16.less} />
			<Note x={1260} y={700} text="→ mass ↑ → D's recovery ↑" size={28} color={HAZ} at={K16.add} />
			<AChip x={1260} y={720} text="c02: extra mass reads high" size={22} color={GREYX} hand={false} at={K16.add + 20} />
			<PicF p={TUBE.clear} x={1300} y={790} h={190} o={vis(f, K16.nitrate, undefined, 12)} />
			<Note x={1440} y={900} text="washings clear" size={26} color={GREENC} at={K16.nitrate + 10} />
			<MistakeX x={120} y={870} text="repeat each set more times" at={K16.trap} cross={K16.unequal} note="repeats: reliability; the washing is still unequal" size={32} />
			{void K16.alone}{void K16.helps}{void SETA}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 17. Decision rule and handoff ----------
const K17 = cues(sc('decision-handoff'), {so: 'So, to trust', test: 'test it first', acidify: 'Acidify', judge: 'Then judge', rec: 'the recovery', close: 'close to a', cloudy: 'a cloudy filtrate', next: 'Next'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const rows = [
		{t: 'Test the method on a known sample (pure, dry)', at: K17.test, c: INK},
		{t: 'Acidify → hot, excess Ba^{2+} → digest → wash until AgNO_3 test clear → constant mass', at: K17.acidify, c: INK},
		{t: 'Recovery = found ÷ expected × 100', at: K17.rec, c: SETB},
		{t: 'Cloudy filtrate: lost (low). Wet or unwashed: extra (high).', at: K17.cloudy, c: SETA},
	];
	const cur = rows.filter(r => f >= r.at).length - 1;
	return (
		<Overlay>
			<TaskLine text="To trust a gravimetric analysis" at={K17.so} size={54} />
			<Fade at={K17.so + 10}><rect x={96} y={210} width={1728} height={560} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
			{rows.map((r, i) => (
				<g key={i} opacity={i === cur || f >= K17.next - 30 ? 1 : 0.5}>
					<circle cx={160} cy={300 + i * 130 - 12} r={26} fill="#fffdf8" stroke={r.c} strokeWidth={4} opacity={prog(f, r.at, 10)} />
					<Sx x={160} y={300 + i * 130} text={`${i + 1}`} size={30} color={r.c} anchor="middle" weight={800} at={r.at} />
					<Sx x={210} y={300 + i * 130} text={r.t} size={i === 1 ? 34 : 38} color={r.c} weight={700} at={r.at} />
				</g>
			))}
			<AChip x={1000} y={860} text="Next: precipitation titration and gravimetry practice" size={34} color={SETB} hand={false} at={K17.next} />
			{void K17.judge}{void K17.close}
		</Overlay>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	`Test a gravimetric method on a pure, dry sample of known composition first. % recovery = mass collected ÷ expected mass × 100. Example: 0.500${NB}g K_2SO_4 → expected 0.670${NB}g BaSO_4.`,
	'Aim: does digestion improve recovery? Independent: digestion (none, or about 30 min warm); dependent: % recovery; controlled: sample mass, acid, BaCl_2 volume and concentration, filter paper, filtration temperature (room temperature), washing, drying to constant mass.',
	'Method: dissolve; add dilute HCl; heat; add excess BaCl_2 slowly with stirring; check completeness with one more drop; digest (set B); cool to room temperature; filter through pre-weighed fine paper; rinse and wash with warm water until the washings stay clear with AgNO_3; oven, desiccator, weigh to constant mass.',
	"Results: digested 99.1%, not digested 94.3% (cloudy filtrate: fine crystals lost). Reliable: repeats agree, gap bigger than spread. Accurate: close to the known value. Repeats can't recover lost solid.",
	'Safety: BaCl_2 toxic if swallowed (teacher prepares and dispenses it; gloves, glasses, wash hands); dilute HCl irritant; AgNO_3 stains skin and harms waterways; tongs for hot apparatus; barium waste into the heavy-metal waste container, silver waste into its labelled container, never the sink.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={27} aidTop={820} aids={['Recovery = found ÷ expected × 100.', 'Under 100: lost. Over 100: extra weighed.']} tag="test the method on a pure, dry known sample first" />
);
