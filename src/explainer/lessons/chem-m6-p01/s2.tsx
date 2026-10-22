// M6 P01 scenes 7 to 12: the reversibility cycle (one beaker, droppers, drop counters, the equilibrium lens, the
// three-cycle tracker); why the same sample and why three cycles (fresh wells, lighter swatch pairs); a colour that
// does not return (yellow, the breaking token); using the chart and its limits (household samples, meter, titration
// comparison); variables and VRA; the risk table.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {cues} from '../../cues';
import {GREEN, sc} from './common';
import {CLEANER, HOTPLATE, PHMETER, PH_SET, VINEGAR, WASH, GLASSES, GLOVES} from './assets';
import {
	ACID_T, AChip, BASE_T, C, CHART, CTok, CabBeaker, Chart, ClockChip, DBottle, DimG, DropCount, Fade, FullMeter, H3O, HopOff, INK, INK_SOFT, IconPlate, KeptChip, LensFrame,
	LoopArrow, MeetPair, Note, Overlay, PHRuler, PINK, PenLink, PicH, RBand, RTable, RX, Sx, TEAL, TaskLine, Tracker, VCard, Well, cabSurf, cabW, chartX, landed, lerp, pale, picW, rx,
	smooth, swings, tripDone,
} from './parts';
import type {ChartG, Trip} from './parts';

// ---------- 7. The reversibility cycle ----------
const S7 = 'cycle';
const K7 = cues(sc(S7), {key: 'the key test', two: 'two millilitres', red: ['red', 1], naoh: 'sodium hydroxide', drop: 'drop by drop', green: 'green', again: 'acid again', red2: ['red', 2], base: 'Base removes', forms: 'forms that', back: 'back', three: 'three times', same: 'same beaker'});
export const SceneCycle: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 520, y: 280, h: 460};
	const [sx, sy] = cabSurf(B.x, B.y, B.h);
	const t1: Trip = {at: K7.red - 74, to: [sx - 70, sy - 40], n: 10, gap: 4, y1: sy, color: C.red};
	const t2: Trip = {at: K7.green - 100, to: [sx + 50, sy - 40], n: 12, gap: 6, y1: sy, color: C.green};
	const t3: Trip = {at: K7.red2 - 78, to: [sx - 70, sy - 40], n: 12, gap: 4, y1: sy, color: C.red};
	const sw = swings(K7.three + 6, 14, 6, 'g');
	const ticks = [sw[1].at + 8, sw[3].at + 8, sw[5].at + 8];
	const hTxt = (fr: number) => (fr < t3.at ? `+${landed([t1], fr)} drops HCl` : `+${landed([t3], fr)} drops HCl`);
	const nTxt = (fr: number) => `+${landed([t2], fr)} drops NaOH`;
	const L = {cx: 1500, cy: 420, r: 170};
	const q1 = smooth(prog(f, K7.base + 40, 14));
	const q2 = smooth(prog(f, K7.back, 14));
	const green = q1 * (1 - q2);
	const h3o = f >= K7.back - 30 && f < K7.back + 2;
	const hq = smooth(prog(f, K7.back - 30, 30));
	return (
		<Overlay>
			<TaskLine text="The key test" at={4} size={52} />
			<CabBeaker x={B.x} y={B.y} h={B.h} states={[{at: -100, s: 'p'}, {at: tripDone(t1) - 16, s: 'r'}, {at: tripDone(t2) - 16, s: 'g'}, {at: tripDone(t3) - 16, s: 'r'}, ...sw]} />
			<Sx x={B.x + cabW(B.h) / 2} y={B.y + B.h + 46} text="2.0 mL extract" size={32} color={INK} anchor="middle" weight={800} at={K7.two} />
			<DBottle x={260} y={620} h={240} lines={['HCl']} tab={ACID_T} at={4} trips={[t1, t3]} />
			<DBottle x={1010} y={620} h={240} lines={['NaOH']} tab={BASE_T} at={4} trips={[t2]} />
			<DimG at={t2.at} to={0.4} undim={t3.at}><DropCount x={150} y={900} text={hTxt} at={t1.at + 20} out={K7.base} color={ACID_T} size={28} /></DimG>
			<DimG at={t3.at} to={0.4}><DropCount x={930} y={900} text={nTxt} at={t2.at + 20} out={K7.base} color={BASE_T} size={28} /></DimG>
			<Note x={1000} y={500} text="until it just turns green" size={30} color={C.green} at={K7.green} out={K7.base} />
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K7.base - 6}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={L.r * 2} height={L.r * 2} fill={pale(C.red, 0.85)} />
				<MeetPair a={[L.cx - 80, L.cy - 70]} b={[L.cx + 80, L.cy - 70]} at={K7.base + 10} s={1.3} />
				<CTok x={L.cx} y={L.cy + 50} color={C.red} nH={1} s={1.3} o={1 - green} />
				<CTok x={L.cx} y={L.cy + 50} color={C.green} nH={0} s={1.3} o={green} />
				<HopOff x={L.cx + 28} y={L.cy + 18} at={K7.base + 40} />
				{h3o ? <H3O x={lerp(L.cx + 110, L.cx + 34, hq)} y={lerp(L.cy - 120, L.cy + 18, hq)} s={1.1} /> : null}
			</LensFrame>
			<Note x={L.cx} y={L.cy - L.r - 20} text="base removes hydronium" size={28} color={BASE_T} anchor="middle" at={K7.base + 6} out={K7.back - 10} />
			<Note x={L.cx} y={L.cy - L.r - 20} text="acid shifts it back" size={28} color={ACID_T} anchor="middle" at={K7.back} />
			<Sx x={RX} y={700} text="red forms ⇌ H^{+} + green forms" size={36} color={INK} weight={800} at={K7.forms} />
			<DimG at={K7.three} to={0.4}><Note x={RX} y={752} text="indicator video: Le Chatelier" size={28} color={INK_SOFT} at={K7.forms + 14} /></DimG>
			<Tracker x={400} y={1000} at={K7.three} ticks={ticks} label="three cycles" />
			{void K7.key}{void K7.naoh}{void K7.drop}{void K7.again}{void K7.same}
		</Overlay>
	);
};

// ---------- 8. Why the same sample, and why three cycles ----------
const S8 = 'same-sample';
const K8 = cues(sc(S8), {why: 'Why the same', fresh: 'Fresh wells', one: 'One sample', both: 'runs both ways', three: 'Three cycles', misread: 'misread', paler: 'paler', diluted: 'diluted', same: 'same two colours', evidence: "That's evidence"});
export const SceneSame: React.FC = () => {
	const B = {x: 700, y: 300, h: 380};
	const bc = B.x + cabW(B.h) / 2;
	const SW = {x: RX + 100, y: 280, w: 130, h: 70, dy: 100};
	const ks = [0, 0.3, 0.52];
	return (
		<Overlay>
			<TaskLine text="Why one sample, and why three cycles?" at={4} size={52} />
			<DimG at={K8.one} to={0.4}>
				<Note x={360} y={330} text="fresh wells" size={32} color={INK_SOFT} anchor="middle" at={K8.fresh} />
				<Well cx={280} cy={430} r={42} color={C.red} at={K8.fresh} />
				<Well cx={440} cy={430} r={42} color={C.green} at={K8.fresh + 6} />
				<Sx x={360} y={560} text="≠ reversal" size={36} color={INK_SOFT} anchor="middle" weight={800} at={K8.fresh + 20} />
				<Note x={360} y={606} text="each colour separately" size={28} color={INK_SOFT} anchor="middle" at={K8.fresh + 30} />
			</DimG>
			<DimG at={K8.paler} to={0.45}>
				<Fade at={K8.one - 6}><CabBeaker x={B.x} y={B.y} h={B.h} states={[{at: -100, s: 'r'}, ...swings(K8.one + 20, 18, 6, 'g')]} /></Fade>
				<LoopArrow cx={bc} cy={B.y + B.h * 0.55} rx={230} ry={240} at={K8.one} pulse={K8.both} label="one sample, back and forth" size={30} />
				<Tracker x={640} y={1000} at={K8.three} ticks={[K8.three + 12, K8.three + 24, K8.three + 36]} label="misread check" />
			</DimG>
			{ks.map((k, i) => (
				<g key={i}>
					<Fade at={K8.paler + i * 10}>
						<Sx x={SW.x - 20} y={SW.y + i * SW.dy + SW.h * 0.65} text={`cycle ${i + 1}`} size={28} color={INK_SOFT} anchor="end" weight={700} at={-1000} />
						<rect x={SW.x} y={SW.y + i * SW.dy} width={SW.w} height={SW.h} rx={12} fill={pale(C.red, k)} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
						<rect x={SW.x + SW.w + 30} y={SW.y + i * SW.dy} width={SW.w} height={SW.h} rx={12} fill={pale(C.green, k)} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
					</Fade>
				</g>
			))}
			<DimG at={K8.same} to={0.4}><Note x={RX} y={620} text="diluted: lighter, same hue" size={34} color={INK} at={K8.diluted} /></DimG>
			<Fade at={K8.same}>
				<DrawPath d={`M${SW.x - 6},${SW.y + 6} L${SW.x - 6 - 0},${SW.y + 2 * SW.dy + SW.h - 6}`} at={K8.same} dur={14} color={TEAL} width={5} />
				<DrawPath d={`M${SW.x + 2 * SW.w + 36},${SW.y + 6} L${SW.x + 2 * SW.w + 36},${SW.y + 2 * SW.dy + SW.h - 6}`} at={K8.same + 6} dur={14} color={TEAL} width={5} />
			</Fade>
			<Note x={RX} y={680} text="same colours return" size={36} color={TEAL} at={K8.same + 10} />
			<KeptChip x={RX} y={800} text="Evidence: reversible;" at={K8.evidence} color={GREEN} size={34} />
			<KeptChip x={RX} y={870} text="pigment not used up." at={K8.evidence + 12} color={GREEN} size={34} />
			{void K8.why}{void K8.misread}
		</Overlay>
	);
};

// ---------- 9. When a colour doesn't come back ----------
const S9 = 'no-return';
const K9 = cues(sc(S9), {warning: 'warning', green: 'green sample', strong: 'strong base', wellc: 'well C', long: 'long time', yellow: 'yellow', acid: 'acid may', different: 'different kind', shape: 'change shape', brk: 'break down', add: 'add base', away: 'straight away'});
const Frag: React.FC<{cx: number; cy: number; at: number}> = ({cx, cy, at}) => {
	const f = useCurrentFrame();
	const q = smooth(prog(f, at, 20));
	if (f < at) return null;
	return (
		<g opacity={prog(f, at, 6)}>
			<path d={`M${cx - 6 - q * 40},${cy - 26} A30,24 0 0 0 ${cx - 6 - q * 40},${cy + 26} L${cx + 4 - q * 40},${cy + 6} L${cx - 8 - q * 40},${cy - 4} Z`} fill="#b9b3a8" stroke="#7d776d" strokeWidth={2.5} transform={`rotate(${-25 * q} ${cx} ${cy})`} />
			<path d={`M${cx + 6 + q * 40},${cy - 26} A30,24 0 0 1 ${cx + 6 + q * 40},${cy + 26} L${cx - 4 + q * 40},${cy + 6} L${cx + 8 + q * 40},${cy - 4} Z`} fill="#b9b3a8" stroke="#7d776d" strokeWidth={2.5} transform={`rotate(${25 * q} ${cx} ${cy})`} />
		</g>
	);
};
export const SceneNoReturn: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 400, y: 300, h: 460};
	const [sx, sy] = cabSurf(B.x, B.y, B.h);
	const t: Trip = {at: K9.acid - 26, to: [sx - 40, sy - 40], n: 4, gap: 7, y1: sy, color: C.red};
	const L = {cx: 1500, cy: 420, r: 160};
	const bend = smooth(prog(f, K9.shape, 24));
	const crack = K9.brk + 6;
	return (
		<Overlay>
			<TaskLine text="When a colour doesn't come back" at={4} size={52} />
			<CabBeaker x={110} y={420} h={240} states={[{at: -100, s: 'r'}, ...swings(10, 20, 4, 'g')]} o={0.7} />
			<Note x={110 + cabW(240) / 2} y={710} text="the cycle: colours return" size={26} color={INK_SOFT} anchor="middle" at={6} />
			<CabBeaker x={B.x} y={B.y} h={B.h} states={[{at: -100, s: 'g'}, {at: K9.yellow - 10, s: 'y', d: 40}]} />
			<ClockChip x={B.x + 60} y={B.y + B.h + 60} text="a long time, strong NaOH" at={K9.green} run={K9.long} len={60} />
			<DBottle x={900} y={600} h={220} lines={['HCl']} tab={ACID_T} at={K9.yellow} trips={[t]} />
			<AChip x={sx + 140} y={B.y + 40} text="red?" size={34} color={INK_SOFT} hand={false} at={tripDone(t) + 10} />
			<Fade at={K9.wellc - 4} out={K9.different}>
				<DimG at={K9.yellow - 10} to={0.35}>
					<Well cx={1060} cy={330} r={40} color={C.green} at={K9.wellc - 4} label="well C" />
					<Note x={1130} y={340} text="read it straight away" size={30} color={INK} at={K9.wellc} />
				</DimG>
			</Fade>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K9.different}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={L.r * 2} height={L.r * 2} fill={pale(C.yellow, 0.6)} />
				<CTok x={L.cx} y={L.cy} color={C.green} nH={0} s={1.6} bend={bend} o={f < crack ? 1 : 1 - prog(f, crack, 6)} />
				<Frag cx={L.cx} cy={L.cy} at={crack} />
			</LensFrame>
			<Note x={RX} y={660} text="pigment changed or destroyed:" size={32} color={INK} at={K9.brk} />
			<Note x={RX} y={704} text="not the acid-base equilibrium" size={32} color={INK} at={K9.brk + 10} />
			<Note x={RX} y={830} text="base only until green;" size={34} color={GREEN} at={K9.add} />
			<Note x={RX} y={876} text="cycle straight away" size={34} color={GREEN} at={K9.away} />
			{void K9.warning}{void K9.strong}{void picW}
		</Overlay>
	);
};

// ---------- 10. Using the chart, and its limits ----------
const S10 = 'use-and-limits';
const K10 = cues(sc(S10), {chart: 'your chart', vinegar: 'Vinegar', pinkred: 'pink-red', between: 'between pH', ammonia: 'ammonia cleaner', green: 'green', about: 'about eleven', check: 'Check each', meter: 'pH meter', but: 'But for', poor: 'poor choice', grad: 'gradually', steps: 'in steps', sharp: 'sharp', jump: 'jump'});
export const SceneUse: React.FC = () => {
	const f = useCurrentFrame();
	const g: ChartG = {x: 1150, y: 200, sw: 82, sh: 60, gap: 14};
	const mid = (i: number, j: number) => (chartX(g, i) + chartX(g, j) + g.sw) / 2;
	const R = {x: 420, w: 1260, lo: 0, hi: 14};
	const gid = 'p01cabband';
	const gw = smooth(prog(f, K10.grad, 30));
	const xa = rx(R, 1.5), xb = rx(R, 12.5);
	return (
		<Overlay>
			<TaskLine text="Using the chart, and its limits" at={4} size={52} />
			<DimG at={K10.but} to={0.4}><Chart g={g} at={K10.chart} size={20} /></DimG>
			<Fade at={K10.vinegar - 4} out={K10.grad}>
				<DimG at={K10.meter + 30} to={0.4}>
					<PicH p={VINEGAR} x={110} y={330} h={230} />
					<Well cx={300} cy={480} r={40} color={'#c63d6f'} at={K10.pinkred - 6} />
					<PenLink a={[350, 450]} b={[mid(0, 1), 300]} at={K10.between} />
					<AChip x={400} y={470} text="between pH 2 and 4" size={32} color={INK} hand={false} at={K10.between} />
					<AChip x={780} y={470} text="meter 2.5" size={32} color={'#6f55a3'} hand={false} at={K10.meter + 6} />
				</DimG>
				<PicH p={CLEANER} x={100} y={620} h={230} />
				<Well cx={300} cy={770} r={40} color={C.green} at={K10.green - 6} />
				<PenLink a={[350, 740]} b={[mid(5, 6), 300]} at={K10.about} />
				<AChip x={400} y={760} text="about 11 to 12" size={32} color={INK} hand={false} at={K10.about} />
				<AChip x={720} y={760} text="meter 11.4" size={32} color={'#6f55a3'} hand={false} at={K10.meter + 30} />
				<FullMeter x={1380} y={560} h={240} at={K10.meter} read={fr => (fr < K10.meter + 30 ? '2.5' : '11.4')} />
				<Note x={1380} y={860} text="meter: a value; chart: a range" size={30} color={INK_SOFT} at={K10.but - 4} />
			</Fade>
			<Fade at={K10.grad}>
				<defs><linearGradient id={gid} x1={0} x2={1} y1={0} y2={0}>{CHART.map((s, i) => <stop key={i} offset={(rx(R, s.p) - xa) / (xb - xa)} stopColor={s.c} />)}</linearGradient></defs>
				<Sx x={R.x - 24} y={440} text="red cabbage" size={30} color={INK} anchor="end" weight={700} at={K10.grad} />
				<rect x={xa} y={418} width={(xb - xa) * gw} height={36} rx={10} fill={`url(#${gid})`} stroke="rgba(60,45,20,0.3)" strokeWidth={2} />
				<Note x={(xa + xb) / 2} y={400} text="gradual, in steps, across the scale" size={30} color={INK_SOFT} anchor="middle" at={K10.steps} />
				<PHRuler R={R} y={600} at={K10.grad} size={24} />
			</Fade>
			<RBand R={R} y={520} a={8.3} b={10} cA={'#f1ece4'} cB={PINK} at={K10.sharp} h={36} label="phenolphthalein" size={30} />
			<Fade at={K10.sharp}><PicH p={PH_SET} x={110} y={700} h={150} /></Fade>
			<Note x={540} y={780} text="titration: one sharp change" size={36} color={TEAL} at={K10.sharp + 8} />
			<Note x={540} y={826} text="inside the jump (indicator video)" size={30} color={TEAL} at={K10.jump} />
			{void K10.check}{void K10.poor}{void K10.ammonia}{void PHMETER}
		</Overlay>
	);
};

// ---------- 11. Variables, validity, reliability and accuracy ----------
const S11 = 'validity-reliability';
const K11 = cues(sc(S11), {vars: 'variables', ph: ['pH', 1], colour: ['colour', 1], keep: 'Keep the', validity: 'Validity', reliability: 'Reliability', accuracy: 'Accuracy', better: 'much better'});
export const SceneVRA: React.FC = () => (
	<Overlay>
		<TaskLine text="Variables, validity, reliability, accuracy" at={4} size={52} />
		<VCard x={96} y={190} w={1728} h={232} title="Variables" titleAt={K11.vars} at={K11.vars} dim={K11.validity} lines={[
			{t: 'Independent: pH of the solution', at: K11.ph},
			{t: 'Dependent: colour of the extract', at: K11.colour},
			{t: 'Controlled: same extract batch, 3 drops, about 1 mL of solution, white tile, same lighting', at: K11.keep},
		]} />
		<VCard x={96} y={440} w={1728} h={140} title="Validity: measures what it should?" titleAt={K11.validity} at={K11.validity} dim={K11.reliability} color={GREEN} lines={[
			{t: 'One batch; water control; equal drops.', at: K11.validity + 20},
		]} />
		<VCard x={96} y={598} w={1728} h={140} title="Reliability: repeats agree?" titleAt={K11.reliability} at={K11.reliability} dim={K11.accuracy} lines={[
			{t: 'Repeat wells and three cycles give the same colours.', at: K11.reliability + 20},
		]} />
		<VCard x={96} y={756} w={1728} h={186} title="Accuracy: close to the true pH?" titleAt={K11.accuracy} at={K11.accuracy} color={'#6f55a3'} lines={[
			{t: 'Chart: about ±1 unit.', at: K11.accuracy + 20},
			{t: 'Calibrated meter: within a few hundredths.', at: K11.better},
		]} />
		<Note x={96} y={1000} text="Reliability means: repeated measurements under identical circumstances give similar results." size={24} color={INK_SOFT} hand={false} at={K11.reliability + 60} />
	</Overlay>
);

// ---------- 12. The risk assessment ----------
const S12 = 'risk-assessment';
const K12 = cues(sc(S12), {risk: 'risk assessment', hot: 'hot water', scald: 'scald', knife: 'knife', acid: 'point one zero', irritant: 'irritant', glasses: 'safety glasses', stains: 'stains', tasted: 'tasted'});
export const SceneRisk: React.FC = () => {
	const icon = (p: Parameters<typeof IconPlate>[0]['p'], y: number) => <IconPlate p={p} x={106} y={y} w={80} h={80} />;
	const Y0 = 190 + 58, RH = 96;
	return (
		<Overlay>
			<TaskLine text="Risk assessment" at={4} size={52} />
			<Fade at={K12.risk}>
				<PicH p={GLASSES} x={1290} y={100} h={56} />
				<Note x={1290 + picW(GLASSES, 56) + 14} y={140} text="always" size={30} color={GREEN} at={K12.risk} />
				<PicH p={GLOVES} x={1560} y={96} h={60} />
			</Fade>
			<Note x={1500} y={178} text="gloves: optional, per school (stains)" size={22} color={INK_SOFT} anchor="middle" hand={false} at={K12.risk + 10} />
			<RTable x={96} y={190} cols={[640, 400, 688]} head={['Hazard', 'Harm', 'Control']} at={K12.risk} rowH={RH} size={22} iconW={90} rows={[
				{at: K12.hot, icon: icon(HOTPLATE, Y0 + 8), cells: [['hot water (near boiling)'], ['scalds'], ['teacher prepares; heat-resistant beaker;', 'cool before use']]},
				{at: K12.knife, cells: [['knife'], ['cuts'], ['teacher chops the cabbage']]},
				{at: K12.acid, cells: [['0.10 mol/L HCl (0.36 %):', 'low hazard at this concentration'], ['eye irritation from a splash'], ['safety glasses; rinse with plenty of water']]},
				{at: K12.irritant, icon: icon(WASH, Y0 + 3 * RH + 8), cells: [['0.10 mol/L NaOH (0.40 %): just below the', 'EU irritant limit (0.5 %); supplier', 'sheets vary, so check yours'], ['a splash can still harm eyes', 'and skin: treat it as harmful'], ['safety glasses; rinse splashes with plenty', 'of water; separate labelled droppers']]},
				{at: K12.glasses + 30, cells: [['buffer solutions'], ['see each SDS'], ['safety glasses; follow the label']]},
				{at: K12.stains, cells: [['cabbage extract'], ['stains skin and clothing'], ['wipe spills; no tasting in the laboratory']]},
				{at: K12.tasted + 16, cells: [['waste'], ['none at these strengths'], ['dilute to the sink with plenty of water, if', 'school rules allow; solids in the bin']]},
			]} />
			<AChip x={96} y={940} text="follow your school's risk assessment and each safety data sheet" size={28} color={INK_SOFT} hand={false} at={K12.tasted + 30} />
			{void K12.scald}
		</Overlay>
	);
};
void ClockChip; void lerp; void KeptChip; void BASE_T;
