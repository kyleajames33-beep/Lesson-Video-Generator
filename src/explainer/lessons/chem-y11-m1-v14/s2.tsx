// Y11 Chem M1 V14 scenes 6 to 10: down group 1 (lithium framed, Li, Na and K drawn to scale with the stepper's
// readouts holding core charge at +1 while the ionisation energy falls, the bars growing to Cs), the tug of war (the
// shared pair placed by the two Pauling values, the Pauling scale), the same trends for electronegativity (the
// stepper slides the pair across period 3 and down group 17 beside the violet bars and the sample row), the two
// quantities side by side over their own charts, and the memory line on the shaded table.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DATA, G1, G17, P3, P3EN, ROW, SRC_EN, SRC_IE, core, en, enS, fitH, ie, pairFrac, sc, stepAt} from './common';
import {
	AMB_S, AMB_T, BLUE_T, Chip, Fade, Framed, GREEN_T, HBarV, Hatch, Heading, INK, OR_F, OR_S, OR_T, PaulingBar, PenArrow, PenRing, PlateB, Pull, RAtom, RED_T,
	Readouts, Rich, Ruler, SVG, ScaleMark, ShadeTable, Sx, TEAL_T, Tug, VBarV, VI_F, VI_S, VI_T, Write, lerp, prog, richW, ringsOf, scaleX, sgCell, smooth, toward,
} from './parts';
import type {SG} from './parts';

// ---------- 6. down a group ----------
const K6 = cues(sc('down-group'), {lithium: 'Lithium', extra: 'extra occupied', so: 'so the outer', further: 'further from', core: 'core charge stays', protons: 'the extra protons', less: 'less energy', from: 'from five', twenty: 'twenty for', three: 'to three', seventy: 'seventy-six'});
const S6 = 0.9;
const X6 = [190, 520, 900];
const Y6 = 540;
export const SceneDown: React.FC = () => {
	const f = useCurrentFrame();
	const steps: [number, number][] = [[0, 0], [K6.extra, 1], [K6.so, 2], [K6.from, 0], [K6.twenty + 12, 1], [K6.three - 10, 2], [K6.three + 6, 3], [K6.seventy, 4]];
	const cur = stepAt(f, steps);
	const e = G1[cur];
	const barAt = [K6.lithium, K6.extra, K6.so, K6.three + 6, K6.seventy];
	const atomHi = (i: number) => (cur === i && f < K6.from ? 1 : 0);
	return (
		<SVG>
			<Heading text="Down group 1" at={0} />
			<Framed x={500} y={150} segs={[{t: 'lithium', c: GREEN_T}]} at={K6.lithium} size={52} stroke={GREEN_T} />
			<Readouts x={1180} y={232} w={200} items={[{label: 'core charge', text: `+${core(e)}`, color: AMB_T}]} />
			<Readouts x={1410} y={232} w={400} items={[{label: `first ionisation energy: ${e.sym}`, text: `${ie(e)} kJ/mol`, color: OR_T}]} />
			{G1.slice(0, 3).map((g, i) => {
				const R = S6 * g.r, c: [number, number] = [X6[i], Y6];
				const oe: [number, number] = [c[0] + R, c[1]];
				return (
					<g key={g.sym}>
						{atomHi(i) ? <circle cx={c[0]} cy={c[1]} r={R + 18} fill="none" stroke={OR_S} strokeWidth={5} opacity={0.8} /> : null}
						<RAtom cx={c[0]} cy={c[1]} rings={ringsOf(g.shells.length, R)} counts={g.shells} label={`${g.z}+`} nr={i === 0 ? 20 : 24} dot={7.5} labelSize={i === 0 ? 24 : 26} outerRot={0} />
						<Pull a={toward(c, oe, R - 9)} b={toward(c, oe, 30)} w={5} p={prog(f, K6.core, 14)} />
						<Ruler c={c} R={R} ang={-Math.PI / 2} at={K6.further + i * 6} />
						<Sx x={c[0]} y={Y6 + 236} text={`${g.sym}  ${g.shells.join(',')}`} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
						<Chip x={c[0]} y={Y6 + 262} segs={[{t: `+${core(g)}`, c: AMB_T}]} at={K6.core + i * 6} size={38} color={AMB_S} anchor="middle" />
						<PenRing cx={c[0]} cy={Y6 + 292} rx={56} ry={40} at={K6.protons + i * 6} color={AMB_S} seed={i + 3} />
					</g>
				);
			})}
			<Write x={X6[2] + 70} y={Y6 - S6 * G1[2].r - 40} text="further out" at={K6.further + 14} size={42} color={TEAL_T} />
			<Write x={1010} y={Y6 + 316} text="still +1" at={K6.protons + 10} size={42} color={AMB_T} />
			{/* bars */}
			<Sx x={1180} y={398} text="first ionisation energy (kJ/mol)" size={30} color={OR_T} weight={800} at={-1000} />
			{G1.map((g, i) => <HBarV key={g.sym} x={1180} y={420 + i * 76} lw={84} label={g.sym} v={ie(g)} k={0.72} p={prog(f, barAt[i], 18)} text={`${ie(g)}`} color={OR_S} fill={OR_F} tColor={OR_T} size={38} outline={false} />)}
			<PenArrow a={[1150, 430]} b={[1150, 790]} at={K6.less} color={OR_S} bend={0} width={6} head={20} />
			<Write x={1180} y={862} text="easier to remove" at={K6.less + 8} size={42} color={OR_T} />
			<Sx x={1180} y={930} text={`Source: ${SRC_IE}`} size={26} color={INK} weight={700} at={-1000} />
		</SVG>
	);
};

// ---------- 7. electronegativity: a tug of war ----------
const K7 = cues(sc('electronegativity'), {covalent: 'covalent bond', elec: ['Electronegativity is', 1], tug: 'tug of war', rope: 'rope', atom: 'The atom with', draws: 'draws the pair', has: 'Electronegativity has', units: 'no units', fluorine: 'fluorine is', four: 'four point'});
const A7: [number, number] = [510, 500], B7: [number, number] = [1410, 500];
const SX0 = 300, SX1 = 1620, SY = 830;
export const SceneEN: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K7.atom, 24));
	const h = DATA.H, cl = DATA.Cl, fl = DATA.F;
	const frac = lerp(0.5, pairFrac(en(h), en(cl)), smooth(prog(f, K7.draws - 10, 30)));
	const rL = lerp(150, 40 + 1.2 * h.r, m), rR = lerp(150, 40 + 1.2 * cl.r, m);
	const px = lerp(A7[0], B7[0], frac);
	return (
		<SVG>
			<Heading text="Electronegativity: a tug of war" at={0} />
			<Rich x={96} y={238} segs={[{t: 'Electronegativity', c: VI_T}, {t: ': how strongly an atom in a bond attracts the '}, {t: 'shared pair', c: VI_T}]} size={38} at={K7.elec} />
			<Tug a={A7} b={B7} enL={en(h)} enR={en(cl)} labelL={m > 0.5 ? h.sym : ''} labelR={m > 0.5 ? cl.sym : ''} rL={rL} rR={rR} nr={34} pulls={prog(f, K7.atom + 10, 14)} frac={frac} pulse={prog(f, K7.covalent, 10) * (1 - prog(f, K7.elec, 20))} />
			<Rich x={960} y={720} segs={[{t: 'covalent bond', c: INK}, {t: ': a shared pair of electrons'}]} size={38} anchor="middle" at={K7.covalent} />
			<Write x={960} y={404} text="tug of war" at={K7.tug} size={42} color={VI_T} anchor="middle" />
			<Write x={px - 30} y={612} text="towards chlorine" at={K7.draws + 14} size={42} color={VI_T} anchor="end" />
			<PenArrow a={[960, 560]} b={[px + 24, 560]} at={K7.draws + 20} color={VI_S} bend={0} width={6} head={16} />
			{/* the Pauling scale */}
			<PaulingBar x0={SX0} x1={SX1} y={SY} p={prog(f, K7.elec, 24)} />
			<ScaleMark x0={SX0} x1={SX1} y={SY} v={en(h)} label={`H ${enS(h)}`} at={K7.has + 20} />
			<ScaleMark x0={SX0} x1={SX1} y={SY} v={en(cl)} label={`Cl ${enS(cl)}`} at={K7.has + 26} />
			<ScaleMark x0={SX0} x1={SX1} y={SY} v={en(fl)} label="F" at={K7.fluorine} />
			<Framed x={scaleX(SX0, SX1, en(fl)) + 40} y={SY - 40} segs={[{t: enS(fl), c: VI_T}]} at={K7.four} size={52} stroke={VI_S} tick={false} />
			<Write x={SX0 - 200} y={SY - 44} text="a scale, no units" at={K7.units} size={42} color={INK} />
			<Sx x={960} y={942} text="not the same as electron affinity (the energy change when an isolated atom gains an electron)" size={30} color={INK} anchor="middle" weight={700} at={K7.units + 30} />
			{void K7.rope}
		</SVG>
	);
};

// ---------- 8. same grip, same trends ----------
const K8 = cues(sc('en-trends'), {across: 'Across Period', stronger: 'gets stronger', sodium: 'for sodium', three: 'three point two', chlorine: 'for chlorine', down: 'Down Group', shell: 'extra shell', further: 'further from', weakens: 'pull weakens', seven: 'two point seven', top: 'top right', bottom: 'bottom left'});
const H8: [number, number] = [260, 420];
const XB8 = (i: number) => 1000 + i * 130;
const BASE8 = 730, KEN = 110;
const G8: SG = {x: 1380, y: 175, cw: 24, ch: 21};
export const SceneENTrends: React.FC = () => {
	const f = useCurrentFrame();
	const pSteps: [number, number][] = P3EN.map((_, i) => [i === 6 ? K8.three : K8.across + Math.round(((K8.three - 40 - K8.across) * i) / 5), i]);
	const gSteps: [number, number][] = [[K8.down, 0], [K8.shell, 1], [K8.further, 2], [K8.seven, 3]];
	const all: [number, El8][] = [[0, P3EN[0]], ...pSteps.map(([t, i]) => [t, P3EN[i]] as [number, El8]), ...gSteps.map(([t, i]) => [t, G17[i]] as [number, El8])];
	let k = 0;
	for (let j = 0; j < all.length; j++) if (f >= all[j][0]) k = j;
	const e = all[k][1], prev = all[Math.max(0, k - 1)][1];
	const sP = k === 0 ? 1 : smooth(prog(f, all[k][0], 18));
	const ring = (x: El8) => 40 + 0.55 * x.r;
	const len = (x: El8) => 260 + 1.6 * x.r;
	const L = lerp(len(prev), len(e), sP);
	const enR = lerp(en(prev), en(e), sP);
	const B: [number, number] = [H8[0] + L, H8[1]];
	const h = DATA.H;
	return (
		<SVG>
			<Heading text="Same grip, same trends" at={0} />
			<Readouts x={96} y={232} w={150} items={[{label: 'H', text: enS(h), color: VI_T}]} />
			<Readouts x={290} y={232} w={250} items={[{label: 'electronegativity', text: `${e.sym} ${enS(e)}`, color: VI_T}]} />
			<Tug a={H8} b={B} enL={en(h)} enR={enR} labelL={h.sym} labelR={e.sym} rL={ring(h)} rR={lerp(ring(prev), ring(e), sP)} nr={26} pulls={1} symSize={26} />
			{/* period 3 bars with the sample row */}
			<line x1={940} y1={BASE8} x2={1840} y2={BASE8} stroke={INK} strokeWidth={3} />
			{P3EN.map((x, i) => (
				<g key={x.sym}>
					<VBarV x={XB8(i)} y0={BASE8} w={84} v={en(x)} k={KEN} p={prog(f, pSteps[i][0], 18)} text={enS(x)} color={VI_S} fill={VI_F} tColor={VI_T} />
					<Sx x={XB8(i)} y={BASE8 + 40} text={x.sym} size={34} color={INK} anchor="middle" weight={800} at={-1000} />
					<PlateB p={ROW[i]} cx={XB8(i)} bottom={942} h={fitH(ROW[i], 110, 132)} />
				</g>
			))}
			<PenRing cx={XB8(0)} cy={BASE8 - en(DATA.Na) * KEN - 24} rx={50} ry={32} at={K8.sodium} color={VI_S} seed={3} />
			<PenRing cx={XB8(6)} cy={BASE8 - en(DATA.Cl) * KEN - 24} rx={50} ry={32} at={K8.chlorine} color={VI_S} seed={5} />
			<Write x={980} y={330} text="stronger pull →" at={K8.stronger} size={42} color={VI_T} />
			<PenArrow a={[990, 560]} b={[1630, 350]} at={K8.stronger + 10} color={VI_S} bend={0} width={6} head={20} />
			{/* group 17 bars */}
			<Sx x={96} y={556} text="group 17" size={30} color={INK} weight={800} at={-1000} />
			{G17.map((x, i) => {
				const at = gSteps[i][0];
				return <HBarV key={x.sym} x={96} y={572 + i * 72} lw={70} label={x.sym} v={en(x)} k={110} p={prog(f, at, 18)} text={enS(x)} color={VI_S} fill={VI_F} tColor={VI_T} size={38} h={44} />;
			})}
			<PenArrow a={[760, 580]} b={[760, 850]} at={K8.weakens} color={VI_S} bend={0} width={6} head={20} />
			<Write x={96} y={892} text="further out: weaker" at={K8.weakens + 6} size={42} color={VI_T} />
			<Sx x={96} y={942} text={`Source: ${SRC_EN}`} size={26} color={INK} weight={700} at={-1000} />
			{/* the locator: top right and bottom left */}
			<ShadeTable g={G8} id="v14g8" corners={0} />
			<PenRing cx={sgCell(G8, 9)[0] + 12} cy={sgCell(G8, 9)[1] + 22} rx={64} ry={44} at={K8.top} color={VI_S} seed={2} />
			<PenRing cx={sgCell(G8, 55)[0] + 20} cy={sgCell(G8, 55)[1] + 18} rx={44} ry={40} at={K8.bottom} color={OR_S} seed={7} />
		</SVG>
	);
};
type El8 = (typeof P3)[number];

// ---------- 9. two different quantities ----------
const K9 = cues(sc('two-quantities'), {not: 'not the same', ionisation: 'Ionisation energy is', separate: 'one separate', losing: 'losing an', elec: ['Electronegativity is', 1], scale: 'on a scale', bond: 'in a bond', pulling: 'pulling on', argon: 'Argon has', value: 'electronegativity value', all: 'at all', doesnt: "That doesn't", zero: 'zero', means: 'It means'});
const XL = (i: number) => 140 + i * 104, XR = (i: number) => 1050 + i * 104;
const BASE9 = 830, K9IE = 230 / 1521, K9EN = 230 / 3.2;
export const SceneTwo: React.FC = () => {
	const f = useCurrentFrame();
	const ar = DATA.Ar;
	const arTop = BASE9 - ie(ar) * K9IE;
	return (
		<SVG>
			<Heading text="Two different quantities" at={0} />
			<Chip x={1824} y={96} segs={[{t: 'electronegativity differences and bond types: a later video'}]} at={-1000} size={30} color={INK} anchor="end" />
			<Write x={960} y={234} text="same trends, different things" at={K9.not} size={42} color={INK} anchor="middle" />
			{/* left: first ionisation energy */}
			<Sx x={96} y={312} text="first ionisation energy" size={44} color={OR_T} weight={800} at={-1000} />
			<Rich x={96} y={370} segs={[{t: 'an energy (kJ/mol)'}]} size={34} at={K9.ionisation + 20} />
			<Rich x={96} y={418} segs={[{t: 'one separate atom'}]} size={34} at={K9.separate} />
			<Rich x={96} y={466} segs={[{t: 'losing an electron'}]} size={34} at={K9.losing} />
			<line x1={96} y1={BASE9} x2={900} y2={BASE9} stroke={INK} strokeWidth={3} />
			{P3.map((x, i) => (
				<g key={x.sym}>
					<VBarV x={XL(i)} y0={BASE9} w={68} v={ie(x)} k={K9IE} p={1} text={`${ie(x)}`} color={OR_S} fill={OR_F} tColor={OR_T} vSize={34} />
					<Sx x={XL(i)} y={BASE9 + 38} text={x.sym} size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			<PenRing cx={XL(7)} cy={arTop - 10} rx={56} ry={44} at={K9.argon} color={OR_S} seed={4} />
			{/* right: electronegativity */}
			<Sx x={1000} y={312} text="electronegativity" size={44} color={VI_T} weight={800} at={-1000} />
			<Rich x={1000} y={370} segs={[{t: 'a number on a scale (no units)'}]} size={34} at={K9.scale} />
			<Rich x={1000} y={418} segs={[{t: 'an atom in a bond'}]} size={34} at={K9.bond} />
			<Rich x={1000} y={466} segs={[{t: 'pulling on a shared pair'}]} size={34} at={K9.pulling} />
			<line x1={1000} y1={BASE9} x2={1824} y2={BASE9} stroke={INK} strokeWidth={3} />
			{P3.map((x, i) => (
				<g key={x.sym}>
					{x.en !== undefined ? <VBarV x={XR(i)} y0={BASE9} w={68} v={en(x)} k={K9EN} p={1} text={enS(x)} color={VI_S} fill={VI_F} tColor={VI_T} vSize={34} /> : null}
					<Sx x={XR(i)} y={BASE9 + 38} text={x.sym} size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				</g>
			))}
			<Fade at={K9.value}><Hatch x={XR(7) - 34} y={BASE9 - 150} w={68} h={150} id="v14h9" /></Fade>
			<Write x={1824} y={912} text="no value" at={K9.all} size={42} color={VI_T} anchor="end" />
			<Chip x={1000} y={488} segs={[{t: 'noble gases: electronegativity = 0'}]} at={K9.doesnt} size={38} color={INK} strike={K9.zero} />
			<Write x={1000} y={936} text="no value, not zero" at={K9.means} size={42} color={RED_T} />
			<Sx x={96} y={936} text="Sources: NIST data via PubChem; Pauling values, PubChem" size={26} color={INK} weight={700} at={-1000} />
			{void SRC_IE}
		</SVG>
	);
};

// ---------- 10. one line to remember ----------
const K10 = cues(sc('memory-line'), {top: 'Top right', bottom: 'bottom left', go: 'go'});
const G10: SG = {x: 300, y: 190, cw: 64, ch: 52};
export const SceneMemoryLine: React.FC = () => {
	const f = useCurrentFrame();
	const c = prog(f, K10.go, 12);
	const [fx, fy] = sgCell(G10, 9), [cx, cy] = sgCell(G10, 55);
	const pulse = 0.5 + 0.5 * Math.abs(Math.sin(f * 0.14));
	const w1 = richW([{t: 'Top right holds tight; '}], 64, true, 700);
	return (
		<SVG>
			<Heading text="One line to remember" at={0} />
			<ShadeTable g={G10} id="v14g10" sym symSize={24} corners={1} />
			{c > 0.005 ? <rect x={fx - 8} y={fy - 8} width={G10.cw + 16} height={G10.ch + 16} rx={8} fill="none" stroke={VI_S} strokeWidth={8} opacity={c * pulse} /> : null}
			{c > 0.005 ? <rect x={cx - 8} y={cy - 8} width={G10.cw + 16} height={G10.ch + 16} rx={8} fill="none" stroke={OR_S} strokeWidth={8} opacity={c * pulse} /> : null}
			<Write x={1475} y={300} text="F: strongest pull" at={K10.go + 4} size={38} color={VI_T} />
			<Write x={300} y={612} text="Cs: loses its electron most easily" at={K10.go + 10} size={42} color={OR_T} />
			<rect x={300} y={660} width={1320} height={250} rx={22} fill="#fffdf8" stroke="#24407a" strokeWidth={5} />
			<Sx x={330} y={704} text="memory aid" size={30} color={INK} hand at={-1000} />
			<Write x={360} y={826} text="Top right holds tight;" at={K10.top} size={64} color={VI_T} />
			<Write x={360 + w1} y={826} text="bottom left lets go." at={K10.bottom} size={64} color={OR_T} />
			{void fy}{void cy}
		</SVG>
	);
};
void BLUE_T; void GREEN_T; void Fade; void P3; void stepAt;
