// Scenes 1 to 5: the hook (Module 6's last frame; "changing E -> B?" answered yes; the field chain and "speed = ?";
// prediction; the painted Sun and its beam), one theory for both fields (the charging capacitor with B loops round
// the gap), a wave that carries itself (the chain growing outwards, then turning into the three-quarter EM wave),
// what starts the wave (the painted mast, oscillating electrons, the frequency dial and the three contrast panels)
// and the speed from the maths (task strip, equation strip, data-sheet givens, three stages).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, Mark, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {INK} from '../../shared/tokens';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Arrow, CapCircuit, ChargeDot, EMWave, FrontArcs, LoopChain, Z_DIR, capGeom, frontRadii} from '../../physics/light/em';
import {LightPath} from '../../physics/light/spectrum';
import {Disc, SUN} from '../../physics/light/plates';
import {HandoffBoard, M6V20FinalFrame} from '../phys-y12-m6-v20/s3';
import {dur as v20dur} from '../phys-y12-m6-v20/common';
import {C, C_PRED, C_WRONG, DIAL_LAMBDA, DIAL_MHZ, EPS0, HEAD, HEAD_SIZE, PROD, ROOT, cap, cue, holdIf} from './common';
import {AMBER, BLUE, CapSymbol, CardRect, CoilSymbol, FLUX, GREY, LIGHT, LIGHT_INK, Lbl, MastRig, NAVY, ORANGE, ROSE, Strip, TravelArrow, fx, mastPts, sci} from './parts';

type Pt = [number, number];
const V20_END = v20dur('handoff') - 1;

// ---------- 1. hook ----------
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const curls = cue(id, 'curls round it'), flip = cue(id, 'Now flip it'), yes = cue(id, 'said yes'), calc = cue(id, 'calculate'), pred = cue(id, 'Make your prediction'), light = cap(id, cue(id, 'It matched the speed of light'));
	const h = holdIf(id);
	if (f < 1) return <M6V20FinalFrame />;
	const board = 1 - prog(f, flip, 20);
	const mv = prog(f, flip, 24);
	const chipX = 1100 + (700 - 1100) * mv, chipY = 420 + (200 - 420) * mv;
	const pulse = f >= curls && f < curls + 50 ? Math.sin((Math.PI * (f - curls)) / 50) : 0;
	const chain = prog(f, flip + 10, 20);
	const sun = prog(f, light, 20);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<div style={{position: 'absolute', inset: 0, opacity: board}}><HandoffBoard f={V20_END + f - 1} final chip={false} heading={false} /></div>
			<Chip x={96} y={890} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>Next: how did Maxwell connect electricity and magnetism to light?</Chip>
			<FrameSvg>
				{pulse > 0.001 ? <circle cx={640} cy={560} r={178} fill="none" stroke={BLUE.stroke} strokeWidth={6 + 10 * pulse} opacity={0.6 * pulse * board} /> : null}
				<g opacity={chain}>
					<LoopChain x={240} y={560} count={Math.min(9, 1 + (f - flip) / 8)} a={BLUE.stroke} b={FLUX} gap={150} size={105} shift={f >= calc ? ((f - calc) * 0.8) % 300 : 0} width={f >= calc ? 7 : 5} />
				</g>
				{f >= calc ? <TravelArrow from={[240, 420]} to={[1460, 420]} opacity={prog(f, calc, 14)} /> : null}
				{sun > 0.001 ? <g>
					<g opacity={sun}><Disc spec={SUN} cx={1600 + 120 * (1 - sun)} cy={520} d={320} /></g>
					<LightPath pts={[[1440, 520], [200, 520]]} color={LIGHT} draw={prog(f, light + 8, 30)} width={10} opacity={0.6} />
				</g> : null}
				{f >= light ? <Mark x={1010} y={790} at={light} kind="tick" color={INK} size={34} /> : null}
				{f >= light ? <Arrow from={[700, 430]} to={[790, 740]} color={NAVY.stroke} width={4} head={18} opacity={prog(f, light + 20, 12)} dash="10 8" /> : null}
				{h ? <Countdown start={h.startFrame} end={h.endFrame} x={1660} y={840} r={46} ringFrom={h.startFrame - 30} /> : null}
			</FrameSvg>
			<HandTag x={430} y={470} text="changing B" at={curls + 6} out={flip} size={34} color={FLUX} />
			<HandTag x={760} y={720} text="makes E" at={curls + 16} out={flip} size={34} color={BLUE.ink} />
			<Chip x={chipX} y={chipY} at={-60} size={32} w={560} color={INK}>{f >= yes ? 'changing E → B ✓' : 'changing E → B?'}</Chip>
			<Chip x={700} y={280} at={yes + 10} size={30} w={560} color={INK}>one set of equations: E and B</Chip>
			<Lbl x={1100} y={400} at={calc + 6} color={NAVY.ink} size={40}>speed = ?</Lbl>
			<Lbl x={240} y={700} at={flip + 20} color={INK} size={28}>changing fields, linked</Lbl>
			<Chip x={96} y={750} at={pred} out={light + 20} size={32} w={400} color={INK}>the speed of sound</Chip>
			<Chip x={560} y={750} at={pred + 6} size={32} w={400} color={INK}>the speed of light</Chip>
			<Chip x={1024} y={750} at={pred + 12} out={light + 20} size={32} w={400} color={INK}>no known speed</Chip>
			<HandTag x={1430} y={760} text="sunlight: the same kind of wave?" at={light + 30} size={34} color={LIGHT_INK} anchor="middle" />
		</>
	);
};

// ---------- 2. one theory for both fields ----------
const CG = {x: 220, y: 520, w: 900, h: 380, gap: 130, plateH: 250};
export const S02: React.FC = () => {
	const id = 'unification';
	const f = useCurrentFrame();
	const wire = cue(id, 'A current makes a magnetic field'), missing = cue(id, 'Maxwell added the missing piece'), charging = cue(id, 'capacitor charging'), cross = cue(id, 'No charge crosses the gap'), grow = cue(id, 'growing'), would = cue(id, 'would'), each = cue(id, 'each kind of field can create the other'), sep = cap(id, cue(id, 'separately'));
	const k = capGeom(CG);
	const on = f >= charging;
	const charge = on ? Math.min(1, (f - charging) / 300) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<CapCircuit g={CG} closed={prog(f, charging, 14)} current={on ? prog(f, charging, 12) : 0} charge={charge} field={on ? charge * prog(f, grow, 20) + 0.2 * prog(f, charging + 30, 20) : 0} loops={prog(f, would, 30)} wireLoop={prog(f, wire, 16)} phase={f * 0.012} currentColor={ORANGE.stroke} plusColor={ROSE.stroke} eColor={BLUE.stroke} bColor={FLUX} />
				{f >= cross ? <g opacity={prog(f, cross, 12)}>
					<path d={`M${k.pl + 4},${k.plateY1 + 40} v14 h${CG.gap - 8} v-14`} fill="none" stroke={NAVY.stroke} strokeWidth={4} strokeDasharray="10 7" />
				</g> : null}
				{f >= would ? <ellipse cx={k.cx + 150} cy={k.top - 120} rx={70} ry={40} fill="none" stroke={FLUX} strokeWidth={4} opacity={prog(f, would + 20, 12)} /> : null}
				{f >= each ? <Arrow from={[1010, 255]} to={[1060, 255]} color={INK} width={4} head={16} opacity={prog(f, each, 12)} /> : null}
				{f >= each ? <Arrow from={[1060, 255]} to={[1010, 255]} color={INK} width={4} head={16} opacity={prog(f, each, 12)} /> : null}
				{f >= sep ? <path d={`M96,330 v16 h1730 v-16`} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, sep, 12)} /> : null}
				{f >= missing && f < would ? <rect x={1080} y={210} width={420} height={70} rx={14} fill="none" stroke={INK} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, missing, 12)} /> : null}
			</FrameSvg>
			<Chip x={96} y={210} at={0} size={32} w={420} color={GREY.ink}>current → B</Chip>
			<Chip x={540} y={210} at={6} size={32} w={460} color={GREY.ink}>changing B → E</Chip>
			<Chip x={1080} y={210} at={would} size={32} w={460} color={INK} border={FLUX}>changing E → B</Chip>
			<Lbl x={96} y={400} at={sep} color={INK} size={32}>unification: one theory for electricity and magnetism</Lbl>
			<Lbl x={CG.x - 70} y={k.top + 130} at={wire + 10} out={charging} color={FLUX} size={28} anchor="end">B round</Lbl>
			<Lbl x={CG.x - 70} y={k.top + 165} at={wire + 10} out={charging} color={FLUX} size={28} anchor="end">a wire</Lbl>
			<Lbl x={k.cx} y={k.plateY1 + 95} at={cross + 6} color={NAVY.ink} size={28} anchor="middle">no charge crosses</Lbl>
			<HandTag x={k.cx + 110} y={k.top + 175} text="E increasing" at={grow + 6} size={34} color={BLUE.ink} />
			<HandTag x={1160} y={560} text="charge piling up" at={grow + 20} size={34} color={ROSE.ink} />
			<HandTag x={1160} y={660} text="B with no current crossing" at={would + 20} size={34} color={FLUX} />
			<Lbl x={1220} y={470} at={0} color={INK} size={28}>a capacitor charging (circuit diagram)</Lbl>
			<Chip x={1160} y={740} at={would + 30} size={28} w={640} color={INK}>Maxwell: a changing E makes B, just as a current does</Chip>
		</>
	);
};

// ---------- 3. a wave that carries itself ----------
export const S03: React.FC = () => {
	const id = 'self-sustaining-wave';
	const f = useCurrentFrame();
	const mb = cue(id, 'makes a changing magnetic field'), out = cue(id, 'out'), soOn = cue(id, 'and so on'), itself = cue(id, 'travels by itself'), medium = cue(id, 'medium'), em = cue(id, "That's an electromagnetic wave"), ra = cue(id, 'right angles to each other'), dir = cue(id, 'direction the wave travels'), trans = cue(id, "So it's a transverse wave"), phase = cap(id, cue(id, 'in phase'));
	const count = kf(f, [[0, 1], [mb, 1], [mb + 20, 2], [out, 2], [out + 20, 3], [soOn, 3], [soOn + 90, 9]]);
	const chainO = 1 - prog(f, em, 24);
	const waveO = prog(f, em + 10, 20);
	const tilt = prog(f, em + 20, 50);
	const ph = f * 0.07;
	const W = {x0: 260, x1: 1500, y: 560, amp: 150, lambda: 420};
	const Z34: Pt = [Z_DIR[0] / Math.hypot(Z_DIR[0], Z_DIR[1]) * 34, Z_DIR[1] / Math.hypot(Z_DIR[0], Z_DIR[1]) * 34];
	const mk = f >= phase ? W.x0 + ((f - phase) * 6) % (W.x1 - W.x0) : undefined;
	const pulse = Array.from({length: 9}, (_, k) => { const t0 = soOn + 10 * k; return f >= itself && f < itself + 120 ? Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (f - itself - 12 * k) / 24)))) : f >= t0 && f < t0 + 20 ? 0.5 : 0; });
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={chainO}><LoopChain x={260} y={560} count={count} a={BLUE.stroke} b={FLUX} gap={150} size={110} pulse={pulse} /></g>
				{f >= itself ? <g opacity={chainO}><TravelArrow from={[260, 360]} to={[1500, 360]} opacity={prog(f, itself, 12)} /></g> : null}
				{f >= itself ? <path d="M330,700 q75,70 150,0" fill="none" stroke={INK} strokeWidth={4} strokeDasharray="8 7" opacity={prog(f, itself + 10, 12) * chainO} /> : null}
				<EMWave {...W} phase={ph} eColor={BLUE.stroke} bColor={FLUX} axisColor={NAVY.stroke} tilt={tilt} opacity={waveO} marker={mk} />
				{f >= ra ? <path d={`M${W.x0},${W.y - 34} L${W.x0 + Z34[0]},${W.y - 34 + Z34[1]} L${W.x0 + Z34[0]},${W.y + Z34[1]}`} fill="none" stroke={INK} strokeWidth={4} opacity={prog(f, ra, 12)} /> : null}
				{f >= dir ? <path d={`M${W.x0},${W.y - 34} h34 v34`} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, dir, 12)} /> : null}
			</FrameSvg>
			<Lbl x={260} y={340} at={itself + 4} out={em} color={NAVY.ink} size={32}>travel</Lbl>
			<HandTag x={420} y={790} text="each makes the next" at={itself + 14} out={em} size={36} color={BLUE.ink} />
			<CrossedChip x={1200} y={200} at={medium} crossAt={medium + 14} size={30}>air or water needed</CrossedChip>
			<HandTag x={1210} y={300} text="no medium" at={medium + 24} size={38} color={NAVY.ink} />
			<Lbl x={W.x1 + 40} y={W.y + 70} at={em + 30} color={NAVY.ink} size={28}>direction of travel</Lbl>
			<Lbl x={W.x0 + 30} y={W.y - W.amp - 40} at={em + 30} color={BLUE.ink} size={34}>E</Lbl>
			<Lbl x={W.x0 - 140} y={W.y + 150} at={em + 40} color={FLUX} size={34}>B</Lbl>
			<Lbl x={96} y={900} at={em + 30} color={GREY.ink} size={26}>model wave, slowed</Lbl>
			<Chip x={96} y={200} at={trans} size={32} w={520} color={INK}>transverse: fields ⟂ travel</Chip>
			<Chip x={640} y={200} at={phase} size={32} w={300} color={INK}>in phase</Chip>
			<HandTag x={760} y={300} text="peaks together" at={phase + 16} size={36} color={NAVY.ink} />
			<Lbl x={W.x0 - 80} y={W.y - 50} at={ra + 4} color={INK} size={26} anchor="end">90°</Lbl>
		</>
	);
};

// ---------- 4. what starts the wave ----------
const MP = {x: 120, y: 190, w: 170};
const SPEED = 4; // px per frame for the model fronts
export const S04: React.FC = () => {
	const id = 'production';
	const f = useCurrentFrame();
	const ac = cue(id, 'alternating voltage'), sec = cue(id, 'millions of times a second'), acc = cue(id, 'always accelerating'), outw = cue(id, 'outwards'), fq = cue(id, "frequency of the charges' oscillation"), still = cue(id, 'sitting still'), cv = cue(id, 'constant velocity'), only = cap(id, cue(id, 'Only accelerating charges radiate'));
	// dial: 50 MHz from "second", 100 MHz from fq + 60, 200 MHz from fq + 150 (model periods 60, 30, 15 frames)
	const steps: [number, number][] = [[sec, 0], [fq + 60, 1], [fq + 150, 2]];
	const stepAt = (g: number) => { let k = -1; for (const [t, i] of steps) if (g >= t) k = i; return k; };
	const per = [60, 30, 15];
	// emission times: walk from `sec` with the period of the current step
	const emit: number[] = [];
	for (let t = sec; t <= f; ) { const k = stepAt(t); emit.push(t); t += per[Math.max(0, k)]; }
	const k = stepAt(f);
	const phaseAt = (g: number) => { let ph = 0, t = sec; while (t + 1 <= g) { const kk = stepAt(t); ph += (2 * Math.PI) / per[Math.max(0, kk)]; t += 1; } return ph; };
	const osc = f >= sec ? Math.sin(phaseAt(f)) : 0;
	const m = mastPts(MP);
	const fronts = f >= outw ? frontRadii(emit.filter(e => e >= outw - 200), f, SPEED, 1050) : [];
	const cycles = emit.length;
	const mhz = k >= 0 ? DIAL_MHZ[k] : DIAL_MHZ[0];
	const lam = k >= 0 ? DIAL_LAMBDA[k] : DIAL_LAMBDA[0];
	const pan = (i: number) => ({x: 620 + i * 410, y: 640, w: 380, h: 250});
	const p2x = f >= cv ? 60 + ((f - cv) * 1.5) % 260 : 60;
	const p3y = Math.sin(f * 0.2) * 40;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<MastRig p={MP} osc={osc} dots={1} ac={prog(f, ac, 12)} ring={prog(f, acc + 30, 12)} />
				<CardRect x={1270} y={170} w={560} h={440} />
				<g>
					<circle cx={1700} cy={530} r={56} fill="#f1ebdf" stroke={INK} strokeWidth={4} />
					{[0, 1, 2].map(i => { const a = ((200 + 70 * i) * Math.PI) / 180; return <text key={i} x={1700 + 92 * Math.cos(a)} y={530 + 92 * Math.sin(a) + 10} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: k === i ? ROSE.ink : INK}}>{DIAL_MHZ[i]}</text>; })}
					{(() => { const a = ((200 + 70 * Math.max(0, k)) * Math.PI) / 180; return <line x1={1700} y1={530} x2={1700 + 48 * Math.cos(a)} y2={530 + 48 * Math.sin(a)} stroke={ROSE.stroke} strokeWidth={8} strokeLinecap="round" />; })()}
				</g>
				<FrontArcs cx={m.mid[0]} cy={m.mid[1]} fronts={fronts} a0={-22} a1={22} colors={[BLUE.stroke, FLUX]} maxR={1050} opacity={1} />
				{f >= acc ? <g opacity={prog(f, acc, 12)}>
					<CardRect x={330} y={420} w={250} h={150} />
					<line x1={350} y1={495} x2={560} y2={495} stroke={INK} strokeWidth={2} />
					<path d={Array.from({length: 61}, (_, i) => `${i ? 'L' : 'M'}${350 + i * 3.5},${495 - 50 * Math.cos(i * 0.21)}`).join(' ')} fill="none" stroke={ROSE.stroke} strokeWidth={4} />
				</g> : null}
				{f >= still ? [0, 1, 2].map(i => { const P = pan(i); return <g key={i} opacity={prog(f, [still, cv, only][i], 14)}><CardRect x={P.x} y={P.y} w={P.w} h={P.h} /></g>; }) : null}
				{f >= still ? <g opacity={prog(f, still, 14)}>
					{Array.from({length: 8}, (_, i) => { const a = (i * Math.PI) / 4; const cx = pan(0).x + 190, cy = pan(0).y + 120; return <Arrow key={i} from={[cx + 22 * Math.cos(a), cy + 22 * Math.sin(a)]} to={[cx + 90 * Math.cos(a), cy + 90 * Math.sin(a)]} color={BLUE.stroke} width={3} head={12} />; })}
					<ChargeDot x={pan(0).x + 190} y={pan(0).y + 120} r={18} color={ROSE.stroke} sign="−" />
				</g> : null}
				{f >= cv ? <g opacity={prog(f, cv, 14)}>
					{[40, 70].map(r => <circle key={r} cx={pan(1).x + p2x} cy={pan(1).y + 120} r={r} fill="none" stroke={FLUX} strokeWidth={3} />)}
					<ChargeDot x={pan(1).x + p2x} y={pan(1).y + 120} r={18} color={ROSE.stroke} sign="−" />
					<Arrow from={[pan(1).x + p2x + 18, pan(1).y + 200]} to={[pan(1).x + p2x + 70, pan(1).y + 200]} color={AMBER.stroke} width={4} head={14} />
				</g> : null}
				{f >= only ? <g opacity={prog(f, only, 14)}>
					<FrontArcs cx={pan(2).x + 80} cy={pan(2).y + 125} fronts={frontRadii(Array.from({length: 40}, (_, i) => only + i * 16), f, 3, 290)} a0={-40} a1={40} colors={[BLUE.stroke, FLUX]} maxR={290} width={4} />
					<ChargeDot x={pan(2).x + 80} y={pan(2).y + 125 + p3y} r={18} color={ROSE.stroke} sign="−" />
				</g> : null}
			</FrameSvg>
			<Lbl x={MP.x + 85} y={930} at={0} color={INK} size={28} anchor="middle">radio mast</Lbl>
			<HandTag x={330} y={240} text="speeding up, slowing, reversing" at={acc + 6} size={32} color={ROSE.ink} />
			<Lbl x={345} y={600} at={acc + 10} color={ROSE.ink} size={26}>speed and direction always changing</Lbl>
			<Lbl x={355} y={440} at={acc + 10} color={INK} size={26}>v</Lbl>
			<Lbl x={1300} y={215} at={0} color={GREY.ink} size={26}>frequency dial (MHz); waves slowed down</Lbl>
			<Lbl x={1310} y={270} at={sec} color={ROSE.ink} size={40}>{`f (charges) = ${mhz} MHz`}</Lbl>
			<Lbl x={1310} y={330} at={outw} color={BLUE.ink} size={40}>{`f (wave) = ${mhz} MHz`}</Lbl>
			<Lbl x={1310} y={400} at={fq} color={INK} size={52}>{`λ = c / f = ${fx(lam, 1)} m`}</Lbl>
			<Lbl x={1310} y={470} at={fq} color={GREY.ink} size={30}>{`cycles: ${cycles}   fronts: ${f >= outw ? emit.filter(e => e >= outw - 200).length : 0}`}</Lbl>
			<HandTag x={1300} y={570} text="f (wave) = f (charges)" at={fq + 10} size={34} color={INK} />
			<Lbl x={pan(0).x + 190} y={pan(0).y + 235} at={still + 6} color={INK} size={26} anchor="middle">still: steady E, no wave</Lbl>
			<Lbl x={pan(1).x + 190} y={pan(1).y + 235} at={cv + 6} color={INK} size={26} anchor="middle">constant velocity: no wave</Lbl>
			<Lbl x={pan(2).x + 190} y={pan(2).y + 235} at={only + 6} color={INK} size={26} anchor="middle">accelerating: EM wave</Lbl>
			<HandTag x={pan(0).x + 20} y={pan(0).y - 30} text="no acceleration: no wave" at={cv + 30} size={34} color={ROSE.ink} />
			<Chip x={pan(2).x - 20} y={560} at={only + 10} size={28} w={420} color={INK}>accelerating charge → EM wave</Chip>
		</>
	);
};

// ---------- 5. the speed falls out of the maths ----------
export const S05: React.FC = () => {
	const id = 'predicted-speed';
	const f = useCurrentFrame();
	const tog = cue(id, 'multiplied together'), mag = cue(id, 'magnetic fields'), ele = cue(id, 'electric fields'), lt = cue(id, 'nothing to do with light'), mult = cue(id, 'Multiply them'), root = cue(id, 'take the square root'), that = cue(id, 'take one over that'), three = cue(id, 'three point zero zero times ten to the eight'), match = cue(id, 'matched measurements'), wave = cap(id, cue(id, 'light is an electromagnetic wave'));
	const ph = f * 0.08;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Strip x={96} y={180} at={0} size={34}>Find the speed of an electromagnetic wave in a vacuum.</Strip>
			<Strip x={96} y={262} at={tog} size={44}>c = 1 / √(μ₀ε₀)</Strip>
			<Lbl x={96} y={330} at={0} out={tog} color={GREY.ink} size={30}>Maxwell's equations fix the speed in a vacuum</Lbl>
			<div style={{position: 'absolute', left: 1100, top: 180, width: 720, background: NAVY.soft, border: `3px solid ${NAVY.stroke}`, borderRadius: 14, padding: '8px 22px 12px', opacity: prog(f, 4, 12)}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, color: NAVY.ink}}>data sheet</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, color: FLUX, opacity: prog(f, mag, 12)}}>μ₀ = 4π × 10⁻⁷ N A⁻²</div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, color: BLUE.ink, opacity: prog(f, ele, 12)}}>{`ε₀ = ${fx(EPS0 * 1e12, 3)} × 10⁻¹² C² N⁻¹ m⁻²`}</div>
			</div>
			<FrameSvg>
				<g opacity={prog(f, mag, 12)}><CoilSymbol x={1120} y={390} w={130} color={FLUX} /></g>
				<g opacity={prog(f, ele, 12)}><CapSymbol x={1120} y={470} w={130} color={BLUE.stroke} /></g>
				{f >= three ? <ellipse cx={200} cy={290} rx={58} ry={36} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={prog(f, three + 20, 12)} /> : null}
				<EMWave x0={kf(f, [[mult, 300], [mult + 30, 1180]])} x1={1720} y={kf(f, [[mult, 640], [mult + 30, 800]])} amp={kf(f, [[mult, 130], [mult + 30, 70]])} lambda={kf(f, [[mult, 380], [mult + 30, 220]])} phase={ph} eColor={BLUE.stroke} bColor={FLUX} axisColor={NAVY.stroke} arrows={0.6} width={5} />
			</FrameSvg>
			<HandTag x={1280} y={392} text="from coils" at={mag + 10} size={34} color={FLUX} />
			<HandTag x={1280} y={472} text="from capacitors" at={ele + 10} size={34} color={BLUE.ink} />
			<CrossedChip x={1560} y={410} at={lt} crossAt={lt + 12} size={30}>light</CrossedChip>
			<HandTag x={1540} y={520} text="measured without light" at={lt + 26} size={30} color={GREY.ink} />
			<div style={{position: 'absolute', left: 96, top: 380, display: 'flex', flexDirection: 'column', gap: 14, width: 1000}}>
				<Row at={mult} ageAt={root} size={44} oldSize={34}>{`μ₀ε₀ = ${sci(PROD, 3)} s² m⁻²`}</Row>
				<Row at={root} ageAt={three} size={44} oldSize={34}>{`√(μ₀ε₀) = ${sci(ROOT, 3)} s m⁻¹`}</Row>
				<Row at={three - 8} size={52}><AnswerBox at={three}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>{`c = 1 / (${sci(ROOT, 3)}) = ${sci(C_PRED, 2)} m s⁻¹`}</span></AnswerBox></Row>
			</div>
			<CrossedChip x={96} y={660} at={that} crossAt={that + 20} size={28} caption="root skipped: not a speed">{`1 / (μ₀ε₀) = ${sci(C_WRONG, 2)}`}</CrossedChip>
			<Chip x={96} y={780} at={match} size={30} w={980} color={GREY.ink} border={GREY.stroke}>{`= measured speed of light (optics): about ${sci(C, 0)} m s⁻¹`}</Chip>
			<div style={{position: 'absolute', left: 96, top: 860}}><Row at={wave} size={40}><AnswerBox at={wave + 6}><span style={{whiteSpace: 'nowrap'}}>light is an electromagnetic wave</span></AnswerBox></Row></div>
			<Lbl x={1180} y={680} at={mult + 30} color={GREY.ink} size={26}>model wave, slowed</Lbl>
			<Lbl x={kf(f, [[mult, 1000], [mult + 30, 1500]])} y={920} at={0} out={three} color={NAVY.ink} size={36} anchor="middle">speed in a vacuum = ?</Lbl>
			<Lbl x={1500} y={920} at={three + 10} color={ORANGE.ink} size={36} anchor="middle">{`c = ${sci(C_PRED, 2)} m s⁻¹`}</Lbl>
		</>
	);
};
