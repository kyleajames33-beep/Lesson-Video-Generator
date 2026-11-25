// Scenes 14 to 19: attempt 1 (Li-7: mass defect, binding energy, per nucleon) and its feedback, attempt 2 (the
// "lost particles" claim) and its feedback, the handoff (the curve with both arrows and ⁴He, ¹⁴N, ¹⁷O marked;
// Rutherford's 1919 reaction with "Q = ?"; its last frame is exported as `M8V16FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {BindingCurve, NucEq} from '../../physics/atom/nuclear';
import type {BCBox} from '../../physics/atom/nuclear';
import {NucleonCluster, clusterLayout} from '../../physics/atom/decay';
import type {BalanceG} from '../../physics/atom/decay';
import {CurveMark} from '../../physics/atom/binding';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, LI_DM, LI_EB, LI_EBA, LI_SLIP, LI_SUM, M_LI, M_N, M_P, U_MEV, cap, cue, dur, hold} from './common';
import {AMBER, GREY, INK, Lbl, LiveBalance, NAVY, NEUTRON, NUC_RED, ORANGE, Shrunk, T, TEAL, fx, u6} from './parts';
import {CurveArrows} from './s2';

// ---------- 14. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: React.ReactNode) => (u ? <u>{t}</u> : t);
	return <>The nucleus of lithium-7 ({U(<NucEq terms={[{A: 7, Z: 3, s: 'Li'}]} size={36} weight={600} />)}) has a mass of {U(`${u6(M_LI)} u`)}. Using m<sub>p</sub> = {u6(M_P)} u and m<sub>n</sub> = {u6(M_N)} u, calculate: (a) the mass defect of the nucleus (b) its binding energy in MeV (c) its binding energy {U('per nucleon')}.</>;
};
const LI = clusterLayout(3, 4, 2);
const Pic1: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 420) / 678} viewBox="0 0 678 420" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={412} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<NucleonCluster cx={339} cy={170} r={40} discs={LI} pFill={NUC_RED} nFill={NEUTRON} />
		<text x={339} y={318} textAnchor="middle" style={T(36, INK)}>lithium-7: 3 p, 4 n</text>
		<rect x={150} y={340} width={378} height={56} rx={12} fill="#f1ebdf" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
		<text x={339} y={380} textAnchor="middle" style={T(34, INK)}>{`1 u = ${U_MEV} MeV/c²`}</text>
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 15. feedback 1 ----------
export const S15: React.FC = () => {
	const id = 'feedback-1';
	const to = cue(id, 'totalling seven point zero five six four eight eight u'), dm = cue(id, 'zero point zero four two one three one u'), gt = cue(id, 'gives thirty nine point two'), pn = cue(id, 'five point six one per nucleon'), sl = cue(id, 'The slip is dividing'), an = cap(id, cue(id, 'all seven nucleons'), 20);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={340} givens={<>Z = 3, N = 4; nucleus mass = {u6(M_LI)} u; proton and neutron masses; {U_MEV} MeV/c²</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 12, width: 1170}}>
				<Row at={to} ageAt={pn} size={40}>{`(a) 3(${u6(M_P)}) + 4(${u6(M_N)}) = ${u6(LI_SUM)} u`}</Row>
				<Row at={dm} ageAt={pn} size={40}><AnswerBox at={dm + 4}>{`Δm = ${u6(LI_SUM)} − ${u6(M_LI)} = ${u6(LI_DM)} u`}</AnswerBox></Row>
				<Row at={gt} size={40} style={{whiteSpace: 'normal'}}><AnswerBox at={gt + 4}>{`(b) E_b = ${u6(LI_DM)} × ${U_MEV} = ${fx(LI_EB, 3)} MeV ≈ ${fx(LI_EB, 1)} MeV`}</AnswerBox></Row>
				<Row at={pn} size={44}><AnswerBox at={pn + 4}>{`(c) E_b/A = ${fx(LI_EB, 3)} / 7 = ${fx(LI_EBA, 2)} MeV per nucleon`}</AnswerBox></Row>
			</div>
			<Lbl x={96} y={830} at={pn + 14} color={GREY.ink} size={28}>keep 39.245 for the division</Lbl>
			<div style={{position: 'absolute', left: 1300, top: 430}}><Pic1 w={520} /></div>
			<CrossedChip x={640} y={800} at={sl} crossAt={an} size={30} caption="÷ A, not Z">{`39.2 / 3 = ${fx(LI_SLIP, 1)} MeV`}</CrossedChip>
		</>
	);
};

// ---------- 16. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A student states: &lsquo;The mass defect is the mass of the {U('particles that are lost')} when a nucleus forms.&rsquo; Explain why this statement is incorrect, and state what the mass defect represents.</>;
};
const PB: BalanceG = {cx: 339, cy: 150, arm: 200, drop: 120};
const Pic2: React.FC<{w?: number; count?: boolean}> = ({w = 678, count = false}) => (
	<svg width={w} height={(w * 470) / 678} viewBox="0 0 678 470" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={462} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<LiveBalance g={PB} deg={7} r={13} label="mass comparison (diagram)" numbers={count ? 1 : 0} />
		{count ? <text x={339} y={440} textAnchor="middle" style={T(34, INK)}>12 = 12</text> : null}
	</svg>
);
export const S16: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={2} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 17. feedback 2 ----------
export const S17: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const np = cue(id, 'No particles are lost'), br = cue(id, 'binding energy is released'), me = cue(id, 'the mass equivalent of the binding energy'), sl = cue(id, "The slip is the student's claim"), gm = cap(id, cue(id, 'go missing'), 20);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>statement: the mass defect is the mass of the particles that are lost when a nucleus forms</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 14, width: 1170}}>
				<Row at={np} ageAt={me} size={40} style={{whiteSpace: 'normal'}}>same Z protons and N neutrons before and after</Row>
				<Row at={br} ageAt={me} size={40} style={{whiteSpace: 'normal'}}>binding energy released when the nucleus forms; E = mc²: mass falls by E_b/c²</Row>
				<Row at={me} size={48}><AnswerBox at={me + 4}>Δm = mass equivalent of E_b</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 420}}><Pic2 w={520} count={f >= np} /></div>
			<CrossedChip x={96} y={800} at={sl} crossAt={gm} size={32} caption="nothing missing">mass defect = lost particles</CrossedChip>
		</>
	);
};

// ---------- 18. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, wn: cue(id, 'where nuclear energy can come from'), er: cue(id, 'Ernest Rutherford'), fa: cue(id, 'fired alpha particles into nitrogen gas'), tn: cue(id, 'turned some of the nitrogen into oxygen'), rc: cue(id, 'release energy, or cost energy'), wd: cap(id, cue(id, 'What determines the energy released'), 8), end: dur(id) - 1};
})();
export const BCH: BCBox = {x: 170, y: 300, w: 720, h: 440};
export const N14 = clusterLayout(7, 7, 4);
export const HandoffBoard16: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const hit = final ? 1 : prog(f, HD.fa, 30);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.wd} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.wd + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<BindingCurve b={BCH} size={26} ticksA={[4, 16, 56, 150, 238]} />
				<CurveArrows b={BCH} draw={final ? 1 : 0.4 + 0.6 * prog(f, HD.wn, 30)} />
				<g opacity={o(HD.tn + 20)}>
					<CurveMark b={BCH} A={4} B={7.074} text="⁴He" color={AMBER.ink} size={28} dx={-34} dy={10} anchor="end" />
					<CurveMark b={BCH} A={14} B={7.476} text="¹⁴N" color={NAVY.ink} size={28} dx={0} dy={44} />
					<CurveMark b={BCH} A={17} B={7.751} text="¹⁷O" color={TEAL.ink} size={28} dx={10} dy={-24} anchor="start" />
				</g>
				<NucleonCluster cx={1500} cy={420} r={22} discs={N14} pFill={NUC_RED} nFill={NEUTRON} />
				{final || f >= HD.fa ? <g><line x1={1040} y1={420} x2={1040 + 300 * hit} y2={420} stroke={AMBER.stroke} strokeWidth={6} strokeDasharray="14 9" /><circle cx={1040 + 300 * hit} cy={420} r={22} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} /><text x={1040 + 300 * hit} y={432} textAnchor="middle" style={T(30, AMBER.ink)}>α</text></g> : null}
				<g opacity={o(HD.rc)}>
					<rect x={1100} y={740} width={520} height={30} rx={6} fill={ORANGE.stroke} />
					<text x={1080} y={766} textAnchor="end" style={T(34, ORANGE.ink)}>−?</text>
					<text x={1640} y={766} style={T(34, ORANGE.ink)}>+?</text>
				</g>
			</FrameSvg>
			<Lbl x={1040} y={300} at={at(HD.er)} color={INK} size={34}>Rutherford, 1919</Lbl>
			<Lbl x={1500} y={560} at={at(HD.fa + 10)} color={NAVY.ink} size={28} anchor="middle">nitrogen-14 (7 p, 7 n)</Lbl>
			<div style={{position: 'absolute', left: 1040, top: 610, opacity: o(HD.tn)}}><NucEq terms={[{A: 4, Z: 2, s: 'He'}, '+', {A: 14, Z: 7, s: 'N'}, '→', {A: 17, Z: 8, s: 'O'}, '+', {A: 1, Z: 1, s: 'H'}]} size={46} /></div>
			<Chip x={1600} y={200} at={at(HD.rc + 10)} size={34} color={INK} border={INK}>Q = ?</Chip>
			{chip ? <Chip x={96} y={870} at={at(HD.wd)} size={30} w={1728} color={INK} border={INK}>Next: what determines the energy released in an artificial transmutation?</Chip> : null}
		</>
	);
};
/** v16's final frame for the next video. */
export const M8V16FinalFrame: React.FC = () => <HandoffBoard16 f={HD.end} final />;
export const S18: React.FC = () => <HandoffBoard16 f={useCurrentFrame()} />;

// ---------- 19. key notes ----------
export const S19: React.FC = () => {
	const notes = [
		{content: <><span style={{color: ORANGE.ink}}>E_b</span>: energy to pull a nucleus fully apart.</>, at: 2},
		{content: <>Δm = Zm<sub>p</sub> + Nm<sub>n</sub> − m<sub>nucleus</sub> (no particles lost).</>, at: 6},
		{content: <><span style={{color: ORANGE.ink}}>E_b (MeV)</span> = Δm (u) × 931.5; then ÷ A.</>, at: 10},
		{content: <>Same kind of mass on both sides (¹H with atoms).</>, at: 14},
		{content: <>Towards the peak (near iron) releases energy.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Same nucleons, tighter binding, less mass.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
