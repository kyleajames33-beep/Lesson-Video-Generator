// B7 scenes 1 to 4: the hook (one hydrangea, two colours), what proteins do (five jobs on real objects), why a chain
// folds (water-avoiding beads tuck in, charges attract, an S-S link), and why shape decides the job (fit, with the
// changes that do and do not matter).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {
	ABead, AABead, AMBER, AMBER_INK, Antibody, CHAIN12, CHAIN12B, ChainView, Chip, CodonSwap, DnaIcon, DrawPath, EnzymePlate, FONT_HAND, Fade, GREYT, GREY_INK,
	GreyTag, Hb, Heading, INK, INK_SOFT, Keratin, MiniFold, Overlay, PLT, PepLink, PlainArrow, PlateB, PocketBlob, Receptor, S, Soil, Sx, Tick, clamp01, foldStages,
	lerp, mixPts, pbH, pbPt, prog, pulse, rng,
} from './shared';

const vis = (f: number, at: number, out?: number, d = 12) => prog(f, at, d) * (out === undefined ? 1 : 1 - prog(f, out, d));

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {cut: 'takes cuttings', clone: 'is a clone', same: 'exactly the same genes', planted: 'Planted in two different gardens', blue: 'flowers blue', pink: 'flowers pink', last: 'Last time', chain: 'a chain of amino acids', trait: 'a trait you can see', results: 'give different results'});
export const SceneHookB7: React.FC = () => {
	const f = useCurrentFrame();
	const mv = prog(f, K1.planted, 40);
	const centreO = 1 - prog(f, K1.planted, 20);
	const cutsOut = prog(f, K1.cut + 14, 26);
	const c = {x: 960, y: 560, w: 440};
	const at = pbPt(PLT.hydPink, c.x, c.y, c.w);
	const cuts: [number, number][] = [at(1000, 1590), at(1062, 1548), at(1124, 1610)];
	// three cutting copies slide out to a row; copies 0 and 2 then move to the gardens and grow
	const row: [number, number][] = [[770, 900], [960, 900], [1150, 900]];
	const garden: [number, number][] = [[520, 660], [960, 900], [1400, 660]];
	const blue = prog(f, K1.blue, 18);
	return (
		<>
			<Overlay>
				<PlateB p={PLT.hydPink} cx={c.x} cy={c.y} w={c.w} o={centreO} />
				{cuts.map(([x, y], i) => <g key={i} opacity={centreO}><DrawPath d={`M${x - 16},${y - 12} L${x + 16},${y + 12}`} at={K1.cut + i * 4} dur={8} color={AMBER_INK} width={6} /></g>)}
				<Soil x={520} y={845} w={460} o={prog(f, K1.planted + 10, 16)} />
				<Soil x={1400} y={845} w={460} o={prog(f, K1.planted + 16, 16)} />
				<Sx x={520} y={935} text="garden 1" size={40} color={INK_SOFT} hand anchor="middle" at={K1.planted + 20} />
				<Sx x={1400} y={935} text="garden 2" size={40} color={INK_SOFT} hand anchor="middle" at={K1.planted + 26} />
				{[0, 1, 2].map(i => {
					const sx = lerp(c.x, row[i][0], cutsOut), sy = lerp(c.y + 120, row[i][1], cutsOut);
					const gx = lerp(sx, garden[i][0], mv), gy = lerp(sy, garden[i][1], mv);
					const w = i === 1 ? 130 * (1 - mv) : lerp(130, 380, mv);
					const o = prog(f, K1.cut + 14, 10) * (i === 1 ? 1 - mv : 1);
					return (
						<g key={i}>
							<PlateB p={PLT.hydPink} cx={gx} cy={gy - (i === 1 ? 0 : 0)} w={Math.max(1, w)} o={o * (i === 0 ? 1 - blue : 1)} />
							{i === 0 ? <PlateB p={PLT.hydBlue} cx={gx} cy={gy} w={Math.max(1, w)} o={o * blue} /> : null}
						</g>
					);
				})}
				<Fade at={K1.cut + 30} out={K1.planted}>
					<Chip x={1250} y={870} text="cuttings: clones, same genes" at={K1.cut + 30} size={34} color={INK} />
				</Fade>
				<Fade at={K1.pink + 10}>
					<Sx x={960} y={620} text="same genes" size={40} color={INK} hand anchor="middle" at={K1.pink + 10} />
					<DnaIcon x={905} y={680} s={1.1} />
					<Sx x={960} y={694} text="=" size={44} color={INK} weight={800} anchor="middle" at={K1.pink + 14} />
					<DnaIcon x={1015} y={680} s={1.1} />
				</Fade>
				{/* last time: B6c's chain */}
				{['Met', 'Glu', 'Ala'].map((aa, i) => (
					<g key={aa}>
						<AABead x={160 + i * 84} y={262} aa={aa} r={32} o={prog(f, K1.chain + i * 5, 10)} />
						{i > 0 ? <PepLink a={[160 + (i - 1) * 84, 262]} b={[160 + i * 84, 262]} o={prog(f, K1.chain + i * 5 + 4, 8)} r={32} /> : null}
					</g>
				))}
				<GreyTag x={386} y={236} text="B6c" at={K1.chain + 14} size={26} />
				<Fade at={K1.trait}>
					<DrawPath d="M300,310 C420,420 700,330 880,440" at={K1.trait} dur={24} color={AMBER_INK} width={5} dash="4 12" />
					<Sx x={930} y={460} text="?" size={80} color={AMBER_INK} hand anchor="middle" at={K1.trait + 18} />
				</Fade>
			</Overlay>
			<Heading text="From a chain to a trait" at={K1.results} size={64} />
		</>
	);
};

// ---------- 2. What proteins do ----------
const K2 = cues(S('protein-jobs'), {most: 'Most of a', enz: 'Enzymes speed up', trans: 'Transport proteins', hb: 'like haemoglobin', struct: 'Structural proteins', keratin: 'the keratin in your hair', rec: 'Receptors on a', signals: 'pick up signals', anti: 'antibodies grab onto germs', every: 'Every one of these', folded: 'folded into its own shape'});
const TILE = {w: 330, gap: 22, y0: 206, y1: 846};
export const tileX = (i: number) => 91 + TILE.w / 2 + i * (TILE.w + TILE.gap);
export const SceneJobsB7: React.FC = () => {
	const f = useCurrentFrame();
	const starts = [K2.enz, K2.trans, K2.struct, K2.rec, K2.anti];
	const names = ['enzyme', 'transport', 'structural', 'receptor', 'antibody'];
	const tags = [['speeds up reactions'], ['haemoglobin carries', 'oxygen'], ['keratin (hair)'], ['picks up signals'], ['grabs germs']];
	const fold = prog(f, K2.folded - 8, 30);
	const cellPt = pbPt(PLT.rbc, tileX(1), 392, 250)(1030, 1010);
	return (
		<>
			<Heading text="Proteins do most of a cell's jobs" at={4} size={60} />
			<Overlay>
				{names.map((n, i) => (
					<Fade key={n} at={starts[i] - 6}>
						<rect x={tileX(i) - TILE.w / 2} y={TILE.y0} width={TILE.w} height={TILE.y1 - TILE.y0} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={3} />
						<Sx x={tileX(i)} y={TILE.y0 + 56} text={n} size={46} color={AMBER_INK} hand anchor="middle" at={starts[i] - 6} />
						{tags[i].map((t, k) => <Sx key={k} x={tileX(i)} y={706 + k * 36} text={t} size={28} color={INK} weight={600} anchor="middle" at={starts[i] + 10 + k * 4} />)}
					</Fade>
				))}
				{/* enzyme: the substrate slides into the pocket */}
				<EnzymePlate id="b7j-enz" cx={tileX(0)} cy={455} w={290} o={prog(f, K2.enz - 4, 12)} sub={prog(f, K2.enz + 16, 26)} />
				{/* transport: red cells, a zoom into haemoglobin taking up oxygen */}
				<PlateB p={PLT.rbc} cx={tileX(1)} cy={392} w={250} o={prog(f, K2.trans - 4, 12)} />
				<Fade at={K2.hb}>
					<line x1={cellPt[0]} y1={cellPt[1]} x2={tileX(1)} y2={548} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="5 7" />
					<circle cx={tileX(1)} cy={612} r={68} fill="#fff6f2" stroke={INK_SOFT} strokeWidth={3} />
					<Hb x={tileX(1) - 28} y={612} s={0.62} labels={false} o2={prog(f, K2.hb + 14, 16)} />
					<Hb x={tileX(1) + 32} y={606} s={0.5} labels={false} o2={prog(f, K2.hb + 22, 16)} />
				</Fade>
				{/* structural: keratin fibre, and (screen only) a smooth muscle cell contracting */}
				<g opacity={prog(f, K2.struct - 4, 12)}><Keratin x={tileX(2)} y={400} h={190} t={f * 0.03} /></g>
				<PlateB p={PLT.muscleR} cx={tileX(2)} cy={578} w={290} o={prog(f, K2.struct + 4, 12) * (1 - prog(f, K2.keratin + 10, 24))} />
				<PlateB p={PLT.muscleC} cx={tileX(2)} cy={578} w={290} o={prog(f, K2.keratin + 10, 24)} />
				<Sx x={tileX(2)} y={642} text="contractile proteins" size={24} color={GREY_INK} weight={600} anchor="middle" at={K2.keratin + 14} />
				{/* receptor */}
				<Receptor x={tileX(3)} y={470} sig={prog(f, K2.signals - 10, 24)} spark={prog(f, K2.signals + 14, 26)} o={prog(f, K2.rec - 4, 12)} />
				{/* antibody */}
				<Antibody x={tileX(4)} y={540} grab={prog(f, K2.anti + 6, 24)} o={prog(f, K2.anti - 4, 12)} />
				{/* every one is a folded chain */}
				{names.map((n, i) => <MiniFold key={n} x={tileX(i)} y={800} fold={fold} o={prog(f, K2.every + i * 4, 10)} />)}
				<Sx x={960} y={930} text="each one: one or more polypeptide chains, folded into its own shape" size={44} color={AMBER_INK} hand anchor="middle" at={K2.folded} />
			</Overlay>
		</>
	);
};

// ---------- 3. Why a chain folds ----------
const K3 = cues(S('why-fold'), {why: 'So why does', twenty: 'the twenty amino acids', avoid: 'Some avoid water', tuck: 'tuck into the middle', charge: 'Some carry a charge', attract: 'opposite charges attract', cys: 'called cysteine', lock: 'lock together', ds: 'disulfide bond', order: 'The order of amino acids', decides: 'decides which parts', shape: 'so it decides the shape'});
export const FOLD_A = foldStages(CHAIN12, [960, 560], 300, 540);
export const FOLD_B = foldStages(CHAIN12B, [1340, 560], 300, 540);
const WATER = (() => { const r = rng(17); return Array.from({length: 120}, () => [180 + r() * 1560, 360 + r() * 400] as [number, number]); })();
export const SceneFoldB7: React.FC = () => {
	const f = useCurrentFrame();
	const t1 = prog(f, K3.tuck - 6, 60), t2 = prog(f, K3.attract, 40), t3 = prog(f, K3.lock, 36);
	let pts = mixPts(FOLD_A.s0, FOLD_A.s1, t1);
	pts = mixPts(pts, FOLD_A.s2, t2);
	pts = mixPts(pts, FOLD_A.s3, t3);
	const shift = prog(f, K3.order + 6, 30) * -340;
	pts = pts.map(p => [p[0] + shift, p[1]] as [number, number]);
	const water = vis(f, K3.avoid, K3.order, 16);
	// the shuffled chain: appears straight at the bottom, then folds beside the first
	const bIn = prog(f, K3.decides, 14);
	const bFold = prog(f, K3.decides + 20, 60);
	const bStart = FOLD_B.s0.map((_, i) => [1000 + i * 70, 880] as [number, number]);
	const bp = mixPts(mixPts(bStart, FOLD_B.s2, bFold), FOLD_B.s3, prog(f, K3.decides + 50, 30));
	return (
		<>
			<Heading text="Why a chain folds into one shape" at={4} size={60} />
			<Overlay>
				{WATER.map(([x, y], i) => <circle key={i} cx={x + Math.sin(f * 0.03 + i) * 4} cy={y} r={4} fill="#a9b8c4" opacity={0.5 * water} />)}
				<ChainView seq={CHAIN12} pts={pts} r={32} o={prog(f, 0, 14)} charge={prog(f, K3.charge, 12)} pull={vis(f, K3.attract, K3.lock + 30)} ss={prog(f, K3.ds, 12)} hull={prog(f, K3.order, 24) * 0.6} ring={i => (CHAIN12[i] === 'Cys' ? pulse(f, K3.cys, 30) : 0)} />
				<ChainView seq={CHAIN12B} pts={bp} r={lerp(26, 32, bFold)} o={bIn} charge={bIn} ss={prog(f, K3.decides + 70, 12)} hull={prog(f, K3.shape, 24) * 0.6} />
				<Fade at={K3.avoid + 10} out={K3.order}>
					<Sx x={150} y={300} text="water-avoiding: tuck in" size={42} color={GREY_INK} hand at={K3.avoid + 10} />
					<Sx x={150} y={340} text="(hydrophobic)" size={28} color={GREY_INK} weight={600} at={K3.tuck} />
				</Fade>
				<Fade at={K3.attract} out={K3.order}>
					<Sx x={1300} y={300} text="charges attract" size={42} color={AMBER_INK} hand at={K3.attract} />
				</Fade>
				<Fade at={K3.ds} out={K3.order}>
					<Sx x={1300} y={840} text="disulfide bond: strong link" size={42} color={AMBER_INK} hand at={K3.ds} />
				</Fade>
				<Sx x={150} y={300} text="the twenty amino acids differ" size={40} color={INK_SOFT} hand at={K3.twenty} out={K3.avoid + 4} />
				<Sx x={620} y={800} text="order 1" size={36} color={INK_SOFT} hand anchor="middle" at={K3.order + 30} />
				<Sx x={1340} y={800} text="order 2" size={36} color={INK_SOFT} hand anchor="middle" at={K3.shape} />
				<Sx x={960} y={1000} text="different order, different shape" size={50} color={AMBER_INK} hand anchor="middle" at={K3.shape + 10} />
			</Overlay>
		</>
	);
};

// ---------- 4. Shape decides the job ----------
const K4 = cues(S('shape-job'), {fitting: 'work by fitting', fits: 'substrate fits into', active: 'its active site', key: 'like a key in a lock', flex: 'flex a little', change: 'Change one amino acid', no: 'no longer fits', notev: 'not every change matters', far: 'far from the pocket', similar: 'to a similar amino acid', working: 'leave the shape working', many: 'many base changes', all: 'amino acid at all'});
export const SceneShapeB7: React.FC = () => {
	const f = useCurrentFrame();
	const E = {x: 470, y: 560, w: 620};
	const pk = pbPt(PLT.enzyme, E.x, E.y, E.w);
	const pocketLbl = pk(1000, 1000);
	const flip = prog(f, K4.change + 20, 8);
	const squeeze = prog(f, K4.change + 34, 20);
	const bump = prog(f, K4.no, 18);
	return (
		<>
			<Heading text="Shape decides the job" at={4} size={60} />
			<Overlay>
				<EnzymePlate id="b7s-enz" cx={E.x} cy={E.y} w={E.w} sub={prog(f, K4.fits + 4, 30)} pocket={prog(f, K4.active - 4, 14)} breathe={pulse(f, K4.flex + 6, 36)} />
				<Fade at={K4.active}>
					<line x1={pocketLbl[0] + 30} y1={pocketLbl[1] - 120} x2={pocketLbl[0] + 60} y2={262} stroke={AMBER_INK} strokeWidth={3.5} />
					<Sx x={pocketLbl[0] + 70} y={252} text="active site" size={44} color={AMBER_INK} hand at={K4.active} />
				</Fade>
				<Tick x={820} y={430} at={K4.fits + 34} s={44} />
				<Chip x={130} y={884} text="key and lock" at={K4.key} size={36} color={INK} stroke={AMBER} />
				<GreyTag x={420} y={888} text="flexes as it binds" at={K4.flex + 6} size={28} />
				{/* a folded enzyme (coded): one amino acid in the pocket changes */}
				<Fade at={K4.change - 4}>
					<rect x={1030} y={200} width={790} height={460} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<Sx x={1060} y={252} text="change one amino acid in the pocket" size={34} color={INK_SOFT} hand at={K4.change - 4} />
				</Fade>
				<PocketBlob cx={1360} cy={450} R={130} o={prog(f, K4.change - 4, 12)} lip={flip > 0.5 ? 'Trp' : 'Asp'} lipRing={prog(f, K4.change + 16, 10)} squeeze={squeeze} bump={bump} />
				<GreyTag x={1560} y={410} text="can stop fitting" at={K4.no + 8} size={28} />
				{/* changes that do not matter */}
				<Fade at={K4.notev - 4}>
					<rect x={1030} y={690} width={385} height={300} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
					<rect x={1435} y={690} width={385} height={300} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.18)" strokeWidth={3} />
				</Fade>
				<PocketBlob cx={1205} cy={812} R={90} o={prog(f, K4.far - 6, 12)} far={prog(f, K4.far + 6, 8) > 0.5 ? 'Thr' : 'Ser'} farRing={prog(f, K4.far + 2, 10)} lip="Asp" />
				<Tick x={1368} y={740} at={K4.working} s={36} />
				<Sx x={1222} y={946} text="far from the pocket," size={28} color={INK} weight={600} anchor="middle" at={K4.far + 6} />
				<Sx x={1222} y={978} text="or to a similar one" size={26} color={GREY_INK} weight={600} anchor="middle" at={K4.similar} />
				<CodonSwap x={1480} y={790} a="GAA" b="GAG" at={K4.many} aaAt={K4.many + 24} size={44} />
				<Sx x={1627} y={960} text="same amino acid" size={30} color={INK} weight={600} anchor="middle" at={K4.all} />
				<Tick x={1780} y={860} at={K4.all + 4} s={36} />
			</Overlay>
		</>
	);
};
void ABead; void AMBER; void CHAIN12; void FONT_HAND; void GREYT; void INK; void PlainArrow; void clamp01; void pbH;
