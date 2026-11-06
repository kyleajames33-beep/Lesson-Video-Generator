// B8-09 scenes 6 to 11: the accelerator (proto-oncogenes to oncogenes, one copy enough), the brakes (tumour suppressor
// genes, both copies, an inherited copy raises risk) with the memory aid, melanoma and UV as the named environmental risk,
// benign against malignant (basement membrane), metastasis step by step, and why spread matters.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BLUE, CARD, CauseChain5, Chip, CycleRing, DepthRuler, DnaKink, DrawPath, EDGE, GREYT, GTag, GeneChip, INK, INK_SOFT, Lab, Mistake, ON, P53, Pedal, PedalIcon, Pic, PicH, PicPair, Ptr,
	RiskDial, Ring, Spark, Svg, Sx, T, TEAL, Tag, Title, chainThumbs, lerp, pbPt, prog, pulse, smooth, smoothPath, vis,
} from './parts';
import type {P2} from './parts';
import {FP, PL} from './assets';
import {K} from './common';

const RING_S = {cx: 210, cy: 300, R: 96, tr: 32};
const CH = {y: 912, h: 136};
const Chain: React.FC<{lit: (number | undefined)[]; pulseLast?: number}> = ({lit, pulseLast}) => <CauseChain5 y={CH.y} h={CH.h} lit={lit} thumbs={chainThumbs()} size={30} pulseLast={pulseLast} />;

/** A press function: steps to each value from its frame (eased). */
const steps = (s: [number, number][], start = 0) => (f: number) => {
	let v = start;
	for (const [a, to] of s) v = lerp(v, to, smooth(prog(f, a, 14)));
	return v;
};

// ---------- 6. the accelerator ----------
const K6 = K('accelerator', {which: 'Which genes', two: 'Two kinds', proto: 'Proto-oncogenes', signal: 'growth signal', acc: "They're the", jam: 'jam the', says: 'says divide', no: 'no signal', onco: 'an oncogene', one: 'one mutated copy', because: 'because', stuck: "that's stuck", over: 'overrides'});
export const SceneAccelerator: React.FC = () => {
	const f = useCurrentFrame();
	const press = steps([[K6.signal + 6, 0.8], [K6.signal + 40, 0], [K6.jam + 6, 1]])(f);
	const clamp = prog(f, K6.jam + 14, 12);
	const sigIn = smooth(prog(f, K6.signal, 26)) * (1 - prog(f, K6.jam, 14));
	const sx = lerp(1810, 1585, sigIn);
	return (
		<Svg>
			<Title text="The accelerator: proto-oncogenes" />
			<CycleRing g={RING_S} size={26} labels={false} letters={false} dot={fr => 120 + ((fr * 1.2) % 330)} gates={[{show: ON, closed: ON, open: K6.one, lit: K6.one}, {show: ON}, {show: ON}]} />
			<Sx x={210} y={470} text="G1 gate opens" size={32} color={AMBER_INK} anchor="middle" hand at={K6.one + 6} />
			<Sx x={210} y={168} text="cell cycle" size={30} color={GREYT} anchor="middle" hand at={ON} />
			<Pedal x={650} y={720} s={1.85} press={press} kind="acc" lit={1} clamp={clamp} size={44} />
			<Pedal x={1040} y={720} s={1.3} press={0.3} kind="brake" lit={1} size={40} />
			<Lab x={1170} y={230} t="proto-oncogene: a normal gene that says divide when signalled" at={K6.proto} dim={K6.onco} size={40} w={650} />
			<Lab x={1170} y={350} t="oncogene: the mutated, stuck-on version" at={K6.onco} size={42} w={650} color={AMBER_INK} />
			<Pic p={PL.inter} cx={1460} cy={560} w={250} />
			{sigIn > 0.01 ? <g opacity={Math.min(1, sigIn * 2)}><path d={`M${sx},540 l34,20 l-34,20 z`} fill="#7fbf8e" stroke="#2f8a5b" strokeWidth={3} /><Sx x={sx + 50} y={520} text="growth signal" size={30} color="#2f8a5b" hand at={ON} /></g> : null}
			<T x={1250} y={740} w={570} text="signal: divide; no signal: stop" size={36} color={INK} at={K6.signal + 10} out={K6.jam} />
			<T x={1250} y={740} w={570} text="divides with no signal" size={42} color={AMBER_INK} at={K6.no} />
			<GeneChip x={1250} y={792} w={330} text="copy 1: stuck on" color={AMBER_INK} o={0.3 + 0.7 * prog(f, K6.one, 12)} size={32} />
			<GeneChip x={1250} y={852} w={330} text="copy 2: normal" color="#9a9387" o={0.3 + 0.7 * prog(f, K6.one + 8, 12)} size={32} />
			<Sx x={1600} y={850} text="one is enough" size={36} color={AMBER_INK} hand at={K6.because} />
			<Chain lit={[ON, K6.jam]} />
		</Svg>
	);
};

// ---------- 7. the brakes ----------
const K7 = K('brakes', {tsg: 'tumour suppressor', brakes: 'the brakes', stop: 'They stop', p53: 'the gene for', oneW: 'One working copy', both: 'both copies', lost: ['be lost', 1], inherit: 'inheriting one', brca: 'BRCA1', raises: 'raises the risk', certain: 'certain', stuck: 'stuck accelerator', though: 'though real'});
export const SceneBrakes: React.FC = () => {
	const f = useCurrentFrame();
	const slack = smooth(prog(f, K7.lost, 18));
	const brakeP = slack > 0.5 ? 0 : 0.85;
	const ringO = 1 - prog(f, K7.stuck, 20);
	const cells = Array.from({length: 6}, (_, i) => [1210 + i * 100, 470] as P2);
	return (
		<Svg>
			<Title text="The brakes: tumour suppressor genes" />
			<CycleRing g={RING_S} size={26} labels={false} letters={false} o={ringO} dot={fr => (fr < K7.lost ? 120 + ((fr * 1.2) % 330) : 120 + ((fr * 2.4) % 330))} gates={[{show: ON, closed: ON, open: K7.lost, lit: K7.lost}, {show: ON}, {show: ON}]} />
			<Pedal x={430} y={640} s={1.3} press={1} kind="acc" lit={1} clamp={1} />
			<Pedal x={840} y={640} s={1.8} press={brakeP} kind="brake" lit={1} slack={slack} size={44} />
			<Lab x={1170} y={210} t="tumour suppressor gene: a brake that stops division, repairs DNA or triggers apoptosis" at={K7.tsg} dim={K7.inherit} size={38} w={650} />
			<P53 x={1010} y={350} s={40} o={prog(f, K7.p53, 14)} />
			<Sx x={1010} y={428} text="p53 gene: a brake" size={34} color={TEAL} anchor="middle" hand at={K7.p53 + 6} />
			<GeneChip x={300} y={808} w={340} text="copy 1: lost" color={AMBER_INK} o={(0.3 + 0.7 * prog(f, K7.oneW, 12)) * (1 - prog(f, K7.stuck - 10, 12))} cross={K7.oneW + 10} size={32} />
			<GeneChip x={670} y={808} w={360} text="copy 2: working" color={TEAL} o={(0.3 + 0.7 * prog(f, K7.oneW + 8, 12)) * (1 - prog(f, K7.stuck - 10, 12))} cross={K7.both + 30} size={32} />
			<Sx x={685} y={896} text="one copy: still brakes" size={38} color={TEAL} anchor="middle" hand at={K7.oneW + 30} out={K7.both + 30} />
			<Sx x={685} y={896} text="both lost: no brake" size={40} color={AMBER_INK} anchor="middle" hand at={K7.both + 30} out={K7.stuck} />
			<g>
				<rect x={1150} y={392} width={674} height={170} rx={20} fill={CARD} stroke={EDGE} strokeWidth={3} />
				{cells.map(([x, y], i) => <g key={i}><Pic p={PL.inter} cx={x + 20} cy={y} w={92} /><Spark x={x + 6} y={y + 4} s={12} at={K7.inherit + 6 + i * 3} />{i === 2 ? <Spark x={x + 34} y={y + 4} s={12} at={K7.raises + 20} /> : null}</g>)}
			</g>
			<GTag x={1160} y={584} text="BRCA1: one faulty copy inherited in every cell" size={28} at={K7.brca} />
			<RiskDial cx={1490} cy={790} r={110} val={fr => 0.12 + 0.68 * smooth(prog(fr, K7.raises, 30))} title="cancer risk" size={30} label="risk, not certainty" labelAt={K7.certain} />
			<Sx x={685} y={890} text="a stuck accelerator and failed brakes" size={52} color={BLUE} anchor="middle" hand at={K7.stuck} />
			<GTag x={330} y={150} text="where it breaks: several changes needed; genes differ between cancers" size={28} at={K7.though} />
			<Chain lit={[ON, ON]} />
		</Svg>
	);
};

// ---------- 8. melanoma and UV ----------
const K8 = K('melanoma-uv', {real: 'a real case', aus: 'Australia has', uv: 'UV light', cause: 'main cause', damages: 'UV damages', melanocytes: 'melanocytes', pigment: 'make pigment', braf: 'BRAF', knock: 'knock out', line: 'That cell line', divides: 'divides out', tumour: 'a tumour', lump: 'a lump'});
const SK8 = {cx: 900, cy: 520, w: 700};
export const SceneMelanoma: React.FC = () => {
	const f = useCurrentFrame();
	const m = pbPt(PL.skinN, SK8.cx, SK8.cy, SK8.w);
	const mc = m(FP.melanocyte[0], FP.melanocyte[1] + 60);
	const top = m(800, 380);
	const uvO = 0.35 + 0.65 * prog(f, K8.uv, 14);
	const Z = {x: 1530, y: 330, r: 150};
	return (
		<Svg>
			<Title text="Melanoma: UV as a named environmental risk" />
			<g opacity={uvO}><Pic p={PL.uv} cx={290} cy={360} w={300} /></g>
			{prog(f, K8.uv, 10) > 0.01 ? <g opacity={prog(f, K8.uv, 14) * 0.8}>
				{[0, 1, 2].map(i => <DrawPath key={i} d={`M${330 + i * 22},${250 + i * 8} L${top[0] - 140 + i * 90},${top[1] + i * 10}`} at={K8.uv + i * 4} dur={18} color="#8a6fd1" width={9} />)}
			</g> : null}
			<GTag x={150} y={560} text="b06: cancer group" size={28} />
			<GTag x={150} y={614} text="b07: UV and DNA" size={28} />
			<Tag x={110} y={680} w={420} text="AIHW, Cancer data in Australia 2025: about 17,400 new melanoma cases projected" size={28} color="#8d857a" ink={GREYT} fill="#f1eee7" at={K8.aus} />
			<PicPair a={PL.skinN} b={PL.skinM} cx={SK8.cx} cy={SK8.cy} w={SK8.w} at={K8.divides + 10} dur={60} />
			<g>
				<defs><clipPath id="b09-mel"><circle cx={Z.x} cy={Z.y} r={Z.r} /></clipPath></defs>
				<g clipPath="url(#b09-mel)"><Pic p={PL.skinN} cx={Z.x - (mc[0] - SK8.cx) * 3.2} cy={Z.y - (mc[1] - SK8.cy) * 3.2} w={SK8.w * 3.2} /></g>
				<circle cx={Z.x} cy={Z.y} r={Z.r} fill="none" stroke={INK_SOFT} strokeWidth={4} />
			</g>
			<DrawPath d={`M${mc[0] + 16},${mc[1] - 6} L${Z.x - Z.r * 0.95},${Z.y + 40}`} at={K8.melanocytes} dur={14} color={TEAL} width={4} dash="10 8" />
			<circle cx={mc[0]} cy={mc[1]} r={18} fill="none" stroke={TEAL} strokeWidth={4} opacity={prog(f, K8.melanocytes, 12)} />
			<DnaKink x={Z.x - 100} y={Z.y + 70} w={200} at={K8.damages} />
			<T x={1350} y={530} w={470} text="melanocyte: a skin cell that makes pigment" size={36} color={TEAL} at={K8.melanocytes} />
			<GTag x={1700} y={170} text="b07" size={28} />
			<g opacity={0.3 + 0.7 * prog(f, K8.braf, 12)}>
				<Pedal x={1390} y={690} s={0.32} press={prog(f, K8.braf, 12)} kind="acc" lit={1} clamp={prog(f, K8.braf + 10, 10)} label={false} />
				<Chip x={1450} y={620} text="BRAF: accelerator stuck on" size={32} color={AMBER_INK} />
			</g>
			<g opacity={0.3 + 0.7 * prog(f, K8.knock, 12)}>
				<Pedal x={1390} y={790} s={0.32} press={0} kind="brake" slack={prog(f, K8.knock, 12)} label={false} />
				<Chip x={1450} y={720} text="brake genes lost" size={32} color={AMBER_INK} />
				<GTag x={1700} y={724} text="e.g. CDKN2A" size={26} />
			</g>
			<T x={1350} y={850} w={470} text="tumour: a lump of cells that keep dividing" size={36} color={AMBER_INK} at={K8.lump} />
			<Tag x={560} y={860} w={680} text="carcinogens: chemical, physical (UV), biological (some viruses)" size={26} color="#8d857a" ink={GREYT} fill="#f1eee7" at={K8.real} />
			<Chain lit={[ON, ON, K8.divides, K8.tumour]} />
		</Svg>
	);
};

// ---------- 9. benign or malignant ----------
const K9 = K('benign-malignant', {compare: 'Compare that', benign: 'A benign', stays: 'stays where', invade: "doesn't invade", mal: 'A malignant', our: 'our melanoma', does: 'does', break: 'break through', sheet: 'thin sheet', bm: 'basement membrane', below: 'layer below', vessels: 'blood and lymph', remember: 'A way', moves: 'malignant moves', bound: 'bound'});
const BLK = {w: 640, y: 500, l: 470, r: 1300};
export const SceneBenign: React.FC = () => {
	const f = useCurrentFrame();
	const mL = pbPt(PL.mole, BLK.l, BLK.y, BLK.w);
	const mR = pbPt(PL.skinM, BLK.r, BLK.y, BLK.w);
	const lineL = smoothPath(FP.bm.map(([x, y]) => mL(x, y) as P2));
	const left = FP.bm.filter(([x]) => x <= FP.gap[0]), right = FP.bm.filter(([x]) => x >= FP.gap[1]);
	const lineR1 = smoothPath(left.map(([x, y]) => mR(x, y) as P2)), lineR2 = smoothPath(right.map(([x, y]) => mR(x, y) as P2));
	const brk = smooth(prog(f, K9.bm + 40, 20));
	const melO = 0.55 + 0.45 * prog(f, K9.our, 14);
	const moleC = mL(FP.moleC[0], FP.moleC[1]);
	const deep = mR(FP.melDeep[0], FP.melDeep[1]);
	const lyY = mR(0, FP.lymphY)[1];
	const vp = pulse(f, K9.vessels + 6, 40);
	return (
		<Svg>
			<Title text="Benign or malignant?" />
			<Sx x={1824} y={112} text="Malignant moves; benign is bound." size={50} color={BLUE} anchor="end" hand at={K9.moves} />
			<Sx x={BLK.l} y={192} text="benign mole: stays put" size={40} color={TEAL} anchor="middle" hand at={ON} />
			<Sx x={BLK.r} y={192} text="malignant melanoma: invades" size={40} color={AMBER_INK} anchor="middle" hand at={K9.mal} />
			<Pic p={PL.mole} cx={BLK.l} cy={BLK.y} w={BLK.w} />
			<g opacity={melO}><Pic p={PL.skinM} cx={BLK.r} cy={BLK.y} w={BLK.w} /></g>
			<Ring cx={moleC[0]} cy={moleC[1]} rx={58} ry={60} at={K9.invade} color={TEAL} width={4} />
			<Sx x={moleC[0] + 70} y={moleC[1] - 54} text="bound" size={36} color={TEAL} hand at={K9.invade + 8} />
			{prog(f, K9.bm, 10) > 0.01 ? <g opacity={prog(f, K9.bm, 12)}>
				<DrawPath d={lineL} at={K9.bm} dur={30} color="#2a8fd6" width={6} />
				<DrawPath d={lineR1} at={K9.bm} dur={20} color="#2a8fd6" width={6} />
				<DrawPath d={lineR2} at={K9.bm + 20} dur={20} color="#2a8fd6" width={6} />
				{brk < 0.5 ? <DrawPath d={smoothPath(FP.bm.filter(([x]) => x > FP.gap[0] - 40 && x < FP.gap[1] + 40).map(([x, y]) => mR(x, y) as P2))} at={K9.bm + 10} dur={14} color="#2a8fd6" width={6} /> : null}
			</g> : null}
			<Ring cx={deep[0]} cy={deep[1] - 10} rx={70} ry={50} at={K9.break} color={AMBER_INK} width={5} />
			<Ptr a={[deep[0] + 150, deep[1] + 120]} b={[deep[0] + 30, deep[1] + 20]} at={K9.bm + 40} color={AMBER_INK} />
			<Sx x={deep[0] + 150} y={deep[1] + 160} text="breaks through" size={38} color={AMBER_INK} hand at={K9.bm + 40} />
			{vp > 0.01 ? <rect x={BLK.r - 300} y={lyY - 60} width={560} height={120} rx={40} fill={AMBER} opacity={0.22 * vp} /> : null}
			<g opacity={prog(f, K9.vessels, 12)}>
				<DrawPath d={`M${BLK.r - 290},${lyY} C${BLK.r - 150},${lyY - 24} ${BLK.r},${lyY + 20} ${BLK.r + 160},${lyY - 10}`} at={K9.vessels} dur={20} color="#b7d6c8" width={10} />
				<Sx x={BLK.r + 180} y={lyY + 10} text="lymph vessel" size={34} color={TEAL} hand at={K9.vessels + 8} />
			</g>
			<T x={96} y={826} w={760} text="basement membrane: a thin sheet under the top layer of skin" size={36} color="#1f6fa8" at={K9.sheet} />
			<GTag x={96} y={150} text="most moles never become melanoma" size={28} at={K9.stays} />
			<GTag x={1000} y={846} text="lymph: fluid that drains back to the blood" size={28} at={K9.vessels + 20} />
			<Chain lit={[ON, ON, ON, ON]} />
		</Svg>
	);
};

// ---------- 10. metastasis ----------
const K10 = K('metastasis', {called: 'called metastasis', several: 'several steps', break: 'break away', lost: "they've lost", squeeze: 'They squeeze', carried: 'carried off', most: 'Most die', few: 'A few survive', leave: 'leave the', grow: 'grow a', secondary: 'secondary tumour', node: 'nearby lymph', organs: 'then organs', lungs: 'lungs', brain: 'brain'});
const STEPS: [string, 'break' | 'squeeze' | 'most' | 'leave' | 'grow'][] = [['1 break away', 'break'], ['2 enter a vessel', 'squeeze'], ['3 survive the trip', 'most'], ['4 leave the vessel', 'leave'], ['5 grow a secondary tumour', 'grow']];
export const SceneMetastasis: React.FC = () => {
	const f = useCurrentFrame();
	const V = {cx: 830, cy: 450, w: 680};
	const mv = pbPt(PL.vessel, V.cx, V.cy, V.w);
	const snapA = mv(700, 640), snapB = mv(860, 700);
	const snap = prog(f, K10.lost + 10, 10);
	const nodeO = 0.4 + 0.6 * prog(f, K10.node, 14);
	const orgO = 0.3 + 0.7 * prog(f, K10.lungs, 14);
	const stepX = (i: number) => 96 + i * 352;
	return (
		<Svg>
			<Title text="Metastasis, step by step" />
			
			<Pic p={PL.skinM} cx={240} cy={340} w={300} />
			<T x={110} y={600} w={360} text="metastasis: spread to a new site" size={40} color={BLUE} at={K10.called} />
			<Sx x={240} y={530} text="our melanoma" size={34} color={INK} anchor="middle" hand at={ON} />
			<DrawPath d={`M${305},${380} L${V.cx - V.w / 2 + 40},${V.cy - 40}`} at={ON} color={TEAL} width={4} dash="10 8" />
			<circle cx={290} cy={378} r={20} fill="none" stroke={TEAL} strokeWidth={4} />
			<Pic p={PL.vessel} cx={V.cx} cy={V.cy} w={V.w} />
			<Sx x={V.cx + 40} y={V.cy + 300} text="lymph vessel wall, opened" size={30} color={GREYT} anchor="middle" hand at={ON} />
			{snap > 0.01 ? <g opacity={1 - 0.3 * prog(f, K10.squeeze, 12)}>
				<line x1={snapA[0]} y1={snapA[1]} x2={lerp(snapA[0], snapB[0], 0.42)} y2={lerp(snapA[1], snapB[1], 0.42) - 8 * snap} stroke={RED_} strokeWidth={9} strokeLinecap="round" />
				<line x1={lerp(snapA[0], snapB[0], 0.58)} y1={lerp(snapA[1], snapB[1], 0.58) + 8 * snap} x2={snapB[0]} y2={snapB[1]} stroke={RED_} strokeWidth={9} strokeLinecap="round" />
			</g> : <line x1={snapA[0]} y1={snapA[1]} x2={snapB[0]} y2={snapB[1]} stroke={TEAL} strokeWidth={6} strokeLinecap="round" opacity={prog(f, K10.break, 10)} />}
			{vis(f, K10.break, undefined, 10) > 0.01 ? <Sx x={snapA[0] - 30} y={snapA[1] + 80} text="links snap" size={32} color={RED_} hand at={K10.lost + 12} /> : null}
			{[0, 1, 2, 3, 4].map(i => {
				const t0 = K10.most + i * 6;
				const u = smooth(prog(f, t0, 60));
				const x = lerp(V.cx + 260, 1330, u), y = lerp(V.cy + 140, 420 + i * 6, u) + Math.sin(u * 6 + i) * 10;
				const dies = i !== 2;
				const g = dies ? prog(f, t0 + 30, 16) : 0;
				const v = prog(f, t0, 8);
				return v > 0.01 ? <circle key={i} cx={x} cy={y} r={11} fill={g > 0.5 ? '#c9c2b5' : '#4a2e22'} stroke={CARD} strokeWidth={2} opacity={v * (1 - 0.5 * g)} /> : null;
			})}
			<Sx x={1250} y={560} text="most die" size={36} color={GREYT} hand at={K10.most + 40} anchor="middle" />
			<g opacity={nodeO}><PicPair a={PL.node} b={PL.nodeM} cx={1560} cy={400} w={400} at={K10.node + 10} dur={50} /></g>
			<Sx x={1560} y={185} text="nearby lymph node" size={36} color={INK} anchor="middle" hand at={K10.node} />
			<T x={1370} y={665} w={460} text="secondary tumour: still melanoma cells" size={34} color={AMBER_INK} at={K10.node + 30} />
			<g opacity={orgO}>
				{[[PL.lungs, 1380], [PL.liver, 1560], [PL.brain, 1740]].map(([p, x], i) => <PicH key={i} p={p as typeof PL.lungs} cx={x as number} cy={790} h={i === 1 ? 90 : 120} />)}
			</g>
			{prog(f, K10.lungs, 10) > 0.01 ? <g opacity={prog(f, K10.lungs, 12)}>
				{[1380, 1560, 1740].map((x, i) => <DrawPath key={i} d={`M1560,610 L${x},${720}`} at={K10.lungs + i * 5} dur={12} color={AMBER_INK} width={3} dash="8 7" />)}
			</g> : null}
			{STEPS.map(([t, k], i) => {
				const a = K10[k];
				const nxt = i < 4 ? K10[STEPS[i + 1][1]] : undefined;
				const lit = prog(f, a, 12);
				const dim = nxt === undefined ? 0 : prog(f, nxt + 30, 14);
				return <Chip key={t} x={stepX(i)} y={838} text={t} size={30} color={lit > 0.5 && dim < 0.5 ? AMBER_INK : lit > 0.5 ? BLUE : GREYT} ink={INK} o={0.35 + 0.65 * lit * (1 - 0.35 * dim)} />;
			})}
			<Mistake x={96} y={710} text="it spreads because it got too big" size={30} at={K10.brain + 10} cross={K10.brain + 24} />
			<Chain lit={[ON, ON, ON, ON, K10.secondary]} />
		</Svg>
	);
};
const RED_ = '#c4432f';

// ---------- 11. why spread matters ----------
const K11 = K('why-spread-matters', {deaths: 'most cancer', once: 'Once tumours', harder: 'harder to', early: 'finding melanoma', thin: "it's thin", reached: 'reached the', cutting: 'cutting it', often: 'often successful', main: 'the main cause', slip: 'slip', slop: 'slop', slap: 'slap', seek: 'seek', slide: 'slide'});
export const SceneWhySpread: React.FC = () => {
	const f = useCurrentFrame();
	const melO = prog(f, K11.early + 6, 16);
	const sunO = 0.35 + 0.65 * prog(f, K11.main, 14);
	const orgO = 1 - prog(f, K11.early - 6, 12);
	const B = {cx: 400, cy: 640, w: 520};
	const mb = pbPt(PL.skinM, B.cx, B.cy, B.w);
	const surf = mb(1500, 600)[1], mid = mb(1500, 900)[1], deep = mb(1500, 1150)[1];
	const words: [string, number][] = [['slip', K11.slip], ['slop', K11.slop], ['slap', K11.slap], ['seek', K11.seek], ['slide', K11.slide]];
	return (
		<Svg>
			<Title text="Why spread matters" />
			<CauseChain5 y={160} h={170} lit={[ON, ON, ON, ON, ON]} thumbs={chainThumbs()} size={32} pulseLast={K11.deaths} />
			<GTag x={96} y={350} text="metastasis: the main cause of cancer deaths" size={28} at={K11.deaths + 10} />
			<g opacity={orgO}>
				<PicH p={PL.lungs} cx={300} cy={600} h={330} />
				<Pic p={PL.liver} cx={700} cy={600} w={380} />
				<PicH p={PL.brain} cx={1070} cy={600} h={290} />
				<Sx x={680} y={830} text="tumours in several organs: harder to remove" size={40} color={INK} anchor="middle" hand at={K11.harder} />
			</g>
			<g opacity={melO}><Pic p={PL.skinM} cx={B.cx} cy={B.cy} w={B.w} /></g>
			<DepthRuler x={720} y0={surf} y1={deep} at={K11.early} />
			<g opacity={prog(f, K11.thin, 12)}>
				<path d={`M748,${surf} L770,${surf} L770,${mid} L748,${mid}`} fill="none" stroke={TEAL} strokeWidth={5 + 2 * prog(f, K11.often, 12)} />
				<Sx x={786} y={(surf + mid) / 2 + 12} text="thin: found early" size={36} color={TEAL} hand at={K11.thin} />
				<path d={`M748,${mid + 10} L770,${mid + 10} L770,${deep} L748,${deep}`} fill="none" stroke={AMBER_INK} strokeWidth={5} opacity={1 - 0.5 * prog(f, K11.often, 12)} />
				<Sx x={786} y={(mid + deep) / 2 + 12} text="deep: reached vessels" size={36} color={AMBER_INK} hand at={K11.reached} />
			</g>
			<Framed_ x={110} y={980} text="early removal is often successful" at={K11.cutting} />
			<Tag x={770} y={720} w={420} text="AIHW 2025: five-year relative survival 94% (2017 to 2021), all stages; not a personal cure rate" size={26} color="#8d857a" ink={GREYT} fill="#f1eee7" at={K11.often} />
			<g opacity={sunO}><Pic p={PL.sunP} cx={1560} cy={620} w={420} /></g>
			{words.map(([w, a], i) => <Chip key={w} x={1300 + i * 106} y={820} text={w} size={30} color={TEAL} at={ON} o={0.3 + 0.7 * prog(f, a, 10) * (i < 4 ? 1 - 0.4 * prog(f, words[i + 1][1] + 10, 10) : 1)} />)}
			<GTag x={1720} y={430} text="b07" size={26} />
		</Svg>
	);
};
const Framed_: React.FC<{x: number; y: number; text: string; at: number}> = ({x, y, text, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	return <g opacity={v}><rect x={x - 14} y={y - 52} width={640} height={70} rx={14} fill={CARD} stroke={TEAL} strokeWidth={5} /><Sx x={x} y={y} text={text} size={40} color={TEAL} hand weight={800} at={ON} /></g>;
};
export {EDGE, AMBER};
