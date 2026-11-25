// Scenes 1 to 5: the hook (last time's two-slit view shrinks under the painted bench with a coded double slit; the
// particle prediction crossed against the observed bands; the prediction), adding waves (two waves along a line from the
// waves engine and their sum), it depends on the path (the two-source stage with probe P, its path lines, the
// path-difference meter and the in-step readout), why the sources must keep in step (the painted laser with Young's
// single slit against two painted lamps whose pattern washes out) and finding the path difference (the triangle that
// gives d sin θ).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {hash01} from '../../physics/light/em';
import {LAMP, LASER, LPlate, anchorAt, ANCHOR} from '../../physics/light/plates';
import {OpticsBench, ScreenView, benchGeom} from '../../physics/light/bench';
import type {BenchAt} from '../../physics/light/bench';
import {ApertureWaves, Barrier, TwoSlitWaves} from '../../physics/light/wavefronts';
import {doubleSlitBrightness} from '../../sims/waves';
import type {Wave} from '../../sims/waves';
import {BandScreen, M7V05FinalFrame, TS, TS_YA, TS_YB, V05_END, tsPhase} from '../phys-y12-m7-v05/s3';
import {HEAD, HEAD_SIZE, cap, cue, holdIf} from './common';
import {CycleAt, GREY, Lbl, LineWave, NAVY, ORANGE, PLUM, PdMeter, RED_INK, ROSE, Strip, TEAL, VBands, col, pdAt, pdText, twoSlit, yForPd} from './parts';

type Pt = [number, number];

// ---------- 1. hook ----------
export const B6: BenchAt = {x: 96, y: 400, w: 1100, g: 1.0, ap: 260, slit: 620, scr: 1010};
const SV1 = {x: 1240, y: 230, w: 580, h: 110};
const MM1 = 15;
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const c0 = cue(id, 'If light were a stream of particles'), scr = cue(id, 'on the screen'), spaced = cue(id, 'evenly spaced'), dark = cue(id, 'makes some places dark'), pred = cue(id, 'Make your prediction'), bright = cue(id, "It's bright"), why = cap(id, cue(id, "Let's see why"));
	const h = holdIf(id);
	if (f < 1) return <M7V05FinalFrame />;
	const tr = prog(f, c0, 24), s = 1 - 0.45 * tr;
	const g = benchGeom(B6);
	const bright650 = (u: number) => twoSlit(u * MM1 * 1e-3, 0.25e-3, 650e-9, 2.0);
	const ghost = prog(f, scr, 12) * (1 - prog(f, spaced, 14));
	const obs = 0.25 + 0.75 * prog(f, spaced, 14);
	const X = (u: number) => SV1.x + ((u + 1) / 2) * SV1.w;
	const dx1 = (650e-9 * 2.0) / 0.25e-3 * 1e3 / MM1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g transform={`translate(96 ${180 + 360 * tr}) scale(${s}) translate(-96 -180)`}>
					<rect x={TS.box.x} y={TS.box.y} width={TS.box.w} height={TS.box.h} rx={14} fill="#f6fbfb" stroke={INK} strokeWidth={3} />
					<TwoSlitWaves box={TS.box} bx={TS.bx} ya={TS_YA} yb={TS_YB} lambda={TS.lambda} phase={tsPhase(V05_END + f)} colors={[TEAL.stroke, TEAL.stroke]} incoming={TEAL.stroke} troughs={false} id="v06-hook" width={4} />
					<Barrier box={TS.box} bx={TS.bx} gaps={[[TS_YA - 9, TS_YA + 9], [TS_YB - 9, TS_YB + 9]]} t={16} />
					<BandScreen />
				</g>
				<g opacity={tr}>
					<OpticsBench b={B6} color={col(650)} spread={18} slide="double" gap={1.2} sep={5} beam={prog(f, c0 + 10, 30)} />
					<line x1={g.card.x + g.card.w} y1={g.card.y} x2={SV1.x} y2={SV1.y} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<line x1={g.card.x + g.card.w} y1={g.card.y + g.card.h} x2={SV1.x} y2={SV1.y + SV1.h} stroke={INK} strokeWidth={2} strokeDasharray="6 6" />
					<ScreenView x={SV1.x} y={SV1.y} w={SV1.w} h={SV1.h} bright={u => obs * bright650(u)} color={col(650)} n={200} />
				</g>
				{ghost > 0.001 ? <g opacity={ghost}>{[-0.22, 0.22].map(u => <rect key={u} x={X(u) - 22} y={SV1.y + 6} width={44} height={SV1.h - 12} fill="#d9d3c7" opacity={0.95} />)}</g> : null}
				{f >= spaced ? <g opacity={prog(f, spaced, 12) * (1 - prog(f, dark, 12))}>{[-0.22, 0.22].map(u => <g key={u} stroke={GREY.stroke} strokeWidth={5}><line x1={X(u) - 20} y1={SV1.y + 20} x2={X(u) + 20} y2={SV1.y + SV1.h - 20} /><line x1={X(u) + 20} y1={SV1.y + 20} x2={X(u) - 20} y2={SV1.y + SV1.h - 20} /></g>)}</g> : null}
				{f >= dark ? <ellipse cx={X(dx1 / 2)} cy={SV1.y + SV1.h / 2} rx={26} ry={70} fill="none" stroke={INK} strokeWidth={5} opacity={prog(f, dark, 12)} /> : null}
				{f >= bright ? <ellipse cx={X(0)} cy={SV1.y + SV1.h / 2} rx={30} ry={74} fill="none" stroke={RED_INK} strokeWidth={5} opacity={prog(f, bright, 12)} /> : null}
				{f >= bright ? <Mark x={1215} y={915} at={bright} kind="tick" color={INK} size={34} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1720} y={900} r={42} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: why do two slits produce regularly spaced bright and dark bands?</Chip>
			<Lbl x={B6.ap - 90} y={525} at={c0 + 10} color={INK} size={26} anchor="middle">laser</Lbl>
			<Lbl x={B6.slit} y={525} at={c0 + 10} color={INK} size={26} anchor="middle">double slit</Lbl>
			<Lbl x={B6.scr} y={525} at={c0 + 10} color={INK} size={26} anchor="middle">screen</Lbl>
			<Lbl x={SV1.x} y={SV1.y - 20} at={c0 + 20} color={INK} size={26}>the screen, face on (schematic)</Lbl>
			<HandTag x={SV1.x} y={SV1.y + SV1.h + 40} text="particle prediction" at={scr + 6} out={spaced} size={32} color={GREY.ink} />
			<HandTag x={SV1.x} y={SV1.y + SV1.h + 40} text="observed" at={spaced + 10} size={34} color={INK} />
			<HandTag x={X(dx1 / 2) + 10} y={SV1.y + SV1.h + 96} text="light + light = dark?" at={bright + 10} size={32} color={RED_INK} />
			<Lbl x={1000} y={640} at={c0 + 20} color={INK} size={28}>last time: two slits from above (not to scale)</Lbl>
			<Chip x={1000} y={890} at={pred} size={32} w={200} color={INK}>bright</Chip>
			<Chip x={1240} y={890} at={pred + 6} size={32} w={180} color={INK}>dark</Chip>
			<Lbl x={1000} y={720} at={why} color={INK} size={36}>the centre is bright</Lbl>
		</>
	);
};

// ---------- 2. adding waves ----------
const W2 = {x0: 220, x1: 1100, l: 230, a: 42};
export const S02: React.FC = () => {
	const id = 'superposition';
	const f = useCurrentFrame();
	const inph = cue(id, 'crest with crest'), bright = cue(id, "and that's bright"), half = cue(id, 'crest with trough'), dark = cue(id, "and that's dark"), interf = cap(id, cue(id, 'is called interference'));
	const t = f / 45;
	const ph = Math.PI * prog(f, half, 24);
	const a: Wave = {amplitude: W2.a, wavelength: W2.l, period: 1.5};
	const b: Wave = {amplitude: W2.a, wavelength: W2.l, period: 1.5, phase: -ph};
	const out = f >= half;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LineWave x0={W2.x0} x1={W2.x1} y={300} waves={[a]} t={t} color={TEAL.stroke} />
				<LineWave x0={W2.x0} x1={W2.x1} y={450} waves={[b]} t={t} color={PLUM.stroke} />
				<LineWave x0={W2.x0} x1={W2.x1} y={660} waves={[a, b]} t={t} color={INK} width={6} opacity={prog(f, inph, 14)} />
				<rect x={1220} y={590} width={200} height={140} rx={12} fill={out ? '#171412' : col(633)} stroke={INK} strokeWidth={3} opacity={prog(f, bright, 12)} />
				{f >= dark ? <ellipse cx={(W2.x0 + W2.x1) / 2} cy={660} rx={470} ry={46} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, dark + 8, 12)} /> : null}
			</FrameSvg>
			<Lbl x={96} y={306} at={0} color={TEAL.ink} size={30}>wave 1</Lbl>
			<Lbl x={96} y={456} at={0} color={PLUM.ink} size={30}>wave 2</Lbl>
			<Lbl x={96} y={666} at={inph} color={INK} size={30}>sum</Lbl>
			<Lbl x={W2.x1} y={540} at={4} color={GREY.ink} size={26} anchor="end">model waves</Lbl>
			<Lbl x={1220} y={560} at={bright} out={half} color={RED_INK} size={34}>constructive: bright</Lbl>
			<Lbl x={1220} y={560} at={dark} color={INK} size={34}>destructive: dark</Lbl>
			<HandTag x={1460} y={300} text="crest + crest" at={inph + 10} out={half} size={36} color={INK} />
			<HandTag x={1460} y={300} text="crest + trough" at={half + 20} size={36} color={INK} />
			<Lbl x={1460} y={380} at={half + 10} color={PLUM.ink} size={30}>wave 2 half a cycle out</Lbl>
			<Chip x={96} y={800} at={interf} size={30} w={1720} color={INK}>Interference: the superposition of waves from different sources producing regions of reinforcement and cancellation.</Chip>
		</>
	);
};

// ---------- 3. it depends on the path ----------
const PB = {x: 96, y: 180, w: 1100, h: 720};
const P3 = {bx: 250, cy: PB.y + PB.h / 2, half: 90, lam: 60, sx: 1110};
const YA3 = P3.cy - P3.half, YB3 = P3.cy + P3.half;
export const S03: React.FC = () => {
	const id = 'path-difference';
	const f = useCurrentFrame();
	const slits = cue(id, 'from both slits'), diff = cue(id, "That's the path difference"), brt = cue(id, 'Bright'), again = cue(id, 'bright again'), dark = cue(id, "and it's dark"), whole = cue(id, 'a whole number of wavelengths'), halfc = cue(id, 'a half more than a whole number'), canc = cap(id, cue(id, 'It just cancels'));
	const k = f < brt ? 0 : kf(f, [[brt, 0], [again - 10, 0], [again + 14, 1], [dark - 10, 1], [dark + 14, 0.5]]);
	const yP = f < brt ? yForPd(P3.bx, YA3, YB3, P3.sx, 0.5 * P3.lam) : yForPd(P3.bx, YA3, YB3, P3.sx, k * P3.lam);
	const kNow = pdAt(P3.bx, YA3, YB3, P3.sx, yP) / P3.lam;
	const R = f < brt ? 0 : f < again ? Math.abs(yForPd(P3.bx, YA3, YB3, P3.sx, 0.5 * P3.lam) - P3.cy) * 0.6 : f < whole ? Math.abs(yForPd(P3.bx, YA3, YB3, P3.sx, 1.3 * P3.lam) - P3.cy) : 2000;
	const bright = (y: number) => (Math.abs(y - P3.cy) <= R ? doubleSlitBrightness(2 * P3.half, P3.lam, Math.atan((y - P3.cy) / (P3.sx - P3.bx))) : 0);
	const lit = [f >= brt ? 0 : -1, f >= again ? 1 : -1, f >= dark ? 0.5 : -1].filter(v => v >= 0);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={PB.x} y={PB.y} width={PB.w} height={PB.h} rx={14} fill="#f6fbfb" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<TwoSlitWaves box={{x: PB.x, y: PB.y, w: P3.sx - PB.x - 10, h: PB.h}} bx={P3.bx} ya={YA3} yb={YB3} lambda={P3.lam} phase={f / 26} colors={[TEAL.stroke, PLUM.stroke]} id="v06-p3" width={3.5} />
				<Barrier box={PB} bx={P3.bx} gaps={[[YA3 - 9, YA3 + 9], [YB3 - 9, YB3 + 9]]} t={14} />
				<VBands x={P3.sx} y={PB.y} w={60} h={PB.h} bright={bright} color={col(650)} />
				{f >= slits ? <g opacity={prog(f, slits, 12)}>
					<line x1={P3.bx} y1={YA3} x2={P3.sx} y2={yP} stroke={ORANGE.stroke} strokeWidth={5} />
					<line x1={P3.bx} y1={YB3} x2={P3.sx} y2={yP} stroke={ORANGE.stroke} strokeWidth={5} />
					<circle cx={P3.sx} cy={yP} r={13} fill={INK} stroke="#fff" strokeWidth={3} />
				</g> : null}
				<PdMeter x={1260} y={600} w={540} pd={kNow} opacity={prog(f, diff, 12)} lit={lit} />
				<CycleAt x={1290} y={270} w={480} k={kNow} t={f / 40} opacity={prog(f, brt, 12)} />
			</FrameSvg>
			<Lbl x={PB.x + 20} y={PB.y + 30} at={0} color={GREY.ink} size={26}>two slits from above (not to scale)</Lbl>
			<Lbl x={P3.bx - 20} y={YA3 + 8} at={0} color={TEAL.ink} size={28} anchor="end">slit 1</Lbl>
			<Lbl x={P3.bx - 20} y={YB3 + 8} at={0} color={PLUM.ink} size={28} anchor="end">slit 2</Lbl>
			<Lbl x={P3.sx - 16} y={yP - 22} at={slits} color={INK} size={34} anchor="end">P</Lbl>
			<Lbl x={1260} y={580} at={diff} color={ROSE.ink} size={30}>path difference (in wavelengths)</Lbl>
			<Lbl x={1260} y={740} at={brt} color={ROSE.ink} size={52}>{`path difference = ${pdText(kNow)}`}</Lbl>
			<Lbl x={1290} y={210} at={brt} color={INK} size={28}>{kNow % 1 > 0.25 && kNow % 1 < 0.75 ? 'at P: out of step, cancel' : 'at P: in step, add'}</Lbl>
			<HandTag x={P3.sx - 30} y={yP + 60} text="half a wave behind" at={dark + 16} out={whole} size={32} color={ROSE.ink} anchor="end" />
			<Chip x={1240} y={800} at={whole} size={28} w={580} color={INK}>bright: path difference = mλ (m = 0, 1, 2, …)</Chip>
			<Chip x={1240} y={870} at={halfc} size={28} w={580} color={INK}>dark: path difference = (m + ½)λ</Chip>
			<CrossedChip x={PB.x + 30} y={PB.y + PB.h - 120} at={canc - 20} crossAt={canc} size={28} caption="both waves arrive and cancel">dark = no light arrives</CrossedChip>
			<HandTag x={700} y={P3.cy - 260} text="both arrive" at={canc + 6} size={32} color={ORANGE.ink} marks={[{kind: 'arrow', from: [600, YA3 - 40], to: [P3.sx - 20, yP - 6], bend: 0.05}, {kind: 'arrow', from: [600, YB3 - 30], to: [P3.sx - 20, yP + 8], bend: -0.05}]} />
		</>
	);
};

// ---------- 4. why the sources must keep in step ----------
const LP = {x: 96, y: 180, w: 860, h: 640}, RP = {x: 1000, y: 180, w: 824, h: 640};
const LBX = 560, LCY = LP.y + LP.h / 2, RBX = 1420, RCY = RP.y + RP.h / 2, HS = 70;
export const S04: React.FC = () => {
	const id = 'coherence';
	const f = useCurrentFrame();
	const same = cue(id, 'the same frequency'), las = cue(id, 'A laser does that'), single = cue(id, 'one single slit first'), lamps = cue(id, 'Two separate lamps'), jump = cue(id, 'phases jump around'), glow = cap(id, cue(id, 'an even glow'));
	const lp = {x: 110, y: LCY - 40, w: 200};
	const ap = anchorAt(LASER, lp, ANCHOR.laserOut[0], ANCHOR.laserOut[1]);
	const sgl = prog(f, single, 16);
	const steady = (y: number) => doubleSlitBrightness(2 * HS, 46, Math.atan((y - LCY) / (LP.x + LP.w - 70 - LBX)));
	const jitter = hash01(Math.floor(f / 3) + 17);
	const wash = prog(f, glow, 20);
	const flick = (y: number) => (1 - wash) * Math.cos(Math.PI * ((y - RCY) / 92) + jitter * Math.PI) ** 2 + wash * 0.5;
	const rO = prog(f, lamps, 16);
	const l1 = {x: 1020, y: RP.y + 60, w: 170}, l2 = {x: 1020, y: RP.y + LP.h - 260, w: 170};
	const c1 = anchorAt(LAMP, l1, ANCHOR.lampCoil[0], ANCHOR.lampCoil[1]), c2 = anchorAt(LAMP, l2, ANCHOR.lampCoil[0], ANCHOR.lampCoil[1]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={LP.x} y={LP.y} width={LP.w} height={LP.h} rx={14} fill="#f6fbfb" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<LPlate spec={LASER} p={lp} />
				<line x1={ap[0]} y1={ap[1]} x2={sgl > 0.5 ? 420 : LBX} y2={LCY} stroke={col(633)} strokeWidth={5} />
				{sgl > 0.001 ? <g opacity={sgl}>
					<ApertureWaves box={{x: 420, y: LP.y + 4, w: LBX - 420, h: LP.h - 8}} bx={420} gap={[LCY - 8, LCY + 8]} lambda={46} phase={f / 26} color={GREY.stroke} id="v06-young" width={3} n={4} incoming={0} />
					<Barrier box={{x: 0, y: LP.y + 4, w: 0, h: LP.h - 8}} bx={420} gaps={[[LCY - 8, LCY + 8]]} t={12} color="#8a8378" />
				</g> : null}
				<TwoSlitWaves box={{x: LBX, y: LP.y + 4, w: LP.x + LP.w - 70 - LBX, h: LP.h - 8}} bx={LBX} ya={LCY - HS} yb={LCY + HS} lambda={46} phase={f / 26} colors={[TEAL.stroke, PLUM.stroke]} troughs={false} id="v06-coh" width={3} />
				<Barrier box={{x: 0, y: LP.y + 4, w: 0, h: LP.h - 8}} bx={LBX} gaps={[[LCY - HS - 7, LCY - HS + 7], [LCY + HS - 7, LCY + HS + 7]]} t={12} />
				<VBands x={LP.x + LP.w - 66} y={LP.y + 4} w={56} h={LP.h - 8} bright={steady} color={col(633)} />
				{rO < 0.999 ? <g opacity={(1 - rO) * prog(f, same, 14)}>
					<CycleAt x={RP.x + 140} y={RP.y + 150} w={540} k={0} t={f / 40} />
				</g> : null}
				{rO > 0.001 ? <g opacity={rO}>
					<rect x={RP.x} y={RP.y} width={RP.w} height={RP.h} rx={14} fill="#fbf6f1" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<LPlate spec={LAMP} p={l1} />
					<LPlate spec={LAMP} p={l2} />
					<line x1={c1[0] + 20} y1={c1[1]} x2={RBX} y2={RCY - HS} stroke={col(580)} strokeWidth={4} />
					<line x1={c2[0] + 20} y1={c2[1]} x2={RBX} y2={RCY + HS} stroke={col(580)} strokeWidth={4} />
					<TwoSlitWaves box={{x: RBX, y: RP.y + 4, w: RP.x + RP.w - 70 - RBX, h: RP.h - 8}} bx={RBX} ya={RCY - HS} yb={RCY + HS} lambda={46} phase={f / 26} colors={[TEAL.stroke, PLUM.stroke]} troughs={false} id="v06-incoh" width={3} jitter={jitter} />
					<Barrier box={{x: 0, y: RP.y + 4, w: 0, h: RP.h - 8}} bx={RBX} gaps={[[RCY - HS - 7, RCY - HS + 7], [RCY + HS - 7, RCY + HS + 7]]} t={12} />
					<VBands x={RP.x + RP.w - 66} y={RP.y + 4} w={56} h={RP.h - 8} bright={flick} color={col(580)} />
					{f >= glow ? <g stroke={GREY.stroke} strokeWidth={7} opacity={prog(f, glow + 20, 12)}><line x1={RP.x + RP.w - 90} y1={RCY - 60} x2={RP.x + RP.w - 10} y2={RCY + 60} /><line x1={RP.x + RP.w - 10} y1={RCY - 60} x2={RP.x + RP.w - 90} y2={RCY + 60} /></g> : null}
				</g> : null}
			</FrameSvg>
			<Lbl x={LP.x + 20} y={LP.y + 30} at={0} color={INK} size={28}>laser feeding two slits (model waves)</Lbl>
			<Lbl x={LP.x + LP.w - 20} y={LP.y + LP.h - 24} at={las} color={INK} size={30} anchor="end">coherent: a steady pattern</Lbl>
			<HandTag x={300} y={LP.y + 110} text="same wavefront feeds both" at={single + 20} size={30} color={TEAL.ink} />
			<Lbl x={420} y={LP.y + LP.h - 70} at={single} color={GREY.ink} size={26} anchor="middle">Young's arrangement</Lbl>
			<Lbl x={RP.x + 140} y={RP.y + 70} at={same} out={lamps} color={INK} size={30}>leaving the two slits: same f, steady phase</Lbl>
			<Lbl x={RP.x + 140} y={RP.y + 470} at={same} out={lamps} color={INK} size={28}>sum at the screen: steady</Lbl>
			<Lbl x={RP.x + 20} y={RP.y + 30} at={lamps} color={INK} size={28}>two separate lamps</Lbl>
			<HandTag x={RP.x + 210} y={RCY} text="phases jump at random" at={jump} size={30} color={GREY.ink} />
			<Lbl x={RP.x + RP.w - 20} y={RP.y + RP.h - 24} at={glow + 10} color={INK} size={28} anchor="end">incoherent: no stable pattern</Lbl>
			<Chip x={96} y={840} at={same} size={28} w={1728} color={INK}>Coherent sources: sources with the same frequency and a constant phase relationship.</Chip>
		</>
	);
};

// ---------- 5. finding the path difference ----------
const TH = (24 * Math.PI) / 180;
const S1: Pt = [430, 480], S2: Pt = [430, 800];
const D5 = S2[1] - S1[1];
const U: Pt = [Math.cos(TH), -Math.sin(TH)];
const F5: Pt = [S2[0] + D5 * Math.sin(TH) * U[0], S2[1] + D5 * Math.sin(TH) * U[1]];
export const S05: React.FC = () => {
	const id = 'derive-dsin';
	const f = useCurrentFrame();
	const par = cue(id, 'almost parallel'), dirn = cue(id, 'straight-ahead direction'), draw = cue(id, 'Draw a line across'), dd = cue(id, 'the slit separation, d'), th = cue(id, 'path difference is d sine theta'), bands = cue(id, 'Bright bands appear where'), centre = cap(id, cue(id, 'out from the centre'));
	const L = 640;
	const ray = (s: Pt) => [s[0] + L * U[0], s[1] + L * U[1]] as Pt;
	const pr = prog(f, draw, 20);
	const Fd: Pt = [S1[0] + (F5[0] - S1[0]) * pr, S1[1] + (F5[1] - S1[1]) * pr];
	const arc = (c: Pt, r: number, a0: number, a1: number) => `M${c[0] + r * Math.cos(a0)},${c[1] + r * Math.sin(a0)} A${r},${r} 0 0,${a1 > a0 ? 1 : 0} ${c[0] + r * Math.cos(a1)},${c[1] + r * Math.sin(a1)}`;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={96} y={180} width={1100} height={700} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
				<rect x={S1[0] - 14} y={200} width={14} height={S1[1] - 12 - 200} fill="#4a4643" />
				<g opacity={prog(f, 4, 14)}>
					<rect x={1240} y={640} width={580} height={240} rx={12} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
					<rect x={1270} y={700} width={8} height={30} fill="#4a4643" /><rect x={1270} y={736} width={8} height={10} fill="#4a4643" /><rect x={1270} y={752} width={8} height={30} fill="#4a4643" />
					<line x1={1790} y1={660} x2={1790} y2={860} stroke={INK} strokeWidth={5} />
					<line x1={1278} y1={733} x2={1790} y2={690} stroke={ORANGE.stroke} strokeWidth={3} />
					<line x1={1278} y1={749} x2={1790} y2={690} stroke={ORANGE.stroke} strokeWidth={3} />
					<circle cx={1790} cy={690} r={8} fill={INK} />
				</g>
				<rect x={S1[0] - 14} y={S1[1] + 12} width={14} height={S2[1] - S1[1] - 24} fill="#4a4643" />
				<rect x={S1[0] - 14} y={S2[1] + 12} width={14} height={860 - S2[1] - 12} fill="#4a4643" />
				{f >= dd ? <polygon points={`${S1[0]},${S1[1]} ${S2[0]},${S2[1]} ${F5[0]},${F5[1]}`} fill={ROSE.soft} opacity={0.8 * prog(f, dd, 12)} /> : null}
				<line x1={S1[0]} y1={S1[1]} x2={ray(S1)[0]} y2={ray(S1)[1]} stroke={ORANGE.stroke} strokeWidth={6} />
				<line x1={S2[0]} y1={S2[1]} x2={ray(S2)[0]} y2={ray(S2)[1]} stroke={ORANGE.stroke} strokeWidth={6} />
				{f >= dirn ? <g opacity={prog(f, dirn, 12)}>
					<line x1={S1[0]} y1={S1[1]} x2={S1[0] + 380} y2={S1[1]} stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="12 9" />
					<path d={arc(S1, 230, 0, -TH)} fill="none" stroke={NAVY.stroke} strokeWidth={4} />
				</g> : null}
				{f >= draw ? <line x1={S1[0]} y1={S1[1]} x2={Fd[0]} y2={Fd[1]} stroke={INK} strokeWidth={4} strokeDasharray="10 7" /> : null}
				{f >= draw + 20 ? <path d={`M${F5[0] - 18 * U[0]},${F5[1] - 18 * U[1]} l${-18 * U[1]},${18 * U[0]} l${18 * U[0]},${18 * U[1]}`} fill="none" stroke={INK} strokeWidth={3} transform="" /> : null}
				{f >= dd ? <line x1={S2[0]} y1={S2[1]} x2={F5[0]} y2={F5[1]} stroke={ROSE.stroke} strokeWidth={10} opacity={prog(f, dd, 12)} /> : null}
				{f >= dd ? <line x1={S1[0] + 6} y1={S1[1]} x2={S2[0] + 6} y2={S2[1]} stroke={INK} strokeWidth={5} opacity={prog(f, dd, 12)} /> : null}
				{f >= dd ? <path d={arc(S1, 90, Math.PI / 2, Math.PI / 2 - TH)} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, dd + 10, 12)} /> : null}
				{f >= th ? <ellipse cx={(S2[0] + F5[0]) / 2} cy={(S2[1] + F5[1]) / 2} rx={90} ry={40} fill="none" stroke={ROSE.stroke} strokeWidth={4} transform={`rotate(${(-TH * 180) / Math.PI} ${(S2[0] + F5[0]) / 2} ${(S2[1] + F5[1]) / 2})`} opacity={prog(f, th + 10, 12)} /> : null}
			</FrameSvg>
			<Lbl x={S1[0] - 30} y={S1[1] + 8} at={0} color={TEAL.ink} size={28} anchor="end">slit 1</Lbl>
			<Lbl x={S2[0] - 30} y={S2[1] + 8} at={0} color={PLUM.ink} size={28} anchor="end">slit 2</Lbl>
			<Lbl x={ray(S1)[0] + 10} y={ray(S1)[1] - 20} at={0} color={INK} size={28} anchor="end">to a point on a far screen →</Lbl>
			<Lbl x={1260} y={905} at={4} color={INK} size={26}>the far screen: two paths meet at one point</Lbl>
			<Strip x={1240} y={240} at={4} out={th} size={40}>path difference = ?</Strip>
			<HandTag x={ray(S2)[0] - 260} y={ray(S2)[1] + 70} text="nearly parallel" at={par + 10} size={32} color={NAVY.ink} />
			<Lbl x={S1[0] + 250} y={S1[1] - 40} at={dirn + 10} color={NAVY.ink} size={36}>θ</Lbl>
			<Lbl x={S1[0] + 390} y={S1[1] + 40} at={dirn + 10} color={NAVY.ink} size={26}>straight ahead</Lbl>
			<Lbl x={S1[0] - 30} y={(S1[1] + S2[1]) / 2 + 10} at={dd} color={INK} size={40} anchor="end">d</Lbl>
			<Lbl x={S1[0] + 30} y={S1[1] + 120} at={dd + 10} color={NAVY.ink} size={32}>θ</Lbl>
			<Lbl x={F5[0] + 30} y={F5[1] + 70} at={dd} color={ROSE.ink} size={30}>{f >= th ? 'd sin θ' : 'extra path'}</Lbl>
			<HandTag x={S2[0] + 40} y={S2[1] + 70} text="the extra bit" at={th + 16} size={32} color={ROSE.ink} />
			<Lbl x={120} y={220} at={0} color={GREY.ink} size={26}>close-up of the slits (not to scale)</Lbl>
			<Strip x={1240} y={240} at={th} size={44}>path difference = d sin θ</Strip>
			<Strip x={1240} y={340} at={bands} size={40}>bright: path difference = mλ</Strip>
			<div style={{position: 'absolute', left: 1240, top: 450}}><Row at={centre - 10} size={60}><AnswerBox at={centre}><span style={{whiteSpace: 'nowrap'}}>d sin θ = mλ</span></AnswerBox></Row></div>
			<Lbl x={1250} y={565} at={centre + 6} color={GREY.ink} size={26}>(bright; syllabus form)</Lbl>
			<Lbl x={1250} y={608} at={centre + 10} color={INK} size={28}>m = 0: centre; m = 1, 2, …: outwards</Lbl>
		</>
	);
};
