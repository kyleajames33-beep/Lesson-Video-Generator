// M6 C14 scenes 1 to 5: two acids, two curves (burette, two pH meters, the C13 curves drawn together); axes and the
// starting pH; the buffer region (ratio bar, dose counter, bracket); half-equivalence gives pKa (the caliper); the
// equivalence point (magnifier, crossed chip, the concentration from the volume).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {XS25, fine, phEth, phHCl} from '../chem-m6-c13/curves';
import {AX, G13, XLAB} from '../chem-m6-c13/s2';
import {RatioBar} from '../chem-m6-c11/parts';
import {
	AChip, Axes, BuretteFill, Caliper, Counter, Curve, DimG, Drop, ETH_C, FeatRing, Fade, FullMeter, GDot, Glow, HA, HCL_C, H3O, An, INK, INK_SOFT, Inset, KeptChip, LensFrame, MistakeX, NAVY, Note,
	Overlay, P, Ring, SpanBracket, Sx, TEAL, WLine, burAt, burPt, fullMeterW, gx, gy,
} from './parts';
import type {GG} from './parts';

export const G = G13;
export const INS = {x: 1470, y: 300, w: 400, h: 430};
export const LBL = {hcl: [4, 2.3] as [number, number], eth: [13, 5.75] as [number, number]};
/** The two main curves with their direct labels. o: opacity (number or function). */
export const Main: React.FC<{at?: number; dur?: number; o?: number | ((f: number) => number); oH?: number | ((f: number) => number); oE?: number | ((f: number) => number); width?: number; labels?: boolean}> = ({at = -100, dur = 60, o = 1, oH, oE, width = 6, labels = true}) => {
	const f = useCurrentFrame();
	const val = (q: number | ((f: number) => number) | undefined) => (q === undefined ? (typeof o === 'number' ? o : o(f)) : typeof q === 'number' ? q : q(f));
	return (
		<>
			<Curve g={G} fn={phHCl} xs={XS25} color={HCL_C} at={at} dur={dur} o={val(oH)} width={width} />
			<Curve g={G} fn={phEth} xs={XS25} color={ETH_C} at={at} dur={dur} o={val(oE)} width={width} />
			{labels ? <Sx x={gx(G, LBL.hcl[0])} y={gy(G, LBL.hcl[1])} text="HCl" size={30} color={HCL_C} weight={800} at={at + dur} opacity={val(oH)} /> : null}
			{labels ? <Sx x={gx(G, LBL.eth[0])} y={gy(G, LBL.eth[1])} text="CH_3COOH" size={30} color={ETH_C} weight={800} at={at + dur} opacity={val(oE)} /> : null}
		</>
	);
};
export const MainAxes: React.FC<{at?: number; xLabel?: string}> = ({at = -100, xLabel = XLAB}) => <Axes g={G} at={at} xTicks={AX.xTicks} yTicks={AX.yTicks} xLabel={xLabel} yLabel="pH" />;

// ---------- 1. Hook ----------
const S1 = 'hook';
const K1 = cues(sc(S1), {two: 'Two beakers', hcl: 'One is hydrochloric', add: 'Add the same', measure: 'measure the pH', plot: 'plot it', curves: 'two very different', every: 'Every bend', how: 'how much', ka: 'even its', so: 'So how'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const run0 = K1.curves - 20, run1 = run0 + 100;
	const v = (fr: number) => kf(fr, [[run0, 0], [run1, 50]], false);
	const MH = 230, MX = 1480;
	const mw = fullMeterW(MH);
	const b = burAt(260, 660, 440);
	const [tubeR, yTop] = burPt(b.x, b.y, 440, 1172, 300);
	const out = run1 + 20;
	return (
		<>
			<Heading text="What does each part of the curve tell you?" at={K1.so} size={58} />
			<Overlay>
				<Fade at={K1.add - 20} out={K1.plot}>
					<BuretteFill x={b.x} y={b.y} h={440} level={() => 0} />
					<Note x={tubeR + 24} y={yTop} text="0.100 mol/L NaOH" size={32} color={NAVY} at={K1.add} />
				</Fade>
				<FullMeter x={MX} y={210} h={MH} at={K1.hcl - 10} out={out} read={fr => phHCl(v(fr)).toFixed(1)} />
				<Sx x={MX + mw / 2} y={480} text="HCl, 0.100 mol/L, 25.00 mL" size={26} color={HCL_C} anchor="middle" weight={700} at={K1.hcl} out={out} />
				<FullMeter x={MX} y={540} h={MH} at={K1.hcl + 40} out={out} read={fr => phEth(v(fr)).toFixed(1)} />
				<Sx x={MX + mw / 2} y={810} text="CH_3COOH, 0.100 mol/L, 25.00 mL" size={26} color={ETH_C} anchor="middle" weight={700} at={K1.hcl + 50} out={out} />
				<Counter x={MX + mw / 2} y={860} text={`NaOH added: ${v(f).toFixed(1)} mL`} at={run0} out={out} color={NAVY} size={28} />
				<MainAxes at={K1.plot} />
				<Main at={run0} dur={100} />
				<Ring cx={gx(G, 25)} cy={gy(G, 7)} rx={44} ry={150} at={K1.how} out={K1.ka + 10} color={INK} />
				<Ring cx={gx(G, 12.5)} cy={gy(G, 4.7)} rx={170} ry={40} at={K1.ka} out={K1.so + 30} color={INK} seed={5} />
				{void K1.two}{void K1.measure}{void K1.every}
			</Overlay>
		</>
	);
};

// ---------- 2. Axes and the starting pH ----------
const S2 = 'axes-start-ph';
const K2 = cues(sc(S2), {plots: 'plots the pH', volume: 'the volume', left: 'left edge', hcl: 'Hydrochloric acid starts', one: 'one point zero', ionised: 'fully ionised', eth: 'Ethanoic acid starts', two: 'two point eight', weak: 'a weak acid', hundred: 'one in a', same: 'At the same', weaker: 'weaker acid'});
export const StartLabels: React.FC<{at1?: number; at2?: number}> = ({at1 = -100, at2 = -100}) => (
	<>
		<GDot g={G} v={0} p={1.0} at={at1} color={HCL_C} label="1.000" dx={18} dy={36} size={30} />
		<GDot g={G} v={0} p={2.87} at={at2} color={ETH_C} label="2.87" dx={40} dy={-28} size={30} />
	</>
);
export const SceneStart: React.FC = () => {
	const L = {cx: 1660, cy: 520, r: 120};
	const PT = (u: number, v: number): [number, number] => [L.cx + u * L.r, L.cy + v * L.r];
	return (
		<Overlay>
			<Glow x={G.x - 30} y={G.y - 22} w={90} at={K2.plots + 30} />
			<Glow x={G.x + G.w / 2 - 290} y={G.y + G.h + 77} w={580} at={K2.volume} />
			<MainAxes />
			<Main />
			<Note x={880} y={780} text="base in the flask instead? the curve runs downhill" size={28} color={INK_SOFT} at={K2.volume + 40} out={K2.hcl - 10} />
			<FeatRing g={G} v={0} p={2.87} n={1} at={K2.left} dx={-36} dy={0} />
			<FeatRing g={G} v={0} p={1.0} at={K2.left + 6} />
			<StartLabels at1={K2.one} at2={K2.two} />
			<Note x={880} y={700} text="[H_3O^{+}] = 0.100 mol/L: 3 s.f. → 3 d.p." size={28} color={INK_SOFT} at={K2.one + 10} out={K2.eth - 6} />
			<Note x={880} y={700} text="[H_3O^{+}] from Ka: 2 s.f. → 2 d.p." size={28} color={INK_SOFT} at={K2.two + 10} out={K2.same} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K2.weak}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				{[[-0.45, -0.4, -0.6], [0.35, -0.45, 0.4], [-0.5, 0.35, 0.8], [0.4, 0.4, -2.0], [0.0, -0.05, 2.4]].map(([u, v, a], i) => <HA key={i} x={PT(u, v)[0]} y={PT(u, v)[1]} s={1.1} a={a} />)}
				<An x={PT(-0.05, 0.62)[0]} y={PT(-0.05, 0.62)[1]} s={1.0} />
				<H3O x={PT(0.6, -0.05)[0]} y={PT(0.6, -0.05)[1]} s={0.9} />
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 40} text="weak acid pH video" size={26} color={INK_SOFT} anchor="middle" at={K2.weak + 10} out={K2.same + 30} />
			<AChip x={880} y={740} text="same c: higher start → weaker acid" size={32} color={TEAL} hand={false} at={K2.weaker - 6} />
			{void K2.hcl}{void K2.ionised}{void K2.hundred}{void K2.eth}
		</Overlay>
	);
};

// ---------- 3. The early part: the buffer region ----------
const S3 = 'buffer-region';
const K3 = cues(sc(S3), {first: 'the first twenty', low: 'stays low', plenty: 'plenty of', climbs: 'climbs quickly', levels: 'levels off', each: 'Each portion', buffer: 'is a buffer', region: 'the buffer region', before: 'before the jump'});
export const RB = {x: 1500, base: 700, k: 80};
export const BUFB = {a: 3, b: 22, p: 6.6};
export const SceneBuffer: React.FC = () => {
	const f = useCurrentFrame();
	const v = (fr: number) => kf(fr, [[K3.levels - 30, 0], [K3.before, 20]]);
	return (
		<Overlay>
			<MainAxes />
			<Main o={0.4} />
			<DimG at={0} to={0.35}><StartLabels /></DimG>
			<Curve g={G} fn={phHCl} xs={XS25} color={HCL_C} at={K3.low - 10} dur={30} from={0} to={20} width={11} />
			<Curve g={G} fn={phEth} xs={XS25} color={ETH_C} at={K3.climbs} dur={40} from={0} to={20} width={11} />
			<RatioBar x={RB.x} base={RB.base} k={RB.k} nA={fr => 2.5 - 0.1 * v(fr)} nB={fr => 0.1 * v(fr)} at={K3.levels - 30} labA="CH_3COOH" labB="CH_3COO^{−}" />
			<Counter x={RB.x + 113} y={400} text={`NaOH added: ${v(f).toFixed(1)} mL`} at={K3.levels - 30} color={NAVY} size={28} />
			<Note x={RB.x + 113} y={800} text="buffer video" size={26} color={INK_SOFT} anchor="middle" at={K3.each} out={K3.region + 30} />
			<SpanBracket x1={gx(G, BUFB.a)} x2={gx(G, BUFB.b)} y={gy(G, BUFB.p)} text="buffer region (before the jump)" at={K3.region} up color={ETH_C} size={30} />
			<FeatRing g={G} v={6} p={phEth(6)} n={2} at={K3.region + 10} />
			{void K3.first}{void K3.plenty}{void K3.buffer}
		</Overlay>
	);
};

// ---------- 4. Half-equivalence gives pKa ----------
const S4 = 'half-equivalence';
const K4 = cues(sc(S4), {tf: 'twenty five millilitres', halfway: 'So halfway', twelve: 'twelve point five', half: 'half the ethanoic', equal: 'Equal amounts', pka: 'equals the p', read: 'Read it off', r474: ['four point seven four', 1], ka: 'So K a', r18: 'one point eight', own: 'own constant', strong: 'A strong acid'});
export const PKA_LINE = (at: number, o: number | ((f: number) => number) = 1) => <Drop g={G} v={12.5} p={4.74} at={at} toX={false} toY color={ETH_C} yLabel="4.74" size={30} o={o} />;
export const SceneHalf: React.FC = () => (
	<Overlay>
		<MainAxes />
		<Main oH={0.2} oE={1} />
		<RatioBar x={RB.x} base={RB.base} k={RB.k} nA={() => 1.25} nB={() => 1.25} at={-100} labA="CH_3COOH" labB="CH_3COO^{−}" mid={{t: 'equal', at: K4.equal, color: TEAL}} />
		<Caliper g={G} full={25} half={12.5} at={K4.tf} fold={K4.halfway} fullLabel="equivalence: 25.00 mL, from the moles" halfLabel="12.50 mL" color={INK} />
		<Drop g={G} v={12.5} p={4.74} at={K4.twelve + 10} color={ETH_C} />
		{PKA_LINE(K4.r474)}
		<FeatRing g={G} v={12.5} p={4.74} n={3} at={K4.r474} />
		<AChip x={250} y={140} text="equal partners: pH = pKa" size={38} color={TEAL} hand={false} at={K4.pka} />
		<WLine x={1470} y={830} size={34} items={P('Ka = 10^{−4.74}', K4.ka, {t: '= 1.8 × 10^{−5}', color: ETH_C}, K4.r18)} />
		<Note x={1470} y={890} text="pH 2 d.p. → Ka 2 s.f." size={26} color={INK_SOFT} at={K4.r18 + 20} out={K4.strong + 40} />
		<Note x={gx(G, 2)} y={gy(G, 2.6)} text="HCl: no buffer, no such point" size={28} color={HCL_C} at={K4.strong} />
		{void K4.half}{void K4.read}{void K4.own}
	</Overlay>
);

// ---------- 5. The equivalence point ----------
const S5 = 'equivalence-point';
const K5 = cues(sc(S5), {middle: 'middle of the steepest', seven: 'pH seven only', never: 'never just', tf: 'twenty five point', moles: 'as the moles', titre: 'a titre counts', unknown: 'for an unknown', conc: 'the concentration', here: 'here zero point'});
export const GI: GG = {x: INS.x + 70, y: INS.y + 50, w: INS.w - 100, h: INS.h - 130, x0: 24.9, x1: 25.1, y0: 2, y1: 12};
const FX = fine(24.9, 25.1, 400);
export const EqInset: React.FC<{at: number; children?: React.ReactNode; ringAt?: number}> = ({at, children, ringAt = -100}) => (
	<Inset x={INS.x} y={INS.y} w={INS.w} h={INS.h} from={[gx(G, 25), gy(G, 7.5)]} r={30} at={at} title="near 25.00 mL">
		<Axes g={GI} at={at} xTicks={[24.9, 25.0, 25.1]} yTicks={[2, 4, 6, 8, 10, 12]} xLabel="mL" yLabel="" size={20} xFmt={n => n.toFixed(1)} />
		<Curve g={GI} fn={phHCl} xs={FX} color={HCL_C} at={at + 6} dur={24} width={5} />
		<Curve g={GI} fn={phEth} xs={FX} color={ETH_C} at={at + 6} dur={24} width={5} />
		<FeatRing g={GI} v={25} p={7.0} n={4} at={ringAt} r={14} dx={-24} dy={-20} />
		<FeatRing g={GI} v={25} p={8.72} at={ringAt + 6} r={14} />
		{children}
	</Inset>
);
export const CLINE = 'c(acid) = (0.100 mol/L × 0.02500 L) ÷ 0.02500 L';
export const SceneEqPoint: React.FC = () => (
	<Overlay>
		<MainAxes />
		<Main o={0.85} />
		<DimG at={0} to={0.3}><StartLabels />{PKA_LINE(-100)}</DimG>
		<EqInset at={K5.middle - 10} ringAt={K5.middle + 10} />
		<AChip x={250} y={140} text="equivalence: middle of the jump" size={38} color={INK} hand={false} at={K5.middle + 16} />
		<MistakeX x={871} y={680} text="always at pH 7? at the top?" at={K5.seven - 10} cross={K5.never + 6} out={K5.tf - 10} note="middle of the jump; pH 7 only for strong + strong" size={30} />
		<Drop g={G} v={25} p={8.72} at={K5.tf} color={INK} xLabel="25.00 mL" size={28} />
		<Note x={880} y={690} text="titration video: titre counts moles" size={28} color={INK_SOFT} at={K5.titre} out={K5.conc - 10} />
		<WLine x={250} y={1010} size={32} dim={K5.here + 90} items={P(CLINE, K5.conc, {t: '= 0.100 mol/L', color: TEAL}, K5.here + 40)} />
		<KeptChip x={1470} y={190} text="c(acid) = 0.100 mol/L" at={K5.here + 70} color={TEAL} size={32} />
		{void K5.moles}{void K5.unknown}
	</Overlay>
);
void INK;
