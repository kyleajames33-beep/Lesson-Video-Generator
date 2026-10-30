// M7 G04 scenes 3a to 3d: question 2 (a two-unit PTT section: find the ester links and the repeat unit; add the water
// back at every link; the one-cut "monomer" crossed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, PauseHold, Sx, smooth} from '../chem-m6-c01/parts';
import {Crossed, QCardX, Tag, qLineY} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {AnsBox, Badge, QStrip} from '../chem-m7-g01/board';
import {CCount, EndTag, Insert, OXY_INK, Ring2, Row, T, Tracer, WATER, rep, rowGeo} from '../chem-m7-c15/parts';
import type {Tok} from '../chem-m7-c15/parts';
import {Heading, hold, sc} from './common';
import {AM, Back3, INK, NAVY, RED, TEAL} from './board';

const u = (line: number, phrase: string, at: number) => ({line, phrase, at, color: AM});
export const Q2 = ['A section of a polymer used in carpet fibres is shown.', '(a) Identify the type of polymer.', '(b) Draw and name the monomers used to make this polymer.'];
const UNIT: Tok[] = [T.O, ...rep(T.CH2, 3), T.O, T.CO, T.R, T.CO];
const SEC: Tok[] = [...UNIT, ...UNIT];
const LINKS = [4, 7, 12];
const isO = (i: number) => SEC[i].l === 'O' || !!SEC[i].up;
const AnsQ2: React.FC<{a?: number; b?: number; b2?: number}> = ({a = 1e6, b = 1e6, b2 = 1e6}) => (
	<>
		<AnsBox x={140} y={880} w={560} label="(a)" at={-100} parts={[{t: 'polyester (condensation)', at: a, lit: true}]} size={24} />
		<AnsBox x={730} y={880} w={1050} label="(b)" at={-100} parts={[{t: 'propane-1,3-diol', at: b, lit: true}, {t: ' and ', at: b2}, {t: 'benzene-1,4-dicarboxylic acid', at: b2, lit: true}]} size={24} />
	</>
);

// ---------- 3a. Question 2 ----------
const KA = cues(sc('q2-question'), {q: 'Question two', sec: 'A section', id: 'Identify the', pause: 'Pause here'});
export const SceneQ2Question: React.FC = () => {
	const h = hold('q2-question');
	const gaps = [170];
	const y = qLineY(175, 30, gaps, 0) + 100;
	return (
		<>
			<Heading text="Question 2" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q2} at={KA.sec} y={175} size={30} gaps={gaps} />
				<Row toks={SEC} x={960} y={y} s={0.78} anchor="middle" at={KA.sec + 10} stagger={1} contL={50} contR={50} tokC={() => INK} />
				<AnsBox x={140} y={650} w={560} label="(a)" at={KA.id + 10} />
				<AnsBox x={730} y={650} w={1050} label="(b)" at={KA.id + 16} />
				<PauseHold h={h} at={KA.pause} x={140} y={860} cx={1650} cy={850} />
				<Back3 hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 3b. Links and the repeat unit ----------
const KB = cues(sc('q2-links'), {first: 'First, find', oxy: 'oxygens', not: 'not all carbon', each: 'Each oxygen', ester: 'ester link', so: "So it's", pattern: 'The pattern', rep: 'repeat unit', sec: 'A section can'});
export const SceneQ2Links: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 480, S = 0.82;
	const g = rowGeo(SEC, 960, Y, S, 'middle', 50, 50);
	const trAt = SEC.map((_, i) => KB.oxy - 10 + i * 5);
	const col = (i: number) => (isO(i) && f >= trAt[i] ? (SEC[i].l === 'O' ? OXY_INK : undefined) : INK);
	return (
		<Overlay>
			<Badge text="Find the monomers" at={6} />
			<QStrip lines={Q2} under={[u(0, 'A section of a polymer', KB.oxy), u(1, 'Identify the type of polymer', KB.so)]} />
			<Row toks={SEC} x={g.x0} y={Y} s={S} at={-100} contL={50} contR={50} tokC={col} tokO={i => (i >= 8 ? 1 - 0.6 * prog(f, KB.rep + 10, 12) : 1)} br={{a: 0, b: 7, at: KB.rep + 4, dash: true}} />
			<Tracer g={g} idx={SEC.map((_, i) => i)} at={trAt} out={KB.ester + 10} dy={92} />
			<Tag x={960} y={640} text="not all carbon" at={KB.not} out={KB.ester} size={28} anchor="middle" />
			{LINKS.map((k, n) => <Ring2 key={k} c={[(g.cx[k] + g.cx[k + 1]) / 2, Y - 18]} rx={64} ry={64} at={KB.ester + n * 10} label={String(n + 1)} o={k === 12 ? 1 - 0.6 * prog(f, KB.rep + 10, 12) : 1} />)}
			<Tag x={960} y={680} text="ester link: –COO–" at={KB.ester + 30} out={KB.rep} size={30} color={RED} fill="#f9e1dc" anchor="middle" />
			<Tag x={960} y={680} text="repeat: one ring, one three-carbon chain" at={KB.rep + 10} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
			<AnsQ2 a={KB.so + 20} />
			<Back3 lit={{2: KB.so}} />
			{void KB.first}{void KB.each}{void KB.pattern}{void KB.sec}
		</Overlay>
	);
};

// ---------- 3c. Add the water back ----------
const DIOL: Tok[] = [{l: 'H', c: WATER}, T.O, ...rep(T.CH2, 3), T.O, {l: 'H', c: WATER}];
const TPA: Tok[] = [{l: 'H', c: WATER}, {l: 'O', c: WATER}, T.CO, T.R, T.CO, {l: 'O', c: WATER}, {l: 'H', c: WATER}];
const KC = cues(sc('q2-water'), {now: 'Now add', cut: 'Cut between', put: 'Put O H', oxy: 'oxygen side', gives: 'That gives', prop: 'propane one', ring: 'And the ring', acid: 'acid,', pet: 'the same acid', check: 'Check', both: 'both ends'});
export const SceneQ2Water: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 480, S = 0.82;
	const g = rowGeo(SEC, 960, Y, S, 'middle', 50, 50);
	const split = KC.oxy + 20;
	const d = smooth(prog(f, split, 24));
	const dg = rowGeo(DIOL, 160, Y + 160 * d, 0.85), ag = rowGeo(TPA, 1000, Y + 160 * d, 0.85);
	const mid = (gg: ReturnType<typeof rowGeo>, a: number, b: number): V2 => [(gg.cx[a] + gg.cx[b]) / 2, gg.y];
	return (
		<Overlay>
			<Badge text="Find the monomers" at={-100} />
			<QStrip lines={Q2} under={[u(0, 'A section of a polymer', -100), u(1, 'Identify the type of polymer', -100), u(2, 'Draw and name the monomers', KC.oxy)]} />
			<g opacity={1 - prog(f, split, 10)}>
				<Row toks={SEC} x={g.x0} y={Y} s={S} at={-100} contL={50} contR={50} tokO={i => (i >= 8 ? 0.4 : 1)} />
				{LINKS.map((k, n) => <Insert key={k} p={g.mid(k)} cP={[g.cx[k + (SEC[k].up ? 0 : 1)], Y + 64]} oP={[g.cx[k + (SEC[k].up ? 1 : 0)], Y + 112]} at={KC.now + n * 14} />)}
			</g>
			<g opacity={prog(f, split - 2, 10)}>
				<Row toks={DIOL} x={160} y={Y + 160 * d} s={0.85} at={-100} />
				<Row toks={TPA} x={1000} y={Y + 160 * d} s={0.85} at={-100} />
			</g>
			<CCount pts={dg.cx.slice(2, 5).map(x => [x, dg.y] as V2)} at={KC.prop} step={8} dy={-60} />
			<Tag x={dg.cx[3]} y={740} text="propane-1,3-diol" at={KC.prop} size={28} color={INK} fill="#f1efea" anchor="middle" />
			<Tag x={ag.cx[3]} y={740} text="benzene-1,4-dicarboxylic acid (terephthalic acid)" at={KC.acid} size={24} color={INK} fill="#f1efea" anchor="middle" />
			<Tag x={ag.cx[3]} y={300} text="c15: PET's acid" at={KC.pet} out={KC.check} size={24} />
			{[[dg, 0, 1], [dg, 5, 6], [ag, 0, 1], [ag, 5, 6]].map(([gg, a, b], i) => <EndTag key={i} c={mid(gg as typeof dg, a as number, b as number)} rx={56} ry={40} at={KC.both + i * 5} />)}
			<Tag x={960} y={800} text="two reactive ends each ✓" at={KC.both + 20} size={28} color={AM} fill="#fbedd0" anchor="middle" />
			<AnsQ2 a={-100} b={KC.prop + 20} b2={KC.acid + 10} />
			<Back3 lit={{2: -100}} ticks={{2: [KC.both + 10]}} />
			{void KC.cut}{void KC.put}{void KC.gives}{void KC.ring}{void TEAL}
		</Overlay>
	);
};

// ---------- 3d. The classic mistake ----------
const HALF: Tok[] = [T.H, T.O, ...rep(T.CH2, 3), T.O, T.CO, T.R, T.CO, T.O, T.H];
const KD = cues(sc('q2-mistake'), {classic: 'classic mistake', inside: 'inside', every: 'Every link'});
export const SceneQ2Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const g = rowGeo(HALF, 960, 640, 0.8, 'middle');
	return (
		<Overlay>
			<Badge text="Find the monomers" at={-100} />
			<QStrip lines={Q2} under={[u(0, 'A section of a polymer', -100), u(1, 'Identify the type of polymer', -100), u(2, 'Draw and name the monomers', -100)]} />
			<Crossed x={140} y={380} text="HO–CH₂CH₂CH₂–O–CO–C₆H₄–COOH" at={KD.classic} cross={KD.inside} note="cut every ester link" size={40} />
			<Row toks={HALF} x={g.x0} y={640} s={0.8} at={KD.classic + 10} o={dimAt(f, KD.every + 30, 0.6)} />
			<Ring2 c={[(g.cx[5] + g.cx[6]) / 2, 622]} rx={64} ry={64} at={KD.inside - 10} />
			<Tag x={(g.cx[5] + g.cx[6]) / 2} y={740} text="still an ester link inside" at={KD.inside} size={26} color={RED} fill="#f9e1dc" anchor="middle" />
			<AnsQ2 a={-100} b={-100} b2={-100} />
			<Back3 ticks={{2: [-100]}} />
			{void vis}{void Sx}
		</Overlay>
	);
};
