// Scenes 6 to 11: angle and speed (live speed control), the worked example in three stages (radius and tension,
// speed with the force check, the period with the lap timer), the radius mistake and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, TYPE} from '../../shared/tokens';
import {AidCard, AnswerBox, Bench, Bracket, Chip, CrossedChip, DISPLAY, MS, MS2, ROLE, Readouts, Row, Sub, VecArrow} from '../../physics/projectile/board';
import {fx} from '../../physics/projectile/flight';
import {coneGeom} from '../../physics/circular/road-cone';
import {HEAD, HEAD_SIZE, WE, cue, mono, steady} from './common';
import {AMBER, CloseUp, Lbl, PEND, PendStage, Ring, Timer, phaseAt} from './parts';
import {FT, Title, card} from './s1';

const Strike: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => {
	const p = prog(useCurrentFrame(), on, 12);
	return <span style={{position: 'relative', color: p > 0 ? ROLE.slate.ink : undefined}}>{children}{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,70 L100,30" stroke={ROLE.slate.ink} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - p * 100}% -50% 0)`}} /></svg> : null}</span>;
};
export const Givens: React.FC<{x?: number; y?: number; w?: number; size?: number; at?: number; children: React.ReactNode}> = ({x = 96, y = 176, w = 1150, size = 30, at = -30, children}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: ROLE.given.soft, borderRadius: 12, border: `3px solid ${ROLE.given.stroke}`, padding: '4px 18px 6px', ...DISPLAY(size, ROLE.given.ink, 700), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
export const Boxed: React.FC<{color: string; size?: number; children: React.ReactNode}> = ({color, size = TYPE.working, children}) => (
	<div style={{display: 'inline-block', background: CARD, border: `5px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, color)}}>{children}</div>
);
const Task: React.FC<{x: number; y: number; children: React.ReactNode}> = ({x, y, children}) => (
	<Enter at={-30} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', background: '#f1ebdf', border: `3px solid ${INK}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(36, INK, 800)}}>{children}</div>
	</Enter>
);
const K = 76.5;
/** Frames per lap at angle th (slowed so the worked 30 degree lap takes 75 frames; faster balls lap sooner). */
const lapAt = (th: number) => 75 * ((2 * Math.PI * steady(th).r) / steady(th).v) / WE.T;

// ---------- 6. angle and speed ----------
export const S06: React.FC = () => {
	const id = 'angle-and-speed';
	const f = useCurrentFrame();
	const divide = cue(id, 'Divide'), cancel = cue(id, 'both cancel'), tanEq = cue(id, 'tan theta equals'), faster = cue(id, 'faster ball'), ninety = cue(id, 'closer to ninety'), needed = cue(id, 'tension needed'), never = cue(id, 'never quite');
	const keys = mono([[faster, 30], [faster + 30, 45], [faster + 80, 45], [faster + 110, 60], [never, 60], [never + 30, 30]], 10);
	let phase = 0;
	for (let k = 0; k < f; k++) phase += (2 * Math.PI) / lapAt(kf(k, keys));
	const th = kf(f, keys);
	const st = steady(th);
	const pz = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - needed) / 24)));
	const {c, r} = coneGeom(PEND.pivot, PEND.L, th, PEND.tiltK, phase);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PendStage theta={th} phase={phase} />
				<VecArrow x={1300} y={870} dx={st.FT * 70} dy={0} color={AMBER.stroke} width={9 + 4 * pz} head={26} at={faster - 20} />
			</FrameSvg>
			<Lbl x={c[0] - r - 20} y={c[1] + 10} color={INK} anchor="end" size={30}>horizontal circle</Lbl>
			<HandTag x={c[0] + 40} y={c[1] + r * PEND.tiltK + 50} text="faster: wider" at={faster + 40} size={TYPE.handSmall} color={ROLE.x.ink} />
			<div style={{position: 'absolute', left: 1240, top: 186, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={divide} size={36}><Strike on={cancel}><FT /></Strike> sin θ ÷ <Strike on={cancel + 4}><FT /></Strike> cos θ</Row>
				<Row at={divide + 20} size={36}>&nbsp;&nbsp;= (<Strike on={cancel + 8}>m</Strike>v²/r) ÷ <Strike on={cancel + 12}>m</Strike>g</Row>
				<Row at={tanEq - 6} size={60}><AnswerBox at={tanEq}><span>tan <span style={{position: 'relative'}}>θ</span> = v²/(rg)</span></AnswerBox></Row>
			</div>
			<Readouts x={1240} y={470} w={584} size={44} at={-30} title="live: speed up the ball" rows={[
				{label: 'v', value: fx(st.v, 2), unit: <MS />, color: ROLE.x.ink},
				{label: 'θ', value: fx(th, 0), unit: '°', color: ROLE.given.ink},
				{label: 'r', value: fx(st.r, 3), unit: 'm', color: ROLE.given.ink},
				{label: <FT />, value: fx(st.FT, 2), unit: 'N', color: AMBER.ink},
			]} />
			<Lbl x={1240} y={870} at={faster - 20} color={AMBER.ink} anchor="end" size={TYPE.current}><FT /></Lbl>
			<HandTag x={1320 + st.FT * 70} y={870} text="more pull" at={needed} size={TYPE.handSmall} color={AMBER.ink} />
			<Lbl x={1300} y={925} at={ninety} color={AMBER.ink} size={32}><FT /> = mg/cos θ</Lbl>
		</>
	);
};

// ---------- 7. worked example: radius and tension ----------
const SMALL = 0.6;
const small = (x: number, y: number): [number, number] => [96 + (x - 96) * SMALL, 900 + (y - 900) * SMALL];
const SmallPend: React.FC = () => (
	<g transform={`translate(${96 * (1 - SMALL)},${900 * (1 - SMALL)}) scale(${SMALL})`}>
		<PendStage theta={30} phase={0} bench />
	</g>
);
export const S07: React.FC = () => {
	const id = 'worked-radius-tension';
	const tryIt = cue(id, 'try an example'), bob = cue(id, 'just the small mass'), first = cue(id, 'First the radius'), rM = cue(id, 'two five metres'), now = cue(id, 'Now the tension'), over = cue(id, 'm g over cosine'), ft = cue(id, 'two point two six'), mg = cue(id, 'one point nine six');
	const b = small(PEND.pivot[0] + 210, PEND.pivot[1] + 364);
	const p = small(PEND.pivot[0], PEND.pivot[1]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><SmallPend /></FrameSvg>
			<Lbl x={(p[0] + b[0]) / 2 + 20} y={(p[1] + b[1]) / 2 - 10} color={ROLE.given.ink} size={32}>0.50 m</Lbl>
			<Lbl x={p[0] + 4} y={p[1] + 110} color={ROLE.given.ink} size={32}>30°</Lbl>
			<HandTag x={b[0] - 120} y={b[1] + 60} text="the bob" at={bob} size={TYPE.handSmall} color={INK} />
			<Task x={700} y={176}>Find the radius, tension, speed and period.</Task>
			<Givens x={700} y={246} w={1124} at={tryIt}>m = 0.20 kg | L = 0.50 m | θ = 30° to the vertical | g = 9.8<MS2 /></Givens>
			<Enter at={first} style={{position: 'absolute', left: 700, top: 320}}><Boxed color={INK} size={40}>r = L sin θ &nbsp;&nbsp; <FT /> cos θ = mg</Boxed></Enter>
			<div style={{position: 'absolute', left: 700, top: 420, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={rM - 30} ageAt={now} size={TYPE.working} oldSize={40}>r = 0.50 × sin 30° = <AnswerBox at={rM}><span>0.25 m</span></AnswerBox></Row>
				<Row at={over} size={TYPE.current}><FT /> = mg/cos θ = (0.20 × 9.8) ÷ cos 30°</Row>
				<Row at={ft - 30} size={TYPE.working}>&nbsp;&nbsp;= 1.96 ÷ 0.866 = <AnswerBox at={ft}><span><FT /> = {fx(WE.FT, 2)} N</span></AnswerBox></Row>
			</div>
			<HandTag x={1300} y={460} text="sin for r" at={rM + 10} size={TYPE.handSmall} color={ROLE.given.ink} />
			<HandTag x={1560} y={545} text="vertical equation" at={over + 10} size={TYPE.handSmall} color={ROLE.y.ink} />
			<Lbl x={760} y={650} at={mg} color={AMBER.ink} size={34}>weight: mg = 1.96 N, a bit less than F<Sub>T</Sub></Lbl>
			<CrossedChip x={700} y={790} at={mg + 10} crossAt={mg + 30} size={34} caption="only the up part equals mg"><FT /> = mg = 1.96 N</CrossedChip>
		</>
	);
};

// ---------- 8. worked example: speed and the check ----------
export const S08: React.FC = () => {
	const id = 'worked-speed';
	const f = useCurrentFrame();
	const speed = cue(id, 'the speed'), thats = cue(id, "That's the square root"), v119 = cue(id, 'one point one nine'), check = cue(id, 'As a check'), times = cue(id, 'two point two six times'), n113 = cue(id, 'one point one three'), mv = cue(id, 'm v squared'), same = cue(id, 'same value');
	const X = 440, Y = 640, KC = 100;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CloseUp x={X} y={Y} theta={30} mg={WE.mg} k={KC} splitAt={-60} centreX={110} d={130} pulseIn={n113} />
				{f >= same ? <path d={`M${X - WE.side * KC - 60},${Y - 90} C ${420},${400} ${700},${420} ${890},${520}`} fill="none" stroke={ROLE.x.stroke} strokeWidth={4} opacity={prog(f, same, 14)} /> : null}
			</FrameSvg>
			<Lbl x={X + 24} y={Y - WE.mg * KC + 10} color={ROLE.y.ink} size={34}>1.96 N</Lbl>
			<Lbl x={X - WE.side * KC - 14} y={Y - 44} at={n113} color={ROLE.x.ink} anchor="end" size={TYPE.current}>1.13 N</Lbl>
			<Lbl x={X + 24} y={Y + WE.mg * KC - 10} color={AMBER.ink} size={34}>mg</Lbl>
			<Lbl x={110} y={Y - 50} color={ROLE.given.ink} anchor="middle" size={30}>centre</Lbl>
			<Givens x={900} y={186} w={924} at={-30}>m = 0.20 kg | θ = 30° | g = 9.8<MS2 /></Givens>
			<Enter at={-30} style={{position: 'absolute', left: 1360, top: 640, width: 464}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Found so far</Title>
					<div style={{...DISPLAY(38, ROLE.given.ink, 800), marginTop: 4}}>r = 0.25 m</div>
					<div style={{...DISPLAY(38, AMBER.ink, 800)}}><FT /> = 2.26 N</div>
					<div style={{...DISPLAY(38, ROLE.x.ink, 800), opacity: prog(f, v119, 12)}}>v = 1.19<MS /></div>
				</div>
			</Enter>
			<Enter at={-30} style={{position: 'absolute', left: 900, top: 262}}><Boxed color={INK} size={TYPE.current}>v = √(rg tan θ)</Boxed></Enter>
			<div style={{position: 'absolute', left: 900, top: 370, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={thats} ageAt={check} size={TYPE.current} oldSize={36}>v = √(0.25 × 9.8 × tan 30°) = √1.41</Row>
				<Row at={v119 - 20} size={TYPE.working}>&nbsp;&nbsp;= <AnswerBox at={v119}><span>v = {fx(WE.v, 2)}<MS /></span></AnswerBox></Row>
				<Row at={times} size={36}><span style={{color: ROLE.x.ink}}>check: <FT /> sin θ = 2.26 × 0.5 = 1.13 N</span></Row>
				<Row at={mv} size={36}><span style={{color: ROLE.x.ink}}>mv²/r = 0.20 × 1.189² ÷ 0.25 = 1.13 N ✓</span></Row>
			</div>
			<HandTag x={900} y={760} text="same 1.13 N: it checks" at={same} size={TYPE.handSmall} color={ROLE.x.ink} />
			<HandTag x={1500} y={310} text="from tan θ = v²/(rg)" at={speed + 20} size={30} color={INK} />
		</>
	);
};

// ---------- 9. the period ----------
const P9 = {pivot: [430, 400] as [number, number], L: 420};
export const S09: React.FC = () => {
	const id = 'worked-period';
	const f = useCurrentFrame();
	const period = cue(id, 'And the period'), tEq = cue(id, 'T equals two pi r'), secs = cue(id, 'one point three two'), surprise = cue(id, "Here's a surprise"), height = cue(id, 'just the height'), hOverG = cue(id, 'square root of h'), only = cue(id, 'depends only'), mass = cue(id, "mass doesn't");
	const lap = 30 * WE.T; // the real lap: 1.32 s
	const phase = phaseAt(f, [[0, lap]]);
	const {c} = coneGeom(P9.pivot, P9.L, 30, 0.3, phase);
	const since = (f - secs) / 30;
	const shown = f < secs ? ((f / 30) % WE.T) : Math.min(WE.T, since);
	const glow = 4 * Math.sin(Math.PI * Math.max(0, Math.min(1, (f - height) / 24)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Bench edgeX={900} topY={900} left={96} floorY={4000} legs={false} />
				<PendStage theta={30} phase={phase} pivot={P9.pivot} bench={false} />
				<Timer x={620} y={190} w={330} text={`${fx(shown, 2)} s`} />
				<Bracket x1={P9.pivot[0] - 40} y1={P9.pivot[1]} x2={P9.pivot[0] - 40} y2={c[1]} color={ROLE.given.stroke} at={height} lx={P9.pivot[0] - 60} anchor="end" label={<span style={{fontSize: 44 + 2 * glow}}>h</span>} size={44} />
				<Ring cx={P9.pivot[0] - 80} cy={(P9.pivot[1] + c[1]) / 2} rx={50} ry={60} at={only} color={ROLE.given.stroke} />
			</FrameSvg>
			<Lbl x={785} y={420} at={secs} color={INK} anchor="middle" size={30}>one lap</Lbl>
			<HandTag x={110} y={480} text="only h matters" at={only + 10} size={TYPE.handSmall} color={ROLE.given.ink} />
			<Enter at={period} style={{position: 'absolute', left: 1000, top: 186}}><Boxed color={INK} size={TYPE.current}>T = 2πr/v</Boxed></Enter>
			<div style={{position: 'absolute', left: 1000, top: 290, display: 'flex', flexDirection: 'column', gap: 10, width: 840}}>
				<Row at={tEq} ageAt={surprise} size={TYPE.working} oldSize={36}>T = 2π × 0.25 ÷ 1.189 = <AnswerBox at={secs}><span>{fx(WE.T, 2)} s</span></AnswerBox></Row>
				<Row at={surprise + 20} ageAt={height} size={36} oldSize={32}>T = 2πr ÷ √(rg tan θ) = 2π√(r/(g tan θ))</Row>
				<Row at={height} size={34}>r/tan θ = L sin θ × cos θ/sin θ = L cos θ = h</Row>
				<Row at={hOverG - 6} size={60}><AnswerBox at={hOverG}><span>T = 2π√(<span style={{position: 'relative'}}>h</span>/g)</span></AnswerBox></Row>
				<Row at={hOverG + 30} size={32}>check: 2π√(0.433 ÷ 9.8) = 1.32 s</Row>
			</div>
			<Chip x={1000} y={830} at={mass} size={36} border={INK}>no m in it</Chip>
			<HandTag x={1240} y={850} text="the mass doesn't matter" at={mass + 10} size={TYPE.handSmall} color={ROLE.given.ink} />
		</>
	);
};

// ---------- 10. the radius mistake ----------
export const S10: React.FC = () => {
	const id = 'radius-mistake';
	const f = useCurrentFrame();
	const strLen = cue(id, 'string length'), put = cue(id, 'Put r equals'), v168 = cue(id, 'one point six eight'), tooFast = cue(id, 'far too fast'), real = cue(id, 'radius L sine'), notL = cue(id, 'not L');
	const {c, bob} = coneGeom(PEND.pivot, PEND.L, 30, PEND.tiltK, 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PendStage theta={30} phase={0} />
				<line x1={bob[0]} y1={bob[1]} x2={c[0]} y2={c[1]} stroke={ROLE.given.stroke} strokeWidth={4} strokeDasharray="12 9" />
				<circle cx={c[0]} cy={c[1]} r={10} fill={ROLE.given.stroke} />
				<Bracket x1={PEND.pivot[0]} y1={PEND.pivot[1]} x2={bob[0]} y2={bob[1]} color={ROLE.slate.stroke} at={strLen} off={44} />
				{f >= real ? <g opacity={prog(f, real, 14)}>
					<ellipse cx={c[0]} cy={c[1]} rx={PEND.L} ry={PEND.L * PEND.tiltK} fill="none" stroke={ROLE.slate.stroke} strokeWidth={4} strokeDasharray="14 10" />
				</g> : null}
				{f >= notL ? <path d={`M${c[0] + PEND.L - 40},${c[1] - 40} l60,60 M${c[0] + PEND.L + 20},${c[1] - 40} l-60,60`} stroke={INK} strokeWidth={6} opacity={prog(f, notL, 10)} /> : null}
				<Bracket x1={c[0]} y1={c[1] + 40} x2={bob[0]} y2={bob[1] + 40} color={ROLE.given.stroke} at={real} />
				<Ring cx={(c[0] + bob[0]) / 2} cy={c[1] + 40} rx={130} ry={26} at={notL + 6} color={ROLE.given.stroke} />
			</FrameSvg>
			<Lbl x={bob[0] + 20} y={(PEND.pivot[1] + bob[1]) / 2 - 30} at={strLen} color={ROLE.slate.ink} size={34}>r = L = 0.50 m ?</Lbl>
			<Lbl x={(c[0] + bob[0]) / 2} y={c[1] + 130} at={real} color={ROLE.given.ink} anchor="middle" size={34}>r = L sin θ = 0.25 m</Lbl>
			<HandTag x={c[0] + PEND.L - 120} y={c[1] + 170} text="too big a circle" at={notL} size={TYPE.handSmall} color={ROLE.slate.ink} />
			<Enter at={-30} style={{position: 'absolute', left: 1290, top: 186, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>The classic slip</Title>
					<div style={{...DISPLAY(34, INK, 700), whiteSpace: 'normal'}}>using the string length as the radius</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 1290, top: 400, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={put} size={36}><span style={{color: ROLE.slate.ink}}>v = √(0.50 × 9.8 × tan 30°)</span></Row>
				<Row at={v168 - 10} size={TYPE.current}><span style={{color: ROLE.slate.ink}}>&nbsp;&nbsp;= {fx(WE.wrongV, 2)}<MS /></span></Row>
			</div>
			<CrossedChip x={1290} y={560} at={tooFast - 10} crossAt={tooFast} size={34} caption="far too fast">r = 0.50 m</CrossedChip>
			<Enter at={real} style={{position: 'absolute', left: 1290, top: 720}}>
				<div style={{...DISPLAY(TYPE.current, ROLE.given.ink, 800)}}>r = L sin θ, not L</div>
			</Enter>
		</>
	);
};

// ---------- 11. memory aid ----------
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const one = cue(id, 'One string'), holds = cue(id, 'up part holds'), turns = cue(id, 'in part turns'), light = cue(id, 'light string'), stuck = cue(id, 'If you get stuck');
	const f = useCurrentFrame();
	const {bob} = coneGeom(PEND.pivot, PEND.L, 30, PEND.tiltK, 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<PendStage theta={30} phase={0} />
				<VecArrow x={bob[0]} y={bob[1]} dx={0} dy={-WE.mg * K} color={ROLE.y.stroke} width={8} head={24} dash="14 8" at={holds} />
				<VecArrow x={bob[0]} y={bob[1]} dx={-WE.side * K} dy={0} color={ROLE.x.stroke} width={8} head={24} dash="14 8" at={turns} />
				<VecArrow x={bob[0]} y={bob[1]} dx={0} dy={WE.mg * K} color={AMBER.stroke} width={8} head={24} />
			</FrameSvg>
			<Lbl x={bob[0] + 24} y={bob[1] - WE.mg * K + 20} at={holds} color={ROLE.y.ink} size={34}>holds</Lbl>
			<Lbl x={bob[0] - WE.side * K - 16} y={bob[1] + 40} at={turns} color={ROLE.x.ink} anchor="end" size={34}>turns</Lbl>
			<Lbl x={bob[0] + 24} y={bob[1] + WE.mg * K - 10} color={AMBER.ink} size={34}>mg</Lbl>
			<AidCard x={1190} y={200} w={634} at={one - 10}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 56, lineHeight: 1.1, color: INK}}>One string, two jobs:</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.1, color: ROLE.y.ink, opacity: prog(f, holds, 12)}}>the up part holds,</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.1, color: ROLE.x.ink, opacity: prog(f, turns, 12)}}>the in part turns.</div>
			</AidCard>
			<Chip x={1190} y={560} at={light} size={32} w={634} border={ROLE.given.stroke} color={ROLE.given.ink}>light string, horizontal circle, steady speed</Chip>
			<Enter at={stuck} style={{position: 'absolute', left: 1190, top: 680, width: 634}}>
				<div style={{...DISPLAY(34, INK, 800)}}>Stuck? Ask:</div>
				<div style={{...DISPLAY(34, ROLE.y.ink, 700)}}>which part holds the ball up?</div>
				<div style={{...DISPLAY(34, ROLE.x.ink, 700)}}>which part turns it?</div>
			</Enter>
		</>
	);
};
