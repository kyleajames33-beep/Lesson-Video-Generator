// M8 C08 scenes 7 to 11: fresh portions and the order (one bottle feeding three tubes; the order set by hazard; the
// dichromate demonstration in the fume cupboard), one molecule with two groups (prop-2-en-1-ol drawn only; the crossed
// "alkene!"; an acid with a double bond; the report card), excluding candidates (strikes on the strip as each result is
// said; the decision chart builds with both branches continuing; bottle X labelled), what the tests can't tell you (two
// candidates, identical results; primary against secondary; where the C=C sits; the IR band to come) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {BR, CARB, DBOT, DBOT_A, DICH, FUME, sc} from './common';
import {
	AChip, AMB, ANS8, Arrow, CAND5, CC, COOH, CandStrip, Fade, FlowChart, GREYS, HTag, INK, INK_SOFT, MistakeX, MolAt, NAVY, OHV, PicV, Sx, TaskLine, Thumb, TickAt, TubeAt, natPt, tubeW, vis,
} from './parts';
import {cands, mouthOf} from './s1';

// ---------- 7. Fresh portions, and the order ----------
const K7 = cues(sc('order'), {fresh: 'fresh portion', spoil: 'spoil', order: 'order', hazard: 'hazard', start: 'Start with', mildest: 'mildest', sodium: 'sodium hydrogen', bromine: 'bromine water', dich: 'Dichromate', six: 'chromium six', last: 'last', teacher: 'teacher demonstration', cupboard: 'cupboard'});
export const SceneOrder: React.FC = () => {
	const B = {x: 110, y: 500, h: 380};
	const [bx, by] = natPt(DBOT, B.x, B.y, B.h, 1000, 230);
	const TY = 500, TH = 360;
	const tubes: [any, number, string, number][] = [[CARB.before, 420, '1  NaHCO_3 (mildest)', K7.mildest], [BR.orange, 820, '2  bromine water', K7.bromine], [DICH.orange, 1220, '3  acidified K_2Cr_2O_7 (Cr(VI))', K7.six]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Fresh portions, and the order" at={0} />
			<CandStrip c={cands()} />
			<AChip x={96} y={358} text="c03a: a fresh portion for each test" size={28} color={GREYS} hand={false} at={K7.fresh} />
			<PicV p={DBOT} x={B.x} y={B.y} h={B.h} />
			<Sx x={B.x + 68} y={B.y + B.h + 46} text="the sample" size={32} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />
			{tubes.map(([p, x, lab, at], i) => {
				const [mx, my] = mouthOf(x, TY, TH);
				return (
					<g key={i}>
						<TubeAt a={p} x={x} y={TY} h={TH} />
						<Arrow x1={bx + 20} y1={by - 10} x2={mx - 10} y2={my - 16} at={K7.fresh + i * 10} color={NAVY} width={4} />
						<Sx x={x + tubeW(p, TH) / 2} y={TY + TH + 56} text={lab} size={32} color={i === 2 ? COOH : INK} anchor="middle" weight={800} at={at - 6} />
					</g>
				);
			})}
			<Sx x={700} y={420} text="a fresh portion for each test" size={40} color={NAVY} hand weight={700} at={K7.fresh} />
			<Sx x={700} y={458} text="so one reagent can't spoil the next result" size={30} color={INK_SOFT} weight={600} at={K7.spoil} />
			<Fade at={K7.hazard - 10}>
				<rect x={430} y={980} width={1060} height={74} rx={37} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={960} y={1030} text="the order changes the hazard, not the results" size={38} color={NAVY} anchor="middle" weight={800} at={-1000} />
			</Fade>
			<PicV p={FUME} x={1530} y={520} h={320} at={K7.last - 10} />
			<HTag x={1530} y={890} text="teacher demonstration" size={34} color={COOH} at={K7.teacher} />
			<AChip x={1530} y={912} text="p04: Cr(VI) handled by the teacher" size={26} color={GREYS} hand={false} at={K7.cupboard} />
			{void K7.order}{void K7.start}{void K7.sodium}{void K7.dich}
		</svg>
	);
};

// ---------- 8. One molecule, two groups ----------
const K8 = cues(sc('two-groups'), {trap: 'trap', yes: 'A yes', prop: 'Prop-2-en-1-ol', structure: 'structure shows', fades: 'fades bromine', looks: 'looks like', also: 'also turns', fits: 'which fits', though: 'though', stopped: 'stopped', acid: 'an acid', fizz: 'fizz and', run: 'So run', own: 'own'});
export const SceneTwoGroups: React.FC = () => {
	const rows: [string, string, string][] = [['C=C: supported', '', CC], ['–OH: in the known structure;', 'green consistent', OHV], ['–COOH: not detected', '', GREYS]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="One molecule, two groups" at={0} />
			<Sx x={96} y={240} text="a yes for one group doesn't mean no for the others" size={38} color={AMB} hand weight={700} at={K8.yes} />
			<MolAt k="propenol" x={560} y={430} s={1.4} at={K8.prop - 10} ring={{cc: K8.prop + 20, oh: K8.prop + 30}} />
			<Sx x={560} y={318} text="prop-2-en-1-ol" size={40} color={INK} anchor="middle" weight={800} at={K8.prop} />
			<Sx x={560} y={548} text="drawn only: toxic, not a class sample" size={30} color={GREYS} anchor="middle" hand weight={700} at={K8.structure} />
			<Thumb p={BR.clear} x={140} y={590} h={220} at={K8.fades - 6} />
			<TickAt x={320} y={620} at={K8.fades + 10} color={CC} />
			<MistakeX x={360} y={640} text="alkene!" at={K8.looks} cross={K8.also + 26} note="the structure shows an alcohol too" size={38} />
			<Thumb p={DICH.green} x={900} y={590} h={220} at={K8.also} />
			<TickAt x={1080} y={620} at={K8.also + 20} color={OHV} />
			<Sx x={900} y={860} text="green fits its –OH group" size={32} color={OHV} weight={700} at={K8.fits} />
			<Sx x={900} y={900} text="(the C=C might add to that)" size={30} color={GREYS} weight={600} at={K8.though} />
			<Sx x={96} y={1000} text="stop at the first yes, and you'd never look for the alcohol" size={36} color={AMB} hand weight={700} at={K8.stopped} />
			{/* an acid with a double bond */}
			<Fade at={K8.acid - 10}>
				<rect x={1230} y={210} width={594} height={360} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			</Fade>
			<MolAt k="butenoic" x={1390} y={440} s={0.75} at={K8.acid} ring={{cc: K8.acid + 10, cooh: K8.acid + 14}} />
			<Sx x={1420} y={300} text="an acid with a C=C" size={30} color={INK_SOFT} anchor="middle" hand weight={700} at={K8.acid} />
			<Thumb p={CARB.fizz} x={1580} y={240} h={150} at={K8.fizz - 10} />
			<Thumb p={BR.clear} x={1700} y={240} h={150} at={K8.fizz} />
			<Sx x={1690} y={530} text="fizz and fade" size={34} color={INK} anchor="middle" hand weight={700} at={K8.fizz} />
			{/* the report card */}
			<Fade at={K8.own - 14}>
				<rect x={1290} y={620} width={534} height={330} rx={22} fill="#fffdf8" stroke={NAVY} strokeWidth={4} />
				<Sx x={1314} y={670} text="report each group" size={34} color={NAVY} hand weight={700} at={-1000} />
			</Fade>
			{rows.map(([a, b, c], i) => (
				<g key={a}>
					<Sx x={1314} y={730 + i * 76 + (i === 2 ? 30 : 0)} text={a} size={32} color={c} weight={800} at={K8.own - 8 + i * 6} />
					{b ? <Sx x={1314} y={770 + i * 76} text={b} size={30} color={c} weight={700} at={K8.own - 8 + i * 6} /> : null}
				</g>
			))}
			{void K8.trap}{void K8.run}{void COOH}{void INK_SOFT}
		</svg>
	);
};

// ---------- 9. Excluding candidates ----------
const K9 = cues(sc('excluding'), {back: 'Back to', one: 'One bottle', nofizz: 'no fizz', out1: ['out', 1], bromine: 'Bromine water', out2: ['out', 2], dich: 'Dichromate turns', out3: ['out', 3], orange: 'stay orange', ethanol: 'Only ethanol', notice: 'Notice', half: 'half the work', write: 'write down', every: 'Every no'});
export const SceneExcluding: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 110, y: 400, h: 420};
	const [lx, ly] = natPt(DBOT, B.x, B.y, B.h, DBOT_A.label[0], DBOT_A.label[1]);
	const isEth = prog(f, K9.ethanol, 12);
	const strip = cands([
		{strike: K9.orange},
		{strike: K9.out2 - 6},
		{glow: K9.ethanol},
		{strike: K9.orange + 4},
		{strike: K9.out1 - 6},
	]);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Excluding candidates" at={0} />
			<CandStrip c={strip} />
			<PicV p={DBOT} x={B.x} y={B.y} h={B.h} />
			<Sx x={lx} y={ly + 24} text="X" size={66} color={NAVY} anchor="middle" weight={800} at={-1000} opacity={1 - isEth} />
			<Sx x={lx} y={ly + 10} text="ethanol" size={26} color={ANS8} anchor="middle" weight={800} at={K9.ethanol} />
			<HTag x={B.x + 170} y={B.y + 200} text="X = ethanol" size={44} color={ANS8} at={K9.ethanol + 6} />
			<Sx x={96} y={900} text="fizz: none" size={34} color={INK} weight={700} at={K9.write} />
			<Sx x={96} y={946} text="bromine: stays orange" size={34} color={INK} weight={700} at={K9.write + 8} />
			<Sx x={96} y={992} text="dichromate: green" size={34} color={INK} weight={700} at={K9.write + 16} />
			<Sx x={96} y={1046} text="write down every result" size={30} color={AMB} hand weight={700} at={K9.write + 20} />
			<FlowChart cx={1200} y={380} step={210} qw={640} pw={350} size={30} psize={25} rows={[
				{q: 'NaHCO_3: fizz?', yes: 'yes: –COOH supported', no: 'no: not detected', at: K9.one - 10, lit: 'no', litAt: K9.nofizz, thumb: CARB.before},
				{q: 'bromine water: fades within seconds?', yes: 'yes: C=C supported', no: 'no: not detected', at: K9.bromine - 10, lit: 'no', litAt: K9.bromine + 20, thumb: BR.orange},
				{q: 'warm acidified K_2Cr_2O_7: green?', yes: 'yes: 1°/2° –OH supported', no: 'no: not detected', at: K9.dich - 10, lit: 'yes', litAt: K9.dich + 20, thumb: DICH.green},
			]} />
			<HTag x={1200} y={1010} text="the no results did half the work" size={38} color={AMB} anchor="middle" at={K9.half} />
			<HTag x={1200} y={1056} text="every no rules a candidate out" size={32} color={INK_SOFT} anchor="middle" at={K9.every} />
			{void K9.back}{void K9.out3}{void K9.notice}{void CAND5}{void vis}
		</svg>
	);
};

// ---------- 10. What the tests can't tell you ----------
const K10 = cues(sc('limits'), {suppose: 'Suppose', nochange: 'no change', fits1: 'fits cyclohexane', fits2: 'it fits', separate: 'separate', ir: 'infrared', band: 'band', primary: 'primary or secondary', sits: 'sits', show: 'They show', structure: 'structure', spectra: 'spectra'});
const IRSketch: React.FC<{x: number; y: number; w: number; h: number; at: number}> = ({x, y, w, h, at}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12);
	if (v <= 0.01) return null;
	let d = '';
	for (let i = 0; i <= 80; i++) {
		const u = i / 80;
		const dip = 0.6 * Math.exp(-(((u - 0.28) / 0.07) ** 2)) + 0.18 * Math.exp(-(((u - 0.62) / 0.02) ** 2)) + 0.12 * Math.exp(-(((u - 0.8) / 0.015) ** 2));
		d += `${i ? 'L' : 'M'}${(x + u * w).toFixed(1)},${(y + 20 + dip * (h - 40)).toFixed(1)} `;
	}
	return (
		<g opacity={v}>
			<rect x={x - 16} y={y - 20} width={w + 32} height={h + 70} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<line x1={x} x2={x + w} y1={y + h} y2={y + h} stroke={INK_SOFT} strokeWidth={2.5} />
			<DrawPath d={d} at={at} dur={40} color={OHV} width={4} />
			<Sx x={x + 0.28 * w} y={y + h + 34} text="~3300 cm⁻¹" size={26} color={OHV} anchor="middle" weight={700} at={-1000} />
			<Sx x={x + w - 4} y={y + 6} text="O–H band: coming in IR" size={30} color={OHV} anchor="end" hand weight={700} at={-1000} />
		</g>
	);
};
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const B = {x: 110, y: 420, h: 360};
	const [lx, ly] = natPt(DBOT, B.x, B.y, B.h, DBOT_A.label[0], DBOT_A.label[1]);
	const sep = prog(f, K10.separate, 12);
	const c0 = 96 + 165, c3 = 96 + 3 * 349.5 + 165;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="What the tests can't tell you" at={0} />
			<CandStrip c={cands([{light: [K10.fits1, 1e9]}, {}, {}, {light: [K10.fits2, 1e9]}, {}])} />
			{sep > 0.01 ? (
				<g opacity={sep}>
					<path d={`M${c0},336 L${c0},360 L${c3},360 L${c3},336`} fill="none" stroke={AMB} strokeWidth={4} />
					<Sx x={(c0 + c3) / 2} y={396} text="same results: can't tell" size={34} color={AMB} anchor="middle" hand weight={700} at={-1000} />
				</g>
			) : null}
			<PicV p={DBOT} x={B.x} y={B.y} h={B.h} />
			<Sx x={lx} y={ly + 22} text="Y" size={60} color={NAVY} anchor="middle" weight={800} at={-1000} />
			<AChip x={260} y={470} text="no fizz" size={30} color={NAVY} hand={false} at={K10.nochange} />
			<AChip x={260} y={540} text="stays orange" size={30} color={NAVY} hand={false} at={K10.nochange + 8} />
			<AChip x={260} y={610} text="stays orange" size={30} color={NAVY} hand={false} at={K10.nochange + 16} />
			<IRSketch x={110} y={880} w={480} h={120} at={K10.ir} />
			{/* primary against secondary; where the C=C sits */}
			<Fade at={K10.primary - 10}>
				<rect x={680} y={430} width={1144} height={190} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			</Fade>
			<MolAt k="propan1ol" x={830} y={530} s={0.72} at={K10.primary - 6} ring={{oh: K10.primary + 4}} />
			<MolAt k="propan2ol" x={1080} y={540} s={0.72} at={K10.primary} ring={{oh: K10.primary + 8}} />
			<Thumb p={DICH.green} x={1220} y={440} h={170} at={K10.primary + 10} />
			<Sx x={1380} y={520} text="both green:" size={34} color={OHV} weight={800} at={K10.primary + 14} />
			<Sx x={1380} y={566} text="1° or 2°? can't say" size={32} color={INK} weight={700} at={K10.primary + 20} />
			<Fade at={K10.sits - 24}>
				<rect x={680} y={650} width={1144} height={190} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			</Fade>
			<MolAt k="but1ene" x={830} y={750} s={0.72} at={K10.sits - 20} ring={{cc: K10.sits - 10}} />
			<MolAt k="but2ene" x={1080} y={750} s={0.72} at={K10.sits - 14} ring={{cc: K10.sits - 4}} />
			<Thumb p={BR.clear} x={1220} y={660} h={170} at={K10.sits - 6} />
			<Sx x={1380} y={740} text="both fade:" size={34} color={CC} weight={800} at={K10.sits} />
			<Sx x={1380} y={786} text="where is the C=C?" size={32} color={INK} weight={700} at={K10.sits + 6} />
			<Fade at={K10.structure - 10}>
				<rect x={680} y={880} width={1144} height={130} rx={20} fill="#f3f1ec" stroke={GREYS} strokeWidth={3} />
				<Sx x={710} y={934} text="tests: which groups." size={36} color={INK} weight={800} at={-1000} />
				<Sx x={710} y={984} text="Spectra (MS, IR, NMR): the whole structure." size={34} color={INK_SOFT} weight={700} at={-1000} />
			</Fade>
			{void K10.suppose}{void K10.band}{void K10.show}{void K10.spectra}
		</svg>
	);
};

// ---------- 11. Memory aid ----------
const K11 = cues(sc('memory-aid'), {one: 'One line', fizz: 'fizz', fade: 'fade', green: 'green', fizz2: ['Fizz', 2], fade2: ['fade', 2], green2: ['green', 2], run: 'Run all'});
export const SceneAid: React.FC = () => {
	const items: [any, string, number, string, string, number][] = [[CARB.fizz, 'Fizz', K11.fizz, '–COOH', COOH, K11.fizz2], [BR.clear, 'fade', K11.fade, 'C=C', CC, K11.fade2], [DICH.green, 'green', K11.green, '1° or 2° –OH', OHV, K11.green2]];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="One line for the three tests" at={0} />
			<rect x={96} y={190} width={1728} height={680} rx={26} fill="#fffdf8" stroke={NAVY} strokeWidth={5} />
			<Sx x={960} y={310} text="Fizz, fade, green." size={110} color={NAVY} anchor="middle" hand weight={700} at={4} />
			{items.map(([p, w, a, g, c, ga], i) => {
				const x = 300 + i * 500;
				return (
					<g key={w}>
						<TubeAt a={p} x={x} y={380} h={380} />
						<Sx x={x + tubeW(p, 380) / 2} y={820} text={g} size={42} color={c} anchor="middle" weight={800} at={ga} />
						{void a}
					</g>
				);
			})}
			<Sx x={960} y={950} text="Run all three, each on a fresh portion." size={44} color={INK} anchor="middle" weight={700} at={K11.run - 6} />
			<Sx x={960} y={1016} text="Every no rules a candidate out." size={38} color={INK_SOFT} anchor="middle" hand weight={700} at={K11.run + 20} />
			{void K11.one}
		</svg>
	);
};
