// Scenes 1 to 4: d05's frame and the linked pedal, the squash recall, the speeding-pedal simulation, the rate chain.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, HandText, INK, INK_SOFT, prog} from '../../kit';
import {
	FrameSvg, FunctionSimulator, GrowthBars, HandTag, LiveReadoutBoard, MagnifierLeader, MarkSpan, SceneHeading, fmtNum, heldStops, kf, niceNum, piTicks, smooth, vis,
	MATH_ANSWER, CARD, CARD_SHADOW,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {cue, PI} from './common';
import {
	BLUE, Bike, Bl, Chip, CrankRig, CurveLabel, DISPLAY, Dot, HandNote, LabelledRow, Legend, MATH_MISTAKE, NAVY, RecallChip, SIN, SIN2, SINE_STAGE, SINSQ, Slot, TEAL, TRIG_WIN, TanLine, Te, VIOLET, bikeAxle, gmap,
} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const RAD_TICKS = piTicks(-1, 2, 2);
const lin = (f: number, a: number, b: number, va: number, vb: number) => kf(f, [[a, va], [b, vb]], false);

// ---------- 1. hook: d05's frame, then a pedal going round ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const picture = cue(id, 'Picture'), fast = cue(id, 'fast'), one = cue(id, 'one'), because = cue(id, 'because'), two = cue(id, 'two', 4), where = cue(id, 'Where'), squared = cue(id, 'squared');
	// The graph eases from d05's stage into the right-hand panel; the window is unchanged.
	const g = smooth(prog(f, picture, 36));
	const T = {x: 700, y: 330, w: 1130, h: 600};
	const box = {x: lerp(SINE_STAGE.x, T.x, g), y: lerp(SINE_STAGE.y, T.y, g), w: lerp(SINE_STAGE.w, T.w, g), h: lerp(SINE_STAGE.h, T.h, g)};
	const M = gmap(box.x, box.y, box.w, box.h, TRIG_WIN);
	const MT = gmap(T.x, T.y, T.w, T.h, TRIG_WIN);
	// Linked pedal: one crank turn on sin x, then two turns in the same time on sin 2x.
	const a0 = picture + 36, a1 = fast - 4, b0 = fast + 8, b1 = b0 + (a1 - a0);
	const xA = lin(f, a0, a1, 0, 2 * PI), xB = lin(f, b0, b1, 0, 2 * PI);
	const phaseB = f >= b0;
	const theta = phaseB ? 2 * xB : xA;
	const linkO = vis(f, a0 - 6, b1 + 30);
	const linkPt: [number, number] = phaseB ? MT.pt(xB, Math.sin(2 * xB)) : MT.pt(xA, Math.sin(xA));
	// d05's navy sin 2x moves to d06's ink curve role on d06's first cue ("fast"): a navy copy fades off the ink curve.
	const navyToInk = prog(f, fast, 16);
	const d05 = 1 - prog(f, picture - 10, 14);
	const tanO = 1 - 0.5 * vis(f, picture + 20, cue(id, 'At the origin'));
	const crank = {cx: 330, cy: MT.pt(0, 0)[1], L: MT.sy};
	const bike = {x: 96, y: 150, w: 440};
	const axle = bikeAxle(bike.x, bike.y, bike.w);
	return (
		<>
			{/* d05's final frame (held), then the d06 heading */}
			<div style={{position: 'absolute', left: 96, top: 100, opacity: 1 - prog(f, 50, 12)}}><HandText text="sin → cos → −sin → −cos → sin" at={-200} size={40} color={INK_SOFT} cps={34} /></div>
			<SceneHeading text="The chain rule: a pedal, a crank and inside parts" at={66} />
			<div style={{position: 'absolute', inset: 0, opacity: d05}}>
				<Enter at={-30} style={{position: 'absolute', left: 0, right: 0, top: 892, display: 'flex', justifyContent: 'center'}}>
					<div style={{background: '#f1ebdf', border: '2px solid rgba(60,45,20,0.14)', borderRadius: 14, padding: '8px 22px', ...DISPLAY(40, '#4f4840', 700)}}>Next: the chain rule with e, ln, sin and cos</div>
				</Enter>
			</div>
			<FunctionSimulator x={box.x} y={box.y} width={box.w} height={box.h} window={TRIG_WIN} family={SIN} timeline={[{frame: 0, x: 0}]} color={INK} at={-30}
				xTicks={RAD_TICKS} yTicks={[-1, 1]} xLabel="x (radians)" yLabel="y"
				curves={[{fn: x => Math.sin(2 * x), at: -30, color: INK, width: 7}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 200}}
				overlay={() => (
					<FrameSvg>
						<TanLine M={M} X={0} Y={0} m={2} half={200} opacity={tanO} width={6 + 3 * vis(f, two, two + 70)} />
					</FrameSvg>
				)} />
			{/* navy overlay that fades as sin 2x takes the ink role */}
			{navyToInk < 1 ? <FunctionSimulator x={box.x} y={box.y} width={box.w} height={box.h} window={TRIG_WIN} family={SIN2} timeline={[{frame: 0, x: 0}]} color={NAVY} curveWidth={7} bare at={-30} out={fast} /> : null}
			<CurveLabel x={M.pt(3.7, -1)[0]} y={M.pt(3.7, -1)[1] + 18} size={44}>y = sin x</CurveLabel>
			<CurveLabel x={M.pt(1.0, 1.05)[0]} y={M.pt(1.0, 1.05)[1] - 54} color={f < fast + 8 ? NAVY : INK} size={44}>y = sin 2x</CurveLabel>
			<Chip x={M.pt(-2.9, 0)[0]} y={M.pt(0, 1.4)[1]} at={-30} out={two} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			<HandTag x={M.pt(-1.2, 0)[0]} y={M.pt(0, 1.0)[1]} text="on sin 2x →" at={-200} out={two} size={38} color={f < fast + 8 ? NAVY : INK} />
			{/* the anchor: the bike, a magnified crank level with the graph's axis, and the linked height */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, picture, 16), transform: `translateX(${(1 - smooth(prog(f, picture, 26))) * -90}px)`}}>
				{f >= picture - 2 ? <>
					<Bike x={bike.x} y={bike.y} w={bike.w} theta={theta} at={picture} dot={false} />
					<MagnifierLeader from={axle} r={20} to={[crank.cx, crank.cy]} R={212} at={picture + 10} />
					<FrameSvg>
						<circle cx={crank.cx} cy={crank.cy} r={212} fill={CARD} stroke={INK} strokeWidth={4} />
						<line x1={crank.cx - 200} x2={crank.cx + 200} y1={crank.cy} y2={crank.cy} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 8" />
					</FrameSvg>
					<CrankRig cx={crank.cx} cy={crank.cy} L={crank.L} theta={theta} at={picture} overlay={rg => (
						<FrameSvg>
							{/* height bar and the level line onto the curve */}
							<line x1={rg.sprites[0][0]} x2={rg.sprites[0][0]} y1={crank.cy} y2={rg.sprites[0][1]} stroke={INK} strokeWidth={6} opacity={linkO} strokeLinecap="round" />
							<line x1={rg.sprites[0][0]} x2={linkPt[0]} y1={rg.sprites[0][1]} y2={linkPt[1]} stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="10 9" opacity={linkO} />
							<Dot p={linkPt} color={INK} r={13} opacity={linkO} />
						</FrameSvg>
					)} />
				</> : null}
			</div>
			<RecallChip x={96} y={846} at={a0 + 40} out={where} size={30}>crank length 1</RecallChip>
			<HandTag x={330} y={872} text="pedal height = sin x" at={a0 + 20} out={fast} size={38} color={INK} />
			<HandTag x={96} y={930} text="crank turning twice as fast" at={fast + 6} out={where} size={38} role="a" />
			{/* live crank readout while the pedal is linked, then the gradients at the origin */}
			<LiveReadoutBoard x={1240} y={150} width={580} at={a0} out={one - 14} inline rows={[
				{label: 'crank turns', value: theta / (2 * PI), digits: 2},
				{label: 'pedal height', value: Math.sin(theta), digits: 2},
			]} />
			<HandTag x={1244} y={366} text={phaseB ? 'two turns in the time of one' : 'one crank turn: one wave'} at={phaseB ? cue(id, 'two', 2) : a0 + 30} out={one - 14} size={40} color={phaseB ? BLUE : INK} />
			{/* readouts at the origin */}
			<LiveReadoutBoard x={1240} y={150} width={580} at={one} inline rows={[
				{label: 'sin x: gradient at 0', value: 1, role: 'gradient', at: one},
				{label: 'sin 2x: gradient at 0', value: 2, role: 'gradient', at: two, mark: {kind: 'circle', at: two + 8}},
			]} />
			<RecallChip x={1240} y={f < two ? 262 : 340} at={because} out={where} size={30}>cos 0 = 1</RecallChip>
			<Chip x={600} y={168} at={squared} size={48}>sin(x<span style={{fontSize: '0.64em', position: 'relative', top: '-0.78em'}}>2</span>)?</Chip>
			<HandTag x={604} y={290} text="pedalling faster and faster?" at={squared + 10} size={38} role="a" />
			<HandTag x={604} y={200} text="where does the 2 come from?" at={where} out={squared - 4} size={38} color={VIOLET} />
		</>
	);
};

// ---------- 2. recall: the squash and the chain rule agree ----------
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const doubles = cue(id, 'doubles'), chain = cue(id, 'The chain rule'), insidePart = cue(id, 'inside part'), keep = cue(id, 'keep the inside'), cosx = cue(id, 'cos two x'), two1 = cue(id, 'which is two'), soThe = cue(id, 'So the derivative'), two2 = cue(id, "that's two");
	const G = {x: 96, y: 180, w: 1060, h: 680};
	const T: FnKey[] = [{frame: 0, x: 0, xScale: 1}, {frame: doubles - 8, xScale: 1}, {frame: doubles + 40, xScale: 0.5}];
	const M = gmap(G.x, G.y, G.w, G.h, TRIG_WIN);
	const sq = smooth(prog(f, doubles - 8, 48));
	const RX = 1200;
	const ageOf = (next: number) => prog(f, next, 16);
	return (
		<>
			<SceneHeading text="Recall: a squash, and the chain rule" at={-24} />
			<Legend />
			<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={TRIG_WIN} family={SIN} timeline={T} color={INK}
				xTicks={piTicks(-1, 2, 2)} yTicks={[-1, 1]} xLabel="x (radians)" yLabel="y"
				curves={[{fn: x => Math.sin(2 * x), at: -30, width: 5}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 210}}
				triangle={{run: 1, at: -30, labels: {first: len => `run ${niceNum(len)}`, second: len => `rise ${niceNum(len)}`}}}
				readout={{x: RX, y: 350, width: 630, at: -30, inline: true, rows: [
					{label: 'gradient at 0', role: 'gradient', value: s => s.slope, glow: [two2, 99999]},
					{label: 'inside slope', role: 'a', value: () => 2, text: f < two1 + 6 ? () => ' ' : undefined, mark: {kind: 'box', at: two1 + 10, role: 'a'}},
				]}}
				overlay={gg => {
					const [px, py] = gg.pt;
					return <>
						<HandTag x={px - 10} y={py + 120} text="run halves" at={doubles + 44} out={keep} size={40} color={VIOLET} marks={[{kind: 'circle', cx: px + 50 * (1 - 0.5 * sq), cy: py + 32, rx: 48, ry: 26}]} markAt={doubles + 40} />
						<HandTag x={px + 150} y={py - 70} text="rise: same" at={doubles + 54} out={keep} size={40} color={VIOLET} />
					</>;
				}} />
			<CurveLabel x={M.pt(3.7, -1)[0]} y={M.pt(3.7, -1)[1] + 18} size={44} opacity={1 - sq}>y = sin x</CurveLabel>
			<CurveLabel x={M.pt(0.9, 1.05)[0]} y={M.pt(0.9, 1.05)[1] - 54} size={44} color={sq > 0.5 ? INK : INK_SOFT}>y = sin 2x</CurveLabel>
			<RecallChip x={96} y={888} at={doubles + 20} size={30}>d01: a sideways squash by ½ doubles every slope at matching points</RecallChip>
			{/* the anchor badge */}
			<Bike x={RX} y={148} w={300} theta={(f / 30) * 2 * 1.2} dot={false} />
			<HandNote x={RX + 330} y={170} lines={['twice as fast', '= squash by ½']} at={-24} size={38} color={BLUE} />
			<HandTag x={RX + 330} y={290} text="× 2" at={soThe + 10} size={52} role="a" />
			{/* the working column */}
			<LabelledRow x={RX} y={550} label="sin is the outside; 2x is the inside" color={INK_SOFT} at={insidePart - 20} dim={ageOf(cosx)}>
				y = <Te>sin(</Te><Slot>2x</Slot><Te>)</Te>
			</LabelledRow>
			<RecallChip x={RX} y={480} at={chain} out={insidePart - 24} size={30}>Year 11: dy/dx = dy/du × du/dx</RecallChip>
			<LabelledRow x={RX} y={650} label="outside slope at the inside" color={TEAL} at={cosx + 20} dim={ageOf(two1)}>
				<Te>cos(</Te><Slot>2x</Slot><Te>)</Te>
			</LabelledRow>
			<HandTag x={RX + 330} y={740} text="inside unchanged" at={cosx + 30} out={two1} size={36} color={INK_SOFT} />
			<LabelledRow x={RX} y={750} label="inside slope" color={BLUE} at={two1} dim={ageOf(soThe)}>
				<MarkSpan kind="box" at={two1 + 10} role="a"><Bl>2</Bl></MarkSpan>
			</LabelledRow>
			<Enter at={soThe} style={{position: 'absolute', left: RX - 12, top: 852}}>
				<div style={{display: 'inline-block', background: CARD, border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '2px 18px', boxShadow: CARD_SHADOW, ...DISPLAY(46)}}>dy/dx = <Bl>2</Bl> <Te>cos(2x)</Te>; at 0: <span style={{color: MATH_ANSWER}}>2</span></div>
			</Enter>
		</>
	);
};

// ---------- 3. speeding up: what's missing for sin(x²)? ----------
const C3 = {x: 700, y: 150, w: 1130, h: 770};
const W3 = {x: [0, 2.5] as [number, number], y: [-2, 2] as [number, number]};
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const waves = cue(id, 'Its waves'), ifOnly = cue(id, 'If you only'), atOne = cue(id, 'At x equals one'), two = cue(id, 'two'), atOneHalf = cue(id, 'At one and a half'), notFixed = cue(id, 'The missing factor'), squared = cue(id, 'squared', 3), thatFactor = cue(id, 'That factor');
	const wEnd = waves + 210;
	const T: FnKey[] = [{frame: 0, x: 0.5}, ...heldStops('x', [{frame: ifOnly, value: 0.5}, {frame: atOne + 26, value: 1}, {frame: atOneHalf + 22, value: 1.5}], 30)];
	// Current x driving the crank: the write-on edge, then the riding point.
	const xAt = (g: number) => {
		if (g < waves) return 0.25;
		if (g < wEnd) return lin(g, waves, wEnd, 0.25, 2.5);
		if (g < ifOnly - 10) return lin(g, wEnd, ifOnly - 10, 2.5, 0.5);
		const k = T.filter(t => t.x !== undefined).map(t => [t.frame, t.x as number] as const);
		return kf(g, k);
	};
	// Crank angle: accumulate the crank speed 2x (one turn per 80 frames at speed 1).
	let theta = 0;
	for (let g = 0; g < f; g++) theta += (2 * Math.PI / 80) * 2 * xAt(g);
	const speed = 2 * xAt(f);
	const M = gmap(C3.x, C3.y, C3.w, C3.h, W3);
	const ratioText = (x: number) => (Math.abs(Math.cos(x * x)) < 0.07 ? '' : fmtNum((2 * x * Math.cos(x * x)) / Math.cos(x * x), 2));
	const relabel = f >= thatFactor;
	return (
		<>
			<SceneHeading text="Speeding up: what's missing for sin(x²)?" at={-24} />
			<Legend />
			<Bike x={96} y={150} w={520} theta={theta} />
			<GrowthBars x={96} y={470} w={560} max={3.2} title="crank speed" rows={[
				{label: 'sin x', value: 1, digits: 2, dashed: true},
				{label: 'sin(x²)', value: speed, digits: 2, role: 'a'},
			]} />
			<FunctionSimulator x={C3.x} y={C3.y} width={C3.w} height={C3.h} window={W3} family={SINSQ} timeline={T} color={INK}
				xTicks={[0.5, 1, 1.5, 2, 2.5]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y" draw={{at: waves, dur: wEnd - waves}}
				curves={[{fn: x => Math.sin(x * x), at: -30, color: '#d9d0c0', width: 5}]}
				point={{at: ifOnly}} tangent={{at: ifOnly, halfLength: 220}}
				lines={[{slope: s => Math.cos(s.u * s.u), at: ifOnly + 20, halfLength: 220, label: 'outside only'}]}
				readout={{x: 96, y: 680, width: 560, at: ifOnly, inline: true, rows: [
					{label: 'gradient', role: 'gradient', value: s => s.slope, digits: 3},
					{label: 'cos(x²): outside only', role: 'b', value: s => Math.cos(s.u * s.u), digits: 3},
					{label: relabel ? 'ratio = crank speed' : 'ratio', role: 'a', value: () => 0, text: s => ratioText(s.u), glow: [thatFactor, 99999]},
				]}}
				overlay={gg => {
					const [px, py] = gg.pt;
					return <>
						<HandTag x={px + 40} y={py + 150} text="outside only: misses" at={two + 4} out={atOneHalf} size={40} color={MATH_MISTAKE} marks={[{kind: 'circle', cx: px + 150, cy: py - 80, rx: 70, ry: 40}]} markAt={two} />
					</>;
				}} />
			<CurveLabel x={M.pt(1.55, 1.2)[0]} y={M.pt(1.55, 1.2)[1] - 40} size={48}>y = sin(x<span style={{fontSize: '0.64em', position: 'relative', top: '-0.78em'}}>2</span>)</CurveLabel>
			<Chip x={1500} y={196} at={squared} size={36} color={BLUE}><Bl>d/dx(x²) = 2x</Bl></Chip>
			<HandTag x={M.pt(0.05, 0)[0]} y={M.pt(0, 1.75)[1]} text="pedalling faster" at={waves + 10} out={ifOnly} size={40} role="a" />
			<Enter at={notFixed} style={{position: 'absolute', left: M.pt(0.05, 0)[0], top: M.pt(0, -1.15)[1]}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '6px 22px 10px', boxShadow: CARD_SHADOW, border: `3px solid ${BLUE}`}}>
					<div style={DISPLAY(52, BLUE)}>ratio = 2x</div>
					<div style={DISPLAY(30, INK, 700)}>1, 2, 3 at x = ½, 1, 1.5</div>
				</div>
			</Enter>
			<HandTag x={M.pt(0.05, 0)[0]} y={M.pt(0, 1.75)[1]} text="inside slope = how fast the crank turns" at={thatFactor + 6} size={40} role="a" />
		</>
	);
};

// ---------- 4. why the rates multiply ----------
/** Lesson-local rate chain at stage size: 52 px labels, 44 px values, brackets on one shared scale. */
const ChainRow: React.FC<{y: number; label: React.ReactNode; vals: string; change: string; len: number; color: string; at: number}> = ({y, label, vals, change, len, color, at}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14), g = smooth(prog(f, at + 8, 22));
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<div style={{position: 'absolute', left: 96, top: y - 10}}>
				<div style={DISPLAY(52, color)}>{label}</div>
				<div style={{...DISPLAY(44, INK, 700), fontVariantNumeric: 'tabular-nums'}}>{vals}</div>
			</div>
			<FrameSvg>
				<line x1={560} x2={560 + 470} y1={y + 46} y2={y + 46} stroke="#e7dccb" strokeWidth={14} strokeLinecap="round" />
				<path d={`M560,${y + 16} V${y + 46} H${560 + len * g} V${y + 16}`} stroke={color} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			</FrameSvg>
			<div style={{position: 'absolute', left: 560 + len * g + 22, top: y + 8, ...DISPLAY(44, color), fontVariantNumeric: 'tabular-nums'}}>{change}</div>
		</div>
	);
};
const ChainLink: React.FC<{y: number; text: string; color: string; at: number; glow: number; tag: string}> = ({y, text, color, at, glow, tag}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<FrameSvg>
				<line x1={600} x2={600} y1={y} y2={y + 62} stroke={color} strokeWidth={6} strokeLinecap="round" />
				<path d={`M586,${y + 48} L600,${y + 64} L614,${y + 48}`} stroke={color} strokeWidth={6} fill="none" strokeLinecap="round" />
			</FrameSvg>
			<div style={{position: 'absolute', left: 636, top: y + 4, padding: '0 14px', borderRadius: 12, boxShadow: glow > 0 ? `0 0 0 ${6 * glow}px ${color}` : undefined, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color, whiteSpace: 'pre'}}>{text}<span style={{fontSize: 38, marginLeft: 24}}>{tag}</span></div>
		</div>
	);
};
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const follow = cue(id, 'Follow'), move = cue(id, 'Move x'), two = cue(id, 'two'), four = cue(id, 'four'), elev = cue(id, 'one one'), chainSay = cue(id, "That's why"), rates = cue(id, 'Rates along');
	const pulseB = vis(f, chainSay + 10, chainSay + 50), pulseT = vis(f, chainSay + 50, chainSay + 90);
	const k = 420 / 0.0201;
	return (
		<>
			<SceneHeading text="Why the rates multiply" at={-24} />
			<Legend />
			<Enter at={follow} style={{position: 'absolute', left: 96, top: 172}}>
				<span style={DISPLAY(44)}>A small step at x = 1: move x by 0.01</span>
			</Enter>
			<ChainRow y={290} label="x" vals="1.00 → 1.01" change="change 0.01" len={0.01 * k} color={INK} at={move} />
			<ChainLink y={410} text="× 2x = × 2" tag="inside slope" color={BLUE} at={two} glow={pulseB} />
			<ChainRow y={510} label={<>u = x²</>} vals="1.0000 → 1.0201" change="change 0.0201" len={0.0201 * k} color={BLUE} at={two} />
			<ChainLink y={630} text="× cos 1 ≈ 0.540" tag="outside slope" color={TEAL} at={four} glow={pulseT} />
			<ChainRow y={730} label="y = sin u" vals="0.8415 → 0.8522" change="change 0.0107" len={0.0107 * k} color={INK} at={four} />
			<FunctionSimulator x={1300} y={240} width={524} height={400} window={W3} family={SINSQ} timeline={[{frame: 0, x: 1}]} color={INK}
				xTicks={[1, 2]} yTicks={[-1, 1]} xLabel="x" yLabel="y" point={{at: -30}} tangent={{at: -30, halfLength: 130}} at={-30} />
			<CurveLabel x={1500} y={250} size={40}>y = sin(x²)</CurveLabel>
			<Chip x={1310} y={680} at={-30} size={40} color={VIOLET} glow={vis(f, rates, 99999)}><span style={{color: VIOLET}}>gradient at x = 1: 1.081</span></Chip>
			<RecallChip x={1310} y={780} at={elev} size={34}>0.540 × 0.0201 ≈ 0.0109</RecallChip>
			<Enter at={rates} style={{position: 'absolute', left: 84, top: 872}}>
				<div style={{display: 'inline-flex', alignItems: 'baseline', gap: 22, background: CARD, border: `5px solid ${MATH_ANSWER}`, borderRadius: 16, padding: '0 20px 4px', boxShadow: CARD_SHADOW}}>
					<span style={DISPLAY(52)}>dy/dx = dy/du × du/dx = <Te>cos(x²)</Te> × <Bl>2x</Bl></span>
					<span style={DISPLAY(34, INK_SOFT, 700)}>at x = 1: 2 cos 1 ≈ 1.081</span>
				</div>
			</Enter>
		</>
	);
};
