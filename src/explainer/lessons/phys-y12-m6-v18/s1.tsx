// Scenes 1 to 5: the hook (last time's motor turned by an outside drive becomes a corner inset; the single-coil model
// with a split ring gives humps on the oscilloscope, then two slip rings give a wave), flux through a turning coil (the
// flux loop of the flux video with the angle drag and the cosine), the emf from the steepness (linked flux and emf
// graphs, a sliding tangent, the sides cutting across the field), both coils make AC (side "a" rising then falling) and
// slip rings give AC out.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {fproj} from '../../physics/electromagnetism/flux';
import type {FluxCam} from '../../physics/electromagnetism/flux';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {Lead} from '../../physics/electromagnetism/plates';
import {FlowDots} from '../../physics/electromagnetism/induction';
import {EndOnCoil, FnGraph, HobbyMotor, Scope, endOnGeom, fnMap, modelGeom} from '../../physics/electromagnetism/motor';
import type {FnBox, MCam} from '../../physics/electromagnetism/motor';
import {HandoffBoard, V17_END} from '../phys-y12-m6-v17/s3';
import {M6V17FinalFrame} from '../phys-y12-m6-v17/s3';
import {HEAD, HEAD_SIZE, cap, cue, emfOf, holdIf, phiOf, slipOut, splitOut} from './common';
import {AMBER, CardRect, FLUX, FluxLoop, Gen, GenLeads, GREY, Lamp, Lbl, MiniTrace, NAVY, ORANGE, ROSE, Ring, Strip, fx, lampPts, scopeIns} from './parts';

type Pt = [number, number];
const G1: MCam = {cx: 620, cy: 440, k: 135};
const SC1 = {x: 1150, y: 330, w: 660};
const LAMP1 = {x: 250, y: 740, w: 240};
const rad = (d: number) => (d * Math.PI) / 180;

/** The generator stage: model, leads to the lamp and from the lamp to the scope. */
const Stage: React.FC<{alpha: number; split: number; t: number; trace?: (u: number) => number; grow?: number; ghost?: (u: number) => number; glow?: number; dots?: number; dir?: number; scope?: Partial<typeof SC1>; amp?: number; span?: number; normal?: number; markA?: number}> = ({alpha, split, t, trace, grow = 0, ghost, glow = 0, dots = 0, dir = 1, scope = {}, amp = 0.8, span = 2, normal = 0, markA = 0}) => {
	const sp = {...SC1, ...scope};
	const l = lampPts(LAMP1), ins = scopeIns(sp);
	return (
		<g>
			<Lead pts={[l.tL, [l.tL[0], 940], [ins.a[0], 940], ins.a]} width={4} color="#c0392b" />
			<Lead pts={[l.tR, [l.tR[0], 915], [ins.b[0], 915], ins.b]} width={4} color={INK} />
			<GenLeads c={G1} alpha={alpha} ring="split" a={l.tL} b={l.tR} yRun={690} dots={dots} dir={dir} phase={t * 3} opacity={split} />
			<GenLeads c={G1} alpha={alpha} ring="slip" a={l.tL} b={l.tR} yRun={690} dots={dots} dir={dir} phase={t * 3} opacity={1 - split} />
			<Lamp p={LAMP1} glow={glow} />
			<Gen c={G1} alpha={alpha} ring="split" ringO={split} drive={1} t={t} normal={normal} markA={markA} />
			{split < 0.999 ? <Gen c={G1} alpha={alpha} ring="slip" ringO={1 - split} normal={normal} markA={markA} /> : null}
			<Scope p={sp} fn={trace} grow={grow} ghost={ghost} amp={amp} span={span} />
		</g>
	);
};

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const simplest = cue(id, "Here's the simplest version"), zero = cue(id, 'but it never goes below zero'), dc = cue(id, "so it's a DC generator"), swap = cue(id, 'Now swap just one part'), down = cue(id, 'then down, then up again'), ac = cue(id, 'so this is an AC generator'), pred = cue(id, 'Make your prediction'), conn = cap(id, cue(id, "It's the connection"));
	const h = holdIf(id);
	if (f < 1) return <M6V17FinalFrame />;
	const fade = prog(f, simplest, 24);
	const t0 = simplest + 20;
	const alpha = 3 * Math.max(0, f - t0);
	const split = 1 - prog(f, swap + 10, 20);
	const turnsSince = (from: number) => Math.max(0, (3 * (f - from)) / 360);
	const humps = Math.min(1, turnsSince(t0) / 2);
	const waveFrom = Math.max(swap + 24, down - 40);
	const wave = Math.min(1, turnsSince(waveFrom) / 2);
	const showWave = f >= waveFrom;
	const sgn = Math.sin(rad(alpha)) >= 0 ? 1 : -1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', inset: 0, opacity: 1 - fade}}><HandoffBoard f={V17_END.f + f} final chip={false} heading={false} /></div>
			<FrameSvg>
				<g opacity={prog(f, simplest + 10, 20)}>
					<Stage alpha={alpha} split={split} t={f} trace={showWave ? slipOut : splitOut} grow={showWave ? wave : humps} dots={1} dir={showWave ? sgn : 1} />
					<HobbyMotor p={{x: 1580, y: 170, w: 240}} deg={f * 12} />
				</g>
				<Ring cx={modelGeom(G1, alpha, 'slip').rc[0] - 10} cy={modelGeom(G1, alpha, 'slip').rc[1] + 10} rx={110} ry={90} at={swap + 30} color={NAVY.stroke} />
				{f >= conn ? <Mark x={1150} y={262} at={conn + 6} kind="tick" color={INK} size={34} /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1010} y={230} r={50} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: how do simple AC and DC generators produce different outputs?</Chip>
			<Lbl x={1700} y={330} at={simplest + 30} out={swap} color={INK} size={26} anchor="middle">last time's motor</Lbl>
			<Lbl x={G1.cx - 60} y={175} at={simplest + 20} color={INK} size={30} anchor="middle">one coil between two magnets</Lbl>
			<HandTag x={1170} y={800} text="never below zero" at={zero} out={swap} size={36} color={ROSE.ink} />
			<Chip x={96} y={190} at={dc} out={pred} size={30} w={420}>DC: one direction</Chip>
			<HandTag x={96} y={300} text="same coil, same field, same speed" at={swap + 10} out={pred} size={34} color={NAVY.ink} />
			<Chip x={96} y={250} at={ac} out={pred} size={30} w={420}>AC: alternates</Chip>
			<Chip x={1180} y={180} at={pred} size={30} w={560}>the emf the coil makes</Chip>
			<Chip x={1180} y={240} at={pred + 8} size={30} w={640}>how the coil connects to the outside circuit</Chip>
			<HandTag x={1190} y={325} text="same in both" at={conn + 10} size={32} color={INK} />
			<Lbl x={SC1.x + SC1.w / 2} y={SC1.y + 430} at={simplest + 20} color={INK} size={28} anchor="middle">oscilloscope: the output</Lbl>
		</>
	);
};

// ---------- 2. flux through a turning coil ----------
const CAM2: FluxCam = {cx: 470, cy: 570, k: 190};
const GF2: FnBox = {x: 1080, y: 560, w: 700, h: 280, x0: 0, x1: 360, ymin: -1.2, ymax: 1.2};
const Thumb: React.FC<{x: number; phi: number; label: string; on: number}> = ({x, phi, label, on}) => (
	<g>
		<rect x={x} y={300} width={200} height={170} rx={12} fill="#fffdf8" stroke={on > 0.5 ? NAVY.stroke : 'rgba(60,45,20,0.2)'} strokeWidth={on > 0.5 ? 5 : 2} />
		<FluxLoop cam={{cx: x + 100, cy: 385, k: 42}} phi={phi} normal={1} arc={0} />
		<text x={x + 100} y={496} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: INK}}>{label}</text>
	</g>
);
export const S02: React.FC = () => {
	const id = 'flux-turning-coil';
	const f = useCurrentFrame();
	const bacos = cue(id, 'B A cos theta'), normal = cue(id, 'the arrow sticking straight out'), max = cue(id, 'and the flux is a maximum'), zero = cue(id, 'and the flux is zero'), dir = cue(id, 'in the opposite direction'), curve = cap(id, cue(id, "that's a cosine curve"));
	const theta = kf(f, [[0, 0], [max + 20, 0], [zero - 50, 45], [zero, 90], [dir - 50, 135], [dir, 180], [curve, 180], [curve + 80, 360]]);
	const ph = phiOf(theta);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<FluxLoop cam={CAM2} phi={theta} normal={prog(f, normal, 16)} arc={prog(f, normal + 10, 14)} />
				<Thumb x={1080} phi={0} label="0" on={prog(f, max, 10)} />
				<Thumb x={1320} phi={90} label="¼ turn" on={prog(f, zero, 10)} />
				<Thumb x={1560} phi={180} label="½ turn" on={prog(f, dir, 10)} />
				<FnGraph b={GF2} fn={u => phiOf(u)} grow={prog(f, curve, 50)} cursor={f >= curve ? Math.min(360, theta) : undefined} color={FLUX} xLabel="t" yLabel="Φ" xTicks={[[90, '¼'], [180, '½'], [270, '¾'], [360, '1 turn']]} />
				{f >= max ? <circle cx={fnMap(GF2).X(0)} cy={fnMap(GF2).Y(1)} r={10} fill={FLUX} /> : null}
				{f >= zero ? <circle cx={fnMap(GF2).X(90)} cy={fnMap(GF2).Y(0)} r={10} fill={FLUX} /> : null}
				{f >= dir ? <circle cx={fnMap(GF2).X(180)} cy={fnMap(GF2).Y(-1)} r={10} fill={FLUX} /> : null}
				<Ring cx={fnMap(GF2).X(0) + 30} cy={fnMap(GF2).Y(1)} rx={60} ry={34} at={curve + 30} color={FLUX} />
			</FrameSvg>
			<Strip x={96} y={170} at={bacos} size={44} color={INK}>Φ = BA cos θ</Strip>
			<HandTag x={420} y={200} text="from an earlier video" at={bacos + 10} size={30} color={GREY.ink} />
			<HandTag x={96} y={290} text="normal: sticks straight out" at={normal + 10} size={34} color={NAVY.ink} />
			<div style={{position: 'absolute', left: 1080, top: 166, width: 760}}>
				<Row at={max - 20} size={48}>θ = {fx(theta % 360, 0)}°&nbsp;&nbsp;&nbsp;<span style={{color: FLUX}}>Φ / Φ<sub>max</sub> = {fx(ph, 2)}{ph < -0.99 ? ' (reversed)' : ''}</span></Row>
			</div>
			<HandTag x={96} y={905} text="skims past" at={zero + 6} out={dir} size={34} color={FLUX} />
			<HandTag x={96} y={905} text="through from the other side" at={dir + 6} size={34} color={FLUX} />
		</>
	);
};

// ---------- 3. emf follows the steepness ----------
const GA: FnBox = {x: 760, y: 220, w: 980, h: 250, x0: 0, x1: 360, ymin: -1.2, ymax: 1.2};
const GB: FnBox = {x: 760, y: 590, w: 980, h: 250, x0: 0, x1: 360, ymin: -1.2, ymax: 1.2};
export const S03: React.FC = () => {
	const id = 'emf-steepness';
	const f = useCurrentFrame();
	const steep = cue(id, 'read the emf from the steepness'), top = cue(id, 'At the top of the curve'), ezero = cue(id, 'So the emf is zero'), crosses = cue(id, 'Where the flux crosses zero'), big = cue(id, 'so the emf is at its biggest'), edge = cue(id, 'Edge on, the two sides are cutting'), face = cue(id, "Face on, they're sliding along"), none = cue(id, 'cutting none'), step = cap(id, cue(id, 'a quarter of a turn out of step'));
	const theta = kf(f, [[0, 0], [crosses, 0], [crosses + 30, 45], [big, 90], [face - 10, 90], [face + 20, 0], [step, 0], [step + 50, 360]]);
	const th = theta % 360.0001;
	const mA = fnMap(GA), mB = fnMap(GB);
	const slope = -Math.sin(rad(th)), d = 28;
	const tan: [Pt, Pt] = [[mA.X(th - d), mA.Y(phiOf(th) + slope * rad(-d))], [mA.X(th + d), mA.Y(phiOf(th) + slope * rad(d))]];
	const enl = prog(f, edge, 14) * (1 - prog(f, none + 30, 14));
	const cam: FluxCam = {cx: 330, cy: 560, k: 110 + 70 * enl};
	const phi = th;
	const tv = [-Math.cos(rad(phi)), 0, -Math.sin(rad(phi))] as const;
	const sideP = (s: number) => [s * -Math.sin(rad(phi)), 0, s * Math.cos(rad(phi))] as const;
	const arrows = prog(f, edge, 12);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<FluxLoop cam={cam} phi={phi} normal={1} arc={0} />
				{arrows > 0.01 ? <g opacity={arrows}>{[1, -1].map(s => { const p = sideP(s); const q = [p[0] + s * 0.8 * tv[0], 0, p[2] + s * 0.8 * tv[2]] as const; const a = fproj(cam, p), b = fproj(cam, q); return Math.hypot(b[0] - a[0], b[1] - a[1]) > 8 ? <Arrow2 key={s} from={a} to={b} color={AMBER.stroke} width={7} head={22} /> : null; })}</g> : null}
				<FnGraph b={GA} fn={u => phiOf(u)} color={FLUX} xLabel="t" yLabel="Φ" xTicks={[[90, '¼'], [180, '½'], [270, '¾'], [360, '1']]} cursor={th} />
				<FnGraph b={GB} fn={u => emfOf(u)} grow={f >= step ? prog(f, step, 40) : Math.max(0, th) / 360} color={ROSE.stroke} xLabel="t" yLabel="ε" xTicks={[[90, '¼'], [180, '½'], [270, '¾'], [360, '1']]} cursor={th} />
				<g opacity={prog(f, steep, 12)}><line x1={tan[0][0]} y1={tan[0][1]} x2={tan[1][0]} y2={tan[1][1]} stroke={ROSE.stroke} strokeWidth={7} strokeLinecap="round" /></g>
				{f >= step ? <path d={`M${mA.X(0)},${GA.y + GA.h + 20} L${mA.X(0)},${GA.y + GA.h + 40} L${mB.X(90)},${GA.y + GA.h + 40} L${mB.X(90)},${GA.y + GA.h + 20}`} fill="none" stroke={ROSE.stroke} strokeWidth={4} opacity={prog(f, step, 12)} /> : null}
			</FrameSvg>
			<HandTag x={GA.x + 300} y={GA.y - 20} text="steepness = emf" at={steep + 6} size={34} color={ROSE.ink} />
			<div style={{position: 'absolute', left: 96, top: 180, width: 640}}>
				<Row at={top} size={48}><span style={{color: ROSE.ink}}>ε / ε<sub>max</sub> = {fx(Math.abs(emfOf(th)), 2)}</span></Row>
			</div>
			<Lbl x={96} y={300} at={ezero} out={crosses} color={ROSE.ink} size={30}>flat at the top: ε = 0</Lbl>
			<div style={{position: 'absolute', left: 96, top: 270, width: 660}}>
				<Row at={big} size={44}><AnswerBox at={big + 10}><span style={{whiteSpace: 'nowrap', color: ROSE.ink}}>ε max when Φ = 0</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={830} at={big + 20} crossAt={big + 50} out={face} size={30}>biggest flux, biggest emf</CrossedChip>
			<HandTag x={96} y={890} text="sides cut straight across" at={edge + 10} out={face} size={34} color={AMBER.ink} />
			<HandTag x={96} y={890} text="no cutting, ε = 0" at={none} size={34} color={AMBER.ink} />
			<Lbl x={(mA.X(0) + mB.X(90)) / 2} y={GA.y + GA.h + 80} at={step + 10} color={ROSE.ink} size={30} anchor="middle">¼ turn</Lbl>
		</>
	);
};

// ---------- 4. both coils make AC inside ----------
const C4 = {cx: 480, cy: 560, R: 230};
export const S04: React.FC = () => {
	const id = 'both-make-ac';
	const f = useCurrentFrame();
	const follow = cue(id, 'Follow one side of the coil'), upA = cue(id, 'moves up through the field'), down = cue(id, 'it moves down'), swap = cue(id, 'The two sides keep swapping places'), both = cue(id, 'in both machines'), shaft = cap(id, cue(id, 'happens at the end of the shaft'));
	const alpha = 90 - 2.4 * Math.max(0, f - upA + 20);
	const s = Math.sin(rad(alpha));
	const g = endOnGeom(C4.cx, C4.cy, C4.R, alpha);
	const plusI = (s >= 0 ? 1 : -1) as 1 | -1;
	const ic = prog(f, both, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<EndOnCoil cx={C4.cx} cy={C4.cy} R={C4.R} alpha={alpha} plusI={f >= upA ? plusI : 0} fieldColor={FLUX} coilColor={ROSE.stroke} forceColor={AMBER.stroke} normalColor={NAVY.stroke} fieldW={400} rows={[-300, -150, 150, 300]} plusTint={'#f3c79a'} />
				{f >= upA ? <Arrow2 from={[g.plus[0] - 70, g.plus[1]]} to={[g.plus[0] - 70, g.plus[1] - 110 * s]} color={ORANGE.stroke} width={8} head={24} /> : null}
				<g opacity={ic}>
					<CardRect x={1000} y={200} w={840} h={560} />
					<rect x={1000} y={200} width={840} height={560} rx={16} fill="none" stroke={INK} strokeWidth={4} />
					<Gen c={{cx: 1230, cy: 380, k: 60}} alpha={-alpha} ring="slip" />
					<Gen c={{cx: 1620, cy: 380, k: 60}} alpha={-alpha} ring="split" />
					<MiniTrace x={1080} y={540} w={300} h={130} kind="sine" />
					<MiniTrace x={1470} y={540} w={300} h={130} kind="sine" />
				</g>
				{f >= shaft ? <g opacity={prog(f, shaft, 12)}><Arrow2 from={[1420, 820]} to={[1180, 480]} color={NAVY.stroke} width={6} head={22} /><Arrow2 from={[1420, 820]} to={[1570, 480]} color={NAVY.stroke} width={6} head={22} /></g> : null}
			</FrameSvg>
			<Lbl x={g.plus[0]} y={g.plus[1] + 70} at={follow} color={ORANGE.ink} size={40} anchor="middle">a</Lbl>
			<HandTag x={96} y={190} text="a: up, then down" at={down + 6} size={38} color={ORANGE.ink} />
			<Lbl x={96} y={905} at={swap} color={ROSE.ink} size={32}>the emf in the coil reverses every half turn</Lbl>
			<Lbl x={1230} y={710} at={both + 10} color={ROSE.ink} size={28} anchor="middle">ε in the coil (slip rings)</Lbl>
			<Lbl x={1620} y={710} at={both + 10} color={ROSE.ink} size={28} anchor="middle">ε in the coil (split ring)</Lbl>
			<Lbl x={1420} y={240} at={both + 20} color={INK} size={34} anchor="middle">both: AC inside the coil</Lbl>
			<HandTag x={1440} y={860} text="the difference: the ring end" at={shaft + 6} size={34} color={NAVY.ink} />
		</>
	);
};

// ---------- 5. slip rings: AC out ----------
const G5: MCam = {cx: 760, cy: 300, k: 230};
const SC5 = {x: 1180, y: 300, w: 640};
export const S05: React.FC = () => {
	const id = 'slip-rings';
	const f = useCurrentFrame();
	const joined = cue(id, 'its own complete ring'), cont = cue(id, 'A slip ring is a continuous metal ring'), same = cue(id, 'so it stays joined to the same end of the coil'), alt = cue(id, 'so the output alternates'), cycle = cue(id, 'One full turn gives one full cycle'), lamp = cap(id, cue(id, 'Connect a lamp'));
	const alpha = 2.4 * f;
	const g = modelGeom(G5, alpha, 'slip');
	const ins = scopeIns(SC5);
	const s = Math.sin(rad(alpha));
	const la: Pt[] = [g.br.L, [g.br.L[0], 880], [ins.a[0], 880], ins.a], lb: Pt[] = [g.br.R, [g.br.R[0], 910], [ins.b[0], 910], ins.b];
	const pulse = f >= same && f < same + 150 ? 0.5 + 0.5 * Math.sin((f - same) / 5) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<defs><clipPath id="v18-s5clip"><rect x={96} y={150} width={1000} height={800} rx={20} /></clipPath></defs>
				<g clipPath="url(#v18-s5clip)">
					<Gen c={G5} alpha={alpha} ring="slip" markA={1} />
				</g>
				<Lead pts={la} width={5} color="#c0392b" />
				<Lead pts={lb} width={5} color={INK} />
				<FlowDots pts={s >= 0 ? la : [...la].reverse()} phase={f * 3} gap={44} r={7} color={ORANGE.stroke} opacity={prog(f, lamp, 12)} />
				<FlowDots pts={s >= 0 ? [...lb].reverse() : lb} phase={f * 3} gap={44} r={7} color={ORANGE.stroke} opacity={prog(f, lamp, 12)} />
				{pulse > 0 ? <circle cx={g.br.L[0]} cy={g.br.L[1] + 20} r={34} fill="none" stroke={ORANGE.stroke} strokeWidth={6} opacity={pulse} /> : null}
				<Scope p={SC5} fn={slipOut} grow={prog(f, alt, 60)} span={2} />
				{f >= cycle ? <path d={`M${SC5.x + 90},${SC5.y + 10} l0,-16 l${SC5.w * 0.27},0 l0,16`} fill="none" stroke={ROSE.stroke} strokeWidth={5} opacity={prog(f, cycle, 10)} /> : null}
			</FrameSvg>
			<Chip x={96} y={170} at={cont} size={28} w={980} color={GREY.ink} border={GREY.stroke}>Slip rings: “Continuous conducting rings that maintain electrical contact with a rotating coil without swapping its external connections.”</Chip>
			<Lbl x={g.rc[0] - 200} y={g.rc[1] + 250} at={joined} color={GREY.ink} size={30} anchor="middle">one ring for each end</Lbl>
			<HandTag x={400} y={820} text="always the same end" at={same + 6} size={36} color={GREY.ink} />
			<div style={{position: 'absolute', left: 1200, top: 760, width: 640}}><Row at={alt} size={48}><AnswerBox at={alt + 20}><span style={{color: ROSE.ink}}>AC out</span></AnswerBox></Row></div>
			<Lbl x={SC5.x + 40} y={SC5.y - 40} at={cycle + 6} color={ROSE.ink} size={30}>1 turn = 1 cycle</Lbl>
			<HandTag x={1200} y={905} text="current reverses each half cycle" at={lamp} size={32} color={ORANGE.ink} />
		</>
	);
};
