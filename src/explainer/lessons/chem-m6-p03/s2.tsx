// M6 P03 scenes 7 to 12: what the readings say about the ions (the pH scale, mean chips, schematic bar pairs, the
// factor-of-ten bracket); the water (carbon dioxide dissolving, carbonic acid, drifting readings, the crossed chip);
// meter or indicator paper; the variables; validity, reliability and accuracy; the risk table.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {Heading, sc} from './common';
import {AMMONIA, BEAKER, BUFFER, CHART, CHART_CROP, GLASSES, HOLDER, PHMETER, SWATCH, WASH} from './assets';
import {
	AChip, AMBER_INK, BASE, BASE_INK, BarPair, CO2Tok, CupOutline, DimG, Fade, FullMeter, GLINE, Ghost, H3O, INK, INK_SOFT, IconPlate, LabelBeaker, LensFrame, MistakeX, Note, Overlay,
	PHChip, PROTON, PROTON_INK, PenLink, PicH, PlateCrop, RTable, Row, ScaleP, Sx, TEAL, TRead, TaskLine, TempChip, VCard, beakerW, flicker, fullMeterW, meterBeaker, meterScreen, phPos,
	rowCx, smooth, treadW, vis, CROSS, DrawPath,
} from './parts';
import type {RowG} from './parts';
import {RG} from './s1';

// ---------- 7. What the readings say about the ions ----------
const S7 = 'ions';
const K7 = cues(sc(S7), {numbers: 'the numbers', below: 'Below seven', hyd: 'more hydronium', above: 'Above seven', hydroxide: 'more hydroxide', hcl: 'Hydrochloric acid reads', ten: 'ten times', hundred: 'a hundred', between: 'in between', t23: 'twenty three times', strength: 'strength', next: 'next practical', both: 'Both bases', far: 'far more'});
export const SceneIons: React.FC = () => {
	const f = useCurrentFrame();
	const SX = 170, SW = 1580, SY = 640;
	const X = (p: number) => phPos(SX, SW, p);
	const vals = [2.03, 3.4, 5.96, 10.59, 11.96];
	const labs = ['2.03', '3.40', '5.96', '10.59', '11.96'];
	const BY = 470;
	const mk = (p: number, t: string, at: number, out?: number) => (
		<Fade at={at} out={out}>
			<line x1={X(p)} y1={BY - 16} x2={X(p)} y2={BY + 6} stroke={GLINE} strokeWidth={3} />
			<Sx x={X(p)} y={BY - 26} text={t} size={24} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
		</Fade>
	);
	return (
		<Overlay>
			<TaskLine text="What the numbers say about the ions" at={K7.numbers - 10} size={54} />
			<ScaleP x={SX} y={SY} w={SW} at={K7.numbers} />
			{vals.map((v, i) => <PHChip key={i} x={X(v)} y={SY - 100} text={labs[i]} at={K7.numbers + 20 + i * 8} size={28} anchor="middle" drop />)}
			<DimG at={K7.ten} to={0.45}>
				<BarPair x={X(2.6) - 60} base={900} hT={120} hV={30} at={K7.hyd} tag="more H_3O^{+} than OH^{−}" tagColor={PROTON_INK} />
				<BarPair x={X(10.9) - 60} base={900} hT={30} hV={120} at={K7.hydroxide} tag="more OH^{−} than H_3O^{+}" tagColor={BASE_INK} />
			</DimG>
			{/* the 2.03 to 3.40 bracket with the ten and hundred markers */}
			<Fade at={K7.hcl + 10}>
				<DrawPath d={`M${X(2.03)},${BY + 22} L${X(2.03)},${BY + 6} L${X(3.4)},${BY + 6} L${X(3.4)},${BY + 22}`} at={K7.hcl + 10} dur={12} color={PROTON_INK} width={5} />
			</Fade>
			{mk(3.03, '1 unit: × 10', K7.ten, K7.t23 + 30)}
			{mk(4.03, '2 units: × 100', K7.hundred, K7.t23 + 30)}
			<Sx x={X(2.7)} y={BY - 70} text="1.37 units: about 23 × more H_3O^{+}" size={34} color={PROTON_INK} anchor="middle" weight={800} at={K7.t23} />
			<DimG at={K7.both} to={0.4}>
				<AChip x={SX} y={260} text="strong ionises completely; weak partly (C05)" size={28} color={INK_SOFT} hand={false} at={K7.strength} />
				<AChip x={SX + 700} y={260} text="next: P04" size={28} color={TEAL} hand={false} at={K7.next} />
			</DimG>
			<Fade at={K7.far}>
				<DrawPath d={`M${X(10.59)},${BY + 22} L${X(10.59)},${BY + 6} L${X(11.96)},${BY + 6} L${X(11.96)},${BY + 22}`} at={K7.far} dur={12} color={BASE_INK} width={5} />
			</Fade>
			<Sx x={X(11.27)} y={BY - 26} text="more OH^{−}" size={32} color={BASE_INK} anchor="middle" weight={800} at={K7.far + 6} />
			{void K7.below}{void K7.above}{void K7.between}{void PROTON}{void BASE}{void smooth}{void f}
		</Overlay>
	);
};

// ---------- 8. So, the water ----------
const S8 = 'water';
const K8 = cues(sc(S8), {water: 'Now the water', meter: 'The meter', co2: 'Carbon dioxide', carbonic: 'carbonic acid', hyd: 'few hydronium', acidic: 'slightly acidic', few: 'so few ions', drift: 'readings drift', spread: 'and spread', neutral: 'mean neutral'});
export const SceneWater: React.FC = () => {
	const f = useCurrentFrame();
	const BX = 220, BY = 420, BH = 400, bw = beakerW(BH);
	const surf = BY + BH * 0.416;
	const L = {cx: 1640, cy: 600, r: 110};
	const RX = 760;
	return (
		<Overlay>
			<TaskLine text="So, the water" at={K8.water} size={56} />
			<LabelBeaker x={BX} y={BY} h={BH} at={-100} lines={[{t: 'distilled water', at: -100}]} size={32} />
			<PHChip x={BX + bw * 0.28} y={BY - 80} text="5.96" at={-100} size={34} anchor="middle" />
			{/* the hook's question, resolved */}
			<Ghost x={RX} y={150} text={() => '7.00?'} at={-100} out={K8.meter + 16} />
			<DrawPath d={`M${RX + 20},${185} l14,16 l28,-34`} at={K8.meter + 10} dur={10} color="#2f8a5b" width={6} />
			<Note x={RX + 80} y={196} text="meter OK: the water really reads below 7" size={34} color="#2f8a5b" at={K8.meter + 14} />
			{/* carbon dioxide from the air */}
			{Array.from({length: 7}, (_, i) => {
				const st = K8.co2 + i * 12;
				if (f < st) return null;
				const q = ((f - st) % 110) / 110;
				const x = BX + bw * 0.55 + ((i * 37) % (bw * 0.35)), y = 300 + q * (surf + 40 - 300);
				return <CO2Tok key={i} x={x + Math.sin(f / 15 + i) * 8} y={y} s={1.2} o={q < 0.85 ? 1 : (1 - q) * 6} />;
			})}
			<Note x={BX - 20} y={280} text="CO_2 from the air" size={30} color={INK_SOFT} at={K8.co2 + 6} hand={false} />
			<DimG at={K8.drift} to={0.45}>
				<Sx x={RX} y={330} text="CO_2(g) + H_2O(l) ⇌ H_2CO_3(aq)" size={42} color={INK} weight={700} at={K8.carbonic} />
				<Sx x={RX} y={400} text="H_2CO_3(aq) + H_2O(l) ⇌ HCO_3^{−}(aq) + H_3O^{+}(aq)" size={30} color={INK_SOFT} weight={600} at={K8.hyd} />
				<Note x={RX} y={470} text="carbonic acid: a little extra H_3O^{+}" size={34} color={PROTON_INK} at={K8.hyd + 16} />
			</DimG>
			<LensFrame cx={L.cx} cy={L.cy} r={L.r} at={K8.carbonic} out={K8.drift}>
				<rect x={L.cx - L.r} y={L.cy - L.r} width={2 * L.r} height={2 * L.r} fill="#eef6fb" />
				<H3O x={L.cx} y={L.cy} s={2} o={prog(f, K8.hyd, 12)} pop={1 + 0.4 * (1 - smooth(prog(f, K8.hyd, 16)))} />
			</LensFrame>
			<Note x={RX} y={560} text="so open distilled water is slightly acidic" size={34} color={INK} at={K8.acidic} out={K8.drift} />
			<TRead x={RX} y={600} text={fr => (fr < K8.drift ? '5.82' : fr < K8.drift + 20 ? '5.82' : fr < K8.drift + 40 ? flicker(0, K8.drift + 40, '5.95', 5.8, 6.1)(fr) : flicker(0, K8.drift + 60, '6.10', 5.9, 6.2)(fr))} at={K8.few} sample="10.00" />
			<Note x={RX + treadW(34, '10.00') + 30} y={640} text="few ions: slow, drifting reading" size={34} color={INK_SOFT} at={K8.drift + 6} />
			<CupOutline x={1480} y={700} w={150} h={170} fill={0.6} at={K8.spread + 20} dashed stroke={GLINE} />
			<Sx x={1250} y={920} text="boiled to drive out CO_2, then cooled: closer to 7" size={26} color={INK_SOFT} weight={600} at={K8.spread + 26} />
			<MistakeX x={RX} y={760} text="distilled water always reads 7.00" at={K8.neutral - 10} cross={K8.neutral + 10} note="open to air: slightly acidic" size={32} />
			{void AMBER_INK}
		</Overlay>
	);
};

// ---------- 9. Meter or indicator paper? ----------
const S9 = 'meter-vs-indicator';
const K9 = cues(sc(S9), {why: 'Why use', ui: 'Universal indicator', chart: 'a chart', whole: 'whole number', people: 'two people', two: 'two decimal', careful: 'But careful', calibrated: 'is calibrated'});
const UNUMS = ['1 to 3', '4 to 5', '6', '7', '8 to 10', '11 to 14'];
export const SceneIndicator: React.FC = () => {
	const f = useCurrentFrame();
	const CX = 110, CY = 380, CW = 960, k = CW / (CHART_CROP[2] - CHART_CROP[0]);
	const sw = (i: number) => CX + (SWATCH(i)[0] - CHART_CROP[0]) * k;
	const cardBot = CY + (CHART_CROP[3] - CHART_CROP[1]) * k;
	const sx = (sw(0) + sw(1)) / 2;
	const stripQ = smooth(prog(f, K9.ui, 24));
	const MX = 1250, MY = 330, MH = 330;
	const flash = f > K9.calibrated + 44 ? (Math.floor((f - K9.calibrated) / 10) % 2 === 0 ? 1 : 0.35) : 1;
	return (
		<Overlay>
			<TaskLine text="Meter or indicator paper?" at={K9.why} size={56} />
			<PlateCrop p={CHART} r={CHART_CROP} x={CX} y={CY} w={CW} />
			{UNUMS.map((t, i) => <Sx key={i} x={sw(i)} y={cardBot + 40} text={t} size={26} color={INK} anchor="middle" weight={700} at={K9.chart + i * 4} />)}
			<DimG at={K9.careful} to={0.38}>
				<g opacity={vis(f, K9.ui, undefined, 10)} transform={`translate(${sx + (1 - stripQ) * 300},${CY - 150})`}>
					<rect x={-22} y={0} width={44} height={150} rx={6} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2} />
					<rect x={-22} y={90} width={44} height={60} rx={6} fill="#e8602e" />
				</g>
				<Fade at={K9.whole}>
					<DrawPath d={`M${sw(0) - 60},${cardBot + 64} L${sw(0) - 60},${cardBot + 78} L${sw(1) + 60},${cardBot + 78} L${sw(1) + 60},${cardBot + 64}`} at={K9.whole} dur={12} color={AMBER_INK} width={4} />
				</Fade>
				<Note x={sw(0) - 60} y={cardBot + 124} text="about pH 2 to 3" size={36} color={AMBER_INK} at={K9.whole + 6} />
				<Note x={sw(2) + 40} y={cardBot + 124} text="colour judgements vary" size={32} color={INK_SOFT} at={K9.people} />
				<FullMeter x={MX} y={MY} h={MH} at={K9.two - 10} read={() => '2.03'} />
				<Note x={MX} y={MY + MH + 50} text="meter: two decimal places" size={34} color={TEAL} at={K9.two + 6} />
			</DimG>
			<MistakeX x={MX - 80} y={790} text="more decimal places = more accurate" at={K9.careful + 10} cross={K9.calibrated} out={K9.calibrated + 40} note="only if calibrated" size={30} />
			<Fade at={K9.calibrated + 44}>
				<rect x={MX} y={790} width={260} height={150} rx={18} fill="#e9eef2" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 7" />
				<rect x={MX + 30} y={815} width={200} height={70} rx={8} fill="#2b2723" />
				<Sx x={MX + 130} y={865} text="7.43" size={44} color="#f2b84b" anchor="middle" weight={800} at={-1000} opacity={flash} />
				<Sx x={MX + 130} y={925} text="uncalibrated" size={22} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
				<Sx x={MX + 290} y={850} text="in a pH 7.00 buffer" size={30} color={INK} weight={700} at={-1000} />
				<DrawPath d={`M${MX + 300},${880} L${MX + 340},${920} M${MX + 340},${880} L${MX + 300},${920}`} at={K9.calibrated + 50} dur={10} color={CROSS} width={7} />
			</Fade>
			{void meterScreen}
		</Overlay>
	);
};

// ---------- 10. The variables ----------
const S10 = 'variables';
const K10 = cues(sc(S10), {vars: 'the variables', ind: 'independent variable', dep: 'dependent variable', ctrl: 'controlled variables', conc: 'the concentration', temp: 'the temperature', vol: 'the volume', meter: 'calibrated meter', rinse: 'rinsing routine'});
export const SceneVariables: React.FC = () => {
	const g: RowG = {x0: 80, dx: 180, y: 680, h: 120};
	const MX = 90, MY = 250, MH = 260;
	const CX = 1060;
	const ry = (i: number) => 590 + i * 62;
	const mb = meterBeaker(MX, MY, MH);
	return (
		<Overlay>
			<TaskLine text="The variables" at={K10.vars - 10} size={56} />
			<FullMeter x={MX} y={MY} h={MH} at={-100} read={() => '3.40'} />
			<PicH p={WASH} x={520} y={250} h={230} />
			<TempChip x={760} y={300} from={25.0} at={-100} />
			<Row g={g} at={[-100, -100, -100, -100, -100]} size={18} />
			<Fade at={K10.conc}>
				<path d={`M${rowCx(g, 0) - 60},${g.y - 30} L${rowCx(g, 0) - 60},${g.y - 44} L${rowCx(g, 4) + 60},${g.y - 44} L${rowCx(g, 4) + 60},${g.y - 30}`} fill="none" stroke={TEAL} strokeWidth={4} />
				<Sx x={rowCx(g, 2)} y={g.y - 58} text="0.010 mol/L (acids and bases)" size={26} color={TEAL} anchor="middle" weight={700} at={-1000} />
			</Fade>
			<DimG at={K10.dep} to={0.42}><Sx x={CX} y={330} text="Independent: which solution" size={38} color={INK} weight={700} at={K10.ind} /></DimG>
			<DimG at={K10.ctrl} to={0.42}><Sx x={CX} y={420} text="Dependent: pH (mean of three readings)" size={38} color={INK} weight={700} at={K10.dep} /></DimG>
			<Sx x={CX} y={520} text="Controlled:" size={38} color={TEAL} hand at={K10.ctrl} />
			{([['0.010 mol/L', K10.conc, [rowCx(g, 4) + 70, g.y - 40]], ['25 °C', K10.temp, [900, 340]], ['20 mL in each beaker', K10.vol, [rowCx(g, 4) + 70, g.y + 70]], ['same calibrated meter', K10.meter, [MX + fullMeterW(MH) - 20, MY + 80]], ['same rinse routine', K10.rinse, [520 + 140, 300]]] as [string, number, [number, number]][]).map(([t, at, tgt], i) => (
				<g key={i}>
					<Sx x={CX + 30} y={ry(i)} text={t} size={34} color={INK} weight={600} at={at} />
					<PenLink a={[CX + 10, ry(i) - 12]} b={tgt} at={at + 6} out={i < 4 ? [K10.temp, K10.vol, K10.meter, K10.rinse][i] : undefined} />
				</g>
			))}
			{void mb}
		</Overlay>
	);
};

// ---------- 11. Validity, reliability and accuracy ----------
const S11 = 'validity-reliability';
const K11 = cues(sc(S11), {now: 'Now the three', validity: 'Validity', rinsing: 'Rinsing fresh', reliability: 'Reliability', acids: 'For the acids', water: 'For the water', accuracy: 'Accuracy', depends: 'That depends', buffers: 'buffers on both', close: 'as close to'});
const RANGES = [['HCl', '2.02 to 2.04'], ['acetic acid', '3.39 to 3.41'], ['distilled water', '5.82 to 6.10'], ['ammonia', '10.58 to 10.60'], ['NaOH', '11.95 to 11.97']];
export const SceneVRA: React.FC = () => {
	const X = 96, CW = 1040, RX = 1210;
	return (
		<Overlay>
			<TaskLine text="Validity, reliability, accuracy" at={K11.now} size={52} />
			<VCard x={X} y={200} w={CW} h={170} title="Validity: the intended solution only?" titleAt={K11.validity} at={K11.validity - 4} dim={K11.reliability} lines={[
				{t: 'Rinse, blot, fresh portions, labels.', at: K11.rinsing},
			]} />
			<VCard x={X} y={400} w={CW} h={210} title="Reliability: repeats agree?" titleAt={K11.reliability} at={K11.reliability - 4} dim={K11.accuracy} lines={[
				{t: 'Acids and bases within 0.02', at: K11.acids},
				{t: 'Water spread 5.82 to 6.10', at: K11.water, color: AMBER_INK},
			]} />
			<VCard x={X} y={640} w={CW} h={230} title="Accuracy: close to the true pH?" titleAt={K11.accuracy} at={K11.accuracy - 4} color={AMBER_INK} lines={[
				{t: 'Calibrate with buffers either side of 7,', at: K11.buffers},
				{t: 'close to the readings; same temperature.', at: K11.close},
			]} />
			<DimG at={K11.accuracy} to={0.45}>
				<Sx x={RX} y={400} text="ranges of the three readings" size={28} color={INK_SOFT} hand at={K11.reliability + 10} />
				{RANGES.map(([n, r], i) => {
					const water = i === 2;
					return (
						<g key={i}>
							<Sx x={RX} y={450 + i * 50} text={n} size={30} color={INK} weight={700} at={K11.reliability + 14 + i * 4} />
							<Sx x={RX + 240} y={450 + i * 50} text={r} size={30} color={water ? AMBER_INK : TEAL} weight={700} at={water ? K11.water : K11.acids} />
						</g>
					);
				})}
			</DimG>
			<Sx x={X} y={1040} text="Reliability means: repeated measurements under identical circumstances give similar results." size={24} color={INK_SOFT} weight={600} at={K11.reliability + 20} />
			{void K11.depends}
		</Overlay>
	);
};

// ---------- 12. The risk assessment ----------
const S12 = 'risk-assessment';
const K12 = cues(sc(S12), {risk: 'risk assessment', classified: 'classified as hazardous', glasses: 'safety glasses', stocks: 'stronger stocks', corrosive: 'corrosive', bulb: 'The glass bulb', holder: 'its holder', stir: 'never stir'});
export const SceneRisk: React.FC = () => {
	const T = {x: 96, y: 230, rowH: 120};
	const cols = [600, 420, 710];
	const iconW = 110, headH = 58;
	const ry = (j: number) => T.y + headH + j * T.rowH;
	const ic = (p: typeof BEAKER, j: number) => <IconPlate p={p} x={T.x + 10} y={ry(j) + 8} w={iconW - 20} h={T.rowH - 16} />;
	return (
		<>
			<Heading text="The risk assessment" at={4} size={60} />
			<Overlay>
				<RTable x={T.x} y={T.y} cols={cols} head={['Hazard', 'Harm', 'Control']} at={K12.risk} rowH={T.rowH} size={26} iconW={iconW} rows={[
					{at: K12.classified, icon: ic(BEAKER, 0), cells: [['0.010 mol/L HCl, acetic acid,', 'NH_3, NaOH: below GHS', 'classification limits'], 'eye irritation from a splash', 'safety glasses; small volumes']},
					{at: K12.stocks, icon: ic(AMMONIA, 1), cells: [['concentrated stocks (conc. HCl,', 'glacial acetic acid, conc. ammonia,', 'solid NaOH): corrosive, H314'], ['severe burns,', 'irritating vapour'], ['prepared by the teacher or technician;', 'not on the student bench']]},
					{at: K12.bulb, icon: ic(HOLDER, 2), cells: ['glass bulb', 'breaks; cuts; ruined probe', ['probe in its holder; never stir with it;', "don't touch the beaker bottom"]]},
					{at: K12.stir + 30, icon: ic(PHMETER, 3), cells: ['meter near liquids', 'damage to the meter', 'keep the meter body dry; only the probe goes in']},
					{at: K12.stir + 50, icon: ic(BUFFER, 4), cells: ['buffers', '', "check the bottle's safety data sheet"]},
				]} />
				<Fade at={K12.glasses}>
					<Sx x={1350} y={150} text="always:" size={34} color={TEAL} hand at={K12.glasses} />
					<PicH p={GLASSES} x={1470} y={110} h={56} />
				</Fade>
				<Fade at={K12.corrosive}><Sx x={T.x + 4} y={ry(1) + T.rowH - 6} text="teacher only" size={16} color={CROSS} weight={700} at={-1000} /></Fade>
				<AChip x={T.x} y={T.y + headH + 5 * T.rowH + 30} text="follow your school's risk assessment" size={30} color={TEAL} hand={false} at={K12.stir + 70} />
				{void K12.holder}{void RG}
			</Overlay>
		</>
	);
};
