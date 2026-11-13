// Scenes 1 to 5: the bouncing ball (f06's final frame) and the question (each bounce fills half the gap below 128),
// the terms closing on zero (r = ½ and r = −½; any r between −1 and 1), the totals closing on 128
// (Sₙ = 128 − 128(½)ⁿ: the gap shrinks to nothing), the limiting sum S∞ = a/(1 − r) for |r| < 1, the ball's whole
// journey (128 + 2 × 128 = 384 cm) and what happens when |r| ≥ 1.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import type {PlotMap} from '../../math/studio';
import {BounceRig, FrameSvg, LiveReadoutBoard, Pow, SceneHeading, TermPlot, bounceAt, insideFade, smooth, vis} from '../../math/studio';
import {BallScene, F06FinalFrame} from '../math-a12-f06/s3';
import {K1, K2, K3, K4, K4A, K5} from './cuemap';
import {AMBER, AnswerBox, BALL, BLUE, BOUNCES, BROWN, BoxCard, Chip, DistanceBar, DotLine, FLOOR, Frac, Framed, Hand, HeightScale, POS, RBand, ReadStrip, Row, Sb, Slip, Stack, TEAL, VIOLET, gpSum} from './parts';

const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const frac = (v: number) => (v === 0.5 ? '½' : v === 0.25 ? '¼' : v === 0.125 ? '⅛' : Number.isInteger(v) ? String(v) : String(v).replace(/\.5$/, '½').replace(/\.75$/, '¾').replace(/\.25$/, '¼'));

// ---------- 1. hook: an endless sum ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const replay = fr >= k.dropped - 16;
	const t = replay ? lin(fr, k.dropped, k.each + 40) + lin(fr, k.s64 - 30, k.t32 - 14) + lin(fr, k.t32 - 14, k.t16 - 14) + lin(fr, k.t16 - 14, k.t16 + 16) + 0.5 * lin(fr, k.t16 + 16, k.t16 + 30) : 3.5;
	const n = fr >= k.gap + 70 ? 10 : fr >= k.fills ? 9 : fr >= k.after ? 8 : Math.max(1, Math.min(3, Math.floor(t)));
	const sn = gpSum(64, 0.5, n);
	return (
		<>
			<SceneHeading text="When does a geometric series have a limiting sum?" at={34} size={48} />
			{fr >= 1 ? <BallScene bare head={-300} t={t} build={BOUNCES.map(() => -300)} gaps={-300} chip={-300} next={-300} q={-300} /> : null}
			<ReadStrip x={1000} y={76} at={k.dropped} cells={[{label: 'bounce', value: String(n)}, {label: 'height', value: frac(64 * 0.5 ** (n - 1)), color: BLUE}, {label: 'heights so far', value: frac(sn), color: TEAL}]} />
			<Hand x={560} y={300} at={k.fills} out={k.can - 8} size={42} color={VIOLET} w={380}>each new bounce fills half of the gap: now {frac(128 - sn)} is left</Hand>
			<Hand x={560} y={300} at={k.can} size={46} color={BROWN} w={380}>infinitely many bounces, a finite total?</Hand>
			<Hand x={560} y={520} at={k.never} size={42} color={AMBER} w={380}>the total keeps growing, but never passes 128</Hand>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F06FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. what happens to the terms ----------
const TICKS2 = [-32, 0, 32, 64].map(v => ({v, label: String(v).replace('-', '−')}));
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const at1 = BOUNCES.map((_, i) => (i < 2 ? k.here - 20 + i * 30 : k.halving + (i - 2) * 16));
	const at2 = BOUNCES.map((_, i) => k.withr + 30 + i * 18);
	return (
		<>
			<SceneHeading text="What happens to the terms?" at={4} size={52} />
			<Hand x={200} y={170} at={-30} size={44} color={BLUE}>bounce heights, r = ½:  64, 32, 16, 8, …</Hand>
			<BounceRig x={1000} floorY={920} unit={2} peaks={PEAKS} t={7.99} spacing={260} ball={{plate: BALL, w: 44}} at={-30} out={k.same - 10} />
			<Hand x={1000} y={944} at={-30} out={k.same - 10} size={40} color={POS}>each bounce: half the height before</Hand>
			<DotLine x={200} y={400} w={1500} range={[-40, 70]} values={BOUNCES} at={at1} ticks={TICKS2} target={{v: 0, label: '0', at: k.so}} label={(v, i) => (i < 3 ? String(v) : null)} />
			<Row x={200} y={530} at={k.ten} size={46}>(½)<Pow>10</Pow> = <Frac n="1" d="1024" /><span style={{color: POS, opacity: prog(fr, k.less, 10)}}>  ≈ 0.00098, less than a thousandth</span></Row>
			<Hand x={1060} y={236} at={k.zero - 30} size={44} color={BLUE} w={700}>the terms get closer and closer to 0, never reaching it</Hand>
			<RBand x={260} y={700} w={700} at={k.same} mark={{r: fr >= k.withr ? -0.5 : 0.5, label: ''}} />
			<Hand x={1040} y={650} at={k.mult} size={44} color={AMBER} w={780}>multiplying by a number smaller than 1 in size shrinks the size by the same fraction each time</Hand>
			<Hand x={200} y={786} at={k.withr} size={42} color={BLUE}>r = −½:  64, −32, 16, −8, …</Hand>
			<DotLine x={200} y={880} w={1500} range={[-40, 70]} values={BOUNCES.map((v, i) => (i % 2 ? -v : v))} at={at2} ticks={TICKS2} target={{v: 0, label: '', at: k.close}} label={() => null} o={prog(fr, k.withr, 12)} />
			<Hand x={1060} y={786} at={k.still} size={42} color={POS}>signs flip, size still halves</Hand>
		</>
	);
};

// ---------- 3. what happens to the totals ----------
const ST3 = {x: 96, base: 880, blockW: 46, gap: 12, unit: 4};
const TERMS14 = Array.from({length: 14}, (_, i) => 64 * 0.5 ** i);
const n3 = (fr: number) => 8 + Math.round(6 * lin(fr, K3.shrinks, K3.too + 10));
const TotalsStack: React.FC<{n: number; buildFrom?: number}> = ({n, buildFrom}) => {
	const ly = ST3.base - 128 * ST3.unit, cx = (j: number) => ST3.x + j * (ST3.blockW + ST3.gap);
	const top = ST3.base - gpSum(64, 0.5, n) * ST3.unit;
	return <>
		<Stack x={ST3.x} base={ST3.base} terms={TERMS14} buildAt={TERMS14.map((_, j) => (j < 8 || buildFrom === undefined ? -300 : j < n ? -300 : 1e9))} blockW={ST3.blockW} gap={ST3.gap} unit={ST3.unit} labels={false} readouts={false} />
		<FrameSvg>
			<line x1={ST3.x - 20} x2={cx(13) + ST3.blockW + 20} y1={ly} y2={ly} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
			<text x={cx(13) + ST3.blockW + 30} y={ly + 13} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}}>128</text>
			<rect x={cx(n - 1) - 3} y={ly + 2} width={ST3.blockW + 6} height={Math.max(3, top - ly - 2)} fill={VIOLET} opacity={0.55} />
			{[1, 4, 8, 14].map(j => <text key={j} x={cx(j - 1) + ST3.blockW / 2} y={ST3.base + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: TEAL}}>S{j === 1 ? '₁' : j === 4 ? '₄' : j === 8 ? '₈' : '₁₄'}</text>)}
		</FrameSvg>
	</>;
};
const SPLIT = <>= <Frac n="a" d="1 − r" /> − <Frac n="a" d="1 − r" /> × </>;
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const n = n3(fr), sn = gpSum(64, 0.5, n);
	return (
		<>
			<SceneHeading text="What happens to the totals?" at={4} size={52} />
			<TotalsStack n={n} buildFrom={k.shrinks} />
			<ReadStrip x={96} y={170} at={-30} cells={[{label: 'n', value: String(n)}, {label: 'total', value: String(Number(sn.toFixed(3))), color: TEAL}, {label: 'gap', value: String(Number((128 - sn).toFixed(3))), color: VIOLET}]} />
			<BoxCard x={1000} y={560} w={820} at={-30} out={k.our - 8} size={42} title="plan">
				<div>Split the sum formula into two parts.</div>
				<div style={{marginTop: 14}}>Watch the r<Pow>n</Pow> part as n grows.</div>
			</BoxCard>
			<Row x={1000} y={170} at={k.sn} size={48} dim={prog(fr, k.our, 12)} small={42}><span style={{color: TEAL}}>S<Sb>n</Sb></span> = <Frac n={<>a(1 − r<Pow>n</Pow>)</>} d="1 − r" />   <span style={{color: POS, fontSize: 34}}>last video</span></Row>
			<Row x={1000} y={310} at={k.its} size={48} dim={prog(fr, k.our, 12)} small={42}>{'    '}{SPLIT}<span style={{color: fr >= k.rn ? AMBER : undefined}}>r<Pow>n</Pow></span></Row>
			<Row x={1000} y={470} at={k.our} size={46}>64 + 32 + …:  <span style={{color: TEAL}}>S<Sb>n</Sb></span> = <span style={{opacity: prog(fr, k.t128 - 20, 10)}}>128</span><span style={{opacity: prog(fr, k.second, 10)}}> − <span style={{color: VIOLET}}>128(½)<Pow>n</Pow></span></span></Row>
			<Hand x={1000} y={560} at={k.gap} size={44} color={VIOLET}>128(½)ⁿ is the gap that is left</Hand>
			<Hand x={1000} y={640} at={k.grows} size={44} color={AMBER} w={820}>as n grows, rⁿ shrinks towards 0, so the gap shrinks towards 0 too</Hand>
			<Hand x={1000} y={800} at={k.totals} size={64} color={TEAL}>S<Sb>n</Sb> → 128</Hand>
		</>
	);
};

// ---------- 4. the limiting sum ----------
export const SINF = <><span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="a" d="1 − r" /></>;
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	return (
		<>
			<SceneHeading text="The limiting sum" at={4} size={52} />
			<TotalsStack n={14} />
			<Hand x={96} y={176} at={-30} size={44} color={TEAL}>the totals close in on 128</Hand>
			<Framed x={1000} y={170} at={k.so} size={64}>{SINF}<span style={{opacity: prog(fr, k.but, 12), fontSize: 46, color: AMBER}}>   only when |r| &lt; 1</span></Framed>
			<Hand x={1000} y={176} at={k.sinf} out={k.so - 6} size={56} color={TEAL}>the limiting sum, S<Sb>∞</Sb></Hand>
			<Hand x={1000} y={370} at={k.number} size={42} color={POS} w={820}>the value the totals get closer and closer to as we add more terms</Hand>
			<Row x={1000} y={500} at={k.s64} size={48}><span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="64" d="1 − ½" /> = 64 ÷ ½<span style={{opacity: prog(fr, k.which, 10)}}> = 128  ✓</span></Row>
			<Chip x={1000} y={640} at={k.which + 50} size={36} color={POS}>the same as 1 + ½ + ¼ + … = 2, times 64</Chip>
			<Row x={1000} y={740} at={k.between} size={46}>|r| &lt; 1  means  −1 &lt; r &lt; 1</Row>
			<Hand x={1000} y={820} at={k.mod} size={44} color={AMBER}>|r| is the size of r ("mod r")</Hand>
		</>
	);
};

// ---------- 4a. the ball's whole journey ----------
const PEAKS = [128, 64, 32, 16, 8, 4, 2, 1];
export const S04A: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4A;
	const t = lin(fr, k.falls, k.after) + 7 * smooth(lin(fr, k.after + 20, k.which));
	const st = bounceAt(PEAKS, t);
	const n = Math.min(7, st.bounce);
	const dist = Math.round(st.travelled);
	return (
		<>
			<SceneHeading text="The ball's whole journey" at={4} size={52} />
			<BounceRig x={230} floorY={760} unit={4} peaks={PEAKS} t={t} spacing={430} ball={{plate: BALL, w: 84}} floor={{plate: FLOOR, h: 52}} arrows={{at: k.up, upTo: 4}} at={-30} />
			<HeightScale x={150} floorY={760} unit={4} max={130} step={20} />
			<DistanceBar x={150} y={874} w={1180} max={400} value={dist} total={384} totalAt={k.so} />
			<Hand x={330} y={200} at={k.falls} out={k.after + 60} size={44} color={POS}>the drop: 128 cm, once</Hand>
			<Hand x={560} y={300} at={k.up} size={44} color={AMBER} w={640}>every bounce goes up and comes back down: each height is travelled twice</Hand>
			<LiveReadoutBoard x={1400} y={170} width={440} at={-30} inline size={50} labelSize={30} rows={[
				{label: 'bounce', value: n, digits: 0, role: 'inner'},
				{label: 'distance', value: dist, digits: 0, role: 'b', unit: 'cm'},
			]} />
			<Row x={1400} y={366} at={k.those} size={40}>128 + 2 × (64 + 32 + …)</Row>
			<Row x={1400} y={432} at={k.plus - 40} size={44}>= 128 + 2 × 128</Row>
			<AnswerBox x={1400} y={506} at={k.cm - 30} size={56}>384 cm</AnswerBox>
			<Slip x={1450} y={612} at={k.inf + 20} size={36} caption="each bounce: up and down">128 + 128 = 256 cm</Slip>
			<Hand x={330} y={200} at={k.inf} size={46} color={TEAL}>infinitely many bounces, a finite distance</Hand>
		</>
	);
};

// ---------- 5. when there is no limiting sum ----------
const r5 = (fr: number) => {
	const k = K5;
	let r = 0.5 + 0.4 * smooth(lin(fr, k.magic, k.magic + 40)) + 1.1 * smooth(lin(fr, k.two - 30, k.totals));
	r -= smooth(lin(fr, k.one - 20, k.one + 20));
	r -= 2 * smooth(lin(fr, k.m1 - 20, k.m1 + 30));
	return Math.round(r * 100) / 100;
};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const r = r5(fr);
	const s10 = gpSum(1, r, 10), has = Math.abs(r) < 1;
	return (
		<>
			<SceneHeading text="When there is no limiting sum" at={4} size={52} />
			<TermPlot x={40} y={150} width={1180} height={620} window={{x: [0, 10.8], y: [-1, 12]}} nRange={[1, 10]} at={-30} xTicks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} yTicks={[2, 4, 6, 8, 10]} xLabel="n" yLabel="total of n terms (a = 1)"
				series={[{term: n => gpSum(1, r, n), color: TEAL, at: -30, stagger: 0}]} limitLine={{Y: has ? Math.min(11.9, 1 / (1 - r)) : 0, opacity: has && 1 / (1 - r) <= 11.9 ? insideFade(r) : 0}}>{(m: PlotMap) => {const [x0, y0] = m.p(0, 12), [x1, y1] = m.p(10.8, -1); return <g>
					<defs><clipPath id="f07-s5-plot"><rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} /></clipPath></defs>
					<polyline clipPath="url(#f07-s5-plot)" points={Array.from({length: 10}, (_, i) => m.p(i + 1, Math.max(-50, Math.min(50, gpSum(1, r, i + 1)))).join(',')).join(' ')} fill="none" stroke={TEAL} strokeWidth={3} strokeDasharray="8 8" opacity={0.45} />
				</g>;}}</TermPlot>
			<RBand x={260} y={860} w={700} at={-30} outside={prog(fr, k.whenever, 14)} mark={{r: Math.max(-2, Math.min(2, r)), label: ''}} />
			<ReadStrip x={1250} y={170} at={-30} cells={[{label: 'r', value: String(r).replace('-', '−'), color: AMBER}, {label: 'total of 10', value: String(Number(s10.toFixed(2))).replace('-', '−'), color: TEAL}]} />
			<Hand x={1250} y={270} at={-30} size={44} color={has ? TEAL : POS} w={600}>{has ? `the totals settle on ${Number((1 / (1 - r)).toFixed(2))}` : 'no limiting sum'}</Hand>
			<Hand x={1250} y={336} at={-30} size={40} color={POS} w={620}>{Math.abs(r) < 1 ? 'each new term is smaller in size than the last' : Math.abs(r) === 1 ? 'every term has the same size' : 'each new term is bigger in size than the last'}</Hand>
			<Hand x={1250} y={460} at={k.bound - 30} size={42} color={AMBER} w={600}>r = 2: the totals grow without bound</Hand>
			<Hand x={1250} y={556} at={k.grows} size={42} color={AMBER} w={600}>r = 1: the total grows by a each time</Hand>
			<Hand x={1250} y={652} at={k.bounce} size={42} color={AMBER} w={600}>r = −1: the totals bounce between a and 0 forever</Hand>
			<Hand x={1250} y={760} at={k.doesnt - 20} size={42} color={POS} w={600}>|r| ≥ 1: rⁿ does not shrink, so the gap never closes</Hand>
			<Chip x={1250} y={880} at={k.no} size={44} color={BROWN}>|r| ≥ 1: no limiting sum</Chip>
		</>
	);
};
export {vis};
