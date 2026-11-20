// Y11 Chem M1 V11 scenes 1 to 6: ws-v03's final frame (the data-sheet table with P, Cl and Fe, the s p d f chips), chlorine's seventeen electrons (the gas
// jar, the data-sheet cell and the Stage 5 shell atom), levels splitting into subshells, orbitals as boxes of two
// electrons, reading "3p⁵" as an address that must add up, and the filling run on the subshell ladder (lowest energy
// first, 4s below 3d) with the potassium prediction.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {cues} from '../../cues';
import {CLJAR, configSoFar, hold, pw, sc, unpaired} from './common';
import {
	Ball, Bracket, Chip, D_INK, DrawPath, F_INK, Fade, GREEN_T, Heading, INK, Ladder, Letter, NAVY_T, OBox, ORow, P_FILL, P_INK, PTable, PenArrow, PenRing, Plate, RED_T, RO, Rich, S_INK,
	Cloud, QCell, WS_PT, WsV03FinalFrame, wsSym, ShellAtom, Stairs, Sx, TINT, TickMark, Write, EArrow, hundC, kf, lerp, prog, richW, smooth, SVG, AMB,
} from './parts';
import type {LadG, PTG, Seg} from './parts';

// ---------- 1. hook (opens on chem-y11-ws-v03's final frame, WsV03FinalFrame in parts.tsx) ----------
const K1 = cues(sc('hook'), {chlorine: 'chlorine is', seventeen: 'element seventeen', atom: 'chlorine atom', stage: 'In Stage', two: 'two eight', eight: 'eight seven', seven: 'seven one', shell: 'each shell', but: 'But in', inside: 'inside each', s: 's p d', p: 'p d and', d: 'd and f', f: 'f', where: 'So where exactly', spdf: 'Spdf notation', address: 'an address', electron: 'every electron'});
const G0: PTG = WS_PT;
const GS: PTG = {x: 1100, y: 214, cw: 40, ch: 34};
const lerpPT = (a: PTG, b: PTG, t: number): PTG => ({x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), cw: lerp(a.cw, b.cw, t), ch: lerp(a.ch, b.ch, t)});
const CELL = {x: 420, y: 250, w: 220, h: 240};
/** The enlarged chlorine cell, drawn at 220 x 240 and placed by a transform. */
const BigCl: React.FC<{x: number; y: number; s: number}> = ({x, y, s}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<rect x={0} y={0} width={CELL.w} height={CELL.h} rx={12} fill={P_FILL} stroke={P_INK} strokeWidth={6} />
		<Sx x={16} y={52} text="17" size={44} color={INK} weight={800} at={-1000} />
		<Sx x={CELL.w / 2} y={168} text="Cl" size={110} color={INK} anchor="middle" weight={800} at={-1000} />
		<Sx x={CELL.w / 2} y={218} text="chlorine" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
	</g>
);
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const m = smooth(prog(f, K1.seventeen + 6, 36));
	const g = lerpPT(G0, GS, m);
	// the Cl cell's place in the table, then its own place on the board
	const c0 = {x: G0.x + 16 * G0.cw, y: G0.y + 2 * G0.ch};
	const cm = smooth(prog(f, K1.seventeen + 10, 32));
	const cx = lerp(c0.x, CELL.x, cm), cy = lerp(c0.y, CELL.y, cm), cs = lerp(G0.cw / CELL.w, 1, cm);
	const counts = [f >= K1.two ? 2 : 0, f >= K1.eight ? 8 : 0, f >= K1.seven ? 7 : 0];
	const jh = 420, jw = pw(CLJAR, jh);
	return (
		<SVG>
			{/* the data-sheet table: full size, then small at the top right */}
			<Fade at={-1000}>
				<PTable g={g} plain zSize={0} o={m} lit={[{z: 17, at: K1.seventeen + 30, color: P_INK, fill: P_FILL}]} />
				<PTable g={g} symFor={wsSym} o={1 - smooth(m * 2.2)} lit={[{z: 17, at: K1.chlorine, color: P_INK, fill: P_FILL, out: K1.seventeen + 10}]} />
			</Fade>
			{/* ws-v03's final frame: its own pieces leave (the table stays; the hook's table underneath has the same geometry and symbols) */}
			<Fade at={-1000} out={4} d={20}>
				<WsV03FinalFrame />
			</Fade>
			<Fade at={-1000} out={K1.chlorine} d={8}><QCell z={17} /></Fade>
			<Sx x={GS.x} y={GS.y - 14} text="data sheet" size={30} color={INK} weight={800} at={K1.seventeen + 40} />
			{f >= K1.seventeen + 10 ? <BigCl x={cx} y={cy} s={cs} /> : null}
			<Plate p={CLJAR} x={110} y={250} h={jh} at={K1.seventeen + 24} dy={20} />
			<Sx x={110 + jw / 2} y={712} text="chlorine gas" size={30} color={INK} anchor="middle" weight={800} at={K1.seventeen + 34} />
			<PenArrow a={[110 + jw + 8, 420]} b={[CELL.x - 10, 400]} at={K1.atom} color={INK} bend={0.2} />
			<Write x={CELL.x} y={560} text="17 electrons" at={K1.atom} size={46} color={INK} />
			<Write x={CELL.x} y={612} text="in each atom" at={K1.atom + 14} size={46} color={INK} />
			{/* Stage 5 shells */}
			<Fade at={K1.seventeen + 30}>
				<ShellAtom cx={900} cy={560} R={190} counts={counts} hiOuter={prog(f, K1.where, 10)} />
			</Fade>
			<Sx x={900} y={824} text="Stage 5: shells" size={30} color={INK} anchor="middle" weight={800} at={K1.seventeen + 36} />
			<Write x={900} y={886} text="2, 8, 7" at={K1.shell} size={52} color={NAVY_T} anchor="middle" />
			{/* orbital types inside each level */}
			<Sx x={1130} y={510} text="inside each level: orbital types" size={30} color={INK} weight={800} at={K1.seventeen + 40} />
			<g opacity={0.3 * prog(f, K1.seventeen + 40, 14) * (1 - prog(f, K1.f + 12, 10))}>{(['s', 'p', 'd', 'f'] as const).map((t, i) => <Letter key={t} x={1180 + i * 120} y={580} t={t} />)}</g>
			<Letter x={1180} y={580} t="s" at={K1.s} />
			<Letter x={1300} y={580} t="p" at={K1.p} />
			<Letter x={1420} y={580} t="d" at={K1.d} />
			<Letter x={1540} y={580} t="f" at={K1.f} />
			<PenRing cx={900} cy={560} rx={222} ry={222} at={K1.where} color={AMB} seed={5} />
			<Write x={1130} y={706} text="where, exactly?" at={K1.where + 8} size={46} color={INK} />
			<Rich x={1130} y={820} segs={[{t: '1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{5}'}]} size={44} at={K1.spdf} />
			<Sx x={1130 + richW([{t: '1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{5}'}], 44) + 24} y={826} text="?" size={60} color={D_INK} weight={800} at={K1.spdf + 8} />
			<Write x={1130} y={890} text="the address" at={K1.address} size={46} color={INK} />
			<Heading text="spdf notation: where are the electrons?" at={40} />
			{void K1.but}
		</SVG>
	);
};

// ---------- 2. levels split into subshells ----------
const K2 = cues(sc('subshells'), {start: 'Start with', split: 'is split into', sub: 'A subshell is', l1: 'Level one', s1: 's subshell', l2: 'Level two', s2: ['s and p', 1], p2: 'p', l3: 'Level three', s3: ['s', 3], p3: ['p', 2], d3: 'd', l4: 'And level four', s4: ['s', 4], p4: ['p', 3], d4: ['d', 2], f4: 'f', so: 'So the level', tells: 'tells you', has: 'it has'});
const LY2 = [850, 690, 530, 370];
const LX = 620, LSP = 150, LR = 47;
export const SceneSubshells: React.FC = () => {
	const f = useCurrentFrame();
	const sprouts: {lvl: number; t: 's' | 'p' | 'd' | 'f'; at: number}[] = [
		{lvl: 0, t: 's', at: K2.s1},
		{lvl: 1, t: 's', at: K2.s2}, {lvl: 1, t: 'p', at: K2.p2},
		{lvl: 2, t: 's', at: K2.s3}, {lvl: 2, t: 'p', at: K2.p3}, {lvl: 2, t: 'd', at: K2.d3},
		{lvl: 3, t: 's', at: K2.s4}, {lvl: 3, t: 'p', at: K2.p4}, {lvl: 3, t: 'd', at: K2.d4}, {lvl: 3, t: 'f', at: K2.f4},
	];
	const glow = prog(f, K2.so, 12);
	return (
		<SVG>
			<Heading text="Levels split into subshells" at={0} />
			<Write x={96} y={250} text="subshell: a group of orbitals of the same type and energy" at={K2.sub} size={38} color={INK} cps={45} />
			{/* energy axis */}
			<line x1={100} x2={100} y1={910} y2={330} stroke={INK} strokeWidth={4} strokeLinecap="round" />
			<path d="M87,352 L100,330 L113,352" fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			<g transform="translate(82,720) rotate(-90)"><Sx x={0} y={0} text="energy" size={34} color={INK} weight={800} at={-1000} /></g>
			{LY2.map((y, i) => (
				<g key={i}>
					<circle cx={180} cy={y} r={46} fill={glow > 0.5 ? '#e4eaf6' : '#fffdf8'} stroke={glow > 0.5 ? NAVY_T : INK} strokeWidth={5} />
					<Sx x={180} y={y + 18} text={`${i + 1}`} size={50} color={glow > 0.5 ? NAVY_T : INK} anchor="middle" weight={800} at={-1000} />
					<line x1={232} x2={520} y1={y} y2={y} stroke={INK} strokeWidth={8} strokeLinecap="round" />
				</g>
			))}
			<Sx x={240} y={LY2[0] + 52} text="energy levels" size={30} color={INK} weight={800} at={-1000} />
			{sprouts.map((s, i) => {
				const y = LY2[s.lvl], k = sprouts.filter(q => q.lvl === s.lvl).indexOf(s), x = LX + k * LSP;
				const x0 = k === 0 ? 520 : x - LSP + LR + 4;
				return (
					<g key={i}>
						<DrawPath d={`M${x0},${y} L${x - LR - 4},${y}`} at={s.at - 4} dur={10} color={TINT[s.t].ink} width={5} />
						<g opacity={0.28 * (1 - prog(f, s.at, 10))}><Letter x={x} y={y} t={s.t} size={60} /></g>
						<Letter x={x} y={y} t={s.t} size={60} at={s.at} />
					</g>
				);
			})}
			<Write x={250} y={318} text="levels have parts" at={K2.split} size={46} color={INK} />
			{/* level n has n types */}
			<Bracket a={[1140, 320]} b={[1140, 900]} at={K2.so} color={NAVY_T} depth={-22} />
			{LY2.map((y, i) => <Sx key={i} x={1190} y={y + 16} text={`${i + 1} type${i ? 's' : ''}`} size={46} color={NAVY_T} weight={800} at={K2.so + 6 + i * 8} />)}
			<Write x={1150} y={300} text="level n: n types" at={K2.tells} size={46} color={NAVY_T} />
			{/* the levels are the Stage 5 shells */}
			<ShellAtom cx={1630} cy={600} R={200} counts={[2, 8, 7]} />
			{[1, 2, 3].map(n => <Sx key={n} x={1630 + 200 * n / 3 + 10} y={600 - 12} text={`${n}`} size={30} color={NAVY_T} weight={800} at={-1000} />)}
			<Sx x={1630} y={850} text="chlorine: levels 1, 2, 3" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Sx x={1630} y={890} text="(the Stage 5 shells)" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			{void K2.start}{void K2.l1}{void K2.l2}{void K2.l3}{void K2.l4}{void K2.has}
		</SVG>
	);
};

// ---------- 3. orbitals, and two electrons each ----------
const K3 = cues(sc('orbitals-capacity'), {regions: 'the regions', s1: 'has one', p3: 'has three', d5: 'has five', f7: 'has seven', key: 'key rule', holds: 'holds at most', spin: 'must spin', opposite: 'opposite directions', draw: 'We draw', box: 'a box', up: 'up arrow', down: 'down arrow', so: 'So an', s2: 'holds two', p6: 'holds six', d10: 'holds ten', f14: 'holds fourteen'});
const R3 = [{t: 's' as const, n: 1, cnt: K3.s1, cap: '2', capAt: K3.s2}, {t: 'p' as const, n: 3, cnt: K3.p3, cap: '6', capAt: K3.p6}, {t: 'd' as const, n: 5, cnt: K3.d5, cap: '10', capAt: K3.d10}, {t: 'f' as const, n: 7, cnt: K3.f7, cap: '14', capAt: K3.f14}];
const RY3 = [300, 450, 600, 750];
export const SceneOrbitals: React.FC = () => {
	const f = useCurrentFrame();
	const B = 110, BX = 1440, BY = 330, BB = 230;
	const t3 = f - K3.down;
	const ty = t3 < 0 ? 0 : t3 < 14 ? smooth(t3 / 14) : t3 < 30 ? 1 - 0.85 * smooth((t3 - 14) / 16) : 0.15;
	const cloudO = 1 - prog(f, K3.key, 14);
	return (
		<SVG>
			<Heading text="Orbitals: boxes of two electrons" at={0} />
			<Write x={96} y={232} text="orbital: a region where an electron is likely to be found" at={K3.regions} size={34} color={INK} cps={45} />
			<Sx x={1110} y={272} text="orbitals" size={30} color={INK} weight={800} at={-1000} />
			<Sx x={1260} y={272} text="holds" size={30} color={INK} weight={800} at={K3.so} />
			{R3.map((r, i) => {
				const y = RY3[i], fill = prog(f, r.capAt - 4, 16) * 2 * r.n;
				return (
					<g key={r.t}>
						<Letter x={170} y={y + B / 2} t={r.t} size={56} />
						<ORow x={250} y={y} b={B} cells={hundC(r.n, fill)} t={r.t} />
						<Sx x={1130} y={y + 74} text={`${r.n}`} size={56} color={TINT[r.t].ink} weight={800} at={r.cnt} />
						<Sx x={1270} y={y + 74} text={r.cap} size={56} color={TINT[r.t].ink} weight={800} at={r.capAt} />
					</g>
				);
			})}
			{/* the orbital cloud (Schrödinger model), then one box close up */}
			{cloudO > 0.01 ? <g opacity={cloudO}>
				<Cloud cx={1600} cy={500} R={190} />
				<Sx x={1600} y={760} text="an orbital: a cloud of likely positions" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			</g> : null}
			<Fade at={K3.key}>
				<OBox x={BX} y={BY} b={BB} t="p" up={prog(f, K3.spin, 10)} down={prog(f, K3.opposite, 10)} />
			</Fade>
			<PenRing cx={BX + BB / 2} cy={BY + BB / 2} rx={160} ry={160} at={K3.opposite + 12} color={INK} seed={7} />
			<Write x={1380} y={660} text="one up, one down" at={K3.opposite + 10} size={46} color={INK} />
			<Sx x={1380} y={712} text="Pauli: max two, opposite spins" size={30} color={INK} weight={800} at={K3.opposite + 20} />
			<Sx x={1380} y={754} text="spin: an up and a down arrow" size={30} color={INK} weight={800} at={K3.draw} />
			{t3 >= 0 ? <g>
				<EArrow x={BX + BB / 2} y={BY - 80 + ty * 70} L={120} up p={1} color={RED_T} />
				{f >= K3.down + 26 ? <><DrawPath d={`M${BX + 55},${BY - 150} L${BX + 175},${BY - 20}`} at={K3.down + 26} dur={10} color={RED_T} width={8} /><DrawPath d={`M${BX + 175},${BY - 150} L${BX + 55},${BY - 20}`} at={K3.down + 30} dur={10} color={RED_T} width={8} /></> : null}
			</g> : null}
			<Write x={1460} y={205} text="never three" at={K3.down + 28} size={46} color={RED_T} anchor="end" />
			<Sx x={250} y={910} text="level capacity 2n^{2}: 2, 8, 18, 32" size={30} color={INK} weight={800} at={K3.f14 + 10} />
			{void K3.key}{void K3.box}{void K3.up}{void K3.holds}
		</SVG>
	);
};

// ---------- 4. reading the notation ----------
const K4 = cues(sc('notation'), {take: 'Take three', level: 'energy level', type: 'type of', five: 'raised five', it: 'in it', addr: "So it's an", there: 'live there', full: 'A full configuration', every: 'every occupied', like: 'like this', add: 'always add up', atom: 'the atom'});
const CL_TERMS = ['1s^{2}', '2s^{2}', '2p^{6}', '3s^{2}', '3p^{5}'];
const SEP = '   ';
/** x of the start of each term of a line of terms drawn at x0 (with sep between them). */
export const termXs = (terms: string[], x0: number, size: number, sep = SEP) => {
	const out: {x0: number; x1: number}[] = [];
	let x = x0;
	terms.forEach(t => { const w = richW([{t}], size); out.push({x0: x, x1: x + w}); x += w + richW([{t: sep}], size); });
	return out;
};
export const SceneNotation: React.FC = () => {
	const f = useCurrentFrame();
	const X = 560, Y = 560, SZ = 300;
	const w3 = richW([{t: '3'}], SZ), wp = richW([{t: 'p'}], SZ);
	const LX0 = 400, LYL = 830, LS = 56;
	const xs = termXs(CL_TERMS, LX0, LS);
	const segs: Seg[] = CL_TERMS.map((t, i) => ({t: t + (i < 4 ? SEP : ''), at: K4.full + 6 + i * 10}));
	const groups = [[0, 0, '2'], [1, 2, '8'], [3, 4, '7']] as const;
	const jh = 440, jw = pw(CLJAR, jh);
	const sum = '2 + 2 + 6 + 2 + 5 = 17';
	return (
		<SVG>
			<Heading text="Reading the notation" at={0} />
			<Plate p={CLJAR} x={110} y={240} h={jh} />
			<Sx x={110 + jw / 2} y={720} text="chlorine" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<Rich x={X} y={Y} segs={[{t: '3', c: NAVY_T}, {t: 'p', c: P_INK}, {t: '^{5}', c: INK}]} size={SZ} />
			<Write x={350} y={300} text="level" at={K4.level} size={50} color={NAVY_T} />
			<PenArrow a={[470, 300]} b={[X + 30, 360]} at={K4.level + 6} color={NAVY_T} bend={-0.2} />
			<Write x={360} y={680} text="subshell type" at={K4.type} size={50} color={P_INK} />
			<PenArrow a={[640, 650]} b={[X + w3 + wp * 0.45, 628]} at={K4.type + 6} color={P_INK} bend={0.25} />
			<Write x={1080} y={262} text="electrons in it" at={K4.five} size={50} color={INK} />
			<PenArrow a={[1075, 270]} b={[X + w3 + wp + 70, 300]} at={K4.five + 6} color={INK} bend={0.2} />
			<Fade at={K4.five}>
				<ORow x={1090} y={290} b={100} gap={12} cells={hundC(3, prog(f, K4.it - 4, 24) * 5)} t="p" />
			</Fade>
			{/* the address card */}
			<Fade at={K4.addr}>
				<rect x={1060} y={440} width={770} height={230} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={5} />
				<Sx x={1084} y={428} text="an address" size={34} color={INK} hand at={-1000} />
				<Rich x={1090} y={510} segs={[{t: 'level 3', c: NAVY_T}, {t: ', '}, {t: 'p subshell', c: P_INK}]} size={48} />
			</Fade>
			<Rich x={1090} y={580} segs={[{t: '5 electrons live there'}]} size={48} at={K4.there} />
			<Sx x={1090} y={640} text="not a point: anywhere in the orbital region" size={30} color={INK} weight={800} at={K4.there + 10} />
			{/* chlorine's full line, grouped into Stage 5 shells, and its sum */}
			<Rich x={LX0} y={LYL} segs={segs} size={LS} at={K4.full} />
			{groups.map(([a, b, n], i) => (
				<g key={i}>
					<Bracket a={[xs[b].x1 + 6, 762]} b={[xs[a].x0 - 6, 762]} at={K4.like + i * 6} color={NAVY_T} depth={16} />
					<Sx x={(xs[a].x0 + xs[b].x1) / 2} y={734} text={n} size={44} color={NAVY_T} anchor="middle" weight={800} at={K4.like + 8 + i * 6} />
				</g>
			))}
			<Sx x={xs[4].x1 + 40} y={736} text="Stage 5 shells" size={30} color={NAVY_T} weight={800} at={K4.like + 24} />
			<Rich x={LX0} y={910} segs={[{t: sum, c: NAVY_T}]} size={48} at={K4.add} />
			<TickMark x={LX0 + richW([{t: sum}], 48) + 40} y={896} at={K4.add + 14} color={NAVY_T} />
			<Sx x={LX0 + richW([{t: sum}], 48) + 90} y={910} text="electrons" size={34} color={NAVY_T} weight={800} at={K4.atom} />
			{void K4.take}{void K4.every}
		</SVG>
	);
};

// ---------- the ladder used in scenes 5 to 7 ----------
export const LG5: LadG = {b: 64, gap: 6, col: {s: 210, p: 380, d: 650}, y: {'1s': 830, '2s': 664, '2p': 610, '3s': 498, '3p': 444, '4s': 356, '3d': 306, '4p': 236}};
export const EnergyAxis: React.FC<{x: number; y0: number; y1: number}> = ({x, y0, y1}) => (
	<g>
		<line x1={x} x2={x} y1={y0} y2={y1} stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<path d={`M${x - 13},${y1 + 22} L${x},${y1} L${x + 13},${y1 + 22}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
		<g transform={`translate(${x - 14},${(y0 + y1) / 2 + 60}) rotate(-90)`}><Sx x={0} y={0} text="energy" size={34} color={INK} weight={800} at={-1000} /></g>
	</g>
);
/** The three live readouts, all read from the same electron count. */
export const Readouts: React.FC<{n: number; x?: number; y?: number; config?: boolean}> = ({n, x = 1080, y = 230, config = true}) => (
	<g>
		<RO x={x} y={y} w={340} label="electrons placed" text={`${n}`} />
		<RO x={x + 380} y={y} w={340} label="unpaired" text={`${unpaired(n)}`} color="#0b625d" />
		{config ? <RO x={x} y={y + 150} w={740} label="configuration so far" text={n > 0 ? configSoFar(n) : ' '} size={46} /> : null}
	</g>
);
const ORDER_BADGE: {s: keyof LadG['y']; x: number}[] = [{s: '1s', x: 304}, {s: '2s', x: 304}, {s: '2p', x: 614}, {s: '3s', x: 304}, {s: '3p', x: 614}, {s: '4s', x: 304}, {s: '3d', x: 566}];
const Badge: React.FC<{x: number; y: number; n: number; at: number; color?: string}> = ({x, y, n, at, color = NAVY_T}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 10);
	if (v <= 0.005) return null;
	return (
		<g opacity={v}>
			<circle cx={x} cy={y} r={21} fill={color} />
			<Sx x={x} y={y + 10} text={`${n}`} size={28} color="#ffffff" anchor="middle" weight={800} at={-1000} />
		</g>
	);
};

// ---------- 5. lowest energy first ----------
const K5 = cues(sc('filling-order'), {which: 'So which', fill: 'Electrons fill', lowest: 'lowest energy subshells', ball: 'a ball settles', step: 'lowest step', mostly: 'Mostly', one: 'One s', two: 'two s', twop: 'two p', three: 'three s', threep: 'three p', but: "But there's", surprise: 'surprise', the4s: 'The four s', lower: 'lower in energy', so4s: 'so four s', first: 'fills first', and3d: 'and three d', it: 'after it'});
const RUN5: [number, number][] = [[K5.fill + 10, 0], [K5.lowest + 30, 2], [K5.one, 2], [K5.two + 12, 4], [K5.twop, 4], [K5.twop + 20, 10], [K5.three, 10], [K5.three + 14, 12], [K5.threep, 12], [K5.threep + 30, 18], [K5.so4s, 18], [K5.first + 8, 20], [K5.and3d, 20], [K5.it, 21]];
export const SceneFilling: React.FC = () => {
	const f = useCurrentFrame();
	const c = kf(f, RUN5), n = Math.floor(c + 1e-6);
	const badgeAt = [K5.one, K5.two, K5.twop, K5.three, K5.threep, K5.so4s, K5.and3d];
	// the ball settles to the lowest step
	const SX = 1300, ST = 82, YS = [900, 850, 806, 768, 736, 710];
	const k = Math.round(kf(f, [[K5.ball - 4, 5], [K5.step + 6, 0]]));
	const bx = SX + (k + 0.5) * ST, by = YS[k];
	return (
		<SVG>
			<Heading text="Lowest energy first" at={0} />
			<EnergyAxis x={80} y0={910} y1={250} />
			<Ladder g={LG5} c={c} />
			{ORDER_BADGE.map((b, i) => <Badge key={b.s} x={b.x} y={(LG5.y[b.s] as number) + 32} n={i + 1} at={badgeAt[i]} color={i >= 5 ? D_INK : NAVY_T} />)}
			<Readouts n={n} />
			<Sx x={1080} y={570} text="Aufbau principle: build up from the lowest energy" size={30} color={INK} weight={800} at={K5.fill} />
			<Write x={340} y={880} text="lowest first" at={K5.lowest} size={46} color={INK} />
			<PenArrow a={[620, 860]} b={[620, 720]} at={K5.lowest + 10} color={INK} bend={0} />
			{/* 4s sits lower than 3d */}
			<DrawPath d={`M330,388 L1010,388`} at={K5.the4s} dur={16} color={AMB} width={4} dash="12 9" />
			<DrawPath d={`M1000,338 L1010,338`} at={K5.the4s} dur={6} color={AMB} width={4} />
			<Bracket a={[1016, 338]} b={[1016, 388]} at={K5.lower} color={D_INK} depth={-16} />
			<Write x={660} y={430} text="4s sits lower" at={K5.lower} size={46} color={D_INK} />
			<PenArrow a={[334, 366]} b={[640, 336]} at={K5.and3d} color={D_INK} bend={0.12} />
			<Sx x={660} y={566} text="4s before 3d" size={44} color={D_INK} weight={800} at={K5.it} />
			{/* the staircase picture */}
			<Sx x={1300} y={660} text="a ball settles on the lowest step" size={30} color={INK} weight={800} at={-1000} />
			<Stairs sx0={SX} step={ST} ys={YS} />
			<Ball x={bx} y={by - 3} r={24} />
			{void K5.which}{void K5.mostly}{void K5.but}{void K5.surprise}{void F_INK}{void S_INK}{void GREEN_T}
		</SVG>
	);
};

// ---------- 6. prediction ----------
const K6 = cues(sc('prediction'), {quick: 'Quick prediction', k: 'Potassium has', once: 'Once three', eighteen: 'holds eighteen', where: 'Where does', go: 'go'});
export const ScenePrediction: React.FC = () => {
	const f = useCurrentFrame();
	const h = hold('prediction');
	const c = kf(f, [[6, 0], [K6.k, 18]]), n = Math.floor(c + 1e-6);
	const bob = Math.sin(f * 0.12) * 6;
	return (
		<SVG>
			<Heading text="Quick prediction" at={0} />
			<EnergyAxis x={80} y0={910} y1={250} />
			<Ladder g={LG5} c={c} />
			<Readouts n={n} />
			<Chip x={1080} y={540} segs={[{t: 'potassium: 19 electrons'}]} at={K6.k} size={44} color={NAVY_T} />
			<g opacity={prog(f, K6.where, 10)}>
				<EArrow x={617} y={262 + bob} L={70} up p={1} />
				<Sx x={617} y={214 + bob} text="19" size={52} color={INK} anchor="middle" weight={800} at={-1000} />
			</g>
			<Chip x={160} y={262} segs={[{t: '4s?', c: S_INK}]} at={K6.where + 6} size={44} color={S_INK} />
			<Chip x={760} y={216} segs={[{t: '3d?', c: D_INK}]} at={K6.where + 10} size={44} color={D_INK} />
			<Countdown start={h.startFrame} end={h.endFrame} x={1450} y={760} r={64} ringFrom={K6.go} />
			{void K6.quick}{void K6.once}{void K6.eighteen}
		</SVG>
	);
};
