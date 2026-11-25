// Scenes 7 to 11: the worked electron (calculation layout beside the cross grid), the live angle dial (the electron's
// velocity turning in the 3D field box with θ, sin θ, v⊥ and F read every frame and a point riding the sin θ graph),
// the aurora (painted Sun and Earth, a coded dipole field, particles steered aside, sped up near Earth and sliding
// along a polar field line), the force that always pushes sideways (a magnetic run on the field motion engine), and
// the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {MemoryCard} from '../../shared/scenes';
import {INK, INK_SOFT, TONES} from '../../shared/tokens';
import {AnswerBox, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {CrossRegion, Particle} from '../../physics/electromagnetism/plates';
import {Arrow2, Arrow3, RightAngle, add3, project} from '../../physics/electromagnetism/magnetic';
import type {Cam, V3} from '../../physics/electromagnetism/magnetic';
import {stateAt, trailTo} from '../../sims/field-motion';
import {HEAD, HEAD_SIZE, WE, cap, cue, dialAt, mono, turnRun} from './common';
import {AMBER, Earth, FIELD, GREY, Givens, Lbl, MagnetBox, NAVY, P3, QuarterDial, Ring, Strip, Sun, TEAL, ThetaArc, fx, sci, usePulse} from './parts';

const S = (n: number) => Math.sin((n * Math.PI) / 180), C = (n: number) => Math.cos((n * Math.PI) / 180);

// ---------- 7. worked example: an electron in a magnetic field ----------
const G7 = {x: 1230, y: 250, w: 594, h: 540}, E7 = {x: 1420, y: 540};
export const S07: React.FC = () => {
	const id = 'worked-electron';
	const f = useCurrentFrame();
	const lets = cue(id, "Let's put numbers in"), force = cue(id, 'The force is q v B'), newtons = cue(id, 'ten to the minus fourteen newtons'), pos = cue(id, 'For a positive charge it would'), down = cap(id, cue(id, 'it points down'));
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={lets} size={32} w={1100}>Electron moving right, B into the page: find the force.</Strip>
			<Strip x={96} y={256} at={lets} size={34} border={INK}>F = qvB sin θ</Strip>
			<Givens x={96} y={336} w={1080} at={lets + 14} size={30} lines={[
				<>q = 1.602 × 10⁻¹⁹ C <MarkSpan kind="circle" at={force + 20} color={NAVY.stroke}>(magnitude)</MarkSpan></>,
				<>v = 3.0 × 10⁶ m s⁻¹ (right)</>,
				<>B = 0.050 T (into the page), θ = 90°</>,
			]} />
			<HandTag x={760} y={360} text="size of q" at={force + 30} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 96, top: 540, display: 'flex', flexDirection: 'column', gap: 10, width: 1100}}>
				<Row at={force} ageAt={newtons} size={44} oldSize={34}>F = qvB sin 90° = qvB</Row>
				<Row at={force + 40} ageAt={newtons} size={44} oldSize={34}>&nbsp;&nbsp;= 1.602 × 10⁻¹⁹ × 3.0 × 10⁶ × 0.050</Row>
				<Row at={newtons} size={52}>&nbsp;&nbsp;= <AnswerBox at={newtons + 16}><span style={{color: AMBER.ink}}>{sci(WE.F90, 1)} N</span></AnswerBox></Row>
				<Row at={down} size={44}>+ charge: up → <AnswerBox at={down + 10}><span style={{color: AMBER.ink}}>electron: down</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<CrossRegion x={G7.x} y={G7.y} w={G7.w} h={G7.h} step={80} />
				<Arrow2 from={[E7.x + 30, E7.y]} to={[E7.x + 190, E7.y]} color={TEAL.stroke} width={7} head={24} opacity={prog(f, lets, 12)} />
				{f >= pos ? <Arrow2 from={[E7.x, E7.y - 30]} to={[E7.x, E7.y - 170]} color={AMBER.stroke} width={5} head={22} dash="10 8" opacity={prog(f, pos, 12) * (1 - 0.4 * prog(f, down, 12))} /> : null}
				{f >= down ? <Arrow2 from={[E7.x, E7.y + 30]} to={[E7.x, E7.y + 170]} color={AMBER.stroke} width={8} head={26} opacity={prog(f, down, 12)} /> : null}
				<Particle cx={E7.x} cy={E7.y} sign="−" r={26} opacity={prog(f, lets, 12)} />
			</FrameSvg>
			<Lbl x={G7.x + G7.w / 2} y={G7.y - 22} at={lets} color={GREY.ink} size={32} anchor="middle">B into page</Lbl>
			<Lbl x={E7.x + 200} y={E7.y + 10} at={lets} color={TEAL.ink} size={34}>v</Lbl>
			<Lbl x={E7.x + 20} y={E7.y - 190} at={pos} color={AMBER.ink} size={30}>+ would go up</Lbl>
			<Lbl x={E7.x + 24} y={E7.y + 150} at={down} color={AMBER.ink} size={36}>F</Lbl>
			<CrossedChip x={1230} y={820} at={pos + 10} crossAt={down} size={30} caption="forgot to flip">electron: up</CrossedChip>
		</>
	);
};

// ---------- 8. changing the angle (the live dial) ----------
const CAM8: Cam = {cx: 560, cy: 520, k: 1.05, tilt: 1, maxDeg: 65, depthX: 0.45, depthY: 0};
const P8: V3 = [-80, 0, 70], L8 = 220;
const GR8 = {ox: 1230, oy: 820, w: 540, h: 230};
const gp = (deg: number): [number, number] => [GR8.ox + (deg / 90) * GR8.w, GR8.oy - S(deg) * GR8.h];
export const S08: React.FC = () => {
	const id = 'angle';
	const f = useCurrentFrame();
	const tilt = cue(id, 'Now tilt'), thirty = cue(id, 'thirty degrees to the field'), newtons = cue(id, 'minus fourteen newtons'), sixty = cue(id, 'At sixty degrees'), oh8 = cue(id, 'two point oh eight'), lined = cue(id, 'Lined up with the field'), depends = cap(id, cue(id, 'The force depends on sine theta'));
	const th = kf(f, mono([[tilt, 90], [thirty + 10, 30], [sixty - 4, 30], [sixty + 36, 60], [lined - 4, 60], [lined + 40, 0]]));
	const d = dialAt(th);
	const cam = CAM8;
	const v: V3 = [L8 * S(th), 0, -L8 * C(th)];
	const o = project(cam, P8), tip = project(cam, add3(P8, v)), fd = project(cam, add3(P8, [0, 0, -L8]));
	const vperpEnd = project(cam, add3(P8, [L8 * S(th), 0, 0]));
	const Fl = 170 * S(th);
	const curve = Array.from({length: 46}, (_, i) => gp(i * 2).join(',')).join(' ');
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MagnetBox cam={cam} />
				<line x1={o[0]} y1={o[1]} x2={fd[0]} y2={fd[1]} stroke={FIELD} strokeWidth={3} strokeDasharray="8 7" />
				<ThetaArc x={o[0]} y={o[1]} a={[fd[0] - o[0], fd[1] - o[1]]} b={[tip[0] - o[0], tip[1] - o[1]]} r={70} />
				<Arrow2 from={o} to={vperpEnd} color={TEAL.stroke} width={6} head={20} dash="9 7" />
				<Arrow2 from={o} to={tip} color={TEAL.stroke} width={7} head={24} />
				{Fl > 3 ? <Arrow3 cam={cam} p={P8} d={[0, -Fl, 0]} color={AMBER.stroke} width={9} head={26} /> : null}
				<P3 cam={cam} p={P8} sign="−" />
				<QuarterDial x={150} y={880} r={110} deg={th} />
				{/* the sin θ graph */}
				<line x1={GR8.ox} y1={GR8.oy} x2={GR8.ox + GR8.w + 20} y2={GR8.oy} stroke={INK} strokeWidth={3} />
				<line x1={GR8.ox} y1={GR8.oy} x2={GR8.ox} y2={GR8.oy - GR8.h - 20} stroke={INK} strokeWidth={3} />
				<polyline points={curve} fill="none" stroke={INK} strokeWidth={4} />
				{[30, 60].map(a => <circle key={a} cx={gp(a)[0]} cy={gp(a)[1]} r={9} fill={TONES.amber.soft} stroke={AMBER.stroke} strokeWidth={3} opacity={prog(f, a === 30 ? newtons : oh8, 12)} />)}
				<circle cx={gp(th)[0]} cy={gp(th)[1]} r={13} fill={TEAL.stroke} stroke={INK} strokeWidth={3} />
				<Ring cx={gp(30)[0]} cy={gp(30)[1]} rx={34} ry={30} at={depends} color={AMBER.stroke} />
				<Ring cx={gp(60)[0]} cy={gp(60)[1]} rx={34} ry={30} at={depends + 6} color={AMBER.stroke} />
			</FrameSvg>
			<Lbl x={tip[0] + 16} y={tip[1] + 8} color={TEAL.ink} size={34}>v</Lbl>
			<Lbl x={fd[0] + 14} y={fd[1] + 28} color={GREY.ink} size={32}>B</Lbl>
			<Lbl x={o[0] + 30} y={o[1] + 100} color={TEAL.ink} size={34}>θ</Lbl>
			{Fl > 20 ? <Lbl x={project(cam, add3(P8, [0, -Fl, 0]))[0] - 20} y={project(cam, add3(P8, [0, -Fl, 0]))[1] + 34} color={AMBER.ink} size={34} anchor="end">F</Lbl> : null}
			<Lbl x={96} y={740} color={TEAL.ink} size={30}>θ dial</Lbl>
			<Lbl x={GR8.ox - 12} y={GR8.oy - GR8.h + 8} color={INK} size={28} anchor="end">1</Lbl>
			<Lbl x={GR8.ox + 10} y={GR8.oy - GR8.h - 30} color={INK} size={28}>sin θ</Lbl>
			<Lbl x={GR8.ox} y={GR8.oy + 36} color={INK} size={28} anchor="middle">0°</Lbl>
			<Lbl x={GR8.ox + GR8.w} y={GR8.oy + 36} color={INK} size={28} anchor="middle">90°</Lbl>
			<Readouts x={1210} y={160} w={610} size={44} at={tilt - 30} rows={[
				{label: 'θ', value: `${fx(th)}°`, color: TEAL.ink},
				{label: 'sin θ', value: fx(d.s, 3), color: INK},
				{label: <>v<Sub>⊥</Sub></>, value: `${sci(d.vPerp, 2)}`, unit: 'm s⁻¹', color: TEAL.ink},
				{label: 'F', value: d.F < 1e-17 ? '0' : sci(d.F, 2), unit: 'N', color: AMBER.ink},
			]} />
			<div style={{position: 'absolute', left: 340, top: 760, display: 'flex', flexDirection: 'column', gap: 6}}>
				<Row at={newtons} size={44}>30°: <AnswerBox at={newtons + 12}><span style={{color: AMBER.ink}}>F = {sci(WE.F30, 1)} N</span></AnswerBox></Row>
				<Row at={oh8} size={44}>60°: <AnswerBox at={oh8 + 12}><span style={{color: AMBER.ink}}>F = {sci(WE.F60, 2)} N</span></AnswerBox></Row>
			</div>
			<HandTag x={940} y={850} text={`× ${fx(WE.ratio, 2)}`} at={depends + 10} size={34} color={AMBER.ink} />
			<HandTag x={GR8.ox + 40} y={GR8.oy - GR8.h - 70} text="sine, not angle" at={depends + 16} size={30} color={TEAL.ink} />
			<CrossedChip x={1230} y={870} at={depends} crossAt={depends + 30} size={28}>angle × 2 → force × 2</CrossedChip>
		</>
	);
};

// ---------- 9. the aurora ----------
const EA = {cx: 1150, cy: 560, R: 180};
const fieldLine = (L: number, side: 1 | -1, n = 60) => {
	const lm = Math.acos(Math.sqrt(1 / L));
	return Array.from({length: n + 1}, (_, i) => { const l = -lm + (2 * lm * i) / n; const r = L * EA.R * Math.cos(l) ** 2; return [EA.cx + side * r * Math.cos(l), EA.cy - r * Math.sin(l)] as [number, number]; });
};
/** A solar particle path: straight from the Sun, then a quarter turn away from the field at x = 560 (radius 150). */
const solarAt = (y0: number, s: number): [number, number] => {
	const x0 = 320, xb = 560, R = 150, dir = y0 < EA.cy ? -1 : 1;
	if (s <= xb - x0) return [x0 + s, y0];
	const a = Math.min((s - (xb - x0)) / R, Math.PI / 2);
	return [xb + R * Math.sin(a), y0 + dir * R * (1 - Math.cos(a))];
};
const SOLAR = [380, 450, 670, 740];
const CLOUD: [number, number][] = [[1560, 470], [1610, 560], [1540, 640], [1650, 500], [1680, 620], [1500, 560], [1590, 700], [1620, 420]];
const L_POLAR = 2.4;
export const S09: React.FC = () => {
	const id = 'aurora';
	const f = useCurrentFrame();
	const see = cue(id, 'You can see this rule'), stream = cue(id, 'stream out from the Sun'), away = cue(id, 'steered away'), some = cue(id, 'Some charged particles collect'), sped = cue(id, 'get sped up there'), poles = cue(id, 'Near the poles, the field lines'), part = cue(id, "The part of a particle's velocity"), atm = cue(id, 'down into the upper atmosphere'), glow = cue(id, 'make them glow'), aurora = cap(id, cue(id, "That's the aurora"));
	const lm = Math.acos(Math.sqrt((EA.R + 16) / (L_POLAR * EA.R)));
	const lam = prog(f, part + 10, atm - part + 10) * lm;
	const rr = L_POLAR * EA.R * Math.cos(lam) ** 2;
	const px = EA.cx + rr * Math.cos(lam), py = EA.cy - rr * Math.sin(lam);
	// tangent of (r cos l, r sin l) with r = L R cos²l, towards the pole (increasing l); dyUp is up the screen
	const dx = -3 * Math.cos(lam) ** 2 * Math.sin(lam);
	const dyUp = Math.cos(lam) ** 3 - 2 * Math.cos(lam) * Math.sin(lam) ** 2;
	const tl = Math.hypot(dx, dyUp) || 1;
	const trail = Array.from({length: 30}, (_, i) => { const l = (lam * i) / 29; const r = L_POLAR * EA.R * Math.cos(l) ** 2; return `${EA.cx + r * Math.cos(l)},${EA.cy - r * Math.sin(l)}`; }).join(' ');
	const bright = prog(f, sped, 30);
	const glowO = prog(f, glow, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Sun cx={190} cy={560} d={230} opacity={prog(f, see - 10, 16)} />
				{[1.5, 2.4, 3.3].flatMap(L => [1, -1].map(sd => <polyline key={`${L}${sd}`} points={fieldLine(L, sd as 1 | -1).map(p => p.join(',')).join(' ')} fill="none" stroke={FIELD} strokeWidth={3} opacity={prog(f, see, 20)} />))}
				<circle cx={EA.cx} cy={EA.cy} r={EA.R + 14} fill="none" stroke="#9cc3e6" strokeWidth={12} opacity={prog(f, poles, 16)} />
				<Earth cx={EA.cx} cy={EA.cy} d={EA.R * 2} />
				{glowO > 0 ? <g opacity={glowO}>{[1, -1].map(sd => <path key={sd} d={`M${EA.cx + sd * (EA.R + 14) * C(58)},${EA.cy - (EA.R + 14) * S(58)} A${EA.R + 14},${EA.R + 14} 0 0 ${sd > 0 ? 0 : 1} ${EA.cx + sd * (EA.R + 14) * C(80)},${EA.cy - (EA.R + 14) * S(80)}`} fill="none" stroke={TONES.green.stroke} strokeWidth={16} strokeLinecap="round" />)}</g> : null}
				{/* solar particles, steered away where they meet the field */}
				{f >= stream ? SOLAR.flatMap((y0, i) => [0, 1, 2].map(k => {
					const s = ((f - stream) * 5 + k * 160 + i * 55) % 480;
					const [x, y] = solarAt(y0, s);
					return <circle key={`${i}-${k}`} cx={x} cy={y} r={8} fill={TONES.amber.soft} stroke={INK} strokeWidth={2.5} />;
				})) : null}
				{f >= away ? [SOLAR[0], SOLAR[3]].map(y0 => { const [x, y] = solarAt(y0, 240 + 75); const dir = y0 < EA.cy ? -1 : 1; const a = 75 / 150; return <Arrow2 key={y0} from={[x, y]} to={[x - 70 * Math.sin(a), y + dir * 70 * Math.cos(a)]} color={AMBER.stroke} width={5} head={16} opacity={prog(f, away, 12)} />; }) : null}
				{/* energetic particles near Earth */}
				{f >= some ? CLOUD.map(([x, y], i) => <circle key={i} cx={x + 6 * Math.sin(f / 9 + i)} cy={y + 6 * Math.cos(f / 11 + i * 2)} r={7 + 2 * bright} fill={bright > 0.5 ? TONES.amber.stroke : TONES.amber.soft} stroke={INK} strokeWidth={2.5} opacity={prog(f, some, 14)} />) : null}
				{/* one particle sliding along a polar field line */}
				{f >= part ? <g>
					<polyline points={trail} fill="none" stroke={TEAL.stroke} strokeWidth={4} strokeDasharray="10 7" />
					<Arrow2 from={[px, py]} to={[px + (70 * dx) / tl, py - (70 * dyUp) / tl]} color={TEAL.stroke} width={5} head={18} dash="9 7" />
					<circle cx={px} cy={py} r={10} fill={TONES.amber.stroke} stroke={INK} strokeWidth={2.5} />
				</g> : null}
			</FrameSvg>
			<Lbl x={190} y={720} at={see} color={INK} size={30} anchor="middle">Sun</Lbl>
			<Lbl x={EA.cx} y={EA.cy + EA.R + 60} at={see} color={INK} size={30} anchor="middle">Earth</Lbl>
			<HandTag x={420} y={300} text="across B: steered" at={away + 10} size={32} color={AMBER.ink} />
			<HandTag x={1560} y={360} text="near Earth: sped up" at={sped + 10} size={30} color={GREY.ink} />
			<HandTag x={1350} y={200} text="along B: no force" at={part + 30} size={32} color={TEAL.ink} />
			<Lbl x={760} y={880} at={poles} color={INK} size={30}>upper atmosphere</Lbl>
			<HandTag x={760} y={200} text="aurora: gas molecules glow" at={aurora} size={32} color={TONES.green.ink} marks={[{kind: 'arrow', from: [1040, 214], to: [EA.cx - 50, EA.cy - EA.R - 26], bend: -0.2}]} markAt={aurora + 4} />
			<Lbl x={1824} y={880} at={see} color={INK_SOFT} size={30} anchor="end">not to scale</Lbl>
		</>
	);
};

// ---------- 10. a force that always pushes sideways ----------
const R10 = 240, V10 = 4;
const RUN10 = turnRun(R10, V10, 0.45);
const O10 = {x: 760, y: 800};
export const S10: React.FC = () => {
	const id = 'always-sideways';
	const f = useCurrentFrame();
	const notice = cue(id, "Here's the thing to notice"), right = cue(id, 'always at right angles to the velocity'), never = cue(id, 'It never points along'), back = cue(id, 'or holds it back'), side = cap(id, cue(id, 'It only ever pushes sideways'));
	const t = kf(f, mono([[right, 0], [right + 170, RUN10.duration]]), false);
	const st = stateAt(RUN10, t);
	const at = (s: {x: number; y: number}) => [O10.x + s.x, O10.y - s.y] as [number, number];
	const snaps = [0, 0.5, 1].map(k => k * RUN10.duration).filter(tk => tk <= t + 0.5);
	const pulse = usePulse(side, 30);
	const trail = trailTo(RUN10, t, 120).map(([x, y]) => `${O10.x + x},${O10.y - y}`).join(' ');
	const Pair: React.FC<{s: ReturnType<typeof stateAt>; o?: number}> = ({s, o = 1}) => {
		const [x, y] = at(s), sp = Math.hypot(s.vx, s.vy) || 1, ux = s.vx / sp, uy = -s.vy / sp;
		return (
			<g opacity={o}>
				<Arrow2 from={[x + ux * 28, y + uy * 28]} to={[x + ux * 170, y + uy * 170]} color={TEAL.stroke} width={6} head={22} />
				<Arrow2 from={[x + uy * 28, y - ux * 28]} to={[x + uy * 140, y - ux * 140]} color={AMBER.stroke} width={7} head={24} />
				<RightAngle x={x} y={y} u={[ux, uy]} v={[uy, -ux]} size={42} width={3.5 + 3 * pulse} />
			</g>
		);
	};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CrossRegion x={300} y={180} w={1160} h={720} step={80} opacity={prog(f, notice - 10, 14)} />
				<polyline points={trail} fill="none" stroke={TEAL.stroke} strokeWidth={4} />
				{snaps.map((tk, i) => <Pair key={i} s={stateAt(RUN10, tk)} />)}
				<Pair s={st} />
				<Particle cx={at(st)[0]} cy={at(st)[1]} sign="+" r={24} />
			</FrameSvg>
			<Lbl x={880} y={160} at={notice} color={GREY.ink} size={30} anchor="middle">B into page</Lbl>
			<Strip x={1500} y={260} at={right} size={30} w={330}>F ⊥ v at every instant</Strip>
			<CrossedChip x={1500} y={420} at={never} crossAt={back} size={30}>F along v?</CrossedChip>
			<HandTag x={1500} y={600} text="always 90° to v" at={side} size={32} color={AMBER.ink} />
			<HandTag x={1500} y={680} text="turns together" at={side + 10} size={32} color={TEAL.ink} />
		</>
	);
};

// ---------- 11. memory aid ----------
const Panels: React.FC<{a: number; b: number; c: number; pulse: number}> = ({a, b, c, pulse}) => {
	const f = useCurrentFrame();
	const W = 440, gap = 60;
	return (
		<svg width={3 * W + 2 * gap} height={220} style={{overflow: 'visible'}}>
			{[0, 1, 2].map(i => <rect key={i} x={i * (W + gap)} y={0} width={W} height={220} rx={14} fill="#f6f1e7" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} opacity={prog(f, [a, b, c][i], 12)} />)}
			<g opacity={prog(f, a, 12)}><Particle cx={W / 2} cy={110} sign="+" r={26} /><text x={W / 2 + 50} y={122} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: INK} as React.CSSProperties}>F = 0</text><text x={20} y={40} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK_SOFT} as React.CSSProperties}>still</text></g>
			<g opacity={prog(f, b, 12)} transform={`translate(${W + gap},0)`}>
				{[60, 380].map(x => <Arrow2 key={x} from={[x, 20]} to={[x, 200]} color={FIELD} width={4} head={16} />)}
				<Particle cx={160} cy={80} sign="+" r={24} /><Arrow2 from={[160, 108]} to={[160, 190]} color={TEAL.stroke} width={6} head={20} />
				<text x={210} y={122} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: INK} as React.CSSProperties}>F = 0</text>
				<text x={90} y={40} style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, fill: INK_SOFT} as React.CSSProperties}>along</text>
			</g>
			<g opacity={prog(f, c, 12)} transform={`translate(${2 * (W + gap)},0)`}>
				<CrossRegion x={10} y={10} w={W - 20} h={200} step={70} border={false} />
				<Particle cx={130} cy={150} sign="+" r={24} /><Arrow2 from={[158, 150]} to={[250, 150]} color={TEAL.stroke} width={6} head={20} />
				<Arrow2 from={[130, 122]} to={[130, 30 - 20 * pulse]} color={AMBER.stroke} width={7 + 3 * pulse} head={22} />
				<text x={270} y={110} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 36, fill: AMBER.ink, paintOrder: 'stroke', stroke: '#fffdf8', strokeWidth: 6} as React.CSSProperties}>F = qvB</text>
			</g>
		</svg>
	);
};
export const S11: React.FC = () => {
	const id = 'memory-aid';
	const still = cue(id, 'still, no force'), along = cue(id, 'Along the field, no force'), across = cue(id, 'Across the field, full force'), qvb = cue(id, 'full force, q v B'), dir = cue(id, 'And for direction');
	const pulse = usePulse(qvb + 20, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 140, top: 190, width: 1640}}>
				<MemoryCard at={still - 20} main={<span>Still or along: no force. <span style={{color: AMBER.ink}}>Across: qvB.</span></span>} picture={<Panels a={still} b={along} c={across} pulse={pulse} />} sub={<Enter at={dir}><span style={{fontSize: 40, color: INK}}>Positive first, then flip for negative.</span></Enter>} />
			</div>
		</>
	);
};
