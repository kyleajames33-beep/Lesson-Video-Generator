// M7 G03 (chemistry) scenes 3a to 3e: question 2 (ethyl ethanoate from ethane only): the attempt; work backwards (the
// C13 ester cut, both halves from ethanol, used twice, no direct alkane to alcohol, through chloroethane); write it
// forwards (four reactions, the split, ⇌); why the yield is low (the yield funnel); "oxidise all the ethanol" crossed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, PauseHold, Sx, mw, smooth} from '../chem-m6-c01/parts';
import {Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {RingAt} from '../chem-m7-c06/parts';
import {FArrow, FBox, MapCard} from '../chem-m7-c13/parts';
import {Halves} from '../chem-m7-c13/s1';
import {AnsBox, Badge} from '../chem-m7-g01/board';
import {Heading, hold, sc} from './common';
import {AMB, AnsLines, Checks, GREY, INK, INK_SOFT, NAVY, RED, Strip, TEAL, TEALD, uA} from './board';

export const Q2 = ['Ethane, CH₃CH₃, is the only carbon-containing starting material available.', 'Inorganic reagents may be used.', '(a) Construct a flow chart for the synthesis of ethyl ethanoate, CH₃COOCH₂CH₃, from ethane.', 'Name each intermediate and include the reagents and conditions for every step.', '(b) Explain why the overall yield of ethyl ethanoate from ethane is expected to be low.'];
const BADGE2 = 'From one starting material';

// ---------- 3a. Attempt ----------
const KA = cues(sc('q2-question'), {q: 'Question two', a: 'A chemist', cons: 'Construct a', then: 'Then explain', pause: 'Pause here'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	return (
		<>
			<Heading text="Question 2" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q2} at={KA.a} y={175} size={32} />
				<AnsBox x={140} y={540} w={970} label="(a)" at={KA.cons + 10} />
				<AnsBox x={1140} y={540} w={640} label="(b)" at={KA.then + 10} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1650} cy={840} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 3b. Work backwards ----------
const KB = cues(sc('q2-backwards'), {work: 'Work backwards', cut: 'Cut the', single: 'single-bonded', oxy: 'oxygen', ethanoate: 'The ethanoate', ethanol: ['ethanol', 1], acid: 'Ethanoic acid comes', both: 'so both', where: 'And where', no: 'No reaction', turns: 'turns ethane', halo: 'haloalkane', chloro: 'chloroethane'});
export const SceneQ2Back: React.FC = () => {
	const f = useCurrentFrame();
	const mv = smooth(prog(f, KB.both, 24));
	const eA = 380 + mv * 240;
	return (
		<Overlay>
			<Badge text={BADGE2} at={6} />
			<Strip lines={Q2} under={[uA(2, 'ethyl ethanoate, CH₃COOCH₂CH₃', KB.work), uA(0, 'Ethane, CH₃CH₃', KB.where)]} />
			<FBox x={1330} y={400} w={450} name="ethyl ethanoate" at={KB.work} edge="red" size={26} />
			<Halves x={1555} y={510} a="CH_3CO" b="OCH_2CH_3" at={KB.cut} size={32} anchor="middle" split={KB.oxy} cut={KB.single} />
			<Tag x={1330} y={540} text="cut at the single-bonded O" at={KB.oxy} out={KB.acid} size={22} />
			<FArrow a={[1320, 430]} b={[1190, 418]} at={KB.ethanoate} color={AMB} dashed />
			<FBox x={860} y={380} w={320} name="ethanoic acid" formula="CH₃COOH" at={KB.ethanoate + 10} size={24} />
			<FArrow a={[1320, 460]} b={[750, 650]} at={KB.ethanol} color={AMB} dashed />
			<FBox x={440} y={620} w={300} name="ethanol" formula="CH₃CH₂OH" at={KB.ethanol} size={24} />
			<Tag x={1330} y={600} text="2 + 2 = 4 carbons" at={KB.ethanol + 20} size={26} color={TEALD} fill="#dff2ef" />
			<FArrow a={[850, 415]} b={[750, 415]} at={KB.acid + 20} color={AMB} dashed o={1 - prog(f, KB.both, 10)} />
			<g opacity={1 - prog(f, KB.both + 20, 8)}><FBox x={440} y={eA} w={300} name="ethanol" formula="CH₃CH₂OH" at={KB.acid + 30} size={24} /></g>
			<Tag x={860} y={480} text="acid ← primary alcohol" at={KB.acid + 30} out={KB.where} size={22} color={AMB} fill="#fbedd0" />
			<FArrow a={[850, 440]} b={[750, 640]} at={KB.both + 24} color={AMB} dashed />
			<Tag x={770} y={720} text="ethanol used twice" at={KB.both + 24} size={24} color={TEALD} fill="#dff2ef" />
			<FArrow a={[430, 655]} b={[340, 655]} at={KB.no} color={AMB} dashed cross={KB.turns} />
			<FBox x={96} y={620} w={234} name="ethane" formula="CH₃CH₃" at={KB.no} size={24} />
			<Tag x={96} y={560} text="no direct alkane → alcohol" at={KB.turns + 10} size={22} color={RED} fill="#f9e1dc" />
			<FBox x={300} y={830} w={330} name="chloroethane" formula="CH₃CH₂Cl" at={KB.chloro} size={24} glow={KB.chloro} />
			<FArrow a={[520, 700]} b={[480, 822]} at={KB.chloro} color={AMB} dashed />
			<FArrow a={[300, 860]} b={[220, 702]} at={KB.chloro + 10} color={AMB} dashed />
			<Tag x={660} y={858} text="c04b, c06" at={KB.chloro + 20} size={20} />
			<MapCard amber={{est: KB.oxy, alacid: KB.acid, sub: KB.chloro, uv: KB.chloro + 12}} />
			<Checks ticks={{0: [KB.ethanol + 20]}} />
			{void KB.halo}
		</Overlay>
	);
};

// ---------- 3c. Write it forwards ----------
const KC = cues(sc('q2-forwards'), {now: 'Now write', ethane: 'Ethane and', uv: 'U V', mix: 'mixture', heat: 'Heat the', naoh: 'aqueous sodium', ethanol: 'ethanol', split: 'split', reflux: 'Reflux one', acid: 'ethanoic acid', fin: 'Finally', conc: 'concentrated', eqm: 'equilibrium', arrow: 'double arrow'});
export type FT = {e: number; a1: number; c: number; a2: number; et: number; split: number; p1: number; a3: number; ac: number; p2: number; j: number; fin: number; dimC?: boolean};
/** Q2's branched flow chart (box (a)). */
export const ChartQ2: React.FC<{T: FT}> = ({T}) => {
	const f = useCurrentFrame();
	const U = 400, M = 640, D = 840, H = 64;
	const sp = vis(f, T.split);
	return (
		<g>
			<FBox x={96} y={U} w={230} name="ethane" formula="CH₃CH₃" at={T.e} size={22} />
			<FArrow a={[336, U + H / 2]} b={[566, U + H / 2]} at={T.a1} chips={['Cl₂', 'UV light']} dim={T.dimC ? T.a2 : undefined} size={18} />
			<FBox x={576} y={U} w={280} name="chloroethane" formula="CH₃CH₂Cl" at={T.c} size={22} />
			<FArrow a={[866, U + H / 2]} b={[1096, U + H / 2]} at={T.a2} chips={['NaOH(aq)', 'heat under reflux']} dim={T.dimC ? T.a3 : undefined} size={18} />
			<FBox x={1106} y={U} w={260} name="ethanol" formula="CH₃CH₂OH" at={T.et} size={22} />
			<g opacity={sp} fill="none" stroke={NAVY} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
				<path d={`M1236,${U + H + 6} L1236,${U + H + 40} L460,${U + H + 40} L460,${D + 32} L548,${D + 32}`} strokeDasharray={`${2000 * prog(f, T.split, 30)} 3000`} />
				<path d={`M460,${M + 32} L548,${M + 32}`} opacity={prog(f, T.split + 20, 8)} />
				<path d={`M536,${M + 22} L548,${M + 32} L536,${M + 42} M536,${D + 22} L548,${D + 32} L536,${D + 42}`} opacity={prog(f, T.split + 26, 8)} />
			</g>
			<FBox x={556} y={M} w={250} name="ethanol (portion 1)" at={T.p1} size={22} />
			<FArrow a={[816, M + 21]} b={[1046, M + 21]} at={T.a3} chips={['excess K₂Cr₂O₇ / H⁺', 'heat under reflux']} dim={T.dimC ? T.j : undefined} size={18} />
			<FBox x={1056} y={M - 10} w={280} name="ethanoic acid" formula="CH₃COOH" at={T.ac} size={22} />
			<FBox x={556} y={D} w={250} name="ethanol (the rest)" at={T.p2} size={22} />
			<FArrow a={[1196, M + 58]} b={[1196, D - 6]} at={T.j} />
			<Sx x={1214} y={(M + D) / 2 + 40} text="+" size={34} color={NAVY} weight={800} at={T.j + 6} />
			<FArrow a={[816, D + 21]} b={[1100, D + 21]} at={T.j} eq chips={['conc. H₂SO₄ (a few drops)', 'heat under reflux']} size={18} />
			<FBox x={1110} y={D - 10} w={420} name="ethyl ethanoate + H₂O" formula="CH₃COOCH₂CH₃" at={T.fin} size={22} edge="red" />
		</g>
	);
};
export const SceneQ2Forwards: React.FC = () => {
	const f = useCurrentFrame();
	const pl = Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - KC.arrow) / 30)) * Math.PI));
	return (
		<Overlay>
			<Badge text={BADGE2} at={-100} />
			<Strip lines={Q2} under={[uA(2, 'ethyl ethanoate, CH₃COOCH₂CH₃', -100), uA(0, 'Ethane, CH₃CH₃', KC.ethane), uA(1, 'Inorganic reagents may be used.', KC.uv), uA(3, 'Name each intermediate', KC.heat)]} />
			<ChartQ2 T={{e: KC.now, a1: KC.uv, c: KC.ethane + 82, a2: KC.heat, et: KC.ethanol, split: KC.split, p1: KC.split + 30, a3: KC.reflux, ac: KC.acid, p2: KC.split + 36, j: KC.fin, fin: KC.conc + 20, dimC: true}} />
			<Tag x={336} y={480} text="mixture: separate the chloroethane (+ HCl)" at={KC.mix} out={KC.heat + 30} size={20} />
			<Tag x={576} y={480} text="intermediate" at={KC.heat + 46} out={KC.split} size={20} color={AMB} fill="#fbedd0" />
			<Tag x={96} y={740} text="split: keep a portion back" at={KC.split + 10} size={24} color={TEALD} fill="#dff2ef" />
			<g transform={`translate(1650,878) scale(${1 + 0.25 * pl}) translate(-1650,-878)`}><Tag x={1550} y={858} text="equilibrium: ⇌" at={KC.eqm} size={24} color={NAVY} fill="#e7edf8" /></g>
			<Checks ticks={{0: [-100], 2: [KC.arrow]}} />
		</Overlay>
	);
};

// ---------- 3d. Why so little ester ----------
const KD = cues(sc('q2-yield'), {part: 'Part b', why: 'Why is', uv: 'U V', chloro: 'chloroethane', est: 'Esterification', comp: 'completion', some: 'some product', losses: 'losses', long: 'A long'});
const STEPS = ['Cl₂, UV', 'NaOH(aq)', 'K₂Cr₂O₇ / H⁺', 'ester ⇌'];
export const SceneQ2Yield: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 150, SW = 220, Y = 470;
	const xs = STEPS.map((_, i) => X0 + i * SW);
	const fan = vis(f, KD.chloro);
	const bar = prog(f, KD.comp, 30);
	return (
		<Overlay>
			<Badge text={BADGE2} at={-100} />
			<Strip lines={Q2} under={[uA(4, '(b) Explain why the overall yield', KD.part)]} />
			<g opacity={0.5}><g transform="translate(1180,350) scale(0.36) translate(-96,-360)"><ChartQ2 T={{e: -100, a1: -100, c: -100, a2: -100, et: -100, split: -100, p1: -100, a3: -100, ac: -100, p2: -100, j: -100, fin: -100}} /></g></g>
			<Sx x={X0} y={420} text="ethane → → → ethyl ethanoate" size={26} color={INK_SOFT} hand at={KD.why} />
			{STEPS.map((s, i) => (
				<g key={i}>
					<FArrow a={[xs[i] + 10, Y]} b={[xs[i] + SW - 20, Y]} at={KD.why + 6 + i * 6} eq={i === 3} color={i === 3 && f >= KD.est ? NAVY : GREY} />
					<Sx x={xs[i] + SW / 2 - 5} y={Y + 36} text={s} size={18} color={INK_SOFT} anchor="middle" weight={700} at={KD.why + 6 + i * 6} />
					{[0, 1].map(k => { const t0 = KD.losses + i * 8 + k * 30; const q = prog(f, t0, 26); return q > 0.01 ? <circle key={k} cx={xs[i] + SW / 2 + (k ? 18 : -18)} cy={Y + 20 + 60 * q} r={8} fill={GREY} opacity={q < 1 ? 1 : 0.7} /> : null; })}
				</g>
			))}
			<g opacity={fan * dimAt(f, KD.est, 0.55)}>
				{[['CH₃CH₂Cl', true], ['CH₂ClCH₂Cl', false], ['CH₃CHCl₂', false]].map(([t, b], i) => (
					<g key={i} opacity={prog(f, KD.chloro + i * 6, 10)}>
						<path d={`M${xs[0] + SW / 2},${Y + 50} L${X0 + 30 + i * 170 + 60},${Y + 130}`} stroke={GREY} strokeWidth={3} fill="none" />
						<Tag x={X0 + 30 + i * 170} y={Y + 132} text={t as string} at={-100} size={20} color={b ? INK : GREY} fill={b ? '#fffdf8' : '#f1efea'} />
					</g>
				))}
				<Tag x={X0} y={Y + 200} text="more chlorines: a mixture" at={KD.chloro + 20} size={22} />
			</g>
			<g opacity={vis(f, KD.comp - 10)}>
				<rect x={xs[3] + 10} y={Y + 140} width={180} height={34} rx={8} fill="none" stroke={NAVY} strokeWidth={3} />
				<rect x={xs[3] + 13} y={Y + 143} width={174 * 0.55 * bar} height={28} rx={6} fill="#9ab8d9" />
				<Tag x={xs[3] - 40} y={Y + 190} text="equilibrium: not complete" at={KD.comp} size={22} color={NAVY} fill="#e7edf8" />
			</g>
			<Tag x={X0 + 440} y={Y + 250} text="losses at several stages" at={KD.losses + 10} size={22} />
			<AnsLines x={140} y={830} w={1640} label="(b)" at={KD.chloro} lh={40} lines={[{t: 'UV substitution gives a mixture: only part is chloroethane.', at: KD.chloro + 20, lit: true}, {t: 'Esterification is an equilibrium: incomplete.', at: KD.comp + 20, lit: true}, {t: 'Product is lost at several stages.', at: KD.losses + 20, lit: true}]} />
			<Checks ticks={{0: [-100], 2: [-100], 3: [KD.losses + 20]}} />
			{void KD.uv}{void KD.some}{void KD.long}{void TEAL}
		</Overlay>
	);
};

// ---------- 3e. The classic mistake ----------
const KE = cues(sc('q2-mistake'), {slip: 'classic slip', all: 'all', then: 'Then', ester: 'The ester', keep: 'keep a'});
export const SceneQ2Mistake: React.FC = () => {
	const text = 'all ethanol → ethanoic acid → + ? → ester';
	const pre = 'all ethanol → ethanoic acid → ';
	const rx = 160 + 26 + mw(pre, 40, true, 700) + mw('+ ?', 40, true, 700) / 2;
	return (
		<Overlay>
			<Badge text={BADGE2} at={-100} />
			<Strip lines={Q2} under={[uA(2, 'ethyl ethanoate, CH₃COOCH₂CH₃', -100)]} />
			<Crossed x={160} y={460} text={text} at={KE.slip} cross={KE.then} note="the ester needs the acid and the alcohol: keep some ethanol back" size={40} />
			<RingAt c={[rx, 490]} rx={50} ry={34} at={KE.all} color={RED} />
			<Tag x={160} y={680} text="split the ethanol: oxidise one portion, keep the rest to join" at={KE.keep} size={28} color={TEALD} fill="#dff2ef" />
			<Checks ticks={{0: [-100], 2: [-100], 3: [-100]}} />
			{void KE.ester}{void INK}
		</Overlay>
	);
};
