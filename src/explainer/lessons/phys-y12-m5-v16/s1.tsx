// Scenes 1 to 6: the hook (opening on last time's whirling bung, the stack changes), how the apparatus works
// (tension = Mg, the marker holds L), the drooping string (the tension's parts, r = L cos alpha, the cos alpha
// cancels to Mg = m omega^2 L), the variables board with the bench instruments, measuring the period (lap
// counter and stopwatch), and what to plot (the model steps beside empty Mg against omega-squared axes).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Countdown, Enter, prog} from '../../kit';
import {FrameSvg, HandTag, MarkSpan, SceneHeading, kf} from '../../math/studio';
import {CARD, INK, TYPE} from '../../shared/tokens';
import {AnswerBox, Bracket, Chip, CrossedChip, DISPLAY, ROLE, Readouts, Row, Sub, Sup, VecArrow} from '../../physics/projectile/board';
import {ConeRig} from '../../physics/circular/road-cone';
import {BUNG_DEFAULT, Bung, BungRig, bungGeom, droopDeg, hangerBottom} from '../../physics/circular/bung';
import type {BungLayout} from '../../physics/circular/bung';
import {V15FinalFrame} from '../phys-y12-m5-v15/s3';
import {APP, HEAD, HEAD_SIZE, HEAD_V15, MEAN, REPEATS, ROWS, UNC, cue, hold, model, mono} from './common';
import {AMBER, Axes, Balance, Banner, Lbl, MetreRule, NAVY, ORANGE, OriginLine, Ring, Stopwatch, UP, VEL, balanceGeom, bungPhaseAt, card, fx, gmap, stopAtEdge, Title} from './parts';
import type {GraphG} from './parts';

const LAY = BUNG_DEFAULT;
const discs = (M: number) => Math.max(1, Math.min(4, Math.round(M / 0.05)));
const alphaOf = (M: number) => droopDeg(APP.m, M);
export const Boxed: React.FC<{children: React.ReactNode; size?: number; color?: string}> = ({children, size = TYPE.current, color = INK}) => (
	<div style={{display: 'inline-block', background: CARD, border: `5px solid ${color}`, borderRadius: 16, padding: '2px 22px 8px', ...DISPLAY(size, INK)}}>{children}</div>
);
export const W2: React.FC = () => <>ω²</>;
const Strike: React.FC<{on: number; children: React.ReactNode}> = ({on, children}) => {
	const p = prog(useCurrentFrame(), on, 12);
	return <span style={{position: 'relative'}}>{children}{p > 0 ? <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position: 'absolute', left: -4, top: 0, width: 'calc(100% + 8px)', height: '100%', overflow: 'visible'}}><path d="M0,75 L100,25" stroke={ROLE.slate.ink} strokeWidth={5} vectorEffect="non-scaling-stroke" fill="none" style={{clipPath: `inset(-50% ${100 - p * 100}% -50% 0)`}} /></svg> : null}</span>;
};
/** A stage group scaled about (ox, oy) (a camera push). */
const Cam: React.FC<{s: number; ox: number; oy: number; children: React.ReactNode}> = ({s, ox, oy, children}) => (
	<div style={{position: 'absolute', inset: 0, transform: `scale(${s})`, transformOrigin: `${ox}px ${oy}px`}}>{children}</div>
);

// ---------- 1. hook: four times the weight ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const hanging = cue(id, 'hanging masses'), tight = cue(id, 'keeps the string tight'), same = cue(id, 'string length the same'), four = cue(id, 'four times as much'), howMany = cue(id, 'How many times faster'), predict = cue(id, 'prediction');
	const h = hold(id);
	const Mk = mono([[18, 0.15], [40, 0.05], [four, 0.05], [four + 50, 0.2], [h.startFrame, 0.2], [h.startFrame + 30, 0.05]], 8);
	const M = (k: number) => kf(k, Mk, false);
	const Mf = M(f);
	const phase = (() => { let p = 0; for (let k = 0; k < f; k++) p += (model(M(k)).w / 2 / 30) * Math.min(1, k / 24); return p; })();
	const n = discs(Mf), alpha = alphaOf(Mf);
	const g = bungGeom(LAY, alpha, phase);
	const hb = hangerBottom(g.hookY, LAY.hangerS, n);
	const old = 1 - prog(f, 0, 18);
	const glow = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - hanging) / 40)));
	const g0 = bungGeom(LAY, alphaOf(0.15), 0);
	const ux = g0.top[0] - g0.bung[0], uy = g0.top[1] - g0.bung[1], ul = Math.hypot(ux, uy);
	const hb0 = hangerBottom(g0.hookY, LAY.hangerS, 3);
	if (f < 1) return <V15FinalFrame />;
	return (
		<>
			<SceneHeading text={HEAD_V15} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<BungRig lay={LAY} alpha={alpha} phase={phase} n={n} hangerGlow={glow} />
				{old > 0 ? <g opacity={old}>
					<VecArrow x={g0.bung[0]} y={g0.bung[1]} dx={(ux / ul) * 110} dy={(uy / ul) * 110} color={AMBER.stroke} width={8} head={24} />
					<VecArrow x={LAY.tubeX + 70} y={hb0 - 150} dx={0} dy={120} color={AMBER.stroke} width={8} head={24} />
				</g> : null}
				<Ring cx={LAY.tubeX} cy={hb - 40} rx={70} ry={60} at={four + 60} color={AMBER.stroke} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1560} y={820} ringFrom={predict} />
			</FrameSvg>
			{old > 0 ? <div style={{opacity: old}}>
				<Lbl x={LAY.tubeX + 92} y={hb0 - 70} color={AMBER.ink} size={TYPE.current}>Mg</Lbl>
				<Chip x={1290} y={300} at={-60} size={40} border={INK}>F = mv²/r ?</Chip>
				<Chip x={1290} y={420} at={-60} size={36} w={534} color={INK} border={INK}>Next: how can measurements test the circular-force relationship?</Chip>
			</div> : null}
			<Banner at={20} />
			<HandTag x={LAY.tubeX - 60} y={hb - 30} text="sets the pull" at={tight} size={TYPE.handSmall} color={AMBER.ink} anchor="end" />
			<HandTag x={LAY.tubeX + 40} y={g.clipTop + 110} text="same string length" at={same} size={TYPE.handSmall} color={NAVY.ink} />
			<Lbl x={LAY.tubeX + 60} y={hb - 20} at={four + 10} color={AMBER.ink} size={TYPE.current}>× 4</Lbl>
			<Enter at={howMany} style={{position: 'absolute', left: 1290, top: 330, width: 534}}>
				<div style={{...DISPLAY(36, INK, 800), whiteSpace: 'normal'}}>Four times the hanging mass, same L: how many times faster will it turn (revolutions per second)?</div>
			</Enter>
			<Chip x={1290} y={530} at={howMany + 10} size={36}>4 times</Chip>
			<Chip x={1290} y={606} at={howMany + 16} size={36}>2 times</Chip>
			<Chip x={1290} y={682} at={howMany + 22} size={36}>16 times</Chip>
		</>
	);
};

// ---------- 2. how the apparatus works ----------
export const S02: React.FC = () => {
	const id = 'apparatus';
	const f = useCurrentFrame();
	const still = cue(id, 'sit still'), masses = cue(id, 'choosing the masses'), clip = cue(id, 'paper clip'), same = cue(id, 'stays the same'), practice = cue(id, 'In practice'), follow = cue(id, 'follow those');
	const s = 1 + 0.12 * prog(f, 0, 30);
	const phase = stopAtEdge(f, k => bungPhaseAt(k, () => 0.05), same - 40);
	const alpha = alphaOf(0.05);
	const g = bungGeom(LAY, alpha, phase);
	const hb = hangerBottom(g.hookY, LAY.hangerS, 1);
	const clipGlow = Math.sin(Math.PI * Math.max(0, Math.min(1, (f - clip) / 40)));
	return (
		<>
			<SceneHeading text={HEAD_V15} at={-200} size={HEAD_SIZE} />
			<Cam s={s} ox={640} oy={600}>
				<FrameSvg>
					<BungRig lay={LAY} alpha={alpha} phase={phase} n={1} clipGlow={clipGlow} />
					<VecArrow x={LAY.tubeX + 46} y={hb - 60} dx={0} dy={80} color={AMBER.stroke} width={7} head={20} at={still} />
					<VecArrow x={LAY.tubeX + 46} y={g.hookY + 110} dx={0} dy={-80} color={AMBER.stroke} width={7} head={20} at={still + 10} />
					{f >= same ? <rect x={LAY.tubeX - 26} y={g.clipTop - 8} width={52} height={66} rx={8} fill="none" stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, same, 12)} /> : null}
					<Ring cx={LAY.tubeX} cy={g.clipTop + 25} rx={44} ry={50} at={clip + 24} color={NAVY.stroke} />
					<Bracket x1={g.top[0]} y1={g.top[1]} x2={g.bung[0]} y2={g.bung[1]} color={NAVY.stroke} at={same + 6} off={-40} label="L (string length)" lx={g.bung[0]} ly={g.bung[1] - 76} size={34} />
				</FrameSvg>
				<Lbl x={LAY.tubeX + 66} y={hb + 10} at={still} color={AMBER.ink} size={32}>Mg</Lbl>
				<Lbl x={LAY.tubeX + 66} y={g.hookY + 50} at={still + 10} color={AMBER.ink} size={32}>F<Sub>T</Sub></Lbl>
				<HandTag x={LAY.tubeX - 60} y={hb - 90} text="tension = weight" at={masses + 20} size={30} color={AMBER.ink} anchor="end" />
				<HandTag x={LAY.tubeX - 50} y={g.clipTop + 16} text="holds L" at={same + 20} size={30} color={NAVY.ink} anchor="end" />
				<Lbl x={LAY.tubeX - 50} y={g.clipTop + 66} at={same + 12} color={NAVY.ink} anchor="end" size={26}>keep it here</Lbl>
				<HandTag x={LAY.tubeX + 30} y={LAY.tubeTop - 50} text="in practice: moved in a tiny circle" at={practice} size={30} color={NAVY.ink} />
			</Cam>
			<Banner at={-30} pulse={follow} />
			<Enter at={still} style={{position: 'absolute', left: 1290, top: 330, width: 534}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>Hanging masses still</Title>
					<div style={{...DISPLAY(32, AMBER.ink, 800), whiteSpace: 'normal'}}>F<Sub>T</Sub> = Mg (hanging mass M)</div>
				</div>
			</Enter>
			<Row at={masses} size={TYPE.current} style={{position: 'absolute', left: 1290, top: 480}}><span style={{color: AMBER.ink}}>F<Sub>T</Sub> = Mg</span>: set by the masses</Row>
			<Row at={same} size={34} style={{position: 'absolute', left: 1290, top: 560}}><span style={{color: NAVY.ink}}>marker steady: L stays the same</span></Row>
		</>
	);
};

// ---------- 2a. the string droops ----------
const T2: [number, number] = [260, 330];
const L2 = 760, BUNG2 = 140, CS2 = 0.45;
export const S02A: React.FC = () => {
	const id = 'string-droops';
	const f = useCurrentFrame();
	const droop = cue(id, 'droop a little below'), conical = cue(id, 'just like the conical'), hPart = cue(id, 'only the horizontal part'), radius = cue(id, "circle's radius"), both = cue(id, 'Both are shrunk'), sameF = cue(id, 'same factor'), cosine = cue(id, 'cosine of the droop'), mv2 = cue(id, 'm v squared over r'), which = cue(id, 'which is m omega'), appears = cue(id, 'same factor appears'), cancels = cue(id, 'and cancels'), leaving = cue(id, 'leaving'), test = cue(id, 'form we can test');
	const a = kf(f, mono([[droop, 12], [droop + 40, 30]], 10));
	const t = (a * Math.PI) / 180;
	const B: [number, number] = [T2[0] + L2 * Math.cos(t), T2[1] + L2 * Math.sin(t)];
	const FT = 300;
	const sp = prog(f, hPart, 14);
	const glow = (at: number) => 6 * Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / 30)));
	const arc = 120;
	return (
		<>
			<SceneHeading text={HEAD_V15} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={T2[0]} y1={T2[1]} x2={T2[0]} y2={840} stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" />
				<line x1={T2[0]} y1={T2[1]} x2={1150} y2={T2[1]} stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" />
				<image href={staticFile('assets/physics/y12p-tube-clamp-v1.png')} x={T2[0] - 860 * CS2} y={T2[1] - 347 * CS2} width={1254 * CS2} height={1254 * CS2} />
				<line x1={T2[0]} y1={T2[1]} x2={B[0]} y2={B[1]} stroke={INK} strokeWidth={4} />
				<path d={`M${T2[0] + arc},${T2[1]} A ${arc} ${arc} 0 0 1 ${T2[0] + arc * Math.cos(t)},${T2[1] + arc * Math.sin(t)}`} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, droop + 30, 12)} />
				<Bung x={B[0]} y={B[1]} d={BUNG2} />
				<g opacity={1 - 0.7 * sp}>
					<VecArrow x={B[0]} y={B[1]} dx={-FT * Math.cos(t)} dy={-FT * Math.sin(t)} color={AMBER.stroke} width={9} head={28} at={droop + 40} dash={sp > 0.5 ? '14 10' : undefined} />
				</g>
				{f >= hPart ? <g>
					<VecArrow x={B[0]} y={B[1]} dx={-FT * Math.cos(t)} dy={0} color={VEL.stroke} width={9 + glow(cosine) * 0.6} head={26} dash="16 9" at={hPart} />
					<VecArrow x={B[0]} y={B[1]} dx={0} dy={-FT * Math.sin(t)} color={UP.stroke} width={8} head={24} dash="16 9" at={hPart + 12} />
				</g> : null}
				<Bracket x1={T2[0]} y1={T2[1]} x2={B[0]} y2={B[1]} color={NAVY.stroke} at={droop + 50} off={-46} label="L" size={40} />
				<Bracket x1={T2[0]} y1={B[1] + 110} x2={B[0]} y2={B[1] + 110} color={NAVY.stroke} at={radius} label={<span style={{fontSize: 36 + glow(cosine)}}>r = L cos α</span>} ly={B[1] + 156} size={36} />
				<line x1={B[0]} y1={B[1] + 40} x2={B[0]} y2={B[1] + 120} stroke={NAVY.stroke} strokeWidth={2.5} strokeDasharray="6 6" opacity={prog(f, radius, 12)} />
				<Ring cx={B[0] - FT * Math.cos(t) * 0.5} cy={B[1] + 8} rx={160} ry={30} at={leaving + 30} color={VEL.stroke} />
			</FrameSvg>
			<Lbl x={T2[0] + arc + 24} y={T2[1] + 56} at={droop + 30} color={NAVY.ink} size={34}>α (droop)</Lbl>
			<Lbl x={B[0] - 80} y={B[1] - 52} at={hPart + 6} color={VEL.ink} anchor="end" size={32 + glow(cosine)}>F<Sub>T</Sub> cos α (inward)</Lbl>
			<Lbl x={B[0] + 26} y={B[1] - FT * Math.sin(t) + 10} at={hPart + 16} color={UP.ink} size={32}>F<Sub>T</Sub> sin α = mg</Lbl>
			<Lbl x={B[0] - 150} y={B[1] - 120} at={droop + 40} out={hPart} color={AMBER.ink} size={34}>F<Sub>T</Sub></Lbl>
			<Enter at={conical} out={both} style={{position: 'absolute', left: 96, top: 640, width: 400, height: 280}}>
				<div style={{position: 'absolute', inset: 0, ...card, border: `3px solid ${INK}`}} />
				<div style={{position: 'absolute', left: 18, top: 8, ...DISPLAY(26, NAVY.ink, 800)}}>like the conical pendulum</div>
				<svg width={400} height={280} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
					<ConeRig pivot={[230, 80]} benchY={260} L={150} theta={60} tiltK={0.3} phase={0} ballD={30} />
				</svg>
			</Enter>
			<Enter at={hPart - 10} style={{position: 'absolute', left: 1240, top: 186, width: 584}}>
				<div style={{...card, border: `3px solid ${INK}`}}>
					<Title>The drooping string</Title>
					<div style={{...DISPLAY(32, VEL.ink, 800), marginTop: 4, opacity: prog(f, hPart, 12)}}>inward part: F<Sub>T</Sub> cos α</div>
					<div style={{...DISPLAY(32, UP.ink, 800), opacity: prog(f, hPart + 20, 12)}}>up part: F<Sub>T</Sub> sin α = mg</div>
					<div style={{...DISPLAY(32, NAVY.ink, 800), opacity: prog(f, radius, 12)}}>radius: r = L cos α</div>
					<div style={{...DISPLAY(32, INK, 800), opacity: prog(f, cosine, 12)}}>both carry cos α</div>
				</div>
			</Enter>
			<div style={{position: 'absolute', left: 1240, top: 450, display: 'flex', flexDirection: 'column', gap: 8}}>
				<Row at={mv2} ageAt={leaving} size={TYPE.current} oldSize={34}>inward force = mv²/r</Row>
				<Row at={which} ageAt={leaving} size={TYPE.current} oldSize={34}>&nbsp;&nbsp;= mω²r &nbsp;(v = ωr)</Row>
				<Row at={appears} size={TYPE.current}>Mg <Strike on={cancels}>cos α</Strike> = mω²L <Strike on={cancels + 6}>cos α</Strike></Row>
				<Row at={leaving} size={60}><AnswerBox at={leaving + 10}><span>Mg = mω²L</span></AnswerBox></Row>
			</div>
			<HandTag x={1250} y={880} text="L: measured along the string" at={test - 20} size={30} color={NAVY.ink} />
			<CrossedChip x={1240} y={730} at={both} crossAt={sameF + 10} size={30} caption="both too big by the same factor">inward force = Mg, radius = L</CrossedChip>
		</>
	);
};

// ---------- 3. the variables ----------
const LAY3: BungLayout = {...LAY, tubeX: 560};
export const S03: React.FC = () => {
	const id = 'variables';
	const f = useCurrentFrame();
	const indep = cue(id, 'independent variable'), dep = cue(id, 'dependent variable'), ctrl = cue(id, 'controlled variables'), strLen = cue(id, 'string length and'), mass = cue(id, "bung's mass");
	const alpha = alphaOf(0.05);
	const g = bungGeom(LAY3, alpha, 0);
	const pulse = (at: number) => Math.sin(Math.PI * Math.max(0, Math.min(1, (f - at) / 40)));
	const bal = balanceGeom(960, LAY3.benchY, 270);
	const t = (alpha * Math.PI) / 180;
	return (
		<>
			<SceneHeading text={HEAD_V15} at={-200} size={HEAD_SIZE} out={mass - 14} />
			<SceneHeading text={HEAD} at={mass - 4} size={HEAD_SIZE} />
			<FrameSvg>
				<BungRig lay={LAY3} alpha={alpha} phase={0} n={1} hangerGlow={pulse(indep)} bungGlow={Math.max(pulse(dep), pulse(ctrl))} clipGlow={pulse(ctrl)} />
				{f >= strLen ? <g opacity={prog(f, strLen, 14)}><MetreRule x={g.top[0] + 22 * Math.sin(t)} y={g.top[1] - 22 * Math.cos(t)} ppm={LAY3.L / APP.L} deg={alpha} /></g> : null}
				<Bracket x1={g.top[0]} y1={g.top[1]} x2={g.bung[0]} y2={g.bung[1]} color={NAVY.stroke} at={strLen} off={60} label="L" size={36} />
				<Balance x={960} base={LAY3.benchY} w={270} text="25 g" />
				<Bung x={bal.panX} y={bal.pan - 26} d={52} />
				<Ring cx={bal.win[0]} cy={bal.win[1]} rx={70} ry={30} at={mass + 10} color={NAVY.stroke} />
			</FrameSvg>
			<Lbl x={bal.panX} y={bal.pan - 90} at={strLen} color={NAVY.ink} anchor="middle" size={52}>25 g</Lbl>
			<Banner at={-30} />
			<Chip x={1290} y={330} at={indep} size={32} w={534} border={AMBER.stroke} color={AMBER.ink}>independent (we change): M, which sets F<Sub>T</Sub> = Mg</Chip>
			<HandTag x={1824} y={445} text="change" at={indep + 20} size={30} color={AMBER.ink} anchor="end" />
			<Chip x={1290} y={480} at={dep} size={32} w={534} border={VEL.stroke} color={VEL.ink}>dependent (we measure): the period T, so ω = 2π/T</Chip>
			<HandTag x={1824} y={595} text="measure" at={dep + 20} size={30} color={VEL.ink} anchor="end" />
			<Chip x={1290} y={630} at={ctrl} size={32} w={534} border={NAVY.stroke} color={NAVY.ink}>controlled (we keep): L (marker) and m (bung)</Chip>
			<HandTag x={1824} y={745} text="keep" at={ctrl + 20} size={30} color={NAVY.ink} anchor="end" />
		</>
	);
};

// ---------- 4. measuring the speed ----------
const S4 = 0.75;
const tr4 = (x: number, y: number): [number, number] => [96 + (x - 96) * S4, 915 + (y - 915) * S4];
export const S04: React.FC = () => {
	const id = 'measuring-speed';
	const f = useCurrentFrame();
	const time20 = cue(id, 'Time twenty revolutions'), divide = cue(id, 'divide by twenty'), precise = cue(id, 'precise'), repeat = cue(id, 'Repeat each run'), average = cue(id, 'and average'), omegaEq = cue(id, 'omega equals two pi');
	const row = ROWS[1];
	const TL = 200; // time-lapse frames for the 20 revolutions
	const slow = (k: number) => (k * row.w) / 2 / 30;
	const phase = f < time20 ? slow(f) : f < time20 + TL ? slow(time20) + (2 * Math.PI * 20 * (f - time20)) / TL : slow(time20) + 40 * Math.PI + slow(f - time20 - TL);
	const laps = f < time20 ? 0 : Math.min(20, Math.floor((20 * (f - time20)) / TL));
	const sw = f < time20 ? 0 : Math.min(row.t20, (row.t20 * (f - time20)) / TL);
	const alpha = alphaOf(0.1);
	const [lx, ly] = tr4(LAY.tubeX, LAY.tubeTop);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${96 * (1 - S4)},${915 * (1 - S4)}) scale(${S4})`}>
					<BungRig lay={LAY} alpha={alpha} phase={phase} n={2} />
				</g>
				<Stopwatch x={800} y={250} w={330} t={sw} />
				<Ring cx={965} cy={575} rx={110} ry={44} at={divide + 10} color={INK} />
			</FrameSvg>
			<Readouts x={96} y={186} w={420} size={44} at={-30} title="lap counter" rows={[{label: 'laps', value: String(laps), color: VEL.ink}]} />
			<Lbl x={lx + 10} y={ly - 40} at={time20} out={time20 + TL + 20} color={INK} size={28}>time-lapse</Lbl>
			<HandTag x={965} y={760} text="20 turns, then ÷ 20" at={divide + 10} size={30} color={NAVY.ink} anchor="middle" />
			<Banner at={-30} x={1200} w={624} />
			<div style={{position: 'absolute', left: 1200, top: 300, display: 'flex', flexDirection: 'column', gap: 10}}>
				<Row at={divide} size={52}>T = t<Sub>20</Sub> ÷ 20</Row>
				<Row at={precise} size={32}>±{UNC.dt} s ÷ 20 revolutions</Row>
				<Row at={precise + 12} size={32}>&nbsp;&nbsp;= ±{fx(UNC.perT, 2)} s per period</Row>
				<Row at={repeat} size={36}>t<Sub>20</Sub>: {REPEATS.map(r => fx(r, 1)).join(' s, ')} s</Row>
				<Row at={average} size={TYPE.current}>mean t<Sub>20</Sub> = <MarkSpan kind="circle" at={average + 20} color={NAVY.stroke}>{fx(MEAN, 1)} s</MarkSpan></Row>
				<Row at={omegaEq} size={TYPE.current}><Boxed>ω = 2π/T &nbsp;(rad s<Sup>−1</Sup>)</Boxed></Row>
			</div>
			<HandTag x={1824} y={565} text="average of 3" at={average + 10} size={30} color={NAVY.ink} anchor="end" />
		</>
	);
};

// ---------- 5. what to plot ----------
export const G5: GraphG = {ox: 760, oy: 800, w: 1000, h: 460, xMax: 110, yMax: 2.2};
const S5 = 0.45;
export const S05: React.FC = () => {
	const id = 'what-to-plot';
	const f = useCurrentFrame();
	const prop = cue(id, 'proportional to omega'), line = cue(id, 'straight line through'), mL = cue(id, 'm times L'), fourW = cue(id, 'Four times the hanging'), fourO = cue(id, 'four times omega squared'), fast = cue(id, 'twice as fast');
	const Mk = mono([[fourW, 0.05], [fourW + 12, 0.1], [fourW + 30, 0.1], [fourW + 42, 0.15], [fourW + 60, 0.15], [fourW + 72, 0.2]], 6);
	const M = (k: number) => kf(k, Mk);
	const Mf = M(f);
	const md = model(Mf);
	const phase = bungPhaseAt(f, M);
	const [px, py] = gmap(G5, md.w2, md.Mg);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(${96 * (1 - S5)},${915 * (1 - S5)}) scale(${S5})`}>
					<BungRig lay={LAY} alpha={md.alpha} phase={phase} n={discs(Mf)} />
				</g>
				<Axes g={G5} xTitle="ω² (rad² s⁻²)" yTitle="Mg (N)" xStep={20} yStep={0.5} />
				<OriginLine g={G5} k={APP.m * APP.L} at={line} color={ORANGE.stroke} dash="16 10" width={5} />
				{f >= fourW ? <g opacity={prog(f, fourW, 12)}><circle cx={px} cy={py} r={11} fill="none" stroke={ORANGE.stroke} strokeWidth={4} /></g> : null}
			</FrameSvg>
			{f >= fourW ? <Lbl x={px + 18} y={py + 34} color={ORANGE.ink} size={26}>model</Lbl> : null}
			<HandTag x={1500} y={430} text="prediction" at={line + 20} size={30} color={ORANGE.ink} />
			<Readouts x={96} y={186} w={540} size={36} at={-30} title="model (not data)" rows={[
				{label: 'hanging mass M', value: fx(Mf * 1000, 0), unit: 'g', color: AMBER.ink},
				{label: 'Mg', value: fx(md.Mg, 2), unit: 'N', color: AMBER.ink},
				{label: 'ω', value: fx(md.w, 2), unit: <>rad s<Sup>−1</Sup></>, color: NAVY.ink},
				{label: 'ω²', value: fx(md.w2, 1), unit: <>rad² s<Sup>−2</Sup></>, color: NAVY.ink},
				{label: 'droop α', value: fx(md.alpha, 1), unit: '°', color: NAVY.ink},
			]} />
			<HandTag x={96} y={518} text="less droop as it speeds up" at={fourW + 40} size={30} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 700, top: 186, display: 'flex', flexDirection: 'column', gap: 4}}>
				<Row at={prop} size={36}>Mg = (mL) ω², so Mg ∝ ω² &nbsp;(m, L fixed)</Row>
				<Row at={mL} size={36}><span style={{color: ORANGE.ink}}>gradient = mL = 0.025 × 0.80 = {fx(APP.m * APP.L, 3)} kg m</span></Row>
			</div>
			<div style={{position: 'absolute', left: 830, top: 350, display: 'flex', flexDirection: 'column', gap: 4}}>
				<Row at={fourO} size={40}>4 × Mg: ω² × 4</Row>
				<Row at={fourO + 24} size={40}>ω × √4 = <MarkSpan kind="circle" at={fast + 10} color={ORANGE.stroke}>× 2</MarkSpan></Row>
			</div>
			<CrossedChip x={96} y={550} at={-30} crossAt={fast + 4} size={28}>4 times</CrossedChip>
			<Enter at={-30} style={{position: 'absolute', left: 296, top: 550}}>
				<div style={{display: 'inline-flex', gap: 8, background: '#f1ebdf', border: `${f >= fast ? 4.5 : 2.5}px solid ${f >= fast ? INK : 'rgba(60,45,20,0.16)'}`, borderRadius: 14, padding: '6px 16px 8px', ...DISPLAY(28, INK, 800)}}>2 times{f >= fast ? <span style={{opacity: prog(f, fast, 12)}}> ✓</span> : null}</div>
			</Enter>
			<CrossedChip x={460} y={550} at={-30} crossAt={fast + 10} size={28}>16 times</CrossedChip>
		</>
	);
};
