// Scenes 9 to 14: attempt 1 (the tank's volume after 5 minutes) and its feedback (crossed 5 L), attempt 2 (the area
// for y = 2x/(x² + 1) from −1 to 2) and its feedback (split at 0, flip, crossed ln(5/2)), the handoff to g03 (two
// investment strips beside coin jars, exported as G02FinalFrame) and the key notes, which return silently to it.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {GivensStrip, HandTag, KeyNotesBullets, QuestionCard, SceneHeading, StudioPlot, SvgPlate, fnPath, regionPath, smooth} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {AnswerBox, BROWN, CALC, CARD, Chip, DERIV, Dc, DOWN, FONT_DISPLAY, FONT_HAND, FramedCard, GOOD, GREY, Hand, INK, InvestStage, KR, QStrip, Row, Slip, TANK, Tank, UP, Vc, tankH} from './parts';
import {AID_LINES, G02Card} from './s2';

// ---------- 9. attempt 1 ----------
const Q1 = 'A tank holds 20 L of water at t = 0. Its volume V litres changes at the rate dV/dt = 6 − 2t litres per minute. Find the volume when t = 5.';
const TankPic: React.FC<{level?: number}> = ({level = 0}) => (
	<div style={{position: 'relative', width: 380, height: tankH(360) + 10}}><Tank x={10} y={0} w={360} level={level} max={40} water={level > 0 ? 1 : 0} /></div>
);
export const S09: React.FC = () => (
	<QuestionCard at={0} size={50} w={1500} y={190} hold={{...hold('scene-09'), ringFrom: K9.pause}} pauseAt={K9.pause} picture={{node: <TankPic />, w: 380}}><div>{Q1}</div></QuestionCard>
);

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={32} parts={['A tank holds ', {u: '20 L', at: k.twenty - 40}, ' of water at t = 0. Its volume V litres changes at the rate dV/dt = 6 − 2t litres per minute. Find the ', {u: 'volume', at: k.vol}, ' when ', {u: 't = 5', at: k.at5}, '.']} />
			<GivensStrip x={96} y={320} size={36} items={[{content: 'V(0) = 20 L', at: k.vol + 10}, {content: 'dV/dt = 6 − 2t L/min', at: k.vol + 18}, {content: 't = 5', at: k.vol + 26}]} />
			<Row x={96} y={420} at={k.v} size={50} small={34} dim={prog(fr, k.litres, 12)}>V = ∫(6 − 2t) dt = 6t − t² + <Vc>C</Vc></Row>
			<Row x={96} y={500} at={k.twenty} size={50} small={34} dim={prog(fr, k.litres, 12)}>V(0) = 20, so <Vc>C = 20</Vc></Row>
			<AnswerBox x={96} y={580} at={k.litres} size={50}>V(5) = 30 − 25 + 20 = 25 L</AnswerBox>
			<div style={{position: 'absolute', left: 96, top: 700}}><Slip x={0} y={0} w={760} at={k.five} strikeAt={k.volume} size={44} caption="∫₀⁵ (6 − 2t) dt = 5 is the change">5 L</Slip></div>
			<StudioPlot x={900} y={300} width={590} height={540} window={{x: [-0.4, 5.6], y: [0, 33]}} xTicks={[1, 2, 3, 4, 5]} yTicks={[10, 20, 30]} xLabel="t (min)" yLabel="V (L)" at={k.v}>
				{m => {const V = (t: number) => 20 + 6 * t - t * t; const [x0, y20] = m.p(0, 20), [x5, y25] = m.p(5, 25), [, y20b] = m.p(5, 20); const ch = prog(fr, k.five, 12); return <>
					<line x1={x0} x2={x5 + 20} y1={y20} y2={y20} stroke={GREY} strokeWidth={3} strokeDasharray="10 8" />
					<path d={fnPath(m, V, 0, 5, 120)} stroke={INK} strokeWidth={7} fill="none" />
					<circle cx={x0} cy={y20} r={13} fill={INK} stroke={CARD} strokeWidth={4} opacity={prog(fr, k.twenty, 10)} />
					<text x={x0 + 20} y={y20 + 40} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: INK}} opacity={prog(fr, k.twenty, 10)}>V(0) = 20</text>
					<circle cx={x5} cy={y25} r={14} fill={GOOD.stroke} stroke={CARD} strokeWidth={4} opacity={prog(fr, k.litres, 10)} />
					<text x={x5 - 18} y={y25 - 22} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: GOOD.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke" opacity={prog(fr, k.litres, 10)}>(5, 25)</text>
					{ch > 0.01 ? <g opacity={ch}><line x1={x5 + 12} x2={x5 + 12} y1={y20b} y2={y25} stroke={KR.stroke} strokeWidth={8} strokeLinecap="round" /><text x={x5 - 12} y={(y20b + y25) / 2 + 52} textAnchor="end" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: KR.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">change: 5</text></g> : null}
				</>;}}
			</StudioPlot>
			<Tank x={1520} y={360} w={330} level={fr >= k.litres ? 25 : 20} max={40} gauge={{text: fr >= k.litres ? 'V(5) = 25 L' : 'V(0) = 20 L', o: prog(fr, k.vol + 10, 12), color: fr >= k.litres ? GOOD.ink : undefined}} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
const Q2 = 'Find the exact area of the region bounded by the curve y = 2x/(x² + 1), the x-axis and the lines x = −1 and x = 2.';
const CalcPic: React.FC = () => {
	const w = 290, h = (w * (CALC.box[3] - CALC.box[1])) / (CALC.box[2] - CALC.box[0]);
	return <div style={{position: 'relative', width: 340, height: h}}><svg width={w} height={h} style={{position: 'absolute', left: 25, top: 0, overflow: 'visible'}}><SvgPlate plate={CALC} x={0} y={0} w={w} /></svg></div>;
};
export const S11: React.FC = () => (
	<QuestionCard at={0} size={52} w={1500} y={190} heading="Last one" hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause} picture={{node: <CalcPic />, w: 340}}><div>{Q2}</div></QuestionCard>
);

// ---------- 12. feedback 2 ----------
const y12 = (x: number) => (2 * x) / (x * x + 1);
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	const flip = smooth(prog(fr, k.add, 24)), kk = 1 - 2 * flip;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={32} parts={['Find the exact ', {u: 'area', at: k.top}, ' of the region bounded by the curve y = 2x/(x² + 1), the x-axis and the lines ', {u: 'x = −1 and x = 2', at: k.below}, '.']} />
			<GivensStrip x={96} y={290} size={36} items={[{content: 'y = 2x/(x² + 1)', at: k.top + 6}, {content: 'x = −1 to x = 2', at: k.top + 14}, {content: 'area', at: k.top + 22}]} />
			<Row x={96} y={380} at={k.prim} size={44} small={32} dim={prog(fr, k.left, 12)}>{'d/dx (x² + 1) = '}<Dc>2x</Dc>{', so\n∫ '}<Dc>2x</Dc>{'/(x² + 1) dx = ln(x² + 1) + C'}</Row>
			<Hand x={100} y={490} at={k.prim + 70} size={32} color={GREY}>x² + 1 &gt; 0, so no modulus</Hand>
			<Row x={96} y={560} at={k.left} size={46} small={34} dim={prog(fr, k.ten, 12)}>∫₋₁⁰ = ln 1 − ln 2 = −ln 2</Row>
			<Row x={96} y={630} at={k.five} size={46} small={34} dim={prog(fr, k.ten, 12)}>∫₀² = ln 5 − ln 1 = ln 5</Row>
			<AnswerBox x={96} y={710} at={k.ten} size={46}>area = ln 2 + ln 5 = ln 10 <span style={{fontSize: 32, color: GREY, marginLeft: 16}}>≈ 2.30</span></AnswerBox>
			<div style={{position: 'absolute', left: 1180, top: 790}}><Slip x={0} y={0} w={620} at={k.log52} strikeAt={k.cancel} size={40} caption="the signed integral">ln(5/2)</Slip></div>
			<StudioPlot x={1150} y={330} width={720} height={420} window={{x: [-1.3, 2.3], y: [-1.2, 1.2]}} xTicks={[-1, 1, 2]} yTicks={[-1, 1]} xLabel="x" yLabel="y" at={k.prim - 20}>
				{m => <>
					<g clipPath={m.clip} opacity={prog(fr, k.below, 14)}>
						<path d={regionPath(m, x => kk * y12(x), -1, 0)} fill={flip > 0.5 ? UP.soft : DOWN.soft} stroke={flip > 0.5 ? UP.stroke : DOWN.stroke} strokeWidth={4} strokeDasharray={flip > 0.5 ? '12 8' : undefined} />
						<path d={regionPath(m, y12, 0, 2)} fill={UP.soft} stroke={UP.stroke} strokeWidth={3} />
					</g>
					<g clipPath={m.clip}><path d={fnPath(m, y12, -1.3, 2.3, 200)} stroke={INK} strokeWidth={6} fill="none" /></g>
					{fr >= k.split ? <line x1={m.p(0, 0)[0] + 3} x2={m.p(0, 0)[0] + 3} y1={m.box.top} y2={m.box.top + m.box.height} stroke={GREY} strokeWidth={4} strokeDasharray="10 8" opacity={prog(fr, k.split, 12)} /> : null}
					<text x={m.p(-0.55, 0)[0]} y={m.p(0, flip > 0.5 ? 0.25 : -0.3)[1]} textAnchor="middle" opacity={prog(fr, k.left, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: flip > 0.5 ? UP.ink : DOWN.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{flip > 0.5 ? 'ln 2' : '−ln 2'}</text>
					<text x={m.p(1.2, 0)[0]} y={m.p(0, 0.35)[1]} textAnchor="middle" opacity={prog(fr, k.five, 12)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: UP.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">ln 5</text>
				</>}
			</StudioPlot>
			<HandTag x={1190} y={790} text="below the axis for x < 0" at={k.below} out={k.log52 - 10} size={34} color={DOWN.ink} />
		</>
	);
};

// ---------- 13. handoff (the investment stage; g03 opens on it) ----------
/** g02's final frame, and g03's opening frame. */
export const G02FinalFrame: React.FC = () => <>
	<InvestStage ul1={-300} ul2={-300} />
	<Chip x={340} y={800} at={-300} size={48} color={KR.ink}>Which model?</Chip>
	<Chip x={96} y={96} at={-300} size={34} color={BROWN}>Next: finance and probability practice</Chip>
</>;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.next - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Read what it asks for, then pick the integral" at={4} size={44} />
				<G02Card x={310} y={190} scale={0.92} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<InvestStage ul1={k.simple} ul2={k.comp} />
				<Chip x={340} y={800} at={k.annually} size={48} color={KR.ink}>Which model?</Chip>
				<Chip x={96} y={96} at={k.annually + 8} size={34} color={BROWN}>Next: finance and probability practice</Chip>
			</div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>A function: + <Vc>C</Vc> and the known value (or start + definite ∫).</>, at: 2},
		{content: <>A change from a to b: F(b) − F(a); the <Vc>C</Vc> cancels.</>, at: 6},
		{content: <>Area to the axis, or distance: split at the zeros, add sizes.</>, at: 10},
		{content: <>Readings, or no primitive: trapezoidal rule (an estimate).</>, at: 14},
		{content: <>First look for a matched inside: <Dc>f′</Dc>e^f or <Dc>f′</Dc>/f.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-14'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={52} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1090} items={items} size={38} gap={40} />
				<FramedCard x={1230} y={196} w={650} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1270, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<svg width={80} height={tankH(70)} style={{position: 'absolute', left: 1770, top: 214, overflow: 'visible'}}><SvgPlate plate={TANK} x={0} y={0} w={70} /></svg>
					<div style={{position: 'absolute', left: 1270, top: 330, width: 580, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, lineHeight: 1.15, color: INK}}>
						{AID_LINES.map(([q, a]) => <div key={q}>{q} <span style={{color: KR.ink}}>{a}</span></div>)}
					</div>
					<div style={{position: 'absolute', left: 1270, top: 640, width: 580, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, lineHeight: 1.25, color: DERIV.ink}}>Then look for a matched inside.</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><G02FinalFrame /></div> : null}
		</>
	);
};
