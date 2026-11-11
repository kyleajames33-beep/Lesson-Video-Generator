// Scenes 9 to 15: the memory aid (the chain x → v → a, d/dt down, ∫ dt + C up), attempt 1 and its brief feedback,
// attempt 2 and its brief feedback (with the reference point: x(2) = 5 m from the origin, 4 m from the start), the
// handoff (exported as I14FinalFrame, f01's opening: −1, 0, 9, 32 from x = t³ − 2t²) and the key notes.
import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, HandText, INK, prog} from '../../kit';
import {GivensStrip, KeyNotesBullets, MistakeCard, QuestionCard, SceneHeading, StudioPlot, fnPath, smooth} from '../../math/studio';
import type {PlotMap} from '../../math/studio';
import {K9, K10, K11, K12, K13, K14, K15} from './cuemap';
import {dur, hold} from './common';
import {AMBER, AMBER_STROKE, AnswerBox, BLUE, BoxCard, C_, Chip, Column, Dot, FramedCard, GREEN, Lbl, Row, SOFT, Stack, TEAL, VIOLET, aq1, vq1, x1, xq2} from './parts';

// ---------- the chain ----------
type ChainProps = {x: number; y: number; w?: number; h?: number; gap?: number; big?: number; small?: number; lab?: number; nodesAt?: readonly number[]; down?: number; up?: number; tag?: number; tags?: boolean};
const NODES = [{s: 'x', n: 'displacement', c: BLUE}, {s: 'v', n: 'velocity', c: TEAL}, {s: 'a = ẍ', n: 'acceleration', c: VIOLET}] as const;
export const Chain: React.FC<ChainProps> = ({x, y, w = 520, h = 120, gap = 110, big = 64, small = 40, lab = 44, nodesAt = [-30, -30, -30], down = -30, up = -30, tag = -30, tags = true}) => {
	const fr = useCurrentFrame();
	const top = (i: number) => y + i * (h + gap);
	const dO = prog(fr, down, 14), uO = prog(fr, up, 14), tO = prog(fr, tag, 14);
	const lx = x - 50, rxx = x + w + 50;
	return <>
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
			{[0, 1].map(i => {const a = top(i) + h + 12, b = top(i + 1) - 12; return <g key={i}>
				<g opacity={dO}><line x1={lx} x2={lx} y1={a} y2={b} stroke={TEAL} strokeWidth={7} strokeLinecap="round" /><path d={`M${lx - 14},${b - 18} L${lx},${b} L${lx + 14},${b - 18}`} stroke={TEAL} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>
				<g opacity={uO}><line x1={rxx} x2={rxx} y1={a} y2={b} stroke={AMBER_STROKE} strokeWidth={7} strokeLinecap="round" /><path d={`M${rxx - 14},${a + 18} L${rxx},${a} L${rxx + 14},${a + 18}`} stroke={AMBER_STROKE} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>
			</g>;})}
		</svg>
		{[0, 1].map(i => {const mid = top(i) + h + gap / 2; return <React.Fragment key={i}>
			<div style={{position: 'absolute', right: 1920 - (lx - 18), top: mid - lab * 0.62, opacity: dO, fontFamily: FONT_HAND, fontWeight: 700, fontSize: lab, color: TEAL, whiteSpace: 'pre'}}>d/dt</div>
			<div style={{position: 'absolute', left: rxx + 20, top: mid - lab * (tags ? 1.05 : 0.62), opacity: uO, fontFamily: FONT_HAND, fontWeight: 700, fontSize: lab, color: AMBER, whiteSpace: 'pre', lineHeight: 1.05}}>∫ dt, + C{tags ? <div style={{fontSize: Math.max(30, lab * 0.78), opacity: tO}}>one starting value</div> : null}</div>
		</React.Fragment>;})}
		{NODES.map((n, i) => <div key={n.s} style={{position: 'absolute', left: x, top: top(i), width: w, height: h, boxSizing: 'border-box', opacity: prog(fr, nodesAt[i], 12), background: '#fffdf8', border: `5px solid ${n.c}`, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: big, color: n.c}}>{n.s}</span>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: small, color: INK}}>{n.n}</span>
		</div>)}
	</>;
};
const MAIN = 'Differentiate down. Integrate up: one starting value per step.';

// ---------- 9. memory aid ----------
export const S09: React.FC = () => {
	const k = K9;
	return (
		<>
			<FramedCard x={100} y={150} w={1720} h={850} at={0} />
			<div style={{position: 'absolute', left: 150, top: 176}}><HandText text="Memory aid" at={4} size={50} color={SOFT} /></div>
			<Chain x={420} y={290} nodesAt={[k.disp, k.vel, k.acc]} down={k.diff} up={k.integ} tag={k.pay} />
			<div style={{position: 'absolute', left: 1330, top: 380, width: 450}}><HandText text={MAIN} at={k.diff} size={66} cps={18} maxWidth={450} /></div>
		</>
	);
};

// ---------- the question pictures ----------
const NumPic: React.FC<{dot: number; label?: string; arrow?: string; tags?: React.ReactNode}> = ({dot, label, arrow}) => {
	const W = 820, H = 340, X = (v: number) => 60 + ((v + 1) / 7) * (W - 120), Y = 230;
	return <svg width={W} height={H} style={{display: 'block', overflow: 'visible', background: '#fffdf8', borderRadius: 18, boxShadow: '0 14px 32px rgba(60,45,20,0.10)'}}>
		<line x1={30} x2={W - 30} y1={Y} y2={Y} stroke={INK} strokeWidth={4} />
		{[-1, 0, 1, 2, 3, 4, 5].map(v => <g key={v}><line x1={X(v)} x2={X(v)} y1={Y - 12} y2={Y + 12} stroke={INK} strokeWidth={3.5} /><text x={X(v)} y={Y + 50} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34, fill: INK}}>{v < 0 ? '−1' : v}</text></g>)}
		<text x={W - 30} y={Y + 92} textAnchor="end" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, fill: SOFT}}>x (m)</text>
		<text x={X(0)} y={Y + 92} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 34, fill: AMBER}}>O</text>
		<circle cx={X(dot)} cy={Y} r={17} fill={INK} stroke="#fffdf8" strokeWidth={5} />
		<text x={X(dot)} y={Y - 34} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 36, fill: SOFT}}>t = 0</text>
		{label ? <text x={W / 2} y={80} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 44, fill: INK}}>{label}</text> : null}
		{arrow ? <g><line x1={X(dot) + 26} x2={X(dot) + 170} y1={Y - 90} y2={Y - 90} stroke={TEAL} strokeWidth={8} strokeLinecap="round" /><path d={`M${X(dot) + 150},${Y - 104} L${X(dot) + 172},${Y - 90} L${X(dot) + 150},${Y - 76}`} stroke={TEAL} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" /><text x={X(dot) + 190} y={Y - 78} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 38, fill: TEAL}}>{arrow}</text></g> : null}
	</svg>;
};
const Attempt: React.FC<{id: string; pauseAt: number; heading?: string; given: React.ReactNode[]; picture: React.ReactNode; children: React.ReactNode}> = ({id, pauseAt, heading, given, picture, children}) => (
	<>
		<BoxCard x={96} y={480} w={640} at={6} size={42} title="given">{given.map((g, i) => <div key={i} style={{fontWeight: 800, whiteSpace: 'pre'}}>{g}</div>)}</BoxCard>
		<div style={{position: 'absolute', left: 770, top: 480}}>{picture}</div>
		<QuestionCard at={0} size={42} w={1700} y={170} hold={{...hold(id), ringFrom: pauseAt}} pauseAt={pauseAt} heading={heading}>{children}</QuestionCard>
	</>
);

// ---------- 10. attempt 1 ----------
export const S10: React.FC = () => (
	<Attempt id="scene-10" pauseAt={K10.pause} given={['x = t³ − 6t² + 9t (m)', 't ≥ 0 (s)']} picture={<NumPic dot={0} label="x = t³ − 6t² + 9t" />}>
		<div>A particle moves in a straight line. Its displacement from the origin at time t seconds is x = t³ − 6t² + 9t metres, for t ≥ 0. Find its acceleration when it is first at rest.</div>
	</Attempt>
);

// ---------- 11. feedback 1 ----------
const pv1 = (h: number) => ({fn: vq1, y: [-4, 10] as const, h, color: TEAL, title: 'v (m/s)', titleT: 1.6, yTicks: [{v: 9, label: '9'}]});
const pa1 = (h: number) => ({fn: aq1, y: [-13, 13] as const, h, color: VIOLET, title: 'ẍ (m/s²)', titleT: 0.1, yTicks: [{v: -6, label: '−6'}, {v: 6, label: '6'}]});
export const S11: React.FC = () => {
	const k = K11;
	const fr = useCurrentFrame();
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44}><div>x = t³ − 6t² + 9t m, t ≥ 0. Find the acceleration when the particle is first at rest.</div></QuestionCard>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'x = t³ − 6t² + 9t', role: 'a', at: 6}, {content: 'first at rest', at: k.first}]} />
			<Row x={96} y={300} at={k.vel} size={48} small={38} dim={prog(fr, k.acc, 12)} color={TEAL}>v = 3t² − 12t + 9</Row>
			<Row x={96} y={372} at={k.which} size={48} small={38} dim={prog(fr, k.acc, 12)} color={TEAL}>{'  '}= 3(t − 1)(t − 3)</Row>
			<Row x={96} y={446} at={k.second} size={48} small={40} dim={prog(fr, k.so, 12)}>first at rest: t = 1 s</Row>
			<Row x={96} y={522} at={k.acc} size={48} small={40} dim={prog(fr, k.so, 12)}><span style={{color: VIOLET}}>ẍ</span> = 6t − 12</Row>
			<Row x={96} y={598} at={k.so} size={52}><span style={{color: VIOLET}}>ẍ</span>(1) = 6 − 12 = −6</Row>
			<AnswerBox x={96} y={680} at={k.minus6} size={56}>−6 m/s²</AnswerBox>
			<MistakeCard x={96} y={800} w={960} at={k.zero} size={46} wrong={<>0 m/s²</>} caption="at rest is not zero acceleration" />
			<Stack x={1110} y={330} w={780} win={[-0.2, 4.2]} panels={[pv1(290), pa1(290)]} gap={16} xTicks={[1, 2, 3, 4]} kids={ms => <>
				<Column ms={ms} t={1} o={prog(fr, k.second, 12)} label="t = 1" />
				{prog(fr, k.second, 12) > 0.01 ? (() => {const [cx, cy] = ms[0].p(1, 0); return <circle cx={cx} cy={cy} r={16} fill="#fffdf8" stroke={TEAL} strokeWidth={5} opacity={prog(fr, k.second, 12)} />;})() : null}
				<Lbl x={ms[0].p(1.15, 5)[0]} y={ms[0].p(1.15, 5)[1]} text="first at rest" hand size={36} color={TEAL} o={prog(fr, k.second, 12)} />
				<Dot m={ms[1]} t={1} color={VIOLET} r={14} o={prog(fr, k.so, 12)} />
				<Lbl x={ms[1].p(1.15, -6)[0]} y={ms[1].p(1.15, -6)[1] + 44} text="a = −6, not 0" hand size={36} color={VIOLET} o={prog(fr, k.being, 12)} />
			</>} />
		</>
	);
};

// ---------- 12. attempt 2 ----------
export const S12: React.FC = () => (
	<Attempt id="scene-12" pauseAt={K12.pause} heading="Last one" given={['ẍ = 4 − 6t (m/s²)', 'x(0) = 1 m', 'v(0) = 2 m/s']} picture={<NumPic dot={1} arrow="2 m/s" />}>
		<div>A particle moving in a straight line has acceleration ẍ = 4 − 6t m/s². Initially it is at x = 1 m with velocity 2 m/s. Find its displacement when t = 2 s.</div>
	</Attempt>
);

// ---------- 13. feedback 2 ----------
export const S13: React.FC = () => {
	const k = K13;
	const fr = useCurrentFrame();
	const done = prog(fr, k.five, 12);
	const NX = (v: number) => 1150 + ((v + 1) / 7) * 700;
	return (
		<>
			<SceneHeading text="Check your working" at={2} size={52} />
			<QuestionCard at={-40} shrinkAt={-30} w={1100} y={170} size={44} heading="Last one"><div>ẍ = 4 − 6t m/s². Initially x = 1 m, velocity 2 m/s. Find the displacement when t = 2 s.</div></QuestionCard>
			<GivensStrip x={1290} y={160} size={30} maxW={600} items={[{content: 'ẍ = 4 − 6t', role: 'gradient', at: 6}, {content: 'v(0) = 2 m/s', role: 'k', at: k.start}, {content: 'x(0) = 1 m', role: 'k', at: k.starting}]} />
			<Row x={96} y={296} at={k.vel} size={46} small={38} dim={prog(fr, k.x, 12)}>v = 4t − 3t² + {C_(1)}</Row>
			<Row x={96} y={364} at={k.two} size={46} small={38} dim={prog(fr, k.x, 12)}>v(0) = 2 → {C_(1)} = 2</Row>
			<Row x={96} y={432} at={k.x} size={46} small={38} dim={prog(fr, k.att2, 12)}>x = 2t² − t³ + 2t + {C_(2)}</Row>
			<Row x={96} y={500} at={k.one} size={46} small={38} dim={prog(fr, k.att2, 12)}>x(0) = 1 → {C_(2)} = 1</Row>
			<Row x={96} y={570} at={k.att2} size={50}>x(2) = 8 − 8 + 4 + 1 = 5</Row>
			<AnswerBox x={96} y={652} at={k.five} size={56}>x(2) = 5 m</AnswerBox>
			<MistakeCard x={96} y={780} w={1000} at={k.four} size={44} wrong={<>4 m</>} caption="starting position dropped" compare={<>x(2) = 5 m from O; the change since t = 0 is x(2) − x(0) = 4 m</>} />
			<StudioPlot x={1110} y={300} width={780} height={430} window={{x: [-0.15, 2.3], y: [-0.6, 6.4]}} xTicks={[1, 2]} yTicks={[1, 5]} xLabel="t (s)" yLabel="x (m)" at={-30}>
				{(m: PlotMap) => {const [sx, sy] = m.p(0, 1), [ex, ey] = m.p(2, 5); return <>
					<g clipPath={m.clip}><path d={fnPath(m, xq2, 0, 2.05)} stroke={BLUE} strokeWidth={6} fill="none" strokeLinecap="round" opacity={prog(fr, k.x, 14)} /></g>
					<circle cx={sx} cy={sy} r={13} fill={AMBER} stroke="#fffdf8" strokeWidth={4} opacity={prog(fr, k.starting, 12)} />
					<circle cx={ex} cy={ey} r={13} fill={GREEN} stroke="#fffdf8" strokeWidth={4} opacity={done} />
					<Lbl x={sx + 22} y={sy + 40} text="start: x = 1" size={30} color={AMBER} o={prog(fr, k.starting, 12)} />
				</>;}}
			</StudioPlot>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<line x1={NX(-1) - 20} x2={NX(6) + 10} y1={900} y2={900} stroke={INK} strokeWidth={4} />
				{[0, 1, 2, 3, 4, 5].map(v => <g key={v}><line x1={NX(v)} x2={NX(v)} y1={888} y2={912} stroke={INK} strokeWidth={3.5} /><text x={NX(v)} y={948} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: INK}}>{v}</text></g>)}
				<text x={NX(0)} y={985} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, fill: AMBER}}>O</text>
				<g opacity={done}>
					<path d={`M${NX(0)},${830} V${812} H${NX(5)} V${830}`} stroke={GREEN} strokeWidth={5} fill="none" />
					<text x={(NX(0) + NX(5)) / 2} y={800} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, fill: GREEN}}>from O: 5 m</text>
				</g>
				<g opacity={prog(fr, k.forgets, 12)}>
					<path d={`M${NX(1)},${860} V${872} H${NX(5)} V${860}`} stroke="#a8421c" strokeWidth={5} fill="none" transform="translate(0,0)" />
					<text x={(NX(1) + NX(5)) / 2} y={862} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, fill: '#a8421c'}} stroke="#fffdf8" strokeWidth={6} paintOrder="stroke">from the start: 4 m</text>
				</g>
				<circle cx={NX(1)} cy={900} r={13} fill={AMBER} stroke="#fffdf8" strokeWidth={4} opacity={prog(fr, k.starting, 12)} />
				<circle cx={NX(5)} cy={900} r={14} fill={GREEN} stroke="#fffdf8" strokeWidth={4} opacity={done} />
			</svg>
		</>
	);
};

// ---------- 14. handoff ----------
const SLOT = (i: number) => 960 + i * 200;
const ROWY = 360;
const I14Board: React.FC<{liftAt: number; seqAt: number; qAt: number}> = ({liftAt, seqAt, qAt}) => {
	const fr = useCurrentFrame();
	const vals = [-1, 0, 9, 32];
	const plot = {x: 40, y: 190, w: 820, h: 780, win: {x: [-0.3, 4.5] as [number, number], y: [-5, 36] as [number, number]}};
	const bx = plot.x + 84, bw = plot.w - 126, by = plot.y + 48, bh = plot.h - 120;
	const dotAt = (t: number, v: number): [number, number] => [bx + ((t - plot.win.x[0]) / (plot.win.x[1] - plot.win.x[0])) * bw, by + ((plot.win.y[1] - v) / (plot.win.y[1] - plot.win.y[0])) * bh];
	return (
		<>
			<StudioPlot x={plot.x} y={plot.y} width={plot.w} height={plot.h} window={plot.win} xTicks={[1, 2, 3, 4]} yTicks={[9, 32]} xLabel="t (s)" yLabel="x (m), x = t³ − 2t²" at={-30} opacity={0.75}>
				{(mm: PlotMap) => <g clipPath={mm.clip}><path d={fnPath(mm, x1, 0, 4.3)} stroke={BLUE} strokeWidth={6} fill="none" opacity={0.6} /></g>}
			</StudioPlot>
			{vals.map((v, i) => {
				const [dx, dy] = dotAt(i + 1, v);
				const p = smooth(prog(fr, liftAt + i * 10, 24));
				const cx = interpolate(p, [0, 1], [dx + 30, SLOT(i)]), cy = interpolate(p, [0, 1], [dy - 40, ROWY]);
				const size = interpolate(p, [0, 1], [34, 84]);
				return <React.Fragment key={i}>
					<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}><circle cx={dx} cy={dy} r={12} fill={BLUE} stroke="#fffdf8" strokeWidth={4} /></svg>
					<div style={{position: 'absolute', left: cx, top: cy, transform: 'translate(-50%, -50%)', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{v < 0 ? '−1' : v}{i < 3 ? <span style={{opacity: p}}>,</span> : null}</div>
					<div style={{position: 'absolute', left: SLOT(i), top: ROWY + 62, transform: 'translateX(-50%)', opacity: p, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: SOFT}}>t = {i + 1}</div>
				</React.Fragment>;
			})}
			<div style={{position: 'absolute', left: SLOT(4), top: ROWY, transform: 'translate(-50%, -50%)', opacity: prog(fr, liftAt + 40, 14), fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 84, color: INK}}>...</div>
			<div style={{position: 'absolute', left: 900, top: ROWY + 120, opacity: prog(fr, liftAt + 40, 14), fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: SOFT}}>x at t = 1, 2, 3, 4 (the second particle)</div>
			<Chip x={900} y={620} at={seqAt} size={56} color="#8a5a12">Next: sequences</Chip>
			<Chip x={1420} y={600} at={qAt} size={90} color="#8a5a12">?</Chip>
			<div style={{position: 'absolute', left: 904, top: 780, opacity: prog(fr, seqAt, 14), width: 900}}><HandText text="a list of numbers in order is a sequence" at={seqAt} size={44} color={SOFT} /></div>
		</>
	);
};
/** i14's final frame (f01 opens on it). */
export const I14FinalFrame: React.FC = () => <I14Board liftAt={-300} seqAt={-300} qAt={-300} />;
export const S14: React.FC = () => {
	const fr = useCurrentFrame();
	const k = K14;
	const sw = prog(fr, k.next, 16);
	return (
		<>
			{sw < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - sw}}>
				<SceneHeading text="Linked by calculus, both ways" at={4} size={52} />
				<Chain x={560} y={210} h={110} gap={90} nodesAt={[-30, -30, -30]} />
				<Hand2 at={k.so + 20} />
			</div> : null}
			{sw > 0 ? <div style={{position: 'absolute', inset: 0, opacity: sw}}><I14Board liftAt={k.list} seqAt={k.seq} qAt={k.have} /></div> : null}
		</>
	);
};
const Hand2: React.FC<{at: number}> = ({at}) => <div style={{position: 'absolute', left: 560, top: 910}}><HandText text="differentiate down, integrate up" at={at} size={48} color={SOFT} /></div>;

// ---------- 15. key notes ----------
export const S15: React.FC = () => {
	const fr = useCurrentFrame();
	const items = [
		{content: <><span style={{color: TEAL}}>v = dx/dt</span>; at rest, v = 0; speed = |v|.</>, at: 2},
		{content: <><span style={{color: VIOLET}}>a = dv/dt = d²x/dt² = ẍ</span>.</>, at: 6},
		{content: <>v and a same sign (both nonzero): speeding up.</>, at: 10},
		{content: <>Integrate up: one <span style={{color: AMBER}}>starting value</span> per constant.</>, at: 14},
		{content: <>Zero displacement can hide distance travelled.</>, at: 18},
	];
	const back = prog(fr, Math.max(1350, dur('scene-15')) - 40, 18);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - back}}>
				<SceneHeading text="Key notes: what to write in your book" at={-60} size={56} />
				<div style={{position: 'absolute', right: 96, top: 108, opacity: prog(fr, K15.pause, 12), fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: '#8a5a12'}}>pause to copy</div>
				<KeyNotesBullets x={96} y={230} w={1050} items={items} size={40} gap={58} />
				<FramedCard x={1180} y={196} w={700} h={760} at={8} />
				{fr >= 8 ? <div style={{position: 'absolute', inset: 0, opacity: prog(fr, 8, 14)}}>
					<div style={{position: 'absolute', left: 1220, top: 214, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: SOFT}}>Memory aid</div>
					<Chain x={1330} y={290} w={330} h={84} gap={66} big={44} small={30} lab={34} tags={false} />
					<div style={{position: 'absolute', left: 1220, top: 690, width: 620, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.08, color: INK}}>{MAIN}</div>
				</div> : null}
			</div>
			{back > 0 ? <div style={{position: 'absolute', inset: 0, opacity: back}}><I14FinalFrame /></div> : null}
		</>
	);
};
