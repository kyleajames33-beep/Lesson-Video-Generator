// M6 C02 scenes 11 to 19: metals above hydrogen, the gas tests, memory aid, two worded attempts with brief feedback,
// the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {BEAKER, COPPER, LIME, MARBLE, MG_ACID, SPLINT, ZINC} from './assets';
import {
	AChip, AMBER, AMBER_INK, Arrow, CodeThermo, EqLine, Fade, INK, INK_SOFT, KeyNotesBoard, Mistake, Note, Overlay, PairAt, PatternCard, PauseHold, PlateAt, QText, Ring, RuleCard, SaltBuilder,
	SeriesBar, Sx, TEAL, TaskLine, Under, eq, fitSize, mw, patternW, picW, qCheck, smooth,
} from './parts';
import type {QMark} from './parts';

// ---------- 11. Only metals above hydrogen ----------
const H11 = 'above-hydrogen';
const K11 = cues(sc(H11), {only: 'only metals above hydrogen', like: 'like magnesium, aluminium', copper: 'Copper and silver', below: 'sit below hydrogen', nothing: 'nothing happens', nob: 'No bubbles', watch: 'watch the gas formula', h2: 'H two, never'});
export const SceneAbove: React.FC = () => {
	const ph = 380, py = 450;
	const good = eq(['Mg(s)', '+', '2HCl(aq)', '->', 'MgCl_2(aq)', '+', 'H_2(g)'], K11.h2 + 30);
	return (
		<>
			<Heading text="Only metals above hydrogen" at={4} size={56} />
			<Overlay>
				<SeriesBar x={220} y={300} metals={['Mg', 'Al', 'Zn', 'Fe', 'Cu', 'Ag']} hAfter={3} at={K11.only} litAbove={K11.like} litBelow={K11.copper} />
				<PlateAt p={MG_ACID} x={200} y={py} h={ph} at={K11.like} />
				<Note x={200 + picW(MG_ACID, ph) / 2} y={py + ph + 46} text="magnesium: fizzes" size={36} anchor="middle" at={K11.like + 6} />
				<PlateAt p={COPPER} x={640} y={py} h={ph} at={K11.copper} />
				<Note x={640 + picW(COPPER, ph) / 2} y={py + ph + 46} text="copper: no reaction" size={36} color="#7a746a" anchor="middle" at={K11.nothing} />
				<Note x={640 + picW(COPPER, ph) / 2} y={py + ph + 90} text="no bubbles, no salt" size={32} color={INK_SOFT} anchor="middle" at={K11.nob} />
				<Note x={1180} y={560} text="hydrogen gas is H_2" size={44} color={TEAL} at={K11.watch} />
				<Mistake x={1180} y={610} text="Mg + 2HCl → MgCl_2 + 2H" at={K11.h2} note="hydrogen gas is H₂, never H" size={34} />
				<EqLine items={good} x={1180} y={830} size={fitSize(good, 640, 40)} />
				<Note x={1180} y={890} text="the hook's magnesium, written correctly" size={30} color={INK_SOFT} at={K11.h2 + 40} />
				{void K11.below}
			</Overlay>
		</>
	);
};

// ---------- 12. Telling the gases apart ----------
const H12 = 'gas-tests';
const K12 = cues(sc(H12), {both: 'both fizz', lime: 'through limewater', milky: 'turns it milky', splint: 'Hold a burning splint', pop: 'squeaky pop', carb: 'Carbonate means carbon dioxide', metal: 'Metal means hydrogen'});
export const SceneGas: React.FC = () => {
	const f = useCurrentFrame();
	const h = 600, y = 230;
	const lx = 330, sx = 1150;
	const lw = picW(LIME.clear, h), sw = picW(SPLINT, h);
	const popS = 1 + 0.3 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - K12.pop) / 20)) * Math.PI));
	return (
		<>
			<Heading text="Telling the two gases apart" at={4} size={56} />
			<Overlay>
				<Note x={96} y={200} text="patterns 2 and 3 both fizz" size={36} color={INK_SOFT} at={K12.both} />
				<PairAt a={LIME.clear} b={LIME.milky} x={lx} y={y} h={h} at={K12.lime - 6} swap={K12.milky} dur={10} />
				<Ring cx={lx + lw * 0.66} cy={y + h * 0.72} rx={48} ry={120} at={K12.milky + 12} color={AMBER} seed={4} />
				<Note x={lx + lw + 20} y={y + h * 0.5} text="limewater" size={38} at={K12.lime} />
				<Note x={lx + lw + 20} y={y + h * 0.5 + 50} text="turns milky" size={38} color={AMBER_INK} at={K12.milky} />
				<AChip x={lx + lw / 2} y={y + h + 30} text="CO₂: limewater milky" size={38} color={TEAL} anchor="middle" at={K12.milky + 10} />
				<PlateAt p={SPLINT} x={sx} y={y} h={h} at={K12.splint - 4} />
				<g transform={`translate(${sx + sw * 0.1},${y + 30}) scale(${popS}) translate(${-(sx + sw * 0.1)},${-(y + 30)})`}>
					<Sx x={sx - 60} y={y + 40} text="pop!" size={56} color="#c4432f" hand at={K12.pop} />
				</g>
				<Note x={sx + sw + 20} y={y + h * 0.35} text="burning splint" size={38} at={K12.splint} />
				<Note x={sx + sw + 20} y={y + h * 0.35 + 50} text="at the mouth" size={38} at={K12.splint + 10} />
				<AChip x={sx + sw / 2} y={y + h + 30} text="H₂: squeaky pop" size={38} color={TEAL} anchor="middle" at={K12.pop + 10} />
				<PlateAt p={MARBLE} x={96} y={760} h={150} at={K12.carb} />
				<Arrow x1={240} y1={790} x2={lx + 30} y2={y + h * 0.75} at={K12.carb + 4} color={TEAL} width={4} />
				<Note x={96} y={960} text="carbonate → CO₂" size={34} color={TEAL} at={K12.carb + 6} />
				<PlateAt p={MG_ACID} x={1700} y={760} h={150} at={K12.metal} />
				<Arrow x1={1700} y1={790} x2={sx + sw * 0.85} y2={y + h * 0.8} at={K12.metal + 4} color={TEAL} width={4} />
				<Note x={1600} y={960} text="metal → H₂" size={34} color={TEAL} at={K12.metal + 6} />
				<AChip x={960} y={1000} text="teacher demonstration" size={30} color="#b5502b" anchor="middle" at={K12.splint + 20} />
			</Overlay>
		</>
	);
};

// ---------- 13. Memory aid ----------
const H13 = 'memory-aid';
const K13 = cues(sc(H13), {here: "here's what to remember", salt: 'For the salt', metal: 'the metal, or ammonium', acid2: 'the acid names the second', mgso4: 'Magnesium with sulfuric', products: 'For the products', hyd: 'hydroxide, water', carb: 'Carbonate, water and carbon dioxide', metal2: 'Metal, hydrogen', name: "for the acid's name", ate: 'ate becomes ic', ite: 'ite becomes ous'});
export const SceneAid: React.FC = () => (
	<>
		<Heading text="What to remember" at={4} size={56} />
		<Overlay>
			<SaltBuilder x={96} y={240} s={0.75} at={K13.salt} size={38} slotW={330} spec={{cat: 'magnesium', an: 'sulfate', nCat: 1, nAn: 1, formula: 'magnesium sulfate'}} catAt={K13.metal} anAt={K13.acid2} resAt={K13.mgso4 + 20} />
			<Note x={96} y={510} text="Metal (or ammonium) names the first word; the acid names the second." size={46} color={TEAL} at={K13.metal} />
			<PatternCard x={96} y={570} n={1} partner="hydroxide" products={['salt', 'water']} at={K13.products} s={0.9} lit={K13.hyd} />
			<PatternCard x={96} y={666} n={2} partner="carbonate" products={['salt', 'water', 'CO₂']} at={K13.products + 6} s={0.9} lit={K13.carb} />
			<PatternCard x={96} y={762} n={3} partner="metal" products={['salt', 'H₂']} at={K13.products + 12} s={0.9} lit={K13.metal2} />
			<Note x={96 + patternW('carbonate', ['salt', 'water', 'CO₂'], 0.9) + 30} y={714} text="test: limewater milky" size={34} color={INK_SOFT} at={K13.carb + 10} />
			<Note x={96 + patternW('metal', ['salt', 'H₂'], 0.9) + 30} y={810} text="test: squeaky pop" size={34} color={INK_SOFT} at={K13.metal2 + 10} />
			<AChip x={96 + patternW('hydroxide', ['salt', 'water'], 0.9) + 30} y={580} text="ammonia: salt only, no water" size={30} color={AMBER_INK} at={K13.hyd + 10} />
			<AChip x={820} y={772} text="metal must be above hydrogen" size={30} color={AMBER_INK} at={K13.metal2 + 20} />
			<Note x={96} y={940} text="-ate → -ic;  -ite → -ous;  hydro- only without oxygen" size={48} color={INK} at={K13.ate} />
			{void K13.here}{void K13.name}{void K13.ite}
		</Overlay>
	</>
);

const CardBox: React.FC<{y: number; h: number; at: number}> = ({y, h, at}) => (
	<Fade at={at}><rect x={100} y={y} width={1720} height={h} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} /></Fade>
);

// ---------- 14/15. Question 1 ----------
const A1 = 'attempt-1';
const K14 = cues(sc(A1), {turn: 'Your turn', write: 'Write a balanced', pause: 'Pause here'});
const Q1 = (a: number, marks: QMark[] = []) => qCheck([{text: 'Write a balanced chemical equation, including states, for the reaction between dilute nitric acid and solid calcium carbonate.', at: a}], marks);
qCheck(Q1(0).blocks, [{phrase: 'dilute nitric acid', at: 0}, {phrase: 'solid calcium carbonate', at: 0}, {phrase: 'including states', at: 0}]);
const Question1: React.FC<{a: number; marks?: QMark[]}> = ({a, marks}) => (
	<>
		<CardBox y={210} h={210} at={a - 4} />
		<QText q={Q1(a, marks)} x={140} y={290} w={1640} size={46} card={false} />
	</>
);
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<TaskLine text="Your turn" at={K14.turn} />
		<Question1 a={K14.write} />
		<PauseHold h={hold(A1)} at={K14.pause} x={140} y={640} cx={1560} cy={680} />
	</Overlay>
);
const F1 = 'feedback-1';
const K15 = cues(sc(F1), {nitric: 'Nitric acid is', carb: 'a carbonate means', co2: 'water and carbon dioxide', ca: 'Calcium is two plus', no3: 'nitrate is one minus', canit: 'calcium nitrate', two: 'That needs two', stopped: 'If you stopped', left: 'left out the carbon'});
export const SceneFeedback1: React.FC = () => {
	const items = eq(['CaCO_3(s)', '+', '2HNO_3(aq)', '->', 'Ca(NO_3)_2(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], [K15.two, K15.two + 4, K15.two + 8, K15.two + 14, K15.two + 18, K15.two + 22, K15.two + 26, K15.two + 30, K15.two + 34]);
	const S = fitSize(items, 1700, 54);
	return (
		<Overlay>
			<TaskLine text="Name, spot the pattern, build the salt, balance" at={K15.nitric} size={46} />
			<Question1 a={-100} marks={[{phrase: 'dilute nitric acid', at: K15.nitric}, {phrase: 'solid calcium carbonate', at: K15.carb}, {phrase: 'including states', at: K15.two + 30}]} />
			<AChip x={140} y={460} text="nitric acid: HNO_3" size={38} color={INK} hand={false} at={K15.nitric + 6} />
			<AChip x={560} y={460} text="calcium carbonate: CaCO_3(s)" size={38} color={INK} hand={false} at={K15.carb + 6} />
			<PatternCard x={1150} y={455} n={2} partner="carbonate" products={['salt', 'water', 'CO₂']} at={K15.carb + 10} s={0.72} lit={K15.co2} />
			<SaltBuilder x={140} y={600} s={0.88} slotW={240} at={K15.ca - 6} spec={{cat: 'Ca^{2+}', an: 'NO_3^{-}', nCat: 1, nAn: 2, formula: 'Ca(NO_3)_2', tally: '(+2) + 2(−1) = 0', name: 'calcium nitrate'}} catAt={K15.ca} anAt={K15.no3} resAt={K15.canit} />
			<EqLine items={items} x={140} y={900} size={S} />
			<Mistake x={1120} y={640} text="CaCO_3 + 2HNO_3 → Ca(NO_3)_2 + H_2O" at={K15.stopped} note="carbonate: CO₂ too" size={32} />
			{void K15.left}
		</Overlay>
	);
};

// ---------- 16/17. Question 2 ----------
const A2 = 'attempt-2';
const K16 = cues(sc(A2), {last: 'Last one', zinc: 'Zinc granules', copper: 'Copper turnings', use: 'Use the activity series', pause: 'Pause here'});
const Q2 = (a: number, b: number, c: number, marks: QMark[] = []) => qCheck([
	{text: 'Zinc granules are added to dilute sulfuric acid.', at: a},
	{text: 'Copper turnings are added to a separate sample of the same acid.', at: b},
	{text: 'Use the activity series provided to predict what would be observed in each test, and write a balanced equation for any reaction that occurs.', at: c, para: true},
], marks);
qCheck(Q2(0, 0, 0).blocks, [{phrase: 'Zinc granules', at: 0}, {phrase: 'dilute sulfuric acid', at: 0}, {phrase: 'Copper turnings', at: 0}]);
const SER = ['K', 'Na', 'Ca', 'Mg', 'Al', 'Zn', 'Fe', 'Sn', 'Pb', '(H)', 'Cu', 'Ag', 'Au'];
const SS = 40, SX = 140, SY = 640;
const serX = (i: number) => SX + mw('Part of the activity series: ', SS, false, 600) + SER.slice(0, i).reduce((a, m) => a + mw(m + ' > ', SS, false, 700), 0);
const Stimulus: React.FC<{at: number; marks?: {i: number; at: number; color?: string}[]}> = ({at, marks = []}) => (
	<>
		<Fade at={at}><rect x={100} y={SY - 62} width={1720} height={100} rx={18} fill="#f7f3ea" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 7" /></Fade>
		<Sx x={SX} y={SY} text="Part of the activity series: " size={SS} color={INK_SOFT} weight={600} at={at} />
		<Sx x={serX(0)} y={SY} text={SER.join(' > ')} size={SS} color={INK} weight={700} at={at} />
		{marks.map((m, k) => <Under key={k} x1={serX(m.i)} x2={serX(m.i) + mw(SER[m.i], SS, false, 700)} y={SY + 12} at={m.at} color={m.color ?? AMBER} />)}
	</>
);
const Question2: React.FC<{a: number; b: number; c: number; marks?: QMark[]}> = ({a, b, c, marks}) => (
	<>
		<CardBox y={200} h={330} at={a - 4} />
		<QText q={Q2(a, b, c, marks)} x={140} y={270} w={1640} size={42} card={false} />
	</>
);
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<TaskLine text="Last one" at={K16.last} />
		<Question2 a={K16.zinc} b={K16.copper} c={K16.use} />
		<Stimulus at={K16.use} />
		<PauseHold h={hold(A2)} at={K16.pause} x={140} y={830} cx={1560} cy={850} />
	</Overlay>
);
const F2 = 'feedback-2';
const K17 = cues(sc(F2), {zinc: 'Zinc is above', fizzes: 'it fizzes', dissolves: 'zinc slowly dissolves', znso4: 'zinc sulfate plus hydrogen', balanced: 'already balanced', copper: 'Copper is below', nochange: 'no visible change', trap: 'is the trap', doesnt: "doesn't happen"});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const items = eq(['Zn(s)', '+', 'H_2SO_4(aq)', '->', 'ZnSO_4(aq)', '+', 'H_2(g)'], K17.znso4);
	const ph = 230, py = 720;
	return (
		<Overlay>
			<TaskLine text="Above hydrogen reacts; below does not" at={K17.zinc} size={46} />
			<Question2 a={-100} b={-100} c={-100} marks={[{phrase: 'Zinc granules', at: K17.zinc}, {phrase: 'Copper turnings', at: K17.copper}]} />
			<Stimulus at={-100} marks={[{i: 5, at: K17.zinc + 8, color: TEAL}, {i: 9, at: K17.zinc + 16}, {i: 10, at: K17.copper + 8, color: '#7a746a'}]} />
			<PlateAt p={ZINC} x={110} y={py} h={ph} at={K17.fizzes - 6} />
			<Note x={110 + picW(ZINC, ph) + 20} y={py + 50} text="Zinc: bubbles of gas;" size={36} color={TEAL} at={K17.fizzes} />
			<Note x={110 + picW(ZINC, ph) + 20} y={py + 94} text="zinc slowly dissolves" size={36} color={TEAL} at={K17.dissolves} />
			<EqLine items={items} x={110 + picW(ZINC, ph) + 20} y={py + 170} size={34} />
			<Note x={110 + picW(ZINC, ph) + 20} y={py + 220} text="already balanced" size={30} color={INK_SOFT} at={K17.balanced} />
			<PlateAt p={COPPER} x={1110} y={py} h={ph} at={K17.copper} />
			<Note x={1110 + picW(COPPER, ph) + 20} y={py + 50} text="Copper: no visible change," size={36} color="#7a746a" at={K17.nochange} />
			<Note x={1110 + picW(COPPER, ph) + 20} y={py + 94} text="no reaction, no equation" size={36} color="#7a746a" at={K17.nochange + 8} />
			<Mistake x={1110 + picW(COPPER, ph) + 20} y={py + 130} text="Cu + H_2SO_4 → CuSO_4 + H_2" at={K17.trap} note="below hydrogen: no reaction" size={28} />
			{void f}{void K17.doesnt}{void smooth}{void prog}
		</Overlay>
	);
};

// ---------- 18. Decision rule and handoff ----------
const DR = 'decision-rule';
const K18 = cues(sc(DR), {any: 'for any acid reaction', name: 'name the acid', spot: 'spot the pattern', build: 'build the salt', add: 'add water, carbon dioxide', bal: 'then balance', next: 'Next', heat: 'gives out heat'});
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<>
			<Heading text="For any acid reaction" at={4} size={58} />
			<Overlay>
				<RuleCard x={96} y={190} w={1728} at={K18.any} lh={86} lines={[
					{t: '1. Name the acid.', at: K18.name, lit: [K18.name, K18.spot], size: 44},
					{t: '2. Spot the pattern: hydroxide, ammonia, carbonate, metal.', at: K18.spot, lit: [K18.spot, K18.build], size: 44},
					{t: '3. Build the salt from the charges.', at: K18.build, lit: [K18.build, K18.add], size: 44},
					{t: '4. Add water, CO₂ or H₂ (ammonia: nothing extra; metal below H: no reaction).', at: K18.add, lit: [K18.add, K18.bal], size: 40},
					{t: '5. Balance.', at: K18.bal, lit: [K18.bal, K18.next], size: 44},
				]} />
				<AChip x={96} y={760} text="Next: the heat of neutralisation" size={44} color={TEAL} at={K18.next} />
				<PlateAt p={BEAKER} x={800} y={700} h={320} at={K18.heat} />
				<CodeThermo x={1180} y={700} h={320} level={0.3 + 0.4 * smooth(prog(f, K18.heat + 10, 40))} at={K18.heat} />
			</Overlay>
		</>
	);
};

// ---------- 19. Key notes ----------
const NOTES = [
	'Common inorganic acids come in two groups. Binary acids (H + one non-metal, no O): hydro + non-metal + ic acid. HCl hydrochloric, HBr hydrobromic, HF hydrofluoric, H_2S hydrosulfuric.',
	'Oxoacids (contain O), named from the ion: -⁠ate → -⁠ic (H_2SO_4 sulfuric, HNO_3 nitric, H_3PO_4 phosphoric, H_2CO_3 carbonic); -⁠ite → -⁠ous (H_2SO_3 sulfurous, HNO_2 nitrous). Never hydro-.',
	'Bases: metal hydroxides (NaOH sodium hydroxide, Ca(OH)_2, Mg(OH)_2); ammonia NH_3 (not "ammonium hydroxide"); carbonates and hydrogen carbonates. Acids: sour, blue litmus red; bases: bitter, slippery, red litmus blue.',
	'Salt = positive ion from the other reactant + negative ion from the acid; formula from charges first. Acid + hydroxide → salt + water: Mg(OH)_2 + 2HCl → MgCl_2 + 2H_2O. Acid + ammonia → salt only: 2NH_3 + H_2SO_4 → (NH_4)_2SO_4. Acid + carbonate or hydrogen carbonate → salt + water + CO_2: CaCO_3 + 2HCl → CaCl_2 + H_2O + CO_2. Acid + metal above H → salt + H_2: 2Al + 6HCl → 2AlCl_3 + 3H_2 (Cu, Ag: no reaction).',
	'Gas tests: CO_2 turns limewater milky; H_2 burns with a squeaky pop.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={790} aids={['Metal (or ammonium) names the first word; the acid names the second.', 'Hydroxide: water. Carbonate: water and CO₂. Metal: hydrogen.  -⁠ate → -⁠ic, -⁠ite → -⁠ous.']} tag="ammonia: salt only; metal must be above hydrogen" />
);
