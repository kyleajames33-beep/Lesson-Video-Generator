// M6 C14 scenes 6 to 10: equivalence pH and the jump (labels in the magnifier, two jump brackets, the buffer bracket,
// the crossed "faster reaction" chip); strong acid with a weak base (the ammonia curve); conductivity of hydrochloric
// acid and of ethanoic acid (the proton chain, the coded conductivity graph, the ion tally, the meter); the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {kf, sc} from './common';
import {AMMONIA} from './assets';
import {XS25, condEth, condHCl, fine, phEth, phHClNH3, samples} from '../chem-m6-c13/curves';
import {AX, XLAB} from '../chem-m6-c13/s2';
import {
	AChip, An, Axes, Caliper, CondMeter, Counter, Curve, DimG, Drop, ETH_C, EqLine, GDot, HA, HCL_C, H3O, INK, INK_SOFT, IonTally, JumpBracket, KeptChip, LensFrame, Lit, MistakeX, NAVY, NH3_C,
	Note, Overlay, PINK, PicH, SpanBracket, Sx, TEAL, WaterChain, eq, gx, gy, tallyEth, tallyHCl,
} from './parts';
import type {GG} from './parts';
import {BUFB, EqInset, G, GI, Main, MainAxes, PKA_LINE, StartLabels} from './s1';

// ---------- 6. Equivalence pH and the jump ----------
const S6 = 'equivalence-ph-jump';
const K6 = cues(sc(S6), {read: 'read the pH', seven: 'gives seven', r872: 'eight point seven two', because: 'because ethanoate', video: 'indicator video', jumps: 'the jumps differ', four: 'four to ten', only: 'only from about', up: 'pH up', bigger: 'a bigger jump', less: 'less buffering'});
export const SceneEqPh: React.FC = () => (
	<Overlay>
		<MainAxes />
		<Main o={0.85} />
		<DimG at={0} to={0.3}><StartLabels />{PKA_LINE(-100)}</DimG>
		<DimG at={0} to={0.4}><Drop g={G} v={25} p={8.72} at={-100} color={INK} xLabel="25.00 mL" size={28} /></DimG>
		<EqInset at={-100}>
			<GDot g={GI} v={25} p={7.0} at={K6.seven} color={HCL_C} label="7.00" dx={-14} dy={10} anchor="end" size={24} />
			<GDot g={GI} v={25} p={8.72} at={K6.r872} color={ETH_C} label="8.72" dx={14} dy={20} size={24} />
		</EqInset>
		<Note x={250} y={1010} text="indicator video: the salt takes after its stronger parent" size={28} color={INK_SOFT} at={K6.because} out={K6.jumps} />
		<JumpBracket x={gx(G, 25) - 26} y1={gy(G, 10)} y2={gy(G, 4)} at={K6.four} text="4 → 10" side="l" color={HCL_C} size={30} />
		<JumpBracket x={gx(G, 25) + 26} y1={gy(G, 10)} y2={gy(G, 7.44)} at={K6.only + 10} text="7.4 → 10" color={ETH_C} size={30} />
		<DimG at={K6.bigger} to={0.35}>
			<SpanBracket x1={gx(G, BUFB.a)} x2={gx(G, BUFB.b)} y={gy(G, BUFB.p)} text="buffer: shorter jump" at={K6.up - 10} up color={ETH_C} size={30} />
			<Note x={gx(G, 12.5)} y={gy(G, BUFB.p) - 60} text="at these concentrations" size={26} color={INK_SOFT} anchor="middle" at={K6.up} />
		</DimG>
		<KeptChip x={1470} y={190} text="c(acid) = 0.100 mol/L" at={-100} color={TEAL} size={32} />
		<DimG at={K6.less + 50} to={0.35}>
			<MistakeX x={871} y={680} text="bigger jump = faster reaction?" at={K6.bigger} cross={K6.less} note="less buffering, not faster" size={30} />
		</DimG>
		{void K6.read}{void K6.video}
	</Overlay>
);

// ---------- 7. Strong acid with a weak base ----------
const S7 = 'strong-acid-weak-base';
const K7 = cues(sc(S7), {what: 'What about', ammonia: 'with ammonia', starts: 'It starts', lower: 'is lower', shorter: 'and shorter', r528: 'five point two', because: 'because ammonium', after: 'And after', nine: 'near nine', extra: 'extra ammonia', buffer: 'a buffer'});
export const SceneSAWB: React.FC = () => {
	const XL = G.y + G.h + 28 * 2.75;
	return (
		<Overlay>
			<Axes g={G} at={-100} xTicks={AX.xTicks} yTicks={AX.yTicks} xLabel="" yLabel="pH" />
			<Sx x={G.x + G.w / 2} y={XL} text={XLAB} size={30} color={INK} anchor="middle" weight={700} at={-100} out={K7.what + 10} />
			<Sx x={G.x + G.w / 2} y={XL} text="volume of 0.100 mol/L base added (mL)" size={30} color={INK} anchor="middle" weight={700} at={K7.what + 16} />
			<Sx x={G.x + G.w / 2} y={XL + 50} text="pale blue, teal: NaOH | amber: NH_3" size={26} color={INK_SOFT} anchor="middle" weight={600} at={K7.what + 30} />
			<Main o={0.25} width={4} />
			<PicH p={AMMONIA} x={1700} y={300} h={200} />
			<Curve g={G} fn={phHClNH3} xs={XS25} color={NH3_C} at={K7.ammonia} dur={70} />
			<Sx x={gx(G, 36)} y={gy(G, 7.6)} text="HCl + NH_3" size={30} color={NH3_C} weight={800} at={K7.ammonia + 70} />
			<JumpBracket x={gx(G, 25) - 26} y1={gy(G, 6.56)} y2={gy(G, 4)} at={K7.lower} text="4 → 6.6" side="l" color={NH3_C} size={30} />
			<GDot g={G} v={25} p={5.28} at={K7.r528} color={NH3_C} label="5.28" dx={18} dy={10} size={30} />
			<AChip x={250} y={140} text="NH_4Cl: acidic" size={38} color={NH3_C} hand={false} at={K7.because} />
			<SpanBracket x1={gx(G, 30)} x2={gx(G, 50)} y={gy(G, 9.9)} text="buffer: NH_3 + NH_4^{+}" at={K7.nine} up color={NH3_C} size={28} hand={false} />
			{void K7.starts}{void K7.shorter}{void K7.after}{void K7.extra}{void K7.buffer}
		</Overlay>
	);
};

// ---------- conductivity graph ----------
export const GC: GG = {x: 250, y: 400, w: 860, h: 440, x0: 0, x1: 50, y0: 0, y1: 45};
export const XC = samples(50, 25);
export const CondAxes: React.FC<{at?: number}> = ({at = -100}) => <Axes g={GC} at={at} xTicks={AX.xTicks} yTicks={[]} xLabel={XLAB} yLabel="conductivity (relative)" grid={false} yNumbers={false} />;
const TX = 1180, TY = 480;

// ---------- 8. Conductivity: hydrochloric acid ----------
const S8 = 'conductivity-strong';
const K8 = cues(sc(S8), {meter: 'A conductivity meter', hyd: 'Hydronium and hydroxide conduct', pass: 'pass a proton', as: 'As sodium', fast: 'fast hydronium', sodium: 'slower sodium', falls: 'conductivity falls', after: 'After equivalence', piles: 'piles up', rises: 'it rises', lowest: 'lowest point'});
export const SceneCondStrong: React.FC = () => {
	const f = useCurrentFrame();
	const v = (fr: number) => kf(fr, [[K8.as, 0], [K8.falls, 25], [K8.after, 25], [K8.rises + 10, 50]], false);
	const t = tallyHCl(v(f));
	return (
		<Overlay>
			<WaterChain x={300} y={285} at={K8.pass - 4} step={12} />
			<Note x={760} y={300} text="H_3O^{+} and OH^{−}: best conductors" size={32} color={TEAL} at={K8.pass + 20} />
			<CondAxes at={10} />
			<Curve g={GC} fn={condHCl} xs={XC} color={HCL_C} at={K8.as} dur={K8.falls - K8.as} from={0} to={25} />
			<Curve g={GC} fn={condHCl} xs={XC} color={HCL_C} at={K8.after} dur={K8.rises + 10 - K8.after} from={25} to={50} />
			<Sx x={gx(GC, 3)} y={gy(GC, 40)} text="HCl + NaOH" size={28} color={HCL_C} weight={800} at={K8.as + 20} />
			<Counter x={TX + 225} y={400} text={`NaOH added: ${v(f).toFixed(1)} mL`} at={K8.as} color={NAVY} size={28} />
			<IonTally x={TX} y={TY} pos={() => t.pos} neg={() => t.neg} at={K8.hyd} />
			<CondMeter x={1560} y={650} h={300} level={fr => condHCl(v(fr)) / 45} at={0} />
			<GDot g={GC} v={25} p={condHCl(25)} at={K8.lowest} color={INK} ring label="equivalence: minimum" dx={0} dy={-40} anchor="middle" size={30} />
			<Drop g={GC} v={25} p={condHCl(25)} at={K8.lowest + 6} color={INK} />
			{void K8.meter}{void K8.fast}{void K8.sodium}{void K8.piles}
		</Overlay>
	);
};

// ---------- 9. Conductivity: ethanoic acid ----------
const S9 = 'conductivity-weak';
const K9 = cues(sc(S9), {starts: 'starts with few', low: 'starts low', as: 'As base', gently: 'rises gently', those: 'Those ions', after: 'After equivalence', steeply: 'more steeply', bend: 'the bend', not: 'not a minimum'});
export const SceneCondWeak: React.FC = () => {
	const f = useCurrentFrame();
	const v = (fr: number) => kf(fr, [[K9.as, 0], [K9.gently + 20, 25], [K9.after, 25], [K9.steeply + 10, 50]], false);
	const t = tallyEth(v(f));
	const c25 = condEth(25), s1 = (c25 - condEth(10)) / 15, s2 = (condEth(40) - c25) / 15;
	const L = {cx: 1720, cy: 300, r: 70};
	return (
		<Overlay>
			<CondAxes />
			<Curve g={GC} fn={condHCl} xs={XC} color={HCL_C} at={-100} o={0.3} width={4} />
			<Sx x={gx(GC, 3)} y={gy(GC, 40)} text="HCl + NaOH" size={28} color={HCL_C} weight={800} at={-100} opacity={0.35} />
			<Curve g={GC} fn={condEth} xs={XC} color={ETH_C} at={K9.as} dur={K9.gently + 20 - K9.as} from={0} to={25} />
			<Curve g={GC} fn={condEth} xs={XC} color={ETH_C} at={K9.after} dur={K9.steeply + 10 - K9.after} from={25} to={50} />
			<GDot g={GC} v={0} p={condEth(0)} at={K9.low} color={ETH_C} r={8} />
			<Sx x={gx(GC, 50)} y={gy(GC, 6.2)} anchor="end" text="CH_3COOH + NaOH" size={28} color={ETH_C} weight={800} at={K9.after + 20} />
			<Counter x={TX + 225} y={400} text={`NaOH added: ${v(f).toFixed(1)} mL`} at={K9.as} color={NAVY} size={28} />
			<IonTally x={TX} y={TY} pos={() => t.pos} neg={() => t.neg} at={K9.starts} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K9.starts}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				{[[-0.4, -0.35, -0.6], [0.35, -0.3, 0.5], [-0.3, 0.4, 1.0], [0.4, 0.42, -2.0]].map(([u, w, a], i) => <HA key={i} x={L.cx + u * L.r} y={L.cy + w * L.r} s={0.8} a={a} />)}
			</LensFrame>
			<Note x={L.cx} y={L.cy + L.r + 34} text="mostly whole molecules" size={24} color={INK_SOFT} anchor="middle" at={K9.starts + 10} out={K9.those} />
			<CondMeter x={1560} y={650} h={300} level={fr => condEth(v(fr)) / 45} at={-100} />
			<Drop g={GC} v={25} p={c25} at={K9.bend} color={INK} o={0.6} />
			<Curve g={GC} fn={x => c25 + s1 * (x - 25)} xs={[8, 34]} color={INK_SOFT} at={K9.bend} dur={14} from={8} to={34} width={3} dash="10 8" />
			<Curve g={GC} fn={x => c25 + s2 * (x - 25)} xs={[17, 44]} color={INK_SOFT} at={K9.bend + 6} dur={14} from={17} to={44} width={3} dash="10 8" />
			<GDot g={GC} v={25} p={c25} at={K9.bend + 10} color={ETH_C} ring label="equivalence: change of slope" dx={0} dy={-80} anchor="middle" size={30} />
			<Note x={gx(GC, 25)} y={gy(GC, c25) - 130} text="not a minimum" anchor="middle" size={30} color={INK_SOFT} at={K9.not} />
			{void H3O}{void An}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const S10 = 'memory-aid';
const K10 = cues(sc(S10), {here: "here's what", at: 'At halfequivalence', find: 'Find equivalence', halve: 'halve the volume', read: 'read the pH', works: 'It works', cond: 'for conductivity', hyd: 'hydronium and hydroxide'});
export const SceneAid: React.FC = () => {
	const gm: GG = {x: 760, y: 390, w: 400, h: 250, x0: 0, x1: 50, y0: 0, y1: 14};
	const gv: GG = {x: 1600, y: 780, w: 220, h: 120, x0: 0, x1: 50, y0: 0, y1: 45};
	return (
		<Overlay>
			<DimG at={K10.hyd} to={0.55}>
				<Note x={960} y={300} text="At half-equivalence, pH = pKa." size={72} color={TEAL} anchor="middle" at={K10.at - 4} />
				<Axes g={gm} at={K10.at + 10} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} />
				<Curve g={gm} fn={phEth} xs={XS25} color={ETH_C} at={K10.at + 14} dur={30} width={4} />
				<Caliper g={gm} full={25} half={12.5} at={K10.find} fold={K10.halve} fullLabel="equivalence" halfLabel="half" size={22} />
				<Drop g={gm} v={12.5} p={4.74} at={K10.read} color={ETH_C} toY />
				<Note x={960} y={720} text="weak acid curves" size={30} color={INK_SOFT} anchor="middle" at={K10.works} />
			</DimG>
			<Note x={880} y={860} text="H_3O^{+} and OH^{−} are the best conductors." size={58} color={INK} anchor="middle" at={K10.hyd} />
			<Axes g={gv} at={K10.hyd + 10} xTicks={[]} yTicks={[]} xLabel="" yLabel="" grid={false} />
			<Curve g={gv} fn={condHCl} xs={XC} color={HCL_C} at={K10.hyd + 14} dur={30} width={4} />
			{void K10.here}{void K10.cond}{void Lit}{void PINK}{void fine}{void EqLine}{void eq}{void KeptChip}
		</Overlay>
	);
};
