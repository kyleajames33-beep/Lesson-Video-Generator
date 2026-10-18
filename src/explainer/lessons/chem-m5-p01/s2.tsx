import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {EqStrip} from '../chem-m5-c05/parts';
import {Bottle} from '../chem-m5-p02/parts';
import {IRON_EQ} from '../chem-m5-p02/s1';
import {Arrow, Card, Chip, DropCount, Drops, Fade, Overlay, PicH, Push, RefTag, ShiftArrow, SwatchBar, Sx, TEAL, Table, Tick, TubeRow, ironW, picW, rowC, rowX} from './parts';
import type {RowG, TRow, TubeSpec} from './parts';
import {GREEN, HAZ, Heading, SW_DEEP, SW_DIL, SW_FADED, SW_STOCK, sc} from './common';
import {BEAKER, BOTTLE_FE, BOTTLE_SCN, DROPPER, WASH} from './assets';

/** The working row for scenes 6 to 8 (and the attempts' tube size). */
export const ROW: RowG = {x0: 100, dx: 150, y: 380, h: 360};
const liq = (g: RowG) => g.y + g.h * 0.255;

/** Expected results table (scenes 7, 8): tube, what was added, colour against tube 1, shift, reason. */
export const RES_X = 990;
export const RESULT_ROWS = (ats: number[], lit?: ([number, number] | undefined)[]): TRow[] => [
	{at: ats[0], cells: ['2', 'Fe(NO_3)_3 crystals', 'deeper red', 'right', 'reactant added'], colors: [INK, INK, '#a31f2a', '#1f6fb2', INK_SOFT], lit: lit?.[0]},
	{at: ats[1], cells: ['3', 'KSCN crystals', 'deeper red', 'right', 'reactant added'], colors: [INK, INK, '#a31f2a', '#1f6fb2', INK_SOFT], lit: lit?.[1]},
	{at: ats[2], cells: ['4', '0.1 mol/L NaOH, drops', ['paler, faint', 'rust-brown solid'], 'left', 'Fe^{3+} removed'], colors: [INK, INK, AMBER_INK, AMBER_INK, INK_SOFT], lit: lit?.[2]},
	...(ats[3] !== undefined ? [{at: ats[3], cells: ['5', 'same drops of water', 'very slightly paler', ['slightly', 'left'], 'dilution'], colors: [TEAL, TEAL, TEAL, TEAL, TEAL], lit: lit?.[3]} as TRow] : []),
];
export const ResultsTable: React.FC<{y: number; ats: number[]; at: number; lit?: ([number, number] | undefined)[]}> = ({y, ats, at, lit}) => (
	<Table x={RES_X} y={y} cols={[50, 260, 215, 112, 189]} head={['', 'added', 'colour vs tube 1', 'shift', 'reason']} rows={RESULT_ROWS(ats, lit)} at={at} rowH={62} size={24} headSize={28} />
);
const EQ = {x: RES_X, y: 250, s: 42};

// ---------- 5. The disturbance set-up ----------
const S = 'setup-reference';
const K5 = cues(sc(S), {now: 'Now the disturbance', mix: 'Mix equal volumes', ironN: 'iron three nitrate', thio: 'potassium thiocyanate', stock: 'pale red stock', pale: 'Pale is deliberate', either: 'either direction', pour: 'Pour equal amounts', six: 'six identical tubes', one: 'Tube one', ref: 'is the reference', never: 'never touch it', every: 'Every other tube', change: 'one change', judge: 'you judge', side: 'side by side', tile: 'white tile', memory: 'colour from memory'});
const ROW5: RowG = {x0: 300, dx: 200, y: 330, h: 470};
const BK = {x: 560, y: 330, h: 280};
export const SceneSetup: React.FC = () => {
	const f = useCurrentFrame();
	const bw = picW(BEAKER, BK.h);
	const fill = prog(f, K5.mix + 20, 60);
	const fx0 = BK.x + bw * 0.12, fx1 = BK.x + bw * 0.84, fb = BK.y + BK.h * 0.9, ft = fb - BK.h * 0.42 * fill;
	const iw = ironW(ROW5.h);
	const tubes: TubeSpec[] = Array.from({length: 6}, () => ({}));
	const fw = picW(BOTTLE_FE, 300);
	return (
		<>
			<Heading text="One reference, one change per tube" at={4} size={62} />
			<Overlay>
				{/* phase A: two bottles into one pale stock */}
				<Push outAt={K5.pour}>
					<Fade at={K5.ironN - 10}><Bottle p={BOTTLE_FE} x={110} y={300} h={300} label="Fe^{3+}" /></Fade>
					<Fade at={K5.thio - 10}><Bottle p={BOTTLE_SCN} x={300} y={300} h={300} label="SCN^{-}" /></Fade>
					<Sx x={110 + fw / 2} y={650} text="0.002 mol/L" size={26} anchor="middle" weight={600} at={K5.ironN} />
					<Sx x={110 + fw / 2} y={684} text="Fe(NO_3)_3" size={26} anchor="middle" weight={700} at={K5.ironN} />
					<Sx x={300 + fw / 2} y={650} text="0.002 mol/L" size={26} anchor="middle" weight={600} at={K5.thio} />
					<Sx x={300 + fw / 2} y={684} text="KSCN" size={26} anchor="middle" weight={700} at={K5.thio} />
					<DrawPath d={`M${110 + fw / 2},${292} Q${420},${180} ${BK.x + bw * 0.35},${BK.y + 40}`} at={K5.mix} dur={22} color="#e3bf45" width={8} />
					<DrawPath d={`M${300 + fw / 2},${292} Q${500},${220} ${BK.x + bw * 0.55},${BK.y + 40}`} at={K5.mix + 8} dur={22} color="#b8bec6" width={8} />
					<Sx x={330} y={200} text="equal volumes" size={34} color={INK_SOFT} hand at={K5.mix + 10} />
					<Fade at={K5.mix - 6}>
						<PicH p={BEAKER} x={BK.x} y={BK.y} h={BK.h} />
						{fill > 0.01 ? <rect x={fx0} y={ft} width={fx1 - fx0} height={fb - ft} rx={14} fill="#eba68c" opacity={0.75} style={{mixBlendMode: 'multiply'}} /> : null}
					</Fade>
					<Sx x={BK.x + bw / 2} y={BK.y + BK.h + 50} text="pale red stock" size={36} color="#a31f2a" anchor="middle" hand at={K5.stock} />
					<SwatchBar x={1000} y={360} at={K5.either} title="a change must show either way" items={[{c: '#f9ece4', label: 'paler'}, {c: SW_STOCK, label: 'stock'}, {c: '#d9725e', label: 'deeper'}]} />
					<Arrow x1={1160} y1={520} x2={1060} y2={520} at={K5.either + 10} color={AMBER_INK} width={5} />
					<Arrow x1={1250} y1={520} x2={1350} y2={520} at={K5.either + 10} color="#1f6fb2" width={5} />
					<Sx x={1000} y={640} text="pale is deliberate" size={38} color={TEAL} hand at={K5.pale} />
				</Push>
				{/* phase B: six identical tubes on a white tile */}
				<TubeRow g={ROW5} at={K5.pour + 8} slide={K5.pour + 8} tubes={tubes} />
				<RefTag x={ROW5.x0 - 50} y={190} at={K5.ref} />
				<Sx x={rowX(ROW5, 0) + iw / 2} y={ROW5.y + ROW5.h + 100} text="never touched" size={28} color={TEAL} anchor="middle" hand at={K5.never} />
				{[1, 2, 3, 4, 5].map(i => <Sx key={i} x={rowX(ROW5, i) + iw / 2} y={ROW5.y + ROW5.h + 100} text="change: ___" size={28} color={INK_SOFT} anchor="middle" hand at={K5.change + (i - 1) * 6} />)}
				{[1, 2, 3, 4, 5].map(i => {
					const a = rowC(ROW5, 0), b = rowC(ROW5, i);
					return <DrawPath key={i} d={`M${a[0]},${a[1] - 8} Q${(a[0] + b[0]) / 2},${a[1] - 34 - i * 6} ${b[0]},${b[1] - 8}`} at={K5.side + (i - 1) * 8} dur={14} color={AMBER_INK} width={4} />;
				})}
				<Sx x={1480} y={420} text="side by side," size={36} color={AMBER_INK} hand at={K5.side + 6} />
				<Sx x={1480} y={466} text="on the white tile" size={36} color={AMBER_INK} hand at={K5.tile} />
				<Chip x={1480} y={560} w={340} h={58} text="compare from memory" size={30} color={INK_SOFT} at={K5.memory} cross={K5.memory + 14} />
				<Sx x={1480} y={670} text="unreliable" size={32} color={HAZ} hand at={K5.memory + 20} />
				{void K5.now}{void K5.one}{void K5.every}{void K5.judge}
			</Overlay>
		</>
	);
};
// ---------- 6. The variables ----------
const V = 'variables';
const K6 = cues(sc(V), {vars: 'the variables', ind: 'independent variable', change: 'what you change', which: 'which substance', temp: 'or the temperature', dep: 'dependent variable', observe: 'what you observe', colour: 'the colour compared', controlled: 'controlled variables', keep: 'keep the same', volume: 'volume of stock', size: 'the tube size', bg: 'background and lighting', wait: 'how long you wait'});
export const SceneVariables: React.FC = () => {
	const iw = ironW(ROW.h);
	const right = rowX(ROW, 5) + iw;
	const ly = liq(ROW);
	const CX = 990;
	return (
		<>
			<Heading text="The variables" at={4} size={62} />
			<Overlay>
				<TubeRow g={ROW} at={0} tubes={Array.from({length: 6}, () => ({}))} tilePulse={K6.bg} />
				<Card x={CX} y={200} w={830} h={800} at={K6.vars} />
				<Sx x={CX + 30} y={270} text="Independent (what you change)" size={36} color="#1f6fb2" hand at={K6.ind} />
				<Sx x={CX + 30} y={318} text="substance added, or temperature" size={32} weight={600} at={K6.which} />
				<Sx x={CX + 30} y={420} text="Dependent (what you observe)" size={36} color="#a31f2a" hand at={K6.dep} />
				<Sx x={CX + 30} y={468} text="colour compared with tube 1" size={32} weight={600} at={K6.colour} />
				<Sx x={CX + 30} y={570} text="Controlled (kept the same)" size={36} color={TEAL} hand at={K6.controlled} />
				<Sx x={CX + 30} y={624} text="• volume of stock" size={32} weight={600} at={K6.volume} />
				<Sx x={CX + 30} y={676} text="• tube size" size={32} weight={600} at={K6.size} />
				<Sx x={CX + 30} y={728} text="• white tile and lighting" size={32} weight={600} at={K6.bg} />
				<Sx x={CX + 30} y={780} text="• time before judging" size={32} weight={600} at={K6.wait} />
				{/* pen links from each controlled item to the matching thing */}
				<DrawPath d={`M${ROW.x0 + 10},${ly} L${right - 10},${ly}`} at={K6.volume + 6} dur={20} color={TEAL} width={4} dash="12 9" />
				<Arrow x1={CX - 10} y1={612} x2={right + 16} y2={ly} at={K6.volume + 4} color={TEAL} width={4} />
				<DrawPath d={`M${ROW.x0},${ROW.y + ROW.h + 70} L${ROW.x0},${ROW.y + ROW.h + 86} L${right},${ROW.y + ROW.h + 86} L${right},${ROW.y + ROW.h + 70}`} at={K6.size + 4} dur={18} color={TEAL} width={4} />
				<Sx x={(ROW.x0 + right) / 2} y={ROW.y + ROW.h + 126} text="identical tubes" size={30} color={TEAL} anchor="middle" hand at={K6.size + 10} />
				<Sx x={(ROW.x0 + right) / 2} y={ROW.y - 50} text="same tile, same light" size={30} color={TEAL} anchor="middle" hand at={K6.bg + 8} />
				<Clock2 cx={300} cy={940} at={K6.wait + 4} />
				<Sx x={360} y={952} text="same time before judging" size={30} color={TEAL} hand at={K6.wait + 10} />
				{void K6.change}{void K6.temp}{void K6.observe}{void K6.keep}
			</Overlay>
		</>
	);
};
const Clock2: React.FC<{cx: number; cy: number; at: number}> = ({cx, cy, at}) => {
	const f = useCurrentFrame();
	const a = -Math.PI / 2 + 2 * Math.PI * prog(f, at, 40);
	return (
		<Fade at={at}>
			<circle cx={cx} cy={cy} r={38} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<path d={`M${cx},${cy} L${cx},${cy - 20}`} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<path d={`M${cx},${cy} L${cx + Math.cos(a) * 28},${cy + Math.sin(a) * 28}`} stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />
		</Fade>
	);
};

// ---------- 7. Expected results ----------
const E = 'expected-results';
const K7 = cues(sc(E), {here: "Here's what to expect", videos: 'disturbance videos', crystals: 'a few crystals', two: 'tube two', three: 'tube three', adding: 'Adding a reactant', right: 'equilibrium right', deep: 'red deepens', naoh: 'Add sodium hydroxide', four: 'tube four', removes: 'It removes', rust: 'faint rust-brown solid', left: 'shifts left', fades: 'red fades'});
/** Dropper held over a tube mouth (tip just above it). */
export const TubeDropper: React.FC<{g: RowG; i: number; at: number; out?: number; h?: number}> = ({g, i, at, out, h = 130}) => {
	const [cx, cy] = rowC(g, i);
	const w = picW(DROPPER, h);
	return <Fade at={at} out={out}><PicH p={DROPPER} x={cx - w / 2} y={cy - 22 - h} h={h} /></Fade>;
};
export const SceneExpected: React.FC = () => {
	const f = useCurrentFrame();
	const d2 = 0.8 * prog(f, K7.deep, 40), d4 = prog(f, K7.rust, 36);
	const tubes: TubeSpec[] = [{}, {s: {deep: d2}}, {s: {deep: d2}}, {s: {faded: d4}}, {}, {}];
	const [c2x, c2y] = rowC(ROW, 1), [c3x] = rowC(ROW, 2), [c4x] = rowC(ROW, 3);
	const ly = liq(ROW);
	return (
		<>
			<Heading text="Expected results, and why" at={4} size={62} />
			<Overlay>
				<TubeRow g={ROW} at={0} tubes={tubes} />
				<EqStrip items={IRON_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={K7.here} />
				<ShiftArrow x={EQ.x + 380} y={300} dir="right" at={K7.right} out={K7.naoh} />
				<ShiftArrow x={EQ.x + 380} y={300} dir="left" at={K7.left} />
				<ResultsTable y={390} at={K7.here + 10} ats={[K7.deep + 10, K7.deep + 20, K7.fades + 6]} />
				<Sx x={RES_X} y={680} text="tube 2: the added iron also adds a little yellow-brown tint" size={24} color={INK_SOFT} weight={600} at={K7.deep + 30} />
				{/* crystals into tubes 2 and 3 */}
				<Drops x={c2x} y0={c2y - 80} y1={ly} at={K7.two} n={2} every={8} kind="crystal" color="#cdb6d6" r={8} />
				<Drops x={c3x} y0={c2y - 80} y1={ly} at={K7.three} n={2} every={8} kind="crystal" color="#f4f2ee" r={8} />
				<Sx x={c2x} y={ROW.y + ROW.h + 90} text="Fe(NO_3)_3" size={24} anchor="middle" weight={700} at={K7.two} />
				<Sx x={c3x} y={ROW.y + ROW.h + 90} text="KSCN" size={24} anchor="middle" weight={700} at={K7.three} />
				<Sx x={(c2x + c3x) / 2} y={ROW.y + ROW.h + 122} text="crystals" size={24} anchor="middle" weight={600} at={K7.three} />
				<Sx x={(c2x + c3x) / 2} y={ROW.y - 24} text="deeper red" size={36} color="#a31f2a" anchor="middle" hand at={K7.deep + 6} />
				{/* NaOH drop by drop into tube 4 */}
				<TubeDropper g={ROW} i={3} at={K7.naoh} out={K7.rust + 30} />
				<Drops x={c4x} y0={c2y - 20} y1={ly} at={K7.four} n={5} every={12} />
				<Sx x={c4x} y={ROW.y + ROW.h + 90} text="NaOH" size={24} anchor="middle" weight={700} at={K7.four} />
				<Sx x={c4x} y={ROW.y + ROW.h + 122} text="0.1 mol/L" size={24} anchor="middle" weight={600} at={K7.four} />
				<Arrow x1={720} y1={925} x2={c4x + 40} y2={ROW.y + ROW.h * 0.84} at={K7.rust + 10} color={AMBER_INK} width={4} />
				<Sx x={560} y={970} text="Fe^{3+} removed as Fe(OH)_3(s)" size={38} color={AMBER_INK} hand at={K7.rust + 14} />
				{/* why, in a clause each (taught in the shift video) */}
				<Fade at={K7.adding}><rect x={RES_X} y={740} width={826} height={200} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} /></Fade>
				<Sx x={RES_X + 26} y={790} text="why (from the shift video)" size={30} color={INK_SOFT} hand at={K7.adding} />
				<Sx x={RES_X + 26} y={846} text="add a reactant: the equilibrium shifts right" size={32} color="#1f6fb2" hand at={K7.adding + 6} />
				<Sx x={RES_X + 26} y={902} text="remove a reactant: it shifts left" size={32} color={AMBER_INK} hand at={K7.removes} />
				<Sx x={c4x + 70} y={ROW.y - 40} text="red fades" size={34} color={AMBER_INK} hand at={K7.fades} />
				{void K7.videos}{void K7.crystals}{void K7.adding}{void K7.removes}{void SW_DEEP}
			</Overlay>
		</>
	);
};

// ---------- 8. The dilution control ----------
const D = 'dilution-control';
const K8 = cues(sc(D), {wait: 'But wait', also: 'also added water', dilute: 'more dilute', five: 'tube five', control: 'the dilution control', same: 'same number of drops', plain: 'plain water', tiny: 'tiny bit paler', clearly: 'clearly paler', real: 'real shift', notjust: 'not just dilution', solids: 'Adding solids', hardly: 'volume hardly changed'});
export const SceneDilution: React.FC = () => {
	const f = useCurrentFrame();
	const dil = prog(f, K8.tiny, 30);
	const tubes: TubeSpec[] = [{}, {s: {deep: 0.8}, pulse: K8.solids}, {s: {deep: 0.8}, pulse: K8.solids + 6}, {s: {faded: 1}}, {s: {dil}}, {}];
	const [c4x, cy] = rowC(ROW, 3), [c5x] = rowC(ROW, 4);
	const ly = liq(ROW);
	const ny = ROW.y + ROW.h + 92;
	return (
		<>
			<Heading text="Is the fading a shift, or just dilution?" at={4} size={58} />
			<Overlay>
				<TubeRow g={ROW} at={0} tubes={tubes} />
				<EqStrip items={IRON_EQ} x={EQ.x} y={EQ.y} size={EQ.s} at={0} />
				<ResultsTable y={390} at={0} ats={[-100, -100, -100, K8.notjust]} lit={[undefined, undefined, [K8.also, K8.control], [K8.notjust, K8.solids]]} />
				<Sx x={c4x - 20} y={ROW.y - 60} text="more volume" size={30} color={AMBER_INK} anchor="end" hand at={K8.also + 8} />
				<Arrow x1={c4x - 30} y1={ROW.y - 50} x2={c4x} y2={ly - 6} at={K8.also + 8} color={AMBER_INK} width={4} />
				<Chip x={96} y={930} w={440} h={60} text="paler, so shift left?" size={34} color={AMBER_INK} at={K8.dilute} />
				{/* tube 5: the same number of drops of plain water */}
				<Fade at={K8.five}><PicH p={WASH} x={140} y={190} h={160} /></Fade>
				<Sx x={150 + picW(WASH, 160)} y={290} text="distilled water" size={28} color={INK_SOFT} hand at={K8.five + 4} />
				<TubeDropper g={ROW} i={4} at={K8.control} out={K8.tiny + 40} />
				<Drops x={c5x} y0={cy - 20} y1={ly} at={K8.plain - 10} n={5} every={10} />
				<DropCount x={c4x} y={ny} at={K8.same} />
				<DropCount x={c5x} y={ny} at={K8.same + 8} />
				<Sx x={(c4x + c5x) / 2} y={ny - 2} text="=" size={40} color={TEAL} anchor="middle" weight={800} at={K8.same + 14} />
				<Sx x={c5x} y={ny + 50} text="dilution control" size={28} color={TEAL} anchor="middle" hand at={K8.control} />
				<Sx x={c5x} y={ny + 86} text="tiny bit paler" size={28} color={TEAL} anchor="middle" hand at={K8.tiny + 10} />
				{/* the comparison bar: the small step is dilution, the big step is the shift */}
				<SwatchBar x={1010} y={790} at={K8.clearly} sw={110} gap={90} items={[{c: SW_STOCK, label: 'tube 1'}, {c: SW_DIL, label: 'tube 5'}, {c: SW_FADED, label: 'tube 4'}]}
					steps={[{from: 0, text: 'dilution', at: K8.clearly + 16, color: TEAL}, {from: 1, text: 'shift', at: K8.real, color: AMBER_INK, big: true}]} />
				<Tick x={570} y={952} at={K8.real + 6} s={40} />
				<Sx x={610} y={972} text="shift confirmed by the control" size={36} color={TEAL} hand at={K8.real + 10} />
				<Sx x={96} y={ny + 50} text="solid added: volume hardly changes" size={28} color={INK_SOFT} hand at={K8.solids + 10} />
				{void K8.wait}{void K8.notjust}{void K8.hardly}{void GREEN}{void AMBER}
			</Overlay>
		</>
	);
};
