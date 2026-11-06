// M8 G02 (Chemistry) scenes 11 to 16: question 3 (lead in a school bubbler) as the full card with the countdown; the
// method's limit and each result on the guideline bar, with the pipe strip; the claim judged (the first drink, one
// bubbler on one day); the crossed "average them" trap; the decision board and the key notes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, AnsBox, Badge, BAND, BLUE, BlankLines, CU, CalcLine, CheckStrip, Chip, CuGraph, Crosses, Graph, EDGE, FE_INK, Framed, GBand, GIV, GLine, Givens, GuideBar, HscTag, INK, INK_SOFT, KeyNotesBoard,
	Mistake, PB, PB_INK, PL, Pause, Pic, PicH, PipeStrip, PreRing, Q3Col, Q3Full, Svg, Sx, T, TEAL, Tag, Title, CU_PTS, fitCu, prog, q3Marks, tLines,
} from './parts';
import type {GMark, GG} from './parts';
import {K, hold} from './common';

const ON = -1000;
const Checks: React.FC<{lit?: (number | undefined)[]; tick?: ({at: number; note?: string; color?: string} | undefined)[]}> = ({lit, tick}) => <CheckStrip x={62} y={950} w={636} lit={lit} tick={tick} />;
const PB_MORN = '#3f454d';

// ---------- 4a. question 3 ----------
const KQ3 = K('q3-question', {pause: 'Pause here'});
export const SceneQ3: React.FC = () => (
	<Svg>
		<Title text="Question 3: lead in a school bubbler" />
		<HscTag />
		<Q3Full />
		<PicH p={PL.bubbler} cx={1470} cy={300} h={290} />
		<Pic p={PL.aas} cx={1716} cy={330} w={210} />
		<Givens x={1340} y={498} size={28} items={[['morning, first draw: 0.012', PB_INK], ['after 2 min running: 0.002', PB_INK], ['guideline: 0.005', '#b5502b'], ['quantification limit: 0.001', GIV]]} />
		<BlankLines x={1340} y={720} w={484} h={118} label="your answer" />
		<Pause h={hold('q3-question')} at={KQ3.pause} tx={1340} ty={888} cx={1745} cy={958} r={46} />
		<PreRing at={KQ3.pause} start={hold('q3-question').startFrame} x={1745} y={958} r={46} />
	</Svg>
);

// ---------- 4b. compare each result ----------
const KD = K('q3-data', {method: 'Start with the method', can: 'Can it measure', ql: 'quantification limit', p001: 'point zero zero one', five: 'five times', yes: 'yes', morning: 'Now the morning', over: 'Point zero one two over', two4: 'two point four', guideline: ['guideline', 2], flushed: 'The flushed sample', under: 'under it', so: 'So lead', dissolving: 'dissolving', fittings: 'fittings'});
const M_D = q3Marks([{phrase: '0.001 mg L⁻¹', at: KD.ql}, {phrase: '0.005 mg L⁻¹', at: KD.over + 14}]);
const BAR = {x: 860, y: 352, w: 940};
const MORN: GMark = {v: 0.012, label: 'morning 0.012', at: ON, color: PB_MORN};
const FLUSH: GMark = {v: 0.002, label: 'flushed 0.002', at: ON, color: '#7b838c', below: true};
export const SceneQ3Data: React.FC = () => (
	<Svg>
		<Title text="Can it measure? Then compare" />
		<HscTag />
		<Badge text="Judge the monitoring evidence" />
		<Q3Col marks={M_D} cells={{'1,1': KD.over, '2,1': KD.under}} checks={<Checks lit={[undefined, undefined, undefined, KD.flushed]} />} />
		<GuideBar x={BAR.x} y={BAR.y} w={BAR.w} bracket={KD.yes} marks={[{...MORN, at: KD.over}, {...FLUSH, at: KD.under}]} glPulse={KD.guideline} />
		<Pic p={PL.aas} cx={950} cy={520} w={300} />
		<Sx x={950} y={624} text="the method" size={30} color={INK} anchor="middle" hand weight={700} at={ON} />
		<Tag x={1130} y={448} w={710} text="quantification limit: the lowest concentration this method can measure with the stated reliability" size={34} color={GIV} at={KD.ql} />
		<CalcLine x={800} y={706} sub="morning: 0.012 ÷ 0.005 =" res="2.4 × the guideline" at={KD.over} resAt={KD.two4} size={46} />
		<Sx x={800} y={770} text="flushed: 0.002, under the guideline" size={42} color="#5d656e" hand weight={700} at={KD.under} />
		<PicH p={PL.bubbler} cx={900} cy={920} h={200} />
		<PipeStrip x={1040} y={858} w={800} at={KD.dissolving} size={30} />
	</Svg>
);

// ---------- 4c. evaluate the claim ----------
const KC = K('q3-claim', {claim: 'Now the claim', real: 'is real', isnt: "isn't the water", first: 'The first drink', over: 'over the guideline', one: 'one bubbler', day: 'one day', others: "the others do", so: 'So the claim', repeat: 'repeat samples', source: 'source'});
const M_C = q3Marks([{phrase: 'Sample 2 is below the guideline value', at: KC.isnt}, {phrase: 'one drinking bubbler', at: KC.one}]);
const BubRow: React.FC<{x: number; y: number; h: number; at: number}> = ({x, y, h, at}) => {
	const f = useCurrentFrame();
	const k = prog(f, at, 14);
	if (k <= 0.01) return null;
	const sp = 132;
	return (
		<g opacity={k}>
			{[0, 1, 2, 3, 4].map(i => (
				<g key={i}>
					<PicH p={PL.bubbler} cx={x + i * sp} cy={y} h={h} o={i === 0 ? 1 : 0.32} />
					{i > 0 ? <Sx x={x + i * sp} y={y + 10} text="?" size={60} color={AMBER_INK} anchor="middle" weight={800} at={at + i * 5} /> : null}
				</g>
			))}
			<Sx x={x} y={y + h / 2 + 40} text="tested" size={30} color={INK} anchor="middle" hand weight={700} at={ON} />
		</g>
	);
};
export const SceneQ3Claim: React.FC = () => (
	<Svg>
		<Title text="Evaluate the claim" />
		<HscTag />
		<Badge text="Judge the monitoring evidence" />
		<Q3Col marks={M_C} cells={{'1,1': KC.first}} checks={<Checks lit={[undefined, undefined, undefined, ON]} tick={[undefined, undefined, undefined, {at: KC.source}]} />} />
		<GuideBar x={BAR.x} y={300} w={BAR.w} marks={[{...MORN, pulseAt: KC.first}, {...FLUSH, dimAt: KC.isnt}]} />
		<Chip x={1440} y={176} text="the first drink of the day" size={30} color={PB_MORN} at={KC.first} />
		<BubRow x={880} y={500} h={150} at={KC.one} />
		<Tag x={1440} y={460} w={380} text="one tap, one day" size={36} color={AMBER_INK} at={KC.day} />
		<Framed x={1450} y={600} text="not supported" size={46} color={TEAL} at={KC.so} />
		<AnsBox x={790} y={652} w={1050} h={386} label="answer" size={44} sizeOld={32} hint="Which sample matches the water students drink?" lines={[
			{t: 'Sample 2 (flushed) is below the guideline, but Sample 1, the first drink each morning, is 2.4 × the guideline.', at: KC.over},
			{t: 'Lead dissolves while water stands, so timing matters; one bubbler on one day can’t show the water is safe.', at: KC.one + 20},
			{t: 'Repeat sampling at every bubbler over several days, with public health unit advice to find and control the lead source.', at: KC.repeat},
		]} />
	</Svg>
);

// ---------- 4d. the trap ----------
const KM = K('q3-mistake', {trap: 'The trap', p007: 'Point zero zero seven', different: 'different questions', stands: 'after it stands', runs: 'after it runs', drinks: 'drinks', match: 'Match the sample'});
export const SceneQ3Mistake: React.FC = () => (
	<Svg>
		<Title text="The trap" />
		<HscTag />
		<Badge text="Judge the monitoring evidence" />
		<Q3Col checks={<Checks tick={[undefined, undefined, undefined, {at: ON}]} />} />
		<Mistake x={790} y={170} text="average = (0.012 + 0.002) ÷ 2 = 0.007" size={42} at={ON} cross={KM.trap + 8} />
		<GuideBar x={BAR.x} y={392} w={BAR.w} marks={[MORN, FLUSH, {v: 0.007, label: 'average 0.007', at: KM.p007, color: '#9a948a', slideFrom: 0.012}]} />
		<PicH p={PL.bubbler} cx={950} cy={660} h={210} />
		<PicH p={PL.bubbler} cx={1460} cy={660} h={210} o={0.85} />
		<Sx x={950} y={796} text="stood overnight: 0.012" size={34} color={PB_MORN} anchor="middle" weight={800} at={KM.stands} />
		<Sx x={1460} y={796} text="ran 2 minutes: 0.002" size={34} color="#7b838c" anchor="middle" weight={800} at={KM.runs} />
		<Sx x={1205} y={680} text="≠" size={90} color={AMBER_INK} anchor="middle" weight={800} at={KM.different} />
		<Tag x={1600} y={560} w={240} text="two different waters" size={32} color={AMBER_INK} at={KM.different} />
		<Framed x={790} y={906} text="Judge with Sample 1: 2.4 × the guideline" size={44} color={TEAL} at={ON} />
		<T x={790} y={1012} text="Match the sample to the question." size={50} color={BLUE} at={KM.match - 60} />
	</Svg>
);

// ---------- 5. decision board ----------
const KB = K('decision-board', {any: 'for any calibration', read: 'Read the unknown', std: 'standards', multiply: 'Multiply back', icpt: 'If the line has', divide: 'divide', judge: 'And judge', alone: 'alone', next: 'Next'});
const MG: GG = {x: 150, y: 0, w: 170, h: 110, x0: 0, x1: 5, y0: 0, y1: 0.7};
type Row = {see: string; doo: string; badge: string; at: number; thumb: (y: number) => React.ReactNode};
const ROWS: Row[] = [
	{see: 'Inside the standards?', doo: 'Above the top standard: dilute, then remeasure.', badge: 'Q1', at: KB.read, thumb: y => {
		const g = {...MG, y: y + 20};
		return <g><Graph g={g} xt={[0, 1, 2, 3, 4, 5]} yt={[0, 0.2, 0.4, 0.6]} fx={() => ''} fy={() => ''} xl="" yl="" xlAt={1e9} ylAt={1e9} dx={1} dy={0.1} /><GBand g={g} lo={0} hi={4} /><GLine g={g} a={[0, 0]} b={[4, fitCu(4)]} color={GIV} width={3} /><Crosses g={g} pts={CU_PTS} at={ON} color={CU} r={5} /></g>;
	}},
	{see: 'Every dilution?', doo: 'Multiply by final volume ÷ sample volume.', badge: 'Q1', at: KB.multiply, thumb: y => <g><PicH p={PL.pipette} cx={190} cy={y + 75} h={130} /><PicH p={PL.flask} cx={280} cy={y + 75} h={130} /></g>},
	{see: 'Line starts at zero?', doo: 'c = (A − intercept) ÷ slope, or zero with a reagent blank.', badge: 'Q2', at: KB.icpt, thumb: y => <g><PicH p={PL.colm} cx={200} cy={y + 75} h={110} /><PicH p={PL.cuvFe} cx={300} cy={y + 75} h={130} /></g>},
	{see: 'Right sample for the question?', doo: 'Limit below the guideline; the sample that matches the question; repeat across taps and days.', badge: 'Q3', at: KB.judge, thumb: y => <PicH p={PL.bubbler} cx={240} cy={y + 75} h={130} />},
];
export const SceneDecision: React.FC = () => {
	const f = useCurrentFrame();
	const y0 = 196, rh = 150, gap = 12;
	return (
		<Svg>
			<Title text="Four checks for any calibration or monitoring question" size={52} />
			<Sx x={380} y={y0 - 14} text="Check" size={34} color={INK_SOFT} hand at={ON} />
			<Sx x={900} y={y0 - 14} text="What you do" size={34} color={INK_SOFT} hand at={ON} />
			{ROWS.map((r, i) => {
				const y = y0 + i * (rh + gap);
				const L = prog(f, r.at, 14);
				const o = 0.5 + 0.5 * L;
				const dl = tLines(r.doo, 40, 800);
				return (
					<g key={i}>
						<rect x={96} y={y} width={1728} height={rh} rx={22} fill={L > 0.5 ? '#fffaf0' : '#fffdf8'} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
						{r.thumb(y)}
						<g opacity={o}>
							<T x={380} y={y + rh / 2 + 15 - ((tLines(r.see, 44, 440) - 1) * 50) / 2} text={r.see} size={44} w={440} color={INK} lh={50} />
							<path d={`M${840},${y + rh / 2} L${880},${y + rh / 2} M${866},${y + rh / 2 - 13} L${880},${y + rh / 2} L${866},${y + rh / 2 + 13}`} fill="none" stroke={BLUE} strokeWidth={5} strokeLinecap="round" />
							<T x={900} y={y + rh / 2 + 14 - ((dl - 1) * 46) / 2} text={r.doo} size={40} w={800} color={BLUE} lh={46} />
							<Chip x={1806} y={y + rh / 2 - 22} text={r.badge} size={28} color={BLUE} anchor="end" />
						</g>
					</g>
				);
			})}
			<g opacity={prog(f, KB.any, 14)}>
				<rect x={96} y={858} width={1728} height={86} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
				<Sx x={960} y={916} text="Read across, then down, and only inside the standards." size={44} color={TEAL} hand anchor="middle" at={ON} />
			</g>
			<g opacity={prog(f, KB.next, 14)}>
				<rect x={940} y={960} width={884} height={84} rx={42} fill="#fffdf8" stroke={AMBER_INK} strokeWidth={4} />
				<PicH p={PL.bottle} cx={1000} cy={1002} h={70} />
				<Sx x={1044} y={1016} text="Next: why monitor water and nutrient pollution?" size={38} color={INK} hand at={ON} />
			</g>
		</Svg>
	);
};

// ---------- 6. key notes ----------
export const SceneNotes: React.FC = () => (
	<KeyNotesBoard size={46} aidTop={640} aids={['Read across, then down, and only inside the standards.', 'Intercept? Subtract it before you divide.']} tag="match the sample to the question" notes={[
		'Graph: concentration along the bottom, small crosses, one best-fit line.',
		'Above the top standard? Dilute, remeasure, multiply by the dilution factor.',
		'Line with an intercept: c = (A − b) ÷ m, or zero with a reagent blank.',
		'Check the quantification limit is below the guideline.',
		'Judge with the sample that matches the question, repeated.',
	]} />
);
void BAND; void FE_INK; void PB; void Pic; void Givens;
