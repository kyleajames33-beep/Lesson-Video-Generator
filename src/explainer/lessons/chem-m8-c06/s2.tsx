// M8 C06 scenes 9 to 14: the worked Winkler calculation in the g01 layout (task strip, the ratio strip, grouped givens
// with units, the burette and sample beside them, one stage line at a time, the framed answer and the crossed "divide by
// the titre"; the saturation gauge), BOD (two bottles from one sample: one to the meter on day 0, one sealed in the dark
// incubator for five ticked days and back to the meter; each condition with its reason; the microbe lens; the crossed
// "high BOD = lots of oxygen"), the worked BOD (the meter readout counting down over five days, the framed 3.5 mg/L and
// the teaching-guide band) and reading DO and BOD together (the two-by-two card with its gauges and trend arrows, the
// limits card, the crossed "low BOD = safe water", the probe for tonight).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BURETTE, DOM, INCUB, LAKE, NB, TILE, WB, sc} from './common';
import {
	ChainPills, AChip, ANS, Arrow, BottleStates, BuretteFill, DayStrip, DimG, Fade, FillBar, Framed, GCard, GREYT, GREYX, GuideBand, HTag, INK, INK_SOFT, IOD_INK, MicrobeLens, MistakeX, NAVY, O2_INK, P, PicF, PicV,
	RED8, SatBar, Sx, TaskLine, WLine, burAt, mw, Lock, O2Glyph, clamp01, FlaskTint, lerp, picWp, rigGeom, smooth, vis, wbW, MNO_INK,
} from './parts';

const ramp = (f: number, a: number, b: number, v0: number, v1: number) => lerp(v0, v1, smooth(clamp01((f - a) / Math.max(1, b - a))));

// ---------- the worked-example board (scenes 9 to 11) ----------
const TASK9 = 'Find the dissolved oxygen in mg/L';
const GIVENS = [`sample: V = 100.0${NB}mL = 0.1000${NB}L`, `Na_2S_2O_3: c = 0.0100${NB}mol/L`, `titre: V = 8.00${NB}mL = 0.00800${NB}L`, `M(O_2) = 32.00${NB}g/mol`];
const WY = [860, 940, 1020];
/** The calculation path (site card 3): four boxes, each lit while it is the current stage; a box's operation is replaced
 *  by its result once the result is established. */
type PBox = {title: string; op: string; res: string; resAt: number; lit?: [number, number]};
const PathRow: React.FC<{boxes: PBox[]}> = ({boxes}) => {
	const f = useCurrentFrame();
	const W = 250, G = 30, Y = 660, H = 120;
	return (
		<g>
			{boxes.map((b, i) => {
				const x = 96 + i * (W + G);
				const L = b.lit ? vis(f, b.lit[0], b.lit[1], 10) : 0;
				const r = prog(f, b.resAt, 12);
				return (
					<g key={i}>
						<rect x={x} y={Y} width={W} height={H} rx={18} fill={L > 0.5 ? '#fff6dc' : '#fffdf8'} stroke={L > 0.01 ? '#c9781a' : 'rgba(60,45,20,0.25)'} strokeWidth={L > 0.01 ? 5 : 3} />
						<Sx x={x + W / 2} y={Y + 46} text={b.title} size={32} color={NAVY} anchor="middle" weight={800} at={-1000} />
						<Sx x={x + W / 2} y={Y + 96} text={b.op} size={30} color="#a8560e" anchor="middle" hand weight={700} at={-1000} opacity={1 - r} />
						<Sx x={x + W / 2} y={Y + 96} text={b.res} size={28} color={ANS} anchor="middle" weight={800} at={b.resAt} />
						{i < boxes.length - 1 ? <path d={`M${x + W + 4},${Y + H / 2} L${x + W + G - 4},${Y + H / 2} M${x + W + G - 14},${Y + H / 2 - 9} L${x + W + G - 4},${Y + H / 2} L${x + W + G - 14},${Y + H / 2 + 9}`} stroke={INK_SOFT} strokeWidth={4} fill="none" strokeLinecap="round" /> : null}
					</g>
				);
			})}
		</g>
	);
};
const PB = (r: number[], lit: ([number, number] | undefined)[]): PBox[] => [
	{title: 'S_2O_3^{2−} (mol)', op: 'n = cV', res: `8.00 × 10^{−5}${NB}mol`, resAt: r[0], lit: lit[0]},
	{title: 'O_2 (mol)', op: '÷ 4', res: `2.00 × 10^{−5}${NB}mol`, resAt: r[1], lit: lit[1]},
	{title: 'O_2 (mg)', op: '× 32.00, then mg', res: `0.640${NB}mg`, resAt: r[2], lit: lit[2]},
	{title: 'DO (mg/L)', op: '÷ V(sample)', res: `6.40${NB}mg/L`, resAt: r[3], lit: lit[3]},
];
const RatioStrip: React.FC<{glow?: [number, number]}> = ({glow}) => {
	const f = useCurrentFrame();
	const g = glow ? vis(f, glow[0], glow[1], 10) : 0;
	return (
		<g>
			<rect x={96} y={190} width={980} height={76} rx={18} fill={g > 0.5 ? '#fff6dc' : '#fffdf8'} stroke={g > 0.01 ? '#c9781a' : NAVY} strokeWidth={g > 0.01 ? 5 : 3} />
			<Sx x={124} y={242} text="ratio: 1 O_2 : 4 S_2O_3^{2−}" size={42} color={NAVY} weight={800} at={2} />
			<Sx x={700} y={240} text="(from the three equations)" size={30} color={INK_SOFT} hand weight={700} at={2} />
		</g>
	);
};
const R9 = {tx: 1420, ty: 520, bh: 420, fh: 270};
/** The titration picture beside the givens: burette (8.00 mL delivered) over the clear endpoint flask, and the sample bottle. */
const Picture: React.FC<{o?: number}> = ({o = 1}) => {
	const b = burAt(R9.tx, R9.ty, R9.bh);
	const G = rigGeom(R9.tx, R9.ty, R9.fh);
	const tw = G.w * 1.7, th = (tw * TILE.box[3]) / TILE.box[2];
	return (
		<g opacity={o}>
			<PicF p={TILE} x={R9.tx - tw / 2} y={G.y + R9.fh - th * 0.55} h={th} />
			<BuretteFill x={b.x} y={b.y} h={R9.bh} level={() => 8} />
			<FlaskTint x={G.x} y={G.y} h={R9.fh} clear={-1000} />
			<Sx x={b.x + 130} y={b.y + 110} text={`titre: 8.00${NB}mL`} size={34} color={NAVY} weight={800} at={-1000} />
			<Sx x={b.x + 130} y={b.y + 152} text="Na_2S_2O_3" size={30} color={NAVY} weight={700} at={-1000} />
			<PicF p={WB.iodine} x={1650} y={480} h={340} />
			<Sx x={1650 + wbW(340) / 2} y={870} text={`100.0${NB}mL sample`} size={32} color={IOD_INK} anchor="middle" weight={700} at={-1000} />
		</g>
	);
};
const GV = {x: 96, y: 290, w: 980, size: 42, lh: 64};

// ---------- 9. Worked example: moles of thiosulfate ----------
const K9 = cues(sc('worked-moles'), {work: 'work one', hundred: 'hundred millilitre', eight: 'eight point zero zero', pt: 'point zero one zero zero', find: 'Find', start: 'Start with', moles: 'Moles equals', ctv: 'c times', pt2: ['point zero one zero zero', 2], litres: 'litres', is: 'is eight', thio2: ['thiosulfate', 2]});
export const SceneMoles: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text={TASK9} at={0} />
		<RatioStrip />
		<GCard x={GV.x} y={GV.y} w={GV.w} size={GV.size} lh={GV.lh} at={0} lines={[
			{t: GIVENS[0], at: 4, lit: [K9.hundred, K9.eight]},
			{t: GIVENS[1], at: 8, lit: [K9.pt, K9.find]},
			{t: GIVENS[2], at: 12, lit: [K9.eight, K9.pt]},
			{t: GIVENS[3], at: 16, grey: true},
		]} />
		<Picture />
		<PathRow boxes={PB([K9.thio2 - 6, 1e9, 1e9, 1e9], [[K9.start, 1e9], undefined, undefined, undefined])} />
		<HTag x={GV.x + GV.w - 20} y={GV.y + 48} text="both numbers known: c and V" size={32} color={NAVY} anchor="end" at={K9.start} />
		<WLine x={96} y={WY[0]} size={48} items={P('n(S_2O_3^{2−}) = cV = 0.0100 × 0.00800', K9.moles)} />
		<WLine x={430} y={WY[1] + 4} size={48} items={[{t: `= 8.00 × 10^{−5}${NB}mol`, at: K9.thio2 - 12, color: NAVY}]} />
		<AChip x={1130} y={WY[1] - 40} text="c01: n = cV" size={30} color={GREYX} hand={false} at={K9.ctv} />
		<HTag x={96} y={WY[2] + 20} text="litres, not millilitres" size={34} color={INK_SOFT} at={K9.litres} />
		{void K9.work}{void K9.pt2}{void K9.is}
	</svg>
);

// ---------- 10. Worked example: ratio, then mass ----------
const K10 = cues(sc('worked-mass'), {use: 'use the ratio', divide: 'Divide', four: 'four', oxygen: 'oxygen', times: 'Times thirty', grams: 'grams', mg: 'milligrams', sample: 'sample'});
export const SceneMass: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text={TASK9} at={-1000} />
		<RatioStrip glow={[K10.use, K10.oxygen + 20]} />
		<GCard x={GV.x} y={GV.y} w={GV.w} size={GV.size} lh={GV.lh} at={-1000} lines={[
			{t: GIVENS[0], at: -1000, lit: [K10.sample - 10, K10.sample + 60]},
			{t: GIVENS[1], at: -1000},
			{t: GIVENS[2], at: -1000},
			{t: GIVENS[3], at: -1000, lit: [K10.times, K10.grams + 20]},
		]} />
		<Picture />
		<PathRow boxes={PB([-1000, K10.oxygen - 6, K10.mg - 6, 1e9], [undefined, [K10.use, K10.times], [K10.times, 1e9], undefined])} />
		<WLine x={96} y={WY[0]} size={46} dim={K10.times} dimTo={0.5} items={P('n(O_2) = 8.00 × 10^{−5} ÷ 4', K10.divide, {t: `= 2.00 × 10^{−5}${NB}mol`, color: NAVY}, K10.oxygen - 12)} />
		<WLine x={96} y={WY[1]} size={46} items={P('m(O_2) = nM = 2.00 × 10^{−5} × 32.00', K10.times, {t: `= 6.40 × 10^{−4}${NB}g`, color: NAVY}, K10.grams - 16)} />
		<WLine x={96} y={WY[2]} size={50} items={[{t: `= 0.640${NB}mg`, at: K10.mg - 8, color: ANS}]} />
		<Sx x={420} y={WY[2]} text="(× 1000 mg/g)" size={34} color={INK_SOFT} weight={600} at={K10.mg} />
		<Fade at={K10.sample - 6}>
			<rect x={760} y={WY[2] - 46} width={330} height={64} rx={32} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
			<Sx x={925} y={WY[2]} text={`in 100.0${NB}mL`} size={36} color={NAVY} anchor="middle" weight={800} at={-1000} />
		</Fade>
		<Fade at={K10.use} out={K10.times - 16}>
			<rect x={1150} y={880} width={674} height={170} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			{[0, 1, 2, 3].map(i => <circle key={i} cx={1210 + i * 46} cy={950} r={17} fill="#9fb3d8" stroke={NAVY} strokeWidth={2.5} />)}
			<path d="M1190,982 Q1279,1010 1368,982" fill="none" stroke={INK_SOFT} strokeWidth={3} />
			<Sx x={1279} y={1032} text="4 S_2O_3^{2−}" size={30} color={NAVY} anchor="middle" weight={800} at={-1000} />
			<path d="M1420,950 L1560,950 M1546,938 L1560,950 L1546,962" fill="none" stroke="#c9781a" strokeWidth={5} strokeLinecap="round" />
			<Sx x={1468} y={996} text="÷ 4" size={34} color="#c9781a" weight={800} at={-1000} />
			<O2Glyph x={1640} y={950} s={1.6} />
			<Sx x={1640} y={1032} text="1 O_2" size={30} color={O2_INK} anchor="middle" weight={800} at={-1000} />
		</Fade>
		<Sx x={1170} y={916} text="four thiosulfates per O_2" size={30} color="#c9781a" hand weight={700} at={K10.four} out={K10.times - 16} />
		{void K10.oxygen}
	</svg>
);

// ---------- 11. Worked example: per litre ----------
const K11 = cues(sc('worked-per-litre'), {want: 'want', divide: 'divide by', sample: "sample's volume", not: 'not by', titre: 'titre', point: 'Point six four zero', litre: ['litre', 2]});
export const ScenePerLitre: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text={TASK9} at={-1000} />
		<RatioStrip />
		<GCard x={GV.x} y={GV.y} w={GV.w} size={GV.size} lh={GV.lh} at={-1000} lines={[
			{t: GIVENS[0], at: -1000, lit: [K11.sample, K11.litre + 30]},
			{t: GIVENS[1], at: -1000},
			{t: GIVENS[2], at: -1000},
			{t: GIVENS[3], at: -1000},
		]} />
		<Picture />
		<PathRow boxes={PB([-1000, -1000, -1000, K11.litre - 6], [undefined, undefined, [-1000, K11.divide], [K11.divide, 1e9]])} />
		<WLine x={96} y={870} size={50} items={P(`DO = 0.640${NB}mg ÷ 0.1000${NB}L`, K11.divide)} />
		<Framed x={96} y={1004} text={`= 6.40${NB}mg/L`} at={K11.litre - 16} size={64} color={ANS} />
		<MistakeX x={1100} y={880} text={`÷ titre (8.00${NB}mL)`} at={K11.not - 10} cross={K11.titre + 6} note="the O_2 came from the sample" size={36} />
		{/* the saturation comparison (screen only) */}
		<Fade at={K11.litre + 10}>
			<rect x={560} y={934} width={520} height={136} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={580} y={970} text={`air-saturated at 20 °C: about 9.1${NB}mg/L`} size={27} color={O2_INK} weight={700} at={-1000} />
		</Fade>
		<FillBar x={580} y={984} w={480} h={30} k={0.7} at={K11.litre + 16} />
		<Sx x={580} y={1054} text="about 70% of air saturation (if at 20 °C)" size={27} color={GREYT} hand weight={700} at={K11.litre + 30} />
		{void K11.want}{void K11.point}{void SatBar}
	</svg>
);

// ---------- 12. BOD: the forecast ----------
const K12 = cues(sc('bod-forecast'), {now: 'now', bio: 'Biochemical', bod: 'or BOD', measures: 'measures how', five: 'five days', fill: 'Fill two', measure: 'Measure the DO', away: 'straight away', seal: 'Seal the other', dark: 'dark at', sealed: 'Sealed', dark2: ['Dark', 2], twenty2: ['Twenty degrees', 2], again: 'measure it again', gone: "that's gone", microbes: 'microbes breaking', organic: 'organic matter', so: 'So a high', present: 'present'});
export const SceneBOD: React.FC = () => {
	const f = useCurrentFrame();
	const BH = 360, BW = wbW(BH), BY = 500;
	const MP = {x: 96, y: 400, h: 500};
	const IP = {x: 1000, y: 400, h: 480};
	const IW = picWp(INCUB, IP.h);
	const ax = ramp(f, K12.away - 10, K12.away + 30, 500, 450);
	const inB = ramp(f, K12.seal, K12.seal + 40, 0, 1);
	const outB = ramp(f, K12.again - 10, K12.again + 40, 0, 1);
	const bx = f < K12.again - 10 ? lerp(680, IP.x + IW * 0.42, inB) : lerp(IP.x + IW * 0.42, 660, outB);
	const bo = f < K12.again - 10 ? 1 - prog(f, K12.seal + 26, 14) : prog(f, K12.again - 10, 14);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="BOD_5: oxygen used in 5 days" at={0} />
			<Fade at={0} out={K12.bio - 6}>
				<rect x={96} y={196} width={620} height={74} rx={37} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={406} y={246} text="DO tells you the oxygen now" size={38} color={NAVY} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<Sx x={96} y={240} text="biochemical oxygen demand (BOD_5):" size={40} color={INK} weight={800} at={K12.bio} />
			<Sx x={96} y={298} text="oxygen microbes use in 5 days, sealed, dark, 20 °C" size={36} color={INK} weight={600} at={K12.measures} />
			<PicV p={DOM} x={MP.x} y={MP.y} h={MP.h} />
			<PicV p={INCUB} x={IP.x} y={IP.y} h={IP.h} />
			<DayStrip x={IP.x + 10} y={IP.y - 74} w={IW - 20} at={K12.seal} from={K12.twenty2 - 140} to={K12.again - 20} />
			{/* bottle A: day 0 */}
			<PicF p={WB.clear} x={ax} y={BY} h={BH} />
			<HTag x={ax + BW / 2} y={BY + BH + 44} text="day 0: initial DO" size={34} color={NAVY} anchor="middle" at={K12.away} />
			{/* bottle B: sealed in the dark, back on day 5 */}
			<g opacity={bo}><PicF p={WB.clear} x={bx} y={BY} h={BH} /></g>
			<HTag x={660 + BW / 2} y={BY + BH + 44} text="day 5: final DO" size={34} color={NAVY} anchor="middle" at={K12.again + 30} />
			<Fade at={K12.fill} out={K12.away}>
				<path d={`M500,${BY - 20} L500,${BY - 50} L${680 + BW},${BY - 50} L${680 + BW},${BY - 20}`} fill="none" stroke={INK_SOFT} strokeWidth={4} />
				<Sx x={(500 + 680 + BW) / 2} y={BY - 66} text="same sample" size={34} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />
			</Fade>
			<Arrow x1={MP.x + 300} y1={BY + BH * 0.5} x2={ax - 6} y2={BY + BH * 0.5} at={K12.away + 20} color={NAVY} width={4} out={K12.again - 10} />
			{/* the three conditions */}
			<rect x={1440} y={400} width={384} height={250} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Sx x={1462} y={446} text="test conditions" size={32} color={INK_SOFT} hand weight={700} at={-1000} />
			{([["sealed:", " no new O_2", K12.sealed, 510], ["dark:", " no photosynthesis", K12.dark2, 566], ["20 °C:", " results compare", K12.twenty2, 622]] as [string, string, number, number][]).map(([a, b, t, y]) => (
				<g key={a}>
					<CondIcon kind={a} x={1476} y={y - 11} />
					<Sx x={1506} y={y} text={a} size={32} color={NAVY} weight={800} at={4} />
					<Sx x={1506 + mw(a, 32, false, 800)} y={y} text={b} size={28} color={INK} weight={700} at={t} />
				</g>
			))}
			<MicrobeLens cx={1640} cy={820} r={150} at={K12.gone - 10} gather={K12.microbes - 20} use={K12.organic - 30} />
			<HTag x={760} y={994} text="microbes use O_2 to break" size={38} color={MNO_INK} at={K12.microbes} />
			<HTag x={760} y={1044} text="down organic matter" size={38} color={MNO_INK} at={K12.organic} />
			<MistakeX x={96} y={930} text="high BOD = lots of oxygen" at={K12.so} cross={K12.present} note="lots of oxygen used" size={36} />
			{void K12.now}{void K12.bod}{void K12.five}{void K12.measure}{void K12.dark}{void K12.seal}
		</svg>
	);
};

/** Small coded condition icons: a padlock (sealed), a dark disc with a moon (dark), a thermometer (20 °C). */
const CondIcon: React.FC<{kind: string; x: number; y: number}> = ({kind, x, y}) => (
	kind.startsWith('sealed') ? <Lock x={x} y={y - 6} at={-1000} s={0.42} color={NAVY} /> : kind.startsWith('dark') ? (
		<g><circle cx={x} cy={y} r={16} fill="#2f3348" /><path d={`M${x + 3},${y - 9} A9,9 0 1 0 ${x + 3},${y + 9} A7,7 0 1 1 ${x + 3},${y - 9} Z`} fill="#e8e4d6" /></g>
	) : (
		<g><rect x={x - 5} y={y - 20} width={10} height={30} rx={5} fill="#fffdf8" stroke={INK} strokeWidth={2.5} /><circle cx={x} cy={y + 12} r={9} fill={RED8} stroke={INK} strokeWidth={2.5} /><rect x={x - 2} y={y - 8} width={4} height={18} fill={RED8} /></g>
	)
);

// ---------- 13. Worked BOD and what it means ----------
const K13 = cues(sc('bod-worked'), {bod: 'BOD five', minus: 'minus', starts: 'starts at', eight: 'eight point four', after: ['after five days', 2], four: 'four point nine', thats: "That's a", three: 'three point five', microbes: 'Microbes in', used: 'used three', moderate: 'moderate', guide: 'guide'});
export const SceneBODWorked: React.FC = () => {
	const f = useCurrentFrame();
	const day = ramp(f, K13.eight + 20, K13.four, 0, 5);
	const read = ramp(f, K13.eight + 20, K13.four, 8.4, 4.9);
	const MP = {x: 1180, y: 300, h: 380};
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Find the BOD_5" at={0} />
			<rect x={96} y={190} width={980} height={76} rx={18} fill="#fffdf8" stroke={NAVY} strokeWidth={3} />
			<Sx x={124} y={243} text="BOD_5 = initial DO − final DO" size={44} color={NAVY} weight={800} at={2} />
			<Sx x={96} y={306} text="undiluted sample; strong samples are diluted first and scaled" size={28} color={GREYT} hand weight={700} at={K13.minus} />
			<GCard x={96} y={340} w={980} size={38} lh={62} at={0} lines={[
				{t: `initial DO = 8.4${NB}mg/L`, at: 4, lit: [K13.eight, K13.after]},
				{t: `DO after 5 days, dark, 20 °C = 4.9${NB}mg/L`, at: 8, lit: [K13.four, K13.thats]},
			]} />
			<WLine x={96} y={620} size={50} items={P('BOD_5 = 8.4 − 4.9', K13.thats - 20)} />
			<Framed x={600} y={632} text={`= 3.5${NB}mg/L`} at={K13.three - 6} size={58} color={ANS} />
			<Sx x={96} y={760} text={`microbes in 1${NB}L used 3.5${NB}mg of O_2 in 5 days`} size={40} color={INK} hand weight={700} at={K13.microbes} />
			{/* the live readout */}
			<PicV p={DOM} x={MP.x} y={MP.y} h={MP.h} />
			<PicF p={WB.clear} x={1500} y={330} h={330} />
			<rect x={1430} y={700} width={390} height={86} rx={14} fill="#2b3138" />
			<Sx x={1625} y={758} text={`day ${Math.floor(day + 0.001)}: ${read.toFixed(1)}${NB}mg/L`} size={40} color="#9be3b8" anchor="middle" weight={700} at={4} />
			<Sx x={1625} y={280} text="sealed, dark, 20 °C" size={30} color={INK_SOFT} anchor="middle" hand weight={700} at={K13.after} />
			<GuideBand x={96} y={880} w={1300} at={K13.moderate - 40} mark={[{v: 3.5, at: K13.guide - 6, label: '3.5'}]} />
			<Sx x={1450} y={940} text="moderate on this guide" size={34} color={ANS} hand weight={700} at={K13.guide} />
			{void K13.bod}{void K13.used}{void INCUB}
		</svg>
	);
};

// ---------- 14. Reading DO and BOD together, and BOD's limits ----------
const K14 = cues(sc('together-limits'), {read: 'Read the two', low: 'Low DO with', high: 'high BOD', means: 'means the water', pattern: 'pattern', but: 'But BOD', only: 'only sees', identify: 'identify metals', poison: 'poison', reads: 'reads low', lowb: 'A low BOD', safe: 'safe', takes: 'takes five', tonight: 'tonight', probe: 'probe'});
const Cell: React.FC<{x: number; y: number; w: number; h: number; level: number; trend: number; lit?: number}> = ({x, y, w, h, level, trend, lit}) => {
	const f = useCurrentFrame();
	const L = lit === undefined ? 0 : prog(f, lit, 12);
	const gx0 = x + 40, gh = h - 60, gy0 = y + 30;
	const c = level > 0.5 ? '#4fa36a' : RED8;
	const ax = x + 130, ay = y + 50;
	return (
		<g>
			<rect x={x} y={y} width={w} height={h} rx={16} fill={L > 0.5 ? '#fff1dd' : '#fffdf8'} stroke={L > 0.01 ? '#c9781a' : 'rgba(60,45,20,0.22)'} strokeWidth={L > 0.01 ? 5 : 3} />
			<rect x={gx0} y={gy0} width={30} height={gh} rx={15} fill="#fffdf8" stroke={INK} strokeWidth={2.5} />
			<rect x={gx0 + 5} y={gy0 + 5 + (gh - 10) * (1 - level)} width={20} height={(gh - 10) * level} rx={9} fill={c} />
			<Sx x={gx0 + 15} y={gy0 - 6} text="DO" size={26} color={O2_INK} anchor="middle" weight={800} at={-1000} />
			<path d={`M${ax},${ay} L${ax + 140},${ay + trend}`} stroke={trend > 40 ? RED8 : INK_SOFT} strokeWidth={6} strokeLinecap="round" />
			<path d={(() => { const a = Math.atan2(trend, 140); const ex = ax + 140, ey = ay + trend; return `M${ex - 20 * Math.cos(a - 0.5)},${ey - 20 * Math.sin(a - 0.5)} L${ex},${ey} L${ex - 20 * Math.cos(a + 0.5)},${ey - 20 * Math.sin(a + 0.5)}`; })()} fill="none" stroke={trend > 40 ? RED8 : INK_SOFT} strokeWidth={6} strokeLinecap="round" />
			<Sx x={ax + 70} y={y + h - 22} text={trend > 40 ? 'O_2 being used fast' : 'O_2 used slowly'} size={26} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
		</g>
	);
};
export const SceneTogether: React.FC = () => {
	const f = useCurrentFrame();
	const GX = 300, GY = 290, CW = 370, CH = 220;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Read DO and BOD together" at={0} />
			<Sx x={GX + CW / 2} y={GY - 24} text="BOD low" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={GX + CW * 1.5 + 20} y={GY - 24} text="BOD high" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={GX - 30} y={GY + CH / 2 + 12} text="DO high" size={36} color={INK} anchor="end" weight={800} at={-1000} />
			<Sx x={GX - 30} y={GY + CH * 1.5 + 32} text="DO low" size={36} color={INK} anchor="end" weight={800} at={-1000} />
			<Cell x={GX} y={GY} w={CW} h={CH} level={0.85} trend={10} />
			<Cell x={GX + CW + 20} y={GY} w={CW} h={CH} level={0.85} trend={80} />
			<Cell x={GX} y={GY + CH + 20} w={CW} h={CH} level={0.25} trend={10} />
			<Cell x={GX + CW + 20} y={GY + CH + 20} w={CW} h={CH} level={0.25} trend={80} lit={K14.low} />
			<PicV p={LAKE.crash} x={GX + CW + 20 + CW - 160} y={GY + CH + 30} h={80} at={K14.high} />
			<Sx x={96} y={830} text="low DO + high BOD: short of oxygen" size={42} color="#a8560e" hand weight={700} at={K14.means} />
			<Sx x={96} y={884} text="and still losing it: trouble ahead" size={42} color="#a8560e" hand weight={700} at={K14.means + 20} />
			{/* the two measurements, then the limits */}
			<DimG at={K14.but - 10} to={0}>
				<PicV p={DOM} x={1150} y={260} h={330} />
				<Sx x={1250} y={650} text="DO: oxygen now" size={36} color={NAVY} anchor="middle" weight={800} at={-1000} />
				<PicV p={INCUB} x={1450} y={300} h={290} />
				<Sx x={1600} y={650} text="BOD: O_2 used in 5 days" size={34} color={NAVY} anchor="middle" weight={800} at={-1000} />
			</DimG>
			<Fade at={K14.but - 6}>
				<rect x={1100} y={220} width={724} height={480} rx={22} fill="#fffdf8" stroke={RED8} strokeWidth={4} />
				<Sx x={1130} y={276} text="what BOD can't show" size={40} color={RED8} hand weight={700} at={-1000} />
			</Fade>
			<Sx x={1130} y={350} text="BOD: only biodegradable" size={36} color={INK} weight={700} at={K14.only} />
			<Sx x={1130} y={396} text="organic matter" size={36} color={INK} weight={700} at={K14.only} />
			<Sx x={1130} y={470} text="doesn't identify: metals, pesticides," size={34} color={INK} weight={600} at={K14.identify} />
			<Sx x={1130} y={514} text="disease-causing microbes" size={34} color={INK} weight={600} at={K14.identify + 10} />
			<Sx x={1130} y={590} text="a toxic sample can stop the" size={34} color={INK} weight={600} at={K14.poison} />
			<Sx x={1130} y={634} text="microbes → BOD reads low" size={34} color={RED8} weight={700} at={K14.reads} />
			<MistakeX x={96} y={940} text="low BOD = safe water" at={K14.lowb} cross={K14.safe} note="check other parameters too" size={36} />
			<AChip x={620} y={944} text="c05: physical, chemical, biological" size={28} color={GREYX} hand={false} at={K14.safe + 10} />
			<Fade at={K14.takes}>
				<rect x={1100} y={760} width={724} height={250} rx={22} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={1130} y={822} text="5 days: too slow for tonight" size={38} color={NAVY} weight={800} at={-1000} />
				<Sx x={1130} y={876} text="→ use the DO probe" size={38} color={NAVY} weight={800} at={K14.probe - 10} />
			</Fade>
			<PicV p={DOM} x={1660} y={790} h={200} at={K14.tonight} />
			{void K14.read}{void K14.pattern}{void f}
		</svg>
	);
};
export {BURETTE, BottleStates};
