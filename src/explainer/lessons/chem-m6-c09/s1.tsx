// M6 C09 scenes 1 to 5: weak acid, less heat? (cups and the Delta H bars); what is the same and what is different
// (two lenses); the weak acid still reacts completely (hydroxide removes hydronium, more molecules ionise); two steps,
// one total (the staircase); why the ionising step can go either way (the energy ledger and a close-up).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {CAL_G, VINEGAR} from './assets';
import {
	AChip, CalCup, ClTok, Counter, DHBars, DimG, EOUT_INK, EqLine, EIN, EIN_INK, Fade, H3O, HA, HTok, INK, INK_SOFT, IonSite, LensFrame, Ledger, CloseUp, MistakeX, Note, OHMeet, Overlay, PicH,
	Ring, Staircase, Sx, TEAL, TempChip, WLine, P, calPt, calW, dhBarX, eq, fitSize, mw, picW, stairGeom, vis,
} from './parts';
import type {TL} from './parts';

const LENS_BG = '#eef6fb';
export const CROSS_RED = '#c4432f';

// ---------- 1. Hook: weak acid, less heat? ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {mix: 'Mix one mole', m57: 'minus fifty seven', eth: 'ethanoic acid, a', predict: 'Most people predict', m56: 'minus fifty six', hf: 'And hydrofluoric acid', m68: 'minus sixty eight', more: 'more heat, not', so: 'So what really'});
/** Strike through part of the handwritten heading (Heading is HTML at left 96, top 92). */
export const HeadStrike: React.FC<{full: string; part: string; size: number; at: number}> = ({full, part, size, at}) => {
	const i = full.indexOf(part);
	const x1 = 96 + mw(full.slice(0, i), size, true), x2 = 96 + mw(full.slice(0, i + part.length), size, true);
	const y = 92 + size * 0.62;
	return <DrawPath d={`M${x1 - 6},${y + 4} L${x2 + 6},${y - 4}`} at={at} dur={12} color={CROSS_RED} width={7} />;
};
export const SceneHook: React.FC = () => {
	const CH = 420, CY = 330, X1 = 150, X2 = 540;
	const cw = calW(CH);
	const p1 = calPt(X1, CY, CH, CAL_G.probe), p2 = calPt(X2, CY, CH, CAL_G.probe);
	const BX = 1060, BY = 330, BK = 7.5, BW = 110, BG = 90;
	const ex = dhBarX(BX, 1, BW, BG);
	const predH = 22 * BK;
	return (
		<>
			<Heading text="Weak acid. Less heat?" at={K1.so} size={60} />
			<Overlay>
				<HeadStrike full="Weak acid. Less heat?" part="Less heat?" size={60} at={K1.so + 46} />
				<DimG at={K1.hf} to={0.3}>
					<CalCup x={X1} y={CY} h={CH} />
					<CalCup x={X2} y={CY} h={CH} />
					<TempChip x={p1[0] + 18} y={p1[1] - 8} from={21.0} to={27.8} at={K1.mix} rise={K1.m57} dur={40} />
					<Sx x={p1[0] + 18} y={p1[1] + 90} text="ΔT 6.8 °C" size={28} color={INK} weight={700} at={K1.m57 + 40} />
					<TempChip x={p2[0] + 18} y={p2[1] - 8} from={21.0} to={27.7} at={K1.eth} rise={K1.m56} dur={40} />
					<Sx x={p2[0] + 18} y={p2[1] + 90} text="ΔT 6.7 °C" size={28} color={INK} weight={700} at={K1.m56 + 40} />
					<Sx x={X1 + cw / 2} y={CY + CH + 52} text="HCl + NaOH" size={32} color={INK} anchor="middle" weight={700} at={K1.mix} />
					<Sx x={X2 + cw / 2} y={CY + CH + 52} text="ethanoic acid + NaOH" size={32} color={INK} anchor="middle" weight={700} at={K1.eth} />
					<Sx x={(X1 + X2 + cw) / 2} y={CY + CH + 100} text="1.00 mol/L, 50.0 mL + 50.0 mL" size={28} color={INK_SOFT} anchor="middle" weight={600} at={K1.mix + 20} />
				</DimG>
				<DHBars x={BX} y={BY} k={BK} bw={BW} gap={BG} at={K1.m57 - 10} ref={K1.m57 + 30} bars={[
					{name: 'HCl', v: -57, at: K1.m57, label: '−57', color: TEAL},
					{name: '', v: -56, at: K1.m56 + 10, label: 'about −56', color: '#d9a43a'},
					{name: 'HF', v: -68, at: K1.hf + 10, label: 'about −68', color: '#8f6bb8', tag: {t: 'careful lab data;', at: K1.hf + 30, out: K1.so}},
				]} />
				<Sx x={dhBarX(BX, 2, BW, BG) + BW / 2} y={BY + 68 * BK + 116} text="never used in school" size={24} color={INK_SOFT} anchor="middle" weight={600} at={K1.hf + 30} out={K1.so} />
				<Sx x={ex + BW / 2} y={BY - 18} text="ethanoic acid" size={30} color={INK} anchor="middle" weight={700} at={K1.eth} />
				{/* the prediction bar: short, grey, then crossed */}
				<Fade at={K1.predict} out={K1.m56 + 40}>
					<rect x={ex} y={BY} width={BW} height={predH} rx={10} fill="#e8e2d6" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
					<Sx x={ex + BW / 2} y={BY + predH + 46} text="?" size={46} color={INK_SOFT} anchor="middle" weight={800} at={K1.predict + 6} />
					<Note x={ex + BW / 2} y={BY + predH + 90} text="prediction" size={28} color={INK_SOFT} anchor="middle" at={K1.predict + 10} />
					<DrawPath d={`M${ex - 10},${BY + 10} L${ex + BW + 10},${BY + predH - 4}`} at={K1.m56 - 6} dur={8} color={CROSS_RED} width={6} />
					<DrawPath d={`M${ex + BW + 10},${BY + 10} L${ex - 10},${BY + predH - 4}`} at={K1.m56} dur={8} color={CROSS_RED} width={6} />
				</Fade>
				{void K1.m68}{void K1.more}{void picW}
			</Overlay>
		</>
	);
};

// ---------- 2. What is the same, what is different ----------
const S2 = 'same-different';
const K2 = cues(sc(S2), {start: 'Start with what', video: 'neutralisation heat video', join: 'hydrogen ion joining', weak: 'A weak acid is', whole: 'still whole', so: 'So the hydrogen'});
const HCL_H: [number, number][] = [[-0.45, -0.4], [0.35, -0.5], [0.5, 0.25], [-0.25, 0.45]];
const HCL_C: [number, number][] = [[0.05, -0.05], [-0.62, 0.1], [0.05, 0.7], [0.68, -0.15]];
export const ETH_SITES: [number, number, number][] = [[-0.5, -0.45, -0.6], [0.05, -0.62, 0.4], [0.55, -0.35, -1.2], [-0.62, 0.1, 2.2], [-0.1, -0.1, -0.4], [0.45, 0.15, 1.0], [-0.42, 0.55, -2.4], [0.12, 0.5, 0.2], [0.62, 0.55, -0.9]];
export const SceneSameDiff: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 470, cy: 590, r: 250}, R = {cx: 1290, cy: 590, r: 250};
	const U = (C: typeof L, u: number, v: number): [number, number] => [C.cx + u * C.r, C.cy + v * C.r];
	const items = eq(['H^{+}(aq)', '+', 'OH^{-}(aq)', '->', 'H_2O(l)'], K2.join);
	const es = fitSize(items, 560, 42);
	const vh = picW(VINEGAR, 250);
	const meetAt = K2.join;
	const w = (i: number) => [Math.sin(f * 0.03 + i * 1.7) * 5, Math.cos(f * 0.027 + i * 2.3) * 5];
	return (
		<Overlay>
			<EqLine items={items} x={210} y={250} size={es} />
			<Note x={210 + 600} y={250} text="about −57 kJ/mol" size={32} color={TEAL} at={K2.join + 30} out={K2.weak} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K2.video} title="HCl(aq)" titleAt={K2.video}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
				{HCL_C.map(([u, v], i) => { const [x, y] = U(L, u, v); const [dx, dy] = w(i); return <ClTok key={'c' + i} x={x + dx} y={y + dy} s={1.3} grey={1} />; })}
				{HCL_H.map(([u, v], i) => { const [x, y] = U(L, u, v); const [dx, dy] = w(i + 5); return i === 0 && f >= meetAt + 26 ? null : <HTok key={'h' + i} x={x + dx} y={y + dy} s={1.3} />; })}
				<OHMeet from={[L.cx - L.r - 20, L.cy - 0.4 * L.r]} to={U(L, HCL_H[0][0], HCL_H[0][1])} at={meetAt} s={1.4} />
			</LensFrame>
			<LensFrame cx={R.cx} cy={R.cy} r={R.r} at={K2.weak - 10} title="ethanoic acid(aq)" titleAt={K2.weak - 10}>
				<rect x={R.cx - R.r} y={R.cy - R.r} width={2 * R.r} height={2 * R.r} fill={LENS_BG} />
				{ETH_SITES.map(([u, v, a], i) => { const [x, y] = U(R, u, v); const [dx, dy] = w(i + 9); return i === 4 ? <H3O key={i} x={x + dx} y={y + dy} s={1.6} /> : <HA key={i} x={x + dx} y={y + dy} s={1.6} a={a} />; })}
			</LensFrame>
			<Ring cx={R.cx - 0.15 * R.r} cy={R.cy - 0.42 * R.r} rx={0.62 * R.r} ry={0.3 * R.r} at={K2.whole} color="#d9a43a" seed={6} />
			<Note x={R.cx} y={R.cy + R.r + 96} text="protons still attached" size={34} color="#a97a14" anchor="middle" at={K2.whole + 8} />
			<PicH p={VINEGAR} x={1640} y={440} h={250} />
			<Fade at={K2.weak}>
				<Sx x={1640 + vh / 2} y={730} text="ethanoic" size={26} color={INK} anchor="middle" weight={700} at={-1000} />
				<Sx x={1640 + vh / 2} y={764} text="(acetic) acid" size={26} color={INK} anchor="middle" weight={700} at={-1000} />
			</Fade>
			{void K2.start}{void K2.so}
		</Overlay>
	);
};

// ---------- 3. The weak acid still reacts completely ----------
const S3 = 'reacts-completely';
const K3 = cues(sc(S3), {arrives: 'hydroxide arrives', grabs: 'It grabs the', disturbs: 'That disturbs the', ionise: 'ionise to replace', too: 'grabs those too', every: 'every molecule has', most: 'So most of', inc: 'react incompletely', extra: 'one extra step'});
export const SceneReacts: React.FC = () => {
	const f = useCurrentFrame();
	const L = {cx: 700, cy: 600, r: 300};
	const U = (u: number, v: number): [number, number] => [L.cx + u * L.r, L.cy + v * L.r];
	const n = ETH_SITES.length;
	const order = [1, 5, 0, 7, 2, 6, 3, 8];
	const span = (K3.every - 18) - K3.ionise;
	const ionAt = (i: number) => (i === 4 ? -100 : K3.ionise + (order.indexOf(i) / (order.length - 1)) * span);
	const meetAt = (i: number) => (i === 4 ? K3.grabs + 26 : ionAt(i) + 52);
	const left = ETH_SITES.filter((_, i) => i !== 4 && f < ionAt(i)).length;
	const items = eq(['CH_3COOH(aq)', '+', 'OH^{-}(aq)', '->', 'CH_3COO^{-}(aq)', '+', 'H_2O(l)'], K3.every + 30);
	return (
		<Overlay>
			<EqLine items={items} x={150} y={210} size={fitSize(items, 1500, 44)} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={0}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill={LENS_BG} />
				{ETH_SITES.map(([u, v, a], i) => { const [x, y] = U(u * 0.92, v * 0.92); return <IonSite key={i} x={x} y={y} ion={ionAt(i)} meet={meetAt(i)} from={[L.cx - L.r - 30, y]} s={1.7} ang={a} />; })}
			</LensFrame>
			<Counter x={L.cx} y={L.cy + L.r + 18} text={`whole molecules left: ${left}`} at={K3.arrives} size={32} color={left === 0 ? TEAL : INK} />
			<Fade at={K3.ionise} out={K3.every + 10}>
				<Sx x={1080} y={470} text="⇌" size={64} color={TEAL} weight={800} at={-1000} />
				<Note x={1160} y={466} text="shifts right" size={40} color={TEAL} at={-1000} />
			</Fade>
			<Note x={1080} y={560} text="OH^{-} removes H_3O^{+}" size={34} color={INK_SOFT} at={K3.grabs} out={K3.ionise} />
			<MistakeX x={1080} y={700} text="weak acid reacts incompletely" at={K3.inc} cross={K3.extra} note="it all reacts: one extra step first" size={34} />
			{void K3.disturbs}{void K3.too}{void K3.most}{void n}{void vis}
		</Overlay>
	);
};

// ---------- 4. Two steps, one total ----------
const S4 = 'two-steps';
const K4 = cues(sc(S4), {hess: "using Hess's law", route: "the total doesn't", ionises: 'acid ionises', m57: 'minus fifty seven', sum: 'is the sum', plus: 'plus the ionisation', whole: 'So the whole', measured: 'measured value, take'});
export const STAIR = {x: 560, y: 330, k: 6.4, w: 1000};
export const LV_A: (at: number) => TL[] = at => [{t: 'HA(aq) + OH^{-}(aq)', at}];
export const LV_B: (at: number) => TL[] = at => [{t: 'H^{+}(aq) + A^{-}(aq) + OH^{-}(aq)', at}];
export const LV_C: (at: number) => TL[] = at => [{t: 'A^{-}(aq) + H_2O(l)', at}];
export const SceneTwoSteps: React.FC = () => {
	const S = STAIR;
	const g = stairGeom(S.x, S.y, S.k, S.w, -9);
	return (
		<Overlay>
			<Note x={96} y={230} text="Hess's law: add the steps" size={36} color={INK_SOFT} at={K4.hess} out={K4.measured} />
			<Staircase x={S.x} y={S.y} k={S.k} w={S.w} at={K4.route} s1={() => null} s1At={K4.ionises} s2At={K4.m57} netAt={K4.plus} pulse1={K4.measured + 10}
				lvA={LV_A(K4.route + 6)} lvB={LV_B(K4.ionises + 8)} lvC={LV_C(K4.m57 + 10)} s1L={[{t: 'step 1: ionisation', at: K4.ionises + 14}]} s2L={[{t: 'step 2: −57 kJ/mol', at: K4.m57 + 8}]} />
			<Sx x={g.x2 + 26} y={(g.yB + g.yC) / 2 + 48} text="(same as a strong acid)" size={26} color={EOUT_INK} weight={600} at={K4.m57 + 24} />
			<WLine x={300} y={880} size={40} dim={K4.measured} items={P('ΔH(neutralisation) = ΔH(step 1) + (−57) kJ/mol', K4.plus + 10)} />
			<WLine x={300} y={960} size={40} items={P('ΔH(step 1) = ΔH(measured) − (−57) kJ/mol', K4.measured + 6)} />
			{void K4.sum}{void K4.whole}
		</Overlay>
	);
};

// ---------- 5. Why the ionising step can go either way ----------
const S5 = 'ionising-either-way';
const K5 = cues(sc(S5), {uphill: "isn't always uphill", takes: 'takes energy in', surr: 'surrounded by water', hydr: 'just like hydration', balance: 'the balance of', pos: 'be positive', zero: 'close to zero', neg: 'or negative'});
/** The small staircase parked top right (dim). */
export const StairThumb: React.FC<{at: number; out?: number; s1?: number; o?: number}> = ({at, out, s1 = 0, o = 0.35}) => (
	<Staircase x={1460} y={150} k={2.2} w={360} at={at} out={out} o={o} s1={() => s1} s1At={-100} s2At={-100} netAt={-100} lvA={[]} lvB={[]} lvC={[]} />
);
export const Chips3: React.FC<{x: number; y: number; at: number; lit?: {i: number; at: number; out?: number}[]; o?: number}> = ({x, y, at, lit = [], o = 1}) => {
	const f = useCurrentFrame();
	const T = ['+', '≈ 0', '−'];
	return (
		<g opacity={o}>
			{T.map((t, i) => {
				const l = lit.filter(q => q.i === i).reduce((a, q) => Math.max(a, vis(f, q.at, q.out, 12)), 0);
				const col = i === 0 ? EIN_INK : i === 2 ? EOUT_INK : TEAL;
				return (
					<g key={i}>
						{l > 0.01 ? <rect x={x + i * 150 - 8} y={y - 8} width={128} height={70} rx={35} fill="#f6d77a" opacity={0.55 * l} /> : null}
						<AChip x={x + i * 150} y={y} text={t} size={34} color={col} hand={false} at={at + i * 8} />
					</g>
				);
			})}
		</g>
	);
};
export const SceneEitherWay: React.FC = () => {
	const f = useCurrentFrame();
	const LX = 820, LY = 560;
	const up = (q: number) => 220 * prog(q, K5.takes + 6, 30);
	const down = (q: number) => 190 * prog(q, K5.surr + 10, 30);
	void f;
	return (
		<Overlay>
			<StairThumb at={0} />
			<CloseUp cx={400} cy={540} brk={K5.takes} wrap={K5.surr} at={0} />
			<Note x={400} y={790} text="Module 5: hydration" size={32} color={INK_SOFT} anchor="middle" at={K5.hydr} out={K5.balance} />
			<Ledger x={LX} y={LY} up={up} down={down} at={4} inL={{t: 'energy in: bond breaks', at: K5.takes + 12}} outL={{t: 'energy out: water surrounds the ions', at: K5.surr + 16}} />
			<WLine x={LX - 40} y={880} size={42} items={P('step 1 = in + out', K5.balance)} />
			<Chips3 x={LX - 40} y={920} at={K5.pos} lit={[{i: 0, at: K5.pos, out: K5.zero}, {i: 1, at: K5.zero, out: K5.neg}, {i: 2, at: K5.neg, out: K5.neg + 60}]} />
			{void K5.uphill}{void EIN}
		</Overlay>
	);
};
void INK;
