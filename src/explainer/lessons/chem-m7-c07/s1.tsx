// M7 C07 scenes 1 to 6: the hook (E10; litre for litre; energy and carbon), complete combustion balanced with the
// alcohol's own oxygen (the tally), per mole of fuel and the sign (methanol, 3/2 O2, ΔH negative), incomplete
// combustion (the spirit burner cross-fades to the sooty plate), where the numbers come from (q = mcΔT recalled with
// the methanol dataset) and the trend per mole (the series ladder and the bond ledger).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {Overlay, Sx, TaskLine, smooth} from '../chem-m6-c01/parts';
import {GCard, HeatOut, P, TempChip, WLine} from '../chem-m6-c03/parts';
import {Brace, Tag} from '../chem-m7-c01/molecules';
import type {V2} from '../chem-m7-c01/molecules';
import {CT, Mol2D, Plus, RxArrow, apt, cmol, dimAt, vis} from '../chem-m7-c04a/parts';
import {EqRow, Plate, RingAt, Tally, eqLay, ptOn} from '../chem-m7-c06/parts';
import {BARREL, BOTTLE, BURNER, Heading, sc} from './common';
import {ALC, Coef, GREENC, HEAT, HEAT_INK, INK, INK_SOFT, Ladder, NAVY, OCT, RED, TEAL, rowY, LD} from './parts';

const GREY = '#8a847a';
// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {e10: 'E10', eth: 'percent ethanol.', litre: 'Litre for litre', less: 'less energy', why: 'So why', burn: 'Burning an alcohol', energy: 'much energy', carbon: 'the carbon', what: 'So what'});
export const E10Bar: React.FC<{x: number; y: number; w: number; h: number; at: number; o?: number}> = ({x, y, w, h, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const g = smooth(prog(f, at + 4, 30)), c = smooth(prog(f, at + 30, 16));
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={12} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			<rect x={x + 4} y={y + 4} width={(w * 0.9 - 4) * g} height={h - 8} rx={8} fill={OCT} />
			<rect x={x + w * 0.9} y={y + 4} width={(w * 0.1 - 4) * c} height={h - 8} rx={8} fill={GREENC} />
		</g>
	);
};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const lab = dimAt(f, K1.carbon + 10, 0.4);
	const g = smooth(prog(f, K1.litre + 10, 30));
	return (
		<>
			<Heading text="What does burning an alcohol tell us about fuel choice?" at={4} size={52} />
			<Overlay>
				<Plate p={BOTTLE} cx={300} top={320} h={320} at={0} />
				<Sx x={300} y={690} text="ethanol" size={30} color={INK} anchor="middle" weight={700} at={6} opacity={lab} />
				<Plate p={BARREL} cx={1620} top={320} h={320} at={6} />
				<Sx x={1620} y={690} text="crude oil → petrol" size={30} color={INK} anchor="middle" weight={700} at={12} opacity={lab} />
				<Sx x={960} y={360} text="E10 petrol" size={30} color={INK} anchor="middle" weight={700} at={K1.e10} opacity={lab} />
				<E10Bar x={660} y={380} w={600} h={70} at={K1.e10} />
				<Tag x={960} y={470} text="E10: up to 10% ethanol" at={K1.eth} size={30} color={GREENC} fill="#e3f3e9" anchor="middle" o={lab} />
				<g opacity={vis(f, K1.litre) * lab}>
					<Sx x={690} y={640} text="1 L ethanol" size={28} color={INK} anchor="end" weight={700} at={-1000} />
					<rect x={710} y={612} width={354 * g} height={40} rx={8} fill={ALC} />
					<Sx x={690} y={710} text="1 L petrol" size={28} color={INK} anchor="end" weight={700} at={-1000} />
					<rect x={710} y={682} width={520 * g} height={40} rx={8} fill={OCT} />
					<Sx x={1250} y={640} text="less energy" size={26} color={INK_SOFT} weight={700} at={K1.less} />
				</g>
				<g opacity={vis(f, K1.energy)}>
					<path d="M940,800 l0,-46 m-13,13 l13,-13 l13,13" fill="none" stroke={HEAT} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
					<Tag x={970} y={762} text="energy" at={K1.energy} size={34} color={HEAT_INK} fill="#fbe2cc" />
				</g>
				<Tag x={300} y={232} text="carbon from?" at={K1.carbon} size={30} color={GREENC} fill="#e3f3e9" anchor="middle" />
				<Tag x={1620} y={232} text="carbon from?" at={K1.carbon + 6} size={30} color="#6b4a2b" fill="#efe4d6" anchor="middle" />
				{void K1.why}{void K1.burn}{void K1.what}
			</Overlay>
		</>
	);
};

// ---------- 2. Complete combustion ----------
const K2 = cues(sc('complete-combustion'), {start: 'Start with', comp: 'completely', bal: 'Balance carbon', co2: 'two C O two.', hyd: 'Then hydrogen', three: 'three waters.', now: 'Now oxygen', four: 'four on the right', seven: 'seven.', but: 'But ethanol', one: 'one oxygen', six: 'six more', o2: 'three O two.'});
export const ETOH = cmol([{l: 'H', u: 'H', d: 'H'}, {u: 'H', d: 'H', r: 'OH'}]);
export const SceneComplete: React.FC = () => {
	const f = useCurrentFrame();
	const Y = 420, S = 0.95, EX = 320;
	const o = apt(ETOH, ETOH.k['1r'], EX, Y, S), h = apt(ETOH, ETOH.k['1rH'], EX, Y, S);
	const ohC: V2 = [(o[0] + h[0]) / 2, o[1]];
	const ch = dimAt(f, K2.now, 0.35);
	const lx = 470, rx = 1350, ty = 640, lh = 76;
	const oy = ty + 2 * lh;
	const t = smooth(prog(f, K2.one + 10, 34));
	const chip: V2 = [ohC[0] + (lx - 330 - ohC[0]) * t, (Y + 50) + (oy - 30 - Y - 50) * t];
	return (
		<Overlay>
			<TaskLine text="Complete combustion" at={K2.start} size={54} y={130} />
			<Mol2D m={ETOH} x={EX} y={Y} s={S} at={K2.comp - 20} />
			<RingAt c={ohC} rx={70} ry={42} at={K2.comp} />
			<Plus x={600} y={Y} at={K2.comp} />
			<Coef x={672} y={Y} size={54} keys={[{t: '?', at: K2.comp}, {t: '3', at: K2.o2 + 6}]} />
			<CT x={710} y={Y + 19} text="O_2" size={54} at={K2.comp} />
			<RxArrow x1={830} x2={1030} y={Y} at={K2.comp + 6} />
			<rect x={1066} y={Y - 50} width={580} height={100} rx={16} fill="none" stroke="#9a948a" strokeWidth={3} opacity={vis(f, K2.comp + 10)} />
			<Coef x={1112} y={Y} size={54} keys={[{t: '?', at: K2.comp + 10}, {t: '2', at: K2.co2 + 6}]} />
			<CT x={1148} y={Y + 19} text="CO_2" size={54} at={K2.comp + 10} />
			<Plus x={1330} y={Y} at={K2.comp + 14} />
			<Coef x={1392} y={Y} size={54} keys={[{t: '?', at: K2.comp + 14}, {t: '3', at: K2.three + 6}]} />
			<CT x={1428} y={Y + 19} text="H_2O" size={54} at={K2.comp + 14} />
			<Tag x={960} y={520} text="complete combustion: plenty of O_2 → CO_2 + H_2O" at={K2.comp + 10} size={26} anchor="middle" o={dimAt(f, K2.bal, 0.5)} />
			<Tally x={240} lx={lx} rx={rx} y={ty} lh={lh} size={40} tickDx={240} rows={[
				{el: 'C', at: K2.bal, l: [{t: '2', at: K2.bal + 30}], r: [{t: '2', at: K2.co2}], tick: K2.co2 + 12, o: ch},
				{el: 'H', at: K2.hyd, l: [{t: '6', at: K2.hyd + 30}], r: [{t: '6', at: K2.three}], tick: K2.three + 12, o: ch},
				{el: 'O', at: K2.now, l: [{t: '?', at: K2.now}, {t: '1 + ?', at: K2.one + 40}, {t: '1 + 6 = 7', at: K2.six}], r: [{t: '4 + 3', at: K2.four}, {t: '4 + 3 = 7', at: K2.seven}, {t: '7', at: K2.o2}], tick: K2.o2 + 12},
			]} />
			{f >= K2.one ? <g opacity={vis(f, K2.one)}><Tag x={chip[0]} y={chip[1]} text="+1 from the OH" at={K2.one} size={28} color={RED} fill="#f9e1dc" /></g> : null}
			{void K2.but}{void NAVY}
		</Overlay>
	);
};

// ---------- 3. Per mole of fuel, and the sign ----------
const K3 = cues(sc('per-mole-sign'), {meth: 'Methanol works', half: 'one and a half', fine: "That's fine", mole: 'one mole', ent: 'enthalpy change', for: 'For methanol,', minus: 'minus seven', neg: "It's negative", rel: 'releases', mod: 'Module'});
export const SceneMole: React.FC = () => {
	const f = useCurrentFrame();
	const S = {cx: 780, y: 470, size: 58, len: 220};
	const left = [{t: 'CH_3OH', at: K3.meth}, {t: '+', at: K3.meth + 6}, {t: '3/2 O_2', at: K3.half}];
	const right = [{t: 'CO_2', at: K3.meth + 12}, {t: '+', at: K3.meth + 16}, {t: '2H_2O', at: K3.meth + 20}];
	const L = eqLay(left, right, S.size, S.len, S.cx);
	const sym = ['(l)', '', '(g)'], symR = ['(g)', '', '(l)'];
	const bk = dimAt(f, K3.minus, 0.35);
	return (
		<Overlay>
			<TaskLine text="Complete combustion" at={-100} size={54} y={130} />
			<CT x={1180} y={210} text="C_2H_5OH + 3O_2 → 2CO_2 + 3H_2O" size={32} anchor="middle" o={0.4} />
			<EqRow left={left} right={right} cx={S.cx} y={S.y} size={S.size} len={S.len} arrow={{at: K3.meth + 8}} />
			<Sx x={S.cx} y={330} text="O: 1 + 3 = 4  |  2 + 2 = 4" size={30} color={GREY} anchor="middle" weight={700} at={K3.half + 20} out={K3.fine + 50} />
			{sym.map((s, i) => (s ? <Sx key={'l' + i} x={L.lc[i]} y={548} text={s} size={28} color={GREY} anchor="middle" weight={600} at={K3.ent + i * 3} /> : null))}
			{symR.map((s, i) => (s ? <Sx key={'r' + i} x={L.rc[i]} y={548} text={s} size={28} color={GREY} anchor="middle" weight={600} at={K3.ent + 8 + i * 3} /> : null))}
			<Brace x1={L.lx[0] - 6} x2={L.lx[0] + L.wl[0] + 6} y={572} text="1 mol of fuel" at={K3.mole} color={NAVY} o={bk} />
			<Tag x={L.lc[0]} y={660} text="enthalpy of combustion: per mole of fuel" at={K3.mole + 20} size={26} color={NAVY} fill="#e7edf8" o={bk} />
			<Tag x={L.rc[2]} y={590} text="data values: liquid water" at={K3.ent + 20} size={22} o={bk} anchor="middle" />
			<CT x={L.x1 + 40} y={S.y + 18} text="ΔH = −726 kJ mol⁻¹" size={48} at={K3.minus} color={HEAT_INK} />
			<HeatOut at={K3.rel} pts={[[L.x0 + 80, S.y - 60, -1.9], [S.cx, S.y - 60, -1.57], [L.x1 - 80, S.y - 60, -1.2], [L.x0 + 160, S.y + 70, 1.9], [L.x1 - 160, S.y + 70, 1.2]]} />
			<Tag x={S.cx} y={800} text="heat out → ΔH negative (Module 5)" at={K3.rel + 10} size={32} color={HEAT_INK} fill="#fbe2cc" anchor="middle" />
			{void K3.for}{void K3.neg}{void K3.mod}
		</Overlay>
	);
};

// ---------- 4. Incomplete combustion ----------
const K4 = cues(sc('incomplete-combustion'), {if: 'If oxygen', inc: 'incomplete.', co: 'carbon monoxide,', toxic: 'toxic', soot: 'as soot,', solid: 'solid carbon.', see: 'You can see', yellow: 'yellow', black: 'black soot', lessc: 'Less carbon', lesse: 'less energy', so: 'So soot', ox: 'oxygen supply,'});
export const BN = {cx: 480, top: 240, h: 640};
export const SceneIncomplete: React.FC = () => {
	const f = useCurrentFrame();
	const fl = ptOn(BURNER.clean, BN.cx, BN.top, BN.h, 1117, 1268), base = ptOn(BURNER.clean, BN.cx, BN.top, BN.h, 1117, 1152);
	const sd = dimAt(f, K4.ox, 0.4);
	const L1 = [{t: 'C_2H_5OH', at: K4.co - 10}, {t: '+', at: K4.co - 6}, {t: '2O_2', at: K4.co - 4}], R1 = [{t: '2CO', at: K4.co, ring: '2CO', ringAt: K4.toxic - 4}, {t: '+', at: K4.co + 4}, {t: '3H_2O', at: K4.co + 6}];
	const L2 = [{t: 'C_2H_5OH', at: K4.soot - 10}, {t: '+', at: K4.soot - 6}, {t: 'O_2', at: K4.soot - 4}], R2 = [{t: '2C', at: K4.soot, ring: '2C', ringAt: K4.solid - 4, ringColor: '#3a3632'}, {t: '+', at: K4.soot + 4}, {t: '3H_2O', at: K4.soot + 6}];
	const E1 = eqLay(L1, R1, 36, 130, 1330), E2 = eqLay(L2, R2, 36, 130, 1330);
	const sh = 320 * (1 - 0.4 * smooth(prog(f, K4.lesse, 30)));
	return (
		<Overlay>
			<Plate p={BURNER.clean} to={BURNER.sooty} swap={K4.see + 10} cx={BN.cx} top={BN.top} h={BN.h} swapDur={30} />
			{f > K4.see + 20 ? Array.from({length: 9}, (_, k) => {
				const t = (((f - K4.see - 20) / 40 + k / 9) % 1);
				return <circle key={k} cx={fl[0] + Math.sin(k * 2.3) * 22 + Math.sin(t * 5 + k) * 6} cy={fl[1] - 6 - t * (fl[1] - base[1] - 2)} r={3 + (k % 3)} fill="#2e2a26" opacity={Math.sin(t * Math.PI) * 0.85} />;
			}) : null}
			<Tag x={880} y={240} text="incomplete: too little O_2" at={K4.inc} size={30} color={NAVY} fill="#e7edf8" />
			<g opacity={sd}>
				<EqRow left={L1} right={R1} cx={1330} y={390} size={36} len={130} arrow={{at: K4.co - 2}} />
				<Tag x={E1.rc[0]} y={428} text="toxic" at={K4.toxic} size={24} color={RED} fill="#f9e1dc" anchor="middle" />
				<EqRow left={L2} right={R2} cx={1330} y={540} size={36} len={130} arrow={{at: K4.soot - 2}} />
				<Tag x={E2.rc[0]} y={578} text="soot: solid carbon" at={K4.solid} size={24} color="#3a3632" fill="#e6e3de" anchor="middle" />
			</g>
			<Tag x={880} y={660} text="yellow, smoky flame; soot on the can" at={K4.yellow} size={26} o={dimAt(f, K4.lessc, 0.5)} />
			<g opacity={vis(f, K4.lesse - 6)}>
				<Sx x={880} y={760} text="energy released" size={24} color={INK_SOFT} weight={700} at={-1000} />
				<rect x={880} y={776} width={320} height={40} rx={8} fill="none" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 6" />
				<rect x={880} y={776} width={sh} height={40} rx={8} fill={HEAT} />
				<Sx x={1220} y={806} text="less energy" size={28} color={HEAT_INK} weight={800} at={K4.lesse + 20} />
			</g>
			<RingAt c={[fl[0], fl[1] - 4]} rx={74} ry={64} at={K4.ox} color={TEAL} />
			<Tag x={880} y={880} text="soot: O_2 couldn't keep up" at={K4.ox + 10} size={30} color={TEAL} fill="#dff2ef" />
			{void K4.if}{void K4.black}{void K4.so}
		</Overlay>
	);
};

// ---------- 5. Where the numbers come from ----------
const K5 = cues(sc('where-numbers-come-from'), {how: 'How do we', burn: 'Burn a weighed', zero: 'zero point', warmed: 'warmed', neut: 'From the neutralisation', q: 'q equals', water: ['the water', 1], eight: 'eight point', eleven: 'about eleven', careful: 'Careful measurements', half: 'about half', prac: 'The practical', rest: 'rest goes.'});
export const B5 = {cx: 300, top: 300, h: 520};
export const SceneNumbers: React.FC = () => {
	const f = useCurrentFrame();
	const th = ptOn(BURNER.clean, B5.cx, B5.top, B5.h, 1270, 262);
	const wx = 620, ws = 34, wy = [480, 560, 640, 720];
	const top = dimAt(f, K5.zero + 30, 0.55);
	return (
		<Overlay>
			<g opacity={top}><TaskLine text="Energy per gram of methanol (school can)" at={K5.how} size={46} y={130} /></g>
			<Plate p={BURNER.sooty} to={BURNER.clean} swap={0} cx={B5.cx} top={B5.top} h={B5.h} swapDur={20} />
			<TempChip x={th[0] + 20} y={th[1] - 20} from={21.5} to={41.5} at={K5.warmed - 10} rise={K5.warmed} dur={60} size={28} />
			<g opacity={top}><Sx x={wx} y={270} text="q = mcΔT" size={50} color={INK} weight={800} at={K5.q} /></g>
			<g opacity={dimAt(f, K5.eight + 20, 0.6)}>
				<GCard x={1080} y={180} w={780} lh={52} size={28} at={K5.burn} lines={[
					{t: 'water: 100.0 g, 21.5 °C → 41.5 °C', at: K5.warmed},
					{t: 'c = 4.18 J g⁻¹ °C⁻¹', at: K5.q + 10},
					{t: 'burner: 143.82 g → 143.08 g', at: K5.zero},
				]} />
			</g>
			<WLine x={wx} y={wy[0]} size={ws} dim={K5.water} items={P('methanol burnt = 143.82 − 143.08', K5.zero + 10, '= 0.74 g', K5.zero + 30)} />
			<WLine x={wx} y={wy[1]} size={ws} dim={K5.eleven} items={P('ΔT = 41.5 − 21.5', K5.water, '= 20.0 °C', K5.water + 16)} />
			<WLine x={wx} y={wy[2]} size={ws} dim={K5.careful} items={P('q = 100.0 × 4.18 × 20.0', K5.water + 30, '= 8360 J = 8.36 kJ', K5.eight)} />
			<WLine x={wx} y={wy[3]} size={ws} items={P('8.36 kJ ÷ 0.74 g = 11.3', K5.eleven, '→ 11 kJ g⁻¹ (2 s.f.)', K5.eleven + 20)} />
			<Tag x={1380} y={606} text="m = water, not fuel" at={K5.water + 10} size={24} o={dimAt(f, K5.eleven, 0.5)} />
			<Tag x={1380} y={666} text="keep the digits; round at the end" at={K5.eight + 20} size={22} o={dimAt(f, K5.careful, 0.5)} />
			<g opacity={vis(f, K5.careful)}>
				<rect x={wx} y={790} width={11.3 * 25 * smooth(prog(f, K5.careful, 20))} height={36} rx={8} fill={HEAT} />
				<rect x={wx} y={840} width={22.7 * 25} height={36} rx={8} fill="none" stroke={HEAT_INK} strokeWidth={3} strokeDasharray="8 6" />
				<rect x={wx} y={840} width={22.7 * 25 * smooth(prog(f, K5.careful + 10, 24))} height={36} rx={8} fill="#f4c69a" />
				<Sx x={wx + 11.3 * 25 + 14} y={818} text="this can: 11 kJ g⁻¹" size={24} color={HEAT_INK} weight={700} at={K5.careful} />
				<Sx x={wx + 22.7 * 25 + 14} y={868} text="careful value: about 22.7 kJ g⁻¹" size={24} color={INK} weight={700} at={K5.careful + 10} />
			</g>
			<Brace x1={wx} x2={wx + 11.3 * 25} y={890} text="about 50% reached the water" at={K5.half} color={HEAT_INK} size={26} />
			<Tag x={wx + 11.3 * 25 + 40} y={950} text="? next video: the practical" at={K5.rest - 20} size={26} color={NAVY} fill="#e7edf8" />
			{void K5.neut}{void K5.prac}{void GREY}
		</Overlay>
	);
};

// ---------- 6. The trend per mole ----------
const K6 = cues(sc('series-trend'), {now: 'Now the data', meth: 'Methanol,', eth: 'Then ethanol', prop: 'propan-one-ol', but: 'butan-one-ol,', s650: 'six hundred and fifty', why: 'Why so steady', step: 'Each step adds', brk: 'breaking', forms: 'forms one more', forming: 'Forming those', same: 'the same extra'});
const Chip: React.FC<{x: number; y: number; t: string; at: number; crack?: number; color?: string; o?: number}> = ({x, y, t, at, crack, color = INK, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const c = crack === undefined ? 0 : prog(f, crack, 10);
	return (
		<g opacity={v * (1 - 0.45 * c)}>
			<rect x={x - 88} y={y - 30} width={176} height={52} rx={12} fill="#fffdf8" stroke={color} strokeWidth={2.5} />
			<CT x={x} y={y + 6} text={t} size={30} color={color} anchor="middle" />
			{c > 0.01 ? <path d={`M${x - 10},${y - 30} l10,18 l-8,10 l10,24`} fill="none" stroke={INK_SOFT} strokeWidth={3} opacity={c} /> : null}
		</g>
	);
};
export const SceneTrend: React.FC = () => {
	const f = useCurrentFrame();
	const lift = smooth(prog(f, K6.step + 10, 30)) * (1 - smooth(prog(f, K6.same + 20, 30)));
	const from: V2 = [LD.x + 250, rowY(3) - 8], to: V2 = [200, 900];
	const cp: V2 = [from[0] + (to[0] - from[0]) * lift, from[1] + (to[1] - from[1]) * lift];
	return (
		<Overlay>
			<TaskLine text="Enthalpy of combustion along the series" at={K6.now} size={48} y={130} />
			<Ladder at={[K6.meth, K6.eth, K6.prop, K6.but]} incAt={K6.s650} incOut={K6.same + 10} />
			<g opacity={vis(f, K6.s650 + 30)}>
				<path d={`M1600,${rowY(1) - 30} l16,0 L1616,${rowY(3) + 12} l-16,0`} fill="none" stroke={NAVY} strokeWidth={4} />
				<Sx x={1632} y={rowY(2) - 10} text="about 650 kJ mol⁻¹" size={26} color={NAVY} weight={800} at={-1000} />
				<Sx x={1632} y={rowY(2) + 24} text="per CH_2" size={26} color={NAVY} weight={800} at={-1000} />
			</g>
			{lift > 0.01 ? <g><rect x={cp[0] - 40} y={cp[1] - 28} width={80} height={44} rx={10} fill="#bfe6df" /><CT x={cp[0]} y={cp[1] + 6} text="CH_2" size={32} anchor="middle" color={TEAL} /></g> : null}
			<g opacity={dimAt(f, K6.same, 0.5)}>
				<Sx x={560} y={795} text="energy in" size={24} color={INK_SOFT} anchor="middle" weight={700} at={K6.brk} />
				<path d="M560,808 l0,30 m-10,-10 l10,10 l10,-10" fill="none" stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" opacity={vis(f, K6.brk)} />
				<Chip x={380} y={890} t="2 C–H" at={K6.brk} crack={K6.brk + 20} />
				<Chip x={575} y={890} t="1 C–C" at={K6.brk + 8} crack={K6.brk + 28} />
				<Chip x={770} y={890} t="1.5 O=O" at={K6.brk + 16} crack={K6.brk + 36} color={RED} />
				<Sx x={575} y={960} text="bonds broken" size={24} color={INK_SOFT} anchor="middle" weight={700} at={K6.brk + 20} />
				<Chip x={1020} y={890} t="+1 CO_2" at={K6.forms} />
				<Chip x={1210} y={890} t="+1 H_2O" at={K6.forms + 10} />
				<Sx x={1115} y={960} text="bonds formed" size={24} color={INK_SOFT} anchor="middle" weight={700} at={K6.forms + 10} />
				<path d="M1115,840 l0,-76 m-16,16 l16,-16 l16,16" fill="none" stroke={HEAT} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" opacity={vis(f, K6.forms + 16)} />
				<Sx x={1145} y={790} text="energy out (more)" size={26} color={HEAT_INK} weight={800} at={K6.forming} />
			</g>
			<Tag x={1340} y={872} text="net: about 650 kJ mol⁻¹ out" at={K6.same} size={30} color={HEAT_INK} fill="#fbe2cc" />
			{void K6.prop}{void K6.why}{void ALC}
		</Overlay>
	);
};
