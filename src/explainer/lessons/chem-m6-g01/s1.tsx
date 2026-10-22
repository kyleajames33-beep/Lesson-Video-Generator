// M6 G01 scenes 1 to 2d: the hook (three stimuli, the three checks, four question cards) and question 1 (a dilute
// strong acid): the attempt; the hydronium and the pH with the decimal-places rule; the hydroxide through Kw with a
// particle lens and the bar pair; the classic "dilute means weak" mistake crossed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {BEAKER, FLASK} from './assets';
import {
	AChip, BASE_INK, DimG, EqLine, Fade, H3O, INK, INK_SOFT, IonBars, KeptChip, LabelBeaker, LensFrame, MistakeX, Note, OHg, OpGlow, Overlay, P, PROTON_INK, PauseHold, PicH, RingAt, Sx,
	TEAL, Tie, WLine, WaterT, eq, fitSize, mw, pieceX, smooth,
} from './parts';
import type {QBlock} from './parts';
import {CheckList, ChemBadge, Checks, HscTag, MiniCard, QCardC} from './board';
import type {QDef} from './board';

// ---------- 1. Hook ----------
const KH = cues(sc('hook'), {dilute: 'dilute it', mix: 'mix it with', hide: 'hide a two', three: 'three checks', what: "What's in there", vol: 'In what volume', sense: 'does the answer make sense', four: 'four HSC-style questions', pause: 'Pause and try', step: 'one step at a time'});
const IconWhat: React.FC = () => <g><H3O x={-20} y={0} s={0.9} /><OHg x={22} y={0} s={0.9} /></g>;
const IconVol: React.FC = () => <rect x={-34} y={-24} width={68} height={48} rx={10} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeDasharray="8 6" />;
const IconSense: React.FC = () => (
	<g>
		<line x1={-40} y1={10} x2={40} y2={10} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
		<line x1={0} y1={-2} x2={0} y2={22} stroke={INK} strokeWidth={4} />
		<path d={`M-34,-14 L-18,-14 L-26,2 Z`} fill={TEAL} />
		<Sx x={0} y={-12} text="7" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
	</g>
);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const shrink = KH.step + 24;
	const tilt = 18 * smooth(prog(f, KH.mix + 6, 24));
	return (
		<>
			<Heading text="Strong acid and base pH: which method?" at={4} size={56} />
			<Overlay>
				<CheckList shrink={shrink} rows={[
					{text: "what's in there, and how much?", at: KH.what, icon: <IconWhat />},
					{text: 'in what volume?', at: KH.vol, icon: <IconVol />},
					{text: 'does the answer make sense?', at: KH.sense, icon: <IconSense />},
				]} />
				<Sx x={96} y={290} text="three checks" size={36} color={INK_SOFT} hand at={KH.three} out={shrink} />
				<Fade at={KH.dilute} out={KH.four}>
					<PicH p={FLASK} x={1090} y={230} h={330} />
					<Sx x={1150} y={600} text="250.0 mL" size={30} color={INK} anchor="middle" weight={700} at={KH.dilute + 6} />
				</Fade>
				<Fade at={KH.mix} out={KH.four}>
					<g transform={`rotate(${tilt} 1430 380)`}><PicH p={BEAKER} x={1350} y={300} h={160} /></g>
					<g transform={`rotate(${-tilt} 1700 380)`}><PicH p={BEAKER} x={1590} y={300} h={160} /></g>
				</Fade>
				<Sx x={1520} y={640} text="Ba(OH)_2" size={70} color={INK} anchor="middle" weight={800} at={KH.hide} out={KH.four} />
				<MiniCard x={1060} y={230} label="Question 1" at={KH.four} />
				<MiniCard x={1450} y={230} label="Question 2" at={KH.four + 6} />
				<MiniCard x={1060} y={540} label="Question 3" at={KH.four + 12} />
				<MiniCard x={1450} y={540} label="Question 4" at={KH.four + 18} />
				<Checks at={shrink + 8} />
				{void KH.pause}
			</Overlay>
		</>
	);
};

// ---------- Question 1 card ----------
export const Q1: QDef = {
	blocks: t => [
		{text: 'A solution of nitric acid, HNO₃, has a concentration of 0.00250 mol/L at 25 °C.', at: t[0]},
		{text: '(a) Calculate the pH of the solution.', at: t[1], para: true, weight: 700},
		{text: '(b) Calculate the hydroxide ion concentration, [OH⁻], in the solution.', at: t[2], para: true, weight: 700},
		{text: '(Kw = 1.0 × 10⁻¹⁴ at 25 °C)', at: t[3] ?? t[2], para: true},
	] as QBlock[],
	h: 520,
	ans: [{label: '(a)', y: 525}, {label: '(b)', y: 605}],
};
const Q1M = {acid: 'nitric acid, HNO₃', c: '0.00250 mol/L', kw: 'Kw', kwv: '1.0'};
const FILL_A = 'pH = 2.602', FILL_B = '[OH^{−}] = 4.0 × 10^{−12} mol/L';
const WX = 840;

// ---------- 2a. Question 1 (pause) ----------
const KA = cues(sc('q1-question'), {q: 'Question one', sol: 'A nitric acid', calc: 'Calculate its pH', then: 'Then calculate', pause: 'Pause here to answer'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<QCardC q={Q1} t={[KA.sol, KA.calc, KA.then, KA.then + 24]} ansAt={[KA.calc + 20, KA.then + 30]} />
				<LabelBeaker x={1320} y={250} h={230} at={KA.sol + 10} size={30} lines={[{t: 'HNO_3(aq)', at: KA.sol + 20}, {t: '0.00250 mol/L', at: KA.sol + 30}]} />
				<PauseHold h={h} at={KA.pause} x={1180} y={700} cx={1520} cy={810} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 2b. What's in there ----------
const KB = cues(sc('q1-ph'), {strong: 'strong', one: 'one proton', every: 'every molecule', equals: 'equals the', conc: 'two point five zero', neg: 'The negative log', p2602: 'two point six zero two', three: 'Three significant', dp: 'three decimal places'});
export const SceneQ1Ph: React.FC = () => {
	const strip = eq(['HNO_3(aq)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'NO_3^{−}(aq)'], KB.strong + 10);
	const ss = fitSize(strip, 960, 42);
	const S = 38;
	const l1 = P('[H_3O^{+}] = 0.00250 mol/L', KB.equals, {t: '= 2.50 × 10^{−3} mol/L', color: PROTON_INK}, KB.conc);
	const l2 = P('pH = −log(2.50 × 10^{−3})', KB.neg, {t: '= 2.602', color: TEAL}, KB.p2602);
	const x250 = WX + pieceX(l1, 1, S) + mw('= ', S, false, 700), w250 = mw('2.50', S, false, 700);
	const x602 = WX + pieceX(l2, 1, S) + mw('= 2', S, false, 700), w602 = mw('.602', S, false, 700);
	return (
		<>
			<Heading text="Question 1: the pH" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Strong acid" at={6} />
				<QCardC q={Q1} strip shrinkAt={0} marks={[{phrase: Q1M.acid, at: KB.strong}, {phrase: Q1M.c, at: KB.equals}]} fills={[{i: 0, text: FILL_A, at: KB.p2602 + 10}]} ansAt={[-100, -100]} />
				<DimG at={KB.conc} to={0.35}>
					<EqLine items={strip} x={WX} y={250} size={ss} />
					<OpGlow items={strip} i={3} size={ss} x={WX} y={250} at={KB.strong + 30} len={40} color={TEAL} />
				</DimG>
				<WLine x={WX} y={360} size={S} dim={KB.p2602} undim={KB.three} items={l1} />
				<WLine x={WX} y={440} size={S} items={l2} />
				<RingAt cx={x250 + w250 / 2} cy={360 - S * 0.33} rx={w250 / 2 + 16} ry={S * 0.7} at={KB.three + 6} />
				<AChip x={x250 - 20} y={280} text="3 s.f." size={28} color={TEAL} hand={false} at={KB.three + 14} />
				<RingAt cx={x602 + w602 / 2} cy={440 - S * 0.33} rx={w602 / 2 + 14} ry={S * 0.7} at={KB.dp} />
				<AChip x={x602} y={470} text="3 d.p." size={28} color={TEAL} hand={false} at={KB.dp + 8} />
				<Tie a={[x250 + w250 / 2, 360 + 16]} b={[x602 + w602 / 2, 440 - S]} at={KB.dp + 10} />
				<Note x={WX} y={600} text="C07: decimal places = s.f. in [H_3O^{+}]" size={30} color={INK_SOFT} at={KB.dp + 16} out={KB.dp + 60} />
				<Checks ticks={{0: [KB.strong]}} />
				{void KB.one}{void KB.every}
			</Overlay>
		</>
	);
};

// ---------- 2c. The hydroxide (Kw) ----------
const KC = cues(sc('q1-hydroxide'), {now: 'Now the hydroxide', still: 'still has some', because: "because water's", kw: 'K w is', divide: 'so divide', e14: 'one point zero times ten to the minus fourteen', e12: 'four point zero times', hundreds: 'hundreds of millions', should: 'as it should be'});
const LENS_T: [number, number][] = [[-70, -40], [-20, -70], [40, -50], [80, 0], [-80, 30], [-30, 10], [20, 30], [60, 60], [-50, 70], [10, -10]];
const LENS_W: [number, number][] = [[-95, -10], [0, 75], [95, -45], [-10, -100], [50, 95], [-60, -85], [100, 40], [-100, 75]];
export const SceneQ1Hydroxide: React.FC = () => {
	const f = useCurrentFrame();
	const S = 36;
	const bars = smooth(prog(f, KC.should, 22));
	return (
		<>
			<Heading text="Question 1: the hydroxide" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Strong acid" at={-100} />
				<QCardC q={Q1} strip marks={[{phrase: Q1M.acid, at: -100}, {phrase: Q1M.c, at: -100}, {phrase: Q1M.kw, at: KC.e14}, {phrase: Q1M.kwv, at: KC.e14 + 6}]} fills={[{i: 0, text: FILL_A, at: -100}, {i: 1, text: FILL_B, at: KC.e12 + 30}]} ansAt={[-100, -100]} />
				<KeptChip x={WX} y={200} text="pH = 2.602" at={-100} color={TEAL} size={34} />
				<LensFrame cx={1000} cy={720} r={150} at={KC.now + 6} out={KC.should + 30}>
					{LENS_W.map(([dx, dy], i) => <WaterT key={'w' + i} x={1000 + dx} y={720 + dy} s={0.9} />)}
					{LENS_T.map(([dx, dy], i) => <H3O key={i} x={1000 + dx} y={720 + dy} s={0.85} />)}
					<OHg x={1000 + 70} y={720 - 95} s={0.85} />
				</LensFrame>
				<Note x={1000} y={910} text="a little OH^{−} from water" size={32} color={BASE_INK} anchor="middle" at={KC.still} out={KC.kw} />
				<WLine x={WX} y={330} size={S} dim={KC.e14} items={P('Kw = [H_3O^{+}][OH^{−}] = 1.0 × 10^{−14}', KC.kw)} />
				<WLine x={WX} y={400} size={S} dim={KC.hundreds} items={P('[OH^{−}] = Kw ÷ [H_3O^{+}] = 1.0 × 10^{−14} ÷ 2.50 × 10^{−3}', KC.e14)} />
				<WLine x={WX} y={470} size={40} items={P({t: '= 4.0 × 10^{−12} mol/L', color: BASE_INK}, KC.e12)} />
				<Note x={WX + 520} y={470} text="2 s.f., from Kw" size={30} color={INK_SOFT} at={KC.e12 + 20} out={KC.should} />
				<IonBars x={1360} base={860} gap={160} bw={80} hT={() => 300 * bars} hV={() => 4} at={KC.should} />
				<Sx x={1600} y={720} text="[H_3O^{+}] > [OH^{−}]" size={32} color={INK} weight={700} at={KC.should + 10} />
				<Sx x={1600} y={770} text="acidic ✓" size={34} color={TEAL} weight={800} at={KC.should + 16} />
				<Checks ticks={{0: [-100], 2: [KC.should]}} />
				{void KC.because}{void KC.divide}
			</Overlay>
		</>
	);
};

// ---------- 2d. The classic mistake ----------
const KD = cues(sc('q1-mistake'), {classic: 'The classic mistake', weak: 'must be weak', strength: 'Strength is', fully: 'how fully it', dilute: 'Dilute nitric acid', equals: 'still equals'});
export const SceneQ1Mistake: React.FC = () => {
	const strip = eq(['HNO_3(aq)', '+', 'H_2O(l)', '->', 'H_3O^{+}(aq)', '+', 'NO_3^{−}(aq)'], KD.dilute);
	const ss = fitSize(strip, 1000, 44);
	return (
		<>
			<Heading text="Question 1: the classic mistake" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Strong acid" at={-100} />
				<QCardC q={Q1} strip marks={[{phrase: Q1M.acid, at: -100}, {phrase: Q1M.c, at: -100}]} fills={[{i: 0, text: FILL_A, at: -100}, {i: 1, text: FILL_B, at: -100}]} ansAt={[-100, -100]} />
				<MistakeX x={WX} y={240} text="0.00250 mol/L is dilute, so HNO_3 is weak here" at={4} cross={KD.classic + 24} note="strong = fully ionised; dilute = small c" size={32} />
				<DimG at={KD.dilute} to={0.4}><Note x={130} y={600} text="C05: strength is how much it breaks up; concentration is how much you put in" size={30} color={INK_SOFT} at={KD.fully} /></DimG>
				<EqLine items={strip} x={130} y={740} size={ss} />
				<OpGlow items={strip} i={3} size={ss} x={130} y={740} at={KD.dilute + 20} len={50} color={TEAL} />
				<WLine x={130} y={840} size={40} items={P('[H_3O^{+}] = c(HNO_3)', KD.equals, {t: '= 2.50 × 10^{−3} mol/L', color: PROTON_INK}, KD.equals + 14)} />
				<Checks ticks={{0: [-100], 2: [-100]}} />
				{void KD.weak}{void KD.strength}
			</Overlay>
		</>
	);
};
