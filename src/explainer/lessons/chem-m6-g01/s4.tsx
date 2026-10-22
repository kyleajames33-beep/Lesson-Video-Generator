// M6 G01 scenes 5a to 7: question 4 (barium hydroxide with hydrochloric acid): the attempt; count the hydroxides (the
// subscript 2 ringed, two hydroxide tokens drop), the excess on the two bars; the total volume, pOH and pH with the pH
// track check; the "forgot the 2" mistake on the wrong side of 7; the decision board; key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, kf, sc} from './common';
import {PHMETER} from './assets';
import {
	AChip, BASE_INK, DimG, EqLine, Fade, GREYT, INK, INK_SOFT, IonBars, KeptChip, KeyNotesBoard, LabelBeaker, MistakeX, Note, OHg, Overlay, P, PHTrack, PROTON_INK, PauseHold, PicH, RingAt,
	Sx, TEAL, WLine, eLayout, eq, fitSize, lerp, mw, smooth, vis,
} from './parts';
import type {QBlock} from './parts';
import {ChemBadge, Checks, GLOW, HscTag, QCardC} from './board';
import type {QDef} from './board';

export const Q4: QDef = {
	blocks: t => [
		{text: '40.0 mL of 0.0500 mol/L barium hydroxide, Ba(OH)₂, is mixed with', at: t[0]},
		{text: '30.0 mL of 0.100 mol/L hydrochloric acid at 25 °C.', at: t[1]},
		{text: 'Assume the volumes add.', at: t[2]},
		{text: 'Calculate the pH of the resulting solution.', at: t[3], para: true, weight: 700},
	] as QBlock[],
	h: 320,
	ans: [{label: 'pH', y: 400}],
};
const Q4M = {b: '40.0 mL of 0.0500 mol/L barium hydroxide', a: '30.0 mL of 0.100 mol/L hydrochloric acid', vb: '40.0 mL', va: '30.0 mL', add: 'Assume the volumes add'};
const FILL = 'pH = 12.155';
const WX = 840;

// ---------- 5a. Question 4 (pause) ----------
const KA = cues(sc('q4-question'), {q: 'Question four', forty: 'Forty millilitres', thirty: 'thirty millilitres', assume: 'Assume the volumes', calc: 'Calculate the pH', pause: 'Pause here to answer'});
export const SceneQ4Question: React.FC = () => {
	const h = hold('q4-question');
	return (
		<>
			<Heading text="Question 4" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<QCardC q={Q4} t={[KA.forty, KA.thirty, KA.assume, KA.calc]} ansAt={[KA.calc + 20]} />
				<LabelBeaker x={1250} y={260} h={200} at={KA.forty + 10} size={28} lines={[{t: 'Ba(OH)_2(aq)', at: KA.forty + 20}]} />
				<LabelBeaker x={1550} y={260} h={200} at={KA.thirty + 10} size={28} lines={[{t: 'HCl(aq)', at: KA.thirty + 20}]} />
				<PauseHold h={h} at={KA.pause} x={1180} y={720} cx={1520} cy={830} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 5b. Count the hydroxides ----------
const KB = cues(sc('q4-excess'), {count: 'Count the hydroxides', each: 'Each barium', two: 'releases two', times: 'two times zero', z00400: 'zero point zero zero four zero zero', acid: 'The acid gives', z00300: 'zero point zero zero three zero zero', so: 'So this time', hyd: ['hydroxide', 3], excess: 'by zero point zero'});
export const SceneQ4Excess: React.FC = () => {
	const f = useCurrentFrame();
	const S = 36;
	const strip = eq(['Ba(OH)_2(aq)', '->', 'Ba^{2+}(aq)', '+', '2OH^{−}(aq)'], KB.each);
	const ss = fitSize(strip, 900, 44);
	const p0 = eLayout(strip, ss, WX).pos[0];
	const rx = p0.x + mw('Ba(OH)', ss, false, 700) + ss * 0.17, ry = 250 + ss * 0.02;
	const drop = smooth(prog(f, KB.two + 10, 24));
	const hT = (fr: number) => kf(fr, [[KB.hyd + 10, 150], [KB.hyd + 50, 0]]);
	const hV = (fr: number) => kf(fr, [[KB.hyd + 10, 200], [KB.hyd + 50, 50]]);
	return (
		<>
			<Heading text="Question 4: count the hydroxides" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Mixing: excess base" at={6} />
				<QCardC q={Q4} strip shrinkAt={0} marks={[{phrase: Q4M.b, at: KB.two}, {phrase: Q4M.a, at: KB.z00300}]} ansAt={[-100]} />
				<DimG at={KB.z00400} to={0.4}>
					<EqLine items={strip} x={WX} y={250} size={ss} />
					<RingAt cx={rx} cy={ry} rx={20} ry={22} at={KB.two} color={BASE_INK} />
					<g opacity={vis(f, KB.two + 10, KB.z00400, 10)}>
						<OHg x={lerp(rx, rx - 40, drop)} y={lerp(ry, ry + 90, drop)} s={0.9} />
						<OHg x={lerp(rx, rx + 40, drop)} y={lerp(ry, ry + 90, drop)} s={0.9} />
					</g>
				</DimG>
				<WLine x={WX} y={420} size={S} dim={KB.hyd} items={P('n(OH^{−}) = 2 × 0.0500 × 0.0400', KB.times, {t: '= 0.00400 mol', color: BASE_INK}, KB.z00400)} />
				<WLine x={WX} y={490} size={S} dim={KB.hyd} items={P('n(H_3O^{+}) = 0.100 × 0.0300', KB.acid + 10, {t: '= 0.00300 mol', color: PROTON_INK}, KB.z00300)} />
				<IonBars x={900} base={860} gap={190} bw={90} hT={hT} hV={hV} at={KB.hyd} labT="H_3O^{+}" labV="OH^{−}" valT={{t: '0.00300 mol', at: KB.hyd + 4, out: KB.hyd + 10}} valV={{t: '0.00400 mol', at: KB.hyd + 4, out: KB.hyd + 10}} />
				<KeptChip x={1300} y={700} text="excess OH^{−} = 0.00100 mol" at={KB.excess} color={BASE_INK} size={36} />
				<Checks ticks={{0: [KB.z00400]}} />
				{void KB.count}{void KB.so}
			</Overlay>
		</>
	);
};

// ---------- 5c. Total volume, pOH, pH ----------
const KC = cues(sc('q4-ph'), {spreads: 'That spreads', seventy: 'seventy millilitres', z0143: 'zero point zero one four three', left: "Hydroxide is what's", poh: 'go through the', p1845: 'one point eight four five', then: 'Then the pH', p12155: 'twelve point one five five', check: 'Check', above: 'above seven'});
export const SceneQ4Ph: React.FC = () => {
	const S = 36;
	return (
		<>
			<Heading text="Question 4: total volume, pOH, pH" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Mixing: excess base" at={-100} />
				<QCardC q={Q4} strip marks={[{phrase: Q4M.b, at: -100}, {phrase: Q4M.a, at: -100}, {phrase: Q4M.vb, at: KC.seventy}, {phrase: Q4M.va, at: KC.seventy + 8}, {phrase: Q4M.add, at: KC.seventy + 16}]} fills={[{i: 0, text: FILL, at: KC.p12155 + 10}]} ansAt={[-100]} />
				<KeptChip x={WX} y={200} text="excess OH^{−} = 0.00100 mol" at={-100} color={BASE_INK} size={32} />
				<WLine x={WX} y={340} size={S} dim={KC.z0143} items={P('V(total) = 40.0 + 30.0 = 70.0 mL = 0.0700 L', KC.seventy)} />
				<WLine x={WX} y={410} size={S} dim={KC.p1845} items={P('[OH^{−}] = 0.00100 ÷ 0.0700', KC.seventy + 40, {t: '= 0.0143 mol/L', color: BASE_INK}, KC.z0143)} />
				<WLine x={WX} y={480} size={S} dim={KC.p12155} items={P('pOH = −log(0.014286)', KC.poh, {t: '= 1.845', color: BASE_INK}, KC.p1845)} />
				<Note x={WX + 620} y={480} text="OH^{−} is what's left" size={30} color={INK_SOFT} at={KC.left} out={KC.then} />
				<WLine x={WX} y={560} size={40} items={P('pH = 14.00 − 1.845', KC.then, {t: '= 12.155', color: TEAL}, KC.p12155)} />
				<PHTrack x={900} y={800} w={820} at={KC.check} wall={KC.check + 10} mark={{v: () => 12.155, at: KC.check + 16, label: () => '12.155'}} />
				<Note x={900} y={700} text="base in excess: above 7 ✓" size={34} color={TEAL} at={KC.above} />
				<Checks ticks={{0: [-100], 1: [KC.seventy], 2: [KC.check]}} />
				{void KC.spreads}
			</Overlay>
		</>
	);
};

// ---------- 5d. The classic mistake ----------
const KD = cues(sc('q4-mistake'), {classic: 'The classic mistake', forgetting: 'forgetting the two', base: 'the base gives', looks: 'looks like', get: 'you get one', wrong: 'the wrong side'});
export const SceneQ4Mistake: React.FC = () => (
	<>
		<Heading text="Question 4: the classic mistake" at={4} size={52} />
		<Overlay>
			<HscTag at={-100} />
			<ChemBadge text="Mixing: excess base" at={-100} />
			<QCardC q={Q4} strip marks={[{phrase: Q4M.b, at: -100}, {phrase: Q4M.a, at: -100}]} fills={[{i: 0, text: FILL, at: -100}]} ansAt={[-100]} />
			<MistakeX x={WX} y={240} text="one OH^{−} per Ba(OH)_2: excess H_3O^{+}, pH 1.845" at={4} cross={KD.classic + 24} note="Ba(OH)_2 gives 2 OH^{−}" size={32} />
			<Sx x={WX} y={440} text="n(OH^{−}) = 0.0500 × 0.0400 = 0.00200 mol" size={34} color={GREYT} weight={700} at={KD.base} />
			<g opacity={0.55}>
				<IonBars x={900} base={760} gap={190} bw={90} hT={() => 150} hV={() => 100} at={KD.looks - 10} labT="H_3O^{+}" labV="OH^{−}" />
			</g>
			<Sx x={1260} y={700} text="acid looks in excess" size={32} color={INK_SOFT} hand at={KD.looks} />
			<PHTrack x={900} y={900} w={820} at={KD.wrong - 6} mark={{v: () => 12.155, at: KD.wrong + 10, label: () => '12.155'}} ghost={{v: 1.845, label: '1.845', at: KD.wrong}} />
			<Fade at={KD.wrong + 6}>
				<line x1={900 + (1.845 / 14) * 820 - 14} y1={870} x2={900 + (1.845 / 14) * 820 + 14} y2={898} stroke={GREYT} strokeWidth={4} />
				<line x1={900 + (1.845 / 14) * 820 + 14} y1={870} x2={900 + (1.845 / 14) * 820 - 14} y2={898} stroke={GREYT} strokeWidth={4} />
			</Fade>
			<Checks ticks={{0: [-100], 1: [-100], 2: [-100]}} />
			{void KD.forgetting}{void KD.get}{void INK}
		</Overlay>
	</>
);

// ---------- 6. Decision board ----------
const KE = cues(sc('decision-board'), {start: 'how to start', check: "Check it's strong", find: 'find the hydronium', counting: 'counting the hydroxides', diluted: "If it's diluted", final: 'final volume', mixed: 'If an acid', neut: 'neutralise first', total: 'total volume', side: 'right side of seven', next: 'Next, weak acids'});
const ROWS = [
	{see: 'a strong acid or base', act: '[H_3O^{+}] = c, or [OH^{−}] = c × number of OH^{−}', q: 'Q1, Q4', at: KE.check, lit: [KE.check, KE.diluted]},
	{see: 'diluted', act: 'moles stay the same; ÷ final volume', q: 'Q2', at: KE.diluted, lit: [KE.diluted, KE.mixed]},
	{see: 'mixed', act: 'moles of each, subtract, ÷ total volume', q: 'Q3, Q4', at: KE.mixed, lit: [KE.mixed, KE.side]},
	{see: 'any answer', act: 'right side of 7? right size of change?', q: 'all', at: KE.side - 10, lit: [KE.side - 10, KE.next]},
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const X0 = 96, X1 = 560, Y0 = 290, LH = 124;
	return (
		<>
			<Heading text="How to start any strong acid or base question" at={4} size={52} />
			<Overlay>
				<Sx x={X0 + 24} y={Y0 - 40} text="What you see" size={34} color={INK_SOFT} hand at={KE.start} />
				<Sx x={X1} y={Y0 - 40} text="What you do first" size={34} color={INK_SOFT} hand at={KE.start} />
				{ROWS.map((r, i) => {
					const y = Y0 + i * LH;
					const g = vis(f, r.lit[0], r.lit[1], 10);
					return (
						<Fade key={i} at={r.at}>
							<rect x={X0} y={y} width={1728} height={LH - 20} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
							{g > 0.01 ? <rect x={X0} y={y} width={1728} height={LH - 20} rx={18} fill={GLOW} opacity={0.35 * g} /> : null}
							<Sx x={X0 + 24} y={y + 68} text={r.see} size={38} color={INK} hand at={r.at} />
							<Sx x={X1 - 60} y={y + 68} text="→" size={40} color={INK_SOFT} at={r.at + 4} />
							<Sx x={X1} y={y + 68} text={r.act} size={34} color={INK} weight={700} at={r.at + 6} />
							<AChip x={1680} y={y + 28} text={r.q} size={28} color={TEAL} hand={false} at={r.at + 10} />
						</Fade>
					);
				})}
				<Note x={X1} y={Y0 + 4 * LH + 30} text="Mixing: neutralise first, then dilute." size={36} color={TEAL} at={KE.neut} />
				<AChip x={X0} y={900} text="Next: weak acid and weak base pH with an ICE table" size={36} color={TEAL} hand={false} at={KE.next} />
				<Fade at={KE.next + 8}><PicH p={PHMETER} x={1520} y={800} h={190} /></Fade>
				{void KE.find}{void KE.counting}{void KE.final}{void KE.total}
			</Overlay>
		</>
	);
};

// ---------- 7. Key notes ----------
const NOTES = [
	'Strong acid: [H_3O^{+}] = c, even when dilute. Strong base: [OH^{−}] = c × number of OH^{−} (2 for Ba(OH)_2). Kw = [H_3O^{+}][OH^{−}] = 1.0 × 10^{−14} at 25 °C.',
	'Decimal places in pH = significant figures in [H_3O^{+}]; a concentration from a pH has as many significant figures as the pH has decimal places.',
	'Dilution: n stays the same; c = n ÷ final volume ("made up to" is the final volume). Tenfold dilution of a strong acid: pH up by 1, while the pH stays well below 7 (an acid never passes 7).',
	'Mixing: find n(H_3O^{+}) and n(OH^{−}), subtract, divide the excess by the total volume, then find the pH (through pOH for excess base). Never average pH values.',
	'Check: excess acid gives pH below 7; excess base gives pH above 7.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={30} aidTop={680} aids={['Mixing: neutralise first, then dilute.']} tag="strong acid with strong base; pH + pOH = 14.00 at 25 °C" />
);
