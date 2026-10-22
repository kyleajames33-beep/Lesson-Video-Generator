// M6 G04 scenes 4a to 4d: question 3 (crushed eggshell, a back titration, then a water-rinsed burette): the attempt;
// the four back-titration steps, one rung per spoken result; the burette rinsed with water (painted burette with coded
// droplets and a paler coded fill, the wash bottle) and the error chain lighting in turn; the "bigger titre, more
// calcium carbonate" mistake crossed beside the C15 moles bar (left over grows, used shrinks).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hold, kf, sc} from './common';
import {BUR_G, WASH} from './assets';
import {BuretteFill, Fade, GREEN, GREYX, INK, INK_SOFT, KeptChip, MistakeX, MolesBar, NAVY, Note, Overlay, P, PauseHold, PicH, Sx, TEAL, UNK, WLine, burAt, burPt, lerp} from './parts';
import type {QBlock} from './parts';
import {ChainH, ChemBadge, HscTag, PCard, qMarksOk} from './board';
import type {QDef} from './board';
import {Checks} from './s1';

const WX = 820;
export const Q3: QDef = {
	size: 30,
	secs: [
		{y: 232, blocks: t => [
			{text: 'Eggshell is mainly calcium carbonate.', at: t[0]},
			{text: 'A 0.200 g sample of crushed eggshell was added to 25.00 mL of 0.2500 mol/L hydrochloric acid, an excess.', at: t[0] + 8},
			{text: 'When the reaction was complete, the mixture was boiled to remove carbon dioxide, then cooled.', at: t[1]},
			{text: 'The leftover acid required 24.90 mL of 0.1000 mol/L sodium hydroxide solution.', at: t[1] + 20},
			{text: 'CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)', at: t[1] + 40, para: true, weight: 600},
			{text: 'M(CaCO₃) = 100.1 g/mol', at: t[1] + 48, para: true, weight: 600},
		] as QBlock[]},
		{y: 640, blocks: t => [
			{text: '(a) Calculate the percentage by mass of calcium carbonate in the eggshell.', at: t[2], weight: 700},
			{text: '(b) Before filling the burette, the student rinsed it with distilled water only. Explain the effect of this on the calculated percentage of calcium carbonate.', at: t[3], para: true, weight: 700},
		] as QBlock[]},
	],
	h: 820,
	ans: [{label: '(a)', y: 820}, {label: '(b)', y: 893, h: 92}],
};
const Q3M = {added: '25.00 mL of 0.2500 mol/L', back: '24.90 mL of 0.1000 mol/L', eq: '2HCl(aq)', M: '100.1 g/mol', m: '0.200 g', rinse: 'rinsed it with distilled water only'};
qMarksOk(Q3, Object.values(Q3M));
const FILL_A = '94.1% CaCO_3';
const FB = ['diluted NaOH: back titre too large → leftover acid overestimated', '→ acid used underestimated → % CaCO_3 too low'];

// ---------- 4a. Question 3 (pause) ----------
const KA = cues(sc('q3-question'), {q: 'Question three', zero: 'Zero point two', after: 'After boiling', find: 'Find the percentage', explain: 'and explain', pause: 'Pause here to answer'});
export const SceneQ3Question: React.FC = () => {
	const h = hold('q3-question');
	return (
		<>
			<Heading text="Question 3" at={KA.q} size={52} />
			<Overlay>
				<HscTag at={KA.q} />
				<PCard q={Q3} t={[KA.zero, KA.after, KA.find, KA.explain]} ansAt={[KA.find + 20, KA.explain + 30]} />
				<PauseHold h={h} at={KA.pause} x={1180} y={640} cx={1500} cy={800} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 4b. The four steps ----------
const KB = cues(sc('q3-calculate'), {four: 'The four back', added: 'Added', n1: 'six point two five zero', left: 'Left over', n2: 'two point four nine zero', sub: 'Subtract', n3: 'three point seven six zero', halve: 'Halve it', ratio: 'one to two ratio', n4: 'one point eight eight zero', m: 'zero point one eight eight two', of: 'zero point two zero zero', pct: 'ninety four point one'});
const RUNG = 74;
export const SceneQ3Calculate: React.FC = () => {
	const S = 32;
	const Y = 250;
	return (
		<>
			<Heading text="Question 3: the four steps" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Back titration: subtract, then the error" at={6} />
				<PCard q={Q3} strip shrinkAt={0} marks={[{phrase: Q3M.added, at: KB.n1}, {phrase: Q3M.back, at: KB.n2}, {phrase: Q3M.eq, at: KB.ratio}, {phrase: Q3M.M, at: KB.m}, {phrase: Q3M.m, at: KB.of}]} fills={[{i: 0, text: FILL_A, at: KB.pct + 16, size: 32}]} ansAt={[-100, -100]} />
				<WLine x={WX} y={Y} size={S} dim={KB.n2} items={P('n(HCl added) = 0.2500 × 0.02500', KB.added, {t: '= 6.250 × 10^{−3} mol', color: NAVY}, KB.n1)} />
				<WLine x={WX} y={Y + RUNG} size={S} dim={KB.n3} items={P('n(HCl left) = n(NaOH) = 0.1000 × 0.02490', KB.left + 10, {t: '= 2.490 × 10^{−3} mol', color: NAVY}, KB.n2)} />
				<WLine x={WX} y={Y + 2 * RUNG} size={S} dim={KB.n4} items={P('n(HCl used) = 6.250 × 10^{−3} − 2.490 × 10^{−3}', KB.sub + 10, {t: '= 3.760 × 10^{−3} mol', color: UNK}, KB.n3)} />
				<Note x={WX} y={Y + 2 * RUNG + 46} text="C15: subtract moles, not volumes" size={26} color={INK_SOFT} at={KB.n3 + 10} out={KB.halve} />
				<WLine x={WX} y={Y + 3 * RUNG + 20} size={S} dim={KB.m} items={P('n(CaCO_3) = 3.760 × 10^{−3} ÷ 2', KB.ratio, {t: '= 1.880 × 10^{−3} mol', color: UNK}, KB.n4)} />
				<WLine x={WX} y={Y + 4 * RUNG + 20} size={S} dim={KB.pct} items={P('m = 1.880 × 10^{−3} × 100.1', KB.n4 + 40, {t: '= 0.1882 g', color: UNK}, KB.m)} />
				<WLine x={WX} y={Y + 5 * RUNG + 30} size={38} items={P('% = 0.1882 ÷ 0.200 × 100', KB.of, {t: '= 94.1%', color: TEAL}, KB.pct)} />
				<Note x={WX} y={Y + 5 * RUNG + 90} text="3 s.f.: limited by 0.200 g" size={28} color={INK_SOFT} at={KB.pct + 20} />
				<Note x={WX} y={Y + 5 * RUNG + 134} text="under 100%; eggshell is mostly calcium carbonate" size={28} color={TEAL} at={KB.pct + 40} />
				<Checks ticks={{2: [KB.pct + 40]}} />
				{void KB.four}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 4c. Which way does it move? ----------
const KC = cues(sc('q3-error'), {now: 'Now the burette', water: 'Water left', dilutes: 'dilutes', takes: 'so it takes', titre: 'The titre is', big: ['big', 2], used: 'the acid used', low: 'low', fix: 'The fix', rinse: 'rinse the burette'});
const BT = {tx: 980, ty: 690, h: 450};
export const SceneQ3Error: React.FC = () => {
	const f = useCurrentFrame();
	const b = burAt(BT.tx, BT.ty, BT.h);
	const pale = prog(f, KC.dilutes, 30);
	const drops = [[1135, 420], [1150, 520], [1132, 640], [1148, 760], [1140, 900]];
	const tA = [KC.titre, KC.big, KC.used, KC.used + 20, KC.low];
	return (
		<>
			<Heading text="Question 3: the water-rinsed burette" at={4} size={52} />
			<Overlay>
				<HscTag at={-100} />
				<ChemBadge text="Back titration: subtract, then the error" at={-100} />
				<PCard q={Q3} strip marks={[{phrase: Q3M.rinse, at: KC.now + 10}]} fills={[{i: 0, text: FILL_A, at: -100, size: 32}, ...FB.map((s, k) => ({i: 1, text: s, at: KC.low + 10 + k * 8, size: 22, line: k * 0.8}))]} ansAt={[-100, -100]} />
				<KeptChip x={1340} y={240} text="94.1%" at={-100} color={TEAL} size={34} />
				<Sx x={1340} y={360} text="n(HCl left) = 2.490 × 10^{−3}" size={26} color={GREYX} weight={700} at={-100} />
				<Sx x={1340} y={404} text="n(HCl used) = 3.760 × 10^{−3}" size={26} color={GREYX} weight={700} at={-100} />
				<Sx x={1740} y={360} text="↑" size={34} color="#6f55a3" weight={800} at={KC.big + 6} />
				<Sx x={1740} y={404} text="↓" size={34} color="#b5502b" weight={800} at={KC.used + 6} />
				<BuretteFill x={b.x} y={b.y} h={BT.h} level={() => 2} color={`rgba(127,156,200,${lerp(1, 0.4, pale)})`} />
				<Fade at={KC.water}>
					{drops.map(([nx, ny], i) => { const p = burPt(b.x, b.y, BT.h, nx, ny); return <ellipse key={i} cx={p[0]} cy={p[1]} rx={4} ry={6} fill="#cfe6f5" stroke="#4f86ad" strokeWidth={1.5} />; })}
				</Fade>
				<Fade at={KC.now + 10}><PicH p={WASH} x={1560} y={500} h={230} /></Fade>
				<Note x={1540} y={750} text="distilled water only" size={28} color={INK_SOFT} at={KC.now + 16} out={KC.titre} />
				<Note x={1120} y={540} text="NaOH a little weaker than 0.1000" size={28} color={NAVY} at={KC.dilutes + 10} out={KC.fix} />
				<ChainH x={WX} y={850} size={26} gap={44} items={[
					{t: 'titre ↑', at: tA[0], color: '#6f55a3'},
					{t: 'n(HCl left) ↑', at: tA[1], color: '#6f55a3'},
					{t: 'n(HCl used) ↓', at: tA[2], color: '#b5502b'},
					{t: 'n(CaCO_3) ↓', at: tA[3], color: '#b5502b'},
					{t: '% ↓', at: tA[4], color: '#b5502b'},
				]} />
				<Sx x={1120} y={460} text="burette: rinse with the solution it will deliver" size={30} color={GREEN} hand at={KC.rinse} />
				<Checks ticks={{1: [KC.low]}} />
				{void KC.takes}{void BUR_G}{void kf}{void INK}
			</Overlay>
		</>
	);
};

// ---------- 4d. The classic mistake ----------
const KD = cues(sc('q3-mistake'), {classic: 'The classic mistake', thinking: 'thinking a bigger', back: 'In a back', left: "what's left over", so: 'So more left', less: 'less sample'});
export const SceneQ3Mistake: React.FC = () => (
	<>
		<Heading text="Question 3: the classic mistake" at={4} size={52} />
		<Overlay>
			<HscTag at={-100} />
			<ChemBadge text="Back titration: subtract, then the error" at={-100} />
			<PCard q={Q3} strip fills={[{i: 0, text: FILL_A, at: -100, size: 32}, ...FB.map((s, k) => ({i: 1, text: s, at: -100, size: 22, line: k * 0.8}))]} ansAt={[-100, -100]} />
			<MistakeX x={WX} y={250} text="titre too large, so % CaCO_3 too high" at={4} cross={KD.classic + 20} note="back titre = leftover acid" size={32} />
			<Sx x={WX} y={590} text="acid added" size={30} color={INK} hand at={KD.left - 10} />
			<MolesBar x={WX} y={610} w={960} at={KD.left - 10} split={KD.left} used={fr => kf(fr, [[KD.so, 0.6], [KD.so + 40, 0.42]])} usedText="used by eggshell" leftText="left over" />
			<Sx x={WX} y={740} text="more left over → less sample" size={34} color={TEAL} hand at={KD.less} />
			<Checks ticks={{0: [-100], 1: [-100], 2: [-100]}} />
			{void KD.thinking}{void KD.back}{void INK_SOFT}
		</Overlay>
	</>
);
