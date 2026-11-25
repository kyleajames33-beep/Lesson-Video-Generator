// Scenes 1 to 5: the orbit raise (opening on last time's frame; one field motion run with two short burns, a
// live teal speed bar), kinetic energy (algebra column with small bars), potential energy (the U bars twice as
// deep), total energy (the bars at full height, E = -K) and the three curves with the radius marker.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, INK_SOFT} from '../../shared/tokens';
import {AnswerBox, Chip, DISPLAY, Readouts, Row} from '../../physics/projectile/board';
import {stateAt, trailTo} from '../../sims/field-motion';
import {V21FinalFrame} from '../phys-y12-m5-v21/s3';
import {E, HEAD, HEAD_SIZE, K, R1, R2, RAISE, RE, RUN1, RUN2, TB1, TB2, T2, U, V1, V2, cue, holdIf, mono, ratioV} from './common';
import {Axes3, Bars, Earth, GREEN, GREY, Lbl, NAVY, ORANGE, OrbitCircles, P, Ring, SLATE, Satellite, SpeedBar, T, TEAL, VIOLET, VecArrow, Zero, curve3, fx, g3x, g3y, satDeg} from './parts';
import type {G3, St} from './parts';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const card: React.CSSProperties = {background: CARD, borderRadius: 18, boxShadow: '0 10px 26px rgba(60,45,20,0.12)', padding: '10px 24px 14px', border: '2.5px solid rgba(60,45,20,0.16)'};
export const Strip: React.FC<{x: number; y: number; at: number; w?: number; children: React.ReactNode; size?: number; border?: string; color?: string; bg?: string; out?: number}> = ({x, y, at, w, children, size = 34, border = 'rgba(60,45,20,0.16)', color = INK, bg = CARD, out}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: '6px 20px 8px', ...DISPLAY(size, color, 800), whiteSpace: 'normal'}}>{children}</div>
	</Enter>
);

// ---------- the orbit raise (scenes 1 and 8) ----------
/** The raise run drawn on a stage at run time t: the dashed transfer path so far, the satellite plate, and a
 * short green thrust arrow along the velocity for a moment after each burn. */
export const Raise: React.FC<{st: St; t: number; satW?: number; flash1?: number; flash2?: number}> = ({st, t, satW = 60, flash1 = 0, flash2 = 0}) => {
	const s = stateAt(RAISE, t);
	const [x, y] = P(st, s.x, s.y);
	const ux = s.vx / s.speed, uy = -s.vy / s.speed;
	const path = t > TB1 ? trailTo(RAISE, Math.min(t, TB2), 200).filter((_, i, a) => i >= Math.floor((TB1 / Math.min(t, TB2)) * (a.length - 1))).map(([a, b]) => P(st, a, b)) : [];
	const d = path.map(([a, b], i) => `${i ? 'L' : 'M'}${a.toFixed(1)},${b.toFixed(1)}`).join(' ');
	const fl = Math.max(flash1, flash2);
	return (
		<g>
			{path.length > 1 ? <path d={d} fill="none" stroke={TEAL.stroke} strokeWidth={4} strokeDasharray="12 9" /> : null}
			{fl > 0 ? <VecArrow x={x + ux * 34} y={y + uy * 34} dx={ux * 90 * fl} dy={uy * 90 * fl} color={GREEN.stroke} width={8} head={22} /> : null}
			<Satellite cx={x} cy={y} w={satW} rotate={satDeg(st, x, y)} />
		</g>
	);
};
/** Burn flash: 1 for a moment after the burn frame, then fades. */
const flash = (f: number, at: number) => (f < at ? 0 : 1 - prog(f, at + 24, 14));

// ---------- 1. hook: where did the energy go? ----------
const HO = {cx: 440, cy: 590};
const ST1: St = {cx: HO.cx, cy: HO.cy, k: 340 / R2};
const ST1_OLD_K = 170 / 1.6e7;
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const seven = cue(id, 'seven thousand'), point = cue(id, 'seven point five six'), lift = cue(id, 'To lift'), pushes = cue(id, 'pushes it forwards'), speeds = cue(id, 'speeds up'), once = cue(id, 'But once'), twice = cue(id, 'twice as far'), five = cue(id, 'five point three five'), second2 = cue(id, 'second', 2), slower = cue(id, 'slower than'), added = cue(id, 'The engine added'), think = cue(id, 'Have a think');
	const h = holdIf(id);
	if (f < 1) return <V21FinalFrame />;
	const z = prog(f, 1, 36);
	const grow = prog(f, 6, 40);
	const st: St = {...ST1};
	const earthD = 2 * RE * lerp(ST1_OLD_K, ST1.k, grow);
	const tb2f = second2 - 10;
	const t = kf(f, mono([[40, 0], [speeds, TB1], [tb2f, TB2], [tb2f + 240, TB2 + 0.3 * T2]], 6), false);
	const s = stateAt(RAISE, t);
	const onCircle = t < TB1 || t >= TB2;
	const kms = s.speed / 1000;
	return (
		<>
			{z < 1 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - z, clipPath: 'inset(160px 0 0 0)'}}><V21FinalFrame /></div> : null}
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={z}>
					<circle cx={st.cx} cy={st.cy} r={R1 * st.k} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
					<circle cx={st.cx} cy={st.cy} r={R2 * st.k} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" />
					<Earth cx={st.cx} cy={st.cy} d={earthD} />
					<Raise st={st} t={t} satW={92} flash1={flash(f, speeds)} flash2={flash(f, tb2f)} />
					<SpeedBar x={1700} y={560} h={300} kms={kms} vMax={10} />
				</g>
				<Ring cx={1460} cy={300} rx={170} ry={42} at={second2 + 12} color={TEAL.stroke} />
			</FrameSvg>
			<Lbl x={st.cx + R1 * st.k * 0.71 + 10} y={st.cy + R1 * st.k * 0.71 + 40} at={seven} color={NAVY.ink} size={30}>r₁</Lbl>
			<Lbl x={st.cx + R2 * st.k * 0.71 + 6} y={st.cy + R2 * st.k * 0.71 + 30} at={twice} color={NAVY.ink} size={30}>r₂ = 2r₁</Lbl>
			<Strip x={1000} y={176} at={seven} size={32} border={NAVY.stroke} color={NAVY.ink} bg={NAVY.soft}>m = 500 kg | r₁ = 7.0 × 10⁶ m → r₂ = 1.4 × 10⁷ m</Strip>
			<Readouts x={1000} y={256} w={640} size={52} at={point} rows={[
				{label: 'speed', value: onCircle ? `${fx(kms, 2)} km s⁻¹` : 'changing', color: TEAL.ink},
			]} />
			<HandTag x={1020} y={420} text="engine adds energy" at={speeds + 4} size={30} color={GREEN.ink} />
			<HandTag x={1020} y={470} text="faster" at={speeds + 10} out={once} size={32} color={TEAL.ink} />
			<HandTag x={1020} y={470} text="slowing as it climbs" at={once + 10} out={five} size={32} color={TEAL.ink} />
			<HandTag x={1020} y={470} text="slower than this circle needs" at={five} out={second2 + 4} size={32} color={TEAL.ink} />
			<Lbl x={1020} y={490} at={pushes} out={speeds} color={GREEN.ink} size={30}>a short burn: the engine pushes forwards</Lbl>
			<Chip x={1000} y={510} at={slower} size={32} border={SLATE.stroke} color={SLATE.ink}>slower than at the start</Chip>
			<HandTag x={1020} y={470} text={`${fx(V1 / 1000, 2)} → ${fx(V2 / 1000, 2)}`} at={slower + 12} size={32} color={TEAL.ink} />
			<Lbl x={1020} y={380} at={lift} out={pushes} color={INK_SOFT} size={28}>to lift it higher...</Lbl>
			<Enter at={added} style={{position: 'absolute', left: 1000, top: 620, width: 640}}>
				<div style={{...card}}>
					<div style={{...DISPLAY(38, INK, 800), whiteSpace: 'normal'}}>The engine added energy. Where did it go?</div>
					<div style={{display: 'flex', gap: 12, marginTop: 10, flexWrap: 'wrap'}}>
						{['into speed', 'into height', 'it was lost'].map((c, i) => <div key={i} style={{background: '#f1ebdf', border: '2.5px solid rgba(60,45,20,0.16)', borderRadius: 14, padding: '4px 16px 6px', ...DISPLAY(36, INK, 700), opacity: prog(f, added + 16 + i * 8, 10)}}>{c}</div>)}
					</div>
				</div>
			</Enter>
			{h ? <FrameSvg><Countdown start={h.startFrame} end={h.endFrame} x={1740} y={830} r={46} ringFrom={think} /></FrameSvg> : null}
		</>
	);
};

// ---------- 2 and 3: the algebra column with small bars ----------
const ST2: St = {cx: 300, cy: 520, k: 230 / R2};
const SB = {y0: 470, s: 110 / K(R1), x1: 610, x2: 860};
/** The small orbit stage with a satellite going round each circle (one lap of the inner in 300 frames). */
const SmallStage: React.FC<{st?: St}> = ({st = ST2}) => {
	const f = useCurrentFrame();
	const a = stateAt(RUN1, ((f / 300) % 1) * RUN1.duration), b = stateAt(RUN2, ((f / (300 * 2 ** 1.5)) % 1) * RUN2.duration);
	const [ax, ay] = P(st, a.x, a.y), [bx, by] = P(st, b.x, b.y);
	return (
		<g>
			<OrbitCircles st={st} r1={R1} r2={R2} />
			<Satellite cx={ax} cy={ay} w={64} rotate={satDeg(st, ax, ay)} />
			<Satellite cx={bx} cy={by} w={76} rotate={satDeg(st, bx, by)} />
		</g>
	);
};
const SmallBars: React.FC<{kAt: number; uAt?: number}> = ({kAt, uAt = 1e9}) => (
	<g>
		<Zero x1={SB.x1 - 20} x2={SB.x2 + 160} y={SB.y0} opacity={prog(useCurrentFrame(), kAt, 12)} />
		<Bars x={SB.x1} y0={SB.y0} s={SB.s} k={K(R1)} u={U(R1)} e={E(R1)} kAt={kAt} uAt={uAt} eAt={1e9} w={56} gap={16} size={28} />
		<Bars x={SB.x2} y0={SB.y0} s={SB.s} k={K(R2)} u={U(R2)} e={E(R2)} kAt={kAt + 8} uAt={uAt + 8} eAt={1e9} w={56} gap={16} size={28} />
	</g>
);
const BarHeads: React.FC<{at: number}> = ({at}) => (
	<>
		<Lbl x={SB.x1 + 64} y={270} at={at} color={NAVY.ink} anchor="middle" size={30}>r₁</Lbl>
		<Lbl x={SB.x2 + 64} y={270} at={at} color={NAVY.ink} anchor="middle" size={30}>r₂ = 2r₁</Lbl>
	</>
);
/** The build list: K, then U, then E (the current piece in its role colour, the rest grey). */
const BuildList: React.FC<{now: number; at?: number}> = ({now, at = -30}) => {
	const items: [string, string][] = [['1 kinetic K', ORANGE.ink], ['2 potential U', VIOLET.ink], ['3 total E', NAVY.ink]];
	return (
		<Enter at={at} style={{position: 'absolute', left: 300, top: 176, display: 'flex', gap: 10}}>
			{items.map(([t, c], i) => <div key={i} style={{background: i === now ? CARD : '#f1ebdf', border: `2.5px solid ${i === now ? c : 'rgba(60,45,20,0.16)'}`, borderRadius: 12, padding: '2px 12px 4px', ...DISPLAY(26, i <= now ? c : GREY.ink, 800), opacity: i < now ? 0.9 : 1}}>{t}{i < now ? ' ✓' : ''}</div>)}
		</Enter>
	);
};
export const S02: React.FC = () => {
	const id = 'kinetic';
	const f = useCurrentFrame();
	const first = cue(id, 'First, kinetic'), gravity = cue(id, 'gravity supplies'), so = cue(id, 'so v squared'), put = cue(id, 'Put that into'), kin = cue(id, 'the kinetic energy is'), positive = cue(id, "It's positive"), bigger = cue(id, 'gets bigger'), slower = cue(id, 'orbits are slower'), notice = cue(id, 'Notice the'), mass = cue(id, "doesn't cancel");
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SmallStage />
				<SmallBars kAt={bigger} />
				{[[SB.x1, K(R1)], [SB.x2, K(R2)]].map(([x, k], i) => <g key={i} opacity={prog(f, first, 12) * (1 - prog(f, bigger, 12))}><line x1={x - 20} y1={SB.y0} x2={x + 90} y2={SB.y0} stroke={INK} strokeWidth={4} /><rect x={x} y={SB.y0 - k * SB.s} width={56} height={k * SB.s} fill="none" stroke={ORANGE.stroke} strokeWidth={3} strokeDasharray="8 6" /><T x={x + 28} y={SB.y0 - (k * SB.s) / 2 + 12} size={34} anchor="middle" color={ORANGE.ink}>?</T></g>)}
			</FrameSvg>
			<Lbl x={96} y={860} at={-30} color={GREY.ink} size={28}>Earth and both orbits to scale</Lbl>
			<BarHeads at={first} />
			<BuildList now={0} />
			<Lbl x={1000} y={200} at={first} color={ORANGE.ink} size={36}>kinetic energy K</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 250, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={gravity} ageAt={put} size={44} oldSize={34}>GMm/r² = mv²/r</Row>
				<Row at={so} ageAt={put} size={44} oldSize={34}>v² = GM/r</Row>
				<Row at={put} ageAt={kin} size={52} oldSize={38}>K = ½mv² = ½m(GM/r)</Row>
				<Row at={kin} size={60}><AnswerBox at={kin + 14}><span style={{color: ORANGE.ink}}>K = GMm/<MarkSpan kind="circle" at={positive + 10} color={ORANGE.stroke}>2r</MarkSpan></span></AnswerBox></Row>
			</div>
			<HandTag x={1420} y={340} text="from v² = GM/r" at={so + 16} size={30} color={ORANGE.ink} />
			<Row at={positive} size={36} style={{position: 'absolute', left: 1000, top: 680, width: 824, whiteSpace: 'normal'}}><span style={{color: ORANGE.ink}}>K &gt; 0, and smaller when r is bigger</span></Row>
			<HandTag x={SB.x2 + 10} y={560} text="higher: smaller K" at={bigger + 16} size={30} color={ORANGE.ink} />
			<Lbl x={1000} y={790} at={slower} color={TEAL.ink} size={30}>higher orbits are slower (v² = GM/r)</Lbl>
			<Row at={notice} size={34} style={{position: 'absolute', left: 1000, top: 830, width: 824, whiteSpace: 'normal'}}>m does not cancel: energy depends on m</Row>
			<HandTag x={1680} y={830} text="m stays in" at={mass + 6} size={30} color={GREY.ink} />
			<Lbl x={SB.x1 - 10} y={640} at={bigger + 30} color={GREY.ink} size={28}>bars: same scale</Lbl>
		</>
	);
};

export const S03: React.FC = () => {
	const id = 'potential';
	const f = useCurrentFrame();
	const next = cue(id, 'Next, potential'), last = cue(id, 'From last time'), zero = cue(id, 'zero at infinity'), compare = cue(id, 'Compare the sizes'), twice = cue(id, 'twice as big'), negative = cue(id, 'negative'), higher = cue(id, 'Higher up'), less = cue(id, 'less negative'), rises = cue(id, 'so moving out');
	const bx = SB.x1 + 56 + 16 + 56 + 14, top = SB.y0 - K(R1) * SB.s, bot = SB.y0 - U(R1) * SB.s;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SmallStage />
				<SmallBars kAt={-60} uAt={last + 10} />
				{f >= negative ? <g opacity={prog(f, negative, 12)}>
					<line x1={bx} y1={SB.y0} x2={bx} y2={bot} stroke={VIOLET.stroke} strokeWidth={4} />
					<line x1={bx - 10} y1={bot} x2={bx + 10} y2={bot} stroke={VIOLET.stroke} strokeWidth={4} />
					<line x1={bx - 10} y1={SB.y0} x2={bx + 10} y2={SB.y0} stroke={VIOLET.stroke} strokeWidth={4} />
					<line x1={SB.x1 - 14} y1={top} x2={SB.x1 - 14} y2={SB.y0} stroke={ORANGE.stroke} strokeWidth={4} />
				</g> : null}
				<Ring cx={bx - 30} cy={(SB.y0 + bot) / 2} rx={62} ry={(bot - SB.y0) / 2 + 26} at={negative + 16} color={VIOLET.stroke} />
				{f >= rises ? <g>
					<VecArrow x={SB.x2 + 100} y={SB.y0 - U(R1) * SB.s - 6} dx={0} dy={(U(R1) - U(R2)) * SB.s} color={VIOLET.stroke} width={6} head={18} at={rises} />
				</g> : null}
			</FrameSvg>
			<BarHeads at={-60} />
			<BuildList now={1} />
			<Lbl x={96} y={860} at={-30} color={GREY.ink} size={28}>Earth and both orbits to scale</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 200, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={-60} size={38}><span style={{color: ORANGE.ink}}>K = GMm/2r</span></Row>
				<Row at={next} size={36}><span style={{color: VIOLET.ink}}>potential energy U</span></Row>
				<Row at={last} size={52}><span style={{color: VIOLET.ink}}>U = −GMm/r</span> <span style={{...DISPLAY(30, GREY.ink, 700)}}>(last time)</span></Row>
				<Row at={zero} size={34}><span style={{color: GREY.ink}}>zero at infinity</span></Row>
				<Row at={twice} size={44}>|U| = 2K</Row>
			</div>
			<HandTag x={1300} y={575} text="twice as big" at={twice + 10} size={32} color={VIOLET.ink} />
			<Lbl x={bx + 12} y={bot + 40} at={negative} color={VIOLET.ink} size={30}>|U| = 2K</Lbl>
			<HandTag x={SB.x1 - 10} y={760} text="below zero" at={negative + 10} size={30} color={VIOLET.ink} />
			<Lbl x={1000} y={700} at={compare} color={INK_SOFT} size={28}>compare sizes at the same r</Lbl>
			<Row at={higher} size={40} style={{position: 'absolute', left: 1000, top: 740, width: 824, whiteSpace: 'normal'}}><span style={{color: VIOLET.ink}}>higher: U <MarkSpan kind="underline" at={less + 6} color={VIOLET.stroke}>less negative</MarkSpan></span></Row>
			<Row at={rises} size={40} style={{position: 'absolute', left: 1000, top: 810}}>moving out: <span style={{color: VIOLET.ink}}>U rises</span>, <span style={{color: ORANGE.ink}}>K falls</span></Row>
		</>
	);
};

// ---------- 4. total energy: the bars at full height ----------
const FB = {y0: 520, s: 160 / K(R1), x1: 200, x2: 600, w: 70, gap: 20};
export const S04: React.FC = () => {
	const id = 'total';
	const f = useCurrentFrame();
	const add = cue(id, 'Now add them'), gives = cue(id, 'gives a total'), neg = cue(id, "It's negative"), bound = cue(id, 'bound'), key = cue(id, "here's the key"), bigger = cue(id, 'A bigger r'), more = cue(id, 'more total energy'), fact = cue(id, 'In fact'), exactly = cue(id, 'exactly minus'), lose = cue(id, 'Lose speed');
	const ex1 = FB.x1 + 2 * (FB.w + FB.gap), ex2 = FB.x2 + 2 * (FB.w + FB.gap);
	const e1 = FB.y0 - E(R1) * FB.s, e2 = FB.y0 - E(R2) * FB.s;
	const mir = prog(f, lose, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', left: 96, top: 176, display: 'flex', gap: 40, alignItems: 'center'}}>
				<Row at={add} ageAt={gives} size={44} oldSize={36}>E = K + U = GMm/2r − GMm/r</Row>
				<Row at={gives} size={60}><AnswerBox at={gives + 16}><span style={{color: NAVY.ink}}>E = −GMm/2r</span></AnswerBox></Row>
			</div>
			<FrameSvg>
				<Zero x1={FB.x1 - 30} x2={FB.x2 + 300} y={FB.y0} />
				<Bars x={FB.x1} y0={FB.y0} s={FB.s} k={K(R1)} u={U(R1)} e={E(R1)} eAt={gives} w={FB.w} gap={FB.gap} size={34} />
				<Bars x={FB.x2} y0={FB.y0} s={FB.s} k={K(R2)} u={U(R2)} e={E(R2)} eAt={gives + 10} w={FB.w} gap={FB.gap} size={34} />
				{f >= more ? <VecArrow x={ex2 + FB.w + 40} y={e1} dx={0} dy={e2 - e1} color={GREEN.stroke} width={7} head={20} at={more} /> : null}
				{f >= more ? <line x1={ex1 + FB.w} y1={e1} x2={ex2 + FB.w + 50} y2={e1} stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="6 6" opacity={prog(f, more, 12)} /> : null}
				{mir > 0 ? <g opacity={mir}>
					{[FB.x1, FB.x2].map((x, i) => { const r = i ? R2 : R1, hk = K(r) * FB.s; return <g key={i}><rect x={x} y={FB.y0} width={FB.w} height={hk} fill="none" stroke={ORANGE.stroke} strokeWidth={3} strokeDasharray="8 6" /><line x1={x + FB.w} y1={FB.y0 + hk} x2={x + 2 * (FB.w + FB.gap)} y2={FB.y0 + hk} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="6 5" /></g>; })}
				</g> : null}
				<Ring cx={1460} cy={712} rx={150} ry={50} at={exactly + 20} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={FB.x1 + 115} y={290} at={-30} color={NAVY.ink} anchor="middle" size={32}>orbit r₁</Lbl>
			<Lbl x={FB.x2 + 115} y={290} at={-30} color={NAVY.ink} anchor="middle" size={32}>orbit r₂ = 2r₁</Lbl>
			<HandTag x={ex1 - 10} y={e1 + 80} text="half of U" at={gives + 24} size={30} color={NAVY.ink} />
			<Chip x={1100} y={290} at={neg} size={36} border={NAVY.stroke} color={NAVY.ink}>E &lt; 0: bound</Chip>
			<Row at={bound + 10} size={32} style={{position: 'absolute', left: 1100, top: 370, width: 724, whiteSpace: 'normal'}}>bound: not enough energy to reach infinity</Row>
			<HandTag x={470} y={640} text="bound" at={bound + 20} size={32} color={NAVY.ink} />
			<Lbl x={1100} y={530} at={key} color={INK_SOFT} size={30}>the key:</Lbl>
			<Row at={bigger} size={36} style={{position: 'absolute', left: 1100, top: 556, width: 724, whiteSpace: 'normal'}}><span style={{color: GREEN.ink}}>higher: E less negative = more total energy</span></Row>
			<Row at={exactly} size={56} style={{position: 'absolute', left: 1320, top: 670}}><AnswerBox at={exactly + 10}><span style={{color: NAVY.ink}}>E = −K</span></AnswerBox></Row>
			<Lbl x={1100} y={712} at={fact} color={INK_SOFT} size={30}>in a circle:</Lbl>
			<Row at={lose} size={36} style={{position: 'absolute', left: 1100, top: 800, width: 724, whiteSpace: 'normal'}}>lose speed (smaller K): the total goes up</Row>
			<HandTag x={1100} y={890} text="K mirrored: same size as E" at={lose + 10} size={30} color={ORANGE.ink} />
		</>
	);
};

// ---------- 5. the three curves with the radius marker ----------
const GG: G3 = {ox: 150, y0: 520, w: 960, xMax: 5 * R1, s: 300 / -U(R1), top: 200, bot: 870};
const FR: Record<number, string> = {1: '1', 2: '½', 3: '⅓', 4: '¼'};
const frac = (n: number) => (Math.abs(n - Math.round(n)) < 0.02 && FR[Math.round(n)] ? FR[Math.round(n)] : fx(1 / n, 2));
export const S05: React.FC = () => {
	const id = 'three-curves';
	const f = useCurrentFrame();
	const kc = cue(id, 'kinetic energy curve'), uc = cue(id, 'potential energy curve'), deep = cue(id, 'twice as deep'), tot = cue(id, 'The total sits'), half = cue(id, 'halfway'), mirror = cue(id, 'a mirror image'), move = cue(id, 'Move outwards'), towards = cue(id, 'head towards zero'), kfall = cue(id, 'Kinetic energy falls'), rise = cue(id, 'potential and total');
	const n = kf(f, mono([[move, 1], [move + 20, 2], [move + 34, 2], [move + 54, 3], [move + 66, 3], [move + 86, 4], [towards + 4, 4], [towards + 60, 5]], 6));
	const r = n * R1, x = g3x(GG, r);
	const draw = (at: number) => prog(f, at, 26);
	const sxR = (rr: number) => g3x(GG, rr);
	const dots = f >= move;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Axes3 g={GG} xTitle="r" />
				{[1, 2, 3, 4].map(k => <g key={k}><line x1={sxR(k * R1)} y1={GG.y0 - 8} x2={sxR(k * R1)} y2={GG.y0 + 8} stroke={INK} strokeWidth={3} /><T x={sxR(k * R1)} y={GG.y0 - 16} size={28} anchor="middle" color={INK_SOFT} weight={700}>{k === 1 ? 'r₁' : `${k}r₁`}</T></g>)}
				<g style={{clipPath: `inset(0 ${(1 - draw(kc)) * 100}% 0 0)`}}><path d={curve3(GG, K, RE, GG.xMax)} fill="none" stroke={ORANGE.stroke} strokeWidth={6} /></g>
				<g style={{clipPath: `inset(0 ${(1 - draw(uc)) * 100}% 0 0)`}}><path d={curve3(GG, U, RE, GG.xMax)} fill="none" stroke={VIOLET.stroke} strokeWidth={6} /></g>
				<g style={{clipPath: `inset(0 ${(1 - draw(tot)) * 100}% 0 0)`}}><path d={curve3(GG, E, RE, GG.xMax)} fill="none" stroke={NAVY.stroke} strokeWidth={7} /></g>
				{f >= mirror ? <path d={curve3(GG, rr => -K(rr), RE, GG.xMax)} fill="none" stroke={ORANGE.stroke} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, mirror, 14) * (1 - prog(f, move, 14))} /> : null}
				{f >= deep ? <g opacity={prog(f, deep, 12)}>
					<line x1={sxR(R1) - 24} y1={GG.y0} x2={sxR(R1) - 24} y2={g3y(GG, U(R1))} stroke={VIOLET.stroke} strokeWidth={4} />
					<line x1={sxR(R1) - 24} y1={GG.y0} x2={sxR(R1) - 24} y2={g3y(GG, K(R1))} stroke={ORANGE.stroke} strokeWidth={4} />
				</g> : null}
				{dots ? <g>
					<line x1={x} y1={GG.top} x2={x} y2={GG.bot} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="8 6" />
					{[[K, ORANGE.stroke], [U, VIOLET.stroke], [E, NAVY.stroke]].map(([fn, c], i) => <circle key={i} cx={x} cy={g3y(GG, (fn as (r: number) => number)(r))} r={12} fill={c as string} stroke={CARD} strokeWidth={3} />)}
				</g> : null}
				{f >= kfall ? <g>
					<VecArrow x={sxR(2 * R1) + 30} y={g3y(GG, K(R1))} dx={0} dy={g3y(GG, K(2 * R1)) - g3y(GG, K(R1))} color={ORANGE.stroke} width={6} head={18} at={kfall} />
					<VecArrow x={sxR(2 * R1) + 30} y={g3y(GG, U(R1))} dx={0} dy={g3y(GG, U(2 * R1)) - g3y(GG, U(R1))} color={VIOLET.stroke} width={6} head={18} at={rise} />
					<VecArrow x={sxR(2 * R1) + 60} y={g3y(GG, E(R1))} dx={0} dy={g3y(GG, E(2 * R1)) - g3y(GG, E(R1))} color={NAVY.stroke} width={6} head={18} at={rise + 8} />
				</g> : null}
				<Ring cx={sxR(3.2 * R1)} cy={g3y(GG, E(3.2 * R1))} rx={90} ry={40} at={tot + 30} color={NAVY.stroke} />
				<Zero x1={1300} x2={1560} y={720} opacity={prog(f, move, 12)} />
				{dots ? <Bars x={1320} y0={720} s={55 / K(R1)} k={K(r)} u={U(r)} e={E(r)} w={50} gap={16} size={26} kAt={move} uAt={move} eAt={move} /> : null}
			</FrameSvg>
			<Lbl x={sxR(1.6 * R1)} y={g3y(GG, K(1.6 * R1)) - 24} at={kc + 10} color={ORANGE.ink} size={32}>K (above zero)</Lbl>
			<Lbl x={sxR(1.5 * R1)} y={g3y(GG, U(1.5 * R1)) + 50} at={uc + 10} color={VIOLET.ink} size={32}>U (below, twice as deep)</Lbl>
			<Lbl x={sxR(2.4 * R1)} y={g3y(GG, E(2.4 * R1)) + 44} at={tot + 10} color={NAVY.ink} size={32}>E = K + U</Lbl>
			<HandTag x={sxR(R1) + 20} y={g3y(GG, U(R1)) + 50} text="twice as deep" at={deep + 10} size={30} color={VIOLET.ink} />
			<HandTag x={sxR(4.1 * R1)} y={g3y(GG, U(4.1 * R1)) + 40} text="halfway to U" at={half + 6} size={30} color={NAVY.ink} />
			<HandTag x={sxR(3.8 * R1)} y={g3y(GG, K(3.8 * R1)) - 44} text="mirror of E" at={mirror + 10} size={30} color={ORANGE.ink} />
			<Readouts x={1240} y={186} w={584} size={44} at={move} title="at the marker, against the first orbit" rows={[
				{label: 'r', value: `${fx(n, n % 1 < 0.02 ? 0 : 2)} r₁`, color: NAVY.ink},
				{label: 'v', value: `× ${fx(ratioV(n), 2)}`, color: TEAL.ink},
				{label: 'K', value: `× ${frac(n)}`, color: ORANGE.ink},
				{label: 'U', value: `× ${frac(n)}`, color: VIOLET.ink},
				{label: 'E', value: `× ${frac(n)}`, color: NAVY.ink},
			]} />
			<Lbl x={1300} y={590} at={move} color={GREY.ink} size={28}>bars at the marker</Lbl>
			<Lbl x={GG.ox} y={GG.bot + 50} at={-30} color={GREY.ink} size={28}>orbital radius r (first orbit at r₁)</Lbl>
			<Row at={kfall} size={34} style={{position: 'absolute', left: 620, top: 880, width: 600}}><span style={{color: ORANGE.ink}}>K falls</span>; <span style={{color: VIOLET.ink}}>U</span> and <span style={{color: NAVY.ink}}>E</span> rise (towards 0)</Row>
		</>
	);
};
