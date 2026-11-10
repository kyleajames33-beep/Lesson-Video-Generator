// Scenes 1, 1a, 2, 3 and 4: d06's frame and the guess, the growing deck, the rectangle, the two turns on the graph.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, INK, INK_SOFT, prog} from '../../kit';
import {
	AreaStrips, FrameSvg, FunctionSimulator, GrowthBars, HandTag, LiveReadoutBoard, SceneHeading, fmtNum, kf, smooth, vis,
	MATH_MISTAKE, CARD, CARD_SHADOW,
} from '../../math/studio';
import type {FnKey} from '../../math/studio';
import {HandoffChrome} from '../math-a12-d06/s3';
import {cue} from './common';
import {
	BLUE, Bl, Chip, CurveLabel, DECK_TOP, DISPLAY, DeckImg, DeckTop, EXSIN, HANDOFF_STAGE, HANDOFF_WIN, HandNote, Legend, PI, RecallChip, Sup, TEAL, TanLine, Te, VIOLET, deckH, gmap,
} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const X_TICKS = [{value: PI / 4, label: 'π/4'}, {value: PI / 2, label: 'π/2'}, {value: 3 * PI / 4, label: '3π/4'}, {value: PI, label: 'π'}];
const X0 = PI / 2, Y0 = Math.exp(X0);
const EX = <>e<Sup>x</Sup></>;

// ---------- 1. hook: d06's frame, then the guess against the curve ----------
export const S01: React.FC = () => {
	const id = 'scene-01';
	const f = useCurrentFrame();
	const now = cue(id, 'Now'), width = cue(id, 'width'), ex = cue(id, "Here's e to the x"), sx = cue(id, "here's sine x"), product = cue(id, 'product'), guess = cue(id, 'A quick guess'), flat = cue(id, 'flat'), steeply = cue(id, 'steeply');
	const g = smooth(prog(f, now, 36));
	const T = {x: 96, y: 250, w: 1100, h: 660};
	const S = HANDOFF_STAGE;
	const box = {x: lerp(S.x, T.x, g), y: lerp(S.y, T.y, g), w: lerp(S.w, T.w, g), h: lerp(S.h, T.h, g)};
	const M = gmap(box.x, box.y, box.w, box.h, HANDOFF_WIN);
	const chrome = 1 - prog(f, now - 12, 14);
	const [px, py] = M.pt(X0, Y0);
	const tanO = 1 - 0.6 * vis(f, guess, steeply);
	const solidEx = vis(f, ex, product), solidSin = vis(f, sx, product);
	return (
		<>
			{/* d06's final frame (held) */}
			<div style={{position: 'absolute', inset: 0, opacity: chrome}}><HandoffChrome headingOut={now - 12} headingAt={-300} /></div>
			<SceneHeading text="Differentiating a product: how do both factors contribute?" at={now + 6} size={56} />
			<FunctionSimulator x={box.x} y={box.y} width={box.w} height={box.h} window={HANDOFF_WIN} family={EXSIN} timeline={[{frame: 0, x: X0}]} color={INK} at={-30}
				xTicks={X_TICKS} yTicks={[2, 4, 6, 8]} xLabel="x (radians)" yLabel="y"
				curves={[
					{fn: x => Math.exp(x), at: -30, color: TEAL, width: 4, dash: '12 9', domain: [-0.5, Math.log(8.2)]},
					{fn: x => Math.sin(x), at: -30, color: BLUE, width: 4, dash: '12 9'},
					{fn: x => Math.exp(x), at: ex, out: product, color: TEAL, width: 7, domain: [-0.5, Math.log(8.2)]},
					{fn: x => Math.sin(x), at: sx, out: product, color: BLUE, width: 7},
				]}
				point={{at: -30}}
				overlay={() => (
					<FrameSvg>
						<TanLine M={M} X={X0} Y={Y0} m={Y0} half={170} opacity={tanO} width={6 + 4 * vis(f, steeply, steeply + 60)} />
						{f >= flat ? <>
							<line x1={px - 200} x2={px + 200} y1={py} y2={py} stroke={INK_SOFT} strokeWidth={5} strokeDasharray="14 10" opacity={prog(f, flat + 6, 14)} />
							<circle cx={px} cy={py} r={36} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, flat, 10)} />
						</> : null}
					</FrameSvg>
				)} />
			<CurveLabel x={M.pt(0.05, 7.6)[0]} y={M.pt(0.05, 7.6)[1]} size={46} opacity={1 - 0.5 * solidEx - 0.5 * solidSin}>y = {EX} sin x</CurveLabel>
			<CurveLabel x={M.pt(1.75, 6.3)[0]} y={M.pt(1.75, 6.3)[1]} size={38 + 8 * solidEx} color={TEAL}>{f >= ex ? <>u = {EX}</> : EX}</CurveLabel>
			<CurveLabel x={M.pt(2.8, 1.5)[0]} y={M.pt(2.8, 1.5)[1]} size={38 + 8 * solidSin} color={BLUE}>{f >= sx ? 'v = sin x' : 'sin x'}</CurveLabel>
			<Chip x={M.pt(X0, 0)[0] - 330} y={M.pt(0, Y0)[1] - 40} at={-30} out={guess} size={44} color={VIOLET}><span style={{color: VIOLET}}>gradient ?</span></Chip>
			<HandTag x={px + 40} y={py + 70} text="guess: slope 0" at={flat + 10} out={steeply} size={40} color={INK_SOFT} />
			<HandTag x={px + 40} y={py + 70} text="climbing steeply" at={steeply + 6} size={44} color={VIOLET} />
			{/* the anchor */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, now + 4, 16), transform: `translateX(${(1 - smooth(prog(f, now + 4, 26))) * 90}px)`}}>
				{f >= now ? <>
					<DeckImg x={1240} y={280} w={584} />
					<HandTag x={1290} y={300 + deckH(584) + 18} text="length" at={now + 30} size={40} role="b" />
					<HandTag x={1700} y={300 + deckH(584) - 34} text="width" at={now + 50} size={40} role="a" />
				</> : null}
			</div>
			<Chip x={1240} y={560} at={width} size={42}>area = <Te>length</Te> × <Bl>width</Bl></Chip>
			<HandTag x={1250} y={660} text="a product" at={width + 14} size={40} color={INK} />
			<Enter at={guess} style={{position: 'absolute', left: 1240, top: 720, width: 584}}>
				<div style={{background: CARD, borderRadius: 18, padding: '8px 22px 12px', boxShadow: CARD_SHADOW, border: `3px dashed ${INK_SOFT}`}}>
					<div style={DISPLAY(30, INK_SOFT, 700)}>guess: multiply the derivatives</div>
					<div style={DISPLAY(40)}>(<Te>{EX}</Te>)′ × (<Bl>sin x</Bl>)′ = {EX} cos x</div>
				</div>
			</Enter>
			<RecallChip x={1240} y={880} at={flat} size={30}>at π/2: cos x = 0</RecallChip>
		</>
	);
};

// ---------- 1a. a deck that grows both ways ----------
export const S01a: React.FC = () => {
	const id = 'scene-01a';
	const f = useCurrentFrame();
	const oneM = cue(id, 'one metre a day'), halfM = cue(id, 'half a metre a day'), day1 = cue(id, 'day', 3), watch = cue(id, 'Now watch'), strip1 = cue(id, 'is two square metres'), day2 = cue(id, 'another two'), four = cue(id, 'grows at four'), eight = cue(id, 'eight times'), each = cue(id, "Each side's");
	// Day clock: run 0 to ½ day, hold, rewind to 0 for the rates.
	const g0 = watch + 14, g1 = g0 + 120, r0 = strip1 - 46, r1 = strip1 - 16;
	const tRun = kf(f, [[g0, 0], [g1, 0.5]], false);
	const rewound = f >= r1;
	const t = f < r0 ? tRun : kf(f, [[r0, 0.5], [r1, 0]]);
	const L = 4 + t, Wd = 2 + 0.5 * t;
	const D = {x: 170, y: 880, w: 640};
	const unit = D.w / 4;
	const ratePhase = f >= r1;
	return (
		<>
			<SceneHeading text="A deck that grows both ways" at={-24} />
			<Legend items={[[TEAL, 'length'], [BLUE, 'width'], [VIOLET, 'area rate']]} />
			<FunctionSimulator x={96} y={150} width={380} height={250} window={HANDOFF_WIN} family={EXSIN} timeline={[{frame: 0, x: X0}]} color={INK}
				xTicks={[{value: PI / 2, label: 'π/2'}]} yTicks={[4, 8]} xLabel="" yLabel="" point={{at: -30}} tangent={{at: -30, halfLength: 70}} />
			{/* the growing deck, then the one-day rate strips */}
			{!ratePhase ? <DeckTop x={D.x} y={D.y} w={D.w} dl={t} dw={0.5 * t} /> : <>
				<DeckTop x={D.x} y={D.y} w={D.w} dl={1e-6} dw={1e-6} stripsAt={-30} />
				<AreaStrips x={D.x} y={D.y} unit={unit} u={4} v={2} du={1} dv={0} roles={{u: 'b', v: 'a', corner: 'inner'}} at={strip1} plate={{spec: DECK_TOP, region: DECK_TOP.box, u0: 4, v0: 2, w: D.w}} />
				<AreaStrips x={D.x} y={D.y} unit={unit} u={4} v={2} du={0} dv={0.5} roles={{u: 'b', v: 'a', corner: 'inner'}} at={day2} plate={{spec: DECK_TOP, region: DECK_TOP.box, u0: 4, v0: 2, w: D.w}} />
			</>}
			<CurveLabel x={D.x + 2 * unit - 40} y={D.y + 10} size={42} color={TEAL}>{fmtNum(L, 2)} m</CurveLabel>
			<CurveLabel x={D.x - 20} y={D.y - unit - 26} size={42} color={BLUE} anchor="end">{fmtNum(Wd, 2)} m</CurveLabel>
			<HandTag x={D.x + D.w + 10} y={D.y + 38} text="+1 m per day →" at={oneM} out={watch} size={40} role="b" />
			<HandTag x={D.x + 10} y={D.y - 2 * unit - 34} text="↑ +0.5 m per day" at={halfM} out={watch} size={40} role="a" />
			{!rewound && f >= g1 - 20 ? <HandTag x={D.x + D.w + 4} y={D.y - 2.3 * unit - 30} text="corner: change × change" at={g1 - 10} size={34} color={INK_SOFT} anchor="end" /> : null}
			{rewound ? <>
				<Chip x={D.x + 150} y={D.y - 200} at={strip1 + 10} size={34} color={TEAL}><Te>1 m/day × 2 m = 2 m²/day</Te></Chip>
				<Chip x={D.x + 60} y={D.y - 2.5 * unit - 74} at={day2 + 10} size={34} color={BLUE}><Bl>4 m × 0.5 m/day = 2 m²/day</Bl></Chip>
			</> : null}
			<LiveReadoutBoard x={1000} y={150} width={824} inline rows={[
				{label: 'day', value: t, digits: 2},
				{label: 'length', value: L, digits: 2, role: 'b', unit: 'm'},
				{label: 'width', value: Wd, digits: 2, role: 'a', unit: 'm'},
				{label: 'area', value: L * Wd, digits: 2, unit: 'm²'},
				{label: 'guess: 1 × 0.5', value: 0.5, digits: 2, unit: 'm² per day', at: day1, dim: 0.0, mark: {kind: 'circle', at: eight, role: 'mistake'}},
				{label: 'area growing at, right now', value: 4, digits: 2, role: 'gradient', unit: 'm² per day', at: four, glow: [four, four + 90]},
			]} />
			<GrowthBars x={1000} y={672} w={824} max={2.3} title="area added since day 0" rows={[
				{label: 'real', value: 4 * tRun + 0.5 * tRun * tRun, digits: 2, unit: 'm²'},
				{label: 'guess', value: 0.5 * tRun, digits: 2, unit: 'm²', dashed: true},
			]} />
			<HandTag x={1010} y={872} text="the guess falls behind" at={g1 - 30} out={each - 6} size={40} color={MATH_MISTAKE} />
			<HandTag x={1290} y={646} text="× 8 the guess" at={eight + 6} size={44} color={MATH_MISTAKE} />
			<HandTag x={1004} y={872} text="each side's growth × the other side's size" at={each} size={38} color={INK} />
		</>
	);
};

// ---------- 2. the rectangle behind the rule ----------
const R = {x: 470, y: 880, unit: 350};
const MIN_STRIP = 48;
export const S02: React.FC = () => {
	const id = 'scene-02';
	const f = useCurrentFrame();
	const nudge = cue(id, 'Now nudge'), side = cue(id, 'side'), top = cue(id, 'top'), corner = cue(id, 'The corner'), shrinks = cue(id, 'shrinks'), twoWays = cue(id, 'So the area'), divide = cue(id, 'Divide'), prime = cue(id, 'u prime v');
	const h = kf(f, [[nudge, 0.0001], [nudge + 50, 0.3], [shrinks, 0.3], [shrinks + 60, 0.02]]);
	const u = Math.E, v = Math.sin(1), du = Math.exp(1 + h) - u, dv = Math.sin(1 + h) - v;
	const glowT = vis(f, twoWays + 10, twoWays + 60), glowB = vis(f, twoWays + 60, twoWays + 110);
	// The strips are drawn at least MIN_STRIP px thick so they stay visible; a tag says so when exaggerated.
	const W = u * R.unit, H = v * R.unit;
	const sw = Math.max(du * R.unit, MIN_STRIP) * smooth(prog(f, side, 20)), th = Math.max(dv * R.unit, MIN_STRIP) * smooth(prog(f, top, 20));
	const shrinkK = Math.min(1, h / 0.3) ** 1.6;
	const cw = sw * shrinkK, ch = th * shrinkK;
	const exaggerated = f >= top && (du * R.unit < MIN_STRIP || dv * R.unit < MIN_STRIP);
	const x0 = R.x, y0 = R.y - H;
	return (
		<>
			<SceneHeading text="The rectangle behind the rule" at={-24} />
			<Legend />
			<FunctionSimulator x={96} y={150} width={520} height={330} window={HANDOFF_WIN} family={EXSIN} timeline={[{frame: 0, x: 1}, {frame: nudge, x: 1}, {frame: nudge + 50, x: 1.3}, {frame: shrinks, x: 1.3}, {frame: shrinks + 60, x: 1.02}]} color={INK}
				xTicks={[1]} yTicks={[4, 8]} xLabel="x" yLabel="y" point={{at: -30}} at={-30} />
			<DeckImg x={1560} y={150} w={264} />
			<HandTag x={1580} y={270} text="same picture" at={-10} size={36} color={INK_SOFT} />
			<FrameSvg>
				<rect x={x0} y={y0} width={W} height={H} fill="#e9d2a8" stroke={INK} strokeWidth={5} />
				{sw > 0.5 ? <rect x={x0 + W} y={y0} width={sw} height={H} fill="#bfe3e3" stroke={TEAL} strokeWidth={5} /> : null}
				{th > 0.5 ? <rect x={x0} y={y0 - th} width={W} height={th} fill="#c9def2" stroke={BLUE} strokeWidth={5} /> : null}
				{th > 0.5 && sw > 0.5 && cw > 1 ? <rect x={x0 + W} y={y0 - ch} width={cw} height={ch} fill="#ddd5c6" stroke={INK_SOFT} strokeWidth={4} /> : null}
				{glowT > 0 ? <rect x={x0 + W} y={y0} width={sw} height={H} fill="none" stroke={TEAL} strokeWidth={12} opacity={glowT} /> : null}
				{glowB > 0 ? <rect x={x0} y={y0 - th} width={W} height={th} fill="none" stroke={BLUE} strokeWidth={12} opacity={glowB} /> : null}
			</FrameSvg>
			<div style={{position: 'absolute', left: x0, width: W, top: y0 + H / 2 - 30, textAlign: 'center', ...DISPLAY(48, INK, 800)}}>area = uv</div>
			<div style={{position: 'absolute', left: x0, width: W, top: R.y + 14, textAlign: 'center', ...DISPLAY(44, TEAL)}}>u = e<Sup>x</Sup> ≈ 2.72</div>
			<CurveLabel x={x0 - 22} y={y0 + H / 2 - 50} anchor="end" size={44} color={BLUE}>v = sin x</CurveLabel>
			<CurveLabel x={x0 - 22} y={y0 + H / 2 + 6} anchor="end" size={34} color={INK_SOFT}>≈ 0.84</CurveLabel>
			<RecallChip x={96} y={900} at={-30} size={30}>at x = 1: e¹ by sin 1</RecallChip>
			<HandTag x={x0 + W - 30} y={R.y + 96} text="change in u × v" at={side + 10} size={42} role="b" />
			<HandTag x={x0 + 300} y={y0 - th - 34} text="u × change in v" at={top + 10} size={42} role="a" />
			<HandTag x={x0 + W + 10} y={y0 - th - 36} text={f < shrinks + 30 ? 'change × change' : 'vanishes'} at={corner} size={38} color={INK_SOFT} />
			{exaggerated ? <HandTag x={x0 + 20} y={y0 + 40} text="strips not to scale" at={shrinks + 20} size={36} color={INK_SOFT} /> : null}
			<LiveReadoutBoard x={660} y={160} width={560} size={64} labelSize={36} at={-30} out={divide - 6} inline rows={[
				{label: 'x', value: 1 + h, digits: 2},
				{label: 'nudge', value: h, digits: 2},
			]} />
			<RecallChip x={1250} y={215} at={divide} size={30}>Year 11 product rule</RecallChip>
			<Enter at={divide + 10} style={{position: 'absolute', left: 660, top: 190}}>
				<div style={{display: 'inline-block', background: CARD, borderRadius: 18, padding: '4px 26px 10px', boxShadow: CARD_SHADOW, border: '3px solid rgba(60,45,20,0.14)', ...DISPLAY(60)}}>(uv)′ = <Te>u′v</Te> + <Bl>uv′</Bl></div>
			</Enter>
			<HandTag x={860} y={320} text="u's turn" at={prime - 20} size={40} role="b" />
			<HandTag x={1060} y={320} text="v's turn" at={prime} size={40} role="a" />
			<HandNote x={1250} y={300} lines={['one factor changes,', 'the other stays']} at={twoWays - 10} out={divide - 6} size={40} color={INK} />
		</>
	);
};

// ---------- 3 and 4. both turns on the graph ----------
const G3 = {x: 96, y: 150, w: 1150, h: 730};
const turnRows = (opts: {bars?: boolean; glowSum?: [number, number]; glowU?: [number, number]; glowV?: [number, number]}) => [
	{label: 'gradient', role: 'gradient' as const, value: (s: {u: number}) => Math.exp(s.u) * (Math.sin(s.u) + Math.cos(s.u)), digits: 2, glow: opts.glowSum},
	{label: "u′v: eˣ's turn", role: 'b' as const, value: (s: {u: number}) => Math.exp(s.u) * Math.sin(s.u), digits: 2, glow: opts.glowU, bar: opts.bars ? {max: 8, width: 150} : undefined},
	{label: "uv′: sin x's turn", role: 'a' as const, value: (s: {u: number}) => Math.exp(s.u) * Math.cos(s.u), digits: 2, glow: opts.glowV, bar: opts.bars ? {max: 8, width: 150} : undefined},
];
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const eTurn = cue(id, "E to the x's turn"), sTurn = cue(id, "Sine's turn"), tangent = cue(id, 'tangent'), slide = cue(id, 'slide'), zero = cue(id, 'turn is zero'), one = cue(id, 'eight one'), theGuess = cue(id, 'The guess');
	const T: FnKey[] = [{frame: 0, x: 1}, {frame: slide, x: 1}, {frame: slide + 45, x: X0}];
	const M = gmap(G3.x, G3.y, G3.w, G3.h, HANDOFF_WIN);
	const [tx, ty] = M.pt(X0, 1);
	const [gx, gy] = M.pt(X0, Y0);
	return (
		<>
			<SceneHeading text="Both turns on the graph" at={-24} />
			<Legend />
			<FunctionSimulator x={G3.x} y={G3.y} width={G3.w} height={G3.h} window={HANDOFF_WIN} family={EXSIN} timeline={T} color={INK}
				xTicks={X_TICKS} yTicks={[2, 4, 6, 8]} xLabel="x (radians)" yLabel="y"
				curves={[{fn: x => Math.sin(x), at: zero, color: BLUE, width: 4, dash: '12 9'}, {fn: x => Math.exp(x), at: -30, color: TEAL, width: 4, dash: '12 9', domain: [-0.5, Math.log(8.2)]}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 190}}
				readout={{x: 1290, y: 170, width: 534, at: -30, rows: [
					{...turnRows({glowSum: [tangent, tangent + 80]})[0]},
					{...turnRows({glowU: [one, 99999]})[1], at: eTurn},
					{...turnRows({glowV: [zero, one]})[2], at: sTurn},
				]}} />
			<CurveLabel x={M.pt(0.05, 7.6)[0]} y={M.pt(0.05, 7.6)[1]} size={44}>y = {EX} sin x</CurveLabel>
			<CurveLabel x={M.pt(1.75, 6.3)[0]} y={M.pt(1.75, 6.3)[1]} size={38} color={TEAL}>u = {EX}</CurveLabel>
			<CurveLabel x={M.pt(2.75, 1.6)[0]} y={M.pt(2.75, 1.6)[1]} size={38} color={BLUE} at={zero}>v = sin x</CurveLabel>
			<FrameSvg>
				{f >= zero ? <line x1={tx - 60} x2={tx + 60} y1={ty} y2={ty} stroke={VIOLET} strokeWidth={6} opacity={prog(f, zero + 6, 12)} /> : null}
				{f >= theGuess ? <>
					<line x1={gx - 190} x2={gx + 190} y1={gy} y2={gy} stroke={INK_SOFT} strokeWidth={5} strokeDasharray="14 10" opacity={prog(f, theGuess, 12)} />
					<line x1={gx + 110} y1={gy - 26} x2={gx + 170} y2={gy + 26} stroke={MATH_MISTAKE} strokeWidth={7} opacity={prog(f, theGuess + 10, 8)} />
				</> : null}
			</FrameSvg>
			<HandTag x={tx + 70} y={ty + 40} text="sin x level here" at={zero + 10} size={38} role="a" />
			<Chip x={1290} y={560} at={tangent} size={40}><Te>u′v</Te> + <Bl>uv′</Bl> = <span style={{color: VIOLET}}>gradient</span></Chip>
			<HandTag x={1300} y={680} text="eˣ still growing: its turn = whole slope" at={one - 30} size={36} role="b" />
			<Chip x={1290} y={740} at={theGuess} size={36} color={MATH_MISTAKE}>guess: slope × slope = 0 ✗</Chip>
			<RecallChip x={1290} y={850} at={-30} size={30}>x in radians</RecallChip>
		</>
	);
};

export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const past = cue(id, 'Past'), down = cue(id, 'down'), up = cue(id, 'up'), six = cue(id, 'four six'), flat = cue(id, 'flat'), why = cue(id, "That's why"), still = cue(id, 'still growing');
	const X3 = 3 * PI / 4;
	const T: FnKey[] = [{frame: 0, x: X0}, {frame: past + 10, x: X0}, {frame: cue(id, 'At three') + 10, x: X3}];
	const M = gmap(G3.x, G3.y, G3.w, G3.h, HANDOFF_WIN);
	const [sx0] = M.pt(X0, 0), [, sy1] = M.pt(0, 1), [px3, py3] = M.pt(X3, (Math.SQRT2 / 2) * Math.exp(X3)), [, zy] = M.pt(0, 0);
	const guides = prog(f, why, 14);
	return (
		<>
			<SceneHeading text="Where the turns cancel" at={-24} />
			<Legend />
			<FunctionSimulator x={G3.x} y={G3.y} width={G3.w} height={G3.h} window={HANDOFF_WIN} family={EXSIN} timeline={T} color={INK}
				xTicks={X_TICKS} yTicks={[2, 4, 6, 8]} xLabel="x (radians)" yLabel="y"
				curves={[{fn: x => Math.sin(x), at: -30, color: BLUE, width: 4, dash: '12 9'}, {fn: x => Math.exp(x), at: -30, color: TEAL, width: 4, dash: '12 9', domain: [-0.5, Math.log(8.2)]}]}
				point={{at: -30}} tangent={{at: -30, halfLength: 190}}
				readout={{x: 1290, y: 170, width: 534, at: -30, rows: turnRows({bars: true, glowSum: [flat, flat + 90]})}} />
			<CurveLabel x={M.pt(0.05, 7.6)[0]} y={M.pt(0.05, 7.6)[1]} size={44}>y = {EX} sin x</CurveLabel>
			<CurveLabel x={M.pt(2.75, 1.6)[0]} y={M.pt(2.75, 1.6)[1]} size={38} color={BLUE}>v = sin x</CurveLabel>
			<FrameSvg>
				<g opacity={guides}>
					<line x1={sx0} x2={sx0} y1={sy1} y2={zy} stroke={BLUE} strokeWidth={4} strokeDasharray="4 9" strokeLinecap="round" />
					<line x1={sx0 - 50} x2={sx0 + 50} y1={sy1} y2={sy1} stroke={VIOLET} strokeWidth={6} />
					<line x1={px3} x2={px3} y1={py3} y2={zy} stroke={INK} strokeWidth={4} strokeDasharray="4 9" strokeLinecap="round" />
				</g>
			</FrameSvg>
			<HandTag x={sx0 + 10} y={zy + 40} text="sin x levels off" at={why + 6} size={34} role="a" />
			<HandTag x={px3 + 14} y={zy - 40} text="product levels off" at={why + 30} size={34} color={INK} />
			<HandTag x={sx0 + 20} y={(sy1 + py3) / 2 + 40} text="eˣ still growing →" at={still} size={36} role="b" />
			<HandTag x={1300} y={556} text="↓ pulls the slope down" at={down} size={36} role="a" />
			<HandTag x={1300} y={600} text="↑ eˣ's turn pushes up" at={up} size={36} role="b" />
			<Chip x={1290} y={650} at={flat} size={40}><Te>u′v</Te> + <Bl>uv′</Bl> = 0: flat</Chip>
			<RecallChip x={96} y={892} at={six} size={30}>sin(3π/4) = √2/2, cos(3π/4) = −√2/2, so the turns are ±(√2/2)e^(3π/4)</RecallChip>
		</>
	);
};
