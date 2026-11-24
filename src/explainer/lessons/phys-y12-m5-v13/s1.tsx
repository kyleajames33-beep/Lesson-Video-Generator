// Scenes 1 to 5: the hook (opening on last time's conical pendulum), two forces and where the centre is (camera
// tilt to the perspective cone with the top-view inset), the geometry (triangle stage), resolving the tension
// (force close-up) and why the string can never be horizontal (live angle control).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, BallSvg, Bracket, Chip, CrossedChip, DISPLAY, ROLE, Readouts, Row, Sub, VecArrow} from '../../physics/projectile/board';
import {fx} from '../../physics/projectile/flight';
import {coneGeom} from '../../physics/circular/road-cone';
import {HEAD, HEAD_SIZE, HEAD_V12, WE, cue, hold, mono} from './common';
import {AMBER, CloseUp, Lbl, PEND, PendStage, Ring, TopInset, phaseAt, stopPhase, tension} from './parts';

export const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, padding: '12px 24px 16px'};
export const Title: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = INK_SOFT}) => <div style={{...DISPLAY(TYPE.label, color, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{children}</div>;
export const FT: React.FC = () => <>F<Sub>T</Sub></>;
const K = 76.5; // stage force scale, px per newton (mg = 1.96 N is 150 px)

// ---------- 1. hook: could the string be horizontal? ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const conical = cue(id, 'conical pendulum'), slants = cue(id, 'The string slants'), faster = cue(id, 'faster and faster'), could = cue(id, 'Could it ever'), horiz = cue(id, 'perfectly horizontal'), predict = cue(id, 'prediction');
	const h = hold(id);
	const theta = kf(f, mono([[faster, 30], [faster + 40, 40], [h.startFrame, 40], [h.startFrame + 40, 30]], 10));
	const phase = phaseAt(f, mono([[0, 75], [faster, 75], [faster + 20, 55], [h.startFrame, 75]], 10), 20);
	const {c, r} = coneGeom(PEND.pivot, PEND.L, theta, PEND.tiltK, phase);
	const old = 1 - prog(f, 0, 18);
	const oldCard = 1 - prog(f, conical - 24, 14);
	const b0 = coneGeom(PEND.pivot, PEND.L, 30, PEND.tiltK, 0).bob;
	const tx = PEND.pivot[0] - b0[0], ty = PEND.pivot[1] - b0[1], tl = Math.hypot(tx, ty);
	return (
		<>
			<SceneHeading text={HEAD_V12} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PendStage theta={theta} phase={phase} coneInk={prog(f, conical, 14)} />
				{old > 0 ? <g opacity={old}>
					<VecArrow x={b0[0]} y={b0[1]} dx={(tx / tl) * 170} dy={(ty / tl) * 170} color={AMBER.stroke} width={7} head={22} />
					<VecArrow x={b0[0]} y={b0[1]} dx={0} dy={150} color={AMBER.stroke} width={7} head={22} />
					<circle cx={c[0]} cy={c[1]} r={9} fill={ROLE.given.stroke} />
					<line x1={b0[0]} y1={b0[1]} x2={c[0]} y2={c[1]} stroke={ROLE.given.stroke} strokeWidth={3} strokeDasharray="10 8" />
				</g> : null}
				{f >= horiz ? <line x1={PEND.pivot[0]} y1={PEND.pivot[1]} x2={PEND.pivot[0] + (PEND.L * Math.min(1, prog(f, horiz, 20)))} y2={PEND.pivot[1]} stroke={ROLE.slate.stroke} strokeWidth={4} strokeDasharray="14 10" /> : null}
				<Countdown start={h.startFrame} end={h.endFrame} x={1560} y={760} ringFrom={predict} />
			</FrameSvg>
			{old > 0 ? <div style={{opacity: old}}>
				<Lbl x={b0[0] - 60 + (tx / tl) * 120} y={b0[1] + (ty / tl) * 120} color={AMBER.ink} anchor="end" size={32}>tension</Lbl>
				<Lbl x={b0[0] + 24} y={b0[1] + 140} color={AMBER.ink} size={32}>weight</Lbl>
				<div style={{position: 'absolute', left: (b0[0] + c[0]) / 2 - 20, top: c[1] - 120, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 90, color: INK}}>?</div>
			</div> : null}
			{oldCard > 0 ? <div style={{opacity: oldCard}}>
				<div style={{position: 'absolute', left: 1290, top: 200, width: 534, ...card, border: `3px solid ${INK}`, padding: '12px 22px 14px', boxSizing: 'border-box'}}>
					<Title>Only two forces</Title>
					<div style={{...DISPLAY(34, AMBER.ink, 800), marginTop: 4}}>the string's pull (tension)</div>
					<div style={{...DISPLAY(34, AMBER.ink, 800)}}>gravity (weight)</div>
					<div style={{...DISPLAY(32, INK, 700), whiteSpace: 'normal'}}>one slanted string: up and in?</div>
				</div>
			</div> : null}
			{old > 0 ? <div style={{opacity: old}}>
				<div style={{position: 'absolute', left: 1290, top: 470, width: 534, display: 'inline-block', background: '#f1ebdf', border: `2.5px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(36, INK, 700), whiteSpace: 'normal', boxSizing: 'border-box'}}>Next: how does string tension sustain a conical pendulum?</div>
			</div> : null}
			<Lbl x={c[0] - r - 20} y={c[1] + 10} color={INK} anchor="end" size={30}>horizontal circle</Lbl>
			<HandTag x={PEND.pivot[0] + 30} y={PEND.pivot[1] - 50} text="fixed support" at={slants - 30} size={TYPE.handSmall} color={ROLE.given.ink} />
			<HandTag x={PEND.pivot[0] + r + 60} y={PEND.pivot[1] + 170} text="string slants" at={slants} size={TYPE.handSmall} color={AMBER.ink} />
			<HandTag x={PEND.pivot[0] + PEND.L - 160} y={PEND.pivot[1] - 40} text="horizontal?" at={horiz + 12} size={TYPE.handSmall} color={ROLE.slate.ink} />
			<Chip x={1290} y={200} at={conical} size={40} border={INK}>a conical pendulum</Chip>
			<Enter at={conical + 20} style={{position: 'absolute', left: 1290, top: 290, width: 534}}>
				<div style={{...DISPLAY(30, INK, 700), whiteSpace: 'normal'}}>a ball on a string going round a horizontal circle, so the string traces a cone</div>
			</Enter>
			<Enter at={could} style={{position: 'absolute', left: 1290, top: 430, width: 534}}>
				<div style={{...DISPLAY(TYPE.current, INK, 800), whiteSpace: 'normal'}}>Could the string ever be horizontal?</div>
			</Enter>
			<Chip x={1290} y={560} at={predict} size={36}>Yes, if it's fast enough</Chip>
			<Chip x={1290} y={636} at={predict + 6} size={36}>No, never</Chip>
		</>
	);
};

// ---------- 2. two forces, one centre ----------
export const S02: React.FC = () => {
	const id = 'two-forces-centre';
	const f = useCurrentFrame();
	const pulls = cue(id, 'tension pulls'), weight = cue(id, 'weight pulls'), third = cue(id, 'no third arrow'), job = cue(id, 'job, not a force'), notice = cue(id, 'notice where'), isnt = cue(id, "isn't the support"), level = cue(id, 'level with the ball'), net = cue(id, 'net force'), centre = cue(id, 'that centre');
	const tiltK = 0.3 + 0.2 * prog(f, 0, 30);
	const phase = stopPhase(f, k => phaseAt(k, [[0, 75]]), Math.max(10, pulls - 40));
	const {c, r, bob} = coneGeom(PEND.pivot, PEND.L, 30, tiltK, phase);
	const tx = PEND.pivot[0] - bob[0], ty = PEND.pivot[1] - bob[1], tl = Math.hypot(tx, ty);
	const FTpx = WE.FT * K, mgPx = WE.mg * K;
	return (
		<>
			<SceneHeading text={HEAD_V12} at={-200} size={HEAD_SIZE} out={centre - 14} />
			<SceneHeading text={HEAD} at={centre - 4} size={HEAD_SIZE} />
			<FrameSvg>
				<PendStage theta={30} phase={phase} tiltK={tiltK} solid={0.55 * prog(f, 0, 30)} />
				<VecArrow x={bob[0]} y={bob[1]} dx={(tx / tl) * FTpx} dy={(ty / tl) * FTpx} color={AMBER.stroke} width={8} head={24} at={pulls} />
				<VecArrow x={bob[0]} y={bob[1]} dx={0} dy={mgPx} color={AMBER.stroke} width={8} head={24} at={weight} />
				<VecArrow x={bob[0] - 30} y={bob[1] - 70} dx={-140} dy={0} color={ROLE.slate.stroke} width={6} head={22} dash="12 8" at={third} out={notice} />
				{f >= job ? <path d={`M${bob[0] - 175},${bob[1] - 95} l60,50 M${bob[0] - 115},${bob[1] - 95} l-60,50`} stroke={INK} strokeWidth={6} opacity={prog(f, job, 10) * (1 - prog(f, notice, 10))} /> : null}
				<Ring cx={PEND.pivot[0]} cy={PEND.pivot[1]} rx={34} ry={34} at={isnt} color={ROLE.slate.stroke} />
				{f >= isnt + 14 ? <path d={`M${PEND.pivot[0] - 26},${PEND.pivot[1] - 26} l52,52 M${PEND.pivot[0] + 26},${PEND.pivot[1] - 26} l-52,52`} stroke={INK} strokeWidth={5} opacity={prog(f, isnt + 14, 10)} /> : null}
				{f >= level ? <g opacity={prog(f, level, 12)}>
					<circle cx={c[0]} cy={c[1]} r={11} fill={ROLE.given.stroke} />
					<line x1={bob[0]} y1={bob[1]} x2={c[0]} y2={c[1]} stroke={ROLE.given.stroke} strokeWidth={4} strokeDasharray="12 9" />
				</g> : null}
				<VecArrow x={bob[0] - 34} y={bob[1] + 34} dx={-(r - 60)} dy={0} color={ROLE.a.stroke} width={8} head={24} at={net} />
				<Ring cx={c[0]} cy={c[1]} rx={36} ry={30} at={level + 20} color={ROLE.given.stroke} />
			</FrameSvg>
			<Lbl x={bob[0] - 20 + (tx / tl) * FTpx * 0.6} y={bob[1] + (ty / tl) * FTpx * 0.6} at={pulls} color={AMBER.ink} anchor="end" size={TYPE.current}><FT /></Lbl>
			<Lbl x={bob[0] + 22} y={bob[1] + mgPx - 20} at={weight} color={AMBER.ink} size={TYPE.current}>mg</Lbl>
			<Lbl x={bob[0] - 30} y={bob[1] - 130} at={third} out={notice} color={ROLE.slate.ink} anchor="end" size={30}>"centripetal force"</Lbl>
			<Lbl x={PEND.pivot[0] + 44} y={PEND.pivot[1] + 40} at={isnt + 14} color={ROLE.slate.ink} size={30}>not the centre</Lbl>
			<Lbl x={c[0] - r / 2} y={c[1] + 70} at={net} color={ROLE.a.ink} anchor="middle" size={34}>a</Lbl>
			<HandTag x={c[0] - 360} y={c[1] + 40} text="centre: level with the ball" at={level + 20} size={TYPE.handSmall} color={ROLE.given.ink} />
			<HandTag x={bob[0] + 30} y={bob[1] - 50} text="only 2 forces" at={weight + 24} size={TYPE.handSmall} color={AMBER.ink} />
			<TopInset x={1290} y={186} w={534} h={300} phase={phase} at={notice - 20} aAt={net} vAt={notice} title="the circle from above" />
			<Chip x={1290} y={520} at={net} size={36} w={534} border={ROLE.a.stroke}>net force: horizontal, towards the centre</Chip>
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 660, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Forces on the ball</Title>
					<div style={{...DISPLAY(34, AMBER.ink, 800), marginTop: 4, opacity: prog(f, pulls, 12)}}>tension <FT />: along the string</div>
					<div style={{...DISPLAY(34, AMBER.ink, 800), opacity: prog(f, weight, 12)}}>weight mg: straight down</div>
					<div style={{...DISPLAY(30, ROLE.slate.ink, 700), opacity: prog(f, job, 12)}}>centripetal: a job, not a force</div>
				</div>
			</Enter>
		</>
	);
};

// ---------- 3. the geometry ----------
const TP: [number, number] = [920, 240];
const TL = 560;
const TB: [number, number] = [TP[0] + TL * 0.5, TP[1] + TL * Math.cos(Math.PI / 6)];
const TC: [number, number] = [TP[0], TB[1]];
export const S03: React.FC = () => {
	const id = 'geometry';
	const f = useCurrentFrame();
	const name = cue(id, 'name the parts'), lenL = cue(id, 'length L'), angle = cue(id, 'angle theta'), radius = cue(id, 'radius of the circle'), sine = cue(id, 'L sine theta'), height = cue(id, 'height of the support'), cosine = cue(id, 'L cosine theta'), notL = cue(id, 'r is not L'), slip = cue(id, 'most common slip');
	const s = 1 - 0.45 * prog(f, 0, 30);
	const flash = (at: number) => 4 * Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / 24)));
	const arc = 110;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${96 * (1 - s)},${900 * (1 - s)}) scale(${s})`}>
					<PendStage theta={30} phase={0} tiltK={0.5} solid={0.4} bench />
				</g>
				<g opacity={prog(f, 4, 26)}>
					{f >= cosine ? <path d={`M${TP[0]},${TP[1]} L${TB[0]},${TB[1]} L${TC[0]},${TC[1]} Z`} fill={ROLE.given.soft} opacity={prog(f, cosine, 14)} /> : null}
					<line x1={TP[0]} y1={TP[1]} x2={TC[0]} y2={TC[1] + 30} stroke={INK} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, angle, 12)} />
					<line x1={TC[0]} y1={TC[1]} x2={TB[0]} y2={TB[1]} stroke={ROLE.given.stroke} strokeWidth={4} strokeDasharray="12 9" opacity={prog(f, radius, 12)} />
					<line x1={TP[0]} y1={TP[1]} x2={TB[0]} y2={TB[1]} stroke={INK} strokeWidth={5} />
					<circle cx={TP[0]} cy={TP[1]} r={10} fill={ROLE.given.stroke} />
					<circle cx={TC[0]} cy={TC[1]} r={10} fill={ROLE.given.stroke} opacity={prog(f, radius, 12)} />
					<BallSvg cx={TB[0]} cy={TB[1]} d={64} />
					{f >= angle ? <path d={`M${TP[0]},${TP[1] + arc} A ${arc} ${arc} 0 0 0 ${TP[0] + arc * 0.5},${TP[1] + arc * Math.cos(Math.PI / 6)}`} fill="none" stroke={ROLE.given.stroke} strokeWidth={5} opacity={prog(f, angle, 12)} /> : null}
				</g>
				<g strokeWidth={0}>
					<Bracket x1={TP[0]} y1={TP[1]} x2={TB[0]} y2={TB[1]} color={ROLE.given.stroke} at={lenL} off={-44} label={<span style={{fontSize: 44 + flash(notL) * 2}}>L</span>} size={44} />
					<Bracket x1={TC[0]} y1={TC[1] + 44} x2={TB[0]} y2={TB[1] + 44} color={ROLE.given.stroke} at={sine} off={40} label={<span style={{fontSize: 40 + flash(notL) * 2}}>r = L sin θ</span>} size={40} />
					<Bracket x1={TP[0] - 44} y1={TP[1]} x2={TC[0] - 44} y2={TC[1]} color={ROLE.given.stroke} at={cosine} lx={TP[0] - 64} anchor="end" label="h = L cos θ" size={40} />
				</g>
			</FrameSvg>
			<Lbl x={TP[0] + 26} y={TP[1] + arc + 40} at={angle} color={ROLE.given.ink} size={40}>θ</Lbl>
			<HandTag x={TC[0] + 20} y={TC[1] + 150} text="sin: side opposite θ" at={sine + 20} size={TYPE.handSmall} color={ROLE.given.ink} />
			<HandTag x={TP[0] - 380} y={(TP[1] + TC[1]) / 2 + 50} text="cos: side next to θ" at={cosine + 20} size={TYPE.handSmall} color={ROLE.given.ink} />
			<Enter at={name} style={{position: 'absolute', left: 1400, top: 200, width: 424}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Name the parts</Title>
					<div style={{...DISPLAY(36, ROLE.given.ink, 800), marginTop: 6, opacity: prog(f, lenL, 12)}}>L: string length</div>
					<div style={{...DISPLAY(36, ROLE.given.ink, 800), opacity: prog(f, angle, 12)}}>θ: angle to the vertical</div>
					<div style={{...DISPLAY(TYPE.current, ROLE.given.ink, 800), marginTop: 6, opacity: prog(f, sine, 12)}}>r = L sin θ</div>
					<div style={{...DISPLAY(TYPE.current, ROLE.given.ink, 800), opacity: prog(f, cosine, 12)}}>h = L cos θ</div>
				</div>
			</Enter>
			<Enter at={height} style={{position: 'absolute', left: 1400, top: 560, width: 424}}>
				<div style={{...DISPLAY(30, INK, 700), whiteSpace: 'normal'}}>r: ball to the centre, across</div>
				<div style={{...DISPLAY(30, INK, 700), whiteSpace: 'normal'}}>h: support down to the circle</div>
			</Enter>
			<Enter at={notL} style={{position: 'absolute', left: 1400, top: 700}}>
				<div style={{...DISPLAY(TYPE.working, ROLE.slate.ink, 800), padding: '0 16px'}}>r ≠ L</div>
			</Enter>
			<FrameSvg><Ring cx={1470} cy={736} rx={90} ry={46} at={slip} color={ROLE.slate.stroke} /></FrameSvg>
		</>
	);
};

// ---------- 4 and 5. the force close-up ----------
const BX = 760, BY = 600, KC = 100, CENTRE_X = 150; // ball centre, px per newton, centre of the circle
export const S04: React.FC = () => {
	const id = 'resolve-tension';
	const f = useCurrentFrame();
	const split = cue(id, 'split the tension'), vPart = cue(id, 'vertical part'), hPart = cue(id, 'horizontal part'), balances = cue(id, 'balances the weight'), eqMg = cue(id, 'equals m g'), nothing = cue(id, 'nothing to balance'), eqMv = cue(id, 'equals m v'), jobs = cue(id, 'two jobs');
	const up = WE.mg * KC, side = WE.side * KC;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform="translate(0, 560) scale(0.55)" opacity={0.95}><PendStage theta={30} phase={0} bench={false} coneInk={1} /></g>
				<CloseUp x={BX} y={BY} theta={30} mg={WE.mg} k={KC} splitAt={vPart - 10} aAt={nothing} centreX={CENTRE_X} pulseUp={balances} pulseW={balances} pulseIn={nothing} />
				{f >= nothing + 20 ? <path d={`M${BX - side - 30},${BY - 40} C ${BX - side - 120},${BY - 10} ${BX - side - 120},${BY + 80} ${BX - 160},${BY + 100}`} fill="none" stroke={ROLE.x.stroke} strokeWidth={4} strokeDasharray="1 0" opacity={prog(f, nothing + 20, 14)} /> : null}
			</FrameSvg>
			<Lbl x={CENTRE_X} y={BY - 50} color={ROLE.given.ink} anchor="middle" size={30}>centre</Lbl>
			<Lbl x={BX - 0.5 * WE.FT * KC - 20} y={BY - 0.87 * WE.FT * KC - 10} color={AMBER.ink} anchor="end" size={TYPE.current} out={split + 10}><FT /></Lbl>
			<Lbl x={BX + 26} y={BY + up - 10} color={AMBER.ink} size={TYPE.current}>mg</Lbl>
			<Lbl x={BX + 26} y={BY - up + 10} at={vPart} color={ROLE.y.ink} size={TYPE.current}><FT /> cos θ</Lbl>
			<Lbl x={BX - side - 20} y={BY - 40} at={hPart} color={ROLE.x.ink} anchor="end" size={TYPE.current}><FT /> sin θ</Lbl>
			<Lbl x={BX - 120} y={BY + 150} at={nothing} color={ROLE.a.ink} anchor="middle" size={34}>a</Lbl>
			<HandTag x={BX + 26} y={BY - up + 70} text="= mg" at={balances + 10} size={TYPE.handSmall} color={ROLE.y.ink} />
			<HandTag x={BX - side - 300} y={BY + 40} text="= net force" at={nothing + 10} size={TYPE.handSmall} color={ROLE.x.ink} />
			<Enter at={split - 10} style={{position: 'absolute', left: 1120, top: 200, width: 704}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Split the tension</Title>
					<div style={{...DISPLAY(36, f < vPart ? INK : ROLE.y.ink, 800), marginTop: 4, opacity: f < vPart ? 0.4 : prog(f, vPart, 12)}}>up part: {f < vPart ? '?' : <><FT /> cos θ</>}</div>
					<div style={{...DISPLAY(36, f < hPart ? INK : ROLE.x.ink, 800), opacity: f < hPart ? 0.4 : prog(f, hPart, 12)}}>in part: {f < hPart ? '?' : <><FT /> sin θ</>}</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 1120, top: 420, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={balances} size={32}><span style={{color: ROLE.y.ink}}>vertical: no acceleration</span></Row>
				<Row at={eqMg} size={TYPE.working}><span style={{color: ROLE.y.ink}}><FT /> cos θ = mg</span></Row>
				<Row at={nothing} size={32}><span style={{color: ROLE.x.ink}}>towards the centre: unbalanced</span></Row>
				<Row at={eqMv} size={TYPE.working}><span style={{color: ROLE.x.ink}}><FT /> sin θ = mv²/r</span></Row>
			</div>
			<Chip x={1120} y={800} at={jobs} size={36} border={ROLE.y.stroke} color={ROLE.y.ink}>holds it up</Chip>
			<Chip x={1400} y={800} at={jobs + 8} size={36} border={ROLE.x.stroke} color={ROLE.x.ink}>pulls it in</Chip>
		</>
	);
};

export const S05: React.FC = () => {
	const id = 'never-horizontal';
	const f = useCurrentFrame();
	const ifStr = cue(id, 'If the string'), noVert = cue(id, 'no vertical part'), weight = cue(id, 'against its weight'), always = cue(id, 'always slants'), bigger = cue(id, 'tension is always bigger'), up = cue(id, 'holding the ball up');
	const theta = kf(f, mono([[ifStr, 30], [ifStr + 30, 60], [ifStr + 55, 80], [ifStr + 80, 85], [ifStr + 110, 89], [always + 20, 89], [always + 60, 30]], 8));
	const {FT: ft, side} = tension(WE.mg, theta);
	const ghost = prog(f, noVert, 14) * (1 - prog(f, always + 20, 14));
	const longArrow = theta > 75;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CloseUp x={BX} y={BY} theta={theta} mg={WE.mg} k={KC} splitAt={-60} keepT centreX={CENTRE_X} pulseW={weight} ghost={ghost} />
				<Ring cx={1690} cy={318} rx={130} ry={40} at={ifStr + 40} color={ROLE.y.stroke} />
			</FrameSvg>
			<Lbl x={CENTRE_X} y={BY - 50} color={ROLE.given.ink} anchor="middle" size={30}>centre</Lbl>
			<Lbl x={BX + 26} y={BY + WE.mg * KC - 10} color={AMBER.ink} size={TYPE.current}>mg</Lbl>
			<Lbl x={BX + 26} y={BY - WE.mg * KC + 10} color={ROLE.y.ink} size={TYPE.current}><FT /> cos θ</Lbl>
			{longArrow ? <Lbl x={130} y={BY - 150} color={AMBER.ink} size={TYPE.current}>→ ∞ at 90°</Lbl> : null}
			<HandTag x={140} y={BY - 220} text="grows without limit" at={ifStr + 90} size={TYPE.handSmall} color={AMBER.ink} />
			<HandTag x={300} y={BY + 60} text="no up part" at={noVert + 10} size={TYPE.handSmall} color={ROLE.slate.ink} />
			<Lbl x={BX + 26} y={BY + WE.mg * KC + 50} at={weight} color={ROLE.slate.ink} size={32}>nothing balances mg</Lbl>
			<Readouts x={1290} y={186} w={534} size={44} title="live: tilt the string" rows={[
				{label: 'θ', value: fx(theta, 0), unit: '°', color: ROLE.given.ink},
				{label: <><FT /> cos θ</>, value: fx(WE.mg, 2), unit: 'N', color: ROLE.y.ink},
				{label: <><FT /></>, value: fx(ft, ft >= 100 ? 1 : 2), unit: 'N', color: AMBER.ink},
				{label: <><FT /> sin θ</>, value: fx(side, side >= 100 ? 1 : 2), unit: 'N', color: ROLE.x.ink},
			]} />
			<CrossedChip x={1290} y={520} at={always - 30} crossAt={always} size={34}>Yes, if it's fast enough</CrossedChip>
			<Enter at={always - 24} style={{position: 'absolute', left: 1290, top: 616}}>
				<div style={{display: 'inline-flex', alignItems: 'center', gap: 10, background: CARD, border: `4.5px solid ${f >= always ? INK : 'rgba(60,45,20,0.16)'}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(34, INK, 800)}}>No, never{f >= always ? <span style={{opacity: prog(f, always, 12)}}> ✓</span> : null}</div>
			</Enter>
			<div style={{position: 'absolute', left: 1290, top: 730, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={bigger} size={36}><FT /> = mg/cos θ, and cos θ &lt; 1</Row>
				<Row at={up} size={TYPE.working}><AnswerBox at={up + 10}><span><FT /> &gt; mg</span></AnswerBox></Row>
			</div>
			<HandTag x={1560} y={830} text="always" at={up + 20} size={TYPE.handSmall} color={AMBER.ink} />
		</>
	);
};
