import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {CU_BLUE, CU_INK, Heading, hold, sc} from './common';
import {AGCL, CUOH2, NOPPT, PBI2, SATB} from './assets';
import {Bottle, BOTTLE_W, Chip, Fade, Funnel, IonLens, KeyNotesBoard, MistakeChip, Overlay, PauseHold, PicH, Pieces, RulesMini, Sx, SwapCross, TEAL, TaskLine, funnelPts, GivensCard} from './parts';
import type {LensIon} from './parts';
import {AGCL_PAIRS, SX} from './s2';

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
			{/* quality fix: larger cross; the supplied rules card stays on screen and lights the rule each verdict uses */}
			<SwapCross x={110} xr={640} y1={310} y2={470} size={48} left={[['Cu^{2+}', 'SO_4^{2-}'], ['Na^{+}', 'OH^{-}']]} leftAt={[0, 4]} swap={K16.swap} resAt={[K16.naso, K16.cuoh]}
				verdicts={[{kind: 'ok', at: K16.nasoSol, label: 'Na_2SO_4: soluble'}, {kind: 'ppt', at: K16.cu2, label: 'Cu(OH)_2: insoluble'}]} />
			<RulesMini x={1150} y={200} size={26} at={0} title="solubility rules (supplied)" hi={[{id: 'G', at: K16.nasoSol, out: K16.hyd}, {id: 'S', at: K16.nasoSol, out: K16.hyd}, {id: 'Ins', at: K16.hyd}]} />
			<Sx x={1170} y={630} text="hydroxides: mostly insoluble;" size={34} color={AMBER_INK} hand at={K16.hyd + 10} />
			<Sx x={1170} y={672} text="Cu^{2+} is not an exception" size={34} color={AMBER_INK} hand at={K16.cu2 - 20} />
			{/* the two solutions being mixed, replaced by the product tube on "pale blue solid" */}
			<Fade at={0} out={K16.pale - 12}>
				<Bottle x={1200} y={720} h={300} formula="CuSO_4(aq)" at={0} tint={CU_BLUE} />
				<Bottle x={1420} y={720} h={300} formula="NaOH(aq)" at={4} />
				<Sx x={1390} y={880} text="+" size={60} color={INK_SOFT} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Fade at={K16.pale}><PicH p={CUOH2} x={1300} y={700} h={340} /></Fade>
			<Sx x={1520} y={880} text="pale blue solid" size={38} color={CU_INK} hand at={K16.pale + 6} />
			<Chip x={96} y={600} w={980} text="1. copper(II) hydroxide, Cu(OH)_2(s), pale blue" size={38} color={TEAL} at={K16.pale} />
			<Sx x={96} y={730} text="Cu^{2+} is 2+, so it needs two OH^{-}" size={40} color={INK} hand at={K16.twoOH} />
			<Chip x={96} y={760} w={860} text="2. Cu^{2+}(aq) + 2OH^{-}(aq) → Cu(OH)_2(s)" size={36} color={TEAL} at={K16.eq} hand={false} />
			<Sx x={990} y={802} text="(+2) + 2(−1) = 0" size={38} color={INK} weight={700} at={K16.eq + 40} />
			<MistakeChip x={96} y={880} text="Cu^{2+} + OH^{-} → CuOH(s)" size={34} at={K16.wrote} note="2+ needs two OH^{-}: the charges don't balance" />
			{void K16.twoplus}{void K16.cuoh2}{void K16.dont}{void INK_SOFT}
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
// quality fix: numbered steps are on the board from the start, and the KCl + AgNO3 example on the right follows each step
const STEP_Y = [300, 410, 520, 630];
const DX = {x: 1430, xr: 1690};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="Whenever two ionic solutions are mixed" at={4} size={56} />
			<Overlay>
				<Fade at={0}><rect x={96} y={210} width={1300} height={520} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				<Glow y={300} at={K19.list} out={K19.insol} />
				<Glow y={410} at={K19.insol} out={K19.split} />
				<Glow y={520} at={K19.split} out={K19.stays} />
				<Glow y={630} at={K19.stays} out={K19.next} />
				{STEP_Y.map((y, i) => (
					<Fade key={i} at={2 + i * 6}>
						<circle cx={150} cy={y - 14} r={28} fill="#e5f2ec" stroke={TEAL} strokeWidth={3} />
						<Sx x={150} y={y} text={String(i + 1)} size={38} color={TEAL} anchor="middle" weight={800} at={-1000} />
					</Fade>
				))}
				{/* the four steps sit faintly on the board from the start, then write in on their cues */}
				<g opacity={0.22}>
					<Pieces x={200} y={300} size={42} items={[{t: 'List the ions.', at: -1000, hand: true}, {t: 'Swap partners.', at: -1000, hand: true}, {t: 'Check both.', at: -1000, hand: true}]} />
					<Pieces x={200} y={410} size={42} items={[{t: 'Insoluble one = the precipitate.', at: -1000, hand: true}]} />
					<Pieces x={200} y={520} size={42} items={[{t: 'Split only (aq);', at: -1000, hand: true}, {t: 'cross out spectators;', at: -1000, hand: true}, {t: 'check charges.', at: -1000, hand: true}]} />
					<Pieces x={200} y={630} size={42} items={[{t: 'Still dissolved: spectators', at: -1000, hand: true}, {t: '+ any excess.', at: -1000, hand: true}]} />
				</g>
				<Pieces x={200} y={300} size={42} items={[{t: 'List the ions.', at: K19.list, hand: true}, {t: 'Swap partners.', at: K19.swap, hand: true}, {t: 'Check both.', at: K19.check, hand: true}]} />
				<Pieces x={200} y={410} size={42} items={[{t: 'Insoluble one = the precipitate.', at: K19.insol, hand: true}]} />
				<Pieces x={200} y={520} size={42} items={[{t: 'Split only (aq);', at: K19.split, hand: true}, {t: 'cross out spectators;', at: K19.cross, hand: true}, {t: 'check charges.', at: K19.charges, hand: true}]} />
				<Pieces x={200} y={630} size={42} items={[{t: 'Still dissolved: spectators', at: K19.stays, hand: true}, {t: '+ any excess.', at: K19.excess, hand: true}]} />
				{/* the worked example beside the steps */}
				<Sx x={DX.x} y={236} text="e.g. KCl + AgNO_3" size={34} color={INK_SOFT} hand at={4} out={K19.practical} />
				<SwapCross x={DX.x} xr={DX.xr} y1={310} y2={410} size={36} left={AGCL_PAIRS} leftAt={[4, 10]} swap={K19.swap} resAt={[K19.swap + 10, K19.swap + 18]} out={K19.practical}
					verdicts={[{kind: 'ppt', at: K19.check + 4}, {kind: 'ok', at: K19.check + 10}]} arrows={false} />
				<Fade at={K19.insol} out={K19.practical}><PicH p={AGCL} x={1440} y={450} h={250} /></Fade>
				<Sx x={1610} y={600} text="AgCl(s), white" size={32} color={INK} hand at={K19.insol + 8} out={K19.practical} />
				<Sx x={1420} y={760} text="Ag^{+} + Cl^{-} → AgCl(s)" size={34} color={TEAL} weight={700} at={K19.split + 10} out={K19.practical} />
				<Sx x={1420} y={812} text="left dissolved: K^{+}, NO_3^{-}" size={32} color={INK} hand at={K19.stays} out={K19.practical} />
				<Chip x={96} y={790} w={880} text="Next: investigating solubility rules (practical)" size={38} color={TEAL} at={K19.practical} />
				<Fade at={K19.practical + 6}><PicH p={NOPPT} x={1010} y={760} h={200} /><PicH p={PBI2} x={1130} y={760} h={200} /></Fade>
				<Chip x={96} y={900} w={560} text="Then: Ksp, how insoluble?" size={38} color={TEAL} at={K19.ksp} />
				<Fade at={K19.ksp + 6}><PicH p={SATB} x={690} y={860} h={170} /></Fade>
				{void K19.next}{void K19.number}{void f}
			</Overlay>
		</>
	);
};

// ---------- 20. Key notes ----------
// quality fix: short one-line bullets instead of five paragraphs; the memory aid is unchanged
const NOTES = [
	'Soluble: nitrates, ammonium, Group 1 and acetates.',
	'Sulfates soluble, except Ba^{2+}, Sr^{2+}, Pb^{2+} (Ca^{2+}, Ag^{+} slightly).',
	'Halides (Cl^{-}, Br^{-}, I^{-}) soluble, except with Ag^{+} and Pb^{2+}.',
	'Carbonates, hydroxides: mostly insoluble, except with Group 1 or NH_4^{+}.',
	'Mixing: list the four ions, swap partners, check both products.',
	'Net ionic: split only (aq), cross out spectators, check charges.',
	'AgCl white; PbI_2 bright yellow (Pb^{2+} + 2I^{-}); BaSO_4 white.',
	'Filtrate: the spectator ions plus any ion in excess.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={38} aidTop={780} aids={['Swap partners, check both.', "Split only (aq); cross out what's the same on both sides."]} tag="rules are a first prediction; never split the solid" />
);
