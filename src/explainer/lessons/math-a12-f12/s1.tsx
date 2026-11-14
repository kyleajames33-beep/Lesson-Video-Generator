// Scenes 1 to 5: two accounts that look opposite (apartment savings climbing, a fund falling), what makes an annuity
// (equal payments, regular times, interest every period; two kinds), what isn't one (sorting four cash flows), the
// apartment savings month by month on the calendar (Aₙ₊₁ = (1 + r)Aₙ + M, A₀ = 0), and the cash-flow diagram.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {FrameSvg, LoanBalanceBar, SceneHeading, SvgPlate, smooth, usePlatePreload} from '../../math/studio';
import {K1, K2, K3, K4, K5} from './cuemap';
import {F11FinalFrame} from '../math-a12-f11/s3';
import {ANSR, BROWN, BoxCard, CARD, CashStrip, Calendar, Chip, FLAT, GREY, Hand, IN, INTR, OUT, Row, SAVE, c2, fundRows, plateW} from './parts';
import type {StripTab} from './parts';

export const lin = (fr: number, a: number, b: number) => Math.max(0, Math.min(1, (fr - a) / (b - a)));
const TXT = (size: number, fill: string, hand = false): React.CSSProperties => ({fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontWeight: hand ? 700 : 800, fontSize: size, fill} as React.CSSProperties);
const SB = (i: number) => (i === 0 ? 0 : SAVE[i - 1].closing);
const FB = (i: number) => (i === 0 ? 100000 : fundRows[i - 1].close);

// ---------- f11's handoff frame (a stand-in built from f11's design scene 13 until f11 exports its final frame) ----------
/** Apartment building with a dashed "goal" tag. */
export const Flat: React.FC<{x: number; y: number; h: number; glow?: number}> = ({x, y, h, glow = 0}) => {
	usePlatePreload([FLAT.src]);
	const w = plateW(FLAT, h);
	return <FrameSvg>
		<SvgPlate plate={FLAT} x={x} y={y} w={w} />
		<g><rect x={x + w * 0.55} y={y - 10} width={110} height={52} rx={12} fill={glow > 0.01 ? '#e3eefa' : CARD} stroke={INK} strokeWidth={4} strokeDasharray="10 7" /><text x={x + w * 0.55 + 55} y={y + 26} textAnchor="middle" style={TXT(30, INK)}>goal</text></g>
	</FrameSvg>;
};
const SAVE_TABS = (n: number, extraQ = true): StripTab[] => [...Array.from({length: n + 1}, (_, i) => ({label: i === 0 ? 't = 0' : `month ${i}`, value: SB(i), text: i === 0 ? '$0' : c2(SB(i))})), ...(extraQ ? [{label: '5 years', unknown: true}] : [])];
/** f11's final frame laid out with this lesson's parts (the same geometry), drawn under F11FinalFrame as it fades. */
export const F11OpeningBoard: React.FC = () => <>
	<Calendar x={60} y={300} h={520} month="Month 4" stamps={[{text: '+$200', tone: 'deposit', at: -30}]} />
	<Flat x={1420} y={340} h={480} />
	<CashStrip x={595} base={780} pitch={150} barW={100} unit={0.34} labelSize={30} valueSize={28} tabs={SAVE_TABS(4)}
		arrows={[1, 2, 3, 4].map(i => ({i, text: '', dir: 'in' as const, at: -30}))} arcs={[1, 2, 3].map(i => ({from: i, to: i + 1, at: -30}))} />
	<Hand x={600} y={830} at={-30} size={36} color={IN.ink}>+$200 at each month end</Hand>
</>;

// ---------- 1. hook: two accounts that look opposite ----------
const FUND_TABS = (n: number): StripTab[] => Array.from({length: n + 1}, (_, i) => ({label: i === 0 ? 'start' : `month ${i}`, value: FB(i), text: i === 0 ? '$100,000' : c2(FB(i)), at: i === 0 ? -30 : K1.hundred + 40 + i * 50}));
export const Twin: React.FC<{fundAt?: number; tagS?: string; tagF?: string; glowArrows?: number; marks?: number; arcGlow?: number; arcsAt?: number; o?: number}> = ({fundAt = -30, tagS = 'apartment savings', tagF = 'fund', glowArrows = 0, marks = 0, arcGlow = 0, arcsAt = -30, o = 1}) => {
	const fr = useCurrentFrame();
	if (o <= 0.001) return null;
	const nF = 3;
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<CashStrip x={150} base={880} pitch={170} barW={100} unit={0.27} labelSize={28} valueSize={28} tabs={SAVE_TABS(4, false)} marks={marks}
			arrows={[1, 2, 3, 4].map(i => ({i, text: '', dir: 'in' as const, at: -30, glow: glowArrows}))} arcs={[{from: 2, to: 3, at: arcsAt, glow: arcGlow}]} />
		<CashStrip x={1110} base={880} pitch={225} barW={110} unit={0.044} from={95000} labelSize={28} valueSize={28} tabs={FUND_TABS(nF).map(t => ({...t, at: fundAt < 0 ? -30 : t.at}))} marks={marks}
			arrows={[1, 2, 3].map(i => ({i, text: '', dir: 'out' as const, at: fundAt < 0 ? -30 : K1.hundred + 70 + i * 50, glow: glowArrows}))} arcs={[{from: 1, to: 2, at: arcsAt, glow: arcGlow}]} />
		<FrameSvg><line x1={1010} x2={1010} y1={560} y2={960} stroke="#e4dccd" strokeWidth={3} /></FrameSvg>
		<Hand x={110} y={470} at={-30} size={40} color={IN.ink}>{tagS}</Hand>
		<Hand x={110} y={518} at={-30} size={34} color={IN.ink}>+$200 at each month end</Hand>
		<Hand x={1060} y={470} at={fundAt} size={40} color={OUT.ink}>{tagF}</Hand>
		<Hand x={1060} y={518} at={fundAt} size={34} color={OUT.ink}>−$1,050.91 at each month end</Hand>
		{fr < 0 ? null : null}
	</div>;
};
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const sw = prog(fr, k.now - 6, 18);
	const open = 1 - prog(fr, 14, 14);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><F11OpeningBoard /></div> : null}
			{open > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: open}}><F11FinalFrame /></div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<Calendar x={60} y={160} h={290} month="Month 4" stamps={[{text: '+$200', tone: 'deposit', at: -30}]} />
				<Flat x={380} y={200} h={250} glow={1} />
				<Twin fundAt={k.hundred} />
				<BoxCard x={1060} y={160} w={820} at={k.hundred} size={38} title="a second account"><div style={{fontWeight: 800}}>$100,000 in a fund; <span style={{color: OUT.ink}}>$1,050.91 out</span> at the end of every month</div></BoxCard>
				<FrameSvg style={{opacity: prog(fr, k.same, 12)}}><path d={`M700,${440} v-20 H1830 v20`} stroke={INK} strokeWidth={4} fill="none" /><text x={1265} y={406} textAnchor="middle" style={TXT(44, INK, true)}>the same kind of thing?</text></FrameSvg>
				<Chip x={1260} y={84} at={k.what} size={42} color={BROWN}>What do they share?</Chip>
			</div> : null}
			<SceneHeading text="What cash flows define an annuity?" at={4} size={48} />
			{fr < k.now ? <FrameSvg style={{opacity: prog(fr, k.towards, 12) * (1 - sw)}}><rect x={1420 + plateW(FLAT, 480) * 0.55 - 6} y={324} width={122} height={64} rx={14} fill="none" stroke={IN.stroke} strokeWidth={5} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. what makes an annuity ----------
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const g = (a: number, b: number) => prog(fr, a, 10) * (1 - prog(fr, b, 12));
	const kind1 = fr >= k.first, kind2 = fr >= k.withd;
	const capU = smooth(lin(fr, k.means, k.means + 40)), cap2 = smooth(lin(fr, k.means + 70, k.means + 110));
	const checks = [{t: '✓ same size (equal payments)', at: k.same}, {t: '✓ same gap (regular, at the end of each period)', at: k.same + 26}, {t: '✓ interest compounding every period, at one rate', at: k.same + 52}];
	return (
		<>
			<SceneHeading text="What makes an annuity" at={4} size={52} />
			<Calendar x={60} y={160} h={290} month="Month 4" stamps={[{text: '+$200', tone: 'deposit', at: -30}]} />
			<Twin tagS={kind1 ? 'kind 1: equal deposits in' : 'apartment savings'} tagF={kind2 ? 'kind 2: one sum, equal withdrawals out' : 'fund'} glowArrows={g(k.equal, k.regular)} marks={g(k.regular, k.comp + 10)} arcsAt={k.comp} arcGlow={g(k.comp, k.means)} />
			<Hand x={330} y={190} at={k.equal} out={k.regular} size={44} color={IN.ink}>equal</Hand>
			<Hand x={330} y={190} at={k.regular} out={k.comp} size={44} color={INK}>regular</Hand>
			<Hand x={330} y={190} at={k.comp} out={k.means} size={44} color={INTR.ink}>interest every period</Hand>
			{fr < k.same ? <div style={{opacity: prog(fr, k.means, 12) * (1 - prog(fr, k.same - 12, 12))}}>
				<FrameSvg>
					<rect x={1180} y={400 - 401 * 0.5} width={140} height={401 * 0.5} fill="#ebe4d6" stroke={INK} strokeWidth={4} />
					<rect x={1180} y={400 - 401 * 0.5 - 22 * capU} width={140} height={22 * capU} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={3} />
					<rect x={1180} y={400 - 401 * 0.5 - 22 - 24 * cap2} width={140} height={24 * cap2} fill={INTR.soft} stroke={INTR.stroke} strokeWidth={3} opacity={cap2 > 0.01 ? 1 : 0} />
					<line x1={1140} x2={1360} y1={400} y2={400} stroke={INK} strokeWidth={4} />
					<text x={1250} y={440} textAnchor="middle" style={TXT(32, INK)}>$401.00</text>
					<text x={1340} y={400 - 401 * 0.5 - 6} style={TXT(32, INTR.ink)} opacity={capU}>+$2.01</text>
				</FrameSvg>
				<Hand x={1380} y={250} at={k.means + 60} size={42} color={INTR.ink} w={480}>interest earns interest</Hand>
				<Hand x={1380} y={330} at={k.means + 70} size={32} color={GREY} w={480}>next month's interest is on the old interest too</Hand>
			</div> : null}
			<BoxCard x={1060} y={160} w={820} at={k.same} size={32} title="an annuity">
				{checks.map((c, i) => <div key={i} style={{fontWeight: 800, color: ANSR.ink, opacity: prog(fr, c.at, 10)}}>{c.t}</div>)}
				<div style={{fontWeight: 700, fontSize: 28, color: GREY, opacity: prog(fr, k.pattern, 10)}}>M: the payment each period (some books write a)</div>
			</BoxCard>
		</>
	);
};

// ---------- 3. what isn't an annuity ----------
/** A mini cash-flow card: one bar at 0 (lump), arrows of given sizes at given positions (blue in), optional arcs. */
export const MiniFlow: React.FC<{x: number; y: number; w: number; h: number; title: string; lump?: string; arrows?: readonly {t: number; size: number; text?: string}[]; arcs?: boolean; outs?: readonly number[]; ticks?: number; o?: number}> = ({x, y, w, h, title, lump, arrows = [], arcs = false, outs = [], ticks = 4, o = 1}) => {
	if (o <= 0.001) return null;
	const base = y + h - 40, X = (t: number) => x + 40 + (t / ticks) * (w - 80);
	return <div style={{position: 'absolute', inset: 0, opacity: o}}>
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, background: CARD, borderRadius: 16, boxShadow: '0 10px 24px rgba(60,45,20,0.10)', border: '2.5px solid rgba(60,45,20,0.12)'}} />
		<FrameSvg>
			<text x={x + 18} y={y + 38} style={TXT(30, INK)}>{title}</text>
			<line x1={x + 30} x2={x + w - 30} y1={base} y2={base} stroke={INK} strokeWidth={3} />
			{Array.from({length: ticks + 1}, (_, i) => <line key={i} x1={X(i)} x2={X(i)} y1={base - 8} y2={base + 8} stroke={INK_SOFT} strokeWidth={3} />)}
			{lump ? <g><rect x={X(0) - 18} y={base - 70} width={36} height={70} fill="#ebe4d6" stroke={INK} strokeWidth={3} /><text x={X(0) - 18} y={base + 32} style={TXT(28, INK)}>{lump}</text></g> : null}
			{arcs ? Array.from({length: ticks}, (_, i) => <path key={'a' + i} d={`M${X(i) + 8},${base - 62} Q${(X(i) + X(i + 1)) / 2},${base - 88} ${X(i + 1) - 8},${base - 62}`} stroke={INTR.stroke} strokeWidth={3.5} fill="none" />) : null}
			{arrows.map((a, i) => <g key={'r' + i}><line x1={X(a.t)} x2={X(a.t)} y1={base - 10 - a.size} y2={base - 10} stroke={IN.stroke} strokeWidth={5} /><path d={`M${X(a.t) - 9},${base - 22} L${X(a.t)},${base - 10} L${X(a.t) + 9},${base - 22}`} stroke={IN.stroke} strokeWidth={5} fill="none" />{a.text ? <text x={X(a.t)} y={base - 18 - a.size} textAnchor="middle" style={TXT(26, IN.ink)}>{a.text}</text> : null}</g>)}
			{outs.map((t, i) => <g key={'o' + i}><line x1={X(t)} x2={X(t)} y1={base - 64} y2={base - 12} stroke={OUT.stroke} strokeWidth={5} /><path d={`M${X(t) - 9},${base - 52} L${X(t)},${base - 64} L${X(t) + 9},${base - 52}`} stroke={OUT.stroke} strokeWidth={5} fill="none" /></g>)}
		</FrameSvg>
	</div>;
};
const BIN = {y: 560, h: 390, w: 860};
const slot = (bin: 0 | 1, j: number) => ({x: bin === 0 ? 300 : 980 + j * 295, y: BIN.y + 100});
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const cards = [
		{title: '$2,000 once', lump: '$2,000', arcs: true, in: -30, go: k.deposits - 30, tagAt: k.isnt, bin: 1 as const, j: 0, tag: 'no regular payments: compound interest'},
		{title: '$50, $80, $110', arrows: [{t: 1, size: 28}, {t: 2, size: 42}, {t: 3, size: 56}], in: k.deposits, go: k.putting - 30, tagAt: k.either, bin: 1 as const, j: 1, tag: 'not equal'},
		{title: 'spare cash', arrows: [{t: 0.6, size: 40}, {t: 1.4, size: 40}, {t: 3.5, size: 40}], in: k.putting, go: k.but - 30, tagAt: k.regular, bin: 1 as const, j: 2, tag: 'not regular'},
		{title: '$200 each quarter', arrows: [1, 2, 3, 4].map(t => ({t, size: 44})), arcs: true, in: k.but, go: k.is2, tagAt: k.is2, bin: 0 as const, j: 0, tag: 'an annuity'},
	];
	const W = 280, H = 170;
	return (
		<>
			<SceneHeading text="What isn't an annuity?" at={4} size={52} />
			<div style={{position: 'absolute', left: 96, top: BIN.y, width: 760, height: BIN.h, border: `5px solid ${ANSR.stroke}`, borderRadius: 24, boxSizing: 'border-box'}} />
			<div style={{position: 'absolute', left: 960, top: BIN.y, width: 900, height: BIN.h, border: `5px solid ${GREY}`, borderRadius: 24, boxSizing: 'border-box'}} />
			<Hand x={120} y={BIN.y + 10} at={-30} size={36} color={ANSR.ink} w={720}>annuity: same size, same gap, interest every period</Hand>
			<Hand x={984} y={BIN.y + 10} at={-30} size={36} color={GREY} w={860}>not an annuity: one of the three fails</Hand>
			{[slot(0, 0), slot(1, 0), slot(1, 1), slot(1, 2)].map((s, i) => <div key={'o' + i} style={{position: 'absolute', left: s.x, top: s.y, width: W, height: H, borderRadius: 16, border: '3px dashed rgba(95,87,76,0.45)', boxSizing: 'border-box'}} />)}
			<BoxCard x={1300} y={170} w={580} at={-30} size={32} title="check all three">
				<div style={{fontWeight: 800, color: fr >= k.is2 ? ANSR.ink : INK}}>✓ same size</div>
				<div style={{fontWeight: 800, color: fr >= k.is2 ? ANSR.ink : INK}}>✓ same gap</div>
				<div style={{fontWeight: 800, color: fr >= k.is2 ? ANSR.ink : INK}}>✓ interest every period</div>
			</BoxCard>
			{cards.map((c, i) => {
				const u = smooth(lin(fr, c.go, c.go + 24)), s = slot(c.bin, c.j), sc = 1.55 - 0.55 * u;
				const x = 560 + (s.x - 560) * u, y = 180 + (s.y - 180) * u;
				const o = prog(fr, c.in, 12);
				return o > 0.001 ? <div key={i} style={{position: 'absolute', inset: 0, opacity: o, transform: `translate(${x}px, ${y}px) scale(${sc})`, transformOrigin: '0 0'}}>
					<MiniFlow x={0} y={0} w={W} h={H} title={c.title} lump={c.lump} arrows={c.arrows} arcs={c.arcs} />
					<div style={{position: 'absolute', left: 0, top: H + 6, width: W, opacity: prog(fr, c.tagAt, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, color: c.bin === 0 ? ANSR.ink : GREY, lineHeight: 1.05}}>{c.tag}</div>
				</div> : null;
			})}
			<Hand x={1120} y={350} at={k.guess} out={k.isnt} size={40} color={GREY}>make a guess</Hand>
		</>
	);
};

// ---------- 4. inside one period: the apartment savings ----------
const monthT = (fr: number) => {const k = K4; return fr < k.m1 ? 0 : fr < k.m2 ? lin(fr, k.m1, k.just + 10) : fr < k.m3 ? 1 + lin(fr, k.m2, k.giving + 10) : 2 + lin(fr, k.m3, k.cent + 6);};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const t = monthT(fr), mth = Math.min(3, Math.floor(t) + (t % 1 > 0 ? 1 : 0) || 1);
	const st = (m: number) => (m === 1 ? [k.m1 + 30, k.just] : m === 2 ? [k.earns, k.giving - 10] : [k.m3 + 20, k.cent - 30]);
	const [ia, da] = st(mth);
	const intText = ['+$0.00', '+$1.00', '+$2.01'][mth - 1];
	const rows = [1, 2, 3].map(m => ({m, at: st(m)[1] + 10, start: m === 1 ? 0 : SAVE[m - 2].closing, int: SAVE[m - 1].interest, end: SAVE[m - 1].closing}));
	const ring = prog(fr, k.first, 12);
	return (
		<>
			<SceneHeading text="Inside one period: the apartment savings" at={4} size={52} />
			<Calendar x={60} y={160} h={720} month={`Month ${mth}`} days stamps={[{text: intText, tone: 'interest', at: ia, dx: -40, dy: -24}, {text: '+$200', tone: 'deposit', at: da, dx: 40, dy: 28}]} ring={ring} />
			<LoanBalanceBar x={720} y={260} width={150} height={600} max={700} P={0} r={0.005} M={200} t={Math.min(3, t)} mode="deposit" label="balance" capText="interest" biteText="+$200" />
			<BoxCard x={1030} y={160} w={850} at={-30} size={38} title="givens">
				<div style={{fontWeight: 800, color: IN.ink}}>deposit M = $200 at the end of each month</div>
				<div style={{fontWeight: 800, color: INTR.ink}}>6% p.a., monthly: r = 0.06 ÷ 12 = 0.005</div>
				<div style={{fontWeight: 800}}>start A₀ = $0</div>
			</BoxCard>
			<div style={{position: 'absolute', left: 1030, top: 400, width: 850, fontFamily: FONT_DISPLAY, fontSize: 32, background: CARD, borderRadius: 16, padding: '8px 16px', boxSizing: 'border-box', boxShadow: '0 10px 24px rgba(60,45,20,0.08)'}}>
				<div style={{display: 'grid', gridTemplateColumns: '130px 1fr 1fr 1fr 1fr', fontWeight: 800, fontSize: 26, color: INK_SOFT, letterSpacing: 1}}><span>MONTH</span><span>START</span><span>INTEREST</span><span>DEPOSIT</span><span>END</span></div>
				{rows.map(r => <div key={r.m} style={{display: 'grid', gridTemplateColumns: '130px 1fr 1fr 1fr 1fr', fontWeight: 800, opacity: prog(fr, r.at, 10), fontVariantNumeric: 'tabular-nums', padding: '4px 0'}}>
					<span>{r.m}</span><span>{c2(r.start)}</span><span style={{color: INTR.ink, outline: r.m === 1 && ring > 0.5 ? `4px solid ${INTR.stroke}` : undefined, borderRadius: 8, width: 'fit-content', padding: '0 6px'}}>{c2(r.int)}</span><span style={{color: IN.ink}}>{c2(200)}</span><span>{c2(r.end)}</span>
				</div>)}
			</div>
			<Hand x={1030} y={630} at={k.cent} size={32} color={GREY} w={850}>rounded to the cent; the full value 603.005 is carried</Hand>
			<Row x={1030} y={700} at={k.next} size={52}>A<sub>n+1</sub> = <span style={{color: INTR.ink}}>(1 + r)</span>A<sub>n</sub> <span style={{color: IN.ink}}>+ M</span>,  A<sub>0</sub> = 0</Row>
			<Hand x={1030} y={790} at={k.next + 30} size={34} color={GREY}>Aₙ: the balance straight after the nth deposit</Hand>
			<Hand x={1030} y={846} at={k.plus} size={42} color={INTR.ink}>interest first, then the deposit</Hand>
			<Hand x={1030} y={906} at={k.first} size={42} color={IN.ink}>deposit 1 earns nothing in month 1</Hand>
		</>
	);
};

// ---------- 5. the cash-flow diagram ----------
const TL = {x0: 240, x1: 1720, y: 700};
const MARKS = ['0', '1', '2', '3', '⋯', 'n − 1', 'n'];
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const X = (i: number) => TL.x0 + (i / 6) * (TL.x1 - TL.x0);
	const arrAt = [0, k.each, k.each + 6, k.each + 12, 0, k.each + 18, k.each + 24];
	const pulse = (a: number) => Math.max(0, 1 - Math.abs(fr - a - 8) / 14);
	const said = [0, k.one, k.two, k.three, 0, k.upto, k.upto + 10];
	const glowN = prog(fr, k.last, 12);
	return (
		<>
			<SceneHeading text="The cash-flow diagram" at={4} size={52} />
			<Calendar x={60} y={160} h={230} month="Month 3" />
			<Hand x={60} y={400} at={-30} size={30} color={IN.ink} w={170}>apartment savings</Hand>
			<CashStrip x={86} base={560} pitch={52} barW={38} unit={0.15} labelSize={26} tabs={[1, 2, 3].map(i => ({label: `A${'₁₂₃'[i - 1]}`, value: SB(i)}))} />
			<BoxCard x={420} y={160} w={760} at={-30} out={k.each - 6} size={40} title="the apartment savings on a time line"><div>One mark per month end. Each arrow will be one $200 deposit.</div></BoxCard>
			<BoxCard x={1280} y={160} w={600} at={-30} size={36} title="the apartment savings so far">
				<div style={{fontWeight: 800, whiteSpace: 'pre'}}>A₁ = $200.00   A₂ = $401.00</div>
				<div style={{fontWeight: 800, whiteSpace: 'pre'}}>A₃ = $603.01</div>
			</BoxCard>
			<FrameSvg>
				<line x1={TL.x0 - 60} x2={TL.x1 + 60} y1={TL.y} y2={TL.y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
				{MARKS.map((m, i) => <g key={i}>{m !== '⋯' ? <line x1={X(i)} x2={X(i)} y1={TL.y - 16} y2={TL.y + 16} stroke={INK} strokeWidth={4} /> : null}<text x={X(i)} y={TL.y + 64} textAnchor="middle" style={TXT(m === '⋯' ? 48 : 40, INK)}>{m}</text></g>)}
				<circle cx={X(0)} cy={TL.y} r={20} fill={CARD} stroke={INK} strokeWidth={4} opacity={prog(fr, k.zero, 10)} />
				{arrAt.map((a, i) => (i === 0 || i === 4 ? null : <g key={'a' + i} opacity={prog(fr, a, 10)}>
					<line x1={X(i)} x2={X(i)} y1={TL.y - 270} y2={TL.y - 26} stroke={IN.stroke} strokeWidth={8 + (i === 6 ? 5 * glowN : 0) + 5 * pulse(said[i])} strokeLinecap="round" />
					<path d={`M${X(i) - 16},${TL.y - 46} L${X(i)},${TL.y - 26} L${X(i) + 16},${TL.y - 46}`} fill="none" stroke={IN.stroke} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
					<text x={X(i)} y={TL.y - 286} textAnchor="middle" style={TXT(40, IN.ink)}>$200</text>
				</g>))}
				<g opacity={prog(fr, k.deps, 12)}><path d={`M${X(1)},${TL.y + 96} v16 H${X(6)} v-16`} stroke={IN.stroke} strokeWidth={5} fill="none" /><text x={(X(1) + X(6)) / 2} y={TL.y + 160} textAnchor="middle" style={TXT(42, IN.ink)}>n deposits</text></g>
				<g opacity={prog(fr, k.future, 12)}><line x1={X(6) + 60} x2={X(6) + 60} y1={TL.y} y2={TL.y - 300} stroke={INK} strokeWidth={5} /><path d={`M${X(6) + 60},${TL.y - 300} h110 l-18,26 l18,26 h-110 z`} fill={CARD} stroke={INK} strokeWidth={4} /><text x={X(6) + 112} y={TL.y - 263} textAnchor="middle" style={TXT(30, INK)}>FV</text></g>
			</FrameSvg>
			<Hand x={TL.x0 - 70} y={TL.y + 100} at={k.each} size={40} color={GREY}>no deposit at 0</Hand>
			<Hand x={1300} y={910} at={k.future + 10} size={36} color={INK} w={560}>future value: the balance at time n, just after deposit n</Hand>
			<Hand x={420} y={915} at={k.last} size={38} color={GREY} w={600}>deposit n: no interest yet</Hand>
			<Hand x={560} y={190} at={k.each} size={40} color={IN.ink}>one deposit at the end of each period</Hand>
		</>
	);
};
export {ANSR, OUT};
