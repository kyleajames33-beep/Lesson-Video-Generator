// Scenes 5 to 9: worked example (a = 5, d = 3: a₁₀ = 32 and 50 = a₁₆), can a stack be exactly 150 cm (n = 12⅔: not a
// term; the stack straddles the line between 12 and 13 chairs), from two terms (a₄ = 13, a₉ = 33: d = 4, a = 1), the
// first negative term (a = 7, d = −4: a₃ = −1) and the memory aid (terms are posts, steps are gaps).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, HandText, INK, prog} from '../../kit';

import {CARD, FrameSvg, LiveReadoutBoard, SceneHeading, SvgPlate, TermPlot, plateHeight, usePlatePreload, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K5, K6, K7, K8, K9} from './cuemap';
import {AMBER, AMBER_STROKE, AnswerBox, Arcs, BLUE, BoxCard, CHAIR, ChairRig, Chip, FramedCard, GREEN, Hand, Ladder, POS, RED, Row, Slip, TEAL, Task, chairH} from './parts';
import type {Rig} from './parts';

const NEVER = 1e9;

// ---------- 5. worked example: a term and a position ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={40}>An arithmetic sequence has a = 5 and d = 3. (a) Find the 10th term. (b) Which term equals 50?</Task>
			<BoxCard x={96} y={320} w={420} at={6} size={52} title="givens">
				<div style={{color: BLUE, fontWeight: 800}}>a = 5</div>
				<div style={{color: AMBER, fontWeight: 800}}>d = 3</div>
			</BoxCard>
			<div style={{position: 'absolute', left: 560, top: 340, background: CARD, border: `4px solid ${INK}`, borderRadius: 16, padding: '6px 26px 10px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK}}>aₙ = <span style={{color: BLUE}}>a</span> + (n − 1)<span style={{color: AMBER}}>d</span></div>
			<BoxCard x={1000} y={480} w={820} at={10} out={k.now - 8} size={42} title="plan">
				<div>(a) a₁₀ is 9 steps of d after a.</div>
				<div>(b) set aₙ = 50 and solve for n; n must be a whole number.</div>
			</BoxCard>
			<Hand x={96} y={500} at={0} size={42} color={INK}>(a) the 10th term</Hand>
			<Ladder x={96} y={560} cardW={150} h={96} gap={22} size={48} values={['5', '8', '11', '…', '32']} dropAt={[0, 6, 12, 18, k.t32]} labels={i => ['n = 1', 'n = 2', 'n = 3', '', 'n = 10'][i]} slots={5} />
			<FrameSvg><g opacity={prog(fr, k.nine, 12)}><path d={`M${96 + 75},${700} v14 H${96 + 4 * 172 + 75} v-14`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" /></g></FrameSvg>
			<Hand x={330} y={720} at={k.nine} size={42} color={AMBER}>9 steps of 3</Hand>
			<Row x={96} y={790} at={k.so} size={48}>a₁₀ = 5 + 9 × 3 = 5 + 27</Row>
			<AnswerBox x={96} y={880} at={k.t32} size={52}>a₁₀ = 32</AnswerBox>
			<Hand x={1000} y={500} at={k.now} size={42} color={INK}>(b) which term is 50?</Hand>
			<Row x={1000} y={570} at={k.set} size={52} dim={prog(fr, k.take, 12)} small={40}>5 + (n − 1) × 3 = 50</Row>
			<Row x={1000} y={650} at={k.take} size={52} dim={prog(fr, k.divide, 12)} small={40}>(n − 1) × 3 = 45</Row>
			<Row x={1000} y={730} at={k.fifteen} size={52}>n − 1 = 15</Row>
			<AnswerBox x={1000} y={820} at={k.n16} size={52}>n = 16</AnswerBox>
			<Row x={1000} y={940} at={k.check} size={40} color={POS}>check: 5 + 15 × 3 = 50  ✓</Row>
			<Slip x={1380} y={760} at={k.n16 + 30} size={44} caption="that is n − 1">n = 15</Slip>
		</>
	);
};

// ---------- 6. can a stack be exactly 150 cm? ----------
const R6: Rig = {cx: 370, floor: 930, pxcm: 3.6, scaleX: 150, maxCm: 160, tick: 20};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const n = fr < k.between ? 11 : fr < k.f152 - 10 ? 12 : 13;
	const count = fr < k.between ? 11 : fr < k.f152 - 10 ? 11 + Math.min(1, (fr - k.between) / 12) : 12 + Math.min(1, (fr - k.f152 + 10) / 12);
	return (
		<>
			<Task x={96} y={150} w={1728} at={0} size={44}>Is 150 a term of 80, 86, 92, …?</Task>
			<ChairRig r={R6} count={count} floorW={470} ref={{cm: 150, o: 1, label: '150 cm?'}} />
			<Row x={640} y={290} at={k.eighty} size={52} dim={prog(fr, k.so, 12)} small={40}>80 + (n − 1) × 6 = 150</Row>
			<Row x={640} y={370} at={k.seventy} size={52} dim={prog(fr, k.twelve, 12)} small={40}>n − 1 = 70/6</Row>
			<Row x={640} y={450} at={k.twelve} size={60}>n = 12⅔</Row>
			<Hand x={900} y={462} at={k.not} size={46} color={RED}>not a whole number</Hand>
			<Chip x={640} y={560} at={k.term} size={48} color={RED}>150 is not a term</Chip>
			<LiveReadoutBoard x={640} y={690} width={470} at={-30} inline size={52} labelSize={32} rows={[
				{label: 'chairs n', value: n, digits: 0, role: 'inner'},
				{label: 'height (cm)', value: chairH(n), digits: 0, role: 'a'},
			]} />
			<TermPlot x={1170} y={330} width={700} height={520} window={{x: [10.4, 14.6], y: [135, 162]}} nRange={[11, 14]} at={-30}
				series={[{term: chairH, at: k.graph + 10, stagger: 8}]} refLine={{Y: 150, label: '150', at: -30}}
				xTicks={[11, 12, 13, 14]} yTicks={[140, 146, 152, 158]} xLabel="n" yLabel="aₙ (cm)">
				{(m: PlotMap) => <>{[[12, k.f146], [13, k.f152]].map(([nn, a]) => {const [px, py] = m.p(nn, chairH(nn)); return <circle key={nn} cx={px} cy={py} r={26} fill="none" stroke={AMBER_STROKE} strokeWidth={5} opacity={prog(fr, a, 10)} />;})}</>}
			</TermPlot>
			<Hand x={1180} y={880} at={k.between} size={42} color={INK}>{'150 falls between a₁₂ and a₁₃:\n12 chairs too short, 13 too tall'}</Hand>
		</>
	);
};

// ---------- 7. worked example: from two terms ----------
const L7 = {x: 96, y: 420, cardW: 170, gap: 20};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const step = L7.cardW + L7.gap;
	const cx = (i: number) => L7.x + i * step + L7.cardW / 2;
	return (
		<>
			<Task x={96} y={150} w={760} at={0} size={44}>Find a and d.</Task>
			<BoxCard x={900} y={150} w={620} at={6} size={44} title="given">
				<div style={{fontWeight: 800}}><span style={{color: BLUE}}>a₄ = 13</span>,  <span style={{color: BLUE}}>a₉ = 33</span></div>
			</BoxCard>
			<Ladder x={L7.x} y={L7.y} cardW={L7.cardW} gap={L7.gap} size={52} values={[fr >= k.one ? '1' : 'a = ?', '', '', '13', '', '', '', '', '33']} dropAt={[-30, NEVER, NEVER, -30, NEVER, NEVER, NEVER, NEVER, -30]} labels={i => `n = ${i + 1}`} slots={9} />
			<Arcs x={L7.x} y={L7.y} cardW={L7.cardW} gap={L7.gap} size={40} arcs={[
				...[0, 1, 2, 3, 4].map(i => ({from: 3 + i, to: 4 + i, label: String(i + 1), at: k.five - 10 + i * 6})),
				...[0, 1, 2].map(i => ({from: 3 - i, to: 2 - i, label: '− 4', at: k.now + 20 + i * 10})),
			]} />
			<FrameSvg><g opacity={prog(fr, k.rises, 12)}><path d={`M${cx(3)},${L7.y + 160} v14 H${cx(8)} v-14`} stroke={BLUE} strokeWidth={5} fill="none" /></g></FrameSvg>
			<Hand x={cx(3) + 120} y={L7.y + 186} at={k.rises} size={42} color={BLUE}>rise: 33 − 13 = 20 over 5 steps</Hand>
			<Row x={96} y={700} at={k.so} size={56}>5d = 20</Row>
			<AnswerBox x={420} y={690} at={k.four} size={56}>d = 4</AnswerBox>
			<BoxCard x={1180} y={720} w={620} at={k.same} size={40} title="the same, as equations">
				<div>a + 8d = 33</div><div>a + 3d = 13</div><div style={{fontWeight: 800}}>subtract: 5d = 20</div>
			</BoxCard>
			<Row x={96} y={820} at={k.three} size={56}>a = 13 − 3 × 4</Row>
			<AnswerBox x={600} y={810} at={k.one} size={56}>a = 1</AnswerBox>
			<Row x={96} y={930} at={k.check} size={40} color={POS}>check: a₉ = 1 + 8 × 4 = 33  ✓</Row>
		</>
	);
};

// ---------- 8. going down: the first negative term ----------
const T8 = (n: number) => 11 - 4 * n;
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	return (
		<>
			<Task x={96} y={150} w={760} at={0} size={44}>Find the first negative term.</Task>
			<BoxCard x={900} y={150} w={620} at={6} size={44} title="given">
				<div style={{fontWeight: 800}}><span style={{color: BLUE}}>a = 7</span>,  <span style={{color: AMBER}}>d = −4</span></div>
			</BoxCard>
			<TermPlot x={40} y={260} width={900} height={780} window={{x: [-0.2, 5.7], y: [-11, 9]}} nRange={[1, 5]} at={-30}
				series={[{term: (n: number) => (n === 1 ? T8(n) : NaN), at: -30}, {term: (n: number) => (n > 1 ? T8(n) : NaN), at: k.formula - 8, stagger: 8, color: BLUE}]} guide={{fn: T8, at: k.simp}} refLine={{Y: 0, at: k.set, color: INK}}
				boundary={{n: 2.75, at: k.so, label: '2.75: not a position', tint: fr >= k.whole ? 'right' : undefined}} triangle={{n: 3, at: k.grad}}
				xTicks={[1, 2, 3, 4, 5]} yTicks={[-9, -5, -1, 3, 7]} xLabel="n" yLabel="aₙ">
				{(m: PlotMap) => {const [px, py] = m.p(3, -1); return <circle cx={px} cy={py} r={28} fill="none" stroke={AMBER_STROKE} strokeWidth={6} opacity={prog(fr, k.first, 12)} />;}}
			</TermPlot>
			<div style={{position: 'absolute', left: 980, top: 290, background: CARD, border: `4px solid ${INK}`, borderRadius: 16, padding: '4px 24px 8px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK}}>aₙ = <span style={{color: BLUE}}>a</span> + (n − 1)<span style={{color: AMBER}}>d</span></div>
			<Hand x={1500} y={300} at={0} out={k.formula} size={40} color={AMBER} w={340}>{'down 4 each\nstep from 7'}</Hand>
			<Row x={980} y={390} at={k.formula} size={52} dim={prog(fr, k.set, 12)} small={40}>aₙ = 7 + (n − 1)(−4)</Row>
			<Row x={980} y={462} at={k.simp} size={52} dim={prog(fr, k.set, 12)} small={40}>{'   '}= 11 − 4n</Row>
			<BoxCard x={980} y={560} w={840} at={10} out={k.set - 6} size={42} title="plan">
				<div>1. Write aₙ for this sequence.</div>
				<div>2. Solve aₙ &lt; 0 for n.</div>
				<div>3. n is a position: take the first whole number.</div>
			</BoxCard>
			<Row x={980} y={540} at={k.set} size={52} dim={prog(fr, k.then, 12)} small={40}>11 − 4n &lt; 0</Row>
			<Row x={980} y={612} at={k.then} size={52} dim={prog(fr, k.but, 12)} small={40}>4n &gt; 11</Row>
			<Row x={980} y={690} at={k.so} size={56}>n &gt; 11/4 <span style={{color: POS, fontSize: 42, opacity: prog(fr, k.five, 12)}}>= 2.75</span></Row>
			<Hand x={1430} y={700} at={k.but} size={42} color={AMBER}>n is a whole number</Hand>
			<AnswerBox x={980} y={780} at={k.three} size={50}>first negative term: a₃ = −1</AnswerBox>
			<Ladder x={980} y={900} cardW={120} h={80} gap={20} size={44} values={['7', '3', '−1']} dropAt={[k.check + 30, k.check + 60, k.one]} />
			<Hand x={1420} y={910} at={k.check + 64} size={40} color={AMBER}>−4 each step</Hand>
			<Hand x={700} y={660} at={k.grad} size={42} color={AMBER}>gradient −4 = d</Hand>
		</>
	);
};

// ---------- 9. memory aid ----------
export const AID2 = 'Terms are posts, steps are gaps.';
/** Five chairs side by side (the posts) with amber d arcs between their back tops. */
export const ChairPosts: React.FC<{x: number; floor: number; w: number; step: number; at: number; arcsAt: number; ringAt?: number; size?: number}> = ({x, floor, w, step, at, arcsAt, ringAt, size = 40}) => {
	usePlatePreload([CHAIR.src]);
	const f = useCurrentFrame();
	const h = plateHeight(CHAIR, w);
	const s = w / (CHAIR.box[2] - CHAIR.box[0]);
	const top = (i: number): [number, number] => [x + i * step + (215 - CHAIR.box[0]) * s, floor - h];
	return <FrameSvg>
		{[0, 1, 2, 3, 4].map(i => <g key={i} opacity={prog(f, at + i * 6, 10)}><SvgPlate plate={CHAIR} x={x + i * step} y={floor - h} w={w} /></g>)}
		{[0, 1, 2, 3].map(i => {const [ax, ay] = top(i), [bx] = top(i + 1); const o = prog(f, arcsAt + i * 8, 10); return <g key={'a' + i} opacity={o}><path d={`M${ax},${ay - 10} Q${(ax + bx) / 2},${ay - 70} ${bx},${ay - 10}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" /><text x={(ax + bx) / 2} y={ay - 60} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, fill: AMBER}} stroke={CARD} strokeWidth={6} paintOrder="stroke">d</text></g>;})}
		{ringAt !== undefined ? <ellipse cx={x + w / 2} cy={floor - h / 2} rx={w * 0.66} ry={h * 0.6} fill="none" stroke={AMBER_STROKE} strokeWidth={6} opacity={prog(f, ringAt, 12)} /> : null}
	</FrameSvg>;
};
export const S09: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K9;
	return (
		<>
			<FramedCard x={110} y={150} w={1700} h={860} at={0} />
			<div style={{position: 'absolute', left: 160, top: 172}}><HandText text="Memory aid" at={4} size={50} color={POS} /></div>
			<ChairPosts x={180} floor={780} w={190} step={225} at={-30} arcsAt={k.gaps} ringAt={k.first} />
			<Hand x={1290} y={220} at={0} size={52} color={POS}>Why n − 1?</Hand>
			<Row x={200} y={830} at={k.gaps + 30} size={48}><span style={{color: BLUE}}>5 terms</span>, <span style={{color: AMBER}}>4 steps</span></Row>
			<Hand x={160} y={420} at={k.first} size={44} color={AMBER}>0 steps</Hand>
			<div style={{position: 'absolute', left: 1290, top: 300, width: 480}}><HandText text={AID2} at={k.terms} size={72} cps={18} maxWidth={480} /></div>
			<Row x={1290} y={620} at={k.so} size={44}>aₙ is n − 1 steps from a₁</Row>
			<div style={{position: 'absolute', left: 1290, top: 690, width: 480, opacity: prog(fr, k.so + 20, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK}}>aₙ = a + (n − 1)<span style={{color: AMBER}}>d</span></div>
		</>
	);
};
