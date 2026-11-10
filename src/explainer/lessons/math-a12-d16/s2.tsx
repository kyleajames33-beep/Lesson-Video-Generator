// Scenes 3 to 5: how the gradient changes the bend (the tangent rides the cubic above its gradient graph; cap and
// cup), where the bend switches (the inflection at (2, 2), then the vase at its widest part), and zero isn't
// enough (the sign of f″ either side; y = x⁴).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, INK, INK_SOFT, prog} from '../../kit';
import {ConcavityGlyphs, CupCapGlyph, FrameSvg, FunctionSimulator, HandTag, LiveReadoutBoard, MistakeCard, SceneHeading, SignStrip, StudioStackedDerivativePanels, kf, makePlot, vis} from '../../math/studio';
import {cue} from './common';
import {HP, BoxCard, Bl, CAPC, CUBIC, CUPC, Chip, CurveLabel, Diamond, GREEN, LevelGraph, Line, Ol, QUART, RED, Ring, TintRect, TurnArc, V, VIOLET, VaseRig, VaseStrip, f1, f2, stubLine} from './parts';

export const WX: [number, number] = [-0.3, 4.3];
const SX = 30, SY = 160, SW = 1060, PH: [number, number] = [400, 300], GAP = 10;
export const TOP = makePlot(SX, SY, SW, PH[0], {x: WX, y: [-2, 6]});
export const MID = makePlot(SX, SY + PH[0] + GAP, SW, PH[1], {x: WX, y: [-4, 12]});
const tmap = (m: typeof TOP) => ({pt: m.pf, sx: m.sx, sy: m.sy});
const RX = 1120;

/** The cubic over its gradient graph (one x scale), with a riding tangent; tints and marks are drawn by the scene. */
const Paired: React.FC<{X: number; rings?: React.ComponentProps<typeof StudioStackedDerivativePanels>['rings']; columns?: React.ComponentProps<typeof StudioStackedDerivativePanels>['columns']; markers?: React.ComponentProps<typeof StudioStackedDerivativePanels>['markers']}> = ({X, rings, columns, markers}) => (
	<StudioStackedDerivativePanels x={SX} y={SY} width={SW} panelHeight={PH} gap={GAP} windowX={WX} xTicks={[1, 2, 3, 4]} at={-60}
		panels={[
			{fn: x => CUBIC.f(x, {}), df: x => CUBIC.df(x, {}), y: [-2, 6], yTicks: [2, 4], label: 'y = f(x)'},
			{fn: f1, y: [-4, 12], yTicks: [-3, 3, 6, 9], label: 'f′(x)'},
		]}
		rider={{keys: [{frame: 0, x: X}], at: -60}} rings={rings} columns={columns} markers={markers} />
);
/** Violet point on the f′ panel and the dashed guide joining it to the rider. */
const RiderLink: React.FC<{X: number; o?: number}> = ({X, o = 1}) => {
	const a = TOP.pf(X, CUBIC.f(X, {})), b = MID.pf(X, f1(X));
	return <g opacity={o}>
		<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={VIOLET} strokeWidth={3} strokeDasharray="6 9" />
		<circle cx={b[0]} cy={b[1]} r={12} fill={VIOLET} stroke="#fffdf8" strokeWidth={4} />
	</g>;
};
const tintBox = (m: typeof TOP, x0: number, x1: number) => ({x0: m.pf(x0, 0)[0], x1: m.pf(x1, 0)[0], top: m.y + m.box.top, height: m.box.height});
const ghost = (X: number, o: number) => (o <= 0.001 ? null : <line key={X} {...stubLine(tmap(TOP), X, CUBIC.f(X, {}), CUBIC.df(X, {}), 0, 150)} stroke={VIOLET} strokeWidth={4} strokeDasharray="10 8" opacity={o} />);

// ---------- 3. how the gradient changes the bend ----------
export const S03: React.FC = () => {
	const id = 'scene-03';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const left = c('On the left'), clockwise = c('clockwise'), down = c('bends down'), conDown = c('called concave down'), below = c('below its tangents'), notSame = c("isn't the same"), rises = c('rises,'), falls = c('then falls'), time = c('whole time'), right = c('On the right'), anti = c('anticlockwise'), up = c('bends up'), conUp = c('concave up.'), above = c('above its tangents'), now = c('Now,'), gg = c('gradient of this'), neg = c('negative'), pos = c('positive'), so = c('So f double');
	const X = kf(f, [[left, 0.2], [down, 1.97], [right, 2.0], [up + 10, 4.2]], false);
	const capO = prog(f, down, 16), cupO = prog(f, up, 16);
	const cap = tintBox(TOP, WX[0], 2), cup = tintBox(TOP, 2, WX[1]);
	const P = TOP.pf(X, CUBIC.f(X, {}));
	const arcCw = vis(f, left + 20, down + 30, 10), arcAc = vis(f, right + 10, up + 30, 10);
	const stubO = prog(f, gg, 14);
	const M1 = MID.pf(1, f1(1)), M3 = MID.pf(3, f1(3));
	return (
		<>
			<SceneHeading text="How the gradient changes the bend" at={4} size={56} />
			<Paired X={X} />
			<FrameSvg>
				<TintRect {...cap} color={CAPC} o={capO} />
				<TintRect {...cup} color={CUPC} o={cupO} />
				<RiderLink X={X} />
				<TurnArc p={[P[0] + 40, P[1] - 60]} dir={1} o={arcCw} />
				<TurnArc p={[P[0] + 40, P[1] - 60]} dir={-1} o={arcAc} />
				{ghost(0.5, vis(f, below, notSame, 12))}{ghost(1.5, vis(f, below + 8, notSame, 12))}
				{ghost(2.6, vis(f, above, now, 12))}{ghost(3.5, vis(f, above + 8, now, 12))}
				<g opacity={stubO}>
					<line {...stubLine(tmap(MID), 1, f1(1), -6, 0, 70)} stroke="#1f6fb2" strokeWidth={8} strokeLinecap="round" />
					<line {...stubLine(tmap(MID), 3, f1(3), 6, 0, 70)} stroke="#1f6fb2" strokeWidth={8} strokeLinecap="round" />
				</g>
				{(() => {const a = TOP.pf(-0.2, 4.6), b = TOP.pf(1.95, 4.6); const o = vis(f, time - 20, right, 12); return <path d={`M${a[0]},${a[1] + 14} V${a[1]} H${b[0]} V${b[1] + 14}`} stroke={RED} strokeWidth={4} fill="none" opacity={o} />;})()}
			</FrameSvg>
			<ConcavityGlyphs cells={[{from: WX[0], to: 2, sign: -1}]} toFrame={TOP.pf} Y={-1.1} at={down} words />
			<ConcavityGlyphs cells={[{from: 2, to: WX[1], sign: 1}]} toFrame={TOP.pf} Y={-1.1} at={up} words />
			<CurveLabel x={M1[0] + 20} y={M1[1] + 30} at={neg} size={40} color="#1f6fb2">f″ &lt; 0</CurveLabel>
			<CurveLabel x={M3[0] + 30} y={M3[1] - 20} at={pos} size={40} color="#1f6fb2">f″ &gt; 0</CurveLabel>
			<HandTag x={TOP.pf(-0.2, 0)[0]} y={TOP.pf(0, 5.6)[1] - 10} text="increasing, then decreasing:" at={rises} out={right} size={34} color={INK} />
			<HandTag x={TOP.pf(-0.2, 0)[0]} y={TOP.pf(0, 5.6)[1] + 30} text="concave down throughout" at={time - 10} out={right} size={34} color={RED} />
			{/* right column */}
			<LiveReadoutBoard x={RX} y={156} width={740} at={-30} inline rows={[
				{label: 'x', value: X, role: 'a'},
				{label: 'gradient f′(x)', value: f1(X), role: 'gradient'},
			]} />
			<BoxCard x={RX} y={360} at={-30} size={40}><div><V>f′(x) = 3x² − 12x + 9</V></div><div><Bl>f″(x) = 6x − 12</Bl></div></BoxCard>
			<HandTag x={RX} y={520} text="falling gradient: turning clockwise" at={clockwise} out={right} size={40} color={VIOLET} />
			<HandTag x={RX} y={520} text="rising gradient: turning anticlockwise" at={anti} out={gg} size={40} color={VIOLET} />
			<HandTag x={RX} y={520} text="f″ is the gradient of the f′ graph" at={gg + 10} size={40} color="#1f6fb2" />
			<MistakeCard x={RX} y={570} w={740} at={notSame + 10} out={now} size={38} wrong={<>concave down = decreasing</>} caption="this part rises, then falls" />
			<Line x={RX} y={740} at={conDown} size={38}><Ol>concave down</Ol>: below its tangents <CupCapGlyph kind="cap" size={38} /></Line>
			<Line x={RX} y={806} at={conUp} size={38}><Bl>concave up</Bl>: above its tangents <CupCapGlyph kind="cup" size={38} /></Line>
			<BoxCard x={RX} y={570} w={740} at={so} border="#1f6fb2" size={44} bw={4}>
				<div><Bl>f″(x) &gt; 0</Bl>: concave up <CupCapGlyph kind="cup" size={44} /></div>
				<div><Bl>f″(x) &lt; 0</Bl>: concave down <CupCapGlyph kind="cap" size={44} /></div>
			</BoxCard>
		</>
	);
};

// ---------- 4. where the bend switches ----------
export const S04: React.FC = () => {
	const id = 'scene-04';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const stops = c('stops falling'), lowest = c('lowest value'), here = c('here.'), switches = c('switches from'), infl = c('point of inflection'), fOf2 = c('f of two'), twotwo = c('two, two') + 14, crosses = c('crosses'), flat = c("isn't flat"), grad3 = c('gradient is minus'), vase = c('The vase works'), slowest = c('slowest'), widest = c('widest part'), bend = c('switches bend');
	const vaseO = prog(f, vase, 20);
	const cap = tintBox(TOP, WX[0], 2), cup = tintBox(TOP, 2, WX[1]);
	const D = TOP.pf(2, 2);
	const longO = prog(f, crosses, 14);
	const L = stubLine(tmap(TOP), 2, 2, -3, 0, 300);
	const G4 = {x: 760, y: 150, w: 1130, h: 620};
	return (
		<>
			<SceneHeading text="Where the bend switches" at={4} size={56} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - vaseO}}>
				{vaseO < 1 ? <>
					<Paired X={2} rings={[{panel: 1, x: 2, at: here, kind: 'turn', label: 'lowest: −3'}]} columns={[{x: 2, at: here + 6, glow: [infl, crosses]}]} />
					<FrameSvg>
						<TintRect {...cap} color={CAPC} o={1} />
						<TintRect {...cup} color={CUPC} o={1} />
						<RiderLink X={2} />
						{longO > 0.001 ? <line {...L} stroke={VIOLET} strokeWidth={6} strokeLinecap="round" opacity={longO} /> : null}
						<Diamond p={D} o={prog(f, twotwo, 12)} r={17} />
					</FrameSvg>
					<ConcavityGlyphs cells={[{from: WX[0], to: 2, sign: -1}, {from: 2, to: WX[1], sign: 1}]} toFrame={TOP.pf} Y={-1.1} at={-60} words />
					<CurveLabel x={D[0] + 26} y={D[1] - 70} at={twotwo} size={38} color={INK}>point of inflection (2, 2)</CurveLabel>
					<HandTag x={D[0] + 40} y={D[1] + 80} text="the tangent crosses the curve" at={crosses + 8} size={36} color={VIOLET} />
					{/* column */}
					<LiveReadoutBoard x={RX} y={156} width={740} at={-30} inline rows={[
						{label: 'x', value: 2, role: 'a'},
						{label: 'gradient f′(x)', value: f1(2), role: 'gradient', glow: [flat, vase], mark: {kind: 'circle', at: lowest + 20, out: switches}},
					]} />
					<Line x={RX} y={356} at={stops} size={40}><V>f′ stops falling, starts rising</V></Line>
					<BoxCard x={RX} y={430} w={450} at={infl} border={INK} size={40} bw={4} title="Point of inflection">where the concavity changes</BoxCard>
					<Line x={RX} y={610} at={fOf2} size={40}>f(2) = 8 − 24 + 18 = 2</Line>
					<Line x={RX} y={672} at={twotwo} size={44}>inflection at (2, 2)</Line>
					<Line x={RX} y={744} at={grad3} size={42}>gradient <V>−3 ≠ 0</V>:</Line>
					<Line x={RX} y={798} at={grad3} size={42}>not stationary</Line>
					<HandTag x={RX} y={890} text="an inflection need not be flat" at={flat + 30} size={34} color={INK} />
					<VaseRig x={1600} y={420} h={450} t={kf(f, [[0, 1.3], [here, 2]])} tap={false} band={vis(f, here, 2000, 14)} />
					<div style={{position: 'absolute', left: 1560, top: 880, width: 340, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 32, color: VIOLET, lineHeight: 1.15}}>rising at {HP(kf(f, [[0, 1.3], [here, 2]])).toFixed(1)} cm/min{f >= here ? ': slowest' : ''}</div>
				</> : null}
			</div>
			{/* the vase returns */}
			<div style={{position: 'absolute', inset: 0, opacity: vaseO}}>
				{vaseO > 0.001 ? <>
					<VaseRig x={250} y={470} h={560} t={kf(f, [[vase, 1.2], [vase + 40, 2]])} band={vis(f, widest, 2000, 14)} />
					<LevelGraph x={G4.x} y={G4.y} w={G4.w} h={G4.h} t={kf(f, [[vase, 1.2], [vase + 40, 2]])} tangentAt={-60} tints={{cap: -60, cup: -60}}
						overlay={g => <FrameSvg><Diamond p={g.toFrame(2, 14)} o={prog(f, bend - 18, 12)} r={18} /></FrameSvg>} />
					<VaseStrip x={G4.x + 40} y={800} w={1060} t={kf(f, [[vase, 1.2], [vase + 40, 2]])} riseGlow={vis(f, slowest, 2000, 12)} />
					<HandTag x={G4.x + 60} y={950} text="slowest rise = bend switches" at={widest} size={42} color={VIOLET} />
					<Chip x={1260} y={80} at={vase + 10} size={40} color="#8a5a12">widest part: h = 14 cm</Chip>
				</> : null}
			</div>
		</>
	);
};

// ---------- 5. zero isn't enough ----------
const C5 = {x: 30, y: 150, w: 1060, h: 520};
export const S05: React.FC = () => {
	const id = 'scene-05';
	const f = useCurrentFrame();
	const c = (p: string, n = 1) => cue(id, p, n);
	const cand = c('Inflection candidates'), sixX = c('six x minus'), atTwo = c('equals two'), check = c('check that'), m6 = c('minus six'), p6 = c('plus six'), minusPlus = c('Minus to plus'), soCubic = c('So the cubic'), downFor = c('concave down for'), upFor = c('concave up for'), compare = c('Now compare'), twelve = c('twelve x squared'), zeroAt = c('zero at x equals zero'), sides = c('sides.'), allWay = c('all the way'), noInfl = c('no inflection'), zeroThere = c('zero there');
	const M = makePlot(C5.x, C5.y, C5.w, C5.h, {x: WX, y: [-2, 6]});
	const D = M.pf(2, 2);
	const panelO = prog(f, compare, 16);
	return (
		<>
			<SceneHeading text="Zero isn't enough" at={4} size={56} />
			<FunctionSimulator x={C5.x} y={C5.y} width={C5.w} height={C5.h} window={{x: WX, y: [-2, 6]}} family={CUBIC} timeline={[{frame: 0, x: 2}]} color={INK} at={-60}
				xTicks={[1, 2, 3, 4]} yTicks={[2, 4]} xLabel="x" yLabel="y"
				regions={[{x: [WX[0], 2], color: CAPC, opacity: 0.85, at: -60}, {x: [2, WX[1]], color: CUPC, opacity: 0.85, at: -60}]}
				overlay={() => <FrameSvg><Diamond p={D} o={1} r={16} />{(() => {const g = vis(f, minusPlus, soCubic, 10); return g > 0 ? <circle cx={D[0]} cy={D[1]} r={34} fill="none" stroke={GREEN} strokeWidth={6} opacity={g} /> : null;})()}</FrameSvg>} />
			<CurveLabel x={D[0] + 28} y={D[1] + 6} at={-60} size={36} color={INK}>(2, 2)</CurveLabel>
			<SignStrip x={C5.x} y={C5.y + C5.h + 40} width={C5.w} windowX={WX} mode="concavity" at={sixX} rowLabel="f″"
				boundaries={[{x: 2, kind: 'zero', note: {text: 'changes: inflection', at: minusPlus, color: GREEN}}]}
				cells={[{sign: -1, test: {x: '1', value: 'f″ = −6'}, revealAt: m6}, {sign: 1, test: {x: '3', value: 'f″ = +6'}, revealAt: p6}]} />
			{/* column */}
			<div style={{opacity: 1 - prog(f, noInfl - 20, 14)}}>
				<Line x={RX} y={160} at={cand} size={36} color={INK}>candidates: f″ = 0 or f″ undefined</Line>
				<Line x={RX} y={220} at={sixX} size={48}><Bl>f″(x) = 6x − 12 = 0</Bl><span style={{opacity: prog(f, atTwo, 10)}}>:  x = 2</span></Line>
				<HandTag x={RX + 560} y={320} text="candidate" at={atTwo + 20} size={40} color={INK} />
				<HandTag x={RX} y={320} text="check the sign changes" at={check} size={40} color="#1f6fb2" />
			</div>
			<Line x={RX} y={370} at={downFor} out={compare} size={44}><Ol>concave down: x &lt; 2</Ol></Line>
			<Line x={RX} y={430} at={upFor} out={compare} size={44}><Bl>concave up: x &gt; 2</Bl></Line>
			<div style={{position: 'absolute', inset: 0, opacity: panelO}}>
				{panelO > 0.001 ? <>
					<Line x={RX} y={380} at={twelve} size={44}><Bl>f″(x) = 12x² = 0</Bl><span style={{opacity: prog(f, zeroAt, 10)}}>:  x = 0</span></Line>
					<FunctionSimulator x={1100} y={450} width={790} height={300} window={{x: [-1.5, 1.5], y: [-0.5, 3]}} family={QUART} timeline={[{frame: 0, x: 0}]} color={INK} at={compare}
						xTicks={[-1, 1]} yTicks={[1, 2]} xLabel="x" yLabel="y" regions={[{x: [-1.5, 1.5], color: CUPC, opacity: 0.85, at: allWay}]} />
					<CurveLabel x={1660} y={470} at={compare} size={38} color={INK}>y = x⁴</CurveLabel>
					<SignStrip x={1100} y={776} width={790} windowX={[-1.5, 1.5]} mode="concavity" at={zeroAt} showTests={false} rowLabel="f″"
						boundaries={[{x: 0, kind: 'zero', note: {text: 'no change: not an inflection', at: noInfl, color: RED}}]}
						cells={[{sign: 1, revealAt: sides}, {sign: 1, revealAt: sides + 10}]} />
				</> : null}
			</div>
			<MistakeCard x={RX} y={156} w={760} at={noInfl} size={40} wrong={<>f″(0) = 0, so inflection</>} caption="f″ = 0 gives a candidate only" />
		</>
	);
};
