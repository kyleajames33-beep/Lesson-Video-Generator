// P01 (Biology practical) scenes 13 to 16: the attempt (two white-card molecules, every condition on the card, kept
// through the 10 s countdown and after it; nothing answer-bearing), brief feedback (a "?" over each white strand, the
// strands recolour blue and green, the model answer and one crossed-out mistake), the decision rule with the handoff,
// and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Blob} from '../bio-m5-b06b/shared';
import {
	AMBER_INK, AnswerBox, BeadChain, CH, CODING, CRow, Countdown, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, Fade, GREYT, HB, HandText, Heading, INK, INK_SOFT, MiniLadder,
	MistakeChip, ModelLine, NEWC, ORIG, Overlay, PITCH, Panel, QMark, S, Sx, TEMPLATE, colMix, hold, lerp, notesCheck, prog, AMBER, beadPitch,
} from './shared';
import type {CardCol} from './shared';
import {LX0} from './s1';

// two molecules at 0.75 scale, top-left at (110, 250)
const G = {x: 110, y: 250, k: 0.75, gap: 230};
const ladY = (m: number) => G.y + m * G.gap * G.k;
const Ladder: React.FC<{m: number; top: CardCol | {fill: string; line: string}; bot: CardCol | {fill: string; line: string}}> = ({m, top, bot}) => (
	<g transform={`translate(${G.x},${ladY(m)}) scale(${G.k}) translate(${-(LX0 - 35)},0)`}>
		<CRow x0={LX0} y={0} face="down" letters={CODING} c="white" card={() => ({c: top})} tape={() => 1} />
		<CRow x0={LX0} y={2 * CH} face="up" letters={TEMPLATE} c="white" card={() => ({c: bot})} tape={() => 1} />
		{CODING.split('').map((l, i) => <HB key={i} x={LX0 + i * PITCH} y={CH} l={l} />)}
	</g>
);
const LAD_R = G.x + (11 * PITCH + 70) * G.k;

// ---------- 13. Attempt ----------
const K13 = cues(S('attempt'), {turn: 'Your turn', white: 'white cards only', both: 'for both the original and the new', match: 'Both new molecules match', explain: 'Explain why this model', suggest: 'suggest one change', pause: 'Pause here to answer'});
const DA = "(a) Explain why this model can't show that replication is semi-conservative.";
const DB = '(b) Suggest one change.';
export const SceneAttemptP01: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('attempt');
	return (
		<>
			<Heading text="Your turn: a one-colour replication model" at={K13.turn} size={50} />
			<Overlay>
				<g opacity={prog(f, K13.white, 12)}>
					<Ladder m={0} top="white" bot="white" />
					<Ladder m={1} top="white" bot="white" />
				</g>
				<Fade at={K13.white}>
					<Panel x={LAD_R + 40} y={250} w={1820 - LAD_R - 40} h={320} />
				</Fade>
				<Sx x={LAD_R + 70} y={310} text="white cards only," size={34} color={INK} weight={700} at={K13.white} />
				<Sx x={LAD_R + 70} y={354} text="for the original and the new" size={30} color={INK} weight={600} at={K13.both} />
				<Sx x={LAD_R + 70} y={398} text="strands" size={30} color={INK} weight={600} at={K13.both} />
				<Sx x={LAD_R + 70} y={480} text="both copies match the original" size={30} color={INK} weight={700} at={K13.match} />
				<Sx x={LAD_R + 70} y={524} text="exactly" size={30} color={INK} weight={700} at={K13.match} />
				<Sx x={110} y={660} text={DA} size={31} color={INK} weight={700} at={K13.explain} />
				<AnswerBox x={110} y={680} w={1250} h={74} at={K13.explain + 8} />
				<Sx x={110} y={820} text={DB} size={31} color={INK} weight={700} at={K13.suggest} />
				<AnswerBox x={110} y={840} w={1250} h={74} at={K13.suggest + 8} />
				<Sx x={96} y={1030} text="Pause here to answer." size={44} color={AMBER_INK} hand at={K13.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1640} y={760} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 14. Feedback ----------
const K14 = cues(S('feedback'), {one: 'With one colour', same: 'look the same', cant: "so you can't see", two: 'Use two colours', each: 'each molecule shows one of each', wrote: 'If you wrote that the model is fine', fine: 'fine because the sequences match', accurate: 'matching shows accurate copying', old: 'not which strand is old'});
export const SceneFeedbackP01: React.FC = () => {
	const f = useCurrentFrame();
	const t = prog(f, K14.two, 24);
	const oc = colMix('white', 'blue', t), nc = colMix('white', 'green', t);
	const qO = prog(f, K14.same, 10) * (1 - prog(f, K14.two, 12));
	return (
		<>
			<Heading text="Feedback" at={4} size={50} />
			<Overlay>
				<Sx x={96} y={196} text={`${DA}   ${DB}`} size={24} color={INK_SOFT} weight={600} at={0} />
				<Ladder m={0} top={oc} bot={nc} />
				<Ladder m={1} top={nc} bot={oc} />
				{[0, 1].map(m => [0, 1].map(s => <QMark key={m + '-' + s} x={G.x + 380} y={ladY(m) + (s ? 120 : 50)} size={60} color={GREYT} o={qO} />))}
				{[0, 1].map(m => (
					<g key={m} opacity={prog(f, K14.each, 12)}>
						<DrawPath d={`M${LAD_R + 14},${ladY(m) + 4} L${LAD_R + 28},${ladY(m) + 4} L${LAD_R + 28},${ladY(m) + 2 * CH * G.k - 4} L${LAD_R + 14},${ladY(m) + 2 * CH * G.k - 4}`} at={K14.each} dur={12} color={AMBER_INK} width={4} />
						<Sx x={LAD_R + 44} y={ladY(m) + CH * G.k + 12} text="1 original + 1 new" size={34} color={AMBER_INK} hand at={K14.each + 4} />
					</g>
				))}
				<ModelLine x={140} y={640} text="(a) old and new strands look identical, so 'one original strand kept' can't be seen" at={K14.cant} size={30} />
				<ModelLine x={140} y={700} text="(b) two colours: one for original strands, one for new" at={K14.two + 10} size={30} />
				<MistakeChip x={140} y={780} text="fine: the sequences match" at={K14.wrote} cross={K14.accurate} size={30} />
				<Sx x={650} y={820} text="shows accurate copying, not which strand is old" size={34} color={AMBER_INK} hand at={K14.old - 10} />
				<g opacity={prog(f, K14.two, 12)}>
					<rect x={1500} y={890} width={30} height={26} rx={4} fill={colMix('white', 'blue', 1).fill} stroke={ORIG} strokeWidth={3} />
					<Sx x={1540} y={912} text="original" size={26} color={INK} weight={700} />
					<rect x={1660} y={890} width={30} height={26} rx={4} fill={colMix('white', 'green', 1).fill} stroke={NEWC} strokeWidth={3} />
					<Sx x={1700} y={912} text="new" size={26} color={INK} weight={700} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 15. Decision rule and handoff ----------
const K15 = cues(S('decision-rule'), {so: 'to build and assess a model', decide: 'decide what each piece stands for', follow: 'follow the real rules', valid: 'so the model is valid', record: 'record what you see', name: 'name what the model represents well', leaves: 'what it leaves out', improve: 'how to improve it', next: 'Next: how the chain'});
export const SceneDecisionP01: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: 'Key: what each piece stands for.', at: K15.decide},
		{t: 'Build by the real rules (valid).', at: K15.follow},
		{t: 'Record what you see.', at: K15.record},
		{t: 'Assess: represents well / leaves out / improve.', at: K15.name},
	];
	const fold = prog(f, K15.next + 16, 30);
	const r = 18;
	const cx = 1500, cy = 900;
	return (
		<>
			<Heading text="To build and assess a model" at={K15.so} size={54} />
			<Overlay>
				<Panel x={120} y={230} w={1180} h={470} stroke={AMBER} o={prog(f, K15.decide - 10, 12)} />
				{lines.map((l, i) => <Sx key={i} x={160} y={320 + i * 100} text={l.t} size={48} color={INK} hand at={l.at} />)}
				<g opacity={prog(f, K15.so, 14)}>
					<MiniLadder x={150} y={780} w={360} h={40} top={ORIG} bot={NEWC} />
					<BeadChain x={600} y={800} cols={['red', 'gold', 'green']} r={18} />
					<Sx x={150} y={870} text="model 1: copying" size={28} color={INK_SOFT} weight={700} />
					<Sx x={580} y={870} text="model 2: polypeptide" size={28} color={INK_SOFT} weight={700} />
				</g>
				<Fade at={K15.next}>
					<Panel x={1300} y={770} w={540} h={210} stroke={AMBER} sw={3.5} />
					<Sx x={1330} y={820} text="Next: from chain to protein" size={34} color={INK} hand />
					<Sx x={1330} y={862} text="to trait" size={34} color={INK} hand />
				</Fade>
				<g opacity={prog(f, K15.next, 12)}>
					{['red', 'gold', 'green', 'red', 'gold'].map((c, i) => {
						const a = (i / 5) * Math.PI * 2;
						const x = lerp(cx - 120 + i * beadPitch(r) + 140, cx + 200 + Math.cos(a) * 26, fold);
						const y = lerp(cy + 20, cy + 10 + Math.sin(a) * 22, fold);
						return <circle key={i} cx={x} cy={y} r={r * 0.8} fill={c === 'red' ? '#d4503f' : c === 'gold' ? '#e7b53c' : '#5fa85a'} stroke={INK_SOFT} strokeWidth={2} />;
					})}
					<Blob x={cx + 200} y={cy + 10} r={44} o={0.35 * fold} fill={AMBER} seed={3} />
				</g>
			</Overlay>
		</>
	);
};

// ---------- 16. Key notes ----------
const NOTES = notesCheck([
	'Key: blue = original DNA, green = new DNA, yellow = RNA, orange = tRNA, bead = amino acid. Tabs fit only A-T (two notches) and C-G (three notches): complementary pairing and hydrogen bonds. Each card: phosphate and sugar on the strip, base on the tab. Tape = covalent backbone. Arrows 5\' to 3\', opposite on the two strands (antiparallel).',
	'Replication model: separate at the tabs (backbones intact); each strand is a template; add new cards opposite partners. Result: two identical molecules, each with one original strand (semi-conservative). They become two sister chromatids.',
	'Synthesis model: yellow RNA cards (U has T\'s notches); orange tRNA cards with three base tabs (anticodon) and a bead; card ribosome with a three-tab window. Template strand only; mRNA with U opposite A; gene unchanged. The ribosome shows one codon (three bases); the tRNA whose tabs fit brings its amino acid; start AUG; a stop codon ends the chain.',
	'Results: AUG GCA UUU UGA gives Met-Ala-Phe, then stop.',
	'Assess a model: what it represents well; what it leaves out or distorts (no enzymes, flat, tiny, direction not enforced, chain not folded); say what each limit hides; one improvement per limit (add cards at the 3\' end only, enzyme cards, twist into a helix).',
]);
export const SceneNotesP01: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 160, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 24}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 33, fontWeight: 500, color: INK, lineHeight: 1.28}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 930}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 46, fontWeight: 700, color: AMBER_INK, lineHeight: 1.15}}>Memory: Key, build, record, assess.</div>
			<div style={{fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 600, color: INK_SOFT, marginTop: 6}}>A model is judged by what it shows and what it hides.</div>
		</Enter>
	</>
);
