// Scenes 1 to 4: the growing town (f07's final frame; after six years is six growth steps, so 1.05⁶, the 7th term),
// a fixed percentage as a fixed ratio (keep 100% and add or lose p%), counting from time zero (A rᵗ; term t + 1, or
// term t when the first term is after one period) and a chain message passing a million (a threshold with logs).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, Pow, SceneHeading, SpriteField, SvgPlate, TermPlot, plateMap, slotsFromPlate, smooth, usePlatePreload} from '../../math/studio';
import {F07FinalFrame} from '../math-a12-f07/s3';
import {K1, K2, K3, K4} from './cuemap';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BROWN, BoxCard, Chip, Framed, GuessChip, HOUSE, HOUSE_SLOTS, Hand, PHONE, PHONE_SCREEN, POS, PctBar, RED, Row, Sb, TEAL, TOWN, TabStrip, chain, sp, town} from './parts';
import type {Tab, TabArc} from './parts';

export const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- the town and its timeline (geometry of f07's final frame) ----------
export const TW = {x: 315, y: 610, w: 1290};
const STRIP = {x: 408, base: 520, pitch: 214, barW: 172, unit: 0.0055};
const yearLabel = (i: number) => (i === 0 ? 't = 0' : `after ${i} year${i > 1 ? 's' : ''}`);
/** Painted town with `houses` added on its empty land (fractional: the newest pops in). */
export const Town: React.FC<{x: number; y: number; w: number; houses: number}> = ({x, y, w, houses}) => {
	usePlatePreload([TOWN.src]);
	const slots = slotsFromPlate(TOWN, x, y, w, HOUSE_SLOTS);
	return <>
		<FrameSvg><SvgPlate plate={TOWN} x={x} y={y} w={w} /></FrameSvg>
		{houses > 0.001 ? <SpriteField plate={HOUSE} w={(96 * w) / 1290} count={Math.min(6, houses)} slots={slots} at={-30} /> : null}
	</>;
};
/** Frame at which the year slider of scene 1 reaches year i. */
const yearFrame = (i: number) => (i <= 0 ? -300 : i === 1 ? K1.one + 20 : K1.been1 + 4 + ((i - 1) / 5) * (K1.six - K1.been1 + 4));
const years = (fr: number) => (fr < K1.one ? 0 : fr < K1.been1 + 4 ? lin(fr, K1.one, K1.one + 20) : 1 + 5 * lin(fr, K1.been1 + 4, K1.six + 8));

// ---------- 1. hook: after six years ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const t = years(fr), n = Math.floor(t + 1e-9);
	const tabs: Tab[] = Array.from({length: 7}, (_, i) => (i <= 1 || t >= i ? {label: yearLabel(i), value: town(i), text: sp(town(i)), at: i <= 1 ? -30 : yearFrame(i) - 2} : {label: yearLabel(i), unknown: true, at: -30}));
	const arcs: TabArc[] = Array.from({length: 6}, (_, i) => ({from: i, to: i + 1, label: '×1.05', at: i === 0 ? -30 : yearFrame(i + 1) - 10, num: String(i + 1), numAt: i === 0 ? k.one + 6 : undefined})).filter((a, i) => i === 0 || t >= i + 0.6);
	const guessO = 1 - prog(fr, k.howdo - 14, 12);
	const termAt = (i: number) => k.first + i * ((k.seventh - k.first) / 6);
	return (
		<>
			<SceneHeading text="How do geometric models predict repeated growth or decay?" at={34} size={48} />
			<Town {...TW} houses={Math.min(6, t)} />
			<TabStrip {...STRIP} tabs={tabs} arcs={arcs} />
			<Hand x={96} y={390} at={-30} size={38} color={POS} w={190}>people in the town</Hand>
			<Hand x={720} y={236} at={-30} out={k.count - 6} size={44} color={POS}>grows 5% each year</Hand>
			<LiveReadoutBoard x={1625} y={620} width={270} at={k.count} size={52} labelSize={30} rows={[
				{label: 'years t', value: n, digits: 0},
				{label: 'multiplications', value: n, digits: 0},
				{label: 'population', value: town(n), role: 'a', format: sp},
			]} />
			{guessO > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: guessO}}>
				<GuessChip x={96} y={166} at={k.sixth} crossAt={k.hundred}>a<Sb>6</Sb> = 20 000 × 1.05<Pow>5</Pow> ≈ 25 526 ?</GuessChip>
				<Hand x={700} y={170} at={k.hundred + 16} size={42} color={RED}>only 5 steps</Hand>
			</div> : null}
			<Row x={1190} y={636} at={k.so} size={52}>20 000 × 1.05<Pow>6</Pow></Row>
			<AnswerBox x={1190} y={736} at={k.hundred} size={44}>≈ 26 800 people</AnswerBox>
			<FrameSvg>
				{Array.from({length: 7}, (_, i) => <text key={i} x={STRIP.x + i * STRIP.pitch} y={600} textAnchor="middle" opacity={prog(fr, termAt(i), 10)} style={TXT(32, POS)}>a{'₁₂₃₄₅₆₇'[i]}</text>)}
				<ellipse cx={STRIP.x + 6 * STRIP.pitch} cy={594} rx={38} ry={22} fill="none" stroke={AMBER_STROKE} strokeWidth={5} opacity={prog(fr, k.seventh + 8, 10)} />
			</FrameSvg>
			<Chip x={96} y={166} at={k.howdo} size={40} color={BROWN}>How do we count it right?</Chip>
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F07FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. a fixed percentage is a fixed ratio ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const slipO = 1 - prog(fr, k.arith - 16, 12);
	return (
		<>
			<SceneHeading text="A fixed percentage is a fixed ratio" at={4} size={52} />
			<TabStrip x={190} base={560} pitch={240} barW={170} unit={0.0085} labelSize={32} valueSize={38} arcSize={40}
				tabs={[0, 1, 2].map(i => ({label: i === 0 ? 't = 0' : `${i} year${i > 1 ? 's' : ''}`, value: town(i), text: sp(town(i)), at: -30}))}
				arcs={[{from: 0, to: 1, label: '×1.05', at: k.each}, {from: 1, to: 2, label: '×1.05', at: k.each + 24}]} />
			<Town x={40} y={650} w={760} houses={6} />
			<Hand x={96} y={174} at={k.each + 30} size={42} color={AMBER}>each year: the same factor</Hand>
			<PctBar x={830} y={250} w={880} pct={5} gain move={prog(fr, k.adding, 20)} labels={{keep: '100%', block: '+5%'}} />
			<Hand x={830} y={186} at={k.keeping} size={40} color={POS}>keep all 100%, add 5%</Hand>
			<Row x={830} y={358} at={k.adding + 14} size={48}>100% + 5% = 105%<span style={{color: AMBER, opacity: prog(fr, k.five, 10)}}>    r = 1.05</span></Row>
			<PctBar x={830} y={520} w={880} pct={20} gain={false} move={prog(fr, k.eighty, 22)} labels={{keep: fr >= k.eighty + 10 ? '80%' : '100%', block: '−20%'}} at={-30} />
			<Hand x={830} y={456} at={k.falling} size={40} color={POS}>lose 20%, keep 80%</Hand>
			<Hand x={1300} y={456} at={-30} out={k.falling - 6} size={40} color={POS}>a second bar: 100%</Hand>
			<Row x={830} y={660} at={k.eighty + 16} size={48}>100% − 20% = 80%<span style={{color: AMBER, opacity: prog(fr, k.eight, 10)}}>    r = 0.8</span></Row>
			{slipO > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: slipO}}><SlipBox x={830} y={780} at={k.eight + 40} /></div> : null}
			<BoxCard x={830} y={790} w={460} at={k.add - 6} size={44} title="arithmetic" edge={POS}><div style={{fontWeight: 800, color: POS, whiteSpace: 'pre'}}>+d,  +d,  +d</div></BoxCard>
			<BoxCard x={1330} y={790} w={460} at={k.geo} size={44} title="geometric" edge={AMBER}><div style={{fontWeight: 800, color: AMBER, whiteSpace: 'pre'}}>×r,  ×r,  ×r</div></BoxCard>
			<Hand x={1330} y={936} at={k.geo + 30} size={40} color={AMBER}>same factor each period: geometric</Hand>
		</>
	);
};
/** The silent crossed slip "r = 0.2" (the rate taken as the ratio). */
const SlipBox: React.FC<{x: number; y: number; at: number}> = ({x, y, at}) => {
	const fr = useCurrentFrame();
	const o = prog(fr, at, 12), s = prog(fr, at + 12, 12);
	if (o <= 0.001) return null;
	return <div style={{position: 'absolute', left: x, top: y, opacity: o, display: 'flex', alignItems: 'center', gap: 26, background: '#fffdf8', border: `3px solid ${RED}`, borderRadius: 18, padding: '8px 26px 10px', boxShadow: '0 14px 32px rgba(60,45,20,0.10)'}}>
		<div style={{position: 'relative', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 48, color: '#6b6358', whiteSpace: 'pre'}}>r = 0.2
			<svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -8, top: 0, width: 'calc(100% + 16px)', height: '100%', overflow: 'visible'}}>
				<path d="M0,64 Q50,50 100,38" stroke={RED} strokeWidth={6} vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - s} />
			</svg>
		</div>
		<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: RED, opacity: prog(fr, at + 22, 12), whiteSpace: 'pre'}}>r keeps what's left, not what's lost</div>
	</div>;
};

// ---------- 3. counting from time zero ----------
const SYM = {x: 190, top: 316, pitch: 270, w: 210, h: 96, base: 420};
const SYMS: readonly React.ReactNode[] = ['A', 'Ar', <>Ar<Pow>2</Pow></>, '…', <>Ar<Pow>t</Pow></>];
const SYML = ['t = 0', 'after 1', 'after 2', '…', 'after t'];
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const cardAt = [-30, k.one, k.after, k.after + 14, k.t];
	const arcAt = [k.one, k.after - 4, k.after + 10, k.mult];
	const nums = ['1', '2', '3', 't'];
	const cx = (i: number) => SYM.x + i * SYM.pitch;
	const row1 = ['a₁', 'a₂', 'a₃', '…', 'aₜ₊₁'], row2 = ['', 'a₁', 'a₂', '…', 'aₜ'];
	return (
		<>
			<SceneHeading text="Counting from time zero" at={4} size={52} />
			<FrameSvg>
				<line x1={cx(0) - 140} x2={cx(4) + 140} y1={SYM.base} y2={SYM.base} stroke={INK} strokeWidth={4} strokeLinecap="round" />
				{SYML.map((l, i) => <text key={i} x={cx(i)} y={SYM.base + 44} textAnchor="middle" opacity={0.45 + 0.55 * prog(fr, cardAt[i], 10)} style={TXT(32, INK)}>{l}</text>)}
				{arcAt.map((a, i) => {const x0 = cx(i) + 30, x1 = cx(i + 1) - 30, y0 = SYM.top - 12, c = y0 - 96, apex = 0.5 * y0 + 0.5 * c; return <g key={i}>
					<path d={`M${x0},${y0} Q${(x0 + x1) / 2},${c} ${x1},${y0}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - prog(fr, a, 14)} />
					<g opacity={prog(fr, a + 8, 10)}><circle cx={(x0 + x1) / 2} cy={apex} r={19} fill="#fffdf8" stroke={POS} strokeWidth={3.5} /><text x={(x0 + x1) / 2} y={apex + 10} textAnchor="middle" style={TXT(28, POS)}>{nums[i]}</text>
						<text x={(x0 + x1) / 2} y={apex - 30} textAnchor="middle" style={TXT(40, AMBER, true)}>×r</text></g>
				</g>;})}
				<g opacity={prog(fr, k.amount, 12)}><path d={`M${cx(0)},${SYM.base + 66} v16 H${cx(4)} v-16`} stroke={POS} strokeWidth={4} fill="none" /><text x={(cx(0) + cx(4)) / 2} y={SYM.base + 124} textAnchor="middle" style={TXT(38, POS)}>t multiplications</text></g>
				{row1.map((l, i) => <text key={'r' + i} x={cx(i)} y={622} textAnchor="middle" opacity={prog(fr, k.start + i * 8, 10)} style={TXT(40, TEAL)}>{l}</text>)}
				<ellipse cx={cx(0)} cy={608} rx={44} ry={32} fill="none" stroke={AMBER_STROKE} strokeWidth={5} opacity={prog(fr, k.plus, 10)} />
				{row2.map((l, i) => (l ? <text key={'s' + i} x={cx(i)} y={704} textAnchor="middle" opacity={prog(fr, k.some + 20 + i * 8, 10)} style={TXT(40, POS)}>{l}</text> : null))}
			</FrameSvg>
			{SYMS.map((s, i) => {const o = prog(fr, cardAt[i], 12); return o > 0.001 ? <div key={i} style={{position: 'absolute', left: cx(i) - SYM.w / 2, top: SYM.top, width: SYM.w, height: SYM.h, opacity: o, boxSizing: 'border-box', background: '#fffdf8', border: `4px solid ${BLUE}`, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: BLUE}}>{s}</div> : null;})}
			<Hand x={1330} y={590} at={k.plus} size={38} color={TEAL} w={530}>a₁ = A at t = 0, so after t: term t + 1</Hand>
			<Hand x={1330} y={676} at={k.termt} size={38} color={POS} w={530}>a₁ = Ar (after 1 period), so after t: term t</Hand>
			<BoxCard x={96} y={570} w={1100} at={-30} out={k.t - 8} size={48} title="the town again"><div style={{fontWeight: 800, whiteSpace: 'pre'}}><span style={{color: BLUE}}>A = 20 000 at t = 0</span>     <span style={{color: AMBER}}>r = 1.05</span></div></BoxCard>
			<Framed x={96} y={770} at={k.t} size={52}>amount after t periods = A r<Pow>t</Pow></Framed>
			<Hand x={96} y={884} at={k.time} size={42} color={AMBER}>time in the power: exponential in time</Hand>
			<Chip x={1340} y={760} at={k.always} size={40} color={BROWN}>First term: at what time?</Chip>
			<Town x={1330} y={830} w={540} houses={6} />
			<TermPlot x={1400} y={150} width={480} height={360} window={{x: [0, 6.6], y: [0, 30000]}} nRange={[0, 6]} at={-30} xTicks={[2, 4, 6]} yTicks={[{value: 10000, label: '10k'}, {value: 20000, label: '20k'}, {value: 30000, label: '30k'}]} xLabel="t (years)" yLabel="town population"
				series={[{term: town, color: BLUE, at: -30, stagger: 0}]} guide={{fn: town, at: k.exp, color: AMBER_STROKE}} />
		</>
	);
};

// ---------- 4. worked example: a chain message passes a million ----------
const PH = {x: 104, y: 330, w: 230};
const hours = (fr: number) => {const k = K4; return fr < k.five ? 0 : fr < k.two ? 5 * smooth(lin(fr, k.five, k.two)) : fr < k.nine ? 5 + lin(fr, k.two, k.nine) : 6 + lin(fr, k.seven - 20, k.seven + 10);};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	usePlatePreload([PHONE.src]);
	const h = Math.floor(hours(fr) + 1e-9);
	const m = plateMap(PHONE, PH.x, PH.y, PH.w), [sx0, sy0] = m.at(PHONE_SCREEN[0], PHONE_SCREEN[1]), [sx1, sy1] = m.at(PHONE_SCREEN[2], PHONE_SCREEN[3]);
	const ptAt = (i: number) => (i === 0 ? k.five : k.five + 1 + (i <= 5 ? (k.two - k.five) * (i / 5) : i === 6 ? k.nine - (k.nine - k.two) * 0.02 : k.seven + 6));
	return (
		<>
			<BoxCard x={96} y={150} w={1728} at={-30} size={42} title="task" edge={BROWN}>500 people have a chain message at the start, and the number who have it triples every hour. After how many whole hours does it first exceed 1 000 000 people?</BoxCard>
			<FrameSvg><SvgPlate plate={PHONE} x={PH.x} y={PH.y} w={PH.w} /></FrameSvg>
			<div style={{position: 'absolute', left: sx0, top: sy0, width: sx1 - sx0, height: sy1 - sy0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: FONT_DISPLAY, color: INK, textAlign: 'center'}}>
				<div style={{fontWeight: 700, fontSize: 30, color: '#e9e4d8'}}>hour {h}</div>
				<div style={{fontWeight: 800, fontSize: h >= 7 ? 36 : 40, color: '#cfe3f6', fontVariantNumeric: 'tabular-nums'}}>{sp(chain(h))}</div>
				<div style={{fontWeight: 700, fontSize: 30, color: '#e9e4d8'}}>have it</div>
			</div>
			<TermPlot x={350} y={330} width={560} height={540} window={{x: [0, 8.4], y: [0, 1.25]}} nRange={[0, 7]} at={-30} xTicks={[1, 2, 3, 4, 5, 6, 7, 8]} yTicks={[{value: 0.5, label: '0.5'}, {value: 1, label: '1'}]} xLabel="hours" yLabel="people (millions)"
				series={[{term: (i: number) => (fr >= ptAt(i) ? chain(i) / 1e6 : NaN), color: BLUE, at: -300, stagger: 0}]}
				refLine={{Y: 1, label: '1 000 000', at: k.million, color: INK}}>{mp => {
					const [x6, y6] = mp.p(6, chain(6) / 1e6), [x7, y7] = mp.p(7, chain(7) / 1e6);
					return <g>
						<g opacity={prog(fr, k.six, 12)}><circle cx={x6} cy={y6} r={26} fill="none" stroke={AMBER_STROKE} strokeWidth={5} /><text x={x6 - 34} y={y6 - 26} textAnchor="end" style={TXT(34, BLUE)} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">364 500</text></g>
						<g opacity={prog(fr, k.ninety, 12)}><circle cx={x7} cy={y7} r={26} fill="none" stroke={AMBER_STROKE} strokeWidth={5} /><text x={x7 - 34} y={y7 + 56} textAnchor="end" style={TXT(34, BLUE)} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">1 093 500</text></g>
					</g>;
				}}</TermPlot>
			<BoxCard x={960} y={330} w={880} at={-30} size={44} title="givens">
				<div style={{fontWeight: 800, whiteSpace: 'pre'}}><span style={{color: BLUE}}>A = 500</span>    <span style={{color: AMBER}}>r = 3</span>    <span style={{color: '#5f574c'}}>t in hours</span></div>
			</BoxCard>
			<Row x={960} y={480} at={-30} size={48} dim={prog(fr, k.million, 12)} small={40}>N = 500 × 3<Pow>t</Pow></Row>
			<Row x={960} y={560} at={k.million - 30} size={52} dim={prog(fr, k.two, 12)} small={40}>500 × 3<Pow>t</Pow> &gt; 1 000 000</Row>
			<Row x={960} y={640} at={k.two - 20} size={52} dim={prog(fr, k.logs, 12)} small={40}>3<Pow>t</Pow> &gt; 2000</Row>
			<Row x={960} y={720} at={k.logs} size={52} dim={prog(fr, k.then, 12)} small={40}>t log 3 &gt; log 2000</Row>
			<Hand x={1430} y={726} at={k.pos} size={40} color={POS}>log 3 &gt; 0: sign stays</Hand>
			<Row x={960} y={800} at={k.then} size={52}>t &gt; log 2000 ÷ log 3<span style={{color: POS, fontSize: 40, opacity: prog(fr, k.nine, 10)}}>  ≈ 6.92</span></Row>
			<AnswerBox x={960} y={884} at={k.seven} size={50}>7 hours</AnswerBox>
			<Hand x={1250} y={900} at={k.seven + 20} size={40} color={POS}>first whole hour above 1 000 000</Hand>
		</>
	);
};
export {TEAL};
