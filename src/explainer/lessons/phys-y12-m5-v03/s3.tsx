// Scenes 11 to 16: two attempts with brief feedback, the handoff (its last frame is exported for the next
// lesson), the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {Accent, KeyNotesScene, MemoryCard, QuestionScene} from '../../shared/scenes';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {
	AnswerBox, BallSvg, Bracket, Chip, CrossedChip, DISPLAY, FlightLane, Ledger, MS, Q, ROLE, Readouts, Row, Sub, Sup, VecArrow, type World, sx,
} from '../../physics/projectile/board';
import {clockAt, flightT, fx, maxH, peakT, range, ux, uy} from '../../physics/projectile/flight';
import {Lbl, StandingLauncher, launcherAt} from '../phys-y12-m5-v02/parts';
import {A1, A2, ACCENT, BLUE_GREY, D, D40, HEAD, HEAD_SIZE, R, T, T40, TUP, U, cue, hold} from './common';
import {Ring, VelTri, pathT, ptT} from './parts';

// ---------- attempt pictures (answer-free: the launcher, the angle and the launch speed only) ----------
const LaunchPicture: React.FC<{deg: number; u: number; k: number}> = ({deg, u, k}) => {
	const g = launcherAt(110, 480, 330, deg);
	const [mx, my] = g.muzzle;
	const a = (deg * Math.PI) / 180;
	return (
		<svg width={678} height={560} style={{overflow: 'visible'}}>
			<StandingLauncher px={110} groundY={480} lw={330} deg={deg} x1={0} x2={660} />
			<VecArrow x={mx} y={my} dx={u * k * Math.cos(a)} dy={-u * k * Math.sin(a)} color={ROLE.v.stroke} width={7} label={<>{fx(u, 1)}<MS /></>} lx={mx + u * k * Math.cos(a) * 0.5 - 40} ly={my - u * k * Math.sin(a) * 0.5 - 60} anchor="end" />
			<line x1={mx} y1={my} x2={mx + 190} y2={my} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 7" />
			<path d={`M${mx + 70},${my} A70,70 0 0,0 ${mx + 70 * Math.cos(a)},${my - 70 * Math.sin(a)}`} fill="none" stroke={INK} strokeWidth={3.5} />
			<text x={mx + 84 * Math.cos(a / 2)} y={my - 84 * Math.sin(a / 2) + 12} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 36}} fill={INK}>{deg}°</text>
		</svg>
	);
};
const M: React.FC<{at?: number; children: React.ReactNode}> = ({at, children}) => (at === undefined ? <>{children}</> : <MarkSpan kind="underline" at={at} color={INK}>{children}</MarkSpan>);
const Q1: React.FC<{mark?: number}> = ({mark}) => <>A projectile is launched at 14.0 m s<Sup>−1</Sup> at <M at={mark}>45° above the horizontal</M> and lands at <M at={mark === undefined ? undefined : mark + 10}>the same level</M> from which it was launched. Air resistance is negligible; take g = 9.8 m s<Sup>−2</Sup>. Calculate (a) the maximum height reached above the launch point and (b) the total time of flight.</>;
const Q2: React.FC<{mark?: number}> = ({mark}) => (
	<>
		A projectile is launched at 19.6 m s<Sup>−1</Sup> at 30° above the horizontal and <M at={mark}>returns to its launch level</M>. Air resistance is negligible; take g = 9.8 m s<Sup>−2</Sup>.
		<div style={{marginTop: 6}}>(a) Calculate the time taken to reach the highest point.</div>
		<div style={{marginTop: 2}}>(b) Calculate the total time of flight.</div>
		<div style={{marginTop: 2}}>(c) Describe the velocity of the projectile just before it lands.</div>
	</>
);
export const S11: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Your turn" pauseAt={cue('attempt-1', 'Pause here')} hold={hold('attempt-1')} size={40} marks={3} picture={<LaunchPicture deg={45} u={14} k={18} />}><Q1 /></QuestionScene></Accent>;
export const S13: React.FC = () => <Accent color={ACCENT}><QuestionScene heading="Last one" pauseAt={cue('attempt-2', 'Pause here')} hold={hold('attempt-2')} size={36} marks={4} picture={<LaunchPicture deg={30} u={19.6} k={15} />}><Q2 /></QuestionScene></Accent>;

const Shrunk: React.FC<{children: React.ReactNode; givens: React.ReactNode; gy: number; w?: number}> = ({children, givens, gy, w = 1110}) => (
	<>
		<div style={{position: 'absolute', left: 96, top: 166, width: w, background: CARD, borderRadius: 16, boxShadow: CARD_SHADOW, borderLeft: `8px solid ${ACCENT}`, padding: '10px 24px', ...DISPLAY(29, INK, 600), whiteSpace: 'normal', lineHeight: 1.28}}>{children}</div>
		<div style={{position: 'absolute', left: 96, top: gy, width: w, background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '6px 20px', ...DISPLAY(32, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{givens}</div>
	</>
);

// ---------- 12. feedback 1 ----------
export const S12: React.FC = () => {
	const id = 'feedback-1';
	const uyIs = cue(id, 'u y is'), height = cue(id, 'The height is'), metres = cue(id, 'metres', 2), ft = cue(id, 'The flight time'), secs = cue(id, 'seconds'), using = cue(id, 'Using fourteen'), avoid = cue(id, 'avoid');
	const a = A1;
	const uyv = uy(a.u, a.deg), Hv = maxH(a.u, a.deg), Tv = flightT(a.u, a.deg);
	const w: World = {x0: 1300, y0: 910, ppm: 26};
	const [pkx, pky] = ptT(w, a.u, a.deg, peakT(a.u, a.deg));
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={372} givens={<>u = 14.0 m s<Sup>−1</Sup> | 45° above the horizontal | lands at the launch level | g = 9.8 m s<Sup>−2</Sup></>}><Q1 mark={14} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 480, display: 'flex', flexDirection: 'column', gap: 18}}>
				<Row at={uyIs} size={TYPE.current}><Q s="u" ax="y" /> = 14.0 sin 45° = <span style={{color: ROLE.y.ink}}>{fx(uyv, 2)}<MS /></span></Row>
				<Row at={height} size={TYPE.current}>H = {fx(uyv, 2)}<Sup>2</Sup> ÷ 19.6 = {fx(uyv * uyv, 1)} ÷ 19.6 = <AnswerBox at={metres}><span style={{color: ROLE.y.ink}}>{fx(Hv, 2)} m</span></AnswerBox></Row>
				<Row at={ft} size={TYPE.current}>T = 2 × {fx(uyv, 2)} ÷ 9.8 = <AnswerBox at={secs}>{fx(Tv, 2)} s</AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={760} at={using} crossAt={avoid} size={36} caption="use u sin θ, not u"><Q s="u" ax="y" plain /> = 14.0: H = {fx(14 * 14 / 19.6, 1)} m, T = {fx(28 / 9.8, 2)} s</CrossedChip>
			<FrameSvg>
				<VelTri x0={1330} y0={640} k={20} vx={ux(a.u, a.deg)} vy={uyv} arcLabel="45°" />
				<FlightLane mx={w.x0} gy={w.y0} ppm={w.ppm} u={a.u} deg={a.deg} lw={100} right={1824} hideBall />
				<path d={pathT(w, a.u, a.deg, Tv)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				<Bracket x1={pkx + 30} y1={w.y0} x2={pkx + 30} y2={pky} color={ROLE.y.ink} at={metres} />
				<Bracket x1={w.x0} y1={w.y0 + 30} x2={sx(w, range(a.u, a.deg))} y2={w.y0 + 30} color={INK} at={secs} />
			</FrameSvg>
			<Lbl x={1330 + (ux(a.u, a.deg) * 20) / 2} y={680} color={ROLE.x.ink} anchor="middle" size={32}>{fx(ux(a.u, a.deg), 2)}</Lbl>
			<Lbl x={1330 + ux(a.u, a.deg) * 20 + 16} y={640 - (uyv * 20) / 2} color={ROLE.y.ink} size={32}>{fx(uyv, 2)}</Lbl>
			<Lbl x={1310 + (ux(a.u, a.deg) * 20) / 2 - 20} y={640 - (uyv * 20) / 2 - 20} color={ROLE.v.ink} anchor="end" size={32}>14.0</Lbl>
			<Lbl x={pkx + 44} y={(w.y0 + pky) / 2} color={ROLE.y.ink} size={32} at={metres}>{fx(Hv, 2)} m</Lbl>
			<Lbl x={w.x0 + 140} y={w.y0 + 30 + 34} color={INK} size={32} at={secs}>{fx(Tv, 2)} s</Lbl>
		</>
	);
};

// ---------- 14. feedback 2 ----------
export const S14: React.FC = () => {
	const id = 'feedback-2';
	const uyIs = cue(id, 'u y is'), timeTop = cue(id, 'the time to the top'), sec = cue(id, 'second'), whole = cue(id, 'whole flight'), secs = cue(id, 'seconds'), mirrors = cue(id, 'mirrors itself'), landsAt = cue(id, 'lands at'), horiz = cue(id, 'horizontal'), giving = cue(id, 'Giving'), avoid = cue(id, 'avoid');
	const a = A2;
	const uyv = uy(a.u, a.deg), uxv = ux(a.u, a.deg), tup = peakT(a.u, a.deg), Tv = flightT(a.u, a.deg);
	const w: World = {x0: 1240, y0: 600, ppm: 16};
	const [pkx, pky] = ptT(w, a.u, a.deg, tup);
	const landX = sx(w, range(a.u, a.deg));
	const K = 15;
	return (
		<>
			<SceneHeading text="Check your answer" at={-40} size={56} />
			<Shrunk gy={420} givens={<>u = 19.6 m s<Sup>−1</Sup> | 30° above the horizontal | returns to its launch level | g = 9.8 m s<Sup>−2</Sup></>}><Q2 mark={14} /></Shrunk>
			<div style={{position: 'absolute', left: 96, top: 520, display: 'flex', flexDirection: 'column', gap: 14}}>
				<Row at={uyIs} size={TYPE.current}><Q s="u" ax="y" /> = 19.6 sin 30° = <span style={{color: ROLE.y.ink}}>{fx(uyv, 2)}<MS /></span></Row>
				<Row at={timeTop} size={TYPE.current}>(a) t<Sub>up</Sub> = {fx(uyv, 2)} ÷ 9.8 = <AnswerBox at={sec}>{fx(tup, 2)} s</AnswerBox></Row>
				<Row at={whole} size={TYPE.current}>(b) T = 2 × {fx(tup, 2)} = <AnswerBox at={secs}>{fx(Tv, 2)} s</AnswerBox></Row>
				<Row at={landsAt} size={TYPE.current}>(c) <AnswerBox at={horiz}><span style={{color: ROLE.v.ink}}>19.6<MS /> at 30° below the horizontal</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={820} at={giving} crossAt={avoid} size={36} caption="the vertical part has reversed">30° above the horizontal</CrossedChip>
			<FrameSvg>
				<FlightLane mx={w.x0} gy={w.y0} ppm={w.ppm} u={a.u} deg={a.deg} lw={90} right={1824} hideBall />
				<path d={pathT(w, a.u, a.deg, Tv)} fill="none" stroke={ROLE.v.stroke} strokeWidth={5} />
				<BallSvg cx={landX} cy={w.y0 - 14} d={28} />
				{useCurrentFrame() >= mirrors ? <DrawPath d={`M${pkx},${pky - 40} L${pkx},${w.y0}`} at={mirrors} dur={14} color={INK} width={3} dash="9 8" /> : null}
				<VelTri x0={1300} y0={760} k={K} vx={uxv} vy={-uyv} arcAt={horiz} arcLabel="30° below" />
			</FrameSvg>
			<Lbl x={1300} y={682} color={INK} size={32} at={-30}>just before landing:</Lbl>
			<Lbl x={1300 + (uxv * K) / 2} y={738} color={ROLE.x.ink} anchor="middle" size={32}>{fx(uxv, 1)}</Lbl>
			<Lbl x={1300 + uxv * K + 14} y={760 + (uyv * K) / 2} color={ROLE.y.ink} size={32}>{fx(uyv, 2)} down</Lbl>
			<HandTag x={pkx + 20} y={pky - 50} text="mirror" at={mirrors} size={30} color={INK} />
		</>
	);
};

// ---------- 15. handoff (its last frame is the next lesson's first frame) ----------
const WF: World = {x0: 170, y0: 830, ppm: 15};
/** The handoff board. deg: barrel angle; t40: clock of the 40 degree flight (null before launch); marks from frames. */
export const HandoffBoard: React.FC<{deg: number; t40: number | null; ringAt?: number; chipAt?: number; lowerAt?: number; soonerAt?: number; recap?: {vert: number; horiz: number; out: number}}> = ({deg, t40, ringAt = -30, chipAt = -30, lowerAt = -30, soonerAt = -30, recap}) => {
	const f = useCurrentFrame();
	const landX = sx(WF, R);
	const [p50x, p50y] = ptT(WF, U, D, TUP);
	const [p40x, p40y] = ptT(WF, U, D40, peakT(U, D40));
	const ball: [number, number] = t40 === null ? (deg > 49.99 ? [landX, WF.y0 - 16] : [WF.x0, WF.y0]) : (() => {const [x, y] = ptT(WF, U, D40, t40); return [x, t40 >= T40 - 0.001 ? y - 16 : y];})();
	const ringO = prog(f, ringAt, 12);
	return (
		<>
			<SceneHeading text={HEAD} at={-60} size={HEAD_SIZE} />
			{recap ? (
				<Enter at={recap.vert - 6} out={recap.out} style={{position: 'absolute', left: 96, top: 186, width: 760}}>
					<div style={{background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px', border: `3px solid ${INK}`}}>
						<div style={{...DISPLAY(TYPE.body, INK, 800)}}>At equal levels:</div>
						<div style={{...DISPLAY(TYPE.body, ROLE.y.ink, 800)}}><Q s="u" ax="y" plain /> sets H and T</div>
						<div style={{...DISPLAY(TYPE.body, ROLE.x.ink, 800), opacity: prog(f, recap.horiz, 12)}}><Q s="u" ax="x" plain /> × T gives the range, 62.8 m</div>
					</div>
				</Enter>
			) : null}
			{recap && f < recap.out + 10 ? <div style={{position: 'absolute', inset: 0, opacity: prog(f, recap.vert, 12) * (1 - prog(f, recap.out, 10))}}><FrameSvg><Bracket x1={p50x + 60} y1={WF.y0} x2={p50x + 60} y2={p50y} color={ROLE.y.ink} /></FrameSvg><Lbl x={p50x + 80} y={(WF.y0 + p50y) / 2} color={ROLE.y.ink} size={TYPE.current}>H = 18.7 m</Lbl></div> : null}
			<FrameSvg>
				<FlightLane mx={WF.x0} gy={WF.y0} ppm={WF.ppm} u={U} deg={deg} lw={150} right={1150} hideBall />
				<path d={pathT(WF, U, D, T)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
				{t40 !== null && t40 > 0.001 ? <path d={pathT(WF, U, D40, t40)} fill="none" stroke={BLUE_GREY} strokeWidth={6} strokeDasharray="16 11" strokeLinecap="round" /> : null}
				<BallSvg cx={ball[0]} cy={ball[1]} d={34} />
				<Bracket x1={WF.x0} y1={WF.y0 + 40} x2={landX} y2={WF.y0 + 40} color={ROLE.x.ink} label="62.8 m" ly={WF.y0 + 76} size={TYPE.current} />
				{ringO > 0 ? <Ring cx={landX} cy={WF.y0 - 14} rx={56} ry={44} at={ringAt} /> : null}
			</FrameSvg>
			<Lbl x={p50x - 20} y={p50y - 36} color={ROLE.v.ink} size={TYPE.current} anchor="end">50°</Lbl>
			{t40 !== null && t40 >= peakT(U, D40) ? <Lbl x={p40x + 30} y={p40y + 40} color={BLUE_GREY} size={TYPE.current}>40°</Lbl> : null}
			{ringO > 0 ? <div style={{position: 'absolute', left: landX + 50, top: WF.y0 - 190, opacity: ringO, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 110, color: INK}}>?</div> : null}
			<HandTag x={p40x - 120} y={p40y + 110} text="lower" at={lowerAt} size={TYPE.handSmall} color={BLUE_GREY} />
			<Ledger x={1300} y={186} w={524} h={300} size={32} titleSize={28}
				clock={{value: 't', t: 0.25}}
				hor={{rows: [{content: <><Q s="s" ax="x" /> = <Q s="u" ax="x" plain />T</>, at: -30}]}}
				ver={{rows: [{content: <>T = 2<Q s="u" ax="y" plain /> ÷ g</>, at: -30}]}} />
			<Readouts x={1300} y={520} w={524} title="flight times, 25 m s⁻¹" rows={[
				{label: <span style={{color: ROLE.v.ink}}>50°</span>, value: fx(T, 2), unit: 's', color: ROLE.v.ink},
				{label: <span style={{color: BLUE_GREY}}>40°</span>, value: t40 === null ? '?' : fx(t40, 2), unit: 's', color: BLUE_GREY},
			]} />
			<HandTag x={1300} y={760} text="sooner" at={soonerAt} size={TYPE.handSmall} color={BLUE_GREY} />
			<Chip x={1300} y={800} at={chipAt} size={36} w={524} color={INK} border={INK}><div style={{lineHeight: 1.25, paddingBottom: 4}}>Next: why do 40° and 50° land together?</div></Chip>
		</>
	);
};
/** v03's final frame, for the next lesson's opening. */
export const V03FinalFrame: React.FC = () => <HandoffBoard deg={D40} t40={T40} />;
export const S15: React.FC = () => {
	const id = 'handoff';
	const f = useCurrentFrame();
	const forty = cue(id, 'forty degrees'), vertC = cue(id, 'vertical component'), horizC = cue(id, 'horizontal component'), nowL = cue(id, 'Now launch'), doesnt = cue(id, "It doesn't"), high = cue(id, 'as high'), sooner = cue(id, 'comes down sooner'), spot = cue(id, 'spot'), why = cue(id, 'Why');
	const deg = kf(f, [[forty, D], [forty + 30, D40]]);
	const slow = Math.max(1, (spot - doesnt) / 30 / T40);
	const t40 = f < forty + 30 ? null : f < doesnt ? 0 : clockAt(f, doesnt, T40, slow);
	return <HandoffBoard deg={deg} t40={t40} ringAt={spot} chipAt={why} lowerAt={high} soonerAt={sooner} recap={{vert: vertC, horiz: horizC, out: nowL}} />;
};

// ---------- 16. key notes ----------
export const S16: React.FC = () => {
	const notes = [
		{content: <>Top: <Q s="v" ax="y" /> = 0, so H = <Q s="u" ax="y" /><Sup>2</Sup> ÷ 2g (above the launch point).</>, at: 4},
		{content: <>Same level: <Q s="s" ax="y" /> = 0 gives t = 0 (launch) or T = 2<Q s="u" ax="y" /> ÷ g.</>, at: 9},
		{content: <>Same level: lands at the launch speed, same angle below.</>, at: 14},
		{content: <>Range for any flight: R = <Q s="u" ax="x" />T.</>, at: 19},
		{content: <>Fixed angle: T ∝ u, H ∝ u<Sup>2</Sup> (double u: T × 2, H × 4).</>, at: 24},
	];
	const w: World = {x0: 40, y0: 200, ppm: 8};
	const [pkx, pky] = ptT(w, U, D, TUP);
	return (
		<Accent color={ACCENT}>
			<KeyNotesScene notes={notes} size={40} aid={
				<MemoryCard at={20} main={<><span style={{color: ROLE.y.ink}}>The way down</span> <span style={{color: ROLE.v.ink}}>mirrors the way up.</span></>} sub="(level ground only)"
					picture={<svg width={584} height={220}>
						<line x1={20} x2={570} y1={200} y2={200} stroke={INK} strokeWidth={4} />
						<line x1={pkx} x2={pkx} y1={pky - 20} y2={200} stroke={INK} strokeWidth={3} strokeDasharray="9 8" />
						<path d={pathT(w, U, D, TUP)} fill="none" stroke={ROLE.y.stroke} strokeWidth={6} />
						<path d={pathT(w, U, D, T, TUP)} fill="none" stroke={ROLE.v.stroke} strokeWidth={6} />
						<text x={pkx - 150} y={150} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={INK}>1.95 s up</text>
						<text x={pkx + 30} y={150} style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={INK}>1.95 s down</text>
					</svg>} />
			} />
			<HandTag x={1824} y={116} text="pause to copy" at={cue('key-notes', 'Pause')} size={TYPE.hand} color={ACCENT} anchor="end" />
		</Accent>
	);
};
