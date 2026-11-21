// Y11 Chem M1 V17 scenes 1 to 6: V16's final frame pushing into the nucleus, the smoke alarm and the gum tree with the
// question; an unstable nucleus (band sketch, decay, an atom ionised); alpha (uranium ore, a 2p2n cluster leaves,
// protons -2), beta (the tree, a neutron turns into a proton and an electron leaves, protons +1), gamma (the source
// pot, a photon leaves an excited nucleus, nothing changes) and the prediction board (three cards, empty absorbers).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {ALARM, ORE, POT, RAD, TREE, hold, pw, sc} from './common';
import type {RKey} from './common';
import {
	AlphaClu, Band, BetaDot, Bracket, Burst, Change, Chip, Countdown, E_BLUE, E_INK, Fade, Framed, HUM_T, Heading, INK, IonMark, N_INK, NAT_T, Nuc, Nucleus, P_INK, P_RED,
	PAPER, PenArrow, PenRing, Photon, Plate, RadCard, Sx, VIOLET, VIOLET_T, Write, bandXY, chipW, clamp01, flyPt, lerp, prog, rFor, slotXY, isProton, smooth, span,
} from './parts';
import type {BandG, CardRow} from './parts';
import {Opening, PUSH, pushT} from './opening';

/** A plate placed by its bottom centre. */
const PB: React.FC<{p: typeof ORE; cx: number; bottom: number; h: number; at?: number; o?: number}> = ({p, cx, bottom, h, at = -1000, o = 1}) => <Plate p={p} x={cx - pw(p, h) / 2} y={bottom - h} h={h} at={at} o={o} />;

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {now: 'Now we go', alarm: 'ionisation smoke alarm', americium: 'americium-two-forty-one', people: 'made by people', tree: 'gum tree', carbon: 'carbon-fourteen', natural: 'completely natural', so: 'So is', stronger: 'a different, stronger', find: "Let's find out", from: 'come from'});
export const AL1 = {cx: 330, bottom: 760, h: 362};
export const TR1 = {cx: 1600, bottom: 800, h: 440};
export const CHIP1 = {y: 214, size: 44, segs: [{t: 'human-made = stronger radiation?'}]};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const qx = 960 + chipW(CHIP1.segs, CHIP1.size, false) / 2 - 44;
	return (
		<>
			<Opening at={K1.now} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<Heading text="Radiation: does natural or human-made matter?" at={K1.now + PUSH.d} />
				{/* the alarm: human-made */}
				<PB p={ALARM} cx={AL1.cx} bottom={AL1.bottom} h={AL1.h} at={K1.alarm} />
				<Sx x={AL1.cx} y={AL1.bottom + 52} text="ionisation smoke alarm" size={38} color={INK} anchor="middle" weight={800} at={K1.alarm + 6} />
				<Sx x={AL1.cx} y={AL1.bottom + 100} text="americium-241" size={38} color={HUM_T} anchor="middle" weight={800} at={K1.americium} />
				<Write x={AL1.cx} y={AL1.bottom - AL1.h - 30} text="human-made" at={K1.people} size={46} color={HUM_T} anchor="middle" />
				{/* the tree: natural */}
				<PB p={TREE} cx={TR1.cx} bottom={TR1.bottom} h={TR1.h} at={K1.tree} />
				<Sx x={TR1.cx} y={TR1.bottom + 52} text="gum tree" size={38} color={INK} anchor="middle" weight={800} at={K1.tree + 6} />
				<Sx x={TR1.cx} y={TR1.bottom + 100} text="carbon-14" size={38} color={NAT_T} anchor="middle" weight={800} at={K1.carbon} />
				<Write x={TR1.cx} y={TR1.bottom - TR1.h - 20} text="natural" at={K1.natural} size={46} color={NAT_T} anchor="middle" />
				{/* the question */}
				<Chip x={960} y={CHIP1.y} segs={CHIP1.segs} at={K1.so} size={CHIP1.size} color={INK} anchor="middle" />
				<PenRing cx={qx} cy={CHIP1.y + 34} rx={34} ry={40} at={K1.stronger + 10} color={RED} seed={5} />
				{void K1.find}{void K1.from}{void f}{void pushT}
			</svg>
		</>
	);
};
const RED = '#c4362f';

// ---------- 2. unstable nuclei, and what ionising means ----------
const K2 = cues(sc('unstable-ionising'), {remember: 'Remember', wrong: 'wrong balance', big: 'too big', radioisotope: 'called a radioisotope', decays: 'nucleus decays', radiation: 'gives out radiation', ionising: 'called ionising', knock: 'knock electrons', ions: 'into ions'});
const N2 = {cx: 400, cy: 540, p: 22, n: 30, R: 200};
const BAND2: BandG = {x: 1250, y: 250, w: 520, h: 320};
const PT2: [number, number] = [36, 66];
const AT2 = {cx: 1240, cy: 760, R: 130};
/** The small shell atom (2 inner, 4 outer electrons); the outer one at index 1 is knocked off. */
const OUTER2 = [0.6, 2.2, 3.7, 5.2];
export const SceneUnstable: React.FC = () => {
	const f = useCurrentFrame();
	const r2 = rFor(N2.p + N2.n, N2.R);
	const flick = f >= K2.decays && f < K2.radiation + 20 ? 1 : 0;
	// radiation leaves on "gives out radiation" and reaches the atom on "into ions"
	const a: [number, number] = [N2.cx + N2.R + 20, N2.cy + 30];
	const hitAt = K2.ions - 6;
	const b: [number, number] = [AT2.cx - 20, AT2.cy - 30];
	const t1 = clamp01((f - K2.radiation) / 30);
	const p1: [number, number] = [lerp(a[0], 900, smooth(t1)), lerp(a[1], 640, smooth(t1))];
	const t2 = clamp01((f - (hitAt - 26)) / 26);
	const pr: [number, number] = f < hitAt - 26 ? p1 : [lerp(900, b[0], smooth(t2)), lerp(640, b[1], smooth(t2))];
	const radO = prog(f, K2.radiation, 8) * (1 - prog(f, hitAt + 30, 12));
	const ko = smooth(clamp01((f - hitAt) / 22));
	const ea = OUTER2[1];
	const e0: [number, number] = [AT2.cx + AT2.R * Math.cos(ea), AT2.cy - AT2.R * Math.sin(ea)];
	const eFree: [number, number] = [lerp(e0[0], 1640, ko), lerp(e0[1], 640, ko)];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Unstable nuclei and ionising radiation" at={0} />
			{/* the nucleus */}
			<Nuc cx={N2.cx} cy={N2.cy} p={N2.p} n={N2.n} r={r2} flick={flick} />
			<Sx x={N2.cx} y={N2.cy + N2.R + 64} text="radioisotope" size={44} color={P_INK} anchor="middle" weight={800} at={K2.radioisotope} />
			<Sx x={N2.cx} y={N2.cy + N2.R + 64} text="unstable nucleus" size={38} color={INK} anchor="middle" weight={800} at={-1000} out={K2.radioisotope - 10} />
			{/* the band sketch */}
			<Band g={BAND2} pt={PT2} />
			<Sx x={bandXY(BAND2, PT2[0], PT2[1])[0] + 26} y={bandXY(BAND2, PT2[0], PT2[1])[1] + 12} text="unstable" size={34} color={P_INK} weight={800} at={-1000} />
			<PenArrow a={bandXY(BAND2, 40, 46)} b={[bandXY(BAND2, PT2[0], PT2[1])[0] + 8, bandXY(BAND2, PT2[0], PT2[1])[1] + 20]} at={K2.wrong} color={INK} bend={-0.3} />
			<Write x={bandXY(BAND2, 52, 0)[0]} y={bandXY(BAND2, 52, 96)[1]} text="off the band" at={K2.wrong + 8} size={42} color={INK} />
			<Write x={BAND2.x + 20} y={BAND2.y + BAND2.h + 90} text="or too big" at={K2.big} size={42} color={INK} out={K2.radiation} />
			{/* decay: a burst and radiation leaving */}
			<Burst cx={N2.cx + N2.R * 0.75} cy={N2.cy - N2.R * 0.75} r={64} at={K2.radiation} />
			<Write x={N2.cx + N2.R * 0.75 + 76} y={N2.cy - N2.R * 0.75 - 30} text="decay" at={K2.radiation + 4} size={46} color={RED} />
			{radO > 0.005 ? <g opacity={radO}>
				<line x1={a[0]} y1={a[1]} x2={pr[0]} y2={pr[1]} stroke={RED} strokeWidth={5} strokeDasharray="14 10" />
				<circle cx={pr[0]} cy={pr[1]} r={16} fill="#f6b3a8" stroke={RED} strokeWidth={4} />
			</g> : null}
			<Sx x={760} y={600} text="radiation" size={38} color={RED} weight={800} at={K2.radiation + 18} />
			{/* the atom that gets ionised */}
			<g>
				<circle cx={AT2.cx} cy={AT2.cy} r={AT2.R * 0.5} fill="none" stroke={INK} strokeWidth={3} />
				<circle cx={AT2.cx} cy={AT2.cy} r={AT2.R} fill="none" stroke={INK} strokeWidth={3} />
				<Nucleus cx={AT2.cx} cy={AT2.cy} p={6} n={6} r={8} />
				{[0.3, 3.44].map((q, i) => <circle key={i} cx={AT2.cx + AT2.R * 0.5 * Math.cos(q)} cy={AT2.cy - AT2.R * 0.5 * Math.sin(q)} r={11} fill={E_BLUE} stroke={E_INK} strokeWidth={2} />)}
				{OUTER2.map((q, i) => (i === 1 ? null : <circle key={i} cx={AT2.cx + AT2.R * Math.cos(q)} cy={AT2.cy - AT2.R * Math.sin(q)} r={11} fill={E_BLUE} stroke={E_INK} strokeWidth={2} />))}
				<circle cx={f >= hitAt ? eFree[0] : e0[0]} cy={f >= hitAt ? eFree[1] : e0[1]} r={12} fill={E_BLUE} stroke={E_INK} strokeWidth={2} />
				<Sx x={AT2.cx} y={AT2.cy + AT2.R + 50} text="an atom" size={34} color={INK} anchor="middle" weight={800} at={-1000} out={hitAt + 10} />
				<Sx x={AT2.cx} y={AT2.cy + AT2.R + 50} text="now an ion" size={34} color={INK} anchor="middle" weight={800} at={hitAt + 16} />
				<g opacity={prog(f, hitAt + 10, 10)}>
					<circle cx={AT2.cx + AT2.R * 0.95} cy={AT2.cy + AT2.R * 0.8} r={28} fill={PAPER} stroke={P_INK} strokeWidth={4} />
					<Sx x={AT2.cx + AT2.R * 0.95} y={AT2.cy + AT2.R * 0.8 + 17} text="+" size={52} color={P_INK} anchor="middle" weight={800} at={-1000} />
				</g>
			</g>
			<Write x={1460} y={600} text="electron knocked off" at={hitAt + 12} size={42} color={E_INK} anchor="middle" />
			<PenArrow a={[e0[0] + 20, e0[1] - 14]} b={[1620, 652]} at={hitAt + 18} color={E_INK} bend={-0.2} />
			<Chip x={96} y={232} segs={[{t: 'ionising: knocks electrons off atoms'}]} at={K2.ionising} size={38} color={INK} />
			{void K2.remember}{void K2.knock}{void N_INK}{void P_RED}
		</svg>
	);
};

// ---------- shared board for the three decay scenes ----------
const NB = {cx: 700, cy: 580, R: 205};
const CARD = {x: 1190, y: 196, w: 634};
const CHG = {x: 1190, y: 560, w: 634};
const LEFT = {cx: 270, bottom: 520, h: 270};
/** Element label under the nucleus. */
const ElementLabel: React.FC<{before: string; after: string; at: number; afterColor?: string}> = ({before, after, at, afterColor = P_INK}) => (
	<>
		<Sx x={NB.cx} y={NB.cy + NB.R + 90} text={before} size={44} color={INK} anchor="middle" weight={800} at={-1000} out={at} />
		<Sx x={NB.cx} y={NB.cy + NB.R + 90} text={after} size={44} color={afterColor} anchor="middle" weight={800} at={at + 4} />
	</>
);

// ---------- 3. alpha ----------
const K3 = cues(sc('alpha'), {three: 'three main types', first: 'The first is alpha', particle: 'An alpha particle', two: 'two protons and two neutrons', helium: 'helium nucleus', charge: 'charge of plus two', mass: 'relative mass of four', when: 'When a nucleus', loses: 'loses two protons', element: 'different element', heavy: 'Very heavy', uranium: 'uranium-two-thirty-eight', often: 'often decay'});
const A3 = {p: 24, n: 30};
const ROWS3: CardRow[] = [{label: 'charge', value: RAD.alpha.charge, at: K3.charge}, {label: 'relative mass', value: RAD.alpha.mass, at: K3.mass}];
export const SceneAlpha: React.FC = () => {
	const f = useCurrentFrame();
	const r = rFor(A3.p + A3.n, NB.R);
	const gone = f >= K3.two;
	const cluA: [number, number] = [NB.cx + NB.R * 0.78, NB.cy - NB.R * 0.4];
	const cluB: [number, number] = [1040, 300];
	const c = flyPt(f, cluA, cluB, K3.two, 26);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Alpha: two protons and two neutrons leave" at={0} />
			<PB p={ORE} cx={LEFT.cx} bottom={LEFT.bottom} h={LEFT.h} />
			<Sx x={LEFT.cx} y={LEFT.bottom + 50} text="uranium ore" size={38} color={INK} anchor="middle" weight={800} at={-1000} />
			<Nuc cx={NB.cx} cy={NB.cy} p={gone ? A3.p - 2 : A3.p} n={gone ? A3.n - 2 : A3.n} r={r} flick={f >= K3.particle && f < K3.two ? 1 : 0} />
			<Sx x={NB.cx - 80} y={NB.cy - NB.R - 34} text="uranium-238 (model)" size={40} color={INK} anchor="middle" weight={800} at={K3.uranium} />
			<ElementLabel before="a heavy nucleus" after="a different element" at={K3.element} />
			{/* the alpha particle */}
			{f >= K3.two ? <AlphaClu x={c[0]} y={c[1]} r={r} /> : null}
			<PenRing cx={cluB[0]} cy={cluB[1]} rx={r * 3} ry={r * 3} at={K3.helium} color={RAD.alpha.fill} seed={7} />
			<Write x={cluB[0]} y={cluB[1] + r * 3 + 52} text="2 p + 2 n" at={K3.helium + 4} size={46} color={RAD.alpha.ink} anchor="middle" />
			<Sx x={cluB[0]} y={cluB[1] + r * 3 + 96} text="(a helium nucleus)" size={34} color={INK} anchor="middle" weight={800} at={K3.helium + 14} />
			<RadCard x={CARD.x} y={CARD.y} w={CARD.w} k="alpha" at={K3.first} rows={ROWS3} />
			<Change x={CHG.x} y={CHG.y} w={CHG.w} dP={RAD.alpha.dP} dN={RAD.alpha.dN} atP={K3.loses} atN={K3.loses + 8} hiP={K3.element} />
			<Write x={CHG.x} y={CHG.y + 300} text="2 fewer protons: new element" at={K3.element + 6} size={42} color={RED} />
			<PenArrow a={[LEFT.cx + 120, LEFT.bottom - 60]} b={[NB.cx - NB.R - 24, NB.cy - 40]} at={K3.often} color={INK} bend={-0.2} />
			{void K3.three}{void K3.when}{void K3.heavy}
		</svg>
	);
};

// ---------- 4. beta ----------
const K4 = cues(sc('beta'), {second: 'The second is beta', fast: 'fast electron', doesnt: "doesn't come from", made: "It's made in", neutron: 'a neutron changes', shoots: 'shoots out', charge: 'charge of minus one', mass: 'almost no mass', more: 'one more proton', different: 'different element again', too: 'too many neutrons', carbon: 'carbon-fourteen', way: 'decay this way'});
const C14 = {p: 6, n: 8};
const ROWS4: CardRow[] = [{label: 'charge', value: RAD.beta.charge, at: K4.charge}, {label: 'relative mass', value: RAD.beta.mass, at: K4.mass}];
const BAND4: BandG = {x: 120, y: 700, w: 270, h: 170};
export const SceneBeta: React.FC = () => {
	const f = useCurrentFrame();
	const r = rFor(C14.p + C14.n, NB.R * 0.86);
	const T = C14.p + C14.n;
	// the neutron that changes: the right-most neutron slot
	let ni = -1, best = -1e9;
	for (let i = 0; i < T; i++) if (!isProton(i, C14.p, T)) { const [x] = slotXY(NB.cx, NB.cy, i, r); if (x > best) { best = x; ni = i; } }
	const [nx, ny] = slotXY(NB.cx, NB.cy, ni, r);
	const turn = smooth(prog(f, K4.neutron + 14, 18));
	const glow = f >= K4.neutron && f < K4.shoots + 20 ? 0.5 + 0.5 * Math.sin(f * 0.6) : 0;
	const eA: [number, number] = [nx + r, ny], eB: [number, number] = [1090, 560];
	const e = flyPt(f, eA, eB, K4.shoots, 16);
	const RING = 250;
	const crossA = -Math.PI * 0.5;
	const cx0 = NB.cx + RING * Math.cos(crossA), cy0 = NB.cy + RING * Math.sin(crossA);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Beta: a neutron turns into a proton" at={0} />
			<PB p={TREE} cx={LEFT.cx} bottom={LEFT.bottom - 10} h={300} />
			<Sx x={LEFT.cx} y={LEFT.bottom + 34} text="carbon-14 in" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={LEFT.cx} y={LEFT.bottom + 74} text="living things" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			{/* the electron shells: not where beta comes from */}
			<circle cx={NB.cx} cy={NB.cy} r={RING} fill="none" stroke="#5a6470" strokeWidth={5} />
			{[0.9, 2.5, 3.9, 5.3].map((q, i) => <circle key={i} cx={NB.cx + RING * Math.cos(q)} cy={NB.cy + RING * Math.sin(q)} r={13} fill={E_BLUE} stroke={E_INK} strokeWidth={2} />)}
			{f >= K4.doesnt ? <g opacity={prog(f, K4.doesnt, 10)} stroke="#5a6470" strokeWidth={8} strokeLinecap="round">
				<line x1={cx0 - 34} y1={cy0 - 34} x2={cx0 + 34} y2={cy0 + 34} />
				<line x1={cx0 + 34} y1={cy0 - 34} x2={cx0 - 34} y2={cy0 + 34} />
			</g> : null}
			<Write x={cx0 + 50} y={cy0 - 16} text="not from the shells" at={K4.doesnt + 6} size={42} color="#4f5862" />
			<Nuc cx={NB.cx} cy={NB.cy} p={C14.p} n={C14.n} r={r} />
			{/* the changing nucleon */}
			{glow > 0 ? <circle cx={nx} cy={ny} r={r * 1.45} fill="#fff2a8" opacity={0.7 * glow} /> : null}
			<circle cx={nx} cy={ny} r={r} fill={lerpHex('#9aa3ad', P_RED, turn)} stroke={lerpHex('#4f5862', P_INK, turn)} strokeWidth={Math.max(1.2, r * 0.14)} />
			<PenRing cx={nx} cy={ny} rx={r * 1.7} ry={r * 1.7} at={K4.neutron} color={RED} seed={9} />
			<Write x={nx + 20} y={ny + r * 1.7 + 70} text="neutron → proton" at={K4.neutron + 6} size={42} color={RED} anchor="middle" />
			{f >= K4.shoots ? <BetaDot x={e[0]} y={e[1]} r={15} /> : null}
			{f >= K4.shoots ? <line x1={eA[0]} y1={eA[1]} x2={e[0]} y2={e[1]} stroke={E_BLUE} strokeWidth={4} strokeDasharray="10 8" opacity={0.9} /> : null}
			<Write x={eB[0] + 10} y={eB[1] - 34} text="beta" at={K4.shoots + 10} size={46} color={E_INK} anchor="middle" />
			<ElementLabel before="carbon-14" after="a different element" at={K4.different} />
			<RadCard x={CARD.x} y={CARD.y} w={CARD.w} k="beta" at={K4.second} rows={ROWS4} />
			<Change x={CHG.x} y={CHG.y} w={CHG.w} dP={RAD.beta.dP} dN={RAD.beta.dN} atP={K4.more} atN={K4.more + 8} hiP={K4.more} />
			<Sx x={CHG.x} y={CHG.y + 300} text="1 more proton" size={38} color={RED} weight={800} at={K4.more + 6} />
			{/* too many neutrons: the small band sketch */}
			<Fade at={K4.too - 6}>
				<Band g={BAND4} pt={[24, 52]} labels={false} />
				<Sx x={BAND4.x + BAND4.w + 8} y={BAND4.y + BAND4.h + 6} text="protons" size={30} color={INK} anchor="end" weight={700} at={-1000} />
			</Fade>
			<Write x={BAND4.x - 10} y={BAND4.y - 30} text="too many neutrons" at={K4.too} size={38} color={P_INK} />
			{void K4.fast}{void K4.made}{void K4.carbon}{void K4.way}{void N_INK}
		</svg>
	);
};
const hx = (h: string) => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
export const lerpHex = (a: string, b: string, t: number) => '#' + hx(a).map((v, i) => Math.round(lerp(v, hx(b)[i], t)).toString(16).padStart(2, '0')).join('');

// ---------- 5. gamma ----------
const K5 = cues(sc('gamma'), {third: 'The third is gamma', ray: 'A gamma ray', photon: "It's a photon", far: 'far more energy', charge: 'no charge', mass: 'no mass', giving: 'Giving out', change: "doesn't change", rid: 'gets rid', often: 'often right after', decay: ['decay.', 1]});
const G5 = {p: 20, n: 26};
const ROWS5: CardRow[] = [{label: 'charge', value: RAD.gamma.charge, at: K5.charge}, {label: 'mass', value: RAD.gamma.mass, at: K5.mass}];
export const SceneGamma: React.FC = () => {
	const f = useCurrentFrame();
	const r = rFor(G5.p + G5.n, NB.R * 0.9);
	// excited glow: on, fades as the energy leaves ("gets rid"), back on for the replay, fades after its gamma
	const glow = 1 - prog(f, K5.rid + 10, 20) + prog(f, K5.often, 6) - prog(f, K5.often + 44, 18);
	const ga: [number, number] = [NB.cx + NB.R * 0.8, NB.cy - NB.R * 0.5], gb: [number, number] = [1060, 300];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Gamma: energy only" at={0} />
			<PB p={POT} cx={LEFT.cx} bottom={LEFT.bottom} h={LEFT.h} />
			<Sx x={LEFT.cx} y={LEFT.bottom + 50} text="a sealed gamma source" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Nuc cx={NB.cx} cy={NB.cy} p={G5.p} n={G5.n} r={r} glow={clamp01(glow)} flick={f < K5.ray ? 1 : 0} />
			<Photon a={ga} b={gb} at={K5.ray} dur={20} color={VIOLET} stay width={8} amp={14} fadeAt={K5.often} />
			<Write x={gb[0] - 120} y={gb[1] - 40} text="energy, not matter" at={K5.photon} size={42} color={VIOLET_T} anchor="middle" out={K5.often} />
			<ElementLabel before="an excited nucleus" after="same element" at={K5.change} afterColor={INK} />
			{/* the replay: a beta particle leaves, then a gamma ray */}
			{f >= K5.often ? <BetaDot x={flyPt(f, [NB.cx + NB.R * 0.7, NB.cy + NB.R * 0.4], [1100, 760], K5.often + 4, 14)[0]} y={flyPt(f, [NB.cx + NB.R * 0.7, NB.cy + NB.R * 0.4], [1100, 760], K5.often + 4, 14)[1]} r={14} /> : null}
			<Photon a={ga} b={gb} at={K5.often + 22} dur={18} color={VIOLET} stay width={8} amp={14} />
			<Sx x={NB.cx} y={NB.cy + NB.R + 140} text="often follows alpha or beta" size={34} color={INK} anchor="middle" weight={800} at={K5.often + 4} />
			<RadCard x={CARD.x} y={CARD.y} w={CARD.w} k="gamma" at={K5.third} rows={ROWS5} />
			<Change x={CHG.x} y={CHG.y} w={CHG.w} dP={0} dN={0} atP={-1000} atN={-1000} />
			<Bracket a={[CHG.x + 20, CHG.y + 256]} b={[CHG.x + CHG.w - 20, CHG.y + 256]} at={K5.change} color={INK} />
			<Write x={CHG.x + CHG.w / 2} y={CHG.y + 336} text="both unchanged" at={K5.change + 8} size={42} color={INK} anchor="middle" />
			{void K5.far}{void K5.giving}{void K5.decay}
		</svg>
	);
};

// ---------- 6. prediction ----------
const K6 = cues(sc('prediction'), {quick: 'Quick prediction', alpha: 'Alpha particles', gamma: 'Gamma rays', which: 'Which do you', think: 'Have a think'});
export const CW6 = 540, CX6 = [96, 690, 1284];
export const cardRows = (k: RKey): CardRow[] => [{label: 'charge', value: RAD[k].charge, at: -1000}, {label: k === 'gamma' ? 'mass' : 'relative mass', value: RAD[k].mass, at: -1000}];
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Quick prediction" at={0} />
			{(['alpha', 'beta', 'gamma'] as RKey[]).map((k, i) => <RadCard key={k} x={CX6[i]} y={200} w={CW6} k={k} at={-1000} rows={cardRows(k)} minLines={3} />)}
			<Chip x={960} y={500} segs={[{t: 'alpha or gamma: which travels further through matter?'}]} at={-1000} size={44} color={INK} anchor="middle" />
			{/* the empty absorber line */}
			<rect x={96} y={660} width={190} height={140} rx={12} fill="#e8e4da" stroke={INK} strokeWidth={4} />
			<Sx x={191} y={742} text="source" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<line x1={300} y1={730} x2={1380} y2={730} stroke={INK} strokeWidth={4} strokeDasharray="16 12" />
			{[560, 860, 1160].map((x, i) => <rect key={i} x={x} y={620} width={70} height={220} rx={6} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="12 10" />)}
			{[560, 860, 1160].map((x, i) => <Sx key={'q' + i} x={x + 35} y={884} text="?" size={44} color={INK} anchor="middle" weight={800} at={-1000} />)}
			<Countdown start={h.startFrame} end={h.endFrame} x={1640} y={730} r={64} ringFrom={K6.think} />
			{void K6.quick}{void K6.alpha}{void K6.gamma}{void K6.which}
		</svg>
	);
};
