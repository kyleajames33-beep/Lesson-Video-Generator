import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {COOL, HOT, Heading, WATER_INK, hold, kf, sc} from './common';
import {SAT, UNSAT, WASH} from './assets';
import {Chip, CodeThermo, Fade, GivensCard, HydratedIon, KeyNotesBoard, Ledger, MistakeChip, Overlay, PauseHold, PicFit, PicH, QKGauge, Sx, TEAL, TaskLine, platePt, pulseAt} from './parts';
import type {Ln} from './parts';

// ---------- 12. Attempt 1 (countdown) ----------
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', amm: 'ammonium chloride', falls: 'temperature falls', from: 'from 22', to: 'to 17', explain: 'Explain this', steps: 'two energy steps', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(A1);
	const level = kf(f, [[0, 0.62], [K14.falls, 0.62], [K14.to + 30, 0.4]]);
	return (
		<>
			<Overlay>
				<TaskLine text="Your turn" at={K14.turn} />
				<GivensCard x={96} y={220} w={960} h={240} at={K14.amm} lh={62} lines={[
					{text: 'ammonium chloride, NH_4Cl, dissolves in water', at: K14.amm, size: 36},
					{text: 'temperature: 22 C → 17 C', at: K14.falls, size: 36},
				]} />
				<Sx x={96} y={580} text="Explain the temperature change" size={52} color={INK} hand at={K14.explain} />
				<Sx x={96} y={644} text="using the two energy steps." size={52} color={INK} hand at={K14.steps} />
				<Fade at={K14.amm}><PicH p={UNSAT} x={1180} y={360} h={330} /></Fade>
				<CodeThermo x={1330} y={190} h={430} level={level} at={K14.falls} w={26} />
				<Sx x={1490} y={300} text="22 C" size={38} color={INK} weight={700} at={K14.from} />
				<Sx x={1490} y={420} text="17 C" size={38} color={COOL} weight={700} at={K14.to} />
				<PauseHold h={h} at={K14.pause} x={96} y={860} cx={1560} cy={850} />
			</Overlay>
		</>
	);
};

// ---------- 13. Feedback 1 (brief) ----------
const F1 = 'feedback-1';
const K15 = cues(sc(F1), {cooled: 'The water cooled', endo: 'is endothermic', sep: 'Separating its ions', more: 'more energy', hyd: 'than hydrating them', taken: 'taken from the water', wrote: 'If you wrote', flip: 'flip it', clinging: 'water clinging', releases: 'always releases'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const level = kf(f, [[0, 0.6], [K15.taken, 0.6], [K15.taken + 40, 0.3]]);
	return (
		<>
			<Overlay>
				<TaskLine text="Explain: NH_4Cl dissolves, 22 C → 17 C" at={-100} size={46} />
				<Sx x={96} y={240} text="the water cooled, so dissolving is" size={40} color={INK} hand at={K15.cooled} />
				<Chip x={680} y={196} w={620} text="endothermic: ΔH(solution) > 0" size={38} color={HOT} at={K15.endo} />
				<CodeThermo x={260} y={330} h={460} level={level} at={K15.cooled} label="water" />
				<Ledger x={560} base={740} h1={330} h2={230} bw={100} gap={60} p1={prog(f, K15.sep, 26)} p2={prog(f, K15.hyd, 26)} pn={prog(f, K15.taken - 10, 20)} />
				<Sx x={1020} y={430} text="1. separate NH_4^{+} and Cl^{-}: energy in" size={36} color={HOT} hand at={K15.sep} />
				<Sx x={1020} y={490} text="2. hydrate them: energy out (smaller)" size={36} color={COOL} hand at={K15.hyd} />
				<Sx x={1020} y={560} text="more in than out: taken from the water" size={36} color={INK} hand at={K15.taken} />
				<MistakeChip x={1020} y={720} text="hydration takes in energy" size={34} at={K15.wrote} note="hydration always releases energy" />
				{void K15.more}{void K15.flip}{void K15.clinging}{void K15.releases}
			</Overlay>
		</>
	);
};

// ---------- 14. Attempt 2 (countdown) ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {last: 'Last one', water: 'more water', sat: 'saturated sodium chloride solution', solid: 'solid on the bottom', stir: 'stir and wait', same: 'same temperature', left: 'still left', mass: 'mass of solid', conc: 'final concentration', pause: 'Pause here'});
const BW = {x: 380, y: 300, h: 420};
export const SceneAttempt2: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold(A2);
	const surf = platePt(SAT, BW.x, BW.y, BW.h, 0.5, 0.29);
	const rise = prog(f, K16.water + 10, 80);
	const [lx0] = platePt(SAT, BW.x, BW.y, BW.h, 0.06, 0);
	const [lx1] = platePt(SAT, BW.x, BW.y, BW.h, 0.94, 0);
	const tip: [number, number] = [140 + 173 * 0.987, 190 + 340 * 0.149];
	const pour = prog(f, K16.water, 10) * (1 - prog(f, K16.stir, 14));
	return (
		<>
			<Overlay>
				<TaskLine text="Last one" at={K16.last} />
				<PicH p={SAT} x={BW.x} y={BW.y} h={BW.h} />
				{rise > 0.01 ? <rect x={lx0 + 6} y={surf[1] - 30 * rise} width={lx1 - lx0 - 12} height={30 * rise} fill="#cfe6f5" opacity={0.55} /> : null}
				<Sx x={BW.x} y={770} text="saturated NaCl, solid present" size={32} color={INK} weight={700} at={K16.sat} />
				<Fade at={K16.water - 10}><PicFit p={WASH} x={140} y={190} w={173} h={340} /></Fade>
				{pour > 0.01 ? <path d={`M${tip[0]},${tip[1]} Q${tip[0] + 90},${tip[1] - 30} ${surf[0] - 70},${surf[1] - 20}`} fill="none" stroke="#7fb8de" strokeWidth={6} strokeLinecap="round" strokeDasharray="14 10" strokeDashoffset={-f * 2} opacity={pour} /> : null}
				<GivensCard x={860} y={220} w={940} h={300} at={K16.water} lh={62} lines={[
					{text: 'water added', at: K16.water, size: 38},
					{text: 'stir and wait, same temperature', at: K16.same, size: 38},
					{text: 'some solid still left at the end', at: K16.left, size: 38},
				]} />
				<Sx x={860} y={640} text="1. Mass of solid?" size={52} color={INK} hand at={K16.mass} />
				<Sx x={860} y={712} text="2. Final concentration?" size={52} color={INK} hand at={K16.conc} />
				<PauseHold h={h} at={K16.pause} x={860} y={870} cx={1660} cy={850} />
				{void K16.solid}{void K16.stir}{void WATER_INK}
			</Overlay>
		</>
	);
};

// ---------- 15. Feedback 2 (brief) ----------
const F2 = 'feedback-2';
const K17 = cues(sc(F2), {down: 'goes down', lowers: 'lowers the ion concentrations', below: 'below K', moreS: 'more solid dissolves', keeps: 'keeps dissolving', again: ['saturated again', 1], same: 'the same as before', dilute: 'more dilute', check: 'check', still: 'solid is still there'});
const LN17: Ln = {y: 540, x0: 960, x1: 1640, lo: -1, hi: 1};
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const thin = 0.5 * prog(f, K17.down, 60);
	const q = (f2: number) => 10 ** kf(f2, [[0, 0], [K17.below - 10, 0], [K17.below + 20, -0.75], [K17.keeps, -0.75], [K17.again, 0]]);
	return (
		<>
			<Overlay>
				<TaskLine text="1. Mass of solid?   2. Final concentration?" at={-100} size={44} />
				<PicH p={SAT} x={96} y={260} h={420} o={1 - thin} />
				{thin > 0.01 ? <PicH p={UNSAT} x={96} y={260} h={420} o={thin} /> : null}
				<Chip x={560} y={220} w={330} text="1. less solid" size={40} color={TEAL} at={K17.down} />
				<Sx x={960} y={340} text="added water lowers [Na^{+}] and [Cl^{-}]" size={36} color={INK} hand at={K17.lowers} />
				<QKGauge ln={LN17} at={K17.lowers + 10} q={q} />
				<Sx x={960} y={760} text="Q < K: more solid dissolves" size={38} color={TEAL} hand at={K17.moreS} out={K17.keeps + 30} />
				<Sx x={960} y={760} text="until saturated again: Q = K" size={38} color={TEAL} hand at={K17.keeps + 34} />
				<Chip x={560} y={800} w={780} text="2. same concentration (saturated again)" size={38} color={TEAL} at={K17.same} />
				<MistakeChip x={96} y={900} text="final solution more dilute" size={34} at={K17.dilute} note="solid present: saturated at this temperature" />
				{void K17.check}{void K17.still}{void pulseAt}
			</Overlay>
		</>
	);
};

// ---------- 16. Decision rule and handoff ----------
const DR = 'decision-rule';
const K18 = cues(sc(DR), {dissolves: 'ionic solid dissolves', pull: 'pull the ions out', hydrate: 'and hydrate them', explain: 'To explain a temperature change', compare: 'compare the cost', payback: 'payback from hydrating', solid: 'with solid on the bottom', eqm: "it's an equilibrium", kq: 'use K and Q', next: 'Next', food: 'toxins from food'});
const RowGlow: React.FC<{y: number; at: number; out: number}> = ({y, at, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10) * (1 - prog(f, out, 12));
	return o > 0.01 ? <rect x={110} y={y - 50} width={1270} height={70} rx={14} fill="#f6d77a" opacity={0.35 * o} /> : null;
};
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="When an ionic solid dissolves" at={4} size={60} />
			<Overlay>
				<Fade at={K18.dissolves}><rect x={96} y={220} width={1300} height={470} rx={24} fill="#fffdf8" stroke={TEAL} strokeWidth={3} /></Fade>
				<RowGlow y={320} at={K18.pull} out={K18.explain} />
				<RowGlow y={460} at={K18.compare} out={K18.solid} />
				<RowGlow y={600} at={K18.eqm} out={K18.next} />
				<Sx x={130} y={320} text="Dissolving: water pulls the ions out and hydrates them." size={42} color={INK} hand at={K18.pull} />
				<Sx x={130} y={460} text="Temperature: compare separating (in) with hydrating (out)." size={42} color={INK} hand at={K18.compare} />
				<Sx x={130} y={600} text="Solid on the bottom: equilibrium, so use K and Q." size={42} color={INK} hand at={K18.eqm} />
				<Fade at={K18.pull}><HydratedIon x={1610} y={300} kind="+" shell={1} ws={1} n={6} rot={f * 0.004} /></Fade>
				<Fade at={K18.compare}><Ledger x={1520} base={500} h1={110} h2={80} bw={44} gap={30} p1={prog(f, K18.compare, 16)} p2={prog(f, K18.payback, 16)} pn={prog(f, K18.payback + 16, 16)} s={0.5} /></Fade>
				<Fade at={K18.solid}><PicH p={SAT} x={1530} y={540} h={170} /></Fade>
				<Chip x={96} y={800} w={1060} text="Next: solubility and food detoxification knowledge" size={40} color={TEAL} at={K18.next + 6} />
				{void K18.hydrate}{void K18.explain}{void K18.kq}{void K18.food}{void DrawPath}{void AMBER_INK}{void INK_SOFT}
			</Overlay>
		</>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Dissolving an ionic solid: polar water molecules turn their oppositely charged ends to the ions (ion-dipole attraction), pull ions off the lattice and surround them (hydrated ions). NaCl(s) → Na^{+}(aq) + Cl^{-}(aq). The ions already existed; dissolving separates them.',
	'Two energy steps: separating the ions from the lattice takes in energy (+); hydrating the ions releases energy (−). ΔH(solution) = the sum. Hydration bigger: exothermic, the water warms (CaCl_2, −81 kJ/mol). Separation bigger: endothermic, the water cools (NH_4NO_3, +25.7 kJ/mol).',
	'An endothermic salt can still dissolve because spreading out (an increase in entropy) also favours dissolving. Energy alone does not predict solubility.',
	'Saturated solution with solid present: dynamic equilibrium, NaCl(s) ⇌ Na^{+}(aq) + Cl^{-}(aq). Dissolving rate = crystallising rate, so the concentration and the mass of solid stay constant. Evidence: radioactive ions added in a crystal spread into the solution.',
	'Changes: adding solid, no shift (solid left out of K). Adding water, more dissolves until saturated again (same concentration). Temperature changes K: for endothermic dissolving, heating dissolves more.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={800} aids={['Lattice costs, hydration pays.', 'Saturated means equal rates, not stopped.']} tag="same temperature; solid still present" />
);
void PicFit;
