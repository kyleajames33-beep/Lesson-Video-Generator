// Scenes 5 to 8: a camper trailer losing 15% a year (value after 5 years; the first year below $10,000, where log 0.85
// < 0 flips the inequality), geometric against straight-line decay (the decay race), an oil well's totals (S₁₀ and the
// S∞ ceiling of 500 000 barrels) and the memory aid (start, ratio, count).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, Pow, SceneHeading, SvgPlate, TermPlot, plateHeight, smooth, usePlatePreload} from '../../math/studio';
import {K5, K6, K7, K8} from './cuemap';
import {lin, Town} from './s1';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BLUE_SOFT, BROWN, BoxCard, Frac, FramedCard, Hand, POS, PctBar, Row, Sb, TEAL, TRAILER, TabStrip, TotalsColumns, money, oilS, sp, straight, trailer} from './parts';

const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);
const GREY = '#5f574c';

// ---------- 5. worked example: a camper trailer that loses value ----------
const TR = {x: 110, y: 330, w: 560};
const BAR = {x: 110, y: 640, w: 560, h: 56};
const years5 = (fr: number) => {const k = K5; return fr < k.six ? 5 * smooth(lin(fr, k.five, k.five + 36)) : fr < k.seven ? 5 + smooth(lin(fr, k.six, k.six + 16)) : 6 + smooth(lin(fr, k.seven, k.seven + 16));};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	usePlatePreload([TRAILER.src]);
	const nf = years5(fr), n = Math.round(nf * 1000) / 1000, nInt = Math.floor(n + 1e-6);
	const v = trailer(n);
	const partA = 1 - prog(fr, k.when - 12, 12);
	const flip = prog(fr, k.ineq, 10);
	return (
		<>
			<BoxCard x={96} y={150} w={1728} at={-30} size={40} title="task" edge={BROWN}>A camper trailer costs $30,000 new and loses 15% of its value each year. (a) Find its value after 5 years. (b) When is it first worth less than $10,000?</BoxCard>
			<FrameSvg>
				<SvgPlate plate={TRAILER} x={TR.x} y={TR.y} w={TR.w} />
				<rect x={BAR.x} y={BAR.y} width={BAR.w} height={BAR.h} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				<rect x={BAR.x} y={BAR.y} width={(BAR.w * v) / 30000} height={BAR.h} rx={10} fill={BLUE_SOFT} stroke={BLUE} strokeWidth={4} />
				<g opacity={prog(fr, k.when, 12)}><line x1={BAR.x + BAR.w / 3} x2={BAR.x + BAR.w / 3} y1={BAR.y - 18} y2={BAR.y + BAR.h + 6} stroke={INK} strokeWidth={4} strokeDasharray="10 7" />
					<text x={BAR.x + BAR.w / 3} y={BAR.y - 28} textAnchor="middle" style={TXT(32, INK)}>$10,000</text></g>
			</FrameSvg>
			<Hand x={500} y={603} at={k.loses} size={32} color={GREY}>loses value</Hand>
			<LiveReadoutBoard x={110} y={714} width={560} inline at={-30} size={52} labelSize={30} rows={[
				{label: 'years n', value: nInt, digits: 0},
				{label: 'value', value: v, role: 'a', format: x => money(Math.round(x))},
			]} />
			<Hand x={110} y={902} at={k.six + 10} out={k.seven - 4} size={38} color={GREY}>n = 6: about $11,314, still above</Hand>
			<Hand x={110} y={902} at={k.nine} size={38} color={GREY}>n = 7: about $9,617, now below</Hand>
			<BoxCard x={760} y={330} w={640} at={-30} size={42} title="givens">
				<div style={{fontWeight: 800, color: BLUE}}>A = $30,000</div>
				<div style={{fontWeight: 800, color: AMBER, opacity: 1}}>r = 1 − 0.15 = 0.85</div>
			</BoxCard>
			<AnswerBox x={1430} y={350} at={k.dollars} size={44}>(a) ≈ $13,311</AnswerBox>
			<BoxCard x={760} y={520} w={1000} at={-30} out={k.times - 8} size={40} title="plan">
				<div>(a) Value after n years: A × r<Pow>n</Pow>, with n = 5.</div>
				<div style={{marginTop: 10}}>(b) Solve 30 000 × 0.85<Pow>n</Pow> &lt; 10 000 with logs.</div>
			</BoxCard>
			{partA > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: partA}}>
				<Row x={760} y={530} at={k.times} size={52} dim={prog(fr, k.five, 12)} small={42}>V = 30 000 × 0.85<Pow>n</Pow></Row>
				<Row x={760} y={620} at={k.five} size={52} dim={prog(fr, k.about, 12)} small={42}>V(5) = 30 000 × 0.85<Pow>5</Pow></Row>
				<Row x={760} y={710} at={k.about} size={52}>{'       '}≈ $13,311<span style={{color: POS, fontSize: 36}}>   (13 311.16)</span></Row>
			</div> : null}
			<Row x={760} y={510} at={k.when + 10} size={52} dim={prog(fr, k.divide, 12)} small={42}>30 000 × 0.85<Pow>n</Pow> &lt; 10 000</Row>
			<Row x={760} y={590} at={k.third - 10} size={52} dim={prog(fr, k.logs, 12)} small={42}>0.85<Pow>n</Pow> &lt; <Frac n="1" d="3" /></Row>
			<Row x={760} y={690} at={k.logs} size={52} dim={prog(fr, k.so, 12)} small={42}>n log 0.85 &lt; log <Frac n="1" d="3" /></Row>
			<Hand x={1330} y={570} at={k.negative} size={38} color={AMBER} w={520}>log 0.85 &lt; 0: dividing flips the sign</Hand>
			<Row x={760} y={790} at={k.dividing} size={52}>n <span style={{display: 'inline-block', position: 'relative', minWidth: '0.9em', textAlign: 'center', color: flip > 0.5 ? AMBER : POS, background: flip > 0 && flip < 1 ? 'rgba(248,232,200,0.9)' : undefined, borderRadius: 8}}>{flip > 0.5 ? '>' : '?'}</span> log <Frac n="1" d="3" /> ÷ log 0.85<span style={{color: POS, fontSize: 40, opacity: prog(fr, k.sixpt, 10)}}>  ≈ 6.76</span></Row>
			<AnswerBox x={760} y={892} at={k.years} size={46}>(b) 7 years</AnswerBox>
		</>
	);
};

// ---------- 6. geometric against arithmetic decay ----------
const race = (fr: number) => {const k = K6; return fr < k.nothing + 40 ? (20 / 3) * smooth(lin(fr, k.if, k.nothing + 40)) : 20 / 3 + (12 - 20 / 3) * lin(fr, k.nothing + 40, k.never + 4);};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	usePlatePreload([TRAILER.src]);
	const n = race(fr), nInt = Math.floor(n + 1e-6);
	const na = Math.min(n, 20 / 3);
	const appear = (i: number) => (i === 0 ? -30 : (() => {for (let f = 0; f < 700; f++) if (race(f) >= i) return f; return 1e9;})());
	const rw = 120, rh = plateHeight(TRAILER, rw);
	const drops = [[0, 1, '−$4,500'], [1, 2, '−$3,825'], [2, 3, '−$3,251']] as const;
	return (
		<>
			<SceneHeading text="Geometric against arithmetic decay" at={4} size={52} />
			<TermPlot x={150} y={160} width={1250} height={800} window={{x: [0, 12.6], y: [0, 34000]}} nRange={[0, 12]} at={-30} xTicks={[2, 4, 6, 8, 10, 12]} yTicks={[{value: 10000, label: '$10k'}, {value: 20000, label: '$20k'}, {value: 30000, label: '$30k'}]} xLabel="years n" yLabel="value"
				series={[{term: (i: number) => (fr >= appear(i) ? trailer(i) : NaN), color: BLUE, at: -300, stagger: 0}, {term: (i: number) => (i <= 6 && fr >= appear(i) ? straight(i) : NaN), color: GREY, at: -300, stagger: 0, open: true}]}>{m => {
					const [ax0, ay0] = m.p(0, 30000), [ax1, ay1] = m.p(na, straight(na));
					const [gx, gy] = m.p(n, trailer(n)), [sx, sy] = m.p(na, Math.max(0, straight(na)));
					return <g>
						<line x1={ax0} y1={ay0} x2={ax1} y2={ay1} stroke={GREY} strokeWidth={4} strokeDasharray="12 9" />
						{n >= 20 / 3 - 0.01 ? (() => {const [zx, zy] = m.p(20 / 3, 0); return <g><circle cx={zx} cy={zy} r={12} fill={GREY} /><text x={zx + 24} y={zy - 96} textAnchor="start" style={TXT(34, GREY)} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">$0 at 6⅔ years</text></g>;})() : null}
						{drops.map(([a, b, t], i) => {const [x0, y0] = m.p(a, trailer(a)), [x1, y1] = m.p(b, trailer(b)); return <text key={i} x={(x0 + x1) / 2 + 30} y={(y0 + y1) / 2 - 6 - i * 4} opacity={prog(fr, k.before + i * 10, 10)} style={TXT(34, BLUE)} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">{t}</text>;})}
						<SvgPlate plate={TRAILER} x={sx - rw / 2} y={sy - rh - 14} w={rw} opacity={0.8} />
						<SvgPlate plate={TRAILER} x={gx - rw / 2} y={gy - rh - 14} w={rw} />
					</g>;
				}}</TermPlot>
			<LiveReadoutBoard x={860} y={190} width={480} at={-30} inline size={52} labelSize={30} rows={[
				{label: 'year n', value: nInt, digits: 0},
				{label: 'geometric value', value: trailer(nInt), role: 'a', format: x => money(Math.round(x))},
				{label: 'arithmetic value', value: Math.max(0, straight(nInt)), format: x => money(Math.round(x))},
			]} />
			<BoxCard x={1440} y={170} w={440} at={-30} size={36} title="two models">
				<div style={{fontWeight: 800, color: BLUE}}>geometric: lose 15% of what's left</div>
				<div style={{fontWeight: 800, color: GREY, marginTop: 8}}>arithmetic: lose $4,500 each year</div>
			</BoxCard>
			<Hand x={1450} y={540} at={k.nothing} size={40} color={GREY} w={420}>arithmetic: same loss, reaches 0</Hand>
			<Hand x={1450} y={660} at={k.each} size={40} color={BLUE} w={420}>15% of what's left: each loss is smaller</Hand>
			<Hand x={1450} y={790} at={k.closer} size={40} color={BLUE} w={420}>geometric: approaches 0, never reaches it</Hand>
		</>
	);
};

// ---------- 7. a total over time: the oil well ----------
const OIL = {x: 120, base: 900, colW: 24, gap: 7, unit: 0.0005};
const oilYears = (fr: number) => {const k = K7; return 20 * lin(fr, k.since, k.however);};
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const sw = prog(fr, k.since, 18);
	const ny = oilYears(fr), nShow = Math.max(1, Math.floor(ny + 1e-6));
	return (
		<>
			<BoxCard x={96} y={150} w={1728} at={-30} size={38} title="task" edge={BROWN}>An oil well produces 50 000 barrels in its first year. Each year after that, it produces 10% less than the year before. (a) Find the total produced in the first 10 years. (b) Show that the well can never produce more than 500 000 barrels.</BoxCard>
			<BoxCard x={96} y={345} w={680} at={-30} size={44} title="givens">
				<div style={{fontWeight: 800, color: BLUE, opacity: 1}}>a = 50 000 barrels (year 1)</div>
				<div style={{fontWeight: 800, color: AMBER, opacity: 1}}>r = 1 − 0.1 = 0.9</div>
			</BoxCard>
			<TabStrip x={170} base={910} pitch={128} barW={92} unit={0.0042} labelSize={30} valueSize={30} arcSize={34} o={1 - sw}
				tabs={[1, 2, 3, 4, 5].map(i => ({label: `year ${i}`, value: 50000 * 0.9 ** (i - 1), text: i === 1 ? (fr >= k.here ? 'a₁ = 50 000' : '50 000') : undefined, at: i === 1 ? -30 : k.less + (i - 2) * 10}))}
				arcs={[0, 1, 2, 3].map(i => ({from: i, to: i + 1, label: '×0.9', at: k.less + 6 + i * 10}))} />
			<TotalsColumns x={OIL.x} base={OIL.base} colW={OIL.colW} gap={OIL.gap} unit={OIL.unit} total={oilS} count={ny} max={20} o={sw} xLabels={[1, 10, 20]}
				limit={{v: 500000, label: fr >= k.last ? '500 000: approached, never passed' : '500 000', o: prog(fr, k.sinf, 12)}} />
			<div style={{position: 'absolute', left: 430, top: 546, opacity: sw * prog(fr, k.since + 20, 12) * (1 - prog(fr, k.last - 10, 12)), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: TEAL, background: '#fffdf8', borderRadius: 14, padding: '4px 16px', boxShadow: '0 6px 14px rgba(60,45,20,0.08)'}}>
				total after {nShow} {nShow === 1 ? 'year' : 'years'}<br /><span style={{fontWeight: 800, fontSize: 48, fontVariantNumeric: 'tabular-nums'}}>{sp(oilS(nShow))}</span>
			</div>
			<BoxCard x={820} y={370} w={960} at={-30} out={k.thats - 8} size={42} title="plan">
				<div>(a) The yearly outputs form a GP: find a and r, then S<Sb>10</Sb>.</div>
				<div style={{marginTop: 12}}>(b) Check |r| &lt; 1, then find S<Sb>∞</Sb>.</div>
			</BoxCard>
			<Row x={820} y={370} at={k.thats} size={48} dim={prog(fr, k.one, 12)} small={40}><span style={{color: TEAL}}>S<Sb>10</Sb></span> = <Frac n={<>50 000(1 − 0.9<Pow>10</Pow>)</>} d="1 − 0.9" /></Row>
			<Row x={820} y={500} at={k.one} size={48} dim={prog(fr, k.since, 12)} small={40}>{'       '}= 500 000(1 − 0.9<Pow>10</Pow>)<span style={{color: POS, fontSize: 34, opacity: prog(fr, k.about, 10)}}>  ≈ 325 660.78</span></Row>
			<AnswerBox x={820} y={590} at={k.barrels} size={44}>(a) ≈ 325 661 barrels</AnswerBox>
			<Row x={820} y={700} at={k.since} size={48} dim={prog(fr, k.sinf, 12)} small={40}>|r| = 0.9 &lt; 1, so the totals settle</Row>
			<Row x={820} y={780} at={k.sinf} size={50}><span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="50 000" d="1 − 0.9" /> = 500 000</Row>
			<AnswerBox x={820} y={900} at={k.last} size={40}>(b) never more than 500 000 barrels  ✓</AnswerBox>
		</>
	);
};

// ---------- 8. memory aid ----------
/** The three icons and the memory line: start (the town at t = 0), ratio (a percentage bar), count (numbered arcs). */
export const AidBoard: React.FC<{x: number; y: number; glow?: {start: number; ratio: number; count: number; zero: number}; lineAt?: number; subAt?: number}> = ({x, y, glow, lineAt = -30, subAt = -30}) => {
	const fr = useCurrentFrame();
	const g = (a?: number) => (a === undefined ? 0 : prog(fr, a, 12) * (1 - prog(fr, a + 40, 14)));
	const cap = (a?: number): React.CSSProperties => ({position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: g(a) > 0.2 ? AMBER : INK});
	return <>
		<FramedCard x={x} y={y} w={1400} h={760} at={-30} />
		<div style={{position: 'absolute', left: x + 60, top: y + 28, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: POS}}>Memory aid</div>
		<Town x={x + 70} y={y + 170} w={380} houses={0} />
		<FrameSvg>
			<g opacity={1}><line x1={x + 390} x2={x + 390} y1={y + 290} y2={y + 140} stroke={INK} strokeWidth={5} /><path d={`M${x + 390},${y + 140} h104 l-16,26 l16,26 h-104 z`} fill={glow && fr >= glow.zero ? '#f8e8c8' : '#fffdf8'} stroke={glow && fr >= glow.zero ? AMBER_STROKE : INK} strokeWidth={4} /><text x={x + 434} y={y + 177} textAnchor="middle" style={TXT(28, INK)}>t = 0</text></g>
		</FrameSvg>
		<PctBar x={x + 560} y={y + 230} w={300} h={70} pct={5} gain move={1} />
		<FrameSvg><text x={x + 730} y={y + 360} textAnchor="middle" style={TXT(46, AMBER, true)}>→  ×1.05</text></FrameSvg>
		<FrameSvg>
			{[0, 1, 2].map(i => {const x0 = x + 1000 + i * 110, x1 = x0 + 100, yy = y + 330; return <g key={i}>
				<line x1={x0 - 6} x2={x1 + 6} y1={yy} y2={yy} stroke={INK} strokeWidth={4} />
				<path d={`M${x0 + 10},${yy - 8} Q${x0 + 50},${yy - 90} ${x1 - 10},${yy - 8}`} stroke={AMBER_STROKE} strokeWidth={5} fill="none" />
				<circle cx={x0 + 50} cy={yy - 50} r={19} fill="#fffdf8" stroke={GREY} strokeWidth={3.5} /><text x={x0 + 50} y={yy - 40} textAnchor="middle" style={TXT(28, GREY)}>{i + 1}</text>
			</g>;})}
		</FrameSvg>
		<div style={{...cap(glow?.start), left: x + 200, top: y + 380}}>start</div>
		<div style={{...cap(glow?.ratio), left: x + 650, top: y + 380}}>ratio</div>
		<div style={{...cap(glow?.count), left: x + 1090, top: y + 380}}>count</div>
		<div style={{position: 'absolute', left: x + 70, top: y + 480, opacity: prog(fr, lineAt, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 92, color: INK}}>Start, ratio, count.</div>
		<div style={{position: 'absolute', left: x + 74, top: y + 620, opacity: prog(fr, subAt, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: INK}}>Count the multiplications from time zero.</div>
	</>;
};
export const S08: React.FC = () => {
	const k = K8;
	return <AidBoard x={260} y={170} glow={{start: k.start, ratio: k.ratio, count: k.count, zero: k.zero}} lineAt={k.three} subAt={k.count} />;
};
export {SceneHeading};
