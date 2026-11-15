// Scenes 1 to 4: s02's last frame (the die's equal bars and a balance triangle) becomes a beam that levels at 3.5;
// then a cat's vet visits on a tilted beam; the long-run average (2,000 simulated cats); where Σ x P(x) comes from
// (1,000 imagined cats; the beam levels at 1.7); and why we square (weighted deviations cancel, then squares).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {DeviationArms, FrameSvg, RunningMeanTrace, SceneHeading, StudioBalanceBeam, smooth} from '../../math/studio';
import {S02FinalFrame} from '../math-a12-s02/s3';
import {K1, K2, K3, K4} from './cuemap';
import {ASK, AnswerBox, BoxCard, CATS, Table, Carrier, Cat, Chip, DATA, DotPiles, Framed, Hand, MODEL, POS, PS, RedDie, Row, Slip, Task, VIOLET, XS} from './parts';

const visitTicks = XS.map(v => ({value: v, label: String(v)}));
const W = (grow: readonly number[] = [1, 1, 1, 1]) => XS.map((x, i) => ({x, w: PS[i] * grow[i], label: String(PS[i])}));

// ---------- 1. hook: a balance point no cat can have ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 12, 18);
	const pivot = 2.5 + smooth(prog(fr, k.six + 10, 90));
	const stageB = k.now;
	const grow = [k.p1, k.p3, k.p4, k.p2].map(a => smooth(prog(fr, a, 20)));
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - open}}>
				<SceneHeading text="What do expectation and variance measure?" at={30} size={48} />
				{/* stage A: the die's bars on a beam */}
				<RedDie x={130} y={260} w={220} out={stageB} />
				<Hand x={130} y={520} at={-30} out={stageB} size={44} color={MODEL.ink}>one fair die</Hand>
				<StudioBalanceBeam x={550} y={720} width={1050} range={[0.5, 6.5]} weights={[1, 2, 3, 4, 5, 6].map(x => ({x, w: 1 / 6, label: '1/6', role: 'b' as const}))} pivot={pivot} barScale={1856} barWidth={115}
					pivotLabel={v => (Math.abs(v - 3.5) < 0.01 ? 'balance point: 3.5' : '')} out={stageB} />
				<Hand x={1330} y={820} at={k.never} out={stageB} size={44} color={ASK.ink}>no face shows 3.5</Hand>
				<Hand x={130} y={640} at={k.thats} out={stageB} size={40} color={VIOLET} w={360}>the expected value of one roll</Hand>
				{/* stage B: the cat's visits */}
				<RedDie x={1720} y={150} w={110} at={stageB} />
				<Hand x={1560} y={168} at={stageB} size={38} color={VIOLET}>die: 3.5</Hand>
				<Cat x={70} y={330} w={470} at={stageB} />
				<Carrier x={150} y={730} w={230} at={stageB + 10} />
				<Table x={600} y={170} size={38} colW={120} headW={160} at={stageB} rows={[{head: 'x', cells: ['0', '1', '2', '3'], cellAt: [k.vet + 61, k.vet + 85, k.vet + 96, k.vet + 116]}, {head: 'P(x)', cells: PS.map(String), color: MODEL.ink, cellAt: [k.p1, k.p3, k.p4, k.p2]}]} />
				<Hand x={96} y={290} at={k.vet + 20} size={42} color={INK}>X: vet visits in a year</Hand>
				<StudioBalanceBeam x={600} y={790} width={1100} range={[-0.5, 3.5]} ticks={visitTicks} weights={W(grow).map(q => ({...q, role: 'b' as const}))} pivot={1.2} barScale={800} barWidth={150}
					pivotLabel={() => '?'} at={stageB} />
				<Chip x={1300} y={300} at={k.where} size={38} color={INK}>Balance point? Spread?</Chip>
			</div>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><S02FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. the long-run average ----------
const shownAt = (f: number) => {
	const k = K2;
	if (f < 243) return 0;
	if (f < 300) return f < 258 ? 1 : f < 274 ? 2 : 3;
	if (f < 352) return 3 + Math.floor((7 * (f - 300)) / 52);
	if (f < k.thousand) return 10;
	if (f < k.seven + 10) return Math.round(10 + 990 * smooth((f - k.thousand) / (k.seven + 10 - k.thousand)));
	return Math.round(1000 + 1000 * Math.min(1, (f - k.seven - 10) / 50));
};
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const shown = shownAt(fr);
	return (
		<>
			<SceneHeading text="The long-run average" at={4} size={52} />
			<Cat x={96} y={190} w={250} />
			<Hand x={96} y={410} at={k.picture} size={38} color={INK} w={260}>many cats, one after another</Hand>
			<RunningMeanTrace x={380} y={170} width={980} height={560} values={CATS} shown={shown} target={1.7} yRange={[0, 3]} yTicks={[0, 1, 2, 3]} countTicks={[1, 10, 100, 1000, 2000]} targetLabel="1.7" xLabel="number of cats (simulated)" yLabel="average visits so far" role="a" digits={3}
				readout={{x: 1420, y: 170, width: 440, rows: (n, m) => [{label: 'cats so far', value: n, digits: 0}, {label: 'average visits', value: n ? m : 0, text: n ? undefined : '–', digits: 3, role: 'gradient'}]}} />
			<Hand x={1420} y={430} at={k.first} size={40} color={ASK.ink}>high at first</Hand>
			<Row x={1420} y={490} at={k.ten} size={42}>10 cats: 2.1</Row>
			<Row x={1420} y={556} at={k.thousand} size={42}>1,000 cats: 1.706</Row>
			<Hand x={1420} y={622} at={k.another} size={36} color={POS} w={440}>another run would wobble differently</Hand>
			<Hand x={1420} y={706} at={k.so} size={40} color={VIOLET}>the long-run average</Hand>
			{CATS.slice(0, 10).map((v, i) => fr >= k.write - 10 ? null : <div key={i} style={{position: 'absolute', left: 380 + i * 74, top: 790, width: 60, height: 60, borderRadius: 30, background: DATA.soft, border: `3px solid ${DATA.stroke}`, opacity: shown > i ? 1 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: DATA.ink}}>{v}</div>)}
			<Hand x={1140} y={800} at={k.starts} out={k.write - 10} size={36} color={INK}>first 10 cats</Hand>
			<Hand x={96} y={560} at={k.no} size={38} color={ASK.ink} w={260}>no cat makes 1.7 visits</Hand>
			<AnswerBox x={380} y={790} at={k.write} size={44}>E(X) = μ: the centre of the distribution</AnswerBox>
		</>
	);
};

// ---------- 3. where Σ x P(x) comes from ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const pivot = 1.2 + 0.5 * smooth(prog(fr, k.beam + 10, 40));
	return (
		<>
			<Task x={96} y={150} w={1000} at={-30} size={40}>Find E(X), the expected number of vet visits.</Task>
			<BoxCard x={1140} y={150} w={720} at={-30} size={36} title="givens"><div>x: 0, 1, 2, 3</div><div style={{color: MODEL.ink}}>P(x): 0.1, 0.3, 0.4, 0.2</div></BoxCard>
			<Framed x={96} y={290} at={-30} size={44}>E(X) = μ = Σ x P(x)</Framed>
			<Chip x={1440} y={84} at={k.die} size={34} color={INK}>fair die: 21/6 = 3.5</Chip>
			<StudioBalanceBeam x={96} y={780} width={760} range={[-0.5, 3.5]} ticks={visitTicks} weights={W().map((q, i) => ({...q, role: (fr >= k.bars && (i === 1 || i === 2) ? 'k' : 'b') as 'k' | 'b'}))} pivot={pivot} barScale={650} barWidth={110}
				pivotLabel={v => (Math.abs(v - 1.7) < 0.005 ? 'balance point: 1.7' : '?')} />
			<Hand x={96} y={420} at={k.bars} size={40} color={ASK.ink}>pulled by the heavy bars</Hand>
			<Hand x={900} y={330} at={k.imagine} size={36} color={MODEL.ink}>1,000 imagined cats (each dot: 10 cats)</Hand>
			<DotPiles x={920} base={560} counts={[100, 300, 400, 200]} at={[k.hundred, k.three, k.four, k.two]} />
			<Cat x={1600} y={410} w={240} />
			<Row x={900} y={620} at={k.seventeen} size={40}>0×100 + 1×300 + 2×400 + 3×200 = 1,700</Row>
			<Row x={900} y={680} at={k.seven} out={k.sum} size={44}>1,700 ÷ 1,000 = 1.7</Row>
			<Hand x={1400} y={690} at={k.dividing} out={k.sum} size={36} color={MODEL.ink}>÷ 1,000: probabilities</Hand>
			<AnswerBox x={900} y={680} at={k.sum} size={40}>μ = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 1.7</AnswerBox>
			<Slip x={900} y={790} at={k.arent} strikeAt={k.arent + 24} size={40} caption="only for equal weights">(0 + 1 + 2 + 3) ÷ 4 = 1.5</Slip>
		</>
	);
};

// ---------- 4. measuring spread: why we square ----------
const B = (s: string) => <span style={{color: DATA.ink}}>{s}</span>;
const A = (s: string) => <span style={{color: ASK.ink}}>{s}</span>;
export const S04: React.FC = () => {
	const k = K4;
	return (
		<>
			<SceneHeading text="Measuring spread: why we square" at={4} size={52} />
			<Row x={96} y={170} at={k.these} size={44}>x − μ:  {B('−1.7')},  {B('−0.7')},  {A('0.3')},  {A('1.3')}</Row>
			<Row x={96} y={240} at={k.weight} size={44}>weighted:  {B('(−1.7)(0.1)')} + {B('(−0.7)(0.3)')} + {A('(0.3)(0.4)')} + {A('(1.3)(0.2)')}</Row>
			<Row x={96} y={310} at={k.zero} size={52}>{B('−0.17 − 0.21')} + {A('0.12 + 0.26')} = 0</Row>
			<Hand x={96} y={384} at={k.right} out={k.variance - 6} size={40} color={VIOLET}>weighted deviations cancel, for every distribution</Hand>
			<StudioBalanceBeam x={160} y={520} width={1000} range={[-0.5, 3.5]} pivot={1.7} barScale={150} barWidth={110} weightText={false} weights={XS.map((x, i) => ({x, w: PS[i], role: 'b' as const}))} ticks={[]} />
			<Squares at={k.square} />
			<AnswerBox x={96} y={372} at={k.variance} size={44}>Var(X) = σ² = E((X − μ)²) = Σ (x − μ)² P(x)</AnswerBox>
			<DeviationArms x={160} y={830} width={1000} range={[-0.5, 3.5]} mu={1.7} items={XS.map((x, i) => ({x, p: PS[i]}))} ticks={visitTicks} weightAt={k.weight} stackAt={k.zero} rowGap={46} muLabel="" />
			<Hand x={1190} y={490} at={k.these} size={44} color={VIOLET}>μ = 1.7</Hand>
			<Cat x={1560} y={440} w={270} />
			<Hand x={1250} y={660} at={k.square} size={36} color={VIOLET}>squared deviations</Hand>
		</>
	);
};
/** Scene 4's squares, side by side at the right (side ∝ |x − μ|), labelled underneath, clear of the arms. */
const Squares: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 20);
	if (o <= 0.01) return null;
	let x = 1250;
	return <FrameSvg style={{opacity: o}}>
		{XS.map((v, i) => {
			const d = v - 1.7, s = Math.abs(d) * 100 * smooth(o), R = d < 0 ? DATA : ASK, x0 = x;
			x += Math.abs(d) * 100 + 34;
			return <g key={i}>
				<rect x={x0} y={880 - s} width={s} height={s} fill={VIOLET_SOFT} stroke={R.stroke} strokeWidth={3} />
				<text x={x0 + Math.abs(d) * 50} y={920} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: VIOLET}}>{['2.89', '0.49', '0.09', '1.69'][i]}</text>
			</g>;
		})}
	</FrameSvg>;
};
const VIOLET_SOFT = '#e7e0f2';
export {FrameSvg};
