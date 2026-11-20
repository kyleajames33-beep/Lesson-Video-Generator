// Y11 Chem M1 V07 scenes 1 to 5: V06's final frame (salt is a compound) parks the salt for later, why one formula is
// a fair sample (one molecule, a field of identical molecules, the painted carton of identical packs), relative atomic
// mass on an abstract beam balance, the count-bar prediction and carbon dioxide worked on the live mass bar.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {SALT_SEG, SAND_SEG} from '../chem-y11-m1-v06/s1';
import {SaltBoard} from '../chem-y11-m1-v06/parts';
import {BOTTLE, CARTON, F_CO2, FILT_E, SJAR, hold, sc} from './common';
import {
	AMB, AMB_INK, AccBar, Beam, Bracket, Chip, CountBar, DrawPath, EL, Fade, Framed, Glyph, Heading, INK, MassBar, PCell, PURE, PenArrow, PenRing, Plate, RED, RLab, Readout,
	Rich, SVG, Sx, TaskStrip, Write, plateMap, prog, richW, smooth, tileGeo,
} from './parts';

const GREEN_T = '#2f8a5b';
/** Atom sphere for the beam balance. */
const Ball: React.FC<{el: string; r: number}> = ({el, r}) => <circle cx={0} cy={-r + 6} r={r} fill={EL[el]} stroke="rgba(35,28,20,0.7)" strokeWidth={3} />;

// ---------- 1. hook: you can't filter a compound (opens on V06's final frame) ----------
const K1 = cues(sc('hook'), {last: 'Last time', one: 'one sodium for every', them: 'split them', dont: "you don't need", element: 'each element', build: "We'll build", yourself: 'salt yourself'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const pulse = 1 + 0.08 * Math.sin(Math.min(1, Math.max(0, (f - K1.them) / 24)) * Math.PI);
	const E = K1.element;
	const jm = plateMap(SJAR, 0, 0, 110);
	return (
		<SVG>
			<SaltBoard out={{bar: E, nacl: E, compound: E, lattice: E, filter: E, chip: E, jar: K1.yourself}} pulse={pulse} />
			<Write x={1020} y={640} text="1 Na : 1 Cl, always" at={K1.one} out={E} size={46} color={PURE} />
			{f >= K1.one + 10 && f < E + 12 ? <g opacity={1 - prog(f, E, 12)}><DrawPath d="M1020,656 L1390,656" at={K1.one + 10} dur={12} color={PURE} width={4} /></g> : null}
			<Write x={680} y={392} text="read it off the formula" at={K1.dont} out={E} size={46} color={AMB_INK} />
			<PenArrow a={[730, 400]} b={[720, 418]} at={K1.dont + 6} out={E} color={AMB_INK} bend={0} />
			{/* the formula splits into two (not yet meaningful) tiles */}
			<g opacity={prog(f, E, 12) * (1 - prog(f, K1.yourself, 14))}>
				<rect x={900} y={460} width={300} height={120} fill={EL.Na} stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
				<rect x={1200} y={460} width={300} height={120} fill={EL.Cl} stroke={INK} strokeWidth={4} strokeDasharray="12 8" />
				<Sx x={1050} y={538} text="Na" size={60} color="#fff" anchor="middle" weight={800} at={-1000} />
				<Sx x={1350} y={538} text="Cl" size={60} color="#fff" anchor="middle" weight={800} at={-1000} />
				<Sx x={1050} y={660} text="? %" size={56} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1350} y={660} text="? %" size={56} color={AMB_INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1200} y={760} text="read from the formula NaCl" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<Heading text="Percentage composition from a formula" at={30} />
			<Plate p={SJAR} x={1800 - jm.w} y={200} h={110} at={K1.yourself + 8} />
			<Sx x={1800} y={346} text="your turn later" size={30} color={INK} anchor="end" weight={700} at={K1.yourself + 14} />
			<Rich x={960} y={620} segs={[{t: 'CO_2'}]} size={120} anchor="middle" at={K1.yourself + 8} />
			{void K1.last}{void K1.build}
		</SVG>
	);
};

// ---------- 2. why the formula is enough ----------
const K2 = cues(sc('fixed-ratio'), {why: "Here's why", atoms: 'one carbon atom', two: 'two oxygen atoms', same: 'exactly the same', fair: 'One molecule is', carton: 'a carton of', pack: 'one pack', whole: 'whole carton'});
export const SceneFixedRatio: React.FC = () => {
	const f = useCurrentFrame();
	const fieldIn = (i: number, j: number) => prog(f, K2.same - 30 + (i + j) * 3, 10);
	const fieldO = 1 - prog(f, K2.carton - 6, 14);
	const bigO = 1 - prog(f, K2.same - 30, 14);
	const cm = plateMap(CARTON, 380, 300, 427);
	const bh = 420, bw = (bh / BOTTLE.box[3]) * BOTTLE.box[2];
	return (
		<SVG>
			<Heading text="Why the formula is enough" at={0} />
			<Rich x={110} y={300} segs={[{t: 'CO_2'}]} size={72} />
			<Plate p={BOTTLE} x={1600 - bw / 2} y={250} h={bh} />
			<Sx x={1600} y={720} text="the gas in a soft drink:" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={1600} y={758} text="carbon dioxide" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			{/* one molecule */}
			<g opacity={bigO}>
				<Glyph k="CO2" x={660} y={520} u={80} />
				<Write x={400} y={740} text="1 carbon atom + 2 oxygen atoms" at={K2.two} size={46} color={INK} />
				<Write x={560} y={380} text="1 C" at={K2.atoms} size={44} color={INK} />
				<PenArrow a={[620, 392]} b={[656, 470]} at={K2.atoms + 4} color={INK} bend={-0.1} />
				<Write x={880} y={410} text="2 O" at={K2.two} size={44} color={EL.O} />
				<PenArrow a={[890, 420]} b={[760, 480]} at={K2.two + 4} color={EL.O} bend={0.2} />
				<PenArrow a={[900, 424]} b={[560, 480]} at={K2.two + 10} color={EL.O} bend={0.3} />
			</g>
			{/* a field of identical molecules */}
			<g opacity={fieldO}>
				{Array.from({length: 5}, (_, j) => Array.from({length: 7}, (_, i) => {
					const o = fieldIn(i, j);
					return o > 0.01 ? <Glyph key={i + '-' + j} k="CO2" x={330 + i * 150 + (j % 2) * 40} y={330 + j * 105} u={20} rot={(i * 37 + j * 53) % 180} o={o} /> : null;
				}))}
				<PenRing cx={330 + 3 * 150 + 40} cy={330 + 105} rx={75} ry={46} at={K2.same + 10} color={AMB} seed={2} />
				<Write x={300} y={880} text="same in every molecule" at={K2.same + 14} size={42} color={AMB_INK} />
			</g>
			{/* the carton */}
			<Plate p={CARTON} x={380} y={300} h={427} at={K2.carton} />
			<PenRing cx={cm.X(747)} cy={cm.Y(670)} rx={80} ry={70} at={K2.pack} color={AMB} seed={5} />
			<Write x={380} y={800} text="one pack tells you the carton" at={K2.pack + 6} size={42} color={AMB_INK} />
			<Chip x={1100} y={830} segs={[{t: 'one formula = a fair sample'}]} at={K2.fair} size={44} color={PURE} />
			{void K2.why}{void K2.whole}
		</SVG>
	);
};

// ---------- 3. relative atomic mass, in one sentence ----------
const K3 = cues(sc('relative-atomic-mass'), {compare: 'compare them', ram: 'relative atomic mass', mass: 'mass.', twelve: 'twelve', oxygen: 'an oxygen atom', sixteen: 'sixteen', units: 'no units', periodic: 'periodic table', later: 'A later video', numbers: 'whole numbers'});
export const SceneRAM: React.FC = () => {
	const f = useCurrentFrame();
	const tilt = 7 * smooth(prog(f, K3.oxygen + 6, 24));
	const BX = 1080, BY = 470, L = 330;
	const a = (tilt * Math.PI) / 180;
	const lx = BX - L * Math.cos(a), rx = BX + L * Math.cos(a), ly = BY - L * Math.sin(a), ry = BY + L * Math.sin(a);
	return (
		<SVG>
			<Heading text="Relative atomic mass" at={0} />
			<Write x={96} y={232} text="relative atomic mass (Ar): atoms compared on one scale" at={K3.ram} size={40} color={PURE} />
			<Glyph k="CO2" x={330} y={420} u={70} />
			<Sx x={330} y={540} text="carbon dioxide" size={34} color={INK} anchor="middle" weight={700} at={-1000} />
			<Plate p={BOTTLE} x={330 - (340 / BOTTLE.box[3]) * BOTTLE.box[2] / 2} y={580} h={340} />
			<Write x={940} y={340} text="compared, not weighed" at={K3.compare} size={42} color={INK} />
			<Beam cx={BX} cy={BY} L={L} tilt={tilt}
				left={<g opacity={prog(f, K3.mass, 10)}><Ball el="C" r={54} /></g>}
				right={<g opacity={prog(f, K3.oxygen, 10)}><Ball el="O" r={60} /></g>} />
			<Readout x={lx - 120} y={BY + 210} w={240} text="C 12.0" size={52} color={INK} frame={INK} anchor="middle" at={K3.twelve} />
			<Readout x={rx - 120} y={BY + 210} w={240} text="O 16.0" size={52} color={EL.O} frame={EL.O} anchor="middle" at={K3.sixteen} />
			{f >= K3.units ? <><DrawPath d={`M${lx - 120},${BY + 300} L${lx + 120},${BY + 300}`} at={K3.units} dur={10} color={INK} width={4} /><DrawPath d={`M${rx - 120},${BY + 300} L${rx + 120},${BY + 300}`} at={K3.units + 6} dur={10} color={INK} width={4} /></> : null}
			<Write x={BX - 80} y={BY + 380} text="no units" at={K3.units + 6} size={42} color={INK} />
			<PCell x={1620} y={250} sym="C" ar="12.0" at={K3.periodic} />
			<Sx x={1705} y={474} text="periodic table" size={30} color={INK} anchor="middle" weight={700} at={K3.periodic} />
			<Chip x={1824} y={880} segs={[{t: 'why decimals? a later video'}]} at={K3.numbers} size={30} color={INK} anchor="end" />
			{void K3.later}
		</SVG>
	);
};

// ---------- 4. prediction ----------
const K4 = cues(sc('prediction'), {two: 'Two of the three', so: 'So is carbon', more: 'Or more', think: 'think.'});
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	const bh = 380, bw = (bh / BOTTLE.box[3]) * BOTTLE.box[2];
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<Plate p={BOTTLE} x={240 - bw / 2} y={300} h={bh} />
			<Glyph k="CO2" x={960} y={330} u={50} />
			<Sx x={560} y={505} text="atoms" size={34} color={INK} anchor="end" weight={800} at={-1000} />
			<CountBar els={['C', 'O', 'O']} x={640} y={450} w={640} h={90} />
			<Bracket a={[860, 556]} b={[1276, 556]} at={K4.two + 20} color={EL.O} depth={18} />
			<Sx x={1068} y={640} text="2 of 3 atoms = 66.7%" size={44} color={INK} anchor="middle" weight={800} at={K4.two + 26} />
			<Chip x={960} y={700} segs={[{t: 'oxygen by mass: 66.7%, more, or less?'}]} at={K4.so} size={44} color={INK} anchor="middle" />
			<Countdown start={h.startFrame} end={h.endFrame} x={1660} y={780} r={64} ringFrom={K4.think} />
			{void K4.more}
		</SVG>
	);
};

// ---------- 5. carbon dioxide, worked ----------
const K5 = cues(sc('carbon-dioxide'), {more: "It's more", why: "and here's why", add: 'Add up', c12: 'at twelve', o16: 'at sixteen', each: 'each.', mr: 'forty-four', share: "The oxygen's share", t32: 'thirty-two', so: 'So oxygen is', p72: 'seventy-two', more2: 'more than two', heavier: 'is heavier', counting: 'Counting atoms', them: 'weighing them'});
export const CO2_AT = [K5.why, K5.why + 12, K5.why + 24];
export const SceneCO2: React.FC = () => {
	const f = useCurrentFrame();
	const mrv = [12, 16, 16].reduce((a, v, i) => a + (f >= CO2_AT[i] + 6 ? v : 0), 0);
	const G = tileGeo(F_CO2, 300, 640);
	const r1 = [{t: 'Mr(CO_2) = '}, {t: '12.0 + 2 × 16.0', c: PURE}, {t: ' = 44.0'}];
	const r2 = [{t: 'oxygen share = '}, {t: '2 × 16.0', c: PURE}, {t: ' = 32.0'}];
	const r3 = [{t: '% O = '}, {t: '32.0 ÷ 44.0', c: PURE}, {t: ' × 100 = '}];
	const s1 = 52 - 12 * prog(f, K5.share, 12), s2 = 52 - 12 * prog(f, K5.so, 12);
	return (
		<SVG>
			<Heading text="Carbon dioxide, worked" at={0} />
			<TaskStrip text="find the percentage by mass of oxygen in CO_2" />
			<rect x={110} y={268} width={520} height={74} rx={14} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
			<Rich x={134} y={318} segs={[{t: 'givens:   C 12.0   |   O 16.0', c: PURE}]} size={38} weight={700} />
			<Framed x={700} y={322} segs={[{t: 'more', c: GREEN_T}]} at={K5.more} size={44} />
			<Sx x={110} y={436} text="atoms" size={34} color={INK} weight={800} at={-1000} />
			<CountBar els={['C', 'O', 'O']} x={300} y={390} w={640} h={66} />
			<Rich x={970} y={436} segs={[{t: '2 of 3 atoms = 66.7%'}]} size={40} />
			{f >= K5.counting ? <DrawPath d="M964,424 L1360,416" at={K5.counting} dur={10} color={RED} width={7} /> : null}
			<Write x={970} y={540} text="count ≠ mass" at={K5.counting + 8} size={42} color={RED} />
			<Sx x={110} y={556} text="mass" size={34} color={INK} weight={800} at={-1000} />
			<Fade at={CO2_AT[0] - 6}><MassBar F={F_CO2} x={300} y={500} at={CO2_AT} sel={{O: K5.share}} /></Fade>
			<Write x={300} y={650} text="heavier atom, bigger share" at={K5.heavier} size={42} color={AMB_INK} />
			<PenArrow a={[760, 616]} b={[(G[1].x + G[1].x + G[1].w) / 2, 590]} at={K5.heavier + 4} color={AMB_INK} bend={0.2} />
			{/* live readouts read the same tiles */}
			<Fade at={CO2_AT[0]}><RLab x={1440} y={280} t="Mr" /><Readout x={1440} y={290} w={300} text={mrv.toFixed(1)} size={52} color={PURE} frame={PURE} anchor="middle" /></Fade>
			<Fade at={K5.t32}><RLab x={1440} y={410} t="oxygen share" /><Readout x={1440} y={420} w={300} text="32.0" size={52} color={AMB_INK} frame={AMB} anchor="middle" /></Fade>
			<Fade at={K5.p72}><RLab x={1440} y={540} t="% oxygen" /><Readout x={1440} y={550} w={300} text="72.7%" size={52} color={AMB_INK} frame={AMB} anchor="middle" /></Fade>
			<Glyph k="CO2" x={620} y={560} u={74} o={1 - prog(f, CO2_AT[0] - 10, 12)} />
			<Chip x={1440} y={290} segs={[{t: '66.7%, more, or less?'}]} at={-1000} out={CO2_AT[0] - 10} size={40} color={INK} />
			<Write x={1440} y={440} text="now weigh the atoms" at={K5.more + 20} out={CO2_AT[0] - 10} size={44} color={INK} />
			<Sx x={620} y={700} text="one molecule: weigh its atoms" size={38} color={INK} anchor="middle" weight={800} at={-1000} out={CO2_AT[0] - 10} />
			<Chip x={1100} y={660} segs={[{t: 'carbon: 27.3% (check: adds to 100%)'}]} at={K5.p72 + 30} size={34} color={INK} />
			<Glyph k="CO2" x={1460} y={850} u={46} />
			{[['12.0', 0], ['16.0', -1], ['16.0', 1]].map(([t, d]) => <Sx key={String(d)} x={1460 + Number(d) * 90} y={935} text={String(t)} size={30} color={Number(d) ? EL.O : INK} anchor="middle" weight={800} at={-1000} />)}
			<Sx x={1460} y={772} text="relative atomic masses" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			<Rich x={110} y={740} segs={r1.map((s, i) => ({...s, at: [K5.add, K5.c12, K5.mr][i]}))} at={K5.add} size={s1} />
			<Rich x={110} y={820} segs={r2.map((s, i) => ({...s, at: [K5.share, K5.share + 20, K5.t32][i]}))} at={K5.share} size={s2} />
			<Rich x={110} y={910} segs={r3.map((s, i) => ({...s, at: [K5.so, K5.so + 30, K5.so + 100][i]}))} at={K5.so} size={52} />
			<Framed x={110 + richW(r3, 52)} y={910} segs={[{t: '72.7%', c: GREEN_T}]} at={K5.p72} size={52} />
			{void K5.each}{void K5.more2}{void K5.them}{void Fade}
		</SVG>
	);
};
