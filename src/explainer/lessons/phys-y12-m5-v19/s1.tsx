// Scenes 1 to 5: the rooftop (opening on last time's frame; the painted dish aimed at a fixed satellite while
// the space station races across), keeping pace (the polar-view sync diagram with the live period slider),
// the period fixes the radius (full-width working), how high and how fast (the true-scale stage), and why it
// must be over the equator (the side view with a tilted ring and the point below the satellite).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {V18FinalFrame} from '../phys-y12-m5-v18/s3';
import {DAY, GEO, HEAD, HEAD_SIZE, ISS, SLIP, cue, driftPerDay, holdIf, mono, rOfT} from './common';
import {AMBER, DashCircle, Earth, GREY, House, Lbl, NAVY, PolarEarth, ROOF_PT, Ring, RingStage, RoofDish, Satellite, SkyGround, T, TEAL, VecArrow, dishGeom, fx, houseGeom, latText, markerAt, orbitPx, polar, sci, subPoint, subPointPx} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
export const Strip: React.FC<{x: number; y: number; at: number; w?: number; children: React.ReactNode; size?: number; border?: string; color?: string; bg?: string}> = ({x, y, at, w, children, size = 34, border = 'rgba(60,45,20,0.16)', color = INK, bg = CARD}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: '6px 20px 8px', ...DISPLAY(size, color, 800), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
export const Givens: React.FC<{x: number; y: number; w: number; at: number; lines: React.ReactNode[]; size?: number}> = ({x, y, w, at, lines, size = 34}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px'}}>
			{lines.map((t, i) => <div key={i} style={{...DISPLAY(size, NAVY.ink, 800)}}>{t}</div>)}
		</div>
	</Enter>
);

// ---------- 1. hook: one fixed spot ----------
/** The rooftop: house at scale 0.6 with its ground line at y 880; the dish's base on the right hip of the roof. */
export const ROOF = (() => {
	const groundY = 880, hs = 0.6, hx = 20;
	const hg = houseGeom(hx, groundY, hs);
	const [bx, by] = hg.pt(ROOF_PT[0], ROOF_PT[1]);
	const ds = hs * 0.46;
	const dg = dishGeom(bx, by, ds);
	const d = 205;
	const sat: [number, number] = [dg.aim[0] + dg.dir[0] * d, dg.aim[1] + dg.dir[1] * d];
	return {groundY, hs, hx, bx, by, ds, aim: dg.aim, sat};
})();
export const Rooftop: React.FC<{lineAt?: number; satAt?: number}> = ({lineAt = -60, satAt = -60}) => {
	const f = useCurrentFrame();
	const lp = prog(f, lineAt, 20);
	return (
		<g>
			<SkyGround groundY={ROOF.groundY} />
			<House x={ROOF.hx} groundY={ROOF.groundY} s={ROOF.hs} />
			{lp > 0 ? <line x1={ROOF.aim[0]} y1={ROOF.aim[1]} x2={lerp(ROOF.aim[0], ROOF.sat[0], lp)} y2={lerp(ROOF.aim[1], ROOF.sat[1], lp)} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="12 9" /> : null}
			<RoofDish bx={ROOF.bx} by={ROOF.by} s={ROOF.ds} />
			<g opacity={prog(f, satAt, 14)}><Satellite cx={ROOF.sat[0]} cy={ROOF.sat[1]} w={84} rotate={45} /></g>
		</g>
	);
};
const AUS_V18: [number, number] = [541, 612];
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const look = cue(id, 'Look at the dish'), never = cue(id, 'never has to'), north = cue(id, 'point north'), races = cue(id, 'races across'), every = cue(id, 'Every satellite'), how = cue(id, 'so how can'), hang = cue(id, 'hang over'), think = cue(id, 'Have a think');
	const h = holdIf(id);
	if (f < 1) return <V18FinalFrame />;
	const z = prog(f, 1, 24);
	const old = prog(f, 4, 14);
	// The space station's pass: left to right across the sky in about 3 s from "races".
	const sp = Math.max(0, Math.min(1, (f - races) / 90));
	const stX = lerp(-40, 1960, sp), stY = 300 - 170 * Math.sin(Math.PI * sp);
	const clock = Math.max(0, Math.min(3, ((f - every) / Math.max(60, how + 70 - every)) * 3));
	return (
		<>
			<FrameSvg>
				<Rooftop lineAt={look + 20} satAt={look} />
				{f >= races && sp < 1 ? <g>
					<path d={Array.from({length: 30}, (_, k) => { const q = Math.max(0, sp - 0.12 + (0.12 * k) / 29); return `${k ? 'L' : 'M'}${lerp(-40, 1960, q).toFixed(1)},${(300 - 170 * Math.sin(Math.PI * q)).toFixed(1)}`; }).join(' ')} fill="none" stroke={GREY.ink} strokeWidth={4} strokeLinecap="round" />
					<circle cx={stX} cy={stY} r={11} fill="#fffbe8" stroke={INK} strokeWidth={3} />
				</g> : null}
				<Ring cx={ROOF.sat[0]} cy={ROOF.sat[1]} rx={58} ry={46} at={hang} color={NAVY.stroke} />
			</FrameSvg>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{old < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - old, transform: `scale(${1 + 1.6 * z})`, transformOrigin: `${AUS_V18[0]}px ${AUS_V18[1]}px`}}><V18FinalFrame /></div> : null}
			<Lbl x={ROOF.sat[0] + 46} y={ROOF.sat[1] + 10} at={look + 10} color={NAVY.ink} size={32}>satellite</Lbl>
			<HandTag x={ROOF.sat[0] + 46} y={ROOF.sat[1] + 64} text="never moves" at={never} size={32} color={NAVY.ink} />
			<Lbl x={ROOF.sat[0] + 46} y={ROOF.sat[1] + 132} at={north} color={NAVY.ink} size={30}>north →</Lbl>
			<Lbl x={ROOF.bx - 140} y={ROOF.by - 210} at={look + 10} color={INK_SOFT} anchor="end" size={30}>fixed roof dish</Lbl>
			<Lbl x={420} y={ROOF.groundY + 46} at={look} color={GREY.ink} anchor="middle" size={30}>looking west: north is to the right</Lbl>
			<Lbl x={1240} y={176} at={races} color={GREY.ink} anchor="middle" size={30}>space station: 400 km, about 90 min per orbit</Lbl>
			<HandTag x={1500} y={170} text="races across" at={races + 30} size={32} color={GREY.ink} />
			<Readouts x={1240} y={300} w={584} size={52} at={every} title="sky clock" rows={[
				{label: 'time passed', value: `${fx(clock, 0)} h`, color: INK},
				{label: 'dish moved', value: '0°', color: NAVY.ink},
			]} />
			<Enter at={how} style={{position: 'absolute', left: 1240, top: 600, width: 584}}>
				<div style={{...card}}>
					<div style={{...DISPLAY(38, INK, 800), whiteSpace: 'normal'}}>How can a satellite stay over one spot?</div>
					<div style={{display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap'}}>
						{['it doesn\'t move', 'it moves with Earth', 'it hovers on thrust'].map((t, i) => <div key={i} style={{background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 14px 6px', ...DISPLAY(32, INK, 700), opacity: prog(f, how + 10 + i * 8, 10)}}>{t}</div>)}
					</div>
				</div>
			</Enter>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1720} y={880} r={46} ringFrom={think} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2. keeping pace with the ground ----------
/** Polar-view geometry: the disc and the display day (frames per Earth turn). */
export const PV = {cx: 500, cy: 610, R: 46};
export const DAYF = 300;
const SL = {x: 1100, y: 470, w: 660, lo: 10, hi: 32};
const PeriodSlider: React.FC<{Th: number}> = ({Th}) => {
	const X = (u: number) => SL.x + ((u - SL.lo) / (SL.hi - SL.lo)) * SL.w;
	return (
		<g>
			<line x1={SL.x} y1={SL.y} x2={SL.x + SL.w} y2={SL.y} stroke={INK_SOFT} strokeWidth={7} strokeLinecap="round" />
			{[12, 18, 24, 30].map(u => <g key={u}><line x1={X(u)} y1={SL.y - 12} x2={X(u)} y2={SL.y + 12} stroke={INK} strokeWidth={3} /><T x={X(u)} y={SL.y + 46} size={28} anchor="middle" color={INK_SOFT} weight={700}>{u} h</T></g>)}
			<circle cx={X(Th)} cy={SL.y} r={17} fill={NAVY.stroke} stroke={CARD} strokeWidth={4} />
			<T x={SL.x} y={SL.y - 30} size={28} color={INK_SOFT} weight={700}>satellite's period (slider)</T>
		</g>
	);
};
/** The satellite's angle (deg, anticlockwise) after frame f when its period (h) follows Th(k): summed frame by frame. */
const angleSum = (f: number, from: number, Th: (k: number) => number) => {
	let a = 0;
	for (let k = from; k < f; k++) a += (360 * 24) / (Th(k) * DAYF);
	return a;
};
const driftText = (d: number) => (Math.abs(d) < 0.5 ? '0° a day' : `${fx(Math.abs(d), 0)}° a day ${d > 0 ? 'east' : 'west'}`);
export const S02: React.FC = () => {
	const id = 'keep-pace';
	const f = useCurrentFrame();
	const does = cue(id, 'does move'), ground = cue(id, 'ground under it'), earth = cue(id, 'Earth turns once'), same = cue(id, 'same direction'), keeps = cue(id, 'keeps pace'), below = cue(id, 'spot below it'), first = cue(id, 'first requirement'), actually = cue(id, 'twenty-three hours');
	const K = mono([[0, 12], [ground, 12], [earth, 20], [same + 10, 20], [same + 50, 30], [keeps - 6, 30], [below, 24]], 12);
	const Th = (k: number) => kf(k, K);
	const T = Th(f);
	const eDeg = (360 * f) / DAYF;
	// The satellite's lead over the dish, summed frame by frame; offset so it sits right above the dish once T = 24 h.
	const settle = K[K.length - 1][0];
	const lead = (k: number) => angleSum(k, 0, Th) - (360 * k) / DAYF;
	const sDeg = eDeg + lead(Math.min(f, settle)) - lead(settle);
	const rS = orbitPx(PV.R, rOfT(T * 3600));
	const [sx, sy] = polar(PV.cx, PV.cy, rS, -sDeg);
	const [mx, my] = markerAt(PV.cx, PV.cy, PV.R, eDeg);
	const lowR = orbitPx(PV.R, ISS.r) + 8;
	const lowDeg = (360 * f * DAY) / (ISS.T * DAYF);
	const [lx, ly] = polar(PV.cx, PV.cy, lowR, -lowDeg);
	const showLow = f >= below + 30;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={PV.cx} cy={PV.cy} r={rS} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 9" />
				{showLow ? <g opacity={prog(f, below + 30, 14)}>
					<circle cx={PV.cx} cy={PV.cy} r={lowR} fill="none" stroke={TEAL.stroke} strokeWidth={2.5} />
					<Satellite cx={lx} cy={ly} w={30} rotate={-lowDeg + 90} />
				</g> : null}
				<PolarEarth cx={PV.cx} cy={PV.cy} R={PV.R} deg={eDeg} />
				<line x1={mx} y1={my} x2={sx} y2={sy} stroke={NAVY.stroke} strokeWidth={5} />
				<Satellite cx={sx} cy={sy} w={54} rotate={-sDeg + 90} />
				<PeriodSlider Th={T} />
			</FrameSvg>
			<Lbl x={PV.cx} y={PV.cy + 345} at={does} color={GREY.ink} anchor="middle" size={30}>view from above the North Pole</Lbl>
			<Lbl x={mx + 18} y={my + 40} at={ground} color={NAVY.ink} size={28}>dish</Lbl>
			<HandTag x={PV.cx - 330} y={PV.cy - 300} text="same direction" at={same} size={32} color={GREY.ink} />
			<HandTag x={PV.cx + 120} y={PV.cy + 60} text="keeps pace" at={below + 14} size={32} color={NAVY.ink} />
			{showLow ? <HandTag x={PV.cx - 150} y={PV.cy + 120} text="faster: drifts" at={below + 40} size={30} color={TEAL.ink} anchor="end" /> : null}
			<Readouts x={1100} y={190} w={660} size={52} at={does} rows={[
				{label: 'T', value: `${fx(T, 1)} h`, color: GREY.ink},
				{label: 'drift past the dish', value: driftText(driftPerDay(T)), color: NAVY.ink},
			]} />
			<Ring cx={1560} cy={318} rx={210} ry={44} at={below + 20} color={NAVY.stroke} />
			<Lbl x={1100} y={580} at={earth} color={GREY.ink} size={28}>question model: Earth turns once in 24 h</Lbl>
			<Row at={first} size={44} style={{position: 'absolute', left: 1100, top: 630, width: 724, whiteSpace: 'normal'}}>Requirement 1: T = Earth's rotation period</Row>
			<Chip x={1100} y={780} at={actually} size={32} w={724} border={NAVY.stroke} color={NAVY.ink}>23 h 56 min (sidereal: one turn relative to the stars); questions use 24 h = 8.64 × 10⁴ s</Chip>
		</>
	);
};

// ---------- 3. the period fixes the radius ----------
const PT = {cx: 330, cy: 690, R: 38};
export const S03: React.FC = () => {
	const id = 'period-radius';
	const f = useCurrentFrame();
	const last = cue(id, 'Last time'), rearr = cue(id, 'Rearrange'), rc = cue(id, 'and r cubed'), withT = cue(id, 'With T as'), eight = cue(id, 'eight point six four'), about = cue(id, 'r cubed is about'), seven = cue(id, 'seven point five seven'), take = cue(id, 'Take the cube'), four = cue(id, 'four point two three');
	const eDeg = (360 * f) / DAYF;
	const rG = orbitPx(PT.R, GEO.r);
	const [sx, sy] = polar(PT.cx, PT.cy, rG, -eDeg - 30);
	const [mx, my] = markerAt(PT.cx, PT.cy, PT.R, eDeg + 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={PT.cx} cy={PT.cy} r={rG} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" />
				<PolarEarth cx={PT.cx} cy={PT.cy} R={PT.R} deg={eDeg} spinArrow={false} />
				<line x1={mx} y1={my} x2={sx} y2={sy} stroke={NAVY.stroke} strokeWidth={4} />
				<Satellite cx={sx} cy={sy} w={40} rotate={-eDeg - 30 + 90} />
			</FrameSvg>
			<Lbl x={PT.cx} y={PT.cy - rG - 20} at={-30} color={NAVY.ink} anchor="middle" size={30}>T = 24 h</Lbl>
			<Strip x={96} y={176} at={-30} size={34}>Find the radius of a geostationary orbit.</Strip>
			<Strip x={940} y={176} at={-30} size={40} border={NAVY.stroke} color={NAVY.ink}>r³/T² = GM/4π²</Strip>
			<Givens x={96} y={250} w={560} at={-20} lines={[<>T = 24 h = <MarkSpan kind="circle" at={eight + 20} color={NAVY.stroke}>8.64 × 10⁴ s</MarkSpan></>, 'G = 6.67 × 10⁻¹¹ N m² kg⁻²', 'M = 6.0 × 10²⁴ kg']} />
			<HandTag x={440} y={440} text="× 3600" at={eight} size={32} color={GREY.ink} />
			<div style={{position: 'absolute', left: 720, top: 262, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={8} ageAt={rearr} size={44} oldSize={32}>Plan: T in seconds, rearrange for r³, cube root last</Row>
				<Row at={rearr} ageAt={rc} size={52} oldSize={38}>r³/T² = GM/4π²</Row>
				<Row at={rc} ageAt={about} size={56} oldSize={40}>r³ = GMT²/4π²</Row>
				<Row at={about} ageAt={take} size={48} oldSize={38}>r³ = 4.002 × 10¹⁴ × (8.64 × 10⁴)² / 39.48</Row>
				<Row at={seven} ageAt={take} size={52} oldSize={40}>&nbsp;&nbsp;&nbsp;= {sci(GEO.r3)} m³</Row>
				<Row at={take} size={60}>r = ∛({sci(GEO.r3)}) = <AnswerBox at={four}><span>{sci(GEO.r)} m</span></AnswerBox></Row>
			</div>
			<HandTag x={1420} y={780} text="cube root last" at={take} size={32} color={NAVY.ink} />
			<HandTag x={1420} y={830} text="from Earth's centre" at={four + 24} size={32} color={NAVY.ink} />
			<CrossedChip x={720} y={790} at={withT} crossAt={eight} size={32} caption="hours into seconds first: that's inside Earth">T = 24 → r = {sci(SLIP.r24)} m</CrossedChip>
			<Lbl x={1420} y={905} at={last} color={GREY.ink} size={28}>choose T, and you've chosen r</Lbl>
		</>
	);
};

// ---------- 4. how high and how fast ----------
const ST4 = {cx: 470, cy: 590, R: 58};
const VK = 22;
export const S04: React.FC = () => {
	const id = 'height-speed';
	const f = useCurrentFrame();
	const sub = cue(id, 'Subtract'), three = cue(id, 'three point five nine'), km = cue(id, 'kilometres up'), five = cue(id, 'five and a half'), its = cue(id, 'Its speed'), v308 = cue(id, 'three point zero eight'), kms = cue(id, 'kilometres per second'), slower = cue(id, 'much slower');
	const rG = orbitPx(ST4.R, GEO.r), rL = orbitPx(ST4.R, ISS.r) + 4;
	const gDeg = -40 - (360 * f) / 1800;
	const [gx, gy] = polar(ST4.cx, ST4.cy, rG, gDeg);
	const lDeg = -(360 * f) / 77;
	const [lx, ly] = polar(ST4.cx, ST4.cy, rL, lDeg);
	const tan = (deg: number): [number, number] => { const a = (deg * Math.PI) / 180; return [Math.sin(a), -Math.cos(a)]; };
	const [gtx, gty] = tan(gDeg), [ltx, lty] = tan(lDeg);
	const bDeg = -150;
	const [b0x, b0y] = polar(ST4.cx, ST4.cy, ST4.R, bDeg), [b1x, b1y] = polar(ST4.cx, ST4.cy, rG, bDeg);
	const bp = prog(f, sub, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<DashCircle cx={ST4.cx} cy={ST4.cy} r={rG} color={INK} width={3} />
				<circle cx={ST4.cx} cy={ST4.cy} r={rL} fill="none" stroke={TEAL.stroke} strokeWidth={2.5} />
				<Earth cx={ST4.cx} cy={ST4.cy} d={2 * ST4.R} />
				<line x1={ST4.cx} y1={ST4.cy} x2={gx} y2={gy} stroke={NAVY.stroke} strokeWidth={3.5} />
				{bp > 0 ? <g>
					<line x1={b0x} y1={b0y} x2={lerp(b0x, b1x, bp)} y2={lerp(b0y, b1y, bp)} stroke={GREY.ink} strokeWidth={6} />
					<line x1={b0x - 10} y1={b0y + 17} x2={b0x + 10} y2={b0y - 17} stroke={GREY.ink} strokeWidth={5} />
					{bp >= 1 ? <line x1={b1x - 10} y1={b1y + 17} x2={b1x + 10} y2={b1y - 17} stroke={GREY.ink} strokeWidth={5} /> : null}
				</g> : null}
				
				<VecArrow x={gx + gtx * 24} y={gy + gty * 24} dx={gtx * 3.08 * VK} dy={gty * 3.08 * VK} color={TEAL.stroke} width={7} head={20} at={v308} />
				<VecArrow x={lx + ltx * 14} y={ly + lty * 14} dx={ltx * 7.69 * VK} dy={lty * 7.69 * VK} color={TEAL.stroke} width={6} head={18} at={slower} />
				<Satellite cx={gx} cy={gy} w={56} rotate={gDeg + 90} />
				<Satellite cx={lx} cy={ly} w={26} rotate={lDeg + 90} />
			</FrameSvg>
			<Lbl x={(b0x + b1x) / 2 - 10} y={(b0y + b1y) / 2 + 60} at={km} color={GREY.ink} anchor="end" size={34}><MarkSpan kind="circle" at={km + 10} color={GREY.stroke}>h ≈ 35,900 km</MarkSpan></Lbl>
			<Lbl x={gx + 50} y={gy + 16} at={v308 + 10} color={TEAL.ink} size={32}>{fx(GEO.v / 1000, 2)} km s⁻¹</Lbl>
			<Lbl x={ST4.cx + 80} y={ST4.cy + 110} at={slower} color={TEAL.ink} size={32}>400 km: {fx(ISS.v / 1000, 2)} km s⁻¹</Lbl>
			<Lbl x={ST4.cx} y={ST4.cy + rG + 6} at={-30} color={GREY.ink} anchor="middle" size={28}>true scale</Lbl>
			<HandTag x={ST4.cx + 40} y={ST4.cy - 160} text="5.6 Earth radii up" at={five} size={32} color={GREY.ink} />
			<div style={{position: 'absolute', left: 960, top: 190, display: 'flex', flexDirection: 'column', gap: 12, width: 864}}>
				<Row at={sub} ageAt={its} size={48} oldSize={38}>h = r − R = {sci(GEO.r)} − 0.637 × 10⁷</Row>
				<Row at={three} size={52}>&nbsp;&nbsp;= <AnswerBox at={km}><span>{sci(GEO.h)} m</span></AnswerBox> ≈ 35,900 km</Row>
				<Row at={its} ageAt={slower} size={48} oldSize={38}>v = 2πr/T = 2π × {sci(GEO.r)} / 8.64 × 10⁴</Row>
				<Row at={v308} size={52}>&nbsp;&nbsp;= <AnswerBox at={kms}><span>{sci(GEO.v)} m s⁻¹</span></AnswerBox></Row>
			</div>
			<Enter at={slower} style={{position: 'absolute', left: 960, top: 620, width: 864}}>
				<div style={{...card}}>
					<div style={{...DISPLAY(28, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>Orbital speed</div>
					<div style={{...DISPLAY(38, TEAL.ink, 800)}}>400 km up: {fx(ISS.v / 1000, 2)} km s⁻¹</div>
					<div style={{...DISPLAY(38, TEAL.ink, 800)}}>geostationary: {fx(GEO.v / 1000, 2)} km s⁻¹</div>
				</div>
			</Enter>
			<HandTag x={960} y={880} text="higher: slower" at={slower + 20} size={34} color={TEAL.ink} />
		</>
	);
};

// ---------- 5. why it must be over the equator ----------
const SV = {cx: 500, cy: 610, R: 200, rho: 2.0};
const SV_DAY = 300;
/** The point-below trail: surface points for the last day of the run (or since the start), at inclination i. */
export const trailPts = (cx: number, cy: number, R: number, u: number, u0: number, iDeg: number): [number, number][] => {
	const from = Math.max(u0, u - 2 * Math.PI);
	const n = Math.max(2, Math.ceil(((u - from) / (2 * Math.PI)) * 120));
	return Array.from({length: n + 1}, (_, k) => subPointPx(cx, cy, R, from + ((u - from) * k) / n, iDeg));
};
export const S05: React.FC = () => {
	const id = 'equatorial-plane';
	const f = useCurrentFrame();
	const grav = cue(id, 'Gravity pulls'), plane = cue(id, 'the plane of every'), tilt = cue(id, 'Tilt the orbit'), north = cue(id, 'north of the'), south = cue(id, "it's south"), drift = cue(id, 'drift up and'), called = cue(id, "That's called"), only = cue(id, 'The only orbit'), lat = cue(id, 'one latitude'), allDay = cue(id, 'all day');
	const u0 = -Math.PI / 2;
	const u = u0 + (2 * Math.PI * Math.max(0, f - tilt)) / SV_DAY;
	const iDeg = kf(f, mono([[only, 30], [only + 50, 0]], 10));
	const s = subPoint(u, iDeg);
	const moving = f >= tilt;
	const [sx, sy] = subPointPx(SV.cx, SV.cy, SV.R, u, iDeg);
	const trail = moving ? trailPts(SV.cx, SV.cy, SV.R, u, u0, iDeg) : undefined;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<RingStage cx={SV.cx} cy={SV.cy} R={SV.R} rho={SV.rho} iDeg={iDeg} u={u} plane={prog(f, plane, 20)} dot={moving} trail={trail} centre={f >= grav} />
				{f >= grav && f < plane + 60 ? <VecArrow x={SV.cx} y={SV.cy - 330} dx={0} dy={110} color={AMBER.stroke} width={7} head={20} at={grav} /> : null}
				<Ring cx={sx} cy={sy} rx={34} ry={34} at={allDay} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={SV.cx + SV.R + 10} y={SV.cy - 40} at={-30} color={GREY.ink} size={30}>equator</Lbl>
			<Lbl x={SV.cx + 24} y={SV.cy - 352} at={grav} color={AMBER.ink} size={30}>gravity: towards Earth's centre</Lbl>
			<HandTag x={SV.cx + SV.R + 24} y={SV.cy + 80} text="through the centre" at={plane + 20} size={30} color={NAVY.ink} />
			<Lbl x={SV.cx} y={SV.cy + 330} at={tilt} color={GREY.ink} anchor="middle" size={28}>ring not to scale; Earth turns with the satellite</Lbl>
			<div style={{position: 'absolute', left: 1040, top: 190, display: 'flex', flexDirection: 'column', gap: 10, width: 784}}>
				<Row at={grav} size={40} style={{whiteSpace: 'normal'}}>gravity pulls towards Earth's centre</Row>
				<Row at={plane} size={40} style={{whiteSpace: 'normal'}}><span style={{color: NAVY.ink}}>so every orbit's plane passes through the centre</span></Row>
			</div>
			<Readouts x={1040} y={360} w={784} size={52} at={tilt} rows={[
				{label: 'orbit tilt', value: `${fx(iDeg, 0)}°`, color: NAVY.ink},
				{label: 'point below the satellite', value: latText(s.lat), color: INK},
			]} />
			<HandTag x={1060} y={560} text="north half the day, south the other half" at={north} size={30} color={NAVY.ink} />
			<Chip x={1040} y={600} at={south} size={32} w={784} border={NAVY.stroke} color={NAVY.ink}>tilted, T = 24 h: swings north and south</Chip>
			<HandTag x={1060} y={720} text="drifts up and down the sky" at={drift} size={30} color={GREY.ink} />
			<Chip x={1040} y={760} at={called} size={32} w={784} border={GREY.stroke} color={GREY.ink}>geosynchronous (24 h), but not geostationary</Chip>
			<Chip x={1040} y={850} at={lat} size={34} w={784} border={INK} color={INK}>equatorial plane: stays over one point</Chip>
		</>
	);
};
