// M6 B13 scenes 1 to 4: two cases at opposite ends of the evidence (Bt cotton, grown since 1996; a gene drive
// mosquito, lab cages only) and an untipped balance; the four questions drawn as the weighing board's rows (a
// pros-and-cons list fails to tip the balance; "more yield" bounces off the biodiversity row; a balance with an empty
// "provided that ..." weight under each column); Bt cotton through the four rows; the gene drive through the same four.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {Heading, Overlay, Sx} from '../bio-m5-b13/shared';
import {GTag} from '../bio-m6-b01/parts';
import {TickG, Tg} from '../bio-m6-b07/parts';
import {S} from './common';
import {
	AMBER, AMBER_INK, BOARD, Balance, CARD, CellLines, ChromoMini, ColHead, EDGE, FillBar, GREYT, GREY_INK, INK, INK_SOFT, LBL, MiniLadder, MiniLevels, MosqG,
	NativeFlower, OffRow, PLATES, Pill, Pl, ROWY, ROW_H, RefugeStrip, ReturnArrow, Rg, RowFrames, SeasonField, clamp01, colsAt, headPlate, ladderRungY, lerp,
	platePt, prog, smooth, thumbBox, vis,
} from './parts';
import type {CL, ColG, RK} from './parts';

// ---------- shared board pieces ----------
/** Text opacity for a column (narrow columns hide their text). */
export const textO = (c: ColG) => clamp01((c.w - 520) / 90);
export type BtT = {large: number; eighty: number; species: number; native: number; cater: number; stop: number; spray: number; gain: number};
export type GdT = {enormous: number; cages: number; kind: number; lost: number; animals: number; spread: number; recall: number; borders: number; many: number; gain: number};
export const PAST_BT: BtT = {large: -100, eighty: -100, species: -100, native: -100, cater: -100, stop: -100, spray: -100, gain: -100};
export const PAST_GD: GdT = {enormous: -100, cages: -100, kind: -100, lost: -100, animals: -100, spread: -100, recall: -100, borders: -100, many: -100, gain: -100};
export const btLines = (T: BtT): CL[][] => [
	[{t: 'about 85% less insecticide', at: T.large + 8, dimAt: T.species}, {t: '(with better pest management)', at: T.large + 18, dimAt: T.species}],
	[
		{t: 'more insect species (species level)', at: T.species + 6, dimAt: T.native, glyph: 'up'},
		{t: 'vs sprayed cotton', at: T.species + 14, vs: true},
		{t: 'native cottons: no fertile hybrids', at: T.native + 10, out: T.cater, dimAt: 1e9},
	],
	[{t: 'can be stopped next season,', at: T.stop + 6, dimAt: T.gain}, {t: 'with more spraying', at: T.spray, dimAt: T.gain}],
	[{t: 'growers and nearby wildlife gain;', at: T.gain + 6, vs: true}, {t: 'resistance risk shared by growers', at: T.gain + 16, vs: true}],
];
/** Bt resistance note (row 1, line 3 after the native-cotton note). */
export const btResist = (T: BtT): CL => ({t: 'resistance: a genetic change, slowed by refuges', at: T.cater + 10, dimAt: T.stop});
export const gdLines = (T: GdT): CL[][] => [
	[{t: 'need: hundreds of thousands of deaths', at: T.enormous + 8, dimAt: T.cages}, {t: 'a year (WHO)', at: T.enormous + 14, dimAt: T.cages}, {t: 'evidence: lab cages only', at: T.cages + 8, dimAt: T.kind}],
	[
		{t: 'target mosquito population: down if the drive works;', at: T.kind + 6, dimAt: T.spread, glyph: 'down'},
		{t: 'local species loss: uncertain', at: T.kind + 22, dimAt: T.spread, glyph: 'q'},
		{t: 'ecosystem effect: uncertain', at: T.animals + 6, dimAt: T.spread, glyph: 'q'},
	],
	[{t: 'spreads by itself:', at: T.spread + 8, dimAt: T.gain}, {t: 'may not be recallable', at: T.recall, dimAt: T.gain}],
	[{t: 'risk shared across borders: who agrees?', at: T.borders + 10, dimAt: 1e9}, {t: '2025: a national government halted related trials', at: T.many + 10, vs: true, size: 24}],
];
const BT_SIZE = 30, GD_SIZE = 28;

/** Bt cotton cells (text and, when wide, thumbnails). */
export const BtCells: React.FC<{c: ColG; T: BtT; o?: number}> = ({c, T, o = 1}) => {
	const f = useCurrentFrame();
	const L = btLines(T);
	const tO = textO(c) * o;
	const th = c.wide * o;
	const b0 = thumbBox(c, 0), b1 = thumbBox(c, 1), b2 = thumbBox(c, 2);
	return (
		<g>
			{L.map((lines, r) => <CellLines key={r} c={c} r={r} lines={r === 1 ? [...lines.slice(0, 2), lines[2]] : lines} size={BT_SIZE} o={tO} />)}
			<CellLines c={c} r={1} lines={[{t: '', at: -1e9}, {t: '', at: -1e9}, btResist(T)]} size={BT_SIZE} o={tO} />
			{th > 0.01 ? (
				<g opacity={th}>
					{/* benefit: spray bars and the ladder's top rung */}
					<g opacity={prog(f, T.large, 12)}>
						<Sx x={b0.x0} y={b0.y0 + 30} text="before Bt" size={20} color={GREY_INK} hand />
						<FillBar x={b0.x0 + 90} y={b0.y0 + 14} w={130} h={18} p={prog(f, T.large, 20)} color="#9aa3ab" />
						<Sx x={b0.x0} y={b0.y0 + 70} text="with Bt" size={20} color={GREY_INK} hand />
						<FillBar x={b0.x0 + 90} y={b0.y0 + 54} w={130} h={18} p={0.15 * prog(f, T.eighty, 20)} color={AMBER} />
						<MiniLadder x={b0.x1 - 60} y={b0.cy} h={96} w={30} lit={f >= T.large + 30 ? 4 : -1} color={GREYT} />
						<Pl p={PLATES.cotton} cx={b0.x1 - 22} cy={ladderRungY(b0.cy, 96, 4) + 4} w={34} o={prog(f, T.large + 30, 10)} />
					</g>
					{/* biodiversity: the native cotton flower the gene can't reach, then resistance and the refuge */}
					<g opacity={vis(f, T.native, T.cater, 12)}>
						<Pl p={PLATES.cotton} cx={b1.x0 + 40} cy={b1.cy} w={60} />
						<path d={`M${b1.x0 + 80},${b1.cy} L${b1.x0 + 180},${b1.cy}`} stroke={GREYT} strokeWidth={3.5} strokeDasharray="8 6" strokeLinecap="round" fill="none" opacity={prog(f, T.native + 14, 10)} />
						<line x1={b1.x0 + 196} y1={b1.cy - 16} x2={b1.x0 + 196} y2={b1.cy + 16} stroke={GREYT} strokeWidth={4} strokeLinecap="round" opacity={prog(f, T.native + 24, 8)} />
						<NativeFlower x={b1.x1 - 50} y={b1.cy} r={30} o={prog(f, T.native + 4, 12)} />
					</g>
					<g opacity={prog(f, T.cater, 12)}>
						<Pl p={PLATES.larva} cx={b1.x0 + 40} cy={b1.cy - 4} w={74} />
						{(['A', 'B', 'A', 'B', 'A', 'new'] as RK[]).map((k, i) => <Rg key={i} x={b1.x0 + 96 + (i % 3) * 26} y={b1.cy - 14 + Math.floor(i / 3) * 26} r={9} k={k} o={i === 5 ? prog(f, T.cater + 24, 10) : 1} />)}
						<RefugeStrip x={b1.x1 - 120} y={b1.cy - 30} w={110} h={48} o={prog(f, T.cater + 40, 12)} />
					</g>
					{/* undo: the field switches back across season ticks */}
					<g opacity={prog(f, T.stop, 12)}>
						<SeasonField x={b2.x0 + 20} y={b2.cy - 14} w={150} phase={prog(f, T.stop + 16, 10)} />
						<ReturnArrow x={b2.x0 + 95} y={b2.cy - 22} w={110} kind="solid" draw={prog(f, T.stop + 30, 20)} />
					</g>
				</g>
			) : null}
		</g>
	);
};
const MOSQ_CLOUD: [number, number][] = [[0, 0], [44, -20], [86, 4], [22, 30], [66, 34], [110, -18], [130, 26]];
/** Gene drive cells (text and, when wide, thumbnails). */
export const GdCells: React.FC<{c: ColG; T: GdT; o?: number}> = ({c, T, o = 1}) => {
	const f = useCurrentFrame();
	const L = gdLines(T);
	const tO = textO(c) * o;
	const th = c.wide * o;
	const b0 = thumbBox(c, 0), b1 = thumbBox(c, 1), b2 = thumbBox(c, 2), b3 = thumbBox(c, 3);
	const pulse = vis(f, T.lost, T.lost + 50, 8) * (0.5 + 0.5 * Math.sin((f - T.lost) / 4));
	const L1 = L[1].map((l, i) => (i === 1 ? {...l, pulse} : l));
	const front = smooth(prog(f, T.borders + 10, 60));
	const mp = platePt(PLATES.map, b3.x0 + 120, b3.cy, 230, 1010, 1180);
	return (
		<g>
			<CellLines c={c} r={0} lines={L[0]} size={GD_SIZE} o={tO} lineH={32} />
			<CellLines c={c} r={1} lines={L1} size={GD_SIZE} o={tO} lineH={33} />
			<CellLines c={c} r={2} lines={L[2]} size={30} o={tO} />
			<CellLines c={c} r={3} lines={L[3]} size={GD_SIZE} o={tO} lineH={36} />
			{th > 0.01 ? (
				<g opacity={th}>
					{/* benefit: a long need bar, then the ladder's "works in animals" rung and the cage */}
					<g opacity={vis(f, T.enormous, T.cages + 10, 12)}>
						<FillBar x={b0.x0 + 10} y={b0.cy - 12} w={280} h={24} p={prog(f, T.enormous, 24)} color="#9aa3ab" />
					</g>
					<g opacity={prog(f, T.cages, 12)}>
						<MiniLadder x={b0.x0 + 40} y={b0.cy} h={110} w={34} lit={2} color={GREYT} />
						<Pl p={PLATES.mosquito} cx={b0.x0 + 92} cy={ladderRungY(b0.cy, 110, 2) - 8} w={50} />
						<Pl p={PLATES.cage} cx={b0.x1 - 70} cy={b0.cy} w={110} />
					</g>
					{/* biodiversity: one kind among many mosquito kinds; then the food-web fragment */}
					<g opacity={prog(f, T.kind, 12)}>
						{MOSQ_CLOUD.map(([dx, dy], i) => <MosqG key={i} x={b1.x0 + 24 + dx} y={b1.cy + dy} s={1.35} hot={i === 2} />)}
					</g>
					<g opacity={prog(f, T.animals, 12)}>
						<Pl p={PLATES.finch} cx={b1.x1 - 100} cy={b1.cy - 26} w={62} />
						<Pl p={PLATES.frog} cx={b1.x1 - 34} cy={b1.cy + 28} w={66} />
						<MosqG x={b1.x1 - 128} y={b1.cy + 34} s={0.9} hot />
						<path d={`M${b1.x1 - 112},${b1.cy + 26} L${b1.x1 - 100},${b1.cy + 2}`} stroke={GREYT} strokeWidth={2.5} strokeDasharray="4 4" />
						<path d={`M${b1.x1 - 112},${b1.cy + 38} L${b1.x1 - 70},${b1.cy + 34}`} stroke={GREYT} strokeWidth={2.5} strokeDasharray="4 4" />
					</g>
					{/* undo: the drive copies across, nearly every offspring carries it, the return arrow breaks off */}
					<g opacity={prog(f, T.spread, 12)}>
						<ChromoMini x={b2.x0 + 36} y={b2.cy} h={100} copy={prog(f, T.spread + 10, 24)} />
						<OffRow x={b2.x0 + 100} y={b2.cy + 30} n={8} gap={26} s={0.5} carry={i => (i === 6 ? 0 : prog(f, T.spread + 30 + i * 3, 8))} o={i => prog(f, T.spread + 24 + i * 3, 8)} />
						<ReturnArrow x={b2.x0 + 190} y={b2.cy - 2} w={130} kind="broken" draw={prog(f, T.recall, 20)} o={prog(f, T.recall, 8)} />
					</g>
					{/* who: the map with a front crossing a border */}
					<g opacity={prog(f, T.borders, 12)}>
						<Pl p={PLATES.map} cx={b3.x0 + 120} cy={b3.cy} w={230} />
						<defs><clipPath id="b13-gd-front"><rect x={b3.x0} y={b3.y0} width={b3.x1 - b3.x0} height={b3.y1 - b3.y0} /></clipPath></defs>
						<g clipPath="url(#b13-gd-front)">
							<circle cx={mp[0] - 6} cy={mp[1] - 6} r={lerp(4, 30, front)} fill={AMBER} fillOpacity={0.18} stroke={AMBER} strokeWidth={2.5} strokeDasharray="6 5" />
						</g>
						<line x1={mp[0] + 12} y1={mp[1] - 26} x2={mp[0] + 4} y2={mp[1] + 22} stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="6 4" />
					</g>
				</g>
			) : null}
		</g>
	);
};
/** The balances at the foot of the board (one per column). */
export const FootBalances: React.FC<{cols: [ColG, ColG]; o?: number; tilt?: [number, number]; glow?: [number, number]; lit?: [number, number]; y?: number; s?: number; label?: boolean}> = ({cols, o = 1, tilt = [0, 0], glow = [0, 0], lit = [1, 1], y = 1010, s = 1.15, label = true}) => (
	<g opacity={o}>
		{cols.map((c, i) => (
			<g key={i} opacity={0.45 + 0.55 * lit[i]}>
				<Balance x={(c.x0 + c.x1) / 2} y={y} s={s} tilt={tilt[i]} weight={1} label={label ? 'provided that ...' : undefined} glow={glow[i]} />
			</g>
		))}
	</g>
);

// ---------- 1. Hook ----------
const K1 = cues(S('hook'), {two: 'Two genetic techniques', grown: 'grown in Australian', thirty: 'about thirty years', drive: 'A gene drive mosquito', cage: 'never left a lab cage', benefit: 'a big benefit', change: 'change biodiversity', same: 'the same verdict', weigh: 'weigh the benefits'});
export const HOOK = {bt: {cx: 470, cy: 420, w: 280}, cage: {cx: 1450, cy: 420, w: 360}, mosq: {cx: 1450, cy: 450, w: 150}, bal: {x: 960, y: 800, s: 1.4}};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const fade = 1 - prog(f, K1.weigh, 14);
	return (
		<>
			<Heading text="Worth it? Provided that..." at={K1.weigh} size={64} />
			<Overlay>
				<Pl p={PLATES.cotton} cx={HOOK.bt.cx} cy={HOOK.bt.cy} w={HOOK.bt.w} o={prog(f, K1.two + 30, 16)} />
				<Pl p={PLATES.cage} cx={HOOK.cage.cx} cy={HOOK.cage.cy} w={HOOK.cage.w} o={prog(f, K1.drive - 6, 16)} />
				<Pl p={PLATES.mosquito} cx={HOOK.mosq.cx} cy={HOOK.mosq.cy} w={HOOK.mosq.w} o={prog(f, K1.drive, 16)} />
				<GTag x={HOOK.bt.cx} y={600} text="grown since 1996" at={K1.thirty} out={K1.cage} size={28} anchor="middle" />
				<GTag x={HOOK.cage.cx} y={620} text="lab cages only" at={K1.cage + 6} out={K1.weigh} size={28} anchor="middle" />
				<g opacity={fade}>
					<TickG x={HOOK.bt.cx} y={690} at={K1.benefit + 6} s={40} />
					<TickG x={HOOK.cage.cx} y={700} at={K1.benefit + 12} s={40} />
				</g>
				<g opacity={prog(f, K1.change, 12)}>
					<MiniLevels x={900} y={330} w={120} h={150} color={INK_SOFT} labels marks={[{r: 0, kind: 'q'}, {r: 1, kind: 'q'}, {r: 2, kind: 'q'}]} />
				</g>
				<Balance x={HOOK.bal.x} y={HOOK.bal.y} s={HOOK.bal.s} o={prog(f, K1.same, 14)} q={prog(f, K1.same + 10, 10)} />
				{void K1.grown}{void CARD}{void EDGE}
			</Overlay>
		</>
	);
};

// ---------- 2. Four questions for every case ----------
const K2 = cues(S('four-questions'), {list: 'Listing pros', isnt: "isn't weighing", same4: 'the same four questions', big: 'How big is the benefit', level: 'Which level of biodiversity', harvest: 'A bigger harvest', undone: 'Can the change be undone', who: 'who gains', verdict: 'finish with a verdict', cond: 'condition attached', worth: 'when is it worth'});
const C0 = colsAt(0);
export const SceneFour: React.FC = () => {
	const f = useCurrentFrame();
	const fly = smooth(prog(f, 0, 26));
	const hp = [headPlate(C0[0], 'bt'), headPlate(C0[1], 'gd')];
	const headO = prog(f, 22, 10);
	const listO = vis(f, K2.list, K2.same4, 12);
	const wob = f >= K2.list + 14 ? 9 * Math.sin((f - K2.list - 14) / 3.2) * Math.exp(-(f - K2.list - 14) / 30) : 0;
	const balY = lerp(HOOK.bal.y, 560, smooth(prog(f, 0, 30)));
	const at = [K2.big, K2.level, K2.undone, K2.who];
	const nxt = [K2.level, K2.undone, K2.who, K2.verdict];
	const slide = f < K2.harvest ? 0 : f - K2.harvest;
	const yieldX = slide < 18 ? lerp(1900, 1240, smooth(slide / 18)) : lerp(1240, 1560, smooth((slide - 18) / 22));
	const yieldO = prog(f, K2.harvest, 6) * (1 - prog(f, K2.harvest + 40, 14));
	return (
		<>
			<Heading text="Four questions for every case" at={4} size={56} />
			<Overlay>
				{/* plates fly from the hook to the column heads */}
				{headO < 0.99 ? (
					<g opacity={1 - headO}>
						<Pl p={PLATES.cotton} cx={lerp(HOOK.bt.cx, hp[0].cx, fly)} cy={lerp(HOOK.bt.cy, hp[0].cy, fly)} w={lerp(HOOK.bt.w, hp[0].w, fly)} />
						<Pl p={PLATES.mosquito} cx={lerp(HOOK.mosq.cx, hp[1].cx, fly)} cy={lerp(HOOK.mosq.cy, hp[1].cy, fly)} w={lerp(HOOK.mosq.w, hp[1].w, fly)} />
						<Pl p={PLATES.cage} cx={HOOK.cage.cx} cy={HOOK.cage.cy} w={HOOK.cage.w} o={1 - fly} />
					</g>
				) : null}
				<ColHead c={C0[0]} kind="bt" o={headO} />
				<ColHead c={C0[1]} kind="gd" o={headO} />
				{/* a list of pros and cons does not tip the balance */}
				<g opacity={1 - prog(f, K2.same4, 12)}>
					<Balance x={960} y={balY} s={1.4} tilt={wob} />
				</g>
				<g opacity={listO} transform={`translate(0,${lerp(60, 0, smooth(prog(f, K2.list, 16)))})`}>
					{[['pros', 700], ['cons', 1020]].map(([t, x]) => (
						<g key={t as string}>
							<rect x={(x as number) - 20} y={640} width={260} height={270} rx={16} fill={CARD} stroke={EDGE} strokeWidth={2.5} />
							<Sx x={(x as number) + 10} y={690} text={t as string} size={36} color={INK} weight={800} />
							{[0, 1, 2, 3].map(k => <line key={k} x1={(x as number) + 10} y1={740 + k * 44} x2={(x as number) + 200 - (k % 2) * 40} y2={740 + k * 44} stroke={GREYT} strokeWidth={6} strokeLinecap="round" />)}
						</g>
					))}
				</g>
				<Tg x={960} y={970} text="a list doesn't decide" at={K2.isnt} out={K2.same4} anchor="middle" size={40} />
				{/* the four rows */}
				<RowFrames rows={at.map((a, r) => prog(f, K2.same4 + 6 + r * 8, 14))} labels={at.map(a => prog(f, a - 6, 12))} lit={at.map((a, r) => vis(f, a, nxt[r], 10))} />
				<GTag x={LBL.x0} y={892} text="builds on the ethics checklist" at={K2.big} size={24} />
				<g opacity={yieldO}><Pill x={yieldX} y={ROWY[1] + 38} text="more yield" size={32} lit={1} /></g>
				<FootBalances cols={C0} o={prog(f, K2.cond, 14)} />
				{void K2.worth}{void BOARD}{void ROW_H}{void INK}{void AMBER_INK}
			</Overlay>
		</>
	);
};

// ---------- 3. Bt cotton through the questions ----------
const K3 = cues(S('bt-cotton'), {start: 'Start with Bt', large: 'large and measured', eighty: 'eighty-five per cent', species: 'species level', native: 'native cotton species', cater: 'caterpillars evolving resistance', refuge: 'refuge crops', stop: 'stop planting it', spray: 'spray more again', gain: 'Growers gain'});
export const SceneBt: React.FC = () => {
	const f = useCurrentFrame();
	const cols = colsAt(-smooth(prog(f, K3.start, 30)));
	const T: BtT = {large: K3.large, eighty: K3.eighty, species: K3.species, native: K3.native, cater: K3.cater, stop: K3.stop, spray: K3.spray, gain: K3.gain};
	const lit = [vis(f, K3.large, K3.species, 10), vis(f, K3.species, K3.stop, 10), vis(f, K3.stop, K3.gain, 10), prog(f, K3.gain, 10)];
	return (
		<>
			<Heading text="Bt cotton: the four questions" at={4} size={56} />
			<Overlay>
				<RowFrames lit={lit} />
				<ColHead c={cols[0]} kind="bt" />
				<ColHead c={cols[1]} kind="gd" lit={0} />
				<BtCells c={cols[0]} T={T} />
				<GdPlaceholder c={cols[1]} />
				<FootBalances cols={cols} lit={[1, 0]} />
				{void K3.refuge}
			</Overlay>
		</>
	);
};
/** Empty grey dashes in a column not yet weighed. */
export const GdPlaceholder: React.FC<{c: ColG; o?: number}> = ({c, o = 1}) => (
	<g opacity={o * 0.6}>
		{ROWY.map((y, r) => <line key={r} x1={c.x0 + 30} y1={y + ROW_H / 2} x2={c.x1 - 30} y2={y + ROW_H / 2} stroke={GREYT} strokeWidth={3} strokeDasharray="10 10" />)}
	</g>
);

// ---------- 4. The gene drive through the same questions ----------
const K4 = cues(S('gene-drive'), {now: 'Now the gene drive', enormous: 'enormous', cages: 'lab cages, not the wild', aim: 'The aim is to crash', kind: 'one kind of malaria mosquito', lost: 'lost locally', animals: 'animals that eat them', spread: 'spread by itself', recall: 'possible to recall', gain: "The people who'd gain", borders: 'cross borders', many: 'many countries', agree: 'need to agree'});
export const SceneGd: React.FC = () => {
	const f = useCurrentFrame();
	const cols = colsAt(lerp(-1, 1, smooth(prog(f, K4.now, 34))));
	const T: GdT = {enormous: K4.enormous, cages: K4.cages, kind: K4.kind, lost: K4.lost, animals: K4.animals, spread: K4.spread, recall: K4.recall, borders: K4.borders, many: K4.many, gain: K4.gain};
	const lit = [vis(f, K4.enormous, K4.kind, 10), vis(f, K4.kind, K4.spread, 10), vis(f, K4.spread, K4.gain, 10), prog(f, K4.gain, 10)];
	return (
		<>
			<Heading text="The gene drive: the same four questions" at={4} size={56} />
			<Overlay>
				<RowFrames lit={lit} />
				<ColHead c={cols[0]} kind="bt" lit={0} />
				<ColHead c={cols[1]} kind="gd" />
				<BtCells c={cols[0]} T={PAST_BT} o={0.8} />
				<GdCells c={cols[1]} T={T} />
				<FootBalances cols={cols} lit={[0, 1]} />
				{void K4.aim}{void K4.agree}{void GREY_INK}
			</Overlay>
		</>
	);
};
