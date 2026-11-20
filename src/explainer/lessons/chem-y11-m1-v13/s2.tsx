// Y11 Chem M1 V13 scenes 6 to 11: the lithium or potassium prediction (group 1 on the table, two blank bars, 3 s
// ring), down group 1 (Li, Na and K drawn to scale with the stepper's readouts holding core charge at +1, the bars
// growing to Cs), the two exam sentences beside their pictures, atoms into ions beside the watch glass of salt (the
// sodium shell fades, the chlorine ring widens), the five ten-electron ions contracting to their measured sizes, and
// the memory line on the periodic cross.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {G1, G1_DATA, ISO, P3, SALT, core, hold, sc, stepAt} from './common';
import {
	AMB_S, AMB_T, BLUE_T, Bracket, Chip, Countdown, DrawBox, Fade, Framed, GREEN_T, HBar, Heading, INK, LitCell, PGrid, PenArrow, PenRing, PlateB, Pull, RAtom, RED_T,
	Readouts, Repel, Rich, Ruler, SLATE_T, SVG, Sx, TEAL_T, VBar, Write, boxRC, cellC, ePos, lerp, prog, richW, ringsOf, smooth, toward,
} from './parts';
import type {PG, Seg} from './parts';

// ---------- 6. prediction ----------
const K6 = cues(sc('prediction'), {quick: 'Quick prediction', both: 'are both', sixteen: 'sixteen more', which: 'which atom', think: 'think'});
const GP6: PG = {x: 96, y: 236, cw: 50, ch: 46};
export const ScenePrediction: React.FC = () => {
	const h = hold('prediction');
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<PGrid g={GP6} tint={{s: 0.7, p: 0.7, d: 0.7, f: 0.7}} fRows={0} />
			<DrawBox {...boxRC(GP6, 2, 7, 1, 1)} at={-1000} color={INK} width={6} pad={5} />
			<LitCell g={GP6} z={3} at={-1000} color={INK} fill="#ffffff" pop={1.25} symSize={28} />
			<LitCell g={GP6} z={19} at={-1000} color={INK} fill="#ffffff" pop={1.25} symSize={28} />
			<Sx x={GP6.x + 25} y={GP6.y - 14} text="group 1" size={30} color={INK} weight={800} at={-1000} />
			{[{s: 'Li', y: 640}, {s: 'K', y: 760}].map(b => (
				<g key={b.s}>
					<Sx x={96} y={b.y + 34} text={b.s} size={44} color={INK} weight={800} at={-1000} />
					<rect x={176} y={b.y} width={560} height={46} rx={8} fill="#fffdf8" stroke={INK} strokeWidth={3} strokeDasharray="12 9" />
					<Sx x={760} y={b.y + 36} text="? pm" size={44} color={TEAL_T} weight={800} at={-1000} />
				</g>
			))}
			<Sx x={176} y={890} text="atomic radius" size={30} color={INK} weight={800} at={-1000} />
			<Chip x={1060} y={250} segs={[{t: 'Li or K: which is larger?'}]} at={-1000} size={44} color={INK} />
			<Rich x={1060} y={440} segs={[{t: 'Li: ', c: INK}, {t: '3 protons', c: RED_T}]} size={44} at={K6.both} />
			<Rich x={1060} y={510} segs={[{t: 'K: ', c: INK}, {t: '19 protons', c: RED_T}]} size={44} at={K6.both + 6} />
			<Write x={1060} y={580} text="16 more protons pulling" at={K6.sixteen} size={42} color={RED_T} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1440} y={770} r={64} ringFrom={K6.think} />
			{void K6.quick}{void K6.which}
		</SVG>
	);
};

// ---------- 7. down a group: one more shell each step ----------
const K7 = cues(sc('down-group'), {k: 'Potassium', going: 'Going down', one: 'one more occupied', above: 'one above', further: 'sits further', yes: 'Yes, potassium', inner: 'more inner electrons', its: 'Its core', same: 'the same as', wins: 'shell wins', so: 'So atomic', increases: 'increases'});
const S7 = 0.9;
const X7 = [190, 520, 900];
const Y7 = 560;
export const SceneDown: React.FC = () => {
	const f = useCurrentFrame();
	const draw = [-1000, K7.one, K7.above];
	const cur = stepAt(f, [[0, 0], [K7.one, 1], [K7.above, 2]]);
	const e = G1[cur];
	const shieldK = prog(f, K7.inner, 16);
	const glowK = prog(f, K7.wins, 14);
	const work = [K7.same + 4, K7.same + 14, K7.its];
	return (
		<SVG>
			<Heading text="Down group 1" at={0} />
			<Framed x={560} y={150} segs={[{t: 'potassium is larger', c: GREEN_T}]} at={K7.k} size={52} stroke={GREEN_T} />
			<Readouts x={720} y={232} w={258} items={[
				{label: 'protons', text: `${e.z}`, color: RED_T},
				{label: 'inner electrons', text: `${e.inner}`, color: BLUE_T},
				{label: 'core charge', text: `+${core(e)}`, color: AMB_T},
				{label: 'radius (pm)', text: `${e.r}`, color: TEAL_T},
			]} />
			{G1.map((g, i) => {
				const p = 1;
				const hi = i === 0 ? 0 : prog(f, draw[i], 10) * (1 - prog(f, draw[i] + 40, 14));
				if (p <= 0.005) return null;
				const R = S7 * g.r, c: [number, number] = [X7[i], Y7];
				const rings = ringsOf(g.shells.length, R);
				const oe: [number, number] = [c[0] + R, c[1]];
				return (
					<g key={g.sym} opacity={p}>
						<RAtom cx={c[0]} cy={c[1]} rings={rings} counts={g.shells} label={`${g.z}+`} nr={i === 0 ? 20 : 24} dot={7.5} labelSize={i === 0 ? 24 : 26} outerRot={0} shield={i === 2 ? shieldK : 0} ringHi={Math.max(hi, i === 2 ? glowK : 0)} />
						<Pull a={toward(c, oe, R - 9)} b={toward(c, oe, 30)} w={5.5} p={prog(f, K7.its, 14)} />
						<Ruler c={c} R={R} ang={-Math.PI / 2} at={K7.further + i * 6} />
						<Sx x={c[0]} y={Y7 + 214} text={`${g.sym}  ${g.shells.join(',')}`} size={38} color={INK} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			{/* +1 shell at each new ring */}
			{[1, 2].map(i => {
				const R = S7 * G1[i].r;
				return (
					<g key={i}>
						<Write x={X7[i]} y={Y7 - R - 26} text="+1 shell" at={draw[i] + 8} out={K7.yes} size={42} color={TEAL_T} anchor="middle" />
						<PenArrow a={[X7[i] + R * 0.5, Y7 - R * 0.5]} b={[X7[i] + R * 0.86, Y7 - R * 0.86]} at={draw[i] + 14} out={K7.yes} color={TEAL_T} bend={0} width={5} head={14} />
					</g>
				);
			})}
			<Write x={X7[2]} y={Y7 - S7 * 203 - 26} text="more shield too" at={K7.inner} size={42} color={SLATE_T} anchor="middle" />
			{/* the core-charge working under each atom */}
			{G1.map((g, i) => {
				const lhs = `${g.z} − ${g.inner} = `;
				const wl = richW([{t: lhs}], 44);
				const x0 = X7[i] - (wl + 80) / 2;
				return (
					<g key={'w' + i}>
						<Rich x={x0} y={Y7 + 292} segs={[{t: lhs}]} size={44} at={work[i]} />
						<Framed x={x0 + wl + 4} y={Y7 + 292} segs={[{t: '+1', c: AMB_T}]} at={work[i] + 6} size={44} stroke={AMB_S} tick={false} />
					</g>
				);
			})}
			<Rich x={560} y={934} segs={[{t: 'same core charge, extra shell: ', c: INK}, {t: 'further out', c: TEAL_T}]} size={38} anchor="middle" at={K7.wins} />
			{/* bars */}
			{G1_DATA.map((d, i) => {
				const at = i < 3 ? (i === 0 ? -1000 : draw[i]) : K7.increases + (i - 3) * 8;
				return <HBar key={d.sym} x={1250} y={410 + i * 82} lw={78} label={d.sym} r={d.r} k={1.45} p={prog(f, at, 18)} size={38} vSize={38} />;
			})}
			<Sx x={1250} y={372} text="atomic radius" size={30} color={INK} weight={800} at={-1000} />
			<Sx x={1250} y={870} text="Rb and Cs: data only" size={30} color={INK} weight={800} at={K7.increases + 20} />
			<Write x={1250} y={930} text="radius increases down a group" at={K7.so} size={42} color={TEAL_T} />
			{void K7.going}{void lerp}{void ePos}
		</SVG>
	);
};

// ---------- 8. saying it in an exam ----------
const K8 = cues(sc('exam-language'), {name: 'Name the', across: 'Across a', protons: 'number of protons', same: 'same shell', stronger: 'stronger effective', closer: 'closer', down: 'Down a group', extra: 'extra occupied', so: ['so the outer', 1], further: 'further from', nucleus: 'nucleus'});
type UL = {t: string; u?: boolean};
const SENT1: UL[][] = [
	[{t: 'more protons', u: true}, {t: ', '}, {t: 'same shell', u: true}, {t: ', '}, {t: 'stronger effective nuclear', u: true}],
	[{t: 'charge', u: true}, {t: ', so outer electrons '}, {t: 'pulled closer', u: true}, {t: ', '}, {t: 'smaller radius', u: true}, {t: '.'}],
];
const SENT2: UL[][] = [
	[{t: 'extra occupied shell', u: true}, {t: ', so outer electrons are'}],
	[{t: 'further from the nucleus', u: true}, {t: ', '}, {t: 'larger radius', u: true}, {t: '.'}],
];
const Sentence: React.FC<{x: number; y: number; lines: UL[][]; ats: number[]; uats: number[][]; size?: number; lh?: number}> = ({x, y, lines, ats, uats, size = 38, lh = 56}) => {
	const f = useCurrentFrame();
	return (
		<>
			{lines.map((l, i) => {
				let cx = x, k = 0;
				return (
					<g key={i}>
						<Rich x={x} y={y + i * lh} segs={l.map(s => ({t: s.t}))} size={size} weight={700} at={-1000} />
						{l.map((s, j) => {
							const w = richW([{t: s.t}], size, false, 700);
							const x0 = cx;
							cx += w;
							if (!s.u) return null;
							const at = uats[i][k++];
							const p = prog(f, at, 12);
							return p > 0.005 ? <line key={j} x1={x0} y1={y + i * lh + 10} x2={x0 + w * p} y2={y + i * lh + 10} stroke={AMB_S} strokeWidth={6} strokeLinecap="round" /> : null;
						})}
					</g>
				);
			})}
		</>
	);
};
export const SceneExam: React.FC = () => {
	const sA = 0.17, xA = (i: number) => 128 + i * 58;
	return (
		<SVG>
			<Heading text="Saying it in an exam" at={0} />
			<Write x={1180} y={150} text="say why, not just what" at={K8.name} size={42} color={INK} />
			{/* row 1: period 3 strip with its bars */}
			<rect x={96} y={210} width={1728} height={330} rx={20} fill="#fffdf8" stroke={AMB_S} strokeWidth={4} />
			{P3.map((p, i) => (
				<g key={p.sym}>
					<RAtom cx={xA(i)} cy={300} rings={ringsOf(3, sA * p.r)} counts={p.shells} nr={8} dot={3.5} ringStroke={2.5} outerRot={0} />
					<VBar x={xA(i)} y0={516} w={40} r={p.r} k={0.85} p={1} vSize={26} slot={false} />
				</g>
			))}
			<Sx x={128} y={258} text="Na" size={26} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={xA(6)} y={258} text="Cl" size={26} color={INK} anchor="middle" weight={800} at={-1000} />
			<Rich x={560} y={290} segs={[{t: 'Across a period:', c: AMB_T}]} size={52} />
			<Sentence x={560} y={380} lines={SENT1} ats={[K8.across, K8.stronger - 20]} uats={[[K8.protons, K8.same, K8.stronger], [K8.stronger + 14, K8.closer, K8.closer + 10]]} />
			{/* row 2: group 1 with its bars */}
			<rect x={96} y={570} width={1728} height={320} rx={20} fill="#fffdf8" stroke={TEAL_T} strokeWidth={4} />
			{G1.map((g, i) => {
				const R = 0.32 * g.r;
				return <RAtom key={g.sym} cx={150 + i * 130 + (i === 2 ? 20 : 0)} cy={690} rings={ringsOf(g.shells.length, R)} counts={g.shells} nr={9} dot={4} ringStroke={2.5} outerRot={0} />;
			})}
			{G1.map((g, i) => <HBar key={'b' + g.sym} x={110} y={780 + i * 34} lw={54} label={g.sym} r={g.r} k={1.2} p={1} h={24} size={26} vSize={26} />)}
			<Rich x={560} y={650} segs={[{t: 'Down a group:', c: TEAL_T}]} size={52} />
			<Sentence x={560} y={740} lines={SENT2} ats={[K8.down, K8.so]} uats={[[K8.extra], [K8.further, K8.nucleus + 8]]} />
			<Sx x={1820} y={936} text="name protons, shells and shielding" size={30} color={INK} anchor="end" weight={800} at={K8.down} />
		</SVG>
	);
};

// ---------- 9. atoms into ions ----------
const K9 = cues(sc('atoms-to-ions'), {form: 'form ions', when: 'When sodium', its: 'its one outer', loses: 'It loses the', now: 'now in the second', smaller: 'much smaller', other: 'goes the other', gains: 'It gains', seventeen: 'still has seventeen', extra: 'The extra electron', spread: 'spread out', larger: 'larger'});
const S9 = 0.9;
const NA9: [number, number] = [330, 440], CL9: [number, number] = [1590, 440];
export const SceneIons: React.FC = () => {
	const f = useCurrentFrame();
	const RNa = S9 * 166, RNaP = S9 * 102, RCl = S9 * 102, RClM = S9 * 181;
	const leaveP = prog(f, K9.its, 34);
	const shellGone = prog(f, K9.loses + 8, 20);
	const shrink = smooth(prog(f, K9.now, 30));
	const naR = [lerp(0.45 * RNa, 0.55 * RNaP, shrink), lerp(0.72 * RNa, RNaP, shrink), RNa];
	const gain = prog(f, K9.gains + 6, 30);
	const widen = smooth(prog(f, K9.spread - 6, 30));
	const clOuter = lerp(RCl, RClM, widen);
	const clR = [0.45 * RCl, 0.72 * RCl, clOuter];
	const rep = (prog(f, K9.extra + 10, 8) * (1 - prog(f, K9.larger - 10, 12))) * (0.6 + 0.4 * Math.abs(Math.sin(f * 0.25)));
	const clRot = -Math.PI / 2;
	const pts = Array.from({length: 8}, (_, j) => ePos(CL9[0], CL9[1], clOuter, 8, j, clRot));
	const isNaP = f >= K9.now + 10;
	const isClM = f >= K9.gains + 36;
	return (
		<SVG>
			<Heading text="Atoms into ions" at={0} />
			{/* table salt between them */}
			<PlateB p={SALT} cx={960} bottom={590} h={150} />
			<Rich x={960} y={644} segs={[{t: 'table salt: '}, {t: 'Na^{+}', c: RED_T}, {t: ' and '}, {t: 'Cl^{−}', c: BLUE_T}]} size={38} anchor="middle" />
			<Rich x={960} y={300} segs={[{t: 'Na  2,8,1  →  Na^{+}  2,8'}]} size={44} anchor="middle" at={K9.loses} />
			<Rich x={960} y={372} segs={[{t: 'Cl  2,8,7  →  Cl^{−}  2,8,8'}]} size={44} anchor="middle" at={K9.gains} />
			{/* sodium to the sodium ion */}
			<RAtom cx={NA9[0]} cy={NA9[1]} rings={naR} counts={[2, 8, 1]} label="11+" nr={30} dot={9} labelSize={30} outerRot={-Math.PI / 4} ringO={[1, 1, 1 - shellGone]} leave={{to: [NA9[0] + 330, NA9[1] - 260], p: leaveP}} />
			<PenRing cx={NA9[0]} cy={NA9[1]} rx={RNa + 6} ry={RNa + 6} at={K9.loses + 10} color={RED_T} seed={4} />
			<Write x={NA9[0]} y={262} text="a whole shell gone" at={K9.loses + 14} size={42} color={RED_T} anchor="middle" />
			<Sx x={NA9[0]} y={660} text={isNaP ? 'Na^{+}' : 'Na'} size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			<HBar x={96} y={710} lw={110} label="Na" r={166} k={1.3} p={prog(f, K9.smaller, 16)} vSize={44} size={40} />
			<HBar x={96} y={782} lw={110} label="Na^{+}" r={102} k={1.3} p={prog(f, K9.smaller + 8, 16)} vSize={44} size={40} />
			<Rich x={96} y={880} segs={[{t: 'cation', c: RED_T}, {t: ': whole outer shell lost'}]} size={34} at={K9.smaller + 16} />
			{/* chlorine to the chloride ion */}
			<Repel a={pts[0]} b={pts[1]} o={rep} />
			<Repel a={pts[2]} b={pts[3]} o={rep} />
			<Repel a={pts[4]} b={pts[5]} o={rep} />
			<Repel a={pts[6]} b={pts[7]} o={rep} />
			<RAtom cx={CL9[0]} cy={CL9[1]} rings={clR} counts={[2, 8, 7]} label="17+" nr={30} dot={9} labelSize={30} outerRot={clRot} extra={{n: 1, p: gain, from: [1130, 470]}} />
			<Write x={CL9[0]} y={Math.min(CL9[1] - RCl - 40, 330)} text="still 17+" at={K9.seventeen} out={K9.spread - 8} size={42} color={RED_T} anchor="middle" />
			<Write x={CL9[0]} y={CL9[1] - RClM - 24} text="more repulsion: spreads" at={K9.spread} size={42} color={BLUE_T} anchor="middle" />
			<PenArrow a={[CL9[0] + RClM * 0.6, CL9[1] + RClM * 0.6]} b={[CL9[0] + RClM * 0.82, CL9[1] + RClM * 0.82]} at={K9.spread + 10} color={BLUE_T} bend={0} width={5} head={14} />
			<PenArrow a={[CL9[0] - RClM * 0.6, CL9[1] + RClM * 0.6]} b={[CL9[0] - RClM * 0.82, CL9[1] + RClM * 0.82]} at={K9.spread + 14} color={BLUE_T} bend={0} width={5} head={14} />
			<Sx x={CL9[0]} y={660} text={isClM ? 'Cl^{−}' : 'Cl'} size={44} color={INK} anchor="middle" weight={800} at={-1000} />
			<HBar x={1230} y={710} lw={110} label="Cl" r={102} k={1.3} p={prog(f, K9.spread, 16)} vSize={44} size={40} />
			<HBar x={1230} y={782} lw={110} label="Cl^{−}" r={181} k={1.3} p={prog(f, K9.spread + 8, 16)} vSize={44} size={40} />
			<Rich x={1230} y={880} segs={[{t: 'anion', c: BLUE_T}, {t: ': same shell, more repulsion'}]} size={34} at={K9.spread + 16} />
			<Sx x={960} y={936} text="ionic radii: Shannon, 1976; measured differently from atomic radii" size={26} color={INK} anchor="middle" weight={700} at={-1000} />
			{void K9.form}{void K9.when}{void K9.other}
		</SVG>
	);
};

// ---------- 10. same electrons, different sizes ----------
const K10 = cues(sc('isoelectronic'), {so: 'So is it', look: 'Look at', ten: 'exactly ten', oxide: 'oxide', fluoride: 'fluoride', sodium: 'sodium', magnesium: 'magnesium', aluminium: 'aluminium', called: 'called isoelectronic', sizes: 'Their sizes', rises: 'protons rises', from: 'from eight', pull: 'pull the same', tighter: 'tighter', alone: 'electron count alone', protons: 'Protons and'});
const XI = (i: number) => 230 + i * 335;
const YI = 560;
export const SceneIso: React.FC = () => {
	const f = useCurrentFrame();
	const names = [K10.oxide, K10.fluoride, K10.sodium, K10.magnesium, K10.aluminium];
	const step2 = (i: number) => K10.from + Math.round(i * 7);
	const cur1 = stepAt(f, [[0, 0], ...names.map((t, i) => [t, i] as [number, number])]);
	const shrinkAt = (i: number) => K10.tighter - 30 + i * 12;
	const cur2 = stepAt(f, [[0, -1], ...ISO.map((_, i) => [step2(i), i] as [number, number])]);
	const cur3 = stepAt(f, [[0, -1], ...ISO.map((_, i) => [shrinkAt(i), i] as [number, number])]);
	const cur = cur3 >= 0 ? cur3 : cur2 >= 0 ? cur2 : cur1;
	const ion = ISO[cur];
	return (
		<SVG>
			<Heading text="Same electrons, different sizes" at={0} />
			<Readouts x={1180} y={232} w={200} dx={222} items={[
				{label: 'electrons', text: '10', color: BLUE_T},
				{label: 'protons', text: `${ion.z}`, color: RED_T},
				{label: 'radius (pm)', text: cur3 >= 0 ? `${ISO[cur3].r}` : '?', color: TEAL_T},
			]} />
			<Chip x={96} y={190} segs={[{t: 'same electrons, more protons: smaller'}]} at={K10.alone} size={44} color={AMB_S} />
			{ISO.map((s, i) => {
				const c: [number, number] = [XI(i), YI];
				const R = lerp(140, s.r, smooth(prog(f, shrinkAt(i), 20)));
				const oe: [number, number] = [c[0] + R, c[1]];
				const lit = cur === i && f >= K10.oxide;
				return (
					<g key={s.sym}>
						{lit ? <rect x={c[0] - 160} y={c[1] - 162} width={320} height={324} rx={20} fill="none" stroke={RED_T} strokeWidth={4} opacity={0.9} /> : null}
						<Sx x={c[0]} y={YI - 176} text={s.sym} size={44} color={INK} anchor="middle" weight={800} at={-1000} />
						<RAtom cx={c[0]} cy={c[1]} rings={[lerp(70, Math.max(30, 0.5 * s.r), smooth(prog(f, shrinkAt(i), 20))), R]} counts={[2, 8]} label={`${s.z}+`} nr={24} dot={7} labelSize={26} outerRot={0} />
						<Pull a={toward(c, oe, R - 8)} b={toward(c, oe, 28)} w={3 + (s.z - 7) * 1.3} p={prog(f, K10.pull + i * 6, 14)} />
						<VBar x={c[0]} y0={940} w={92} r={s.r} k={1.2} p={prog(f, shrinkAt(i) + 6, 16)} vSize={38} slot={false} />
						<rect x={c[0] - 46} y={940 - 168} width={92} height={168} rx={5} fill="none" stroke={INK} strokeWidth={2.5} strokeDasharray="8 7" opacity={prog(f, K10.tighter - 34, 10) * (1 - prog(f, shrinkAt(i) + 6, 16))} />
					</g>
				);
			})}
			{/* ten electrons each */}
			<Bracket a={[XI(0) - 130, 730]} b={[XI(4) + 130, 730]} at={K10.ten} out={K10.rises - 10} color={BLUE_T} depth={16} />
			<Write x={960} y={804} text="10 electrons each: isoelectronic" at={K10.ten + 8} out={K10.rises - 10} size={42} color={BLUE_T} anchor="middle" />
			{/* more pull */}
			<PenArrow a={[XI(0) - 40, 756]} b={[XI(4) + 40, 756]} at={K10.rises} out={K10.tighter - 34} color={RED_T} bend={0} width={6} head={20} />
			<Write x={960} y={826} text="protons 8 → 13: more pull" at={K10.rises + 10} out={K10.tighter - 34} size={42} color={RED_T} anchor="middle" />
			{void K10.so}{void K10.look}{void K10.called}{void K10.sizes}{void K10.protons}
		</SVG>
	);
};

// ---------- 11. one line to remember ----------
const K11 = cues(sc('memory-line'), {so: "So here's", across: 'Across a period', same: 'same shells', stronger: 'stronger pull', down: 'Down a group', one: 'one more shell', larger: 'larger atoms'});
const GM: PG = {x: 420, y: 206, cw: 64, ch: 64};
export const SceneMemoryLine: React.FC = () => {
	const f = useCurrentFrame();
	const rowZ = [11, 12, 13, 14, 15, 16, 17];
	return (
		<SVG>
			<Heading text="One line to remember" at={0} />
			<PGrid g={GM} tint={{s: 0.75, p: 0.75, d: 0.75, f: 0.75}} fRows={0} />
			{rowZ.map(z => <LitCell key={z} g={GM} z={z} at={-1000} color={INK} fill="#ffffff" pop={1} symSize={26} />)}
			{[3, 19].map(z => <LitCell key={z} g={GM} z={z} at={-1000} color={INK} fill="#ffffff" pop={1} symSize={26} />)}
			<DrawBox {...boxRC(GM, 3, 3, 1, 18)} at={-1000} color={AMB_S} width={6} pad={3} />
			<DrawBox {...boxRC(GM, 2, 4, 1, 1)} at={-1000} color={TEAL_T} width={6} pad={6} />
			{/* size bubbles: across the row */}
			{P3.map((p, i) => {
				const [cx, cy] = cellC(GM, p.z);
				const r = lerp(166, p.r, smooth(prog(f, K11.stronger + i * 5, 14))) * 0.19;
				return <circle key={p.sym} cx={cx} cy={cy} r={r} fill="none" stroke={AMB_S} strokeWidth={4} />;
			})}
			{/* down the column, beside it */}
			{G1.map((g, i) => {
				const [, cy] = cellC(GM, [3, 11, 19][i]);
				const r = lerp(128, g.r, smooth(prog(f, K11.one + i * 6, 14))) * 0.16;
				return <circle key={g.sym} cx={GM.x - 50} cy={cy} r={r} fill="#d6eeee" stroke={TEAL_T} strokeWidth={4} />;
			})}
			<PenArrow a={[GM.x + 10, GM.y + 3 * GM.ch + 8]} b={[GM.x + 17.6 * GM.cw, GM.y + 3 * GM.ch + 8]} at={K11.across} color={AMB_S} bend={0} width={7} head={22} />
			<Write x={GM.x + 18 * GM.cw + 20} y={GM.y + 3 * GM.ch + 22} text="smaller" at={K11.across + 12} size={42} color={AMB_T} />
			<PenArrow a={[GM.x - 104, GM.y + GM.ch + 6]} b={[GM.x - 104, GM.y + 4 * GM.ch + 30]} at={K11.down} color={TEAL_T} bend={0} width={7} head={22} />
			<Write x={GM.x - 104} y={GM.y + 4 * GM.ch + 80} text="larger" at={K11.down + 10} size={42} color={TEAL_T} anchor="middle" />
			<Fade at={-1000}>
				<rect x={140} y={700} width={1640} height={226} rx={22} fill="#fffdf8" stroke={NAVY_SAFE} strokeWidth={5} />
				<Sx x={170} y={742} text="memory aid" size={30} color={INK} hand at={-1000} />
			</Fade>
			<Write x={220} y={818} text="Across: same shells, stronger pull." at={K11.same} size={52} color={AMB_T} />
			<Write x={220} y={894} text="Down: one more shell each step." at={K11.one} size={52} color={TEAL_T} />
			{void K11.so}{void K11.larger}{void Framed}{void PlateB}{void Ruler}{void Countdown}
		</SVG>
	);
};
const NAVY_SAFE = '#24407a';
void GREEN_T;
