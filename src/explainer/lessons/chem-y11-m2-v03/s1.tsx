// Y11 Chem M2 V03 scenes 1 to 6: V02's final frame (the balance with the ribbon, "n(Mg) = ? mol") opening onto a heap
// standing for one mole of magnesium atoms ("? g", molar mass); one mole of atoms of an element on a beam (C and Mg
// heaps, data-sheet cells, a real mole of magnesium ticking up on the painted balance); why the numbers match (the
// atom-count sweep: both piles grow from one atom to N_A with live mass readouts while the ratio readout stays 2.02);
// molar mass defined (the teal card, the data-sheet cells, relative atomic mass against molar mass); compounds
// (three columns of atom tiles with the painted beaker, gas jar and watch glass) and from grams to moles (the lots bar
// with its live counter, the equation strip and the unit check).
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {SceneHandoff as V02Handoff, NA_CARD18, ASK18, NEXT18} from '../chem-y11-m2-v02/s3';
import {BAL1} from '../chem-y11-m2-v02/s1';
import {dur as v02dur} from '../chem-y11-m2-v02/common';
import {AR, BAL, BEAKER_W, D, GMOL, JAR2, MG_COIL, MM, NA, RES, RIBBON, WG_SALT, dur, fix, mm, ph, pw, sc, sci} from './common';
import {
	AMB_S, AMB_T, ATile, Balance, Beam, Cell, Chip, EL, Fade, Framed, GREEN_S, Heap, INK, LotsBar, NAVY_T, PAPER, PenArrow, PenRing, Plate, Readout, Reveal, Rich, RED_T,
	SVG, SmallBridge, StrikeLine, Sx, TEAL_S, TEAL_SOFT, TEAL_T, VIO_S, VIO_SOFT, VIO_T, Write, balGeo, beamEnds, clamp01, lerp, lotsDone, prog, richW, smooth, span,
} from './parts';
import type {Seg} from './parts';

export const HEADING = 'Molar mass: from grams to moles';
/** The balance with something on its pan: the ribbon tile (V02's size) or the coil of ribbon on a watch glass. */
export const BalWith: React.FC<{x: number; y: number; h: number; text: string; tile?: number; coil?: number}> = ({x, y, h, text, tile = 1, coil = 0}) => {
	const g = balGeo(x, y, h);
	const rw = 300 * (h / 440), rh = ph(RIBBON, rw);
	const cw = 420 * (h / 440), chh = ph(MG_COIL, cw);
	return (
		<g>
			<Balance g={g} text={text} />
			{tile > 0.005 ? <Plate p={RIBBON} x={g.pan[0] - rw / 2} y={g.pan[1] + 18 * (h / 440) - rh} h={rh} o={tile} /> : null}
			{coil > 0.005 ? <Plate p={MG_COIL} x={g.pan[0] - cw / 2} y={g.pan[1] + 40 * (h / 440) - chh} h={chh} o={coil} /> : null}
		</g>
	);
};
void BAL;

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {last: 'Last time', but: 'But in the lab', weigh: 'we weigh them', this: 'This ribbon', so: 'So how many', to: 'To answer it', atoms: 'magnesium atoms', called: "That's called", molar: 'molar mass'});
const HEAP1 = {cx: 1220, by: 905, w: 420, h: 150};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const heap = span(f, K1.to + 10, K1.atoms + 10);
	const chipO = 1 - prog(f, K1.this, 14);
	return (
		<SVG>
			{/* V02's final frame, redrawn */}
			<Write x={96} y={150} text="The mole: counting particles" at={-1000} out={K1.molar - 6} size={60} color={INK} />
			<Write x={96} y={150} text={HEADING} at={K1.molar} size={60} color={INK} />
			<SmallBridge />
			<rect x={NA_CARD18.x} y={NA_CARD18.y} width={NA_CARD18.w} height={NA_CARD18.h} rx={18} fill={VIO_SOFT} stroke={VIO_S} strokeWidth={5} />
			<Rich x={NA_CARD18.x + 30} y={NA_CARD18.y + 78} segs={[{t: `1 mol = ${sci(NA, 3)} particles `, c: VIO_T}, {t: '(N_A)', c: VIO_T}]} size={46} />
			<BalWith x={BAL1.x} y={BAL1.y} h={BAL1.h} text={`${fix(D.ribbon, 2)} g`} />
			<Write x={1000} y={440} text="in the lab: we don't count particles," at={-1000} size={48} color={INK} />
			<Write x={1000} y={510} text="we weigh them" at={-1000} size={48} color={INK} />
			<PenArrow a={[990, 500]} b={[600, 560]} at={-1000} color={INK} bend={0.2} />
			<Rich x={ASK18.x} y={ASK18.y} segs={[{t: 'n(Mg) = ', c: AMB_T}, {t: '? mol', c: AMB_T}]} size={72} />
			<PenRing cx={ASK18.x + richW([{t: 'n(Mg) = '}], 72) + richW([{t: '? mol'}], 72) / 2} cy={ASK18.y - 26} rx={richW([{t: '? mol'}], 72) / 2 + 14} ry={58} at={-1000} color={AMB_S} seed={4} />
			{chipO > 0.005 ? (
				<g opacity={chipO}>
					<rect x={96} y={790} width={1728} height={110} rx={24} fill={PAPER} stroke={NAVY_T} strokeWidth={5} />
					<Sx x={130} y={862} text={NEXT18} size={48} color={NAVY_T} weight={800} at={-1000} />
				</g>
			) : null}
			<PenRing cx={BAL1.x + 361} cy={BAL1.y + 248} rx={150} ry={62} at={K1.this + 10} out={K1.so} color={NAVY_T} seed={6} />
			{/* one mole of magnesium atoms: how many grams? */}
			<Heap cx={HEAP1.cx} by={HEAP1.by} w={HEAP1.w} h={HEAP1.h} color={EL.Mg} n={170} r={8} fill={heap} seed={4} />
			<Sx x={1470} y={830} text="1 mol of Mg atoms:" size={40} color={AMB_T} weight={800} at={K1.atoms - 6} />
			<Sx x={1470} y={896} text="? g" size={56} color={NAVY_T} weight={800} at={K1.atoms} />
			<Write x={1610} y={896} text="molar mass" at={K1.molar + 6} size={46} color={TEAL_T} />
			{/* V02's frame itself, frozen on top for the first frames */}
			{f < 34 ? <Fade at={-1000} out={4} d={26}><Freeze frame={v02dur('handoff') - 1}><V02Handoff /></Freeze></Fade> : null}
			{void K1.last}{void K1.but}{void K1.weigh}{void K1.so}{void K1.called}
		</SVG>
	);
};

// ---------- 2. one mole of atoms of an element ----------
const K2 = cues(sc('element-mole'), {one: 'One mole of atoms', atoms: 'of atoms', equal: 'equal to its', carbons: "Carbon's", c12: 'zero one grams', mgs: "Magnesium's", mg: 'three one grams', each: 'Each pile'});
const BM2 = {cx: 1330, cy: 600, L: 330};
const ruleSegs: Seg[] = [{t: '1 mol '}, {t: 'of atoms', c: TEAL_T}, {t: ' of an element = '}, {t: 'A_r', c: TEAL_T}, {t: ' in grams'}];
export const SceneElementMole: React.FC = () => {
	const f = useCurrentFrame();
	const tilt = 7 * span(f, K2.mg, K2.mg + 24);
	const [l, r] = beamEnds(BM2.cx, BM2.cy, BM2.L, tilt);
	const sw = span(f, K2.mg - 60, K2.mg - 44);
	const tick = clamp01((f - (K2.mg - 40)) / 46);
	const reading = f < K2.mg - 44 ? D.ribbon : lerp(0, AR.Mg, smooth(tick));
	const ofX = 130 + richW([{t: '1 mol '}], 46), ofW = richW([{t: 'of atoms'}], 46);
	return (
		<SVG>
			<Write x={96} y={150} text={HEADING} at={-1000} size={60} color={INK} />
			<SmallBridge />
			<Fade at={-1000}>
				<rect x={96} y={190} width={1300} height={96} rx={18} fill={TEAL_SOFT} stroke={TEAL_S} strokeWidth={4} />
			</Fade>
			<Reveal at={0} dur={30}><Rich x={130} y={254} segs={ruleSegs} size={46} /></Reveal>
			<PenRing cx={ofX + ofW / 2 + 30} cy={240} rx={ofW / 2 + 4} ry={36} at={K2.atoms + 6} color={TEAL_S} seed={3} />
			{/* the painted balance: the ribbon, then a real mole of magnesium */}
			<BalWith x={BAL1.x} y={BAL1.y} h={BAL1.h} text={`${fix(reading, 2)} g`} tile={1 - sw} coil={sw} />
			<Sx x={410} y={905} text="magnesium ribbon" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={K2.mg - 50} />
			<Write x={410} y={915} text="a real mole of Mg: 24.31 g" at={K2.mg + 10} size={48} color={NAVY_T} anchor="middle" />
			{/* the beam with a mole of each */}
			<Beam cx={BM2.cx} cy={BM2.cy} L={BM2.L} tilt={tilt} panW={300} />
			<Heap cx={l[0]} by={l[1] + 76} w={250} h={130} color={EL.C} n={150} r={7} seed={2} />
			<Heap cx={r[0]} by={r[1] + 76} w={250} h={130} color={EL.Mg} n={150} r={7} seed={5} />
			<Cell x={l[0] - 55} y={330} sym="C" val={fix(AR.C, 2)} />
			<Cell x={BM2.cx + BM2.L - 55} y={330} sym="Mg" val={fix(AR.Mg, 2)} />
			<Sx x={BM2.cx} y={400} text="HSC data sheet" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={BM2.cx - BM2.L} y={800} text="1 mol C atoms" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={BM2.cx + BM2.L} y={800} text="1 mol Mg atoms" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={BM2.cx - BM2.L} y={858} text={`${fix(AR.C, 2)} g`} size={52} color={NAVY_T} anchor="middle" weight={800} at={K2.c12} />
			<Sx x={BM2.cx + BM2.L} y={858} text={`${fix(AR.Mg, 2)} g`} size={52} color={NAVY_T} anchor="middle" weight={800} at={K2.mg} />
			<Sx x={BM2.cx - BM2.L} y={910} text={`${sci(NA, 3)} atoms`} size={34} color={VIO_T} anchor="middle" weight={800} at={K2.each + 20} />
			<Sx x={BM2.cx + BM2.L} y={910} text={`${sci(NA, 3)} atoms`} size={34} color={VIO_T} anchor="middle" weight={800} at={K2.each + 26} />
			<Write x={BM2.cx} y={480} text="same count" at={K2.each + 30} size={48} color={VIO_T} anchor="middle" />
			{void K2.equal}{void K2.carbons}
		</SVG>
	);
};

// ---------- 3. why the numbers match ----------
const K3 = cues(sc('why-it-matches'), {why: 'Why does', rel: 'Relative atomic masses', mg: 'A magnesium atom', atom: 'carbon atom', so: 'So if two piles', too: 'heavy too', mole: "The mole's number", carbon: 'carbon pile comes', every: 'every other element', scale: 'same scale'});
const BM3 = {cx: 960, cy: 420, L: 470};
const SW0 = K3.too, SW1 = K3.too + 90;
const countAt = (f: number) => (f < SW0 ? 1 : 10 ** (Math.log10(NA) * smooth(clamp01((f - SW0) / (SW1 - SW0)))));
export const SceneWhyMatches: React.FC = () => {
	const f = useCurrentFrame();
	const tilt = 6 * span(f, K3.atom, K3.atom + 20);
	const [l, r] = beamEnds(BM3.cx, BM3.cy, BM3.L, tilt);
	const n = countAt(f);
	const grow = clamp01(Math.log10(n) / Math.log10(NA));
	const cnt = n < 1000 ? `${Math.round(n)}` : sci(n, n >= NA * 0.999 ? 3 : 1);
	const mC = n * RES.cAtom, mMg = n * RES.mgAtom;
	const fmtM = (m: number) => (m >= 0.01 ? `${fix(m, 2)} g` : `${sci(m, 2)} g`);
	const single = 1 - clamp01(grow * 6);
	return (
		<SVG>
			<Write x={96} y={150} text="Why the grams match" at={4} size={60} color={INK} />
			<SmallBridge />
			<Readout x={560} y={196} w={800} text={`atoms in each pile: ${cnt}`} color={VIO_T} frame={VIO_S} size={48} fill={VIO_SOFT} />
			<Beam cx={BM3.cx} cy={BM3.cy} L={BM3.L} tilt={tilt} panW={340} />
			{single > 0.005 ? <circle cx={l[0]} cy={l[1] + 50} r={26} fill={EL.C} stroke="rgba(35,28,20,0.7)" strokeWidth={3} opacity={single} /> : null}
			{single > 0.005 ? <circle cx={r[0]} cy={r[1] + 44} r={34} fill={EL.Mg} stroke="rgba(35,28,20,0.7)" strokeWidth={3} opacity={single} /> : null}
			<Heap cx={l[0]} by={l[1] + 76} w={280} h={150} color={EL.C} n={160} r={7} fill={grow} seed={2} />
			<Heap cx={r[0]} by={r[1] + 76} w={280} h={150} color={EL.Mg} n={160} r={7} fill={grow} seed={5} />
			<Sx x={l[0]} y={l[1] - 120 + 40 * (1 - grow)} text="C" size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={r[0]} y={r[1] - 120 + 40 * (1 - grow)} text="Mg" size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			<Readout x={180} y={600} w={600} text={`C: ${fmtM(mC)}`} color={NAVY_T} size={52} />
			<Readout x={1140} y={600} w={600} text={`Mg: ${fmtM(mMg)}`} color={NAVY_T} size={52} />
			<Readout x={700} y={720} w={520} text={`Mg ÷ C = ${fix(RES.ratio, 2)}`} color={TEAL_T} frame={TEAL_S} size={52} fill={TEAL_SOFT} anchor="middle" />
			<Write x={960} y={340} text="about twice as heavy" at={K3.atom + 6} out={K3.too} size={46} color={TEAL_T} anchor="middle" />
			<Write x={960} y={340} text="same number in each pile" at={K3.too + 6} size={46} color={VIO_T} anchor="middle" />
			<PenRing cx={960} cy={758} rx={300} ry={62} at={SW0 + 40} color={TEAL_S} seed={5} />
			<Write x={1250} y={790} text="ratio never changes" at={SW0 + 46} size={46} color={TEAL_T} />
			{/* the carbon-12 link and the same scale */}
			<Fade at={K3.mole}>
				<rect x={96} y={830} width={620} height={84} rx={16} fill={PAPER} stroke={INK} strokeWidth={4} />
				<Rich x={120} y={886} segs={[{t: 'carbon-12: 12 g ≈ 1 mol of atoms'}]} size={36} />
				<path d="M400,830 L430,680" stroke={INK} strokeWidth={4} strokeDasharray="12 9" fill="none" />
			</Fade>
			<Fade at={K3.every}>
				<Sx x={1240} y={868} text="same scale:" size={34} color={TEAL_T} weight={800} at={-1000} />
				<Sx x={1240} y={906} text="grams per mole" size={34} color={TEAL_T} weight={800} at={-1000} />
				{([['H', AR.H, 3], ['O', AR.O, 2], ['Cu', AR.Cu, 2]] as [string, number, number][]).map(([s, v, dp], i) => <Cell key={s} x={1500 + i * 110} y={822} s={100} sym={s} val={fix(v, dp)} o={prog(f, K3.every + i * 5, 10)} />)}
			</Fade>
			{void K3.why}{void K3.rel}{void K3.mg}{void K3.so}{void K3.carbon}{void K3.scale}
		</SVG>
	);
};

// ---------- 4. molar mass, defined ----------
const K4 = cues(sc('molar-mass'), {so: 'So the molar', symbol: 'Its symbol', unit: 'its unit is grams', weighs: 'weighs', for: 'For the atoms', add: 'add grams per mole', course: 'In this course', hsc: 'HSC data sheet', hyd: 'hydrogen', oxy: 'oxygen', zero: 'sixteen point zero zero', notice: 'Notice the difference', norel: 'has no unit', does: 'does'});
export const SceneMolarMass: React.FC = () => {
	const defSegs: Seg[] = [{t: 'molar mass, MM', c: TEAL_T}, {t: ': the mass of one mole '}, {t: `(${GMOL})`, c: TEAL_T}];
	const uX = 130 + richW(defSegs.slice(0, 2), 50) + richW([{t: '('}], 50), uW = richW([{t: GMOL}], 50);
	const r1: Seg[] = [{t: 'MM(Mg) = '}, {t: mm(AR.Mg), c: TEAL_T}];
	const r2: Seg[] = [{t: 'MM(C) = '}, {t: mm(AR.C), c: TEAL_T}];
	const mrW = richW([{t: 'M_r(H_2O) = 18.0 '}], 44);
	const mmUnitX = 1380 + richW([{t: `MM(H_2O) = ${fix(MM.H2O, 2)} `}], 38), mmUnitW = richW([{t: GMOL}], 38);
	return (
		<SVG>
			<Write x={96} y={150} text="Molar mass, MM" at={4} size={60} color={INK} />
			<SmallBridge />
			<Fade at={-1000}>
				<rect x={96} y={190} width={1728} height={110} rx={18} fill={TEAL_SOFT} stroke={TEAL_S} strokeWidth={5} />
			</Fade>
			<Reveal at={0} dur={30}><Rich x={130} y={264} segs={defSegs} size={50} /></Reveal>
			<PenRing cx={uX + uW / 2 + 10} cy={248} rx={uW / 2 + 12} ry={42} at={K4.weighs} color={TEAL_S} seed={4} />
			<Write x={1440} y={360} text="grams per mole" at={K4.weighs + 6} size={46} color={TEAL_T} />
			{/* a real mole of magnesium on the balance */}
			<BalWith x={96} y={400} h={440} text={`${fix(AR.Mg, 2)} g`} tile={0} coil={1} />
			<Sx x={410} y={905} text="1 mol of Mg atoms" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Rich x={760} y={420} segs={[{t: '1 mol of Mg atoms: '}, {t: `${fix(AR.Mg, 2)} g`, c: NAVY_T}]} size={44} at={20} />
			<Cell x={760} y={470} s={120} sym="Mg" val={fix(AR.Mg, 2)} />
			<Cell x={910} y={470} s={120} sym="C" val={fix(AR.C, 2)} />
			<Rich x={760} y={700} segs={r1} size={48} at={K4.for} />
			<Rich x={760} y={790} segs={r2} size={48} at={K4.add} />
			{/* data-sheet values */}
			<Fade at={K4.hsc}>
				<Cell x={1380} y={400} s={120} sym="H" val={fix(AR.H, 3)} />
				<Cell x={1530} y={400} s={120} sym="O" val={fix(AR.O, 2)} />
				<Sx x={1380} y={570} text="HSC data sheet values" size={34} color={INK} weight={800} at={-1000} />
			</Fade>
			<Sx x={1380} y={612} text="an earlier video used 1.0 and 16.0" size={30} color={INK} weight={700} at={K4.zero} out={K4.notice} />
			{/* relative atomic mass against molar mass */}
			<Rich x={1380} y={690} segs={[{t: 'M_r(H_2O) = 18.0 '}, {t: '(no unit)', c: INK}]} size={38} at={K4.notice} />
			<Rich x={1380} y={780} segs={[{t: `MM(H_2O) = ${fix(MM.H2O, 2)} `}, {t: GMOL, c: TEAL_T}]} size={38} at={K4.norel + 20} />
			<PenRing cx={mmUnitX + mmUnitW / 2} cy={766} rx={mmUnitW / 2 + 16} ry={36} at={K4.does} color={TEAL_S} seed={6} />
			<Write x={1380} y={870} text="now it has a unit" at={K4.does + 6} size={48} color={TEAL_T} />
			{void mrW}{void K4.symbol}{void K4.unit}{void K4.course}{void K4.hyd}{void K4.oxy}
		</SVG>
	);
};

// ---------- 5. compounds: count every atom ----------
const K5 = cues(sc('compounds'), {for: 'For a compound', every: 'every atom', one: 'Module one', water: 'Water has', two: 'Two times', mole: 'eighteen point zero two', oxygen: 'Oxygen gas', thirty: 'thirty-two', sixteen: 'not sixteen', and: 'And in calcium', bracket: 'outside the bracket', doubles: 'doubles both', hyd: 'and the hydrogen'});
const COL = [96, 640, 1150];
const PIC_Y = 680, PIC_H = 260;
export const SceneCompounds: React.FC = () => {
	const f = useCurrentFrame();
	const tY = 360, T = 96;
	const waterTiles: [string, string][] = [['H', fix(AR.H, 3)], ['H', fix(AR.H, 3)], ['O', fix(AR.O, 2)]];
	const caTiles: [string, string][] = [['Ca', fix(AR.Ca, 2)], ['O', fix(AR.O, 2)], ['H', fix(AR.H, 3)], ['O', fix(AR.O, 2)], ['H', fix(AR.H, 3)]];
	const ohX = COL[2] + richW([{t: 'Ca('}], 64), ohW = richW([{t: 'OH'}], 64);
	const head = (x: number, fm: string, name: string) => (
		<g>
			<Rich x={x} y={310} segs={[{t: fm}]} size={64} />
			<Sx x={x + richW([{t: fm}], 64) + 18} y={310} text={name} size={34} color={INK} weight={800} at={-1000} />
		</g>
	);
	return (
		<SVG>
			<Write x={96} y={150} text="Compounds: count every atom" at={4} size={60} color={INK} />
			<SmallBridge />
			<Chip x={960} y={440} segs={[{t: 'last time: count every atom'}]} at={K5.for} out={K5.water - 4} size={48} color={INK} anchor="middle" />
			{/* water */}
			{head(COL[0], 'H_2O', 'water')}
			{waterTiles.map(([el, v], i) => <ATile key={i} x={COL[0] + i * (T + 10)} y={tY} el={el} s={T} val={v} o={prog(f, K5.water + i * 6, 10)} />)}
			<Rich x={COL[0]} y={530} segs={[{t: `2 × ${fix(AR.H, 3)} + ${fix(AR.O, 2)}`}]} size={44} at={K5.two} />
			<Framed x={COL[0]} y={620} segs={[{t: `= ${mm(MM.H2O)}`, c: TEAL_T}]} at={K5.mole} size={44} stroke={GREEN_S} tick={false} />
			<Write x={COL[0] + 250} y={700} text="count every atom" at={K5.mole + 10} size={44} color={TEAL_T} />
			<Plate p={BEAKER_W} x={COL[0]} y={PIC_Y} h={PIC_H} />
			{/* oxygen gas */}
			{head(COL[1], 'O_2', 'oxygen gas')}
			<Plate p={JAR2} x={COL[1]} y={PIC_Y - 20} h={PIC_H + 20} />
			{[0, 1].map(i => <ATile key={i} x={COL[1] + i * (T + 10)} y={tY} el="O" s={T} val={fix(AR.O, 2)} o={prog(f, K5.oxygen + 10 + i * 6, 10)} />)}
			<Rich x={COL[1]} y={530} segs={[{t: `2 × ${fix(AR.O, 2)}`}]} size={44} at={K5.thirty - 10} />
			<Framed x={COL[1]} y={620} segs={[{t: `= ${mm(MM.O2)}`, c: TEAL_T}]} at={K5.thirty} size={44} stroke={GREEN_S} tick={false} />
			<Chip x={COL[1] + 170} y={700} segs={[{t: fix(AR.O, 2)}]} at={K5.sixteen - 6} size={40} color={RED_T} strike={K5.sixteen + 6} />
			<Write x={COL[1] + 170} y={830} text="O_2 has" at={K5.sixteen + 12} size={46} color={RED_T} />
			<Write x={COL[1] + 170} y={884} text="two atoms" at={K5.sixteen + 16} size={46} color={RED_T} />
			{/* calcium hydroxide */}
			{head(COL[2], 'Ca(OH)_2', 'calcium hydroxide')}
			<PenArrow a={[ohX + ohW + 46, 316]} b={[ohX + 10, 252]} at={K5.bracket} color={AMB_S} bend={0.5} />
			<Write x={COL[2] + 400} y={226} text="× 2 for both" at={K5.doubles} size={44} color={AMB_T} />
			{caTiles.map(([el, v], i) => <ATile key={i} x={COL[2] + i * (T + 10)} y={tY} el={el} s={T} val={v} o={prog(f, (i === 0 ? K5.and : K5.doubles) + i * 5, 10)} />)}
			<Rich x={COL[2]} y={530} segs={[{t: `${fix(AR.Ca, 2)} + 2 × (${fix(AR.O, 2)} + ${fix(AR.H, 3)})`}]} size={44} at={K5.hyd - 10} />
			<Framed x={COL[2]} y={620} segs={[{t: `= ${mm(MM.CaOH2)}`, c: TEAL_T}]} at={K5.hyd} size={44} stroke={GREEN_S} tick={false} />
			<Plate p={WG_SALT} x={COL[2] + 100} y={PIC_Y + 40} h={ph(WG_SALT, 500)} />
			{void K5.for}{void K5.every}
		</SVG>
	);
};

// ---------- 6. from grams to moles ----------
const K6 = cues(sc('grams-to-moles'), {now: 'Now we can', if: 'If one mole', how: 'how many moles are', ask: 'Ask how many', division: 'division', chem: 'Chemical amount equals', mm: 'over M M', check: 'Check the units', moles: 'leaves moles', back: 'to go back', massEq: 'mass equals moles'});
export const BAR6 = {x: 140, y: 400, w: 1240, h: 96};
export const LOT_AT = (f0: number) => f0;
export const EqPanel: React.FC<{at?: number; glossAt?: number}> = ({at = -1000, glossAt = -1000}) => (
	<g>
		<Fade at={at}>
			<rect x={1420} y={190} width={404} height={300} rx={18} fill={PAPER} stroke={TEAL_S} strokeWidth={4} />
			<Rich x={1450} y={262} segs={[{t: 'n', c: AMB_T}, {t: ' = '}, {t: 'm', c: NAVY_T}, {t: ' ÷ '}, {t: 'MM', c: TEAL_T}]} size={56} />
		</Fade>
		<Fade at={glossAt}>
			<Rich x={1450} y={330} segs={[{t: 'n', c: AMB_T}, {t: ': chemical amount (mol)'}]} size={28} />
			<Rich x={1450} y={378} segs={[{t: 'm', c: NAVY_T}, {t: ': mass (g)'}]} size={28} />
			<Rich x={1450} y={426} segs={[{t: 'MM', c: TEAL_T}, {t: `: molar mass (${GMOL})`}]} size={28} />
		</Fade>
	</g>
);
export const SceneGramsToMoles: React.FC = () => {
	const f = useCurrentFrame();
	const LA = K6.division - 30;
	const lots = Math.round(RES.water);
	const done = lotsDone(f, LA, 22, lots);
	const uy = 760;
	const UX = 480;
	const gW = richW([{t: 'g'}], 52), divW = richW([{t: ' ÷ '}], 52);
	return (
		<SVG>
			<Write x={96} y={150} text="From grams to moles" at={4} size={60} color={INK} />
			<SmallBridge />
			<LotsBar x={BAR6.x} y={BAR6.y} w={BAR6.w} h={BAR6.h} whole={D.water} lot={MM.H2O} at={LA} max={lots} label={`${D.water} g of water`} lotLabel={`${fix(MM.H2O, 2)} g = 1 mol`} size={34} />
			<Plate p={BEAKER_W} x={110} y={640} h={280} />
			<Sx x={110 + pw(BEAKER_W, 280) / 2} y={950} text={`${D.water} g of water`} size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Write x={BAR6.x} y={300} text={`how many moles in ${D.water} g?`} at={K6.how} out={K6.ask - 6} size={46} color={INK} />
			<Write x={BAR6.x} y={300} text={`how many ${fix(MM.H2O, 2)} g lots fit?`} at={K6.ask} size={46} color={TEAL_T} />
			<Chip x={BAR6.x + 560} y={250} segs={[{t: `1 mol of water = ${fix(MM.H2O, 2)} g`, c: TEAL_T}]} at={K6.if} size={40} color={TEAL_S} />
			<Readout x={BAR6.x} y={530} w={480} text={`lots that fit: ${done}`} color={AMB_T} frame={AMB_S} size={52} />
			<Write x={BAR6.x + 540} y={600} text="that's a division" at={K6.division + 10} size={46} color={INK} />
			<EqPanel at={K6.chem} glossAt={K6.mm} />
			{/* the units check */}
			<Rich x={UX} y={uy} segs={[{t: 'g', c: NAVY_T}, {t: ' ÷ '}, {t: GMOL, c: TEAL_T}, {t: ' = '}, {t: 'mol', c: AMB_T}]} size={52} at={K6.check} />
			<StrikeLine x1={UX - 6} y1={uy - 8} x2={UX + gW + 6} y2={uy - 34} at={K6.moles - 10} />
			<StrikeLine x1={UX + gW + divW - 6} y1={uy - 8} x2={UX + gW + divW + gW + 6} y2={uy - 34} at={K6.moles - 4} />
			<Write x={UX + 560} y={uy} text="moles left" at={K6.moles} size={46} color={AMB_T} />
			<Rich x={UX} y={870} segs={[{t: 'm', c: NAVY_T}, {t: ' = '}, {t: 'n', c: AMB_T}, {t: ' × '}, {t: 'MM', c: TEAL_T}, {t: '        mol × g mol^{−1} = g'}]} size={48} at={K6.back} />
			{void K6.now}{void K6.if}{void K6.how}{void K6.massEq}{void sc}{void dur}
		</SVG>
	);
};
