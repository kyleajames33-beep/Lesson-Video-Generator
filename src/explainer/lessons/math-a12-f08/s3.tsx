// Scenes 9 to 14: attempt 1 (a $120 concert ticket rising 4% a year: the price after 5 years) and its brief feedback
// ($146.00; crossed: $140.38, the power 4), attempt 2 (a mine's output falling 5% a year: the amount its total never
// passes) and its brief feedback (1 600 000 t; crossed: 84 211 t, r taken as 0.05), the handoff (a $30,000 loan:
// ×1.006, then −$600 to "?": f09's opening frame, exported as F08FinalFrame) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, prog} from '../../kit';
import {FrameSvg, GivensStrip, KeyNotesBullets, MistakeCard, Pow, QuestionCard, SceneHeading, SvgPlate, usePlatePreload} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14} from './cuemap';
import {dur, hold} from './common';
import {AidBoard} from './s2';
import {Town} from './s1';
import {AMBER, AnswerBox, BLUE, BROWN, BoxCard, Chip, Frac, FramedCard, Hand, POS, QStrip, Row, Sb, TEAL, TEAL_SOFT, TICKET, TabStrip, mineS, ticket} from './parts';
import {LoanStrip} from '../math-a12-f09/parts';

const GREY = '#5f574c';
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={500} w={640} at={6} size={42} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		{picture}
		<QuestionCard at={0} size={44} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);
const yrs = (i: number) => (i === 0 ? 't = 0' : String(i));

// ---------- 9. attempt 1 ----------
const TicketStrip: React.FC<{filled: boolean; arcsAt?: number; at?: number; big?: boolean}> = ({filled, arcsAt = 1e9, big = false}) => {const fr = useCurrentFrame(); return (
	<TabStrip x={big ? 1010 : 880} base={big ? 900 : 880} pitch={big ? 150 : 130} barW={big ? 108 : 96} unit={big ? 1.7 : 1.3} labelSize={30} valueSize={30} arcSize={30} lineEnd={big ? 1820 : 1600}
		tabs={[0, 1, 2, 3, 4, 5].map(i => (i === 0 || (filled && fr >= arcsAt + i * 14 + 8) ? {label: yrs(i), value: ticket(i), text: i === 0 ? '$120' : i === 5 ? '$146' : undefined, at: i === 0 ? -30 : arcsAt + i * 14 + 8} : {label: yrs(i), unknown: true, faint: true, at: -30}))}
		arcs={filled ? [0, 1, 2, 3, 4].map(i => ({from: i, to: i + 1, label: '×1.04', at: arcsAt + (i + 1) * 14, num: String(i + 1)})) : []} />
);};
export const S09: React.FC = () => {
	usePlatePreload([TICKET.src]);
	return (
		<Attempt id="scene-09" pauseAt={K9.pause} given={['$120 at t = 0 (this year)', 'rises 4% each year', 'price after 5 years, nearest cent']}
			picture={<>
				<FrameSvg><SvgPlate plate={TICKET} x={1010} y={470} w={330} /></FrameSvg>
				<TicketStrip filled={false} />
				<FrameSvg><text x={1612} y={922} textAnchor="start" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>years</text></FrameSvg>
			</>}>
			<div>A concert ticket costs $120 this year. Ticket prices rise by 4% each year. Find the price after 5 years, to the nearest cent.</div>
		</Attempt>
	);
};

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const k = K10;
	const fr = useCurrentFrame();
	usePlatePreload([TICKET.src]);
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A concert ticket costs ', {u: '$120 this year', at: k.start}, '. Ticket prices ', {u: 'rise by 4%', at: k.rising}, ' each year. Find the price ', {u: 'after 5 years', at: k.mult - 20}, ', to the nearest cent.']} />
			<GivensStrip x={96} y={290} size={36} maxW={900} items={[{content: 'A = $120 (t = 0)', role: 'a', at: k.start}, {content: 'r = 1.04', role: 'k', at: k.year}, {content: 't = 5', at: k.mult - 20}]} />
			<Row x={96} y={390} at={k.rising + 10} size={52} dim={prog(fr, k.one, 12)} small={42}><span style={{color: AMBER}}>r = 1 + 0.04 = 1.04</span></Row>
			<BoxCard x={96} y={490} w={760} at={-30} out={k.one - 8} size={40} title="plan">
				<div>Turn 4% into r, then count the multiplications from t = 0 to after 5 years.</div>
			</BoxCard>
			<Row x={96} y={490} at={k.one} size={52}>120 × 1.04<Pow>5</Pow> = 145.998…</Row>
			<AnswerBox x={96} y={590} at={k.dollars} size={56}>$146.00</AnswerBox>
			<Hand x={380} y={608} at={k.mult} size={40} color={GREY}>5 multiplications from t = 0</Hand>
			<MistakeCard x={96} y={720} w={720} at={k.wrong} size={46} wrong={<>120 × 1.04<Pow>4</Pow> = $140.38</>} caption="only 4 steps: the start is not a step" />
			<FrameSvg><SvgPlate plate={TICKET} x={1440} y={300} w={360} /></FrameSvg>
			<TicketStrip filled big arcsAt={k.mult - 30} />
		</>
	);
};

// ---------- 11. attempt 2 ----------
const MineStrip: React.FC<{x0?: number; shrinkAt?: number; fillAt?: number; lineAt?: number}> = ({x0 = 900, shrinkAt, fillAt, lineAt}) => {
	const fr = useCurrentFrame();
	const MINE = {x: x0, base: 880, pitch: 130, barW: 96, unit: 0.0024};
	const COL = {x: x0 + 550, w: 120, unit: 0.00026};
	const known = shrinkAt !== undefined;
	const fillN = fillAt === undefined ? 0 : 60 * smooth01(prog(fr, fillAt, 60));
	const h = fillN > 0 ? mineS(fillN) * COL.unit : 0;
	const lineY = MINE.base - 1600000 * COL.unit;
	return <>
		<TabStrip x={MINE.x} base={MINE.base} pitch={MINE.pitch} barW={MINE.barW} unit={MINE.unit} labelSize={30} valueSize={30} arcSize={30} lineEnd={COL.x + COL.w + 30}
			tabs={[1, 2, 3, 4].map(i => (i === 1 || (known && fr >= (shrinkAt ?? 0) + i * 10) ? {label: `year ${i}`, value: 80000 * 0.95 ** (i - 1), text: i === 1 ? '80 000 t' : undefined, at: i === 1 ? -30 : (shrinkAt ?? 0) + i * 10} : {label: `year ${i}`, unknown: true, faint: true, at: -30}))}
			arcs={known ? [0, 1, 2].map(i => ({from: i, to: i + 1, label: '×0.95', at: (shrinkAt ?? 0) + 6 + i * 10})) : []} />
		<FrameSvg>
			<text x={MINE.x + 4 * MINE.pitch - 30} y={MINE.base - 30} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: INK}}>…</text>
			<rect x={COL.x} y={MINE.base - 430} width={COL.w} height={430} rx={10} fill="none" stroke={TEAL} strokeWidth={4} strokeDasharray="12 8" />
			{h > 0 ? <rect x={COL.x} y={MINE.base - h} width={COL.w} height={h} rx={10} fill={TEAL_SOFT} stroke={TEAL} strokeWidth={4} /> : null}
			<text x={COL.x + COL.w / 2} y={MINE.base + 42} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: TEAL}}>total</text>
			{lineAt !== undefined ? <g opacity={prog(fr, lineAt, 12)}><line x1={COL.x - 40} x2={COL.x + COL.w + 30} y1={lineY} y2={lineY} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
				<text x={COL.x + COL.w + 30} y={lineY - 16} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}} stroke="#fffdf8" strokeWidth={7} paintOrder="stroke">1 600 000</text></g> : null}
		</FrameSvg>
	</>;
};
const smooth01 = (u: number) => 1 - (1 - u) ** 3;
export const S11: React.FC = () => (
	<Attempt id="scene-11" pauseAt={K11.pause} heading="Last one" given={['80 000 t in year 1', '5% less each year', 'the amount the total never passes']} picture={<MineStrip />}>
		<div>A new mine produces 80 000 tonnes of ore in its first year. Each year after that, it produces 5% less than the year before. Its total output can never pass a certain amount. Find that amount.</div>
	</Attempt>
);

// ---------- 12. feedback 2 ----------
export const S12: React.FC = () => {
	const k = K12;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QStrip parts={['A new mine produces 80 000 tonnes of ore in its ', {u: 'first year', at: k.first}, '. Each year after that, it produces ', {u: '5% less', at: k.five}, ' than the year before. Its total output can ', {u: 'never pass', at: k.lim}, ' a certain amount. Find that amount.']} />
			<GivensStrip x={96} y={300} size={36} maxW={1728} items={[{content: 'a = 80 000 t (year 1)', role: 'a', at: k.a - 20}, {content: '5% less each year', role: 'k', at: k.five}, {content: 'amount never passed', at: k.lim}]} />
			<BoxCard x={96} y={380} w={900} at={-30} out={k.r95 - 26} size={40} title="plan">
				<div>Find r: the fraction of each year's output that is kept.</div>
				<div style={{marginTop: 10}}>Check |r| &lt; 1, then use S<Sb>∞</Sb> = a ÷ (1 − r).</div>
			</BoxCard>
			<Row x={96} y={380} at={k.r95 - 20} size={52} dim={prog(fr, k.since, 12)} small={42}><span style={{color: AMBER}}>r = 1 − 0.05 = 0.95</span></Row>
			<Row x={96} y={460} at={k.since} size={50} dim={prog(fr, k.lim, 12)} small={42}>|r| = 0.95 &lt; 1, so <span style={{color: TEAL}}>S<Sb>∞</Sb></span> exists</Row>
			<Row x={96} y={535} at={k.lim} size={50}><span style={{color: TEAL}}>S<Sb>∞</Sb></span> = <Frac n="80 000" d="1 − 0.95" /> = <Frac n="80 000" d="0.05" /></Row>
			<AnswerBox x={96} y={672} at={k.tonnes} size={50}>1 600 000 tonnes</AnswerBox>
			<MistakeCard x={96} y={780} w={900} at={k.about} size={44} wrong={<>80 000 ÷ (1 − 0.05) ≈ 84 211 t</>} caption="r is what's kept: 0.95" />
			<MineStrip x0={1110} shrinkAt={k.r95} fillAt={k.tonnes - 20} lineAt={k.tonnes} />
			<Hand x={1180} y={360} at={k.tonnes + 30} size={38} color={GREY} w={640}>every finite total stays below it</Hand>
		</>
	);
};

// ---------- 13. handoff: a car loan (f09's opening frame) ----------
/** f09's opening frame (its scene 1 opens on this strip): f09's LoanStrip with every part shown, and the two chips. */
const LoanBoard: React.FC<{show?: Partial<Record<'t0' | 'arc1' | 'bar1' | 'tag' | 'arc2' | 'q' | 'tab2', number>>; chip: number; q: number}> = ({show, chip, q}) => (
	<>
		<LoanStrip show={show} />
		<Chip x={1000} y={84} at={chip} size={44} color={BROWN}>Next: reducing-balance loans</Chip>
		<Chip x={1740} y={76} at={q} size={84} color={BROWN}>?</Chip>
	</>
);
/** f08's final frame, and f09's opening frame: $30,000 owed, ×1.006 to $30,180, −$600 to "?", "month 2: ?". */
export const F08FinalFrame: React.FC = () => <LoanBoard show={{tab2: 1}} chip={-300} q={-300} />;
export const S13: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K13;
	const sw = prog(fr, k.but - 8, 16);
	const o = (a: number) => prog(fr, a, 12);
	const low = sw * (1 - prog(fr, k.month - 24, 16));
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}><AidBoard x={260} y={170} /></div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}>
				<LoanBoard show={{t0: o(k.but), tag: o(k.grows + 10), arc1: o(k.oo6 - 14), bar1: o(k.oo6), arc2: o(k.rep - 10), q: o(k.rep + 4), tab2: o(k.what)}} chip={k.month} q={k.month + 14} />
			</div> : null}
			{low > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: low}}>
				<SceneHeading text="Multiplied, then something taken away" at={k.but - 8} size={52} />
				<BoxCard x={1220} y={250} w={660} at={k.but - 8} size={42} title="so far: a geometric model" edge={AMBER}>
					<div style={{fontWeight: 800, color: AMBER, whiteSpace: 'pre'}}>×r,  ×r,  ×r, …</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: GREY}}>the same ratio every period</div>
				</BoxCard>
				<BoxCard x={1220} y={480} w={660} at={k.car} size={42} title="a loan" edge={INK}>
					<div style={{fontWeight: 800, whiteSpace: 'pre'}}><span style={{color: AMBER}}>×1.006</span>, then <span style={{color: '#b8322a'}}>−$600</span>, then …</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: GREY}}>multiplied, then something taken away</div>
				</BoxCard>
				<Town x={96} y={720} w={720} houses={6} />
				<Hand x={860} y={830} at={k.but - 8} size={44} color={GREY} w={560}>the town: ×1.05 every year, nothing taken away</Hand>
			</div> : null}
		</>
	);
};

// ---------- 14. key notes ----------
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <>Grow p%: r = 1 + p/100. Fall p%: r = 1 − p/100.</>, at: 2},
		{content: <>Start A at t = 0: after t periods, A r<Pow>t</Pow>.</>, at: 6},
		{content: <>Check what time the first term is.</>, at: 10},
		{content: <>0 &lt; r &lt; 1: log r &lt; 0, so the inequality flips.</>, at: 14},
		{content: <>Positive terms, |r| &lt; 1: totals rise towards <span style={{color: TEAL}}>S<Sb>∞</Sb></span>, never past it.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-14')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K14.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: BROWN}}>pause to copy</div>
				<KeyNotesBullets x={96} y={250} w={1040} items={items} size={44} gap={60} />
				<FramedCard x={1180} y={196} w={700} h={680} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: POS}}>Memory aid</div>
					<Town x={1250} y={290} w={560} houses={6} />
					<div style={{position: 'absolute', left: 1220, top: 500, width: 630, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 64, lineHeight: 1.1, color: INK}}>Start, ratio, count.</div>
					<div style={{position: 'absolute', left: 1220, top: 600, width: 630, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, lineHeight: 1.25, color: INK}}>Find the start and the ratio, then count the multiplications from time zero.</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><F08FinalFrame /></div> : null}
		</>
	);
};
export {BLUE};
