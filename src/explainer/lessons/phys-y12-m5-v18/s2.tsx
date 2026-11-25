// Scenes 5 to 10: free fall (the painted station on its arc, the schematic module with the spanner, equal
// accelerations), the worked speed at 400 km, higher means slower (the orbit-radius slider), one lap (the
// 400 km run's own lap and the period algebra), the worked period, and one constant (the far pull back to the
// Moon at true distance, the r^3/T^2 table).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, ClockFace, CrossedChip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {stateAt} from '../../sims/field-motion';
import {FOUR, GM, HEAD, HEAD_SIZE, ISS, ISS_RUN, K, MOON, RE, cue, gAt, mono, vOrb} from './common';
import {DashCircle, Earth, GREY, Lbl, Moon, NAVY, Ring, RunTrail, Satellite, Spanner, Station, TEAL, VIOLET, VecArrow, fx, polar, rPx, sci, toPx} from './parts';
import type {Stage} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
const Strip: React.FC<{x: number; y: number; at: number; w?: number; children: React.ReactNode; size?: number; border?: string; color?: string; bg?: string}> = ({x, y, at, w, children, size = 34, border = 'rgba(60,45,20,0.16)', color = INK, bg = CARD}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: '6px 20px 8px', ...DISPLAY(size, color, 800), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
const Givens: React.FC<{x: number; y: number; w: number; at: number; lines: React.ReactNode[]}> = ({x, y, w, at, lines}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px'}}>
			{lines.map((t, i) => <div key={i} style={{...DISPLAY(36, NAVY.ink, 800)}}>{t}</div>)}
		</div>
	</Enter>
);
/** A satellite at radius r (m) and screen angle a (deg, clockwise from 3 o'clock) on a stage, wings along the clockwise tangent. */
const satPos = (st: Stage, r: number, a: number) => {
	const [x, y] = polar(st.cx, st.cy, rPx(st, r), a);
	const rad = (a * Math.PI) / 180;
	return {x, y, t: [-Math.sin(rad), Math.cos(rad)] as [number, number], i: [-Math.cos(rad), -Math.sin(rad)] as [number, number], rot: a + 90};
};

// ---------- 5. same speed for everything: free fall ----------
const E5 = {cx: 520, cy: 1380, d: 1500};
const PANEL = {x: 1000, y: 190, w: 800, h: 480};
export const S05: React.FC = () => {
	const id = 'free-fall';
	const f = useCurrentFrame();
	const because = cue(id, 'Because m cancelled'), spanner = cue(id, 'a spanner'), sameSpeed = cue(id, 'same speed'), accel = cue(id, 'same acceleration'), float = cue(id, 'objects float'), together = cue(id, 'fall together'), floor = cue(id, 'the floor'), arent = cue(id, "aren't free");
	const R = E5.d / 2, rArc = R + 110;
	const a = lerp(-112, -82, f / 733);
	const [sx, sy] = polar(E5.cx, E5.cy, rArc, a);
	const z = prog(f, spanner, 24);
	const bob = 5 * Math.sin(f / 22);
	const sc = {x: PANEL.x + PANEL.w / 2, y: PANEL.y + PANEL.h / 2};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={E5.cx} cy={E5.cy} r={R + 5} fill="none" stroke="#bcd6e6" strokeWidth={8} />
				<Earth cx={E5.cx} cy={E5.cy} d={E5.d} />
				<circle cx={E5.cx} cy={E5.cy} r={rArc} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="12 9" />
				<Station cx={sx} cy={sy} w={420} rotate={a + 90} />
				<VecArrow x={sx} y={sy + 30} dx={(E5.cx - sx) / rArc * 90} dy={(E5.cy - sy) / rArc * 90} color={VIOLET.stroke} width={7} head={20} at={accel} />
				{z > 0.01 ? <g opacity={z}>
					<line x1={sx} y1={sy} x2={PANEL.x} y2={PANEL.y + PANEL.h} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
					<line x1={sx} y1={sy} x2={PANEL.x} y2={PANEL.y} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
					<g transform={`translate(${lerp(sx, sc.x, z)},${lerp(sy, sc.y, z)}) scale(${lerp(0.15, 1, z)}) translate(${-sc.x},${-sc.y})`}>
						<rect x={PANEL.x} y={PANEL.y} width={PANEL.w} height={PANEL.h} rx={26} fill="#f6f2ea" stroke={GREY.ink} strokeWidth={10} />
						<line x1={PANEL.x + 10} y1={PANEL.y + PANEL.h - 70} x2={PANEL.x + PANEL.w - 10} y2={PANEL.y + PANEL.h - 70} stroke={GREY.ink} strokeWidth={6} />
						<Spanner cx={sc.x} cy={sc.y - 40 + bob} w={260} rotate={-8 + 3 * Math.sin(f / 30)} />
						<VecArrow x={sc.x} y={sc.y - 4 + bob} dx={0} dy={110} color={VIOLET.stroke} width={8} head={22} at={accel} />
						<VecArrow x={PANEL.x + 90} y={PANEL.y + 120} dx={0} dy={110} color={VIOLET.stroke} width={8} head={22} at={accel} />
						{f >= floor ? <g opacity={prog(f, floor, 12)}>
							<path d={`M${sc.x + 160},${PANEL.y + PANEL.h - 76} l0,-90 l-16,0 l22,-30 l22,30 l-16,0 l0,90 Z`} fill="none" stroke={GREY.ink} strokeWidth={4} />
							<g stroke={INK} strokeWidth={6} strokeLinecap="round" opacity={prog(f, floor + 16, 8)}><line x1={sc.x + 140} y1={PANEL.y + PANEL.h - 190} x2={sc.x + 196} y2={PANEL.y + PANEL.h - 100} /><line x1={sc.x + 196} y1={PANEL.y + PANEL.h - 190} x2={sc.x + 140} y2={PANEL.y + PANEL.h - 100} /></g>
						</g> : null}
					</g>
				</g> : null}
				<Ring cx={PANEL.x + PANEL.w - 130} cy={PANEL.y + PANEL.h + 108} rx={130} ry={64} at={accel + 40} color={VIOLET.stroke} />
			</FrameSvg>
			<Lbl x={PANEL.x + 24} y={PANEL.y + 40} at={spanner + 20} color={GREY.ink} size={28}>inside one module (schematic)</Lbl>
			<Lbl x={PANEL.x + 110} y={PANEL.y + 260} at={accel + 4} color={VIOLET.ink} size={30}>module</Lbl>
			<Lbl x={sc.x + 24} y={sc.y + 96} at={accel + 4} color={VIOLET.ink} size={30}>spanner</Lbl>
			<Lbl x={sc.x + 220} y={PANEL.y + PANEL.h - 220} at={floor + 4} color={GREY.ink} size={28}>normal force?</Lbl>
			<HandTag x={sc.x + 120} y={PANEL.y + PANEL.h - 30} text="no push from the floor" at={floor + 20} size={30} color={GREY.ink} />
			<Readouts x={PANEL.x} y={PANEL.y + PANEL.h + 30} w={PANEL.w} size={44} at={accel} rows={[
				{label: 'module: a = g', value: `${fx(ISS.g, 2)} m s⁻²`, color: VIOLET.ink},
				{label: 'spanner: a = g', value: `${fx(ISS.g, 2)} m s⁻²`, color: VIOLET.ink},
			]} />
			<HandTag x={PANEL.x + PANEL.w - 20} y={PANEL.y + PANEL.h + 230} text="same a" at={accel + 30} size={30} color={VIOLET.ink} anchor="end" />
			<div style={{position: 'absolute', left: 96, top: 186, display: 'flex', flexDirection: 'column', gap: 8, width: 860}}>
				<Row at={because} size={44}><span style={{color: TEAL.ink}}>v = √(GM/r)</span>: no m in it</Row>
				<Row at={sameSpeed} size={34}>station and spanner, same r: same v</Row>
				<Row at={together} size={34}>they fall together</Row>
			</div>
			<HandTag x={sx - 230} y={sy - 70} text="falls with it" at={together + 10} size={30} color={GREY.ink} anchor="end" />
			<CrossedChip x={96} y={336} at={arent - 10} crossAt={arent + 10} size={32}>zero gravity</CrossedChip>
			<Chip x={96} y={410} at={arent + 14} size={32} border={VIOLET.stroke} color={VIOLET.ink}>apparent weightlessness: free fall together</Chip>
			<Lbl x={96} y={600} at={float} color={INK_SOFT} size={28}>station not to scale</Lbl>
		</>
	);
};

// ---------- 6. worked example: speed at 400 km ----------
const ST6: Stage = {cx: 310, cy: 660, R: 200};
const ST6B: Stage = {cx: 350, cy: 680, R: 250};
export const S06: React.FC = () => {
	const id = 'worked-speed';
	const f = useCurrentFrame();
	const first = cue(id, 'First, r'), metres = cue(id, 'six metres'), then = cue(id, 'Then v'), fourteen = cue(id, 'the fourteen'), about = cue(id, "That's about"), second = cue(id, 'per second'), nearly = cue(id, 'nearly seven');
	const s = satPos(ST6B, ISS.r, -50);
	const gl = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - metres) / 30)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={ST6B.cx} cy={ST6B.cy} d={2 * ST6B.R} />
				<DashCircle cx={ST6B.cx} cy={ST6B.cy} r={rPx(ST6B, ISS.r)} color={TEAL.stroke} width={2.5} />
				<line x1={ST6B.cx} y1={ST6B.cy} x2={s.x} y2={s.y} stroke={NAVY.stroke} strokeWidth={4 + 5 * gl} />
				<circle cx={ST6B.cx} cy={ST6B.cy} r={6} fill={NAVY.stroke} />
				<Satellite cx={s.x} cy={s.y} w={44} rotate={s.rot} />
				<VecArrow x={s.x + s.t[0] * 24} y={s.y + s.t[1] * 24} dx={s.t[0] * 130} dy={s.t[1] * 130} color={TEAL.stroke} width={7} head={20} at={second} />
			</FrameSvg>
			<Lbl x={s.x - 30} y={s.y - 34} at={second + 6} color={TEAL.ink} anchor="end" size={32}>{fx(ISS.v / 1000, 2)} km s⁻¹</Lbl>
			<HandTag x={ST6B.cx - 40} y={ST6B.cy + 40} text="r = R + h" at={first} size={30} color={NAVY.ink} anchor="end" />
			<HandTag x={96} y={900} text="about 7.7 km every second" at={nearly} size={30} color={TEAL.ink} />
			<Strip x={96} y={176} at={-30} size={34}>Find the orbital speed at 400 km altitude.</Strip>
			<Strip x={1060} y={176} at={-30} size={40} border={TEAL.stroke} color={TEAL.ink}>v = √(GM/r)</Strip>
			<Givens x={660} y={250} w={900} at={-20} lines={['G = 6.67 × 10⁻¹¹ N m² kg⁻²', 'M = 6.0 × 10²⁴ kg (Earth)', `R = ${sci(RE, 3)} m`, `h = ${sci(ISS.h)} m`]} />
			<div style={{position: 'absolute', left: 660, top: 450, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={10} ageAt={first} size={44} oldSize={30}>Plan: r = R + h first, then v = √(GM/r)</Row>
				<Row at={first} size={56}><span style={{color: NAVY.ink}}>r = R + h = <MarkSpan kind="circle" at={metres + 20} color={NAVY.stroke}>{sci(ISS.r, 3)} m</MarkSpan></span></Row>
				<Row at={then} size={48}>GM = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ = {sci(GM, 3)}</Row>
				<Row at={fourteen} size={48}>v = √({sci(GM, 3)} / {sci(ISS.r, 3)}) = √({sci(ISS.gmr, 3)})</Row>
				<Row at={about} size={60}>&nbsp;&nbsp;= <AnswerBox at={second}><span>{sci(ISS.v)} m s⁻¹</span></AnswerBox></Row>
			</div>
			<CrossedChip x={1180} y={800} at={nearly} crossAt={nearly + 20} size={30} caption="take the square root">v = GM/r = {sci(ISS.gmr)} m s⁻¹</CrossedChip>
		</>
	);
};

// ---------- 7. higher means slower ----------
const ST7: Stage = {cx: 540, cy: 590, R: 60};
const VK = 22, GK = 13;
export const S07: React.FC = () => {
	const id = 'higher-slower';
	const f = useCurrentFrame();
	const higher = cue(id, 'A higher orbit'), weaker = cue(id, 'weaker pull'), match = cue(id, 'match it'), halves = cue(id, 'speed halves'), slowest = cue(id, 'slowest'), moonC = cue(id, 'The Moon');
	const u = kf(f, mono([[higher, 0], [match, 1]], 10));
	const r = ISS.r * (1 + 3 * u);
	const v = vOrb(r), g = gAt(r);
	const s = satPos(ST7, r, -45);
	const both = f >= halves;
	const inn = satPos(ST7, ISS.r, -140);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={ST7.cx} cy={ST7.cy} d={2 * ST7.R} />
				<circle cx={ST7.cx} cy={ST7.cy} r={rPx(ST7, r)} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="12 9" />
				{both ? <g opacity={prog(f, halves, 12)}>
					<circle cx={ST7.cx} cy={ST7.cy} r={rPx(ST7, ISS.r)} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="10 8" />
					<VecArrow x={inn.x} y={inn.y} dx={inn.t[0] * ISS.v / 1000 * VK} dy={inn.t[1] * ISS.v / 1000 * VK} color={TEAL.stroke} width={7} head={20} />
					<VecArrow x={inn.x} y={inn.y} dx={inn.i[0] * ISS.g * GK * 0.5} dy={inn.i[1] * ISS.g * GK * 0.5} color={VIOLET.stroke} width={6} head={16} />
					<Satellite cx={inn.x} cy={inn.y} w={40} rotate={inn.rot} />
				</g> : null}
				<line x1={ST7.cx} y1={ST7.cy} x2={s.x} y2={s.y} stroke={NAVY.stroke} strokeWidth={3.5} />
				<VecArrow x={s.x} y={s.y} dx={s.t[0] * (v / 1000) * VK} dy={s.t[1] * (v / 1000) * VK} color={TEAL.stroke} width={7} head={20} />
				<VecArrow x={s.x} y={s.y} dx={s.i[0] * Math.max(6, g * GK)} dy={s.i[1] * Math.max(6, g * GK)} color={VIOLET.stroke} width={6} head={Math.min(16, Math.max(8, g * GK * 0.5))} />
				<Satellite cx={s.x} cy={s.y} w={40} rotate={s.rot} />
			</FrameSvg>
			<Readouts x={1100} y={178} w={720} size={48} at={-30} title="orbit-radius slider" rows={[
				{label: 'r', value: `${sci(r, 3)} m`, color: NAVY.ink},
				{label: 'v = √(GM/r)', value: `${fx(v / 1000, 2)} km s⁻¹`, color: TEAL.ink},
				{label: 'g = GM/r²', value: `${fx(g, g < 1 ? 3 : 2)} N kg⁻¹`, color: VIOLET.ink},
			]} />
			<Lbl x={s.x - 24} y={s.y - 40} at={match} color={VIOLET.ink} anchor="end" size={30}>g ÷ 16</Lbl>
			<HandTag x={s.x - 24} y={s.y - 92} anchor="end" text="weaker pull" at={weaker} size={30} color={VIOLET.ink} />
			<Lbl x={inn.x + inn.t[0] * 180 - 10} y={inn.y + inn.t[1] * 180 - 24} at={halves} color={TEAL.ink} anchor="end" size={32}>{fx(ISS.v / 1000, 2)} km s⁻¹</Lbl>
			<Lbl x={s.x + s.t[0] * 100 + 16} y={s.y + s.t[1] * 100 + 20} at={halves} color={TEAL.ink} size={32}><MarkSpan kind="circle" at={halves + 30} color={TEAL.stroke}>{fx(FOUR.v / 1000, 2)} km s⁻¹</MarkSpan></Lbl>
			<Row at={halves + 10} size={44} style={{position: 'absolute', left: 1100, top: 520}}><AnswerBox at={halves + 20}><span>4r → v ÷ 2 &nbsp;(v ∝ 1/√r)</span></AnswerBox></Row>
			<HandTag x={1100} y={640} text="higher = slower" at={slowest} size={TYPE.handSmall} color={TEAL.ink} />
			<Enter at={moonC} style={{position: 'absolute', left: 1100, top: 690, width: 720}}>
				<div style={{...card, display: 'flex', alignItems: 'center', gap: 22}}>
					<svg width={90} height={90}><Moon cx={45} cy={45} d={84} /></svg>
					<div>
						<div style={{...DISPLAY(36, TEAL.ink, 800)}}>Moon: {fx(MOON.v / 1000, 2)} km s⁻¹</div>
						<div style={{...DISPLAY(30, NAVY.ink, 700)}}>r = {sci(MOON.r, 3)} m (way out)</div>
					</div>
				</div>
			</Enter>
		</>
	);
};

// ---------- 8. one lap: the period ----------
const ST8: Stage = {cx: 520, cy: 590, R: 280};
const LAP8 = 150;
export const S08: React.FC = () => {
	const id = 'period';
	const f = useCurrentFrame();
	const how = cue(id, 'How long'), circ = cue(id, 'one circumference'), Tc = cue(id, 'over T'), put = cue(id, 'Put that'), rearr = cue(id, 'rearranging'), sq = cue(id, 'pi squared'), kepler = cue(id, "That's the circular-orbit");
	const t0 = how + 14;
	const tt = Math.max(0, Math.min(1, (f - t0) / LAP8)) * ISS_RUN.duration;
	const st = stateAt(ISS_RUN, tt);
	const [sx, sy] = toPx(ST8, st.x, st.y);
	const sp = Math.hypot(st.vx, st.vy) || 1;
	const ux = st.vx / sp, uy = -st.vy / sp;
	const rot = (Math.atan2(uy, ux) * 180) / Math.PI;
	const laps = tt >= ISS_RUN.duration * 0.999 ? 1 : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={ST8.cx} cy={ST8.cy} d={2 * ST8.R} />
				<circle cx={ST8.cx} cy={ST8.cy} r={rPx(ST8, ISS.r)} fill="none" stroke={TEAL.stroke} strokeWidth={2} strokeDasharray="8 8" />
				<RunTrail st={ST8} path={ISS_RUN} t={tt} width={6} />
				<line x1={ST8.cx} y1={ST8.cy} x2={sx} y2={sy} stroke={NAVY.stroke} strokeWidth={3.5} />
				<circle cx={ST8.cx} cy={ST8.cy} r={6} fill={NAVY.stroke} />
				<VecArrow x={sx + ux * 22} y={sy + uy * 22} dx={ux * 110} dy={uy * 110} color={TEAL.stroke} width={6} head={18} />
				<Satellite cx={sx} cy={sy} w={44} rotate={rot} />
				<ClockFace cx={ST8.cx} cy={ST8.cy + ST8.R + 70} r={30} t={tt} turn={ISS_RUN.duration} />
			</FrameSvg>
			<Lbl x={ST8.cx + 50} y={ST8.cy + ST8.R + 80} at={how} color={INK} size={32}>laps: {laps}</Lbl>
			<Lbl x={ST8.cx - 50} y={ST8.cy + ST8.R + 80} at={circ} color={GREY.ink} anchor="end" size={30}>one lap takes one period, T</Lbl>
			<Lbl x={ST8.cx - rPx(ST8, ISS.r) - 20} y={ST8.cy - 200} at={Tc - 10} color={NAVY.ink} anchor="end" size={32}>2πr</Lbl>
			<HandTag x={ST8.cx + 200} y={ST8.cy - rPx(ST8, ISS.r) - 20} text="one lap = 2πr" at={circ + 10} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 1080, top: 186, display: 'flex', flexDirection: 'column', gap: 12, width: 744}}>
				<Row at={Tc - 20} ageAt={put} size={52} oldSize={40}><span style={{color: TEAL.ink}}>v</span> = 2πr / T</Row>
				<Row at={put} ageAt={rearr} size={48} oldSize={38}>GM/r² = <span style={{color: TEAL.ink}}>v</span>²/r = (2πr/T)²/r</Row>
				<Row at={rearr} ageAt={sq} size={48} oldSize={38}>GM/r² = 4π²r/T²</Row>
				<Row at={sq - 10} size={60}><AnswerBox at={sq + 10}><span><MarkSpan kind="circle" at={sq + 24} color={NAVY.stroke}>r³</MarkSpan>/T² = GM/4π²</span></AnswerBox></Row>
				<Row at={kepler} size={32}>circular orbits: Kepler's third law</Row>
			</div>
		</>
	);
};

// ---------- 9. worked example: the period at 400 km ----------
export const S09: React.FC = () => {
	const id = 'worked-period';
	const f = useCurrentFrame();
	const tIs = cue(id, 'T is two'), times = cue(id, 'two pi times'), seconds = cue(id, 'thirty seconds'), minutes = cue(id, 'ninety-two minutes'), laps = cue(id, 'sixteen laps'), day = cue(id, 'a day'), nasa = cue(id, 'NASA quotes');
	const tt = ((f % 300) / 300) * ISS_RUN.duration;
	const st = stateAt(ISS_RUN, tt);
	const [sx, sy] = toPx(ST6, st.x, st.y);
	const rot = (Math.atan2(-st.vy, st.vx) * 180) / Math.PI;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={ST6.cx} cy={ST6.cy} d={2 * ST6.R} />
				<circle cx={ST6.cx} cy={ST6.cy} r={rPx(ST6, ISS.r)} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<Satellite cx={sx} cy={sy} w={40} rotate={rot} />
			</FrameSvg>
			<Lbl x={ST6.cx} y={ST6.cy + ST6.R + 60} at={-30} color={INK_SOFT} anchor="middle" size={28}>time-lapse lap</Lbl>
			<Strip x={96} y={176} at={-30} size={34}>Find the period at 400 km.</Strip>
			<Strip x={680} y={176} at={-30} size={32} border={NAVY.stroke} color={NAVY.ink} bg={NAVY.soft}>r = {sci(ISS.r, 3)} m &nbsp;|&nbsp; v = {sci(ISS.v, 3)} m s⁻¹</Strip>
			<HandTag x={1560} y={300} text="kept from the speed" at={6} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 520, top: 330, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={tIs} ageAt={seconds} size={52} oldSize={40}>T = 2πr / v</Row>
				<Row at={times} ageAt={seconds} size={48} oldSize={40}>&nbsp;&nbsp;= 2π × {sci(ISS.r, 3)} / {sci(ISS.v, 3)}</Row>
				<Row at={seconds - 10} size={52}>&nbsp;&nbsp;= {sci(ISS.T)} s</Row>
				<Row at={minutes - 10} size={52}>&nbsp;&nbsp;÷ 60 = <AnswerBox at={minutes}><MarkSpan kind="circle" at={minutes + 20} color={GREY.stroke}>{fx(ISS.min, 1)} min</MarkSpan></AnswerBox></Row>
				<Row at={laps} size={36}>86,400 s ÷ {Math.round(ISS.T).toLocaleString('en-AU')} s ≈ {fx(ISS.perDay, 1)} laps a day</Row>
			</div>
			<CrossedChip x={1300} y={560} at={day} crossAt={day + 20} size={30} caption="seconds, not minutes">T = {sci(ISS.T)} min</CrossedChip>
			<Chip x={520} y={820} at={nasa} size={30} border={GREY.stroke} color={GREY.ink}>NASA: about 90 min per orbit, about 16 orbits a day</Chip>
		</>
	);
};

// ---------- 10. one constant for every satellite ----------
const ST10: Stage = {cx: 470, cy: 590, R: 340 / (MOON.r / RE)};
export const S10: React.FC = () => {
	const id = 'one-constant';
	const f = useCurrentFrame();
	const powerful = cue(id, 'powerful part'), only = cue(id, 'only big G'), same = cue(id, 'same for everything'), tryM = cue(id, 'Try the Moon'), days = cue(id, 'three days'), its = cue(id, 'Its r cubed'), within = cue(id, 'within one per cent'), two = cue(id, 'Two orbits');
	const p = prog(f, same - 40, 44);
	const S0: Stage = {cx: 420, cy: 620, R: 300};
	const eD = lerp(2 * S0.R, 36, p);
	const far = prog(f, same - 10, 20);
	const ma = -35;
	const [mx, my] = polar(ST10.cx, ST10.cy, rPx(ST10, MOON.r), ma);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DashCircle cx={ST10.cx} cy={ST10.cy} r={rPx(ST10, MOON.r)} at={same - 6} color={INK} width={3} dur={36} />
				{p < 1 ? <g opacity={1 - p}><circle cx={S0.cx} cy={S0.cy} r={rPx(S0, ISS.r)} fill="none" stroke={TEAL.stroke} strokeWidth={3} strokeDasharray="10 8" /></g> : null}
				<Earth cx={lerp(S0.cx, ST10.cx, p)} cy={lerp(S0.cy, ST10.cy, p)} d={eD} />
				<circle cx={ST10.cx} cy={ST10.cy} r={Math.max(eD / 2 + 4, rPx(ST10, ISS.r) + 4)} fill="none" stroke={TEAL.stroke} strokeWidth={3} opacity={p} />
				{far > 0 ? <g opacity={far}><Moon cx={mx} cy={my} d={56} /></g> : null}
			</FrameSvg>
			<Lbl x={mx + 34} y={my - 30} at={tryM} color={INK} size={30}>Moon</Lbl>
			<HandTag x={mx + 34} y={my + 30} text="27.3 days" at={days} size={30} color={GREY.ink} />
			<Lbl x={ST10.cx + 30} y={ST10.cy + 46} at={same} color={TEAL.ink} size={28}>satellite (400 km)</Lbl>
			<Lbl x={ST10.cx} y={ST10.cy + rPx(ST10, MOON.r) + 40} at={tryM} color={GREY.ink} anchor="middle" size={28}>distances to scale; Earth and Moon drawn larger</Lbl>
			<div style={{position: 'absolute', left: 940, top: 180, display: 'flex', flexDirection: 'column', gap: 10, width: 884}}>
				<Row at={powerful} size={52}>r³/T² = <MarkSpan kind="underline" at={only} color={NAVY.stroke}>GM/4π²</MarkSpan>: only G and M</Row>
				<Enter at={-30}><div style={{...card, padding: '8px 22px 10px'}}>
					<div style={{...DISPLAY(36, TEAL.ink, 800)}}>satellite: r = {sci(ISS.r, 3)} m, T = {sci(ISS.T, 3)} s</div>
					<div style={{...DISPLAY(40, INK, 800), opacity: prog(f, only, 12)}}>r³/T² = {sci(ISS.k, 3)} m³ s⁻²</div>
				</div></Enter>
				<Enter at={tryM}><div style={{...card, padding: '8px 22px 10px'}}>
					<div style={{...DISPLAY(34, INK_SOFT, 800), opacity: prog(f, days - 30, 12)}}>Moon: r = {sci(MOON.r, 3)} m, T = {fx(MOON.Td, 2)} d = {sci(MOON.T, 3)} s</div>
					<div style={{...DISPLAY(40, INK, 800), opacity: prog(f, its, 12)}}>r³/T² = {sci(MOON.k, 3)} m³ s⁻²</div>
				</div></Enter>
				<Row at={within - 6} size={36}><span style={{color: NAVY.ink}}><MarkSpan kind="circle" at={within + 20} color={NAVY.stroke}>within 1 %</MarkSpan> ({fx(MOON.pct, 1)} % apart)</span></Row>
				<Row at={two} size={48}><AnswerBox at={two + 10}><span>GM/4π² = {sci(K, 3)} m³ s⁻²</span></AnswerBox></Row>
			</div>
			<HandTag x={940} y={890} text="same Earth, same constant" at={two + 20} size={30} color={NAVY.ink} />
			<Chip x={1330} y={810} at={tryM} size={26} border={GREY.stroke} color={GREY.ink}>Moon data: NASA Moon Fact Sheet</Chip>
		</>
	);
};
