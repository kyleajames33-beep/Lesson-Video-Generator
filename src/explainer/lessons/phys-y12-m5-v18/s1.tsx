// Scenes 1 to 4: Newton's mountain (opening on last time's satellite at 400 km; the launch-speed slider with
// paths from the field motion engine), falling around (the first second's 4.9 m fall against the 5.0 m curve,
// then a new straight line each second, then the full circle), gravity as the inward resultant (the satellite
// on its circle, v at right angles to F), and the orbital speed (the algebra column, m cancels).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {V17FinalFrame} from '../phys-y12-m5-v17/s3';
import {CIRCLE0, FALL, HEAD, HEAD_SIZE, LAUNCHES, R0, RE, V_CIRC0, about, cue, holdIf, mono} from './common';
import {AMBER, Earth, GREY, LauncherZoom, Lbl, Mountain, NAVY, RightAngle, Ring, RunTrail, Satellite, T, TEAL, VecArrow, comma, fx, rPx, toPx} from './parts';
import type {Stage} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
export const ST: Stage = {cx: 600, cy: 580, R: 260};
const ATMOS = '#bcd6e6';

/** Newton's mountain stage: Earth, a thin atmosphere band, the mountain, finished launches and a live one. */
const NewtonStage: React.FC<{st: Stage; mountainAt?: number; mountainOut?: number; done: number[]; live?: {i: number; t: number}; circleT?: number; marks?: boolean}> = ({st, mountainAt = -60, mountainOut, done, live, circleT = 0, marks = true}) => {
	const f = useCurrentFrame();
	const mo = mountainOut === undefined ? 1 : 1 - prog(f, mountainOut, 20);
	return (
		<g>
			<circle cx={st.cx} cy={st.cy} r={st.R + 5} fill="none" stroke={ATMOS} strokeWidth={8} />
			<Earth cx={st.cx} cy={st.cy} d={2 * st.R} />
			<Mountain st={st} r0={R0} at={mountainAt} opacity={mo} />
			{done.map(i => <RunTrail key={i} st={st} path={LAUNCHES[i].path} t={LAUNCHES[i].path.duration} width={3.5} />)}
			{marks ? done.map(i => { const p = LAUNCHES[i].path; const [x, y] = toPx(st, p.x[p.n], p.y[p.n]); return <g key={'m' + i}><circle cx={x} cy={y} r={7} fill={NAVY.stroke} stroke={CARD} strokeWidth={2} /></g>; }) : null}
			{live ? <RunTrail st={st} path={LAUNCHES[live.i].path} t={live.t} width={5.5} dot={9} /> : null}
			{circleT > 0 ? <RunTrail st={st} path={CIRCLE0} t={circleT} width={5.5} dot={circleT < CIRCLE0.duration ? 9 : 0} /> : null}
		</g>
	);
};
const LAUNCH_FR = 60;
const flight = (f: number, at: number, i: number) => LAUNCHES[i].path.duration * Math.min(1, Math.max(0, (f - at) / LAUNCH_FR));
const SLIDE = {x: 1130, y: 470, w: 640, vMax: 8};
/** The launch-speed slider (coded): track, ticks at the four launch speeds, the knob at v (m/s). */
const Slider: React.FC<{v: number}> = ({v}) => {
	const X = (u: number) => SLIDE.x + (u / SLIDE.vMax) * SLIDE.w;
	return (
		<g>
			<line x1={SLIDE.x} y1={SLIDE.y} x2={SLIDE.x + SLIDE.w} y2={SLIDE.y} stroke={INK_SOFT} strokeWidth={7} strokeLinecap="round" />
			{[0, 2, 4, 6, 8].map(u => <g key={u}><line x1={X(u)} y1={SLIDE.y - 12} x2={X(u)} y2={SLIDE.y + 12} stroke={INK} strokeWidth={3} /><T x={X(u)} y={SLIDE.y + 46} size={28} anchor="middle" color={INK_SOFT} weight={700}>{u}</T></g>)}
			<circle cx={X(v / 1000)} cy={SLIDE.y} r={17} fill={TEAL.stroke} stroke={CARD} strokeWidth={4} />
			<T x={SLIDE.x} y={SLIDE.y - 30} size={28} color={INK_SOFT} weight={700}>launch speed (km s⁻¹)</T>
		</g>
	);
};

// ---------- 1. hook: Newton's mountain ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const imagine = cue(id, 'Imagine a launcher'), tall = cue(id, 'so tall'), fire = cue(id, 'Fire a ball'), off = cue(id, 'way off'), faster = cue(id, 'Fire it faster'), round = cue(id, 'further round'), newton = cue(id, 'Newton asked'), what = cue(id, 'what happens if'), think = cue(id, 'Have a think');
	const L = [off - LAUNCH_FR, faster + 8, round + 20];
	const h = holdIf(id);
	if (f < 1) return <V17FinalFrame />;
	const old = prog(f, 1, 30);
	const vK = mono([[0, 0], [fire - 10, 0], [fire + 4, 3000], [faster - 6, 3000], [faster + 6, 5000], [round + 8, 5000], [round + 18, 6500]], 4);
	const v = kf(f, vK);
	const cur = f >= L[2] ? 2 : f >= L[1] ? 1 : f >= L[0] ? 0 : -1;
	const done = [0, 1, 2].filter(i => f >= L[i] + LAUNCH_FR);
	const live = cur >= 0 && f < L[cur] + LAUNCH_FR ? {i: cur, t: flight(f, L[cur], cur)} : undefined;
	const landed = cur >= 0 && f >= L[cur] + LAUNCH_FR;
	const peak: [number, number] = [ST.cx, ST.cy - rPx(ST, R0)];
	return (
		<>
			<FrameSvg>
				<NewtonStage st={ST} mountainAt={imagine} done={done} live={live} />
			</FrameSvg>
			{old < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - old}}><V17FinalFrame /></div> : null}
			<FrameSvg>
				<LauncherZoom x={1290} y={300} r={120} at={imagine + 14} peak={peak} />
				<Slider v={Math.max(0, v)} />
				{LAUNCHES.map((L0, i) => { const [x, y] = toPx(ST, RE * Math.sin(L0.ang), RE * Math.cos(L0.ang)); return <Ring key={i} cx={x} cy={y} rx={22} ry={22} at={newton + i * 6} color={NAVY.stroke} />; })}
			</FrameSvg>
			<Lbl x={peak[0] - 40} y={peak[1] - 20} at={tall} color={GREY.ink} anchor="end" size={30}>not to scale</Lbl>
			<Lbl x={ST.cx - ST.R - 20} y={ST.cy - ST.R + 30} at={tall + 10} color={INK_SOFT} anchor="end" size={28}>air</Lbl>
			<Readouts x={1130} y={540} w={690} size={44} at={fire} rows={[
				{label: 'launch speed', value: `${fx(v / 1000, v % 1000 === 0 ? 0 : 1)} km s⁻¹`, color: TEAL.ink},
				{label: 'lands (round Earth)', value: landed ? `about ${comma(about(LAUNCHES[cur].km))} km` : '…', color: NAVY.ink},
			]} />
			<HandTag x={1500} y={420} text="faster" at={faster + 10} size={30} color={TEAL.ink} />
			<HandTag x={880} y={470} text="further round" at={round} size={30} color={NAVY.ink} />
			<Enter at={what} style={{position: 'absolute', left: 1130, top: 740, width: 690}}>
				<div style={{...DISPLAY(38, INK, 800)}}>Faster and faster: then what?</div>
				<div style={{display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap'}}>
					{['lands even further', 'goes all the way round', 'flies off'].map((t, i) => <div key={i} style={{background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 14px 6px', ...DISPLAY(30, INK, 700), opacity: prog(f, what + 8 + i * 6, 10)}}>{t}</div>)}
				</div>
			</Enter>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1040} y={860} r={50} ringFrom={think} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. falling around, not into ----------
// The inset: 62 px per km along, 26 px per m down (heights exaggerated), a surface-level launch at sqrt(GM/R).
const IN = {ox: 250, oy: 300, km: 62, m: 26};
const CARD_IN = {x: 96, y: 180, w: 1330, h: 730};
const inPx = (xm: number, ym: number): [number, number] => [IN.ox + (xm / 1000) * IN.km, IN.oy + ym * IN.m];
const ballAt = (t: number) => inPx(FALL.vSurf * t, 4.9 * t * t);
const surfY = (xm: number) => (xm * xm) / (2 * 6.371e6);
const TONE_BLUE = '#1f6fb2';
export const S02: React.FC = () => {
	const id = 'falling-around';
	const f = useCurrentFrame();
	const first = cue(id, 'In its first'), falls49 = cue(id, 'four point nine'), curves = cue(id, 'curves away'), straight = cue(id, 'straight line'), five = cue(id, 'about five metres'), travel = cue(id, 'you travel'), eightK = cue(id, 'eight kilometres per'), byThen = cue(id, 'By then'), next = cue(id, 'next second'), same = cue(id, 'same thing happens'), missing = cue(id, 'keeps missing'), orbit = cue(id, 'an orbit'), around = cue(id, 'falling around');
	const inset = prog(f, 4, 24) * (1 - prog(f, missing, 16));
	const t = kf(f, mono([[first, 0], [falls49, 1], [next + 10, 1], [same, 2]], 6), false);
	const [bx, by] = ballAt(t);
	const turn = (f >= byThen ? 1 : 0) * prog(f, byThen, 14);
	const vy = turn * 9.8 * Math.min(t, 1) + (t > 1 ? 9.8 * (t - 1) : 0);
	const vang = Math.atan2(vy * IN.m, (FALL.vSurf / 1000) * IN.km);
	const curve = Array.from({length: 61}, (_, i) => { const xm = -1500 + (i * 19500) / 60; return inPx(xm, surfY(xm)); }).map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
	const B1 = ballAt(1), B2 = ballAt(2);
	const s1 = (9.8 * IN.m) / ((FALL.vSurf / 1000) * IN.km);
	const xb = inPx(8000, 0)[0], xb2 = inPx(16000, 0)[0];
	const tan2 = (x: number) => B1[1] + (x - B1[0]) * s1;
	const circleT = CIRCLE0.duration * Math.min(1, Math.max(0, (f - missing - 12) / 70));
	const pz = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - travel) / 30)));
	const right = CARD_IN.x + CARD_IN.w;
	return (
		<>
			<SceneHeading text={HEAD} at={orbit} size={HEAD_SIZE} />
			<div style={{position: 'absolute', inset: 0, transform: `scale(${lerp(1, 0.3, inset)})`, transformOrigin: '1910px 980px'}}>
				<FrameSvg><NewtonStage st={ST} done={[0, 1, 2]} circleT={circleT} /></FrameSvg>
			</div>
			{inset > 0.01 ? <div style={{position: 'absolute', inset: 0, opacity: inset}}>
				<FrameSvg>
					<defs><clipPath id="v18inset"><rect x={CARD_IN.x} y={CARD_IN.y} width={CARD_IN.w} height={CARD_IN.h} rx={20} /></clipPath></defs>
					<rect x={CARD_IN.x} y={CARD_IN.y} width={CARD_IN.w} height={CARD_IN.h} rx={20} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
					<g clipPath="url(#v18inset)">
						<path d={`${curve} L${right + 40},${CARD_IN.y + CARD_IN.h + 40} L${CARD_IN.x - 40},${CARD_IN.y + CARD_IN.h + 40} Z`} fill="#dccaa6" />
						<path d={curve} fill="none" stroke={INK} strokeWidth={5} />
						<line x1={IN.ox - 120} y1={IN.oy} x2={xb + 150} y2={IN.oy} stroke={INK} strokeWidth={3} strokeDasharray="14 9" opacity={prog(f, straight, 14)} />
						{f >= next ? <line x1={B1[0]} y1={B1[1]} x2={xb2 + 120} y2={tan2(xb2 + 120)} stroke={INK} strokeWidth={3} strokeDasharray="14 9" opacity={prog(f, next, 14)} /> : null}
						{t > 0 ? <path d={Array.from({length: 40}, (_, i) => ballAt((t * i) / 39)).map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${(y - 11).toFixed(1)}`).join(' ')} fill="none" stroke={TEAL.stroke} strokeWidth={5} /> : null}
					</g>
					<VecArrow x={bx} y={by - 12} dx={Math.cos(vang) * 120} dy={Math.sin(vang) * 120} color={TEAL.stroke} width={6} head={18} at={first} />
					<circle cx={bx} cy={by - 12} r={12} fill={INK} stroke={CARD} strokeWidth={2.5} />
					<Bracket x1={xb - 14} y1={IN.oy} x2={xb - 14} y2={B1[1]} color={TONE_BLUE} at={falls49} />
					<Bracket x1={xb + 14} y1={IN.oy} x2={xb + 14} y2={inPx(8000, surfY(8000))[1]} color={GREY.ink} at={five} />
					{f >= same ? <g>
						<Bracket x1={xb2 - 14} y1={tan2(xb2 - 14)} x2={xb2 - 14} y2={B2[1]} color={TONE_BLUE} at={same} />
						<Bracket x1={xb2 + 14} y1={tan2(xb2 + 14)} x2={xb2 + 14} y2={inPx(16000, surfY(16000))[1]} color={GREY.ink} at={same + 8} />
					</g> : null}
					<Ring cx={xb} cy={(IN.oy + B1[1]) / 2} rx={40} ry={86} at={travel + 6} color={NAVY.stroke} />
				</FrameSvg>
				<Lbl x={xb + 50} y={IN.oy + 36} at={five} color={GREY.ink} size={44 + 4 * pz}>surface drops {fx(FALL.drop, 1)} m</Lbl>
				<Lbl x={xb + 50} y={IN.oy + 100} at={falls49} color={TONE_BLUE} size={44 + 4 * pz}>ball falls {fx(FALL.y1, 1)} m</Lbl>
				<Lbl x={xb + 52} y={IN.oy + 146} at={falls49} color={TONE_BLUE} size={30}>in its first second</Lbl>
				<Lbl x={IN.ox - 120} y={IN.oy - 90} at={first} color={INK} size={32}>launch: about 8 km s⁻¹ sideways</Lbl>
				<Lbl x={(IN.ox + xb) / 2} y={IN.oy - 30} at={straight} color={INK_SOFT} anchor="middle" size={28}>straight line: 8 km in 1 s</Lbl>
				<Lbl x={xb2 - 40} y={(tan2(xb2) + B2[1]) / 2 + 10} at={same} color={TONE_BLUE} anchor="end" size={32}>{fx(FALL.y1, 1)} m</Lbl>
				<Lbl x={xb2 + 40} y={(tan2(xb2) + inPx(16000, surfY(16000))[1]) / 2 + 10} at={same + 8} color={GREY.ink} size={32}>{fx(FALL.drop, 1)} m</Lbl>
				<HandTag x={IN.ox + 60} y={IN.oy + 300} text="the ground curves away" at={curves} size={30} color={GREY.ink} />
				<Lbl x={right - 20} y={CARD_IN.y + CARD_IN.h - 24} at={first} color={GREY.ink} anchor="end" size={28}>heights exaggerated; no air</Lbl>
				<Chip x={1460} y={300} at={eightK} size={32} w={364} border={TEAL.stroke} color={TEAL.ink}>8 km in 1 s = 8 km s⁻¹</Chip>
				<Enter at={same + 16} style={{position: 'absolute', left: 1460, top: 420, width: 364}}><div style={{...DISPLAY(32, INK, 700), whiteSpace: 'normal'}}>each second: measured from a new straight line</div></Enter>
			</div> : null}
			<Readouts x={1130} y={540} w={640} size={48} at={missing} rows={[
				{label: 'launch speed', value: `${fx(V_CIRC0 / 1000, 2)} km s⁻¹`, color: TEAL.ink},
				{label: 'lands', value: 'never (a circle)', color: NAVY.ink},
			]} />
			<Chip x={1130} y={760} at={around} size={36} w={640} border={TEAL.stroke} color={TEAL.ink}>orbit: falling around, not into</Chip>
		</>
	);
};

// ---------- 3. gravity is the inward resultant ----------
const LAP = 720;
const satAt = (st: Stage, r: number, th: number) => ({x: st.cx + rPx(st, r) * Math.sin(th), y: st.cy - rPx(st, r) * Math.cos(th), t: [Math.cos(th), Math.sin(th)] as [number, number], i: [-Math.sin(th), Math.cos(th)] as [number, number]});
const OrbitSat: React.FC<{st: Stage; th: number; vLen?: number; fLen?: number; w?: number; fLabel?: React.ReactNode; vLabel?: boolean; ring?: number}> = ({st, th, vLen = 130, fLen = 110, w = 44, vLabel = true}) => {
	const s = satAt(st, R0, th);
	return (
		<g>
			<VecArrow x={s.x + s.t[0] * 26} y={s.y + s.t[1] * 26} dx={s.t[0] * vLen} dy={s.t[1] * vLen} color={TEAL.stroke} width={7} head={20} />
			<VecArrow x={s.x + s.i[0] * 18} y={s.y + s.i[1] * 18} dx={s.i[0] * fLen} dy={s.i[1] * fLen} color={AMBER.stroke} width={7} head={20} />
			<RightAngle x={s.x} y={s.y} a={s.t} b={s.i} s={22} />
			<Satellite cx={s.x} cy={s.y} w={w} rotate={(th * 180) / Math.PI} />
			{vLabel ? <T x={s.x + s.t[0] * (vLen + 50)} y={s.y + s.t[1] * (vLen + 50) + 12} size={36} color={TEAL.ink} anchor="middle">v</T> : null}
		</g>
	);
};
export const S03: React.FC = () => {
	const id = 'gravity-role';
	const f = useCurrentFrame();
	const only = cue(id, 'only force'), right = cue(id, 'right angles'), speed = cue(id, 'not its speed'), resultant = cue(id, 'inward resultant'), centri = cue(id, 'Centripetal force'), doing = cue(id, 'is doing'), engines = cue(id, "So a satellite"), need = cue(id, 'need its engines');
	const th = (2 * Math.PI * f) / LAP;
	const s = satAt(ST, R0, th);
	const snaps = [0.9, 2.6, 4.3];
	const ringO = prog(f, right, 10) * (1 - prog(f, right + 60, 10));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NewtonStage st={ST} mountainOut={0} done={[]} circleT={CIRCLE0.duration} marks={false} />
				{f >= speed ? snaps.map((a, i) => { const q = satAt(ST, R0, a); return <g key={i} opacity={prog(f, speed + i * 6, 10)}><VecArrow x={q.x} y={q.y} dx={q.t[0] * 130} dy={q.t[1] * 130} color={TEAL.stroke} width={4} head={16} /><circle cx={q.x} cy={q.y} r={6} fill={TEAL.stroke} /></g>; }) : null}
				<OrbitSat st={ST} th={th} />
				{ringO > 0 ? <ellipse cx={s.x + (s.t[0] + s.i[0]) * 14} cy={s.y + (s.t[1] + s.i[1]) * 14} rx={40} ry={40} fill="none" stroke={AMBER.stroke} strokeWidth={4.5} opacity={ringO} /> : null}
			</FrameSvg>
			<Lbl x={s.x + s.i[0] * 150} y={s.y + s.i[1] * 150} at={only} color={AMBER.ink} anchor="middle" size={32}>{f >= centri ? 'gravity: the centripetal force' : 'F = GMm/r²'}</Lbl>
			<HandTag x={ST.cx} y={ST.cy + rPx(ST, R0) + 50} text="same length, new direction" at={speed + 20} size={30} color={TEAL.ink} anchor="middle" />
			<div style={{position: 'absolute', left: 1080, top: 186, display: 'flex', flexDirection: 'column', gap: 10, width: 744}}>
				<Row at={only} size={38}><span style={{color: AMBER.ink}}>only force: gravity, towards the centre</span></Row>
				<Row at={right} size={38}>circular orbit: <span style={{color: AMBER.ink}}>F</span> at 90° to <span style={{color: TEAL.ink}}>v</span></Row>
				<Row at={speed} size={36}>turns v; speed the same; no work</Row>
				<Row at={resultant} size={40}>gravity = the inward resultant force</Row>
			</div>
			<Chip x={1080} y={470} at={centri} size={34} w={744} border={AMBER.stroke} color={AMBER.ink}>"centripetal force" is the job gravity is doing</Chip>
			<Enter at={doing} style={{position: 'absolute', left: 1080, top: 560, width: 744}}>
				<div style={{...card}}>
					<div style={{...DISPLAY(28, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>Model</div>
					<div style={{...DISPLAY(30, INK, 700), whiteSpace: 'normal', lineHeight: 1.3}}>circular orbit; spherical Earth; m much smaller than M; no thrust; no air drag; r from the centre</div>
				</div>
			</Enter>
			<CrossedChip x={1080} y={790} at={engines} crossAt={need + 6} size={32}>engines needed to stay up</CrossedChip>
		</>
	);
};

// ---------- 4. the orbital speed ----------
const ST4: Stage = {cx: 380, cy: 610, R: 230};
export const S04: React.FC = () => {
	const id = 'orbital-speed';
	const f = useCurrentFrame();
	const needed = cue(id, 'inward force needed'), supplies = cue(id, 'Gravity supplies'), equal = cue(id, "they're equal"), cancels = cue(id, 'it cancels'), multiply = cue(id, 'Multiply both'), soV = cue(id, 'So v equals'), rLast = cue(id, 'over r', 4);
	const p = prog(f, 0, 30);
	const st: Stage = {cx: lerp(ST.cx, ST4.cx, p), cy: lerp(ST.cy, ST4.cy, p), R: lerp(ST.R, ST4.R, p)};
	const th = (2 * Math.PI * (f + 882)) / LAP;
	const sc = lerp(1, 0.75, p);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<NewtonStage st={st} done={[]} circleT={CIRCLE0.duration} marks={false} />
				<OrbitSat st={st} th={th} vLen={130 * sc} fLen={110 * sc} w={44 * sc} />
			</FrameSvg>
			<div style={{position: 'absolute', left: 820, top: 190, display: 'flex', flexDirection: 'column', gap: 16}}>
				<Row at={needed} ageAt={equal} size={56} oldSize={42}>needed: F = m<span style={{color: TEAL.ink}}>v</span>²/r</Row>
				<Row at={supplies} ageAt={equal} size={56} oldSize={42}><span style={{color: AMBER.ink}}>supplied: F = GMm/r²</span></Row>
				<Row at={equal} ageAt={multiply} size={56} oldSize={46}>GM<Strike on={cancels}>m</Strike>/r² = <Strike on={cancels + 6}>m</Strike><span style={{color: TEAL.ink}}>v</span>²/r</Row>
				<Row at={multiply} ageAt={soV} size={56} oldSize={46}>GM/r = <span style={{color: TEAL.ink}}>v</span>² &nbsp;<span style={{...DISPLAY(32, INK_SOFT, 700)}}>(× r)</span></Row>
				<Row at={soV} size={76}><AnswerBox at={soV + 20}><span><span style={{color: TEAL.ink}}>v</span> = √(GM/<MarkSpan kind="circle" at={rLast} color={NAVY.stroke}><span style={{color: NAVY.ink}}>r</span></MarkSpan>)</span></AnswerBox></Row>
				<Row at={soV + 30} size={36}>depends only on M and r</Row>
			</div>
			<HandTag x={1420} y={364} text="gravity = the force needed" at={equal + 10} size={30} color={AMBER.ink} />
			<HandTag x={1420} y={444} text="m cancels" at={cancels + 10} size={30} color={INK} />
			<HandTag x={1260} y={760} text="r from Earth's centre" at={rLast + 8} size={30} color={NAVY.ink} />
		</>
	);
};
const Strike: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => {
	const p = prog(useCurrentFrame(), on, 12);
	return <span style={{position: 'relative'}}>{children}{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,80 L100,20" stroke={INK} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - p * 100}% -50% 0)`}} /></svg> : null}</span>;
};
export {Strike, NewtonStage, OrbitSat, satAt, LAP};
