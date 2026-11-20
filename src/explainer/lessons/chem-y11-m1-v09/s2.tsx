// Y11 Chem M1 V09 scenes 6 to 10: the boron prediction (table and empty beam, 3 s ring), boron worked (stacks drop and
// the pivot slides to the weighted mean of the same counts), the draw stage (a chance-engine run drawing boron atoms
// one at a time: every atom reads 10 or 11 while the running average settles near 10.8), and the reverse question for
// a two-isotope silicon model (givens card with the assumption, balanced beam at 28.22, algebra rows on "=").
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {meanAfter, runTrials} from '../../sims/chance';
import type {TrialPace} from '../../sims/chance';
import {ChanceHistogram, TrialView, useTrials} from '../../sims/chance-views';
import {Countdown} from '../../kit';
import {SI, hold, sc} from './common';
import {
	AMB, AMB_INK, B10, B11, BalanceBeam, Bracket, Chip, DataTable, DrawPath, ERow, Fade, Framed, GREEN_T, GivensCard, Heading, INK, PURE, PenRing, Plate, RED, Readout, Rich, SI28, SI29,
	SVG, Sx, TEAL, TEAL_INK, TaskStrip, TickMark, Tok, WRow, Write, prog, ramp, richW, tw,
} from './parts';
import type {Seg} from './parts';

// ---------- boron board (scenes 6 and 7) ----------
const X6 = (m: number) => 375 + (m - 10) * 450;
const BTable: React.FC<{f1?: number; f2?: number}> = ({f1 = 1e9, f2 = 1e9}) => (
	<DataTable x={110} y={270} w={650} cols={[24, 200, 330, 510]} head={['isotope', 'mass', 'abundance', 'fraction']} size={40} headSize={32} rh={66} rows={[
		[{t: '^{10}B', c: B10.ink}, {t: '10'}, {t: '19.9%', c: AMB_INK}, {t: '0.199', c: AMB_INK, at: f1}],
		[{t: '^{11}B', c: B11.ink}, {t: '11'}, {t: '80.1%', c: AMB_INK}, {t: '0.801', c: AMB_INK, at: f2}],
	]} />
);

// ---------- 6. prediction (3 s ring) ----------
const K6 = cues(sc('prediction'), {think: 'Have a think', boron: 'Boron has'});
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction: boron" at={0} />
			<BTable />
			<BalanceBeam X={X6} from={9.6} to={11.4} y={660} ticks={[10, 11]} stacks={[]} pivot={10.5} readout="?" rw={160} />
			<Chip x={1440} y={290} segs={[{t: 'closer to 10 or 11?'}]} at={-1000} size={52} color={PURE} anchor="middle" />
			<rect x={110} y={506} width={1010} height={112} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			<Rich x={615} y={578} segs={[{t: 'boron-10: ', c: B10.ink}, {t: '19.9%', c: AMB_INK}, {t: '    |    '}, {t: 'boron-11: ', c: B11.ink}, {t: '80.1%', c: AMB_INK}]} size={46} anchor="middle" />
			<Write x={1250} y={470} text="which way does it lean?" at={60} size={42} color={PURE} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1440} y={640} r={64} ringFrom={K6.boron} />
		</SVG>
	);
};

// ---------- 7. boron, worked ----------
const K7 = cues(sc('boron'), {closer: 'Closer to eleven', e199: 'zero point one nine nine', e801: 'zero point eight zero one', addto: 'add to exactly one', check: 'first check', ten: 'Ten times', eleven: 'Eleven times', add: 'Add them', sig: 'ten point eight to three'});
export const SceneBoron: React.FC = () => {
	const f = useCurrentFrame();
	const stacks = [{m: 10, n: ramp(f, 4, 40, 0, 20), iso: B10, cols: 5}, {m: 11, n: ramp(f, 12, 62, 0, 80), iso: B11, cols: 5}];
	const pivot = ramp(f, 62, 112, 10.5, 10.8);
	const addW = tw('fractions add to 1', 42, true, 700);
	return (
		<SVG>
			<Heading text="Boron, worked" at={0} />
			<TaskStrip text="calculate the relative atomic mass of boron" />
			<BTable f1={K7.e199} f2={K7.e801} />
			<BalanceBeam X={X6} from={9.6} to={11.4} y={660} ticks={[10, 11]} stacks={stacks} pivot={pivot} readout={pivot.toFixed(2)} rw={220} />
			<Framed x={1150} y={330} segs={[{t: 'closer to 11', c: GREEN_T}]} at={K7.closer} size={44} />
			<Write x={1150} y={430} text="boron-11 is the crowd" at={K7.closer + 30} out={K7.addto - 12} size={42} color={B11.ink} />
			<Rich x={1150} y={430} segs={[{t: '0.199 + 0.801 = 1.000', c: AMB_INK}]} size={44} at={K7.addto} />
			<Write x={1150} y={486} text="fractions add to 1" at={K7.addto + 10} size={42} color={AMB_INK} />
			<TickMark x={1150 + addW + 40} y={472} at={K7.check} s={1.2} />
			<WRow x={1150} y={590} segs={[{t: '10 × 0.199 = 1.99'}]} at={K7.ten} leave={K7.eleven} />
			<WRow x={1150} y={670} segs={[{t: '11 × 0.801 = 8.811'}]} at={K7.eleven} leave={K7.add} />
			<WRow x={1150} y={760} segs={[{t: 'Ar = 1.99 + 8.811 = 10.801'}]} at={K7.add} big={44} small={44} />
			<Framed x={1150} y={872} segs={[{t: 'Ar(B) = '}, {t: '10.8', c: GREEN_T}]} at={K7.sig} size={52} />
		</SVG>
	);
};

// ---------- 8. the sense check: drawing boron atoms at random ----------
const K8 = cues(sc('sense-check'), {nearer: 'nearer the more common', tests: 'both tests', single: 'no single boron atom', avg: 'average of the sample', ten: 'Ten point eight is'});
let RUN: ReturnType<typeof runTrials> | undefined;
const run8 = () => (RUN ??= runTrials({seed: 3, trials: 500, experiment: {kind: 'weighted', outcomes: [{label: '10', weight: 19.9}, {label: '11', weight: 80.1}]}}));
const PACE: TrialPace = {at: 30, slow: 6, every: 24, until: 600};
const T10 = {ink: B10.ink, stroke: B10.stroke, soft: '#f6ead2'}, T11 = {ink: B11.ink, stroke: B11.stroke, soft: '#ecdccb'};
const GX0 = 800, GX1 = 1250, GY = (v: number) => 740 - ((v - 9.9) / 1.2) * 400;
const X8 = (m: number) => 1440 + (m - 10) * 240;
export const SceneSenseCheck: React.FC = () => {
	const f = useCurrentFrame();
	const run = run8();
	const shown = useTrials(run, PACE);
	const k = Math.min(run.trials, Math.floor(shown));
	const mean = k ? 10 + meanAfter(run, k) : 0;
	const latest = k ? run.outcome[k - 1] : 0;
	let d = '';
	for (let i = 1; i <= k; i++) d += `${i === 1 ? 'M' : 'L'}${(GX0 + Math.sqrt(i / run.trials) * (GX1 - GX0)).toFixed(1)},${GY(10 + run.total[i] / i).toFixed(1)} `;
	const tagA = 'between 10 and 11,', tagB = ' nearer 11';
	const wA = tw(tagA, 42, true, 700), wB = tw(tagB, 42, true, 700);
	return (
		<>
			<SVG>
				<Heading text="Sense check: no atom weighs 10.8" at={0} />
				<Sx x={110} y={214} text="atoms drawn" size={30} color={INK} weight={800} at={-1000} />
				<Readout x={110} y={226} w={250} text={`${k}`} size={52} color={INK} anchor="middle" />
				<Sx x={400} y={214} text="this atom" size={30} color={INK} weight={800} at={-1000} />
				<Sx x={720} y={214} text="average so far" size={30} color={PURE} weight={800} at={-1000} />
				<Readout x={720} y={226} w={300} text={k ? mean.toFixed(2) : '?'} size={52} color={PURE} anchor="middle" />
				<PenRing cx={870} cy={270} rx={176} ry={50} at={K8.avg} color={PURE} seed={5} />
				{/* running average against atoms drawn */}
				<rect x={GX0} y={340} width={GX1 - GX0} height={400} fill="#fffdf8" opacity={0.85} />
				{[10, 10.5, 11].map(v => <Sx key={v} x={GX0 - 14} y={GY(v) + 10} text={`${v}`} size={30} color={INK} anchor="end" weight={700} at={-1000} />)}
				<line x1={GX0} x2={GX1} y1={GY(10.801)} y2={GY(10.801)} stroke={INK} strokeWidth={4} strokeDasharray="12 10" />
				<Sx x={GX1 - 6} y={GY(10.801) - 14} text="Ar = 10.80" size={34} color={INK} anchor="end" hand weight={700} at={-1000} />
				{d ? <path d={d} fill="none" stroke={PURE} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /> : null}
				{k ? <circle cx={GX0 + Math.sqrt(k / run.trials) * (GX1 - GX0)} cy={GY(mean)} r={10} fill={PURE} stroke="#fffdf8" strokeWidth={3} /> : null}
				<path d={`M${GX0},340 V740 H${GX1}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
				<Sx x={(GX0 + GX1) / 2} y={786} text="atoms drawn" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
				<Write x={720} y={842} text={tagA + tagB} at={K8.nearer} size={42} color={PURE} />
				<TickMark x={720 + wA + wB + 40} y={828} at={K8.tests} s={1.1} />
				<TickMark x={720 + wA + wB + 84} y={828} at={K8.tests + 8} s={1.1} />
				{/* real atoms against the average */}
				<Tok x={1400} y={318} r={56} iso={B10} />
				<Sx x={1400} y={334} text="10" size={44} color={B10.ink} anchor="middle" weight={800} at={-1000} />
				<Tok x={1560} y={318} r={56} iso={B11} />
				<Sx x={1560} y={334} text="11" size={44} color="#ffffff" anchor="middle" weight={800} at={-1000} />
				<Sx x={1400} y={408} text="boron-10" size={30} color={B10.ink} anchor="middle" weight={800} at={-1000} />
				<Sx x={1560} y={408} text="boron-11" size={30} color={B11.ink} anchor="middle" weight={800} at={-1000} />
				<Fade at={K8.single}>
					<circle cx={1730} cy={318} r={56} fill="#efe9de" stroke={INK} strokeWidth={5} />
					<Sx x={1730} y={332} text="10.8" size={40} color={INK} anchor="middle" weight={800} at={-1000} />
				</Fade>
				{f >= K8.single + 16 ? <>
					<DrawPath d="M1680,268 L1780,368" at={K8.single + 16} dur={8} color={RED} width={7} />
					<DrawPath d="M1780,268 L1680,368" at={K8.single + 22} dur={8} color={RED} width={7} />
				</> : null}
				<Write x={1820} y={452} text="no such atom" at={K8.single + 26} size={42} color={RED} anchor="end" />
				<BalanceBeam X={X8} from={9.65} to={11.35} y={650} ticks={[10, 11]} stacks={[{m: 10, n: 20, iso: B10, cols: 6}, {m: 11, n: 80, iso: B11, cols: 6}]} pivot={10.8} r={5} gap={11} readout="10.80" rw={200} />
				<Chip x={960} y={866} segs={[{t: 'Ar is a sample average, not a mass number'}]} at={K8.ten} size={44} color={PURE} anchor="middle" />
			</SVG>
			<TrialView run={run} shown={shown} x={400} y={226} tone={latest === 0 ? T10 : T11} />
			<ChanceHistogram run={run} shown={shown} x={110} y={320} w={560} h={470} tone={T11} event={{inEvent: [true, false], tone: T10}} xLabel="mass number of each atom drawn" />
		</>
	);
};

// ---------- silicon board (scenes 9 and 10) ----------
const X9 = (m: number) => 1200 + (m - 28) * 500;
const SI_OUT = [{m: 28, n: 78, cols: 6, color: SI28.stroke}, {m: 29, n: 22, cols: 6, color: SI29.stroke}];
const SiPlate: React.FC<{bigOut: number}> = ({bigOut}) => (
	<>
		<Plate p={SI} x={1586} y={262} h={180} />
		<Sx x={1570} y={420} text="silicon" size={34} color={INK} anchor="end" weight={800} at={-1000} />
		<Plate p={SI} x={110} y={610} h={300} out={bigOut} />
	</>
);

// ---------- 9. the reverse question: silicon ----------
const K9 = cues(sc('silicon-setup'), {assume: 'we assume', real: 'Real silicon', letx: 'Let x be', add: 'fractions add to one', minus: 'one minus x'});
export const SceneSiliconSetup: React.FC = () => {
	const asW = tw('assume only these two', 38, false, 700);
	return (
		<SVG>
			<Heading text="The reverse question: silicon" at={0} />
			<TaskStrip text="find the percentage abundance of each isotope" />
			<GivensCard x={96} y={280} w={904} size={38} lh={56} lines={[[{t: 'Ar(Si) = 28.22'}], [{t: 'isotopes ^{28}Si and ^{29}Si'}], [{t: 'assume only these two'}]]} />
			<DrawPath d={`M118,498 L${118 + asW},498`} at={K9.assume} dur={14} color={AMB} width={5} />
			<Write x={590} y={484} text="an assumption: say it" at={K9.assume + 10} size={42} color={AMB_INK} />
			<Rich x={110} y={570} segs={[{t: '(real silicon also has ^{30}Si)'}]} size={30} weight={700} at={K9.real} />
			<WRow x={110} y={670} segs={[{t: 'x', c: TEAL_INK}, {t: ' = fraction of ^{28}Si'}]} at={K9.letx} leave={K9.add} />
			<WRow x={110} y={760} segs={[{t: 'fractions: '}, {t: 'x', c: TEAL_INK}, {t: ' + '}, {t: '(1 − x)', c: TEAL_INK}, {t: ' = 1'}]} at={K9.add} leave={K9.minus} />
			<WRow x={110} y={860} segs={[{t: '^{29}Si: '}, {t: '1 − x', c: TEAL_INK}]} at={K9.minus} />
			<SiPlate bigOut={K9.letx - 14} />
			<BalanceBeam X={X9} from={27.85} to={29.15} y={720} ticks={[28, 29]} stacks={[]} outlines={SI_OUT} pivot={28.22} readout="28.22" />
			<Write x={X9(28)} y={620} text="x" at={K9.letx} size={96} color={TEAL_INK} anchor="middle" />
			<Rich x={X9(29)} y={698} segs={[{t: '1 − x', c: TEAL_INK}]} size={38} anchor="middle" at={K9.minus} />
			<Write x={X9(29)} y={620} text="the rest" at={K9.minus + 6} size={42} color={TEAL_INK} anchor="middle" />
			<Bracket a={[X9(28), 458]} b={[X9(29), 458]} at={K9.minus + 14} color={TEAL} depth={-14} />
		</SVG>
	);
};

// ---------- 10. solve and check ----------
const K10 = cues(sc('silicon-solve'), {t28: 'Twenty-eight x', expand: 'Expand the bracket', combine: 'combine to minus', so29: 'so twenty-nine minus', makes: 'That makes x', pct: ['percent', 1], pct22: ['percent', 2], check: 'Check it', gives: 'gives back'});
const EX = 590;
const xs = (pre: string) => [{t: pre}, {t: 'x', c: TEAL_INK}] as Seg[];
export const SceneSiliconSolve: React.FC = () => {
	const f = useCurrentFrame();
	const L1: Seg[] = [...xs('28'), {t: ' + 29(1 − '}, {t: 'x', c: TEAL_INK}, {t: ')'}];
	const L2: Seg[] = [...xs('28'), {t: ' + 29 − 29'}, {t: 'x', c: TEAL_INK}];
	const R: Seg[] = [{t: '28.22'}];
	const l2W = richW(L2, 52), l2x0 = EX - 52 * 0.45 - l2W;
	const tagX = Math.min(EX + 52 * 0.45 + richW(R, 52) + 34, 1060 - tw('28x − 29x = −x', 42, true, 700));
	const R4: Seg[] = [{t: '29 − 28.22 = '}];
	const r4x = EX + 52 * 0.45 + richW(R4, 52);
	const grow = ramp(f, K10.pct, K10.pct22 + 20, 0, 1);
	const stacks = [{m: 28, n: 78 * grow, iso: SI28, cols: 6}, {m: 29, n: 22 * grow, iso: SI29, cols: 6}];
	const ck2 = '= 21.84 + 6.38 = 28.22';
	return (
		<SVG>
			<Heading text="The reverse question: silicon" at={-1000} />
			<TaskStrip text="find the percentage abundance of each isotope" />
			<rect x={96} y={270} width={904} height={74} rx={14} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
			<Rich x={120} y={320} segs={[{t: 'Ar(Si) = 28.22   |   only ^{28}Si and ^{29}Si   |   ', c: PURE}, {t: 'x', c: TEAL_INK}, {t: ' = ^{28}Si fraction', c: PURE}]} size={34} weight={700} />
			<ERow ex={EX} y={420} left={L1} right={R} at={K10.t28} leave={K10.expand} />
			<ERow ex={EX} y={500} left={L2} right={R} at={K10.expand} leave={K10.so29} />
			<Bracket a={[l2x0, 514]} b={[EX - 52 * 0.45, 514]} at={K10.combine} out={K10.so29} color={TEAL} depth={14} />
			<Write x={tagX} y={500} text="28x − 29x = −x" at={K10.combine + 8} size={42} color={TEAL_INK} />
			<ERow ex={EX} y={580} left={[{t: '29 − '}, {t: 'x', c: TEAL_INK}]} right={R} at={K10.so29} leave={K10.makes} />
			<ERow ex={EX} y={680} left={[{t: 'x', c: TEAL_INK}]} right={R4} at={K10.makes} />
			<Framed x={r4x} y={680} segs={[{t: '0.78', c: GREEN_T}]} at={K10.makes + 14} size={52} tick={false} />
			<Framed x={110} y={790} segs={[{t: '^{28}Si 78%,   ^{29}Si 22%', c: GREEN_T}]} at={K10.pct22} size={52} />
			<Rich x={110} y={872} segs={[{t: 'check: 28 × 0.78 + 29 × 0.22'}]} size={44} at={K10.check} />
			<Rich x={110} y={930} segs={[{t: ck2}]} size={44} at={K10.check + 22} />
			<TickMark x={110 + tw(ck2, 44) + 40} y={914} at={K10.gives + 20} s={1.3} />
			<Chip x={1066} y={282} segs={[{t: '^{28}Si 22%,  ^{29}Si 78%'}]} at={K10.pct22 + 40} size={40} color={RED} strike={K10.pct22 + 58} />
			<Write x={1070} y={404} text="28.22 is near 28:" at={K10.pct22 + 66} size={42} color={RED} />
			<Write x={1070} y={452} text="28 is the crowd" at={K10.pct22 + 76} size={42} color={RED} />
			<SiPlate bigOut={K10.pct22 - 16} />
			<BalanceBeam X={X9} from={27.85} to={29.15} y={720} ticks={[28, 29]} stacks={stacks} outlines={SI_OUT} pivot={28.22} readout="28.22" />
			{void prog}{void INK}
		</SVG>
	);
};
