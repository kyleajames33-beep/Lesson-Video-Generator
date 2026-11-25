// Scenes 12 to 17: attempt 1 (a K_max against f graph) and its feedback (gradient, ϕ = hf₀ and the dashed extension
// as a check), attempt 2 (the painted lamp and photocell with two beams of the same colour, one twice as wide) and its
// feedback (the current-voltage sketch with the doubled plateau and the same cut-off), the handoff (the parallel-line
// plot; the painted spacecraft chasing a light pulse; its last frame is exported as `M7V11FinalFrame` for the next
// video) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {BENCH_LAMP} from '../../physics/light/thermal';
import {Axes2, Beam, PHOTOCELL, Packet, ax2, cellGeom} from '../../physics/light/photo';
import type {AxGeom} from '../../physics/light/photo';
import {Ship, shipGeom} from '../../physics/light/frames';
import {A1_H, A1_H3, A1_K, A1_PHI, A1_PHI_EV, ACCENT, F_LIGHT, HEAD, HEAD_NEXT, HEAD_SIZE, VSTOP, cap, cue, dur, hold} from './common';
import {AMBER, GREY, INK, Lbl, NAVY, ORANGE, SLATE, Shrunk, UV, VIOLET, fx, ivPts, lampAp, sci} from './parts';

// ---------- 12. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>The graph shows the maximum kinetic energy, K_max, of photoelectrons emitted from a metal against the frequency, f, of the incident light. (a) Use the graph to determine a value for {u ? <u>{"Planck's constant"}</u> : "Planck's constant"}. (b) Determine the {u ? <u>work function</u> : 'work function'} of the metal, in joules and in electron volts.</>;
const A1G = (w: number, h: number, ext = false): AxGeom => ({x: 90, y: 50, w: w - 140, h: h - 140, x0: 0, x1: 12, y0: ext ? -5 : 0, y1: 3});
const A1Graph: React.FC<{w?: number; h?: number; ext?: number; brackets?: number; ring?: number}> = ({w = 678, h = 520, ext = 0, brackets = 0, ring = 0}) => {
	const g = A1G(w, h, ext > 0 || ring > 0);
	const {px, py} = ax2(g);
	const k = (x: number) => ((x - 7) * 2.0) / 3.0;
	return (
		<svg width={w} height={h} style={{overflow: 'visible'}}>
			<rect x={4} y={4} width={w - 8} height={h - 8} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<Axes2 g={g} xTicks={[2, 4, 6, 7, 8, 10, 12]} yTicks={g.y0 < 0 ? [-4, -2, 1, 2, 3] : [0.5, 1, 1.5, 2, 2.5, 3]} fmtY={v => fx(v, Number.isInteger(v) ? 0 : 1)} grid tick={22} />
			<path d={`M${px(7)},${py(0)} L${px(11.5)},${py(k(11.5))}`} stroke={INK} strokeWidth={5} />
			{ext > 0.001 ? <path d={`M${px(7)},${py(0)} L${px(7 - 7 * ext)},${py(k(7 - 7 * ext))}`} stroke={GREY.stroke} strokeWidth={4} strokeDasharray="12 8" /> : null}
			{[[7, 0], [10, 2]].map(([x, y], i) => <circle key={i} cx={px(x)} cy={py(y)} r={9} fill={NAVY.stroke} stroke="#fff" strokeWidth={2} />)}
			{brackets > 0.001 ? <g opacity={brackets}><line x1={px(10) + 16} y1={py(0)} x2={px(10) + 16} y2={py(2)} stroke={ORANGE.stroke} strokeWidth={5} /><line x1={px(7)} y1={py(0) + 18} x2={px(10)} y2={py(0) + 18} stroke={NAVY.stroke} strokeWidth={5} /></g> : null}
			{ring > 0.001 ? <circle cx={px(0)} cy={py(k(0))} r={22} fill="none" stroke={SLATE.stroke} strokeWidth={5} opacity={ring} /> : null}
			<text x={g.x - 10} y={g.y - 16} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: ORANGE.ink}}>K_max (× 10⁻¹⁹ J)</text>
			<text x={g.x + g.w + 20} y={py(0) + 62} textAnchor="end" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>f (× 10¹⁴ Hz)</text>
		</svg>
	);
};
export const S12: React.FC = () => (
	<Accent color={ACCENT}>
		<QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={3} picture={<A1Graph />}><Q1 /></QuestionScene>
		<Chip x={1176} y={740} at={-30} size={28} color={INK} border={INK}>1 eV = 1.602 × 10⁻¹⁹ J</Chip>
	</Accent>
);

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const hh = cue(id, 'a value for h'), v = cue(id, 'volts'), it = cap(id, cue(id, 'intercept'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>(10.0 × 10¹⁴ Hz, 2.0 × 10⁻¹⁹ J)   f₀ = 7.0 × 10¹⁴ Hz   1 eV = 1.602 × 10⁻¹⁹ J</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 16, width: 1080}}>
				<Row at={hh - 6} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={hh}><span>{`(a) h = gradient = (2.0 × 10⁻¹⁹ − 0) / ((10.0 − 7.0) × 10¹⁴) = ${sci(A1_H, 2)} ≈ ${sci(A1_H, 1)} J s`}</span></AnswerBox></Row>
				<Row at={v - 6} size={36} style={{whiteSpace: 'normal'}}><AnswerBox at={v}><span>{`(b) ϕ = hf₀ = (${sci(A1_H3, 2)})(7.0 × 10¹⁴) = ${sci(A1_PHI, 2)} ≈ ${sci(A1_PHI, 1)} J; (${sci(A1_PHI, 2)}) / (1.602 × 10⁻¹⁹) = ${fx(A1_PHI_EV, 1)} eV`}</span></AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 300, opacity: prog(f, 4, 14)}}><A1Graph w={580} h={560} ext={prog(f, v, 30)} brackets={prog(f, hh, 14)} ring={prog(f, v + 30, 12)} /></div>
			<HandTag x={1250} y={900} text={`−${sci(A1_PHI, 1)} J on the K_max axis: check`} at={v + 34} size={28} color={SLATE.ink} />
			<CrossedChip x={96} y={800} at={it} crossAt={it + 14} size={30} caption="a point's K_max is not ϕ">{`ϕ = ${sci(A1_K, 1)} J`}</CrossedChip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => <>In a photoelectric experiment, the {u ? <u>intensity of the incident light is doubled</u> : 'intensity of the incident light is doubled'} while its {u ? <u>frequency is kept constant</u> : 'frequency is kept constant'}. State and explain the effect on: (a) the stopping voltage; (b) the maximum photocurrent; (c) the gradient of a graph of stopping voltage against frequency.</>;
const BeamsPic: React.FC = () => {
	const c1: Place = {x: 60, y: 150, w: 150}, l1: Place = {x: 250, y: 200, w: 160};
	const c2: Place = {x: 360, y: 150, w: 150}, l2: Place = {x: 540, y: 200, w: 120};
	const g1 = cellGeom(c1), g2 = cellGeom(c2);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<LPlate spec={PHOTOCELL} p={c1} />
			<LPlate spec={BENCH_LAMP} p={l1} flip />
			<Beam a={lampAp(l1, true)} b={g1.cathode} wa={4} wb={10} color={UV} />
			<LPlate spec={PHOTOCELL} p={c2} />
			<LPlate spec={BENCH_LAMP} p={l2} flip />
			<Beam a={lampAp(l2, true)} b={g2.cathode} wa={8} wb={20} color={UV} />
			<text x={60} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: VIOLET.ink}}>same f</text>
			<text x={420} y={70} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: VIOLET.ink}}>intensity × 2</text>
			<text x={150} y={510} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>before</text>
			<text x={450} y={510} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>after</text>
		</svg>
	);
};
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<BeamsPic />}><Q2 /></QuestionScene></Accent>;

// ---------- 15. feedback 2 ----------
const IVS: AxGeom = {x: 1300, y: 400, w: 480, h: 380, x0: -1.6, x1: 0.8, y0: 0, y1: 2.4};
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const same = cue(id, 'K max is the same'), el = cue(id, 'electrons'), dbl = cap(id, cue(id, 'stopping voltage doubles'));
	const {px, py} = ax2(IVS);
	const d2 = prog(f, el, 30);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>same f   intensity × 2</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 16, width: 1120}}>
				<Row at={same - 6} size={40}><AnswerBox at={same}><span style={{whiteSpace: 'nowrap'}}>(a) V_stop unchanged: hf unchanged → K_max unchanged</span></AnswerBox></Row>
				<Row at={el - 6} size={40}><AnswerBox at={el}><span style={{whiteSpace: 'nowrap'}}>(b) maximum photocurrent × 2: photons per second × 2</span></AnswerBox></Row>
				<Row at={dbl - 30} size={40}><AnswerBox at={dbl - 24}><span style={{whiteSpace: 'nowrap'}}>(c) gradient = h/e, unchanged</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<Axes2 g={IVS} xTicks={[-1, 0]} />
				<path d={ivPts(F_LIGHT, 1, IVS.x0, IVS.x1, px, py)} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				{d2 > 0.001 ? <path d={ivPts(F_LIGHT, 2, IVS.x0, IVS.x0 + (IVS.x1 - IVS.x0) * d2, px, py)} fill="none" stroke={NAVY.stroke} strokeWidth={9} /> : null}
			</FrameSvg>
			<Lbl x={IVS.x - 10} y={IVS.y - 30} at={0} color={NAVY.ink} size={28} anchor="end">I</Lbl>
			<Lbl x={IVS.x + IVS.w + 20} y={IVS.y + IVS.h + 70} at={0} color={INK} size={28} anchor="end">V</Lbl>
			<Lbl x={px(-VSTOP)} y={py(0) + 80} at={0} color={NAVY.ink} size={28} anchor="middle">−V_stop</Lbl>
			<Lbl x={px(0.2)} y={py(2) - 20} at={el + 20} color={NAVY.ink} size={28}>× 2</Lbl>
			<HandTag x={0} y={0} at={same + 6} color={ORANGE.stroke} marks={[{kind: 'circle', cx: px(-VSTOP), cy: py(0), rx: 34, ry: 28}]} />
			<CrossedChip x={96} y={760} at={dbl} crossAt={dbl + 14} size={30} caption="intensity changes number, not energy">V_stop doubles</CrossedChip>
		</>
	);
};

// ---------- 16. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, mil: cue(id, "Millikan's graphs measured h"), yr: cue(id, 'in the same year'), sc: cue(id, 'If a spacecraft races after a pulse of light'), slow: cue(id, 'does the light seem to slow down'), next: cap(id, cue(id, 'So why must observers agree')), end: dur(id) - 1};
})();
/** The ship's place and the pulse's final x (v12 opens on this frame). */
export const SHIP11: Place = {x: 190, y: 540, w: 900};
export const PULSE11_X = 1520;
const MG: AxGeom = {x: 130, y: 200, w: 300, h: 160, x0: 0, x1: 10, y0: 0, y1: 5};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard11: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; plot?: boolean}> = ({f, final = false, heading = true, chip = true, plot = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const slide = final ? 1 : prog(f, HD.sc, 40);
	const p: Place = {...SHIP11, x: SHIP11.x - 1300 * (1 - slide)};
	const sg = shipGeom(p);
	const thrust = final ? 0 : kf(f, [[HD.sc, 0], [HD.sc + 10, 1], [HD.sc + 45, 1], [HD.sc + 80, 0]]);
	const px = final ? PULSE11_X : sg.nose[0] + 40 + (PULSE11_X - sg.nose[0] - 40) * prog(f, HD.sc + 20, 60);
	const {px: mx, py: my} = ax2(MG);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{plot ? <g opacity={o(HD.mil)}>
					<Axes2 g={MG} width={3} />
					<path d={`M${mx(3)},${my(0)} L${mx(9.5)},${my(4.6)}`} stroke={INK} strokeWidth={4} />
					<path d={`M${mx(5)},${my(0)} L${mx(10)},${my(3.5)}`} stroke={VIOLET.stroke} strokeWidth={4} />
				</g> : null}
				{final || f >= HD.sc ? <Ship p={p} thrust={thrust} /> : null}
				{final || f >= HD.sc + 20 ? <Packet x={px} y={sg.nose[1]} len={80} color={AMBER.stroke} opacity={o(HD.sc + 20, 8)} /> : null}
			</FrameSvg>
			{plot ? <Lbl x={MG.x + MG.w + 40} y={MG.y + 40} at={at(HD.mil)} color={INK} size={30}>gradient = h</Lbl> : null}
			{plot ? <Lbl x={130} y={460} at={at(HD.yr)} color={INK} size={30}>1905: photons, and relativity</Lbl> : null}
			<Lbl x={SHIP11.x + 360} y={SHIP11.y - 20} at={at(HD.sc + 30)} color={ORANGE.ink} size={34}>v = 0.8c</Lbl>
			<Lbl x={PULSE11_X - 40} y={sg.nose[1] - 90} at={at(HD.slow)} color={AMBER.ink} size={30}>c measured on board?</Lbl>
			<Lbl x={PULSE11_X - 40} y={sg.nose[1] + 100} at={at(HD.slow + 10)} color={AMBER.ink} size={30}>c measured from Earth?</Lbl>
			{chip ? <Chip x={96} y={890} at={at(HD.next)} size={30} w={1728} color={INK} border={INK}>Next: why must observers agree on light speed?</Chip> : null}
		</>
	);
};
/** v11's final frame for the next video. */
export const M7V11FinalFrame: React.FC = () => <HandoffBoard11 f={HD.end} final />;
export const S16: React.FC = () => <HandoffBoard11 f={useCurrentFrame()} />;

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Energy conservation: <span style={{color: ORANGE.ink}}>K_max = hf − ϕ</span>.</>, at: 2},
		{content: <>Stopping voltage: eV_stop = K_max.</>, at: 6},
		{content: <>Brighter: more current, same V_stop.</>, at: 10},
		{content: <>K_max against f: gradient <span style={{color: AMBER.ink}}>h</span>, f-intercept f₀, y-intercept <span style={{color: SLATE.ink}}>−ϕ</span>.</>, at: 14},
		{content: <>V_stop against f: gradient h/e, same for every metal.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<><span style={{color: INK}}>Slope is h, for every metal.</span> <span style={{color: SLATE.ink}}>The intercepts belong to the metal.</span></>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
