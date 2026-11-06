// M8 G01 scenes 6 to 9: question 2 (melanoma rates) as the full worded card with the countdown; the graph built one
// stage at a time on graph paper beside the TAILS rail; describe then explain with reading guides and the painted
// melanoma (found early while thin); and the crossed truncated-scale mistake with two cut-off insets.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	VIOLET, AMBER_INK, AnsBox, Arrow, Badge, CARD, DrawPath, EDGE, GREYT, GREY_FILL, GTag, Guide, HscTag, INK, INK_SOFT, MelGraph, Mistake, Pause, Pic, PlateB, Q2Col, Q2Full, Rail, RED, Svg, Sx, T, TEAL, Tag, Title, Chip,
	gx, gy, pbPt, prog, q2Marks, smooth, Q2_DATA_X,
} from './parts';
import type {GG} from './parts';
import {MEL_EDGE, PL} from './assets';
import {K, hold} from './common';

// ---------- 3a. question 2 ----------
const KQ2 = K('q2-question', {pause: 'Pause here'});
export const SceneQ2: React.FC = () => (
	<Svg>
		<Title text="Question 2: draw the rates" />
		<HscTag />
		<Q2Full />
		<Pic p={PL.melanoma} cx={1582} cy={330} w={380} />
		<Tag x={1340} y={522} w={484} text="melanoma: a skin cancer linked to UV exposure" size={30} color="#8d857a" ink={GREYT} fill={GREY_FILL} />
		<g>
			<rect x={1340} y={640} width={484} height={150} rx={12} fill={CARD} stroke={EDGE} strokeWidth={2.5} strokeDasharray="10 8" />
			{Array.from({length: 15}, (_, i) => <line key={'v' + i} x1={1352 + i * 33} x2={1352 + i * 33} y1={648} y2={782} stroke="#dbe5ec" strokeWidth={1.5} />)}
			{Array.from({length: 5}, (_, i) => <line key={'h' + i} x1={1348} x2={1816} y1={652 + i * 33} y2={652 + i * 33} stroke="#dbe5ec" strokeWidth={1.5} />)}
		</g>
		<Pause h={hold('q2-question')} at={KQ2.pause} tx={1340} ty={858} cx={1750} cy={958} r={46} />
		<T x={1340} y={912} w={340} text="Drawing takes longer: pause the video if you need to." size={30} color={INK} at={KQ2.pause + 10} />
	</Svg>
);

// ---------- 3b. build the graph ----------
const KG = K('q2-graph', {x: 'x axis', y: 'y axis', unit: 'per hundred thousand people', five: 'five at the', zero: 'zero to sixty', plot: 'Plot each point', ruled: 'ruled line', key: 'key', title: 'title', tails: 'TAILS'});
const G1: GG = {x: 900, y: 300, w: 640, h: 470, x0: 1980, x1: 2025, y0: 0, y1: 60};
const INC0 = KG.plot + 6, MOR0 = KG.plot + 52;
const cellsG: Record<string, number> = {'0,0': KG.x, '0,1': KG.unit, '0,2': KG.unit + 8, '4,0': KG.five, '5,0': KG.five + 8, '4,1': KG.zero + 20};
for (let i = 0; i < 5; i++) { cellsG[`${i + 1},1`] = cellsG[`${i + 1},1`] ?? INC0 + i * 9; cellsG[`${i + 1},2`] = MOR0 + i * 9; }
export const SceneQ2Graph: React.FC = () => (
	<Svg>
		<Title text="Set up the graph, then plot" />
		<HscTag />
		<Badge text="Draw the graph" />
		<Q2Col cells={cellsG} />
		<MelGraph g={G1} ghost st={{xAxis: KG.x, yAxis: KG.y, xTicks: KG.five, yTicks: KG.zero, pts: INC0, mpts: MOR0, lines: KG.ruled, key: KG.key, title: KG.title}} keyAt={[1300, 520]} />
		<Chip x={922} y={318} text="even steps; fits 52" size={32} color={AMBER_INK} at={KG.zero + 20} out={KG.plot} />
		<GTag x={1600} y={262} text="s06: TAILS" size={30} />
		<Rail x={1600} y={330} rh={88} lit={{A: KG.x, L: KG.y, I: KG.five, S: KG.zero, T: KG.title}} pulseAt={KG.tails} />
		<Chip x={930} y={330} text="x axis: Year, the independent variable" size={40} color={VIOLET} at={KG.x + 10} out={KG.plot} />
		<Chip x={930} y={420} text="y axis: rate, one shared unit" size={40} color={AMBER_INK} at={KG.y + 30} out={KG.plot} />
		<Sx x={900} y={912} text="2015 to 2020 is 5 years: half a step" size={36} color={AMBER_INK} hand at={KG.five + 20} out={KG.plot} />
		<GTag x={900} y={880} text="illustrative data, based on the pattern of Australian statistics" size={28} at={KG.title + 8} />
		<Tag x={900} y={950} w={900} text="each value is a whole year's rate: join point to point" size={34} color={TEAL} at={KG.ruled + 10} />
	</Svg>
);

// ---------- 3c. describe, then explain ----------
const KD = K('q2-describe', {rose: 'rose from', fell: 'fell slightly', mort: 'Mortality stayed', six: 'around six', five: 'about five', found: 'found early', thin: 'still thin', cut: 'cut out', earlier: 'diagnosed in earlier', better: 'better treatment'});
const G2: GG = {x: 900, y: 300, w: 500, h: 320, x0: 1980, x1: 2025, y0: 0, y1: 60};
const M_D = q2Marks([{phrase: 'Describe the trend in each rate', at: KD.rose - 10}, {phrase: 'explain why the incidence and mortality rates are so different', at: KD.found - 10}]);
export const SceneQ2Describe: React.FC = () => {
	const f = useCurrentFrame();
	const e = pbPt(PL.melanoma, 1660, 390, 330)(MEL_EDGE[0], MEL_EDGE[1]);
	const co = prog(f, KD.thin, 14);
	return (
		<Svg>
			<Title text="Describe, then explain" />
			<HscTag />
			<Badge text="Draw the graph" />
			<Q2Col marks={M_D} hot={[{r: 1, at: KD.rose, out: KD.mort, color: TEAL}, {r: 4, at: KD.rose + 30, out: KD.mort, color: TEAL}]} />
			<MelGraph g={G2} size={26} titleSize={28} yLabel="Rate per 100 000 per year" keyAt={[1190, 420]} dimLines={KD.rose} segInc={[[1985, 2015, KD.rose], [2015, 2020, KD.fell]]} segMort={[[1985, 2020, KD.mort]]} />
			<Guide g={G2} yr={1985} v={38} at={KD.rose + 8} out={KD.mort} />
			<Guide g={G2} yr={2015} v={52} at={KD.rose + 30} out={KD.mort} />
			<Chip x={1200} y={360} text="falls slightly" size={30} color={TEAL} at={KD.fell} out={KD.mort} />
			<Guide g={G2} yr={1995} v={6} at={KD.six} color={AMBER_INK} label="6.0" dy={-16} />
			<Guide g={G2} yr={2020} v={4.9} at={KD.five} color={AMBER_INK} label="4.9" dy={-16} />
			<Pic p={PL.uv} cx={1765} cy={225} w={150} at={KD.found} />
			<Pic p={PL.melanoma} cx={1660} cy={390} w={330} />
			<GTag x={1450} y={166} text="b07: UV" size={28} at={KD.found} />
			{co > 0.01 ? <g opacity={co}>
				<circle cx={e[0]} cy={e[1]} r={10} fill={TEAL} />
				<DrawPath d={`M${e[0]},${e[1]} Q${e[0] + 80},${e[1] + 60} ${1700},${600}`} at={KD.thin} dur={16} color={TEAL} width={4} />
			</g> : null}
			<Sx x={1460} y={630} text="thin, found early: removed" size={36} color={TEAL} hand at={KD.thin + 12} />
			<AnsBox x={760} y={704} w={660} h={340} label="answer (b)" hint="Describe each trend with data, then explain the gap." lines={[
				{t: 'Incidence rose from 38 (1985) to 52 (2015), then fell slightly (50 in 2020).', at: KD.fell + 10},
				{t: 'Mortality stayed far lower, about 6, falling to 4.9 by 2020.', at: KD.five + 10},
				{t: 'Most are found early, while thin, and cut out, so few die.', at: KD.cut},
			]} />
			<Tag x={1450} y={690} w={390} text="different people each year: not a survival calculation" size={32} color="#8d857a" ink={GREYT} fill={GREY_FILL} at={KD.earlier} />
			<Tag x={1450} y={860} w={390} text="consistent with better treatment; not shown by the graph" size={32} color="#8d857a" ink={GREYT} fill={GREY_FILL} at={KD.better} />
		</Svg>
	);
};

// ---------- 3d. the classic mistake ----------
const KM2 = K('q2-mistake', {classic: 'classic mistake', thirty: 'at thirty', off: 'fall off', fits: 'fits every value', space: 'space the years', ten: 'like ten'});
const G3: GG = {x: 900, y: 300, w: 480, h: 300, x0: 1980, x1: 2025, y0: 0, y1: 60};
/** A small inset graph. mode 'cut': y axis 30 to 60, the mortality points fall below the axis (cut off). mode
 *  'even': the years evenly spaced, so the last 5-year gap is drawn as wide as the 10-year gaps. */
const Inset: React.FC<{x: number; y: number; w: number; h: number; mode: 'cut' | 'even'; at: number}> = ({x, y, w, h, mode, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	const y0 = mode === 'cut' ? 30 : 0;
	const Y = (val: number) => y + h - ((val - y0) / (60 - y0)) * h;
	const X = (i: number, yr: number) => (mode === 'even' ? x + 30 + i * ((w - 60) / 4) : x + ((yr - 1980) / 45) * w);
	const inc = Q2_DATA_X.map((d, i) => [X(i, d[0]), Y(d[1])] as [number, number]);
	const mor = Q2_DATA_X.map((d, i) => [X(i, d[0]), Y(d[2])] as [number, number]);
	const ticks = mode === 'cut' ? [30, 40, 50, 60] : [0, 20, 40, 60];
	const id = `inset-${mode}`;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} fill={CARD} stroke={EDGE} strokeWidth={2} />
			<defs><clipPath id={id}><rect x={x} y={y - 6} width={w} height={h + 6} /></clipPath></defs>
			<g clipPath={`url(#${id})`}>
				<DrawPath d={'M' + inc.map(p => p.join(',')).join(' L')} at={at + 6} dur={24} color={TEAL} width={5} />
				{mode === 'even' ? <DrawPath d={'M' + mor.map(p => p.join(',')).join(' L')} at={at + 12} dur={24} color={AMBER_INK} width={5} /> : null}
			</g>
			<path d={`M${x},${y} L${x},${y + h} L${x + w},${y + h}`} fill="none" stroke={INK} strokeWidth={4} />
			{ticks.map(t => <Sx key={t} x={x - 10} y={Y(t) + 10} text={`${t}`} size={28} color={t === 30 && mode === 'cut' ? RED : INK} anchor="end" weight={700} at={-1000} />)}
			{Q2_DATA_X.map((d, i) => (mode === 'even' || i === 0 || i === 4 ? <Sx key={d[0]} x={X(i, d[0])} y={y + h + 34} text={`${d[0]}`} size={26} color={INK} anchor="middle" weight={700} at={-1000} /> : null))}
			{mode === 'cut' ? <g>
				{mor.map((p, i) => <circle key={i} cx={p[0]} cy={y + h + 52} r={7} fill="none" stroke={AMBER_INK} strokeWidth={3} strokeDasharray="4 3" />)}
				<Sx x={x + w / 2} y={y + h + 96} text="mortality points missing" size={34} color={RED} anchor="middle" hand at={at + 20} />
			</g> : <g>
				<path d={`M${X(3, 2015)},${y + h + 46} l0,8 L${X(4, 2020)},${y + h + 54} l0,-8`} fill="none" stroke={RED} strokeWidth={3} />
				<Sx x={x + w / 2} y={y + h + 92} text="2015 to 2020 drawn as 10 years" size={30} color={RED} anchor="middle" hand at={at + 20} />
			</g>}
		</g>
	);
};
export const SceneQ2Mistake: React.FC = () => (
	<Svg>
		<Title text="The classic mistake" />
		<HscTag />
		<Badge text="Draw the graph" />
		<Q2Col />
		<MelGraph g={G3} size={26} titleSize={26} yLabel="Rate per 100 000 per year" keyAt={[1150, 400]} zeroPulse={KM2.fits} brPulse={KM2.space} />
		<Inset x={1490} y={180} w={330} h={180} mode="cut" at={-1000} />
		<Mistake x={1460} y={486} text="y axis from 30" size={40} at={-1000} cross={KM2.classic + 4} />
		<Inset x={1490} y={612} w={330} h={160} mode="even" at={KM2.space - 20} />
		<Mistake x={1460} y={900} text="years spaced evenly" size={40} at={KM2.space - 20} cross={KM2.ten} />
		<T x={790} y={800} w={640} text="Choose one scale that fits every value." size={46} color={TEAL} at={KM2.fits} />
		<T x={790} y={930} w={640} text="Space the years to scale." size={46} color={TEAL} at={KM2.space + 10} />
		{void Arrow}{void PlateB}{void INK_SOFT}{void smooth}{void gx}{void gy}
	</Svg>
);
