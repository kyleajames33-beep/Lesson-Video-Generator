// Scenes 1 to 6: s03's thin bars become the carnival's starting blocks and a display that keeps adding digits; 200
// reaction times arrive heat by heat and drop into a histogram; interval estimates (one that cuts a class, under
// the even-spread assumption); the zoomed window shrinking to a line (P(X = x) = 0); zero is not impossible.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, SceneHeading, makePlot, smooth} from '../../math/studio';
import {S03FinalFrame} from '../math-a12-s03/s3';
import {K1, K2, K3, K4, K5, K6} from './cuemap';
import {AREA, AnswerBox, Blocks, BoxCard, Chip, DATA_R, Display, EDGES, Framed, GOOD, GREY, Hand, INK, INK_SOFT, PredictRing, REL, Row, Slip, TIMES, Table, Task, TimesHist, ZoomWindow, amberRect, clsOf, sliceP, trim} from './parts';

// ---------- 1. hook: exactly 0.35 seconds? ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const slide = smooth(prog(fr, k.measure, 30));
	const b = prog(fr, k.at - 10, 20);
	const digits = fr < k.reads + 14 ? '' : fr < k.p3517 + 10 ? '0.35 s' : fr < k.p3517 + 24 ? '0.351' : fr < k.more ? '0.3517' : '0.3517' + (Math.floor((fr - k.more) / 12) % 2 ? ' ' : '…');
	return (
		<>
			{b < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - b, transform: `translateX(${-slide * 320}px)`}}>
				<S03FinalFrame />
				<GhostBars at={k.sofar + 8} />
				<Hand x={96} y={790} at={k.sofar + 8} size={36} color={GREY} w={300}>counts: separate values</Hand>
			</div> : null}
			{b > 0 ? <div style={{position: 'absolute', inset: 0, opacity: b}}>
				<SceneHeading text="Why do continuous probabilities come from intervals?" at={k.at} size={52} />
				<Blocks x={60} y={360} w={800} />
				<Hand x={96} y={760} at={k.sensors} size={40} color={INK} w={760}>sensors in the blocks time each reaction to the start signal</Hand>
				<Display x={960} y={190} w={860} text={digits || undefined} textAt={k.reads + 14} />
				<Hand x={1000} y={830} at={k.more} size={44} color={AREA.ink}>more digits keep coming</Hand>
				<Hand x={1000} y={890} at={k.finer} out={k.more - 4} size={40} color={GREY}>a finer timer:</Hand>
				<Chip x={96} y={890} at={k.exactly} size={48} color={AREA.ink}>P(T = 0.35 exactly) = ?</Chip>
				<PredictRing x={800} y={930} at={k.exactly + 50} dur={80} />
			</div> : null}
		</>
	);
};
/** Four small grey bars: what a discrete variable's probabilities looked like (separate values). */
const GhostBars: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	return <FrameSvg style={{opacity: o}}>
		{[0.1, 0.3, 0.4, 0.2].map((p, i) => <rect key={i} x={110 + i * 62} y={760 - p * 520} width={40} height={p * 520} rx={4} fill="#d9d2c4" stroke={INK_SOFT} strokeWidth={2} />)}
		<line x1={96} x2={360} y1={760} y2={760} stroke={INK_SOFT} strokeWidth={3} />
	</FrameSvg>;
};

// ---------- 2. measured values don't repeat ----------
const H2 = {x: 40, y: 330, w: 1300, h: 620} as const;
const M2 = makePlot(H2.x, H2.y, H2.w, H2.h, {x: [0, 0.7], y: [0, 85]});
const heatAt = (i: number) => 30 + Math.floor(i / 8) * 18;
const order: number[] = (() => {const seen = [0, 0, 0, 0, 0]; return TIMES.map(v => seen[clsOf(v)]++);})();
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const drop = [k.twenty, k.fifty, k.seventy, k.forty, k.twenty2];
	const landed = [0, 0, 0, 0, 0, 0, 0];
	const level = [0, 0, 0, 0, 0];
	const dots: React.ReactNode[] = [];
	const heat = Math.max(0, Math.min(25, Math.floor((fr - 30) / 18) + 1));
	const fallAt = (i: number) => drop[clsOf(TIMES[i])] + order[i] * 0.35;
	TIMES.forEach((v, i) => {if (fr >= fallAt(i) + 18) landed[clsOf(v) + 1]++;});
	TIMES.forEach((v, i) => {
		const a = heatAt(i);
		if (fr < a) return;
		const c = clsOf(v), u = (fr - fallAt(i)) / 18;
		const sx = M2.pf(v, 0)[0], sy = 236 + (i % 5) * 20;
		if (u >= 1) return;
		const app = Math.min(1, (fr - a) / 8);
		if (u <= 0) {dots.push(<circle key={i} cx={sx} cy={sy} r={7 + 3 * (1 - app)} fill={DATA_R.stroke} stroke="#fffdf8" strokeWidth={2} opacity={app} />); return;}
		const [cx, ty] = M2.pf((EDGES[c + 1] + EDGES[c + 2]) / 2, landed[c + 1] + level[c] + 0.5);
		level[c]++;
		const e = u * u;
		dots.push(<circle key={i} cx={sx + (cx - sx) * Math.min(1, u * 1.4)} cy={sy + (ty - sy) * e} r={8} fill={DATA_R.stroke} stroke="#fffdf8" strokeWidth={2} />);
	});
	const shown = TIMES.filter((_, i) => fr >= heatAt(i)).length;
	const ones = fr >= k.ones && fr < k.classes ? TIMES.slice(0, 6).map((v, i) => <text key={'o' + i} x={M2.pf(v, 0)[0]} y={236 + (i % 5) * 20 - 16} textAnchor="middle" opacity={prog(fr, k.ones, 8)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: INK}} stroke="#f6f1e7" strokeWidth={6} paintOrder="stroke">1</text>) : null;
	const bo = prog(fr, k.classes, 16), pulse = fr >= k.touch ? 0.5 + 0.5 * Math.sin((fr - k.touch) / 4) * (fr < k.touch + 50 ? 1 : 0) : 0;
	return (
		<>
			<SceneHeading text="Measured times don't repeat" at={4} size={52} />
			<Hand x={96} y={166} at={k.ones} out={k.classes} size={34} color={INK}>each exact value: count 1</Hand>
			<Hand x={760} y={104} at={k.ideal} size={32} color={GREY} w={560}>ideal model: exact repeats have probability 0 (rounded readings can still tie)</Hand>
			<TimesHist {...H2} counts={landed} at={-30}>
				{m => <>
					{EDGES.slice(1, 7).map(e => {const [px, by] = m.p(e, 0); return <g key={e} opacity={bo * 0.9 * (1 - prog(fr, k.hist - 10, 14))}><line x1={px} x2={px} y1={-110} y2={-14} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 9" /><line x1={px} x2={px} y1={m.box.top} y2={by} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 9" /></g>;})}
					{pulse > 0 ? EDGES.slice(2, 6).map(e => {const [px, by] = m.p(e, 0), [, ty] = m.p(e, 40); return <line key={'p' + e} x1={px} x2={px} y1={ty} y2={by} stroke={AREA.stroke} strokeWidth={8} opacity={pulse} />;}) : null}
				</>}
			</TimesHist>
			<FrameSvg>{dots}{ones}</FrameSvg>
			<Hand x={1040} y={420} at={k.gaps} size={44} color={AREA.ink}>bars touch: no gaps</Hand>
			<Display x={1390} y={150} w={460} text={heat >= 25 && fr > 480 ? '200 times' : heat ? `heat ${heat}` : ''} textAt={30} size={62} />
			<LiveReadoutBoard x={1390} y={510} width={460} at={-30} rows={[{label: 'times recorded (8 lanes a heat)', value: shown, digits: 0, role: 'a'}]} />
			<Hand x={1390} y={672} at={k.here} size={34} color={GREY}>illustrative data: an example set</Hand>
			<Table x={1390} y={716} size={30} headW={260} colW={150} at={k.classes} rows={[
				{head: 'class (s)', cells: ['count']},
				...['0.1 to 0.2', '0.2 to 0.3', '0.3 to 0.4', '0.4 to 0.5', '0.5 to 0.6'].map((h, i) => ({head: h, cells: [String([20, 50, 70, 40, 20][i])], color: DATA_R.ink, cellAt: [drop[i] + 10]})),
			]} />
			<Hand x={1040} y={360} at={k.hist} size={44} color={DATA_R.ink}>a histogram</Hand>
		</>
	);
};

// ---------- 3. interval probability from the histogram ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const am = prog(fr, k.two, 14);
	return (
		<>
			<Task x={96} y={150} w={1020} at={-30} size={44}>Estimate P(0.2 ≤ T &lt; 0.4) from the histogram.</Task>
			<TimesHist x={40} y={290} w={1080} h={660} rel={fr >= k.rel ? 1 : 0}>
				{m => <>
					{am > 0 ? <>{amberRect(m, 0.2, 0.3, 50, am)}{amberRect(m, 0.3, 0.4, 70, am)}</> : null}
					{am > 0 ? (() => {const [a, by] = m.p(0.2, 0), [b] = m.p(0.4, 0); return <path d={`M${a},${by + 52} v14 H${b} v-14`} fill="none" stroke={AREA.stroke} strokeWidth={6} opacity={am} />;})() : null}
				</>}
			</TimesHist>
			<Blocks x={1160} y={140} w={560} />
			<Row x={1160} y={420} at={k.two} size={46}>P(0.2 ≤ T &lt; 0.4)</Row>
			<Row x={1160} y={490} at={k.so} size={44}>≈ (<span style={{color: DATA_R.ink}}>50 + 70</span>) ÷ 200 = 120 ÷ 200</Row>
			<AnswerBox x={1160} y={566} at={k.six} size={52}>≈ 0.6</AnswerBox>
			<Table x={1160} y={676} size={32} headW={190} colW={104} at={k.each} rows={[
				{head: 'count', cells: ['20', '50', '70', '40', '20'], color: DATA_R.ink},
				{head: 'rel. freq.', cells: [...REL], at: k.rel},
			]} />
			<Row x={1160} y={806} at={k.add} size={44} color={GOOD.ink}>0.10 + 0.25 + … + 0.10 = 1 ✓</Row>
			<Hand x={1160} y={876} at={k.because} size={36} color={GREY}>each time lands in exactly one class</Hand>
		</>
	);
};

// ---------- 4. a range that cuts a class ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const cut = prog(fr, k.cuts, 14), first = prog(fr, k.add, 14);
	return (
		<>
			<Task x={96} y={150} w={820} at={-30} size={44}>Estimate P(T &lt; 0.25).</Task>
			<Framed x={960} y={150} at={-30} size={40}>relative frequency = count ÷ 200</Framed>
			<BoxCard x={960} y={262} w={620} at={-30} size={38} title="givens"><div style={{color: DATA_R.ink, fontWeight: 800}}>below 0.2 s: 20 times</div><div style={{color: DATA_R.ink, fontWeight: 800}}>0.2 to 0.3 s: 50 times</div></BoxCard>
			<TimesHist x={40} y={300} w={880} h={650}>
				{m => <>
					{first > 0 ? amberRect(m, 0.1, 0.2, 20, first) : null}
					{cut > 0 ? amberRect(m, 0.2, 0.25, 50, cut, true) : null}
					{fr >= k.five ? (() => {const [px, py] = m.p(0.225, 25); return <text x={px} y={py + 14} textAnchor="middle" opacity={prog(fr, k.five, 10)} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, fill: AREA.ink}}>25</text>;})() : null}
				</>}
			</TimesHist>
			<Hand x={130} y={560} at={k.usual} size={36} color={GREY} w={210}>assume: spread evenly in the class</Hand>
			<Row x={960} y={430} at={k.add} size={44}>P(T &lt; 0.25) ≈ (20 + 25) ÷ 200 = 45 ÷ 200</Row>
			<AnswerBox x={960} y={516} at={k.answer} size={52}>≈ 0.225 (estimate)</AnswerBox>
			<Row x={960} y={604} at={k.answer + 16} size={34} color={GREY}>= 0.10 + ½(0.25)</Row>
			<Slip x={960} y={666} at={k.answer + 30} strikeAt={k.answer + 44} size={42} caption="counts the whole class">(20 + 50) ÷ 200 = 0.35</Slip>
			<Chip x={960} y={850} at={k.write} size={44} color={AREA.ink}>In an exam: state the assumption</Chip>
		</>
	);
};

// ---------- 5. shrink the window: a single value gets 0 ----------
const logStep = (fr: number, keys: readonly [number, number][]) => {
	let w = keys[0][1];
	for (let i = 1; i < keys.length; i++) {
		const [a, v] = keys[i], u = smooth(prog(fr, a, 30, t => t));
		if (u <= 0) break;
		w = v === 0 ? w * (1 - u) : 10 ** (Math.log10(w) + (Math.log10(v) - Math.log10(w)) * u);
		if (u < 1) break;
	}
	return w;
};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const w = logStep(fr, [[0, 0.1], [k.hundredth, 0.01], [k.thousandth, 0.001], [k.width, 0]]);
	return (
		<>
			<SceneHeading text="Shrink the window around 0.35 s" at={4} size={52} />
			<ZoomWindow x={40} y={160} w={1180} h={620} width={w} />
			<Hand x={150} y={226} at={-30} size={36} color={DATA_R.ink}>zoomed: the class 0.3 to 0.4 s</Hand>
			<Hand x={760} y={226} at={k.width} size={44} color={AREA.ink}>width 0 → probability 0</Hand>
			<Display x={1270} y={150} w={560} text="0.35" />
			<LiveReadoutBoard x={1270} y={580} width={560} at={-30} rows={[
				{label: 'width (s)', value: w, format: v => trim(v)},
				{label: 'probability', value: sliceP(w), role: 'k', format: v => (v < 1e-7 ? '0' : '≈ ' + trim(v))},
			]} />
			<Table x={96} y={810} size={36} headW={240} colW={170} at={k.step} rows={[
				{head: 'width', cells: ['0.1', '0.01', '0.001']},
				{head: 'probability', cells: ['0.35', '0.035', '0.0035'], color: AREA.ink},
			]} />
			<Hand x={880} y={846} at={k.step + 10} size={44} color={AREA.ink}>÷ 10, ÷ 10: in step</Hand>
			<AnswerBox x={1270} y={830} at={k.its} size={40}>P(X = x) = 0 (X continuous)</AnswerBox>
			<Chip x={1270} y={930} at={k.zero} size={34} color={AREA.ink}>P(T = 0.35 exactly) = 0</Chip>
		</>
	);
};

// ---------- 6. zero isn't impossible ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const g = smooth(prog(fr, k.intervals, 30));
	return (
		<>
			<SceneHeading text="Probability 0 is not impossible" at={4} size={52} />
			<ZoomWindow x={40} y={160} w={1180} h={620} width={0} lineDim={prog(fr, k.seconds, 14)} extra={{width: 0.02 * g, o: g}} ab={prog(fr, k.like, 12)} />
			<Hand x={150} y={226} at={-30} out={k.intervals} size={40} color={AREA.ink}>one exact value: probability 0</Hand>
			<Display x={1270} y={150} w={560} text="0.3517…" textAt={-30} />
			<Chip x={1270} y={600} at={k.prob} size={48} color={AREA.ink}>P = 0 ≠ impossible</Chip>
			<Hand x={1270} y={700} at={k.some} size={40} color={INK} w={560}>some exact time always happens</Hand>
			<Row x={96} y={812} at={k.like} size={46} color={AREA.ink}>P(0.34 ≤ T ≤ 0.36) ≈ 0.07</Row>
			<Hand x={96} y={890} at={k.seconds} size={46} color={AREA.ink}>intervals carry probability</Hand>
			<Hand x={1270} y={812} at={k.no} size={40} color={GREY} w={560}>no single value carries any on its own</Hand>
		</>
	);
};
export {GOOD};
