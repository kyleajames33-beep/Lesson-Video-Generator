// M8 C03a scenes 1 to 6: the hook (eight blank-label bottles, the suspect strip, a sample tube with a blue hint), three
// kinds of evidence (precipitate, flame, complex panels), step 1 chloride (drop, white AgCl, the ion lock, the first
// flowchart family, the dilute lead tag), splitting silver from lead (ammonia dissolves AgCl, the complex wrap, KI
// gives yellow PbI2), step 2 sulfate (white BaSO4, the slightly soluble CaSO4, lead caught here) and flame tests (wire
// loop, blue flame first, the energy ladder, pale green and brick red, copper set aside, back to KI for lead).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BOTTLE, BUNSEN, FLAME, FLAME_A, Heading, RACK, TUBE_A, sc} from './common';
import {
	AChip, CAT, CHART_E, CHART_N, C_CL, C_CX, C_FL, C_SO, Chart, DimG, Dropper, EnergyInset, FAM, FallDrop, Fade, FlaskStates, GREYX, INK, INK_SOFT, LockLens, NH3, Note, Overlay, PPT, PicF,
	Suspects, Sx, WireLoop, WrapLens, allT, natPt, picW, smooth, susX, tubePt, vis,
} from './parts';
import type {CT} from './parts';

export const TX = 90, TY = 420, TH = 440;
const CLC = {fill: '#5aa469', ink: '#2f6b3c'};
const SO4 = {label: 'SO_4^{2−}', fill: '#f0d9a0', ink: '#8a6410', r: 24, size: 11};
export const merge = (...ts: CT[]): CT => Object.assign({}, ...ts);

/** The main tube at the left with a dropper and drops. */
export const TubeDrop: React.FC<{x?: number; y?: number; h?: number; states: {p: typeof RACK.clear; at: number; dur?: number}[]; drops?: number[]; dropAt?: number; dropOut?: number; color?: string; label?: string; labelColor?: string; o?: number; ds?: number}> = ({x = TX, y = TY, h = TH, states, drops = [], dropAt, dropOut, color = '#dfe6ee', label, labelColor, o = 1, ds = 1}) => {
	const [mx, my] = tubePt(x, y, h, TUBE_A.cx, TUBE_A.mouth);
	const [, sy] = tubePt(x, y, h, TUBE_A.cx, TUBE_A.surf);
	return (
		<g opacity={o}>
			<FlaskStates x={x} y={y} h={h} states={states} />
			{dropAt !== undefined ? <Dropper x={mx} y={my - 34} s={ds} at={dropAt} out={dropOut} color={color} label={label} labelColor={labelColor} /> : null}
			{drops.map((t, i) => <FallDrop key={i} x={mx} y0={my - 30} y1={sy + 6} at={t} color={color} />)}
		</g>
	);
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {labels: 'labels have', each: 'Each one holds', barium: 'barium', calcium: 'calcium', magnesium: 'magnesium', lead: 'lead', silver: 'silver', copper: 'copper', fe2: 'iron two', fe3: 'iron three', sample: 'A sample from', tube: 'this tube', blue: 'blue tint', proof: 'proof', one: 'One test', seq: 'We need', out: 'out'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const BH = 270, bw = picW(BOTTLE, BH), BY = 236;
	const gone = smooth(prog(f, K1.out, 24));
	const write = [K1.barium, K1.calcium, K1.magnesium, K1.lead, K1.silver, K1.copper, K1.fe2, K1.fe3];
	const PX = 150, PY = 300, PH = 500;
	const [mx, my] = tubePt(PX, PY, PH, TUBE_A.cx, TUBE_A.mouth);
	const [lx, ly] = tubePt(PX, PY, PH, 910, 600), [rx, ry] = tubePt(PX, PY, PH, 1086, 1632);
	const tint = vis(f, K1.blue, undefined, 20);
	const cuX = susX(5);
	return (
		<>
			<Suspects write={write} st={{'Cu^{2+}': {g: [[K1.blue, K1.proof + 20]]}}} />
			<Heading text="Which metal ion is in this sample?" at={4} size={56} />
			<Overlay>
				<g opacity={1 - gone} transform={`translate(0,${80 * gone})`}>
					<rect x={690} y={BY + BH + 2} width={1210} height={18} rx={4} fill="#a0784c" />
					<rect x={690} y={BY + BH + 20} width={1210} height={8} rx={3} fill="#7a5a36" />
					{write.map((t, i) => (
						<g key={i} opacity={prog(f, Math.min(t, K1.labels) - 30 + i * 4, 14)}>
							<PicF p={BOTTLE} x={susX(i) - bw / 2} y={BY} h={BH} />
							<Sx x={susX(i)} y={BY + BH * 0.62} text="?" size={44} color="#b9ad96" anchor="middle" weight={800} at={-1000} />
						</g>
					))}
					<Note x={1295} y={BY + BH + 74} text="labels washed off: eight different metal ions" size={32} color={INK_SOFT} anchor="middle" at={K1.each} />
				</g>
				<Fade at={K1.sample - 10}>
					<path d={`M${cuX},${BY + 10} C${cuX - 120},${BY - 120} ${mx + 160},${my - 160} ${mx},${my - 20}`} fill="none" stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 9" opacity={1 - gone} />
					<PicF p={RACK.clear} x={PX} y={PY} h={PH} />
					{tint > 0.01 ? <rect x={lx} y={ly} width={rx - lx} height={ry - ly} rx={(rx - lx) / 2} fill="#7fb2e6" opacity={0.3 * tint} /> : null}
					<Note x={PX + picW(RACK.clear, PH) / 2} y={PY + PH + 50} text="sample from one bottle" size={30} color={INK} anchor="middle" hand at={K1.tube} />
				</Fade>
				<AChip x={PX + picW(RACK.clear, PH) / 2} y={PY + PH + 80} text="a hint, not proof" size={32} color="#c4432f" anchor="middle" at={K1.proof - 20} />
				<Note x={700} y={680} text="one test won't settle eight suspects" size={44} color={INK} at={K1.one} out={K1.out} />
				<Note x={700} y={560} text="a sequence of tests: each result rules ions out" size={44} color={C_CL} at={K1.out} />
				<AChip x={700} y={640} text="qualitative analysis: which ions, not how much" size={32} color={GREYX} hand={false} at={K1.out + 16} />
				{void K1.seq}
			</Overlay>
		</>
	);
};

// ---------- 2. Three kinds of evidence ----------
const K2 = cues(sc('three-kinds-of-evidence'), {three: 'three kinds', ppt: 'A precipitate test', anion: 'adds an anion', rules: 'solubility rules', flame: 'A flame test', heats: 'heats the sample', complex: 'complexation test', bond: 'bond around', ion: 'complex ion', colour: 'striking colour', pull: 'pull a solid', plan: 'The plan', sort: 'sort', confirm: 'confirm'});
const PANEL = [340, 960, 1580];
export const SceneEvidence: React.FC = () => {
	const PY = 290;
	const AH = 340, aw = picW(RACK.agcl, AH);
	const BH = 340, bw = picW(BUNSEN, BH);
	return (
		<>
			<Heading text="Three kinds of evidence" at={4} size={56} />
			<Overlay>
				{[{t: 'precipitate', at: K2.ppt, c: INK}, {t: 'flame', at: K2.flame, c: C_FL}, {t: 'complex', at: K2.complex, c: C_CX}].map((p, i) => (
					<Fade key={i} at={p.at - 6}>
						<rect x={PANEL[i] - 270} y={PY - 90} width={540} height={560} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
						<Sx x={PANEL[i]} y={PY - 30} text={p.t} size={50} color={p.c} anchor="middle" hand at={p.at} />
					</Fade>
				))}
				<Fade at={K2.ppt}><PicF p={RACK.agcl} x={PANEL[0] - aw / 2} y={PY} h={AH} /></Fade>
				<DimG at={K2.flame} to={0.45}>
					<Note x={PANEL[0]} y={PY + AH + 52} text="adds an anion: an insoluble" size={28} color={INK} anchor="middle" hand={false} at={K2.anion} />
					<Note x={PANEL[0]} y={PY + AH + 90} text="solid with only some cations" size={28} color={INK} anchor="middle" hand={false} at={K2.anion + 8} />
				</DimG>
				<AChip x={PANEL[0]} y={PY + 500} text="c13: NAGSAG" size={28} color={GREYX} hand={false} anchor="middle" at={K2.rules} />
				<Fade at={K2.flame}><PicF p={BUNSEN} x={PANEL[1] - bw / 2} y={PY} h={BH} /></Fade>
				<DimG at={K2.complex} to={0.45}>
					<Note x={PANEL[1]} y={PY + AH + 52} text="heat the sample, read" size={28} color={INK} anchor="middle" hand={false} at={K2.heats} />
					<Note x={PANEL[1]} y={PY + AH + 90} text="the colour of the flame" size={28} color={INK} anchor="middle" hand={false} at={K2.heats + 8} />
				</DimG>
				<WrapLens cx={PANEL[2]} cy={PY + 160} r={150} at={K2.complex} metal={{label: 'M^{2+}', fill: CAT.fill, ink: CAT.ink, r: 36, size: 20}} lig={{...NH3, r: 26, size: 17}} n={4} wrapAt={K2.bond} />
				<DimG at={K2.ion} to={0.45}>
					<Note x={PANEL[2]} y={PY + AH + 52} text="molecules or ions bond" size={28} color={INK} anchor="middle" hand={false} at={K2.bond} />
					<Note x={PANEL[2]} y={PY + AH + 90} text="around the metal ion" size={28} color={INK} anchor="middle" hand={false} at={K2.bond + 8} />
				</DimG>
				<Fade at={K2.ion}>
					<rect x={1180} y={PY + 492} width={720} height={100} rx={18} fill="#f1ecf8" stroke={C_CX} strokeWidth={3} />
					<Note x={1540} y={PY + 532} text="complex ion: a metal ion with" size={30} color={C_CX} anchor="middle" hand={false} weight={700} at={K2.ion} />
					<Note x={1540} y={PY + 572} text="molecules or ions bonded around it" size={30} color={C_CX} anchor="middle" hand={false} weight={700} at={K2.ion + 6} />
				</Fade>
				<Note x={PANEL[2]} y={PY + 640} text="often coloured, or pulls a solid back into solution" size={24} color={INK_SOFT} anchor="middle" hand={false} at={K2.colour} />
				<AChip x={PANEL[0]} y={PY + 690} text="sort" size={40} color={INK} anchor="middle" at={K2.sort} />
				<AChip x={(PANEL[1] + PANEL[2]) / 2} y={PY + 690} text="confirm" size={40} color={C_CX} anchor="middle" at={K2.confirm} />
				{void K2.three}{void K2.pull}{void K2.plan}
			</Overlay>
		</>
	);
};

// ---------- 3. Step 1: chloride ----------
const K3 = cues(sc('step-1-chloride'), {fresh: 'fresh portion', hcl: 'dilute hydrochloric', chloride: 'chloride ions', dissolve: 'Chlorides dissolve', except: 'except with', white: 'white precipitate', means: 'means silver', no: 'No precipitate', out: 'out', catch: 'One catch', slightly: 'slightly soluble', slip: 'slip through', step: 'step'});
export const LENS = {cx: 470, cy: 700, r: 140};
export const SceneStep1: React.FC = () => {
	const [mx] = tubePt(TX, TY, TH, TUBE_A.cx, TUBE_A.mouth);
	const T: CT = {
		S: {at: K3.fresh, glow: K3.fresh}, e1s: {at: K3.hcl}, e1w: {at: K3.white}, n1w: {at: K3.white, glow: K3.white + 10, dim: K3.no, to: 0.55}, e1n: {at: K3.no}, n1n: {at: K3.no, glow: K3.no + 6}, tag1: {at: K3.slightly},
	};
	return (
		<>
			<Suspects st={{'Ag^{+}': {g: [[K3.means, K3.no]], x: K3.out}, 'Pb^{2+}': {g: [[K3.means, K3.no]], x: K3.out, ux: K3.step, faint: K3.step}}} />
			<Heading text="Step 1: chloride" at={4} size={56} color={C_CL} />
			<Overlay>
				<TubeDrop states={[{p: RACK.clear, at: -100}, {p: RACK.agcl, at: K3.white + 10, dur: 30}, {p: RACK.clear, at: K3.no + 6, dur: 20}]} dropAt={K3.hcl} dropOut={K3.no} drops={[K3.chloride - 10, K3.chloride + 8, K3.chloride + 26]} label="HCl" labelColor={C_CL} />
				<Note x={mx} y={TY + TH + 50} text="white: AgCl or PbCl_2" size={30} color={INK} anchor="middle" hand={false} at={K3.white + 20} out={K3.no} />
				<Note x={mx} y={TY + TH + 50} text="no ppt" size={34} color={C_CL} anchor="middle" at={K3.no + 10} />
				<Note x={60} y={1000} text="fresh portion: a new sample from the same bottle" size={26} color={GREYX} hand={false} at={K3.fresh + 10} />
				<LockLens {...LENS} at={K3.chloride - 20} out={K3.no} cat={{label: 'Ag^{+}', fill: CAT.fill, ink: CAT.ink, r: 20, size: 13}} an={{label: 'Cl^{−}', ...CLC, r: 22, size: 13}} n={4} arrive={K3.chloride} lockAt={K3.white} every={12} title="silver meets chloride" s={1.35} />
				<Note x={LENS.cx} y={LENS.cy - LENS.r - 24} text="only AgCl and PbCl_2 are insoluble" size={24} color={INK_SOFT} anchor="middle" hand={false} at={K3.except} out={K3.no} />
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
				<Note x={1880} y={440} text="PbCl_2 slightly soluble" size={20} color={GREYX} anchor="end" hand={false} at={K3.slip} />
				{void K3.dissolve}{void K3.catch}
			</Overlay>
		</>
	);
};

// ---------- 4. Splitting silver from lead ----------
const K4 = cues(sc('silver-or-lead'), {both: 'Both solids', apart: 'tell them apart', ammonia: 'Add dilute ammonia', molecules: 'Ammonia molecules', bond: 'bond to silver', complex: 'form a complex', dissolves: 'dissolves', stays: 'Lead chloride stays', second: 'second check', ki: 'potassium iodide', fresh: 'fresh portion', yellow: 'bright yellow', iodide: ['iodide', 2]});
export const SceneSilverLead: React.FC = () => {
	const H = 340;
	const X1 = 40, X2 = 236, X3 = 432, Y = 400;
	const [m1] = tubePt(X1, Y, H, TUBE_A.cx, TUBE_A.mouth), [m2] = tubePt(X2, Y, H, TUBE_A.cx, TUBE_A.mouth), [m3] = tubePt(X3, Y, H, TUBE_A.cx, TUBE_A.mouth);
	const base = allT(FAM.cl.slice(0, 7), -1000);
	const T: CT = merge(base, {
		n1w: {at: -1000, glow: K4.both, dim: 690, to: 0.32}, S: {at: -1000, dim: 690, to: 0.32}, e1s: {at: -1000, dim: 690, to: 0.32}, e1w: {at: -1000, dim: 690, to: 0.32}, e1n: {at: -1000, dim: 690, to: 0.32}, n1n: {at: -1000, dim: 690, to: 0.32}, tag1: {at: -1000, dim: 690, to: 0.32},
		e4a: {at: K4.dissolves, dim: 690, to: 0.32}, n4ag: {at: K4.dissolves, glow: K4.dissolves + 6, dim: 690, to: 0.32}, e4b: {at: K4.stays, dim: 690, to: 0.32}, n4pb: {at: K4.stays, glow: K4.stays + 6, subAt: K4.yellow, dim: 690, to: 0.32},
	});
	return (
		<>
			<Suspects st={{'Ag^{+}': {g: [[K4.both, K4.stays]]}, 'Pb^{2+}': {g: [[K4.both, 740]]}}} />
			<Heading text="Splitting silver from lead" at={4} size={56} />
			<Overlay>
				<TubeDrop x={X1} y={Y} h={H} states={[{p: RACK.agcl, at: -100}, {p: RACK.clear, at: K4.dissolves, dur: 40}]} dropAt={K4.ammonia} dropOut={K4.stays} drops={[K4.ammonia + 20, K4.ammonia + 38, K4.ammonia + 56]} color="#d9cdee" label="NH_3" labelColor={C_CX} />
				<Note x={m1} y={Y + H + 44} text="AgCl" size={30} color={INK} anchor="middle" hand={false} at={-100} />
				<Note x={m1} y={Y + H + 82} text="dissolves" size={30} color={C_CX} anchor="middle" at={K4.dissolves + 10} />
				<TubeDrop x={X2} y={Y} h={H} states={[{p: RACK.agcl, at: -100}]} />
				<Note x={m2} y={Y + H + 44} text="PbCl_2" size={30} color={INK} anchor="middle" hand={false} at={-100} />
				<Note x={m2} y={Y + H + 82} text="stays white" size={30} color={C_CL} anchor="middle" at={K4.stays + 10} />
				<Fade at={K4.ki - 10}>
					<TubeDrop x={X3} y={Y} h={H} states={[{p: RACK.clear, at: -100}, {p: RACK.pbi2, at: K4.yellow - 6, dur: 24}]} dropAt={K4.ki} drops={[K4.fresh, K4.fresh + 18, K4.fresh + 36]} color="#f4f0e2" label="KI" labelColor={PPT.yellowInk} />
					<Note x={m3} y={Y + H + 44} text="fresh portion" size={26} color={GREYX} anchor="middle" hand={false} at={K4.fresh} />
				</Fade>
				<WrapLens cx={530} cy={560} r={92} at={K4.molecules - 10} out={K4.ki - 14} metal={{label: 'Ag^{+}', fill: CAT.fill, ink: CAT.ink, r: 22, size: 14}} lig={NH3} n={2} wrapAt={K4.bond} breakAt={K4.dissolves - 30} title="[Ag(NH_3)_2]^{+} forms" titleAt={K4.complex} />
				<Note x={700} y={640} text="Pb^{2+} + 2I^{−} → PbI_2(s), bright yellow" size={36} color={PPT.yellowInk} hand={false} at={K4.iodide} />
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
				{void K4.apart}{void K4.second}
			</Overlay>
		</>
	);
};

// ---------- 5. Step 2: sulfate ----------
const K5 = cues(sc('step-2-sulfate'), {nothing: 'gave nothing', fresh: 'fresh portion', h2so4: 'dilute sulfuric', barium: 'Barium sulfate', white: 'white precipitate', calcium: 'Calcium sulfate', slightly: 'slightly soluble', conc: 'fairly concentrated', lead: 'lead sulfate', here: 'caught here', solid: 'A white solid', metal: 'which metal'});
export const clDone = (from = -1000): CT => allT(FAM.cl, from, -1000);
export const SceneStep2: React.FC = () => {
	const [mx] = tubePt(TX, TY, TH, TUBE_A.cx, TUBE_A.mouth);
	const T: CT = merge(clDone(), {
		n1n: {at: -1000, glow: K5.nothing}, e1n: {at: -1000},
		tag1: {at: -1000, glow: K5.here, dim: -1000, undim: K5.lead},
		e2s: {at: K5.h2so4}, e2w: {at: K5.white}, n2w: {at: K5.white, glow: K5.white + 8, subAt: K5.slightly}, eP: {at: K5.here}, n2n: {at: K5.solid}, q2: {at: K5.metal},
	});
	return (
		<>
			<Suspects st={{'Ag^{+}': {x: -1000}, 'Pb^{2+}': {x: -1000, ux: -1000, faint: -1000, g: [[K5.lead, K5.here + 30]]}, 'Ba^{2+}': {g: [[K5.barium, K5.calcium], [K5.metal, 900]]}, 'Ca^{2+}': {g: [[K5.calcium, K5.lead], [K5.metal, 900]]}}} />
			<Heading text="Step 2: sulfate" at={4} size={56} color={C_SO} />
			<Overlay>
				<TubeDrop states={[{p: RACK.clear, at: -100}, {p: RACK.baso4, at: K5.white + 8, dur: 30}]} dropAt={K5.h2so4} dropOut={K5.white + 30} drops={[K5.barium - 20, K5.barium - 2, K5.barium + 16]} color="#f4ead2" label="H_2SO_4" labelColor={C_SO} />
				<Note x={mx} y={TY + TH + 50} text="white: BaSO_4" size={30} color={INK} anchor="middle" hand={false} at={K5.white + 20} />
				<Note x={60} y={1050} text="another fresh portion" size={26} color={GREYX} hand={false} at={K5.fresh} />
				<LockLens {...LENS} at={K5.barium - 20} out={K5.conc} cat={{label: 'Ba^{2+}', fill: CAT.fill, ink: CAT.ink, r: 22, size: 12}} an={SO4} n={4} arrive={K5.barium} lockAt={K5.white} every={12} title="BaSO_4 is insoluble" s={1.3} />
				<DimG at={K5.metal} to={0.4}><Note x={60} y={990} text="Ba^{2+} + SO_4^{2−} → BaSO_4(s)" size={36} color={INK} hand={false} at={K5.white + 10} /></DimG>
				<Note x={700} y={770} text="CaSO_4 slightly soluble: white only if concentrated" size={28} color={GREYX} hand={false} at={K5.slightly} />
				<Note x={700} y={820} text="PbSO_4 white: dilute lead caught here" size={28} color={GREYX} hand={false} at={K5.lead + 10} />
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
			</Overlay>
		</>
	);
};

// ---------- 6. Flame tests ----------
const K6 = cues(sc('flame-tests'), {earns: 'flame test earns', dip: 'Dip a clean', hold: 'hold it', blue: 'blue Bunsen', heat: 'Heat excites', fall: 'fall back', light: 'give out light', year: 'Year 11', barium: 'Barium gives', green: 'green', calcium: 'Calcium gives', red: 'brick red', copper: 'Copper gives', bg: 'bluegreen', mg: 'Magnesium and', useful: 'no useful colour', test: ['test', 2]});
export const FL = {x: 300, y: 230, h: 600};
export const flamePt = (nx: number, ny: number) => natPt(FLAME.off, FL.x, FL.y, FL.h, nx, ny);
export const soFlDone = (): CT => merge(clDone(), allT(FAM.so, -1000, -1000));
export const SceneFlame: React.FC = () => {
	const ST = {x: 60, y: 560, h: 280};
	const [tmx, tmy] = tubePt(ST.x, ST.y, ST.h, TUBE_A.cx, TUBE_A.mouth);
	const [, tsy] = tubePt(ST.x, ST.y, ST.h, TUBE_A.cx, TUBE_A.surf);
	const [fx, fy] = flamePt(FLAME_A.cx, 640);
	const CU = {x: 60, y: 238, h: 290};
	const T: CT = merge(soFlDone(), {
		n2w: {at: -1000, glow: K6.earns}, q2: {at: -1000, out: K6.earns + 10},
		e6s: {at: K6.earns}, e6a: {at: K6.green}, n6ba: {at: K6.green, glow: K6.green, dim: K6.red, to: 0.5}, e6b: {at: K6.red}, n6ca: {at: K6.red, glow: K6.red},
		eKI: {at: K6.test}, tagKI: {at: K6.test}, n4pb: {at: -1000, glow: K6.test + 10, dim: -1000, undim: K6.test},
	});
	const fcx = FL.x + picW(FLAME.off, FL.h) / 2;
	return (
		<>
			<Suspects st={{'Ag^{+}': {x: -1000}, 'Pb^{2+}': {x: -1000, ux: -1000, faint: -1000, g: [[K6.mg, 968]]}, 'Ba^{2+}': {g: [[K6.barium, K6.calcium]]}, 'Ca^{2+}': {g: [[K6.calcium, K6.copper]]}, 'Cu^{2+}': {g: [[K6.copper, K6.mg]]}, 'Mg^{2+}': {g: [[K6.mg, 968]]}}} />
			<Heading text="Flame tests" at={4} size={56} color={C_FL} />
			<Overlay>
				<FlaskStates x={FL.x} y={FL.y} h={FL.h} states={[{p: FLAME.off, at: -100}, {p: FLAME.blue, at: K6.blue, dur: 14}, {p: FLAME.ba, at: K6.green - 8, dur: 18}, {p: FLAME.ca, at: K6.red - 8, dur: 18}]} />
				<PicF p={RACK.clear} x={ST.x} y={ST.y} h={ST.h} />
				<WireLoop at={K6.dip - 20} pts={[[K6.dip - 20, tmx + 10, tmy - 70], [K6.dip + 8, tmx, tsy + 30], [K6.hold - 4, tmx, tsy + 30], [K6.hold + 14, tmx + 20, tmy - 90], [K6.blue + 4, fx - 6, fy]]} hot={K6.blue + 6} />
				<Note x={fcx} y={FL.y + FL.h + 46} text="blue flame first" size={30} color="#3a6fb5" anchor="middle" at={K6.blue + 6} out={K6.green - 10} />
				<Note x={fcx} y={FL.y + FL.h + 46} text="pale green: Ba^{2+}" size={30} color="#4f8a2a" anchor="middle" hand={false} at={K6.green} out={K6.red - 10} />
				<Note x={fcx} y={FL.y + FL.h + 46} text="brick red: Ca^{2+}" size={30} color="#b8441e" anchor="middle" hand={false} at={K6.red} />
				<Note x={ST.x + 75} y={ST.y + ST.h + 40} text="clean loop" size={24} color={GREYX} anchor="middle" at={K6.dip + 10} />
				<EnergyInset x={60} y={880} w={540} h={130} at={K6.heat - 10} out={K6.barium + 40} color="#4fae5a" from={K6.heat + 10} period={60} title="Year 11: excited electrons emit light" />
				<Fade at={K6.bg - 6}>
					<PicF p={FLAME.cu} x={CU.x} y={CU.y} h={CU.h} />
					<Note x={CU.x + picW(FLAME.cu, CU.h) / 2} y={CU.y - 14} text="Cu^{2+} (useful later)" size={24} color="#1f8a7a" anchor="middle" hand={false} at={K6.bg} />
				</Fade>
				<Chart nodes={CHART_N} edges={CHART_E} T={T} />
				<Note x={1200} y={1030} text="Mg^{2+} and Pb^{2+}: no useful flame colour" size={28} color={GREYX} anchor="middle" hand={false} at={K6.useful} />
				{void K6.fall}{void K6.light}{void K6.year}{void C_SO}
			</Overlay>
		</>
	);
};
