// Scenes 13 to 18: two attempts with brief feedback, the handoff (a satellite 400 km above Australia at true
// scale; its last frame is exported for the next lesson as `V17FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Row, VecArrow} from '../../physics/projectile/board';
import {A1, A2, ACCENT, ALT, HEAD, HEAD_SIZE, RE, SURF, altPx, cue, hold} from './common';
import {AMBER, AUS, DashCircle, Earth, GREY, Lbl, Mars, NAVY, Satellite, T, TEAL, VIOLET, fx, polar, sci} from './parts';

const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{m1?: number; m2?: number}> = ({m1, m2}) => <>Mars has mass 6.42 × 10²³ kg and <M at={m2}>radius</M> 3.40 × 10⁶ m. (a) Calculate the gravitational field strength at the <M at={m1}>surface</M> of Mars. (b) Express your answer as a percentage of Earth's surface value, g = 9.8 N kg⁻¹. (G = 6.67 × 10⁻¹¹ N m² kg⁻²)</>;
const Q2: React.FC<{m1?: number; m2?: number}> = ({m1, m2}) => <>At what <M at={m1}>altitude</M> above Earth's surface is the gravitational field strength <M at={m2}>one quarter</M> of its value at the surface? Earth's radius is 6.371 × 10⁶ m. Give your answer in metres.</>;

/** Attempt 1's picture: the painted Mars plate with its radius (nothing to read the answer off). */
const MarsPicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<Mars cx={300} cy={250} d={280} />
		<line x1={300} y1={250} x2={440} y2={250} stroke={NAVY.stroke} strokeWidth={5} />
		<circle cx={300} cy={250} r={7} fill={NAVY.stroke} />
		<T x={300} y={450} size={32} color={NAVY.ink} anchor="middle">r = 3.40 × 10⁶ m</T>
		<T x={300} y={90} size={30} anchor="middle">Mars</T>
	</svg>
);
/** Attempt 2's picture: the painted Earth only (no radius line, no altitude mark, no arrows). */
const EarthPicture: React.FC<{rAt?: number; hAt?: number}> = ({rAt, hAt}) => {
	const f = useCurrentFrame();
	const c: [number, number] = [300, 280], R = 126;
	const a = -30;
	const P1 = polar(c[0], c[1], R, a), P2 = polar(c[0], c[1], 2 * R, a);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<Earth cx={c[0]} cy={c[1]} d={rAt === undefined ? 280 : 2 * R} />
			{rAt !== undefined && f >= rAt ? <g opacity={prog(f, rAt, 12)}>
				<circle cx={c[0]} cy={c[1]} r={2 * R} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<line x1={c[0]} y1={c[1]} x2={P2[0]} y2={P2[1]} stroke={NAVY.stroke} strokeWidth={5} />
				<circle cx={c[0]} cy={c[1]} r={6} fill={NAVY.stroke} />
				<T x={c[0] - 10} y={c[1] + 2 * R + 46} size={32} color={NAVY.ink} anchor="middle">r = 2R</T>
			</g> : null}
			{hAt !== undefined && f >= hAt ? <g opacity={prog(f, hAt, 12)}>
				<line x1={P1[0] + 12} y1={P1[1] + 20} x2={P2[0] + 12} y2={P2[1] + 20} stroke={GREY.ink} strokeWidth={5} />
				<T x={P2[0] + 30} y={P2[1] + 70} size={32} color={GREY.ink}>h = R</T>
			</g> : null}
		</svg>
	);
};
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={36} marks={3} picture={<MarsPicture />}><Q1 /></QuestionScene></Accent>;
export const S15: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={2} picture={<EarthPicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '8px 22px', ...DISPLAY(26, INK, 600), whiteSpace: 'normal', lineHeight: 1.24}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 300, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 14. feedback 1 ----------
export const S14: React.FC = () => {
	const id = 'feedback-1';
	const use = cue(id, 'Use g equals'), squared = cue(id, 'radius squared'), gives = cue(id, 'That gives about'), kg = cue(id, 'per kilogram'), pct = cue(id, 'around thirty-eight'), slip = cue(id, 'The slip'), forget = cue(id, 'forgetting');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>M = 6.42 × 10²³ kg | r = 3.40 × 10⁶ m | Earth: g = 9.8 N kg⁻¹ | G = 6.67 × 10⁻¹¹ N m² kg⁻²</>}><Q1 m1={8} m2={squared} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={use} size={44}>(a) g = GM / r²</Row>
				<Row at={squared} ageAt={kg} size={44} oldSize={36}>&nbsp;&nbsp;= (6.67 × 10⁻¹¹ × 6.42 × 10²³) / (3.40 × 10⁶)²</Row>
				<Row at={gives} size={46}>&nbsp;&nbsp;= {sci(A1.top, 3)} / {sci(A1.r2, 3)} = <AnswerBox at={kg}><span>{fx(A1.g, 2)} N kg⁻¹</span></AnswerBox></Row>
				<Row at={pct} size={46}>(b) {fx(A1.g, 2)} ÷ 9.8 = {fx(A1.pct, 3)} ≈ <AnswerBox at={pct + 20}><span>{fx(A1.pct * 100, 0)} %</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={790} at={slip} crossAt={forget + 10} size={32} caption="r is squared">÷ 3.40 × 10⁶ → {sci(A1.unsq)} N kg⁻¹</CrossedChip>
			<Picture><MarsPicture /></Picture>
		</>
	);
};

// ---------- 16. feedback 2 ----------
export const S16: React.FC = () => {
	const id = 'feedback-2';
	const quarter = cue(id, 'A quarter'), dbl = cue(id, 'needs double'), rIs = cue(id, 'so r is'), alt = cue(id, 'The altitude is'), six = cue(id, 'six point three'), metres = cue(id, 'six metres'), slip = cue(id, 'The classic slip'), twoR = cue(id, 'answering two');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={300} givens={<>g = one quarter of its surface value | R<sub>E</sub> = 6.371 × 10⁶ m | altitude in metres</>}><Q2 m1={alt + 8} m2={quarter + 4} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 410, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={dbl} size={52}>g ∝ 1/r²: g ÷ 4 needs r × 2</Row>
				<Row at={rIs} size={52}><span style={{color: NAVY.ink}}>r = 2R</span> (from the centre)</Row>
				<Row at={alt} size={52}>h = r − R = 2R − R = R</Row>
				<Row at={six} size={60}>&nbsp;&nbsp;<AnswerBox at={metres}><span>h = {sci(A2.h, 3)} m</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={790} at={slip} crossAt={twoR + 16} size={32} caption="that's r, not h">h = 2R = {sci(A2.wrong, 3)} m</CrossedChip>
			<Picture><EarthPicture rAt={rIs} hAt={alt} /></Picture>
		</>
	);
};

// ---------- 17. handoff ----------
/** The final-frame layout (v18 opens on it): Earth 520 px across, the satellite at 400 km above Australia, true scale. */
export const FF = {cx: 600, cy: 580, d: 520};
const FR = FF.d / 2, FRS = FR + altPx(ALT.h, FR);
export const FF_SAT = polar(FF.cx, FF.cy, FRS, AUS);
/** Unit tangent (anticlockwise on screen) at the satellite. */
export const FF_TAN: [number, number] = [Math.sin((AUS * Math.PI) / 180), -Math.cos((AUS * Math.PI) / 180)];
export const FF_ORBIT_R = FRS;
export const HandoffBoard: React.FC<{showAt?: number; gAt?: number; cardAt?: number; askAt?: number; vAt?: number; circleAt?: number; nextAt?: number}> = ({showAt = -300, gAt = -200, cardAt = -200, askAt = -200, vAt = -200, circleAt = -200, nextAt = -60}) => {
	const f = useCurrentFrame();
	const [sx, sy] = FF_SAT;
	const ix = (FF.cx - sx) / FRS, iy = (FF.cy - sy) / FRS;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={prog(f, showAt, 20)}>
					<Earth cx={FF.cx} cy={FF.cy} d={FF.d} />
					<line x1={FF.cx} y1={FF.cy} x2={sx} y2={sy} stroke={NAVY.stroke} strokeWidth={4} />
					<circle cx={FF.cx} cy={FF.cy} r={7} fill={NAVY.stroke} />
				</g>
				<DashCircle cx={FF.cx} cy={FF.cy} r={FRS} at={circleAt} color={INK} width={2.5} dash="12 9" />
				<g opacity={prog(f, showAt, 20)}><Satellite cx={sx} cy={sy} w={48} rotate={136} /></g>
				<VecArrow x={sx + ix * 18} y={sy + iy * 18} dx={ix * 80} dy={iy * 80} color={VIOLET.stroke} width={7} head={20} at={gAt} />
				<VecArrow x={sx + FF_TAN[0] * 26} y={sy + FF_TAN[1] * 26} dx={FF_TAN[0] * 170} dy={FF_TAN[1] * 170} color={TEAL.stroke} width={6} head={22} dash="14 9" at={vAt} />
			</FrameSvg>
			<div style={{position: 'absolute', left: sx - 380, top: sy - 118, opacity: prog(f, showAt, 20), background: 'rgba(251,248,242,0.9)', borderRadius: 10, padding: '2px 12px 4px', border: `2.5px solid ${NAVY.stroke}`, ...DISPLAY(30, NAVY.ink, 800)}}>r = {sci(ALT.r, 3)} m</div>
			<Lbl x={sx + 30} y={sy + 44} at={gAt} color={VIOLET.ink} size={32}>g = {fx(ALT.g, 2)} N kg⁻¹</Lbl>
			<Lbl x={sx + FF_TAN[0] * 200 + 10} y={sy + FF_TAN[1] * 200 - 12} at={vAt} color={TEAL.ink} size={40}>v = ?</Lbl>
			<Enter at={cardAt} style={{position: 'absolute', left: 1120, top: 300, width: 700}}>
				<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.16)', padding: '12px 26px 16px'}}>
					<div style={{...DISPLAY(28, '#6b6358', 800), textTransform: 'uppercase', letterSpacing: 1.5}}>400 km up</div>
					<div style={{...DISPLAY(38, VIOLET.ink, 800)}}>g = {fx(ALT.g, 2)} N kg⁻¹</div>
					<div style={{...DISPLAY(32, INK, 700)}}>still {fx(ALT.pct * 100, 0)} % of {fx(SURF.g, 2)} at the surface</div>
				</div>
			</Enter>
			<Enter at={askAt} style={{position: 'absolute', left: 1120, top: 500, width: 700}}>
				<div style={{...DISPLAY(40, INK, 800), whiteSpace: 'normal'}}>So why doesn't it fall straight down?</div>
			</Enter>
			<Chip x={1120} y={680} at={nextAt} size={36} w={700} color={INK} border={INK}>Next: how does gravity maintain a circular orbit?</Chip>
		</>
	);
};
/** v17's final frame, for the next lesson's opening. */
export const V17FinalFrame: React.FC = () => <HandoffBoard />;
export const S17: React.FC = () => {
	const id = 'handoff';
	const strong = cue(id, 'still almost'), why = cue(id, 'Then why'), sideways = cue(id, 'sideways'), round = cue(id, 'going round'), circle = cue(id, 'circle');
	return <HandoffBoard showAt={0} gAt={strong - 20} cardAt={strong} askAt={why} vAt={sideways} circleAt={round} nextAt={circle} />;
};

// ---------- 18. key notes ----------
export const S18: React.FC = () => {
	const notes = [
		{content: <><span style={{color: AMBER.ink}}>F = GMm/r²</span>: equal and opposite, along the line of centres.</>, at: 2},
		{content: <><span style={{color: NAVY.ink}}>r runs centre to centre</span>; at altitude h, r = R + h.</>, at: 6},
		{content: <>Spherical body: acts as if its mass is at its centre (outside it).</>, at: 10},
		{content: <>F ∝ M, F ∝ m, F ∝ 1/r²; F against 1/r² is a straight line.</>, at: 14},
		{content: <><span style={{color: VIOLET.ink}}>g = GM/r² (N kg⁻¹)</span>, towards the centre; m cancels.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: NAVY.ink}}>Measure r from the middle. </span><span style={{color: AMBER.ink}}>Twice as far, a quarter of the pull.</span></span>} sub={`Surface g = ${fx(SURF.g, 2)} N kg⁻¹ (R = ${sci(RE, 3)} m)`} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
