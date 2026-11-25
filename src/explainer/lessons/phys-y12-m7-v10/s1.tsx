// Scenes 1 to 6: the hook (last time's zinc plate under the dim ultraviolet lamp and the bright red lamp), the
// photoelectric effect and the work function (the painted photocell, multimeter and bench lamp; the surface inset with
// its energy step), what the wave model predicts (the painted plate under a smooth grey wavefront; one electron's
// energy bar filling slowly; three predictions), observation 1 (the live bench: frequency and brightness sliders, the
// threshold), observation 2 (frequency sets the top speed, brightness the number) and observation 3 (the delay
// estimate on a logarithmic timeline).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import {BENCH_LAMP, METAL_PLATE, nat} from '../../physics/light/thermal';
import {Beam, Electron, TIMER} from '../../physics/light/photo';
import {wlColor} from '../../physics/light/spectrum';
import {Slider} from '../phys-y12-m7-v04/parts';
import {HandoffBoard9, M7V09FinalFrame} from '../phys-y12-m7-v09/s3';
import {C, F0, HEAD, HEAD_SIZE, L_RED, L_UV, PHI, P_ATOM, RATIO, T_WAIT, cap, cue, fOf} from './common';
import {AMBER, Bench, CG, GREY, INK, LP, Lbl, NAVY, ORANGE, RED_BEAM, SLATE, Stream, UV, UV_INK, lampAp, reading, sci} from './parts';

type Pt = [number, number];

// ---------- the prediction strip (scenes 4 to 9) ----------
const STRIP = [
	{x: 96, w: 560, t: 'any f works, if bright or long enough'},
	{x: 676, w: 520, t: 'brighter → faster electrons'},
	{x: 1216, w: 600, t: 'dim light → a delay while it builds up'},
];
/** The three wave-model chips along the top; each can be crossed (slate) and given a hand note. */
export const PredStrip: React.FC<{cross?: readonly number[]; notes?: readonly ({at: number; text: string; color: string} | null)[]; under?: number; at?: number}> = ({cross = [], notes = [], under, at = -30}) => (
	<>
		{STRIP.map((c, i) => <Chip key={i} x={c.x} y={166} at={at} size={26} w={c.w} color={GREY.ink}>{c.t}</Chip>)}
		{STRIP.map((c, i) => (cross[i] !== undefined ? <HandTag key={`c${i}`} x={0} y={0} at={cross[i]} color={SLATE.stroke} marks={[{kind: 'cross', cx: c.x + c.w - 40, cy: 190, size: 40}]} /> : null))}
		{under !== undefined ? <HandTag x={0} y={0} at={under} color={SLATE.stroke} marks={[{kind: 'underline', x1: STRIP[1].x + 16, x2: STRIP[1].x + 140, y: 214}]} /> : null}
		{notes.map((n, i) => (n ? <HandTag key={`n${i}`} x={STRIP[i].x + 10} y={250} text={n.text} at={n.at} size={30} color={n.color} /> : null))}
	</>
);

// ---------- 1. hook ----------
const ZP = {x: 640, y: 560, w: 560}, LL = {x: 330, y: 220, w: 300}, LR = {x: 1290, y: 220, w: 300};
const TOP = nat(METAL_PLATE, ZP, 720, 520);
const HIT_L: Pt = [TOP[0] - 90, TOP[1] - 10], HIT_R: Pt = [TOP[0] + 110, TOP[1] + 10];
const AP_L = lampAp(LL), AP_R = lampAp(LR, true);
/** Electrons leaving the zinc under the ultraviolet beam (phase 0.6 matches last time's final frame at frame 1). */
const UVDots: React.FC<{f: number}> = ({f}) => {
	const eT = (0.6 + (f - 1) / 40) % 1;
	return <>{[0, 1, 2].map(i => { const u = (eT + i / 3) % 1; return <Electron key={i} x={HIT_L[0] - 40 + i * 30 - 60 * u} y={HIT_L[1] - 30 - 160 * u} r={9} color={NAVY.stroke} />; })}</>;
};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const sits = cue(id, 'sits under two lamps'), fly = cue(id, 'electrons fly off the zinc'), none = cue(id, 'nothing comes off'), up = cue(id, 'even turned right up'), pred = cue(id, 'prediction'), waves = cue(id, 'Waves say brightness should win'), doesnt = cue(id, "It doesn't"), el = cap(id, cue(id, 'electrons', 2));
	if (f < 1) return <M7V09FinalFrame />;
	const wide = kf(f, [[up, 1], [up + 14, 1.35], [up + 30, 1.35], [up + 44, 1.7]]);
	const red = (k: number) => `M${AP_R[0]},${AP_R[1] - 30 * k} L${HIT_R[0] - 60 * k},${HIT_R[1]} L${HIT_R[0] + 60 * k},${HIT_R[1]} L${AP_R[0]},${AP_R[1] + 30 * k} Z`;
	const crossAt = Math.max(doesnt, pred + 92);
	return (
		<>
			<div style={{position: 'absolute', inset: 0, opacity: 1 - prog(f, 6, 20)}}><HandoffBoard9 f={0} final heading={false} chip={false} /></div>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={METAL_PLATE} p={ZP} />
				<LPlate spec={BENCH_LAMP} p={LL} />
				<line x1={AP_L[0]} y1={AP_L[1]} x2={HIT_L[0]} y2={HIT_L[1]} stroke={wlColor(400)} strokeWidth={4} />
				<line x1={AP_L[0]} y1={AP_L[1]} x2={HIT_L[0]} y2={HIT_L[1]} stroke={UV_INK} strokeWidth={2} strokeDasharray="6 8" />
				<UVDots f={f} />
				<LPlate spec={BENCH_LAMP} p={LR} flip />
				<path d={red(wide)} fill={RED_BEAM} opacity={Math.min(0.85, 0.55 * wide)} />
				{f >= none && f < none + 40 ? <ellipse cx={HIT_R[0]} cy={HIT_R[1]} rx={90} ry={34} fill="none" stroke={RED_BEAM} strokeWidth={5} opacity={Math.sin(Math.PI * (f - none) / 40)} /> : null}
				<Countdown start={pred} end={pred + 90} x={1720} y={800} r={40} />
			</FrameSvg>
			<Lbl x={1180} y={860} at={-60} color={INK} size={28}>clean zinc plate</Lbl>
			<Lbl x={LL.x} y={LL.y - 20} at={-60} color={UV_INK} size={28}>ultraviolet, dim</Lbl>
			<Lbl x={LR.x + 20} y={LR.y - 20} at={-60} color={wlColor(650)} size={28}>red, very bright</Lbl>
			<HandTag x={0} y={0} at={sits} color={AMBER.stroke} marks={[{kind: 'circle', cx: LL.x + 150, cy: LL.y + 110, rx: 170, ry: 130}, {kind: 'circle', cx: LR.x + 150, cy: LR.y + 110, rx: 170, ry: 130}]} />
			<HandTag x={96} y={520} text="dim UV: electrons out" at={fly + 6} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: HIT_L[0] - 60, cy: HIT_L[1] - 110, rx: 90, ry: 110}]} />
			<HandTag x={1250} y={560} text="bright red: none" at={none + 6} size={32} color={wlColor(650)} />
			<HandTag x={1610} y={300} text="brighter" at={up + 10} size={32} color={wlColor(650)} />
			<Chip x={1250} y={640} at={pred} size={30} color={INK}>bright lamp</Chip>
			<Chip x={1250} y={720} at={pred + 6} size={30} color={INK}>high-frequency lamp</Chip>
			<HandTag x={1500} y={662} text="wave model" at={waves} size={30} color={GREY.ink} marks={[{kind: 'box', x: 1240, y: 634, w: 230, h: 58}]} />
			<HandTag x={0} y={0} at={crossAt} color={SLATE.stroke} marks={[{kind: 'cross', cx: 1355, cy: 663, size: 44}]} />
			<HandTag x={0} y={0} at={el} color={AMBER.stroke} marks={[{kind: 'underline', x1: 262, x2: 690, y: 152}]} />
		</>
	);
};

// ---------- 2. the photoelectric effect and the work function ----------
const INS = {x: 1250, y: 250, w: 570, h: 290};
const SurfaceInset: React.FC<{f: number; at: number; phiAt: number}> = ({f, at, phiAt}) => {
	const o = prog(f, at, 16);
	if (o <= 0.001) return null;
	const edge = INS.x + 330, floor = INS.y + INS.h - 40, top = INS.y + 70;
	const climb = f >= phiAt ? 0.6 * Math.max(0, Math.sin(Math.PI * (((f - phiAt) % 60) / 60))) : 0;
	return (
		<g opacity={o}>
			<rect x={INS.x} y={INS.y} width={INS.w} height={INS.h} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			<rect x={INS.x + 3} y={INS.y + 3} width={edge - INS.x - 3} height={INS.h - 6} fill="#e6e1d8" />
			{Array.from({length: 12}, (_, i) => { const cx = INS.x + 40 + (i % 4) * 80, cy = INS.y + 60 + Math.floor(i / 4) * 80; return <g key={i}><circle cx={cx} cy={cy} r={16} fill="#c9c2b6" stroke={INK} strokeWidth={2} /><text x={cx} y={cy + 9} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>+</text></g>; })}
			{Array.from({length: 7}, (_, i) => <Electron key={i} x={INS.x + 80 + (i % 4) * 80 + 4 * Math.sin(f / 7 + i)} y={INS.y + 100 + Math.floor(i / 4) * 80 + 4 * Math.cos(f / 9 + i)} r={8} color={NAVY.stroke} />)}
			<path d={`M${INS.x + 20},${floor} L${edge},${floor} L${edge},${top} L${INS.x + INS.w - 20},${top}`} fill="none" stroke={SLATE.stroke} strokeWidth={6} strokeLinejoin="round" opacity={prog(f, at + 20, 14)} />
			{f >= phiAt ? <Electron x={edge - 30} y={floor - 14 - climb * (floor - top)} r={10} color={NAVY.stroke} /> : null}
		</g>
	);
};
export const S02: React.FC = () => {
	const id = 'effect-work-function';
	const f = useCurrentFrame();
	const pe = cue(id, 'is called the photoelectric effect'), cath = cue(id, 'called the cathode'), an = cue(id, 'called the anode'), cross = cue(id, 'electrons cross the gap'), pc = cue(id, 'measures the photocurrent'), held = cue(id, 'held in by the positive ions'), phi = cue(id, 'phi'), zinc = cue(id, "Zinc's is about four point three electron volts"), j = cap(id, cue(id, 'joules'));
	const on = prog(f, cross, 14);
	const t = Math.max(0, f - cross) / 30;
	const edge = INS.x + 330, floor = INS.y + INS.h - 40, top = INS.y + 70;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Bench nm={L_UV} bright={0.8} reading={f >= pc + 8 ? '0.8' : '0.0'} beamO={on} />
				{f >= cross ? <Stream t={t} nm={L_UV} bright={0.8} /> : null}
				<SurfaceInset f={f} at={held} phiAt={phi} />
			</FrameSvg>
			<Chip x={96} y={166} at={pe} size={30} w={1100} color={INK}>photoelectric effect: light ejects electrons from a metal surface</Chip>
			<Lbl x={CG.cathode[0] - 200} y={CG.cTop[1] - 40} at={cath} color={INK} size={30}>cathode (metal)</Lbl>
			<HandTag x={0} y={0} at={cath + 4} color={INK} marks={[{kind: 'arrow', from: [CG.cathode[0] - 120, CG.cTop[1] - 30], to: [CG.cathode[0] - 20, CG.cTop[1] + 30], bend: 0.15}]} />
			<Lbl x={CG.anode[0] + 40} y={CG.aTop[1] - 50} at={an} color={INK} size={30}>anode (collector)</Lbl>
			<HandTag x={0} y={0} at={an + 4} color={INK} marks={[{kind: 'arrow', from: [CG.anode[0] + 90, CG.aTop[1] - 40], to: [CG.anode[0] + 6, CG.aTop[1] + 20], bend: -0.15}]} />
			<HandTag x={0} y={0} at={cross + 10} color={NAVY.stroke} marks={[{kind: 'arrow', from: [CG.cathode[0] - 4, CG.cBot[1] + 20], to: [CG.anode[0] + 10, CG.cBot[1] + 20], bend: 0.3}]} />
			<Lbl x={LP.x + 10} y={LP.y + 260} at={cross} color={UV_INK} size={28}>ultraviolet</Lbl>
			<Lbl x={96} y={790} at={pc} color={NAVY.ink} size={30}>ammeter: photocurrent</Lbl>
			<Lbl x={770} y={650} at={4} color={GREY.ink} size={26}>quartz window: lets UV through</Lbl>
			<HandTag x={INS.x + 350} y={INS.y + 140} text="to escape, climb out" at={held + 30} size={30} color={SLATE.ink} />
			<HandTag x={0} y={0} at={phi + 6} color={SLATE.stroke} marks={[{kind: 'brace', x: edge + 14, y1: top, y2: floor, facing: 'right'}]} />
			<Lbl x={edge + 60} y={(top + floor) / 2 + 20} at={phi + 6} color={SLATE.ink} size={40}>ϕ</Lbl>
			<Chip x={INS.x} y={INS.y + INS.h + 20} at={phi} size={28} w={INS.w} color={SLATE.ink} border={SLATE.stroke}>Work function (ϕ): The minimum energy needed to eject an electron from a metal surface; different for each metal.</Chip>
			<Lbl x={INS.x} y={INS.y + INS.h + 210} at={zinc} color={SLATE.ink} size={40}>zinc: ϕ ≈ 4.3 eV</Lbl>
			<Chip x={INS.x} y={INS.y + INS.h + 250} at={j} size={28} w={INS.w} color={INK} border={INK}>1 eV = 1.602 × 10⁻¹⁹ J (from W = qV)</Chip>
		</>
	);
};

// ---------- 3. what the wave model predicts ----------
const ZP3 = {x: 96, y: 300, w: 820};
export const S03: React.FC = () => {
	const id = 'wave-predictions';
	const f = useCurrentFrame();
	const spread = cue(id, 'spread smoothly across the wavefront'), bright = cue(id, 'brighter light delivers more energy every second'), soak = cue(id, 'soak up energy gradually'), pr = cue(id, 'predictions'), any = cue(id, 'Any frequency should work'), en = cue(id, 'kinetic energy'), del = cap(id, cue(id, 'delay'));
	const top = nat(METAL_PLATE, ZP3, 720, 520);
	const amp = kf(f, [[bright, 14], [bright + 30, 30]]);
	const fill = kf(f, [[soak, 0], [soak + 240, 0.75]], false);
	const BX = 960, BB = 860, BH = 300;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={96} y={180} at={0} color={GREY.ink} size={32}>wave model</Lbl>
			<FrameSvg>
				<LPlate spec={METAL_PLATE} p={ZP3} />
				{f >= spread ? Array.from({length: 6}, (_, i) => { const y = 230 + ((f - spread) * 2.2 + i * 40) % 240; return <path key={i} d={Array.from({length: 40}, (_, k) => `${k ? 'L' : 'M'}${ZP3.x + 40 + k * 18},${y + amp * Math.sin(k * 0.7 + i)}`).join(' ')} fill="none" stroke={GREY.stroke} strokeWidth={4} opacity={0.75 * prog(f, spread, 16)} />; }) : null}
				{[0, 1, 2, 3, 4].map(i => <Electron key={i} x={top[0] - 260 + i * 120} y={top[1] + 40 - i * 18} r={10} color={NAVY.stroke} />)}
				{f >= 0 ? <g opacity={prog(f, 6, 12)}>
					<rect x={BX} y={BB - BH * fill} width={70} height={BH * fill} rx={6} fill={ORANGE.stroke} />
					<rect x={BX} y={BB - BH} width={70} height={BH} rx={6} fill="none" stroke={INK} strokeWidth={3} />
					<line x1={BX - 30} y1={BB - BH} x2={BX + 100} y2={BB - BH} stroke={SLATE.stroke} strokeWidth={5} strokeDasharray="12 8" />
				</g> : null}
			</FrameSvg>
			<HandTag x={ZP3.x + 40} y={790} text="intensity: energy per second per m²" at={bright + 10} size={30} color={GREY.ink} />
			<HandTag x={top[0] - 300} y={top[1] + 110} text="soak it up" at={soak + 10} size={32} color={GREY.ink} marks={[{kind: 'arrow', from: [top[0] - 120, top[1] + 100], to: [BX - 10, BB - 100], bend: -0.2}]} />
			<Lbl x={BX - 20} y={BB + 50} at={soak} color={ORANGE.ink} size={28}>one electron's energy</Lbl>
			<Lbl x={BX + 110} y={BB - BH + 10} at={soak} color={SLATE.ink} size={28}>enough to escape</Lbl>
			<div style={{position: 'absolute', left: 1180, top: 320, width: 640, opacity: prog(f, 6, 14)}}>
				<div style={{background: '#efe9de', border: `3px solid ${GREY.stroke}`, borderRadius: 18, padding: '18px 24px 26px', fontFamily: 'Inter Tight', fontWeight: 800, color: GREY.ink}}>
					<div style={{fontSize: 36, marginBottom: 14}}>Wave model predicts</div>
					<div style={{fontSize: 28, color: GREY.ink, opacity: 1 - prog(f, pr, 10), height: 0}}>energy arrives smoothly and builds up, so...</div>
					{[['1. any frequency works if bright or long enough', any], ['2. brighter → faster electrons', en], ['3. dim light → a delay while energy builds up', del]].map(([t, a], i) => <div key={i} style={{fontSize: 36, lineHeight: 1.2, marginTop: 14, opacity: prog(f, a as number, 12), color: INK}}>{t as string}</div>)}
				</div>
			</div>
			<HandTag x={0} y={0} at={del + 16} color={GREY.stroke} marks={[{kind: 'brace', x: 1160, y1: 400, y2: 820, facing: 'left'}]} />
		</>
	);
};

// ---------- the live bench, shared by 4, 5 and 9 ----------
/** Frequency (× 10¹⁴ Hz) for a wavelength in nm, and back. */
export const f14 = (nm: number) => fOf(nm) / 1e14;
export const nmOf = (F: number) => (C / (F * 1e14)) * 1e9;
export const FS = {x: 880, y: 820, w: 320, v0: 3, v1: 16}, BS = {x: 880, y: 912, w: 320};
export const fsX = (F: number) => FS.x + ((F - FS.v0) / (FS.v1 - FS.v0)) * FS.w;
/** The sliders under the lamp: frequency (with the f₀ marker) and brightness. */
export const Sliders: React.FC<{F: number; bright: number; f0At?: number; f?: number}> = ({F, bright, f0At = -30, f = 0}) => (
	<g>
		<Slider x={FS.x} y={FS.y} w={FS.w} v0={FS.v0} v1={FS.v1} v={F} label="frequency f" color={wlColor(Math.max(380, Math.min(700, nmOf(F))))} />
		{f >= f0At ? <g opacity={prog(f, f0At, 12)}><line x1={fsX(F0 / 1e14)} y1={FS.y - 18} x2={fsX(F0 / 1e14)} y2={FS.y + 18} stroke={SLATE.stroke} strokeWidth={6} /><text x={fsX(F0 / 1e14)} y={FS.y + 48} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 28, fill: SLATE.ink}}>f₀</text></g> : null}
		<Slider x={BS.x} y={BS.y} w={BS.w} v0={0} v1={2.2} v={bright} label="brightness" color={INK} />
	</g>
);
/** The fastest-electron speed gauge: an orange arrow whose length follows the top speed. */
export const SpeedGauge: React.FC<{x: number; y: number; nm: number; opacity?: number}> = ({x, y, nm, opacity = 1}) => {
	const k = Math.max(0, (6.626e-34 * 3e8) / (nm * 1e-9) / 1.602e-19 - PHI);
	const L = k > 0.02 ? 60 + 260 * Math.sqrt(k / 1.9) : 0;
	return opacity <= 0.001 ? null : <g opacity={opacity}>{L > 0 ? <><line x1={x} y1={y} x2={x + L} y2={y} stroke={ORANGE.stroke} strokeWidth={9} strokeLinecap="round" /><path d={`M${x + L + 22},${y} l-26,-15 v30 z`} fill={ORANGE.stroke} /></> : <text x={x} y={y + 12} style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: ORANGE.ink}}>none</text>}<circle cx={x - 18} cy={y} r={11} fill={NAVY.stroke} stroke="#fff" strokeWidth={2.5} /></g>;
};

// ---------- 4. observation 1: a threshold frequency ----------
const TP = {x: 1360, y: 520, w: 300};
export const S04: React.FC = () => {
	const id = 'threshold';
	const f = useCurrentFrame();
	const f0 = cue(id, 'threshold frequency, f zero'), below = cue(id, 'Below it'), wait = cue(id, 'wait'), above = cue(id, 'Above it, electrons come out'), works = cap(id, cue(id, 'works'));
	const F = kf(f, [[above, f14(L_RED)], [above + 30, f14(L_UV)]]);
	const nm = nmOf(F);
	const bright = kf(f, [[below + 10, 1], [below + 40, 2], [above, 2], [above + 20, 1]]);
	const tSec = f >= below + 10 && f < above ? Math.floor((f - below - 10) / 30) * 7 : 0;
	const D0 = nat(TIMER, TP, 300, 280), D1 = nat(TIMER, TP, 1300, 540);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<PredStrip cross={[wait]} />
			<FrameSvg>
				<Bench nm={nm} bright={bright} reading={reading(nm, bright)} />
				<Stream t={f / 30} nm={nm} bright={bright} />
				<Sliders F={F} bright={bright} f0At={f0} f={f} />
				<g opacity={prog(f, below + 10, 12) * (1 - prog(f, above, 12))}>
					<LPlate spec={TIMER} p={TP} />
					<rect x={D0[0]} y={D0[1]} width={D1[0] - D0[0]} height={D1[1] - D0[1]} rx={6} fill="#14201a" />
					<text x={(D0[0] + D1[0]) / 2} y={(D0[1] + D1[1]) / 2 + 16} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 44, fill: '#9fe3a0'}}>{`${tSec} s`}</text>
				</g>
			</FrameSvg>
			<Lbl x={1360} y={360} at={0} color={INK} size={50}>{`f = ${sci(F * 1e14, 2)} Hz`}</Lbl>
			<Lbl x={1360} y={430} at={0} color={GREY.ink} size={28}>{`λ = ${Math.round(nm)} nm`}</Lbl>
			<Lbl x={96} y={790} at={0} color={NAVY.ink} size={28}>photocurrent (relative)</Lbl>
			<HandTag x={1360} y={490} text="brighter, longer" at={below + 20} size={32} color={GREY.ink} />
			<HandTag x={0} y={0} at={above + 34} color={SLATE.stroke} marks={[{kind: 'circle', cx: fsX(F0 / 1e14), cy: FS.y + 20, rx: 36, ry: 46}]} />
			<Lbl x={1360} y={700} at={works} color={wlColor(650)} size={30}>{`red: ${sci(fOf(L_RED), 1)} Hz`}</Lbl>
			<Lbl x={1360} y={750} at={works + 6} color={SLATE.ink} size={30}>{`zinc f₀ ≈ ${sci(F0, 1)} Hz (ultraviolet)`}</Lbl>
			<HandTag x={1360} y={820} text="zinc: UV only" at={works + 16} size={34} color={SLATE.ink} />
		</>
	);
};

// ---------- 5. observation 2: frequency sets the energy, brightness the number ----------
export const S05: React.FC = () => {
	const id = 'frequency-vs-intensity';
	const f = useCurrentFrame();
	const raise = cue(id, 'Raise the frequency'), fast1 = cue(id, 'faster'), brt = cue(id, 'Make the light brighter at the same frequency'), fast2 = cap(id, cue(id, 'faster', 2));
	const F = kf(f, [[raise, f14(L_UV)], [raise + 40, f14(200)]]);
	const nm = nmOf(F);
	const bright = kf(f, [[brt, 1], [brt + 30, 2]]);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<PredStrip cross={[-30, fast2]} under={fast1} />
			<FrameSvg>
				<Bench nm={nm} bright={bright} reading={reading(nm, bright)} />
				<Stream t={f / 30} nm={nm} bright={bright} />
				<Sliders F={F} bright={bright} />
				<SpeedGauge x={1400} y={600} nm={nm} />
			</FrameSvg>
			<Lbl x={1360} y={360} at={0} color={INK} size={50}>{`f = ${sci(F * 1e14, 2)} Hz`}</Lbl>
			<Lbl x={1360} y={430} at={0} color={GREY.ink} size={28}>{`λ = ${Math.round(nm)} nm`}</Lbl>
			<Lbl x={1360} y={530} at={0} color={ORANGE.ink} size={30}>fastest electron</Lbl>
			<Lbl x={96} y={790} at={0} color={NAVY.ink} size={28}>photocurrent (relative)</Lbl>
			<HandTag x={1360} y={680} text="K_max up" at={raise + 30} size={34} color={ORANGE.ink} />
			<HandTag x={1360} y={760} text="more electrons, same K_max" at={brt + 30} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: 221, cy: 480, rx: 150, ry: 220}]} />
		</>
	);
};

// ---------- 6. observation 3: no delay ----------
const TL = {x: 720, y: 520, w: 1080, e0: -10, e1: 3};
const tlX = (s: number) => TL.x + ((Math.log10(s) - TL.e0) / (TL.e1 - TL.e0)) * TL.w;
const ZP6 = {x: 96, y: 560, w: 440};
export const S06: React.FC = () => {
	const id = 'no-delay';
	const f = useCurrentFrame();
	const bil = cue(id, 'within about a billionth of a second'), watt = cue(id, 'one watt per square metre'), atom = cue(id, 'the size of one atom'), m2 = cue(id, 'ten to the minus twenty square metres'), min = cue(id, 'minute'), sh = cap(id, cue(id, 'shorter'));
	const top = nat(METAL_PLATE, ZP6, 720, 520);
	const lp = {x: 140, y: 290, w: 240};
	const ap = lampAp(lp);
	const xo = tlX(1e-9), xp = tlX(T_WAIT);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<PredStrip cross={[-30, -30, sh]} />
			<FrameSvg>
				<LPlate spec={METAL_PLATE} p={ZP6} />
				<LPlate spec={BENCH_LAMP} p={lp} />
				<Beam a={ap} b={top} wa={4} wb={10} color={UV} opacity={0.8} />
				{f >= atom ? <rect x={top[0] - 9} y={top[1] - 9} width={18} height={18} fill="none" stroke={AMBER.stroke} strokeWidth={4} opacity={prog(f, atom, 10)} /> : null}
				<line x1={TL.x} y1={TL.y} x2={TL.x + TL.w} y2={TL.y} stroke={GREY.stroke} strokeWidth={8} strokeLinecap="round" />
				{[-10, -9, -6, -3, 0, 3].map(e => <line key={e} x1={tlX(10 ** e)} y1={TL.y - 14} x2={tlX(10 ** e)} y2={TL.y + 14} stroke={GREY.stroke} strokeWidth={4} />)}
				{f >= bil ? <path d={`M${xo},${TL.y - 20} l-14,-30 h28 z`} fill={NAVY.stroke} opacity={prog(f, bil, 10)} /> : null}
				{f >= min ? <path d={`M${xp},${TL.y - 20} l-14,-30 h28 z`} fill={GREY.stroke} opacity={prog(f, min, 10)} /> : null}
			</FrameSvg>
			{[-10, -9, -6, -3, 0, 3].map(e => <Lbl key={e} x={tlX(10 ** e)} y={TL.y + 56} at={0} color={GREY.ink} size={28} anchor="middle">{e === 0 ? '1 s' : `10${e < 0 ? '⁻' : ''}${String(Math.abs(e)).split('').map(c => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]).join('')} s`}</Lbl>)}
			<Lbl x={TL.x} y={TL.y + 100} at={0} color={GREY.ink} size={26}>time before electrons appear (log scale)</Lbl>
			<Lbl x={xo - 30} y={TL.y - 70} at={bil} color={NAVY.ink} size={30}>{'observed: < 10⁻⁹ s'}</Lbl>
			<Lbl x={xp} y={TL.y - 70} at={min} color={GREY.ink} size={30} anchor="middle">predicted: about 69 s</Lbl>
			<Chip x={96} y={330 - 60} at={watt} size={30} color={NAVY.ink} border={NAVY.stroke}>I = 1 W m⁻² (dim)</Chip>
			<HandTag x={ZP6.x + ZP6.w - 40} y={top[1] - 150} text="A ≈ 10⁻²⁰ m² (one atom, not to scale)" at={atom + 6} size={30} color={AMBER.ink} marks={[{kind: 'arrow', from: [ZP6.x + ZP6.w - 20, top[1] - 130], to: [top[0] + 14, top[1] - 12], bend: 0.2}]} />
			<div style={{position: 'absolute', left: 720, top: 680, display: 'flex', flexDirection: 'column', gap: 12, width: 1100}}>
				<Row at={m2} ageAt={min} size={44} oldSize={34}><span style={{whiteSpace: 'nowrap'}}>{`P = IA = ${sci(P_ATOM, 0)} W (J each second)`}</span></Row>
				<Row at={min - 6} size={44}><AnswerBox at={min}><span style={{whiteSpace: 'nowrap'}}>{`t = ϕ / P = (4.3 × 1.602 × 10⁻¹⁹) / (1 × 10⁻²⁰) ≈ ${Math.round(T_WAIT)} s`}</span></AnswerBox></Row>
			</div>
			<HandTag x={(xo + xp) / 2 - 120} y={TL.y - 150} text={`≈ ${sci(RATIO, 0)} times`} at={sh + 4} size={34} color={SLATE.ink} marks={[{kind: 'arrow', from: [xp - 20, TL.y - 110], to: [xo + 20, TL.y - 110], bend: 0.12}]} />
			<Lbl x={96} y={960 - 50} at={0} color={UV_INK} size={26}>dim ultraviolet (above threshold)</Lbl>
		</>
	);
};
