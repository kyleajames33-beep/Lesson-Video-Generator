// M6 C10 scenes 1 to 5: the more acidic solution, the weaker acid? (two meters); Ka is that number; worked example:
// the hydronium and strong or weak; the ICE table backwards; back to the hook.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {VINEGAR} from './assets';
import {
	AChip, Arrow, Card, DimG, EqLine, Fade, FullMeter, GCard, INK, INK_SOFT, IceRows, KaFrac, KeptChip, MistakeX, Note, OpGlow, Overlay, P, PicH, PROTON, PROTON_INK, Ring, SpanBracket, StepAfter,
	Sx, TEAL, TaskLine, Tick, WLine, countRead, eSpan, eq, fitSize, fullMeterW, kaFracW, meterBeaker, mw, picW, smooth,
} from './parts';
import type {EItem, IceR} from './parts';
import {Tray} from '../chem-m5-c10/parts';

// ---------- shared ----------
export const HX_EQ = (at: number): EItem[] => eq(['HX(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'X^{-}(aq)'], at, at);
const conc = (x: number, y: number, h: number) => meterBeaker(x, y, h);
/** A meter with its two coded label lines under its beaker. */
export const LabMeter: React.FC<{x: number; y: number; h: number; read: (f: number) => string; name: string; c: string; at: number; size?: number; pulse?: number}> = ({x, y, h, read, name, c, at, size = 32, pulse}) => {
	const mb = conc(x, y, h);
	return (
		<g>
			<FullMeter x={x} y={y} h={h} at={at} read={read} pulse={pulse} />
			<Sx x={mb.cx} y={mb.bottom + size * 1.4} text={name} size={size} color={INK} anchor="middle" weight={700} at={at} />
			<Sx x={mb.cx} y={mb.bottom + size * 2.75} text={c} size={size} color={INK} anchor="middle" weight={600} at={at} />
		</g>
	);
};

// ---------- 1. Hook ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {two: 'Two acids, two', hx: 'An unknown acid', r278: 'two point seven eight', eth: 'Ethanoic acid at', r252: 'two point five two', acidic: 'more acidic', stronger: 'the stronger acid', not: 'Not necessarily', ten: 'ten times more', fair: 'To compare strength'});
export const M1 = {h: 380, x1: 220, x2: 980, y: 260};
export const SceneHook: React.FC = () => {
	const {h, x1, x2, y} = M1;
	const r1 = countRead([{t0: K1.r278 - 20, t1: K1.r278 + 10, a: 7.0, b: 2.78}], 2, K1.hx + 20);
	const r2 = countRead([{t0: K1.r252 - 20, t1: K1.r252 + 10, a: 7.0, b: 2.52}], 2, K1.eth + 20);
	const b1 = conc(x1, y, h), b2 = conc(x2, y, h);
	const cy = b1.bottom + 32 * 2.75;
	const w1 = mw('0.0500 mol/L', 32, false, 600), w2 = mw('0.500 mol/L', 32, false, 600);
	const mw2 = fullMeterW(h);
	return (
		<>
			<Heading text="Which acid is stronger?" at={K1.not} size={60} />
			<Overlay>
				<LabMeter x={x1} y={y} h={h} read={r1} name="HX" c="0.0500 mol/L" at={K1.hx} pulse={K1.r278 + 10} />
				<LabMeter x={x2} y={y} h={h} read={r2} name="ethanoic acid" c="0.500 mol/L" at={K1.eth} pulse={K1.r252 + 10} />
				<Note x={x2 + mw2 + 24} y={y + 130} text="more acidic" size={38} color={PROTON_INK} at={K1.acidic} out={K1.ten} />
				<Ring cx={b1.cx} cy={cy - 9} rx={w1 / 2 + 22} ry={20} at={K1.ten} color="#d9a43a" seed={3} />
				<Ring cx={b2.cx} cy={cy - 9} rx={w2 / 2 + 22} ry={20} at={K1.ten + 6} color="#d9a43a" seed={5} />
				<SpanBracket x1={b1.cx} x2={b2.cx} y={cy + 34} text="10 ×" at={K1.ten + 14} color="#a97a14" size={36} />
				<MistakeX x={220} y={880} text="lower pH, so stronger acid?" at={K1.stronger} cross={K1.ten + 20} note="different concentrations: pH can't compare strength" size={36} />
				{void K1.two}{void K1.fair}{void picW}
			</Overlay>
		</>
	);
};

// ---------- 2. Ka is that number ----------
const S2 = 'ka-is-the-number';
const K2 = cues(sc(S2), {met: "You've met that", ka: 'K a, the equilibrium', hyd: 'hydronium times the', over: 'over the whole', change: "doesn't change with", same: 'the same concentration', e18: 'one point eight', dont: "But we don't", from: 'from the pH', ice: 'running the ICE'});
export const SmallMeters: React.FC<{at?: number; o?: number}> = ({at = -100, o = 1}) => {
	const h = 150;
	return (
		<g opacity={o}>
			<LabMeter x={1310} y={50} h={h} read={() => '2.78'} name="HX" c="0.0500 mol/L" at={at} size={22} />
			<LabMeter x={1600} y={50} h={h} read={() => '2.52'} name="ethanoic acid" c="0.500 mol/L" at={at} size={22} />
		</g>
	);
};
export const SceneKaNumber: React.FC = () => {
	const items = HX_EQ(K2.met + 10);
	const es = 44, SX = 96, SY = 330;
	const w2 = eSpan(items, 2, es, SX);
	const vh = 220;
	return (
		<Overlay>
			<SmallMeters />
			<DimG at={K2.e18} to={0.4}><EqLine items={items} x={SX} y={SY} size={es} /></DimG>
			<KaFrac x={SX} y={480} prefix="Ka =" num="[H_3O^{+}][X^{-}]" den="[HX]" size={52} at={K2.ka} numAt={K2.hyd} denAt={K2.over} />
			<Tray x={760} y={440} w={220} at={K2.over + 6} label="left out" items={[{t: 'H_2O', at: K2.over + 16, from: [w2.cx, SY - 14]}]} size={38} />
			<Note x={SX} y={250} text="Module 5" size={30} color={INK_SOFT} at={K2.met} out={K2.same} />
			<DimG at={K2.e18} to={0.45}><Note x={SX} y={655} text="Ka: same at any concentration (fixed temperature)" size={36} color={TEAL} at={K2.same} /></DimG>
			<PicH p={VINEGAR} x={SX} y={700} h={vh} o={prog(useCurrentFrame(), K2.e18, 14)} />
			<AChip x={SX + picW(VINEGAR, vh) + 30} y={790} text="ethanoic acid: Ka = 1.8 × 10^{−5} (25 °C)" size={36} color={TEAL} hand={false} at={K2.e18} />
			<AChip x={1160} y={460} text="HX: Ka = ?" size={44} color={INK} hand={false} at={K2.from} />
			<Arrow x1={1330} y1={450} x2={1390} y2={300} at={K2.from + 10} color={INK_SOFT} width={5} />
			{void K2.change}{void K2.dont}{void K2.ice}
		</Overlay>
	);
};

// ---------- worked example board ----------
export const WB = {card: {x: 1290, y: 84, w: 534, lh: 56, s: 31}, strip: {x: 330, y: 330}, ice: {x: 96, y: 390, rh: 76}};
export const TASK = 'Find Ka for HX';
export const stripG = (items: EItem[]) => {
	const s = Math.min(48, fitSize(items, 1300, 48));
	const cols = [0, 4, 6].map(i => eSpan(items, i, s, WB.strip.x).cx);
	const end = eSpan(items, items.length - 1, s, WB.strip.x).x2;
	return {s, cols, xR: Math.max(end + 40, 1500)};
};
export const HXCard: React.FC<{at?: [number, number]; markAt?: number; o?: number}> = ({at = [-100, -100], markAt, o = 1}) => (
	<g opacity={o}>
		<GCard x={WB.card.x} y={WB.card.y} w={WB.card.w} lh={WB.card.lh} size={WB.card.s} at={at[0] - 6} lines={[
			{t: 'HX: 0.0500 mol/L', at: at[0]},
			{t: 'pH = 2.78 (25 °C)', at: at[1], marks: markAt === undefined ? [] : [{sub: 'pH = 2.78', at: markAt}]},
		]} />
	</g>
);

// ---------- 3. Worked example: the hydronium, and strong or weak ----------
const S3 = 'we-hydronium';
const K3 = cues(sc(S3), {task: "Here's the task", find: 'find K a', first: 'First, the hydronium', neg: 'the negative log', ten: 'ten to the', r166: 'one point six six', keep: 'Keep those digits', three: 'three percent', weak: 'really is weak', strong: 'A strong acid', equal: 'equal to its'});
export const SceneWeHyd: React.FC = () => {
	const f = useCurrentFrame();
	const items = HX_EQ(K3.find + 10);
	const g = stripG(items);
	const BX = 230, BYY = 640, BW = 1000, BH = 34;
	const chunk = 0.0332 * BW;
	const over = smooth(prog(f, K3.equal, 18)) * (1 - prog(f, K3.equal + 50, 14));
	const gone = K3.equal + 66;
	return (
		<Overlay>
			<TaskLine text={TASK} at={K3.task} />
			<HXCard at={[K3.find + 20, K3.find + 30]} markAt={K3.ten - 4} />
			<StepAfter task={TASK} text="Step 1 of 2: [H_3O^{+}]" at={K3.first} />
			<DimG at={K3.ten} to={0.35}><EqLine items={items} x={WB.strip.x} y={WB.strip.y} size={g.s} /></DimG>
			<WLine x={96} y={470} size={46} dim={gone} items={P('[H_3O^{+}] = 10^{−2.78}', K3.ten, {t: '= 1.66 × 10^{−3} mol/L', color: TEAL}, K3.r166)} />
			<Note x={96} y={540} text="keep the digits; round at the end" size={34} color={INK_SOFT} at={K3.keep} out={K3.three} />
			<Fade at={K3.three - 4} out={gone}>
				<rect x={BX} y={BYY} width={BW} height={BH} rx={BH / 2} fill="#efe6d4" stroke={INK_SOFT} strokeWidth={3} />
				<Sx x={BX + BW} y={BYY - 16} text="c = 0.0500" size={32} color={INK} anchor="end" weight={700} at={-1000} />
				<rect x={BX} y={BYY - 6} width={chunk * smooth(prog(f, K3.three, 16))} height={BH + 12} rx={4} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} />
				<Sx x={BX} y={BYY + 84} text="1.66 × 10^{−3} ÷ 0.0500 = 3.3%" size={36} color={PROTON_INK} weight={700} at={K3.three + 10} />
				<Note x={BX + chunk + 16} y={BYY - 16} text="weak" size={36} color={PROTON_INK} at={K3.equal + 40} />
				{over > 0.01 ? (
					<g opacity={over}>
						<rect x={BX} y={BYY - 8} width={BW} height={BH + 16} rx={8} fill="none" stroke={PROTON} strokeWidth={4} strokeDasharray="12 8" />
						<Sx x={BX + BW / 2} y={BYY + 140} text="strong: [H_3O^{+}] = c" size={34} color={PROTON_INK} anchor="middle" weight={700} at={-1000} />
					</g>
				) : null}
			</Fade>
			<KeptChip x={1380} y={650} text="[H_3O^{+}] = 1.66 × 10^{−3} mol/L" at={gone} color={TEAL} size={34} />
			{void K3.neg}{void K3.weak}{void K3.strong}
		</Overlay>
	);
};

// ---------- 4. Worked example: the ICE table backwards ----------
const S4 = 'we-ice-backwards';
const K4 = cues(sc(S4), {now: 'Now the table', bottom: 'bottom row first', each: 'Each H X', one: 'one hydronium and', xm: 'so X minus', left: 'The acid left', r0483: 'zero point zero four eight three', so: 'So K a is', r57: 'five point seven', two: 'two significant figures', dp: 'two decimal places', measured: 'We measured the', nothing: 'nothing is approximated'});
export const SceneWeIce: React.FC = () => {
	const items = HX_EQ(-100);
	const g = stripG(items);
	const I = WB.ice;
	const h = '1.66 × 10^{−3}';
	const back = K4.xm + 36;
	const rows: IceR[] = [
		{cells: [{t: '0.0500', at: K4.now + 10}, {t: '0', at: K4.now + 10}, {t: '0', at: K4.now + 10}], dim: [K4.now + 12, 0.35]},
		{cells: [{t: '−' + h, at: back + 6, color: '#c4432f', size: 30}, {t: '+' + h, at: back, color: '#1f8a5b', size: 30}, {t: '+' + h, at: back + 3, color: '#1f8a5b', size: 30}], dim: [K4.r0483, 0.35]},
		{cells: [{t: '0.0500 − 0.00166', at: K4.left + 10, size: 32, swap: {t: '0.0483', at: K4.r0483}}, {t: h, at: K4.bottom + 20, size: 34}, {t: h, at: K4.xm + 16, size: 34}], lit: [K4.bottom, K4.measured + 60]},
	];
	const yE = I.y + 2.5 * I.rh, yC = I.y + 1.5 * I.rh;
	return (
		<Overlay>
			<TaskLine text={TASK} at={-100} />
			<StepAfter task={TASK} text="Step 2 of 2: Ka" at={6} />
			<DimG at={K4.r0483} to={0.35}><HXCard /></DimG>
			<OpGlow items={items} i={4} size={g.s} x={WB.strip.x} y={WB.strip.y} at={K4.one} len={36} color={PROTON} />
			<OpGlow items={items} i={6} size={g.s} x={WB.strip.x} y={WB.strip.y} at={K4.one + 6} len={36} color={PROTON} />
			<DimG at={10} to={0.4} undim={K4.one - 6}><DimG at={K4.xm + 10} to={0.4}><EqLine items={items} x={WB.strip.x} y={WB.strip.y} size={g.s} /></DimG></DimG>
			<IceRows x={I.x} xR={g.xR} y={I.y} rh={I.rh} cols={g.cols} rows={rows} at={K4.now} unit={{at: K4.now + 10}} />
			<KeptChip x={1380} y={650} text="[H_3O^{+}] = 1.66 × 10^{−3} mol/L" at={-100} out={K4.bottom + 20} color={TEAL} size={34} />
			<Fade at={back - 10} out={K4.r0483}>
				{[1, 2].map(j => <Arrow key={j} x1={g.cols[j] + 130} y1={yE - 14} x2={g.cols[j] + 130} y2={yC + 10} at={back - 10} color={TEAL} width={4} />)}
				<Note x={g.cols[2] + 160} y={(yE + yC) / 2 + 6} text="work backwards" size={30} color={TEAL} at={-1000} />
			</Fade>
			<WLine x={96} y={720} size={44} items={P('Ka = (1.66 × 10^{−3})^{2} / 0.0483', K4.so + 10, {t: '= 5.70 × 10^{−5} → 5.7 × 10^{−5}', color: TEAL}, K4.r57)} />
			<Note x={96} y={800} text="pH 2 d.p. → [H_3O^{+}] 2 s.f. → Ka 2 s.f." size={34} color={INK_SOFT} hand={false} at={K4.dp} out={K4.measured} />
			<Note x={96} y={800} text="measured [H_3O^{+}]: exact c − x, no 5% check" size={34} color={INK_SOFT} hand={false} at={K4.nothing} out={K4.nothing + 70} />
			<AChip x={1240} y={850} text="HX: Ka = 5.7 × 10^{−5}" size={44} color={TEAL} hand={false} at={K4.r57 + 40} />
			{void K4.each}{void K4.two}{void kaFracW}
		</Overlay>
	);
};

// ---------- 5. Back to the hook ----------
const S5 = 'hook-answer';
const K5 = cues(sc(S5), {so: 'So H X has', three: 'three times bigger', stronger: 'the stronger acid', dilute: 'more dilute', ph: 'pH describes one', ka: 'K a describes'});
export const SceneHookAnswer: React.FC = () => {
	const h = 200, x1 = 560, x2 = 1060, y = 120;
	const b1 = meterBeaker(x1, y, h);
	const c1 = mw('HX: Ka = 5.7 × 10^{−5}', 40, false, 700) + 56;
	const AX = 300, BX = 1000, CY = 520;
	return (
		<Overlay>
			<LabMeter x={x1} y={y} h={h} read={() => '2.78'} name="HX" c="0.0500 mol/L" at={-100} size={26} />
			<LabMeter x={x2} y={y} h={h} read={() => '2.52'} name="ethanoic acid" c="0.500 mol/L" at={-100} size={26} />
			<Ring cx={b1.cx} cy={b1.bottom + 26 * 2.75 - 9} rx={100} ry={24} at={K5.dilute} color="#d9a43a" seed={2} />
			<AChip x={AX} y={CY} text="HX: Ka = 5.7 × 10^{−5}" size={40} color={TEAL} hand={false} at={K5.three - 10} />
			<AChip x={BX} y={CY} text="ethanoic acid: Ka = 1.8 × 10^{−5}" size={40} color={INK} hand={false} at={K5.three - 4} />
			<SpanBracket x1={AX + c1 / 2} x2={BX + 260} y={CY - 16} text="about 3 ×" at={K5.three + 4} up color={TEAL} size={36} />
			<Tick x={AX + c1 + 40} y={CY + 30} at={K5.stronger} s={40} />
			<Card x={300} y={680} w={1320} h={210} at={K5.ph - 4} stroke={TEAL} sw={3.5} />
			<Sx x={340} y={765} text="pH: one solution (depends on Ka and c)." size={44} color={INK} weight={700} at={K5.ph} />
			<Sx x={340} y={845} text="Ka: the acid itself." size={44} color={TEAL} weight={800} at={K5.ka} />
			{void K5.so}
		</Overlay>
	);
};
