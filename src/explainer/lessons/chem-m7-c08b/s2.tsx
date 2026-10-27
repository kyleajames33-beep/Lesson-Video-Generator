// M7 C08b scenes 8 to 13: one hydrogen makes the difference (H counters; oxidised, reagent reduced), Tollens' reagent
// (the cross-fade to the mirror; the hazard), Fehling's solution (blue to brick red), three tests one question (the
// results grid), testing the product of an oxidation (the flow) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TEAL, TaskLine} from '../chem-m6-c01/parts';
import {Crossed, Tag} from '../chem-m7-c01/molecules';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {Arrow2, Leader, ptOn} from '../chem-m7-c06/parts';
import {CarbAt, HChip, INK, INK_SOFT, NAVY, RED, Tube, carb} from '../chem-m7-c08a/parts';
import {DICH, FEHL, TOLL, sc} from './common';

const OK = '#2f8a5b', GREY = '#8a847a';
const PRO = carb(3, 1), PAL3 = carb(3, 2);

// ---------- 8. One hydrogen ----------
const K8 = cues(sc('one-hydrogen'), {chem: 'Now the chemistry', stopped: 'a ketone stopped', noh: 'no hydrogen to remove', still: 'still has one', easily: 'easily oxidised', tests: 'That gives us', oxid: 'The aldehyde is oxidised', reduced: 'reagent is reduced', nothing: 'usually does nothing'});
export const SceneOneH: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Test it: one hydrogen" at={K8.chem} size={54} y={130} />
			<g opacity={dimAt(f, K8.still + 30, 0.4)}>
				<CT x={96} y={230} text="ethanol → ethanal → ethanoic acid" size={28} color={GREY} at={K8.chem} />
				<CT x={96} y={272} text="propan-2-ol → propanone (stops)" size={28} color={GREY} at={K8.stopped} />
			</g>
			<CarbAt k={PRO} x={560} y={450} s={1.1} at={K8.stopped} ring={K8.noh} />
			<HChip x={560} y={560} t="0 H" at={K8.noh + 10} />
			<CarbAt k={PAL3} x={560} y={760} s={1.1} at={K8.still - 10} hGlow={K8.still} />
			<HChip x={560} y={860} t="1 H" at={K8.still + 10} />
			<Arrow2 a={[760, 760]} b={[1000, 760]} at={K8.easily} color={INK} />
			<Sx x={880} y={740} text="mild oxidant" size={24} color={INK_SOFT} anchor="middle" weight={700} at={K8.easily} />
			<Tag x={1020} y={736} text="oxidised" at={K8.easily + 10} size={30} color={OK} fill="#e3f3e9" />
			<Tag x={1020} y={800} text="aldehyde: easily oxidised" at={K8.easily + 20} out={K8.reduced} size={22} />
			<Arrow2 a={[1000, 840]} b={[1000, 880]} at={K8.reduced} color={NAVY} />
			<Tag x={1020} y={880} text="reagent: reduced → visible change" at={K8.reduced} size={30} color={NAVY} fill="#e7edf8" />
			<Tag x={1020} y={950} text="reduced: gains electrons" at={K8.reduced + 20} size={22} />
			<g opacity={vis(f, K8.nothing)}><path d="M760,450 l200,0 m-14,-10 l14,10 l-14,10" stroke={INK} strokeWidth={4} fill="none" /><path d="M844,432 l32,36 M876,432 l-32,36" stroke={RED} strokeWidth={5} opacity={prog(f, K8.nothing + 14, 8)} /></g>
			<Tag x={1000} y={428} text="ketone: usually no reaction" at={K8.nothing + 10} size={26} />
			{void K8.tests}{void K8.oxid}
		</Overlay>
	);
};

// ---------- 9. Tollens' ----------
const K9 = cues(sc('tollens-test'), {first: 'The first test', silver: 'silver ions', warm: 'Warm it gently', reduces: 'reduces the silver', metal: 'silver metal', ketone: 'With a ketone', clear: 'stays clear', fresh: 'made fresh', explosive: 'explosive solid'});
export const T9 = {cx: 520, top: 300, h: 500};
export const SceneTollens: React.FC = () => {
	const wall = ptOn(TOLL.clear, T9.cx, T9.top, T9.h, 940, 1380);
	return (
		<Overlay>
			<TaskLine text="Test 1: Tollens' reagent" at={K9.first} size={54} y={130} />
			<Tube p={TOLL.clear} to={TOLL.mirror} swap={K9.metal} cx={T9.cx} top={T9.top} h={T9.h} at={K9.first} />
			<Sx x={T9.cx} y={T9.top - 24} text="Tollens' reagent: Ag⁺ in ammonia solution" size={28} color={INK} anchor="middle" weight={700} at={K9.silver} />
			<Tag x={T9.cx} y={T9.top + T9.h + 20} text="warm water bath" at={K9.warm} size={24} anchor="middle" />
			<Leader a={[860, 560]} b={wall} at={K9.metal + 10} />
			<Tag x={860} y={540} text="Ag⁺ → Ag: silver metal on the glass" at={K9.metal + 10} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={860} y={600} text="+ aldehyde" at={K9.reduces} size={26} color={OK} fill="#e3f3e9" />
			<Tube p={TOLL.clear} cx={1500} top={T9.top + 120} h={380} at={K9.ketone} />
			<Tag x={1500} y={T9.top + 520} text="+ ketone: no change" at={K9.clear} size={26} anchor="middle" />
			<Tag x={640} y={880} text="make fresh, use at once, dispose straight after:" at={K9.explosive - 30} size={24} color={NAVY} fill="#e7edf8" />
			<Tag x={640} y={940} text="aged reagent can form an explosive solid" at={K9.explosive} size={24} color={NAVY} fill="#e7edf8" />
			{void K9.fresh}
		</Overlay>
	);
};

// ---------- 10. Fehling's ----------
const K10 = cues(sc('fehlings-test'), {second: 'The second is', blue: 'deep blue', warm: 'Warm it with', reduced: 'are reduced', brick: 'brick-red precipitate', meaning: 'meaning a solid', ketone: 'A ketone leaves', enough: "isn't enough", takes: 'It takes'});
export const SceneFehling: React.FC = () => {
	const base = ptOn(FEHL.blue, T9.cx, T9.top, T9.h, 990, 1500);
	return (
		<Overlay>
			<TaskLine text="Test 2: Fehling's (or Benedict's) solution" at={K10.second} size={50} y={130} />
			<Tube p={FEHL.blue} to={FEHL.red} swap={K10.brick} cx={T9.cx} top={T9.top} h={T9.h} at={K10.second} />
			<Sx x={T9.cx} y={T9.top - 24} text="Fehling's (or Benedict's): blue Cu²⁺" size={28} color={INK} anchor="middle" weight={700} at={K10.blue} />
			<Tag x={T9.cx} y={T9.top + T9.h + 20} text="warm" at={K10.warm} size={24} anchor="middle" />
			<Tag x={96} y={T9.top + T9.h + 80} text="alkaline: corrosive" at={K10.warm + 20} out={K10.brick} size={22} />
			<Leader a={[860, 680]} b={[base[0] + 30, base[1]]} at={K10.brick + 10} />
			<Tag x={860} y={660} text="Cu²⁺ → Cu₂O: brick-red precipitate" at={K10.brick + 10} size={26} color={RED} fill="#f9e1dc" />
			<Tag x={860} y={720} text="+ aldehyde" at={K10.reduced} size={26} color={OK} fill="#e3f3e9" />
			<Tag x={860} y={780} text="precipitate: a solid forming in the solution" at={K10.meaning} out={K10.ketone + 30} size={22} />
			<Tube p={FEHL.blue} cx={1500} top={T9.top + 120} h={380} at={K10.ketone} />
			<Tag x={1500} y={T9.top + 520} text="+ ketone: stays blue" at={K10.ketone + 10} size={26} anchor="middle" />
			<Crossed x={860} y={850} text="any C=O gives a positive test" at={K10.enough - 20} cross={K10.takes} note="only an H on the carbonyl carbon is oxidised" size={30} />
		</Overlay>
	);
};

// ---------- 11. Three tests, one question ----------
const K11 = cues(sc('three-tests-one-question'), {and: 'And acidified', green: 'turns it green', orange: 'leaves it orange', so: 'So, for an aldehyde', all: 'all three', hyd: 'Is there a hydrogen'});
export const ResultsGrid: React.FC<{rowAt: [number, number, number]; banner: number; x?: number; y?: number; s?: number; o?: number}> = ({rowAt, banner, x = 0, y = 0, s = 1, o = 1}) => {
	const f = useCurrentFrame();
	const rows = [{t: "Tollens'", a: TOLL.mirror, k: TOLL.clear}, {t: "Fehling's / Benedict's", a: FEHL.red, k: FEHL.blue}, {t: 'acidified dichromate', a: DICH.green, k: DICH.orange}];
	const AXc = 1000, KXc = 1360;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${s})`}>
			<Sx x={AXc} y={300} text="aldehyde" size={34} color={OK} anchor="middle" hand weight={700} at={rowAt[0] - 10} />
			<Sx x={KXc} y={300} text="ketone" size={34} color={INK_SOFT} anchor="middle" hand weight={700} at={rowAt[0] - 10} />
			{rows.map((r, i) => {
				const yy = 330 + i * 200;
				const v = vis(f, rowAt[i]);
				if (v <= 0.01) return null;
				return (
					<g key={i} opacity={v}>
						<Sx x={300} y={yy + 110} text={r.t} size={32} color={INK} weight={700} at={-1000} />
						<Tube p={r.a} cx={AXc} top={yy} h={180} />
						<Tube p={r.k} cx={KXc} top={yy} h={180} />
						<circle cx={AXc + 110} cy={yy + 40} r={22} fill="#e3f3e9" stroke={OK} strokeWidth={3} /><Sx x={AXc + 110} y={yy + 50} text="+" size={30} color={OK} anchor="middle" weight={800} at={-1000} />
						<circle cx={KXc + 110} cy={yy + 40} r={22} fill="#f1efea" stroke={GREY} strokeWidth={3} /><Sx x={KXc + 110} y={yy + 50} text="−" size={30} color={GREY} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			<g opacity={vis(f, banner)}>
				<rect x={600} y={150} width={1000} height={60} rx={30} fill="#dff2ef" stroke={TEAL} strokeWidth={3} />
				<Sx x={1100} y={190} text="Is there an H on the carbonyl carbon?" size={32} color={TEAL} anchor="middle" weight={800} at={-1000} />
				<Sx x={AXc} y={250} text="yes" size={24} color={OK} anchor="middle" weight={800} at={banner + 10} />
				<Sx x={KXc} y={250} text="no" size={24} color={GREY} anchor="middle" weight={800} at={banner + 10} />
			</g>
		</g>
	);
};
export const SceneThree: React.FC = () => (
	<Overlay>
		<TaskLine text="Three tests, one question" at={K11.and} size={54} y={130} />
		<ResultsGrid rowAt={[K11.and - 20, K11.and - 10, K11.green]} banner={K11.hyd} />
		{void K11.orange}{void K11.so}{void K11.all}
	</Overlay>
);

// ---------- 12. Testing the product ----------
const K12 = cues(sc('testing-the-product'), {here: "Here's how", oxid: 'Oxidise an unknown', green: ['turns green', 1], distil: 'distil off', test: 'Then test', mirror: 'A silver mirror', primary: 'was primary', no: 'No mirror', secondary: 'was secondary', dont: "Don't rely", too: 'green too'});
const Step: React.FC<{x: number; y: number; w: number; t: string; at: number}> = ({x, y, w, t, at}) => {
	const f = useCurrentFrame();
	const v = vis(f, at);
	if (v <= 0.01) return null;
	return <g opacity={v}><rect x={x} y={y} width={w} height={96} rx={16} fill="#fffdf8" stroke={NAVY} strokeWidth={3} /><Sx x={x + w / 2} y={y + 58} text={t} size={28} color={INK} anchor="middle" weight={700} at={-1000} /></g>;
};
export const SceneProduct: React.FC = () => (
	<Overlay>
		<TaskLine text="Test the product, name the alcohol" at={K12.here} size={50} y={130} />
		<Step x={96} y={230} w={560} t="unknown alcohol + K₂Cr₂O₇ / H⁺: green" at={K12.oxid} />
		<Tube p={DICH.green} cx={376} top={340} h={120} at={K12.green} />
		<Arrow2 a={[666, 278]} b={[730, 278]} at={K12.distil} color={INK} />
		<Step x={740} y={230} w={420} t="distil off the product" at={K12.distil} />
		<Arrow2 a={[1170, 278]} b={[1234, 278]} at={K12.test} color={INK} />
		<Step x={1244} y={230} w={580} t="test the product with Tollens'" at={K12.test} />
		<Tag x={96} y={480} text="stayed orange at the start → tertiary" at={K12.oxid + 50} size={22} />
		<Arrow2 a={[1530, 330]} b={[1300, 560]} at={K12.mirror} color={INK_SOFT} bend={30} />
		<Tube p={TOLL.mirror} cx={300} top={540} h={150} at={K12.mirror} />
		<Tag x={420} y={590} text="silver mirror → aldehyde → primary alcohol" at={K12.primary} size={32} color={OK} fill="#e3f3e9" />
		<Arrow2 a={[1560, 330]} b={[1400, 740]} at={K12.no} color={INK_SOFT} bend={-30} />
		<Tube p={TOLL.clear} cx={300} top={720} h={150} at={K12.no} />
		<Tag x={420} y={770} text="no mirror → ketone → secondary alcohol" at={K12.secondary} size={32} color={NAVY} fill="#e7edf8" />
		<Crossed x={420} y={900} text="product turns dichromate green → aldehyde" at={K12.dont} cross={K12.too} note="1° and 2° alcohols turn it green too" size={30} />
	</Overlay>
);

// ---------- 13. Memory aid ----------
const K13 = cues(sc('memory-aid'), {so: 'So, aldehyde', al: 'Aldehydes end', dd: 'Both have dipole-dipole', every: 'every test asks', yes: 'Yes means'});
const CARDS = ["aldehyde –CHO: '-al', no number; ketone C–CO–C: '-one', number from C5", 'dipole–dipole + dispersion; no H bonds between them: alkane < aldehyde, ketone < alcohol', 'aldehyde: mirror, brick red, green.  Ketone: no change'];
export const SceneAid: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K13.al, K13.dd, K13.yes];
	return (
		<Overlay>
			{CARDS.map((c, i) => <Tag key={i} x={120} y={200 + i * 90} text={c} at={at[i]} size={30} color={NAVY} fill="#fffdf8" o={at[i + 1] === undefined ? 1 : dimAt(f, at[i + 1], 0.5)} />)}
			<TaskLine text="Aldehyde at the end, ketone in the middle." at={K13.so} size={60} x={120} y={620} color={TEAL} />
			<TaskLine text="Every test asks: is there an H on the carbonyl carbon?" at={K13.every} size={56} x={120} y={740} color={TEAL} />
		</Overlay>
	);
};
