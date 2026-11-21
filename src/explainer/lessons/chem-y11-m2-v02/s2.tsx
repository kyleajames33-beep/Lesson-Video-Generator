// Y11 Chem M2 V02 scenes 7 to 13: the prediction (one mole of H2 against one mole of O2, 3 s ring), a count not a
// mass (both boxes 6.022 x 10^23 molecules; the dozen boxes return; the boxes drop onto a beam balance that tips to
// O2; the crossed "a mole is a mass" chip), the two worked examples in the calculation layout (2.5 mol C to atoms with
// the unit cancel; 3.01 x 10^24 water molecules to 5.00 mol with the sense check), naming the particle (the painted
// dry ice with a CO2 molecule opening into its O atoms; the painted halite with a formula unit in a lattice fragment
// splitting into ions), the equation counted in moles (particles swell into mole tiles), and the memory line.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {BEAKER_W, D, DRYICE, DRYICE_PELLET, HALITE, HALITE_FACE, LUMP, NA, NA_S, NA_UNIT, R, dur, fix, hold, ph, ptOn, pw, sc, sci} from './common';
import {
	AMB_S, AMB_SOFT, AMB_T, Ball, Beam, Bracket, CO2, Chip, Countdown, Di, DotField, EL, Fade, Framed, GREEN_S, Heading, INK, MemoryLine, MoleTile, NAVY_SOFT, NAVY_T,
	PAPER, PenArrow, PenRing, Plate, RED_T, Reveal, Rich, SVG, SmallBridge, StrikeLine, Sx, TaskStrip, TickMark, VIO_S, VIO_SOFT, VIO_T, ViewFrame, Write, beamEnds,
	gridPts, lerp, prog, richW, smooth, span,
} from './parts';
import type {Seg} from './parts';
import {BalRibbon} from './s1';

// ---------- a box of diatomic molecules ----------
const rnd = (k: number, s: number) => { const v = Math.sin(k * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
type MB = {x: number; y: number; w: number; h: number};
const MolBox: React.FC<{g: MB; el: 'H' | 'O'; r: number; seed: number; label: string; band?: number; o?: number}> = ({g, el, r, seed, label, band, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const bandH = 74;
	const inner = band !== undefined ? g.h - bandH * prog(f, band, 12) : g.h;
	const pts = gridPts(g.x + 10, g.y + 10, g.w - 20, inner - 20, 5, 4).map(([x, y], i) => [x + (rnd(i, seed) - 0.5) * (g.w / 9), y + (rnd(i, seed + 3) - 0.5) * (inner / 9)] as [number, number]);
	return (
		<g opacity={o}>
			<rect x={g.x} y={g.y} width={g.w} height={g.h} rx={18} fill={PAPER} stroke={AMB_T} strokeWidth={5} />
			{pts.map(([x, y], i) => <Di key={i} el={el} x={x + Math.sin(f * 0.08 + i) * 3} y={y + Math.cos(f * 0.07 + i * 1.7) * 3} r={r} rot={(i * 47 + f * 0.6) % 360} />)}
			<Sx x={g.x + g.w / 2} y={g.y - 18} text={label} size={44} color={AMB_T} anchor="middle" weight={800} at={-1000} />
			{band !== undefined ? (
				<Fade at={band}>
					<rect x={g.x + 8} y={g.y + g.h - bandH} width={g.w - 16} height={bandH - 8} rx={12} fill={NAVY_SOFT} stroke={NAVY_T} strokeWidth={3} />
					<Rich x={g.x + g.w / 2} y={g.y + g.h - 24} segs={[{t: NA_S, c: NAVY_T}, {t: ' molecules', c: NAVY_T}]} size={g.w < 420 ? 32 : 40} anchor="middle" />
				</Fade>
			) : null}
		</g>
	);
};

// ---------- 7. prediction ----------
const K7 = cues(sc('prediction'), {quick: 'Quick prediction', h: 'hydrogen molecules', o: 'oxygen molecules', which: 'Which contains'});
const H7: MB = {x: 120, y: 280, w: 560, h: 520}, O7: MB = {x: 780, y: 280, w: 560, h: 520};
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<SmallBridge />
			<MolBox g={H7} el="H" r={15} seed={3} label="1 mol H_2" />
			<MolBox g={O7} el="O" r={25} seed={5} label="1 mol O_2" />
			<Write x={1440} y={300} text="more molecules?" at={K7.which} size={44} color={INK} />
			<Chip x={1440} y={340} segs={[{t: 'H_2'}]} at={6} size={44} color={INK} />
			<Chip x={1440} y={440} segs={[{t: 'O_2'}]} at={10} size={44} color={INK} />
			<Chip x={1440} y={540} segs={[{t: 'the same'}]} at={14} size={44} color={INK} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={790} r={64} ringFrom={K7.which} />
			<Sx x={H7.x + H7.w / 2} y={H7.y + H7.h + 56} text="hydrogen molecules" size={34} color={INK} anchor="middle" weight={800} at={K7.h} />
			<Sx x={O7.x + O7.w / 2} y={O7.y + O7.h + 56} text="oxygen molecules" size={34} color={INK} anchor="middle" weight={800} at={K7.o} />
			{void K7.quick}
		</SVG>
	);
};

// ---------- 8. a count, not a mass ----------
const K8 = cues(sc('count-not-mass'), {neither: 'Neither', count: 'is a count', remember: 'Remember the dozen', oxygen: 'Oxygen molecules are', more: 'more mass', same: 'same number', amole: 'A mole is a count, not', not: 'not a mass'});
const BEAM = {cx: 720, cy: 600, L: 420};
export const SceneCountNotMass: React.FC = () => {
	const f = useCurrentFrame();
	const drop = span(f, K8.oxygen, K8.oxygen + 26);
	const tilt = 9 * span(f, K8.oxygen + 30, K8.more + 10);
	const [l, r] = beamEnds(BEAM.cx, BEAM.cy, BEAM.L, tilt);
	const bw = 390, bh = 260;
	const onPan = (p: [number, number]): MB => ({x: p[0] - bw / 2, y: p[1] + 66 - bh, w: bw, h: bh});
	const lerpB = (a: MB, b: MB, t: number): MB => ({x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), w: lerp(a.w, b.w, t), h: lerp(a.h, b.h, t)});
	const gH = lerpB(H7, onPan(l), drop), gO = lerpB(O7, onPan(r), drop);
	const dz = prog(f, K8.remember, 12) * (1 - prog(f, K8.amole - 10, 12));
	return (
		<SVG>
			<Heading text="A count, not a mass" at={K8.count - 10} />
			<Fade at={-1000} out={K8.count - 10}><Sx x={96} y={150} text="Quick prediction" size={60} color={INK} hand weight={700} at={-1000} /></Fade>
			<SmallBridge />
			<Beam cx={BEAM.cx} cy={BEAM.cy} L={BEAM.L} tilt={tilt} o={prog(f, K8.oxygen, 14)} />
			<MolBox g={gH} el="H" r={lerp(15, 10, drop)} seed={3} label="1 mol H_2" band={K8.count} />
			<MolBox g={gO} el="O" r={lerp(25, 16, drop)} seed={5} label="1 mol O_2" band={K8.count} />
			{/* the prediction chips: "the same" ticks */}
			<Fade at={-1000} out={K8.remember - 6}>
				<Chip x={1440} y={340} segs={[{t: 'H_2'}]} at={-1000} size={44} color={INK} />
				<Chip x={1440} y={440} segs={[{t: 'O_2'}]} at={-1000} size={44} color={INK} />
			</Fade>
			<Chip x={1440} y={540} segs={[{t: 'the same', c: GREEN_S}]} at={-1000} out={K8.remember - 6} size={44} color={GREEN_S} />
			<Fade at={-1000} out={K8.remember - 6}><TickMark x={1720} y={574} at={K8.neither} s={1.6} /></Fade>
			{/* the dozen boxes from scene 2 */}
			{dz > 0.005 ? (
				<g opacity={dz}>
					<rect x={1420} y={300} width={380} height={170} rx={14} fill={PAPER} stroke={NAVY_T} strokeWidth={4} />
					{gridPts(1430, 310, 360, 150, 6, 2).map(([x, y], i) => <circle key={i} cx={x} cy={y} r={18} fill="#f1dfb8" stroke={INK} strokeWidth={2.5} />)}
					<rect x={1420} y={520} width={380} height={240} rx={14} fill={PAPER} stroke={NAVY_T} strokeWidth={4} />
					{gridPts(1430, 530, 360, 220, 6, 2).map(([x, y], i) => <circle key={i} cx={x} cy={y} r={27} fill="#6aa84f" stroke={INK} strokeWidth={2.5} />)}
					<Sx x={1610} y={812} text="1 dozen each" size={40} color={NAVY_T} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
			<Write x={BEAM.cx} y={236} text="same number" at={K8.same} size={50} color={NAVY_T} anchor="middle" />
			<Bracket a={[BEAM.cx - BEAM.L - bw / 2, 258]} b={[BEAM.cx + BEAM.L + bw / 2, 258]} at={K8.same + 6} color={NAVY_T} depth={14} />
			<Write x={BEAM.cx} y={900} text="different mass" at={K8.more} size={50} color={INK} anchor="middle" />
			<PenRing cx={r[0]} cy={r[1] + 86} rx={bw / 2 + 30} ry={40} at={K8.more + 8} color={INK} seed={6} />
			<Chip x={1420} y={600} segs={[{t: 'a mole is a mass'}]} at={K8.amole} size={44} color={RED_T} strike={K8.not} />
			<Write x={1420} y={760} text="a mole is a count" at={K8.not + 6} size={48} color={RED_T} />
			{void K8.count}
		</SVG>
	);
};

// ---------- worked example layout pieces ----------
const GivensBox: React.FC<{lines: {segs: Seg[]; at: number}[]; y?: number}> = ({lines, y = 290}) => (
	<g>
		<rect x={96} y={y} width={660} height={60 + lines.length * 66} rx={16} fill="#eef2fa" stroke={NAVY_T} strokeWidth={3} />
		<Sx x={120} y={y + 40} text="givens" size={30} color={NAVY_T} weight={800} at={-1000} />
		{lines.map((l, i) => <Rich key={i} x={120} y={y + 100 + i * 66} segs={l.segs} size={40} at={l.at} />)}
	</g>
);
const RuleBox: React.FC<{segs: Seg[]; at: number; y?: number}> = ({segs, at, y = 520}) => (
	<Fade at={at}>
		<rect x={96} y={y} width={660} height={92} rx={16} fill={PAPER} stroke={INK} strokeWidth={3} />
		<rect x={96} y={y} width={12} height={92} rx={4} fill={VIO_S} />
		<Sx x={128} y={y + 58} text="RULE" size={28} color={INK} weight={800} at={-1000} />
		<Rich x={230} y={y + 64} segs={segs} size={52} />
	</Fade>
);
const WX = 830;

// ---------- 9. worked example: moles to atoms ----------
const K9 = cues(sc('moles-to-atoms'), {lets: 'use it', how: 'How many atoms', two5: 'two point five moles', part: 'The particles are', carbon: 'carbon atoms', neq: 'N equals', so: 'so two point five', x6: 'six point zero', thats: 'about one point five', catoms: ['carbon atoms', 2], cancels: 'cancels', count: 'plain count'});
const ROW9: Seg[] = [{t: 'N = '}, {t: `${D.we1.n}`, c: AMB_T}, {t: ' × '}, {t: NA_S, c: VIO_T}];
export const SceneMolesToAtoms: React.FC = () => {
	const f = useCurrentFrame();
	const unitY = 860;
	const uw1 = richW([{t: 'units:  '}], 44), uMol = richW([{t: 'mol'}], 44), uTimes = richW([{t: ' × '}], 44), uInv = richW([{t: NA_UNIT}], 44);
	return (
		<SVG>
			<Heading text="Worked example: moles and particles" at={0} />
			<SmallBridge hiMul={K9.neq + 6} />
			<TaskStrip text={`How many atoms are in ${D.we1.n} mol of carbon?`} />
			<GivensBox lines={[{segs: [{t: 'n', c: AMB_T}, {t: ` = ${D.we1.n} mol`, c: AMB_T}, {t: ' (carbon atoms)', c: INK}], at: -1000}, {segs: [{t: 'N_A', c: VIO_T}, {t: ` = ${NA_S} ${NA_UNIT}`, c: VIO_T}], at: -1000}]} />
			<Plate p={LUMP} x={1824 - pw(LUMP, 300)} y={270} h={300} />
			<Sx x={1824 - pw(LUMP, 300) / 2} y={610} text="carbon" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<RuleBox segs={[{t: 'N', c: NAVY_T}, {t: ' = '}, {t: 'n', c: AMB_T}, {t: ' × '}, {t: 'N_A', c: VIO_T}]} at={-1000} />
			{/* two and a half mole tiles of carbon atoms */}
			<MoleTile x={100} y={680} w={240} h={170} dot={EL.C} seed={21} o={prog(f, K9.two5, 12)} />
			<MoleTile x={356} y={680} w={240} h={170} dot={EL.C} seed={22} o={prog(f, K9.two5 + 6, 12)} />
			<MoleTile x={612} y={680} w={240} h={170} frac={0.5} dot={EL.C} seed={23} o={prog(f, K9.two5 + 12, 12)} />
			<Sx x={100} y={900} text={`${D.we1.n} mol of carbon atoms`} size={36} color={AMB_T} weight={800} at={K9.carbon} />
			<Write x={WX} y={330} text="the particles: carbon atoms" at={K9.carbon} size={44} color={INK} />
			<Rich x={WX} y={440} segs={[{t: 'N = '}, {t: '?', c: NAVY_T}, {t: ' carbon atoms'}]} size={52} at={K9.how} out={K9.so - 6} />
			<Rich x={WX} y={440} segs={ROW9.map((s, i) => ({...s, at: [K9.so, K9.so + 6, K9.x6 - 6, K9.x6][i]}))} size={52} at={K9.so} />
			<Rich x={WX} y={530} segs={[{t: '  = '}, {t: sci(R.we1, 3), c: NAVY_T}]} size={52} at={K9.thats} />
			<Framed x={WX} y={700} segs={[{t: `≈ ${sci(R.we1, 1)} carbon atoms`, c: NAVY_T}]} at={K9.catoms} size={56} stroke={GREEN_S} />
			<Write x={WX + 820} y={700} text={`2 sig figs,`} at={K9.catoms + 14} size={42} color={INK} />
			<Write x={WX + 820} y={748} text={`from ${D.we1.n}`} at={K9.catoms + 18} size={42} color={INK} />
			{/* the unit cancel */}
			<Rich x={WX} y={unitY} segs={[{t: 'units:  '}, {t: 'mol', c: AMB_T}, {t: ' × '}, {t: NA_UNIT, c: VIO_T}, {t: '  →  atoms', c: NAVY_T}]} size={44} at={K9.cancels - 20} />
			<StrikeLine x1={WX + uw1 - 4} y1={unitY - 8} x2={WX + uw1 + uMol + 4} y2={unitY - 22} at={K9.cancels} />
			<StrikeLine x1={WX + uw1 + uMol + uTimes - 4} y1={unitY - 8} x2={WX + uw1 + uMol + uTimes + uInv + 4} y2={unitY - 26} at={K9.cancels + 6} />
			<Write x={WX + 760} y={unitY} text="a plain count" at={K9.count - 6} size={46} color={NAVY_T} />
			{void K9.lets}{void K9.how}{void K9.part}
		</SVG>
	);
};

// ---------- 10. worked example: atoms to moles ----------
const K10 = cues(sc('atoms-to-moles'), {now: 'other way', sample: 'A sample contains', three: 'three point zero one', how: 'How many moles', neq: 'n equals', thats: "That's three", div: 'divided by six', five: 'five point zero zero', wm: ['water molecules', 2], sense: 'Sense check', half: 'a half', ten: 'is ten times', so: 'so about five', makes: 'makes sense'});
const ROW10: Seg[] = [{t: 'n = '}, {t: sci(D.we2.N, 2), c: NAVY_T}, {t: ' ÷ '}, {t: NA_S, c: VIO_T}];
export const SceneAtomsToMoles: React.FC = () => {
	const f = useCurrentFrame();
	const sY = 790;
	const s1: Seg[] = [{t: '3 ÷ 6 = 0.5;   '}], s2: Seg[] = [{t: '10^{24} ÷ 10^{23} = 10;   '}], s3: Seg[] = [{t: '0.5 × 10 = '}];
	const x5 = WX + richW([...s1, ...s2, ...s3], 44);
	return (
		<SVG>
			<Heading text="Worked example: moles and particles" at={-1000} />
			<SmallBridge hiDiv={K10.neq + 6} />
			<TaskStrip text={`How many moles of water molecules is ${sci(D.we2.N, 2)} molecules?`} at={6} />
			<GivensBox lines={[{segs: [{t: 'N', c: NAVY_T}, {t: ` = ${sci(D.we2.N, 2)}`, c: NAVY_T}, {t: ' (H_2O molecules)', c: INK}], at: -1000}, {segs: [{t: 'N_A', c: VIO_T}, {t: ` = ${NA_S} ${NA_UNIT}`, c: VIO_T}], at: -1000}]} />
			<Plate p={BEAKER_W} x={1824 - pw(BEAKER_W, 250)} y={290} h={250} />
			<Sx x={1824 - pw(BEAKER_W, 250) / 2} y={580} text="water" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<RuleBox segs={[{t: 'n', c: AMB_T}, {t: ' = '}, {t: 'N', c: NAVY_T}, {t: ' ÷ '}, {t: 'N_A', c: VIO_T}]} at={-1000} />
			{/* scene 9's board fades out under the new task */}
			{f < 22 ? <g opacity={1 - prog(f, 0, 18)}><Freeze frame={dur('moles-to-atoms') - 1}><SceneMolesToAtoms /></Freeze></g> : null}
			<Write x={WX} y={330} text="the particles: water molecules" at={K10.how} size={44} color={INK} />
			<Rich x={WX} y={440} segs={[{t: 'n = '}, {t: '? mol', c: AMB_T}]} size={52} at={K10.how} out={K10.thats - 6} />
			<Fade at={K10.now} out={K10.five - 10}>
				<rect x={96} y={700} width={660} height={150} rx={16} fill={PAPER} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
				<Rich x={120} y={758} segs={[{t: 'last time: moles → particles, '}, {t: '× N_A', c: VIO_T}]} size={34} />
				<Rich x={120} y={818} segs={[{t: 'now: particles → moles, '}, {t: '÷ N_A', c: VIO_T}]} size={34} />
			</Fade>
			<Rich x={WX} y={440} segs={ROW10.map((s, i) => ({...s, at: [K10.thats, K10.thats + 8, K10.div - 6, K10.div][i]}))} size={46} at={K10.thats} />
			<Framed x={WX} y={570} segs={[{t: `= ${fix(R.we2, 2)} mol`, c: AMB_T}, {t: ' of H_2O molecules', c: INK}]} at={K10.five} size={52} stroke={GREEN_S} />
			<Write x={WX} y={665} text="count → moles: ÷" at={K10.wm} size={46} color={AMB_T} />
			{Array.from({length: Math.round(R.we2)}, (_, i) => <MoleTile key={i} x={100 + i * 136} y={690} w={124} h={150} dot={EL.O} seed={31 + i} size={28} o={prog(f, K10.five + i * 4, 10)} />)}
			<Sx x={100} y={900} text={`${fix(R.we2, 2)} mol of water molecules`} size={36} color={AMB_T} weight={800} at={K10.five + 20} />
			{/* the sense check */}
			<Write x={WX} y={sY - 62} text="sense check" at={K10.sense} size={42} color={INK} />
			<Rich x={WX} y={sY} segs={s1} size={44} at={K10.half - 20} />
			<Rich x={WX + richW(s1, 44)} y={sY} segs={s2} size={44} at={K10.ten - 20} />
			<Rich x={WX + richW([...s1, ...s2], 44)} y={sY} segs={[...s3, {t: '5'}]} size={44} at={K10.so} />
			<TickMark x={x5 + 60} y={sY - 14} at={K10.so + 12} s={1.2} />
			<PenRing cx={x5 + 13} cy={sY - 15} rx={30} ry={38} at={K10.makes - 6} color={INK} seed={8} />
			<Write x={WX} y={sY + 90} text="about 5: sensible" at={K10.makes} size={46} color={INK} />
			{void K10.now}{void K10.sample}
		</SVG>
	);
};

// ---------- 11. always name the particle ----------
const K11 = cues(sc('name-the-particle'), {always: 'Always say', because: 'because one particle', half: 'Half a mole', molecules: ['molecules', 1], each: 'each molecule has', twoO: 'two oxygen atoms', twice: 'twice as many', thats: "That's six", whole: 'a whole mole', ionic: 'Ionic compounds', dont: "don't form molecules", fu: 'formula units', simplest: 'simplest ratio', formula: 'the formula', one: 'One mole of sodium', naI: 'sodium ions', clI: 'chloride ions', two: 'two moles of ions', total: 'total'});
const DI = {x: 96, y: 290, w: 680};
const LENS_G = {cx: 1080, cy: 470, r: 200};
const HAL = {x: 110, y: 290, h: 560};
const LENS_H = {cx: 900, cy: 560, r: 220};
const IonChip: React.FC<{x: number; y: number; segs: Seg[]; at: number; color?: string}> = ({x, y, segs, at, color = AMB_T}) => <Chip x={x} y={y} segs={segs} at={at} size={44} color={color} fill={AMB_SOFT} />;
export const SceneNameParticle: React.FC = () => {
	const f = useCurrentFrame();
	const cut = f >= K11.ionic;
	const gOut = 1 - prog(f, K11.ionic, 12);
	const hIn = prog(f, K11.ionic + 4, 14);
	const dh = ph(DRYICE, DI.w);
	const pel = ptOn(DRYICE, DI.x, DI.y, dh, DRYICE_PELLET[0], DRYICE_PELLET[1]);
	const open = span(f, K11.twoO, K11.twoO + 24);
	const face = ptOn(HALITE, HAL.x, HAL.y, HAL.h, HALITE_FACE[0], HALITE_FACE[1]);
	const r1: Seg[] = [{t: 'N(CO_2) = '}, {t: `${fix(D.co2.n, 2)}`, c: AMB_T}, {t: ' × '}, {t: NA_S, c: VIO_T}, {t: ' = '}, {t: `${sci(R.co2N, 3)} molecules`, c: NAVY_T}];
	const r2: Seg[] = [{t: 'N(O) = '}, {t: `${D.co2.oPer}`, c: RED_T}, {t: ' × '}, {t: sci(R.co2N, 3), c: NAVY_T}, {t: ' = '}, {t: `${sci(R.co2O, 3)} O atoms`, c: NAVY_T}];
	return (
		<SVG>
			<Heading text="Always name the particle" at={4} />
			<SmallBridge />
			{/* stage G: dry ice, molecules into atoms */}
			{gOut > 0.005 ? (
				<g opacity={gOut}>
					<Plate p={DRYICE} x={DI.x} y={DI.y} h={dh} at={-1000} />
					<Rich x={96} y={262} segs={[{t: 'carbon dioxide (dry ice): '}, {t: `${fix(D.co2.n, 2)} mol CO_2`, c: AMB_T}]} size={38} />
					<ViewFrame id="v02lensG" cx={LENS_G.cx} cy={LENS_G.cy} r={LENS_G.r} at={-1000} src={pel}>
						<CO2 x={LENS_G.cx} y={LENS_G.cy + 30} r={48} open={open} />
					</ViewFrame>
					<Sx x={LENS_G.cx} y={LENS_G.cy + LENS_G.r + 46} text="one CO_2 molecule" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
					<Write x={1320} y={360} text="2 O per molecule" at={K11.twoO + 10} size={50} color={RED_T} />
					<PenArrow a={[1330, 378]} b={[LENS_G.cx + 150, LENS_G.cy - 20]} at={K11.twoO + 18} color={RED_T} bend={0.2} />
					<Write x={96} y={820} text="one particle can contain others" at={K11.because} out={K11.half - 8} size={56} color={INK} />
					<Rich x={96} y={800} segs={r1.map((s, i) => ({...s, at: [K11.half, K11.half + 6, K11.half + 10, K11.half + 14, K11.molecules - 8, K11.molecules - 4][i]}))} size={48} at={K11.half} />
					<Rich x={96} y={890} segs={r2.map((s, i) => ({...s, at: [K11.twice, K11.twice + 4, K11.twice + 8, K11.twice + 12, K11.thats - 4, K11.thats][i]}))} size={48} at={K11.twice} />
					<Framed x={1180} y={890} segs={[{t: `= ${fix(R.co2On, 1)} mol of O atoms`, c: AMB_T}]} at={K11.whole} size={52} stroke={GREEN_S} />
				</g>
			) : null}
			{/* stage H: halite, formula units into ions */}
			{cut ? (
				<g opacity={hIn}>
					<rect x={96} y={190} width={1500} height={60} rx={14} fill={PAPER} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
					<Rich x={120} y={232} segs={[{t: `${fix(D.co2.n, 2)} mol CO_2`, c: AMB_T}, {t: ` → ${sci(R.co2N, 3)} molecules`, c: NAVY_T}, {t: ' → '}, {t: `${fix(R.co2On, 1)} mol O atoms`, c: AMB_T}]} size={34} />
					<Plate p={HALITE} x={HAL.x} y={HAL.y} h={HAL.h} />
					<Sx x={HAL.x + pw(HALITE, HAL.h) / 2} y={HAL.y + HAL.h + 50} text="sodium chloride (rock salt)" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
					<ViewFrame id="v02lensH" cx={LENS_H.cx} cy={LENS_H.cy} r={LENS_H.r} at={K11.ionic + 4} src={face}>
						{Array.from({length: 7}, (_, j) => Array.from({length: 7}, (_, i) => {
							const na = (i + j) % 2 === 0;
							return <Ball key={i + '-' + j} el={na ? 'Na' : 'Cl'} x={LENS_H.cx + (i - 3) * 62} y={LENS_H.cy + (j - 3) * 62} r={na ? 20 : 28} sign={na ? '+' : '−'} />;
						}))}
						{f >= K11.fu ? <rect x={LENS_H.cx - 34} y={LENS_H.cy - 36} width={130} height={72} rx={34} fill="none" stroke={INK} strokeWidth={6} opacity={prog(f, K11.fu, 10)} /> : null}
					</ViewFrame>
					<Write x={1170} y={330} text="no molecules here" at={K11.dont} size={46} color={INK} />
					<Write x={1170} y={420} text="formula unit:" at={K11.simplest - 10} size={46} color={INK} />
					<Write x={1170} y={476} text="the simplest ratio of ions" at={K11.simplest} size={46} color={INK} />
					<PenArrow a={[1164, 440]} b={[LENS_H.cx + 100, LENS_H.cy - 10]} at={K11.simplest - 4} color={INK} bend={0.25} />
					<Chip x={1500} y={560} segs={[{t: '1 mol NaCl'}]} at={K11.one} size={44} color={AMB_T} fill={AMB_SOFT} anchor="middle" />
					<IonChip x={1170} y={690} segs={[{t: '1 mol Na^{+}'}]} at={K11.naI} />
					<IonChip x={1520} y={690} segs={[{t: '1 mol Cl^{−}'}]} at={K11.clI} />
					<path d="M1500,630 L1320,686" stroke={AMB_S} strokeWidth={4} fill="none" opacity={prog(f, K11.naI, 10)} />
					<path d="M1500,630 L1670,686" stroke={AMB_S} strokeWidth={4} fill="none" opacity={prog(f, K11.clI, 10)} />
					<Bracket a={[1170, 778]} b={[1810, 778]} at={K11.two - 6} color={AMB_S} depth={-20} />
					<Framed x={1300} y={880} segs={[{t: '2 mol of ions', c: AMB_T}]} at={K11.two} size={52} stroke={GREEN_S} />
				</g>
			) : null}
			{cut ? <Write x={1820} y={940} text="say which particle" at={K11.total - 4} size={44} color={AMB_T} anchor="end" /> : null}
			{void K11.always}{void K11.each}{void K11.formula}{void EL}{void VIO_SOFT}{void smooth}
		</SVG>
	);
};

// ---------- 12. the equation, counted in moles ----------
const K12 = cues(sc('equation-in-moles'), {this: 'This also', lab: 'in the lab', two: 'Two magnesium atoms', multiply: 'Multiply both', na: 'by N A', ratio: "ratio doesn't change", so: 'So two moles', molecules: 'oxygen molecules', coeff: 'The coefficients', later: 'A later video', work: 'work'});
const EQ_SIZE = 96;
const TERMS = ['2Mg(s)', ' + ', 'O_2(g)', ' → ', '2MgO(s)'];
const eqCentres = () => {
	const ws = TERMS.map(t => richW([{t}], EQ_SIZE));
	const total = ws.reduce((a, b) => a + b, 0);
	let x = 960 - total / 2;
	const out: number[] = [];
	ws.forEach((w, i) => { if (i % 2 === 0) out.push(x + w / 2); x += w; });
	return {cs: out, x0: 960 - total / 2};
};
export const EquationBoard: React.FC<{y?: number}> = ({y = 330}) => {
	const {x0} = eqCentres();
	return <Rich x={x0} y={y} segs={TERMS.map(t => ({t}))} size={EQ_SIZE} />;
};
export const SceneEquationMoles: React.FC = () => {
	const f = useCurrentFrame();
	const {cs, x0} = eqCentres();
	const swell = span(f, K12.so, K12.so + 30);
	const labels = ['2 atoms', '1 molecule', '2 units of MgO'];
	const mols = ['2 mol', '1 mol', '2 mol'];
	const PY = 600;
	const parts = (i: number) => {
		const c = cs[i];
		if (i === 0) return <><Ball el="Mg" x={c - 58} y={PY} r={50} /><Ball el="Mg" x={c + 58} y={PY} r={50} /></>;
		if (i === 1) return <Di el="O" x={c} y={PY} r={48} />;
		return <>{[-1, 1].map(k => <g key={k}><Ball el="Mg" x={c + k * 84 - 30} y={PY} r={38} /><Ball el="O" x={c + k * 84 + 26} y={PY} r={42} /></g>)}</>;
	};
	const tiles = [2, 1, 2];
	return (
		<SVG>
			<Heading text="The equation, counted in moles" at={4} />
			<SmallBridge />
			<EquationBoard />
			<Fade at={K12.lab - 6}>
				<BalRibbon x={96} y={720} h={190} />
				<Sx x={230} y={945} text="in the lab" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{labels.map((t, i) => <Sx key={i} x={cs[i]} y={440} text={t} size={44} color={INK} anchor="middle" weight={800} at={K12.two - 10 + i * 6} />)}
			{[0, 1, 2].map(i => <g key={i} opacity={1 - swell}>{parts(i)}</g>)}
			{[0, 1, 2].map(i => (
				<g key={i} opacity={swell}>
					{Array.from({length: tiles[i]}, (_, k) => <MoleTile key={k} x={cs[i] - (tiles[i] * 136 + (tiles[i] - 1) * 12) / 2 + k * 148} y={PY - 85} w={140} h={170} dot={i === 0 ? EL.Mg : i === 1 ? EL.O : '#8a8478'} seed={41 + i * 3 + k} />)}
				</g>
			))}
			{[0, 1, 2].map(i => <Sx key={i} x={cs[i]} y={750} text="× N_A" size={54} color={VIO_T} anchor="middle" weight={800} at={K12.multiply + 10 + i * 8} />)}
			<Write x={960} y={850} text="the ratio doesn't change" at={K12.ratio} out={K12.so - 14} size={50} color={VIO_T} anchor="middle" />
			{[0, 1, 2].map(i => <Sx key={i} x={cs[i]} y={845} text={mols[i]} size={64} color={AMB_T} anchor="middle" weight={800} at={K12.so + 6 + i * 10} />)}
			{[0, 1].map(i => <Sx key={i} x={(cs[i] + cs[i + 1]) / 2} y={845} text=":" size={64} color={AMB_T} anchor="middle" weight={800} at={K12.so + 12 + i * 10} />)}
			<Bracket a={[cs[0] - 180, 866]} b={[cs[2] + 200, 866]} at={K12.molecules} color={VIO_S} depth={14} />
			<Write x={960} y={942} text="same × N_A, same ratio" at={K12.molecules + 8} size={50} color={VIO_T} anchor="middle" />
			<PenRing cx={x0 + 30} cy={298} rx={42} ry={62} at={K12.coeff + 14} color={AMB_S} seed={3} />
			<PenRing cx={cs[2] - richW([{t: '2MgO(s)'}], EQ_SIZE) / 2 + 30} cy={298} rx={42} ry={62} at={K12.coeff + 20} color={AMB_S} seed={5} />
			<Chip x={1824} y={190} segs={[{t: 'mole ratios: a later video'}]} at={K12.later} size={38} color={INK} anchor="end" />
			{void K12.this}{void K12.lab}{void K12.na}{void K12.work}
		</SVG>
	);
};

// ---------- 13. one line to remember ----------
const K13 = cues(sc('memory-line'), {here: "Here's the line", a: 'A mole is a count', so: 'so always', what: 'what'});
type Case = {label: string; tiles: number; dot: string};
export const CASES: Case[] = [
	{label: `${D.we1.n} mol carbon atoms`, tiles: D.we1.n, dot: EL.C},
	{label: `${fix(R.we2, 2)} mol water molecules`, tiles: Math.round(R.we2), dot: EL.O},
	{label: `${fix(R.co2On, 1)} mol O atoms`, tiles: R.co2On, dot: EL.O},
	{label: `${2 * D.nacl.n} mol of ions`, tiles: 2 * D.nacl.n, dot: EL.Na},
];
export const CaseRow: React.FC<{y: number; at?: number}> = ({y, at = -1000}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{CASES.map((c, i) => {
				const x = 96 + i * 440;
				const whole = Math.floor(c.tiles), part = c.tiles - whole;
				const n = whole + (part > 0 ? 1 : 0);
				const tw = Math.min(150, (380 - (n - 1) * 8) / n);
				return (
					<g key={i} opacity={prog(f, at + i * 6, 12)}>
						<rect x={x} y={y} width={410} height={236} rx={16} fill={PAPER} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
						{Array.from({length: n}, (_, k) => <MoleTile key={k} x={x + 15 + k * (tw + 8)} y={y + 16} w={tw} h={140} frac={k === whole ? part : 1} dot={c.dot} seed={51 + i * 7 + k} size={26} />)}
						<Sx x={x + 205} y={y + 208} text={c.label} size={30} color={AMB_T} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
		</g>
	);
};
export const SceneMemoryLine: React.FC = () => (
	<SVG>
		<Heading text="One line to remember" at={0} />
		<CaseRow y={200} />
		<MemoryLine x={96} y={480} w={1728} h={430} size={80} atA={K13.here + 6} atB={K13.so} />
		{void K13.here}{void VIO_SOFT}
	</SVG>
);
void NA; void lerp; void smooth; void Ball; void DotField;
