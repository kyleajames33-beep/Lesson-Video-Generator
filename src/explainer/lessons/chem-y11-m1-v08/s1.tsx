// Y11 Chem M1 V08 scenes 1 to 5: V07's final frame (the lifted chlorine tile with 35 and 17) beside the painted jar
// of chlorine gas, the particle board (proton, neutron, electron and a reference table), and the nuclide builder: one
// atom model whose proton, neutron and electron counts drive the label, the readouts and the charge meter (17 protons
// and the argon flicker, 18 neutrons from A minus Z, 17 electrons and the extra one that makes the chloride ion).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {MassBar} from '../chem-y11-m1-v07/parts';
import {F_NACL} from '../chem-y11-m1-v07/common';
import {CLJAR, SJAR, SYM, sc} from './common';
import {
	AMB, AMB_INK, Atom, Bracket, ChargeMeter, Chip, DrawPath, E_BLUE, E_INK, Fade, Framed, Heading, INK, N_INK, Nuclide, Nucleus, P_INK, PTStrip, Particle, PenArrow, PenRing, Plate,
	PURE, RED, Readout, Rich, SVG, Sx, TEAL_INK, Write, clamp01, elecPos, kf, nucGeo, plateMap, prog, ptXY, richW, slotXY, smooth,
} from './parts';

const GREEN_T = '#2f8a5b';
const EL_CL = '#4f9a5a';
/** Count that ramps from a to b over [f0, f1] (fractional while the last particle arrives). */
export const ramp = (f: number, f0: number, f1: number, a: number, b: number) => a + (b - a) * clamp01((f - f0) / (f1 - f0));
/** A labelled live readout (label above). */
export const LiveR: React.FC<{x: number; y: number; w?: number; label: string; text: string; color: string; at?: number}> = ({x, y, w = 260, label, text, color, at = -1000}) => (
	<Fade at={at}>
		<Sx x={x} y={y - 10} text={label} size={30} color={color} weight={800} at={-1000} />
		<Readout x={x} y={y} w={w} text={text} size={52} color={color} frame={color} anchor="middle" />
	</Fade>
);

// ---------- 1. hook: two numbers on a symbol (opens on V07's final frame) ----------
const K1 = cues(sc('hook'), {saw: 'we saw chlorine', called: "It's called", atom: 'inside an atom', describes: 'it describes', ion: 'an ion', start: "So let's start"});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const sw = smooth(prog(f, K1.saw, 18));
	const jh = 440, jw = (jh / CLJAR.box[3]) * CLJAR.box[2];
	return (
		<SVG>
			<Plate p={SJAR} x={150} y={360} h={380} o={1 - sw} />
			<Plate p={CLJAR} x={330 - jw / 2} y={330} h={jh} o={sw} />
			<Sx x={330} y={820} text="chlorine gas" size={34} color={INK} anchor="middle" weight={800} at={K1.saw + 10} />
			<g opacity={1 - sw}><MassBar F={[F_NACL[0]]} x={640} y={230} w={640 * 23 / 58.5} h={80} /></g>
			<rect x={860} y={330} width={300} height={300} rx={12} fill={EL_CL} stroke={INK} strokeWidth={4} />
			<Sx x={1010} y={542} text="Cl" size={164} color="#fff" anchor="middle" weight={800} at={-1000} />
			<Sx x={850} y={420} text="35" size={52} color={INK} anchor="end" weight={800} at={-1000} />
			<Sx x={850} y={620} text="17" size={52} color={INK} anchor="end" weight={800} at={-1000} />
			<Sx x={770} y={420} text="?" size={52} color={AMB_INK} anchor="end" weight={800} at={-1000} />
			<Sx x={770} y={620} text="?" size={52} color={AMB_INK} anchor="end" weight={800} at={-1000} />
			<Chip x={960} y={760} segs={[{t: 'How does nuclide notation tell us the particles in an atom or ion?'}]} at={-1000} out={K1.atom} size={38} color={PURE} anchor="middle" />
			<Write x={440} y={300} text="one atom of this" at={K1.saw + 16} size={42} color={AMB_INK} />
			<PenArrow a={[640, 312]} b={[820, 420]} at={K1.saw + 22} color={AMB_INK} bend={-0.2} />
			<PenRing cx={960} cy={480} rx={250} ry={210} at={K1.atom} color={AMB} seed={3} />
			<Heading text="Nuclide notation: what's inside?" at={K1.atom} />
			<Sx x={1170} y={380} text="−" size={64} color={TEAL_INK} weight={800} at={K1.ion} out={K1.ion + 60} />
			<Write x={1180} y={300} text="or an ion" at={K1.ion} out={K1.ion + 60} size={42} color={TEAL_INK} />
			<Fade at={K1.called}>
				<Atom cx={1560} cy={460} R={190} p={17} n={18} e={17} r={7} />
				<Sx x={1560} y={232} text="inside: how many of each?" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<LiveR x={1290} y={760} w={170} label="protons" text="?" color={P_INK} at={K1.describes} />
			<LiveR x={1480} y={760} w={170} label="neutrons" text="?" color={N_INK} at={K1.describes + 6} />
			<LiveR x={1670} y={760} w={170} label="electrons" text="?" color={E_INK} at={K1.describes + 12} />
			{void K1.called}{void K1.start}
		</SVG>
	);
};

// ---------- 2. the three particles ----------
const K2 = cues(sc('particles'), {nucleus: 'called the nucleus', protons: 'holds protons', plus: 'plus one', neutrons: 'and neutrons', all: 'at all', same: 'almost the same mass', one: 'of one', electrons: 'are the electrons', minus: 'minus one', zero: 'almost zero', model: 'a model', smaller: 'far smaller'});
const TX = [1080, 1270, 1430, 1640];
const Row: React.FC<{y: number; cells: [string, number][]; color: string}> = ({y, cells, color}) => (
	<g>{cells.map(([t, at], i) => <Sx key={i} x={TX[i]} y={y} text={t} size={34} color={i === 0 ? color : INK} weight={800} at={at} />)}</g>
);
export const SceneParticles: React.FC = () => {
	const f = useCurrentFrame();
	const nucS = 1 - 0.75 * smooth(prog(f, K2.smaller, 20));
	return (
		<SVG>
			<Heading text="The three particles" at={0} />
			<Particle kind="p" x={250} y={420} r={80} />
			<Particle kind="n" x={560} y={420} r={80} />
			<Particle kind="e" x={880} y={440} r={56} />
			<Sx x={250} y={560} text="proton" size={40} color={P_INK} anchor="middle" hand at={-1000} />
			<Sx x={560} y={560} text="neutron" size={40} color={N_INK} anchor="middle" hand at={-1000} />
			<Sx x={880} y={560} text="electron" size={40} color={E_INK} anchor="middle" hand at={-1000} />
			<Write x={300} y={320} text="+1" at={K2.plus} size={44} color={P_INK} />
			<Write x={610} y={320} text="0" at={K2.all} size={44} color={N_INK} />
			{/* the level beam: same relative mass */}
			<g opacity={prog(f, K2.same, 12)}>
				<line x1={170} x2={640} y1={612} y2={612} stroke={INK} strokeWidth={7} strokeLinecap="round" />
				<path d="M385,612 L405,650 L365,650 Z" fill={INK} />
			</g>
			<Bracket a={[170, 680]} b={[640, 680]} at={K2.one} color={INK} depth={16} />
			<Write x={300} y={750} text="same mass" at={K2.one + 6} size={42} color={INK} />
			<Write x={760} y={640} text="almost no mass" at={K2.zero} size={42} color={E_INK} />
			{/* reference table */}
			<rect x={1050} y={250} width={770} height={310} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			{['particle', 'charge', 'rel. mass', 'where'].map((t, i) => <Sx key={t} x={TX[i]} y={298} text={t} size={30} color={INK} weight={700} at={-1000} />)}
			<line x1={1066} x2={1804} y1={316} y2={316} stroke={INK} strokeWidth={2} />
			<Row y={376} color={P_INK} cells={[['proton', K2.protons], ['+1', K2.plus], ['1', K2.one], ['nucleus', K2.protons]]} />
			<Row y={446} color={N_INK} cells={[['neutron', K2.neutrons], ['0', K2.all], ['1', K2.one], ['nucleus', K2.neutrons]]} />
			<Row y={516} color={E_INK} cells={[['electron', K2.electrons], ['−1', K2.minus], ['≈ 0', K2.zero], ['outside', K2.electrons]]} />
			<Sx x={1430} y={600} text="(about 1/1836 of a proton)" size={30} color={INK} weight={700} at={K2.zero} />
			{/* the atom model, small */}
			<g>
				{[0.42, 0.7, 1].map((k, i) => <circle key={i} cx={1300} cy={790} r={140 * k} fill="none" stroke="rgba(38,35,31,0.45)" strokeWidth={3} />)}
				<Nucleus cx={1300} cy={790} p={17} n={18} r={5} scale={nucS} />
				{elecPos(17, 1300, 790, 140, f).map(([x, y], i) => <circle key={i} cx={x} cy={y} r={6} fill={E_BLUE} stroke={E_INK} strokeWidth={1.5} />)}
			</g>
			<Sx x={1470} y={760} text="model, not to scale" size={30} color={INK} weight={800} at={K2.model} />
			{f >= K2.model + 8 ? <DrawPath d="M1470,772 L1740,772" at={K2.model + 8} dur={12} color={INK} width={3} /> : null}
			<Sx x={1470} y={820} text="a real nucleus is far smaller" size={30} color={INK} weight={700} at={K2.smaller} />
			{void K2.nucleus}{void K2.minus}{void Rich}
		</SVG>
	);
};

// ---------- 3. the bottom number: which element ----------
const K3 = cues(sc('atomic-number'), {bottom: 'the bottom number', seventeen: 'Seventeen is', protons: 'number of protons in', decides: 'decides which element', every: 'Every atom with', give: 'Give it one more', argon: 'argon.', table: 'periodic table', element17: 'element seventeen', box: 'seventeenth box'});
export const AX = 380, AY = 610, AR = 230;
export const pAt3 = (f: number) => (f < K3.give ? ramp(f, K3.protons, K3.protons + 40, 0, 17) : f < K3.table - 20 ? ramp(f, K3.give + 4, K3.give + 18, 17, 18) : ramp(f, K3.table - 20, K3.table - 6, 18, 17));
export const SceneAtomicNumber: React.FC = () => {
	const f = useCurrentFrame();
	const p = pAt3(f), P = Math.round(p);
	const ng = nucGeo(860, 360, SYM[P] ?? 'Cl');
	const [lx, ly] = slotXY(AX, AY, 17, 11);
	const [bx, by] = ptXY(1200, 560, 17);
	return (
		<SVG>
			<Heading text="The bottom number: which element" at={0} />
			<Nuclide x={860} y={360} sym={SYM[Math.max(17, P)] ?? 'Cl'} A={P >= 18 ? 36 : 35} Z={Math.max(17, P)} hiZ={K3.seventeen} />
			<Atom cx={AX} cy={AY} R={AR} p={p} n={0} e={0} />
			<Write x={150} y={300} text="Z = protons" at={K3.protons} size={44} color={P_INK} />
			<PenArrow a={[820, 380]} b={[AX + 40, AY - 40]} at={K3.protons + 4} color={P_INK} bend={0.15} />
			<PenRing cx={lx} cy={ly} rx={26} ry={26} at={K3.give + 18} out={K3.table - 20} color={P_INK} seed={2} />
			<Write x={650} y={890} text="new proton, new element" at={K3.argon - 20} out={K3.table} size={42} color={P_INK} />
			<LiveR x={1200} y={240} w={290} label="protons" text={`${P}`} color={P_INK} />
			<LiveR x={1520} y={240} w={290} label="element" text={SYM[Math.max(1, P)] ?? '?'} color={INK} />
			<Sx x={1200} y={420} text="one more proton, a new element" size={34} color={INK} weight={800} at={K3.decides} />
			<PTStrip x={1200} y={560} hi={17} hiAt={K3.box} flash={18} flashAt={K3.give + 18} flashOut={K3.table - 20} />
			<Sx x={1200} y={812} text="periodic table: in order of atomic number" size={30} color={INK} weight={700} at={-1000} />
			<PenArrow a={[1100, 880]} b={[bx + 20, by + 70]} at={K3.element17} color={AMB_INK} bend={-0.25} />
			<Write x={1200} y={900} text="Z = 17: the seventeenth box" at={K3.box} size={42} color={AMB_INK} />
			{void K3.bottom}{void K3.decides}{void K3.every}{void kf}
		</SVG>
	);
};

// ---------- 4. the top number: protons plus neutrons ----------
const K4 = cues(sc('mass-number'), {top: 'The top number', mass: 'mass number', every: 'every particle', plus: 'protons plus neutrons', electrons: "Electrons aren't", find: 'So to find', minus: 'Thirty-five minus', eighteen: 'eighteen neutrons'});
export const SceneMassNumber: React.FC = () => {
	const f = useCurrentFrame();
	const n = ramp(f, K4.minus, K4.eighteen, 0, 18);
	const r1 = [{t: 'neutrons = A − Z'}];
	const r2 = [{t: '= 35 − 17 = '}];
	return (
		<SVG>
			<Heading text="The top number: protons plus neutrons" at={0} />
			<Nuclide x={860} y={360} sym="Cl" A={35} Z={17} hiA={20} />
			<Atom cx={AX} cy={AY} R={AR} p={17} n={n} e={0} />
			<PenRing cx={AX} cy={AY} rx={92} ry={92} at={K4.plus} color={AMB} seed={5} />
			<Write x={110} y={300} text="everything in the nucleus" at={K4.plus} size={42} color={AMB_INK} />
			<Write x={1200} y={560} text="A = protons + neutrons" at={K4.every} size={44} color={INK} />
			<Sx x={1200} y={606} text="(the nucleons)" size={30} color={INK} weight={700} at={K4.every + 10} />
			<LiveR x={1200} y={240} w={290} label="protons" text="17" color={P_INK} />
			<LiveR x={1520} y={240} w={290} label="neutrons" text={f < K4.minus ? '?' : `${Math.floor(n + 1e-6)}`} color={N_INK} />
			<LiveR x={1200} y={400} w={290} label="electrons" text="?" color={E_INK} />
			{f >= K4.electrons ? <><DrawPath d="M1210,410 L1480,470" at={K4.electrons} dur={10} color="#5a6470" width={7} /><DrawPath d="M1480,410 L1210,470" at={K4.electrons + 5} dur={10} color="#5a6470" width={7} /></> : null}
			<Sx x={1520} y={450} text="not counted in A" size={34} color={INK} weight={800} at={K4.electrons + 10} />
			<Rich x={1200} y={720} segs={r1} size={52} at={K4.find} />
			<Rich x={1200} y={810} segs={r2} size={52} at={K4.minus} />
			<Framed x={1200 + richW(r2, 52)} y={810} segs={[{t: '18', c: GREEN_T}]} at={K4.eighteen - 6} size={52} />
			{void K4.top}{void K4.mass}{void RED}
		</SVG>
	);
};

// ---------- 5. electrons, charge and ions ----------
const K5 = cues(sc('ions'), {what: 'What about electrons', cancel: 'charges cancel', equals: 'electrons equals', this: 'This chlorine atom', salt: 'But in salt', gained: 'It has gained', minus: 'charge of minus one', ion: 'makes it an ion', right: 'top right', chloride: 'The chloride ion', notice: 'Notice what', protons: 'The protons, and so', same: 'exactly the same'});
const CX5 = 600, CY5 = 640, R5 = 240;
export const SceneIons: React.FC = () => {
	const f = useCurrentFrame();
	const e = ramp(f, K5.equals, K5.this + 40, 0, 17);
	const fly = clamp01((f - K5.gained) / 46);
	const landed = fly >= 1;
	const target = elecPos(18, CX5, CY5, R5, f)[17];
	const fx = 1900 + (target[0] - 1900) * smooth(fly), fy = 520 + (target[1] - 520) * smooth(fly) - Math.sin(Math.PI * fly) * 80;
	const E = landed ? 18 : Math.floor(e + 1e-6);
	const jh = 360;
	const jw = (jh / SJAR.box[3]) * SJAR.box[2];
	return (
		<SVG>
			<Heading text="Electrons, charge and ions" at={0} />
			<Nuclide x={260} y={330} sym="Cl" A={35} Z={17} q="−" qAt={K5.right - 10} hiQ={K5.right - 10} size={110} />
			<Atom cx={CX5} cy={CY5} R={R5} p={17} n={18} e={E} />
			{f >= K5.gained && !landed ? <circle cx={fx} cy={fy} r={9} fill={E_BLUE} stroke={E_INK} strokeWidth={2} /> : null}
			<Write x={1020} y={800} text="+1 electron" at={K5.gained} size={42} color={E_INK} />
			<PenArrow a={[1100, 760]} b={[target[0] + 30, target[1] + 10]} at={K5.gained + 10} color={E_INK} bend={0.2} />
			<LiveR x={760} y={230} w={250} label="protons" text="17" color={P_INK} />
			<LiveR x={1040} y={230} w={250} label="electrons" text={`${E}`} color={E_INK} />
			<LiveR x={1320} y={230} w={250} label="charge" text={E === 18 ? '−1' : '0'} color={TEAL_INK} />
			<PenRing cx={885} cy={269} rx={150} ry={58} at={K5.protons} color={P_INK} seed={4} />
			<Write x={760} y={370} text="still 17: still chlorine" at={K5.protons + 8} size={42} color={P_INK} />
			<ChargeMeter x={960} y={400} p={17} e={E} />
			<Write x={960} y={690} text={E === 18 ? 'gained one: charge −1' : '17 + and 17 −: neutral'} at={K5.this} size={40} color={TEAL_INK} />
			<Plate p={SJAR} x={1660 - jw / 2} y={420} h={jh} />
			<Sx x={1660} y={830} text="chloride ion in salt" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Write x={110} y={430} text="ion: gained or lost electrons" at={K5.ion} size={38} color={TEAL_INK} />
			{void K5.what}{void K5.cancel}{void K5.salt}{void K5.minus}{void K5.chloride}{void K5.notice}{void K5.same}{void PTStrip}{void Particle}
		</SVG>
	);
};
