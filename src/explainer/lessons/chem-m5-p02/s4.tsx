import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, Countdown, DrawPath, HandText, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Chip, EqStrip, Overlay} from '../chem-m5-c05/parts';
import {GivensCard, Push} from '../chem-m5-c06/parts';
import {IceTable, iceCell, iceRowY} from '../chem-m5-c06/ice';
import {EIBracket} from '../chem-m5-c06a/types';
import {KeyNotesBoard} from '../chem-m5-c06a/s4';
import {Thermometer} from '../chem-m5-c03/parts';
import {MistakeChip, TaskLine} from '../chem-m5-g03c/board';
import {Arrow, CalGraph, ChainStrip, ColourWheel, Cuvette, DataChip, Fade, PicH, ReadGuide, Ring, Sx, TEAL, Tick, cuvW} from './parts';
import type {GraphGeom} from './parts';
import {BEAM, FE_INK, GREEN, Heading, MINUS, PLUS, RED_INK, SCN_INK, hold, sc} from './common';
import {VINEGAR} from './assets';
import {IRON_EQ} from './s1';
import {STD_POINTS} from './s2';

const E44 = {x: 96, y: 240, s: 44};
const ironCols = (a: number) => [{name: 'Fe^{3+}', at: a, color: FE_INK}, {name: 'SCN^{-}', at: a + 8, color: SCN_INK}, {name: 'FeSCN^{2+}', at: a + 16, color: RED_INK}];

// ---------- 10. Memory aids ----------
const M = 'memory-aid';
const K11 = cues(sc(M), {two: 'Two lines to keep', abs: 'measure the colour it absorbs', see: 'not the colour you see', red: 'a red solution', blue: ['blue light', 1], second: 'Second, the chain', s1: 'standards, graph', s2: 'graph, reading', s3: 'reading, ICE', s4: ['ICE table', 1], s5: 'table, K', feeds: 'Each step feeds', dil: 'the dilution', before: 'before the ICE table'});
export const SceneAid: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 170}}><HandText text="Measure the colour it absorbs," at={K11.abs} size={78} cps={26} color={TEAL} /></div>
		<div style={{position: 'absolute', left: 96, top: 262}}><HandText text="not the colour you see." at={K11.see} size={78} cps={26} color={TEAL} /></div>
		<Overlay>
			<Sx x={96} y={150} text="Two lines to keep" size={40} color={INK_SOFT} hand at={K11.two} />
			<Fade at={K11.red}>
				<Cuvette kind={3} x={1180} y={180} h={220} />
				<rect x={1080} y={300} width={100} height={36} fill={BEAM} opacity={0.75} />
				<rect x={1180 + cuvW(220)} y={309} width={140} height={18} fill={BEAM} opacity={0.75} />
			</Fade>
			<Sx x={1080} y={460} text="a red solution is read with blue light" size={40} color={BEAM} hand at={K11.blue} />
			<ColourWheel cx={1620} cy={300} r={84} at={K11.red} labelsAt={K11.blue} />
			<Sx x={96} y={580} text="The chain" size={40} color={INK_SOFT} hand at={K11.second} />
			<ChainStrip x={96} y={610} w={1728} at={K11.second} lit={[K11.s1, K11.s2 + 4, K11.s3 + 4, K11.s4, K11.s5 + 6]} dilute={K11.dil} />
			<Sx x={96} y={900} text="each step feeds the next" size={40} color={INK} hand at={K11.feeds} />
			<Sx x={96} y={980} text="same instrument, cuvette and light for standards and mixtures; record the temperature" size={32} color={TEAL} hand at={K11.before + 10} />
		</Overlay>
	</>
);

// ---------- 11. Attempt (countdown) ----------
const T = 'attempt';
const K12 = cues(sc(T), {turn: 'Your turn', same: 'Same calibration graph', temp: 'same temperature', newm: 'A new mixture', v450: '4.50', thio: 'litre thiocyanate', water: '2.00 millilitres', abs: 'Its absorbance is', v470: '0.470', find: 'Find K', pause: 'Pause here'});
export const G12: GraphGeom = {ox: 980, oy: 790, w: 800, h: 460};
export const TRY_CARD = (ats: number[], measured?: number) => [
	{text: '4.50 mL of 0.00200 mol/L Fe^{3+}', at: ats[0], size: 34},
	{text: '3.50 mL of 0.00200 mol/L SCN^{-}', at: ats[1], size: 34},
	{text: '2.00 mL of water', at: ats[2], size: 34},
	{text: 'absorbance: 0.470', at: ats[3], size: 34, color: RED_INK},
	{text: 'same calibration graph and temperature', at: ats[4], size: 30, color: INK_SOFT},
	...(measured !== undefined ? [{text: 'read: [FeSCN^{2+}] = 1.00 × 10^{-4}', at: measured, size: 32, color: GREEN}] : []),
];
const TryBoard: React.FC<{ats: number[]; measured?: number; outline?: boolean; task?: number}> = ({ats, measured, outline = true, task = -100}) => (
	<>
		<TaskLine text="Your turn" at={task} />
		<EqStrip items={IRON_EQ} x={E44.x} y={E44.y} size={E44.s} at={ats[4]} />
		<GivensCard x={96} y={280} w={720} h={measured !== undefined ? 396 : 346} at={ats[4]} lh={50} title="the new mixture" lines={TRY_CARD(ats, measured)} />
		{outline ? <IceTable x={96} y={690} s={0.5} cols={ironCols(ats[4])} outlineAt={ats[4]} rows={[{at: ats[4], cells: []}, {at: ats[4], cells: []}, {at: ats[4], cells: []}]} /> : null}
	</>
);
export const SceneAttempt: React.FC = () => {
	const h = hold(T);
	return (
		<>
			<Overlay>
				<TryBoard ats={[K12.v450, K12.thio, K12.water, K12.v470, K12.same]} task={K12.turn} />
				<CalGraph g={G12} at={K12.same} points={STD_POINTS(K12.same + 10).map(p => ({...p, label: undefined}))} lineAt={K12.same + 10} />
				<DataChip x={1400} y={230} at={K12.same} />
				<Sx x={600} y={960} text="Find K." size={72} color={AMBER_INK} hand at={K12.find} />
				<Sx x={980} y={1000} text="Pause here to answer." size={50} color={AMBER_INK} hand at={K12.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1720} y={930} r={50} />
			</Overlay>
		</>
	);
};

// ---------- 12a. Feedback: the method ----------
const F = 'feedback';
const K13 = cues(sc(F), {ans: 'The answer is about 208', dil: 'First, dilute', v10: '10.00 millilitres', total: '10.00 millilitres', iron: 'iron starts at', v900: '9.00 times', thio: 'and thiocyanate at', v700: '7.00 times', read: 'Then read across', across: 'across from 0.470', down: 'and down', v100: '1.00 times ten', meas: '1.00 times ten', erow: 'equilibrium row first', falls: 'each reactant falls', leave: 'leaving 8.00', v600: '6.00 times', divide: 'Divide, and K', k208: 'K is about 208', sameK: 'the same K', diff: 'different mixture', constant: 'stays constant', got28: 'got about 28', bottle: 'bottle concentrations', dfirst: 'so dilute first'});
export const FB = {x: 900, y: 500, s: 0.9};
const FTXT = {fe0: '9.00 × 10^{-4}', scn0: '7.00 × 10^{-4}', e: '1.00 × 10^{-4}', ce: '+1.00 × 10^{-4}', cr: '−1.00 × 10^{-4}', fe: '8.00 × 10^{-4}', scn: '6.00 × 10^{-4}'};
/** The finished feedback board (used in 12a as it builds, and complete in 12b). */
const FeedbackTable: React.FC<{k: typeof K13 | null}> = ({k}) => {
	const z = (v: number | undefined) => (k ? (v as number) : -100);
	const CS = 36;
	return (
		<IceTable x={FB.x} y={FB.y} s={FB.s} cols={ironCols(z(k?.meas) - 40)} outlineAt={z(k?.meas) - 50} rows={[
			{at: z(k?.meas) - 40, cells: [
				{text: FTXT.fe0, at: z(k?.v900) + 30, color: FE_INK, size: CS, from: k ? [1700, 410] : undefined},
				{text: FTXT.scn0, at: z(k?.v700) + 30, color: SCN_INK, size: CS, from: k ? [1700, 470] : undefined},
				{text: '0', at: z(k?.v700) + 40, color: INK_SOFT, size: CS}]},
			{at: z(k?.meas) - 40, lit: k ? [k.falls, k.leave] : undefined, cells: [
				{text: FTXT.cr, at: z(k?.falls) + 16, color: MINUS, size: CS},
				{text: FTXT.cr, at: z(k?.falls) + 24, color: MINUS, size: CS},
				{text: FTXT.ce, at: z(k?.erow) + 40, color: PLUS, size: CS}]},
			{at: z(k?.meas) - 40, lit: k ? [k.erow, k.erow + 50] : undefined, cells: [
				{text: FTXT.fe, at: z(k?.leave) + 10, color: FE_INK, size: CS},
				{text: FTXT.scn, at: z(k?.v600), color: SCN_INK, size: CS},
				{text: FTXT.e, at: z(k?.erow) + 10, color: GREEN, size: CS, from: k ? [400, 638] : undefined, flyDur: 30}]},
		]} />
	);
};
const DilLines: React.FC<{k: typeof K13 | null}> = ({k}) => (
	<>
		<Sx x={900} y={330} text="4.50 + 3.50 + 2.00 = 10.00 mL total" size={38} weight={700} at={k ? k.total + 6 : -100} />
		<Sx x={900} y={410} text="Fe^{3+}: 0.00200 × 4.50 / 10.00 = 9.00 × 10^{-4}" size={36} color={FE_INK} weight={700} at={k ? k.iron + 10 : -100} />
		<Sx x={900} y={470} text="SCN^{-}: 0.00200 × 3.50 / 10.00 = 7.00 × 10^{-4}" size={36} color={SCN_INK} weight={700} at={k ? k.thio + 10 : -100} />
	</>
);
const KFrac: React.FC<{at: number; numAt: number; denAt: number; resAt: number}> = ({at, numAt, denAt, resAt}) => (
	<Fade at={at}>
		<Sx x={110} y={792} text="K =" size={42} weight={700} at={at} />
		<DrawPath d={`M210,${780} L700,${780}`} at={at} dur={12} width={3.5} />
		<Sx x={455} y={762} text="1.00 × 10^{-4}" size={40} weight={700} color={GREEN} anchor="middle" at={numAt} />
		<Sx x={455} y={826} text="(8.00 × 10^{-4})(6.00 × 10^{-4})" size={40} weight={700} anchor="middle" at={denAt} />
		<Sx x={110} y={900} text="= 1.00 × 10^{-4} / 4.80 × 10^{-7}" size={40} weight={700} at={resAt} />
		<Sx x={110} y={970} text="K ≈ 208" size={64} color={TEAL} hand at={resAt + 20} />
	</Fade>
);
export const SceneFeedback: React.FC = () => {
	const f = useCurrentFrame();
	const yTop = iceRowY(FB.y, FB.s, 0), yBot = iceRowY(FB.y, FB.s, 2);
	const ex = iceCell(FB.x, FB.y, FB.s, 2, 2);
	return (
		<>
			<Overlay>
				<TryBoard ats={[-100, -100, -100, -100, -100]} measured={K13.v100 + 20} outline={false} />
				<Ring cx={96 + 28 + 140} cy={cardLine(2) - 12} rx={170} ry={30} at={K13.dil + 10} out={K13.iron} color={AMBER} seed={3} />
				{/* phase 1: dilution lines, which slide away when the graph read starts */}
				<Push outAt={K13.read - 6}>
					<DilLines k={K13} />
				</Push>
				{/* phase 2: the graph read, which slides away before the table */}
				<Push outAt={K13.erow - 24}>
					<Fade at={K13.read - 4}>
						<CalGraph g={G12} at={K13.read - 4} points={STD_POINTS(-100).map(p => ({...p, label: undefined}))} lineAt={-100} />
						<ReadGuide g={G12} a={0.47} at={K13.across} downAt={K13.down + 20} value="1.00" valueAt={K13.v100} />
					</Fade>
				</Push>
				{/* phase 3: the table */}
				<Fade at={K13.erow - 20}><FeedbackTable k={K13} /></Fade>
				<EIBracket x={FB.x + 820} yTop={yTop} yBot={yBot} at={K13.erow + 24} size={36} />
				<Ring cx={ex[0]} cy={ex[1]} rx={90} ry={36} at={K13.erow + 40} out={K13.falls} color={AMBER} seed={9} />
				<KFrac at={K13.divide} numAt={K13.divide + 10} denAt={K13.divide + 50} resAt={K13.k208 - 20} />
				<Fade at={K13.sameK}>
					<rect x={360} y={918} width={420} height={70} rx={35} fill="#e5f2ec" stroke={TEAL} strokeWidth={3} />
					<Sx x={570} y={966} text="= K = 208, worked mixture" size={36} color={TEAL} anchor="middle" hand at={K13.sameK} />
					<Sx x={110} y={1040} text="different mixture, same temperature, same K" size={34} color={TEAL} hand at={K13.diff} />
				</Fade>
			</Overlay>
		</>
	);
};
const cardLine = (i: number) => 280 + 108 + i * 50;

// ---------- 13. Decision rule and handoff ----------
const DR = 'decision-rule';
const K15 = cues(sc(DR), {get: 'to get K from colour', make: 'make standards', excess: 'big excess', plot: 'plot the calibration line', read: "read the mixture's", across: 'across and down', work: 'work out the starting', after: 'after mixing', put: 'put the measured value', erow: 'equilibrium row first', subst: 'then substitute', record: 'record the temperature', next: 'Next', ka: 'Ka and Kb'});
export const SceneDecision: React.FC = () => {
	const lines = [
		{t: '1. Standards: one reactant (Fe^{3+}) in big excess', at: K15.make},
		{t: '2. Plot the calibration line of best fit', at: K15.plot},
		{t: "3. Read the mixture's absorbance: across, then down", at: K15.read},
		{t: '4. Starting concentrations after mixing', at: K15.work},
		{t: '5. Measured value in the E row first, then substitute', at: K15.put},
	];
	return (
		<>
			<Heading text="K from colour: the method" at={4} size={62} />
			<Overlay>
				<ChainStrip x={96} y={200} w={1728} at={K15.get} lit={[K15.make, K15.plot, K15.across, K15.put, K15.subst]} dilute={K15.after} eRow={K15.erow} />
				{lines.map((l, i) => <Sx key={i} x={96} y={520 + i * 62} text={l.t} size={42} color={INK} hand at={l.at} />)}
				<Sx x={96} y={850} text="Always record the temperature." size={46} color={AMBER_INK} hand at={K15.record} />
				<Thermometer x={1560} y={470} h={260} temp={25} at={K15.record} label="T = ? C" />
				<Chip x={96} y={930} w={860} text="Next: Ka and Kb, K for acids and bases" size={40} color={TEAL} at={K15.next + 8} />
				<Fade at={K15.ka}><PicH p={VINEGAR} x={990} y={880} h={170} /></Fade>
			</Overlay>
		</>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'A colourimeter measures absorbance: how much light a coloured solution absorbs. FeSCN^{2+} is red because it absorbs blue light, so it is measured with blue light (about 447 nm). Set zero first with a blank of water.',
	'A = εlc. With the same cuvette (l) and the same light (ε), absorbance is proportional to concentration.',
	'Standards: a known amount of SCN^{-} with a large excess of Fe^{3+}, so almost all the SCN^{-} becomes FeSCN^{2+} and [FeSCN^{2+}] is known. Plot absorbance against [FeSCN^{2+}] and draw the line of best fit (the calibration curve). Use it only inside the range of the standards.',
	'Equilibrium mixture: neither reactant in excess. Read [FeSCN^{2+}] from the line (across, then down). Starting concentrations are after mixing: c = c(bottle) × V(added) / V(total).',
	'ICE table: measured [FeSCN^{2+}] in the E row first, change 1 : 1 : 1, then K = [FeSCN^{2+}] / ([Fe^{3+}][SCN^{-}]). Repeat with several mixtures; quote the mean, the range and the temperature.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={28} aidTop={760} aids={['Measure the colour it absorbs, not the colour you see.', 'Standards, graph, reading, ICE table, K (dilute before the ICE table).']} tag="same instrument, cuvette and light; record the temperature" />
);
void prog; void Tick;
