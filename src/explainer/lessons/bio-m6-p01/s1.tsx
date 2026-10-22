// M6 P01 (Biology practical) scenes 1 to 4: the hook (the 0 s and 120 s plates, the "more mutants?" chip, a
// magnifier that finds nothing in the empty agar and stops inside a colony); what a colony is (about 150 coded cells
// spread on agar grow, over a 48 h time bar, into the painted 0 s plate's colonies; two cells that cannot divide stay
// as grey dots); the four fates under UV (b01's slim strand with a dimer kink, the repair blob, a copy fork that halts
// at two kinks, four rows with painted zoom icons and the survivors bracket); who collects the data (the closed
// cabinet, the UVC hazard tag, the interlock, the empty analysis table).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Ring} from '../bio-m5-b13/shared';
import {Fork, RepairBlob, SlimStrand, rungX} from '../bio-m6-b02/parts';
import {S} from './common';
import {C000, C120, CAB, EMPTY120, GREY000} from './assets';
import {
	AMBER, AMBER_INK, Bench, CTag, CornerTag, DrawPath, EDGE, GREEN, GREYT, GREY_INK, GTag, INK, INK_SOFT, Interlock, Magnifier, PLATES, Pl, QUESTION, Rail, Sx,
	TEAL, TERRA, Table, TimeBar, TimeCount, VIOLET, ZoomWin, clamp01, ctagH, lerp, pbPt, plH, prog, smooth, tw,
} from './parts';

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {numbers: 'these numbers', h142: 'a hundred and forty two', five: 'just five', doesnt: "doesn't prove more mutants", whyNot: 'But why not', where: 'where would they be', inside: 'inside the colonies that grew', so: 'So what can colony counts'});
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const A = {cx: 380, cy: 590, w: 470}, B = {cx: 900, cy: 590, w: 470};
	const ptB = pbPt(PLATES.p120, B.cx, B.cy, B.w);
	// magnifier path: empty agar points, then the first colony
	const sweep = EMPTY120.map(([u, v]) => ptB(u, v));
	const col = ptB(C120[0][0], C120[0][1]);
	const tS = clamp01((f - K1.where) / Math.max(1, K1.inside - K1.where - 8));
	const seg = Math.min(sweep.length - 2, Math.floor(tS * (sweep.length - 1)));
	const u = smooth(tS * (sweep.length - 1) - seg);
	const mEmpty: [number, number] = [lerp(sweep[seg][0], sweep[seg + 1][0], u), lerp(sweep[seg][1], sweep[seg + 1][1], u)];
	const toCol = smooth(prog(f, K1.inside, 20));
	const mx = lerp(mEmpty[0], col[0], toCol), my = lerp(mEmpty[1], col[1], toCol);
	const magO = prog(f, K1.where, 12);
	const chipDim = 1 - 0.6 * prog(f, K1.so, 14);
	const chipText = 'fewer colonies = more mutants';
	const chipW = tw(chipText, 36, true) * 1.06 + 36;
	const pulseQ = Math.max(0, Math.sin(clamp01((f - K1.whyNot) / 30) * Math.PI));
	return (
		<>
			<Heading text={QUESTION} at={K1.so} size={54} />
			<Overlay>
				<Bench o={prog(f, 0, 16)} />
				<GTag x={640} y={300} text="mutagens video" at={6} out={K1.doesnt} size={24} anchor="middle" />
				<Pl p={PLATES.p000} cx={A.cx} cy={A.cy} w={A.w} o={prog(f, 4, 16)} />
				<Pl p={PLATES.p120} cx={B.cx} cy={B.cy} w={B.w} o={prog(f, K1.five - 20, 16)} />
				<TimeCount x={A.cx} y={895} time="0 s" count="mean 142" at={K1.h142} />
				<TimeCount x={B.cx} y={895} time="120 s" count="mean 5" at={K1.five} />
				{/* the claim from the mutagens video */}
				<g opacity={chipDim}>
					<CTag x={1260} y={380} text={chipText} at={K1.doesnt} color={TERRA} size={36} maxW={600} />
					<g transform={`translate(${1260 + chipW + 30},${436}) scale(${1 + 0.45 * pulseQ})`}>
						<Sx x={0} y={0} text="?" size={74} color={TERRA} weight={800} anchor="middle" at={K1.doesnt + 6} />
					</g>
					<GTag x={1260} y={470} text="mutagens video: not proven" at={K1.doesnt + 14} size={24} />
				</g>
				{/* where would any mutants be? */}
				<GTag x={B.cx} y={298} text="empty agar: no cells to test" at={K1.where + 16} out={K1.so} size={24} anchor="middle" />
				<Magnifier x={mx} y={my} r={56} o={magO * (1 - 0.5 * prog(f, K1.so, 14))} />
				<Sx x={col[0]} y={col[1] - 18} text="?" size={46} color={TERRA} weight={800} anchor="middle" at={K1.inside + 18} />
				{void K1.numbers}
			</Overlay>
		</>
	);
};

// ---------- 2. What a colony is ----------
const K2 = cues(S('what-a-colony-is'), {first: "what's a colony", spread: 'Spread about a hundred', divide: 'each cell that can still divide', pile: 'makes a pile', days: 'in two days', colony: 'That pile is a colony', surviving: 'surviving', cant: "A cell that can't divide"});
export const SceneColony: React.FC = () => {
	const f = useCurrentFrame();
	const D = {cx: 640, cy: 590, w: 560};
	const pt = pbPt(PLATES.p000, D.cx, D.cy, D.w);
	const grow = smooth(prog(f, K2.divide, Math.max(20, K2.days + 20 - K2.divide)));
	const ringC = pt(1016, 953);
	const g1 = pt(GREY000[0][0], GREY000[0][1]), g2 = pt(GREY000[1][0], GREY000[1][1]);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={0} at={4} />
				<Bench />
				<Pl p={PLATES.yeast} cx={190} cy={390} w={180} o={prog(f, 4, 14)} dim={prog(f, K2.colony, 16) * 0.6} />
				<GTag x={100} y={480} text="yeast: single-celled fungus" at={10} out={K2.colony} size={22} />
				<Pl p={PLATES.agar} cx={D.cx} cy={D.cy} w={D.w} o={prog(f, 0, 14) * (1 - grow)} />
				<Pl p={PLATES.p000} cx={D.cx} cy={D.cy} w={D.w} o={grow} />
				{/* the spread cells: coded dots where the colonies will grow */}
				{C000.map(([u, v], i) => {
					const [x, y] = pt(u, v);
					const o = prog(f, K2.spread + (i % 30), 8) * (1 - grow);
					if (o <= 0.01) return null;
					return <circle key={i} cx={x} cy={y} r={2.6 + 3 * grow} fill="#fffaf0" stroke="#b9a274" strokeWidth={1.2} opacity={o} />;
				})}
				{[g1, g2].map(([x, y], i) => <circle key={'g' + i} cx={x} cy={y} r={3.2} fill="#9aa0a6" stroke="#6f757b" strokeWidth={1.2} opacity={prog(f, K2.spread + 10, 8)} />)}
				<GTag x={D.cx} y={898} text="about 150 cells, spread thin" at={K2.spread + 20} out={K2.colony} size={24} anchor="middle" />
				<TimeBar x={960} y={800} w={260} p={grow} a="0 h" b="48 h at 30 °C" o={prog(f, K2.pile - 10, 12) * (1 - 0.5 * prog(f, K2.colony, 14))} />
				{/* colony gloss */}
				<Ring cx={ringC[0]} cy={ringC[1]} rx={22} ry={20} at={K2.colony + 6} color={AMBER_INK} width={4} />
				<DrawPath d={`M${ringC[0] + 22},${ringC[1] - 10} Q${1100},${ringC[1] - 120} ${1290},${330}`} at={K2.colony + 14} dur={16} color={AMBER_INK} width={3} dash="8 7" />
				<CTag x={1290} y={300} text="colony: a visible pile of cells grown from one cell or small clump" at={K2.colony + 14} color={AMBER_INK} size={30} maxW={520} />
				<CTag x={1290} y={300 + ctagH('colony: a visible pile of cells grown from one cell or small clump', 30, 520) + 30} text="one colony = one surviving cell or small clump" at={K2.surviving} color={TEAL} size={32} maxW={520} />
				{/* cells that cannot divide */}
				<Ring cx={g1[0]} cy={g1[1]} rx={18} ry={16} at={K2.cant} color={GREYT} width={3} seed={5} />
				<Ring cx={g2[0]} cy={g2[1]} rx={18} ry={16} at={K2.cant + 4} color={GREYT} width={3} seed={6} />
				<GTag x={D.cx} y={898} text="can't divide: no colony" at={K2.cant + 8} size={24} anchor="middle" />
				{void K2.first}
			</Overlay>
		</>
	);
};

// ---------- 3. Four fates under UV ----------
const K3 = cues(S('four-fates'), {joins: 'joins neighbouring thymines', four: 'four fates', noDamage: 'No damage', repaired: 'repaired', too: 'Too much damage', stalls: 'stalls', noColony: 'no colony', orA: 'Or a changed base', lives: 'the cell lives', looks: 'looks just like', survival: 'measures survival', counted: 'counted as survivors'});
const ROW_Y = [330, 480, 630, 780];
const ROWS = ['no damage → colony', 'damaged, repaired → colony', 'many dimers: copying stalls → stops dividing → no colony', 'changed base copied, cell lives → colony (looks normal)'];
export const SceneFates: React.FC = () => {
	const f = useCurrentFrame();
	const sx = 110, sy = 330, n = 5, pitch = 30;
	const k1 = prog(f, K3.joins + 8, 14) * (1 - prog(f, K3.repaired + 24, 20));
	const many = prog(f, K3.too, 14) * (1 - prog(f, K3.orA, 16));
	const blobT = smooth(prog(f, K3.repaired, 24));
	const blobO = prog(f, K3.repaired, 8) * (1 - prog(f, K3.repaired + 40, 12));
	const kinkX = (rungX(sx, 2, pitch) + rungX(sx, 3, pitch)) / 2;
	const forkX = lerp(sx - 30, rungX(sx, 2, pitch) - 22, smooth(prog(f, K3.stalls, 26)));
	const forkO = prog(f, K3.stalls, 10) * (1 - prog(f, K3.orA, 14));
	const changed = prog(f, K3.orA + 10, 12);
	const rowAt = [K3.noDamage, K3.repaired, K3.noColony, K3.orA];
	const brk = K3.survival + 4;
	const rowDim = prog(f, brk + 40, 16);
	const C = (i: number) => (i === 2 ? GREY_INK : INK);
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={0} at={-100} />
				{/* lens: b01's strand, b02's dimer and repair */}
				<rect x={80} y={268} width={380} height={150} rx={20} fill="#fffdf8" stroke={EDGE} strokeWidth={2.5} opacity={prog(f, 0, 12)} />
				<g opacity={prog(f, 4, 12)}>
					<SlimStrand x={sx} y={sy} n={n} pitch={pitch} kink={{i: 2, amt: Math.max(k1, many)}} />
					<SlimStrand x={sx + n * pitch} y={sy} n={n} pitch={pitch} kink={{i: 2, amt: many}} rung={i => (i === 1 && changed > 0.01 ? {color: TERRA, w: 6, o: 1} : undefined)} />
				</g>
				<Fork x={forkX} y={sy} o={forkO} />
				<RepairBlob x={lerp(sx + 330, kinkX, blobT)} y={lerp(sy - 50, sy - 30, blobT)} s={0.7} o={blobO} />
				<GTag x={270} y={432} text="mutagens video: UV joins neighbouring T's" at={K3.joins} out={K3.too + 30} size={20} anchor="middle" />
				{/* the cell */}
				<Pl p={PLATES.yeast} cx={220} cy={640} w={240} o={prog(f, 0, 14)} />
				<Sx x={220} y={790} text="one yeast cell" size={28} color={INK_SOFT} hand anchor="middle" at={K3.four - 10} />
				{/* the fork rows */}
				{ROWS.map((t, i) => {
					const at = rowAt[i];
					const y = ROW_Y[i];
					const dimK = i === 2 ? 0 : rowDim;
					return (
						<g key={i}>
							{f >= at ? <DrawPath d={`M${350},${640} C${450},${640} ${460},${y - 12} ${560},${y - 12}`} at={at} dur={14} color={i === 2 ? GREYT : INK_SOFT} width={3} /> : null}
							<Sx x={580} y={y} text={t} size={31} color={dimK > 0.5 ? GREY_INK : C(i)} hand weight={700} at={at + 6} />
						</g>
					);
				})}
				<ZoomWin x={1500} y={ROW_Y[0] - 12} r={44} p={PLATES.p000} u={1016} v={953} zoom={1.7} o={prog(f, K3.noDamage + 10, 12)} />
				<ZoomWin x={1500} y={ROW_Y[1] - 12} r={44} p={PLATES.p000} u={1139} v={1034} zoom={1.7} o={prog(f, K3.repaired + 10, 12)} />
				<ZoomWin x={1500} y={ROW_Y[2] - 12} r={44} p={PLATES.agar} u={1000} v={1000} zoom={1.7} o={prog(f, K3.noColony + 6, 12)} ring={GREYT} />
				<ZoomWin x={1500} y={ROW_Y[3] - 12} r={44} p={PLATES.p000} u={929} v={1074} zoom={1.7} o={prog(f, K3.looks, 12)} />
				<Sx x={1500} y={ROW_Y[3] - 2} text="?" size={40} color={TERRA} weight={800} anchor="middle" at={K3.looks + 8} />
				{/* the survivors bracket */}
				{f >= brk ? (
					<g>
						<DrawPath d={`M1570,${ROW_Y[0] - 50} L1590,${ROW_Y[0] - 50} L1590,${ROW_Y[1] + 20} L1570,${ROW_Y[1] + 20}`} at={brk} dur={14} color={TEAL} width={5} />
						<DrawPath d={`M1570,${ROW_Y[3] - 50} L1590,${ROW_Y[3] - 50} L1590,${ROW_Y[3] + 20} L1570,${ROW_Y[3] + 20}`} at={brk + 8} dur={12} color={TEAL} width={5} />
						<DrawPath d={`M1570,${ROW_Y[2] - 46} L1590,${ROW_Y[2] - 46} L1590,${ROW_Y[2] + 16} L1570,${ROW_Y[2] + 16}`} at={brk + 16} dur={12} color={GREYT} width={4} />
					</g>
				) : null}
				<Sx x={1608} y={ROW_Y[0] + 2} text="counted:" size={30} color={TEAL} hand weight={700} at={brk + 6} />
				<Sx x={1608} y={ROW_Y[0] + 40} text="survivors" size={30} color={TEAL} hand weight={700} at={brk + 6} />
				<Sx x={1608} y={ROW_Y[3] + 2} text="counted" size={28} color={TEAL} hand weight={700} at={brk + 14} />
				<Sx x={1608} y={ROW_Y[2] - 2} text="not" size={26} color={GREY_INK} hand weight={700} at={brk + 20} />
				<Sx x={1608} y={ROW_Y[2] + 30} text="counted" size={26} color={GREY_INK} hand weight={700} at={brk + 20} />
				<CTag x={580} y={ROW_Y[3] + 26} text="mutants hide here" at={K3.counted} color={TERRA} size={32} />
				{void K3.lives}
			</Overlay>
		</>
	);
};

// ---------- 4. Who collects the data ----------
const K4 = cues(S('who-collects'), {teacher: 'a teacher collects', uvc: 'gives out UVC', burn: 'burn skin', interlocked: 'interlocked cabinet', switches: 'switches the lamp off', analysis: 'is the analysis'});
export const SceneWho: React.FC = () => {
	const f = useCurrentFrame();
	const slide = smooth(prog(f, K4.analysis - 6, 26));
	const cab = {cx: lerp(560, 330, slide), cy: lerp(560, 520, slide), w: lerp(700, 440, slide)};
	const pt = pbPt(PLATES.cabinet, cab.cx, cab.cy, cab.w);
	const latch = pt(CAB.latch[0], CAB.latch[1]);
	const disp = pt(CAB.display[0], CAB.display[1]);
	const k = cab.w / (PLATES.cabinet.box[2] - PLATES.cabinet.box[0]);
	const lit = prog(f, K4.interlocked + 6, 10);
	const hazOut = K4.analysis - 6;
	const haz = 'UVC: the shortest-wavelength UV, used in germicidal lamps; burns skin and eyes';
	return (
		<>
			<Heading text={QUESTION} at={-200} size={54} />
			<Overlay>
				<Rail lit={1} at={4} />
				<Bench />
				<GTag x={110} y={276} text="in this practical, a teacher collects the data" at={K4.teacher} out={K4.analysis} size={24} />
				<Pl p={PLATES.cabinet} cx={cab.cx} cy={cab.cy} w={cab.w} o={prog(f, 0, 14)} />
				<GTag x={cab.cx} y={cab.cy + plH(PLATES.cabinet, cab.w) / 2 + 8} text="door closed, lamp off" at={10} out={K4.uvc} size={22} anchor="middle" />
				{/* display writes "lamp off" when the interlock lights */}
				<Sx x={disp[0]} y={disp[1] + 8 * k} text="lamp off" size={Math.max(10, 22 * k)} color="#7be0a4" weight={800} anchor="middle" at={K4.switches} />
				<Interlock x={latch[0] + 10} y={latch[1] - 74 * (cab.w / 700)} lit={lit} s={cab.w / 700} o={prog(f, K4.interlocked, 12)} />
				<CTag x={1290} y={300} text={haz} at={K4.uvc} out={hazOut} color={TERRA} size={30} maxW={520} />
				<GTag x={1290} y={300 + ctagH(haz, 30, 520) + 18} text="trained staff only" at={K4.burn} out={hazOut} size={24} />
				<CTag x={110} y={850} text="interlock: door open → lamp off" at={K4.interlocked + 10} color={GREEN} size={32} />
				{/* the empty analysis table */}
				<Sx x={700} y={350} text="your job: the analysis" size={40} color={AMBER_INK} hand weight={700} at={K4.analysis + 14} />
				<Table x={700} y={380} cols={[{w: 240, head: 'exposure (s)', color: VIOLET}, {w: 200, head: 'plate 1'}, {w: 200, head: 'plate 2'}, {w: 200, head: 'plate 3'}, {w: 300, head: 'mean', color: AMBER_INK}]} rows={5} cell={() => undefined} at={K4.analysis + 10} rowH={66} />
				<CornerTag at={K4.analysis + 20} />
				{void TEAL}{void AMBER}{void INK}{void GREY_INK}{void clamp01}
			</Overlay>
		</>
	);
};
