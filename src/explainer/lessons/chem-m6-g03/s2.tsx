// M6 G03 scenes 3a to 3e: question 2 (a brick cleaner diluted 10.00 mL to 250.0 mL, 20.00 mL aliquots, the Q1 NaOH):
// the attempt; moles in one aliquot (the sample pours into the flask; mole bridge known, ratio, unknown); the scale-up
// (the painted flask fills with 12.5 aliquot bands of equal volume, a fourth bridge box, the arrow back to the sample);
// the percentage by mass through the density (the mass box); the "stopped at the aliquot" mistake crossed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {DimG, EqLine, Fade, GREYX, INK, INK_SOFT, KeptChip, MistakeX, NAVY, Note, Overlay, P, PauseHold, Sx, TEAL, UNK, WLine, eq, fitSize} from './parts';
import type {QBlock} from './parts';
import {BandFlask, Bridge, ChemBadge, Checks, HscTag, MassBox, PCard, PourBeaker, bandFlaskW, flaskNeckTop, qMarksOk} from './board';
import type {BB, QDef} from './board';

const WX = 850;

export const Q2: QDef = {
	size: 31,
	secs: [
		{y: 232, blocks: t => [
			{text: 'A brick cleaner contains hydrochloric acid.', at: t[0]},
			{text: 'Assume hydrochloric acid is the only substance in the cleaner that reacts with sodium hydroxide.', at: t[0] + 10},
			{text: 'A 10.00 mL sample of the cleaner is diluted with distilled water to 250.0 mL in a volumetric flask.', at: t[1]},
			{text: '20.00 mL aliquots of the diluted solution are titrated with the sodium hydroxide standardised in Question 1, 0.1046 mol/L.', at: t[2]},
			{text: 'The concordant titres are 24.40 mL, 24.35 mL and 24.45 mL.', at: t[2] + 10},
			{text: 'The density of the brick cleaner is 1.05 g/mL.', at: t[2] + 20},
		] as QBlock[]},
		{y: 575, blocks: t => [
			{text: '(a) Calculate the concentration of hydrochloric acid in the brick cleaner, in mol/L.', at: t[3], weight: 700},
			{text: '(b) Calculate the percentage by mass of hydrochloric acid in the brick cleaner.', at: t[3] + 12, para: true, weight: 700},
		] as QBlock[]},
	],
	h: 735,
	ans: [{label: '(a)', y: 745}, {label: '(b)', y: 820}],
};
const Q2M = {dil: 'diluted with distilled water to 250.0 mL', t1: '24.40 mL', t2: '24.35 mL', t3: '24.45 mL', c: '0.1046 mol/L', ali: '20.00 mL aliquots', s: 'A 10.00 mL sample', d: '1.05 g/mL'};
qMarksOk(Q2, Object.values(Q2M));
const FILL_A = 'c(HCl) = 3.190 mol/L', FILL_B = '11.1% HCl by mass';
const FL = {x: 270, y: 700, h: 285};
const neck = flaskNeckTop(FL.x, FL.y, FL.h);
const SP = {sx: neck[0] + 10, sy: neck[1] - 26, h: 100};
const BX = {x: WX, w: 215, gap: 30, y: 500};

// ---------- 3a. Question 2 (pause) ----------
const KA = cues(sc('q2-question'), {q: 'Question two', brick: 'A brick cleaner', ten: 'Ten millilitres', twenty: 'twenty millilitre aliquots', calc: 'Calculate the', pause: 'Pause here to answer'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	return (
		<>
			<Heading text="Question 2" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<PCard q={Q2} t={[KA.brick, KA.ten, KA.twenty, KA.calc]} ansAt={[KA.calc + 24, KA.calc + 34]} />
				<PauseHold h={h} at={KA.pause} x={1180} y={640} cx={1500} cy={800} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

const bridge = (k: {known: number; nFill: number; ratio: number; same: number; four?: number; fourFill?: number}): BB[] => {
	const b: BB[] = [
		{head: 'known: NaOH', color: NAVY, at: k.known, fill: {t: '2.552 × 10^{−3} mol', at: k.nFill, size: 24}, lit: k.nFill},
		{head: 'ratio', color: TEAL, at: k.known + 8, fill: {t: '1 : 1', at: k.same}, lit: k.same},
		{head: 'HCl in aliquot', color: UNK, at: k.known + 16, fill: {t: '2.552 × 10^{−3} mol', at: k.same + 8, size: 24}, lit: k.same + 8},
	];
	if (k.four !== undefined) b.push({head: '× flask ÷ aliquot', color: UNK, at: k.four, fill: {t: '× 12.5', at: k.fourFill ?? k.four}, lit: k.fourFill});
	return b;
};

// ---------- 3b. Moles in one aliquot ----------
const KB = cues(sc('q2-aliquot'), {diluted: 'diluted sample', track: 'track moles', mean: 'The mean titre', moles: 'Moles of hydroxide', n: 'two point five five two', acid: 'Hydrochloric acid reacts', same: 'same moles'});
export const SceneQ2Aliquot: React.FC = () => {
	const strip = eq(['HCl(aq)', '+', 'NaOH(aq)', '->', 'NaCl(aq)', '+', 'H_2O(l)'], KB.moles - 20);
	const ss = fitSize(strip, 900, 38);
	return (
		<>
			<Heading text="Question 2: one aliquot" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Diluted sample: scale up" at={6} />
				<PCard q={Q2} strip shrinkAt={0} marks={[{phrase: Q2M.dil, at: KB.diluted}, {phrase: Q2M.t1, at: KB.mean}, {phrase: Q2M.t2, at: KB.mean + 6}, {phrase: Q2M.t3, at: KB.mean + 12}, {phrase: Q2M.c, at: KB.n}]} ansAt={[-100, -100]} />
				<BandFlask x={FL.x} y={FL.y} h={FL.h} n={12.5} at={100000} o={prog(useCurrentFrame(), KB.diluted, 14)} label="250.0 mL" labelAt={KB.diluted + 10} />
				<PourBeaker sx={SP.sx} sy={SP.sy} h={SP.h} at={KB.diluted + 4} tilt={KB.diluted + 14} pour={[KB.diluted + 34, KB.diluted + 90]} y1={neck[1] + 120} label="10.00 mL sample" />
				<Note x={FL.x - 10} y={FL.y - 10} text="dilution: same moles, more water" size={26} color={INK_SOFT} anchor="end" at={KB.track} out={KB.mean} />
				<EqLine items={strip} x={WX} y={250} size={ss} />
				<KeptChip x={WX} y={300} text="mean titre = 24.40 mL" at={KB.mean + 30} color={TEAL} size={34} />
				<Note x={WX + 470} y={340} text="all concordant" size={30} color={INK_SOFT} at={KB.mean + 40} out={KB.moles} />
				<WLine x={WX} y={440} size={34} items={P('n(NaOH) = 0.1046 × 0.02440', KB.moles + 20, {t: '= 2.552 × 10^{−3} mol', color: NAVY}, KB.n)} />
				<Bridge x={BX.x} y={BX.y} w={BX.w} gap={BX.gap} size={26} boxes={bridge({known: KB.moles, nFill: KB.n + 14, ratio: KB.acid, same: KB.same})} />
				<Checks ticks={{0: [KB.mean + 20], 1: [KB.same]}} />
				{void DimG}
			</Overlay>
		</>
	);
};

// ---------- 3c. From the aliquot to the cleaner ----------
const KC = cues(sc('q2-scale-up'), {but: 'But the flask', half: 'twelve and a half', so: 'So the flask', n: 'zero point zero three one nine zero', divide: 'Divide by', c: 'three point one nine zero', sensible: "That's sensible", d25: 'diluted twenty five times', should: 'the cleaner should'});
export const SceneQ2ScaleUp: React.FC = () => {
	const f = useCurrentFrame();
	const fw = bandFlaskW(FL.h);
	const ax = FL.x + fw + 10, ay = FL.y + FL.h * 0.62;
	return (
		<>
			<Heading text="Question 2: scale up" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Diluted sample: scale up" at={-100} />
				<PCard q={Q2} strip marks={[{phrase: Q2M.dil, at: -100}, {phrase: Q2M.t1, at: -100}, {phrase: Q2M.t2, at: -100}, {phrase: Q2M.t3, at: -100}, {phrase: Q2M.c, at: -100}, {phrase: Q2M.ali, at: KC.half}, {phrase: Q2M.s, at: KC.c}]} fills={[{i: 0, text: FILL_A, at: KC.c + 16, size: 32}]} ansAt={[-100, -100]} />
				<BandFlask x={FL.x} y={FL.y} h={FL.h} n={12.5} at={KC.half + 6} step={3} dim={KC.half + 70} label="250.0 mL" />
				<PourBeaker sx={SP.sx} sy={SP.sy} h={SP.h} at={-100} pour={[-200, -190]} label="10.00 mL sample" />
				<DimG at={KC.half + 70} to={0.4}>
					<Sx x={ax + 30} y={FL.y + 120} text="250.0 ÷ 20.00 = 12.5" size={28} color={INK} weight={700} at={KC.half + 10} />
					<Sx x={ax + 30} y={FL.y + 160} text="12.5 aliquots' worth" size={28} color={TEAL} hand at={KC.half + 30} />
				</DimG>
				<Fade at={KC.n + 10} out={KC.divide}>
					<DrawPath d={`M${ax},${ay} C${ax + 120},${ay - 40} ${SP.sx + 150},${SP.sy + 40} ${SP.sx + 110},${SP.sy - 6}`} at={KC.n + 10} dur={18} color={UNK} width={4} />
					<Sx x={ax + 30} y={FL.y + 230} text="all of it came from the sample" size={26} color={UNK} hand at={KC.n + 20} />
				</Fade>
				<KeptChip x={WX} y={250} text="n(HCl) in aliquot = 2.552 × 10^{−3} mol" at={-100} color={UNK} size={30} />
				<WLine x={WX} y={440} size={34} dim={-100} items={P('n(NaOH) = 0.1046 × 0.02440 = 2.552 × 10^{−3} mol', -100)} />
				<Bridge x={BX.x} y={BX.y} w={BX.w} gap={BX.gap} size={26} o={1 - 0.45 * prog(f, KC.c, 14)} boxes={bridge({known: -100, nFill: -100, ratio: -100, same: -100, four: KC.but + 10, fourFill: KC.half + 44})} />
				<WLine x={WX} y={690} size={34} dim={KC.c} items={P('n(HCl) in flask = 12.5 × 2.552 × 10^{−3}', KC.so + 20, {t: '= 0.03190 mol', color: UNK}, KC.n)} />
				<WLine x={WX} y={765} size={38} items={P('c = 0.03190 ÷ 0.01000', KC.divide + 10, {t: '= 3.190 mol/L', color: UNK}, KC.c)} />
				<KeptChip x={WX} y={800} text="c(HCl) = 3.190 mol/L" at={KC.c + 40} color={UNK} size={30} />
				<Note x={WX} y={900} text="250.0 ÷ 10.00 = 25: the cleaner is 25 times as concentrated" size={28} color={TEAL} at={KC.d25} />
				<Note x={WX} y={942} text="(0.1276 × 25 = 3.190)" size={28} color={TEAL} at={KC.d25 + 10} />
				<Checks ticks={{0: [-100], 1: [-100], 2: [KC.d25]}} />
				{void KC.sensible}{void KC.should}{void GREYX}
			</Overlay>
		</>
	);
};

// ---------- 3d. Masses, through the density ----------
const KD = cues(sc('q2-percent'), {masses: 'two masses', density: 'use the density', litre: 'One litre', holds: 'It holds', m: 'one hundred and sixteen point three', pct: 'eleven point one per cent', three: 'three significant'});
export const SceneQ2Percent: React.FC = () => (
	<>
		<Heading text="Question 2: percentage by mass" at={4} size={52} />
		<Overlay>
			<HscTag at={-100} />
			<ChemBadge text="Diluted sample: scale up" at={-100} />
			<PCard q={Q2} strip marks={[{phrase: Q2M.dil, at: -100}, {phrase: Q2M.ali, at: -100}, {phrase: Q2M.s, at: -100}, {phrase: Q2M.d, at: KD.masses}]} fills={[{i: 0, text: FILL_A, at: -100, size: 32}, {i: 1, text: FILL_B, at: KD.pct + 16, size: 32}]} ansAt={[-100, -100]} />
			<KeptChip x={WX} y={220} text="c(HCl) = 3.190 mol/L" at={-100} color={UNK} size={34} />
			<MassBox x={WX} y={420} w={940} at={KD.masses} frac={116.3 / 1050} fillAt={KD.m} outer="1 L of cleaner: 1.05 g/mL × 1000 mL = 1050 g" inner="HCl: 116.3 g" pct={{t: '11.1%', at: KD.pct}} />
			<WLine x={WX} y={650} size={36} dim={KD.pct} items={P('m(HCl) = 3.190 mol × 36.46 g/mol', KD.holds + 30, {t: '= 116.3 g', color: UNK}, KD.m)} />
			<WLine x={WX} y={730} size={38} items={P('% = 116.3 ÷ 1050 × 100%', KD.pct - 10, {t: '= 11.1%', color: TEAL}, KD.pct)} />
			<Note x={WX} y={800} text="density 3 s.f. → 3 s.f." size={30} color={INK_SOFT} at={KD.three} out={KD.three + 70} />
			<Note x={WX} y={800} text="below 100%; mass ÷ mass, both in grams" size={30} color={INK_SOFT} at={KD.three + 80} />
			<Checks ticks={{0: [-100], 1: [-100], 2: [-100], 3: [KD.three + 80]}} />
			{void KD.density}{void KD.litre}{void INK}
		</Overlay>
	</>
);

// ---------- 3e. The classic mistake ----------
const KE = cues(sc('q2-mistake'), {classic: 'The classic mistake', stopping: 'stopping at', z1276: 'Zero point one two seven six', diluted: 'diluted solution', scale: 'Scale up from the aliquot'});
export const SceneQ2Mistake: React.FC = () => (
	<>
		<Heading text="Question 2: the classic mistake" at={4} size={52} />
		<Overlay>
			<HscTag at={-100} />
			<ChemBadge text="Diluted sample: scale up" at={-100} />
			<PCard q={Q2} strip marks={[{phrase: Q2M.ali, at: KE.stopping}]} fills={[{i: 0, text: FILL_A, at: -100, size: 32}, {i: 1, text: FILL_B, at: -100, size: 32}]} ansAt={[-100, -100]} />
			<MistakeX x={WX} y={250} text="c(HCl) = 2.552 × 10^{−3} ÷ 0.02000 = 0.1276 mol/L" at={4} cross={KE.classic + 20} note="that's the diluted solution" size={32} />
			<BandFlask x={WX + 40} y={560} h={300} n={12.5} at={-100} o={prog(useCurrentFrame(), KE.scale - 6, 14)} label="× 12.5" />
			<Sx x={WX + 260} y={720} text="Scale up from the aliquot." size={46} color={TEAL} hand at={KE.scale} />
			<Checks ticks={{0: [-100], 1: [-100], 2: [-100], 3: [-100]}} />
			{void KE.z1276}{void KE.diluted}
		</Overlay>
	</>
);
