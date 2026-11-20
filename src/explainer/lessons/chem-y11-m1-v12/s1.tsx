// Y11 Chem M1 V12 scenes 1 to 4: V11's final frame (the table with P, Cl, K and Fe lit and the "2?, 10?, 6?"
// brackets) shrinking into the hook board (the 1869 and 1897 timeline, the painted period 3 samples, the brackets
// resolving into 2, 10, 6 and 14 as the blocks tint), the period board (period 3 as eight large cells under their
// samples, with the table reader stepping sodium to argon and on to potassium), the block board (the full grid with
// block tints, width brackets and the three lit endings) and the group board (groups 1 and 17 as tall columns, the
// configuration stacks with their outer terms ringed, the valence rules and helium).
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {SceneHandoff as V11Handoff, G18} from '../chem-y11-m1-v11/s3';
import {dur as v11dur} from '../chem-y11-m1-v11/common';
import {CLJAR, NA, P3, pw, sc, p3h} from './common';
import {
	BINK, Bracket, Chip, D_FILL, D_INK, DrawBox, DrawPath, F_INK, Fade, Framed, GOLD_T, GREEN_T, Heading, INK, LitCell, NAVY_T, P_FILL, P_INK, PGrid, PenArrow, PenRing, PlateB, RED_T,
	Reader, Rich, S_FILL, S_INK, SVG, Sx, Write, boxRC, cellC, cellXY, lerpG, prog, richW, smooth, stepZ,
} from './parts';
import type {PG, Seg} from './parts';

// ---------- 1. hook: a table older than the electron (opens on V11's final frame) ----------
const K1 = cues(sc('hook'), {mend: 'Mendeleev', grouping: 'by grouping', ninety: 'ninety-seven', yet: 'Yet look', shape: 'shape', two: 'two columns', ten: 'ten', six: 'six', exactly: 'exactly', cap: 'capacities', lets: "Let's see", how: 'how'});
const GA: PG = {x: 400, y: 350, cw: 62, ch: 46, fg: 14};
const G0: PG = {...G18, fg: 14};
const BR = [
	{c0: 1, c1: 2, q: '2?', n: '2', ink: S_INK, at: K1.two},
	{c0: 3, c1: 12, q: '10?', n: '10', ink: D_INK, at: K1.ten},
	{c0: 13, c1: 18, q: '6?', n: '6', ink: P_INK, at: K1.six},
] as const;
/** The period 3 sample row: shared scale s for the 1254 px plates, jars at jarH; returns centre x and height. */
const sampleRow = (x0: number, x1: number, s: number, jarH: number) => {
	const hs = P3.map((_, i) => p3h(i, s, jarH));
	const ws = P3.map((p, i) => pw(p.p, hs[i]));
	const gap = (x1 - x0 - ws.reduce((a, b) => a + b, 0)) / (P3.length - 1);
	let x = x0;
	return P3.map((p, i) => { const cx = x + ws[i] / 2; x += ws[i] + gap; return {...p, cx, h: hs[i], w: ws[i]}; });
};
const ROW1 = sampleRow(440, 1790, 0.19, 182);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, 30, 42));
	const g = lerpG(G0, GA, m);
	const X = (c: number) => g.x + (c - 1) * g.cw;
	const tint = {s: 0.8 * prog(f, K1.two, 16), d: 0.8 * prog(f, K1.ten, 16), p: 0.8 * prog(f, K1.six, 16), f: 0.8 * prog(f, K1.lets - 20, 16)};
	const pulse = 1 + 0.2 * Math.sin(Math.PI * Math.min(1, prog(f, K1.shape, 26)));
	const fIn = prog(f, 728, 14);
	const fRowsY = g.y + 7 * g.ch + (g.fg ?? 14);
	return (
		<SVG>
			{/* my own board under V11's frozen final frame, which fades away as the scene starts */}
			<PGrid g={g} sym={1 - smooth(prog(f, 30, 24))} symSize={Math.round(g.ch * 0.42)} zs={22} tint={tint} fRows={fIn} sw={2.5} />
			{[{z: 15, end: '…3p^{3}', c: P_INK, fl: P_FILL}, {z: 17, end: '…3p^{5}', c: P_INK, fl: P_FILL}, {z: 19, end: '…4s^{1}', c: S_INK, fl: S_FILL}, {z: 26, end: '…3d^{6}', c: D_INK, fl: D_FILL}].map(l => (
				<LitCell key={l.z} g={g} z={l.z} at={-1000} out={34} color={l.c} fill={l.fl} sub={l.end} pop={1.3} />
			))}
			{BR.map((b, i) => {
				const res = f >= b.at;
				const cx = (X(b.c0) + X(b.c1 + 1)) / 2;
				const size = res ? 52 : 38 + 6 * m;
				const s = res ? 1 + 0.25 * (1 - smooth(prog(f, b.at, 12))) : pulse;
				const ly = g.y - 50 - 0.35 * size;
				return (
					<g key={i}>
						<Bracket a={[X(b.c0) + 4, g.y - 16]} b={[X(b.c1 + 1) - 4, g.y - 16]} at={-1000} color={b.ink} depth={-16} />
						<g transform={`translate(${cx},${ly}) scale(${s}) translate(${-cx},${-ly})`}>
							<Sx x={cx} y={g.y - 50} text={res ? b.n : b.q} size={size} color={b.ink} anchor="middle" weight={800} at={-1000} />
						</g>
					</g>
				);
			})}
			<Fade at={-1000} out={6} d={22}>
				<Freeze frame={v11dur('handoff') - 1}><V11Handoff /></Freeze>
			</Fade>
			{/* the timeline */}
			<Fade at={K1.mend} out={600}>
				<DrawPath d="M140,178 L1790,178" at={K1.mend} dur={30} color={INK} width={4} />
				<path d="M1772,166 L1792,178 L1772,190" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
				<circle cx={200} cy={178} r={11} fill={NAVY_T} />
				<Rich x={180} y={154} segs={[{t: '1869: ', c: NAVY_T}, {t: 'elements arranged by properties'}]} size={44} at={K1.mend + 4} />
				<circle cx={1180} cy={178} r={11} fill={RED_T} opacity={prog(f, K1.ninety, 8)} />
				<Rich x={1160} y={154} segs={[{t: '1897: ', c: RED_T}, {t: 'electron discovered'}]} size={44} at={K1.ninety} />
				<Bracket a={[204, 194]} b={[1176, 194]} at={K1.ninety + 12} color={RED_T} depth={14} />
				<Write x={690} y={244} text="28 years too early to know" at={K1.ninety + 22} size={42} color={RED_T} anchor="middle" />
			</Fade>
			{/* the real elements Mendeleev sorted */}
			<Fade at={K1.mend} out={722}>
				{ROW1.map((p, i) => <PlateB key={p.z} p={p.p} cx={p.cx} bottom={905} h={p.h} at={K1.mend + 10 + i * 4} dy={24} />)}
				<Bracket a={[ROW1[0].cx - ROW1[0].w / 2, 918]} b={[ROW1[7].cx + ROW1[7].w / 2, 918]} at={K1.grouping + 30} color={INK} depth={14} />
				<Write x={110} y={800} text="sorted by" at={K1.grouping + 24} size={42} color={INK} />
				<Write x={110} y={850} text="what they do" at={K1.grouping + 36} size={42} color={INK} />
				<PenArrow a={[250, 868]} b={[ROW1[0].cx - ROW1[0].w / 2 - 14, 860]} at={K1.grouping + 44} color={INK} bend={0.25} />
			</Fade>
			{/* capacities: chips rise from the brackets */}
			{BR.map((b, i) => {
				const cx = (X(b.c0) + X(b.c1 + 1)) / 2;
				const t = smooth(prog(f, K1.cap + i * 6, 16));
				const lab = b.n === '2' ? 's holds 2' : b.n === '10' ? 'd holds 10' : 'p holds 6';
				return <Chip key={i} x={cx} y={300 - 120 * t} segs={[{t: lab, c: b.ink}]} at={K1.cap + i * 6} size={40} color={b.ink} anchor="middle" />;
			})}
			<Write x={1500} y={232} text="same numbers" at={K1.cap + 24} size={42} color={INK} />
			{/* the f block */}
			{fIn > 0.005 ? (
				<g>
					<Bracket a={[X(4) + 4, fRowsY + 2 * g.ch + 12]} b={[X(18) - 4, fRowsY + 2 * g.ch + 12]} at={K1.lets - 8} color={F_INK} depth={14} />
					<Sx x={X(18) + 22} y={fRowsY + g.ch + 18} text="14" size={52} color={F_INK} weight={800} at={K1.lets - 4} />
				</g>
			) : null}
			<Heading text="Groups, periods and blocks" at={K1.how - 8} />
			{void K1.yet}{void K1.exactly}
		</SVG>
	);
};

// ---------- 2. periods: the outer shell ----------
const K2 = cues(sc('periods'), {rows: 'Start with', occupied: 'its highest occupied', across: 'Across period', level3: 'is filling level', sodium: 'Sodium ends', argon: 'Argon ends', full: 'both full', k: 'potassium', into: 'into level four', begins: 'a new period'});
const GS2: PG = {x: 146, y: 205, cw: 30, ch: 22, fg: 6};
const CB = {x0: 134, y: 618, w: 196, h: 168, gap: 12};
const cbx = (i: number) => CB.x0 + i * (CB.w + CB.gap);
const ENDS: Seg[][] = [
	[{t: '3s^{1}', c: S_INK}],
	[{t: '3s^{2}', c: S_INK}],
	[{t: '3s^{2} ', c: S_INK}, {t: '3p^{1}', c: P_INK}],
	[{t: '3s^{2} ', c: S_INK}, {t: '3p^{2}', c: P_INK}],
	[{t: '3s^{2} ', c: S_INK}, {t: '3p^{3}', c: P_INK}],
	[{t: '3s^{2} ', c: S_INK}, {t: '3p^{4}', c: P_INK}],
	[{t: '3s^{2} ', c: S_INK}, {t: '3p^{5}', c: P_INK}],
	[{t: '3s^{2} ', c: S_INK}, {t: '3p^{6}', c: P_INK}],
];
const ROW2 = sampleRow(CB.x0 + 20, cbx(7) + CB.w - 20, 0.19, 186).map((p, i) => ({...p, cx: cbx(i) + CB.w / 2}));
export const ScenePeriods: React.FC = () => {
	const f = useCurrentFrame();
	const wave = (i: number) => K2.across + i * 26;
	const steps: [number, number][] = [[0, 11], ...P3.map((p, i) => [wave(i), p.z] as [number, number]), [K2.sodium, 11], [K2.argon, 18], [K2.k, 19]];
	const z = stepZ(f, steps);
	const cur = z >= 11 && z <= 18 ? z - 11 : -1;
	const kx = cbx(0), ky = 806;
	return (
		<SVG>
			<Heading text="Periods: the outer shell" at={0} />
			{/* small table with row numbers */}
			<PGrid g={GS2} tint={{s: 0.75, p: 0.75, d: 0.75, f: 0.75}} fRows={0} />
			{Array.from({length: 7}, (_, i) => <Sx key={i} x={GS2.x - 10} y={GS2.y + i * GS2.ch + 19} text={`${i + 1}`} size={26} color={NAVY_T} anchor="end" weight={800} at={-1000} />)}
			<DrawBox {...boxRC(GS2, 3, 3, 1, 18)} at={-1000} color={NAVY_T} width={4} pad={2} />
			<LitCell g={GS2} z={z} at={-1000} color={NAVY_T} fill="#dbe3f3" pop={1.25} noSym />
			<Write x={1500} y={380} text="period: a row" at={K2.rows + 20} size={42} color={NAVY_T} />
			<Reader z={z} L={{x: 760, y: 222, w: 240, dx: 262}} />
			<Chip x={760} y={330} segs={[{t: 'period', c: NAVY_T}, {t: ' = highest occupied level'}]} at={K2.occupied} size={44} color={INK} />
			{/* samples above their cells */}
			{ROW2.map(p => <PlateB key={p.z} p={p.p} cx={p.cx} bottom={600} h={p.h} />)}
			{P3.map((p, i) => {
				const x = cbx(i), on = i === cur;
				return (
					<g key={p.z}>
						<rect x={x} y={CB.y} width={CB.w} height={CB.h} rx={10} fill={on ? '#dbe3f3' : '#fffdf8'} stroke={on ? NAVY_T : INK} strokeWidth={on ? 7 : 3.5} />
						<Sx x={x + 12} y={CB.y + 32} text={`${p.z}`} size={28} color={INK} weight={800} at={-1000} />
						<Sx x={x + CB.w / 2} y={CB.y + 92} text={['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'][i]} size={64} color={INK} anchor="middle" weight={800} at={-1000} />
						<Rich x={x + CB.w / 2} y={CB.y + 146} segs={ENDS[i]} size={34} anchor="middle" at={wave(i)} />
					</g>
				);
			})}
			{/* all level 3 */}
			<Fade at={K2.level3} out={K2.k - 12}>
				<Bracket a={[cbx(0) + 10, CB.y + CB.h + 10]} b={[cbx(7) + CB.w - 10, CB.y + CB.h + 10]} at={K2.level3} color={NAVY_T} depth={16} />
				<Write x={960} y={872} text="all level 3" at={K2.level3 + 10} size={42} color={NAVY_T} anchor="middle" />
			</Fade>
			<PenRing cx={cbx(0) + CB.w / 2} cy={CB.y + 134} rx={58} ry={30} at={K2.sodium + 10} out={K2.k - 12} color={S_INK} seed={4} />
			<PenRing cx={cbx(7) + CB.w / 2} cy={CB.y + 134} rx={88} ry={32} at={K2.full} color={NAVY_T} seed={6} />
			{/* potassium starts row 4 */}
			<Fade at={K2.k}>
				<rect x={kx} y={ky} width={CB.w} height={124} rx={10} fill="#dbe3f3" stroke={NAVY_T} strokeWidth={6} />
				<Sx x={kx + 12} y={ky + 30} text="19" size={28} color={INK} weight={800} at={-1000} />
				<Sx x={kx + 70} y={ky + 84} text="K" size={60} color={INK} anchor="middle" weight={800} at={-1000} />
				<Rich x={kx + 140} y={ky + 84} segs={[{t: '4s^{1}', c: S_INK}]} size={38} anchor="middle" />
			</Fade>
			<PenArrow a={[cbx(7) + CB.w / 2, CB.y + CB.h + 6]} b={[kx + CB.w + 10, ky + 70]} at={K2.into} color={NAVY_T} bend={-0.07} width={5} />
			<Write x={1000} y={846} text="level 4: new row" at={K2.begins} size={42} color={NAVY_T} anchor="middle" />
		</SVG>
	);
};

// ---------- 3. blocks: the last subshell ----------
const K3 = cues(sc('blocks'), {now: 'Now the blocks', into: 'went into', s: 's block', p: 'p block', d: 'd block', f: 'f block', wide: 'wide', aswide: 'as wide', hold: 'hold'});
const GB: PG = {x: 230, y: 300, cw: 80, ch: 58, fg: 20};
export const SceneBlocks: React.FC = () => {
	const f = useCurrentFrame();
	const t = (at: number) => 0.6 + 0.4 * prog(f, at, 16);
	const tint = {s: t(K3.s), p: t(K3.p), d: t(K3.d), f: t(K3.f)};
	const X = (c: number) => GB.x + (c - 1) * GB.cw;
	const fy = GB.y + 7 * GB.ch + (GB.fg ?? 0);
	const tags = [
		{c0: 1, c1: 2, txt: 's: 2', b: 's', at: K3.s},
		{c0: 13, c1: 18, txt: 'p: 6', b: 'p', at: K3.p},
		{c0: 3, c1: 12, txt: 'd: 10', b: 'd', at: K3.d},
	] as const;
	const glow = 1 + 0.08 * Math.sin(Math.PI * Math.min(1, prog(f, K3.hold, 20)));
	const kc = cellC(GB, 19), fe = cellC(GB, 26), pc = cellC(GB, 15);
	return (
		<SVG>
			<Heading text="Blocks: the last subshell" at={0} />
			<Rich x={1824} y={150} segs={[{t: 'block', c: NAVY_T}, {t: ': which subshell fills last'}]} size={38} anchor="end" at={K3.into - 20} />
			<PGrid g={GB} tint={tint} />
			<LitCell g={GB} z={19} at={-1000} color={S_INK} fill={S_FILL} pop={1.15} />
			<LitCell g={GB} z={26} at={-1000} color={D_INK} fill={D_FILL} pop={1.15} />
			<LitCell g={GB} z={15} at={-1000} color={P_INK} fill={P_FILL} pop={1.15} />
			{/* the three endings, in their block colours */}
			<Chip x={400} y={392} segs={[{t: 'K: …4s^{1}', c: S_INK}]} at={K3.into} size={38} color={S_INK} />
			<Chip x={640} y={392} segs={[{t: 'Fe: …3d^{6}', c: D_INK}]} at={K3.into + 6} size={38} color={D_INK} />
			<Chip x={900} y={392} segs={[{t: 'P: …3p^{3}', c: P_INK}]} at={K3.into + 12} size={38} color={P_INK} />
			{f >= K3.into ? <>
				<DrawPath d={`M430,452 L${kc[0] + 20},${kc[1] - 22}`} at={K3.into} dur={10} color={S_INK} width={3.5} />
				<DrawPath d={`M720,452 L${fe[0]},${fe[1] - 24}`} at={K3.into + 6} dur={10} color={D_INK} width={3.5} />
				<DrawPath d={`M1080,421 L${pc[0] - 36},${pc[1]}`} at={K3.into + 12} dur={10} color={P_INK} width={3.5} />
			</> : null}
			<Sx x={GB.x + 92} y={340} text="H: a non-metal" size={30} color={INK} weight={800} at={-1000} />
			<Sx x={X(18) - 12} y={340} text="He: 1s^{2}, placed with the noble gases" size={30} color={INK} anchor="end" weight={800} at={-1000} />
			{/* widths */}
			{tags.map((tg, i) => (
				<g key={i}>
					<Bracket a={[X(tg.c0) + 4, GB.y - 14]} b={[X(tg.c1 + 1) - 4, GB.y - 14]} at={tg.at} color={BINK[tg.b]} depth={-14} />
					<Write x={(X(tg.c0) + X(tg.c1 + 1)) / 2} y={GB.y - 44} text={tg.txt} at={tg.at + 6} size={42} color={BINK[tg.b]} anchor="middle" />
				</g>
			))}
			<DrawBox x={X(4)} y={fy} w={14 * GB.cw} h={2 * GB.ch} at={K3.f} color={F_INK} width={5} pad={5} />
			<Write x={X(18) + 18} y={fy + GB.ch + 16} text="f: 14" at={K3.wide} size={42} color={F_INK} />
			<g transform={`translate(560,905) scale(${glow}) translate(-560,-905)`}>
				<Framed x={100} y={925} segs={[{t: 'block width = subshell capacity'}]} at={K3.aswide} size={52} stroke={NAVY_T} />
			</g>
			{void K3.now}
		</SVG>
	);
};

// ---------- 4. groups: the same outer arrangement ----------
const K4 = cues(sc('groups'), {columns: 'columns are groups', valence: 'Valence electrons are', li: 'lithium', na: 'sodium', k: 'potassium', one: ['one', 4], always: 'always one', down17: 'Down group seventeen', every: 'every element', p5: 'p five', so: 'so seven', g12: 'For groups one', g13: 'For groups thirteen', subtract: 'subtract ten', helium: 'Helium has'});
const GS4: PG = {x: 880, y: 196, cw: 22, ch: 17, fg: 5};
const CC = {w: 150, h: 104, gap: 8, y: 455};
const ccy = (i: number) => CC.y + i * (CC.h + CC.gap);
const G1 = [{z: 3, s: 'Li', name: 'lithium', pre: '1s^{2} ', end: '2s^{1}'}, {z: 11, s: 'Na', name: 'sodium', pre: '[Ne] ', end: '3s^{1}'}, {z: 19, s: 'K', name: 'potassium', pre: '[Ar] ', end: '4s^{1}'}];
const G17 = [{z: 9, s: 'F', name: 'fluorine', end: '2s^{2} 2p^{5}'}, {z: 17, s: 'Cl', name: 'chlorine', end: '3s^{2} 3p^{5}'}, {z: 35, s: 'Br', name: 'bromine', end: '4s^{2} 4p^{5}'}];
const BigCell: React.FC<{x: number; y: number; s: string; name: string; z: number; on: boolean; color: string; fill: string}> = ({x, y, s, name, z, on, color, fill}) => (
	<g>
		<rect x={x} y={y} width={CC.w} height={CC.h} rx={10} fill={on ? fill : '#fffdf8'} stroke={on ? color : INK} strokeWidth={on ? 7 : 3.5} />
		<Sx x={x + 10} y={y + 28} text={`${z}`} size={26} color={INK} weight={800} at={-1000} />
		<Sx x={x + CC.w / 2 + 12} y={y + 64} text={s} size={56} color={INK} anchor="middle" weight={800} at={-1000} />
		<Sx x={x + CC.w / 2} y={y + 94} text={name} size={26} color={INK} anchor="middle" weight={800} at={-1000} />
	</g>
);
export const SceneGroups: React.FC = () => {
	const f = useCurrentFrame();
	const g1at = [K4.li, K4.na, K4.k], g17at = [K4.down17 + 10, K4.every + 8, K4.every + 40];
	const steps: [number, number][] = [[0, 3], [K4.li, 3], [K4.na, 11], [K4.k, 19], [g17at[0], 9], [g17at[1], 17], [g17at[2], 35], [K4.helium, 2]];
	const z = stepZ(f, steps);
	const A1 = 650, A17 = 1170;
	const r2: Seg[] = [{t: 'groups 13 to 18: group number '}, {t: '− 10', c: GOLD_T}];
	const r2w = richW(r2, 44), m10 = richW([{t: '− 10'}], 44);
	return (
		<SVG>
			<Heading text="Groups: the same outer arrangement" at={0} />
			<Rich x={96} y={222} segs={[{t: 'group', c: GOLD_T}, {t: ': a column'}]} size={38} at={K4.columns} />
			<Rich x={96} y={276} segs={[{t: 'valence', c: GOLD_T}, {t: ' electrons: in the outer shell'}]} size={38} at={K4.valence} />
			<PGrid g={GS4} tint={{s: 0.75, p: 0.75, d: 0.75, f: 0.75}} fRows={0} />
			<DrawBox {...boxRC(GS4, 2, 4, 1, 1)} at={K4.li} color={S_INK} width={3.5} pad={2} />
			<DrawBox {...boxRC(GS4, 2, 4, 17, 17)} at={K4.down17} color={P_INK} width={3.5} pad={2} />
			<LitCell g={GS4} z={z} at={-1000} color={NAVY_T} fill="#dbe3f3" pop={1.3} noSym />
			<Sx x={GS4.x} y={GS4.y + 9 * GS4.ch + 34} text="the table reader" size={28} color={INK} weight={800} at={-1000} />
			<Reader z={z} L={{x: 1340, y: 222, w: 220, dx: 244, dy: 122, cols: 2}} />
			{/* group 1 */}
			<Sx x={330 + CC.w / 2} y={CC.y - 16} text="group 1" size={34} color={GOLD_T} anchor="middle" weight={800} at={-1000} />
			<PlateB p={NA} cx={195} bottom={ccy(2) + CC.h} h={250} />
			<Sx x={195} y={ccy(2) + CC.h + 30} text="sodium" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			{G1.map((e, i) => (
				<g key={e.z}>
					<BigCell x={330} y={ccy(i)} s={e.s} name={e.name} z={e.z} on={z === e.z} color={S_INK} fill={S_FILL} />
					<Rich x={A1} y={ccy(i) + 66} segs={[{t: e.pre}]} size={44} anchor="end" opacity={0.3 + 0.7 * prog(f, g1at[i], 12)} />
					<Rich x={A1 + 8} y={ccy(i) + 66} segs={[{t: e.end, c: S_INK}]} size={44} opacity={0.3 + 0.7 * prog(f, g1at[i], 12)} />
					<PenRing cx={A1 + 46} cy={ccy(i) + 52} rx={44} ry={36} at={K4.one + i * 5} color={S_INK} seed={3 + i} />
				</g>
			))}
			<Bracket a={[772, ccy(0) + 14]} b={[772, ccy(2) + CC.h - 14]} at={K4.always} color={S_INK} depth={-18} />
			<Write x={804} y={ccy(1) + 66} text="1 each" at={K4.always + 10} size={42} color={GOLD_T} />
			{/* group 17 */}
			<Sx x={960 + CC.w / 2} y={CC.y - 16} text="group 17" size={34} color={GOLD_T} anchor="middle" weight={800} at={-1000} />
			{G17.map((e, i) => (
				<g key={e.z}>
					<BigCell x={960} y={ccy(i)} s={e.s} name={e.name} z={e.z} on={z === e.z} color={P_INK} fill={P_FILL} />
					<Rich x={A17} y={ccy(i) + 66} segs={[{t: '…'}]} size={44} anchor="end" opacity={0.3 + 0.7 * prog(f, g17at[i], 12)} />
					<Rich x={A17 + 8} y={ccy(i) + 66} segs={[{t: e.end, c: P_INK}]} size={44} opacity={0.3 + 0.7 * prog(f, g17at[i], 12)} />
					<PenRing cx={A17 + 96} cy={ccy(i) + 52} rx={92} ry={38} at={K4.so + i * 5} color={P_INK} seed={7 + i} />
				</g>
			))}
			<Bracket a={[1384, ccy(0) + 14]} b={[1384, ccy(2) + CC.h - 14]} at={K4.so + 14} color={P_INK} depth={-18} />
			<Write x={1414} y={ccy(1) + 66} text="7 each" at={K4.so + 22} size={42} color={GOLD_T} />
			<PlateB p={CLJAR} cx={1700} bottom={ccy(2) + CC.h} h={290} />
			<Sx x={1700} y={ccy(2) + CC.h + 30} text="chlorine" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			{/* the rules */}
			<Rich x={100} y={866} segs={[{t: 'groups 1, 2: valence electrons = group number'}]} size={44} at={K4.g12} />
			<Rich x={100} y={926} segs={r2} size={44} at={K4.g13} />
			{f >= K4.subtract ? <DrawPath d={`M${100 + r2w - m10 - 4},${940} L${100 + r2w + 4},${938}`} at={K4.subtract} dur={10} color={GOLD_T} width={6} /> : null}
			<Rich x={1080} y={926} segs={[{t: 'He 1s^{2}: 2 valence electrons', c: NAVY_T}]} size={38} at={K4.helium} />
		</SVG>
	);
};
void G18; void cellXY; void Chip;
