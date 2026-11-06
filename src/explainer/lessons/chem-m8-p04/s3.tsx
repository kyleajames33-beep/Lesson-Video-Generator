// M8 P04 scenes 13 to 18: two worded attempts (the full question and its graph arrive with the card and stay through the
// countdown; the colourimeter or the cuvette beside them), brief feedback (feedback 1: the read on an enlarged graph,
// three working lines, the framed answer and the crossed diluted value; feedback 2: the smudged cuvette and thinner beam,
// the higher read, the fix rail and the crossed averaging slip), the decision rule and handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {FixRail} from '../skills-s07/pieces';
import {COLM, CUV, RACK6, UVV, hold, sc} from './common';
import {
	CAxes, CG, CPts, CRead, CSeg, CU, CalGraph, Cuv, Fade, Framed, GIV, GOOD, INK, INK_SOFT, KeyNotesBoard, MiniBeam, MistakeX, NAVY, OUT, Overlay, PauseHold, PicF, QText, Ridges, RowCard, ShrinkAt, Sx, TaskLine, Wr,
	cuvW, picW, qCheck, vis,
} from './parts';
import type {QBlock, QMark} from './parts';

const TAG = 'HSC-style question, written for HSCScience';
const QTag: React.FC = () => <Sx x={1824} y={150} text={TAG} size={28} color={INK_SOFT} anchor="end" hand at={-1000} />;
const Card: React.FC<{h: number; w?: number}> = ({h, w = 1720}) => <rect x={100} y={185} width={w} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />;

// ---------- 13/14. Attempt 1 ----------
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', pause: 'Pause here'});
const Q1 = (marks: QMark[] = []) => qCheck([
	{text: 'A student prepared copper(II) sulfate standards and measured their absorbance with a colourimeter fitted with a red filter. The calibration graph is shown. A 10.00 mL sample of a copper(II) solution of unknown concentration was diluted to 25.00 mL in a volumetric flask. The absorbance of the diluted solution was 0.325.', at: 0},
	{text: 'Calculate the concentration of copper(II) ions in the original solution.', at: 0, para: true, weight: 700},
] as QBlock[], marks);
const A1PTS: [number, number][] = [[0, 0], [0.1, 0.13], [0.2, 0.262], [0.3, 0.388], [0.4, 0.521]];
const A1Graph: React.FC<{g: CG; size?: number}> = ({g, size = 24}) => (
	<>
		<CAxes g={g} at={-1000} xLabel="concentration (mol L⁻¹)" yLabel="absorbance" xTicks={[0, 0.1, 0.2, 0.3, 0.4]} yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]} fx={n => (n === 0 ? '0' : n.toFixed(3))} fy={n => (n === 0 ? '0' : n.toFixed(3))} grid={{dx: 0.05, dy: 0.05}} size={size} card={false} />
		<CSeg g={g} a={[0, 0.0002]} b={[0.42, 0.0002 + 1.3 * 0.42]} at={-1000} color={GIV} width={4} />
		<CPts g={g} pts={A1PTS.map(([x, y]) => ({x, y, at: -1000}))} r={9} />
	</>
);
const GQ1: CG = {x: 1300, y: 250, w: 470, h: 440, x0: 0, x1: 0.45, y0: 0, y1: 0.55};
const Question1: React.FC<{marks?: QMark[]; graph?: boolean}> = ({marks, graph = true}) => (
	<>
		<Card h={graph ? 640 : 610} w={graph ? 1720 : 1080} />
		<QText q={Q1(marks)} x={140} y={262} w={1000} size={36} card={false} />
		{graph ? <A1Graph g={GQ1} /> : null}
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={0} />
		<QTag />
		<Question1 />
		<PicF p={COLM} x={1540} y={850} h={190} />
		<PauseHold h={hold(A1)} at={K13.pause} x={140} y={930} cx={1250} cy={920} />
	</Overlay>
);
const K14 = cues(sc('feedback-1'), {read: 'Read across', down: 'then down', p250: 'two five zero', diluted: "That's the diluted", tf: 'Twenty five over', factor: 'dilution factor', orig: 'the original is', l2: ['litre', 2], trap: 'The trap', stop: 'stopping at', zero: ['two five zero', 2]});
const GF1: CG = {x: 1200, y: 260, w: 580, h: 500, x0: 0, x1: 0.45, y0: 0, y1: 0.55};
export const SceneFeedback1: React.FC = () => (
	<Overlay>
		<TaskLine text="Read, then multiply back" at={0} size={50} />
		<ShrinkAt cx={100} cy={185} k={0.86} at={0}>
			<Question1 graph={false} marks={[
				{phrase: 'was 0.325.', at: K14.read, color: '#d9772b'},
				{phrase: 'A 10.00 mL sample', at: K14.tf, color: NAVY},
				{phrase: 'diluted to 25.00 mL', at: K14.tf + 10, color: NAVY},
				{phrase: 'in the original solution.', at: K14.orig, color: GOOD},
			]} />
		</ShrinkAt>
		<rect x={1100} y={200} width={740} height={700} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
		<A1Graph g={GF1} size={26} />
		<CRead g={GF1} a={0.325} c={0.25} at={K14.read} downAt={K14.down} value="0.250" size={32} />
		<Wr x={100} y={760} text="c(diluted) = 0.250 mol L⁻¹" at={K14.p250} size={42} color={INK} weight={800} />
		<Wr x={100} y={834} text="dilution factor = 25.00 ÷ 10.00 = 2.50" at={K14.factor} size={42} color={INK} weight={800} />
		<Framed x={100} y={950} text="c(original) = 0.250 × 2.50 = 0.625 mol L⁻¹" at={K14.l2 - 24} size={38} color={GIV} />
		<MistakeX x={1110} y={930} text="0.250 mol L^{−1}" at={K14.trap} cross={K14.zero} note="the diluted value: multiply back" size={34} />
		{void K14.diluted}{void K14.stop}
	</Overlay>
);

// ---------- 15/16. Attempt 2 ----------
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {last: 'Last one', pause: 'Pause here'});
const Q2 = (marks: QMark[] = []) => qCheck([
	{text: 'A student measured the absorbance of a set of copper(II) standards in a clean cuvette. The student then measured the unknown in a different cuvette that had a fingerprint on one of its clear sides.', at: 0},
	{text: 'Explain how this affects the calculated concentration of the unknown, and propose an improvement to the method.', at: 0, para: true, weight: 700},
] as QBlock[], marks);
const Question2: React.FC<{marks?: QMark[]; w?: number}> = ({marks, w = 1720}) => (
	<>
		<Card h={660} w={w} />
		<QText q={Q2(marks)} x={140} y={280} w={1150} size={48} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={0} />
		<QTag />
		<Question2 />
		<PicF p={CUV.c1} x={1400} y={220} h={560} />
		<PicF p={CUV.dil} x={1600} y={220} h={560} />
		<Sx x={1400 + cuvW(560) / 2} y={820} text="standards" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
		<Sx x={1600 + cuvW(560) / 2} y={820} text="unknown" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
		<PauseHold h={hold(A2)} at={K15.pause} x={140} y={940} cx={1220} cy={930} />
	</Overlay>
);
const K16 = cues(sc('feedback-2'), {scat: 'scatters some light', less: 'less reaches', high: 'reads high', higher: 'A higher absorbance', toohigh: 'too high', fix: 'Fix it', ridged: 'ridged sides', reading: 'every reading', trap: 'The trap', avg: 'averaging', together: 'high together'});
const GF2: CG = {x: 1250, y: 560, w: 540, h: 270, x0: 0, x1: 0.1, y0: 0, y1: 1.2};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Fingerprint: absorbance and concentration too high" at={0} size={48} />
			<ShrinkAt cx={100} cy={185} k={0.7} at={0}>
				<Question2 w={1340} marks={[
					{phrase: 'a fingerprint on one of its clear sides.', at: 4, color: OUT},
					{phrase: 'propose an improvement to the method.', at: K16.reading, color: GOOD},
				]} />
			</ShrinkAt>
			<MiniBeam x={1100} y={190} w={740} h={230} at={0} tint="#7fb0de" thin={fr => 1 - 0.35 * prog(fr, K16.less, 20)} read={fr => (fr < K16.high ? 'A = 0.845' : 'A = 0.910')} smudge={K16.scat - 10} title="fingerprint on the clear face" />
			<rect x={1100} y={460} width={740} height={470} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<CalGraph g={GF2} t={{line: -1000, band: -1000, pts: [-1000, -1000, -1000, -1000, -1000, 1e9]}} size={24} />
			<CRead g={GF2} a={0.845} c={0.0708} at={K16.higher} downAt={K16.higher + 20} aLabel="" size={26} color={GOOD} />
			<CRead g={GF2} a={0.91} c={0.0762} at={K16.toohigh - 10} downAt={K16.toohigh + 8} aLabel="0.910" value="too high" size={26} color={OUT} />
			<Sx x={1470} y={520} text="higher A → higher concentration" size={30} color={OUT} anchor="middle" weight={800} at={K16.toohigh} />
			<FixRail box={{x: 100, y: 670, w: 960}} rowH={112} rows={[0, K16.scat, K16.fix]} lit={[{row: 1, from: K16.scat, to: K16.fix}, {row: 2, from: K16.fix}]} ex={[{text: 'accuracy', at: 4}, {text: 'fingerprint scatters light → A ↑ → concentration ↑', at: K16.less}, {text: 'hold the ridged sides; wipe the clear sides before every reading', at: K16.ridged}]} size={38} />
			<MistakeX x={1110} y={945} text="average three readings" at={K16.trap} cross={K16.together - 10} note="all have the fingerprint" size={32} />
			{void K16.avg}{void Cuv}{void Ridges}{void CU}{void Fade}
		</Overlay>
	);
};

// ---------- 17. Decision rule and handoff ----------
const K17 = cues(sc('decision-handoff'), {make: 'make your standards', zero: 'zero with a blank', keep: 'keep the unknown', check: 'check accuracy', know: 'already know', next: 'Next'});
const G17: CG = {x: 1420, y: 640, w: 380, h: 260, x0: 0, x1: 0.14, y0: 0, y1: 1.6};
export const SceneHandoff: React.FC = () => {
	const rows: [string, string, number][] = [
		['Standards', 'stock × V ÷ total volume (burettes rinsed)', K17.make],
		['Blank and wavelength', 'blank zeroes; wavelength at the biggest absorbance', K17.zero],
		['Unknown', 'inside the linear range (dilute, then multiply back)', K17.keep],
		['Check', 'a check standard reads close to its known value', K17.know],
	];
	return (
		<Overlay>
			<TaskLine text="To trust a calibration" at={0} size={52} />
			{rows.map(([t, b, a], i) => <RowCard key={t} x={96} y={200 + i * 196} w={1180} h={170} title={t} body={b} at={4 + i * 6} lit={a} color={NAVY} size={34} />)}
			<PicF p={RACK6} x={1330} y={200} h={300} />
			<CalGraph g={G17} t={{line: -1000, band: -1000, ext: -1000, fifth: -1000}} size={20} />
			<Fade at={K17.next}>
				<rect x={1300} y={960} width={540} height={80} rx={40} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={1570} y={1012} text="Next: calibration data practice" size={30} color={NAVY} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{void K17.check}{void picW}
		</Overlay>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	"Make standards by dilution: c = c(stock) × V(stock) ÷ V(total).",
	"Set the wavelength at the biggest absorbance; zero with a blank.",
	"Use only the linear range: dilute, read, multiply back.",
	"Hold cuvettes by the ridged sides; rinse with the next solution.",
	"Accurate: a check standard reads close to its known value.",
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={44} aidTop={600} aids={['Read across, then down, and only inside the standards.', 'Diluted? Multiply back by the dilution factor.']} tag="inside the linear range, under the same conditions" />
);
