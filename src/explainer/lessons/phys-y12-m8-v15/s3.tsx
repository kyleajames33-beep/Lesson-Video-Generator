// Scenes 13 to 18: attempt 1 (P-32: λ and N after 30.0 days) and its feedback, attempt 2 (a nucleus that has lasted
// 30 min with t½ = 10 min) and its feedback, the handoff (the crowd's curve; a decay giving out energy; the coded
// mass-comparison balance with carbon-12 against its separate nucleons; its last frame is exported as `M8V15FinalFrame`)
// and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {placeOf} from '../../physics/light/plates';
import {Balance, NucleiGrid, NucleonCluster, clusterLayout, panAt} from '../../physics/atom/decay';
import type {BalanceG} from '../../physics/atom/decay';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, P_HALF, P_LAM, P_LAM_S, P_LT, P_N, P_N0, cap, cue, dur, hold} from './common';
import {AMBER, Axes, ExpLaw, GREEN_C, GREY, INK, LPlate, LamLaw, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, Shrunk, T, TEAL, TIMER, curveD, fx, sci} from './parts';
import type {GBox} from './parts';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Phosphorus-32 has a half-life of {U('14.3 days')}. A sample initially contains {U('8.0 × 10¹⁰')} phosphorus-32 atoms. (a) Calculate the decay constant of phosphorus-32. (b) Calculate the number of phosphorus-32 atoms remaining after {U('30.0 days')}.</>;
};
const PG: GBox = {x: 380, y: 80, w: 250, h: 230, tMax: 3};
const Pic1: React.FC<{w?: number; curve?: number}> = ({w = 678, curve = 0}) => (
	<svg width={w} height={(w * 440) / 678} viewBox="0 0 678 440" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={432} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<NucleiGrid x={40} y={80} cols={6} rows={6} cell={42} decayAt={() => -1} f={0} fill={NUC_RED} stroke={INK} ring={GREY.stroke} flash={AMBER.stroke} />
		<text x={166} y={370} textAnchor="middle" style={T(34, INK)}>P-32 sample, t = 0</text>
		<line x1={PG.x} y1={PG.y + PG.h} x2={PG.x + PG.w + 10} y2={PG.y + PG.h} stroke={INK} strokeWidth={4} />
		<line x1={PG.x} y1={PG.y + PG.h} x2={PG.x} y2={PG.y - 10} stroke={INK} strokeWidth={4} />
		<line x1={PG.x + PG.w / 3} y1={PG.y + PG.h} x2={PG.x + PG.w / 3} y2={PG.y + PG.h + 14} stroke={INK} strokeWidth={3} />
		<text x={PG.x + PG.w / 3} y={PG.y + PG.h + 50} textAnchor="middle" style={T(34, INK)}>14.3 days</text>
		<text x={PG.x - 10} y={PG.y - 20} style={T(34, INK)}>N</text>
		<text x={PG.x + PG.w + 14} y={PG.y + PG.h + 10} style={T(34, INK)}>t</text>
		{curve > 0.001 ? <path d={curveD(PG, t => 0.5 ** t, 0, 3 * curve)} fill="none" stroke={NAVY.stroke} strokeWidth={4} /> : null}
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const pd = cue(id, 'zero point zero four eight five per day'), ta = cue(id, 'times ten to the ten atoms'), sl = cue(id, 'The slip is using'), dc = cap(id, cue(id, 'almost nothing decay'), 20);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={330} givens={<>t½ = 14.3 days; N₀ = 8.0 × 10¹⁰; t = 30.0 days</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 32, color: GREY.ink}}>plan: (a) <LamLaw />; (b) <ExpLaw /> with λ in day⁻¹</div>
			<div style={{position: 'absolute', left: 96, top: 490, display: 'flex', flexDirection: 'column', gap: 14, width: 1170}}>
				<Row at={pd} ageAt={ta} size={44}><AnswerBox at={pd + 4}>{`(a) λ = ln2 / ${fx(P_HALF, 1)} = ${fx(P_LAM, 4)} day⁻¹`}</AnswerBox></Row>
				<Row at={ta - 40} size={40}>{`(b) λt = ${fx(P_LAM, 4)} × 30.0 = ${fx(P_LT, 3)}`}</Row>
				<Row at={ta} size={40} style={{whiteSpace: 'normal'}}><AnswerBox at={ta + 4}>{`N = 8.0 × 10¹⁰ × e^(−${fx(P_LT, 3)}) = ${sci(P_N, 2)} atoms`}</AnswerBox></Row>
			</div>
			<HandTag x={96} y={770} text="about 2 half-lives → a bit under ¼ ✓" at={ta + 20} size={34} color={GREEN_C.ink} />
			<div style={{position: 'absolute', left: 1270, top: 440}}><Pic1 w={600} curve={prog(f, ta, 30)} /></div>
			<CrossedChip x={760} y={790} at={sl} crossAt={dc} size={28} caption="same time units">{`λ = ${sci(P_LAM_S, 2)} s⁻¹, t = 30 → N ≈ ${sci(P_N0, 1)}`}</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A particular radioactive nucleus has a {U('half-life of 10 minutes')}. It has existed for {U('30 minutes')} without decaying. State the probability that it decays in the next 10 minutes, and explain your answer.</>;
};
const TP = {x: 330, y: 90, w: 300};
const D0 = placeOf(TIMER, TP).at(300, 280), D1 = placeOf(TIMER, TP).at(1300, 540);
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 420) / 678} viewBox="0 0 678 420" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={412} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<NucleonCluster cx={160} cy={190} r={16} discs={clusterLayout(10, 12, 3)} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
		<LPlate spec={TIMER} p={TP} />
		<text x={(D0[0] + D1[0]) / 2} y={(D0[1] + D1[1]) / 2 + 22} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 60, fill: '#9fe6b8'}}>30:00</text>
		<text x={480} y={330} textAnchor="middle" style={T(34, INK)}>30 min so far</text>
		<text x={160} y={330} textAnchor="middle" style={T(34, INK)}>t½ = 10 min</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={2} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const fp = cue(id, 'fifty per cent'), nm = cue(id, 'A nucleus has no memory'), oh = cue(id, 'the chance is one half'), sl = cue(id, 'The slip is thinking'), go = cap(id, cue(id, 'more likely to go'), 20);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>t½ = 10 minutes | it has lasted 30 minutes without decaying | probability of decay in the next 10 minutes?</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 16, width: 1170}}>
				<Row at={fp} size={52}><AnswerBox at={fp + 4}>probability = ½ (50%)</AnswerBox></Row>
				<Row at={nm} size={44}>no memory: same λ at every age</Row>
				<Row at={oh} size={44}>chance in one t½ = ½</Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 440}}><Pic2 w={520} /></div>
			<CrossedChip x={96} y={790} at={sl} crossAt={go} size={32} caption="no memory">{"it's overdue, so it's more likely"}</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, pc: cue(id, 'predicts the crowd'), ge: cue(id, 'gives out energy'), wc: cue(id, 'Weigh a carbon twelve nucleus'), sp: cue(id, 'six protons and six neutrons, separately'), db: cue(id, "They don't balance"), nx: cap(id, cue(id, 'So how does missing mass'), 8), end: dur(id) - 1};
})();
export const BAL15: BalanceG = {cx: 1080, cy: 440, arm: 330, drop: 190};
export const C12 = clusterLayout(6, 6, 12);
export const TILT15 = 7;
export const SG15: GBox = {x: 120, y: 230, w: 360, h: 200, tMax: 3};
/** Separate nucleons on the right pan: two rows of six, spaced apart (p then n). */
export const spread = (cx: number, cy: number) => Array.from({length: 12}, (_, i) => ({x: cx - 125 + (i % 6) * 50, y: cy - 22 - Math.floor(i / 6) * 46, kind: i % 2 === 0 ? 'p' : 'n'}));
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard15: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const tilt = final ? TILT15 : TILT15 * prog(f, HD.db, 30);
	const [pl, pr] = panAt(BAL15, tilt);
	const land = (x: number) => (final ? 1 : prog(f, x, 24));
	const al = o(HD.ge, 30);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<g>
					<Axes b={SG15} xLabel="t" yLabel="N" size={28} />
					<path d={curveD(SG15, t => 0.5 ** t)} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
					{[1, 2].map(n => <line key={n} x1={SG15.x + (SG15.w * n) / 3} y1={SG15.y + SG15.h} x2={SG15.x + (SG15.w * n) / 3} y2={SG15.y + SG15.h - SG15.h * 0.5 ** n} stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="6 6" />)}
				</g>
				<g>
					<NucleonCluster cx={250} cy={640} r={14} discs={clusterLayout(14, 18, 3)} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
					<g opacity={o(HD.ge)}>
						<circle cx={380 + 120 * al} cy={600 - 60 * al} r={20} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />
						<text x={380 + 120 * al} y={611 - 60 * al} textAnchor="middle" style={T(26, AMBER.ink)}>α</text>
						<rect x={360} y={700} width={40 + 140 * al} height={26} fill={ORANGE.stroke} />
					</g>
				</g>
				<Balance g={BAL15} deg={tilt} panW={320} />
				{final || f >= HD.wc ? <NucleonCluster cx={pl[0]} cy={pl[1] - 60 - 160 * (1 - land(HD.wc + 10))} r={20} discs={C12} pFill={NUC_RED} nFill={NEUTRON} opacity={land(HD.wc + 10)} /> : null}
				{final || f >= HD.sp ? <NucleonCluster cx={pr[0]} cy={pr[1] - 160 * (1 - land(HD.sp + 10))} r={20} discs={spread(0, 0).map(d => ({x: d.x / 40, y: d.y / 40, kind: d.kind as 'p' | 'n'}))} pFill={NUC_RED} nFill={NEUTRON} opacity={land(HD.sp + 10)} /> : null}
			</FrameSvg>
			<Lbl x={380} y={760} at={at(HD.ge + 10)} color={ORANGE.ink} size={30}>energy out</Lbl>
			{!final ? <Chip x={560} y={220} at={-30} out={HD.wc} size={30} color={NAVY.ink}>half-life: the crowd, never one nucleus</Chip> : null}
			{!final ? <Lbl x={560} y={360} at={HD.ge + 20} out={HD.wc} color={ORANGE.ink} size={34}>where does that energy come from?</Lbl> : null}
			<Lbl x={pl[0]} y={pl[1] + 70} at={at(HD.wc + 20)} color={INK} size={28} anchor="middle">carbon-12 nucleus</Lbl>
			<Lbl x={pr[0]} y={pr[1] + 70} at={at(HD.sp + 20)} color={INK} size={28} anchor="middle">6 p + 6 n, separate</Lbl>
			<HandTag x={BAL15.cx + 120} y={BAL15.cy - 70} text="missing mass?" at={at(HD.db + 20)} size={44} color={INK} />
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: how does missing mass measure nuclear binding energy?</Chip> : null}
		</>
	);
};
/** v15's final frame for the next video. */
export const M8V15FinalFrame: React.FC = () => <HandoffBoard15 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard15 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <><span style={{color: TEAL.ink}}>λ</span>: fixed decay rate per nucleus; no memory.</>, at: 2},
		{content: <><ExpLaw />; <LamLaw /> (same time units).</>, at: 6},
		{content: <>Activity <span style={{color: AMBER.ink}}>A = λN</span> (Bq), same half-life.</>, at: 10},
		{content: <>Subtract background; counts/s is not Bq.</>, at: 14},
		{content: <>Half-life predicts the crowd, not one nucleus.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Each half-life halves what&apos;s left, not what you started with.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
