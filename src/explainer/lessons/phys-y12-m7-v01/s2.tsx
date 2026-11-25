// Scenes 6 to 10: testing the prediction (the painted spark-gap transmitter and loop receiver, coded sparks and wave
// fronts, the illustrative v = f lambda working), one family, one speed (the EM spectrum ribbon with a marker whose
// readouts change while the speed does not), the memory card, attempt 1 (the painted Sun) and its brief feedback.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, MemoryCard, QuestionScene} from '../../shared/scenes';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow, ChargeDot, EMWave, FrontArcs, LoopChain, Spark, frontRadii} from '../../physics/light/em';
import {EMRibbon, LightPath, ribbonX} from '../../physics/light/spectrum';
import {Disc, LPlate, SPARK_RX, SPARK_TX, SUN, anchorAt} from '../../physics/light/plates';
import {ACCENT, C, HEAD, HEAD_SIZE, HZ_F, HZ_L, HZ_V, HZ_WRONG, RIBBON, cap, cue, hold} from './common';
import {BLUE, CardRect, FLUX, GREY, LIGHT, LIGHT_INK, Lbl, NAVY, ORANGE, ROSE, Shrunk, Strip, fx, sci} from './parts';

// ---------- 6. testing the prediction ----------
const TX = {x: 96, y: 330, w: 520};
const RX = {x: 1500, y: 200, w: 260};
export const S06: React.FC = () => {
	const id = 'hertz';
	const f = useCurrentFrame();
	const jump = cue(id, 'spark jump'), btw = cue(id, 'between'), vfl = cue(id, 'v equals f lambda'), pic = cue(id, 'Picture a frequency'), sec = cue(id, 'metres per second'), lt = cap(id, cue(id, 'just like light'));
	const g = anchorAt(SPARK_TX, TX, 842, 322), r = anchorAt(SPARK_RX, RX, 625, 201);
	const emit = Array.from({length: 80}, (_, i) => jump + i * 24);
	const fronts = f >= jump ? frontRadii(emit, f, 7, 1500) : [];
	const reach = jump + Math.hypot(r[0] - g[0], r[1] - g[1]) / 7;
	const rxOn = f >= Math.max(reach, btw) ? 1 : 0;
	const osc = f >= jump ? Math.sin(f * 0.26) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={60} y1={565} x2={1860} y2={565} stroke="#8a8378" strokeWidth={4} />
				<LPlate spec={SPARK_TX} p={TX} />
				<LPlate spec={SPARK_RX} p={RX} />
				<FrontArcs cx={g[0]} cy={g[1]} fronts={fronts} a0={-12} a1={22} colors={[BLUE.stroke, FLUX]} maxR={1500} width={4} />
				{f >= jump ? <g>{[-1, 1].map(s => <ChargeDot key={s} x={g[0] + s * (110 + 40 * osc * s)} y={g[1]} r={9} color={ROSE.stroke} sign="" />)}</g> : null}
				<Spark a={[g[0] - 9, g[1]]} b={[g[0] + 9, g[1]]} f={f} on={f >= jump ? 1 : 0} width={4} />
				<Spark a={[r[0] - 7, r[1]]} b={[r[0] + 7, r[1]]} f={f + 5} on={rxOn} width={3} />
				{f >= lt ? <ellipse cx={r[0]} cy={r[1]} rx={42} ry={34} fill="none" stroke={LIGHT} strokeWidth={5} opacity={prog(f, lt + 10, 12)} /> : null}
			</FrameSvg>
			<Lbl x={TX.x + 260} y={610} at={0} color={INK} size={28} anchor="middle">spark-gap transmitter</Lbl>
			<Lbl x={RX.x + 130} y={610} at={0} color={INK} size={28} anchor="middle">loop receiver</Lbl>
			<HandTag x={760} y={250} text="sent through the air" at={btw + 6} size={36} color={BLUE.ink} />
			<Lbl x={760} y={320} at={btw + 10} color={INK} size={28}>no connecting wires</Lbl>
			<Chip x={96} y={650} at={vfl} size={32} w={400} color={INK}>v = fλ (Year 11)</Chip>
			<Strip x={520} y={650} at={pic} size={34}>{`f = ${sci(HZ_F, 1)} Hz,  λ = ${fx(HZ_L, 1)} m`}</Strip>
			<Lbl x={540} y={760} at={pic + 10} color={GREY.ink} size={26}>illustrative values</Lbl>
			<div style={{position: 'absolute', left: 96, top: 790}}><Row at={sec - 6} size={52}><AnswerBox at={sec}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`v = fλ = (${sci(HZ_F, 1)}) × ${fx(HZ_L, 1)} = ${sci(HZ_V, 1)} m s⁻¹`}</span></AnswerBox></Row></div>
			<CrossedChip x={1220} y={650} at={sec + 30} crossAt={sec + 50} size={28} caption="multiply: v = fλ">{`v = f / λ = ${sci(HZ_WRONG, 1)} m s⁻¹`}</CrossedChip>
			<Chip x={1220} y={830} at={lt} size={30} w={620} color={INK}>reflected ✓  refracted ✓  polarised ✓</Chip>
			<HandTag x={1560} y={150} text="behaves like light" at={lt + 16} size={34} color={LIGHT_INK} anchor="middle" />
		</>
	);
};

// ---------- 7. one family, one speed ----------
const RB = {x: 160, y: 470, w: 1600, h: 120};
const fmtL = (m: number) => (m >= 1 ? `${fx(m, 0)} m` : m >= 0.01 ? `${fx(m * 100, 1)} cm` : m >= 1e-8 ? `${fx(m * 1e9, 0)} nm` : `${sci(m, 1)} m`);
export const S07: React.FC = () => {
	const id = 'em-family';
	const f = useCurrentFrame();
	const all = cue(id, 'are all electromagnetic waves'), vac = cue(id, 'In a vacuum'), freq = cue(id, 'whatever their frequency'), lam = cap(id, cue(id, 'c equals f lambda'));
	const stops = [0, vac, vac + 80, vac + 160];
	let k = 0; stops.forEach((t, i) => { if (f >= t) k = i; });
	const fx0 = ribbonX(RB.x, RB.w, RIBBON[k].f);
	const prevX = ribbonX(RB.x, RB.w, RIBBON[Math.max(0, k - 1)].f);
	const mx = k === 0 ? fx0 : prevX + (fx0 - prevX) * prog(f, stops[k], 20);
	const dispL = [300, 190, 110, 50][k];
	const R = RIBBON[k];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<EMRibbon x={RB.x} y={RB.y} w={RB.w} h={RB.h} />
				{f >= all ? <path d={`M${RB.x},${RB.y - 70} v-16 h${RB.w} v16`} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, all, 12)} /> : null}
				<g>
					<line x1={mx} y1={RB.y - 20} x2={mx} y2={RB.y + RB.h + 20} stroke={INK} strokeWidth={5} />
					<path d={`M${mx},${RB.y - 20} l-12,-18 h24 Z`} fill={INK} />
					<EMWave x0={mx - 260} x1={mx + 200} y={310} amp={70} lambda={dispL} phase={f * 0.15} eColor={BLUE.stroke} bColor={FLUX} axisColor={NAVY.stroke} arrows={0} width={4} tilt={0.6} axis={0.6} />
					{k === 2 ? <rect x={mx - 26} y={RB.y + RB.h + 26} width={52} height={30} rx={6} fill={ORANGE.stroke} /> : null}
				</g>
				{f >= lam ? <g opacity={prog(f, lam, 12)}>
					<line x1={RB.x + 300} y1={RB.y + RB.h + 110} x2={RB.x + 800} y2={RB.y + RB.h + 110} stroke={INK} strokeWidth={4} /><path d={`M${RB.x + 820},${RB.y + RB.h + 110} l-22,-12 v24 Z`} fill={INK} />
					<line x1={RB.x + 820} y1={RB.y + RB.h + 170} x2={RB.x + 1320} y2={RB.y + RB.h + 170} stroke={INK} strokeWidth={4} /><path d={`M${RB.x + 800},${RB.y + RB.h + 170} l22,-12 v24 Z`} fill={INK} />
				</g> : null}
			</FrameSvg>
			<Lbl x={RB.x + RB.w / 2} y={RB.y - 100} at={all} color={NAVY.ink} size={30} anchor="middle">all: E and B fields, transverse</Lbl>
			<Lbl x={RB.x + RB.w - 10} y={RB.y + RB.h + 230} at={0} color={GREY.ink} size={26} anchor="end">frequency on a log scale</Lbl>
			<div style={{position: 'absolute', left: 96, top: 780, opacity: prog(f, 4, 12)}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, color: INK, whiteSpace: 'pre'}}>{`f = ${sci(R.f, 1)} Hz    λ = ${fmtL(R.lambda)}`}</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, color: NAVY.ink, whiteSpace: 'pre'}}>{`speed = ${sci(C, 2)} m s⁻¹`}</div>
			</div>
			<Chip x={1100} y={180} at={freq} size={30} w={720} color={NAVY.ink} border={NAVY.stroke}>speed in a vacuum: c, for every frequency</Chip>
			<Strip x={1100} y={270} at={lam} size={44}>c = fλ</Strip>
			<Lbl x={RB.x + 300} y={RB.y + RB.h + 98} at={lam + 6} color={INK} size={28}>f increases</Lbl>
			<Lbl x={RB.x + 1320} y={RB.y + RB.h + 158} at={lam + 6} color={INK} size={28} anchor="end">λ increases</Lbl>
			<HandTag x={1300} y={860} text="same c for all" at={freq + 10} size={40} color={NAVY.ink} />
		</>
	);
};

// ---------- 8. a way to remember ----------
export const S08: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const eb = cue(id, 'Change E, make B'), be = cue(id, 'Change B, make E'), c = cap(id, cue(id, 'runs off at c'));
	const run = f >= c ? (f - c) * 6 : 0;
	const pulse = (at: number) => (f >= at && f < at + 30 ? Math.sin((Math.PI * (f - at)) / 30) : 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<ChargeDot x={300} y={720 + Math.sin(f * 0.25) * 40} r={18} color={ROSE.stroke} sign="−" />
				<LoopChain x={420} y={720} count={6} a={BLUE.stroke} b={FLUX} gap={130} size={90} shift={run} pulse={[pulse(eb), pulse(eb + 15), pulse(be + 15), pulse(be)]} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 300, top: 190, width: 1320}}>
				<MemoryCard at={eb} main={<><span style={{color: BLUE.ink}}>Change E, make B.</span> <span style={{color: FLUX}}>Change B, make E.</span> <span style={{color: ROSE.ink}}>Shake a charge:</span> off at c.</>} />
			</div>
		</>
	);
};

// ---------- 9. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => <>Outline how Maxwell's theory of electromagnetism predicted (a) the {u ? <u>existence</u> : 'existence'} of electromagnetic waves and (b) their {u ? <u>speed</u> : 'speed'} in a vacuum. Explain why this prediction led to the conclusion that {u ? <u>light</u> : 'light'} is an electromagnetic wave.</>;
const SunPic: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<rect x={10} y={20} width={650} height={520} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
		<Disc spec={SUN} cx={200} cy={280} d={220} />
		<LightPath pts={[[320, 280], [620, 280]]} color={LIGHT} width={14} />
		<text x={470} y={250} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: LIGHT_INK}}>light</text>
	</svg>
);
export const S09: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<SunPic />}><Q1 /></QuestionScene></Accent>;

// ---------- 10. feedback 1 ----------
export const S10: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const medium = cue(id, 'a wave travels with no medium'), sec = cue(id, 'metres per second'), wave = cue(id, 'must be an electromagnetic wave'), slip = cue(id, 'The classic slip'), mag = cap(id, cue(id, 'from electricity and magnetism'));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={310} givens={<><span style={{color: FLUX}}>μ₀ = 4π × 10⁻⁷ N A⁻²</span>{'   '}<span style={{color: BLUE.ink}}>ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²</span>{'   '}(data sheet)</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 410, display: 'flex', flexDirection: 'column', gap: 16, width: 1150}}>
				<Row at={10} size={36} style={{whiteSpace: 'normal'}}><span>(a) changing E ↔ changing B regenerate each other → self-sustaining transverse wave, no medium</span></Row>
				<Row at={sec - 20} size={36} style={{whiteSpace: 'normal'}}><span>(b) c = 1/√(μ₀ε₀) = {sci(C, 2)} m s⁻¹ (constants from electrical and magnetic experiments)</span></Row>
				<Row at={wave - 10} size={40} style={{whiteSpace: 'normal'}}><AnswerBox at={wave}><span>equals the measured speed of light → light is an EM wave</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<CardRect x={1290} y={400} w={540} h={400} />
				<LoopChain x={1360} y={600} count={5} a={BLUE.stroke} b={FLUX} gap={95} size={80} pulse={[0, 1, 2, 3, 4].map(k => Math.max(0, Math.sin(f * 0.05 - k * 0.6)))} />
				<Arrow from={[1340, 760]} to={[1780, 760]} color={NAVY.stroke} width={5} head={20} opacity={prog(f, sec, 12)} />
			</FrameSvg>
			<Lbl x={1560} y={450} at={0} color={GREY.ink} size={26} anchor="middle">fields regenerate each other</Lbl>
			<Lbl x={1560} y={740} at={sec} color={NAVY.ink} size={28} anchor="middle">at c</Lbl>
			<HandTag x={1330} y={860} text="no medium needed" at={medium + 6} size={32} color={NAVY.ink} />
			<CrossedChip x={96} y={830} at={slip} crossAt={mag} size={30} caption="calculated from μ₀ and ε₀">Maxwell measured the speed of light</CrossedChip>
		</>
	);
};
