// Y11 Chem WS V02 scenes 1 to 5: ws-v01's final frame (the question, the hypothesis and the clipboard "plan: ?")
// giving way to the rushed test (three lit crucibles on three flames, hot readings, the zigzag plot), the variables
// board (one crucible with its independent, dependent and controlled variables tagged on the apparatus, the black
// crust struck), the experimental control (the empty lidded crucible heated to a steady mass), reliability (three runs
// plotted live on the prediction curve) and the two balances with the 3 s prediction.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {BAL, CLIP, CRU_B, CRU_EL, CRU_K, CRU_L, CRU_LID, RUNS, RUN_T, RUSHED, hold, sc} from './common';
import {
	Axes, BalanceW, Bowl, Bracket, Chip, CrossBox, DrawPath, Fade, Flame, GOLD_S, GOLD_T, Heading, INK, Inset, NAVY_T, PenArrow, PenRing, Plate, PlanBoard, PredCurve, RED_S, RED_T, Readout,
	Rich, SVG, Steam, Sx, TEAL_S, TEAL_T, Tag, VIOLET_S, VIOLET_T, balW, clamp01, cruGeo, gX, gY, kf, plateMap, prog, smooth, vis,
} from './parts';
import type {GG, PSec} from './parts';
import {COOL_W, COOL_X, L, SUM, ln, sec} from './plan';
import {WS1_END, WS1_FF, WsV01Final} from './opening';

// ---------- 1. hook: a rushed test (opens on ws-v01's final frame) ----------
const K1 = cues(sc('hook'), {our: 'Our question', rushed: 'rushed test', three: 'Three people', two: ['two,', 1], four: ['four', 1], six: 'six minutes', weigh: 'weigh them', hot: 'still hot', n19: 'nineteen', n15: 'fifteen', n31: 'thirty-one', fourMin: 'The four minute', less: 'less than', one: 'minute one', hyp: 'hypothesis', test: ['test', 2], many: 'With so many', tell: "can't tell", plan: 'The plan decides', all: 'at all'});
const C1X = [110, 400, 690], C1Y = 220, C1H = 420;
const FL = [{h: 118, roar: 1}, {h: 30, roar: 0}, {h: 62, roar: 0}];
const PG1: GG = {x0: 1130, x1: 1560, y0: 580, y1: 320, tMax: 6, pMax: 40};
const BOARD = {x: 1200, y: 190, w: 624, h: 740};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const A = K1.rushed;
	const boardIn = prog(f, K1.all, 18);
	const clipO = 1 - prog(f, K1.all + 4, 14);
	const right = 1 - prog(f, K1.all - 6, 12);
	const tAt = [K1.two, K1.four, K1.six];
	const nAt = [K1.n19, K1.n15, K1.n31];
	return (
		<SVG>
			{/* ws-v01's final frame, frozen, until "rushed test" */}
			<Fade at={-1000} out={A - 14} d={16}>
				<Freeze frame={WS1_END}><WsV01Final /></Freeze>
			</Fade>
			<Fade at={A - 6} d={18}>
				<Heading text="A rushed test" at={A} out={K1.all - 4} />
				{C1X.map((x, i) => {
					const g = cruGeo(CRU_L, x, C1Y, C1H);
					const fh = FL[i].h * smooth(prog(f, K1.three + i * 8, 20)) + 26 * (1 - smooth(prog(f, K1.three + i * 8, 20)));
					return (
						<g key={i}>
							<Plate p={CRU_L} x={x} y={C1Y} h={C1H} />
							<Flame x={g.axis} y={g.mouth} h={fh} roar={FL[i].roar * prog(f, K1.three, 20)} seed={i * 2} />
							<Steam x={g.axis} y={g.rim - 6} from={A + 20} n={3} spread={34} s={0.8} />
							{/* heat shimmer while weighed hot */}
							{f >= K1.weigh ? <g opacity={vis(f, K1.weigh, K1.many, 10)}>
								{[0, 1, 2].map(j => {
									const ph = ((f * 1.6 + j * 20) % 60) / 60;
									return <path key={j} d={`M${g.axis - 50 + j * 50},${C1Y - 6 - ph * 40} q-10,-12 0,-24 q10,-12 0,-24`} fill="none" stroke={RED_S} strokeWidth={4} strokeLinecap="round" opacity={0.9 - ph * 0.6} />;
								})}
							</g> : null}
							<Chip x={g.axis} y={C1Y + C1H + 14} segs={[{t: `${RUSHED[i].t} min`}]} at={tAt[i]} size={38} color={INK} anchor="middle" />
							<Readout x={g.axis - 125} y={C1Y + C1H + 96} w={250} text={f < nAt[i] ? '? % lost' : `${RUSHED[i].pc}% lost`} at={tAt[i] + 8} size={52} anchor="middle" />
						</g>
					);
				})}
				<Tag x={965} y={268} text="weighed hot" at={K1.hot} out={K1.all - 4} color={RED_T} />
				<PenArrow a={[960, 252]} b={[880, 200]} at={K1.hot + 6} out={K1.all - 4} color={RED_T} bend={0.2} />
				<Sx x={1130} y={716} text="illustrative data" size={30} color={INK} weight={700} at={K1.n19} out={K1.all - 8} />
				{/* the differences */}
				<Bracket a={[110, 838]} b={[930, 838]} at={K1.many + 4} color={INK} depth={16} />
				{[['different burners', 110], ['different flames', 420], ['weighed hot', 730]].map(([t, x], i) => <Sx key={i} x={x as number} y={900} text={t as string} size={34} color={INK} weight={800} at={K1.many + 10 + i * 8} />)}
				<Tag x={960} y={900} text="which one caused it?" at={K1.tell} out={K1.all - 8} color={INK} />
			</Fade>
			{/* the zigzag plot and the two doubts (right) */}
			<g opacity={right}>
				<Fade at={A + 16}>
					<Axes g={PG1} ticks={false} xTitle="heating time (min)" />
					{[2, 4, 6].map(t => <Sx key={t} x={gX(PG1, t)} y={PG1.y0 + 36} text={`${t}`} size={28} color={INK} anchor="middle" weight={700} at={-1000} />)}
					{[0, 20, 40].map(p => <Sx key={p} x={PG1.x0 - 10} y={gY(PG1, p) + 10} text={`${p}`} size={28} color={INK} anchor="end" weight={700} at={-1000} />)}
					<DrawPath d={`M${gX(PG1, 2)},${gY(PG1, 19)} L${gX(PG1, 4)},${gY(PG1, 15)} L${gX(PG1, 6)},${gY(PG1, 31)}`} at={K1.fourMin} dur={20} color={INK} width={4} />
					{RUSHED.map((r, i) => <circle key={i} cx={gX(PG1, r.t)} cy={gY(PG1, r.pc)} r={11} fill={INK} opacity={prog(f, nAt[i], 8)} />)}
				</Fade>
				<PenRing cx={gX(PG1, 4)} cy={gY(PG1, 15)} rx={38} ry={34} at={K1.less} color={RED_S} seed={4} />
				<Tag x={1360} y={246} text="less? that makes no sense" at={K1.one} color={RED_T} anchor="middle" />
				<Chip x={1100} y={770} segs={[{t: 'hypothesis wrong?'}]} at={K1.hyp} size={40} color={INK} />
				<Chip x={1520} y={770} segs={[{t: 'test wrong?'}]} at={K1.test} size={40} color={RED_T} />
			</g>
			{/* the question box is marked as it is read */}
			<Bracket a={[WS1_FF.q.x - 18, WS1_FF.q.y + 12]} b={[WS1_FF.q.x - 18, WS1_FF.q.y + 180]} at={K1.our} out={A - 6} color={NAVY_T} depth={16} />
			{/* ws-v01's clipboard "plan: ?" shrinks to the top right, waits, then grows into the plan board */}
			{(() => {
				const u = smooth(prog(f, A + 2, 24));
				const ch0 = (WS1_FF.clip.w / CLIP.box[2]) * CLIP.box[3];
				const x = WS1_FF.clip.x + (1690 - WS1_FF.clip.x) * u, y = WS1_FF.clip.y + (170 - WS1_FF.clip.y) * u, h = ch0 + (150 - ch0) * u;
				const w = (h / CLIP.box[3]) * CLIP.box[2];
				const o = f < A ? 1 : clipO;
				return o > 0.005 ? (
					<g opacity={o}>
						<Plate p={CLIP} x={x} y={y} h={h} />
						<Sx x={x + w / 2} y={y + h * 0.55} text="plan: ?" size={Math.round(52 + (30 - 52) * u)} color="#4a4540" anchor="middle" hand weight={700} at={-1000} />
					</g>
				) : null;
			})()}
			{boardIn > 0.005 ? (
				<g opacity={boardIn} transform={`translate(${1757},${245}) scale(${0.25 + 0.75 * smooth(boardIn)}) translate(${-1757},${-245})`}>
					<PlanBoard {...BOARD} secs={[sec('valid', []), sec('reliable', []), sec('equipment', []), sec('safe', [])]} />
				</g>
			) : null}
			<Heading text="Planning: data you can use" at={K1.all} />
			{void K1.plan}{void K1.hot}{void clamp01}
		</SVG>
	);
};

// ---------- the board for scenes 2 to 4 ----------
const validLines = (k: {gloss: number; hand: number; recap: number; run?: number; out?: boolean}) => [
	ln(L.vGloss, k.gloss), ln(L.vHand, k.hand, {hand: true}), ln(L.vIvdv, k.recap), ln(L.vCtrl1, k.recap + 6), ln(L.vCtrl2, k.recap + 12), ...(k.run !== undefined ? [ln(L.vRun, k.run)] : []),
];

// ---------- 2. variables and validity ----------
const K2 = cues(sc('variables-validity'), {valid: 'valid investigation', water: ['water,', 1], change: ['the one we change', 1], measure: ['the one we measure', 1], everything: 'Everything else', controlled: 'controlled variable', mass: 'two point five', crucible: 'the same crucible', flame: 'the same small blue', cooling: 'the same cooling', weighing: 'weighing.', ifany: 'If any of these', result: ['which change caused the result', 1], gentle: 'And the flame', strong: 'strong heat', just: 'be just water'});
const CX2 = 440, CY2 = 250, CH2 = 480;
const BAL2 = balW(760, 480, 380);
export const SceneVariables: React.FC = () => {
	const f = useCurrentFrame();
	const g = cruGeo(CRU_L, CX2, CY2, CH2);
	const km = plateMap(CRU_K, 1040, 196, 220);
	const tmr = Math.round(kf(f, [[0, 0], [K2.change, 0], [K2.change + 90, 4]]));
	const secs: PSec[] = [
		sec('valid', validLines({gloss: K2.valid + 4, hand: K2.water - 14, recap: K2.just + 8}), {hiAt: K2.valid}),
		sec('reliable', []), sec('equipment', []), sec('safe', []),
	];
	return (
		<SVG>
			<Heading text="Valid: measures what it claims" at={0} />
			<Plate p={CRU_L} x={CX2} y={CY2} h={CH2} />
			<BalanceW g={BAL2} text="26.81 g" size={44} />
			{/* the plain meaning, large in the empty left column until the controls need it */}
			<Fade at={K2.valid} out={K2.mass - 16}>
				<Rich x={96} y={320} segs={[{t: 'valid:', c: TEAL_T}]} size={46} />
				<Rich x={96} y={378} segs={[{t: 'measures what'}]} size={44} />
				<Rich x={96} y={430} segs={[{t: 'it claims to'}]} size={44} />
				<Rich x={96} y={482} segs={[{t: 'measure'}]} size={44} />
			</Fade>
			{/* independent variable: the timer */}
			<Chip x={g.axis} y={760} segs={[{t: `heating: ${tmr} min`, c: NAVY_T}]} at={-1000} size={38} color={NAVY_T} anchor="middle" />
			<Rich x={g.axis} y={884} segs={[{t: 'independent: ', c: NAVY_T}, {t: 'heating time', c: NAVY_T}]} size={38} anchor="middle" at={K2.change} />
			<PenArrow a={[g.axis + 250, 856]} b={[g.axis + 150, 800]} at={K2.change + 6} color={NAVY_T} bend={0.25} />
			{/* dependent variable: the balance */}
			<Rich x={760} y={400} segs={[{t: 'dependent:'}]} size={38} at={K2.measure} />
			<Rich x={760} y={446} segs={[{t: '% mass lost'}]} size={38} at={K2.measure + 4} />
			<PenArrow a={[1000, 430]} b={[BAL2.disp[0] + 40, BAL2.disp[1] - 30]} at={K2.measure + 8} color={INK} bend={-0.25} />
			{/* controlled variables, each beside the part it controls (gold, solid) */}
			<Rich x={400} y={302} segs={[{t: 'mass: 2.50 g', c: GOLD_T}]} size={34} anchor="end" at={K2.mass} />
			<PenArrow a={[408, 292]} b={[g.axis - 40, g.crystals + 4]} at={K2.mass + 6} color={GOLD_S} bend={-0.15} />
			<Rich x={400} y={386} segs={[{t: 'same crucible', c: GOLD_T}]} size={34} anchor="end" at={K2.crucible} />
			<PenArrow a={[408, 376]} b={[g.axis - 100, g.mid + 6]} at={K2.crucible + 6} color={GOLD_S} bend={0.1} />
			<Rich x={400} y={470} segs={[{t: 'small blue flame,', c: GOLD_T}]} size={34} anchor="end" at={K2.flame} />
			<Rich x={400} y={512} segs={[{t: 'same height', c: GOLD_T}]} size={34} anchor="end" at={K2.flame + 6} />
			<PenArrow a={[408, 480]} b={[g.axis - 16, g.tip + 18]} at={K2.flame + 10} color={GOLD_S} bend={0.15} />
			<Rich x={830} y={800} segs={[{t: 'same cooling', c: GOLD_T}]} size={34} at={K2.cooling} />
			<Rich x={830} y={842} segs={[{t: 'before weighing', c: GOLD_T}]} size={34} at={K2.cooling + 6} />
			<PenArrow a={[1080, 776]} b={[BAL2.x + BAL2.w * 0.72, BAL2.y + BAL2.h - 16]} at={K2.weighing} color={GOLD_S} bend={0.3} />
			{/* the shared reason */}
			<Bracket a={[84, 270]} b={[84, 524]} at={K2.result} color={GOLD_S} depth={-16} />
			<Tag x={96} y={612} text="if it changed too," at={K2.result + 4} color={GOLD_T} />
			<Tag x={96} y={658} text="which change caused" at={K2.result + 14} color={GOLD_T} />
			<Tag x={96} y={704} text="the result?" at={K2.result + 24} color={GOLD_T} />
			{/* strong heat: not just water */}
			<Plate p={CRU_K} x={1040} y={196} h={220} at={K2.strong} dy={16} />
			<CrossBox x={km.X(200)} y={210} w={km.X(640) - km.X(200)} h={190} at={K2.just} />
			<Tag x={1020} y={300} text="not just water" at={K2.just + 6} color={RED_T} anchor="end" />
			<Sx x={1110} y={446} text="strong heat" size={30} color={INK} anchor="middle" weight={700} at={K2.strong + 8} />
			<PlanBoard {...BOARD} secs={secs} />
			{void K2.everything}{void K2.controlled}{void K2.ifany}{void K2.gentle}{void BAL}
		</SVG>
	);
};

// ---------- 3. an experimental control ----------
const K3 = cues(sc('experimental-control'), {one: 'one more check', control: 'experimental control', run: 'a run without', before: 'Before adding', heat: 'we heat the empty', weigh: 'and weigh them', until: 'until their mass', stops: 'stops changing', if: 'If the empty', blame: 'wrongly blame', crystals: 'the crystals.', steady: 'A steady empty', inside: "what's inside", it: 'inside it'});
const READ3 = [{t: '24.33 g', at: 0}, {t: '24.31 g', at: 0}, {t: '24.31 g', at: 0}];
export const SceneControl: React.FC = () => {
	const f = useCurrentFrame();
	const g = cruGeo(CRU_EL, CX2, CY2, CH2);
	const rAt = [K3.weigh, K3.until, K3.stops];
	const back = prog(f, K3.it - 6, 20);
	const cur = f < rAt[0] ? '24.33 g' : f < rAt[1] ? READ3[0].t : READ3[2].t;
	const secs: PSec[] = [
		sec('valid', validLines({gloss: -1000, hand: -1000, recap: -1000, run: K3.it})),
		sec('reliable', []), sec('equipment', []), sec('safe', []),
	];
	return (
		<SVG>
			<Heading text="An experimental control" at={0} />
			<Plate p={CRU_EL} x={CX2} y={CY2} h={CH2} o={1 - back} />
			<Plate p={CRU_LID} x={CX2} y={CY2} h={CH2} o={back} />
			<Flame x={g.axis} y={g.mouth} h={30 * prog(f, K3.heat, 14)} o={1 - prog(f, K3.it - 6, 14)} />
			<Steam x={g.axis} y={g.rim - 40} from={1e9} />
			<BalanceW g={BAL2} text={cur} size={44} />
			{/* the gloss and the plain meaning */}
			<Rich x={96} y={290} segs={[{t: 'experimental', c: TEAL_T}]} size={38} at={K3.control} />
			<Rich x={96} y={336} segs={[{t: 'control:', c: TEAL_T}]} size={38} at={K3.control + 4} />
			<Rich x={96} y={386} segs={[{t: 'a run without the'}]} size={34} at={K3.run} />
			<Rich x={96} y={428} segs={[{t: 'thing being tested'}]} size={34} at={K3.run + 6} />
			<Tag x={96} y={500} text="nothing in it:" at={K3.run + 20} color={TEAL_T} />
			<Tag x={96} y={546} text="for comparison" at={K3.run + 30} color={TEAL_T} />
			<PenArrow a={[330, 520]} b={[g.axis - 90, g.mid - 10]} at={K3.run + 36} color={TEAL_S} bend={-0.2} />
			{/* heated and weighed to constant mass */}
			<Sx x={760} y={244} text="empty crucible + lid, heated:" size={30} color={INK} weight={700} at={K3.heat} />
			{READ3.map((r, i) => <Readout key={i} x={760} y={262 + i * 74} w={250} text={r.t} size={44} at={rAt[i]} anchor="middle" />)}
			<Sx x={740} y={306} text="1" size={30} color={INK} anchor="end" weight={700} at={rAt[0]} />
			<Sx x={740} y={380} text="2" size={30} color={INK} anchor="end" weight={700} at={rAt[1]} />
			<Sx x={740} y={454} text="3" size={30} color={INK} anchor="end" weight={700} at={rAt[2]} />
			<PenRing cx={885} cy={295 + 2 * 74} rx={150} ry={40} at={K3.stops + 8} color={TEAL_S} seed={2} />
			<Tag x={1046} y={458} text="steady" at={K3.stops + 14} color={TEAL_T} />
			{/* what a changing crucible would do */}
			<Inset x={96} y={600} w={300} h={110} at={K3.if} strike={K3.crystals}>
				<Sx x={246} y={672} text="−0.02 g?" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
			</Inset>
			<Tag x={96} y={770} text="blamed on the crystals" at={K3.crystals + 8} color={RED_T} />
			<Tag x={96} y={870} text="every later change: from what's inside" at={K3.inside - 10} color={TEAL_T} />
			<PlanBoard {...BOARD} secs={secs} />
			{void K3.one}{void K3.before}{void K3.blame}{void K3.steady}{void CRU_B}
		</SVG>
	);
};

// ---------- 4. reliable data, and enough points ----------
const K4 = cues(sc('reliable-data'), {reliable: ['Reliable means', 1], repeat: 'repeat the whole', consistent: 'consistent results', three: 'three separate', each: 'Each one', steps: 'two minute steps', minutes: 'twelve minutes', all3: 'If all three', pattern: 'same pattern', seven: 'seven time points', levels: 'levels off', two: 'only two points', never: 'never see it'});
const PG4: GG = {x0: 210, x1: 760, y0: 830, y1: 600, tMax: 12, pMax: 40};
const RUNC = ['#26231f', VIOLET_S, '#c4582f'];
export const SceneReliable: React.FC = () => {
	const f = useCurrentFrame();
	const secs: PSec[] = [
		sec('valid', validLines({gloss: -1000, hand: -1000, recap: -1000, run: -1000})),
		sec('reliable', [ln(L.rGloss, K4.reliable + 6), ln(L.rRuns, K4.minutes)], {hiAt: K4.reliable}),
		sec('equipment', []), sec('safe', []),
	];
	const ptAt = (r: number, j: number) => K4.minutes + j * 9 + r * 3;
	return (
		<SVG>
			<Heading text="Reliable: repeat the whole thing" at={0} />
			{[0, 1, 2].map(i => {
				const x = 110 + i * 230;
				const g = cruGeo(CRU_L, x, 190, 270);
				return (
					<g key={i}>
						<Plate p={CRU_L} x={x} y={190} h={270} />
						<Sx x={g.axis} y={496} text={`run ${i + 1}`} size={34} color={RUNC[i]} anchor="middle" weight={800} at={-1000} />
					</g>
				);
			})}
			<Tag x={810} y={300} text="repeat the whole thing" at={K4.consistent} color={VIOLET_T} />
			<Sx x={110} y={548} text="0, 2, 4, 6, 8, 10, 12 min" size={34} color={INK} weight={800} at={K4.steps} />
			<Axes g={PG4} />
			<PredCurve g={PG4} />
			{RUNS.map((run, r) => run.map((p, j) => {
				const v = prog(f, ptAt(r, j), 6);
				return v > 0.01 ? <circle key={r + '-' + j} cx={gX(PG4, RUN_T[j]) + (r - 1) * 5} cy={gY(PG4, p)} r={9 * (0.6 + 0.4 * v)} fill={RUNC[r]} stroke="#fffdf8" strokeWidth={2} opacity={v} /> : null;
			}))}
			<Tag x={500} y={772} text="same pattern" at={K4.pattern} color={INK} />
			<Sx x={500} y={808} text="illustrative" size={30} color={INK} weight={700} at={K4.minutes} />
			<Bracket a={[gX(PG4, 8) - 10, gY(PG4, 36.1) - 22]} b={[gX(PG4, 12) + 10, gY(PG4, 36.1) - 22]} at={K4.levels} color={VIOLET_S} depth={-16} />
			<Tag x={560} y={572} text="seven points show the bend" at={K4.levels + 8} color={VIOLET_T} />
			<PenArrow a={[900, 560]} b={[gX(PG4, 11.5), gY(PG4, 36.1) - 34]} at={K4.levels + 14} color={VIOLET_S} bend={0.2} />
			{/* only two points: no bend to see */}
			<Inset x={870} y={640} w={300} h={230} at={K4.two} strike={K4.never}>
				<line x1={900} x2={1150} y1={840} y2={840} stroke={INK} strokeWidth={3} />
				<line x1={900} x2={900} y1={840} y2={670} stroke={INK} strokeWidth={3} />
				<line x1={905} x2={1135} y1={838} y2={692} stroke={INK} strokeWidth={4} />
				<circle cx={905} cy={838} r={9} fill={INK} />
				<circle cx={1135} cy={692} r={9} fill={INK} />
				<Sx x={1020} y={866} text="0 and 12 min only" size={26} color={INK} anchor="middle" weight={700} at={-1000} />
			</Inset>
			<Tag x={880} y={920} text="no bend to see" at={K4.never + 6} color={RED_T} />
			<PlanBoard {...BOARD} secs={secs} />
			{void K4.repeat}{void K4.three}{void K4.each}{void K4.all3}{void K4.seven}
		</SVG>
	);
};

// ---------- the compact board for scenes 5 and 6 ----------
const CBOARD = {x: 1380, y: 190, w: 444, h: 560};
export const compactSecs = (eq: ReturnType<typeof ln>[], eqHi?: number): PSec[] => [
	sec('valid', [], {summary: SUM.valid, tick: true}),
	sec('reliable', [], {summary: SUM.reliable, tick: true}),
	sec('equipment', eq, {hiAt: eqHi}),
	sec('safe', []),
];

// ---------- 5. which balance? (3 s countdown) ----------
const K5 = cues(sc('which-balance'), {equip: 'the equipment', total: 'In total', nine: 'nought point nine', one: ['One balance', 1], other: 'The other', use: 'should we use'});
export const BAL_A = balW(90, 280, 540), BAL_B = balW(680, 280, 540);
export const BalancePair: React.FC<{tags?: boolean; o?: number}> = ({tags = true, o = 1}) => (
	<g opacity={o}>
		{[BAL_A, BAL_B].map((g, i) => (
			<g key={i}>
				<BalanceW g={g} text={i ? '26.81 g' : '26.8 g'} size={52} />
				<Bowl id={`ws2b${i}`} p={CRU_B} bx={g.pan[0]} by={g.pan[1]} rimW={214} />
				{tags ? <Sx x={g.x + g.w / 2} y={g.y + g.h + 50} text={i ? 'reads to 0.01 g' : 'reads to 0.1 g'} size={38} color={INK} anchor="middle" weight={800} at={-1000} /> : null}
			</g>
		))}
	</g>
);
/** The undivided bars for the whole loss under each balance (scene 6 divides them into steps). */
export const RulerFrames: React.FC<{o?: number}> = ({o = 1}) => (
	<g opacity={o}>
		{[BAL_A, BAL_B].map((g, i) => (
			<g key={i}>
				<Sx x={g.x + 10} y={752} text="whole loss: 0.90 g" size={28} color={INK} weight={700} at={-1000} />
				<rect x={g.x + 10} y={762} width={g.w - 20} height={50} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			</g>
		))}
	</g>
);
export const SceneWhichBalance: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('which-balance');
	return (
		<SVG>
			<Heading text="Which balance?" at={0} />
			<BalancePair />
			<Chip x={900} y={98} segs={[{t: 'total loss ≈ 0.90 g'}]} at={-1000} size={44} color={INK} />
			<RulerFrames />
			<Countdown start={h.startFrame} end={h.endFrame} x={1300} y={770} r={56} ringFrom={K5.use} />
			<PlanBoard {...CBOARD} secs={compactSecs([], K5.equip)} />
			{void f}{void K5.total}{void K5.nine}{void K5.one}{void K5.other}{void BAL}{void COOL_X}{void COOL_W}{void CLIP}
		</SVG>
	);
};
