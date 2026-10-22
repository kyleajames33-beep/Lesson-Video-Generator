// M6 G03 scenes 4a to 4d: question 3 (an antacid tablet, NaHCO3, made up to 100.0 mL, 20.00 mL aliquots, 0.1059 mol/L
// HCl, no equation given): the attempt; write the equation first (the proton chain: hydrogen carbonate has one proton
// to go), known to moles; scale up by 5 in the painted flask, the mass, the percentage of the weighed tablet (mass box;
// Q2's density box greys beside it); the "carbonate's 1 : 2" mistake crossed with the two chains side by side.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {ANTACID} from './assets';
import {DimG, EqLine, Fade, GREYX, INK, INK_SOFT, KeptChip, MistakeX, NAVY, Note, Overlay, P, PauseHold, PicH, Sx, TEAL, UNK, WLine, eq, fitSize} from './parts';
import type {QBlock} from './parts';
import {BandFlask, Bridge, ChemBadge, Checks, HscTag, MassBox, PCard, ProtonChain, bandFlaskW, qMarksOk} from './board';
import type {BB, QDef} from './board';

const WX = 850;

export const Q3: QDef = {
	size: 31,
	secs: [
		{y: 232, w: 770, blocks: t => [
			{text: 'An antacid tablet contains sodium hydrogen carbonate, NaHCO₃.', at: t[0]},
			{text: 'Its other ingredients dissolve in water but do not react with acid.', at: t[0] + 10},
			{text: 'A tablet of mass 1.3200 g is dissolved in distilled water and made up to 100.0 mL in a volumetric flask.', at: t[1]},
			{text: '20.00 mL aliquots are titrated with 0.1059 mol/L hydrochloric acid, using methyl orange indicator.', at: t[2]},
			{text: 'The titres are 23.05 mL, 23.10 mL and 23.15 mL.', at: t[2] + 12},
		] as QBlock[]},
		{y: 640, blocks: t => [
			{text: 'Calculate the percentage by mass of sodium hydrogen carbonate in the tablet.', at: t[3], weight: 700},
		] as QBlock[]},
	],
	h: 640,
	ans: [{label: '%', y: 700}],
};
const Q3M = {m: '1.3200 g', v: '100.0 mL', ali: '20.00 mL aliquots', c: '0.1059 mol/L', t1: '23.05 mL', t2: '23.10 mL', t3: '23.15 mL', other: 'do not react with acid'};
qMarksOk(Q3, Object.values(Q3M));
const FILL = '77.84% NaHCO_3 by mass';
const Tablets: React.FC<{at: number}> = ({at}) => <Fade at={at}><PicH p={ANTACID} x={915} y={200} h={120} /></Fade>;
const FL = {x: 270, y: 690, h: 290};
const BX = {x: WX, w: 215, gap: 30, y: 500};
const bridge = (k: {known: number; ratio: number; nFill: number; same: number; four?: number; fourFill?: number}): BB[] => {
	const b: BB[] = [
		{head: 'known: HCl', color: NAVY, at: k.known, fill: {t: '2.446 × 10^{−3} mol', at: k.nFill, size: 24}, lit: k.nFill},
		{head: 'ratio', color: TEAL, at: k.known + 8, fill: {t: '1 : 1', at: k.ratio}, lit: k.ratio},
		{head: 'NaHCO_3 in aliquot', color: UNK, at: k.known + 16, fill: {t: '2.446 × 10^{−3} mol', at: k.same, size: 24}, lit: k.same},
	];
	if (k.four !== undefined) b.push({head: '× flask ÷ aliquot', color: UNK, at: k.four, fill: {t: '× 5', at: k.fourFill ?? k.four}, lit: k.fourFill});
	return b;
};

// ---------- 4a. Question 3 (pause) ----------
const KA = cues(sc('q3-question'), {q: 'Question three', tablet: 'An antacid tablet', gram: 'gram tablet', twenty: 'twenty millilitre aliquots', calc: 'Calculate the', pause: 'Pause here to answer'});
export const SceneQ3Question: React.FC = () => {
	const h = hold('q3-question');
	return (
		<>
			<Heading text="Question 3" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<PCard q={Q3} t={[KA.tablet, KA.gram - 50, KA.twenty, KA.calc]} ansAt={[KA.calc + 24]}>
					<Tablets at={KA.tablet + 14} />
				</PCard>
				<PauseHold h={h} at={KA.pause} x={1180} y={640} cx={1500} cy={800} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 4b. Write the equation first ----------
const KB = cues(sc('q3-ratio'), {no: 'No equation', write: 'write it', hyd: 'Hydrogen carbonate accepts', one: 'one proton', ratio: 'the ratio is', mean: 'The mean titre', acid: 'so the acid', n: 'two point four four six', same: 'same moles'});
export const SceneQ3Ratio: React.FC = () => {
	const parts = ['NaHCO_3(aq)', '+', 'HCl(aq)', '->', 'NaCl(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'];
	const strip = eq(parts, parts.map((_, i) => KB.write + i * 5));
	const ss = fitSize(strip, 960, 38);
	return (
		<>
			<Heading text="Question 3: write the equation" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Solid sample: % by mass" at={6} />
				<PCard q={Q3} strip shrinkAt={0} marks={[{phrase: Q3M.t1, at: KB.mean}, {phrase: Q3M.t2, at: KB.mean + 6}, {phrase: Q3M.t3, at: KB.mean + 12}, {phrase: Q3M.c, at: KB.n}]} ansAt={[-100]}>
					<Tablets at={-100} />
				</PCard>
				<EqLine items={strip} x={WX} y={250} size={ss} />
				<ProtonChain x={WX} y={360} at={KB.one} ring={{i: 1, at: KB.one + 10}} lit={[{a: 1, at: KB.one + 16}]} size={32} o={1 - 0.6 * prog(useCurrentFrame(), KB.mean, 14)} />
				<Note x={WX + 700} y={360} text="conjugates video: one proton to go" size={26} color={INK_SOFT} at={KB.one + 20} out={KB.ratio + 30} />
				<KeptChip x={WX} y={410} text="mean titre = 23.10 mL" at={KB.mean + 30} color={TEAL} size={32} />
				<Note x={WX + 420} y={448} text="all within 0.10 mL" size={28} color={INK_SOFT} at={KB.mean + 40} out={KB.acid + 30} />
				<Bridge x={BX.x} y={BX.y} w={BX.w} gap={BX.gap} size={26} boxes={bridge({known: KB.hyd, ratio: KB.ratio + 6, nFill: KB.n + 14, same: KB.same})} />
				<WLine x={WX} y={700} size={34} items={P('n(HCl) = 0.1059 × 0.02310', KB.acid + 20, {t: '= 2.446 × 10^{−3} mol', color: NAVY}, KB.n)} />
				<Checks ticks={{0: [KB.mean + 20], 1: [KB.ratio]}} />
				{void KB.no}{void DimG}
			</Overlay>
		</>
	);
};

// ---------- 4c. Scale up, then the tablet's mass ----------
const KC = cues(sc('q3-percent'), {scale: 'Scale up', five: 'five aliquots', held: 'the tablet held', times: 'Times eighty', m: 'one point zero two seven four', out: 'Out of one', pct: 'seventy seven point eight four', direct: 'weighed directly', nod: 'no density'});
export const SceneQ3Percent: React.FC = () => {
	const fw = bandFlaskW(FL.h);
	return (
		<>
			<Heading text="Question 3: percentage of the tablet" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Solid sample: % by mass" at={-100} />
				<PCard q={Q3} strip marks={[{phrase: Q3M.ali, at: KC.five}, {phrase: Q3M.v, at: KC.five + 8}, {phrase: Q3M.m, at: KC.pct}]} fills={[{i: 0, text: FILL, at: KC.pct + 16, size: 32}]} ansAt={[-100]}>
					<Tablets at={-100} />
				</PCard>
				<BandFlask x={FL.x} y={FL.y} h={FL.h} n={5} at={KC.five} step={6} dim={KC.held + 30} label="100.0 mL" o={prog(useCurrentFrame(), KC.scale, 12)} />
				<DimG at={KC.held + 30} to={0.4}><Sx x={FL.x + fw + 40} y={FL.y + 140} text="100.0 ÷ 20.00 = 5" size={28} color={INK} weight={700} at={KC.five + 10} /></DimG>
				<WLine x={WX} y={260} size={30} dim={KC.m} items={P('n(NaHCO_3) in tablet = 5 × 2.446 × 10^{−3}', KC.held, {t: '= 1.2230 × 10^{−2} mol', color: UNK}, KC.held + 20)} />
				<WLine x={WX} y={330} size={32} dim={KC.pct} items={P('m = 1.2230 × 10^{−2} × 84.01', KC.times, {t: '= 1.0274 g', color: UNK}, KC.m)} />
				<WLine x={WX} y={410} size={36} items={P('% = 1.0274 ÷ 1.3200 × 100%', KC.pct - 8, {t: '= 77.84%', color: TEAL}, KC.pct)} />
				<Bridge x={BX.x} y={BX.y} w={BX.w} gap={BX.gap} size={26} o={0.75} boxes={bridge({known: -100, ratio: -100, nFill: -100, same: -100, four: KC.scale + 10, fourFill: KC.five + 20})} />
				<Note x={WX} y={670} text="M(NaHCO_3) = 22.99 + 1.008 + 12.01 + 3(16.00) = 84.01 g/mol" size={26} color={INK_SOFT} at={KC.times + 10} out={KC.out} />
				<Note x={WX} y={710} text="keep the digits; round at the end" size={26} color={INK_SOFT} at={KC.m + 10} out={KC.out} />
				<MassBox x={WX} y={760} w={520} h={70} at={KC.out} frac={1.0274 / 1.32} fillAt={KC.pct - 10} outer="tablet 1.3200 g" inner="NaHCO_3 1.0274 g" pct={{t: '77.84%', at: KC.pct + 6}} size={26} />
				<g opacity={0.5}>
					<MassBox x={WX + 600} y={760} w={330} h={50} at={KC.nod} frac={0.111} fillAt={KC.nod} outer="1.05 g/mL × 1000 mL" inner="liquid: density" size={24} />
				</g>
				<Note x={WX + 600} y={920} text="liquid: density; solid: weighed mass" size={28} color={TEAL} at={KC.nod + 14} />
				<Checks ticks={{0: [-100], 1: [-100], 2: [KC.five + 20], 3: [KC.pct + 20]}} />
				{void KC.direct}{void GREYX}
			</Overlay>
		</>
	);
};

// ---------- 4d. The classic mistake ----------
const KD = cues(sc('q3-mistake'), {classic: 'The classic mistake', borrowing: 'borrowing', halves: 'That halves', carb: 'Carbonate takes two', hyd: 'Hydrogen carbonate already', more: 'one more'});
export const SceneQ3Mistake: React.FC = () => (
	<>
		<Heading text="Question 3: the classic mistake" at={4} size={52} />
		<Overlay>
			<HscTag at={-100} />
			<ChemBadge text="Solid sample: % by mass" at={-100} />
			<PCard q={Q3} strip fills={[{i: 0, text: FILL, at: -100, size: 32}]} ansAt={[-100]}>
				<Tablets at={-100} />
			</PCard>
			<MistakeX x={WX} y={250} text="NaHCO_3 : HCl = 1 : 2, so 38.92%" at={4} cross={KD.classic + 20} note="write the equation for this base" size={32} />
			<ProtonChain x={WX} y={560} at={KD.carb} lit={[{a: 0, at: KD.carb + 10, color: GREYX}, {a: 1, at: KD.carb + 18, color: GREYX}]} color={GREYX} size={32} />
			<Sx x={WX} y={612} text="Na_2CO_3 + 2HCl (to the methyl orange endpoint)" size={26} color={GREYX} weight={700} at={KD.carb + 20} />
			<ProtonChain x={WX} y={740} at={KD.hyd} lit={[{a: 1, at: KD.more}]} ring={{i: 1, at: KD.hyd + 12}} size={34} />
			<Sx x={WX} y={796} text="NaHCO_3 + HCl: one more proton" size={30} color={INK} weight={800} at={KD.more + 6} />
			<Checks ticks={{0: [-100], 1: [-100], 2: [-100], 3: [-100]}} />
			{void KD.borrowing}{void KD.halves}{void INK_SOFT}
		</Overlay>
	</>
);
