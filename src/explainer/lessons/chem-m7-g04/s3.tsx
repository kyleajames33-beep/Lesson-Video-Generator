// M7 G04 scenes 4a to 4d: question 3 (X, PMMA: the backbone is C–C, the ester is a side group, so addition; unstamp
// to the monomer. Y, PLA: an ester link in the backbone and the stated route, so condensation; add the water back to
// lactic acid; "X has an ester group, so a polyester" crossed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {Overlay, PauseHold, Sx} from '../chem-m6-c01/parts';
import {AnswerChip, Crossed, QCardX, Tag, qLineY} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {RingAt} from '../chem-m7-c06/parts';
import {AnsBox, Badge, QStrip} from '../chem-m7-g01/board';
import {EndTag, Insert, Ring2, Row, T, WATER, rowGeo} from '../chem-m7-c15/parts';
import type {Tok} from '../chem-m7-c15/parts';
import {Heading, hold, sc} from './common';
import {AM, Back3, GREY, INK, NAVY, RED, TEAL, XUnit, xGeo} from './board';

const u = (line: number, phrase: string, at: number) => ({line, phrase, at, color: AM});
export const Q3 = ['The repeat units of two polymers, X and Y, are shown. Y was made directly from a hydroxy acid,', 'with water released.', '(a) Classify each polymer as an addition polymer or a condensation polymer. Justify each', 'classification.', '(b) Draw the monomer of each polymer.'];
const YT: Tok[] = [T.O, {l: 'C', up: 'H', dn: 'CH₃', w: 60}, T.CO];
const LAC: Tok[] = [{l: 'H', c: WATER}, T.O, {l: 'C', up: 'H', dn: 'CH₃', w: 60}, T.CO, {l: 'O', c: WATER}, {l: 'H', c: WATER}];
const AnsQ3: React.FC<{x1?: number; x2?: number; y1?: number; y2?: number}> = ({x1 = 1e6, x2 = 1e6, y1 = 1e6, y2 = 1e6}) => (
	<>
		<AnsBox x={140} y={830} w={1640} label="X" at={-100} parts={[{t: 'addition: all-carbon backbone; ester only in a side group', at: x1, lit: true}, {t: '   monomer CH₂=C(CH₃)COOCH₃', at: x2}]} size={24} />
		<AnsBox x={140} y={910} w={1640} label="Y" at={-100} parts={[{t: 'condensation (polyester): ester link in the backbone; stated route releases water', at: y1, lit: true}, {t: '   monomer CH₃CH(OH)COOH', at: y2}]} size={24} />
	</>
);
const UQ = (a: number, j: number, rel: number, dm: number) => [u(2, 'Classify each polymer', a), u(2, 'Justify each', j), u(1, 'with water released', rel), u(4, 'Draw the monomer of each polymer', dm)];

// ---------- 4a. Question 3 ----------
const KA = cues(sc('q3-question'), {q: 'Question three', rep: 'The repeat units', y: 'Y was made', cls: 'Classify each', pause: 'Pause here'});
export const SceneQ3Question: React.FC = () => {
	const h = hold('q3-question');
	const gaps = [0, 250];
	const y = qLineY(175, 30, gaps, 1) + 95;
	const yg = rowGeo(YT, 1180, y, 0.8, 'middle', 50, 50);
	return (
		<>
			<Heading text="Question 3" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q3} at={KA.rep} y={175} size={30} gaps={gaps} />
				<Sx x={420} y={y + 10} text="X" size={40} color={INK} weight={800} at={KA.rep + 10} />
				<XUnit x={640} y={y} s={0.8} at={KA.rep + 10} />
				<Sx x={960} y={y + 10} text="Y" size={40} color={INK} weight={800} at={KA.rep + 16} />
				<Row toks={YT} x={yg.x0} y={y} s={0.8} at={KA.rep + 16} contL={50} contR={50} br={{a: 0, b: 2, at: -100}} />
				<PauseHold h={h} at={KA.pause} x={140} y={900} cx={1650} cy={880} />
				<Back3 hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 4b. X ----------
const KB = cues(sc('q3-x'), {x: 'Start with', ester: 'It has an', look: 'Look along', carbons: 'carbons', hangs: 'The ester group hangs', so: 'So X is', get: 'To get', no: 'no hydrogens', perspex: 'Perspex'});
export const SceneQ3X: React.FC = () => {
	const f = useCurrentFrame();
	const X = 760, Y = 520, S = 1.0;
	const g = xGeo(X, Y, S);
	const trX = [g.L - 60 * S, g.R + 60 * S];
	const tp = prog(f, KB.carbons - 10, 30);
	return (
		<Overlay>
			<Badge text="Addition or condensation?" at={6} />
			<QStrip lines={Q3} under={[u(2, 'Classify each polymer', KB.so), u(2, 'Justify each', KB.so + 10), u(4, 'Draw the monomer of each polymer', KB.perspex - 10)]} />
			<XUnit x={X} y={Y} s={S} at={-100} grey={KB.carbons + 10} unstamp={KB.no - 20} ghostH={KB.no} />
			<RingAt c={[g.cx[1] + 40, Y + 140]} rx={180} ry={70} at={KB.ester} color={GREY} />
			<Tag x={1180} y={660} text="ester group: where is it?" at={KB.ester + 6} out={KB.carbons} size={28} />
			{f >= KB.carbons - 10 ? <line x1={trX[0]} y1={Y + 40} x2={trX[0] + (trX[1] - trX[0]) * tp} y2={Y + 40} stroke="#8fc3ea" strokeWidth={8} strokeLinecap="round" opacity={vis(f, KB.carbons - 10, KB.get)} /> : null}
			<Tag x={1180} y={420} text="backbone: C–C only; the ester is a side group" at={KB.carbons + 10} out={KB.get} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={1180} y={420} text="no extra H" at={KB.no + 20} size={30} color={RED} fill="#f9e1dc" />
			<Sx x={1180} y={530} text="methyl 2-methylpropenoate" size={26} color={GREY} weight={700} at={KB.perspex - 10} />
			<Tag x={1180} y={560} text="Perspex (PMMA) monomer" at={KB.perspex} size={28} color={TEAL} fill="#dff2ef" />
			<AnsQ3 x1={KB.so + 10} x2={KB.perspex} />
			<Back3 lit={{1: KB.so}} />
			{void KB.x}{void KB.look}{void KB.hangs}
		</Overlay>
	);
};

// ---------- 4c. Y ----------
const KC = cues(sc('q3-y'), {y: 'Now Y', back: 'Its backbone', link: "That's an ester", rel: 'released', add: 'Add the water', gives: 'That gives', other: 'other', lactic: 'lactic acid', end: ['end', 2]});
export const SceneQ3Y: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 530, S = 1.0;
	const g = rowGeo(YT, 860, Y, S, 'middle', 60, 60);
	const sw = KC.gives - 6;
	const lg = rowGeo(LAC, 860, Y, S, 'middle');
	const loop = `M${g.R + 60 * S},${Y - 110} C${g.R + 60 * S},${Y - 175} ${g.L - 60 * S},${Y - 175} ${g.L - 60 * S},${Y - 110}`;
	const mid = (a: number, b: number): V2 => [(lg.cx[a] + lg.cx[b]) / 2, Y];
	return (
		<Overlay>
			<Badge text="Addition or condensation?" at={-100} />
			<QStrip lines={Q3} under={UQ(-100, -100, KC.rel, KC.other)} />
			<AnswerChip x={1500} y={390} text="X: addition" at={-100} size={28} o={0.6} />
			<g opacity={1 - prog(f, sw, 10)}>
				<Row toks={YT} x={g.x0} y={Y} s={S} at={-100} contL={60} contR={60} br={{a: 0, b: 2, at: -100, out: KC.add}} glow={{0: [KC.back, KC.add, '#d5e8f6'], 1: [KC.back + 8, KC.add, '#d5e8f6'], 2: [KC.back + 16, KC.add, '#d5e8f6']}} />
				{f >= KC.link ? <DrawPath d={loop} at={KC.link} dur={20} color={RED} width={4} dash="10 8" /> : null}
				<Ring2 c={[g.L - 20 * S, Y]} rx={60} ry={52} at={KC.link} />
				<Ring2 c={[g.R + 20 * S, Y - 20]} rx={60} ry={80} at={KC.link + 8} />
				<Insert p={[g.R + 45 * S, Y]} cP={[g.R + 40, Y + 70]} oP={[g.L - 40, Y + 70]} at={KC.add} />
			</g>
			<Tag x={860} y={690} text="ester link in the backbone" at={KC.link + 10} out={KC.gives} size={28} color={RED} fill="#f9e1dc" anchor="middle" />
			<Row toks={LAC} x={lg.x0} y={Y} s={S} at={sw - 2} />
			<Sx x={860} y={710} text="2-hydroxypropanoic acid" size={26} color={GREY} anchor="middle" weight={700} at={KC.lactic - 10} />
			<Tag x={860} y={730} text="lactic acid" at={KC.lactic} size={30} color={TEAL} fill="#dff2ef" anchor="middle" />
			<EndTag c={mid(0, 1)} rx={58} ry={40} at={KC.end - 10} />
			<EndTag c={[lg.cx[4], Y - 20]} rx={110} ry={80} at={KC.end - 4} />
			<Tag x={1300} y={560} text="one molecule, two reactive ends" at={KC.end} size={28} color={AM} fill="#fbedd0" />
			<AnsQ3 x1={-100} x2={-100} y1={KC.rel + 10} y2={KC.lactic} />
			<Back3 lit={{2: KC.link}} />
			{void KC.y}{void dimAt}
		</Overlay>
	);
};

// ---------- 4d. The classic mistake ----------
const KD = cues(sc('q3-mistake'), {classic: 'classic mistake', contains: 'contains', where: 'Where the', look: 'Look for'});
export const SceneQ3Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const g = xGeo(1450, 520, 0.8);
	return (
		<Overlay>
			<Badge text="Addition or condensation?" at={-100} />
			<QStrip lines={Q3} />
			<Crossed x={140} y={420} text="X has an ester group, so X is a polyester." at={KD.classic} cross={KD.contains} note="side group ≠ backbone link" size={36} />
			<XUnit x={1450} y={520} s={0.8} at={KD.where - 10} grey={KD.where} />
			{f >= KD.where ? <line x1={g.L - 48} y1={552} x2={g.R + 48} y2={552} stroke="#8fc3ea" strokeWidth={7} strokeLinecap="round" opacity={prog(f, KD.where + 4, 12)} /> : null}
			<AnsQ3 x1={-100} x2={-100} y1={-100} y2={-100} />
			<Back3 ticks={{1: [-100], 2: [KD.look]}} />
		</Overlay>
	);
};
