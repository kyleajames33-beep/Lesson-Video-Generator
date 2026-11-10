// Scenes 1 to 5: the hook (i05's rectangles, then the easing storm filling the gauge beside the rate graph), one
// strip (rate × width, its units), the sum with an estimate gauge beside the true gauge (left over, right under),
// thinner strips with the estimates closing on 1 cm, and the region with continuity.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, prog} from '../../kit';
import {CARD, HandTag, LiveReadoutBoard, RefinementTable, SceneHeading, StudioAreaFill, StudioRiemannStrips, fnPath, kf, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {I05FinalFrame} from '../math-a12-i05/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMB, BLUE, BoxCard, Chip, GREY, L, Line, MiniPlot, PI, PLabel, R, RED, RainRig, V, VIOLET, rate, total} from './parts';

const RIG = {x: 30, w: 540};
const PX = 600;
const WIN = {x: [-0.1, 1.75] as [number, number], y: [-0.08, 1.15] as [number, number]};
const XT1 = [{value: PI / 4, label: 'π/4', sub: '≈ 0.79'}, {value: PI / 2, label: 'π/2', sub: '≈ 1.57'}];
const XT = [{value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}];
const YT = [{value: 0.5, label: '0.5'}, {value: 1, label: '1'}];
const ring = (m: PlotMap, X: number, Y: number, o: number, color = VIOLET) => {const p = m.p(X, Y); return <circle cx={p[0]} cy={p[1]} r={20} fill="none" stroke={color} strokeWidth={5} opacity={o} />;};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const f = useCurrentFrame();
	const k = K1;
	const sw = prog(f, k.storm - 12, 16);
	if (sw <= 0) return <I05FinalFrame />;
	const xc = kf(f, [[k.one + 20, 0], [k.one + 110, PI / 2]]);
	const running = f >= k.one + 20;
	const done = f >= k.one + 112;
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><I05FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<SceneHeading text="How much rain fell into the gauge?" at={k.storm - 12} size={56} />
				<RainRig x={RIG.x} w={RIG.w} trueCm={total(xc)} rainRate={f < k.one + 20 ? 1 : rate(xc)} />
				<StudioRiemannStrips x={PX} y={150} width={1290} height={560} window={WIN} fn={rate} a={0} b={PI / 2} n={8} curveColor={VIOLET} xTicks={XT1} yTicks={YT} xLabel="time x (hours)" yLabel="rain rate (cm per hour)" at={-30}>
					{m => <>
						{running ? (() => {const p = m.p(xc, rate(xc)); return <circle cx={p[0]} cy={p[1]} r={13} fill={VIOLET} stroke={CARD} strokeWidth={4} />;})() : null}
						{ring(m, 0, 1, prog(f, k.start, 12))}
						<PLabel p={m.p(0.06, 1.1)} text="1 cm per hour" color={VIOLET} size={38} o={prog(f, k.start, 12)} />
						{ring(m, PI / 2, 0, prog(f, k.stopped, 12))}
						<PLabel p={m.p(1.05, 0.12)} text="0: the rain has stopped" color={VIOLET} size={36} o={prog(f, k.stopped, 12)} />
						<PLabel p={m.p(0.6, 0.62)} text="y = cos x: the rain rate" color={VIOLET} size={40} o={prog(f, k.rate, 12)} />
					</>}
				</StudioRiemannStrips>
				<Chip x={1250} y={200} at={k.how} size={40} color={AMB}>total rain from 0 to π/2 hours?</Chip>
				<Chip x={1250} y={290} at={k.multiply} size={34} color={GREY}><span style={{textDecoration: 'line-through', textDecorationColor: RED}}>rate × time</span>: the rate keeps changing</Chip>
				<LiveReadoutBoard x={PX} y={850} width={420} at={-30} inline size={48} labelSize={30} rows={[{label: 'time', value: xc, digits: 2, unit: 'h'}]} />
				<LiveReadoutBoard x={PX + 435} y={850} width={420} at={-30} inline size={48} labelSize={30} rows={[{label: 'rain rate', value: f < k.one + 20 ? 1 : rate(xc), digits: 2, role: 'gradient', unit: 'cm/h'}]} />
				<LiveReadoutBoard x={PX + 870} y={850} width={420} at={-30} inline size={48} labelSize={30} rows={[{label: 'rain so far', value: total(xc), digits: 2, unit: 'cm', text: done ? '?' : undefined}]} />
				<HandTag x={PX + 700} y={110} text="adding thin rectangles gives an estimate" at={k.but} size={38} color={INK} />
			</div>
		</>
	);
};

// ---------- 2. one strip ----------
const SL = {i: 2, n: 8};
const slice = Math.cos((SL.i * PI) / 16) * (PI / 16);
export const S02: React.FC = () => {
	const f = useCurrentFrame();
	const k = K2;
	const x0 = (SL.i * PI) / 16, x1 = ((SL.i + 1) * PI) / 16;
	return (
		<>
			<SceneHeading text="One strip: rate × width" at={4} size={56} />
			<RainRig x={RIG.x} w={RIG.w} trueCm={smooth(prog(f, k.each, 30)) * slice} />
			<StudioRiemannStrips x={PX} y={150} width={1290} height={490} window={WIN} fn={rate} a={0} b={PI / 2} n={8} curveColor={VIOLET} highlight={{index: SL.i, at: -30}} xTicks={XT} yTicks={YT} xLabel="time x (hours)" yLabel="rain rate (cm per hour)" at={-30}>
				{m => {const a = m.p(x0, 0), b = m.p(x1, 0), t = m.p(x0, Math.cos(x0)); const wo = prog(f, k.width, 12), ho = prog(f, k.call, 12); return <>
					<g opacity={wo}><path d={`M${a[0]},${a[1] + 18} v14 H${b[0]} v-14`} stroke={INK} strokeWidth={4} fill="none" /><text x={(a[0] + b[0]) / 2} y={a[1] + 70} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: INK}}>Δx</text></g>
					<g opacity={ho}><path d={`M${a[0] - 18},${a[1]} h-14 V${t[1]} h14`} stroke={VIOLET} strokeWidth={4} fill="none" /><text x={a[0] - 40} y={(a[1] + t[1]) / 2 + 12} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: VIOLET}} stroke={CARD} strokeWidth={7} paintOrder="stroke">f(x)</text></g>
					<path d={fnPath(m, rate, x0, x1)} stroke={VIOLET} strokeWidth={14} fill="none" strokeLinecap="round" opacity={0.5 * prog(f, k.hardly, 10)} />
					<PLabel p={m.p(0.62, 1.04)} text="the rate hardly changes across one strip" color={VIOLET} size={36} hand o={prog(f, k.hardly, 12)} />
					<PLabel p={m.p(0.9, 0.5)} text="≈ the rain in this strip" color="#1f6f66" size={38} hand o={prog(f, k.each, 12)} />
				</>;}}
			</StudioRiemannStrips>
			<BoxCard x={PX} y={670} w={1290} at={-30} out={k.means - 4} size={44} title="one strip">What does one thin rectangle&apos;s area mean here?</BoxCard>
			<Line x={PX + 10} y={670} at={k.means} out={k.so - 4} size={42}>Δx: a small change in x, here a short stretch of time</Line>
			<LiveReadoutBoard x={PX} y={760} width={1290} at={k.over} out={k.so - 4} inline size={48} labelSize={30} rows={[
				{label: 'rate at the start of the strip', value: Math.cos(x0), digits: 2, role: 'gradient', unit: 'cm/h'},
				{label: 'rate at the end of the strip', value: Math.cos(x1), digits: 2, role: 'gradient', unit: 'cm/h'},
			]} />
			<Line x={PX + 10} y={670} at={k.so} size={50}>rain ≈ rate × time</Line>
			<Line x={PX + 10} y={760} at={k.graph} size={50}>= <V>f(x)</V> × Δx = the rectangle&apos;s area</Line>
			<Line x={PX + 10} y={860} at={k.cm} size={44}>(cm per hour) × (<span style={{textDecoration: 'line-through', textDecorationColor: '#8a8378'}}>hours</span>) = cm</Line>
			<HandTag x={PX + 760} y={900} text="rate × time = rain" at={k.cm + 20} size={44} color={BLUE} />
		</>
	);
};

// ---------- 3. add the strips ----------
const leftAreas = (n: number) => Array.from({length: n}, (_, i) => Math.cos((i * PI) / (2 * n)) * (PI / (2 * n)));
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const count = f < k.four ? 0 : Math.min(4, Math.floor((f - k.four) / 20) + 1);
	const s = kf(f, [[k.height + 30, 0], [k.height + 90, 1]]);
	const rule = f >= k.right ? 'right' : f >= k.height + 30 ? 'sample' : 'left';
	const est = rule === 'left' ? leftAreas(4).slice(0, count).reduce((a, b) => a + b, 0) : rule === 'right' ? R(4) : Array.from({length: 4}, (_, i) => Math.cos(((i + s) * PI) / 8) * (PI / 8)).reduce((a, b) => a + b, 0);
	const lo = prog(f, k.total, 12), ro = prog(f, k.gives, 12);
	return (
		<>
			<SceneHeading text="Add the strips: an estimate of the total" at={4} size={56} />
			<RainRig x={RIG.x} w={RIG.w} trueCm={1} estimate={est} bracket={{lo: R(4), hi: L(4), o: prog(f, k.between, 12)}} />
			<StudioRiemannStrips x={PX} y={150} width={1290} height={490} window={WIN} fn={rate} a={0} b={PI / 2} n={4} rule={rule} sample={s} slivers={{at: k.above, out: k.height}} curveColor={VIOLET} xTicks={XT} yTicks={YT} xLabel="time x (hours)" yLabel="rain rate (cm per hour)" at={-30}
				readout={{x: 1300, y: 670, width: 590, label: 'sum (cm)', digits: 2}}>
				{m => <>
					{ring(m, 0, 0, prog(f, k.estimates, 12), INK)}{ring(m, PI / 2, 0, prog(f, k.estimates, 12), INK)}
					<PLabel p={m.p(0.02, -0.06)} dy={-24} text="a" size={36} o={prog(f, k.estimates, 12)} />
					<PLabel p={m.p(PI / 2, -0.06)} dx={-30} dy={-24} text="b" size={36} o={prog(f, k.estimates, 12)} />
					<PLabel p={m.p(0.85, 1.02)} text="left heights: too big here" color="#7a4600" size={38} hand o={prog(f, k.over, 12) * (1 - prog(f, k.height, 12))} />
					<PLabel p={m.p(0.85, 1.02)} text="right heights: under the curve" color="#4f4840" size={38} hand o={prog(f, k.under, 12)} />
				</>}
			</StudioRiemannStrips>
			<HandTag x={PX + 10} y={700} text="Σ: add them all up" at={k.sign} size={42} color={BLUE} />
			<Line x={PX + 10} y={730} at={k.sum} size={50}>Σ <V>f(x)</V>Δx, from a to b</Line>
			<Line x={PX + 10} y={840} at={k.total} size={44}><span style={{opacity: lo}}>left ≈ 1.18 cm: over</span><span style={{opacity: ro}}>   right ≈ 0.79 cm: under</span></Line>
			<HandTag x={PX + 760} y={930} text="true total in here" at={k.between} size={40} color="#7a4600" />
		</>
	);
};

// ---------- 4. thinner strips ----------
const RC = 1440;
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const nKeys = [{frame: -1000, value: 4}, {frame: k.eight, value: 8}, {frame: k.sixteen, value: 16}, {frame: k.thirty, value: 32}];
	const n = [...nKeys].reverse().find(q => f >= q.frame)!.value;
	const right = f >= k.mean;
	return (
		<>
			<SceneHeading text="Thinner strips" at={4} size={56} />
			<RainRig x={RIG.x} w={RIG.w} trueCm={1} estimate={right ? R(32) : L(n)} oneLine={{o: prog(f, k.both, 12), text: '≈ 1 cm'}} />
			<StudioRiemannStrips x={PX} y={150} width={800} height={810} window={WIN} fn={rate} a={0} b={PI / 2} nKeys={nKeys} rule={right ? 'right' : 'left'} curveColor={VIOLET} xTicks={XT} yTicks={YT} xLabel="time x (hours)" yLabel="rain rate (cm per hour)" at={-30}
				stepper={{x: PX + 90, y: 870, values: [4, 8, 16, 32], label: 'strips n'}}>
				{m => <PLabel p={m.p(0.5, 1.06)} text="thinner: closer" color="#1f6f66" size={40} hand o={prog(f, k.why, 12)} />}
			</StudioRiemannStrips>
			<Line x={RC} y={150} at={k.dx} size={46}>Δx = (b − a)/n</Line>
			<BoxCard x={RC} y={235} w={450} at={k.so} size={34} title="given">a = 0, b = π/2, n = 4: Δx = π/8</BoxCard>
			<RefinementTable x={RC} y={390} w={450} exact={1} digits={2} columns={right ? ['left', 'right'] : ['left']} rows={[{n: 4, left: L(4), right: R(4), at: -30}, {n: 8, left: L(8), right: R(8), at: k.eight}, {n: 16, left: L(16), right: R(16), at: k.sixteen}, {n: 32, left: L(32), right: R(32), at: k.thirty}]} />
			<Chip x={RC} y={830} at={k.later} size={36} color={GREY}>exact value: a later video</Chip>
			<HandTag x={RC + 10} y={920} text="≈ 1 cm = 10 mm" at={k.both} size={42} color={INK} />
		</>
	);
};

// ---------- 5. the region, and continuity ----------
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const px = kf(f, [[k.paper - 40, 0], [k.paper + 20, PI / 2]]);
	const pen = prog(f, k.paper - 40, 8) * (1 - prog(f, k.jump, 10));
	return (
		<>
			<SceneHeading text="The region, and continuity" at={4} size={56} />
			<RainRig x={RIG.x} w={RIG.w} trueCm={1} oneLine={{o: 1, text: '1 cm'}} />
			<StudioAreaFill x={PX} y={150} width={820} height={810} window={WIN} fn={rate} a={0} b={PI / 2} sweep={{at: k.so, dur: 45}} curveColor={VIOLET} bounds={{a: '', b: '', at: k.region}}
				label={{X: 0.62, Y: 0.35, text: 'total change', at: k.region}} xTicks={XT} yTicks={YT} xLabel="time x (hours)" yLabel="rain rate (cm per hour)" at={-30}>
				{m => {const p = m.p(px, rate(px)); return <>
					<circle cx={p[0]} cy={p[1]} r={14} fill={INK} stroke={CARD} strokeWidth={4} opacity={pen} />
					<PLabel p={m.p(0.03, 0.08)} text="x = a = 0" size={34} o={prog(f, k.region, 12)} />
					<PLabel p={m.p(PI / 2 - 0.03, 0.2)} text="x = b = π/2" size={34} anchor="end" o={prog(f, k.region, 12)} />
					<PLabel p={m.p(0.7, 1.0)} text="continuous: no lift" color={INK} size={40} hand o={prog(f, k.paper, 12)} />
				</>;}}
			</StudioAreaFill>
			<BoxCard x={RC} y={150} w={450} at={k.so} size={36} border="#1f6f66">total change = area of the region = the rain in the gauge</BoxCard>
			<BoxCard x={RC} y={350} w={450} at={k.works} size={32} title="region">between y = f(x) and the x-axis, with f(x) ≥ 0</BoxCard>
			<BoxCard x={RC} y={530} w={450} at={k.cont} out={k.jump - 4} size={34} title="continuous">you can draw it without lifting the pen</BoxCard>
			<MiniPlot x={RC} y={520} w={450} h={300} win={{x: [-0.1, 1.7], y: [-0.1, 0.9]}} xTicks={[]} yTicks={[0.6]} at={k.jump}
				curves={[{fn: () => 0.6, from: 0, to: 0.8, color: VIOLET}, {fn: () => 0, from: 0.8, to: 1.6, color: VIOLET}]}>
				{m => {const a = m.p(0.8, 0.6), b = m.p(0.8, 0); return <>
					<circle cx={a[0]} cy={a[1]} r={11} fill={CARD} stroke={VIOLET} strokeWidth={4} />
					<circle cx={b[0]} cy={b[1]} r={11} fill={VIOLET} />
					<line x1={a[0]} x2={a[0]} y1={a[1] + 14} y2={b[1] - 14} stroke={RED} strokeWidth={3} strokeDasharray="6 6" opacity={prog(f, k.lift, 10)} />
					<PLabel p={m.p(0.85, 0.75)} text="jump: pen lifts" color={RED} size={34} hand o={prog(f, k.lift, 12)} />
				</>;}}
			</MiniPlot>
			<Chip x={RC} y={860} at={k.topic} size={34} color={GREY}>this topic: continuous f</Chip>
		</>
	);
};
