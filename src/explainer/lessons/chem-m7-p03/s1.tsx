// M7 P03 scenes 1 to 6: the hook (about half, and a fair comparison anyway), the set-up and why each part is there
// (labels on the plate; heat rises into the base; the shield cross-fade turns the side arrows back; the lid), the
// method (the card, the pour, the balance and thermometer readouts), the variables (pen links to the plate; the loss
// sketch), the calculation (water in q, fuel in n) and comparing the range (the table and the series graph).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {CupB, GCard, Overlay, P, PenLink, PourCyl, Sx, TRead, TaskLine, WLine, cupW, smooth} from '../chem-m6-p02/parts';
import {AnswerChip, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, dimAt, vis} from '../chem-m7-c04a/parts';
import {Leader, Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {Wisps} from '../chem-m7-p01/parts';
import {BAL, Heading, SET, sc} from './common';
import {ACOL, AFILL, ALCS, AlcChips, Bounce, Escape, GREENC, HEAT, INK, INK_SOFT, MEANT, NAVY, PCT, Rise, SeriesGraph, SetP, TRIALS, gpt, sp} from './parts';
import type {SetPos} from './parts';

const GREY = '#8a847a';
const fmt = (v: number) => v.toFixed(1) + ' °C';
/** The balance plate with its readout over the display. */
export const Balance: React.FC<{cx: number; top: number; h: number; at: number; text: (f: number) => string; o?: number; pulse?: number}> = ({cx, top, h, at, text, o = 1, pulse}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const d = ptOn(BAL, cx, top, h, 712, 1375), k = h / 1376;
	const size = Math.max(18, 150 * k);
	return <g opacity={v}><Plate p={BAL} cx={cx} top={top} h={h} /><TRead x={d[0] - size * 2.6} y={d[1] - size * 0.78} text={text} at={-1000} size={size} sample="151.64 g" pulse={pulse} /></g>;
};

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {last: 'In the last', half: 'about half', normal: "That's normal", how: 'So how', rel: 'reliably', goes: 'goes?'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const S: SetPos = {cx: 640, top: 250, h: 600};
	const th = sp(S, 'thermo');
	const st = dimAt(f, K1.goes, 0.4);
	return (
		<>
			<Heading text="Half the energy, and a fair comparison anyway." at={K1.how} size={54} />
			<Overlay>
				<SetP P={S} at={0} />
				<TRead x={th[0] + 20} y={th[1] - 20} text={() => '42.4 °C'} at={6} size={28} />
				<g opacity={vis(f, K1.half - 20) * st}>
					<rect x={1060} y={380} width={11 * 25} height={38} rx={8} fill={HEAT} />
					<rect x={1060} y={430} width={22.7 * 25} height={38} rx={8} fill="#f4c69a" />
					<Sx x={1060 + 11 * 25 + 14} y={409} text="measured: 11 kJ g⁻¹" size={24} color={INK} weight={700} at={-1000} />
					<Sx x={1060 + 22.7 * 25 + 14} y={459} text="careful: 22.7 kJ g⁻¹" size={24} color={INK} weight={700} at={-1000} />
					<Sx x={1060} y={520} text="about 50% reached the water (C07)" size={26} color={HEAT} hand weight={700} at={K1.half} />
				</g>
				<AlcChips x={1060} y={640} at={K1.rel} dir="col" size={28} />
				<Escape P={S} at={K1.goes} />
				<Tag x={sp(S, 'wallR')[0] + 70} y={sp(S, 'wallR')[1] - 30} text="?" at={K1.goes + 6} size={40} color={HEAT} fill="#fbe2cc" />
				{void K1.last}{void K1.normal}
			</Overlay>
		</>
	);
};

// ---------- 2. The set-up ----------
const K2 = cues(sc('setup'), {here: "Here's the", spirit: 'spirit burner', above: 'Above it', close: 'close to', base: 'through the base', metal: 'metal lets', shield: 'draught shield', lid: 'a lid'});
export const S2: SetPos = {cx: 640, top: 230, h: 680};
export const SceneSetup: React.FC = () => {
	const f = useCurrentFrame();
	const S = S2;
	const F = sp(S, 'flame'), B = sp(S, 'base'), bur = sp(S, 'burner'), lid = sp(S, 'lid'), mat = sp(S, 'mat');
	const dim = (a: number) => dimAt(f, a, 0.35);
	return (
		<Overlay>
			<TaskLine text="The set-up" at={K2.here} size={54} y={130} />
			<SetP P={S} to={SET.shield} swap={K2.shield} />
			<g opacity={dim(K2.close)}>
				<Leader a={[1040, bur[1] + 6]} b={[bur[0] + 40, bur[1]]} at={K2.spirit} />
				<Tag x={1040} y={bur[1] - 16} text="spirit burner: lamp with a wick" at={K2.spirit} size={28} color={NAVY} fill="#e7edf8" />
			</g>
			<g opacity={vis(f, K2.close, K2.shield)}>
				<path d={`M${F[0] + 60},${F[1] - 34} l10,0 L${F[0] + 70},${B[1] + 10} l-10,0`} fill="none" stroke={NAVY} strokeWidth={4} />
				<Tag x={1040} y={B[1] + 30} text="flame close to the can" at={K2.close} size={28} color={NAVY} fill="#e7edf8" />
			</g>
			<Rise P={S} at={K2.base} out={K2.shield + 40} />
			<g opacity={vis(f, K2.metal - 10, K2.lid)}>
				<Tag x={1040} y={B[1] - 120} text="metal: lets heat in" at={K2.metal} size={28} color={HEAT} fill="#fbe2cc" />
				<g opacity={vis(f, K2.metal + 10, K2.shield)}>
					<CupB x={1560} y={300} h={210} o={0.55} />
					<Tag x={1560 + cupW(210) / 2} y={530} text="foam: kept heat in (M6)" at={K2.metal + 10} size={22} anchor="middle" />
				</g>
			</g>
			<Bounce P={S} at={K2.shield + 20} />
			<g opacity={dim(K2.lid)}><Tag x={1040} y={F[1] - 20} text="shield: blocks air currents" at={K2.shield + 10} size={30} color={GREENC} fill="#e3f3e9" o={1} /></g>
			<RingAt c={lid} rx={110} ry={30} at={K2.lid} color={GREENC} />
			<Tag x={1040} y={lid[1] - 30} text="lid: less heat lost from the surface" at={K2.lid + 8} size={30} color={GREENC} fill="#e3f3e9" />
			<Tag x={mat[0] + 30} y={mat[1] - 10} text="heatproof mat" at={K2.shield + 30} size={20} />
			{void K2.above}
		</Overlay>
	);
};

// ---------- 3. The method ----------
const K3 = cues(sc('method'), {ml: 'two hundred millilitres', grams: 'two hundred grams', cap: 'its cap', start: 'starting temperature', light: 'Light it', twenty: 'twenty degrees', capb: 'Cap the burner', highest: 'highest', reweigh: 'Reweigh', why: 'Why the cap', evap: 'evaporates'});
export const SceneMethod: React.FC = () => {
	const f = useCurrentFrame();
	const S: SetPos = {cx: 470, top: 260, h: 560};
	const th = sp(S, 'thermo'), lid = sp(S, 'lid');
	const temp = (fr: number) => {
		if (fr < K3.twenty) return fmt(22.4);
		if (fr < K3.highest) return fmt(22.4 + 19.5 * smooth(prog(fr, K3.twenty, K3.capb - K3.twenty)));
		return fmt(41.9 + 0.5 * smooth(prog(fr, K3.highest, 30)));
	};
	const bal = (fr: number) => (fr < K3.reweigh ? '151.64 g' : '150.24 g');
	const steps: {t: string; at: number}[] = [
		{t: '1  200 mL of water (or weigh it): 200.0 g', at: K3.ml},
		{t: '2  weigh the burner with its cap', at: K3.cap},
		{t: '3  starting temperature', at: K3.start},
		{t: '4  heat to almost a 20 °C rise; stir', at: K3.twenty},
		{t: '5  cap it, stir, highest temperature', at: K3.highest},
		{t: '6  reweigh at once, cap on', at: K3.reweigh},
	];
	return (
		<Overlay>
			<TaskLine text="The method" at={0} size={54} y={130} />
			<SetP P={S} p={SET.shield} />
			<PourCyl x={820} y={230} h={300} at={K3.ml + 6} to={[lid[0] + 230, lid[1] - 170]} ang={-62} stream={[lid[0] + 30, lid[1] - 20]} />
			<TRead x={th[0] + 20} y={th[1] - 20} text={temp} at={K3.start - 6} size={28} pulse={K3.highest + 30} />
			<Balance cx={820} top={760} h={200} at={K3.cap} text={bal} pulse={K3.reweigh} />
			<Tag x={sp(S, 'flame')[0] + 80} y={sp(S, 'flame')[1] - 40} text="cap on: flame out" at={K3.capb} out={K3.reweigh} size={22} />
			{steps.map((s, i) => {
				const nx = steps[i + 1];
				const keep = i >= 4;
				const o = nx && !keep ? dimAt(f, nx.at, 0.35) : 1;
				return <g key={i} opacity={o}><Sx x={1080} y={250 + i * 70} text={s.t} size={30} color={INK} weight={600} at={s.at} /></g>;
			})}
			<Tag x={1110} y={680} text="rise = 42.4 − 22.4 = 20.0 °C" at={K3.highest + 30} size={24} />
			<g opacity={vis(f, K3.evap, K3.evap + 90)}>
				<Wisps x={820} y={790} at={K3.evap} n={3} dots={false} />
				<Tag x={1110} y={760} text="cap off: mass lost, no heat" at={K3.evap} size={26} color={HAZ_} fill="#f6e2d3" />
			</g>
			{void K3.grams}{void K3.light}{void K3.why}
		</Overlay>
	);
};
const HAZ_ = '#b5502b';

// ---------- 4. The variables ----------
const K4 = cues(sc('variables'), {alc: 'only the alcohol', meas: 'You measure', same: 'the same:', water: "water's mass", can: 'the can,', flame: "flame's distance", shield: 'shield and lid', rise: 'twenty degree rise', why: 'Why the same', lost: 'heat lost'});
export const SceneVariables: React.FC = () => {
	const f = useCurrentFrame();
	const S: SetPos = {cx: 470, top: 250, h: 600};
	const items: {t: string; at: number; to: V2}[] = [
		{t: 'water 200.0 g', at: K4.water, to: sp(S, 'water')},
		{t: 'same can', at: K4.can, to: sp(S, 'wallR')},
		{t: 'flame distance', at: K4.flame, to: [sp(S, 'flame')[0], sp(S, 'flame')[1] - 40]},
		{t: 'shield and lid', at: K4.shield, to: sp(S, 'lid')},
		{t: 'rise 20.0 °C', at: K4.rise, to: sp(S, 'thermo')},
	];
	const dimC = dimAt(f, K4.lost, 0.45);
	return (
		<Overlay>
			<TaskLine text="A fair comparison" at={0} size={54} y={130} />
			<SetP P={S} p={SET.shield} />
			<Sx x={1000} y={230} text="Independent: the alcohol" size={34} color={NAVY} weight={800} at={K4.alc} opacity={dimAt(f, K4.meas, 0.5)} />
			<AlcChips x={1000} y={250} at={K4.alc + 10} size={22} o={dimAt(f, K4.meas, 0.5)} />
			<Sx x={1000} y={360} text="Dependent: ΔHc (from ΔT and mass lost)" size={30} color={INK} weight={700} at={K4.meas} opacity={dimAt(f, K4.same, 0.5)} />
			<Sx x={1000} y={430} text="Controlled:" size={34} color={GREENC} weight={800} at={K4.same} />
			{items.map((it, i) => {
				const y = 480 + i * 50;
				const last = i === items.length - 1;
				const o = last ? 1 : dimC;
				return (
					<g key={i} opacity={o}>
						<Sx x={1030} y={y} text={it.t} size={28} color={INK} weight={600} at={it.at} />
						<PenLink a={[1020, y - 10]} b={it.to} at={it.at + 4} out={items[i + 1]?.at ?? K4.lost} />
					</g>
				);
			})}
			<g opacity={vis(f, K4.lost - 20)}>
				<line x1={1000} y1={990} x2={1500} y2={990} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="8 6" />
				<Sx x={1510} y={998} text="room" size={22} color={INK_SOFT} weight={700} at={-1000} />
				{[0, 1, 2].map(i => {
					const x = 1060 + i * 150, h = 50 + i * 40;
					return (
						<g key={i}>
							<rect x={x} y={990 - h} width={80} height={h} rx={6} fill="#cfe3f0" stroke="#4f86ad" strokeWidth={2} />
							<path d={`M${x + 84},${990 - h + 10} l${20 + i * 18},-10`} stroke={HEAT} strokeWidth={4 + i} strokeLinecap="round" opacity={prog(f, K4.lost + i * 8, 10)} />
						</g>
					);
				})}
				<Tag x={1700} y={840} text="hotter water loses heat faster" at={K4.lost} size={24} color={HEAT} fill="#fbe2cc" anchor="end" />
			</g>
			{void K4.why}
		</Overlay>
	);
};

// ---------- 5. The calculation ----------
const K5 = cues(sc('calculate'), {first: 'first methanol', rose: 'twenty point zero', m: 'm the mass', sixteen: 'sixteen point', lost: 'burner lost', n: 'zero point zero four', so: 'So delta', minus: 'minus three', same: 'Same steps', fuel: 'fuel burnt'});
export const SceneCalc: React.FC = () => {
	const f = useCurrentFrame();
	const wx = 430, ws = 32, wy = [500, 570, 640, 710, 780];
	const top = dimAt(f, K5.rose, 0.5);
	return (
		<Overlay>
			<g opacity={top}><TaskLine text="Find ΔHc of methanol (trial 1)" at={K5.first} size={48} y={130} /></g>
			<SetP P={{cx: 230, top: 300, h: 420}} p={SET.shield} />
			<g opacity={top}><CT x={430} y={240} text="CH_3OH(l) + 3/2 O_2(g) → CO_2(g) + 2H_2O(l)" size={30} color={GREY} /></g>
			<g opacity={dimAt(f, K5.minus, 0.55)}>
				<GCard x={1150} y={150} w={720} lh={48} size={26} at={K5.first + 10} lines={[
					{t: 'water: 200.0 g, 22.4 °C → 42.4 °C', at: K5.first + 10},
					{t: 'c = 4.18 J g⁻¹ °C⁻¹', at: K5.first + 16},
					{t: 'burner: 151.64 g → 150.24 g', at: K5.first + 22},
					{t: 'M(CH₃OH) = 32.04 g mol⁻¹', at: K5.first + 28},
				]} />
			</g>
			<WLine x={wx} y={wy[0]} size={ws} dim={K5.lost} items={P('ΔT = 42.4 − 22.4', K5.rose, '= 20.0 °C', K5.rose + 14)} />
			<WLine x={wx} y={wy[1]} size={ws} dim={K5.lost} items={P('q = m(water) c ΔT = 200.0 × 4.18 × 20.0', K5.m, '= 16 720 J = 16.72 kJ', K5.sixteen)} />
			<WLine x={wx} y={wy[2]} size={ws} dim={K5.so} items={P('Δm = 151.64 − 150.24', K5.lost, '= 1.40 g', K5.lost + 20)} />
			<WLine x={wx} y={wy[3]} size={ws} items={P('n = 1.40 ÷ 32.04', K5.n - 10, '= 0.043695 mol', K5.n)} />
			<WLine x={wx} y={wy[4]} size={ws} items={P('ΔHc = −q ÷ n = −16.72 ÷ 0.043695 = −382.65', K5.so, '→ −383 kJ mol⁻¹ (3 s.f.)', K5.minus)} />
			<Tag x={1480} y={518} text="m = water, not fuel" at={K5.m + 6} size={26} color={NAVY} fill="#e7edf8" />
			<Tag x={1480} y={590} text="keep the digits; round at the end" at={K5.sixteen + 14} size={22} o={dimAt(f, K5.so, 0.5)} />
			<Tag x={1480} y={660} text="initial − final: a positive mass" at={K5.lost + 24} size={22} o={dimAt(f, K5.so, 0.5)} />
			<AnswerChip x={wx} y={830} text="ΔHc = −383 kJ mol⁻¹" at={K5.minus + 30} size={36} />
			<Tag x={wx} y={930} text="neutralisation: n of water  |  here: n of fuel" at={K5.fuel} size={26} color={TEAL_} fill="#dff2ef" />
			{void K5.same}
		</Overlay>
	);
};
const TEAL_ = '#0d6b52';

// ---------- 6. Comparing the range ----------
const K6 = cues(sc('compare-range'), {three: 'three trials', meth: 'Methanol,', eth: 'Ethanol,', prop: 'Propan-one-ol,', but: 'Butan-one-ol,', neg: 'more negative', half: 'about half'});
export const TableR: React.FC<{at: number[]; trialO?: number; y?: number}> = ({at, trialO = 1, y = 210}) => (
	<g>
		<Sx x={1360} y={y} text="trials (kJ mol⁻¹)" size={24} color={INK_SOFT} anchor="middle" hand weight={700} at={at[0] - 10} opacity={trialO} />
		<Sx x={1740} y={y} text="mean" size={24} color={INK_SOFT} anchor="middle" hand weight={700} at={at[0] - 10} />
		{ALCS.map((n, i) => {
			const yy = y + 70 + i * 74;
			return (
				<g key={i}>
					<Sx x={1000} y={yy} text={n} size={26} color={ACOL[i]} weight={800} at={at[i]} />
					<Sx x={1360} y={yy} text={TRIALS[i].join(', ') + (i === 3 ? ' (× 10³)' : '')} size={24} color={INK} anchor="middle" weight={600} at={at[i] + 4} opacity={trialO} />
					<Sx x={1740} y={yy} text={MEANT[i]} size={26} color={INK} anchor="middle" weight={800} at={at[i] + 8} />
				</g>
			);
		})}
	</g>
);
export const SceneRange: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<TaskLine text="Three trials each: the means" at={K6.three} size={50} y={130} />
			<TableR at={[K6.meth, K6.eth, K6.prop, K6.but]} trialO={dimAt(f, K6.half, 0.3)} />
			<SeriesGraph at={K6.neg} dataAt={K6.half} />
			<g opacity={vis(f, K6.half + 20)}>
				{PCT.map((p, i) => <Sx key={i} x={1000 + i * 120} y={650} text={p} size={34} color={ACOL[i]} weight={800} at={-1000} />)}
				<Sx x={1000} y={700} text="of the data value" size={26} color={INK_SOFT} weight={700} at={-1000} />
			</g>
			{void gpt}{void AFILL}
		</Overlay>
	);
};
