// M7 C08a scenes 7 to 13: oxidation (the hydrogen strip-off into [O]; the C=O drawn in red; the dichromate cross-fade;
// the hazard chip), the class decides (H counters on the C–OH carbon: 2°, 1 H → ketone; 3°, 0 H → stays orange),
// primary to aldehyde to acid (the product ladder), distil or reflux (the two plates), green means oxidised not which
// product, the alcohol hub and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Crossed, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, Mol2D, apt, dimAt, loc, vis} from '../chem-m7-c04a/parts';
import {AlcAt, P, alc} from '../chem-m7-c05/parts';
import {Arrow2, Drips, EqRow, Plate, Reflux, RingAt, ptOn} from '../chem-m7-c06/parts';
import {DICH, DISTIL, REFLUX, sc} from './common';
import {Bond2, CarbAt, Ghosts, HChip, Hub, INK, INK_SOFT, NAVY, RED, Tube, acid, carb} from './parts';
import {ETOH, TERT} from './s1';

const GREY = '#8a847a';
const OK = '#2f8a5b';

// ---------- 7. Oxidation ----------
const K7 = cues(sc('oxidation'), {third: 'Third, oxidation', removes: 'removes two', fromoh: 'from the O H', carbon: 'carbon holding', then: 'That carbon then', double: 'double bond to the oxygen', carbonyl: 'carbonyl group', write: 'We write', brackets: 'square brackets', water: 'leave as water', common: 'A common oxidant', acid: 'acidified potassium', orange: 'orange solution from', turns: 'It turns from', toxic: 'toxic and can cause', cancer: 'cancer,'});
export const SceneOxidation: React.FC = () => {
	const f = useCurrentFrame();
	const X = 560, Y = 400, S = 1.2;
	const B: V2 = [1080, 250];
	const o = apt(ETOH, ETOH.k['1r'], X, Y, S), hO = apt(ETOH, ETOH.k['1rH'], X, Y, S), hC = apt(ETOH, ETOH.k['1u'], X, Y, S), c1 = apt(ETOH, ETOH.k.c1, X, Y, S);
	const lift = {[ETOH.k['1rH']]: {to: loc([B[0] + 20, B[1]], X, Y, S), at: K7.then, dur: 28, fade: K7.then + 30}, [ETOH.k['1u']]: {to: loc([B[0] - 20, B[1]], X, Y, S), at: K7.then, dur: 28, fade: K7.then + 30}};
	const water = f >= K7.water;
	return (
		<Overlay>
			<TaskLine text="Reaction 3: oxidation" at={K7.third} size={54} y={130} />
			<Mol2D m={ETOH} x={X} y={Y} s={S} at={0} lift={lift} />
			<RingAt c={c1} rx={40} ry={40} at={K7.third + 10} out={K7.removes} color={RED} />
			<RingAt c={hO} rx={28} ry={28} at={K7.fromoh} out={K7.then} />
			<RingAt c={hC} rx={28} ry={28} at={K7.carbon} out={K7.then} />
			<g opacity={vis(f, K7.removes)}>
				<rect x={B[0] - 70} y={B[1] - 40} width={140} height={80} rx={40} fill="#fffdf8" stroke={NAVY} strokeWidth={3} />
				<CT x={B[0]} y={B[1] + 14} text={water ? 'H_2O' : '[O]'} size={38} anchor="middle" color={water ? RED : NAVY} />
			</g>
			<Bond2 a={c1} b={o} at={K7.double} off={-10} />
			<Tag x={o[0] - 60} y={o[1] + 60} text="carbonyl group: C=O" at={K7.carbonyl} size={28} color={RED} fill="#f9e1dc" />
			<EqRow left={[{t: 'CH_3CH_2OH', at: K7.write}, {t: '+', at: K7.write + 4}, {t: '[O]', at: K7.brackets, color: NAVY}]} right={[{t: 'CH_3CHO', at: K7.water - 10, ring: 'O', ringAt: K7.water}, {t: '+', at: K7.water}, {t: 'H_2O', at: K7.water + 4}]} cx={760} y={650} size={46} len={300} arrow={{at: K7.write + 6, above: [{t: 'K_2Cr_2O_7 / dilute H_2SO_4', at: K7.acid}]}} />
			<Tag x={460} y={720} text="[O] = oxygen from the oxidant" at={K7.brackets + 10} out={K7.common} size={22} />
			<Tube p={DICH.orange} to={DICH.green} swap={K7.turns + 10} cx={1600} top={330} h={360} at={K7.common} />
			<Sx x={1600} y={740} text="orange Cr_2O_7^{2−} → green Cr^{3+}" size={26} color={INK} anchor="middle" weight={700} at={K7.turns} />
			<Tag x={460} y={790} text="also used: acidified KMnO₄, purple → colourless" at={K7.turns + 50} out={K7.toxic} size={22} />
			<Tag x={96} y={880} text="chromium(VI): toxic, carcinogen. Small amounts, gloves, goggles, collect waste" at={K7.cancer} size={26} color={NAVY} fill="#e7edf8" />
			{void K7.orange}
		</Overlay>
	);
};

// ---------- 8. The class decides ----------
const K8 = cues(sc('class-decides'), {clue: 'clue makes sense', needs: 'needs a hydrogen', sec: 'A secondary', one: 'has one.', remove: 'Remove it', propanone: 'propanone, a ketone', ter: 'A tertiary', none: 'has none.', already: 'already bonded', ordinary: 'Ordinary oxidants', orange: 'stays orange'});
export const P2OL = alc(3, 1);
export const SceneClass: React.FC = () => {
	const f = useCurrentFrame();
	const LX = 480, RX = 1400, Y = 380, S = 1.1;
	const lc = P(P2OL.m, LX, Y, S, P2OL.c), rc = P(TERT.m, RX, Y, S, TERT.c);
	return (
		<Overlay>
			<TaskLine text="Which product? Count the hydrogens" at={K8.clue} size={50} y={130} />
			<Tag x={96} y={190} text="C05: classify by the carbons on the C–OH carbon" at={K8.clue + 10} out={K8.sec} size={22} />
			<AlcAt a={P2OL} x={LX} y={Y} s={S} at={K8.clue} letters />
			<RingAt c={lc} rx={34} ry={34} at={K8.needs} color={RED} />
			<Ghosts m={P2OL.m} x={LX} y={Y} s={S} i={P2OL.c} at={K8.one - 10} />
			<HChip x={LX} y={520} t="2°: 1 H" at={K8.one} />
			<EqRow left={[{t: 'CH_3CH(OH)CH_3', at: K8.remove}, {t: '+', at: K8.remove}, {t: '[O]', at: K8.remove, color: NAVY}]} right={[{t: 'CH_3COCH_3', at: K8.remove + 10}, {t: '+', at: K8.remove + 10}, {t: 'H_2O', at: K8.remove + 10}]} cx={LX + 40} y={660} size={30} len={150} arrow={{at: K8.remove + 4, above: [{t: 'K_2Cr_2O_7 / H^+, heat', at: K8.remove + 6}]}} />
			<Tag x={LX + 40} y={720} text="propanone: ketone (C=O inside the chain, '-one')" at={K8.propanone} size={26} color={RED} fill="#f9e1dc" anchor="middle" />
			<Tag x={LX + 40} y={780} text="'-ol' becomes '-one'; naming: next video" at={K8.propanone + 30} out={K8.ter + 20} size={22} anchor="middle" />
			<AlcAt a={TERT} x={RX} y={Y} s={S} at={K8.clue + 10} letters />
			<RingAt c={rc} rx={34} ry={34} at={K8.ter} color={RED} />
			<HChip x={RX} y={520} t="3°: 0 H" at={K8.none} />
			<Tag x={RX} y={580} text="bonded to 3 C + O" at={K8.already} size={24} anchor="middle" />
			<Tube p={DICH.orange} cx={RX} top={640} h={260} at={K8.orange - 20} />
			<g opacity={vis(f, K8.ordinary)}><path d={`M${RX - 260},${700} l120,0 m-14,-10 l14,10 l-14,10`} stroke={INK} strokeWidth={4} fill="none" /><path d={`M${RX - 216},${684} l32,32 M${RX - 184},${684} l-32,32`} stroke={RED} strokeWidth={5} opacity={prog(f, K8.ordinary + 20, 8)} /></g>
			<Tag x={RX + 130} y={760} text="no reaction: stays orange" at={K8.orange} size={26} color="#a85a12" fill="#fbe2cc" />
		</Overlay>
	);
};

// ---------- 9. Primary: aldehyde, then acid ----------
const K9 = cues(sc('primary-to-acid'), {primary: 'A primary alcohol', two: 'two hydrogens', once: 'Oxidise it once', ethanal: 'ethanal, an aldehyde', but: "But an aldehyde's", still: 'still holds', again: 'oxidised again', acid: 'ethanoic acid', ketone: "A ketone's", stops: 'stops at the'});
export const ETOL = alc(2, 1);
export const ETAL = carb(2, 1);
export const ETAC = acid(2);
export const PONE = carb(3, 1);
export const SceneLadder: React.FC = () => {
	const f = useCurrentFrame();
	const X = 330, S = 1;
	return (
		<Overlay>
			<TaskLine text="Primary: aldehyde first, then acid" at={K9.primary} size={50} y={130} />
			<AlcAt a={ETOL} x={X} y={270} s={S} at={K9.primary} />
			<RingAt c={P(ETOL.m, X, 270, S, ETOL.c)} rx={30} ry={30} at={K9.primary + 10} color={RED} />
			<Ghosts m={ETOL.m} x={X} y={270} s={S} i={ETOL.c} at={K9.two - 6} />
			<HChip x={680} y={250} t="1°: 2 H" at={K9.two} anchor="start" />
			<Arrow2 a={[X, 330]} b={[X, 450]} at={K9.once} color={INK} />
			<Sx x={X - 24} y={400} text="[O]" size={30} color={NAVY} anchor="end" weight={800} at={K9.once} />
			<CarbAt k={ETAL} x={X} y={540} s={S} at={K9.ethanal - 10} hGlow={K9.still} />
			<Tag x={680} y={520} text="ethanal: aldehyde (C=O at the end, '-al')" at={K9.ethanal} size={28} color={RED} fill="#f9e1dc" o={dimAt(f, K9.again + 40, 0.6)} />
			<Tag x={680} y={580} text="its carbonyl carbon still has an H" at={K9.still} out={K9.again} size={24} />
			<Arrow2 a={[X, 610]} b={[X, 730]} at={K9.again} color={INK} />
			<Sx x={X - 24} y={680} text="[O]" size={30} color={NAVY} anchor="end" weight={800} at={K9.again} />
			<CarbAt k={ETAC} x={X} y={820} s={S} at={K9.acid - 10} />
			<Tag x={680} y={800} text="ethanoic acid: carboxylic acid ('-oic acid')" at={K9.acid} size={28} color={RED} fill="#f9e1dc" />
			<CT x={680} y={930} text="CH_3CH_2OH + 2[O] → CH_3COOH + H_2O" size={32} at={K9.acid + 30} />
			<CarbAt k={PONE} x={1560} y={560} s={0.9} at={K9.ketone} ring={K9.ketone + 10} />
			<Tag x={1560} y={660} text="ketone: no H left, stops" at={K9.stops} size={26} color={OK} fill="#e3f3e9" anchor="middle" />
		</Overlay>
	);
};

// ---------- 10. Distil or reflux ----------
const K10 = cues(sc('distil-or-reflux'), {how: 'So how', bp: 'Use boiling', noh: 'has no O H', twenty: 'about twenty', heat: 'Heat gently', distil: 'and distil', boils: 'boils off', acid: 'For the acid', reflux: 'under reflux', drips: 'drips back', keeps: 'keeps reacting'});
export const SceneDistilReflux: React.FC = () => {
	const f = useCurrentFrame();
	const D = {cx: 470, top: 440, h: 300}, R = {cx: 1450, top: 380, h: 440};
	const mouth = ptOn(DISTIL, D.cx, D.top, D.h, 1530, 1092), cl = ptOn(DISTIL, D.cx, D.top, D.h, 1550, 1350);
	const liq = ptOn(REFLUX, R.cx, R.top, R.h, 1000, 1286), cb = ptOn(REFLUX, R.cx, R.top, R.h, 1012, 880);
	const a1 = vis(f, K10.distil) * (1 - 0.6 * prog(f, K10.reflux, 12)) + 0.4 * prog(f, K10.reflux, 12);
	const a2 = 0.3 + 0.7 * prog(f, K10.reflux, 12);
	return (
		<Overlay>
			<TaskLine text="Distil or reflux?" at={K10.how} size={54} y={130} />
			<g>
				<CT x={760} y={210} text="ethanol" size={34} />
				<g opacity={a1}><Sx x={930} y={210} text="→" size={40} color={OK} weight={800} at={-1000} /></g>
				<CT x={990} y={210} text="ethanal" size={34} color={RED} />
				<g opacity={a2 * vis(f, K10.how)}><Sx x={1150} y={210} text="→" size={40} color={OK} weight={800} at={-1000} /></g>
				<CT x={1210} y={210} text="ethanoic acid" size={34} />
			</g>
			<Tag x={96} y={240} text="ethanal 20 °C" at={K10.twenty} size={28} color={RED} fill="#f9e1dc" />
			<Tag x={96} y={300} text="ethanol 78 °C" at={K10.twenty + 10} size={28} />
			<Tag x={96} y={360} text="no O–H: no hydrogen bonds between ethanal molecules" at={K10.noh} out={K10.distil + 20} size={22} />
			<Plate p={DISTIL} cx={D.cx} top={D.top} h={D.h} at={K10.distil} />
			<Drips a={mouth} b={cl} at={K10.boils} until={2000} every={16} s={0.8} />
			<Tag x={D.cx} y={D.top + D.h + 30} text="ethanal collected" at={K10.boils + 10} size={26} color={RED} fill="#f9e1dc" anchor="middle" />
			<Tag x={D.cx} y={D.top + D.h + 100} text="distil → aldehyde" at={K10.boils + 30} size={30} color={NAVY} fill="#e7edf8" anchor="middle" />
			<Plate p={REFLUX} cx={R.cx} top={R.top} h={R.h} at={K10.reflux} />
			<Reflux base={[liq[0], liq[1] - 4]} top={[cb[0], cb[1] - 110]} at={K10.drips} until={K10.drips + 110} s={0.8} />
			<Tag x={R.cx + 200} y={R.top + 60} text="ethanal returns" at={K10.drips} size={26} color={RED} fill="#f9e1dc" />
			<Tag x={R.cx} y={R.top + R.h + 40} text="reflux, excess [O] → carboxylic acid" at={K10.keeps} size={30} color={NAVY} fill="#e7edf8" anchor="middle" />
			{void K10.bp}{void K10.heat}{void K10.acid}{void TEAL}
		</Overlay>
	);
};

// ---------- 11. Green means oxidised ----------
const K11 = cues(sc('green-not-product'), {warning: 'One warning', green: 'Green tells', oxid: 'was oxidised', not: 'not tertiary', which: "doesn't tell", need: 'you need'});
export const SceneGreen: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Green means oxidised, not which product" at={K11.warning} size={50} y={130} />
			<Tube p={DICH.green} cx={380} top={300} h={440} at={K11.warning} />
			<Tag x={720} y={280} text="green: primary or secondary alcohol oxidised" at={K11.oxid} size={30} color={OK} fill="#e3f3e9" />
			<g opacity={vis(f, K11.not)}><Tag x={720} y={350} text="3°" at={K11.not} size={28} /><path d="M712,370 L790,370" stroke={GREY} strokeWidth={4} /></g>
			{['aldehyde?', 'ketone?', 'carboxylic acid?'].map((t, i) => <Tag key={i} x={720 + i * 300} y={470} text={t} at={K11.which + i * 6} size={30} color={INK_SOFT} />)}
			<Crossed x={720} y={600} text="green → it's an aldehyde" at={K11.which + 30} cross={K11.need} note="colour shows oxidation, not the product" size={34} />
			<Tag x={720} y={780} text="test the product: next video" at={K11.need + 20} size={24} color={NAVY} fill="#e7edf8" />
		</Overlay>
	);
};

// ---------- 12. The hub ----------
const K12 = cues(sc('alcohol-hub'), {put: 'Put it together', hub: 'a hub', make: 'make it from', lead: 'it can lead', alkene: ['an alkene', 2], halo: ['a haloalkane', 2], oxid: 'by oxidation', each: 'Each arrow'});
export const SceneHub: React.FC = () => (
	<Overlay>
		<TaskLine text="The alcohol is a hub" at={K12.put} size={54} y={130} />
		<Hub T={{at: K12.hub - 10, inAt: K12.make, inDim: K12.lead, out: [K12.alkene, K12.halo, K12.oxid]}} />
		<Tag x={900} y={960} text="each arrow: its own conditions" at={K12.each} size={30} color={NAVY} fill="#e7edf8" anchor="middle" />
	</Overlay>
);

// ---------- 13. Memory aid ----------
const K13 = cues(sc('memory-aid'), {so: 'So, dehydration', subs: 'Substitution swaps', oxid: 'For oxidation', primary: 'Primary goes', choose: 'to choose', distil: 'distil to catch'});
const CARDS = ['dehydration: −H₂O → alkene (conc. acid, heat)', 'substitution: + HX → haloalkane + H₂O (reflux)', 'oxidation: count H on the C–OH carbon: 2, 1, 0'];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K13.so, K13.subs, K13.oxid];
	return (
		<Overlay>
			{CARDS.map((c, i) => <Tag key={i} x={140} y={200 + i * 90} text={c} at={at[i]} size={34} color={NAVY} fill="#fffdf8" o={at[i + 1] === undefined ? 1 : dimAt(f, at[i + 1], 0.5)} />)}
			<TaskLine text="Primary goes all the way, secondary stops at ketone, tertiary won't budge." at={K13.primary} size={50} x={140} y={620} color={TEAL} />
			<TaskLine text="Distil to catch the aldehyde, reflux to go all the way." at={K13.distil} size={50} x={140} y={740} color={TEAL} />
			{void K13.choose}{void Mol2D}
		</Overlay>
	);
};
