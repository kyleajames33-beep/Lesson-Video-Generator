// Scenes 1 to 6: the hook (last time's split energy bar; then the painted photocell and lamp beside the sodium data
// table, "h = ?" and "ϕ = ?"), energy conservation (two photons on a model surface: the surface electron keeps the most;
// hf = ϕ + K_max), the stopping voltage (the painted supply, two painted multimeters, the photocell and lamp; a
// reverse-voltage slider; the magnified gap where electrons climb against the electric force, from the field motion
// engine; a current-voltage point tracing its curve), the current-voltage graph (brightness sets the height,
// frequency the cut-off), the straight line (K_max against f with a live frequency marker) and a second metal.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading, kf} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {BENCH_LAMP, nat} from '../../physics/light/thermal';
import {Axes2, Beam, Electron, EnergyBar, METER, Meter, PHOTOCELL, PHOTO_ANCHOR, Packet, SUPPLY, ax2, cellGeom} from '../../physics/light/photo';
import type {AxGeom} from '../../physics/light/photo';
import {wlColor} from '../../physics/light/spectrum';
import {photocurrent} from '../../sims/photoelectric';
import {Slider} from '../phys-y12-m7-v04/parts';
import {HandoffBoard10, M7V10FinalFrame} from '../phys-y12-m7-v10/s3';
import {F0_M, F_HIGH, F_LIGHT, HEAD, HEAD_SIZE, PHI_M, VSTOP, VSTOP_HIGH, cap, cue, hfEV, kEV} from './common';
import {AMBER, DataTable, GREY, GapInset, INK, Lbl, NAVY, ORANGE, SLATE, Strip, UV, VIOLET, fx, ivPts, lampAp, sci, usePulse} from './parts';

type Pt = [number, number];
const colF = (f14: number) => { const nm = 3e8 / (f14 * 1e14) * 1e9; return nm < 400 ? UV : wlColor(nm); };

// ---------- 1. hook ----------
const CP1: Place = {x: 140, y: 330, w: 240}, LP1: Place = {x: 440, y: 420, w: 230};
const G1 = cellGeom(CP1), A1 = lampAp(LP1, true);
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const pays = cue(id, 'pays the work function'), ke = cue(id, 'becomes kinetic energy'), mil = cue(id, 'Robert Millikan'), fail = cue(id, 'he expected it to fail'), data = cue(id, "Here's data like his"), five = cue(id, 'Five frequencies of light'), hid = cue(id, 'Hidden in these ten numbers'), fn = cap(id, cue(id, 'function', 3));
	if (f < 1) return <M7V10FinalFrame />;
	const out = prog(f, data, 16), inn = prog(f, data + 8, 20);
	const lit = f < five ? -1 : Math.min(4, Math.floor((f - five) / 20));
	const fNow = lit < 0 ? 10 : [6, 7, 8, 9, 10][lit];
	const pulse = usePulse(hid, 30);
	return (
		<>
			{out < 0.999 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - out}}><HandoffBoard10 f={0} final heading={false} chip={false} /></div> : null}
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Chip x={96} y={890} at={-60} out={8} size={30} w={1728} color={INK} border={INK}>{"Next: how do photoelectric graphs reveal Planck's constant and work function?"}</Chip>
			{out < 0.999 ? <>
				<HandTag x={0} y={0} at={pays} out={data} color={SLATE.stroke} marks={[{kind: 'circle', cx: 805, cy: 566, rx: 90, ry: 210}]} />
				<HandTag x={0} y={0} at={ke} out={data} color={ORANGE.stroke} marks={[{kind: 'circle', cx: 805, cy: 344, rx: 90, ry: 50}]} />
			</> : null}
			<Lbl x={1000} y={200} at={mil} color={INK} size={32}>Millikan, 1916</Lbl>
			<HandTag x={1000} y={260} text="expected: Einstein wrong" at={fail + 6} size={30} color={GREY.ink} />
			<FrameSvg>
				<g opacity={inn}>
					<EnergyBar x={96} base={330} w={40} scale={28} hf={4.96} phi={4.3} split={1} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} />
					<g transform={`translate(${-200 * (1 - inn)} 0)`}>
						<LPlate spec={PHOTOCELL} p={CP1} />
						<LPlate spec={BENCH_LAMP} p={LP1} flip />
						<Beam a={A1} b={G1.cathode} wa={8} wb={22} color={colF(fNow)} />
					</g>
					<Axes2 g={{x: 1460, y: 690, w: 300, h: 170, x0: 0, x1: 10, y0: 0, y1: 10}}  />
				</g>
			</FrameSvg>
			<Lbl x={150} y={250} at={data + 8} color={INK} size={30}>hf = ϕ + K_max</Lbl>
			<DataTable x={860} y={330} at={data + 10} lit={lit} pulse={pulse} />
			<HandTag x={0} y={0} at={five + 6} color={NAVY.stroke} marks={[{kind: 'arrow', from: [G1.anode[0] + 60, G1.aTop[1] - 40], to: [850, 400], bend: -0.2}]} />
			<Chip x={860} y={590} at={hid} size={44} color={INK} border={INK}>h = ?</Chip>
			<Chip x={1100} y={590} at={hid + 6} size={44} color={INK} border={INK}>ϕ = ?</Chip>
			<HandTag x={1340} y={625} text="hidden in here" at={hid + 14} size={32} color={INK} />
			<Lbl x={1446} y={680} at={data + 8} color={ORANGE.ink} size={28} anchor="end">K_max</Lbl>
			<Lbl x={1790} y={900} at={data + 8} color={INK} size={28} anchor="end">f</Lbl>
			<Lbl x={1610} y={790} at={fn} color={INK} size={60} anchor="middle">?</Lbl>
		</>
	);
};

// ---------- 2. energy conservation ----------
const SF = {x: 96, y: 540, w: 820, h: 330};
export const S02: React.FC = () => {
	const id = 'energy-conservation';
	const f = useCurrentFrame();
	const brings = cue(id, 'The photon brings h f'), uses = cue(id, 'uses at least phi'), keeps = cue(id, 'keeps the rest as kinetic energy'), surf = cue(id, 'Electrons right at the surface use the least'), inout = cue(id, 'Energy in equals energy out'), mphi = cap(id, cue(id, 'minus phi'));
	const hf = hfEV(F_LIGHT), BX = 1000, BB = 860, S = 150;
	const eS: Pt = [SF.x + 260, SF.y - 12], eD: Pt = [SF.x + 520, SF.y + 70];
	const hit = prog(f, brings - 30, 30);
	const go = prog(f, surf, 36);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={SF.x} y={SF.y} width={SF.w} height={SF.h} rx={10} fill="#e6e1d8" stroke={INK} strokeWidth={3} />
				{Array.from({length: 18}, (_, i) => { const cx = SF.x + 60 + (i % 6) * 140, cy = SF.y + 55 + Math.floor(i / 6) * 105; return <g key={i}><circle cx={cx} cy={cy} r={18} fill="#c9c2b6" stroke={INK} strokeWidth={2} /><text x={cx} y={cy + 9} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 26, fill: INK}}>+</text></g>; })}
				{[0, 3, 5].map(i => <Electron key={i} x={SF.x + 80 + i * 120} y={SF.y - 12} r={10} color={NAVY.stroke} />)}
				{f < surf ? <><Packet x={eS[0] - 160 + 150 * hit} y={eS[1] - 220 + 200 * hit} deg={53} len={56} color={AMBER.stroke} opacity={1 - prog(f, brings, 8)} /><Packet x={eD[0] - 160 + 150 * hit} y={eD[1] - 300 + 280 * hit} deg={60} len={56} color={AMBER.stroke} opacity={1 - prog(f, brings, 8)} /></> : null}
				<Electron x={eS[0] + 20 * go} y={eS[1] - 300 * go} r={12} color={NAVY.stroke} />
				<Electron x={eD[0] + 10 * go} y={eD[1] - 330 * go * 0.62} r={12} color={NAVY.stroke} />
				{f >= surf ? <g opacity={prog(f, surf + 10, 12)}>
					<line x1={eS[0] + 24} y1={eS[1] - 300 * go} x2={eS[0] + 24} y2={eS[1] - 300 * go - 160} stroke={ORANGE.stroke} strokeWidth={8} /><path d={`M${eS[0] + 24},${eS[1] - 300 * go - 182} l-14,24 h28 z`} fill={ORANGE.stroke} />
					<line x1={eD[0] + 24} y1={eD[1] - 205 * go} x2={eD[0] + 24} y2={eD[1] - 205 * go - 70} stroke={ORANGE.stroke} strokeWidth={8} /><path d={`M${eD[0] + 24},${eD[1] - 205 * go - 92} l-14,24 h28 z`} fill={ORANGE.stroke} />
				</g> : null}
				<g opacity={prog(f, brings, 14)}>
					<rect x={BX} y={BB - hf * S} width={90} height={hf * S} rx={6} fill={AMBER.stroke} />
					<rect x={BX} y={BB - PHI_M * S} width={90} height={PHI_M * S} rx={6} fill={SLATE.stroke} opacity={prog(f, uses, 16)} />
					<rect x={BX} y={BB - hf * S} width={90} height={(hf - PHI_M) * S} rx={6} fill={ORANGE.stroke} opacity={prog(f, keeps, 16)} />
					<rect x={BX} y={BB - hf * S} width={90} height={hf * S} rx={6} fill="none" stroke={INK} strokeWidth={3} />
				</g>
			</FrameSvg>
			<Lbl x={SF.x} y={SF.y + SF.h + 40} at={0} color={GREY.ink} size={26}>metal surface (model)</Lbl>
			<Lbl x={BX + 110} y={BB - hf * S + 20} at={brings} color={AMBER.ink} size={34}>hf</Lbl>
			<Lbl x={BX + 110} y={BB - PHI_M * S / 2} at={uses} color={SLATE.ink} size={34}>ϕ</Lbl>
			<Lbl x={BX + 110} y={BB - hf * S + 70} at={keeps} color={ORANGE.ink} size={30}>kinetic energy</Lbl>
			<HandTag x={eS[0] - 220} y={300} text="surface: K_max" at={surf + 20} size={32} color={ORANGE.ink} />
			<HandTag x={eD[0] + 60} y={420} text="deeper: loses extra energy getting out" at={surf + 34} size={28} color={ORANGE.ink} />
			<div style={{position: 'absolute', left: 1260, top: 360, display: 'flex', flexDirection: 'column', gap: 20, width: 600}}>
				<Row at={inout - 4} size={52}><span style={{whiteSpace: 'nowrap'}}>hf = ϕ + K_max</span></Row>
				<Row at={mphi - 6} size={56}><AnswerBox at={mphi}><span style={{whiteSpace: 'nowrap', color: ORANGE.ink}}>K_max = hf − ϕ</span></AnswerBox></Row>
			</div>
			<HandTag x={1260} y={300} text="energy in = energy out" at={inout + 10} size={32} color={AMBER.ink} marks={[{kind: 'arrow', from: [BX + 100, BB - hf * S - 20], to: [1250, 400], bend: -0.2}]} />
			<Lbl x={1260} y={660} at={mphi + 14} color={INK} size={28}>data sheet; energy conservation + photon model</Lbl>
		</>
	);
};

// ---------- 3. measuring K_max: the stopping voltage ----------
const AM: Place = {x: 96, y: 210, w: 190}, VM: Place = {x: 310, y: 210, w: 190}, CP3: Place = {x: 590, y: 240, w: 250}, LP3: Place = {x: 880, y: 300, w: 230}, SP: Place = {x: 110, y: 600, w: 380};
const G3 = cellGeom(CP3), A3 = lampAp(LP3, true);
const GAP = {x: 1220, y: 210, w: 600, h: 260};
const IV3: AxGeom = {x: 1330, y: 610, w: 450, h: 230, x0: -1.4, x1: 0.4, y0: 0, y1: 1.25};
/** Ammeter with a coded bar for the photocurrent (no invented numbers). */
const AmmeterBar: React.FC<{p: Place; i: number}> = ({p, i}) => {
	const D = PHOTO_ANCHOR.meterDisplay;
	const a = nat(METER, p, D[0], D[1]), b = nat(METER, p, D[2], D[3]);
	return <g><Meter p={p} reading="" /><rect x={a[0] + 12} y={a[1] + 14} width={Math.max(0, (b[0] - a[0] - 24) * i)} height={b[1] - a[1] - 28} rx={4} fill="#9fe3a0" /></g>;
};
export const Circuit: React.FC<{v: number; i: number; vText: string; beamF?: number; beamB?: number}> = ({v, i, vText, beamF = F_LIGHT, beamB = 1}) => {
	const sp = nat(SUPPLY, SP, PHOTO_ANCHOR.supplyPlus[0], PHOTO_ANCHOR.supplyPlus[1]), sm = nat(SUPPLY, SP, PHOTO_ANCHOR.supplyMinus[0], PHOTO_ANCHOR.supplyMinus[1]);
	const a1 = nat(METER, AM, PHOTO_ANCHOR.meterTerminals[0][0], PHOTO_ANCHOR.meterTerminals[0][1]), a2 = nat(METER, AM, PHOTO_ANCHOR.meterTerminals[1][0], PHOTO_ANCHOR.meterTerminals[1][1]);
	const v1 = nat(METER, VM, PHOTO_ANCHOR.meterTerminals[0][0], PHOTO_ANCHOR.meterTerminals[0][1]), v2 = nat(METER, VM, PHOTO_ANCHOR.meterTerminals[1][0], PHOTO_ANCHOR.meterTerminals[1][1]);
	const w = (pts: Pt[], c = INK) => <path d={pts.map((q, k) => `${k ? 'L' : 'M'}${q[0]},${q[1]}`).join(' ')} fill="none" stroke={c} strokeWidth={4} strokeLinejoin="round" />;
	return (
		<g>
			{w([sp, [sp[0], 560], [a1[0], 560], a1])}
			{w([a2, [a2[0], 580], [G3.t1[0], 580], [G3.t1[0], G3.t1[1]]])}
			{w([sm, [sm[0], 790], [G3.t2[0], 790], G3.t2])}
			{w([v1, [v1[0], 545], [G3.t1[0] - 14, 545], [G3.t1[0] - 14, 600]], '#5b5650')}
			{w([v2, [v2[0], 530], [G3.t2[0] + 18, 530], [G3.t2[0] + 18, 720]], '#5b5650')}
			<AmmeterBar p={AM} i={i} />
			<Meter p={VM} reading={vText} />
			<LPlate spec={SUPPLY} p={SP} />
			<LPlate spec={PHOTOCELL} p={CP3} />
			<LPlate spec={BENCH_LAMP} p={LP3} flip />
			<Beam a={A3} b={G3.cathode} wa={6 + 6 * beamB} wb={12 + 14 * beamB} color={colF(beamF)} />
			<text x={sp[0]} y={sp[1] - 34} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30, fill: '#b8322a'}}>+</text>
			<text x={sm[0]} y={sm[1] - 34} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 34, fill: INK}}>−</text>
		</g>
	);
};
export const S03: React.FC = () => {
	const id = 'stopping-voltage';
	const f = useCurrentFrame();
	const push = cue(id, 'You push back on them'), climb = cue(id, 'climb against the electric force'), up = cue(id, 'Turn the voltage up'), falls = cue(id, 'falls'), fail = cue(id, 'even the fastest electrons just fail'), work = cue(id, 'The work done stopping an electron'), mx = cap(id, cue(id, 'max'));
	const V = kf(f, [[push, 0], [push + 30, 0.3], [up, 0.3], [falls, 0.8], [fail, VSTOP]]);
	const I = photocurrent({frequency: F_LIGHT * 1e14}, PHI_M, 1, -V);
	const {px, py} = ax2(IV3);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<Circuit v={V} i={I} vText={`${fx(V, 2)} V`} />
				<Slider x={130} y={860} w={340} v0={0} v1={1.4} v={V} label="reverse voltage" color={INK} />
				<GapInset x={GAP.x} y={GAP.y} w={GAP.w} h={GAP.h} t={f / 30} v={V} kmax={VSTOP} />
				{f >= push ? <g opacity={prog(f, push, 12)}>
					<line x1={GAP.x + 140} y1={GAP.y - 30} x2={GAP.x + GAP.w - 160} y2={GAP.y - 30} stroke={INK} strokeWidth={6} /><path d={`M${GAP.x + GAP.w - 136},${GAP.y - 30} l-26,-14 v28 z`} fill={INK} />
					<line x1={GAP.x + 330} y1={GAP.y + GAP.h + 34} x2={GAP.x + 170} y2={GAP.y + GAP.h + 34} stroke={AMBER.stroke} strokeWidth={8} /><path d={`M${GAP.x + 146},${GAP.y + GAP.h + 34} l26,-14 v28 z`} fill={AMBER.stroke} />
					<Electron x={GAP.x + 360} y={GAP.y + GAP.h + 34} r={10} color={NAVY.stroke} />
				</g> : null}
				<Axes2 g={IV3} opacity={prog(f, falls - 20, 12)} tick={24} />
				{f >= falls - 20 ? <g opacity={prog(f, falls - 20, 12)}>
					<path d={ivPts(F_LIGHT, 1, -V, 0, px, py)} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
					<circle cx={px(-V)} cy={py(I)} r={10} fill={NAVY.stroke} stroke="#fff" strokeWidth={3} />
				</g> : null}
			</FrameSvg>
			<Lbl x={GAP.x + 20} y={GAP.y + GAP.h + 90} at={0} color={GREY.ink} size={26}>the gap, magnified</Lbl>
			<Lbl x={GAP.x + 10} y={GAP.y - 70} at={0} color={INK} size={28}>cathode</Lbl>
			<Lbl x={GAP.x + GAP.w - 10} y={GAP.y - 70} at={0} color={INK} size={28} anchor="end">anode (−)</Lbl>
			<Lbl x={GAP.x + GAP.w / 2} y={GAP.y - 46} at={push} color={INK} size={30} anchor="middle">E</Lbl>
			<Lbl x={GAP.x + 400} y={GAP.y + GAP.h + 46} at={push} color={AMBER.ink} size={28}>F on electron</Lbl>
			<HandTag x={560} y={940 - 40} text="anode negative: electrons pushed back" at={push + 16} size={30} color={INK} />
			<HandTag x={GAP.x + 20} y={GAP.y + GAP.h + 140} text="force opposes motion" at={climb + 10} size={30} color={AMBER.ink} />
			<Lbl x={96} y={180} at={0} color={NAVY.ink} size={26}>ammeter (I)</Lbl>
			<Lbl x={310} y={180} at={0} color={INK} size={26}>voltmeter (V)</Lbl>
			<Lbl x={IV3.x - 10} y={IV3.y - 30} at={falls - 20} color={NAVY.ink} size={26} anchor="end">I</Lbl>
			<Lbl x={IV3.x + 10} y={IV3.y + IV3.h + 60} at={falls - 20} color={INK} size={26}>reverse V (left)</Lbl>
			<HandTag x={0} y={0} at={fail + 20} color={INK} marks={[{kind: 'circle', cx: 405, cy: 330, rx: 120, ry: 60}]} />
			<HandTag x={510} y={190} text="V_stop" at={fail + 26} size={34} color={INK} />
			<Chip x={600} y={770} at={work} size={28} color={INK}>W = qV (an earlier module)</Chip>
			<Strip x={600} y={840 - 10} at={mx - 6} size={44}><AnswerBox at={mx}>eV_stop = K_max</AnswerBox></Strip>
			<HandTag x={1000} y={720} text="K_max in eV = V_stop in volts" at={mx + 10} size={30} color={ORANGE.ink} />
		</>
	);
};

// ---------- 4. brightness and frequency on a current-voltage graph ----------
const IV4: AxGeom = {x: 820, y: 280, w: 960, h: 520, x0: -2.2, x1: 0.8, y0: 0, y1: 2.3};
const CP4: Place = {x: 120, y: 330, w: 200}, LP4: Place = {x: 360, y: 400, w: 190};
export const S04: React.FC = () => {
	const id = 'iv-graph';
	const f = useCurrentFrame();
	const br = cue(id, 'brighter at the same frequency'), ch = cue(id, 'change'), big = cue(id, 'bigger'), hgt = cue(id, 'Brightness sets the height'), zero = cap(id, cue(id, 'zero'));
	const {px, py} = ax2(IV4);
	const g4 = cellGeom(CP4), a4 = lampAp(LP4, true);
	const d2 = prog(f, br, 30), d3 = prog(f, big, 30);
	const bF = f >= big ? F_HIGH : F_LIGHT, bB = f >= br && f < big ? 2 : 1;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={PHOTOCELL} p={CP4} />
				<LPlate spec={BENCH_LAMP} p={LP4} flip />
				<Beam a={a4} b={g4.cathode} wa={4 + 5 * bB} wb={10 + 12 * bB} color={colF(bF)} />
				<Axes2 g={IV4} xTicks={[-2, -1, 0]} fmtX={v => `${v}`} />
				<path d={ivPts(F_LIGHT, 1, IV4.x0, IV4.x1, px, py)} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				{d2 > 0.001 ? <path d={ivPts(F_LIGHT, 2, IV4.x0, IV4.x0 + (IV4.x1 - IV4.x0) * d2, px, py)} fill="none" stroke={NAVY.stroke} strokeWidth={10} /> : null}
				{d3 > 0.001 ? <path d={ivPts(F_HIGH, 1, IV4.x0, IV4.x0 + (IV4.x1 - IV4.x0) * d3, px, py)} fill="none" stroke={VIOLET.stroke} strokeWidth={6} /> : null}
				<circle cx={px(-VSTOP)} cy={py(0)} r={10} fill={NAVY.stroke} />
				{f >= big ? <circle cx={px(-VSTOP_HIGH)} cy={py(0)} r={10} fill={VIOLET.stroke} opacity={prog(f, big + 20, 10)} /> : null}
			</FrameSvg>
			<Lbl x={IV4.x - 20} y={IV4.y - 10} at={0} color={NAVY.ink} size={30} anchor="end">photocurrent I</Lbl>
			<Lbl x={IV4.x + IV4.w + 20} y={IV4.y + IV4.h + 80} at={0} color={INK} size={30} anchor="end">voltage V (reverse to the left)</Lbl>
			<Lbl x={px(-VSTOP) - 10} y={py(0) + 80} at={0} color={NAVY.ink} size={30} anchor="middle">−V_stop</Lbl>
			<Lbl x={px(0.3)} y={py(1) - 20} at={0} color={NAVY.ink} size={28}>f, dim</Lbl>
			<Lbl x={px(0.3)} y={py(2) - 20} at={br + 20} color={NAVY.ink} size={28}>f, bright</Lbl>
			<HandTag x={px(-VSTOP) - 100} y={py(0) + 130} text="same V_stop" at={ch + 6} size={32} color={NAVY.ink} marks={[{kind: 'circle', cx: px(-VSTOP), cy: py(0), rx: 40, ry: 30}]} />
			<Lbl x={px(-0.6)} y={py(1) - 40} at={big + 30} color={VIOLET.ink} size={28}>higher f, same photon rate</Lbl>
			<HandTag x={px(-VSTOP_HIGH) - 40} y={py(0) - 130} text="bigger V_stop" at={big + 34} size={32} color={VIOLET.ink} />
			<Lbl x={IV4.x + 20} y={IV4.y + 40} at={big + 34} color={GREY.ink} size={26}>same photon rate (schematic)</Lbl>
			<HandTag x={px(0.1) - 260} y={py(1.5)} text="intensity: number of electrons" at={hgt + 6} size={30} color={NAVY.ink} marks={[{kind: 'brace', x: px(0.65), y1: py(2), y2: py(1), facing: 'right'}]} />
			<HandTag x={px(-2.1)} y={py(0) + 130} text="frequency: K_max" at={zero} size={32} color={ORANGE.ink} marks={[{kind: 'underline', x1: px(-VSTOP_HIGH) - 20, x2: px(-VSTOP) + 20, y: py(0) + 28}]} />
		</>
	);
};

// ---------- 5 and 6. the straight line, a second metal ----------
export const G5: AxGeom = {x: 200, y: 250, w: 980, h: 620, x0: 0, x1: 12, y0: -2.8, y1: 3.0};
export const PHI2 = 3.3;
const kLine = (phi: number, a: number, b: number) => { const {px, py} = ax2(G5); return `M${px(a)},${py(hfEV(a) - phi)} L${px(b)},${py(hfEV(b) - phi)}`; };
/** The K_max against f plot (scenes 5, 6, 11): solid above f₀, dashed below, rise and run triangles. */
export const KPlot: React.FC<{f: number; draw?: number; ext?: number; shade?: number; tri?: number; m2?: number; tri2?: number; g?: AxGeom}> = ({f, draw = 1, ext = 0, shade = 0, tri = 0, m2 = 0, tri2 = 0}) => {
	const {px, py} = ax2(G5);
	const f0 = F0_M / 1e14, f02 = (PHI2 * 1.602e-19) / 6.626e-34 / 1e14;
	const end = f0 + (12 - f0) * draw;
	const T = (phi: number, a: number, o: number, c: string) => (o <= 0.001 ? null : <path d={`M${px(a)},${py(hfEV(a) - phi)} L${px(a + 2)},${py(hfEV(a) - phi)} L${px(a + 2)},${py(hfEV(a + 2) - phi)}`} fill="none" stroke={c} strokeWidth={4} strokeDasharray="10 6" opacity={o} />);
	return (
		<g>
			{shade > 0.001 ? <rect x={px(0)} y={G5.y} width={px(f0) - px(0)} height={G5.h} fill="#8a8378" opacity={0.14 * shade} /> : null}
			<Axes2 g={G5} xTicks={[2, 4, 6, 8, 10, 12]} yTicks={[-2, -1, 1, 2, 3]} />
			{draw > 0.001 ? <path d={kLine(PHI_M, f0, end)} stroke={INK} strokeWidth={6} fill="none" /> : null}
			{ext > 0.001 ? <path d={kLine(PHI_M, f0 - f0 * ext, f0)} stroke={GREY.stroke} strokeWidth={5} strokeDasharray="14 10" fill="none" /> : null}
			{T(PHI_M, 8, tri, INK)}
			{m2 > 0.001 ? <g opacity={m2}><path d={kLine(PHI2, f02, f02 + (12 - f02) * m2)} stroke={VIOLET.stroke} strokeWidth={6} fill="none" /><path d={kLine(PHI2, 0, f02)} stroke={VIOLET.stroke} strokeWidth={4} strokeDasharray="14 10" fill="none" opacity={0.8} /></g> : null}
			{T(PHI2, 9, tri2, VIOLET.stroke)}
		</g>
	);
};
export const S05: React.FC = () => {
	const id = 'straight-line';
	const f = useCurrentFrame();
	const ymx = cue(id, 'y equals m x plus c'), line = cue(id, 'straight line'), cst = cue(id, 'constant'), zero = cue(id, 'zero'), phi = cue(id, 'phi', 2), dashed = cap(id, cue(id, 'drawn dashed'));
	const {px, py} = ax2(G5);
	const F = kf(f, [[line + 20, 6], [line + 50, 6], [line + 70, 8], [line + 100, 8], [line + 120, 10], [zero, 10], [zero + 30, F0_M / 1e14]]);
	const hfv = hfEV(F), k = kEV(F);
	const show = f >= line + 20;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<KPlot f={f} draw={prog(f, line, 30)} ext={prog(f, phi, 30)} shade={prog(f, dashed, 16)} tri={prog(f, cst, 14)} />
				{show ? <circle cx={px(F)} cy={py(k)} r={13} fill={ORANGE.stroke} stroke="#fff" strokeWidth={3} /> : null}
				{show ? <g opacity={prog(f, line + 20, 12)}><EnergyBar x={1740} base={860} w={50} scale={70} hf={hfv} phi={PHI_M} split={1} amber={AMBER.stroke} slate={SLATE.stroke} orange={ORANGE.stroke} line={false} /></g> : null}
			</FrameSvg>
			<Lbl x={G5.x - 16} y={G5.y - 34} at={0} color={ORANGE.ink} size={30}>K_max (eV)</Lbl>
			<Lbl x={G5.x + G5.w + 10} y={py(0) + 80} at={0} color={INK} size={30} anchor="end">f (× 10¹⁴ Hz)</Lbl>
			<div style={{position: 'absolute', left: 1260, top: 220, opacity: prog(f, ymx - 20, 14)}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 52, color: INK}}><span style={{color: ORANGE.ink}}>K_max</span> = <span style={{color: AMBER.ink}}>h</span>f <span style={{color: SLATE.ink}}>− ϕ</span></div>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 52, color: INK, opacity: prog(f, ymx, 14)}}><span style={{color: ORANGE.ink}}>y</span> = <span style={{color: AMBER.ink}}>m</span>x <span style={{color: SLATE.ink}}>+ c</span></div>
			</div>
			{show ? <>
				<Lbl x={1260} y={470} at={line + 20} color={INK} size={44}>{`f = ${sci(F * 1e14, 2)} Hz`}</Lbl>
				<Lbl x={1260} y={535} at={line + 20} color={AMBER.ink} size={44}>{`hf = ${fx(hfv, 2)} eV`}</Lbl>
				<Lbl x={1260} y={600} at={line + 20} color={ORANGE.ink} size={44}>{`K_max = ${k > 0.004 ? fx(k, 2) : '0'} eV`}</Lbl>
			</> : null}
			<HandTag x={px(9) + 20} y={py(hfEV(9) - PHI_M) + 70} text="gradient = h" at={cst + 6} size={32} color={INK} />
			<Lbl x={px(F0_M / 1e14) + 10} y={py(0) + 54} at={zero + 30} color={SLATE.ink} size={28}>f₀ (K_max = 0)</Lbl>
			<HandTag x={px(F0_M / 1e14) + 40} y={py(0) - 60} text="hf₀ = ϕ" at={zero + 36} size={32} color={SLATE.ink} marks={[{kind: 'circle', cx: px(F0_M / 1e14), cy: py(0), rx: 30, ry: 30}]} />
			<HandTag x={px(0) + 30} y={py(-PHI_M) + 10} text="−ϕ" at={phi + 30} size={40} color={SLATE.ink} />
			<Lbl x={px(1)} y={G5.y + 40} at={dashed} color={GREY.ink} size={30}>no emission</Lbl>
		</>
	);
};
export const S06: React.FC = () => {
	const id = 'two-metals';
	const f = useCurrentFrame();
	const m2 = cue(id, 'a second metal'), par = cue(id, 'parallel'), cn = cue(id, 'constant of nature'), mv = cap(id, cue(id, 'move'));
	const {px, py} = ax2(G5);
	const f02 = (PHI2 * 1.602e-19) / 6.626e-34 / 1e14;
	const pz = usePulse(mv, 30);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<KPlot f={f} ext={1} shade={1} tri={1} m2={prog(f, m2, 30)} tri2={prog(f, par, 14)} />
				{[[F0_M / 1e14, 0], [f02, 0]].map(([x], i) => <circle key={i} cx={px(x)} cy={py(0)} r={10 + 8 * pz} fill={i ? VIOLET.stroke : INK} />)}
				{[PHI_M, PHI2].map((p, i) => <circle key={`p${i}`} cx={px(0)} cy={py(-p)} r={10 + 8 * pz} fill={i ? VIOLET.stroke : INK} />)}
			</FrameSvg>
			<Lbl x={G5.x - 16} y={G5.y - 34} at={0} color={ORANGE.ink} size={30}>K_max (eV)</Lbl>
			<Lbl x={G5.x + G5.w + 10} y={py(0) + 80} at={0} color={INK} size={30} anchor="end">f (× 10¹⁴ Hz)</Lbl>
			<Lbl x={px(10.2)} y={py(hfEV(10.2) - PHI2) + 50} at={m2 + 20} color={VIOLET.ink} size={30}>metal 2 (larger ϕ)</Lbl>
			<Lbl x={px(F0_M / 1e14) - 10} y={py(0) - 24} at={0} color={INK} size={28} anchor="end">f₀</Lbl>
			<Lbl x={px(f02) + 14} y={py(0) + 50} at={m2 + 20} color={VIOLET.ink} size={28}>f₀′</Lbl>
			<Lbl x={px(0) + 20} y={py(-PHI_M) + 10} at={0} color={INK} size={30}>−ϕ₁</Lbl>
			<Lbl x={px(0) + 20} y={py(-PHI2) + 10} at={m2 + 20} color={VIOLET.ink} size={30}>−ϕ₂</Lbl>
			<HandTag x={1260} y={360} text="same gradient h" at={par + 10} size={36} color={VIOLET.ink} marks={[{kind: 'arrow', from: [px(9), py(hfEV(10) - PHI_M) - 20], to: [px(9.6), py(hfEV(10) - PHI2) - 10], bend: 0.3}]} />
			<Lbl x={1260} y={460} at={cn + 6} color={AMBER.ink} size={40}>h: universal</Lbl>
			<Lbl x={1260} y={540} at={mv + 6} color={SLATE.ink} size={40}>ϕ: belongs to the metal</Lbl>
		</>
	);
};
