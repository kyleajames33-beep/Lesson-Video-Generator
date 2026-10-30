// M7 G03 (chemistry) scenes 4a to 6: question 3 (check a student's plan for propyl butanoate): the attempt; a wrong box
// (but-1-ene gives mainly butan-2-ol, an isomer, then butanone, a dead end); a wrong arrow (distil, supposing the box
// held butan-1-ol; reflux returns butanal); the corrected chart from 1-chlorobutane; "fix only the arrow" crossed; the
// decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TaskLine, mw} from '../chem-m6-c01/parts';
import {QCardX, Tag, TickMark, qLineY} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {CarbAt} from '../chem-m7-c08a/parts';
import {FArrow, FBox} from '../chem-m7-c13/parts';
import {AnsBox, Badge} from '../chem-m7-g01/board';
import {Heading, hold, sc} from './common';
import {AMB, AnsLines, Checks, GREY, INK, INK_SOFT, NAVY, Named, RED, Ruler, Docker, Strip, StudentChart, TEAL, TEALD, cpt, eneM, ketM, olM, uA} from './board';
import type {ChartPos} from './board';

export const Q3 = ['A student planned the synthesis of propyl butanoate, CH₃CH₂CH₂COOCH₂CH₂CH₃. The starting', 'materials available were but-1-ene, 1-chlorobutane and 1-chloropropane.', "The student's flow chart is shown.", "(a) Identify TWO errors in the student's flow chart and explain the effect of each error.", '(b) Construct a corrected flow chart for the synthesis, using the available starting materials.'];
const BADGE3 = 'Check a plan';
const CW: ChartPos = {x: 170, y: 395, s: 0.85};
const GREENC = '#2f8a5b';

// ---------- 4a. Attempt ----------
const KA = cues(sc('q3-question'), {q: 'Question three', a: 'A student', id: 'Identify', then: 'Then construct', pause: 'Pause here'});
export const SceneQ3Question: React.FC = () => {
	const h = hold('q3-question');
	const gaps = [0, 0, 245];
	return (
		<>
			<Heading text="Question 3" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q3} at={KA.a} y={150} size={30} gaps={gaps} />
				<StudentChart C={{x: 190, y: qLineY(150, 30, gaps, 2) + 75, s: 0.85}} at={KA.a + 30} />
				<AnsBox x={140} y={715} w={800} label="(a)" at={KA.id + 10} />
				<AnsBox x={970} y={715} w={810} label="(b)" at={KA.then + 10} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1650} cy={840} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

const A1 = ['1. But-1-ene + water gives mainly butan-2-ol, not butan-1-ol. Butan-2-ol is secondary: it oxidises to butanone,', '    a dead end, so the main route does not reach butanoic acid.'];

// ---------- 4b. A wrong box ----------
const KB = cues(sc('q3-error1'), {check: 'Check every', says: 'The plan', ol: 'butan-1-ol', gives: 'It gives', b2: 'butan-2-ol', because: 'because', isomer: 'isomer', sec: 'secondary', oxid: 'oxidising', butanone: 'butanone', no: 'No arrow', dead: 'dead-ends'});
export const SceneQ3Error1: React.FC = () => {
	const f = useCurrentFrame();
	const lit = (k: string) => (f < KB.ol ? 1 : ['b1', 'a1', 'b2'].includes(k) ? 1 : 0.3);
	const dock = dimAt(f, KB.isomer, 0.3) * dimAt(f, KB.dead, 0.5);
	const st3 = dimAt(f, KB.dead, 0.35);
	return (
		<Overlay>
			<Badge text={BADGE3} at={6} />
			<Strip lines={Q3} size={22} under={[uA(0, 'propyl butanoate, CH₃CH₂CH₂COOCH₂CH₂CH₃', KB.check), uA(1, 'but-1-ene', KB.ol)]} />
			<StudentChart C={CW} lit={lit} ring={[{k: 'b2', at: KB.b2, n: '1'}]} />
			<g opacity={dock}>
				<Named m={eneM(4, 0)} x={300} y={720} s={0.8} name="but-1-ene" at={KB.ol} size={24} />
				<Ruler n={4} x={300} y={720} s={0.8} at={KB.ol + 10} out={KB.gives - 4} />
				<Docker n={4} x={300} y={720} s={0.8} main={1} at={KB.gives} minor={0} minorAt={KB.gives + 16} />
				<Tag x={300} y={850} text="mainly butan-2-ol" at={KB.b2 + 10} size={22} color={RED} fill="#f9e1dc" anchor="middle" />
				<g opacity={0.4}><Named m={olM(4, 0)} x={600} y={640} s={0.4} name="butan-1-ol" at={KB.b2 + 10} size={18} dy={70} /></g>
			</g>
			<g opacity={st3}>
				<Named m={olM(4, 1)} x={720} y={730} s={0.72} name="butan-2-ol" at={KB.b2} size={26} />
			</g>
			<g opacity={vis(f, KB.isomer, KB.butanone)}>
				<rect x={1060} y={610} width={700} height={170} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
				<Sx x={1410} y={680} text="butan-1-ol   vs   butan-2-ol" size={32} color={INK} anchor="middle" weight={800} at={KB.isomer} />
				<Tag x={1410} y={705} text="both C₄H₁₀O: isomers" at={KB.isomer + 10} size={24} anchor="middle" />
			</g>
			<g opacity={st3}>
				<FArrow a={[900, 740]} b={[1080, 740]} at={KB.butanone - 20} chips={['K₂Cr₂O₇ / H⁺']} size={18} />
				<CarbAt k={ketM(4, 1)} x={1240} y={730} s={0.72} at={KB.butanone} />
				<Sx x={1240} y={830} text="butanone" size={26} color={INK} anchor="middle" weight={800} at={KB.butanone} />
				<FArrow a={[1400, 740]} b={[1580, 740]} at={KB.no} color={GREY} dashed cross={KB.no + 10} />
				<Sx x={1600} y={750} text="butanoic acid" size={26} color={GREY} weight={700} at={KB.no} />
				<Tag x={1400} y={790} text="ketone: dead end" at={KB.no + 20} size={24} color={RED} fill="#f9e1dc" />
				<Tag x={1060} y={600} text="c08a: secondary → ketone" at={KB.butanone + 10} size={20} />
			</g>
			<AnsLines x={140} y={880} w={1640} label="(a)" at={KB.dead} size={22} lines={[{t: A1[0], at: KB.dead + 4, lit: true}, {t: A1[1], at: KB.dead + 20, lit: true}]} />
			<Checks ticks={{1: [KB.isomer - 40]}} />
			{void KB.says}{void KB.because}{void KB.sec}{void KB.oxid}
		</Overlay>
	);
};

// ---------- 4c. A wrong arrow ----------
const KC = cues(sc('q3-error2'), {second: 'Second error', distil: 'distil', suppose: 'Suppose', remove: 'Distilling would', butanal: 'butanal', never: 'never', make: 'To make', reflux: 'reflux', cond: 'The condenser', becomes: 'becomes'});
export const SceneQ3Error2: React.FC = () => {
	const f = useCurrentFrame();
	const g = cpt(CW, [585, 21]);
	const d = cpt(CW, [830, 21]);
	return (
		<Overlay>
			<Badge text={BADGE3} at={-100} />
			<Strip lines={Q3} size={22} under={[uA(0, 'propyl butanoate, CH₃CH₂CH₂COOCH₂CH₂CH₃', -100), uA(1, 'but-1-ene', -100), uA(3, 'TWO errors', KC.second)]} />
			<StudentChart C={CW} ring={[{k: 'b2', at: -100, n: '1'}, {k: 'distil', at: KC.distil + 10, n: '2'}]} under={KC.distil} ghost={KC.suppose} />
			<Tag x={g[0]} y={575} text="if this box were right" at={KC.suppose + 10} size={20} anchor="middle" />
			<g opacity={dimAt(f, KC.reflux, 0.4)}>
				<Tag x={d[0] + 20} y={630} text="distil → butanal (escapes as it forms)" at={KC.butanal} size={24} color={RED} fill="#f9e1dc" />
				<Tag x={d[0] + 20} y={680} text="c08a: distil → aldehyde" at={KC.butanal + 20} size={20} />
			</g>
			<Tag x={d[0] + 20} y={720} text="excess K₂Cr₂O₇ / H⁺, heat under reflux" at={KC.reflux} size={26} color={GREENC} fill="#e3f3e9" />
			<g opacity={vis(f, KC.cond)}>
				<path d={`M${d[0] - 10},${790} a28,28 0 1 1 0,1`} fill="none" stroke={GREY} strokeWidth={4} strokeDasharray="8 6" />
				<Tag x={d[0] + 40} y={770} text="condenser returns butanal: oxidised on to the acid" at={KC.cond} size={22} />
			</g>
			<AnsLines x={140} y={858} w={1640} label="(a)" at={-100} size={22} lines={[{t: '1. But-1-ene gives mainly butan-2-ol: it oxidises to butanone, a dead end.', at: -100, o: 0.5}, {t: "2. Even from butan-1-ol, distillation removes butanal as it forms, so the acid isn't made.", at: KC.becomes - 10, lit: true}, {t: '    Use excess oxidant, heat under reflux.', at: KC.becomes + 6, lit: true}]} />
			<Checks ticks={{1: [-100], 2: [KC.reflux]}} />
			{void KC.remove}{void KC.never}{void KC.make}{void d}
		</Overlay>
	);
};

// ---------- 4d. The corrected chart ----------
const KD = cues(sc('q3-fix'), {start: 'start from', aq: 'Aqueous sodium', one: 'carbon one', ol: 'butan-1-ol', excess: 'Excess acidified', acid: 'butanoic acid', other: 'The other', cp: '1-chloropropane', p1: 'propan-1-ol', est: 'Then esterify', but: 'butanoate'});
export const SceneQ3Fix: React.FC = () => {
	const A = 620, B = 800, H = 64;
	return (
		<Overlay>
			<Badge text={BADGE3} at={-100} />
			<Strip lines={Q3} size={22} under={[uA(0, 'propyl butanoate, CH₃CH₂CH₂COOCH₂CH₂CH₃', -100), uA(1, '1-chlorobutane', KD.start), uA(4, '(b) Construct a corrected flow chart', KD.start + 10)]} />
			<g opacity={0.3}><StudentChart C={CW} ring={[{k: 'b2', at: -100, n: '1'}, {k: 'distil', at: -100, n: '2'}]} /></g>
			<FBox x={96} y={A} w={300} name="1-chlorobutane" formula="CH₃CH₂CH₂CH₂Cl" at={KD.start} size={22} />
			<FArrow a={[406, A + H / 2]} b={[606, A + H / 2]} at={KD.aq} chips={['NaOH(aq)', 'heat under reflux']} dim={KD.excess} size={18} />
			<Tag x={406} y={698} text="c06: OH on C1, where the Cl was" at={KD.one} out={KD.excess} size={20} />
			<FBox x={616} y={A} w={300} name="butan-1-ol" formula="CH₃CH₂CH₂CH₂OH" at={KD.ol} size={22} edge="amber" />
			<FArrow a={[926, A + H / 2]} b={[1156, A + H / 2]} at={KD.excess} chips={['excess K₂Cr₂O₇ / H⁺', 'heat under reflux']} dim={KD.est} size={18} />
			<FBox x={1166} y={A} w={300} name="butanoic acid" formula="CH₃CH₂CH₂COOH" at={KD.acid} size={22} />
			<FBox x={96} y={B} w={300} name="1-chloropropane" formula="CH₃CH₂CH₂Cl" at={KD.cp} size={22} />
			<FArrow a={[406, B + H / 2]} b={[606, B + H / 2]} at={KD.cp + 10} chips={['NaOH(aq)', 'heat under reflux']} dim={KD.est} size={18} />
			<FBox x={616} y={B} w={300} name="propan-1-ol" formula="CH₃CH₂CH₂OH" at={KD.p1} size={22} />
			<TickMark x={935} y={B - 6} at={KD.p1 + 10} s={0.8} />
			<FArrow a={[1316, A + H + 6]} b={[1316, B - 8]} at={KD.est} />
			<Sx x={1336} y={B - 40} text="+" size={34} color={NAVY} weight={800} at={KD.est + 6} />
			<FArrow a={[926, B + H / 2]} b={[1150, B + H / 2]} at={KD.est} eq chips={['conc. H₂SO₄', 'heat under reflux']} size={18} />
			<FBox x={1160} y={B} w={620} name="propyl butanoate + H₂O" formula="CH₃CH₂CH₂COOCH₂CH₂CH₃" at={KD.but} size={22} edge="red" />
			<Tag x={1160} y={882} text="check: propyl ← propan-1-ol; butanoate ← butanoic acid" at={KD.but + 30} size={20} />
			<Checks ticks={{1: [-100], 2: [-100], 3: [KD.but]}} />
			{void KD.other}
		</Overlay>
	);
};

// ---------- 4e. The classic mistake ----------
const KE = cues(sc('q3-mistake'), {slip: 'classic slip', keep: 'Keep', butanone: 'butanone', not: 'not the', wrong: 'A wrong box'});
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const chain = 'but-1-ene → (H₂O, dilute acid, heat) → butan-2-ol → (excess K₂Cr₂O₇ / H⁺, reflux) → ';
	const cw = mw(chain, 28, true, 700);
	const bx = 130 + cw, bw = mw('butanoic acid', 28, true, 700) + 36;
	return (
		<Overlay>
			<Badge text={BADGE3} at={-100} />
			<Strip lines={Q3} size={22} under={[uA(1, 'but-1-ene', KE.keep)]} />
			<g opacity={0.3}><StudentChart C={CW} /></g>
			<g opacity={vis(f, KE.slip)}>
				<rect x={100} y={608} width={cw + bw + 60} height={64} rx={32} fill="#f1efea" stroke={RED} strokeWidth={3} />
				<Sx x={124} y={650} text={chain} size={28} color={INK_SOFT} hand at={-1000} />
				<rect x={bx} y={616} width={bw} height={48} rx={12} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} />
				<Sx x={bx + 18} y={650} text="butanoic acid" size={28} color={INK} hand at={-1000} />
			</g>
			{prog(f, KE.butanone, 8) > 0 ? <g opacity={prog(f, KE.butanone, 8)} stroke={RED} strokeWidth={7} strokeLinecap="round"><line x1={bx + 6} y1={622} x2={bx + bw - 6} y2={660} /><line x1={bx + bw - 6} y1={622} x2={bx + 6} y2={660} /></g> : null}
			<Sx x={bx + 18} y={712} text="butanone" size={32} color={RED} hand weight={700} at={KE.butanone + 8} />
			<Sx x={124} y={770} text="reflux can't fix the wrong alcohol: secondary → ketone" size={30} color={TEAL} hand at={KE.not} />
			<TaskLine text="A wrong box can hide behind a right arrow." at={KE.wrong} size={52} x={124} y={900} color={TEAL} />
			<Checks ticks={{1: [-100], 2: [-100], 3: [-100]}} />
		</Overlay>
	);
};

// ---------- 5. Decision board ----------
const KF = cues(sc('decision-board'), {so: 'So for any', carbon: 'carbon each', choose: 'Choose the', split: 'split', write: 'Write every', then: 'Then check', isomer: 'isomer', next: 'Next'});
const ROWS = [
	{c: 'Count; find the carbon', d: 'the target fixes where the OH must sit', b: 'Q1, Q3'},
	{c: 'Group on the right carbon', d: 'symmetrical alkene, or haloalkane with the halogen in place', b: 'Q1, Q3'},
	{c: 'One start, two roles', d: 'split it; keep a portion back', b: 'Q2'},
	{c: 'Conditions on every arrow', d: 'reflux, excess oxidant for an acid; ⇌ for hydration and esterification', b: 'Q1, Q2, Q3'},
	{c: 'Every box and arrow', d: 'a wrong box makes an isomer or a dead end', b: 'Q1, Q3'},
];
export const SceneBoard: React.FC = () => {
	const f = useCurrentFrame();
	const at = [KF.carbon, KF.choose, KF.split, KF.write, KF.isomer];
	return (
		<Overlay>
			<TaskLine text="Any synthesis question" at={KF.so} size={54} y={130} />
			<Sx x={140} y={220} text="Check" size={34} color={INK_SOFT} hand weight={700} at={KF.so} />
			<Sx x={600} y={220} text="What you do" size={34} color={INK_SOFT} hand weight={700} at={KF.so} />
			{ROWS.map((r, i) => {
				const nx = at[i + 1];
				const o = vis(f, at[i]) * (nx === undefined ? 1 : dimAt(f, nx, 0.5));
				if (o <= 0.01) return null;
				const y = 300 + i * 110;
				return (
					<g key={i} opacity={o}>
						<rect x={120} y={y - 50} width={1680} height={90} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
						<Sx x={140} y={y + 8} text={r.c} size={30} color={TEALD} weight={800} at={-1000} />
						<Sx x={600} y={y + 8} text={r.d} size={26} color={INK} weight={600} at={-1000} />
						<Sx x={1780} y={y + 8} text={r.b} size={22} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
					</g>
				);
			})}
			<Sx x={140} y={880} text="Work backwards to plan; write forwards to answer." size={28} color={INK_SOFT} hand at={KF.then} />
			<Tag x={1800} y={910} text="Next: how does an alkene become an addition polymer?" at={KF.next} size={28} color={TEALD} fill="#dff2ef" anchor="end" />
			{void AMB}{void GREY}
		</Overlay>
	);
};

// ---------- 6. Key notes ----------
const NOTES = [
	"Find the carbon the target's group sits on first. Oxidation and substitution keep the group on the same carbon, so the start must put the OH (or the halogen) there.",
	'A symmetrical alkene (hex-3-ene, but-2-ene) gives one alcohol. An unsymmetrical one (hex-1-ene, but-1-ene) gives mainly the OH on carbon 2. For an OH on carbon 1, start from a 1-haloalkane: NaOH(aq), heat under reflux.',
	'Example: hex-3-ene → (H₂O, dilute acid catalyst, heat, ⇌) → hexan-3-ol → (K₂Cr₂O₇/H⁺, reflux) → hexan-3-one. C₆H₁₄O + [O] → C₆H₁₂O + H₂O.',
	'No direct alkane → alcohol: alkane → (Cl₂, UV light; a mixture) → haloalkane → (NaOH(aq), reflux) → alcohol. A starting material used twice is split. Low overall yield: mixtures, an equilibrium, losses at several stages.',
	'Check every box as well as every arrow: a wrong alcohol gives an isomer or a ketone dead end; distil gives the aldehyde, excess oxidant with reflux gives the acid.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={26} aidTop={840} aids={['Work backwards to plan; write forwards to answer.', 'A wrong box can hide behind a right arrow.']} tag="organic synthesis pathway practice" />
);
