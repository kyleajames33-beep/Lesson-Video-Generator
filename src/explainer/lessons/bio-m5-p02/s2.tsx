// P02 (Biology practical) scenes 5 to 7: crossing over (pair the long chromosomes, roll a six, unclip inner chromatids
// at the same bead, swap end pieces that keep their colours, the unmatched-swap inset), lining up and dividing twice
// (equator, a coin per pair, partners separate into two loops, sisters into four gametes), and recording the gametes
// (cards fly to the record, a second run with a three and new coins, the sorted table: 2 x 2 unmixed, rarer mixed).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Bench, CEN_L, CEN_S, CUT, CZ, Centromere, Chain, Chip, Chromo, Coin, ColourKey2, Cross, Die, DrawPath, EDGE, Fade, GCard, GREYT, GreyTag, Heading, INK,
	INK_SOFT, Loop, MIXED, NL, Overlay, PIT, Panel, QUESTION, Rail, S, Sx, TEAL, UNMIXED, chromatid, lerp, prog, pulse, swapEnds,
} from './shared';
import type {ChromatidSpec} from './shared';
import {CELL0, HX, LY, SPEC, SY} from './s1';

// after the crossover
export const [LP_B, LT_A] = swapEnds(SPEC.Lp, SPEC.Lt);
const BREAK_Y = (y: number) => y + (CUT - 0.5) * PIT;

// ---------- 5. Step 3: crossing over ----------
const K5 = cues(S('cross-over'), {step: 'Step three', pro: 'prophase one', pair: 'Pair each long chromosome', die: 'roll a die', six: 'cross over only on a six', unclip: 'Unclip one plum chromatid', same: 'at the same point', between: 'between the two genes', swap: 'swap the end pieces', match: 'Break at exactly matching points', real: 'a real crossover exchanges', lost: 'nothing is lost or doubled', ps: 'purple with short', wt: 'white with tall', record: 'Record those new combinations'});
export const PAIRX = {Lp: 430, Lt: 500};
export const SceneCrossP02: React.FC = () => {
	const f = useCurrentFrame();
	const pr = prog(f, K5.pair, 20);
	const xLp = lerp(HX.Lp, PAIRX.Lp, pr), xLt = lerp(HX.Lt, PAIRX.Lt, pr);
	const drop = prog(f, K5.unclip, 12);
	const sw = prog(f, K5.swap, 26);
	const done = sw >= 1;
	const arc = Math.sin(Math.PI * sw);
	const lpB = done ? LP_B : SPEC.Lp, ltA = done ? LT_A : SPEC.Lt;
	const dEnd = (PAIRX.Lt - 16) - (PAIRX.Lp + 16);
	const endDy = done ? 0 : 12 * drop;
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={2} at={K5.step} />
				<Bench />
				<Loop x={CELL0.x} y={CELL0.y} rx={CELL0.rx} ry={CELL0.ry} />
				<Chromo x={lerp(HX.Sp, 790, pr)} y={SY} a={SPEC.Sp} b={SPEC.Sp} dup={1} cen={1} o={1 - 0.55 * pr} />
				<Chromo x={lerp(HX.St, 880, pr)} y={SY} a={SPEC.St} b={SPEC.St} dup={1} cen={1} o={1 - 0.55 * pr} />
				{/* the long pair, side by side */}
				<Chain x={xLp - 16} y={LY} spec={SPEC.Lp} />
				<Chain x={xLt + 16} y={LY} spec={SPEC.Lt} />
				<Chain x={xLp + 16} y={LY} spec={lpB} endDx={done ? 0 : dEnd * sw} endDy={endDy + 36 * arc} ringAll={pulse(f, K5.ps, 50)} />
				<Chain x={xLt - 16} y={LY} spec={ltA} endDx={done ? 0 : -dEnd * sw} endDy={endDy - 36 * arc} ringAll={pulse(f, K5.wt, 50)} />
				<Centromere x={xLp} y={LY + CEN_L * PIT} w={36} />
				<Centromere x={xLt} y={LY + CEN_L * PIT} w={36} />
				<Sx x={(xLp + xLt) / 2} y={LY - 30} text="prophase I: partners pair" size={26} color={INK_SOFT} weight={700} anchor="middle" at={K5.pair} />
				{/* matching break line */}
				<g opacity={prog(f, K5.unclip, 10)}>
					<line x1={PAIRX.Lp - 50} y1={BREAK_Y(LY)} x2={PAIRX.Lt + 50 + 60 * prog(f, K5.match, 14)} y2={BREAK_Y(LY)} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="8 6" />
					<Sx x={PAIRX.Lt + 60} y={BREAK_Y(LY) - 12} text="same point," size={26} color={AMBER_INK} hand at={K5.same} />
					<Sx x={PAIRX.Lt + 60} y={BREAK_Y(LY) + 20} text="between the genes" size={26} color={AMBER_INK} hand at={K5.between} />
				</g>
				<Sx x={PAIRX.Lp - 70} y={LY + 4 * PIT} text="P with t" size={30} color={TEAL} weight={800} anchor="end" at={K5.ps} />
				<Sx x={PAIRX.Lp - 70} y={LY + 5 * PIT + 10} text="(new)" size={24} color={TEAL} weight={700} anchor="end" at={K5.ps} />
				<Sx x={PAIRX.Lt + 60} y={LY + 8 * PIT + 34} text="p with T (new)" size={30} color={TEAL} weight={800} at={K5.wt} />
				{/* the die */}
				<Die x={1060} y={400} w={150} pips={6} tumble={prog(f, K5.die, 24)} o={prog(f, K5.die - 4, 8)} ring={pulse(f, K5.six, 40)} />
				<Sx x={1060} y={520} text="six: cross over" size={30} color={INK} hand anchor="middle" at={K5.six} />
				<Chip x={1060} y={548} anchor="middle" text="1 to 5: no swap" at={K5.six + 10} size={24} color={INK_SOFT} hand={false} weight={600} />
				{/* card zone: the unmatched inset and the record */}
				<Fade at={K5.match}>
					<Panel x={CZ.x} y={CZ.y + 10} w={CZ.w} h={380} stroke={EDGE} />
					<Sx x={CZ.x + 24} y={CZ.y + 56} text="if the breaks don't match:" size={30} color={INK} hand />
				</Fade>
				<g opacity={prog(f, K5.real, 12)}>
					<Chain x={CZ.x + 170} y={CZ.y + 100} spec={{cols: [...Array(6).fill('P'), ...Array(4).fill('T')], stk: {1: 'P', 8: 't'}}} r={11} />
					<Chain x={CZ.x + 220} y={CZ.y + 100} spec={{cols: [...Array(6).fill('T'), ...Array(2).fill('P')], stk: {1: 'p'}}} r={11} />
					<Sx x={CZ.x + 270} y={CZ.y + 150} text="one gains a bead," size={26} color={INK} weight={600} />
					<Sx x={CZ.x + 270} y={CZ.y + 186} text="one loses a gene" size={26} color={INK} weight={600} />
				</g>
				<Cross x={CZ.x + 195} y={CZ.y + 220} s={40} at={K5.lost - 6} />
				<Sx x={CZ.x + 24} y={CZ.y + 366} text="unmatched: genes lost or doubled" size={26} color={GREYT} weight={700} at={K5.lost} />
				<Fade at={K5.record}>
					<Panel x={CZ.x} y={CZ.y + 430} w={CZ.w} h={160} stroke={AMBER} />
					<Sx x={CZ.x + 24} y={CZ.y + 480} text="Record: new combinations" size={32} color={INK} hand />
					<Sx x={CZ.x + 24} y={CZ.y + 540} text="P t   and   p T" size={40} color={TEAL} weight={800} />
				</Fade>
				<ColourKey2 />
			</Overlay>
		</>
	);
};

// ---------- 6. Step 4: line up and divide twice ----------
const K6 = cues(S('line-up-divide'), {step: 'Step four', meta: 'metaphase one', line: 'line the pairs up', coin: 'Flip the coin for each pair', plum: 'which side the plum chromosome goes', random: 'direction random', indep: 'independent of the other pair', apart: 'Pull each pair apart', loops: 'two new loops', m2: 'for meiosis two', sis: 'pull the sister chromatids apart', four: 'four gametes', each: 'each with one long and one short'});
export const GX = [190, 420, 700, 930];
export const GY_L = 330, GY_S = 650;
export const GAMETES: {long: ChromatidSpec; short: ChromatidSpec; t: string}[] = [
	{long: SPEC.Lp, short: SPEC.St, t: 'P T r'}, {long: LP_B, short: SPEC.St, t: 'P t r'}, {long: LT_A, short: SPEC.Sp, t: 'p T R'}, {long: SPEC.Lt, short: SPEC.Sp, t: 'p t R'},
];
/** The four gametes on the bench (scene 6 end, scene 7 start). */
export const Gametes: React.FC<{o?: number; labels?: number; ring?: (i: number) => number}> = ({o = 1, labels = 1, ring}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{GAMETES.map((g, i) => (
			<g key={i}>
				<Loop x={GX[i]} y={560} rx={95} ry={270} hot={ring ? ring(i) : 0} />
				<Chain x={GX[i] - 24} y={GY_L} spec={g.long} />
				<Chain x={GX[i] + 24} y={GY_S} spec={g.short} />
				<g opacity={labels}>
					<text x={GX[i]} y={868} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30}} fill={INK}>{g.t}</text>
					<text x={GX[i]} y={904} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>n = 2</text>
				</g>
			</g>
		))}
	</g>
));
export const SceneDivideP02: React.FC = () => {
	const f = useCurrentFrame();
	const t1 = prog(f, K6.line, 22);
	const c2 = K6.coin + 34;
	const sw = prog(f, c2 + 26, 18);
	const t3 = prog(f, K6.apart, 26);
	const t4 = prog(f, K6.sis, 26);
	const EQ = CELL0.x;
	const Lx = (xp: number, side: -1 | 1) => lerp(lerp(xp, EQ + side * 50, t1), side < 0 ? 330 : 790, t3);
	const xLp = Lx(PAIRX.Lp, -1), xLt = Lx(PAIRX.Lt, 1);
	const sSp = lerp(-1, 1, sw) as number, sSt = -sSp;
	const xS = (x0: number, s: number) => lerp(lerp(x0, EQ + s * 50, t1), s < 0 ? 330 : 790, t3);
	const xSp = xS(790, sSp), xSt = xS(880, sSt);
	const yL = lerp(LY, GY_L, t1), ySp = lerp(SY, GY_S, t1);
	const split = (x: number, side: 'a' | 'b', gi: number, dx: number) => lerp(x + (side === 'a' ? -16 : 16), GX[gi] + dx, t4);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={3} at={K6.step} />
				<Bench />
				<Loop x={CELL0.x} y={CELL0.y} rx={CELL0.rx} ry={CELL0.ry} o={1 - t3} />
				<g opacity={t1 * (1 - t3)}><DrawPath d={`M${EQ},${320} L${EQ},${880}`} at={K6.line} dur={20} color={AMBER_INK} width={3} dash="10 8" /></g>
				<Sx x={EQ} y={312} text="equator" size={24} color={AMBER_INK} hand anchor="middle" at={K6.line + 10} out={K6.apart} />
				<Loop x={330} y={590} rx={210} ry={300} p={t3} o={1 - t4} />
				<Loop x={790} y={590} rx={210} ry={300} p={t3} o={1 - t4} />
				<Loop x={GX[0]} y={560} rx={95} ry={270} p={t4} />
				<Loop x={GX[1]} y={560} rx={95} ry={270} p={t4} />
				<Loop x={GX[2]} y={560} rx={95} ry={270} p={t4} />
				<Loop x={GX[3]} y={560} rx={95} ry={270} p={t4} />
				{/* long chromatids */}
				<Chain x={split(xLp, 'a', 0, -24)} y={yL} spec={SPEC.Lp} />
				<Chain x={split(xLp, 'b', 1, -24)} y={yL} spec={LP_B} />
				<Chain x={split(xLt, 'a', 2, -24)} y={yL} spec={LT_A} />
				<Chain x={split(xLt, 'b', 3, -24)} y={yL} spec={SPEC.Lt} />
				<Centromere x={xLp} y={yL + CEN_L * PIT} w={36} o={1 - t4} />
				<Centromere x={xLt} y={yL + CEN_L * PIT} w={36} o={1 - t4} />
				{/* short chromatids */}
				<Chain x={split(xSt, 'a', 0, 24)} y={ySp} spec={SPEC.St} />
				<Chain x={split(xSt, 'b', 1, 24)} y={ySp} spec={SPEC.St} />
				<Chain x={split(xSp, 'a', 2, 24)} y={ySp} spec={SPEC.Sp} />
				<Chain x={split(xSp, 'b', 3, 24)} y={ySp} spec={SPEC.Sp} />
				<Centromere x={xSt} y={ySp + CEN_S * PIT} w={36} o={1 - t4} />
				<Centromere x={xSp} y={ySp + CEN_S * PIT} w={36} o={1 - t4} />
				{/* coins */}
				<g opacity={1 - t3}>
					<Coin x={1010} y={440} r={34} from={K6.coin} to={K6.coin + 26} face="P" />
					<Coin x={1010} y={700} r={34} from={c2} to={c2 + 26} face="T" />
				</g>
				<Sx x={1060} y={450} text="long pair:" size={26} color={INK} weight={700} at={K6.coin + 26} out={K6.apart} />
				<Sx x={1060} y={482} text="plum left" size={30} color={INK} hand at={K6.coin + 26} out={K6.apart} />
				<Sx x={1060} y={710} text="short pair:" size={26} color={INK} weight={700} at={c2 + 26} out={K6.apart} />
				<Sx x={1060} y={742} text="plum right" size={30} color={INK} hand at={c2 + 26} out={K6.apart} />
				{/* card zone */}
				<Fade at={K6.random}>
					<Panel x={CZ.x} y={CZ.y + 10} w={CZ.w} h={200} stroke={AMBER} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 62} text="a coin for each pair:" size={32} color={INK} hand at={K6.random} />
				<Sx x={CZ.x + 24} y={CZ.y + 112} text="random direction," size={30} color={INK} weight={700} at={K6.random + 6} />
				<Sx x={CZ.x + 24} y={CZ.y + 156} text="decided separately" size={30} color={INK} weight={700} at={K6.indep} />
				<Fade at={K6.loops}>
					<Panel x={CZ.x} y={CZ.y + 250} w={CZ.w} h={160} stroke={EDGE} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 300} text="meiosis I: partners separate;" size={28} color={INK} weight={700} at={K6.loops} />
				<Sx x={CZ.x + 24} y={CZ.y + 342} text="centromeres stay joined" size={28} color={INK} weight={700} at={K6.loops + 6} />
				<GreyTag x={CZ.x + 24} y={CZ.y + 360} text="B5b" at={K6.loops + 10} size={20} />
				<Fade at={K6.m2}>
					<Panel x={CZ.x} y={CZ.y + 450} w={CZ.w} h={110} stroke={EDGE} />
				</Fade>
				<Sx x={CZ.x + 24} y={CZ.y + 500} text="meiosis II: sister chromatids" size={28} color={INK} weight={700} at={K6.m2} />
				<Sx x={CZ.x + 24} y={CZ.y + 538} text="separate" size={28} color={INK} weight={700} at={K6.sis} />
				<g opacity={prog(f, K6.four, 14)}>
					{GAMETES.map((g, i) => (
						<g key={i}>
							<text x={GX[i]} y={868} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 30}} fill={INK}>{g.t}</text>
							<text x={GX[i]} y={904} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 22}} fill={INK_SOFT}>n = 2</text>
						</g>
					))}
				</g>
				<Sx x={CZ.x + 24} y={CZ.y + 620} text="4 gametes: 1 long + 1 short each" size={28} color={TEAL} hand at={K6.each} />
				<ColourKey2 />
			</Overlay>
		</>
	);
};

// ---------- 7. Step 5: record the gametes, and run it again ----------
const K7 = cues(S('record-gametes'), {step: 'Step five', record: "record each gamete's alleles", rebuild: 'rebuild and run it again', coins: 'different coin results', without: 'Without crossing over', four: 'four types', pt: 'purple and tall', ws: 'white and short', each: 'each with round or with wrinkled', two: 'two choices for each of two pairs', times: 'two times two', mixed: 'adds the mixed types', less: 'less common because', die: 'like your die', some: 'happens in only some cells'});
const RUN2 = ['p t r', 'p t r', 'P T R', 'P T R'];
export const SceneRecordP02: React.FC = () => {
	const f = useCurrentFrame();
	const out = prog(f, K7.rebuild, 16);
	const cardFly = (i: number) => prog(f, K7.record + 30 + i * 8, 18);
	const run2 = (i: number) => prog(f, K7.coins + 30 + i * 8, 16);
	const chipX = (i: number) => CZ.x + 24 + (i % 2) * 270;
	const unAt = [K7.pt, K7.pt + 12, K7.ws, K7.ws + 12];
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={4} at={K7.step} />
				<Bench />
				<Gametes o={1 - out} labels={1} />
				{/* run 1 cards: written under each gamete, then into the record */}
				{GAMETES.map((g, i) => {
					const w0 = prog(f, K7.record + i * 6, 10);
					const t = cardFly(i);
					return <GCard key={i} x={lerp(GX[i], CZ.x + 70 + i * 140, t)} y={lerp(800, 330, t)} t={g.t} w={lerp(150, 124, t)} o={w0} />;
				})}
				<Sx x={CZ.x} y={282} text="run 1 (die: six)" size={24} color={INK_SOFT} weight={700} at={K7.record + 40} />
				{/* run 2 on the bench */}
				<Die x={300} y={420} w={150} pips={1} tumble={prog(f, K7.rebuild + 10, 24)} o={out} ring={pulse(f, K7.die, 40)} />
				<Sx x={300} y={540} text="one: no swap this run" size={28} color={INK} hand anchor="middle" at={K7.rebuild + 30} />
				<g opacity={out}>
					<Coin x={600} y={420} r={34} from={K7.coins} to={K7.coins + 26} face="T" />
					<Coin x={720} y={420} r={34} from={K7.coins + 6} to={K7.coins + 32} face="T" />
				</g>
				<Sx x={660} y={500} text="new coin results" size={28} color={INK} hand anchor="middle" at={K7.coins + 26} />
				<Sx x={110} y={830} text="every run: fresh die, fresh coins; record every gamete" size={30} color={AMBER_INK} hand at={K7.coins + 40} />
				{RUN2.map((t, i) => {
					const p = run2(i);
					const fly = prog(f, K7.four - 20 + i * 6, 18);
					return <GCard key={i} x={lerp(220 + i * 190, CZ.x + 70 + i * 140, fly)} y={lerp(lerp(560, 720, p), 452, fly)} t={t} w={lerp(150, 124, fly)} o={p} />;
				})}
				<Sx x={CZ.x} y={404} text="run 2 (die: one)" size={24} color={INK_SOFT} weight={700} at={K7.four - 10} />
				{/* the sorted record */}
				<Fade at={K7.without}>
					<Panel x={CZ.x} y={505} w={CZ.w} h={250} stroke={TEAL} />
					<Sx x={CZ.x + 24} y={547} text="no crossover: 4 types" size={30} color={INK} hand />
				</Fade>
				{UNMIXED.map((t, i) => <Chip key={t} x={chipX(i)} y={565 + Math.floor(i / 2) * 64} text={t} at={unAt[i]} size={30} color={INK} hand={false} weight={800} stroke={TEAL} />)}
				<Sx x={CZ.x + 24} y={735} text="2 x 2 = 4 = 2^{n}" size={32} color={TEAL} weight={800} at={K7.times} />
				<GreyTag x={CZ.x + 320} y={709} text="site: confirm 2^n" at={K7.times + 10} size={18} />
				<Fade at={K7.mixed}>
					<Panel x={CZ.x} y={775} w={CZ.w} h={200} stroke={EDGE} />
					<Sx x={CZ.x + 24} y={811} text="with a crossover (less common)" size={26} color={INK_SOFT} hand />
				</Fade>
				{MIXED.map((t, i) => <Chip key={t} x={chipX(i)} y={825 + Math.floor(i / 2) * 50} text={t} at={K7.mixed + 6 + i * 4} size={22} color={INK_SOFT} hand={false} weight={700} />)}
				<Sx x={CZ.x + 24} y={956} text="only on a six: some cells" size={22} color={AMBER_INK} weight={700} at={K7.some} />
				<Die x={1120} y={760} w={110} pips={6} tumble={prog(f, K7.die, 22)} o={prog(f, K7.die - 4, 8)} />
				<GreyTag x={1030} y={840} text="B8" at={K7.die + 10} size={20} />
				<ColourKey2 />
			</Overlay>
		</>
	);
};
void AMBER; void NL; void chromatid; void Cross;
