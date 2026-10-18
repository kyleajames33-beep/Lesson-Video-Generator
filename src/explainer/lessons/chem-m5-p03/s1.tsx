import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {RulesMini, SwapCross} from '../chem-m5-c13/parts';
import {AMBER, AMBER_INK, Arrow, BigWell, Band, Card, DBottle, Drop, Fade, Fills, INK, INK_SOFT, IonLabels, MATRIX, Overlay, PEN, PicH, Plate, Ring, Sx, TEAL, Tick, Well, dbW, matrixCells, mw, plateBox, smooth, wellR, wellXY, AN_SALT, CAT_SALT} from './parts';
import type {Cell, PlateG} from './parts';
import {AN_INK, CAT_INK, GREEN, Heading, sc} from './common';
import {DROPPER} from './assets';

/** The working plate position for scenes 3 to 9. */
export const G: PlateG = {ox: 154, oy: 164, k: 0.55};

// ---------- 1. Hook: a grid of evidence ----------
const H = 'hook';
const K1 = cues(sc(H), {wells: 'tiny wells', five: 'Five positive ions', down: 'down the side', fiveN: 'five negative ions', across: 'across the top', drops: 'a few drops', clear: 'stay clear', cloudy: 'go cloudy', white: 'white yellow even brown', grid: 'This grid is', evidence: 'the evidence', how: 'So how do', trusted: 'can be trusted', rules: 'into rules'});
const G1: PlateG = {ox: 140, oy: 167, k: 0.6};
export const SceneHook: React.FC = () => {
	const cells: Cell[] = matrixCells((r, c) => (MATRIX[r][c] === 'clear' ? K1.clear + (r * 5 + c) * 2 : K1.cloudy + ((r * 5 + c) % 9) * 6), 26);
	const b = plateBox(G1);
	return (
		<>
			<Heading text="Where do the rules come from? Your own results." at={4} size={56} />
			<Overlay>
				<Fade at={K1.wells - 4}><Plate g={G1} /></Fade>
				<IonLabels g={G1} rowsAt={K1.five} colsAt={K1.fiveN} size={38} every={6} />
				<Sx x={b.x - 14} y={b.y + b.h + 50} text="positive ions" size={30} color={CAT_INK} anchor="end" hand at={K1.down} />
				<Sx x={wellXY(G1, 0, 6)[0]} y={b.y - 14} text="negative ions" size={30} color={AN_INK} anchor="middle" hand at={K1.across} />
				<Fills g={G1} cells={cells} />
				<Sx x={1260} y={360} text="clear" size={40} color={INK_SOFT} hand at={K1.clear} />
				<Sx x={1260} y={420} text="cloudy: white, yellow, brown" size={40} color={INK} hand at={K1.cloudy} />
				<Fade at={K1.rules - 30}><RulesMini x={1250} y={520} size={22} at={K1.rules - 30} title="solubility rules" /></Fade>
				<Arrow x1={b.x + b.w + 10} y1={620} x2={1240} y2={640} at={K1.evidence} color={TEAL} width={5} />
				<Sx x={1250} y={500} text="evidence → rules" size={36} color={TEAL} hand at={K1.evidence + 6} />
				<Sx x={b.x} y={1040} text="How do you set it up so the results can be trusted?" size={44} color={AMBER_INK} hand at={K1.trusted - 20} />
				{void K1.drops}{void K1.white}{void K1.grid}{void K1.how}
			</Overlay>
		</>
	);
};
// ---------- 2. The key design choice: partners that always dissolve ----------
const P = 'always-soluble-partners';
const K2 = cues(sc(P), {clever: 'The clever part', every: 'Every positive ion', nitrate: 'as a nitrate', sodium: 'sodium calcium barium', everyN: 'Every negative ion', saltS: 'sodium salt', chloride: 'sodium chloride', always: 'always dissolve', meet: 'two solutions meet', pair: "pair you're testing", before: 'before you start', own: 'on its own', clearC: 'It should be clear'});
const BH = 190, BX0 = 120, BDX = 160, BY1 = 220, BY2 = 580;
const CAT_SPLIT: [string, string][] = [['Na', 'NO_3'], ['Ca', '(NO_3)_2'], ['Ba', '(NO_3)_2'], ['Pb', '(NO_3)_2'], ['Ag', 'NO_3']];
const AN_SPLIT: [string, string][] = [['Na', 'Cl'], ['Na', 'I'], ['Na_2', 'SO_4'], ['Na_2', 'CO_3'], ['Na', 'OH']];
export const SceneAlways: React.FC = () => {
	const f = useCurrentFrame();
	const bw = dbW(BH);
	const fs = 26;
	const ly = (y: number) => y + BH + fs + 8;
	const band = (cx: number, y: number, parts: [string, string], which: 0 | 1, at: number) => {
		const tot = mw(parts[0] + parts[1], fs), w0 = mw(parts[0], fs), w1 = mw(parts[1], fs);
		const x0 = cx - tot / 2;
		return which === 1 ? <Band x={x0 + w0 - 2} y={ly(y) - fs * 0.92} w={w1 + 4} h={fs * 1.3} at={at} /> : <Band x={x0 - 2} y={ly(y) - fs * 0.92} w={w0 + 4} h={fs * 1.3} at={at} />;
	};
	return (
		<>
			<Heading text="Partners that always dissolve" at={4} size={62} />
			<Overlay>
				{CAT_SALT.map((s, i) => {
					const x = BX0 + i * BDX, cx = x + bw / 2;
					return (
						<g key={'c' + i}>
							{band(cx, BY1, CAT_SPLIT[i], 1, K2.nitrate + i * 4)}
							<DBottle x={x} y={BY1} h={BH} formula={s} at={K2.every + i * 5} band="#e2a63b" size={fs} />
						</g>
					);
				})}
				{AN_SALT.map((s, i) => {
					const x = BX0 + i * BDX, cx = x + bw / 2;
					return (
						<g key={'a' + i}>
							{band(cx, BY2, AN_SPLIT[i], 0, K2.saltS + i * 4)}
							<DBottle x={x} y={BY2} h={BH} formula={s} at={K2.everyN + i * 5} band="#8a5cc2" size={fs} />
						</g>
					);
				})}
				<Sx x={BX0} y={BY1 - 20} text="positive ions, as nitrates" size={32} color={CAT_INK} hand at={K2.every} />
				<Sx x={BX0} y={BY2 - 20} text="negative ions, as sodium salts" size={32} color={AN_INK} hand at={K2.everyN} />
				<Sx x={BX0 + 4 * BDX + bw + 30} y={BY1 + 110} text="all 0.1 mol/L" size={30} color={INK_SOFT} hand at={K2.every + 30} />
				{/* stock check: each solution alone in a clean well stays clear */}
				{[0, 1].map(row => [0, 1, 2, 3, 4].map(i => {
					const cx = BX0 + i * BDX + bw / 2, cy = (row ? BY2 : BY1) + BH + 76;
					const at = K2.own + (row * 5 + i) * 4;
					return (
						<g key={row + '-' + i}>
							<Fade at={at}>
								<circle cx={cx} cy={cy} r={24} fill="#1f1f22" stroke="#c9d3da" strokeWidth={4} />
							</Fade>
							<Well cx={cx} cy={cy} r={21} kind="clear" p={prog(f, at + 4, 16)} />
							<Tick x={cx + 34} y={cy - 8} at={at + 14} s={24} />
						</g>
					);
				}))}
				<Sx x={BX0} y={1030} text="stock check: each solution alone is clear" size={34} color={TEAL} hand at={K2.clearC} />
				{/* right: why this works */}
				<RulesMini x={1010} y={210} size={24} at={K2.always - 20} hi={[{id: 'N', at: K2.always}, {id: 'G', at: K2.always + 6}]} />
				<Sx x={1010} y={600} text="N and G of NAGSAG: always soluble" size={34} color={TEAL} hand at={K2.always + 4} />
				<SwapCross x={1010} xr={1400} y1={720} y2={830} size={36} left={[['Pb^{2+}', 'NO_3^{-}'], ['Na^{+}', 'I^{-}']]} leftAt={[K2.meet, K2.meet + 6]} swap={K2.meet + 20}
					verdicts={[{kind: 'ok', at: K2.pair - 6, label: 'NaNO_3: soluble (spectators)'}, {kind: 'ppt', at: K2.pair, label: 'the only possible solid'}]} />
				{void K2.clever}{void K2.sodium}{void K2.chloride}{void K2.before}{void GREEN}{void smooth}{void AMBER}
			</Overlay>
		</>
	);
};

// ---------- 3. The method: predict first, then mix ----------
const M = 'predict-method';
const K3 = cues(sc(M), {draw: 'Draw a five', predict: 'predict every cell', rules: 'using the rules', turns: 'turns your results', put: 'Put a clear well', add: 'Add three drops', row: 'along each row', column: 'down each column', tip: 'Keep the dropper tip', contam: "don't contaminate", look: 'look at each well', black: 'black background', thin: 'thin white cloud', hard: 'hard to see'});
/** The book grid under the plate, its cells centred on the wells; predictions pen-marked in each cell. */
const BookGrid: React.FC<{g: PlateG; at: number; predAt: number; out?: number}> = ({g, at, predAt, out}) => {
	const f = useCurrentFrame();
	const cs = 153 * g.k;
	const [x0, y0] = wellXY(g, 0, 0);
	const L = x0 - cs / 2, T = y0 - cs / 2;
	const preds = [['–', '–', '–', '–', '–'], ['–', '–', 'sl', 'ppt', 'sl'], ['–', '–', 'ppt', 'ppt', 'ppt'], ['sl', 'ppt', 'ppt', 'ppt', 'ppt'], ['ppt', 'ppt', 'sl', 'ppt', 'ppt']];
	return (
		<Fade at={at} out={out}>
			<rect x={L - 110} y={T - 70} width={cs * 5 + 160} height={cs * 5 + 120} rx={10} fill="#fffef9" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
			{Array.from({length: 6}, (_, i) => <path key={'h' + i} d={`M${L},${T + i * cs} L${L + cs * 5},${T + i * cs}`} stroke="#9fb6c6" strokeWidth={2} opacity={prog(f, at + i * 3, 10)} />)}
			{Array.from({length: 6}, (_, i) => <path key={'v' + i} d={`M${L + i * cs},${T} L${L + i * cs},${T + cs * 5}`} stroke="#9fb6c6" strokeWidth={2} opacity={prog(f, at + i * 3, 10)} />)}
			{preds.flatMap((row, r) => row.map((t, c) => <Sx key={r + '-' + c} x={L + (c + 0.5) * cs} y={T + (r + 0.5) * cs + 10} text={t} size={30} color={PEN} anchor="middle" hand at={predAt + (r * 5 + c) * 2} />))}
		</Fade>
	);
};
/** Inset: a dropper tip above a well (tick) or touching the liquid (cross). Side view, coded well. */
const TipInset: React.FC<{x: number; y: number; touch: boolean; at: number}> = ({x, y, touch, at}) => {
	const dh = 200, dw = (302 / 1344) * dh;
	const wy = y + 250;
	return (
		<Fade at={at}>
			<rect x={x} y={y} width={270} height={330} rx={18} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
			<path d={`M${x + 70},${wy} L${x + 70},${wy + 50} Q${x + 70},${wy + 64} ${x + 84},${wy + 64} L${x + 186},${wy + 64} Q${x + 200},${wy + 64} ${x + 200},${wy + 50} L${x + 200},${wy}`} fill="#eef5fa" stroke={INK} strokeWidth={3.5} />
			<rect x={x + 73} y={wy + 24} width={124} height={38} rx={8} fill="#cfe6f5" />
			<PicH p={DROPPER} x={x + 135 - dw / 2} y={(touch ? wy + 34 : wy - 40) - dh} h={dh} />
			{touch ? null : <path d={`M${x + 150},${wy - 36} L${x + 150},${wy + 18}`} stroke={TEAL} strokeWidth={3} strokeDasharray="5 5" />}
			{touch ? <g><path d={`M${x + 20},${y + 20} L${x + 70},${y + 70} M${x + 70},${y + 20} L${x + 20},${y + 70}`} stroke="#c4432f" strokeWidth={7} strokeLinecap="round" /></g> : <Tick x={x + 45} y={y + 45} at={at + 6} s={40} />}
		</Fade>
	);
};
export const SceneMethod: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K3.put, 26));
	const black = 0.5 * prog(f, K3.black, 36);
	const rowAt = (r: number) => K3.row + r * 12;
	const colAt = (c: number) => K3.column + c * 12;
	const clearCells: Cell[] = [0, 1, 2, 3, 4].flatMap(r => [0, 1, 2, 3, 4].map(c => ({r, c, kind: 'clear' as const, at: rowAt(r) + c * 2, dur: 14})));
	const resCells = matrixCells((r, c) => colAt(c) + r * 2, 20);
	const [bx, by] = wellXY(G, 0, 0);
	return (
		<>
			<Heading text="Predict first, then mix" at={4} size={62} />
			<Overlay>
				<BookGrid g={G} at={K3.draw} predAt={K3.predict} out={K3.put + 26} />
				<Sx x={110} y={wellXY(G, 2, 0)[1]} text="your book:" size={30} color={PEN} hand at={K3.predict} out={K3.put} />
				<Sx x={110} y={wellXY(G, 2, 0)[1] + 40} text="predictions" size={30} color={PEN} hand at={K3.predict} out={K3.put} />
				<g opacity={slide} transform={`translate(${(1 - slide) * 700},0)`}>
					<Plate g={G} black={black} />
				</g>
				<IonLabels g={G} rowsAt={K3.draw + 10} colsAt={K3.draw + 16} size={30} every={2} />
				<Fills g={G} cells={clearCells} />
				<Fills g={G} cells={resCells} />
				<Drop x={bx} y0={by - 140} y1={by} at={rowAt(0) - 10} n={3} every={5} />
				<Sx x={300} y={900} text="3 drops + 3 drops" size={32} color={INK_SOFT} hand at={K3.add} />
				<Sx x={1200} y={230} text="Predicting first makes it a test." size={36} color={TEAL} hand at={K3.turns} />
				<TipInset x={1200} y={290} touch={false} at={K3.tip} />
				<TipInset x={1520} y={290} touch at={K3.tip + 10} />
				<Sx x={1335} y={660} text="tip out of the well" size={30} color={TEAL} anchor="middle" hand at={K3.tip + 6} />
				<Sx x={1655} y={660} text="contaminates the bottle" size={30} color="#c4432f" anchor="middle" hand at={K3.contam} />
				<BigWell cx={1335} cy={800} r={56} kind="faint" p={1} bg="white" at={K3.black} label="white on white: hard to see" labelColor="#c4432f" />
				<BigWell cx={1655} cy={800} r={56} kind="faint" p={1} bg="black" at={K3.black + 10} label="white on black: clear" labelColor={TEAL} />
				<Sx x={1200} y={714} text="a thin white cloud (Ca^{2+} + SO_4^{2-})" size={28} color={INK_SOFT} hand at={K3.thin} />
				<Sx x={300} y={1000} text={"record: ppt or not, colour, heavy or faint.  Write \"no precipitate\", not \"no reaction\"."} size={28} color={INK} hand at={K3.hard + 10} />
				<Ring cx={wellXY(G, 1, 2)[0]} cy={wellXY(G, 1, 2)[1]} rx={wellR(G) * 1.5} ry={wellR(G) * 1.5} at={K3.thin} color={AMBER} seed={4} />
				{void K3.rules}{void K3.look}{void K3.hard}
			</Overlay>
		</>
	);
};

// ---------- 4. The variables ----------
const V = 'variables';
const K4 = cues(sc(V), {ind: 'independent variable', pair: 'pair of ions', dep: 'dependent variable', see: 'what you see', ppt: 'a precipitate or not', colour: 'its colour', heavy: 'heavy solid', faint: 'faint cloud', controlled: 'Keep these controlled', conc: 'same concentration', nought: 'nought point one', three: 'three drops of each', temp: 'same temperature', time: 'same time before', matters: 'Concentration matters most', just: 'only just dissolve', much: 'how much is there'});
export const SceneVariables: React.FC = () => {
	const CX = 1180;
	const ring = (r: number, c: number, at: number, out: number, seed: number) => {
		const [x, y] = wellXY(G, r, c);
		return <Ring cx={x} cy={y} rx={wellR(G) * 1.45} ry={wellR(G) * 1.45} at={at} out={out} color={AMBER} seed={seed} />;
	};
	return (
		<>
			<Heading text="The variables" at={4} size={62} />
			<Overlay>
				<Plate g={G} />
				<IonLabels g={G} rowsAt={-100} colsAt={-100} size={30} />
				<Fills g={G} cells={matrixCells(() => -100)} />
				{ring(3, 1, K4.pair, K4.dep, 3)}
				{ring(2, 2, K4.heavy, K4.controlled, 4)}
				<Card x={CX} y={200} w={640} h={590} at={K4.ind} />
				<Sx x={CX + 26} y={262} text="Independent (what you change)" size={32} color="#1f6fb2" hand at={K4.ind} />
				<Sx x={CX + 26} y={306} text="the cation and anion pair" size={28} weight={600} at={K4.pair} />
				<Sx x={CX + 26} y={392} text="Dependent (what you observe)" size={32} color="#a31f2a" hand at={K4.dep} />
				<Sx x={CX + 26} y={436} text="ppt or not; colour;" size={28} weight={600} at={K4.ppt} />
				<Sx x={CX + 26} y={476} text="heavy solid or faint cloud" size={28} weight={600} at={K4.heavy} />
				<Sx x={CX + 26} y={562} text="Controlled (kept the same)" size={32} color={TEAL} hand at={K4.controlled} />
				<Sx x={CX + 26} y={606} text="• 0.1 mol/L every stock" size={28} weight={600} at={K4.nought} />
				<Sx x={CX + 26} y={646} text="• 3 drops + 3 drops" size={28} weight={600} at={K4.three} />
				<Sx x={CX + 26} y={686} text="• same temperature" size={28} weight={600} at={K4.temp} />
				<Sx x={CX + 26} y={726} text="• same time before recording" size={28} weight={600} at={K4.time} />
				<Sx x={CX} y={840} text="concentration matters most" size={34} color={AMBER_INK} hand at={K4.matters} />
				<BigWell cx={1300} cy={940} r={42} kind="clear" p={1} at={K4.just} label="0.01 mol/L stocks" />
				<BigWell cx={1560} cy={940} r={42} kind="white" p={1} at={K4.just + 10} label="0.1 mol/L stocks" />
				<Sx x={1650} y={900} text="Ca^{2+} + SO_4^{2-}" size={24} color={INK_SOFT} weight={700} at={K4.just + 10} />
				<Sx x={1650} y={940} text="same pair, same drops," size={26} color={INK_SOFT} hand at={K4.much} />
				<Sx x={1650} y={976} text="different concentration" size={26} color={INK_SOFT} hand at={K4.much} />
				{void K4.see}{void K4.colour}{void K4.conc}{void K4.faint}{void INK}
			</Overlay>
		</>
	);
};
