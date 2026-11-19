// Scenes 4 to 7: the probability decision rows and the delivery test question, the block and the bell on one axis
// (P(X > 58) = 1/10 against about 2.5%), the spinner's bars against the cookie's triangle (k = 1/10 against 1/8),
// and the framed memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {DecisionTree, FrameSvg, HandTag, LiveReadoutBoard, SceneHeading, SpinnerSectors, StudioPlot, SvgPlate, kf, plateHeight, regionPath} from '../../math/studio';
import {K4, K5, K6, K7} from './cuemap';
import {AnswerBox, CARD, CHIP_BAG, COOKIE, Chip, Cookie, D02_PLATES, DATA, DENS, DESK, DashSlot, FONT_DISPLAY, FONT_HAND, FramedCard, GREY, HOUSE, Hand, INK, IconBars, IconBell, IconDensity, IconFlat, KR, ModelRows, PAREA, QCard, Row, SPIN_BASE, SPIN_DISC, SPIN_PTR, Slip, Task, TreeChip, UL, UNK, VAN, normPdf} from './parts';

// ---------- 4. probability words and their models ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const glow = prog(fr, k.means + 10, 14);
	return (
		<>
			<SceneHeading text="Probability: which words, which model?" at={4} size={44} />
			<FrameSvg><SvgPlate plate={DESK} x={20} y={180} w={570} /></FrameSvg>
			<div style={{opacity: prog(fr, k.test, 12)}}><QCard x={30} y={490} w={560} size={38} lit={fr >= k.seconds}>How likely is a delivery to take more than 58 minutes?</QCard></div>
			<div style={{opacity: prog(fr, k.test + 6, 14)}}><FrameSvg><SvgPlate plate={VAN} x={60} y={650} w={300} /></FrameSvg></div>
			{fr >= k.seconds - 12 ? <FrameSvg><Countdown start={k.seconds} end={k.seconds + 90} x={490} y={710} r={44} /></FrameSvg> : null}
			<Chip x={390} y={760} at={k.cant} size={44} color={GREY}>?</Chip>
			<DashSlot x={40} y={830} w={250} at={k.means}>equally likely?</DashSlot>
			<DashSlot x={310} y={830} w={250} at={k.means + 8}>normal?</DashSlot>
			<ModelRows x={620} y={160} w={1250} question="Probability?" size={38} rowH={166} rows={[
				{at: k.lists, icon: <IconBars />, label: 'a list of values and probabilities', text: '→ discrete', sub: 'ΣP(x) = 1', subAt: k.one},
				{at: k.density, icon: <IconDensity />, label: 'a density f(x)', text: '→ probabilities are areas', sub: 'total area 1', subAt: k.area},
				{at: k.unif, icon: <IconFlat />, label: 'equal-width parts equally likely', text: '→ uniform', sub: 'flat: f(x) = 1/(b − a) on [a, b]', subAt: k.flat, glow},
				{at: k.normal, icon: <IconBell />, label: 'normally distributed, mean μ, sd σ', text: '→ normal', sub: 'X ∼ N(μ, σ²): 68, 95, 99.7% or z-scores', subAt: k.probs, glow},
			]} />
		</>
	);
};

// ---------- 5. worked problem 2: same numbers, two models ----------
const nd = (x: number) => normPdf(x, 50, 4);
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const o = (a: number, d = 12) => prog(fr, a, d);
	const block = o(k.uniform) * (1 - 0.75 * o(k.now)) + 0.45 * o(k.same) * 1;
	const blockO = Math.min(1, block);
	const bell = o(k.normal, 20);
	const mid = o(k.ab95) * (1 - o(k.outside));
	const leftT = o(k.outside) * (1 - o(k.half));
	const rightT = o(k.outside);
	return (
		<>
			<SceneHeading text="2. Same numbers, two models" at={4} size={44} />
			<TreeChip q="probability:" label={fr < k.now ? 'equally likely: uniform' : 'normally distributed: normal'} at={fr < k.now ? k.uniform : k.normal} x={760} />
			<Task x={96} y={160} w={1060} at={-30} size={36}>
				<div>Find P(X &gt; 58), X the delivery time in minutes.</div>
				<div style={{fontSize: 32, marginTop: 6}}>(a) <UL at={k.uniform}>every time from 40 to 60 minutes equally likely</UL></div>
				<div style={{fontSize: 32}}>(b) <UL at={k.normal}>normally distributed</UL>, mean 50 min, standard deviation 4 min</div>
			</Task>
			<FrameSvg><SvgPlate plate={VAN} x={1640} y={170} w={230} /></FrameSvg>
			<StudioPlot x={96} y={400} width={1060} height={430} window={{x: [34, 66], y: [0, 0.112]}} xTicks={[40, 50, 58, 60]} yTicks={[0.05, 0.1]} xLabel="minutes" yLabel="density" grid={false} at={-300}>
				{m => <>
					<g clipPath={m.clip}>
						<g opacity={blockO}>
							<rect x={m.p(40, 0)[0]} y={m.p(0, 0.05)[1]} width={m.p(60, 0)[0] - m.p(40, 0)[0]} height={m.p(0, 0)[1] - m.p(0, 0.05)[1]} fill={DENS.soft} stroke={DENS.stroke} strokeWidth={5} />
							<rect x={m.p(58, 0)[0]} y={m.p(0, 0.05)[1]} width={m.p(60, 0)[0] - m.p(58, 0)[0]} height={m.p(0, 0)[1] - m.p(0, 0.05)[1]} fill={PAREA.soft} stroke={PAREA.stroke} strokeWidth={4} opacity={o(k.last)} />
						</g>
						{bell > 0.01 ? <g opacity={bell}>
							<path d={regionPath(m, nd, 42, 58)} fill="#e4dccd" opacity={mid} />
							<path d={regionPath(m, nd, 34, 42)} fill={PAREA.soft} stroke={PAREA.stroke} strokeWidth={3} opacity={leftT} />
							<path d={regionPath(m, nd, 58, 66)} fill={PAREA.soft} stroke={PAREA.stroke} strokeWidth={3} opacity={rightT} />
							<path d={(() => {let d = ''; for (let i = 0; i <= 240; i++) {const x = 34 + (32 * i) / 240, [px, py] = m.p(x, nd(x)); d += `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`;} return d;})()} stroke={DENS.stroke} strokeWidth={7} fill="none" />
						</g> : null}
					</g>
					<text x={m.p(50, 0)[0]} y={m.p(0, 0.058)[1]} textAnchor="middle" opacity={o(k.over20) * (1 - o(k.now))} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: DENS.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">f(x) = 1/20</text>
					{(() => {const oo = o(k.more) * (1 - o(k.now) * 0.0); const [a] = m.p(58, 0), [b] = m.p(60, 0), yy = m.p(0, 0.068)[1]; return oo > 0.01 ? <g opacity={oo}><path d={`M${a},${yy + 14} V${yy} H${b} V${yy + 14}`} fill="none" stroke={PAREA.stroke} strokeWidth={5} /><text x={b + 10} y={yy - 10} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: PAREA.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">X &gt; 58</text></g> : null;})()}
					<text x={m.p(50, 0)[0]} y={m.p(0, 0.03)[1]} textAnchor="middle" opacity={mid} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}} stroke={CARD} strokeWidth={7} paintOrder="stroke">about 95%</text>
					{[[42, 'μ − 2σ'], [50, 'μ'], [58, 'μ + 2σ']].map(([x, l]) => <text key={l as string} x={m.p(x as number, 0)[0]} y={m.box.top + m.box.height + 76} textAnchor="middle" opacity={o(k.fs)} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28, fill: GREY}}>{l}</text>)}
					{fr >= k.there ? <ellipse cx={m.p(61, 0)[0]} cy={m.p(0, 0.008)[1]} rx={70} ry={34} fill="none" stroke={INK} strokeWidth={5} opacity={o(k.there, 10)} /> : null}
				</>}
			</StudioPlot>
			<HandTag x={760} y={520} text="flat: the last 2 of 20" at={k.last} out={k.now} size={36} color={PAREA.ink} />
			<HandTag x={1045} y={700} text="thin tail" at={k.there} size={40} color={INK} />
			<HandTag x={200} y={560} text="not limited to 40 to 60" at={k.limited} out={k.there} size={34} color={DENS.ink} />
			<LiveReadoutBoard x={1200} y={400} width={670} at={-300} inline rows={[
				{label: 'P(X > 58), uniform', value: 0.1, text: fr >= k.ten ? '0.100' : '?', role: 'k'},
				{label: 'P(X > 58), normal', value: 0.025, text: fr >= k.cent ? '≈ 0.025' : '?', role: 'k'},
			]} />
			<AnswerBox x={1200} y={575} at={k.ten} size={38}>(a) P(X &gt; 58) = 2/20 = 1/10</AnswerBox>
			<AnswerBox x={1200} y={665} at={k.cent} size={38}>(b) P(X &gt; 58) ≈ 2.5%</AnswerBox>
			<Slip x={1200} y={765} at={k.diff} strikeAt={k.diff + 14} w={670} size={34} caption="the model sets the shape">same threshold, same answer</Slip>
		</>
	);
};

// ---------- 6. worked problem 3: a list against a density ----------
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const o = (a: number, d = 12) => prog(fr, a, d);
	const kL = kf(fr, [[k.add, 0.025], [k.tenth, 0.1]]);
	const kD = kf(fr, [[k.isone, 0.04], [k.eighth, 0.125]]);
	const sw = 300, ss = sw / (SPIN_BASE.box[2] - SPIN_BASE.box[0]), spx = 50, spy = 300;
	const scx = spx + (SPIN_DISC.cx - SPIN_BASE.box[0]) * ss, scy = spy + (SPIN_DISC.cy - SPIN_BASE.box[1]) * ss, sr = SPIN_DISC.r * ss * 0.98;
	// bars: x 400..900, base y 640, 1 unit of probability = 300 px
	const BX = 400, BY = 620, U = 290;
	return (
		<>
			<SceneHeading text="3. A list against a density" at={4} size={44} />
			<Task x={50} y={160} w={860} at={-30} size={30}>A spinner lands on X = 1, 2, 3 or 4 with <UL at={k.kx1}>P(X = x) = kx</UL>. Find k.</Task>
			<div style={{opacity: o(k.second - 10)}}><Task x={990} y={160} w={880} at={-30} size={30}>A choc chip's distance X cm from the centre of a cookie has <UL at={k.dens}>density</UL> f(x) = kx for 0 ≤ x ≤ 4. Find k.</Task></div>
			<Chip x={922} y={192} at={k.same} out={k.list} size={44} color={GREY}>?</Chip>
			<FrameSvg><SvgPlate plate={SPIN_BASE} x={spx} y={spy} w={sw} /></FrameSvg>
			<SpinnerSectors cx={scx} cy={scy} r={sr} sectors={[1, 2, 3, 4].map(w => ({weight: w, label: String(w), role: 'a' as const}))} scale={kL} rim={false} labelSize={30} at={-300} />
			<FrameSvg><SvgPlate plate={SPIN_PTR} x={spx} y={spy} w={sw} /></FrameSvg>
			<FrameSvg>
				<line x1={BX - 10} x2={BX + 500} y1={BY} y2={BY} stroke={INK} strokeWidth={4} />
				<line x1={BX} x2={BX} y1={BY} y2={BY - 330} stroke={INK} strokeWidth={4} />
				<line x1={BX - 10} x2={BX + 500} y1={BY - U} y2={BY - U} stroke={GREY} strokeWidth={3} strokeDasharray="10 8" />
				<text x={BX - 14} y={BY - U + 10} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>1</text>
				{[1, 2, 3, 4].map(x => <g key={x}><rect x={BX + 20 + (x - 1) * 80} y={BY - kL * x * U} width={56} height={kL * x * U} fill={DATA.soft} stroke={DATA.stroke} strokeWidth={4} />
					<text x={BX + 48 + (x - 1) * 80} y={BY + 38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>{x}</text>
					<text x={BX + 48 + (x - 1) * 80} y={BY - kL * x * U - 10} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: DATA.ink}}>{x === 1 ? 'k' : `${x}k`}</text></g>)}
				{[1, 2, 3, 4].map(x => {const below = (kL * (x - 1) * x) / 2; return <rect key={'s' + x} x={BX + 360} y={BY - (below + kL * x) * U} width={70} height={kL * x * U} fill={DATA.soft} stroke={DATA.stroke} strokeWidth={3} />;})}
				<text x={BX + 395} y={BY + 38} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 28, fill: INK}}>sum</text>
				<text x={BX + 395} y={BY - 10 * kL * U - 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: kL > 0.0995 ? '#287347' : DATA.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{`10k = ${(10 * kL).toFixed(2)}`}</text>
			</FrameSvg>
			<Row x={50} y={700} at={k.add} size={44} small={32} dim={prog(fr, k.tenth, 12)}>k + 2k + 3k + 4k = 10k = 1</Row>
			<AnswerBox x={50} y={762} at={k.tenth} size={42}>k = 1/10</AnswerBox>
			<Hand x={330} y={774} at={k.tenth + 20} size={30} color={GREY}>P(X = 4) = 2/5</Hand>
			<Cookie cx={1120} cy={440} w={250} rim={o(k.cookieD) * (1 - o(k.cookieD + 50))} at={-300} />
			<StudioPlot x={1290} y={290} width={580} height={320} window={{x: [-0.3, 4.4], y: [0, 0.62]}} xTicks={[1, 2, 3, 4]} yTicks={[0.25, 0.5]} xLabel="x (cm)" yLabel="f(x)" at={-300}>
				{m => <>
					<path d={regionPath(m, x => kD * x, 0, 4)} fill={PAREA.soft} stroke={PAREA.stroke} strokeWidth={3} />
					<path d={`M${m.p(0, 0)[0]},${m.p(0, 0)[1]} L${m.p(4, 4 * kD)[0]},${m.p(4, 4 * kD)[1]}`} stroke={INK} strokeWidth={6} />
					<line x1={m.p(4, 0)[0]} x2={m.p(4, 0)[0]} y1={m.p(0, 0)[1]} y2={m.p(4, 4 * kD)[1]} stroke={INK} strokeWidth={4} strokeDasharray="8 6" />
					<text x={m.p(4, 0)[0] + 12} y={(m.p(0, 0)[1] + m.p(4, 4 * kD)[1]) / 2} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: UNK.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">4k</text>
					<text x={m.p(0.1, 0)[0]} y={m.p(0, 0.55)[1]} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: kD > 0.1245 ? '#287347' : PAREA.ink}} stroke={CARD} strokeWidth={7} paintOrder="stroke">{`area = 8k = ${(8 * kD).toFixed(2)}`}</text>
				</>}
			</StudioPlot>
			<Row x={990} y={700} at={k.triangle} size={44} small={32} dim={prog(fr, k.eighth, 12)}>½ × 4 × 4k = 8k = 1</Row>
			<Hand x={1420} y={710} at={k.triangle + 30} size={28} color={GREY}>check: ∫₀⁴ kx dx = 8k</Hand>
			<AnswerBox x={990} y={762} at={k.eighth} size={42}>k = 1/8</AnswerBox>
			<Hand x={1250} y={774} at={k.eighth + 20} size={30} color={GREY}>P(X &gt; 3) = 7/16</Hand>
			<HandTag x={1010} y={300} text="the cookie again" at={k.cookieD} out={k.sum} size={34} color={INK} />
			<HandTag x={430} y={315} text="sum of bars" at={k.sum} size={38} color={DATA.ink} />
			<HandTag x={1600} y={300} text="area" at={k.sum + 8} size={38} color={PAREA.ink} />
			<Slip x={560} y={842} at={k.sum + 20} strikeAt={k.sum + 34} w={780} size={30} caption="a sum of bars is not an area">k = 1/10 for both</Slip>
		</>
	);
};

// ---------- 7. memory aid ----------
/** g03's framed memory card: the decision tree small at the left, five pictures along the top, the habit and two keyed lines. */
export const G03Card: React.FC<{main?: number; l1?: number; l2?: number; x?: number; y?: number; scale?: number}> = ({main = -300, l1 = -300, l2 = -300, x = 250, y = 180, scale = 1}) => {
	const f = useCurrentFrame();
	const thumb = (p: typeof VAN, w: number, key: string) => {const h = plateHeight(p, w); return <svg key={key} width={w} height={h} style={{overflow: 'visible'}}><SvgPlate plate={p} x={0} y={0} w={w} /></svg>;};
	return <div style={{position: 'absolute', left: x, top: y, width: 1420, height: 700, transform: `scale(${scale})`, transformOrigin: '0 0'}}>
		<FramedCard x={0} y={0} w={1420} h={700} />
		<div style={{position: 'absolute', left: 44, top: 22, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: GREY}}>Memory aid</div>
		<DecisionTree x={44} y={120} nodes={[{question: 'The words?', branches: [{label: 'add or multiply'}, {label: 'annuity or loan'}, {label: 'list or density'}, {label: 'uniform or normal'}]}]} colW={400} size={30} at={-300} />
		<div style={{position: 'absolute', left: 540, top: 30, display: 'flex', gap: 36, alignItems: 'flex-end', height: 100}}>
			{thumb(D02_PLATES.jar, 56, 'j')}{thumb(HOUSE, 150, 'h')}{thumb(VAN, 140, 'v')}{thumb(SPIN_BASE, 90, 's')}{thumb(COOKIE, 90, 'c')}{thumb(CHIP_BAG, 64, 'b')}
		</div>
		<div style={{position: 'absolute', left: 540, top: 170, width: 840, opacity: prog(f, main, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 66, lineHeight: 1.1, color: INK}}>The words pick the model. The numbers just fill it in.</div>
		<div style={{position: 'absolute', left: 540, top: 420, opacity: prog(f, l1, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>Same amount: add. Same percentage: multiply.</div>
		<div style={{position: 'absolute', left: 540, top: 500, opacity: prog(f, l2, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: INK}}>A list: sum to 1. A density: area 1.</div>
	</div>;
};
export const S07: React.FC = () => {
	const k = K7;
	return (
		<>
			<SceneHeading text="The habit for every model question" at={4} size={44} />
			<G03Card main={k.words} l1={k.amount} l2={k.list} />
		</>
	);
};
export {KR};
