// M6 C08 scenes 6 to 10: when the check fails; a weak base (the same table with Kb); through pOH to pH; strong or
// weak first; the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {
	AChip, AMBER, AMBER_INK, BASE, BASE_INK, BottleLabel, DimG, EqLine, Fade, GCard, GateIcon, INK, INK_SOFT, IceRows, KeptChip, MistakeX, Note, Overlay, P, PROTON_INK, ProtonHop, Sx, TEAL,
	TaskLine, WLine, XRuler, eSpan, eq, fitSize, mw,
} from './parts';
import type {EItem, IceR} from './parts';
import {B8, TASK_PH} from './s1';

// ---------- 6. When the check fails ----------
const S6 = 'check-fails';
const K6 = cues(sc(S6), {short: 'The shortcut', hf: 'Hydrofluoric acid', bigger: 'much bigger K', z100: 'zero point one zero zero', eight: 'about eight percent', over: "That's over five", solve: 'solve the full', quad: 'quadratic formula', most: 'Most HSC questions', show: 'show the check'});
export const SceneCheckFails: React.FC = () => {
	const RX = 200, RY = 520, RW = 1100;
	return (
		<>
			<Heading text="When the check fails" at={4} size={58} />
			<Overlay>
				<DimG at={K6.eight + 30} to={0.4}>
					<AChip x={96} y={250} text="HF: 0.100 mol/L, Ka = 6.8 × 10^{−4}" size={40} color={INK} hand={false} at={K6.hf} />
				</DimG>
				<XRuler x={RX} y={RY} w={RW} h={34} frac={0.082} at={K6.z100} sliverAt={K6.eight - 20} grow={K6.eight - 20} five={K6.z100 + 20} fiveLabel="5%" over={K6.eight + 10} size={34} />
				<Sx x={RX + RW} y={RY - 18} text="c = 0.100" size={34} color={INK} anchor="end" weight={700} at={K6.z100 + 8} />
				<Sx x={RX} y={RY + 96} text="x ÷ c = 8.2%: over 5%" size={40} color={AMBER_INK} weight={800} at={K6.eight + 14} />
				<MistakeX x={RX} y={680} text="small Ka, so always drop x" at={K6.over} cross={K6.over + 30} note="x must be small next to c" size={36} />
				<DimG at={K6.show} to={0.4}>
					<Sx x={RX} y={890} text="x^{2} / (0.100 − x) = 6.8 × 10^{−4}: keep the x" size={40} color={INK_SOFT} weight={700} at={K6.solve} />
				</DimG>
				<Fade at={K6.show}>
					<rect x={1360} y={470} width={470} height={130} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={4} transform="rotate(-2 1595 535)" />
					<Sx x={1595} y={530} text="x ÷ c × 100% < 5%" size={40} color={TEAL} anchor="middle" weight={800} at={K6.show} />
					<Sx x={1595} y={580} text="✓ or ✗" size={36} color={TEAL} anchor="middle" weight={800} at={K6.show + 6} />
				</Fade>
				{void K6.short}{void K6.bigger}{void K6.quad}{void K6.most}
			</Overlay>
		</>
	);
};

// ---------- 7. A weak base: the same table with Kb ----------
const S7 = 'weak-base';
const K7 = cues(sc(S7), {weak: 'Weak bases work', kb: 'with K b', amm: 'Ammonia takes protons', hyd: 'ammonium and hydroxide', little: 'only a little', for: 'For zero point', kb2: 'with K b one', table: 'the table is', down: 'the ammonia goes', up: 'each go up', drop: 'Drop the x', root: 'square root of', r19: 'one point nine times', under: 'under one percent', passes: 'the check passes'});
export const NH3_EQ = (at: number, ohAt: number): EItem[] => eq(['NH_3(aq)', '+', 'H_2O(l)', '<=>', 'NH_4^{+}(aq)', '+', {t: 'OH^{-}(aq)', color: BASE_INK}], [at, at, at, at, at, at, ohAt], at);
export const nh3Geom = (items: EItem[]) => {
	const s = Math.min(42, fitSize(items, 1100, 42));
	const cols = [0, 4, 6].map(i => eSpan(items, i, s, B8.strip.x).cx);
	return {s, cols, xR: eSpan(items, 6, s, B8.strip.x).x2 + 40};
};
export const NH3Card: React.FC<{at?: [number, number]}> = ({at = [-100, -100]}) => (
	<GCard x={B8.card.x} y={B8.card.y} w={B8.card.w} lh={B8.card.lh} size={B8.card.s} at={at[0] - 6} lines={[{t: 'NH_3: 0.200 mol/L', at: at[0]}, {t: 'Kb = 1.8 × 10^{−5} (25 °C)', at: at[1]}]} />
);
const KB_A = 'Kb = [NH_4^{+}][OH^{-}] / [NH_3] = x^{2} / (0.200', KB_B = ' − x', KB_C = ')';
export const SceneWeakBase: React.FC = () => {
	const f = useCurrentFrame();
	const items = NH3_EQ(K7.weak + 10, K7.hyd);
	const g = nh3Geom(items);
	const I = B8.ice;
	const t = K7.table;
	const rows: IceR[] = [
		{cells: [{t: '0.200', at: t + 6}, {t: '0', at: t + 12}, {t: '0', at: t + 16}], dim: [K7.drop + 30]},
		{cells: [{t: '−x', at: K7.down + 20, color: '#c4432f'}, {t: '+x', at: K7.up - 10, color: '#1f8a5b'}, {t: '+x', at: K7.up - 4, color: '#1f8a5b'}], dim: [K7.drop + 30]},
		{cells: [{t: '0.200 − x', at: K7.up + 14}, {t: 'x', at: K7.up + 20}, {t: 'x', at: K7.up + 26, color: BASE_INK}]},
	];
	const w0 = eSpan(items, 0, g.s, B8.strip.x), w2 = eSpan(items, 2, g.s, B8.strip.x);
	const X = 96, S = 40, Y1 = 770, Y2 = 860;
	const aW = mw(KB_A, S), bW = mw(KB_B, S);
	const strike = prog(f, K7.drop, 12);
	const done = K7.drop + 30;
	const l2 = P('x = √(1.8 × 10^{−5} × 0.200) = 1.897 × 10^{−3}', K7.root, {t: '→ 1.9 × 10^{−3} mol/L', color: BASE_INK}, K7.r19);
	const l2x = X + mw('x = √(1.8 × 10^{−5} × 0.200) = 1.897 × 10^{−3}', S) + S * 0.35;
	return (
		<Overlay>
			<TaskLine text={TASK_PH} at={2} size={B8.task.s} />
			<DimG at={done} to={0.4}>
				<NH3Card at={[K7.for, K7.kb2]} />
				<BottleLabel x={1500} y={330} h={400} lines={['ammonia', 'solution', '0.200 mol/L']} at={K7.amm - 10} />
			</DimG>
			<DimG at={done} to={0.45}>
				<EqLine items={items} x={B8.strip.x} y={B8.strip.y} size={g.s} />
			</DimG>
			<ProtonHop a={[w2.cx, B8.strip.y - g.s]} b={[w0.cx, B8.strip.y - g.s]} at={K7.hyd - 20} dur={30} s={0.8} bow={-60} />
			<IceRows x={I.x} xR={g.xR} y={I.y} rh={I.rh} cols={g.cols} rows={rows} at={t - 10} unit={{at: t}} />
			<DimG at={K7.r19} to={0.35}>
				<Sx x={X} y={Y1} text={KB_A} size={S} color={INK} weight={700} at={K7.up + 34} />
				<Sx x={X + aW} y={Y1} text={KB_B} size={S} color={strike > 0.5 ? INK_SOFT : INK} weight={700} at={K7.up + 34} opacity={1 - 0.4 * strike} />
				<path d={`M${X + aW + 6},${Y1 - S * 0.3} L${X + aW + bW},${Y1 - S * 0.36}`} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" opacity={strike} />
				<Sx x={X + aW + bW} y={Y1} text={KB_C} size={S} color={INK} weight={700} at={K7.up + 34} />
				<Note x={X + aW + bW + 40} y={Y1} text="drop the x: c − x ≈ c" size={34} color={TEAL} at={K7.drop + 8} />
			</DimG>
			<WLine x={X} y={Y2} size={S} items={l2} />
			<Note x={l2x + 10} y={Y2 + 56} text="x = [OH^{-}]" size={40} color={BASE_INK} at={K7.r19 + 30} />
			<XRuler x={1450} y={830} w={360} h={18} frac={0.0095} at={K7.under - 10} sliverAt={K7.under - 6} five={K7.under - 4} size={28} />
			<Sx x={1450} y={900} text="x ÷ c = 0.95% ✓" size={34} color={TEAL} weight={800} at={K7.under + 4} />
			{void K7.kb}{void K7.little}{void K7.passes}{void PROTON_INK}{void BASE}
		</Overlay>
	);
};

// ---------- 8. Weak base: through pOH to pH ----------
const S8 = 'weak-base-ph';
const K8 = cues(sc(S8), {but: 'But this time', hyd: 'is the hydroxide', so: 'So as in', take: 'take the pOH', r272: 'two point seven two', then: 'Then the pH', r1128: 'eleven point two eight', writing: 'Writing two point', slip: 'the slip to'});
export const SceneWeakBasePh: React.FC = () => {
	const items = NH3_EQ(-100, -100);
	const g = nh3Geom(items);
	return (
		<Overlay>
			<TaskLine text={TASK_PH} at={-100} size={B8.task.s} />
			<DimG at={-100} to={0.4}>
				<EqLine items={items} x={B8.strip.x} y={B8.strip.y} size={g.s} />
			</DimG>
			<KeptChip x={96} y={440} text="x = [OH^{-}] = 1.9 × 10^{−3} mol/L" at={-100} pulse={K8.hyd} color={BASE_INK} size={40} />
			<WLine x={96} y={620} size={46} dim={K8.r1128} items={P('pOH = −log(1.897 × 10^{−3})', K8.take, {t: '= 2.72', color: BASE_INK}, K8.r272)} />
			<WLine x={96} y={720} size={46} items={P('pH = 14.00 − 2.72', K8.then + 10, {t: '= 11.28', color: TEAL}, K8.r1128)} />
			<KeptChip x={1220} y={560} text="pH = 11.28" at={K8.r1128 + 24} color={TEAL} size={46} />
			<MistakeX x={1220} y={700} text="pH = 2.72" at={K8.writing} cross={K8.slip + 10} note="that's the pOH; a base has pH above 7" size={38} />
			{void K8.but}{void K8.so}
		</Overlay>
	);
};

// ---------- 9. Strong or weak first ----------
const S9 = 'strong-or-weak';
const K9 = cues(sc(S9), {every: 'every pH question', strong: 'Is it strong', ions: 'the ions come', weak: 'Is it weak', little: 'only a little', need: 'you need K', ice: 'the ICE table', kav: 'K a value', telling: 'usually telling you'});
export const SceneStrongWeak: React.FC = () => {
	const f = useCurrentFrame();
	const lS = prog(f, K9.strong, 14), lW = prog(f, K9.weak, 14);
	return (
		<Overlay>
			<GateIcon cx={880} cy={220} r={44} text="Strong or weak?" at={K9.every} size={56} />
			<Fade at={K9.strong}>
				<path d="M850,262 L520,420" stroke={TEAL} strokeWidth={5} fill="none" strokeLinecap="round" />
				<rect x={110} y={430} width={800} height={260} rx={22} fill="#fffdf8" stroke={TEAL} strokeWidth={4} opacity={lS} />
				<Sx x={140} y={500} text="strong:" size={40} color={TEAL} weight={800} at={K9.strong} />
				<Sx x={140} y={560} text="[H_3O^{+}] = c (or [OH^{-}] from c)" size={38} color={INK} weight={700} at={K9.strong + 8} />
				<Sx x={140} y={650} text="HNO_3: [H_3O^{+}] = 0.025 mol/L" size={30} color={INK_SOFT} weight={600} at={K9.ions} />
			</Fade>
			<Fade at={K9.weak}>
				<path d="M910,262 L1240,420" stroke={AMBER} strokeWidth={5} fill="none" strokeLinecap="round" />
				<rect x={1010} y={430} width={800} height={260} rx={22} fill="#fffdf8" stroke={AMBER} strokeWidth={4} opacity={lW} />
				<Sx x={1040} y={500} text="weak:" size={40} color={AMBER_INK} weight={800} at={K9.weak} />
				<Sx x={1040} y={560} text="Ka or Kb, ICE table," size={38} color={INK} weight={700} at={K9.need} />
				<Sx x={1040} y={612} text="x = √(K × c), check < 5%" size={38} color={INK} weight={700} at={K9.ice} />
				<Sx x={1040} y={668} text="E row: 0.150 − x | x | x" size={30} color={INK_SOFT} weight={600} at={K9.ice + 10} />
			</Fade>
			<AChip x={1040} y={730} text="Ka given → weak" size={40} color={AMBER_INK} hand={false} at={K9.kav} />
			{void K9.little}{void K9.telling}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const S10 = 'memory-aid';
const K10 = cues(sc(S10), {here: "So here's what", strong: 'Strong or weak first', weak: 'For a weak acid', sq: 'square root of', check: 'then check that', base: 'for a weak base', x: 'x is the hydroxide', finish: 'finish with fourteen'});
export const SceneAid: React.FC = () => (
	<>
		<Heading text="Remember" at={4} size={58} />
		<Overlay>
			<DimG at={K10.sq} to={0.6}>
				<Note x={120} y={330} text="Strong or weak first." size={80} color={TEAL} at={K10.strong} />
			</DimG>
			<DimG at={K10.base} to={0.6}>
				<Note x={120} y={520} text="Weak: x ≈ √(Ka × c), then check x < 5% of c." size={62} color={INK} at={K10.sq - 20} />
				<XRuler x={140} y={580} w={520} h={20} frac={0.0093} at={K10.check} sliverAt={K10.check + 6} five={K10.check + 10} size={26} />
			</DimG>
			<Note x={120} y={790} text="Weak base: x = [OH^{-}] → pOH → pH." size={62} color={INK} at={K10.base} />
			{void K10.here}{void K10.weak}{void K10.x}{void K10.finish}
		</Overlay>
	</>
);
