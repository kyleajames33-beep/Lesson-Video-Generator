// Y11 Chem WS V02 scenes 6 to 10: choosing equipment (the two balances with step rulers that count live, then the
// lidded crucible on its flame, the tongs lying on the heatproof mat), the risk board (risk table with painted controls
// and the example 3 by 3 matrix with a sliding marker), ethics (struck sink card, waste bottle, lab record with the odd
// reading kept), the trial run (one mass model: the balance reading, the % lost readout, water from the air and the
// blue tinge all read the same clock; then the desiccator) and the plan in one line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CRU_L, CRU_LID, CRU_LIDW, CRU_W, DESIC, GLASSES, MAT, TONGS, TRIAL, WASTE, pcLost, sc, trialGain, trialReading} from './common';
import {
	AMBER_S, AMBER_T, BalanceW, Bowl, Chip, CrossBox, DrawPath, Fade, Flame, GOLD_T, GREEN_S, GREEN_T, Heading, INK, Move, NAVY_T, PenArrow, PenRing, Plate, PlanBoard, RED_S, RED_T, RISK_C,
	ROSE_T, Readout, Rich, RiskMarker, RiskMatrix, SVG, SLATE_T, Steam, StrikeLine, Sx, TEAL_S, TEAL_T, Tag, TickMark, VIOLET_T, WATER_C, balW, bowlPt, cruGeo, plateMap, prog, smooth, vis,
} from './parts';
import type {PSec, RM, Seg} from './parts';
import {Water} from '../chem-y11-m2-v06/parts';
import {COOL_W, COOL_X, L, SUM, ln, sec} from './plan';
import {BAL_A, BAL_B, BalancePair, RulerFrames, compactSecs} from './s1';

const CBOARD = {x: 1380, y: 190, w: 444, h: 560};

// ---------- step ruler ----------
/** A bar for the whole 0.90 g loss divided into n steps (drawn live up to `shown`), one step shaded from `shade`. */
const Ruler: React.FC<{x: number; y: number; w: number; n: number; shown: number; shade?: number; color: string; o?: number}> = ({x, y, w, n, shown, shade, color, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.005) return null;
	const sw = w / n, h = 50, k = Math.min(n, Math.floor(shown + 1e-6));
	const sh = shade === undefined ? 0 : prog(f, shade, 10);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			{sh > 0.01 ? <rect x={x} y={y} width={sw} height={h} fill={color} opacity={0.45 * sh} /> : null}
			{Array.from({length: Math.max(0, k - 1)}, (_, i) => <line key={i} x1={x + (i + 1) * sw} x2={x + (i + 1) * sw} y1={y} y2={y + h} stroke={INK} strokeWidth={n > 30 ? 1.4 : 3} />)}
		</g>
	);
};

// ---------- 6. choosing equipment by what the measurement needs ----------
const K6 = cues(sc('equipment'), {fine: 'The nought point zero one gram', count: 'Count the steps', coarse: 'coarse balance', nine: 'nine steps', tenth: 'more than a tenth', finer: 'finer balance', ninety: 'ninety steps', percent: 'about one percent', choose: 'We choose', porcelain: 'porcelain crucible', flame: 'a direct flame', lid: 'A lid', ajar: 'slightly ajar', spit: 'crystals spitting', escapes: 'still escapes', tongs: 'And tongs', touch: 'too hot to touch'});
export const SceneEquipment: React.FC = () => {
	const f = useCurrentFrame();
	const B = K6.choose;
	const nC = 9 * smooth(prog(f, K6.coarse, K6.nine - K6.coarse + 10));
	const nF = 90 * smooth(prog(f, K6.finer, K6.ninety - K6.finer + 12));
	const rulersO = 1 - prog(f, B, 14);
	const g = cruGeo(CRU_LID, 120, 290, 470);
	const mm = plateMap(MAT, 470, 610, 290);
	const tm = plateMap(TONGS, 500, 662, 155);
	const secs = compactSecs([ln(L.eBal, K6.fine + 30), ln(L.eCru, K6.escapes), ln(L.eTongs, K6.touch)], K6.fine);
	return (
		<SVG>
			<Heading text="Choose equipment fine enough" at={-1000} />
			{/* phase A: the two balances and their step rulers */}
			<g opacity={1 - prog(f, B, 14)}>
				<Move keys={[[0, 0, 0, 1]]}>
					<BalancePair />
				</Move>
			</g>
			<Move keys={[[B, 0, 0, 1], [B + 26, 662, 74, 0.556]]} o={prog(f, -1000, 1)}>
				<g opacity={prog(f, B, 6)}>
					<BalanceW g={BAL_B} text="26.81 g" size={52} />
					<Bowl id="ws2e" p={CRU_LID} bx={BAL_B.pan[0]} by={BAL_B.pan[1]} rimW={190} />
				</g>
			</Move>
			<rect x={BAL_B.x - 18} y={BAL_B.y - 70} width={BAL_B.w + 36} height={BAL_B.h + 150} rx={22} fill="none" stroke={GREEN_S} strokeWidth={6} opacity={vis(f, K6.fine, B, 12)} />
			{f < B + 14 ? <TickMark x={BAL_B.x + BAL_B.w - 10} y={BAL_B.y - 40} at={K6.fine + 8} s={1.4} /> : null}
			<g opacity={rulersO}>
				<Chip x={900} y={98} segs={[{t: 'total loss ≈ 0.90 g'}]} at={-1000} size={44} color={INK} />
				<RulerFrames />
				{[{g: BAL_A, n: 9, shown: nC, at: K6.coarse, sh: K6.tenth, c: RED_S}, {g: BAL_B, n: 90, shown: nF, at: K6.finer, sh: K6.percent, c: GREEN_S}].map((r, i) => (
					<Fade key={i} at={K6.count + i * 6}>
						<Ruler x={r.g.x + 10} y={762} w={r.g.w - 20} n={r.n} shown={f < r.at ? 1 : r.shown} shade={r.sh} color={r.c} />
						<Sx x={r.g.x + 10} y={868} text={`${Math.round(f < r.at ? 1 : r.shown)} steps`} size={44} color={INK} weight={800} at={r.at} />
					</Fade>
				))}
				<Tag x={300} y={868} text="too coarse" at={K6.tenth} color={RED_T} />
				<Sx x={100} y={912} text="1 step > 10% of the answer" size={30} color={RED_T} weight={800} at={K6.tenth + 12} />
				<Tag x={920} y={868} text="fine enough" at={K6.percent} color={GREEN_T} />
				<Sx x={690} y={912} text="1 step ≈ 1%" size={30} color={GREEN_T} weight={800} at={K6.percent + 10} />
			</g>
			{/* phase B: the other materials, each with its reason */}
			<Fade at={B + 6}>
				<Plate p={CRU_LID} x={120} y={290} h={470} at={K6.porcelain - 12} dy={20} />
				<Flame x={g.axis} y={g.mouth} h={30} o={prog(f, K6.porcelain - 6, 12)} />
				<PenRing cx={g.axis} cy={g.mid + 4} rx={128} ry={70} at={K6.flame} color={INK} seed={3} />
				<Rich x={470} y={430} segs={[{t: 'porcelain: ', c: WARM}, {t: 'survives a direct flame'}]} size={34} at={K6.flame + 4} />
				<PenRing cx={g.axis} cy={g.Y(170)} rx={132} ry={44} at={K6.ajar} color={INK} seed={6} />
				<Steam x={g.gap[0] + 4} y={g.gap[1] - 8} from={K6.escapes - 10} n={2} spread={22} s={0.7} />
				<Rich x={470} y={330} segs={[{t: 'lid ajar: ', c: WARM}, {t: 'no spitting, steam escapes'}]} size={34} at={K6.spit} />
				<Plate p={MAT} x={470} y={610} h={290} at={K6.choose + 20} dy={16} />
				<Sx x={470} y={596} text="heatproof mat" size={30} color={INK} weight={700} at={K6.choose + 30} out={K6.tongs} />
				<Plate p={TONGS} x={500} y={662} h={155} at={K6.tongs} dy={24} />
				<PenRing cx={tm.X(960)} cy={tm.Y(440)} rx={250} ry={70} at={K6.touch} color={INK} seed={8} />
				<Rich x={mm.X(1401) + 20} y={724} segs={[{t: 'tongs: ', c: WARM}, {t: 'too hot'}]} size={34} at={K6.touch + 4} />
				<Rich x={mm.X(1401) + 20} y={768} segs={[{t: 'to touch'}]} size={34} at={K6.touch + 8} />
				<Sx x={mm.X(764)} y={938} text="tongs lying on a heatproof mat" size={30} color={INK} anchor="middle" weight={700} at={K6.tongs + 10} />
			</Fade>
			<PlanBoard {...CBOARD} secs={secs} />
			{void K6.nine}{void K6.ninety}{void K6.lid}{void Flame}
		</SVG>
	);
};
const WARM = '#a8421c';

// ---------- 7. assessing risks ----------
const K7 = cues(sc('risks'), {risks: 'the risks', hazard: 'A hazard', risk: 'Risk combines', control: 'a control is', hot: 'A hot crucible', burn: 'burn someone', likely: "That's likely", moderate: ['and moderate', 1], high: 'is high', tongs: 'Tongs,', mat: 'heatproof mat', cooling: 'cooling time', unlikely: 'burn unlikely', low: 'falls to low', over: 'Overheating', gases: 'irritating gases', gentle: "plan's gentle flame", hazard2: 'that hazard', eyes: 'copper sulfate irritates', glasses: 'safety glasses', lit: 'burner is lit'});
const COLS = [96, 336, 496, 656, 846, 986, 1260];
const HEAD = ['hazard', 'harm', 'likelihood', 'consequence', 'risk', 'control'];
const RMG: RM = {x: 1290, y: 290, lw: 150, cw: 128, ch: 120, th: 50};
const Cell: React.FC<{c: number; y: number; lines: string[]; at: number; color?: string; size?: number; hand?: boolean; out?: number}> = ({c, y, lines, at, color = INK, size, hand = false, out}) => (
	<>{lines.map((t, i) => { const sz = size ?? (c === 5 ? 30 : 34); return <Sx key={i} x={COLS[c] + 12} y={y + i * (sz + 8)} text={t} size={hand ? sz + 10 : sz} color={color} weight={hand ? 700 : 800} hand={hand} at={at + i * 4} out={out} />; })}</>
);
export const SceneRisks: React.FC = () => {
	const f = useCurrentFrame();
	const C1 = K7.eyes - 24; // row 1 collapses when row 3 needs the room
	const col = (lo: string) => RISK_C[lo].stroke;
	const r1y = 350, r1h = 236 * (1 - smooth(prog(f, C1, 18))) + 64 * smooth(prog(f, C1, 18));
	const r2y = r1y + r1h + 10, r3y = r2y + 130, r4y = r3y + 176;
	const rowLine = (y: number, at: number) => <line x1={COLS[0]} x2={COLS[6]} y1={y} y2={y} stroke="rgba(60,45,20,0.35)" strokeWidth={2} opacity={prog(f, at, 10)} />;
	
	const r1 = 1 - prog(f, C1, 12);
	const mv = smooth(prog(f, K7.hot - 18, 20));
	return (
		<SVG>
			<Heading text="Assessing risks" at={0} />
			{/* the three plain meanings: large in the empty table first, then parked in a strip as row 1 starts */}
			{[0, 1, 2].map(i => {
				const big = [150, 470 + i * 96], small = [[96, 238], [560, 238], [1180, 240]][i];
				const x = big[0] + (small[0] - big[0]) * mv, y = big[1] + (small[1] - big[1]) * mv, s = 1.35 + (1 - 1.35) * mv;
				return (
					<g key={i} transform={`translate(${x},${y}) scale(${s})`}>
						{i === 0 ? <Rich x={0} y={0} segs={[{t: 'hazard: ', c: RED_T}, {t: 'could cause harm'}]} size={34} at={K7.hazard} /> : null}
						{i === 1 ? <Rich x={0} y={0} segs={[{t: 'risk: ', c: AMBER_T}, {t: 'how likely, and how bad'}]} size={34} at={K7.risk} /> : null}
						{i === 2 ? <Tag x={0} y={0} text="control = lowers the risk" at={K7.control + 20} color={GREEN_T} /> : null}
					</g>
				);
			})}
			<Plate p={CRU_L} x={1000} y={370} h={360} at={-1000} out={K7.hot + 30} />
			{/* the risk table */}
			<rect x={COLS[0]} y={290} width={COLS[6] - COLS[0]} height={52} fill="#efe9de" stroke={INK} strokeWidth={2.5} />
			{HEAD.map((h, i) => <Sx key={h} x={COLS[i] + 12} y={326} text={h} size={28} color={INK} weight={800} at={-1000} />)}
			{/* row 1, full while it is the case, then a one-line chip */}
			<g opacity={r1}>
				<Cell c={0} y={r1y + 44} lines={['hot crucible', 'and triangle']} at={K7.hot} />
				<Cell c={1} y={r1y + 44} lines={['burn']} at={K7.burn} />
				<Cell c={2} y={r1y + 44} lines={['likely']} at={K7.likely} />
				<StrikeLine x1={COLS[2] + 8} y1={r1y + 34} x2={COLS[2] + 110} y2={r1y + 34} at={K7.unlikely} color={SLATE_T} width={5} />
				<Cell c={2} y={r1y + 90} lines={['unlikely']} at={K7.unlikely} color={GREEN_T} />
				<Cell c={3} y={r1y + 44} lines={['moderate']} at={K7.moderate} />
				<Cell c={4} y={r1y + 50} lines={['high']} at={K7.high} color={RED_T} hand />
				<StrikeLine x1={COLS[4] + 8} y1={r1y + 36} x2={COLS[4] + 90} y2={r1y + 36} at={K7.low} color={SLATE_T} width={5} />
				<Cell c={4} y={r1y + 104} lines={['low']} at={K7.low} color={GREEN_T} hand />
				<g opacity={prog(f, K7.mat - 4, 12)}>
					<Plate p={MAT} x={COLS[5] + 6} y={r1y + 12} h={150} />
				</g>
				<Plate p={TONGS} x={COLS[5] + 26} y={r1y + 40} h={76} at={K7.tongs} dy={14} />
				<Sx x={COLS[5] + 12} y={r1y + 206} text="+ cooling time" size={32} color={INK} weight={800} at={K7.cooling} />
			</g>
			<g opacity={prog(f, C1, 14)}>
				<Rich x={COLS[0] + 12} y={r1y + 42} segs={[{t: 'hot crucible: burn  |  tongs, mat, cooling time  →  risk '}, {t: 'low', c: GREEN_T}]} size={32} />
			</g>
			{rowLine(r1y + r1h + 4, K7.hot)}
			{/* row 2: overheating */}
			<Cell c={0} y={r2y + 40} lines={['overheating']} at={K7.over} />
			<Cell c={1} y={r2y + 40} lines={['irritating', 'gases']} at={K7.gases} />
			<Cell c={2} y={r2y + 40} lines={['possible']} at={K7.gases + 10} />
			<StrikeLine x1={COLS[2] + 8} y1={r2y + 30} x2={COLS[2] + 140} y2={r2y + 30} at={K7.hazard2} color={SLATE_T} width={5} />
			<Cell c={2} y={r2y + 86} lines={['unlikely']} at={K7.hazard2} color={GREEN_T} />
			<Cell c={3} y={r2y + 40} lines={['moderate']} at={K7.gases + 14} />
			<Cell c={4} y={r2y + 40} lines={['medium']} at={K7.gases + 18} color={AMBER_T} />
			<StrikeLine x1={COLS[4] + 8} y1={r2y + 30} x2={COLS[4] + 130} y2={r2y + 30} at={K7.hazard2} color={SLATE_T} width={5} />
			<Cell c={4} y={r2y + 86} lines={['low']} at={K7.hazard2} color={GREEN_T} />
			<Cell c={5} y={r2y + 40} lines={['gentle flame: removes', 'most of the hazard']} at={K7.gentle} />
			{rowLine(r3y - 4, K7.over)}
			{/* row 3: eyes */}
			<Cell c={0} y={r3y + 40} lines={['copper sulfate', 'in the eyes']} at={K7.eyes} />
			<Cell c={1} y={r3y + 40} lines={['irritation']} at={K7.eyes + 10} />
			<Cell c={2} y={r3y + 40} lines={['unlikely']} at={K7.glasses + 6} color={GREEN_T} />
			<Cell c={3} y={r3y + 40} lines={['moderate']} at={K7.eyes + 16} />
			<Cell c={4} y={r3y + 40} lines={['low']} at={K7.glasses + 10} color={GREEN_T} />
			<Plate p={GLASSES} x={COLS[5] + 12} y={r3y + 6} h={110} at={K7.glasses} dy={14} />
			<Sx x={COLS[5] + 12} y={r3y + 150} text="on before lighting" size={30} color={INK} weight={800} at={K7.glasses + 8} />
			{rowLine(r4y - 4, K7.eyes)}
			{/* row 4: on screen only */}
			<Cell c={0} y={r4y + 40} lines={['copper sulfate', 'swallowed']} at={K7.glasses + 20} />
			<Cell c={1} y={r4y + 40} lines={['harmful']} at={K7.glasses + 24} />
			<Cell c={4} y={r4y + 40} lines={['low']} at={K7.glasses + 30} color={GREEN_T} />
			<Cell c={5} y={r4y + 40} lines={['no food or drink;', 'wash hands']} at={K7.glasses + 28} />
			{/* the example matrix and its marker */}
			<RiskMatrix g={RMG} />
			<Sx x={RMG.x + RMG.lw + 1.5 * RMG.cw} y={RMG.y + RMG.th + 3 * RMG.ch + 44} text="example matrix: use your school's" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
			<Sx x={RMG.x + RMG.lw + 1.5 * RMG.cw} y={RMG.y + RMG.th + 3 * RMG.ch + 84} text="likelihood (rows) × consequence" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
			<RiskMarker g={RMG} keys={[[K7.high, 0, 1], [K7.low, 2, 1]]} at={K7.high} out={K7.over} color={fr => (fr < K7.low + 10 ? col('high') : col('low'))} />
			<PenArrow a={[RMG.x + RMG.lw + 1.5 * RMG.cw + 76, RMG.y + RMG.th + 0.5 * RMG.ch + 30]} b={[RMG.x + RMG.lw + 1.5 * RMG.cw + 76, RMG.y + RMG.th + 2.5 * RMG.ch - 30]} at={K7.low} out={K7.over} color={GREEN_S} bend={-0.2} />
			<RiskMarker g={RMG} keys={[[K7.gases + 18, 1, 1], [K7.hazard2, 2, 1]]} at={K7.gases + 18} out={K7.eyes} color={fr => (fr < K7.hazard2 + 10 ? col('medium') : col('low'))} />
			<Sx x={96} y={924} text="Your teacher approves the plan; follow your school's risk assessment." size={30} color={INK} weight={700} at={-1000} />
			{void K7.risks}{void AMBER_S}
		</SVG>
	);
};

// ---------- the board for scenes 8 and 9 ----------
const safeSecs = (lines: ReturnType<typeof ln>[], hi?: number): PSec[] => [
	sec('valid', [], {summary: SUM.valid, tick: true}),
	sec('reliable', [], {summary: SUM.reliable, tick: true}),
	sec('equipment', [], {summary: SUM.equipment, tick: true}),
	sec('safe', lines, {hiAt: hi}),
];

// ---------- 8. ethical issues ----------
const K8 = cues(sc('ethics'), {ethical: 'ethical issues', toxic: 'very toxic', rivers: 'rivers and the sea', white: 'the white powder', labelled: 'labelled waste container', never: 'never down the sink', using: 'Using just', small: 'waste small', every: 'every reading', odd: 'the odd ones', leaving: 'Leaving out', better: 'look better', is: 'than it is'});
export const SceneEthics: React.FC = () => {
	const f = useCurrentFrame();
	const wm = plateMap(WASTE, 440, 216, 404);
	const g = cruGeo(CRU_LIDW, 100, 216, 404);
	const LB = {x: 100, y: 740, w: 640, rh: 54};
	const rows: {t: string[]; odd?: boolean}[] = [{t: ['run 1', '6 min', '1.65 g']}, {t: ['run 2', '6 min', '1.84 g'], odd: true}, {t: ['run 3', '6 min', '1.66 g']}];
	const cx = [LB.x + 20, LB.x + 230, LB.x + 430];
	const secs = safeSecs([ln(L.sSafe, 8), ln(L.sWaste, K8.never + 10), ln(L.sSmall, K8.small), ln(L.sRecord, K8.odd)], K8.ethical);
	return (
		<SVG>
			<Heading text="Ethical issues" at={0} />
			<Plate p={CRU_LIDW} x={100} y={216} h={404} />
			<Sx x={g.axis} y={650} text="the white powder" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			{/* the sink, ruled out */}
			<Chip x={790} y={300} segs={[{t: 'down the sink'}]} at={K8.rivers - 6} size={44} color={INK} strike={K8.never} />
			<Tag x={800} y={440} text="toxic to water life" at={K8.toxic + 6} color={RED_T} />
			<Sx x={800} y={486} text="rivers and the sea" size={30} color={RED_T} weight={800} at={K8.rivers} />
			{/* the waste bottle */}
			<Plate p={WASTE} x={440} y={216} h={404} at={K8.labelled - 10} dy={20} />
			<Fade at={K8.labelled + 4}>
				<Sx x={wm.X(980)} y={wm.Y(1180)} text="copper" size={38} color={INK} anchor="middle" hand weight={700} at={-1000} />
				<Sx x={wm.X(980)} y={wm.Y(1180) + 40} text="waste" size={38} color={INK} anchor="middle" hand weight={700} at={-1000} />
			</Fade>
			<PenArrow a={[g.axis + 60, 270]} b={[wm.X(700), wm.Y(420)]} at={K8.labelled} color={TEAL_S} bend={-0.3} />
			<TickMark x={wm.X(1460)} y={wm.Y(330)} at={K8.labelled + 16} s={1.5} color={TEAL_S} />
			<Chip x={100} y={600 + 70} segs={[{t: '2.50 g per sample: small waste, still 90 steps'}]} at={K8.small - 10} size={34} color={INK} o={1} />
			{/* the lab record */}
			<Fade at={K8.every - 6}>
				<rect x={LB.x} y={LB.y + 26} width={LB.w} height={LB.rh * 3 + 8} rx={10} fill="#fffdf8" stroke={INK} strokeWidth={3} />
				<Sx x={LB.x} y={LB.y + 14} text="lab record (illustrative)" size={28} color={INK} weight={800} at={-1000} />
				{rows.map((r, i) => (
					<g key={i} opacity={prog(f, K8.every + i * 6, 10)}>
						{r.t.map((c, j) => <Sx key={j} x={cx[j]} y={LB.y + 74 + i * LB.rh} text={c} size={34} color={INK} weight={800} at={-1000} />)}
					</g>
				))}
			</Fade>
			<PenRing cx={LB.x + LB.w / 2} cy={LB.y + 62 + LB.rh} rx={LB.w / 2 + 12} ry={30} at={K8.odd} color={TEAL_S} seed={3} />
			<Tag x={LB.x + LB.w + 40} y={LB.y + 76 + LB.rh} text="kept" at={K8.odd + 8} color={TEAL_T} />
			<Chip x={800} y={736} segs={[{t: 'delete the odd result'}]} at={K8.leaving + 10} size={38} color={RED_T} strike={K8.is} />
			<Tag x={1000} y={840} text="never" at={K8.is + 6} color={RED_T} anchor="middle" />
			<PlanBoard x={1224} y={190} w={600} h={600} secs={secs} />
			{void K8.white}{void K8.using}{void K8.better}
		</SVG>
	);
};

// ---------- 9. new evidence from a trial run ----------
const K9 = cues(sc('trial-evidence'), {good: 'A good plan', trial: 'trial run', bench: 'open bench', balance: 'On the balance', crept: 'crept up', from: 'from one point', grams: 'four grams', tinge: 'faint blue tinge', appeared: 'appeared', taking: 'taking water back', air: 'from the air', small: 'too small', modify: 'we modify the plan', cools: 'The crucible cools', lid: 'its lid on', desic: 'a desiccator', sealed: 'a sealed jar', weighed: "it's weighed", cool: "as it's cool"});
const BAL9 = balW(100, 430, 560);
const NW = 12;
export const SceneTrial: React.FC = () => {
	const f = useCurrentFrame();
	const a = K9.crept + 6, b = K9.grams + 10;
	const gain = trialGain(f, a, b);
	const m = trialReading(gain), pc = pcLost(m);
	const rim = 260, [bx, by] = BAL9.pan;
	const [sx, sy] = bowlPt(bx, by, rim, 415, 232, 1.25);
	const tint = gain / TRIAL.gain;
	const late = K9.modify + 10;
	const secs: PSec[] = [
		sec('valid', [ln(L.vIvdv), ln(L.vCtrl1), ln(L.vCtrl2, -1000, {strike: K9.modify + 6, strikeX: COOL_X, strikeW: COOL_W}), ln(L.vRun), ln(L.vCool, K9.lid), ln([{t: 'weigh as soon as it is cool', c: GOLD_T}], K9.cool - 6)], {hiAt: K9.modify}),
		sec('reliable', [], {summary: SUM.reliable, tick: true}),
		sec('equipment', [], {summary: SUM.equipment, tick: true}),
		sec('safe', [], {summary: [{t: 'glasses, waste container, records'}], tick: true}),
	];
	return (
		<SVG>
			<Heading text="New evidence changes the plan" at={0} />
			<BalanceW g={BAL9} text={`${m.toFixed(2)} g`} size={56} />
			<Bowl id="ws2t" p={CRU_W} bx={bx} by={by} rimW={rim} cs={1.25}>
				<ellipse cx={sx} cy={sy + 6} rx={98} ry={16} fill={WATER_C} opacity={0.42 * tint} />
			</Bowl>
			<PenRing cx={sx} cy={sy + 6} rx={128} ry={34} at={K9.appeared} color={INK} seed={5} />
			{/* water molecules from the air settle as the mass rises (same clock as the reading) */}
			{Array.from({length: NW}, (_, i) => {
				const land = a + ((b - a) * (i + 0.6)) / NW;
				const t = (f - (land - 70)) / 70;
				if (t < 0) return null;
				const u = Math.min(1, t);
				const x0 = sx - 150 + ((i * 97) % 300), x1 = sx - 80 + ((i * 53) % 160);
				const x = x0 + (x1 - x0) * u + Math.sin(f * 0.12 + i) * 8 * (1 - u);
				const y = 236 + (sy + 2 - 236) * u * u;
				const o = (u < 1 ? 1 : 1 - prog(f, land + 30, 20)) * (1 - prog(f, late + 40, 14));
				return o > 0.01 ? <Water key={i} x={x} y={y} r={9} o={o} /> : null;
			})}
			<Tag x={100} y={212} text="water from the air" at={K9.taking} out={late + 40} color={NAVY_T} />
			{/* the trial-run readouts */}
			<Tag x={720} y={460} text="trial run" at={K9.trial} out={late + 20} color={INK} />
			<Sx x={720} y={500} text="illustrative data" size={30} color={INK} weight={700} at={K9.trial} out={late + 20} />
			<Sx x={1020} y={252} text="% mass" size={30} color={INK} weight={700} at={-1000} />
			<Sx x={1020} y={288} text="lost" size={30} color={INK} weight={700} at={-1000} />
			<Readout x={720} y={220} w={260} text={`${pc.toFixed(1)}%`} size={52} anchor="middle" />
			<PenRing cx={850} cy={259} rx={152} ry={50} at={K9.small} color={ROSE_T} seed={7} />
			<Tag x={720} y={548} text="getting heavier" at={K9.crept} out={late + 20} color={ROSE_T} />
			<PenArrow a={[710, 556]} b={[BAL9.disp[0] + 120, BAL9.disp[1] - 26]} at={K9.crept + 6} out={late + 20} color={ROSE_T} bend={0.3} />
			<Rich x={100} y={904} segs={[{t: '(2.50 − 1.64) ÷ 2.50 = '}, {t: '34.4%', c: ROSE_T}, {t: ', not 36.0%'}]} size={44} at={K9.small - 6} />
			{/* the same model, traced against time on the bench (fades as the desiccator arrives) */}
			<Fade at={K9.bench - 10} out={K9.desic - 20}>
				{(() => {
					const X0 = 800, X1 = 1110, Y0 = 800, Y1 = 610, T0 = K9.bench, T1 = K9.small;
					const yv = (m: number) => Y0 - ((m - 1.58) / 0.08) * (Y0 - Y1);
					let d = '';
					const tEnd = Math.min(f, T1);
					for (let t = T0; t <= tEnd; t += 4) d += `${t === T0 ? 'M' : 'L'}${(X0 + ((t - T0) / (T1 - T0)) * (X1 - X0)).toFixed(1)},${yv(trialReading(trialGain(t, a, b))).toFixed(1)} `;
					return (
						<g>
							<line x1={X0} x2={X1 + 10} y1={Y0} y2={Y0} stroke={INK} strokeWidth={4} strokeLinecap="round" />
							<line x1={X0} x2={X0} y1={Y0} y2={Y1 - 16} stroke={INK} strokeWidth={4} strokeLinecap="round" />
							{[1.6, 1.64].map(m => <g key={m}><line x1={X0 - 8} x2={X1} y1={yv(m)} y2={yv(m)} stroke="rgba(60,45,20,0.25)" strokeWidth={2} strokeDasharray="6 6" /><Sx x={X0 - 12} y={yv(m) + 10} text={m.toFixed(2)} size={28} color={INK} anchor="end" weight={700} at={-1000} /></g>)}
							<Sx x={X0} y={Y1 - 26} text="mass on the open bench (g)" size={28} color={INK} weight={700} at={-1000} />
							<Sx x={(X0 + X1) / 2} y={Y0 + 34} text="time cooling →" size={28} color={INK} anchor="middle" weight={700} at={-1000} />
							{d ? <path d={d} fill="none" stroke={ROSE_T} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" /> : null}
						</g>
					);
				})()}
			</Fade>
			{/* the modification: cool with the lid on in a desiccator */}
			<Rich x={720} y={340} segs={[{t: 'desiccator: ', c: TEAL_T}, {t: 'a sealed jar'}]} size={34} at={K9.sealed} />
			<Rich x={720} y={380} segs={[{t: 'that keeps the air dry'}]} size={34} at={K9.sealed + 8} />
			<Plate p={DESIC} x={740} y={450} h={400} at={K9.desic - 8} dy={20} />
			<Tag x={720} y={430} text="dry air inside" at={K9.sealed + 30} color={TEAL_T} />
			<PlanBoard x={1160} y={190} w={664} h={680} secs={secs} />
			{void K9.good}{void K9.bench}{void K9.balance}{void K9.from}{void K9.air}{void K9.cools}{void K9.weighed}{void CRU_LID}{void DrawPath}
		</SVG>
	);
};

// ---------- 10. the plan in one line ----------
const K10 = cues(sc('plan-line'), {here: "here's the plan", change: 'Change one', measure: 'measure one', control: 'control the rest', repeat: 'repeat the whole', choose: 'choose equipment', lower: 'lower every risk', record: 'record honestly', turns: 'turns a question', use: 'can use'});
export const FULL = {
	valid: [L.vIvdv, L.vCtrl1, [{t: 'small blue flame; '}, {t: 'cool in a desiccator', c: GOLD_T}] as Seg[], L.vRun],
	reliable: [L.rGloss, L.rRuns],
	equipment: [[{t: '0.01 g balance; porcelain crucible, lid ajar;'}] as Seg[], [{t: 'pipeclay triangle; tongs; desiccator'}] as Seg[]],
	safe: [[{t: 'glasses; tongs and mat; gentle flame;'}] as Seg[], [{t: 'waste container, not the sink;'}] as Seg[], [{t: 'small quantities; record every reading'}] as Seg[]],
};
export const fullSecs = (hi: Partial<Record<'valid' | 'reliable' | 'equipment' | 'safe', [number, number]>> = {}): PSec[] => (['valid', 'reliable', 'equipment', 'safe'] as const).map(k => sec(k, FULL[k].map(s => ln(s)), {hiAt: hi[k]?.[0], hiOut: hi[k]?.[1]}));
export const MEMORY: Seg[] = [{t: 'Change one, ', c: NAVY_T}, {t: 'measure one, ', c: INK}, {t: 'control the rest, ', c: GOLD_T}, {t: 'and repeat the whole thing.', c: VIOLET_T}];
export const ScenePlanLine: React.FC = () => {
	const f = useCurrentFrame();
	const segAt = [K10.change, K10.measure, K10.control, K10.repeat];
	const pulse = 1 + 0.04 * Math.sin(Math.PI * Math.min(1, prog(f, K10.use, 24)));
	return (
		<SVG>
			<Heading text="The plan in one line" at={0} />
			<g transform={`translate(960,250) scale(${pulse}) translate(-960,-250)`}>
				<rect x={110} y={186} width={1700} height={128} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
				<Sx x={140} y={226} text="memory aid" size={30} color={INK} hand at={-1000} />
				<Rich x={960} y={290} segs={MEMORY.map((s, i) => ({...s, at: segAt[i]}))} size={50} hand weight={700} anchor="middle" />
			</g>
			<PlanBoard x={110} y={340} w={1700} h={560} cols={2} size={40} tsize={46} lh={54} secs={fullSecs({valid: [K10.change, K10.repeat - 4], reliable: [K10.repeat, K10.choose - 4], equipment: [K10.choose, K10.lower - 4], safe: [K10.lower, K10.turns]})} />
			{void K10.here}{void K10.record}{void f}{void RED_S}{void CrossBox}
		</SVG>
	);
};
void VIOLET_T; void SLATE_T; void StrikeLine; void GREEN_T;
