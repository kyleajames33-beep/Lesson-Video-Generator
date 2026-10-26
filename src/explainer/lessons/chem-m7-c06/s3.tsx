// M7 C06 scenes 12 to 17: attempt 1 (two flasks, air bubbled through B), brief feedback (oxygen diverts some sugar;
// same temperature; the balanced equation with yeast on the arrow; "yeast as a reactant" crossed), attempt 2
// (1-bromobutane under reflux), brief feedback (the OH swaps onto carbon 1; butan-1-ol; reflux returns the vapours;
// "butan-2-ol" crossed), the handoff and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {KeyNotesBoard, Overlay, PauseHold, Sx, TEAL, smooth} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, NameBuilder, QCardX, Tag, TickMark} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {BROM, CT, Mol2D, ctW, dimAt, vis} from '../chem-m7-c04a/parts';
import {BARREL, BOTTLE, FERM, REFLUX, hold, sc} from './common';
import {Arrow2, BOXC, EqRow, INK, INK_SOFT, NAVY, Plate, RED, Reflux, RingAt, eqLay, ptOn, subSpan} from './parts';
import {fermL, fermR} from './s2';
import {BRE} from './s1';

const SY = 70, SS = 26;

// ---------- 12. Attempt 1 ----------
const Q1 = ['A student keeps two flasks of glucose solution and yeast at 35 °C. Flask A is fitted', 'with a bung and delivery tube. Air is bubbled through flask B the whole time. After two', 'days, flask B contains less ethanol than flask A. Explain this difference, and write a', 'balanced equation for the fermentation of glucose.'];
const K12 = cues(sc('attempt-1'), {turn: 'Your turn', a: 'A student', explain: 'Explain this', pause: 'Pause here'});
export const SceneAttempt1: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Your turn" size={56} color={INK} hand at={K12.turn} />
		<QCardX lines={Q1} at={K12.a} y={200} size={36} />
		<PauseHold h={hold('attempt-1')} at={K12.pause} x={140} y={860} cx={1650} cy={850} />
		{void K12.explain}
	</Overlay>
);

// ---------- 13. Feedback 1 ----------
const K13 = cues(sc('feedback-1'), {air: 'Air was bubbled', oxygen: 'had oxygen.', with: 'With oxygen,', less: 'less ethanol forms.', temp: 'The temperature', same: 'same in both.', eqn: 'The equation:', c6: 'C six H', gives: 'gives two', plus: 'plus two C', co2: 'two C O two.', yr: 'Yeast as a reactant', slip: 'classic slip.', cat: 'catalyst,', arrow: 'the arrow.'});
export const SceneFeedback1: React.FC = () => {
	const f = useCurrentFrame();
	const P = {cx: 1600, top: 360, h: 210};
	const bung = ptOn(FERM.start, P.cx, P.top, P.h, 675, 610), tube = ptOn(FERM.start, P.cx, P.top, P.h, 1100, 425);
	return (
		<Overlay>
			<QCardX lines={Q1} at={-100} y={SY} size={SS} under={[{line: 1, phrase: 'Air is bubbled through flask B', at: K13.oxygen}, {line: 2, phrase: 'less ethanol', at: K13.oxygen + 8}, {line: 0, phrase: 'at 35 °C', at: K13.temp}, {line: 3, phrase: 'balanced equation', at: K13.co2}]} />
			<Tag x={140} y={350} text="O_2 in → some sugar respired → CO_2 + H_2O, less ethanol" at={K13.with} size={30} color={NAVY} fill="#e7edf8" o={dimAt(f, K13.eqn, 0.6)} />
			<TickMark x={164} y={448} at={K13.same} />
			<Tag x={200} y={424} text="temperature: same in both" at={K13.same} size={28} color="#2f8a5b" fill="#e3f3e9" o={dimAt(f, K13.eqn, 0.6)} />
			<g opacity={vis(f, K13.oxygen + 10) * dimAt(f, K13.eqn + 20, 0.3)}>
				<Plate p={FERM.start} cx={P.cx} top={P.top} h={P.h} />
				<RingAt c={bung} rx={30} ry={30} at={K13.with + 20} />
				<RingAt c={tube} rx={60} ry={24} at={K13.with + 30} />
				<Tag x={P.cx} y={P.top + P.h + 18} text="flask A: air kept out" at={K13.with + 30} size={24} anchor="middle" />
			</g>
			<EqRow left={fermL(K13.c6)} right={fermR(K13.gives + 20, K13.plus, K13.co2)} cx={860} y={640} size={52} len={240} arrow={{at: K13.gives, above: [{t: 'yeast', at: K13.co2 + 14, fill: '#fbeec4'}]}} />
			<Crossed x={140} y={790} text="C_6H_12O_6 + yeast → 2C_2H_5OH + 2CO_2" at={K13.slip} cross={K13.cat} note="yeast supplies the enzymes that catalyse fermentation: write yeast over the arrow as a condition, not as a reactant" size={30} />
			{void K13.air}{void K13.less}{void K13.yr}{void K13.arrow}
		</Overlay>
	);
};

// ---------- 14. Attempt 2 ----------
const Q2 = ['1-Bromobutane is heated under reflux with aqueous sodium hydroxide.', 'Write a balanced equation for the reaction, name the organic product, and', 'explain why the mixture is heated under reflux.'];
const K14 = cues(sc('attempt-2'), {last: 'Last one', one: 'One-bromobutane', pause: 'Pause here'});
export const SceneAttempt2: React.FC = () => (
	<Overlay>
		<Sx x={96} y={130} text="Last one" size={56} color={INK} hand at={K14.last} />
		<QCardX lines={Q2} at={K14.one} y={200} size={40} />
		<PauseHold h={hold('attempt-2')} at={K14.pause} x={140} y={860} cx={1650} cy={850} />
	</Overlay>
);

// ---------- 15. Feedback 2 ----------
const K15 = cues(sc('feedback-2'), {hyd: 'The hydroxide swaps', brom: 'bromine,', same: 'same carbon.', ch3: 'C H three,', naoh: 'plus Na O H', gives: 'gives', nabr: 'plus Na Br.', prod: 'The product is', but: 'butan-one-ol.', heat: 'Heating speeds', reflux: 'reflux stops', cond: 'condenser returns', writing: 'Writing butan-two-ol', slip: 'slip.', place: 'place.'});
export const SceneFeedback2: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 470, size = 40;
	const RT = 'CH_3CH_2CH_2CH_2Br', PT = 'CH_3CH_2CH_2CH_2OH', SK = 'CH_3CH_2CH_2CH_2';
	const L = eqLay([{t: RT, at: 0}, {t: '+', at: 0}, {t: 'NaOH(aq)', at: 0}], [{t: PT, at: 0}, {t: '+', at: 0}, {t: 'NaBr', at: 0}], size, 220, 960);
	const groups = ['CH_3', 'CH_2', 'CH_2', 'CH_2'];
	let gx = L.lx[0];
	const gc = groups.map(g => { const w = ctW(g, size); const c = gx + w / 2; gx += w; return c; });
	const brR = subSpan(RT, 'Br', L.lx[0], size), ohN = subSpan('NaOH(aq)', 'OH', L.lx[2], size);
	const slotX = L.rx[0] + ctW(SK, size), brBox = subSpan('NaBr', 'Br', L.rx[2], size);
	const fly = (a: V2, b: V2, at: number, d = 26): V2 => { const t = smooth(prog(f, at, d)); return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t - 70 * Math.sin(t * Math.PI)]; };
	const ohP = fly([ohN[0], Y], [slotX, Y], K15.gives + 14);
	const brP = fly([brR[0], Y], [brBox[0], Y], K15.nabr - 26, 30);
	const RP = {cx: 1650, top: 560, h: 300};
	const liq = ptOn(REFLUX, RP.cx, RP.top, RP.h, 1000, 1286), cb = ptOn(REFLUX, RP.cx, RP.top, RP.h, 1012, 880);
	return (
		<Overlay>
			<QCardX lines={Q2} at={-100} y={SY} size={SS} under={[{line: 0, phrase: '1-Bromobutane', at: K15.brom}, {line: 0, phrase: 'aqueous sodium hydroxide', at: K15.brom + 8}, {line: 1, phrase: 'balanced equation', at: K15.nabr}, {line: 1, phrase: 'name the organic product', at: K15.but}, {line: 2, phrase: 'explain why the mixture is heated under reflux', at: K15.reflux}]} />
			<CT x={L.lx[0]} y={Y + size * 0.35} text={RT} size={size} at={K15.ch3} />
			{groups.map((_, i) => <Sx key={i} x={gc[i]} y={Y - 52} text={String(4 - i)} size={24} color={NAVY} anchor="middle" weight={800} at={K15.ch3 + 20 + i * 4} />)}
			<RingAt c={[(gc[3] - 30 + brR[1]) / 2, Y]} rx={(brR[1] - gc[3] + 30) / 2 + 12} ry={30} at={K15.same} color="#c98a1b" />
			<CT x={L.lx[1]} y={Y + size * 0.35} text="+" size={size} at={K15.naoh} />
			<CT x={L.lx[2]} y={Y + size * 0.35} text="NaOH(aq)" size={size} at={K15.naoh + 4} />
			<EqRow left={[]} right={[]} cx={(L.a1 + L.a2) / 2} y={Y} size={size} len={L.a2 - L.a1} arrow={{at: K15.gives - 6, above: [{t: 'heat under reflux', at: K15.gives, fill: '#fbeec4'}]}} />
			<CT x={L.rx[0]} y={Y + size * 0.35} text={SK} size={size} at={K15.gives} />
			{f >= K15.gives + 14 ? <CT x={ohP[0]} y={ohP[1] + size * 0.35} text="OH" size={size} color={RED} weight={800} /> : null}
			<CT x={L.rx[1]} y={Y + size * 0.35} text="+" size={size} at={K15.nabr - 10} />
			<CT x={L.rx[2]} y={Y + size * 0.35} text={f >= K15.nabr + 4 ? 'NaBr' : 'Na'} size={size} at={K15.nabr - 10} />
			{f >= K15.nabr - 26 && f < K15.nabr + 4 ? <CT x={brP[0]} y={brP[1] + size * 0.35} text="Br" size={size} color={BROM} weight={800} /> : null}
			<rect x={L.rx[2] - 12} y={Y - 36} width={ctW('NaBr', size) + 24} height={66} rx={12} fill="none" stroke={BOXC} strokeWidth={3} opacity={vis(f, K15.nabr + 4)} />
			<NameBuilder x={300} y={600} s={0.72} at={K15.prod} fills={[{slot: 1, text: 'butan', at: K15.but}, {slot: 2, text: '-1-ol', at: K15.but + 6}]} />
			<Plate p={REFLUX} cx={RP.cx} top={RP.top} h={RP.h} at={K15.heat} o={dimAt(f, K15.writing, 0.4)} />
			<Reflux base={[liq[0], liq[1] - 4]} top={[cb[0], cb[1] - 80]} at={K15.reflux} until={K15.reflux + 56} s={0.6} />
			<Tag x={1880} y={880} text="heat: faster; condenser: no vapour lost" at={K15.cond} size={24} color={NAVY} fill="#e7edf8" anchor="end" />
			<Crossed x={140} y={850} text="product: butan-2-ol" at={K15.writing} cross={K15.place} note="OH goes on carbon 1, where the Br was" size={34} />
			{void K15.hyd}{void BRE}{void Mol2D}{void INK_SOFT}
		</Overlay>
	);
};

// ---------- 16. Handoff ----------
const K16 = cues(sc('handoff'), {so: 'So ethanol', crude: 'crude oil', plants: 'from plants,', cond: 'own conditions', next: 'Next:'});
export const SceneHandoff: React.FC = () => {
	const f = useCurrentFrame();
	const lit = (a: number) => 0.45 + 0.55 * prog(f, a, 12);
	return (
		<Overlay>
			<g opacity={lit(K16.crude)}><Plate p={BARREL} cx={560} top={180} h={170} at={K16.so} /><Sx x={560} y={390} text="crude oil or gas" size={28} color={INK} anchor="middle" weight={700} at={K16.crude} /></g>
			<g opacity={lit(K16.plants)}><Plate p={FERM.start} cx={960} top={200} h={140} at={K16.so + 6} /><Sx x={960} y={390} text="plants (sugar)" size={28} color={INK} anchor="middle" weight={700} at={K16.plants} /></g>
			<g opacity={lit(K16.plants + 20)}><Mol2D m={BRE} x={1360} y={270} s={0.65} at={K16.so + 12} /><Sx x={1360} y={390} text="haloalkane" size={28} color={INK} anchor="middle" weight={700} at={K16.plants + 20} /></g>
			<Arrow2 a={[560, 410]} b={[900, 500]} bend={-30} at={K16.so + 10} color={INK_SOFT} />
			<Arrow2 a={[960, 410]} b={[960, 470]} at={K16.so + 14} color={INK_SOFT} />
			<Arrow2 a={[1360, 410]} b={[1020, 500]} bend={30} at={K16.so + 18} color={INK_SOFT} />
			<Plate p={BOTTLE} cx={960} top={480} h={220} at={K16.so} />
			<Tag x={960} y={720} text="each route: its own conditions and separation" at={K16.cond} size={28} anchor="middle" />
			<g opacity={vis(f, K16.next)}>
				<rect x={400} y={820} width={1120} height={120} rx={20} fill="#dff2ef" stroke="#0d6b52" strokeWidth={3} />
				<Sx x={440} y={870} text="Next:" size={32} color="#0d6b52" hand at={-1000} />
				<Sx x={440} y={914} text="what does burning an alcohol tell us about fuel choice?" size={34} color={INK} weight={700} at={-1000} />
			</g>
			{void TEAL}{void AnswerChip}
		</Overlay>
	);
};

// ---------- 17. Key notes ----------
const NOTES = [
	'Hydration (industrial): CH_2=CH_2 + H_2O ⇌ CH_3CH_2OH (H_3PO_4 catalyst, about 300 °C, 60 to 70 atm). Reversible, so ⇌. High pressure: 2 gas molecules → 1 favours ethanol. Catalyst: faster, same position. 300 °C: rate against yield (exothermic). Unreacted ethene recycled; ethanol distilled from water. Feedstock: crude oil or natural gas (non-renewable).',
	'Substitution: CH_3CH_2Br + NaOH(aq) → CH_3CH_2OH + NaBr. Aqueous hydroxide, heat under reflux (the condenser returns volatile vapours). The OH takes the halogen\'s place on the same carbon (2-bromopropane → propan-2-ol). Distil the alcohol out.',
	'Fermentation: C_6H_12O_6 → 2C_2H_5OH + 2CO_2, yeast on the arrow (its enzymes are the catalyst). About 35 °C; air kept out (with oxygen, yeast respires some sugar aerobically to CO_2 and water, so less ethanol forms); delivery tube lets CO_2 escape (limewater turns milky). Usually stops at about 15% ethanol: filter, then distil.',
	'Judging: hydration is fast and continuous but needs high temperature, pressure and a non-renewable feedstock; fermentation uses a renewable crop and mild conditions but is slow, and its dilute product takes energy to distil; substitution makes a chosen alcohol but needs a haloalkane first. No single best route.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={820} aids={['Fermentation: yeast, warm, no air.', 'Hydration: hot, pressure, acid. Substitution: aqueous hydroxide, reflux.']} tag="three routes to ethanol, with their conditions and separation" />
);
