// S07 scenes 1 to 4: the hook (three word chips blur into one; 4 of 12 NESA feedback reports flagged; a named change
// against a justified change), the three words (plain questions with the glossary wording, then the target picture
// and the aid), word, feature, fix (the rail, and a generic fix stamped onto three set-ups), and the worked question
// card (spirit burner, results table, three demands) with its 10 s countdown.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, Chip, DrawPath, DrillCountdown, Flag, GREY, GREY_INK, GreyTag, HandLine, Heading, INK, INK_SOFT, Overlay, PenArrow, Plate, QuestionCard, RED,
	RoutineStrip, T, TEAL, ZONE, cardGeom, lerp, measure, plateW, prog, smooth, vis,
} from './kit';
import type {AnsSpec} from './kit';
import {AGAR, CUP7, SET, SX, SW, SetSlot, hold, sc, workSpec, WORK} from './common';
import {FixRail, Target, railH} from './pieces';

const ALL4 = [-100, -100, -100, -100];

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {practical: 'Practical questions', four: 'In four', difference: 'the difference', recent: 'one recent', justified: 'justified', so: "So let's", fix: 'actually fix'});
const WORDS = ['validity', 'reliability', 'accuracy'];
const FLAGGED = ['Biology 2021', 'Biology 2024', 'Biology 2025', 'Chemistry 2025'];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const blur = smooth(prog(f, K1.difference, 20)) * (1 - smooth(prog(f, K1.fix, 22)));
	const tilesO = vis(f, K1.difference - 10, K1.justified, 12) + 0.35 * prog(f, K1.justified, 12) * (1 - prog(f, K1.fix, 12));
	const tiles = [...[2020, 2021, 2022, 2023, 2024, 2025].map(y => `Chemistry ${y}`), ...[2020, 2021, 2022, 2023, 2024, 2025].map(y => `Biology ${y}`)];
	return (
		<>
			<Heading text="Practical questions: fixes that fix" at={K1.fix + 4} size={60} />
			<Overlay>
				{WORDS.map((w, i) => {
					const home = 300 + i * 440, mid = 960 - 170;
					const x = lerp(home, mid, blur);
					return <Chip key={w} x={x} y={220} text={w} at={K1.practical + 40 + i * 30} size={46} color={blur > 0.5 ? GREY : INK} fill={CARD} textColor={blur > 0.5 ? GREY_INK : INK} o={1 - 0.35 * blur} />;
				})}
				{tiles.map((t, i) => {
					const col = i % 6, row = Math.floor(i / 6);
					const x = 160 + col * 270, y = 390 + row * 130;
					const flagged = FLAGGED.indexOf(t);
					return (
						<g key={t} opacity={tilesO * prog(f, K1.difference + i * 2, 10)}>
							<rect x={x} y={y} width={240} height={100} rx={12} fill={CARD} stroke="rgba(60,45,20,0.22)" strokeWidth={2.5} />
							<T x={x + 18} y={y + 44} text={t.split(' ')[0]} size={24} weight={700} color={INK} />
							<T x={x + 18} y={y + 80} text={t.split(' ')[1]} size={24} weight={500} color={INK_SOFT} />
							{flagged >= 0 ? <Flag x={x + 200} y={y + 34} at={K1.difference + 30 + flagged * 10} /> : null}
						</g>
					);
				})}
				<GreyTag x={960} y={670} text="NESA marking feedback, Chemistry and Biology 2020 to 2025: 4 of 12 reports" at={K1.difference + 70} out={K1.justified} size={24} anchor="middle" />
				<Chip x={300} y={740} text="change: add a lid" at={K1.justified} out={K1.fix + 30} size={34} color={GREY} textColor={GREY_INK} />
				<Chip x={300} y={830} text="change: add a lid, so less heat escapes and q is closer to the true value" at={K1.justified + 14} out={K1.fix + 30} size={34} color={INK} />
				{f >= K1.justified + 30 && f < K1.fix + 42 ? <g opacity={1 - prog(f, K1.fix + 30, 12)}><DrawPath d={`M${300 + measure('change: add a lid, ', 34, true, 700) + 20},${880} L${300 + measure('change: add a lid, so less heat escapes and q is closer to the true value', 34, true, 700) + 20},${880}`} at={K1.justified + 30} dur={20} color={AMBER} width={5} /></g> : null}
				<GreyTag x={300} y={920} text="a NESA Chemistry marking guideline, 2025" at={K1.justified + 26} out={K1.fix + 30} size={22} />
				{void K1.four}{void K1.recent}{void K1.so}{void RED}
			</Overlay>
		</>
	);
};

// ---------- 2. Three words ----------
const K2 = cues(sc('three-words'), {three: 'Three words', val: 'Validity:', rel: 'Reliability:', acc: 'Accuracy:', picture: 'Picture a', accurate: 'not accurate', reliable: "aren't reliable", wrong: 'wrong target', right: 'Right target'});
const COLS = [
	{h: 'Validity', q: 'does it measure what it was meant to?', tag: "2017 syllabus glossary (Chemistry wording): 'An extent to which tests measure what was intended ...'"},
	{h: 'Reliability', q: 'repeat it the same way: do results agree?', tag: "2017 syllabus glossary: 'An extent to which repeated observations and/or measurements taken under identical circumstances will yield similar results.'"},
	{h: 'Accuracy', q: 'how close to the true value?', tag: "2025 syllabus glossary: 'The extent to which measurements are considered to be close to the true value.' The 2017 syllabus has no entry."},
];
const CX = [330, 960, 1590];
export const SceneThree: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K2.val, K2.rel, K2.acc];
	const shrink = smooth(prog(f, K2.picture, 20));
	return (
		<>
			<Overlay>
				{COLS.map((c, i) => {
					const o = prog(f, at[i], 12);
					if (o <= 0.01) return null;
					const cur = vis(f, at[i], at[i + 1] ?? K2.picture, 10) > 0.5;
					const bodyO = (1 - shrink) * (cur ? 1 : 0.45);
					const x = CX[i];
					return (
						<g key={c.h} opacity={o}>
							<T x={x} y={lerp(260, 150, shrink)} text={c.h} size={lerp(56, 40, shrink)} hand weight={700} color={cur || shrink > 0.5 ? AMBER_INK : INK_SOFT} anchor="middle" />
							<g opacity={bodyO}>
								<HandLine x={x - 260} y={360} text={c.q} at={at[i] + 8} size={36} color={INK} />
								<GreyTag x={x - 260} y={430} text={c.tag} at={at[i] + 20} size={20} maxW={520} />
							</g>
						</g>
					);
				})}
				<Target x={330} y={460} r={130} kind="offcentre" at={K2.picture + 10} dotsAt={K2.accurate - 30} label="reliable, not accurate" />
				<Target x={760} y={460} r={130} kind="scatter" at={K2.picture + 16} dotsAt={K2.reliable - 30} label="not reliable" />
				<Target x={1190} y={460} r={130} kind="centre" at={K2.picture + 22} dotsAt={K2.reliable + 20} label="reliable and accurate" />
				<g transform={`translate(${(1 - smooth(prog(f, K2.wrong - 10, 20))) * 200},0)`}>
					<Target x={1660} y={460} r={130} kind="wrong" at={K2.wrong - 10} label="wrong target" labelColor={GREY_INK} />
				</g>
				<T x={1660} y={680} text="not valid: measures the wrong thing" size={26} hand weight={700} color="#b5502b" anchor="middle" o={prog(f, K2.wrong + 30, 10)} />
				<GreyTag x={960} y={720} text="a picture, not a definition" at={K2.picture + 40} size={20} anchor="middle" />
				{[['Right target,', K2.right], ['repeats agree,', K2.right + 28], ['close to true.', K2.right + 62]].map(([t, a], i) => (
					<g key={i}>
						<HandLine x={CX[i]} y={900} text={t as string} at={a as number} size={58} color={TEAL} anchor="middle" />
					</g>
				))}
				{void K2.three}
			</Overlay>
		</>
	);
};

// ---------- 3. Word, feature, fix ----------
const K3 = cues(sc('word-feature-fix'), {every: 'every answer', word: 'The word:', feature: 'The feature:', fix: 'the fix:', wff: 'Word, feature', any: 'any experiment'});
const RB = {x: 330, y: 200, w: 1000};
export const SceneWFF: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = smooth(prog(f, K3.any + 90, 24));
	const s = lerp(1, 390 / 1000, shrink);
	const x = lerp(RB.x, SX, shrink), y = lerp(RB.y, 116, shrink);
	const stamp = [K3.any + 14, K3.any + 30, K3.any + 46];
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} o={0.45} />
			<FixRail box={{x, y, w: RB.w}} s={s} rowH={140} rows={[K3.word, K3.feature, K3.fix]} initials={K3.wff}
				lit={[{row: 0, from: K3.word, to: K3.feature}, {row: 1, from: K3.feature, to: K3.fix}, {row: 2, from: K3.fix, to: K3.wff}, {row: 0, from: K3.wff, to: K3.wff + 18}, {row: 1, from: K3.wff + 20, to: K3.wff + 38}, {row: 2, from: K3.wff + 42, to: K3.wff + 60}]} />
			<g opacity={vis(f, K3.any - 6, K3.any + 80, 12)}>
				<Chip x={1360} y={220} text="repeat it and be more careful" at={K3.any - 6} size={30} color={GREY} textColor={GREY_INK} maxW={480} />
				{[{p: SET.base, x: 1380}, {p: CUP7, x: 1560}, {p: AGAR, x: 1720}].map((t, i) => (
					<g key={i} opacity={0.75}>
						<Plate p={t.p} x={t.x} y={360} h={130} />
						<g opacity={prog(f, stamp[i], 8)}><rect x={t.x - 10} y={500} width={plateW(t.p, 130) + 20} height={30} rx={8} fill="#eceae4" stroke={GREY} strokeWidth={2} /><T x={t.x + plateW(t.p, 130) / 2} y={521} text="repeat, be careful" size={16} weight={700} color={GREY_INK} anchor="middle" /></g>
					</g>
				))}
				<GreyTag x={1360} y={570} text="fits everything, fixes nothing in particular" at={K3.any + 60} size={22} maxW={480} />
			</g>
			<g opacity={vis(f, K3.wff + 64, K3.any - 10, 12)}>
				<HandLine x={RB.x} y={railH(140) + RB.y + 90} text="Word, feature, fix." at={K3.wff + 64} size={56} color={TEAL} />
			</g>
			{void K3.every}{void SW}
		</Overlay>
	);
};

// ---------- 4. The worked question card ----------
const K4 = cues(sc('question-card'), {hsc: 'HSC-style Chemistry', student: 'A student compares', taller: 'taller', table: 'Her three trials', parts: 'There are three', rel: 'reliability,', claim: 'a claim', validity: 'validity.', bio: 'If you take', pause: 'Pause here'});
export const SceneCard: React.FC = () => {
	const f = useCurrentFrame();
	// The measured lesson has no responseHold for this scene (only the drills do), so there is no 10 s window to count.
	const h = hold('question-card') as {startFrame: number; endFrame: number} | undefined;
	const spec = workSpec([K4.student, K4.table, K4.rel, K4.claim, K4.validity], [K4.rel + 10, K4.claim + 10, K4.validity + 10]);
	const g = cardGeom(spec);
	const box: AnsSpec = {x: ZONE.box.x, y: spec.y + g.h + 20, w: ZONE.box.w, lines: 4, lh: 44, size: 28};
	return (
		<Overlay>
			<RoutineStrip rows={ALL4} dim={[h ? h.startFrame - 20 : K4.pause, 1e9]} o={0.6} />
			<QuestionCard spec={spec} at={K4.hsc}>
				<SetSlot spec={spec} at={K4.student} dist={smooth(prog(f, K4.taller + 6, 20))} distAt={K4.taller} />
			</QuestionCard>
			<AnswerBox spec={box} at={K4.parts} counter={{total: 7, label: true}} slots={{at: K4.parts + 10, n: 3, per: 1}} />
			<GreyTag x={ZONE.side.x + 40} y={box.y + 10} text="Biology: watch how each answer names the word, the feature and the fix" at={K4.bio} size={22} maxW={440} />
			{h ? <DrillCountdown hold={h} at={K4.pause} x={ZONE.side.x + 40} y={box.y + 60} cx={ZONE.side.x + 300} cy={box.y + 170} r={46} /> : <HandLine x={ZONE.side.x + 40} y={box.y + 120} text="Pause here to answer." at={K4.pause} size={44} color={AMBER_INK} />}
			{void WORK}{void GREY_INK}{void AMBER_INK}{void TEAL}
		</Overlay>
	);
};
