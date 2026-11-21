// Y11 Chem M2 V03 scenes 7 to 12: the water worked example (the lots bar kept small, three mole tiles, the sense
// check and the side result with N_A), the prediction (10 g of magnesium against 10 g of copper, the painted samples,
// 3 s ring), same mass, different amounts (molar-mass segments drawn to scale against the 10 g bars, the two rows,
// atom dots denser in the magnesium bar, the crossed chip), sodium chloride (the painted halite with a formula unit
// in its lattice, the molar mass, m = n x MM, the framed 29 g and the crossed divide slip), the ribbon answered (the
// chain strip with moles in the middle) and the memory line (the units check in a framed card).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {AR, BEAKER_W, CU_WIRE, D, GMOL, HALITE, HALITE_FACE, MG_COIL, MM, NA, RES, dur, fix, hold, mm, ph, ptOn, pw, sc, sci} from './common';
import {
	AMB_S, AMB_T, Ball, Chain, ChainRing, Chip, Countdown, EL, Fade, Framed, GREEN_S, INK, LotsBar, MoleTile, NAVY_SOFT, NAVY_T, PAPER, PenArrow, PenRing, Plate, RED_T,
	Reveal, Rich, SVG, SmallBridge, StrikeLine, Sx, TEAL_S, TEAL_SOFT, TEAL_T, TaskStrip, TickMark, VIO_T, ViewFrame, Write, CU, lerp, prog, richW, span,
} from './parts';
import type {ChainG, Seg} from './parts';
import {BalWith} from './s1';

const GivensBox: React.FC<{lines: {segs: Seg[]; at: number}[]; x?: number; y?: number; w?: number}> = ({lines, x = 96, y = 380, w = 680}) => (
	<g>
		<rect x={x} y={y} width={w} height={60 + lines.length * 64} rx={16} fill="#eef2fa" stroke={NAVY_T} strokeWidth={3} />
		<Sx x={x + 24} y={y + 40} text="givens" size={30} color={NAVY_T} weight={800} at={-1000} />
		{lines.map((l, i) => <Rich key={i} x={x + 24} y={y + 100 + i * 64} segs={l.segs} size={40} at={l.at} />)}
	</g>
);
export const RuleBox: React.FC<{segs: Seg[]; at: number; x?: number; y?: number; w?: number}> = ({segs, at, x = 96, y = 580, w = 680}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={92} rx={16} fill={PAPER} stroke={INK} strokeWidth={3} />
		<rect x={x} y={y} width={12} height={92} rx={4} fill={TEAL_S} />
		<Sx x={x + 32} y={y + 58} text="RULE" size={28} color={INK} weight={800} at={-1000} />
		<Rich x={x + 134} y={y + 64} segs={segs} size={52} />
	</Fade>
);
const N_EQ: Seg[] = [{t: 'n', c: AMB_T}, {t: ' = '}, {t: 'm', c: NAVY_T}, {t: ' ÷ '}, {t: 'MM', c: TEAL_T}];
const M_EQ: Seg[] = [{t: 'm', c: NAVY_T}, {t: ' = '}, {t: 'n', c: AMB_T}, {t: ' × '}, {t: 'MM', c: TEAL_T}];

// ---------- 7. worked example: water ----------
const K7 = cues(sc('water'), {lets: "Let's finish", how: 'How many moles', mm: 'The molar mass', so: 'So n equals', three: 'three point zero', mol1: ['molecules', 1], sense: 'Sense check', lots: 'three lots', fits: 'fits', with: 'And with N A', mol2: ['molecules', 2]});
const WX = 840;
export const SceneWater: React.FC = () => {
	const f = useCurrentFrame();
	const lots = Math.round(RES.water);
	return (
		<SVG>
			<Write x={96} y={150} text="Worked example: water" at={4} size={60} color={INK} />
			<SmallBridge hiMul={K7.with + 10} />
			<TaskStrip text={`How many moles are in ${D.water} g of water?`} />
			<LotsBar x={96} y={290} w={1000} h={64} whole={D.water} lot={MM.H2O} at={-1000} max={lots} lotLabel={`${fix(MM.H2O, 2)} g`} size={30} />
			<Sx x={1120} y={334} text={`${D.water} g`} size={40} color={NAVY_T} weight={800} at={-1000} />
			<GivensBox lines={[{segs: [{t: `m = ${D.water} g`, c: NAVY_T}], at: -1000}, {segs: [{t: 'MM(H_2O) = ', c: TEAL_T}, {t: mm(MM.H2O), c: TEAL_T}], at: K7.mm}]} y={400} />
			<RuleBox segs={N_EQ} at={-1000} y={600} />
			<Plate p={BEAKER_W} x={96} y={690} h={250} />
			{Array.from({length: lots}, (_, i) => <MoleTile key={i} x={370 + i * 150} y={740} w={136} h={150} dot={EL.O} seed={61 + i} size={28} o={prog(f, K7.mol1 + i * 5, 10)} />)}
			<Rich x={WX} y={480} segs={[{t: 'n = '}, {t: `${D.water}`, c: NAVY_T}, {t: ' ÷ '}, {t: fix(MM.H2O, 2), c: TEAL_T}]} size={52} at={K7.so + 10} />
			<Framed x={WX} y={600} segs={[{t: `= ${fix(RES.water, 1)} mol`, c: AMB_T}, {t: ' of H_2O', c: INK}]} at={K7.mol1} size={56} stroke={GREEN_S} />
			<Write x={WX} y={700} text={`${lots} lots of about 18: it fits`} at={K7.lots} size={46} color={INK} />
			<PenRing cx={596} cy={322} rx={520} ry={50} at={K7.lots + 6} color={INK} seed={5} />
			<Rich x={WX} y={820} segs={[{t: 'N = '}, {t: fix(RES.water, 1), c: AMB_T}, {t: ' × '}, {t: sci(NA, 3), c: VIO_T}, {t: ` ≈ ${sci(RES.waterN, 1)} molecules`, c: NAVY_T}]} size={40} at={K7.with + 6} />
			<Sx x={WX} y={870} text="a side result" size={30} color={INK} weight={700} at={K7.with + 14} />
			{void K7.lets}{void K7.three}{void K7.sense}{void K7.fits}{void K7.mol2}
		</SVG>
	);
};

// ---------- 8. prediction ----------
const K8 = cues(sc('prediction'), {quick: 'Quick prediction', mg: 'grams of magnesium', cu: 'grams of copper', which: 'Which contains'});
const BAR = {x: 560, w: 440, h: 100, yMg: 330, yCu: 600};
const Samples: React.FC = () => (
	<g>
		<Plate p={MG_COIL} x={96} y={BAR.yMg - 60} h={ph(MG_COIL, 400)} />
		<Plate p={CU_WIRE} x={96} y={BAR.yCu} h={ph(CU_WIRE, 400)} />
	</g>
);
const Bars: React.FC<{labels?: boolean}> = () => (
	<g>
		<rect x={BAR.x} y={BAR.yMg} width={BAR.w} height={BAR.h} rx={10} fill="#e4f1df" stroke={NAVY_T} strokeWidth={5} />
		<rect x={BAR.x} y={BAR.yCu} width={BAR.w} height={BAR.h} rx={10} fill="#f3dfcf" stroke={NAVY_T} strokeWidth={5} />
		<Sx x={BAR.x} y={BAR.yMg - 18} text={`${D.pred} g Mg`} size={44} color={NAVY_T} weight={800} at={-1000} />
		<Sx x={BAR.x} y={BAR.yCu - 18} text={`${D.pred} g Cu`} size={44} color={NAVY_T} weight={800} at={-1000} />
	</g>
);
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Write x={96} y={150} text="Quick prediction" at={0} size={60} color={INK} />
			<SmallBridge />
			<Samples />
			<Bars />
			<Sx x={296} y={BAR.yMg + 210} text="magnesium" size={34} color={INK} anchor="middle" weight={800} at={K8.mg} />
			<Sx x={296} y={BAR.yCu + 160} text="copper" size={34} color={INK} anchor="middle" weight={800} at={K8.cu} />
			<Write x={1120} y={330} text="more atoms?" at={K8.which} size={48} color={INK} />
			<Chip x={1120} y={370} segs={[{t: 'Mg'}]} at={K8.which + 4} size={48} color={INK} />
			<Chip x={1120} y={480} segs={[{t: 'Cu'}]} at={K8.which + 8} size={48} color={INK} />
			<Chip x={1120} y={590} segs={[{t: 'the same'}]} at={K8.which + 12} size={48} color={INK} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={560} r={70} ringFrom={K8.which} />
			<Rich x={96} y={880} segs={[{t: `${D.pred} g of magnesium or ${D.pred} g of copper: which contains more atoms?`}]} size={46} at={K8.cu} />
			{void K8.quick}
		</SVG>
	);
};

// ---------- 9. same mass, different amounts ----------
const K9 = cues(sc('same-mass'), {mg: 'Magnesium', cuatom: 'A copper atom', molar: 'with a molar mass', fewer: 'fewer atoms', tenMg: 'zero point four one', tenCu: 'zero point one six', same: 'The same mass', amount: 'same amount', lighter: 'Lighter particles', gram: 'each gram'});
const rnd = (k: number, s: number) => { const v = Math.sin(k * 127.1 + s * 311.7) * 43758.5453; return v - Math.floor(v); };
const DotsIn: React.FC<{x: number; y: number; w: number; h: number; n: number; color: string; seed: number; o: number}> = ({x, y, w, h, n, color, seed, o}) => (o <= 0.005 ? null : (
	<g opacity={o}>{Array.from({length: n}, (_, i) => <circle key={i} cx={x + 14 + rnd(i, seed) * (w - 28)} cy={y + 14 + rnd(i, seed + 3) * (h - 28)} r={9} fill={color} stroke={INK} strokeWidth={2} />)}</g>
));
export const SceneSameMass: React.FC = () => {
	const f = useCurrentFrame();
	const segMg = (AR.Mg / D.pred) * BAR.w, segCu = (AR.Cu / D.pred) * BAR.w;
	const dots = prog(f, K9.lighter, 16);
	const rowMg: Seg[] = [{t: 'n(Mg) = '}, {t: `${D.pred}`, c: NAVY_T}, {t: ' ÷ '}, {t: fix(AR.Mg, 2), c: TEAL_T}, {t: ' = '}, {t: `${fix(RES.mgN, 2)} mol`, c: AMB_T}];
	const rowCu: Seg[] = [{t: 'n(Cu) = '}, {t: `${D.pred}`, c: NAVY_T}, {t: ' ÷ '}, {t: fix(AR.Cu, 2), c: TEAL_T}, {t: ' = '}, {t: `${fix(RES.cuN, 2)} mol`, c: AMB_T}];
	return (
		<SVG>
			<Write x={96} y={150} text="Same mass, different amounts" at={K9.cuatom} size={60} color={INK} />
			<Fade at={-1000} out={K9.cuatom - 8}><Sx x={96} y={150} text="Quick prediction" size={60} color={INK} hand weight={700} at={-1000} /></Fade>
			<SmallBridge />
			<Samples />
			<Sx x={296} y={BAR.yMg + 210} text="magnesium" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={296} y={BAR.yCu + 160} text="copper" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{/* molar-mass segments to scale, behind the bars */}
			<Fade at={K9.molar - 20}>
				<rect x={BAR.x} y={BAR.yMg - 6} width={segMg} height={BAR.h + 12} rx={12} fill={TEAL_SOFT} stroke={TEAL_S} strokeWidth={4} strokeDasharray="14 10" />
				<Sx x={BAR.x + segMg - 14} y={BAR.yMg - 18} text={`1 mol Mg = ${fix(AR.Mg, 2)} g`} size={34} color={TEAL_T} anchor="end" weight={800} at={-1000} />
				<rect x={BAR.x} y={BAR.yCu - 6} width={1830 - BAR.x} height={BAR.h + 12} rx={12} fill={TEAL_SOFT} stroke={TEAL_S} strokeWidth={4} strokeDasharray="14 10" />
				<path d={`M1830,${BAR.yCu - 6} l-14,${(BAR.h + 12) / 3} l14,${(BAR.h + 12) / 3} l-14,${(BAR.h + 12) / 3}`} fill="none" stroke={TEAL_S} strokeWidth={4} />
				<Sx x={1810} y={BAR.yCu - 18} text={`1 mol Cu = ${fix(AR.Cu, 2)} g (off the screen)`} size={34} color={TEAL_T} anchor="end" weight={800} at={-1000} />
			</Fade>
			<Bars />
			<DotsIn x={BAR.x} y={BAR.yMg} w={BAR.w} h={BAR.h} n={Math.round(RES.mgN * 100)} color={EL.Mg} seed={3} o={dots} />
			<DotsIn x={BAR.x} y={BAR.yCu} w={BAR.w} h={BAR.h} n={Math.round(RES.cuN * 100)} color={CU} seed={7} o={dots} />
			{/* the prediction chips: "Mg" ticks */}
			<Fade at={-1000} out={K9.cuatom - 4}>
				<Chip x={1120} y={370} segs={[{t: 'Mg', c: GREEN_S}]} at={-1000} size={48} color={GREEN_S} />
				<TickMark x={1250} y={406} at={K9.mg} s={1.5} />
				<Chip x={1120} y={480} segs={[{t: 'Cu'}]} at={-1000} size={48} color={INK} />
				<Chip x={1120} y={590} segs={[{t: 'the same'}]} at={-1000} size={48} color={INK} />
			</Fade>
			<Rich x={96} y={238} segs={[{t: '1 Cu atom ≈ '}, {t: fix(RES.cuOverMg, 1)}, {t: ' × the mass of 1 Mg atom'}]} size={40} at={K9.cuatom + 10} />
			<Reveal at={K9.tenMg - 10} dur={30}><Rich x={BAR.x} y={BAR.yMg + 170} segs={rowMg} size={48} /></Reveal>
			<Reveal at={K9.tenCu - 10} dur={30}><Rich x={BAR.x} y={BAR.yCu + 170} segs={rowCu} size={48} /></Reveal>
			<PenRing cx={BAR.x + BAR.w / 2} cy={BAR.yMg + BAR.h / 2} rx={BAR.w / 2 + 30} ry={62} at={K9.lighter + 16} color={AMB_S} seed={4} />
			<Write x={BAR.x + segMg + 24} y={BAR.yMg + 70} text="more atoms" at={K9.lighter + 20} size={46} color={AMB_T} />
			<Chip x={96} y={840} segs={[{t: 'same mass = same number of atoms'}]} at={K9.same} size={42} color={RED_T} strike={K9.amount} />
			<Write x={1000} y={885} text="mass is not amount" at={K9.amount + 6} size={48} color={RED_T} />
			{void K9.fewer}{void K9.gram}{void lerp}
		</SVG>
	);
};

// ---------- 10. worked example: sodium chloride ----------
const K10 = cues(sc('sodium-chloride'), {now: 'other way', what: 'What mass', sodium: 'Sodium chloride is', fu: 'formula units', ion: 'chloride ion', mm: 'The molar mass', mole: 'grams per mole', mass: 'Mass equals', zero: 'five zero times', grams: 'twenty-nine grams', thats: "That's three"});
const HAL10 = {x: 96, y: 330, h: 470};
const LENS10 = {cx: 680, cy: 560, r: 170};
const RX = 880;
export const SceneSodiumChloride: React.FC = () => {
	const f = useCurrentFrame();
	const face = ptOn(HALITE, HAL10.x, HAL10.y, HAL10.h, HALITE_FACE[0], HALITE_FACE[1]);
	const glow = prog(f, K10.mass, 10) * (1 - prog(f, K10.grams, 14));
	const r1: Seg[] = [{t: 'MM(NaCl) = '}, {t: fix(AR.Na, 2)}, {t: ' + '}, {t: fix(AR.Cl, 2)}, {t: ' = '}, {t: mm(MM.NaCl), c: TEAL_T}];
	const r2: Seg[] = [{t: 'm = '}, {t: fix(D.nacl, 2), c: AMB_T}, {t: ' × '}, {t: fix(MM.NaCl, 2), c: TEAL_T}, {t: ' = '}, {t: `${fix(RES.nacl, 2)} g`, c: NAVY_T}];
	return (
		<SVG>
			<Write x={96} y={150} text="Worked example: sodium chloride" at={4} size={60} color={INK} />
			<SmallBridge hiMul={K10.thats + 6} />
			<TaskStrip text={`What mass of NaCl contains ${fix(D.nacl, 2)} mol?`} />
			<Plate p={HALITE} x={HAL10.x} y={HAL10.y} h={HAL10.h} />
			<Sx x={HAL10.x + 10} y={HAL10.y - 14} text="sodium chloride (rock salt)" size={34} color={INK} weight={800} at={-1000} />
			<ViewFrame id="v03lens10" cx={LENS10.cx} cy={LENS10.cy} r={LENS10.r} at={K10.sodium} src={face}>
				{Array.from({length: 5}, (_, j) => Array.from({length: 5}, (_, i) => {
					const na = (i + j) % 2 === 0;
					return <Ball key={i + '-' + j} el={na ? 'Na' : 'Cl'} x={LENS10.cx + (i - 2) * 58} y={LENS10.cy + (j - 2) * 58} r={na ? 18 : 25} sign={na ? '+' : '−'} />;
				}))}
				{f >= K10.ion ? <rect x={LENS10.cx - 30} y={LENS10.cy - 32} width={118} height={64} rx={30} fill="none" stroke={INK} strokeWidth={6} opacity={prog(f, K10.ion, 10)} /> : null}
			</ViewFrame>
			<Write x={LENS10.cx} y={LENS10.cy + LENS10.r + 50} text="formula unit: 1 Na^{+} + 1 Cl^{−}" at={K10.ion + 6} size={40} color={INK} anchor="middle" />
			<Fade at={-1000}>
				<rect x={RX} y={280} width={944} height={70} rx={14} fill="#eef2fa" stroke={NAVY_T} strokeWidth={3} />
				<Rich x={RX + 24} y={328} segs={[{t: `n = ${fix(D.nacl, 2)} mol NaCl`, c: AMB_T}, {t: `     Na ${fix(AR.Na, 2)}     Cl ${fix(AR.Cl, 2)}`, c: NAVY_T}]} size={36} />
			</Fade>
			<g>
				{glow > 0.005 ? <rect x={RX - 10} y={410} width={520} height={84} rx={14} fill={TEAL_SOFT} opacity={glow} /> : null}
				<Rich x={RX} y={470} segs={[{t: 'RULE   ', c: INK}, ...M_EQ]} size={52} at={-1000} />
			</g>
			<Reveal at={K10.mm} dur={40}><Rich x={RX} y={600} segs={r1} size={46} /></Reveal>
			<Reveal at={K10.zero - 20} dur={36}><Rich x={RX} y={710} segs={r2} size={50} /></Reveal>
			<Framed x={RX} y={830} segs={[{t: `≈ ${Math.round(RES.nacl)} g`, c: NAVY_T}]} at={K10.grams} size={60} stroke={GREEN_S} />
			<Write x={RX + 300} y={830} text={`two sig figs, from ${fix(D.nacl, 2)}`} at={K10.grams + 12} size={42} color={INK} />
			<Rich x={RX} y={930} segs={[{t: 'N = '}, {t: fix(D.nacl, 2), c: AMB_T}, {t: ' × '}, {t: sci(NA, 3), c: VIO_T}, {t: ` = ${sci(RES.naclN, 1)} formula units`, c: NAVY_T}]} size={38} at={K10.thats} />
			<Chip x={96} y={830} segs={[{t: `${fix(D.nacl, 2)} ÷ ${fix(MM.NaCl, 2)} = ${fix(RES.naclSlip, 4)} g`}]} at={K10.grams + 20} size={40} color={RED_T} strike={K10.grams + 40} />
			<Write x={600} y={870} text="multiply" at={K10.grams + 46} size={44} color={RED_T} />
			{void K10.now}{void K10.what}{void K10.fu}{void K10.mole}
		</SVG>
	);
};

// ---------- 11. the ribbon: mass to moles to atoms ----------
const K11 = cues(sc('ribbon-chain'), {now: 'Now the ribbon', zero: 'Zero point two four', div: 'divided by', about: 'is about', atoms: 'magnesium atoms', times: 'Times N A', five: 'five point nine', m2m: 'Mass to moles', uses: 'uses molar mass', m2p: 'Moles to particles', na: 'uses N A', middle: 'middle'});
export const CHAIN11: ChainG = {x: 560, y: 830, h: 90, size: 38};
export const SceneRibbonChain: React.FC = () => {
	const f = useCurrentFrame();
	const r1: Seg[] = [{t: 'n(Mg) = '}, {t: fix(D.ribbon, 2), c: NAVY_T}, {t: ' ÷ '}, {t: fix(AR.Mg, 2), c: TEAL_T}, {t: ' = '}, {t: `${sci(RES.ribbon, 1)} mol`, c: AMB_T}];
	const r2: Seg[] = [{t: 'N = '}, {t: sci(RES.ribbon, 2), c: AMB_T}, {t: ' × '}, {t: sci(NA, 3), c: VIO_T}, {t: ' = '}, {t: `${sci(RES.ribbonN, 1)} atoms`, c: NAVY_T}];
	const grow = span(f, K11.middle - 6, K11.middle + 14);
	return (
		<SVG>
			<Write x={96} y={150} text="The ribbon: mass to moles to atoms" at={4} size={60} color={INK} />
			<SmallBridge hiMul={K11.times + 8} />
			<BalWith x={96} y={250} h={500} text={`${fix(D.ribbon, 2)} g`} />
			<Sx x={440} y={800} text="magnesium ribbon" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Reveal at={K11.zero} dur={60}><Rich x={850} y={300} segs={r1} size={48} /></Reveal>
			<Rich x={850} y={430} segs={[{t: 'n(Mg) = ', c: AMB_T}, {t: '? mol', c: AMB_T}]} size={52} at={-1000} out={K11.atoms} />
			<Framed x={850} y={440} segs={[{t: 'n(Mg) = ', c: AMB_T}, {t: `${sci(RES.ribbon, 1)} mol`, c: AMB_T}]} at={K11.atoms} size={56} stroke={GREEN_S} />
			<Write x={850} y={518} text="the answer to the opening" at={K11.atoms + 12} size={40} color={AMB_T} />
			<Reveal at={K11.times} dur={50}><Rich x={850} y={580} segs={r2} size={40} /></Reveal>
			<Sx x={850} y={636} text="keep the unrounded value until the end" size={30} color={INK} weight={700} at={K11.five + 10} />
			<Chain g={CHAIN11} at={[-1000, K11.uses, -1000, K11.na, -1000]} grow={grow} />
			<ChainRing g={CHAIN11} at={K11.middle + 4} />
			<Write x={1290} y={790} text="moles in the middle" at={K11.middle + 8} size={46} color={AMB_T} anchor="middle" />
			{void K11.now}{void K11.div}{void K11.about}
		</SVG>
	);
};

// ---------- 12. one line to remember ----------
const K12 = cues(sc('memory-line'), {here: "Here's a line", let: 'Let the units', grams: 'Grams divided', leaves: 'leaves moles', so: 'So if a mass', kg: 'kilograms'});
export const CHAIN12: ChainG = {x: 310, y: 190, h: 80, size: 34};
export const UnitsLine: React.FC<{x: number; y: number; size: number; strikeAt?: number}> = ({x, y, size, strikeAt}) => {
	const gW = richW([{t: 'g'}], size), divW = richW([{t: ' ÷ '}], size);
	return (
		<g>
			<Rich x={x} y={y} segs={[{t: 'g', c: NAVY_T}, {t: ' ÷ '}, {t: 'g', c: TEAL_T}, {t: ' mol^{−1}', c: TEAL_T}, {t: '  =  '}, {t: 'mol', c: AMB_T}]} size={size} />
			{strikeAt !== undefined ? <>
				<StrikeLine x1={x - 6} y1={y - size * 0.15} x2={x + gW + 6} y2={y - size * 0.6} at={strikeAt} width={8} />
				<StrikeLine x1={x + gW + divW - 6} y1={y - size * 0.15} x2={x + gW + divW + gW + 6} y2={y - size * 0.6} at={strikeAt + 6} width={8} />
			</> : null}
		</g>
	);
};
export const SceneMemoryLine: React.FC = () => (
	<SVG>
		<Write x={96} y={150} text="One line to remember" at={0} size={60} color={INK} />
		<Chain g={CHAIN12} />
		<rect x={96} y={320} width={1728} height={560} rx={24} fill={PAPER} stroke={INK} strokeWidth={4} />
		<rect x={106} y={330} width={1708} height={540} rx={18} fill="none" stroke={INK} strokeWidth={2} />
		<Sx x={140} y={390} text="memory aid" size={34} color={INK} hand weight={700} at={-1000} />
		<Write x={160} y={500} text="Let the units decide:" at={6} size={80} color={INK} />
		<Reveal at={K12.grams} dur={40}><UnitsLine x={160} y={680} size={96} strikeAt={K12.leaves} /></Reveal>
		<Write x={1000} y={680} text="moles left" at={K12.leaves + 14} size={56} color={AMB_T} />
		<Rich x={160} y={820} segs={[{t: 'kg → × 1000 → g first', c: INK}]} size={40} at={K12.kg} />
		{void K12.here}{void K12.so}{void GMOL}{void NAVY_SOFT}{void dur}{void VIO_T}
	</SVG>
);
