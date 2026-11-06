// M8 G02 (Chemistry) scenes 7 to 10: question 2 (iron by colourimetry, a line with an intercept) as the full card with
// the countdown; why the zero standard reads 0.032 (the reagent, a water zero, the same share under every standard);
// subtract, then divide, with the bar split and the read-off; the crossed "divide straight away" slip and the reagent
// blank fix.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, AnsBox, Badge, BarSplit, BLUE, BlankLines, CalcLine, CheckStrip, Crosses, DrawPath, FE, FE_INK, FE_PTS, FeGraph, Framed, GIV, GLine, GREYX, GTag, Givens, Graph, HscTag, INK, Mistake,
	PL, Pause, PicH, PreRing, Q2Col, Q2Full, ReadOff, Svg, Sx, T, TEAL, Tag, Title, fitFe, gx, gy, prog, q2Marks, smooth,
} from './parts';
import type {GG} from './parts';
import {FE_C, FE_EQ, K, hold} from './common';

const ON = -1000;
const Checks: React.FC<{lit?: (number | undefined)[]; tick?: ({at: number; note?: string; color?: string} | undefined)[]}> = ({lit, tick}) => <CheckStrip x={62} y={950} w={636} lit={lit} tick={tick} />;
const DONE = [{at: ON}, {at: ON}];

// ---------- 3a. question 2 ----------
const KQ2 = K('q2-question', {pause: 'Pause here'});
export const SceneQ2: React.FC = () => (
	<Svg>
		<Title text="Question 2: iron in bore water" />
		<HscTag />
		<Q2Full />
		<PicH p={PL.colm} cx={1468} cy={290} h={250} />
		<PicH p={PL.cuvFe} cx={1730} cy={290} h={250} />
		<Givens x={1340} y={482} size={28} items={[['zeroed with distilled water', GIV], ['same reagent in every standard and sample', GIV], ['line: A = 0.199c + 0.032', FE_INK], ['bore water: A = 0.290', AMBER_INK]]} />
		<BlankLines x={1340} y={704} w={484} h={130} label="your answer" />
		<Pause h={hold('q2-question')} at={KQ2.pause} tx={1340} ty={888} cx={1745} cy={958} r={46} />
		<PreRing at={KQ2.pause} start={hold('q2-question').startFrame} x={1745} y={958} r={46} />
	</Svg>
);

// ---------- 3b. why the line starts above zero ----------
const KB = K('q2-blank', {zero: 'zero standard', reads: 'still reads', p032: ['point zero three two', 1], reagent: 'reagent', plain: 'plain water', so: 'So something', trace: 'trace of iron', every: 'Every standard', same: 'same extra', why: "That's why"});
const M_B = q2Marks([{phrase: '0.00 mg L⁻¹ standard', at: KB.zero}, {phrase: '0.032', at: KB.p032}, {phrase: 'in the same amount, to each standard and to the sample', at: KB.reagent}, {phrase: 'set to zero with distilled water', at: KB.plain}]);
export const G3: GG = {x: 910, y: 226, w: 560, h: 450, x0: 0, x1: 2.5, y0: 0, y1: 0.5};
/** Grey reagent share (0.032) under each standard's point. */
const Shares: React.FC<{g: GG; at: number; w?: number}> = ({g, at, w = 22}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{FE_C.map((c, i) => {
				const k = smooth(prog(f, at + i * 6, 16));
				if (k <= 0.01) return null;
				const h = (gy(g, 0) - gy(g, 0.032)) * k;
				return <rect key={i} x={gx(g, c) - w / 2} y={gy(g, 0) - h} width={w} height={h} fill={GREYX} opacity={0.9} />;
			})}
		</g>
	);
};
export const SceneQ2Blank: React.FC = () => {
	const f = useCurrentFrame();
	const br = prog(f, KB.p032, 12);
	return (
		<Svg>
			<Title text="Part a: why the line starts above zero" />
			<HscTag />
			<Badge text="Colourimetry: a line with an intercept" />
			<Q2Col marks={M_B} checks={<Checks lit={[undefined, undefined, KB.zero]} tick={[undefined, undefined, {at: KB.why, note: 'no: starts at 0.032', color: AMBER_INK}]} />} />
			<FeGraph g={G3} size={28} eqXY={[930, 270]} eqSize={38} eqText="A = 0.199c + 0.032" />
			<Shares g={G3} at={KB.same} />
			{br > 0.01 ? <g opacity={br}>
				<path d={`M${G3.x - 30},${gy(G3, 0)} l-12,0 L${G3.x - 42},${gy(G3, 0.032)} l12,0`} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				<circle cx={G3.x} cy={gy(G3, 0.032)} r={13} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				<path d={`M${G3.x + 16},${gy(G3, 0.032) + 4} Q${G3.x + 120},${gy(G3, 0.032) + 6} ${1186},${gy(G3, 0.04)}`} fill="none" stroke={AMBER_INK} strokeWidth={3} />
				<Sx x={1196} y={gy(G3, 0.04) + 12} text="0.032 at zero iron" size={34} color={AMBER_INK} weight={800} at={ON} />
			</g> : null}
			<Tag x={1150} y={480} w={320} text="intercept: where the line meets the absorbance axis" size={30} color={AMBER_INK} at={KB.p032 + 10} />
			<PicH p={PL.cuvBlank} cx={1590} cy={360} h={290} />
			<PicH p={PL.cuvFe} cx={1760} cy={360} h={290} />
			<Sx x={1590} y={548} text="zero set" size={30} color={INK} anchor="middle" hand weight={700} at={KB.plain} />
			<Sx x={1590} y={582} text="with water" size={30} color={INK} anchor="middle" hand weight={700} at={KB.plain} />
			<Sx x={1760} y={548} text="standards:" size={30} color={FE_INK} anchor="middle" hand weight={700} at={KB.reagent} />
			<Sx x={1760} y={582} text="+ reagent" size={30} color={FE_INK} anchor="middle" hand weight={700} at={KB.reagent} />
			<Tag x={1512} y={616} w={330} text="for example, trace iron in the reagents" size={28} color="#6f685e" ink="#575148" fill="#f1eee7" at={KB.trace} />
			<Tag x={1512} y={720} w={330} text="p04: the blank removes what isn't the analyte" size={28} color="#8d857a" ink="#575148" fill="#f1eee7" at={KB.plain + 10} />
			<AnsBox x={790} y={826} w={1050} h={212} label="answer (a)" size={44} sizeOld={32} hint="What is in the zero standard that isn't iron?" lines={[
				{t: 'Zeroed with water, but every standard contains the reagent.', at: KB.plain},
				{t: 'The reagent absorbs slightly (e.g. trace iron), so 0.00 reads 0.032.', at: KB.so},
				{t: 'The same 0.032 is part of every reading.', at: KB.every},
			]} />
		</Svg>
	);
};

// ---------- 3c. subtract, then divide ----------
const KC = K('q2-calc', {take: 'Take the', minus: 'minus', eight: 'eight', thats: "That's the absorbance", divide: 'Divide by the slope', slope: 'slope', one30: 'one point three zero', litre: 'litre', reading: 'Reading across'});
const M_C = q2Marks([{phrase: '0.290', at: KC.minus - 30}]);
const G4: GG = {x: 1360, y: 560, w: 440, h: 300, x0: 0, x1: 2.5, y0: 0, y1: 0.5};
export const SceneQ2Calc: React.FC = () => (
	<Svg>
		<Title text="Part b: subtract, then divide" />
		<HscTag />
		<Badge text="Colourimetry: a line with an intercept" />
		<Q2Col marks={M_C} checks={<Checks tick={[undefined, undefined, {at: ON, note: 'no: starts at 0.032', color: AMBER_INK}]} />} />
		<Sx x={800} y={224} text="c = (A − intercept) ÷ slope" size={46} color={BLUE} weight={800} at={KC.take} />
		<CalcLine x={800} y={318} label="A from iron =" sub="0.290 − 0.032 =" res="0.258" at={KC.minus - 30} resAt={KC.eight} dim={KC.divide} size={46} />
		<CalcLine x={800} y={404} label="c =" sub="0.258 ÷ 0.199 =" res="1.30 mg L⁻¹" at={KC.divide} resAt={KC.one30} size={46} />
		<Framed x={1300} y={488} text="c = 1.30 mg L⁻¹" size={46} color={TEAL} at={KC.litre} />
		<BarSplit x={840} base={980} h={360} split={KC.minus} size={34} />
		<FeGraph g={G4} size={24} eq={false} />
		<ReadOff g={G4} a={0.29} c={1.296} at={KC.reading} downAt={KC.reading + 26} value="1.30" size={30} aLabel="0.290" />
		<Tag x={1520} y={950} w={300} text="read-off: same answer" size={30} color={TEAL} at={KC.reading + 40} />
		{void DONE}
	</Svg>
);

// ---------- 3d. the classic slip ----------
const KM = K('q2-mistake', {classic: 'classic slip', one46: 'one point four six', high: 'too high', counts: 'counts the', when: 'When a line', subtract: 'subtract it', better: 'Better still', blank: 'reagent blank', iron: ['iron', 2]});
const G5: GG = {x: 1270, y: 430, w: 330, h: 250, x0: 0, x1: 2.5, y0: 0, y1: 0.5};
const FeShift: React.FC<{at: number}> = ({at}) => {
	const f = useCurrentFrame();
	const s = smooth(prog(f, at + 10, 30));
	const b = 0.032 * (1 - s);
	return (
		<g>
			<Graph g={G5} xt={[0, 0.5, 1, 1.5, 2, 2.5]} yt={[0, 0.1, 0.2, 0.3, 0.4, 0.5]} fx={n => (n === 0 ? '0' : n % 1 === 0 ? n.toFixed(1) : '')} fy={n => (n === 0 ? '0' : n.toFixed(1))} xl="iron (mg L⁻¹)" yl="A" size={24} dx={0.25} dy={0.05} />
			<path d={`M${gx(G5, 0)},${gy(G5, b)} L${gx(G5, 2.4)},${gy(G5, b + 0.199 * 2.4)}`} stroke={FE_INK} strokeWidth={5} fill="none" />
			<Crosses g={G5} pts={FE_PTS.map(([c, a]) => [c, a - 0.032 * s] as [number, number])} at={ON} color={GIV} r={9} />
		</g>
	);
};
export const SceneQ2Mistake: React.FC = () => (
	<Svg>
		<Title text="The classic slip" />
		<HscTag />
		<Badge text="Colourimetry: a line with an intercept" />
		<Q2Col checks={<Checks tick={[undefined, undefined, {at: ON, note: 'no: starts at 0.032', color: AMBER_INK}]} />} />
		<Mistake x={790} y={170} text="0.290 ÷ 0.199 = 1.46 mg L⁻¹" size={44} at={ON} cross={KM.classic + 8} />
		<Tag x={790} y={276} w={560} text="too high: the reagent's 0.032 counted as iron" size={34} color="#c4432f" at={KM.high} />
		<BarSplit x={840} base={760} h={300} split={ON} size={32} pulseGrey={KM.counts} />
		<FeShift at={KM.blank} />
		<PicH p={PL.cuvBlank} cx={1740} cy={520} h={300} />
		<Sx x={1740} y={712} text="reagent blank:" size={30} color={INK} anchor="middle" hand weight={700} at={ON} />
		<Sx x={1740} y={746} text="every reagent, no iron" size={28} color={INK} anchor="middle" hand weight={700} at={ON} />
		<Tag x={1180} y={776} w={640} text="zero with a reagent blank: the line passes through zero" size={30} color={TEAL} at={KM.blank} />
		<Framed x={790} y={918} text="c = (0.290 − 0.032) ÷ 0.199 = 1.30 mg L⁻¹" size={44} color={TEAL} at={ON} />
		<T x={790} y={1018} text="Intercept? Subtract it before you divide." size={50} color={BLUE} at={KM.when} />
		{void FE}{void DrawPath}{void GLine}{void fitFe}
	</Svg>
);
