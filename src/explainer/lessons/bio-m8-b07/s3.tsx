// B8-07 scenes 10a to 12: question 1 (two trends, decades apart) as the full worded card with its graph and the
// countdown; its brief feedback (lines brighten, the lag bracket, framed answer, crossed slip); question 2 (a named UV
// case) with the countdown; its feedback (the kink, the melanoma plate, framed "risk, not certainty", crossed slip);
// the decision rule and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {SlimStrand} from '../bio-m6-b01/parts';
import {NotesBoard} from '../bio-m5-g01/board';
import {
	AMBER, AMBER_INK, AnsBox, BLUE, BlankLines, Box, Bracket, CARD, Chip, EDGE, Framed, GTag, HscTag, INK, INK_SOFT, Mistake, Pause, Pic, PicH, PicPair, Q1Graph, Q1Key, QPart, RiskDial, Svg, Sx, T, TEAL, Title,
	Wisps, marksCheck, prog, q1x, smooth, vis, PreRing,
} from './parts';
import type {G2, QMark} from './parts';
import {PL} from './assets';
import {K, Q1_DEM, Q1_STEM, Q2_DEM, Q2_STEM, hold} from './common';

const ON = -1000;

// ---------- 10a. question 1 ----------
const KA = K('attempt', {pause: 'Pause here'});
const G_FULL: G2 = {x: 220, y: 360, w: 860, h: 440};
export const SceneAttempt: React.FC = () => (
	<Svg>
		<Title text="Question 1: two trends" />
		<HscTag />
		<Box x={96} y={150} w={1728} h={890} />
		<QPart blocks={Q1_STEM} x={126} y={210} w={1660} size={38} />
		<Q1Graph g={G_FULL} size={28} />
		<Q1Key x={1250} y={330} size={28} />
		<GTag x={1250} y={450} text="illustrative teaching data, not measured rates" size={28} />
		<QPart blocks={Q1_DEM} x={1250} y={570} w={540} size={36} />
		<Pause h={hold('attempt')} at={KA.pause} tx={1250} ty={900} cx={1730} cy={940} r={46} />
		<PreRing at={KA.pause} start={hold('attempt').startFrame} x={1730} y={940} r={46} />
	</Svg>
);

// ---------- 10b. feedback one ----------
const KB = K('feedback-one', {fell: 'Smoking fell', lung: 'lung cancer', rising: 'kept rising', early: 'early 1980s', then: 'then fell', decades: 'decades behind', latency: 'latency', mut: 'Mutations from', building: 'building up', cancers: 'cancers kept', even: 'even while', classic: 'classic mistake', peaks: 'peaks'});
const M_B: QMark[] = marksCheck([Q1_STEM, Q1_DEM], [{phrase: 'the percentage who smoked', at: KB.fell + 10}, {phrase: 'rate of new lung cancer cases', at: KB.rising}, {phrase: 'Explain this difference in timing', at: KB.latency}]);
const G_COL: G2 = {x: 130, y: 362, w: 600, h: 270};
export const SceneFeedbackOne: React.FC = () => (
	<Svg>
		<Title text="Feedback: a lag of decades" />
		<HscTag />
		<Box x={40} y={150} w={860} h={890} />
		<QPart blocks={Q1_STEM} marks={M_B} x={62} y={196} w={816} size={27} />
		<Q1Graph g={G_COL} size={26} hiS={KB.fell} hiL={KB.rising} dimAt={KB.fell} />
		<Bracket xa={q1x(G_COL, 1945)} xb={q1x(G_COL, 1982)} y={G_COL.y + 16} at={KB.then} label="about 35 years" size={34} />
		<Q1Key x={62} y={722} size={26} />
		<QPart blocks={Q1_DEM} marks={M_B} x={62} y={880} w={816} size={27} />
		<AnsBox x={940} y={160} w={884} h={250} label="answer (a)" size={42} sizeOld={36} lines={[
			{t: 'Smoking fell from 1945; lung cancer rose until about 1982, then fell.', at: KB.early},
		]} />
		<Framed x={940} y={486} text="The cancer trend lags by decades." at={KB.decades} size={46} />
		<AnsBox x={940} y={530} w={884} h={290} label="answer (b)" size={40} sizeOld={34} lines={[
			{t: 'latency: mutations take decades to build up', at: KB.latency},
			{t: 'cancers from past smoking still appeared', at: KB.cancers},
			{t: 'the rate fell once fewer people had smoked for long', at: KB.even},
		]} />
		<Mistake x={940} y={846} text="the peaks don't match, so smoking isn't the cause" size={36} at={KB.classic} cross={KB.peaks} note="a lag is what latency predicts" noteW={860} />
	</Svg>
);

// ---------- 10c. question 2 ----------
/** "30 years outdoors": a coded year strip with a small sun mark every two years (a given of the question, no answer). */
const UVYears: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => (
	<g>
		<line x1={x} x2={x + w} y1={y} y2={y} stroke={INK} strokeWidth={5} strokeLinecap="round" />
		{[0, 10, 20, 30].map(t => <g key={t}><line x1={x + (t / 30) * w} x2={x + (t / 30) * w} y1={y - 10} y2={y + 10} stroke={INK} strokeWidth={4} /><Sx x={x + (t / 30) * w} y={y + 42} text={`${t}`} size={28} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
		{Array.from({length: 15}, (_, i) => <circle key={i} cx={x + ((i * 2 + 1) / 30) * w} cy={y - 26} r={9} fill="#f3c86b" stroke={AMBER_INK} strokeWidth={2.5} />)}
		<Sx x={x + w / 2} y={y - 50} text="30 years outdoors, no protection" size={32} color={INK} anchor="middle" hand at={-1000} />
	</g>
);
const KC = K('attempt-two', {pause: 'Pause here'});
export const SceneAttemptTwo: React.FC = () => (
	<Svg>
		<Title text="Question 2: a named UV case" />
		<HscTag />
		<Box x={96} y={150} w={1210} h={890} />
		<QPart blocks={Q2_STEM} x={126} y={240} w={1150} size={46} />
		<QPart blocks={Q2_DEM} x={126} y={560} w={1150} size={44} />
		<PicH p={PL.uvSkin} cx={1580} cy={310} h={320} />
		<UVYears x={1370} y={580} w={420} />
		<BlankLines x={1340} y={668} w={484} h={160} label="your answer" />
		<Pause h={hold('attempt-two')} at={KC.pause} tx={1340} ty={880} cx={1745} cy={952} r={46} />
		<PreRing at={KC.pause} start={hold('attempt-two').startFrame} x={1745} y={952} r={46} />
	</Svg>
);

// ---------- 10d. feedback two ----------
const KD = K('feedback-two', {uv: 'UV is', absorbed: 'absorbed', skin: 'skin cells', joins: 'joins', kinks: 'kinks', copied: 'copied before', mutation: 'a mutation', thirty: 'thirty years', build: 'build up', division: 'division', but: 'But exposure', prob: 'probability', repair: 'Repair', immune: 'immune', chance: 'chance', classic: 'classic mistake', always: 'always'});
const M_D: QMark[] = marksCheck([Q2_STEM, Q2_DEM], [{phrase: 'repeated UV exposure', at: KD.absorbed}, {phrase: '30 years', at: KD.thirty}, {phrase: 'similar exposure', at: KD.prob}]);
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const kink = smooth(prog(f, KD.joins, 24));
	const swap = prog(f, KD.thirty, 30);
	return (
		<Svg>
			<Title text="Feedback: UV, DNA and chance" />
			<HscTag />
			<Box x={40} y={150} w={680} h={890} />
			<QPart blocks={Q2_STEM} marks={M_D} x={62} y={204} w={636} size={30} />
			<QPart blocks={Q2_DEM} marks={M_D} x={62} y={520} w={636} size={30} />
			<g opacity={1 - swap}><PicH p={PL.uvSkin} cx={880} cy={300} h={270} /></g>
			<g opacity={swap}><PicH p={PL.melanoma} cx={890} cy={300} h={230} /></g>
			<GTag x={1080} y={392} text="melanoma: from pigment cells" size={28} at={KD.thirty + 20} />
			<g opacity={vis(f, KD.absorbed, undefined, 12)}>
				<SlimStrand x={1080} y={250} n={14} pitch={40} gap={50} lineW={5} kink={{i: 6, amt: kink}} rung={i => (i === 6 || i === 7 ? {color: AMBER_INK, w: 6} : undefined)} />
				<Sx x={1080} y={210} text="skin-cell DNA" size={32} color={INK} hand at={-1000} />
				<Sx x={1080} y={360} text="neighbouring bases joined: a kink" size={36} color={AMBER_INK} hand at={KD.kinks} out={KD.thirty} />
			</g>
			<AnsBox x={760} y={470} w={1064} h={300} label="answer (a)" size={40} sizeOld={34} lines={[
				{t: 'UV absorbed by skin-cell DNA: neighbouring bases join', at: KD.joins},
				{t: 'copied before repair → a mutation', at: KD.mutation},
				{t: '30 years: mutations build up in genes controlling division → melanoma risk rises', at: KD.build},
			]} />
			<Framed x={760} y={850} text="(b) risk, not certainty" at={KD.prob} size={44} />
			<T x={1300} y={826} w={520} text="repair, immune clearance and chance differ" size={36} at={KD.repair} />
			<Mistake x={760} y={912} text="UV always causes cancer" size={40} at={KD.classic} cross={KD.always} />
			<Sx x={1340} y={966} text="it raises the chance" size={40} color={TEAL} hand at={KD.always + 16} />
		</Svg>
	);
};

// ---------- 11. decision rule ----------
const KR = K('decision-rule', {name: 'name the exposure', dose: 'dose', change: 'describe the change', link: 'link it', explain: 'explain why', cert: 'certainty', next: 'Next'});
const PW = 390, PG = 56, PX = (i: number) => 96 + i * (PW + PG);
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const steps: {head: string; line: string; at: number; thumb: React.ReactNode}[] = [
		{head: '1. exposure and dose', line: 'what, how much, how long', at: KR.name, thumb: <g><Wisps a={[PX(0) + 50, 470]} b={[PX(0) + 170, 300]} n={3} spread={26} width={6} /><PicH p={PL.fibro} cx={PX(0) + 280} cy={390} h={130} /></g>},
		{head: '2. change in cells or tissue', line: 'DNA, walls, arteries', at: KR.change, thumb: <g><PicH p={PL.alvE} cx={PX(1) + 110} cy={390} h={170} /><PicH p={PL.artP} cx={PX(1) + 285} cy={390} h={150} /></g>},
		{head: '3. effect on health', line: 'the disease it raises', at: KR.link, thumb: <PicH p={PL.lungsS} cx={PX(2) + PW / 2} cy={390} h={190} />},
		{head: '4. risk, not certainty', line: 'repair, immune cells, chance', at: KR.explain, thumb: <RiskDial cx={PX(3) + PW / 2} cy={440} r={100} val={() => 0.62} title="" size={28} />},
	];
	return (
		<Svg>
			<Title text="Any environmental disease question" />
			{steps.map((s, i) => {
				const L = prog(f, s.at, 14);
				return (
					<g key={i}>
						<rect x={PX(i)} y={200} width={PW} height={420} rx={22} fill={L > 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 5 : 3} />
						<g opacity={0.45 + 0.55 * L}>
							<Sx x={PX(i) + 20} y={252} text={s.head} size={36} color={BLUE} hand at={-1000} />
							{s.thumb}
							<T x={PX(i) + 20} y={560} w={PW - 40} text={s.line} size={36} color={INK} />
						</g>
						{i < 3 ? <path d={`M${PX(i) + PW + 8},410 L${PX(i) + PW + PG - 10},410 M${PX(i) + PW + PG - 24},396 L${PX(i) + PW + PG - 10},410 L${PX(i) + PW + PG - 24},424`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" /> : null}
					</g>
				);
			})}
			<g opacity={prog(f, KR.cert, 14)}>
				<rect x={96} y={668} width={1728} height={100} rx={22} fill={CARD} stroke={BLUE} strokeWidth={4} />
				<Sx x={960} y={734} text="Exposure, change, effect. Then: risk, not certainty." size={50} color={BLUE} hand anchor="middle" at={-1000} />
			</g>
			<g opacity={prog(f, KR.next, 14)}>
				<rect x={860} y={830} width={964} height={130} rx={65} fill={CARD} stroke={AMBER_INK} strokeWidth={4} />
				<PicH p={PL.artP} cx={960} cy={895} h={110} />
				<Sx x={1050} y={910} text="Next: How does nutrition change disease risk?" size={40} color={INK} hand at={-1000} />
			</g>
			{void AMBER}{void TEAL}{void Chip}{void Pic}{void PicPair}{void ON}
		</Svg>
	);
};

// ---------- 12. key notes ----------
export const SceneNotes: React.FC = () => (
	<NotesBoard size={42} aidTop={760} tag="for any environmental disease question" aid="Exposure, change, effect. Then: risk, not certainty." notes={[
		'Exposure (contact: how much, how long) → change in cells or tissue → effect.',
		'Smoke: DNA damage → lung cancer; walls destroyed → COPD; plaque, CO → heart attack.',
		'Dose: pack-years = packs per day × years. Latency: disease can appear decades later.',
		'Exposure raises the probability, not the certainty (repair, immune cells, chance).',
		'Prevent by lowering exposure: fewer smokers; slip, slop, slap, seek, slide.',
	]} />
);
