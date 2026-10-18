import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Bound, Chip, CrystalRig, CRYS_N, DropCount, Fade, GivensCard, ITube, KeyNotesBoard, MistakeChip, Overlay, PauseHold, PushLoop, RefTag, SwatchBar, Sx, TEAL, TaskLine, TileBack, TubeRow, Wisp, crysW, ironW, npt, rowC, smooth} from './parts';
import type {RowG} from './parts';
import {CO_BLUE_INK, CO_PINK_INK, HAZ, Heading, SW_DIL, SW_STOCK, hold, sc} from './common';
import {CRYS} from './assets';
import {MouthDropper} from './s1';

const AT = {y: 300, h: 460};
const tx = (i: number) => 180 + i * 230;
/** A free-standing tube on the white tile for the attempts, with a tag under it. */
const Tube: React.FC<{i: number; s?: {dil?: number; cloud?: number; pale?: number}; at: number; slide?: boolean; tag?: string[]; tagAt?: number}> = ({i, s, at, slide = false, tag = [], tagAt}) => {
	const f = useCurrentFrame();
	const e = slide ? smooth(prog(f, at, 22)) : prog(f, at, 12);
	if (e <= 0.01) return null;
	const x = tx(i) + (1 - e) * (slide ? 200 : 0);
	const w = ironW(AT.h);
	return (
		<g opacity={e}>
			<ITube x={x} y={AT.y} h={AT.h} s={s} />
			{tag.map((t, k) => <Sx key={k} x={x + w / 2} y={AT.y + AT.h + 56 + k * 36} text={t} size={28} anchor="middle" weight={700} at={tagAt ?? at} />)}
		</g>
	);
};

// ---------- 13. Attempt 1 (countdown) ----------
const A1 = 'attempt-1';
const K13 = cues(sc(A1), {turn: 'Your turn', adds: 'adds ten drops', silver: 'silver nitrate solution', paler: 'turns paler', concludes: 'She concludes', left: 'shifted left', what: 'What extra tube', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const h = hold(A1);
	return (
		<>
			<Overlay>
				<TaskLine text="Your turn" at={K13.turn} />
				<TileBack x={130} y={AT.y - 30} w={460} h={AT.h + 60} at={K13.adds - 10} label={false} />
				<Tube i={0} at={K13.adds - 10} tag={['1: reference']} />
				<Tube i={1} s={{dil: 1, pale: 1, cloud: 1}} at={K13.silver} tag={['+ 10 drops', 'silver nitrate soln']} />
				<GivensCard x={700} y={210} w={1120} h={300} at={K13.adds} lh={58} lines={[
					{text: '10 drops of silver nitrate solution added', at: K13.silver, size: 36},
					{text: 'paler than the reference', at: K13.paler, size: 36},
					{text: 'conclusion: "the equilibrium shifted left"', at: K13.left, size: 36},
				]} />
				<Sx x={700} y={630} text="What extra tube would make this" size={52} color={INK} hand at={K13.what} />
				<Sx x={700} y={694} text="conclusion valid, and why?" size={52} color={INK} hand at={K13.what + 12} />
				<PauseHold h={h} at={K13.pause} x={700} y={880} cx={1650} cy={800} />
				{void K13.concludes}
			</Overlay>
		</>
	);
};

// ---------- 14. Feedback 1 (brief) ----------
const F1 = 'feedback-1';
const K14 = cues(sc(F1), {add: 'Add the same', ten: 'ten drops of water', identical: 'identical tube', dil: 'dilution control', volume: 'added volume', could: 'could just be', clearly: 'clearly paler', real: 'shift is real', repeating: 'Repeating the same', reliable: 'more reliable', valid: 'more valid'});
export const SceneFeedback1: React.FC = () => {
	const w = ironW(AT.h);
	const ny = AT.y + AT.h + 130;
	return (
		<>
			<Overlay>
				<TaskLine text="What extra tube would make the conclusion valid?" at={-100} size={44} />
				<TileBack x={130} y={AT.y - 30} w={690} h={AT.h + 60} at={-100} label={false} />
				<Tube i={0} at={-100} tag={['1: reference']} />
				<Tube i={1} s={{dil: 1, pale: 1, cloud: 1}} at={-100} tag={['+ 10 drops', 'silver nitrate soln']} />
				<Tube i={2} s={{dil: 1}} at={K14.ten} slide tag={['+ 10 drops', 'water']} />
				<DropCount x={tx(1) + w / 2} y={ny + 30} at={K14.identical} />
				<DropCount x={tx(2) + w / 2} y={ny + 30} at={K14.identical + 6} />
				<Sx x={(tx(1) + tx(2)) / 2 + w / 2} y={ny + 30} text="=" size={40} color={TEAL} anchor="middle" weight={800} at={K14.identical + 10} />
				<Chip x={960} y={230} w={860} h={64} text="dilution control: same 10 drops of water" size={36} color={TEAL} at={K14.dil} />
				<Sx x={960} y={370} text="the solution added volume:" size={34} color={INK} hand at={K14.volume} />
				<Sx x={960} y={414} text="some paling could just be dilution" size={34} color={INK} hand at={K14.could} />
				<SwatchBar x={1000} y={540} at={K14.clearly} sw={110} gap={100} items={[{c: SW_STOCK, label: 'tube 1'}, {c: SW_DIL, label: 'water'}, {c: '#f8ebe2', label: 'AgNO_3'}]}
					steps={[{from: 0, text: 'dilution', at: K14.clearly + 10, color: TEAL}, {from: 1, text: 'shift', at: K14.real, color: AMBER_INK, big: true}]} />
				<MistakeChip x={960} y={820} text="repeat it three times" size={36} at={K14.repeating} note="reliability, not validity" />
				{void K14.add}{void K14.reliable}{void K14.valid}
			</Overlay>
		</>
	);
};

// ---------- 15. Attempt 2 (countdown) ----------
const A2 = 'attempt-2';
const K15 = cues(sc(A2), {one: 'One more', heats: 'heats pink cobalt', open: 'open test tube', blue: 'turn blue', writes: 'He writes', shows: 'This shows', evaluate: 'Evaluate his conclusion', pause: 'Pause here'});
const RIGA = {x: 96, y: 300, h: 500};
export const SceneAttempt2: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(A2);
	const rw = crysW(RIGA.h);
	return (
		<>
			<Overlay>
				<TaskLine text="One more" at={K15.one} />
				<Fade at={K15.heats - 6}><CrystalRig x={RIGA.x} y={RIGA.y} h={RIGA.h} blue={prog(f, K15.blue, 30)} /></Fade>
				<Bound x={RIGA.x - 20} y={RIGA.y - 20} w={rw + 50} h={RIGA.h + 40} at={K15.open} />
				<Sx x={RIGA.x} y={RIGA.y + RIGA.h + 70} text="open tube" size={34} color={INK_SOFT} hand at={K15.open + 6} />
				<GivensCard x={700} y={210} w={1120} h={250} at={K15.heats} lh={58} lines={[
					{text: 'pink crystals heated in an open tube', at: K15.heats, size: 36},
					{text: 'they turned blue', at: K15.blue, size: 36},
				]} />
				<Fade at={K15.writes}>
					<rect x={700} y={500} width={1120} height={96} rx={20} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />
				</Fade>
				<Sx x={730} y={562} text={'student: "This shows the reaction is reversible."'} size={40} color={INK} hand at={K15.shows} />
				<Sx x={700} y={720} text="Evaluate his conclusion." size={60} color={INK} hand at={K15.evaluate} />
				<PauseHold h={h} at={K15.pause} x={700} y={880} cx={1650} cy={800} />
			</Overlay>
		</>
	);
};

// ---------- 16. Feedback 2 (brief) ----------
const F2 = 'feedback-2';
const K16 = cues(sc(F2), {isnt: "It isn't supported", one: 'one direction', reverse: 'reverse the change', add: 'add water to', pink: 'turn pink', open: 'tube was open', escaped: 'water escaped', tests: 'this tests reversibility', wrote: 'If you wrote', change: "one change isn't"});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const blue = 1 - prog(f, K16.pink, 30);
	const rw = crysW(RIGA.h);
	const [mx, my] = npt(CRYS.pink, RIGA.x, RIGA.y, RIGA.h, ...CRYS_N.mouth);
	const [hx, hy] = npt(CRYS.pink, RIGA.x, RIGA.y, RIGA.h, ...CRYS_N.heap);
	return (
		<>
			<Overlay>
				<TaskLine text={'Evaluate: "This shows the reaction is reversible."'} at={-100} size={44} />
				<CrystalRig x={RIGA.x} y={RIGA.y} h={RIGA.h} blue={blue} />
				<Bound x={RIGA.x - 20} y={RIGA.y - 20} w={rw + 50} h={RIGA.h + 40} at={-100} />
				<MouthDropper rig={RIGA} at={K16.add} squirt={K16.add + 14} out={K16.open} />
				<Sx x={hx + 20} y={hy - 70} text="pink again" size={36} color={CO_PINK_INK} hand at={K16.pink + 10} />
				<Sx x={hx + 20} y={hy - 70} text="blue" size={36} color={CO_BLUE_INK} hand at={-100} out={K16.pink} />
				<Wisp x={mx} y={my} at={K16.open} dx={150} dy={-60} n={4} />
				<Sx x={RIGA.x} y={RIGA.y + RIGA.h + 80} text="open: not an equilibrium" size={38} color={TEAL} hand at={K16.escaped} />
				<Sx x={960} y={240} text="Not supported yet." size={52} color={HAZ} hand at={K16.isnt} />
				<PushLoop x={980} y={380} w={800} at={K16.isnt} changeAt={K16.isnt} backAt={K16.pink} tickAt={K16.pink + 12} missing />
				<Chip x={960} y={640} w={860} h={64} text="one direction only: reverse it (add water, pink returns)" size={30} color={TEAL} at={K16.reverse} />
				<MistakeChip x={960} y={820} text="correct, the colour changed" size={36} at={K16.wrote} note="one change is not a return" />
				{void K16.one}{void K16.tests}{void K16.change}
			</Overlay>
		</>
	);
};

// ---------- 17. Decision rule and handoff ----------
const DR = 'decision-rule';
const K17 = cues(sc(DR), {plan: 'to plan an equilibrium', push: 'push the reaction', back: 'bring it back', closed: 'closed system', ref: 'untouched reference', one: 'one change per', dil: 'dilution control', judge: 'judge colours', risk: 'risk assessment first', next: 'Next', number: 'putting a number'});
const ROW17: RowG = {x0: 1370, dx: 76, y: 560, h: 230};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const lines = [
		{t: 'Push it, bring it back.', at: K17.push},
		{t: 'Closed system.', at: K17.closed},
		{t: 'Reference tube, never changed.', at: K17.ref},
		{t: 'One change per tube.', at: K17.one},
		{t: 'Dilution control: same volume of water.', at: K17.dil},
		{t: 'Judge side by side on a white tile.', at: K17.judge},
		{t: 'Risk assessment first.', at: K17.risk},
	];
	const glow = (a: number, b: number) => prog(f, a, 10) * (1 - prog(f, b, 12));
	return (
		<>
			<Heading text="Planning an equilibrium investigation" at={4} size={60} />
			<Overlay>
				<Fade at={K17.plan}><rect x={96} y={200} width={1180} height={560} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				{lines.map((l, i) => {
					const g = glow(l.at, lines[i + 1]?.at ?? K17.next);
					return (
						<g key={i}>
							{g > 0.01 ? <rect x={110} y={232 + i * 74} width={1150} height={62} rx={12} fill="#f6d77a" opacity={0.35 * g} /> : null}
							<Sx x={130} y={276 + i * 74} text={l.t} size={44} color={INK} hand at={l.at} />
						</g>
					);
				})}
				<PushLoop x={1340} y={300} w={480} at={K17.push} changeAt={K17.push} backAt={K17.back} s={0.55} labels={false} tickAt={K17.back + 8} />
				<TubeRow g={ROW17} at={K17.ref - 10} numSize={24} tilePulse={K17.judge} tubes={[{pulse: K17.ref}, {pulse: K17.one}, {pulse: K17.one + 4}, {pulse: K17.one + 8}, {s: {dil: 1}, pulse: K17.dil}, {pulse: K17.one + 12}]} />
				<Chip x={96} y={860} w={900} h={66} text="Next: a number for where an equilibrium sits" size={38} color={TEAL} at={K17.next + 6} />
				<Fade at={K17.number}><ITube x={1040} y={790} h={220} /></Fade>
				{void rowC}
			</Overlay>
		</>
	);
};

// ---------- 18. Key notes ----------
const NOTES = [
	'Reversibility test: change the conditions, then reverse the change. A return to the start is the evidence; one change is not. Cobalt chloride crystals: heat, pink to blue (water driven off); add water, blue to pink (warms). Burning magnesium: no school condition brings magnesium back, so it is treated as irreversible.',
	'An equilibrium investigation keeps every reacting substance in: dissolved ions stay in solution (an open tube only loses a little water); a gas needs a sealed tube or syringe. State what is sealed. The heated open crystal tube shows reversibility, not an equilibrium.',
	'Disturbance method: pale Fe^{3+}/SCN^{-} stock in six identical tubes; tube 1 is the untouched reference; one change per tube; judge side by side on a white tile. Independent variable: what is added, or temperature. Dependent: colour compared with tube 1. Controlled: stock volume, tube size, background and lighting, time before judging.',
	'Expected: + Fe^{3+} or + SCN^{-} (as solids): deeper red (shift right). + NaOH: paler, rust-brown Fe(OH)_3 (Fe^{3+} removed, shift left). Dilution control (same drops of water): only slightly paler, so tube 4\'s fading is a real shift. Cobalt solution (stoppered): hot blue, ice pink, room purple again. Sealed NO_2: hot browner, ice paler.',
	'Validity: tests what it claims (one change, reference, dilution control). Reliability: repeats agree (repeat tubes, other groups, two observers). Accuracy: close to the true value (eye judgement is rough; a colourimeter gives numbers).',
	'Risks: cobalt chloride harmful if swallowed, may cause cancer if dust inhaled, allergies (small amounts, no dust, gloves); thiocyanate plus acid releases a very toxic gas (never mix); NaOH harms eyes (glasses); hot bath scalds (holder); burning magnesium (never look at the flame); waste into the labelled residues container.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={26} aidTop={818} aids={['Push it, then bring it back.', 'Pink in the rain, blue in the desert.']} tag="a return is the evidence; compare with the reference; control the dilution" />
);
void RefTag; void AMBER_INK;
