// Scenes 6 to 10: same direction and a circle (the polar view: a westward satellite meeting the dish twice a
// day, a 24 h ellipse from the field motion engine swinging the line, then the four-condition checklist),
// uses and costs (the rooftop and a true-scale side inset with the coverage cone, the signal pulse and the
// polar sight lines), near Earth (three true-scale engine runs with the comparison cards), the worked low
// orbit (full-width working beside a polar orbit whose ground track strips fill in), and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {stateAt} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {DAY, DELAY, GEO, GM, GPS, HEAD, HEAD_SIZE, HORIZON_LAT, ISS, LEO, LOW, RE, RUN_E2, RUN_GEO, RUN_GPS, RUN_LOW, SLIP, cue} from './common';
import {Earth, GREY, Lbl, NAVY, PolarEarth, Ring, Satellite, T, TEAL, VecArrow, comma, fx, markerAt, meridianPath, orbitPx, polar, proj, ringPoint, rPx, sci, toPx} from './parts';
import type {Stage} from './parts';
import {Givens, Rooftop, ROOF, Strip} from './s1';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
/** Head of a run at display time t (s), on a stage: pixels, screen-angle (deg) and unit velocity. */
const headOf = (st: Stage, path: MotionPath, t: number) => {
	const s = stateAt(path, ((t % path.duration) + path.duration) % path.duration);
	const [x, y] = toPx(st, s.x, s.y);
	const sp = Math.hypot(s.vx, s.vy) || 1;
	return {x, y, ux: s.vx / sp, uy: -s.vy / sp, speed: s.speed, deg: (Math.atan2(y - st.cy, x - st.cx) * 180) / Math.PI};
};
const Tick: React.FC<{at: number}> = ({at}) => {
	const p = prog(useCurrentFrame(), at, 12);
	return <svg width={36} height={36} viewBox="0 0 40 40" style={{flex: 'none', overflow: 'visible'}}><path d="M6,22 L16,32 L35,8" fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} /></svg>;
};

// ---------- 6. same direction, and a circle ----------
const P6: Stage = {cx: 500, cy: 590, R: 46};
const DAYF6 = 200;
export const S06: React.FC = () => {
	const id = 'direction-circle';
	const f = useCurrentFrame();
	const westEast = cue(id, 'west to east'), sameWay = cue(id, 'same way Earth'), orIt = cue(id, 'or it would'), twice = cue(id, 'overhead twice'), andOrbit = cue(id, 'And the orbit'), steady = cue(id, 'speed stays constant'), ahead = cue(id, 'drift ahead'), behind = cue(id, 'fall behind'), right = cue(id, 'The right period'), plane = cue(id, "equator's plane"), dir = cue(id, "Earth's direction"), circle = cue(id, 'a circle'), only = cue(id, 'Only then');
	const phase = f < orIt ? 0 : f < andOrbit ? 1 : f < right ? 2 : 3;
	const eDeg = (360 * f) / DAYF6;
	const [mx, my] = markerAt(P6.cx, P6.cy, P6.R, eDeg);
	const rG = orbitPx(P6.R, GEO.r);
	// The run turned so its perigee starts at the dish at "And the orbit".
	const rot0 = ((-360 * andOrbit) / DAYF6 * Math.PI) / 180;
	const turn = (x: number, y: number): [number, number] => { const dx = x - P6.cx, dy = y - P6.cy; return [P6.cx + dx * Math.cos(rot0) - dy * Math.sin(rot0), P6.cy + dx * Math.sin(rot0) + dy * Math.cos(rot0)]; };
	let sx = 0, sy = 0, rot = 0, vLen = GEO.v / 1000, passes = 'never (stays put)', tdx = 0, tdy = 0;
	const tangent = (a: number, sign: number) => { const r = (a * Math.PI) / 180; tdx = Math.sin(r) * sign; tdy = -Math.cos(r) * sign; };
	if (phase === 0 || phase === 3) {
		[sx, sy] = polar(P6.cx, P6.cy, rG, -eDeg); rot = -eDeg + 90; tangent(-eDeg, 1);
	} else if (phase === 1) {
		// Westward (clockwise on screen), starting opposite the dish: it meets the dish twice per Earth turn.
		const a = (-360 * orIt) / DAYF6 + 180 + (360 * (f - orIt)) / DAYF6;
		[sx, sy] = polar(P6.cx, P6.cy, rG, a); rot = a + 90; tangent(a, -1);
		passes = 'twice a day';
	} else {
		const h = headOf(P6, RUN_E2, (DAY * (f - andOrbit)) / DAYF6);
		[sx, sy] = turn(h.x, h.y);
		rot = (Math.atan2(sy - P6.cy, sx - P6.cx) * 180) / Math.PI + 90;
		tdx = h.ux * Math.cos(rot0) - h.uy * Math.sin(rot0); tdy = h.ux * Math.sin(rot0) + h.uy * Math.cos(rot0);
		vLen = h.speed / 1000; passes = 'drifts east and west';
	}
	// A pass over the dish: the westward satellite's direction crosses the marker's.
	const rel = phase === 1 ? ((720 * (f - orIt)) / DAYF6 + 180) % 360 : 180;
	const flash = phase === 1 && (rel < 14 || rel > 346);
	const ellPts = Array.from({length: 121}, (_, k) => {
		const s = stateAt(RUN_E2, (RUN_E2.duration * k) / 120);
		const [x, y] = toPx(P6, s.x, s.y);
		return turn(x, y);
	}).map(([x, y], k) => `${k ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				{phase === 2 ? <path d={ellPts} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 9" /> : <circle cx={P6.cx} cy={P6.cy} r={rG} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 9" />}
				<PolarEarth cx={P6.cx} cy={P6.cy} R={P6.R} deg={eDeg} />
				<line x1={mx} y1={my} x2={sx} y2={sy} stroke={NAVY.stroke} strokeWidth={5} />
				{flash ? <circle cx={mx} cy={my} r={30} fill="none" stroke={NAVY.stroke} strokeWidth={6} /> : null}
				<VecArrow x={sx + tdx * 26} y={sy + tdy * 26} dx={tdx * vLen * 34} dy={tdy * vLen * 34} color={TEAL.stroke} width={6} head={18} />
				<Satellite cx={sx} cy={sy} w={54} rotate={rot} />
			</FrameSvg>
			<HandTag x={P6.cx - 360} y={P6.cy - 320} text="with Earth's spin" at={sameWay} size={32} color={NAVY.ink} />
			<HandTag x={P6.cx + 120} y={P6.cy + 340} text="steady speed" at={steady} size={32} color={TEAL.ink} />
			<Lbl x={P6.cx} y={P6.cy + 400} at={westEast} color={GREY.ink} anchor="middle" size={28}>view from above the North Pole; Earth turns anticlockwise</Lbl>
			<Readouts x={1080} y={186} w={744} size={48} at={westEast} rows={[
				{label: 'over the dish', value: passes, color: NAVY.ink},
				{label: 'speed', value: `${fx(vLen, 2)} km s⁻¹`, color: TEAL.ink},
			]} />
			<CrossedChip x={1080} y={376} at={twice} crossAt={twice + 30} size={32} caption="westward: overhead twice a day">westward 24 h orbit</CrossedChip>
			<CrossedChip x={1080} y={500} at={ahead} crossAt={behind} size={32} caption="not circular: drifts east and west">oval 24 h orbit</CrossedChip>
			<div style={{position: 'absolute', left: 1080, top: 630, display: 'flex', flexDirection: 'column', gap: 6, width: 744}}>
				{[
					{at: right, t: 'T = one sidereal day (23 h 56 min; questions use 24 h)'},
					{at: plane, t: 'equatorial plane'},
					{at: dir, t: 'west to east'},
					{at: circle, t: 'circular'},
				].map((r, i) => <Enter key={i} at={r.at}><div style={{display: 'flex', alignItems: 'center', gap: 12}}><Tick at={r.at + 6} /><span style={{...DISPLAY(32, INK, 800), whiteSpace: 'normal'}}>{r.t}</span></div></Enter>)}
			</div>
			<Row at={only - 8} size={30} style={{position: 'absolute', left: 1070, top: 840, width: 754, whiteSpace: 'normal'}}><AnswerBox at={only}><span>r = {sci(GEO.r)} m, h ≈ 35,900 km, v = {fx(GEO.v / 1000, 2)} km s⁻¹</span></AnswerBox></Row>
			<Ring cx={1100} cy={730} rx={60} ry={116} at={only} color={NAVY.stroke} />
		</>
	);
};

// ---------- 7. what it's good for, and the costs ----------
const RS = {x: 40, y: 150, s: 0.62};
const rs = (x: number, y: number): [number, number] => [RS.x + x * RS.s, RS.y + y * RS.s];
const IN7 = {x: 1250, y: 176, w: 574, h: 470, cx: 1312, cy: 410, R: 46};
export const S07: React.FC = () => {
	const id = 'uses-costs';
	const f = useCurrentFrame();
	const fixed = cue(id, 'fixed dishes need'), tv = cue(id, 'Television'), bolted = cue(id, 'bolted'), weather = cue(id, 'Weather satellites'), hima = cue(id, 'Himawari'), costs = cue(id, 'costs'), signal = cue(id, 'signal up'), quarter = cue(id, 'quarter of a'), poles = cue(id, 'near the poles'), low = cue(id, 'very low');
	const [s0x, s0y] = rs(ROOF.sat[0], ROOF.sat[1]);
	const [a0x, a0y] = rs(ROOF.aim[0], ROOF.aim[1]);
	const pulseT = Math.max(0, Math.min(1, (f - signal) / 60));
	const up = pulseT < 0.5;
	const q = up ? pulseT * 2 : 2 - pulseT * 2;
	const px = lerp(a0x, s0x, q), py = lerp(a0y, s0y, q);
	const rSat = rPx({cx: IN7.cx, cy: IN7.cy, R: IN7.R}, GEO.r);
	const sat: [number, number] = [IN7.cx + rSat, IN7.cy];
	const th = (HORIZON_LAT * Math.PI) / 180;
	const tp1: [number, number] = [IN7.cx + IN7.R * Math.cos(th), IN7.cy - IN7.R * Math.sin(th)];
	const tp2: [number, number] = [IN7.cx + IN7.R * Math.cos(th), IN7.cy + IN7.R * Math.sin(th)];
	const cone = prog(f, hima + 20, 20);
	const sight = prog(f, poles, 18);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v19roof"><rect x={RS.x} y={RS.y} width={1920 * RS.s} height={1080 * RS.s} rx={20} /></clipPath></defs>
				<g clipPath="url(#v19roof)"><g transform={`translate(${RS.x},${RS.y}) scale(${RS.s})`}><Rooftop /></g></g>
				<rect x={RS.x} y={RS.y} width={1920 * RS.s} height={1080 * RS.s} rx={20} fill="none" stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} />
				{f >= signal && pulseT < 1 ? <circle cx={px} cy={py} r={10} fill="#fffbe8" stroke={NAVY.stroke} strokeWidth={4} /> : null}
				<rect x={IN7.x} y={IN7.y} width={IN7.w} height={IN7.h} rx={20} fill={CARD} stroke="rgba(60,45,20,0.16)" strokeWidth={2.5} opacity={prog(f, weather, 14)} />
				{f >= weather ? <g opacity={prog(f, weather, 14)}>
					{cone > 0 ? <path d={`M${sat[0]},${sat[1]} L${tp1[0]},${tp1[1]} A${IN7.R},${IN7.R} 0 0 1 ${tp2[0]},${tp2[1]} Z`} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={2} opacity={cone} /> : null}
					<line x1={IN7.cx - IN7.R - 12} y1={IN7.cy} x2={sat[0]} y2={sat[1]} stroke={GREY.ink} strokeWidth={2.5} strokeDasharray="10 7" />
					<Earth cx={IN7.cx} cy={IN7.cy} d={2 * IN7.R} />
					<Satellite cx={sat[0]} cy={sat[1]} w={48} rotate={90} />
					{sight > 0 ? <g opacity={sight}>
						<line x1={tp1[0]} y1={tp1[1]} x2={sat[0]} y2={sat[1]} stroke={GREY.ink} strokeWidth={4} />
						<line x1={tp2[0]} y1={tp2[1]} x2={sat[0]} y2={sat[1]} stroke={GREY.ink} strokeWidth={4} />
						<circle cx={tp1[0]} cy={tp1[1]} r={6} fill={INK} /><circle cx={tp2[0]} cy={tp2[1]} r={6} fill={INK} />
					</g> : null}
				</g> : null}
				<Ring cx={(tp1[0] + sat[0]) / 2} cy={(tp1[1] + sat[1]) / 2 - 6} rx={170} ry={34} at={low} color={GREY.stroke} />
			</FrameSvg>
			<Lbl x={IN7.x + 20} y={IN7.y + 40} at={weather} color={GREY.ink} size={28}>side view, true scale</Lbl>
			<Lbl x={IN7.cx - 10} y={IN7.cy + 90} at={weather} color={GREY.ink} size={28}>equator</Lbl>
			<Lbl x={sat[0] - 6} y={sat[1] - 44} at={weather} color={NAVY.ink} anchor="end" size={28}>geostationary</Lbl>
			<Chip x={IN7.x} y={IN7.y + IN7.h + 14} at={hima} size={30} w={IN7.w} border={NAVY.stroke} color={NAVY.ink}>Himawari-9: 140.7° E above the equator, full disc every 10 min</Chip>
			<Row at={poles + 10} size={28} style={{position: 'absolute', left: IN7.x + 20, top: IN7.y + IN7.h - 84, width: IN7.w - 40, whiteSpace: 'normal'}}><span style={{color: GREY.ink}}>beyond about 80° latitude: below the horizon</span></Row>
			<Lbl x={s0x + 40} y={s0y + 10} at={fixed} color={NAVY.ink} size={30}>fixed dish: no tracking</Lbl>
			<HandTag x={a0x - 50} y={a0y + 40} text="bolted in place" at={bolted} size={32} color={NAVY.ink} anchor="end" />
			<Chip x={90} y={190} at={tv} size={30} w={440} border={NAVY.stroke} color={NAVY.ink}>TV and communications: fixed dishes</Chip>
			<Chip x={90} y={300} at={weather} size={30} w={440} border={NAVY.stroke} color={NAVY.ink}>weather: the same view all day</Chip>
			<Readouts x={40} y={790} w={520} size={48} at={costs} rows={[{label: 'signal time', value: `${fx(DELAY * pulseT, 2)} s`, color: GREY.ink}]} />
			<Row at={quarter} size={40} style={{position: 'absolute', left: 590, top: 812, width: 1234}}>2 × {sci(GEO.h)} m ÷ 3.0 × 10⁸ m s⁻¹ = <AnswerBox at={quarter + 14}><span>{fx(DELAY, 2)} s</span></AnswerBox></Row>
			<HandTag x={600} y={910} text="a quarter of a second" at={quarter + 24} size={30} color={GREY.ink} />
		</>
	);
};

// ---------- 8. near Earth: the opposite trade ----------
const ST8: Stage = {cx: 430, cy: 600, R: 330 / (GEO.r / RE)};
const DAYF8 = 900;
const OrbitCard: React.FC<{at: number; title: string; color: string; lines: {at: number; text: React.ReactNode}[]; ring?: number}> = ({at, title, color, lines}) => (
	<Enter at={at}>
		<div style={{...card, padding: '8px 22px 10px', borderLeft: `8px solid ${color}`}}>
			<div style={{...DISPLAY(36, color, 800)}}>{title}</div>
			{lines.map((l, i) => <Row key={i} at={l.at} size={30} style={{whiteSpace: 'normal'}}>{l.text}</Row>)}
		</div>
	</Enter>
);
export const S08: React.FC = () => {
	const id = 'near-earth';
	const f = useCurrentFrame();
	const lowC = cue(id, 'Low orbits'), hour = cue(id, 'hour and a half'), crosses = cue(id, 'crosses your sky'), images = cue(id, 'detailed images'), many = cue(id, 'many satellites'), between = cue(id, 'In between'), gps = cue(id, 'GPS'), twenty = cue(id, 'twenty thousand');
	const t = (DAY * f) / DAYF8;
	const L = headOf(ST8, RUN_LOW, t), Gp = headOf(ST8, RUN_GPS, t), Ge = headOf(ST8, RUN_GEO, t);
	const lw = 2.5 + 3 * prog(f, lowC, 14);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={ST8.cx} cy={ST8.cy} r={rPx(ST8, GEO.r)} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="12 9" />
				<circle cx={ST8.cx} cy={ST8.cy} r={rPx(ST8, GPS.r)} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, between, 16)} />
				<circle cx={ST8.cx} cy={ST8.cy} r={rPx(ST8, ISS.r) + 3} fill="none" stroke={TEAL.stroke} strokeWidth={lw} />
				<Earth cx={ST8.cx} cy={ST8.cy} d={2 * ST8.R} />
				<Satellite cx={Ge.x} cy={Ge.y} w={64} rotate={Ge.deg + 90} />
				{f >= between ? <g opacity={prog(f, between, 16)}><Satellite cx={Gp.x} cy={Gp.y} w={56} rotate={Gp.deg + 90} /></g> : null}
				{f >= lowC ? <Satellite cx={L.x} cy={L.y} w={34} rotate={L.deg + 90} /> : null}
				<Ring cx={1400} cy={560} rx={110} ry={30} at={twenty + 10} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={ST8.cx} y={ST8.cy + rPx(ST8, GEO.r) + 40} at={-30} color={GREY.ink} anchor="middle" size={28}>true scale; one day in 30 s</Lbl>
			<HandTag x={ST8.cx + 70} y={ST8.cy + 30} text="close and fast" at={crosses} size={30} color={TEAL.ink} />
			<HandTag x={ST8.cx - 330} y={ST8.cy - 300} text="far and fixed" at={6} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 860, top: 186, display: 'flex', flexDirection: 'column', gap: 14, width: 964}}>
				<OrbitCard at={-30} title="Geostationary: about 35,900 km up" color={INK} lines={[{at: -30, text: 'one day (24 h in questions); fixed dishes, weather'}, {at: -30, text: 'costs: signal delay, weak polar coverage'}]} />
				<OrbitCard at={lowC} title="Low Earth orbit: 200 to 2,000 km up" color={TEAL.ink} lines={[{at: hour, text: `about 90 to 130 min (${fx(LEO.lo, 0)} min at 200 km, ${fx(LEO.hi, 0)} min at 2,000 km)`}, {at: images, text: 'close imaging, crewed station, low delay'}, {at: many, text: 'needs many satellites and tracking dishes'}]} />
				<OrbitCard at={between} title="GPS (medium): about 20,200 km up" color={NAVY.ink} lines={[{at: gps, text: <>about <span style={{color: NAVY.ink}}>12 h</span> ({fx(GPS.h, 1)} h in this model): navigation</>}]} />
			</div>
			<Lbl x={860} y={930} at={twenty} color={GREY.ink} size={28}>GPS: gps.gov; low orbit: about {fx(ISS.perDay, 1)} laps a day at 400 km</Lbl>
		</>
	);
};

// ---------- 9. worked example: a low orbit ----------
const E9 = {cx: 330, cy: 640, R: 180};
const LAP9 = 40;
export const S09: React.FC = () => {
	const id = 'worked-low-orbit';
	const f = useCurrentFrame();
	const seven = cue(id, 'seven hundred'), soR = cue(id, 'so r is'), r7071 = cue(id, 'seven point zero seven one'), using = cue(id, 'Using T equals'), period = cue(id, 'the period is'), ninety = cue(id, 'ninety-eight minutes'), fifteen = cue(id, 'nearly fifteen'), ifOrbit = cue(id, 'If its orbit'), turns = cue(id, 'Earth turns beneath'), strip = cue(id, 'different strip'), photo = cue(id, 'photograph'), sees = cue(id, 'sees everywhere');
	const rho = LOW.r / RE;
	const u = (2 * Math.PI * f) / (LAP9 * 3);
	const q = proj(ringPoint(u, 90, rho, 70), E9.R);
	const ringD = Array.from({length: 121}, (_, k) => { const p = proj(ringPoint((2 * Math.PI * k) / 120, 90, rho, 70), E9.R); return {x: E9.cx + p.dx, y: E9.cy + p.dy, z: p.depth}; });
	const back = ringD.map((p, k) => `${k ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
	const laps = f < turns ? 0 : Math.min(7, Math.floor((f - turns) / LAP9) + 1);
	const strips = Array.from({length: laps}, (_, k) => 60 - k * LOW.shift);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<path d={back} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				{q.depth < 0 ? <Satellite cx={E9.cx + q.dx} cy={E9.cy + q.dy} w={40} rotate={(Math.atan2(-q.dy, -q.dx) * 180) / Math.PI - 90} /> : null}
				<Earth cx={E9.cx} cy={E9.cy} d={2 * E9.R} />
				{strips.map((lon, k) => <path key={k} d={meridianPath(E9.cx, E9.cy, E9.R, lon)} fill="none" stroke={k === laps - 1 ? '#fff3c4' : 'rgba(255,243,196,0.85)'} strokeWidth={k === laps - 1 ? 9 : 7} strokeLinecap="round" />)}
				{ringD.slice(1).map((p, k) => (p.z >= 0 && ringD[k].z >= 0 ? <line key={k} x1={ringD[k].x} y1={ringD[k].y} x2={p.x} y2={p.y} stroke={NAVY.stroke} strokeWidth={4} /> : null))}
				{q.depth >= 0 ? <Satellite cx={E9.cx + q.dx} cy={E9.cy + q.dy} w={40} rotate={(Math.atan2(-q.dy, -q.dx) * 180) / Math.PI - 90} /> : null}
			</FrameSvg>
			<Lbl x={96} y={E9.cy - E9.R - 56} at={seven} color={NAVY.ink} size={28}>polar orbit over both poles, 700 km (true scale)</Lbl>
			<HandTag x={E9.cx - 160} y={E9.cy + E9.R + 60} text="Earth turns beneath it" at={turns} size={30} color={GREY.ink} />
			<Strip x={96} y={176} at={-30} size={34}>Predict the period of an imaging satellite 700 km up.</Strip>
			<Strip x={1160} y={176} at={-30} size={40} border={NAVY.stroke} color={NAVY.ink}>T = 2π√(r³/GM)</Strip>
			<Givens x={660} y={256} w={760} at={-20} size={32} lines={['h = 700 km = 7.00 × 10⁵ m', `R = ${sci(RE, 3)} m`, `GM = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ = ${sci(GM, 3)}`]} />
			<div style={{position: 'absolute', left: 660, top: 420, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={soR} ageAt={using} size={44} oldSize={34}>r = R + h = {sci(RE, 3)} + 0.700 × 10⁶</Row>
				<Row at={r7071} ageAt={using} size={52} oldSize={38}>&nbsp;&nbsp;= <span style={{color: NAVY.ink}}>{sci(LOW.r, 3)} m</span></Row>
				<Row at={using} ageAt={fifteen} size={48} oldSize={36}>T = 2π√({sci(LOW.r3, 3)} / {sci(GM, 3)})</Row>
				<Row at={period} size={52}>&nbsp;&nbsp;= <AnswerBox at={ninety}><span>{sci(LOW.T)} s ≈ <MarkSpan kind="circle" at={ninety + 20} color={NAVY.stroke}>{fx(LOW.min, 0)} min</MarkSpan></span></AnswerBox></Row>
				<Row at={fifteen} size={36}>86,400 ÷ {comma(LOW.T)} ≈ {fx(LOW.perDay, 1)} laps a day</Row>
			</div>
			<HandTag x={1440} y={470} text="r = R + h" at={soR + 10} size={32} color={NAVY.ink} />
			<CrossedChip x={1300} y={300} at={soR} crossAt={r7071 + 10} out={using} size={30} caption="3 minutes a lap? add Earth's radius">r = 7.00 × 10⁵ m → T = {fx(SLIP.t700, 0)} s</CrossedChip>
			<Readouts x={660} y={790} w={520} size={48} at={ifOrbit} rows={[{label: 'laps so far', value: `${laps}`, color: INK}]} />
			<Lbl x={1220} y={830} at={strip} color={GREY.ink} size={28}>each lap: a strip {fx(LOW.shift, 0)}° further west</Lbl>
			<HandTag x={1220} y={892} text="polar orbit: covers the globe" at={photo} size={30} color={NAVY.ink} />
			<Lbl x={1220} y={940} at={sees} color={GREY.ink} size={28}>revisits each place only now and then</Lbl>
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const way = cue(id, 'one day, one plane'), day = cue(id, 'One day for the'), plane = cue(id, "the equator's plane"), dir = cue(id, "Earth's direction"), circle = cue(id, 'plus a circle'), kepler = cue(id, "Kepler's third");
	const glow = (at: number) => 1 + 0.12 * Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / 24)));
	const Pic: React.FC<{at: number; label: string; color: string; children: React.ReactNode}> = ({at, label, color, children}) => (
		<Enter at={Math.min(at, way)} style={{width: 380, textAlign: 'center'}}>
			<svg width={300} height={250} viewBox="-100 -85 200 170" style={{overflow: 'visible', transform: `scale(${glow(at)})`}}>{children}</svg>
			<div style={{...DISPLAY(36, color, 800)}}>{label}</div>
		</Enter>
	);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Enter at={way - 30} style={{position: 'absolute', left: 96, top: 176, width: 1728}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 10px 26px rgba(60,45,20,0.12)`, padding: '18px 40px 22px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 60, lineHeight: 1.1, opacity: prog(f, way, 12)}}><span style={{color: NAVY.ink}}>One day, one plane, </span><span style={{color: GREY.ink}}>one way.</span></div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 96, top: 430, display: 'flex', gap: 54}}>
				<Pic at={day} label="one day" color={NAVY.ink}>
					<circle r={62} fill="none" stroke={NAVY.stroke} strokeWidth={6} />
					<T x={0} y={14} size={40} anchor="middle" color={NAVY.ink}>24 h</T>
				</Pic>
				<Pic at={plane} label="one plane" color={NAVY.ink}>
					<circle r={62} fill="#e6eef5" stroke={INK} strokeWidth={4} />
					<line x1={-90} y1={0} x2={90} y2={0} stroke={GREY.ink} strokeWidth={5} strokeDasharray="12 8" />
					<T x={0} y={-12} size={26} anchor="middle" color={GREY.ink}>equator</T>
				</Pic>
				<Pic at={dir} label="one way" color={GREY.ink}>
					<path d="M-70,30 A80,60 0 0 1 60,-20" fill="none" stroke={GREY.ink} strokeWidth={7} />
					<path d="M78,-28 L46,-34 L58,-4 Z" fill={GREY.ink} />
					<T x={0} y={70} size={26} anchor="middle" color={GREY.ink}>west → east</T>
				</Pic>
				<Pic at={circle} label="plus a circle" color={TEAL.ink}>
					<circle r={62} fill="none" stroke={TEAL.stroke} strokeWidth={5} strokeDasharray="12 8" />
					<circle r={10} fill={INK} />
				</Pic>
			</div>
			<Row at={kepler} size={44} style={{position: 'absolute', left: 96, top: 830}}>then the height follows: r³/T² = GM/4π² → <AnswerBox at={kepler + 14}><span>r = {sci(GEO.r)} m</span></AnswerBox></Row>
		</>
	);
};
