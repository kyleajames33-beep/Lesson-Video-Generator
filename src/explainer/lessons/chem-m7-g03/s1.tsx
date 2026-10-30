// M7 G03 (chemistry) scenes 1 to 2d: the hook (C13's map card and four moves; two near-identical alkenes; two isomeric
// ketones; three question cards; the check strip) and question 1 (hexan-3-one from hex-1-ene or hex-3-ene): the
// attempt; count and find the carbon (carbon ruler, backward hook), the symmetrical alkene against hex-1-ene (dockers);
// the two-step flow chart with equations; "hex-1-ene anyway" crossed with the isomer pair.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, PauseHold, Sx, mw} from '../chem-m6-c01/parts';
import {QCardX, Tag} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {RingAt} from '../chem-m7-c06/parts';
import {CarbAt, P2} from '../chem-m7-c08a/parts';
import type {Carb} from '../chem-m7-c08a/parts';
import {FArrow, FBox, MapCard} from '../chem-m7-c13/parts';
import {MiniCard} from '../chem-m6-g01/board';
import {AnsBox, Badge} from '../chem-m7-g01/board';
import {Heading, hold, sc} from './common';
import {AMB, AnsLines, Checks, Docker, GREY, INK, INK_SOFT, NAVY, Named, Neq, RED, Ruler, Strip, TEAL, TEALD, eneM, ketM, olM, uA} from './board';

/** Amber or red ring around a carbonyl's C=O. */
export const CORing: React.FC<{k: Carb; x: number; y: number; s: number; at: number; color?: string}> = ({k, x, y, s, at, color = AMB}) => {
	const op = P2(k.m, x, y, s, k.o), cp = P2(k.m, x, y, s, k.c);
	return <RingAt c={[(op[0] + cp[0]) / 2, (op[1] + cp[1]) / 2]} rx={Math.abs(op[0] - cp[0]) / 2 + 40 * s} ry={Math.abs(op[1] - cp[1]) / 2 + 34 * s} at={at} color={color} />;
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {name: 'name and count', work: 'work backwards', choose: 'choose', write: 'then write', check: 'check', but: 'But exam', choice: 'choice', isomer: 'isomer', here: 'Here are', three: 'three HSC-style', pause: 'Pause and'});
const MOVES = ['1 name, count', '2 backwards', '3 choose', '4 forwards, check'];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const at = [K1.name, K1.work, K1.choose, K1.write];
	const sk = vis(f, K1.choice, K1.here);
	const out = 1 - prog(f, K1.here, 14);
	return (
		<>
			<Heading text="Synthesis practice: right group, right carbon, every arrow" at={4} size={50} />
			<Overlay>
				<MapCard o={out} at={10} />
				{MOVES.map((m, i) => <Tag key={i} x={1440} y={420 + i * 86} text={m} at={at[i]} size={28} color={NAVY} fill="#e7edf8" o={out * (i < 3 ? dimAt(f, at[i + 1], 0.45) : 1) * dimAt(f, K1.check + 20, 0.45)} />)}
				<g opacity={sk}>
					<SkelAt m={eneM(6, 0)} x={430} y={380} s={0.8} at={K1.choice} color={GREY} width={5} />
					<SkelAt m={eneM(6, 2)} x={1010} y={380} s={0.8} at={K1.choice + 8} color={GREY} width={5} />
					<Tag x={430} y={440} text="?" at={K1.choice + 14} size={30} anchor="middle" />
					<Tag x={1010} y={440} text="?" at={K1.choice + 20} size={30} anchor="middle" />
					<CarbAt k={ketM(6, 1)} x={430} y={640} s={0.8} at={K1.isomer} />
					<CarbAt k={ketM(6, 2)} x={1010} y={640} s={0.8} at={K1.isomer + 6} />
					<Neq x={720} y={650} at={K1.isomer + 14} />
					<Tag x={720} y={790} text="same formula, different compound" at={K1.isomer + 14} size={26} anchor="middle" />
				</g>
				{[0, 1, 2].map(i => <MiniCard key={i} x={250 + i * 500} y={330} label={`Question ${i + 1}`} at={K1.three + i * 8} />)}
				<Sx x={960} y={660} text="HSC-style questions, written for HSCScience" size={30} color={INK_SOFT} anchor="middle" hand at={K1.three + 24} />
				<Checks at={K1.pause} />
				{void K1.but}
			</Overlay>
		</>
	);
};

// ---------- question 1 ----------
export const Q1 = ['A chemist needs to make hexan-3-one, CH₃CH₂COCH₂CH₂CH₃. The only carbon-containing', 'starting materials available are hex-1-ene and hex-3-ene.', '(a) Explain which starting material should be used.', '(b) Construct a flow chart for a two-step synthesis of hexan-3-one. Include the reagents', 'and conditions for each step, and write a balanced equation for each step.'];
const BADGE1 = 'Choose the start';

// ---------- 2a. Attempt ----------
const KA = cues(sc('q1-question'), {q: 'Question one', a: 'A chemist', explain: 'Explain which', then: 'Then construct', pause: 'Pause here'});
export const SceneQ1Question: React.FC = () => {
	const h = hold('q1-question');
	return (
		<>
			<Heading text="Question 1" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q1} at={KA.a} y={175} size={32} />
				<AnsBox x={140} y={540} w={640} label="(a)" at={KA.explain + 10} />
				<AnsBox x={810} y={540} w={970} label="(b)" at={KA.then + 10} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1650} cy={840} />
				<Checks hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 2b. Which carbon, which alkene ----------
const KB = cues(sc('q1-choose'), {count: 'Count first', six: 'six carbons', target: 'so does the target', length: 'length', three: 'three', ox: 'Oxidation turns', need: 'so you need', now: 'Now look', h3: 'Hex-3-ene is', sym: 'symmetrical', which: 'whichever', three2: ['three', 2], h1: 'Hex-1-ene', water: 'Water adds', two: 'carbon two', wrong: 'wrong alcohol'});
const T3 = ketM(6, 2);
export const SceneQ1Choose: React.FC = () => {
	const f = useCurrentFrame();
	const left = dimAt(f, KB.now, 0.4);
	const right = dimAt(f, KB.wrong + 30, 0.5);
	const mid = dimAt(f, KB.h1, 0.55) + 0.45 * prog(f, KB.wrong + 20, 12);
	return (
		<Overlay>
			<Badge text={BADGE1} at={6} />
			<Strip lines={Q1} under={[uA(0, 'hexan-3-one, CH₃CH₂COCH₂CH₂CH₃', KB.target), uA(1, 'hex-1-ene and hex-3-ene', KB.six), uA(1, 'hex-3-ene.', KB.h3)]} />
			<g opacity={left}>
				<CarbAt k={T3} x={380} y={440} s={0.72} at={KB.count} />
				<Ruler n={6} x={380} y={440} s={0.72} at={KB.target} ring={[{i: 2, at: KB.three}]} />
				<Tag x={380} y={540} text="hexan-3-one: C=O on C3" at={KB.three} size={24} color={AMB} fill="#fbedd0" anchor="middle" />
				<Tag x={110} y={590} text="6 C in each: the chain keeps its length" at={KB.length} out={KB.ox} size={22} />
				<FArrow a={[380, 592]} b={[380, 652]} at={KB.ox} color={AMB} dashed />
				<FBox x={210} y={660} w={340} name="hexan-3-ol" formula="CH₃CH₂CH(OH)CH₂CH₂CH₃" at={KB.need + 10} size={22} edge="amber" />
				<Tag x={110} y={750} text="c08a: oxidation keeps the group on the same carbon" at={KB.need + 20} size={19} />
			</g>
			<g opacity={mid}>
				<Named m={eneM(6, 2)} x={960} y={430} s={0.72} name="hex-3-ene" at={KB.h3} size={24} dy={150} />
				<Ruler n={6} x={960} y={430} s={0.72} at={KB.h3 + 10} out={KB.which - 4} />
				<Docker n={6} x={960} y={430} s={0.72} main={2} at={KB.which} minor={3} minorAt={KB.which + 30} minorO={0.8} o={1 - prog(f, KB.three2 + 20, 12) * 0.6} />
				<Named m={olM(6, 2)} x={960} y={660} s={0.62} name="hexan-3-ol" at={KB.three2} size={24} color={TEALD} dy={150} />
				<Tag x={960} y={800} text="symmetrical: one product" at={KB.three2 + 10} size={24} color={TEALD} fill="#dff2ef" anchor="middle" />
			</g>
			<g opacity={right}>
				<Named m={eneM(6, 0)} x={1530} y={430} s={0.72} name="hex-1-ene" at={KB.h1} size={24} dy={150} />
				<Ruler n={6} x={1530} y={430} s={0.72} at={KB.h1 + 10} out={KB.water - 4} />
				<Docker n={6} x={1530} y={430} s={0.72} main={1} at={KB.water} minor={0} minorAt={KB.water + 16} />
				<Named m={olM(6, 1)} x={1500} y={660} s={0.62} name="hexan-2-ol" at={KB.two} size={24} />
				<g opacity={0.4}><Named m={olM(6, 0)} x={1790} y={640} s={0.32} name="hexan-1-ol" at={KB.two + 10} size={18} dy={80} /></g>
				<Tag x={1500} y={800} text="mainly hexan-2-ol (c04a)" at={KB.wrong} size={24} color={RED} fill="#f9e1dc" anchor="middle" />
			</g>
			<AnsLines x={140} y={872} w={1640} label="(a)" at={KB.wrong} lines={[{t: 'Hex-3-ene. It is symmetrical, so water adds to give only hexan-3-ol, which oxidises to hexan-3-one.', at: KB.wrong + 6, lit: true}, {t: 'Hex-1-ene is not symmetrical: it gives mainly hexan-2-ol.', at: KB.wrong + 26}]} />
			<Checks ticks={{0: [KB.length], 1: [KB.wrong + 10]}} />
			{void KB.sym}
		</Overlay>
	);
};

// ---------- 2c. Two steps, two equations ----------
const KC = cues(sc('q1-route'), {so: 'So use', step1: 'Step one', water: 'water with', ol: 'hexan-3-ol', eqm: 'equilibrium', step2: 'Step two', acid: 'acidified', reflux: 'reflux', one: 'hexan-3-one', orange: 'orange turns', ketone: 'A ketone', eq: 'For each', ob: 'O in square', bal: 'balance'});
export const ChartQ1: React.FC<{T: {a: number; w: number; ol: number; ac: number; one: number; dim1?: number}; y?: number}> = ({T, y = 420}) => {
	const m = y + 32;
	return (
		<g>
			<FBox x={120} y={y} w={340} name="hex-3-ene" formula="CH₃CH₂CH=CHCH₂CH₃" at={T.a} size={22} />
			<FArrow a={[470, m]} b={[700, m]} at={T.w} eq chips={['H₂O', 'dilute acid catalyst', 'heat']} dim={T.dim1} size={18} />
			<FBox x={710} y={y} w={400} name="hexan-3-ol" formula="CH₃CH₂CH(OH)CH₂CH₂CH₃" at={T.ol} size={22} />
			<FArrow a={[1120, m]} b={[1360, m]} at={T.ac} chips={['K₂Cr₂O₇ / H⁺', 'heat under reflux']} size={18} />
			<FBox x={1370} y={y} w={410} name="hexan-3-one" formula="CH₃CH₂COCH₂CH₂CH₃" at={T.one} size={22} edge="red" />
		</g>
	);
};
export const SceneQ1Route: React.FC = () => {
	const f = useCurrentFrame();
	const e2a = 'C₆H₁₄O + ', e2b = '[O]';
	const ox = 160 + mw(e2a, 36, false, 700);
	return (
		<Overlay>
			<Badge text={BADGE1} at={-100} />
			<Strip lines={Q1} under={[uA(0, 'hexan-3-one, CH₃CH₂COCH₂CH₂CH₃', -100), uA(1, 'hex-3-ene.', KC.so), uA(3, '(b) Construct a flow chart', KC.step1), uA(4, 'balanced equation for each step', KC.eq)]} />
			<g opacity={vis(f, KC.step1 - 10)}>
				<rect x={96} y={365} width={1728} height={150} rx={16} fill="none" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
				<Sx x={108} y={402} text="(b)" size={22} color={INK_SOFT} weight={700} at={-1000} />
			</g>
			<ChartQ1 T={{a: KC.so + 10, w: KC.water, ol: KC.ol, ac: KC.acid, one: KC.one, dim1: KC.acid}} />
			<Tag x={710} y={530} text="intermediate" at={KC.ol + 10} out={KC.eq} size={20} color={AMB} fill="#fbedd0" />
			<Tag x={470} y={530} text="equilibrium: ⇌" at={KC.eqm} out={KC.step2} size={22} color={NAVY} fill="#e7edf8" />
			<Tag x={1370} y={530} text="orange → green" at={KC.orange} out={KC.eq} size={20} />
			<Tag x={1000} y={590} text="c08a: secondary → ketone; no further oxidation" at={KC.ketone} out={KC.eq} size={20} />
			<Sx x={160} y={700} text="C₆H₁₂ + H₂O ⇌ C₆H₁₄O" size={36} color={INK} weight={700} at={KC.eq} />
			<Sx x={160} y={780} text={e2a + e2b + ' → C₆H₁₂O + H₂O'} size={36} color={INK} weight={700} at={KC.ob - 20} />
			<RingAt c={[ox + mw(e2b, 36, false, 700) / 2, 768]} rx={42} ry={30} at={KC.ob} color={AMB} />
			<Tag x={900} y={752} text="H: 14 = 12 + 2;  O: 1 + 1 = 1 + 1" at={KC.bal} out={KC.bal + 70} size={22} />
			<Checks ticks={{0: [-100], 1: [-100], 2: [KC.reflux], 3: [KC.bal]}} />
		</Overlay>
	);
};

// ---------- 2d. The classic mistake ----------
const KD = cues(sc('q1-mistake'), {slip: 'classic slip', h1: 'picking', ol: 'hexan-2-ol', where: 'where the', make: 'make', formula: 'same formula', iso: 'isomer'});
export const SceneQ1Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const chain = 'hex-1-ene → (H₂O, dilute acid, heat) → hexan-2-ol → ';
	const cw = mw(chain, 32, true, 700);
	const bx = 160 + cw + 12, bw = mw('hexan-3-one', 32, true, 700) + 40;
	const T2 = ketM(6, 1);
	return (
		<Overlay>
			<Badge text={BADGE1} at={-100} />
			<Strip lines={Q1} under={[uA(0, 'hexan-3-one, CH₃CH₂COCH₂CH₂CH₃', -100), uA(1, 'hex-1-ene', KD.h1)]} />
			<g opacity={vis(f, KD.slip)}>
				<rect x={130} y={392} width={cw + bw + 60} height={70} rx={35} fill="#f1efea" stroke={RED} strokeWidth={3} />
				<Sx x={160} y={438} text={chain} size={32} color={INK_SOFT} hand at={-1000} />
				<rect x={bx} y={402} width={bw} height={50} rx={12} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} />
				<Sx x={bx + 20} y={438} text="hexan-3-one" size={32} color={INK} hand at={-1000} />
			</g>
			{prog(f, KD.make, 8) > 0 ? <g opacity={prog(f, KD.make, 8)} stroke={RED} strokeWidth={7} strokeLinecap="round"><line x1={bx + 6} y1={408} x2={bx + bw - 6} y2={448} /><line x1={bx + bw - 6} y1={408} x2={bx + 6} y2={448} /></g> : null}
			<Sx x={bx + 20} y={500} text="hexan-2-one" size={34} color={RED} hand weight={700} at={KD.make + 8} />
			<Sx x={160} y={560} text="the C=O forms where the OH was: wrong carbon, wrong compound" size={30} color={TEAL} hand at={KD.where} />
			<CarbAt k={ketM(6, 2)} x={620} y={690} s={0.72} at={KD.make + 10} />
			<CORing k={ketM(6, 2)} x={620} y={690} s={0.72} at={KD.make + 20} />
			<Sx x={620} y={835} text="hexan-3-one (target)" size={26} color={INK} anchor="middle" weight={800} at={KD.make + 10} />
			<CarbAt k={T2} x={1300} y={690} s={0.72} at={KD.make + 14} />
			<CORing k={T2} x={1300} y={690} s={0.72} at={KD.make + 24} color={RED} />
			<Sx x={1300} y={835} text="hexan-2-one" size={26} color={RED} anchor="middle" weight={800} at={KD.make + 14} />
			<Neq x={960} y={690} at={KD.formula} />
			<Tag x={960} y={860} text="both C₆H₁₂O: isomers" at={KD.formula} size={26} anchor="middle" />
			<Sx x={960} y={950} text="isomers: same formula, different structure" size={24} color={INK_SOFT} anchor="middle" weight={600} at={KD.iso} />
			<Checks ticks={{0: [-100], 1: [-100], 2: [-100], 3: [-100]}} />
			{void KD.ol}
		</Overlay>
	);
};
