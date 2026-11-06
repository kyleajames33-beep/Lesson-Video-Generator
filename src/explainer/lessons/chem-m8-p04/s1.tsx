// M8 P04 scenes 1 to 6: the hook (pale and deep copper tubes, the spectrophotometer and its beam, a calibration sketch,
// the rinse-water cuvette), the aim and variables (the standards rack, the variables card), making the standards (stock
// beaker, two burettes, the coded tube filling stock then water, the dilution line, the rack tags), which light and the
// blank (the scan with its spectrum strip and peak marker, two compare arrows, the blank cuvette into the slot, the
// beam slivers), measuring carefully (the large cuvette with its ridged sides, the wipe, the rinse, the orientation
// arrow, the dilute-to-concentrated row) and plotting (the results table, the points, the fitted line, the bending
// fifth standard, the linear range band and the slope).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {DrawPath, prog} from '../../kit';
import {BURETTE, BUR_G, COLM, CUV, CUV_SERIES, Heading, NB, RACK6, RACK6_A, STOCK, TUBE_DEEP, TUBE_PALE, UVV, sc} from './common';
import {
	AChip, Arrow, BAND, BuretteFill, CAxes, CCurve, CG, CSeg, CTube, CU, CU_INK, CalGraph, Cuv, DArrow, Fade, GIV, GOOD, Glow, INK, INK_SOFT, MiniBeam, NAVY, OUT, Overlay, PicF, Ridges, Screen, Stream, Sx,
	TaskLine, WLStrip, Wr, burPt, cuvPt, cuvW, gx, gy, natPt, picW, slotPt, vis,
} from './parts';

const A = (n: number) => n.toFixed(3);

// ---------- 1. Hook ----------
const K1 = cues(sc('hook'), {darker: 'darker', much: 'how much copper', calib: 'A calibration', number: 'a number', measure: 'You measure', absorb: 'absorb', draw: 'draw the line', read: 'read a sample', today: 'Today you', rinse: 'rinse water', workshop: 'workshop'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const T = {y: 200, h: 660};
	const SK: CG = {x: 720, y: 260, w: 330, h: 380, x0: 0, x1: 1, y0: 0, y1: 1};
	return (
		<>
			<Heading text="Calibration practical: from standards to an unknown copper(II) concentration" at={4} size={48} />
			<Overlay>
				<PicF p={TUBE_PALE} x={170} y={T.y} h={T.h} />
				<PicF p={TUBE_DEEP} x={420} y={T.y} h={T.h} />
				<Sx x={170 + picW(TUBE_PALE, T.h) / 2} y={T.y + T.h + 46} text="paler" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={420 + picW(TUBE_DEEP, T.h) / 2} y={T.y + T.h + 46} text="darker" size={34} color={CU_INK} anchor="middle" weight={800} at={K1.darker} />
				<AChip x={350} y={T.y + T.h + 72} text="darker, but how much copper?" size={34} color={NAVY} anchor="middle" hand={false} at={K1.much} />
				<PicF p={UVV} x={1170} y={190} h={330} />
				<Sx x={1170 + picW(UVV, 330) / 2} y={556} text="spectrophotometer" size={30} color={INK} anchor="middle" hand weight={700} at={-1000} />
				<MiniBeam x={1100} y={590} w={740} h={210} at={K1.measure - 10} tint={CU} thin={fr => 1 - 0.55 * prog(fr, K1.absorb, 24)} read={fr => (fr < K1.absorb ? 'A = ?' : `A = ${A(0.48 * prog(fr, K1.absorb, 30))}`)} />
				<Fade at={K1.calib - 6}>
					<CAxes g={SK} at={K1.calib - 6} xLabel="concentration" yLabel="A" size={26} />
				</Fade>
				{[0.2, 0.4, 0.6, 0.8].map((c, i) => <circle key={i} cx={gx(SK, c)} cy={gy(SK, c * 0.95)} r={10} fill={GIV} opacity={prog(f, K1.measure + i * 8, 10)} />)}
				<CSeg g={SK} a={[0, 0]} b={[0.95, 0.9]} at={K1.draw} color={GIV} width={5} />
				<CSeg g={SK} a={[0, 0.5]} b={[0.53, 0.5]} at={K1.read} color="#d9772b" width={4} dash="10 8" />
				<CSeg g={SK} a={[0.53, 0.5]} b={[0.53, 0]} at={K1.read + 20} color="#d9772b" width={4} dash="10 8" />
				<Sx x={720} y={790} text="colour → a number" size={38} color={NAVY} hand weight={700} at={K1.number} />

				<PicF p={CUV.unk} x={1720} y={820} h={240} />
				<Sx x={1680} y={900} text="rinse water from a plating workshop:" size={32} color={GIV} anchor="end" weight={800} at={K1.rinse} />
				<Sx x={1680} y={944} text="copper ions, how much?" size={32} color={GIV} anchor="end" weight={800} at={K1.workshop} />
				{void K1.calib}
			</Overlay>
		</>
	);
};

// ---------- 2. Aim and variables ----------
const K2 = cues(sc('aim-variables'), {std: 'a standard', indep: 'independent', concS: "standards' concentration", abs: 'their absorbance', soaks: 'soaks up', same: 'stays the same'});
const CTRL2 = [`wavelength (about 800${NB}nm)`, `same cuvette (1.00${NB}cm)`, 'zeroed with the same blank', 'same distilled water', 'room temperature, one session'];
export const SceneAim: React.FC = () => {
	const f = useCurrentFrame();
	const CX = 1040, CY = 196, CW = 800;
	const slot = (t: number) => 0.35 + 0.65 * prog(f, t, 12);
	const RH = 470, rw = picW(RACK6, RH);
	return (
		<Overlay>
			<TaskLine text="Aim: find the Cu^{2+} concentration in the rinse water" at={2} size={50} />
			<PicF p={RACK6} x={96} y={240} h={RH} />
			{RACK6_A.tx.map((tx, i) => {
				const [x] = natPt(RACK6, 96, 240, RH, tx, 0);
				return <Sx key={i} x={x} y={240 + RH + 40 + (i % 2) * 34} text={i ? ['0.0200', '0.0400', '0.0600', '0.0800', '0.120'][i - 1] : 'blank'} size={26} color={i ? CU_INK : INK} anchor="middle" weight={800} at={K2.std + i * 5} />;
			})}
			<Sx x={96 + rw / 2} y={240 + RH + 112} text="mol/L" size={28} color={INK} anchor="middle" weight={700} at={K2.std + 30} />
			<Wr x={96} y={910} text="standard: a solution whose" at={K2.std} size={40} color={NAVY} hand />
			<Wr x={96} y={960} text="concentration you know" at={K2.std + 16} size={40} color={NAVY} hand />
			<rect x={CX} y={CY} width={CW} height={812} rx={22} fill="#fffdf8" stroke={NAVY} strokeWidth={3.5} />
			<Sx x={CX + 30} y={CY + 60} text="Variables" size={46} color={NAVY} hand weight={700} at={-1000} />
			<Sx x={CX + 30} y={CY + 130} text="Independent" size={38} color="#1f7f78" hand weight={700} at={-1000} opacity={slot(K2.concS)} />
			<Wr x={CX + 30} y={CY + 182} text="concentration of the standards" at={K2.concS} size={38} color={INK} weight={800} />
			<Wr x={CX + 30} y={CY + 226} text="(mol/L)" at={K2.concS + 14} size={32} color={INK} weight={700} />
			<Sx x={CX + 30} y={CY + 300} text="Dependent" size={38} color="#1f7f78" hand weight={700} at={-1000} opacity={slot(K2.abs)} />
			<Wr x={CX + 30} y={CY + 352} text="absorbance" at={K2.abs} size={42} color={INK} weight={800} />
			<Wr x={CX + 30} y={CY + 396} text="how much light each one soaks up" at={K2.soaks} size={32} color={INK} weight={700} />
			<Sx x={CX + 30} y={CY + 470} text="Controlled" size={38} color="#1f7f78" hand weight={700} at={-1000} opacity={slot(K2.same)} />
			<g opacity={1 - prog(f, K2.same - 10, 12)}>{[0, 1, 2, 3, 4].map(i => <PicF key={i} p={CUV_SERIES[i]} x={CX + 80 + i * 140} y={CY + 520} h={260} />)}</g>
			{CTRL2.map((c, i) => (
				<g key={i}>
					<Sx x={CX + 40} y={CY + 528 + i * 56} text="✓" size={32} color={GOOD} weight={800} at={K2.same + i * 9} />
					<Sx x={CX + 84} y={CY + 528 + i * 56} text={c} size={33} color={INK} weight={600} at={K2.same + i * 9} />
				</g>
			))}
			<Glow cx={96 + rw / 2} cy={240 + RH / 2} rx={rw / 2 + 20} ry={RH / 2} at={K2.concS} len={60} />
			{void K2.indep}
		</Overlay>
	);
};

// ---------- 3. Make the standards ----------
const K3 = cues(sc('make-standards'), {stock: 'stock solution', p200: 'point two zero zero', fill: 'Fill one burette', water: 'distilled water', rinsing: 'rinsing each', run: 'Run one millilitre', nine: 'nine of water', mix: 'and mix', ten: 'tenfold', l2: ['litre', 2], two: 'two, three', topped: 'topped up', strongest: 'The strongest', zero: 'one two zero'});
export const SceneStandards: React.FC = () => {
	const f = useCurrentFrame();
	const BH = 620, B1 = {x: 380, y: 196}, B2 = {x: 620, y: 196};
	const [t1x, t1y] = burPt(B1.x, B1.y, BH, BUR_G.tip[0], BUR_G.tip[1]);
	const [t2x] = burPt(B2.x, B2.y, BH, BUR_G.tip[0], BUR_G.tip[1]);
	const tubeX = (fr: number) => (fr < K3.nine - 6 ? t1x : fr < K3.nine + 14 ? t1x + (t2x - t1x) * ((fr - K3.nine + 6) / 20) : t2x) - 35;
	const sStart = K3.run + 14, sEnd = sStart + 30, wStart = K3.nine + 18, wEnd = wStart + 50;
	const RH = 420, RX = 1090, RY = 360, rw = picW(RACK6, RH);
	const tags = ['blank', '0.0200', '0.0400', '0.0600', '0.0800', '0.120'];
	const tagAt = [K3.zero + 20, K3.l2, K3.two, K3.two + 22, K3.two + 42, K3.zero];
	return (
		<Overlay>
			<TaskLine text="Make the standards" at={2} size={52} />
			<PicF p={STOCK} x={96} y={330} h={250} />
			<Wr x={96} y={630} text="stock: 0.200 mol/L" at={K3.p200} size={32} color={CU_INK} />
			<Wr x={96} y={670} text="CuSO₄ (teacher)" at={K3.p200 + 10} size={32} color={CU_INK} />
			<BuretteFill x={B1.x} y={B1.y} h={BH} level={fr => (fr < sStart ? 0 : Math.min(1, (fr - sStart) / 30))} fill={fr => prog(fr, K3.fill, 16)} color="#7fb2e0" />
			<BuretteFill x={B2.x} y={B2.y} h={BH} level={fr => (fr < wStart ? 0 : Math.min(9, ((fr - wStart) / 50) * 9))} fill={fr => prog(fr, K3.water, 16)} color="#d7ecf7" />
			<Sx x={t1x} y={B1.y - 6} text="stock" size={32} color={CU_INK} anchor="middle" weight={800} at={K3.fill} />
			<Sx x={t2x} y={B2.y - 6} text="water" size={32} color={INK} anchor="middle" weight={800} at={K3.water} />
			<Stream x={t1x} y0={t1y} y1={t1y + 200} at={sStart} until={sEnd} color={CU} />
			<Stream x={t2x} y0={t1y} y1={t1y + 140} at={wStart} until={wEnd} color="#a9d0ea" />
			<CTube x={tubeX(f)} y={t1y + 30} w={70} h={230} a={fr => 0.1 * prog(fr, sStart + 4, 30)} b={fr => 0.9 * prog(fr, wStart + 4, 50)} mix={K3.mix + 10} at={K3.run - 10} marks={[{v: 0.1, label: `1.00${NB}mL`, at: sEnd}, {v: 1, label: `10.00${NB}mL`, at: wEnd}]} />
			<AChip x={96} y={990} text="rinse each burette with the liquid it will hold (M6)" size={30} color="#6d6457" hand={false} at={K3.rinsing} />
			<Wr x={960} y={250} text="c = 0.200 × 1.00 ÷ 10.00" at={K3.ten} size={44} color={INK} />
			<Wr x={960} y={312} text="= 0.0200 mol/L" at={K3.l2 - 10} size={48} color={GIV} weight={800} />
			<PicF p={RACK6} x={RX} y={RY} h={RH} />
			{RACK6_A.tx.map((tx, i) => {
				const [x] = natPt(RACK6, RX, RY, RH, tx, 0);
				return <Sx key={i} x={x} y={RY + RH + 36 + (i % 2) * 32} text={tags[i]} size={26} color={i ? CU_INK : INK} anchor="middle" weight={800} at={tagAt[i]} />;
			})}
			<Sx x={RX + rw / 2} y={RY + RH + 104} text="mol/L" size={28} color={INK} anchor="middle" weight={700} at={K3.l2} />
			<Wr x={960} y={940} text={`2.00, 3.00, 4.00 mL stock + water to 10.00${NB}mL`} at={K3.two} size={34} color={INK} />
			<Wr x={960} y={990} text={`6.00${NB}mL → 0.120 mol/L (the strongest)`} at={K3.zero - 10} size={34} color={CU_INK} />
			<AChip x={1400} y={300} text="label every dilution" size={28} color="#6d6457" hand={false} at={K3.strongest} />
			{void K3.stock}{void K3.topped}{void BURETTE}
		</Overlay>
	);
};

// ---------- 4. Which light, and the blank ----------
const K4 = cues(sc('wavelength-blank'), {red: 'red end', scan: 'A scan', eight: 'eight hundred', infra: 'near infrared', there: 'spectrophotometer there', change: 'each small change', big2: ['biggest', 2], school: 'A school colourimeter', redf: 'red filter', zero: 'zero it', blank: 'a blank', glass: 'The glass', away: 'that away', copper: 'from copper'});
export const G4: CG = {x: 260, y: 230, w: 820, h: 480, x0: 400, x1: 900, y0: 0, y1: 1};
export const band = (l: number) => 0.94 * Math.exp(-(((l - 800) / 175) ** 2)) + 0.01;
export const SceneWavelength: React.FC = () => {
	const f = useCurrentFrame();
	const scanTo = (fr: number) => 400 + 500 * Math.min(1, Math.max(0, (fr - K4.scan) / 70));
	const UH = 290, UX = 1210, UY = 210;
	const [sx, sy] = slotPt(UX, UY, UH);
	const ch = 90;
	const [bx0] = [gx(G4, 750)];
	return (
		<Overlay>
			<TaskLine text="Set the wavelength, then zero" at={2} size={52} />
			<CAxes g={G4} at={-1000} xLabel="wavelength (nm)" yLabel="absorbance" xTicks={[400, 500, 600, 700, 800, 900]} size={28} />
			<Sx x={G4.x} y={G4.y - 14} text="example scan: the 0.0800 mol/L standard" size={28} color={INK} anchor="start" weight={700} at={K4.scan} />
			<CCurve g={G4} fn={band} xa={400} xb={900} upto={scanTo} color={CU} width={7} fill={CU} />
			<CCurve g={G4} fn={l => 0.7 * (band(l) - 0.01) + 0.01} xa={400} xb={900} upto={fr => (fr < K4.change ? 0 : 900)} color={CU} width={4} o={0.5} />
			<WLStrip x={G4.x} y={G4.y + G4.h + 100} w={G4.w} h={34} l0={400} l1={900} at={K4.red - 20} ticks={[]} />
			<rect x={bx0} y={G4.y + G4.h + 100} width={G4.x + G4.w - bx0} height={34} fill="#9a948a" opacity={0.9 * vis(f, K4.infra - 10)} />
			<Sx x={(bx0 + G4.x + G4.w) / 2} y={G4.y + G4.h + 170} text="near infrared" size={28} color={INK} anchor="middle" weight={800} at={K4.infra} />
			<Sx x={gx(G4, 650)} y={G4.y + G4.h + 170} text="red end" size={28} color="#c4432f" anchor="middle" weight={800} at={K4.red} />
			<Fade at={K4.eight}>
				<line x1={gx(G4, 800)} x2={gx(G4, 800)} y1={gy(G4, band(800)) - 20} y2={G4.y + G4.h} stroke="#d9772b" strokeWidth={4} strokeDasharray="10 8" />
				<path d={`M${gx(G4, 800) - 16},${gy(G4, band(800)) - 54} L${gx(G4, 800) + 16},${gy(G4, band(800)) - 54} L${gx(G4, 800)},${gy(G4, band(800)) - 30} Z`} fill="#d9772b" />
			</Fade>
			<AChip x={gx(G4, 405)} y={G4.y + 8} text="about 800 nm: biggest absorbance" size={30} color="#b35f1a" hand={false} at={K4.eight + 8} />
			<DArrow x={gx(G4, 800) + 26} y1={gy(G4, 0.7 * 0.94 + 0.01)} y2={gy(G4, band(800))} at={K4.big2 - 10} color={NAVY} />
			<DArrow x={gx(G4, 600)} y1={gy(G4, 0.7 * (band(600) - 0.01) + 0.01)} y2={gy(G4, band(600))} at={K4.big2} color={NAVY} />
			<Sx x={gx(G4, 405)} y={gy(G4, 0.6)} text="same copper change:" size={30} color={NAVY} anchor="start" weight={800} at={K4.big2} />
			<Sx x={gx(G4, 405)} y={gy(G4, 0.6) + 38} text="biggest A change at the peak" size={30} color={NAVY} anchor="start" weight={800} at={K4.big2 + 10} />
			<PicF p={UVV} x={UX} y={UY} h={UH} />
			<Glow cx={UX + picW(UVV, UH) / 2} cy={UY + UH / 2} rx={260} ry={170} at={K4.there} len={60} />
			<Sx x={UX} y={UY + UH + 40} text="this spectrophotometer reaches 800 nm" size={28} color={INK} weight={800} at={K4.there} />
			<PicF p={CUV.blank} x={sx - cuvW(ch) / 2} y={sy - ch * 0.75 + (1 - prog(f, K4.blank, 20)) * -120} h={ch} o={vis(f, K4.blank - 6)} />
			<Screen x={UX} y={UY} h={UH} text={() => 'A = 0.000'} at={K4.zero + 30} />
			<PicF p={COLM} x={UX} y={600} h={150} o={vis(f, K4.school - 10)} />
			<Wr x={UX + 200} y={640} text="school colourimeter:" at={K4.school} size={28} color={INK} />
			<Wr x={UX + 200} y={676} text="red filter (e.g. 635 nm)," at={K4.redf} size={28} color={INK} />
			<Wr x={UX + 200} y={712} text="its own calibration;" at={K4.redf + 14} size={28} color={INK} />
			<Wr x={UX + 200} y={748} text="don't reuse this slope" at={K4.redf + 28} size={28} color={OUT} />
			<MiniBeam x={UX} y={800} w={620} h={200} at={-1000} tint="#d7ecf7" thin={fr => 1 - 0.12 * (1 - prog(fr, K4.away, 20))} read={fr => (fr < K4.blank ? 'A = ?' : fr < K4.away ? 'A = 0.012' : 'A = 0.000')} slivers={K4.glass} size={32} />
			<Sx x={UX + 30} y={1040} text="blank: zero for the glass and the water" size={30} color={GOOD} weight={800} at={K4.away} />
			<AChip x={260} y={990} text="Module 5: measure the colour it absorbs, not the colour you see" size={28} color="#6d6457" hand={false} at={K4.red} />
			{void K4.copper}{void Arrow}{void CSeg}
		</Overlay>
	);
};

// ---------- 5. Measure carefully ----------
const K5 = cues(sc('measure-carefully'), {ridged: 'ridged sides', wipe: 'wipe the clear', finger: 'fingerprint scatters', adds: 'adds absorbance', rinse: 'Rinse the cuvette', last: 'the last one', work: 'Work from', conc: 'most concentrated'});
export const SceneMeasure: React.FC = () => {
	const f = useCurrentFrame();
	const C = {x: 230, y: 190, h: 660};
	const P = (nx: number, ny: number) => cuvPt(C.x, C.y, C.h, nx, ny);
	const [fx, fy] = P(1000, 1100);
	const wipe = prog(f, K5.wipe, 40);
	const smudge = 1 - prog(f, K5.wipe + 30, 20);
	const rinse = vis(f, K5.rinse, K5.work - 10, 14);
	const UH = 260, UX = 1330, UY = 200;
	const [sx, sy] = slotPt(UX, UY, UH);
	return (
		<Overlay>
			<TaskLine text="Measure each standard" at={2} size={52} />
			<Cuv x={C.x} y={C.y} h={C.h} states={[{p: CUV.c1, at: -1000}]} />
			<Ridges x={C.x} y={C.y} h={C.h} at={K5.ridged - 10} face={K5.wipe} out={K5.rinse} />
			{smudge > 0.01 ? <ellipse cx={fx + 10} cy={fy} rx={26} ry={44} fill="#9a8a70" opacity={0.6 * smudge * vis(f, K5.finger - 40)} /> : null}
			{wipe > 0.01 && wipe < 1 ? <path d={`M${fx - 70},${fy - 120 + wipe * 240} q70,-30 140,0`} fill="none" stroke="#e8e2d6" strokeWidth={22} strokeLinecap="round" opacity={0.95} /> : null}
			{rinse > 0.01 ? <path d={`M${P(850, 700)[0]},${P(850, 700)[1]} q${60},${-50} ${120},0 q${-60},${50} ${-120},0`} fill="none" stroke={CU} strokeWidth={6} opacity={rinse} transform={`rotate(${(f % 60) * 6},${P(1000, 900)[0]},${P(1000, 900)[1]})`} /> : null}
			<Wr x={520} y={300} text="hold by the ridged sides" at={K5.ridged} size={42} color="#b07a12" weight={800} />
			<Wr x={520} y={380} text="wipe the clear sides:" at={K5.wipe} size={40} color={INK} weight={800} />
			<Wr x={520} y={430} text="a fingerprint scatters light, A ↑" at={K5.finger} size={38} color={OUT} weight={800} />
			<Wr x={520} y={510} text="rinse with the next standard" at={K5.rinse} size={40} color={INK} weight={800} />
			<Wr x={520} y={556} text="so the last one doesn't dilute it" at={K5.last} size={34} color={INK} weight={700} />
			<Wr x={520} y={636} text="same way round every time" at={K5.work} size={38} color={INK} weight={800} />
			<PicF p={UVV} x={UX} y={UY} h={UH} />
			<Fade at={K5.work}>
				<path d={`M${sx - 30},${sy - 70} l30,-24 l30,24`} fill="none" stroke={NAVY} strokeWidth={6} strokeLinecap="round" />
				<path d={`M${P(940, 260)[0]},${P(940, 260)[1] + 20} l${30},-24 l30,24`} fill="none" stroke={NAVY} strokeWidth={6} strokeLinecap="round" />
			</Fade>
			{CUV_SERIES.map((p, i) => <PicF key={i} p={p} x={520 + i * 140} y={700} h={300} o={vis(f, K5.conc - 40 + i * 6)} />)}
			<Arrow x1={520} y1={1030} x2={1180} y2={1030} at={K5.conc} color={CU} width={6} />
			<Sx x={1200} y={1040} text="dilute → concentrated" size={34} color={CU_INK} weight={800} at={K5.conc} />
			{void K5.adds}{void sx}
		</Overlay>
	);
};

// ---------- 6. Plot it, and find the linear range ----------
const K6 = cues(sc('plot-linear-range'), {readings: 'the readings', plot: 'Plot absorbance', blank: 'the blank as', first: 'first four', line: 'straight line', fifth: 'The fifth', below: 'well below', little: 'so little light', trust: 'less trustworthy', p080: 'zero eight zero', range: 'linear range'});
export const G6: CG = {x: 250, y: 210, w: 820, h: 620, x0: 0, x1: 0.14, y0: 0, y1: 1.6};
export const SceneRange: React.FC = () => {
	const f = useCurrentFrame();
	const ptAt = [K6.blank + 10, K6.first, K6.first + 8, K6.first + 16, K6.first + 24, K6.fifth];
	const TX = 1200, TY = 210;
	const lit = (i: number) => vis(f, ptAt[i], ptAt[i] + 40, 8);
	return (
		<Overlay>
			<TaskLine text="Plot it, then find the linear range" at={2} size={52} />
			<CalGraph g={G6} t={{pts: ptAt, line: K6.line, ext: K6.fifth + 20, fifth: K6.below, band: K6.range}} />
			<AChip x={gx(G6, 0.098)} y={gy(G6, 1.45) - 50} text="the line predicts 1.43; it reads 1.33" size={28} color={OUT} anchor="middle" hand={false} at={K6.below + 10} />
			<Sx x={gx(G6, 0.04)} y={gy(G6, 0.06) - 14} text="linear range" size={34} color={BAND} anchor="middle" weight={800} at={K6.range + 10} />
			<Sx x={gx(G6, 0.03)} y={gy(G6, 1.2)} text="line of best fit (blank + first four)" size={28} color={GIV} weight={800} at={K6.line + 10} />
			<Fade at={-1000}>
				<rect x={TX} y={TY} width={640} height={520} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<Sx x={TX + 24} y={TY + 46} text="c (mol/L)" size={32} color={INK} hand weight={700} at={-1000} />
				<Sx x={TX + 360} y={TY + 46} text="absorbance" size={32} color={INK} hand weight={700} at={-1000} />
				<Sx x={TX + 636} y={TY - 12} text="example data" size={26} color={INK} anchor="end" weight={700} at={-1000} />
			</Fade>
			{['0 (blank)', '0.0200', '0.0400', '0.0600', '0.0800', '0.120'].map((c, i) => {
				const y = TY + 112 + i * 66;
				const L = lit(i);
				return (
					<g key={i}>
						{L > 0.01 ? <rect x={TX + 10} y={y - 42} width={620} height={58} rx={10} fill="#f6d77a" opacity={0.5 * L} /> : null}
						<Sx x={TX + 24} y={y} text={c} size={34} color={i === 5 ? OUT : INK} weight={700} at={-1000} />
						<Sx x={TX + 360} y={y} text={STDA[i]} size={34} color={i === 5 ? OUT : INK} weight={800} at={-1000} />
					</g>
				);
			})}
			<Fade at={K6.little}>
				<rect x={TX} y={770} width={640} height={240} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
				<PicF p={CUV.c5} x={TX + 200} y={790} h={200} />
				<rect x={TX + 30} y={866} width={160} height={40} fill="#fff3c4" stroke="#e8d9a8" strokeWidth={2} />
				<rect x={TX + 270} y={882} width={220} height={8} fill="#fff3c4" stroke="#e8d9a8" strokeWidth={2} />
				<rect x={TX + 500} y={846} width={30} height={80} rx={6} fill="#cfd6de" stroke={INK} strokeWidth={3} />
				<Sx x={TX + 330} y={970} text="very little light reaches" size={28} color={OUT} weight={800} at={-1000} />
				<Sx x={TX + 330} y={1002} text="the detector" size={28} color={OUT} weight={800} at={-1000} />
			</Fade>
			<Wr x={250} y={1010} text="slope = 11.9 L mol⁻¹ (passes through zero)" at={K6.range + 20} size={40} color={GIV} weight={800} />
			<Sx x={gx(G6, 0.08)} y={G6.y + G6.h + 132} text="up to 0.0800 mol/L" size={30} color={BAND} anchor="middle" weight={800} at={K6.p080} out={K6.range + 16} />
			{void K6.readings}{void K6.plot}{void K6.trust}{void CU}{void DrawPath}{void BURETTE}
		</Overlay>
	);
};
const STDA = ['0.000', '0.238', '0.479', '0.712', '0.957', '1.33'];
