// M6 C09 scenes 6 to 10: ethanoic acid (step close to zero), hydrofluoric acid (step releases heat), ammonia (step
// takes energy in), heat does not measure strength, and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {sc} from './common';
import {PHMETER} from './assets';
import {
	AChip, BottleLabel, Card, CloseUp, DHBars, DimG, EOUT, EOUT_INK, EIN_INK, EqLine, Fade, INK, INK_SOFT, Ledger, MistakeX, Note, Overlay, PlateAt, ProtonHop, SpanBracket, Staircase, Sx, TEAL,
	WLine, P, BASE_INK, eSpan, eq, fitSize, morph, picW, smooth, vis,
} from './parts';
import {Chips3, LV_A, LV_B, LV_C, STAIR} from './s1';

// ---------- 6. Ethanoic acid: close to zero ----------
const S6 = 'ethanoic-zero';
const K6 = cues(sc(S6), {eth: 'For ethanoic acid', cancel: 'nearly cancel', repaid: 'exactly repaid', zero: 'close to zero', m56: 'minus fifty six', barely: "That's barely different", apart: 'hardly tell them'});
export const SceneEthanoic: React.FC = () => {
	const S = {x: 760, y: 300, k: 6.4, w: 920};
	const lu = (q: number) => 150 + 0 * q;
	return (
		<Overlay>
			<DimG at={K6.m56} to={0.25}>
				<Ledger x={160} y={430} bw={90} up={lu} down={q => 150 * (1 - 0.2 * (1 - prog(q, K6.cancel, 24)))} at={0} inL={{t: 'in', at: 0}} outL={{t: 'out', at: 0}} />
				<Chips3 x={130} y={680} at={0} lit={[{i: 1, at: K6.cancel}]} o={0.9} />
			</DimG>
			<Staircase x={S.x} y={S.y} k={S.k} w={S.w} at={K6.cancel + 20} s1={() => 1} s1At={K6.zero - 10} s2At={K6.cancel + 30} netAt={K6.m56}
				lvA={LV_A(K6.cancel + 24)} lvB={LV_B(K6.zero - 4)} lvC={LV_C(K6.cancel + 36)}
				s1L={[{t: '≈ +1 (close to zero)', at: K6.zero}]} s2L={[{t: '−57', at: K6.cancel + 40}]} netL={[{t: '≈ −56 kJ/mol', at: K6.m56 + 10}]} />
			<DHBars x={1150} y={780} k={2.3} bw={70} gap={60} at={K6.apart - 6} ref={K6.apart} axisLabel={false} size={26} bars={[
				{name: 'HCl', v: -57, at: K6.apart, label: '−57', color: TEAL},
				{name: 'ethanoic', v: -56, at: K6.apart + 8, label: '≈ −56', color: '#d9a43a'},
			]} />
			<Note x={1500} y={820} text="within foam" size={32} color={TEAL} at={K6.apart + 30} />
			<Note x={1500} y={860} text="cup error" size={32} color={TEAL} at={K6.apart + 34} />
			{void K6.eth}{void K6.repaid}{void K6.barely}
		</Overlay>
	);
};

// ---------- 7. Hydrofluoric acid: more heat ----------
const S7 = 'hf-more-heat';
const K7 = cues(sc(S7), {surprise: 'is the surprise', small: 'very small', crowd: 'crowd in tightly', more: 'more than it', releases: 'step releases', eleven: 'about eleven', m68: 'minus sixty eight', still: 'still a weak', depends: 'depends on more'});
export const SceneHF: React.FC = () => {
	const S = {x: 940, y: 300, k: 6.4, w: 840};
	const s1 = morph([[K7.releases, 1], [K7.releases + 30, -11]]);
	return (
		<Overlay>
			<DimG at={K7.releases} to={0.22}>
				<CloseUp cx={330} cy={400} brk={-100} wrap={K7.small} at={0} small />
				<Fade at={K7.small + 20}>
					<circle cx={600} cy={300} r={38} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
					<Sx x={600} y={378} text="larger anion" size={24} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				</Fade>
				<Ledger x={190} y={700} bw={90} up={() => 130} down={q => 130 + 100 * smooth(prog(q, K7.crowd, 40))} at={0} inL={{t: 'in', at: 0}} outL={{t: 'out', at: K7.crowd}} />
			</DimG>
			<Staircase x={S.x} y={S.y} k={S.k} w={S.w} at={0} s1={s1} s1At={0} s2At={0} netAt={K7.m68} refLine={{at: K7.m68}}
				lvA={LV_A(0)} lvB={LV_B(0)} lvC={LV_C(0)}
				s1L={[{t: '≈ +1', at: 0, out: K7.releases}, {t: 'step 1: ≈ −11', at: K7.eleven}]} s2L={[{t: '−57', at: 0}]} netL={[{t: '≈ −68 kJ/mol', at: K7.m68 + 10}]} />
			<AChip x={560} y={880} text="HF: weak (most molecules stay whole), but step 1 releases heat" size={30} color={INK} hand={false} at={K7.depends} />
			{void K7.surprise}{void K7.more}{void K7.still}{void EOUT}
		</Overlay>
	);
};

// ---------- 8. A weak base: less heat ----------
const S8 = 'weak-base-less';
const K8 = cues(sc(S8), {rule: 'follow the same', ammonia: 'with ammonia', m52: 'minus fifty two', here: 'Here we count', hydroxide: 'make hydroxide', ein: 'takes energy in', five: 'about five kilojoules', so: 'So minus fifty', less: 'less heat this'});
export const SceneWeakBase: React.FC = () => {
	const items = eq(['NH_3(aq)', '+', 'H_2O(l)', '<=>', 'NH_4^{+}(aq)', '+', {t: 'OH^{-}(aq)', color: BASE_INK}], K8.hydroxide);
	const es = fitSize(items, 1100, 42);
	const SX = 420, SY = 370;
	const w0 = eSpan(items, 0, es, SX), w2 = eSpan(items, 2, es, SX);
	return (
		<Overlay>
			<DimG at={K8.here} to={0.35}>
				<BottleLabel x={110} y={330} h={380} lines={['ammonia', 'solution']} at={K8.ammonia - 10} />
			</DimG>
			<AChip x={SX} y={210} text="HCl + NH_3: about −52 kJ per mol NH_3" size={36} color={TEAL} hand={false} at={K8.m52} out={K8.so} />
			<DimG at={K8.ein} to={0.3}>
				<EqLine items={items} x={SX} y={SY} size={es} />
				<ProtonHop a={[w2.cx, SY - es]} b={[w0.cx, SY - es]} at={K8.hydroxide + 10} dur={30} s={0.8} bow={-60} />
			</DimG>
			<Staircase x={760} y={600} k={6.4} w={1000} at={K8.hydroxide + 30} s1={() => 5} s1At={K8.ein} s2At={K8.hydroxide + 50} netAt={K8.so}
				lvA={[{t: 'NH_3(aq) + H_2O(l) + H^{+}(aq)', at: K8.hydroxide + 34}]} lvB={[{t: 'NH_4^{+}(aq) + OH^{-}(aq) + H^{+}(aq)', at: K8.ein + 6}]} lvC={[{t: 'NH_4^{+}(aq) + H_2O(l)', at: K8.hydroxide + 56}]}
				s1L={[{t: '≈ +5', at: K8.ein + 10}]} s2L={[{t: '−57', at: K8.hydroxide + 60}]} netL={[{t: '≈ −52 kJ/mol', at: K8.so + 10}]} />
			<AChip x={1240} y={720} text="step 1 +: less heat" size={32} color={EIN_INK} hand={false} at={K8.less} />
			{void K8.rule}{void K8.five}
		</Overlay>
	);
};

// ---------- 9. Heat does not measure strength ----------
const S9 = 'heat-not-strength';
const K9 = cues(sc(S9), {doesnt: "heat doesn't tell", meth: 'Methanoic acid is', ten: 'ten times stronger', m56: 'minus fifty six', hf: 'And hydrofluoric acid', so: 'So a value', fool: 'would fool you', ph: 'use pH at', tells: 'The heat tells'});
const AcidCard: React.FC<{x: number; name: string; ka: string; at: number; barAt: number}> = ({x, name, ka, at, barAt}) => {
	const f = useCurrentFrame();
	const y = 300, w = 620, h = 330;
	const g = smooth(prog(f, barAt, 26));
	return (
		<g>
			<Card x={x} y={y} w={w} h={h} at={at} />
			<Sx x={x + 36} y={y + 72} text={name} size={44} color={INK} weight={800} at={at} />
			<Sx x={x + 36} y={y + 140} text={ka} size={40} color={TEAL} weight={700} at={at + 8} />
			<Fade at={barAt - 2}>
				<line x1={x + 36} y1={y + 200} x2={x + 36} y2={y + 260} stroke={INK_SOFT} strokeWidth={3} />
				<rect x={x + 36} y={y + 210} width={56 * 7.6 * g} height={40} rx={10} fill="#d9a43a" opacity={0.88} />
				<Sx x={x + 36} y={y + 300} text="ΔH ≈ −56 kJ/mol" size={34} color={INK} weight={700} at={barAt + 16} />
			</Fade>
		</g>
	);
};
export const SceneNotStrength: React.FC = () => {
	const mh = 190, mw2 = picW(PHMETER, mh);
	return (
		<Overlay>
			<AcidCard x={200} name="methanoic acid" ka="Ka = 1.8 × 10^{−4}" at={K9.meth} barAt={K9.m56} />
			<AcidCard x={1100} name="ethanoic acid" ka="Ka = 1.8 × 10^{−5}" at={K9.meth + 10} barAt={K9.m56 + 6} />
			<SpanBracket x1={510} x2={1410} y={270} text="10 × stronger" at={K9.ten} up color={TEAL} size={34} />
			<DimG at={K9.ph} to={0.3}>
				<MistakeX x={200} y={720} text="more heat means a stronger acid" at={K9.hf} cross={K9.fool} note="heat shows step 1, not strength" size={34} />
			</DimG>
			<PlateAt p={PHMETER} x={1080} y={700} h={mh} at={K9.ph} />
			<Note x={1100 + mw2} y={780} text="strength: pH at equal concentration," size={32} color={TEAL} at={K9.ph + 10} />
			<Note x={1100 + mw2} y={830} text="or Ka (next video)" size={32} color={TEAL} at={K9.ph + 16} />
			{void K9.doesnt}{void K9.so}{void K9.tells}{void vis}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const S10 = 'memory-aid';
const K10 = cues(sc(S10), {here: "here's what to", same: 'Same last step', every: 'Every neutralisation can', first: 'adds a first', sign: 'its sign decides'});
export const SceneAid: React.FC = () => {
	const cyc = (f: number) => {
		const t = ((f - K10.same) / 150) % 1;
		const k = Math.max(0, f - K10.same) <= 0 ? 0 : t;
		const seg = Math.floor(k * 3), u = smooth(Math.min(1, (k * 3 - seg) * 2.5));
		const vals = [12, 0.6, -12];
		return vals[seg] + (vals[(seg + 1) % 3] - vals[seg]) * u;
	};
	return (
		<Overlay>
			<Note x={960} y={300} text="Same last step, different first step." size={78} color={TEAL} anchor="middle" at={K10.same} />
			<Staircase x={720} y={560} k={3.2} w={520} at={K10.same + 20} s1={cyc} s1At={K10.same + 20} s2At={K10.same + 20} lvA={[]} lvB={[]} lvC={[]}
				s1L={[{t: 'step 1: +, 0 or −', at: K10.first}]} s2L={[{t: '−57', at: K10.every}]} size={28} />
			<WLine x={600} y={930} size={48} items={P('ΔH = step 1 + (−57) kJ/mol', K10.first + 10)} />
			{void K10.here}{void K10.sign}{void EOUT_INK}
		</Overlay>
	);
};
