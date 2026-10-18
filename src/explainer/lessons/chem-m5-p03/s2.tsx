import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {cues} from '../../cues';
import {RulesMini} from '../chem-m5-c13/parts';
import {OneWayLine} from '../chem-m5-p01/parts';
import {AMBER, AMBER_INK, Arrow, BigWell, Card, Chip, DBottle, Drop, Fade, Fills, INK, INK_SOFT, IonLabels, MATRIX, Overlay, Pic, Plate, PredMarks, PREDICT, Ring, RunBracket, Sx, TEAL, Tick, Well, dbW, matrixCells, picW, plateBox, smooth, wellR, wellXY} from './parts';
import type {Cell} from './parts';
import {CAT_INK, HAZ, Heading, PPT_Y_INK, sc} from './common';
import {AGCL, PBI2, PIPETTE} from './assets';
import {G} from './s1';

const RZ = 1180;

// ---------- 5. Expected results ----------
const E = 'expected-results';
const K5 = cues(sc(E), {here: "Here's what to expect", nagsag: 'against NAGSAG', sodium: 'The sodium row', carbonate: 'The carbonate column', silvers: "silver's is pale", silver: 'Silver gives a solid', agcl: 'white silver chloride', agi: 'pale yellow silver iodide', lead: 'lead gives bright', bariumS: 'Barium and lead give', calcium: 'calcium and silver sulfate', faint: 'only a faint cloud', hydroxide: 'with hydroxide', brown: 'a brown solid', barium: 'barium stays clear'});
export const SceneExpected: React.FC = () => {
	// when each cell blooms, sentence by sentence (rows Na, Ca, Ba, Pb, Ag; columns Cl, I, SO4, CO3, OH)
	const at = (r: number, c: number): number => {
		if (r === 0) return K5.sodium + c * 4;
		if (c === 3) return r === 4 ? K5.silvers : K5.carbonate + r * 6;
		if (c === 0 || c === 1) {
			if (r === 4) return c === 0 ? K5.agcl : K5.agi;
			if (r === 3) return c === 1 ? K5.lead : K5.lead + 30;
			return K5.silver + r * 4 + c * 2;
		}
		if (c === 2) return r === 2 || r === 3 ? K5.bariumS + r * 4 : K5.calcium + r * 4;
		return r === 4 ? K5.brown : r === 2 ? K5.barium : K5.hydroxide + r * 6;
	};
	const pw = picW(AGCL, 250);
	return (
		<>
			<Heading text="Expected results (check each against NAGSAG)" at={4} size={54} />
			<Overlay>
				<Plate0 />
				<Fills g={G} cells={matrixCells(at)} />
				<RulesMini x={RZ} y={210} size={24} at={K5.nagsag} hi={[
					{id: 'G', at: K5.sodium, out: K5.carbonate}, {id: 'Ins', at: K5.carbonate, out: K5.silver},
					{id: 'Hal', at: K5.silver, out: K5.bariumS}, {id: 'S', at: K5.bariumS, out: K5.hydroxide}, {id: 'Ins', at: K5.hydroxide},
				]} />
				<RunBracket g={G} kind="row" i={0} from={0} to={4} at={K5.sodium} color={TEAL} />
				<RunBracket g={G} kind="col" i={3} from={0} to={4} at={K5.carbonate} color={TEAL} />
				<Fade at={K5.agcl}><Pic p={AGCL} x={RZ + 60} y={620} h={250} /></Fade>
				<Sx x={RZ + 60 + pw / 2} y={910} text="AgCl(s), white" size={28} anchor="middle" weight={700} at={K5.agcl} />
				<Fade at={K5.lead}><Pic p={PBI2} x={RZ + 340} y={620} h={250} /></Fade>
				<Sx x={RZ + 340 + pw / 2} y={910} text="PbI_2(s), bright yellow" size={28} color={PPT_Y_INK} anchor="middle" weight={700} at={K5.lead} />
				<Sx x={300} y={900} text="Pb^{2+} + Cl^{-}: faint, or none at this concentration" size={24} color={INK_SOFT} weight={600} at={K5.lead + 34} />
				<Chip x={300} y={930} w={800} h={58} text="expected at 0.1 mol/L; your results are the test" size={32} color={TEAL} at={K5.barium + 10} />
				{void K5.here}{void K5.faint}
			</Overlay>
		</>
	);
};
/** The working plate with its labels, already in place. */
const Plate0: React.FC<{pulse?: number}> = ({pulse}) => (
	<>
		<PlateImg pulse={pulse} />
		<IonLabels g={G} rowsAt={-100} colsAt={-100} size={30} />
	</>
);
const PlateImg: React.FC<{pulse?: number}> = ({pulse}) => <Plate g={G} pulse={pulse} />;

// ---------- 6. From results to rules ----------
const R6 = 'results-to-rules';
const K6 = cues(sc(R6), {turn: 'turn the pattern', row: 'along each row', column: 'down each column', sodiumR: 'The sodium row', soluble: 'sodium compounds are soluble', carb: 'The carbonate column', insol: 'carbonates are insoluble', write: 'Write each rule', evidence: 'the evidence', exception: 'any exception', didnt: "If you didn't", ammonium: 'ammonium or acetate', isnt: "it isn't your", note: 'Note that', ref: 'reference table'});
export const SceneRules: React.FC = () => (
	<>
		<Heading text="From results to rules" at={4} size={62} />
		<Overlay>
			<Plate0 />
			<Fills g={G} cells={matrixCells(() => -100)} />
			<RunBracket g={G} kind="row" i={0} from={0} to={4} at={K6.row} />
			<RunBracket g={G} kind="col" i={3} from={0} to={4} at={K6.column} />
			<Card x={RZ} y={200} w={640} h={540} at={K6.write - 6} stroke={TEAL} />
			<Sx x={RZ + 26} y={252} text="rule + evidence + exceptions" size={30} color={INK_SOFT} hand at={K6.write} />
			<Sx x={RZ + 26} y={310} text="Rule: sodium compounds are soluble." size={27} weight={700} at={K6.soluble} />
			<Sx x={RZ + 26} y={350} text="Evidence: Na^{+} row, 5 of 5 clear." size={27} color={TEAL} weight={600} at={K6.evidence} />
			<Sx x={RZ + 26} y={390} text="Exceptions: none seen." size={27} color={INK_SOFT} weight={600} at={K6.exception} />
			<Sx x={RZ + 26} y={470} text="Rule: carbonates are insoluble," size={27} weight={700} at={K6.insol} />
			<Sx x={RZ + 26} y={508} text="except with Na^{+}." size={27} weight={700} at={K6.insol} />
			<Sx x={RZ + 26} y={548} text="Evidence: CO_3^{2-} column, 4 of 5 solid." size={27} color={TEAL} weight={600} at={K6.evidence + 10} />
			<Sx x={RZ + 26} y={588} text="Exceptions: Na^{+} clear." size={27} color={INK_SOFT} weight={600} at={K6.exception + 10} />
			<Sx x={RZ + 26} y={690} text="general statement first, then the data" size={26} color={INK_SOFT} hand at={K6.exception + 20} />
			<Fade at={K6.ammonium}>
				<rect x={RZ} y={780} width={640} height={200} rx={20} fill="#f1ede5" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 8" />
			</Fade>
			<Sx x={RZ + 26} y={830} text="Not tested here: ammonium, acetate," size={27} color={INK_SOFT} weight={700} at={K6.ammonium} />
			<Sx x={RZ + 26} y={868} text="nitrate as a test ion." size={27} color={INK_SOFT} weight={700} at={K6.ammonium} />
			<Sx x={RZ + 26} y={912} text="Source: reference table." size={27} color={INK_SOFT} weight={600} at={K6.note} />
			<Sx x={RZ + 360} y={958} text="not my conclusion" size={32} color={HAZ} hand at={K6.isnt} />
			{void K6.turn}{void K6.sodiumR}{void K6.carb}{void K6.didnt}{void K6.ref}
		</Overlay>
	</>
);

// ---------- 7. Testing your predictions ----------
const T7 = 'test-predictions';
const K7 = cues(sc(T7), {compare: 'compare your twenty-five predictions', mismatch: 'Every mismatch', wrong: 'rule you had wrong', technique: 'technique problem', say: 'say which', barium: 'barium hydroxide', corrects: 'corrects you', exception: "it's an exception", faint: 'A faint cloud in', slightly: 'slightly soluble', third: 'third category', dirty: 'dirty well', repeat: 'repeat any doubtful', clean: 'clean one'});
const BIN = {y: 230, h: 230, w: 300};
const Bin: React.FC<{x: number; label: string; at: number; color: string}> = ({x, label, at, color}) => (
	<Fade at={at}>
		<path d={`M${x},${BIN.y} L${x + 18},${BIN.y + BIN.h} L${x + BIN.w - 18},${BIN.y + BIN.h} L${x + BIN.w},${BIN.y}`} fill="#fffdf8" stroke={color} strokeWidth={4} strokeLinejoin="round" />
		<Sx x={x + BIN.w / 2} y={BIN.y + BIN.h + 44} text={label} size={34} color={color} anchor="middle" hand at={at} />
	</Fade>
);
/** A small token flying from a well into a bin. */
const Fly: React.FC<{from: [number, number]; to: [number, number]; at: number; text: string; color: string}> = ({from, to, at, text, color}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const e = smooth(prog(f, at, 28));
	const x = from[0] + (to[0] - from[0]) * e, y = from[1] + (to[1] - from[1]) * e - Math.sin(e * Math.PI) * 80;
	return (
		<g>
			<rect x={x - 110} y={y - 26} width={220} height={46} rx={23} fill="#fffdf8" stroke={color} strokeWidth={3} />
			<Sx x={x} y={y + 8} text={text} size={26} color={color} anchor="middle" weight={700} at={-100} />
		</g>
	);
};
export const ScenePredictions: React.FC = () => {
	const f = useCurrentFrame();
	const r = wellR(G);
	const [bax, bay] = wellXY(G, 2, 4);
	const [nx, ny] = wellXY(G, 0, 0);
	const [rx, ry] = wellXY(G, 0, 6);
	const B1 = 1200, B2 = 1520;
	const matches = PREDICT.flatMap((row, i) => row.map((p, j) => ({i, j, ok: !(i === 2 && j === 4)})));
	const speck = prog(f, K7.dirty, 14);
	const scale = {x: RZ + 20, y: 640, w: 600};
	return (
		<>
			<Heading text="Test your predictions" at={4} size={62} />
			<Overlay>
				<Plate0 />
				<Fills g={G} cells={[...matrixCells(() => -100).filter(c => !(c.r === 0 && c.c === 0)), {r: 0, c: 0, kind: 'clear', at: -100, speck}]} />
				<PredMarks g={G} at={K7.compare} every={2} />
				{matches.filter(m => m.ok).map(m => {
					const [x, y] = wellXY(G, m.i, m.j);
					return <Tick key={m.i + '-' + m.j} x={x + r * 0.95} y={y + r * 0.9} at={K7.mismatch + (m.i * 5 + m.j) * 2} s={r * 0.5} />;
				})}
				<Sx x={300} y={900} text="pen: your prediction (● ppt, – none, sl slight)" size={26} color={AMBER_INK} hand at={K7.compare + 10} />
				<Ring cx={bax} cy={bay} rx={r * 1.5} ry={r * 1.5} at={K7.barium} color={AMBER} seed={6} />
				<Bin x={B1} label="rule wrong" at={K7.wrong} color={AMBER_INK} />
				<Bin x={B2} label="technique" at={K7.technique} color="#1f6fb2" />
				<Sx x={RZ + 20} y={200} text="every mismatch: say which" size={30} color={INK_SOFT} hand at={K7.say} />
				<Fly from={[bax, bay]} to={[B1 + BIN.w / 2, BIN.y + 150]} at={K7.corrects} text="Ba(OH)_2: clear" color={AMBER_INK} />
				<Sx x={B1} y={BIN.y + BIN.h + 86} text="exception: Ba(OH)_2 soluble" size={26} color={AMBER_INK} weight={700} at={K7.exception} />
				<Fly from={[nx, ny]} to={[B2 + BIN.w / 2, BIN.y + 150]} at={K7.dirty + 20} text="dirty well" color="#1f6fb2" />
				{/* the third category */}
				<Fade at={K7.slightly}>
					<rect x={scale.x} y={scale.y} width={scale.w} height={44} rx={22} fill="url(#p03-sol)" stroke={INK_SOFT} strokeWidth={2} />
					<defs><linearGradient id="p03-sol"><stop offset="0%" stopColor="#dfeaf3" /><stop offset="100%" stopColor="#f7f6f2" /></linearGradient></defs>
					<Sx x={scale.x} y={scale.y + 84} text="soluble" size={28} color={INK} hand at={K7.slightly} />
					<Sx x={scale.x + scale.w / 2} y={scale.y + 84} text="slightly soluble" size={30} color={TEAL} anchor="middle" hand at={K7.slightly + 4} />
					<Sx x={scale.x + scale.w} y={scale.y + 84} text="insoluble" size={28} color={INK} anchor="end" hand at={K7.slightly} />
					<path d={`M${scale.x + scale.w / 2},${scale.y - 6} L${scale.x + scale.w / 2 - 14},${scale.y - 30} L${scale.x + scale.w / 2 + 14},${scale.y - 30} Z`} fill={TEAL} />
				</Fade>
				<Sx x={scale.x} y={scale.y + 130} text="Ca^{2+} + SO_4^{2-}: faint cloud, a real result" size={28} color={TEAL} weight={600} at={K7.third} />
				<Ring cx={wellXY(G, 1, 2)[0]} cy={wellXY(G, 1, 2)[1]} rx={r * 1.5} ry={r * 1.5} at={K7.faint} out={K7.dirty} color={TEAL} seed={7} />
				{/* repeat the doubtful cell in a clean well */}
				<Well cx={rx} cy={ry} r={r} kind="clear" p={prog(f, K7.repeat + 10, 20)} />
				<Tick x={rx + r * 1.1} y={ry - r * 0.4} at={K7.clean} s={r * 0.8} />
				<Sx x={rx} y={ry - r * 1.4} text="repeat" size={26} color="#1f6fb2" anchor="middle" hand at={K7.repeat} />
				<Arrow x1={nx + r * 1.2} y1={ny - r * 1.3} x2={rx - r * 1.2} y2={ry - r * 1.3} at={K7.repeat} color="#1f6fb2" width={4} />
				{void MATRIX}{void K7.wrong}
			</Overlay>
		</>
	);
};

// ---------- 8. What's left in the mixture ----------
const L8 = 'test-the-liquid';
const K8 = cues(sc(L8), {syllabus: 'The syllabus also', test: 'you can test', mix: 'Mix lead nitrate', settle: 'let the yellow', take: 'take some clear', addKI: 'Add a drop of potassium', more: 'more yellow solid', lead: 'lead ions', excess: 'lead nitrate was in excess', addPb: 'Add a drop of lead', moreY: 'more yellow means', iodide: 'iodide was left', spect: 'The spectators', either: 'either way'});
const TB = {x: 110, y: 300, h: 540};
export const SceneLiquid: React.FC = () => {
	const f = useCurrentFrame();
	const tw = picW(PBI2, TB.h);
	const pk = 240 / PIPETTE.box[3];
	const tip: [number, number] = [TB.x + tw / 2 + 4, TB.y + TB.h * 0.27];
	const A = {x: 820, y: 660}, Bw = {x: 1180, y: 660};
	const bh = 210, bw = dbW(bh);
	return (
		<>
			<Heading text="What's left in the mixture? Test the liquid." at={4} size={58} />
			<Overlay>
				<OneWayLine x={600} y={250} left="Pb^{2+}(aq) + 2I^{-}(aq)" right="PbI_2(s)" size={42} at={K8.mix} />
				<Fade at={K8.mix - 6}><Pic p={PBI2} x={TB.x} y={TB.y} h={TB.h} /></Fade>
				<Sx x={TB.x + tw / 2} y={TB.y + TB.h + 44} text="Pb(NO_3)_2 + KI, settled" size={28} anchor="middle" weight={700} at={K8.settle} />
				<Sx x={TB.x + tw + 16} y={TB.y + TB.h * 0.2} text="clear liquid" size={30} color="#2f6f9e" hand at={K8.take} />
				<Fade at={K8.take} out={K8.addKI + 40}>
					<g transform={`translate(${tip[0]},${tip[1]}) scale(${pk}) translate(${-156},${-1811})`}>
						<image href={staticFile(PIPETTE.src)} x={0} y={0} width={2000} height={2000} />
					</g>
				</Fade>
				{/* into two clean test wells */}
				<Arrow x1={TB.x + tw + 30} y1={TB.y + TB.h * 0.38} x2={A.x - 80} y2={A.y - 30} at={K8.take + 20} color="#2f6f9e" width={4} />
				<Arrow x1={TB.x + tw + 30} y1={TB.y + TB.h * 0.34} x2={Bw.x - 100} y2={Bw.y - 96} at={K8.take + 26} color="#2f6f9e" width={4} />
				<BigWell cx={A.x} cy={A.y} r={70} kind="yellow" p={prog(f, K8.more, 30)} at={K8.take + 20} label="test A" />
				<g opacity={1 - 0.4 * prog(f, K8.iodide, 12)}><BigWell cx={Bw.x} cy={Bw.y} r={70} kind="yellow" p={prog(f, K8.iodide, 30)} at={K8.take + 26} label="test B" /></g>
				<Fade at={K8.iodide}><rect x={Bw.x - 112} y={Bw.y - 112} width={224} height={224} rx={26} fill="none" stroke="#6a3fa3" strokeWidth={3} strokeDasharray="10 8" /></Fade>
				<DBottle x={A.x - bw / 2} y={A.y - 370} h={bh} formula="KI" at={K8.addKI - 6} out={K8.addPb} band="#8a5cc2" />
				<Drop x={A.x} y0={A.y - 140} y1={A.y} at={K8.addKI + 6} />
				<DBottle x={Bw.x - bw / 2} y={Bw.y - 370} h={bh} formula="Pb(NO_3)_2" at={K8.addPb - 6} band="#e2a63b" />
				<Drop x={Bw.x} y0={Bw.y - 140} y1={Bw.y} at={K8.addPb + 6} />
				<Sx x={A.x - 130} y={A.y + 176} text="if more PbI_2: Pb^{2+} was left over," size={28} color={CAT_INK} weight={700} at={K8.lead} />
				<Sx x={A.x - 130} y={A.y + 212} text="so Pb(NO_3)_2 in excess" size={28} color={CAT_INK} weight={700} at={K8.excess} />
				<Sx x={Bw.x - 60} y={Bw.y + 176} text="the other case: I^{-} left over," size={28} color="#6a3fa3" weight={700} at={K8.iodide} />
				<Sx x={Bw.x - 60} y={Bw.y + 212} text="so KI in excess" size={28} color="#6a3fa3" weight={700} at={K8.iodide + 6} />
				<Chip x={1380} y={420} w={440} h={56} text="at most one test goes cloudy" size={30} color={TEAL} at={K8.iodide + 20} />
				<Card x={1380} y={510} w={440} h={210} at={K8.spect} stroke={TEAL} />
				<Sx x={1404} y={560} text="dissolved:" size={32} color={TEAL} hand at={K8.spect} />
				<Sx x={1404} y={610} text="K^{+}, NO_3^{-} (spectators)" size={28} color={INK} weight={700} at={K8.spect + 6} />
				<Sx x={1404} y={656} text="+ the ion in excess" size={28} color={AMBER_INK} weight={700} at={K8.either} />
				{void K8.syllabus}{void K8.test}{void K8.moreY}{void INK_SOFT}{void plateBox}{void ({} as Cell)}
			</Overlay>
		</>
	);
};
