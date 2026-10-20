// M6 C10 scenes 6 to 11: pKa on the two-sided ruler, reading pKa, strong and weak, Ka × Kb = Kw, ranking conjugate
// bases, and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {sc} from './common';
import {
	AChip, An, Arrow, BASE_INK, Card, DimG, EqLine, Fade, FixedBar, H3O, HA, INK, INK_SOFT, KaFrac, LensFrame, MistakeX, NAVY, Note, Overlay, P, PKRuler, PairBracket, SpanBracket, Strike, Sx, TEAL, WLine,
	eq, fitSize, mw, px, smooth,
} from './parts';
import type {PMark, PR} from './parts';

export const R0: PR = {x0: 470, x1: 1770, y: 560};
const HXP = 4.24, ETP = 4.74;
export const MARKS = (at: number, at2: number, lab?: [number, number]): PMark[] => [
	{p: HXP, at, name: 'HX', side: 'l', pLabel: lab ? {t: '4.24', at: lab[0]} : undefined},
	{p: ETP, at: at2, name: 'ethanoic acid', side: 'r', pLabel: lab ? {t: '4.74', at: lab[1]} : undefined, color: '#a97a14'},
];

// ---------- 6. pKa ----------
const S6 = 'pka';
const K6 = cues(sc(S6), {awk: 'awkward, full', tidies: 'tidies up hydronium', pka: 'use p K a', neg: 'the negative log', hx: 'four point two four', eth: 'four point seven four', dec: 'Decimal places follow', dp: 'two decimal places'});
export const ScenePka: React.FC = () => (
	<Overlay>
		<Sx x={R0.x0} y={250} text="pKa = −log Ka" size={60} color={NAVY} weight={800} at={K6.pka} />
		<Note x={R0.x0 + 520} y={246} text="like pH = −log[H_3O^{+}]" size={38} color={INK_SOFT} at={K6.neg} out={K6.hx} />
		<Note x={R0.x1} y={380} text="each tick is ten times the last" size={32} color={INK_SOFT} anchor="end" at={K6.awk + 20} out={K6.pka} />
		<PKRuler R={R0} at={K6.awk - 10} pkaAt={K6.pka + 20} marks={MARKS(K6.hx - 10, K6.eth - 6, [K6.hx + 20, K6.eth + 20])} />
		<WLine x={R0.x0} y={850} size={44} out={K6.eth - 10} items={P('pKa = −log(5.7 × 10^{−5})', K6.hx - 10, {t: '= 4.24', color: NAVY}, K6.hx + 10)} />
		<WLine x={R0.x0} y={850} size={44} out={K6.dec} items={P('pKa = −log(1.8 × 10^{−5})', K6.eth - 4, {t: '= 4.74', color: NAVY}, K6.eth + 14)} />
		<Note x={R0.x0} y={850} text="Ka 2 s.f. → pKa 2 d.p." size={40} color={INK_SOFT} hand={false} at={K6.dp} />
		{void K6.tidies}
	</Overlay>
);

// ---------- 7. Reading pKa ----------
const S7 = 'reading-pka';
const K7 = cues(sc(S7), {minus: 'The minus sign', smaller: 'a smaller p', lower: 'the lower p', factor: 'factor of ten', half: 'half a unit', three: 'about three, not', back: 'To go back', tenm: 'ten to the minus'});
export const SceneReadPka: React.FC = () => {
	const R = R0, y = R.y;
	const a = px(R, HXP), b = px(R, ETP);
	return (
		<Overlay>
			<Sx x={R.x0} y={250} text="pKa = −log Ka" size={48} color={NAVY} weight={800} at={-100} opacity={0.4} />
			<PKRuler R={R} at={-100} pkaAt={-100} marks={MARKS(-100, -100, [-100, -100])} />
			<Fade at={K7.smaller} out={K7.factor}>
				<Arrow x1={px(R, 11)} y1={y - 170} x2={px(R, 7)} y2={y - 170} at={K7.smaller} color={TEAL} width={6} />
				<Sx x={px(R, 11) + 20} y={y - 160} text="Ka bigger" size={34} color={TEAL} weight={700} at={K7.smaller} />
				<Arrow x1={px(R, 11)} y1={y + 150} x2={px(R, 7)} y2={y + 150} at={K7.smaller + 10} color={NAVY} width={6} />
				<Sx x={px(R, 11) + 20} y={y + 160} text="pKa smaller" size={34} color={NAVY} weight={700} at={K7.smaller + 10} />
				<Note x={px(R, 7) - 20} y={y - 210} text="stronger acid" size={40} color={INK} anchor="end" at={K7.lower} />
			</Fade>
			<Fade at={K7.factor}>
				<SpanBracket x1={px(R, 9)} x2={px(R, 10)} y={y + 140} text="× 10 in Ka" at={K7.factor} color={NAVY} size={32} />
			</Fade>
			<Fade at={K7.three - 30}>
				<path d={`M${a},${y - 118} L${a},${y - 130} L${b},${y - 130} L${b},${y - 118}`} fill="none" stroke={INK} strokeWidth={4} />
				<Sx x={(a + b) / 2} y={y - 150} text="0.50 → 10^{0.50} ≈ 3.2" size={34} color={INK} anchor="middle" weight={800} at={K7.three - 30} />
				<Sx x={(a + b) / 2 + 230} y={y - 150} text="5?" size={34} color={INK_SOFT} anchor="start" weight={700} at={K7.three} />
				<path d={`M${(a + b) / 2 + 222},${y - 176} L${(a + b) / 2 + 268},${y - 142}`} stroke="#c4432f" strokeWidth={5} strokeLinecap="round" opacity={prog(useCurrentFrame(), K7.three + 16, 8)} />
			</Fade>
			<MistakeX x={96} y={770} text="bigger pKa, stronger acid" at={K7.lower + 10} cross={K7.lower + 40} note="lower pKa, stronger" size={36} />
			<WLine x={1100} y={830} size={52} items={P('Ka = 10^{−pKa}', K7.tenm)} />
			{void K7.minus}{void K7.half}{void K7.back}
		</Overlay>
	);
};

// ---------- 8. Strong and weak ----------
const S8 = 'strong-weak';
const K8 = cues(sc(S8), {sep: 'separates strong acids', mol: 'molecules and ions', meas: 'can be measured', less: 'much less than', pos: 'positive p K', saw: 'As you saw', nomol: 'no molecules left', large: 'too large to', strong: 'as strong', mh: 'the measured hydronium', eq: 'equals the concentration', below: 'well below'});
export const SceneStrongWeak: React.FC = () => {
	const f = useCurrentFrame();
	const lift = smooth(prog(f, 0, 24));
	const R: PR = {...R0, y: R0.y - 140 * lift};
	const ZX = 110;
	const dim1 = prog(f, K8.saw, 14), dim2 = prog(f, K8.strong + 20, 14);
	return (
		<Overlay>
			<PKRuler R={R} at={-100} pkaAt={-100} strong={{at: K8.sep, x: ZX, pulse: K8.strong}} weak={{at: K8.mol}} />
			<Fade at={K8.sep + 10}>
				<Note x={(ZX + R.x0) / 2} y={R.y - 92} text="strong:" size={32} color={INK} anchor="middle" at={-1000} />
				<Note x={(ZX + R.x0) / 2} y={R.y + 100} text="too large to" size={30} color={INK} anchor="middle" at={-1000} />
				<Note x={(ZX + R.x0) / 2} y={R.y + 138} text="measure in water" size={30} color={INK} anchor="middle" at={-1000} />
			</Fade>
			<Note x={px(R, 7)} y={R.y - 92} text="weak: Ka < 1, pKa > 0" size={36} color={TEAL} anchor="middle" at={K8.less} />
			<g opacity={1 - 0.6 * dim1}>
				<LensFrame cx={px(R, 7)} cy={640} r={95} at={K8.mol}>
					<rect x={px(R, 7) - 95} y={545} width={190} height={190} fill="#eef6fb" />
					{([[-40, -40], [30, -50], [-55, 20], [20, 10], [45, 55], [-15, 60]] as [number, number][]).map(([dx, dy], i) => <HA key={i} x={px(R, 7) + dx} y={640 + dy} s={1.1} a={i} />)}
					<H3O x={px(R, 7) + 55} y={600} s={1.0} /><An x={px(R, 7) - 50} y={600} s={1.0} />
				</LensFrame>
			</g>
			<g opacity={1 - 0.6 * dim2}>
				<LensFrame cx={(ZX + R.x0) / 2} cy={690} r={95} at={K8.nomol}>
					<rect x={(ZX + R.x0) / 2 - 95} y={595} width={190} height={190} fill="#eef6fb" />
					{([[-45, -40], [35, -45], [-50, 30], [25, 20], [0, 65], [55, 60]] as [number, number][]).map(([dx, dy], i) => i % 2 ? <An key={i} x={(ZX + R.x0) / 2 + dx} y={690 + dy} s={1.0} /> : <H3O key={i} x={(ZX + R.x0) / 2 + dx} y={690 + dy} s={1.0} />)}
				</LensFrame>
			</g>
			<WLine x={R.x0} y={870} size={40} items={P('[H_3O^{+}] = c → strong, no Ka', K8.eq)} />
			<WLine x={R.x0} y={950} size={40} items={P('[H_3O^{+}] ≪ c → weak, calculate Ka', K8.below)} />
			{void K8.meas}{void K8.pos}{void K8.large}{void K8.mh}
		</Overlay>
	);
};

// ---------- 9. Conjugate bases: Ka × Kb = Kw ----------
const S9 = 'ka-kb-kw';
const K9 = cues(sc(S9), {conj: 'the conjugate base', eth: 'Ethanoate, the ion', kb: 'own K b', mult: 'Now multiply', cancel: 'cancel, leaving', kw: 'is K w', r1: 'one times ten', so: 'So K b for', r56: 'five point six'});
const NUM = '[H_3O^{+}][CH_3COO^{-}][CH_3COOH][OH^{-}]', DEN = '[CH_3COOH][CH_3COO^{-}]';
export const SceneKaKb: React.FC = () => {
	const f = useCurrentFrame();
	const e1 = eq(['CH_3COOH(aq)', '+', 'H_2O(l)', '<=>', 'H_3O^{+}(aq)', '+', 'CH_3COO^{-}(aq)'], 4, 4);
	const e2 = eq(['CH_3COO^{-}(aq)', '+', 'H_2O(l)', '<=>', 'CH_3COOH(aq)', '+', {t: 'OH^{-}(aq)', color: BASE_INK}], K9.conj, K9.conj);
	const es = Math.min(40, fitSize(e1, 1300, 40));
	const m = smooth(prog(f, K9.mult, 24));
	const FS = 44, PX = 96, PY = 560;
	const pre = 'Ka × Kb =';
	const pw = mw(pre, FS, false, 800) + FS * 0.4;
	const W = Math.max(mw(NUM, FS), mw(DEN, FS)) + FS * 0.4;
	const cx = PX + pw + W / 2;
	const nY = PY - FS * 0.32, dY = PY + FS * 1.02;
	return (
		<Overlay>
			<DimG at={K9.kw} to={0.3}>
				<EqLine items={e1} x={96} y={240} size={es} />
				<EqLine items={e2} x={96} y={330} size={es} />
				<PairBracket items={e1} i={0} j={6} size={es} x={96} y={240} at={K9.eth} label="conjugate pair" above />
			</DimG>
			<g opacity={1 - m} transform={`translate(${200 * m},0)`}>
				<KaFrac x={96} y={PY} prefix="Ka =" num="[H_3O^{+}][CH_3COO^{-}]" den="[CH_3COOH]" size={FS} at={K9.eth} />
			</g>
			<g opacity={1 - m} transform={`translate(${-200 * m},0)`}>
				<KaFrac x={1000} y={PY} prefix="Kb =" num="[CH_3COOH][OH^{-}]" den="[CH_3COO^{-}]" size={FS} at={K9.kb} />
			</g>
			<DimG at={K9.so} to={0.35}>
				<KaFrac x={PX} y={PY} prefix={pre} num={NUM} den={DEN} size={FS} at={K9.mult + 20} />
				<Strike text={NUM} sub="[CH_3COOH]" cx={cx} y={nY + FS * 0.34} size={FS} at={K9.cancel - 10} />
				<Strike text={DEN} sub="[CH_3COOH]" cx={cx} y={dY} size={FS} at={K9.cancel - 4} />
				<Strike text={NUM} sub="[CH_3COO^{-}]" cx={cx} y={nY + FS * 0.34} size={FS} at={K9.cancel + 8} color="#8f6bb8" />
				<Strike text={DEN} sub="[CH_3COO^{-}]" cx={cx} y={dY} size={FS} at={K9.cancel + 14} color="#8f6bb8" />
				<WLine x={PX + 60} y={730} size={44} items={P('= [H_3O^{+}][OH^{-}]', K9.cancel + 24, '= Kw = 1.0 × 10^{−14} (25 °C)', K9.kw)} />
			</DimG>
			<AChip x={1400} y={790} text="Ka × Kb = Kw" size={48} color={TEAL} hand={false} at={K9.r1 + 30} />
			<WLine x={96} y={920} size={42} items={P('Kb(CH_3COO^{-}) = 1.0 × 10^{−14} ÷ 1.8 × 10^{−5}', K9.so + 10, {t: '= 5.6 × 10^{−10}', color: BASE_INK}, K9.r56)} />
		</Overlay>
	);
};

// ---------- 10. Ranking conjugate bases ----------
const S10 = 'conjugate-ranking';
const K10 = cues(sc(S10), {fixed: 'is fixed', stronger: 'a stronger acid', weaker: 'weaker conjugate base', r18: 'one point eight', smaller: "smaller than ethanoate's", pair: 'conjugate pair', mult: "Multiplying ethanoic acid's"});
export const SceneRanking: React.FC = () => {
	const R: PR = {...R0, y: 300};
	return (
		<Overlay>
			<DimG at={K10.smaller} to={0.3}>
				<PKRuler R={R} at={-100} pkaAt={-100} marks={MARKS(-100, -100, [-100, -100])} />
				<FixedBar R={R} y={440} p={HXP} name="HX" at={K10.stronger} lit={{at: K10.weaker, out: K10.smaller}} />
				<FixedBar R={R} y={500} p={ETP} name="ethanoic acid" at={K10.stronger + 10} />
				<Note x={R.x0} y={590} text="Ka × Kb = 1.0 × 10^{−14}: a longer Ka bar means a shorter Kb bar" size={34} color={INK_SOFT} hand={false} at={K10.stronger + 24} />
			</DimG>
			<WLine x={R.x0} y={680} size={40} out={K10.smaller + 40} items={P('Kb(X^{-}) = 1.0 × 10^{−14} ÷ 5.7 × 10^{−5}', K10.r18 - 10, {t: '= 1.8 × 10^{−10}', color: BASE_INK}, K10.r18 + 20)} />
			<Card x={R.x0} y={720} w={780} h={170} at={K10.smaller + 30} stroke={TEAL} sw={3.5} />
			<Sx x={R.x0 + 34} y={790} text="acid: HX > ethanoic acid" size={40} color={TEAL} weight={700} at={K10.smaller + 34} />
			<Sx x={R.x0 + 34} y={856} text="conjugate base: ethanoate > X^{-}" size={40} color={BASE_INK} weight={700} at={K10.smaller + 44} />
			<MistakeX x={1290} y={740} text="Ka(CH_3COOH) × Kb(NH_3) = Kw" at={K10.mult} cross={K10.mult + 60} note="conjugate pair only" size={32} />
			{void K10.fixed}{void K10.pair}{void INK}
		</Overlay>
	);
};

// ---------- 11. Memory aid ----------
const S11 = 'memory-aid';
const K11 = cues(sc(S11), {here: "here's what to", golf: 'like golf', lower: 'Lower p K', kakb: 'times K b equals', so: 'so the stronger'});
export const SceneAid: React.FC = () => {
	const R: PR = {x0: 560, x1: 1360, y: 560};
	return (
		<Overlay>
			<DimG at={K11.kakb} to={0.7}>
				<Note x={960} y={300} text="pKa is like golf: the lowest score wins." size={72} color={TEAL} anchor="middle" at={K11.golf - 20} />
				<PKRuler R={R} at={K11.golf} pkaAt={K11.golf} kaLabels={false} every={2} size={22} marks={[
					{p: 3.85, at: K11.golf + 20, name: 'lowest', side: 'l', flag: K11.lower},
					{p: 9.21, at: K11.golf + 26, name: '', side: 'r', color: INK_SOFT},
				]} />
			</DimG>
			<Note x={960} y={790} text="Conjugate pair: Ka × Kb = Kw." size={52} color={INK} anchor="middle" at={K11.kakb} />
			<Note x={960} y={860} text="Stronger acid, weaker conjugate base." size={52} color={INK} anchor="middle" at={K11.so} />
			{void K11.here}{void SpanBracket}
		</Overlay>
	);
};
