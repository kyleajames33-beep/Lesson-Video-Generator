// Scenes 13 to 18: attempt 1 (distinguish a Bohr orbit and an orbital) and its feedback, attempt 2 (assess
// Schrödinger's contribution) and its feedback, the handoff (the 1s cloud, a zoom inset on the nucleus with protons and
// neutrons, "α?", "β?", "γ?"; its last frame is exported as `M8V13FinalFrame`) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Cloud1s} from '../../physics/atom/quantum';
import {NucleonCluster, clusterLayout} from '../../physics/atom/decay';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, cap, cue, dur, hold} from './common';
import {AMBER, GREY, INK, Lbl, NAVY, NEUTRON, NUC_RED, Shrunk, Strip, TEAL, T} from './parts';
import {PatternIcon} from './parts';

// ---------- 13. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Distinguish between an electron {U('orbit')} in {"Bohr's"} model of the atom and an {U('orbital')} in {"Schrödinger's"} model.</>;
};
const Pic1: React.FC<{w?: number; fill?: number}> = ({w = 678, fill = 0}) => (
	<svg width={w} height={(w * 420) / 678} viewBox="0 0 678 420" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={412} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<circle cx={170} cy={200} r={100} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
		<circle cx={170} cy={200} r={14} fill={NUC_RED} />
		<rect x={400} y={100} width={210} height={200} rx={12} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
		{fill > 0.001 ? <><defs><radialGradient id="m8v13-p1"><stop offset="0" stopColor={TEAL.stroke} stopOpacity={0.85} /><stop offset="1" stopColor={TEAL.stroke} stopOpacity={0} /></radialGradient></defs><circle cx={505} cy={200} r={95} fill="url(#m8v13-p1)" opacity={fill} /></> : null}
		<circle cx={505} cy={200} r={14} fill={NUC_RED} />
		<text x={170} y={360} textAnchor="middle" style={T(34, INK)}>{"Bohr's model"}</text>
		<text x={505} y={360} textAnchor="middle" style={T(34, INK)}>{fill > 0.5 ? "Schrödinger's model" : "Schrödinger's model: ?"}</text>
	</svg>
);
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={2} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const ob = cue(id, 'A Bohr orbit is a definite circular path'), al = cue(id, 'with no path at all'), sl = cue(id, 'The slip is calling'), tr = cap(id, cue(id, 'travels along'), 20);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>distinguish: an electron orbit (Bohr) | an orbital (Schrödinger)</>}><Q1 u /></Shrunk>
			<Strip x={96} y={390} at={-30} size={30} color={INK}>Distinguish: both sides</Strip>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 16, width: 1150}}>
				<Row at={ob} size={38} style={{whiteSpace: 'normal'}}>{f >= al + 10 ? <AnswerBox at={al + 10}>orbit: definite 2D circular path, fixed radius, definite position</AnswerBox> : 'orbit: definite 2D circular path, fixed radius, definite position'}</Row>
				<Row at={al} size={38} style={{whiteSpace: 'normal'}}>{f >= al + 10 ? <AnswerBox at={al + 10}>orbital: 3D region, probability of finding the electron at each point, no path</AnswerBox> : 'orbital: 3D region, probability of finding the electron at each point, no path'}</Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 420}}><Pic1 w={520} fill={prog(f, al, 20)} /></div>
			<CrossedChip x={96} y={800} at={sl} crossAt={tr} size={32} caption="no path at all">orbital = the fuzzy path it travels</CrossedChip>
		</>
	);
};

// ---------- 15. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>{U('Assess')} the {U('contribution')} of Schrödinger to the current model of the atom.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 678}) => (
	<svg width={w} height={(w * 360) / 678} viewBox="0 0 678 360" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={670} height={352} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<line x1={90} y1={190} x2={590} y2={190} stroke={INK} strokeWidth={4} />
		<path d="M590,190 l-22,-13 l0,26 Z" fill={INK} />
		<circle cx={170} cy={190} r={62} fill="#fffdf8" stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
		<circle cx={170} cy={190} r={10} fill={NUC_RED} />
		<g transform="translate(330 0)"><PatternIcon x={170} y={190} r={62} k={2} /></g>
		<text x={170} y={310} textAnchor="middle" style={T(34, INK)}>Bohr 1913</text>
		<text x={500} y={310} textAnchor="middle" style={T(34, INK)}>Schrödinger 1926</text>
	</svg>
);
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={40} marks={4} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const bm = cue(id, "Bohr's model assumed quantised orbits"), st = cue(id, 'Schrödinger treated the electron'), pr = cue(id, 'regions of probability'), lp = cue(id, 'lose any picture of the motion'), fc = cue(id, 'a foundational contribution'), ss = cue(id, 'The slip is saying'), ep = cap(id, cue(id, "the electron's exact path"), 20);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={250} givens={<>{"assess: Schrödinger's contribution to the current model of the atom"}</>}><Q2 u /></Shrunk>
			<Strip x={96} y={340} at={-30} size={30} color={INK}>Assess: strengths, limits, judgement</Strip>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 12, width: 1170}}>
				<Row at={bm} ageAt={fc} size={34} style={{whiteSpace: 'normal'}}>before: Bohr, quantisation assumed, one electron only</Row>
				<Row at={st} ageAt={fc} size={34} style={{whiteSpace: 'normal'}}>contribution: electron as a 3D wave; energies from the equation; works for all atoms</Row>
				<Row at={pr} ageAt={fc} size={34} style={{whiteSpace: 'normal'}}>orbitals: probability regions, not paths</Row>
				<Row at={lp} ageAt={fc} size={34} style={{whiteSpace: 'normal'}}>limits: no picture of motion; approximations beyond one electron</Row>
				<Row at={fc} size={44}><AnswerBox at={fc + 4}>judgement: foundational (current model)</AnswerBox></Row>
			</div>
			<div style={{position: 'absolute', left: 1300, top: 430}}><Pic2 w={520} /></div>
			<CrossedChip x={96} y={850} at={ss} crossAt={ep} size={30} caption="probabilities, not paths">{"Schrödinger worked out the electron's exact path"}</CrossedChip>
		</>
	);
};

// ---------- 17. handoff ----------
const HD = (() => {
	const id = 'handoff';
	return {id, cp: cue(id, 'clouds of probability'), vc: cue(id, 'the very centre of the cloud'), ht: cue(id, 'about a hundred thousand times smaller'), pk: cue(id, 'packed with protons and neutrons'), sn: cue(id, "some nuclei don't stay the same"), to: cue(id, 'They throw out particles, or energy'), nx: cap(id, cue(id, 'So what changes in a nucleus'), 8), end: dur(id) - 1};
})();
export const CL13 = {cx: 470, cy: 560, a: 190};
export const IN13 = {cx: 1360, cy: 520, R: 230, r: 26};
export const NUC13 = clusterLayout(10, 12, 5);
/** Arrow tips from the inset cluster (α?, β?, γ?). */
export const OUT13 = [{dx: 200, dy: -170, t: 'α?', c: AMBER}, {dx: 290, dy: 0, t: 'β?', c: NAVY}, {dx: 200, dy: 170, t: 'γ?', c: AMBER}] as const;
/** The handoff board at scene frame f (`final`: every part drawn, for the next video's first frame). */
export const HandoffBoard13: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean}> = ({f, final = false, heading = true, chip = true}) => {
	const at = (x: number) => (final ? -60 : x);
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const zoom = 1 + 0.2 * o(HD.vc, 40);
	const tr = final ? 1 : prog(f, HD.sn, 10);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD.nx} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD.nx + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				{!final && f < HD.vc + 30 ? <g opacity={1 - prog(f, HD.vc, 20)}>
					<circle cx={IN13.cx} cy={IN13.cy} r={170} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="14 9" />
					<circle cx={IN13.cx} cy={IN13.cy} r={14} fill={NUC_RED} />
					<circle cx={IN13.cx + 170 * Math.cos(f / 25)} cy={IN13.cy + 170 * Math.sin(f / 25)} r={16} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} />
				</g> : null}
				<g opacity={o(HD.cp, 20)}><Cloud1s cx={CL13.cx} cy={CL13.cy} a={CL13.a * zoom} id="m8v13-h" color={TEAL.stroke} /></g>
				<circle cx={CL13.cx} cy={CL13.cy} r={9} fill={NUC_RED} stroke="#ffffff" strokeWidth={2} />
				<g opacity={o(HD.vc + 20)}>
					<line x1={CL13.cx + 8} y1={CL13.cy - 6} x2={IN13.cx - IN13.R * 0.7} y2={IN13.cy - IN13.R * 0.72} stroke={GREY.stroke} strokeWidth={2.5} />
					<line x1={CL13.cx + 8} y1={CL13.cy + 6} x2={IN13.cx - IN13.R * 0.7} y2={IN13.cy + IN13.R * 0.72} stroke={GREY.stroke} strokeWidth={2.5} />
					<circle cx={IN13.cx} cy={IN13.cy} r={IN13.R} fill="#fffdf8" stroke={INK} strokeWidth={4} />
					<circle cx={CL13.cx} cy={CL13.cy} r={20} fill="none" stroke={INK} strokeWidth={3} />
				</g>
				<NucleonCluster cx={IN13.cx} cy={IN13.cy} r={IN13.r} discs={NUC13} pFill={NUC_RED} nFill={NEUTRON} tremble={tr} f={final ? HD.end : f} opacity={o(HD.pk)} />
				{OUT13.map((a, i) => { const p = final ? 1 : prog(f, HD.to + i * 8, 16); if (p <= 0.001) return null; const x0 = IN13.cx + a.dx * 0.42, y0 = IN13.cy + a.dy * 0.42, x1 = x0 + (a.dx * 0.62) * p, y1 = y0 + (a.dy * 0.62) * p; return <g key={i}><line x1={x0} y1={y0} x2={x1} y2={y1} stroke={a.c.stroke} strokeWidth={5} strokeDasharray="12 8" /><circle cx={x1} cy={y1} r={7} fill={a.c.stroke} /><text x={x1 + 16} y={y1 + 12} style={T(40, a.c.ink)}>{a.t}</text></g>; })}
			</FrameSvg>
			{!final ? <Lbl x={IN13.cx} y={IN13.cy + 230} at={-30} out={HD.vc} color={GREY.ink} size={30} anchor="middle">a little planet on a path?</Lbl> : null}
			{!final ? <HandTag x={0} y={0} at={HD.cp + 20} out={HD.vc} color={GREY.stroke} marks={[{kind: 'cross', cx: IN13.cx, cy: IN13.cy, size: 120}]} /> : null}
			<Lbl x={CL13.cx} y={CL13.cy + 300} at={at(HD.cp)} color={TEAL.ink} size={30} anchor="middle">the atom: a cloud of probability</Lbl>
			<Lbl x={IN13.cx} y={IN13.cy - IN13.R - 24} at={at(HD.pk)} color={INK} size={28} anchor="middle">nucleus: protons and neutrons (not to scale)</Lbl>
			<Lbl x={820} y={830} at={at(HD.ht)} color={INK} size={30}>atom ≈ 10⁻¹⁰ m, nucleus ≈ 10⁻¹⁵ m: about 10⁵ times smaller</Lbl>
			{chip ? <Chip x={96} y={870} at={at(HD.nx)} size={30} w={1728} color={INK} border={INK}>Next: what changes in a nucleus during alpha, beta and gamma decay?</Chip> : null}
		</>
	);
};
/** v13's final frame for the next video. */
export const M8V13FinalFrame: React.FC = () => <HandoffBoard13 f={HD.end} final />;
export const S17: React.FC = () => <HandoffBoard13 f={useCurrentFrame()} />;

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <><span style={{color: GREY.ink}}>Bohr:</span> set orbits, quantisation assumed, one electron only.</>, at: 2},
		{content: <><span style={{color: NAVY.ink}}>Schrödinger:</span> electron as a 3D wave; energies come out.</>, at: 6},
		{content: <><span style={{color: TEAL.ink}}>|ψ|²</span> = probability per unit volume.</>, at: 10},
		{content: <><span style={{color: TEAL.ink}}>Orbital:</span> 3D region of likelihood, no path.</>, at: 14},
		{content: <>Verdict: foundational; no picture of motion.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>An orbit is where the electron goes. An orbit<span style={{color: TEAL.ink}}>al</span> is where {"it's"} likely to be.</>} sub={<>The extra &quot;al&quot; is for all the places it might be.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
