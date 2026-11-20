// Y11 Chem M1 V14 scenes 1 to 5: V13's final frame (sodium and chlorine at their measured sizes, the "energy?" tug,
// the bonded chlorine pair with "pull?") opening into the two measures (the real samples arrive, the outer electron is
// dragged off as the energy meter fills, the shared pair is named electronegativity), one sodium atom losing its outer
// electron with the meter filling to 496 kJ/mol, the period 3 ionisation-energy stepper with its bars and sample row,
// the two dips on orbital boxes, and the lithium or caesium prediction.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CL16, CL16B, NA16, RCL16, RNA16, SceneHandoff as V13Handoff} from '../chem-y11-m1-v13/s3';
import {dur as v13dur} from '../chem-y11-m1-v13/common';
import {CLJAR, DATA, IE_MAX, NA, P3, RATIO_CL_NA, ROW, SRC_IE, core, fitH, hold, ie, pw, sc, stepAt} from './common';
import {
	AMB_S, AMB_T, Chip, Countdown, DrawBox, E_BLUE, E_INK, EArrow, Fade, Framed, GREEN_T, Heading, INK, LitCell, Meter, NAVY_T, OBox, OR_F, OR_S, OR_T,
	PGrid, PenArrow, PenRing, PlateB, Pull, RAtom, RED_T, Readouts, Repel, Rich, SVG, Sx, TEAL_T, VBarV, VI_S, VI_T, Write, boxRC, ePos, lerp, prog, richW, ringsOf, smooth, toward,
} from './parts';
import type {PG} from './parts';

// ---------- V13's final frame, redrawn so its parts can change (identical at frame 0) ----------
const naRot = -Math.PI * 0.75;
const naE = ePos(NA16[0], NA16[1], RNA16, 1, 0, naRot);
const naTo: [number, number] = [naE[0] - 64, naE[1] - 64];
const eNow: [number, number] = [lerp(naE[0], naTo[0], smooth(0.45)), lerp(naE[1], naTo[1], smooth(0.45))];
const naOut: [number, number] = [naE[0] - 120, naE[1] - 120];
const clRot = -0.13;
const PAIR: [number, number] = [(CL16[0] + RCL16 * Math.cos(clRot) + CL16B[0] - RCL16 * Math.cos(clRot)) / 2, CL16[1]];

// ---------- 1. hook ----------
const K1 = cues(sc('hook'), {chlorine: 'chlorine pulls hard', chemists: 'Chemists measure', two: 'two different ways', pull: 'pull an electron', shares: 'shares', these: 'These are', lets: "Let's see"});
const MX = 650, MY = 246, MW = 380;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const gone = f >= K1.pull;
	const drag = smooth(prog(f, K1.pull, 34));
	const eEnd: [number, number] = [naOut[0] + 8, naOut[1] + 8];
	const eX = lerp(eNow[0], eEnd[0], drag), eY = lerp(eNow[1], eEnd[1], drag);
	const glow = prog(f, K1.chemists, 12) * (1 - prog(f, K1.two + 40, 20)) * (0.6 + 0.4 * Math.abs(Math.sin(f * 0.12)));
	const pairPulse = prog(f, K1.shares, 10) * (0.55 + 0.45 * Math.abs(Math.sin(f * 0.15)));
	return (
		<SVG>
			{/* the board as V13 left it */}
			<Write x={96} y={150} text="Atomic radius trends" at={-1000} out={K1.these - 10} size={60} color={INK} cps={40} />
			<Heading text="Ionisation energy and electronegativity" at={K1.these} />
			<RAtom cx={NA16[0]} cy={NA16[1]} rings={ringsOf(3, RNA16)} counts={[2, 8, 1]} label="11+" nr={36} dot={10} labelSize={34} outerRot={naRot} leave={{to: naTo, p: gone ? 1 : 0.45}} />
			<Pull a={toward(NA16, naE, RNA16 - 14)} b={toward(NA16, naE, 42)} w={3.5} p={1} />
			<RAtom cx={CL16[0]} cy={CL16[1]} rings={ringsOf(3, RCL16)} counts={[2, 8, 7]} label="17+" nr={30} dot={9} labelSize={30} outerRot={clRot} />
			{[0, 1, 2, 3, 4, 5, 6].map(j => {
				const ep = ePos(CL16[0], CL16[1], RCL16, 7, j, clRot);
				return <Pull key={j} a={toward(CL16, ep, RCL16 - 13)} b={toward(CL16, ep, 36)} w={8} p={1} />;
			})}
			<Sx x={NA16[0]} y={NA16[1] + RNA16 + 60} text={`Na  ${DATA.Na.r} pm`} size={44} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			<Sx x={CL16[0]} y={CL16[1] + RCL16 + 60} text={`Cl  ${DATA.Cl.r} pm`} size={44} color={TEAL_T} anchor="middle" weight={800} at={-1000} />
			{glow > 0.005 ? <ellipse cx={naOut[0] - 10} cy={naOut[1] - 36} rx={96} ry={42} fill={OR_F} opacity={0.7 * glow} /> : null}
			{glow > 0.005 ? <ellipse cx={CL16B[0] + 40} cy={CL16[1] - RCL16 - 48} rx={74} ry={40} fill="#f5dfa8" opacity={0.7 * glow} /> : null}
			<PenArrow a={[eNow[0] - 16, eNow[1] - 16]} b={naOut} at={-1000} color={OR_S} bend={0} width={7} head={20} />
			<Write x={naOut[0] - 10} y={naOut[1] - 22} text="energy?" at={-1000} out={K1.pull} size={44} color={OR_T} anchor="middle" />
			<RAtom cx={CL16B[0]} cy={CL16B[1]} rings={ringsOf(3, RCL16)} counts={[2, 8, 7]} label="17+" nr={30} dot={9} labelSize={30} outerRot={Math.PI + 0.13} />
			<PenRing cx={PAIR[0]} cy={PAIR[1]} rx={30} ry={42} at={-1000} color={AMB_S} seed={6} />
			<Write x={CL16B[0] + 40} y={CL16[1] - RCL16 - 34} text="pull?" at={-1000} out={K1.shares} size={44} color={AMB_T} anchor="middle" />
			<Chip x={96} y={178} segs={[{t: 'Next: How do first ionisation energy and electronegativity follow atomic structure?'}]} at={-1000} out={K1.chemists} size={38} color={NAVY_T} />
			{/* V13's frame itself, frozen on top for the first frames, fades out with no visible change */}
			{f < 34 ? <Fade at={-1000} out={4} d={26}><Freeze frame={v13dur('handoff') - 1}><V13Handoff /></Freeze></Fade> : null}
			{/* the real samples */}
			<PlateB p={NA} cx={190} bottom={895} h={300} at={K1.chlorine} dy={24} />
			<PlateB p={CLJAR} cx={1730} bottom={895} h={300} at={K1.chlorine + 8} dy={24} />
			<Sx x={190} y={936} text="sodium" size={34} color={INK} anchor="middle" weight={800} at={K1.chlorine + 10} />
			<Sx x={1730} y={936} text="chlorine" size={34} color={INK} anchor="middle" weight={800} at={K1.chlorine + 16} />
			<Write x={1180} y={232} text="two ways to measure one grip" at={K1.two} size={42} color={INK} />
			{/* measure 1: pull the electron right off */}
			{gone ? (
				<g>
					<circle cx={eX} cy={eY} r={10} fill={E_BLUE} stroke={E_INK} strokeWidth={2} />
				</g>
			) : null}
			<Write x={96} y={290} text="first ionisation energy" at={K1.pull + 4} size={44} color={OR_T} />
			<Fade at={K1.pull + 6}>
				<Meter x={MX} y={MY + 10} w={MW} h={36} v={ie(DATA.Na)} max={IE_MAX} p={prog(f, K1.pull + 10, 30)} />
			</Fade>
			{/* measure 2: the pull on a shared pair */}
			{pairPulse > 0.005 ? <circle cx={PAIR[0]} cy={PAIR[1]} r={40} fill={E_BLUE} opacity={0.22 * pairPulse} /> : null}
			<PenRing cx={PAIR[0]} cy={PAIR[1]} rx={48} ry={62} at={K1.shares} color={VI_S} seed={9} />
			<Write x={1290} y={346} text="electronegativity" at={K1.shares + 4} size={44} color={VI_T} anchor="middle" />
			<PenArrow a={[1290, 362]} b={[PAIR[0] + 6, PAIR[1] - 70]} at={K1.shares + 14} color={VI_S} bend={0} width={5} head={16} />
			{void K1.lets}
		</SVG>
	);
};

// ---------- 2. first ionisation energy ----------
const K2 = cues(sc('ionisation-energy'), {first: 'First ionisation', mole: 'A mole is', separate: 'are separate', sodium: 'For sodium', ion: 'sodium ion', four: 'four hundred', ninety: 'ninety-six', kj: 'kilojoules', only: 'only the first'});
const C2: [number, number] = [470, 640];
const R2 = 250;
const A2 = -Math.PI / 5;
export const SceneIE: React.FC = () => {
	const f = useCurrentFrame();
	const e0 = ePos(C2[0], C2[1], R2, 1, 0, A2);
	const eTo: [number, number] = [800, 410];
	const lp = prog(f, K2.sodium + 6, 40);
	const ex = lerp(e0[0], eTo[0], smooth(lp)), ey = lerp(e0[1], eTo[1], smooth(lp));
	const glowE = prog(f, K2.only, 10);
	return (
		<SVG>
			<Heading text="First ionisation energy" at={0} />
			<Rich x={96} y={234} segs={[{t: 'First ionisation energy', c: OR_T}, {t: ': the energy needed to remove the '}, {t: 'outermost electron', c: OR_T}]} size={38} at={K2.first} />
			<Rich x={96} y={284} segs={[{t: 'from each atom in a mole of gaseous atoms.'}]} size={38} at={K2.first + 30} />
			<RAtom cx={C2[0]} cy={C2[1]} rings={ringsOf(3, R2)} counts={[2, 8, 1]} label="11+" nr={50} dot={12} labelSize={40} outerRot={A2} leave={{to: e0, p: lp > 0 ? 1 : 0}} />
			<Pull a={toward(C2, e0, R2 - 18)} b={toward(C2, e0, 58)} w={4} p={1} o={1 - prog(f, K2.sodium + 6, 10)} />
			{glowE > 0.005 ? <circle cx={ex} cy={ey} r={26} fill={OR_S} opacity={0.4 * glowE} /> : null}
			<circle cx={ex} cy={ey} r={12} fill={E_BLUE} stroke={E_INK} strokeWidth={2} />
			<PenArrow a={[e0[0] + 18, e0[1] - 12]} b={[eTo[0] - 20, eTo[1] + 12]} at={K2.sodium + 4} color={OR_S} bend={0} width={7} head={20} />
			<PenRing cx={eTo[0]} cy={eTo[1]} rx={36} ry={36} at={K2.only} color={OR_S} seed={5} />
			<Write x={96} y={360} text="on its own: gas" at={K2.separate} size={42} color={INK} />
			<PlateB p={NA} cx={1650} bottom={930} h={250} />
			{/* right column */}
			<Rich x={900} y={392} segs={[{t: 'mole', c: INK}, {t: ': a fixed, very large number of atoms'}]} size={34} at={K2.mole} />
			<Rich x={900} y={500} segs={[{t: 'Na(g)  →  Na^{+}(g)  +  e^{−}'}]} size={52} at={K2.sodium} />
			<Sx x={900} y={584} text="first ionisation energy" size={34} color={OR_T} weight={800} at={-1000} />
			<Meter x={900} y={604} w={800} h={44} v={ie(DATA.Na)} max={IE_MAX} p={prog(f, K2.four, 30)} />
			<Framed x={900} y={752} segs={[{t: `${ie(DATA.Na)} kJ/mol`, c: OR_T}]} at={K2.ninety} size={52} stroke={OR_S} tick={false} />
			<Sx x={900} y={826} text="kJ/mol: kilojoules for each mole of atoms" size={30} color={INK} weight={700} at={K2.kj} />
			<Write x={900} y={908} text="first = outermost only" at={K2.only} size={42} color={OR_T} />
			{void K2.ion}
		</SVG>
	);
};

// ---------- the period 3 ionisation-energy chart (scenes 3 and 4) ----------
const XB = (i: number) => 780 + i * 142;
const BASE3 = 740, KIE = 0.27;
const IEChart: React.FC<{grow: (i: number) => number; coreAt?: number; f: number}> = ({grow, coreAt, f}) => (
	<g>
		<line x1={706} y1={BASE3} x2={1830} y2={BASE3} stroke={INK} strokeWidth={3} />
		{P3.map((e, i) => (
			<g key={e.sym}>
				<VBarV x={XB(i)} y0={BASE3} w={92} v={ie(e)} k={KIE} p={grow(i)} text={`${ie(e)}`} color={OR_S} fill={OR_F} tColor={OR_T} />
				<Sx x={XB(i)} y={BASE3 + 40} text={e.sym} size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				{coreAt !== undefined ? <Sx x={XB(i)} y={BASE3 - 16} text={`+${core(e)}`} size={34} color={AMB_T} anchor="middle" weight={800} at={-1000} opacity={prog(f, coreAt + i * 22, 8) * clamp(grow(i))} /> : null}
				<PlateB p={ROW[i]} cx={XB(i)} bottom={942} h={fitH(ROW[i], 122, 130)} />
			</g>
		))}
	</g>
);
const clamp = (v: number) => Math.max(0, Math.min(1, v));

// ---------- 3. across period 3 ----------
const K3 = cues(sc('across-period'), {now: 'Now go', from: 'From sodium', generally: 'generally rises', fifteen: 'fifteen hundred', climbs: 'charge climbs', outer: ['the outer electrons are held', 1], tightly: 'tightly', off: 'one off', removing: 'Removing', about: 'about two'});
const SA3: [number, number] = [330, 452];
const STEP_A = (k: typeof K3) => P3.map((_, i) => [i === 0 ? k.from : i === 7 ? k.fifteen : k.from + 40 + Math.round(((k.fifteen - 22 - k.from - 40) * (i - 1)) / 5), i] as [number, number]);
const STEP_B = (k: typeof K3) => P3.map((_, i) => [k.climbs + 12 + i * 22, i] as [number, number]);
export const SceneAcross: React.FC = () => {
	const f = useCurrentFrame();
	const sa = STEP_A(K3), sb = STEP_B(K3);
	const steps: [number, number][] = [[0, 0], ...sa, ...sb, [K3.off, 0], [K3.removing + 12, 6]];
	let k = 0;
	for (let j = 0; j < steps.length; j++) if (f >= steps[j][0]) k = j;
	const cur = steps[k][1], e = P3[cur], prev = P3[steps[Math.max(0, k - 1)][1]];
	const sP = k === 0 ? 1 : smooth(prog(f, steps[k][0], 16));
	const R = 0.95 * lerp(prev.r, e.r, sP);
	const rot = -Math.PI / 4;
	const oe = ePos(SA3[0], SA3[1], R, e.shells[2], 0, rot);
	const lv: [number, number] = [SA3[0] + (R + 70) * Math.cos(rot), SA3[1] + (R + 70) * Math.sin(rot)];
	const grow = (i: number) => prog(f, sa[i][0], 18);
	const meterV = lerp(ie(prev), ie(e), sP);
	const trendOut = K3.removing;
	return (
		<SVG>
			<Heading text="Across period 3" at={0} />
			{/* the stepper */}
			<Sx x={SA3[0]} y={250} text={`${e.sym}: ${e.name}`} size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			<RAtom cx={SA3[0]} cy={SA3[1]} rings={ringsOf(3, R)} counts={e.shells} label={`${e.z}+`} nr={30} dot={8.5} labelSize={28} outerRot={rot} leave={{to: lv, p: 0.5}} />
			<Pull a={toward(SA3, oe, R - 10)} b={toward(SA3, oe, 34)} w={2 + 1.5 * core(e)} p={prog(f, K3.climbs, 14)} />
			<PenArrow a={[oe[0] + 12, oe[1] - 12]} b={[lv[0] + 38, lv[1] - 38]} at={-1000} color={OR_S} bend={0} width={5} head={14} />
			<Readouts x={96} y={650} w={200} items={[{label: 'core charge', text: `+${core(e)}`, color: AMB_T}]} />
			<Readouts x={330} y={650} w={240} items={[{label: 'kJ/mol', text: `${ie(e)}`, color: OR_T}]} />
			<Sx x={96} y={792} text="first ionisation energy" size={30} color={OR_T} weight={800} at={-1000} />
			<Meter x={96} y={812} w={560} h={40} v={meterV} max={IE_MAX} p={1} />
			<Sx x={96} y={942} text="Source: NIST data via PubChem" size={26} color={INK} weight={700} at={-1000} />
			{/* the chart */}
			<IEChart grow={grow} coreAt={K3.climbs + 12} f={f} />
			<PenArrow a={[740, 520]} b={[1690, 262]} at={K3.generally} out={trendOut} color={OR_S} bend={0} width={6} head={22} />
			<Write x={1010} y={378} text="generally up" at={K3.generally + 10} out={trendOut} size={42} color={OR_T} />
			<Write x={700} y={262} text="core charge +1 → +8" at={K3.outer} out={K3.removing} size={42} color={AMB_T} />
			<PenRing cx={XB(0)} cy={BASE3 - ie(DATA.Na) * KIE - 24} rx={58} ry={34} at={K3.about} color={OR_S} seed={3} />
			<PenRing cx={XB(6)} cy={BASE3 - ie(DATA.Cl) * KIE - 24} rx={58} ry={34} at={K3.about + 6} color={OR_S} seed={8} />
			<PenArrow a={[XB(0) + 20, BASE3 - ie(DATA.Na) * KIE - 64]} b={[XB(6) - 64, BASE3 - ie(DATA.Cl) * KIE - 34]} at={K3.about + 10} color={OR_S} bend={0.18} width={5} head={18} />
			<Write x={1100} y={420} text={`≈ ${RATIO_CL_NA} ×`} at={K3.about + 20} size={52} color={OR_T} />
			{void K3.now}{void K3.tightly}
		</SVG>
	);
};

// ---------- 4. two small dips ----------
const K4 = cues(sc('dips'), {smooth: 'perfectly smooth', lower: 'Aluminium is lower', alS: "Aluminium's", higher: 'higher in energy', remove1: ['remove', 1], sulfur: 'And sulfur', share: 'has to share', repel: 'The two repel', remove2: ['remove', 2], generally: 'generally increases'});
const OB = 76, OG = 8, X3S = 196, X3P = 300;
const ORow4: React.FC<{y: number; sym: string; s: [number, number]; p: [number, number][]; hi: number; color: string}> = ({y, sym, s, p, hi, color}) => (
	<g>
		{hi > 0.005 ? <rect x={86} y={y - 16} width={600} height={OB + 32} rx={14} fill="none" stroke={color} strokeWidth={4} opacity={hi} /> : null}
		<Sx x={110} y={y + OB / 2 + 16} text={sym} size={44} color={INK} weight={800} at={-1000} />
		<OBox x={X3S} y={y} b={OB} up={s[0]} down={s[1]} t="s" />
		{p.map((c, i) => <OBox key={i} x={X3P + i * (OB + OG)} y={y} b={OB} up={c[0]} down={c[1]} t="p" />)}
	</g>
);
export const SceneDips: React.FC = () => {
	const f = useCurrentFrame();
	const lift1 = prog(f, K4.remove1, 26), lift2 = prog(f, K4.remove2, 26);
	const alHi = prog(f, K4.lower, 10), sHi = prog(f, K4.sulfur, 10);
	const yAl = 400, yS = 730;
	const rep = prog(f, K4.repel, 8) * (0.6 + 0.4 * Math.abs(Math.sin(f * 0.25)));
	const aX = X3P + OB * 0.5, sX = X3P + OB * 0.33;
	return (
		<SVG>
			<Heading text="Two small dips" at={0} />
			<IEChart grow={() => 1} f={f} />
			<PenArrow a={[740, 520]} b={[1690, 262]} at={-1000} color={OR_S} bend={0} width={6} head={22} />
			{prog(f, K4.generally, 10) > 0 ? <line x1={740} y1={520} x2={1690} y2={262} stroke={OR_S} strokeWidth={18} strokeLinecap="round" opacity={0.25 * prog(f, K4.generally, 10)} /> : null}
			{/* the dips */}
			<PenRing cx={XB(2)} cy={BASE3 - ie(DATA.Al) * KIE - 22} rx={60} ry={44} at={K4.smooth} color={RED_T} seed={2} />
			<PenRing cx={XB(5)} cy={BASE3 - ie(DATA.S) * KIE - 22} rx={60} ry={44} at={K4.smooth + 8} color={RED_T} seed={4} />
			<Write x={XB(2)} y={BASE3 - ie(DATA.Al) * KIE + 64} text="dip" at={K4.smooth + 12} size={42} color={RED_T} anchor="middle" />
			<Write x={XB(5)} y={BASE3 - ie(DATA.S) * KIE + 64} text="dip" at={K4.smooth + 18} size={42} color={RED_T} anchor="middle" />
			{/* orbital boxes (3s, 3p) */}
			<Sx x={X3S + OB / 2} y={250} text="3s" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={X3P + 1.5 * OB + OG} y={250} text="3p" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<ORow4 y={280} sym="Mg" s={[1, 1]} p={[[0, 0], [0, 0], [0, 0]]} hi={0} color={RED_T} />
			<ORow4 y={yAl} sym="Al" s={[1, 1]} p={[[lift1 > 0 ? 0 : 1, 0], [0, 0], [0, 0]]} hi={alHi} color={RED_T} />
			{lift1 > 0 ? <g opacity={1 - prog(f, K4.remove1 + 40, 20)}><EArrow x={aX + 290 * smooth(lift1)} y={yAl + OB / 2} L={OB * 0.7} up color={OR_S} /></g> : null}
			<PenArrow a={[X3P + 3 * (OB + OG) + 4, yAl + OB / 2]} b={[X3P + 3 * (OB + OG) + 96, yAl + OB / 2]} at={K4.remove1} out={K4.remove1 + 50} color={OR_S} bend={0} width={5} head={14} />
			<Write x={X3P} y={yAl + OB + 56} text="new 3p: higher up" at={K4.higher} size={42} color={GREEN_T} />
			<ORow4 y={610} sym="P" s={[1, 1]} p={[[1, 0], [1, 0], [1, 0]]} hi={0} color={RED_T} />
			<ORow4 y={yS} sym="S" s={[1, 1]} p={[[1, lift2 > 0 ? 0 : 1], [1, 0], [1, 0]]} hi={sHi} color={RED_T} />
			{lift2 > 0 ? <g opacity={1 - prog(f, K4.remove2 + 40, 20)}><EArrow x={X3P + OB * 0.67 + 270 * smooth(lift2)} y={yS + OB / 2} L={OB * 0.7} up={false} color={OR_S} />
			<PenArrow a={[X3P + 3 * (OB + OG) + 4, yS + OB / 2]} b={[X3P + 3 * (OB + OG) + 96, yS + OB / 2]} at={K4.remove2} out={K4.remove2 + 50} color={OR_S} bend={0} width={5} head={14} /></g> : null}
			<Repel a={[X3P - 6, yS - 16]} b={[X3P + OB + 6, yS - 16]} o={rep * (1 - prog(f, K4.remove2 + 10, 10))} />
			<Write x={X3P} y={yS + OB + 56} text="paired: they repel" at={K4.share} size={42} color={GREEN_T} />
			{void sX}
			<Chip x={760} y={180} segs={[{t: 'generally', c: OR_T}, {t: ' increases (small dips at Al and S)'}]} at={K4.generally} size={44} color={INK} />
			{prog(f, K4.generally + 10, 12) > 0.01 ? <line x1={760 + 44 * 0.55} y1={250} x2={760 + 44 * 0.55 + richW([{t: 'generally'}], 44, false, 700) * prog(f, K4.generally + 10, 12)} y2={250} stroke={OR_S} strokeWidth={5} strokeLinecap="round" /> : null}
			{void K4.alS}
		</SVG>
	);
};

// ---------- 5. prediction ----------
const K5 = cues(sc('prediction'), {lithium: 'Lithium is', caesium: 'and caesium', fifty: 'fifty-two', which: 'Which one', think: 'think'});
const GP5: PG = {x: 96, y: 236, cw: 50, ch: 46};
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	const li = DATA.Li, cs = DATA.Cs;
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<PGrid g={GP5} tint={{s: 0.7, p: 0.7, d: 0.7, f: 0.7}} fRows={0} />
			<DrawBox {...boxRC(GP5, 2, 6, 1, 1)} at={-1000} color={INK} width={6} pad={5} />
			<LitCell g={GP5} z={li.z} at={-1000} color={INK} fill="#ffffff" pop={1.25} symSize={28} />
			<LitCell g={GP5} z={cs.z} at={-1000} color={INK} fill="#ffffff" pop={1.25} symSize={28} />
			<Sx x={GP5.x + 25} y={GP5.y - 14} text="group 1" size={30} color={INK} weight={800} at={-1000} />
			{[{s: li.sym, y: 650}, {s: cs.sym, y: 770}].map(b => (
				<g key={b.s}>
					<Sx x={96} y={b.y + 34} text={b.s} size={44} color={INK} weight={800} at={-1000} />
					<Meter x={176} y={b.y} w={560} h={46} v={0} max={IE_MAX} p={0} />
					<Sx x={760} y={b.y + 36} text="? kJ/mol" size={44} color={OR_T} weight={800} at={-1000} />
				</g>
			))}
			<Sx x={176} y={890} text="first ionisation energy" size={30} color={OR_T} weight={800} at={-1000} />
			<rect x={1040} y={214} width={784} height={150} rx={22} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<Rich x={1072} y={276} segs={[{t: 'Li or Cs: which has the higher'}]} size={44} />
			<Rich x={1072} y={336} segs={[{t: 'first ionisation energy', c: OR_T}, {t: '?'}]} size={44} />
			<Rich x={1060} y={440} segs={[{t: 'Li: '}, {t: `${li.z} protons`, c: RED_T}]} size={44} at={K5.lithium} />
			<Rich x={1060} y={510} segs={[{t: 'Cs: '}, {t: `${cs.z} protons`, c: RED_T}]} size={44} at={K5.caesium} />
			<Write x={1060} y={580} text={`${cs.z - li.z} more protons`} at={K5.fifty} size={42} color={RED_T} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1440} y={770} r={64} ringFrom={K5.think} />
			{void K5.which}{void pw}{void Readouts}{void NAVY_T}
		</SVG>
	);
};
