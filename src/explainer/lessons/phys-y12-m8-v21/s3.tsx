// Scenes 14 to 19: attempt 1 (the K⁻: charge, family, antiparticle) and its feedback, attempt 2 (force and carrier for
// three processes) and its feedback, the handoff (the table with generation 1 and the photon bright, the rest relit with
// gold "made in collisions" badges, a collider ring behind it; its last frame is exported as `M8V21FinalFrame`) and the
// key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {QBag, QDot} from '../../physics/atom/particles';
import type {CellState} from '../../physics/atom/particles';
import {ACCENT, HEAD, HEAD_NEXT, HEAD_SIZE, K_M, K_P, K_SLIP, Q_DOWN, Q_UP, cap, cue, dur, hold} from './common';
import {BadgeLegend, DOWN, GAMMA, GOLD, GREY, INK, LEP, Lbl, NU, SMBoard, SM_MID, Shrunk, UP, VIOLET, WZ, fr3} from './parts';

// ---------- 14. attempt 1 ----------
const Q1: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>The K⁻ particle has quark composition s {U('ū')}. Quark charges: u +⅔e, s −⅓e. (a) Calculate the charge of the K⁻. (b) State whether it is a baryon or a meson. (c) Give the quark composition of its antiparticle.</>;
};
const Pic1: React.FC<{w?: number}> = ({w = 600}) => (
	<svg width={w} height={(w * 420) / 600} viewBox="0 0 600 420" style={{overflow: 'visible'}}>
		<rect x={4} y={4} width={592} height={412} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
		<QBag x={300} y={190} r={140} tag="K⁻ (model)" tagSize={40}>
			<QDot x={230} y={190} r={52} label="s" tone={DOWN} size={56} />
			<QDot x={370} y={190} r={52} label="ū" tone={UP} size={56} anti />
		</QBag>
	</svg>
);
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<Pic1 />}><Q1 /></QuestionScene></Accent>;

// ---------- 15. feedback 1 ----------
export const S15: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const s3 = cue(id, 'gives minus one third'), m1 = cue(id, 'the total is minus one'), me = cue(id, "so it's a meson"), kp = cue(id, 'which is the K plus'), sl = cue(id, 'The slip is giving'), fc = cap(id, cue(id, 'fractional charge'), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>u +⅔e; s −⅓e; antiquarks: opposite charge</>}><Q1 u /></Shrunk>
			<div style={{position: 'absolute', left: 1220, top: 360}}><Pic1 w={620} /></div>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={-30} size={40}>K⁻ = s ū: add the quark charges</Row>
				<Row at={s3} ageAt={m1} size={52} oldSize={40}>{`s: ${fr3(Q_DOWN)}e;  ū: ${fr3(-Q_UP)}e (antiquark)`}</Row>
				<Row at={m1} size={56}><AnswerBox at={m1 + 4}>{`s ū: ${fr3(Q_DOWN)} + (${fr3(-Q_UP)}) = ${fr3(K_M)}e`}</AnswerBox></Row>
				<Row at={me} size={44}>quark + antiquark → meson</Row>
				<Row at={kp} size={44}>{`antiparticle: s̄ u = K⁺ (${fr3(K_P)})`}</Row>
			</div>
			{[['(a) charge', m1], ['(b) baryon or meson', me], ['(c) antiparticle', kp]].map(([t, at], i) => <Lbl key={i} x={1240} y={840 + i * 50} at={-30} color={INK} size={34}>{`${t}${f >= (at as number) ? ' ✓' : ''}`}</Lbl>)}
			<CrossedChip x={96} y={800} at={sl} crossAt={fc} size={34} caption="antiquarks reverse the charge">{`${fr3(Q_DOWN)} + ${fr3(Q_UP).slice(1)} = ${fr3(K_SLIP)}`}</CrossedChip>
		</>
	);
};

// ---------- 16. attempt 2 ----------
const Q2: React.FC<{u?: boolean}> = ({u = false}) => {
	const U = (t: string) => (u ? <u>{t}</u> : t);
	return <>Identify the fundamental {U('force')} responsible and its force {U('carrier')} for each process: (i) beta-minus decay of a neutron; (ii) the binding of quarks inside a proton; (iii) the repulsion between two electrons.</>;
};
const Pic2: React.FC<{w?: number}> = ({w = 600}) => (
	<svg width={w} height={(w * 520) / 600} viewBox="0 0 600 520" style={{overflow: 'visible'}}>
		{[0, 1, 2].map(i => <rect key={i} x={4} y={4 + i * 172} width={592} height={160} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />)}
		<text x={30} y={98} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>(i)</text>
		<QBag x={330} y={84} r={66}><QDot x={300} y={100} r={24} label="u" tone={UP} size={28} /><QDot x={360} y={100} r={24} label="d" tone={DOWN} size={28} /><QDot x={330} y={50} r={24} label="d" tone={DOWN} size={28} /></QBag>
		<text x={450} y={98} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: INK}}>n</text>
		<text x={30} y={270} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>(ii)</text>
		<QBag x={330} y={256} r={66}><QDot x={300} y={272} r={24} label="u" tone={UP} size={28} /><QDot x={360} y={272} r={24} label="u" tone={UP} size={28} /><QDot x={330} y={222} r={24} label="d" tone={DOWN} size={28} /></QBag>
		<text x={450} y={270} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: INK}}>p</text>
		<text x={30} y={442} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 40, fill: INK}}>(iii)</text>
		<circle cx={260} cy={428} r={24} fill={LEP.stroke} /><circle cx={400} cy={428} r={24} fill={LEP.stroke} />
		<text x={260} y={440} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: '#ffffff'}}>e⁻</text>
		<text x={400} y={440} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: '#ffffff'}}>e⁻</text>
	</svg>
);
export const S16: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<Pic2 />}><Q2 /></QuestionScene></Accent>;

// ---------- 17. feedback 2 ----------
export const S17: React.FC = () => {
	const id = 'feedback-2';
	const wb = cue(id, 'the W minus boson'), gl = cue(id, 'carried by gluons'), ph = cue(id, 'carried by photons'), sl = cue(id, 'The slip is calling beta decay'), ty = cap(id, cue(id, 'changes quark type'), 24);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk accent={ACCENT} gy={300} givens={<>(i) beta-minus decay of a neutron | (ii) quarks bound inside a proton | (iii) two electrons repelling</>}><Q2 u /></Shrunk>
			<div style={{position: 'absolute', left: 1290, top: 400}}><Pic2 w={480} /></div>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', flexDirection: 'column', gap: 20}}>
				<Row at={wb} size={44}><AnswerBox at={wb + 4}><span style={{color: WZ.ink}}>(i) weak: W⁻ (d → u)</span></AnswerBox></Row>
				<Row at={gl} size={44}><AnswerBox at={gl + 4}><span style={{color: VIOLET.ink}}>(ii) strong: gluons</span></AnswerBox></Row>
				<Row at={ph} size={44}><AnswerBox at={ph + 4}><span style={{color: GAMMA.ink}}>(iii) electromagnetic: photons</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={sl} crossAt={ty} size={32} caption="flavour change → weak">beta decay: strong force (it&apos;s in the nucleus)</CrossedChip>
		</>
	);
};

// ---------- 18. handoff ----------
export const HD21 = (() => {
	const id = 'handoff-v22';
	return {id, lt: cue(id, 'Look at the table again'), mo: cue(id, 'Most of it never turns up in ordinary matter'), cs: cue(id, 'Charm, strange, top and bottom'), mt: cue(id, 'the muon and the tau'), wz: cue(id, 'the W, the Z and the Higgs'), mc: cue(id, 'made, and then caught'), ha: cap(id, cue(id, 'So how do accelerators'), 8), end: dur(id) - 1};
})();
export const GEN1 = ['u', 'd', 'e', 've', 'gamma'];
export const BADGED = ['c', 's', 't', 'b', 'mu', 'tau', 'W', 'Z', 'H'];
/** The collider ring behind the table: an ellipse, two dots circling in opposite directions (phase in turns) and a
 *  flash where they meet at the bottom. */
export const RING21 = {cx: 900, cy: 520, rx: 860, ry: 330};
export const RingBehind: React.FC<{phase: number; flash: number; bright?: number; opacity?: number}> = ({phase, flash, bright = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const at = (a: number) => [RING21.cx + RING21.rx * Math.sin(a), RING21.cy + RING21.ry * Math.cos(a)] as const;
	const [x1, y1] = at(2 * Math.PI * phase), [x2, y2] = at(-2 * Math.PI * phase);
	return (
		<g opacity={opacity}>
			<ellipse cx={RING21.cx} cy={RING21.cy} rx={RING21.rx} ry={RING21.ry} fill="none" stroke={bright > 0.5 ? INK : '#8a8378'} strokeWidth={4 + 3 * bright} />
			<circle cx={x1} cy={y1} r={12} fill="#c4587a" stroke="#fffdf8" strokeWidth={3} />
			<circle cx={x2} cy={y2} r={12} fill="#c4587a" stroke="#fffdf8" strokeWidth={3} />
			{flash > 0.001 ? <g opacity={flash}>{Array.from({length: 10}, (_, i) => { const a = (i / 10) * 2 * Math.PI; return <line key={i} x1={RING21.cx + 14 * Math.cos(a)} y1={RING21.cy + RING21.ry + 14 * Math.sin(a)} x2={RING21.cx + 44 * Math.cos(a)} y2={RING21.cy + RING21.ry + 44 * Math.sin(a)} stroke={GOLD.stroke} strokeWidth={5} strokeLinecap="round" />; })}</g> : null}
		</g>
	);
};
export const HandoffBoard21: React.FC<{f: number; final?: boolean; heading?: boolean; chip?: boolean; tagPulse?: number; big?: Readonly<Record<string, number>>; ringBright?: number; side?: number; flashAt?: number}> = ({f, final = false, heading = true, chip = true, tagPulse = 0, big = {}, ringBright = 0, side = 1, flashAt}) => {
	const o = (x: number, d = 14) => (final ? 1 : prog(f, x, d));
	const dim = final ? 0 : prog(f, HD21.mo, 16);
	const relight = (cid: string) => (['c', 's', 't', 'b'].includes(cid) ? o(HD21.cs + ['c', 's', 't', 'b'].indexOf(cid) * 8) : ['mu', 'tau'].includes(cid) ? o(HD21.mt + (cid === 'tau' ? 8 : 0)) : ['W', 'Z', 'H'].includes(cid) ? o(HD21.wz + ['W', 'Z', 'H'].indexOf(cid) * 8) : o(HD21.wz + 30));
	const state = (cid: string): CellState => {
		if (GEN1.includes(cid)) return {o: 1, tint: 1};
		const r = relight(cid), lit = dim * (1 - r) < 0.5;
		return {o: 1, tint: lit ? 1 : 0, dim: lit ? 0 : 1, tag: BADGED.includes(cid) ? r : 0, lit: BADGED.includes(cid) ? tagPulse * r : 0, big: big[cid] ?? 0};
	};
	const ringIn = o(HD21.mc, 20);
	const ph = final ? 1 : 0.5 + 0.5 * prog(f, HD21.mc, 50, t => t);
	return (
		<>
			{heading ? (!final ? <><SceneHeading text={HEAD} at={-200} out={HD21.ha} size={HEAD_SIZE} /><SceneHeading text={HEAD_NEXT} at={HD21.ha + 8} size={HEAD_SIZE} /></> : <SceneHeading text={HEAD_NEXT} at={-200} size={HEAD_SIZE} />) : null}
			<FrameSvg>
				<RingBehind phase={flashAt === undefined ? ph : 1 + prog(f, flashAt - 60, 60, t => t)} flash={flashAt === undefined ? (final ? 1 : prog(f, HD21.mc + 50, 10)) : Math.max(1 - prog(f, 1, 20), prog(f, flashAt, 10))} bright={ringBright} opacity={ringIn} />
				<SMBoard g={SM_MID} state={state} higgs={1} higgsLit={tagPulse} gravity={side} gravityAt={[1360, 600]} />
				<BadgeLegend x={1380} y={760} opacity={o(HD21.cs) * side} />
			</FrameSvg>
			<Lbl x={RING21.cx + 60} y={RING21.cy + RING21.ry + 50} at={final ? -60 : HD21.mc + 56} color={INK} size={34}>?</Lbl>
			{chip ? <Chip x={96} y={890} at={final ? -60 : HD21.ha} size={30} w={1728} color={INK} border={INK}>Next: how do accelerators create and test evidence about particles?</Chip> : null}
		</>
	);
};
/** v21's final frame for the next video. */
export const M8V21FinalFrame: React.FC = () => <HandoffBoard21 f={HD21.end} final />;
export const S18: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<HandoffBoard21 f={f} />
			<HandTag x={250} y={790} text="generation 1 and the photon: everyday" at={HD21.mo + 20} out={HD21.cs} size={30} color={GREY.ink} />
		</>
	);
};

// ---------- 19. key notes ----------
export const S19: React.FC = () => {
	const notes = [
		{content: <>Quarks: <span style={{color: UP.ink}}>u, c, t (+⅔)</span>; <span style={{color: DOWN.ink}}>d, s, b (−⅓)</span>.</>, at: 2},
		{content: <>Leptons: <span style={{color: LEP.ink}}>e⁻, μ⁻, τ⁻ (−1)</span>; <span style={{color: NU.ink}}>three neutrinos (0)</span>.</>, at: 6},
		{content: <>Antiquarks reverse charge: ū −⅔, d̄ +⅓.</>, at: 10},
		{content: <>Carriers: <span style={{color: GAMMA.ink}}>γ (EM)</span>, <span style={{color: VIOLET.ink}}>gluons (strong)</span>, <span style={{color: WZ.ink}}>W, Z (weak)</span>.</>, at: 14},
		{content: <><span style={{color: GREY.ink}}>Gravity is not in the Standard Model.</span></>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={<MemoryCard at={24} main={<>Six quarks, six leptons, four carriers, one Higgs.</>} />} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
