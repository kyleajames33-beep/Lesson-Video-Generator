// M6 C12 scenes 6 to 10: worked example 1 (equation and moles of the known; ratio and concentration), worked example 2
// (a two to one ratio; the unknown in the burette), and the memory aid. Board: task line, givens card at the left top,
// the kept mean chip and the answer chip at the right top, the equation strip, the mole bridge, then one working line
// per stage underneath (earlier lines dim).
import React from 'react';
import {cues} from '../../cues';
import {sc} from './common';
import {VINEGAR} from './assets';
import {
	AChip, Under, ConcStrip, DimG, EqLine, Fade, GCard, INK, INK_SOFT, KeptChip, MoleBridge, NAVY, Note, OpGlow, Overlay, P, PlateAt, Rig, RingAt, StepAfter, Sx, TEAL, TaskLine, UNK, VBracket, WLine,
	burAt, burPt, eq, fitSize, gLineY, levelY, mw,
} from './parts';
import {TASK} from './s1';

export const B = {x: 96, y: 600};
const GX = 96, GY = 230, GW = 840, GS = 32, GLH = 60;
export const EQ1 = (at: number) => eq(['CH_3COOH(aq)', '+', 'NaOH(aq)', '->', 'CH_3COONa(aq)', '+', 'H_2O(l)'], at);
export const EQ2 = (at: number) => eq(['Na_2CO_3(aq)', '+', '2HCl(aq)', '->', '2NaCl(aq)', '+', 'H_2O(l)', '+', 'CO_2(g)'], at);
const GIV1 = [{t: 'NaOH: c = 0.5000 mol/L, V = 18.57 mL', at: -100}, {t: 'vinegar: V = 10.00 mL', at: -100}];

// ---------- 6. Worked example 1: equation and moles of the known ----------
const S6 = 'we1-moles';
const K6 = cues(sc(S6), {four: 'Now four steps', balanced: 'balanced equation', react: 'react one to one', second: 'Second moles', know: 'know everything about', ncv: 'n equals c V', litres: 'in litres', r9285: 'nine point two eight five'});
export const SceneWe1Moles: React.FC = () => {
	const strip = EQ1(K6.balanced);
	const ss = fitSize(strip, 1100, 44);
	return (
		<Overlay>
			<TaskLine text={TASK} at={-100} />
			<StepAfter size={64} task={TASK} text="Step 1 of 4: equation" at={K6.balanced - 10} out={K6.second - 6} />
			<StepAfter size={64} task={TASK} text="Step 2 of 4: n(known)" at={K6.second} />
			<GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={K6.four} lines={[{t: GIV1[0].t, at: K6.four + 6}, {t: GIV1[1].t, at: K6.four + 14}]} />
			<KeptChip x={1000} y={250} text="mean titre = 18.57 mL" at={-100} color={NAVY} size={36} />
			<EqLine items={strip} x={96} y={540} size={ss} />
			<OpGlow items={strip} i={0} size={ss} x={96} y={540} at={K6.react} len={50} color={TEAL} />
			<OpGlow items={strip} i={2} size={ss} x={96} y={540} at={K6.react + 6} len={50} color={TEAL} />
			<MoleBridge x={B.x} y={B.y} at={K6.four + 20} boxes={[
				{head: 'known: NaOH', color: NAVY, fill: {t: '9.285 × 10^{−3} mol', at: K6.r9285 + 16}},
				{head: 'ratio', color: TEAL, fill: {t: '1 : 1', at: K6.react + 10}},
				{head: 'unknown: CH_3COOH', color: UNK},
			]} />
			<WLine x={96} y={830} size={40} dim={K6.r9285 + 10} items={P('n(NaOH) = c × V', K6.ncv)} />
			<Note x={96} y={900} text="V in litres: 18.57 mL = 0.01857 L" size={34} color={INK_SOFT} at={K6.litres} out={K6.r9285 - 40} />
			<WLine x={96} y={900} size={40} items={P('= 0.5000 × 0.01857', K6.r9285 - 26, {t: '= 9.285 × 10^{−3} mol', color: NAVY}, K6.r9285)} />
			{void K6.know}
		</Overlay>
	);
};

// ---------- 7. Worked example 1: ratio and concentration ----------
const S7 = 'we1-concentration';
const K7 = cues(sc(S7), {third: 'Third the mole', one: 'One to one', eth: 'ethanoic acid in', fourth: 'Fourth divide', aliquot: "the aliquot's volume", r9285: 'zero point nine two eight five', sig: 'four significant figures', r56: 'five point six', label: "The label's five"});
export const SceneWe1Conc: React.FC = () => {
	const strip = EQ1(-100);
	const ss = fitSize(strip, 1100, 44);
	return (
		<Overlay>
			<TaskLine text={TASK} at={-100} />
			<StepAfter size={64} task={TASK} text="Step 3 of 4: ratio" at={K7.third} out={K7.fourth - 6} />
			<StepAfter size={64} task={TASK} text="Step 4 of 4: c(unknown)" at={K7.fourth} />
			<DimG at={0} to={0.4}><GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={-100} lines={GIV1} /></DimG>
			<KeptChip x={1000} y={250} text="mean titre = 18.57 mL" at={-100} color={NAVY} size={36} />
			<Fade at={-100} out={K7.r56}><DimG at={0} to={0.4}><EqLine items={strip} x={96} y={540} size={ss} /></DimG></Fade>
			<DimG at={K7.r56} to={0.35}>
				<MoleBridge x={B.x} y={B.y} at={-100} boxes={[
					{head: 'known: NaOH', color: NAVY, fill: {t: '9.285 × 10^{−3} mol', at: -100}, lit: K7.third + 10},
					{head: 'ratio', color: TEAL, fill: {t: '1 : 1', at: -100}, lit: K7.one},
					{head: 'unknown: CH_3COOH', color: UNK, fill: {t: '9.285 × 10^{−3} mol', at: K7.eth}, lit: K7.eth},
				]} />
			</DimG>
			<DimG at={K7.eth} to={0.3}>
				<WLine x={96} y={830} size={40} items={P('n(NaOH) = c × V', -100)} />
				<WLine x={96} y={900} size={40} items={P('= 0.5000 × 0.01857', -100, {t: '= 9.285 × 10^{−3} mol', color: NAVY}, -100)} />
			</DimG>
			<CLine at={K7.fourth + 16} done={K7.r9285} dim={K7.r56} />
			<AChip x={1000} y={330} text="c(CH_3COOH) = 0.9285 mol/L" size={40} color={UNK} hand={false} at={K7.r9285 + 16} />
			<Note x={1000} y={450} text="data to 4 s.f. → 4 s.f." size={32} color={INK_SOFT} hand={false} at={K7.sig} out={K7.r56} />
			<PlateAt p={VINEGAR} x={1690} y={200} h={300} at={K7.r56 - 10} />
			<Sx x={1000} y={470} text="label: 5% acidity (5 g per 100 mL)" size={32} color={INK} weight={700} at={K7.r56} />
			<Sx x={1000} y={520} text="0.9285 mol/L × 60.05 g/mol = 55.8 g/L" size={32} color={INK_SOFT} weight={700} at={K7.r56 + 10} />
			<Sx x={1000} y={570} text="≈ 5.6 g per 100 mL" size={36} color={UNK} weight={800} at={K7.r56 + 20} />
			{void K7.aliquot}{void K7.label}
		</Overlay>
	);
};
/** The c = n ÷ V line (the working lines above it are dimmed by the caller). */
const CLine: React.FC<{at: number; done: number; dim: number}> = ({at, done, dim}) => (
	<WLine x={96} y={970} size={40} dim={dim} items={P('c = n ÷ V = 9.285 × 10^{−3} ÷ 0.01000', at, {t: '= 0.9285 mol/L', color: UNK}, done)} />
);

// ---------- 8. Worked example 2: a two to one ratio ----------
const S8 = 'we2-ratio';
const K8 = cues(sc(S8), {ratio: "The ratio isn't", stand: 'To standardise', pip: 'a student pipettes', sodium: 'sodium carbonate a', runs: 'runs the acid', conc: 'The concordant titres', r2245: 'twenty two point four five', two: 'two hydrochloric', accepts: 'carbonate accepts'});
export const T2 = 'Find c(HCl)';
const GIV2 = ['Na_2CO_3: c = 0.05000 mol/L, V = 25.00 mL', 'HCl: titres 22.45, 22.40, 22.50 mL'];
export const RIG8 = {tx: 1600, ty: 500, bh: 400, fh: 200};
export const SceneWe2Ratio: React.FC = () => {
	const R = RIG8;
	const b = burAt(R.tx, R.ty, R.bh);
	const [tubeR, tubeTop] = burPt(b.x, b.y, R.bh, 1172, 300);
	const strip = EQ2(K8.two);
	const ss = fitSize(strip, 1150, 44);
	const ly = gLineY(GY, 1, GLH);
	const rings = ['22.45', '22.40', '22.50'].map((t, k) => {
		const i = GIV2[1].indexOf(t);
		const x1 = GX + 28 + mw(GIV2[1].slice(0, i), GS, false, 600), w = mw(t, GS, false, 600);
		return <Under key={k} x1={x1 + 2} x2={x1 + w - 2} y={ly + 10} at={K8.r2245 + k * 6} color={TEAL} />;
	});
	return (
		<Overlay>
			<TaskLine text={T2} at={K8.stand} />
			<Fade at={-100} out={K8.two - 10}>
				<DimG at={K8.r2245} to={0.35}>
					<Rig tx={R.tx} ty={R.ty} bh={R.bh} fh={R.fh} level={fr => (fr < K8.runs ? 0 : Math.min(22.45, ((fr - K8.runs) / 90) * 22.45))} at={K8.ratio} clearAt={-100} />
					<Sx x={tubeR + 24} y={tubeTop} text="unknown: HCl" size={30} color={UNK} weight={800} at={K8.runs - 10} />
					<Sx x={R.tx - 130} y={R.ty + 130} text="standard:" size={28} color={NAVY} anchor="end" weight={800} at={K8.pip + 20} />
					<Sx x={R.tx - 130} y={R.ty + 166} text="Na_2CO_3" size={28} color={NAVY} anchor="end" weight={800} at={K8.pip + 20} />
					<Note x={R.tx} y={R.ty + 330} text="indicator: methyl orange" size={28} color={INK_SOFT} anchor="middle" at={K8.pip + 40} out={K8.sodium - 10} />
				</DimG>
			</Fade>
			<GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={K8.sodium - 6} lines={[{t: GIV2[0], at: K8.sodium}, {t: GIV2[1], at: K8.conc}]} />
			{rings}
			<KeptChip x={1000} y={250} text="mean titre = 22.45 mL" at={K8.r2245 + 30} color={NAVY} size={36} />
			<EqLine items={strip} x={96} y={540} size={ss} />
			<OpGlow items={strip} i={0} size={ss} x={96} y={540} at={K8.two + 20} len={50} color={TEAL} />
			<OpGlow items={strip} i={2} size={ss} x={96} y={540} at={K8.two + 26} len={50} color={TEAL} />
			<MoleBridge x={B.x} y={B.y} at={K8.two + 10} boxes={[
				{head: 'known: Na_2CO_3', color: NAVY},
				{head: 'ratio', color: TEAL, fill: {t: '1 Na_2CO_3 : 2 HCl', at: K8.two + 30}},
				{head: 'unknown: HCl', color: UNK},
			]} />
			<Note x={96} y={800} text="CO_3^{2−} accepts two protons" size={34} color={INK_SOFT} at={K8.accepts} out={K8.accepts + 90} />
		</Overlay>
	);
};

// ---------- 9. Worked example 2: the unknown in the burette ----------
const S9 = 'we2-burette-unknown';
const K9 = cues(sc(S9), {moles: 'Moles of carbonate', r125: 'one point two five zero', times: 'Times two for', r25: 'two point five zero zero', came: 'That acid came', divide: 'divide by the titre', r1114: 'zero point one one one four', matter: "It doesn't matter", always: 'You always go', unknown: 'to the unknown'});
export const SceneWe2Burette: React.FC = () => {
	const strip = EQ2(-100);
	const ss = fitSize(strip, 1150, 44);
	const R = {tx: 1680, ty: 310, bh: 300, fh: 150};
	const b = burAt(R.tx, R.ty, R.bh);
	const [tubeR] = burPt(b.x, b.y, R.bh, 1172, 0);
	const y0 = burPt(b.x, b.y, R.bh, 0, levelY(0))[1], y1 = burPt(b.x, b.y, R.bh, 0, levelY(22.45))[1];
	return (
		<Overlay>
			<TaskLine text={T2} at={-100} />
			<DimG at={0} to={0.4}><GCard x={GX} y={GY} w={GW} size={GS} lh={GLH} at={-100} lines={GIV2.map(t => ({t, at: -100}))} /></DimG>
			<KeptChip x={1000} y={250} text="mean titre = 22.45 mL" at={-100} color={NAVY} size={36} pulse={K9.divide} />
			<DimG at={0} to={0.4}><EqLine items={strip} x={96} y={540} size={ss} /></DimG>
			<MoleBridge x={B.x} y={B.y} at={-100} boxes={[
				{head: 'known: Na_2CO_3', color: NAVY, fill: {t: '1.250 × 10^{−3} mol', at: K9.r125 + 16}, lit: K9.unknown - 30},
				{head: 'ratio', color: TEAL, fill: {t: '1 Na_2CO_3 : 2 HCl', at: -100}, lit: K9.unknown - 15},
				{head: 'unknown: HCl', color: UNK, fill: {t: '2.500 × 10^{−3} mol', at: K9.r25 + 16}, lit: K9.unknown},
			]} />
			<WLine x={96} y={810} size={38} dim={K9.r25} items={P('n(Na_2CO_3) = 0.05000 × 0.02500', K9.moles + 30, {t: '= 1.250 × 10^{−3} mol', color: NAVY}, K9.r125)} />
			<WLine x={96} y={880} size={38} dim={K9.r1114} items={P('n(HCl) = 2 × 1.250 × 10^{−3}', K9.times, {t: '= 2.500 × 10^{−3} mol', color: UNK}, K9.r25)} />
			<WLine x={96} y={950} size={38} items={P('c(HCl) = 2.500 × 10^{−3} ÷ 0.02245', K9.divide + 10, {t: '= 0.1114 mol/L', color: UNK}, K9.r1114)} />
			<Fade at={K9.came - 10}>
				<Rig tx={R.tx} ty={R.ty} bh={R.bh} fh={R.fh} level={() => 22.45} at={K9.came - 10} clearAt={-100} />
				<Sx x={tubeR + 50} y={(y0 + y1) / 2 + 10} text="unknown" size={28} color={UNK} weight={800} at={K9.came} />
				<VBracket x={tubeR + 18} y1={y0} y2={y1} at={K9.divide} color={UNK} />
			</Fade>
			<AChip x={1000} y={340} text="c(HCl) = 0.1114 mol/L" size={40} color={UNK} hand={false} at={K9.r1114 + 20} />
			{void K9.matter}{void K9.always}
		</Overlay>
	);
};

// ---------- 10. Memory aid ----------
const S10 = 'memory-aid';
const K10 = cues(sc(S10), {here: "here's what to", known: 'Known to moles', start: 'Start with n', use: 'use the balanced', divide: 'then divide', avg: 'average only concordant'});
export const SceneAid: React.FC = () => (
	<Overlay>
		<DimG at={K10.avg} to={0.6}>
			<Note x={960} y={300} text="Known to moles, ratio, unknown." size={76} color={TEAL} anchor="middle" at={K10.known - 6} />
			<MoleBridge x={330} y={380} w={340} h={96} gap={90} size={30} at={K10.known + 20} boxes={[
				{head: 'n = c × V', color: NAVY, lit: K10.start},
				{head: 'ratio', color: TEAL, lit: K10.use},
				{head: 'c = n ÷ V', color: UNK, lit: K10.divide},
			]} />
		</DimG>
		<Note x={960} y={690} text="Average only concordant titres (within 0.10 mL)." size={56} color={'#26231f'} anchor="middle" at={K10.avg} />
		<ConcStrip x={660} y={850} w={600} lo={18.5} hi={18.95} at={K10.avg + 14} ticks={[]} size={20} dots={[
			{v: 18.6, at: K10.avg + 20}, {v: 18.55, at: K10.avg + 22}, {v: 18.55, at: K10.avg + 24, stack: 1}, {v: 18.9, at: K10.avg + 26, grey: K10.avg + 50},
		]} bracket={{a: 18.55, b: 18.65, at: K10.avg + 36, text: '0.10 mL'}} />
		{void K10.here}
	</Overlay>
);
