// M7 P01 scenes 15 to 20: attempt 1 (describe and explain the alkene boiling points; the table stays on screen), brief
// feedback (shrinking steps, intramolecular against intermolecular, "stronger covalent bonds" crossed), attempt 2
// (evaluate a heating plan with a branched isomer), brief feedback (two changes; flame near vapour; the evaporation
// set-up instead; "a smaller flame" crossed), the decision rule with the handoff, and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, KeyNotesBoard, Overlay, PauseHold, Sx, TaskLine, VCard} from '../chem-m6-p02/parts';
import {BRANCH_INK, Crossed, MULTI, QCardX, Skel, Tag, zig} from '../chem-m7-c01/molecules';
import type {Bond} from '../chem-m7-c01/molecules';
import {PlateC, dimAt, vis} from '../chem-m7-c04a/parts';
import {BUNSEN, TUBE, hold, sc} from './common';
import {GREENC, HAZ, INK, INK_SOFT, SetUp, SkelSmall, TEAL, Wisps} from './parts';

const QY = 175, QS = 34, SY = 70, SS = 26;
/** Alkene skeletal: n carbons, the first bond double (teal). */
const Ene: React.FC<{n: number; x: number; y: number; at: number; dx?: number}> = ({n, x, y, at, dx = 40}) => {
	const pts = zig(n, x - ((n - 1) * dx) / 2, y, dx, 24);
	const bonds: Bond[] = Array.from({length: n - 1}, (_, i) => (i === 0 ? {a: 0, b: 1, order: 2 as const, color: MULTI} : {a: i, b: i + 1}));
	return <Skel pts={pts} bonds={bonds} at={at} stagger={2} width={4} />;
};
const ALK = [{n: 'but-1-ene', c: 4, v: '−6.3 °C'}, {n: 'pent-1-ene', c: 5, v: '30.0 °C'}, {n: 'hex-1-ene', c: 6, v: '63.5 °C'}, {n: 'hept-1-ene', c: 7, v: '93.6 °C'}];
const TX = [330, 710, 1090, 1470];
/** The alkene table (name, skeletal, value); `y` is the box top. under[i]: value i underlined. */
const AlkTable: React.FC<{y: number; at: number; under?: number[]; steps?: number[]}> = ({y, at, under = [], steps = []}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={140} y={y} width={1640} height={270} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			{ALK.map((a, i) => (
				<g key={i}>
					<Sx x={TX[i]} y={y + 60} text={a.n} size={32} color={INK} anchor="middle" weight={700} at={-1000} />
					<Ene n={a.c} x={TX[i]} y={y + 130} at={at + i * 6} />
					<Sx x={TX[i]} y={y + 225} text={a.v} size={40} color={INK} anchor="middle" weight={800} at={-1000} />
					{under[i] !== undefined ? <DrawPath d={`M${TX[i] - 80},${y + 240} L${TX[i] + 80},${y + 240}`} at={under[i]} dur={10} color="#2c4a7c" width={4} /> : null}
				</g>
			))}
			{steps.map((s, i) => <Sx key={'s' + i} x={(TX[i] + TX[i + 1]) / 2} y={y + 180} text={['+36.3', '+33.5', '+30.1'][i]} size={32} color={TEAL} anchor="middle" weight={800} at={s} />)}
		</g>
	);
};

// ---------- 15. Attempt 1 ----------
const Q1 = ['The table shows the normal boiling points of four straight-chain alkenes. Describe the', 'trend in boiling point and explain it with reference to the intramolecular and', 'intermolecular bonding present.'];
const K15 = cues(sc('attempt-1'), {turn: 'Your turn', table: 'The table', describe: 'Describe the', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K15.turn} />
		<QCardX lines={Q1} at={K15.table} y={QY} size={QS} />
		<AlkTable y={440} at={K15.table + 20} />
		<PauseHold h={hold('attempt-1')} at={K15.pause} x={140} y={860} cx={1650} cy={850} />
		{void K15.describe}
	</Overlay>
);

// ---------- 16. Feedback 1 ----------
const K16 = cues(sc('feedback-1'), {rises: 'rises with', smaller: 'smaller step', s36: 'thirty six', s34: 'thirty four', s30: ['thirty degrees', 1], inside: 'Inside each', unbroken: 'unbroken.', between: 'Between molecules', stronger: 'stronger,', energy: 'more energy', longer: 'Longer', misses: 'misses'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={SS} under={[{line: 1, phrase: 'trend in boiling point', at: K16.rises}, {line: 1, phrase: 'intramolecular', at: K16.unbroken}, {line: 2, phrase: 'intermolecular', at: K16.stronger}]} />
			<AlkTable y={290} at={-100} under={[K16.rises, K16.rises + 8, K16.rises + 16, K16.rises + 24]} steps={[K16.s36, K16.s34, K16.s30]} />
			<Tag x={1500} y={575} text="rises; steps shrink" at={K16.s30 + 14} size={28} color={TEAL} fill="#dff2ef" o={dimAt(f, K16.unbroken, 0.5)} />
			<g opacity={dimAt(f, K16.stronger, 0.45)}>
				<Sx x={140} y={680} text="intramolecular: C–C, C=C and C–H covalent bonds; not broken on boiling" size={32} color={GREENC} weight={700} at={K16.unbroken} />
			</g>
			<g opacity={dimAt(f, K16.longer, 0.5)}>
				<Sx x={140} y={750} text="intermolecular: dispersion forces; +CH_2 → more electrons, more contact" size={32} color="#2d6f9e" weight={700} at={K16.stronger} />
				<Sx x={140} y={796} text="→ stronger forces → more energy to separate → higher boiling point" size={32} color="#2d6f9e" weight={700} at={K16.energy} />
			</g>
			<Crossed x={140} y={850} text="longer chains have stronger covalent bonds" at={K16.longer} cross={K16.misses} note="boiling separates molecules; covalent bonds stay" size={34} />
			{void K16.smaller}{void K16.inside}{void K16.between}
		</Overlay>
	);
};

// ---------- 17. Attempt 2 ----------
const Q2 = ['A student plans to find the effect of chain length on volatility by heating pentane, hexane', 'and 2-methylpentane in an open test tube over a Bunsen burner and recording the temperature', 'at which each liquid boils. Evaluate the validity and safety of this plan.'];
const K17 = cues(sc('attempt-2'), {more: 'One more', student: 'A student', evaluate: 'Evaluate the', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Sx x={96} y={130} text="One more" size={56} color={INK} hand at={K17.more} />
			<QCardX lines={Q2} at={K17.student} y={QY} size={32} />
			<g opacity={vis(f, K17.student + 30)}>
				<PlateC p={TUBE} cx={1000} top={440} h={190} />
				<Sx x={1000} y={665} text="sample" size={26} color={INK_SOFT} anchor="middle" weight={700} at={-1000} />
				<PlateC p={BUNSEN} cx={1000} top={690} h={160} />
			</g>
			<PauseHold h={hold('attempt-2')} at={K17.pause} x={140} y={860} cx={1650} cy={850} />
			{void K17.evaluate}
		</Overlay>
	);
};

// ---------- 18. Feedback 2 ----------
const K18 = cues(sc('feedback-2'), {plan: "The plan can't", safe: "isn't safe", methyl: 'Two-methylpentane', branched: 'branched,', shape: 'shape as', flame: 'open flame', fire: 'fire,', pentane: 'with pentane', thirty: 'thirty six', instead: 'Instead,', published: 'published', smaller: 'A smaller', fix: "doesn't fix"});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const fl = vis(f, K18.fire, K18.fire + 40, 8);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={SS} under={[{line: 1, phrase: '2-methylpentane', at: K18.branched}, {line: 1, phrase: 'open test tube', at: K18.flame}, {line: 1, phrase: 'Bunsen burner', at: K18.fire}, {line: 0, phrase: 'pentane', at: K18.pentane}, {line: 2, phrase: 'Evaluate the validity and safety', at: K18.plan}]} />
			<g opacity={vis(f, K18.methyl) * dimAt(f, K18.instead, 0.0)}>
				<SkelSmall n={6} x={170} y={400} dx={56} dy={32} at={K18.methyl} />
				<Sx x={310} y={480} text="hexane" size={28} color={INK} anchor="middle" weight={700} at={K18.methyl} />
				<SkelSmall n={5} br={1} x={560} y={410} dx={56} dy={32} at={K18.branched} />
				<Sx x={680} y={480} text="2-methylpentane" size={28} color={BRANCH_INK} anchor="middle" weight={700} at={K18.branched} />
				<Tag x={420} y={520} text="two changes: length and shape" at={K18.shape} size={28} color={BRANCH_INK} fill="#fff3d6" anchor="middle" />
			</g>
			<g opacity={vis(f, K18.flame) * dimAt(f, K18.instead, 0)}>
				<rect x={1270} y={450} width={60} height={200} rx={26} fill="#e8f1f8" stroke={INK} strokeWidth={4} />
				<DrawPath d="M1335,455 C1420,470 1420,700 1330,760" at={K18.flame + 10} dur={20} color={INK_SOFT} width={3} dash="8 7" />
				<path d="M1300,790 C1265,750 1280,720 1300,695 C1320,720 1335,750 1300,790 Z" fill="#9cc8e6" stroke={INK_SOFT} strokeWidth={3} />
				<Wisps x={1300} y={455} at={K18.flame} n={3} lean={0.5} dots={false} />
				{fl > 0.01 ? <circle cx={1300} cy={720} r={55 * fl} fill={HAZ} opacity={0.5 * fl} /> : null}
				<Tag x={1540} y={600} text="pentane: boils at 36 °C" at={K18.thirty} size={28} color={HAZ} fill="#fbe9e2" anchor="middle" />
			</g>
			<g transform="translate(60,300) scale(0.42)"><SetUp at={K18.instead} hood={K18.instead} hoodO={0.8} wisps={{at: K18.instead}} /></g>
			<g opacity={vis(f, K18.instead + 10)}>
				<rect x={640} y={560} width={1200} height={150} rx={18} fill="#e3f3e9" stroke={GREENC} strokeWidth={3} />
				<Sx x={670} y={615} text="not valid for chain length (branched isomer changes shape too);" size={28} color="#1f6b44" weight={800} at={-1000} />
				<Sx x={670} y={655} text="not safe (flame + flammable vapour)." size={28} color="#1f6b44" weight={800} at={-1000} />
				<Sx x={670} y={695} text="Instead: straight chains, evaporative cooling, no flames, fume cupboard" size={26} color="#1f6b44" weight={600} at={K18.published - 20} />
			</g>
			<Crossed x={640} y={790} text="use a smaller flame" at={K18.smaller} cross={K18.fix} note="any flame can ignite the vapour" size={34} />
			{void K18.safe}{void K18.pentane}
		</Overlay>
	);
};

// ---------- 19. Decision rule ----------
const K19 = cues(sc('decision-rule'), {choose: 'choose straight-chain', test: 'test a', keep: 'keep everything', repeat: 'repeat,', back: 'back it', explain: 'Then explain', not: 'not the bonds', next: 'Next:'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="The plan, in five lines" at={0} size={54} y={130} />
			<VCard x={140} y={180} w={1640} h={480} title="Investigating a homologous series" titleAt={K19.choose} at={K19.choose} lh={74} lines={[
				{t: '1  Straight chains, one series: only length changes.', at: K19.choose, size: 36},
				{t: '2  No-flame property: evaporative cooling (ΔT).', at: K19.test, size: 36},
				{t: '3  Control paper, soak, start temperature, air flow; 3 trials.', at: K19.keep, size: 36},
				{t: '4  Extend with data-book boiling points.', at: K19.back, size: 36},
				{t: '5  Explain: intermolecular forces, not covalent bonds.', at: K19.explain, size: 36},
			]} />
			<g opacity={vis(f, K19.next)}>
				<rect x={960} y={740} width={820} height={130} rx={20} fill="#dff2ef" stroke={TEAL} strokeWidth={3} />
				<Skel pts={[[1010, 820], [1060, 790], [1110, 820], [1160, 790]]} bonds={[{a: 0, b: 1}, {a: 1, b: 2, order: 2, color: MULTI}, {a: 2, b: 3}]} at={K19.next} width={5} />
				<Sx x={1200} y={790} text="Next:" size={30} color={TEAL} hand at={-1000} />
				<Sx x={1200} y={838} text="what can add across a C=C bond?" size={34} color={INK} weight={700} at={-1000} />
			</g>
			{void K19.repeat}{void K19.not}
		</Overlay>
	);
};

// ---------- 20. Key notes ----------
const NOTES = [
	'Compare straight-chain members of one series so only chain length changes: heptane (C_7), octane (C_8), nonane (C_9), all liquids at 25 °C. Not methane to butane (gases), not pentane (boils at 36 °C, extremely flammable), not hexane (repeated exposure can damage nerves, so substitute), not branched isomers.',
	'Method: filter-paper sleeve on a temperature probe; soak 30 s; lift out; log until the lowest reading; ΔT = start − lowest; 3 trials each; fume cupboard. Controlled: paper size, soak time, start temperature, position and air flow.',
	'Results: mean ΔT heptane 6.0 °C, octane 2.2 °C, nonane 0.7 °C. Data-book boiling points (101.3 kPa) rise at every step, but the steps shrink (+72.9 °C C1→C2 to +25.2 °C C8→C9). Higher boiling point, smaller drop.',
	'Bonding: evaporating and boiling break no covalent bonds (intramolecular, the same in every member). Each CH_2 adds electrons and contact → stronger dispersion forces (intermolecular) → fewer molecules escape → slower evaporation, higher boiling point.',
	'Valid if only chain length changes; reliable (each set within 0.4 °C); accuracy: check the probe against a calibrated thermometer (the ranking matching data-book values supports the conclusion, but it is agreement, not accuracy). Limits: ΔT compares evaporation, it is not a boiling point; air flow and paper cause scatter; straight chains only.',
	'Risk: heptane and octane highly flammable (H225), nonane flammable (H226): no flames or hot plates; hexane substituted (H372, nerve damage); fume cupboard; glasses; stoppered small volumes; leftovers into the labelled organic waste container, never the sink.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={24} aidTop={862} aids={['Longer chain, smaller chill.']} tag="same series, straight chains, same conditions" />
);
