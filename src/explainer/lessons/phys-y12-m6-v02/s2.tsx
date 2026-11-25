// Scenes 6 to 10: the exit velocity (a large velocity triangle at the exit point, speed in and out), the straight
// line after the plates (true scale at 4 px per mm, the screen 20 cm on, the backward extension to L/2), what
// controls the deflection and the plate hit (the live plate stage: E, L and v_x sliders, each setting its own run
// on the field motion engine, readouts t, y, room and exits or hits), and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, Readouts, Row, Sub} from '../../physics/projectile/board';
import {FieldLines, Particle, PlatePair, Slider} from '../../physics/electromagnetism/plates';
import type {MotionPath} from '../../sims/field-motion';
import {stateAt} from '../../sims/field-motion';
import {FACT, HEAD, HEAD_SIZE, MAIN, RUNS, RUN_IN, RUN_MAIN, SCREEN, cap, cue} from './common';
import {AMBER, BLUE, GREY, Lbl, NAVY, Ring, Stage, Strip, T, TEAL, VIOLET, VecArrow, Trail, RunDot, Strobes, fx, platesFor, sci, toPx} from './parts';
import type {Map} from './parts';

// ---------- 6. the exit velocity ----------
const M6: Map = {x0: 1150, y0: 300, k: 9000};
const G6 = platesFor(M6, MAIN.L, MAIN.d);
export const S06: React.FC = () => {
	const id = 'exit-velocity';
	const f = useCurrentFrame();
	const what = cue(id, "What's its velocity"), horiz = cue(id, 'The horizontal part'), vert = cue(id, 'The vertical part is a times t'), combine = cue(id, 'Combine them with Pythagoras'), faster = cue(id, 'a little faster than'), angle = cue(id, 'The angle above the horizontal'), notice = cue(id, 'Notice that the field'), holdOn = cue(id, 'Hold on to that');
	const O = {x: 160, y: 640}, VX = 600, VY = VX * (MAIN.vy / MAIN.vx);
	const arc = Array.from({length: 21}, (_, i) => { const a = (-(i / 20) * MAIN.th * Math.PI) / 180; return `${i ? 'L' : 'M'}${(O.x + 170 * Math.cos(a)).toFixed(1)},${(O.y + 170 * Math.sin(a)).toFixed(1)}`; }).join(' ');
	const [ex, ey] = toPx(M6, MAIN.L, MAIN.y);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={G6} step={90} />
				<Trail m={M6} path={RUN_IN} t={MAIN.t} width={4} />
				<RunDot m={M6} path={RUN_IN} t={MAIN.t} r={14} />
				<Ring cx={ex} cy={ey} rx={34} ry={34} at={what + 10} color={INK} />
				{f >= horiz ? <VecArrow x={O.x} y={O.y} dx={VX} dy={0} color={TEAL.stroke} width={9} head={26} at={horiz} /> : null}
				{f >= vert ? <VecArrow x={O.x + VX} y={O.y} dx={0} dy={-VY} color={TEAL.stroke} width={7} head={22} at={vert} dash="12 8" /> : null}
				{f >= combine ? <VecArrow x={O.x} y={O.y} dx={VX} dy={-VY} color={TEAL.stroke} width={10} head={28} at={combine} /> : null}
				{f >= angle ? <path d={arc} fill="none" stroke={TEAL.stroke} strokeWidth={4} opacity={prog(f, angle, 12)} /> : null}
				<line x1={O.x} y1={O.y} x2={O.x + VX + 60} y2={O.y} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="8 7" opacity={prog(f, angle, 12)} />
			</FrameSvg>
			<Lbl x={G6.x1} y={G6.yBot + 70} at={what} color={INK} size={28}>the exit point, last time's path</Lbl>
			<Lbl x={O.x + VX / 2} y={O.y + 56} at={horiz + 10} color={TEAL.ink} size={34} anchor="middle">v<Sub>x</Sub> = 3.0 × 10⁷ m s⁻¹</Lbl>
			<Lbl x={O.x + VX + 24} y={O.y - VY / 2 + 10} at={vert + 10} color={TEAL.ink} size={34}>v<Sub>y</Sub></Lbl>
			<Lbl x={O.x + VX / 2 - 40} y={O.y - VY / 2 - 40} at={combine + 10} color={TEAL.ink} size={36} anchor="middle">v</Lbl>
			<Lbl x={O.x + 190} y={O.y - 16} at={angle + 10} color={TEAL.ink} size={34}>θ</Lbl>
			<HandTag x={O.x + 250} y={O.y - 76} text="velocity's angle" at={angle + 20} size={30} color={TEAL.ink} />
			<div style={{position: 'absolute', left: 1000, top: 500, display: 'flex', flexDirection: 'column', gap: 12, width: 824}}>
				<Row at={horiz} ageAt={combine} size={40} oldSize={32}><span style={{color: TEAL.ink}}>v<Sub>x</Sub> = 3.0 × 10⁷ m s⁻¹</span> (unchanged)</Row>
				<Row at={vert} ageAt={combine} size={40} oldSize={32}><span style={{color: TEAL.ink}}>v<Sub>y</Sub> = at = {sci(MAIN.vy)} m s⁻¹</span></Row>
				<Row at={combine} size={42}>v = √(v<Sub>x</Sub>² + v<Sub>y</Sub>²) = <AnswerBox at={faster}><span style={{color: TEAL.ink}}>{sci(MAIN.v)} m s⁻¹</span></AnswerBox></Row>
				<Row at={angle} size={42}>θ = tan⁻¹(v<Sub>y</Sub>/v<Sub>x</Sub>) = <AnswerBox at={angle + 40}><span style={{color: TEAL.ink}}>{fx(MAIN.th, 1)}°</span></AnswerBox></Row>
			</div>
			<Readouts x={96} y={780} w={520} size={44} at={notice} rows={[
				{label: 'in', value: `${sci(MAIN.vx)} m s⁻¹`, color: TEAL.ink},
				{label: 'out', value: `${sci(MAIN.v)} m s⁻¹`, color: TEAL.ink, ring: notice + 20},
			]} />
			<CrossedChip x={680} y={790} at={notice + 10} crossAt={notice + 40} size={30} caption="the field sped it up">same speed in and out</CrossedChip>
			<Chip x={680} y={890} at={cap(id, holdOn)} size={30} border={ORANGE_BORDER} color={INK}>why faster? (next time)</Chip>
		</>
	);
};
const ORANGE_BORDER = '#d0761c';

// ---------- 7. after the plates: a straight line ----------
const M7: Map = {x0: 280, y0: 660, k: 5000};
const G7 = platesFor(M7, MAIN.L, MAIN.d);
const SCREEN_X = M7.x0 + (MAIN.L + SCREEN.D) * M7.k;
export const S07: React.FC = () => {
	const id = 'after-plates';
	const f = useCurrentFrame();
	const once = cue(id, 'Once it leaves the plates'), newton = cue(id, "Newton's first law says"), crt = cue(id, "That's how an old cathode"), screen = cue(id, 'With a screen twenty'), lands = cue(id, 'the electron lands about'), stretch = cue(id, 'Stretch that straight line');
	const t = prog(f, 0, Math.max(40, lands)) * RUN_MAIN.duration;
	const [sx, sy] = toPx(M7, MAIN.L + SCREEN.D, SCREEN.total);
	const [xe, ye] = toPx(M7, MAIN.L, MAIN.y);
	const hit = f >= lands;
	const ext = prog(f, stretch, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Stage g={G7} step={60} />
				<line x1={G7.x1 - 40} y1={M7.y0} x2={SCREEN_X} y2={M7.y0} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 7" />
				<line x1={SCREEN_X} y1={320} x2={SCREEN_X} y2={900} stroke={INK} strokeWidth={8} />
				<Bracket x1={G7.x2} y1={M7.y0 + 120} x2={SCREEN_X} y2={M7.y0 + 120} color={NAVY.stroke} at={-30} label="20 cm past the plates" size={30} ly={M7.y0 + 156} />
				<Trail m={M7} path={RUN_MAIN} t={t} width={5} />
				{!hit ? <RunDot m={M7} path={RUN_MAIN} t={t} r={14} /> : null}
				{hit ? <g opacity={prog(f, lands, 10)}><circle cx={sx} cy={sy} r={26} fill="#fde9a8" opacity={0.9} /><circle cx={sx} cy={sy} r={11} fill={TEAL.stroke} /></g> : null}
				<Bracket x1={SCREEN_X + 40} y1={M7.y0} x2={SCREEN_X + 40} y2={M7.y0 - MAIN.y * M7.k} color={NAVY.stroke} at={lands + 20} />
				<Bracket x1={SCREEN_X + 40} y1={M7.y0 - MAIN.y * M7.k} x2={SCREEN_X + 40} y2={sy} color={NAVY.stroke} at={lands + 30} />
				<Bracket x1={SCREEN_X - 40} y1={M7.y0} x2={SCREEN_X - 40} y2={sy} color={NAVY.stroke} at={lands + 10} />
				{ext > 0 ? <line x1={sx} y1={sy} x2={sx + (M7.x0 + (MAIN.L / 2) * M7.k - sx) * ext} y2={sy + (M7.y0 - sy) * ext} stroke={INK} strokeWidth={3.5} strokeDasharray="12 8" /> : null}
				{ext >= 1 ? <circle cx={M7.x0 + (MAIN.L / 2) * M7.k} cy={M7.y0} r={9} fill={INK} /> : null}
			</FrameSvg>
			<Lbl x={SCREEN_X} y={300} at={-30} color={INK} size={30} anchor="middle">screen</Lbl>
			<HandTag x={SCREEN_X - 60} y={880} text="where does it land?" at={screen} out={lands} size={30} color={NAVY.ink} anchor="end" />
			<Lbl x={SCREEN_X + 56} y={M7.y0 - 4} at={lands + 20} color={NAVY.ink} size={26}>4.9 mm (inside)</Lbl>
			<Lbl x={SCREEN_X + 56} y={(sy + M7.y0) / 2 - 30} at={lands + 30} color={NAVY.ink} size={26}>39 mm (after)</Lbl>
			<Row at={lands + 10} size={44} style={{position: 'absolute', left: SCREEN_X - 250, top: (sy + M7.y0) / 2 - 30}}><AnswerBox at={lands + 24}><span style={{color: NAVY.ink}}>{fx(SCREEN.total * 100, 1)} cm</span></AnswerBox></Row>
			<HandTag x={SCREEN_X + 60} y={sy - 60} text="most of it happens after" at={lands + 40} size={30} color={INK} />
			<Strip x={96} y={190} at={newton} size={32} border={TEAL.stroke} color={TEAL.ink}>no force after the plates: straight (Newton's first law)</Strip>
			<Strip x={96} y={262} at={crt} size={30}>as in an old cathode ray tube: a straight beam to the screen</Strip>
			<HandTag x={(xe + sx) / 2 - 40} y={(ye + sy) / 2 - 50} text="no force: no curve" at={newton + 16} size={30} color={TEAL.ink} />
			<HandTag x={M7.x0 + 40} y={M7.y0 + 170} text="points back to L/2" at={stretch + 30} size={32} color={INK} marks={[{kind: 'arrow', from: [M7.x0 + 110, M7.y0 + 140], to: [M7.x0 + (MAIN.L / 2) * M7.k, M7.y0 + 12], bend: 0.2}]} markAt={stretch + 34} />
			<Lbl x={G7.x1} y={G7.yTop - 80} at={once} color={INK_SOFT} size={26}>true scale: 4 px per mm</Lbl>
		</>
	);
};

// ---------- 8 and 9: the live plate stage ----------
const M8: Map = {x0: 200, y0: 560, k: 12000};
type Live = {E: number; L: number; vx: number; run: MotionPath; free?: MotionPath; at: number};
const LiveStage: React.FC<{s: Live; base?: boolean; protonAt?: number; slowAt?: number}> = ({s, base = false, protonAt = 1e9, slowAt = 1e9}) => {
	const f = useCurrentFrame();
	const g = platesFor(M8, s.L, MAIN.d);
	const t = prog(f, s.at, 40) * s.run.duration;
	const end = stateAt(s.run, s.run.duration);
	const hits = Math.abs(end.y) >= MAIN.d / 2 - 1e-6;
	const [hx, hy] = toPx(M8, end.x, end.y);
	const pP = prog(f, protonAt, 40);
	const protonD = Array.from({length: 41}, (_, i) => { const x = (i / 40) * MAIN.L * pP; const [px, py] = toPx(M8, x, -0.3 * MAIN.y * (x / MAIN.L) ** 2); return `${i ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`; }).join(' ');
	return (
		<g>
			<defs><clipPath id="m6v02-live"><rect x={0} y={170} width={1920} height={800} /></clipPath></defs>
			<FieldLines g={g} step={120} density={s.E / MAIN.E} />
			<PlatePair g={g} />
			{base ? <Trail m={M8} path={RUN_IN} t={MAIN.t} width={3} color={TEAL.stroke} dash="6 7" /> : null}
			{s.free ? <g clipPath="url(#m6v02-live)"><Trail m={M8} path={s.free} t={prog(f, s.at + 30, 40) * s.free.duration} color={GREY.stroke} width={4} dash="10 8" /></g> : null}
			<Trail m={M8} path={s.run} t={t} width={5} />
			{slowAt < 1e9 ? <Strobes m={M8} path={s.run} T={(4 * MAIN.t) / 4} n={4} t={t} /> : null}
			<RunDot m={M8} path={s.run} t={t} r={18} />
			{hits && t >= s.run.duration ? <g>
				{Array.from({length: 8}, (_, i) => { const a = (i * Math.PI) / 4; return <line key={i} x1={hx + 14 * Math.cos(a)} y1={hy + 14 * Math.sin(a)} x2={hx + 30 * Math.cos(a)} y2={hy + 30 * Math.sin(a)} stroke={AMBER.stroke} strokeWidth={4} />; })}
			</g> : null}
			{pP > 0 ? <path d={protonD} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="10 8" /> : null}
		</g>
	);
};
const liveRows = (s: Live, f: number, ringAt = 1e9) => {
	const end = stateAt(s.run, s.run.duration);
	const hits = Math.abs(end.y) >= MAIN.d / 2 - 1e-6 && f >= s.at + 40;
	const yFree = (MAIN.a * (s.E / MAIN.E) * (s.L / s.vx) ** 2) / 2;
	return [
		{label: 't inside', value: `${fx((s.L / s.vx) * 1e9, 2)} ns`},
		{label: 'y', value: hits ? `would be ${fx(yFree * 1000, 1)} mm` : `${fx(yFree * 1000, 2)} mm`, color: NAVY.ink},
		{label: 'room d/2', value: '10 mm', color: NAVY.ink},
		{label: 'result', value: hits ? 'hits' : 'exits', color: INK, ring: ringAt},
	];
};
export const S08: React.FC = () => {
	const id = 'factors';
	const f = useCurrentFrame();
	const put = cue(id, 'Put the steps together'), shows = cue(id, 'That shows what matters'), push = cue(id, 'A stronger field gives'), longer = cue(id, 'Longer plates give more time'), would = cue(id, 'and this electron would hit'), faster = cue(id, 'A faster electron spends'), heavier = cue(id, 'And a heavier particle');
	const E0 = MAIN.E, L0 = MAIN.L, v0 = MAIN.vx;
	const s: Live = f < push ? {E: E0, L: L0, vx: v0, run: RUNS.base, at: -60}
		: f < longer ? {E: 2 * E0, L: L0, vx: v0, run: RUNS.twoE, at: push}
		: f < faster ? {E: E0, L: 2 * L0, vx: v0, run: RUNS.twoL, free: RUNS.twoLfree, at: longer}
		: f < heavier ? {E: E0, L: L0, vx: 2 * v0, run: RUNS.twoV, at: faster}
		: {E: E0, L: L0, vx: v0, run: RUNS.base, at: heavier - 40};
	const end = stateAt(RUNS.twoL, RUNS.twoL.duration);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Row at={put} size={52} style={{position: 'absolute', left: 200, top: 180}}><AnswerBox at={put + 16} tick={false}><span style={{color: NAVY.ink}}>y = qEL²/(2mv<Sub>x</Sub>²)</span></AnswerBox></Row>
			<Row at={put + 20} size={32} style={{position: 'absolute', left: 200, top: 268}}><span style={{color: INK_SOFT}}>from y = ½(qE/m)(L/v<Sub>x</Sub>)²</span></Row>
			<FrameSvg>
				<LiveStage s={s} base={f >= push} protonAt={heavier + 10} />
				<Slider x={200} y={860} w={320} value={(s.E / E0) / 3} color={BLUE.stroke} label="field E" ticks={[[1 / 3, '× 1'], [2 / 3, '× 2']]} />
				<Slider x={600} y={860} w={320} value={(s.L / L0) / 3} color={NAVY.stroke} label="length L" ticks={[[1 / 3, '5 cm'], [2 / 3, '10 cm']]} />
				<Slider x={1000} y={860} w={320} value={0.3 * (s.vx / v0)} color={TEAL.stroke} label={'speed v'} ticks={[[0.3, '3 × 10⁷'], [0.6, '6 × 10⁷']]} />
			</FrameSvg>
			<Readouts x={1440} y={186} w={384} size={36} at={shows} rows={liveRows(s, f, longer + 50)} />
			<Chip x={1440} y={500} w={384} at={push + 20} size={30} border={BLUE.stroke} color={BLUE.ink}>E × 2 → y × 2</Chip>
			<Chip x={1440} y={566} w={384} at={longer + 20} size={30} border={NAVY.stroke} color={NAVY.ink}>L × 2 → y × 4</Chip>
			<Chip x={1440} y={632} w={384} at={faster + 20} size={30} border={TEAL.stroke} color={TEAL.ink}>v × 2 → y ÷ 4</Chip>
			<Chip x={1440} y={698} w={384} at={cap(id, heavier + 20)} size={30} border={GREY.stroke} color={INK}>m larger → y smaller</Chip>
			{f >= longer && f < faster ? <CrossedChip x={760} y={250} at={would} crossAt={would + 30} size={28} caption="the plate is in the way">if there were room: y × 4 = {fx(FACT.twoL * 1000, 1)} mm</CrossedChip> : null}
			{f >= longer && f < faster ? <Lbl x={toPx(M8, end.x, end.y)[0]} y={toPx(M8, end.x, end.y)[1] - 60} at={longer + 40} color={AMBER.ink} size={30} anchor="middle">hits {fx(FACT.twoLhit.x * 100, 2)} cm along</Lbl> : null}
			<HandTag x={360} y={790} text="× 2" at={push + 10} out={longer} size={34} color={BLUE.ink} />
			<HandTag x={760} y={790} text="× 4: time squared" at={longer + 10} out={faster} size={30} color={NAVY.ink} />
			<HandTag x={1160} y={790} text="less time inside" at={faster + 10} out={heavier} size={30} color={TEAL.ink} />
			<Lbl x={M8.x0 + 20} y={M8.y0 + 190} at={heavier + 20} color={INK} size={28}>proton (dashed): bends the other way, far less (drawn enlarged)</Lbl>
		</>
	);
};
export const S09: React.FC = () => {
	const id = 'plate-hit';
	const f = useCurrentFrame();
	const slow = cue(id, 'Now slow the electron'), third = cue(id, 'a third of the speed'), three = cue(id, 'It spends three times'), only = cue(id, "But there's only one"), hits = cue(id, 'So it hits the positive'), check = cue(id, 'To check for a hit'), compare = cue(id, 'compare the deflection');
	const s: Live = f < third ? {E: MAIN.E, L: MAIN.L, vx: MAIN.vx, run: RUNS.base, at: -60} : {E: MAIN.E, L: MAIN.L, vx: 1.0e7, run: RUNS.slow, free: RUNS.slowFree, at: third};
	const [hx] = toPx(M8, FACT.slowHit.x, MAIN.d / 2);
	const g = platesFor(M8, MAIN.L, MAIN.d);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Row at={-30} size={52} style={{position: 'absolute', left: 200, top: 180}}><AnswerBox at={-30} tick={false}><span style={{color: NAVY.ink}}>y = qEL²/(2mv<Sub>x</Sub>²)</span></AnswerBox></Row>
			<FrameSvg>
				<LiveStage s={s} base={f >= third} slowAt={third} />
				<Slider x={200} y={860} w={320} value={1 / 3} color={BLUE.stroke} label="field E" ticks={[[1 / 3, '× 1'], [2 / 3, '× 2']]} />
				<Slider x={600} y={860} w={320} value={1 / 3} color={NAVY.stroke} label="length L" ticks={[[1 / 3, '5 cm'], [2 / 3, '10 cm']]} />
				<Slider x={1000} y={860} w={320} value={0.25 + (0.5 * (s.vx - 1.0e7)) / 2.0e7} color={TEAL.stroke} label="speed v" ticks={[[0.25, '1 × 10⁷'], [0.75, '3 × 10⁷']]} />
				<Bracket x1={g.x1} y1={g.yTop - 70} x2={hx} y2={g.yTop - 70} color={NAVY.stroke} at={hits + 10} />
			</FrameSvg>
			<Row at={hits + 16} size={40} style={{position: 'absolute', left: g.x1 + 20, top: g.yTop - 150}}><AnswerBox at={hits + 26}><span style={{color: NAVY.ink}}>x = {fx(FACT.slowHit.x * 100, 1)} cm</span></AnswerBox></Row>
			<Readouts x={1400} y={186} w={424} size={34} at={-30} rows={[
				{label: f >= third ? 't (if it stayed)' : 't inside', value: f >= third ? `${fx(FACT.slowT * 1e9, 1)} ns` : `${fx(MAIN.t * 1e9, 2)} ns`},
				{label: 'y', value: f >= three ? `would be ${fx(FACT.slow * 1000, 1)} mm` : `${fx(MAIN.y * 1000, 2)} mm`, color: NAVY.ink},
				{label: 'room d/2', value: '10 mm', color: NAVY.ink, ring: only + 10},
				{label: 'result', value: f >= hits ? 'hits' : 'exits', color: INK, ring: hits + 20},
			]} />
			<CrossedChip x={1440} y={560} at={three + 30} crossAt={only + 20} size={28} caption="no room for it">y = {fx(FACT.slow * 1000, 1)} mm</CrossedChip>
			<HandTag x={1150} y={g.yBot + 80} text="3 × slower → 9 × deflection" at={three + 10} size={30} color={TEAL.ink} anchor="middle" />
			<HandTag x={g.x2 + 30} y={g.yTop + 40} text="only 10 mm of room" at={only + 10} size={30} color={NAVY.ink} />
			<Row at={check} size={40} style={{position: 'absolute', left: 760, top: 186}}><AnswerBox at={compare}><span>hits if y ≥ d/2 (centre-line entry)</span></AnswerBox></Row>
			<Lbl x={hx + 40} y={g.yTop - 40} at={hits} color={AMBER.ink} size={28}>hits the + plate</Lbl>
			<Lbl x={M8.x0} y={M8.y0 + 170} at={slow} color={INK_SOFT} size={28}>dashed: the first electron, 3.0 × 10⁷ m s⁻¹</Lbl>
		</>
	);
};

// ---------- 10. memory aid ----------
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const remember = cue(id, 'To remember it'), sign = cue(id, "and let the charge's sign"), along = cue(id, 'Along the plates, steady'), across = cue(id, 'Across the plates, speeding'), clock = cue(id, 'One clock for both');
	const par = (dir: 1 | -1, x0: number, y0: number) => Array.from({length: 21}, (_, i) => { const x = x0 + i * 12; return `${i ? 'L' : 'M'}${x},${(y0 - dir * ((i / 20) ** 2) * 110).toFixed(1)}`; }).join(' ');
	return (
		<div style={{position: 'absolute', left: 200, top: 170, width: 1520, opacity: prog(f, remember - 10, 12)}}>
			<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 14px 32px rgba(60,45,20,0.10)`, padding: '26px 44px 34px'}}>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42, color: INK_SOFT}}>Memory aid</div>
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 72, color: INK, lineHeight: 1.1}}>Swap g for <span style={{color: VIOLET.ink}}>qE/m</span>. <span style={{opacity: prog(f, sign, 12)}}>The sign chooses the direction.</span></div>
				<div style={{display: 'flex', gap: 40, alignItems: 'center', marginTop: 18}}>
					<svg width={620} height={260}>
						<g opacity={prog(f, sign, 14)}>
							<path d={par(1, 40, 180)} fill="none" stroke={TEAL.stroke} strokeWidth={6} />
							<Particle cx={40} cy={180} sign="−" r={18} />
							<T x={150} y={240} size={30} anchor="middle" color={INK}>− charge</T>
							<path d={par(-1, 340, 70)} fill="none" stroke={TEAL.stroke} strokeWidth={6} />
							<Particle cx={340} cy={70} sign="+" r={18} />
							<T x={450} y={240} size={30} anchor="middle" color={INK}>+ charge</T>
						</g>
					</svg>
					<div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: TEAL.ink, opacity: prog(f, along, 12)}}>along the plates: v<sub>x</sub> steady</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: VIOLET.ink, opacity: prog(f, across, 12)}}>across: v<sub>y</sub> growing</div>
						<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 48, color: INK, opacity: prog(f, clock, 12)}}>one clock for both</div>
					</div>
				</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 34, color: INK_SOFT, marginTop: 8}}>Projectile: a = g, down. Charge between plates: a = qE/m, direction set by the sign of q.</div>
			</div>
		</div>
	);
};
