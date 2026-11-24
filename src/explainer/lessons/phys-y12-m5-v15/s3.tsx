// Scenes 11 to 16: two attempts with brief feedback, the handoff to the whirling-bung investigation (its last
// frame is exported for the next lesson as `V15FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, BallSvg, Chip, CrossedChip, DISPLAY, Row, Sub, VecArrow} from '../../physics/projectile/board';
import {BUNG_DEFAULT, BungRig, bungGeom, droopDeg, hangerBottom} from '../../physics/circular/bung';
import {A1, A2, ACCENT, HEAD, HEAD_SIZE, cue, hold} from './common';
import {AMBER, KC, Lbl, NAVY, RightMark, VEL, card, fx, Title} from './parts';

const MSu: React.FC = () => <> m s⁻¹</>;
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A ball of mass 0.30 kg on a <M at={mark}>smooth horizontal table</M> is attached to a light string and moves in a horizontal circle of radius 0.60 m at a <M at={mark === undefined ? undefined : mark + 8}>constant speed</M> of 4.0 m s⁻¹. (a) Calculate the tension in the string. (b) State the work done by the tension during <M at={mark === undefined ? undefined : mark + 16}>one revolution</M>. Justify your answer.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>A stone of mass 0.40 kg on a light string of length 0.50 m moves in a <M at={mark}>vertical circle</M>. <M at={mark === undefined ? undefined : mark + 8}>At the top</M> of the circle its speed is 3.0 m s⁻¹. <M at={mark === undefined ? undefined : mark + 16}>Air resistance is negligible</M>. (a) Calculate the speed of the stone at the bottom of the circle. (b) Explain why the stone is not undergoing uniform circular motion.</>;

const txt = (size: number, color: string = INK, weight = 800): React.CSSProperties => ({fontFamily: 'Inter Tight, sans-serif', fontWeight: weight, fontSize: size, fill: color} as React.CSSProperties);

/** Attempt 1's picture (top view, answer-free): table outline, peg, string 0.60 m, the ball and its velocity. */
const TablePicture: React.FC<{tAt?: number; rightAt?: number}> = ({tAt, rightAt}) => {
	const f = useCurrentFrame();
	const P: [number, number] = [300, 290], R = 200;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<rect x={30} y={40} width={560} height={480} rx={16} fill="#efe6d3" stroke={INK} strokeWidth={3} />
			<text x={50} y={80} style={txt(32, INK_SOFT, 700)}>smooth table (top view)</text>
			<circle cx={P[0]} cy={P[1]} r={R} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />
			<line x1={P[0]} y1={P[1]} x2={P[0] + R} y2={P[1]} stroke={INK} strokeWidth={4} />
			<circle cx={P[0]} cy={P[1]} r={10} fill={NAVY.stroke} />
			<text x={P[0] + 60} y={P[1] - 14} style={txt(32, NAVY.ink)}>0.60 m</text>
			{tAt !== undefined ? <VecArrow x={P[0] + R} y={P[1]} dx={-120} dy={0} color={AMBER.stroke} width={7} head={22} at={tAt} /> : null}
			{rightAt !== undefined && f >= rightAt ? <RightMark x={P[0] + R} y={P[1]} a={[-1, 0]} b={[0, -1]} s={22} opacity={prog(f, rightAt, 10)} /> : null}
			<VecArrow x={P[0] + R} y={P[1]} dx={0} dy={-140} color={VEL.stroke} width={7} head={22} />
			<BallSvg cx={P[0] + R} cy={P[1]} d={44} />
			<text x={P[0] + R + 20} y={P[1] - 110} style={txt(30, VEL.ink)}>4.0 m s⁻¹</text>
		</svg>
	);
};
/** Attempt 2's picture (answer-free): pivot, dashed vertical circle, string 0.50 m, the stone at the top only. */
const StonePicture: React.FC<{hAt?: number}> = ({hAt}) => {
	const f = useCurrentFrame();
	const P: [number, number] = [320, 290], R = 190;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<circle cx={P[0]} cy={P[1]} r={R} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="12 9" />
			<line x1={P[0]} y1={P[1]} x2={P[0]} y2={P[1] - R} stroke={INK} strokeWidth={4} />
			<circle cx={P[0]} cy={P[1]} r={10} fill={NAVY.stroke} />
			<text x={P[0] + 14} y={P[1] - R / 2} style={txt(32, NAVY.ink)}>0.50 m</text>
			<circle cx={P[0]} cy={P[1] - R} r={14} fill={INK} />
			<text x={P[0] + 22} y={P[1] - R - 22} style={txt(30, INK)}>stone</text>
			<VecArrow x={P[0]} y={P[1] - R} dx={-130} dy={0} color={VEL.stroke} width={7} head={22} />
			<text x={P[0] - 190} y={P[1] - R - 26} style={txt(30, VEL.ink)}>3.0 m s⁻¹</text>
			<text x={P[0]} y={P[1] + R + 50} textAnchor="middle" style={txt(32, INK, 700)}>vertical circle (side view)</text>
			{hAt !== undefined && f >= hAt ? <g opacity={prog(f, hAt, 12)}>
				<line x1={P[0] + R + 40} y1={P[1] - R} x2={P[0] + R + 40} y2={P[1] + R} stroke={NAVY.stroke} strokeWidth={4} />
				<line x1={P[0] + R + 30} y1={P[1] - R} x2={P[0] + R + 50} y2={P[1] - R} stroke={NAVY.stroke} strokeWidth={4} />
				<line x1={P[0] + R + 30} y1={P[1] + R} x2={P[0] + R + 50} y2={P[1] + R} stroke={NAVY.stroke} strokeWidth={4} />
				<text x={P[0] + R + 60} y={P[1] + 10} style={txt(32, NAVY.ink)}>h = 2r</text>
			</g> : null}
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<TablePicture />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<StonePicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(28, INK, 600), whiteSpace: 'normal', lineHeight: 1.26}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 330, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const mv = cue(id, 'm v squared over r'), eight = cue(id, 'eight point zero'), work = cue(id, 'The work it does'), rightA = cue(id, 'right angles'), motion = cue(id, "ball's motion"), slip = cue(id, 'The classic slip'), thirty = cue(id, 'thirty joules');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={364} givens={<>m = 0.30 kg | smooth horizontal table | r = 0.60 m | constant 4.0<MSu /></>}><Q1 mark={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={mv} ageAt={work} size={TYPE.current} oldSize={34}>(a) F<Sub>T</Sub> = mv²/r = 0.30 × 4.0² ÷ 0.60</Row>
				<Row at={eight - 10} ageAt={work} size={52} oldSize={38}>&nbsp;&nbsp;&nbsp;&nbsp;= <AnswerBox at={eight}><span>F<Sub>T</Sub> = {fx(A1.FT, 1)} N</span></AnswerBox></Row>
				<Row at={work} size={TYPE.current}>(b) W = Fs cos 90° = 0 in every step</Row>
				<Row at={motion - 10} size={52}>&nbsp;&nbsp;&nbsp;&nbsp;<AnswerBox at={motion}><span>W = 0 J per revolution</span></AnswerBox></Row>
				<Row at={motion + 20} size={30}><span style={{color: KC.ink}}>(K stays ½ × 0.30 × 4.0² = {fx(A1.K, 1)} J)</span></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={thirty} size={32} caption="F is never along the path">W = 8.0 × 2π × 0.60 = {fx(A1.wrongW, 0)} J</CrossedChip>
			<Picture><TablePicture tAt={mv} rightAt={rightA} /></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const radii = cue(id, 'two radii'), vsq = cue(id, 'v squared at the bottom'), t286 = cue(id, 'twenty-eight point six'), v535 = cue(id, 'five point three five'), gravity = cue(id, 'Gravity has a part'), uniform = cue(id, "isn't uniform"), slip = cue(id, 'The slip'), still = cue(id, 'Gravity still does');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={328} givens={<>m = 0.40 kg | string 0.50 m, vertical circle | 3.0<MSu /> at the top | air resistance negligible</>}><Q2 mark={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 420, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={radii} ageAt={gravity} size={TYPE.current} oldSize={32}>(a) h = 2r = 2 × 0.50 = {fx(A2.h, 1)} m</Row>
				<Row at={vsq} ageAt={gravity} size={TYPE.current} oldSize={32}>v² = 3.0² + 2 × 9.8 × 1.0<span style={{opacity: prog(useCurrentFrame(), t286, 10)}}> = {fx(A2.vb2, 1)}</span></Row>
				<Row at={v535 - 10} size={52}>&nbsp;&nbsp;&nbsp;&nbsp;<AnswerBox at={v535}><span>v = {fx(A2.vb, 2)}<MSu /></span></AnswerBox></Row>
				<Row at={gravity} size={34}>(b) the weight has a part along the path (not at the top or bottom),</Row>
				<Row at={uniform} size={34}>&nbsp;&nbsp;&nbsp;&nbsp;so gravity does work and the speed changes</Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={still} size={32} caption="gravity does work">v = 3.0<MSu /> (tension does no work)</CrossedChip>
			<Picture><StonePicture hAt={radii} /></Picture>
		</>
	);
};

// ---------- 15. handoff: the whirling bung ----------
/** The apparatus as v15 leaves it: three slotted masses (150 g) and the 25 g bung, so the droop is 9.6 degrees. */
export const B15 = {lay: BUNG_DEFAULT, n: 3, alpha: droopDeg(0.025, 0.15)};
const LAP15 = 75;
/** Bung phase: steady laps from `startAt`, then it eases forward to the right-hand edge and stays from `stopAt`. */
const bungPhase = (f: number, startAt: number, stopAt: number) => {
	if (f <= startAt) return 0;
	const free = (k: number) => { const d = k - startAt; return (d < 20 ? (d * d) / 40 : d - 10) * ((2 * Math.PI) / LAP15); };
	if (f < stopAt) return free(f);
	const p0 = free(stopAt);
	const target = Math.ceil(p0 / (2 * Math.PI) + 0.25) * 2 * Math.PI;
	const t = Math.min(1, (f - stopAt) / 30);
	return p0 + (target - p0) * (1 - (1 - t) * (1 - t));
};
export const HandoffBoard: React.FC<{phase?: number; recapAt?: number; recap2At?: number; recapOut?: number; bungAt?: number; tubeAt?: number; massAt?: number; inAt?: number; askAt?: number; labelOut?: number; glow?: number}> = ({phase = 0, recapAt = -300, recap2At = -300, recapOut = -200, bungAt = -300, tubeAt = -300, massAt = -300, inAt = -100, askAt = -60, labelOut = -150, glow = 0}) => {
	const f = useCurrentFrame();
	const {lay, n, alpha} = B15;
	const g = bungGeom(lay, alpha, phase);
	const ux = g.top[0] - g.bung[0], uy = g.top[1] - g.bung[1], ul = Math.hypot(ux, uy);
	const hb = hangerBottom(g.hookY, lay.hangerS, n);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BungRig lay={lay} alpha={alpha} phase={phase} n={n} hangerGlow={glow} />
				<VecArrow x={g.bung[0]} y={g.bung[1]} dx={(ux / ul) * 110} dy={(uy / ul) * 110} color={AMBER.stroke} width={8} head={24} at={inAt} />
				<VecArrow x={lay.tubeX + 70} y={hb - 150} dx={0} dy={120} color={AMBER.stroke} width={8} head={24} at={inAt + 6} />
			</FrameSvg>
			<Lbl x={lay.tubeX + 92} y={hb - 70} at={inAt + 6} color={AMBER.ink} size={TYPE.current}>Mg</Lbl>
			<Lbl x={lay.tubeX + lay.L + 50} y={g.c[1] + 60} at={bungAt} out={labelOut} color={INK} size={30}>rubber bung</Lbl>
			<Lbl x={lay.tubeX + 110} y={g.tubeBottom - 30} at={tubeAt} out={labelOut} color={INK} size={30}>glass tube</Lbl>
			<Lbl x={lay.tubeX - 60} y={hb - 60} at={massAt} out={labelOut} color={INK} anchor="end" size={30}>hanging masses</Lbl>
			{f < recapOut + 12 ? <Enter at={recapAt} out={recapOut} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>So far</Title>
					<div style={{...DISPLAY(34, AMBER.ink, 800), whiteSpace: 'normal', marginTop: 4}}>F = mv²/r: the inward force a circle needs</div>
					<div style={{...DISPLAY(34, INK, 800), whiteSpace: 'normal', marginTop: 6, opacity: prog(f, recap2At, 12)}}>that force does no work</div>
				</div>
			</Enter> : null}
			<Chip x={1290} y={300} at={askAt} size={40} border={INK}>F = mv²/r ?</Chip>
			<Chip x={1290} y={420} at={askAt + 8} size={36} w={534} color={INK} border={INK}>Next: how can measurements test the circular-force relationship?</Chip>
		</>
	);
};
/** v15's final frame, for the next lesson's opening. */
export const V15FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const fEq = cue(id, 'F equals m v'), noWork = cue(id, 'does no work'), bung = cue(id, 'rubber bung'), tube = cue(id, 'runs down through'), masses = cue(id, 'hanging masses'), inwards = cue(id, 'pulls the bung inwards'), measure = cue(id, 'So can measurements'), r = cue(id, 'squared over r', 2);
	const phase = bungPhase(f, bung, Math.max(bung + 40, inwards - 24));
	const glow = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - masses) / 40)));
	return <HandoffBoard phase={phase} recapAt={fEq} recap2At={noWork} recapOut={measure} bungAt={bung} tubeAt={tube} massAt={masses} inAt={inwards + 8} askAt={r} labelOut={measure} glow={glow} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>W = Fs cos θ: a force at 90° to the motion does no work.</>, at: 2},
		{content: <>UCM: the inward force is at 90° to v, so W = 0 each lap.</>, at: 6},
		{content: <>W<Sub>net</Sub> = ΔK = 0, so the speed is constant; never W = F × 2πr.</>, at: 10},
		{content: <>Level circle: K and U constant, so total energy constant.</>, at: 14},
		{content: <>Vertical circle: gravity does work, so the speed changes.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: AMBER.ink}}>Across steers, </span><span style={{color: KC.ink}}>along speeds.</span></span>} sub="Split a force across and along the path: only the along part does work."
					picture={<svg width={584} height={220}>
						<path d="M60,200 A 170 170 0 0 1 230,30" fill="none" stroke="#c3c6c9" strokeWidth={34} />
						<circle cx={230} cy={30} r={12} fill={INK} />
						<VecArrow x={230} y={30} dx={0} dy={110} color={AMBER.stroke} width={6} head={18} />
						<VecArrow x={230} y={30} dx={-90} dy={0} color={VEL.stroke} width={6} head={18} />
						<text x={244} y={120} style={txt(28, AMBER.ink)}>across: steers</text>
						<circle cx={525} cy={60} r={48} fill="none" stroke={INK} strokeWidth={2} strokeDasharray="7 6" />
						<BallSvg cx={483} cy={84} d={24} />
						<VecArrow x={483} y={84} dx={26} dy={45} color={AMBER.stroke} width={5} head={14} dash="8 6" />
						<text x={390} y={170} style={txt(28, KC.ink)}>along: speeds</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
