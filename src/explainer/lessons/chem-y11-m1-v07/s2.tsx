// Y11 Chem M1 V07 scenes 6 to 10: the four-step method (with V06's accounting bar as "same idea"), ammonium nitrate
// (two nitrogens, the mass bar built group by group), the hydrate (crystals, a lattice magnifier, staged working),
// heating the crystals on one clock (plate cross-fades, the water tiles lift off, the balance reading and "% of
// starting mass" fall together) and the memory line.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {SALT_SEG, SAND_SEG} from '../chem-y11-m1-v06/s1';
import {CRU_B, CRU_L, CRU_W, F_CO2, F_CUSO4, F_NH4NO3, sc} from './common';
import {
	AMB, AMB_INK, AccBar, Balance, balGeo, Bracket, Chip, DrawPath, EL, Fade, Framed, Glyph, Heading, INK, MassBar, PURE, PenArrow, PenRing, Plate, RED, RLab, ROSE, Readout, Rich, SVG,
	Sx, TaskStrip, ViewFrame, WATER, WATER_INK, Write, clamp01, plateMap, prog, richW, tileGeo,
} from './parts';

const GREEN_T = '#2f8a5b';
const Givens1: React.FC<{text: string; x?: number; w?: number; size?: number}> = ({text, x = 1260, w = 564, size = 36}) => (
	<g>
		<rect x={x} y={268} width={w} height={74} rx={14} fill="#eef2fa" stroke={PURE} strokeWidth={3} />
		<Rich x={x + 22} y={318} segs={[{t: text, c: PURE}]} size={size} weight={700} />
	</g>
);
/** Coded steam wisps rising from (x, y). */
const Steam: React.FC<{x: number; y: number; from: number; to: number}> = ({x, y, from, to}) => {
	const f = useCurrentFrame();
	const o = prog(f, from, 14) * (1 - prog(f, to, 20));
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{[0, 1, 2, 3].map(i => {
				const ph = ((f * 1.3 + i * 30) % 120) / 120;
				return <path key={i} d={`M${x - 60 + i * 40},${y - ph * 130} q-14,-20 0,-40 q14,-20 0,-40`} fill="none" stroke="#9fb4c4" strokeWidth={5} strokeLinecap="round" opacity={1 - ph} />;
			})}
		</g>
	);
};

// ---------- 6. the method ----------
const K6 = cues(sc('method'), {count: 'Count how many', multiply: 'Multiply by', mass1: 'of the mass', add: 'Add up every', rfm: 'formula mass', divide: 'Then divide', hundred: 'a hundred', part: 'part over whole', last: 'like last time', itself: 'formula itself'});
const EQF = [{t: '% of element = '}, {t: '(number of atoms × Ar)', c: AMB_INK}, {t: ' ÷ '}, {t: 'Mr', c: PURE}, {t: ' × 100'}];
export const SceneMethod: React.FC = () => {
	const p0 = 110 + richW(EQF.slice(0, 1), 52), p1 = p0 + richW([EQF[1]], 52), m0 = 110 + richW(EQF.slice(0, 3), 52), m1 = m0 + richW([EQF[3]], 52);
	const stages = [
		{n: '1', t: 'count the atoms of the element', at: K6.count},
		{n: '2', t: 'share = count × Ar', at: K6.multiply},
		{n: '3', t: 'Mr = the sum of every Ar', at: K6.add},
		{n: '4', t: '% = share ÷ Mr × 100', at: K6.divide},
	];
	return (
		<SVG>
			<Heading text="The method" at={0} />
			<Sx x={110} y={236} text="carbon dioxide, from before:" size={30} color={INK} weight={700} at={-1000} />
			<Rich x={110} y={282} segs={[{t: 'Mr(CO_2) = 12.0 + 2 × 16.0 = 44.0'}]} size={34} weight={700} />
			<Rich x={110} y={326} segs={[{t: 'oxygen share = 2 × 16.0 = 32.0'}]} size={34} weight={700} />
			<Rich x={110} y={370} segs={[{t: '% O = 32.0 ÷ 44.0 × 100 = 72.7%'}]} size={34} weight={700} />
			<MassBar F={F_CO2} x={1300} y={250} w={520} h={80} size={32} sel={{O: -1000}} />
			<Sx x={1300} y={376} text="CO_2: oxygen 72.7% of the mass" size={30} color={INK} weight={700} at={-1000} />
			{stages.map((s, i) => (
				<g key={s.n}>
					<Write x={110} y={470 + i * 80} text={s.n} at={s.at} size={48} color={AMB_INK} />
					<Rich x={170} y={470 + i * 80} segs={[{t: s.t}]} size={44} at={s.at + 4} />
				</g>
			))}
			<AccBar id="v7b6" x={1300} y={480} w={520} h={80} labelSize={30} whole={20} segs={[SAND_SEG(6, -1000, '30.0%'), SALT_SEG(14, -1000, '70.0%')]} wholeLabel="the sand and salt run" />
			<Sx x={1300} y={612} text="same idea: part over whole" size={34} color={INK} weight={800} at={K6.last} />
			<Glyph k="CO2" x={1560} y={740} u={52} />
			<Sx x={1560} y={840} text="count, weigh, add, divide" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
			<Rich x={110} y={860} segs={EQF} size={52} at={K6.part - 6} />
			<Bracket a={[p0, 806]} b={[p1, 806]} at={K6.part + 4} color={AMB} depth={-16} />
			<Write x={(p0 + p1) / 2 - 40} y={776} text="part" at={K6.part + 10} size={42} color={AMB_INK} />
			<Bracket a={[m1 + 4, 880]} b={[m0 - 4, 880]} at={K6.part + 20} color={PURE} depth={-16} />
			<Write x={m0 - 30} y={940} text="whole" at={K6.part + 26} size={42} color={PURE} />
			{void K6.mass1}{void K6.rfm}{void K6.hundred}{void K6.itself}
		</SVG>
	);
};

// ---------- 7. ammonium nitrate: count every nitrogen ----------
const K7 = cues(sc('ammonium-nitrate'), {fw: 'a formula with', trap: 'a trap', parts: 'two parts', each: 'each part contains', two: 'two nitrogens', rfm: 'The relative formula mass', f14: ['fourteen', 1], four: 'plus four times', f14b: ['fourteen', 2], three: 'plus three times', eighty: ['eighty', 1], share: "Nitrogen's share", t28: ['twenty-eight', 1], so: 'So nitrogen is', t35: 'thirty-five', countone: 'Count only one', slip: 'classic slip'});
export const NH_AT = [K7.fw + 4, K7.fw + 14, K7.fw + 24, K7.fw + 34];
/** Ball cluster of an ammonium (N with four H) or nitrate (N with three O) group, nitrogen at the centre. */
const Ion: React.FC<{x: number; y: number; kind: 'NH4' | 'NO3'}> = ({x, y, kind}) => {
	const n = kind === 'NH4' ? 4 : 3, rr = kind === 'NH4' ? 22 : 30, d = kind === 'NH4' ? 52 : 62;
	return (
		<g>
			{Array.from({length: n}, (_, i) => { const a = (i / n) * Math.PI * 2 - Math.PI / 2; return <circle key={i} cx={x + Math.cos(a) * d} cy={y + Math.sin(a) * d} r={rr} fill={kind === 'NH4' ? EL.H : EL.O} stroke={INK} strokeWidth={3} />; })}
			<circle cx={x} cy={y} r={32} fill={EL.N} stroke={INK} strokeWidth={3} />
			<Sx x={x} y={y + 12} text="N" size={34} color="#fff" anchor="middle" weight={800} at={-1000} />
			<Sx x={x + 96} y={y - 60} text={kind === 'NH4' ? '+' : '−'} size={52} color="#0b625d" weight={800} at={-1000} />
		</g>
	);
};
export const SceneAmmonium: React.FC = () => {
	const f = useCurrentFrame();
	const fx = 110, fy = 350, fs = 72;
	const wNH4 = richW([{t: 'NH_4'}], fs), wN = richW([{t: 'N'}], fs), wNO3 = richW([{t: 'NO_3'}], fs);
	const n2x = fx + wNH4;
	const mrv = [14, 4, 14, 48].reduce((a, v, i) => a + (f >= NH_AT[i] + 6 ? v : 0), 0);
	const r1 = [{t: 'Mr = '}, {t: '14.0 + 4 × 1.0 + 14.0 + 3 × 16.0', c: PURE}, {t: ' = 80.0'}];
	const r2 = [{t: 'nitrogen share = '}, {t: '2 × 14.0', c: PURE}, {t: ' = 28.0'}];
	const r3 = [{t: '% N = '}, {t: '28.0 ÷ 80.0', c: PURE}, {t: ' × 100 = '}];
	return (
		<SVG>
			<Heading text="Ammonium nitrate: count every nitrogen" at={0} />
			<TaskStrip text="find the percentage by mass of nitrogen in NH_4NO_3" />
			<Givens1 text="givens:   N 14.0  |  H 1.0  |  O 16.0" />
			<Rich x={fx} y={fy} segs={[{t: 'NH_4'}, {t: 'NO_3'}]} size={fs} />
			<Fade at={K7.parts}>
				<Rich x={fx + wNH4 / 2} y={fy + 50} segs={[{t: 'NH_4^{+}'}]} size={34} anchor="middle" />
				<Rich x={n2x + wNO3 / 2} y={fy + 50} segs={[{t: 'NO_3^{−}'}]} size={34} anchor="middle" />
				<Sx x={fx + wNH4 / 2} y={fy + 90} text="ammonium" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
				<Sx x={n2x + wNO3 / 2} y={fy + 90} text="nitrate" size={30} color={INK} anchor="middle" weight={700} at={-1000} />
			</Fade>
			<PenRing cx={fx + wN / 2} cy={fy - 24} rx={34} ry={44} at={K7.each} color={AMB} seed={2} />
			<PenRing cx={n2x + wN / 2} cy={fy - 24} rx={34} ry={44} at={K7.each + 8} color={AMB} seed={5} />
			<Write x={fx + wNH4 + wNO3 + 60} y={fy - 10} text="two N" at={K7.two} size={44} color={AMB_INK} />
			<Fade at={NH_AT[0] - 6}><MassBar F={F_NH4NO3} x={110} y={510} at={NH_AT} sel={{N: K7.share}} /></Fade>
			<Fade at={NH_AT[0]}><RLab x={860} y={500} t="Mr" /><Readout x={860} y={510} w={220} text={mrv.toFixed(1)} size={52} color={PURE} frame={PURE} anchor="middle" /></Fade>
			<Fade at={K7.t28}><RLab x={1110} y={500} t="N share" /><Readout x={1110} y={510} w={220} text="28.0" size={52} color={AMB_INK} frame={AMB} anchor="middle" /></Fade>
			<Fade at={K7.t35}><RLab x={1360} y={500} t="% N" /><Readout x={1360} y={510} w={240} text="35.0%" size={52} color={AMB_INK} frame={AMB} anchor="middle" /></Fade>
			<g opacity={1 - prog(f, K7.countone - 10, 12)}>
				<g transform="translate(1400,780) scale(1.3) translate(-1400,-780)"><Ion x={1400} y={780} kind="NH4" /></g>
				<g transform="translate(1690,780) scale(1.3) translate(-1690,-780)"><Ion x={1690} y={780} kind="NO3" /></g>
				<Sx x={1400} y={930} text="ammonium part" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1690} y={930} text="nitrate part" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<PenRing cx={1400} cy={780} rx={48} ry={48} at={K7.each} color={AMB} seed={3} />
				<PenRing cx={1690} cy={780} rx={48} ry={48} at={K7.each + 8} color={AMB} seed={6} />
			</g>
			<Rich x={110} y={690} segs={r1.map((s, i) => ({...s, at: [K7.rfm, K7.f14, K7.eighty][i]}))} at={K7.rfm} size={44} />
			<Rich x={110} y={780} segs={r2.map((s, i) => ({...s, at: [K7.share, K7.share + 20, K7.t28][i]}))} at={K7.share} size={48} />
			<Rich x={110} y={880} segs={r3.map((s, i) => ({...s, at: [K7.so, K7.so + 20, K7.so + 80][i]}))} at={K7.so} size={52} />
			<Framed x={110 + richW(r3, 52)} y={880} segs={[{t: '35.0%', c: GREEN_T}]} at={K7.t35} size={52} />
			<Chip x={1180} y={730} segs={[{t: 'one N: 14.0 ÷ 80.0 × 100 = 17.5%'}]} at={K7.countone} size={36} color={RED} strike={K7.slip - 6} />
			<Write x={1200} y={860} text="count every N" at={K7.slip - 2} size={44} color={RED} />
			{void K7.trap}{void EL}
		</SVG>
	);
};

// ---------- 8. hydrates: water inside the crystal ----------
const K8 = cues(sc('hydrate'), {crys: 'water of crystallisation', formula: 'Their formula', dot: 'The dot means', five: 'five water molecules', treat: 'Treat the five', each: 'Each water', e18: 'eighteen', ninety: ['ninety', 1], whole: 'The whole formula', s63: 'sixty-three', t32: 'thirty-two', s64: 'sixty-four', n90b: ['ninety', 2], t249: ['forty-nine', 1], so: 'So water is', t36: 'thirty-six'});
export const CU_AT = [K8.s63, K8.t32, K8.s64, K8.n90b];
/** Coded lattice fragment: copper ions, sulfate groups and water molecules (tinted) in a grid. */
const LatticeBits: React.FC<{cx: number; cy: number}> = ({cx, cy}) => {
	const f = useCurrentFrame();
	const out: React.ReactNode[] = [];
	for (let j = 0; j < 4; j++) for (let i = 0; i < 4; i++) {
		const x = cx - 150 + i * 100 + Math.sin(f * 0.3 + i + j) * 1.5, y = cy - 150 + j * 100 + Math.cos(f * 0.27 + i * 2 + j) * 1.5;
		if ((i + j) % 2 === 0) out.push(<circle key={'c' + i + j} cx={x} cy={y} r={20} fill={EL.Cu} stroke={INK} strokeWidth={2} />);
		else out.push(<g key={'s' + i + j}>{[0, 1, 2, 3].map(k => <circle key={k} cx={x + Math.cos(k * 1.57 + 0.78) * 18} cy={y + Math.sin(k * 1.57 + 0.78) * 18} r={9} fill={EL.O} stroke={INK} strokeWidth={1.5} />)}<circle cx={x} cy={y} r={13} fill={EL.S} stroke={INK} strokeWidth={2} /></g>);
		out.push(<g key={'w' + i + j}><circle cx={x + 50} cy={y + 50} r={22} fill={WATER} opacity={0.9} /><Glyph k="H2O" x={x + 50} y={y + 50} u={10} rot={(i * 40 + j * 70) % 360} /></g>);
	}
	return <>{out}</>;
};
export const SceneHydrate: React.FC = () => {
	const f = useCurrentFrame();
	const cm = plateMap(CRU_B, 90, 290, 480);
	const fx = 720, fy = 340, fs = 72;
	const dotX = fx + richW([{t: 'CuSO_4'}], fs) + richW([{t: '·'}], fs) / 2;
	const fiveX = fx + richW([{t: "CuSO_4·"}], fs); void fiveX;
	const dimRest = prog(f, K8.treat, 12) * (1 - prog(f, K8.whole, 12));
	const keep = prog(f, K8.whole, 12);
	const ra = [{t: 'H_2O = '}, {t: '2 × 1.0 + 16.0', c: PURE}, {t: ' = 18.0'}];
	const rb = [{t: '5 H_2O = '}, {t: '5 × 18.0', c: PURE}, {t: ' = 90.0'}];
	const rc = [{t: 'Mr = '}, {t: '63.5 + 32.1 + 4 × 16.0 + 90.0', c: PURE}, {t: ' = 249.6'}];
	const rd = [{t: '% H_2O = '}, {t: '90.0 ÷ 249.6', c: PURE}, {t: ' × 100 = '}];
	return (
		<SVG>
			<Heading text="Hydrates: water inside the crystal" at={0} />
			<TaskStrip text="find the percentage by mass of water in CuSO_4·5H_2O" />
			<Givens1 text="Cu 63.5 | S 32.1 | O 16.0 | H 1.0" x={1170} w={654} size={33} />
			<Plate p={CRU_B} x={90} y={290} h={480} />
			<ViewFrame id="v7hy" cx={470} cy={470} r={140} at={K8.crys - 20} src={[cm.X(512), cm.Y(250)]}>
				<LatticeBits cx={470} cy={470} />
			</ViewFrame>
			<Write x={400} y={656} text="water built into" at={K8.crys} size={40} color={WATER_INK} />
			<Write x={400} y={702} text="the crystal" at={K8.crys + 12} size={40} color={WATER_INK} />
			{/* the formula; the 5H2O group stays bright while the rest dims */}
			<Rich x={fx} y={fy} segs={[{t: 'CuSO_4', c: dimRest > 0.5 ? '#8a8478' : INK}, {t: '·'}, {t: '5H_2O', c: WATER_INK}]} size={fs} />
			<PenArrow a={[dotX + 40, fy + 90]} b={[dotX + 2, fy + 10]} at={K8.five} out={K8.treat} color={INK} bend={0.2} />
			<Write x={1000} y={490} text="the dot means: plus 5 waters" at={K8.five} out={K8.whole} size={40} color={INK} />
			<Chip x={fx} y={380} segs={[{t: '5H_2O read as one water'}]} at={K8.treat} out={K8.whole} size={36} color={RED} strike={K8.treat + 24} />
			<Write x={1260} y={420} text="five waters, not one" at={K8.treat + 30} out={K8.whole} size={42} color={RED} />
			{/* for every copper sulfate unit, five waters (shown until the working starts) */}
			<Fade at={-1000} out={K8.each - 10}>
				<circle cx={860} cy={640} r={34} fill={EL.Cu} stroke={INK} strokeWidth={3} />
				<g>{[0, 1, 2, 3].map(k => <circle key={k} cx={960 + Math.cos(k * 1.57 + 0.78) * 30} cy={640 + Math.sin(k * 1.57 + 0.78) * 30} r={15} fill={EL.O} stroke={INK} strokeWidth={2} />)}<circle cx={960} cy={640} r={22} fill={EL.S} stroke={INK} strokeWidth={2} /></g>
				<Sx x={910} y={730} text="one CuSO_4 unit" size={34} color={INK} anchor="middle" weight={800} at={-1000} />
				<Sx x={1050} y={658} text="+" size={60} color={INK} anchor="middle" weight={800} at={-1000} />
				{[0, 1, 2, 3, 4].map(k => <g key={k} opacity={prog(f, k * 4, 8)}><circle cx={1140 + k * 120} cy={640} r={46} fill={WATER} stroke={WATER_INK} strokeWidth={3} /><Glyph k="H2O" x={1140 + k * 120} y={640} u={20} /></g>)}
				<Sx x={1380} y={730} text="five H_2O in the crystal" size={34} color={WATER_INK} anchor="middle" weight={800} at={-1000} />
			</Fade>
			{/* staged working */}
			<Rich x={fx} y={540} segs={ra.map((s, i) => ({...s, at: [K8.each, K8.each + 20, K8.e18][i]}))} at={K8.each} size={48} out={K8.whole} />
			<Rich x={fx} y={620} segs={rb.map((s, i) => ({...s, at: [K8.e18 + 40, K8.e18 + 50, K8.ninety][i]}))} at={K8.e18 + 40} size={48} out={K8.whole} />
			<Chip x={720} y={680} segs={[{t: '5 H_2O = 90.0'}]} at={K8.whole} size={34} color={INK} o={keep} />
			<Rich x={fx} y={540} segs={rc.map((s, i) => ({...s, at: [K8.whole + 16, K8.s63, K8.t249][i]}))} at={K8.whole + 16} size={44} out={K8.so} />
			<Chip x={1020} y={680} segs={[{t: 'Mr = 249.6'}]} at={K8.so} size={34} color={INK} />
			<Rich x={fx} y={640} segs={rd.map((s, i) => ({...s, at: [K8.so, K8.so + 20, K8.so + 60][i]}))} at={K8.so} size={52} />
			<Framed x={fx + richW(rd, 52)} y={640} segs={[{t: '36.1%', c: GREEN_T}]} at={K8.t36} size={52} />
			<Fade at={CU_AT[0] - 6}><MassBar F={F_CUSO4} x={fx} y={760} w={760} at={CU_AT} sel={{H2O: K8.t36 - 20}} /></Fade>
			{void K8.formula}{void K8.dot}{void K8.crys}{void DrawPath}
		</SVG>
	);
};

// ---------- 9. you can see that percentage ----------
const K9 = cues(sc('hydrate-heating'), {measure: 'can measure', heat: 'Heat the blue', steam: 'driven off as steam', powder: 'white powder', all: 'If all the water', falls: 'mass falls by', t36: 'thirty-six', so: 'So two point', lose: 'would lose', leaving: 'leaving about', last: 'Last time', here: "it's the measurement"});
export const SceneHeating: React.FC = () => {
	const f = useCurrentFrame();
	const u = clamp01((f - K9.steam) / (K9.t36 + 30 - K9.steam));
	const m = 2.5 - 0.9 * u, pc = 100 - 36.1 * u;
	const cx = 210, cy = 230, ch = 600;
	const cm = plateMap(CRU_B, cx, cy, ch);
	const lit = prog(f, K9.heat, 16), white = prog(f, K9.powder - 10, 24);
	const BX = 860, BW = 760;
	const G = tileGeo(F_CUSO4, BX, BW);
	const wg = G[3];
	return (
		<SVG>
			<Heading text="You can measure that percentage" at={0} />
			<Plate p={CRU_B} x={cx} y={cy} h={ch} o={1 - lit} />
			<Plate p={CRU_L} x={cx} y={cy} h={ch} o={lit * (1 - white)} />
			<Plate p={CRU_W} x={cx} y={cy} h={ch} o={white} />
			<Steam x={cm.X(512)} y={cm.Y(200)} from={K9.heat + 20} to={K9.t36 + 30} />
			<Write x={620} y={300} text="water leaving" at={K9.steam} size={42} color={WATER_INK} />
			<PenArrow a={[620, 290]} b={[cm.X(560), cm.Y(120)]} at={K9.steam + 4} color={WATER_INK} bend={-0.2} />
			<Write x={600} y={600} text="anhydrous:" at={K9.powder} size={40} color={INK} />
			<Write x={600} y={648} text="without water" at={K9.powder + 10} size={40} color={INK} />
			<Sx x={1480} y={636} text="on the balance" size={30} color={INK} weight={700} at={-1000} />
			<Balance g={balGeo(1480, 650, 240)} text={`${m.toFixed(2)} g`} />
			<Sx x={1480} y={206} text="% of starting mass" size={30} color={INK} weight={700} at={-1000} />
			<Readout x={1480} y={216} w={320} text={`${pc.toFixed(1)}%`} size={52} color={AMB_INK} frame={AMB} anchor="middle" />
			<MassBar F={F_CUSO4} x={BX} y={380} w={BW} h={90} lift={u} />
			<Sx x={BX} y={510} text="CuSO_4·5H_2O" size={34} color={INK} weight={800} at={-1000} />
			<Bracket a={[wg.x, 364]} b={[wg.x + wg.w, 364]} at={K9.falls} color={AMB} depth={-16} />
			<Write x={wg.x - 20} y={330} text="36.1% gone" at={K9.falls + 6} size={42} color={AMB_INK} />
			<Rich x={BX} y={620} segs={[{t: 'water lost: 36.1% of 2.50 g ≈ 0.90 g'}]} size={44} at={K9.lose} />
			<Rich x={BX} y={720} segs={[{t: 'left ≈ '}]} size={52} at={K9.leaving} />
			<Framed x={BX + richW([{t: 'left ≈ '}], 52)} y={720} segs={[{t: '1.60 g', c: GREEN_T}]} at={K9.leaving + 10} size={52} />
			<g opacity={prog(f, K9.last, 12)}>
				<rect x={BX} y={786} width={40} height={50} fill="#fbe8ee" stroke={ROSE} strokeWidth={4} />
				<path d={`M${BX},${806} l20,-20 M${BX},${826} l40,-40 M${BX + 20},${836} l20,-20`} stroke={ROSE} strokeWidth={5} />
			</g>
			<Write x={BX + 60} y={826} text="last video: loss = error" at={K9.last} size={40} color={ROSE} />
			<Write x={BX + 60} y={900} text="here: loss = the measurement" at={K9.here} size={40} color={AMB_INK} />
			{void K9.measure}{void K9.all}{void K9.so}{void Chip}
		</SVG>
	);
};

// ---------- 10. one line to remember ----------
const K10 = cues(sc('memory-line'), {count: 'Count every atom,', then: "then it's part", whole: 'whole.', second: 'second group', hydrate: "hydrate's waters", mass: 'formula mass'});
export const SceneMemoryLine: React.FC = () => {
	const bars = [{F: F_CO2, t: 'CO_2', el: 'O', at: 150}, {F: F_NH4NO3, t: 'NH_4NO_3', el: 'N', at: 200}, {F: F_CUSO4, t: 'CuSO_4·5H_2O', el: 'H2O', at: 250}];
	const nx = 110 + richW([{t: 'NH_4'}], 40) + richW([{t: 'N'}], 40) / 2;
	const fivex = 110 + richW([{t: 'CuSO_4·'}], 40) + richW([{t: '5'}], 40) / 2;
	const cm = plateMap(CRU_B, 0, 0, 380);
	return (
		<SVG>
			<Heading text="One line to remember" at={0} />
			<rect x={110} y={210} width={1710} height={240} rx={22} fill="#fffdf8" stroke={PURE} strokeWidth={5} />
			<Sx x={140} y={252} text="memory aid" size={30} color={INK} hand at={-1000} />
			<Write x={150} y={334} text="Count every atom," at={K10.count} size={60} color={AMB_INK} />
			<Write x={150} y={416} text="then it's part over whole." at={K10.then} size={60} color={PURE} />
			{bars.map((b, i) => (
				<g key={b.t}>
					<Rich x={110} y={580 + i * 120} segs={[{t: b.t}]} size={40} />
					<MassBar F={b.F} x={480} y={540 + i * 120} w={620} h={60} size={28} sel={{[b.el]: b.at}} />
				</g>
			))}
			<PenRing cx={nx} cy={688} rx={22} ry={30} at={K10.second} color={AMB} seed={4} />
			<PenRing cx={fivex} cy={808} rx={20} ry={30} at={K10.hydrate} color={AMB} seed={7} />
			<Plate p={CRU_B} x={1560} y={500} h={380} />
			{void K10.whole}{void K10.mass}{void cm}
		</SVG>
	);
};
