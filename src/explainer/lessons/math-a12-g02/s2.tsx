// Scenes 5 to 8: the boat on the canal (displacement 0 but distance 8/3 m: the signed area, the split at t = 2 and
// the flip), trapezia on five readings filling tank B, the quick sort on the exam desk, and the framed memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {CARD, DecisionTree, FrameSvg, HandTag, LiveReadoutBoard, SceneHeading, StudioPlot, SvgPlate, fnPath, kf, plateHeight, regionPath, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {AnswerBox, BOAT, BoxCard, Chip, DESK, DOWN, FONT_DISPLAY, FONT_HAND, FramedCard, GREY, Hand, INK, IconFamily, IconTrap, KR, Row, Slip, TANK, TOWN, TRAP_FILL, TRAP_STROKE, Tank, Task, TreeChip, UP, WATER, WATER_LINE} from './parts';
import {QCard} from './s1';

// ---------- 5. worked problem 3: a distance, when the velocity changes sign ----------
const v5 = (t: number) => t * t - 2 * t;
const x5 = (t: number) => (t * t * t) / 3 - t * t;
const dist5 = (t: number) => (t <= 2 ? -x5(t) : 4 / 3 + (x5(t) + 4 / 3));
const CANAL = {x: 96, y: 170, w: 1060, h: 150, range: [-1.9, 0.75] as [number, number]};
const cX = (v: number) => CANAL.x + ((v - CANAL.range[0]) / (CANAL.range[1] - CANAL.range[0])) * CANAL.w;
/** The canal strip with the boat (turned to sail along it, bow towards +x) at position p metres. */
const Canal: React.FC<{p: number; trail: number}> = ({p, trail}) => {
	const L = 190, bw = (L * (BOAT.box[2] - BOAT.box[0])) / (BOAT.box[3] - BOAT.box[1]), cy = CANAL.y + CANAL.h / 2;
	return <FrameSvg>
		<rect x={CANAL.x - 20} y={CANAL.y - 22} width={CANAL.w + 40} height={22} fill="#b9b08f" />
		<rect x={CANAL.x - 20} y={CANAL.y + CANAL.h} width={CANAL.w + 40} height={22} fill="#b9b08f" />
		<rect x={CANAL.x - 20} y={CANAL.y} width={CANAL.w + 40} height={CANAL.h} fill={WATER} opacity={0.5} />
		{[0.25, 0.75].map(q => <path key={q} d={`M${CANAL.x},${CANAL.y + CANAL.h * q} q40,-10 80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0`} fill="none" stroke={WATER_LINE} strokeWidth={2} opacity={0.35} />)}
		{trail > 0.01 ? <line x1={cX(0)} x2={cX(Math.min(0, p))} y1={cy + 40} y2={cy + 40} stroke={DOWN.stroke} strokeWidth={6} opacity={trail} strokeDasharray="10 8" /> : null}
		{[-1, 0].map(v => <g key={v}><line x1={cX(v)} x2={cX(v)} y1={CANAL.y + CANAL.h} y2={CANAL.y + CANAL.h + 22} stroke={INK} strokeWidth={4} /></g>)}
		<line x1={cX(0)} x2={cX(0)} y1={CANAL.y - 6} y2={CANAL.y + CANAL.h + 6} stroke={INK} strokeWidth={4} strokeDasharray="10 7" />
		<text x={cX(0) + 12} y={CANAL.y + 36} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: INK}}>start (0 m)</text>
		<text x={cX(-4 / 3)} y={CANAL.y + 36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: DOWN.ink}} opacity={trail}>−4/3 m</text>
		<g transform={`translate(${cX(p)},${cy}) rotate(90)`}><SvgPlate plate={BOAT} x={-bw / 2} y={-L / 2} w={bw} /></g>
	</FrameSvg>;
};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const t = kf(fr, [[k.neg, 0], [k.drifts + 30, 2], [k.forward + 6, 2], [k.forward + 66, 3]]);
	const flip = smooth(prog(fr, k.count, 26)), kk = 1 - 2 * flip;
	const fillO = prog(fr, k.zero, 14);
	return (
		<>
			<SceneHeading text="3. How far does it travel?" at={4} size={44} />
			<TreeChip label="an area or distance: split" at={k.how} x={1180} y={92} />
			<Canal p={x5(t)} trail={prog(fr, k.drifts, 14)} />
			<HandTag x={cX(-1.1)} y={CANAL.y + CANAL.h + 54} text="drifts back" at={k.drifts} out={k.split} size={36} color={DOWN.ink} />
			<HandTag x={cX(-0.4)} y={CANAL.y + CANAL.h + 54} text="comes forward" at={k.forward} out={k.split} size={36} color={UP.ink} />
			<HandTag x={cX(-1.6)} y={CANAL.y + CANAL.h + 54} text="displacement 0, but it moved" at={k.forward + 80} size={38} color={INK} />
			<StudioPlot x={80} y={380} width={760} height={470} window={{x: [-0.2, 3.3], y: [-1.5, 3.5]}} xTicks={[1, 2, 3]} yTicks={[-1, 1, 2, 3]} xLabel="t (s)" yLabel="v (m/s)" at={-300}>
				{m => <>
					{fillO > 0.01 ? <g clipPath={m.clip} opacity={fillO}>
						<path d={regionPath(m, tt => kk * v5(tt), 0, 2)} fill={flip > 0.5 ? UP.soft : DOWN.soft} stroke={flip > 0.5 ? UP.stroke : DOWN.stroke} strokeWidth={4} strokeDasharray={flip > 0.5 ? '12 8' : undefined} />
						<path d={regionPath(m, v5, 2, 3)} fill={UP.soft} stroke={UP.stroke} strokeWidth={3} />
					</g> : null}
					<g clipPath={m.clip}><path d={fnPath(m, v5, 0, 3, 200)} stroke={INK} strokeWidth={7} fill="none" /></g>
					{fr >= k.split ? <g opacity={prog(fr, k.split, 12)}><line x1={m.p(2, 0)[0]} x2={m.p(2, 0)[0]} y1={m.box.top} y2={m.box.top + m.box.height} stroke={GREY} strokeWidth={4} strokeDasharray="10 8" /></g> : null}
					<text x={m.p(1, 0)[0]} y={m.p(0, flip > 0.5 ? 0.35 : -0.45)[1]} textAnchor="middle" opacity={prog(fr, k.first, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: flip > 0.5 ? UP.ink : DOWN.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{flip > 0.5 ? '+4/3' : '−4/3'}</text>
					<text x={m.p(2.55, 0)[0]} y={m.p(0, 0.6)[1]} textAnchor="middle" opacity={prog(fr, k.second, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: UP.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">+4/3</text>
					<text x={m.p(1.6, 0)[0]} y={m.p(0, 2.9)[1]} textAnchor="middle" opacity={prog(fr, k.disp, 12) * (1 - prog(fr, k.split, 12))} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">signed total 0: displacement</text>
					{t > 0.001 && t < 2.999 ? <circle cx={m.p(t, v5(t))[0]} cy={m.p(t, v5(t))[1]} r={13} fill="#1f6fb2" stroke={CARD} strokeWidth={4} /> : null}
				</>}
			</StudioPlot>
			<LiveReadoutBoard x={870} y={380} width={390} at={-300} inline rows={[
				{label: 'time t', value: t, digits: 2, unit: 's'},
				{label: 'velocity', value: v5(t), digits: 2, unit: 'm/s', role: v5(t) < -1e-6 ? 'k' : 'b'},
				{label: 'position', value: x5(t), digits: 2, unit: 'm'},
				{label: 'distance', value: dist5(t), digits: 2, unit: 'm', role: 'answer'},
			]} />
			<Task x={1290} y={165} w={580} at={-30} size={36}>Find the distance travelled from t = 0 to t = 3.</Task>
			<BoxCard x={1290} y={322} w={580} at={-30} size={34} title="given">v = t² − 2t m/s, 0 ≤ t ≤ 3</BoxCard>
			<Row x={1290} y={448} at={k.zero} size={44} small={32} dim={prog(fr, k.first, 12)}>∫₀³ (t² − 2t) dt = 0</Row>
			<Row x={1290} y={508} at={k.first} size={44} small={32} dim={prog(fr, k.eight, 12)}>∫₀² (t² − 2t) dt = −4/3</Row>
			<Row x={1290} y={568} at={k.second} size={44} small={32} dim={prog(fr, k.eight, 12)}>∫₂³ (t² − 2t) dt = 4/3</Row>
			<AnswerBox x={1290} y={636} at={k.eight} size={40}>distance = 4/3 + 4/3 = 8/3 m</AnswerBox>
			<Hand x={1300} y={724} at={k.metre} size={32} color={GREY}>≈ 2.67 m</Hand>
			<Slip x={1290} y={780} at={k.classic} strikeAt={k.classic + 14} w={580} size={36} caption="0 m is the displacement">distance 0 m</Slip>
		</>
	);
};

// ---------- 6. worked problem 4: only a table ----------
const TT = [0, 2, 4, 6, 8], RR = [3, 5, 6, 4, 2];
const run = [8, 19, 29, 35];
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const tz = (i: number) => k.each + 12 + i * 34;
	const total = kf(fr, [[tz(0), 0], [tz(0) + 24, 8], [tz(1), 8], [tz(1) + 24, 19], [tz(2), 19], [tz(2) + 24, 29], [tz(3), 29], [tz(3) + 24, 35]]);
	const wig = prog(fr, k.know, 14) * (1 - prog(fr, k.know + 70, 20));
	const coef = prog(fr, k.twice, 12);
	const cell = (i: number) => 190 + i * 118;
	return (
		<>
			<SceneHeading text="4. Only a table of readings" at={4} size={44} />
			<TreeChip label="readings only: trapezia" at={k.read} x={760} y={92} />
			<Tank x={50} y={230} w={280} level={5 + total} max={50} start={{v: 5, o: 1, label: 'start'}} label="tank B" />
			<LiveReadoutBoard x={40} y={680} width={330} at={-300} rows={[{label: 'added so far', value: total, digits: 0, unit: 'L', role: 'a'}]} />
			<div style={{position: 'absolute', left: 400, top: 168, width: 790, background: CARD, borderRadius: 16, boxShadow: '0 14px 32px rgba(60,45,20,0.10)', padding: '6px 0', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK}}>
				{[['t (min)', TT], ['r (L/min)', RR]].map(([lab, vals], r) => <div key={r} style={{position: 'relative', height: 58, borderTop: r ? '2px solid #e4dccd' : undefined}}>
					<span style={{position: 'absolute', left: 18, top: 6, fontSize: 32, fontWeight: 700}}>{lab as string}</span>
					{(vals as number[]).map((v, i) => <span key={i} style={{position: 'absolute', left: cell(i), width: 100, textAlign: 'center', top: 4}}>{v}</span>)}
				</div>)}
				<div style={{position: 'relative', height: 58 * coef, overflow: 'hidden', borderTop: '2px solid #e4dccd', opacity: coef}}>
					<span style={{position: 'absolute', left: 18, top: 6, fontSize: 32, fontWeight: 700, color: KR.ink}}>counts</span>
					{[1, 2, 2, 2, 1].map((v, i) => <span key={i} style={{position: 'absolute', left: cell(i), width: 100, textAlign: 'center', top: 4, color: v === 2 ? KR.ink : UP.ink}}>{v}</span>)}
				</div>
			</div>
			<HandTag x={1010} y={420} text="ends once, insides twice" at={k.twice} size={36} color={KR.ink} anchor="middle" />
			<StudioPlot x={400} y={390} width={790} height={420} window={{x: [-0.5, 8.5], y: [0, 8.8]}} xTicks={[2, 4, 6, 8]} yTicks={[2, 4, 6]} xLabel="t (min)" yLabel="r (L/min)" at={-300}>
				{m => <>
					{TT.slice(0, -1).map((t0, i) => {const o = prog(fr, tz(i), 14); if (o < 0.01) return null; const [a, ya] = m.p(t0, RR[i]), [b, yb] = m.p(TT[i + 1], RR[i + 1]), [, y0] = m.p(0, 0); return <g key={i} opacity={o}><path d={`M${a},${y0} L${a},${ya} L${b},${yb} L${b},${y0} Z`} fill={TRAP_FILL} stroke={TRAP_STROKE} strokeWidth={4} />
						<text x={(a + b) / 2} y={y0 - 20} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: TRAP_STROKE}}>{run[i] - (i ? run[i - 1] : 0)}</text></g>;})}
					{wig > 0.01 ? <g clipPath={m.clip} opacity={wig}><path d={fnPath(m, t => {const i = Math.min(3, Math.floor(t / 2)), u = (t - TT[i]) / 2; return RR[i] + (RR[i + 1] - RR[i]) * u + 0.9 * Math.sin(Math.PI * u) * (i % 2 ? -1 : 1);}, 0, 8, 200)} stroke={GREY} strokeWidth={5} strokeDasharray="10 8" fill="none" /></g> : null}
					{TT.map((t, i) => <circle key={i} cx={m.p(t, RR[i])[0]} cy={m.p(t, RR[i])[1]} r={12} fill={INK} stroke={CARD} strokeWidth={4} opacity={prog(fr, k.eight - 10 + i * 5, 10)} />)}
				</>}
			</StudioPlot>
			<HandTag x={560} y={460} text="no formula: estimate the integral" at={k.cant} out={k.each} size={36} color={INK} />
			<HandTag x={560} y={460} text="the rate between readings is unknown" at={k.know} size={36} color={GREY} />
			<Task x={1230} y={165} w={640} at={-30} size={36}>Estimate the volume added over the 8 minutes.</Task>
			<BoxCard x={1230} y={318} w={640} at={-30} size={36} title="given">h = 2 min, n = 4 strips</BoxCard>
			<Row x={1230} y={452} at={k.use} size={40} small={30} dim={prog(fr, k.thats, 12)}>(h/2)[y₀ + 2(y₁ + y₂ + y₃) + y₄]</Row>
			<Row x={1230} y={512} at={k.thats} size={42} small={32} dim={prog(fr, k.tf, 12)}>= (2/2)[3 + 2(5 + 6 + 4) + 2]</Row>
			<AnswerBox x={1230} y={578} at={k.tf} size={46}>= 35 L (estimate)</AnswerBox>
			<Hand x={1236} y={668} at={k.about} size={28} color={GREY} w={630}>reference sheet: (b − a)/(2n){'{'}f(a) + f(b) + 2[f(x₁) + ... + f(xₙ₋₁)]{'}'} = (8/8)(35)</Hand>
			<Slip x={1230} y={780} at={k.tf + 50} strikeAt={k.tf + 64} w={640} size={32} caption="insides count twice">(2/2)(3 + 5 + 6 + 4 + 2) = 20</Slip>
		</>
	);
};

// ---------- 7. quick sort (three unseen questions) ----------
const DK = {x: 250, y: 150, w: 1420};
const dS = DK.w / (DESK.box[2] - DESK.box[0]);
/** The decision tree's four demand pills in a row at the top right, each lit at its cue. */
export const PillBar: React.FC<{x: number; y: number; q: string; items: readonly {label: string; litAt?: number}[]; size?: number}> = ({x, y, q, items, size = 28}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', left: x, top: y, display: 'flex', alignItems: 'center', gap: 12}}>
		<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: GREY}}>{q}</span>
		{items.map((it, i) => {const lit = it.litAt !== undefined ? prog(f, it.litAt, 12) : 0; return <span key={i} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: lit > 0.5 ? KR.ink : INK, background: lit > 0 ? `rgba(248,232,200,${0.3 + 0.7 * lit})` : CARD, border: `3px solid ${lit > 0.5 ? KR.stroke : 'rgba(60,45,20,0.2)'}`, borderRadius: 999, padding: '2px 16px 4px', whiteSpace: 'pre'}}>{it.label}</span>;})}
	</div>;
};
const Ring3: React.FC<{at: number; x: number; y: number}> = ({at, x, y}) => {
	const f = useCurrentFrame();
	return f >= at - 12 ? <FrameSvg><Countdown start={at} end={at + 90} x={x} y={y} r={38} /></FrameSvg> : null;
};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const o = (a: number) => prog(fr, a, 12);
	return (
		<>
			<SceneHeading text="Quick sort" at={4} size={44} />
			<PillBar x={470} y={98} q="asks for:" items={[{label: 'a function', litAt: k.func}, {label: 'a change'}, {label: 'an area', litAt: k.four}, {label: 'readings or no primitive', litAt: k.again}]} />
			<FrameSvg><SvgPlate plate={DESK} x={DK.x} y={DK.y + 30} w={DK.w} /></FrameSvg>
			<div style={{opacity: o(k.first - 10)}}><QCard x={380} y={250} w={760} size={34}>A town's population P thousand grows at the rate dP/dt = 3e^(0.5t) per year, with P = 10 at t = 0. Find P(t).</QCard></div>
			<Chip x={780} y={418} at={k.func} size={32} color={KR.ink}>Function? Plus C.</Chip>
			<div style={{opacity: o(k.second - 10)}}><QCard x={380} y={478} w={760} size={34}>Find the area between y = sin x and the x-axis from x = 0 to x = 2π.</QCard></div>
			<Chip x={860} y={590} at={k.four} size={32} color={KR.ink}>Area? Split.</Chip>
			<div style={{opacity: o(k.third - 10)}}><QCard x={380} y={650} w={760} size={34}>Estimate ∫₀¹ e^(−x²) dx.</QCard></div>
			<Chip x={640} y={732} at={k.again} size={32} color={KR.ink}>No primitive? Trapezia.</Chip>
			<Ring3 at={k.sec1} x={1160} y={300} />
			<Ring3 at={k.pi + 10} x={1160} y={530} />
			<Ring3 at={k.formula - 30} x={1160} y={690} />
			<div style={{opacity: o(k.first)}}><FrameSvg><SvgPlate plate={TOWN} x={1200} y={200} w={430} /></FrameSvg></div>
			<StudioPlot x={1190} y={370} width={450} height={230} window={{x: [-0.3, 6.7], y: [-1.3, 1.3]}} xTicks={[{value: Math.PI, label: 'π'}, {value: 2 * Math.PI, label: '2π'}]} yTicks={[-1, 1]} xLabel="x" yLabel="y = sin x" at={k.pi}>
				{m => <>
					<g clipPath={m.clip} opacity={o(k.curve)}><path d={regionPath(m, Math.sin, 0, Math.PI)} fill={UP.soft} stroke={UP.stroke} strokeWidth={3} /></g>
					<g clipPath={m.clip} opacity={o(k.split)}><path d={regionPath(m, Math.sin, Math.PI, 2 * Math.PI)} fill={DOWN.soft} stroke={DOWN.stroke} strokeWidth={3} /><line x1={m.p(Math.PI, 0)[0]} x2={m.p(Math.PI, 0)[0]} y1={m.box.top} y2={m.box.top + m.box.height} stroke={GREY} strokeWidth={3} strokeDasharray="8 7" /></g>
					<g clipPath={m.clip}><path d={fnPath(m, Math.sin, 0, 2 * Math.PI, 160)} stroke={INK} strokeWidth={5} fill="none" /></g>
				</>}
			</StudioPlot>
			<Hand x={1200} y={640} at={k.alone} size={30} color={GREY}>∫₀²π sin x dx = 0</Hand>
			<Hand x={1420} y={636} at={k.four} size={34} color={KR.ink}>area = 2 + 2 = 4</Hand>
			<StudioPlot x={1190} y={735} width={450} height={200} window={{x: [-0.1, 1.15], y: [0, 1.2]}} xTicks={[1]} yTicks={[1]} xLabel="x" yLabel="y = e^(−x²)" at={k.third}>
				{m => <>
					{[0, 0.25, 0.5, 0.75].map((a, i) => {const b = a + 0.25, g = (x: number) => Math.exp(-x * x), [pa, ya] = m.p(a, g(a)), [pb, yb] = m.p(b, g(b)), [, y0] = m.p(0, 0); return <path key={i} opacity={prog(fr, k.formula + i * 8, 10)} d={`M${pa},${y0} L${pa},${ya} L${pb},${yb} L${pb},${y0} Z`} fill={TRAP_FILL} stroke={TRAP_STROKE} strokeWidth={3} />;})}
					<path d={fnPath(m, x => Math.exp(-x * x), 0, 1.1, 100)} stroke={INK} strokeWidth={5} fill="none" />
				</>}
			</StudioPlot>
			<HandTag x={1640} y={800} text="no primitive in this course" at={k.noprim} size={30} color={GREY} anchor="end" />
		</>
	);
};

// ---------- 8. memory aid ----------
export const AID_LINES: readonly [string, string][] = [['Function?', 'Plus C.'], ['Change?', 'Limits.'], ['Area?', 'Split.'], ['Table?', 'Trapezia.']];
/** The framed memory card: the decision tree small at the left, four icons on top, the main line one pair at a time. */
export const G02Card: React.FC<{q?: readonly number[]; a?: readonly number[]; then?: number; pulse?: number; x?: number; y?: number; scale?: number}> = ({q = [-300, -300, -300, -300], a = [-300, -300, -300, -300], then = -300, pulse, x = 250, y = 180, scale = 1}) => {
	const f = useCurrentFrame();
	const tankW = 70, tankHt = plateHeight(TANK, tankW);
	const boatL = 110, boatW = (boatL * (BOAT.box[2] - BOAT.box[0])) / (BOAT.box[3] - BOAT.box[1]);
	const pul = (i: number) => (pulse === undefined ? 0 : Math.max(0, 1 - Math.abs(f - (pulse + i * 8)) / 8));
	return <div style={{position: 'absolute', left: x, top: y, width: 1420, height: 700, transform: `scale(${scale})`, transformOrigin: '0 0'}}>
		<FramedCard x={0} y={0} w={1420} h={700} />
		<div style={{position: 'absolute', left: 44, top: 22, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: GREY}}>Memory aid</div>
		<DecisionTree x={44} y={120} nodes={[{question: 'Asks for?', branches: [{label: 'a function'}, {label: 'a change'}, {label: 'an area'}, {label: 'readings'}]}]} colW={380} size={32} at={-300} />
		<div style={{position: 'absolute', left: 520, top: 26, display: 'flex', gap: 50, alignItems: 'center'}}>
			{[
				<svg key="t" width={tankW} height={tankHt} style={{overflow: 'visible'}}><SvgPlate plate={TANK} x={0} y={0} w={tankW} /></svg>,
				<div key="f" style={{transform: 'scale(0.7)', transformOrigin: '0 50%', width: 110, height: 80}}><IconFamily /></div>,
				<svg key="b" width={boatL} height={boatW + 10} style={{overflow: 'visible'}}><g transform={`translate(${boatL / 2},${boatW / 2 + 5}) rotate(90)`}><SvgPlate plate={BOAT} x={-boatW / 2} y={-boatL / 2} w={boatW} /></g></svg>,
				<div key="r" style={{transform: 'scale(0.7)', transformOrigin: '0 50%', width: 110, height: 80}}><IconTrap /></div>,
			].map((n, i) => <div key={i} style={{transform: `scale(${1 + 0.25 * pul(i)})`}}>{n}</div>)}
		</div>
		<div style={{position: 'absolute', left: 520, top: 150, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.18, color: INK}}>
			{AID_LINES.map(([qq, aa], i) => <div key={i}><span style={{opacity: prog(f, q[i], 10)}}>{qq} </span><span style={{opacity: prog(f, a[i], 10), color: KR.ink}}>{aa}</span></div>)}
		</div>
		<div style={{position: 'absolute', left: 520, top: 500, opacity: prog(f, then, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: '#1f6fb2'}}>Then look for a matched inside.</div>
		<div style={{position: 'absolute', left: 520, top: 580, opacity: prog(f, then + 20, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: GREY}}>f′e^f or f′/f: the inside's derivative out the front</div>
	</div>;
};
export const S08: React.FC = () => {
	const k = K8;
	return (
		<>
			<SceneHeading text="The decision in four questions" at={4} size={44} />
			<G02Card q={[k.fn, k.change, k.area, k.table]} a={[k.plusc, k.limits, k.split, k.trap]} then={k.then} pulse={k.trap + 10} />
		</>
	);
};
export {Tank};
