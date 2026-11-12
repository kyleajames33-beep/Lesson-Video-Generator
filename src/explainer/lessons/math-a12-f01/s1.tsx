// Scenes 1 to 5: the hook (i14's final frame → the cricket scoreboard), position and value with the two-innings race,
// the rule 2n with finite and infinite lists, the over ticker with partial-sum stacks, and the series that never stops.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, HandText, INK, prog} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, LiveReadoutBoard, SceneHeading, StudioPlot, fnPath, smooth, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {I14FinalFrame} from '../math-a12-i14/s3';
import {K1, K2, K3, K4, K5} from './cuemap';
import {AMBER, AMBER_STROKE, BLUE, BROWN, BoxCard, Chip, Grass, Hand, Ladder, POS, RUNS, RUNS8, RollingBall, Row, Sb, Scoreboard, Stack, TEAL, TEAM_A, boardPanels, partials, sched, slotX} from './parts';

// ---------- 1. hook ----------
const x14 = (t: number) => t * t * t - 2 * t * t;
const PLOT = {x: 40, y: 190, w: 820, h: 780, win: {x: [-0.3, 4.5] as [number, number], y: [-5, 36] as [number, number]}};
const dot14 = (t: number, v: number): [number, number] => {
	const bx = PLOT.x + 84, bw = PLOT.w - 126, by = PLOT.y + 48, bh = PLOT.h - 120;
	return [bx + ((t - PLOT.win.x[0]) / (PLOT.win.x[1] - PLOT.win.x[0])) * bw, by + ((PLOT.win.y[1] - v) / (PLOT.win.y[1] - PLOT.win.y[0])) * bh];
};
const HOOK_VALS = [-1, 0, 9, 32];
const S1_BOARD = {x: 1060, y: 196, w: 740};
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const i14 = 1 - prog(fr, 26, 16);
	const mv = smooth(prog(fr, k.cricket, 26));
	const plotO = 1 - prog(fr, k.cricket, 14);
	const over = sched(fr, [[650, 1], [690, 2], [730, 3], [770, 4]], 0);
	const tot = [0, 2, 6, 12, 20][over];
	const rise = smooth(prog(fr, k.cricket + 4, 20));
	return (
		<>
			{plotO > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: plotO}}>
				<StudioPlot x={PLOT.x} y={PLOT.y} width={PLOT.w} height={PLOT.h} window={PLOT.win} xTicks={[1, 2, 3, 4]} yTicks={[9, 32]} xLabel="t (s)" yLabel="x (m), x = t³ − 2t²" at={-30} opacity={0.75}>
					{(mm: PlotMap) => <g clipPath={mm.clip}><path d={fnPath(mm, x14, 0, 4.3)} stroke={BLUE} strokeWidth={6} fill="none" opacity={0.6} /></g>}
				</StudioPlot>
				<FrameSvg>
					{HOOK_VALS.map((v, i) => {const [dx, dy] = dot14(i + 1, v); const pl = vis(fr, k.positions + i * 8, k.seq, 12); return <g key={i}>
						{pl > 0.01 ? <line x1={dx} y1={dy} x2={960 + i * 200} y2={430} stroke={BLUE} strokeWidth={3} strokeDasharray="8 8" opacity={0.7 * pl} /> : null}
						<circle cx={dx} cy={dy} r={12 + 6 * pl} fill={BLUE} stroke="#fffdf8" strokeWidth={4} />
					</g>;})}
				</FrameSvg>
				<div style={{position: 'absolute', left: 900, top: 480, opacity: 1 - prog(fr, k.seq - 10, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: POS}}>positions x (m) at t = 1, 2, 3, 4 s</div>
				{['1st', '2nd', '3rd', '4th'].map((s, i) => <div key={s} style={{position: 'absolute', left: 960 + i * 200, top: 238, transform: 'translateX(-50%)', opacity: vis(fr, k.fixed + i * 6, k.cricket - 4, 10), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: AMBER}}>{s}</div>)}
				<div style={{position: 'absolute', left: 900, top: 560, opacity: vis(fr, k.positions + 40, k.seq - 4, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, lineHeight: 1.35, color: INK}}>
					{HOOK_VALS.map((v, i) => <div key={i} style={{opacity: prog(fr, [279, 294, 317, 339][i], 10)}}><span style={{color: POS}}>at t = {i + 1} s:</span>  x = <span style={{color: BLUE}}>{v < 0 ? '−1' : v}</span> m</div>)}
				</div>
				<FrameSvg><g opacity={prog(fr, k.seq, 12)}><path d="M875,470 v18 H1845 v-18" stroke={INK} strokeWidth={4} fill="none" /></g></FrameSvg>
				<Hand x={1180} y={500} at={k.seq} size={46} color={INK}>an ordered list</Hand>
				<Chip x={900} y={610} at={k.seq + 10} size={46} color={BROWN}>{'sequence: a list of numbers\nin a fixed order'}</Chip>
			</div> : null}
			{HOOK_VALS.map((v, i) => {
				const p = smooth(prog(fr, 12 + i * 4, 16));
				const X = interpolate(mv, [0, 1], [960 + i * 200 - 85, 96 + i * 136]), Y = interpolate(mv, [0, 1], [300, 196]);
				const W = interpolate(mv, [0, 1], [170, 116]), Hh = interpolate(mv, [0, 1], [120, 84]), fs = interpolate(mv, [0, 1], [72, 46]);
				return <React.Fragment key={i}>
					<div style={{position: 'absolute', left: X, top: Y, width: W, height: Hh, opacity: p, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', background: CARD, borderRadius: 16, border: `4px solid ${BLUE}`, boxShadow: CARD_SHADOW, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs, color: BLUE}}>{v < 0 ? '−1' : v}</div>
					<div style={{position: 'absolute', left: X, top: Y + Hh + 6, width: W, textAlign: 'center', opacity: p, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: POS}}>t = {i + 1}</div>
				</React.Fragment>;
			})}
			<div style={{position: 'absolute', left: interpolate(mv, [0, 1], [1760, 96 + 4 * 136]), top: interpolate(mv, [0, 1], [318, 205]), opacity: prog(fr, 30, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: interpolate(mv, [0, 1], [72, 46]), color: BLUE}}>...</div>
			{i14 > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: i14}}><I14FinalFrame /></div> : null}
			<SceneHeading text="What are sequences, partial sums and summation notation?" at={10} size={48} />
			{fr >= k.cricket ? <>
				<Grass x={40} y={850} w={1840} h={66} at={k.cricket} />
				<div style={{position: 'absolute', inset: 0, transform: `translateY(${(1 - rise) * 90}px)`}}>
					<Scoreboard {...S1_BOARD} total={tot} over={over} flips={[650, 690, 730, 770]} at={k.cricket} />
				</div>
				<RollingBall starts={[622, 662, 702, 742]} x0={140} x1={1000} groundY={906} d={86} />
				<Hand x={96} y={340} at={k.board + 20} size={36} color={POS}>{'the total is read at the\nend of each over'}</Hand>
				<Row x={96} y={460} at={k.runs} size={46} color={BLUE}>runs each over: 2, 4, 6, 8</Row>
				<Row x={96} y={548} at={k.totals} size={46} color={TEAL}>scoreboard total: 2, 6, 12, 20</Row>
				<FrameSvg><g opacity={prog(fr, k.another, 12)}><path d="M800,470 h18 V600 h-18" stroke={INK} strokeWidth={4} fill="none" /></g></FrameSvg>
				<Hand x={836} y={510} at={k.another} size={44}>{'two\nsequences'}</Hand>
				<Chip x={96} y={660} at={k.so} size={44} color={BROWN}>{'What is a sequence?\nHow do we add its terms?'}</Chip>
			</> : null}
		</>
	);
};

// ---------- 2. position and value; the two-innings race ----------
const SB2 = {w: 540, y: 160};
const SBA = 120, SBB = 1060;
const LAD2 = {y: 676, cardW: 168, gap: 28};
const ladA = SBA - 24, ladB = SBB - 24;
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	// The race: both boards run over by over from "After four overs", then replay to over 1 on "But after the first".
	const race = (f: number) => (f < k.after4 ? 0 : f < k.but ? Math.min(4, 1 + Math.floor((f - k.after4) / 12)) : 1);
	const ov = race(fr);
	const totA = ov ? partials(TEAM_A)[ov - 1] : 0, totB = ov ? partials([7, 5, 3, 1])[ov - 1] : 0;
	const flips = [k.after4, k.after4 + 12, k.after4 + 24, k.after4 + 36, k.but];
	const defOut = k.say - 8;
	const tagsOut = k.after4 - 6;
	const ringO = prog(fr, k.showsSeven, 12);
	const RY = 846;
	return (
		<>
			<SceneHeading text="A sequence: position and value" at={4} size={52} />
			<Scoreboard x={SBA} y={SB2.y} w={SB2.w} team="Team A" total={totA} over={ov} flips={flips} ring={{o: ringO}} />
			<Scoreboard x={SBB} y={SB2.y} w={SB2.w} team="Team B" total={totB} over={ov} flips={flips} ring={{o: ringO}} />
			<BoxCard x={96} y={660} w={1728} at={0} out={defOut} size={44}>
				<div>A <b>sequence</b> is an ordered list of objects, usually numbers. Each object is a <b>term</b>.</div>
				<div style={{opacity: prog(fr, k.position, 12)}}>Every term has a <b>position</b>: first, second, third, …</div>
				<div style={{opacity: prog(fr, k.write, 12), marginTop: 6}}><span style={{color: BLUE, fontWeight: 800, fontSize: 52}}>aₙ</span>: the term in position n <span style={{color: POS, fontSize: 34}}>(also written Tₙ on the website and in many past papers)</span></div>
			</BoxCard>
			<Ladder x={ladA} y={LAD2.y} cardW={LAD2.cardW} gap={LAD2.gap} values={TEAM_A} dropAt={[k.say + 30, k.say + 42, k.say + 54, k.say + 66]} labels={i => `over n = ${i + 1}`} labelsAt={k.say} slots={4} slotsAt={k.say} glows={[{i: 2, at: k.five, out: k.now}, {i: 0, at: k.showsOne, out: k.matters}]} />
			<Ladder x={ladB} y={LAD2.y} cardW={LAD2.cardW} gap={LAD2.gap} values={TEAM_A} dropAt={k.now + 10} stagger={6} labels={i => `over n = ${i + 1}`} labelsAt={k.say} slots={4} slotsAt={k.say} reorder={{to: [3, 2, 1, 0], at: k.reverse + 10, dur: 40}} glows={[{i: 3, at: k.showsSeven, out: k.matters}]} />
			<Row x={ladA} y={RY} at={k.five} out={tagsOut} size={52} color={BLUE}>a₃ = 5</Row>
			<Hand x={ladA + 210} y={RY - 6} at={k.three} out={tagsOut} size={40} color={POS}>position: 3 (the third over)</Hand>
			<Hand x={ladA + 210} y={RY + 46} at={k.value} out={tagsOut} size={40} color={BLUE}>value: 5 (the runs)</Hand>
			<Hand x={ladB} y={RY + 6} at={k.reverse + 30} out={tagsOut} size={42} color={INK}>same runs, reverse order</Hand>
			{[{x: ladA, tot: partials(TEAM_A)}, {x: ladB, tot: partials([7, 5, 3, 1])}].map((r, j) => <div key={j} style={{position: 'absolute', left: r.x, top: RY, opacity: prog(fr, k.after4, 10), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: TEAL, whiteSpace: 'pre'}}>
				totals: {r.tot.map((t, i) => <span key={i} style={{opacity: fr >= k.after4 + i * 12 ? 1 : 0.15, background: fr >= k.showsOne && i === 0 ? 'rgba(220,234,247,0.9)' : undefined, borderRadius: 8, padding: '0 4px'}}>{t}{i < 3 ? ', ' : ''}</span>)}
			</div>)}
			<Hand x={ladA + 480} y={RY + 4} at={k.sixteen} out={k.but} size={42} color={TEAL}>same total (16)</Hand>
			<Hand x={ladA} y={RY + 76} at={k.showsSeven} out={k.matters - 4} size={42} color={BLUE}>after over 1: different</Hand>
			<Hand x={ladB} y={RY + 76} at={k.stay} size={42} color={POS}>positions stay, values move</Hand>
			<Chip x={ladA} y={RY + 64} at={k.matters} size={42} color={BROWN}>1, 3, 5, 7  ≠  7, 5, 3, 1</Chip>
		</>
	);
};

// ---------- 3. a rule, finite and infinite ----------
const SB3 = {x: 1270, y: 210, w: 570};
const L3 = {x: 96, y: 470, cardW: 168, gap: 26};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const drops = [k.two, k.four, k.six, k.eight, k.ten];
	const over = sched(fr, drops.map((d, i) => [d, i + 1] as const), 0);
	const tot = over ? partials(RUNS)[over - 1] : 0;
	const run = smooth(prog(fr, k.never + 20, 70));
	const vals = RUNS8.slice(0, 8);
	const sh = run * 3;
	const p = boardPanels(SB3.x, SB3.y, SB3.w);
	const subs = drops.map((d, i) => ({at: i ? d : k.n1, out: i < 4 ? drops[i + 1] : k.only, n: i + 1}));
	return (
		<>
			<SceneHeading text="A rule; finite and infinite" at={4} size={52} />
			<Grass x={1100} y={p.bottom - 34} w={780} h={60} />
			<Scoreboard {...SB3} total={tot} over={fr >= k.stops ? '5' : over} flips={drops} />
			<RollingBall starts={drops.map(d => d - 24)} x0={1130} x1={1830} groundY={p.bottom + 4} d={70} />
			<div style={{position: 'absolute', left: 96, top: 170, width: 290, height: 102, borderRadius: 20, boxShadow: `0 0 0 ${12 * vis(fr, k.only, k.find, 10)}px rgba(248,232,200,0.95)`}} />
			<Chip x={96} y={176} at={0} size={60} color={BLUE}>aₙ = 2n</Chip>
			<Hand x={410} y={186} at={0} size={42} color={POS}>{'rule: put in the position n,\nget the term aₙ'}</Hand>
			{subs.map((r, i) => <Row key={i} x={96} y={330} at={r.at} out={r.out} size={52}>a{'₁₂₃₄₅'[i]} = 2 × {r.n} = <span style={{color: BLUE}}>{2 * r.n}</span></Row>)}
			<Ladder x={L3.x} y={L3.y} cardW={L3.cardW} gap={L3.gap} values={vals} dropAt={[...drops, k.never + 30, k.never + 60, k.never + 90]} labels={i => `n = ${i + 1}`} slots={8} shift={sh} clip={[60, 1080]} endCap={{after: 4, at: k.stops + 20, out: k.never}} />
			<div style={{position: 'absolute', left: 1050, top: L3.y - 4, width: 80, height: 110, background: 'linear-gradient(90deg, rgba(246,241,231,0), rgba(246,241,231,1))', opacity: run}} />
			<div style={{position: 'absolute', left: 96, top: 680, opacity: 1 - prog(fr, k.n1, 12), display: 'flex', alignItems: 'center', gap: 22, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}}>
				<span style={{border: `4px solid ${POS}`, borderRadius: 16, padding: '4px 22px', color: POS, background: CARD}}>n</span>
				<span style={{color: AMBER, fontFamily: FONT_HAND, fontSize: 48}}>× 2 →</span>
				<span style={{border: `4px solid ${BLUE}`, borderRadius: 16, padding: '4px 22px', color: BLUE, background: CARD}}>aₙ</span>
				<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: POS, marginLeft: 12}}>position in, term out</span>
			</div>
			<Row x={96} y={690} at={k.find + 4} out={k.stops} size={52} color={INK}>a₅₀ = 2 × 50 = <span style={{color: BLUE}}>100</span></Row>
			<Hand x={640} y={696} at={k.hundred} out={k.stops} size={40} color={POS}>{'no need to list\na₆ to a₄₉'}</Hand>
			<Hand x={p.over.x + p.over.w + 14} y={p.over.y - 10} at={k.stops + 10} out={k.never} size={40} color={INK}>{'game\nover'}</Hand>
			<Row x={96} y={690} at={k.finite} out={k.never} size={52}>finite: last term a₅ <span style={{color: POS}}>(m = 5)</span></Row>
			<Hand x={96} y={772} at={k.ends} out={k.never} size={42} color={POS}>a finite sequence ends at some last term a<Sb>m</Sb></Hand>
			<Row x={96} y={690} at={k.forever} size={56} color={BLUE}>2, 4, 6, 8, 10, <span style={{color: AMBER, textShadow: `0 0 ${18 * vis(fr, k.dots, undefined, 10)}px rgba(209,143,31,0.8)`}}>…</span></Row>
			<Hand x={96} y={782} at={k.infinite} size={44} color={INK}>infinite: it never terminates</Hand>
		</>
	);
};

// ---------- 4 and 5. the over ticker: partial sums, then the series ----------
const ST = {x: 140, base: 880, blockW: 110, gap: 36, unit: 17};
const SB4 = {x: 1330, y: 330, w: 500};
const RB = {x: 900, y: 330, w: 380};
const TopRows: React.FC<{dotsAt?: number; tealAt?: number}> = ({dotsAt, tealAt}) => {
	const fr = useCurrentFrame();
	return <>
		<div style={{position: 'absolute', left: 96, top: 186, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: BLUE}}>aₙ</div>
		<Ladder x={160} y={170} cardW={100} h={70} gap={14} size={42} values={RUNS} dropAt={-30} />
		{dotsAt !== undefined ? <div style={{position: 'absolute', left: 160 + 5 * 114, top: 176, opacity: prog(fr, dotsAt, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 46, color: BLUE}}>…</div> : null}
		{tealAt !== undefined ? <>
			<div style={{position: 'absolute', left: 900, top: 186, opacity: prog(fr, tealAt, 12), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 40, color: TEAL}}>Sₙ</div>
			<Ladder x={964} y={170} cardW={100} h={70} gap={14} size={42} color={TEAL} values={partials(RUNS)} dropAt={tealAt} stagger={8} />
		</> : null}
	</>;
};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const builds = [k.two, k.six, k.twelve, k.twenty, k.thirty];
	const n = sched(fr, builds.map((b, i) => [b, i + 1] as const), 0);
	const runs = n ? RUNS[n - 1] : 0, tot = n ? partials(RUNS)[n - 1] : 0;
	const p = boardPanels(SB4.x, SB4.y, SB4.w);
	const diffAt = k.so + 20;
	return (
		<>
			<SceneHeading text="Partial sums: a running total" at={4} size={52} />
			<TopRows tealAt={k.newseq + 10} />
			<Stack {...ST} terms={RUNS} buildAt={builds} labelsAt={-30} pulse={[0, 1, 2, 3, 4].map(j => ({col: j, at: k.more - 30 + j * 10}))} diff={{upper: 4, lower: 3, at: diffAt}} />
			<Grass x={890} y={p.bottom - 34} w={990} h={60} />
			<Scoreboard {...SB4} total={tot} over={n} flips={builds} />
			<RollingBall starts={builds.map(b => b - 24)} x0={920} x1={1820} groundY={p.bottom + 4} d={70} />
			<LiveReadoutBoard x={RB.x} y={RB.y} width={RB.w} at={k.after1 - 10} out={k.general - 6} inline size={52} labelSize={30} rows={[
				{label: 'over n', value: n, digits: 0, role: 'inner'},
				{label: 'runs aₙ', value: runs, digits: 0, role: 'a'},
				{label: 'total Sₙ', value: tot, digits: 0, role: 'b'},
			]} />
			<Row x={RB.x} y={RB.y + 270} at={k.s2} out={k.general - 6} size={44} color={TEAL}>{n >= 2 ? 'S₂ = 2 + 4 = 6' : ''}</Row>
			<Row x={900} y={268} at={k.general} out={k.notice} size={44}><span style={{color: TEAL}}>Sₙ</span> = <span style={{color: BLUE}}>a₁ + a₂ + … + aₙ</span></Row>
			<Hand x={RB.x} y={RB.y + 10} at={k.general + 20} out={k.newseq} size={40} color={POS} w={400}>the sum of the first n terms</Hand>
			<Hand x={RB.x} y={RB.y + 120} at={k.running} out={k.newseq} size={48} color={TEAL} w={400}>the nth partial sum: a running total</Hand>
			<Hand x={RB.x} y={RB.y + 20} at={k.each} out={k.so} size={42} color={INK} w={400}>{'each total = the one before + one more over'}</Hand>
			<Row x={RB.x} y={RB.y + 10} at={k.so} size={48}><span style={{color: TEAL}}>S₅ − S₄</span></Row>
			<Row x={RB.x} y={RB.y + 80} at={k.so + 90} size={48}>= <span style={{color: BLUE}}>a₅</span>, the fifth over</Row>
			<Row x={RB.x} y={RB.y + 150} at={k.thirtyMinus} size={52} color={BLUE}>= 30 − 20 = 10</Row>
			<Hand x={900} y={p.bottom + 40} at={k.ten + 8} size={40} color={BLUE}>the jump on the scoreboard is the last over's runs</Hand>
		</>
	);
};
export const S05: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K5;
	const builds = [-60, -50, -40, -30, -20, k.steps + 30, k.steps + 70, k.steps + 100];
	const n = sched(fr, builds.map((b, i) => [b, i + 1] as const), 5);
	const tot = partials(RUNS8)[n - 1];
	const sq = smooth(prog(fr, k.steps, 26));
	const blockW = 110 - 40 * sq, gap = 36 - 16 * sq;
	const unit = ST.unit;
	const p = boardPanels(SB4.x, SB4.y, SB4.w);
	const blur = fr >= k.steps + 30 && fr < k.total;
	return (
		<>
			<SceneHeading text="Series: all the terms" at={-30} size={52} />
			<TopRows dotsAt={k.what + 6} tealAt={-60} />
			<Stack x={ST.x} base={ST.base} terms={RUNS8} buildAt={builds} blockW={blockW} gap={gap} unit={unit} labelsAt={-30} readoutSize={40} dim={j => (j < 5 ? prog(fr, k.steps, 16) : 0)} clipTop={250} />
			<Grass x={890} y={p.bottom - 34} w={990} h={60} />
			<Scoreboard {...SB4} total={fr >= k.total ? '…' : tot} over={fr >= k.total ? '…' : n} flips={[...builds.slice(5), k.total]} totalColor={blur ? '#cfe3d4' : undefined} />
			<RollingBall starts={builds.slice(5).map(b => b - 20)} x0={920} x1={1820} groundY={p.bottom + 4} d={70} />
			<Row x={900} y={268} at={k.a1} size={44}><span style={{opacity: prog(fr, k.series, 12)}}>series: </span><span style={{color: BLUE}}>a₁ + a₂ + a₃ + …</span></Row>
			<Hand x={900} y={350} at={k.series + 10} out={k.later - 4} size={40} color={POS} w={400}>the sum of all the terms of an infinite sequence</Hand>
			<Hand x={900} y={500} at={k.steps} out={k.later - 4} size={40} color={TEAL} w={400}>the partial sums are the steps on the way</Hand>
			<Hand x={900} y={p.bottom + 20} at={k.climbing} size={44} color={TEAL}>keeps climbing: no total</Hand>
			<Chip x={900} y={360} at={k.later} size={34} color={POS}>{'Later: which series\nsettle (limiting sums)'}</Chip>
			<Chip x={900} y={890} at={k.so + 10} size={44} color={TEAL}>Sₙ: the first n terms</Chip>
			<Chip x={1400} y={890} at={k.all} size={44} color={INK}>series: all of the terms</Chip>
		</>
	);
};
