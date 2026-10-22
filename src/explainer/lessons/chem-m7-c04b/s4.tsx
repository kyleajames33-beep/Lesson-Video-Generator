// M7 C04b scenes 11 to 16: attempt 1 (propane + chlorine under UV light), brief feedback (substitution; the swap
// docker on carbon 1; HCl as the second product; "no HCl" crossed), attempt 2 (propyne + excess bromine), brief feedback
// (two extra bonds, two steps, 1,1,2,2-tetrabromopropane; stopping at the dibromopropene crossed), the handoff (the
// practical) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {INK, KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {AnswerChip, CHAIN_INK, Crossed, NameLbl, QCardX, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {BROM, Box, CHLOR, CT, Mol2D, Opener, PlateC, Plus, RxArrow, apt, cmol, diat, dimAt, loc, vis} from '../chem-m7-c04a/parts';
import {BRW_PAIR, hold, sc} from './common';
import {AidCards, FreeAtom, UV, UV_SOFT, withSwap} from './parts';

// ---------- attempt 1 ----------
const Q1 = ['Propane reacts with chlorine gas in the presence of UV light.', 'Identify the type of reaction, and write a balanced equation, using structural', 'formulae, for the formation of one organic product.'];
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', propane: 'Propane reacts', identify: 'Identify the', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K11.turn} />
		<QCardX lines={Q1} at={K11.turn + 6} y={170} size={42} />
		<PauseHold h={hold('attempt-1')} at={K11.pause} x={140} y={860} cx={1650} cy={850} />
		{void K11.propane}{void K11.identify}
	</Overlay>
);

// ---------- feedback 1 ----------
const K12 = cues(sc('feedback-1'), {alkane: 'Propane is an', uv: 'UV light', subst: 'substitution', swaps: 'One hydrogen swaps', write: 'C H three, C H two', plus: 'plus Cl two', gives: 'gives', name: 'one-chloropropane', hcl: 'plus H Cl', two: 'Two-chloropropane is', leaving: 'Leaving out', slip: 'classic slip', somewhere: 'somewhere'});
const PROPANE = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const SW = withSwap(PROPANE, '0l', 'Cl');
const CL2 = diat('Cl', 'Cl', 92);
const HCL = diat('H', 'Cl', 90);
export const SceneFeedback1: React.FC = () => {
	const Y = 540, s = 1.0;
	const P = {r: 270, px: 520, cl: 650, a1: 760, a2: 960, pr: 1220, p2: 1470, hc: 1610};
	const slot = apt(SW.m, SW.h, P.pr, Y, s);
	const hover: V2 = [slot[0] - 20, slot[1] - 100];
	const boxH = apt(HCL, 0, P.hc, Y, s), boxCl = apt(HCL, 1, P.hc, Y, s);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={90} size={30} under={[{line: 0, phrase: 'Propane', at: K12.alkane}, {line: 0, phrase: 'in the presence of UV light', at: K12.uv}, {line: 1, phrase: 'Identify the type of reaction', at: K12.subst}, {line: 1, phrase: 'balanced equation', at: K12.hcl}, {line: 2, phrase: 'one organic product', at: K12.hcl + 8}]} />
			<Tag x={1650} y={330} text="substitution" at={K12.subst} size={36} color={UV} fill={UV_SOFT} anchor="middle" />
			<Mol2D m={PROPANE} x={P.r} y={Y} s={s} at={K12.write} />
			<Plus x={P.px} y={Y} at={K12.plus} />
			<Mol2D m={CL2} x={P.cl} y={Y} s={s} at={K12.plus} />
			<RxArrow x1={P.a1} x2={P.a2} y={Y} at={K12.gives - 10} above={[{t: 'UV light', at: K12.gives - 4, color: UV, fill: UV_SOFT}]} />
			<Mol2D m={SW.m} x={P.pr} y={Y} s={s} at={K12.gives} hideAt={{[SW.h]: K12.gives + 14}} fly={{[SW.i]: {from: loc(apt(CL2, 0, P.cl, Y, s), P.pr, Y, s), at: K12.gives + 26, dur: 26}}} />
			<FreeAtom el="H" keys={[{at: -1, p: slot}, {at: K12.gives + 14, p: hover}, {at: K12.hcl - 14, p: boxH, dur: 26}]} at={K12.gives + 14} out={K12.hcl + 16} glow />
			<FreeAtom el="Cl" keys={[{at: -1, p: apt(CL2, 1, P.cl, Y, s)}, {at: K12.hcl - 14, p: boxCl, dur: 26}]} at={K12.hcl - 14} out={K12.hcl + 16} />
			<Plus x={P.p2} y={Y} at={K12.hcl} />
			<Mol2D m={HCL} x={P.hc} y={Y} s={s} at={K12.hcl + 12} />
			<Box x={P.hc - 100} y={Y - 56} w={200} h={112} at={K12.hcl + 12} color={UV} />
			<NameLbl x={P.pr} y={Y + 150} parts={[['1-chloro', CHLOR], ['propane', CHAIN_INK]]} at={K12.name} size={34} />
			<CT x={96} y={770} text="CH_3CH_2CH_3 + Cl_2 → CH_3CH_2CH_2Cl + HCl (UV light); 1-chloropropane (or 2-chloropropane)" size={28} color="#6b655c" at={K12.two} plain />
			<Crossed x={96} y={820} text="CH_3CH_2CH_3 + Cl_2 → CH_3CH_2CH_2Cl" at={K12.leaving} cross={K12.somewhere} note="doesn't balance: the H and one Cl leave as HCl" size={34} />
			{void K12.swaps}{void K12.slip}{void BROM}
		</Overlay>
	);
};

// ---------- attempt 2 ----------
const Q2 = ['Propyne, CH_3C≡CH, reacts with excess bromine at room temperature. Explain why', 'each molecule of propyne reacts with two molecules of bromine, and name the final', 'organic product.'];
const K13 = cues(sc('attempt-2'), {last: 'Last one', propyne: 'Propyne reacts', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K13.last} />
		<QCardX lines={Q2} at={K13.last + 6} y={170} size={40} />
		<PauseHold h={hold('attempt-2')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
		{void K13.propyne}
	</Overlay>
);

// ---------- feedback 2 ----------
const K14 = cues(sc('feedback-2'), {triple: 'triple bond', two: 'with two weaker', first: 'The first bromine', dbp: 'dibromopropene', excess: 'excess', second: 'the second bond', putting: 'putting two', name: 'two-tetrabromopropane', classic: 'classic mistake', means: 'Excess means'});
const PROPYNE = cmol([{l: 'H', u: 'H', d: 'H'}, {}, {r: 'H'}], [1, 3]);
const S1 = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'Br*'}, {ur: 'Br*', dr: 'H'}], [1, 2]);
const S1R = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'Br'}, {ur: 'Br', dr: 'H'}], [1, 2]);
const S2 = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'Br', d: 'Br*'}, {u: 'Br', d: 'Br*', r: 'H'}]);
const BR2 = diat('Br', 'Br', 96);
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const Y1 = 460, Y2 = 700, s = 0.95;
	const sl = smooth(prog(f, K14.excess, 30));
	const mv: V2 = [1180 + (290 - 1180) * sl, Y1 + (Y2 - Y1) * sl];
	const dim1 = dimAt(f, K14.excess, 0.35);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={90} size={30} under={[{line: 0, phrase: 'CH_3C≡CH', at: K14.triple}, {line: 0, phrase: 'Explain why', at: K14.two}, {line: 0, phrase: 'excess bromine', at: K14.excess}, {line: 1, phrase: 'name the final', at: K14.name}, {line: 2, phrase: 'organic product', at: K14.name + 6}]} />
			<g opacity={dim1}>
				<Mol2D m={PROPYNE} x={290} y={Y1} s={s} at={0} />
				<Opener c1={apt(PROPYNE, 1, 290, Y1, s)} c2={apt(PROPYNE, 2, 290, Y1, s)} at={K14.triple} double out={K14.first + 20} />
				<Tag x={290} y={Y1 + 70} text="2 extra bonds → 2 additions" at={K14.two} size={26} color={TEAL} fill="#dff2ef" anchor="middle" />
				<Plus x={540} y={Y1} at={K14.first - 10} />
				<Mol2D m={BR2} x={670} y={Y1} s={s} at={K14.first - 10} />
				<RxArrow x1={780} x2={960} y={Y1} at={K14.first} above={[{t: 'room temperature', at: K14.first + 6}]} />
				{f < K14.excess + 2 ? <Mol2D m={S1} x={1180} y={Y1} s={s} at={K14.first + 6} fly={{[S1.k['1u']]: {from: loc(apt(BR2, 0, 670, Y1, s), 1180, Y1, s), at: K14.first + 12, dur: 24}, [S1.k['2ur']]: {from: loc(apt(BR2, 1, 670, Y1, s), 1180, Y1, s), at: K14.first + 18, dur: 24}}} /> : <Mol2D m={S1R} x={1180} y={Y1} s={s} at={-100} o={0.6} />}
				<Sx x={1180} y={Y1 + 130} text="1,2-dibromoprop-1-ene" size={26} color="#8f897f" anchor="middle" weight={700} at={K14.dbp} />
			</g>
			{f >= K14.excess ? <Mol2D m={S1R} x={mv[0]} y={mv[1]} s={s} at={-100} /> : null}
			<Plus x={540} y={Y2} at={K14.excess + 20} />
			<Mol2D m={BR2} x={670} y={Y2} s={s} at={K14.excess + 20} />
			<RxArrow x1={780} x2={960} y={Y2} at={K14.second} above={[{t: 'excess Br_2', at: K14.second + 6, color: '#8a5a0c', fill: '#fbeec4'}]} />
			<Mol2D m={S2} x={1180} y={Y2} s={s} at={K14.second + 10} fly={{[S2.k['1d']]: {from: loc(apt(BR2, 0, 670, Y2, s), 1180, Y2, s), at: K14.putting, dur: 24}, [S2.k['2d']]: {from: loc(apt(BR2, 1, 670, Y2, s), 1180, Y2, s), at: K14.putting + 6, dur: 24}}} />
			<NameLbl x={1180} y={Y2 + 145} parts={[['1,1,2,2-tetrabromo', BROM], ['propane', CHAIN_INK]]} at={K14.name} size={36} />
			<CT x={96} y={905} text="CH_3C≡CH + 2Br_2 → CH_3CBr_2CHBr_2, 1,1,2,2-tetrabromopropane" size={28} color="#6b655c" at={K14.name + 30} plain />
			<Crossed x={96} y={930} text="final product: 1,2-dibromoprop-1-ene" at={K14.classic} cross={K14.means} note="excess Br_2: both extra bonds open" size={32} />
			{void vis}{void AnswerChip}
		</Overlay>
	);
};

// ---------- 15. Handoff ----------
const K15 = cues(sc('handoff'), {so: 'So the bonds', alkanes: 'Alkanes swap', alkenes: 'while alkenes', lose: 'lose bromine', next: 'Next,', testing: 'testing'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Alkanes swap, alkenes add, alkynes add twice." at={K15.so} size={50} y={170} color={TEAL} />
			<AidCards lit={[K15.alkanes, K15.alkenes, K15.alkenes + 10]} y={250} />
			<PlateC p={BRW_PAIR} cx={1600} top={540} h={300} o={vis(f, K15.lose)} />
			<Tag x={1600} y={860} text="alkenes and alkynes: orange → colourless" at={K15.lose + 10} size={26} anchor="middle" />
			<Tag x={760} y={700} text="Next: test unsaturation with bromine water (practical)" at={K15.next} size={38} color={TEAL} fill="#dff2ef" anchor="middle" />
			{void K15.testing}
		</Overlay>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	'Alkanes have only strong single bonds and no spare bond, so they don’t add. With a halogen and UV light they substitute: one H is swapped for a halogen, and HX is the second product. CH_3CH_3 + Br_2 → CH_3CH_2Br + HBr (UV light).',
	'UV light is the energy source, not a catalyst: it is energy, not a substance, and it is absorbed. Write "UV light" on the arrow. Substitution can repeat (CH_4 → CH_3Cl → ... → CCl_4) and happen at different carbons, so it gives a mixture: write one product + HX.',
	'Alkynes add twice (two weaker extra bonds), one piece on each carbon each time. HC≡CH + Br_2 → CHBr=CHBr (1,2-dibromoethene), then + Br_2 → CHBr_2CHBr_2 (1,1,2,2-tetrabromoethane). HC≡CH + 2H_2 → CH_3CH_3 (Ni catalyst, heat). "Excess" means both steps.',
	'Alkenes and alkynes decolourise bromine water at room temperature without UV light; alkanes don’t. The test shows a multiple bond, not which one. For an open-chain hydrocarbon with one multiple bond, use the formula: alkene CnH2n, alkyne CnH2n−2.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={28} aidTop={800} aids={['Alkanes swap, alkenes add, alkynes add twice.', 'Substitution: UV light on the arrow, HX as the second product.']} tag="substitution and alkyne addition" />
);
