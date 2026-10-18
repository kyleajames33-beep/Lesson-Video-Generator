import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {OneWayLine} from '../chem-m5-p01/parts';
import {AMBER, AMBER_INK, BigWell, Card, Chip, Fade, GivensCard, INK, INK_SOFT, KeyNotesBoard, MistakeChip, Overlay, PauseHold, Pic, PicH, Ring, Sx, TEAL, TaskLine, Well, picW} from './parts';
import type {WellKind} from './parts';
import {CAT_INK, Heading, hold, sc} from './common';
import {AGCL, SATB} from './assets';

// ---------- 12. Attempt 1 (countdown) ----------
const A1 = 'attempt-1';
const K12 = cues(sc(A1), {turn: 'Your turn', kcl: 'Potassium chloride solution', agno: 'silver nitrate solution', white: 'a white solid', drop: 'A drop of potassium', clear: 'clear liquid above', more: 'more white solid', which: 'Which ions', pause: 'Pause here'});
const TB = {x: 110, y: 240, h: 500};
const W1 = {x: 560, y: 470, r: 70};
const AttemptBoard: React.FC<{k: typeof K12 | null}> = ({k}) => {
	const f = useCurrentFrame();
	const z = (v: number | undefined) => (k ? (v as number) : -100);
	const tw = picW(AGCL, TB.h);
	return (
		<>
			<Fade at={z(k?.kcl)}><Pic p={AGCL} x={TB.x} y={TB.y} h={TB.h} /></Fade>
			<Sx x={TB.x + tw / 2} y={TB.y + TB.h + 44} text="white solid, settled" size={28} anchor="middle" weight={700} at={z(k?.white)} />
			<BigWell cx={W1.x} cy={W1.y} r={W1.r} kind="white" p={k ? prog(f, k.more, 30) : 1} at={z(k?.drop)} label="clear liquid + 1 drop KCl" />
			<GivensCard x={820} y={210} w={1000} h={260} at={z(k?.kcl)} lh={60} lines={[
				{text: 'potassium chloride + silver nitrate', at: z(k?.agno), size: 34},
				{text: '→ white solid, settled', at: z(k?.white), size: 34},
				{text: 'clear liquid + 1 drop KCl → more white solid', at: z(k?.more), size: 34},
			]} />
		</>
	);
};
export const SceneAttempt1: React.FC = () => {
	const h = hold(A1);
	return (
		<>
			<Overlay>
				<TaskLine text="Your turn" at={K12.turn} />
				<AttemptBoard k={K12} />
				<Sx x={820} y={620} text="Which ions were in that clear liquid?" size={52} color={INK} hand at={K12.which} />
				<PauseHold h={h} at={K12.pause} x={820} y={860} cx={1650} cy={800} />
				{void K12.clear}
			</Overlay>
		</>
	);
};

// ---------- 13. Feedback 1 (brief) ----------
const F1 = 'feedback-1';
const K13 = cues(sc(F1), {ans: 'Potassium nitrate and leftover', adding: 'Adding chloride made', must: 'must still have', excess: 'was in excess', spect: 'are the spectators', not: "It's not chloride", if: 'if chloride were', used: 'used up', couldnt: "couldn't make"});
export const SceneFeedback1: React.FC = () => (
	<>
		<Overlay>
			<TaskLine text="Which ions were in that clear liquid?" at={-100} size={46} />
			<AttemptBoard k={null} />
			<Chip x={820} y={500} w={700} h={64} text="K^{+}, NO_3^{-}, leftover Ag^{+}" size={38} color={TEAL} at={K13.ans} />
			<OneWayLine x={820} y={640} left="Ag^{+}(aq) + Cl^{-}(aq)" right="AgCl(s)" size={40} at={K13.adding} />
			<Sx x={820} y={700} text="more solid on adding Cl^{-}, so Ag^{+} was still dissolved" size={30} color={INK} hand at={K13.must} />
			<Card x={96} y={830} w={680} h={200} at={K13.excess - 10} stroke={TEAL} />
			<Sx x={120} y={880} text="dissolved:" size={32} color={TEAL} hand at={K13.excess - 10} />
			<Sx x={120} y={930} text="K^{+}, NO_3^{-} (spectators)" size={30} color={INK_SOFT} weight={700} at={K13.spect} />
			<Sx x={120} y={978} text="Ag^{+} (excess)" size={30} color={CAT_INK} weight={800} at={K13.excess} />
			<Ring cx={225} cy={968} rx={120} ry={30} at={K13.excess + 6} color={AMBER} seed={3} />
			<MistakeChip x={820} y={800} text="Cl^{-} left over" size={38} at={K13.not} note="if Cl^{-} were in excess, Ag^{+} would be used up" />
			{void K13.if}{void K13.used}{void K13.couldnt}
		</Overlay>
	</>
);

// ---------- 14. Attempt 2 (countdown) ----------
const A2 = 'attempt-2';
const K14 = cues(sc(A2), {last: 'Last one', groups: 'Two groups mix', calcium: 'calcium nitrate', sulfate: 'sodium sulfate', one: 'One group records', other: 'The other records', explain: 'Explain how both', reliable: 'more reliable', pause: 'Pause here'});
/** A strip of five coded wells over a black card, the Ca/SO4 cell (index 2) ringed. */
const Strip: React.FC<{x: number; y: number; label: string; kinds: WellKind[]; at: number; ringAt: number; cloudAt?: number}> = ({x, y, label, kinds, at, ringAt, cloudAt}) => {
	const f = useCurrentFrame();
	return (
		<Fade at={at}>
			<rect x={x} y={y} width={470} height={120} rx={16} fill="#1f1f22" />
			{kinds.map((k, i) => {
				const cx = x + 55 + i * 90, cy = y + 60;
				return (
					<g key={i}>
						<circle cx={cx} cy={cy} r={38} fill="#141416" stroke="#c9d3da" strokeWidth={4} />
						<Well cx={cx} cy={cy} r={35} kind={k} p={i === 2 && cloudAt !== undefined ? prog(f, cloudAt, 26) : 1} seed={i + 4} />
					</g>
				);
			})}
			<Ring cx={x + 235} cy={y + 60} rx={58} ry={58} at={ringAt} color={AMBER} seed={5} />
			<Sx x={x} y={y - 20} text={label} size={32} color={INK} hand at={at} />
			{['Cl^{-}', 'I^{-}', 'SO_4^{2-}', 'CO_3^{2-}', 'OH^{-}'].map((t, i) => <Sx key={'l' + i} x={x + 55 + i * 90} y={y + 150} text={t} size={22} color="#6a3fa3" anchor="middle" weight={700} at={-100} />)}
		</Fade>
	);
};
const G1K: WellKind[] = ['clear', 'clear', 'faint', 'white', 'faint'];
const G2K: WellKind[] = ['clear', 'clear', 'clear', 'white', 'faint'];
export const SceneAttempt2: React.FC = () => {
	const h = hold(A2);
	return (
		<>
			<Overlay>
				<TaskLine text="Last one" at={K14.last} />
				<Strip x={110} y={300} label="group 1: faint white cloud" kinds={G1K} at={K14.one} ringAt={K14.one + 10} />
				<Strip x={110} y={540} label="group 2: no precipitate" kinds={G2K} at={K14.other} ringAt={K14.other + 10} />
				<Sx x={600} y={430} text="Ca^{2+} row" size={26} color={CAT_INK} weight={700} at={K14.one + 10} />
				<GivensCard x={760} y={210} w={1060} h={260} at={K14.groups} lh={58} lines={[
					{text: 'calcium nitrate + sodium sulfate', at: K14.calcium, size: 34},
					{text: 'group 1 records: faint white cloud', at: K14.one, size: 34},
					{text: 'group 2 records: no precipitate', at: K14.other, size: 34},
				]} />
				<Sx x={760} y={560} text="1. Explain how both results could happen." size={42} color={INK} hand at={K14.explain} />
				<Sx x={760} y={626} text="2. How would you make the result more reliable?" size={42} color={INK} hand at={K14.reliable} />
				<PauseHold h={h} at={K14.pause} x={760} y={860} cx={1650} cy={810} />
				{void K14.sulfate}
			</Overlay>
		</>
	);
};

// ---------- 15. Feedback 2 (brief) ----------
const F2 = 'feedback-2';
const K15 = cues(sc(F2), {slightly: 'slightly soluble', depends: 'depends on how', drop: 'Different drop sizes', waiting: 'not waiting long', tip: 'tip it either', dirty: 'a dirty well', make: 'To make it reliable', repeat: 'repeat it in', over: 'over black', record: 'record slight', dont: "Don't just decide"});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Overlay>
				<TaskLine text="Explain both results; make it more reliable." at={-100} size={46} />
				<Strip x={110} y={300} label="group 1: faint white cloud" kinds={G1K} at={-100} ringAt={-100} />
				<Strip x={110} y={540} label="group 2: no precipitate" kinds={G2K} at={-100} ringAt={-100} />
				<Sx x={110} y={720} text="slightly soluble" size={44} color={TEAL} hand at={K15.slightly} />
				<Chip x={760} y={240} w={1060} h={64} text="1. CaSO_4 slightly soluble: a cloud depends on amount and time; or contamination" size={31} color={TEAL} at={K15.depends} />
				<Sx x={790} y={360} text="drop size, waiting time: tip it either way" size={32} color={INK} hand at={K15.drop} />
				<Sx x={790} y={404} text="a dirty well can fake a cloud" size={32} color={INK} hand at={K15.dirty} />
				{/* three clean repeats, same drops, over black: the same faint cloud */}
				<Fade at={K15.repeat}><rect x={790} y={470} width={420} height={150} rx={18} fill="#1f1f22" /></Fade>
				{[0, 1, 2].map(i => {
					const cx = 860 + i * 140, cy = 545;
					return (
						<Fade key={i} at={K15.repeat + i * 8}>
							<circle cx={cx} cy={cy} r={46} fill="#141416" stroke="#c9d3da" strokeWidth={4} />
							<Well cx={cx} cy={cy} r={43} kind="faint" p={prog(f, K15.repeat + 10 + i * 8, 24)} seed={i + 9} />
							<Sx x={cx} y={660} text="3 + 3 drops" size={24} color={INK_SOFT} anchor="middle" weight={600} at={K15.repeat + i * 8} />
						</Fade>
					);
				})}
				<Sx x={1240} y={540} text="clean wells, same conditions," size={30} color={TEAL} hand at={K15.repeat + 20} />
				<Sx x={1240} y={580} text="over black: the same faint cloud" size={30} color={TEAL} hand at={K15.over} />
				<Chip x={760} y={700} w={1060} h={64} text={'2. repeat in clean wells, same conditions, over black; record "slight"'} size={31} color={TEAL} at={K15.record} />
				<MistakeChip x={760} y={830} text="one group made a mistake, ignore it" size={34} at={K15.dont} note="slightly soluble is a real result" />
				{void K15.waiting}{void K15.tip}{void K15.make}
			</Overlay>
		</>
	);
};

// ---------- 16. Decision rule and handoff ----------
const DR = 'decision-rule';
const K16 = cues(sc(DR), {inv: 'to investigate solubility', choose: 'choose partners', predict: 'predict every cell', mix: 'mix drops', view: 'view over black', repeat: 'repeat anything doubtful', turn: 'Turn patterns into', explain: 'explain every mismatch', next: 'Next', ksp: 'Ksp which puts'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: 'Always-soluble partners (nitrates, sodium salts); check each stock alone.', at: K16.choose},
		{t: 'Predict all 25 first.', at: K16.predict},
		{t: '3 drops + 3 drops; tip out of the well.', at: K16.mix},
		{t: 'View over black and white.', at: K16.view},
		{t: 'Repeat doubtful cells.', at: K16.repeat},
		{t: 'Rule + evidence + exceptions; untested rules from the table.', at: K16.turn},
		{t: 'Every mismatch: rule wrong or technique?', at: K16.explain},
	];
	const glow = (a: number, b: number) => prog(f, a, 10) * (1 - prog(f, b, 12));
	return (
		<>
			<Heading text="Investigating solubility rules" at={4} size={62} />
			<Overlay>
				<Fade at={K16.inv}><rect x={96} y={200} width={1728} height={570} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				{lines.map((l, i) => {
					const g = glow(l.at, lines[i + 1]?.at ?? K16.next);
					return (
						<g key={i}>
							{g > 0.01 ? <rect x={110} y={228 + i * 76} width={1700} height={64} rx={12} fill="#f6d77a" opacity={0.35 * g} /> : null}
							<Sx x={130} y={274 + i * 76} text={l.t} size={42} color={INK} hand at={l.at} />
						</g>
					);
				})}
				<Chip x={96} y={860} w={820} h={66} text="Next: Ksp, how slightly soluble?" size={40} color={TEAL} at={K16.next + 6} />
				<Fade at={K16.ksp}><PicH p={SATB} x={960} y={810} h={200} /></Fade>
				{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Design: cations as nitrates, anions as sodium salts (all 0.1 mol/L). Nitrates and sodium compounds always dissolve, so a solid can only be the pair being tested. Check each stock alone first.',
	'Method: predict all 25 cells first; 3 drops + 3 drops in a clean well plate; dropper tip out of the well; view over black and white; record ppt or no ppt, colour, heavy or faint. Write "no precipitate", not "no reaction".',
	'Variables: independent, the ion pair; dependent, precipitate, colour and amount; controlled, concentration, drops, temperature, time before recording.',
	'Expected: Na^{+} row all clear. Carbonates solid except Na^{+} (Ag_2CO_3 pale yellow). AgCl white, AgI pale yellow, PbI_2 bright yellow. BaSO_4, PbSO_4 white; CaSO_4, Ag_2SO_4 faint or none. Hydroxides: Ag^{+} brown, Pb^{2+} white, Ca^{2+} faint, Ba^{2+} clear.',
	'Rules: general statement + evidence + exceptions. Untested ions come from the reference table. Each mismatch: rule wrong or technique? Slightly soluble is a real third category; repeat doubtful cells.',
	'Composition: test the clear liquid above a precipitate with a drop of each reagent; more solid shows which ion was in excess. The liquid holds the spectators plus that ion.',
	'Risks: lead nitrate (toxic, cumulative, may harm an unborn baby), silver nitrate (stains, eyes), barium nitrate (harmful if swallowed), NaOH (eyes). Glasses, gloves, drops only, no mouth pipetting, wash hands, heavy-metal waste container.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={25} aidTop={826} aids={["Partners that always dissolve: any solid is the pair you're testing.", 'Predict first. Test. Explain every mismatch.']} tag="same concentration and drops in every well; view over black" />
);
