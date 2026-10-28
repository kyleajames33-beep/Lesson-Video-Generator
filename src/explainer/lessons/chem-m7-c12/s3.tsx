// M7 C12 scenes 11 to 16: attempt 1 (sodium palmitate: parts and cleaning), brief feedback (tail, head; dispersion and
// ion–dipole; repel; "dissolves" crossed), attempt 2 (scum equation; why a sulfonate froths), brief feedback, the
// handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Brace, Crossed, DISP, Dots, QCardX, Tag} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import {vis} from '../chem-m7-c04a/parts';
import {WaterMol} from '../chem-m7-c03/parts';
import {EqRow, Plate, RingAt} from '../chem-m7-c06/parts';
import {P2} from '../chem-m7-c08a/parts';
import {acidK} from '../chem-m7-c09/parts';
import {ST, hold, sc} from './common';
import {CA, INK, Ion, Micelle, NA, NAVY, RED, SoapSym, kpos} from './parts';
import {prog} from '../../kit';

const SY = 60;
const PAL = acidK(16, [], 60, 34);
const PALM = (ink: boolean) => ({...PAL.m, bonds: ink ? PAL.m.bonds.map(b => ({...b, color: undefined})) : PAL.m.bonds, labels: [{i: PAL.o, text: 'O'}, {i: PAL.oh as number, text: 'O⁻ Na⁺'}]});

// ---------- 11. Attempt 1 ----------
const Q1 = ['Sodium palmitate, CH₃(CH₂)₁₄COO⁻Na⁺, is a soap.', '(a) Identify the hydrophobic part and the hydrophilic part of the palmitate ion.', '(b) Explain how this soap removes an oily stain from fabric during washing. Refer to the', 'intermolecular forces involved.'];
const K11 = cues(sc('attempt-1'), {turn: 'Your turn', sod: 'Sodium palmitate', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K11.turn} />
		<QCardX lines={Q1} at={K11.sod} y={200} size={36} />
		<SkelAt m={PALM(true)} x={860} y={650} s={1} at={K11.sod + 20} />
		<PauseHold h={hold('attempt-1')} at={K11.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 12. Feedback 1 ----------
const K12 = cues(sc('feedback-1'), {tail: 'tail', head: 'carboxylate head', disp: 'dispersion', ion: 'ion-dipole', wash: 'Washing lifts', repel: 'repel', trap: 'trap', emul: 'emulsified'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const X = 860, Y = 400;
	const ch = Array.from({length: 15}, (_, i) => P2(PAL.m, X, Y, 1, i));
	const c = P2(PAL.m, X, Y, 1, PAL.c);
	const d1 = kpos(f, [{at: -100, p: [820, 700]}, {at: K12.repel - 20, p: [920, 700]}, {at: K12.repel + 10, p: [720, 690]}]);
	const d2 = kpos(f, [{at: -100, p: [1120, 700]}, {at: K12.repel - 20, p: [1020, 700]}, {at: K12.repel + 10, p: [1240, 690]}]);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={26} under={[{line: 1, phrase: 'hydrophobic part', at: K12.tail}, {line: 1, phrase: 'hydrophilic part', at: K12.head}, {line: 3, phrase: 'intermolecular forces involved', at: K12.disp}, {line: 2, phrase: 'oily stain from fabric', at: K12.wash}]} />
			<SkelAt m={PALM(false)} x={X} y={Y} s={1} at={-100} />
			<Brace x1={ch[0][0]} x2={ch[14][0]} y={Y + 50} text="C₁₅H₃₁: hydrophobic" at={K12.tail} color="#2d6f9e" size={30} />
			<RingAt c={[c[0] + 40, c[1]]} rx={80} ry={80} at={K12.head} />
			<Tag x={c[0] + 20} y={Y - 150} text="COO⁻: hydrophilic" at={K12.head} size={28} color={RED} fill="#f9e1dc" />
			<g opacity={vis(f, K12.disp - 10)}>
				<Micelle cx={d1[0]} cy={d1[1]} r={80} n={12} s={0.65} grease at={K12.disp - 10} glow={K12.repel - 10} />
				<Micelle cx={d2[0]} cy={d2[1]} r={80} n={12} s={0.65} grease at={K12.repel - 30} glow={K12.repel - 10} />
			</g>
			<Tag x={260} y={640} text="tails in oil: dispersion" at={K12.disp} size={26} color="#2d6f9e" fill="#e3f0fa" />
			<Tag x={260} y={700} text="heads in water: ion–dipole" at={K12.ion} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={1300} y={780} text="negative surfaces repel" at={K12.repel} size={26} color={RED} fill="#f9e1dc" />
			<Crossed x={140} y={880} text="The soap dissolves the oil in the water." at={K12.trap - 30} cross={K12.trap} note="emulsified: droplets, not a solution" size={30} />
			{void DISP}{void Dots}{void K12.emul}
		</Overlay>
	);
};

// ---------- 13. Attempt 2 ----------
const Q2 = ['The same volume of soap solution is added to a sample of rainwater and to a sample of tap water', 'that contains dissolved calcium ions. The tap water turns cloudy, a white solid forms, and little', 'froth appears. (a) Write a net ionic equation for the formation of the white solid. Use sodium', 'stearate, C₁₇H₃₅COONa, as the soap. (b) Explain why a sulfonate detergent forms plenty of', 'froth in the same tap water.'];
const K13 = cues(sc('attempt-2'), {last: 'Last one', soap: 'Soap solution', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K13.last} />
		<QCardX lines={Q2} at={K13.soap} y={200} size={34} />
		<PauseHold h={hold('attempt-2')} at={K13.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 14. Feedback 2 ----------
const K14 = cues(sc('feedback-2'), {two: 'Two stearate', solid: 'solid calcium', sodium: 'The sodium', spect: 'spectators', det: "The detergent's", sol: 'soluble', writing: 'Writing one', trap: 'trap', charges: "The charges don't"});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={24} under={[{line: 2, phrase: 'net ionic equation', at: K14.two}, {line: 1, phrase: 'dissolved calcium ions', at: K14.two + 6}, {line: 3, phrase: 'stearate, C₁₇H₃₅COONa', at: K14.spect}, {line: 3, phrase: 'sulfonate detergent', at: K14.sol}, {line: 3, phrase: 'plenty of', at: K14.sol + 6}]} />
			<EqRow left={[{t: '2C_17H_35COO⁻(aq)', at: K14.two}, {t: '+', at: K14.two}, {t: 'Ca²⁺(aq)', at: K14.two}]} right={[{t: '(C_17H_35COO)_2Ca(s)', at: K14.solid}]} cx={760} y={430} size={38} len={110} arrow={{at: K14.two + 10}} />
			<Plate p={ST.soft} cx={1520} top={300} h={300} at={K14.solid} />
			<Plate p={ST.hard} cx={1700} top={300} h={300} at={K14.solid} />
			<Sx x={1520} y={630} text="rain" size={22} color={INK} anchor="middle" weight={700} at={K14.solid} />
			<Sx x={1700} y={630} text="tap" size={22} color={INK} anchor="middle" weight={700} at={K14.solid} />
			<g opacity={vis(f, K14.sodium)}>
				<Ion x={300} y={560} t="Na⁺" color={NA} r={28} />
				<path d="M270,530 L330,590 M330,530 L270,590" stroke={RED} strokeWidth={5} opacity={prog(f, K14.spect, 10)} />
			</g>
			<Tag x={350} y={540} text="spectator: left out" at={K14.spect} size={24} />
			<Tag x={460} y={480} text="2 × (1−)" at={K14.det - 20} size={24} color={RED} fill="#f9e1dc" />
			<Tag x={760} y={480} text="2+" at={K14.det - 14} size={24} color={CA} fill="#dff2ef" />
			<g opacity={vis(f, K14.det)}>
				<SoapSym x={760} y={700} ang={0} s={1.4} />
				<Ion x={690} y={700} t="Ca²⁺" r={28} />
				{[[620, 640], [640, 770], [780, 620]].map((p, i) => <WaterMol key={i} p={{o: p as [number, number], a: i * 2}} s={0.8} />)}
				<Tag x={940} y={680} text="sulfonate head: calcium salt much more soluble, stays dissolved" at={K14.sol} size={24} color={NAVY} fill="#e7edf8" />
			</g>
			<Crossed x={140} y={880} text="C₁₇H₃₅COO⁻ + Ca²⁺ → C₁₇H₃₅COOCa" at={K14.writing} cross={K14.trap} note="1− and 2+ don't balance" size={30} />
			{void smooth}{void K14.charges}
		</Overlay>
	);
};

// ---------- 15. Handoff ----------
const K15 = cues(sc('handoff'), {so: 'So one', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Head in the water, tail in the grease." at={K15.so} size={44} x={120} y={180} color={TEAL} />
			<TaskLine text="Soap makes scum in hard water; detergents mostly don't." at={K15.so + 20} size={36} x={120} y={250} color={TEAL} />
			<g opacity={vis(f, K15.next)}>
				<Plate p={ST.soft} cx={1250} top={330} h={360} />
				<Plate p={ST.hard} cx={1480} top={330} h={360} />
				<rect x={400} y={760} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={810} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={854} text="compare soap and detergent action" size={34} color={INK} weight={700} at={-1000} />
			</g>
		</Overlay>
	);
};

// ---------- 16. Key notes ----------
const NOTES = [
	'Soap: the sodium (or potassium) salt of a long-chain carboxylic acid, e.g. sodium stearate C₁₇H₃₅COO⁻Na⁺. Tail: long hydrocarbon chain, non-polar, attracts oil by dispersion (hydrophobic). Head: COO⁻, ionic, attracts water by ion–dipole (hydrophilic).',
	'Saponification: fat (triglyceride, a triple ester) + 3NaOH → glycerol + 3 soap, heated. C₃H₅(OOCC₁₇H₃₅)₃ + 3NaOH → C₃H₅(OH)₃ + 3C₁₇H₃₅COONa. NaOH is a reactant; goes to completion (the base takes the acid\'s proton, and the carboxylate can\'t re-form the ester).',
	'Cleaning: tails dissolve into grease (dispersion), heads stay in water; agitation gives soap-wrapped droplets (micelles), tails in, heads out; negative surfaces repel, so the droplets stay dispersed (an emulsion) and rinse away. Grease is emulsified, not dissolved in the water.',
	'Hard water (Ca²⁺, Mg²⁺): 2C₁₇H₃₅COO⁻(aq) + Ca²⁺(aq) → (C₁₇H₃₅COO)₂Ca(s), scum. Soap is used up: less froth, more soap needed.',
	'Detergents: same tail, different head. Anionic (–SO₃⁻ or –OSO₃⁻): Ca²⁺ is still attracted, but its salts are much more soluble and stay dissolved, so little scum. Cationic (positive N head): fabric softeners. Non-ionic (uncharged polar chain): nothing for Ca²⁺ to bind.',
	'Soap: renewable, biodegrades readily, scums in hard water. Detergents: work in hard water, many from petrochemicals.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={23} aidTop={856} aids={['Head in the water, tail in the grease.', "Soap makes scum in hard water; detergents mostly don't."]} tag="soaps and detergents: structure, action and hard water" />
);
