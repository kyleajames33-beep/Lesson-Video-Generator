// M6 C11 scenes 1 to 6: two beakers, one splash (water against the buffer); what the mixture holds (the lens and the
// ratio bar); added acid meets the conjugate base; added base meets the weak acid; the buffer's pH from Ka and the
// ratio; worked example: the pH after the acid.
import React from 'react';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {
	AChip, ACID_INK, BASE_INK, BLens, BUF, DimG, EqLine, Fade, GCard, GradPip, INK, INK_SOFT, KaFrac, KeptChip, LensFrame, LiquidBeaker, Note, OpGlow, Overlay, P, PairBracket, RatioBar,
	StepAfter, Sx, TaskLine, WATER_INK, WLine, countRead, eSpan, eq, fitSize, meterBeaker, mw, picW,
} from './parts';
import type {BSite, EItem} from './parts';
import {LabMeter} from '../chem-m6-c10/s1';
import {BEAKER} from './assets';

// ---------- shared geometry ----------
const PTS: [number, number][] = [
	[-0.55, -0.5], [-0.12, -0.66], [0.32, -0.6], [0.68, -0.28],
	[-0.75, -0.1], [-0.32, -0.22], [0.1, -0.25], [0.5, 0.02],
	[-0.55, 0.3], [-0.12, 0.18], [0.28, 0.3], [0.7, 0.38],
	[-0.3, 0.62], [0.1, 0.62], [0.45, 0.66], [-0.68, 0.52],
];
const ANG = [-0.6, 0.4, -1.2, 2.2, -0.4, 1.0, -2.4, 0.2, 2.6, -0.9, 0.7, -1.8, 1.6, -0.2, 0.9, -2.0];
const HA_I = [0, 2, 4, 6, 8, 10, 12, 14];
const AN_I = [1, 3, 5, 7, 9, 11, 13];
const NA_P: [number, number][] = [[0.12, -0.45], [-0.55, 0.08], [0.3, 0.12], [-0.32, 0.42], [0.52, 0.52], [0.84, -0.05]];
/** The buffer lens sites: acid molecules, ethanoate ions (from `anAt`), Na+ spectators. Extra fields per index. */
export const bufferSites = (anAt: number, extra: Record<number, Partial<BSite>> = {}, naAt = anAt): BSite[] => [
	...HA_I.map(i => ({u: PTS[i][0], v: PTS[i][1], a: ANG[i], kind: 'HA' as const, ...(extra[i] ?? {})})),
	...AN_I.map((i, k) => ({u: PTS[i][0], v: PTS[i][1], kind: 'An' as const, at: anAt + k * 6, ...(extra[i] ?? {})})),
	...NA_P.map(([u, v], k) => ({u, v, kind: 'Na' as const, at: naAt + 8 + k * 6})),
];
export const STRIP = (at: number | number[], rev?: number): EItem[] => eq(['CH_3COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_3COO^{-}(aq)'], at, rev);
export const ACID_EQ = (at: number): EItem[] => eq(['CH_3COO^{-}(aq)', '+', 'H_3O^{+}(aq)', '->', 'CH_3COOH(aq)', '+', 'H_2O(l)'], at);
export const BASE_EQ = (at: number): EItem[] => eq(['CH_3COOH(aq)', '+', 'OH^{-}(aq)', '->', 'CH_3COO^{-}(aq)', '+', 'H_2O(l)'], at);
const mol = (n: number) => n.toFixed(4) + ' mol';

// ---------- 1. Hook ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {two: 'Two beakers', seven: 'pH seven', four: 'four point seven four', add: 'Add one millilitre', each: 'to each', r200: 'two point zero zero', units: 'five whole units', r466: 'four point six six', tenth: 'less than a tenth', so: "So what's in", run: 'run out'});
export const M1 = {h: 380, x1: 200, x2: 1000, y: 250};
export const SceneHook: React.FC = () => {
	const {h, x1, x2, y} = M1;
	const k = h / 1570;
	const r1 = countRead([{t0: K1.seven - 12, t1: K1.seven, a: 7.0, b: 7.0}, {t0: K1.r200 - 26, t1: K1.r200 + 6, a: 7.0, b: 2.0}], 2, K1.seven - 6);
	const r2 = countRead([{t0: K1.four - 12, t1: K1.four, a: 4.74, b: 4.74}, {t0: K1.r466 - 20, t1: K1.r466 + 6, a: 4.74, b: 4.66}], 2, K1.four - 6);
	const tip = (x: number): [number, number] => [x + (1330 - 164) * k, y + 140];
	const t1 = tip(x1), t2 = tip(x2);
	const b1 = meterBeaker(x1, y, h), b2 = meterBeaker(x2, y, h);
	const drop = K1.add + 70;
	return (
		<>
			<Heading text="What does the mixture do?" at={K1.run} size={60} />
			<Overlay>
				<LabMeter x={x1} y={y} h={h} read={r1} name="water" c="100 mL" at={K1.two} pulse={K1.r200 + 6} size={30} />
				<LabMeter x={x2} y={y} h={h} read={r2} name="ethanoic acid + sodium ethanoate" c="(0.100 mol/L each), 100 mL" at={K1.two + 60} pulse={K1.r466 + 6} size={30} />
				<GradPip tipX={t1[0]} tipY={t1[1]} len={300} at={K1.add} out={K1.r200 - 30} drop={drop} fall={80} />
				<GradPip tipX={t2[0]} tipY={t2[1]} len={300} at={K1.add} out={K1.r200 - 30} drop={drop + 4} fall={80} />
				<Sx x={(x1 + picW_(h) + x2) / 2} y={200} text="1.0 mL of 1.0 mol/L HCl" size={32} color={INK} anchor="middle" weight={700} at={K1.add + 10} out={K1.r200} />
				<DimG at={K1.run} to={0.3}>
					<AChip x={b1.cx} y={b1.bottom + 120} text="−5.00" size={44} color={WATER_INK} hand={false} anchor="middle" at={K1.units - 10} />
					<AChip x={b2.cx} y={b2.bottom + 120} text="−0.08" size={44} color={BUF} hand={false} anchor="middle" at={K1.tenth - 10} />
				</DimG>
				{void K1.each}{void K1.so}
			</Overlay>
		</>
	);
};
const picW_ = (h: number) => (1719 / 1570) * h;

// ---------- 2. What the mixture holds ----------
const S2 = 'what-it-holds';
const K2 = cues(sc(S2), {weak: 'Ethanoic acid is', molecules: 'whole molecules', sodium: 'The sodium ethanoate', eth: 'ethanoate ions', conj: "acid's conjugate base", both: 'both partners', buffer: 'buffer a solution', resists: 'resists a change'});
export const L2 = {cx: 760, cy: 590, r: 270};
export const SmallPair: React.FC<{o?: number}> = ({o = 1}) => (
	<g opacity={o}>
		<LabMeter x={1340} y={60} h={150} read={() => '2.00'} name="water" c="" at={-100} size={22} />
		<LabMeter x={1620} y={60} h={150} read={() => '4.66'} name="the mixture" c="" at={-100} size={22} />
	</g>
);
export const RB = {x: 1240, base: 840, k: 30000};
export const SceneHolds: React.FC = () => {
	const L = L2;
	const items = STRIP(K2.eth + 10);
	const es = fitSize(items, 1120, 44);
	const BH = 250, BX = 96, BY = 640;
	const sites: BSite[] = [...bufferSites(K2.eth, {9: {at: -1000}}), {u: 0.12, v: 0.03, kind: 'H3O'}];
	return (
		<Overlay>
			<SmallPair o={0.55} />
			<LiquidBeaker x={BX} y={BY} h={BH} />
			<Fade at={4}>
				<path d={`M${BX + picW(BEAKER, BH) * 0.8},${BY + BH * 0.4} L${L.cx - L.r * 0.9},${L.cy + L.r * 0.45}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" fill="none" />
			</Fade>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={0}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				<BLens cx={L.cx} cy={L.cy} r={L.r} sites={sites} />
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 54} text="weak: mostly whole" size={36} color={ACID_INK} anchor="middle" at={K2.molecules} out={K2.eth} />
			<DimG at={K2.buffer} to={0.4}>
				<EqLine items={items} x={96} y={250} size={es} />
				<PairBracket items={items} i={0} j={6} size={es} x={96} y={250} at={K2.conj} label="conjugate pair" color={BASE_INK} lsize={30} />
			</DimG>
			<RatioBar x={RB.x} base={RB.base} k={RB.k} nA={() => 0.01} nB={() => 0.01} at={K2.both} valA={() => '0.0100 mol'} valB={() => '0.0100 mol'} />
			<Note x={96} y={L.cy + L.r + 112} text="buffer: weak acid + its conjugate base, both in large amounts" size={40} color={BUF} at={K2.buffer} />
			{void K2.weak}{void K2.sodium}{void K2.resists}
		</Overlay>
	);
};

// ---------- 3. Added acid meets the conjugate base ----------
const S3 = 'acid-attack';
const K3 = cues(sc(S3), {add: 'Now add the', strong: "It's strong", puts: 'puts hydronium ions', eth: 'ethanoate ion', pulls: 'pulls the proton', plus: 'Hydronium plus ethanoate', used: 'used up', module: 'In Module 5', left: 'the left'});
export const SceneAcid: React.FC = () => {
	const L = L2;
	const strip = STRIP(-100);
	const es = fitSize(strip, 1120, 44);
	const e = K3.eth + 16;
	const fl = [e, e + 90];
	const src: [number, number][] = [[-0.6, -0.28], [0.1, 0.42]];
	const extra: Record<number, Partial<BSite>> = {};
	[5, 9].forEach((i, k) => { extra[i] = {flip: fl[k], by: 'H', src: src[k], srcAt: K3.puts + 6 + k * 9}; });
	const sites: BSite[] = [
		...bufferSites(-1000, extra),
		...([[0.62, 0.18], [-0.15, 0.4], [0.17, -0.8]] as [number, number][]).map(([u, v], k) => ({u, v, kind: 'Cl' as const, enter: K3.puts + 10 + k * 7})),
	];
	const aEq = ACID_EQ(K3.plus);
	const as = fitSize(aEq, 1180, 44);
	return (
		<Overlay>
			<DimG at={0} to={0.4} undim={K3.left - 10}><DimG at={K3.left + 80} to={0.4}><EqLine items={strip} x={96} y={250} size={es} /></DimG></DimG>
			<OpGlow items={strip} i={3} size={es} x={96} y={250} at={K3.left} len={50} color={BUF} />
			<Note x={96 + eSpan(strip, 3, es, 96).cx - 96} y={200 - es * 0.6} text="Module 5: Le Chatelier" size={28} color={INK_SOFT} anchor="middle" at={K3.module} out={K3.left + 80} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={-100}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				<BLens cx={L.cx} cy={L.cy} r={L.r} sites={sites} />
			</LensFrame>
			<EqLine items={aEq} x={96} y={L.cy + L.r + 90} size={as} />
			<RatioBar x={RB.x} base={RB.base} k={RB.k} nA={f => kf(f, [[K3.used, 0.01], [K3.used + 24, 0.011]])} nB={f => kf(f, [[K3.used - 1, 0.01], [K3.used, 0.009]], false)} at={-100}
				valA={() => '0.0100 mol'} valB={() => '0.0100 mol'} valAt={-100} valOut={K3.used - 16} slices={[{at: K3.used, n: 0.001}]} />
			{void K3.add}{void K3.strong}{void K3.pulls}{void mw}
		</Overlay>
	);
};

// ---------- 4. Added base meets the weak acid ----------
const S4 = 'base-attack';
const K4 = cues(sc(S4), {add: 'Add sodium hydroxide', partner: 'the other partner', mol: 'ethanoic acid molecule', making: 'making ethanoate', same: 'The same millilitre', twelve: 'twelve but', r483: 'four point eight three', defender: 'defender for each', conj: 'the conjugate base takes', weak: 'the weak acid takes'});
export const L4 = {cx: 440, cy: 610, r: 250};
export const SceneBase: React.FC = () => {
	const L = L4;
	const m = K4.mol + 14;
	const extra: Record<number, Partial<BSite>> = {0: {flip: m, by: 'OH'}, 10: {flip: m + 60, by: 'OH'}};
	const sites = bufferSites(-1000, extra);
	const aEq = ACID_EQ(-100), bEq = BASE_EQ(K4.mol + 30);
	const EX = 800, s = fitSize(bEq, 1020, 42);
	const Y1 = 560, Y2 = 740;
	const mh = 220, mx1 = 980, mx2 = 1420, my = 130;
	const w1 = countRead([{t0: K4.twelve - 26, t1: K4.twelve + 4, a: 7.0, b: 12.0}], 2, K4.same);
	const w2 = countRead([{t0: K4.r483 - 20, t1: K4.r483 + 6, a: 4.74, b: 4.83}], 2, K4.same);
	return (
		<Overlay>
			<DimG at={K4.same} to={0.3} undim={K4.defender}>
				<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={-100}>
					<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
					<BLens cx={L.cx} cy={L.cy} r={L.r} sites={sites} s={1.4} />
				</LensFrame>
			</DimG>
			<DimG at={0} to={0.35} undim={K4.defender}><EqLine items={aEq} x={EX} y={Y1} size={s} /></DimG>
			<EqLine items={bEq} x={EX} y={Y2} size={s} />
			<Note x={EX} y={Y1 + 64} text="added acid → taken by A^{−}" size={34} color={BASE_INK} hand={false} at={K4.conj} />
			<Note x={EX} y={Y2 + 64} text="added base → taken by HA" size={34} color={ACID_INK} hand={false} at={K4.weak} />
			<Fade at={K4.same - 6}>
				<DimG at={K4.defender} to={0.3}>
					<LabMeter x={mx1} y={my} h={mh} read={w1} name="water" c="" at={K4.same - 6} size={26} pulse={K4.twelve + 4} />
					<LabMeter x={mx2} y={my} h={mh} read={w2} name="buffer" c="" at={K4.same - 6} size={26} pulse={K4.r483 + 6} />
				</DimG>
			</Fade>
			<Sx x={(mx1 + mx2 + picW_(mh)) / 2} y={104} text="1.0 mL of 1.0 mol/L NaOH" size={30} color={INK} anchor="middle" weight={700} at={K4.same} out={K4.r483 + 40} />
			{void K4.add}{void K4.partner}{void K4.making}
		</Overlay>
	);
};

// ---------- 5. The pH of a buffer: Ka and the ratio ----------
const S5 = 'buffer-ph';
const K5 = cues(sc(S5), {why: 'So why does', back: 'Go back to', rearr: 'Rearrange it', times: 'K a times acid', little: 'Very little', amounts: 'amounts you put', cancels: 'cancels so moles', here: "Here there's", one: 'one and hydronium', pka: 'p K a four'});
export const T5 = "Find the buffer's pH";
export const GIV5 = (at: number) => [
	{t: 'CH_3COOH: 0.100 mol/L × 0.100 L = 0.0100 mol', at},
	{t: 'CH_3COO^{-}: 0.100 mol/L × 0.100 L = 0.0100 mol', at: at + 8},
	{t: 'Ka = 1.8 × 10^{−5} (25 °C)', at: at + 16},
];
export const SceneBufferPh: React.FC = () => {
	const FX = 1000, S = 44;
	return (
		<Overlay>
			<TaskLine text={T5} at={K5.why} />
			<DimG at={K5.pka} to={0.35}><GCard x={96} y={230} w={820} size={30} lh={58} at={K5.why + 10} lines={GIV5(K5.why + 16)} /></DimG>
			<Note x={FX} y={258} text="Ka and pKa video" size={28} color={INK_SOFT} at={K5.back} out={K5.rearr} />
			<DimG at={K5.times} to={0.35}><KaFrac x={FX} y={340} prefix="Ka =" num="[H_3O^{+}][CH_3COO^{-}]" den="[CH_3COOH]" size={S} at={K5.back + 10} /></DimG>
			<KaFrac x={FX} y={520} prefix="[H_3O^{+}] = Ka ×" num="[CH_3COOH]" den="[CH_3COO^{-}]" size={S} at={K5.times} out={K5.cancels} />
			<KaFrac x={FX} y={520} prefix="[H_3O^{+}] = Ka ×" num="n(CH_3COOH)" den="n(CH_3COO^{-})" size={S} at={K5.cancels + 8} />
			<Note x={FX} y={652} text="partners barely react with water: use the amounts added" size={28} color={INK_SOFT} at={K5.amounts} out={K5.cancels - 6} />
			<Note x={FX} y={652} text="same V: use moles" size={30} color={INK_SOFT} at={K5.cancels} out={K5.here} />
			<RatioBar x={1560} base={940} k={12000} nA={() => 0.01} nB={() => 0.01} at={K5.one - 10} out={K5.pka + 40} bw={60} gap={30} size={22} labA="HA" labB="A^{−}" mid={{t: '1 : 1', at: K5.one, color: BUF}} />
			<WLine x={96} y={740} size={38} dim={K5.pka} items={P('[H_3O^{+}] = 1.8 × 10^{−5} × 0.0100 / 0.0100', K5.here + 30, {t: '= 1.8 × 10^{−5} mol/L', color: BUF}, K5.one)} />
			<WLine x={96} y={820} size={38} dim={K5.pka + 60} items={P('pH = pKa = −log(1.8 × 10^{−5})', K5.pka - 20, {t: '= 4.74', color: BUF}, K5.pka + 10)} />
			<KeptChip x={96} y={870} text="equal partners: pH = pKa = 4.74" at={K5.pka + 60} color={BUF} size={38} />
			{void K5.little}{void K5.rearr}
		</Overlay>
	);
};

// ---------- 6. Worked example: after the acid ----------
const S6 = 'we-after-acid';
const K6 = cues(sc(S6), {now: 'Now add the', turns: 'It turns that', r0110: 'zero point zero one one zero', r0090: 'zero point zero zero nine zero', r12: 'one point two', twenty: 'twenty per cent', r466: 'four point six six', plain: 'In plain water', hundred: 'hundred thousand'});
export const T6 = 'Find the pH after adding the HCl';
export const SceneAfterAcid: React.FC = () => {
	const X = 96, S = 36;
	const rem = ACID_EQ(-100);
	const rs = fitSize(rem, 760, 32);
	const s2 = K6.r12 - 40;
	const nA = (f: number) => kf(f, [[K6.r0110, 0.01], [K6.r0110 + 24, 0.011]]);
	const nB = (f: number) => (f < K6.r0110 ? 0.01 : 0.009);
	const CX = 1290;
	return (
		<Overlay>
			<TaskLine text={T6} at={K6.now} />
			<StepAfter size={64} task={T6} text="Step 1 of 2: new amounts" at={K6.now + 20} out={s2} />
			<StepAfter size={64} task={T6} text="Step 2 of 2: pH" at={s2 + 8} />
			<DimG at={s2} to={0.4}><GCard x={X} y={226} w={840} size={29} lh={54} at={-100} lines={[
				{t: 'CH_3COOH: 0.0100 mol', at: -100},
				{t: 'CH_3COO^{-}: 0.0100 mol', at: -100},
				{t: 'Ka = 1.8 × 10^{−5} (25 °C)', at: -100},
				{t: 'added H_3O^{+}: 1.0 mL × 1.0 mol/L = 0.0010 mol', at: K6.now + 30, lit: [K6.now + 30, K6.r0110]},
			]} /></DimG>
			<DimG at={0} to={0.45}><EqLine items={rem} x={1040} y={250} size={rs} /></DimG>
			<KeptChip x={1040} y={290} text="equal partners: pH = pKa = 4.74" at={-100} out={K6.r0110} color={BUF} size={30} />
			<RatioBar x={1500} base={620} k={20000} nA={nA} nB={nB} at={-100} slices={[{at: K6.r0110, n: 0.001}]}
				valA={f => (f < K6.r0110 + 10 ? mol(0.01) : mol(0.011))} valB={f => (f < K6.r0110 + 10 ? mol(0.01) : mol(0.009))} valAt={-100} size={26}
				mid={{t: 'ratio 1.22: [H_3O^{+}] up 22%', at: K6.twenty, out: K6.plain, color: INK_SOFT}} />
			<WLine x={X} y={630} size={S} dim={K6.r12} items={P('n(CH_3COOH) = 0.0100 + 0.0010', K6.turns + 40, {t: '= 0.0110 mol', color: ACID_INK}, K6.r0110)} />
			<WLine x={X} y={700} size={S} dim={K6.r12} items={P('n(CH_3COO^{-}) = 0.0100 − 0.0010', K6.r0090 - 30, {t: '= 0.0090 mol', color: BASE_INK}, K6.r0090)} />
			<WLine x={X} y={790} size={S} dim={K6.r466} items={P('[H_3O^{+}] = 1.8 × 10^{−5} × 0.0110 / 0.0090', K6.r12 - 10, {t: '= 2.2 × 10^{−5} mol/L', color: BUF}, K6.r12 + 16)} />
			<WLine x={X} y={870} size={S} dim={K6.hundred} items={P('pH = −log(2.2 × 10^{−5})', K6.r466 - 20, {t: '= 4.66', color: BUF}, K6.r466)} />
			<Note x={X} y={940} text="Ka 2 s.f. → pH 2 d.p." size={30} color={INK_SOFT} hand={false} at={K6.r466 + 20} out={K6.hundred} />
			<AChip x={CX} y={700} text="pH = 4.66" size={48} color={BUF} hand={false} at={K6.r466 + 14} />
			<Sx x={CX} y={850} text="[H_3O^{+}] rises:" size={30} color={INK_SOFT} weight={700} at={K6.plain} />
			<Sx x={CX} y={900} text="buffer: × 1.2" size={34} color={BUF} weight={800} at={K6.plain + 6} />
			<Sx x={CX} y={950} text="water: × about 100,000" size={34} color={WATER_INK} weight={800} at={K6.hundred} />
			<Sx x={CX} y={990} text="(10^{−7} → 10^{−2} mol/L)" size={26} color={INK_SOFT} weight={600} at={K6.hundred + 10} />
			{void INK}
		</Overlay>
	);
};
