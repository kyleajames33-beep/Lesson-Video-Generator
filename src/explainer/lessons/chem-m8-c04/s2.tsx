// M8 C04 scenes 7 to 13: AAS in cause order (spray, the atomiser inset, the hollow cathode lamp zoom, the beam crossing
// the flame, the electron hop, the beam thinning and the reading), why AAS is specific (other atoms let the light pass;
// flame test emission against AAS absorption; atoms, not ions; the graphite furnace; one lamp per element; the matrix),
// the lead calibration (five standards plot one by one; the line of best fit; inside the standards), the worked example
// (out of range, so dilute; read across then down; multiply back), which method (three columns) and the memory aid.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Mark, prog} from '../../kit';
import {AAS, AAS_A, BEAKER, BOTTLE2, COLM, FLAME_CU, FLASK, FLASK_A, FURN, FURN_A, Heading, LAMP, LAMP_A, NB, PIP, PIP_A, UVV, sc} from './common';
import {
	AChip, AbsLadder, AtomLens, Beam, ChainPills, GapLadder, BeakerFill, CAxes, CBand, CPts, CRead, CSeg, DimG, Detector, EnergyInset, Fade, FallDrop, Framed, GCard, GOOD, GREYX, HTag, INK, INK_SOFT,
	MistakeX, NAVY, Note, OTH, P, PicV, SEL, STD, Spray, Sx, TEAL, TaskLine, UNKC, WLine, clamp01, countA, gx, gy, lerp, natPt, picWp, smooth, vis,
} from './parts';
import type {CG} from './parts';
import type {PDef} from './common';

const at3 = (p: PDef, x: number, y: number, h: number, n: [number, number]) => natPt(p, x, y, h, n[0], n[1]);

// ---------- 7. AAS: atomise, then absorb ----------
const K7 = cues(sc('aas-atomise-absorb'), {lead: 'Lead ions', col: 'colourless', trace: 'trace levels', aas: 'or AAS', sample: 'The sample', sprayed: 'sprayed', water: 'The water', evap: 'evaporates', heat: 'the heat', atoms: 'free lead atoms', atomising: 'atomising', hcl: 'A hollow', made: 'made of lead', shines: 'shines', absorb: 'Lead atoms absorb', jump: 'jump', levels: ['levels', 2], det: 'the detector', missing: 'missing'});
export const AAS7 = {x: 96, y: 250, h: 400};
export const aasPt = (n: [number, number], g = AAS7) => natPt(AAS, g.x, g.y, g.h, n[0], n[1]);
export const SceneAtomise: React.FC = () => {
	const f = useCurrentFrame();
	const G = {x: 96, y: 230, h: lerp(480, 400, smooth(prog(f, K7.sprayed - 24, 30)))};
	const [, by] = aasPt([0, AAS_A.axis], G);
	const [lx1] = aasPt([AAS_A.lampX1, 0], G);
	const [fx1] = aasPt([AAS_A.flameX1, 0], G);
	const [fcx, fcy] = aasPt(AAS_A.flame, G);
	const [nx, ny] = aasPt(AAS_A.neb, G);
	const DX = 900;
	const LZ = {x: 120, y: 770, h: 170};
	const [cupx, cupy] = at3(LAMP, LZ.x, LZ.y, LZ.h, LAMP_A.cup);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Atomic absorption spectroscopy (AAS)" at={2} size={54} />
			<PicV p={AAS} x={G.x} y={G.y} h={G.h} />
			<ChainPills x={96} y={968} items={['spray into a flame', 'free atoms', 'lead lamp shines', 'atoms absorb', 'light goes missing']} lit={[K7.sprayed, K7.atoms, K7.shines, K7.absorb, K7.missing]} at={2} />
			<Fade at={0} out={K7.sprayed}>
				{[0, 1].map(i => (
					<g key={i}>
						<PicV p={BEAKER} x={1320 + i * 200} y={250} h={190} />
						<BeakerFill x={1320 + i * 200} y={250} h={190} />
					</g>
				))}
				<AChip x={1590} y={480} text="Pb^{2+}: colourless, trace" size={32} color={UNKC} hand={false} anchor="middle" at={K7.col} />
				<Note x={1300} y={620} text="far too dilute for a colour test" size={36} color={INK} at={K7.trace - 30} />
			</Fade>
			<Spray a={[nx, ny - 20]} b={[fcx, fcy + 10]} at={K7.sprayed} />
			<HTag x={nx} y={G.y + G.h + 40} text="sample sprayed in" size={32} color={INK_SOFT} anchor="middle" at={K7.sprayed} out={K7.hcl} />
			<AtomLens cx={1470} cy={470} r={200} at={K7.sprayed} drop={K7.sprayed + 6} evap={K7.evap} split={K7.atoms - 14} beam={K7.shines + 10} absorb={K7.absorb} thin={K7.missing - 10} />
			<HTag x={1260} y={735} text="water evaporates" size={34} color="#3f7fb0" at={K7.evap} />
			<HTag x={1260} y={790} text="free lead atoms" size={38} color={INK} at={K7.atoms} />
			<HTag x={1260} y={842} text="atomising: breaking it into free atoms" size={32} color={INK_SOFT} at={K7.atomising} />
			<AbsLadder x={1690} y={380} w={170} h={230} at={K7.levels - 30} from={K7.levels - 26} period={90} />
			<HTag x={1775} y={660} text="electron jumps up" size={28} color={INK} anchor="middle" at={K7.levels} />
			<Fade at={K7.hcl - 6}>
				<PicV p={LAMP} x={LZ.x} y={LZ.y} h={LZ.h} />
				<path d={`M${LZ.x + 120},${LZ.y - 6} L${G.x + 120},${by + 40}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 8" fill="none" />
				<circle cx={cupx} cy={cupy} r={30} fill="none" stroke={SEL} strokeWidth={5} opacity={prog(f, K7.made, 10)} />
				<HTag x={LZ.x + 590} y={LZ.y + 60} text="hollow cathode lamp" size={36} color={INK} at={K7.hcl} />
				<HTag x={LZ.x + 590} y={LZ.y + 110} text="cathode made of lead" size={36} color={SEL} at={K7.made} />
				<HTag x={LZ.x + 590} y={LZ.y + 158} text="shines lead's own wavelengths" size={30} color={INK_SOFT} at={K7.shines} />
			</Fade>
			<Beam x0={lx1} x1={DX} y={by} at={K7.shines} split={fx1} thin={fr => 1 - 0.6 * prog(fr, K7.missing - 10, 24)} />
			<Detector x={DX} y={by} at={K7.det - 30} text={fr => (fr < K7.missing ? 'A' : countA(fr, K7.missing, K7.missing + 30, 0, 0.113))} />
			<HTag x={DX} y={by + 150} text="less light out = more lead" size={36} color={SEL} at={K7.missing + 10} />
			{void K7.lead}{void K7.sample}{void K7.water}{void K7.heat}{void K7.jump}{void vis}
		</svg>
	);
};

// ---------- 8. Why AAS is specific ----------
const K8 = cues(sc('aas-specific'), {other: 'Other atoms', pass: 'pass', ft: 'flame test', heated: 'heated atoms', inaas: 'In AAS', take: 'take in', so: 'So AAS', sol: 'solution', spec: 'specific', lowest: 'lowest levels', tube: 'graphite tube', flame5: ['flame', 5], costs: 'The costs', lamp: 'one lamp', subst: 'other substances', sample2: ['sample', 2]});
export const SceneSpecific: React.FC = () => {
	const f = useCurrentFrame();
	const A8 = {x: 96, y: 200, h: 240};
	const [, by] = aasPt([0, AAS_A.axis], A8);
	const [lx1] = aasPt([AAS_A.lampX1, 0], A8);
	const [fx1] = aasPt([AAS_A.flameX1, 0], A8);
	const FZ = {x: 120, y: 600, h: 190};
	const [, fby] = at3(FURN, FZ.x, FZ.y, FZ.h, [0, FURN_A.axis]);
	const [tx0] = at3(FURN, FZ.x, FZ.y, FZ.h, [FURN_A.x0, 0]);
	const [tx1] = at3(FURN, FZ.x, FZ.y, FZ.h, [FURN_A.x1, 0]);
	const pB = [K8.so, K8.costs] as const;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Why AAS is specific" at={2} />
			<PicV p={AAS} x={A8.x} y={A8.y} h={A8.h} />
			<Beam x0={lx1} x1={640} y={by} at={-1000} split={fx1} thin={() => 0.45} />
			<rect x={640} y={by - 36} width={30} height={72} rx={6} fill="#cfd6de" stroke={INK} strokeWidth={3} />
			<AtomLens cx={1240} cy={400} r={190} at={-1000} atomsOnly beam={-1000} absorb={0} others={K8.other} thin={-1000} />
			<HTag x={1450} y={330} text="other elements:" size={34} color={OTH} at={K8.other} />
			<HTag x={1450} y={378} text="let it pass" size={34} color={OTH} at={K8.other} />
			<HTag x={1450} y={450} text="lead atoms strongly" size={36} color={SEL} at={K8.pass} />
			<HTag x={1450} y={500} text="absorb lead's line" size={36} color={SEL} at={K8.pass} />
			<Fade at={0} out={K8.ft - 10}>
				<Note x={110} y={620} text="other atoms need different energies," size={42} color={INK} at={4} />
				<Note x={110} y={680} text="so they let lead's light pass" size={42} color={OTH} at={K8.pass - 20} />
			</Fade>
			<GapLadder x={1000} y={600} w={400} h={230} gap={110} match at={6} out={K8.so} from={10} title="lead atom: gap matches lead's line" titleColor={SEL} size={28} />
			<GapLadder x={1440} y={600} w={400} h={230} gap={170} match={false} at={6} out={K8.so} from={10} dot={OTH} title="other atom: different gap, light passes" titleColor={OTH} size={28} />
			{/* phase A: flame test against AAS */}
			<Fade at={K8.ft - 10} out={K8.lowest - 10}>
				<PicV p={FLAME_CU} x={110} y={540} h={300} />
				<EnergyInset x={270} y={560} w={270} h={230} at={K8.heated - 10} color="#1f9a8a" from={K8.heated} />
				<AbsLadder x={600} y={560} w={270} h={230} at={K8.inaas - 6} from={K8.take} />
				<HTag x={330} y={850} text="flame test: atoms emit" size={32} color="#1f8a7a" anchor="middle" at={K8.heated} />
				<HTag x={330} y={894} text="their own colours" size={32} color="#1f8a7a" anchor="middle" at={K8.heated} />
				<HTag x={735} y={850} text="AAS: atoms absorb" size={32} color={SEL} anchor="middle" at={K8.take} />
				<HTag x={735} y={894} text="the same colours" size={32} color={SEL} anchor="middle" at={K8.take} />
				<AChip x={110} y={940} text="c03a: flame tests" size={28} color={GREYX} hand={false} at={K8.ft} />
			</Fade>
			{/* phase B: the graphite furnace */}
			<Fade at={K8.lowest - 10} out={pB[1]}>
				<PicV p={FURN} x={FZ.x} y={FZ.y} h={FZ.h} />
				<Beam x0={FZ.x - 20} x1={FZ.x + 720} y={fby} at={K8.tube} split={(tx0 + tx1) / 2} thin={fr => 1 - 0.55 * prog(fr, K8.tube + 30, 20)} h={14} />
				<HTag x={FZ.x} y={FZ.y + FZ.h + 70} text="graphite furnace: a heated graphite tube," size={36} color={INK} at={K8.tube} />
				<HTag x={FZ.x} y={FZ.y + FZ.h + 118} text="for the lowest levels" size={36} color={INK} at={K8.tube} />
			</Fade>
			{/* phase C: one lamp per element */}
			<Fade at={K8.lamp - 6}>
				{[['Pb', K8.lamp], ['Cu', K8.lamp + 30]].map(([el, t], i) => {
					const LY = 570 + i * 170, LH = 130;
					const [gx0, gy0] = at3(LAMP, 120, LY, LH, [1260, 1030]);
					return (
						<g key={el as string} opacity={vis(f, t as number, undefined, 12)}>
							<PicV p={LAMP} x={120} y={LY} h={LH} />
							<rect x={gx0 - 34} y={gy0 - 26} width={68} height={48} rx={8} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2} />
							<Sx x={gx0} y={gy0 + 12} text={el as string} size={32} color={INK} anchor="middle" weight={800} at={-1000} />
						</g>
					);
				})}
				<HTag x={590} y={790} text="copper lamp for copper" size={34} color={INK} at={K8.lamp + 30} />
			</Fade>
			<MistakeX x={1000} y={640} text="AAS detects ions in the solution" at={K8.sol - 20} cross={K8.sol + 6} note="it measures atoms in the flame" size={34} />
			<DimG at={K8.costs} to={0.4}>
				<AChip x={1000} y={790} text="specific: one element's wavelengths" size={34} color={STD} hand={false} at={K8.spec} />
				<AChip x={1000} y={880} text="flame: higher levels; furnace: trace levels" size={34} color={STD} hand={false} at={K8.flame5} />
			</DimG>
			<Fade at={K8.costs}>
				<rect x={990} y={770} width={850} height={250} rx={20} fill="#fffdf8" stroke={UNKC} strokeWidth={3} />
				<HTag x={1020} y={820} text="limits" size={36} color={UNKC} at={K8.costs} />
				<Sx x={1020} y={880} text="one lamp, one element at a time" size={34} color={INK} weight={600} at={K8.lamp} />
				<Sx x={1020} y={936} text="other substances change atomisation" size={34} color={INK} weight={600} at={K8.subst} />
				<Sx x={1020} y={990} text="→ match standards to the sample" size={34} color={INK} weight={700} at={K8.sample2 - 30} />
			</Fade>
		</svg>
	);
};

// ---------- the lead calibration board (scenes 9 to 11) ----------
export const G9: CG = {x: 1060, y: 230, w: 740, h: 560, x0: 0, x1: 2.5, y0: 0, y1: 0.4};
export const STDS: [number, number][] = [[0, 0], [0.5, 0.081], [1.0, 0.163], [1.5, 0.242], [2.0, 0.324]];
export const fitA = (c: number) => 0.1618 * c + 0.0002;
export const CalBoard: React.FC<{pts?: number[]; line?: number; band?: number; ext?: number; tagAt?: number; axesAt?: number; tags?: boolean}> = ({pts = [-1000, -1000, -1000, -1000, -1000], line = -1000, band = -1000, ext = -1000, tagAt, axesAt = -1000, tags = true}) => (
	<>
		<CAxes g={G9} at={axesAt} xLabel="Pb (mg/L)" yLabel="absorbance" xTicks={[0, 0.5, 1, 1.5, 2, 2.5]} yTicks={[0, 0.1, 0.2, 0.3, 0.4]} fx={n => n.toFixed(1)} fy={n => n.toFixed(1)} grid={{dx: 0.25, dy: 0.05}} />
		<CBand g={G9} lo={0} hi={2.0} at={band} />
		<CSeg g={G9} a={[0, fitA(0)]} b={[2.0, fitA(2.0)]} at={line} color={STD} />
		<CSeg g={G9} a={[2.0, fitA(2.0)]} b={[2.5, fitA(2.5)]} at={ext} color={GREYX} dash="10 10" width={4} />
		<CPts g={G9} pts={STDS.map(([x, y], i) => ({x, y, at: pts[i]}))} />
		{tags ? (
			<>
				<HTag x={gx(G9, 0.25)} y={gy(G9, 0.33)} text="line of best fit:" size={32} color={STD} at={tagAt ?? line + 20} />
				<HTag x={gx(G9, 0.25)} y={gy(G9, 0.33) + 40} text="gradient 0.162 per mg/L" size={32} color={STD} at={tagAt ?? line + 20} />
				<HTag x={gx(G9, 1.0)} y={G9.y + G9.h - 24} text="inside the standards" size={30} color={STD} anchor="middle" at={band + 10} />
				<HTag x={gx(G9, 2.25)} y={gy(G9, 0.39)} text="no data here" size={30} color={GREYX} anchor="middle" at={ext + 10} />
			</>
		) : null}
	</>
);

// ---------- 9. Calibration: standards first ----------
const K9 = cues(sc('calibration'), {aas: 'AAS gives', calib: 'calibration', first: 'Standards first', unk: 'unknown second', blank: 'blank', lead: 'lead standards', five: 'point five', two: 'two milligrams', plot: 'plot absorbance', points: 'The points', line: 'line', read: 'read across', inside: 'inside the', standards: ['standards', 3]});
export const SceneCalib: React.FC = () => {
	const f = useCurrentFrame();
	const PT = [K9.blank, K9.five, K9.two - 14, K9.two + 10, K9.plot];
	const FH = 300, FW = picWp(FLASK, FH);
	const lab = ['blank', '0.500', '1.00', '1.50', '2.00'];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Calibrate: standards first, unknown second" at={2} size={52} />
			<CalBoard pts={PT} line={K9.line - 10} band={K9.standards} ext={K9.standards} />
			{lab.map((l, i) => {
				const x = 110 + i * 165;
				const g = vis(f, PT[i], PT[i] + 40, 10);
				return (
					<g key={i} opacity={prog(f, K9.first - 10 + i * 5, 12)}>
						{g > 0.01 ? <ellipse cx={x + FW / 2} cy={250 + FH * 0.75} rx={FW * 0.75} ry={FH * 0.3} fill="#f6d77a" opacity={0.55 * g} /> : null}
						<PicV p={FLASK} x={x} y={250} h={FH} />
						<Sx x={x + FW / 2} y={600} text={l} size={32} color={i ? STD : INK_SOFT} anchor="middle" weight={700} at={-1000} />
					</g>
				);
			})}
			<HTag x={110} y={650} text="lead standards (mg/L) and a blank" size={32} color={INK_SOFT} at={K9.lead} />
			<AChip x={110} y={680} text="p04: making standards" size={28} color={GREYX} hand={false} at={K9.first} />
			<PicV p={AAS} x={110} y={800} h={170} at={4} />
			<HTag x={470} y={850} text="AAS gives absorbance," size={34} color={INK} at={K9.aas} />
			<HTag x={470} y={895} text="not concentration" size={34} color={INK} at={K9.aas} />
			<AChip x={470} y={930} text="Module 5: read across, then down" size={28} color={GREYX} hand={false} at={K9.read} />
			{void K9.calib}{void K9.unk}{void K9.points}{void K9.inside}
		</svg>
	);
};

// ---------- 10. Worked example: out of range, so dilute ----------
const K10 = cues(sc('worked-dilute'), {disch: 'factory discharge', first: 'first reading', above: 'above the', dont: "Don't stretch", there: 'there', dilute: 'Dilute it', tf: 'twenty five', two50: 'two hundred', tenfold: 'tenfold', now: 'Now it', p113: 'point one one', inside: 'inside the'});
export const TASK10 = 'Find the lead concentration in the discharge';
export const SceneDilute: React.FC = () => {
	const f = useCurrentFrame();
	const yU = lerp(0.37, 0.113, smooth(clamp01((f - K10.p113) / 24)));
	const PP = {x: 545, y: 180, h: 200}, FP = {x: 0, y: 390, h: 300};
	const [tipx, tipy] = at3(PIP, PP.x, PP.y, PP.h, PIP_A.tip);
	FP.x = tipx - (FLASK_A.mouth[0] - FLASK.box[0]) * (FP.h / FLASK.box[3]);
	const [, my] = at3(FLASK, FP.x, FP.y, FP.h, FLASK_A.mouth);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text={TASK10} at={2} size={50} />
			<CalBoard tags={false} band={-1000} line={-1000} />
			<HTag x={gx(G9, 1.0)} y={G9.y + G9.h - 24} text="inside the standards" size={30} color={STD} anchor="middle" at={-1000} />
			<PicV p={BOTTLE2} x={96} y={250} h={250} />
			<HTag x={96 + picWp(BOTTLE2, 250) / 2} y={545} text="discharge sample" size={32} color={INK_SOFT} anchor="middle" at={K10.disch} />
			<Fade at={K10.above - 10}>
				<circle cx={gx(G9, 0)} cy={gy(G9, yU)} r={14} fill={UNKC} stroke="#fffdf8" strokeWidth={3} />
				<HTag x={gx(G9, 0) + 26} y={gy(G9, 0.37) - 18} text="undiluted: above the top standard" size={32} color={UNKC} at={K10.above} out={K10.p113} />
			</Fade>
			<CSeg g={G9} a={[2.0, fitA(2.0)]} b={[2.35, fitA(2.35)]} at={K10.dont} out={K10.p113 + 30} color={UNKC} dash="10 10" width={5} />
			<Mark x={gx(G9, 2.2)} y={gy(G9, fitA(2.2))} at={K10.there} kind="cross" size={60} />
			<HTag x={gx(G9, 2.2)} y={gy(G9, fitA(2.2)) - 56} text="don't extrapolate" size={34} color="#c4432f" anchor="middle" at={K10.there + 6} />
			<PicV p={PIP} x={PP.x} y={PP.y} h={PP.h} at={K10.dilute - 6} />
			<PicV p={FLASK} x={FP.x} y={FP.y} h={FP.h} at={K10.dilute - 6} />
			{[0, 1, 2, 3, 4].map(i => <FallDrop key={i} x={tipx} y0={tipy} y1={my + 30} at={K10.tf + i * 14} color="#d9c9a8" />)}
			<HTag x={PP.x + 90} y={PP.y + 110} text={`25.00${NB}mL`} size={36} color={NAVY} at={K10.tf} />
			<HTag x={FP.x + 150} y={FP.y + 230} text={`made up to 250.0${NB}mL`} size={34} color={NAVY} at={K10.two50} />
			<WLine x={96} y={800} size={42} items={P(`diluted: 25.00${NB}mL → 250.0${NB}mL`, K10.tf)} />
			<WLine x={96} y={880} size={42} items={[{t: 'dilution factor = 250.0 ÷ 25.00 =', at: K10.tenfold - 6}, {t: '10.0', at: K10.tenfold, color: TEAL}]} />
			<WLine x={96} y={960} size={42} items={P('diluted sample: A = 0.113', K10.p113)} />
			<MistakeX x={1060} y={905} text="extend the line past the last point" at={K10.dont} cross={K10.there} note="nothing shows it stays straight out there" size={32} />
			<Note x={96} y={720} text="first reading: above the top standard" size={36} color={UNKC} at={K10.first} />
			<HTag x={gx(G9, 0) + 26} y={gy(G9, 0.113) - 20} text="diluted: inside the range" size={32} color={UNKC} at={K10.inside} />
			{void K10.first}{void K10.now}{void GOOD}
		</svg>
	);
};

// ---------- 11. Worked example: read, then multiply back ----------
const K11 = cues(sc('worked-read'), {read: 'read it', grad: 'gradient', divide: 'divide', over: 'over point', gives: 'gives point', l2: ['litre', 2], but: "But that's", diluted: 'diluted solution', mult: 'Multiply back', ten: 'ten', holds: 'holds', l3: ['litre', 3]});
export const SceneRead: React.FC = () => (
	<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
		<TaskLine text={TASK10} at={-1000} size={50} />
		<CalBoard tags={false} />
		<CRead g={G9} a={0.113} c={0.698} at={K11.read} downAt={K11.read + 34} value="about 0.70" />
		<GCard x={96} y={200} w={860} size={36} lh={60} at={-1000} title="from the dilution" lines={[{t: 'diluted sample: A = 0.113', at: -1000}, {t: 'gradient = 0.162 per mg/L', at: K11.grad, lit: [K11.grad, K11.gives]}, {t: 'dilution factor = 10.0', at: -1000, lit: [K11.mult, K11.holds]}]} />
		<WLine x={96} y={560} size={44} dim={K11.mult} dimTo={0.55} items={[{t: 'c(diluted) = 0.113 ÷ 0.162', at: K11.divide}, {t: `= 0.698${NB}mg/L`, at: K11.l2 - 20, color: TEAL}]} />
		<HTag x={560} y={620} text="the diluted solution" size={34} color={NAVY} at={K11.diluted} />
		<WLine x={96} y={710} size={44} items={P('c(discharge) = 0.698 × 10.0', K11.mult)} />
		<Framed x={96} y={830} text={`= 6.98${NB}mg/L Pb`} at={K11.l3 - 20} size={60} color={STD} />
		<PicV p={BOTTLE2} x={800} y={620} h={230} />
		<HTag x={866} y={890} text="the discharge" size={30} color={INK_SOFT} anchor="middle" at={-1000} />
		<MistakeX x={96} y={890} text="0.698 mg/L in the discharge" at={K11.but} cross={K11.diluted + 10} note="that's the diluted value: multiply back" size={32} />
		{void K11.over}{void K11.ten}
	</svg>
);

// ---------- 12. Which method? ----------
const K12 = cues(sc('which-method'), {which: 'which method', col: 'is coloured', complex: 'complex', colorim: 'colourimetry', quick: 'quick', cheap: 'cheap', uv: 'UVvisible', sel: 'selective', one: 'one chosen', forone: 'For one', trace: 'trace levels', not: 'or not', aas: 'AAS'});
export const SceneMethod: React.FC = () => {
	const f = useCurrentFrame();
	const cols: {p: PDef; h: number; t: string; c: string; lines: [string, number][]}[] = [
		{p: COLM, h: 230, t: 'Colourimetry', c: '#2f6fd0', lines: [['coloured species', K12.col], ["a filter's band", K12.colorim], ['quick, cheap', K12.quick]]},
		{p: UVV, h: 220, t: 'UV-visible', c: NAVY, lines: [['one wavelength (λmax)', K12.one], ['visible or UV', K12.uv + 20], ['more selective', K12.sel]]},
		{p: AAS, h: 170, t: 'AAS', c: SEL, lines: [['one metal element', K12.forone], ['trace levels', K12.trace], ['colour not needed', K12.not]]},
	];
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<TaskLine text="Which method?" at={2} />
			{cols.map((c, i) => {
				const x0 = 96 + i * 600, cx = x0 + 280;
				const lit = i === 2 ? prog(f, K12.aas, 12) : 0;
				return (
					<g key={i}>
						<rect x={x0} y={200} width={560} height={740} rx={22} fill={lit > 0.5 ? '#fff6dc' : '#fffdf8'} stroke={lit > 0.01 ? c.c : 'rgba(60,45,20,0.22)'} strokeWidth={lit > 0.01 ? 5 : 3} />
						<PicV p={c.p} x={cx - picWp(c.p, c.h) / 2} y={480 - c.h} h={c.h} />
						<Sx x={x0 + 34} y={560} text={c.t} size={50} color={c.c} hand weight={700} at={-1000} />
						{c.lines.map(([t, a], k) => <Sx key={k} x={x0 + 34} y={640 + k * 80} text={t} size={38} color={INK} weight={600} at={a} />)}
					</g>
				);
			})}
			<Sx x={96} y={1010} text="all three: calibrate with standards; read inside the range" size={36} color={INK_SOFT} weight={600} at={K12.aas + 6} />
			{void K12.which}{void K12.complex}{void K12.cheap}
		</svg>
	);
};

// ---------- 13. Memory aid ----------
const K13 = cues(sc('memory-aid'), {two: 'Two lines', read: 'Read across', down: 'then down', inside: 'only inside', mult: 'then multiply', and: 'And in', lamp: 'the lamp', testing: 'testing'});
const GM: CG = {x: 1320, y: 220, w: 480, h: 320, x0: 0, x1: 2.5, y0: 0, y1: 0.4};
export const SceneAid: React.FC = () => {
	const LH = 170, LX = 1260, LY = 720;
	const [gx0, gy0] = at3(LAMP, LX, LY, LH, [1260, 1030]);
	return (
		<>
			<Heading text="Two lines to keep" at={4} size={60} />
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<Sx x={96} y={330} text="Across, then down, inside the standards," size={66} color={STD} hand weight={700} at={K13.read} />
				<Sx x={96} y={420} text="× dilution factor." size={66} color={TEAL} hand weight={700} at={K13.mult} />
				<CAxes g={GM} at={4} xLabel="c" yLabel="A" size={28} />
				<CBand g={GM} lo={0} hi={2} at={K13.inside} />
				<CSeg g={GM} a={[0, 0]} b={[2, 0.33]} at={8} color={STD} />
				<CRead g={GM} a={0.2} c={1.21} at={K13.read} downAt={K13.down} size={28} aLabel=" " />
				<Sx x={96} y={700} text="AAS: the lamp is made of the element" size={62} color={SEL} hand weight={700} at={K13.and} />
				<Sx x={96} y={785} text="you're testing." size={62} color={SEL} hand weight={700} at={K13.lamp + 30} />
				<PicV p={LAMP} x={LX} y={LY} h={LH} at={2} />
				<PicV p={FLASK} x={1150} y={330} h={180} at={K13.mult} />
				<HTag x={1110} y={570} text="× 10.0" size={40} color={TEAL} at={K13.mult + 10} />
				<Fade at={K13.testing}>
					<rect x={gx0 - 38} y={gy0 - 30} width={76} height={54} rx={8} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2} />
					<Sx x={gx0} y={gy0 + 13} text="Pb" size={36} color={INK} anchor="middle" weight={800} at={-1000} />
				</Fade>
				<HTag x={LX + 40} y={970} text="lead lamp → lead" size={36} color={INK_SOFT} at={K13.testing} />
				{void K13.two}
			</svg>
		</>
	);
};
