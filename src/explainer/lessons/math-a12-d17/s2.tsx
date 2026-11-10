// Scenes 3 to 6: direction from f′ (the sign strip rules out the wiggly curve), bend from f″ (the concavity strip
// and the corners rule out the straight join; the non-horizontal inflection), symmetry, intercepts and ends (the
// half turn about the origin) and the sketching checklist.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {CARD, CARD_SHADOW, ConcavityGlyphs, CupCapGlyph, FrameSvg, FunctionSimulator, HandTag, SceneHeading, SignStrip, smooth, vis} from '../../math/studio';
import {K3, K4, K5, K6} from './cuemap';
import {AnswerBox, Bl, BoxCard, CAPC, CUB, CUPC, Chip, Cross, CurveLabel, GREEN, GREY_INK, Line, Ol, RED, Ring, Tick, V, VIOLET, cub, ruler, stubLine, wig} from './parts';
import {Clip, CubicPoints, DrawCurve, W1, WrongCurves, pathOf, plot} from './geom';
import type {Stage} from './geom';
import {G2} from './s1';

const RX = 1130;
const tmap = (M: ReturnType<typeof plot>) => ({pt: M.pf, sx: M.sx, sy: M.sy});
const AXES = (G: Stage, extra: Partial<React.ComponentProps<typeof FunctionSimulator>> = {}) => (
	<FunctionSimulator x={G.x} y={G.y} width={G.w} height={G.h} window={W1} family={CUB} timeline={[{frame: 0, x: 0}]} at={-30} hideMainCurve
		xTicks={[-2, -1, 1, 2]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y" {...extra} />
);
const F_STRIP = (y: number, reveal: [number, number, number] | null) => (
	<SignStrip x={G3.x} y={y} width={G3.w} windowX={W1.x} at={-30} rowLabel="f′" showTests={false}
		boundaries={[{x: -1, kind: 'zero', label: ''}, {x: 1, kind: 'zero', label: ''}]}
		cells={[{sign: 1, revealAt: reveal ? reveal[0] : -60}, {sign: -1, revealAt: reveal ? reveal[1] : -60}, {sign: 1, revealAt: reveal ? reveal[2] : -60}]} />
);

// ---------- 3. direction from f prime ----------
export const G3: Stage = {x: 30, y: 140, w: 1060, h: 620};
export const S03: React.FC = () => {
	const f = useCurrentFrame();
	const k = K3;
	const M = plot(G3, W1);
	const wigO = 1 - prog(f, k.out + 14, 20);
	const segT = [M.pf(-1.6, ruler(-1.6)), M.pf(-0.5, ruler(-0.5)), M.pf(1.6, ruler(1.6))];
	const W0 = M.pf(-0.02, 0.9);
	return (
		<>
			<SceneHeading text="Direction from f′" at={4} size={56} />
			{AXES(G3)}
			<WrongCurves M={M} wigAt={-60} rulerAt={-60} wigO={wigO} hot={prog(f, k.fall, 14)} />
			<CubicPoints M={M} at={[-60, -60, -60]} labelSize={34} />
			<FrameSvg>
				{segT.map((p, i) => {const o = prog(f, [k.rise + 10, k.rise + 38, k.rise + 64][i], 12); return o > 0.001 ? <g key={i} opacity={o} transform={`translate(${p[0] + 14},${p[1] - 40})`}><path d="M0,14 L12,26 L34,0" stroke={GREY_INK} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" /></g> : null;})}
				{(() => {const o = prog(f, k.out, 12) * wigO; const p = M.pf(-1.75, wig(-1.75)); return o > 0.001 ? <path d={`M${p[0] - 34},${p[1] - 34} L${p[0] + 34},${p[1] + 34} M${p[0] + 34},${p[1] - 34} L${p[0] - 34},${p[1] + 34}`} stroke={RED} strokeWidth={9} strokeLinecap="round" opacity={o} /> : null;})()}
				<Ring p={W0} r={70} o={vis(f, k.climbs, k.out + 20, 12)} color={RED} />
			</FrameSvg>
			<HandTag x={W0[0] + 70} y={W0[1] - 90} text="rising where f′ < 0" at={k.fall + 6} out={k.each} size={40} color={RED} />
			{F_STRIP(G3.y + G3.h + 30, [k.pos, k.neg, k.again])}
			{/* right column */}
			<Line x={RX} y={160} at={k.fp} size={52}><V>f′(x) = 3x² − 3</V></Line>
			<Line x={RX} y={232} at={k.fp + 40} size={52}><V>= 3(x − 1)(x + 1)</V></Line>
			<Line x={RX} y={330} at={k.pos} size={42}>x &lt; −1: <span style={{color: '#13767a'}}>f′ &gt; 0</span></Line>
			<Line x={RX} y={390} at={k.neg} size={42}>−1 &lt; x &lt; 1: <span style={{color: '#9c5a00'}}>f′ &lt; 0</span></Line>
			<Line x={RX} y={450} at={k.again} size={42}>x &gt; 1: <span style={{color: '#13767a'}}>f′ &gt; 0</span></Line>
			<Chip x={RX} y={526} at={k.rise} size={44} color={INK}>so the curve must rise, fall, rise</Chip>
			<Chip x={RX} y={636} at={k.out} size={44} color={RED}><span style={{display: 'inline-flex', alignItems: 'center', gap: 12}}><Cross size={40} />wiggly curve: out</span></Chip>
			<BoxCard x={RX} y={760} w={740} at={k.each} size={44} border={VIOLET} bw={4}>each sign of f′ is a rule for a whole interval</BoxCard>
		</>
	);
};

// ---------- 4. bend from f double prime ----------
export const G4: Stage = {x: 30, y: 140, w: 1060, h: 560};
export const S04: React.FC = () => {
	const f = useCurrentFrame();
	const k = K4;
	const M = plot(G4, W1);
	const rulerO = 1 - prog(f, k.origin - 24, 20);
	const corners = [M.pf(-1, 2), M.pf(1, -2)];
	const O = M.pf(0, 0);
	return (
		<>
			<SceneHeading text="Bend from f″" at={4} size={56} />
			{AXES(G4, {regions: [{x: [-2.5, 0], color: CAPC, opacity: 0.85, at: k.cap}, {x: [0, 2.5], color: CUPC, opacity: 0.85, at: k.cup}]})}
			<ConcavityGlyphs cells={[{from: -2.5, to: 0, sign: -1}]} toFrame={M.pf} Y={4.6} at={k.cap} words />
			<ConcavityGlyphs cells={[{from: 0, to: 2.5, sign: 1}]} toFrame={M.pf} Y={-4.6} at={k.cup} words />
			<WrongCurves M={M} wigAt={-60} rulerAt={-60} wigO={0} rulerO={rulerO} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none'}}>
				<Clip M={M}><DrawCurve M={M} fn={cub} a={-2.5} b={2.5} at={k.origin - 14} dur={40} color={INK} width={6} /></Clip>
				{corners.map((p, i) => <Ring key={i} p={p} r={40} o={vis(f, k.corners + i * 10, k.origin + 20, 12)} color={RED} />)}
				<g opacity={vis(f, k.flat, k.origin + 10, 12)}>{corners.map((p, i) => <line key={i} {...stubLine(tmap(M), i ? 1 : -1, i ? -2 : 2, 0, 0, 80)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" />)}</g>
				{(() => {const o = prog(f, k.origin - 30, 12) * rulerO; const p = M.pf(1.6, ruler(1.6)); return o > 0.001 ? <path d={`M${p[0] - 30},${p[1] - 30} L${p[0] + 30},${p[1] + 30} M${p[0] + 30},${p[1] - 30} L${p[0] - 30},${p[1] + 30}`} stroke={RED} strokeWidth={9} strokeLinecap="round" opacity={o} /> : null;})()}
				<line {...stubLine(tmap(M), 0, 0, -3, 0, 170)} stroke={VIOLET} strokeWidth={7} strokeLinecap="round" opacity={prog(f, k.grad, 14)} />
			</svg>
			<CubicPoints M={M} at={[-60, -60, -60]} labels={false} />
			<CurveLabel x={O[0] + 34} y={O[1] - 66} at={k.infl} size={38} color={INK}>inflection (0, 0)</CurveLabel>
			<SignStrip x={G4.x} y={G4.y + G4.h + 22} width={G4.w} windowX={W1.x} at={-30} rowLabel="f′" showTests={false}
				boundaries={[{x: -1, kind: 'zero', label: ''}, {x: 1, kind: 'zero', label: ''}]} cells={[{sign: 1}, {sign: -1}, {sign: 1}]} />
			<SignStrip x={G4.x} y={G4.y + G4.h + 150} width={G4.w} windowX={W1.x} mode="concavity" at={-30} rowLabel="f″" showTests={false}
				boundaries={[{x: 0, kind: 'zero', label: ''}]} cells={[{sign: -1, revealAt: k.lessThan + 40}, {sign: 1, revealAt: k.greater + 40}]} />
			{/* right column */}
			<Line x={RX} y={160} at={-30} out={k.fpp - 6} size={40} color={GREY_INK}>the straight join passes the f′ test</Line>
			<Line x={RX} y={160} at={k.fpp} size={56}><Bl>f″(x) = 6x</Bl></Line>
			<Line x={RX} y={252} at={k.lessThan} size={42}>x &lt; 0: <Ol>f″ &lt; 0, concave down</Ol> <span style={{opacity: prog(f, k.cap, 10)}}><CupCapGlyph kind="cap" size={42} /></span></Line>
			<Line x={RX} y={318} at={k.greater} size={42}>x &gt; 0: <Bl>f″ &gt; 0, concave up</Bl> <span style={{opacity: prog(f, k.cup, 10)}}><CupCapGlyph kind="cup" size={42} /></span></Line>
			<HandTag x={RX} y={430} text="straight lines don't bend" at={k.straight} size={42} color={RED} />
			<Line x={RX} y={472} at={k.corners} size={40}>corners at x = −1 and x = 1</Line>
			<Line x={RX} y={530} at={k.flat - 10} size={40}>the curve must be smooth and flat there</Line>
			<Line x={RX} y={616} at={k.origin} size={44}>the bend changes at (0, 0): inflection</Line>
			<Line x={RX} y={690} at={k.grad} size={52}><V>f′(0) = −3 ≠ 0</V></Line>
			<BoxCard x={RX} y={786} w={740} at={k.nonh} size={44} border={INK} bw={4}>non-horizontal inflection</BoxCard>
		</>
	);
};

// ---------- 5. symmetry, intercepts and ends ----------
const R3 = Math.sqrt(3);
export const S05: React.FC = () => {
	const f = useCurrentFrame();
	const k = K5;
	const G = G2;
	const M = plot(G, W1);
	const O = M.pf(0, 0);
	const dim = vis(f, k.give, k.icpt, 14);
	const th = 180 * smooth(prog(f, k.turn, 52));
	const copyO = vis(f, k.turn - 6, k.icpt, 12);
	const arrow = (x0: number, up: boolean, o: number) => {
		if (o <= 0.001) return null;
		const p = M.pf(x0, cub(x0)), dy = up ? -1 : 1;
		return <g opacity={o} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round"><path d={`M${p[0]},${p[1]} l${up ? 16 : -16},${dy * 60}`} /><path d={`M${p[0] + (up ? 16 : -16) - 16},${p[1] + dy * 60 - dy * 4} l16,${dy * 18} l12,${-dy * 22}`} /></g>;
	};
	const green = prog(f, k.label, 16);
	return (
		<>
			<SceneHeading text="Symmetry, intercepts and ends" at={4} size={56} />
			{AXES(G)}
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, overflow: 'visible', pointerEvents: 'none'}}>
				<Clip M={M}>
					<path d={pathOf(M, cub, -2.5, 0)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" opacity={1 - 0.75 * dim} />
					<path d={pathOf(M, cub, 0, 2.5)} stroke={INK} strokeWidth={6} fill="none" strokeLinecap="round" />
					{copyO > 0.001 ? <g transform={`rotate(${th} ${O[0]} ${O[1]})`} opacity={copyO}><path d={pathOf(M, cub, 0, 2.5)} stroke={VIOLET} strokeWidth={8} fill="none" strokeLinecap="round" opacity={0.85} /></g> : null}
				</Clip>
				{copyO > 0.001 && th < 179 ? <path d={`M${O[0] + 60},${O[1]} A60,60 0 ${th > 180 ? 1 : 0} 1 ${O[0] + 60 * Math.cos((th * Math.PI) / 180)},${O[1] + 60 * Math.sin((th * Math.PI) / 180)}`} stroke={VIOLET} strokeWidth={5} fill="none" /> : null}
				{[-R3, 0, R3].map((x, i) => {const p = M.pf(x, 0); const o = prog(f, k.three + i * 6, 12); return o > 0.001 ? <circle key={i} cx={p[0]} cy={p[1]} r={11} fill={GREEN} stroke={CARD} strokeWidth={4} opacity={o} /> : null;})}
				{arrow(2.32, true, prog(f, k.right, 14))}
				{arrow(-2.32, false, prog(f, k.left, 14))}
				{green > 0.001 ? <rect x={M.x + M.box.left - 14} y={M.y + M.box.top - 14} width={M.box.width + 28} height={M.box.height + 28} rx={20} fill="none" stroke={GREEN} strokeWidth={7} opacity={green} /> : null}
			</svg>
			<CubicPoints M={M} at={[-60, -60, -60]} labelSize={36} />
			{[[-R3, '−√3'], [R3, '√3']].map(([x, t], i) => {const p = M.pf(x as number, 0); return <CurveLabel key={i} x={p[0] - (i ? 0 : 70)} y={p[1] + 18} at={k.three + 6 * i} size={38} color={GREEN}>{t as string}</CurveLabel>;})}
			<CurveLabel x={M.pf(2.0, 0)[0]} y={M.pf(0, 5.6)[1]} at={k.right} size={40} color={INK}>→ ∞</CurveLabel>
			<CurveLabel x={M.pf(-2.45, 0)[0]} y={M.pf(0, -5.2)[1]} at={k.left} size={40} color={INK}>→ −∞</CurveLabel>
			<HandTag x={M.pf(0.25, 0)[0]} y={M.pf(0, -4.6)[1]} text="odd: half turn about the origin" at={k.lands} out={k.icpt + 10} size={40} color={VIOLET} />
			{/* right column */}
			<BoxCard x={RX} y={170} w={740} at={-30} out={k.fmx - 8} size={48} title="So far">
				<div>max (−1, 2), min (1, −2)</div>
				<div><V>f′</V>: rise, fall, rise</div>
				<div><Ol>cap</Ol> for x &lt; 0, <Bl>cup</Bl> for x &gt; 0</div>
				<div>inflection (0, 0), gradient −3</div>
			</BoxCard>
			<HandTag x={RX} y={600} text="next: symmetry, intercepts, ends" at={-30} out={k.fmx - 8} size={44} color={VIOLET} />
			<Line x={RX} y={160} at={k.sym} size={34} color={INK_SOFT} weight={800}>SYMMETRY</Line>
			<Line x={RX} y={206} at={k.fmx} size={46}>f(−x) = −x³ + 3x = −f(x)<span style={{opacity: prog(f, k.odd, 10)}}>: odd</span></Line>
			<Line x={RX} y={320} at={k.icpt} size={34} color={INK_SOFT} weight={800}>INTERCEPTS</Line>
			<Line x={RX} y={366} at={k.xtimes} size={48}>x(x² − 3) = 0</Line>
			<Line x={RX} y={432} at={k.root3} size={48}>x = 0, ±√3<span style={{opacity: prog(f, k.three, 10), fontSize: 34, color: INK_SOFT, fontWeight: 700}}>   ≈ ±1.73</span></Line>
			<Line x={RX} y={546} at={k.ends} size={34} color={INK_SOFT} weight={800}>ENDS</Line>
			<Line x={RX} y={592} at={k.wins} size={44}>large x: the x³ term wins</Line>
			<Line x={RX} y={656} at={k.right} size={44}>right: up.   <span style={{opacity: prog(f, k.left, 10)}}>left: down.</span></Line>
			<AnswerBox x={RX} y={780} at={k.label} size={44}>label every feature: one shape fits</AnswerBox>
		</>
	);
};

// ---------- 6. the sketching checklist ----------
const G6: Stage = {x: 30, y: 160, w: 830, h: 760};
const ITEMS: [string, keyof typeof K6, boolean][] = [
	['1. domain', 'domain', false], ['2. symmetry', 'sym', true], ['3. intercepts', 'icpt', true], ['4. stationary points (f′)', 'stat', true],
	['5. concavity and inflections (f″)', 'conc', true], ['6. asymptotes and other breaks', 'asym', false], ['7. behaviour as x → ±∞', 'ends', true],
];
export const S06: React.FC = () => {
	const f = useCurrentFrame();
	const k = K6;
	const M = plot(G6, W1);
	const order = ITEMS.map(i => k[i[1]]);
	return (
		<>
			<SceneHeading text="The sketching checklist" at={4} size={56} />
			<FunctionSimulator x={G6.x} y={G6.y} width={G6.w} height={G6.h} window={W1} family={CUB} timeline={[{frame: 0, x: 0}]} at={-30}
				xTicks={[-2, -1, 1, 2]} yTicks={[-4, -2, 2, 4]} xLabel="x" yLabel="y" color={INK} />
			<CubicPoints M={M} at={[-60, -60, -60]} labelSize={32} />
			<FrameSvg><rect x={M.x + M.box.left - 12} y={M.y + M.box.top - 12} width={M.box.width + 24} height={M.box.height + 24} rx={20} fill="none" stroke={GREEN} strokeWidth={6} /></FrameSvg>
			<CurveLabel x={M.pf(-2.4, 0)[0]} y={M.pf(0, 5.6)[1]} at={-30} size={38} color={INK}>y = x³ − 3x</CurveLabel>
			<div style={{position: 'absolute', left: 900, top: 150, width: 980, height: 800, boxSizing: 'border-box', background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, ${CARD_SHADOW}`, padding: '26px 40px'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK}}>Sketching checklist</div>
				{ITEMS.map(([t, , used], i) => {
					const at = order[i];
					const next = order[i + 1] ?? k.poly;
					const glow = vis(f, at, next, 8);
					const o = prog(f, at - 4, 10);
					const tickO = used ? prog(f, at + 12, 10) : prog(f, k.line, 10);
					return (
						<div key={i} style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 10, opacity: o, borderRadius: 12, padding: '0 12px', margin: '10px -12px 0', background: glow > 0.001 ? `rgba(248,232,200,${0.9 * glow})` : undefined}}>
							<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 44, color: INK, flex: 1}}>{t}</span>
							<span style={{width: 48}}><Tick size={46} o={tickO} /></span>
						</div>
					);
				})}
				<div style={{marginTop: 22, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: GREY_INK, opacity: prog(f, k.line, 12)}}>polynomial (items 1 and 6): all real x, no asymptotes</div>
				<div style={{marginTop: 14, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46, color: VIOLET, opacity: prog(f, k.next, 12)}}>the next curve needs all seven</div>
			</div>
		</>
	);
};
