// Scenes 13 to 18: attempt 1 (an electron on the painted tunnel's beam line) and its feedback (the momentum against
// speed plot marks the relativistic and classical values), attempt 2 (the momentum bar and speed gauge, no values) and
// its feedback (the asymptote), the handoff (the probe at rest with an unknown energy store beside the painted Sun; its
// last frame is exported as `M7V15FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row, Sub} from '../../physics/projectile/board';
import {Disc, LPlate, SUN} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {Ship} from '../../physics/light/frames';
import {CurvePlot, LINAC, MomentumBar, SpeedGauge, plotX, plotY} from '../../physics/light/relativity';
import type {PlotBox} from '../../physics/light/relativity';
import {A1_B, A1_G, A1_P, A1_PCL, ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, M_E, SUN_DM, cap, cue, dur, hold, vOfK} from './common';
import {AMBER, GREY, INK, Lbl, NAVY, RED, Shrunk, TEAL, fx, pOfB, sci} from './parts';
import {BeamDot} from './s2';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>An electron travels at {U('0.95c')}. (a) Calculate its {U('relativistic momentum')}. (b) Compare this with the value predicted by the {U('classical expression')} p = mv.</>;
};
const TunPic: React.FC<{f: number; w?: number}> = ({f, w = 678}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<LPlate spec={LINAC} p={{x: 60, y: 70, w: 560}} />
		<BeamDot p={{x: 60, y: 70, w: 560}} f={f} color={NAVY.stroke} r={11} />
		<text x={60} y={400} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, fill: NAVY.ink}}>electron at 0.95c</text>
		<text x={60} y={450} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>mₑ = 9.109 × 10⁻³¹ kg</text>
		<text x={60} y={495} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK}}>c = 3.00 × 10⁸ m s⁻¹</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<TunPic f={useCurrentFrame()} />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
const FP: PlotBox = {x: 1330, y: 560, w: 420, h: 300, yMax: 4};
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const sec = cue(id, 'metres per second'), bg = cue(id, 'bigger'), mv = cap(id, cue(id, 'stopping at m v'));
	const rel = A1_P / (M_E * 3.0e8), cl = A1_PCL / (M_E * 3.0e8);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={290} givens={<>{`v = ${A1_B}c | m₀ = 9.109 × 10⁻³¹ kg | c = 3.00 × 10⁸ m s⁻¹`}</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 390, display: 'flex', flexDirection: 'column', gap: 14, width: 1120}}>
				<Row at={sec - 40} size={44}>{`(a) γ = 1 / √(1 − ${A1_B}²) = ${fx(A1_G, 2)}`}</Row>
				<Row at={sec - 6} size={38}><AnswerBox at={sec}>{`p = γm₀v = ${fx(A1_G, 2)} × 9.109 × 10⁻³¹ × ${A1_B} × 3.00 × 10⁸ = ${sci(A1_P, 1)} kg m s⁻¹`}</AnswerBox></Row>
				<Row at={bg - 6} size={40}><AnswerBox at={bg}>{`(b) classical m₀v = ${sci(A1_PCL, 1)}; relativistic = γ × classical = ${fx(A1_G, 1)} × larger`}</AnswerBox></Row>
			</div>
			<FrameSvg>
				<LPlate spec={LINAC} p={{x: 1290, y: 290, w: 460}} />
				<BeamDot p={{x: 1290, y: 290, w: 460}} f={f} color={NAVY.stroke} r={10} />
				<CurvePlot b={FP} f={pOfB} color={AMBER.stroke} betaMax={0.99} classical={b => b} classicalDraw={1} asym={1} xTicks={[0, 0.5, 1]} yTicks={[0, 1, 2, 3, 4]} xLabel="v/c" yLabel="p / (m₀c)" size={26} />
				{f >= sec ? <circle cx={plotX(FP, A1_B)} cy={plotY(FP, rel)} r={11} fill={AMBER.stroke} stroke="#fff" strokeWidth={2.5} /> : null}
				{f >= bg ? <circle cx={plotX(FP, A1_B)} cy={plotY(FP, cl)} r={11} fill={GREY.stroke} stroke="#fff" strokeWidth={2.5} /> : null}
			</FrameSvg>
			<Lbl x={plotX(FP, A1_B) - 20} y={plotY(FP, rel)} at={sec} color={AMBER.ink} size={28} anchor="end">relativistic</Lbl>
			<Lbl x={plotX(FP, A1_B) - 20} y={plotY(FP, cl) - 20} at={bg} color={GREY.ink} size={28} anchor="end">classical</Lbl>
			<CrossedChip x={96} y={720} at={mv} crossAt={mv + 10} size={32} caption="classical value: too small at 0.95c">{`p = ${sci(A1_PCL, 1)} kg m s⁻¹`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => (u
	? <>Use the relationship p<Sub>v</Sub> = m₀v / √(1 − v²/c²) to explain why a <u>particle with mass</u> <u>cannot be accelerated</u> to the speed of light.</>
	: <>Use the relationship p<Sub>v</Sub> = m₀v / √(1 − v²/c²) to explain why a particle with mass cannot be accelerated to the speed of light.</>);
const BarGauge: React.FC<{f: number; w?: number}> = ({f, w = 678}) => (
	<svg width={w} height={560} style={{overflow: 'visible'}}>
		<rect x={4} y={20} width={668} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<MomentumBar x={120} base={470} w={90} bh={40} n={5 + 2 * Math.sin(f / 60) ** 2} color={AMBER.stroke} label="momentum" size={28} />
		<SpeedGauge cx={460} cy={360} r={150} beta={0.9} color={TEAL.stroke} label="speed" size={28} />
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={44} marks={3} picture={<BarGauge f={useCurrentFrame()} />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const bc = cue(id, 'a speed still below c'), ds = cap(id, cue(id, 'does'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={290} givens={<>m₀ &gt; 0 | p<Sub>v</Sub> = m₀v / √(1 − v²/c²)</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 14, width: 1120}}>
				<Row at={bc - 60} size={42}>{'v → c: √(1 − v²/c²) → 0, so p → ∞'}</Row>
				<Row at={bc - 6} size={42}><AnswerBox at={bc}>{'F = Δp/Δt: finite F, finite Δt → finite p → v < c'}</AnswerBox></Row>
			</div>
			<FrameSvg>
				<CurvePlot b={FP} f={pOfB} color={AMBER.stroke} betaMax={0.995} asym={1} marker={kf(f, [[0, 0.6], [bc, 0.95]])} xTicks={[0, 0.5, 1]} yTicks={[0, 2, 4]} xLabel="v/c" yLabel="p / (m₀c)" size={26} />
			</FrameSvg>
			<HandTag x={0} y={0} at={bc + 10} color={RED.stroke} marks={[{kind: 'arrow', from: [plotX(FP, 1) + 30, FP.y + FP.h - 40], to: [plotX(FP, 1) + 30, FP.y + 10], bend: 0}]} />
			<CrossedChip x={96} y={640} at={ds} crossAt={ds + 10} size={32} caption="m₀ is constant; p grows without limit">its mass becomes infinite</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, ph: cue(id, "And here's the surprise"), er: cue(id, 'Even at rest, with no momentum at all'), sun: cue(id, 'The Sun gives some of it away'), next: cap(id, cue(id, 'So how does mass-energy accounting')), end: dur(id) - 1};
})();
const HSHIP: Place = {x: 140, y: 430, w: 600};
const SUN17 = {cx: 1460, cy: 520, d: 380};
const EB = {x: 820, base: 740, w: 90};
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard15: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const sm = final ? 1 : prog(f, HD.ph, 24);
	const tf = `translate(${1000 + (96 - 1000) * sm} ${260 + (170 - 260) * sm}) scale(${1.2 + (0.55 - 1.2) * sm})`;
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.next} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.next + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<g transform={tf}>
					<MomentumBar x={0} base={420} w={70} bh={36} n={10} color={AMBER.stroke} label="p" size={52} />
					<SpeedGauge cx={330} cy={300} r={150} beta={0.999} color={TEAL.stroke} label="v" size={52} />
				</g>
				<g>
					<Ship p={HSHIP} thrust={final ? 0 : 1 - prog(f, HD.er, 14)} />
				</g>
				<g opacity={o(HD.er)}>
					<rect x={EB.x} y={EB.base - 300} width={EB.w} height={300} rx={8} fill="#efe9de" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="12 8" />
				</g>
				{!final && f < HD.er + 14 ? <g opacity={1 - prog(f, HD.er, 14)}>
					<rect x={EB.x} y={EB.base - 300} width={EB.w} height={300} rx={8} fill="#fffdf8" stroke={GREY.stroke} strokeWidth={4} strokeDasharray="12 8" />
					<rect x={EB.x + 4} y={EB.base - 4 - 290 * kf(f, [[0, 0.3], [HD.er, 0.9]])} width={EB.w - 8} height={290 * kf(f, [[0, 0.3], [HD.er, 0.9]])} rx={6} fill="#d9d2c4" />
					<line x1={HSHIP.x + HSHIP.w + 10} y1={HSHIP.y + 90} x2={HSHIP.x + HSHIP.w + 10 + 40 + 140 * kf(f, [[0, 0.3], [HD.er, 1]])} y2={HSHIP.y + 90} stroke={AMBER.stroke} strokeWidth={10} strokeLinecap="round" />
				</g> : null}
				<Disc spec={SUN} cx={SUN17.cx} cy={SUN17.cy} d={SUN17.d} opacity={o(HD.sun)} />
			</FrameSvg>
			<Lbl x={HSHIP.x + 260} y={HSHIP.y - 20} at={at(HD.er)} color={AMBER.ink} size={34}>p = 0</Lbl>
			<Lbl x={EB.x + EB.w / 2} y={EB.base - 150} at={at(HD.er + 10)} color={GREY.ink} size={72} anchor="middle">?</Lbl>
			<Lbl x={EB.x - 20} y={EB.base + 50} at={at(HD.er + 16)} color={GREY.ink} size={32}>energy at rest? E = mc²</Lbl>
			<Lbl x={EB.x - 20} y={EB.base + 50} at={final ? -100 : 0} out={final ? -90 : HD.er} color={GREY.ink} size={32}>energy grows too</Lbl>
			<Lbl x={HSHIP.x + 300} y={HSHIP.y - 20} at={final ? -100 : 0} out={final ? -90 : HD.er} color={AMBER.ink} size={34}>p grows</Lbl>
			<Lbl x={SUN17.cx} y={SUN17.cy + SUN17.d / 2 + 50} at={at(HD.sun + 10)} color={INK} size={32} anchor="middle">{`loses ≈ ${fx(Math.round(SUN_DM / 1e9))} million tonnes per second`}</Lbl>
			{chip ? <Chip x={96} y={870} at={at(HD.next)} size={30} w={1728} color={INK} border={INK}>Next: how does mass-energy accounting explain fusion, annihilation and combustion?</Chip> : null}
		</>
	);
};
/** v15's final frame for the next video. */
export const M7V15FinalFrame: React.FC = () => <HandoffBoard15 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard15 f={useCurrentFrame()} />;
export const HANDOFF15 = {ship: HSHIP, sun: SUN17, energy: EB};

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <>F = Δp/Δt at any speed.</>, at: 2},
		{content: <>p<Sub>v</Sub> = m₀v / √(1 − v²/c²) = <span style={{color: '#6b4fa0'}}>γ</span>m₀v.</>, at: 6},
		{content: <>v → c: p → ∞, so mass can't reach c.</>, at: 10},
		{content: <>Rest mass m₀ never changes.</>, at: 14},
		{content: <>Accelerator magnets need r = γm₀v/qB.</>, at: 18},
	];
	const f = useCurrentFrame();
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<><span style={{color: AMBER.ink}}>Momentum has no ceiling.</span> <span style={{color: TEAL.ink}}>Speed does.</span></>} picture={<svg width={580} height={220}><MomentumBar x={90} base={200} w={70} bh={30} n={6} color={AMBER.stroke} label="" /><SpeedGauge cx={380} cy={170} r={120} beta={vOfK(6 + Math.sin(f / 40))} color={TEAL.stroke} /></svg>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
