// M8 C04 scenes 1 to 6: the hook (two identical beakers, one with lead; pale and deep copper), which light (the
// colourimeter cutaway, Module 5 recall chips, the colour wheel, the filter turns orange-red and the reading grows),
// UV-visible (the grating fan, the slit picks one wavelength, the UV band), the spectrum (the slit steps along while the
// curve draws; lambda max and its two reasons), the complex (the weak hydrated curve under the strong complex curve, the
// wrap lens, excess ammonia in standards and sample) and Beer-Lambert as a calculation (g01 board, crossed equation).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {prog} from '../../kit';
import {BEAKER, COLM, CUV, Heading, NB, UVV, sc} from './common';
import {
	ABS, AChip, Arrow, BeakerFill, BeamBox, CAxes, CCurve, CSeg, CU_DEEP_C, DArrow, DimG, Fade, Fan, Framed, GCard, GREYX, HTag, INK, INK_SOFT, Line, Magnifier,
	MistakeX, NAVY, Note, P, PicV, SEEN, SEL, STD, Slit, Sx, TaskLine, UNKC, UVC, WLStrip, WLine, Wheel, WrapLens, clamp01, countA, fanY, gx, gy, lerp, picWp, smooth, vis,
} from './parts';
import type {CG, FanG} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {same: 'exactly the same', lead: 'holds lead', gram: 'millionths', see: "You can't see", ppt: 'no precipitate', copper: 'Now a copper', deeper: 'the deeper', more: 'more copper', both: 'Both are', light: 'light can', conc: 'concentration'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const BH = 420, BW = picWp(BEAKER, BH), BX = [110, 520], BY = 290;
	const CH = 440, CX = [1460, 1650], CY = 280;
	return (
		<>
			<Heading text="How much is in there? Measuring with light" at={4} size={56} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				{BX.map((x, i) => (
					<g key={i}>
						<PicV p={BEAKER} x={x} y={BY} h={BH} />
						<BeakerFill x={x} y={BY} h={BH} />
						<HTag x={x + BW / 2} y={BY + BH + 44} text="tap water" size={32} color={INK_SOFT} anchor="middle" at={K1.same - 20} />
					</g>
				))}
				<AChip x={BX[1] + BW / 2} y={BY - 84} text="Pb^{2+} above guideline" size={34} color={UNKC} hand={false} anchor="middle" at={K1.lead} />
				<AChip x={BX[1] + BW / 2} y={BY + BH + 74} text={`ADWG: 0.005${NB}mg/L`} size={30} color={GREYX} hand={false} anchor="middle" at={K1.gram} />
				<Magnifier y={BY + BH * 0.55} pts={[[K1.see - 4, BX[0] + 40], [K1.see + 40, BX[0] + BW - 40], [K1.see + 70, BX[1] + 60], [K1.see + 110, BX[1] + BW - 60]]} at={K1.see - 4} out={K1.ppt + 40} r={78} />
				<Note x={110} y={900} text="looks the same: you can't see the lead" size={44} color={INK} at={K1.see + 20} />
				<AChip x={110} y={940} text="p03: tests say which ion, not how much" size={32} color={GREYX} hand={false} at={K1.ppt} />
				{CX.map((x, i) => <PicV key={i} p={i ? CUV.deep : CUV.pale} x={x} y={CY} h={CH} at={K1.copper - 6 + i * 10} />)}
				<HTag x={CX[0] + 58} y={CY + CH + 46} text="less Cu^{2+}" size={34} color={INK_SOFT} anchor="middle" at={K1.deeper} />
				<HTag x={CX[1] + 58} y={CY + CH + 46} text="more Cu^{2+}" size={34} color={CU_DEEP_C} anchor="middle" at={K1.more} />
				<Arrow x1={1420} y1={CY + CH + 100} x2={1820} y2={CY + CH + 100} at={K1.deeper} color={CU_DEEP_C} width={6} />
				<HTag x={1620} y={CY + CH + 160} text="more copper → deeper blue" size={38} color={CU_DEEP_C} anchor="middle" at={K1.more} />
				<Fade at={K1.light - 4}>
					<circle cx={1370} cy={CY + 250} r={22} fill="#fff1b8" stroke={INK} strokeWidth={3} />
					<rect x={1392} y={CY + 240} width={Math.max(0, 470 * smooth(prog(f, K1.light, 30)))} height={20} rx={10} fill="#fff3c4" stroke="#e8d9a8" strokeWidth={2} opacity={0.9} />
					<HTag x={1360} y={CY - 26} text="light can measure both" size={34} color={SEL} at={K1.light + 10} />
				</Fade>
				<Fade at={K1.conc - 4}>
					<rect x={980} y={440} width={240} height={110} rx={55} fill="#fffdf8" stroke={NAVY} strokeWidth={5} />
					<Sx x={1100} y={515} text="c = ?" size={64} color={NAVY} anchor="middle" weight={800} at={-1000} />
				</Fade>
				<Sx x={1100} y={620} text="how much?" size={40} color={NAVY} anchor="middle" hand at={K1.both} out={K1.conc - 6} />
			</svg>
		</>
	);
};

// ---------- 2. Which light? ----------
const K2 = cues(sc('which-light'), {met: 'met the', light: 'Light passes', absb: 'absorbance', blank: 'A blank', rises: 'absorbance rises', which: 'which light', looks: 'looks blue', orange: 'absorbs orange', lets: 'lets the', meas: 'colour it absorbs', see: 'you see', filt: 'red or orange'});
export const SceneWhichLight: React.FC = () => {
	const f = useCurrentFrame();
	const read = (fr: number) => (fr < K2.meas ? countA(fr, K2.absb, K2.absb + 30, 0, 0.18) : countA(fr, K2.meas + 10, K2.meas + 40, 0.18, 0.62));
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Colourimetry" at={2} />
			<PicV p={COLM} x={96} y={220} h={300} />
			<HTag x={96 + 150} y={570} text="the colourimeter (Module 5)" size={30} color={INK_SOFT} anchor="middle" at={K2.met} />
			<BeamBox x={440} y={200} w={880} at={4} beamAt={K2.light} filterAt={K2.meas} pass={fr => 1 - 0.62 * prog(fr, K2.meas + 10, 30)} readout={read} />
			<HTag x={1270} y={540} text="bigger reading" size={34} color={ABS} anchor="end" at={K2.meas + 30} />
			<DimG at={K2.which} to={0.38}>
				<AChip x={96} y={610} text="Module 5: absorbance = how much light is soaked up" size={32} color={GREYX} hand={false} at={K2.absb} />
				<AChip x={96} y={690} text="blank sets zero" size={32} color={GREYX} hand={false} at={K2.blank} />
				<AChip x={460} y={690} text="A ∝ c (same cuvette, same light)" size={32} color={GREYX} hand={false} at={K2.rises} />
				<MistakeX x={96} y={770} text="absorbance = concentration" at={K2.rises + 30} cross={K2.rises + 50} note="needs a calibration" size={32} />
			</DimG>
			<Wheel cx={1600} cy={330} r={118} at={K2.which} labelsAt={K2.orange} />
			<Note x={1600} y={530} text="copper(II) looks blue:" size={34} color={SEEN} anchor="middle" at={K2.looks} />
			<Note x={1600} y={578} text="it absorbs orange and red" size={34} color={ABS} anchor="middle" at={K2.orange} />
			<Note x={1400} y={720} text="measure with the" size={40} color={ABS} at={K2.meas} />
			<Note x={1400} y={772} text="absorbed colour" size={40} color={ABS} at={K2.meas} />
			<AChip x={1400} y={810} text="red or orange filter for copper(II)" size={30} color={ABS} hand={false} at={K2.filt} />
			<Sx x={96} y={1000} text="Measure with the colour it absorbs, not the colour you see." size={50} color={INK} hand weight={700} at={K2.see} />
			{void K2.lets}{void f}
		</svg>
	);
};

// ---------- 3. UV-visible: one wavelength ----------
const K3 = cues(sc('uv-visible'), {band: 'whole band', better: 'does better', inside: 'Inside', grating: 'grating', slit: 'narrow slit', wl: 'wavelength', ultra: 'ultraviolet', colourless: 'colourless', measured: 'measured'});
export const FAN3: FanG = {ox: 880, oy: 420, fx: 1290, y0: 250, y1: 610, l0: 250, l1: 800};
export const lSlit3 = (fr: number) => (fr < K3.ultra ? 600 : fr < K3.measured + 10 ? lerp(600, 310, smooth(clamp01((fr - K3.ultra) / 30))) : lerp(310, 600, smooth(clamp01((fr - K3.measured - 10) / 30))));
export const SceneUVVis: React.FC = () => {
	const f = useCurrentFrame();
	const slitOn = K3.slit - 4;
	const dy = 430;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="UV-visible spectrophotometry" at={2} />
			<PicV p={UVV} x={96} y={230} h={380} />
			<Note x={96} y={680} text="UV-visible spectrophotometer:" size={38} color={NAVY} at={K3.better} />
			<Note x={96} y={732} text="picks one wavelength, visible or UV" size={36} color={INK} at={K3.better + 20} />
			<rect x={680} y={200} width={1150} height={460} rx={24} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<HTag x={706} y={244} text="inside (side view)" size={30} color={INK_SOFT} at={-1000} />
			<Fan g={FAN3} lampX={740} at={K3.inside} />
			<Slit g={FAN3} l={lSlit3} at={slitOn} toX={1490} toY={dy} />
			<PicV p={CUV.deep} x={1478} y={dy - 110} h={200} at={slitOn} />
			<rect x={1560} y={dy - 6} width={Math.max(0, 140 * prog(f, slitOn + 16, 16))} height={12} fill={SEL} opacity={0.7 * vis(f, slitOn + 16)} />
			<rect x={1700} y={dy - 46} width={36} height={92} rx={8} fill="#cfd6de" stroke={INK} strokeWidth={4} opacity={vis(f, slitOn)} />
			<HTag x={1718} y={dy + 90} text="detector" size={28} anchor="middle" at={slitOn} />
			<HTag x={1000} y={634} text="grating: spreads light into its colours" size={32} color={INK} anchor="middle" at={K3.grating} />
			<HTag x={1300} y={186} text="slit: one wavelength" size={34} color={SEL} anchor="middle" at={K3.wl} />
			<WLStrip x={700} y={770} w={1110} l0={250} l1={800} at={K3.band - 10} ticks={[300, 400, 500, 600, 700, 800]} uvLabel marker={fr => (fr >= slitOn ? lSlit3(fr) : null)} />
			<Fade at={K3.band} out={slitOn}>
				<rect x={700 + ((570 - 250) / 550) * 1110} y={756} width={(130 / 550) * 1110} height={58} rx={8} fill="none" stroke={ABS} strokeWidth={5} />
				<HTag x={700 + ((635 - 250) / 550) * 1110} y={740} text="a filter: a whole band" size={32} color={ABS} anchor="middle" at={K3.band} />
			</Fade>
			<Line x={1255} y={890} text="nm" size={28} color={INK_SOFT} anchor="middle" at={-1000} />
			<Note x={700} y={960} text="some colourless substances absorb UV" size={40} color={UVC} at={K3.colourless} />
			{void fanY}
		</svg>
	);
};

// ---------- 4. The spectrum, and lambda max ----------
const K4 = cues(sc('spectrum'), {step: 'Step through', spec: 'spectrum', deep: 'deep blue', six: 'six hundred', orange: 'orange', meas: 'Measure there', called: 'called lambda', max: 'max', most: 'changes most', flat: 'flat', slip: 'tiny slip', reading: 'reading'});
export const G4: CG = {x: 880, y: 250, w: 880, h: 540, x0: 400, x1: 800, y0: 0, y1: 1};
export const cuNH3 = (x: number) => 0.84 * Math.exp(-(((x - 600) / 95) ** 2)) + 0.04;
export const cuAq = (x: number) => 0.2 * Math.exp(-(((x - 830) / 130) ** 2)) + 0.02;
const FAN4: FanG = {ox: 210, oy: 330, fx: 430, y0: 230, y1: 440, l0: 250, l1: 800};
export const lScan = (fr: number) => 400 + 400 * clamp01((fr - 20) / 130);
export const SpecAxes: React.FC<{at?: number}> = ({at = -1000}) => (
	<>
		<CAxes g={G4} at={at} xLabel="wavelength (nm)" yLabel="absorbance" xTicks={[400, 500, 600, 700, 800]} />
		<Sx x={G4.x + G4.w + 20} y={G4.y + G4.h + 96} text="shape illustrative" size={28} color={GREYX} anchor="end" hand at={at} />
	</>
);
export const SceneSpectrum: React.FC = () => {
	const f = useCurrentFrame();
	const scanning = f < 160;
	const l = lScan(f);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<rect x={96} y={200} width={620} height={280} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<Fan g={FAN4} lampX={130} at={-1000} labels={false} />
			<Slit g={FAN4} l={fr => (fr < 160 ? lScan(fr) : 600)} at={-1000} toX={560} toY={330} />
			<PicV p={CUV.deep} x={558} y={270} h={130} />
			<rect x={600} y={326} width={60} height={8} fill={SEL} opacity={0.7} />
			<HTag x={406} y={524} text="the same slit, stepping along" size={30} color={INK_SOFT} anchor="middle" at={-1000} />
			<Note x={96} y={610} text="measure at each wavelength" size={40} color={INK} at={2} />
			<SpecAxes />
			<CCurve g={G4} fn={cuNH3} xa={400} xb={800} upto={fr => lScan(fr)} color={CU_DEEP_C} width={7} />
			{scanning && f > 24 ? (
				<g>
					<line x1={gx(G4, l)} x2={gx(G4, l)} y1={G4.y} y2={G4.y + G4.h} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 6" />
					<circle cx={gx(G4, l)} cy={gy(G4, cuNH3(l))} r={12} fill={CU_DEEP_C} stroke="#fffdf8" strokeWidth={3} />
				</g>
			) : null}
			<Note x={96} y={680} text="absorption spectrum:" size={38} color={NAVY} at={40} />
			<Note x={96} y={726} text="absorbance against wavelength" size={34} color={INK} at={50} />
			<HTag x={gx(G4, 690)} y={gy(G4, 0.62)} text="[Cu(NH_3)_4]^{2+}, deep blue" size={32} color={CU_DEEP_C} at={K4.deep} />
			<CSeg g={G4} a={[600, cuNH3(600)]} b={[600, 0]} at={K4.six} color={SEL} width={4} dash="10 8" dur={20} />
			<Fade at={K4.six + 10}>
				<rect x={gx(G4, 600) - 20} y={G4.y + G4.h - 22} width={40} height={22} fill={SEL} />
			</Fade>
			<AChip x={gx(G4, 655)} y={gy(G4, 0.84)} text={`about 600${NB}nm`} size={32} color={SEL} hand={false} at={K4.six + 10} />
			<Sx x={gx(G4, 630)} y={gy(G4, 0.93)} text="λmax" size={50} color={INK} weight={800} at={K4.max} />
			<Note x={96} y={800} text="measure at the peak" size={46} color={INK} at={K4.meas} />
			<Note x={96} y={852} text="λmax: the wavelength where" size={34} color={NAVY} at={K4.called} />
			<Note x={96} y={894} text="absorbance is highest" size={34} color={NAVY} at={K4.called + 10} />
			<CCurve g={G4} fn={x => 0.5 * (cuNH3(x) - 0.04) + 0.04} xa={400} xb={800} upto={fr => (fr < K4.most ? 0 : 400 + 400 * clamp01((fr - K4.most) / 30))} color={CU_DEEP_C} width={4} o={0.45} />
			<DArrow x={gx(G4, 600) - 40} y1={gy(G4, 0.46)} y2={gy(G4, 0.86)} at={K4.most + 20} color={NAVY} />
			<Note x={96} y={952} text="tall arrow: biggest change with concentration" size={34} color={NAVY} at={K4.most + 26} />
			<Fade at={K4.flat}>
				<path d={`M${gx(G4, 575)},${gy(G4, 0.94)} L${gx(G4, 575)},${gy(G4, 0.97)} L${gx(G4, 625)},${gy(G4, 0.97)} L${gx(G4, 625)},${gy(G4, 0.94)}`} fill="none" stroke={ABS} strokeWidth={5} />
			</Fade>
			<Note x={96} y={1004} text="flat top: a small wavelength slip barely matters" size={34} color={ABS} at={K4.slip} />
			{void K4.step}{void K4.orange}{void K4.reading}
		</svg>
	);
};

// ---------- 5. A complex makes the colour stronger ----------
const K5 = cues(sc('complex'), {why: 'Why use', pale: 'pale blue', weak: 'only weakly', amm: 'Ammonia molecules', bond: 'bond around', deep: 'deep blue', cation: 'cation', sev: 'several times', low: 'even low', reading: 'reading', add: 'Add the', excess: 'excess', standards: 'standards', sample: 'sample', every: 'every copper', complex: ['complex', 3]});
const CUP = {label: 'Cu^{2+}', fill: '#9fd0f0', ink: '#1d4f8a', r: 44, size: 26};
const NH3L = {label: 'NH_3', fill: '#d9cdee', ink: '#6d4fa0', r: 38, size: 26};
export const SceneComplex: React.FC = () => {
	const f = useCurrentFrame();
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="A complex makes the colour stronger" at={2} size={52} />
			<SpecAxes />
			<CCurve g={G4} fn={cuNH3} xa={400} xb={800} upto={() => 800} color={CU_DEEP_C} width={7} />
			<Sx x={gx(G4, 630)} y={gy(G4, 0.93)} text="λmax" size={40} color={INK_SOFT} weight={800} at={-1000} />
			<HTag x={gx(G4, 640)} y={gy(G4, 0.72)} text="[Cu(NH_3)_4]^{2+}: strong" size={34} color={CU_DEEP_C} at={K5.deep} />
			<CCurve g={G4} fn={cuAq} xa={400} xb={800} upto={fr => 400 + 400 * clamp01((fr - K5.pale) / 50)} color={CU_PALE_C_LINE} width={6} />
			<HTag x={gx(G4, 790)} y={gy(G4, 0.3)} text="Cu^{2+}(aq): weak" size={34} color="#3b86c4" anchor="end" at={K5.weak} />
			<CSeg g={G4} a={[600, cuNH3(600)]} b={[790, cuNH3(600)]} at={K5.sev} color={INK_SOFT} width={3} dash="8 8" dur={14} />
			<DArrow x={gx(G4, 785)} y1={gy(G4, cuAq(785))} y2={gy(G4, cuNH3(600))} at={K5.sev + 6} color={INK} />
			<HTag x={gx(G4, 770)} y={gy(G4, 0.55)} text="several times higher" size={32} color={INK} anchor="end" at={K5.sev + 10} />
			<WrapLens cx={300} cy={430} r={160} at={4} metal={CUP} lig={NH3L} n={4} wrapAt={K5.bond} tint={{color: CU_DEEP_C, at: K5.deep}} />
			<Note x={110} y={724} text="Cu^{2+}(aq): pale, absorbs weakly" size={36} color="#3b86c4" at={K5.weak} out={K5.add} />
			<Note x={110} y={774} text="NH_3 bonds around Cu^{2+}: deep blue complex" size={36} color={CU_DEEP_C} at={K5.bond} out={K5.add} />
			<AChip x={110} y={606} text="c03a: Cu^{2+} + excess NH_3 → deep blue" size={30} color={GREYX} hand={false} at={K5.cation} />
			<PicV p={CUV.pale} x={540} y={270} h={320} />
			<PicV p={CUV.deep} x={540} y={270} h={320} at={K5.deep} />
			<HTag x={640} y={560} text={f < K5.deep ? 'pale' : 'deep'} size={30} color={INK_SOFT} anchor="middle" at={K5.pale} />
			<Note x={880} y={940} text="so low concentrations still give a clear reading" size={36} color={NAVY} at={K5.reading - 10} />
			<AChip x={110} y={720} text="excess NH_3 in standards and sample alike" size={36} color={STD} hand={false} at={K5.excess} />
			{[0, 1, 2].map(i => <PicV key={i} p={CUV.deep} x={130 + i * 70} y={800} h={150} at={K5.standards + i * 6} />)}
			<PicV p={CUV.deep} x={430} y={800} h={150} at={K5.sample} />
			<HTag x={200} y={995} text="standards" size={30} color={STD} anchor="middle" at={K5.standards} />
			<HTag x={450} y={995} text="sample" size={30} color={UNKC} anchor="middle" at={K5.sample} />
			<Note x={560} y={860} text="every Cu^{2+} in the" size={32} color={INK} at={K5.every} />
			<Note x={560} y={900} text="same absorbing form" size={32} color={INK} at={K5.every} />
			{void K5.why}{void K5.amm}{void K5.low}{void K5.add}{void K5.complex}
		</svg>
	);
};
const CU_PALE_C_LINE = '#6fb0e0';

// ---------- 6. Beer-Lambert as a calculation ----------
const K6 = cues(sc('beer-lambert'), {law: 'Beer-Lambert', eq: 'A equals', say: 'Say a', p480: 'point four eight', eps: 'epsilon is', cm: 'per centimetre', cuv: 'cuvette is', one: 'one centimetre', re: 'Rearrange', over: 'absorbance over', thats: "that's point", litre: 'litre', book: 'A book', instr: "instrument's", trust: 'trust a', own: 'own instrument'});
const GT: CG = {x: 1620, y: 600, w: 200, h: 200, x0: 0, x1: 2.2, y0: 0, y1: 0.4};
export const SceneBeer: React.FC = () => {
	const f = useCurrentFrame();
	// live cuvette: concentration steps 1 to 4 (x 10^-3 mol/L) until the example's 0.480 is said; A = εlc with ε 120, l 1.00
	const cNow = f < K6.p480 ? 0.001 * (1 + (Math.floor(f / 45) % 4)) : 0.004;
	const aNow = 120 * 1.0 * cNow;
	const deep = cNow / 0.004;
	const CX = 230, CY = 440, CH = 380, CW = picWp(CUV.deep, CH), BY = 660;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Find the concentration" at={2} />
			<DimG at={K6.book} to={0.42}>
				<Sx x={96} y={290} text="A = εlc" size={72} color={INK} weight={800} at={K6.law - 10} />
				<AChip x={430} y={236} text="Module 5: each symbol" size={28} color={GREYX} hand={false} at={K6.eq} />
				<GCard x={1120} y={180} w={700} size={38} lh={64} at={K6.say - 6} lines={[{t: 'A = 0.480', at: K6.p480}, {t: 'ε = 120 L mol^{−1} cm^{−1}', at: K6.eps}, {t: 'l = 1.00 cm', at: K6.one}]} />
				<DimG at={K6.re} to={0.4}>
					<Sx x={96} y={346} text="A: absorbance    ε: how strongly it absorbs" size={30} color={INK_SOFT} weight={600} at={K6.eq} />
					<Sx x={96} y={386} text="l: path length (cm)    c: concentration (mol/L)" size={30} color={INK_SOFT} weight={600} at={K6.eq + 20} />
				</DimG>
				<WLine x={620} y={560} size={50} dim={K6.over + 20} dimTo={0.5} items={P('c = A ÷ (εl)', K6.re)} />
				<WLine x={620} y={660} size={50} items={P('c = 0.480 ÷ (120 × 1.00)', K6.over)} />
				<MistakeX x={620} y={890} text="c = A ÷ ε" at={K6.over + 40} cross={K6.over + 70} note="path length omitted: keep l (A = εlc, not εc)" size={36} />
			</DimG>
			{/* the live cuvette: light passes through path length l; A rises as c rises */}
			<rect x={100} y={BY - 13} width={CX - 102} height={26} rx={13} fill={SEL} opacity={0.75} />
			<rect x={CX + CW + 2} y={BY - 13 * (1 - 0.6 * deep)} width={470 - CX - CW} height={26 * (1 - 0.6 * deep)} rx={8} fill={SEL} opacity={0.75} />
			<PicV p={CUV.pale} x={CX} y={CY} h={CH} />
			<PicV p={CUV.deep} x={CX} y={CY} h={CH} o={deep} />
			<rect x={472} y={BY - 40} width={30} height={80} rx={6} fill="#cfd6de" stroke={INK} strokeWidth={3} />
			<AChip x={360} y={426} text={`c = ${cNow.toFixed(3)}${NB}mol/L`} size={30} color={NAVY} hand={false} at={-1000} />
			<rect x={380} y={484} width={210} height={70} rx={12} fill="#2b3138" />
			<Sx x={485} y={532} text={`A = ${aNow.toFixed(3)}`} size={38} color="#9be3b8" anchor="middle" weight={700} at={-1000} />
			<path d={`M${CX + 4},${CY + CH + 26} L${CX + CW - 4},${CY + CH + 26} M${CX + 4},${CY + CH + 12} L${CX + 4},${CY + CH + 40} M${CX + CW - 4},${CY + CH + 12} L${CX + CW - 4},${CY + CH + 40}`} stroke={INK} strokeWidth={4} fill="none" />
			<HTag x={CX + CW / 2} y={CY + CH + 82} text="l (path length)" size={36} color={INK} anchor="middle" at={-1000} />
			<HTag x={CX + CW / 2} y={CY + CH + 124} text={`= 1.00${NB}cm`} size={34} color={INK} anchor="middle" at={K6.one} />
			<HTag x={96} y={1030} text="more c → more light absorbed → bigger A" size={32} color={NAVY} at={-1000} />
			<Fade at={-100} out={K6.litre - 6}>
				<rect x={620} y={735} width={460} height={90} rx={14} fill="none" stroke={GREYX} strokeWidth={4} strokeDasharray="12 10" />
				<Sx x={648} y={800} text="c = ? mol/L" size={56} color={GREYX} weight={800} at={-1000} />
			</Fade>
			<Framed x={620} y={800} text={`c = 0.00400${NB}mol/L`} at={K6.litre - 6} size={60} color={STD} />
			<PicV p={UVV} x={1250} y={470} h={230} />
			<HTag x={1250} y={760} text="the cuvette sits in the instrument's light" size={30} color={INK_SOFT} at={-1000} out={K6.book} />
			<Fade at={K6.book}>
				<CAxes g={GT} at={K6.book} xLabel="concentration" yLabel="A" size={28} />
				<CSeg g={GT} a={[0, 0]} b={[2.0, 0.34]} at={K6.trust} color={STD} />
				{[0.4, 0.9, 1.4, 1.9].map((c, i) => <circle key={i} cx={gx(GT, c)} cy={gy(GT, c * 0.17)} r={8} fill={STD} opacity={prog(f, K6.trust + i * 4, 8)} />)}
				<Note x={1300} y={900} text="your instrument, your line" size={44} color={STD} at={K6.trust} />
				<Note x={1300} y={950} text="a book ε may not suit your light" size={30} color={INK_SOFT} at={K6.book} />
			</Fade>
			{void K6.cm}{void K6.thats}{void K6.own}{void K6.cuv}
		</svg>
	);
};
