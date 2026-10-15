import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {Cells} from '../chem-m5-c04b/parts';
import {BLUE, Bars9, Bath, CLIP_HEAT, Chip, EQ9, EqStrip, Fade, Flame, FracX, KMark, LNW, LogLine, No2Tube, Overlay, Ring, Sx, TEAL, TUBE9, Tag, TubeLens, UpDown, eqLayout, lx} from './parts';
import type {EqItem, Ln, Term} from './parts';
import {HEAT, Heading, K100, K25, KR100, KR25, N2O4_INK, NO2C, NO2_INK, kf, sc} from './common';
import {NO2_EQ_HEAT} from './s1';

export const NO2_EQ_BACK: EqItem[] = [{k: 'sp', coef: '2', t: 'NO_2(g)', color: NO2_INK}, {k: 'arrow'}, {k: 'sp', t: 'N_2O_4(g)', color: N2O4_INK}, {k: 'plus'}, {k: 'sp', t: 'heat', color: HEAT}];

// ---------- 4a. The evidence: measured K and the tube ----------
const E = 'evidence';
const K4 = cues(sc(E), {evidence: 'Now the evidence', measured: 'measured values', k1: '0.0061', t25: 'twenty-five degrees Celsius', k2: '0.49', hundred: 'a hundred degrees', eighty: 'eighty times', fill: 'Now fill a tube', start: '0.040', at25: ['At twenty-five degrees', 2], eighteen: 'eighteen percent', pale: 'pale', at100: ['At a hundred degrees', 2], seventy: 'seventy-nine percent', deep: 'deep brown', bigger: 'A bigger K'});
// Owner fix 15 Oct: each tube, its grid and its labels sit apart (tube 160 px wide from x; grid 240 px; 110 px gaps).
const COLD = {x: 150, y: 560, h: 420};
const HOTT = {x: 700, y: 560, h: 420};
const GRID = {cold: 350, hot: 900, y: 640, size: 20, gap: 4};
export const SceneEvidence: React.FC = () => {
	const f = useCurrentFrame();
	const ln = LNW;
	const kv = 10 ** kf(f, [[K4.hundred, Math.log10(K25)], [K4.hundred + 30, Math.log10(K100)]]);
	const x25 = lx(K25, ln), x100 = lx(K100, ln);
	const hot = prog(f, K4.at100 - 6, 20);
	const coldLit = Array.from({length: 18}, (_, i) => K4.eighteen + 6 + i * 2);
	const hotLit = Array.from({length: 79}, (_, i) => K4.seventy + 6 + Math.round(i * 0.9));
	return (
		<>
			<Heading text="The evidence" at={4} size={62} />
			<No2Tube {...COLD} brown={0} reveal={prog(f, K4.fill, 16)} />
			<No2Tube {...HOTT} clip={{src: CLIP_HEAT, at: K4.deep - 245, rate: 0.6}} reveal={prog(f, K4.fill + 8, 16)} />
			<Overlay>
				<Chip x={1150} y={104} w={680} text="measured values (from pressure data)" size={36} at={K4.measured} color={TEAL} />
				{/* beat 1: the measured K values on the wide log line */}
				<LogLine ln={ln} at={20} size={28} />
				<Tag x={1180} y={470} w={480} text="each tick is 10 times the last" at={40} out={K4.fill} color={INK_SOFT} size={30} />
				<KMark ln={ln} value={K25} at={K4.hundred + 4} ghost label="" />
				<KMark ln={ln} value={() => kv} at={K4.k1} label={ff => (ff < K4.hundred + 16 ? 'K = 0.0061' : 'K = 0.49')} size={44} />
				<Sx x={x25} y={486} text="25 °C" size={38} color="#2f7fb0" anchor="middle" hand at={K4.t25} />
				<Sx x={x100} y={486} text="100 °C" size={38} color={HEAT} anchor="middle" hand at={K4.hundred} />
				<DrawPath d={`M${x25},${ln.y - 104} Q${(x25 + x100) / 2},${ln.y - 178} ${x100},${ln.y - 104}`} at={K4.eighty - 6} dur={20} color={AMBER_INK} width={5} />
				<DrawPath d={`M${x100 - 24},${ln.y - 122} L${x100},${ln.y - 104} L${x100 - 30},${ln.y - 98}`} at={K4.eighty + 12} dur={6} color={AMBER_INK} width={5} />
				<Sx x={(x25 + x100) / 2} y={ln.y - 150} text="about 80 times" size={42} color={AMBER_INK} anchor="middle" hand at={K4.eighty} />
				{/* beat 2: two tubes from the same start */}
				<Bath {...HOTT} kind="hot" amount={hot} />
				<Chip x={1250} y={560} w={560} text="start: 0.040 mol/L N_2O_4" size={38} at={K4.start} color={INK} />
				<Sx x={1270} y={690} text="1 square = 1 N_2O_4 at the start" size={32} color={INK_SOFT} weight={600} at={K4.at25} />
				<Sx x={1270} y={760} text="settled amounts given;" size={34} color={INK_SOFT} hand at={K4.seventy + 30} />
				<Sx x={1270} y={804} text="you can check them with the ICE table from C6" size={34} color={INK_SOFT} hand at={K4.seventy + 36} />
				<Sx x={GRID.cold} y={620} text="25 °C" size={42} color="#2f7fb0" hand at={K4.at25} />
				<Cells x={GRID.cold} y={GRID.y} n={100} cols={10} size={GRID.size} gap={GRID.gap} lit={coldLit} color={NO2C} at={K4.at25 + 4} />
				<Sx x={GRID.cold} y={924} text="about 18 of every" size={30} color={INK} weight={600} at={K4.eighteen + 10} />
				<Sx x={GRID.cold} y={962} text="100 split" size={30} color={INK} weight={600} at={K4.eighteen + 14} />
				<Sx x={GRID.cold} y={1014} text="pale" size={44} color={INK_SOFT} hand at={K4.pale} />
				<Sx x={GRID.hot} y={620} text="100 °C" size={42} color={HEAT} hand at={K4.at100} />
				<Cells x={GRID.hot} y={GRID.y} n={100} cols={10} size={GRID.size} gap={GRID.gap} lit={hotLit} color={NO2C} at={K4.at100 + 4} />
				<Sx x={GRID.hot} y={924} text="about 79 of every" size={30} color={INK} weight={600} at={K4.seventy + 10} />
				<Sx x={GRID.hot} y={962} text="100 split" size={30} color={INK} weight={600} at={K4.seventy + 14} />
				<Sx x={GRID.hot} y={1014} text="deep brown" size={44} color={NO2_INK} hand at={K4.deep} />
			</Overlay>
			<Overlay>
				<Ring cx={HOTT.x + 77} cy={HOTT.y + 210} rx={105} ry={250} at={K4.bigger} color={AMBER} seed={7} width={5} />
				<Ring cx={x100} cy={ln.y - 70} rx={110} ry={50} at={K4.bigger + 8} color={AMBER} seed={3} width={5} />
				<Sx x={1350} y={900} text="bigger K:" size={46} color={TEAL} hand at={K4.bigger + 10} />
				<Sx x={1350} y={952} text="deeper brown" size={46} color={NO2_INK} hand at={K4.bigger + 18} />
			</Overlay>
		</>
	);
};

// ---------- 5a. The other way round: write the reaction backwards ----------
const B = 'backwards';
const K5 = cues(sc(B), {backwards: 'backwards', two: 'two N O two making', givesOut: 'gives out heat', same: 'the same amount', flip: 'the flip of the old one', one1: 'One over 0.0061', v160: '160', one2: 'one over 0.49', v2: '2.0', falls: 'K falls'});
const LNB: Ln = {...LNW, y: 660};
export const SceneBackwards: React.FC = () => {
	const f = useCurrentFrame();
	const ln = LNB;
	const x25 = lx(K25, ln), x100 = lx(K100, ln), xr25 = lx(KR25, ln), xr100 = lx(KR100, ln), x1 = lx(1, ln);
	const kv = 10 ** kf(f, [[K5.v2, Math.log10(KR25)], [K5.v2 + 30, Math.log10(KR100)]]);
	const dim = 1 - 0.6 * prog(f, K5.backwards, 16);
	const back = eqLayout(NO2_EQ_BACK, EQ9.s, EQ9.x);
	const y2 = EQ9.y + 100;
	return (
		<>
			<Heading text="Write it backwards" at={4} size={62} />
			<Overlay>
				<g opacity={dim}><EqStrip items={NO2_EQ_HEAT} x={EQ9.x} y={EQ9.y + 20} size={EQ9.s} at={-100} /></g>
				<DrawPath d={`M${EQ9.x - 14},${EQ9.y + 8} C${EQ9.x - 70},${EQ9.y + 40} ${EQ9.x - 70},${y2 - 40} ${EQ9.x - 16},${y2 - 12}`} at={K5.backwards} dur={22} color={AMBER_INK} width={6} />
				<DrawPath d={`M${EQ9.x - 42},${y2 - 22} L${EQ9.x - 16},${y2 - 12} L${EQ9.x - 30},${y2 - 40}`} at={K5.backwards + 18} dur={8} color={AMBER_INK} width={6} />
				<EqStrip items={NO2_EQ_BACK.map((it, i) => ({...it, at: i >= 3 ? K5.givesOut : K5.two}))} x={EQ9.x} y={y2} size={EQ9.s} />
				<Flame x={back.end + 40} y={y2 + 4} s={0.7} at={K5.givesOut + 6} />
				<Sx x={back.end + 80} y={y2 - 6} text="gives out heat" size={40} color={HEAT} hand at={K5.givesOut + 6} />
				<Sx x={EQ9.x} y={y2 + 70} text="the same amount of heat that the other way takes in" size={30} color={INK_SOFT} weight={600} at={K5.same} />
				{/* the same wide line: the flipped values are mirror images about 1 */}
				<LogLine ln={ln} at={10} size={28} />
				<KMark ln={ln} value={K25} at={14} ghost label="0.0061" size={36} />
				<KMark ln={ln} value={K100} at={18} ghost label="0.49" size={36} />
				<Sx x={x25} y={ln.y + 100} text="25 °C" size={36} color="#2f7fb0" anchor="middle" hand at={20} />
				<Sx x={x100} y={ln.y + 100} text="100 °C" size={36} color={HEAT} anchor="middle" hand at={24} />
				<Fade at={K5.flip}>
					<path d={`M${x1},${ln.y - 300} L${x1},${ln.y + 30}`} stroke={INK_SOFT} strokeWidth={4} strokeDasharray="10 8" />
				</Fade>
				<Tag x={x1 + 140} y={290} w={320} text="flip: one over K" at={K5.flip} color={AMBER_INK} size={34} />
				<DrawPath d={`M${x1},${ln.y - 300} L${x1 + 140},${319}`} at={K5.flip + 4} dur={10} color={AMBER_INK} width={3} dash="6 6" />
				<DrawPath d={`M${x25},${ln.y - 110} Q${(x25 + xr25) / 2},${ln.y - 330} ${xr25},${ln.y - 110}`} at={K5.one1} dur={30} color={AMBER_INK} width={5} />
				<DrawPath d={`M${x100},${ln.y - 96} Q${(x100 + xr100) / 2},${ln.y - 170} ${xr100},${ln.y - 96}`} at={K5.one2} dur={20} color={AMBER_INK} width={5} />
				<KMark ln={ln} value={KR25} at={K5.v2 + 4} ghost label="" />
				<KMark ln={ln} value={() => kv} at={K5.v160} label={ff => (ff < K5.v2 + 15 ? 'about 160' : 'about 2.0')} size={42} />
				<Sx x={xr25} y={ln.y + 100} text="25 °C" size={36} color="#2f7fb0" anchor="middle" hand at={K5.v160 + 6} />
				<Sx x={xr100} y={ln.y + 100} text="100 °C" size={36} color={HEAT} anchor="middle" hand at={K5.v2 + 10} />
				<Fade at={K5.falls}>
					<path d={`M${xr25 - 20},${ln.y + 170} L${xr100 + 30},${ln.y + 170}`} stroke={HEAT} strokeWidth={8} strokeLinecap="round" />
					<path d={`M${xr100 + 56},${ln.y + 150} L${xr100 + 28},${ln.y + 170} L${xr100 + 56},${ln.y + 190}`} fill="none" stroke={HEAT} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
					<Flame x={xr25 + 30} y={ln.y + 192} s={0.6} at={K5.falls} />
				</Fade>
				<Sx x={(xr25 + xr100) / 2} y={ln.y + 240} text="heat it: K falls" size={48} color={HEAT} anchor="middle" hand at={K5.falls + 6} />
			</Overlay>
		</>
	);
};

// ---------- 5b. The reason and the rule ----------
const R = 'reason-and-rule';
const K6 = cues(sc(R), {why: 'Why', same: 'same tube going brown', write: 'way we write it', reverse: 'reverse reaction', splitting: 'N two O four splitting', product: 'which is now the product', usedUp: 'gets used up', less: 'less product', smaller: 'K is smaller', rule: 'here is the rule', takesIn: 'takes in heat heating', raises: 'heating raises K', givesOut: 'gives out heat', lowers: 'heating lowers K', cooling: 'Cooling does the opposite'});
const BARS6 = {x0: 1060, base: 900, bw: 100, gx: 220};
const RuleCard: React.FC<{y: number; at: number; text: string; dir: 'up' | 'down'; arrowAt: number}> = ({y, at, text, dir, arrowAt}) => (
	<Fade at={at}>
		<rect x={760} y={y} width={1080} height={140} rx={24} fill="#fffdf8" stroke={dir === 'up' ? BLUE : AMBER_INK} strokeWidth={4} />
		<Sx x={800} y={y + 88} text={text} size={50} color={INK} hand at={at} />
		<Flame x={1700} y={y + 110} s={1} at={arrowAt} />
		<UpDown x={1780} y={dir === 'up' ? y + 112 : y + 112} dir={dir} at={arrowAt} color={BLUE} s={1.4} />
	</Fade>
);
export const SceneReasonRule: React.FC = () => {
	const f = useCurrentFrame();
	const outB = K6.rule - 6;
	const fwd = kf(f, [[K6.reverse, 140], [K6.reverse + 40, 180], [K6.usedUp, 180], [K6.smaller, 220]]);
	const rev = kf(f, [[K6.reverse, 140], [K6.reverse + 40, 310], [K6.usedUp, 310], [K6.smaller, 220]]);
	const eq = (1 - prog(f, K6.reverse, 8)) + prog(f, K6.smaller, 12);
	const counts = (ff: number) => [Math.round(kf(ff, [[K6.usedUp, 8], [K6.less + 30, 3]])), Math.round(kf(ff, [[K6.usedUp, 4], [K6.less + 30, 14]]))];
	const brownLens = kf(f, [[K6.usedUp, 0.1], [K6.less + 30, 0.75]]);
	const num: Term[][] = [[{t: 'N_2O_4', at: K6.product, color: N2O4_INK}]];
	const den: Term[][] = [[{t: 'NO_2', p: '2', at: K6.product + 6, color: NO2_INK}]];
	return (
		<>
			<Heading text="Why K falls, and the rule" at={4} size={62} />
			<No2Tube {...TUBE9} clip={{src: CLIP_HEAT, at: K6.usedUp - 80, rate: 0.8}} />
			<Overlay>
				<Bath {...TUBE9} kind="hot" amount={1} label="heated" />
			</Overlay>
			<Overlay>
				<EqStrip items={NO2_EQ_BACK} x={EQ9.x} y={EQ9.y} size={EQ9.s} at={-100} />
				<Tag x={400} y={292} w={540} text="same tube, written the other way" at={K6.same} out={outB} color={INK_SOFT} size={34} />
				<TubeLens counts={counts} brown={brownLens} />
				{/* the rates for the backwards equation: splitting is now the reverse reaction */}
				<Bars9 x0={BARS6.x0} base={BARS6.base} bw={BARS6.bw} gx={BARS6.gx} fwd={fwd} rev={rev} at={K6.write} out={outB} eq={Math.min(1, eq)} labels={{fwd: ['joining', 'forward'], rev: ['splitting', 'reverse']}} />
				<Fade at={K6.reverse + 10} out={K6.usedUp}>
					<Sx x={BARS6.x0 + BARS6.gx + BARS6.bw / 2} y={BARS6.base - 360} text="takes in heat: speeds up more" size={38} color={AMBER_INK} anchor="middle" hand at={K6.reverse + 10} />
				</Fade>
				<g opacity={1 - prog(f, outB, 12)}>
					<FracX cx={1560} cy={400} size={50} num={num} den={den} barAt={K6.product} prefix="K =" prefixAt={K6.product} prefixColor={TEAL} />
					<Sx x={1560} y={300} text="product on top now" size={34} color={INK_SOFT} anchor="middle" hand at={K6.product + 10} />
				</g>
				<Ring cx={1560} cy={384} rx={90} ry={44} at={K6.less} out={outB} color={AMBER} seed={9} width={5} />
				<UpDown x={1700} y={420} dir="down" at={K6.less + 6} out={outB} color={N2O4_INK} s={0.8} />
				<Fade at={K6.smaller} out={outB}>
					<Sx x={1560} y={560} text="K is smaller" size={46} color={TEAL} anchor="middle" hand at={K6.smaller} />
				</Fade>
				{/* the rule */}
				<RuleCard y={380} at={K6.takesIn - 20} text="forward takes in heat: heat it, K rises" dir="up" arrowAt={K6.raises} />
				<RuleCard y={580} at={K6.givesOut - 20} text="forward gives out heat: heat it, K falls" dir="down" arrowAt={K6.lowers} />
				<Tag x={760} y={780} w={340} text="cool it: opposite" at={K6.cooling} color={INK} size={36} />
			</Overlay>
		</>
	);
};
void INK; void AMBER; void HEAT;
