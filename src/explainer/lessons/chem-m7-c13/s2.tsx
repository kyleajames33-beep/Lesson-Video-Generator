// M7 C13 scenes 8 to 14: the memory aid, attempt 1 (pentanoic acid from the better start), brief feedback, attempt 2
// (ethyl butanoate from ethene and butan-1-ol), brief feedback, the handoff (the full map) and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Crossed, QCardX, Tag} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {FRUIT, hold, sc} from './common';
import {ALL_EDGES, AMB, FArrow, FBox, INK, NAVY, RMap, boxH} from './parts';
import {Halves} from './s1';

const SY = 60;

// ---------- 8. Memory aid ----------
const K8 = cues(sc('memory-aid'), {name: 'name and count', work: 'work backwards,', choose: 'choose,', write: 'then write', short: 'In short', main: 'main road', halo: 'haloalkane'});
const CARDS = ['1 name groups, count carbons', '2 work backwards: what makes it?', '3 choose: position, conditions', '4 write forwards; check every arrow'];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K8.name, K8.work, K8.choose, K8.write];
	return (
		<Overlay>
			{CARDS.map((c, i) => <Tag key={i} x={120 + (i % 2) * 760} y={200 + Math.floor(i / 2) * 80} text={c} at={at[i]} size={30} color={NAVY} fill="#fffdf8" o={at[i + 1] === undefined ? 1 : dimAt(f, at[i + 1], 0.5)} />)}
			<TaskLine text="Work backwards to plan; write forwards to answer." at={K8.short} size={56} x={120} y={500} color={TEAL} />
			<TaskLine text="Main road (from ethene): alkene → primary alcohol → acid → ester" at={K8.main} size={44} x={120} y={640} color={TEAL} />
			<Tag x={120} y={680} text="hydration gives a primary alcohol only from ethene" at={K8.main + 30} size={22} />
			<TaskLine text="Side road: haloalkane (halogen on the right carbon) → alcohol" at={K8.halo} size={40} x={120} y={830} color={AMB} />
		</Overlay>
	);
};

// ---------- 9. Attempt 1 ----------
const Q1 = ['A chemist wants to make pentanoic acid, CH₃CH₂CH₂CH₂COOH. The only available starting materials', 'are pent-1-ene and 1-chloropentane. Construct a flow chart for a two-step synthesis from the better', 'starting material. Include the reagents and conditions for each step, name the intermediate, and', 'justify your choice of starting material.'];
const K9 = cues(sc('attempt-1'), {turn: 'Your turn', a: 'A chemist', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K9.turn} />
		<QCardX lines={Q1} at={K9.a} y={200} size={34} />
		<PauseHold h={hold('attempt-1')} at={K9.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 10. Feedback 1 ----------
const K10 = cues(sc('feedback-1'), {start: 'Start from', aq: 'Aqueous sodium', p1: 'pentan-1-ol', then: 'Then excess', reflux: ['reflux', 2], trap: 'trap', most: 'Most of'});
export const SceneFeedback1: React.FC = () => {
	const Y = 360, H = boxH(24);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={24} under={[{line: 1, phrase: '1-chloropentane', at: K10.start}, {line: 2, phrase: 'name the intermediate', at: K10.p1}, {line: 3, phrase: 'justify your choice', at: K10.p1 + 6}, {line: 0, phrase: 'pentanoic acid', at: K10.reflux}, {line: 2, phrase: 'reagents and conditions', at: K10.reflux + 6}, {line: 1, phrase: 'pent-1-ene', at: K10.trap}]} />
			<FBox x={96} y={Y} w={400} name="1-chloropentane" formula="CH₃CH₂CH₂CH₂CH₂Cl" at={K10.start} size={24} />
			<FArrow a={[506, Y + H / 2]} b={[746, Y + H / 2]} at={K10.aq} chips={['NaOH(aq)', 'heat under reflux']} />
			<FBox x={756} y={Y} w={400} name="pentan-1-ol" formula="CH₃CH₂CH₂CH₂CH₂OH" at={K10.p1} edge="amber" size={24} />
			<Tag x={756} y={Y + H + 16} text="Cl on C1: OH on C1 (the intermediate)" at={K10.p1 + 10} size={22} color={AMB} fill="#fbedd0" />
			<FArrow a={[1166, Y + H / 2]} b={[1406, Y + H / 2]} at={K10.then} chips={['excess K₂Cr₂O₇ / H⁺', 'heat under reflux']} />
			<FBox x={1416} y={Y} w={420} name="pentanoic acid" formula="CH₃CH₂CH₂CH₂COOH" at={K10.reflux} edge="red" size={24} />
			<Tag x={1416} y={Y + H + 16} text="primary → acid" at={K10.reflux + 10} size={22} />
			<Crossed x={140} y={680} text="pent-1-ene → (steam) → pentan-2-ol → pentanoic acid" at={K10.trap - 10} cross={K10.most + 60} note="a secondary alcohol gives a ketone: dead end" size={30} />
		</Overlay>
	);
};

// ---------- 11. Attempt 2 ----------
const Q2 = ['A chemist has only ethene and butan-1-ol as carbon-containing starting materials. Draw a flow chart', 'to make ethyl butanoate, CH₃CH₂CH₂COOCH₂CH₃. Show the reagents and conditions on every arrow.'];
const K11 = cues(sc('attempt-2'), {last: 'Last one', a: 'A chemist', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K11.last} />
		<QCardX lines={Q2} at={K11.a} y={200} size={34} />
		<PauseHold h={hold('attempt-2')} at={K11.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 12. Feedback 2 ----------
const K12 = cues(sc('feedback-2'), {ethyl: 'The ethyl', but: 'butanoate part', hyd: 'So hydrate', ox: 'Oxidise the', reflux: 'reflux.', est: 'Then esterify', trap: 'trap', makes: 'That makes'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const U = 360, D = 560, H = boxH(22);
	const pine = ptOn(FRUIT, 1700, 760, 180, 1000, 900);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={26} under={[{line: 1, phrase: 'ethyl butanoate, CH₃CH₂CH₂COOCH₂CH₃', at: K12.ethyl}, {line: 0, phrase: 'ethene', at: K12.hyd}, {line: 0, phrase: 'butan-1-ol', at: K12.ox}, {line: 1, phrase: 'on every arrow', at: K12.ox + 6}]} />
			<g opacity={vis(f, K12.ethyl, K12.hyd + 20)}>
				<Halves x={960} y={280} a="CH_3CH_2CH_2COO" b="CH_2CH_3" at={K12.ethyl} size={36} anchor="middle" cut={K12.ethyl + 10} />
				<Tag x={960} y={300} text="ethyl ← ethanol;  butanoate ← butanoic acid" at={K12.but} size={24} anchor="middle" />
			</g>
			<FBox x={96} y={U} w={240} name="ethene" at={K12.hyd} size={22} />
			<FArrow a={[346, U + 20]} b={[646, U + 20]} at={K12.hyd + 10} eq chips={['H₂O (steam), H₃PO₄', 'about 300 °C, high pressure']} size={18} />
			<FBox x={656} y={U} w={240} name="ethanol" at={K12.hyd + 30} size={22} />
			<FBox x={96} y={D} w={240} name="butan-1-ol" at={K12.ox} size={22} />
			<FArrow a={[346, D + 20]} b={[646, D + 20]} at={K12.ox + 10} chips={['excess K₂Cr₂O₇ / H⁺', 'heat under reflux']} size={18} />
			<FBox x={656} y={D} w={300} name="butanoic acid" at={K12.reflux} size={22} />
			<FArrow a={[966, U + 20]} b={[1100, 450]} at={K12.est} />
			<FArrow a={[966, D + 20]} b={[1100, 490]} at={K12.est} />
			<FArrow a={[1110, 470]} b={[1300, 470]} at={K12.est + 6} eq chips={['conc. H₂SO₄', 'heat under reflux']} size={18} />
			<FBox x={1310} y={430} w={460} name="ethyl butanoate + H₂O" at={K12.est + 20} edge="red" size={24} />
			<Crossed x={140} y={760} text="oxidise ethanol; esterify with butan-1-ol" at={K12.trap - 10} cross={K12.makes} note="gives butyl ethanoate, C₆H₁₂O₂ too" size={30} />
			<g opacity={vis(f, K12.makes) * dimAt(f, K12.makes + 120, 0.4)}><Plate p={FRUIT} cx={1700} top={760} h={180} /></g>
			<RingAt c={pine} rx={40} ry={60} at={K12.makes + 10} />
			<Tag x={1700} y={960} text="ethyl butanoate: smells of pineapple" at={K12.makes + 10} size={20} anchor="middle" />
			{void H}
		</Overlay>
	);
};

// ---------- 13. Handoff ----------
const K13 = cues(sc('handoff'), {so: 'So every', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Work backwards to plan; write forwards to answer." at={K13.so} size={36} x={120} y={160} color={TEAL} />
			<RMap T={{boxAt: -1000, edgeAt: ALL_EDGES(-1000), amber: {hyd: K13.so + 20, alacid: K13.so + 30, est: K13.so + 40}}} x={160} y={170} s={0.8} o={0.85} />
			<g opacity={vis(f, K13.next)}>
				<Plate p={FRUIT} cx={1650} top={300} h={160} />
				<rect x={400} y={900} width={1120} height={110} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={946} text="Next:" size={30} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={988} text="organic synthesis pathway practice" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 14. Key notes ----------
const NOTES = [
	'Flow chart: a box for each compound (name and formula); an arrow for each step, with its reagents and conditions. An intermediate is made in one step and used in the next.',
	'Plan: (1) name groups, count carbons (chains keep their length; only ester and amide formation join two); (2) work backwards: what makes this group?; (3) choose: a haloalkane with its halogen already on the right carbon fixes where the OH goes (water or HX on propene adds mainly to the middle carbon); (4) write forwards with every condition, then check every arrow.',
	'Main road (from ethene): ethene → (H₂O (steam), H₃PO₄, about 300 °C, high pressure, ⇌) → ethanol → (excess K₂Cr₂O₇/H⁺, reflux) → ethanoic acid → (+ alcohol, conc. H₂SO₄, reflux, ⇌) → ester. Side road: haloalkane (halogen on the right carbon) → (NaOH(aq), reflux) → alcohol, OH on the same carbon.',
	'Primary alcohol: distil (K₂Cr₂O₇/H⁺) → aldehyde; reflux with excess oxidant → acid. Secondary alcohol → ketone: a dead end. Tertiary alcohol: no oxidation by dichromate.',
	'No direct alkane → alcohol: alkane → (X₂, UV light) → haloalkanes (a mixture) → alcohol. Fewer steps usually means a higher overall yield.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={24} aidTop={830} aids={['Work backwards to plan; write forwards to answer.', 'Main road (from ethene): alkene → primary alcohol → acid → ester, with the haloalkane side road (halogen already on the right carbon).']} tag="planning an organic synthesis" />
);
