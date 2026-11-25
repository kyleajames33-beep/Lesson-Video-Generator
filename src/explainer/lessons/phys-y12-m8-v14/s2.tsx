// Scenes 7 to 12: gamma decay (an excited nucleus dropping nuclear levels beside the atom's eV ladder; Co-60 and its
// two-step cascade), charge, mass and ionisation (three tracks crossing rows of atoms), penetration (track lengths,
// then the live absorber selector with the painted source, absorbers and Geiger counter: 940, 622, 88, 27; the tissue
// block), deflection in a magnetic field (field motion engine runs), spontaneous or artificial and where the energy
// comes from (mass bars, E = mc²), and the summary table framed as the memory card.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {FrameSvg, HandTag, SceneHeading} from '../../math/studio';
import {AnswerBox, Chip, Row} from '../../physics/projectile/board';
import {Tally} from '../../physics/atom/nuclear';
import {ALU_ABS, CountDisplay, DECAY_AT, GEIGER, LEAD, NucleonCluster, PAPER_ABS, SEALED, clusterLayout} from '../../physics/atom/decay';
import type {Place} from '../../physics/light/plates';
import {runMotion, trailTo} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {lazy} from '../../sims';
import {CO60, GAMMA1, GAMMA2, HEAD, HEAD_SIZE, NI60, NI_LEVELS, PO210_MEV, SELECTOR, cap, cue} from './common';
import {AMBER, AlphaGroup, E_MINUS, EqBox, GREY, Gamma, INK, LPlate, Lbl, MiniChart, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, T, TEAL, dispRect, fx, placeAt, srcWin, term, tubeWin} from './parts';
import {MARKS} from './parts';

const pulseOf = (f: number, at: number, d = 30) => (f >= at && f < at + d ? Math.sin(((f - at) / d) * Math.PI) : 0);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- 7. gamma decay ----------
const NL = {x0: 760, x1: 980, top: 330, bot: 820, eMax: 2.7};
const nlY = (e: number) => NL.bot - (e / NL.eMax) * (NL.bot - NL.top);
const AL = {x0: 110, x1: 260, top: 330, bot: 620};
const alY = (e: number) => AL.top + (-e / 13.6) * (AL.bot - AL.top);
const NI_DISCS = clusterLayout(28, 32, 9);
const CHART7 = {x: 1470, y: 600, w: 350, h: 240, zMax: 100, nMax: 160};
export const S07: React.FC = () => {
	const id = 'gamma';
	const f = useCurrentFrame();
	const le = cue(id, 'left excited'), ld = cue(id, 'Like an electron dropping'), dl = cue(id, 'drops to a lower nuclear level'), ht = cue(id, 'hundreds of thousands of times more energy'), cb = cue(id, "Cobalt sixty's beta decay"), tg = cue(id, 'two gamma rays'), sa = cap(id, cue(id, 'A and Z stay the same'), 24);
	const lvl = f < dl ? NI_LEVELS[0] : f < tg ? lerp(NI_LEVELS[0], NI_LEVELS[1], prog(f, dl, 16)) : lerp(NI_LEVELS[1], NI_LEVELS[2], prog(f, tg + 20, 16));
	const g1 = prog(f, dl + 10, 40), g2 = prog(f, tg + 30, 40);
	const glow = f >= le ? (f < tg + 36 ? 1 : 1 - prog(f, tg + 36, 20)) : 0;
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<g opacity={0.9}>
					{[-13.6, -3.4, -1.51].map((e, i) => <line key={i} x1={AL.x0} y1={alY(e)} x2={AL.x1} y2={alY(e)} stroke={NAVY.stroke} strokeWidth={4} />)}
					{f >= ld ? <line x1={AL.x1 - 40} y1={alY(-3.4)} x2={AL.x1 - 40} y2={alY(-13.6) - 12} stroke={NAVY.stroke} strokeWidth={4} opacity={pulseOf(f, ld, 40) > 0 ? 1 : 0.5} /> : null}
				</g>
				{glow > 0.001 ? <circle cx={520} cy={560} r={150} fill="#f2c14e" opacity={0.3 * glow} /> : null}
				<NucleonCluster cx={520} cy={560} r={13} discs={NI_DISCS} pFill={NUC_RED} nFill={NEUTRON} letters={false} tremble={glow} f={f} />
				{NI_LEVELS.map((e, i) => <g key={i}><line x1={NL.x0} y1={nlY(e)} x2={NL.x1} y2={nlY(e)} stroke={AMBER.stroke} strokeWidth={5} /><text x={NL.x1 + 12} y={nlY(e) + 10} style={T(28, AMBER.ink)}>{e === 0 ? '0' : `${fx(e, 2)} MeV`}</text></g>)}
				{f >= le ? <circle cx={(NL.x0 + NL.x1) / 2} cy={nlY(lvl)} r={13} fill={ORANGE.stroke} stroke="#ffffff" strokeWidth={3} opacity={prog(f, le, 10)} /> : null}
				{g1 > 0.001 && g1 < 1 ? <Gamma x={lerp(620, 1050, g1)} y={lerp(560, 760, g1)} deg={25} len={70} /> : null}
				{g2 > 0.001 && g2 < 1 ? <Gamma x={lerp(620, 1050, g2)} y={lerp(560, 860, g2)} deg={35} len={70} /> : null}
				{f >= tg ? <g opacity={prog(f, tg, 14)}>
					<line x1={NL.x0 + 40} y1={nlY(NI_LEVELS[0]) + 8} x2={NL.x0 + 40} y2={nlY(NI_LEVELS[1]) - 14} stroke={AMBER.stroke} strokeWidth={5} /><path d={`M${NL.x0 + 40},${nlY(NI_LEVELS[1]) - 4} l-10,-16 l20,0 Z`} fill={AMBER.stroke} />
					<line x1={NL.x0 + 80} y1={nlY(NI_LEVELS[1]) + 8} x2={NL.x0 + 80} y2={nlY(0) - 14} stroke={AMBER.stroke} strokeWidth={5} /><path d={`M${NL.x0 + 80},${nlY(0) - 4} l-10,-16 l20,0 Z`} fill={AMBER.stroke} />
				</g> : null}
				<MiniChart b={CHART7} marker={[{...MARKS.excited, color: AMBER.stroke}]} />
				{f < sa + 10 ? <g opacity={1 - prog(f, sa, 10)}><line x1={1470 + (MARKS.excited.Z / 100) * 350} y1={600 + 240 - (MARKS.excited.N / 160) * 240 - 14} x2={1470 + (MARKS.excited.Z / 100) * 350} y2={600 + 240 - (MARKS.excited.N / 160) * 240 - 60} stroke={AMBER.stroke} strokeWidth={4} /></g> : null}
			</FrameSvg>
			<Lbl x={AL.x0} y={AL.top - 40} at={-30} color={NAVY.ink} size={28}>atom: eV gaps</Lbl>
			<Lbl x={NL.x0} y={NL.top - 40} at={-30} color={AMBER.ink} size={28}>nucleus: MeV gaps</Lbl>
			<Lbl x={520} y={760} at={le} color={AMBER.ink} size={30} anchor="middle">excited: extra energy</Lbl>
			<Lbl x={AL.x0} y={AL.bot + 60} at={ht} color={NAVY.ink} size={28}>visible photon ≈ 2 eV</Lbl>
			<Lbl x={1050} y={680} at={ht} out={tg} color={AMBER.ink} size={30}>γ ≈ 1.3 MeV</Lbl>
			<div style={{position: 'absolute', left: 1080, top: 200, opacity: prog(f, cb, 12)}}><EqBox terms={[term(CO60), '→', {A: NI60.A, Z: NI60.Z, s: 'Ni*'}, '+', E_MINUS, '+', 'ν̄']} size={38} /></div>
			<div style={{position: 'absolute', left: 1080, top: 290, opacity: prog(f, cb + 30, 12)}}><EqBox terms={[{A: NI60.A, Z: NI60.Z, s: 'Ni*'}, '→', term(NI60), '+', 'γ₁', '+', 'γ₂']} size={38} framed={f >= sa + 16} /></div>
			<Lbl x={1100} y={400} at={cb + 40} color={GREY.ink} size={28}>* = excited</Lbl>
			<Lbl x={NL.x1 + 130} y={(nlY(NI_LEVELS[0]) + nlY(NI_LEVELS[1])) / 2} at={tg + 10} color={AMBER.ink} size={30}>{`γ₁ = ${fx(GAMMA1, 2)} MeV`}</Lbl>
			<Lbl x={NL.x1 + 130} y={(nlY(NI_LEVELS[1]) + nlY(0)) / 2} at={tg + 30} color={AMBER.ink} size={30}>{`γ₂ = ${fx(GAMMA2, 2)} MeV`}</Lbl>
			<HandTag x={1100} y={540} text="two steps, two photons" at={tg + 44} size={34} color={AMBER.ink} />
			<div style={{position: 'absolute', left: 1100, top: 440, opacity: prog(f, sa, 12)}}><Tally label="A" sum="60 = 60" tickAt={sa + 6} size={34} /> <Tally label="Z" sum="28 = 28" tickAt={sa + 10} size={34} color={RED.ink} /></div>
			<Lbl x={1470} y={880} at={sa + 10} color={AMBER.ink} size={28}>γ: A and Z unchanged</Lbl>
		</>
	);
};

// ---------- 8. charge, mass and ionisation ----------
export const ROWS = [420, 600, 780] as const;
const AX0 = 300, ADX = 62, NATOM = 24;
const atomX = (i: number) => AX0 + i * ADX;
/** Which atoms each radiation ionises (α nearly all, β⁻ about one in ten, γ one along the whole row). */
const IONISED = [(i: number) => i % 7 !== 5, (i: number) => i % 10 === 3, (i: number) => i === 15] as const;
const SPEED = [8, 30, 42] as const;
const ION_X = [1720, 1720, 1720] as const;
export const AtomRows: React.FC<{f: number; at: readonly number[]; stopX?: readonly number[]; done?: boolean}> = ({f, at, stopX = ION_X, done = false}) => (
	<g>
		{ROWS.map((y, r) => {
			const x = done ? stopX[r] : at[r] < 1e8 && f >= at[r] ? Math.min(stopX[r], 230 + (f - at[r]) * SPEED[r]) : -100;
			return <g key={r}>
				{Array.from({length: NATOM}, (_, i) => {
					const ax = atomX(i), hitF = at[r] + (ax - 230) / SPEED[r], ion = IONISED[r](i) && ax <= stopX[r] && (done || (at[r] < 1e8 && f >= hitF));
					const age = done ? 30 : Math.max(0, f - hitF);
					return <g key={i}>
						<circle cx={ax} cy={y} r={20} fill="#e6e0d4" stroke={GREY.stroke} strokeWidth={2.5} />
						{ion ? <><text x={ax} y={y + 10} textAnchor="middle" style={T(28, INK)}>+</text><circle cx={ax + Math.min(16, age) * 1.2} cy={y - 22 - Math.min(16, age) * 1.4} r={6} fill={NAVY.stroke} /></> : <circle cx={ax + 12} cy={y - 12} r={6} fill={NAVY.stroke} />}
					</g>;
				})}
				{x > 0 ? (r === 0 ? <><line x1={230} y1={y} x2={x} y2={y} stroke={AMBER.stroke} strokeWidth={5} opacity={0.6} /><circle cx={x} cy={y} r={14} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} /></> : r === 1 ? <><line x1={230} y1={y} x2={x} y2={y} stroke={NAVY.stroke} strokeWidth={4} opacity={0.6} /><circle cx={x} cy={y} r={9} fill={NAVY.stroke} /></> : <><line x1={230} y1={y} x2={x} y2={y} stroke={AMBER.stroke} strokeWidth={3} opacity={0.5} strokeDasharray="10 8" /><Gamma x={x} y={y} len={60} /></>) : null}
			</g>;
		})}
	</g>
);
export const S08: React.FC = () => {
	const id = 'ionisation';
	const f = useCurrentFrame();
	const pt = cue(id, 'a charge of plus two'), fl = cue(id, 'far lighter and faster'), nc = cue(id, 'Gamma rays have no charge'), al = cap(id, cue(id, 'ionise least of all'), 24);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg><AtomRows f={f} at={[pt, fl, nc]} /></FrameSvg>
			<Lbl x={110} y={ROWS[0]} at={-30} color={AMBER.ink} size={44}>α</Lbl>
			<Lbl x={110} y={ROWS[1]} at={-30} color={NAVY.ink} size={44}>β⁻</Lbl>
			<Lbl x={110} y={ROWS[2]} at={-30} color={AMBER.ink} size={44}>γ</Lbl>
			<Lbl x={300} y={ROWS[0] - 54} at={pt} color={AMBER.ink} size={30}>α (+2, 4 u): heavy, fairly slow</Lbl>
			<Lbl x={300} y={ROWS[1] - 54} at={fl} color={NAVY.ink} size={30}>β⁻ (−1, ≈ 0 u): light, fast</Lbl>
			<Lbl x={300} y={ROWS[2] - 54} at={nc} color={AMBER.ink} size={30}>γ (0, no mass)</Lbl>
			<Lbl x={1250} y={250} at={-30} color={GREY.ink} size={28}>+ = ionised atom (electron knocked off)</Lbl>
			<HandTag x={1060} y={ROWS[0] - 60} text="+2, slow: grabs electrons" at={al + 10} size={34} color={AMBER.ink} marks={[{kind: 'circle', cx: 1020, cy: ROWS[0], rx: 760, ry: 52}]} />
			<div style={{position: 'absolute', left: 96, top: 860}}><Row at={al} size={40}><AnswerBox at={al + 4}>ionising: α &gt; β⁻ &gt; γ</AnswerBox></Row></div>
		</>
	);
};

// ---------- 9. penetration: the reverse ----------
const SRC9 = placeAt(SEALED, DECAY_AT.window, 531, 516, 440);
const GEI9 = placeAt(GEIGER, DECAY_AT.tube, 1001, 516, 900);
const SLOT_X = 766;
const AB = {
	paperWait: {x: 300, y: 720, w: 124} as Place, aluWait: {x: 460, y: 720, w: 124} as Place, leadWait: {x: 620, y: 830, w: 300} as Place,
	paperIn: placeAt(PAPER_ABS, DECAY_AT.sheet, SLOT_X, 516, 204), aluIn: placeAt(ALU_ABS, DECAY_AT.sheet, SLOT_X, 516, 204), leadIn: placeAt(LEAD, [1084, 370], SLOT_X, 516, 300),
};
const lerpP = (a: Place, b: Place, t: number): Place => ({x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), w: lerp(a.w, b.w, t)});
/** The absorber selector board: slot state 0 none, 1 paper, 2 aluminium, 3 lead (with move-in progress). */
export const Selector: React.FC<{f: number; sp: number; fa: number; sc: number; count?: boolean; labelsOut?: number}> = ({f, sp, fa, sc, count = true, labelsOut}) => {
	const pIn = prog(f, sp, 20) * (1 - prog(f, fa, 16)), aIn = prog(f, fa + 10, 20) * (1 - prog(f, sc, 16)), lIn = prog(f, sc + 10, 20);
	const state = f >= sc + 20 ? 3 : f >= fa + 20 ? 2 : f >= sp + 14 ? 1 : 0;
	const from = state === 0 ? SELECTOR[0] : SELECTOR[state - 1], at = state === 0 ? 0 : [sp + 14, fa + 20, sc + 20][state - 1];
	const val = Math.round(lerp(from, SELECTOR[state], prog(f, at, 20)));
	const sw = srcWin(SRC9), tw = tubeWin(GEI9);
	const stream = (kind: 0 | 1 | 2, k: number) => {
		const P = 36, ph = kind * 12 + k * 18, u = (((f + ph) % P) + P) % P / P, x = lerp(sw[0] + 10, tw[0] - 6, u), y = sw[1] + (kind - 1) * 16;
		const blocked = (kind === 0 && state >= 1) || (kind === 1 && state >= 2) || (kind === 2 && state === 3 && k % 3 !== 0);
		if (blocked && x > SLOT_X - 40) return null;
		return kind === 2 ? <Gamma key={`${kind}${k}`} x={x} y={y} len={46} /> : <circle key={`${kind}${k}`} cx={x} cy={y} r={kind === 0 ? 10 : 7} fill={kind === 0 ? AMBER.stroke : NAVY.stroke} stroke={INK} strokeWidth={1.2} />;
	};
	return (
		<>
			<FrameSvg>
				<line x1={96} y1={712} x2={1824} y2={712} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				<rect x={SLOT_X - 70} y={360} width={140} height={340} rx={10} fill="none" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 8" />
				<LPlate spec={SEALED} p={SRC9} />
				<LPlate spec={GEIGER} p={GEI9} />
				{count ? <CountDisplay r={dispRect(GEI9)} text={String(val)} /> : null}
				{[0, 1, 2].map(kind => [0, 1].map(k => stream(kind as 0 | 1 | 2, k)))}
				<LPlate spec={PAPER_ABS} p={lerpP(AB.paperWait, AB.paperIn, pIn)} />
				<LPlate spec={ALU_ABS} p={lerpP(AB.aluWait, AB.aluIn, aIn)} />
				<LPlate spec={LEAD} p={lerpP(AB.leadWait, AB.leadIn, lIn)} />
			</FrameSvg>
			<Lbl x={SLOT_X} y={340} at={-30} out={labelsOut} color={GREY.ink} size={26} anchor="middle">slot</Lbl>
			<Lbl x={300} y={950} at={-30} out={labelsOut} color={INK} size={26}>paper</Lbl>
			<Lbl x={460} y={950} at={-30} out={labelsOut} color={INK} size={26}>aluminium</Lbl>
		</>
	);
};
export const S09: React.FC = () => {
	const id = 'penetration';
	const f = useCurrentFrame();
	const ec = cue(id, 'Every ionisation costs'), ta = cue(id, 'Test it with absorbers'), sp = cue(id, 'a sheet of paper'), fa = cue(id, 'a few millimetres of aluminium'), sc = cue(id, 'several centimetres of lead only reduces it'), ob = cue(id, 'So outside the body'), dm = cap(id, cue(id, 'does the most damage'), 30);
	const rows = 1 - prog(f, ta, 12), bench = prog(f, ta, 12);
	const tracks = prog(f, ec, 30);
	const shrink = prog(f, ob, 24), sc9 = 1 - 0.45 * shrink;
	const disp = dispRect(GEI9);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			{rows > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: rows}}>
				<FrameSvg><AtomRows f={f} at={[-1e9, -1e9, -1e9]} done stopX={[lerp(1720, 560, tracks), lerp(1720, 1150, tracks), 1720]} /></FrameSvg>
				<Lbl x={110} y={ROWS[0]} at={-30} color={AMBER.ink} size={44}>α</Lbl>
				<Lbl x={110} y={ROWS[1]} at={-30} color={NAVY.ink} size={44}>β⁻</Lbl>
				<Lbl x={110} y={ROWS[2]} at={-30} color={AMBER.ink} size={44}>γ</Lbl>
				<HandTag x={700} y={ROWS[0] - 70} text="more ionisation → shorter range" at={ec + 30} size={36} color={AMBER.ink} />
			</div> : null}
			{bench > 0.001 ? <div style={{position: 'absolute', inset: 0, opacity: bench}}>
				<div style={{position: 'absolute', inset: 0, transform: `scale(${sc9})`, transformOrigin: '96px 300px'}}>
					<Selector f={f} sp={sp} fa={fa} sc={sc} labelsOut={ob - 12} />
					<Lbl x={disp[0]} y={disp[1] - 76} at={-30} out={ob - 12} color={GREY.ink} size={26}>counts per minute</Lbl>
					<HandTag x={SLOT_X - 160} y={300} text="α gone" at={sp + 24} out={fa} size={36} color={AMBER.ink} marks={[{kind: 'circle', cx: (disp[0] + disp[2]) / 2, cy: (disp[1] + disp[3]) / 2, rx: 160, ry: 60}]} />
					<HandTag x={SLOT_X - 160} y={300} text="β⁻ gone" at={fa + 30} out={sc} size={36} color={NAVY.ink} />
					<HandTag x={SLOT_X - 200} y={300} text="reduced, not stopped" at={sc + 30} out={ob} size={36} color={AMBER.ink} marks={[{kind: 'underline', x1: disp[0] + 80, x2: disp[2] - 80, y: disp[3] + 6}]} />
					<Lbl x={SLOT_X + 170} y={640} at={sc + 20} out={ob} color={INK} size={28}>5 cm lead</Lbl>
				</div>
				<Lbl x={96} y={200} at={ta} out={ob} color={GREY.ink} size={26}>mixed school source: α, β⁻, γ</Lbl>
				<Lbl x={1000} y={240} at={ta} out={ob} color={GREY.ink} size={26}>corrected for background</Lbl>
				<Chip x={1000} y={760} at={ta + 10} out={ob} size={26} w={820} color={INK}>sealed source, tongs, keep your distance, short exposure: teacher-run</Chip>
				<FrameSvg>
					<g opacity={shrink}>
						<rect x={1180} y={380} width={620} height={380} rx={30} fill="#f6d9d4" stroke={ROSE.stroke} strokeWidth={4} />
						{Array.from({length: 40}, (_, i) => <circle key={i} cx={1215 + (i % 10) * 62} cy={410 + Math.floor(i / 10) * 92} r={22} fill="none" stroke={ROSE.stroke} strokeWidth={2} opacity={0.6} />)}
						{[0, 1, 2].map(k => { const u = ((f * 1.2 + k * 40) % 120) / 120; return <Gamma key={k} x={1120 + 760 * u} y={470 + k * 60} len={46} />; })}
						{f >= dm ? Array.from({length: 22}, (_, i) => { const a = i * 2.39996, r = 6 + 3.2 * Math.sqrt(i) * 3; return <text key={i} x={1590 + r * Math.cos(a)} y={680 + r * Math.sin(a) + 8} textAnchor="middle" style={T(24, INK)} opacity={prog(f, dm + i, 6)}>+</text>; }) : null}
						{f >= dm ? <circle cx={1590} cy={680} r={10} fill={AMBER.stroke} /> : null}
					</g>
				</FrameSvg>
				<Lbl x={1180} y={350} at={ob} color={ROSE.ink} size={28}>tissue (diagram)</Lbl>
				<Lbl x={1180} y={820} at={ob + 20} color={AMBER.ink} size={28}>outside: γ reaches tissue</Lbl>
				<Lbl x={1180} y={870} at={dm + 10} color={AMBER.ink} size={28}>inside: α ionises a tiny region intensely</Lbl>
			</div> : null}
		</>
	);
};

// ---------- 10. deflection in a field ----------
const FR = {x: 420, y: 240, w: 1300, h: 600};
const run = (q: number): MotionPath => runMotion({field: {kind: 'magnetic', qOverM: q, b: -1}, start: {x: 0, y: 0, vx: 300, vy: 0}, duration: 6, steps: 900, stopWhen: s => s.x > FR.w - 20 || Math.abs(s.y) > FR.h / 2 - 24 || s.x < -10});
const RUNS = lazy(() => ({a: run(0.08), bSoft: run(-0.45), b: run(-1.6), g: run(0)}));
const SRC10 = placeAt(SEALED, DECAY_AT.window, FR.x, FR.y + FR.h / 2, 300);
const trackD = (p: MotionPath, t: number) => trailTo(p, t).map(([x, y], i) => `${i ? 'L' : 'M'}${(FR.x + x).toFixed(1)},${(FR.y + FR.h / 2 - y).toFixed(1)}`).join(' ');
export const S10: React.FC = () => {
	const id = 'deflection';
	const f = useCurrentFrame();
	const od = cue(id, 'curve in opposite directions'), bm = cue(id, 'Beta minus curves far more'), nc = cap(id, cue(id, 'it has no charge'), 24);
	const R = RUNS(), ta = prog(f, od, 45) * R.a.duration, tb = prog(f, od, 45) * R.bSoft.duration, tt = prog(f, bm, 30) * R.b.duration, tg = prog(f, nc, 30) * R.g.duration;
	const tight = prog(f, bm, 16);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<rect x={FR.x} y={FR.y} width={FR.w} height={FR.h} rx={12} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="10 8" />
				{Array.from({length: 18}, (_, i) => Array.from({length: 8}, (_, j) => { const cx = FR.x + 40 + i * 72, cy = FR.y + 40 + j * 74; return <g key={`${i}-${j}`} stroke={INK} strokeWidth={2.5} opacity={0.55}><line x1={cx - 9} y1={cy - 9} x2={cx + 9} y2={cy + 9} /><line x1={cx + 9} y1={cy - 9} x2={cx - 9} y2={cy + 9} /></g>; }))}
				<LPlate spec={SEALED} p={SRC10} />
				{f >= od ? <path d={trackD(R.a, ta)} fill="none" stroke={AMBER.stroke} strokeWidth={7} /> : null}
				{f >= od ? <path d={trackD(R.bSoft, tb)} fill="none" stroke={NAVY.stroke} strokeWidth={6} opacity={1 - tight} /> : null}
				{f >= bm ? <path d={trackD(R.b, tt)} fill="none" stroke={NAVY.stroke} strokeWidth={6} opacity={tight} /> : null}
				{f >= nc ? <path d={trackD(R.g, tg)} fill="none" stroke={AMBER.stroke} strokeWidth={5} strokeDasharray="14 8" /> : null}
			</FrameSvg>
			<Lbl x={FR.x + FR.w - 10} y={FR.y - 20} at={-30} color={INK} size={28} anchor="end">magnetic field into the page (×)</Lbl>
			<Lbl x={FR.x + 800} y={FR.y + 70} at={od + 30} color={AMBER.ink} size={32}>α</Lbl>
			<Lbl x={FR.x + 330} y={FR.y + FR.h - 30} at={od + 30} color={NAVY.ink} size={32}>β⁻</Lbl>
			<HandTag x={FR.x + 60} y={FR.y + 120} text="force up" at={od + 20} size={32} color={AMBER.ink} marks={[{kind: 'arrow', from: [FR.x + 140, FR.y + FR.h / 2 - 20], to: [FR.x + 140, FR.y + FR.h / 2 - 130], bend: 0}]} />
			<HandTag x={FR.x + 60} y={FR.y + FR.h - 90} text="force down" at={od + 26} size={32} color={NAVY.ink} marks={[{kind: 'arrow', from: [FR.x + 200, FR.y + FR.h / 2 + 20], to: [FR.x + 200, FR.y + FR.h / 2 + 130], bend: 0}]} />
			<HandTag x={FR.x + 520} y={FR.y + FR.h - 90} text="much lighter → tighter curve" at={bm + 16} size={34} color={NAVY.ink} />
			<Lbl x={FR.x + FR.w - 420} y={FR.y + FR.h / 2 - 30} at={nc + 4} color={AMBER.ink} size={30}>γ: no charge, no force</Lbl>
			<Lbl x={FR.x + FR.w} y={FR.y + FR.h + 40} at={nc + 12} color={GREY.ink} size={26} anchor="end">β⁺ (positron) would curve the α way; radii not to scale</Lbl>
		</>
	);
};

// ---------- 11. spontaneous or artificial ----------
const U11 = clusterLayout(16, 21, 7), N11 = clusterLayout(7, 7, 2);
export const S11: React.FC = () => {
	const id = 'spontaneous-artificial';
	const f = useCurrentFrame();
	const hp = cue(id, 'hitting it with a particle'), at = cue(id, 'an artificial transmutation'), lm = cue(id, 'slightly less total mass'), ke = cue(id, "the products' kinetic energy"), sq = cap(id, cue(id, 'm c squared'), 20);
	const hit = prog(f, hp, 30), apart = prog(f, ke, 40);
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<FrameSvg>
				<line x1={960} y1={200} x2={960} y2={880} stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<NucleonCluster cx={300 - 70 * apart} cy={400} r={11} discs={U11} pFill={NUC_RED} nFill={NEUTRON} letters={false} />
				<AlphaGroup x={470 + 200 * apart} y={400} r={9} />
				{apart > 0.001 ? <g opacity={apart}>
					<line x1={300 - 70 * apart - 80} y1={400} x2={300 - 70 * apart - 130} y2={400} stroke={TEAL.stroke} strokeWidth={6} /><path d={`M${300 - 70 * apart - 146},400 l16,-10 l0,20 Z`} fill={TEAL.stroke} />
					<line x1={470 + 200 * apart + 34} y1={400} x2={470 + 200 * apart + 200} y2={400} stroke={TEAL.stroke} strokeWidth={6} /><path d={`M${470 + 200 * apart + 216},400 l-16,-10 l0,20 Z`} fill={TEAL.stroke} />
					<rect x={470 + 200 * apart - 20} y={300} width={40} height={50} fill={ORANGE.stroke} /><rect x={300 - 70 * apart - 10} y={330} width={20} height={20} fill={ORANGE.stroke} />
				</g> : null}
				{f >= lm ? <g opacity={prog(f, lm, 14)}>
					<rect x={300} y={860 - 300} width={110} height={300} fill="#cfc8ba" stroke={INK} strokeWidth={3} />
					<rect x={520} y={860 - 270} width={110} height={270} fill="#cfc8ba" stroke={INK} strokeWidth={3} />
					<line x1={500} y1={860 - 300} x2={650} y2={860 - 300} stroke={ORANGE.stroke} strokeWidth={3} strokeDasharray="8 6" />
				</g> : null}
				<NucleonCluster cx={1500} cy={450} r={18} discs={N11} pFill={NUC_RED} nFill={NEUTRON} />
				{f >= hp ? <g><AlphaGroup x={lerp(1050, 1390, hit)} y={450} r={9} /><line x1={1000} y1={450} x2={lerp(1050, 1390, hit) - 30} y2={450} stroke={AMBER.stroke} strokeWidth={5} strokeDasharray="12 8" /></g> : null}
			</FrameSvg>
			<Lbl x={96} y={220} at={-30} color={INK} size={38}>spontaneous</Lbl>
			<Chip x={420} y={196} at={-30} size={28} color={GREY.ink}>no trigger</Chip>
			<Lbl x={300} y={500} at={-30} color={INK} size={26} anchor="middle">U-238 → Th-234 + α</Lbl>
			<Lbl x={1000} y={220} at={hp} color={INK} size={38}>artificial (induced)</Lbl>
			<Lbl x={1000} y={600} at={hp + 20} color={AMBER.ink} size={30}>Rutherford, 1919: ⁴₂He + ¹⁴₇N → ?</Lbl>
			<Lbl x={1000} y={650} at={at} color={GREY.ink} size={28}>(calculated in a later lesson)</Lbl>
			<Lbl x={355} y={895} at={lm} color={INK} size={28} anchor="middle">parent</Lbl>
			<Lbl x={575} y={895} at={lm} color={INK} size={28} anchor="middle">products</Lbl>
			<Lbl x={96} y={940} at={lm} color={GREY.ink} size={26}>mass comparison (diagram; difference exaggerated)</Lbl>
			<HandTag x={660} y={620} text="products: less mass" at={lm + 20} size={34} color={ORANGE.ink} marks={[{kind: 'arrow', from: [700, 650], to: [640, 590], bend: 0.2}]} />
			<Lbl x={480} y={280} at={ke + 10} color={TEAL.ink} size={28}>kinetic energy</Lbl>
			<div style={{position: 'absolute', left: 1000, top: 720}}><Row at={sq} size={44}><AnswerBox at={sq + 4}>E = mc² (Module 7)</AnswerBox></Row></div>
			<Chip x={1000} y={820} at={sq + 14} size={26} color={INK}>{`Po-210 → Pb-206 + α: ${fx(PO210_MEV, 2)} MeV (calculated later)`}</Chip>
		</>
	);
};

// ---------- 12. the summary table ----------
export const SUMMARY = [
	['α', '⁴₂He', '−4', '−2', '+2', 'paper', 'curves one way'],
	['β⁻', '⁰₋₁e + ν̄', '0', '+1', '−1', 'few mm Al', 'curves opposite, more'],
	['β⁺', '⁰₊₁e + ν', '0', '−1', '+1', '(annihilates)', 'curves like α'],
	['γ', 'photon', '0', '0', '0', 'reduced by cm of lead', 'straight'],
] as const;
const COLC = [AMBER.ink, NAVY.ink, ROSE.ink, AMBER.ink];
export const SummaryTable: React.FC<{at: readonly number[]; size?: number; scale?: number}> = ({at, size = 34, scale = 1}) => {
	const f = useCurrentFrame();
	return (
		<div style={{transform: `scale(${scale})`, transformOrigin: '0 0', display: 'grid', gridTemplateColumns: '90px 230px 150px 150px 120px 330px 360px', columnGap: 16, rowGap: 14, background: '#fffdf8', border: `4.5px solid ${INK}`, borderRadius: 18, padding: '18px 24px', fontFamily: 'Inter Tight', fontWeight: 800, fontSize: size, color: INK}}>
			{['', 'emitted', 'change in A', 'change in Z', 'charge', 'stopped by', 'field'].map((h, i) => <div key={`h${i}`} style={{fontSize: 28, color: GREY.ink}}>{h}</div>)}
			{SUMMARY.map((row, r) => row.map((c, i) => <div key={`${r}-${i}`} style={{opacity: prog(f, at[r], 14), color: i === 0 ? COLC[r] : INK}}>{c}</div>))}
		</div>
	);
};
export const S12: React.FC = () => {
	const id = 'summary-table';
	const f = useCurrentFrame();
	const at = [cue(id, 'Alpha takes four from A'), cue(id, 'Beta minus adds one to Z'), cue(id, 'Beta plus takes one from Z'), cap(id, cue(id, 'just carries off energy'), 20)];
	return (
		<>
			<SceneHeading text={HEAD} at={-200} size={HEAD_SIZE} />
			<Lbl x={96} y={190} at={-30} color={INK} size={30}>the whole picture (worth copying)</Lbl>
			<div style={{position: 'absolute', left: 96, top: 230}}><SummaryTable at={at} /></div>
			<div style={{position: 'absolute', left: 96, top: 640, width: 1728, opacity: prog(f, at[3] + 20, 14), fontFamily: 'Caveat', fontWeight: 700, fontSize: 52, color: INK}}>Alpha: lose a helium-4 nucleus. Beta: one nucleon swaps type. Gamma: lose energy only.</div>
		</>
	);
};
