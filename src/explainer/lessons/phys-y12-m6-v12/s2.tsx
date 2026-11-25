// Scenes 6 to 10: putting a size on it (working layout, a pulse graph with a live Δt slider), moving the energised
// primary (the needle from the induction engine), alternating current (the bench strip with the needle dimmed, the
// aligned sine graphs with a cursor and tangent lines), the iron core (the soft-iron rod plate sliding through both
// bores, the field concentrated in it, a larger emf amplitude, then the closed-core schematic beside the painted
// transformer), and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK, INK_SOFT} from '../../shared/tokens';
import {AidCard, AnswerBox, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Slider} from '../../physics/electromagnetism/plates';
import {ClosedCore, CoilTurns, MagnetField, crossesPlane, magnetLines} from '../../physics/electromagnetism/induction';
import {SeriesGraph} from '../../sims/series-views';
import {inductionAt, runInduction} from '../../sims/induction';
import {HEAD, HEAD_SIZE, SIZE, cap, cue, dur, mono} from './common';
import {AMBER, CardRect, FIELD1, GapBracket, Givens, IronRod, LITC, Lbl, NAVY, ORANGE, P, PIV, PrimaryField, ROSE, Ring, S, Strip, TC, Transformer, TwoCoilBench, AXY, benchPt, benchT, fx, gapX, linkedLines, secNeedle} from './parts';

const sciTxt = (v: number, d = 1) => { const e = Math.floor(Math.log10(Math.abs(v))); const m = v / 10 ** e; const sup: Record<string, string> = {'-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'}; return `${m.toFixed(d)} × 10${String(e).split('').map(c => sup[c]).join('')}`; };

// ---------- 6. putting a size on it ----------
export const S06: React.FC = () => {
	const id = 'size';
	const f = useCurrentFrame();
	const law = cue(id, "Faraday's law gives the size"), say = cue(id, 'Say the secondary has'), on = cue(id, 'At switch on'), emfC = cue(id, 'The emf is five hundred'), over = cue(id, 'over zero point zero two zero'), volt = cue(id, "That's one point zero volt"), brief = cap(id, cue(id, 'but only for that brief moment'));
	const dt = kf(f, mono([[0, 0.02], [volt + 8, 0.02], [volt + 22, 0.04], [brief, 0.01]], 4), false);
	const GX = (t: number) => 150 + (t / 0.06) * 520, GY = (v: number) => 860 - v * 120;
	const e = SIZE.emfAt(dt);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CardRect x={70} y={170} w={620} h={300} />
				<CoilTurns x1={130} x2={330} cy={320} r={100} n={6} half="back" />
				<CoilTurns x1={450} x2={650} cy={320} r={100} n={9} half="back" />
				<Arrow2 from={[140, 320]} to={[600, 320]} color={FIELD1} width={7} head={22} opacity={prog(f, on, 12)} />
				<CoilTurns x1={130} x2={330} cy={320} r={100} n={6} half="front" color={ORANGE.stroke} />
				<CoilTurns x1={450} x2={650} cy={320} r={100} n={9} half="front" />
				<CardRect x={70} y={490} w={620} h={440} />
				<line x1={150} y1={860} x2={680} y2={860} stroke={INK} strokeWidth={3} />
				<line x1={150} y1={860} x2={150} y2={560} stroke={INK} strokeWidth={3} />
				{f >= on ? <path d={`M${GX(0)},${GY(0)} H${GX(0.01)} V${GY(e)} H${GX(0.01 + dt)} V${GY(0)} H${GX(0.06)}`} fill="rgba(192,74,122,0.18)" stroke={ROSE.stroke} strokeWidth={6} strokeLinejoin="round" opacity={prog(f, on, 14)} /> : null}
				<Slider x={200} y={905} w={420} value={(dt - 0.01) / 0.03} color={INK} opacity={prog(f, volt + 6, 10)} />
			</FrameSvg>
			<Lbl x={240} y={210} color={ORANGE.ink} size={30} anchor="middle">primary</Lbl>
			<Lbl x={550} y={210} color={NAVY.ink} size={32} anchor="middle">N<Sub>s</Sub> = 500</Lbl>
			<HandTag x={430} y={450} text="N: the secondary" at={say + 10} size={34} color={NAVY.ink} />
			<Lbl x={160} y={545} color={ROSE.ink} size={30}>ε<Sub>s</Sub> (V)</Lbl>
			<Lbl x={670} y={900} color={INK} size={28} anchor="end">t</Lbl>
			<Lbl x={GX(0.01 + dt / 2)} y={GY(e) - 16} at={volt} color={ROSE.ink} size={30} anchor="middle">{fx(e, 1)} V for {dt.toFixed(3)} s</Lbl>
			<HandTag x={380} y={620} text="same ΔΦ, faster: taller" at={volt + 26} size={32} color={INK} />
			<Strip x={730} y={170} at={law} size={30} w={1100}>Find the average emf in the secondary at switch on.</Strip>
			<Strip x={730} y={238} at={law + 8} size={32} border={INK}>ε = −N ΔΦ / Δt (N: secondary turns)</Strip>
			<Givens x={730} y={310} w={760} at={say} size={30} lines={[<>N<Sub>s</Sub> = 500 turns</>, <>Φ per turn: 0 → 4.0 × 10⁻⁵ Wb</>, <>Δt = 0.020 s</>]} />
			<HandTag x={1520} y={360} text="example values" at={on + 10} size={32} color={NAVY.ink} />
			<Row at={emfC} size={44} style={{position: 'absolute', left: 730, top: 470}}>|ε| = 500 × 4.0 × 10⁻⁵ / 0.020 = <AnswerBox at={volt}>{fx(SIZE.emf, 1)} V</AnswerBox></Row>
			<CrossedChip x={730} y={560} at={over} crossAt={volt} size={30} caption="÷ Δt">500 × 4.0 × 10⁻⁵ = {fx(SIZE.slip, 3)} V (no Δt)</CrossedChip>
			<Readouts x={730} y={700} w={760} size={44} at={on} rows={[
				{label: 'Δt', value: dt.toFixed(3), unit: 's', color: INK},
				{label: 'ΔΦ/Δt', value: sciTxt(SIZE.rate(dt)), unit: 'Wb s⁻¹', color: LITC},
				{label: '|ε|', value: fx(e, 2), unit: 'V', color: ROSE.ink},
			]} />
		</>
	);
};

// ---------- 7. moving the primary ----------
export const S07: React.FC = () => {
	const id = 'moving-primary';
	const f = useCurrentFrame();
	const keep = cue(id, 'Keep a steady current'), slide = cue(id, 'slide it towards the secondary'), acts = cue(id, 'Now the primary acts'), moves = cue(id, 'so the needle moves'), stop = cue(id, 'Stop sliding'), rel = cap(id, cue(id, "That's relative movement"));
	const dxOf = (g: number) => kf(g, mono([[0, 0], [slide, 0], [stop, 80]]), false);
	const flux = (g: number) => 1 / (1 + ((130 - dxOf(g)) / 70) ** 2);
	const needle = secNeedle(id, flux, dur(id), f, 480);
	const dx = dxOf(f);
	const moving = f > slide && f < stop;
	const pc = benchPt(0, 0, 1, [(P.left[0] + P.right[0]) / 2 + dx, AXY]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<TwoCoilBench pri={{...TC.PRI, x: TC.PRI.x + dx}} open={0} needle={needle} flowP={1} phaseP={f * 3} flowS={Math.abs(needle) > 3 ? 1 : 0} phaseS={f * 2} under={<PrimaryField I={1} dx={dx} id="v12-s7" />} />
				{moving ? <Arrow2 from={[pc[0] - 120, AXY - 150]} to={[pc[0] + 120, AXY - 150]} color={AMBER.stroke} width={9} head={28} /> : null}
				<Ring cx={PIV[0]} cy={PIV[1] - 90} rx={80} ry={60} at={stop + 10} color={INK} />
			</FrameSvg>
			<Readouts x={1400} y={250} w={430} size={44} at={keep} rows={[{label: 'lines through the secondary', value: String(linkedLines(dx)), color: LITC}]} />
			<Chip x={96} y={260} at={keep} size={32} w={560} color={ORANGE.ink} border={ORANGE.stroke}>switch closed: a steady current</Chip>
			<HandTag x={pc[0] - 100} y={AXY - 200} text="coil as a magnet" at={acts} out={stop} size={36} color={AMBER.ink} />
			<HandTag x={PIV[0] - 230} y={PIV[1] - 230} text="moving: flick" at={moves} out={stop} size={36} color={ROSE.ink} />
			<HandTag x={PIV[0] - 230} y={PIV[1] - 230} text="stopped: zero" at={stop + 10} size={36} color={INK} />
			<Row at={rel} size={40} style={{position: 'absolute', left: 96, top: 870}}><AnswerBox at={rel + 10}>relative movement of an energised coil: changing Φ → emf</AnswerBox></Row>
		</>
	);
};

// ---------- 8. alternating current ----------
const AC = (() => {
	const Ip = (t: number) => Math.sin(2 * Math.PI * t);
	const run = runInduction({source: {kind: 'custom', flux: (t: number) => Ip(t) / (2 * Math.PI)}, turns: 1, duration: 3, steps: 600});
	const t = Array.from(run.t);
	return {Ip, t, cur: t.map(Ip), eps: t.map(tt => -inductionAt(run, tt).emf), epsAt: (tt: number) => -inductionAt(run, tt).emf};
})();
/** SeriesGraph's own mapping (yLabel set, no line labels), for overlays on it. */
const gmap = (x: number, y: number, w: number, h: number, xr: readonly [number, number], yr: readonly [number, number], xLabel: boolean) => {
	const L = 132, B = xLabel ? 100 : 60, T = 24, pw = w - L - 30, ph = h - B - T;
	return {X: (t: number) => x + L + ((t - xr[0]) / (xr[1] - xr[0])) * pw, Y: (v: number) => y + T + ph - ((v - yr[0]) / (yr[1] - yr[0])) * ph};
};
const G1 = {x: 110, y: 330, w: 1290, h: 280}, G2 = {x: 110, y: 620, w: 1290, h: 320};
const M1 = gmap(G1.x, G1.y, G1.w, G1.h, [0, 3], [-1.2, 1.2], false), M2 = gmap(G2.x, G2.y, G2.w, G2.h, [0, 3], [-1.3, 1.3], true);
export const S08: React.FC = () => {
	const id = 'alternating-current';
	const f = useCurrentFrame();
	const all = cue(id, 'So for an emf all the time'), ac = cue(id, 'alternating current does'), rises = cue(id, 'It rises, falls, reverses'), second = cue(id, 'many times a second'), alt = cue(id, 'an emf that alternates too'), surprise = cue(id, "And here's a surprise"), ideal = cue(id, 'for ideal coils'), biggest = cue(id, 'emf is biggest when'), fastest = cue(id, 'changing fastest'), peak = cap(id, cue(id, 'When the primary current is at its peak'));
	const now = kf(f, mono([[rises, 0], [second, 1.5], [alt, 3]]), false);
	const tc = kf(f, mono([[biggest, 1.75], [fastest, 2.0], [peak, 2.0], [peak + 30, 2.25]]));
	const cursor = f >= biggest;
	const I = f >= rises ? AC.Ip((f - rises) / 45) : 0;
	const slope = 2 * Math.PI * Math.cos(2 * Math.PI * tc);
	const ta = [tc - 0.14, tc + 0.14], tan = ta.map(t => [M1.X(t), M1.Y(AC.Ip(tc) + slope * (t - tc))]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={benchT(470, 160, 0.4)}><TwoCoilBench open={0} needle={0} galvOpacity={0.4} flowP={Math.abs(I) > 0.05 ? 1 : 0} phaseP={(f * 3 * Math.sign(I)) % 200} under={<PrimaryField I={Math.abs(I)} id="v12-s8" />} /></g>
				{Math.abs(I) > 0.05 ? <Arrow2 from={benchPt(470, 160, 0.4, [(P.left[0] + P.right[0]) / 2 - 110 * I, AXY])} to={benchPt(470, 160, 0.4, [(P.left[0] + P.right[0]) / 2 + 110 * I, AXY])} color={FIELD1} width={6} head={18} /> : null}
			</FrameSvg>
			<SeriesGraph lines={[{t: AC.t, v: AC.cur, tone: 'amber'}]} x={G1.x} y={G1.y} w={G1.w} h={G1.h} xRange={[0, 3]} yRange={[-1.2, 1.2]} now={cursor ? 3 : now} nowLine={!cursor} yLabel="I" xTicks={[]} yTicks={[0]} />
			<SeriesGraph lines={[{t: AC.t, v: AC.eps, tone: 'red'}]} x={G2.x} y={G2.y} w={G2.w} h={G2.h} xRange={[0, 3]} yRange={[-1.3, 1.3]} now={cursor ? 3 : now} nowLine={!cursor} xLabel="time" yLabel="ε" xTicks={[]} yTicks={[0]} />
			<svg style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}} width={1920} height={1080}>
				{cursor ? <g>
					<line x1={M1.X(tc)} y1={G1.y + 20} x2={M1.X(tc)} y2={G2.y + G2.h - 100} stroke={INK} strokeWidth={3} strokeDasharray="8 8" />
					<line x1={tan[0][0]} y1={tan[0][1]} x2={tan[1][0]} y2={tan[1][1]} stroke={INK} strokeWidth={6} strokeLinecap="round" />
					<circle cx={M1.X(tc)} cy={M1.Y(AC.Ip(tc))} r={11} fill={ORANGE.stroke} />
					<circle cx={M2.X(tc)} cy={M2.Y(AC.epsAt(tc))} r={11} fill={ROSE.stroke} />
				</g> : null}
			</svg>
			<FrameSvg>
				<Ring cx={M1.X(2.0)} cy={M1.Y(0)} rx={60} ry={50} at={fastest} color={ORANGE.stroke} />
				<Ring cx={M2.X(2.0)} cy={M2.Y(1)} rx={60} ry={40} at={fastest + 8} color={ROSE.stroke} />
			</FrameSvg>
			<Lbl x={G1.x + 150} y={G1.y + 40} at={rises} color={ORANGE.ink} size={30}>primary current I<Sub>p</Sub> (alternating)</Lbl>
			<Lbl x={G2.x + 150} y={G2.y + 40} at={alt} color={ROSE.ink} size={30}>secondary emf ε<Sub>s</Sub> (+: needle flicks right)</Lbl>
			<Chip x={96} y={170} at={all} out={rises} size={30} w={560}>for an emf all the time: keep changing</Chip>
			{(() => { const p = benchPt(470, 160, 0.4, [170, TC.LVS.y - 30]); return <Lbl x={p[0]} y={p[1]} at={ac} color={ORANGE.ink} size={30} anchor="middle">~ AC</Lbl>; })()}
			{(() => { const p = benchPt(470, 160, 0.4, [PIV[0], PIV[1] - 150]); return <HandTag x={p[0] + 60} y={p[1]} text="too fast for the needle: use the graph" at={ac + 10} size={30} color={INK_SOFT} />; })()}
			<CrossedChip x={1430} y={330} w={450} at={surprise} crossAt={fastest} size={28} caption="slope, not height">biggest emf at the current's peak</CrossedChip>
			<Row at={ideal} size={32} style={{position: 'absolute', left: 1430, top: 470, whiteSpace: 'normal', width: 440}}><AnswerBox at={ideal + 8} tick={false}>ideal coils, no load on the secondary</AnswerBox></Row>
			<Row at={fastest} size={36} style={{position: 'absolute', left: 1430, top: 580, whiteSpace: 'normal', width: 440}}>steepest I<Sub>p</Sub> → largest ε<Sub>s</Sub></Row>
			<Row at={peak + 20} size={34} style={{position: 'absolute', left: 1430, top: 700, whiteSpace: 'normal', width: 450}}><AnswerBox at={peak + 30}>I<Sub>p</Sub> at its peak: not changing → ε<Sub>s</Sub> = 0</AnswerBox></Row>
		</>
	);
};

// ---------- 9. an iron core ----------
const IRON_L = Math.round(S.right[0] - P.left[0] + 80);
const IRON_LINES = magnetLines(IRON_L, 11, P.r * 1.4, 1.5);
const IRON_C = (P.left[0] + S.right[0]) / 2;
const IRON_LIT = IRON_LINES.filter(l => crossesPlane(l, IRON_C, (S.left[0] + S.right[0]) / 2, S.r)).length;
export const S09: React.FC = () => {
	const id = 'iron-core';
	const f = useCurrentFrame();
	const air = cue(id, 'spreads into the air'), slide = cue(id, 'slide a soft iron rod'), becomes = cue(id, 'The iron becomes strongly'), stronger = cue(id, 'the field is much stronger'), guides = cue(id, 'the iron guides it'), far = cue(id, 'Far more flux links'), bigger = cue(id, 'the emf is much bigger'), never = cue(id, 'The coils still never touch'), carries = cue(id, 'The iron only carries'), wind = cue(id, 'Wind both coils'), almost = cue(id, 'almost all of the flux'), xf = cap(id, cue(id, "That's a transformer"));
	const I = Math.sin((2 * Math.PI * f) / 45);
	const rodX = kf(f, mono([[slide, -520], [slide + 110, IRON_C]]));
	const iron = prog(f, stronger, 20);
	const amp = 0.15 + 0.85 * prog(f, bigger, 20);
	const ts = Array.from({length: 301}, (_, i) => (i / 300) * 3);
	const bench = 1 - prog(f, wind, 20);
	const nLines = Math.round((iron > 0.5 ? IRON_LIT : linkedLines()) * Math.abs(I));
	const [g1, g2, gy] = gapX();
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{bench > 0.001 ? <>
				<FrameSvg>
					<g opacity={bench}>
						<TwoCoilBench open={0} needle={0} galvOpacity={0.4} flowP={1} phaseP={(f * 4 * Math.sign(I)) % 400} under={<>
							<PrimaryField I={Math.abs(I) * (1 - iron)} id="v12-s9" />
							{iron > 0.01 ? <g opacity={iron * (0.4 + 0.6 * Math.abs(I))}>
								<MagnetField lines={IRON_LINES} x={IRON_C} y={AXY} color={FIELD1} lit={{planeX: (S.left[0] + S.right[0]) / 2, r: S.r, color: LITC}} width={3} />
							</g> : null}
							<IronRod cx={rodX} cy={AXY} len={IRON_L - 40} />
							{iron > 0.01 ? <g opacity={iron * (0.4 + 0.6 * Math.abs(I))}>{[-0.3, -0.1, 0.1, 0.3].map(o => <line key={o} x1={P.left[0] - 30} y1={AXY + o * P.r} x2={S.right[0] + 30} y2={AXY + o * P.r} stroke={LITC} strokeWidth={4} />)}</g> : null}
						</>} />
						<GapBracket />
						{f >= slide && f < slide + 110 ? <Arrow2 from={[rodX - 200, AXY - 120]} to={[rodX + 60, AXY - 120]} color={AMBER.stroke} width={9} head={26} /> : null}
						<Ring cx={(g1 + g2) / 2} cy={gy + 165} rx={110} ry={40} at={never} color={NAVY.stroke} />
					</g>
				</FrameSvg>
				<SeriesGraph lines={[{t: ts, v: ts.map(t => amp * Math.cos(2 * Math.PI * t)), tone: 'red'}]} x={1180} y={160} w={690} h={270} xRange={[0, 3]} yRange={[-1.2, 1.2]} yLabel="ε" xTicks={[]} yTicks={[0]} opacity={bench} />
				<Lbl x={1330} y={200} color={ROSE.ink} size={28}>secondary emf (ideal core, no load)</Lbl>
				<Readouts x={96} y={170} w={560} size={40} at={0} out={wind} rows={[{label: 'lines through the secondary', value: String(nLines), color: LITC}]} />
				<HandTag x={96} y={330} text="air: weak, still induction" at={air + 10} out={stronger} size={32} color={INK_SOFT} />
				<Chip x={96} y={300} at={becomes} out={wind} size={30} w={620}>soft iron: magnetised strongly and easily</Chip>
				<HandTag x={IRON_C} y={AXY - 170} text="iron guides the field" at={guides} out={wind} size={36} color={FIELD1} anchor="middle" marks={[{kind: 'arrow', from: [P.left[0], AXY - 130], to: [S.right[0], AXY - 130], bend: 0}]} markAt={guides + 4} />
				<Chip x={96} y={380} at={far} out={never} size={30} w={620}>far more flux links the secondary</Chip>
				<Chip x={96} y={380} at={carries} out={wind} size={30} w={620}>iron carries the field, not the current</Chip>
				<HandTag x={PIV[0] - 120} y={PIV[1] - 230} text="too fast for the needle" at={air} out={wind} size={30} color={INK_SOFT} anchor="middle" />
			</> : null}
			{f >= wind ? <>
				<FrameSvg>
					<g opacity={prog(f, wind, 20)}>
						<ClosedCore cx={640} cy={580} s={480} t={84} np={5} ns={5} phase={f >= almost ? (f - almost) * 3 : 0} flux={prog(f, almost, 14)} />
						<Transformer x={1200} y={330} w={520} />
					</g>
				</FrameSvg>
				<Lbl x={400} y={290} at={wind} color={ORANGE.ink} size={30} anchor="middle">primary</Lbl>
				<Lbl x={880} y={290} at={wind} color={ROSE.ink} size={30} anchor="middle">secondary</Lbl>
				<Lbl x={1460} y={840} at={wind + 10} color={INK} size={30} anchor="middle">a real transformer</Lbl>
				<Lbl x={640} y={870} at={almost} color={FIELD1} size={30} anchor="middle">almost all the flux links both coils</Lbl>
				<Row at={xf} size={40} style={{position: 'absolute', left: 96, top: 170}}><AnswerBox at={xf + 8}>transformer: two coils on one closed iron core</AnswerBox></Row>
			</> : null}
		</>
	);
};

// ---------- 10. a way to remember ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const steady = cue(id, 'Steady current, no emf'), changing = cue(id, 'Changing current, induced emf'), keeps = cap(id, cue(id, 'keeps changing'));
	const ts = Array.from({length: 201}, (_, i) => (i / 200) * 2);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<SeriesGraph lines={[{t: [0, 2], v: [1, 1], tone: 'amber'}]} x={80} y={200} w={860} h={200} xRange={[0, 2]} yRange={[-1.2, 1.2]} yLabel="I" xTicks={[]} yTicks={[0]} />
			<SeriesGraph lines={[{t: [0, 2], v: [0, 0], tone: 'red'}]} x={80} y={410} w={860} h={230} xRange={[0, 2]} yRange={[-1.2, 1.2]} xLabel="time" yLabel="ε" xTicks={[]} yTicks={[0]} />
			<SeriesGraph lines={[{t: ts, v: ts.map(t => Math.sin(2 * Math.PI * t)), tone: 'amber'}]} x={980} y={200} w={860} h={200} xRange={[0, 2]} yRange={[-1.2, 1.2]} yLabel="I" xTicks={[]} yTicks={[0]} />
			<SeriesGraph lines={[{t: ts, v: ts.map(t => Math.cos(2 * Math.PI * t)), tone: 'red'}]} x={980} y={410} w={860} h={230} xRange={[0, 2]} yRange={[-1.2, 1.2]} xLabel="time" yLabel="ε" xTicks={[]} yTicks={[0]} />
			<FrameSvg>
				<Ring cx={520} cy={420} rx={430} ry={230} at={steady} color={INK} />
				<Ring cx={1420} cy={420} rx={430} ry={230} at={changing} color={ROSE.stroke} />
			</FrameSvg>
			<Lbl x={240} y={190} at={steady} color={INK} size={34}>steady current: no emf</Lbl>
			<Lbl x={1140} y={190} at={changing} color={ROSE.ink} size={34}>changing current: induced emf</Lbl>
			<AidCard x={260} y={690} w={1400} at={keeps} title="Memory aid">
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, color: INK, lineHeight: 1.15}}>Steady current, no emf. Changing current, induced emf.</div>
			</AidCard>
		</>
	);
};
