// Scenes 1 to 6: the hook (last time's ring screen and the painted diffraction tube; the camera moving to the nucleus;
// Bohr's sharp circle redrawn; two empty problem chips), Bohr's two problems (one electron only, with helium's lines
// not matching; a wave cannot be a dot on a sharp line), Schrödinger's wave equation (named, not shown; the painted
// guitar), why only certain energies (standing waves on the guitar's top string from the waves engine, bent round
// into an atom; −13.6/n² eV framed), what the wave means (Born; the probability probe on a slice through hydrogen 1s)
// and an orbital from many measurements (detections from the chance engine building the 1s cloud).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, CrossedChip, Row} from '../../physics/projectile/board';
import {Readout} from '../../physics/atom/universe';
import {RingScreen, ringSpots} from '../../physics/atom/matterwave';
import {OrbitWave} from '../../physics/atom/bohr';
import {MarkedHeading} from '../../physics/atom/headline';
import {Cloud1s, cloudDots, cloudRun, prob1s, psi1s, stringAtomPath} from '../../physics/atom/quantum';
import {trialsShown} from '../../sims/chance';
import {lazy} from '../../sims';
import {LineStrip} from '../phys-y12-m8-v10/parts';
import {RS_RINGS, SPOT_RUN} from '../phys-y12-m8-v12/s2';
import {HandoffBoard12, ORB12, SCR12} from '../phys-y12-m8-v12/s3';
import {dur as dur12} from '../phys-y12-m8-v12/common';
import {DOTS, HEAD, HEAD_SIZE, LEVELS, PROBE, cap, cue} from './common';
import {AMBER, GREY, GUITAR, GUITAR_NUT, GUITAR_SADDLE, INK, LPlate, Lbl, NAVY, NUC_RED, Nucleus, PatternIcon, T, TEAL, Tube, fx, guitarAt, tubeAt} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** A dashed arc drawn on from angle a0 (radians) for a fraction p of a full turn. */
export const arcPath = (cx: number, cy: number, r: number, p: number, a0 = -Math.PI / 2) => {
	const q = Math.min(0.9999, Math.max(0.0001, p)), a1 = a0 + q * 2 * Math.PI;
	return `M${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 ${q > 0.5 ? 1 : 0} 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)}`;
};
const NEXT12 = 'Next: why do orbital probabilities replace literal electron paths?';
/** An empty numbered problem chip (filled with text later). */
export const ProblemChip: React.FC<{x: number; y: number; n: number; text?: string; at?: number; w?: number; size?: number}> = ({x, y, n, text, at = 1e9, w = 760, size = 34}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: 70, display: 'flex', alignItems: 'center', gap: 16, background: '#fffdf8', border: `3px solid ${INK}`, borderRadius: 14, padding: '0 18px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: size, color: INK}}>
			<span style={{flex: 'none', width: 46, height: 46, borderRadius: 999, background: INK, color: '#fffdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30}}>{n}</span>
			{text ? <span style={{opacity: o}}>{text}</span> : null}
		</div>
	);
};

// ---------- 1. hook ----------
const S1 = {cx: 330, cy: 400, R: 170};
const TUBE1 = {x: 96, y: 640, w: 600};
export const S01: React.FC = () => {
	const id = 'hook';
	const f = useCurrentFrame();
	const as = cue(id, 'a single spot'), wi = cue(id, 'where is an electron inside an atom'), bd = cue(id, 'Bohr drew a neat circle'), tb = cue(id, 'two big problems'), pa = cap(id, cue(id, 'literal electron paths'), 4);
	const end12 = dur12('handoff') - 1;
	const mv = prog(f, as, 30), xf = prog(f, as, 14);
	const scr = {cx: lerp(SCR12.cx, S1.cx, mv), cy: lerp(SCR12.cy, S1.cy, mv), R: lerp(SCR12.R, S1.R, mv)};
	const k = scr.R / SCR12.R, rings = RS_RINGS.map(r => r * k);
	const spots = f >= as ? ringSpots(SPOT_RUN(), 2000, rings, scr.R) : [];
	const cam = prog(f, wi, 36), s = 1, tx = -110 * cam, ty = 0;
	const tubeIn = prog(f, as + 10, 24), tubeOut = prog(f, bd, 20);
	const tp = {x: TUBE1.x - 760 * (1 - tubeIn) - 900 * tubeOut, y: TUBE1.y, w: TUBE1.w};
	const ts = tubeAt(tp, 'screen');
	const newA = (-35 * Math.PI) / 180, nd: [number, number] = [scr.cx + rings[1] * Math.cos(newA), scr.cy + rings[1] * Math.sin(newA)];
	const haze = 1 + 0.6 * prog(f, wi + 10, 30);
	const sharp = prog(f, bd, 30), dotA = (-40 * Math.PI) / 180, dot: [number, number] = [ORB12.cx + ORB12.r * Math.cos(dotA), ORB12.cy + ORB12.r * Math.sin(dotA)];
	return (
		<>
			{f < as + 14 ? <div style={{position: 'absolute', inset: 0, opacity: 1 - xf}}><HandoffBoard12 f={end12} final heading={false} chip={false} /></div> : null}
			<MarkedHeading text={HEAD} marks={['probabilities', 'paths']} at={pa} size={HEAD_SIZE} />
			<Chip x={96} y={870} at={-60} out={1} size={30} w={1728} color={INK} border={INK}>{NEXT12}</Chip>
			<div style={{position: 'absolute', inset: 0, opacity: f < as ? 0 : xf, transform: `translate(${tx}px, ${ty}px) scale(${s})`, transformOrigin: '0 0'}}>
				<FrameSvg>
					<RingScreen cx={scr.cx} cy={scr.cy} R={scr.R} lit={1} rings={rings} ringColor={TEAL.stroke} ringOpacity={0} spots={spots} spotR={2.4 + k} shade={1} />
					{f >= as ? <g><circle cx={nd[0]} cy={nd[1]} r={7} fill={NAVY.stroke} /><circle cx={nd[0]} cy={nd[1]} r={12 + 26 * pulseOf(f, as, 26)} fill="none" stroke={NAVY.stroke} strokeWidth={4} opacity={pulseOf(f, as, 26)} /></g> : null}
					{tubeIn > 0.001 && tubeOut < 0.999 ? <g opacity={tubeIn * (1 - tubeOut)}><Tube p={tp} /></g> : null}
					<defs><radialGradient id="m8v13-haze"><stop offset="0" stopColor="#9a958c" stopOpacity={0.55} /><stop offset="1" stopColor="#9a958c" stopOpacity={0} /></radialGradient></defs>
					<circle cx={ORB12.cx} cy={ORB12.cy} r={ORB12.r * 1.15 * (1 + 0.15 * (haze - 1))} fill="url(#m8v13-haze)" opacity={Math.min(1, haze * (1 - 0.5 * sharp))} />
					<OrbitWave cx={ORB12.cx} cy={ORB12.cy} r={ORB12.r} waves={1} amp={28} color={NAVY.stroke} width={2} opacity={1 - sharp} />
					{f >= bd ? <path d={arcPath(ORB12.cx, ORB12.cy, ORB12.r, sharp)} fill="none" stroke={INK} strokeWidth={5} strokeDasharray="16 10" /> : null}
					{f >= bd + 20 ? <circle cx={dot[0]} cy={dot[1]} r={16} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} opacity={prog(f, bd + 20, 10)} /> : null}
					{f >= bd + 40 ? <line x1={ORB12.cx} y1={ORB12.cy} x2={dot[0]} y2={dot[1]} stroke={GREY.ink} strokeWidth={3} strokeDasharray="8 6" opacity={prog(f, bd + 40, 12)} /> : null}
					<Nucleus x={ORB12.cx} y={ORB12.cy} r={16} />
				</FrameSvg>
				<HandTag x={ORB12.cx - 60} y={ORB12.cy + ORB12.r + 70} text="a path?" at={-60} out={bd} size={44} color={GREY.ink} />
				<HandTag x={ts[0] + 50} y={ts[1] - 70} text="one electron, one spot" at={as + 34} out={bd} size={34} color={NAVY.ink} marks={[{kind: 'arrow', from: [ts[0] - 10, ts[1] - 30], to: [S1.cx + 40, S1.cy + S1.R + 10], bend: 0.2}]} />
				<Lbl x={Math.max(130, scr.cx - scr.R)} y={scr.cy + scr.R + 40} at={as + 20} color={INK} size={28}>last time: rings built from single spots</Lbl>
				<Lbl x={ORB12.cx + 30} y={ORB12.cy - ORB12.r - 40} at={bd + 46} color={GREY.ink} size={28}>one definite radius</Lbl>
				<HandTag x={ORB12.cx - 250} y={ORB12.cy + ORB12.r + 70} text="Bohr (1913): a definite path" at={bd + 30} size={36} color={GREY.ink} marks={[{kind: 'circle', cx: dot[0], cy: dot[1], rx: 40, ry: 36}]} />
			</div>
			{f >= tb ? <><ProblemChip x={1580} y={300} n={1} w={260} /><ProblemChip x={1580} y={400} n={2} w={260} /></> : null}
			{f >= tb ? <Lbl x={1580} y={270} at={tb} color={INK} size={28}>two problems</Lbl> : null}
			<Chip x={1180} y={196} at={bd + 50} out={tb - 6} size={30} color={GREY.ink}>Bohr: a dot on a sharp circle</Chip>
		</>
	);
};

// ---------- 2. Bohr's two problems ----------
const ORB2 = {cx: 400, cy: 600, r: 230};
const HE_PRED = [430, 480, 520, 560, 640, 700] as const, HE_MEAS = [447.1, 471.3, 492.2, 501.6, 587.6, 667.8] as const;
export const S02: React.FC = () => {
	const id = 'bohr-problems';
	const f = useCurrentFrame();
	const oe = cue(id, 'only worked with a single electron'), hl = cue(id, 'as in helium'), pw = cue(id, 'its predictions go wrong'), wp = cue(id, "a wave isn't at one point"), sl = cue(id, 'a dot moving along a sharp line'), ru = cap(id, cue(id, "a wave's rules"), 24);
	const wave = prog(f, wp + 6, 60);
	const flick = f >= sl ? (Math.floor((f - sl) / 14) % 2 === 0 ? 1 : 0) : -1;
	const dotA = (-40 * Math.PI) / 180, dot: [number, number] = [ORB2.cx + ORB2.r * Math.cos(dotA), ORB2.cy + ORB2.r * Math.sin(dotA)];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<circle cx={ORB2.cx} cy={ORB2.cy} r={ORB2.r} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="16 10" />
				{wave > 0.001 ? <OrbitWave cx={ORB2.cx} cy={ORB2.cy} r={ORB2.r} waves={4} amp={22} color={NAVY.stroke} width={5} draw={wave} opacity={flick === 0 ? 0.25 : 1} /> : null}
				<circle cx={dot[0]} cy={dot[1]} r={17} fill={NAVY.stroke} stroke="#ffffff" strokeWidth={3} opacity={flick === 1 ? 0.25 : 1} />
				<Nucleus x={ORB2.cx} y={ORB2.cy} r={18} />
				<g opacity={prog(f, hl, 14)}>
					<circle cx={1060} cy={420} r={70} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="8 6" />
					<circle cx={1060} cy={420} r={44} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="8 6" />
					<Nucleus x={1060} y={420} r={13} />
					<circle cx={1130} cy={420} r={11} fill={NAVY.stroke} /><circle cx={1060} cy={376} r={11} fill={NAVY.stroke} />
				</g>
				<LineStrip x={1220} y={330} w={560} h={56} lines={HE_PRED} lineW={8} opacity={prog(f, hl + 10, 14)} />
				<LineStrip x={1220} y={450} w={560} h={56} lines={HE_MEAS} lineW={8} opacity={prog(f, pw, 14)} />
			</FrameSvg>
			<ProblemChip x={880} y={196} n={1} text="works for one electron only" at={oe} w={900} />
			<ProblemChip x={880} y={590} n={2} text="a wave is spread out" at={wp} w={900} />
			<Lbl x={1060} y={530} at={hl} color={INK} size={28} anchor="middle">helium: 2 electrons</Lbl>
			<Lbl x={1220} y={318} at={hl + 10} color={GREY.ink} size={26}>Bohr-style prediction (schematic)</Lbl>
			<Lbl x={1220} y={438} at={pw} color={INK} size={26}>helium: measured lines</Lbl>
			<HandTag x={1220} y={548} text="helium: predictions wrong" at={pw + 20} size={32} color={GREY.ink} marks={[{kind: 'circle', cx: 1500, cy: 418, rx: 300, ry: 110}]} />
			<HandTag x={880} y={720} text="dot or wave?" at={sl + 10} size={36} color={NAVY.ink} marks={[{kind: 'arrow', from: [870, 710], to: [dot[0] + 30, dot[1] - 10], bend: 0.25}]} />
			<Lbl x={150} y={890} at={ru} color={INK} size={30}>path: particle idea</Lbl>
			<Lbl x={460} y={890} at={ru + 8} color={NAVY.ink} size={30}>whole wavelengths: wave idea</Lbl>
			<HandTag x={980} y={860} text="a mixed model" at={ru + 24} size={38} color={GREY.ink} marks={[{kind: 'underline', x1: 150, x2: 900, y: 912}]} />
			<Lbl x={ORB2.cx} y={ORB2.cy - ORB2.r - 44} at={-30} color={GREY.ink} size={28} anchor="middle">{"Bohr's orbit: a sharp circle"}</Lbl>
		</>
	);
};

// ---------- 3. Schrödinger's wave equation ----------
export const NUC3 = {x: 400, y: 600};
export const GT = {x: 960, y: 520, w: 860};
export const ICONS = [{x: 300, y: 880}, {x: 450, y: 880}, {x: 600, y: 880}] as const;
const Shells: React.FC<{cx: number; cy: number; f: number; opacity?: number}> = ({cx, cy, f, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		{[70, 125, 180].map((r, i) => { const t = f / 50 + i; return <g key={r}>
			<ellipse cx={cx} cy={cy} rx={r} ry={r * (0.35 + 0.1 * Math.sin(t))} fill="none" stroke={TEAL.stroke} strokeWidth={3} opacity={0.75} transform={`rotate(${(f * 0.6 + i * 60) % 180} ${cx} ${cy})`} />
			<circle cx={cx} cy={cy} r={r} fill={TEAL.stroke} opacity={0.07} />
		</g>; })}
	</g>
));
export const S03: React.FC = () => {
	const id = 'wave-equation';
	const f = useCurrentFrame();
	const db = cue(id, "inspired by de Broglie's matter waves"), sp = cue(id, 'He stopped drawing paths'), eq = cue(id, "an equation for how an electron's wave behaves"), td = cue(id, 'in three dimensions'), lg = cue(id, 'Like a guitar string'), en = cap(id, cue(id, 'its own energy'), 30);
	const nut = guitarAt(GT, GUITAR_NUT), sad = guitarAt(GT, GUITAR_SADDLE);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={1 - prog(f, sp + 20, 20)}><circle cx={NUC3.x} cy={NUC3.y} r={200} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="16 10" /></g>
				<Shells cx={NUC3.x} cy={NUC3.y} f={f} opacity={prog(f, td, 20)} />
				<Nucleus x={NUC3.x} y={NUC3.y} r={18} />
				<g opacity={0.6 + 0.4 * prog(f, lg, 16)}><LPlate spec={GUITAR} p={GT} /></g>
				{[1, 2, 3].map((k, i) => <PatternIcon key={k} x={ICONS[i].x} y={ICONS[i].y} r={50} k={k} opacity={prog(f, en + i * 8, 12)} />)}
			</FrameSvg>
			<Lbl x={NUC3.x} y={300} at={-30} color={INK} size={34} anchor="middle">Schrödinger, 1926</Lbl>
			<Chip x={620} y={250} at={db} size={30} color={NAVY.ink}>λ = h/mv (last time)</Chip>
			<HandTag x={0} y={0} at={sp + 6} color={GREY.stroke} marks={[{kind: 'cross', cx: NUC3.x + 200, cy: NUC3.y, size: 60}]} />
			<Lbl x={NUC3.x + 230} y={NUC3.y + 10} at={sp + 10} out={td} color={GREY.ink} size={28}>no path drawn</Lbl>
			<Chip x={960} y={196} at={eq} size={30} color={GREY.ink}>wave equation (not on the syllabus to solve)</Chip>
			<Lbl x={NUC3.x} y={NUC3.y + 240} at={td + 10} color={TEAL.ink} size={30} anchor="middle">the wave in 3D, round the nucleus</Lbl>
			<HandTag x={GT.x + 40} y={GT.y - 40} text="a guitar string" at={lg + 10} size={34} color={AMBER.ink} marks={[{kind: 'arrow', from: [nut[0] + 40, nut[1] - 30], to: [sad[0] - 40, sad[1] - 30], bend: -0.05}]} />
			{[1, 2, 3].map((k, i) => <Lbl key={k} x={ICONS[i].x} y={ICONS[i].y - 74} at={en + i * 8} color={AMBER.ink} size={34} anchor="middle">{`E${['₁', '₂', '₃'][i]}`}</Lbl>)}
			<HandTag x={700} y={890} text="pattern → energy" at={en + 30} size={38} color={AMBER.ink} />
		</>
	);
};

// ---------- 4. why only certain energies ----------
const LAD = {x: 760, top: 300, bot: 760, w: 150};
const ladY = (e: number) => LAD.top + (-e / 13.6) * (LAD.bot - LAD.top);
export const S04: React.FC = () => {
	const id = 'allowed-energies';
	const f = useCurrentFrame();
	const fx2 = cue(id, 'fixed at both ends'), hi = cue(id, "held in by the nucleus's pull"), oc = cue(id, 'Only certain three dimensional standing waves fit'), mt = cue(id, 'minus thirteen point six over n squared'), th = cap(id, cue(id, 'had to assume them'), 12);
	const nut = guitarAt(GT, GUITAR_NUT), sad = guitarAt(GT, GUITAR_SADDLE);
	const mode = f < hi ? 1 + Math.min(2, Math.floor(Math.max(0, f - fx2) / 50)) : 3;
	const m = prog(f, hi + 4, 50);
	const d = stringAtomPath({x0: nut[0], y0: nut[1], x1: sad[0], y1: sad[1], cx: NUC3.x, cy: NUC3.y, R: 170, n: mode, amp: 16 + 20 * m, t: f / 30, m});
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<LPlate spec={GUITAR} p={GT} />
				<Shells cx={NUC3.x} cy={NUC3.y} f={f} opacity={1 - prog(f, hi, 20)} />
				{[1, 2, 3].map((k, i) => <PatternIcon key={k} x={ICONS[i].x} y={ICONS[i].y} r={50} k={k} />)}
				{f >= fx2 ? <path d={d} fill="none" stroke={AMBER.stroke} strokeWidth={6} strokeLinecap="round" opacity={prog(f, fx2, 10)} /> : null}
				<Nucleus x={NUC3.x} y={NUC3.y} r={18} />
				<g opacity={prog(f, oc, 16)}>
					{LEVELS.map((e, i) => <g key={i}><line x1={LAD.x} y1={ladY(e)} x2={LAD.x + LAD.w} y2={ladY(e)} stroke={AMBER.stroke} strokeWidth={5} /><text x={LAD.x + LAD.w + 12} y={ladY(e) + 10} style={T(28, AMBER.ink)}>{`n = ${i + 1}`}</text></g>)}
					<line x1={LAD.x} y1={LAD.top - 30} x2={LAD.x} y2={LAD.bot + 20} stroke={INK} strokeWidth={3} />
					{[0, 1, 2].map(i => <line key={i} x1={ICONS[i].x + 40} y1={ICONS[i].y - 40} x2={LAD.x - 6} y2={ladY(LEVELS[i])} stroke={AMBER.stroke} strokeWidth={3} strokeDasharray="8 6" />)}
				</g>
			</FrameSvg>
			<HandTag x={GT.x + 30} y={GT.y - 40} text="only waves that fit: set notes" at={fx2 + 20} out={hi} size={34} color={AMBER.ink} marks={[{kind: 'circle', cx: nut[0], cy: nut[1], rx: 18, ry: 18}, {kind: 'circle', cx: sad[0], cy: sad[1], rx: 18, ry: 18}]} />
			<Lbl x={GT.x + 30} y={GT.y + 400} at={fx2} out={hi} color={AMBER.ink} size={30}>{`standing wave: ${mode} loop${mode > 1 ? 's' : ''}`}</Lbl>
			<HandTag x={96} y={385} text="held in by attraction (no fixed ends)" at={hi + 50} size={34} color={NAVY.ink} />
			<Lbl x={NUC3.x} y={300} at={-30} color={INK} size={34} anchor="middle">Schrödinger, 1926</Lbl>
			{[0, 1, 2].map(i => <Lbl key={i} x={ICONS[i].x} y={ICONS[i].y - 74} at={-30} color={AMBER.ink} size={34} anchor="middle">{`E${['₁', '₂', '₃'][i]}`}</Lbl>)}
			<Lbl x={LAD.x + 40} y={LAD.top - 50} at={oc} color={AMBER.ink} size={28}>allowed energies</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 200}}>
				<Row at={mt} size={44}>{f >= th ? <AnswerBox at={th}>{`Eₙ = −13.6/n² eV`}</AnswerBox> : 'Eₙ = −13.6/n² eV (an earlier video)'}</Row>
			</div>
			<HandTag x={1000} y={330} text="Bohr: assumed. Schrödinger: comes out of the equation" at={th + 12} size={34} color={AMBER.ink} />
			<Lbl x={LAD.x + LAD.w + 12} y={ladY(LEVELS[0]) + 44} at={mt + 10} color={AMBER.ink} size={26}>{`${fx(LEVELS[0], 1)} eV`}</Lbl>
		</>
	);
};

// ---------- 5. what the wave means ----------
const SL = {x0: 120, x1: 1340, y: 800, cx: 730, k: 2.8, hw: 380};
const sx = (pm: number) => SL.cx + pm * SL.k;
const curve = (fn: (pm: number) => number, h: number) => Array.from({length: 241}, (_, i) => { const pm = -((SL.cx - SL.x0) / SL.k) + (i * (SL.x1 - SL.x0)) / SL.k / 240; return `${i ? 'L' : 'M'}${sx(pm).toFixed(1)},${(SL.y - h * fn(pm)).toFixed(1)}`; }).join(' ');
export const S05: React.FC = () => {
	const id = 'born-probability';
	const f = useCurrentFrame();
	const wl = cue(id, 'Where the wave is large'), ws = cue(id, "Where it's small"), sq = cue(id, "the square of the wave's size"), th = cue(id, 'finding the electron there'), tb = cue(id, 'twice as big'), fo = cap(id, cue(id, 'four times as likely to be found'), 14);
	const sqP = prog(f, sq, 30);
	const gap = Math.max(24, Math.min(45, Math.floor((tb - th - 40) / 3)));
	const leg = (k: number) => th + 20 + (k - 1) * gap;
	const r = f < th ? 0 : PROBE.slice(1).reduce((acc, p, i) => lerp(acc, p.r, prog(f, leg(i + 1), Math.min(24, gap - 4))), 0);
	const cur = {r, w: psi1s(r), p: prob1s(r)};
	const stop2 = leg(1) + 24;
	const H = 380;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={SL.x0} y1={SL.y} x2={SL.x1} y2={SL.y} stroke={INK} strokeWidth={4} />
				{[-200, -100, 0, 100, 200].map(t => <g key={t}><line x1={sx(t)} y1={SL.y} x2={sx(t)} y2={SL.y + 14} stroke={INK} strokeWidth={3} /><text x={sx(t)} y={SL.y + 46} textAnchor="middle" style={T(26, INK)}>{`${Math.abs(t)}`}</text></g>)}
				<circle cx={SL.cx} cy={SL.y} r={12} fill={NUC_RED} stroke="#ffffff" strokeWidth={2} />
				<path d={curve(pm => Math.exp(-Math.abs(pm) / 52.9), H)} fill="none" stroke={NAVY.stroke} strokeWidth={5} />
				{sqP > 0.001 ? <path d={curve(pm => Math.exp(-Math.abs(pm) / 52.9) ** (1 + sqP), H)} fill={TEAL.soft} fillOpacity={0.5 * sqP} stroke={TEAL.stroke} strokeWidth={5} /> : null}
				{f >= wl ? <rect x={SL.cx - 26} y={SL.y - 70} width={52} height={52} fill={TEAL.stroke} opacity={0.35 * prog(f, wl, 12) * (1 - prog(f, th, 12))} stroke={TEAL.stroke} strokeWidth={3} /> : null}
				{f >= ws ? <rect x={sx(170) - 26} y={SL.y - 70} width={52} height={52} fill={TEAL.stroke} opacity={0.12 * prog(f, ws, 12) * (1 - prog(f, th, 12))} stroke={TEAL.stroke} strokeWidth={3} /> : null}
				{f >= th ? <g><rect x={sx(r) - 22} y={SL.y - 56} width={44} height={44} fill={TEAL.stroke} fillOpacity={0.45} stroke={TEAL.ink} strokeWidth={4} /><line x1={sx(r)} y1={SL.y - 56} x2={sx(r)} y2={SL.y - H * Math.exp(-r / 52.9) - 4} stroke={TEAL.ink} strokeWidth={2.5} strokeDasharray="6 5" /></g> : null}
				{f >= tb ? <g opacity={prog(f, tb, 12)}>
					{[PROBE[1].r, 2 * PROBE[1].r].map((pr, i) => <g key={i}><circle cx={sx(-pr)} cy={SL.y - H * Math.exp(-pr / 52.9)} r={11} fill={NAVY.stroke} /><text x={sx(-pr) - 16} y={SL.y - H * Math.exp(-pr / 52.9) - 18} textAnchor="end" style={T(28, NAVY.ink)}>{i === 0 ? '×2' : '×1'}</text></g>)}
				</g> : null}
				{f >= fo ? <g opacity={prog(f, fo, 12)}>
					{[PROBE[1].r, 2 * PROBE[1].r].map((pr, i) => <g key={i}><circle cx={sx(-pr)} cy={SL.y - H * Math.exp(-2 * pr / 52.9)} r={11} fill={TEAL.stroke} /><text x={sx(-pr) - 16} y={SL.y - H * Math.exp(-2 * pr / 52.9) + 34} textAnchor="end" style={T(28, TEAL.ink)}>{i === 0 ? '×4' : '×1'}</text></g>)}
				</g> : null}
			</FrameSvg>
			<Lbl x={SL.x1 - 40} y={SL.y + 84} at={-30} color={INK} size={26} anchor="end">distance from the nucleus (pm), slice through hydrogen</Lbl>
			<Lbl x={sx(-150)} y={SL.y - H * 0.95} at={-30} color={NAVY.ink} size={30} anchor="middle">{"the wave's size"}</Lbl>
			<Lbl x={SL.x0 + 20} y={180} at={-30} color={INK} size={32}>Born, 1926</Lbl>
			<HandTag x={SL.cx + 40} y={SL.y - 110} text="likely" at={wl + 6} out={th} size={34} color={TEAL.ink} />
			<HandTag x={sx(170) - 40} y={SL.y - 110} text="rarely" at={ws + 6} out={th} size={34} color={TEAL.ink} />
			<Lbl x={sx(60)} y={SL.y - 150} at={sq + 20} color={TEAL.ink} size={34}>|ψ|²</Lbl>
			<HandTag x={sx(-260)} y={SL.y - 300} text="square it" at={sq + 24} size={36} color={TEAL.ink} marks={[{kind: 'arrow', from: [sx(-120), SL.y - 300], to: [sx(-80), SL.y - 120], bend: -0.2}]} />
			<Lbl x={sx(r) + 30} y={SL.y - 90} at={th} out={th + 30} color={TEAL.ink} size={28}>probability per unit volume at this point</Lbl>
			<Readout x={1400} y={200} label="probe: distance r" value={`${fx(cur.r)} pm`} color={TEAL.ink} w={420} />
			<Readout x={1400} y={340} label="wave size (relative)" value={fx(cur.w, 2)} color={NAVY.ink} w={420} />
			<Readout x={1400} y={480} label="probability per volume" value={fx(cur.p, 2)} color={TEAL.ink} w={420} />
			<Lbl x={1400} y={640} at={-30} color={GREY.ink} size={26}>hydrogen 1s, relative to the centre</Lbl>
			{f >= stop2 && f < tb ? <HandTag x={1400} y={700} text="half the wave, a quarter of the chance" at={stop2} out={tb} size={30} color={TEAL.ink} /> : null}
			<div style={{position: 'absolute', left: 1400, top: 700}}><Row at={fo + 10} size={44}><AnswerBox at={fo + 14}>wave ×2 → chance ×4</AnswerBox></Row></div>
		</>
	);
};

// ---------- 6. an orbital from many measurements ----------
export const SLICE = {cx: 600, cy: 560, a: 70};
/** The slice through the atom: a tinted disc with x and y axes through the nucleus and a 100 pm scale bar. */
export const SliceBase: React.FC = () => {
	const R = SLICE.a * 4.6, pm = SLICE.a / 52.9;
	return (
		<g>
			<circle cx={SLICE.cx} cy={SLICE.cy} r={R} fill="#ebe6da" stroke="rgba(60,45,20,0.35)" strokeWidth={3} strokeDasharray="12 8" />
			<line x1={SLICE.cx - R} y1={SLICE.cy} x2={SLICE.cx + R} y2={SLICE.cy} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
			<line x1={SLICE.cx} y1={SLICE.cy - R} x2={SLICE.cx} y2={SLICE.cy + R} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
			{[-2, -1, 1, 2].map(k => <g key={k}><line x1={SLICE.cx + k * 100 * pm} y1={SLICE.cy - 8} x2={SLICE.cx + k * 100 * pm} y2={SLICE.cy + 8} stroke="rgba(60,45,20,0.5)" strokeWidth={2} /><line x1={SLICE.cx - 8} y1={SLICE.cy + k * 100 * pm} x2={SLICE.cx + 8} y2={SLICE.cy + k * 100 * pm} stroke="rgba(60,45,20,0.5)" strokeWidth={2} /></g>)}
			<line x1={SLICE.cx - R} y1={SLICE.cy + R + 30} x2={SLICE.cx - R + 100 * pm} y2={SLICE.cy + R + 30} stroke={INK} strokeWidth={5} />
			<text x={SLICE.cx - R + 100 * pm + 14} y={SLICE.cy + R + 40} style={T(26, INK)}>100 pm</text>
		</g>
	);
};
const ATOMS6 = [[-0.6, 0.3], [0.2, -0.7], [0.8, 0.5], [-0.3, -0.2], [0.5, 0.9]] as const;
/** Five identical hydrogen atoms, each with one measured position (a navy dot). */
export const IdenticalAtoms: React.FC<{f: number; x?: number; y?: number}> = ({x = 1200, y = 700}) => (
	<g>
		{ATOMS6.map(([dx, dy], i) => { const cx = x + i * 120; return <g key={i}><circle cx={cx} cy={y} r={48} fill="#ebe6da" stroke="rgba(60,45,20,0.4)" strokeWidth={2.5} /><circle cx={cx} cy={y} r={5} fill={NUC_RED} /><circle cx={cx + dx * 34} cy={y + dy * 34} r={7} fill={NAVY.stroke} /></g>; })}
	</g>
);
export const RUN6 = lazy(() => cloudRun(13, DOTS));
export const S06: React.FC = () => {
	const id = 'orbital-from-dots';
	const f = useCurrentFrame();
	const em = cue(id, 'Each measurement finds it at one point'), pt = cue(id, 'Plot thousands of points'), dn = cue(id, 'densest near the nucleus'), bp = cue(id, 'a blurry photo of a moving electron'), fo = cap(id, cue(id, 'likely to be found'), 10);
	const n = trialsShown(RUN6(), f, {at: em, slow: 6, every: Math.max(6, Math.floor((pt - em) / 7)), until: Math.min(dn + 30, fo - 20)});
	const dots = cloudDots(RUN6(), n, SLICE.a);
	const last = n > 0 && n <= 6 ? dots[n - 1] : null;
	const fade = prog(f, fo, 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<SliceBase />
				<Cloud1s cx={SLICE.cx} cy={SLICE.cy} a={SLICE.a} id="m8v13-c6" color={TEAL.stroke} opacity={prog(f, dn, 30)} />
				<IdenticalAtoms f={f} />
				<g opacity={1 - 0.55 * fade}>{dots.map(([x, y], i) => <circle key={i} cx={SLICE.cx + x} cy={SLICE.cy + y} r={2.6} fill={NAVY.stroke} />)}</g>
				{last ? <circle cx={SLICE.cx + last[0]} cy={SLICE.cy + last[1]} r={10 + 10 * ((f % 20) / 20)} fill="none" stroke={NAVY.stroke} strokeWidth={3} opacity={1 - (f % 20) / 20} /> : null}
				<circle cx={SLICE.cx} cy={SLICE.cy} r={8} fill={NUC_RED} stroke="#ffffff" strokeWidth={2} />
			</FrameSvg>
			<Readout x={1180} y={200} label="measurements" value={n.toLocaleString('en-AU')} color={NAVY.ink} w={420} />
			<Lbl x={1150} y={790} at={-30} color={INK} size={28}>identical hydrogen atoms: one measurement each</Lbl>
			<HandTag x={1180} y={480} text="one point each time" at={pt + 10} size={36} color={NAVY.ink} />
			<Lbl x={1150} y={860} at={dn + 10} color={TEAL.ink} size={28}>1s orbital: probability per volume (slice)</Lbl>
			<CrossedChip x={1180} y={560} at={bp} crossAt={bp + 16} size={30} caption="not a motion blur">motion blur of one electron</CrossedChip>
			<div style={{position: 'absolute', left: 1180, top: 350, width: 660}}><Row at={fo} size={34} style={{whiteSpace: 'normal'}}><AnswerBox at={fo + 4}>orbital: where the electron is likely to be found</AnswerBox></Row></div>
			<HandTag x={0} y={0} at={fo + 10} color={TEAL.stroke} marks={[{kind: 'circle', cx: SLICE.cx, cy: SLICE.cy, rx: SLICE.a * 2.4, ry: SLICE.a * 2.3}]} />
		</>
	);
};
