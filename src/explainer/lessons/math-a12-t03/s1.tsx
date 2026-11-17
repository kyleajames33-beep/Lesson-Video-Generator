// Scenes 1 to 6: t02's tide frame (the band loops: periodic), midline and amplitude on the board and the graph, the
// period and a, cos starts at its peak (the sine ghost slides left 3 h onto it), h(4) = 3 m, and the two times the
// level is 5.25 m (inverse cos in radians and symmetry; the band sits on the line twice).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {HandTag, LiveReadoutBoard, SceneHeading, fnPath, kf, regionPath, smooth} from '../../math/studio';
import {K1, K2, K3, K4, K5, K6} from './cuemap';
import {AR, Ac, AnswerBox, Arw, BR, BROWN, BoxCard, CR, Cc, Chip, GREY, Gy, HBracket, Hand, INK, KR, Kc, Lb, PI, Ring, Row, SlotEq, Slip, T02FinalFrame, Task, TideRig, boardY, hM, TL1} from './parts';

export const RC = 1236;
const SLOTS = {x: RC, y: 178};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const t = kf(fr, [[k.same - 4, 6], [k.same + 150, 18]], false);
	const lay = smooth(prog(fr, k.build - 6, 34));
	const trailTo = Math.min(12, t), trail2 = t > 12 ? t - 12 : 0;
	return (
		<>
			{fr < 1 ? <T02FinalFrame /> : <>
				<SceneHeading text="Modelling a tide" at={10} size={44} />
				<TideRig t={t} lay={lay} cursor={prog(fr, k.same - 4, 10)} readout={{old: 1 - lay, strip: lay}}
					trail={{from: 6, to: trailTo, o: prog(fr, k.same, 8)}}
					dots={[{t: 0, h: 7.5, o: 1, label: 'high tide 7.5 m'}, {t: 6, h: 1.5, o: 1, label: 'low tide 1.5 m'}]}>
					{m => trail2 > 0.01 ? <g clipPath={m.clip}><path d={fnPath(m, hM, 0, trail2, 200)} stroke={GREY} strokeWidth={6} strokeDasharray="2 12" strokeLinecap="round" fill="none" /></g> : null}
				</TideRig>
				<Chip x={96} y={96} at={-300} out={6} size={34} color={BROWN}>Next: modelling with trig functions</Chip>
				<Chip x={1500} y={300} at={-300} out={k.it} size={52} color={KR.ink}>h(t) = ?</Chip>
				<Chip x={1100} y={110} at={k.it} out={k.build} size={36} color={KR.ink}>periodic: h(t) = k cos(at) + c?</Chip>
				<HandTag x={900} y={120} text="same pattern again" at={k.same + 20} out={k.it} size={38} color={GREY} />
				<SlotEq x={SLOTS.x} y={SLOTS.y} at={k.build + 20} k={{at: 9e9, v: ''}} a={{at: 9e9, v: ''}} c={{at: 9e9, v: ''}} />
				<Hand x={RC} y={268} at={k.build + 30} size={30} color={GREY}><Gy>Some sources write a cos(bt) + d.</Gy></Hand>
			</>}
		</>
	);
};

// ---------- the tide board for scenes 2 to 6 ----------
const Givens: React.FC<{at?: number; out?: number}> = ({at = -30, out}) => <BoxCard x={RC} y={300} w={640} at={at} out={out} size={38} title="given">high 7.5 m at t = 0<br />low 1.5 m at t = 6</BoxCard>;

// ---------- 2. midline and amplitude ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const t = kf(fr, [[0, 6], [k.water, 6], [k.water + 90, 12]]);
	const glow = prog(fr, k.so, 12);
	return (
		<>
			<SceneHeading text="Middle, then half the gap" at={4} size={44} />
			<TideRig t={t} cursor={1} mid={prog(fr, k.five, 14)} amp={prog(fr, k.three, 14)} trail={{from: 0, to: 12, o: 1}}
				dots={[{t: 0, h: 7.5, o: 1, label: '7.5'}, {t: 6, h: 1.5, o: 1, label: '1.5'}]}>
				{m => <>
					<Lb at={[m.p(9, 0)[0], m.p(0, 7.9)[1]]} o={glow} color={KR.ink} size={34}>4.5 + 3 = 7.5</Lb>
					<Lb at={[m.p(9, 0)[0], m.p(0, 0.5)[1]]} o={glow} color={KR.ink} size={34}>4.5 − 3 = 1.5</Lb>
				</>}
			</TideRig>
			<SlotEq x={SLOTS.x} y={SLOTS.y} k={{at: k.three, v: '3'}} a={{at: 9e9, v: ''}} c={{at: k.five, v: '4.5'}} />
			<Givens />
			<HandTag x={TL1.bx + 230} y={boardY(TL1.by, TL1.bw, 4.5) - 60} text="middle" at={k.five} size={38} color={CR.ink} />
			<HandTag x={TL1.bx + 250} y={boardY(TL1.by, TL1.bw, 6.6)} text="half the gap" at={k.three} size={36} color={KR.ink} />
			<Row x={RC} y={480} at={k.mid} size={42} small={32} dim={prog(fr, k.amp, 12)}><Cc>c = (7.5 + 1.5) ÷ 2 = 4.5</Cc></Row>
			<Row x={RC} y={550} at={k.amp + 60} size={42} small={32}><Kc>k = (7.5 − 1.5) ÷ 2 = 3</Kc></Row>
			<Hand x={RC} y={630} at={k.water} size={34} color={GREY} w={640}>as far above the middle as below it</Hand>
		</>
	);
};

// ---------- 3. the period, and a ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const t = kf(fr, [[0, 12], [k.hours - 10, 12], [k.hours + 10, 6], [k.hours + 100, 12]]);
	const tw = kf(fr, [[k.one, 0], [k.six - 20, 12]]);
	return (
		<>
			<SceneHeading text="The period, and a" at={4} size={44} />
			<TideRig t={t} cursor={1} mid={1 - prog(fr, k.hours, 14) * 0.6} trail={{from: 0, to: 12, o: 1}}
				dots={[{t: 0, h: 7.5, o: 1}, {t: 6, h: 1.5, o: 1}, {t: 12, h: 7.5, o: prog(fr, k.hours, 12), hollow: true, label: 'high again'}]}>
				{m => <>
					<HBracket x0={m.p(0, 0)[0]} x1={m.p(6, 0)[0]} y={m.p(0, 8.3)[1]} o={prog(fr, k.half, 12) * (1 - prog(fr, k.hours, 12))} color={AR.stroke} label="half a cycle" />
					<HBracket x0={m.p(0, 0)[0]} x1={m.p(12, 0)[0]} y={m.p(0, 8.3)[1]} o={prog(fr, k.hours, 12)} color={AR.stroke} label="period 12 h" />
				</>}
			</TideRig>
			<SlotEq x={SLOTS.x} y={SLOTS.y} k={{at: -30, v: '3'}} a={{at: k.six, v: 'π/6'}} c={{at: -30, v: '4.5'}} />
			<Chip x={RC} y={300} at={k.assume} size={32} color={GREY}>smooth wave, consecutive tides</Chip>
			<LiveReadoutBoard x={RC} y={400} width={620} at={k.one} out={k.rule + 20} inline rows={[{label: 't', value: tw, digits: 1, unit: 'h', role: 'a'}, {label: 'inside at', value: (PI * tw) / 6, text: tw > 11.97 ? '2π' : ((PI * tw) / 6).toFixed(2), role: 'a'}]} />
			<Row x={RC} y={600} at={k.six} size={46} small={32}><Ac>a = 2π ÷ 12 = π/6</Ac></Row>
			<Chip x={RC} y={690} at={k.rule} size={32} color={GREY}>period = 2π ÷ a, so a = 2π ÷ period</Chip>
		</>
	);
};

// ---------- 4. choose the curve ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const draw = smooth(prog(fr, k.five, 50)) * 12;
	const t = fr < k.check ? draw : kf(fr, [[k.check, 12], [k.six, 6]]);
	const sl = smooth(prog(fr, k.left - 30, 60)) * 3;
	const ghostO = prog(fr, k.sine, 12) * (1 - prog(fr, k.but + 20, 14));
	return (
		<>
			<SceneHeading text="Start at a peak: cos" at={4} size={44} />
			<TideRig t={t} cursor={1} drawTo={draw} dots={[{t: 0, h: 7.5, o: 1}, {t: 6, h: 1.5, o: 1}, {t: 12, h: 7.5, o: 1, hollow: true}]}>
				{m => <>
					<Ring at={m.p(6, 1.5)} o={prog(fr, k.tide, 12)} r={24} color={GOODC} />
					{ghostO > 0.01 ? <g clipPath={m.clip} opacity={ghostO}><path d={fnPath(m, v => 3 * Math.sin((PI * (v + sl)) / 6) + 4.5, -0.4, 12.6, 300)} stroke={BR.stroke} strokeWidth={6} strokeDasharray="14 10" fill="none" /></g> : null}
					<Lb at={[m.p(3, 0)[0], m.p(0, 8.25)[1]]} o={prog(fr, k.left, 12) * (1 - prog(fr, k.but + 20, 14))} color={BR.ink} hand size={38}>left 3 h: same curve</Lb>
				</>}
			</TideRig>
			<SlotEq x={SLOTS.x} y={SLOTS.y} k={{at: -30, v: '3'}} a={{at: -30, v: 'π/6'}} c={{at: -30, v: '4.5'}} frame={k.five} />
			<CosThumb at={k.peak} />
			<HandTag x={RC + 330} y={350} text="starts at a peak: cos" at={k.peak + 10} size={36} color={INK} />
			<Row x={RC} y={520} at={k.tide - 40} size={36} small={30}>{'t = 6: inside π, cos π = −1,\nh = −3 + 4.5 = 1.5 ✓'}</Row>
			<Hand x={RC} y={650} at={k.sine} out={k.but + 40} size={32} color={BR.ink} w={640}>sin(πt/6 + π/2) = sin(π/6 (t + 3)): left 3 hours</Hand>
		</>
	);
};
const GOODC = '#2e7d4f';
/** A small grey y = cos x thumbnail with its peak at 0 ringed. */
const CosThumb: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o < 0.01) return null;
	const X = (v: number) => 20 + ((v + 0.5) / (2 * PI + 1)) * 260, Y = (v: number) => 70 - v * 46;
	let d = ''; for (let i = 0; i <= 80; i++) {const v = -0.5 + ((2 * PI + 1) * i) / 80; d += `${i ? 'L' : 'M'}${X(v).toFixed(1)},${Y(Math.cos(v)).toFixed(1)}`;}
	return <svg width={300} height={140} style={{position: 'absolute', left: RC, top: 300, opacity: o, overflow: 'visible', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)'}}>
		<line x1={10} x2={290} y1={70} y2={70} stroke={GREY} strokeWidth={2} /><line x1={X(0)} x2={X(0)} y1={10} y2={130} stroke={GREY} strokeWidth={2} />
		<path d={d} fill="none" stroke={GREY} strokeWidth={5} /><circle cx={X(0)} cy={Y(1)} r={14} fill="none" stroke={INK} strokeWidth={4} />
		<text x={200} y={128} style={{fontFamily: 'inherit', fontWeight: 700, fontSize: 28, fill: GREY}}>y = cos x</text>
	</svg>;
};

// ---------- 5. use the model ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const t = kf(fr, [[k.what, 0], [k.what + 80, 4]]);
	return (
		<>
			<SceneHeading text="Use the model: the level after 4 hours" at={4} size={44} />
			<TideRig t={t} cursor={1} drawTo={12} dots={[{t: 4, h: 3, o: prog(fr, k.metres, 12)}]}>
				{m => <>
					<Ring at={m.p(4, 3)} o={prog(fr, k.metres, 12)} r={24} color={GOODC} />
					<Arw from={m.p(3.6, 3.7)} to={m.p(4.6, 2.3)} o={prog(fr, k.falling, 12)} color={INK} width={7} />
					<HBracket x0={m.p(4, 0)[0]} x1={m.p(6, 0)[0]} y={m.p(0, 0.9)[1]} o={prog(fr, k.falling + 20, 12)} color={GREY} label="2 h to low tide" size={30} />
				</>}
			</TideRig>
			<Task x={RC} y={170} w={640} at={-30} size={40}>Find h(4).</Task>
			<BoxCard x={RC} y={270} w={640} at={-30} size={36} title="given">h(t) = 3cos(πt/6) + 4.5<br />t in hours, h in metres</BoxCard>
			<Row x={RC} y={440} at={k.inside} size={38} small={30} dim={prog(fr, k.metres, 12)}>{'h(4) = 3cos(4π/6) + 4.5\n     = 3cos(2π/3) + 4.5'}</Row>
			<AnswerBox x={RC} y={570} at={k.metres} size={38}>h(4) = 3(−½) + 4.5 = 3 m</AnswerBox>
			<div style={{position: 'absolute', left: RC, top: 680}}><Slip x={0} y={0} w={600} at={k.three + 20} strikeAt={k.three + 34} size={34} caption="the inside is πt/6, not t">3cos 4 + 4.5 ≈ 2.54</Slip></div>
			<HandTag x={TL1.gx + 420} y={TL1.gy + 300} text="falling" at={k.falling} size={40} color={INK} />
		</>
	);
};

// ---------- 6. solve: when is the level 5.25 m? ----------
const T1 = (6 * Math.acos(0.25)) / PI, T2 = 12 - T1;
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const t = kf(fr, [[0, 4], [k.t1 - 30, 4], [k.t1 + 20, T1], [k.eight2 - 40, T1], [k.eight2 + 10, T2]]);
	const lv = prog(fr, k.times, 12);
	const shade = prog(fr, k.so + 40, 16);
	return (
		<>
			<SceneHeading text="When is the level 5.25 m?" at={4} size={44} />
			<TideRig t={t} cursor={1} level={{h: 5.25, o: lv, label: '5.25 m'}}>
				{m => <>
					{shade > 0.01 ? <g opacity={shade * 0.85}><path d={regionPath(m, hM, 0, T1, () => 5.25)} fill={KR.soft} /><path d={regionPath(m, hM, T2, 12, () => 5.25)} fill={KR.soft} /></g> : null}
					<g clipPath={m.clip}><path d={fnPath(m, hM, 0, 12, 300)} stroke={INK} strokeWidth={7} fill="none" /></g>
					{[T1, T2].map((X, i) => <Ring key={i} at={m.p(X, 5.25)} o={prog(fr, i ? k.eight2 + 10 : k.t1 + 20, 10)} r={20} />)}
					{(() => {const o = prog(fr, k.sym, 12) * (1 - prog(fr, k.so, 12)), [px] = m.p(6, 0); return o > 0.01 ? <g opacity={o}><line x1={px} x2={px} y1={m.box.top} y2={m.box.top + m.box.height} stroke={BR.stroke} strokeWidth={4} strokeDasharray="5 9" /><Lb at={[px, m.box.top + 34]} o={1} color={BR.ink} hand size={36}>symmetry about low tide</Lb></g> : null;})()}
					<Lb at={[m.p(6, 0)[0], m.p(0, 7.1)[1]]} o={shade} color={KR.ink} size={30}>level at least 5.25 m (endpoints approximate)</Lb>
				</>}
			</TideRig>
			<Task x={RC} y={150} w={640} at={-30} size={34}>When is h = 5.25 m, for 0 ≤ t ≤ 12?</Task>
			<Chip x={RC} y={268} at={k.times} out={k.inverse} size={32} color={KR.ink}>1 cycle, level inside: expect 2</Chip>
			<Chip x={RC} y={268} at={k.inverse + 20} size={32} color={GREY}>calculator, radians: cos⁻¹(0.25) ≈ 1.318</Chip>
			<Row x={RC} y={350} at={k.three} size={38} small={30} dim={prog(fr, k.quarter, 12)}>3cos(πt/6) + 4.5 = 5.25</Row>
			<Row x={RC} y={412} at={k.quarter} size={38} small={30} dim={prog(fr, k.eight1, 12)}>cos(πt/6) = 0.25</Row>
			<Row x={RC} y={474} at={k.eight1} size={38} small={30} dim={prog(fr, k.sym, 12)}>πt/6 ≈ 1.318: t ≈ 2.52 h</Row>
			<Row x={RC} y={536} at={k.sym + 20} size={38} small={30} dim={prog(fr, k.so, 12)}>πt/6 ≈ 2π − 1.318: t ≈ 9.48 h</Row>
			<AnswerBox x={RC} y={610} at={k.eight2 + 10} size={40}>t ≈ 2.52 h or t ≈ 9.48 h</AnswerBox>
			<div style={{position: 'absolute', left: RC, top: 710}}><Slip x={0} y={0} w={620} at={k.so - 10} strikeAt={k.so + 4} size={34} caption="one cycle, level inside: two times">t ≈ 2.52 only</Slip></div>
			<HandTag x={TL1.gx + 60} y={TL1.gy + 20} text="two times" at={k.times + 10} out={k.inverse} size={38} color={KR.ink} />
		</>
	);
};
export {Kc, CR, INK};
