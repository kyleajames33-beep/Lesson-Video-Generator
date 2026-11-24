// Scenes 11 to 17: the memory aid, two attempts with brief feedback, the handoff (final frame, exported for
// v02) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {
	AngleArc, AnswerBox, BallSvg, Bench, Bracket, Chip, Cliff, ClockFace, CrossedChip, DISPLAY, Ledger, MS, MS2, Q, ROLE, Row, Sup, VecArrow,
} from '../../physics/projectile/board';
import {fallT, fx, pos, vel} from '../../physics/projectile/flight';
import {BALL_D, EDGE_X, FLOOR_Y, W, cue, hold} from './common';
import {HEAD, HEAD_SIZE} from './s1';
import {BenchStage} from './stage';

export const ACCENT = '#9c5a00';

// ---------- 11. memory aid: two columns, one clock ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const aid = cue(id, 'two columns'), hq = cue(id, 'Every horizontal'), vq = cue(id, 'every vertical'), time = cue(id, 'time'), across = cue(id, 'across');
	return (
		<>
			<div style={{position: 'absolute', left: 300, top: 150, width: 1320}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 14px 32px rgba(60,45,20,0.10)`, padding: '16px 44px 20px', textAlign: 'center'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 84, lineHeight: 1.05, transform: `scale(${1 + 0.05 * Math.sin(Math.PI * prog(f, aid, 20))})`}}>
						<span style={{color: ROLE.x.ink}}>Two columns,</span> <span style={{color: INK}}>one clock.</span>
					</div>
					<div style={{...DISPLAY(36, INK_SOFT, 700), marginTop: 6, opacity: prog(f, time, 14)}}>Only time crosses.</div>
				</div>
			</div>
			<Ledger x={300} y={430} w={1320} h={480} size={48} titleSize={36}
				clock={{value: 't', label: 'one clock', pulse: time, t: 0.25}} links={time} carry={{at: across - 6, into: 'x'}}
				hor={{title: 'every horizontal quantity', glow: hq, rows: [
					{content: <><Q s="a" ax="x" /> = 0</>, at: -30},
					{content: <><Q s="v" ax="x" /> = <Q s="u" ax="x" /></>, at: -30},
					{content: <><Q s="s" ax="x" /> = <Q s="u" ax="x" /> t</>, at: -30},
				]}}
				ver={{title: 'every vertical quantity', glow: vq, rows: [
					{content: <><Q s="a" ax="y" /> = <span style={{color: ROLE.a.ink}}>−9.8<MS2 /></span></>, at: -30},
					{content: <><Q s="v" ax="y" /> = <Q s="u" ax="y" /> + <Q s="a" ax="y" /> t</>, at: -30},
					{content: <><Q s="s" ax="y" /> = <Q s="u" ax="y" /> t + ½<Q s="a" ax="y" /> t<Sup>2</Sup></>, at: -30},
				]}} />
			<HandTag x={960} y={1000 - 60} text="stuck? find t where you can, carry it across" at={cue(id, 'When')} size={TYPE.handSmall} color={INK} anchor="middle" />
		</>
	);
};

// ---------- attempt pictures (answer-free: only what the card states) ----------
const A1Picture: React.FC = () => {
	const ppm = 300, x0 = 300, y0 = 170, top = y0 + 18, floor = y0 + 1.25 * ppm + 18;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<Bench edgeX={250} topY={top} left={0} floorY={floor} floorL={0} floorR={660} band={24} />
			<BallSvg cx={262 + 0} cy={y0} d={36} />
			<BallSvg cx={x0 + 6} cy={y0} d={36} />
			<Bracket x1={210} y1={top} x2={210} y2={floor} color={ROLE.given.ink} label="1.25 m" lx={196} ly={(top + floor) / 2} anchor="end" size={TYPE.support + 4} />
			<VecArrow x={x0 + 28} y={y0} dx={110} dy={0} color={ROLE.x.stroke} label={<>3.0<MS /></>} lx={x0 + 36} ly={y0 + 36} size={TYPE.support + 2} />
			<text x={262} y={y0 - 34} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={INK}>A</text>
			<text x={x0 + 6} y={y0 - 34} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 34}} fill={INK}>B</text>
		</svg>
	);
};
const Q1: React.FC<{marks?: {same: number; rest: number; hor: number}}> = ({marks}) => {
	const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
	return (
		<>
			Two small balls, A and B, start 1.25 m above level ground at <M at={marks?.same}>the same instant</M>. A is <M at={marks?.rest}>dropped from rest</M>. B is launched <M at={marks?.hor}>horizontally</M> at 3.0 m s<Sup>−1</Sup>. Neglect air resistance and take g = 9.8 m s<Sup>−2</Sup>.
			<div style={{marginTop: 10}}>(a) Calculate the time each ball takes to reach the ground.</div>
			<div style={{marginTop: 6}}>(b) Calculate the horizontal distance from the point directly below B's start to where B lands.</div>
		</>
	);
};
export const S12: React.FC = () => {
	const id = 'attempt-1';
	return <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue(id, 'Pause here')} hold={hold(id)} size={38} marks={3} picture={<A1Picture />}><Q1 /></QuestionScene></Accent>;
};

/** Shrunk question card with the navy givens strip under it (feedback scenes). */
const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; w?: number}> = ({children, givens, w = 1100}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 170, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '12px 24px', ...DISPLAY(29, INK, 600), whiteSpace: 'normal', lineHeight: 1.28}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: 430, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(30, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 13. feedback 1 ----------
const F1Picture: React.FC<{landAt: number; distAt: number}> = ({landAt, distAt}) => {
	const f = useCurrentFrame();
	const ppm = 280, ax = 1300, bx0 = 1346, y0 = 520, top = y0 + 15, floor = y0 + 1.25 * ppm + 15, T = fallT(1.25);
	let d = '';
	for (let i = 0; i <= 50; i++) {const [x, y] = pos(3, 0, (T * i) / 50); d += `${i ? 'L' : 'M'}${(bx0 + x * ppm).toFixed(1)},${(y0 - y * ppm).toFixed(1)} `;}
	const p = prog(f, landAt - 40, 40);
	return (
		<FrameSvg>
			<Bench edgeX={1278} topY={top} left={1220} floorY={floor} floorL={1230} floorR={1824} band={20} legs={false} />
			<line x1={ax} x2={ax} y1={y0} y2={floor - 14} stroke={ROLE.y.stroke} strokeWidth={4} strokeDasharray="8 7" />
			<path d={d} fill="none" stroke={ROLE.v.stroke} strokeWidth={4.5} strokeDasharray={`${1200 * p} 2000`} />
			<BallSvg cx={ax} cy={y0 + (floor - 15 - y0) * p * p} d={30} />
			<BallSvg cx={bx0 + 3 * T * ppm * p} cy={y0 + (floor - 15 - y0) * p * p} d={30} />
			<Bracket x1={bx0} y1={floor + 30} x2={bx0 + 3 * T * ppm} y2={floor + 30} color={ROLE.x.ink} at={distAt} label="1.5 m" ly={floor + 62} size={TYPE.support + 2} />
		</FrameSvg>
	);
};
export const S13: React.FC = () => {
	const id = 'feedback-1';
	const f = useCurrentFrame();
	const zero = cue(id, 'zero vertical velocity'), so = cue(id, 'so minus'), secs = cue(id, 'seconds'), each = cue(id, 'for each'), bh = cue(id, "B's horizontal"), metres = cue(id, 'metres', 2), slip = cue(id, 'classic slip'), its = cue(id, 'Its sideways');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk givens={<>A and B: 1.25 m above level ground, same instant | A: dropped from rest | B: 3.0 m s<Sup>−1</Sup> horizontally | g = 9.8 m s<Sup>−2</Sup></>}>
				<Q1 marks={{same: each, rest: zero, hor: zero + 10}} />
			</Shrunk>
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 20}}>
				<Row at={so} ageAt={secs} size={44} oldSize={36}><span style={{color: ROLE.y.ink}}>vertical:</span> −1.25 = −4.9t<Sup>2</Sup></Row>
				<Row at={secs - 24} ageAt={bh} size={44} oldSize={36}>t = √(1.25 ÷ 4.9) = 0.5051 s ≈ <AnswerBox at={secs}>0.51 s</AnswerBox> (both)</Row>
				<Row at={bh} size={44}><Q s="s" ax="x" /> = 3.0 × 0.5051 = 1.515 m ≈ <AnswerBox at={metres}>1.5 m</AnswerBox></Row>
			</div>
			<F1Picture landAt={secs} distAt={metres} />
			<HandTag x={1250} y={500} text="both land together" at={secs + 10} size={TYPE.handSmall} color={INK} />
			<div style={{position: 'absolute', left: 96, top: 800, width: 1060, background: CARD, borderRadius: 14, boxShadow: CARD_SHADOW, padding: '12px 24px', opacity: 1 - prog(f, slip - 16, 14), ...DISPLAY(36, INK, 700), whiteSpace: 'normal', lineHeight: 1.3}}>
				<div style={{...DISPLAY(30, INK_SOFT, 800)}}>PLAN</div>
				<div><span style={{color: ROLE.y.ink}}>(a) vertical column:</span> s<sub>y</sub> = −1.25 m, u<sub>y</sub> = 0, find t</div>
				<div><span style={{color: ROLE.x.ink}}>(b) carry t across:</span> s<sub>x</sub> = u<sub>x</sub> t</div>
			</div>
			<CrossedChip x={96} y={800} at={slip} crossAt={its} size={36} caption="fall time is set vertically">B takes longer: it travels further</CrossedChip>
		</>
	);
};

// ---------- 14. attempt 2 ----------
const CliffPicture: React.FC<{path?: number; arrows?: number; weightAt?: number}> = ({path, arrows, weightAt}) => {
	const f = useCurrentFrame();
	const edge = 250, top = 110, base = 540, x0 = edge + 20, y0 = top - 22, ppm = 60, u = 4.5;
	const T = fallT((base - top) / ppm);
	const pt = (t: number): [number, number] => {const [x, y] = pos(u, 0, t); return [x0 + x * ppm, y0 - y * ppm];};
	let d = '';
	for (let i = 0; i <= 50; i++) {const [x, y] = pt((T * i) / 50); d += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)} `;}
	const p = path === undefined ? 0 : prog(f, path, 40);
	const tEnd = T * 0.9;
	const [ex, ey] = pt(tEnd);
	const vyEnd = vel(u, 0, tEnd)[1];
	const k = 9;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<Cliff left={10} edgeX={edge} topY={top} baseY={base} right={570} />
			{p > 0 ? <path d={d} fill="none" stroke={ROLE.v.stroke} strokeWidth={4.5} strokeDasharray={`${900 * p} 2000`} /> : null}
			<BallSvg cx={x0} cy={y0} d={44} />
			{weightAt !== undefined ? <VecArrow x={x0} y={y0 + 20} dx={0} dy={90} color={ROLE.w.stroke} width={6} at={weightAt} label="weight (down only)" lx={x0 - 14} ly={y0 + 100} anchor="end" labelColor={ROLE.w.ink} size={TYPE.support} /> : null}
			{arrows !== undefined ? (
				<g>
					<VecArrow x={x0} y={y0} dx={u * k} dy={0} color={ROLE.x.stroke} width={6} at={arrows} head={16} />
					<BallSvg cx={ex} cy={ey} d={30} />
					<VecArrow x={ex} y={ey} dx={u * k} dy={0} color={ROLE.x.stroke} width={6} at={arrows + 10} head={16} />
					<VecArrow x={ex + u * k} y={ey} dx={0} dy={-vyEnd * k * 0.6} color={ROLE.y.stroke} width={6} at={arrows + 18} head={16} />
				</g>
			) : null}
		</svg>
	);
};
const Q2: React.FC<{marks?: {forces: number; air: number}}> = ({marks}) => {
	const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
	return <>A ball is launched horizontally from the top of a cliff. Near the end of its flight the ball is moving steeply downwards. A student claims that the ball's horizontal velocity must have decreased during the flight. With reference to the <M at={marks?.forces}>forces</M> acting on the ball, explain whether the student's claim is correct. Assume <M at={marks?.air}>air resistance is negligible</M>.</>;
};
export const S14: React.FC = () => {
	const id = 'attempt-2';
	return <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue(id, 'Pause here')} hold={hold(id)} size={38} marks={3} picture={<CliffPicture />}><Q2 /></QuestionScene></Accent>;
};

// ---------- 15. feedback 2 ----------
export const S15: React.FC = () => {
	const id = 'feedback-2';
	const wrong = cue(id, 'wrong'), force = cue(id, 'only force'), acc = cue(id, 'acceleration'), grown = cue(id, 'grown'), saying = cue(id, 'Saying'), air = cue(id, 'weight');
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk givens={<>launched horizontally from a cliff | air resistance negligible | claim: the horizontal velocity decreased</>}>
				<Q2 marks={{forces: force, air}} />
			</Shrunk>
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 20}}>
				<Row at={wrong} size={44}><AnswerBox at={grown + 10}>claim incorrect</AnswerBox> <span style={{fontSize: 34, fontWeight: 700}}>(in this model)</span></Row>
				<Row at={acc - 10} ageAt={grown} size={44} oldSize={38}>F<sub style={{fontSize: '0.62em'}}>x</sub> = 0, so <Q s="a" ax="x" /> = 0, so <Q s="v" ax="x" /> = <Q s="u" ax="x" /></Row>
				<Row at={grown} size={44}>steeper: <Q s="v" ax="y" /> grew; <Q s="v" ax="x" /> unchanged</Row>
			</div>
			<div style={{position: 'absolute', left: 1240, top: 300, width: 600, height: 600}}><CliffPicture path={-20} arrows={grown - 10} weightAt={force} /></div>
			<CrossedChip x={96} y={800} at={saying} crossAt={saying + 16} size={36} caption="gravity has no sideways part">gravity slows it sideways</CrossedChip>
		</>
	);
};

// ---------- 16. handoff (its last frame is v02's first frame) ----------
const ZX = 770, ZY = 330, ZW = 540, ZH = 470; // zoom panel
const K = 190; // px per m/s in the zoom panel
/**
 * The handoff board. tilt 0..1 turns B's launch arrow from horizontal (teal, "u = 2.0 m/s, u_y = 0") to 35°
 * (orange, "u", arc θ); split 0..1 draws the dashed component outlines with "?" and the next chip.
 * Exported so v02 can open on exactly this frame: <V01FinalFrame />.
 */
export const HandoffBoard: React.FC<{tilt: number; split: number; splitAt?: number; chipAt?: number}> = ({tilt, split, splitAt = -30, chipAt = -30}) => {
	const deg = 35 * tilt;
	const a = (deg * Math.PI) / 180;
	const u = 2.0;
	const tx = ZX + 70, ty = ZY + ZH - 90; // arrow tail in the panel
	const L = u * K;
	const hx = tx + L * Math.cos(a), hy = ty - L * Math.sin(a);
	const col = tilt < 0.5 ? ROLE.x.stroke : ROLE.v.stroke;
	const small = 70;
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchStage scaleAt={-30} scaleLabel={false} slide={0} floorR={700} />
				<BallSvg cx={W.x0} cy={W.y0} d={BALL_D} />
				<line x1={W.x0 + 22} y1={W.y0} x2={W.x0 + 22 + small * Math.cos(a)} y2={W.y0 - small * Math.sin(a)} stroke={col} strokeWidth={5} strokeLinecap="round" />
				{/* zoom connectors */}
				<line x1={W.x0 + 30} y1={W.y0 - 30} x2={ZX} y2={ZY} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
				<line x1={W.x0 + 30} y1={W.y0 + 30} x2={ZX} y2={ZY + ZH} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" />
				<rect x={ZX} y={ZY} width={ZW} height={ZH} rx={20} fill={CARD} stroke={INK} strokeWidth={3.5} />
				<BallSvg cx={tx - 26} cy={ty} d={44} />
				{tilt > 0.02 ? <AngleArc px={tx} py={ty} r={80} deg={deg} label={tilt > 0.95 ? 'θ' : undefined} size={TYPE.current} refLen={L + 40} /> : null}
				{split > 0 ? (
					<g opacity={split}>
						<line x1={tx} y1={ty} x2={tx + L * Math.cos(a)} y2={ty} stroke={ROLE.x.stroke} strokeWidth={5} strokeDasharray="14 10" />
						<line x1={hx} y1={ty} x2={hx} y2={hy} stroke={ROLE.y.stroke} strokeWidth={5} strokeDasharray="14 10" />
					</g>
				) : null}
				<VecArrow x={tx} y={ty} dx={L * Math.cos(a)} dy={-L * Math.sin(a)} color={col} width={8} head={26} />
			</FrameSvg>
			{tilt < 0.5 ? (
				<div style={{position: 'absolute', left: tx, top: ty + 26, ...DISPLAY(TYPE.current, ROLE.x.ink, 800), opacity: 1 - tilt * 2}}>u = 2.0<MS />, <Q s="u" ax="y" plain /> = 0</div>
			) : (
				<div style={{position: 'absolute', left: tx + (L / 2) * Math.cos(a) - 50, top: ty - (L / 2) * Math.sin(a) - 70, ...DISPLAY(TYPE.working, ROLE.v.ink, 800), opacity: tilt * 2 - 1}}>u</div>
			)}
			{split > 0 ? (
				<>
					<div style={{position: 'absolute', left: tx + (L * Math.cos(a)) / 2 - 90, top: ty + 14, opacity: split, ...DISPLAY(TYPE.current, ROLE.x.ink, 800)}}><Q s="u" ax="x" plain /> = ?</div>
					<div style={{position: 'absolute', left: hx + 20, top: (ty + hy) / 2 - 30, opacity: split, ...DISPLAY(TYPE.current, ROLE.y.ink, 800)}}><Q s="u" ax="y" plain /> = ?</div>
				</>
			) : null}
			<Ledger x={1360} y={190} w={464} h={420} size={34} titleSize={28}
				clock={{value: 't', t: 0.25}}
				hor={{rows: [{content: <><Q s="s" ax="x" /> = <Q s="u" ax="x" /> t</>, at: -30}, {content: <><Q s="u" ax="x" /> = ?</>, at: splitAt}]}}
				ver={{rows: [{content: <><Q s="a" ax="y" /> = −9.8</>, at: -30}, {content: <><Q s="u" ax="y" /> = ?</>, at: splitAt}]}} />
			<Chip x={ZX} y={ZY + ZH + 24} at={chipAt} size={36} color={INK} border={INK}>Next: how does the launch angle set <Q s="u" ax="x" /> and <Q s="u" ax="y" />?</Chip>
		</>
	);
};
/** v01's final frame, for v02's opening. */
export const V01FinalFrame: React.FC = () => <HandoffBoard tilt={1} split={1} />;
export const S16: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const angle = cue(id, 'at an angle'), two = cue(id, 'two', 2);
	return <HandoffBoard tilt={prog(f, angle, 36)} split={prog(f, two, 18)} splitAt={two} chipAt={two + 10} />;
};

// ---------- 17. key notes ----------
export const S17: React.FC = () => {
	const notes = [
		{content: <>Projectile: moves under gravity alone. Model: no air resistance; constant g = 9.8 m s<Sup>−2</Sup> down.</>, at: 4},
		{content: <><span style={{color: ROLE.x.ink, fontWeight: 700}}>Horizontal:</span> no force, so <Q s="a" ax="x" /> = 0 and <Q s="v" ax="x" /> = <Q s="u" ax="x" />; <Q s="s" ax="x" /> = <Q s="u" ax="x" />t.</>, at: 9},
		{content: <><span style={{color: ROLE.y.ink, fontWeight: 700}}>Vertical</span> (up +): <Q s="a" ax="y" /> = −9.8; <Q s="v" ax="y" /> = <Q s="u" ax="y" /> + <Q s="a" ax="y" />t; <Q s="s" ax="y" /> = <Q s="u" ax="y" />t + ½<Q s="a" ax="y" />t<Sup>2</Sup>.</>, at: 14},
		{content: <>Horizontal launch: <Q s="u" ax="y" /> = 0, so it falls exactly like a dropped ball.</>, at: 19},
		{content: <>One t links the columns. <Q s="v" ax="x" /> stays, <Q s="v" ax="y" /> grows: the path is a parabola.</>, at: 24},
	];
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={42} aid={
				<MemoryCard at={20} main={<><span style={{color: ROLE.x.ink}}>Two columns,</span> one clock.</>} sub="Only time crosses."
					picture={<svg width={584} height={220}><MiniLedger /></svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
const MiniLedger: React.FC = () => (
	<g>
		<rect x={20} y={70} width={240} height={140} rx={14} fill={CARD} stroke={ROLE.x.stroke} strokeWidth={3} />
		<rect x={20} y={70} width={240} height={10} fill={ROLE.x.stroke} />
		<rect x={300} y={70} width={240} height={140} rx={14} fill={CARD} stroke={ROLE.y.stroke} strokeWidth={3} />
		<rect x={300} y={70} width={240} height={10} fill={ROLE.y.stroke} />
		<text x={140} y={130} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={ROLE.x.ink}>horizontal</text>
		<text x={420} y={130} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={ROLE.y.ink}>vertical</text>
		<text x={140} y={180} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={INK}>t</text>
		<text x={420} y={180} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 30}} fill={INK}>t</text>
		<ClockFace cx={280} cy={30} r={24} t={0.25} />
		<line x1={262} y1={44} x2={200} y2={82} stroke={INK} strokeWidth={3} />
		<line x1={298} y1={44} x2={360} y2={82} stroke={INK} strokeWidth={3} />
	</g>
);
export {EDGE_X, FLOOR_Y, fx};
