// M6 P07 scenes 11 to 13: the limits of the result (one row per spoken limit, each with its board icon); validity,
// reliability and accuracy (three cards, the previous one dimming); the risk table, rows dimming as each new one writes.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {BUFFER, GLASSES, PHMETER, PHTH, PIPETTE, VINEGAR} from './assets';
import {AChip, AMB, CROSS, DimG, Fade, GREEN, GREYX, INK, INK_SOFT, IconPlate, Note, Overlay, PicH, RTable, Ring, StepCard, Sx, TEAL, TaskLine, VCard, picW, pulseAt} from './parts';

// ---------- 11. The limits of the result ----------
const S11 = 'limitations';
const K11 = cues(sc(S11), {limits: 'report the limits', this: 'This result', more: 'More bottles', few: 'A few other', density: 'density', temp: 'record the'});
export const SceneLimits: React.FC = () => {
	const f = useCurrentFrame();
	const X = 96, TX = 420, Y = [330, 520, 690, 850];
	const vh = 150, vw = picW(VINEGAR, vh);
	const pz = pulseAt(f, K11.few + 10, 0.12, 40);
	const ax = TX + 600, ay = Y[1] - 10;
	return (
		<Overlay>
			<TaskLine text="The limits of the result" at={4} size={56} />
			<StepCard n={5} text="Limitations" at={K11.limits} x={1190} y={110} />
			<DimG at={K11.few} to={0.4}>
				<Fade at={K11.this}><PicH p={VINEGAR} x={X} y={Y[0] - 110} h={vh} /></Fade>
				<Fade at={K11.more}>
					<g opacity={0.35}><PicH p={VINEGAR} x={X + vw + 20} y={Y[0] - 110} h={vh} /><PicH p={VINEGAR} x={X + 2 * vw + 40} y={Y[0] - 110} h={vh} /></g>
				</Fade>
				<Sx x={TX} y={Y[0] - 20} text="one bottle: result for the tested bottle" size={38} color={INK} weight={700} at={K11.this + 10} />
				<Sx x={TX} y={Y[0] + 30} text="batch or brand: sample more bottles" size={32} color={INK_SOFT} weight={700} at={K11.more + 10} />
			</DimG>
			<DimG at={K11.density} to={0.4}>
				<Sx x={TX} y={Y[1]} text="other acids: counted" size={38} color={INK} weight={700} at={K11.few + 6} />
				<g transform={`translate(${ax},${ay}) scale(${pz}) translate(${-ax},${-ay})`}>
					<AChip x={ax - 220} y={ay - 42} text="as ethanoic acid" size={34} color={AMB} hand={false} at={K11.few + 10} />
				</g>
			</DimG>
			<Sx x={TX} y={Y[2]} text="g per 100 mL ≠ % by mass: needs the density" size={38} color={INK} weight={700} at={K11.density} />
			<DimG at={K11.temp} to={0.4}><Note x={TX} y={Y[2] + 46} text="practice video" size={28} color={INK_SOFT} at={K11.density + 12} /></DimG>
			<Fade at={K11.temp}><PicH p={PHMETER} x={X} y={Y[3] - 110} h={150} /></Fade>
			<Sx x={TX} y={Y[3]} text="pH at 25 °C: record the temperature" size={38} color={INK} weight={700} at={K11.temp} />
			{void GREYX}
		</Overlay>
	);
};

// ---------- 12. Validity, reliability and accuracy ----------
const S12 = 'validity-reliability';
const K12 = cues(sc(S12), {v: 'Validity', clear: 'vinegar is clear', ph: 'And the pH', r: 'Reliability', conc: 'concordant titres', three: 'three pH', a: 'Accuracy', std: 'standardised base', vol: 'volumetric glassware', probe: 'a probe calibrated'});
export const SceneVRA: React.FC = () => {
	const X = 96, CW = 1500;
	return (
		<Overlay>
			<TaskLine text="Validity, reliability, accuracy" at={4} size={52} />
			<VCard x={X} y={200} w={CW} h={256} title="Validity: measures what was intended?" titleAt={K12.v} at={K12.v} dim={K12.r} lines={[
				{t: 'Clear sample, 1 : 1 reaction, phenolphthalein endpoint near equivalence;', at: K12.clear},
				{t: 'pH on the undiluted sample;', at: K12.ph},
				{t: 'held the same: aliquot, NaOH, indicator dose, endpoint rule.', at: K12.ph + 30, color: GREEN},
			]} />
			<VCard x={X} y={476} w={CW} h={210} title="Reliability: repeats agree?" titleAt={K12.r} at={K12.r - 4} dim={K12.a} lines={[
				{t: 'Titres 17.05 to 17.15 mL (within 0.10 mL);', at: K12.conc},
				{t: 'pH 2.45 to 2.46.', at: K12.three},
			]} />
			<VCard x={X} y={706} w={CW} h={256} title="Accuracy: close to the true value?" titleAt={K12.a} at={K12.a - 4} color={AMB} lines={[
				{t: 'Standardised NaOH; volumetric pipette and flask;', at: K12.std},
				{t: 'buffers pH 2.00 and 7.00 either side;', at: K12.probe},
				{t: 'readings at eye level.', at: K12.probe + 20},
			]} />
			<Sx x={X} y={1030} text="NESA glossary (2025): accuracy, the extent to which measurements are considered to be close to the true value." size={22} color={INK_SOFT} weight={600} at={K12.a + 30} />
			{void K12.vol}{void TEAL}
		</Overlay>
	);
};

// ---------- 13. The risk assessment ----------
const S13 = 'risk-assessment';
const K13 = cues(sc(S13), {risk: 'The risk assessment', naoh: 'This sodium', vin: 'Vinegar this', phth: 'Phenolphthalein solution', flam: 'flammable', two: 'use two drops', filler: 'pipette filler'});
export const SceneRisk: React.FC = () => {
	const T = {x: 96, y: 190, rowH: 104};
	const cols = [760, 420, 560];
	const iconW = 96, headH = 58;
	const ry = (j: number) => T.y + headH + j * T.rowH;
	const ic = (p: typeof GLASSES, j: number) => <IconPlate p={p} x={T.x + 10} y={ry(j) + 8} w={iconW - 20} h={T.rowH - 16} />;
	const ph = T.rowH - 16, pk = ph / PIPETTE.box[3], pw = picW(PIPETTE, ph);
	const bulb: [number, number] = [T.x + 10 + (iconW - 20) / 2 + 4, ry(4) + 24];
	return (
		<>
			<Heading text="The risk assessment" at={4} size={60} />
			<Overlay>
				<RTable x={T.x} y={T.y} cols={cols} head={['Hazard', 'Harm', 'Control']} at={K13.risk} rowH={T.rowH} size={21} iconW={iconW} rows={[
					{at: K13.naoh, icon: ic(GLASSES, 0), cells: [['0.09940 mol/L NaOH (0.40 %): just below the EU irritant', 'limit (0.5 %); school guides treat 0.05 to < 0.5 mol/L', 'as an irritant; supplier sheets vary, so check yours'], ['treat a splash as harmful', 'to eyes and skin'], ['safety glasses;', 'rinse splashes with water']]},
					{at: K13.vin, icon: ic(VINEGAR, 1), cells: [['vinegar (4 g per 100 mL) and its dilution:', 'not classified'], ['a food product, but lab', 'samples may be contaminated'], ['label it; never taste', 'lab samples']]},
					{at: K13.flam, icon: ic(PHTH.pink, 2), cells: [['phenolphthalein indicator (about 0.5 % in ethanol): flammable', '(H225 or H226); the solid is Carc. 1B, may cause cancer (H350);', "the solution's label varies by supplier, so check yours"], ['fire; long-term harm from', 'repeated exposure'], ['two drops; cap the bottle;', 'no flames; wash hands']]},
					{at: K13.two + 30, icon: ic(BUFFER, 3), cells: ['pH buffers 2.00 and 7.00: check the label', 'eye irritation from a splash', 'safety glasses']},
					{at: K13.filler, icon: ic(PIPETTE, 4), dimAt: 100000, cells: ['pipetting', 'swallowing solution', ['pipette filler (the red bulb ringed),', 'never by mouth']]},
					{at: K13.filler + 24, dimAt: 100000, cells: ['waste', '', ['neutralised sodium ethanoate solution;', 'sink with water if school rules allow']]},
				]} />
				<Ring cx={bulb[0]} cy={bulb[1]} rx={16} ry={20} at={K13.filler + 8} color={CROSS} seed={3} />
				<AChip x={T.x} y={T.y + headH + 6 * T.rowH + 24} text="follow your school's risk assessment and each bottle's safety data sheet" size={28} color={TEAL} hand={false} at={K13.filler + 40} />
				{void K13.phth}{void INK}
			</Overlay>
		</>
	);
};
