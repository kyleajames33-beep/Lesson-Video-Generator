// Scenes 12 to 17: two attempts with brief feedback, the handoff (a car on a flat roundabout; its last frame is
// exported for the next lesson), the key notes.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, ROLE, Row, VecArrow} from '../../physics/projectile/board';
import {DashLine, TurnArrow} from '../../physics/projectile/turning';
import {ACCENT, cue, hold} from './common';
import {ACC, Card, CarOnTrack, FORCE, Lbl, Line, NAVY, Title, Track, VEL, carAt, polar} from './parts';

const M: React.FC<{at?: number; d?: number; children: React.ReactNode}> = ({at, d = 0, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at + d} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A laboratory rotor of radius <M at={mark} d={8}>0.30 m</M> completes <M at={mark}>4.0 revolutions per second</M>. Calculate: (a) the angular velocity of the rotor; (b) the speed of a point on its rim; (c) the centripetal acceleration of that point.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => <>Two <M at={mark}>identical</M> cars travel at constant speeds around the <M at={mark} d={8}>same horizontal circular track</M>. Car B travels at <M at={mark} d={16}>twice the speed</M> of car A. Compare the centripetal accelerations of the two cars and the net forces acting on them. Justify your answer using equations.</>;
const txt = (size: number, color: string = INK) => ({fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: size, fill: color}) as const;

const RotorPicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<circle cx={300} cy={280} r={190} fill="#eef0f2" stroke={INK} strokeWidth={4} />
		<circle cx={300} cy={280} r={9} fill={INK} />
		<line x1={300} y1={280} x2={490} y2={280} stroke={NAVY.stroke} strokeWidth={4} />
		<text x={395} y={318} textAnchor="middle" style={txt(32, NAVY.ink)}>0.30 m</text>
		<TurnArrow cx={300} cy={280} r={230} from={20} to={100} color={INK} width={6} />
		<text x={470} y={70} style={txt(32)}>4.0 rev s⁻¹</text>
	</svg>
);
const CAR_V = {blue: 'assets/physics/phys-y11-car-top-blue-v1.png', yellow: 'assets/physics/phys-y11-car-top-yellow-v1.png'};
/** A portrait car plate (nose up) centred at (x, y), `len` px long, heading `deg` (maths sense). */
const CarP: React.FC<{x: number; y: number; len: number; deg: number; src: string}> = ({x, y, len, deg, src}) => {
	const s = len / 1638;
	return <g transform={`rotate(${90 - deg} ${x} ${y})`}><image href={staticFile(src)} x={x - 500 * s} y={y - 1000 * s} width={1000 * s} height={2000 * s} preserveAspectRatio="none" /></g>;
};
const TwoCars: React.FC = () => {
	const c = {x: 330, y: 280, R: 200};
	const [ax, ay] = polar(c.x, c.y, c.R, 180), [bx, by] = polar(c.x, c.y, c.R, 0);
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<Track cx={c.x} cy={c.y} R={c.R} w={60} />
			<CarP x={ax} y={ay} len={110} deg={270} src={CAR_V.blue} />
			<CarP x={bx} y={by} len={110} deg={90} src={CAR_V.yellow} />
			<text x={ax - 60} y={ay + 12} textAnchor="end" style={txt(40)}>A</text>
			<text x={bx + 60} y={by + 12} style={txt(40)}>B</text>
		</svg>
	);
};
export const S12: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<RotorPicture />}><Q1 /></QuestionScene></Accent>;
export const S14: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={3} picture={<TwoCars />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(30, INK, 600), whiteSpace: 'normal', lineHeight: 1.26}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 13. feedback 1 ----------
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const rps = cue(id, 'radians per second'), seven = cue(id, 'seven point five'), sq = cue(id, 'squared'), slip = cue(id, 'The classic slip'), notA = cue(id, 'not the angle');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>r = 0.30 m | 4.0 revolutions per second</>}><Q1 mark={4} /></Shrunk>
			<Chip x={96} y={400} at={-30} size={32} border={INK}>ω = 2πf &nbsp; v = ωr &nbsp; a = v²/r</Chip>
			<HandTag x={760} y={430} text="rev s⁻¹ = Hz" at={10} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={rps - 40} ageAt={seven} size={TYPE.current} oldSize={34}>(a) f = 4.0 Hz, ω = 2π × 4.0 = 25.1 rad s⁻¹</Row>
				<Row at={seven - 30} ageAt={sq} size={TYPE.current} oldSize={34}>(b) v = 25.1 × 0.30 = 7.5 m s⁻¹</Row>
				<Row at={sq - 40} size={TYPE.current}>(c) a = 7.54² ÷ 0.30 = 1.9 × 10² m s⁻² <span style={{fontSize: 30, color: ACC.ink}}>(to the centre)</span></Row>
				<Row at={sq + 10} size={TYPE.current}><AnswerBox at={sq + 20}>ω = 25.1 rad s⁻¹, v = 7.5 m s⁻¹, a = 1.9 × 10² m s⁻²</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={820} at={slip} crossAt={notA} size={34} caption="4.0 is f, in Hz">ω = 4.0 rad s⁻¹</CrossedChip>
			<div style={{position: 'absolute', left: 1250, top: 400}}><RotorPicture /></div>
		</>
	);
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const four = cue(id, 'four times as big'), too = cue(id, 'too'), slip = cue(id, 'The slip'), sq = cue(id, 'squared', 2);
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={370} givens={<>identical cars | same horizontal circular track | B travels at twice the speed of A</>}><Q2 mark={4} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 470, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={-30} ageAt={four} size={TYPE.current} oldSize={34}>same track: same r; identical: same m</Row>
				<Row at={four - 30} size={TYPE.working}><span style={{color: ACC.ink}}>a_B = (2v)²/r = 4v²/r = 4a_A</span></Row>
				<Row at={too - 20} size={TYPE.working}><span style={{color: FORCE.ink}}>F_B = m a_B = 4F_A</span></Row>
				<Row at={too + 10} size={TYPE.current}><AnswerBox at={too + 20}>a_B = 4a_A, F_B = 4F_A</AnswerBox></Row>
			</div>
			<HandTag x={760} y={610} text="2² = 4" at={four + 10} size={TYPE.handSmall} color={ACC.ink} />
			<CrossedChip x={96} y={830} at={slip} crossAt={sq} size={34} caption="the speed is squared">twice</CrossedChip>
			<div style={{position: 'absolute', left: 1220, top: 420}}><TwoCars /></div>
		</>
	);
};

// ---------- 16. handoff: which real force pulls it in? (its last frame is the next lesson's first frame) ----------
const RB = {cx: 560, cy: 600, R: 270};
export const HandoffBoard: React.FC<{centreAt?: number; weightAt?: number; inAt?: number}> = ({centreAt = -200, weightAt = -200, inAt = -200}) => {
	const f = useCurrentFrame();
	const final = centreAt === -200;
	const t = final ? 2 : f / 30;
	const c = carAt(RB.cx, RB.cy, RB.R / 50, t);
	const ix = (RB.cx - c.x) / RB.R, iy = (RB.cy - c.y) / RB.R;
	return (
		<>
			<SceneHeading text="Which real force pulls it in?" at={final ? -200 : -40} size={56} />
			<FrameSvg>
				<Track cx={RB.cx} cy={RB.cy} R={RB.R} w={110} />
				<circle cx={RB.cx} cy={RB.cy} r={RB.R - 70} fill="#dfe6d2" stroke={INK_SOFT} strokeWidth={3} />
				<circle cx={RB.cx} cy={RB.cy} r={8} fill={NAVY.stroke} />
				<CarOnTrack cx={RB.cx} cy={RB.cy} R={RB.R} t={t} len={120} />
				<VecArrow x={c.x} y={c.y} dx={ix * 170} dy={iy * 170} color={ACC.stroke} width={9} at={centreAt} head={26} />
				<VecArrow x={c.x - iy * 50} y={c.y + ix * 50} dx={ix * 170} dy={iy * 170} color={FORCE.stroke} width={6} at={inAt} head={24} dash="12 8" />
			</FrameSvg>
			<Lbl x={c.x + ix * 190 + 10} y={c.y + iy * 190 - 20} at={centreAt} color={ACC.ink} size={36}>a</Lbl>
			<Lbl x={RB.cx} y={RB.cy + RB.R + 80} color={INK_SOFT} anchor="middle" size={30}>top view: a flat roundabout</Lbl>
			<Card x={1100} y={200} w={724} at={weightAt} border={INK_SOFT}>
				<Title>Side view: the vertical forces</Title>
				<svg width={660} height={200} style={{overflow: 'visible', marginTop: 6}}>
					<line x1={60} x2={600} y1={150} y2={150} stroke={INK} strokeWidth={4} />
					<rect x={250} y={96} width={140} height={54} rx={14} fill="#e9e2d4" stroke={INK} strokeWidth={3} />
					<VecArrow x={290} y={123} dx={0} dy={70} color={FORCE.stroke} width={7} at={weightAt + 6} head={20} />
					<VecArrow x={350} y={123} dx={0} dy={-110} color={FORCE.stroke} width={7} at={weightAt + 14} head={20} />
					<text x={200} y={200} textAnchor="end" style={txt(30, FORCE.ink)}>weight</text>
					<text x={372} y={30} style={txt(30, FORCE.ink)}>normal force</text>
				</svg>
				<Line size={34} at={weightAt + 20}>vertical: no help inwards</Line>
			</Card>
			<Lbl x={1100} y={620} at={inAt} color={FORCE.ink} size={TYPE.current}>F_net = mv²/r, inwards</Lbl>
			{f >= inAt ? <div style={{position: 'absolute', left: 1560, top: 560, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 110, color: FORCE.ink, opacity: prog(f, inAt + 6, 12)}}>?</div> : null}
			<Chip x={1100} y={720} at={inAt} size={36} w={724} color={INK} border={INK}>Next: which force supplies the inward acceleration on a flat curve?</Chip>
		</>
	);
};
/** v11's final frame, for the next lesson's opening. */
export const V11FinalFrame: React.FC = () => <HandoffBoard />;
export const S16: React.FC = () => {
	const id = 'handoff';
	return <HandoffBoard centreAt={cue(id, 'towards the centre')} weightAt={cue(id, 'Its weight')} inAt={cue(id, 'inwards')} />;
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Uniform circular motion: constant speed, changing direction, so it accelerates.</>, at: 2},
		{content: <><span style={{color: NAVY.ink}}>T</span> = time per revolution; f = 1/T; ω = Δθ/t = 2π/T.</>, at: 6},
		{content: <><span style={{color: VEL.ink}}>v</span> = 2πr/T = ωr.</>, at: 10},
		{content: <><span style={{color: ACC.ink}}>a_c = v²/r = ω²r</span>, towards the centre.</>, at: 14},
		{content: <><span style={{color: FORCE.ink}}>F_net = mv²/r</span> inwards: a job done by real forces, not an extra force.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={20} main={<><span style={{color: FORCE.ink}}>Twice as fast,</span> <span style={{color: VEL.ink}}>four times the pull.</span></>} sub="F = mv²/r (same m, same r)"
					picture={<svg width={584} height={220} style={{overflow: 'visible'}}>
						<Track cx={292} cy={110} R={90} w={30} />
						<CarOnTrack cx={292} cy={110} R={90} t={1.5} len={60} />
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
