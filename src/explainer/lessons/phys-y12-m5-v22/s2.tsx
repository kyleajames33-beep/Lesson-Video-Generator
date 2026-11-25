// Scenes 6 to 10: the worked energies (full-width working with a two-column table), where the energy went (the
// flow strip: the engines and the lost kinetic energy fill the U box half each), the burn is a moment and the
// circle is a state (the raise run with bars that keep E fixed while coasting, and the thrown-ball inset), the
// same trade on an ellipse (the comet with K and U trading under a fixed E), and the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, FONT_HAND, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {stateAt} from '../../sims/field-motion';
import {AUYR_KMS, GM_AU, RUN_TEACH, TEACH} from '../phys-y12-m5-v20/common';
import {ellipseD, head} from '../phys-y12-m5-v20/parts';
import type {View} from '../phys-y12-m5-v20/parts';
import {DE, DK, DU, E, GM, GMm, HEAD, HEAD_SIZE, K, R1, R2, RAISE, SLIP6, T1, T2, TB1, TB2, U, V1, V2, cue, mono, raiseEnergy} from './common';
import {BallSvg, Bars, Comet, Earth, GREEN, GREY, Lbl, NAVY, ORANGE, OrbitCircles, P, Ring, Satellite, SpeedBar, Sun, T, TEAL, VIOLET, VecArrow, Zero, fx, sci} from './parts';
import type {St} from './parts';
import {Raise, Strip} from './s1';

const Givens: React.FC<{x: number; y: number; w: number; at: number; lines: React.ReactNode[]; size?: number}> = ({x, y, w, at, lines, size = 32}) => (
	<Enter at={at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '6px 22px 10px'}}>
			{lines.map((t, i) => <div key={i} style={{...DISPLAY(size, NAVY.ink, 800)}}>{t}</div>)}
		</div>
	</Enter>
);
const Cell: React.FC<{at: number; children: React.ReactNode; color?: string; size?: number}> = ({at, children, color = INK, size = 40}) => {
	const o = prog(useCurrentFrame(), at, 12);
	return <div style={{...DISPLAY(size, color, 800), opacity: o}}>{children}</div>;
};

// ---------- 6. worked example: the satellite's energies ----------
export const S06: React.FC = () => {
	const id = 'worked-energies';
	const f = useCurrentFrame();
	const gmm = cue(id, 'Big G M m is'), at7 = cue(id, 'At seven times'), kin = cue(id, 'the kinetic energy is'), pot = cue(id, 'the potential energy is'), tot = cue(id, 'and the total is'), dbl = cue(id, 'Double the radius'), halves = cue(id, 'every value halves'), falls = cue(id, 'So the kinetic energy falls'), twice = cue(id, 'rises by twice'), trises = cue(id, 'and the total rises'), rise = cue(id, 'That rise is');
	// The current working: one stage at a time.
	const step = f < kin ? 0 : f < pot ? 1 : f < tot ? 2 : f < dbl ? 3 : f < falls ? 4 : 5;
	const lines: [React.ReactNode, React.ReactNode][] = [
		[<>GMm = {sci(GM, 3)} × 500</>, <>= {sci(GMm, 3)} J m</>],
		[<><span style={{color: ORANGE.ink}}>K₁ = GMm/2r₁</span> = {sci(GMm, 3)} / {sci(2 * R1, 1)}</>, <>= {sci(K(R1))} J</>],
		[<><span style={{color: VIOLET.ink}}>U₁ = −GMm/r₁</span> = −{sci(GMm, 3)} / {sci(R1, 1)}</>, <>= {sci(U(R1))} J</>],
		[<><span style={{color: NAVY.ink}}>E₁ = K₁ + U₁</span> = {sci(K(R1))} + ({sci(U(R1))})</>, <>= {sci(E(R1))} J</>],
		[<>r₂ = 2r₁, and every energy has r on the bottom</>, <>so every value halves</>],
		[<>change = value at r₂ − value at r₁</>, <>(final minus initial)</>],
	];
	const stepAt = [gmm, kin, pot, tot, dbl, falls][step];
	const COL = {lab: 640, c1: 760, c2: 1300};
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={176} at={-30} size={32}>Find K, U and E at r₁ = 7.0 × 10⁶ m and r₂ = 1.4 × 10⁷ m (m = 500 kg).</Strip>
			<Strip x={96} y={246} at={-20} size={34}><span style={{color: ORANGE.ink, marginRight: 36}}>K = GMm/2r</span><span style={{color: VIOLET.ink, marginRight: 36}}>U = −GMm/r</span><span style={{color: NAVY.ink}}>E = K + U</span></Strip>
			<Givens x={96} y={330} w={500} at={-10} lines={[`GM = ${sci(GM, 3)} m³ s⁻²`, 'm = 500 kg', `r₁ = ${sci(R1, 1)} m`, `r₂ = ${sci(R2, 1)} m`, <span key="g" style={{opacity: prog(f, gmm + 30, 12)}}>GMm = {sci(GMm, 3)} J m</span>]} />
			<div key={step} style={{position: 'absolute', left: COL.lab, top: 330, width: 1184}}>
				<Row at={stepAt} size={42}>{lines[step][0]}</Row>
				<Row at={stepAt + 24} size={42} style={{marginLeft: 40}}>{lines[step][1]}</Row>
			</div>
			{/* the table */}
			<div style={{position: 'absolute', left: COL.lab, top: 480, width: 1184, borderTop: `3px solid ${INK_SOFT}`, opacity: prog(f, at7, 12)}}>
				<div style={{display: 'grid', gridTemplateColumns: '120px 540px 524px', rowGap: 6, paddingTop: 8}}>
					<div />
					<Cell at={at7} color={NAVY.ink} size={34}>r₁ = 7.0 × 10⁶ m</Cell>
					<Cell at={dbl} color={NAVY.ink} size={34}>r₂ = 1.4 × 10⁷ m</Cell>
					<Cell at={kin} color={ORANGE.ink}>K</Cell><Cell at={kin + 30}>{sci(K(R1))} J</Cell><Cell at={halves + 10}>{sci(K(R2))} J</Cell>
					<Cell at={pot} color={VIOLET.ink}>U</Cell><Cell at={pot + 30}>{sci(U(R1))} J</Cell><Cell at={halves + 22}>{sci(U(R2))} J</Cell>
					<Cell at={tot} color={NAVY.ink}>E</Cell><Cell at={tot + 30}>{sci(E(R1))} J</Cell><Cell at={halves + 34}>{sci(E(R2))} J</Cell>
				</div>
			</div>
			<HandTag x={1610} y={556} text="K halves" at={halves + 14} size={30} color={ORANGE.ink} />
			<HandTag x={1610} y={612} text="U halves" at={halves + 26} size={30} color={VIOLET.ink} />
			<CrossedChip x={COL.lab} y={740} at={tot + 50} crossAt={tot + 80} out={dbl} size={30} caption="U is negative">E = {sci(K(R1))} + {sci(-U(R1))} = {sci(SLIP6)} J</CrossedChip>
			<div style={{position: 'absolute', left: COL.lab, top: 740, display: 'flex', flexDirection: 'column', gap: 6}}>
				<div style={{display: 'flex', gap: 50}}>
					<Row at={falls + 20} size={38}><span style={{color: ORANGE.ink}}>ΔK = {sci(DK)} J</span></Row>
					<Row at={twice} size={38}><span style={{color: VIOLET.ink}}>ΔU = +{sci(DU)} J</span></Row>
				</div>
				<Row at={trises} size={52}><AnswerBox at={trises + 30}><span style={{color: NAVY.ink}}>ΔE = +{sci(DE)} J</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<Ring cx={COL.lab + 250} cy={848} rx={290} ry={58} at={trises + 50} color={NAVY.stroke} />
				<OrbitCircles st={{cx: 330, cy: 800, k: 140 / R2}} r1={R1} r2={R2} />
				<Satellite cx={330 + R1 * (140 / R2)} cy={800} w={54} rotate={90} opacity={1 - prog(f, dbl, 20)} />
				<Satellite cx={330 + 140} cy={800} w={64} rotate={90} opacity={prog(f, dbl, 20)} />
			</FrameSvg>
			<Lbl x={330 + R1 * (140 / R2) - 20} y={800 - 30} at={at7} color={NAVY.ink} anchor="end" size={28}>r₁</Lbl>
			<Lbl x={330 + 150} y={680} at={dbl} color={NAVY.ink} size={28}>r₂ = 2r₁</Lbl>
			<HandTag x={COL.lab + 600} y={860} text="supplied by the engines" at={rise} size={32} color={GREEN.ink} />
			<Lbl x={96} y={610} at={-10} color={GREY.ink} size={28}>(GM from data sheet G and M)</Lbl>
		</>
	);
};

// ---------- 7. where the energy went: the flow strip ----------
const ST7: St = {cx: 290, cy: 590, k: 210 / R2};
export const S07: React.FC = () => {
	const id = 'where-it-went';
	const f = useCurrentFrame();
	const where = cue(id, "So here's where"), rose = cue(id, 'rose by'), half = cue(id, 'Half of that'), eng = cue(id, 'from the engines'), other = cue(id, 'The other half'), lost = cue(id, 'lost'), paid = cue(id, 'So the engines paid'), own = cue(id, 'own speed'), higher = cue(id, 'A higher orbit');
	const t = kf(f, mono([[0, 0], [half, TB1], [lost + 20, TB2], [lost + 200, TB2 + 0.25 * T2]], 8), false);
	const g1 = prog(f, eng, 40), g2 = prog(f, lost, 40);
	const BOX = {x: 1400, y: 300, w: 330, h: 440};
	const fillH = BOX.h * 0.5 * (g1 + g2);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={ST7.cx} cy={ST7.cy} r={R1 * ST7.k} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
				<circle cx={ST7.cx} cy={ST7.cy} r={R2 * ST7.k} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
				<Earth cx={ST7.cx} cy={ST7.cy} d={2 * 6.371e6 * ST7.k} />
				<Raise st={ST7} t={t} satW={70} />
				<rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} fill={CARD} stroke={VIOLET.stroke} strokeWidth={5} rx={12} opacity={prog(f, rose, 12)} />
				<rect x={BOX.x + 6} y={BOX.y + BOX.h - Math.min(BOX.h * 0.5, BOX.h * 0.5 * g1)} width={BOX.w - 12} height={Math.max(0, BOX.h * 0.5 * g1 - 6)} fill="#cfe9cf" />
				<rect x={BOX.x + 6} y={BOX.y + BOX.h * 0.5 - BOX.h * 0.5 * g2 + 6} width={BOX.w - 12} height={Math.max(0, BOX.h * 0.5 * g2 - 6)} fill="#f6d2b4" />
				{fillH > 0 ? <line x1={BOX.x} y1={BOX.y + BOX.h - fillH} x2={BOX.x + BOX.w} y2={BOX.y + BOX.h - fillH} stroke={VIOLET.stroke} strokeWidth={4} /> : null}
				<line x1={BOX.x - 10} y1={BOX.y + BOX.h / 2} x2={BOX.x + BOX.w + 10} y2={BOX.y + BOX.h / 2} stroke={INK_SOFT} strokeWidth={2} strokeDasharray="6 6" opacity={prog(f, half, 12)} />
				{f >= eng ? <VecArrow x={1190} y={600} dx={200} dy={0} color={GREEN.stroke} width={10} head={28} at={eng} dur={20} /> : null}
				{f >= lost ? <VecArrow x={1190} y={400} dx={200} dy={0} color={ORANGE.stroke} width={10} head={28} at={lost} dur={20} /> : null}
				<Ring cx={BOX.x + BOX.w / 2} cy={BOX.y + BOX.h / 2} rx={BOX.w / 2 + 40} ry={BOX.h / 2 + 30} at={paid + 10} color={VIOLET.stroke} />
			</FrameSvg>
			<Lbl x={BOX.x + BOX.w / 2} y={BOX.y - 30} at={rose} color={VIOLET.ink} anchor="middle" size={44}>ΔU = +{sci(DU)} J</Lbl>
			<Lbl x={BOX.x + BOX.w / 2} y={BOX.y + BOX.h + 44} at={rose} color={VIOLET.ink} anchor="middle" size={30}>the climb: U rises</Lbl>
			<Strip x={690} y={560} at={eng} size={34} border={GREEN.stroke} color={GREEN.ink} w={500}>engines: +{sci(-DK)} J</Strip>
			<Strip x={690} y={360} at={other} size={34} border={ORANGE.stroke} color={ORANGE.ink} w={500}>kinetic energy lost: {sci(-DK)} J</Strip>
			<HandTag x={700} y={700} text="half from the engines" at={eng + 20} size={32} color={GREEN.ink} />
			<HandTag x={700} y={300} text="half from its own speed" at={own} size={32} color={ORANGE.ink} />
			<Lbl x={96} y={900} at={where} color={GREY.ink} size={28}>the satellite climbs from r₁ to r₂</Lbl>
			<Row at={paid} size={34} style={{position: 'absolute', left: 690, top: 800, width: 640}}><span style={{color: GREEN.ink}}>{sci(-DK)}</span> + <span style={{color: ORANGE.ink}}>{sci(-DK)}</span></Row>
			<Row at={paid + 20} size={34} style={{position: 'absolute', left: 690, top: 850, width: 640}}>= <span style={{color: VIOLET.ink}}>{sci(DU)} J</span> (the rise in U)</Row>
			<Chip x={690} y={186} at={higher} size={34} border={INK} color={INK}>into height ✓</Chip>
			<CrossedChip x={1000} y={176} at={higher} crossAt={higher + 16} size={32}>into speed</CrossedChip>
		</>
	);
};

// ---------- 8. the burn is a moment, the circle is a state ----------
const ST8: St = {cx: 400, cy: 580, k: 300 / R2};
const B8 = {x: 790, y0: 520, s: 150 / K(R1)};
export const S08: React.FC = () => {
	const id = 'burn-vs-state';
	const f = useCurrentFrame();
	const faster = cue(id, 'make it faster'), moment = cue(id, 'moment of the burn'), isnt = cue(id, "isn't on a circle"), coasts = cue(id, 'coasts outwards'), ball = cue(id, 'like a ball thrown'), slows = cue(id, 'slows as it climbs'), trading = cue(id, 'trading kinetic'), reaches = cue(id, 'When it reaches'), second = cue(id, 'a second burn'), only = cue(id, 'Only that final');
	const t = kf(f, mono([[0, TB1 - 0.35 * T1], [moment, TB1], [coasts, TB1 + 0.05 * (TB2 - TB1)], [second, TB2], [second + 220, TB2 + 0.3 * T2]], 8), false);
	const en = raiseEnergy(t);
	const onCircle = t < TB1 || t >= TB2;
	// The thrown ball inset: up at 20 units/s, g 10, in about 150 frames (4 s), with strobe images every 0.4 s.
	const tb = Math.max(0, Math.min(4, (f - ball) / 30));
	const by = (tt: number) => 20 * tt - 5 * tt * tt;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<OrbitCircles st={ST8} r1={R1} r2={R2} />
				<Raise st={ST8} t={t} satW={96} flash1={f >= moment ? 1 - prog(f, moment + 30, 14) : 0} flash2={f >= second ? 1 - prog(f, second + 30, 14) : 0} />
				<Zero x1={B8.x - 20} x2={B8.x + 240} y={B8.y0} />
				<Bars x={B8.x} y0={B8.y0} s={B8.s} k={en.k} u={en.u} e={en.e} w={56} gap={16} size={30} />
				<SpeedBar x={1110} y={B8.y0} h={300} kms={en.v / 1000} vMax={10} />
				<Ring cx={B8.x + 2 * 72 + 28} cy={B8.y0 - en.e * B8.s / 2} rx={50} ry={-en.e * B8.s / 2 + 30} at={trading + 10} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={B8.x + 100} y={B8.y0 - 230} at={-30} color={INK_SOFT} anchor="middle" size={28}>the satellite now</Lbl>
			<Readouts x={1240} y={176} w={584} size={44} at={-20} rows={[{label: 'speed', value: onCircle ? `${fx(en.v / 1000, 2)} km s⁻¹` : 'changing', color: TEAL.ink}]} />
			<HandTag x={1100} y={590} text="fast for a moment" at={moment + 10} out={slows} size={30} color={TEAL.ink} anchor="middle" />
			<HandTag x={1100} y={590} text="slows as it climbs" at={slows + 8} out={reaches} size={30} color={TEAL.ink} anchor="middle" />
			<Lbl x={1240} y={330} at={faster} out={moment} color={TEAL.ink} size={32}>the engine did make it faster...</Lbl>
			<Strip x={1240} y={290} at={moment} out={second} size={30} w={584} border={GREEN.stroke} color={INK}>just after burn 1: faster, more total energy, not yet circular</Strip>
			<HandTag x={1240} y={436} text="not on a circle any more" at={isnt} out={ball} size={30} color={TEAL.ink} />
			<HandTag x={B8.x - 40} y={900} text="coasting: E stays the same" at={coasts + 10} size={30} color={NAVY.ink} />
			<Lbl x={B8.x + 170} y={B8.y0 + 60} at={trading} out={reaches} color={INK} size={30}>K → U</Lbl>
			<Enter at={ball} out={second} style={{position: 'absolute', left: 1240, top: 470, width: 584}}>
				<div style={{background: CARD, border: '2.5px solid rgba(60,45,20,0.2)', borderRadius: 16, padding: '8px 18px'}}>
					<div style={{...DISPLAY(30, INK, 800)}}>like a ball thrown upwards</div>
					<svg width={548} height={250} style={{overflow: 'visible'}}>
						<line x1={20} y1={230} x2={528} y2={230} stroke={INK} strokeWidth={4} />
						<VecArrow x={150} y={222} dx={0} dy={-60} color={TEAL.stroke} width={6} head={16} at={ball} />
						{[0.4, 0.8, 1.2, 1.6, 2.0].filter(s => s < tb).map(s => <g key={s} opacity={0.35}><BallSvg cx={220} cy={210 - by(s) * 9} d={30} /></g>)}
						<BallSvg cx={220} cy={210 - by(tb) * 9} d={36} />
						<T x={280} y={60} size={28} color={TEAL.ink}>slows as it climbs</T>
					</svg>
				</div>
			</Enter>
			<Strip x={1240} y={500} at={second} size={30} w={584} border={GREEN.stroke} color={INK}>burn 2: speeds it up into the new circle</Strip>
			<div style={{position: 'absolute', left: 1240, top: 620, display: 'flex', flexDirection: 'column', gap: 12}}>
				<Row at={only} size={40}><AnswerBox at={only + 8} tick={false}><span>start: circle, {fx(V1 / 1000, 2)} km s⁻¹</span></AnswerBox></Row>
				<Row at={only + 16} size={40}><AnswerBox at={only + 24} tick={false}><span>end: circle, <MarkSpan kind="circle" at={only + 40} color={TEAL.stroke}>{fx(V2 / 1000, 2)}</MarkSpan> km s⁻¹</span></AnswerBox></Row>
			</div>
			<Lbl x={96} y={930} at={-30} color={GREY.ink} size={28}>one engine run with two short burns</Lbl>
		</>
	);
};

// ---------- 9. the same trade on an ellipse ----------
const VW: View = {sx: 300, sy: 570, k: 330};
const B9 = {x: 1000, y0: 520, s: 280 / (GM_AU / TEACH.rp)};
export const S09: React.FC = () => {
	const id = 'ellipse-energy';
	const f = useCurrentFrame();
	const same = cue(id, 'The same trade'), withNo = cue(id, 'With no engines'), constant = cue(id, 'stays constant'), falls = cue(id, 'falls in towards'), drops = cue(id, 'potential energy drops'), rises = cue(id, 'kinetic energy rises'), speeds = cue(id, 'speeds up'), kepler = cue(id, "Kepler's second law"), far = cue(id, 'Far from the Sun'), nothing = cue(id, 'Nothing is lost');
	const P = Math.max(120, 2 * (speeds - falls));
	const tC = TEACH.T / 2 + ((f - falls) / P) * TEACH.T;
	const hd = head(VW, RUN_TEACH, ((tC % TEACH.T) + TEACH.T) % TEACH.T + TEACH.T);
	const v = hd.kms / AUYR_KMS;
	const k = 0.5 * v * v, u = -GM_AU / hd.r, e = -GM_AU / (2 * TEACH.a);
	const away: [number, number] = [hd.x - VW.sx, hd.y - VW.sy];
	const dd = Math.hypot(away[0], away[1]) || 1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<path d={ellipseD(VW, TEACH.a, TEACH.e)} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="12 9" />
				<Sun cx={VW.sx} cy={VW.sy} d={90} />
				<Comet x={hd.x} y={hd.y} w={300} away={[away[0] / dd, away[1] / dd]} />
				<circle cx={hd.x} cy={hd.y} r={6} fill={INK} />
				<Zero x1={B9.x - 20} x2={B9.x + 240} y={B9.y0} />
				<Bars x={B9.x} y0={B9.y0} s={B9.s} k={k} u={u} e={e} w={56} gap={16} size={30} />
				<SpeedBar x={1320} y={800} h={260} kms={hd.kms} vMax={TEACH.vpKms} />
				<Ring cx={B9.x + 2 * 72 + 28} cy={B9.y0 - (e * B9.s) / 2} rx={50} ry={(-e * B9.s) / 2 + 28} at={constant + 10} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={VW.sx} y={VW.sy + 90} at={-30} color={INK} anchor="middle" size={30}>Sun</Lbl>
			<Lbl x={VW.sx + 200} y={900} at={-30} color={GREY.ink} size={28}>an ellipse from last time</Lbl>
			<Lbl x={B9.x + 100} y={B9.y0 - 250} at={-30} color={INK_SOFT} anchor="middle" size={28}>the comet now (per kg)</Lbl>
			<Row at={same} size={36} style={{position: 'absolute', left: 1440, top: 186, width: 384, whiteSpace: 'normal'}}>any ellipse: the same trade</Row>
			<Chip x={1440} y={300} at={withNo} size={30} w={384} border={NAVY.stroke} color={NAVY.ink}>E constant (no thrust, no air)</Chip>
			<HandTag x={1440} y={430} text="U down" at={drops} size={32} color={VIOLET.ink} />
			<HandTag x={1600} y={430} text="K up" at={rises} size={32} color={ORANGE.ink} />
			<Lbl x={1440} y={500} at={speeds} color={TEAL.ink} size={32}>near the Sun: fast</Lbl>
			<Lbl x={1440} y={550} at={far} color={TEAL.ink} size={32}>far away: crawls</Lbl>
			<Chip x={1440} y={600} at={kepler} size={30} w={384} border={TEAL.stroke} color={TEAL.ink}>Kepler's 2nd law: fast when near (last time)</Chip>
			<Row at={nothing} size={34} style={{position: 'absolute', left: 1440, top: 760, width: 384, whiteSpace: 'normal'}}>nothing lost: energy changes form</Row>
		</>
	);
};

// ---------- 10. memory aid ----------
const ST10: St = {cx: 280, cy: 580, k: 210 / R2};
export const MirrorBars: React.FC<{x: number; y0: number; s: number; at?: number; w?: number; labels?: boolean; size?: number}> = ({x, y0, s, at = -60, w = 60, labels = true, size = 30}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	return (
		<g opacity={o}>
			<line x1={x - 20} y1={y0} x2={x + 400} y2={y0} stroke={INK} strokeWidth={4} />
			{[R1, R2].map((r, i) => { const bx = x + i * 220, h = K(r) * s; return (
				<g key={i}>
					<rect x={bx} y={y0 - h} width={w} height={h} fill="#f6d2b4" stroke={ORANGE.stroke} strokeWidth={3} />
					<rect x={bx + w + 14} y={y0} width={w} height={h} fill={NAVY.soft} stroke={NAVY.stroke} strokeWidth={5} />
					{labels ? <><T x={bx + w / 2} y={y0 - h - 10} size={size} anchor="middle" color={ORANGE.ink}>K</T><T x={bx + w * 1.5 + 14} y={y0 + h + size + 4} size={size} anchor="middle" color={NAVY.ink}>E</T></> : null}
				</g>
			); })}
		</g>
	);
};
export const S10: React.FC = () => {
	const id = 'memory-aid';
	const f = useCurrentFrame();
	const short = cue(id, "Here's the shortcut"), minus = cue(id, 'minus the kinetic'), slower = cue(id, 'So slower means'), higher = cue(id, 'Higher is slower'), costs = cue(id, 'higher costs more'), between = cue(id, 'And between two circles'), lose = cue(id, 'you lose always');
	const a = stateAt(RAISE, kf(f, mono([[higher, 0.5 * T1], [costs + 40, TB2 + 0.05 * T2]], 8), false));
	const [ax, ay] = P(ST10, a.x, a.y);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<OrbitCircles st={ST10} r1={R1} r2={R2} />
				<Satellite cx={ax} cy={ay} w={70} rotate={(Math.atan2(ay - ST10.cy, ax - ST10.cx) * 180) / Math.PI + 90} />
				<MirrorBars x={600} y0={560} s={150 / K(R1)} at={minus} />
			</FrameSvg>
			<Lbl x={630} y={330} at={minus} color={NAVY.ink} anchor="middle" size={30}>r₁</Lbl>
			<Lbl x={850} y={330} at={minus} color={NAVY.ink} anchor="middle" size={30}>r₂</Lbl>
			<HandTag x={600} y={800} text="mirror images" at={minus + 20} size={30} color={NAVY.ink} />
			<Lbl x={96} y={900} at={short} color={GREY.ink} size={28}>circular orbits only</Lbl>
			<Enter at={short} style={{position: 'absolute', left: 1000, top: 186, width: 824}}>
				<div style={{background: CARD, border: `4px solid ${INK}`, borderRadius: 24, boxShadow: `inset 0 0 0 8px ${CARD}, inset 0 0 0 10.5px ${INK}, 0 10px 26px rgba(60,45,20,0.12)`, padding: '18px 34px 22px'}}>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand, color: INK_SOFT}}>Memory aid</div>
					<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52, lineHeight: 1.12}}>
						<div style={{color: NAVY.ink, opacity: prog(f, minus, 12)}}>In a circle, E = −K.</div>
						<div style={{color: ORANGE.ink, opacity: prog(f, costs, 12)}}>Higher is slower, but higher costs more.</div>
					</div>
				</div>
			</Enter>
			<Row at={slower} size={38} style={{position: 'absolute', left: 1000, top: 560, width: 824, whiteSpace: 'normal'}}>slower (smaller K) means more total energy</Row>
			<Row at={between} size={36} style={{position: 'absolute', left: 1000, top: 660, width: 824, whiteSpace: 'normal'}}>between two circles: kinetic energy lost = energy supplied</Row>
			<Row at={lose} size={40} style={{position: 'absolute', left: 1000, top: 770}}><span style={{color: ORANGE.ink}}>{sci(-DK)} J</span> = <span style={{color: GREEN.ink}}>{sci(DE)} J</span></Row>
		</>
	);
};
