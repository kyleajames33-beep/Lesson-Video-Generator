// Scenes 1 to 4: the home loan (f09's final frame) and the mortgage calculator (how much sooner at $2,500?), where
// the extra repayment goes (all to the debt, then less interest every month), the calculator running the loan to
// 265 repayments (the last $540.57), and a given balance graph (each extra $500 buys less time).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, SceneHeading, SvgPlate, loanSchedule, smooth, usePlatePreload} from '../../math/studio';
import {F09FinalFrame} from '../math-a12-f09/s3';
import {K1, K2, K3, K4} from './cuemap';
import {ANSR, BROWN, BoxCard, CARD, Calc, Chip, GREY, HL, HOME, HOUSE, Hand, INTR, LAPTOP, LoanGraph, M30, REPY, SCREEN, Split, c2, loanBalance, payoff, termYears} from './parts';

export const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
export const mix = (a: number, b: number, u: number) => a + (b - a) * u;
const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);

// ---------- 1. hook: how much sooner? ----------
const GHOST_YEARS = 12;
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	usePlatePreload([HOUSE.src, LAPTOP.src]);
	const open = 1 - prog(fr, 14, 14);
	const u = smooth(lin(fr, k.calc - 6, k.calc + 30));
	const g = {x: mix(600, 990, u), y: mix(210, 330, u), w: mix(1260, 890, u), h: mix(700, 560, u)};
	const ring = lin(fr, k.less, k.less + 90);
	return (
		<>
			<SceneHeading text="How do rate and repayment changes alter a loan term?" at={30} size={46} />
			<LoanGraph x={g.x} y={g.y} width={g.w} height={g.h} curves={[
				{...HOME, label: u < 0.5 ? {text: '$2,147.29 a month: about 30 years', atYears: 13.2, dy: -40} : {text: '$2,147.29: 30 years', atYears: 9, dy: -30}},
				{P: 400000, r: 1 / 240, M: 2500, color: INK_SOFT, dash: '16 12', width: 6, upTo: GHOST_YEARS, label: {text: '$2,500 a month?', atYears: 4.6, dy: 64, color: INK_SOFT}},
			]} extra={m => {
				const [qx, qy] = m.p(GHOST_YEARS, loanBalance(400000, 1 / 240, 2500, GHOST_YEARS * 12));
				const [x0, zy] = m.p(0, 0), [x30] = m.p(30, 0), bo = prog(fr, k.term, 12);
				return <g>
					<g><path d={`M${qx + 8},${qy + 10} q 26 30 40 74`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="4 10" strokeLinecap="round" /><rect x={qx + 18} y={qy + 92} width={84} height={84} rx={16} fill={CARD} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" /><text x={qx + 60} y={qy + 152} textAnchor="middle" style={TXT(56, INK_SOFT)}>?</text></g>
					{bo > 0.01 ? <g opacity={bo}><path d={`M${x0},${zy - 40} v-16 H${x30} v16`} stroke={GREY} strokeWidth={4} fill="none" /><text x={x30 - 10} y={zy - 70} textAnchor="end" style={TXT(38, GREY)} stroke={CARD} strokeWidth={7} paintOrder="stroke">term: 30 years</text></g> : null}
				</g>;
			}} />
			{u < 1 ? <div style={{opacity: 1 - u}}>
				<FrameSvg><SvgPlate plate={HOUSE} x={70} y={600} w={480} /></FrameSvg>
				<Hand x={80} y={510} at={-30} size={48} color={INK}>home loan: $400,000</Hand>
				<Hand x={80} y={860} at={-30} size={36} color={GREY} w={470}>5% p.a., compounded monthly</Hand>
			</div> : null}
			{u > 0 ? <div style={{position: 'absolute', inset: 0, opacity: u, transform: `translateX(${(1 - u) * -200}px)`}}><Calc x={40} y={250} w={900} s={{M: M30, rate: 5}} /></div> : null}
			<BoxCard x={990} y={160} w={880} at={k.calc} size={40} title="the loan"><div style={{fontWeight: 800, whiteSpace: 'pre'}}>$400,000   ·   5% p.a., compounded monthly</div></BoxCard>
			<Chip x={1590} y={262} at={k.more} size={30} color={REPY.ink}>+$352.71 a month</Chip>
			<Chip x={990} y={262} at={k.how} size={32} color={INK}>&lt; 1 year   /   2 to 5 years   /   &gt; 5 years</Chip>
			{ring > 0 ? <FrameSvg><circle cx={1620} cy={420} r={30} fill="none" stroke="#e4dccd" strokeWidth={8} /><circle cx={1620} cy={420} r={30} fill="none" stroke={INTR.stroke} strokeWidth={8} strokeDasharray={`${2 * Math.PI * 30}`} strokeDashoffset={2 * Math.PI * 30 * ring} transform="rotate(-90 1620 420)" /><text x={1665} y={432} style={TXT(36, GREY, true)}>make a guess</text></FrameSvg> : null}
			{fr < k.calc - 6 ? <Chip x={960} y={80} at={-30} out={20} size={42} color={BROWN}>Next: pay more, or pay a higher rate?</Chip> : null}
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F09FinalFrame /></div> : null}
		</>
	);
};

// ---------- 2. where the extra goes ----------
/** The laptop as a small icon with its payoff line. */
export const LaptopThumb: React.FC<{x: number; y: number; w: number; text: string}> = ({x, y, w, text}) => {
	usePlatePreload([LAPTOP.src]);
	const s = w / (LAPTOP.box[2] - LAPTOP.box[0]);
	const sx = x + (SCREEN[0] - LAPTOP.box[0]) * s, sy = y + (SCREEN[1] - LAPTOP.box[1]) * s, sw = (SCREEN[2] - SCREEN[0]) * s, sh = (SCREEN[3] - SCREEN[1]) * s;
	return <>
		<FrameSvg><SvgPlate plate={LAPTOP} x={x} y={y} w={w} /></FrameSvg>
		<div style={{position: 'absolute', left: sx, top: sy, width: sw, height: sh, background: '#f7f4ec', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, textAlign: 'center', lineHeight: 1.1}}>
			<div style={{fontWeight: 700, fontSize: 26, color: GREY}}>paid off in</div>
			<div style={{fontWeight: 800, fontSize: 30, color: ANSR.ink}}>{text}</div>
		</div>
	</>;
};
const KB = 0.44, BX = 380;
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const i1 = HL.P * HL.r, i2a = (HL.P - (M30 - i1)) * HL.r, s25 = loanSchedule(HL.P, HL.r, 2500), i2b = s25[1].interest;
	const glow = prog(fr, k.straight, 12) * (1 - 0.6 * prog(fr, k.at30, 12));
	return (
		<>
			<SceneHeading text="Where the extra goes" at={4} size={52} />
			<LaptopThumb x={96} y={160} w={300} text="30 years 0 months" />
			<BoxCard x={1250} y={160} w={630} at={-30} size={40} title="givens">
				<div style={{fontWeight: 800}}>P = $400,000</div>
				<div style={{fontWeight: 800, color: INTR.ink}}>r = 0.05 ÷ 12 = <span style={{whiteSpace: 'nowrap'}}>1/240</span></div>
				<div style={{fontWeight: 800, color: REPY.ink}}>M = $2,147.29 or $2,500</div>
			</BoxCard>
			<Hand x={BX} y={392} at={-30} size={42} color={INK}>month 1</Hand>
			<Hand x={BX + 330} y={392} at={k.either} size={40} color={INTR.ink}>same interest</Hand>
			<Split x={BX} y={450} k={KB} M={M30} interest={i1} label="$2,147.29" tealLabel={fr >= k.falls1 ? '$480.62' : undefined} />
			<Split x={BX} y={530} k={KB} M={2500} interest={i1} label="$2,500.00" glowFrom={M30} glowO={glow} tealLabel={fr >= k.eight ? '$833.33' : undefined} />
			<Hand x={1080} y={610} at={k.straight} size={40} color={REPY.ink}>+$352.71: all to the debt</Hand>
			<Hand x={BX} y={672} at={-30} size={42} color={INK}>month 2</Hand>
			<Split x={BX} y={730} k={KB} M={M30} interest={i2a} label="$2,147.29" tealLabel={fr >= k.lower ? '$482.63' : undefined} intLabel={fr >= k.lower} />
			<Split x={BX} y={810} k={KB} M={2500} interest={i2b} label="$2,500.00" tealLabel={fr >= k.lower + 20 ? '$836.81' : undefined} intLabel={fr >= k.lower + 20} />
			<Hand x={BX} y={900} at={k.lower + 60} size={42} color={REPY.ink}>lower balance → less interest → more to the debt</Hand>
			<Hand x={96} y={600} at={k.nearly} size={38} color={GREY} w={260}>nearly twice as much</Hand>
		</>
	);
};

// ---------- 3. running it on the calculator ----------
const mSlide = (fr: number) => M30 + (2500 - M30) * smooth(lin(fr, K3.slide + 10, K3.slide + 70));
const TB = {x: 1190, y: 200, w: 690, row: 62};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const M = Math.round(mSlide(fr) * 100) / 100;
	const rows = loanSchedule(HL.P, HL.r, M), n = rows.length;
	const shown: (number | null)[] = [1, 2, 3, null, n - 2, n - 1, n];
	const p = payoff(HL.P, HL.r, M);
	const to = prog(fr, k.runs, 12);
	const last = (i: number) => rows[i - 1];
	return (
		<>
			<SceneHeading text="Running it on the calculator" at={4} size={52} />
			<Calc x={30} y={170} w={1110} s={{M, rate: 5, glowM: fr >= k.slide && fr < k.reaches + 30, title: 'next = balance × (1 + 0.05 ÷ 12) − repayment', extra: [{label: 'repayments', value: String(p.n)}, {label: 'final repayment', value: c2(p.final), role: 'repay'}]}} ghostM={fr >= k.slide ? M30 : undefined} />
			<div style={{position: 'absolute', left: TB.x, top: TB.y, width: TB.w, opacity: to, background: CARD, borderRadius: 18, boxShadow: '0 14px 32px rgba(60,45,20,0.10)', padding: '10px 22px', boxSizing: 'border-box', fontFamily: FONT_DISPLAY}}>
				<div style={{display: 'flex', fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: INK_SOFT, borderBottom: '2px solid #ede4d3', paddingBottom: 4}}><span style={{width: 200}}>REPAYMENT</span><span>BALANCE AFTER</span></div>
				{shown.map((i, j) => {
					const ro = prog(fr, k.runs + 10 + j * 6, 8);
					if (i === null) return <div key={j} style={{height: TB.row, opacity: ro, fontSize: 40, fontWeight: 800, color: INK_SOFT, paddingLeft: 60, lineHeight: `${TB.row}px`}}>⋮</div>;
					const fin = i === n, glowF = fin ? prog(fr, k.reaches, 12) : 0;
					return <div key={j} style={{display: 'flex', alignItems: 'center', height: TB.row, opacity: ro, fontSize: 36, fontWeight: 800, color: INK, fontVariantNumeric: 'tabular-nums', background: glowF > 0 ? `rgba(214,238,238,${glowF})` : undefined, borderRadius: 10}}>
						<span style={{width: 200, paddingLeft: 30}}>{i}</span>
						<span>{fin ? <><span style={{color: REPY.ink}}>due {c2(last(i).repayment)}</span><span style={{fontSize: 30, color: GREY}}>  final</span></> : c2(last(i).closing)}</span>
					</div>;
				})}
			</div>
			<FrameSvg>
				{(() => {const ao = prog(fr, k.smaller, 14); if (ao < 0.01) return null; const y0 = TB.y + 54 + 5 * TB.row + TB.row / 2, y1 = y0 + TB.row, xr = TB.x + TB.w - 10; return <g opacity={ao}>
					<path d={`M${xr},${y0} C ${xr + 60},${y0} ${xr + 60},${y1} ${xr},${y1}`} fill="none" stroke={INTR.stroke} strokeWidth={5} />
					<text x={xr - 4} y={(y0 + y1) / 2 + 12} textAnchor="end" style={TXT(32, INTR.ink, true)} stroke={CARD} strokeWidth={7} paintOrder="stroke">× (1 + r)</text>
				</g>;})()}
			</FrameSvg>
			<Hand x={TB.x} y={700} at={k.smaller + 20} size={38} color={GREY} w={690}>owed plus interest is less than $2,500, so the last repayment is smaller</Hand>
			<Chip x={TB.x} y={800} at={k.sooner} size={38} color={ANSR.ink}>&gt; 5 years  ✓</Chip>
			<Hand x={TB.x + 260} y={808} at={k.sooner + 10} size={42} color={ANSR.ink}>about 8 years sooner</Hand>
			<Hand x={TB.x} y={890} at={k.twentytwo} size={38} color={GREY}>265 repayments: 22 years 1 month</Hand>
		</>
	);
};

// ---------- 4. reading a given graph ----------
const C4 = [{M: M30, color: INK, at: 'thirty'}, {M: 2500, color: 'rgba(38,35,31,0.8)', at: 't22'}, {M: 3000, color: 'rgba(38,35,31,0.62)', at: 't16'}, {M: 3500, color: 'rgba(38,35,31,0.48)', at: 't13'}] as const;
const READ = ['30', '≈ 22.0', '≈ 16.3', '≈ 13.0'];
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const draw = 31;
	return (
		<>
			<SceneHeading text="Reading a given graph" at={4} size={52} />
			<LoanGraph x={96} y={170} width={1290} height={780} curves={C4.map(c => ({P: HL.P, r: HL.r, M: c.M, color: c.color, upTo: draw}))} extra={m => {
				const [, zy] = m.p(0, 0);
				return <g>
					{C4.map((c, i) => {const T = termYears(HL.P, HL.r, c.M), [ex] = m.p(T, 0), o = prog(fr, k[c.at], 10); return o > 0.01 ? <g key={i} opacity={o}>
						<circle cx={ex} cy={zy} r={12} fill={INK} stroke={CARD} strokeWidth={4} />
						<text x={ex} y={zy - 30 - (i % 2) * 44} textAnchor="middle" style={TXT(40, INK)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{READ[i]}</text>
					</g> : null;})}
					{[[2500, 3000, 'first', '≈ 5.8 years saved'], [3000, 3500, 'next', '≈ 3.3 years saved']].map(([a, b, cue, t], i) => {const [xa] = m.p(termYears(HL.P, HL.r, a as number), 0), [xb] = m.p(termYears(HL.P, HL.r, b as number), 0), o = prog(fr, k[cue as 'first' | 'next'], 12), yb = zy - 200 - i * 110; return o > 0.01 ? <g key={i} opacity={o}>
						<path d={`M${xb},${yb + 16} v-16 H${xa} v16`} stroke={REPY.stroke} strokeWidth={5} fill="none" />
						<text x={(xa + xb) / 2} y={yb - 14} textAnchor="middle" style={TXT(36, REPY.ink)} stroke={CARD} strokeWidth={8} paintOrder="stroke">{t}</text>
					</g> : null;})}
				</g>;
			}} />
			<BoxCard x={1430} y={170} w={450} at={-30} size={38} title="repayment → term">
				{C4.map((c, i) => <div key={i} style={{display: 'flex', justifyContent: 'space-between', fontWeight: 800, whiteSpace: 'pre', opacity: 1}}><span style={{color: REPY.ink}}>{c2(c.M)}</span><span style={{opacity: prog(fr, k[c.at], 10)}}>{READ[i]} yrs</span></div>)}
			</BoxCard>
			{[0, 1].map(i => <Chip key={i} x={1440} y={470 + i * 74} at={k.step + i * 14} size={30} color={REPY.ink}>{`+$500: ${c2(2500 + 500 * i).replace('.00', '')} → ${c2(3000 + 500 * i).replace('.00', '')}`}</Chip>).slice(0, 2)}
			<Hand x={1430} y={640} at={k.buys} size={44} color={REPY.ink} w={450}>each $500 buys less time</Hand>
			<Hand x={1430} y={790} at={k.buys + 20} size={32} color={GREY} w={450}>terms read from smooth curves; the calculator counts whole repayments</Hand>
		</>
	);
};
export {ANSR, REPY, payoff};
