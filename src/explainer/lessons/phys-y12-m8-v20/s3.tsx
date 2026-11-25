// Scenes 15 to 20: attempt 1 (three up quarks: charge and family) and its feedback, attempt 2 (two pieces of evidence;
// the painted linac tunnel above a proton) and its feedback, the handoff (an organising board: quarks so far, leptons,
// antimatter partners and an empty forces column; its last frame is exported as `M8V20FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Diamond, QBag, QDot} from '../../physics/atom/particles';
import {LPlate} from '../../physics/light/plates';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, Q_U, Q_X, cap, cue, dur, hold} from './common';
import {BigProton, DOWN, GREY, INK, LEP, LINAC, Lbl, NAVY, NU, Shrunk, SLATE, UP, fr3} from './parts';

// ---------- 15. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>A particle X is made of {U('three up quarks')} (uuu). The up quark has charge +⅔e. (a) Calculate the charge of X. (b) State whether X is a hadron or a lepton, and justify your answer.</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 600}) => (
	<svg width={w} height={(w * 440) / 600} viewBox="0 0 600 440" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={592} height={432} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<QBag x={300} y={200} r={140} tag="X (model)" tagSize={40}>
			<QDot x={240} y={240} r={46} label="u" tone={UP} size={52} />
			<QDot x={360} y={240} r={46} label="u" tone={UP} size={52} />
			<QDot x={300} y={140} r={46} label="u" tone={UP} size={52} />
		</QBag>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 16. feedback 1 ----------
export const S16: React.FC = () => {
	const id = 'feedback-1';
	const pt = cue(id, 'is plus two'), bt = cue(id, 'a baryon with three'), dd = cue(id, 'the delta plus plus'), sl = cue(id, 'The slip is saying plus one'), lp = cap(id, cue(id, 'like a proton'), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>u: +⅔e; X = uuu</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 1290, top: 380}}><Pic1 w={520} /></div>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={pt} size={56}><AnswerBox at={pt + 4}>{`3 × (${fr3(Q_U)}e) = ${fr3(Q_X)}e`}</AnswerBox></Row>
				<Row at={bt} size={44}>made of quarks → hadron (3 quarks: baryon)</Row>
			</div>
			<Lbl x={1400} y={820} at={dd} color={UP.ink} size={34}>a real particle: Δ⁺⁺</Lbl>
			<CrossedChip x={96} y={700} at={sl} crossAt={lp} size={34} caption="add the quark charges">charge +1, like every baryon</CrossedChip>
		</>
	);
};

// ---------- 17. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Outline {U('TWO')} pieces of evidence that protons are {U('not fundamental')} particles.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 600}) => (
	<svg width={w} height={(w * 520) / 600} viewBox="0 0 600 520" style={{overflow: 'visible'}}>
		<LPlate spec={LINAC} p={{x: 0, y: 0, w: 600}} />
		<BigProton x={300} y={420} r={90} />
	</svg>
);
export const S17: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={44} marks={3} picture={<Pic2 w={660} />}><Q2 /></QuestionScene></Accent>;

// ---------- 18. feedback 2 ----------
export const S18: React.FC = () => {
	const id = 'feedback-2';
	const ins = cue(id, 'small hard parts inside'), pa = cue(id, 'combinations of a few parts'), qc = cue(id, 'The quark charges then fit both nucleons'), sl = cue(id, 'The slip is using neutron decay'), st = cap(id, cue(id, "doesn't settle it"), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={240} givens={<>outline TWO pieces of evidence | protons are not fundamental particles</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 1290, top: 330}}><Pic2 w={520} /></div>
			<div style={{position: 'absolute', left: 96, top: 360, display: 'flex', flexDirection: 'column', gap: 22, width: 1160}}>
				<Row at={ins} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={ins + 4}>1. scattering: many large-angle scatters → small hard parts</AnswerBox></Row>
				<Row at={pa} size={44} style={{whiteSpace: 'normal'}}><AnswerBox at={pa + 4}>2. patterns: hundreds of hadrons in families</AnswerBox></Row>
				<Row at={qc} size={32}>supported by: uud = +1, udd = 0</Row>
			</div>
			<CrossedChip x={96} y={800} at={sl} crossAt={st} size={34} caption="muons decay too">neutron decay proves it has parts</CrossedChip>
		</>
	);
};

// ---------- 19. handoff ----------
const HD = (() => {
	const id = 'handoff-v21';
	return {id, ud: cue(id, 'up and down so far'), lp: cue(id, 'There are leptons'), ap: cue(id, 'an antimatter partner'), fc: cue(id, 'forces acting between them all'), sm: cap(id, cue(id, 'So how does the Standard Model'), 8), end: dur(id) - 1};
})();
/** The organising board's geometry (v21 opens on it). Slots are 300 x 66 px, 10 px apart. */
export const ORG = {q: {x: 200, y: 250}, l: {x: 620, y: 250}, f: {x: 1260, y: 250}, w: 300, h: 66, gap: 10, anti: {x: 200, y: 784, w: 720, h: 66}} as const;
export const orgSlot = (col: {x: number; y: number}, i: number) => ({x: col.x, y: col.y + 60 + i * (ORG.h + ORG.gap)});
const Slot: React.FC<{col: {x: number; y: number}; i: number; text?: string; color?: string; pulse?: number; q?: boolean}> = ({col, i, text, color = INK, pulse = 0, q = false}) => {
	const s = orgSlot(col, i);
	return (
		<g>
			<rect x={s.x} y={s.y} width={ORG.w} height={ORG.h} rx={12} fill={text ? '#fffdf8' : 'none'} stroke={text ? color : 'rgba(60,45,20,0.45)'} strokeWidth={text ? 4 : 3} strokeDasharray={text ? undefined : '10 8'} />
			{pulse > 0.01 ? <rect x={s.x - 6} y={s.y - 6} width={ORG.w + 12} height={ORG.h + 12} rx={16} fill="none" stroke={color} strokeWidth={5} opacity={pulse} /> : null}
			{text ? <text x={s.x + 22} y={s.y + 46} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 38, fill: color}}>{text}</text> : q ? <text x={s.x + ORG.w / 2} y={s.y + 46} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: '#6b6358'}}>?</text> : null}
		</g>
	);
};
/** The mirror icon: a dashed mirror line with a dot and its dashed-outline reflection. */
export const MirrorIcon: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		<line x1={x} y1={y - 26} x2={x} y2={y + 26} stroke={INK} strokeWidth={3} strokeDasharray="6 5" />
		<circle cx={x - 26} cy={y} r={13} fill={UP.soft} stroke={UP.stroke} strokeWidth={4} />
		<circle cx={x + 26} cy={y} r={13} fill={UP.soft} stroke={UP.stroke} strokeWidth={4} strokeDasharray="5 4" />
	</g>
);
export const OrgBoard: React.FC<{lep?: number; anti?: number; forces?: number; qPulse?: number; lPulse?: number; aPulse?: number; fPulse?: number}> = ({lep = 1, anti = 1, forces = 1, qPulse = 0, lPulse = 0, aPulse = 0, fPulse = 0}) => (
	<g>
		<text x={ORG.q.x} y={ORG.q.y + 36} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: INK}}>quarks</text>
		<Slot col={ORG.q} i={0} text="u (+⅔)" color={UP.ink} />
		<Slot col={ORG.q} i={1} text="d (−⅓)" color={DOWN.ink} />
		{[2, 3, 4, 5].map(i => <Slot key={i} col={ORG.q} i={i} q pulse={qPulse} color={UP.stroke} />)}
		<g opacity={lep}>
			<text x={ORG.l.x} y={ORG.l.y + 36} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: INK}}>leptons</text>
			<Slot col={ORG.l} i={0} text="e⁻" color={LEP.ink} pulse={lPulse} />
			<Slot col={ORG.l} i={1} text="μ⁻" color={LEP.ink} pulse={lPulse} />
			<Slot col={ORG.l} i={2} text="ν" color={NU.ink} pulse={lPulse} />
			{[3, 4, 5].map(i => <Slot key={i} col={ORG.l} i={i} />)}
		</g>
		<g opacity={anti}>
			<rect x={ORG.anti.x} y={ORG.anti.y} width={ORG.anti.w} height={ORG.anti.h} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			{aPulse > 0.01 ? <rect x={ORG.anti.x - 6} y={ORG.anti.y - 6} width={ORG.anti.w + 12} height={ORG.anti.h + 12} rx={16} fill="none" stroke={UP.stroke} strokeWidth={5} opacity={aPulse} /> : null}
			<MirrorIcon x={ORG.anti.x + 60} y={ORG.anti.y + ORG.anti.h / 2} />
			<text x={ORG.anti.x + 120} y={ORG.anti.y + 45} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: INK}}>antimatter partners</text>
		</g>
		<g opacity={forces}>
			<text x={ORG.f.x} y={ORG.f.y + 36} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: INK}}>forces?</text>
			{[0, 1, 2, 3].map(i => <g key={i}><Slot col={ORG.f} i={i} pulse={fPulse} color={SLATE.stroke} /><Diamond x={orgSlot(ORG.f, i).x + ORG.w / 2} y={orgSlot(ORG.f, i).y + ORG.h / 2} s={22} tone={SLATE} label="" outline /></g>)}
		</g>
	</g>
);
export const HandoffBoard20: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const pulse = (x: number) => (final ? 0 : Math.sin(Math.PI * Math.min(1, Math.max(0, (f - x) / 36))));
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.sm} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.sm + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg><OrgBoard lep={o(HD.lp)} anti={o(HD.ap)} forces={o(HD.fc)} qPulse={pulse(HD.ud)} lPulse={pulse(HD.lp + 14)} aPulse={pulse(HD.ap + 10)} fPulse={pulse(HD.fc + 10)} /></FrameSvg>
			{chip ? <Chip x={96} y={890} at={final ? -60 : HD.sm} size={30} w={1728} color={INK} border={INK}>Next: how does the Standard Model organise particles and interactions?</Chip> : null}
		</>
	);
};
/** v20's final frame for the next video. */
export const M8V20FinalFrame: React.FC = () => <HandoffBoard20 f={HD.end} final />;
export const S19: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<HandoffBoard20 f={f} />
			<HandTag x={1600} y={560} text="a lot to keep track of" at={HD.fc + 50} out={HD.sm} size={32} color={GREY.ink} />
		</>
	);
};

// ---------- 20. key notes ----------
export const S20: React.FC = () => {
	const notes = [
		{content: <><span style={{color: NAVY.ink}}>Scattering</span>: many large-angle scatters → hard parts.</>, at: 2},
		{content: <><span style={{color: UP.ink}}>Patterns</span>: hundreds of hadrons in families.</>, at: 6},
		{content: <>Quarks: <span style={{color: UP.ink}}>u +⅔</span>, <span style={{color: DOWN.ink}}>d −⅓</span>; uud = +1, udd = 0.</>, at: 10},
		{content: <>New particles: e⁺, μ, π, ν̄ (tracks, missing energy).</>, at: 14},
		{content: <><span style={{color: SLATE.ink}}>Decay alone doesn&apos;t prove parts.</span></>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Hadrons have parts. Leptons are points.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};

