// B13 scenes 11a to 13: two unseen data items (a frequency and malaria table with a scatter; mainland and island
// wallaby diversity), each with brief feedback (answer, key reason, one crossed-out mistake), the decision rule with
// the handoff, and the key notes. Each question card stays complete through its 10 s countdown and after it; nothing
// answer-bearing is on a card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, Boat, CARD, CrashLine, Countdown, DataTable, DrawPath, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GreyTag, HBar, HandText, Heading, INK,
	INK_SOFT, ISLAND, LandChip, MAINLAND, MistakeChip, ModelLine, Overlay, Panel, PlainArrow, Ring, S, Sx, TEAL, hold, lerp, notesCheck, prog,
} from './shared';
import type {Col} from './shared';

// ---------- item one data (example data) ----------
const LEVELS = ['none', 'low', 'moderate', 'high'];
export const ITEM1 = [
	{r: 'A', m: 0, q: 0.01}, {r: 'B', m: 1, q: 0.03}, {r: 'C', m: 2, q: 0.06}, {r: 'D', m: 3, q: 0.11}, {r: 'E', m: 3, q: 0.13}, {r: 'F (island)', m: 0, q: 0.1},
];
(() => {
	const ae = ITEM1.slice(0, 5);
	for (let i = 1; i < ae.length; i++) if (!(ae[i].m >= ae[i - 1].m && ae[i].q > ae[i - 1].q)) throw new Error('B13 item 1: A to E must rise with malaria');
	if (!(ITEM1[5].m === 0 && ITEM1[5].q > ITEM1[2].q)) throw new Error('B13 item 1: F must break the trend');
})();
const COLS1: Col[] = [{w: 230, head: 'region'}, {w: 240, head: 'malaria'}, {w: 380, head: 'variant allele frequency'}];
const ROWS1 = ITEM1.map(d => [d.r, LEVELS[d.m], d.q.toFixed(2)]);
/** Scatter of the six regions: x = malaria level (ordinal), y = allele frequency. */
const Scatter1: React.FC<{x: number; y: number; w: number; h: number; at: number; ringF?: number; labels?: boolean}> = ({x, y, w, h, at, ringF, labels = true}) => {
	const f = useCurrentFrame();
	const X = (m: number, k = 0) => x + 60 + (m / 3) * (w - 110) + k;
	const Y = (q: number) => y + h - (q / 0.14) * h;
	const pts = ITEM1.map((d, i) => ({...d, px: X(d.m, d.r === 'D' ? -16 : d.r === 'E' ? 16 : 0), py: Y(d.q), i}));
	const fp = pts[5];
	return (
		<g opacity={prog(f, at, 12)}>
			<line x1={x} y1={y + h} x2={x + w} y2={y + h} stroke={INK} strokeWidth={3} />
			<line x1={x} y1={y} x2={x} y2={y + h} stroke={INK} strokeWidth={3} />
			{LEVELS.map((l, m) => <text key={l} x={X(m)} y={y + h + 32} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>{l}</text>)}
			{[0, 0.05, 0.1].map(q => <g key={q}><line x1={x - 8} y1={Y(q)} x2={x} y2={Y(q)} stroke={INK} strokeWidth={2} /><text x={x - 14} y={Y(q) + 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>{q.toFixed(2)}</text></g>)}
			<text x={x + w / 2} y={y + h + 66} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24}} fill={INK}>malaria level</text>
			<text x={x - 70} y={y + h / 2} textAnchor="middle" transform={`rotate(-90 ${x - 70} ${y + h / 2})`} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24}} fill={INK}>allele frequency</text>
			{pts.map(p => (
				<g key={p.r}>
					<circle cx={p.px} cy={p.py} r={11} fill={INK} />
					{labels ? <text x={p.px + 16} y={p.py - 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22}} fill={INK}>{p.r[0]}</text> : null}
				</g>
			))}
			{ringF !== undefined ? <Ring cx={fp.px} cy={fp.py} rx={30} ry={30} at={ringF} /> : null}
		</g>
	);
};

// ---------- 11a. Attempt one ----------
const K11 = cues(S('attempt'), {two: 'Two questions now', first: 'First, this table shows', six: 'in six regions', describe: 'Describe the trend', then: 'Then suggest one reason', pause: 'Pause here to answer'});
const D1A = '(a) Describe the trend.';
const D1B = "(b) Suggest one reason region F doesn't fit.";
export const SceneAttemptB13: React.FC = () => {
	const h = hold('attempt');
	return (
		<>
			<Heading text="Example data: a red blood cell variant" at={K11.first} size={50} />
			<Overlay>
				<DataTable x={120} y={220} cols={COLS1} rows={ROWS1} at={K11.first + 10} rowAt={ROWS1.map((_, i) => K11.six - 20 + i * 4)} size={30} rowH={54} />
				<Scatter1 x={1180} y={240} w={620} h={330} at={K11.six} />
				<Sx x={120} y={700} text={D1A} size={34} color={INK} weight={700} at={K11.describe} />
				<AnswerBox x={120} y={720} w={1000} h={70} at={K11.describe + 8} lines={1} />
				<Sx x={120} y={850} text={D1B} size={34} color={INK} weight={700} at={K11.then} />
				<AnswerBox x={120} y={870} w={1000} h={70} at={K11.then + 8} lines={1} />
				<GreyTag x={1180} y={700} text="example data, not a real study" at={K11.first + 20} size={22} />
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K11.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={860} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const K12 = cues(S('feedback-one'), {more: 'gets more common as malaria increases', suggests: 'which suggests carriers have', trend: "That's a trend, not proof", island: 'The island has a high frequency', else: 'something else is going on', founders: 'a few founders', ifs: 'And if you said', match: 'the numbers match', alone: "a match alone doesn't show cause"});
const Strip1: React.FC = () => (
	<g>
		<Panel x={96} y={180} w={1730} h={110} />
		<Sx x={120} y={222} text={'Example data (malaria, frequency):  ' + ITEM1.map(d => `${d.r[0]} ${LEVELS[d.m]} ${d.q.toFixed(2)}`).join('   ')} size={25} color={INK} weight={600} />
		<Sx x={120} y={268} text={`${D1A}   ${D1B}`} size={25} color={INK_SOFT} weight={600} />
	</g>
);
export const SceneFeedbackOneB13: React.FC = () => {
	const X =(m: number, k = 0) => 160 + 60 + (m / 3) * (760 - 110) + k;
	const Y = (q: number) => 340 + 380 - (q / 0.14) * 380;
	const trendD = ITEM1.slice(0, 5).map((d, i) => `${i ? 'L' : 'M'}${X(d.m, d.r === 'D' ? -16 : d.r === 'E' ? 16 : 0)},${Y(d.q)}`).join(' ');
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Strip1 />
				<Scatter1 x={160} y={340} w={760} h={380} at={-30} ringF={K12.island} />
				<DrawPath d={trendD} at={K12.more} dur={30} color={AMBER} width={6} />
				<Sx x={560} y={420} text="rises with malaria" size={32} color={AMBER_INK} hand at={K12.more + 20} />
				<ModelLine x={1050} y={400} text="(a) frequency rises with malaria:" at={K12.suggests} size={32} />
				<Sx x={1050} y={446} text="suggests a carrier advantage" size={32} color={INK} weight={600} at={K12.suggests + 8} />
				<Sx x={1050} y={494} text="a trend, not proof" size={32} color={AMBER_INK} hand at={K12.trend} />
				<ModelLine x={1050} y={580} text="(b) F: no malaria, high frequency:" at={K12.island} size={32} />
				<Sx x={1050} y={626} text="e.g. founders carried it by chance" size={32} color={INK} weight={600} at={K12.founders} />
				<MistakeChip x={160} y={860} text="the variant protects against malaria" at={K12.ifs} cross={K12.alone} size={30} />
				<Sx x={880} y={898} text="a pattern; needs direct evidence" size={36} color={AMBER_INK} hand at={K12.alone + 10} />
			</Overlay>
		</>
	);
};

// ---------- 11c. Attempt two ----------
const K13 = cues(S('attempt-two'), {second: 'Second', wallaby: 'A threatened wallaby lives', island: 'and on a small island', ten: 'Across ten markers', nine: 'average nine alleles per marker', three: 'average three', what: 'What does this suggest', name: 'Then name one way', pause: 'Pause here to answer'});
export const ITEM2 = {markers: 10, mainland: 9, island: 3};
const D2A = '(a) What does this suggest about the island population?';
const D2B = '(b) Name one way managers could use this.';
/** Mainland and island panels with the average alleles per marker (example data). */
const Wallaby: React.FC<{y: number; mainAt: number; islAt: number; barAt: [number, number]; s?: number; ring?: number}> = ({y, mainAt, islAt, barAt, s = 1, ring}) => {
	const f = useCurrentFrame();
	const W = 820 * s;
	return (
		<g>
			{[{at: mainAt, t: 'mainland', pts: MAINLAND, v: ITEM2.mainland, w: 170}, {at: islAt, t: 'small island', pts: ISLAND, v: ITEM2.island, w: 110}].map((d, i) => (
				<g key={i} opacity={prog(f, d.at, 12)}>
					<Panel x={120 + i * (W + 40)} y={y} w={W} h={200 * s} />
					<LandChip pts={d.pts} x={150 + i * (W + 40)} y={y + 30 * s} w={d.w * s} />
					<Sx x={360 * s + 120 + i * (W + 40)} y={y + 60 * s} text={d.t} size={34 * s} color={INK} weight={800} />
					<Sx x={360 * s + 120 + i * (W + 40)} y={y + 104 * s} text="average alleles per marker" size={26 * s} color={INK_SOFT} weight={600} />
					<HBar x={360 * s + 120 + i * (W + 40)} y={y + 124 * s} w={330 * s} v={d.v} max={10} p={prog(f, barAt[i], 20)} h={32 * s} color={i ? AMBER : TEAL} />
					<Sx x={360 * s + 120 + i * (W + 40) + (330 * s * d.v) / 10 * prog(f, barAt[i], 20) + 12} y={y + 151 * s} text={String(d.v)} size={34 * s} color={INK} weight={800} at={barAt[i] + 10} />
				</g>
			))}
			{ring !== undefined ? <Ring cx={120 + W + 40 + 360 * s + 90 * s} cy={y + 140 * s} rx={160 * s} ry={50 * s} at={ring} /> : null}
		</g>
	);
};
export const SceneAttemptTwoB13: React.FC = () => {
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Example data: a threatened wallaby" at={K13.second} size={50} />
			<Overlay>
				<Wallaby y={220} mainAt={K13.wallaby} islAt={K13.island} barAt={[K13.nine, K13.three]} />
				<Sx x={120} y={480} text={`${ITEM2.markers} markers studied in each population`} size={30} color={INK} weight={600} at={K13.ten} />
				<GreyTag x={1300} y={452} text="example data" at={K13.ten + 10} size={22} />
				<Sx x={120} y={600} text={D2A} size={34} color={INK} weight={700} at={K13.what} />
				<AnswerBox x={120} y={620} w={1100} h={80} at={K13.what + 8} lines={1} />
				<Sx x={120} y={780} text={D2B} size={34} color={INK} weight={700} at={K13.name} />
				<AnswerBox x={120} y={800} w={1100} h={80} at={K13.name + 8} lines={1} />
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K13.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={760} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const K14 = cues(S('feedback-two'), {less: 'much less genetic diversity', suggests: 'That suggests a past population crash', founding: 'a small founding group', mixing: 'little mixing since', move: 'move some mainland animals', pair: 'pair the least related animals', keep: "to keep what's left", ifs: 'And if you said', guar: "guarantees they'll survive", only: 'it only improves their chances'});
export const SceneFeedbackTwoB13: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text={`${D2A}   ${D2B}`} size={25} color={INK_SOFT} weight={600} at={0} />
				<Wallaby y={220} s={0.8} mainAt={-30} islAt={-30} barAt={[-30, -30]} ring={K14.less} />
				<Sx x={1500} y={300} text={`${ITEM2.island} vs ${ITEM2.mainland}`} size={36} color={AMBER_INK} hand at={K14.less + 10} />
				<ModelLine x={160} y={490} text="(a) low diversity: a past crash or few founders, and isolation" at={K14.suggests} size={32} />
				<CrashLine x={1150} y={440} w={170} h={60} at={K14.founding} color={AMBER_INK} />
				<g opacity={prog(f, K14.move, 12)}>
					<PlainArrow x1={640} y1={410} x2={980} y2={410} at={K14.move} color={TEAL} width={6} />
					<Sx x={1000} y={420} text="move animals in" size={28} color={TEAL} hand at={K14.move + 6} />
				</g>
				<ModelLine x={160} y={590} text="(b) move animals in (adds alleles)," at={K14.move + 6} size={32} />
				<Sx x={160} y={636} text="or pair the least related (keeps them)" size={32} color={INK} weight={600} at={K14.pair} />
				<MistakeChip x={160} y={760} text="more diversity guarantees survival" at={K14.ifs} cross={K14.guar + 8} size={30} />
				<Sx x={880} y={798} text="improves the odds" size={38} color={AMBER_INK} hand at={K14.only} />
			</Overlay>
		</>
	);
};

// ---------- 12. Decision rule and handoff ----------
const K15 = cues(S('decision-rule'), {so: 'with any large data set', read: 'read the trend', ask: 'ask what else could explain it', say: "say what the data can't tell you", next: "Next, we'll look", risk: "predict about one person's risk"});
export const SceneDecisionB13: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="With any large data set" at={K15.so} size={56} />
			<Overlay>
				{[{at: K15.read, t: '1. read the trend'}, {at: K15.ask, t: '2. what else could explain it?'}, {at: K15.say, t: "3. what can't it tell you?"}].map((c, i) => (
					<g key={i} opacity={prog(f, c.at, 12)}>
						<Panel x={300} y={240 + i * 170} w={1000} h={120} stroke={AMBER} sw={3.5} />
						<Sx x={340} y={316 + i * 170} text={c.t} size={50} color={INK} hand />
					</g>
				))}
				<g opacity={prog(f, K15.read, 12)}>
					{[0, 1, 2, 3, 4, 5].map(i => <circle key={i} cx={190 + (i % 3) * 18} cy={318 - Math.floor(i / 3) * 18} r={9} fill="#7fb0b5" stroke={TEAL} strokeWidth={2} />)}
				</g>
				<g opacity={prog(f, K15.ask, 12)}><Boat x={200} y={500} s={0.6} beads={[2, 7, 2]} /></g>
				<g opacity={prog(f, K15.say, 12)}>
					<rect x={110} y={585} width={170} height={130} rx={12} fill={CARD} stroke={AMBER} strokeWidth={3} />
					<text x={195} y={622} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 26}} fill={AMBER_INK}>does not remove</text>
					{[0, 1, 2].map(i => <line key={i} x1={135} y1={650 + i * 20} x2={255} y2={650 + i * 20} stroke={INK_SOFT} strokeWidth={3} />)}
				</g>
				<Fade at={K15.next}>
					<Panel x={1060} y={830} w={760} h={130} stroke={AMBER} sw={3.5} />
					{Array.from({length: 18}, (_, i) => <circle key={i} cx={1110 + (i % 6) * 24} cy={862 + Math.floor(i / 6) * 24} r={8} fill={i === 9 ? AMBER : i % 3 ? CARD : INK} stroke={INK} strokeWidth={2} />)}
					<Sx x={1262} y={900} text="?" size={40} color={AMBER_INK} weight={800} anchor="middle" />
					<Sx x={1300} y={910} text="Next: group risk and one person" size={36} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = notesCheck([
	'Large-scale collaborative project: many researchers and sites pool data (e.g. UK Biobank, about 500,000 people). Large samples detect small effects that chance hides in small ones: stronger inference, not certainty.',
	'Disease inheritance (sickle cell): pedigrees (recessive), DNA (one base change) and frequency maps agree. Common where malaria was common: carriers resist severe malaria (heterozygote advantage). A matching map is not proof (founders, chance).',
	'Conservation: low genetic diversity (few alleles) signals past crashes or isolation; guides breeding of less related animals and moving animals between groups. Diversity improves the odds; it does not guarantee survival.',
	'Human evolution: more shared variants suggests more recent common ancestry; African populations carry the most variation, and most common variants elsewhere are also found there (1000 Genomes): the founders who left carried part of it. The reference genome is a composite of a few donors.',
	"Big data improve: pattern detection, trend confidence, comparison. They don't remove: sample bias, method limits, uncertainty for one person.",
]);
export const SceneNotesB13: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 165, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 18}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 31, fontWeight: 500, color: INK, lineHeight: 1.26}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 925}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 44, fontWeight: 700, color: AMBER_INK, lineHeight: 1.15}}>Memory: Big data sharpen the trend; they don't predict a person.<br />Common but harmful? Carrier advantage, or chance in a small group.</div>
		</Enter>
	</>
);
void EDGE; void lerp;
