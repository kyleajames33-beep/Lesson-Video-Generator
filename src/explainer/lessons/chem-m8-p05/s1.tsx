// M8 P05 scenes 1 to 6: the hook (four dropper bottles A to D, the three test results as rack plates, the claims card
// with its three columns, the Cr(VI) tag), the aim and plan (bottles, the candidate classes, the plan card with a plate
// per test, the fume cupboard for the demonstration, the variables card), blank and known (three carbonate tubes in
// role outlines, what each control shows, the blank/known/unknown grid filling column by column), bromine water by the
// p02 method (known, blank and unknown on the white tile, the method card), the fizz test (the gas path set up first,
// the spatula, the known fizzing, gas to the limewater, milky, judge against the controls) and the dichromate
// demonstration (the water bath in the fume cupboard, drops, name chips, five minutes, green and orange).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BATH, BATH_A, BR, CARB, DICH, FUME, Heading, LIME, P02, TILE, sc} from './common';
import {
	AMB, ANS8, Bath, GREYC, Bubbles, Bung, CR6, Card, Clock, DimG, DrawPath, Dropper, FallDrop, GREYS, GasPath, Glow, INK, KNOWNC, LBot, MethodCard, NAVY, PicF, PicV, Pill, RoleBox, Spatula, Sx,
	INK_SOFT, TaskLine, Thumb, TubeAt, UNKN, Wr, bathPt, natPt, pillW, tubeW, vis,
} from './parts';

export const mouthOf = (x: number, y: number, h: number) => natPt(CARB.before, x, y, h, 1000, 232);
export const liqOf = (x: number, y: number, h: number) => natPt(CARB.before, x, y, h, 1000, 1350);

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {a: 'A', d: 'D', job: 'Your job', support: 'support', rule: 'rule out', three: 'three tests', controls: 'controls', six: 'six'});
export const SceneHook: React.FC = () => {
	const BX = [130, 345, 560, 775], BY = 230, BH = 400;
	const TH = {y: 740, h: 240, xs: [140, 410, 680]};
	const tw0 = tubeW(CARB.fizz, TH.h);
	const tests: [typeof CARB.fizz, string][] = [[CARB.fizz, 'fizz'], [BR.clear, 'fade'], [DICH.green, 'green']];
	const CX = 1090, CY = 200, CW = 740;
	return (
		<>
			<Heading text="Unknown organics: which claims can you back?" at={4} size={60} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{BX.map((x, i) => <LBot key={i} x={x} y={BY} h={BH} letter={'ABCD'[i]} letterAt={K1.a + i * Math.round((K1.d - K1.a) / 3)} glow={[K1.job, K1.job + 60]} />)}
				<Sx x={130} y={700} text="three tests:" size={40} color={INK} hand weight={700} at={K1.three - 10} />
				<Sx x={360} y={700} text="fizz, fade, green" size={46} color={NAVY} hand weight={700} at={K1.three} />
				<Pill x={720} y={668} text="c08" at={K1.three} color={GREYC} size={26} />
				{tests.map(([p, t], i) => (
					<g key={t}>
						<PicF p={p} x={TH.xs[i]} y={TH.y} h={TH.h} />
						<Sx x={TH.xs[i] + tw0 + 14} y={TH.y + TH.h - 30} text={t} size={38} color={INK} hand weight={700} at={K1.three + i * 8} />
					</g>
				))}
				<Glow cx={TH.xs[2] + tw0 / 2} cy={TH.y + TH.h / 2} rx={tw0 * 0.75} ry={TH.h * 0.6} at={K1.six} len={70} />
				<Pill x={TH.xs[2] + tw0 / 2 - 20} y={TH.y - 66} text="Cr(VI)" at={K1.six} color={CR6} size={32} anchor="middle" fill="#fbeee6" />
				{/* the claims card */}
				<Card x={CX} y={CY} w={CW} h={820} title="Your claims about A to D" titleSize={42} />
				{[['supported', ANS8, K1.support], ['not detected', INK, K1.rule - 14], ["can't tell", AMB, K1.rule]].map(([t, c, at], i) => (
					<Sx key={i} x={CX + 140 + i * 205} y={CY + 130} text={t as string} size={34} color={c as string} hand weight={700} at={at as number} />
				))}
				{['A', 'B', 'C', 'D'].map((l, j) => (
					<g key={l}>
						<Sx x={CX + 70} y={CY + 240 + j * 150} text={l} size={56} color={NAVY} anchor="middle" weight={800} at={-1000} />
						{[0, 1, 2].map(i => <rect key={i} x={CX + 130 + i * 205} y={CY + 180 + j * 150} width={185} height={96} rx={14} fill="none" stroke="rgba(60,45,20,0.3)" strokeWidth={3} strokeDasharray="10 8" />)}
						{[0, 1, 2].map(i => <Sx key={'q' + i} x={CX + 222 + i * 205} y={CY + 244 + j * 150} text="?" size={46} color={INK} anchor="middle" weight={800} at={K1.support + j * 6} />)}
					</g>
				))}
				<Sx x={CX + 30} y={CY + 790} text="your results decide what goes in each cell" size={30} color={INK} hand weight={700} at={K1.controls} />
			</svg>
		</>
	);
};

// ---------- 2. Aim and plan ----------
const K2 = cues(sc('aim-plan'), {aim: 'aim', hyd: 'hydroxyl', teacher: 'Your teacher tells', hc: 'hydrocarbon', fresh: 'fresh portion', fizz: 'fizz test', br: 'bromine water test', dich: 'dichromate test', demo: 'demonstration', indep: 'independent', dep: 'dependent', see: 'see'});
export const SceneAim: React.FC = () => {
	const PX = 96, PY = 560, PW = 1010;
	const rows: [typeof CARB.before, string, string, number][] = [
		[CARB.before, '1  NaHCO₃: fizz?', 'you', K2.fizz],
		[BR.orange, '2  bromine water: fade?', 'you, p02 method', K2.br],
		[DICH.orange, '3  acidified K₂Cr₂O₇: green?', 'teacher demonstration', K2.dich],
	];
	const VX = 1150, VY = 590, VW = 690;
	const ctrl = ['volumes and reagent bottle', 'bath temperature and time', 'time before reading', 'white background'];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Aim: test unknowns for C=C, –OH, –COOH" at={0} size={54} />
			{[0, 1, 2, 3].map(i => <LBot key={i} x={110 + i * 150} y={190} h={240} letter={'ABCD'[i]} glow={[K2.teacher + i * 6, K2.hc + 30]} />)}
			<Card x={96} y={445} w={1010} h={100} at={K2.hc} color={KNOWNC} />
			<Wr x={124} y={490} text="candidates: hydrocarbons, alcohols," at={K2.hc} size={36} color={INK} weight={700} />
			<Wr x={124} y={530} text="carboxylic acids (no aldehydes)" at={K2.hc + 26} size={36} color={INK} weight={700} />
			<Pill x={960} y={460} text="c08" at={K2.hc} color={GREYC} size={26} />
			<Wr x={720} y={260} text="test for:" at={K2.aim} size={36} color={INK} hand />
			<Wr x={720} y={320} text="C=C" at={K2.aim + 30} size={44} color="#1f8f86" />
			<Wr x={720} y={375} text="–OH" at={K2.hyd} size={44} color="#7a4fb0" />
			<Wr x={870} y={375} text="–COOH" at={K2.hyd + 30} size={44} color="#c4432f" />
			<DimG at={K2.indep} to={0.55}>
				<Card x={PX} y={PY} w={PW} h={470} title="Plan" />
				<Wr x={PX + 130} y={PY + 54} text="a fresh portion for every test" at={K2.fresh} size={38} color={NAVY} hand />
				{rows.map(([p, t, s, at], i) => (
					<g key={i}>
						<Thumb p={p} x={PX + 26} y={PY + 82 + i * 128} h={118} />
						<Wr x={PX + 150} y={PY + 132 + i * 128} text={t} at={at} size={40} color={INK} weight={800} />
						<Wr x={PX + 150} y={PY + 176 + i * 128} text={s} at={at + 14} size={32} color={i === 2 ? CR6 : KNOWNC} hand />
					</g>
				))}
			</DimG>
			<PicF p={FUME} x={1160} y={200} h={350} />
			<Wr x={1490} y={300} text="teacher" at={K2.demo} size={38} color={CR6} hand />
			<Wr x={1490} y={345} text="demonstration" at={K2.demo + 8} size={38} color={CR6} hand />
			<Wr x={1490} y={390} text="in a fume cupboard" at={K2.demo + 16} size={38} color={CR6} hand />
			<Glow cx={1335} cy={375} rx={200} ry={190} at={K2.demo} len={60} />
			<Card x={VX} y={VY} w={VW} h={445} title="Variables" />
			{[0, 1, 2].map(i => <LBot key={i} x={VX + 470 + i * 70} y={VY + 14} h={130} letter={'ABC'[i]} glow={[K2.indep + i * 6, K2.dep]} />)}
			<Sx x={VX + 30} y={VY + 108} text="Independent" size={32} color={KNOWNC} hand weight={700} at={K2.indep} />
			<Wr x={VX + 30} y={VY + 150} text="which liquid is in the tube" at={K2.indep + 8} size={36} color={INK} weight={800} />
			<Sx x={VX + 30} y={VY + 206} text="Dependent" size={32} color={KNOWNC} hand weight={700} at={K2.dep} />
			<Wr x={VX + 30} y={VY + 248} text="the observation" at={K2.dep + 8} size={36} color={INK} weight={800} />
			<Sx x={VX + 30} y={VY + 302} text="Controlled" size={32} color={KNOWNC} hand weight={700} at={K2.see + 10} />
			{ctrl.map((c, i) => <Wr key={i} x={VX + 50 + (i % 2) * 320} y={VY + 346 + Math.floor(i / 2) * 44} text={c} at={K2.see + 20 + i * 9} size={i % 2 ? 28 : 28} color={INK} weight={700} />)}
		</svg>
	);
};

// ---------- 3. Blank and known ----------
const K3 = cues(sc('blank-known'), {every: 'Every test', blank: 'A blank uses', distilled: 'distilled water', should: 'should show', else: 'something else', tube: 'the tube', water: 'the water or', reagent: 'the reagent', known: 'A known', eth: 'ethanoic acid', works: 'reagent works', pos: 'positive', row: 'every row', unk: ['unknown', 2]});
export const SceneBlankKnown: React.FC = () => {
	const H = 400, Y = 200, XS = [110, 470, 830];
	const W = tubeW(CARB.before, H);
	const roles = ['blank', 'known', 'unk'] as const;
	const lab: [string, string, string, number][] = [['blank', 'distilled water', INK, K3.blank], ['known', 'has the group', KNOWNC, K3.known], ['unknown', 'A, B, C or D', UNKN, K3.every + 20]];
	const GX = 1180, GY = 200, cols = [210, 130, 190, 130];
	const gx = (i: number) => GX + cols.slice(0, i).reduce((a, b) => a + b, 0);
	const tests: [typeof CARB.before, string, string][] = [[CARB.before, 'fizz', 'ethanoic\nacid'], [BR.orange, 'fade', 'cyclo-\nhexene'], [DICH.orange, 'green', 'ethanol']];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Blank, known, unknown" at={0} />
			{XS.map((x, i) => (
				<g key={i}>
					<PicF p={CARB.before} x={x} y={Y} h={H} />
					<RoleBox x={x - 14} y={Y - 14} w={W + 28} h={H + 28} role={roles[i]} at={i === 0 ? 0 : i === 1 ? K3.known : K3.every + 20} glow={[K3.blank, K3.known, K3.unk][i]} />
					<Sx x={x + W / 2} y={Y + H + 62} text={lab[i][0]} size={40} color={lab[i][2]} anchor="middle" weight={800} at={lab[i][3]} />
					<Sx x={x + W / 2} y={Y + H + 106} text={lab[i][1]} size={34} color={lab[i][2]} anchor="middle" weight={700} at={lab[i][3] + 6} />
				</g>
			))}
			<Wr x={XS[0] + W / 2} y={Y + H + 164} text="should show no change" at={K3.should} size={32} color={INK} hand anchor="middle" />
			<Wr x={XS[0] + W / 2} y={Y + H + 212} text="if it changes, the cause is:" at={K3.else} size={32} color={INK} hand anchor="middle" />
			{[['tube', K3.tube], ['water', K3.water], ['reagent', K3.reagent]].map(([t, at], i) => <Pill key={i} x={XS[0] - 10 + [0, 100, 222][i]} y={Y + H + 244} text={t as string} at={at as number} color={CR6} size={28} />)}
			<Wr x={XS[1] + W / 2} y={Y + H + 164} text="ethanoic acid (fizz test)" at={K3.eth} size={32} color={INK} hand anchor="middle" />
			<Wr x={XS[1] + W / 2} y={Y + H + 212} text="the reagent works today" at={K3.works} size={32} color={INK} hand anchor="middle" />
			<Wr x={XS[1] + W / 2} y={Y + H + 260} text="what a positive looks like" at={K3.pos} size={32} color={INK} hand anchor="middle" />
			<Wr x={XS[2] + W / 2} y={Y + H + 164} text="judged against both" at={K3.unk} size={32} color={INK} hand anchor="middle" />
			{/* the grid */}
			<Card x={GX - 20} y={GY} w={680} h={700} title="One row per test" />
			{['test', 'blank', 'known', 'unknown'].map((t, i) => <Sx key={t} x={gx(i) + 8} y={GY + 120} text={t} size={32} color={[INK, INK, KNOWNC, UNKN][i]} hand weight={700} at={i === 0 ? -1000 : [0, K3.blank, K3.known, K3.unk][i]} />)}
			{tests.map(([p, t, k], j) => {
				const ry = GY + 150 + j * 180;
				return (
					<g key={t}>
						<line x1={GX} x2={GX + 650} y1={ry} y2={ry} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
						<Thumb p={p} x={GX} y={ry + 14} h={150} />
						<Sx x={GX + 128} y={ry + 100} text={t} size={34} color={INK} hand weight={700} at={-1000} />
						<Wr x={gx(1) + 8} y={ry + 100} text="water" at={K3.distilled + j * 8} size={32} color={INK} weight={800} />
						{k.split('\n').map((ln, q) => <Wr key={q} x={gx(2) + 8} y={ry + 84 + q * 38 - (k.includes('\n') ? 0 : -16)} text={ln} at={(j === 0 ? K3.eth : K3.pos + 10) + j * 10 + q * 6} size={32} color={KNOWNC} weight={800} />)}
						<Wr x={gx(3) + 8} y={ry + 100} text="A to D" at={K3.unk + j * 6} size={32} color={UNKN} weight={800} />
					</g>
				);
			})}
			<Pill x={GX} y={GY + 720} text="p03: blank, known, unknown" at={K3.row} color={GREYC} size={28} />
			{void vis}{void DrawPath}
		</svg>
	);
};

// ---------- 4. Bromine water: the p02 method ----------
const K4 = cues(sc('bromine-recall'), {already: 'already run', card: 'shown on the card', cyclo: 'Cyclohexene', fades: 'fades within', water: 'Water is', diluted: 'diluted', orange: 'orange'});
export const SceneBromine: React.FC = () => {
	const H = 560, Y = 300, CXS = [300, 560, 820];
	const w = tubeW(P02.known, H);
	const tubes: [typeof P02.known, string[], string, number][] = [
		[P02.known, ['known:', 'cyclohexene'], KNOWNC, K4.cyclo],
		[P02.blank, ['blank: water,', 'same dilution'], INK, K4.water],
		[P02.unk, ['unknown'], UNKN, 0],
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Test 2: bromine water (p02 method)" at={0} />
			<PicF p={TILE} x={190} y={560} h={490} />
			{tubes.map(([p, t, c, at], i) => (
				<g key={i}>
					<PicF p={p} x={CXS[i] - w / 2} y={Y} h={H} />
					{t.map((ln, k) => <Sx key={k} x={CXS[i]} y={222 + k * 40 + (t.length === 1 ? 20 : 0)} text={ln} size={34} color={c} anchor="middle" hand weight={700} at={at} />)}
				</g>
			))}
			<Glow cx={CXS[0]} cy={Y + H * 0.6} rx={90} ry={260} at={K4.fades} len={60} />
			<Glow cx={CXS[1]} cy={Y + H * 0.6} rx={90} ry={260} at={K4.orange} len={60} />
			<Wr x={CXS[0]} y={930} text="fades within seconds" at={K4.fades + 6} size={32} color={INK} hand anchor="middle" />
			<Wr x={CXS[1] + 30} y={980} text="stays orange" at={K4.orange} size={34} color="#c25a12" hand anchor="middle" />
			<MethodCard x={1060} y={200} w={770} title="Same method as p02" chip="p02" lines={[
				{t: '1.0 mL sample + 2.0 mL bromine water', at: K4.card, size: 36},
				{t: 'stopper; shake 10 s', at: K4.card + 24},
				{t: 'normal room light; read at once', at: K4.card + 48, size: 36},
				{t: 'white tile behind the tubes', at: K4.card + 72, size: 36},
			]} lh={70} />
			<PicF p={FUME} x={1080} y={620} h={400} />
			<Wr x={1440} y={760} text="teacher dispenses" at={K4.already} size={36} color={CR6} hand />
			<Wr x={1440} y={805} text="bromine water in" at={K4.already + 10} size={36} color={CR6} hand />
			<Wr x={1440} y={850} text="the fume cupboard" at={K4.already + 20} size={36} color={CR6} hand />
			{void K4.diluted}
		</svg>
	);
};

// ---------- 5. The fizz test ----------
const K5 = cues(sc('fizz-test'), {put: 'Put two', app: 'gas-collection apparatus', add: 'add a small', solid: 'solid sodium', way: 'the way your', known: 'The known', away: 'away', blank: "blank doesn't", gas: 'The gas bubbles', milky: 'milky', judge: 'Judge'});
export const SceneFizz: React.FC = () => {
	const f = useCurrentFrame();
	const H = 480, Y = 200;
	const W = tubeW(CARB.before, H);
	const BXs = 84, KX = 474, UX = 1184;
	const LW = {x: 868, y: 180, h: 500};
	const [mx, my] = mouthOf(KX, Y, H);
	const [ix, iy] = natPt(LIME.clear, LW.x, LW.y, LW.h, 540, 262);
	const [lqx, lqy] = liqOf(KX, Y, H);
	const xs = [BXs, KX, UX];
	const roles = ['blank', 'known', 'unk'] as const;
	const labs = ['blank', 'known', 'unknown'];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Test 1: NaHCO₃ fizz" at={0} />
			{xs.map((x, i) => (
				<g key={i}>
					{i === 1 ? <TubeAt a={CARB.before} b={CARB.fizz} swap={K5.away - 10} x={x} y={Y} h={H} /> : <PicF p={CARB.before} x={x} y={Y} h={H} />}
					<RoleBox x={x - 9} y={Y - 12} w={W + 18} h={H + 24} role={roles[i]} at={0} />
					<Sx x={x + W / 2} y={Y + H + 56} text={labs[i]} size={38} color={[INK, KNOWNC, UNKN][i]} anchor="middle" weight={800} at={-1000} />
					<Spatula x={mouthOf(x, Y, H)[0] + 16} y={mouthOf(x, Y, H)[1] - 34} at={K5.add + i * 26 - 10} tip={K5.add + i * 26 + 6} out={K5.add + i * 26 + 26} />
				</g>
			))}
			<Bubbles x={lqx} y={lqy + 90} at={K5.away} n={8} spread={50} rise={240} color="#ffffff" />
			<PicF p={LIME.clear} x={LW.x} y={LW.y} h={LW.h} o={1 - prog(f, K5.milky, 16)} />
			<PicV p={LIME.milky} x={LW.x} y={LW.y} h={LW.h} at={K5.milky} />
			<Bung m={[mx, my]} b={[ix, iy]} at={K5.app} />
			<GasPath a={[mx, my - 70]} b={[ix - 4, iy - 6]} at={K5.gas} bow={-30} />
			<Wr x={(mx + ix) / 2} y={Y - 92} text="set up first; gas path open" at={K5.app + 8} size={32} color={NAVY} hand anchor="middle" />
			{xs.map((x, i) => {
				const res: [string, number, string][] = [['no fizz', K5.blank, INK], ['fizzes straight away', K5.away + 4, KNOWNC], ['judge against both', K5.judge + 6, UNKN]];
				return (
					<g key={'r' + i}>
						<rect x={x - 9} y={Y + H + 80} width={W + 18} height={90} rx={16} fill="#fffdf8" stroke={[INK_SOFT, KNOWNC, UNKN][i]} strokeWidth={3} strokeDasharray={i === 0 ? '10 8' : undefined} />
						<Sx x={x + W / 2} y={Y + H + 138} text="?" size={40} color={INK} anchor="middle" weight={800} at={-1000} out={res[i][1] - 6} />
						<Wr x={x + W / 2} y={Y + H + 138} text={res[i][0]} at={res[i][1]} size={i === 1 ? 31 : 34} color={res[i][2]} weight={800} anchor="middle" />
					</g>
				);
			})}
			<Wr x={LW.x + 140} y={Y + H + 130} text="milky: CO₂" at={K5.milky} size={34} color={INK} weight={800} anchor="middle" />
			{/* judge against the controls */}
			<DrawPath d={`M${UX + W / 2},${Y + H + 172} Q${(UX + KX + W) / 2},${Y + H + 230} ${KX + W / 2 + 30},${Y + H + 172}`} at={K5.judge} dur={16} color={UNKN} width={5} />
			<DrawPath d={`M${UX + W / 2 - 20},${Y + H + 176} Q${(UX + BXs + W) / 2},${Y + H + 270} ${BXs + W / 2 + 20},${Y + H + 172}`} at={K5.judge + 8} dur={20} color={UNKN} width={5} />
			<rect x={80} y={968} width={1474} height={90} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.24)" strokeWidth={3} />
			<Sx x={104} y={1026} text="Method" size={38} color={NAVY} hand weight={700} at={-1000} />
			<Wr x={260} y={1026} text="2 mL sample" at={K5.put} size={34} color={INK} weight={800} />
			<Wr x={510} y={1026} text="apparatus ready first" at={K5.app} size={34} color={INK} weight={800} />
			<Wr x={910} y={1026} text="small spatula of solid NaHCO₃" at={K5.add} size={34} color={INK} weight={800} />
			<Wr x={1586} y={230} text="addition and" at={K5.way} size={30} color={INK} hand />
			<Wr x={1586} y={266} text="closure: your" at={K5.way + 8} size={30} color={INK} hand />
			<Wr x={1586} y={302} text="teacher's method" at={K5.way + 16} size={30} color={INK} hand />
			<Wr x={1586} y={400} text="lift the tube out" at={K5.gas + 10} size={30} color={CR6} hand />
			<Wr x={1586} y={436} text="before the" at={K5.gas + 18} size={30} color={CR6} hand />
			<Wr x={1586} y={472} text="fizzing stops" at={K5.gas + 26} size={30} color={CR6} hand />
			<Wr x={1586} y={580} text="CO₂ + Ca(OH)₂" at={K5.milky} size={30} color={INK} weight={700} />
			<Wr x={1586} y={620} text="→ CaCO₃(s)" at={K5.milky + 8} size={30} color={INK} weight={700} />
			<Wr x={1586} y={660} text="+ H₂O" at={K5.milky + 16} size={30} color={INK} weight={700} />
			{void FallDrop}
		</svg>
	);
};

// ---------- 6. The dichromate demonstration ----------
const K6 = cues(sc('dichromate-demo'), {now: 'Now the dichromate', fume: 'fume cupboard', small: 'small volumes', two: 'two millilitres', five: 'five drops', bath: 'water bath', flame: 'no flame', batch: 'This batch', eth: 'ethanol', b: 'B', d: 'D', water: 'water the blank', after: 'After about', green: 'green', orange: 'orange'});
export const SceneDichromate: React.FC = () => {
	const BX = 330, BY = 340, BH = 540;
	const tubes = BATH_A.tubes.map(nx => bathPt(BX, BY, BH, nx, BATH_A.mouth));
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Test 3: acidified K₂Cr₂O₇ (teacher demonstration)" at={0} size={52} />
			<PicF p={FUME} x={130} y={190} h={850} o={0.22} />
			<Bath x={BX} y={BY} h={BH} swap={K6.green - 6} size={28} spread={235} chipY={BY - 92} resY={BY + BH + 22} chips={[
				{name: 'ethanol (known)', at: K6.eth, color: KNOWNC, res: 'green', resAt: K6.green},
				{name: 'B', at: K6.b, color: UNKN, res: 'green', resAt: K6.green + 8},
				{name: 'D', at: K6.d, color: UNKN, res: 'orange', resAt: K6.orange},
				{name: 'water (blank)', at: K6.water, color: INK, res: 'orange', resAt: K6.orange + 8},
			]} />
			{tubes.map(([tx, ty], i) => (
				<g key={i}>
					<Dropper x={tx} y={ty - 12} s={0.62} at={K6.five + i * 20} out={K6.five + i * 20 + 22} />
					{[0, 1, 2].map(k => <FallDrop key={k} x={tx} y0={ty - 8} y1={ty + 150} at={K6.five + i * 20 + 6 + k * 5} color="#eef3f6" s={0.9} />)}
				</g>
			))}
			<Pill x={140} y={990} text="in the fume cupboard" at={K6.fume} color={CR6} size={30} />
			<MethodCard x={1100} y={200} w={730} title="Teacher demonstration" color={CR6} lines={[
				{t: '2 mL acidified K₂Cr₂O₇ per tube', at: K6.two, size: 38},
				{t: '5 drops of liquid', at: K6.five, size: 38},
				{t: 'water bath, about 60 °C', at: K6.bath, size: 38},
				{t: 'about 5 min', at: K6.bath + 30, size: 38},
				{t: 'no flame: organics are flammable', at: K6.flame, size: 36, color: CR6},
			]} lh={70} h={480} />
			<Wr x={1130} y={730} text="about 0.1 mol/L K₂Cr₂O₇ in about" at={K6.two + 20} size={27} color="#4d4840" weight={600} />
			<Wr x={1130} y={764} text="1 mol/L H₂SO₄, teacher-made" at={K6.two + 30} size={27} color="#4d4840" weight={600} />
			<Pill x={1130} y={800} text="Cr(VI): small volumes" at={K6.small} color={CR6} size={30} fill="#fbeee6" />
			<Clock cx={1260} cy={940} r={58} at={K6.bath} from={K6.after} to={K6.green - 4} />
			<Wr x={1350} y={935} text="after about 5 min:" at={K6.after} size={38} color={INK} hand />
			<Wr x={1350} y={985} text="green or orange?" at={K6.after + 14} size={38} color={INK} hand />
			{void K6.now}{void K6.batch}{void pillW}{void BATH}
		</svg>
	);
};
