// Scenes 1 to 8: the savings app (which change matters most?), a fair test, doubling the deposit (× 2 exactly),
// starting with $5,000 (P(1 + r)ⁿ added), doubling the rate (only 13% more over 5 years), more years, rate and time
// together (× 2.59 over 30 years) and starting a retirement fund ten years later.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, LiveReadoutBoard, Pow, SceneHeading, smooth} from '../../math/studio';
import {K1, K2, K3, K4, K5, K6, K7, K8} from './cuemap';
import {F13FinalFrame} from '../math-a12-f13/s3';
import {ANSR, App, BASE, BROWN, BoxCard, CARD, Chip, DEP, FVGraph, GREY, Hand, INTR, Row, VIO, VIO_SOFT, ValueSplit, annuityFV, c0, c2, fvOf} from './parts';
import type {Ctl, Settings} from './parts';

export const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
export const mix = (a: number, b: number, u: number) => a + (b - a) * u;
const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);
export const PH = {x: 90, y: 150, h: 820};
const KS = 0.03;
const split = (s: Settings) => {const v = fvOf(s), k = s.perYear ?? 12, dep = s.M * k * s.years, st = s.P * (1 + s.rate / 100 / k) ** (k * s.years); return {start: st, deposits: dep, interest: v - dep - st};};
const Board: React.FC<{v: number; green?: number; at?: number}> = ({v, green = 0, at = -30}) => <LiveReadoutBoard x={560} y={160} width={520} at={at} inline size={52} labelSize={30} rows={[{label: 'balance', value: v, role: green > 0.5 ? 'answer' : undefined, format: c2}]} />;
const GUESS = ['deposit', 'rate', 'years', 'start'];
const Guesses: React.FC<{at: number; small?: boolean}> = ({at, small = false}) => <>{GUESS.map((g, i) => <Chip key={g} x={small ? 1120 + i * 190 : 1120 + (i % 2) * 360} y={small ? 172 : 170 + Math.floor(i / 2) * 76} at={at + i * 6} size={small ? 30 : 38} color={INK}>{g}</Chip>)}</>;
const FORMULA = <>FV = M[(1 + r)<Pow>n</Pow> − 1] ÷ r = 300[(1.004)<Pow>60</Pow> − 1] ÷ 0.004</>;


// ---------- 1. hook: which change matters most? ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const open = 1 - prog(fr, 14, 14);
	const glow: Ctl | null = fr >= k.start ? 'P' : fr >= k.years ? 'years' : fr >= k.rate ? 'rate' : fr >= k.dep ? 'M' : null;
	const ring = lin(fr, k.guess, k.guess + 20);
	const mv = smooth(lin(fr, 8, 32)), so = prog(fr, 18, 10);
	return (
		<>
			<SceneHeading text="How do the inputs change the future value?" at={4} size={48} />
			<App x={mix(700, PH.x, mv)} y={PH.y} h={mix(810, PH.h, mv)} s={BASE} glow={fr < k.which ? glow : null} q={1 - prog(fr, 4, 10)} />
			<div style={{position: 'absolute', inset: 0, opacity: so}}>
			<Board v={fvOf(BASE)} at={k.gives} />
			<FVGraph x={640} y={330} width={1240} height={610} xMax={5.4} yMax={22000} xTicks={[1, 2, 3, 4, 5]} yTicks={[5000, 10000, 15000, 20000].map(v => ({value: v, label: c0(v)}))} curves={[{s: BASE, upTo: 5 * smooth(lin(fr, k.three, k.gives + 20))}]}>{m => {
				const [px, py] = m.p(5, fvOf(BASE));
				return <g opacity={prog(fr, k.gives, 12)}><circle cx={px} cy={py} r={12} fill={INK} stroke={CARD} strokeWidth={4} /><text x={px - 18} y={py - 22} textAnchor="end" style={TXT(40, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">$20,298.05</text></g>;
			}}</FVGraph>
			<Hand x={760} y={420} at={k.three} size={40} color={GREY} w={560}>$300 a month, 4.8% p.a. monthly, 5 years</Hand>
			</div>
			<Guesses at={k.which} small />
			{ring > 0 ? <FrameSvg><circle cx={1850} cy={262} r={22} fill="none" stroke="#e4dccd" strokeWidth={7} /><circle cx={1850} cy={262} r={22} fill="none" stroke={INTR.stroke} strokeWidth={7} strokeDasharray={`${2 * Math.PI * 22}`} strokeDashoffset={2 * Math.PI * 22 * ring} transform="rotate(-90 1850 262)" /></FrameSvg> : null}
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F13FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. a fair test ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const sp = split(BASE);
	return (
		<>
			<SceneHeading text="A fair test" at={4} size={52} />
			<App {...PH} s={BASE} glow={fr >= k.one ? 'M' : null} />
			<Board v={fvOf(BASE)} />
			<Guesses at={-30} small />
			<Row x={560} y={290} at={k.an} size={40} color={GREY}>{FORMULA}</Row>
			<Hand x={1420} y={360} at={k.an + 20} size={36} color={GREY}>the same rule, run fast</Hand>
			<FVGraph x={640} y={400} width={1240} height={420} xMax={5.4} yMax={22000} xTicks={[1, 2, 3, 4, 5]} yTicks={[10000, 20000].map(v => ({value: v, label: c0(v)}))} curves={[{s: BASE}]} />
			<Hand x={760} y={470} at={k.one} size={42} color={DEP.ink}>one change at a time; the rest stay fixed</Hand>
			<Hand x={760} y={530} at={k.exam} size={42} color={INK}>exam: show the working</Hand>
			<ValueSplit x={600} y={870} k={KS} deposits={sp.deposits} interest={sp.interest} o={prog(fr, k.right, 12)} label="deposits + interest = $20,298.05" />
		</>
	);
};

// ---------- 3. double the deposit ----------
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const M = Math.round(mix(300, 600, smooth(lin(fr, k.double, k.double + 34))) * (1 - 0) );
	const back = smooth(lin(fr, 760, 780));
	const s: Settings = {...BASE, M: Math.round(mix(M, 300, back))};
	const sp = split(fr >= k.total ? {...BASE, M: 600} : BASE);
	return (
		<>
			<SceneHeading text="Double the deposit" at={4} size={52} />
			<App {...PH} s={s} ghost={BASE} glow="M" />
			<Board v={fvOf(s)} green={prog(fr, k.cents, 6) * (1 - back)} />
			<Hand x={1120} y={180} at={k.exactly} size={46} color={ANSR.ink}>× 2 exactly</Hand>
			<Row x={560} y={290} at={k.every} size={40} dim={prog(fr, k.dbl, 12) * 0.5}>FV = <span style={{color: DEP.ink}}>M</span> + <span style={{color: DEP.ink}}>M</span>(1 + r) + … + <span style={{color: DEP.ink}}>M</span>(1 + r)<Pow>n − 1</Pow></Row>
			<Row x={560} y={350} at={k.dbl} size={44}>{'     '}= <span style={{color: DEP.ink}}>M</span> × [1 + (1 + r) + … + (1 + r)<Pow>n − 1</Pow>]</Row>
			<FVGraph x={640} y={420} width={1240} height={420} xMax={5.4} yMax={44000} xTicks={[1, 2, 3, 4, 5]} yTicks={[20000, 40000].map(v => ({value: v, label: c0(v)}))} curves={[{s: BASE, color: INK_SOFT, dash: '12 9', width: 4}, {s}]}>{m => <g opacity={prog(fr, k.fv, 12) * (1 - back)}>{[1, 3, 5].map(t => {const [a, b] = m.p(t, fvOf(s, t)); return <text key={t} x={a} y={b - 20} textAnchor="middle" style={TXT(32, GREY)} stroke={CARD} strokeWidth={7} paintOrder="stroke">× {(fvOf(s, t) / fvOf(BASE, t)).toFixed(2)}</text>;})}</g>}</FVGraph>
			<ValueSplit x={600} y={880} k={KS} deposits={sp.deposits} interest={sp.interest} label={fr >= k.share ? 'interest share 11.3% in both cases' : undefined} />
		</>
	);
};

// ---------- 4. start with $5,000 ----------
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const back = smooth(lin(fr, 940, 962));
	const P = Math.round(mix(0, 5000, smooth(lin(fr, k.start, k.start + 30))) * (1 - back));
	const s: Settings = {...BASE, P};
	const sp = split({...BASE, P: 5000});
	const hk = 0.036, tb = 730, tx = 600;
	return (
		<>
			<SceneHeading text="Start with $5,000" at={4} size={52} />
			<App {...PH} s={s} glow="P" ghost={BASE} />
			<Board v={fvOf(s)} green={prog(fr, k.cents2, 6) * (1 - back)} />
			<Row x={560} y={290} at={-30} size={40} color={GREY}>{fr >= k.total ? <>FV = <span style={{color: VIO}}>P(1 + r)<Pow>n</Pow></span> + M[(1 + r)<Pow>n</Pow> − 1] ÷ r</> : FORMULA}</Row>
			<Hand x={1430} y={350} at={k.total + 10} size={32} color={GREY}>P: starting balance (some books write A₀)</Hand>
			<ValueSplit x={600} y={400} k={KS} start={sp.start} deposits={sp.deposits} interest={sp.interest} o={prog(fr, k.add, 12)} />
			<FrameSvg style={{opacity: prog(fr, k.now, 12)}}>
				<line x1={tx - 20} x2={tx + 860} y1={tb} y2={tb} stroke={INK} strokeWidth={4} />
				<rect x={tx} y={tb - 5000 * hk} width={70} height={5000 * hk} fill={VIO_SOFT} stroke={VIO} strokeWidth={4} opacity={P > 0 ? 1 : 0.25} />
				<rect x={tx} y={tb - 6353.2 * hk} width={70} height={1353.2 * hk} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={4} opacity={prog(fr, k.grows, 12)} />
				{Array.from({length: 60}, (_, i) => {const g = 300 * 1.004 ** (59 - i), xx = tx + 110 + i * 12.5; return <g key={i}><rect x={xx} y={tb - 300 * hk} width={9} height={300 * hk} fill={DEP.soft} stroke={DEP.stroke} strokeWidth={2} /><rect x={xx} y={tb - g * hk} width={9} height={(g - 300) * hk} fill={INTR.stroke} opacity={0.8} /></g>;})}
				<text x={tx + 35} y={tb + 40} textAnchor="middle" style={TXT(28, VIO)}>t = 0</text>
				<text x={tx + 470} y={tb + 40} textAnchor="middle" style={TXT(28, DEP.ink)}>60 deposits of $300</text>
			</FrameSvg>
			<Hand x={tx + 110} y={tb - 200} at={k.all} size={42} color={VIO} w={700}>the start earns all 60 months</Hand>
			<Row x={560} y={800} at={k.grows} size={46}><span style={{color: VIO}}>5000 × 1.004<Pow>60</Pow></span><span style={{opacity: prog(fr, k.cents1, 10)}}> = <span style={{color: ANSR.ink}}>$6,353.20</span></span></Row>
			<Row x={560} y={870} at={k.deps} size={40}>deposits: 300[(1.004)<Pow>60</Pow> − 1] ÷ 0.004 = $20,298.05</Row>
			<Hand x={1480} y={520} at={k.cents2} size={30} color={GREY} w={400}>full values 6,353.2035 + 20,298.0539 = 26,651.2575, so $26,651.26</Hand>
		</>
	);
};

// ---------- 5. double the rate ----------
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const back = smooth(lin(fr, 1050, 1072));
	const rate = Math.round(mix(mix(4.8, 9.6, smooth(lin(fr, k.next, k.next + 34))), 4.8, back) * 10) / 10;
	const s: Settings = {...BASE, rate};
	const a = split(BASE), b = split({...BASE, rate: 9.6});
	return (
		<>
			<SceneHeading text="Double the rate" at={4} size={52} />
			<App {...PH} s={s} glow="rate" ghost={BASE} />
			<Board v={fvOf(s)} />
			<Hand x={1120} y={180} at={k.only} size={44} color={GREY}>× 1.13: only about 13% more</Hand>
			<FVGraph x={640} y={300} width={1240} height={460} xMax={5.4} yMax={25000} xTicks={[1, 2, 3, 4, 5]} yTicks={[10000, 20000].map(v => ({value: v, label: c0(v)}))} curves={[{s: BASE, color: INK_SOFT, dash: '12 9', width: 4}, {s}]} />
			<ValueSplit x={720} y={800} k={KS} deposits={a.deposits} interest={a.interest} o={prog(fr, k.deps, 12)} label="4.8%" ring={0} />
			<ValueSplit x={720} y={890} k={KS} deposits={b.deposits} interest={b.interest} o={prog(fr, k.deps, 12)} label="9.6%" ring={prog(fr, k.but, 12)} />
			<Hand x={600} y={826} at={k.deps} size={36} color={DEP.ink}>same</Hand>
			<Hand x={1530} y={800} at={k.more} size={40} color={INTR.ink} w={340}>interest × 2.17: interest only</Hand>
		</>
	);
};

// ---------- 6. more years ----------
const yearsAt = (fr: number) => {const k = K6; return fr < k.ten ? 5 : fr < k.twenty ? mix(5, 10, smooth(lin(fr, k.ten, k.ten + 24))) : fr < k.thirty ? mix(10, 20, smooth(lin(fr, k.twenty, k.twenty + 24))) : mix(20, 30, smooth(lin(fr, k.thirty, k.thirty + 24)));};
export const S06: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K6;
	const yv = yearsAt(fr), yi = Math.round(yv);
	const s: Settings = {...BASE, years: yv};
	const xMax = Math.max(5.5, yv * 1.06), yMax = Math.max(22000, fvOf(s) * 1.1);
	const sp = split({...BASE, years: yi});
	const kk = 1200 / fvOf({...BASE, years: Math.max(5, yi)});
	const marks = [{t: 5, at: k.five, l: '$20,298.05'}, {t: 10, at: k.nine, l: '$46,089.59'}, {t: 20, at: k.twenty + 30, l: '$120,502.51'}, {t: 30, at: k.thirty + 30, l: '$240,644.24'}];
	return (
		<>
			<SceneHeading text="More years" at={4} size={52} />
			<App {...PH} s={{...BASE, years: yi}} glow="years" ghost={BASE} />
			<Board v={fvOf({...BASE, years: yi})} />
			<FVGraph x={640} y={300} width={1240} height={540} xMax={xMax} yMax={yMax} xTicks={[5, 10, 15, 20, 25, 30].filter(t => t <= xMax)} yTicks={[50000, 100000, 150000, 200000, 250000].filter(v => v < yMax).map(v => ({value: v, label: c0(v)}))} curves={[{s}]} putIn={{M: 300, perYear: 12, upTo: yv, o: 1}}>{m => <g>
				{marks.map((mk, i) => {if (yv < mk.t - 0.01) return null; const [a, b] = m.p(mk.t, fvOf({...BASE, years: mk.t})); return <g key={i} opacity={prog(fr, mk.at, 10)}><circle cx={a} cy={b} r={11} fill={INK} stroke={CARD} strokeWidth={4} /><text opacity={i === 0 ? 1 - Math.min(1, Math.max(0, (xMax - 8) / 4)) : 1} x={a - 16} y={b - 20} textAnchor="end" style={TXT(32, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">{mk.l}</text></g>;})}
				{(() => {const [a, b] = m.p(yv, 300 * 12 * yv); return <text x={a - 10} y={b + 40} textAnchor="end" style={TXT(28, GREY)} stroke={CARD} strokeWidth={6} paintOrder="stroke">put in: {c0(300 * 12 * yv)}</text>;})()}
			</g>}</FVGraph>
			<ValueSplit x={600} y={880} k={kk} deposits={sp.deposits} interest={sp.interest} />
			<Hand x={760} y={360} at={k.adds} size={40} color={DEP.ink}>+12 deposits</Hand>
			<Hand x={760} y={420} at={k.every} size={40} color={INTR.ink} w={760}>every earlier deposit: +1 year to grow</Hand>
		</>
	);
};

// ---------- 7. rate and time together ----------
export const S07: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K7;
	const back = smooth(lin(fr, 912, 934));
	const lo: Settings = {...BASE, years: 30}, hi: Settings = {...BASE, years: 30, rate: 9.6};
	const rate = mix(mix(4.8, 9.6, smooth(lin(fr, k.at96, k.at96 + 30))), 4.8, back);
	const draw = smooth(lin(fr, k.at96, k.cents));
	const gx = fr >= k.over30 ? 30 : 5, go = prog(fr, k.over5, 12);
	return (
		<>
			<SceneHeading text="Rate and time together" at={4} size={52} />
			<App {...PH} s={{...BASE, years: back > 0.5 ? 5 : 30, rate: Math.round(rate * 10) / 10}} glow="rate" />
			<Board v={fvOf({...BASE, years: 30, rate: Math.round(rate * 10) / 10})} />
			<Row x={560} y={290} at={-30} size={40} color={GREY}>FV = M[<span style={{color: fr >= k.rate ? INTR.ink : GREY, background: fr >= k.rate ? INTR.soft : undefined, borderRadius: 8}}>(1 + r)<Pow>n</Pow></span> − 1] ÷ r</Row>
			<Hand x={1180} y={296} at={k.rate} size={40} color={INTR.ink}>rate and time together</Hand>
			<FVGraph x={640} y={360} width={1240} height={580} xMax={31} yMax={680000} xTicks={[5, 10, 15, 20, 25, 30]} yTicks={[200000, 400000, 600000].map(v => ({value: v, label: c0(v)}))} curves={[{s: lo}, {s: hi, dash: '14 9', upTo: 30 * draw}]}>{m => {
				const [ex, ey] = m.p(30, fvOf(hi)), [lx, ly] = m.p(30, fvOf(lo)), [vx, vy0] = m.p(gx, 0), [, vy1] = m.p(gx, fvOf({...hi, years: gx}));
				return <g>
					<g><circle cx={lx} cy={ly} r={11} fill={INK} /><text x={lx - 16} y={ly + 40} textAnchor="end" style={TXT(32, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">4.8%: $240,644.24</text></g>
					<g opacity={prog(fr, k.cents, 10)}><circle cx={ex} cy={ey} r={11} fill={INK} /><text x={ex - 16} y={ey - 18} textAnchor="end" style={TXT(32, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">9.6%: $622,923.97  (× 2.59)</text></g>
					{go > 0.01 ? <g opacity={go}><line x1={vx} x2={vx} y1={vy0} y2={vy1 - 40} stroke={GREY} strokeWidth={4} strokeDasharray="8 7" />{gx === 5 ? <text x={vx + 14} y={vy1 - 60} textAnchor="start" style={TXT(36, GREY)} stroke={CARD} strokeWidth={7} paintOrder="stroke">5 years: × 1.13</text> : null}</g> : null}
				</g>;
			}}</FVGraph>
		</>
	);
};

// ---------- 8. starting ten years later ----------
const RET: Settings = {P: 0, M: 9200, rate: 7, years: 40, perYear: 1};
export const S08: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K8;
	const d40 = smooth(lin(fr, k.nine, k.after + 120)), d30 = smooth(lin(fr, k.start, k.start + 80));
	return (
		<>
			<SceneHeading text="Starting ten years later" at={4} size={52} />
			<App x={50} y={150} h={780} s={fr >= k.start ? {...RET, years: 30} : RET} glow={fr >= k.start ? 'years' : null} title="Retirement" />
			<BoxCard x={660} y={240} w={540} at={-30} size={34} title="model"><div style={{fontWeight: 800}}>$9,200 at each year's end, 7% p.a., compounded annually</div></BoxCard>
			<FVGraph x={540} y={170} width={1340} height={780} xMax={42} yMax={2000000} xTicks={[10, 20, 30, 40]} yTicks={[500000, 1000000, 1500000].map(v => ({value: v, label: `$${v / 1e6}m`}))} curves={[{s: RET, upTo: 40 * d40}, {s: {...RET, years: 30}, from: 10, upTo: 30 * d30, dash: '14 9'}]} putIn={{M: 9200, perYear: 1, upTo: 40, o: prog(fr, k.deps, 12)}}>{m => {
				const [a, b] = m.p(40, annuityFV(9200, 0.07, 40)), [, c] = m.p(40, annuityFV(9200, 0.07, 30)), [, pin] = m.p(40, 368000);
				return <g>
					<g opacity={prog(fr, k.after + 100, 10)}><circle cx={a} cy={b} r={12} fill={INK} /><text x={a - 18} y={b - 16} textAnchor="end" style={TXT(36, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">40 deposits: $1,836,643.03</text></g>
					<g opacity={prog(fr, k.deps, 10)}><text x={a - 18} y={pin + 40} textAnchor="end" style={TXT(32, GREY)} stroke={CARD} strokeWidth={7} paintOrder="stroke">put in: $368,000</text></g>
					<g opacity={prog(fr, k.start + 80, 10)}><circle cx={a} cy={c} r={12} fill={INK} /><text x={a - 18} y={c - 16} textAnchor="end" style={TXT(36, INK)} stroke={CARD} strokeWidth={7} paintOrder="stroke">30 deposits: $869,039.23</text>
						<path d={`M${a + 22},${b} h14 V${c} h-14`} stroke={GREY} strokeWidth={4} fill="none" /><text x={a + 10} y={(b + c) / 2 + 12} textAnchor="end" style={TXT(30, GREY)} stroke={CARD} strokeWidth={7} paintOrder="stroke">difference $967,603.80</text></g>
				</g>;
			}}</FVGraph>
			<Chip x={660} y={420} at={k.ninety} size={36} color={DEP.ink}>10 missed deposits: $92,000</Chip>
			<Hand x={660} y={500} at={k.longest - 40} size={40} color={INTR.ink} w={640}>the first deposit grows 39 years: 9,200 × 1.07³⁹ ≈ $128,752.35</Hand>
		</>
	);
};
export {VIO, c2};
