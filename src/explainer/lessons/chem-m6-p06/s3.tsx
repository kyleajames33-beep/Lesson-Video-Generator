// M6 P06 scenes 11 to 14: bench B (its concordant titres, the water rinse paling the acid, the error chain one chip per
// cue, A's and B's divisions side by side, the memory aid); the controlled conditions (one measured quantity, a list
// linked to its objects); validity, reliability and accuracy (three cards; bench B slides in beside accuracy); the risk
// table, rows dimming as each new one writes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, hexMix, sc} from './common';
import {BEAKER, BURETTE, DROPPER, FLASK, GLASSES, MO, PIPETTE, PIPETTE_G} from './assets';
import {
	ACIDFILL, AChip, BuretteFill, ChainV, CROSS, DimG, Drop, Fade, GREYX, INK, INK_SOFT, IconPlate, Note, Overlay, PenLink, PicH, PipettePlate, RTable, Ring, RingAt, Sx, TEAL, TERRA,
	TaskLine, UNKI, VCard, VIO, WATERB, burAt, flaskW, mw, picW, pipAt, rigPts, smooth,
} from './parts';
import {BENCH_B, MiniTable} from './s1';

// ---------- 11. Bench B: trace the error through the titre ----------
const S11 = 'bench-b-error';
const K11 = cues(sc(S11), {what: 'So what happened', big: 'too big', rinsed: 'Bench B rinsed', water: 'distilled water', dilutes: 'dilutes', more: 'more millilitres are', bigger: 'A bigger titre', divided: 'divided by more', z1038: 'zero point one zero three eight', low: 'low', rinse: "rinse with what's going in"});
export const SceneBenchB: React.FC = () => {
	const f = useCurrentFrame();
	const R = {tx: 760, ty: 700, bh: 420};
	const pale = smooth(prog(f, K11.dilutes, 40));
	const col = hexMix(ACIDFILL, '#f8f0dc', pale);
	const p = rigPts(R.tx, R.ty, R.bh);
	const LX = 1060, LY = 700, LS = 34;
	const la = 'A: 2.577 × 10^{−3} ÷ 0.02433 = 0.1059', lb = 'B: 2.577 × 10^{−3} ÷ 0.02482 = 0.1038';
	const vx = (t: string, sub: string) => LX + mw(t.slice(0, t.indexOf(sub)), LS, false, 700);
	const fin = K11.rinse - 6;
	return (
		<Overlay>
			<TaskLine text="What went wrong on bench B?" at={4} size={52} />
			<DimG at={fin} to={0.35}>
				<Sx x={96} y={260} text="bench B" size={36} color={INK} hand at={4} />
				<MiniTable x={96} y={290} vals={BENCH_B} at={-100} ring={-100} brk={-100} pulse={K11.big} />
				<Note x={96} y={540} text="each ≈ 0.5 mL bigger" size={32} color={VIO} at={K11.big + 8} />
				<AChip x={96} y={580} text="bench A mean 24.33 mL" size={30} color={TEAL} hand={false} at={6} />
				<AChip x={96} y={650} text="bench B mean 24.82 mL" size={30} color={UNKI} hand={false} at={10} />
				<BuretteFill {...burAt(R.tx, R.ty, R.bh)} h={R.bh} level={() => 2} color={col} />
				{[0, 1, 2].map(i => <Drop key={i} x={p.top[0]} y0={p.top[1] - 90} y1={p.top[1] + 40} at={K11.water + 6 + i * 14} color={WATERB} />)}
				<Sx x={p.tube(600)[0] + 20} y={p.tube(600)[1]} text="water from the rinse" size={28} color={INK_SOFT} hand at={K11.water + 10} />
				<Sx x={p.tube(600)[0] + 20} y={p.tube(600)[1] + 38} text="acid diluted" size={30} color={INK} weight={700} at={K11.dilutes + 10} />
			</DimG>
			<ChainV x={LX} y={250} gap={112} size={32} dim={fin} items={[
				{t: 'water in burette → acid diluted', color: INK_SOFT, at: K11.dilutes},
				{t: '→ titre bigger', color: VIO, at: K11.more},
				{t: '→ answer too low', color: TERRA, at: K11.low},
			]} />
			<g opacity={1 - 0.62 * prog(f, K11.low + 10, 14)}>
				<Fade at={K11.divided} out={fin}>
					<Sx x={LX} y={LY} text={la} size={LS} color={INK} weight={700} at={K11.divided} />
					<Sx x={LX} y={LY + 66} text={lb} size={LS} color={INK} weight={700} at={K11.divided + 10} />
					<RingAt cx={vx(lb, '0.02482') + mw('0.02482', LS, false, 700) / 2} cy={LY + 66 - 12} rx={mw('0.02482', LS, false, 700) / 2 + 14} ry={28} at={K11.divided + 20} color={VIO} />
					<Sx x={LX + mw(lb, LS, false, 700) + 20} y={LY + 66} text="(2% low)" size={30} color={TERRA} weight={800} at={K11.low} />
				</Fade>
			</g>
			<Note x={96} y={900} text="Rinse with what's going in." size={70} color={TEAL} at={K11.rinse} />
			<Sx x={96} y={968} text="burette: the solution it delivers; pipette: the solution it measures; volumetric and conical flasks: distilled water" size={26} color={INK_SOFT} weight={600} at={K11.rinse + 20} />
			{void K11.what}{void K11.rinsed}{void K11.bigger}{void K11.z1038}{void GREYX}
		</Overlay>
	);
};

// ---------- 12. Controlled conditions ----------
const S12 = 'controlled';
const K12 = cues(sc(S12), {nothing: 'nothing is changed', measuring: 'measuring one thing', same: 'the same', aliquot: 'the aliquot', standard: 'the standard', indicator: 'the indicator', colour: 'endpoint colour'});
export const SceneControlled: React.FC = () => {
	const PT = {tx: 230, ty: 780, h: 470};
	const VF = {x: 330, y: 400, h: 380};
	const DR = {x: 580, y: 500, h: 260};
	const OF = {x: 790, y: 500, h: 270};
	const X = 1110, ry = (i: number) => 400 + i * 66;
	const grey = K12.colour + 34;
	const tA: [number, number] = pipAt(PT.tx, PT.ty, PT.h, 1150);
	const tF: [number, number] = [VF.x + picW(FLASK, VF.h) * 0.62, VF.y + 70];
	const tD: [number, number] = [DR.x + picW(DROPPER, DR.h) * 0.62, DR.y + 40];
	const tO: [number, number] = [OF.x + flaskW(OF.h) * 0.62, OF.y + 40];
	const ats = [K12.aliquot, K12.standard, K12.indicator, K12.colour];
	const rows = ['25.00 mL aliquot, same pipette', 'same standard, 0.05154 mol/L', '3 drops of methyl orange', 'same endpoint: first permanent orange'];
	const tg = [tA, tF, tD, tO];
	return (
		<Overlay>
			<TaskLine text="Controlled conditions" at={4} size={56} />
			<Note x={96} y={250} text="nothing is changed to test its effect" size={34} color={INK_SOFT} at={K12.nothing} />
			<PipettePlate tipX={PT.tx} tipY={PT.ty} h={PT.h} rot={PIPETTE_G.tilt} />
			<PicH p={FLASK} x={VF.x} y={VF.y} h={VF.h} />
			<PicH p={DROPPER} x={DR.x} y={DR.y} h={DR.h} />
			<PicH p={MO.orange} x={OF.x} y={OF.y} h={OF.h} />
			<AChip x={X} y={220} text="Measured: the titre" size={42} color={TEAL} hand={false} at={K12.measuring} />
			<Sx x={X} y={340} text="controlled (kept the same):" size={32} color={INK_SOFT} hand at={K12.same} />
			<DimG at={grey + 20} to={0.45}>
				{rows.map((t, i) => (
					<g key={i}>
						<Sx x={X} y={ry(i)} text={t} size={32} color={INK} weight={700} at={ats[i]} />
						<PenLink a={[X - 16, ry(i) - 10]} b={tg[i]} at={ats[i] + 6} out={i < 3 ? ats[i + 1] : grey} />
					</g>
				))}
				<Sx x={X} y={ry(4)} text="same temperature, same burette" size={30} color={INK_SOFT} weight={600} at={K12.colour + 20} />
			</DimG>
			<Sx x={96} y={900} text="If a task asks for variables: the titre is what you measure; the aliquot, standard, indicator," size={28} color={INK_SOFT} weight={600} at={grey} />
			<Sx x={96} y={940} text="endpoint colour and temperature are controlled; nothing is varied to test its effect." size={28} color={INK_SOFT} weight={600} at={grey + 8} />
		</Overlay>
	);
};

// ---------- 13. Validity, reliability and accuracy ----------
const S13 = 'validity-reliability';
const K13 = cues(sc(S13), {validity: 'Validity', yes: 'Yes, if everything', ratio: 'one to two ratio', reliability: 'Reliability', conc: 'concordant titres', faulty: 'faulty run', accuracy: 'Accuracy', bench: 'bench B shows', wrong: 'wrong'});
export const SceneVRA: React.FC = () => {
	const f = useCurrentFrame();
	const X = 96, CW = 1080;
	const slide = (1 - smooth(prog(f, K13.wrong - 10, 22))) * 260;
	return (
		<Overlay>
			<TaskLine text="Validity, reliability, accuracy" at={4} size={52} />
			<VCard x={X} y={200} w={CW} h={180} title="Validity: does it answer the question?" titleAt={K13.validity} at={K13.validity} dim={K13.reliability} lines={[
				{t: 'One measured quantity, the titre; everything else controlled;', at: K13.yes},
				{t: '1 : 2 at the methyl orange endpoint.', at: K13.ratio},
			]} />
			<VCard x={X} y={400} w={CW} h={180} title="Reliability: do repeats agree?" titleAt={K13.reliability} at={K13.reliability - 4} dim={K13.accuracy} lines={[
				{t: 'Three titres within 0.05 mL;', at: K13.conc},
				{t: 'the bubble run excluded for its cause and repeated.', at: K13.faulty},
			]} />
			<VCard x={X} y={600} w={CW} h={226} title="Accuracy: close to the true value?" titleAt={K13.accuracy} at={K13.accuracy - 4} color={UNKI} lines={[
				{t: 'Dried, exactly weighed standard; analytical balance;', at: K13.accuracy + 14},
				{t: "rinse with what's going in; read at eye level;", at: K13.accuracy + 22},
				{t: 'no bubble; volumetric glassware.', at: K13.accuracy + 30},
			]} />
			<g transform={`translate(${slide},0)`} opacity={prog(f, K13.wrong - 10, 14)}>
				<Sx x={1290} y={600} text="bench B" size={34} color={INK} hand at={-100} />
				<MiniTable x={1290} y={630} vals={BENCH_B} at={-100} ring={-100} brk={-100} size={30} />
				<AChip x={1290} y={850} text="concordant but 2% low" size={32} color={TERRA} hand={false} at={-100} />
				<Sx x={1290} y={960} text="A: 0.1059" size={34} color={INK} weight={800} at={-100} />
				<Sx x={1510} y={960} text="B: 0.1038" size={34} color={TERRA} weight={800} at={-100} />
			</g>
			<Sx x={X} y={1030} text={'Accuracy (NESA, Science Years 7 to 10 Syllabus, 2018): "the extent to which a measured value agrees with its true value".'} size={22} color={INK_SOFT} weight={600} at={K13.accuracy + 30} />
			{void K13.bench}
		</Overlay>
	);
};

// ---------- 14. The risk assessment ----------
const S14 = 'risk-assessment';
const K14 = cues(sc(S14), {risk: 'The risk assessment', solid: 'Solid sodium carbonate', glasses: 'wear safety glasses', dilute: 'The dilute solutions', classification: 'classification', methyl: 'Methyl orange powder', fill: 'Fill the burette', filler: 'pipette filler'});
export const SceneRisk: React.FC = () => {
	const T = {x: 96, y: 200, rowH: 90};
	const cols = [660, 450, 620];
	const iconW = 96, headH = 58;
	const ry = (j: number) => T.y + headH + j * T.rowH;
	const ic = (p: typeof BEAKER, j: number) => <IconPlate p={p} x={T.x + 10} y={ry(j) + 8} w={iconW - 20} h={T.rowH - 16} />;
	const pk = (T.rowH - 16) / PIPETTE.box[3];
	const pipTop: [number, number] = [T.x + 10 + (iconW - 20) / 2 + (1180 - 1024) * pk * 0 + 6, ry(4) + 18];
	return (
		<>
			<Heading text="The risk assessment" at={4} size={60} />
			<Overlay>
				<RTable x={T.x} y={T.y} cols={cols} head={['Hazard', 'Harm', 'Control']} at={K14.risk} rowH={T.rowH} size={23} iconW={iconW} rows={[
					{at: K14.solid, icon: ic(GLASSES, 0), cells: ['solid Na_2CO_3 (H319)', 'serious eye irritation from dust', ['safety glasses; spatula;', 'clean up spills']]},
					{at: K14.dilute, icon: ic(BEAKER, 1), cells: [['0.1 mol/L HCl, 0.05 mol/L Na_2CO_3:', 'below GHS classification limits'], 'eye irritation from a splash', ['safety glasses;', 'wash spills with water']]},
					{at: K14.methyl, icon: ic(DROPPER, 2), cells: [['methyl orange: solid H301; indicator', 'solution (about 0.1%) below limits'], 'toxic if swallowed (solid)', ['a few drops; cap the bottle;', 'wash hands']]},
					{at: K14.fill, icon: ic(BURETTE, 3), cells: ['filling the burette', 'splash into the eyes', ['top below eye level; funnel', 'removed; clamp firm']]},
					{at: K14.filler - 20, icon: ic(PIPETTE, 4), dimAt: 100000, cells: ['pipetting', 'swallowing solution', ['pipette filler (the red bulb),', 'never by mouth']]},
					{at: K14.filler + 20, dimAt: 100000, cells: ['drying oven', 'burns from hot glassware', 'teacher only']},
					{at: K14.filler + 30, dimAt: 100000, cells: ['waste', '', ['neutral sodium chloride solution; sink', 'with water if school rules allow']]},
				]} />
				<Ring cx={pipTop[0]} cy={pipTop[1]} rx={22} ry={20} at={K14.filler} color={CROSS} seed={3} />
				<AChip x={T.x} y={T.y + headH + 7 * T.rowH + 22} text="follow your school's risk assessment and each bottle's safety data sheet" size={28} color={TEAL} hand={false} at={K14.filler + 40} />
				{void K14.glasses}{void K14.classification}{void INK}{void picW}
			</Overlay>
		</>
	);
};
