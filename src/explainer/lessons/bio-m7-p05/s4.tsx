// M7 P05 (Biology practical) scenes 13a to 15: two unseen exam items (assess a treatment claim from zone data; identify
// two problems in a flawed antiseptic method and fix each), each whole on screen through "Pause here to answer." and
// its 10 s countdown with nothing answer-bearing; brief feedback with the givens underlined in the question strip as
// they are used and one crossed classic mistake; the plan card with the handoff to vector control; the key notes with
// the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay} from '../bio-m5-b13/shared';
import {HscTag, NextChip, NotesBoard, QText, qCheck} from '../bio-m5-g01/board';
import type {QBlock, QMark} from '../bio-m5-g01/board';
import {CardBox} from '../bio-m6-b01/parts';
import {AnsBox, PauseHold} from '../bio-m7-b01/s3';
import {S, hold} from './common';
import {AMBER, AMBER_INK, CARD, CrossChip, DPlate, Dish, EDGE, GREEN, GREY_INK, INK, PLATES, Pl, PlateB, Sx, TEAL, TERRA, VIOLET, WText, crossChipW, discAt, fitW, mmOf, prog, smooth, vis, wrapT} from './parts';

// ---------- item 1: assess a treatment claim ----------
type T1 = {s: number; m: number; c: number; d: number};
const Q1 = (t: T1) => [
	{text: 'A student tested two antibiotic discs, P and Q, each 6 mm in diameter, on nutrient agar plates spread with a harmless bacterium. She also used a disc dipped in sterile water.', at: t.s},
	{text: 'After 48 hours at 28 °C, the mean zone of inhibition diameters were: P 22 mm, Q 13 mm, sterile water 6 mm.', at: t.m},
	{text: "She concluded: 'Antibiotic P would be a more effective treatment than Q for a bacterial infection in people.'", at: t.c},
] as QBlock[];
const D1 = (t: T1) => [{text: 'Assess her conclusion. (3 marks)', at: t.d, weight: 700}] as QBlock[];
qCheck([...Q1({s: 0, m: 0, c: 0, d: 0}), ...D1({s: 0, m: 0, c: 0, d: 0})], [{phrase: 'P 22 mm,', at: 0}, {phrase: 'Q 13 mm,', at: 0}, {phrase: 'sterile water 6 mm.', at: 0}, {phrase: "a bacterial infection in people.'", at: 0}]);

// ---------- 13a. Attempt 1 ----------
const KA = cues(S('attempt-1'), {turn: 'Your turn', student: 'A student tested', mean: 'The mean zone', concluded: 'She concluded', assess: 'Assess her conclusion', pause: 'Pause here to answer'});
// The whole question arrives with its card. Beside it the givens: the lawn plate (agar spread with a harmless
// bacterium) and the three mean diameters as bars against the 6 mm disc line (data only, no verdict).
const GivensOne: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const bars = [{t: 'P', v: 22}, {t: 'Q', v: 13}, {t: 'water', v: 6}];
	const X0 = 1330, BY = 700, K = 10;
	return (
		<g opacity={o}>
			<Dish p={PLATES.lawn} cx={1400} cy={320} w={180} />
			<Sx x={1510} y={310} text="agar spread with a" size={26} color={GREY_INK} hand weight={700} at={-100} />
			<Sx x={1510} y={344} text="harmless bacterium" size={26} color={GREY_INK} hand weight={700} at={-100} />
			<line x1={X0 - 10} x2={X0 + 440} y1={BY} y2={BY} stroke={INK} strokeWidth={3} />
			{bars.map((b, i) => (
				<g key={b.t}>
					<rect x={X0 + 20 + i * 145} y={BY - b.v * K} width={95} height={b.v * K} rx={6} fill={i === 2 ? '#e4e0d6' : '#f3d9a4'} stroke={i === 2 ? GREY_INK : AMBER_INK} strokeWidth={2.5} />
					<Sx x={X0 + 67 + i * 145} y={BY - b.v * K - 12} text={`${b.v} mm`} size={28} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
					<Sx x={X0 + 67 + i * 145} y={BY + 34} text={b.t} size={28} color={i === 2 ? GREY_INK : VIOLET} weight={800} anchor="middle" at={-100} />
				</g>
			))}
			<Sx x={X0 + 210} y={BY + 72} text="mean zone diameter" size={24} color={GREY_INK} weight={600} anchor="middle" at={-100} />
		</g>
	);
};
export const SceneAttemptOne: React.FC = () => {
	const c = KA.turn + 6;
	const t: T1 = {s: c, m: c, c: c, d: c};
	const h = hold('attempt-1');
	return (
		<>
			<Heading text="Exam question 1" at={KA.turn} size={50} />
			<Overlay>
				<HscTag at={KA.turn} />
				<CardBox x={100} y={170} w={1720} h={850} at={c} />
				<QText q={qCheck(Q1(t), [])} x={140} y={250} w={1100} size={34} card={false} />
				<QText q={qCheck(D1(t), [])} x={140} y={680} w={1100} size={38} card={false} />
				<GivensOne at={c} />
				<AnsBox x={140} y={730} w={1100} h={280} at={c} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KA.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13b. Feedback 1 ----------
const KB = cues(S('feedback-1'), {part: 'only part', p22: "P's twenty two", q13: ['thirteen', 1], control: 'six millimetre control', larger: 'larger clear zone', doesnt: "doesn't show", diffusion: 'dose and diffusion', trials: 'clinical trials', biggest: 'Biggest zone', over: 'overclaim'});
const ALL1: T1 = {s: -100, m: -100, c: -100, d: -100};
const FRow: React.FC<{y: number; label: string; text: string; at: number; color: string; lines: number}> = ({y, label, text, at, color, lines}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<rect x={120} y={y} width={1680} height={lines * 44 + 30} rx={18} fill="#fffaf0" stroke={color} strokeWidth={3} />
			<Sx x={146} y={y + 46} text={label} size={32} color={color} weight={800} at={-100} />
			<WText x={360} y={y + 46} text={text} size={32} maxW={1410} color={color} hand weight={700} lh={44} at={at} />
		</g>
	);
};
export const SceneFeedbackOne: React.FC = () => {
	const marks: QMark[] = [
		{phrase: 'P 22 mm,', at: KB.p22},
		{phrase: 'Q 13 mm,', at: KB.q13},
		{phrase: 'sterile water 6 mm.', at: KB.control},
		{phrase: "a bacterial infection in people.'", at: KB.diffusion},
	];
	const chip = 'biggest zone = best medicine';
	return (
		<>
			<Heading text="Judge the claim against the data" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={210} at={-100} />
				<QText q={qCheck([...Q1(ALL1), {...D1(ALL1)[0], para: true}], marks)} x={140} y={200} w={2240} size={36} card={false} s={0.72} />
				<FRow y={390} label="Judgement" text="only partly supported" at={KB.part} color={INK} lines={1} />
				<FRow y={490} label="Evidence" text="P 22 mm against Q 13 mm; control 6 mm, so paper and water alone made no zone: P produced a larger clear zone, under these conditions" at={KB.p22 + 10} color={TEAL} lines={2} />
				<FRow y={634} label="Limit" text="a larger zone doesn't show a better treatment. Zone size also depends on dose and diffusion; treatment needs the drug to reach the infection safely and work on the real pathogen (clinical trials)" at={KB.doesnt} color={TERRA} lines={3} />
				<CrossChip x={140} y={850} text={chip} at={KB.biggest} cross={KB.over + 6} size={34} />
				<Sx x={140 + crossChipW(chip, 34) + 30} y={890} text="a plate isn't a patient" size={30} color={GREY_INK} weight={600} at={KB.over + 16} />
				<Sx x={1800} y={1010} text="HSCScience marking guide (illustrative)" size={22} color={GREY_INK} weight={600} anchor="end" at={KB.part} />
				{void KB.larger}{void KB.trials}
			</Overlay>
		</>
	);
};

// ---------- item 2: a flawed method ----------
type T2 = {s: number; p: number; d: number};
const Q2 = (t: T2) => [
	{text: 'A student compared two antiseptic solutions, X and Y. She soaked one paper disc in X for 1 minute and another paper disc in Y for 10 minutes, then placed both discs on a single nutrient agar plate spread with a harmless bacterium.', at: t.s},
	{text: 'She incubated the plate at 37 °C for 48 hours, then removed the lid to measure each zone of inhibition with a ruler.', at: t.p},
] as QBlock[];
const D2 = (t: T2) => [{text: 'Identify TWO problems with this method and propose an improvement that fixes each problem. (4 marks)', at: t.d, weight: 700}] as QBlock[];
qCheck(Q2({s: 0, p: 0, d: 0}), [{phrase: 'for 1 minute', at: 0}, {phrase: 'for 10 minutes,', at: 0}, {phrase: 'removed the lid', at: 0}, {phrase: '37 °C', at: 0}, {phrase: 'a single nutrient agar plate', at: 0}]);

// ---------- 13c. Attempt 2 ----------
const KC = cues(S('attempt-2'), {more: 'One more', student: 'A student soaked', put: 'She put both', identify: 'Identify two problems', pause: 'Pause here to answer'});
// The whole question arrives with its card. Beside it the givens: one lawn plate with the two soaked discs (X 1 min,
// Y 10 min) and 37 °C for 48 h. Nothing answer-bearing.
const GivensTwo: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const P = {cx: 1560, cy: 400, w: 330};
	const r = 3 * mmOf(P.w) * 2.4;
	const discs = [{k: 'A' as const, t: 'X', n: '1 min'}, {k: 'B' as const, t: 'Y', n: '10 min'}];
	return (
		<g opacity={o}>
			<Dish p={PLATES.lawn} cx={P.cx} cy={P.cy} w={P.w} />
			{discs.map(d => {
				const [x, y] = discAt(P.cx, P.cy, P.w, d.k);
				return (
					<g key={d.t}>
						<circle cx={x} cy={y + 30} r={r} fill="#fdfcf7" stroke="#9c947f" strokeWidth={2.5} />
						<Sx x={x} y={y + 30 - r - 10} text={d.t} size={32} color={VIOLET} weight={800} anchor="middle" at={-100} />
					</g>
				);
			})}
			<Sx x={P.cx} y={620} text="X: soaked 1 min · Y: soaked 10 min" size={28} color={VIOLET} hand weight={700} anchor="middle" at={-100} />
			<Sx x={P.cx} y={662} text="one plate, 37 °C, 48 h" size={28} color={TERRA} hand weight={700} anchor="middle" at={-100} />
		</g>
	);
};
export const SceneAttemptTwo: React.FC = () => {
	const c = KC.more + 6;
	const t: T2 = {s: c, p: c, d: c};
	const h = hold('attempt-2');
	return (
		<>
			<Heading text="Exam question 2" at={KC.more} size={50} />
			<Overlay>
				<HscTag at={KC.more} />
				<CardBox x={100} y={170} w={1720} h={850} at={c} />
				<QText q={qCheck(Q2(t), [])} x={140} y={250} w={1080} size={34} card={false} />
				<QText q={qCheck(D2(t), [])} x={140} y={640} w={1080} size={36} card={false} />
				<GivensTwo at={c} />
				<AnsBox x={140} y={750} w={1340} h={260} at={c} />
				<PauseHold start={h.startFrame} end={h.endFrame} at={KC.pause} />
			</Overlay>
		</>
	);
};

// ---------- 13d. Feedback 2 ----------
const KD = cues(S('feedback-2'), {soak: 'soaking times', every: 'Soak every disc', lid: 'removing the lid', closed: 'keep it closed', careful: 'Being more careful', classic: 'classic mistake', all: 'opened at all'});
const ALL2: T2 = {s: -100, p: -100, d: -100};
/** Two soaked discs on a small lawn plate, labelled 1 and 10 min (the problem row's apparatus). */
const FbDiscs: React.FC<{x: number; y: number}> = ({x, y}) => {
	const w = 120;
	const r = 3 * mmOf(w) * 2.6;
	return (
		<g>
			<Dish p={PLATES.lawn} cx={x} cy={y} w={w} />
			{(['A', 'B'] as const).map((k, i) => {
				const [dx, dy] = discAt(x, y, w, k);
				return (
					<g key={k}>
						<circle cx={dx} cy={dy + 14} r={r} fill="#fdfcf7" stroke="#9c947f" strokeWidth={2} />
						<Sx x={dx} y={dy - 2} text={i ? '10' : '1'} size={18} color={VIOLET} weight={800} anchor="middle" at={-100} />
					</g>
				);
			})}
		</g>
	);
};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const silent = KD.closed + 60;
	const marks: QMark[] = [
		{phrase: 'for 1 minute', at: KD.soak},
		{phrase: 'for 10 minutes,', at: KD.soak + 10},
		{phrase: 'removed the lid', at: KD.lid},
		{phrase: '37 °C', at: silent},
		{phrase: 'a single nutrient agar plate', at: silent + 10},
	];
	const rows = [
		{p: 'unequal soaking → different amounts of antiseptic', fix: 'same soaking time, or the same measured volume (for example 10 µL) on each disc', at: KD.soak, fixAt: KD.every},
		{p: 'lid removed → exposure to unknown growth', fix: 'keep it closed; measure through the base', at: KD.lid, fixAt: KD.closed},
	];
	const X1 = 120, W1 = 760, X2 = 900, W2 = 920, Y0 = 420, RH = 130;
	const chip = 'be more careful opening the lid';
	return (
		<>
			<Heading text="Each fix must fix its problem" at={4} size={50} />
			<Overlay>
				<HscTag at={-100} />
				<CardBox x={100} y={150} w={1720} h={190} at={-100} />
				<QText q={qCheck(Q2(ALL2), marks)} x={140} y={200} w={2240} size={36} card={false} s={0.72} />
				<g opacity={prog(f, KD.soak - 6, 12)}>
					<Sx x={X1 + 20} y={Y0 - 16} text="problem" size={30} color={INK} weight={800} at={-100} />
					<Sx x={X2 + 20} y={Y0 - 16} text="improvement that fixes it" size={30} color={INK} weight={800} at={-100} />
				</g>
				{rows.map((r, i) => {
					const o = prog(f, r.at, 12);
					if (o <= 0.01) return null;
					const dim = prog(f, KD.careful, 12) * 0;
					const y = Y0 + i * (RH + 12);
					return (
						<g key={i} opacity={o * (1 - 0.35 * dim)}>
							<rect x={X1} y={y} width={W1} height={RH} rx={16} fill="#fffaf0" stroke={AMBER} strokeWidth={3.5} />
							<g opacity={prog(f, r.fixAt - 4, 12)}><rect x={X2} y={y} width={W2} height={RH} rx={16} fill="#fffaf0" stroke={AMBER} strokeWidth={3.5} /></g>
							<WText x={X1 + 22} y={y + 52} text={r.p} size={32} maxW={W1 - 190} color={INK} hand weight={700} at={r.at} />
							<WText x={X2 + 22} y={y + 52} text={r.fix} size={32} maxW={W2 - (i === 1 ? 210 : 44)} color={AMBER_INK} hand weight={700} at={r.fixAt} />
							{i === 0 ? <FbDiscs x={X1 + W1 - 85} y={y + RH / 2} /> : <DPlate p={PLATES.zones} cx={X1 + W1 - 85} cy={y + RH / 2} w={110} />}
							{i === 1 ? <g opacity={prog(f, r.fixAt, 12)}><PlateB p={PLATES.ruler} cx={X2 + W2 - 105} cy={y + RH / 2} w={170} /></g> : null}
						</g>
					);
				})}
				<g opacity={vis(f, silent, undefined, 12)}>
					<rect x={X1} y={Y0 + 2 * (RH + 12)} width={W1 + W2 + 20} height={96} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
					<WText x={X1 + 22} y={Y0 + 2 * (RH + 12) + 40} text="also: 37 °C → 25 to 30 °C; one plate, no control → three plates and a blank disc" size={28} maxW={W1 + W2 - 30} color={GREY_INK} weight={600} at={silent} />
				</g>
				<CrossChip x={140} y={860} text={chip} at={KD.careful} cross={KD.classic + 6} size={32} />
				<Sx x={140 + crossChipW(chip, 32) + 30} y={900} text="the fix must remove the exposure" size={30} color={GREY_INK} weight={600} at={KD.all} />
				{void Pl}{void fitW}{void DPlate}
			</Overlay>
		</>
	);
};

// ---------- 14. Decision rule and handoff ----------
const KE = cues(S('decision-rule'), {lawn: 'a lawn', discs: 'discs spaced', closed: 'closed and upside', measure: 'Measure through', claim: 'claim only', next: 'Next'});
// Each plan row has its apparatus in the right panel, on the row's cue: the lawn plate and the micropipette with its
// culture, the fresh disc plate (discs spaced, blank control), the incubator, then the zones plate with the ruler.
// The panel is there from the first frame.
const PX = 1310, PW = 540;
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{at: KE.lawn, t: '1 Lawn of an approved harmless culture (0.1 mL, spread evenly).'},
		{at: KE.discs, t: '2 Discs ≥ 2 cm apart; blank disc control; three plates, positions rotated.'},
		{at: KE.closed, t: '3 Label the base, close the lid (school procedure), invert, 25 to 30 °C, never opened.'},
		{at: KE.measure, t: '4 Measure through the base, two diameters, mean of three plates.'},
		{at: KE.claim, t: "5 Claim: the larger clear zone, under these conditions; not 'the stronger drug' or 'the better medicine'."},
	];
	const at = lines.map(l => l.at);
	const st = (i: number) => vis(f, i === 0 ? -100 : at[i], i === 3 ? 1e9 : at[i + 1], 12);
	let y = 190;
	return (
		<>
			<Heading text="The plan, start to finish" at={4} size={56} />
			<Overlay>
				{lines.map((l, i) => {
					const o = prog(f, l.at, 14);
					const lit = vis(f, l.at, lines[i + 1]?.at ?? KE.next, 10);
					const n = wrapT(l.t, 34, 1110, true).length;
					const h = n * 42 + 40;
					const y0 = y;
					y += h + 14;
					if (o <= 0.01) return null;
					return (
						<g key={i} opacity={o * (lit > 0.5 ? 1 : 0.7)} transform={`translate(0,${(1 - o) * 16})`}>
							<rect x={100} y={y0} width={1170} height={h} rx={24} fill={lit > 0.5 ? '#fff3d9' : CARD} stroke={lit > 0.5 ? AMBER : EDGE} strokeWidth={3.5} />
							<WText x={130} y={y0 + 46} text={l.t} size={34} maxW={1110} color={INK} hand weight={700} lh={42} at={-100} />
						</g>
					);
				})}
				<rect x={PX} y={190} width={PW} height={620} rx={22} fill="#fffdf8" stroke={EDGE} strokeWidth={3} opacity={prog(f, 0, 12)} />
				<g opacity={st(0)}>
					<Dish p={PLATES.lawn} cx={PX + 370} cy={460} w={270} />
					<Pl p={PLATES.pipette} cx={PX + 150} cy={460} w={fitW(PLATES.pipette, 230, 260)} />
					<Sx x={PX + PW / 2} y={720} text="0.1 mL, spread evenly" size={32} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={st(1)}>
					<DPlate p={PLATES.fresh} cx={PX + PW / 2} cy={450} w={330} />
					<Sx x={PX + PW / 2} y={680} text="discs 2 cm apart, blank control" size={30} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
					<Sx x={PX + PW / 2} y={730} text="three plates" size={30} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={st(2)}>
					<Pl p={PLATES.incubator} cx={PX + PW / 2} cy={450} w={420} />
					<Sx x={PX + PW / 2} y={730} text="inverted, 25 to 30 °C, 48 h" size={32} color={TERRA} hand weight={700} anchor="middle" at={-100} />
				</g>
				<g opacity={st(3)}>
					<DPlate p={PLATES.zones} cx={PX + PW / 2} cy={430} w={330} />
					<PlateB p={PLATES.ruler} cx={PX + PW / 2} cy={640} w={440} />
					<Sx x={PX + PW / 2} y={740} text="through the base" size={32} color={AMBER_INK} hand weight={700} anchor="middle" at={-100} />
				</g>
				<NextChip x={820} y={870} w={1000} text="Next: vector control" at={KE.next}>
					<Pl p={PLATES.mosquito} cx={886} cy={912} w={fitW(PLATES.mosquito, 100, 64)} />
				</NextChip>
				{void smooth}{void GREEN}
			</Overlay>
		</>
	);
};

// ---------- 15. Key notes ----------
const NOTES = [
	"The disc's antibiotic diffuses out, strongest near the disc.",
	'Zone of inhibition: the clear ring where growth was stopped.',
	'Independent: the antibiotic. Dependent: zone diameter (mm).',
	'Blank disc + sterile water: no zone. Three plates, positions rotated.',
	'Measure through the base: two diameters, averaged; no zone = 6 mm.',
	'A larger zone shows a larger clear region, not a better medicine.',
	'Plates closed, inverted, 25 to 30 °C, never opened; forceps for discs.',
];
export const SceneNotes: React.FC = () => (
	<NotesBoard notes={NOTES} aid="Zone shows the plate, not the patient." tag="Plates stay closed: measure through the base." size={34} aidTop={680} />
);
void TEAL; void TERRA;
