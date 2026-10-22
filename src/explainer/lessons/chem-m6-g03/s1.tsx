// M6 G03 scenes 1 to 2e: the hook (the five-link chain, one link lost greys the rest, the 25 times ghost, the four
// checks, three question cards) and question 1 (oxalic acid dihydrate standardises sodium hydroxide): the attempt with
// the reading table; the hydrate's molar mass; readings to titres in the card's own table, then the concordance strip;
// known to moles, ratio, unknown; the "no water of crystallisation" mistake crossed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, sc} from './common';
import {
	ConcStrip, DimG, EqLine, Fade, GREYX, INK, INK_SOFT, KeptChip, MistakeX, NAVY, Note, Overlay, P, PauseHold, RingAt, Sx, TEAL, UNK, WLine, eq, fitSize, lerp, mw, smooth, subX,
} from './parts';
import type {QBlock} from './parts';
import {Bridge, CARD, ChainRow, ChemBadge, CheckList, Checks, HscTag, MiniCard, PCard, RT_W, ReadTable, chainChipX, qMarksOk, stripPt} from './board';
import type {QDef} from './board';

const WX = 850;

// ---------- 1. Hook ----------
const KH = cues(sc('hook'), {make: 'make the standard', titres: 'choose the titres', ratio: 'use the ratio', scale: 'scale up', pct: 'percentage', lose: 'Lose one link', stop: 'stop one step', x25: 'twenty five times', here: 'Here are three', pause: 'Pause and try', follow: 'follow the moles', time: 'one step at a time'});
const CHAIN = [
	{t: 'standard: m → c', at: KH.make},
	{t: 'titres', at: KH.titres},
	{t: 'ratio', at: KH.ratio},
	{t: 'aliquot → flask', at: KH.scale},
	{t: '% by mass', at: KH.pct},
];
const IconRow: React.FC<{k: number}> = ({k}) => <Sx x={0} y={14} text={['Δ', '=', '÷', '✓'][k]} size={44} color={TEAL} anchor="middle" weight={800} at={-1000} />;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const relight = KH.stop;
	const grey = (i: number) => (i >= 2 ? prog(f, KH.lose + 14 + (i - 2) * 6, 10) * (1 - prog(f, relight, 16)) : 0);
	const shrink = KH.time + 24;
	const cx = 110, cy = 280;
	const mid = chainChipX(cx, CHAIN, 2, 64, 42);
	const cards = KH.follow + 16;
	return (
		<>
			<Heading text="Titration calculations: follow the moles" at={4} size={56} />
			<Overlay>
				<ChainRow x={cx} y={cy} chips={CHAIN} grey={grey} out={cards} size={42} gap={64} />
				<Fade at={KH.lose + 6} out={relight}>
					<Sx x={mid.x + mid.w / 2} y={cy - 18} text="lost link" size={30} color={GREYX} anchor="middle" hand at={KH.lose + 6} />
				</Fade>
				<Fade at={KH.x25 - 4} out={KH.here}>
					<rect x={1040} y={420} width={250} height={60} rx={30} fill="#fffdf8" stroke={GREYX} strokeWidth={3} />
					<Sx x={1165} y={460} text="aliquot's c" size={30} color={GREYX} anchor="middle" hand at={-1000} />
					<rect x={1340} y={390} width={460} height={120} rx={30} fill="none" stroke={GREYX} strokeWidth={3} strokeDasharray="12 9" />
					<Sx x={1570} y={462} text="sample's c: 25 × bigger" size={34} color={INK_SOFT} anchor="middle" hand at={KH.x25 + 10} />
				</Fade>
				{/* mole bridge thumbnail under the chain */}
				<g transform={`translate(${mid.x + mid.w / 2 - 330},${cy + 130})`}>
					<Fade at={KH.follow - 6} out={cards + 30}>
						<g transform={`translate(330,40) scale(${1 + 0.1 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - KH.follow) / 30)) * Math.PI))}) translate(-330,-40)`}>
							{['known', 'ratio', 'unknown'].map((t, i) => (
								<g key={t}>
									<rect x={i * 230} y={0} width={190} height={70} rx={14} fill="#fffdf8" stroke={[NAVY, TEAL, UNK][i]} strokeWidth={3.5} />
									<Sx x={i * 230 + 95} y={46} text={t} size={30} color={[NAVY, TEAL, UNK][i]} anchor="middle" weight={800} at={-1000} />
									{i < 2 ? <Sx x={i * 230 + 210} y={46} text="→" size={34} color={INK_SOFT} anchor="middle" weight={800} at={-1000} /> : null}
								</g>
							))}
						</g>
					</Fade>
				</g>
				<CheckList shrink={shrink} y={560} lh={104} size={40} rows={[
					{text: 'titres chosen?', at: KH.here - 40, icon: <IconRow k={0} />},
					{text: 'ratio from the equation?', at: KH.here - 26, icon: <IconRow k={1} />},
					{text: 'scaled up?', at: KH.here - 12, icon: <IconRow k={2} />},
					{text: 'units and sense?', at: KH.here + 2, icon: <IconRow k={3} />},
				]} />
				<MiniCard x={820} y={560} label="Question 1" at={cards} />
				<MiniCard x={1170} y={560} label="Question 2" at={cards + 6} />
				<MiniCard x={1520} y={560} label="Question 3" at={cards + 12} />
				<Sx x={1320} y={850} text="HSC-style questions, written for HSCScience" size={30} color={INK_SOFT} anchor="middle" hand at={cards + 18} />
				<Checks at={shrink + 8} />
				{void KH.pause}
			</Overlay>
		</>
	);
};

// ---------- Question 1 card ----------
export const Q1: QDef = {
	size: 30,
	secs: [
		{y: 232, blocks: t => [
			{text: 'A student standardises a sodium hydroxide solution.', at: t[0]},
			{text: 'She dissolves 1.5822 g of oxalic acid dihydrate, H₂C₂O₄·2H₂O, in distilled water and makes the solution up to 250.0 mL in a volumetric flask.', at: t[0]},
			{text: 'She titrates 25.00 mL aliquots of this solution with the sodium hydroxide, using phenolphthalein indicator.', at: t[1]},
			{text: 'H₂C₂O₄(aq) + 2NaOH(aq) → Na₂C₂O₄(aq) + 2H₂O(l)', at: t[1] + 10, para: true, weight: 600},
		] as QBlock[]},
		{y: 760, blocks: t => [
			{text: '(a) Calculate the concentration of the oxalic acid solution.', at: t[3], weight: 700},
			{text: '(b) Calculate the concentration of the sodium hydroxide solution.', at: t[4], para: true, weight: 700},
		] as QBlock[]},
	],
	h: 820,
	ans: [{label: '(a)', y: 840}, {label: '(b)', y: 915}],
};
const Q1M = {hyd: 'H₂C₂O₄·2H₂O', m: '1.5822 g', v: '250.0 mL', ali: '25.00 mL aliquots', naoh: '2NaOH(aq)'};
qMarksOk(Q1, Object.values(Q1M));
const TBL_Y = 572; // table header baseline in full-card space
const TBL_X = CARD.tx;
const FILL_A = 'c(H_2C_2O_4) = 0.05020 mol/L', FILL_B = 'c(NaOH) = 0.1046 mol/L';
/** Table pose in the strip (e = card shrink progress). */
const stripTable = (e: number) => { const [x, y] = stripPt(TBL_X, TBL_Y, e); return {x, y, s: 1 - (1 - CARD.k) * e}; };

// ---------- 2a. Question 1 (pause) ----------
const KA = cues(sc('q1-question'), {q: 'Question one', student: 'A student dissolves', titrates: 'She titrates', readings: 'burette readings', calc: 'Calculate the', then: 'then of the', pause: 'Pause here to answer'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<PCard q={Q1} t={[KA.student, KA.titrates, KA.readings, KA.calc, KA.then]} ansAt={[KA.calc + 20, KA.then + 20]}>
					<ReadTable x={TBL_X} y={TBL_Y} at={KA.readings} />
				</PCard>
				<PauseHold h={h} at={KA.pause} x={1180} y={640} cx={1500} cy={800} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 2b. The standard (the hydrate's molar mass) ----------
const KB = cues(sc('q1-standard'), {first: 'First, the standard', two: 'two waters', cryst: 'crystallisation', includes: 'includes', m126: 'one hundred and twenty six', then: 'Then n is', n: 'zero point zero one two five five', c: 'zero point zero five zero two zero'});
const FORM = 'H_2C_2O_4·2H_2O';
export const SceneQ1Standard: React.FC = () => {
	const S = 34;
	const fs = 56;
	const ring = subX(FORM, '·2H_2O', fs);
	const lM = P('M = 2(1.008) + 2(12.01) + 4(16.00)', KB.includes, {t: '+ 2 × 18.016', color: TEAL}, KB.includes + 14);
	return (
		<>
			<Heading text="Question 1: the standard" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Standardisation: mass to c" at={6} />
				<PCard q={Q1} strip shrinkAt={0} marks={[{phrase: Q1M.hyd, at: KB.two}, {phrase: Q1M.m, at: KB.n}, {phrase: Q1M.v, at: KB.c}]} fills={[{i: 0, text: FILL_A, at: KB.c + 16, size: 32}]} ansAt={[-100, -100]}>
					<ReadTable x={TBL_X} y={TBL_Y} at={-100} />
				</PCard>
				<DimG at={KB.includes + 30} to={0.4}>
					<Sx x={WX} y={290} text={FORM} size={fs} color={NAVY} weight={800} at={6} />
					<RingAt cx={WX + (ring.x1 + ring.x2) / 2} cy={290 - fs * 0.3} rx={(ring.x2 - ring.x1) / 2 + 16} ry={fs * 0.72} at={KB.two} />
				</DimG>
				<Note x={WX} y={380} text="water of crystallisation: part of the crystal, weighed with it" size={30} color={INK_SOFT} at={KB.cryst} out={KB.includes} />
				<WLine x={WX} y={420} size={S} dim={KB.n} items={lM} />
				<WLine x={WX + 40} y={480} size={S} dim={KB.n} items={P('= 126.07 g/mol', KB.m126)} />
				<WLine x={WX} y={580} size={S} dim={KB.c} items={P('n = 1.5822 ÷ 126.07', KB.then + 20, {t: '= 0.012550 mol', color: NAVY}, KB.n)} />
				<WLine x={WX} y={660} size={38} items={P('c = 0.012550 ÷ 0.2500', KB.c - 6, {t: '= 0.05020 mol/L', color: NAVY}, KB.c + 4)} />
				<KeptChip x={WX} y={760} text="c(H_2C_2O_4) = 0.05020 mol/L" at={KB.c + 40} color={NAVY} size={36} />
				<Checks />
				{void KB.first}
			</Overlay>
		</>
	);
};

// ---------- 2c. Readings to titres, then choose ----------
const KC = cues(sc('q1-titres'), {next: 'Next, the titres', sub: 'Subtract each', rough: 'The rough run', run2: 'Run two', r2v: 'twenty four point four zero', agree: 'agree within', z010: 'zero point one zero', mean: ['twenty four point zero zero', 2]});
const TABLE_W = {x: WX, y: 290};
export const SceneQ1Titres: React.FC = () => {
	const f = useCurrentFrame();
	const lift = smooth(prog(f, 6, 26));
	const a = stripTable(1);
	const pose = {x: lerp(a.x, TABLE_W.x, lift), y: lerp(a.y, TABLE_W.y, lift), s: lerp(a.s, 1, lift)};
	const CS = {x: WX + 20, y: 620, w: 880};
	return (
		<>
			<Heading text="Question 1: the titres" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Standardisation: mass to c" at={-100} />
				<PCard q={Q1} strip marks={[{phrase: Q1M.hyd, at: -100}, {phrase: Q1M.m, at: -100}, {phrase: Q1M.v, at: -100}]} fills={[{i: 0, text: FILL_A, at: -100, size: 32}]} ansAt={[-100, -100]} />
				<ReadTable x={pose.x} y={pose.y} s={pose.s} at={-100} under={KC.sub} titre={{at: KC.sub + 20, step: 10}} cols={[
					{grey: KC.rough},
					{ring: KC.z010 + 30},
					{pulse: KC.r2v, cross: KC.z010 + 20},
					{ring: KC.z010 + 36},
					{ring: KC.z010 + 42},
				]} />
				<Sx x={WX + 290 + 64} y={TABLE_W.y + 4 * 54 - 8} text="not used" size={26} color={GREYX} anchor="middle" hand at={KC.rough + 8} />
				<Note x={WX + RT_W - 300} y={TABLE_W.y - 60} text="titre = final − initial" size={30} color={TEAL} at={KC.sub} out={KC.rough} />
				<DimG at={KC.mean} to={0.45}>
					<ConcStrip x={CS.x} y={CS.y} w={CS.w} lo={23.9} hi={24.45} at={KC.z010 - 4} ticks={[23.9, 24.0, 24.1, 24.2, 24.3, 24.4]} size={24} dots={[
						{v: 24.05, at: KC.z010}, {v: 24.0, at: KC.z010 + 6}, {v: 23.95, at: KC.z010 + 12}, {v: 24.4, at: KC.z010 + 18, grey: KC.z010 + 22},
					]} bracket={{a: 23.95, b: 24.05, at: KC.z010 + 4, text: '0.10 mL'}} />
				</DimG>
				<Note x={WX + 500} y={CS.y - 78} text="average only concordant titres" size={30} color={INK_SOFT} at={KC.z010 + 30} out={KC.mean} />
				<WLine x={WX} y={790} size={38} dim={KC.mean + 50} items={P('(24.05 + 24.00 + 23.95) ÷ 3', KC.mean - 6, {t: '= 24.00 mL', color: TEAL}, KC.mean + 6)} />
				<KeptChip x={WX} y={840} text="mean titre = 24.00 mL" at={KC.mean + 40} color={TEAL} size={38} />
				<Checks ticks={{0: [KC.mean + 10]}} />
				{void KC.next}{void KC.run2}{void KC.agree}
			</Overlay>
		</>
	);
};

// ---------- 2d. Known to moles, ratio, unknown ----------
const KD = cues(sc('q1-naoh'), {now: 'Now known to', holds: 'The aliquot holds', n1: 'one point two five five', two: 'says two', n2: 'two point five one zero', in24: 'in twenty four point zero zero', c: 'zero point one zero four six', close: 'close to the'});
export const SceneQ1Naoh: React.FC = () => {
	const f = useCurrentFrame();
	const back = smooth(prog(f, 4, 24));
	const a = stripTable(1);
	const pose = {x: lerp(TABLE_W.x, a.x, back), y: lerp(TABLE_W.y, a.y, back), s: lerp(1, a.s, back)};
	const strip = eq(['H_2C_2O_4(aq)', '+', '2NaOH(aq)', '->', 'Na_2C_2O_4(aq)', '+', '2H_2O(l)'], KD.now);
	const ss = fitSize(strip, 960, 36);
	const S = 34;
	return (
		<>
			<Heading text="Question 1: the sodium hydroxide" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Standardisation: mass to c" at={-100} />
				<PCard q={Q1} strip marks={[{phrase: Q1M.hyd, at: -100}, {phrase: Q1M.m, at: -100}, {phrase: Q1M.v, at: -100}, {phrase: Q1M.ali, at: KD.n1}, {phrase: Q1M.naoh, at: KD.two}]} fills={[{i: 0, text: FILL_A, at: -100, size: 32}, {i: 1, text: FILL_B, at: KD.c + 16, size: 32}]} ansAt={[-100, -100]} />
				<g opacity={1 - 0.5 * back}>
					<ReadTable x={pose.x} y={pose.y} s={pose.s} at={-100} titre={{at: -100}} titreO={1 - prog(f, 2, 16)} cols={[{grey: -100}, {}, {cross: -100}, {}, {}]} />
				</g>
				<DimG at={KD.holds} to={0.45}><EqLine items={strip} x={WX} y={250} size={ss} /></DimG>
				<KeptChip x={WX + 560} y={292} text="mean titre = 24.00 mL" at={-100} pulse={KD.in24} color={TEAL} size={30} />
				<Bridge x={WX} y={380} w={290} gap={50} boxes={[
					{head: 'known: H_2C_2O_4', color: NAVY, at: KD.now + 6, fill: {t: '1.255 × 10^{−3} mol', at: KD.n1 + 14}, lit: KD.n1},
					{head: 'ratio', color: TEAL, at: KD.now + 14, fill: {t: '1 : 2', at: KD.two + 6}, lit: KD.two},
					{head: 'unknown: NaOH', color: UNK, at: KD.now + 22, fill: {t: '2.510 × 10^{−3} mol', at: KD.n2 + 14}, lit: KD.n2},
				]} />
				<WLine x={WX} y={600} size={S} dim={KD.two} items={P('n(H_2C_2O_4) = 0.05020 × 0.02500', KD.holds + 30, {t: '= 1.255 × 10^{−3} mol', color: NAVY}, KD.n1)} />
				<WLine x={WX} y={670} size={S} dim={KD.c} items={P('n(NaOH) = 2 × 1.255 × 10^{−3}', KD.two + 10, {t: '= 2.510 × 10^{−3} mol', color: UNK}, KD.n2)} />
				<WLine x={WX} y={750} size={38} items={P('c(NaOH) = 2.510 × 10^{−3} ÷ 0.02400', KD.in24 + 10, {t: '= 0.1046 mol/L', color: UNK}, KD.c)} />
				<Note x={WX} y={820} text="4 s.f., like the data" size={30} color={INK_SOFT} at={KD.c + 20} out={KD.close} />
				<Note x={WX} y={820} text="near 0.1 mol/L, as a lab NaOH is usually made" size={30} color={INK_SOFT} at={KD.close + 6} out={KD.close + 110} />
				<Checks ticks={{0: [-100], 1: [KD.close], 3: [KD.close + 8]}} />
			</Overlay>
		</>
	);
};

// ---------- 2e. The classic mistake ----------
const KE = cues(sc('q1-mistake'), {classic: 'The classic mistake', leaving: 'leaving out', using: 'Using ninety', forty: 'forty per cent', z1464: 'zero point one four six four', high: 'far too high'});
export const SceneQ1Mistake: React.FC = () => (
	<>
		<Heading text="Question 1: the classic mistake" at={4} size={52} />
		<Overlay>
			<HscTag at={-100} />
			<ChemBadge text="Standardisation: mass to c" at={-100} />
			<PCard q={Q1} strip marks={[{phrase: Q1M.hyd, at: KE.leaving}, {phrase: Q1M.m, at: -100}, {phrase: Q1M.v, at: -100}]} fills={[{i: 0, text: FILL_A, at: -100, size: 32}, {i: 1, text: FILL_B, at: -100, size: 32}]} ansAt={[-100, -100]}>
				<ReadTable x={TBL_X} y={TBL_Y} at={-100} o={0.5} />
			</PCard>
			<MistakeX x={WX} y={250} text="M = 90.04 g/mol (no ·2H_2O): c(H_2C_2O_4) = 0.07029 mol/L" at={4} cross={KE.classic + 20} note="the waters were weighed: include them in M" size={30} />
			<Note x={WX} y={470} text="126.07 ÷ 90.04 = 1.40: looks 40% more concentrated" size={30} color={INK_SOFT} at={KE.forty} />
			<Sx x={WX} y={600} text="c(NaOH) = 0.1464" size={38} color={GREYX} weight={700} at={KE.z1464} />
			<KeptChip x={WX + mw('c(NaOH) = 0.1464', 38, false, 700) + 60} y={560} text="c(NaOH) = 0.1046 mol/L" at={KE.z1464 + 8} color={UNK} size={36} />
			<Sx x={WX} y={660} text="far too high" size={32} color={GREYX} hand at={KE.high} />
			<Checks ticks={{0: [-100], 1: [-100], 3: [-100]}} />
			{void KE.using}{void INK}
		</Overlay>
	</>
);
