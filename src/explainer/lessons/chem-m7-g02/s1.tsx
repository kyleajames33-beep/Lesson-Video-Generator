// M7 G02 scenes 1 to 2e: the hook (the job sorter: water's mass and rise into q, fuel's mass into n), and question 1
// (methanol from raw data): the attempt; q then n; ΔH = −q ÷ n; the percentage that reached the water (the split bar);
// "÷ grams" crossed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, PauseHold, Sx, smooth} from '../chem-m6-c01/parts';
import {Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate} from '../chem-m7-c06/parts';
import {MiniCard} from '../chem-m6-g01/board';
import {AnsBox, Badge, QStrip} from '../chem-m7-g01/board';
import {Balance} from '../chem-m7-p03/s1';
import {Escape} from '../chem-m7-p03/parts';
import {Heading, SET, hold, sc} from './common';
import {BLUE, Checks4, INK, INK_SOFT, ORANGE, SplitBar, TEALD, WL} from './board';

// ---------- 1. Hook ----------
const KH = cues(sc('hook'), {three: 'three numbers', job: 'single job', q: 'go into q', n: 'gives n', swap: 'Swap them', hundred: 'a hundred', here: 'Here are', belong: 'belong.', pause: 'Pause and', step: 'one step'});
const CHIPS = ['150.0 g', '20.0 °C', '1.10 g'];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sw = smooth(prog(f, KH.swap, 20)) * (1 - smooth(prog(f, KH.hundred + 40, 20)));
	const home: [number, number][] = [[320, 330], [560, 330], [800, 330]];
	const inQ: [number, number][] = [[280, 610], [500, 610], [0, 0]], inN: [number, number][] = [[0, 0], [0, 0], [900, 610]];
	const swQ: [number, number][] = [[0, 0], [0, 0], [380, 610]], swN: [number, number][] = [[860, 610], [1080, 610], [0, 0]];
	const pos = (i: number): [number, number] => {
		const tgt = i < 2 ? inQ[i] : inN[i];
		const d = smooth(prog(f, i < 2 ? KH.q + i * 6 : KH.n, 20));
		let p: [number, number] = [home[i][0] + (tgt[0] - home[i][0]) * d, home[i][1] + (tgt[1] - home[i][1]) * d];
		const s = i < 2 ? swN[i] : swQ[i];
		p = [p[0] + (s[0] - p[0]) * sw, p[1] + (s[1] - p[1]) * sw - Math.sin(sw * Math.PI) * 80];
		return p;
	};
	return (
		<>
			<Heading text="Combustion calculations: water in q, fuel in n" at={4} size={54} />
			<Overlay>
				<g opacity={vis(f, KH.job)}>
					<rect x={160} y={560} width={560} height={130} rx={18} fill="#fbe2cc" stroke={ORANGE} strokeWidth={3} />
					<Sx x={180} y={730} text="q: the water" size={34} color={ORANGE} hand weight={700} at={-1000} />
					<rect x={780} y={560} width={420} height={130} rx={18} fill="#e3f0fa" stroke={BLUE} strokeWidth={3} />
					<Sx x={800} y={730} text="n: the fuel" size={34} color={BLUE} hand weight={700} at={-1000} />
				</g>
				{CHIPS.map((c, i) => { const p = pos(i); return <Tag key={i} x={p[0]} y={p[1]} text={c} at={KH.three + i * 8} size={34} color={INK} fill="#fffdf8" anchor="middle" />; })}
				<Tag x={680} y={790} text="fuel mass in q: answer far too small" at={KH.swap + 16} out={KH.hundred + 40} size={28} anchor="middle" />
				<MiniCard x={1380} y={180} label="Question 1" at={KH.here} />
				<MiniCard x={1380} y={430} label="Question 2" at={KH.here + 8} />
				<MiniCard x={1380} y={680} label="Question 3" at={KH.here + 16} />
				<g opacity={vis(f, KH.belong)}>
					{[110, 112, 80, 111].map((w, i) => <rect key={i} x={1728} y={720 + i * 22} width={w} height={14} rx={4} fill={i === 2 ? '#c9c3b8' : '#9ab8a9'} />)}
					<Sx x={1780} y={706} text="?" size={40} color={INK_SOFT} weight={800} at={-1000} />
				</g>
				<Checks4 at={KH.step} />
				{void KH.pause}
			</Overlay>
		</>
	);
};

// ---------- question 1 ----------
export const Q1 = ['A student used a spirit burner containing methanol (CH₃OH, M = 32.04 g mol⁻¹)', 'to heat 150.0 g of water in a copper can. The temperature of the water rose', 'from 22.4 °C to 42.4 °C. The mass of the spirit burner and methanol decreased', 'from 151.64 g to 150.54 g. The specific heat capacity of water is 4.18 J g⁻¹ °C⁻¹.', 'The molar enthalpy of combustion of methanol is −726 kJ mol⁻¹.', '(a) Calculate the molar enthalpy of combustion of methanol from these results.', '(b) Calculate the percentage of the heat released by the burning methanol that was', 'absorbed by the water.'];
type U = {line: number; phrase: string; at: number; color?: string};
const AM = '#c98a1b';
const u = (line: number, phrase: string, at: number): U => ({line, phrase, at, color: AM});
const U1 = (T: {dt: number; q: number; c: number; m: number; M: number; d726?: number}): U[] => [u(2, 'from 22.4 °C to 42.4 °C', T.dt), u(1, '150.0 g of water', T.q), u(3, '4.18 J g⁻¹ °C⁻¹', T.c), u(3, 'from 151.64 g to 150.54 g', T.m), u(0, 'M = 32.04 g mol⁻¹', T.M), ...(T.d726 !== undefined ? [u(4, '−726 kJ mol⁻¹', T.d726)] : [])];
const ANS_Y = 900;
const AnsQ1: React.FC<{a?: number; b?: number}> = ({a = 1e6, b = 1e6}) => (
	<>
		<AnsBox x={140} y={ANS_Y} w={760} label="(a)" at={-100} parts={[{t: 'ΔHc = −365 kJ mol⁻¹', at: a, lit: true}]} />
		<AnsBox x={930} y={ANS_Y} w={850} label="(b)" at={-100} parts={[{t: '50.3%', at: b, lit: true}, {t: ' of the heat reached the water', at: b + 6}]} />
	</>
);

// ---------- 2a. Question 1 (attempt) ----------
const KA = cues(sc('q1-question'), {q: 'Question one', a: 'A methanol', calc: 'Calculate the', pause: 'Pause here'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q1} at={KA.a} y={175} size={30} w={1360} />
				<Plate p={SET.base} cx={1680} top={240} h={300} at={KA.a + 20} />
				<AnsBox x={140} y={640} w={760} label="(a)" at={KA.calc + 20} />
				<AnsBox x={930} y={640} w={570} label="(b)" at={KA.calc + 26} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1650} cy={840} />
				<Checks4 hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 2b. q then n ----------
const KB = cues(sc('q1-q-and-n'), {start: 'Start with', dt: 'twenty point zero', q: 'so q', c: 'four point one', kj: 'or twelve', keep: 'Keep every', fuel: 'Now the fuel', lost: 'burner lost', div: 'Divide by', n: 'zero point zero three'});
export const SceneQ1QN: React.FC = () => {
	const f = useCurrentFrame();
	const x = 160;
	return (
		<Overlay>
			<Badge text="Raw data: q, n, ΔH" at={6} />
			<QStrip lines={Q1} under={U1({dt: KB.dt, q: KB.q, c: KB.c, m: KB.lost, M: KB.div})} />
			<WL x={x} y={520} t="ΔT = 42.4 − 22.4 = 20.0 °C" at={KB.dt} color={ORANGE} dim={KB.fuel} />
			<WL x={x} y={585} t="q = m(water) c ΔT = 150.0 × 4.18 × 20.0 = 12 540 J" at={KB.q + 6} color={ORANGE} dim={KB.fuel} dimTo={0.7} />
			<WL x={x + 800} y={585} t="= 12.540 kJ" at={KB.kj} color={ORANGE} />
			<Tag x={1300} y={615} text="keep the digits; round at the end" at={KB.keep} out={KB.fuel + 20} size={22} />
			<Balance cx={1620} top={640} h={200} at={KB.lost} text={fr => (fr < KB.lost + 20 ? '151.64 g' : '150.54 g')} pulse={KB.lost + 20} />
			<WL x={x} y={680} t="Δm = 151.64 − 150.54 = 1.10 g" at={KB.lost} color={BLUE} />
			<Tag x={720} y={652} text="initial − final" at={KB.lost + 20} size={22} />
			<WL x={x} y={745} t="n = 1.10 ÷ 32.04 = 0.034332 mol" at={KB.n} color={BLUE} />
			<AnsQ1 />
			<Checks4 ticks={{0: [KB.kj], 1: [KB.n + 10]}} />
			{void KB.start}{void dimAt}{void f}
		</Overlay>
	);
};

// ---------- 2c. ΔH = −q ÷ n ----------
const KC = cues(sc('q1-dh'), {dh: 'Delta H', that: "That's minus", so: 'so minus', three: 'Three significant', neg: 'negative,'});
export const SceneQ1DH: React.FC = () => {
	const f = useCurrentFrame();
	const pl = Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - KC.neg) / 30)) * Math.PI));
	return (
		<Overlay>
			<Badge text="Raw data: q, n, ΔH" at={-100} />
			<QStrip lines={Q1} under={U1({dt: -100, q: -100, c: -100, m: -100, M: -100})} />
			<Tag x={160} y={500} text="q = 12.540 kJ" at={-100} size={32} color={ORANGE} fill="#fbe2cc" />
			<Tag x={460} y={500} text="n = 0.034332 mol" at={-100} size={32} color={BLUE} fill="#e3f0fa" />
			<WL x={160} y={640} t="ΔHc = −q ÷ n = −12.540 kJ ÷ 0.034332 mol" at={KC.dh} color={TEALD} size={36} />
			<WL x={160} y={700} t="= −365.26 kJ mol⁻¹" at={KC.that} color={TEALD} size={36} />
			<circle cx={186} cy={688} r={26 + 6 * pl} fill="none" stroke="#c4432f" strokeWidth={4} opacity={pl} />
			<Tag x={620} y={668} text="3 s.f.: 1.10 g and 20.0 °C" at={KC.three} size={24} o={dimAt(f, KC.neg, 0.5)} />
			<Tag x={620} y={760} text="heat released: ΔH negative" at={KC.neg} size={26} color={TEALD} fill="#dff2ef" />
			<AnsQ1 a={KC.so + 20} />
			<Checks4 ticks={{0: [-100], 1: [-100], 2: [KC.neg + 10]}} />
		</Overlay>
	);
};

// ---------- 2d. The percentage ----------
const KD = cues(sc('q1-percent'), {part: 'Part b', if: 'If those', times: 'times seven', tf: 'twenty four', took: 'The water took', fifty: 'fifty point', half: 'about half', rest: 'The rest'});
export const SceneQ1Pct: React.FC = () => {
	const f = useCurrentFrame();
	const P = {cx: 1640, top: 500, h: 300};
	return (
		<Overlay>
			<Badge text="Raw data: q, n, ΔH" at={-100} />
			<QStrip lines={Q1} under={[...U1({dt: -100, q: -100, c: -100, m: -100, M: -100}), u(4, '−726 kJ mol⁻¹', KD.times), u(6, '(b) Calculate the percentage', KD.part)]} />
			<WL x={160} y={520} t="heat released = n × 726 = 0.034332 × 726 = 24.925 kJ" at={KD.if} color={INK} dim={KD.fifty} />
			<SplitBar x={160} y={580} w={900} frac={0.503} at={KD.tf} fillAt={KD.fifty} full="24.93 kJ released" share="12.54 kJ to the water" rest={{t: 'to the can and air', at: KD.rest}} />
			<WL x={160} y={760} t="12.540 ÷ 24.925 × 100 = 50.3%" at={KD.fifty} color={ORANGE} size={36} />
			<Tag x={720} y={735} text="check: 365 ÷ 726 = 50.3% too" at={KD.half} out={KD.rest + 40} size={22} />
			<g opacity={vis(f, KD.rest)}><Plate p={SET.base} cx={P.cx} top={P.top} h={P.h} /><Escape P={P} at={KD.rest} /></g>
			<AnsQ1 a={-100} b={KD.fifty + 20} />
			<Checks4 ticks={{0: [-100], 1: [-100], 2: [-100], 3: [KD.half]}} />
			{void KD.took}
		</Overlay>
	);
};

// ---------- 2e. The classic slip ----------
const KE = cues(sc('q1-mistake'), {slip: 'classic slip', twelve: 'Twelve point', gram: 'per gram'});
export const SceneQ1Mistake: React.FC = () => (
	<Overlay>
		<Badge text="Raw data: q, n, ΔH" at={-100} />
		<QStrip lines={Q1} under={U1({dt: -100, q: -100, c: -100, m: -100, M: -100, d726: -100})} />
		<Crossed x={160} y={560} text="ΔHc = −12.540 ÷ 1.10 = −11.4 kJ mol⁻¹" at={KE.slip} cross={KE.gram} note="÷ grams gives kJ per gram; ΔHc is per mole of fuel" size={40} />
		<AnsQ1 a={-100} b={-100} />
		<Checks4 ticks={{0: [-100], 1: [-100], 2: [-100], 3: [-100]}} />
		{void KE.twelve}{void INK_SOFT}
	</Overlay>
);
