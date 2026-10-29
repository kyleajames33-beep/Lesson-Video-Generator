import React from 'react';
import {useCurrentFrame} from 'remotion';
import {INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {CU_BLUE, CU_INK, Heading, hold, sc} from './common';
import {CUOH2, NOPPT, PBI2, SATB} from './assets';
import {Bottle, BOTTLE_W, Chip, Fade, Funnel, IonLens, KeyNotesBoard, MistakeChip, Overlay, PauseHold, PicH, Pieces, RulesMini, Sx, SwapCross, TEAL, TaskLine, funnelPts, GivensCard} from './parts';
import type {LensIon} from './parts';
import {SX} from './s2';

// ---------- 15. Attempt 1 (countdown) ----------
const A1 = 'attempt-1';
const K15 = cues(sc(A1), {turn: 'Your turn', mix: 'You mix', cu: 'copper two sulfate', naoh: 'sodium hydroxide', name: 'Name the precipitate', write: 'write the net ionic', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const h = hold(A1);
	const bw = BOTTLE_W(340);
	return (
		<>
			<Overlay>
				<TaskLine text="Your turn" at={K15.turn} />
				<Bottle x={96} y={220} h={340} formula="CuSO_4(aq)" at={K15.cu} tint={CU_BLUE} />
				<Bottle x={330} y={220} h={340} formula="NaOH(aq)" at={K15.naoh} />
				<Sx x={96 + bw / 2} y={606} text="copper(II) sulfate" size={30} color={INK} anchor="middle" hand at={K15.cu} />
				<Sx x={330 + bw / 2} y={606} text="sodium hydroxide" size={30} color={INK} anchor="middle" hand at={K15.naoh} />
				<Chip x={96} y={640} w={300} text="Cu^{2+} is 2+" size={36} color={CU_INK} at={K15.cu + 20} />
				<RulesMini x={1150} y={200} size={26} at={K15.turn} title="solubility rules (supplied)" />
				<Sx x={96} y={800} text="1. Name the precipitate." size={50} color={INK} hand at={K15.name} />
				<Sx x={96} y={870} text="2. Write the net ionic equation." size={50} color={INK} hand at={K15.write} />
				<PauseHold h={h} at={K15.pause} x={96} y={990} cx={1560} cy={810} />
				{void K15.mix}
			</Overlay>
		</>
	);
};

// ---------- 16. Feedback 1 (brief) ----------
const F1 = 'feedback-1';
const K16 = cues(sc(F1), {swap: 'Swap partners', cuoh: ['copper hydroxide and', 1], naso: 'and sodium sulfate', nasoSol: 'sodium sulfate is soluble', hyd: 'Hydroxides are', cu2: 'copper(II) hydroxide', pale: 'pale blue solid', twoplus: 'Copper is two plus', twoOH: 'two hydroxides', eq: 'copper ion plus two', wrote: 'If you wrote', cuoh2: 'C u O H', dont: "don't balance"});
export const SceneFeedback1: React.FC = () => (
	<>
		<Overlay>
			<TaskLine text="1. Name the precipitate.  2. Net ionic equation." at={-100} size={44} />
			<SwapCross x={120} xr={680} y1={300} y2={450} size={40} left={[['Cu^{2+}', 'SO_4^{2-}'], ['Na^{+}', 'OH^{-}']]} leftAt={[0, 4]} swap={K16.swap} resAt={[K16.naso, K16.cuoh]}
				verdicts={[{kind: 'ok', at: K16.nasoSol, label: 'Na_2SO_4: soluble'}, {kind: 'ppt', at: K16.cu2, label: 'Cu(OH)_2: insoluble'}]} />
			<Fade at={K16.pale}><PicH p={CUOH2} x={1150} y={230} h={330} /></Fade>
			<Sx x={1240} y={610} text="pale blue" size={36} color={CU_INK} anchor="middle" hand at={K16.pale + 6} />
			<Chip x={96} y={600} w={980} text="1. copper(II) hydroxide, Cu(OH)_2(s), pale blue" size={38} color={TEAL} at={K16.pale} />
			<Sx x={96} y={730} text="Cu^{2+} is 2+, so it needs two OH^{-}" size={40} color={INK} hand at={K16.twoOH} />
			<Chip x={96} y={760} w={860} text="2. Cu^{2+}(aq) + 2OH^{-}(aq) → Cu(OH)_2(s)" size={36} color={TEAL} at={K16.eq} hand={false} />
			<Sx x={990} y={802} text="(+2) + 2(−1) = 0" size={38} color={INK} weight={700} at={K16.eq + 40} />
			<MistakeChip x={96} y={880} text="Cu^{2+} + OH^{-} → CuOH(s)" size={34} at={K16.wrote} note="2+ needs two OH^{-}: the charges don't balance" />
			{void K16.hyd}{void K16.twoplus}{void K16.cuoh2}{void K16.dont}{void INK_SOFT}
		</Overlay>
	</>
);

// ---------- 17. Attempt 2 (countdown) ----------
const A2 = 'attempt-2';
const K17 = cues(sc(A2), {last: 'Last one', agno: 'Silver nitrate solution', enough: 'more than enough', nacl: 'sodium chloride solution', all: 'all the silver ions', white: 'white solid', filtered: 'filtered off', which: 'Which ions', pause: 'Pause here'});
const FU2 = {x: 140, y: 280};
export const SceneAttempt2: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(A2);
	const fp = funnelPts(FU2.x, FU2.y);
	return (
		<>
			<Overlay>
				<TaskLine text="Last one" at={K17.last} />
				<Funnel x={FU2.x} y={FU2.y} at={K17.agno} solidAt={K17.white} dripAt={K17.filtered} fill={0.25} />
				<GivensCard x={760} y={220} w={1060} h={300} at={K17.agno} lh={62} lines={[
					{text: 'silver nitrate, AgNO_3(aq)', at: K17.agno, size: 34},
					{text: 'sodium chloride, NaCl(aq): more than enough (excess)', at: K17.enough, size: 32},
					{text: 'the white solid is filtered off', at: K17.filtered, size: 34},
				]} />
				<path d={`M${fp.flask[0] + 80},${fp.flask[1]} L${470},${700}`} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="7 6" opacity={prog(f, K17.which, 12)} />
				<IonLens cx={560} cy={760} r={110} at={K17.which} ions={[]} />
				<Sx x={560} y={786} text="?" size={80} color={INK_SOFT} anchor="middle" hand at={K17.which + 6} />
				<Sx x={760} y={640} text="Which ions are in the filtrate?" size={52} color={INK} hand at={K17.which} />
				<PauseHold h={h} at={K17.pause} x={760} y={780} cx={1620} cy={830} />
				{void K17.nacl}{void K17.all}
			</Overlay>
		</>
	);
};

// ---------- 18. Feedback 2 (brief) ----------
const F2 = 'feedback-2';
const K18 = cues(sc(F2), {holds: 'The filtrate holds', nano: 'sodium ions and nitrate ions', spect: 'the spectators', cl: 'leftover chloride ions', excess: 'was in excess', silver: 'The silver ions', solid: 'all in the solid', listed: 'If you listed', forgot: 'forgot the excess'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const grey = 0.75 * prog(f, K18.spect, 14);
	const a = prog(f, K18.nano, 14), cl = prog(f, K18.cl, 14);
	const ions: LensIon[] = [
		{ion: 'Na^{+}', u: -0.45, v: -0.3, ph: 0.3, grey, o: a}, {ion: 'NO_3^{-}', u: 0.15, v: -0.5, ph: 1.2, grey, o: a}, {ion: 'Na^{+}', u: 0.5, v: 0.05, ph: 2.1, grey, o: a},
		{ion: 'NO_3^{-}', u: -0.35, v: 0.4, ph: 3.3, grey, o: a}, {ion: 'Na^{+}', u: 0.1, v: 0.52, ph: 4.4, grey, o: a}, {ion: 'NO_3^{-}', u: -0.62, v: 0.0, ph: 5.2, grey, o: a},
		{ion: 'Cl^{-}', u: 0.0, v: 0.0, ph: 0.8, o: cl}, {ion: 'Cl^{-}', u: 0.48, v: -0.48, ph: 2.9, o: cl},
		{ion: 'Na^{+}', u: 0.65, v: 0.3, ph: 1.6, grey, o: cl}, {ion: 'Na^{+}', u: -0.2, v: -0.62, ph: 3.8, grey, o: cl},
	];
	return (
		<>
			<Overlay>
				<TaskLine text="Which ions are in the filtrate?" at={-100} size={46} />
				<Funnel x={FU2.x} y={FU2.y} at={-100} solidAt={-100} fill={0.4} />
				<IonLens cx={780} cy={600} r={230} at={0} ions={ions} title="in the filtrate" titleAt={0} />
				<Sx x={780} y={932} text="excess Cl^{-}" size={36} color={'#6a3fa3'} anchor="middle" hand at={K18.excess} />
				<Chip x={1100} y={300} w={720} text="Na^{+}, NO_3^{-}, and excess Cl^{-}" size={40} color={TEAL} at={K18.excess} />
				<Sx x={1100} y={440} text="Ag^{+}: essentially all in AgCl(s)" size={36} color={INK} hand at={K18.silver} />
				<Sx x={1100} y={486} text="(the trace left over is a Ksp question, later)" size={28} color={INK_SOFT} weight={600} at={K18.solid} />
				<MistakeChip x={1100} y={600} text="Na^{+} and NO_3^{-} only" size={36} at={K18.listed} note="add the excess ion" />
				{void K18.holds}{void K18.forgot}
			</Overlay>
		</>
	);
};

// ---------- 19. Decision rule and handoff ----------
const DR = 'decision-rule';
const K19 = cues(sc(DR), {whenever: 'whenever two ionic', list: 'list the ions', swap: 'swap partners', check: 'check both', insol: 'An insoluble one', split: 'Split only the aqueous', cross: 'cross out the spectators', charges: 'check the charges', stays: 'What stays dissolved', excess: 'anything in excess', next: 'Next', practical: 'practical video', ksp: 'then Ksp', number: 'puts a number'});
const Glow: React.FC<{y: number; at: number; out: number}> = ({y, at, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10) * (1 - prog(f, out, 12));
	return o > 0.01 ? <rect x={110} y={y - 48} width={1270} height={66} rx={14} fill="#f6d77a" opacity={0.35 * o} /> : null;
};
export const SceneDecision: React.FC = () => (
	<>
		<Heading text="Whenever two ionic solutions are mixed" at={4} size={56} />
		<Overlay>
			<Fade at={K19.whenever}><rect x={96} y={210} width={1300} height={520} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
			<Glow y={300} at={K19.list} out={K19.insol} />
			<Glow y={410} at={K19.insol} out={K19.split} />
			<Glow y={520} at={K19.split} out={K19.stays} />
			<Glow y={630} at={K19.stays} out={K19.next} />
			<Pieces x={130} y={300} size={42} items={[{t: 'List the ions.', at: K19.list, hand: true}, {t: 'Swap partners.', at: K19.swap, hand: true}, {t: 'Check both.', at: K19.check, hand: true}]} />
			<Pieces x={130} y={410} size={42} items={[{t: 'Insoluble one = the precipitate.', at: K19.insol, hand: true}]} />
			<Pieces x={130} y={520} size={42} items={[{t: 'Split only (aq);', at: K19.split, hand: true}, {t: 'cross out spectators;', at: K19.cross, hand: true}, {t: 'check charges.', at: K19.charges, hand: true}]} />
			<Pieces x={130} y={630} size={42} items={[{t: 'Still dissolved: spectators', at: K19.stays, hand: true}, {t: '+ any excess.', at: K19.excess, hand: true}]} />
			<Chip x={96} y={790} w={880} text="Next: investigating solubility rules (practical)" size={38} color={TEAL} at={K19.practical} />
			<Fade at={K19.practical + 6}><PicH p={NOPPT} x={1010} y={760} h={200} /><PicH p={PBI2} x={1130} y={760} h={200} /></Fade>
			<Chip x={96} y={900} w={560} text="Then: Ksp, how insoluble?" size={38} color={TEAL} at={K19.ksp} />
			<Fade at={K19.ksp + 6}><PicH p={SATB} x={690} y={860} h={170} /></Fade>
			{void K19.next}{void K19.number}
		</Overlay>
	</>
);

// ---------- 20. Key notes ----------
const NOTES = [
	'Solubility rules (NAGSAG): nitrates, ammonium and Group 1 compounds are soluble (very few exceptions). Sulfates soluble except Ba^{2+}, Sr^{2+} and Pb^{2+} (insoluble), Ca^{2+} and Ag^{+} (slightly). Acetates soluble. Cl^{-}, Br^{-}, I^{-} soluble except with Ag^{+} and Pb^{2+}. Carbonates, phosphates, hydroxides and sulfides mostly insoluble except with Group 1 and NH_4^{+} (also soluble: Ba(OH)_2, and Ca, Sr, Ba sulfides).',
	'Mixing two solutions: list the four ions, swap partners, check both products. The insoluble one is the precipitate; the other ions are spectators. Both soluble: no precipitate.',
	'Equations: molecular (whole formulas, states); full ionic (split every (aq) compound, keep the solid whole); net ionic (cross out ions the same on both sides; check atoms and charges). Example: Ag^{+}(aq) + Cl^{-}(aq) → AgCl(s).',
	'The syllabus pairs: KCl + AgNO_3 gives AgCl(s), white. 2KI + Pb(NO_3)_2 gives PbI_2(s), bright yellow (Pb^{2+} + 2I^{-} → PbI_2). Na_2SO_4 + Ba(NO_3)_2 gives BaSO_4(s), white (Ba^{2+} + SO_4^{2-} → BaSO_4).',
	'After filtering, the filtrate holds the spectator ions plus any ion added in excess.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={800} aids={['Swap partners, check both.', "Split only (aq); cross out what's the same on both sides."]} tag="rules are a first prediction; never split the solid" />
);
