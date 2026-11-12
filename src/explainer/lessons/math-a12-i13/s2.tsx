// Scenes 6 to 14: the channel against the y-axis (horizontal layers, doubled half), its practical answer with a
// check by x and the depth surprise, the memory aid, two attempts with brief feedback, the handoff to i14's robot
// vacuum and the key notes. The final frame is i14's own opening frame (`I13FinalFrameStandIn`).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {AreaFillLayer, CARD, Card, CardTitle, FrameSvg, GivensStrip, HandTag, KeyNotesBullets, LiveReadoutBoard, MarkSpan, MistakeCard, QuestionCard, RolesOn, SceneHeading, StudioPlot, SvgPlate, TaskStrip, fnPath, smooth, usePlatePreload, vis} from '../../math/studio';
import {I13FinalFrameStandIn} from '../math-a12-i14/s1';
import {dur, hold} from './common';
import {K10, K11, K12, K13, K14, K6, K7, K8, K9} from './cuemap';
import {AC, AMB, AMB_INK, Attempt, BLUE, Bl, CHANNEL, ChannelRig, Chip, FramedCard, GREEN, GREY, Int, MiniPlot, P, PLabel, RED_INK, SegRow, TEAL, TEAL_SOFT, TrailerPic, VIO, chanArea} from './parts';

export const AID13 = 'Units up × units across = what you’ve found.';
const SOFT = '#6f6658';
const S30: React.CSSProperties = {fontSize: 30};

// ---------- the channel's cross-section (equal units: 250 px per metre) ----------
const XS = {x: 990, y: 150, w: 876, h: 745, win: {x: [-1.5, 1.5] as [number, number], y: [-0.3, 2.2] as [number, number]}};
type M = Parameters<NonNullable<React.ComponentProps<typeof StudioPlot>['children']>>[0];
const pts = (m: M, list: [number, number][]) => list.map(([x, y], i) => `${i ? 'L' : 'M'}${m.p(x, y)[0].toFixed(1)},${m.p(x, y)[1].toFixed(1)}`).join(' ');
/** Water below depth h: both halves, or the right half only (x ≥ 0). */
const waterPath = (m: M, h: number, half = false) => {
	const r = Math.sqrt(h), n = 60;
	const curve: [number, number][] = Array.from({length: n + 1}, (_, i) => {const x = half ? r - (r * i) / n : r - (2 * r * i) / n; return [x, x * x];});
	return half ? pts(m, [[0, h], [r, h], ...curve.slice(1), [0, 0]]) + ' Z' : pts(m, [[-r, h], [r, h], ...curve.slice(1)]) + ' Z';
};
const Section: React.FC<{children?: (m: M) => React.ReactNode; at?: number}> = ({children, at = -30}) => (
	<StudioPlot x={XS.x} y={XS.y} width={XS.w} height={XS.h} window={XS.win} xTicks={[-1, 1]} yTicks={[1, 2]} xLabel="across (m)" yLabel="height above the bottom, y (m)" at={at}>
		{m => <>
			{children ? children(m) : null}
			<g clipPath={m.clip}><path d={fnPath(m, x => x * x, -1.5, 1.5)} stroke={BLUE} strokeWidth={7} fill="none" strokeLinecap="round" /></g>
			<PLabel p={m.p(0.15, 1.75)} text="y = x²" color={BLUE} size={40} />
		</>}
	</StudioPlot>
);
const Surface: React.FC<{m: M; h: number; o: number; label?: number}> = ({m, h, o, label = o}) => {
	const r = Math.sqrt(h) + 0.12;
	const a = m.p(-r, h), b = m.p(r, h);
	return <g opacity={o}>
		<line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={AMB} strokeWidth={5} strokeDasharray="14 10" />
		{label > 0.001 ? <text x={m.p(Math.sqrt(h) + 0.12, h)[0]} y={m.p(0, h)[1] + 44} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMB_INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke" opacity={label}>{`y = ${Number.isInteger(h) ? h : h.toFixed(2)}`}</text> : null}
	</g>;
};
const RX6 = 40, PW = 900;

// ---------- 6. a region against the y-axis: a channel ----------
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const water = prog(f, k.water, 16);
	const right = prog(f, k.right, 14);
	const nLayers = Math.ceil(8 * prog(f, k.cut, 60));
	const layersO = vis(f, k.cut, k.one + 20, 12);
	const merged = prog(f, k.one + 10, 20);
	const mirror = smooth(prog(f, k.double, 36));
	return (
		<>
			<TaskStrip text="Find the area of the water’s cross-section when it is 1 m deep" at={4} size={44} />
			<ChannelRig x={30} y={160} w={PW} centre={prog(f, k.put, 14)} />
			{(() => {const o = vis(f, k.what + 80, k.put, 12); return o > 0.001 ? <FrameSvg style={{opacity: o}}>
				<path d="M120,226 Q86,320 104,404" stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />
				<path d="M90,388 L104,406 L118,386" stroke={INK} strokeWidth={5} fill="none" strokeLinecap="round" />
			</FrameSvg> : null;})()}
			<HandTag x={40} y={166} text="the cross-section" at={k.what + 80} out={k.put} size={40} color={INK} />
			<Section at={k.drainage + 40}>
				{m => <>
					{water > 0.001 ? <path d={waterPath(m, 1)} fill={TEAL_SOFT} opacity={water * (1 - 0.7 * right * (1 - mirror))} /> : null}
					{right > 0.001 ? <path d={waterPath(m, 1, true)} fill={merged > 0 ? `rgba(19,118,122,${0.18 + 0.2 * merged})` : 'none'} stroke={VIO} strokeWidth={5} opacity={right} /> : null}
					{mirror > 0.001 ? <path d={waterPath(m, 1, true)} fill="rgba(19,118,122,0.38)" transform={`translate(${2 * m.p(0, 0)[0]},0) scale(-1,1)`} opacity={mirror} /> : null}
					{layersO > 0.001 ? <g opacity={layersO}>{Array.from({length: nLayers}, (_, i) => {const y0 = i / 8, y1 = (i + 1) / 8, len = Math.sqrt((y0 + y1) / 2); const a = m.p(0, y1), b = m.p(len, y0); return <rect key={i} x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill="rgba(107,79,160,0.16)" stroke={VIO} strokeWidth={2.5} />;})}</g> : null}
					{(() => {const o = vis(f, k.at, k.one + 20, 12); if (o <= 0.001) return null; const a = m.p(0, 0.52), b = m.p(0.7, 0.46); return <g opacity={o}>
						<rect x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill={VIO} opacity={0.75} />
						<text x={m.p(0.05, 0.6)[0]} y={m.p(0, 0.6)[1]} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: VIO}} stroke={CARD} strokeWidth={7} paintOrder="stroke">x = √y</text>
						<text x={b[0] + 14} y={b[1] + 4} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: VIO}} stroke={CARD} strokeWidth={7} paintOrder="stroke">Δy</text>
					</g>;})()}
					{(() => {const o = prog(f, k.put, 14); const a = m.p(0, -0.3), b = m.p(0, 2.2); return <line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={INK} strokeWidth={8} opacity={o} />;})()}
					<Surface m={m} h={1} o={water} />
					{(() => {const o = prog(f, k.metre - 6, 12); return o > 0.001 ? <PLabel p={m.p(0, 0.62)} text="4/3 m²" color={GREEN} size={48} anchor="middle" o={o} /> : null;})()}
				</>}
			</Section>
			<HandTag x={1430} y={290} text="centre line" at={k.put + 10} size={42} color={INK} anchor="end" />
			<HandTag x={1640} y={770} text="layers of water" at={k.cut + 30} out={k.one + 20} size={40} color={VIO} />
			<HandTag x={1100} y={770} text="double the half" at={k.double + 10} size={40} color={TEAL} />
			<Card x={RX6} y={670} w={PW} at={k.drainage + 40} out={k.at - 8} pad="12px 26px 14px">
				<CardTitle>Givens</CardTitle>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.35}}>sides <Bl>y = x²</Bl> (metres), y up from the bottom<br /><span style={{color: AMB_INK, opacity: prog(f, k.water, 12)}}>water 1 m deep</span></div>
			</Card>
			<SegRow x={RX6} y={866} size={38} out={k.at - 8} segs={[{c: <>cross-section: cut straight across</>, at: k.what + 80}]} />
			<SegRow x={RX6} y={924} size={38} out={k.at - 8} segs={[{c: <>right half: curve, y-axis, surface y = 1</>, at: k.right + 20}]} />
			<SegRow x={RX6} y={982} size={38} out={k.at - 8} segs={[{c: <>layers: horizontal strips, thickness Δy</>, at: k.cut + 40}]} />
			<SegRow x={RX6} y={670} size={44} segs={[{c: <>layer length: x = √y  (x ≥ 0)</>, at: k.at + 20}]} />
			<SegRow x={RX6} y={760} size={44} segs={[{c: <>A<sub style={S30}>half</sub> = <Int lo="0" hi="1" v="y" color={BLUE}>√y</Int></>, at: k.so}]} />
			<SegRow x={RX6} y={850} size={44} segs={[{c: <>= [(2/3) y<sup style={S30}>3/2</sup>]<sub style={S30}>0</sub><sup style={S30}>1</sup> = 2/3</>, at: k.one + 10}]} />
			<SegRow x={RX6} y={940} size={46} segs={[{c: <>A = 2 × 2/3</>, at: k.double}, {c: <>= 4/3 m²</>, at: k.metre - 6}]} answerAt={k.metre - 4} />
		</>
	);
};

// ---------- 7. answer the real question, and check it ----------
export const S07: React.FC = () => {
	const f = useCurrentFrame();
	const k = K7;
	const h = 1 + smooth(prog(f, k.double, 70));
	const surprise = f >= k.surprise;
	const rect = vis(f, k.rect - 20, k.surprise, 12);
	return (
		<>
			<TaskStrip text="Answer the real question, then check it" at={4} size={48} />
			<ChannelRig x={30} y={160} w={PW} centre={1} length={prog(f, 6, 16)} />
			<Section>
				{m => <>
					<path d={waterPath(m, h)} fill="rgba(19,118,122,0.32)" />
					{rect > 0.001 ? <g opacity={rect}>
						<path d={pts(m, [[-1, 0], [-1, 1], [1, 1], [1, 0]])} stroke={INK} strokeWidth={4} strokeDasharray="12 9" fill="none" />
						<path d={pts(m, [[-1, 0], ...Array.from({length: 41}, (_, i) => {const x = -1 + i / 20; return [x, x * x] as [number, number];}), [1, 0]]) + ' Z'} fill="#9a9285" opacity={0.55} />
					</g> : null}
					{(() => {const o = prog(f, k.double + 72, 14); if (o <= 0.001) return null; const a = m.p(-1, 1), b = m.p(1, 1), c = m.p(-Math.SQRT2, 2), d = m.p(Math.SQRT2, 2); return <g opacity={o}>
						<line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={INK} strokeWidth={4} />
						<text x={(a[0] + b[0]) / 2} y={a[1] - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">2 m</text>
						<line x1={c[0]} x2={d[0]} y1={c[1]} y2={d[1]} stroke={INK} strokeWidth={4} />
						<text x={(c[0] + d[0]) / 2} y={c[1] - 14} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">2.83 m</text>
					</g>;})()}
					<Surface m={m} h={h} o={1} label={surprise ? 0 : 1} />
				</>}
			</Section>
			<HandTag x={630} y={862} text="wider higher up" at={k.because - 6} size={42} color={INK} />
			<div style={{position: 'absolute', left: RX6, top: 670, display: 'flex', gap: 18}}>
				<Chip x={0} y={0} at={-30} size={40} color={GREEN}>cross-section 4/3 m²</Chip>
			</div>
			<Chip x={RX6 + 470} y={670} at={6} size={40} color={AMB}>length 30 m</Chip>
			<SegRow x={RX6} y={760} size={46} segs={[{c: <>volume = 4/3 × 30</>, at: k.holds + 14}, {c: <>= 40 m³</>, at: k.forty}, {c: <span style={{fontSize: 34, color: '#4f4840'}}>= 40 000 L</span>, at: k.forty + 40}]} answerAt={k.forty + 4} />
			<SegRow x={RX6} y={860} size={38} out={k.surprise - 6} segs={[{c: <span style={{color: '#4f4840'}}>check: 2 × 1 − <Int lo="−1" hi="1">x²</Int> = 2 − 2/3 = 4/3 <span style={{color: GREEN}}>✓</span></span>, at: k.rect}]} />
			{surprise ? <LiveReadoutBoard x={RX6} y={850} width={560} at={k.surprise} inline size={46} labelSize={30} rows={[{label: 'depth h', value: h, digits: 2, unit: 'm', format: v => v.toFixed(2)}, {label: 'A = (4/3) h^(3/2)', value: chanArea(h), digits: 2, unit: 'm²', format: v => v.toFixed(2)}]} /> : null}
			<HandTag x={630} y={930} text="nearly 3 times the area" at={k.nearly + 10} size={40} color={TEAL} />
		</>
	);
};

// ---------- 8. memory aid ----------
export const S08: React.FC = () => {
	const f = useCurrentFrame();
	const k = K8;
	usePlatePreload([AC.src, CHANNEL.src]);
	const rows: {c: React.ReactNode; at: number}[] = [
		{c: <><Bl>kW</Bl> × h = kWh  <span style={{color: GREEN}}>✓</span></>, at: k.units + 40},
		{c: <><Bl>$/item</Bl> × items = $  <span style={{color: GREEN}}>✓</span></>, at: k.units + 70},
		{c: <><Bl>ML/day</Bl> × days = ML  <span style={{color: GREEN}}>✓</span></>, at: k.units + 100},
		{c: <>m × m = m²  <span style={{color: GREEN}}>✓</span></>, at: k.units + 130},
	];
	return (
		<>
			<SceneHeading text="The check to keep" at={4} size={52} />
			<FramedCard x={60} y={150} w={1800} h={830} />
			<div style={{position: 'absolute', left: 110, top: 166, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: SOFT}}>Memory aid</div>
			{[['1  name the rate and its units', k.steps + 50], ['2  take the interval from the question', k.take], ['3  integrate', k.integ], ['4  answer in the units of the amount', k.answer]].map(([t, at], i) => <div key={i} style={{position: 'absolute', left: 130, top: 250 + i * 92, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, opacity: vis(f, at as number, k.check - 4, 12)}}>{t as string}</div>)}
			<SegRow x={110} y={226} size={40} segs={[{c: <>1 rate and units  →  2 interval  →  3 integrate  →  4 answer in units</>, at: k.check}]} />
			<div style={{position: 'absolute', left: 110, top: 300, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 70, color: INK, opacity: prog(f, k.units - 10, 14)}}>{AID13}</div>
			{rows.map((r, i) => <div key={i} style={{position: 'absolute', left: 130, top: 430 + i * 92, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK, opacity: prog(f, r.at, 12), whiteSpace: 'pre'}}>{r.c}</div>)}
			<div style={{position: 'absolute', left: 130, top: 430 + 4 * 92, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: RED_INK, opacity: prog(f, k.iff, 12), whiteSpace: 'pre'}}><span style={{textDecoration: 'line-through', textDecorationThickness: 4}}>$ × items = ?</span>  ✗</div>
			<FrameSvg style={{opacity: prog(f, 12, 14)}}><SvgPlate plate={AC} x={1260} y={420} w={540} /></FrameSvg>
			<HandTag x={1300} y={640} text="kWh: the power bill" at={k.units + 40} size={38} color={BLUE} />
			<FrameSvg style={{opacity: prog(f, 20, 14)}}><SvgPlate plate={CHANNEL} x={1320} y={700} w={460} /></FrameSvg>
			<HandTag x={560} y={900} text="m²: the water’s cross-section" at={k.units + 130} size={38} color={TEAL} />
		</>
	);
};

// ---------- 9. attempt 1 ----------
const Q1: React.FC = () => <div>Sand pours from a hopper into a box trailer at a rate of r(t) = 6t − t² kilograms per second, for 0 ≤ t ≤ 6, where t is in seconds. How much sand goes into the trailer in that time?</div>;
export const S09: React.FC = () => (
	<Attempt hold={hold('scene-09')} pauseAt={K9.pause} top={470} size={40} given={['r(t) = 6t − t² kg/s', '0 ≤ t ≤ 6 (s)']} picture={<TrailerPic />}>
		<Q1 />
	</Attempt>
);

// ---------- 10. feedback 1 ----------
const sand = (t: number) => 6 * t - t * t;
const Q1w: React.FC<{u: number}> = ({u}) => <div>Sand pours into a trailer at <MarkSpan kind="underline" at={u}>r(t) = 6t − t² kg/s</MarkSpan> for <MarkSpan kind="underline" at={u + 10}>0 ≤ t ≤ 6</MarkSpan>. How much sand?</div>;
export const S10: React.FC = () => {
	const f = useCurrentFrame();
	const k = K10;
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><Q1w u={k.six - 10} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'r(t) = 6t − t² kg/s', at: 6}, {content: '0 ≤ t ≤ 6 s', at: 12}]} />
			<Card x={96} y={600} w={900} at={20} out={k.wrong - 8} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. amount = integral of the rate<br />2. primitive, then F(6) − F(0)<br />3. units: kg/s × s = kg</div>
			</Card>
			<SegRow x={96} y={300} size={50} segs={[{c: <>m = <Int lo="0" hi="6" v="t" color={BLUE}>(6t − t²)</Int></>, at: k.six}]} />
			<SegRow x={96} y={400} size={50} segs={[{c: <>= [3t² − t³/3]<sub style={S30}>0</sub><sup style={S30}>6</sup></>, at: k.prim + 30}]} />
			<SegRow x={96} y={490} size={50} segs={[{c: <>= 108 − 72</>, at: k.at + 20}, {c: <>= 36 kg</>, at: k.kg - 10}]} answerAt={k.kg} />
			<Chip x={560} y={500} at={k.kg + 20} size={36} color={GREY}>kg/s × s = kg</Chip>
			<MistakeCard x={96} y={640} w={900} at={k.wrong} size={44} wrong={<>9 kg/s × 6 s = 54 kg</>} caption="the top rate lasts only an instant" />
			<MiniPlot x={1060} y={290} w={830} h={660} win={{x: [-0.4, 6.6], y: [-1, 10.6]}} xTicks={[2, 4, 6]} yTicks={[3, 6, 9]} xLabel="t (s)" yLabel="rate r (kg/s)" curves={[{fn: sand, from: 0, to: 6, color: BLUE}]}>
				{m => <>
					{f >= k.six ? <g opacity={prog(f, k.six, 14)}><AreaFillLayer m={m} fn={sand} a={0} to={6} signed /></g> : null}
					<PLabel p={m.p(3, 3.6)} text="36" color={TEAL} size={52} anchor="middle" o={prog(f, k.kg, 12)} />
					{(() => {const o = prog(f, k.wrong + 70, 12); if (o <= 0.001) return null; const a = m.p(0, 9), b = m.p(6, 0); return <g opacity={o}>
						<rect x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill="none" stroke={RED_INK} strokeWidth={4} strokeDasharray="12 9" />
						<text x={m.p(3, 9.4)[0]} y={m.p(3, 9.4)[1]} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: RED_INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">9 × 6 = 54: too much</text>
					</g>;})()}
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 11. attempt 2 ----------
const YPic: React.FC = () => {
	const w = 820, h = 540, L = 70, R = w - 40, T = 40, B = h - 50;
	const win = {x: [-0.5, 2.8], y: [-1, 9.6]};
	const X = (v: number) => L + ((v - win.x[0]) / (win.x[1] - win.x[0])) * (R - L), Y = (v: number) => B - ((v - win.y[0]) / (win.y[1] - win.y[0])) * (B - T);
	return (
		<div style={{width: w, height: h, position: 'relative', background: '#fbf8f1', borderRadius: 14, border: '2px solid rgba(60,45,20,0.12)', boxSizing: 'border-box'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', inset: 0}}>
				{[1, 2].map(v => <line key={'gx' + v} x1={X(v)} x2={X(v)} y1={T} y2={B} stroke="#e4dccd" strokeWidth={2} />)}
				{[2, 4, 6, 8].map(v => <line key={'gy' + v} x1={L} x2={R} y1={Y(v)} y2={Y(v)} stroke="#e4dccd" strokeWidth={2} />)}
				<path d={`M${L},${Y(0)} H${R + 10}`} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
				<path d={`M${X(0)},${B + 6} V${T - 6}`} stroke={INK} strokeWidth={10} fill="none" strokeLinecap="round" />
				<line x1={X(0)} x2={R} y1={Y(8)} y2={Y(8)} stroke={AMB} strokeWidth={5} strokeDasharray="14 10" />
				<text x={R - 6} y={Y(8) - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: AMB_INK}}>y = 8</text>
				{[1, 2].map(v => <text key={'tx' + v} x={X(v)} y={Y(0) + 38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v}</text>)}
				{[4, 8].map(v => <text key={'ty' + v} x={X(0) - 16} y={Y(v) + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>{v}</text>)}
				<text x={R + 6} y={Y(0) - 14} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>x (cm)</text>
				<text x={X(0) + 18} y={T + 22} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>y (cm)</text>
				<text x={X(0) + 18} y={Y(4)} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, fill: INK}}>the y-axis</text>
				<text x={R - 10} y={Y(5.6)} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, fill: SOFT}}>sketch first</text>
			</svg>
		</div>
	);
};
const Q2: React.FC = () => <div>A metal plate has the shape of the region bounded by the curve y = x³ (x ≥ 0), the y-axis and the line y = 8, with lengths in centimetres. Find the area of the plate by integrating with respect to y.</div>;
export const S11: React.FC = () => (
	<Attempt hold={hold('scene-11')} pauseAt={K11.pause} heading="Last one" top={470} size={40} given={['y = x³, x ≥ 0', 'the y-axis, y = 8 (cm)', 'integrate in y']} picture={<YPic />}>
		<Q2 />
	</Attempt>
);

// ---------- 12. feedback 2 ----------
const cube = (x: number) => x * x * x;
const Q2w: React.FC<{u: number}> = ({u}) => <div>Area between y = x³ (x ≥ 0), <MarkSpan kind="underline" at={u}>the y-axis and y = 8</MarkSpan> cm, integrating in y.</div>;
export const S12: React.FC = () => {
	const f = useCurrentFrame();
	const k = K12;
	return (
		<>
			<TaskStrip text="Check your working" at={2} size={56} />
			<RolesOn on={f >= 10}><QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><Q2w u={k.third} /></QuestionCard></RolesOn>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'y = x³, x ≥ 0', at: 6}, {content: 'y-axis', at: 10}, {content: 'y = 8 (cm)', at: 14}]} />
			<Card x={96} y={400 + 300 * smooth(prog(f, k.integ - 24, 20))} w={900} at={20} out={k.four - 8} pad="14px 28px 16px">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 44, color: INK}}>the plan</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK, lineHeight: 1.4}}>1. write x in terms of y<br />2. integrate with y-limits, 0 to 8<br />3. answer in cm²</div>
			</Card>
			<SegRow x={96} y={300} size={50} segs={[{c: <>x = ∛y</>, at: k.third - 100}, {c: <>= y<sup style={S30}>1/3</sup></>, at: k.third}]} />
			<SegRow x={96} y={395} size={50} segs={[{c: <>A = <Int lo="0" hi="8" v="y" color={BLUE}>y<sup style={S30}>1/3</sup></Int></>, at: k.integ}]} />
			<SegRow x={96} y={495} size={50} segs={[{c: <>= [(3/4) y<sup style={S30}>4/3</sup>]<sub style={S30}>0</sub><sup style={S30}>8</sup></>, at: k.integ + 72}]} />
			<SegRow x={96} y={590} size={50} segs={[{c: <>= (3/4) × 16</>, at: k.eight + 36}, {c: <>= 12 cm²</>, at: k.cm - 10}]} answerAt={k.cm} />
			<MistakeCard x={96} y={710} w={900} at={k.four} size={44} wrong={<><Int lo="0" hi="2">x³</Int> = 4 cm²</>} caption="the other region: between the curve and the x-axis" />
			<MiniPlot x={1060} y={280} w={830} h={680} win={{x: [-0.4, 2.7], y: [-0.8, 9.6]}} xTicks={[1, 2]} yTicks={[4, 8]} xLabel="x (cm)" yLabel="y (cm)" curves={[{fn: cube, from: 0, to: 2.1, color: BLUE}]}>
				{m => <>
					<path d={pts(m, [[0, 0], ...Array.from({length: 41}, (_, i) => {const x = (2 * i) / 40; return [x, cube(x)] as [number, number];}), [0, 8]]) + ' Z'} fill={TEAL_SOFT} opacity={0.9} />
					{(() => {const o = prog(f, k.four + 20, 14); return o > 0.001 ? <path d={pts(m, [[0, 0], ...Array.from({length: 41}, (_, i) => {const x = (2 * i) / 40; return [x, cube(x)] as [number, number];}), [2, 0]]) + ' Z'} fill="#9a9285" opacity={0.5 * o} /> : null;})()}
					{[2, 4, 6].map((y, i) => {const o = vis(f, k.integ + i * 12, k.cm, 12); const a = m.p(0, y + 0.3), b = m.p(Math.cbrt(y), y - 0.3); return <rect key={y} x={a[0]} y={a[1]} width={b[0] - a[0]} height={b[1] - a[1]} fill={VIO} opacity={0.55 * o} />;})}
					{(() => {const a = m.p(0, 8), b = m.p(2.6, 8); return <line x1={a[0]} x2={b[0]} y1={a[1]} y2={b[1]} stroke={AMB} strokeWidth={5} strokeDasharray="14 10" />;})()}
					<PLabel p={m.p(2.2, 7.3)} text="y = 8" color={AMB_INK} size={36} />
					<PLabel p={m.p(1.55, 3.0)} text="y = x³" color={BLUE} size={40} />
					<PLabel p={m.p(0.12, 4.6)} text="x = ∛y" color={VIO} size={36} o={vis(f, k.third - 90, k.integ, 12)} />
					<PLabel p={m.p(0.35, 6.3)} text="12" color={TEAL} size={52} o={prog(f, k.cm, 12)} />
					<PLabel p={m.p(1.55, 1.0)} text="4" color={'#4f4840'} size={48} o={prog(f, k.four + 20, 12)} />
				</>}
			</MiniPlot>
		</>
	);
};

// ---------- 13. handoff (i14's opening frame) ----------
export const S13: React.FC = () => {
	const f = useCurrentFrame();
	const k = K13;
	const recap = 1 - prog(f, k.next - 12, 14);
	if (f >= dur('scene-13') - 2) return <I13FinalFrameStandIn />;
	return (
		<>
			{recap > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: recap}}>
				<SceneHeading text="Rates into amounts, regions into areas" at={4} size={52} />
				<MiniPlot x={40} y={170} w={880} h={540} win={{x: [-0.6, 12.8], y: [-0.4, 4.8]}} xTicks={[0, 6, 12]} yTicks={[2, 4]} xLabel="time after 8 am, t (h)" yLabel="power P (kW)" curves={[{fn: P, from: 0, to: 12, color: BLUE}]}>
					{m => <><AreaFillLayer m={m} fn={P} a={0} to={12} signed /><PLabel p={m.p(6, 1.4)} text="30.6 kWh" color={TEAL} size={44} anchor="middle" /></>}
				</MiniPlot>
				<StudioPlot x={1000} y={170} width={760} height={540} window={{x: [-1.5, 1.5], y: [-0.25, 1.65]}} xTicks={[-1, 1]} yTicks={[1]} xLabel="across (m)" yLabel="y (m)" at={-30}>
					{m => <>
						<path d={waterPath(m, 1)} fill="rgba(19,118,122,0.32)" />
						<g clipPath={m.clip}><path d={fnPath(m, x => x * x, -1.5, 1.5)} stroke={BLUE} strokeWidth={6} fill="none" /></g>
						<PLabel p={m.p(0, 0.55)} text="4/3 m²" color={TEAL} size={44} anchor="middle" />
					</>}
				</StudioPlot>
				<Card x={40} y={750} w={880} at={k.long - 150} pad="12px 24px 14px"><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>a rate → an amount: kW × h = kWh</div></Card>
				<Card x={1000} y={750} w={860} at={k.long - 110} pad="12px 24px 14px"><div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>a region against an axis → an area</div></Card>
				<Chip x={40} y={890} at={k.long} size={42} color={AMB}>only if the units and the domain make sense</Chip>
			</div> : null}
			{f >= k.next - 12 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, k.next - 12, 14)}}><I13FinalFrameStandIn /></div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const I13FinalFrame = I13FinalFrameStandIn;
export const S14: React.FC = () => {
	const f = useCurrentFrame();
	const id = 'scene-14';
	usePlatePreload([AC.src, CHANNEL.src]);
	const items = [
		{content: <>Integrate a rate over an interval: the amount, <Int lo="a" hi="b" v="t" color={BLUE}>P(t)</Int>.</>, at: 10},
		{content: <>Units: units up × units across (kW × h = kWh).</>, at: 22},
		{content: <>State the model’s domain.</>, at: 34},
		{content: <>Rate dips below 0: ∫ = net change; area = total flow.</>, at: 46},
		{content: <>Against the y-axis, with x ≥ 0: A = ∫ x dy.<br />Double a symmetric half.</>, at: 58},
	];
	const back = prog(f, Math.max(1350, dur(id)) - 40, 36);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} />
				<HandTag x={1824} y={116} text="pause to copy" at={K14.pause} size={42} color="#8a5a12" anchor="end" />
				<KeyNotesBullets x={96} y={230} w={1050} items={items} size={38} gap={62} />
				<FramedCard x={1180} y={196} w={690} h={780} at={16} />
				<div style={{position: 'absolute', left: 1220, top: 212, opacity: prog(f, 16, 14), width: 620}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 58, lineHeight: 1.08, color: INK, marginTop: 2}}>{AID13}</div>
					<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, color: INK, marginTop: 14, lineHeight: 1.4}}><Bl>kW</Bl> × h = kWh<br />m × m = m²<br /><span style={{color: RED_INK, textDecoration: 'line-through'}}>$ × items</span></div>
				</div>
				<FrameSvg style={{opacity: prog(f, 16, 14)}}><SvgPlate plate={AC} x={1215} y={560} w={620} /></FrameSvg>
				<div style={{position: 'absolute', left: 1225, top: 820, width: 620, opacity: prog(f, 16, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, color: TEAL, lineHeight: 1.4}}>the day: 30.6 kWh, not 48<br />the channel: 4/3 m², 40 m³</div>
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I13FinalFrameStandIn /></div> : null}
		</>
	);
};
