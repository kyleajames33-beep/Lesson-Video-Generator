// M6 P05 scenes 8 to 13: property 3, dilution (pipette into the volumetric flask, the ratio bar shrinking together, the
// P04 comparison); property 4, capacity (the same dose uses up the diluted buffer's ethanoate); the variables; validity,
// reliability and accuracy (the hook's dilute hydrochloric acid returns as the closer control); the risk table; the aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, kf, sc} from './common';
import {BEAKER, BUFFER, FLASK_G, GLASSES, HOLDER, PIPETTE, PIPETTE_G, WASH, WASH_N} from './assets';
import {
	AChip, AMBER_INK, BUF, BUFTINT, BUF_TAB, CROSS, ChangeBar, DimG, Fade, FillBeaker, FlaskFill, FullMeter, GradPip, HAZ, INK, INK_SOFT, IconPlate, Note, Overlay, PROTON, PROTON_INK,
	PenLink, PicH, PipettePlate, RTable, RatioBar, Ring, Stream, Sx, TEAL, TRead, TabBeaker, TaskLine, TempChip, VAxis, VCard, WATERC, WATERL, WATER_TAB, beakerW, countRead, flaskPt,
	flicker, fullMeterW, picW, pipPt, vaY, vis,
} from './parts';
import type {VA} from './parts';

// ---------- 8. Property 3: dilution ----------
const S8 = 'dilution';
const K8 = cues(sc(S8), {property: 'property', dilute: 'Dilute ten', flask: 'volumetric flask', strength: 'strength practical', equally: 'equally', ratio: 'ratio stays', barely: 'barely move', f472: 'four point seven two', diluting: 'Diluting hydrochloric', whole: 'a whole unit'});
export const SceneDilution: React.FC = () => {
	const f = useCurrentFrame();
	const FL = {x: 560, y: 470, h: 520};
	const neck = flaskPt(FL.x, FL.y, FL.h, 1024, FLASK_G.cropTop);
	const ringY = flaskPt(FL.x, FL.y, FL.h, 0, FLASK_G.ring)[1];
	const neckL = flaskPt(FL.x, FL.y, FL.h, 962, 0)[0];
	const tip: [number, number] = [neck[0], neck[1] + 40];
	const t0 = K8.dilute + 24, t1 = K8.flask - 4, w0 = K8.flask + 10, w1 = K8.strength + 40;
	const level = (fr: number) => kf(fr, [[t0, 1852], [t1, 1800], [w0, 1800], [w1, FLASK_G.ring]]);
	const surfY = flaskPt(FL.x, FL.y, FL.h, 0, level(f))[1];
	const pipO = vis(f, K8.dilute - 10, w0, 12);
	const flowO = vis(f, t0, t1, 6);
	const bulb = pipPt(tip[0], tip[1], 400, PIPETTE_G.tilt, PIPETTE_G.bulb[0], PIPETTE_G.bulb[1]);
	const WH = 220, k = WH / WASH.box[3], ww = picW(WASH, WH);
	const nozzle: [number, number] = [neck[0] + 70, neck[1] - 120];
	const wx = nozzle[0] - (ww - (WASH_N.nozzle[0] - WASH.box[0]) * k), wy = nozzle[1] - (WASH_N.nozzle[1] - WASH.box[1]) * k;
	const washO = vis(f, w0 - 10, w1 + 14, 10);
	const shrink = (fr: number) => kf(fr, [[K8.equally, 1], [K8.equally + 34, 0.1]]);
	const read = (fr: number) => (fr < K8.f472 - 30 ? '4.68' : flicker(K8.f472 - 30, K8.f472 + 2, '4.72', 4.6, 4.8)(fr));
	const BASEY = 880, KC = 300;
	return (
		<Overlay>
			<TaskLine text="Property 3: dilution" at={4} size={56} />
			<FlaskFill x={FL.x} y={FL.y} h={FL.h} level={level} tint={BUFTINT} stopper={prog(f, w1 + 10, 14)} />
			{pipO > 0.01 ? <g opacity={pipO}><PipettePlate tipX={tip[0]} tipY={tip[1]} h={400} rot={PIPETTE_G.tilt} /></g> : null}
			{flowO > 0.01 ? <line x1={tip[0]} y1={tip[1]} x2={tip[0]} y2={surfY} stroke="#8fcabb" strokeWidth={6} strokeLinecap="round" opacity={0.85 * flowO} /> : null}
			<g opacity={washO}><g transform={`translate(${wx + ww},${wy}) scale(-1,1)`}><PicH p={WASH} x={0} y={0} h={WH} /></g></g>
			<Stream a={nozzle} b={[neck[0] + 6, neck[1] - 10]} at={w0} out={w1} />
			<DimG at={K8.equally} to={0.4}>
				<Note x={bulb[0] - 50} y={bulb[1] + 10} text="10.00 mL buffer" size={34} color={INK} anchor="end" at={K8.dilute + 10} />
				<Fade at={K8.flask}><line x1={neckL - 4} y1={ringY} x2={FL.x - 30} y2={ringY} stroke={INK_SOFT} strokeWidth={3} /></Fade>
				<Note x={FL.x - 40} y={ringY + 12} text="100.0 mL: ÷ 10" size={34} color={INK} anchor="end" at={K8.flask + 6} />
			</DimG>
			<RatioBar x={880} base={BASEY} k={240} nA={shrink} nB={shrink} at={K8.equally - 10} labA="CH_3COOH" labB="CH_3COO^{−}" size={26} mid={{t: 'ratio still 1 : 1', at: K8.ratio, color: TEAL}} />
			<Note x={993} y={BASEY + 90} text="both ÷ 10" size={30} color={INK_SOFT} anchor="middle" at={K8.equally + 30} />
			<TRead x={1260} y={260} text={read} at={K8.barely - 20} sample="10.00" size={44} />
			<Sx x={1260} y={240} text="diluted buffer" size={26} color={INK_SOFT} weight={700} at={K8.barely - 20} />
			<ChangeBar x={1340} y1={BASEY} y2={BASEY - 0.04 * KC} at={K8.f472 + 4} solid color={BUF} w={50} />
			<Sx x={1340} y={BASEY - 30} text="+0.04" size={32} color={BUF} anchor="middle" weight={800} at={K8.f472 + 10} />
			<Sx x={1340} y={BASEY + 40} text="buffer" size={26} color={INK} anchor="middle" weight={700} at={K8.f472 + 10} />
			<ChangeBar x={1560} y1={BASEY} y2={BASEY - 0.96 * KC} at={K8.whole} solid color="#b9b3a8" ink={INK_SOFT} w={50} />
			<Sx x={1560} y={BASEY - 0.96 * KC - 30} text="+0.96" size={32} color={INK_SOFT} anchor="middle" weight={800} at={K8.whole + 10} />
			<Sx x={1560} y={BASEY + 40} text="HCl" size={26} color={INK} anchor="middle" weight={700} at={K8.whole} />
			<AChip x={1260} y={430} text="P04: HCl 1.08 → 2.04, +0.96" size={30} color={INK_SOFT} hand={false} at={K8.diluting} />
			{void K8.property}{void beakerW}
		</Overlay>
	);
};

// ---------- 9. Property 4: capacity ----------
const S9 = 'capacity';
const K9 = cues(sc(S9), {price: 'paid a price', tenth: 'tenth', all: 'all its ethanoate', ph: 'And the pH', f341: 'three point four one', more: 'more than a whole', same: 'Same pH', less: 'much less capacity'});
export const SceneCapacity: React.FC = () => {
	const BX = 300, BY = 430, BH = 300, bw = beakerW(BH), cx = BX + bw / 2;
	const a = K9.all;
	const nA = (fr: number) => kf(fr, [[a + 6, 1e-4], [a + 30, 2e-4]]);
	const nB = (fr: number) => kf(fr, [[a + 5, 1e-4], [a + 6, 0]], false);
	const read = countRead([{t0: K9.f341 - 40, t1: K9.f341 + 4, a: 4.72, b: 3.41}], 2, 0);
	const BL = 470, KC = 250;
	return (
		<Overlay>
			<TaskLine text="Property 4: capacity" at={4} size={56} />
			<TabBeaker x={BX} y={BY} h={BH} label="diluted buffer, 20.0 mL" tab={BUF_TAB} at={-100} tint={BUFTINT} size={28} />
			<GradPip tipX={cx} tipY={BY - 4} len={220} at={a - 24} out={a + 50} drop={a} fall={110} dropColor="#f0b9a8" />
			<Note x={cx + 60} y={BY - 120} text="1.00 × 10^{−4} mol HCl" size={30} color={HAZ} at={a + 4} out={K9.ph} />
			<RatioBar x={760} base={760} k={1.6e6} nA={nA} nB={nB} at={6} labA="CH_3COOH" labB="CH_3COO^{−}" size={26} greyB={a + 30}
				valA={fr => (fr < a + 30 ? '1.00 × 10^{−4} mol' : '2.00 × 10^{−4} mol')} valB={fr => (fr < a + 6 ? '1.00 × 10^{−4} mol' : '')} slices={[{at: a + 6, n: 1e-4}]} />
			<Note x={873} y={480} text="a tenth of the partners" size={32} color={INK} anchor="middle" at={K9.tenth} out={a} />
			<Note x={990} y={720} text="ethanoate used up" size={30} color={INK_SOFT} at={a + 34} />
			<TRead x={1180} y={250} text={read} at={K9.price} sample="10.00" size={44} />
			<ChangeBar x={1290} y1={BL} y2={BL + 0.09 * KC} at={K9.ph} solid color={BUF} w={50} />
			<Sx x={1290} y={BL - 24} text="buffer: −0.09" size={26} color={BUF} anchor="middle" weight={800} at={K9.ph} />
			<ChangeBar x={1530} y1={BL} y2={BL + 1.31 * KC} at={K9.f341} solid color={BUF} ink={HAZ} w={50} />
			<Sx x={1530} y={BL - 24} text="diluted: −1.31" size={28} color={HAZ} anchor="middle" weight={800} at={K9.f341 + 8} />
			<AChip x={1180} y={880} text="same pH, less capacity" size={40} color={TEAL} hand={false} at={K9.same} />
			<Sx x={1180} y={990} text="buffers video" size={26} color={INK_SOFT} weight={600} at={K9.same + 10} />
			{void K9.more}{void K9.less}
		</Overlay>
	);
};

// ---------- 10. The variables ----------
const S10 = 'variables';
const K10 = cues(sc(S10), {vars: 'the variables', ind: 'independent variable', tested: 'being tested', dep: 'dependent variable', ctrl: 'control', portion: 'portion volume', dose: 'the dose', temp: 'the temperature', meter: 'calibrated meter', rinse: 'rinsing routine'});
export const SceneVariables: React.FC = () => {
	const MX = 90, MY = 250, MH = 240;
	const GXs = [110, 290], GYs = [610, 820], GHs = 110;
	const CX = 1010;
	const ry = (i: number) => 600 + i * 56;
	return (
		<Overlay>
			<TaskLine text="The variables" at={K10.vars - 10} size={56} />
			<FullMeter x={MX} y={MY} h={MH} at={-100} read={() => '4.68'} />
			<PicH p={WASH} x={430} y={250} h={210} />
			<TempChip x={640} y={300} from={25.0} at={-100} />
			{[0, 1].map(c => [0, 1].map(r => <TabBeaker key={`${c}${r}`} x={GXs[c]} y={GYs[r]} h={GHs} label={r === 0 ? 'buffer' : 'water'} tab={r === 0 ? BUF_TAB : WATER_TAB} at={-100} tint={r === 0 ? BUFTINT : WATERC} size={18} />))}
			<GradPip tipX={620} tipY={760} len={240} at={-100} />
			<DimG at={K10.dep} to={0.42}>
				<Sx x={CX} y={330} text="Independent: buffer or water;" size={32} color={INK} weight={700} at={K10.ind} />
				<Sx x={CX + 190} y={374} text="acid, base or dilution" size={32} color={INK} weight={700} at={K10.tested + 20} />
			</DimG>
			<DimG at={K10.ctrl} to={0.42}><Sx x={CX} y={450} text="Dependent: change in pH" size={32} color={INK} weight={700} at={K10.dep} /></DimG>
			<Sx x={CX} y={540} text="Controlled:" size={36} color={TEAL} hand at={K10.ctrl} />
			{([['20.0 mL portions', K10.portion, [GXs[1] + 110, GYs[0] + 50]], ['1.00 mL of 0.100 mol/L', K10.dose, [650, 600]], ['25 °C', K10.temp, [800, 330]], ['same calibrated meter', K10.meter, [MX + fullMeterW(MH) - 20, MY + 80]], ['same rinse routine', K10.rinse, [545, 380]], ['same wait for a steady reading', K10.rinse + 30, [MX + 120, MY + 70]]] as [string, number, [number, number]][]).map(([t, at, tgt], i) => (
				<g key={i}>
					<Sx x={CX + 30} y={ry(i)} text={t} size={30} color={INK} weight={600} at={at} />
					<PenLink a={[CX + 10, ry(i) - 11]} b={tgt} at={at + 6} out={i < 5 ? [K10.dose, K10.temp, K10.meter, K10.rinse, K10.rinse + 30][i] : undefined} />
				</g>
			))}
		</Overlay>
	);
};

// ---------- 11. Validity, reliability and accuracy ----------
const S11 = 'validity-reliability';
const K11 = cues(sc(S11), {validity: 'Validity', only: 'Only because', fresh: 'fresh portion', closer: 'even closer control', plunge: 'plunge', reliability: 'Reliability', batches: 'three fresh batches', accuracy: 'Accuracy', calibrate: 'calibrate the meter', pipettes: 'with pipettes', changes: 'compare changes', offset: 'constant offset', cancels: 'cancels out'});
export const SceneVRA: React.FC = () => {
	const X = 96, CW = 780;
	const AV: VA = {x: 1420, top: 220, bottom: 430, lo: 2, hi: 5};
	return (
		<Overlay>
			<TaskLine text="Validity, reliability, accuracy" at={4} size={52} />
			<VCard x={X} y={200} w={CW} h={170} title="Validity: does it show buffering?" titleAt={K11.validity} at={K11.validity - 4} dim={K11.plunge + 10} lines={[
				{t: 'Water control, same dose and volume;', at: K11.only},
				{t: 'fresh portion per test.', at: K11.fresh},
			]} />
			<DimG at={K11.reliability} to={0.35}>
				<FullMeter x={960} y={200} h={220} at={K11.closer} read={() => '4.68'} />
				<Sx x={1080} y={450} text="dilute HCl (the hook's Y)" size={24} color={INK_SOFT} anchor="middle" weight={700} at={K11.closer + 6} />
				<VAxis a={AV} ticks={[2, 3, 4, 5]} at={K11.closer + 10} size={22} />
				<ChangeBar x={AV.x + 70} y1={vaY(AV, 4.68)} y2={vaY(AV, 2.32)} at={K11.plunge - 4} solid color={WATERL} ink="#3f7fb5" w={44} />
				<Sx x={AV.x + 110} y={vaY(AV, 3.5)} text="4.68 → 2.32" size={30} color="#3f7fb5" weight={800} at={K11.plunge + 6} />
				<AChip x={930} y={490} text="unbuffered control at pH 4.68 (dilute HCl): same pH, no buffering" size={26} color={TEAL} hand={false} at={K11.plunge + 10} />
			</DimG>
			<VCard x={X} y={400} w={CW} h={170} title="Reliability: do repeats agree?" titleAt={K11.reliability} at={K11.reliability - 4} dim={K11.accuracy} lines={[
				{t: 'Three fresh batches;', at: K11.batches},
				{t: 'buffer changes within 0.02.', at: K11.batches + 20},
			]} />
			<VCard x={X} y={600} w={CW} h={170} title="Accuracy: close to the true pH?" titleAt={K11.accuracy} at={K11.accuracy - 4} color={AMBER_INK} lines={[
				{t: 'Calibrated meter;', at: K11.calibrate},
				{t: 'volumetric and graduated pipettes.', at: K11.pipettes},
			]} />
			<AChip x={X} y={810} text="the same offset in both readings: the change is unaffected" size={30} color={TEAL} hand={false} at={K11.offset} />
			<Sx x={X} y={940} text="4.68 → 4.59" size={38} color={INK} weight={800} at={K11.offset + 10} />
			<Sx x={X + 300} y={940} text="4.74 → 4.66" size={38} color={INK_SOFT} weight={600} at={K11.offset + 18} opacity={0.6} />
			<Sx x={X + 600} y={940} text="both ≈ −0.09" size={38} color={TEAL} weight={800} at={K11.cancels} />
			<Sx x={X} y={1040} text="NESA glossary: accuracy, how close measurements are to the true value." size={24} color={INK_SOFT} weight={600} at={K11.accuracy + 20} />
			{void K11.changes}
		</Overlay>
	);
};

// ---------- 12. The risk assessment ----------
const S12 = 'risk-assessment';
const K12 = cues(sc(S12), {risk: 'risk assessment', classification: 'classification', glasses: 'safety glasses', naoh: 'sodium hydroxide', irritant: 'irritant', glacial: 'Glacial', flammable: 'flammable', filler: 'filler'});
export const SceneRisk: React.FC = () => {
	const T = {x: 96, y: 200, rowH: 100};
	const cols = [700, 420, 620];
	const iconW = 100, headH = 58;
	const ry = (j: number) => T.y + headH + j * T.rowH;
	const ic = (p: typeof BEAKER, j: number) => <IconPlate p={p} x={T.x + 10} y={ry(j) + 8} w={iconW - 20} h={T.rowH - 16} />;
	const pipTop: [number, number] = [T.x + 10 + (iconW - 20) / 2 + 8, ry(4) + 22];
	return (
		<>
			<Heading text="The risk assessment" at={4} size={60} />
			<Overlay>
				<RTable x={T.x} y={T.y} cols={cols} head={['Hazard', 'Harm', 'Control']} at={K12.risk} rowH={T.rowH} size={23} iconW={iconW} rows={[
					{at: K12.classification - 24, icon: ic(BEAKER, 0), cells: [['0.100 mol/L ethanoic acid, sodium ethanoate,', 'HCl: below classification limits'], 'eye irritation from a splash', ['safety glasses;', 'small volumes']]},
					{at: K12.naoh, icon: ic(BEAKER, 1), cells: [['0.100 mol/L NaOH (0.40 %): just below the', 'EU irritant limit (0.5 %); supplier sheets', 'vary, so check yours'], ['a splash can still harm eyes', 'and skin: treat it as harmful'], ['safety glasses;', 'rinse splashes with water']]},
					{at: K12.glacial, icon: ic(BUFFER, 2), cells: ['glacial ethanoic acid (H226, H314)', ['flammable; severe burns;', 'irritating vapour'], ['teacher only;', 'not on the student bench']]},
					{at: K12.flammable + 80, icon: ic(HOLDER, 3), cells: ['glassware, probe bulb', 'cuts', ['probe in its holder;', 'never stir with it']]},
					{at: K12.filler - 24, icon: ic(PIPETTE, 4), cells: ['pipetting', 'swallowing solution', ['pipette filler (the red bulb),', 'never by mouth']]},
					{at: K12.filler + 12, cells: ['waste', '', ['dilute, near-neutral after mixing; sink', 'with water if school rules allow']]},
				]} />
				<Ring cx={pipTop[0]} cy={pipTop[1]} rx={24} ry={22} at={K12.filler} color={CROSS} seed={3} />
				<Fade at={K12.glasses}>
					<Sx x={1420} y={150} text="always:" size={34} color={TEAL} hand at={K12.glasses} />
					<PicH p={GLASSES} x={1540} y={110} h={56} />
				</Fade>
				<AChip x={T.x} y={T.y + headH + 6 * T.rowH + 26} text="follow your school's risk assessment and each bottle's safety data sheet" size={28} color={TEAL} hand={false} at={K12.filler + 24} />
				{void K12.irritant}
			</Overlay>
		</>
	);
};

// ---------- 13. Memory aid ----------
const S13 = 'memory-aid';
const K13 = cues(sc(S13), {method: 'method to remember', split: 'split', dose: 'dose', compare: 'compare', fresh: 'fresh portions', same: 'same dose', changes: 'the changes'});
export const SceneAid: React.FC = () => {
	const rise = (a: number) => (fr: number) => kf(fr, [[a, 0], [a + 20, 1]]);
	const BL = 800;
	return (
		<Overlay>
			<Sx x={96} y={160} text="The method to remember" size={40} color={INK_SOFT} hand at={K13.method} />
			<Sx x={110} y={350} text="Split." size={110} color={TEAL} hand at={K13.split} />
			<Sx x={110} y={560} text="Dose." size={110} color={TEAL} hand at={K13.dose} />
			<Sx x={110} y={770} text="Compare." size={110} color={TEAL} hand at={K13.compare} />
			<Fade at={K13.split}><FillBeaker x={820} y={230} h={140} level={() => 1} tint={BUFTINT} /></Fade>
			<TabBeaker x={1040} y={260} h={110} label="" tab="transparent" at={K13.split + 4} level={rise(K13.split + 10)} tint={BUFTINT} />
			<TabBeaker x={1180} y={260} h={110} label="" tab="transparent" at={K13.split + 4} level={rise(K13.split + 18)} tint={WATERC} />
			<Stream a={[935, 250]} b={[1088, 270]} at={K13.split + 6} out={K13.split + 30} color="#8fcabb" />
			<Fade at={K13.dose}><FillBeaker x={1300} y={500} h={110} level={() => 1} tint={BUFTINT} /></Fade>
			<GradPip tipX={1348} tipY={496} len={150} at={K13.dose} drop={K13.dose + 10} fall={50} dropColor="#f0b9a8" />
			<ChangeBar x={1080} y1={BL} y2={BL - 6} at={K13.compare + 4} solid color={BUF} w={50} />
			<ChangeBar x={1220} y1={BL} y2={BL - 180} at={K13.compare + 8} solid color={WATERL} ink="#3f7fb5" w={50} />
			<Sx x={1080} y={BL + 40} text="buffer" size={26} color={INK} anchor="middle" weight={700} at={K13.compare + 4} />
			<Sx x={1220} y={BL + 40} text="water" size={26} color={INK} anchor="middle" weight={700} at={K13.compare + 8} />
			<Sx x={110} y={940} text="fresh portion for each test; same volume, same dose; water control" size={32} color={INK_SOFT} weight={600} at={K13.changes} />
			{void K13.fresh}{void K13.same}
		</Overlay>
	);
};
