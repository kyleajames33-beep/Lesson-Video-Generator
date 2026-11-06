// B8-07 scenes 6 to 9: dose (pack-years worked, dose bars, the cancer lottery dealt into one airway cell), latency (the
// asbestos timeline, fibres in the lining, a macrophage that can't swallow its fibre, reactive chemicals for decades),
// risk not certainty (two groups of cells, the dial and its modifiers, exposures adding up) and a risk, not a verdict
// (exposures that aren't chosen, falling smoking rates, SunSmart).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, Bracket, CARD, CellO, Chip, DrawPath, DropDots, EDGE, Framed, GREEN, GREYT, GTag, INK, INK_SOFT, Mistake, PathwayStrip, Pic, PicH, RED, RiskDial, Sparks, Svg, Sx, T, TEAL, Tag, Ticket,
	Timeline, Title, Wisps, lerp, pbPt, prog, pulse, smooth, tlx, vis,
} from './parts';
import type {SBox, TL} from './parts';
import {Lab, Ptr, STRIP_Y, TobaccoStrip, Zoomline} from './s1';
import {FP, PL} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- 6. dose ----------
const K6 = K('dose', {what: 'what decides', dose: 'dose', smoking: 'For smoking', pack: 'pack-years', packs: 'packs per day', mult: 'multiplied', one: 'One pack', twenty: ['twenty pack-years', 1], cancer: 'For cancer', ticket: 'a ticket', most: 'Most tickets', repaired: 'repaired', more: 'more tickets', several: 'several unlucky', changes: 'changes'});
const TK: [number, number][] = Array.from({length: 15}, (_, i) => [960 + (i % 5) * 96, 600 + Math.floor(i / 5) * 70]);
const WIN = [10, 12, 14];
const AW6 = {cx: 1520, cy: 680, w: 130};
export const SceneDose: React.FC = () => {
	const f = useCurrentFrame();
	const needle = (fr: number) => 0.12 + 0.2 * smooth(prog(fr, K6.one, 20)) + 0.38 * smooth(prog(fr, K6.twenty, 20));
	const ap = pbPt(PL.airway, AW6.cx, AW6.cy, AW6.w);
	const [nx, ny] = ap(FP.nucleus[0], FP.nucleus[1]);
	const bars: [string, number, number][] = [['never', 22, K6.pack], ['5 pack-years', 100, K6.one], ['20 pack-years', 250, K6.twenty]];
	return (
		<Svg>
			<Title text="Dose: how much, for how long" />
			<RiskDial cx={1330} cy={360} r={130} val={needle} title="cancer risk" />
			<g opacity={1 - prog(f, K6.ticket - 16, 14)}>
				<PicH p={PL.lungsS} cx={1660} cy={600} h={360} />
				<Wisps a={[1660, 330]} b={[1660, 500]} n={2} spread={16} width={6} />
				<Sx x={1660} y={830} text="smoke in, every day" size={36} color={INK} anchor="middle" hand at={K6.smoking} />
			</g>
			<T x={96} y={222} w={1300} text="dose: how much of the agent gets in, over how long" size={46} at={K6.dose} />
			<Sx x={96} y={350} text="pack-years = packs per day × years" size={54} color={INK} weight={700} at={K6.pack} />
			<Sx x={96} y={440} text="1 pack a day × 20 years" size={52} color={INK} weight={700} at={K6.one} />
			<Framed x={690} y={442} text="= 20 pack-years" at={K6.twenty} size={52} />
			<g>
				<GTag x={110} y={480} text="lung cancer risk: shape only; real studies in b11" size={28} />
				<line x1={110} x2={880} y1={780} y2={780} stroke={INK_SOFT} strokeWidth={4} />
				{bars.map(([lab, h, a], i) => {
					const k = smooth(prog(f, a, 20));
					return (
						<g key={lab}>
							<rect x={150 + i * 255} y={780 - h} width={150} height={h} rx={8} fill={CARD} stroke={i === 2 ? AMBER_INK : AMBER} strokeWidth={4} strokeDasharray="12 8" />
							<rect x={150 + i * 255} y={780 - Math.max(6, h * k)} width={150} height={Math.max(6, h * k)} rx={8} fill={i === 2 ? AMBER_INK : AMBER} opacity={0.85 * prog(f, a, 6)} />
							<Sx x={225 + i * 255} y={818} text={lab} size={30} color={INK} anchor="middle" weight={700} at={-1000} />
						</g>
					);
				})}
			</g>
			<GTag x={960} y={530} text="for cancer" size={32} at={K6.cancer} />
			<Lab x={1150} y={566} t="most lose: repaired" w={420} at={K6.repaired} out={K6.several} size={38} color={GREEN} />
			{TK.map(([x, y], i) => {
				const dealt = prog(f, (i < 10 ? K6.ticket : K6.more) + (i % 10) * 3, 10);
				const win = WIN.indexOf(i);
				const lose = win < 0 && f >= (i < 10 ? K6.most + 10 + i * 3 : K6.more + 40 + (i - 10) * 3);
				const amb = win >= 0 && f >= K6.several + win * 8;
				const slide = win >= 0 ? smooth(prog(f, K6.changes + 6 + win * 6, 26)) : 0;
				const tx = lerp(x, nx - 30 + win * 20, slide), ty = lerp(y, ny - 10 + (win - 1) * 16, slide);
				return <g key={i} transform={slide > 0.01 ? `translate(${tx - x},${ty - y})` : undefined}><Ticket x={x} y={y} w={slide > 0.5 ? 40 : 70} st={lose ? 1 : 0} amb={amb ? 1 : 0} o={dealt} /></g>;
			})}
			<Pic p={PL.airway} cx={AW6.cx} cy={AW6.cy} w={AW6.w} at={K6.more} />
			<Lab x={1600} y={640} t="several changes, one cell" w={224} at={K6.several} size={38} color={AMBER_INK} />
			<GTag x={940} y={806} text="for cancer only: COPD and artery damage come from tissue injury and inflammation" size={26} at={K6.cancer + 30} />
			<TobaccoStrip t={{c0: ON, e0: ON, c1: ON, e1: ON, c2: ON, e2: ON, dim1: K6.cancer, dim2: K6.cancer, hotE: [{slot: 0, at: K6.cancer}]}} />
		</Svg>
	);
};

// ---------- 7. latency and the asbestos answer ----------
const K7 = K('latency-asbestos', {time: 'time', changes: 'Those changes', gap: 'long gap', exposure: 'exposure and', diagnosis: 'diagnosis', latency: 'latency', asbestos: 'Asbestos shows', fibres: 'Its fibres', lodge: 'lodge', lining: 'the lining around', macro: 'macrophages', swallow: 'swallow', cant: "can't", releasing: 'releasing', reactive: 'reactive chemicals', damage: 'damage nearby', slow: 'That slow damage', twenty: 'twenty to fifty', meso: 'become mesothelioma', ban: '2003 ban', cases: 'new cases'});
const TL7: TL = {x0: 200, x1: 1360, y: 250, yr0: 1940, yr1: 2030};
const LG = {cx: 640, cy: 610, w: 400};
const MC = {cx: 1360, cy: 620, w: 700};
export const SceneLatency: React.FC = () => {
	const f = useCurrentFrame();
	const lp = pbPt(PL.lungs, LG.cx, LG.cy, LG.w);
	const mp = pbPt(PL.macro, MC.cx, MC.cy, MC.w);
	const stretch = smooth(prog(f, K7.twenty, 40));
	const xb = lerp(tlx(TL7, 2015), tlx(TL7, 2025), stretch);
	const banP = pulse(f, K7.ban, 40);
	const pleura = vis(f, K7.lining, undefined, 14);
	const macro = vis(f, K7.macro, undefined, 16);
	const lin: [number, number][] = [[900, 1190], [1060, 1215], [1200, 1180], [760, 1230]].map(([u, v]) => mp(u, v));
	const DOTS: [number, number][] = [];
	for (let yr = 2005; yr <= 2025; yr += 4) DOTS.push([tlx(TL7, yr), 300]);
	return (
		<Svg>
			<Title text="Time: latency" />
			<defs>
				<filter id="b07-pleura" x="-10%" y="-10%" width="120%" height="120%">
					<feMorphology in="SourceAlpha" operator="dilate" radius="6" result="d" />
					<feComposite in="d" in2="SourceAlpha" operator="out" result="ring" />
					<feFlood floodColor={TEAL} />
					<feComposite in2="ring" operator="in" />
				</filter>
				<mask id="b07-notrachea"><rect x={0} y={0} width={1920} height={1080} fill="white" /><rect x={lp(840, 0)[0]} y={0} width={lp(1160, 0)[0] - lp(840, 0)[0]} height={lp(0, 800)[1]} fill="black" /></mask>
			</defs>
			<Timeline t={TL7} ticks={[1940, 1960, 1980, 2000, 2020]} />
			<g opacity={0.6 + 0.4 * banP}>
				<DrawPath d={`M${tlx(TL7, 2003)},${226} L${tlx(TL7, 2003)},${380}`} at={ON} color={RED} width={5} dash="10 8" />
				<Sx x={tlx(TL7, 2003) - 10} y={372} text="ban 2003" size={30 + 8 * banP} color={RED} anchor="end" hand at={-1000} />
			</g>
			<DropDots pts={DOTS} at={ON} r={9} color={AMBER_INK} o={0.45 + 0.55 * prog(f, K7.ban, 14)} />
			{[[1975, K7.exposure, 'exposure'], [2015, K7.diagnosis, 'diagnosis']].map(([yr, a, lab]) => (
				<g key={lab as string} opacity={prog(f, a as number, 10)}>
					<circle cx={tlx(TL7, yr as number)} cy={TL7.y} r={16} fill={yr === 1975 ? INK : AMBER} stroke={INK} strokeWidth={3} />
					<Sx x={tlx(TL7, yr as number)} y={TL7.y + 84} text={lab as string} size={32} color={INK} anchor="middle" hand at={-1000} />
				</g>
			))}
			<Bracket xa={tlx(TL7, 1975)} xb={xb} y={196} at={K7.latency} label={stretch > 0.5 ? 'latency: about 20 to 50 years' : 'latency'} size={38} />
			<T x={1050} y={480} w={760} text="Those changes take years to build up." size={44} at={K7.changes} out={K7.macro} />
			<T x={1050} y={620} w={760} text="latency: the gap between exposure and diagnosis" size={46} color={AMBER_INK} at={K7.latency} out={K7.macro} />
			{[0, 1, 2, 3, 4].map(i => { const yr = 1979 + i * 8; const a = prog(f, K7.changes + 10 + i * 10, 10); return a > 0.01 ? <g key={'c' + i} opacity={a * (1 - 0.6 * prog(f, K7.macro, 14))}><CellO x={tlx(TL7, yr)} y={TL7.y - 40} r={20} amb={i === 4 ? 1 : 0} />{Array.from({length: i}, (_, k) => <circle key={k} cx={tlx(TL7, yr) - 8 + k * 6} cy={TL7.y - 46 + (k % 2) * 8} r={4} fill={AMBER_INK} />)}</g> : null; })}
			<RiskDial cx={1640} cy={300} r={110} val={() => 0.8} title="risk" size={28} />
			<Pic p={PL.fibro} cx={210} cy={600} w={280} />
			{Array.from({length: 6}, (_, i) => {
				const u = ((f - K7.fibres) / 70 + i / 6) % 1;
				const show = vis(f, K7.fibres, undefined, 12);
				const x = 330 + u * 220, y = 640 - u * 60 + Math.sin(u * 6 + i) * 18;
				return show > 0.01 ? <line key={i} x1={x} y1={y} x2={x + 36} y2={y - 8} stroke="#9aa3a8" strokeWidth={3} strokeLinecap="round" opacity={show * Math.sin(u * Math.PI)} /> : null;
			})}
			<Sx x={210} y={790} text="asbestos fibres: long, thin" size={34} color={INK} anchor="middle" hand at={K7.fibres} />
			<Pic p={PL.lungs} cx={LG.cx} cy={LG.cy} w={LG.w} />
			{pleura > 0.01 ? <g opacity={pleura} mask="url(#b07-notrachea)"><g style={{filter: 'url(#b07-pleura)'}}><Pic p={PL.lungs} cx={LG.cx} cy={LG.cy} w={LG.w} /></g></g> : null}
			<GTag x={LG.cx} y={826} text="pleura: the lining around the lungs" size={28} anchor="middle" at={K7.lining + 10} />
			<Zoomline from={lp(1720, 1300)} to={[MC.cx - MC.w / 2 + 10, 560]} at={K7.macro} />
			<g opacity={macro}><Pic p={PL.macro} cx={MC.cx} cy={MC.cy} w={MC.w} /></g>
			<Ptr a={[1200, 432]} b={mp(FP.macroC[0], FP.macroC[1])} at={K7.cant} out={K7.releasing} color={INK} />
			<Lab x={1030} y={420} t="macrophage can't swallow the fibre" w={760} at={K7.cant} out={K7.releasing} size={40} />
			<Sparks a={mp(FP.sparks[0], FP.sparks[1])} to={lin} at={K7.releasing} every={36} r={9} />
			<Lab x={1030} y={420} t="reactive chemicals, for years" w={760} at={K7.reactive} size={42} color={AMBER_INK} />
			<PathwayStrip x={96} y={STRIP_Y} h={180} boxes={asbBoxes(K7.changes, K7.diagnosis, K7.damage, K7.meso)} />
		</Svg>
	);
};
const asbBoxes = (ch: number, dg: number, dm: number, ms: number): SBox[] => [
	{head: 'exposure', w: 420, thumbW: 130, rows: [{t: 'asbestos fibres', at: ON}], thumb: (x, y, w, h) => <PicH p={PL.fibro} cx={x + w / 2} cy={y + h / 2} h={h * 0.7} />},
	{head: 'change in cells or tissue', w: 640, rows: [{t: 'changes build up over years', at: ch, out: dm - 10}, {t: 'fibres stay: damage goes on for decades', at: dm}]},
	{head: 'effect on health', w: 560, rows: [{t: 'diagnosis, decades later', at: dg, out: ms - 10}, {t: 'mesothelioma, decades later', at: ms}]},
];

// ---------- 8. risk, not certainty ----------
const K8 = K('risk-not-certainty', {heavy: 'heavy smokers', never: 'never get', some: 'some people', smoked: 'never smoked', doo: 'do?', because: 'Because exposure', prob: 'probability', repair: 'DNA repair', immune: 'immune system', chance: 'partly chance', nevers: 'Never-smokers', second: 'second-hand', radon: 'radon', air: 'polluted air', add: 'add up', asb: 'asbestos and smoking', together: 'together raise', far: 'far more'});
const COL = (x0: number) => Array.from({length: 20}, (_, i) => [x0 + (i % 4) * 64, 450 + Math.floor(i / 4) * 58] as [number, number]);
const LEFT = COL(130), RIGHT = COL(470);
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const mods = [K8.repair, K8.immune, K8.chance];
	const needle = (fr: number) => 0.75 - 0.12 * smooth(prog(fr, K8.repair, 16)) - 0.1 * smooth(prog(fr, K8.immune, 16)) + 0.08 * smooth(prog(fr, K8.chance, 16)) + 0.2 * smooth(prog(fr, K8.far, 20));
	const stack = smooth(prog(f, K8.together, 30));
	return (
		<Svg>
			<Title text="Risk, not certainty" />
			<PicH p={PL.lungsS} cx={226} cy={260} h={170} />
			<PicH p={PL.lungs} cx={566} cy={260} h={170} />
			<Sx x={226} y={394} text="heavy smokers" size={38} color={INK} anchor="middle" hand at={-1000} />
			<Sx x={566} y={394} text="never smoked" size={38} color={INK} anchor="middle" hand at={-1000} />
			{LEFT.map(([x, y], i) => <CellO key={'l' + i} x={x} y={y} r={24} tick={f >= K8.never + i * 2 ? 1 : 0} amb={(i === 6 || i === 13) && f >= K8.never + 20 ? 1 : 0} />)}
			{RIGHT.map(([x, y], i) => <CellO key={'r' + i} x={x} y={y} r={24} amb={i === 9 && f >= K8.doo ? 1 : 0} />)}
			<Sx x={226} y={756} text="most: no lung cancer" size={34} color={INK} anchor="middle" hand at={K8.never + 20} />
			<Sx x={566} y={756} text="a few do" size={34} color={AMBER_INK} anchor="middle" hand at={K8.doo} />
			{([['second-hand smoke', K8.second], ['radon gas', K8.radon], ['polluted air', K8.air]] as [string, number][]).map(([t, a], i) => <GTag key={t} x={[96, 382, 560][i]} y={796} text={t} size={30} at={a} />)}
			<RiskDial cx={1060} cy={430} r={150} val={needle} title="lung cancer risk" label="probability, not certainty" labelAt={K8.prob} size={32} />
			{([['repair varies', K8.repair], ['immune cells clear damage', K8.immune], ['chance: which cell, which mutation', K8.chance]] as [string, number][]).map(([t, a], i) => (
				<g key={t} opacity={1 - 0.55 * (i < 2 ? prog(f, mods[i + 1], 12) : 0)}><Chip x={1320} y={200 + i * 86} text={t} size={36} color={TEAL} ink={INK} at={a} /></g>
			))}
			<g opacity={prog(f, K8.add, 14)}>
				<line x1={1360} x2={1810} y1={830} y2={830} stroke={INK_SOFT} strokeWidth={4} />
				<rect x={1380} y={830 - 70 * smooth(prog(f, K8.asb, 16))} width={110} height={70 * smooth(prog(f, K8.asb, 16))} rx={8} fill="#9aa3a8" />
				<rect x={1520} y={830 - 90 * smooth(prog(f, K8.asb + 10, 16))} width={110} height={90 * smooth(prog(f, K8.asb + 10, 16))} rx={8} fill={AMBER} />
				<rect x={1660} y={830 - 380 * stack} width={110} height={380 * stack} rx={8} fill={RED} opacity={0.8} />
				<g opacity={prog(f, K8.together + 20, 12)}><line x1={1650} x2={1790} y1={830 - 160} y2={830 - 160} stroke={INK} strokeWidth={3} strokeDasharray="8 6" /><Sx x={1640} y={830 - 166} text="sum of the two" size={28} color={INK} anchor="end" hand at={-1000} /></g>
				<Sx x={1435} y={866} text="asbestos" size={30} color={INK} anchor="middle" hand at={K8.asb} />
				<Sx x={1575} y={866} text="smoking" size={30} color={INK} anchor="middle" hand at={K8.asb + 8} />
				<Sx x={1715} y={866} text="together" size={30} color={INK} anchor="middle" hand at={K8.together} />
				<GTag x={1380} y={690} text="more than the sum" size={30} at={K8.far} />
			</g>
			<TobaccoStrip t={{c0: ON, e0: ON, c1: ON, e1: ON, c2: ON, e2: ON, dim1: ON, dim2: ON, hotE: [{slot: 0, at: K8.prob}]}} />
		</Svg>
	);
};

// ---------- 9. a risk, not a verdict ----------
const K9 = K('not-a-verdict', {verdict: 'verdict', many: 'Many exposures', chosen: 'chosen', worker: 'a worker', child: 'a child', what: 'What reliably', lowers: 'lowers disease', pop: 'whole population', y2025: '2025', six: 'six in a hundred', lung: 'lung cancer rates', decades: 'decades behind', uv: 'For UV', sunsmart: "SunSmart's", slip: 'slip', slop: 'slop', slap: 'slap', seek: 'seek', slide: 'slide'});
const GG = {x: 790, y: 250, w: 520, h: 330, x0: 1980, x1: 2025, y0: 0, y1: 40};
const ggx = (v: number) => GG.x + ((v - GG.x0) / (GG.x1 - GG.x0)) * GG.w;
const ggy = (v: number) => GG.y + GG.h - ((v - GG.y0) / (GG.y1 - GG.y0)) * GG.h;
const SMK: [number, number][] = [[1980, 33], [1990, 26], [2000, 20], [2010, 15], [2015, 12], [2020, 9], [2025, 5.8]];
const LCM: [number, number][] = [[1980, 30], [1984, 32], [1990, 30], [2000, 25], [2010, 20], [2020, 16], [2025, 14]];
export const SceneVerdict: React.FC = () => {
	const f = useCurrentFrame();
	const g = prog(f, K9.what, 14);
	const chips: [string, number][] = [['slip on a shirt', K9.slip], ['slop on sunscreen', K9.slop], ['slap on a hat', K9.slap], ['seek shade', K9.seek], ['slide on sunglasses', K9.slide]];
	const ln = (pts: [number, number][]) => 'M' + pts.map(([a, b]) => `${ggx(a)},${ggy(b)}`).join(' L');
	return (
		<Svg>
			<Title text="A risk, not a verdict" />
			<Mistake x={96} y={170} text="it's their own fault" size={42} at={ON} cross={K9.verdict + 10} note="many exposures aren't chosen" noteW={560} />
			<rect x={96} y={380} width={280} height={330} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<Pic p={PL.fibro} cx={236} cy={520} w={230} />
			<Sx x={236} y={420} text="work exposure" size={34} color={INK} anchor="middle" hand at={-1000} />
			<T x={116} y={650} w={250} text="cutting asbestos sheeting" size={30} at={K9.worker} />
			<rect x={400} y={380} width={280} height={330} rx={18} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<Wisps a={[450, 610]} b={[630, 470]} n={3} spread={30} width={7} />
			<Sx x={540} y={420} text="childhood exposure" size={34} color={INK} anchor="middle" hand at={-1000} />
			<T x={420} y={650} w={250} text="a parent's smoke" size={30} at={K9.child} />
			{g > 0.01 ? <g opacity={g}>
				<rect x={GG.x} y={GG.y} width={GG.w} height={GG.h} fill={CARD} opacity={0.9} />
				<path d={`M${GG.x},${GG.y} L${GG.x},${GG.y + GG.h} L${GG.x + GG.w},${GG.y + GG.h}`} fill="none" stroke={INK} strokeWidth={3.5} />
				{[0, 10, 20, 30, 40].map(v => <g key={v}><line x1={GG.x - 10} x2={GG.x} y1={ggy(v)} y2={ggy(v)} stroke={INK} strokeWidth={3} /><Sx x={GG.x - 16} y={ggy(v) + 10} text={`${v}`} size={28} color={INK} anchor="end" weight={600} at={-1000} /></g>)}
				{[1980, 2000, 2025].map(v => <g key={v}><line x1={ggx(v)} x2={ggx(v)} y1={GG.y + GG.h} y2={GG.y + GG.h + 10} stroke={INK} strokeWidth={3} /><Sx x={ggx(v)} y={GG.y + GG.h + 38} text={`${v}`} size={28} color={INK} anchor="middle" weight={600} at={-1000} /></g>)}
				<Sx x={GG.x} y={GG.y - 24} text="Australian adults who smoke daily (%)" size={32} color={INK} weight={700} at={-1000} />
				<DrawPath d={ln(SMK)} at={K9.pop} dur={50} color={INK} width={6} />
				<circle cx={ggx(2025)} cy={ggy(5.8)} r={12} fill={AMBER} stroke={AMBER_INK} strokeWidth={3} opacity={prog(f, K9.y2025, 10)} />
				<Sx x={ggx(2025) - 10} y={ggy(5.8) - 26} text="2025: 5.8% of adults" size={36} color={AMBER_INK} anchor="end" hand at={K9.y2025} />
				<DrawPath d={ln(LCM)} at={K9.lung} dur={50} color={TEAL} width={5} dash="14 9" />
				<Sx x={ggx(2010)} y={ggy(25) - 10} text="lung cancer rate, men (shape)" size={30} color={TEAL} hand at={K9.lung + 20} />
				<Sx x={ggx(2000)} y={ggy(36)} text="decades behind" size={38} color={AMBER_INK} anchor="middle" hand at={K9.decades} />
				<Tag x={GG.x - 60} y={GG.y + GG.h + 60} w={640} text="shape illustrative before 2025; 2025 figure: Australian Government release, 17 July 2026" size={26} color="#8d857a" ink={GREYT} fill="#f1eee7" />
			</g> : null}
			<g>
				<PicH p={PL.sun} cx={1500} cy={260} h={170} />
				<PicH p={PL.sunProt} cx={1700} cy={290} h={170} />
				<Sx x={1600} y={420} text="SunSmart" size={40} color={INK} anchor="middle" hand at={K9.sunsmart} />
			</g>
			{chips.map(([t, a], i) => <g key={t} opacity={1 - 0.5 * (i <= 1 ? prog(f, chips[i + 2][1], 12) : 0)}><Chip x={1420} y={460 + i * 72} text={t} size={34} color={GREEN} ink={INK} at={a} /></g>)}
			<g opacity={prog(f, K9.lowers, 14)}>
				<path d={`M${300},${STRIP_Y - 8} L${300},${STRIP_Y - 74}`} stroke={GREEN} strokeWidth={8} strokeLinecap="round" />
				<path d={`M${284},${STRIP_Y - 30} L${300},${STRIP_Y - 8} L${316},${STRIP_Y - 30}`} fill="none" stroke={GREEN} strokeWidth={8} strokeLinecap="round" />
				<Sx x={326} y={STRIP_Y - 30} text="reduce exposure" size={34} color={GREEN} hand at={-1000} />
			</g>
			<TobaccoStrip t={{c0: ON, e0: ON, c1: ON, e1: ON, c2: ON, e2: ON}} />
		</Svg>
	);
};
export {Zoomline};
