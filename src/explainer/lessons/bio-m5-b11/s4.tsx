// B11 scenes 12a to 14: two unseen items (white clover leaf-mark counts at two sites; SNP genotype counts with an
// association question), each with brief feedback (answer, key reason, short working, one crossed-out mistake), the
// decision rule with the handoff, and the key notes. Each question card stays complete through its 10 s countdown and
// after it; nothing answer-bearing is on a card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, BaseT, CARD, CLOVER, COAT_RED, COAT_ROAN, Countdown, DataTable, EDGE, Enter, FONT_DISPLAY, FONT_HAND, Fade, GreyTag, HandText, Heading,
	INK, INK_SOFT, ITEM2, Leaf, MiniAllele, MistakeChip, ModelLine, Overlay, Panel, PctStrip, S, Sx, TileRow, hold, notesCheck, pc, prog,
} from './shared';

// ---------- the clover card ----------
const sites = [{s: 'A', ...CLOVER.A}, {s: 'B', ...CLOVER.B}];
const D1 = ['(a) Frequency of the V mark at each site?', '(b) Compare the sites.', '(c) Identify one limitation of the data.'];
/** The count table: site | V mark | no mark (+ total when `total` > 0). Header cells carry the coded leaf icons. */
const CloverTable: React.FC<{x: number; y: number; s?: number; rowAt?: number[]; at: number; total?: number}> = ({x, y, s = 1, rowAt, at, total = 0}) => {
	const f = useCurrentFrame();
	const cw = [200, 250, 250, 170].map(v => v * s), hh = 120 * s, rh = 68 * s, fs = 36 * s;
	const W = cw[0] + cw[1] + cw[2] + (total > 0.01 ? cw[3] * total : 0);
	const cx = (i: number) => x + cw.slice(0, i).reduce((a, b) => a + b, 0);
	return (
		<g opacity={prog(f, at, 12)}>
			<rect x={x} y={y} width={W} height={hh + rh * 2} rx={16} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<rect x={x} y={y} width={W} height={hh} rx={16} fill="#efe6d4" />
			<text x={cx(0) + 22 * s} y={y + hh * 0.62} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs * 0.85}} fill={INK}>site</text>
			<Leaf x={cx(1) + 50 * s} y={y + hh * 0.42} s={0.62 * s} mark={1} />
			<text x={cx(1) + 100 * s} y={y + hh * 0.62} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs * 0.85}} fill={INK}>V mark</text>
			<Leaf x={cx(2) + 50 * s} y={y + hh * 0.42} s={0.62 * s} mark={0} />
			<text x={cx(2) + 100 * s} y={y + hh * 0.62} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs * 0.85}} fill={INK}>no mark</text>
			{total > 0.01 ? <text x={cx(3) + 22 * s} y={y + hh * 0.62} opacity={total} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: fs * 0.85}} fill={AMBER_INK}>total</text> : null}
			{sites.map((r, i) => {
				const ry = y + hh + rh * i;
				const o = rowAt ? prog(f, rowAt[i], 12) : 1;
				return (
					<g key={i} opacity={o}>
						<line x1={x + 10} y1={ry} x2={x + W - 10} y2={ry} stroke={EDGE} strokeWidth={2} />
						{[`site ${r.s}`, String(r.mark), String(r.none)].map((t, c) => <text key={c} x={cx(c) + 22 * s} y={ry + rh * 0.68} style={{fontFamily: FONT_DISPLAY, fontWeight: c ? 800 : 600, fontSize: fs}} fill={INK}>{t}</text>)}
						{total > 0.01 ? <text x={cx(3) + 22 * s} y={ry + rh * 0.68} opacity={total} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs}} fill={AMBER_INK}>{r.mark + r.none}</text> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- 12a. Attempt one ----------
const K12 = cues(S('attempt'), {two: 'Two harder questions now', first: 'a class samples white clover', some: 'Some plants have a pale V mark', siteA: 'At site A', siteB: 'At site B', state: 'State the frequency', compare: 'compare the sites', identify: 'identify one limitation', pause: 'Pause here to answer'});
export const SceneAttemptB11: React.FC = () => {
	const h = hold('attempt');
	return (
		<>
			<Heading text="White clover at two sites" at={K12.first} size={56} />
			<Overlay>
				<Sx x={110} y={232} text="A class counts plants at two sites on the school grounds." size={32} color={INK} weight={600} at={K12.first + 10} />
				<CloverTable x={110} y={270} at={K12.some} rowAt={[K12.siteA, K12.siteB]} />
				<Leaf x={1080} y={360} s={1.3} mark={1} o={1} />
				<Sx x={1170} y={350} text="pale V mark" size={36} color={INK} hand at={K12.some} />
				<Leaf x={1080} y={520} s={1.3} mark={0} o={1} />
				<Sx x={1170} y={510} text="no mark" size={36} color={INK} hand at={K12.some + 8} />
				<Sx x={110} y={600} text={D1[0]} size={34} color={INK} weight={700} at={K12.state} />
				<AnswerBox x={110} y={616} w={1150} h={64} at={K12.state + 8} />
				<Sx x={110} y={740} text={D1[1]} size={34} color={INK} weight={700} at={K12.compare} />
				<AnswerBox x={110} y={756} w={1150} h={64} at={K12.compare + 8} />
				<Sx x={110} y={880} text={D1[2]} size={34} color={INK} weight={700} at={K12.identify} />
				<AnswerBox x={110} y={896} w={1150} h={64} at={K12.identify + 8} />
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K12.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={800} r={60} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Feedback one ----------
const K12b = cues(S('feedback-one'), {each: 'Each site has sixty plants', a: 'or thirty per cent', b: 'or fifty per cent', more: "more common in site B's sample", small: 'is a small sample', ranges: 'the mark ranges from bold', ifd: 'If you divided eighteen', wrong: 'you used the wrong total'});
export const SceneFeedbackOneB11: React.FC = () => {
	const f = useCurrentFrame();
	const A = CLOVER.A, B = CLOVER.B, nA = A.mark + A.none, nB = B.mark + B.none;
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<CloverTable x={110} y={180} s={0.62} at={-30} total={prog(f, K12b.each, 14)} />
				{D1.map((d, i) => <Sx key={i} x={1000} y={226 + i * 40} text={d} size={26} color={INK_SOFT} weight={600} at={-30} />)}
				<ModelLine x={140} y={460} text={`(a) A: ${A.mark} / ${nA} = ${pc(A.mark, nA)}%`} at={K12b.a - 20} size={40} />
				<Sx x={140} y={520} text={`B: ${B.mark} / ${nB} = ${pc(B.mark, nB)}%`} size={40} color={INK} weight={600} at={K12b.b - 20} />
				{[{v: pc(A.mark, nA), at: K12b.a, y: 432, l: 'A'}, {v: pc(B.mark, nB), at: K12b.b, y: 494, l: 'B'}].map((b, i) => (
					<g key={i} opacity={prog(f, b.at, 10)}>
						<rect x={720} y={b.y} width={500} height={34} rx={8} fill="#f1ebdd" stroke={EDGE} strokeWidth={1.5} />
						<rect x={720} y={b.y} width={(500 * b.v * prog(f, b.at, 20)) / 100} height={34} rx={8} fill={i ? AMBER : '#e9c98a'} />
						<text x={1236} y={b.y + 27} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28}} fill={INK}>{b.v}%</text>
					</g>
				))}
				<ModelLine x={140} y={630} text={`(b) higher in site B's sample (${pc(B.mark, nB)}% against ${pc(A.mark, nA)}%)`} at={K12b.more} size={38} />
				<ModelLine x={140} y={730} text="(c) small sample from one school;" at={K12b.small} size={38} />
				<Sx x={140} y={782} text="faint marks are hard to classify" size={38} color={INK} weight={600} at={K12b.ranges} />
				{[1, 0.4, 0].map((m, i) => (
					<g key={i}>
						<Leaf x={1240 + i * 170} y={720} s={0.75} mark={m} o={prog(f, K12b.ranges + i * 8, 10)} />
						<Sx x={1258 + i * 170} y={812} text={['bold', 'faint', 'none'][i]} size={30} color={INK_SOFT} hand anchor="middle" at={K12b.ranges + i * 8} />
					</g>
				))}
				<MistakeChip x={140} y={880} text={`${A.mark} / ${A.none} = ${pc(A.mark, A.none)}%`} at={K12b.ifd} cross={K12b.wrong} size={34} />
				<Sx x={520} y={922} text="divide by the site total" size={40} color={AMBER_INK} hand at={K12b.wrong + 8} />
			</Overlay>
		</>
	);
};

// ---------- 12c. Attempt two ----------
const K12c = cues(S('attempt-two'), {second: 'Second', forty: 'Forty people are tested', twenty: 'Twenty have G on both', sixteen: 'sixteen have one G', four: 'and four have A on both', calc: 'Calculate the frequency', then: 'a study finds that A', does: 'Does this show that A causes', pause: 'Pause here to answer'});
const N2 = ITEM2.GG + ITEM2.GA + ITEM2.AA;
const ROWS2 = [['GG', String(ITEM2.GG)], ['GA', String(ITEM2.GA)], ['AA', String(ITEM2.AA)], ['total', `${N2} people`]];
const D2A = '(a) Frequency of the A allele?';
const D2B = '(b) Does this show A causes the disease? Explain.';
const STIM = 'A is more common in people with a certain disease.';
export const SceneAttemptTwoB11: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('attempt-two');
	const rowAt = [K12c.twenty, K12c.sixteen, K12c.four, K12c.four + 20];
	return (
		<>
			<Heading text="A SNP with bases G or A" at={K12c.forty} size={56} />
			<Overlay>
				<Sx x={110} y={232} text="40 people are tested at one SNP." size={32} color={INK} weight={600} at={K12c.forty} />
				<DataTable x={110} y={262} cols={[{w: 220, head: 'genotype'}, {w: 200, head: 'people', align: 'middle'}]} rows={ROWS2} rowAt={rowAt} at={K12c.forty} size={34} rowH={62} />
				{['GG', 'GA', 'AA'].map((g, i) => <TileRow key={g} x={620} y={262 + 62 * (i + 1) + 31} seq={g} pitch={52} w={44} h={38} o={prog(f, rowAt[i], 12)} />)}
				<Sx x={110} y={640} text={STIM} size={34} color={INK} weight={700} at={K12c.then} />
				<Sx x={110} y={730} text={D2A} size={34} color={INK} weight={700} at={K12c.calc} />
				<AnswerBox x={110} y={746} w={1150} h={64} at={K12c.calc + 8} />
				<Sx x={110} y={870} text={D2B} size={34} color={INK} weight={700} at={K12c.does} />
				<AnswerBox x={110} y={886} w={1150} h={64} at={K12c.does + 8} />
				<Sx x={96} y={1040} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K12c.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={800} r={60} />
			</Overlay>
		</>
	);
};

// ---------- 12d. Feedback two ----------
const K12d = cues(S('feedback-two'), {eighty: 'carry eighty copies', sixteen: 'sixteen from the mixed', plus: 'plus eight from the four', thirty: 'or thirty per cent', no: "it's an association, not proof", might: 'A might just be inherited', ten: 'If you said ten per cent', counted: 'you counted people, not alleles'});
export const SceneFeedbackTwoB11: React.FC = () => {
	const nA = ITEM2.GA + 2 * ITEM2.AA;
	return (
		<>
			<Heading text="Question two: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={110} y={200} text={`GG ${ITEM2.GG}   GA ${ITEM2.GA}   AA ${ITEM2.AA}   (total ${N2} people)`} size={30} color={INK} weight={700} at={-30} />
				<Sx x={110} y={246} text={`${STIM}   ${D2A}   ${D2B}`} size={23} color={INK_SOFT} weight={600} at={-30} />
				<ModelLine x={140} y={380} text={`${N2} people x 2 = ${2 * N2} copies`} at={K12d.eighty} size={42} />
				<Sx x={140} y={460} text={`A = ${ITEM2.GA} x 1`} size={42} color={INK} weight={700} at={K12d.sixteen} />
				<Sx x={360} y={460} text={`+ ${ITEM2.AA} x 2 = ${nA}`} size={42} color={INK} weight={700} at={K12d.plus} />
				<ModelLine x={140} y={560} text={`(a) ${nA} / ${2 * N2} = ${(nA / (2 * N2)).toFixed(2)} = ${pc(nA, 2 * N2)}%`} at={K12d.thirty} size={46} />
				<ModelLine x={140} y={670} text="(b) No: an association;" at={K12d.no} size={42} />
				<Sx x={140} y={724} text="A may be inherited with a nearby cause" size={42} color={INK} weight={600} at={K12d.might} />
				<MistakeChip x={140} y={830} text={`${ITEM2.AA} / ${N2} = ${pc(ITEM2.AA, N2)}%`} at={K12d.ten} cross={K12d.counted} size={34} />
				<Sx x={480} y={872} text="that counts people, not alleles" size={40} color={AMBER_INK} hand at={K12d.counted + 8} />
			</Overlay>
		</>
	);
};

// ---------- 13. Decision rule and handoff ----------
const K13 = cues(S('decision-rule'), {so: 'with frequency data', say: 'say what you counted', count: 'count alleles rather than individuals', read: 'read the trend', name: 'name the limits', assoc: 'an association is a pattern', next: "Next, you'll collect", then: "Then we'll see how scientists"});
export const SceneDecisionB11: React.FC = () => {
	const f = useCurrentFrame();
	const steps = [
		{at: K13.say, t: '1. say the denominator'},
		{at: K13.count, t: '2. count alleles: 2 per individual'},
		{at: K13.read, t: '3. read the trend'},
		{at: K13.name, t: '4. name the limits'},
		{at: K13.assoc, t: 'association is not cause'},
	];
	const Y = (i: number) => 220 + i * 128;
	return (
		<>
			<Heading text="With frequency data" at={K13.so} size={56} />
			<Overlay>
				{steps.map((c, i) => (
					<g key={i} opacity={prog(f, c.at, 12)}>
						<Panel x={330} y={Y(i)} w={820} h={100} stroke={i === 4 ? AMBER_INK : AMBER} sw={3.5} fill={i === 4 ? '#fff6e3' : CARD} />
						<Sx x={366} y={Y(i) + 66} text={c.t} size={46} color={INK} hand />
					</g>
				))}
				{/* icons */}
				<g opacity={prog(f, K13.say, 12)}><Sx x={230} y={Y(0) + 66} text="/ 100" size={40} color={AMBER_INK} weight={800} anchor="middle" /></g>
				<g opacity={prog(f, K13.count, 12)}><MiniAllele x={200} y={Y(1) + 50} t="R" r={16} /><MiniAllele x={262} y={Y(1) + 50} t="W" r={16} /></g>
				<g opacity={prog(f, K13.read, 12)}>
					<rect x={190} y={Y(2) + 30} width={30} height={60} fill={AMBER} /><rect x={240} y={Y(2) + 60} width={30} height={30} fill="#e9c98a" />
					<path d={`M180,${Y(2) + 22} L280,${Y(2) + 50}`} stroke={AMBER_INK} strokeWidth={4} />
				</g>
				<PctStrip x={160} y={Y(3) + 80} w={140} dots={[{v: 10, at: K13.name + 4, label: false}, {v: 30, at: K13.name + 8, label: false}, {v: 18, at: K13.name + 12, label: false}]} r={8} tickLabels={false} o={prog(f, K13.name, 12) * 0.999} />
				<Fade at={K13.next}>
					<Panel x={1230} y={760} w={600} h={240} stroke={AMBER} sw={3.5} />
					<Sx x={1260} y={826} text="Next: collect and present" size={40} color={INK} hand />
					<Sx x={1260} y={872} text="your own data" size={40} color={INK} hand />
				</Fade>
				<Fade at={K13.then}>
					<Sx x={1260} y={950} text="then: sequencing and profiling" size={34} color={INK_SOFT} hand />
					{[0, 1, 2].map(i => <rect key={i} x={1720} y={900 + i * 22} width={60} height={9} rx={3} fill={['#8b4f9b', '#4e5bb2', '#a68220'][i]} opacity={0.8} />)}
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = notesCheck([
	'Frequency of a characteristic = count / total counted. State the denominator. Present as a table and a bar chart.',
	'Allele frequency = copies of that allele / all copies. Autosomal gene: 2 copies per individual (100 individuals = 200 copies).',
	'Complete dominance: recessive phenotype frequency = homozygous recessive genotype frequency (9% short = 0.09 tt). Carriers can\'t be seen.',
	'SNP: a one-base difference at a known DNA position; each version is an allele. Reading both copies gives the genotype. Most change nothing; some matter (sickle cell).',
	'An allele more common in one group = association, not proof of cause. One SNP is one marker. Limits: sample size, representation, consistent categories.',
]);
export const SceneNotesB11: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 175, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 30}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 14, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 36, fontWeight: 500, color: INK, lineHeight: 1.3}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 930}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: AMBER_INK, lineHeight: 1.15}}>Memory: Count alleles, not people. Frequency, SNP, limits.</div>
		</Enter>
	</>
);
void BaseT; void COAT_RED; void COAT_ROAN; void GreyTag;
