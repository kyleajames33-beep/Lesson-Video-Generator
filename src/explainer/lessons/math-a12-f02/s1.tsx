// Scenes 1 to 4: the chair stack (f01's final frame, a fourth chair, the pull-back to the 2 m door and the 200 cm
// guess), the definition of an AP with three ladders, the nth term by counting steps (the stack runs to twenty chairs:
// 194 cm, and the guess's ghost 21st chair is crossed), and the heights as points on a straight line in n.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {DrawPath, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, FrameSvg, LiveReadoutBoard, SceneHeading, TermPlot, kf, smooth, vis} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {F01FinalFrame} from '../math-a12-f01/s3';
import {K1, K2, K3, K4} from './cuemap';
import {AMBER, AMBER_STROKE, AnswerBox, Arcs, BLUE, BROWN, BoxCard, ChairRig, Chip, GREEN, Hand, Ladder, POS, RED, Row, chairH, chairW, topY} from './parts';
import type {Rig} from './parts';

export const R0: Rig = {cx: 470, floor: 920, pxcm: 6, scaleX: 250, maxCm: 120, tick: 20};
export const R1: Rig = {cx: 430, floor: 930, pxcm: 3.2, scaleX: 230, maxCm: 220, tick: 40};
const rigAt = (u: number): Rig => ({cx: interpolate(u, [0, 1], [R0.cx, R1.cx]), floor: interpolate(u, [0, 1], [R0.floor, R1.floor]), pxcm: interpolate(u, [0, 1], [R0.pxcm, R1.pxcm]), scaleX: interpolate(u, [0, 1], [R0.scaleX, R1.scaleX]), maxCm: u < 0.5 ? 120 : 220, tick: u < 0.5 ? 20 : 40});
export const LAD = {x: 760, y: 240, cardW: 190, gap: 56};
const HEADING = 'How does a fixed difference determine an arithmetic sequence?';

/** The guess: a pencil-grey marker on the 2 m door line beside the stack, with a "?" badge. */
export const GuessMark: React.FC<{r: Rig; o: number; q?: number}> = ({r, o, q = 0}) => {
	if (o <= 0.01) return null;
	const y = r.floor - 200 * r.pxcm, x = r.cx + chairW(r.pxcm) / 2 + 24;
	return <FrameSvg style={{opacity: o}}>
		<rect x={x} y={y - 9} width={70} height={18} rx={9} fill="#b9b2a6" stroke={INK_SOFT} strokeWidth={3} />
		{q > 0.01 ? <g opacity={q}><circle cx={x + 104} cy={y} r={24} fill={CARD} stroke={RED} strokeWidth={4} /><text x={x + 104} y={y + 12} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: RED}}>?</text></g> : null}
	</FrameSvg>;
};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K1;
	const f01 = 1 - prog(fr, 22, 16);
	const pull = smooth(prog(fr, k.twenty - 6, 36));
	const r = rigAt(pull);
	const count = fr < k.every + 14 ? 3 : 3 + Math.min(1, (fr - k.every - 14) / 14);
	const lm = smooth(prog(fr, k.one - 10, 30));
	const lx = interpolate(lm, [0, 1], [980, LAD.x]), ly = interpolate(lm, [0, 1], [430, LAD.y]), lw = interpolate(lm, [0, 1], [200, LAD.cardW]), lg = interpolate(lm, [0, 1], [60, LAD.gap]);
	const door = prog(fr, k.twenty + 34, 14);
	const outline = vis(fr, k.twenty + 46, k.add, 12);
	const ox = r.cx - chairW(r.pxcm) / 2, ow = chairW(r.pxcm);
	return (
		<>
			<SceneHeading text={HEADING} at={40} size={46} />
			<ChairRig r={r} count={count} floorW={580} door={door} brackets={[0, 1, 2].map(i => ({i: i + 1, o: i < 2 ? 1 - pull : prog(fr, k.every + 30, 12) * (1 - pull)}))} tops={[1, 2, 3, 4].map(n => ({n, o: (n < 4 ? 1 : prog(fr, k.every + 30, 12)) * (1 - pull)}))} />
			<Hand x={680} y={topY(R0, 3) - 4} at={k.every + 30} out={k.twenty - 6} size={36} color={AMBER}>+6 cm each</Hand>
			{outline > 0.01 ? <FrameSvg style={{opacity: outline}}>
				<rect x={ox} y={r.floor - 206 * r.pxcm} width={ow} height={(206 - chairH(4)) * r.pxcm} rx={10} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="14 10" />
				<text x={r.cx} y={r.floor - 206 * r.pxcm - 16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 56, fill: INK}}>?</text>
			</FrameSvg> : null}
			<GuessMark r={r} o={prog(fr, k.gives, 12)} q={prog(fr, k.isit, 12)} />
			<Ladder x={lx} y={ly} cardW={lw} gap={lg} values={['80', '86', '92', '98']} dropAt={[-300, -300, -300, k.every + 30]} labels={i => (i < 3 || fr >= k.every + 30 ? `n = ${i + 1}` : '')} />
			<Arcs x={lx} y={ly} cardW={lw} gap={lg} arcs={[{from: 0, to: 1, label: '+6', at: -300}, {from: 1, to: 2, label: '+6', at: -300}, {from: 2, to: 3, label: '+6', at: k.every + 34}]} size={42} />
			<div style={{position: 'absolute', left: LAD.x, top: LAD.y + 150, width: 1000, opacity: prog(fr, k.twenty + 30, 12), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: POS}}>height of the stack (cm); n = number of chairs</div>
			<Chip x={980} y={700} at={-300} out={30} size={50} color={BROWN}>Next: the same step every time</Chip>
			<Chip x={980} y={820} at={-300} out={30} size={84} color={BROWN}>?</Chip>
			<Hand x={760} y={450} at={k.one} out={k.twenty - 10} size={44} color={INK} w={1000}>One chair: 80 cm tall. Every chair you add: 6 cm taller.</Hand>
			<LiveReadoutBoard x={1360} y={450} width={480} at={k.twenty + 30} inline size={52} labelSize={32} rows={[
				{label: 'chairs n', value: Math.round(count), digits: 0, role: 'inner'},
				{label: 'height (cm)', value: chairH(Math.round(count)), digits: 0, role: 'a'},
			]} />
			<Hand x={760} y={540} at={k.so} size={48} color={INK}>How tall is a stack of 20 chairs?</Hand>
			<Row x={760} y={650} at={k.add} size={52} color={POS}>guess: 80 + 20 × 6<span style={{opacity: prog(fr, k.gives, 12)}}> = 200 cm</span></Row>
			<Hand x={760} y={740} at={k.door} size={46} color={POS}>only just fits under a 2 m door?</Hand>
			<Chip x={760} y={830} at={k.isit} size={46} color={RED}>Is the guess right?</Chip>
		</>
	);
};

// ---------- 2. arithmetic sequences ----------
const LAD2 = {x: 760, y: 690, cardW: 150, gap: 46};
const LAD3 = {x: 760, y: 880, cardW: 150, gap: 46};
export const S02: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K2;
	const sub = [k.here, k.m2 - 16, k.six - 40];
	const glow = vis(fr, k.six, k.negative, 10);
	const out23 = k.test;
	return (
		<>
			<SceneHeading text="Arithmetic sequences" at={4} size={52} />
			<ChairRig r={R1} count={4} floorW={560} door={1} brackets={[0, 1, 2].map(i => ({i: i + 1, o: Math.max(prog(fr, sub[i], 10), 0)}))} />
			<GuessMark r={R1} o={1} q={1} />
			<Ladder x={LAD.x} y={LAD.y} cardW={LAD.cardW} gap={LAD.gap} values={['80', '86', '92', '98']} dropAt={-300} labels={i => `n = ${i + 1}`} glows={[1, 2, 3].map(i => ({i, at: k.six, out: k.negative}))} />
			<Arcs x={LAD.x} y={LAD.y} cardW={LAD.cardW} gap={LAD.gap} size={40} arcs={[
				...[0, 1, 2].map(i => ({from: i, to: i + 1, label: '+6', at: -300, out: sub[i] - 10})),
				...[0, 1, 2].map(i => ({from: i, to: i + 1, label: ['86 − 80 = 6', '92 − 86 = 6', '98 − 92 = 6'][i], at: sub[i], ring: 0})),
			]} />
			{glow > 0.01 ? <div style={{position: 'absolute', left: LAD.x + 80, top: LAD.y - 104, width: 3 * (LAD.cardW + LAD.gap) + 60, height: 50, borderRadius: 24, background: 'rgba(248,232,200,0.7)', opacity: glow}} /> : null}
			<Hand x={LAD.x} y={396} at={k.called} size={42} color={BLUE}>arithmetic sequence (arithmetic progression, AP)</Hand>
			<Hand x={LAD.x} y={452} at={k.common} size={44} color={AMBER}>d: the common difference</Hand>
			<Row x={LAD.x} y={508} at={k.six} size={46}>aₙ − aₙ₋₁ = <span style={{color: AMBER}}>d</span>, the same for every n ≥ 2</Row>
			{fr < out23 + 14 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - prog(fr, out23, 12)}}>
				<Ladder x={LAD2.x} y={LAD2.y} cardW={LAD2.cardW} gap={LAD2.gap} values={['20', '17', '14', '11']} dropAt={k.twenty} stagger={18} />
				<Arcs x={LAD2.x} y={LAD2.y} cardW={LAD2.cardW} gap={LAD2.gap} arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: '−3', at: k.twenty + 70 + i * 10}))} />
				<Hand x={1540} y={706} at={k.three} size={52} color={AMBER}>d = −3</Hand>
				<Ladder x={LAD3.x} y={LAD3.y} cardW={LAD3.cardW} gap={LAD3.gap} values={['1', '4', '9', '16']} dropAt={k.but} stagger={12} />
				<Arcs x={LAD3.x} y={LAD3.y} cardW={LAD3.cardW} gap={LAD3.gap} arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: ['+3', '+5', '+7'][i], at: k.its + 20 + i * 18, ring: prog(fr, k.same, 12)}))} />
				<Hand x={1540} y={880} at={k.same} size={44} color={RED}>{'not all equal:\nnot an AP'}</Hand>
			</div> : null}
			<Chip x={LAD.x} y={650} at={k.test} size={46} color={BROWN}>test a list: is each difference equal?</Chip>
			<Chip x={LAD.x} y={770} at={k.rule} size={46} color={BROWN}>a rule: is aₙ − aₙ₋₁ the same for every n?</Chip>
		</>
	);
};

// ---------- 3. the nth term: count the steps ----------
const Morph: React.FC<{a: string; b: string; at: number}> = ({a, b, at}) => {
	const f = useCurrentFrame();
	const u = prog(f, at, 14);
	return <span style={{position: 'relative', display: 'inline-block'}}>
		<span style={{opacity: 1 - u}}>{a}</span>
		<span style={{position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', opacity: u, whiteSpace: 'pre', fontSize: '0.86em'}}>{b}</span>
	</span>;
};
export const S03: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K3;
	const run = kf(fr, [[k.now + 10, 4], [k.now + 100, 20]], false);
	const count = fr < k.now + 10 ? 4 : run;
	const n = Math.max(4, Math.floor(count));
	const sym = [k.start, k.second, k.third, k.fourth];
	return (
		<>
			<SceneHeading text="The nth term: count the steps" at={4} size={52} />
			<ChairRig r={R1} count={count} floorW={560} door={1} ring0={vis(fr, k.less, k.nth, 12)} ghost={{at: k.ninety + 20, crossAt: k.guess + 10}} />
			<GuessMark r={R1} o={1} q={1 - prog(fr, k.ninety, 12)} />
			<Hand x={R1.cx + 110} y={R1.floor - 150} at={k.less} out={k.now} size={44} color={AMBER}>0 steps</Hand>
			<Ladder x={LAD.x} y={LAD.y} cardW={LAD.cardW} gap={LAD.gap} values={['80', '86', '92', '98'].map((v, i) => <Morph key={i} a={v} b={['a', 'a + d', 'a + 2d', 'a + 3d'][i]} at={sym[i]} />)} dropAt={-300} labels={i => `n = ${i + 1}`} />
			<Arcs x={LAD.x} y={LAD.y} cardW={LAD.cardW} gap={LAD.gap} size={42} arcs={[0, 1, 2].map(i => ({from: i, to: i + 1, label: ['+6', '+6', '+6'][i], at: -300, out: sym[i + 1] - 4})).concat([0, 1, 2].map(i => ({from: i, to: i + 1, label: '+d', at: sym[i + 1] + 10, out: undefined as unknown as number})))} />
			<FrameSvg><g opacity={vis(fr, k.start + 20, k.now, 12)}><ellipse cx={LAD.x + LAD.cardW / 2} cy={LAD.y + 50} rx={LAD.cardW * 0.62} ry={74} fill="none" stroke={BLUE} strokeWidth={5} /></g></FrameSvg>
			<Hand x={LAD.x - 10} y={LAD.y + 156} at={k.start + 20} out={k.along} size={40} color={BLUE}>a = a₁, the first term</Hand>
			<Row x={LAD.x} y={LAD.y + 160} at={k.along} size={34} color={POS}>{'position 2: 1 step · position 3: 2 steps · position 4: 3 steps'}</Row>
			<div style={{position: 'absolute', left: LAD.x, top: 470, opacity: prog(fr, k.d, 12), background: CARD, border: `5px solid ${INK}`, borderRadius: 18, padding: '6px 28px 10px', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 60, color: INK, boxShadow: '0 12px 26px rgba(60,45,20,0.12)'}}>aₙ = <span style={{color: BLUE}}>a</span> + (n − 1)<span style={{color: AMBER}}>d</span></div>
			<Hand x={1320} y={486} at={k.d + 10} size={42} color={AMBER}>{'n − 1 steps\nafter the first'}</Hand>
			<LiveReadoutBoard x={LAD.x} y={620} width={500} at={k.now} inline size={52} labelSize={32} rows={[
				{label: 'chairs n', value: n, digits: 0, role: 'inner'},
				{label: 'steps n − 1', value: n - 1, digits: 0, role: 'k'},
				{label: 'height (cm)', value: chairH(n), digits: 0, role: 'a'},
			]} />
			<Row x={1310} y={630} at={k.thats} size={52}>a₂₀ = 80 + 19 × 6</Row>
			<AnswerBox x={1310} y={720} at={k.ninety} size={56}>194 cm</AnswerBox>
			<Hand x={1310} y={850} at={k.many - 10} size={44} color={RED}>{'20 steps: one chair\ntoo many'}</Hand>
		</>
	);
};

// ---------- 4. a straight line in n ----------
const SR: Rig = {cx: 170, floor: 900, pxcm: 2.6, scaleX: -999, maxCm: 0, tick: 40};
const PLOT = {x: 300, y: 160, w: 940, h: 790};
export const S04: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K4;
	const st = k.plot + 6, per = 12;
	const count = fr < st ? 1 : Math.min(8, 1 + (fr - st) / per);
	return (
		<>
			<SceneHeading text="A straight line in n" at={4} size={52} />
			<ChairRig r={SR} count={count} floorW={0} />
			<TermPlot x={PLOT.x} y={PLOT.y} width={PLOT.w} height={PLOT.h} window={{x: [-0.4, 8.6], y: [60, 130]}} nRange={[1, 8]} at={-30}
				series={[{term: chairH, at: st, stagger: per}]} flyFrom={[SR.cx, topY(SR, 8)]}
				guide={{fn: n => 6 * n + 74, at: k.line, color: INK_SOFT}} noTerm={[{n: 0, Y: 74, at: k.no, label: 'no stack of 0 chairs'}]}
				xTicks={[1, 2, 3, 4, 5, 6, 7, 8]} yTicks={[70, 80, 90, 100, 110, 120, 130]} xLabel="n (number of chairs)" yLabel="aₙ (height, cm)">
				{(m: PlotMap) => <>
					{[1, 2, 3, 4, 5, 6, 7].map(n => {const [ax, ay] = m.p(n, chairH(n)), [bx] = m.p(n + 1, 0), [, by] = m.p(0, chairH(n + 1)); const a = k.goes + (n - 1) * 6; return <g key={n} opacity={prog(fr, a, 8)}><DrawPath d={`M${ax},${ay} H${bx} V${by}`} at={a} dur={10} color={AMBER_STROKE} width={4.5} /></g>;})}
					{(() => {const [ax, ay] = m.p(3, chairH(3)), [bx] = m.p(4, 0); return <g opacity={prog(fr, k.goes + 30, 10)}><text x={(ax + bx) / 2} y={ay + 40} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: AMBER}} stroke={CARD} strokeWidth={6} paintOrder="stroke">1</text><text x={bx + 12} y={ay - 20} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: AMBER}} stroke={CARD} strokeWidth={6} paintOrder="stroke">+6</text></g>;})()}
					{fr >= k.points ? [1, 2, 3, 4, 5, 6, 7, 8].map(n => {const [px, py] = m.p(n, chairH(n)); const u = Math.sin(Math.PI * Math.min(1, Math.max(0, (fr - k.points - n * 4) / 20))); return u > 0.01 ? <circle key={n} cx={px} cy={py} r={13 + 10 * u} fill="none" stroke={BLUE} strokeWidth={4} opacity={u} /> : null;}) : null}
				</>}
			</TermPlot>
			<Row x={1290} y={190} at={k.every} out={k.expand} size={46}>each chair: up by <span style={{color: AMBER}}>d = 6</span></Row>
			<Row x={1290} y={190} at={k.expand} size={46} dim={prog(fr, k.chairs, 12)} small={36}>aₙ = a + (n − 1)d</Row>
			<Row x={1290} y={262} at={k.expand + 30} size={52} dim={prog(fr, k.chairs, 12)} small={38}>= <span style={{color: AMBER}}>d</span>n + (a − d)</Row>
			<Hand x={1290} y={350} at={k.linear} size={44} color={AMBER}>linear in n, gradient d</Hand>
			<Row x={1290} y={440} at={k.chairs} size={52} color={BLUE}>aₙ = 6n + 74</Row>
			<Row x={1290} y={520} at={k.six} size={46} color={AMBER}>gradient 6 = d</Row>
			<BoxCard x={1290} y={620} w={560} at={-30} out={k.cross - 6} size={40} title="the chairs">
				<div><span style={{color: BLUE, fontWeight: 800}}>a = 80</span>,  <span style={{color: AMBER, fontWeight: 800}}>d = 6</span></div>
				<div>aₙ = 80 + 6(n − 1)</div>
				<div style={{color: POS, fontSize: 34}}>n = number of chairs</div>
			</BoxCard>
			<Hand x={1290} y={620} at={k.cross} size={42} color={POS} w={560}>it would cross the axis at 74, but n starts at 1</Hand>
			<Hand x={1290} y={780} at={k.points} size={42} color={BLUE} w={560}>points only at n = 1, 2, 3, …: no part chairs, so not joined</Hand>
		</>
	);
};
