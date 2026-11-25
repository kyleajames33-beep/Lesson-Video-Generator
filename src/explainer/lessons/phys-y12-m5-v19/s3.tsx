// Scenes 11 to 16: two attempts with brief feedback, the handoff (the geostationary circle stretching into a
// 24 h ellipse with Earth at one focus, the satellite on a field motion run; its last frame is exported as
// `V19FinalFrame`), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Row, Sub} from '../../physics/projectile/board';
import {stateAt} from '../../sims/field-motion';
import {A1, ACCENT, DAY, GEO, HEAD_SIZE, HEAD_V20, RE, RUN_E5, cue, dur, hold} from './common';
import {Earth, GREY, Lbl, NAVY, RingStage, Satellite, T, TEAL, VecArrow, rPx, sci, toPx} from './parts';
import type {Stage} from './parts';
import {trailPts} from './s1';

// ---------- attempts ----------
/** Text inside a row that fades in when its value is spoken. */
const Late: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => <span style={{opacity: prog(useCurrentFrame(), at, 10)}}>{children}</span>;
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{m1?: number}> = ({m1}) => <>A navigation satellite moves in a circular orbit around Earth with a period of 12.0 hours. Calculate its <M at={m1}>altitude</M> above Earth's surface. (G = 6.67 × 10⁻¹¹ N m² kg⁻², M<Sub>E</Sub> = 6.0 × 10²⁴ kg, R<Sub>E</Sub> = 6.371 × 10⁶ m)</>;
const Q2: React.FC<{m1?: number}> = ({m1}) => <>A satellite moves in a circular orbit with a period of 24 hours. Its orbital plane is <M at={m1}>inclined at 30°</M> to Earth's equatorial plane. Explain why this satellite is not geostationary.</>;
/** Attempt 1's picture: the satellite plate above an arc of the painted Earth (no altitude drawn). */
const NavPicture: React.FC = () => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<clipPath id="v19a1"><rect x={0} y={0} width={678} height={560} /></clipPath>
		<g clipPath="url(#v19a1)"><Earth cx={339} cy={1180} d={1500} /></g>
		<Satellite cx={339} cy={190} w={200} />
		<T x={20} y={40} size={28} color={GREY.ink} weight={700}>not to scale</T>
	</svg>
);
/** Attempt 2's picture: the painted Earth with its dashed equator and a ring tilted 30 degrees; the satellite still. */
const TiltPicture: React.FC<{u?: number; track?: boolean}> = ({u = 0.9, track = false}) => {
	const cx = 330, cy = 290, R = 130;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<RingStage cx={cx} cy={cy} R={R} rho={1.9} iDeg={30} u={u} satW={48} dot={track} trail={track ? trailPts(cx, cy, R, u, u - 2 * Math.PI, 30) : undefined} />
			<T x={cx + R + 8} y={cy + 4} size={32} color={GREY.ink} weight={700}>equator</T>
			<T x={20} y={520} size={32} color={GREY.ink} weight={700}>not to scale</T>
		</svg>
	);
};
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={38} marks={3} picture={<NavPicture />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={38} marks={2} picture={<TiltPicture />}><Q2 /></QuestionScene></Accent>;

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
	const convert = cue(id, 'Convert'), four = cue(id, 'four point three two'), then = cue(id, 'Then r cubed'), root = cue(id, 'cube root gives'), r266 = cue(id, 'two point six six'), sub = cue(id, 'Subtract'), h203 = cue(id, 'two point zero three'), slip = cue(id, 'The classic slip'), stop = cue(id, 'stopping at r');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={330} givens={<>T = 12.0 h, circular orbit | G = 6.67 × 10⁻¹¹ N m² kg⁻² | M<Sub>E</Sub> = 6.0 × 10²⁴ kg | R<Sub>E</Sub> = 6.371 × 10⁶ m</>}><Q1 m1={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 440, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={convert} ageAt={then} size={44} oldSize={34}>T = 12.0 × 3600 = <Late at={four}>{sci(A1.T)} s</Late></Row>
				<Row at={then} ageAt={sub} size={44} oldSize={34}>r³ = 4.002 × 10¹⁴ × (4.32 × 10⁴)² / 4π² = {sci(A1.r3, 3)} m³</Row>
				<Row at={root} ageAt={sub} size={44} oldSize={36}>r = ∛({sci(A1.r3, 3)}) = <Late at={r266}>{sci(A1.r)} m</Late></Row>
				<Row at={sub} size={44}>h = r − R = {sci(A1.r)} − 0.637 × 10⁷</Row>
				<Row at={h203 - 8} size={52}>&nbsp;&nbsp;= <AnswerBox at={h203}><span>{sci(A1.h)} m</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={slip} crossAt={stop} size={32} caption="r is from the centre, not the surface">h = {sci(A1.r)} m</CrossedChip>
			<Picture><NavPicture /></Picture>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const f = useCurrentFrame();
	const matches = cue(id, 'Its period matches'), but = cue(id, 'But its'), swings = cue(id, 'swings north'), lose = cue(id, 'fixed dish would'), slip = cue(id, 'The slip'), enough = cue(id, 'is enough'), missing = cue(id, 'equatorial plane is');
	const u = 0.9 + (2 * Math.PI * Math.max(0, f - but)) / 300;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={300} givens={<>T = 24 h, circular orbit | orbital plane inclined 30° to the equatorial plane</>}><Q2 m1={8} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 400, display: 'flex', flexDirection: 'column', gap: 10, width: 1110}}>
				<Row at={matches} size={44}>T = 24 h: keeps pace on average</Row>
				<Row at={but} size={44} style={{whiteSpace: 'normal'}}>plane through Earth's centre, inclined:</Row>
				<Row at={swings - 6} size={48} style={{whiteSpace: 'normal'}}><AnswerBox at={swings + 10}><span>north and south each day, so not fixed in the sky</span></AnswerBox></Row>
				<Row at={lose} size={34}>a fixed dish would lose it</Row>
				<Row at={missing} size={36}>missing condition: the equatorial plane</Row>
			</div>
			<CrossedChip x={96} y={820} at={slip} crossAt={enough} size={32} caption="also needs the equatorial plane">24 h period → geostationary</CrossedChip>
			<Picture><TiltPicture u={u} track={f >= but} /></Picture>
		</>
	);
};

// ---------- 15. handoff ----------
export const HS: Stage = {cx: 790, cy: 590, R: 330 / (GEO.r / RE)};
const LAPF = 240;
const FINAL_T = 0.3 * DAY;
const ellipsePath = (e: number) => {
	const a = rPx(HS, GEO.r), b = a * Math.sqrt(1 - e * e), c = a * e;
	return Array.from({length: 121}, (_, k) => { const t = (2 * Math.PI * k) / 120; return [HS.cx - c + a * Math.cos(t), HS.cy - b * Math.sin(t)]; }).map(([x, y], k) => `${k ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
};
export const HandoffBoard: React.FC<{t?: number; e?: number; satOn?: number; realAt?: number; closerAt?: number; nextAt?: number}> = ({t = FINAL_T, e = 0.5, satOn = 1, realAt = -200, closerAt = -200, nextAt = -60}) => {
	const s = stateAt(RUN_E5, ((t % RUN_E5.duration) + RUN_E5.duration) % RUN_E5.duration);
	const [sx, sy] = toPx(HS, s.x, s.y);
	const sp = Math.hypot(s.vx, s.vy) || 1;
	const ux = s.vx / sp, uy = -s.vy / sp;
	const rot = (Math.atan2(sy - HS.cy, sx - HS.cx) * 180) / Math.PI + 90;
	const a = rPx(HS, GEO.r);
	return (
		<>
			<SceneHeading text={HEAD_V20} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<path d={ellipsePath(e)} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="14 10" />
				<Earth cx={HS.cx} cy={HS.cy} d={2 * HS.R} />
				{satOn > 0 ? <g opacity={satOn}>
					<VecArrow x={sx + ux * 26} y={sy + uy * 26} dx={ux * (s.speed / 1000) * 30} dy={uy * (s.speed / 1000) * 30} color={TEAL.stroke} width={6} head={18} />
					<Satellite cx={sx} cy={sy} w={56} rotate={rot} />
				</g> : null}
				{e > 0.05 ? <g opacity={Math.min(1, e / 0.5)}>
					<path d={`M${HS.cx - 2 * a * e - 12},${HS.cy - 12} l24,24 M${HS.cx - 2 * a * e + 12},${HS.cy - 12} l-24,24`} stroke={NAVY.stroke} strokeWidth={4} />
				</g> : null}
			</FrameSvg>
			<Lbl x={HS.cx} y={HS.cy + HS.R + 44} at={realAt} color={NAVY.ink} anchor="middle" size={30}>Earth at one focus</Lbl>
			<Lbl x={HS.cx - 2 * a * 0.5} y={HS.cy + 52} at={realAt + 20} color={GREY.ink} anchor="middle" size={28}>other focus</Lbl>
			<HandTag x={HS.cx + a * 0.5 + 20} y={HS.cy - 120} text="faster near Earth" at={closerAt} size={30} color={TEAL.ink} />
			<HandTag x={HS.cx - a * 1.5 + 10} y={HS.cy - 300} text="slower far out" at={closerAt + 20} size={30} color={TEAL.ink} />
			<div style={{position: 'absolute', left: 1260, top: 200, display: 'flex', flexDirection: 'column', gap: 12, width: 564}}>
				<Row at={realAt - 100} size={40}>so far: perfect circles</Row>
				<Row at={realAt} size={40}>real orbits: ellipses</Row>
				<Row at={closerAt} size={34} style={{whiteSpace: 'normal'}}>planets, moons and comets: closer, then further</Row>
			</div>
			<Chip x={1260} y={560} at={nextAt} size={36} w={564} color={INK} border={INK}>Next: how do Kepler's laws describe circular and elliptical orbits?</Chip>
		</>
	);
};
/** v19's final frame, for the next lesson's opening (the satellite on the 24 h ellipse, three tenths of a lap past perigee). */
export const V19FinalFrame: React.FC = () => <HandoffBoard />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const every = cue(id, 'every orbit'), real = cue(id, 'Real orbits'), ell = cue(id, 'ellipses'), closer = cue(id, 'swinging closer'), next = cue(id, "Next, we'll");
	const end = dur(id);
	const e = 0.5 * prog(f, real + 10, Math.max(20, ell + 20 - real));
	// Before the stretch the satellite rides the circle; it returns on the ellipse run from "swinging closer".
	const t = FINAL_T - (DAY * (end - 1 - f)) / LAPF;
	const onCircle = 1 - prog(f, real, 12);
	const onEllipse = prog(f, closer - 16, 16);
	const cDeg = -40 - (360 * f) / 600;
	const r = rPx(HS, GEO.r);
	const cx = HS.cx + r * Math.cos((cDeg * Math.PI) / 180), cy = HS.cy + r * Math.sin((cDeg * Math.PI) / 180);
	return (
		<>
			<HandoffBoard t={t} e={e} satOn={onEllipse} realAt={real} closerAt={closer} nextAt={next} />
			{onCircle > 0 ? <svg style={{position: 'absolute', inset: 0, overflow: 'visible'}} width={1920} height={1080}><g opacity={onCircle}><Satellite cx={cx} cy={cy} w={56} rotate={cDeg + 90} /></g></svg> : null}
			<Enter at={every} out={real} style={{position: 'absolute', left: 1260, top: 420, width: 564}}><div style={{...DISPLAY(30, GREY.ink, 700), whiteSpace: 'normal'}}>geostationary: a circle, r = {sci(GEO.r)} m</div></Enter>
		</>
	);
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Geostationary: stays above one point on the equator.</>, at: 2},
		{content: <>Needs one sidereal day (24 h in questions), the equatorial plane, west to east, circular.</>, at: 6},
		{content: <><span style={{color: NAVY.ink}}>r ≈ 4.23 × 10⁷ m</span>, <span style={{color: GREY.ink}}>h ≈ 3.59 × 10⁷ m</span>, <span style={{color: TEAL.ink}}>v ≈ 3.08 km s⁻¹</span>.</>, at: 10},
		{content: <>Uses: fixed dishes, weather images. Limits: 0.24 s delay, weak polar view.</>, at: 14},
		{content: <><span style={{color: TEAL.ink}}>Low orbit</span> (200 to 2,000 km, 90 to 130 min): close and fast, needs many satellites.</>, at: 18},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={34} aid={
				<MemoryCard at={24} main={<span><span style={{color: NAVY.ink}}>One day, one plane, </span><span style={{color: GREY.ink}}>one way.</span></span>}
					picture={<svg width={584} height={220} viewBox="0 0 584 220">
						<circle cx={100} cy={100} r={64} fill="none" stroke={NAVY.stroke} strokeWidth={6} />
						<T x={100} y={114} size={36} anchor="middle" color={NAVY.ink}>24 h</T>
						<circle cx={292} cy={100} r={64} fill="#e6eef5" stroke={INK} strokeWidth={4} />
						<line x1={208} y1={100} x2={376} y2={100} stroke={GREY.ink} strokeWidth={5} strokeDasharray="12 8" />
						<path d="M420,140 A80,60 0 0 1 540,90" fill="none" stroke={GREY.ink} strokeWidth={7} />
						<path d="M558,82 L526,76 L538,106 Z" fill={GREY.ink} />
						<T x={100} y={204} size={28} anchor="middle" color={NAVY.ink}>one day</T>
						<T x={292} y={204} size={28} anchor="middle" color={NAVY.ink}>one plane</T>
						<T x={486} y={204} size={28} anchor="middle" color={GREY.ink}>one way</T>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
