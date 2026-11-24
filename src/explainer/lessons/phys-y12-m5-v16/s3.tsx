// Scenes 13 to 18: two attempts with brief feedback, the handoff to gravity (the Earth and the Moon; its last frame
// is exported for the next lesson as `V16FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, Row, Sup, VecArrow} from '../../physics/projectile/board';
import {BUNG_DEFAULT, BungRig, bungGeom, droopDeg} from '../../physics/circular/bung';
import type {BungLayout} from '../../physics/circular/bung';
import {A1, A2, ACCENT, APP, HEAD, HEAD_SIZE, cue, hold} from './common';
import {AMBER, Earth, Lbl, Moon, NAVY, ORANGE, VEL, bungPhaseAt, fx, stopAtEdge, txt} from './parts';

const RAD: React.FC = () => <>rad s<Sup>−1</Sup></>;
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>In a whirling-bung investigation, a rubber bung of mass <M at={mark}>20 g</M> is whirled with 0.50 m of string between the top of the tube and the bung. A mass of <M at={mark === undefined ? undefined : mark + 8}>100 g</M> hangs from the other end of the string. The bung completes <M at={mark === undefined ? undefined : mark + 16}>20 revolutions in 14.0 s</M>. (a) Calculate mω²L for the bung, where L is the length of string from the tube to the bung. (b) Compare your answer with the weight of the hanging mass, and suggest one reason for any difference.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>A student investigating circular motion keeps <M at={mark}>0.40 m of string</M> between the tube and a whirling bung, and plots the hanging weight Mg (y-axis) against ω² (x-axis), where ω is the bung's angular velocity. The graph is a straight line through the origin with a <M at={mark === undefined ? undefined : mark + 8}>gradient of 0.0080 kg m</M>. Determine the mass of the bung.</>;

/** Attempt 1's picture: the painted apparatus (about 320 px tall), ink tags only; no arrows, laps or times. */
const LAYQ: BungLayout = {...BUNG_DEFAULT, benchLeft: 300, benchRight: 1060};
const ApparatusPicture: React.FC = () => {
	const s = 0.55, alpha = droopDeg(A1.m, A1.M);
	const g = bungGeom(LAYQ, alpha, 0);
	const tx = 339 - s * 680, ty = 530 - s * 915;
	const P = (x: number, y: number): [number, number] => [tx + x * s, ty + y * s];
	const [sx, sy] = P((g.top[0] + g.bung[0]) / 2, (g.top[1] + g.bung[1]) / 2);
	const [bx, by] = P(g.bung[0], g.bung[1]);
	const [hx, hy] = P(LAYQ.tubeX, g.hookY + 130);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<g transform={`translate(${tx},${ty}) scale(${s})`}><BungRig lay={LAYQ} alpha={alpha} phase={0} n={2} /></g>
			<text x={sx} y={sy - 26} textAnchor="middle" style={txt(30, INK)}>L = 0.50 m</text>
			<text x={bx} y={by + 52} textAnchor="middle" style={txt(30, INK)}>20 g</text>
			<text x={hx + 34} y={hy} style={txt(30, INK)}>100 g</text>
		</svg>
	);
};
/** Attempt 2's picture: the graph sketch (only what the card states). */
const GraphPicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<line x1={110} y1={460} x2={620} y2={460} stroke={INK} strokeWidth={4} />
		<line x1={110} y1={460} x2={110} y2={60} stroke={INK} strokeWidth={4} />
		<line x1={110} y1={460} x2={560} y2={110} stroke={NAVY.stroke} strokeWidth={5} />
		<text x={620} y={505} textAnchor="end" style={txt(30, INK)}>ω² (rad² s⁻²)</text>
		<text x={122} y={52} style={txt(30, INK)}>Mg (N)</text>
		<text x={96} y={490} textAnchor="end" style={txt(28, INK_SOFT, 700)}>0</text>
		<text x={380} y={360} style={txt(30, NAVY.ink)}>gradient = 0.0080 kg m</text>
	</svg>
);
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={34} marks={4} picture={<ApparatusPicture />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={2} picture={<GraphPicture />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '8px 22px', ...DISPLAY(26, INK, 600), whiteSpace: 'normal', lineHeight: 1.24}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 330, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 14. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const period = cue(id, 'fourteen over twenty'), w898 = cue(id, 'eight point nine eight'), f081 = cue(id, 'zero point eight one'), mg098 = cue(id, 'nine eight newtons'), friction = cue(id, 'friction between'), slip = cue(id, 'The classic slip'), fourteen = cue(id, 'using fourteen seconds');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={372} givens={<>bung 20 g | L = 0.50 m | hanging mass 100 g | 20 revolutions in 14.0 s</>}><Q1 mark={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 450, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={period} ageAt={f081} size={TYPE.current} oldSize={32}>(a) T = 14.0 ÷ 20 = {fx(A1.T, 2)} s</Row>
				<Row at={w898 - 30} ageAt={f081} size={TYPE.current} oldSize={32}>&nbsp;&nbsp;&nbsp;&nbsp;ω = 2π ÷ 0.70 = {fx(A1.w, 2)} <RAD /></Row>
				<Row at={f081 - 40} size={TYPE.current}>&nbsp;&nbsp;&nbsp;&nbsp;mω²L = 0.020 × 8.976² × 0.50 = {fx(A1.f, 2)} N</Row>
				<Row at={mg098 - 30} size={36}>(b) Mg = 0.100 × 9.8 = {fx(A1.Mg, 2)} N (about {fx(A1.less, 0)} % less)</Row>
				<Row at={mg098 + 14} size={52}>&nbsp;&nbsp;&nbsp;&nbsp;<AnswerBox at={mg098 + 20}><span>{fx(A1.f, 2)} N &lt; {fx(A1.Mg, 2)} N</span></AnswerBox></Row>
				<Row at={friction} size={32}>&nbsp;&nbsp;&nbsp;&nbsp;e.g. friction at the tube; or L drifted from 0.50 m</Row>
			</div>
			<CrossedChip x={1250} y={830} at={slip} crossAt={fourteen + 10} size={32} caption="T = time ÷ 20">T = 14.0 s</CrossedChip>
			<Picture><ApparatusPicture /></Picture>
		</>
	);
};

// ---------- 16. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const mL = cue(id, 'm times L'), divided = cue(id, 'gradient divided by L'), grams = cue(id, 'twenty grams'), slip = cue(id, 'The slip'), wrong = cue(id, 'zero zero three two');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>L = 0.40 m | Mg against ω²: straight line through the origin | gradient = 0.0080 kg m</>}><Q2 mark={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={4} size={TYPE.current}>Mg = mω²L = (mL) ω²</Row>
				<Row at={mL} size={TYPE.current}>so the gradient = mL</Row>
				<Row at={divided} size={TYPE.current}>m = gradient ÷ L = 0.0080 ÷ 0.40</Row>
				<Row at={grams - 30} size={52}>&nbsp;&nbsp;&nbsp;&nbsp;<AnswerBox at={grams}><span>m = {fx(A2.m, 3)} kg = {fx(A2.m * 1000, 0)} g</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={730} at={slip} crossAt={wrong + 10} size={32} caption="gradient = mL, so divide by L">m = 0.0080 × 0.40 = {fx(A2.wrong, 4)} kg</CrossedChip>
			<Picture><GraphPicture /></Picture>
		</>
	);
};

// ---------- 17. handoff: the Moon ----------
const EM = {cx: 730, cy: 560, R: 420, earth: 300, moon: 70};
const moonAt = (phase: number): [number, number] => [EM.cx + EM.R * Math.cos(phase), EM.cy - EM.R * Math.sin(phase)];
export const HandoffBoard: React.FC<{phase?: number; showAt?: number; vAt?: number; fAt?: number; tagsAt?: number; rAt?: number; askAt?: number}> = ({phase = 0, showAt = -300, vAt = -200, fAt = -200, tagsAt = -100, rAt = -60, askAt = -60}) => {
	const f = useCurrentFrame();
	const o = prog(f, showAt, 20);
	const [mx, my] = moonAt(phase);
	const tx = -Math.sin(phase), ty = -Math.cos(phase); // screen tangent (anticlockwise)
	const ix = (EM.cx - mx) / EM.R, iy = (EM.cy - my) / EM.R;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={o}>
					<circle cx={EM.cx} cy={EM.cy} r={EM.R} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="14 8" />
					<Earth cx={EM.cx} cy={EM.cy} d={EM.earth} />
					<Moon cx={mx} cy={my} d={EM.moon} />
				</g>
				<VecArrow x={mx} y={my} dx={tx * 150} dy={ty * 150} color={VEL.stroke} width={8} head={24} at={vAt} />
				<VecArrow x={mx + ix * 44} y={my + iy * 44} dx={ix * 170} dy={iy * 170} color={AMBER.stroke} width={8} head={24} at={fAt} />
				<Bracket x1={EM.cx} y1={EM.cy + 34} x2={mx} y2={EM.cy + 34} color={NAVY.stroke} at={rAt} />
			</FrameSvg>
			<Lbl x={mx + ix * 120} y={my + iy * 120 - 34} at={fAt} color={AMBER.ink} anchor="middle" size={TYPE.current}>F = ?</Lbl>
			<Lbl x={EM.cx + EM.earth / 2 + 24} y={EM.cy + 130} at={rAt} color={NAVY.ink} size={34}>r (centre to centre)</Lbl>
			<Lbl x={EM.cx} y={EM.cy + EM.earth / 2 + 50} at={tagsAt} color={INK} anchor="middle" size={34}>M (Earth)</Lbl>
			<Lbl x={mx} y={my + EM.moon / 2 + 44} at={tagsAt + 8} color={INK} anchor="middle" size={34}>m (Moon)</Lbl>
			<Lbl x={1824} y={900} at={showAt} color={INK_SOFT} anchor="end" size={28}>not to scale</Lbl>
			<Chip x={96} y={170} at={askAt} size={34} color={INK} border={INK}>Next: how does gravity vary with mass and distance from a spherical body?</Chip>
		</>
	);
};
/** v16's final frame, for the next lesson's opening. */
export const V16FinalFrame: React.FC = () => <HandoffBoard />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const pulls = cue(id, 'string pulls it inwards'), test = cue(id, 'how we test'), moon = cue(id, 'think about the Moon'), noString = cue(id, 'no string at all'), gravity = cue(id, "that's gravity"), masses = cue(id, 'masses involved'), centre = cue(id, "Earth's centre");
	const out = prog(f, moon - 10, 36);
	const bphase = bungPhaseAt(f, () => 0.1);
	const alpha = droopDeg(APP.m, 0.1);
	const g = bungGeom(BUNG_DEFAULT, alpha, bphase);
	const ux = g.top[0] - g.bung[0], uy = g.top[1] - g.bung[1], ul = Math.hypot(ux, uy);
	const show = moon + 10;
	const phase = stopAtEdge(f, k => (Math.max(0, k - show) * 2 * Math.PI) / 420 + Math.PI * 0.5, Math.max(show + 40, centre - 40), 40);
	return (
		<>
			{out < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - out, transform: `translateX(${-700 * out}px) scale(${1 - 0.4 * out})`, transformOrigin: '96px 600px'}}>
				<FrameSvg>
					<BungRig lay={BUNG_DEFAULT} alpha={alpha} phase={bphase} n={2} />
					<VecArrow x={g.bung[0]} y={g.bung[1]} dx={(ux / ul) * 100} dy={(uy / ul) * 100} color={AMBER.stroke} width={7} head={22} at={pulls} />
				</FrameSvg>
			</div> : null}
			<HandoffBoard phase={f < show ? Math.PI * 0.5 : phase} showAt={show} vAt={noString} fAt={gravity} tagsAt={masses} rAt={centre + 30} askAt={centre + 44} />
			<Chip x={1290} y={300} at={test} out={moon} size={36} w={534} border={ORANGE.stroke}>measurements like these test F = mv²/r</Chip>
		</>
	);
};

// ---------- 18. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Hanging masses still: tension = Mg. The marker holds the string length L.</>, at: 2},
		{content: <>The string droops: the inward part and r both carry cos α, so Mg = mω²L.</>, at: 6},
		{content: <>Time 20 turns, ÷ 20, repeat; ω = 2π/T.</>, at: 10},
		{content: <>Plot Mg against ω²: a straight line through the origin, gradient mL.</>, at: 14},
		{content: <>ω² doubles the % uncertainty; repeats reduce random error only.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: ORANGE.ink}}>Square the speed </span><span style={{color: NAVY.ink}}>to straighten the line.</span></span>} sub="Follow your school's approved method."
					picture={<svg width={584} height={220}>
						<line x1={40} y1={200} x2={250} y2={200} stroke={INK} strokeWidth={3} />
						<line x1={40} y1={200} x2={40} y2={20} stroke={INK} strokeWidth={3} />
						<path d="M40,200 Q180,190 240,30" fill="none" stroke={INK_SOFT} strokeWidth={4} />
						<text x={150} y={218} textAnchor="middle" style={txt(24, INK)}>ω</text>
						<text x={290} y={120} style={txt(40, ORANGE.ink)}>→</text>
						<line x1={340} y1={200} x2={550} y2={200} stroke={INK} strokeWidth={3} />
						<line x1={340} y1={200} x2={340} y2={20} stroke={INK} strokeWidth={3} />
						<line x1={340} y1={200} x2={540} y2={30} stroke={NAVY.stroke} strokeWidth={4} />
						<text x={450} y={218} textAnchor="middle" style={txt(24, INK)}>ω²</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
