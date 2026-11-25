// Scenes 11 to 16: two attempts with brief feedback, the handoff (Halley falling in from aphelion and back on
// the field motion run, a live speed bar and an unlabelled energy bar, then a dashed line out to infinity; its
// last frame is exported as `V20FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Row, Sub} from '../../physics/projectile/board';
import {A1, A2, ACCENT, HALLEY, HEAD_SIZE, HEAD_V21, cue, hold} from './common';
import {AMBER, Comet, Earth, GREY, Jupiter, Lbl, Mars, NAVY, SpeedBar, Sun, T, TEAL, VIOLET, fx} from './parts';
import type {View} from './parts';
import {HalleyEllipse, cometAt} from './s1';
import {LawIcons} from './s2';

const p = (s: string) => <Sub>{s}</Sub>;
// ---------- attempts ----------
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC = () => <>Jupiter orbits the Sun with a semi-major axis of 5.20 AU. Earth's orbit has a semi-major axis of 1.00 AU and a period of 1.00 year. Use Kepler's third law to calculate Jupiter's orbital period in years.</>;
const Q2: React.FC<{m1?: number}> = ({m1}) => <>At perihelion Mars is 1.381 AU from the Sun; at aphelion it is 1.666 AU from the Sun. (a) At which of these two points does Mars move faster? (b) Calculate the ratio of its speed at that point to its speed at the other point. Justify your answers using <M at={m1}>Kepler's second law</M>.</>;
const PlanetPicture: React.FC<{planet: 'jupiter' | 'mars'}> = ({planet}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		{planet === 'jupiter' ? <Jupiter cx={339} cy={260} d={300} /> : <Mars cx={339} cy={260} d={260} />}
		<T x={339} y={480} size={32} anchor="middle" color={GREY.ink} weight={700}>{planet === 'jupiter' ? 'Jupiter' : 'Mars'}</T>
	</svg>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={2} picture={<PlanetPicture planet="jupiter" />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={3} picture={<PlanetPicture planet="mars" />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '8px 22px', ...DISPLAY(26, INK, 600), whiteSpace: 'normal', lineHeight: 1.24}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: NAVY.soft, borderRadius: 12, border: `3px solid ${NAVY.stroke}`, padding: '6px 20px', ...DISPLAY(30, NAVY.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);
const Picture: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{position: 'absolute', left: 1250, top: 300, transform: 'scale(0.85)', transformOrigin: 'top left'}}>{children}</div>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const both = cue(id, 'Both orbit'), earth = cue(id, 'for Earth'), so = cue(id, 'So T squared'), hundred = cue(id, 'one hundred and'), tIs = cue(id, 'T is about'), eleven = cue(id, 'eleven point nine'), cubing = cue(id, 'cubing the period'), squaring = cue(id, 'squaring the distance');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={290} givens={<>Jupiter: a = 5.20 AU | Earth: a = 1.00 AU, T = 1.00 year</>}><Q1 /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={both} ageAt={so} size={48} oldSize={38}>same Sun: T²/a³ is the same for both</Row>
				<Row at={earth} ageAt={so} size={48} oldSize={38}>Earth: T²/a³ = 1 (AU and years)</Row>
				<Row at={so} size={56}>T² = 5.20³ = <span style={{opacity: prog(f, hundred, 10)}}>{fx(A1.a3, 1)}</span></Row>
				<Row at={tIs} size={64}>T = √{fx(A1.a3, 1)} = <AnswerBox at={eleven}><span>{fx(A1.T, 1)} years</span></AnswerBox></Row>
			</div>
			<HandTag x={900} y={720} text="square T, cube a" at={eleven + 20} size={32} color={NAVY.ink} />
			<CrossedChip x={96} y={800} at={cubing} crossAt={squaring} size={32} caption="the wrong way round">T³ = a² → T = {fx(A1.slip, 1)} years</CrossedChip>
			<FrameSvg>
				<circle cx={1540} cy={620} r={44} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="8 6" />
				<circle cx={1540} cy={620} r={44 * 5.2} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="12 9" />
				<Sun cx={1540} cy={620} d={40} />
				<Earth cx={1540 + 31} cy={620 - 31} d={26} />
				<Jupiter cx={1540 - 162} cy={620 - 143} d={70} />
			</FrameSvg>
			<Lbl x={1600} y={560} at={earth} color={TEAL.ink} size={28}>Earth: 1.00 AU, 1.00 yr</Lbl>
			<Lbl x={1540} y={870} at={both} color={NAVY.ink} anchor="middle" size={30}>Jupiter: a = 5.20 AU (to scale)</Lbl>
		</>
	);
};

// ---------- 14. feedback 2 ----------
/** A small ellipse with the two end triangles (coded), for feedback 2. */
const EndTriangles: React.FC = () => (
	<svg width={678} height={420} style={{overflow: 'visible'}}>
		<ellipse cx={340} cy={210} rx={260} ry={190} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
		<path d="M220,210 L80,210 L86,150 Z" fill="#f6dcae" stroke={AMBER.stroke} strokeWidth={3} />
		<path d="M220,210 L600,210 L598,232 Z" fill="#f6dcae" stroke={AMBER.stroke} strokeWidth={3} />
		<Sun cx={220} cy={210} d={44} />
		<T x={60} y={260} size={30} color={INK} anchor="middle">P</T>
		<T x={620} y={190} size={30} color={INK} anchor="middle">A</T>
		<T x={340} y={460} size={28} color={GREY.ink} anchor="middle" weight={700}>shape exaggerated</T>
	</svg>
);
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const faster = cue(id, "It's faster"), rv = cue(id, 'r times v'), inverse = cue(id, 'inverse'), one21 = cue(id, 'one point two one'), slip = cue(id, 'The slip'), flipping = cue(id, 'flipping');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={300} givens={<>Mars: perihelion 1.381 AU | aphelion 1.666 AU</>}><Q2 m1={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={faster} size={44}>(a) perihelion: shorter line, longer arc each day</Row>
				<Row at={rv} size={44}>equal areas: r{p('p')}v{p('p')} = r{p('a')}v{p('a')}</Row>
				<Row at={inverse} size={48}>(b) v{p('p')} / v{p('a')} = r{p('a')} / r{p('p')} = 1.666 / 1.381</Row>
				<Row at={one21 - 8} size={52}>&nbsp;&nbsp;= <AnswerBox at={one21}><span>{fx(A2.ratio, 2)}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={flipping + 10} size={32} caption="flipped: faster far away">faster at aphelion, ratio {fx(A2.inv, 2)}</CrossedChip>
			<Picture><EndTriangles /></Picture>
		</>
	);
};

// ---------- 15. handoff ----------
export const HO: View = {sx: 150, sy: 560, k: 40};
const APH_T = HALLEY.T / 2;
const BAR = {y: 330, h: 150};
export const HandoffBoard: React.FC<{t?: number; nextAt?: number; infAt?: number; barsAt?: number; tradeAt?: number}> = ({t = APH_T, nextAt = -60, infAt = -60, barsAt = -60, tradeAt = -60}) => {
	const f = useCurrentFrame();
	const c = cometAt(HO, t);
	const lvl = 1 - (c.kms / HALLEY.vpKms) ** 2;
	const inf = prog(f, infAt, 24);
	const bars = prog(f, barsAt, 14);
	return (
		<>
			<SceneHeading text={HEAD_V21} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<HalleyEllipse v={HO} />
				<Sun cx={HO.sx} cy={HO.sy} d={40} />
				{inf > 0 ? <line x1={c.x + 20} y1={c.y} x2={c.x + 20 + (1900 - c.x - 20) * inf} y2={c.y} stroke={INK} strokeWidth={4} strokeDasharray="14 10" /> : null}
				<Comet x={c.x} y={c.y} w={170} away={c.away} />
				<circle cx={c.x} cy={c.y} r={5} fill={INK} />
				{bars > 0 ? <g opacity={bars}>
					<SpeedBar x={1180} y={BAR.y} h={BAR.h} kms={c.kms} vMax={HALLEY.vpKms} />
					<rect x={1460} y={BAR.y - BAR.h} width={46} height={BAR.h} fill={CARD} stroke={VIOLET.stroke} strokeWidth={3} rx={6} />
					<line x1={1452} y1={BAR.y - BAR.h * lvl} x2={1514} y2={BAR.y - BAR.h * lvl} stroke={VIOLET.stroke} strokeWidth={5} strokeDasharray="8 6" />
					<T x={1483} y={BAR.y - BAR.h * 0.45} size={40} anchor="middle" color={VIOLET.ink}>?</T>
				</g> : null}
			</FrameSvg>
			{bars > 0 ? <Lbl x={1483} y={BAR.y + 34} at={barsAt} color={VIOLET.ink} anchor="middle" size={28}>gravitational energy?</Lbl> : null}
			<HandTag x={1100} y={420} text="trading energy" at={tradeAt} size={30} color={TEAL.ink} anchor="end" />
			{inf > 0.9 ? <Lbl x={1880} y={c.y + 64} at={infAt + 20} color={INK} anchor="end" size={56}>∞</Lbl> : null}
			<Chip x={1660} y={c.y - 110} at={infAt + 10} size={36} border={VIOLET.stroke} color={VIOLET.ink}>U = ?</Chip>
			<Lbl x={HO.sx + 40} y={HO.sy + 230} at={-60} color={GREY.ink} size={28}>Halley's orbit to scale; Sun and comet drawn larger</Lbl>
			<Chip x={1100} y={820} at={nextAt} size={34} w={724} color={INK} border={INK}>Next: why does gravitational potential energy use a zero at infinity?</Chip>
		</>
	);
};
/** v20's final frame, for the next lesson's opening (the comet at aphelion, the line out to infinity). */
export const V20FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const describe = cue(id, 'laws describe'), falls = cue(id, 'falls in'), trading = cue(id, 'trading'), howMuch = cue(id, 'how much gravitational'), next = cue(id, "Next, we'll"), zero = cue(id, 'zero at');
	// From aphelion, in past the Sun and back out to aphelion in real proportion (240 frames).
	const run = Math.max(0, Math.min(1, (f - falls) / 240));
	const t = APH_T + HALLEY.T * run;
	return (
		<>
			<HandoffBoard t={t} nextAt={next} infAt={zero} barsAt={0} tradeAt={trading} />
			<div style={{position: 'absolute', left: 96, top: 176, display: 'flex', flexDirection: 'column', gap: 8, width: 980}}>
				<Row at={describe} size={40}><span style={{color: NAVY.ink}}>shape</span>, <span style={{color: AMBER.ink}}>speed</span> and <span style={{color: TEAL.ink}}>size</span> of every orbit</Row>
				<Row at={howMuch} size={44}>How much gravitational energy, out in space?</Row>
			</div>
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <><span style={{color: NAVY.ink}}>Law 1 (shape)</span>: an ellipse with the Sun at one focus.</>, at: 2},
		{content: <><span style={{color: AMBER.ink}}>Law 2 (speed)</span>: equal areas in equal times; fastest at perihelion.</>, at: 6},
		{content: <>At the two ends r{p('p')}v{p('p')} = r{p('a')}v{p('a')}; gravity speeds it in, slows it out.</>, at: 10},
		{content: <><span style={{color: TEAL.ink}}>Law 3 (size)</span>: T² ∝ a³, one constant per central body (AU, years: T² = a³).</>, at: 14},
		{content: <>a = (closest + furthest)/2; for a circle, a = r.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: NAVY.ink}}>Shape, </span><span style={{color: AMBER.ink}}>speed, </span><span style={{color: TEAL.ink}}>size.</span></span>} sub="Law 1 ellipse, law 2 equal areas, law 3 T² ∝ a³"
					picture={<svg width={584} height={220} viewBox="-30 -110 640 220"><LawIcons /></svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
