// M6 P02 scenes 13 to 18: two worded attempts (the full question, and the graph in attempt 1, on screen through the
// countdown); brief feedback with the question's givens underlined as they are used and one crossed mistake each; the
// decision rule and handoff; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {ANTACID, BEAKER, CUPB, THERMO} from './assets';
import {
	AChip, AMBER_INK, ChainRow, DimG, Fade, GSeg, HEAT, HeatOut, INK, INK_SOFT, KeyNotesBoard, LiquidBeaker, MistakeX, Note, Overlay, P, PauseHold, PicH, PlateAt, QBox, QText, RuleCard,
	ShrinkTo, Sx, TEAL, TGraph, TPts, TaskLine, WLine, beakerW, gx, gy, picW, qCheck, vis,
} from './parts';
import type {GG, Pt, QBlock, QMark} from './parts';
import {RUN, COOL_FROM, cool} from './s1';

// ---------- 13/14. Question 1 ----------
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', fifty: 'Fifty millilitres', mixed: 'are mixed', graph: 'The graph', use: 'Use it', pause: 'Pause here'});
const QA = (t: number[], marks: QMark[] = []) => qCheck([
	{text: '50.0 mL of 1.00 mol/L nitric acid and 50.0 mL of 1.00 mol/L potassium hydroxide solution, both at 20.9 °C, are mixed in a lidded polystyrene cup at time 0.', at: t[0]},
	{text: 'The temperature is recorded every 30 seconds, as shown in the graph.', at: t[1]},
	{text: 'Assume the density of the mixture is 1.00 g/mL and its specific heat capacity is 4.18 J g⁻¹ °C⁻¹.', at: t[1] + 40},
	{text: 'Use the graph to determine the temperature change, then calculate the molar enthalpy of neutralisation.', at: t[2], para: true},
] as QBlock[], marks);
const MA = ['both at 20.9 °C', '50.0 mL', '1.00 g/mL', '4.18 J g⁻¹ °C⁻¹', '1.00 mol/L'];
qCheck(QA([0, 0, 0]).blocks, [...MA.map(phrase => ({phrase, at: 0})), {phrase: '50.0 mL', occ: 2, at: 0}]);
const A1PTS: Pt[] = [[0, 20.9], [0.5, 25.6], [1, 27.1], [1.5, 27.1], [2, 27.0], [2.5, 26.9], [3, 26.8], [3.5, 26.7], [4, 26.6], [4.5, 26.5], [5, 26.4]];
const coolA = (t: number) => 27.4 - 0.2 * t;
const GA: GG = {x: 1170, y: 190, w: 650, h: 700, x0: 0, x1: 5, y0: 25, y1: 27.8};
const EXTRA = Array.from({length: 15}, (_, i) => 25 + i * 0.2).map(v => ({v, t: v.toFixed(1)}));
const GraphA: React.FC<{at: number; ptsAt: number}> = ({at, ptsAt}) => (
	<>
		<TGraph g={GA} at={at} xTicks={[0, 1, 2, 3, 4, 5]} yTicks={[]} yMinor={0.2} xMinor={0.5} size={24} extraY={EXTRA} extraSize={22} />
		<TPts g={GA} pts={A1PTS.slice(1)} time={i => ptsAt + 4 + i * 4} r={8} />
		<Fade at={at + 10}>
			<path d={`M${GA.x - 12},${GA.y + GA.h - 34} L${GA.x + 12},${GA.y + GA.h - 44} M${GA.x - 12},${GA.y + GA.h - 22} L${GA.x + 12},${GA.y + GA.h - 32}`} stroke={INK} strokeWidth={3} />
			<path d={`M${GA.x + 14},${GA.y + GA.h - 60} L${GA.x + 14},${GA.y + GA.h - 12} M${GA.x + 4},${GA.y + GA.h - 24} L${GA.x + 14},${GA.y + GA.h - 12} L${GA.x + 24},${GA.y + GA.h - 24}`} fill="none" stroke={AMBER_INK} strokeWidth={3.5} strokeLinecap="round" />
			<Sx x={GA.x + 34} y={GA.y + GA.h - 24} text="t = 0: 20.9 °C (below this axis)" size={22} color={AMBER_INK} weight={700} at={-1000} />
		</Fade>
	</>
);
const QX = 130, QW = 900;
const Question1: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW + 60} h={500} at={t[0] - 6} />
		<QText q={QA(t, marks)} x={QX} y={262} w={QW} size={32} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="Your turn" size={58} color={INK} hand at={K13.turn} />
		<Question1 t={[K13.fifty, K13.graph, K13.use]} />
		<GraphA at={K13.graph - 10} ptsAt={K13.graph} />
		<PauseHold h={hold(A1)} at={K13.pause} x={130} y={830} cx={880} cy={810} />
		{void K13.mixed}
	</Overlay>
);

const F1 = 'feedback-1';
const K14 = cues(sc(F1), {draw: 'Draw the cooling', t274: 'twenty seven point four', dt: 'six point five', q: 'two thousand seven hundred and seventeen', divide: 'Divide by', n: 'zero point zero five zero zero', dh: 'delta H is', m54: 'minus fifty four', using: 'Using the highest', m52: 'minus fifty two'});
export const SceneFeedback1: React.FC = () => {
	const WX = 130, WS = 32, WY = [530, 596, 662, 728];
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question1 t={[-100, -100, -100]} marks={[
					{phrase: 'both at 20.9 °C', at: K14.dt - 20},
					{phrase: '50.0 mL', at: K14.q - 30}, {phrase: '50.0 mL', occ: 2, at: K14.q - 24},
					{phrase: '1.00 g/mL', at: K14.q - 16}, {phrase: '4.18 J g⁻¹ °C⁻¹', at: K14.q - 8},
					{phrase: '1.00 mol/L', at: K14.n - 10, color: TEAL},
				]} />
			</ShrinkTo>
			<GraphA at={-100} ptsAt={-100} />
			<GSeg g={GA} a={[1.5, coolA(1.5)]} b={[5, coolA(5)]} at={K14.draw + 6} dur={24} />
			<GSeg g={GA} a={[1.5, coolA(1.5)]} b={[0, coolA(0)]} at={K14.draw + 34} dur={30} dash="12 9" />
			<Fade at={K14.t274}><circle cx={gx(GA, 0)} cy={gy(GA, 27.4)} r={11} fill={AMBER_INK} stroke={INK} strokeWidth={3} /></Fade>
			<Note x={gx(GA, 0) + 24} y={gy(GA, 27.4) - 22} text="27.4 °C" size={34} color={AMBER_INK} at={K14.t274 + 4} />
			<WLine x={WX} y={WY[0]} size={WS} dim={K14.q} items={P('ΔT = 27.4 − 20.9', K14.t274 + 30, '= 6.5 °C', K14.dt)} />
			<WLine x={WX} y={WY[1]} size={WS} dim={K14.n} items={P('q = 100.0 × 4.18 × 6.5', K14.dt + 30, '= 2717 J', K14.q)} />
			<WLine x={WX} y={WY[2]} size={WS} dim={K14.m54} items={P('n(H_2O) = 1.00 × 0.0500 = 0.0500 mol', K14.n)} />
			<WLine x={WX} y={WY[3]} size={WS} dim={K14.m52} items={P('ΔH = −2.717 kJ ÷ 0.0500 mol = −54.34', K14.dh, '→ −54 kJ/mol', K14.m54)} />
			<AChip x={WX} y={770} text="ΔH = −54 kJ/mol" size={40} color={TEAL} hand={false} at={K14.m54 + 10} />
			<Note x={WX + 400} y={812} text="line read at 27.3 to 27.5 °C: −54 to −55 kJ/mol" size={24} color={INK_SOFT} at={K14.m54 + 30} hand={false} />
			<MistakeX x={WX} y={880} text="highest reading 27.1 °C: ΔT = 6.2 °C, −52 kJ/mol" at={K14.m52 - 10} cross={K14.m52 + 20} note="extrapolate to the moment of mixing" size={28} />
			{void K14.divide}{void K14.using}
		</Overlay>
	);
};

// ---------- 15/16. Question 2 ----------
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {more: 'One more', another: 'Another student', records: 'records the', gets: 'and gets', identify: 'Identify the', pause: 'Pause here'});
const QB = (t: number[], marks: QMark[] = []) => qCheck([
	{text: 'A student mixes 50.0 mL of 1.00 mol/L hydrochloric acid with 50.0 mL of 1.00 mol/L sodium hydroxide solution in an uncovered glass beaker.', at: t[0]},
	{text: 'She records the highest temperature shown on a thermometer and calculates the enthalpy of neutralisation as −46 kJ/mol.', at: t[1]},
	{text: 'Identify the main source of error in her method, explain its effect on the calculated value, and suggest one improvement.', at: t[2], para: true},
] as QBlock[], marks);
qCheck(QB([0, 0, 0]).blocks, [{phrase: 'uncovered glass beaker', at: 0}, {phrase: '−46 kJ/mol', at: 0}, {phrase: 'highest temperature', at: 0}]);
const QW2 = 1040;
const Question2: React.FC<{t: number[]; marks?: QMark[]}> = ({t, marks}) => (
	<>
		<QBox x={100} y={200} w={QW2 + 60} h={430} at={t[0] - 6} />
		<QText q={QB(t, marks)} x={QX} y={265} w={QW2} size={34} card={false} />
	</>
);
const BX = 1380, BY = 400, BH = 360;
const ThermoIn: React.FC<{o?: number}> = ({o = 1}) => {
	const th = 470, tw = picW(THERMO, th);
	return <PicH p={THERMO} x={BX + beakerW(BH) * 0.52 - tw / 2} y={BY - 170} h={th} o={o} />;
};
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={150} text="One more" size={58} color={INK} hand at={K15.more} />
		<Question2 t={[K15.another, K15.records, K15.identify]} />
		<Fade at={K15.another + 20}>
			<LiquidBeaker x={BX} y={BY} h={BH} />
			<ThermoIn />
		</Fade>
		<PauseHold h={hold(A2)} at={K15.pause} x={130} y={780} cx={880} cy={760} />
		{void K15.gets}
	</Overlay>
);

const F2 = 'feedback-2';
const K16 = cues(sc(F2), {heatloss: 'heat loss', glass: 'Glass lets', soaks: 'soaks up', top: 'open top', small: 'rise is too', less: 'less negative', lidded: 'lidded foam cup', extrap: 'extrapolate the', human: 'human error', nobody: 'nobody can'});
const GT: GG = {x: 1500, y: 800, w: 300, h: 170, x0: 0, x1: 7, y0: 21, y1: 29};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const bw = beakerW(BH);
	const swap = vis(f, K16.lidded, undefined, 20);
	const cupH = 380;
	return (
		<Overlay>
			<ShrinkTo k={0.62} cx={100} cy={180}>
				<Question2 t={[-100, -100, -100]} marks={[{phrase: 'uncovered glass beaker', at: K16.heatloss + 6}, {phrase: '−46 kJ/mol', at: K16.less + 10, color: TEAL}]} />
			</ShrinkTo>
			<g opacity={1 - swap}>
				<LiquidBeaker x={BX} y={BY - 60} h={BH} />
				<ThermoIn o={1} />
			</g>
			<HeatOut pts={[[BX + 30, BY + 120, Math.PI], [BX + bw - 10, BY + 120, 0], [BX + bw * 0.35, BY - 40, -1.8], [BX + bw * 0.7, BY - 40, -1.3]]} at={K16.heatloss} out={K16.lidded} len={70} />
			<Note x={BX - 20} y={BY + BH + 40} text="glass, open top" size={32} color={HEAT} at={K16.glass} out={K16.lidded} />
			<PlateAt p={CUPB} x={BX + 20} y={BY - 110} h={cupH} at={K16.lidded} />
			<ChainRow x={130} y={560} ws={[260, 170, 170, 300]} gap={44} h={90} at={K16.small - 20} size={28} cells={[
				{lines: ['heat loss'], at: K16.small - 10, color: INK},
				{lines: ['ΔT'], at: K16.small, dir: 'down'},
				{lines: ['q'], at: K16.small + 30, dir: 'down'},
				{lines: ['less negative'], at: K16.less, dir: 'down'},
			]} />
			<TGraph g={GT} at={K16.extrap} xTicks={[]} yTicks={[]} xLabel="" yLabel="" />
			<TPts g={GT} pts={RUN} time={() => K16.extrap} teal={{from: COOL_FROM, at: K16.extrap}} r={4} />
			<GSeg g={GT} a={[7, cool(7)]} b={[0, cool(0)]} at={K16.extrap + 10} dash="8 6" width={3} />
			<AChip x={130} y={730} text="heat loss; lidded foam cup + extrapolation" size={36} color={TEAL} hand={false} at={K16.lidded + 10} />
			<MistakeX x={130} y={840} text="human error" at={K16.human - 10} cross={K16.human + 16} note="name the cause" size={34} />
			{void K16.soaks}{void K16.top}{void K16.nobody}{void BEAKER}{void prog}
		</Overlay>
	);
};

// ---------- 17. Decision rule and handoff ----------
const DR = 'decision-rule';
const K17 = cues(sc(DR), {insulate: 'insulate and', measure: 'measure and average', log: 'log past', extrap: 'extrapolate the', trace: 'trace each', next: 'Next'});
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="The method in five steps" at={4} size={58} />
		<Overlay>
			<RuleCard x={96} y={210} w={1728} at={K17.insulate - 10} lh={86} lines={[
				{t: '1  Foam cup, lid, in a beaker.', at: K17.insulate, lit: [K17.insulate, K17.measure], size: 40, hand: false},
				{t: '2  Measure both starting temperatures; average.', at: K17.measure, lit: [K17.measure, K17.log], size: 40, hand: false},
				{t: '3  Log every 30 s past the peak.', at: K17.log, lit: [K17.log, K17.extrap], size: 40, hand: false},
				{t: '4  Extrapolate the cooling line to t = 0.', at: K17.extrap, lit: [K17.extrap, K17.trace], size: 40, hand: false},
				{t: '5  Error → ΔT → q → ΔH.', at: K17.trace, lit: [K17.trace, K17.next], size: 40, hand: false},
			]} />
			<AChip x={96} y={800} text="Next: where neutralisation solves a real problem" size={42} color={TEAL} hand={false} at={K17.next} />
			<PlateAt p={ANTACID} x={1400} y={760} h={200} at={K17.next + 8} />
		</Overlay>
	</>
);

// ---------- 18. Key notes ----------
const NOTES = [
	'Set-up: 50.0 mL each of 1.00 mol/L HCl and NaOH (measuring cylinders); lidded polystyrene cup standing in a beaker (foam insulates; lid cuts heat loss to the air). Measure both starting temperatures; use the average.',
	'Mix quickly, lid on, stir; record every 30 s until well past the peak. Plot temperature against time and extrapolate the straight cooling line back to the moment of mixing (assumes the same cooling rate during the rise).',
	'Example: T(initial) 21.5 °C, extrapolated 28.1 °C, ΔT = 6.6 °C, q = 2758.8 J (kept unrounded), n(H_2O) = 0.0500 mol, ΔH = −55 kJ/mol (highest reading gives −53 kJ/mol). Accepted about −57 kJ/mol.',
	'Errors: source → ΔT → q → ΔH. Heat loss and heat absorbed by the cup and probe make ΔH less negative. Not every error does: a starting temperature recorded too low makes ΔH more negative. Never "human error".',
	'Validity: rise from the reaction only, heat kept in. Reliability: repeats agree (−55, −54, −56 kJ/mol). Accuracy: closeness to −57; improve by reducing heat loss, not by repeating. Risk: 1.00 mol/L NaOH is corrosive (H314): eye protection, rinse splashes; support the cup; stir with a stirrer.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={820} aids={['Lid on. Log on. Line back.']} tag="extrapolate to the moment of mixing" />
);
void TaskLine; void DimG;
