// Scenes 7 to 12: back to the puzzle (the two hook panels and the ledger), field strength (the gravity stage:
// the force on 1, 2 and 5 kg, divide by m, the m's cancel), the worked surface value (full-width working), the
// 400 km zoom (true-scale altitude, the crossed altitude-for-r slip), the whole field (radial arrows, the
// riding probe, 2R and 3R, the g against r graph), and the memory aid with the two equation cards.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, CarryArrow, Chip, CrossedChip, DISPLAY, Readouts, Row, VecArrow} from '../../physics/projectile/board';
import {ALT, G2R, G3R, GM, HEAD, HEAD_SIZE, HOOK, RE, SPH, SURF, altPx, cue, gAt, mono} from './common';
import {AMBER, AUS, AxesG, BenchSpheres, DashCircle, Earth, GREY, GroundPanel, Lbl, NAVY, Ring, T, VIOLET, comma, fx, gmap, polar, sci} from './parts';
import type {GraphG} from './parts';
import {OptionChips} from './s1';

const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
const Strike: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => {
	const p = prog(useCurrentFrame(), on, 12);
	return <span style={{position: 'relative'}}>{children}{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,80 L100,20" stroke={INK} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - p * 100}% -50% 0)`}} /></svg> : null}</span>;
};
const Strip: React.FC<{x: number; y: number; at: number; w?: number; children: React.ReactNode; size?: number; border?: string; color?: string; bg?: string}> = ({x, y, at, w, children, size = 34, border = 'rgba(60,45,20,0.16)', color = INK, bg = CARD}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: '6px 20px 8px', ...DISPLAY(size, color, 800), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);
/** Violet field arrow pointing inward at (x, y) towards (cx, cy), length L. */
const GArrow: React.FC<{x: number; y: number; cx: number; cy: number; L: number; at?: number; width?: number; head?: number}> = ({x, y, cx, cy, L, at = -30, width = 7, head = 20}) => {
	const d = Math.hypot(cx - x, cy - y) || 1;
	return <VecArrow x={x} y={y} dx={((cx - x) / d) * L} dy={((cy - y) / d) * L} color={VIOLET.stroke} width={width} head={head} at={at} />;
};

// ---------- 7. back to the puzzle ----------
export const S07: React.FC = () => {
	const id = 'puzzle-answer';
	const f = useCurrentFrame();
	const centre = cue(id, "Earth's centre is"), squaring = cue(id, 'squaring that'), thirteen = cue(id, 'thirteen'), mass = cue(id, "But Earth's mass"), bigger = cue(id, 'times bigger'), wins = cue(id, 'Mass wins'), billion = cue(id, 'two billion'), enormous = cue(id, 'enormous mass'), though = cue(id, 'even though');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BenchSpheres x={200} y={330} ppm={330} size={32} bracketAt={-60} arrowsAt={-60} arrowLen={22} />
				<GroundPanel x={1220} y={200} w={600} h={380} arrowAt={-60} labelAt={-60} pulse={billion} size={32} scaleTag={false} />
			</FrameSvg>
			<Lbl x={365} y={520} at={-30} color={AMBER.ink} anchor="middle" size={30}>F = {sci(SPH.F)} N</Lbl>
			<Enter at={-30} style={{position: 'absolute', left: 700, top: 196}}><div style={{...DISPLAY(30, INK, 700)}}>Earth's mass, or its distance?</div></Enter>
			<OptionChips x={700} y={248} at={-30} tickAt={enormous} />
			<Lbl x={700} y={380} at={though} color={GREY.ink} size={30}>distance works against Earth</Lbl>
			<div style={{position: 'absolute', left: 96, top: 640, display: 'flex', flexDirection: 'column', gap: 18, width: 1728}}>
				<Row at={centre} ageAt={wins} size={44} oldSize={38}>distance: {sci(RE, 3)} m vs 1.0 m{f >= squaring ? <span style={{opacity: prog(f, squaring, 12)}}>, squared: × {sci(HOOK.dist2)} <span style={{color: INK_SOFT}}>{f >= thirteen ? '↓ weaker' : ''}</span></span> : null}</Row>
				<Row at={mass} ageAt={wins} size={44} oldSize={38}>mass: 6.0 × 10²⁴ kg vs 70 kg: × {sci(HOOK.mass)} <span style={{color: AMBER.ink}}>{f >= bigger ? '↑ stronger' : ''}</span></Row>
				<Row at={wins} size={54}>net: {sci(HOOK.mass)} ÷ {sci(HOOK.dist2)} ≈ <AnswerBox at={billion}><MarkSpan kind="circle" at={billion + 20} color={AMBER.stroke}>{sci(HOOK.net, 1)}</MarkSpan></AnswerBox> times stronger</Row>
			</div>
			<HandTag x={1420} y={900} text="mass wins" at={billion + 24} size={TYPE.hand} color={AMBER.ink} />
		</>
	);
};

// ---------- 8. field strength ----------
const E8 = {cx: 470, cy: 600, d: 520};
export const S08: React.FC = () => {
	const id = 'field-strength';
	const f = useCurrentFrame();
	const whatever = cue(id, 'whatever mass'), divide = cue(id, 'divide by the small'), field = cue(id, 'gravitational field strength'), eachKg = cue(id, 'force on each kilogram'), equals = cue(id, 'equals big G'), cancelled = cue(id, 'cancelled'), units = cue(id, 'Its units'), squared = cue(id, 'second squared'), freefall = cue(id, 'free-fall acceleration'), vector = cue(id, "It's a vector");
	const R = E8.d / 2;
	const P: [number, number] = [E8.cx, E8.cy - R - 16];
	const mK = mono([[0, 1], [whatever + 10, 1], [whatever + 24, 2], [whatever + 50, 2], [whatever + 64, 5], [divide, 5], [divide + 14, 1]], 6);
	const m = kf(f, mK);
	const mi = m < 1.5 ? 1 : m < 3.5 ? 2 : 5;
	const others: number[] = [180, 0, 90];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={E8.cx} cy={E8.cy} d={E8.d} />
				<line x1={E8.cx} y1={E8.cy} x2={P[0]} y2={P[1]} stroke={NAVY.stroke} strokeWidth={4} opacity={0.9} />
				<circle cx={E8.cx} cy={E8.cy} r={7} fill={NAVY.stroke} />
				<circle cx={P[0]} cy={P[1]} r={9 + 3 * Math.sqrt(m)} fill={GREY.stroke} stroke={CARD} strokeWidth={2.5} />
				<VecArrow x={P[0] + 34} y={P[1] - 60} dx={0} dy={22 * m + 24} color={AMBER.stroke} width={8} head={20} out={vector - 20} />
				<GArrow x={P[0]} y={P[1]} cx={E8.cx} cy={E8.cy} L={100} at={vector} width={9} head={26} />
				{others.map((a, i) => { const [x, y] = polar(E8.cx, E8.cy, R + 16, a); return <g key={i}>{f >= vector + 8 + i * 6 ? <circle cx={x} cy={y} r={9} fill={GREY.stroke} stroke={CARD} strokeWidth={2.5} opacity={prog(f, vector + 8 + i * 6, 8)} /> : null}<GArrow x={x} y={y} cx={E8.cx} cy={E8.cy} L={80} at={vector + 8 + i * 6} /></g>; })}
			</FrameSvg>
			<Lbl x={P[0] - 22} y={P[1] - 12} at={-30} color={INK} anchor="end" size={34}>m = {mi} kg</Lbl>
			<Lbl x={P[0] + 54} y={P[1] - 40} at={-30} out={vector - 20} color={AMBER.ink} size={34}>F = {fx(mi * SURF.g, mi === 1 ? 2 : 1)} N</Lbl>
			<Lbl x={E8.cx + 24} y={E8.cy - 110} at={-30} color={NAVY.ink} size={36}>r</Lbl>
			<Lbl x={P[0] + 22} y={P[1] + 70} at={vector + 4} color={VIOLET.ink} size={40}>g</Lbl>
			<Lbl x={96} y={925} at={vector + 20} color={VIOLET.ink} size={30}>every g arrow points to the centre</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 180, display: 'flex', flexDirection: 'column', gap: 8, width: 824}}>
				<Row at={whatever} ageAt={field} size={34} oldSize={30}>surface: {[1, 2, 5].map(k => `${k} kg: ${fx(k * SURF.g, k === 1 ? 2 : 1)} N`).join(", ")}</Row>
				<Row at={divide} ageAt={field} size={40} oldSize={30}>F ÷ m = {fx(SURF.g, 2)} N on each kilogram</Row>
				<Row at={field} ageAt={equals} size={52} oldSize={36}><span style={{color: VIOLET.ink}}>g</span> = F / m &nbsp;<span style={{...DISPLAY(30, VIOLET.ink, 700)}}>(field strength)</span></Row>
				<Row at={equals} size={52}><span style={{color: VIOLET.ink}}>g</span> = (GM<Strike on={cancelled}>m</Strike> / r²) / <Strike on={cancelled + 6}>m</Strike></Row>
				<Row at={cancelled + 16} size={60}><span style={{display: 'inline-block', border: `5px solid ${VIOLET.stroke}`, borderRadius: 14, padding: '0 18px 6px', background: CARD}}><MarkSpan kind="circle" at={cancelled + 40} color={VIOLET.stroke}><span style={{color: VIOLET.ink}}>g = GM / r²</span></MarkSpan></span></Row>
				<Row at={cancelled + 30} size={30}>depends only on the planet's mass M and the distance r</Row>
				<Row at={units} size={36}>units: N kg⁻¹ {f >= squared ? '= kg m s⁻² / kg = m s⁻²' : ''}</Row>
				<Row at={freefall} size={32}><span style={{color: VIOLET.ink}}>so g is also the free-fall acceleration there</span></Row>
			</div>
			<HandTag x={1480} y={430} text="m cancels" at={cancelled + 10} size={30} color={INK} />
			<HandTag x={1560} y={292} text="per kilogram" at={eachKg} size={30} color={VIOLET.ink} />
		</>
	);
};

// ---------- 9. worked example: g at the surface ----------
const E9 = {cx: 280, cy: 640, d: 380};
export const S09: React.FC = () => {
	const id = 'worked-surface';
	const f = useCurrentFrame();
	const sheet = cue(id, 'HSC data sheet'), bigG = cue(id, 'Big G is'), mass = cue(id, "Earth's mass is"), rIs = cue(id, 'and r is'), radius = cue(id, "Earth's radius"), metres = cue(id, 'six metres'), then = cue(id, 'Then g comes'), kilogram = cue(id, 'per kilogram'), close = cue(id, "That's close"), real = cue(id, 'Real values');
	const R = E9.d / 2;
	const P: [number, number] = [E9.cx, E9.cy - R - 6];
	const pulse = (at: number) => Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / 30)));
	const gl = pulse(radius);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={E9.cx} cy={E9.cy} d={E9.d} />
				<line x1={E9.cx} y1={E9.cy} x2={P[0]} y2={P[1]} stroke={NAVY.stroke} strokeWidth={4 + 5 * gl} />
				<circle cx={E9.cx} cy={E9.cy} r={7} fill={NAVY.stroke} />
				<circle cx={P[0]} cy={P[1]} r={9} fill={GREY.stroke} stroke={CARD} strokeWidth={2.5} />
				<GArrow x={P[0]} y={P[1]} cx={E9.cx} cy={E9.cy} L={80} at={kilogram} width={8} />
			</FrameSvg>
			<Lbl x={E9.cx + 16} y={E9.cy - 50} at={-30} color={NAVY.ink} size={34}>r</Lbl>
			<Lbl x={E9.cx} y={E9.cy + R + 56} at={radius} color={NAVY.ink} anchor="middle" size={30}>r = centre to surface</Lbl>
			<Lbl x={P[0] + 24} y={P[1] - 26} at={kilogram + 6} color={VIOLET.ink} size={34}>{fx(SURF.g, 2)} N kg⁻¹</Lbl>
			<Strip x={96} y={176} at={-30} size={34}>Predict g at Earth's surface.</Strip>
			<Strip x={700} y={176} at={-30} size={40} border={VIOLET.stroke} color={VIOLET.ink}>g = GM / r²</Strip>
			<Enter at={sheet} style={{position: 'absolute', left: 520, top: 260, width: 1000}}>
				<div style={{background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px'}}>
					{[[bigG, 'G = 6.67 × 10⁻¹¹ N m² kg⁻²'], [mass, 'M = 6.0 × 10²⁴ kg (Earth)'], [rIs, `r = ${sci(RE, 3)} m (Earth's radius, centre to surface)`]].map(([at, t], i) => (
						<div key={i} style={{...DISPLAY(38, NAVY.ink, 800), transform: `scale(${1 + 0.06 * pulse(at as number)})`, transformOrigin: 'left center'}}>{t}</div>
					))}
				</div>
			</Enter>
			<HandTag x={1540} y={300} text="data sheet values" at={sheet + 10} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 520, top: 460, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={sheet - 30} ageAt={metres} size={44} oldSize={30}>Plan: g = GM / r² with r = R (the surface)</Row>
				<Row at={metres} ageAt={kilogram} size={52} oldSize={40}>g = (6.67 × 10⁻¹¹ × 6.0 × 10²⁴) / ({sci(RE, 3)})²</Row>
				<Row at={then} size={44}>&nbsp;&nbsp;= {sci(GM, 3)} / {sci(SURF.r2, 3)}</Row>
				<Row at={kilogram - 20} size={52}>&nbsp;&nbsp;= <AnswerBox at={kilogram}><span>{fx(SURF.g, 2)} N kg⁻¹</span></AnswerBox></Row>
			</div>
			<Lbl x={530} y={790} at={close + 20} color={INK} size={30}>close to the usual 9.8</Lbl>
			<CrossedChip x={1060} y={690} at={close} crossAt={close + 30} size={30} caption="square r">r not squared: {sci(SURF.noSq)}</CrossedChip>
			<Lbl x={530} y={880} at={real} color={GREY.ink} size={30}>measured: about 9.78 to 9.83 m s⁻² (shape and spin)</Lbl>
		</>
	);
};

// ---------- 10. 400 kilometres up ----------
export const E10 = {cx: 430, cy: 540, d: 640};
export const S10: React.FC = () => {
	const id = 'worked-altitude';
	const f = useCurrentFrame();
	const up = cue(id, 'kilometres up'), station = cue(id, 'space station'), classic = cue(id, 'The classic mistake'), forR = cue(id, 'in for r'), thousands = cue(id, 'thousands of times'), measured = cue(id, 'measured from the centre'), add = cue(id, 'add the radius'), rIs = cue(id, 'and r is'), metres = cue(id, 'six metres'), then = cue(id, 'Then g is'), g873 = cue(id, 'eight point seven three'), still = cue(id, 'still about'), pct = cue(id, 'eighty-nine');
	const R = E10.d / 2, hp = altPx(ALT.h, R);
	const rise = prog(f, up - 20, 30);
	const S = polar(E10.cx, E10.cy, R, AUS), D = polar(E10.cx, E10.cy, R + hp * rise, AUS);
	const Q = polar(E10.cx, E10.cy, R + 4, -35);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={E10.cx} cy={E10.cy} d={E10.d} />
				<circle cx={E10.cx} cy={E10.cy} r={7} fill={NAVY.stroke} />
				{f >= measured ? <line x1={E10.cx} y1={E10.cy} x2={D[0]} y2={D[1]} stroke={NAVY.stroke} strokeWidth={5} opacity={prog(f, measured, 14)} /> : null}
				<circle cx={D[0]} cy={D[1]} r={7} fill={GREY.ink} stroke={CARD} strokeWidth={2} />
				{f >= up + 14 ? <line x1={S[0] + 14} y1={S[1] - 14} x2={D[0] + 14} y2={D[1] - 14} stroke={GREY.ink} strokeWidth={4} opacity={prog(f, up + 14, 10)} /> : null}
				<Ring cx={(S[0] + D[0]) / 2} cy={(S[1] + D[1]) / 2} rx={36} ry={32} at={station + 10} color={NAVY.stroke} />
				<GArrow x={Q[0]} y={Q[1]} cx={E10.cx} cy={E10.cy} L={90} at={-30} width={8} />
				<GArrow x={D[0]} y={D[1]} cx={E10.cx} cy={E10.cy} L={90 * ALT.pct} at={g873} width={8} />
			</FrameSvg>
			<Lbl x={Q[0] + 16} y={Q[1] - 18} at={-30} color={VIOLET.ink} size={30}>surface: {fx(SURF.g, 2)}</Lbl>
			<Lbl x={D[0] + 34} y={D[1] + 30} at={up + 20} color={GREY.ink} size={30}>h = {sci(ALT.h)} m (altitude)</Lbl>
			<Lbl x={D[0] + 40} y={D[1] - 40} at={g873 + 6} color={VIOLET.ink} size={30}>{fx(ALT.g, 2)}</Lbl>
			<HandTag x={D[0] + 34} y={D[1] + 86} text="h is not r" at={forR + 20} size={30} color={GREY.ink} />
			<Strip x={1080} y={176} at={-30} size={34}>Predict g at 400 km altitude.</Strip>
			<Row at={-30} size={32} style={{position: 'absolute', left: 1090, top: 250}}>surface: g = {fx(SURF.g, 2)} N kg⁻¹</Row>
			<CrossedChip x={1080} y={320} at={classic + 20} crossAt={thousands} size={32} out={add} caption="that's the altitude, not r">r = {sci(ALT.h)} m → g = {sci(ALT.wrong, 1)} N kg⁻¹</CrossedChip>
			<div style={{position: 'absolute', left: 1090, top: 320, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={add + 12} size={44} style={{color: NAVY.ink}}>r = R + h</Row>
				<Row at={rIs} size={44}>&nbsp;&nbsp;= {sci(RE, 3)} + 0.400 × 10⁶</Row>
				<Row at={metres} size={44}>&nbsp;&nbsp;= {sci(ALT.r, 3)} m</Row>
				<Row at={then} size={40} style={{marginTop: 10}}>g = {sci(GM, 3)} / ({sci(ALT.r, 3)})²</Row>
				<Row at={g873 - 10} size={52}>&nbsp;&nbsp;= <AnswerBox at={g873}><span>{fx(ALT.g, 2)} N kg⁻¹</span></AnswerBox></Row>
				<Row at={pct - 10} size={44}>{fx(ALT.g, 2)} ÷ {fx(SURF.g, 2)} = {fx(ALT.g / SURF.g, 3)} ≈ <AnswerBox at={pct}><span>{fx(ALT.pct * 100, 0)} %</span></AnswerBox></Row>
			</div>
			<Chip x={1090} y={850} at={still} size={32} border={VIOLET.stroke} color={VIOLET.ink}>not zero gravity</Chip>
		</>
	);
};

// ---------- 11. the whole field ----------
const E11 = {cx: 420, cy: 590, R: 105};
const PROBE_DEG = -20;
const GG: GraphG = {ox: 1200, oy: 840, w: 520, h: 280, xMax: 3.4, yMax: 11};
const RINGS = [1.3, 1.8, 2.45, 3.05];
const probeR = (f: number, start: number, end: number, back: number, again: number, againEnd: number) => {
	if (f < start) return 1;
	if (f < back) return 1 + 2 * Math.min(1, (f - start) / (end - start)) ** 1.2;
	if (f < again) return 3 - 2 * Math.min(1, (f - back) / Math.max(1, again - back));
	return 1 + 2 * Math.min(1, (f - again) / (againEnd - again));
};
export const S11: React.FC = () => {
	const id = 'field-map';
	const f = useCurrentFrame();
	const whole = cue(id, 'whole picture'), arrows = cue(id, 'field arrows'), out = cue(id, 'further out'), two = cue(id, 'two Earth radii'), quarter = cue(id, 'a quarter'), three = cue(id, 'three radii'), ninth = cue(id, 'a ninth'), weaker = cue(id, 'keeps getting weaker'), never = cue(id, 'never switches off');
	const u = probeR(f, whole + 6, two - 20, weaker, weaker + 14, weaker + 110);
	const r = u * RE, g = gAt(r), h = r - RE;
	const pR = E11.R * u;
	const [px, py] = polar(E11.cx, E11.cy, pR, PROBE_DEG);
	const curve = Array.from({length: 60}, (_, i) => { const x = 1 + (i * 2.4) / 59; return gmap(GG, x, SURF.g / (x * x)); }).map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
	const [dx, dy] = gmap(GG, u, g);
	const showGraph = f >= whole + 20;
	const first = f < weaker;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Earth cx={E11.cx} cy={E11.cy} d={2 * E11.R} />
				{RINGS.map((k, j) => Array.from({length: 12}, (_, i) => {
					const a = (i * 30 + (j % 2) * 15);
					const [x, y] = polar(E11.cx, E11.cy, k * E11.R, a);
					const L = 90 / (k * k);
					return <GArrow key={`${j}-${i}`} x={x} y={y} cx={E11.cx} cy={E11.cy} L={L} at={j < 2 ? arrows - 20 + j * 10 : out - 30 + (j - 2) * 12} width={j < 2 ? 5 : 4} head={j < 2 ? 14 : 10} />;
				}))}
				<DashCircle cx={E11.cx} cy={E11.cy} r={2 * E11.R} at={two} color={VIOLET.stroke} width={3} />
				<DashCircle cx={E11.cx} cy={E11.cy} r={3 * E11.R} at={three} color={VIOLET.stroke} width={3} />
				<line x1={E11.cx} y1={E11.cy} x2={px} y2={py} stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, whole, 12)} />
				<circle cx={E11.cx} cy={E11.cy} r={6} fill={NAVY.stroke} />
				{f >= whole ? <g opacity={prog(f, whole, 10)}><circle cx={px} cy={py} r={10} fill={GREY.ink} stroke={CARD} strokeWidth={2.5} /><GArrow x={px} y={py} cx={E11.cx} cy={E11.cy} L={Math.max(10, 110 / (u * u))} width={9} head={24} /></g> : null}
				{showGraph ? <g opacity={prog(f, whole + 20, 14)}>
					<AxesG g={GG} xTitle="r" yTitle="g (N kg⁻¹)" xTicks={[[1, 'R'], [2, '2R'], [3, '3R']]} yTicks={[[5, '5'], [10, '10']]} />
				</g> : null}
				{first ? <path d={Array.from({length: 40}, (_, i) => { const x = 1 + ((u - 1) * i) / 39; return gmap(GG, x, SURF.g / (x * x)); }).map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')} fill="none" stroke={VIOLET.stroke} strokeWidth={5} opacity={prog(f, whole + 20, 14)} /> : <path d={curve} fill="none" stroke={VIOLET.stroke} strokeWidth={5} />}
				{[2, 3].map(k => { const [x, y] = gmap(GG, k, SURF.g / (k * k)); return <circle key={k} cx={x} cy={y} r={8} fill={VIOLET.stroke} opacity={prog(f, k === 2 ? quarter : ninth, 10)} />; })}
				{showGraph ? <circle cx={dx} cy={dy} r={11} fill={GREY.ink} stroke={CARD} strokeWidth={3} /> : null}
				<Ring cx={GG.ox + GG.w - 30} cy={GG.oy - 30} rx={70} ry={34} at={never} color={VIOLET.stroke} />
			</FrameSvg>
			<Readouts x={1200} y={178} w={560} size={48} at={whole} title="probe" rows={[
				{label: 'altitude h', value: `${comma(h / 1000)} km`, color: GREY.ink},
				{label: 'r = R + h', value: `${sci(r, 3)} m`, color: NAVY.ink},
				{label: 'g = GM/r²', value: `${fx(g, 2)} N kg⁻¹`, color: VIOLET.ink},
			]} />
			<Lbl x={E11.cx + 2 * E11.R * 0.97 + 10} y={E11.cy + 2 * E11.R * 0.26 + 40} at={quarter} color={VIOLET.ink} size={30}>2R: g = {fx(G2R, 2)} N kg⁻¹ (÷ 4)</Lbl>
			<Lbl x={E11.cx + 3 * E11.R * 0.87 + 10} y={E11.cy + 3 * E11.R * 0.5 + 40} at={ninth} color={VIOLET.ink} size={30}>3R: g = {fx(G3R, 2)} N kg⁻¹ (÷ 9)</Lbl>
			<Lbl x={GG.ox + 250} y={GG.oy - GG.h + 20} at={weaker + 20} color={INK_SOFT} size={28}>outside the surface only</Lbl>
			<HandTag x={GG.ox + GG.w - 30} y={GG.oy - 86} text="never zero" at={never + 10} size={30} color={VIOLET.ink} anchor="middle" />
		</>
	);
};

// ---------- 12. memory aid ----------
export const S12: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const measure = cue(id, 'measure r'), twice = cue(id, 'Twice as far'), apart = cue(id, 'equations apart'), forceUses = cue(id, 'The force uses'), fieldUses = cue(id, 'Field strength uses'), kilogram = cue(id, 'each kilogram');
	const glow = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - kilogram) / 36)));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Enter at={measure - 10} style={{position: 'absolute', left: 96, top: 176, width: 1728}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 10px 26px rgba(60,45,20,0.12)`, padding: '26px 44px 30px', display: 'flex', alignItems: 'center', gap: 40}}>
					<div style={{flex: 1}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
						<div style={{...DISPLAY(70, NAVY.ink, 800), fontFamily: FONT_HAND, opacity: prog(f, measure, 12)}}>Measure r from the middle.</div>
						<div style={{...DISPLAY(70, AMBER.ink, 800), fontFamily: FONT_HAND, opacity: prog(f, twice, 12)}}>Twice as far, a quarter of the pull.</div>
					</div>
					<svg width={420} height={230} style={{overflow: 'visible', transform: 'scale(1.3)', transformOrigin: 'center'}}>
						<circle cx={110} cy={115} r={40} fill="#e4dccb" stroke={INK} strokeWidth={4} />
						<circle cx={110} cy={115} r={6} fill={NAVY.stroke} />
						<line x1={110} y1={115} x2={210} y2={115} stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, measure, 12)} />
						<line x1={110} y1={115} x2={310} y2={115} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="8 6" opacity={prog(f, twice, 12)} />
						<circle cx={210} cy={115} r={9} fill={GREY.ink} opacity={prog(f, measure, 12)} />
						<circle cx={310} cy={115} r={9} fill={GREY.ink} opacity={prog(f, twice, 12)} />
						<g opacity={prog(f, measure, 12)}><T x={160} y={100} size={30} color={NAVY.ink} anchor="middle">r</T><T x={210} y={170} size={30} color={AMBER.ink} anchor="middle">F</T></g>
						<g opacity={prog(f, twice, 12)}><T x={300} y={100} size={30} color={NAVY.ink} anchor="middle">2r</T><T x={318} y={170} size={30} color={AMBER.ink} anchor="middle">F ÷ 4</T></g>
					</svg>
				</div>
			</Enter>
			<Row at={apart} size={40} style={{position: 'absolute', left: 96, top: 540}}>Keep the two equations apart:</Row>
			<Enter at={forceUses} style={{position: 'absolute', left: 96, top: 620, width: 780}}>
				<div style={{...card, border: `4px solid ${AMBER.stroke}`, padding: '16px 28px 20px'}}>
					<div style={{...DISPLAY(72, INK, 800)}}><span style={{color: AMBER.ink}}>F</span> = GM<span style={{color: AMBER.ink, textShadow: glow > 0 ? `0 0 ${16 * glow}px ${AMBER.stroke}` : undefined, fontSize: 72 + 12 * glow}}>m</span> / r²</div>
					<div style={{...DISPLAY(36, AMBER.ink, 800)}}>force between two masses (N)</div>
					<div style={{...DISPLAY(34, INK, 700)}}>uses both masses</div>
				</div>
			</Enter>
			<Enter at={fieldUses} style={{position: 'absolute', left: 1044, top: 620, width: 780}}>
				<div style={{...card, border: `4px solid ${VIOLET.stroke}`, padding: '16px 28px 20px'}}>
					<div style={{...DISPLAY(72, INK, 800)}}><span style={{color: VIOLET.ink}}>g</span> = GM / r²</div>
					<div style={{...DISPLAY(36, VIOLET.ink, 800)}}>force per kilogram at a place (N kg⁻¹)</div>
					<div style={{...DISPLAY(34, INK, 700)}}>uses only the planet's mass M</div>
				</div>
			</Enter>
			<FrameSvg><CarryArrow from={[884, 730]} to={[1036, 730]} at={kilogram} color={INK} bend={-0.3} /></FrameSvg>
			<Lbl x={960} y={672} at={kilogram + 10} color={INK} anchor="middle" size={40}>÷ m</Lbl>
		</>
	);
};
