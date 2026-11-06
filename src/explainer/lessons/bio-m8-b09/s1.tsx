// B8-09 scenes 1 to 5: most changed cells never become cancer (hook), cancer is mitosis without control, the cell cycle
// and its checkpoints, p53 (repair or apoptosis), and several changes building up in one cell line. The cycle ring sits at
// the upper left from scene 4 to scene 7; the cause chain owns the bottom of the frame from scene 5.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER_INK, BLUE, CARD, CauseChain5, Chip, CloneTree, CycleRing, DrawPath, EDGE, GREYT, GTag, INK, INK_SOFT, Lab, ON, P53, Pic, PicH, PicPair, Ptr, Spark, Svg, Sx, T, TEAL, Tissue, Title,
	chainThumbs, lerp, pbPt, prog, pulse, ringPt, smooth, tissueTiles, travel, vis,
} from './parts';
import type {CNode, P2} from './parts';
import {FP, PL} from './assets';
import {K} from './common';

/** A small grey tick. */
const Tick: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 1, color = '#7d766b'}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <DrawPath d={`M${x - 12 * s},${y} L${x - 2 * s},${y + 11 * s} L${x + 16 * s},${y - 13 * s}`} at={at} dur={10} color={color} width={5 * s} />;
};
/** Points on the interphase plate's nuclear envelope (screen space). */
const envPts = (cx: number, cy: number, w: number, angs: number[], k = 0.98): P2[] => {
	const m = pbPt(PL.inter, cx, cy, w);
	return angs.map(a => m(FP.nuc[0] + FP.nucR * k * Math.cos((a * Math.PI) / 180), FP.nuc[1] + FP.nucR * k * Math.sin((a * Math.PI) / 180)) as P2);
};

// ---------- 1. hook ----------
const K1 = K('hook', {huge: 'huge numbers', mitosis: 'by mitosis', slip: 'slip through', most: 'So most', never: 'never become', why: 'Why not', spread: 'does it spread', q: "That's today's"});
const TILES = tissueTiles(820, 250, 7, 7, 100);
const SPK = [9, 25, 36];
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const mit = K1.mitosis;
	const amber = TILES[25];
	const org = 0.32 + 0.68 * prog(f, K1.spread, 14);
	return (
		<Svg>
			<Title text="How does cancer begin and spread?" />
			<Pic p={PL.inter} cx={380} cy={530} w={520} out={mit} />
			<Pic p={PL.meta} cx={380} cy={530} w={520} at={mit} out={mit + 44} />
			<Pic p={PL.daught} cx={380} cy={530} w={620} at={mit + 44} />
			<Sx x={380} y={850} text="one cell" size={42} color={INK} anchor="middle" hand at={ON} out={mit} />
			<Sx x={380} y={850} text="mitosis: one cell → two" size={42} color={INK} anchor="middle" hand at={mit + 20} />
			<Tissue tiles={TILES} w={92} src={[560, 530]} at={K1.huge + 30} step={1.4} keep={SPK} dimAt={K1.never} />
			{SPK.map((i, k) => <Spark key={i} x={TILES[i].x + 3} y={TILES[i].y + 4} s={18} at={K1.slip + 8 + k * 8} grey={i === 25 ? undefined : K1.never + 6} beat={i === 25} />)}
			{SPK.filter(i => i !== 25).map((i, k) => <Tick key={i} x={TILES[i].x + 40} y={TILES[i].y - 34} at={K1.never + 10 + k * 6} />)}
			<Ptr a={[900, 850]} b={[TILES[36].x - 20, TILES[36].y + 30]} at={K1.slip + 20} color={AMBER_INK} />
			<Chip x={820} y={850} text="changed DNA" size={36} color={AMBER_INK} at={K1.slip + 20} />
			<Chip x={1150} y={850} text="most: no cancer" size={36} color={GREYT} ink={INK} at={K1.never + 10} />
			<g opacity={org}>
				<PicH p={PL.lungs} cx={1710} cy={350} h={250} />
				<Pic p={PL.liver} cx={1710} cy={640} w={240} />
			</g>
			<Sx x={1710} y={790} text="spread?" size={42} color={AMBER_INK} anchor="middle" hand at={K1.spread} />
			{vis(f, K1.spread, undefined, 12) > 0.01 ? <g opacity={prog(f, K1.spread, 12)}>
				<DrawPath d={`M${amber.x + 46},${amber.y - 10} Q1450,380 1580,360`} at={K1.spread} dur={16} color={AMBER_INK} width={4} dash="12 9" />
				<DrawPath d={`M${amber.x + 46},${amber.y + 10} Q1450,600 1580,630`} at={K1.spread + 6} dur={16} color={AMBER_INK} width={4} dash="12 9" />
			</g> : null}
			<T x={96} y={1000} w={1728} text="Each time DNA is copied, a few changes can slip through." size={44} at={K1.slip} out={K1.never} />
			<T x={96} y={1000} w={1728} text="Yet most changed cells never become cancer." size={44} at={K1.never} out={K1.why} />
			<T x={96} y={1000} w={1728} text="Why not? And when one does, how does it spread?" size={46} color={BLUE} at={K1.why} />
		</Svg>
	);
};

// ---------- 2. mitosis without control ----------
const K2 = K('mitosis-without-control', {before: 'Before mitosis', sep: 'Mitosis separates', copies: 'chromosome copies', two: 'two nuclei', still: 'still divides', when: 'but when', healthy: 'Healthy cells', graze: 'a graze', heals: 'heals', cancer: ['A cancer cell', 2], keeps: 'keeps dividing', stop: 'should stop'});
const ROW: {p: typeof PL.inter; cx: number; w: number; lab: string; key: 'before' | 'sep' | 'copies' | 'two'}[] = [
	{p: PL.inter, cx: 250, w: 290, lab: 'DNA copied first', key: 'before'},
	{p: PL.meta, cx: 690, w: 290, lab: 'lines up', key: 'sep'},
	{p: PL.ana, cx: 1130, w: 360, lab: 'copies separate', key: 'copies'},
	{p: PL.daught, cx: 1590, w: 400, lab: 'two nuclei', key: 'two'},
];
export const SceneMitosis: React.FC = () => {
	const f = useCurrentFrame();
	const dimRow = 1 - 0.45 * prog(f, K2.still, 14);
	const hv = 0.35 + 0.65 * prog(f, K2.healthy, 14);
	const cv = 0.6 + 0.4 * prog(f, K2.cancer, 14);
	const kk = Math.max(0, Math.floor((f - K2.keeps) / 11));
	const count = f < K2.keeps ? 2 : Math.min(2 ** (kk + 1), 4096);
	const barH = f < K2.keeps ? 40 : Math.min(300, 40 + (f - K2.keeps) * 2.2);
	return (
		<Svg>
			<Title text="Cancer is mitosis without control" />
			<GTag x={1824} y={70} text="Module 5: mitosis" anchor="end" />
			<g opacity={dimRow}>
				{ROW.map((r, i) => {
					const lit = prog(f, K2[r.key], 12);
					return (
						<g key={i}>
							<Pic p={r.p} cx={r.cx} cy={320} w={r.w} />
							<Sx x={r.cx} y={510} text={r.lab} size={38} color={lit > 0.5 ? INK : GREYT} anchor="middle" hand at={K2[r.key]} />
							{i < 3 ? <path d={`M${r.cx + r.w / 2 + 14},320 L${ROW[i + 1].cx - ROW[i + 1].w / 2 - 14},320 M${ROW[i + 1].cx - ROW[i + 1].w / 2 - 28},307 L${ROW[i + 1].cx - ROW[i + 1].w / 2 - 14},320 L${ROW[i + 1].cx - ROW[i + 1].w / 2 - 28},333`} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeLinecap="round" /> : null}
						</g>
					);
				})}
			</g>
			<Sx x={960} y={575} text="a cancer cell divides by the same process" size={40} color={GREYT} anchor="middle" hand at={K2.still} />
			<rect x={96} y={610} width={760} height={430} rx={22} fill={CARD} stroke={hv > 0.9 ? BLUE : EDGE} strokeWidth={3} opacity={hv} />
			<g opacity={hv}>
				<Sx x={124} y={660} text="healthy cells" size={40} color={BLUE} hand at={ON} />
				<PicPair a={PL.graze} b={PL.healed} cx={476} cy={810} w={600} at={K2.heals + 20} dur={40} />
			</g>
			<Sx x={476} y={1010} text="divide when needed, then stop" size={38} color={INK} anchor="middle" hand at={K2.heals} />
			<Sx x={960} y={850} text="when?" size={96} color={AMBER_INK} anchor="middle" hand at={K2.when} />
			<rect x={1064} y={610} width={760} height={430} rx={22} fill={CARD} stroke={cv > 0.9 ? AMBER_INK : EDGE} strokeWidth={3} opacity={cv} />
			<g opacity={cv}>
				<Sx x={1092} y={660} text="a cancer cell" size={40} color={AMBER_INK} hand at={ON} />
				<Pic p={PL.daught} cx={1290} cy={820} w={380} />
				<line x1={1540} x2={1780} y1={820} y2={820} stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
				<Sx x={1784} y={808} text="stop" size={32} color={INK} anchor="end" hand at={ON} />
				<rect x={1610} y={990 - barH} width={90} height={barH} rx={8} fill="#e8b866" stroke={AMBER_INK} strokeWidth={3} />
				<Sx x={1655} y={980 - barH} text={`${count}`} size={34} color={INK} anchor="middle" weight={800} at={ON} />
				<line x1={1560} x2={1760} y1={990} y2={990} stroke={INK_SOFT} strokeWidth={3} />
			</g>
			<Sx x={1290} y={1010} text="keeps dividing: doesn't stop" size={38} color={AMBER_INK} anchor="middle" hand at={K2.stop} />
		</Svg>
	);
};

// ---------- 3. the cell cycle and its checkpoints ----------
const K3 = K('cell-cycle-checkpoints', {cycle: 'cell cycle', grows: 'It grows', copies: 'copies its DNA', ready: 'gets ready', divides: 'then divides', along: 'Along the loop', checkpoints: 'checkpoints', met: "You've met", before: 'before the copies', attached: 'attached', another: 'Another comes', copied: ['is copied', 1], big: 'big enough', signal: 'signal to divide', dna: 'DNA undamaged'});
const RING3 = {cx: 960, cy: 585, R: 268, tr: 84};
export const SceneCycle: React.FC = () => {
	const f = useCurrentFrame();
	const dot = travel([[K3.grows, K3.copies, 120, 210], [K3.copies, K3.ready, 210, 300], [K3.ready, K3.divides, 300, 390], [K3.divides, K3.along, 390, 480]]);
	const g1 = ringPt(RING3, 165);
	const sp = ringPt(RING3, 60);
	const chips: [string, number][] = [['big enough?', K3.big], ['signal to divide?', K3.signal], ['DNA undamaged?', K3.dna]];
	return (
		<Svg>
			<Title text="The cell cycle and its checkpoints" />
			<CycleRing g={RING3} size={38} dot={dot} litSt={[K3.grows, K3.copies, K3.ready, K3.divides]} gates={[
				{show: K3.checkpoints, lit: K3.another, litColor: AMBER_INK},
				{show: K3.checkpoints},
				{show: K3.checkpoints, lit: K3.before, litColor: BLUE, dim: K3.another},
			]} />
			<Sx x={960} y={600} text="cell cycle" size={44} color={INK} anchor="middle" hand at={K3.cycle} />
			<T x={1340} y={210} w={480} text="checkpoint: a stop that checks it's safe to go on" size={38} color={INK} at={K3.checkpoints} />
			<GTag x={1250} y={490} text="another check: copying finished?" size={28} at={K3.checkpoints + 30} />
			<g opacity={0.35 + 0.65 * prog(f, K3.met, 14)}>
				<Pic p={PL.meta} cx={1600} cy={720} w={250} />
				<DrawPath d={`M${sp[0] + 30},${sp[1] - 10} Q1380,780 1470,740`} at={K3.met} dur={16} color={BLUE} width={4} dash="12 9" />
			</g>
			<T x={1360} y={900} w={470} text="spindle checkpoint: every chromosome attached to both poles?" size={34} color={BLUE} at={K3.met} />
			<GTag x={1360} y={980} text="Module 5" size={28} at={K3.met} />
			<GTag x={110} y={420} text="G1 checkpoint" size={30} at={K3.another} />
			<Sx x={110} y={510} text="before copying DNA, it asks:" size={36} color={INK} hand at={K3.copied} />
			{chips.map(([t, a], i) => <Chip key={t} x={110} y={550 + i * 92} text={t} size={42} color={AMBER_INK} at={ON} o={0.3 + 0.7 * prog(f, a, 12)} glow={pulse(f, a, 30)} />)}
			<DrawPath d={`M560,${640} Q${g1[0] - 60},${g1[1] - 30} ${g1[0] - 30},${g1[1]}`} at={K3.another} dur={14} color={AMBER_INK} width={4} dash="10 8" />
		</Svg>
	);
};

// ---------- 4. p53: repair or self-destruct ----------
const K4 = K('p53-apoptosis', {p53: ['p53', 1], responds: 'responds to', stops: 'stops the cycle', repair: 'repair enzymes', fix: 'fix the damage', too: 'too great', apop: 'apoptosis', destroys: 'destroys itself', many: 'many mutations', control: 'control division', first: 'first answer', several: 'several changes'});
const RING4 = {cx: 270, cy: 330, R: 124, tr: 40};
const C4 = {cx: 860, cy: 520, w: 640};
export const SceneP53: React.FC = () => {
	const f = useCurrentFrame();
	const sp1 = envPts(C4.cx, C4.cy, C4.w, [-40, 30, 200]);
	const sp2 = envPts(C4.cx, C4.cy, C4.w, [-80, -20, 40, 110, 160, 230]);
	const mv = smooth(prog(f, K4.p53, 40));
	const nucS = pbPt(PL.inter, C4.cx, C4.cy, C4.w)(FP.nuc[0], FP.nuc[1]);
	const px = lerp(1330, nucS[0] + 120, mv), py = lerp(260, nucS[1] - 150, mv);
	const p53o = 1 - prog(f, K4.apop + 10, 16);
	const dot = (fr: number) => (fr < K4.stops ? 120 + ((fr * 1.4) % 45) : 150);
	return (
		<Svg>
			<Title text="p53: repair or self-destruct" />
			<CycleRing g={RING4} size={26} labels={false} letters={false} dot={dot} gates={[{show: ON, lit: K4.stops, closed: K4.stops}, {show: ON}, {show: ON}]} />
			<Sx x={430} y={250} text="cycle stopped" size={34} color={AMBER_INK} anchor="middle" hand at={K4.stops} out={K4.many} />
			<PicPair a={PL.inter} b={PL.apop} cx={C4.cx} cy={C4.cy} w={C4.w} at={K4.apop + 6} dur={50} />
			{sp1.map(([x, y], i) => <Spark key={'a' + i} x={x} y={y} s={20} at={ON} gone={K4.fix + 4 + i * 4} />)}
			{sp2.map(([x, y], i) => <Spark key={'b' + i} x={x} y={y} s={20} at={K4.too - 10 + i * 3} gone={K4.apop + 30} />)}
			<Ptr a={[330, 545]} b={sp1[2]} at={ON} out={K4.fix + 10} color={AMBER_INK} />
			<Sx x={110} y={555} text="DNA damage" size={42} color={AMBER_INK} hand at={ON} out={K4.many} />
			<Chip x={96} y={600} text="small: repair, go on" size={36} color={TEAL} ink={INK} o={0.3 + 0.7 * prog(f, K4.repair, 12)} glow={pulse(f, K4.fix, 30)} />
			<Chip x={96} y={690} text="too great: apoptosis" size={36} color={AMBER_INK} ink={INK} o={0.3 + 0.7 * prog(f, K4.apop, 12)} glow={pulse(f, K4.apop, 30)} />
			<P53 x={px} y={py} s={44} o={p53o} />
			<Lab x={1260} y={230} t="p53: a protein that responds to DNA damage" at={K4.p53} dim={K4.apop} size={40} w={560} />
			<Lab x={1260} y={400} t="apoptosis: the cell destroys itself in a controlled way" at={K4.apop} dim={K4.many} size={40} w={560} />
			<g opacity={0.3 + 0.7 * prog(f, K4.many, 14)}>
				<rect x={1250} y={540} width={574} height={300} rx={20} fill={CARD} stroke={EDGE} strokeWidth={3} />
				{[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
					const x = 1320 + (i % 4) * 128, y = 620 + Math.floor(i / 4) * 120;
					return <g key={i}><Pic p={PL.inter} cx={x} cy={y} w={108} />{i === 1 || i === 6 ? <circle cx={x + 2} cy={y + 4} r={9} fill="#9a9387" stroke={CARD} strokeWidth={2} /> : null}</g>;
				})}
			</g>
			<T x={1260} y={890} w={560} text="harmless mutation: not in a control gene" size={36} color={GREYT} at={K4.many} />
			<Chip x={96} y={950} text="cancer: several changes in control genes" size={46} color={AMBER_INK} ink={INK} at={K4.several} glow={pulse(f, K4.several, 36)} />
			<Sx x={110} y={830} text="many changes miss" size={38} color={GREYT} hand at={K4.many} />
			<Sx x={110} y={874} text="the control genes" size={38} color={GREYT} hand at={K4.many} />
		</Svg>
	);
};

// ---------- 5. several changes, one cell line ----------
const K5 = K('several-changes', {build: 'build up', line: 'same line', one: 'one change', more: 'a bit more', leaves: 'leaves more', desc: ['descendants', 1], neigh: 'neighbours', second: 'second change', takeover: 'take over', years: 'takes years', common: 'more common', age: 'people age'});
const AGES = ['20s', '30s', '40s', '50s', '60s', '70s', '80s'];
const AGE_V = [0.04, 0.07, 0.14, 0.27, 0.48, 0.74, 0.95];
export const SceneSeveral: React.FC = () => {
	const f = useCurrentFrame();
	const W = 70;
	const nodes: CNode[] = [
		{x: 170, y: 250, at: ON},
		{x: 170, y: 500, at: ON, clone: true, dotAt: [K5.one]},
		{x: 170, y: 760, at: ON},
		{x: 390, y: 215, at: K5.more, parent: 0}, {x: 390, y: 290, at: K5.more, parent: 0},
		{x: 390, y: 725, at: K5.more, parent: 2}, {x: 390, y: 800, at: K5.more, parent: 2},
		{x: 390, y: 450, at: K5.leaves, parent: 1, clone: true, dotAt: [K5.leaves]}, {x: 390, y: 550, at: K5.leaves, parent: 1, clone: true, dotAt: [K5.leaves]},
	];
	const g2 = [380, 460, 540, 620].map((y, i) => ({x: 610, y, at: K5.desc + i * 4, parent: i < 2 ? 7 : 8, clone: true, dotAt: [K5.desc + i * 4]}));
	nodes.push(...g2);
	const g3 = Array.from({length: 8}, (_, i) => ({x: 820, y: 345 + i * 44, at: K5.neigh + i * 3, parent: 9 + Math.floor(i / 2), clone: true, dotAt: [K5.neigh + i * 3]}));
	nodes.push(...g3);
	const hub = nodes.length - 5;
	nodes[hub] = {...nodes[hub], dotAt: [K5.neigh, K5.second]};
	const g4 = Array.from({length: 7}, (_, i) => ({x: 1050, y: 300 + i * 70, at: K5.takeover + i * 4, parent: hub, clone: true, dotAt: [K5.takeover, K5.takeover, ...(i === 3 ? [K5.takeover + 50] : [])]}));
	nodes.push(...g4);
	const hubN = nodes[hub];
	const fill = smooth(prog(f, K5.common, 40));
	return (
		<Svg>
			<Title text="Several changes, one cell line" />
			<CloneTree nodes={nodes} w={W} dimOthers={K5.leaves} />
			<Chip x={60} y={555} text="change 1" size={30} color={AMBER_INK} at={K5.one + 6} />
			<Ptr a={[hubN.x + 60, hubN.y - 60]} b={[hubN.x + 10, hubN.y - 12]} at={K5.second} color={AMBER_INK} />
			<Chip x={hubN.x + 40} y={hubN.y - 112} text="change 2" size={30} color={AMBER_INK} at={K5.second} />
			<Chip x={1100} y={590} text="change 3" size={30} color={AMBER_INK} at={K5.takeover + 50} />
			<GTag x={96} y={150} text="Module 6: body-cell mutations" size={28} anchor="start" />
			<Sx x={170} y={860} text="neighbours stay small" size={32} color={GREYT} hand at={K5.neigh} anchor="start" />
			<Sx x={660} y={860} text="one line takes over" size={36} color={AMBER_INK} hand at={K5.takeover} />
			<rect x={1250} y={170} width={574} height={680} rx={22} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<Sx x={1280} y={226} text="time" size={34} color={INK} hand at={ON} />
			<line x1={1280} x2={1790} y1={262} y2={262} stroke={INK} strokeWidth={4} />
			<path d={`M1776,250 L1792,262 L1776,274`} fill="none" stroke={INK} strokeWidth={4} />
			<g opacity={prog(f, K5.years, 12)}>
				<rect x={1290} y={244} width={(1780 - 1290) * smooth(prog(f, K5.years, 30))} height={36} rx={8} fill="#f6d48c" opacity={0.8} />
				<Sx x={1535} y={330} text="years to decades" size={40} color={AMBER_INK} anchor="middle" hand at={K5.years} />
			</g>
			<T x={1280} y={410} w={530} text="new cancers, by age" size={34} color={INK} />
			{AGES.map((a, i) => {
				const x = 1290 + i * 74, base = 760, H = 300;
				const h = H * AGE_V[i];
				return (
					<g key={a}>
						<rect x={x} y={base - h} width={56} height={h} rx={6} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" />
						<rect x={x} y={base - h * fill} width={56} height={h * fill} rx={6} fill="#7f9cbd" opacity={0.9} />
						<Sx x={x + 28} y={base + 36} text={a} size={28} color={INK} anchor="middle" weight={700} at={ON} />
					</g>
				);
			})}
			<line x1={1280} x2={1806} y1={760} y2={760} stroke={INK} strokeWidth={3} />
			<GTag x={1280} y={796} text="shape only; real data in b10" size={28} />
			<CauseChain5 lit={[K5.build]} thumbs={chainThumbs()} />
		</Svg>
	);
};
