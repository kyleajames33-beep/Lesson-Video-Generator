// M6 C05 scenes 9 to 11: strong and weak bases (a lattice that falls apart; one ammonia example); limewater, low
// solubility is not weakness; the memory aid with its two dials.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog, rng} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {AMMONIA, BEAKER, SATURATED} from './assets';
import {
	AChip, ACID_INK, AMBER, AMBER_INK, Arrow, BASE_INK, CAT, Dial2, Dim, EqLine, Fade, Field, FieldLens, GREY_INK, INK, INK_SOFT, Ion, LiquidBeaker, MistakeX, Note, OHg, OpGlow, Overlay, PHChip,
	PicH, Ring, RuleCard, Sx, TEAL, clamp01, eSpan, eq, fitSize, lerp, natP, picW, smooth,
} from './parts';

// ---------- 9. Strong and weak bases ----------
const H9 = 'bases';
const K9 = cues(sc(H9), {same: 'Bases work the same', strong: 'A strong base', ionic: 'ionic solid', diss: 'When it dissolves', sep: 'separate completely', every: 'every formula unit', called: 'called dissociation', amm: 'Ammonia is a', weak: 'weak base', some: 'only some ammonia', take: 'take a proton', at: 'At zero point', thirteen: 'thirteen', eleven: 'eleven', calcium: 'Calcium, strontium', two: 'gives two'});
const L9 = {cx: 650, cy: 390, r: 175}, R9 = {cx: 1560, cy: 390, r: 175};
/** NaOH lattice (grey Na+, violet OH-) that falls apart into separate ions from `brk`. */
const Lattice: React.FC<{cx: number; cy: number; brk: number}> = ({cx, cy, brk}) => {
	const f = useCurrentFrame();
	const rr = React.useMemo(() => rng(4), []);
	const cells = React.useMemo(() => {
		const out: {x: number; y: number; tx: number; ty: number; na: boolean; ph: number}[] = [];
		for (let j = 0; j < 3; j++) for (let i = 0; i < 4; i++) {
			const x = cx + (i - 1.5) * 46, y = cy + (j - 1) * 46;
			const a = Math.atan2(y - cy, x - cx) + (rr() - 0.5) * 0.6, d = 70 + rr() * 70;
			out.push({x, y, tx: cx + Math.cos(a) * d * 1.3, ty: cy + Math.sin(a) * d, na: (i + j) % 2 === 0, ph: rr() * 6});
		}
		return out;
	}, [cx, cy]); // eslint-disable-line react-hooks/exhaustive-deps
	const p = smooth(clamp01((f - brk) / 50));
	return (
		<g>
			{cells.map((c, i) => {
				const wx = Math.sin(f * 0.04 + c.ph) * 5 * p, wy = Math.cos(f * 0.035 + c.ph) * 5 * p;
				const x = lerp(c.x, c.tx, p) + wx, y = lerp(c.y, c.ty, p) + wy;
				return c.na ? <Ion key={i} x={x} y={y} kind="+" r={19} label="Na^{+}" labelSize={14} grey={0.85} /> : <OHg key={i} x={x} y={y} s={1.45} />;
			})}
		</g>
	);
};
export const SceneBases: React.FC = () => {
	const f = useCurrentFrame();
	const PH = 260;
	const bw = picW(BEAKER, PH);
	const AH = 300, aw = picW(AMMONIA, AH);
	const e1 = eq(['NaOH(s)', '->', 'Na^{+}(aq)', '+', 'OH^{-}(aq)'], [0, 1, 2, 3, 4].map(i => K9.sep + 14 + i * 5));
	const e2 = eq(['NH_3(aq)', '+', 'H_2O(l)', '<=>', 'NH_4^{+}(aq)', '+', 'OH^{-}(aq)'], [0, 1, 2, 3, 4, 5, 6].map(i => K9.some + i * 5));
	const S1 = 48, S2 = Math.min(48, fitSize(e2, 820, 48));
	const allDim = 1 - 0.72 * prog(f, K9.calcium, 16);
	const stripDim = (at: number) => 1 - 0.65 * prog(f, at, 14);
	const e3 = eq(['Ca(OH)_2(s)', '->', 'Ca^{2+}(aq)', '+', '2OH^{-}(aq)'], [0, 1, 2, 3, 4].map(i => K9.calcium + 6 + i * 6));
	const S3 = 54, X3 = 960 - 0; // centred
	const two = eSpan(e3, 4, S3, X3, 'middle');
	const twoW = 30;
	return (
		<>
			<Heading text="Strong and weak bases" at={4} size={58} />
			<Overlay>
				<g opacity={allDim}>
					<LiquidBeaker x={110} y={230} h={PH} />
					<Sx x={110 + bw / 2} y={540} text="sodium hydroxide" size={30} color={INK} anchor="middle" hand at={K9.strong} />
					<Sx x={110 + bw / 2} y={580} text="0.10 mol/L" size={30} color={INK} anchor="middle" weight={700} at={K9.strong} />
					<FieldLens cx={L9.cx} cy={L9.cy} r={L9.r} at={K9.ionic - 10}>
						<Field cx={L9.cx} cy={L9.cy} r={L9.r} seed={41} acidFrac={0} sp={40} at={-1000} />
						<Lattice cx={L9.cx} cy={L9.cy} brk={K9.sep} />
					</FieldLens>
					<g opacity={stripDim(K9.weak)}>
						<OpGlow items={e1} i={1} size={S1} x={110} y={740} at={K9.called} len={50} />
						<EqLine items={e1} x={110} y={740} size={S1} />
					</g>
					<PicH p={AMMONIA} x={1080 - aw / 2} y={215} h={AH} />
					<Sx x={1080} y={560} text="ammonia solution" size={30} color={INK} anchor="middle" hand at={K9.amm} />
					<Sx x={1080} y={600} text="0.10 mol/L" size={30} color={INK} anchor="middle" weight={700} at={K9.amm} />
					<FieldLens cx={R9.cx} cy={R9.cy} r={R9.r} at={K9.weak - 6}>
						<Field cx={R9.cx} cy={R9.cy} r={R9.r} seed={43} kind="base" acidFrac={0.45} sp={46} s={1.0} at={-1000} examples={[{u: 0.0, v: 0.08, at: K9.take, ring: [K9.take - 4, K9.at + 20]}]} />
					</FieldLens>
					<g opacity={stripDim(K9.thirteen)}>
						<OpGlow items={e2} i={3} size={S2} x={990} y={740} at={K9.take + 20} len={50} color={AMBER} />
						<EqLine items={e2} x={990} y={740} size={S2} />
					</g>
					<PHChip x={110 + bw / 2} y={606} text="pH 13.0" anchor="middle" size={30} at={K9.thirteen} drop />
					<PHChip x={1080} y={626} text="pH 11.1" anchor="middle" size={30} at={K9.eleven} drop />
				</g>
				<Fade at={K9.calcium}>
					<rect x={140} y={830} width={1640} height={110} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				</Fade>
				<EqLine items={e3} x={X3} y={905} size={S3} anchor="middle" />
				<Ring cx={two.x1 + twoW / 2 - 20} cy={905 - S3 * 0.34} rx={24} ry={36} at={K9.two} color={AMBER} seed={5} />
				<Sx x={X3} y={1000} text="also Sr(OH)_2 and Ba(OH)_2: two OH^{-} each" size={32} color={INK_SOFT} anchor="middle" weight={600} at={K9.calcium + 30} />
				{void K9.same}{void K9.diss}{void K9.every}{void BASE_INK}{void natP}
			</Overlay>
		</>
	);
};

// ---------- 10. Low solubility is not weakness ----------
const H10 = 'solubility';
const K10 = cues(sc(H10), {lime: 'Limewater is', sat: 'saturated calcium', holds: 'holds as much', lower: 'lower pH', weak: 'hydroxide weak', no: 'No.', less: 'Less than two grams', diss: 'dissolves in a', rest: 'the rest sits', every: 'every bit', splits: 'splits completely', low: 'low solubility', not: 'not weakness', how: 'How much dissolves', comp: 'how completely it', diff: 'different questions'});
const L10 = {cx: 1150, cy: 420, r: 210};
export const SceneSolubility: React.FC = () => {
	const f = useCurrentFrame();
	const SX = 140, SY = 230, SH = 560;
	const sw = picW(SATURATED, SH);
	const [s1x, s1y] = natP(SATURATED, SX, SY, SH, 620, 1520), [s2x, s2y] = natP(SATURATED, SX, SY, SH, 1400, 1640);
	const [lqx, lqy] = natP(SATURATED, SX, SY, SH, 1150, 1000);
	const groups: [number, number][] = [[-0.45, -0.35], [0.35, -0.45], [0.05, 0.05], [-0.4, 0.42], [0.45, 0.35]];
	const sp = smooth(clamp01((f - K10.splits) / 40));
	return (
		<>
			<Heading text="Low solubility is not weakness" at={4} size={58} />
			<Overlay>
				<PicH p={SATURATED} x={SX} y={SY} h={SH} />
				<Sx x={SX + sw / 2} y={SY + SH + 70} text="limewater: saturated Ca(OH)_2" size={34} color={INK} anchor="middle" weight={700} at={K10.lime} />
				<Fade at={K10.lower} out={K10.no + 10}>
					<AChip x={1150} y={300} text="lower pH than 0.10 mol/L NaOH" size={34} color={INK_SOFT} hand={false} anchor="middle" at={K10.lower} />
					<Sx x={1150} y={460} text="weak?" size={72} color={AMBER_INK} anchor="middle" hand at={K10.weak} />
				</Fade>
				<Fade at={K10.diss - 6}>
					<path d={`M${lqx},${lqy} L${L10.cx - L10.r * 0.9},${L10.cy + L10.r * 0.3}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" />
					<circle cx={lqx} cy={lqy} r={16} fill="none" stroke={INK_SOFT} strokeWidth={3} />
				</Fade>
				<FieldLens cx={L10.cx} cy={L10.cy} r={L10.r} at={K10.diss - 6}>
					<Field cx={L10.cx} cy={L10.cy} r={L10.r} seed={53} acidFrac={0} sp={42} at={-1000} />
					{groups.map(([u, v], i) => {
						const x = L10.cx + u * L10.r, y = L10.cy + v * L10.r;
						const d = 22 + sp * 30;
						const wx = Math.sin(f * 0.04 + i) * 4, wy = Math.cos(f * 0.035 + i * 2) * 4;
						return (
							<g key={i}>
								<circle cx={x} cy={y} r={58} fill="#eef6fb" opacity={0.85} />
								<Ion x={x + wx} y={y + wy} kind="+" r={20} label="Ca^{2+}" labelSize={13} fill={CAT} />
								<OHg x={x - d + wx} y={y + d * 0.8 + wy} s={1.25} />
								<OHg x={x + d + wx} y={y + d * 0.8 - wy} s={1.25} />
							</g>
						);
					})}
				</FieldLens>
				<Ring cx={(s1x + s2x) / 2} cy={(s1y + s2y) / 2} rx={(s2x - s1x) / 2 + 30} ry={(s2y - s1y) / 2 + 26} at={K10.rest} color={AMBER} seed={7} />
				<Dim at={K10.low} to={0.35}><Note x={(s1x + s2x) / 2} y={s2y + 34} text="undissolved" size={32} color={AMBER_INK} anchor="middle" at={K10.rest + 8} /></Dim>
				<MistakeX x={1150} y={668} text="Ca(OH)_2 is weak: little dissolves" at={K10.low} cross={K10.not} note="low solubility, still strong" size={34} anchor="middle" />
				<RuleCard x={760} y={810} w={800} at={K10.how - 4} lh={68} lines={[
					{t: 'how much dissolves: little', at: K10.how, size: 38, lit: [K10.how, K10.comp]},
					{t: 'how completely it splits: completely', at: K10.comp, size: 38, lit: [K10.comp, K10.diff + 40]},
				]} />
				{void K10.sat}{void K10.holds}{void K10.less}{void K10.every}{void GREY_INK}{void ACID_INK}
			</Overlay>
		</>
	);
};

// ---------- 11. Memory aid ----------
const H11 = 'memory-aid';
const K11 = cues(sc(H11), {rem: 'what to remember', str: 'Strength is how', conc: 'Concentration is how', two: 'two separate dials', both: 'on both', keep: 'keep the concentration'});
export const SceneAid: React.FC = () => (
	<Overlay>
		<Sx x={140} y={330} text="Strength is how much it breaks up." size={76} color={TEAL} hand at={K11.str} />
		<Sx x={140} y={470} text="Concentration is how much you put in." size={76} color={INK} hand at={K11.conc} />
		<Dial2 x={1560} y={290} r={40} label="" val={() => 0.8} at={K11.two} />
		<Dial2 x={1560} y={440} r={40} label="" val={() => 0.3} at={K11.two + 6} />
		<Arrow x1={1612} y1={282} x2={1708} y2={350} at={K11.both} color={INK_SOFT} width={4} />
		<Arrow x1={1612} y1={432} x2={1708} y2={386} at={K11.both + 6} color={INK_SOFT} width={4} />
		<PHChip x={1720} y={342} text="pH" size={34} at={K11.both + 10} />
		<AChip x={960} y={640} text="compare strength at the same concentration" size={42} color={TEAL} hand={false} anchor="middle" at={K11.keep} />
		{void K11.rem}{void Note}
	</Overlay>
);
