// Scenes 5 to 8: the variance and σ for the cats (the table, visits squared, back to visits, μ ± σ on the beam), the
// quicker formula (expanding the square; E(X²) = 3.7; two crossed slips), the pet insurer (the far weight drags the
// balance point from $50 to $210; σ ≈ $1,134) and the memory aid (mean of the squares minus the square of the mean).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {LiveReadoutBoard, MarkSpan, SceneHeading, SpreadBrackets, StudioBalanceBeam, smooth} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {ASK, AnswerBox, BoxCard, Carrier, Cat, Chip, FramedCard, GOOD, Hand, MODEL, POS, PS, Row, Slip, Table, Task, VIOLET, XS} from './parts';

const visitTicks = XS.map(v => ({value: v, label: String(v)}));

// ---------- 5. working out the variance and σ ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const map = (v: number) => 300 + (v + 0.5) * 275;
	return (
		<>
			<Table x={96} y={160} size={38} colW={150} headW={300} rows={[
				{head: 'x', cells: ['0', '1', '2', '3']},
				{head: 'P(x)', cells: PS.map(String), color: MODEL.ink},
				{head: '(x − μ)²', cells: ['2.89', '0.49', '0.09', '1.69'], color: VIOLET, at: k.squared},
				{head: '(x − μ)² P(x)', cells: ['0.289', '0.147', '0.036', '0.338'], at: k.weight},
			]} />
			<Row x={1060} y={170} at={-30} out={k.one} size={46}>Var(X) = Σ (x − μ)² P(x)</Row>
			<AnswerBox x={1060} y={160} at={k.one} size={52}>Var(X) = 0.81</AnswerBox>
			<Hand x={1490} y={176} at={k.x} size={44} color={ASK.ink}>visits²</Hand>
			<AnswerBox x={1060} y={266} at={k.nine} size={46}>σ = √0.81 = 0.9 visits</AnswerBox>
			<Hand x={1060} y={366} at={k.measures} size={40} color={VIOLET}>back to visits: a measure of spread</Hand>
			<Hand x={1060} y={424} at={k.here2} size={32} color={POS}>(the die: Var = 35/12 ≈ 2.92, σ ≈ 1.71)</Hand>
			<Row x={96} y={440} at={k.root} size={44}>σ = √Var(X)</Row>
			<StudioBalanceBeam x={300} y={830} width={1100} range={[-0.5, 3.5]} ticks={visitTicks} pivot={1.7} barScale={560} barWidth={130}
				weights={XS.map((x, i) => ({x, w: PS[i], label: String(PS[i]), role: (fr >= k.six && (x === 1 || x === 2) ? 'k' : 'b') as 'k' | 'b'}))} />
			<SpreadBrackets y={580} mu={1.7} sigma={0.9} ks={[1]} map={map} at={k.here2 + 20} muLabel="μ = 1.7" />
			<Hand x={1480} y={590} at={k.six} size={38} color={ASK.ink} w={400}>1 and 2: 0.7 of the probability, here</Hand>
			<Cat x={1540} y={720} w={290} />
		</>
	);
};

// ---------- 6. a quicker formula ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const dim = (a: number) => prog(fr, a, 12) * 0.3;
	const mv = smooth(prog(fr, k.weight - 24, 24));
	return (
		<>
			<SceneHeading text="A quicker formula" at={4} size={52} />
			<Row x={96} y={170} at={10} size={46} dim={dim(k.weight)}>(x − μ)² = <span style={{color: fr >= k.squared ? MODEL.ink : INK}}>x²</span> − <span style={{color: fr >= k.squared ? ASK.ink : INK}}>2μx</span> + <span style={{color: fr >= k.squared ? VIOLET : INK}}>μ²</span></Row>
			<Row x={96} y={250} at={k.weight} size={46} dim={dim(k.left)}>Σ(x − μ)²P(x) = Σx²P(x) − 2μ   <MarkSpan kind="circle" at={k.mu} role="k" width={5}>ΣxP(x)</MarkSpan>   + μ²   <MarkSpan kind="circle" at={k.one} role="k" width={5}>ΣP(x)</MarkSpan></Row>
			<Hand x={1300} y={240} at={k.mu} size={40} color={ASK.ink}>ΣxP(x) = μ</Hand>
			<Hand x={1300} y={292} at={k.one} size={40} color={ASK.ink}>ΣP(x) = 1</Hand>
			<Row x={96} y={350} at={k.left} size={46} dim={dim(k.for)}>= E(X²) − 2μ² + μ² = E(X²) − μ²</Row>
			<AnswerBox x={96} y={440} at={k.minus} size={48}>Var(X) = Σx²P(x) − μ²</AnswerBox>
			<Row x={96} y={560} at={k.for} size={40}>E(X²) = 0(0.1) + 1(0.3) + 4(0.4) + 9(0.2) = 3.7</Row>
			<Row x={96} y={640} at={k.answer - 60} size={44} color={GOOD.ink}>3.7 − 1.7² = 3.7 − 2.89 = 0.81</Row>
			<Hand x={900} y={652} at={k.answer} size={40} color={GOOD.ink}>same answer as before</Hand>
			<Slip x={96} y={740} at={k.careful} strikeAt={k.not} size={42} caption="square the values only">Σx²P(x)²</Slip>
			<Slip x={560} y={740} at={k.isnt - 10} strikeAt={k.isnt + 10} size={42} caption="then the variance would always be 0">E(X²) = μ²</Slip>
			<Table x={96 + 1034 * mv} y={300 + 80 * mv} size={38} colW={124} headW={230} rows={[{head: 'x', cells: ['0', '1', '2', '3']}, {head: 'P(x)', cells: PS.map(String), color: MODEL.ink}, {head: '(x − μ)²', cells: ['2.89', '0.49', '0.09', '1.69'], color: VIOLET}, {head: '× P(x)', cells: ['0.289', '0.147', '0.036', '0.338']}]} />
			<StudioBalanceBeam x={240 + 980 * mv} y={770} width={560} range={[-0.5, 3.5]} ticks={visitTicks} pivot={1.7} barScale={250} barWidth={60} weightText={false} weights={XS.map((x, i) => ({x, w: PS[i], role: 'b' as const}))} />
			<Cat x={1440} y={300} w={380} out={k.weight - 24} />
			<Hand x={1300} y={640} at={10} out={k.weight - 24} size={44} color={VIOLET}>a faster way to the same 0.81</Hand>
			<Chip x={96} y={872} at={-30} size={40} color={INK}>so far: Var(X) = Σ (x − μ)² P(x) = 0.81</Chip>
		</>
	);
};

// ---------- 7. a problem: the pet insurer ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const claim = 8000 * smooth(prog(fr, k.expected, k.dollars - k.expected + 10));
	const pivot = 50 + 0.02 * claim;
	const money = (v: number) => '$' + Math.round(v).toLocaleString('en-AU');
	const map = (v: number) => 760 + ((v + 500) / 9000) * 1060;
	const on = claim > 1;
	return (
		<>
			<Cat x={96} y={150} w={220} />
			<Carrier x={340} y={170} w={190} />
			<Hand x={96} y={340} at={-30} size={36} color={INK}>one cat, one policy</Hand>
			<Task x={560} y={150} w={1300} at={-30} size={36}>Find the insurer's expected profit per policy, and explain the risk on one policy.</Task>
			<BoxCard x={96} y={400} w={560} at={k.insurer} size={34} title="givens">
				<div>premium: $300 per year</div>
				<div style={{opacity: prog(fr, k.p02, 12)}}>claim $8,000: probability 0.02</div>
				<div style={{opacity: prog(fr, k.p05, 12)}}>claim $1,000: probability 0.05</div>
				<div style={{opacity: prog(fr, k.otherwise, 12)}}>otherwise $0: probability 0.93</div>
			</BoxCard>
			<StudioBalanceBeam x={760} y={780} width={1060} range={[-500, 8500]} ticks={[0, 2000, 4000, 6000, 8000].map(v => ({value: v, label: money(v)}))}
				weights={[{x: 0, w: 0.93, label: '0.93', role: 'b' as const}, {x: 1000, w: 0.05, label: '0.05', role: 'b' as const}, {x: claim, w: 0.02, label: on ? '0.02' : '', role: 'k' as const}]}
				pivot={pivot} barScale={200} barWidth={60} pivotLabel={v => 'balance point: ' + money(v)} at={k.p02} />
			<LiveReadoutBoard x={1460} y={580} width={400} inline at={k.expected} rows={[{label: 'balance point', value: pivot, format: money, role: 'gradient'}]} />
			<Hand x={1460} y={420} at={k.beam} out={k.so} size={40} color={ASK.ink}>the far weight pulls</Hand>
			<AnswerBox x={860} y={310} at={k.dollars} size={42}>E(C) = 8,000(0.02) + 1,000(0.05) = $210</AnswerBox>
			<Row x={860} y={406} at={k.so} size={38}>premium − expected claims = 300 − 210 = $90</Row>
			<Hand x={860} y={456} at={k.before} size={32} color={POS}>per policy, before other costs</Hand>
			<Row x={860} y={510} at={k.sd} size={34} color={POS}>Var(C) = 1,330,000 − 210² = 1,285,900</Row>
			<AnswerBox x={1560} y={490} at={k.d2} size={44}>σ ≈ $1,134</AnswerBox>
			<SpreadBrackets y={700} mu={210} sigma={1134} ks={[1]} map={map} at={k.either} muLabel="" labels={() => 'μ ± σ'} />
			<Hand x={1000} y={610} at={k.one} out={k.need} size={40} color={ASK.ink}>one cat: a big swing</Hand>
			<Hand x={1000} y={610} at={k.need} size={38} color={VIOLET}>many policies: the average takes over</Hand>
			<Slip x={96} y={660} at={k.either + 10} strikeAt={k.either + 30} size={34} caption="one policy swings far more">expected profit $90, so no risk</Slip>
		</>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const hand = (size: number, color = INK): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, lineHeight: 1.1});
	return (
		<>
			<FramedCard x={160} y={150} w={1600} h={790} at={-30} />
			<div style={{...hand(46, POS), left: 220, top: 172}}>Memory aid</div>
			<Cat x={230} y={330} w={340} />
			<div style={{...hand(40, VIOLET), left: 230, top: 650}}>visits: μ = 1.7, σ = 0.9</div>
			<div style={{...hand(80), left: 660, top: 250, width: 1060, opacity: prog(fr, k.here + 6, 12)}}>Mean of the squares, minus the square of the mean.</div>
			<div style={{position: 'absolute', left: 660, top: 500, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK, opacity: prog(fr, k.square, 12)}}>Var(X) = E(X²) − μ²</div>
			<div style={{...hand(44, GOOD.ink), left: 660, top: 600, opacity: prog(fr, k.never, 12)}}>never negative</div>
		</>
	);
};
