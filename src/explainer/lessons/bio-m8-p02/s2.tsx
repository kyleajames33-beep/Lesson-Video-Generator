// P8-02 Biology scenes 7 to 12: one reading (a close-up of the capillary, 0 to 21 mm, the working and the framed rate,
// same edge, eye level), the results (table, means, spread against gap, bar pair, b05's moist-air reason), what the bubble
// really measures (in and out arrows, the claim card, the narrow conclusion, the memory line), counting stomata (varnish
// peel, microscope, the matched lower and upper fields with count marks), validity, reliability and accuracy (three
// cards with pictures), and the risk table filling row by row with its painted objects.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {
	AMBER, AMBER_INK, Arrow, BLUE, Box, CARD, Chip, CountMarks, DrawPath, EDGE, Fan, Framed, GREENC, GREYT, GTag, INK, INK_SOFT, LeafCrop, Mistake, Pic, PicH, PicPair, PlateB, Pot, RED, ShootCrop, StepRail, Svg, Sx, T, TEAL, TERRA, Tag, Tbl, Title,
	VIOLET, WATER, WaterTint, Watch, lerp, mmKeys, mmNat, pbPt, potK, potPt, prog, pulse, shootPt, smooth, vis,
} from './parts';
import type {P2, TblSpec} from './parts';
import {FlowDots} from './s1';
import {LEAF_STOMA, PL, POT, STOM_LOW, STOM_UP} from './assets';
import {K} from './common';

const ON = -1000;

// ---------- 7. taking a reading ----------
const K7 = K('one-reading', {one: 'one reading', still: 'still air', twenty: 'twenty one', five: 'five minutes', rate: 'Rate is', distance: 'distance divided', four: 'four point two', read: 'Read the', edge: 'same edge', eye: 'your eye', level: 'level with'});
const Z = {k: 2300 / 1163, x0: 1180, y0: 420};
const zcx = Z.x0 - (1418 - 1003.5) * Z.k, zcy = Z.y0 - (POT.capY - 978.5) * Z.k;
export const SceneReading: React.FC = () => {
	const f = useCurrentFrame();
	const mm = mmKeys([[K7.twenty - 10, 0], [K7.twenty + 50, 21]]);
	const P = potPt(zcx, zcy, 2300);
	const m = mm(f);
	const [bx] = P(mmNat(m), 0);
	const rx = 15 * Z.k;
	const edge = prog(f, K7.edge, 12);
	const eye = prog(f, K7.level, 12);
	return (
		<Svg>
			<Title text="Taking a reading" />
			<defs><clipPath id="p02-zoom"><rect x={96} y={250} width={1150} height={350} rx={20} /></clipPath></defs>
			<rect x={96} y={250} width={1150} height={350} rx={20} fill={CARD} stroke={EDGE} strokeWidth={3} />
			<g clipPath="url(#p02-zoom)">
				<Pot cx={zcx} cy={zcy} w={2300} mm={mm} bubbleAt={ON} nums={ON} numSize={32} ends={{a: 0, b: 21, at: K7.twenty + 50, label: '21 mm'}} />
			</g>
			<Sx x={116} y={236} text="close-up: the capillary scale (mm)" size={30} color={GREYT} hand at={ON} />
			{edge > 0.01 ? <g opacity={edge}><line x1={bx - rx} x2={bx - rx} y1={Z.y0 - 70} y2={Z.y0 + 70} stroke={TEAL} strokeWidth={5} /><GTag x={bx - rx} y={620} text="same edge each time" size={32} anchor="middle" /></g> : null}
			{eye > 0.01 ? <g opacity={eye}><line x1={110} x2={420} y1={Z.y0} y2={Z.y0} stroke={GREYT} strokeWidth={4} strokeDasharray="12 8" /><GTag x={110} y={680} text="eye level with the tube: no parallax" size={32} /></g> : null}
			<Watch cx={1460} cy={390} h={300} at={K7.twenty - 10} dur={60} />
			<Sx x={1460} y={590} text="5 minutes, sped up" size={34} color={INK} hand anchor="middle" at={K7.twenty} />
			<rect x={1290} y={650} width={534} height={300} rx={18} fill={CARD} stroke={prog(f, K7.distance, 12) > 0.5 ? AMBER : EDGE} strokeWidth={3} />
			<Sx x={1310} y={690} text="working" size={28} color={INK_SOFT} weight={700} at={ON} />
			<Sx x={1310} y={750} text="rate = distance ÷ time" size={44} color={INK} weight={700} at={K7.distance} />
			<Sx x={1310} y={822} text="= 21 mm ÷ 5 min" size={46} color={INK} weight={700} at={K7.distance + 30} />
			<Framed x={1310} y={914} text="= 4.2 mm per minute" at={K7.four} size={44} color={AMBER_INK} />
			<g>
				<Sx x={500} y={786} text="still air (fan off)" size={34} color={GREENC} hand at={ON} />
				{[0, 1, 2].map(i => <g key={i}><rect x={500 + i * 150} y={810} width={130} height={76} rx={12} fill={CARD} stroke={GREENC} strokeWidth={3} strokeDasharray={i === 0 && prog(f, K7.four, 8) > 0.5 ? undefined : '8 6'} /><Sx x={565 + i * 150} y={862} text={i === 0 ? '4.2' : `${i + 1}`} size={i === 0 ? 44 : 32} color={i === 0 ? AMBER_INK : GREYT} anchor="middle" weight={800} at={i === 0 ? K7.four + 6 : ON} /></g>)}
			</g>
			<StepRail cur={4} />
			{void VIOLET}{void potK}
		</Svg>
	);
};

// ---------- 8. the results ----------
const K8 = K('results', {six: 'all six', r1: 'four point two', r2: 'three point eight', r3: 'four point oh', mean1: 'mean of four', fan: 'With the', f1: 'nine point four', f2: 'nine point two', f3: 'nine point six', mean2: 'mean of nine', agree: 'repeats agree', gap: 'the gap', twice: 'twice as', moving: 'Moving air', surface: 'surface', diffuses: 'diffuses out'});
const BG8 = {x: 200, y: 590, w: 440, h: 290};
const LF8 = {cx: 1440, cy: 720, w: 520};
export const SceneResults: React.FC = () => {
	const f = useCurrentFrame();
	const c = (v: string, at: number) => (f >= at ? v : '');
	const spec: TblSpec = {cols: [250, 120, 120, 120, 200, 160], head: ['condition', '1', '2', '3', 'mean (mm per minute)', 'spread'], rows: [
		['fan off', c('4.2', K8.r1), c('3.8', K8.r2), c('4.0', K8.r3), c('4.0', K8.mean1), c('0.4', K8.agree)],
		['fan on', c('9.4', K8.f1), c('9.2', K8.f2), c('9.6', K8.f3), c('9.4', K8.mean2), c('0.4', K8.agree + 10)],
	]};
	const Y = (v: number) => BG8.y + BG8.h - (v / 10) * BG8.h;
	const b1 = smooth(prog(f, K8.mean1, 16)), b2 = smooth(prog(f, K8.mean2, 16));
	const lk = LF8.w / 1537;
	const st: P2 = [LF8.cx + (LEAF_STOMA[0] - 996.5) * lk, LF8.cy + (LEAF_STOMA[1] - 974.5) * lk];
	const wind = prog(f, K8.moving, 12);
	return (
		<Svg>
			<Title text="The results" />
			<GTag x={1824} y={44} text="example data" size={28} anchor="end" />
			<Pot cx={330} cy={340} w={380} mm={() => 20} bubbleAt={ON} />
			<Tbl t={spec} x={850} y={160} size={44} headSize={30} rowH={86} hot={[{r: 1, at: K8.r1, out: K8.fan}, {r: 2, at: K8.fan, out: K8.agree}]} />
			<Sx x={850} y={470} text="(4.2 + 3.8 + 4.0) ÷ 3 = 4.0" size={44} color={INK} weight={700} at={K8.mean1 - 6} out={K8.fan} />
			<Sx x={850} y={470} text="(9.4 + 9.2 + 9.6) ÷ 3 = 9.4" size={44} color={INK} weight={700} at={K8.mean2 - 6} out={K8.agree} />
			<Sx x={850} y={470} text="spread 0.4 each; gap 5.4" size={46} color={AMBER_INK} hand at={K8.gap} />
			<line x1={BG8.x} x2={BG8.x + BG8.w} y1={BG8.y + BG8.h} y2={BG8.y + BG8.h} stroke={INK} strokeWidth={3.5} />
			<line x1={BG8.x} x2={BG8.x} y1={BG8.y} y2={BG8.y + BG8.h} stroke={INK} strokeWidth={3.5} />
			{[0, 5, 10].map(v => <g key={v}><line x1={BG8.x - 10} x2={BG8.x} y1={Y(v)} y2={Y(v)} stroke={INK} strokeWidth={3} /><Sx x={BG8.x - 16} y={Y(v) + 10} text={`${v}`} size={28} color={INK} anchor="end" weight={600} at={ON} /></g>)}
			<Sx x={BG8.x - 40} y={BG8.y - 24} text="mean rate (mm per minute)" size={28} color={INK} weight={700} at={ON} />
			{[[4.0, b1, 'fan off', GREENC], [9.4, b2, 'fan on', VIOLET]].map(([v, k, lab, col], i) => {
				const x = BG8.x + 60 + i * 200, top = Y(v as number);
				return <g key={i}>
					<rect x={x} y={top} width={120} height={BG8.y + BG8.h - top} fill="none" stroke={col as string} strokeWidth={3} strokeDasharray="10 7" />
					<rect x={x} y={BG8.y + BG8.h - (BG8.y + BG8.h - top) * (k as number)} width={120} height={(BG8.y + BG8.h - top) * (k as number)} fill={col as string} opacity={0.75} />
					<Sx x={x + 60} y={top - 12} text={(v as number).toFixed(1)} size={40} color={INK} anchor="middle" weight={800} at={i ? K8.mean2 + 10 : K8.mean1 + 10} />
					<Sx x={x + 60} y={BG8.y + BG8.h + 38} text={lab as string} size={32} color={INK} anchor="middle" hand at={ON} />
				</g>;
			})}
			<g opacity={prog(f, K8.gap, 12)}>
				<path d={`M${BG8.x + 410},${Y(4)} L${BG8.x + 440},${Y(4)} L${BG8.x + 440},${Y(9.4)} L${BG8.x + 410},${Y(9.4)}`} fill="none" stroke={AMBER_INK} strokeWidth={4} />
				<Sx x={BG8.x + 455} y={(Y(4) + Y(9.4)) / 2 + 12} text="gap 5.4" size={38} color={AMBER_INK} hand at={ON} />
			</g>
			<GTag x={850} y={510} text="gap far bigger than spread" size={30} at={K8.gap + 16} />
			<Sx x={BG8.x + 260} y={BG8.y - 60} text="about 2.4 ×" size={44} color={AMBER_INK} hand at={K8.twice} />
			<PicH p={PL.leaf} cx={LF8.cx} cy={LF8.cy} h={LF8.w * 1083 / 1537} />
			{wind > 0.01 ? <g opacity={wind}>
				{[0, 1, 2].map(i => { const y = st[1] + 50 + i * 26; const pts = Array.from({length: 11}, (_, j) => [1120 + j * 70, y + Math.sin(j + f / 6 + i) * 6]); return <path key={i} d={'M' + pts.map(p => p.join(',')).join(' L')} fill="none" stroke={VIOLET} strokeWidth={4} strokeDasharray="20 14" strokeDashoffset={-f * 2.6} opacity={0.8} />; })}
			</g> : null}
			<FlowDots a={[st[0], st[1] + 6]} b={[st[0] + 360, st[1] + 70]} at={K8.moving} n={9} speed={() => 2.2} />
			<GTag x={1180} y={530} text="b05: wind removes the moist air" size={30} at={K8.surface} />
			<StepRail cur={5} />
			{void Box}{void WATER}
		</Svg>
	);
};

// ---------- 9. what the bubble really measures ----------
const K9 = K('what-it-measures', {careful: 'Be careful', measures: 'measures water', uptake: 'water uptake', not: 'not water', most: 'Most of', lost: 'is lost', photo: 'photosynthesis', stays: 'stays in', one: 'one cut', roots: 'no roots', whole: 'whole plant', narrow: 'narrow', conc: 'with moving'});
export const SceneMeasures: React.FC = () => {
	const f = useCurrentFrame();
	const sk = 0.62, sx = 140, sy = 230;
	const S = shootPt(sx, sy, sk);
	const base = S(696, 1222), leafTop = S(860, 520), mid = S(696, 980);
	const conc = prog(f, K9.conc, 12);
	const col = (x: number, head: string, color: string) => <g><rect x={x} y={220} width={400} height={420} rx={16} fill={CARD} stroke={color} strokeWidth={3} /><Sx x={x + 20} y={266} text={head} size={36} color={color} hand at={ON} /></g>;
	return (
		<Svg>
			<Title text="What the bubble really measures" />
			<ShootCrop x={sx} y={sy} k={sk} id="p02-s9-shoot" />
			<Arrow a={[base[0], base[1] + 140]} b={[base[0], base[1] + 6]} color={WATER} width={8} head={22} />
			<Sx x={base[0] + 24} y={base[1] + 110} text="in: uptake (the bubble)" size={36} color={WATER} hand at={ON} />
			<g opacity={0.35 + 0.65 * prog(f, K9.not, 12)}>
				<Arrow a={leafTop} b={[leafTop[0] + 150, leafTop[1] - 80]} color={GREYT} width={7} head={20} />
				<Sx x={leafTop[0] + 60} y={leafTop[1] - 100} text="out: loss ≈ uptake" size={36} color={INK} hand at={ON} />
			</g>
			<g opacity={prog(f, K9.photo, 12)}>
				<DrawPath d={`M${mid[0] + 10},${mid[1]} Q${mid[0] + 120},${mid[1] - 20} ${mid[0] + 190},${mid[1] - 120}`} at={K9.photo} dur={16} color={TEAL} width={4} />
				<T x={mid[0] + 150} y={mid[1] - 150} w={330} text="a little used in photosynthesis or kept in cells" size={32} color={TEAL} />
			</g>
			<PicH p={PL.plant} cx={850} cy={790} h={250} />
			<GTag x={850} y={930} text="not tested" size={30} anchor="middle" at={K9.roots} />
			{col(1010, 'what was measured', TEAL)}
			{col(1424, "what it can't show", TERRA)}
			<g opacity={(0.4 + 0.6 * prog(f, K9.uptake, 12)) * (1 - conc)}><T x={1030} y={330} w={360} text="water uptake by this shoot (bubble)" size={40} color={INK} /></g>
			<T x={1030} y={330} w={360} text="uptake by this shoot: faster with moving air" size={38} color={TEAL} at={K9.conc + 10} />
			<g opacity={0.4 + 0.6 * prog(f, K9.not, 12)}><T x={1444} y={330} w={360} text="water loss itself" size={40} color={INK} /></g>
			<g opacity={0.4 + 0.6 * prog(f, K9.roots, 12)}><T x={1444} y={430} w={360} text="a whole plant with roots, in soil" size={38} color={INK} /></g>
			<g opacity={0.4 + 0.6 * prog(f, K9.whole + 30, 12)}><T x={1444} y={540} w={360} text="field wind (a desk fan is one speed)" size={34} color={INK} /></g>
			<g opacity={prog(f, K9.narrow, 12)}>
				<rect x={1010} y={664} width={814} height={150} rx={18} fill="#eef7f7" stroke={TEAL} strokeWidth={4} />
				<Sx x={1030} y={704} text="conclusion (narrow)" size={30} color={TEAL} hand at={ON} />
				<T x={1030} y={756} w={780} text="With moving air, this shoot took up water faster than in still air." size={40} color={INK} at={K9.conc} />
			</g>
			<Sx x={1010} y={890} text="The bubble measures what goes in, not what goes out." size={44} color={BLUE} hand at={K9.conc + 40} />
			<StepRail cur={5} />
		</Svg>
	);
};

// ---------- 10. a second method: counting stomata ----------
const K10 = K('stomatal-count', {second: 'A second', where: 'where can', paint: 'Paint clear', varnish: 'nail varnish', dry: 'let it', lift: 'lift it', tape: 'clear tape', peel: 'This peel', imprint: 'an imprint', under: 'Under a', mag: 'one magnification', count: 'count stomata', lower: 'the lower', upper: 'the upper', few: 'a few', alone: 'count alone', lost: 'being lost'});
const FD = {cx: 900, cy: 520, w: 620};
export const SceneStomata: React.FC = () => {
	const f = useCurrentFrame();
	const fp = pbPt(PL.low, FD.cx, FD.cy, FD.w);
	const low = STOM_LOW.map(p => fp(p[0], p[1]));
	const up = STOM_UP.map(p => fp(p[0], p[1]));
	const patch = prog(f, K10.paint, 20);
	const lift = smooth(prog(f, K10.lift, 26));
	const toStage = smooth(prog(f, K10.under, 30));
	const mp = pbPt(PL.micro, 250, 735, (330 * 983) / 1599);
	const stage = mp(1000, 1062);
	const slideFrom: P2 = [330, 470];
	const sx = lerp(slideFrom[0], stage[0], toStage), sy = lerp(slideFrom[1], stage[1] - 10, toStage);
	const slideV = prog(f, K10.lift + 16, 10);
	const lowN = Math.min(20, Math.max(0, Math.floor(f - K10.lower - 4) + 1));
	const upN = Math.min(3, Math.max(0, Math.floor((f - K10.upper - 36) / 8) + 1));
	return (
		<Svg>
			<Title text="A second method: counting stomata" />
			<T x={96} y={196} w={800} text="where can water leave?" size={44} color={INK} at={K10.where} />
			<PicH p={PL.varn} cx={170} cy={320} h={180} />
			<LeafCrop cx={410} cy={330} w={240} id="p02-s10-leaf" />
			{patch > 0.01 ? <ellipse cx={410 + 20 * lift} cy={334 + 120 * lift * (1 - toStage)} rx={70 * (1 - 0.3 * lift)} ry={34} fill="#f4fbff" stroke="#9cc3d8" strokeWidth={2.5} opacity={0.75 * patch * (1 - toStage)} /> : null}
			{lift > 0.01 ? <rect x={330 + 20 * lift} y={300 + 120 * lift - 8} width={170} height={60} rx={6} fill="#eef6f7" stroke="#9bb8bf" strokeWidth={2} opacity={0.6 * lift * (1 - toStage)} /> : null}
			<GTag x={96} y={420} text="peel: an imprint of the leaf surface" size={28} at={K10.peel} />
			<PicH p={PL.micro} cx={250} cy={735} h={330} />
			{slideV > 0.01 ? <g opacity={slideV}><rect x={sx - 70} y={sy - 14} width={140} height={28} rx={4} fill="#e8f3f6" stroke="#7ea7b3" strokeWidth={2.5} /><ellipse cx={sx} cy={sy} rx={30} ry={8} fill="#cfe5ea" /></g> : null}
			<PicPair a={PL.low} b={PL.up} cx={FD.cx} cy={FD.cy} w={FD.w} at={K10.upper} dur={30} />
			<CountMarks pts={low} at={K10.lower + 4} step={1} out={K10.upper + 20} r={15} />
			<CountMarks pts={up} at={K10.upper + 36} step={8} r={15} color={TEAL} />
			<T x={600} y={890} w={620} text="field of view: the circle you see down the microscope" size={36} color={INK} at={K10.under} />
			<Tag x={1250} y={156} w={574} text="same magnification, same field area; several random, non-overlapping fields; a few leaves of one species" size={28} color="#8d857a" ink={GREYT} fill="#f1eee7" at={K10.mag} />
			<Sx x={1260} y={366} text={`lower surface: ${f >= K10.lower ? lowN : '?'}`} size={52} color={f >= K10.lower ? AMBER_INK : GREYT} weight={800} at={ON} />
			<Sx x={1260} y={440} text={`upper surface: ${upN > 0 ? upN : '?'}`} size={52} color={f >= K10.upper ? TEAL : GREYT} weight={800} at={ON} />
			<g opacity={prog(f, K10.few, 12)}>{[0, 1, 2].map(i => <circle key={i} cx={1680 + i * 52} cy={520 - (i % 2) * 24} r={22} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="5 4" />)}<Sx x={1732} y={580} text="more fields" size={28} color={GREYT} hand anchor="middle" at={ON} /></g>
			<PicH p={PL.stoma} cx={1330} cy={570} h={150} />
			<T x={1420} y={570} w={400} text="each mark is a stoma, like this" size={32} color={INK} at={ON} />
			<Tag x={1250} y={680} w={574} text="illustrative equal-area counts per field, not a species-wide result" size={28} color="#8d857a" ink={GREYT} fill="#f1eee7" at={K10.lower} />
			<Sx x={1250} y={840} text="stomatal count: where water can leave" size={36} color={TEAL} hand at={K10.alone} />
			<Sx x={1250} y={890} text="a count alone doesn't measure water-loss rate" size={36} color={TERRA} hand at={K10.lost - 30} />
			<StepRail cur={5} />
		</Svg>
	);
};

// ---------- 11. validity, reliability, accuracy ----------
const K11 = K('validity-reliability', {three: 'three questions', validity: 'Validity', controls: 'Controls support', tests: 'It tests', close: 'close to', reliability: 'Reliability', repeats: 'do repeats', yes: 'Yes, within', accuracy: 'Accuracy', truev: 'true value', slow: 'slow leak', shifts: 'shifts every', more: 'more repeats', fix: 'fix a'});
const CX = [96, 686, 1276], CW = 548;
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const lit = [K11.validity, K11.reliability, K11.accuracy];
	const card = (i: number, q: string, a: string, aAt: number, pic: React.ReactNode) => {
		const L = prog(f, lit[i], 12);
		const next = i < 2 ? prog(f, lit[i + 1], 12) : 0;
		return (
			<g key={i}>
				<rect x={CX[i]} y={160} width={CW} height={720} rx={20} fill={L > 0.5 && next < 0.5 ? '#fffaf0' : CARD} stroke={L > 0.5 ? BLUE : EDGE} strokeWidth={L > 0.5 ? 4 : 3} />
				{pic}
				<T x={CX[i] + 22} y={520} w={CW - 44} text={q} size={40} color={BLUE} />
				<g opacity={0.4 + 0.6 * prog(f, aAt, 12)}><T x={CX[i] + 22} y={620} w={CW - 44} text={a} size={34} color={INK} /></g>
			</g>
		);
	};
	const zk = 1300 / 1163;
	const zx = 1550 - (1000 - 1003.5) * zk, zy = 330 - (POT.capY - 978.5) * zk;
	const P = potPt(zx, zy, 1300);
	const [jx, jy] = P(POT.resJoint[0], POT.resJoint[1]);
	const drop = prog(f, K11.slow, 20);
	const mm = (fr: number) => 30 + 4 * smooth(prog(fr, K11.shifts, 40));
	const [bx] = P(mmNat(mm(f)), 0);
	return (
		<Svg>
			<Title text="Judge it: three questions" />
			{card(0, 'Validity: measures what it was meant to?', "Supported by controls: same settled shoot, alternating trials, temperature and light checked. Uptake ≈ loss, not equal.", K11.controls, <g><Fan cx={190} cy={320} h={210} /><Pot cx={460} cy={330} w={320} mm={() => 20} bubbleAt={ON} /></g>)}
			{card(1, 'Reliability: do repeats agree?', 'Three readings each: spread 0.4 mm per minute; use the mean.', K11.yes, <Tbl t={{cols: [150, 90, 90, 90], head: ['', '1', '2', '3'], rows: [['fan off', '4.2', '3.8', '4.0'], ['fan on', '9.4', '9.2', '9.6']]}} x={720} y={220} size={32} headSize={28} rowH={70} />)}
			{card(2, 'Accuracy: close to the true value?', 'A leak or a different bubble edge shifts readings. More readings show agreement, not the true value.', K11.truev, <g>
				<defs><clipPath id="p02-vra"><rect x={1296} y={190} width={508} height={290} rx={14} /></clipPath></defs>
				<g clipPath="url(#p02-vra)"><Pot cx={zx} cy={zy} w={1300} mm={mm} bubbleAt={ON} nums={ON} numSize={26} /></g>
				{drop > 0.01 ? <ellipse cx={jx + 4} cy={jy + 26 + 20 * drop} rx={9 + 4 * drop} ry={12 + 6 * drop} fill="#cfe5f2" stroke={WATER} strokeWidth={2.5} opacity={drop} /> : null}
				<line x1={bx - 15 * zk} x2={bx - 15 * zk} y1={zy - 40 + (POT.capY - 978.5) * zk - 10} y2={zy + (POT.capY - 978.5) * zk + 40} stroke={TEAL} strokeWidth={4} opacity={0.4 + 0.6 * prog(f, K11.accuracy, 12)} />
				<line x1={bx + 15 * zk} x2={bx + 15 * zk} y1={zy - 40 + (POT.capY - 978.5) * zk - 10} y2={zy + (POT.capY - 978.5) * zk + 40} stroke={RED} strokeWidth={4} strokeDasharray="6 5" opacity={0.4 + 0.6 * prog(f, K11.accuracy, 12)} />
				<GTag x={1550} y={440} text="read one edge (2 mm apart)" size={26} anchor="middle" />
			</g>)}
			<Mistake x={1276} y={892} text="more repeats" size={36} at={K11.more} cross={K11.fix} note="repeats don't seal a joint" noteW={540} />
			<GTag x={96} y={904} text="Next video: these three words in exam questions" size={28} />
			<StepRail cur={5} />
			{void Chip}{void AMBER}{void pulse}{void potK}
		</Svg>
	);
};

// ---------- 12. risk assessment ----------
const K12 = K('risk-assessment', {risk: 'risk assessment', cut: 'Cut stems', tile: 'a tile', fingers: 'your fingers', blade: 'sharp blade', slip: 'can slip', keep: 'Keep the', cord: 'its cord', away: 'away from the', mop: 'mop up', shock: 'electric shock', nail: 'Nail varnish', flam: 'flammable', fumes: 'its fumes', little: 'a little', vent: 'ventilated', flames: 'from flames'});
const RC = [96, 356, 716, 1096], RW = [260, 360, 380, 728];
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const rows: {hazard: string; harm: string; harmAt: number; control: string; ctlAt: number; at: number; end: number; icon: (x: number, y: number) => React.ReactNode}[] = [
		{hazard: 'sharp blade', harm: 'cuts', harmAt: K12.blade, control: 'cut on a tile, away from fingers', ctlAt: K12.tile, at: K12.cut, end: K12.keep, icon: (x, y) => <g><PicH p={PL.tile} cx={x + 130} cy={y + 110} h={120} /><Pic p={PL.scal} cx={x + 130} cy={y + 104} w={170} /></g>},
		{hazard: 'fan near water', harm: 'electric shock', harmAt: K12.shock, control: 'fan and cord away from water; dry bench; mop spills', ctlAt: K12.cord, at: K12.keep, end: K12.nail, icon: (x, y) => <g><PicH p={PL.fan} cx={x + 70} cy={y + 106} h={170} /><WaterTint x={x + 160} y={y + 150} w={86} h={44} /><g opacity={prog(f, K12.away, 12)}><path d={`M${x + 126},${y + 196} L${x + 126},${y + 206} L${x + 160},${y + 206} L${x + 160},${y + 196}`} fill="none" stroke={GREENC} strokeWidth={4} /></g></g>},
		{hazard: 'nail varnish', harm: 'fire; fumes irritate', harmAt: K12.flam, control: 'small amount; ventilated; no flames', ctlAt: K12.little, at: K12.nail, end: 1e9, icon: (x, y) => <PicH p={PL.varn} cx={x + 130} cy={y + 110} h={170} />},
	];
	const RY = (i: number) => 230 + i * 220;
	return (
		<Svg>
			<Title text="Risk assessment" />
			<rect x={96} y={160} width={1728} height={70} rx={12} fill="#f1ebdf" stroke="rgba(60,45,20,0.45)" strokeWidth={2.5} />
			{['', 'Hazard', 'Harm', 'Control'].map((h, c) => <Sx key={c} x={RC[c] + 20} y={208} text={h} size={34} color={INK} weight={800} at={ON} />)}
			{rows.map((r, i) => {
				const cur = vis(f, r.at, r.end, 12);
				const done = f >= r.end ? 1 : 0;
				const y = RY(i);
				return (
					<g key={i} opacity={1 - 0.35 * done}>
						<rect x={96} y={y} width={1728} height={212} rx={12} fill={CARD} stroke="rgba(60,45,20,0.35)" strokeWidth={2} />
						{cur > 0.01 ? <rect x={100} y={y + 4} width={1720} height={204} rx={10} fill={AMBER} opacity={0.14 * cur} /> : null}
						{r.icon(RC[0], y)}
						<T x={RC[1] + 20} y={y + 110} w={RW[1] - 40} text={r.hazard} size={42} color={TERRA} />
						<T x={RC[2] + 20} y={y + 110} w={RW[2] - 40} text={r.harm} size={42} color={INK} at={r.harmAt} />
						<T x={RC[3] + 20} y={y + 92} w={RW[3] - 40} text={r.control} size={42} color={INK} at={r.ctlAt} />
					</g>
				);
			})}
			{RC.slice(1).map((x, i) => <line key={i} x1={x} x2={x} y1={160} y2={890} stroke="rgba(60,45,20,0.25)" strokeWidth={2} />)}
			<Chip x={96} y={912} text="follow your school's risk assessment" size={36} color={TERRA} ink={INK} />
			<StepRail cur={6} />
			{void DrawPath}{void lerp}{void PlateB}{void INK_SOFT}
		</Svg>
	);
};
