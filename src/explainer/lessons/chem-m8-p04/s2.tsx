// M8 P04 scenes 7 to 12: the unknown is too strong (the rinse-water cuvette reads 1.52 above the band; the extended line
// is crossed; the dilution halves it to 0.845 with three readings), read it then scale back (g01 board: the graph read,
// givens, three stages, the framed answer and a crossed slip), reliable and accurate (three readings on a scale, the
// check standard and its recovery gauge), valid (the four conditions with pictures), the risk assessment (the table fills
// row by row with a painted object in each row, then holds for reading) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues, speechEnd} from '../../cues';
import {HandText, prog} from '../../kit';
import {RecGauge} from '../chem-m8-p02/parts';
import {BURETTE, CUV, GLASSES, GLOVES, STOCK, UVV, WASH, WASTE, sc} from './common';
import {
	AChip, BAND, CG, CRead, CSeg, CU, CU_INK, CalGraph, Cuv, DrawPath, Fade, Framed, GCard, GIV, GOOD, Glow, IconP, INK, INK_SOFT, MistakeX, NAVY, OUT, Overlay, PicF, RiskGrid, Sx, TaskLine, Wr,
	countA, cuvW, gx, gy, picW, vis,
} from './parts';
import type {RiskRow} from './parts';

// ---------- 7. The unknown is too strong ----------
const K7 = cues(sc('unknown-dilute'), {reads: 'It reads', far: 'far above', extend: 'extend the line', bends: 'line bends', dont: "don't trust", dilute: 'Dilute it', five: 'Five millilitres', halve: 'halve its', three: 'Three readings', mean: 'a mean', inside: 'inside the range'});
export const G7: CG = {x: 1010, y: 200, w: 740, h: 560, x0: 0, x1: 0.14, y0: 0, y1: 1.6};
export const SceneUnknown: React.FC = () => {
	const f = useCurrentFrame();
	const C = {x: 160, y: 200, h: 560};
	const read = (fr: number) => (fr < K7.reads ? 'A = ?' : fr < K7.halve ? 'A = 1.52' : countA(fr, K7.halve, K7.halve + 40, 1.52, 0.845));
	return (
		<Overlay>
			<TaskLine text="Measure the unknown: too strong" at={2} size={52} />
			<CalGraph g={G7} t={{line: -1000, ext: -1000, fifth: -1000, band: -1000}} size={26} />
			<Cuv x={C.x} y={C.y} h={C.h} states={[{p: CUV.unk, at: -1000}, {p: CUV.dil, at: K7.halve, dur: 30}]} />
			<rect x={C.x + cuvW(C.h) + 30} y={C.y + 200} width={300} height={100} rx={14} fill="#2b3138" />
			<Sx x={C.x + cuvW(C.h) + 180} y={C.y + 268} text={read(f)} size={48} color="#9be3b8" anchor="middle" weight={700} at={-1000} />
			<Sx x={C.x + cuvW(C.h) + 30} y={C.y + 180} text="rinse water" size={34} color={GIV} weight={800} at={-1000} />
			<CSeg g={G7} a={[0, 1.52]} b={[0.14, 1.52]} at={K7.far} color={OUT} width={4} dash="12 9" dur={20} out={K7.halve + 20} />
			<AChip x={gx(G7, 0.02)} y={gy(G7, 1.52) - 66} text="1.52: above the linear range" size={30} color={OUT} hand={false} at={K7.far + 6} out={K7.halve + 20} />
			<CSeg g={G7} a={[0.1273, 1.52]} b={[0.1273, 0]} at={K7.extend + 10} color={INK_SOFT} width={4} dash="10 8" out={K7.halve + 20} />
			<MistakeX x={gx(G7, 0.06)} y={G7.y + G7.h + 70} text="extend the line: 0.128?" at={K7.extend + 20} cross={K7.dont} note="outside the standards: dilute, don't extend" size={32} />
			<Fade at={K7.dilute}>
				<PicF p={BURETTE} x={560} y={600} h={300} />
				<PicF p={BURETTE} x={700} y={600} h={300} />
			</Fade>
			<Wr x={96} y={900} text="5.00 mL rinse water + 5.00 mL distilled water" at={K7.five} size={38} color={NAVY} weight={800} />
			<Sx x={96} y={950} text="halves the concentration" size={34} color={INK} hand weight={700} at={K7.halve} />
			<Wr x={96} y={1030} text="0.842, 0.848, 0.845 → mean 0.845" at={K7.three} size={44} color={CU_INK} weight={800} />
			<CSeg g={G7} a={[0, 0.845]} b={[0.0708, 0.845]} at={K7.mean + 20} color={GOOD} width={5} dash="12 9" dur={20} />
			<Sx x={gx(G7, 0.002)} y={gy(G7, 0.845) - 16} text="0.845: inside" size={30} color={GOOD} weight={800} at={K7.inside} />
			{void K7.bends}{void BAND}
		</Overlay>
	);
};

// ---------- 8. Read it, then scale back ----------
const K8 = cues(sc('read-scale-back'), {read: 'Read across', down: 'then down', p0710: 'zero seven one zero', diluted: 'the diluted solution', halved: 'You halved', double: 'double that', p142: 'one four two', l2: ['litre', 2]});
const G8: CG = {x: 220, y: 300, w: 600, h: 540, x0: 0, x1: 0.09, y0: 0, y1: 1.1};
export const SceneRead: React.FC = () => (
	<Overlay>
		<TaskLine text="[Cu^{2+}] in the rinse water" at={2} size={52} />
		<CalGraph g={{...G8}} t={{line: -1000, band: -1000, pts: [-1000, -1000, -1000, -1000, -1000, 1e9]}} size={26} />
		<CRead g={G8} a={0.845} c={0.0708} at={K8.read} downAt={K8.down} value="0.0710" aLabel="0.845" size={34} />
		<GCard x={960} y={196} w={880} at={-1000} title="givens" size={36} lh={58} lines={[
			{t: 'diluted reading: A = 0.845 (mean)', at: -1000},
			{t: 'dilution: 5.00 mL → 10.00 mL total', at: -1000},
			{t: 'slope: 11.9 L mol⁻¹ (passes through zero)', at: -1000},
		]} />
		<Wr x={900} y={510} text="c(diluted) = 0.845 ÷ 11.9" at={K8.read + 10} size={42} color={INK} weight={800} />
		<Wr x={1495} y={510} text="= 0.0710 mol/L" at={K8.p0710 - 10} size={42} color={GIV} weight={800} />
		<Sx x={900} y={556} text="the same as reading the line" size={30} color={INK} hand weight={700} at={K8.p0710 + 20} />
		<Wr x={900} y={650} text="dilution factor = 10.00 ÷ 5.00 = 2.00" at={K8.halved} size={44} color={INK} weight={800} />
		<Framed x={900} y={790} text="c(rinse water) = 0.0710 × 2.00 = 0.142 mol/L" at={K8.double} size={40} color={GIV} />
		<MistakeX x={900} y={880} text="0.0710 mol/L: that's the diluted solution" at={K8.diluted} cross={K8.halved} size={32} />
		<PicF p={CUV.dil} x={1700} y={830} h={210} />
		<Sx x={1680} y={940} text="A = 0.845" size={34} color={CU_INK} anchor="end" weight={800} at={-1000} />
		<AChip x={900} y={1000} text="never forget the dilution correction" size={30} color={NAVY} hand={false} at={K8.l2} />
		{void K8.p142}{void CU}
	</Overlay>
);

// ---------- 9. Reliable, and accurate? ----------
const K9 = cues(sc('reliable-accurate'), {three: 'three readings', within: 'within about', second: 'second dilution', acc: 'Accurate', teacher: 'Your teacher', sep: 'separate weighing', p0500: 'zero five zero zero', read: 'Read from your line', p0497: 'four nine seven', w2: ['within about', 2], value: 'true value'});
export const SceneRelAcc: React.FC = () => {
	const f = useCurrentFrame();
	const S = {x0: 160, x1: 820, y: 420};
	const sx = (v: number) => S.x0 + ((v - 0.835) / 0.02) * (S.x1 - S.x0);
	const d = 1 - 0.3 * prog(f, K9.acc, 14);
	return (
		<Overlay>
			<TaskLine text="Reliable? Accurate?" at={2} size={52} />
			<g opacity={d}>
				<rect x={96} y={196} width={830} height={814} rx={22} fill="#fffdf8" stroke={NAVY} strokeWidth={3.5} />
				<Sx x={124} y={258} text="Reliability: repeats agree?" size={44} color={NAVY} hand weight={700} at={-1000} />
				<line x1={S.x0 - 20} x2={S.x1 + 20} y1={S.y} y2={S.y} stroke={INK} strokeWidth={4} />
				{[0.835, 0.84, 0.845, 0.85, 0.855].map(t => <g key={t}><line x1={sx(t)} x2={sx(t)} y1={S.y} y2={S.y + 12} stroke={INK} strokeWidth={3} /><Sx x={sx(t)} y={S.y + 46} text={t.toFixed(3)} size={26} color={INK} anchor="middle" weight={700} at={-1000} /></g>)}
				{[0.842, 0.848, 0.845].map((v, i) => <circle key={i} cx={sx(v)} cy={S.y - 26} r={15} fill={CU} opacity={prog(f, K9.three + i * 8, 10)} />)}
				<DrawPath d={`M${sx(0.842)},${S.y - 60} L${sx(0.842)},${S.y - 74} L${sx(0.848)},${S.y - 74} L${sx(0.848)},${S.y - 60}`} at={K9.within} dur={12} color={NAVY} width={4} />
				<Sx x={sx(0.845)} y={S.y - 88} text="spread 0.006" size={34} color={NAVY} anchor="middle" weight={800} at={K9.within} />
				{[0, 1, 2].map(i => <PicF key={i} p={CUV.dil} x={200 + i * 150} y={520} h={250} />)}
				{['0.842', '0.848', '0.845'].map((t, i) => <Sx key={t} x={200 + i * 150 + cuvW(250) / 2} y={810} text={t} size={30} color={INK} anchor="middle" weight={800} at={K9.three + i * 8} />)}
				<Wr x={124} y={900} text="second dilution: 0.142 mol/L" at={K9.second} size={40} color={GOOD} weight={800} />
				<DrawPath d="M800,880 l14,16 l30,-36" at={K9.second + 30} dur={10} color={GOOD} width={7} />
			</g>
			<rect x={960} y={196} width={880} height={814} rx={22} fill="#fffdf8" stroke={vis(f, K9.acc) > 0.5 ? NAVY : 'rgba(60,45,20,0.22)'} strokeWidth={3.5} />
			<Sx x={990} y={258} text="Accuracy: how close to the true value?" size={40} color={NAVY} hand weight={700} at={-1000} opacity={0.4 + 0.6 * prog(f, K9.acc, 12)} />
			<PicF p={CUV.c3} x={1000} y={300} h={330} o={vis(f, K9.teacher - 20)} />
			<Wr x={1150} y={360} text="check standard:" at={K9.teacher} size={36} color={INK} weight={800} />
			<Wr x={1150} y={410} text="0.0500 mol/L" at={K9.p0500} size={44} color={CU_INK} weight={800} />
			<Wr x={1150} y={460} text="from a separate weighing" at={K9.sep} size={32} color={INK} weight={700} />
			<Wr x={1000} y={700} text="A = 0.592 → 0.592 ÷ 11.9 = 0.0497 mol/L" at={K9.read} size={38} color={INK} weight={800} />
			<RecGauge G={{x: 1010, y: 800, w: 760}} at={K9.acc + 20} q={K9.acc + 30} qOut={K9.p0497 + 6} label={() => 'known 0.0500'} fills={[{v: 99.5, at: K9.p0497 + 10, color: GOOD, label: '99.5%'}]} size={28} />
			<Sx x={1390} y={940} text="within about 1%" size={40} color={GOOD} anchor="middle" hand weight={700} at={K9.w2} />
			<AChip x={1000} y={960} text="p02: test the method on a known sample" size={26} color="#6d6457" hand={false} at={K9.value} />
			{void UVV}
		</Overlay>
	);
};

// ---------- 10. Is it valid? ----------
const K10 = cues(sc('valid'), {only: 'only thing absorbing', cloudy: 'A cloudy sample', filter: 'filter it first', diss: 'dissolved substances', teacher: 'your teacher has checked', same: 'same wavelength', cuv: 'same cuvette', blank: 'same blank', inside: 'inside the linear', it: 'apply to it'});
const G10: CG = {x: 1420, y: 640, w: 380, h: 260, x0: 0, x1: 0.14, y0: 0, y1: 1.6};
export const SceneValid: React.FC = () => {
	const f = useCurrentFrame();
	const chips: [string, number][] = [['same wavelength', K10.same], ['same cuvette', K10.cuv], ['same blank', K10.blank], ['inside the linear range', K10.inside]];
	const C = {x: 130, y: 380, h: 300};
	return (
		<Overlay>
			<TaskLine text="Valid?" at={2} size={52} />
			<rect x={96} y={196} width={1200} height={814} rx={22} fill="#fffdf8" stroke={GOOD} strokeWidth={3.5} />
			<Sx x={124} y={258} text="Validity: does it measure what it was meant to?" size={42} color={GOOD} hand weight={700} at={-1000} />
			<Wr x={124} y={334} text="only Cu²⁺ absorbs at about 800 nm" at={K10.only} size={42} color={INK} weight={800} />
			<Cuv x={C.x} y={C.y} h={C.h} states={[{p: CUV.dil, at: -1000}]} />
			<rect x={C.x + 10} y={C.y + 100} width={cuvW(C.h) - 20} height={C.h - 120} fill="#e8e2d6" opacity={0.7 * vis(f, K10.cloudy, K10.filter + 20)} />
			<Wr x={300} y={440} text="cloudy: scatters light, A ↑" at={K10.cloudy} size={38} color={OUT} weight={800} />
			<Wr x={300} y={490} text="→ filter it first" at={K10.filter} size={38} color={GOOD} weight={800} />
			<Wr x={300} y={570} text="filtering removes particles, not dissolved" at={K10.diss} size={32} color={INK} weight={700} />
			<Wr x={300} y={612} text="substances: teacher-checked, no other absorbers" at={K10.teacher} size={32} color={INK} weight={700} />
			{chips.map(([t, at], i) => <AChip key={t} x={124 + (i % 2) * 560} y={720 + Math.floor(i / 2) * 84} text={t} size={36} color={GOOD} hand={false} at={at} />)}
			<Wr x={124} y={960} text="the line applies to the unknown only under the same conditions" at={K10.it - 20} size={34} color={NAVY} weight={800} />
			<PicF p={UVV} x={1360} y={220} h={300} />
			<Sx x={1360 + picW(UVV, 300) / 2} y={560} text="same instrument, same 800 nm" size={28} color={INK} anchor="middle" weight={800} at={K10.same} />
			<CalGraph g={G10} t={{line: -1000, band: -1000, ext: -1000, fifth: -1000}} size={22} />
			<Glow cx={gx(G10, 0.04)} cy={gy(G10, 0.5)} rx={110} ry={150} at={K10.inside} len={60} />
			<Sx x={1340} y={1050} text="Validity: right measurement. Reliability: repeats agree. Accuracy: close to the true value." size={26} color={INK_SOFT} anchor="middle" weight={600} at={K10.it} />
		</Overlay>
	);
};

// ---------- 11. Risk assessment ----------
const K11 = cues(sc('risk'), {now: 'Now the risks', cu: 'Copper sulfate', every: 'every copper solution', sink: 'the sink', rinse: 'Treat the rinse water', fill: 'Fill the burettes', cuvettes: 'fill cuvettes', elec: 'electronics'});
export const SceneRisk: React.FC = () => {
	const end = Math.max(K11.elec + 30, speechEnd(sc('risk')) + 4);
	const ic = (p: typeof STOCK) => (x: number, y: number, w: number, h: number) => <IconP p={p} x={x} y={y} w={w} h={h} />;
	const rows: RiskRow[] = [
		{hazard: ['Copper(II) sulfate stock', '(0.200 mol/L) and standards'], harm: ['harmful if swallowed; irritates eyes', 'and skin; very toxic to aquatic life'], control: ['teacher prepares the stock; gloves, glasses;', 'no food or drink; wash hands afterwards'], at: K11.cu, icon: ic(STOCK)},
		{hazard: ['Waste: standards, unknown,', 'cuvette contents, rinses'], harm: ['dissolved copper is very', 'toxic to aquatic life'], control: ['labelled heavy-metal waste container;', 'never the sink'], at: K11.every, icon: ic(WASTE)},
		{hazard: ['Unknown sample (plating rinse', 'water: may hold acid, other metals)'], harm: ['unknown: treat as corrosive', 'and toxic'], control: ['gloves, glasses; teacher supplies it filtered,', 'checked and labelled; same waste route'], at: K11.rinse, icon: ic(CUV.unk)},
		{hazard: ['Glass burettes and cuvettes'], harm: ['cuts from broken glass;', 'splashes when filling'], control: ['fill burettes below eye level with a funnel,', 'then remove it; plastic cuvettes where possible'], at: K11.fill, icon: ic(BURETTE)},
		{hazard: ['Spectrophotometer', '(mains electrical)'], harm: ['electric shock if liquid', 'enters the instrument'], control: ['fill and wipe cuvettes away from the', 'instrument; mop spills; tested and tagged'], at: K11.cuvettes, icon: ic(UVV)},
		{hazard: ['Distilled water'], harm: ['low hazard (not classified)'], control: ['wipe up spills (slip hazard)'], at: end, icon: ic(WASH)},
	];
	return (
		<Overlay>
			<TaskLine text="Risk assessment" at={2} size={52} />
			<Sx x={560} y={150} text="Pause to read the full risk table" size={38} color={NAVY} hand weight={700} at={end + 6} />
			<Fade at={K11.now}>
				<Sx x={1460} y={150} text="always:" size={34} color={GOOD} hand weight={700} at={-1000} />
				<PicF p={GLASSES} x={1580} y={105} h={58} />
				<PicF p={GLOVES} x={1730} y={92} h={80} />
			</Fade>
			<RiskGrid x={96} y={190} cols={[130, 500, 500, 614]} rowH={122} rows={rows} listAt={K11.now + 4} end={end} size={26} />
			<Sx x={96} y={1050} text="Follow your school's risk assessment and each bottle's safety data sheet." size={28} color={INK} weight={700} at={K11.sink} />
		</Overlay>
	);
};

// ---------- 12. Memory aid ----------
const K12 = cues(sc('memory-aid'), {read: 'Read across', down: 'then down', inside: 'inside the standards', diluted: 'if you diluted', factor: 'dilution factor'});
const G12: CG = {x: 460, y: 300, w: 1000, h: 480, x0: 0, x1: 0.14, y0: 0, y1: 1.6};
export const SceneAid: React.FC = () => (
	<>
		<div style={{position: 'absolute', left: 96, top: 110}}><HandText text="Read across, then down, and only inside the standards." at={K12.read - 10} size={72} cps={30} color="#1f7f78" /></div>
		<Overlay>
			<CalGraph g={G12} t={{line: -1000, band: -1000, ext: -1000, fifth: -1000}} size={26} />
			<CRead g={G12} a={0.845} c={0.0708} at={K12.read + 6} downAt={K12.down + 6} value="0.0710" aLabel="0.845" size={30} />
			<Glow cx={gx(G12, 0.04)} cy={gy(G12, 0.5)} rx={260} ry={220} at={K12.inside} len={60} />
			<Sx x={96} y={950} text="Diluted? Multiply back by the dilution factor." size={62} color={INK} hand weight={700} at={K12.diluted} />
			<Sx x={96} y={1030} text="0.0710 × 2.00 → 0.142 mol/L" size={40} color={GIV} weight={800} at={K12.factor} />
		</Overlay>
	</>
);
void CU_INK; void Fade;
