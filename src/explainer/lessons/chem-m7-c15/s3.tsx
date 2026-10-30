// M7 C15 scenes 11 to 16: attempt 1 (PBS repeat unit; link and by-product), brief feedback, attempt 2 (nylon 6,10
// monomers; melting against HDPE), brief feedback, the handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, QCardX} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {vis} from '../chem-m7-c04a/parts';
import {Plate} from '../chem-m7-c06/parts';
import {HDPE, OBJ, hold, sc} from './common';
import {CCount, INK, Insert, JoinPair, PolyBox, Ring2, Row, T, WATER, joinGeo, rep, rowGeo} from './parts';
import type {Tok} from './parts';

const AM = '#c98a1b';

// ---------- 11. Attempt 1 ----------
export const QA1 = ['Butane-1,4-diol, HO(CH₂)₄OH, reacts with butanedioic acid, HOOC(CH₂)₂COOH,', 'to form a condensation polymer.', '(a) Draw the repeat unit of this polymer.', '(b) Name the type of link formed and the other product of the reaction.'];
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', a: 'Butane one', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K11.turn} />
		<QCardX lines={QA1} at={K11.a} y={200} size={34} />
		<PauseHold h={hold('attempt-1')} at={K11.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 12. Feedback 1 ----------
const BDO: Tok[] = [T.H, T.O, ...rep(T.CH2, 4), T.O, T.H];
const SUC: Tok[] = [T.H, T.O, T.CO, T.CH2, T.CH2, T.CO, T.O, T.H];
const PBS: Tok[] = [T.O, ...rep(T.CH2, 4), T.O, T.CO, T.CH2, T.CH2, T.CO];
const K12 = cues(sc('feedback-1'), {join: 'Join the', oxygen: 'oxygen', water: 'water leaves', so: 'So the repeat', ester: 'ester links', trap: 'trap', gone: 'That water'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const X = 150, Y = 490, S = 0.75;
	const pg = joinGeo(BDO, SUC, X, Y, S);
	const sw = K12.so;
	const ruX = pg.cx[1] - pg.hw[1] - 50 * S;
	const rg = rowGeo(PBS, ruX, Y, S, 'start', 50, 50);
	return (
		<Overlay>
			<QCardX lines={QA1} at={-100} y={60} size={28} under={[{line: 0, phrase: 'Butane-1,4-diol, HO(CH₂)₄OH', at: K12.oxygen, color: AM}, {line: 0, phrase: 'butanedioic acid, HOOC(CH₂)₂COOH', at: K12.oxygen + 8, color: AM}, {line: 3, phrase: 'type of link', at: K12.ester, color: AM}, {line: 3, phrase: 'other product', at: K12.ester + 20, color: AM}]} />
			<g opacity={1 - prog(f, sw, 8)}>
				<JoinPair L={BDO} R={SUC} x={X} y={Y} s={S} at={0} T={{glowR: K12.join, glowL: K12.oxygen, join: K12.water - 10}} water={[pg.mid(6)[0], 640]} />
			</g>
			<Row toks={PBS} x={ruX} y={Y} s={S} at={sw - 2} contL={50} contR={50} br={{a: 0, b: 9, at: sw + 4}} />
			<Ring2 c={[(rg.cx[5] + rg.cx[6]) / 2, Y - 14]} rx={74} ry={62} at={K12.ester} />
			<Ring2 c={[rg.R + 18, Y - 14]} rx={64} ry={62} at={K12.ester + 8} />
			<AnswerChip x={150} y={640} text="ester links; water" at={K12.ester + 10} size={34} />
			<Crossed x={140} y={790} text="[–O–(CH₂)₄–O–CO–(CH₂)₂–CO–OH]ₙ" at={K12.trap - 24} cross={K12.trap + 6} note="no OH inside the brackets: that water has gone" size={32} />
			{void K12.gone}
		</Overlay>
	);
};

// ---------- 13. Attempt 2 ----------
export const QA2 = ['A polyamide has the repeat unit [–NH–(CH₂)₆–NH–CO–(CH₂)₈–CO–]ₙ.', '(a) Identify the two monomers used to make this polymer.', '(b) This polyamide melts at a much higher temperature than high-density polyethylene', '(HDPE). Explain this difference in terms of the forces between the polymer chains.'];
const K13 = cues(sc('attempt-2'), {last: 'Last one', a: 'A polyamide', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K13.last} />
		<QCardX lines={QA2} at={K13.a} y={200} size={34} />
		<PauseHold h={hold('attempt-2')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 14. Feedback 2 ----------
const N610: Tok[] = [T.NH, {l: '(CH₂)₆'}, T.NH, T.CO, {l: '(CH₂)₈'}, T.CO];
const DIAM: Tok[] = [T.H, T.NH, ...rep(T.CH2, 6), T.NH, T.H];
const SEB: Tok[] = [T.H, T.O, T.CO, ...rep(T.CH2, 8), T.CO, T.O, T.H];
const K14 = cues(sc('feedback-2'), {add: 'Add the water', amide: 'amide', gives: 'That gives', ten: 'ten carbons', its: 'Its chains', disp: 'only dispersion', trap: 'trap', leaves: 'It leaves'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 430;
	const g = rowGeo(N610, 960, Y, 0.95, 'middle', 50, 50);
	const swap = K14.gives - 4;
	const dg = rowGeo(DIAM, 100, Y, 0.62);
	const ag = rowGeo(SEB, 740, Y, 0.62);
	const cAt = Math.max(swap + 30, K14.ten - 56);
	return (
		<Overlay>
			<QCardX lines={QA2} at={-100} y={60} size={26} under={[{line: 0, phrase: 'repeat unit', at: K14.amide, color: AM}, {line: 1, phrase: 'Identify the two monomers', at: K14.amide + 10, color: AM}, {line: 2, phrase: 'much higher temperature', at: K14.disp, color: AM}, {line: 3, phrase: 'forces between the polymer chains', at: K14.disp + 10, color: AM}]} />
			<g opacity={1 - prog(f, swap + 10, 10)}>
				<Row toks={N610} x={g.x0} y={Y} s={0.95} at={-100} contL={50} contR={50} br={{a: 0, b: 5, at: -100, out: K14.amide + 50}} />
				<Insert p={g.mid(2)} cP={[g.cx[3] + 34, Y + 66]} oP={[g.cx[2] - 26, Y + 66]} at={K14.amide - 6} />
				<Insert p={g.mid(5)} cP={[g.R + 44, Y + 66]} oP={[g.L - 30, Y + 66]} at={K14.amide + 6} />
			</g>
			<g opacity={prog(f, swap, 10)}>
				<Row toks={DIAM} x={100} y={Y} s={0.62} at={-100} tokC={i => (i === 0 || i === 9 ? WATER : undefined)} />
				<Row toks={SEB} x={740} y={Y} s={0.62} at={-100} tokC={i => (i === 0 || i === 1 || i === 12 || i === 13 ? WATER : undefined)} />
			</g>
			<AnswerChip x={100} y={510} text="hexane-1,6-diamine" at={swap + 10} size={28} />
			<CCount pts={ag.cx.slice(2, 12).map(x => [x, Y] as V2)} at={cAt} step={5} red={[0, 9]} dy={-100} />
			<AnswerChip x={740} y={510} text="decanedioic acid (10 C)" at={K14.ten + 6} size={28} />
			<PolyBox x={110} y={620} w={520} h={170} at={K14.its - 4} c={{sites: 1, hb: prog(f, K14.its + 10, 20), disp: 0.5}} n={4} per={120} />
			<PolyBox x={750} y={620} w={520} h={170} at={K14.disp - 6} c={{disp: 1}} n={4} />
			<Plate p={HDPE} cx={1380} top={640} h={100} at={K14.disp} />
			<AnswerChip x={110} y={810} text="hydrogen bonds + dispersion" at={K14.its + 20} size={28} />
			<AnswerChip x={750} y={810} text="dispersion only" at={K14.disp + 10} size={28} />
			<Crossed x={1100} y={880} text="octanedioic acid" at={K14.trap - 20} cross={K14.trap + 8} note="count both C=O carbons: 8 + 2 = 10" size={28} />
			{void K14.add}{void K14.leaves}{void dg}
		</Overlay>
	);
};

// ---------- 15. Handoff ----------
const K15 = cues(sc('handoff'), {next: 'Next'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Addition: nothing lost. Condensation: a small molecule lost." at={0} size={40} x={120} y={170} color={TEAL} />
			<Plate p={OBJ} cx={960} top={280} h={400} at={0} />
			<g opacity={vis(f, K15.next)}>
				<rect x={400} y={780} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={830} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={874} text="polymer practice: draw, recover, classify, explain" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	'Condensation polymerisation: monomers with a reactive group at each end join, and a small molecule (usually water) is lost at every link. Diol + dicarboxylic acid → polyester (ester links –COO–); diamine + dicarboxylic acid → polyamide (amide links –CONH–).',
	'Monomers and repeat unit. PET: ethane-1,2-diol and benzene-1,4-dicarboxylic acid give [–O–CH₂CH₂–O–CO–C₆H₄–CO–]ₙ. Nylon 6,6: hexane-1,6-diamine and hexanedioic acid give [–NH–(CH₂)₆–NH–CO–(CH₂)₄–CO–]ₙ. Each link releases one water.',
	'Repeat unit (diol or diamine plus diacid): one of each monomer, minus the water at each end; two links per repeat unit; brackets, continuation bonds, n. Monomers: add the water back (OH to the C=O side, H to the O or N side); count the C=O carbons.',
	'Addition against condensation: C=C against two reactive ends; no by-product against water; repeat unit = monomer against (for these pairs) one of each monomer − 2 H₂O; C–C backbone against ester or amide links (which water can split: hydrolysis, usually slow).',
	'Nylon: N–H···O=C hydrogen bonds between chains: tough, melts about 265 °C (ropes, fishing line). PET: stiff rings, polar ester links: strong, stiff, melts about 260 °C (bottles, polyester fibres). Both are thermoplastics; melting does not break the chain links.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={850} aids={['Addition: nothing lost. Condensation: a small molecule lost.', 'Find the monomers: add the water back.']} tag="condensation polymers: links, repeat units and properties" />
);
