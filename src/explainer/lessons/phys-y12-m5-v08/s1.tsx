// Scenes 1 to 5: the hook (opening on last time's final frame), what the model predicts (the live height
// control), a fair test, measuring h and R, a quick risk check. One bench stage throughout, with camera pushes.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Countdown, DrawPath, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, BallSvg, Bench, Bracket, Chip, DISPLAY, HandNote, Ledger, Q, ROLE, Readouts, Sub, Sup} from '../../physics/projectile/board';
import {fx} from '../../physics/projectile/flight';
import {CARBON_SRC, HStrobes, PlumbMark, RampRig, Sheet, hLaunchAt} from '../../physics/projectile/ramp';
import {Ring} from '../phys-y12-m5-v03/parts';
import {V07FinalFrame} from '../phys-y12-m5-v07/s3';
import {HEAD, HEAD_SIZE, UX, cue, fallT, hold, modelR} from './common';
import {type Cam, Dot, ID_CAM, LAB, Lbl, ReleaseGate, camMix, camP, camT, landX, rig} from './parts';

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
export const Boxed: React.FC<{color: string; size?: number; children: React.ReactNode}> = ({color, size = TYPE.working, children}) => (
	<div style={{display: 'inline-block', background: CARD, border: `5px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, color)}}>{children}</div>
);
/** The paper sheet on the bench (from under the exit to beyond the longest landing). */
export const PAPER = {x: 900, w: 640};
const ROLL = 30, SLOW = 4;
/** A launch from height h starting (top of the track) at frame `at`: ball centre, phase and flight time so far. */
export const launchState = (f: number, at: number, h: number, ux = UX) => {
	const g = rig(h);
	if (f < at) return {pos: g.at(0), phase: 'seat' as const, t: 0};
	if (f < at + ROLL) return {pos: g.at((f - at) / ROLL), phase: 'roll' as const, t: 0};
	const T = fallT(h);
	const t = Math.min(T, (f - at - ROLL) / 30 / SLOW);
	if (t < T) return {pos: hLaunchAt(g.exitCentre, ux, t, LAB.ppm), phase: 'fly' as const, t};
	return {pos: [landX(h, ux), LAB.benchY - g.r] as [number, number], phase: 'landed' as const, t: T};
};
export const launchFrames = (h: number) => ROLL + Math.ceil(fallT(h) * 30 * SLOW);

/** The bench stage: bench, paper, plumb mark, rig at height h (m), ball drawn by the caller. */
export const BenchStage: React.FC<{h: number; carbon?: number; children?: React.ReactNode; cam?: Cam; gate?: number; ball?: [number, number] | null; strobes?: {h: number; upTo: number}}> = ({h, carbon = 0, children, cam = ID_CAM, gate, ball, strobes}) => {
	const g = rig(h);
	return (
		<g transform={camT(cam)}>
			<Bench edgeX={1300} topY={LAB.benchY} left={-400} floorY={4000} legs={false} />
			<Sheet x={PAPER.x} y={LAB.benchY - 4} w={PAPER.w} />
			{carbon > 0 ? <Sheet src={CARBON_SRC} x={PAPER.x + 40} y={LAB.benchY - 4} w={PAPER.w - 160} opacity={carbon} /> : null}
			<PlumbMark x={LAB.exitX} y={LAB.benchY - 4} />
			<RampRig exitX={LAB.exitX} benchY={LAB.benchY} hPx={h * LAB.ppm} rw={LAB.rw} ball={false} />
			{gate !== undefined ? <ReleaseGate h={h} lift={gate} /> : null}
			{strobes ? <HStrobes exitCentre={rig(strobes.h).exitCentre} ux={UX} upTo={strobes.upTo} ppm={LAB.ppm} d={2 * g.r} /> : null}
			{children}
			{ball ? <BallSvg cx={ball[0]} cy={ball[1]} d={2 * g.r} /> : null}
		</g>
	);
};

// ---------- 1. hook: four times higher ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const ten = cue(id, 'ten centimetres'), t32 = cue(id, 'thirty-two'), forty = cue(id, 'forty centimetres'), higher = cue(id, 'higher'), same = cue(id, 'same spot'), howMuch = cue(id, 'How much'), sameC = cue(id, 'The same', 2), half = cue(id, 'one and a half'), twice = cue(id, 'twice'), four2 = cue(id, 'four times', 2), think = cue(id, 'think');
	const hd = hold(id);
	const fade = prog(f, 10, 24);
	const h = kf(f, [[ten - 8, 0.4], [ten + 24, 0.1], [forty, 0.1], [forty + 34, 0.4]]);
	const go = t32 - launchFrames(0.1);
	const ls = launchState(f, go, 0.1);
	const g = rig(h);
	const ballPos: [number, number] = f < go || f >= forty ? g.at(0) : ls.pos;
	const L1 = landX(0.1);
	return (
		<>
			{fade < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><V07FinalFrame /></div> : null}
			<div style={{position: 'absolute', inset: 0, opacity: fade}}>
				<SceneHeading text="Four times higher: how much further?" at={-60} size={52} />
				<FrameSvg>
					<BenchStage h={h} gate={0} ball={ballPos} strobes={f >= go + 30 && f < forty ? {h: 0.1, upTo: ls.t} : undefined}>
						<Dot x={L1} at={t32} />
						<Bracket x1={LAB.exitX + 40} y1={LAB.benchY} x2={LAB.exitX + 40} y2={LAB.benchY - h * LAB.ppm} color={ROLE.y.ink} at={ten} />
						<Bracket x1={LAB.exitX} y1={LAB.benchY + 50} x2={L1} y2={LAB.benchY + 50} color={ROLE.x.ink} at={t32} />
					</BenchStage>
					<Ring cx={g.at(0.05)[0]} cy={g.at(0.05)[1]} rx={46} ry={40} at={same} />
					<Countdown start={hd.startFrame} end={hd.endFrame} x={1110} y={330} ringFrom={think} />
				</FrameSvg>
				<Lbl x={LAB.exitX - 16} y={LAB.benchY - h * LAB.ppm / 2} at={ten} color={ROLE.y.ink} anchor="end" size={TYPE.current}>h = {fx(h, 2)} m</Lbl>
				<Lbl x={(LAB.exitX + L1) / 2} y={LAB.benchY + 92} at={t32} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>R = 0.32 m</Lbl>
				<HandTag x={LAB.exitX + 60} y={LAB.benchY - 330} text="4 × higher" at={higher} size={TYPE.handSmall} color={ROLE.y.ink} />
				<HandTag x={1000} y={760} text="how far?" at={howMuch} size={TYPE.handSmall} color={ROLE.x.ink} />
				<Enter at={-30} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
					<div style={{...card, border: `3px solid ${INK}`}}>
						<Title>The experiment</Title>
						<div style={{...DISPLAY(34, INK, 800), marginTop: 4}}>same ball, same release point</div>
						<div style={{...DISPLAY(34, ROLE.y.ink, 800), opacity: prog(f, ten, 12)}}>h = 0.10 m: R = {f >= t32 ? '0.32 m' : '?'}</div>
						<div style={{...DISPLAY(34, ROLE.y.ink, 800), opacity: prog(f, forty, 12)}}>h = 0.40 m: R = ?</div>
					</div>
				</Enter>
				<Enter at={cue(id, "Here's the experiment")} style={{position: 'absolute', left: 1290, top: 450, width: 534}}>
					<div style={{...DISPLAY(TYPE.body, INK, 800), whiteSpace: 'normal'}}>How much further will it land?</div>
				</Enter>
				{([['same', sameC], ['× 1.5', half], ['× 2', twice], ['× 4', four2]] as const).map(([t, at], i) => <Chip key={t} x={1290 + (i % 2) * 200} y={560 + Math.floor(i / 2) * 76} at={at} size={38}>{t}</Chip>)}
			</div>
		</>
	);
};

// ---------- 2. what the model predicts ----------
export const S02: React.FC = () => {
	const id = 'prediction';
	const f = useCurrentFrame();
	const fall = cue(id, 'fall time'), hEq = cue(id, 'h equals'), timeC = cue(id, 'twice the time'), horiz = cue(id, 'horizontal velocity'), twice2 = cue(id, 'twice', 2), s64 = cue(id, 'sixty-four'), prop = cue(id, 'proportional'), pred = cue(id, 'prediction', 2);
	const h = kf(f, [[hEq, 0.4], [hEq + 44, 0.5], [hEq + 124, 0.1], [hEq + 194, 0.4]]);
	const ls = launchState(f, horiz, 0.4);
	const g = rig(h);
	const flying = f >= horiz;
	const L1 = landX(0.1), L4 = landX(0.4);
	return (
		<>
			<SceneHeading text="Four times higher: how much further?" at={-60} size={52} out={pred - 8} />
			<SceneHeading text={HEAD} at={pred} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchStage h={flying ? 0.4 : h} gate={0} ball={flying ? ls.pos : g.at(0)} strobes={flying && ls.phase !== 'seat' && ls.phase !== 'roll' ? {h: 0.4, upTo: ls.t} : undefined}>
					<Dot x={L1} />
					<Dot x={L4} at={horiz + launchFrames(0.4)} />
					<Bracket x1={LAB.exitX + 40} y1={LAB.benchY} x2={LAB.exitX + 40} y2={LAB.benchY - (flying ? 0.4 : h) * LAB.ppm} color={ROLE.y.ink} />
					<Bracket x1={LAB.exitX} y1={LAB.benchY + 50} x2={L4} y2={LAB.benchY + 50} color={ROLE.x.ink} at={twice2} />
				</BenchStage>
			</FrameSvg>
			<Lbl x={LAB.exitX - 16} y={LAB.benchY - (flying ? 0.4 : h) * LAB.ppm / 2} color={ROLE.y.ink} anchor="end" size={TYPE.current}>h = {fx(flying ? 0.4 : h, 2)} m</Lbl>
			<Lbl x={(LAB.exitX + L4) / 2} y={LAB.benchY + 92} at={twice2} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>× 2: <AnswerBox at={s64}>R = 0.64 m</AnswerBox></Lbl>
			<Enter at={prop - 6} style={{position: 'absolute', left: 96, top: 186}}><Boxed color={ROLE.v.stroke} size={TYPE.current}><span style={{color: INK}}>R = <Q s="u" ax="x" plain /> √(2h ÷ g), so R ∝ √h</span></Boxed></Enter>
			<Chip x={760} y={196} at={timeC - 10} size={32} border={ROLE.y.stroke}>h = 0.10 m: t = {fx(fallT(0.1), 3)} s</Chip>
			<Chip x={760} y={262} at={timeC} size={32} border={ROLE.y.stroke}>h = 0.40 m: t = {fx(fallT(0.4), 3)} s</Chip>
			<Chip x={760} y={328} at={timeC + 14} size={32} border={INK}>× 4 height → × 2 time</Chip>
			<HandTag x={1000} y={720} text="× 2 range" at={twice2 + 10} size={TYPE.handSmall} color={ROLE.x.ink} />
			<Ledger x={1290} y={186} w={534} h={330} size={30} titleSize={28}
				clock={{value: 't', t: 0.2, at: fall}}
				hor={{rows: [{content: <>R = <Q s="u" ax="x" plain />t</>, at: horiz}]}}
				ver={{rows: [{content: <><Q s="u" ax="y" plain /> = 0</>, at: fall}, {content: <>h = ½gt<Sup>2</Sup></>, at: fall + 8}, {content: <>t = √(2h ÷ g)</>, at: hEq + 60}]}} />
			<Readouts x={1290} y={540} w={534} size={44} title="model, from the 0.10 m trial" rows={[
				{label: 'h', value: fx(flying ? 0.4 : h, 2), unit: 'm', color: ROLE.y.ink},
				{label: '√h', value: fx(Math.sqrt(flying ? 0.4 : h), 3), color: ROLE.y.ink},
				{label: 't', value: fx(fallT(flying ? 0.4 : h), 3), unit: 's', color: ROLE.y.ink},
				{label: 'R', value: fx(modelR(flying ? 0.4 : h), 3), unit: 'm', color: ROLE.x.ink},
				{label: 'R ÷ √h', value: fx(modelR(0.4) / Math.sqrt(0.4), 2), color: INK, ring: prop},
			]} />
		</>
	);
};

// ---------- 3. a fair test: what changes, what stays (camera push to the ramp) ----------
const CAM3: Cam = {k: 1.35, fx: 420, fy: 640, tx: 560, ty: 600};
export const S03: React.FC = () => {
	const id = 'fair-test';
	const f = useCurrentFrame();
	const primary = cue(id, 'primary data'), changeH = cue(id, 'change the height'), measure = cue(id, 'measure the range'), speed = cue(id, 'launch speed'), sameEvery = cue(id, 'same at every'), marked = cue(id, 'marked point'), pushed = cue(id, 'pushed'), level = cue(id, 'spirit level'), velocity = cue(id, 'velocity');
	const cam = camMix(ID_CAM, CAM3, prog(f, 0, 34));
	const ls = launchState(f, pushed + 6, 0.4);
	const g = rig(0.4);
	const lvS = 100 / 1784, lvX = LAB.exitX - 55, lvY = LAB.benchY - 0.4 * LAB.ppm - 2 * g.r - 4;
	const [gx, gy] = camP(cam, g.at(0.06)[0], g.at(0.06)[1]);
	const [vx, vy] = camP(cam, lvX, lvY);
	return (
		<>
			<SceneHeading text="A fair test: what changes, what stays" at={-40} size={54} />
			<FrameSvg>
				<BenchStage h={0.4} cam={cam} gate={prog(f, pushed, 12)} ball={ls.pos}>
					{f >= level ? <g opacity={prog(f, level, 14)}><image href={staticFile('assets/physics/y12p-spirit-level-v1.png')} x={lvX - 1086 * lvS} y={lvY - 458 * lvS} width={2172 * lvS} height={724 * lvS} preserveAspectRatio="none" /></g> : null}
				</BenchStage>
				<Ring cx={gx} cy={gy} rx={56} ry={50} at={marked} color={ROLE.given.stroke} />
				<Ring cx={vx} cy={vy - 26} rx={40} ry={26} at={velocity} />
			</FrameSvg>
			<HandTag x={gx + 40} y={gy - 90} text="same start, same speed" at={marked + 10} size={TYPE.handSmall} color={ROLE.given.ink} />
			<HandNote x={vx - 60} y={vy - 100} at={velocity} size={TYPE.handSmall} color={ROLE.y.ink}>exit horizontal: u<Sub>y</Sub> = 0</HandNote>
			<Enter at={primary - 6} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
				<div style={{display: 'inline-block', background: ROLE.given.soft, border: `3px solid ${ROLE.given.stroke}`, borderRadius: 14, padding: '6px 18px 8px', ...DISPLAY(32, ROLE.given.ink, 800), whiteSpace: 'normal'}}>primary data: collected by you, by measuring</div>
			</Enter>
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 320, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Variables</Title>
					<div style={{...DISPLAY(34, ROLE.y.ink, 800), marginTop: 6}}>independent: {f >= changeH ? 'h (changed)' : '?'}</div>
					<div style={{...DISPLAY(34, ROLE.x.ink, 800), marginTop: 4}}>dependent: {f >= measure ? 'R (measured)' : '?'}</div>
					<div style={{...DISPLAY(34, ROLE.given.ink, 800), marginTop: 4, whiteSpace: 'normal'}}>controlled: {f >= speed ? <><Q s="u" ax="x" plain />, by same ball and same release point</> : '?'}</div>
				</div>
			</Enter>
			<HandTag x={1290} y={680} text="controlled: kept the same" at={sameEvery} size={30} color={ROLE.given.ink} />
			<HandTag x={1290} y={724} text="so it can't change R" at={sameEvery + 14} size={30} color={ROLE.given.ink} />
		</>
	);
};

// ---------- 4. measuring h and R (camera push to the paper and the plumb line) ----------
const CAM4: Cam = {k: 1.3, fx: 860, fy: 740, tx: 760, ty: 580};
const RULE_SRC = 'assets/physics/phys-y11-metre-rule-v1.png', BOB_SRC = 'assets/physics/y12p-plumb-bob-v1.png';
export const S04: React.FC = () => {
	const id = 'measuring';
	const f = useCurrentFrame();
	const carbonC = cue(id, 'Carbon paper'), touches = cue(id, 'first touches'), down = cue(id, 'down'), plumb = cue(id, 'plumb line'), below = cue(id, 'directly below'), measured = cue(id, 'measured from'), forH = cue(id, 'For the height'), bottom = cue(id, 'bottom of the ball'), actually = cue(id, 'actually falls'), five = cue(id, 'five heights');
	const p0 = cue(id, 'Now measure');
	const cam = camMix(CAM3, CAM4, prog(f, p0, 34));
	const go = down - launchFrames(0.4);
	const ls = launchState(f, go, 0.4);
	const g = rig(0.4);
	const L4 = landX(0.4);
	const carbon = f < carbonC ? 0 : f < down + 10 ? prog(f, carbonC, 14) : 1 - prog(f, down + 10, 16);
	const ballPos: [number, number] = f >= forH ? g.exitCentre : ls.pos;
	const bobS = 90 / (1285 - 265), bobTop = LAB.benchY - 8 - (1285 - 434) * bobS;
	const ruleS = (L4 - LAB.exitX + 60) / 1538;
	const P = (x: number, y: number) => camP(cam, x, y);
	const [dx, dy] = P(L4, LAB.benchY - 4), [cx_, cy_] = P(LAB.exitX, LAB.benchY - 4), [hx, hy] = P(LAB.exitX - 50, LAB.benchY - 0.2 * LAB.ppm);
	return (
		<>
			<SceneHeading text="Measuring h and R" at={-40} size={56} />
			<FrameSvg>
				<BenchStage h={0.4} cam={cam} carbon={carbon} ball={ballPos}>
					<Dot x={L4} at={down + 14} />
					{f >= plumb ? <g opacity={prog(f, plumb, 14)}>
						<line x1={LAB.exitX} x2={LAB.exitX} y1={LAB.benchY - 0.4 * LAB.ppm + 4} y2={bobTop} stroke={INK} strokeWidth={1.6} />
						<image href={staticFile(BOB_SRC)} x={LAB.exitX - 485 * bobS} y={bobTop - 434 * bobS} width={971 * bobS} height={1619 * bobS} preserveAspectRatio="none" />
					</g> : null}
					{f >= measured ? <g opacity={prog(f, measured, 14)}><image href={staticFile(RULE_SRC)} x={LAB.exitX - 317 * ruleS} y={LAB.benchY + 34 - 362 * ruleS} width={2172 * ruleS} height={724 * ruleS} preserveAspectRatio="none" /></g> : null}
					<Bracket x1={LAB.exitX} y1={LAB.benchY + 70} x2={L4} y2={LAB.benchY + 70} color={ROLE.x.ink} at={measured + 10} />
					<Bracket x1={LAB.exitX - 50} y1={LAB.benchY} x2={LAB.exitX - 50} y2={LAB.benchY - 0.4 * LAB.ppm} color={ROLE.y.ink} at={bottom} />
					<Bracket x1={LAB.exitX - 90} y1={LAB.benchY} x2={LAB.exitX - 90} y2={LAB.benchY - 0.4 * LAB.ppm - g.r} color={ROLE.slate.stroke} at={bottom + 20} />
				</BenchStage>
			</FrameSvg>
			<HandTag x={dx + 20} y={dy - 60} text="first contact" at={touches + 30} size={TYPE.handSmall} color={INK} />
			<HandTag x={cx_ + 20} y={cy_ + 140} text="from directly below" at={below} size={TYPE.handSmall} color={ROLE.x.ink} />
			<Lbl x={(cx_ + dx) / 2} y={cy_ + 140} at={measured + 10} color={ROLE.x.ink} anchor="middle" size={TYPE.current}>R</Lbl>
			<Lbl x={hx + 16} y={hy} at={bottom} color={ROLE.y.ink} size={TYPE.current}>h</Lbl>
			<HandTag x={110} y={890} text="h to the centre ✗" at={bottom + 30} size={30} color={ROLE.slate.ink} />
			<HandTag x={110} y={935} text="h to the bottom: the actual fall" at={actually} size={30} color={ROLE.y.ink} />
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Measure carefully</Title>
					<div style={{...DISPLAY(32, INK, 800), marginTop: 6, whiteSpace: 'normal', opacity: prog(f, carbonC, 12)}}>carbon paper marks first contact</div>
					<div style={{...DISPLAY(32, ROLE.x.ink, 800), marginTop: 4, whiteSpace: 'normal', opacity: prog(f, plumb, 12)}}>R: from directly below the exit (plumb line)</div>
					<div style={{...DISPLAY(32, ROLE.y.ink, 800), marginTop: 4, whiteSpace: 'normal', opacity: prog(f, forH, 12)}}>h: bench to the bottom of the ball</div>
				</div>
			</Enter>
			<Enter at={five - 10} style={{position: 'absolute', left: 1290, top: 560, width: 534}}>
				<div style={{...card, padding: '8px 14px 10px'}}>
					<div style={{display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 1fr 1.3fr 1fr', ...DISPLAY(28, INK, 800), borderBottom: `2px solid ${INK}`}}><span>h (m)</span><span>R<Sub>1</Sub></span><span>R<Sub>2</Sub></span><span>R<Sub>3</Sub></span><span>mean R</span><span>±</span></div>
					{['0.10', '0.20', '0.30', '0.40', '0.50'].map(v => <div key={v} style={{display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr 1fr 1.3fr 1fr', ...DISPLAY(28, ROLE.y.ink, 700), borderBottom: '1.5px solid #e4dccd', height: 40}}><span>{v}</span><span /><span /><span /><span /><span /></div>)}
				</div>
			</Enter>
		</>
	);
};

// ---------- 5. a quick risk check (pull back to the whole bench) ----------
const TRAY_SRC = 'assets/physics/phys-y11-sand-tray-v1.png';
export const S05: React.FC = () => {
	const id = 'risk-check';
	const f = useCurrentFrame();
	const tray = cue(id, 'catch tray'), feet = cue(id, 'feet'), clamp = cue(id, 'Clamp'), glasses = cue(id, 'glasses');
	const cam = camMix(CAM4, ID_CAM, prog(f, 0, 34));
	const go = tray + 6;
	const ls = launchState(f, go, 0.4);
	const trayS = 150 / 1312, trayX = 1290, trayY = LAB.benchY;
	const inTray = ls.phase === 'landed';
	const ball: [number, number] = inTray ? [trayX, trayY - 30] : ls.pos;
	const g = rig(0.4);
	return (
		<>
			<SceneHeading text="A quick risk check" at={-40} size={56} />
			<FrameSvg>
				<BenchStage h={0.4} cam={cam} ball={f >= tray ? ball : g.at(0)}>
					<Dot x={landX(0.4)} />
					{f >= tray - 8 ? <g opacity={prog(f, tray - 8, 14)}><image href={staticFile(TRAY_SRC)} x={trayX - 800 * trayS} y={trayY - 560 * trayS} width={1600 * trayS} height={800 * trayS} preserveAspectRatio="none" /></g> : null}
				</BenchStage>
				{f >= feet ? <DrawPath d={`M1150,${LAB.benchY - 16} L1300,${LAB.benchY - 16} Q1345,${LAB.benchY - 10} 1352,${LAB.benchY + 60} L1356,1000`} at={feet} dur={24} color={ROLE.slate.stroke} width={5} dash="12 9" /> : null}
				<Ring cx={322} cy={LAB.benchY - 10} rx={70} ry={30} at={clamp} />
				<Ring cx={rig(0.4).tab[0] - 20} cy={rig(0.4).tab[1]} rx={50} ry={34} at={clamp + 8} />
			</FrameSvg>
			<HandTag x={1340} y={930} text="without a tray" at={feet + 10} size={30} color={ROLE.slate.ink} anchor="end" />
			<Enter at={-30} style={{position: 'absolute', left: 1420, top: 186, width: 404}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Risk check</Title>
					<div style={{...DISPLAY(32, INK, 800), marginTop: 6, whiteSpace: 'normal'}}>catch tray <span style={{opacity: prog(f, feet + 20, 12)}}>✓</span></div>
					<div style={{...DISPLAY(32, INK, 800), marginTop: 4, whiteSpace: 'normal'}}>stand clamped, base on bench <span style={{opacity: prog(f, clamp, 12)}}>✓</span></div>
					<div style={{...DISPLAY(32, INK, 800), marginTop: 4, whiteSpace: 'normal'}}>spring launcher: safety glasses <span style={{opacity: prog(f, glasses - 10, 12)}}>✓</span></div>
				</div>
			</Enter>
			<Lbl x={trayX} y={trayY - 70} at={tray} color={INK} anchor="middle" size={30}>catch tray</Lbl>
		</>
	);
};

export {INK_SOFT};
