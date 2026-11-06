// M8 G02 (Chemistry) scenes 1 to 6: the hook (three cases with their plates and a sketch of each twist), question 1
// (copper by AAS) as the full worded card with the countdown, the graph drawn stage by stage (TAILS rail), why the
// over-range sample was diluted, the read-off and the dilution factor, and the crossed "extend the line" slip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, ALine, AnsBox, Badge, BAND, BLUE, BlankLines, CU, CU_INK, CU_PTS, CalcLine, CheckStrip, Chip, Crosses, CuGraph, DrawPath, EDGE, FE_INK, Framed, GBand, GIV, GLine, GTag, Givens,
	Graph, HscTag, INK, Mistake, PB_INK, PL, Pause, Pic, PicH, PreRing, Q1Col, Q1Full, ReadOff, Ring, SlopeTri, Svg, Sx, T, TEAL, Tag, Title, fitCu, gx, gy, prog, q1Marks, smooth,
} from './parts';
import type {GG} from './parts';
import {Rail} from '../bio-m8-g01/parts';
import {K, hold} from './common';

const ON = -1000;

// ---------- 1. hook ----------
const KH = K('hook', {std: 'standards', zero: 'zero', asked: 'asked', three: 'three HSC-style questions'});
const HookCard: React.FC<{x: number; at: number; n: number; verb: string; color: string; check: string; children: React.ReactNode}> = ({x, at, n, verb, color, check, children}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	const nb = prog(f, KH.three + (n - 1) * 8, 12);
	return (
		<g>
			<rect x={x} y={160} width={548} height={784} rx={26} fill="#fffdf8" stroke={p > 0.5 ? color : EDGE} strokeWidth={p > 0.5 ? 5 : 3} />
			<Sx x={x + 30} y={232} text={verb} size={54} color={color} hand at={ON} />
			{children}
			<Sx x={x + 30} y={912} text={check} size={34} color={BLUE} hand weight={700} at={at} />
			{nb > 0.01 ? <g opacity={nb}><circle cx={x + 488} cy={214} r={40} fill={color} /><Sx x={x + 488} y={228} text={`Q${n}`} size={38} color="#fffdf8" anchor="middle" weight={800} at={ON} /></g> : null}
		</g>
	);
};
/** A small sketch graph inside a hook card: axes solid; crosses and line draw at `at`. */
const Sketch: React.FC<{x: number; y: number; at: number; kind: 'over' | 'icpt'}> = ({x, y, at, kind}) => {
	const f = useCurrentFrame();
	const g: GG = {x, y, w: 380, h: 250, x0: 0, x1: 5, y0: 0, y1: 0.7};
	const k = prog(f, at, 14);
	const b = kind === 'icpt' ? 0.12 : 0;
	return (
		<g>
			<path d={`M${x},${y - 10} L${x},${y + 250} L${x + 392},${y + 250}`} fill="none" stroke={INK} strokeWidth={4} />
			<Sx x={x + 190} y={y + 290} text="concentration" size={28} color={INK} anchor="middle" weight={700} at={ON} />
			<g transform={`translate(${x - 16},${y + 125}) rotate(-90)`}><Sx x={0} y={0} text="absorbance" size={28} color={INK} anchor="middle" weight={700} at={ON} /></g>
			{k > 0.01 ? <g opacity={k}>
				<Crosses g={g} pts={[1, 2, 3, 4].map(c => [c, b + 0.1 * c] as [number, number])} at={[at, at + 5, at + 10, at + 15]} color={kind === 'icpt' ? FE_INK : CU_INK} r={9} />
				<GLine g={g} a={[0, b]} b={[4.3, b + 0.43]} at={at + 18} color={kind === 'icpt' ? FE_INK : CU_INK} width={4} />
				{kind === 'over' ? <g>
					<line x1={g.x} x2={g.x + g.w} y1={gy(g, 0.62)} y2={gy(g, 0.62)} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="10 7" />
					<Sx x={gx(g, 2)} y={gy(g, 0.62) - 12} text="sample: ?" size={32} color={AMBER_INK} weight={800} at={at + 20} />
				</g> : <g>
					<path d={`M${x + 14},${gy(g, 0)} l10,0 L${x + 24},${gy(g, b)} l-10,0`} fill="none" stroke={FE_INK} strokeWidth={4} />
					<Sx x={x + 36} y={gy(g, b / 2) + 10} text="not zero" size={30} color={FE_INK} weight={800} at={at + 20} />
				</g>}
			</g> : null}
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const a3 = prog(f, KH.asked, 14);
	return (
		<Svg>
			<Title text="Calibration and water-analysis practice" />
			<HookCard x={96} at={KH.std} n={1} verb="Inside the range" color={CU_INK} check="check: inside the standards?">
				<Pic p={PL.aas} cx={370} cy={360} w={470} />
				<Sketch x={170} y={530} at={KH.std} kind="over" />
			</HookCard>
			<HookCard x={686} at={KH.zero} n={2} verb="Minus the blank" color={FE_INK} check="check: does the line start at zero?">
				<PicH p={PL.colm} cx={880} cy={360} h={250} />
				<PicH p={PL.cuvFe} cx={1100} cy={370} h={230} />
				<Sketch x={760} y={530} at={KH.zero} kind="icpt" />
			</HookCard>
			<HookCard x={1276} at={KH.asked} n={3} verb="The right sample" color={PB_INK} check="check: the right sample?">
				<PicH p={PL.bubbler} cx={1550} cy={390} h={300} />
				<g>
					<rect x={1316} y={620} width={468} height={44} rx={10} fill="#fffdf8" stroke={EDGE} strokeWidth={2.5} />
					<line x1={1472} x2={1472} y1={596} y2={688} stroke="#b5502b" strokeWidth={6} />
					<Sx x={1478} y={590} text="guideline" size={30} color="#b5502b" weight={800} at={ON} />
				</g>
				<Chip x={1316} y={720} text="morning: 0.012" size={34} color={PB_INK} at={ON} glow={a3 * (1 - prog(f, KH.asked + 40, 20))} />
				<Chip x={1316} y={800} text="flushed: 0.002" size={34} color={PB_INK} at={ON} glow={a3 * (1 - prog(f, KH.asked + 40, 20))} />
				<Sx x={1700} y={790} text="?" size={90} color={AMBER_INK} anchor="middle" weight={800} at={KH.asked + 14} />
			</HookCard>
			<Chip x={960} y={970} text="HSC-style questions, written for HSCScience" size={32} color="#8d857a" ink={INK} anchor="middle" at={KH.three} />
		</Svg>
	);
};

// ---------- 2a. question 1 ----------
const KQ1 = K('q1-question', {pause: 'Pause here'});
const EMPTY: GG = {x: 1430, y: 430, w: 380, h: 210, x0: 0, x1: 5, y0: 0, y1: 0.7};
export const SceneQ1: React.FC = () => (
	<Svg>
		<Title text="Question 1: copper in mine drainage" />
		<HscTag />
		<Q1Full />
		<Pic p={PL.aas} cx={1512} cy={268} w={340} />
		<PicH p={PL.bottle} cx={1766} cy={268} h={200} />
		<Sx x={1340} y={410} text="your graph" size={28} color={INK} hand weight={700} at={ON} />
		<Graph g={EMPTY} xt={[0, 1, 2, 3, 4, 5]} yt={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]} fx={() => ''} fy={() => ''} xl="" yl="" xlAt={1e9} ylAt={1e9} dx={0.5} dy={0.05} />
		<Givens x={1340} y={692} size={28} items={[['undiluted: A = 0.620', AMBER_INK], ['10.00 mL made up to 50.00 mL', GIV], ['diluted: A = 0.142', AMBER_INK]]} />
		<Pause h={hold('q1-question')} at={KQ1.pause} tx={1340} ty={888} cx={1745} cy={958} r={46} />
		<PreRing at={KQ1.pause} start={hold('q1-question').startFrame} x={1745} y={958} r={46} />
	</Svg>
);

// ---------- shared walkthrough pieces ----------
export const G1: GG = {x: 910, y: 212, w: 560, h: 470, x0: 0, x1: 5, y0: 0, y1: 0.7};
const Checks: React.FC<{lit?: (number | undefined)[]; tick?: ({at: number; note?: string; color?: string} | undefined)[]}> = ({lit, tick}) => <CheckStrip x={62} y={950} w={636} lit={lit} tick={tick} />;
const DONE1 = {at: ON};
/** Q1's finished graph: grid with labels, crosses, the ruled line through the blank, the standards' band. */
const CuDone: React.FC<{g?: GG; band?: boolean}> = ({g = G1, band = true}) => (
	<g>
		<CuGraph g={g} />
		{band ? <GBand g={g} lo={0} hi={4} tag="the standards' range" /> : null}
		<GLine g={g} a={[0, fitCu(0)]} b={[4, fitCu(4)]} color={GIV} width={5} />
		<Crosses g={g} pts={CU_PTS} at={ON} color={CU} />
	</g>
);

// ---------- 2b. draw it ----------
const KG = K('q1-graph', {chosen: 'chosen', bottom: 'along the bottom', side: 'up the side', even: 'even steps', label: 'label both axes', small: 'small cross', rule: 'rule one straight', not: 'not dot to dot', these: 'These points', slope: 'slope', litre: 'litre'});
const M_G = q1Marks([]);
export const SceneQ1Graph: React.FC = () => {
	const ptAt = [0, 1, 2, 3, 4].map(i => KG.small + 6 + i * 10);
	const cells: Record<string, number> = {'0,0': KG.bottom, '1,0': KG.side};
	ptAt.forEach((a, i) => { cells[`0,${i + 1}`] = a; cells[`1,${i + 1}`] = a + 4; });
	return (
		<Svg>
			<Title text="Part a: draw the graph" />
			<HscTag />
			<Badge text="AAS calibration with a dilution" />
			<Q1Col marks={M_G} cells={cells} checks={<Checks lit={[KG.these]} tick={[{at: KG.litre - 20}]} />} />
			<CuGraph g={G1} xlAt={KG.bottom} ylAt={KG.side} />
			<GBand g={G1} lo={0} hi={4} at={KG.these} tag="the standards' range" />
			<Crosses g={G1} pts={CU_PTS} at={ptAt} color={CU} pre={0.3} />
			<GLine g={G1} a={[0, fitCu(0)]} b={[4, fitCu(4)]} at={KG.rule} color={GIV} width={5} dur={34} />
			<SlopeTri g={G1} c0={1} c1={4} m={0.0999} b={0.0002} at={KG.slope} color={GIV} size={28} />
			<Framed x={930} y={292} text="slope ≈ 0.0999 per mg L⁻¹" size={40} color={TEAL} at={KG.litre - 6} />
			<Sx x={950} y={344} text="(about 0.1)" size={34} color={TEAL} hand weight={700} at={KG.litre + 4} />
			<Sx x={1530} y={206} text="s06: TAILS" size={30} color={INK} hand weight={700} at={ON} />
			<Rail x={1550} y={224} rh={80} lit={{A: KG.bottom, S: KG.even, I: KG.even + 8, L: KG.label, T: KG.label + 10}} />
			<GTag x={1530} y={652} text="one ruled line" size={30} at={KG.not} />
			<GTag x={1530} y={712} text="not dot to dot" size={30} at={KG.not + 8} />
			<AnsBox x={790} y={826} w={1050} h={212} label="answer (a)" size={44} sizeOld={32} lines={[
				{t: 'Concentration along the bottom, absorbance up the side.', at: KG.bottom, out: KG.small},
				{t: 'Even steps that fill the grid; both axes labelled with units.', at: KG.even},
				{t: 'Small crosses; one ruled line of best fit through the blank.', at: KG.small},
			]} />
			{void DONE1}
		</Svg>
	);
};

// ---------- 2c. why dilute ----------
const KR = K('q1-range', {top: 'top standard', point4: 'point four', six: 'point six two zero', outside: 'outside the standards', nothing: 'Nothing in this data', bend: 'bend', inside: 'inside the range', bring: 'to bring'});
const M_R = q1Marks([{phrase: '0.620', at: KR.six}, {phrase: 'diluted to 50.00 mL', at: KR.inside}]);
export const SceneQ1Range: React.FC = () => {
	const f = useCurrentFrame();
	const drop = smooth(prog(f, KR.inside, 34));
	const bendK = prog(f, KR.bend, 14);
	return (
		<Svg>
			<Title text="Part b: why dilute?" />
			<HscTag />
			<Badge text="AAS calibration with a dilution" />
			<Q1Col marks={M_R} cells={{'0,5': KR.top, '1,5': KR.top + 6}} checks={<Checks tick={[{at: ON}]} />} />
			<CuDone />
			<Ring cx={gx(G1, 4)} cy={gy(G1, 0.399)} rx={30} ry={30} at={KR.top} color={AMBER_INK} />
			<Sx x={gx(G1, 4) - 20} y={gy(G1, 0.399) + 58} text="top standard 0.399" size={30} color={AMBER_INK} anchor="middle" weight={800} at={KR.top + 6} />
			<GLine g={G1} a={[4, fitCu(4)]} b={[5, fitCu(5)]} at={KR.nothing} color={GIV} width={4} dash="12 10" />
			{bendK > 0.01 ? <g opacity={bendK}>
				<DrawPath d={`M${gx(G1, 4)},${gy(G1, fitCu(4))} Q${gx(G1, 4.6)},${gy(G1, 0.455)} ${gx(G1, 5)},${gy(G1, 0.47)}`} at={KR.bend} dur={20} color="#8d857a" width={5} dash="6 8" />
			</g> : null}
			<ALine g={G1} v={() => 0.62 + (0.142 - 0.62) * drop} at={KR.six} color={AMBER_INK} label={() => (drop > 0.5 ? 'diluted 0.142' : 'undiluted 0.620')} size={34} />
			<Tag x={1500} y={226} w={340} text="0.620 is above the top standard" size={32} color={AMBER_INK} at={KR.outside} out={KR.inside} />
			<Tag x={1500} y={370} w={340} text="possible bend: not measured" size={32} color="#6f685e" ink="#575148" fill="#f1eee7" at={KR.bend} />
			<GTag x={1500} y={480} text="p04: the fifth standard fell below" size={26} at={KR.bend + 10} />
			<Tag x={1500} y={560} w={340} text="diluted: inside the range" size={34} color={BAND} at={KR.inside + 20} />
			<AnsBox x={790} y={826} w={1050} h={212} label="answer (b)" size={44} sizeOld={32} hint="Why not read 0.620 from the line?" lines={[
				{t: 'The undiluted absorbance, 0.620, is above the top standard (0.399).', at: KR.outside},
				{t: 'The line is not known to be straight beyond the standards.', at: KR.bend - 30},
				{t: 'Dilute to bring its absorbance inside the calibrated range.', at: KR.bring},
			]} />
		</Svg>
	);
};

// ---------- 2d. read it, then multiply back ----------
const KC = K('q1-calc', {read: 'Read across', down: 'then down', v142: ['one point four two', 1], litre1: ['litre', 1], diluted: "That's the diluted", fifty: 'Fifty over ten', five: 'five', drain: 'so the drainage', seven: 'seven point one', litre2: ['litre', 2]});
const M_C = q1Marks([{phrase: '0.142', at: KC.read}, {phrase: 'A 10.00 mL sample', at: KC.fifty}, {phrase: 'diluted to 50.00 mL', at: KC.fifty + 8}, {phrase: 'in the drainage water', at: KC.litre2}]);
export const SceneQ1Calc: React.FC = () => {
	const f = useCurrentFrame();
	const arrowK = prog(f, KC.fifty, 14);
	return (
		<Svg>
			<Title text="Part c: read it, then multiply back" />
			<HscTag />
			<Badge text="AAS calibration with a dilution" />
			<Q1Col marks={M_C} checks={<Checks tick={[{at: ON}, {at: KC.litre2}]} />} />
			<CuDone />
			<ReadOff g={G1} a={0.142} c={1.42} at={KC.read} downAt={KC.down} value="1.42" valueAt={KC.v142} aLabel="0.142" size={36} />
			<GTag x={1180} y={226} text="s06: show the read-off" size={28} at={KC.read + 10} />
			<PicH p={PL.pipette} cx={1568} cy={400} h={330} />
			<PicH p={PL.flask} cx={1764} cy={400} h={330} />
			{arrowK > 0.01 ? <g opacity={arrowK}><path d={`M1612,470 Q1660,430 1706,470`} fill="none" stroke={GIV} strokeWidth={5} /><path d="M1692,456 l14,14 l-18,6" fill="none" stroke={GIV} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /></g> : null}
			<Sx x={1568} y={612} text="10.00 mL" size={34} color={GIV} anchor="middle" weight={800} at={KC.fifty} />
			<Sx x={1764} y={612} text="to 50.00 mL" size={34} color={GIV} anchor="middle" weight={800} at={KC.fifty + 6} />
			<Chip x={1666} y={640} text="× 5.00" size={40} color={GIV} anchor="middle" at={KC.five} />
			<CalcLine x={800} y={858} label="c(diluted) =" sub="" res="1.42 mg L⁻¹" at={KC.v142} resAt={KC.v142} dim={KC.fifty} size={44} />
			<CalcLine x={800} y={930} label="dilution factor =" sub="50.00 ÷ 10.00 =" res="5.00" at={KC.fifty} resAt={KC.five} dim={KC.drain} size={44} />
			<Framed x={800} y={1018} text="c(drainage water) = 1.42 × 5.00 = 7.1 mg L⁻¹" size={44} color={TEAL} at={KC.seven} />
		</Svg>
	);
};

// ---------- 2e. the classic slip ----------
const KM = K('q1-mistake', {classic: 'classic slip', extending: 'extending the line', six: 'six point two', nearly: 'nearly one milligram', because: 'because the real', bends: 'bends below', outside: 'Outside the standards', dilute: 'Dilute and remeasure'});
const G2: GG = {x: 920, y: 300, w: 780, h: 420, x0: 0, x1: 8, y0: 0, y1: 0.8};
const bendA = (c: number) => (c <= 4 ? fitCu(c) : fitCu(4) + (c - 4) * 0.0999 * (1 - (c - 4) * 0.0932));
export const SceneQ1Mistake: React.FC = () => {
	const f = useCurrentFrame();
	const bk = smooth(prog(f, KM.bends, 30));
	const pts = Array.from({length: 25}, (_, i) => 4 + (3.1 * i) / 24);
	const path = 'M' + pts.filter(c => c <= 4 + 3.1 * bk + 1e-9).map(c => `${gx(G2, c)},${gy(G2, bendA(c))}`).join(' L');
	const gap = prog(f, KM.nearly, 14);
	return (
		<Svg>
			<Title text="The classic slip" />
			<HscTag />
			<Badge text="AAS calibration with a dilution" />
			<Q1Col checks={<Checks tick={[{at: ON}, {at: ON}]} />} />
			<Mistake x={790} y={170} text="extend the line to 0.620: 6.2 mg L⁻¹" size={42} at={ON} cross={KM.classic + 8} />
			<Graph g={G2} xt={[0, 1, 2, 3, 4, 5, 6, 7, 8]} yt={[0, 0.2, 0.4, 0.6, 0.8]} fx={n => `${n}`} fy={n => (n === 0 ? '0' : n.toFixed(1))} xl="copper concentration (mg L⁻¹)" yl="absorbance" size={28} dx={0.5} dy={0.05} />
			<GBand g={G2} lo={0} hi={4} />
			<GLine g={G2} a={[0, fitCu(0)]} b={[4, fitCu(4)]} color={GIV} width={5} />
			<Crosses g={G2} pts={CU_PTS} at={ON} color={CU} r={10} />
			<GLine g={G2} a={[4, fitCu(4)]} b={[6.21, 0.62]} at={KM.extending} color={GIV} width={4} dash="12 10" />
			<line x1={G2.x} x2={gx(G2, 7.3)} y1={gy(G2, 0.62)} y2={gy(G2, 0.62)} stroke={AMBER_INK} strokeWidth={4} strokeDasharray="12 9" />
			<Sx x={G2.x + 12} y={gy(G2, 0.62) - 12} text="undiluted 0.620" size={32} color={AMBER_INK} weight={800} at={ON} />
			<GLine g={G2} a={[6.21, 0.62]} b={[6.21, 0]} at={KM.six} color={'#c4432f'} width={4} dash="10 8" />
			<GLine g={G2} a={[7.1, 0.62]} b={[7.1, 0]} at={KM.bends + 20} color={TEAL} width={4} dash="10 8" />
			{bk > 0.01 ? <path d={path} fill="none" stroke={TEAL} strokeWidth={5} strokeDasharray="4 7" strokeLinecap="round" /> : null}
			<Sx x={gx(G2, 6.21) - 10} y={G2.y + G2.h - 70} text="6.2" size={38} color="#c4432f" anchor="end" weight={800} at={KM.six} />
			<Sx x={gx(G2, 7.1) + 10} y={G2.y + G2.h - 70} text="7.1" size={38} color={TEAL} weight={800} at={KM.bends + 26} />
			<Sx x={gx(G2, 5.6)} y={gy(G2, 0.47) + 50} text="real response bends" size={30} color={TEAL} hand weight={700} at={KM.bends} />
			{gap > 0.01 ? <g opacity={gap}><path d={`M${gx(G2, 6.21)},${G2.y + G2.h - 24} l0,-10 L${gx(G2, 7.1)},${G2.y + G2.h - 34} l0,10`} fill="none" stroke="#c4432f" strokeWidth={3} /><Sx x={gx(G2, 6.65)} y={G2.y + G2.h - 130} text="about 0.9 low" size={32} color="#c4432f" anchor="middle" hand weight={700} at={ON} /></g> : null}
			<Framed x={790} y={920} text="7.1 mg L⁻¹: dilute, read inside, × 5" size={44} color={TEAL} at={ON} />
			<T x={790} y={1012} text="Inside the data, read it. Outside, doubt it." size={46} color={BLUE} at={KM.outside} />
			<GTag x={1640} y={980} text="s06" size={28} at={KM.outside + 6} />
		</Svg>
	);
};
