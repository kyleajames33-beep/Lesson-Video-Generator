// Scenes 9 to 14 of math-a12-g01: attempt 1 (ln(x² − 4), gradient 1) and its brief feedback (crossed "both
// roots"), attempt 2 (the tangent to ln x through (0, 1)) and its brief feedback (crossed "gradient at x = 0"), the
// handoff to g02's tank stage (exported as G01FinalFrame, g02's opening frame) and the key notes, which return
// silently to that frame.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {CARD, GivensStrip, KeyNotesBullets, PlateImg, QuestionAxes, QuestionCard, SceneHeading, StudioPlot, fnPath} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {BROWN, Chip} from '../math-a12-t01/parts';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {Ac, AnswerBox, BR, Calc, FramedCard, GOOD, GREY, LIT, QStrip, Row, Slip, TreeChips, VIO} from './parts';
import {AID_MAIN} from './s2';

// ---------- the tank stage (scene 13; g02's anchor and opening frame) ----------
export const TANK: PlateSpec = {src: 'assets/biology/m7-village-water-tank-v1.png', nat: [2000, 2000], box: [487, 253, 1512, 1746]};
export const rate = (t: number) => 2 * t * Math.exp(t * t);
export const TANK_WIN = {x: [-0.08, 1.12] as [number, number], y: [-0.4, 6.4] as [number, number]};
export const TANK_G = {x: 470, y: 150, w: 1380, h: 650};
const GREYC = '#6b6358', AMBC = '#9c5a00';
const CHIPS = ['an amount?', 'a function?', 'an area?', 'an estimate?'];
/**
 * The rainwater tank beside the rate graph y = 2t e^(t²) on 0 ≤ t ≤ 1 (filled endpoint markers; grey end height
 * 2e ≈ 5.44), four grey chips for what a question could ask, "Which integral?" and "Next: integral practice".
 * No integral, value or shading.
 */
export const TankBoard: React.FC<{curveAt: number; chipsAt: readonly [number, number, number, number]; whichAt: number; nextAt: number; draw?: number}> = ({curveAt, chipsAt, whichAt, nextAt, draw = 1}) => {
	const f = useCurrentFrame();
	const to = Math.max(0.001, Math.min(1, draw));
	return <>
		<PlateImg plate={TANK} x={90} y={250} w={300} />
		<StudioPlot x={TANK_G.x} y={TANK_G.y} width={TANK_G.w} height={TANK_G.h} window={TANK_WIN} xTicks={[{value: 0.5, label: '0.5'}, {value: 1, label: '1'}]} yTicks={[2, 4, 6]} xLabel="t (s)" yLabel="rate (L/s)" at={curveAt}>
			{m => <>
				<path d={fnPath(m, rate, 0, to, 300)} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" />
				<circle cx={m.p(0, 0)[0]} cy={m.p(0, 0)[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} />
				{to > 0.999 ? <circle cx={m.p(1, rate(1))[0]} cy={m.p(1, rate(1))[1]} r={13} fill={INK} stroke={CARD} strokeWidth={4} /> : null}
				<text x={m.p(0.42, 0)[0]} y={m.p(0, 4.6)[1]} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: INK}} stroke={CARD} strokeWidth={8} paintOrder="stroke">y = 2t e^(t²),  0 ≤ t ≤ 1</text>
				{to > 0.999 ? <text x={m.p(1, 0)[0] - 30} y={m.p(1, rate(1))[1] + 8} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: GREYC}}>2e ≈ 5.44</text> : null}
			</>}
		</StudioPlot>
		<div style={{position: 'absolute', left: 470, top: 840, display: 'flex', gap: 22}}>
			{CHIPS.map((c, i) => <div key={c} style={{opacity: prog(f, chipsAt[i], 12), transform: `translateY(${(1 - prog(f, chipsAt[i], 14)) * 10}px)`, background: CARD, border: `3px solid ${GREYC}`, borderRadius: 16, padding: '4px 20px 6px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, color: GREYC}}>{c}</div>)}
		</div>
		<Chip x={700} y={190} at={whichAt} size={48} color={AMBC}>Which integral?</Chip>
		<Chip x={96} y={96} at={nextAt} size={34} color={BROWN}>Next: integral practice</Chip>
	</>;
};
/** g01's final frame (the tank beside the rate graph); g02 opens on it. */
export const G01FinalFrame: React.FC = () => <TankBoard curveAt={-300} chipsAt={[-300, -300, -300, -300]} whichAt={-300} nextAt={-300} />;

// ---------- 9. attempt 1 ----------
const Q1 = 'The curve y = ln(x² − 4) has a tangent with gradient 1 at one or more points. Find all such x-values, giving exact answers.';
export const S09: React.FC = () => (
	<QuestionCard at={0} size={40} w={1480} y={200} hold={{...hold('scene-09'), ringFrom: K9.pause}} pauseAt={K9.pause} picture={{node: <div style={{position: 'relative', width: 240, height: 450}}><Calc x={0} y={0} w={240} /></div>, w: 240}}><div>{Q1}</div></QuestionCard>
);

// ---------- 10. feedback 1 ----------
const lnq = (x: number) => Math.log(x * x - 4);
const R5 = Math.sqrt(5);
const GI = {x: 980, y: 300, w: 660, h: 460};
const WI = {x: [-6, 6] as [number, number], y: [-3, 4] as [number, number]};
export const S10: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K10;
	const calc = fr < k.one ? undefined : fr < k.five ? '1 − √5 ≈ −1.24' : '≈ 3.24';
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={32} parts={['The curve y = ', {u: 'ln', at: k.chain}, '(', {u: 'x² − 4', at: k.domain}, ') has a tangent with ', {u: 'gradient 1', at: k.setting}, ' at one or more points. Find all such x-values, giving exact answers.']} />
			<GivensStrip x={96} y={290} size={36} items={[{content: 'y = ln(x² − 4)', at: k.chain}, {content: 'gradient 1', at: k.chain + 8}]} />
			<Row x={96} y={380} at={k.chain} size={52} small={40} dim={prog(fr, k.domain, 12)}>dy/dx = 2x/(x² − 4)</Row>
			<Row x={96} y={455} at={k.two - 20} size={40} small={36} color={BR.ink} dim={prog(fr, k.setting, 12)}>domain: x² − 4 &gt; 0, so x &lt; −2 or x &gt; 2</Row>
			<Row x={96} y={525} at={k.setting} size={48} small={40} dim={prog(fr, k.so, 12)}>x² − 2x − 4 = 0, so x = 1 ± √5</Row>
			<AnswerBox x={96} y={612} at={k.five} size={52}>x = 1 + √5</AnswerBox>
			<Slip x={96} y={720} w={860} at={k.keep} strikeAt={k.keep + 12} size={40} caption="1 − √5 is outside the domain">x = 1 + √5 or 1 − √5</Slip>
			<StudioPlot x={GI.x} y={GI.y} width={GI.w} height={GI.h} window={WI} xTicks={[-4, -2, 2, 4]} yTicks={[-2, 2]} at={k.domain - 10}>
				{m => {
					const [g0] = m.p(-2, 0), [g1] = m.p(2, 0), gap = prog(fr, k.two - 10, 14);
					const xr = 1 + R5, xb = 1 - R5;
					const [tx, ty] = m.p(xr, lnq(xr));
					const fall = prog(fr, k.one + 10, 20);
					const tO = prog(fr, k.five, 14);
					const [p0, q0] = m.p(xr - 1.3, lnq(xr) - 1.3), [p1, q1] = m.p(xr + 1.3, lnq(xr) + 1.3);
					return <>
						<rect x={g0} y={m.box.top} width={g1 - g0} height={m.box.height} fill="#ebe4d6" opacity={0.85 * gap} />
						<g clipPath={m.clip}>
							<path d={fnPath(m, lnq, -6, -2.0001, 300)} stroke={INK} strokeWidth={6} fill="none" />
							<path d={fnPath(m, lnq, 2.0001, 6, 300)} stroke={INK} strokeWidth={6} fill="none" />
							{[-2, 2].map(v => <line key={v} x1={m.p(v, 0)[0]} x2={m.p(v, 0)[0]} y1={m.box.top} y2={m.box.top + m.box.height} stroke={GREY} strokeWidth={3} strokeDasharray="10 8" />)}
							{tO > 0.01 ? <line x1={p0} y1={q0} x2={p1} y2={q1} stroke={VIO.stroke} strokeWidth={6} strokeLinecap="round" opacity={tO} /> : null}
						</g>
						{fall > 0.01 ? <circle cx={m.p(xb, 0)[0]} cy={m.p(0, 3.4 - 3.4 * fall)[1]} r={12} fill="#fffdf8" stroke={GREY} strokeWidth={5} opacity={fall} /> : null}
						{fall > 0.5 ? <text x={m.p(xb, 0)[0]} y={m.p(0, 0)[1] - 26} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: GREY}}>1 − √5</text> : null}
						{tO > 0.01 ? <circle cx={tx} cy={ty} r={12} fill={GOOD.stroke} stroke="#fffdf8" strokeWidth={4} opacity={tO} /> : null}
						<text x={(g0 + g1) / 2} y={m.box.top + 40} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: GREY}} opacity={gap}>no curve</text>
					</>;
				}}
			</StudioPlot>
			<Calc x={1665} y={300} w={190} value={calc} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
const Q2 = 'Find the equation of the tangent to y = ln x that passes through the point (0, 1).';
export const S11: React.FC = () => (
	<QuestionCard at={0} size={40} w={1480} y={200} heading="Last one" hold={{...hold('scene-11'), ringFrom: K11.pause}} pauseAt={K11.pause}
		picture={{node: <QuestionAxes w={420} h={280} window={{x: [-0.5, 9], y: [-1.5, 3]}} fn={x => Math.log(x)} domain={[0.05, 9]} />, w: 420}}><div>{Q2}</div></QuestionCard>
);

// ---------- 12. feedback 2 ----------
const E2 = Math.E ** 2;
const W12 = {x: [-0.5, 9] as [number, number], y: [-1.5, 3] as [number, number]};
export const S12: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K12;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={44} />
			<QStrip y={150} size={34} parts={['Find the equation of the tangent to y = ln x that passes through the point ', {u: '(0, 1)', at: k.zero}, '.']} />
			<GivensStrip x={96} y={260} size={36} items={[{content: 'y = ln x', at: k.zero}, {content: 'through (0, 1)', at: k.zero + 8}]} />
			<Row x={96} y={350} at={k.a} size={48} small={36} dim={prog(fr, k.tangent, 12)}>contact point: (<Ac>a</Ac>, ln <Ac>a</Ac>), <Ac>a</Ac> &gt; 0</Row>
			<Row x={96} y={420} at={k.tangent} size={48} small={36} dim={prog(fr, k.put, 12)}>y − ln <Ac>a</Ac> = (1/<Ac>a</Ac>)(x − <Ac>a</Ac>)</Row>
			<Row x={96} y={490} at={k.put} size={44} small={36} dim={prog(fr, k.ln2, 12)}>1 − ln <Ac>a</Ac> = (1/<Ac>a</Ac>)(0 − <Ac>a</Ac>) = −1</Row>
			<Row x={96} y={560} at={k.ln2} size={48} small={40} dim={prog(fr, k.y, 12)}>ln <Ac>a</Ac> = 2, so <Ac>a</Ac> = e²</Row>
			<AnswerBox x={96} y={640} at={k.y} size={52}>y = x/e² + 1</AnswerBox>
			<Slip x={96} y={750} w={860} at={k.grad} strikeAt={k.grad + 40} size={40} caption="x = 0 is outside the domain">gradient at x = 0</Slip>
			<StudioPlot x={GI.x} y={GI.y} width={GI.w} height={GI.h} window={W12} xTicks={[2, 4, {value: E2, label: 'e²'}]} yTicks={[1, 2]} at={-30}>
				{m => {
					const o = prog(fr, k.sq, 14);
					const [p0, q0] = m.p(-0.5, -0.5 / E2 + 1), [p1, q1] = m.p(9, 9 / E2 + 1);
					const z = prog(fr, k.zero, 12);
					return <>
						<g clipPath={m.clip}><path d={fnPath(m, Math.log, 0.05, 9, 300)} stroke={INK} strokeWidth={6} fill="none" />
							{o > 0.01 ? <line x1={p0} y1={q0} x2={p1} y2={q1} stroke={VIO.stroke} strokeWidth={6} strokeLinecap="round" opacity={o} /> : null}</g>
						<circle cx={m.p(0, 1)[0]} cy={m.p(0, 1)[1]} r={12} fill="#fffdf8" stroke={INK} strokeWidth={5} opacity={z} />
						<text x={m.p(0, 1)[0] + 20} y={m.p(0, 1)[1] - 16} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}} opacity={z}>(0, 1)</text>
						{o > 0.01 ? <><circle cx={m.p(E2, 2)[0]} cy={m.p(E2, 2)[1]} r={12} fill={GOOD.stroke} stroke="#fffdf8" strokeWidth={4} opacity={o} /><text x={m.p(E2, 2)[0] - 16} y={m.p(E2, 2)[1] - 22} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}} opacity={o}>(e², 2)</text></> : null}
					</>;
				}}
			</StudioPlot>
			<Calc x={1665} y={300} w={190} value={fr >= k.sq ? 'e² ≈ 7.39' : undefined} />
		</>
	);
};

// ---------- 13. handoff ----------
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.next - 4, 18);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="For any differentiation question" at={4} size={44} />
				<FramedCard x={300} y={190} w={1320} h={170} at={-30} />
				<div style={{position: 'absolute', left: 350, top: 222, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK}}>{AID_MAIN}</div>
				<TreeChips x={360} y={470} size={52} gap={44} lit={[k.last, k.domain, k.answer]} res={['the rule', 'the answers', 'the equations']} resAt={[k.last + 6, k.domain + 6, k.answer + 6]} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><TankBoard curveAt={k.next} chipsAt={[k.amount, k.fn, k.area, k.est]} whichAt={k.which} nextAt={k.which + 12} draw={prog(fr, k.next, 24)} /></div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <><span style={{color: LIT.ink}}>Last step</span> suggests the rule; sums go term by term.</>, at: 2},
		{content: <>Write the <span style={{color: BR.ink}}>domain</span> first; reject answers outside it.</>, at: 6},
		{content: <>Gradient m: solve f′(x) = m; the point comes from f.</>, at: 10},
		{content: <>Outside point: name the contact point (<Ac>a</Ac>, f(<Ac>a</Ac>)).</>, at: 14},
		{content: <>Stationary point (c, k): f(c) = k and f′(c) = 0.</>, at: 18},
	];
	const end = Math.max(1350, dur('scene-14'));
	const back = prog(fr, end - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={52} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1090} items={items} size={36} gap={44} />
				<FramedCard x={1230} y={196} w={650} h={660} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1270, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: GOOD.ink}}>Memory aid</div>
					<div style={{position: 'absolute', left: 1270, top: 290, width: 570, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.12, color: INK}}>{AID_MAIN}</div>
					<div style={{position: 'absolute', left: 1270, top: 560, width: 570, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: INK}}>Point not given? Name it <Ac>a</Ac>.</div>
					<TreeChips x={1270} y={680} size={28} gap={10} />
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><G01FinalFrame /></div> : null}
		</>
	);
};
