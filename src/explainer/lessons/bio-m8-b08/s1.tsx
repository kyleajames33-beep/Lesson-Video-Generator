// B8-08 scenes 1 to 4: two eras of nutritional disease (too little, too much), the chain nutrient, job, change, effect
// (deficiency takes away a job; excess overloads a system), iron recalled then the cause question (diet, absorption or
// blood loss), and vitamins C and D with the memory line. The nutrient chain owns the bottom of the frame from scene 3.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, BLUE, BalanceBeam, CARD, Chain, ChainRows, Chip, DrawPath, EDGE, GREEN, GREYT, GTag, Gear, INK, INK_SOFT, PathwayStrip, Pic, PicH, PicPair, Svg, Sx, T, TEAL, Title,
	lerp, mw, pbPt, prog, smooth, tiltSteps, vis,
} from './parts';
import type {SBox} from './parts';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;
/** A label that fades to 45% from `dim`. */
export const Lab: React.FC<{x: number; y: number; t: string; at: number; dim?: number; out?: number; size?: number; w?: number; color?: string; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, t, at, dim, out, size = 40, w = 700, color = INK, anchor}) => {
	const f = useCurrentFrame();
	const d = dim === undefined ? 0 : prog(f, dim, 14);
	return <g opacity={1 - 0.55 * d}><T x={x} y={y} text={t} size={size} w={w} color={color} at={at} out={out} anchor={anchor} /></g>;
};
export const Ptr: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; color?: string}> = ({a, b, at, out, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={12} color={color} width={3.5} /><circle cx={b[0]} cy={b[1]} r={8} fill={color} /></g>;
};

// ---------- 1. hook ----------
const K1 = K('hook', {century: 'century', rickets: 'rickets', bones: 'growing bones', scurvy: 'scurvy', gums: 'gums bleed', today: 'Today', type2: 'type 2', heart: 'heart disease', one: 'One set', little: 'too little', excess: 'long-term excess', other: 'alongside other', q: 'So how'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Svg>
			<Title text="How does nutrition change disease risk?" />
			{[[96, 'about 1900', K1.century], [990, 'today', K1.today]].map(([x, t, a]) => (
				<g key={t as string}>
					<rect x={x as number} y={160} width={834} height={640} rx={24} fill={CARD} stroke={f >= (a as number) ? BLUE : EDGE} strokeWidth={f >= (a as number) ? 4 : 3} />
					<Sx x={(x as number) + 30} y={222} text={t as string} size={46} color={BLUE} hand at={-1000} />
				</g>
			))}
			<PicH p={PL.legR} cx={190} cy={480} h={460} />
			<Sx x={190} y={756} text="rickets" size={42} color={INK} anchor="middle" hand at={K1.rickets} />
			<T x={262} y={330} w={230} text="growing bones soften and bend" size={32} color={INK} at={K1.bones} />
			<Pic p={PL.colW} cx={710} cy={450} w={360} />
			<Sx x={710} y={700} text="scurvy" size={42} color={INK} anchor="middle" hand at={K1.scurvy} />
			<GTag x={710} y={720} text="weak tissue, leaking vessel" size={28} anchor="middle" at={K1.gums} />
			<Pic p={PL.pancreas} cx={1220} cy={430} w={400} />
			<Sx x={1220} y={620} text="type 2 diabetes" size={42} color={INK} anchor="middle" hand at={K1.type2} />
			<Pic p={PL.artP} cx={1610} cy={440} w={330} />
			<Sx x={1610} y={700} text="heart disease" size={42} color={INK} anchor="middle" hand at={K1.heart} />
			<BalanceBeam x={513} y={880} tilt={tiltSteps([[K1.little, -1]])} L={110} size={36} />
			<BalanceBeam x={1407} y={880} tilt={tiltSteps([[K1.excess, 1]])} L={110} size={36} />
			<GTag x={1180} y={990} text="alongside other risk factors" size={30} at={K1.other} />
		</Svg>
	);
};

// ---------- 2. one chain ----------
const K2 = K('one-chain', {acquired: 'acquired cause', chain: 'chain', nutrient: 'the nutrient', job: 'normal job', changes: 'what changes', little: 'too little', defi: 'deficiency', much: 'too much', excess: 'excess', link: 'Then link', effect: 'effect', takes: 'takes away', over: 'overloads'});
export const SceneChain: React.FC = () => {
	const f = useCurrentFrame();
	const spinA = f < K2.takes ? f / 14 : K2.takes / 14;
	const spinB = K2.over > f ? f / 14 : K2.over / 14 + (f - K2.over) / 3;
	const boxes: SBox[] = [
		{head: 'nutrient', w: 336, showAt: K2.chain, litAt: K2.nutrient, thumbW: 130, rows: [{t: 'what is eaten', at: K2.nutrient + 6}], thumb: (x, y, w, h) => <PicH p={PL.bread} cx={x + w / 2} cy={y + h / 2} h={h * 0.44} />},
		{head: 'normal job', w: 336, showAt: K2.chain + 8, litAt: K2.job, thumbW: 150, rows: [{t: 'its job in the body', at: K2.job + 6}], thumb: (x, y, w, h) => <g><Gear x={x + 44} y={y + h * 0.36} r={30} spin={spinA} grey={f >= K2.takes ? 1 : 0} /><Gear x={x + 104} y={y + h * 0.72} r={30} spin={-spinB} hot={f >= K2.over ? 1 : 0} /></g>},
		{head: 'change', w: 336, showAt: K2.chain + 16, litAt: K2.changes, thumbW: 130, rows: [{t: 'too little, or too much?', at: K2.changes + 6}], thumb: (x, y, w, h) => <Pic p={PL.rbcFe} cx={x + w / 2} cy={y + h / 2} w={w * 0.92} />},
		{head: 'effect', w: 336, showAt: K2.chain + 24, litAt: K2.effect, thumbW: 150, rows: [{t: 'the effect on health', at: K2.effect}], thumb: (x, y, w, h) => <g><PicH p={PL.legR} cx={x + 30} cy={y + h / 2} h={h * 0.9} /><PicH p={PL.pancreas} cx={x + 100} cy={y + h / 2} h={h * 0.3} /></g>},
	];
	return (
		<Svg>
			<Title text="One chain for every nutrient" />
			<GTag x={96} y={150} text="b06: nutrition is an acquired cause" size={30} />
			<g opacity={0.9}>
				<PicH p={PL.legR} cx={150} cy={300} h={210} />
				<Pic p={PL.colW} cx={340} cy={300} w={230} />
				<Pic p={PL.pancreas} cx={1500} cy={290} w={280} />
				<Pic p={PL.artP} cx={1730} cy={300} w={200} />
			</g>
			<Sx x={480} y={312} text="too little" size={38} color={AMBER_INK} hand at={K2.little} />
			<Sx x={1400} y={312} text="too much" size={38} color={AMBER_INK} anchor="end" hand at={K2.much} />
			<rect x={96} y={420} width={196} height={300} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<BalanceBeam x={194} y={540} tilt={tiltSteps([[K2.little, -1], [K2.much, 1], [K2.takes, -1], [K2.over, 1]])} L={70} size={36} single />
			<PathwayStrip x={310} y={420} h={300} boxes={boxes} gap={56} size={40} headSize={36} />
			<T x={96} y={812} w={1728} text="deficiency: too little, for long enough that a process fails" size={44} at={K2.defi} />
			<T x={96} y={882} w={1728} text="excess: too much over years, overloading a system" size={44} at={K2.excess} />
			<Sx x={96} y={980} text="A deficiency takes away a job." size={46} color={GREYT} hand at={K2.takes} />
			<Sx x={900} y={980} text="An excess overloads a system." size={46} color={AMBER_INK} hand at={K2.over} />
		</Svg>
	);
};

// ---------- 3. iron ----------
/** A zoomed red cell (clipped from the plate) with a coded haemoglobin glyph: iron docks into each of four haem sites;
 *  on "too little iron" two irons leave, and O2 rides only where iron sits. */
const HbInset: React.FC<{X: number; Y: number; R: number; f0: number; little: number; hb: number; from: [number, number]}> = ({X, Y, R, f0, little, hb, from}) => {
	const f = useCurrentFrame();
	const W = 900, k = W / 1446;
	const pcx = X - (1077 - 1027) * k, pcy = Y - (1024 - 1010) * k;
	const sites: [number, number][] = [[-38, -36], [38, -36], [-38, 36], [38, 36]];
	return (
		<g>
			<DrawPath d={`M${from[0]},${from[1]} L${X - R},${Y}`} at={-1000} color={INK_SOFT} width={3} dash="10 8" />
			<defs><clipPath id="b08-hbclip"><circle cx={X} cy={Y} r={R} /></clipPath></defs>
			<g clipPath="url(#b08-hbclip)"><PicPair a={PL.rbc} b={PL.rbcFe} cx={pcx} cy={pcy} w={W} at={hb} dur={40} /></g>
			<circle cx={X} cy={Y} r={R} fill="none" stroke={INK_SOFT} strokeWidth={4} />
			{sites.map(([dx, dy], i) => {
				const dock = smooth(prog(f, f0 + 10 + i * 6, 18));
				const gone = i >= 2 ? smooth(prog(f, little + 10 + (i - 2) * 8, 18)) : 0;
				const t = dock * (1 - gone);
				const ox = X + dx + (1 - t) * dx * 2.2, oy = Y + dy + (1 - t) * dy * 2.2;
				const o2 = i < 2 ? prog(f, hb + 20, 12) : 0;
				return (
					<g key={i}>
						<circle cx={X + dx} cy={Y + dy} r={33} fill="#b23a48" opacity={0.85} stroke="#7a1f2b" strokeWidth={3} />
						{t > 0.02 ? <g opacity={t}><circle cx={ox} cy={oy} r={20} fill="#c9792b" stroke={INK} strokeWidth={2.5} /><Sx x={ox} y={oy + 9} text="Fe" size={26} color="#fffdf8" anchor="middle" weight={800} at={-1000} /></g> : null}
						{o2 > 0.01 ? <circle cx={X + dx * 1.75} cy={Y + dy * 1.75} r={10} fill={TEAL} stroke="#fffdf8" strokeWidth={2} opacity={o2} /> : null}
					</g>
				);
			})}
			<Sx x={X} y={Y + R + 34} text="iron sits in haemoglobin" size={30} color={INK} anchor="middle" hand at={-1000} />
		</g>
	);
};
const K3 = K('iron', {iron: 'Take iron', chain: 'its chain', little: 'too little iron', hb: 'haemoglobin', smaller: 'smaller', less: 'less oxygen', anaemia: 'anaemia', question: 'nutrition question', why: 'why the iron', diet: 'A diet', gut: 'a gut', nutr: 'nutritional deficiency', losing: 'losing blood', periods: 'heavy periods', isnt: "isn't the diet", check: 'So check', call: 'call it'});
export const SceneIron: React.FC = () => {
	const f = useCurrentFrame();
	const mv = smooth(prog(f, K3.question, 30));
	const cx = lerp(400, 290, mv), cy = lerp(480, 420, mv), w = lerp(560, 360, mv);
	const hbBar = 1 - 0.45 * smooth(prog(f, K3.hb, 24));
	const oxBar = 1 - 0.45 * smooth(prog(f, K3.less, 24));
	const rx = 760, root: [number, number] = [rx - 20, 466];
	const br = (i: number): [number, number] => [rx + 60, 560 + i * 92];
	const grn = prog(f, K3.nutr, 14);
	const glow = prog(f, K3.call, 14);
	return (
		<Svg>
			<Title text="Iron: where did it go?" />
			<PicPair a={PL.rbc} b={PL.rbcFe} cx={cx} cy={cy} w={w} at={K3.hb} dur={40} />
			<GTag x={96} y={790} text="b06: the iron chain" size={30} />
			<Ptr a={[700, 330]} b={pbPt(PL.rbc, cx, cy, w)(1077, 1024)} at={K3.smaller} out={K3.question} color={AMBER_INK} />
			<Sx x={700} y={318} text="smaller, paler cells" size={40} color={AMBER_INK} hand at={K3.smaller} out={K3.question} />
			<HbInset X={1090} Y={300} R={125} f0={K3.iron} little={K3.little} hb={K3.hb} from={pbPt(PL.rbc, cx, cy, w)(1077, 1024)} />
			<g>
				<Sx x={1270} y={212} text="haemoglobin" size={36} color={INK} hand at={-1000} />
				<rect x={1270} y={228} width={550} height={62} rx={12} fill={CARD} stroke={EDGE} strokeWidth={3} />
				<rect x={1274} y={232} width={542 * hbBar} height={54} rx={10} fill="#c8372d" opacity={0.8} />
				<Sx x={1270} y={336} text="oxygen carried" size={36} color={INK} hand at={-1000} />
				<rect x={1270} y={352} width={550} height={62} rx={12} fill={CARD} stroke={EDGE} strokeWidth={3} />
				<rect x={1274} y={356} width={542 * oxBar} height={54} rx={10} fill={TEAL} opacity={0.8} />
				<Sx x={1400} y={468} text="iron-deficiency anaemia" size={42} color={AMBER_INK} hand at={K3.anaemia} />
			</g>
			<g opacity={prog(f, K3.why, 12)}>
				<Chip x={rx - 240} y={430} text="why is the iron low?" size={40} color={BLUE} ink={INK} />
				{[0, 1, 2].map(i => <path key={i} d={`M${root[0]},${root[1] + 30} Q${root[0]},${br(i)[1] - 10} ${br(i)[0] - 14},${br(i)[1] - 12}`} fill="none" stroke={INK_SOFT} strokeWidth={4} opacity={prog(f, [K3.diet, K3.gut, K3.losing][i], 12)} />)}
			</g>
			<Chip x={br(0)[0]} y={br(0)[1] - 38} text="too little iron in the diet" size={38} color={GREEN} ink={INK} at={K3.diet} />
			<Chip x={br(1)[0]} y={br(1)[1] - 38} text="poorly absorbed in the gut" size={38} color={GREEN} ink={INK} at={K3.gut} />
			{grn > 0.01 ? <g opacity={grn}>
				<path d={`M${1330},${br(0)[1] - 34} L${1360},${br(0)[1] - 34} L${1360},${br(1)[1] + 20} L${1330},${br(1)[1] + 20}`} fill="none" stroke={GREEN} strokeWidth={5 + 3 * glow} />
				{glow > 0.01 ? <rect x={1376} y={br(0)[1] + 2} width={mw('nutritional deficiency', 40, true, 700) + 20} height={56} rx={14} fill={GREEN} opacity={0.15 * glow} /> : null}
				<Sx x={1386} y={br(0)[1] + 44} text="nutritional deficiency" size={40} color={GREEN} hand at={-1000} />
			</g> : null}
			<Chip x={br(2)[0]} y={br(2)[1] - 38} text="blood loss (heavy periods, bleeding in the gut)" size={36} color="#8d857a" ink={INK} at={K3.losing} />
			<GTag x={br(2)[0] + 40} y={br(2)[1] + 30} text="not the diet" size={32} at={K3.isnt} />
			<Chip x={1180} y={br(2)[1] + 28} text="check the cause before the category" size={34} color={AMBER_INK} ink={INK} at={K3.check} />
			<Chain tilt={tiltSteps([[K3.little, -1]])} boxes={ChainRows({
				n: [{t: 'iron', at: K3.iron}],
				j: [{t: 'builds haemoglobin, carries O₂', at: K3.hb}],
				c: [{t: 'smaller, paler cells, less O₂', at: K3.smaller}],
				e: [{t: 'iron-deficiency anaemia', at: K3.anaemia}],
			})} />
		</Svg>
	);
};

// ---------- 4. vitamins C and D ----------
const K4 = K('vitamins-c-d', {vitC: 'Vitamin C', enzymes: 'enzymes', strong: 'strong collagen', rope: 'rope-like', gums: 'gums,', skin: 'skin and', walls: 'vessel walls', without: 'Without it', weak: 'is weak', leak: 'vessels leak', bleed: 'gums bleed', scurvy: "That's scurvy", vitD: 'Vitamin D', gut: 'your gut', calcium: 'calcium', without2: ['Without it', 2], harden: 'harden', bend: 'bend under', rickets: "That's rickets", mem: 'Scurvy has', thinkD: 'think vitamin', sun: 'sunlight', foods: 'some foods'});
/** A coded close-up of one collagen fibre: three strands twisted tightly like a rope; from `weak` they loosen and fray. */
const Rope: React.FC<{x: number; y: number; w: number; h: number; weak: number}> = ({x, y, w, h, weak}) => {
	const f = useCurrentFrame();
	const k = smooth(prog(f, weak, 40));
	const cy = y + h * 0.5, x0 = x + 30, x1 = x + w - 30;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<Sx x={x + 16} y={y + 36} text="one collagen fibre, close up" size={30} color={INK} hand at={-1000} />
			{[0, 1, 2].map(i => {
				const pts: string[] = [];
				for (let t = 0; t <= 1.0001; t += 0.02) {
					const amp = 30 + 22 * k;
					const ph = t * Math.PI * (7 - 3 * k) + (i * Math.PI * 2) / 3;
					pts.push(`${x0 + (x1 - x0) * t},${cy + 10 + amp * Math.sin(ph) + k * (i - 1) * 16}`);
				}
				return <path key={i} d={'M' + pts.join(' L')} fill="none" stroke={['#d98a8a', '#c56f78', '#e3a3a0'][i]} strokeWidth={12 - 5 * k} strokeLinecap="round" strokeDasharray={k > 0.05 ? `${70 - 20 * k} ${2 + 12 * k}` : undefined} opacity={1 - 0.35 * k} />;
			})}
			<Sx x={x + w - 16} y={y + h - 14} text={k > 0.5 ? 'weak: loose, frayed' : 'strong: tightly wound'} size={30} color={k > 0.5 ? AMBER_INK : INK} anchor="end" hand at={-1000} />
		</g>
	);
};
const CO = {cx: 300, cy: 420, w: 420};
const BO = {cx: 1500, cy: 430, h: 560};
export const SceneVitamins: React.FC = () => {
	const f = useCurrentFrame();
	const cp = pbPt(PL.colS, CO.cx, CO.cy, CO.w);
	const bw = (BO.h * (PL.legN.box[2] - PL.legN.box[0])) / (PL.legN.box[3] - PL.legN.box[1]);
	const bp = pbPt(PL.legN, BO.cx, BO.cy, bw);
	const stopCa = prog(f, K4.harden, 20);
	const mem = prog(f, K4.mem, 14);
	const cD = mem;
	return (
		<Svg>
			<Title text="Vitamin C and vitamin D" />
			<PicPair a={PL.colS} b={PL.colW} cx={CO.cx} cy={CO.cy} w={CO.w} at={K4.weak} dur={40} />
			<DrawPath d={`M${cp(FP.fibre[0], FP.fibre[1]).join(',')} L540,330`} at={-1000} color={INK_SOFT} width={3} dash="10 8" />
			<Rope x={540} y={200} w={380} h={270} weak={K4.weak} />
			<Lab x={540} y={514} w={400} t="collagen: rope-like protein" at={K4.rope} dim={K4.weak} size={34} color={INK} />
			{([['gums', K4.gums, 540], ['skin', K4.skin, 650], ['vessel walls', K4.walls, 750]] as [string, number, number][]).map(([t, a, x]) => <GTag key={t} x={x} y={540} text={t} size={30} at={a} out={K4.weak} />)}
			<Ptr a={[530, 610]} b={cp(FP.leak[0], FP.leak[1])} at={K4.leak} color={AMBER_INK} />
			<Lab x={540} y={610} w={380} t="weak collagen: small vessels leak" at={K4.leak} size={36} color={AMBER_INK} />
			<PicPair a={PL.legN} b={PL.legR} cx={BO.cx} cy={BO.cy} w={bw} at={K4.bend} dur={40} />
			<T x={1580} y={330} w={240} text="a child's growing leg bones" size={34} color={INK} />
			{Array.from({length: 8}, (_, i) => {
				const u = ((f - K4.calcium) / 50 + i / 8) % 1;
				const on = vis(f, K4.calcium, undefined, 10) * (1 - stopCa * (u > 0.55 ? 1 : 0.6));
				const [tx, ty] = bp(1027, 700 + (i % 4) * 160);
				const sx = 1290, sy = 640;
				return on > 0.01 && f >= K4.calcium ? <circle key={i} cx={lerp(sx, tx, u)} cy={lerp(sy, ty, u)} r={9} fill="#f2efe4" stroke="#9c8f6f" strokeWidth={3} opacity={on * Math.sin(u * Math.PI)} /> : null;
			})}
			<Sx x={1150} y={670} text="calcium from the gut" size={30} color={INK} hand at={K4.calcium} out={K4.mem} />
			<Lab x={960} y={250} w={420} t="vitamin D: the gut absorbs calcium" at={K4.gut} dim={K4.harden} size={40} />
			<Lab x={960} y={390} w={420} t="without it, growing bones don't harden" at={K4.harden} dim={K4.bend} size={40} />
			<Lab x={960} y={530} w={420} t="soft bones bend under the body's weight" at={K4.bend} size={40} color={AMBER_INK} />
			{mem > 0.01 ? <g opacity={mem}>
				<rect x={96} y={686} width={1728} height={162} rx={22} fill={CARD} stroke={BLUE} strokeWidth={4} />
				<Sx x={130} y={760} text="s" size={56} color={BLUE} hand at={-1000} />
				<Sx x={130 + mw('s', 56, true, 700)} y={760} text="C" size={56} color={cD > 0.5 ? AMBER_INK : BLUE} hand at={-1000} />
				<Sx x={130 + mw('sC', 56, true, 700)} y={760} text="urvy: vitamin C." size={56} color={BLUE} hand at={-1000} />
				<Sx x={760} y={760} text="Rickets: think vitamin" size={56} color={BLUE} hand at={K4.thinkD - 20} />
				<Sx x={760 + mw('Rickets: think vitamin ', 56, true, 700)} y={760} text="D." size={56} color={AMBER_INK} hand at={K4.thinkD} />
				<GTag x={130} y={790} text="one source: skin makes vitamin D in sunlight" size={30} at={K4.sun} />
				<GTag x={790} y={790} text="also from food or supplements" size={30} at={K4.foods} />
				<g opacity={prog(f, K4.sun, 14)}><PicH p={PL.sun} cx={1730} cy={766} h={130} /></g>
			</g> : null}
			<Chain tilt={tiltSteps([[ON, -1]], -1)} boxes={ChainRows({
				n: [{t: 'vitamin C', at: K4.vitC, out: K4.vitD - 10}, {t: 'vitamin D', at: K4.vitD}],
				j: [{t: 'enzymes build strong collagen', at: K4.strong, out: K4.vitD - 10}, {t: 'gut absorbs calcium', at: K4.calcium}],
				c: [{t: 'weak collagen', at: K4.weak, out: K4.vitD - 10}, {t: "bones don't harden", at: K4.harden}],
				e: [{t: 'bleeding gums, slow healing: scurvy', at: K4.scurvy, out: K4.vitD - 10}, {t: 'soft bones bend: rickets', at: K4.rickets}],
			})} />
			{void AMBER}{void GREYT}
		</Svg>
	);
};
