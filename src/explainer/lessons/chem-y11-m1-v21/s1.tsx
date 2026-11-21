// Y11 Chem M1 V21 scenes 1 to 7: v20's final frame (drawn here) with the salt and the dry ice arriving and the rope
// growing into the tug-of-war dial (even, harder, handed over); the electronegativity map; the bond stage for Cl-Cl,
// H-Cl and Na-Cl (the pair placed by the two values, live readouts); the spectrum with the dial sweeping its examples
// and the periodic distance; the H-F prediction.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Givens} from '../chem-y11-m1-v01/s3';
import {CLJAR, DRYICE, EL, MARKS, SALT, dM, f1, hold, pw, sc, typeOf, working} from './common';
import type {Mark, PDef} from './common';
import {
	AMB_DOT, AMB_DOT_T, AMB_T, Bracket, Chip, Countdown, Dial, DialRead, E_BL_T, Fade, Framed, GREEN_C, Heading, INK, Outline, PAPER, PenArrow, PenRing, Pin, Plate, RED_C,
	SLATE_T2, ShadeTable, SpecBar, Sx, TEAL_C, TickMark, Write, bx, clamp01, lerp, ogCell, pairXOf, prog, sgCell, smooth, span, typeColor,
} from './parts';
import type {BarG, DialG, OG, SG} from './parts';
import {V20, V20Final} from './opening';

const PB: React.FC<{p: PDef; cx: number; bottom: number; h: number; at?: number; o?: number}> = ({p, cx, bottom, h, at = -1000, o = 1}) => <Plate p={p} x={cx - pw(p, h) / 2} y={bottom - h} h={h} at={at} o={o} />;
const HEAD = 'Electronegativity: one pull, from sharing to transfer';

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {named: 'we named', carbon: 'carbon dioxide', but: 'But these', worlds: 'separate worlds', remember: 'Remember our', electrons: ['of electrons.', 1], even: 'If the pull', middle: 'in the middle', harder: 'If one atom pulls harder', shifts: 'shifts toward', much: 'much, much', take: 'take the electrons', completely: 'completely', see: "Let's see", bonding: 'ionic bonding'});
const G1: DialG = {a: [680, 690], b: [1240, 690], R: 110};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const grow = span(f, K1.remember, K1.remember + 30);
	const atoms = prog(f, K1.electrons, 14);
	// the pair: centred, then a little toward the right atom, then handed over, then back to centred on "bonding"
	const d = lerp(0, 0.9, span(f, K1.shifts, K1.shifts + 24)) * (1 - span(f, K1.bonding, K1.bonding + 20));
	const hand = span(f, K1.take + 6, K1.take + 30) * (1 - span(f, K1.bonding, K1.bonding + 20));
	const ion = prog(f, K1.completely + 10, 12) * (1 - prog(f, K1.bonding, 12));
	// the small v20 rope moves down and grows into the dial's rope
	const r0 = V20.rope;
	const rx0 = lerp(r0.x0, G1.a[0], grow), rx1 = lerp(r0.x1, G1.b[0], grow), ry = lerp(r0.y, G1.a[1], grow);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<V20Final outs={{heading: K1.remember - 14, chip: K1.remember - 14, q: K1.but, rope: K1.remember, tags: K1.remember}} />
			<Heading text={HEAD} at={K1.remember} />
			{/* the two real substances */}
			<PB p={SALT} cx={346} bottom={860} h={280} at={K1.named} />
			<Sx x={346} y={905} text="salt (NaCl)" size={34} color={INK} anchor="middle" weight={800} at={K1.named + 8} />
			<PB p={DRYICE} cx={1574} bottom={860} h={198} at={K1.carbon} />
			<Sx x={1574} y={905} text="dry ice (solid CO_2)" size={34} color={INK} anchor="middle" weight={800} at={K1.carbon + 8} />
			<Write x={960} y={330} text="one idea links them" at={K1.worlds - 10} size={46} color={INK} anchor="middle" out={K1.remember + 40} />
			<PenArrow a={[800, 344]} b={[620, 400]} at={K1.worlds} color={INK} bend={0.2} out={K1.remember + 40} />
			<PenArrow a={[1120, 344]} b={[1300, 400]} at={K1.worlds} color={INK} bend={-0.2} out={K1.remember + 40} />
			{/* the rope grows into the dial */}
			{grow > 0.005 && atoms < 0.995 ? <line x1={rx0} y1={ry} x2={rx1} y2={ry} stroke={INK} strokeWidth={7} strokeLinecap="round" /> : null}
			<Dial g={G1} lSym="" rSym="" d={d} lOut={0} rOut={0} hand={hand} ionO={ion} o={atoms} />
			<Sx x={960} y={G1.a[1] + 150} text="pull on electrons: electronegativity" size={34} color={INK} anchor="middle" weight={800} at={K1.remember + 20} />
			<TickMark x={960} y={G1.a[1] - 46} at={K1.middle} color={INK} />
			<Write x={960} y={G1.a[1] - 120} text="even pull: middle" at={K1.middle} size={42} color={INK} anchor="middle" out={K1.much} />
			<Write x={960} y={G1.a[1] - 120} text="handed over" at={K1.completely} size={46} color={TEAL_C} anchor="middle" out={K1.bonding} />
			<PenArrow a={[pairXOf(G1, 0.9), G1.a[1] - 40]} b={[G1.b[0] - G1.R - 10, G1.a[1] - 40]} at={K1.completely} color={TEAL_C} bend={0.3} out={K1.bonding} />
			{void K1.even}{void K1.harder}{void K1.see}{void smooth}{void clamp01}
		</svg>
	);
};

// ---------- 2. the difference decides ----------
const K2 = cues(sc('difference'), {measures: 'measures how', rises: 'It rises', fluorine: 'Fluorine is', chlorine: 'Chlorine is', hydrogen: ['hydrogen two point two', 1], sodium: 'sodium only', decides: 'What decides', difference: 'the difference between'});
const SG2: SG = {x: 340, y: 216, cw: 70, ch: 60};
export const SceneDifference: React.FC = () => {
	const lit: [string, number, 'l' | 'r'][] = [['F', K2.fluorine, 'r'], ['Cl', K2.chlorine, 'r'], ['H', K2.hydrogen, 'l'], ['Na', K2.sodium, 'l']];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<ShadeTable g={SG2} id="v21st" sym corners={0} symSize={28} />
			{lit.map(([s, at, side]) => {
				const e = EL[s];
				const [x, y] = sgCell(SG2, e.z);
				return (
					<Fade key={s} at={at}>
						<rect x={x} y={y} width={SG2.cw} height={SG2.ch} fill="none" stroke={INK} strokeWidth={7} />
						<Sx x={side === 'r' ? SG2.x + 18 * SG2.cw + 22 : SG2.x - 22} y={y + SG2.ch / 2 + 18} text={`${e.sym} ${f1(e.en)}`} size={52} color={INK} anchor={side === 'r' ? 'start' : 'end'} weight={800} at={-1000} />
					</Fade>
				);
			})}
			<PenArrow a={[SG2.x + 40, SG2.y + 6.4 * SG2.ch]} b={[SG2.x + 16.2 * SG2.cw, SG2.y + 0.8 * SG2.ch]} at={K2.rises} color={INK} bend={0.08} width={6} head={22} />
			<Write x={1060} y={SG2.y + 7 * SG2.ch + 56} text="stronger pull toward the top right" at={K2.rises + 10} size={42} color={INK} anchor="middle" />
			<PenRing cx={sgCell(SG2, 11)[0] + SG2.cw / 2} cy={sgCell(SG2, 11)[1] + SG2.ch / 2} rx={58} ry={46} at={K2.sodium + 8} color={RED_C} seed={4} />
			{/* small rope at the lower left */}
			<Dial g={{a: [150, 780], b: [430, 780], R: 46}} lSym="" rSym="" d={0} lOut={0} rOut={0} />
			<Framed x={560} y={880} segs={[{t: 'difference (Δχ) = larger value − smaller value'}]} at={K2.difference} size={46} stroke={INK} tick={false} />
			<Write x={1290} y={810} text="the gap decides" at={K2.difference + 14} size={46} color={AMB_T} anchor="middle" />
			{void K2.measures}{void K2.decides}
		</svg>
	);
};

// ---------- 3 to 5: the bond stage ----------
const GB: DialG = {a: [700, 440], b: [1300, 440], R: 120};
const RD = {y: 680, xs: [96, 660, 1264], ws: [520, 560, 560]};
const Reads: React.FC<{vals: string; work: string; type: string; workAt: number; typeAt: number}> = ({vals, work, type, workAt, typeAt}) => {
	const f = useCurrentFrame();
	return (
		<g>
			<DialRead x={RD.xs[0]} y={RD.y} w={RD.ws[0]} label="values" text={vals} />
			<DialRead x={RD.xs[1]} y={RD.y} w={RD.ws[1]} label="difference (Δχ)" text={f >= workAt ? work : '?'} />
			<DialRead x={RD.xs[2]} y={RD.y} w={RD.ws[2]} label="bond type (by the guide)" text={f >= typeAt ? type : '?'} color={typeColor(type)} />
		</g>
	);
};

const K3 = cues(sc('non-polar'), {start: 'Start with', seven: 'seven outer', share: 'they share', each: 'from each', bond: 'a covalent bond', equally: 'pull equally', zero: 'difference is zero', middle: 'exactly in the middle', nonpolar: 'non-polar covalent'});
export const SceneNonPolar: React.FC = () => {
	const f = useCurrentFrame();
	const cl = EL.Cl, M = MARKS.Cl2;
	const sh = smooth(prog(f, K3.share + 6, 20));
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<Givens segs={[{t: `Cl–Cl: classify the bond     |     ${cl.sym} ${f1(cl.en)}     |     ${cl.sym} ${f1(cl.en)}`}]} />
			<PB p={CLJAR} cx={200} bottom={600} h={320} />
			<Sx x={200} y={300} text="chlorine gas" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Dial g={GB} lSym="Cl" rSym="Cl" d={dM(M)} lOut={sh > 0.5 ? 6 : 7} rOut={sh > 0.5 ? 6 : 7} pairO={sh} />
			<Write x={960} y={GB.a[1] - 70} text="one each" at={K3.each} size={44} color={AMB_T} anchor="middle" out={K3.middle - 6} />
			<Write x={960} y={GB.a[1] - 70} text="equal pull: centred" at={K3.middle} size={44} color={INK} anchor="middle" />
			<TickMark x={960} y={GB.a[1] + 44} at={K3.middle + 6} color={INK} />
			<Sx x={960} y={GB.a[1] + 172} text="covalent bond: a shared pair of electrons" size={38} color={INK} anchor="middle" weight={800} at={K3.bond} />
			<Reads vals="Cl 3.2  |  Cl 3.2" work={working(cl, cl)} type={typeOf(dM(M))} workAt={K3.zero} typeAt={K3.nonpolar} />
			<Framed x={96} y={860} segs={[{t: 'non-polar covalent: shared equally', c: GREEN_C}]} at={K3.nonpolar} size={44} stroke={GREEN_C} />
			{void K3.start}{void K3.seven}{void K3.equally}
		</svg>
	);
};

const K4 = cues(sc('polar'), {now: 'Now hydrogen', zero: 'one point zero', pulls: 'Chlorine pulls harder', spends: 'spends more', negative: 'small negative', positive: 'small positive', write: 'We write', delta: 'delta means', polar: 'a polar covalent'});
const GB4: DialG = {...GB, rl: 80};
export const ScenePolar: React.FC = () => {
	const f = useCurrentFrame();
	const h = EL.H, cl = EL.Cl, M = MARKS.HCl;
	const d = lerp(0, dM(M), span(f, K4.pulls, K4.pulls + 30));
	const px = pairXOf(GB4, d);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<Givens segs={[{t: `H–Cl: classify the bond     |     ${h.sym} ${f1(h.en)}     |     ${cl.sym} ${f1(cl.en)}`}]} />
			<PB p={CLJAR} cx={200} bottom={440} h={150} />
			<Sx x={200} y={480} text="hydrogen chloride" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Dial g={GB4} lSym="H" rSym="Cl" d={d} lOut={0} rOut={6} haze={prog(f, K4.negative, 14)} />
			<PenArrow a={[960, GB.a[1] + 70]} b={[px + 4, GB.a[1] + 30]} at={K4.spends} color={E_BL_T} bend={-0.2} />
			<Write x={960} y={GB.a[1] + 124} text="nearer Cl" at={K4.spends + 6} size={44} color={E_BL_T} anchor="middle" />
			<Sx x={GB.b[0] + 40} y={GB.b[1] - GB.R - 30} text="δ−" size={52} color={E_BL_T} weight={800} at={K4.write + 20} />
			<Sx x={GB.a[0] - 30} y={GB.a[1] - 110} text="δ+" size={52} color={RED_C} anchor="middle" weight={800} at={K4.write + 30} />
			<Write x={GB.a[0] + 70} y={GB.a[1] - 100} text="δ = a little (partial)" at={K4.delta} size={42} color={INK} />
			<Reads vals="H 2.2  |  Cl 3.2" work={working(h, cl)} type={typeOf(dM(M))} workAt={K4.zero} typeAt={K4.polar} />
			<Framed x={96} y={860} segs={[{t: 'polar covalent: shared unequally', c: GREEN_C}]} at={K4.polar} size={44} stroke={GREEN_C} />
			{void K4.now}{void K4.positive}
		</svg>
	);
};

const K5 = cues(sc('ionic'), {now: 'Now sodium', three: 'two point three', pull: "Chlorine's pull", moves: 'moves across', sodium: 'Sodium becomes', chlorine: 'chlorine becomes', attract: 'These ions attract', opposite: 'opposite charges', ionic: 'an ionic bond'});
export const SceneIonic: React.FC = () => {
	const f = useCurrentFrame();
	const na = EL.Na, cl = EL.Cl, M = MARKS.NaCl;
	const t = smooth(clamp01((f - K5.moves) / 24));
	const go = f >= K5.moves + 24;
	const naRing = 1 - prog(f, K5.sodium, 14);
	const ion = prog(f, K5.sodium + 4, 12);
	const ex = lerp(GB4.a[0] + 80, GB.b[0] - GB.R, t), ey = GB.a[1] - Math.sin(Math.PI * t) * 40;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<Givens segs={[{t: `Na–Cl: classify the bond     |     ${na.sym} ${f1(na.en)}     |     ${cl.sym} ${f1(cl.en)}`}]} />
			<PB p={SALT} cx={200} bottom={600} h={300} />
			<Sx x={200} y={300} text="salt" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Dial g={GB4} lSym="Na" rSym="Cl" d={0} lOut={0} rOut={go ? 8 : 7} pairO={0} ropeO={1 - prog(f, K5.moves + 20, 16)} lRing={naRing > 0.5} ionO={ion} />
			{f < K5.moves + 24 ? <circle cx={ex} cy={ey} r={12} fill={AMB_DOT} stroke={AMB_DOT_T} strokeWidth={2.5} /> : null}
			<PenArrow a={[GB4.a[0] + 80, GB.a[1] - 70]} b={[GB.b[0] - GB.R - 10, GB.a[1] - 70]} at={K5.moves} color={AMB_T} bend={0.15} />
			<Write x={960} y={GB.a[1] - 140} text="all the way over" at={K5.moves + 6} size={44} color={AMB_T} anchor="middle" />
			<Sx x={GB.a[0]} y={GB.a[1] + 150} text="Na^{+}" size={52} color={TEAL_C} anchor="middle" weight={800} at={K5.sodium} />
			<Sx x={GB.b[0] + GB.R + 70} y={GB.b[1] + 20} text="Cl^{−}" size={52} color={TEAL_C} anchor="middle" weight={800} at={K5.chlorine} />
			{f >= K5.opposite ? <g opacity={prog(f, K5.opposite, 10)}>
				<line x1={GB.a[0] + 60} y1={GB.a[1] + 30} x2={GB.b[0] - GB.R - 20} y2={GB.a[1] + 30} stroke={TEAL_C} strokeWidth={6} strokeLinecap="round" />
				<path d={`M${GB.a[0] + 80},${GB.a[1] + 14} L${GB.a[0] + 60},${GB.a[1] + 30} L${GB.a[0] + 80},${GB.a[1] + 46}`} fill="none" stroke={TEAL_C} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
				<path d={`M${GB.b[0] - GB.R - 40},${GB.a[1] + 14} L${GB.b[0] - GB.R - 20},${GB.a[1] + 30} L${GB.b[0] - GB.R - 40},${GB.a[1] + 46}`} fill="none" stroke={TEAL_C} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
			</g> : null}
			<Write x={960} y={GB.a[1] + 100} text="+ attracts −" at={K5.opposite + 6} size={44} color={TEAL_C} anchor="middle" />
			<Reads vals="Na 0.9  |  Cl 3.2" work={working(na, cl)} type={typeOf(dM(M))} workAt={K5.three} typeAt={K5.ionic} />
			<Framed x={96} y={860} segs={[{t: 'ionic bond: + and − ions attract', c: GREEN_C}]} at={K5.ionic} size={44} stroke={GREEN_C} />
			<Chip x={1060} y={800} segs={[{t: 'Na and Cl share a pair'}]} at={K5.pull} size={40} color={RED_C} strike={K5.moves + 26} />
			<Write x={1100} y={930} text="gap 2.3: transfer" at={K5.moves + 36} size={42} color={RED_C} />
			{void K5.now}{void K5.attract}{void naRing}
		</svg>
	);
};

// ---------- 6. one spectrum (the dial sweeps) ----------
const K6 = cues(sc('spectrum'), {so: 'So bonding', grows: 'difference grows', handed: 'handed over', guide: 'As a rough guide', p4: 'zero point four is', nonpolar: 'non-polar covalent', between: 'Between', polar: 'polar covalent', above: 'And above', ionic: 'is ionic', see: 'You can see', metal: 'A metal', far: 'far apart', two: 'Two non-metals', share: 'share electrons'});
export const BAR: BarG = {x0: 220, x1: 1700, y: 800, h: 40};
const GS: DialG = {a: [300, 390], b: [820, 390], R: 92};
/** The sweep: [frame, mark]. The dial moves to each mark over 24 frames. */
const SWEEP: [number, Mark][] = [
	[-1000, MARKS.Cl2], [K6.grows - 8, MARKS.Cl2], [K6.grows + 22, MARKS.CH], [K6.grows + 60, MARKS.OH], [K6.grows + 96, MARKS.MgO], [K6.handed + 10, MARKS.KF],
	[K6.nonpolar - 20, MARKS.Cl2], [K6.polar - 20, MARKS.HCl], [K6.ionic - 20, MARKS.NaCl],
];
export const sweepAt = (f: number) => {
	let i = 0;
	for (let k = 0; k < SWEEP.length; k++) if (f >= SWEEP[k][0]) i = k;
	const [t, m] = SWEEP[i], prev = i ? SWEEP[i - 1][1] : m;
	const u = smooth(clamp01((f - t) / 24));
	return {m, d: lerp(dM(prev), dM(m), u), settled: u >= 1};
};
const handOf = (d: number) => smooth(clamp01((d - 1.9) / 0.3));
/** Pins that sit on the bar: [mark, frame it drops, lift]. */
export const PINS6: [Mark, number, number][] = [
	[MARKS.Cl2, 20, 0], [MARKS.HCl, 34, 0], [MARKS.NaCl, 48, 0],
	[MARKS.CH, K6.grows + 46, 0], [MARKS.OH, K6.grows + 84, 46], [MARKS.MgO, K6.grows + 120, 46], [MARKS.KF, K6.handed + 34, 0],
];
const OG6: OG = {x: 1210, y: 540, cw: 33, ch: 30};
export const SceneSpectrum: React.FC = () => {
	const f = useCurrentFrame();
	const {m, d} = sweepAt(f);
	const L = EL[m.l], R = EL[m.r];
	const hand = handOf(d);
	// readouts show the current example's exact values (the dial animates between examples)
	const dm = dM(m);
	const tp = typeOf(dm);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text={HEAD} at={-1000} />
			<Dial g={GS} lSym={m.l} rSym={m.r} d={Math.min(d, 1.9)} lOut={0} rOut={0} hand={hand} ionO={hand} />
			<Sx x={(GS.a[0] + GS.b[0]) / 2} y={GS.a[1] + GS.R + 64} text={m.label} size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			<DialRead x={1180} y={222} w={644} label="values" text={`${L.sym} ${f1(L.en)}  |  ${R.sym} ${f1(R.en)}`} size={44} />
			<DialRead x={1180} y={326} w={644} label="difference (Δχ)" text={working(L, R)} size={44} />
			<DialRead x={1180} y={430} w={644} label="bond type (by the guide)" text={tp} color={typeColor(tp)} size={44} />
			<SpecBar g={BAR} id="v21s6" guides={prog(f, K6.p4, 12)} bands={0} />
			{/* band labels on cue */}
			<Sx x={BAR.x0} y={BAR.y + 108} text="non-polar" size={38} color={SLATE_T2} weight={800} at={K6.nonpolar} />
			<Sx x={(bx(BAR, 0.4) + bx(BAR, 1.7)) / 2} y={BAR.y + 108} text="polar covalent" size={38} color={INK} anchor="middle" weight={800} at={K6.polar} />
			<Sx x={(bx(BAR, 1.7) + BAR.x1) / 2} y={BAR.y + 108} text="ionic" size={38} color={TEAL_C} anchor="middle" weight={800} at={K6.ionic} />
			{PINS6.map(([pm, at, lift]) => <Pin key={pm.label} g={BAR} v={dM(pm)} label={pm.label} at={at} lift={lift} />)}
			{/* the live marker */}
			<g>
				<path d={`M${bx(BAR, d) - 16},${BAR.y + 40} L${bx(BAR, d)},${BAR.y + 18} L${bx(BAR, d) + 16},${BAR.y + 40} Z`} fill={AMB_DOT} stroke={AMB_DOT_T} strokeWidth={3} />
			</g>
			<Write x={240} y={610} text="one sliding scale" at={K6.so + 20} size={44} color={INK} />
			<Write x={240} y={690} text="a guide, not a wall" at={K6.ionic + 4} size={44} color={INK} />
			{f >= K6.ionic + 20 ? <line x1={240} y1={704} x2={240 + 360 * prog(f, K6.ionic + 20, 12)} y2={704} stroke={INK} strokeWidth={4} strokeLinecap="round" /> : null}
			{/* periodic distance */}
			<Fade at={K6.see}>
				<Outline g={OG6} rows={4} lit={[{z: 11, sym: 'Na', at: K6.metal, color: TEAL_C}, {z: 17, sym: 'Cl', at: K6.metal + 10, color: TEAL_C}, {z: 6, sym: 'C', at: K6.two, color: SLATE_T2}, {z: 8, sym: 'O', at: K6.two + 6, color: SLATE_T2}]} />
			</Fade>
			<PenArrow a={[ogCell(OG6, 11)[0] + 16, ogCell(OG6, 11)[1] + 2]} b={[ogCell(OG6, 17)[0] + 16, ogCell(OG6, 17)[1] + 2]} at={K6.far} color={TEAL_C} bend={0.12} width={6} />
			<Write x={1180} y={OG6.y + 40} text="far apart: ionic" at={K6.far + 6} size={40} color={TEAL_C} anchor="end" />
			<PenArrow a={[ogCell(OG6, 6)[0] + 16, ogCell(OG6, 6)[1] - 4]} b={[ogCell(OG6, 8)[0] + 16, ogCell(OG6, 8)[1] - 4]} at={K6.share} color={SLATE_T2} bend={0.6} width={6} head={14} />
			<Write x={1180} y={OG6.y + 110} text="close: covalent" at={K6.share + 4} size={40} color={SLATE_T2} anchor="end" />
			{void K6.guide}{void K6.between}{void K6.above}{void Bracket}{void PAPER}{void Countdown}{void Chip}
		</svg>
	);
};

// ---------- 7. prediction ----------
const K7 = cues(sc('prediction'), {quick: 'Quick prediction', diff: 'the difference', guide: 'By the guide', so: 'So is', think: 'Have a think'});
export const SceneHFPrediction: React.FC = () => {
	const h = hold('prediction');
	const hf = MARKS.HF;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<Heading text="Quick prediction" at={0} />
			<DialRead x={96} y={250} w={560} label="values" text={`H ${f1(EL.H.en)}  |  F ${f1(EL.F.en)}`} />
			<DialRead x={720} y={250} w={560} label="difference (Δχ)" text={working(EL.H, EL.F)} />
			<Chip x={96} y={420} segs={[{t: 'hydrogen fluoride: ions?'}]} at={-1000} size={44} color={INK} />
			<SpecBar g={BAR} id="v21s7" bands={1} bandY={BAR.y + 108} />
			{PINS6.map(([pm, , lift]) => <Pin key={pm.label} g={BAR} v={dM(pm)} label={pm.label} at={-1000} lift={lift} />)}
			<Pin g={BAR} v={dM(hf)} label={`${hf.label} ${f1(dM(hf))} ?`} at={-1000} lift={150} size={44} color={E_BL_T} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1600} y={300} r={64} ringFrom={K7.think} />
			<Outline g={{x: 1160, y: 430, cw: 36, ch: 40}} rows={4} symSize={26} lit={[{z: 1, sym: 'H'}, {z: 9, sym: 'F'}]} />
			{void K7.quick}{void K7.diff}{void K7.guide}{void K7.so}
		</svg>
	);
};
