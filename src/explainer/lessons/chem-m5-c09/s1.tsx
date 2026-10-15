import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';
import {cues} from '../../cues';
import {eqLayout, Arrow, BLUE, Bars9, Bath, CLIP_COOL, CLIP_HEAT, Chip, EQ9, EqStrip, Fade, Flame, FracX, KMark, LN9, LogLine, No2Tube, Overlay, QMarker, Ring, Sx, TEAL, TUBE9, Tag, Thermometer, Tick, TubeLens, UpDown, tubeGeom} from './parts';
import type {EqItem, Ln, Term} from './parts';
import {HEAT, Heading, K100, K25, MINUS, N2O4_INK, NO2C, NO2_INK, N2O4_DOT, PLUS, kf, sc} from './common';

export const NO2_EQ: EqItem[] = [{k: 'sp', t: 'N_2O_4(g)', color: N2O4_INK}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NO_2(g)', color: NO2_INK}];
export const NO2_EQ_HEAT: EqItem[] = [{k: 'sp', t: 'N_2O_4(g)', color: N2O4_INK}, {k: 'plus'}, {k: 'sp', t: 'heat', color: HEAT}, {k: 'arrow'}, {k: 'sp', coef: '2', t: 'NO_2(g)', color: NO2_INK}];
export const kNum = (at: number, out?: number): Term[][] => [[{t: 'NO_2', p: '2', at, out, color: NO2_INK}]];
export const kDen = (at: number, out?: number): Term[][] => [[{t: 'N_2O_4', at, out, color: N2O4_INK}]];

// ---------- 1. Hook: does anything change K? ----------
const H = 'hook';
const K1 = cues(sc(H), {added: 'added a reactant', took: 'took out a product', squeezed: 'squeezed the container', shifted: 'shifted every time', never: 'K never moved', sealed: 'sealed tube', brown: 'the brown gas', colourless: 'colourless', hot: 'hot water', darker: 'goes darker', ice: 'ice', fades: 'it fades', built: 'K is built', settles: 'hot tube settles', different: 'very different concentrations', fixed: 'can K really stay fixed', question: 'The question is', which: 'which way'});
const LNH: Ln = {y: 300, x0: 1060, x1: 1760, lo: -3, hi: 3};
const HT = {x: 300, y: 300, h: 640};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	// Q jumps away at each disturbance and slides back; K holds still
	const jump = (at: number, to: number) => (f < at ? 0 : f < at + 8 ? (f - at) / 8 * to : Math.max(0, to * (1 - (f - at - 8) / 26)));
	const qLog = Math.log10(K25) + jump(K1.added, -0.55) + jump(K1.took, -0.5) + jump(K1.squeezed, 0.7);
	const hot = prog(f, K1.hot - 10, 20) * (1 - prog(f, K1.ice, 16));
	const ice = prog(f, K1.ice, 16);
	const chipsOut = K1.sealed - 30;
	return (
		<>
			<Heading text="Does temperature change K?" at={K1.question} size={62} />
			{f < K1.ice
				? <No2Tube {...HT} clip={{src: CLIP_HEAT, at: K1.hot - 34, rate: 1.5}} reveal={prog(f, K1.sealed - 16, 18)} />
				: <No2Tube {...HT} clip={{src: CLIP_COOL, at: K1.ice}} />}
			<Overlay>
				{/* the K line: three disturbances pass, K never moves */}
				<LogLine ln={LNH} at={8} labels={false} />
				<KMark ln={LNH} value={K25} at={18} label="K" size={52} ring={K1.fixed} />
				<QMarker ln={LNH} at={K1.added - 6} out={K1.never + 40} value={() => 10 ** qLog} label="Q" side="mid" size={40} ghost />
				<Chip x={620} y={300} w={380} text="+ add a reactant" size={38} at={K1.added} out={chipsOut} color={PLUS} />
				<Chip x={620} y={390} w={380} text="- take out a product" size={38} at={K1.took} out={chipsOut} color={MINUS} />
				<Chip x={620} y={480} w={380} text="squeeze the container" size={38} at={K1.squeezed} out={chipsOut} color={BLUE} />
				<Arrow x1={1010} y1={331} x2={1110} y2={360} at={K1.added + 6} out={chipsOut} color={PLUS} width={5} />
				<Arrow x1={1010} y1={421} x2={1110} y2={380} at={K1.took + 6} out={chipsOut} color={MINUS} width={5} />
				<Arrow x1={1010} y1={511} x2={1160} y2={400} at={K1.squeezed + 6} out={chipsOut} color={BLUE} width={5} />
				<Fade at={K1.shifted} out={chipsOut}>
					<Sx x={810} y={620} text="the mixture shifted every time" size={40} color={INK_SOFT} anchor="middle" hand at={K1.shifted} />
				</Fade>
				<Tick x={1232} y={226} at={K1.never} s={44} />
				<Sx x={1270} y={240} text="never moved" size={44} color={TEAL} hand at={K1.never + 6} />
				{/* the tube in its baths */}
				<Bath {...HT} kind="hot" amount={hot} label="hot water" />
				<Bath {...HT} kind="ice" amount={ice} label="ice" />
			</Overlay>
			<Overlay>
				<EqStrip items={NO2_EQ} x={640} y={590} size={56} at={K1.sealed} />
				<Fade at={K1.brown}>
					<circle cx={660} cy={668} r={13} fill={NO2C} stroke={INK} strokeWidth={3} />
					<Sx x={688} y={680} text="NO_2: brown" size={38} color={NO2_INK} weight={600} at={K1.brown} />
				</Fade>
				<Fade at={K1.colourless}>
					<circle cx={660} cy={728} r={17} fill={N2O4_DOT} stroke={INK} strokeWidth={3} />
					<Sx x={688} y={740} text="N_2O_4: colourless" size={38} color={N2O4_INK} weight={600} at={K1.colourless} />
				</Fade>
				<Fade at={K1.darker} out={K1.ice}>
					<Sx x={560} y={470} text="darker" size={44} color={NO2_INK} hand at={K1.darker} />
				</Fade>
				<Fade at={K1.fades}>
					<Sx x={560} y={470} text="paler" size={44} color="#2f7fb0" hand at={K1.fades} />
				</Fade>
				{/* K is built from the settled concentrations */}
				<FracX cx={900} cy={860} size={50} num={kNum(K1.built + 10)} den={kDen(K1.built + 18)} barAt={K1.built} prefix="K =" prefixAt={K1.built} prefixColor={TEAL} />
				<Sx x={760} y={970} text="settled concentrations" size={36} color={INK_SOFT} hand at={K1.built + 30} />
				<Fade at={K1.different}>
					<Sx x={1110} y={830} text="hot tube settles with" size={40} color={HEAT} hand at={K1.settles} />
					<Sx x={1110} y={880} text="very different amounts" size={40} color={HEAT} hand at={K1.different} />
				</Fade>
				<Arrow x1={1100} y1={850} x2={1040} y2={850} at={K1.different + 10} color={HEAT} width={5} />
				{/* can K really stay fixed? */}
				<Sx x={1215} y={180} text="?" size={80} color={AMBER_INK} hand at={K1.fixed + 6} />
				<UpDown x={1050} y={232} dir="both" at={K1.fixed + 10} color={AMBER_INK} s={0.8} />
				<Fade at={K1.which}>
					<Sx x={1410} y={170} text="up or down?" size={44} color={AMBER_INK} hand at={K1.which} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 2. Why K stayed fixed ----------
const S2 = 'k-stayed-fixed';
const K2 = cues(sc(S2), {why: 'why did K stay fixed', adding: 'Adding a chemical', squeezing: 'squeezing the container', amounts: 'changes the amounts', meet: 'particles meet', faster: 'faster than the other', shifts: 'The mixture shifts', same: 'the same number again', different: 'amounts are now different', each: 'Each collision', likely: 'just as likely to work', sameK: 'same K', temp: 'Temperature is different', heating: 'heating makes collisions', sameAmts: 'even with the same amounts', moves: 'moves K itself'});
const BARS2 = {x0: 1100, base: 900, bw: 100, gx: 220};
export const SceneStayedFixed: React.FC = () => {
	const f = useCurrentFrame();
	const qv = 10 ** kf(f, [[K2.faster - 4, Math.log10(K25)], [K2.faster + 8, Math.log10(0.0013)], [K2.shifts, Math.log10(0.0013)], [K2.same + 10, Math.log10(K25)]]);
	const fwd = kf(f, [[K2.faster, 150], [K2.faster + 10, 230], [K2.shifts, 230], [K2.same + 10, 170]]);
	const rev = kf(f, [[K2.faster, 150], [K2.faster + 10, 110], [K2.shifts, 110], [K2.same + 10, 170]]);
	const eq = prog(f, K2.same + 6, 12);
	const temp = kf(f, [[K2.temp, 25], [K2.temp + 70, 70]]);
	const out1 = K2.temp - 6;
	return (
		<>
			<Heading text="Why K stayed fixed" at={4} size={62} />
			<No2Tube {...TUBE9} brown={0} />
			<Overlay>
				<LogLine ln={LN9} at={6} labels={false} />
				<KMark ln={LN9} value={K25} at={12} label="K" size={50} ring={K2.temp + 10} />
				<QMarker ln={LN9} at={K2.faster - 6} out={K2.temp} value={() => qv} label="Q" side="mid" size={42} />
				{/* the disturbances */}
				<Chip x={420} y={300} w={440} text="+ add a chemical" size={38} at={K2.adding} out={out1} color={PLUS} />
				<Chip x={420} y={390} w={440} text="squeeze the container" size={38} at={K2.squeezing} out={out1} color={BLUE} />
				<Arrow x1={870} y1={360} x2={1060} y2={420} at={K2.amounts} out={out1} color={INK_SOFT} width={5} />
				<Fade at={K2.amounts} out={out1}>
					<Sx x={440} y={520} text="the amounts change, so" size={38} color={INK} hand at={K2.amounts} />
					<Sx x={440} y={566} text="particles meet more or less often" size={38} color={INK} hand at={K2.meet} />
				</Fade>
				{/* one reaction faster for a while, then equal again at the same ratio */}
				<Bars9 x0={BARS2.x0} base={BARS2.base} bw={BARS2.bw} gx={BARS2.gx} fwd={fwd} rev={rev} at={K2.faster - 4} out={K2.temp} eq={eq} labels={{fwd: ['forward'], rev: ['reverse']}} />
				<Fade at={K2.faster + 10} out={K2.shifts}>
					<Sx x={1150} y={620} text="one runs faster for a while" size={38} color={BLUE} anchor="middle" hand at={K2.faster + 10} />
				</Fade>
				<Tag x={1340} y={470} w={330} text="Q moves, K stays" at={K2.same + 10} out={K2.temp} color={TEAL} size={34} />
				<Tag x={96} y={1000} w={330} text="amounts different" at={K2.different} out={K2.temp} color={INK_SOFT} size={32} />
				<Chip x={420} y={640} w={520} text="each collision: same chance to work" size={34} at={K2.likely} out={out1} color={TEAL} />
				<Tick x={1210} y={232} at={K2.sameK} s={44} />
				<Fade at={K2.sameK + 4} out={K2.temp}>
					<Sx x={1250} y={246} text="same K" size={42} color={TEAL} hand at={K2.sameK + 4} />
				</Fade>
				{/* temperature is different */}
				<Thermometer x={470} y={360} h={420} temp={temp} at={K2.temp} />
				<Chip x={600} y={480} w={420} text="heating: more collisions work" size={34} at={K2.heating} color={HEAT} />
				<Sx x={620} y={600} text="same amounts in the tube" size={36} color={INK_SOFT} hand at={K2.sameAmts} />
				<Sx x={1132} y={180} text="?" size={80} color={AMBER_INK} hand at={K2.moves} />
				<Fade at={K2.moves + 8}>
					<Sx x={1250} y={190} text="K itself moves?" size={44} color={AMBER_INK} hand at={K2.moves + 8} />
				</Fade>
			</Overlay>
		</>
	);
};

// ---------- 3. How temperature changes K (the cause) ----------
const S3 = 'temperature-cause';
const K3 = cues(sc(S3), {both: 'both reactions', notEq: 'not equally', cobalt: 'cobalt tube', takes: 'that takes in heat', gains: 'gains the most', forward: 'Going forward', splitting: 'splitting takes in heat', farMore: 'far more than joining', builds: 'builds up and', usedUp: 'is used up', slows: 'splitting slows', joinUp: 'joining speeds up', equal: 'equal again', moreNO2: 'more N O two', top: 'More product on top', under: 'less reactant underneath', bigger: 'K is bigger', catalyst: 'A catalyst', factor: 'same factor', stay: 'rates stay equal', nothing: 'nothing shifts', sameK: 'K stays the same'});
const BARS3 = {x0: 1060, base: 900, bw: 100, gx: 220};
const CARD3 = {x: 1440, y: 430, w: 400, h: 300};
/** The C3 collision strip, replayed: a hard hit splits an N2O4 into two NO2. */
const CollisionCard: React.FC<{at: number; out: number}> = ({at, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (1 - prog(f, out, 12));
	if (o <= 0.01) return null;
	const cx = CARD3.x + CARD3.w / 2, cy = CARD3.y + 150;
	const period = 66, loops = 3;
	const t = Math.min(loops * period - 1, Math.max(0, f - at - 10));
	const u = (t % period) / period;
	const hit = u >= 0.45;
	const a = Math.min(1, u / 0.45);
	const bx = cx - 150 + 112 * a * a;
	const s2 = hit ? Math.min(1, (u - 0.45) / 0.4) : 0;
	return (
		<g opacity={o}>
			<rect x={CARD3.x} y={CARD3.y} width={CARD3.w} height={CARD3.h} rx={26} fill="#fffdf8" stroke="rgba(60,45,20,0.15)" strokeWidth={2.5} />
			<text x={cx} y={CARD3.y + 50} textAnchor="middle" fill={INK} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}}>splitting</text>
			{!hit ? <circle cx={bx} cy={cy} r={12} fill={NO2C} stroke={INK} strokeWidth={3} /> : <circle cx={cx - 38 - 60 * s2} cy={cy + 10 * s2} r={12} fill={NO2C} stroke={INK} strokeWidth={3} opacity={1 - s2} />}
			{!hit ? <circle cx={cx} cy={cy} r={28} fill={N2O4_DOT} stroke={INK} strokeWidth={3} /> : (
				<g>
					<circle cx={cx} cy={cy} r={24 + 80 * s2} fill="none" stroke={HEAT} strokeWidth={6} opacity={1 - s2} />
					<circle cx={cx + 50 * s2} cy={cy - 34 * s2} r={15} fill={NO2C} stroke={INK} strokeWidth={3} />
					<circle cx={cx + 50 * s2} cy={cy + 34 * s2} r={15} fill={NO2C} stroke={INK} strokeWidth={3} />
				</g>
			)}
			<text x={cx} y={CARD3.y + 250} textAnchor="middle" fill={HEAT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>needs a hard collision</text>
		</g>
	);
};
export const SceneCause: React.FC = () => {
	const f = useCurrentFrame();
	const fwd = kf(f, [[K3.farMore, 140], [K3.farMore + 40, 310], [K3.builds, 310], [K3.equal, 220], [K3.catalyst + 6, 220], [K3.catalyst + 40, 300]]);
	const rev = kf(f, [[K3.farMore, 140], [K3.farMore + 40, 175], [K3.builds, 175], [K3.equal, 220], [K3.catalyst + 6, 220], [K3.catalyst + 40, 300]]);
	const eq = (1 - prog(f, K3.farMore, 8)) + prog(f, K3.equal, 12);
	const counts = (ff: number) => [Math.round(kf(ff, [[K3.builds, 8], [K3.equal, 3]])), Math.round(kf(ff, [[K3.builds, 4], [K3.equal, 14]]))];
	const brownLens = kf(f, [[K3.builds, 0.1], [K3.equal, 0.75]]);
	const kv = 10 ** kf(f, [[K3.bigger, Math.log10(K25)], [K3.bigger + 34, Math.log10(K100)]]);
	const hot = prog(f, K3.farMore - 6, 20);
	const g = tubeGeom(TUBE9.x, TUBE9.y, TUBE9.h);
	const bx = BARS3.x0, bf = BARS3.base;
	const hl = eqLayout(NO2_EQ_HEAT, EQ9.s, EQ9.x);
	return (
		<>
			<Heading text="How heating changes K" at={4} size={62} />
			<No2Tube {...TUBE9} clip={{src: CLIP_HEAT, at: K3.builds - 200, rate: 0.5}} />
			<Overlay>
				<Bath {...TUBE9} kind="hot" amount={hot} label="heated" />
			</Overlay>
			<Overlay>
				{/* equation, then the heat-in-the-equation chip */}
				<EqStrip items={NO2_EQ} x={EQ9.x} y={EQ9.y} size={EQ9.s} at={6} out={K3.takes} />
				<EqStrip items={NO2_EQ_HEAT} x={EQ9.x} y={EQ9.y} size={EQ9.s} at={K3.takes + 4} />
				<Fade at={K3.takes + 10}>
					<rect x={hl.pos[1].cx - 16} y={EQ9.y - 46} width={hl.pos[2].sx + hl.pos[2].w - hl.pos[1].cx + 34} height={64} rx={32} fill="none" stroke={HEAT} strokeWidth={4} />
				</Fade>
				<Sx x={hl.pos[1].cx - 10} y={EQ9.y + 54} text="takes in heat" size={36} color={HEAT} hand at={K3.splitting} />
				<Flame x={g.gas.cx + 150} y={g.beaker.y1 - 10} at={K3.farMore - 6} s={1} />
				{/* the lens: NO2 builds up, N2O4 is used up */}
				<TubeLens counts={counts} brown={brownLens} />
				{/* the log line: K slides right when the mixture settles browner */}
				<LogLine ln={LN9} at={6} labels={false} />
				<KMark ln={LN9} value={() => kv} at={12} label="K" size={50} flash={K3.bigger + 34} />
				<Tick x={1424} y={232} at={K3.sameK} s={44} />
				<Sx x={1460} y={246} text="same K" size={42} color={TEAL} hand at={K3.sameK + 6} />
				{/* rate bars: both rise, splitting much further, then they meet again */}
				<Bars9 x0={bx} base={bf} bw={BARS3.bw} gx={BARS3.gx} fwd={fwd} rev={rev} at={8} eq={Math.min(1, eq)} labels={{fwd: ['splitting', 'forward'], rev: ['joining', 'reverse']}} />
				<Fade at={K3.farMore + 8} out={K3.builds}>
					<path d={`M${bx - 40},${bf - 150} L${bx - 40},${bf - 300}`} stroke={BLUE} strokeWidth={9} strokeLinecap="round" />
					<path d={`M${bx - 62},${bf - 270} L${bx - 40},${bf - 304} L${bx - 18},${bf - 270}`} fill="none" stroke={BLUE} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
					<path d={`M${bx + BARS3.gx + BARS3.bw + 40},${bf - 150} L${bx + BARS3.gx + BARS3.bw + 40},${bf - 180}`} stroke={AMBER} strokeWidth={9} strokeLinecap="round" />
					<path d={`M${bx + BARS3.gx + BARS3.bw + 18},${bf - 156} L${bx + BARS3.gx + BARS3.bw + 40},${bf - 186} L${bx + BARS3.gx + BARS3.bw + 62},${bf - 156}`} fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
					<Sx x={bx + (BARS3.gx + BARS3.bw) / 2} y={bf - 360} text="splitting speeds up more" size={40} color={BLUE} anchor="middle" hand at={K3.farMore + 12} />
				</Fade>
				<Fade at={K3.both} out={K3.farMore}>
					<Sx x={bx + (BARS3.gx + BARS3.bw) / 2} y={bf - 220} text="both speed up, not equally" size={38} color={INK_SOFT} anchor="middle" hand at={K3.notEq} />
				</Fade>
				<CollisionCard at={K3.takes} out={K3.top - 10} />
				<Fade at={K3.gains} out={K3.top - 10}>
					<Sx x={CARD3.x + CARD3.w / 2} y={CARD3.y + CARD3.h + 50} text="so it gains the most" size={38} color={HEAT} anchor="middle" hand at={K3.gains} />
				</Fade>
				{/* more product on top, less reactant underneath */}
				<FracX cx={1640} cy={560} size={50} num={kNum(K3.top)} den={kDen(K3.top + 6)} barAt={K3.top} prefix="K =" prefixAt={K3.top} prefixColor={TEAL} />
				<UpDown x={1752} y={530} dir="up" at={K3.top + 10} color={NO2_INK} s={0.8} />
				<UpDown x={1752} y={640} dir="down" at={K3.under} color={N2O4_INK} s={0.8} />
				<Fade at={K3.bigger}>
					<Sx x={1640} y={710} text="K is bigger" size={46} color={TEAL} anchor="middle" hand at={K3.bigger} />
				</Fade>
				{/* a catalyst: both up by the same factor */}
				<Chip x={1460} y={760} w={360} text="catalyst" size={40} at={K3.catalyst} color={INK} />
				<Sx x={1470} y={880} text="both rates up equally" size={36} color={INK_SOFT} hand at={K3.factor} />
				<Sx x={1470} y={926} text="nothing shifts" size={36} color={INK_SOFT} hand at={K3.nothing} />
				<Ring cx={1640} cy={791} rx={200} ry={46} at={K3.catalyst + 4} color={AMBER} seed={4} width={4} />
			</Overlay>
		</>
	);
};
void DrawPath; void MINUS; void K100;
