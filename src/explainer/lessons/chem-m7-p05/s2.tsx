// M7 P05 scenes 7 to 12: two limits (the ladder's unnumbered limit band, the greyed region, the hatched losses and three
// loss chips), reliable results (results table, class dot strip, spread and difference brackets, aim tick), accurate
// and valid (accuracy card, wet-mass flag, validity card with three evaluation questions, narrowed aim), identify (three
// check chips, the distillation plate, the crossed sniff), the risk table (one current row, then the full table held)
// and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {Overlay, RTable, Sx, TaskLine, VCard} from '../chem-m6-p02/parts';
import {Crossed, Tag, TickMark} from '../chem-m7-c01/molecules';
import {PlateC, dimAt, vis} from '../chem-m7-c04a/parts';
import {Plate, RingAt, ptOn} from '../chem-m7-c06/parts';
import {DISTIL, DRY, FP, FUNNEL, GLASSES, GLOVES, HOOD, WASTE, sc} from './common';
import {BalR, DotStrip, GREENC, INK, INK_SOFT, Ladder, NAVY, Note, R11, R21, TERRA, WetFlag, dx, ladY} from './parts';
import type {LadderP, Strip} from './parts';
import {BAND} from './parts';

/** Square bracket over (dir -1) or under (dir 1) x1..x2 at y with a label. */
export const HBr: React.FC<{x1: number; x2: number; y: number; text: string; at: number; color?: string; size?: number; dir?: 1 | -1; o?: number}> = ({x1, x2, y, text, at, color = INK_SOFT, size = 24, dir = -1, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const d = 12 * dir;
	return (
		<g opacity={v}>
			<DrawPath d={`M${x1},${y - d} L${x1},${y} L${x2},${y} L${x2},${y - d}`} at={at} dur={12} color={color} width={4} />
			<Sx x={(x1 + x2) / 2} y={y + (dir < 0 ? -14 : size + 10)} text={text} size={size} color={color} anchor="middle" hand weight={700} at={at + 6} />
		</g>
	);
};

// ---------- 7. Two limits ----------
const K7 = cues(sc('ceiling-losses'), {where: 'So where', first: 'First,', stops: 'stops short', ceiling: 'ceiling.', second: 'Second,', glass: 'glassware,', washes: 'washes,', drying: 'drying agent.', those: 'Those losses'});
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const L: LadderP = {x: 820, y: 220, w: 170, h: 700};
	const yb = ladY(L, BAND), y6 = ladY(L, 0.6);
	const chips = [{t: 'on the glassware', at: K7.glass}, {t: 'in the washes', at: K7.washes}, {t: 'on the drying agent', at: K7.drying}];
	return (
		<Overlay>
			<TaskLine text="Where did the rest go?" at={K7.where} size={54} y={130} />
			<Sx x={120} y={yb + 12} text="1  equilibrium" size={44} color={NAVY} hand at={K7.first} opacity={dimAt(f, K7.second, 0.5)} />
			<Sx x={120} y={(yb + y6) / 2 + 30} text="2  losses" size={44} color={TERRA} hand at={K7.second} />
			<Ladder L={L} at={-100} band={K7.stops} grey={K7.ceiling} loss={K7.second + 20} size={26} />
			<g opacity={dimAt(f, K7.ceiling, 0.5)}><Tag x={1080} y={yb - 24} text="equilibrium limit: below 100%, not measured here" at={K7.stops} size={24} color={NAVY} fill="#e7edf8" /></g>
			<Tag x={1080} y={250} text="can't get past this at equilibrium" at={K7.ceiling} size={24} o={dimAt(f, K7.second, 0.5)} />
			<Tag x={1080} y={(yb + y6) / 2 - 20} text="losses" at={K7.second + 20} size={30} color={TERRA} fill="#f6e2d3" />
			<Tag x={1080} y={y6 + 50} text="measured" at={K7.second + 30} size={22} />
			{chips.map((c, i) => {
				const y = 560 + i * 160;
				return (
					<g key={i} opacity={vis(f, c.at)}>
						{i === 2 ? <Plate p={DRY} cx={1370} top={y - 70} h={140} /> : <Plate p={FUNNEL.clear} cx={1370} top={y - 80} h={160} />}
						{i === 1 ? <RingAt c={ptOn(FUNNEL.clear, 1370, y - 80, 160, FP.lo[0], FP.lo[1])} rx={22} ry={14} at={c.at + 4} color={TERRA} /> : null}
						<Tag x={1460} y={y - 20} text={c.t} at={c.at} size={26} color={TERRA} fill="#f6e2d3" />
					</g>
				);
			})}
			{void K7.those}
		</Overlay>
	);
};

// ---------- 8. Reliable results ----------
const K8 = cues(sc('reliability'), {three: 'Three groups', one: 'One to', forty: 'forty', two: 'two to', sixty: 'sixty.', within: 'Within', agree: 'agree', reliable: 'reliable.', gap: 'the gap', twenty: 'twenty', so: 'So, in', yield: 'yield.'});
const S8: Strip = {x0: 140, x1: 1000, y: 680};
export const SceneReliable: React.FC = () => {
	const f = useCurrentFrame();
	const cols = [1130, 1330, 1430, 1530, 1700];
	const rows = [{r: '1 : 1', c: R11, v: ['41', '38', '44', '41'], at: K8.one}, {r: '2 : 1', c: R21, v: ['60', '57', '63', '60'], at: K8.two}];
	const sp = dimAt(f, K8.twenty, 0.5);
	return (
		<Overlay>
			<TaskLine text="Reliability" at={K8.three} size={54} y={130} />
			{['ratio', 'A', 'B', 'C', 'mean'].map((h, i) => <Sx key={i} x={cols[i]} y={250} text={h} size={24} color={INK_SOFT} anchor={i ? 'middle' : 'start'} hand weight={700} at={K8.three + i * 3} />)}
			{rows.map((r, j) => (
				<g key={j}>
					<Sx x={cols[0]} y={320 + j * 64} text={r.r} size={30} color={r.c} weight={800} at={r.at} />
					{r.v.map((q, i) => <Sx key={i} x={cols[i + 1]} y={320 + j * 64} text={q + '%'} size={30} color={INK} anchor="middle" weight={i === 3 ? 800 : 600} at={r.at + 8 + i * 6} />)}
				</g>
			))}
			<Note x={1130} y={410} text="example data: % yield, three groups" at={K8.three + 20} />
			<DotStrip S={S8} at={K8.three} a11={K8.forty} a21={K8.sixty} />
			<g opacity={sp}>
				<HBr x1={dx(S8, 38) - 14} x2={dx(S8, 44) + 14} y={530} text="spread about 6 points" at={K8.agree} color={R11} size={28} />
				<HBr x1={dx(S8, 57) - 14} x2={dx(S8, 63) + 14} y={530} text="spread about 6 points" at={K8.agree + 8} color={R21} size={28} />
			</g>
			<VCard x={1130} y={480} w={720} h={150} title="Reliability: repeats agree?" titleAt={K8.agree} at={K8.agree} color={NAVY} dim={K8.twenty} lines={[{t: 'within a few per cent: reliable', at: K8.reliable, size: 28}]} />
			<TickMark x={1780} y={530} at={K8.reliable} />
			<HBr x1={dx(S8, 41)} x2={dx(S8, 60)} y={430} text="difference about 19 points: much bigger than the spread" at={K8.twenty} color={NAVY} size={28} o={dimAt(f, K8.so, 0.6)} />
			<Tag x={140} y={850} text="excess acid → higher yield in these runs (fits c10's prediction)" at={K8.so + 20} size={30} color={GREENC} fill="#e3f3e9" />
			<TickMark x={1040} y={872} at={K8.yield} />
			{void K8.within}{void K8.gap}
		</Overlay>
	);
};

// ---------- 9. Accurate, and valid? ----------
const K9 = cues(sc('valid-accurate'), {acc: 'accurate?', dry: 'dry and pure,', lost: 'lost,', water: 'Water or', high: 'high.', valid: 'valid?', match: 'Matching', washes: 'change the washes,', forty: 'forty', so: 'So the data', under: 'under these'});
export const SceneValid: React.FC = () => {
	const f = useCurrentFrame();
	const L: LadderP = {x: 170, y: 260, w: 80, h: 440};
	return (
		<Overlay>
			<TaskLine text="Accurate? Valid?" at={0} size={54} y={130} />
			<Ladder L={L} at={0} band={-100} loss={-100} pulse={K9.lost} size={20} />
			<g opacity={dimAt(f, K9.valid - 10, 0.4)}>
				<VCard x={380} y={190} w={940} h={210} title="Accuracy: how close to the true value?" titleAt={K9.acc} at={K9.acc} color={NAVY} lines={[{t: 'dry, pure ester weighed correctly → correct isolated yield', at: K9.dry, size: 28}, {t: "repeats show variation; they can't recover lost ester", at: K9.lost, size: 26, color: TERRA}]} />
				<Note x={400} y={414} text="isolated yield: the ester you actually got out" at={K9.dry + 30} />
			</g>
			<g opacity={vis(f, K9.water - 6) * dimAt(f, K9.valid - 10, 0.45)}>
				<BalR cx={1520} top={200} h={240} at={K9.water - 6} text={() => 'too high'} sample="too high" />
				<WetFlag x={1690} y={440} at={K9.water} size={22} />
				<Tag x={1560} y={470} text="ester + water + acid → mass too high" at={K9.high} size={22} color={TERRA} fill="#f6e2d3" anchor="middle" />
				<Note x={1560} y={520} text="wash and dry before weighing" at={K9.high + 14} anchor="middle" />
			</g>
			<VCard x={380} y={560} w={1000} h={320} title="Validity: does it test what it was meant to?" titleAt={K9.valid} at={K9.valid} color={GREENC} lines={[
				{t: 'matched work-up: helps', at: K9.match, size: 28, color: GREENC, weight: 800},
				{t: 'Did each work-up recover the same share of ester?', at: K9.washes, size: 26, color: INK_SOFT},
				{t: 'Did each reaction get as far as it could?', at: K9.forty, size: 26, color: INK_SOFT},
				{t: 'Was each product equally dry and pure?', at: K9.forty + 44, size: 26, color: INK_SOFT},
			]} />
			<Tag x={1400} y={760} text="check these before blaming equilibrium alone" at={K9.so} size={20} />
			<Tag x={380} y={910} text="excess acid → higher isolated yield, under these conditions" at={K9.under} size={32} color={GREENC} fill="#e3f3e9" />
			<Sx x={380} y={1030} text="Validity: fair test.   Reliability: repeats agree.   Accuracy: close to the true yield." size={20} color={INK_SOFT} weight={600} at={K9.acc + 20} />
		</Overlay>
	);
};

// ---------- 10. Is it really the ester? ----------
const K10 = cues(sc('identify'), {is: 'Is it really', own: 'own layer,', fizz: 'no visible fizz', support: 'support', none: 'none proves', teacher: 'If your teacher', waft: 'waft', sniff: 'sniff', directly: 'directly.'});
export const SceneIdentify: React.FC = () => {
	const f = useCurrentFrame();
	const chipO = dimAt(f, K10.teacher, 0.55);
	return (
		<Overlay>
			<TaskLine text="Is it really the ester?" at={K10.is} size={54} y={130} />
			<g opacity={chipO}>
				<Plate p={FUNNEL.clear} cx={300} top={170} h={230} at={K10.own} />
				<RingAt c={ptOn(FUNNEL.clear, 300, 170, 230, FP.up[0], FP.up[1])} rx={30} ry={18} at={K10.own + 6} color={GREENC} />
				<Tag x={460} y={250} text="separate upper layer" at={K10.own} size={30} color={GREENC} fill="#e3f3e9" />
				<Tag x={460} y={430} text="no visible fizz with NaHCO₃: little acid left" at={K10.fizz} size={30} color={GREENC} fill="#e3f3e9" />
				<Plate p={DISTIL} cx={270} top={540} h={190} at={K10.support} />
				<Tag x={460} y={580} text="if distilled: collects near 149 °C" at={K10.support} size={30} color={GREENC} fill="#e3f3e9" />
				<Note x={460} y={646} text="supporting evidence, not proof of purity (pentan-1-ol boils at 138 °C)" at={K10.support + 12} />
				<DrawPath d={`M1340,240 L1360,240 L1360,700 L1340,700`} at={K10.none} dur={14} color={NAVY} width={4} />
				<Sx x={1390} y={460} text="together: supports," size={40} color={NAVY} hand weight={700} at={K10.none + 6} />
				<Sx x={1390} y={510} text="doesn't prove" size={40} color={NAVY} hand weight={700} at={K10.none + 10} />
			</g>
			<Tag x={460} y={760} text="waft a little towards you, if your teacher allows it" at={K10.waft} size={26} color={NAVY} fill="#e7edf8" />
			<Crossed x={460} y={860} text="sniff the vial" at={K10.sniff - 6} cross={K10.directly} note="waft gently; never sniff directly" size={32} />
			<Note x={900} y={880} text="NSW Chemical Safety in Schools" at={K10.directly + 20} />
		</Overlay>
	);
};

// ---------- 11. Risk assessment ----------
const K11 = cues(sc('risk'), {now: 'Now the risks', conc: 'Concentrated', glasses: 'safety glasses,', glacial: 'Glacial', flam: 'flammable.', pent: 'Pentan-1-ol', flames: 'no flames:', mantle: 'heating mantle,', collect: 'And collect', organic: 'organic waste,', sink: 'sink.'});
const HEAD = ['Hazard', 'Harm', 'Control'];
type Cell = string | string[];
const CUR: {at: number; cells: Cell[]; chip: string}[] = [
	{at: K11.conc, chip: 'H₂SO₄', cells: [['concentrated', 'sulfuric acid'], ['severe skin burns', 'and eye damage'], ['teacher adds it;', 'glasses, gloves, lab coat']]},
	{at: K11.glacial, chip: 'glacial acid', cells: [['glacial', 'ethanoic acid'], ['burns;', 'flammable'], ['fume cupboard; glasses,', 'gloves; away from heat']]},
	{at: K11.pent, chip: 'flammables', cells: [['pentan-1-ol and', 'pentyl ethanoate'], ['fire; serious eye', 'damage; harmful vapour'], ['no flames: heating', 'mantle; top open']]},
	{at: K11.collect, chip: 'waste', cells: ['waste', ['flammable;', 'harms waterways'], ['labelled organic waste,', 'never the sink']]},
];
const FULL_AT = K11.organic - 20;
const FULL: Cell[][] = [
	[['conc. sulfuric acid', '(H290, H314)'], ['severe burns and eye damage;', 'reacts violently with water'], ['teacher adds it dropwise to the cooled mixture,', 'in a fume cupboard; never add water to it;', 'glasses, gloves, lab coat; spills: NaHCO₃']],
	[['glacial ethanoic acid', '(H226, H314)'], ['skin burns, eye damage;', 'irritating vapour; flammable'], ['measure in a fume cupboard; small volume;', 'glasses, gloves; away from heat sources']],
	[['pentan-1-ol (H226, H315, H318,', 'H332, H335); pentyl ethanoate', '(H226; some add H412)'], ['fire; serious eye damage;', 'harmful vapour; skin and', 'airway irritation'], ['safety glasses; no open flames; electric', 'mantle; condenser top open; ventilate;', 'stopper bottles']],
	[['gas pressure in the funnel', '(CO₂ from the NaHCO₃ wash)'], ['stopper blows out,', 'spraying the mixture'], ['add the solution in portions; vent often,', 'stem up and away from people']],
	[['NaHCO₃ solution;', 'anhydrous MgSO₄'], 'low hazard', ['glasses; spent drying agent wet with', 'ester goes to organic waste']],
	[['hot mantle, flask', 'and condenser'], ['burns; cracked glass;', 'pressure if sealed'], ['never heat a sealed system; clamp', 'securely; cool before handling']],
	['waste', ['organics: flammable,', 'harm waterways'], ['ester, alcohol, organic residues: labelled', 'organic waste container; never the sink']],
];
export const SceneRisk: React.FC = () => {
	const f = useCurrentFrame();
	const fx = 540, fy = 140, rowH = 114, headH = 26 + 28;
	return (
		<Overlay>
			<Sx x={96} y={120} text="Risk assessment" size={54} color={INK} hand at={K11.now} />
			<g opacity={vis(f, K11.glasses - 20)}>
				<PlateC p={GLASSES} cx={190} top={200} h={70} />
				<PlateC p={GLOVES} cx={390} top={180} h={100} />
				<Tag x={290} y={300} text="always" at={K11.glasses} size={22} anchor="middle" />
			</g>
			<g opacity={vis(f, K11.glacial) * dimAt(f, K11.collect, 0.45)}>
				<PlateC p={HOOD} cx={290} top={380} h={250} />
				<Tag x={290} y={650} text="measure the acids here" at={K11.glacial + 10} size={22} anchor="middle" />
			</g>
			<g opacity={vis(f, K11.collect)}>
				<PlateC p={WASTE} cx={290} top={720} h={220} />
				<Sx x={290} y={880} text="Organic" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={290} y={904} text="waste" size={20} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<g opacity={1 - prog(f, FULL_AT, 12)}>
				{CUR.map((r, i) => <RTable key={i} x={640} y={330} cols={[360, 340, 520]} head={HEAD} at={r.at} out={CUR[i + 1]?.at} rowH={150} size={28} headSize={32} rows={[{at: r.at, cells: r.cells}]} />)}
				{CUR.map((r, i) => (i < CUR.length - 1 ? <Tag key={'c' + i} x={640 + i * 220} y={230} text={r.chip} at={CUR[i + 1].at} size={22} /> : null))}
			</g>
			<RTable x={fx} y={fy} cols={[400, 360, 600]} head={HEAD} at={FULL_AT} rowH={rowH} size={21} headSize={26} rows={FULL.map(c => ({at: FULL_AT, cells: c, dimAt: 1e9}))} />
			<g opacity={vis(f, FULL_AT + 10)}><rect x={fx + 4} y={fy + headH + 6 * rowH + 2} width={1352} height={rowH - 4} rx={12} fill="none" stroke="#c98a1b" strokeWidth={4} /></g>
			<Sx x={1000} y={120} text="Pause to read the full risk table" size={36} color="#a8761a" hand at={K11.sink + 6} />
			<Tag x={fx} y={1010} text="follow your school's risk assessment and each bottle's safety data sheet" at={FULL_AT + 20} size={22} />
			{void K11.flam}{void K11.flames}{void K11.mantle}
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {one: 'One line', eq: 'Equilibrium', the: ['the work-up', 1]});
export const SceneAid: React.FC = () => (
	<Overlay>
		<TaskLine text="Equilibrium sets the ceiling;" at={K12.eq} size={72} x={120} y={300} color="#0d6b52" />
		<TaskLine text="the work-up decides how close you get." at={K12.the} size={72} x={120} y={410} color="#0d6b52" />
		<Sx x={120} y={540} text="Yield from moles of the limiting reactant." size={36} color={INK_SOFT} weight={600} at={K12.the + 30} />
		<Ladder L={{x: 1500, y: 600, w: 90, h: 360}} at={K12.eq} band={K12.eq + 10} loss={K12.the} size={22} />
		{void K12.one}
	</Overlay>
);
