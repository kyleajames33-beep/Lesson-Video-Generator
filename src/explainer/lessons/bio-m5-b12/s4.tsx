// B12 scenes 11a to 13: two unseen items (a paternity gel at three STR markers; choosing sequencing for a single-base
// variant in two populations), each with brief feedback (answer, key reason, short working on the card, one
// crossed-out mistake), the decision rule with the handoff, and the key notes. Each question card stays complete
// through its 10 s countdown and after it; nothing answer-bearing is on a card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, AnswerBox, CARD, CPLUM, Countdown, Cross, DrawPath, EDGE, Enter, FILL, FONT_DISPLAY, FONT_HAND, Fade, Gel, GreyTag, HandText, Heading, INK, INK_SOFT,
	MiniGel, MistakeChip, ModelLine, Overlay, PAT, Panel, Ring, S, Sx, TEALC, Tick, TileRow, bandY, hold, laneX, notesCheck, paternal, prog,
} from './shared';
import type {GelG, GelLane} from './shared';

// ---------- the paternity gels ----------
const gelAt = (k: number, y: number, h: number, w = 500, x0 = 110, gap = 560): GelG => ({x: x0 + k * gap, y, w, h, n: 4, lo: 5, hi: 17});
const lanesOf = (k: number): GelLane[] => {
	const m = PAT[k];
	return [{sex: 'F', label: 'mother', bands: m.mother}, {sex: 'M', label: 'child', bands: m.child, small: true}, {sex: 'M', label: 'man A', bands: m.manA}, {sex: 'M', label: 'man B', bands: m.manB}];
};
const PATERNAL = PAT.map(paternal);
const MATERNAL = PAT.map(m => m.child.find(b => m.mother.includes(b))!);
const D1A = '(a) Which man can be excluded?';
const D1B = '(b) Explain using the bands.';

// ---------- 11a. Attempt one ----------
const K12 = cues(S('attempt'), {two: 'Two harder questions now', first: 'this gel shows a mother', three: 'at three markers', which: 'Which man can be excluded', use: 'Use the bands to explain', pause: 'Pause here to answer'});
export const SceneAttemptB12: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('attempt');
	return (
		<>
			<Heading text="Paternity test: three STR markers" at={K12.first} size={56} />
			<Overlay>
				{[0, 1, 2].map(k => {
					const G = gelAt(k, 320, 380);
					return (
						<g key={k} opacity={prog(f, K12.three + k * 8, 12)}>
							<Sx x={G.x + G.w / 2} y={196} text={`marker ${k + 1}`} size={34} color={INK} weight={800} anchor="middle" />
							<Gel G={G} lanes={lanesOf(k)} electrodes={false} symSz={32} labelSize={24} bandW={60} />
						</g>
					);
				})}
				<GreyTag x={110} y={712} text="band labels: repeat numbers; DNA ran from the top (−) to the bottom (+)" at={K12.three + 20} size={22} />
				<Sx x={110} y={810} text={D1A} size={34} color={INK} weight={700} at={K12.which} />
				<AnswerBox x={110} y={826} w={1300} h={60} at={K12.which + 8} />
				<Sx x={110} y={940} text={D1B} size={34} color={INK} weight={700} at={K12.use} />
				<AnswerBox x={110} y={956} w={1300} h={60} at={K12.use + 8} />
				<Sx x={1450} y={1050} text="Pause here to answer." size={40} color={AMBER_INK} hand at={K12.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1680} y={860} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 11b. Feedback one ----------
const K12b = cues(S('feedback-one'), {first: "find the child's bands", they: "They're the twelve at marker one", thirteen: 'the thirteen at marker two', ten: 'and the ten at marker three', manA: 'Man A has all three', manB: 'Man B lacks the twelve', excl: "so he's excluded", ifs: 'If you said man A', match: 'a match only means'});
export const SceneFeedbackOneB12: React.FC = () => {
	const f = useCurrentFrame();
	const pAt = [K12b.they, K12b.thirteen, K12b.ten];
	return (
		<>
			<Heading text="Question one: feedback" at={4} size={50} />
			<Overlay>
				<Sx x={1460} y={130} text={`${D1A}  ${D1B}`} size={22} color={INK_SOFT} weight={600} anchor="middle" at={-30} />
				{[0, 1, 2].map(k => {
					const G = gelAt(k, 250, 330);
					const mY = bandY(G, MATERNAL[k]), pY = bandY(G, PATERNAL[k]);
					const bIdx = PAT[k].manB.includes(PATERNAL[k]);
					return (
						<g key={k}>
							<Sx x={G.x} y={G.y + G.h + 40} text={`marker ${k + 1}`} size={28} color={INK} weight={800} at={-30} />
							<Gel G={G} lanes={lanesOf(k)} electrodes={false} symSz={28} labelSize={22} bandW={56}
								ring={(i, j) => (i === 1 && PAT[k].child[j] === PATERNAL[k] ? prog(f, pAt[k], 10) : 0)} />
							<g opacity={prog(f, K12b.first + 10 + k * 6, 10)}>
								<line x1={laneX(G, 1) - 30} y1={mY} x2={laneX(G, 0) + 62} y2={mY} stroke={CPLUM} strokeWidth={5} />
							</g>
							<g opacity={prog(f, K12b.manA + k * 6, 10)}>
								<line x1={laneX(G, 1) + 62} y1={pY} x2={laneX(G, 2) - 30} y2={pY} stroke={TEALC} strokeWidth={5} />
							</g>
							<Tick x={laneX(G, 2)} y={G.y + G.h + 30} at={K12b.manA + 10 + k * 6} s={26} />
							<g opacity={prog(f, K12b.manB + k * 8, 10)}>
								<line x1={laneX(G, 2) + 62} y1={pY + 18} x2={laneX(G, 3) + 30} y2={pY + 18} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="7 6" />
							</g>
							{bIdx ? <Tick x={laneX(G, 3)} y={G.y + G.h + 30} at={K12b.manB + 10 + k * 8} s={26} /> : <Cross x={laneX(G, 3)} y={G.y + G.h + 30} at={K12b.manB + 10 + k * 8} s={16} />}
						</g>
					);
				})}
				<Sx x={110} y={680} text={`from the father: ${PATERNAL.join(', ')} (child bands not from the mother)`} size={32} color={AMBER_INK} hand at={K12b.they} />
				<ModelLine x={140} y={760} text="(a) man B excluded" at={K12b.excl} size={38} />
				<Sx x={140} y={812} text={`(b) child's ${PATERNAL[0]} (marker 1) and ${PATERNAL[2]} (marker 3) are in neither the mother nor man B`} size={32} color={INK} weight={600} at={K12b.excl + 10} />
				<MistakeChip x={140} y={880} text="man A is the father" at={K12b.ifs} cross={K12b.match} size={32} />
				<Sx x={560} y={922} text="can't be excluded; more markers needed" size={38} color={AMBER_INK} hand at={K12b.match + 8} />
			</Overlay>
		</>
	);
};

// ---------- 11c. Attempt two ----------
const K12c = cues(S('attempt-two'), {second: 'Second', res: 'Researchers want to know', variant: 'a change in a single base', more: 'is more common in one population', explain: 'Explain why DNA sequencing', then: 'Then name one question', pause: 'Pause here to answer'});
const ROWSEQ = 'CCTGAGGAG';
const FILLED = [['A', 'T', 'A'], ['T', 'T', 'A']];
const D2A = '(a) Why is sequencing more useful than profiling here?';
const D2B = '(b) Name one question where profiling is the better choice.';
const PopCards: React.FC<{y: number; s?: number; at: number; fillAt?: number; barAt?: number}> = ({y, s = 1, at, fillAt, barAt}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{[0, 1].map(k => {
				const x = 110 + k * 860;
				return (
					<g key={k} opacity={prog(f, at + k * 8, 12)}>
						<Panel x={x} y={y} w={800} h={300 * s} />
						<Sx x={x + 26} y={y + 46 * s} text={`population ${k + 1}`} size={34 * s} color={INK} weight={800} />
						{[0, 1, 2].map(r => (
							<TileRow key={r} x={x + 70} y={y + (100 + r * 62) * s} seq={ROWSEQ} pitch={62 * s} w={52 * s} h={42 * s}
								tile={i => (i === 4 ? {l: fillAt !== undefined && f >= fillAt + r * 4 ? FILLED[k][r] : '?', glow: fillAt !== undefined ? prog(f, fillAt + r * 4, 8) : 0} : {})} />
						))}
						{barAt !== undefined ? (
							<g opacity={prog(f, barAt, 12)}>
							<rect x={x + 640} y={y + 90 * s} width={40} height={170 * s} rx={6} fill="#f1ebdd" stroke={EDGE} strokeWidth={1.5} />
							<rect x={x + 640} y={y + 90 * s + 170 * s * (1 - (k ? 0.6 : 0.25) * prog(f, barAt, 20))} width={40} height={170 * s * (k ? 0.6 : 0.25) * prog(f, barAt, 20)} rx={6} fill={FILL.T} stroke="#a68220" strokeWidth={1.5} />
							</g>
						) : null}
					</g>
				);
			})}
		</g>
	);
};
export const SceneAttemptTwoB12: React.FC = () => {
	const h = hold('attempt-two');
	return (
		<>
			<Heading text="Choose the tool" at={K12c.second} size={56} />
			<Overlay>
				<PopCards y={210} at={K12c.res} />
				<Sx x={110} y={600} text="disease-linked variant: a single-base change" size={36} color={INK} weight={700} at={K12c.variant} />
				<Sx x={110} y={650} text="Question: is it more common in one population than the other?" size={32} color={INK_SOFT} weight={600} at={K12c.more} />
				<Sx x={110} y={760} text={D2A} size={34} color={INK} weight={700} at={K12c.explain} />
				<AnswerBox x={110} y={776} w={1300} h={60} at={K12c.explain + 8} />
				<Sx x={110} y={900} text={D2B} size={34} color={INK} weight={700} at={K12c.then} />
				<AnswerBox x={110} y={916} w={1300} h={60} at={K12c.then + 8} />
				<Sx x={1450} y={1050} text="Pause here to answer." size={40} color={AMBER_INK} hand at={K12c.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1680} y={860} r={54} />
			</Overlay>
		</>
	);
};

// ---------- 11d. Feedback two ----------
const K12d = cues(S('feedback-two'), {variant: 'The variant is one base', order: 'the base order at that spot', reads: 'Sequencing reads it in everyone', freq: "compare the allele's frequency", prof: 'Profiling only measures repeat lengths', better: 'Profiling is better for relatedness', ifs: 'And if you said profiling', whole: 'reads the whole genome'});
export const SceneFeedbackTwoB12: React.FC = () => (
	<>
		<Heading text="Question two: feedback" at={4} size={50} />
		<Overlay>
			<Sx x={1810} y={130} text={`${D2A}  ${D2B}`} size={22} color={INK_SOFT} weight={600} anchor="end" at={-30} />
			<PopCards y={170} s={0.82} at={-30} fillAt={K12d.order} barAt={K12d.freq} />
			<GreyTag x={1500} y={430} text="allele frequency in each (illustrative)" at={K12d.freq + 10} size={22} />
			<ModelLine x={140} y={540} text="(a) the variant is one base: sequencing reads it in everyone tested," at={K12d.reads} size={34} />
			<Sx x={140} y={588} text="so its frequency can be compared" size={34} color={INK} weight={600} at={K12d.freq} />
			<Sx x={140} y={636} text="profiling measures repeat lengths only" size={34} color={INK} weight={600} at={K12d.prof} />
			<ModelLine x={140} y={730} text="(b) e.g. paternity, or how related captive animals are" at={K12d.better} size={34} />
			<MistakeChip x={140} y={830} text="profiling reads the whole genome" at={K12d.ifs} cross={K12d.whole + 10} size={32} />
			<Sx x={800} y={872} text="a handful of markers" size={40} color={AMBER_INK} hand at={K12d.whole + 16} />
		</Overlay>
	</>
);

// ---------- 12. Decision rule and handoff ----------
const K13 = cues(S('decision-rule'), {start: 'start with the question', base: 'Need a particular base', seqit: 'Sequence it', who: "Need to know who's related", compare: 'Compare profiles', mismatch: 'one mismatch can exclude', match: 'a match needs many markers', next: "Next, we'll see"});
export const SceneDecisionB12: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Start with the question" at={K13.start} size={56} />
			<Overlay>
				<g opacity={prog(f, K13.base, 12)}>
					<Panel x={330} y={240} w={1000} h={120} stroke={AMBER} sw={3.5} />
					<Sx x={370} y={318} text="a particular base: sequence" size={52} color={CPLUM} hand />
					<TileRow x={150} y={300} seq="GTG" pitch={46} w={40} h={36} tile={i => ({glow: i === 1 ? 1 : 0})} />
				</g>
				<g opacity={prog(f, K13.who, 12)}>
					<Panel x={330} y={420} w={1000} h={120} stroke={AMBER} sw={3.5} />
					<Sx x={370} y={498} text="who's related: profile" size={52} color={TEALC} hand />
					<MiniGel x={150} y={440} s={0.9} />
				</g>
				<g opacity={prog(f, K13.mismatch, 12)}>
					<Panel x={420} y={580} w={910} h={100} fill="#fff6e3" stroke={AMBER_INK} sw={3} />
					<Sx x={450} y={644} text="one mismatch excludes;" size={42} color={INK} hand />
					<Sx x={790} y={644} text="a match needs many markers" size={42} color={INK} hand at={K13.match} />
				</g>
				<Fade at={K13.next}>
					<Panel x={1060} y={790} w={770} h={200} stroke={AMBER} sw={3.5} />
					{Array.from({length: 18}, (_, i) => <rect key={i} x={1090 + (i % 6) * 26} y={830 + Math.floor(i / 6) * 34} width={20} height={26} rx={4} fill={CARD} stroke={INK_SOFT} strokeWidth={2} />)}
					<Sx x={1270} y={866} text="Next: what collaborative" size={40} color={INK} hand />
					<Sx x={1270} y={914} text="population data can show" size={40} color={INK} hand />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 13. Key notes ----------
const NOTES = notesCheck([
	'DNA sequencing: reads the exact base order of a stretch of DNA (short copied fragments, read base by base, assembled by overlap). Finds SNPs and disease alleles directly; carriers show two bases at one position.',
	'DNA profiling: compares selected markers (short tandem repeats: a short sequence repeated side by side; repeat number varies). Two copies per marker, one from each parent. Not a whole genome.',
	'Gel: DNA is negative, so it moves to + (red); shorter fragments travel further.',
	'Every band in a child comes from the mother or the father. A child band in neither the mother nor a man excludes him (no mutation). A match needs many markers: chances multiply. A match is strong evidence, not proof.',
	'Particular base: sequence. Relatedness or identity: profile.',
]);
export const SceneNotesB12: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 70}}><HandText text="Key notes: what to write in your book" at={2} size={56} cps={40} /></div>
		<Enter at={110} style={{position: 'absolute', left: 1130, top: 84}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 32, fontWeight: 700, color: AMBER_INK}}>Pause the video if you need more time to copy.</div>
		</Enter>
		<div style={{position: 'absolute', left: 110, top: 170, width: 1700}}>
			{NOTES.map((n, i) => (
				<Enter key={i} at={30 + i * 10} style={{display: 'flex', gap: 18, marginBottom: 28}}>
					<div style={{flex: 'none', width: 14, height: 14, marginTop: 13, borderRadius: 999, background: AMBER}} />
					<div style={{fontFamily: FONT_DISPLAY, fontSize: 35, fontWeight: 500, color: INK, lineHeight: 1.3}}>{n}</div>
				</Enter>
			))}
		</div>
		<Enter at={90} style={{position: 'absolute', left: 110, top: 925}}>
			<div style={{fontFamily: FONT_HAND, fontSize: 42, fontWeight: 700, color: AMBER_INK, lineHeight: 1.15}}>Memory: Sequence = bases; profile = selected markers. DNA runs to red.<br />Every child band from Mum or Dad.</div>
		</Enter>
	</>
);
void DrawPath; void Ring;
