// M7 G01 scenes 4a to 4d: question 3 (work backwards from 1,1,2,2-tetrachlorobutane): the attempt; what was added (in the
// dark, so not substitution; four Cl pair into two Cl2; a C=C opens once, so two extra bonds); where (all four Cl on C1
// and C2: the work-back stripper lifts one Cl from each carbon, twice, and the bonds between C1 and C2 rebuild into a
// triple bond: but-1-yne, with the atom check); but-1-ene crossed.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, INK, Overlay, PauseHold, Sx, TEAL} from '../chem-m6-c01/parts';
import {CHAIN_INK, Crossed, MULTI, NAVY, NameBuilder, NameLbl, QCardX, Tag} from '../chem-m7-c01/molecules';
import {CHLOR, CT, Mol2D, apt, cmol, dimAt, vis} from '../chem-m7-c04a/parts';
import {UV, UVGlow} from '../chem-m7-c04b/parts';
import {AnsBox, Badge, Checks7, QF, QStrip} from './board';
import type {APart} from './board';
import {Heading, hold, sc} from './common';

export const Q3 = ['Hydrocarbon X reacts with excess chlorine at room temperature in the dark.', 'The only organic product is 1,1,2,2-tetrachlorobutane, CHCl₂CCl₂CH₂CH₃.', 'Identify X. Explain your reasoning, including the type of reaction involved.'];
const ANS = (at: number): APart[] => [{t: 'X = ', at}, {t: 'but-1-yne', at, lit: true}, {t: ', HC≡CCH₂CH₃: addition of 2Cl₂ across the C≡C between C1 and C2 (no UV, so not substitution)', at}];
const AnsQ3: React.FC<{fill?: number}> = ({fill = 1e6}) => <AnsBox x={140} y={900} w={1640} label="" at={-100} size={23} parts={ANS(fill)} />;

// ---------- 4a. Question 3 (attempt) ----------
const KA = cues(sc('q3-question'), {q: 'Question three', x: 'A hydrocarbon', only: 'The only', identify: 'Identify X', pause: 'Pause here'});
export const SceneQ3Question: React.FC = () => {
	const h = hold('q3-question');
	return (
		<>
			<Heading text="Question 3" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q3} at={KA.x} y={QF.y} size={QF.size} />
				<AnsBox x={140} y={440} w={1640} label="X" at={KA.identify + 20} />
				<PauseHold h={h} at={KA.pause} x={140} y={850} cx={1650} cy={840} />
				<Checks7 hold={h} />
				{void KA.only}
			</Overlay>
		</>
	);
};

// ---------- the product ----------
const TETRA = cmol([{l: 'H', u: 'Cl', d: 'Cl'}, {u: 'Cl', d: 'Cl'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
const P = {x: 700, y: 610, s: 1.0};
const Nums: React.FC<{at: number; glow?: number}> = ({at, glow}) => {
	const f = useCurrentFrame();
	return (
		<g>{TETRA.C.map((c, i) => {
			const p = apt(TETRA, c, P.x, P.y, P.s);
			const g = glow !== undefined && i < 2 ? vis(f, glow, glow + 60) : 0;
			return (
				<g key={i}>
					{g > 0.01 ? <circle cx={p[0] + 34} cy={p[1] + 36} r={22} fill="#f6d77a" opacity={0.7 * g} /> : null}
					<Sx x={p[0] + 34} y={p[1] + 44} text={String(i + 1)} size={24} color={NAVY} anchor="middle" weight={800} at={at + i * 4} />
				</g>
			);
		})}</g>
	);
};
const k = TETRA.k;

// ---------- 4b. What was added ----------
const KB = cues(sc('q3-what-added'), {work: 'Work backwards', dark: 'in the dark', uv: 'UV light', isnt: "isn't substitution", added: 'Chlorine has added', four: 'four chlorine', two: 'two chlorine molecules', once: 'only once', would: 'would add', twice: 'Adding twice', triple: 'triple', dbl: 'two double bonds'});
const PairBox: React.FC<{a: number; b: number; at: number; out?: number; label: string; up: boolean}> = ({a, b, at, out, label, up}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const p = apt(TETRA, a, P.x, P.y, P.s), q = apt(TETRA, b, P.x, P.y, P.s);
	const x1 = p[0] - 34, x2 = q[0] + 34, y = p[1];
	return (
		<g opacity={v}>
			<rect x={x1} y={y - 30} width={x2 - x1} height={60} rx={30} fill="none" stroke={CHLOR} strokeWidth={4} />
			<CT x={(x1 + x2) / 2} y={up ? y - 44 : y + 72} text={label} size={30} color={CHLOR} anchor="middle" weight={800} />
		</g>
	);
};
export const SceneQ3WhatAdded: React.FC = () => {
	const f = useCurrentFrame();
	const cls = [k['0u'], k['0d'], k['1u'], k['1d']];
	return (
		<Overlay>
			<Badge text="Working backwards" at={6} />
			<QStrip lines={Q3} under={[{line: 0, phrase: 'in the dark', at: KB.dark}, {line: 1, phrase: '1,1,2,2-tetrachlorobutane', at: KB.four}, {line: 0, phrase: 'excess chlorine', at: KB.two}]} />
			<g opacity={dimAt(f, KB.added, 0.0)}>
				<UVGlow x={1500} y={420} rx={90} ry={44} at={KB.dark} o={0.6} />
				<Sx x={1500} y={430} text="UV light" size={30} color={UV} anchor="middle" weight={800} at={KB.dark} />
				{f >= KB.uv ? <DrawPath d="M1410,450 L1590,395" at={KB.uv} dur={10} color="#c4432f" width={6} /> : null}
			</g>
			<Tag x={1500} y={480} text="no UV: not substitution" at={KB.uv + 10} out={KB.four} size={26} anchor="middle" />
			<Tag x={140} y={340} text="addition" at={KB.added} size={34} color={TEAL} fill="#dff2ef" />
			<Mol2D m={TETRA} x={P.x} y={P.y} s={P.s} at={KB.work + 10} glow={Object.fromEntries(cls.map(i => [i, [KB.four, KB.two + 30]]))} />
			<Nums at={KB.work + 30} />
			<PairBox a={k['0u']} b={k['1u']} at={KB.two} label="Cl_2" up />
			<PairBox a={k['0d']} b={k['1d']} at={KB.two + 10} label="Cl_2" up={false} />
			<Tag x={1340} y={560} text="4 Cl = 2 Cl_2 added" at={KB.two} size={32} color={CHLOR} fill="#dcefdc" anchor="middle" o={dimAt(f, KB.twice, 0.5)} />
			<Tag x={1340} y={650} text="a C=C opens once: 1 Cl_2" at={KB.once} out={KB.twice} size={28} anchor="middle" />
			<Tag x={1340} y={650} text="2 Cl_2 = 2 extra bonds: C≡C, or two C=C" at={KB.triple} size={28} color={MULTI} fill="#dff2ef" anchor="middle" />
			<AnsQ3 />
			<Checks7 ticks={{1: [KB.added]}} />
			{void KB.isnt}{void KB.would}{void KB.dbl}{void INK}
		</Overlay>
	);
};

// ---------- 4c. Where: put the triple bond back ----------
const KC = cues(sc('q3-where'), {where: 'Now where', all: 'All four', c12: 'carbons one', both: 'So both', same: 'same pair', needs: 'That needs', one: 'carbon one', take: 'Take the', back: 'bond back', x: 'X is', name: 'but-one-yne', check: 'Check', gives: 'gives'});
export const SceneQ3Where: React.FC = () => {
	const f = useCurrentFrame();
	const t1 = KC.take, t2 = KC.take + 34;
	const c1 = apt(TETRA, k.c0, P.x, P.y, P.s), c2 = apt(TETRA, k.c1, P.x, P.y, P.s);
	const ax = c1[0] + 22, bx = c2[0] - 22;
	const bnd = (at: number, dy: number) => <g opacity={vis(f, at)}><DrawPath d={`M${ax},${c1[1] + dy} L${bx},${c2[1] + dy}`} at={at} dur={12} color={MULTI} width={5} /></g>;
	const lift = (i: number, at: number, dy: number) => ({to: [apt(TETRA, i, 0, 0, 1)[0], apt(TETRA, i, 0, 0, 1)[1] + dy] as [number, number], at, dur: 22, fade: at + 14});
	const done = vis(f, KC.name);
	return (
		<Overlay>
			<Badge text="Working backwards" at={-100} />
			<QStrip lines={Q3} under={[{line: 0, phrase: 'in the dark', at: -100}, {line: 0, phrase: 'excess chlorine', at: -100}, {line: 1, phrase: '1,1,2,2-tetrachlorobutane', at: -100}, {line: 1, phrase: '1,1,2,2', at: KC.where, color: NAVY}, {line: 2, phrase: 'Identify X', at: KC.x}]} />
			<Tag x={140} y={340} text="addition" at={-100} size={30} color={TEAL} fill="#dff2ef" o={0.6} />
			<Mol2D m={TETRA} x={P.x} y={P.y} s={P.s} at={-100} glow={{[k['0u']]: [KC.all, KC.take], [k['0d']]: [KC.all, KC.take], [k['1u']]: [KC.all, KC.take], [k['1d']]: [KC.all, KC.take]}} lift={{[k['0u']]: lift(k['0u'], t1, -120), [k['1u']]: lift(k['1u'], t1 + 4, -120), [k['0d']]: lift(k['0d'], t2, 120), [k['1d']]: lift(k['1d'], t2 + 4, 120)}} />
			{bnd(t1 + 18, -10)}
			{bnd(t2 + 18, 10)}
			{done > 0.01 ? <line x1={ax} y1={c1[1]} x2={bx} y2={c2[1]} stroke={MULTI} strokeWidth={4} opacity={done} /> : null}
			<Nums at={-100} glow={KC.where} />
			<Tag x={1340} y={420} text="all 4 Cl on C1 and C2" at={KC.c12} size={30} anchor="middle" o={dimAt(f, KC.take, 0.5)} />
			<Tag x={1340} y={490} text="same two carbons → C≡C" at={KC.same} size={30} color={MULTI} fill="#dff2ef" anchor="middle" o={dimAt(f, KC.take, 0.5)} />
			<Tag x={P.x} y={790} text="one piece from each carbon, twice" at={KC.take} out={KC.check} size={28} anchor="middle" />
			<NameBuilder x={1080} y={580} s={0.72} at={KC.x - 10} fills={[{slot: 1, text: 'but', at: KC.name}, {slot: 2, text: '-1-yne', at: KC.name + 8}]} />
			<NameLbl x={1400} y={760} parts={[['HC≡CCH', MULTI], ['₂CH₃', CHAIN_INK]]} at={KC.name + 30} size={34} />
			<CT x={P.x} y={830} text="C_4H_6 + 2Cl_2 → C_4H_6Cl_4:  C 4, H 6, Cl 4 ✓" size={34} color={INK} anchor="middle" at={KC.gives} plain />
			<AnsQ3 fill={KC.name + 16} />
			<Checks7 ticks={{0: [KC.needs], 1: [-100], 2: [KC.check]}} />
			{void KC.both}{void KC.one}{void KC.back}
		</Overlay>
	);
};

// ---------- 4d. The classic mistake ----------
const KD = cues(sc('q3-mistake'), {mistake: 'classic mistake', ene: 'but-one-ene', right: 'right place', only: 'only one', giving: 'giving one', two: 'just two'});
const DCB = cmol([{l: 'H', u: 'H', d: 'Cl'}, {u: 'H', d: 'Cl'}, {u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'H'}]);
export const SceneQ3Mistake: React.FC = () => (
	<Overlay>
		<Badge text="Working backwards" at={-100} />
		<QStrip lines={Q3} under={[{line: 0, phrase: 'in the dark', at: -100}, {line: 0, phrase: 'excess chlorine', at: -100}, {line: 1, phrase: '1,1,2,2-tetrachlorobutane', at: -100}, {line: 2, phrase: 'Identify X', at: -100}]} />
		<Crossed x={140} y={400} text="X = but-1-ene" at={0} cross={KD.mistake + 12} note="C=C adds once: only 2 Cl" size={44} />
		<g opacity={0.75}><Mol2D m={DCB} x={1260} y={560} s={0.8} at={KD.giving} /></g>
		<Sx x={1260} y={700} text="1,2-dichlorobutane" size={32} color="#8f897f" anchor="middle" weight={700} at={KD.giving + 10} />
		<Tag x={1260} y={730} text="only 2 Cl, not 4" at={KD.two} size={30} color={CHLOR} fill="#dcefdc" anchor="middle" />
		<AnsQ3 fill={-100} />
		<Checks7 ticks={{0: [-100], 1: [-100], 2: [-100]}} />
		{void KD.ene}{void KD.right}{void KD.only}
	</Overlay>
);
