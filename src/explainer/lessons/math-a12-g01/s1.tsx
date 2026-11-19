// Scenes 1 to 4: s12's final frame clears to the exam desk (the first question prints on the booklet), the skate
// bowl with the board on the tangent and the root x = −1 falling through empty space; the last operation picks the
// rule (structure trees lit in evaluation order); the domain picks the answers (three domain rows, then the empty
// line at x = −1); worked problem 1's structure, derivative and domain (the kit decision tree drops its results).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {DecisionTree, FrameSvg, HandTag, SceneHeading, smooth} from '../../math/studio';
import {K1, K2, K3, K4} from './cuemap';
import {BR, Calc, Chip, Desk, DOMAIN_FILL, EqStrip, BoxCard, FONT_DISPLAY, FONT_HAND, GREY, INK, LIT, MarkChip, MiniTree, RED, Row, S12FinalFrame, SKATE_WIN, SkateGraph, Task, TreeChips, VIO} from './parts';
import type {GraphBox} from './parts';

export const Q1 = "A skate bowl's side follows the curve y = x² − 6 ln x (x > 0). A skateboard rests flat against it where the slope is 4. Find the equation of the line along the board.";
const BROWNC = '#8a5a12';
const G1: GraphBox = {x: 60, y: 170, w: 1040, h: 760};
/** Frame position of a skate-window point on a graph box (same geometry as the StudioPlot). */
export const gp = (g: GraphBox, X: number, Y: number): [number, number] => {
	const bw = g.w - 126, bh = g.h - 120;
	return [g.x + 84 + ((X - SKATE_WIN.x[0]) / (SKATE_WIN.x[1] - SKATE_WIN.x[0])) * bw, g.y + 48 + ((SKATE_WIN.y[1] - Y) / (SKATE_WIN.y[1] - SKATE_WIN.y[0])) * bh];
};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	if (fr < 1) return <S12FinalFrame />;
	const s12 = 1 - prog(fr, 8, 26);
	const slide = smooth(prog(fr, k.practice, 30));
	const desk = prog(fr, 22, 20) * (1 - prog(fr, k.board + 14, 10));
	const stage = prog(fr, k.board + 16, 10);
	const [mx, my] = gp(G1, -1, 6.2);
	return (
		<>
			{s12 > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: s12}}><S12FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, k.board + 14, 10)}}>
				<Chip x={1260 + (1300 - 1260) * slide} y={800 + (96 - 800) * slide} at={-300} size={44 - 10 * slide} color={BROWNC}>Later: mixed practice</Chip>
			</div>
			<SceneHeading text="Which rule, which domain?" at={k.questions} size={44} />
			<Desk x={180} y={150} w={1560} q={Q1} at={k.here + 6} size={38} o={desk} />
			{stage > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: stage}}>
				<SkateGraph g={G1} board={1} v3={prog(fr, k.one, 14)} vm1={prog(fr, k.one + 6, 14)} />
				<Task x={1130} y={150} w={730} at={-300} size={33}>{Q1}</Task>
				<HandTag x={600} y={862} text="the board is the tangent" at={k.board + 20} size={38} color={VIO.ink} />
				<MarkChip x={1150} y={470} at={k.one} size={40}>x = 3</MarkChip>
				<MarkChip x={1340} y={470} at={k.one + 6} qAt={k.so} size={40}>x = −1</MarkChip>
				<HandTag x={mx - 150} y={my} text="no bowl here" at={k.but + 10} size={38} color={GREY} />
				<Calc x={1640} y={470} w={190} value={fr >= k.so ? '?' : undefined} />
				<TreeChips x={1150} y={580} dir="col" size={30} at={k.so + 20} gap={12} />
				<Chip x={1150} y={862} at={k.so + 10} size={32} color={BROWNC}>Which rule? Which answers survive?</Chip>
			</div> : null}
		</>
	);
};

// ---------- 2. the last operation picks the rule ----------
const COLS = [380, 960, 1540];
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const a = 1 - prog(fr, k.here - 4, 14), b = prog(fr, k.here + 4, 14);
	const calc = fr < k.one + 20 ? undefined : fr < k.one + 50 ? '8' : fr < k.last + 30 ? '0.909' : '7.27';
	const exprs = ['x³ sin x', 'sin(x³)', 'sin x / x³'];
	const rules = ['product rule', 'chain rule', 'quotient rule'];
	const ruleAt = [k.r1 - 20, k.r2 - 20, k.r3 - 20];
	const openAt = [k.f1 + 10, k.f2 + 10, k.f3 + 10];
	return (
		<>
			<SceneHeading text="The last step picks the rule" at={4} size={44} />
			<Chip x={1180} y={92} at={-30} size={28} color={GREY}>skate bowl: y = x² − 6 ln x, gradient 4</Chip>
			<TreeChips x={1180} y={160} lit={[6]} res={['product · quotient · chain · term by term']} resAt={[k.rules + 6]} size={30} />
			{a > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: a}}>
				<Row x={250} y={240} at={k.imagine} size={52} small={52}>x³ sin x,  with x = 2</Row>
				<MiniTree kind="product" cx={620} y={360} s={1.35} leafAt={[k.one + 20, k.one + 50]} rootAt={k.last + 30} vals={{leaves: ['8', '0.909'], root: '7.27'}} ring={k.structure} />
				<Calc x={1300} y={300} w={250} value={calc} />
				<HandTag x={800} y={340} text="last step = outer structure" at={k.structure + 6} size={40} color={LIT.ink} />
				<div style={{position: 'absolute', left: 250, top: 760, opacity: prog(fr, k.one + 20, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: GREY}}>first x³ and sin x, then multiply: × lights last</div>
			</div> : null}
			{b > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: b}}>
				{exprs.map((e, i) => <div key={e} style={{position: 'absolute', left: COLS[i] - 230, top: 280, width: 460, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: INK}}>{e}</div>)}
				{(['product', 'chain', 'quotient'] as const).map((t, i) => <MiniTree key={t} kind={t} cx={COLS[i]} y={400} leafAt={[openAt[i], openAt[i] + 8]} rootAt={ruleAt[i]} collapsed pulse={k.rules} />)}
				{rules.map((r, i) => <div key={r} style={{position: 'absolute', left: COLS[i] - 230, top: 700, width: 460, display: 'flex', justifyContent: 'center', opacity: prog(fr, ruleAt[i] + 8, 12)}}><div style={{background: '#fffdf8', border: `4px solid ${LIT.stroke}`, borderRadius: 18, padding: '4px 22px 6px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, color: LIT.ink}}>{r}</div></div>)}
				<div style={{position: 'absolute', left: 96, top: 850, opacity: prog(fr, k.rules + 10, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, color: GREY}}>same two pieces, three different last steps · sums and differences: term by term</div>
				<FrameSvg><Countdown start={k.think + 12} end={k.think + 102} x={1830} y={470} r={50} ringFrom={k.think} /></FrameSvg>
			</div> : null}
		</>
	);
};

// ---------- 3. the domain picks the answers ----------
// The bowl stays on screen from frame 0 (left); the three domain rows build in the right column, each with its
// number-line picture; on "Why does this matter?" the empty line at x = −1 is circled.
const ROWS3 = [{t: 'ln u: u > 0', kind: 'ln'}, {t: 'fraction: denominator ≠ 0', kind: 'frac'}, {t: 'tan u: u ≠ π/2 + kπ', kind: 'tan'}] as const;
const G3: GraphBox = {x: 40, y: 220, w: 1020, h: 730};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const at = [k.log, k.fraction, k.tan];
	const [ex, ey] = gp(G3, -1, 5);
	const rowO = (i: number) => prog(fr, at[i], 12);
	return (
		<>
			<SceneHeading text="The domain picks the answers" at={4} size={44} />
			<div style={{position: 'absolute', left: 96, top: 150, display: 'flex', gap: 14}}>
				{['x³ sin x: product', 'sin(x³): chain', 'sin x / x³: quotient'].map(s => <div key={s} style={{background: '#fffdf8', border: '3px solid rgba(60,45,20,0.25)', borderRadius: 14, padding: '2px 14px 4px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, color: INK}}>{s}</div>)}
			</div>
			<TreeChips x={1110} y={150} at={k.log - 10} lit={[undefined, 6]} res={[undefined, 'ln · fraction · tan']} resAt={[undefined, k.so + 6]} size={32} />
			<TreeChips x={1110} y={380} dir="col" size={52} gap={26} at={-30} out={k.log - 14} lit={[undefined, 6]} res={['the rule', 'the answers', 'the equations']} resAt={[-30, 6, -30]} />
			<SkateGraph g={G3} board={1} vm1={1} band={prog(fr, k.log, 14)} />
			<FrameSvg><ellipse cx={ex} cy={ey} rx={52} ry={190} fill="none" stroke={RED} strokeWidth={6} opacity={prog(fr, k.it, 10)} /></FrameSvg>
			<HandTag x={ex + 64} y={ey - 150} text="no point, so no tangent" at={k.it + 6} size={40} color={RED} />
			<HandTag x={ex + 64} y={ey - 210} text="x = −1: no bowl here" at={k.an} out={k.it} size={38} color={GREY} />
			{ROWS3.map((r, i) => <div key={r.t} style={{position: 'absolute', inset: 0, opacity: rowO(i)}}>
				<div style={{position: 'absolute', left: 1110, top: 330 + i * 180, width: 740, height: 165, boxSizing: 'border-box', background: '#fffdf8', borderRadius: 18, boxShadow: '0 14px 32px rgba(60,45,20,0.10)', border: `3px solid ${fr >= at[i] ? BR.stroke : 'rgba(60,45,20,0.12)'}`}} />
				<div style={{position: 'absolute', left: 1140, top: 340 + i * 180, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK}}>{r.t}</div>
			</div>)}
			<FrameSvg>
				{ROWS3.map((r, i) => {
					const o = rowO(i), y = 450 + i * 180, x0 = 1150, x1 = 1810, z = (x0 + x1) / 2;
					return <g key={r.kind} opacity={o}>
						{r.kind === 'ln' ? <rect x={z} y={y - 12} width={x1 - z} height={24} fill={DOMAIN_FILL} stroke={BR.stroke} strokeWidth={3} /> : null}
						<line x1={x0} x2={x1} y1={y} y2={y} stroke={INK} strokeWidth={4} />
						{r.kind !== 'tan' ? <><circle cx={z} cy={y} r={13} fill="#fffdf8" stroke={r.kind === 'ln' ? BR.stroke : INK} strokeWidth={5} /><text x={z - 20} y={y + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: INK}}>0</text></> : null}
						{r.kind === 'ln' ? <text x={x1} y={y - 22} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: BR.ink}}>u &gt; 0 allowed</text> : null}
						{r.kind === 'frac' ? <text x={z + 24} y={y - 20} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>bottom = 0: not allowed</text> : null}
						{r.kind === 'tan' ? [-1.5, -0.5, 0.5, 1.5].map((q, j) => {const px = z + q * 200, g = prog(fr, k.asym, 10); return <g key={q}><line x1={px} x2={px} y1={y - 40} y2={y + 20} stroke={g > 0.5 ? RED : GREY} strokeWidth={g > 0.5 ? 6 : 4} strokeDasharray="10 8" /><text x={px + 8} y={y - 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: GREY}}>{['−3π/2', '−π/2', 'π/2', '3π/2'][j]}</text></g>;}) : null}
					</g>;
				})}
			</FrameSvg>
			<Chip x={1110} y={872} at={k.so} size={36} color={BR.ink}>domain first: it picks the answers</Chip>
			<div style={{position: 'absolute', left: 1110, top: 250, width: 740, boxSizing: 'border-box', background: '#fffdf8', borderRadius: 18, borderLeft: `10px solid ${BR.stroke}`, boxShadow: '0 14px 32px rgba(60,45,20,0.10)', padding: '6px 22px 10px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>Which x-values does it allow?</div>
		</>
	);
};

// ---------- 4. worked problem 1: structure and derivative ----------
export const G4: GraphBox = {x: 40, y: 360, w: 820, h: 570};
export const W1Top: React.FC<{taskAt?: number}> = ({taskAt = -300}) => (
	<>
		<Task x={96} y={150} w={1728} at={taskAt} size={40}>Find the equation of the line along the board (the tangent with gradient 4).</Task>
		<EqStrip x={96} y={270} at={taskAt} size={48}>y = x² − 6 ln x</EqStrip>
		<BoxCard x={560} y={262} w={560} at={taskAt} size={36} title="given">gradient of the tangent: 4</BoxCard>
	</>
);
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const [px, py] = gp(G4, -1, 9.5);
	return (
		<>
			<SceneHeading text="Worked problem 1: structure and domain" at={4} size={44} />
			<W1Top taskAt={k.back} />
			<SkateGraph g={G4} board={1} vm1={1} band={prog(fr, k.input, 14)} />
			<MarkChip x={px - 70} y={py - 30} at={k.back + 10} size={34} color={GREY}>x = −1</MarkChip>
			<DecisionTree x={890} y={380} colW={320} gap={12} size={28} boardY={330} at={k.back + 6} nodes={[
				{question: 'Last step?', branches: [{label: 'product'}, {label: 'quotient'}, {label: 'chain'}, {label: 'term by term', litAt: k.last + 20, result: 'term by term'}]},
				{question: 'Domain?', branches: [{label: 'ln', litAt: k.domain, result: 'x > 0'}, {label: 'fraction'}, {label: 'tan'}]},
				{question: 'Demand?', branches: [{label: 'given gradient', litAt: k.write + 30, result: "f′(x) = 4"}, {label: 'outside point'}, {label: 'stationary point'}]},
			]} />
			<Row x={890} y={790} at={k.deriv} size={52} small={52}>dy/dx = 2x − 6/x</Row>
			<div style={{position: 'absolute', left: 1400, top: 806, opacity: prog(fr, k.deriv + 20, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: GREY}}>d/dx ln x = 1/x</div>
			<Chip x={890} y={866} at={k.input} size={40} color={BR.ink}>domain: x &gt; 0</Chip>
			<FrameSvg>
				{(() => {const o = prog(fr, k.write + 10, 12); if (o < 0.01) return null; const a: [number, number] = [890, 900], b: [number, number] = [px + 80, py + 40]; const ang = Math.atan2(b[1] - a[1], b[0] - a[0]); return <g opacity={o} stroke={GREY} strokeWidth={5} fill="none" strokeLinecap="round"><path d={`M${a[0]},${a[1]} Q${(a[0] + b[0]) / 2},${a[1] + 20} ${b[0]},${b[1]}`} strokeDasharray="12 9" /><path d={`M${b[0] - 22 * Math.cos(ang - 0.5)},${b[1] - 22 * Math.sin(ang - 0.5)} L${b[0]},${b[1]} L${b[0] - 22 * Math.cos(ang + 0.5)},${b[1] - 22 * Math.sin(ang + 0.5)}`} /></g>;})()}
			</FrameSvg>
		</>
	);
};
export {VIO, RED};
