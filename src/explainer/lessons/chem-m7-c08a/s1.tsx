// M7 C08a scenes 1 to 6: the hook (one oxidant, two alcohols: the dichromate tube cross-fades to green; the tertiary
// alcohol's tube stays orange), dehydration (the water lift; the new C=C drawn in red), hydration run backwards (two
// strips, the see-saw, "dilute acid" crossed), two possible alkenes from butan-2-ol, substitution with HX (the swap;
// OH + H → water; reflux), and addition or substitution (the same HBr).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine, smooth} from '../chem-m6-c01/parts';
import {Crossed, Place, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, Mol2D, Plus, RxArrow, apt, cmol, diat, dimAt, loc, vis} from '../chem-m7-c04a/parts';
import {AlcAt, alc} from '../chem-m7-c05/parts';
import {Arrow2, EqRow, Leader, Plate, RingAt, eqLay, ptOn} from '../chem-m7-c06/parts';
import {BRE} from '../chem-m7-c06/s1';
import {DICH, Heading, REFLUX, sc} from './common';
import {Bond2, GREY, INK, INK_SOFT, NAVY, RED, Seesaw, Tube} from './parts';

export const ETOH = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'OH'}]);

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {burn: 'Burning an', today: 'Today, three', fresh: 'new compound', clue: "Here's a clue", orange: 'orange solution', warm: 'Warm it with ethanol', green: 'turns green', two: 'two-methylpropan-two-ol', stays: 'stays orange', so: 'So where'});
export const TERT = alc(3, 1, [1]);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const lab = dimAt(f, K1.so, 0.4);
	const boxes: V2[] = [[960, 230], [1400, 420], [960, 640]];
	return (
		<>
			<Heading text="Alcohol reactions: where can they lead?" at={4} size={56} />
			<Overlay>
				<g opacity={vis(f, K1.burn) * dimAt(f, K1.fresh, 0.35)}>
					<CT x={96} y={230} text="C_2H_5OH + 3O_2 → 2CO_2 + 3H_2O" size={28} color={GREY} />
					<Tag x={96} y={250} text="skeleton gone" at={K1.burn + 20} size={22} />
				</g>
				<Place keys={[{at: -1, x: 0, y: 0, s: 1}, {at: K1.clue, x: 1040, y: 60, s: 0.42}]} dur={26}>
					<g opacity={vis(f, K1.fresh - 10)}>
						<CT x={960} y={440} text="CH_3CH_2OH" size={48} anchor="middle" />
						{boxes.map((b, i) => (
							<g key={i}>
								<Arrow2 a={[960 + (i === 1 ? 160 : 0), 440 + (i === 0 ? -50 : i === 2 ? 30 : -14)]} b={[b[0] - (i === 1 ? 110 : 0), b[1] + (i === 0 ? 50 : i === 2 ? -50 : 0)]} at={K1.fresh + i * 6} color={INK_SOFT} />
								<rect x={b[0] - 100} y={b[1] - 45} width={200} height={90} rx={14} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" opacity={prog(f, K1.fresh + 10 + i * 6, 10)} />
								<Sx x={b[0]} y={b[1] + 16} text="?" size={44} color={INK_SOFT} anchor="middle" weight={800} at={K1.fresh + 12 + i * 6} />
							</g>
						))}
					</g>
				</Place>
				<Tube p={DICH.orange} to={DICH.green} swap={K1.green} cx={560} top={300} h={480} at={K1.orange - 10} />
				<g opacity={lab}><Sx x={560} y={840} text="acidified dichromate (oxidising agent)" size={28} color={INK} anchor="middle" weight={700} at={K1.orange} /></g>
				<g opacity={lab}>
					<Tag x={560} y={240} text="+ ethanol" at={K1.warm} size={28} color={RED} fill="#f9e1dc" anchor="middle" />
					<Tag x={760} y={360} text="warm" at={K1.warm + 10} size={24} />
				</g>
				<Tag x={560} y={900} text="green" at={K1.green + 20} size={28} color="#2f8a5b" fill="#e3f3e9" anchor="middle" />
				<Tube p={DICH.orange} cx={1240} top={300} h={480} at={K1.two} />
				<AlcAt a={TERT} x={1600} y={560} s={0.75} at={K1.two + 10} />
				<g opacity={lab}><Sx x={1600} y={680} text="2-methylpropan-2-ol" size={26} color={INK} anchor="middle" weight={700} at={K1.two + 10} /></g>
				<Tag x={1240} y={900} text="no change" at={K1.stays} size={28} color="#a85a12" fill="#fbe2cc" anchor="middle" />
				{void K1.today}{void smooth}
			</Overlay>
		</>
	);
};

// ---------- 2. Dehydration ----------
const K2 = cues(sc('dehydration'), {first: 'First, dehydration', removing: 'removing water', ohl: 'O H leaves', next: 'next door', together: 'Together,', water: 'water molecule', short: 'one bond short', double: 'double bond', so: 'So ethanol', cond: 'The conditions', conc: 'concentrated sulfuric', seventy: 'one hundred and seventy'});
export const SceneDehydration: React.FC = () => {
	const f = useCurrentFrame();
	const X = 760, Y = 400, S = 1.3;
	const W: V2 = [1240, 520];
	const o = apt(ETOH, ETOH.k['1r'], X, Y, S), h = apt(ETOH, ETOH.k['1rH'], X, Y, S), hc = apt(ETOH, ETOH.k['0d'], X, Y, S);
	const c0 = apt(ETOH, ETOH.k.c0, X, Y, S), c1 = apt(ETOH, ETOH.k.c1, X, Y, S);
	const lift = {[ETOH.k['1r']]: {to: loc([W[0] - 50, W[1]], X, Y, S), at: K2.together, dur: 30, fade: K2.water + 20}, [ETOH.k['1rH']]: {to: loc([W[0] + 10, W[1]], X, Y, S), at: K2.together, dur: 30, fade: K2.water + 20}, [ETOH.k['0d']]: {to: loc([W[0] - 110, W[1]], X, Y, S), at: K2.together + 6, dur: 34, fade: K2.water + 20}};
	return (
		<Overlay>
			<TaskLine text="Reaction 1: dehydration" at={K2.first} size={54} y={130} />
			<Tag x={96} y={190} text="dehydration: remove H₂O" at={K2.removing} size={30} color={RED} fill="#f9e1dc" />
			<Sx x={540} y={222} text="(elimination)" size={22} color={GREY} weight={600} at={K2.removing + 10} />
			<Mol2D m={ETOH} x={X} y={Y} s={S} at={0} lift={lift} />
			<RingAt c={[(o[0] + h[0]) / 2, o[1]]} rx={78} ry={42} at={K2.ohl} out={K2.together} />
			<RingAt c={hc} rx={30} ry={30} at={K2.next} out={K2.together} />
			<g opacity={vis(f, K2.water)}><CT x={W[0] - 60} y={W[1] + 18} text="H_2O" size={52} color={RED} /></g>
			<Tag x={X - 140} y={Y - 170} text="each carbon one bond short" at={K2.short} out={K2.double + 20} size={24} />
			<Bond2 a={c0} b={c1} at={K2.double} off={-11} />
			<EqRow left={[{t: 'CH_3CH_2OH', at: K2.so}]} right={[{t: 'CH_2=CH_2', at: K2.so + 10, color: TEAL}, {t: '+', at: K2.so + 14}, {t: 'H_2O', at: K2.so + 18, box: K2.so + 18}]} cx={860} y={760} size={50} len={300} arrow={{at: K2.so + 6, above: [{t: 'conc. H_2SO_4 (or conc. H_3PO_4)', at: K2.conc}], below: [{t: 'about 170 °C', at: K2.seventy}]}} />
			<Tag x={1820} y={200} text="conc. H₂SO₄: corrosive" at={K2.conc + 40} out={K2.conc + 130} size={22} anchor="end" />
			{void K2.cond}
		</Overlay>
	);
};

// ---------- 3. Hydration, run backwards ----------
const K3 = cues(sc('hydration-reversed'), {look: 'looks familiar', hyd: "It's hydration", add: 'To add water', steam: 'we used steam', take: 'To take water', soaks: 'soaks up', escapes: 'escapes', same: 'same equilibrium', adding: 'adding water pushes', removing: 'removing water', never: 'never write', dilute: 'dilute acid'});
export const SceneReversed: React.FC = () => {
	const f = useCurrentFrame();
	const hydO = dimAt(f, K3.adding, 0.5);
	return (
		<Overlay>
			<TaskLine text="Hydration, run backwards" at={K3.look} size={54} y={130} />
			<g opacity={hydO}>
				<EqRow left={[{t: 'C_2H_4(g)', at: K3.look + 10}, {t: '+', at: K3.look + 10}, {t: 'H_2O(g)', at: K3.look + 10}]} right={[{t: 'C_2H_5OH(g)', at: K3.look + 16}]} cx={860} y={320} size={42} len={260} arrow={{at: K3.look + 12, eqAt: K3.look + 12, above: [{t: 'steam, H_3PO_4 catalyst', at: K3.add}], below: [{t: 'about 300 °C, high pressure', at: K3.steam}]}} />
				<Tag x={1430} y={250} text="addition video" at={K3.look + 20} size={22} />
			</g>
			<EqRow left={[{t: 'C_2H_5OH', at: -100}]} right={[{t: 'C_2H_4', at: -100, color: TEAL}, {t: '+', at: -100}, {t: 'H_2O', at: -100}]} cx={860} y={560} size={42} len={300} arrow={{at: -100, above: [{t: 'conc. H_2SO_4', at: K3.take}], below: [{t: 'about 170 °C', at: K3.take + 6}]}} />
			<g opacity={vis(f, K3.hyd)}>
				<path d="M1400,360 L1400,520 M1386,378 L1400,360 L1414,378 M1386,502 L1400,520 L1414,502" fill="none" stroke={NAVY} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
				<Tag x={1430} y={420} text="same reaction, opposite directions" at={K3.hyd + 10} size={22} color={NAVY} fill="#e7edf8" o={dimAt(f, K3.soaks, 0.5)} />
			</g>
			<Tag x={1300} y={600} text="conc. acid takes up H₂O" at={K3.soaks} out={K3.same} size={24} />
			<Tag x={560} y={660} text="→: water and ethene removed, so it runs one way" at={K3.escapes} out={K3.adding} size={24} />
			<Seesaw x={860} y={830} at={K3.same} left="+ water → alcohol" right="− water → alkene" leftAt={K3.adding} rightAt={K3.removing} />
			<Crossed x={1240} y={880} text="dehydration: dilute H₂SO₄ + H₂O" at={K3.never} cross={K3.dilute + 20} note="remove water: concentrated acid" size={30} />
			{void INK}
		</Overlay>
	);
};

// ---------- 4. Two possible alkenes ----------
const K4 = cues(sc('two-alkenes'), {longer: 'With a longer', b2ol: 'In butan-two-ol', each: 'neighbour on each', either: 'either one', b1: 'but-one-ene', b2: ['but-two-ene', 1], both: 'Both form', main: 'main product', every: 'every possible'});
const B2OL = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'OH', d: 'H'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
export const SceneTwoAlkenes: React.FC = () => {
	const f = useCurrentFrame();
	const X = 860, Y = 320, S = 0.95;
	const o = apt(B2OL, B2OL.k['1u'], X, Y, S), oh = apt(B2OL, B2OL.k['1uH'], X, Y, S);
	const h0 = apt(B2OL, B2OL.k['0d'], X, Y, S), h2 = apt(B2OL, B2OL.k['2d'], X, Y, S);
	const pl = (a: number) => 1 + 0.12 * Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - a) / 24)) * Math.PI));
	const L = [{t: 'CH_3CH(OH)CH_2CH_3', at: -100}];
	return (
		<Overlay>
			<TaskLine text="Dehydration: which alkene?" at={K4.longer} size={54} y={130} />
			<Mol2D m={B2OL} x={X} y={Y} s={S} at={K4.b2ol - 30} />
			<RingAt c={[(o[0] + oh[0]) / 2, o[1]]} rx={64} ry={36} at={K4.b2ol} />
			{[0, 1, 2, 3].map(i => { const c = apt(B2OL, B2OL.k['c' + i], X, Y, S); return <Sx key={i} x={c[0] + 26} y={c[1] - 26} text={String(i + 1)} size={22} color={NAVY} weight={800} at={K4.b2ol + 10 + i * 4} />; })}
			<RingAt c={h0} rx={28} ry={28} at={K4.each} />
			<RingAt c={h2} rx={28} ry={28} at={K4.each + 12} />
			<Arrow2 a={[h0[0], h0[1] + 30]} b={[560, 560]} at={K4.b1 - 20} color={INK_SOFT} bend={30} />
			<Arrow2 a={[h2[0], h2[1] + 30]} b={[760, 760]} at={K4.b2 - 20} color={INK_SOFT} bend={-30} />
			<EqRow left={L} right={[{t: 'CH_2=CHCH_2CH_3', at: K4.b1, color: TEAL}]} cx={900} y={620} size={36} len={240} arrow={{at: K4.b1 - 10, above: [{t: 'conc. H_2SO_4, heat', at: K4.b1 - 6}]}} />
			<EqRow left={L.map(x => ({...x}))} right={[{t: 'CH_3CH=CHCH_3', at: K4.b2, color: TEAL}]} cx={900} y={820} size={36} len={240} arrow={{at: K4.b2 - 10, above: [{t: 'conc. H_2SO_4, heat', at: K4.b2 - 6}]}} />
			<g transform={`translate(1500,${640}) scale(${pl(K4.both)}) translate(-1500,${-640})`}><Sx x={1460} y={640} text="but-1-ene" size={34} color={INK} weight={800} at={K4.b1 + 10} /></g>
			<g transform={`translate(1500,${840}) scale(${pl(K4.both)}) translate(-1500,${-840})`}><Sx x={1460} y={840} text="but-2-ene" size={34} color={INK} weight={800} at={K4.b2 + 10} /></g>
			<Tag x={1700} y={612} text="minor" at={K4.main} size={24} />
			<Tag x={1700} y={812} text="usually major" at={K4.main} size={24} color="#2f8a5b" fill="#e3f3e9" />
			<Tag x={96} y={920} text="addition video: two possible products" at={K4.either} out={K4.both} size={22} />
			{void K4.every}{void Plate}{void Leader}{void ptOn}{void eqLay}
		</Overlay>
	);
};

// ---------- 5. Substitution with HX ----------
const K5 = cues(sc('substitution-hx'), {second: 'Second, substitution', halogen: 'The halogen takes', eth: 'Ethanol and hydrogen', vanish: "doesn't vanish", joins: 'It joins', reflux: 'under reflux', video: "ethanol video's", there: 'There, hydroxide', here: 'Here, a halogen'});
const HBR = diat('H', 'Br', 92);
export const SceneSubHX: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 400, s = 1;
	const RX = 280, HX = 690, PX = 1260, WX = 1660;
	const hbrBr = apt(HBR, 1, HX, Y, s), hbrH = apt(HBR, 0, HX, Y, s);
	const ohO = apt(ETOH, ETOH.k['1r'], RX, Y, s);
	const fly = (a: V2, b: V2, at: number): V2 => { const t = smooth(prog(f, at, 28)); return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t - 80 * Math.sin(t * Math.PI)]; };
	const ohP = fly([ohO[0] + 20, Y], [WX - 20, Y], K5.joins), hP = fly(hbrH, [WX - 60, Y], K5.joins + 6);
	const plateO = dimAt(f, K5.video, 0.25);
	return (
		<Overlay>
			<TaskLine text="Reaction 2: substitution" at={K5.second} size={54} y={130} />
			<Mol2D m={ETOH} x={RX} y={Y} s={s} at={0} />
			<RingAt c={[ohO[0] + 30, Y]} rx={70} ry={40} at={K5.halogen - 10} out={K5.joins + 20} />
			<Plus x={540} y={Y} at={6} />
			<Mol2D m={HBR} x={HX} y={Y} s={s} at={6} hideAt={{1: K5.halogen, 0: K5.joins}} />
			<RxArrow x1={840} x2={1040} y={Y} at={10} above={[{t: 'heat under reflux', at: K5.reflux}]} />
			<Mol2D m={BRE} x={PX} y={Y} s={s} at={K5.halogen - 20} fly={{[BRE.k['1r']]: {from: loc(hbrBr, PX, Y, s), at: K5.halogen, dur: 28}}} />
			<Sx x={PX} y={Y + 140} text="bromoethane" size={32} color={INK} anchor="middle" weight={800} at={K5.eth} />
			<Plus x={1500} y={Y} at={K5.vanish} />
			{f >= K5.joins && f < K5.joins + 36 ? <g><Sx x={ohP[0]} y={ohP[1] + 16} text="OH" size={42} color={RED} anchor="middle" weight={800} at={-1000} /><Sx x={hP[0]} y={hP[1] + 16} text="H" size={36} color={GREY} anchor="middle" weight={800} at={-1000} /></g> : null}
			<g opacity={vis(f, K5.joins + 34)}><CT x={WX - 66} y={Y + 18} text="H_2O" size={50} color={RED} /><rect x={WX - 86} y={Y - 50} width={150} height={96} rx={14} fill="none" stroke="#9a948a" strokeWidth={3} /></g>
			<Tag x={WX} y={Y + 70} text="OH + H → H₂O" at={K5.joins + 40} size={26} color={RED} fill="#f9e1dc" anchor="middle" />
			<g opacity={plateO}>
				<Plate p={REFLUX} cx={240} top={540} h={420} at={K5.reflux} />
				<Tag x={380} y={620} text="reflux: vapours drip back" at={K5.reflux + 10} size={26} color={NAVY} fill="#e7edf8" />
			</g>
			<Tag x={380} y={690} text="fume cupboard: HBr fumes are corrosive" at={K5.reflux + 30} out={K5.video} size={22} />
			<g opacity={vis(f, K5.video)}>
				<CT x={900} y={760} text="CH_3CH_2Br + NaOH(aq) → CH_3CH_2OH + NaBr" size={32} anchor="middle" color={INK_SOFT} />
				<Tag x={600} y={800} text="C06: OH⁻ pushes out Br" at={K5.there} size={26} />
				<Tag x={1000} y={800} text="now: Br pushes out OH" at={K5.here} size={26} color={RED} fill="#f9e1dc" />
			</g>
		</Overlay>
	);
};

// ---------- 6. Addition or substitution? ----------
const K6 = cues(sc('addition-or-substitution'), {careful: 'Careful,', how: 'how do you', look: 'Look at the', alkene: 'An alkene and', nothing: 'nothing left over', add: "That's addition", alc: 'An alcohol plus', water: 'and water', sub: "That's substitution"});
export const SceneAddOrSub: React.FC = () => (
	<Overlay>
		<TaskLine text="Same HBr: addition or substitution?" at={K6.careful} size={50} y={130} />
		<EqRow left={[{t: 'CH_2=CH_2', at: K6.careful + 10, color: TEAL, ring: '=', ringAt: K6.look, ringColor: TEAL}, {t: '+', at: K6.careful + 10}, {t: 'HBr', at: K6.careful + 10}]} right={[{t: 'CH_3CH_2Br', at: K6.careful + 16, box: K6.nothing}]} cx={860} y={340} size={48} len={220} arrow={{at: K6.careful + 12}} />
		<Tag x={1540} y={318} text="addition" at={K6.add} size={32} color={TEAL} fill="#dff2ef" />
		<Tag x={860} y={420} text="joined into one molecule: nothing else formed" at={K6.nothing} size={26} anchor="middle" />
		<Tag x={96} y={260} text="addition video" at={K6.careful + 20} size={22} />
		<EqRow left={[{t: 'CH_3CH_2OH', at: K6.how, ring: 'OH', ringAt: K6.look + 12}, {t: '+', at: K6.how}, {t: 'HBr', at: K6.how}]} right={[{t: 'CH_3CH_2Br', at: K6.how + 6}, {t: '+', at: K6.how + 6}, {t: 'H_2O', at: K6.how + 6, ring: 'H_2O', ringAt: K6.water}]} cx={860} y={640} size={48} len={220} arrow={{at: K6.how + 4}} />
		<Tag x={1540} y={618} text="substitution" at={K6.sub} size={32} color={RED} fill="#f9e1dc" />
		<Tag x={860} y={720} text="water formed → alcohol substitution" at={K6.water + 10} size={26} color={RED} fill="#f9e1dc" anchor="middle" />
		{void K6.alkene}{void K6.alc}
	</Overlay>
);
