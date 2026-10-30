// M7 G04 scenes 5a to 7: question 4 (nylon 6,6 against polyester P: same carbon skeleton, one difference (N–H against
// O); hydrogen bonds between chains against dipole–dipole and dispersion; "amide bonds are stronger" crossed), the
// decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {KeyNotesBoard, Overlay, PauseHold, Sx} from '../chem-m6-c01/parts';
import {Brace, Crossed, QCardX, Tag, qLineY} from '../chem-m7-c01/molecules';
import {dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate} from '../chem-m7-c06/parts';
import {AnsBox, Badge, QStrip} from '../chem-m7-g01/board';
import {INDIGO, PolyBox, Ring2, Row, T, VIOLET, rep, rowGeo} from '../chem-m7-c15/parts';
import type {Tok} from '../chem-m7-c15/parts';
import {Heading, OBJ, ROPE, hold, sc} from './common';
import {AM, Back3, INK, INK_SOFT, NAVY, RED, TEAL} from './board';

const u = (line: number, phrase: string, at: number) => ({line, phrase, at, color: AM});
export const Q4 = ['Nylon 6,6 and polyester P have the repeat units shown.', 'Nylon 6,6 melts at about 265 °C. Polyester P melts at about 60 °C.', 'Explain the difference in the melting points of these two polymers, with reference to their structures.'];
const NH: Tok = {...T.NH, w: 34}, OW: Tok = {...T.O, w: 34};
const NYL: Tok[] = [NH, ...rep(T.CH2, 6), NH, T.CO, ...rep(T.CH2, 4), T.CO];
const PES: Tok[] = [OW, ...rep(T.CH2, 6), OW, T.CO, ...rep(T.CH2, 4), T.CO];
const U4 = (m: number, s: number, ex: number) => [u(1, 'melts at about 265 °C', m), u(1, 'melts at about 60 °C', m + 8), u(2, 'with reference to their structures', s), u(2, 'Explain the difference', ex)];
const AnsQ4: React.FC<{a?: number; b?: number}> = ({a = 1e6, b = 1e6}) => (
	<>
		<AnsBox x={140} y={840} w={1640} label="" at={-100} parts={[{t: 'Nylon: N–H···O=C hydrogen bonds between chains, plus dispersion.', at: a, lit: true}]} size={24} />
		<AnsBox x={140} y={915} w={1640} label="" at={-100} parts={[{t: 'P: no N–H or O–H, so only dipole–dipole and dispersion. Same skeleton: hydrogen bonding is an important reason.', at: b}]} size={22} />
	</>
);

// ---------- 5a. Question 4 ----------
const KA = cues(sc('q4-question'), {q: 'Question four', nylon: 'Nylon six', rep: 'Their repeat', exp: 'Explain the', pause: 'Pause here'});
export const SceneQ4Question: React.FC = () => {
	const h = hold('q4-question');
	const gaps = [230];
	const y0 = qLineY(175, 30, gaps, 0) + 75;
	return (
		<>
			<Heading text="Question 4" at={KA.q} size={52} />
			<Overlay>
				<QCardX lines={Q4} at={KA.nylon} y={175} size={30} gaps={gaps} w={1640} />
				<Row toks={NYL} x={200} y={y0} s={0.62} at={KA.rep} stagger={1} contL={50} contR={50} br={{a: 0, b: 13, at: -100}} />
				<Row toks={PES} x={200} y={y0 + 130} s={0.62} at={KA.rep + 8} stagger={1} contL={50} contR={50} br={{a: 0, b: 13, at: -100}} />
				<Sx x={1110} y={y0 + 12} text="nylon 6,6" size={28} color={INK} weight={800} at={KA.rep} />
				<Sx x={1110} y={y0 + 142} text="polyester P" size={28} color={INK} weight={800} at={KA.rep + 8} />
				<Plate p={ROPE} cx={1600} top={y0 - 40} h={130} at={KA.nylon + 10} />
				<AnsBox x={140} y={740} w={1640} label="answer" at={KA.exp + 10} />
				<PauseHold h={h} at={KA.pause} x={140} y={900} cx={1650} cy={880} />
				<Back3 hold={h} />
			</Overlay>
		</>
	);
};

// ---------- 5b. Line them up ----------
const KB = cues(sc('q4-compare'), {cmp: 'Compare like', line: 'Line up', six: 'six C H', four: 'four C H', two: 'two C double', skel: 'skeleton', one: 'one difference', oxy: 'oxygen'});
export const SceneQ4Compare: React.FC = () => {
	const f = useCurrentFrame();
	const S = 0.82, Y1 = 430, Y2 = 640;
	const g1 = rowGeo(NYL, 960, Y1, S, 'middle', 50, 50), g2 = rowGeo(PES, 960, Y2, S, 'middle', 50, 50);
	const grp: [number[], number, string][] = [[[1, 2, 3, 4, 5, 6], KB.six, '(CH₂)₆ = (CH₂)₆'], [[9, 10, 11, 12], KB.four, '(CH₂)₄ = (CH₂)₄'], [[8, 13], KB.two, 'C=O × 2 = C=O × 2']];
	const glow: Record<number, [number, number?, string?]> = {};
	grp.forEach(([ids, at]) => ids.forEach(i => { glow[i] = [at, KB.one, '#d5e8f6']; }));
	return (
		<Overlay>
			<Badge text="Property from structure" at={6} />
			<QStrip lines={Q4} under={U4(-100, KB.skel, 1e6)} />
			<Row toks={NYL} x={g1.x0} y={Y1} s={S} at={-100} contL={50} contR={50} br={{a: 0, b: 13, at: -100}} glow={glow} />
			<Row toks={PES} x={g2.x0} y={Y2} s={S} at={-100} contL={50} contR={50} br={{a: 0, b: 13, at: -100}} glow={glow} />
			<Sx x={96} y={Y1 + 10} text="nylon" size={26} color={INK_SOFT} weight={800} at={-100} />
			<Sx x={96} y={Y2 + 10} text="P" size={26} color={INK_SOFT} weight={800} at={-100} />
			{grp.map(([ids, at, t], k) => <Brace key={k} x1={g2.cx[ids[0]] - 30} x2={g2.cx[ids[ids.length - 1]] + 30} y={Y2 + 60} text={t} at={at} out={KB.one} size={24} />)}
			<Tag x={960} y={790} text="same carbon skeleton: a fair comparison of the links" at={KB.skel} out={KB.one} size={28} color={NAVY} fill="#e7edf8" anchor="middle" />
			{[0, 7].map(i => <Ring2 key={'n' + i} c={[g1.cx[i], Y1 + 20]} rx={36} ry={54} at={KB.oxy} color={INDIGO} />)}
			{[0, 7].map(i => <Ring2 key={'o' + i} c={[g2.cx[i], Y2]} rx={34} ry={34} at={KB.oxy + 6} color={RED} />)}
			{[0, 7].map(i => <Sx key={'q' + i} x={g1.cx[i]} y={(Y1 + Y2) / 2 + 30} text="≠" size={44} color={RED} anchor="middle" weight={800} at={KB.oxy + 12} />)}
			<Tag x={960} y={790} text="one difference: N–H against O" at={KB.oxy + 10} size={30} color={RED} fill="#f9e1dc" anchor="middle" />
			<AnsQ4 />
			<Back3 />
			{void KB.cmp}{void KB.line}{void TEAL}
		</Overlay>
	);
};

// ---------- 5c. Forces between chains ----------
const KC = cues(sc('q4-forces'), {key: 'That N H', hb: 'hydrogen bond', p: 'Polyester P has', disp: 'dispersion', melt: 'To melt', slide: 'slide past', over: 'overcome'});
export const SceneQ4Forces: React.FC = () => {
	const f = useCurrentFrame();
	const slideP = vis(f, KC.slide - 10, KC.over + 20, 20), slideN = vis(f, KC.slide + 30, KC.over + 20, 20);
	return (
		<Overlay>
			<Badge text="Property from structure" at={-100} />
			<QStrip lines={Q4} under={U4(KC.melt, -100, KC.over)} />
			<Row toks={NYL} x={140} y={330} s={0.42} at={-100} o={0.5} />
			<Row toks={PES} x={1000} y={330} s={0.42} at={-100} o={0.5} />
			<PolyBox x={140} y={380} w={760} h={380} at={0} c={{sites: 1, hb: prog(f, KC.hb, 30), disp: 0.5, slide: slideN, heat: Math.max(vis(f, KC.slide - 10, KC.over + 20, 16) * 0.35, slideN)}} n={5} per={140} />
			<PolyBox x={1000} y={380} w={760} h={380} at={0} c={{co: 1, dip: prog(f, KC.disp, 20), disp: prog(f, KC.disp, 20), ghost: vis(f, KC.p, KC.melt), slide: slideP, heat: 0.35 * slideP}} n={5} per={140} />
			<Tag x={140} y={780} text="c15: N–H···O=C between chains" at={KC.hb + 10} out={KC.melt} size={24} color={VIOLET} fill="#e6ddf5" />
			<Tag x={1000} y={780} text="no H on O or N: no hydrogen bonds" at={KC.p + 20} out={KC.over} size={24} />
			<Tag x={960} y={790} text="P slides at a low glow; nylon needs much more heat" at={KC.slide + 20} out={KC.over + 20} size={22} anchor="middle" />
			<AnsQ4 a={KC.over} b={KC.over + 30} />
			<Back3 />
		</Overlay>
	);
};

// ---------- 5d. The classic mistake ----------
const KD = cues(sc('q4-mistake'), {classic: 'classic mistake', either: 'either', only: 'It only'});
export const SceneQ4Mistake: React.FC = () => (
	<Overlay>
		<Badge text="Property from structure" at={-100} />
		<QStrip lines={Q4} under={U4(-100, -100, -100)} />
		<Crossed x={140} y={380} text="Amide bonds are stronger than ester bonds, so they take more energy to break when it melts." at={KD.classic} cross={KD.either} note="melting separates chains; the links stay" size={30} />
		<PolyBox x={560} y={560} w={800} h={200} at={KD.either} c={{sites: 1, hb: 1, disp: 0.5}} n={2} per={120} pulse={{strand: 0, at: KD.either + 10}} />
		<AnsQ4 a={-100} b={-100} />
		<Back3 />
		{void KD.only}
	</Overlay>
);

// ---------- 6. Decision board ----------
const KE = cues(sc('decision-board'), {so: "So here's", first: 'find the backbone', allc: 'all carbon', links: 'links', prop: 'for a property', chains: 'chains'});
const ROWS: [string, string, string][] = [['a repeat unit or section like these', 'find the backbone, through the brackets', 'all'], ['all C–C backbone, from an alkene', 'addition: open the C=C to draw; restore it to recover, add no H', 'Q1, Q3 X'], ['ester or amide links in the backbone, from an acid route', 'condensation: remove the water to draw; add it back at every link', 'Q2, Q3 Y'], ['a property', 'compare the forces between chains, then the use', 'Q4; c14']];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const at = [KE.first, KE.allc, KE.links, KE.prop];
	return (
		<Overlay>
			<Sx x={96} y={150} text="Start every polymer question here" size={54} color={INK} hand at={KE.so} />
			<Sx x={140} y={240} text="What you see" size={30} color={INK_SOFT} weight={800} at={KE.so + 10} />
			<Sx x={820} y={240} text="What you do" size={30} color={INK_SOFT} weight={800} at={KE.so + 10} />
			{ROWS.map((r, i) => {
				const y = 320 + i * 120;
				const o = vis(f, at[i]) * (at[i + 1] ? dimAt(f, at[i + 1], 0.5) : 1);
				return (
					<g key={i} opacity={o}>
						<rect x={110} y={y - 50} width={1700} height={96} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
						<Sx x={140} y={y + 8} text={r[0]} size={24} color={INK} weight={700} at={-1000} />
						<Sx x={820} y={y + 8} text={r[1]} size={22} color={i === 1 ? NAVY : i === 2 ? RED : TEAL} weight={800} at={-1000} />
						<rect x={1650} y={y - 22} width={140} height={36} rx={18} fill={TEAL} />
						<Sx x={1720} y={y + 5} text={r[2]} size={18} color="#fffdf8" anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			<Sx x={140} y={830} text="Addition: nothing lost. Condensation: a small molecule lost (water, for these acid routes)." size={34} color={TEAL} hand at={KE.links + 30} />
			<Plate p={OBJ} cx={1640} top={860} h={130} at={KE.chains} />
			<Back3 ticks={{0: [KE.first], 1: [KE.allc], 2: [KE.links]}} />
		</Overlay>
	);
};

// ---------- 7. Key notes ----------
const NOTES = [
	'For the alkene and acid examples practised here, start by finding the backbone (the atoms through the brackets). All C–C, from an alkene: addition. Ester (–COO–) or amide (–CONH–) links in the backbone: condensation, and when the question states the reaction, use it. Side groups do not count.',
	'Addition, drawing: only the two C=C carbons join the backbone; everything else hangs off. A section of three units has three side groups and six backbone carbons. Recovering: restore the C=C; add no H.',
	'Condensation, recovering: find every link; add water back at each (OH to the C=O side, H to the O or N side). Each monomer has a reactive group at both ends (one molecule can carry both, as lactic acid does).',
	'Properties: compare what holds the chains together. N–H on the chains: hydrogen bonds to C=O on the next chain, much higher melting point. Melting overcomes forces between chains; it does not break the links in the chain. In an answer, name the property, give its structural reason and link it to the use.',
];
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard notes={NOTES} size={29} aidTop={830} aids={['Find the backbone first.', 'Addition: nothing lost. Condensation: a small molecule lost (water, for these acid routes).']} tag="polymer questions: draw, recover, classify, explain" />
);
