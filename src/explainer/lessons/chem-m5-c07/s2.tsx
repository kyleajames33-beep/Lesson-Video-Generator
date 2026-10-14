import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Arrow, Chip, DotP, Fade, GasKey, Overlay, Pellets, Ring, Sx, Tag} from './parts';
import {Bracket, Curve, GraphAxes, Head, VLine, mkG} from '../chem-m5-c04b/parts';
import {Heading, H2C, HEAT, IRON_DARK, N2C, NH3C, RATE, YIELD, CROSS, kf, sc} from './common';

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lin = (f: number, from: number, dur: number) => clamp((f - from) / dur);

// ---------- shared time plot: ammonia in the gas against a made-up clock ----------
export const PG = mkG(420, 250, 1000, 560, 10, 70);
const sat = (C: number, k: number) => (t: number) => C * (1 - Math.exp(-k * t));
export const COOLF = sat(60, 0.09), MIDF = sat(25, 0.85), HOTF = sat(9, 2.5), NOCF = sat(25, 0.2);
export const TL = 3;
const CEIL_X = 1450;
const Plot: React.FC<{at: number}> = ({at}) => (
	<GraphAxes g={PG} at={at} xLabel="time in the reactor (made-up clock)" yLabel="ammonia in the gas (%)" xTicks={[]} yTicks={[0, 20, 40, 60]} />
);
/** A dashed ceiling line with its two-line label. */
const Ceiling: React.FC<{v: number; at: number; name: string; text: string; color?: string; out?: number; dy?: number; note?: string; noteAt?: number}> = ({v, at, name, text, color = YIELD, out, dy = 0, note, noteAt = 0}) => (
	<Fade at={at} out={out}>
		<path d={`M${PG.px(0)},${PG.py(v)} L${PG.px(10) + 12},${PG.py(v)}`} stroke={color} strokeWidth={4.5} strokeDasharray="14 10" />
		<Sx x={CEIL_X} y={PG.py(v) - 6 + dy} text={name} size={36} color={INK} hand at={at} />
		<Sx x={CEIL_X} y={PG.py(v) + 34 + dy} text={text} size={34} color={color} hand at={at + 6} />
		{note ? <Sx x={CEIL_X} y={PG.py(v) + 72 + dy} text={note} size={32} color={RATE} hand at={noteAt} /> : null}
	</Fade>
);

// ---------- 3a. Why not cold: the time in the reactor ----------
const T = 'time-in-reactor';
const K3 = cues(sc(T), {fac: 'a factory', flows: 'flows', iron: 'iron catalyst', allday: 'all day', settle: 'to settle', next: 'The iron comes next', cool: 'Cooling lowers', both: 'both rates', fewer: 'fewer collisions', hard: 'hard to split'});
export const SceneTimeInReactor: React.FC = () => {
	const f = useCurrentFrame();
	const drop = kf(f, [[K3.both, 1], [K3.both + 45, 0.36]]);
	const sparksOn = (i: number) => (i < 2 ? 1 : 1 - prog(f, K3.fewer + (i - 2) * 7, 10));
	const dots = Array.from({length: 24}, (_, j) => {
		const x = ((j * 78 + (f - K3.flows) * 4.2) % 1760) + 80;
		const y = 300 + (((j * 37) % 30) - 15) * 0.7;
		const past = x > 880;
		const fill = past && j % 3 === 0 ? NH3C : j % 2 ? N2C : H2C;
		return <DotP key={j} x={x} y={y} r={9} fill={fill} />;
	});
	return (
		<>
			<Heading text="Time in the reactor" at={4} size={62} />
			<Overlay>
				<Fade at={K3.fac}>
					<rect x={96} y={266} width={1728} height={68} rx={34} fill="#efe9da" stroke={INK_SOFT} strokeWidth={4} />
					<rect x={560} y={246} width={320} height={108} rx={18} fill="#dfe2e6" stroke={IRON_DARK} strokeWidth={5} />
					<Pellets x={566} y={252} w={308} h={96} r={10} />
				</Fade>
				<Fade at={K3.flows}>{dots}</Fade>
				<GasKey x={1330} y={150} at={K3.flows} />
				<Fade at={K3.flows}>
					<Sx x={720} y={226} text="iron catalyst" size={40} color={IRON_DARK} anchor="middle" hand at={K3.iron} />
					<Sx x={96} y={392} text="gas in" size={34} color={INK_SOFT} hand at={K3.flows} />
					<Sx x={1824} y={392} text="gas out" size={34} color={INK_SOFT} anchor="end" hand at={K3.flows} />
				</Fade>
				<Fade at={K3.iron}>
					<path d="M720,362 L720,862" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="12 9" />
					<Sx x={738} y={896} text="time the gas spends over the catalyst" size={32} color={INK_SOFT} hand at={K3.iron + 8} />
				</Fade>
				<Chip x={1130} y={410} w={520} text="a mixture left all day" size={36} at={K3.allday} color={INK_SOFT} cross={K3.settle} />
				{/* both rates fall together */}
				<Sx x={140} y={470} text="both rates" size={42} color={INK} hand at={K3.cool} />
				<Fade at={K3.cool}>
					<path d="M110,842 L420,842" stroke={INK} strokeWidth={4} />
					<rect x={140} y={842 - 300 * drop} width={90} height={300 * drop} fill={RATE} stroke={INK} strokeWidth={3} rx={6} />
					<rect x={270} y={842 - 300 * drop} width={90} height={300 * drop} fill="#d99a2b" stroke={INK} strokeWidth={3} rx={6} />
					<Sx x={185} y={886} text="forward" size={28} color={INK_SOFT} anchor="middle" at={K3.cool} />
					<Sx x={315} y={886} text="reverse" size={28} color={INK_SOFT} anchor="middle" at={K3.cool} />
				</Fade>
				<Fade at={K3.cool}>
					<Snowflake2 x={430} y={560} />
				</Fade>
				{/* collisions with enough energy */}
				<Fade at={K3.fewer - 40}>
					<Sx x={910} y={500} text="collisions with enough energy" size={40} hand at={K3.fewer - 40} />
					<Sx x={910} y={548} text={f < K3.fewer ? 'a warmer gas' : 'a cooler gas'} size={32} color={f < K3.fewer ? HEAT : '#4f8fc0'} hand at={K3.fewer - 40} />
					{Array.from({length: 8}, (_, i) => {
						const cx = 940 + i * 108;
						const s = sparksOn(i);
						return (
							<g key={i}>
								<circle cx={cx - 24} cy={640} r={19} fill={i % 2 ? N2C : H2C} stroke={INK} strokeWidth={3} />
								<circle cx={cx + 24} cy={640} r={19} fill={i % 2 ? H2C : N2C} stroke={INK} strokeWidth={3} />
								<path d={`M${cx - 4},${640 - 40} L${cx - 4},${640 - 24}`} stroke={INK_SOFT} strokeWidth={3} opacity={1 - s} />
								<g opacity={s} transform={`translate(${cx},${590}) scale(${0.9 + 0.1 * Math.sin(f * 0.5 + i)})`}>
									<path d="M0,-22 L5,-6 L22,0 L5,6 L0,22 L-5,6 L-22,0 L-5,-6 Z" fill="#f5c542" stroke={AMBER_INK} strokeWidth={3} strokeLinejoin="round" />
								</g>
							</g>
						);
					})}
				</Fade>
				{/* a nitrogen molecule is hard to split */}
				<Fade at={K3.hard - 10}>
					<circle cx={1280} cy={800} r={26} fill={N2C} stroke={INK} strokeWidth={3} />
					<circle cx={1352} cy={800} r={26} fill={N2C} stroke={INK} strokeWidth={3} />
					<path d="M1306,790 L1326,790 M1306,800 L1326,800 M1306,810 L1326,810" stroke="#fff" strokeWidth={4} />
					<Sx x={1316} y={858} text="N_2" size={36} color={N2C} anchor="middle" hand at={K3.hard} />
				</Fade>
				<Ring cx={1316} cy={800} rx={92} ry={52} at={K3.hard} color={AMBER_INK} seed={3} />
				<Sx x={1430} y={812} text="needs energetic collisions" size={34} color={AMBER_INK} hand at={K3.hard + 14} />
			</Overlay>
		</>
	);
};
const Snowflake2: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g transform={`translate(${x},${y})`} stroke="#4f8fc0" strokeWidth={6} strokeLinecap="round" fill="none">
		{[0, 60, 120].map(a => <path key={a} d="M0,-30 L0,30 M-9,-21 L0,-30 L9,-21 M-9,21 L0,30 L9,21" transform={`rotate(${a})`} />)}
	</g>
);

// ---------- 3b. Three temperatures ----------
const R = 'three-temperatures';
const K4 = cues(sc(R), {three: 'three temperatures', atm: '200 atmospheres', ill: 'These numbers', cool: 'The cool one', c60: 'about sixty', crawls: 'it crawls', little: 'only a little', hot: 'The hot one', once: 'at once', nine: 'about nine', mid: 'The middle one', c25: 'about twenty-five', close: 'gets close', most: 'it gives the most'});
export const SceneThreeTemps: React.FC = () => {
	const f = useCurrentFrame();
	const tc = TL * 1; void tc;
	const up = (start: number, dur: number) => 10 * lin(f, start, dur);
	const uCool = up(K4.cool, 130), uHot = up(K4.hot, 130), uMid = up(K4.mid, 130);
	const dot = (u: number, fn: (t: number) => number, color: string) => (u >= TL ? <circle cx={PG.px(TL)} cy={PG.py(fn(TL))} r={13} fill={color} stroke={INK} strokeWidth={3.5} /> : null);
	return (
		<>
			<Heading text="Three temperatures" at={4} size={62} />
			<Overlay>
				<Tag x={1180} y={100} w={640} text="200 atm, N_2 : H_2 = 1 : 3, illustrative, about" at={K4.atm} size={30} />
				<Tag x={1400} y={170} w={420} text="pattern drawn, not data" at={K4.ill} size={30} />
				<Plot at={K4.three} />
				<VLine g={PG} t={TL} at={K4.three + 10} />
				<Fade at={K4.three + 14}>
					<Sx x={PG.px(TL) + 16} y={PG.y + 40} text="time the gas spends over the catalyst" size={30} color={INK_SOFT} hand at={K4.three + 14} />
					<Sx x={CEIL_X} y={262} text="every curve: with iron catalyst" size={30} color={IRON_DARK} hand at={K4.three + 20} />
				</Fade>
				<Curve g={PG} fn={COOLF} upTo={uCool} color={RATE} width={7} />
				<Curve g={PG} fn={HOTF} upTo={uHot} color={RATE} width={7} />
				<Curve g={PG} fn={MIDF} upTo={uMid} color={RATE} width={7} />
				<Head g={PG} t={Math.min(10, uCool)} v={COOLF(Math.min(10, uCool))} color={RATE} show={uCool > 0 && uCool < 10} />
				<Head g={PG} t={Math.min(10, uHot)} v={HOTF(Math.min(10, uHot))} color={RATE} show={uHot > 0 && uHot < 10} />
				<Head g={PG} t={Math.min(10, uMid)} v={MIDF(Math.min(10, uMid))} color={RATE} show={uMid > 0 && uMid < 10} />
				<Ceiling v={60} at={K4.c60} name="cool, 300 C" text="settles at about 60" note="crawls: only a little by the line" noteAt={K4.little} />
				<Ceiling v={9} at={K4.nine} name="hot, 600 C" text="settles at about 9" note="settles at once" noteAt={K4.once} />
				<Ceiling v={25} at={K4.c25} name="middle, 450 C" text="settles at about 25" note="close, in the time available" noteAt={K4.close} />
				{dot(uCool, COOLF, RATE)}
				{dot(uHot, HOTF, RATE)}
				{dot(uMid, MIDF, RATE)}
				<Fade at={K4.crawls}>
					<Sx x={PG.px(6.4)} y={PG.py(COOLF(6.4)) + 54} text="crawls" size={42} color={RATE} hand at={K4.crawls} />
				</Fade>
				<Ring cx={PG.px(TL)} cy={PG.py(MIDF(TL))} rx={34} ry={34} at={K4.most} color={YIELD} seed={3} width={7} />
				<Sx x={PG.px(TL) + 52} y={PG.py(MIDF(TL)) - 78} text="most in the time available" size={38} color={YIELD} hand at={K4.most} />
			</Overlay>
		</>
	);
};

// ---------- 4. The catalyst fixes the speed, not the ceiling ----------
const C = 'catalyst-speed';
const K5 = cues(sc(C), {so: 'So what does the iron do', path: 'lower-energy pathway', both: 'both directions', fast: 'fast enough', take: 'Take it away', crawls: 'even the middle temperature crawls', notmove: 'does not move', same: 'same share', sooner: 'reached sooner', without: 'Without iron', hot: 'a hotter reactor', lower: 'a lower ceiling'});
export const SceneCatalyst: React.FC = () => {
	const f = useCurrentFrame();
	const uNo = 10 * lin(f, K5.take, 140);
	const uHot = 10 * lin(f, K5.hot, 60);
	const ridge = (peak: number) => `M1480,360 C1530,360 1560,${peak} 1640,${peak} C1720,${peak} 1750,430 1810,430`;
	return (
		<>
			<Heading text="What the iron changes" at={4} size={62} />
			<Overlay>
				<GraphAxes g={PG} at={-100} xLabel="time in the reactor (made-up clock)" yLabel="ammonia in the gas (%)" xTicks={[]} yTicks={[0, 20, 40, 60]} />
				<VLine g={PG} t={TL} at={-100} />
				<Curve g={PG} fn={COOLF} upTo={10} color={RATE} width={5} opacity={0.2} />
				<Curve g={PG} fn={MIDF} upTo={10} color={RATE} width={9} />
				<circle cx={PG.px(TL)} cy={PG.py(MIDF(TL))} r={13} fill={RATE} stroke={INK} strokeWidth={3.5} />
				<Ceiling v={25} at={-100} name="middle, 450 C" text="settles at about 25" />
				{/* the iron pellet tag */}
				<g>
					<rect x={470} y={286} width={130} height={62} rx={14} fill="#dfe2e6" stroke={IRON_DARK} strokeWidth={4} />
					<Pellets x={474} y={290} w={122} h={54} r={9} />
					<Sx x={540} y={384} text="iron" size={36} color={IRON_DARK} anchor="middle" hand at={-100} />
				</g>
				<Ring cx={535} cy={330} rx={96} ry={58} at={K5.so + 20} out={K5.path - 10} color={AMBER_INK} seed={2} />
				{/* no catalyst: slow dashed copy */}
				<Curve g={PG} fn={NOCF} upTo={uNo} color={INK_SOFT} width={6} dash="12 10" />
				<Fade at={K5.take}>
					<Sx x={PG.px(7.4)} y={PG.py(NOCF(7.4)) + 56} text="no catalyst" size={40} color={INK_SOFT} hand at={K5.take} />
				</Fade>
				{uNo >= TL ? <circle cx={PG.px(TL)} cy={PG.py(NOCF(TL))} r={13} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} /> : null}
				<Fade at={K5.crawls}>
					<Sx x={PG.px(TL) + 24} y={PG.py(NOCF(TL)) + 60} text="still low" size={36} color={INK_SOFT} hand at={K5.crawls} />
				</Fade>
				{/* the C4b ridge inset */}
				<Fade at={K5.path}>
					<rect x={1456} y={232} width={380} height={330} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<path d="M1470,440 L1470,262 M1470,440 L1820,440" fill="none" stroke={INK_SOFT} strokeWidth={3} strokeLinecap="round" />
					<Sx x={1480} y={258} text="energy" size={24} color={INK_SOFT} at={K5.path + 6} />
					<Sx x={1820} y={470} text="progress of reaction" size={24} color={INK_SOFT} anchor="end" at={K5.path + 6} />
					<path d={ridge(272)} fill="none" stroke={INK_SOFT} strokeWidth={5} strokeDasharray="12 9" />
					<path d={ridge(332)} fill="none" stroke={RATE} strokeWidth={7} strokeLinecap="round" />
					<Sx x={1646} y={262} text="no iron" size={28} color={INK_SOFT} anchor="middle" at={K5.path + 6} />
					<Sx x={1646} y={366} text="with iron" size={30} color={RATE} anchor="middle" hand at={K5.path + 10} />
				</Fade>
				<Fade at={K5.both}>
					<path d="M1500,500 L1790,500 M1516,486 L1500,500 L1516,514 M1774,486 L1790,500 L1774,514" fill="none" stroke={RATE} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					<Sx x={1646} y={544} text="lower pathway, both directions" size={24} color={RATE} anchor="middle" at={K5.both + 6} />
				</Fade>
				<Fade at={K5.fast}>
					<Sx x={PG.px(TL) + 24} y={PG.py(MIDF(TL)) - 34} text="fast enough" size={38} color={RATE} hand at={K5.fast} />
				</Fade>
				{/* same ceiling */}
				<Ring cx={CEIL_X + 150} cy={PG.py(25)} rx={250} ry={52} at={K5.notmove} color={AMBER_INK} seed={5} />
				<Bracket x={CEIL_X + 4} y1={PG.py(25) + 82} y2={PG.py(25) + 82} color={YIELD} at={K5.same} out={K5.hot - 10} label="same ceiling" sub="sooner, not different" size={38} lx={CEIL_X + 26} ly={PG.py(25) + 96} />
				{/* without iron: a hotter reactor with a lower ceiling */}
				<Curve g={PG} fn={HOTF} upTo={uHot} color={HEAT} width={6} dash="12 10" />
				<Fade at={K5.hot + 20}>
					<path d={`M${PG.px(0)},${PG.py(9)} L${PG.px(10) + 12},${PG.py(9)}`} stroke={HEAT} strokeWidth={4} strokeDasharray="14 10" />
					<Sx x={CEIL_X} y={PG.py(9) + 8} text="hotter, no iron" size={34} color={HEAT} hand at={K5.hot + 20} />
				</Fade>
				<Arrow x1={PG.px(10) - 40} y1={PG.py(25) + 24} x2={PG.px(10) - 40} y2={PG.py(9) - 18} at={K5.hot + 30} color={HEAT} width={7} />
				<Sx x={CEIL_X} y={PG.py(9) + 48} text="faster, but a lower ceiling" size={32} color={HEAT} hand at={K5.lower} />
			</Overlay>
		</>
	);
};
void DrawPath; void Chip; void CROSS; void NH3C; void INK; void H2C; void N2C;
