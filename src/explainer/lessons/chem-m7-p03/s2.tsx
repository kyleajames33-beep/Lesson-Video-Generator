// M7 P03 scenes 7 to 13: a reliable comparison (gap against spread on the series graph), the error chain (each source
// to q or n to ΔH; the sooty cross-fade; one error that goes the other way), why extrapolation helps only a little here
// (the burn timeline), improvements that fix their cause (the fix matcher), validity, the risk table and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {ChainRow, GHeat, GSeg, Overlay, PenLink, PicH, RTable, Sx, TGraph, TaskLine, VCard, gx, gy} from '../chem-m6-p02/parts';
import type {GG} from '../chem-m6-p02/parts';
import {Crossed, Tag, TickMark} from '../chem-m7-c01/molecules';
import {PlateC, dimAt, vis} from '../chem-m7-c04a/parts';
import {RingAt} from '../chem-m7-c06/parts';
import {Wisps} from '../chem-m7-p01/parts';
import {BOTTLE, GLASSES, HOOD, SET, WASTE, sc} from './common';
import {ACOL, AlcChips, Escape, G6, GREENC, HAZ, HEAT, INK, INK_SOFT, NAVY, NBLUE, PCT, SeriesGraph, SetP, TEAL, VBrace, gpt, sp} from './parts';
import type {SetPos} from './parts';

// ---------- 7. A reliable comparison ----------
const K7 = cues(sc('reliable-comparison'), {are: 'Are they', two: 'two percent', here: "here's what", gap: 'the gap', bigger: 'far bigger', fluke: 'fluke'});
export const SceneReliable: React.FC = () => {
	const f = useCurrentFrame();
	const e = gpt(1, 688), p = gpt(2, 985);
	return (
		<Overlay>
			<TaskLine text="Are the results reliable?" at={K7.are} size={50} y={130} />
			<SeriesGraph at={-100} dataAt={-100} barGlow={K7.two} o={1} />
			<VCard x={1060} y={200} w={800} h={170} title="Reliability: repeats agree" titleAt={K7.are + 10} at={K7.are + 10} color={NAVY} dim={K7.bigger} lines={[{t: 'trials within about 2% of each mean', at: K7.two, size: 30}]} />
			<VBrace x={(e[0] + p[0]) / 2} y1={p[1]} y2={e[1]} text="gap about 300 kJ mol⁻¹" at={K7.bigger} color={NAVY} size={24} />
			<Sx x={e[0] + 20} y={e[1] + 44} text="spread about 25 kJ mol⁻¹" size={22} color={INK_SOFT} weight={700} at={K7.bigger + 20} />
			<Tag x={1060} y={460} text="gap much bigger than spread: the order is reliable" at={K7.bigger + 30} size={28} color={GREENC} fill="#e3f3e9" />
			<Tag x={1060} y={540} text="even though every value is low" at={K7.fluke + 20} size={24} />
			{void K7.here}{void K7.gap}{void G6}
		</Overlay>
	);
};

// ---------- 8. The error chain ----------
const K8 = cues(sc('error-chain'), {acc: 'accurate.', follow: 'Follow each', can: 'warms the', inc: 'incomplete', evap: 'evaporates', less: 'less negative.', not: 'Not every'});
const WS = [440, 170, 340];
export const SceneErrors: React.FC = () => {
	const f = useCurrentFrame();
	const S: SetPos = {cx: 290, top: 300, h: 460};
	const rows = [K8.can, K8.inc, K8.evap];
	const rowO = (i: number) => Math.max(rows[i + 1] === undefined ? 1 : dimAt(f, rows[i + 1], 0.45), prog(f, K8.less, 10)) * (1 - 0.3 * prog(f, K8.not, 12));
	const pulse = vis(f, K8.less, K8.less + 40);
	return (
		<Overlay>
			<Tag x={96} y={110} text="Accuracy: close to the data value? About half." at={K8.acc} size={30} color={NAVY} fill="#e7edf8" o={dimAt(f, K8.not, 0.4)} />
			<SetP P={S} p={SET.base} to={SET.sooty} swap={K8.inc + 6} />
			<Escape P={S} at={K8.can} out={K8.inc + 10} top={false} />
			<g opacity={vis(f, K8.evap, K8.less)}><Wisps x={sp(S, 'burner')[0]} y={sp(S, 'burner')[1] - 40} at={K8.evap} n={3} dots={false} /></g>
			{[0, 1, 2].map(i => {
				const cells = [
					[{lines: ['heat to can,', 'clamp and air'], at: K8.can}, {lines: ['q'], at: K8.can + 14, dir: 'down' as const, color: HEAT}, {lines: ['ΔH less', 'negative'], at: K8.can + 26}],
					[{lines: ['incomplete', 'combustion, soot'], at: K8.inc}, {lines: ['q'], at: K8.inc + 14, dir: 'down' as const, color: HEAT}, {lines: ['ΔH less', 'negative'], at: K8.inc + 26}],
					[{lines: ['evaporation', 'from the wick'], at: K8.evap}, {lines: ['n'], at: K8.evap + 14, dir: 'up' as const, color: NBLUE}, {lines: ['ΔH less', 'negative'], at: K8.evap + 26}],
				][i];
				return (
					<g key={i} opacity={Math.min(1, rowO(i))}>
						<ChainRow x={640} y={200 + i * 150} ws={WS} h={110} gap={50} at={rows[i]} cells={cells} size={28} />
						{pulse > 0.01 ? <rect x={640 + WS[0] + WS[1] + 100 - 8} y={200 + i * 150 - 8} width={WS[2] + 16} height={126} rx={20} fill="none" stroke={HEAT} strokeWidth={5} opacity={pulse} /> : null}
					</g>
				);
			})}
			<Tag x={640} y={660} text="systematic: pushes every trial the same way" at={K8.less + 10} size={28} color={HEAT} fill="#fbe2cc" o={dimAt(f, K8.not, 0.4)} />
			<ChainRow x={640} y={740} ws={WS} h={110} gap={50} at={K8.not} size={28} cells={[{lines: ['water recorded as', 'more than it was'], at: K8.not + 10, color: '#8a5a0c'}, {lines: ['q'], at: K8.not + 24, dir: 'up', color: '#8a5a0c'}, {lines: ['ΔH more', 'negative'], at: K8.not + 36, color: '#8a5a0c'}]} />
			{void K8.follow}
		</Overlay>
	);
};

// ---------- 9. Why extrapolation helps only a little ----------
const K9 = cues(sc('extrapolation-contrast'), {neut: 'In the neutralisation', why: 'Why not', inst: 'instant.', sev: 'several minutes', ext: 'Extending the', corr: 'corrects only', real: 'real fix'});
const GT: GG = {x: 140, y: 300, w: 420, h: 300, x0: 0, x1: 6, y0: 20, y1: 30};
const GB: GG = {x: 780, y: 260, w: 1000, h: 520, x0: 0, x1: 10, y0: 20, y1: 46};
const heatT = (t: number) => 22 + 20 * (1 - Math.exp(-t / 5)) / (1 - Math.exp(-7 / 5));
export const SceneExtrap: React.FC = () => {
	const f = useCurrentFrame();
	const pulse = 0.5 + 0.5 * Math.sin((f - K9.inst) * 0.25);
	const heat: [number, number][] = Array.from({length: 15}, (_, i) => [i * 0.5, heatT(i * 0.5)]);
	const cool: [number, number][] = [[7, 42], [8, 41.5], [9, 41.0], [10, 40.5]];
	return (
		<Overlay>
			<TaskLine text="Why not extrapolate here?" at={K9.why} size={50} y={130} />
			<g opacity={vis(f, K9.neut) * dimAt(f, K9.sev, 0.45)}>
				<TGraph g={GT} at={K9.neut} xTicks={[0, 2, 4, 6]} yTicks={[20, 25, 30]} xMinor={1} yMinor={2.5} xLabel="time (min)" yLabel="temperature (°C)" size={20} />
				<GSeg g={GT} a={[0.2, 21]} b={[0.4, 28.4]} at={K9.neut + 10} color={INK_SOFT} width={4} />
				<GSeg g={GT} a={[0.6, 28.2]} b={[6, 26.4]} at={K9.neut + 16} color={TEAL} width={4} />
				<g opacity={f >= K9.inst ? 0.6 + 0.4 * pulse : 1}><GSeg g={GT} a={[0.6, 28.2]} b={[0.2, 28.35]} at={K9.neut + 24} color={TEAL} dash="8 7" width={4} /></g>
				<Tag x={GT.x} y={GT.y + GT.h + 70} text="neutralisation: almost instant" at={K9.neut + 20} size={24} />
			</g>
			<g opacity={vis(f, K9.sev - 6)}>
				<TGraph g={GB} at={K9.sev - 6} xTicks={[0, 2, 4, 6, 8, 10]} yTicks={[20, 30, 40]} xMinor={1} yMinor={5} xLabel="time (min)" yLabel="temperature (°C)" size={22} />
				{heat.slice(1).map((p, i) => <GSeg key={i} g={GB} a={heat[i]} b={p} at={K9.sev + i * 3} dur={4} color={HEAT} width={5} />)}
				<GSeg g={GB} a={[7, 42]} b={cool[3]} at={K9.sev + 48} color={TEAL} width={5} />
				<GHeat g={GB} pts={heat.filter((_, i) => i % 2 === 1)} at={K9.sev + 30} />
				<path d={`M${gx(GB, 0)},${gy(GB, 23)} L${gx(GB, 7)},${gy(GB, 23)}`} stroke={HEAT} strokeWidth={4} opacity={vis(f, K9.sev + 10)} />
				<Sx x={gx(GB, 3.5)} y={gy(GB, 23) - 14} text="flame on: several minutes" size={26} color={HEAT} anchor="middle" hand weight={700} at={K9.sev + 10} />
			</g>
			<GSeg g={GB} a={[8, 41.5]} b={[7, 42]} at={K9.corr} color={TEAL} dash="8 7" width={4} />
			<g opacity={vis(f, K9.corr + 10)}>
				<path d={`M${gx(GB, 6.4)},${gy(GB, 44.5)} L${gx(GB, 6.4)},${gy(GB, 45)} L${gx(GB, 7)},${gy(GB, 45)} L${gx(GB, 7)},${gy(GB, 44.5)}`} fill="none" stroke={NAVY} strokeWidth={4} />
				<Tag x={gx(GB, 6.7)} y={gy(GB, 45) - 50} text="corrects only this" at={K9.corr + 10} size={26} color={NAVY} fill="#e7edf8" anchor="middle" />
			</g>
			<Tag x={960} y={930} text="real fix: stop the heat escaping" at={K9.real} size={32} color={GREENC} fill="#e3f3e9" anchor="middle" />
			{void K9.ext}
		</Overlay>
	);
};

// ---------- 10. Improvements that fix their cause ----------
const K10 = cues(sc('improvements'), {match: 'match each', shield: 'draught shield', close: 'close to the', trim: 'trim the wick', cap: 'cap on', rep: "Repeats can't", acc: 'accurate.'});
export const SceneFixes: React.FC = () => {
	const f = useCurrentFrame();
	const rows = [{t: 'heat to can, clamp, air → q ↓', y: 300}, {t: 'incomplete combustion, soot → q ↓', y: 500}, {t: 'evaporation from the wick → n ↑', y: 660}];
	const fixes = [{t: 'shield + lid', row: 0, dy: -30, at: K10.shield}, {t: 'flame close', row: 0, dy: 34, at: K10.close}, {t: 'short wick, clean base', row: 1, dy: 0, at: K10.trim}, {t: 'cap on, reweigh at once', row: 2, dy: 0, at: K10.cap}];
	return (
		<Overlay>
			<TaskLine text="Fix the cause" at={K10.match} size={54} y={130} />
			{rows.map((r, i) => <Tag key={i} x={96} y={r.y - 26} text={r.t} at={K10.match + i * 6} size={28} color={i === 2 ? NBLUE : HEAT} fill={i === 2 ? '#e3f0fa' : '#fbe2cc'} />)}
			{fixes.map((x, i) => {
				const y = rows[x.row].y + x.dy;
				return (
					<g key={i}>
						<PenLink a={[640, rows[x.row].y]} b={[840, y]} at={x.at} />
						<Tag x={850} y={y - 24} text={x.t} at={x.at + 6} size={28} color={GREENC} fill="#e3f3e9" />
					</g>
				);
			})}
			<SetP P={{cx: 1580, top: 230, h: 470}} p={SET.shield} at={K10.shield} />
			<Crossed x={96} y={800} text="more repeats → more accurate" at={K10.rep} cross={K10.acc} note="repeats improve reliability; the losses lower every trial" size={34} />
		</Overlay>
	);
};

// ---------- 11. Validity ----------
const K11 = cues(sc('validity'), {valid: 'valid,', rank: 'For ranking', only: 'only the alcohol', drift: 'drift', smaller: 'smaller than', each: 'each enthalpy', reaches: 'reaches'});
export const SceneValidity: React.FC = () => {
	const f = useCurrentFrame();
	const S: SetPos = {cx: 1560, top: 470, h: 420};
	return (
		<Overlay>
			<TaskLine text="Is it valid? Does it measure what you intended?" at={K11.valid} size={48} y={130} />
			<g opacity={dimAt(f, K11.each, 0.45)}>
				<Sx x={120} y={300} text="Ranking the alcohols: valid" size={40} color={GREENC} weight={800} at={K11.rank} />
				<TickMark x={720} y={290} at={K11.rank + 20} s={1.2} />
				<Sx x={120} y={350} text="one variable changed; similar losses" size={28} color={INK} weight={600} at={K11.only} />
			</g>
			<g opacity={vis(f, K11.drift, K11.each)}>
				{PCT.map((p, i) => <Sx key={i} x={1000 + i * 120} y={300} text={p} size={32} color={ACOL[i]} weight={800} at={-1000} />)}
				<Sx x={1000} y={345} text="drift smaller than the gaps: order holds" size={24} color={INK_SOFT} weight={700} at={K11.smaller} />
			</g>
			<Sx x={120} y={560} text="Each enthalpy value: less valid" size={40} color="#8a5a0c" weight={800} at={K11.each} />
			<Sx x={720} y={560} text="~" size={60} color="#8a5a0c" weight={800} at={K11.each + 10} />
			<Sx x={120} y={610} text="only the heat that reaches the water is measured" size={28} color={INK} weight={600} at={K11.reaches} />
			<g opacity={vis(f, K11.each)}><SetP P={S} /><Escape P={S} at={K11.reaches} /></g>
			<Sx x={120} y={960} text="Reliability: repeats agree.   Accuracy: close to the data value." size={26} color={INK_SOFT} weight={600} at={K11.valid + 20} />
		</Overlay>
	);
};

// ---------- 12. Risk assessment ----------
const K12 = cues(sc('risk-assessment'), {now: 'Now the risks', flam: 'flammable,', refill: 'never refill', toxic: 'also toxic', eyes: 'damage eyes', glasses: 'safety glasses', waste: 'organic waste', sink: 'the sink'});
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<Overlay>
			<Sx x={96} y={120} text="Risk assessment" size={54} color={INK} hand at={K12.now} />
			<RTable x={600} y={150} cols={[420, 320, 500]} head={['Hazard', 'Harm', 'Control']} at={K12.now} rowH={124} size={21} headSize={28} rows={[
				{at: K12.flam, cells: [['methanol, ethanol, propan-1-ol:', 'highly flammable (H225);', 'butan-1-ol: flammable (H226)'], ['fire; vapour can', 'reach a flame'], ['refill only when cold, away from', 'flames (station or fume cupboard);', 'cap to put it out; stock away']]},
				{at: K12.toxic, cells: [['methanol: toxic if swallowed,', 'inhaled or on skin (H301, H331,', 'H311); damages organs (H370)'], ['poisoning; damage to', 'eyesight and nerves'], ['small volumes; no skin contact;', 'ventilate; teacher fills burners']]},
				{at: K12.eyes, cells: [['propan-1-ol, butan-1-ol:', 'serious eye damage (H318)'], ['eye injury from', 'a splash'], 'safety glasses']},
				{at: K12.glasses + 30, cells: ['hot can and clamp', 'burns', 'let it cool before handling']},
				{at: K12.waste, cells: ['waste', ['flammable, harms', 'drains'], ['labelled organic waste', 'container; never the sink']]},
			]} />
			<g opacity={vis(f, K12.flam) * dimAt(f, K12.toxic, 0.45)}>
				<PlateC p={BOTTLE} cx={200} top={220} h={220} />
				<Sx x={200} y={470} text="alcohol stock" size={22} color={INK} anchor="middle" weight={700} at={-1000} />
				<g opacity={vis(f, K12.refill)}><PicH p={HOOD} x={300} y={210} h={250} /></g>
			</g>
			<g opacity={vis(f, K12.glasses) * dimAt(f, K12.waste, 0.5)}>
				<PlateC p={GLASSES} cx={300} top={540} h={90} />
				<Tag x={300} y={650} text="always" at={K12.glasses} size={22} anchor="middle" />
			</g>
			<g opacity={vis(f, K12.waste)}>
				<PlateC p={WASTE} cx={300} top={700} h={230} />
				<Sx x={300} y={860} text="Organic" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={300} y={884} text="waste" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<Tag x={1210} y={960} text="follow your school's risk assessment and each bottle's safety data sheet" at={K12.sink + 10} size={24} anchor="middle" />
			{void HAZ}
		</Overlay>
	);
};

// ---------- 13. Memory aid ----------
const K13 = cues(sc('memory-aid'), {two: 'Two phrases', water: 'Water in q', fuel: 'fuel in n:', shield: 'shield,', lid: 'lid,', close: 'close,', cap: 'cap.', each: 'Each one'});
export const SceneAid: React.FC = () => {
	const S: SetPos = {cx: 1520, top: 260, h: 620};
	const ring = [{k: 'shield' as const, at: K13.shield, rx: 50, ry: 120}, {k: 'lid' as const, at: K13.lid, rx: 110, ry: 30}, {k: 'flame' as const, at: K13.close, rx: 40, ry: 50}, {k: 'cap' as const, at: K13.cap, rx: 40, ry: 40}];
	const chips = [['shield', 'air currents'], ['lid', 'surface loss'], ['close', 'heat to the air'], ['cap', 'evaporation']];
	return (
		<Overlay>
			<TaskLine text="Water in q, fuel in n." at={K13.water} size={76} x={120} y={260} color={TEAL} />
			<Tag x={130} y={300} text="water's mass → q = m c ΔT" at={K13.water + 20} size={30} color={HEAT} fill="#fbe2cc" />
			<Tag x={130} y={360} text="fuel's mass lost → n = Δm ÷ M" at={K13.fuel + 20} size={30} color={NBLUE} fill="#e3f0fa" />
			<TaskLine text="Shield, lid, close, cap." at={K13.shield - 10} size={76} x={120} y={600} color={TEAL} />
			{chips.map((c, i) => <Tag key={i} x={130} y={640 + i * 64} text={`${c[0]}: ${c[1]}`} at={ring[i].at} size={28} color={GREENC} fill="#e3f3e9" />)}
			<SetP P={S} p={SET.shield} />
			{ring.map((r, i) => <RingAt key={i} c={sp(S, r.k)} rx={r.rx} ry={r.ry} at={r.at} color={GREENC} />)}
			{void K13.two}{void K13.each}{void AlcChips}
		</Overlay>
	);
};
