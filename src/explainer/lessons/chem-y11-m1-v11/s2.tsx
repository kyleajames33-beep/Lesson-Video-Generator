// Y11 Chem M1 V11 scenes 7 to 13: potassium's electron 19 in 4s (and calcium, scandium on a small table), phosphorus
// built by running totals beside its real sample, the 3p boxes close up (one per box before pairing), chlorine with
// its jar and the fold to [Ne], iron beside its lump with the fold to [Ar] and the written level order, a total that
// adds up but is still wrong, and the memory card with the three worked atoms.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {cues} from '../../cues';
import {CLJAR, IRON, REDP, pw, sc, unpaired} from './common';
import {
	Bracket, Chip, D_FILL, D_INK, DrawPath, EArrow, Fade, Framed, GREEN_T, GivensCard, Heading, INK, Ladder, NAVY_T, ORow, P_INK, PTable, PenArrow, PenRing, Plate, RED_T, RO, ROSE_T, Rich,
	RowRings, S_FILL, S_INK, SVG, Sx, TEAL_R, TickMark, Write, boxX, coreBox, hund, hundC, kf, lerp, prog, richW, smooth,
} from './parts';
import type {LadG} from './parts';
import {EnergyAxis, LG5, Readouts, termXs} from './s1';

const sumW = (t: string, size: number) => richW([{t}], size);
const clamp = (v: number) => Math.max(0, Math.min(1, v));
/** A line written term by term (Rich with per-term reveal). */
const TermLine: React.FC<{x: number; y: number; terms: string[]; at: number; every?: number; size: number; color?: string; sep?: string; out?: number}> = ({x, y, terms, at, every = 8, size, color = INK, sep = ' ', out}) => (
	<Rich x={x} y={y} segs={terms.map((t, i) => ({t: t + (i < terms.length - 1 ? sep : ''), c: color, at: at + i * every}))} size={size} at={at} out={out} />
);

// ---------- 7. potassium: four s first ----------
const K7 = cues(sc('potassium'), {into: 'Into four', not: 'not three', lower: 'four s is', ends: 'potassium ends', one: 'four s one', row: 'new row', first: 'the first one', calcium: 'Calcium', twenty: 'with twenty', second: 'second one', scandium: 'from scandium', does: 'does three', fill: 'start to fill'});
const PT7 = {x: 640, y: 690, cw: 66, ch: 54};
export const ScenePotassium: React.FC = () => {
	const f = useCurrentFrame();
	const c = kf(f, [[0, 18], [K7.into, 18], [K7.into + 18, 19], [K7.calcium, 19], [K7.twenty + 12, 20], [K7.does + 8, 20], [K7.fill - 6, 21]]), n = Math.floor(c + 1e-6);
	const row4 = PT7.y + 3 * PT7.ch;
	const kl = 'K: 1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{6} 4s^{1}', tally = '2 + 2 + 6 + 2 + 6 + 1 = 19';
	return (
		<SVG>
			<Heading text="Potassium: 4s fills first" at={-1000} />
			<EnergyAxis x={80} y0={910} y1={250} />
			<Ladder g={LG5} c={c} />
			<Readouts n={n} config={false} />
			<Framed x={1080} y={410} segs={[{t: 'electron 19 → '}, {t: '4s', c: GREEN_T}]} at={K7.into} size={52} stroke={GREEN_T} />
			<Chip x={1690} y={350} segs={[{t: '3d?', c: D_INK}]} at={-1000} size={44} color={D_INK} strike={K7.not} />
			<Framed x={1080} y={548} segs={[{t: kl}]} at={K7.ends} size={50} stroke={GREEN_T} />
			<Rich x={1080} y={618} segs={[{t: tally, c: NAVY_T}]} size={38} at={K7.one + 6} />
			<TickMark x={1080 + sumW(tally, 38) + 30} y={606} at={K7.one + 16} color={NAVY_T} />
			{/* the periodic table (periods 1 to 4) */}
			<Sx x={PT7.x} y={676} text="periodic table" size={30} color={INK} weight={800} at={-1000} />
			<PTable g={PT7} maxP={4} plain zSize={0} pop={1.12} lit={[
				{z: 19, at: K7.first, color: S_INK, fill: S_FILL},
				{z: 20, at: K7.calcium, color: S_INK, fill: S_FILL},
				{z: 21, at: K7.does, color: D_INK, fill: D_FILL},
			]} />
			<Write x={800} y={756} text="new level, new row" at={K7.first + 4} size={46} color={S_INK} />
			<PenArrow a={[792, 744]} b={[PT7.x + 40, row4 + 6]} at={K7.first + 14} color={S_INK} bend={0.3} />
			<Write x={920} y={832} text="3d starts here" at={K7.does + 8} size={46} color={D_INK} />
			<PenArrow a={[912, 824]} b={[PT7.x + 2 * PT7.cw + 46, row4 + 14]} at={K7.does + 16} color={D_INK} bend={0.25} />
			{void K7.lower}{void K7.row}{void K7.second}{void K7.scandium}
		</SVG>
	);
};

// ---------- 8. phosphorus, step by step ----------
const K8 = cues(sc('phosphorus'), {build: "Let's build", one: 'One s two', two: 'Two s two', twop: 'Two p six', three: 'Three s two', takes: 'takes the last', fifteen: 'making fifteen', so: 'So phosphorus', p3: ['three p three', 1], group: 'Group the', eight: 'two eight five', version: 'Stage 5'});
const LG8: LadG = {b: 96, gap: 10, col: {s: 600, p: 820, d: 1300}, y: {'1s': 760, '2s': 590, '2p': 520, '3s': 400, '3p': 330}, labelSize: 44};
const P_TERMS = ['1s^{2}', '2s^{2}', '2p^{6}', '3s^{2}', '3p^{3}'];
export const ScenePhosphorus: React.FC = () => {
	const f = useCurrentFrame();
	const c = kf(f, [[K8.one, 0], [K8.one + 22, 2], [K8.two, 2], [K8.two + 14, 4], [K8.twop, 4], [K8.twop + 26, 10], [K8.three, 10], [K8.three + 14, 12]]);
	const hov = kf(f, [[K8.takes, 0], [K8.takes + 30, 3]]);
	const n = Math.floor(c + hov + 1e-6);
	const bob = Math.sin(f * 0.1) * 5;
	const tot: [keyof LadG['y'], number, string, number][] = [['1s', 716, '→ 2', K8.one + 20], ['2s', 716, '→ 4', K8.two + 14], ['2p', 1150, '→ 10', K8.twop + 26], ['3s', 716, '→ 12', K8.three + 14], ['3p', 1150, '→ 15', K8.fifteen]];
	const FX = 1250, FY = 650, FS = 56, tx = termXs(P_TERMS, FX + FS * 0.45, FS, ' ');
	const jh = 420;
	return (
		<SVG>
			<Heading text="Build phosphorus" at={0} />
			<Plate p={REDP} x={100} y={280} h={jh} />
			<Sx x={100 + pw(REDP, jh) / 2} y={744} text="phosphorus" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<EnergyAxis x={480} y0={870} y1={320} />
			<Ladder g={LG8} c={c} />
			{/* the three 3p electrons, placed but not yet arranged */}
			{[0, 1, 2].map(i => <EArrow key={i} x={856 + i * 34} y={272 + bob} L={84} up p={clamp(hov - i)} />)}
			<Write x={700} y={210} text="how do these three sit?" at={K8.fifteen + 6} size={44} color={INK} />
			{tot.map(([s, x, t, at]) => <Write key={s} x={x} y={(LG8.y[s] as number) + 64} text={t} at={at} size={50} color={NAVY_T} />)}
			<GivensCard x={1300} y={210} w={520} lines={[[{t: 'P: 15 electrons'}]]} size={48} />
			<RO x={1300} y={430} w={320} label="electrons placed" text={`${n}`} />
			{/* the configuration, framed, then grouped into Stage 5 shells */}
			<Rich x={FX + FS * 0.45} y={FY} segs={P_TERMS.map((t, i) => ({t: t + (i < 4 ? ' ' : ''), at: K8.so + 10 + i * 18}))} size={FS} at={K8.so + 10} out={K8.p3 + 14} />
			<Framed x={FX} y={FY} segs={[{t: P_TERMS.join(' ')}]} at={K8.p3 + 10} size={FS} stroke={GREEN_T} />
			{([[0, 0, '2'], [1, 2, '8'], [3, 4, '5']] as const).map(([a, b, num], i) => (
				<g key={i}>
					<Bracket a={[tx[a].x0 - 4, 704]} b={[tx[b].x1 + 4, 704]} at={K8.eight + i * 10} color={NAVY_T} depth={16} />
					<Sx x={(tx[a].x0 + tx[b].x1) / 2} y={782} text={num} size={52} color={NAVY_T} anchor="middle" weight={800} at={K8.eight + 6 + i * 10} />
				</g>
			))}
			<Write x={FX} y={866} text="the old shell numbers" at={K8.version - 10} size={46} color={NAVY_T} />
			{void K8.build}{void K8.group}
		</SVG>
	);
};

// ---------- 9. one per box before pairing ----------
const K9 = cues(sc('pairing'), {how: 'But how', repel: 'Electrons repel', so: 'So in orbitals', spread: 'spread out', one: 'one per orbital', before: 'before any', up: 'pair up', each: 'each get', three: 'three unpaired', alone: 'alone in'});
export const ScenePairing: React.FC = () => {
	const f = useCurrentFrame();
	const B = 210, G = 30, X = 600, Y = 330, HY = 245;
	const spread = smooth(prog(f, K9.repel + 6, 40));
	const drop = smooth(prog(f, K9.up - 6, 24));
	const bob = Math.sin(f * 0.1) * 5 * (1 - drop);
	const hx = (i: number) => lerp(780 + i * 40, boxX(X, i, B, G) + B / 2, spread);
	const jh = 420;
	return (
		<SVG>
			<Heading text="One per box before pairing" at={0} />
			<Plate p={REDP} x={110} y={280} h={jh} />
			<Sx x={110 + pw(REDP, jh) / 2} y={744} text="phosphorus: 3p^{3}" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<ORow x={X} y={Y} b={B} gap={G} cells={[[0, 0], [0, 0], [0, 0]]} t="p" label="3p" labelSize={56} />
			{[0, 1, 2].map(i => <EArrow key={i} x={hx(i)} y={lerp(HY + bob, Y + B / 2, drop)} L={B * 0.7} up p={1} />)}
			{/* repulsion marks between the waiting arrows */}
			<g opacity={prog(f, K9.repel, 8) * (1 - drop)}>
				{[0, 1].map(i => {
					const xa = hx(i) + 16, xb = hx(i + 1) - 16, mx = (xa + xb) / 2;
					return xb - xa > 34 ? <g key={i}>
						<path d={`M${mx - 12},${HY - 16} L${xa + 4},${HY} L${mx - 12},${HY + 16}`} fill="none" stroke={GREEN_T} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
						<path d={`M${mx + 12},${HY - 16} L${xb - 4},${HY} L${mx + 12},${HY + 16}`} fill="none" stroke={GREEN_T} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
					</g> : null;
				})}
			</g>
			<Write x={1340} y={262} text="they push apart" at={K9.repel + 10} size={50} color={GREEN_T} />
			<Rich x={X} y={640} segs={[{t: 'Equal-energy orbitals: one per box, then pair'}]} size={46} at={K9.one} />
			<Sx x={X} y={690} text="Hund's rule" size={30} color={INK} weight={800} at={K9.one + 10} />
			{/* the paired-first alternative, struck */}
			<Fade at={K9.up}>
				<rect x={1340} y={720} width={480} height={150} rx={18} fill="#fffdf8" stroke={INK} strokeWidth={4} strokeDasharray="14 10" />
				<ORow x={1440} y={750} b={90} gap={10} cells={[[1, 1], [1, 0], [0, 0]]} t="p" label="3p" labelSize={34} />
			</Fade>
			{f >= K9.up + 14 ? <DrawPath d="M1350,860 L1810,730" at={K9.up + 14} dur={10} color={RED_T} width={8} /> : null}
			<Write x={1340} y={924} text="not paired first" at={K9.up + 20} size={46} color={RED_T} />
			{/* three unpaired electrons */}
			<RowRings x={X} y={Y} b={B} gap={G} m={3} k={3} at={K9.three} />
			<Framed x={X} y={800} segs={[{t: '3 unpaired', c: GREEN_T}]} at={K9.three + 10} size={56} stroke={GREEN_T} />
			<Sx x={X} y={890} text="unpaired: alone in its orbital" size={36} color={INK} weight={800} at={K9.alone} />
			{void K9.how}{void K9.so}{void K9.spread}{void K9.before}{void K9.each}
		</SVG>
	);
};

// ---------- 10. chlorine, and a shortcut ----------
const K10 = cues(sc('chlorine'), {cl: 'Chlorine has', holds: 'holds five', first: 'The first three', next: 'the next two', up: 'pair up', leaves: 'That leaves', one: 'one unpaired', shorten: 'We can shorten', every: 'Everything up', neon: 'noble gas neon', write: 'so we write', p5: 'three p five'});
const LG10: LadG = {b: 64, gap: 6, col: {s: 1470, p: 1610, d: 1950}, y: {'1s': 860, '2s': 744, '2p': 698, '3s': 586, '3p': 540}};
export const SceneChlorine: React.FC = () => {
	const f = useCurrentFrame();
	const c3 = kf(f, [[K10.first, 0], [K10.first + 40, 3], [K10.next, 3], [K10.up + 12, 5]]);
	const cl = kf(f, [[4, 0], [40, 12]]) + c3, n = Math.floor(cl + 1e-6);
	const B = 170, G = 18, X = 460, Y = 290;
	const fold = prog(f, K10.every, 24);
	const cb = coreBox(LG10, ['1s', '2s', '2p']);
	const jh = 460;
	const full = '1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{5}', short = 'Cl: [Ne] 3s^{2} 3p^{5}', sum = '10 + 2 + 5 = 17';
	return (
		<SVG>
			<Heading text="Chlorine, and a shortcut" at={0} />
			<Plate p={CLJAR} x={110} y={230} h={jh} />
			<Sx x={110 + pw(CLJAR, jh) / 2} y={730} text="chlorine gas" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<ORow x={X} y={Y} b={B} gap={G} cells={hundC(3, c3)} t="p" label="3p" labelSize={56} />
			{/* chlorine's five 3p electrons wait above the boxes until they are placed */}
			{[0, 1, 2, 3, 4].map(k => <EArrow key={k} x={X + 90 + k * 46} y={212 + Math.sin(f * 0.1 + k) * 4} L={84} up p={1 - clamp(c3 - k)} />)}
			<Sx x={X + 360} y={226} text="5 electrons for 3p" size={34} color={INK} weight={800} at={-1000} out={K10.up + 12} />
			<Write x={X} y={540} text="then pair" at={K10.next + 4} size={50} color={GREEN_T} />
			<PenArrow a={[X + 120, 506]} b={[X + B * 0.67 + 6, Y + B - 8]} at={K10.next + 10} color={GREEN_T} bend={0.2} />
			<PenArrow a={[X + 200, 512]} b={[boxX(X, 1, B, G) + B * 0.67, Y + B - 8]} at={K10.next + 14} color={GREEN_T} bend={0.1} />
			<RowRings x={X} y={Y} b={B} gap={G} m={3} k={5} at={K10.one} />
			<Framed x={780} y={556} segs={[{t: '1 unpaired', c: GREEN_T}]} at={K10.one + 8} size={56} stroke={GREEN_T} />
			{/* the small ladder at the right, folding its core to [Ne] */}
			<RO x={1440} y={230} w={380} label="electrons placed" text={`${n}`} />
			<RO x={1440} y={372} w={380} label="unpaired" text={`${unpaired(n)}`} color="#0b625d" />
			<Ladder g={LG10} c={cl} fold={fold} core={['1s', '2s', '2p']} coreLabel="[Ne]" coreSub="1s^{2} 2s^{2} 2p^{6}" />
			<Write x={cb.x0 - 24} y={706} text="same as neon: 10" at={K10.neon} size={46} color={NAVY_T} anchor="end" />
			<PenArrow a={[cb.x0 - 100, 722]} b={[cb.x0 + 8, 776]} at={K10.neon + 10} color={NAVY_T} bend={0.2} />
			{/* the full line, the shorthand and its sum */}
			<Rich x={X} y={680} segs={[{t: full}]} size={50} at={K10.shorten} />
			<Framed x={X - 26} y={806} segs={[{t: short}]} at={K10.write} size={60} stroke={GREEN_T} />
			<Rich x={X} y={906} segs={[{t: sum, c: NAVY_T}]} size={48} at={K10.p5} />
			<TickMark x={X + sumW(sum, 48) + 36} y={892} at={K10.p5 + 12} color={NAVY_T} />
			<Sx x={X + sumW(sum, 48) + 90} y={906} text="noble-gas shorthand" size={30} color={INK} weight={800} at={K10.write + 10} />
			{void K10.cl}{void K10.holds}{void K10.up}{void K10.leaves}
		</SVG>
	);
};

// ---------- 11. iron, and the written order ----------
const K11 = cues(sc('iron'), {iron: 'Now iron', after: 'After three', eighteen: 'eighteen electrons', argon: 'same as argon', four: 'Four s fills', twenty: 'making twenty', last: 'The last six', d: 'into three d', write: 'When we write', level: 'level order', comes: 'comes before', ar: 'Argon, three', two: 'four s two', five: 'five d boxes', singles: 'five singles', pair: 'one pair', four4: 'four unpaired'});
const LG11: LadG = {b: 64, gap: 6, col: {s: 520, p: 650, d: 650}, y: {'1s': 830, '2s': 720, '2p': 680, '3s': 610, '3p': 570, '4s': 470, '3d': 400}};
export const SceneIron: React.FC = () => {
	const f = useCurrentFrame();
	const c = kf(f, [[K11.after, 0], [K11.eighteen + 10, 18], [K11.four, 18], [K11.twenty + 6, 20], [K11.last, 20], [K11.d + 14, 26]]), n = Math.floor(c + 1e-6);
	const fold = prog(f, K11.argon, 24);
	const jh = 300;
	const B = 110, G = 12, X = 1200, Y = 350;
	const d3 = Math.max(0, c - 20);
	const LT = ['1s^{2}', '2s^{2}', '2p^{6}', '3s^{2}', '3p^{6}', '3d^{6}', '4s^{2}'], LS = 44, lx = termXs(LT, 1060, LS);
	const fe = 'Fe: [Ar] 3d^{6} 4s^{2}', sum = '18 + 6 + 2 = 26';
	return (
		<SVG>
			<Heading text="Iron, and the written order" at={0} />
			<Plate p={IRON} x={90} y={250} h={jh} />
			<Sx x={90 + pw(IRON, jh) / 2} y={600} text="iron" size={30} color={INK} anchor="middle" weight={800} at={-1000} />
			<EnergyAxis x={440} y0={910} y1={380} />
			<Ladder g={LG11} c={c} fold={fold} core={['1s', '2s', '2p', '3s', '3p']} coreLabel="[Ar]" coreSub="18 electrons" />
			<Write x={660} y={366} text="4s first, then 3d" at={K11.last} size={46} color={D_INK} />
			<Readouts n={n} x={1060} y={210} config={false} />
			<g opacity={1 - prog(f, K11.last - 10, 12)}>
				<GivensCard x={1060} y={340} w={560} lines={[[{t: 'Fe: 26 electrons'}]]} size={52} />
			</g>
			{/* the 3d row, large */}
			<Fade at={K11.last}>
				<ORow x={X} y={Y} b={B} gap={G} cells={hundC(5, d3)} t="d" label="3d" labelSize={52} />
			</Fade>
			<Bracket a={[X - 4, Y - 14]} b={[X + 5 * B + 4 * G + 4, Y - 14]} at={K11.singles} color={INK} depth={-16} />
			<RowRings x={X} y={Y} b={B} gap={G} m={5} k={6} at={K11.four4} />
			<Framed x={X} y={560} segs={[{t: '4 unpaired', c: GREEN_T}]} at={K11.four4 + 10} size={52} stroke={GREEN_T} />
			{/* written in level order */}
			<Rich x={1060} y={670} segs={LT.map((t, i) => ({t: t + (i < 6 ? '   ' : ''), c: i === 5 ? D_INK : INK, at: K11.write + 4 + i * 6}))} size={LS} at={K11.write} />
			<PenArrow a={[(lx[6].x0 + lx[6].x1) / 2, 624]} b={[(lx[5].x0 + lx[5].x1) / 2 + 6, 622]} at={K11.comes} color={INK} bend={0.5} />
			<Write x={1060} y={734} text="written in level order" at={K11.level + 6} size={44} color={INK} />
			<Framed x={1060} y={834} segs={[{t: fe}]} at={K11.ar} size={56} stroke={GREEN_T} />
			<Rich x={1060} y={918} segs={[{t: sum, c: NAVY_T}]} size={44} at={K11.two} />
			<TickMark x={1060 + sumW(sum, 44) + 34} y={904} at={K11.two + 12} color={NAVY_T} />
			{void K11.iron}{void K11.five}{void K11.pair}{void K11.level}
		</SVG>
	);
};

// ---------- 12. a total that adds up, but is still wrong ----------
const K12 = cues(sc('order-check'), {warn: 'One warning', can: 'A configuration can', one: 'One s two', adds: 'also adds', but: 'But two p', full: "isn't full", won: "won't go", room: 'has room', so: 'so this atom', lowest: 'lowest energy arrangement', check: 'Check the order', total: 'the total'});
export const SceneOrderCheck: React.FC = () => {
	const f = useCurrentFrame();
	const good = 'Cl: 1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{5}';
	const wrong = ['1s^{2}', '2s^{2}', '2p^{5}', '3s^{2}', '3p^{6}'];
	const tally = '2 + 2 + 5 + 2 + 6 = 17';
	const WS = 52, wx = termXs(wrong, 110, WS);
	const B = 96, G = 8, SX = 980, PX = 1150;
	const ys = {'1s': 820, '2s': 680, '2p': 620, '3s': 500, '3p': 440};
	const gap: [number, number] = [boxX(PX, 2, B, G) + B * 0.67, ys['2p'] + B / 2];
	const extra: [number, number] = [boxX(PX, 2, B, G) + B * 0.67, ys['3p'] + B / 2];
	const jh = 380;
	return (
		<SVG>
			<Heading text="A right total can still be wrong" at={0} />
			<Rich x={110} y={290} segs={[{t: good}]} size={WS} />
			<TickMark x={110 + sumW(good, WS) + 36} y={274} at={-1000} color={TEAL_R} />
			<Sx x={110} y={340} text="chlorine, from before" size={30} color={INK} weight={800} at={-1000} />
			<TermLine x={110} y={460} terms={wrong} sep="   " at={K12.one} every={16} size={WS} />
			<Rich x={110} y={550} segs={[{t: tally, c: NAVY_T}]} size={46} at={K12.adds} />
			<TickMark x={110 + sumW(tally, 46) + 34} y={536} at={K12.adds + 10} color={NAVY_T} />
			<Write x={110 + sumW(tally, 46) + 80} y={550} text="total is fine" at={K12.adds + 14} size={46} color={NAVY_T} />
			<PenRing cx={(wx[2].x0 + wx[2].x1) / 2} cy={444} rx={56} ry={44} at={K12.full} color={ROSE_T} seed={9} />
			{f >= K12.so ? <DrawPath d={`M96,${452} L${wx[4].x1 + 14},${444}`} at={K12.so} dur={12} color={RED_T} width={7} /> : null}
			<Write x={110} y={660} text="right total, wrong order" at={K12.so + 8} size={50} color={RED_T} />
			<Chip x={110} y={740} segs={[{t: 'check the order and the total'}]} at={K12.check} size={46} color={NAVY_T} />
			{/* the wrong arrangement on a mini ladder */}
			<EnergyAxis x={905} y0={920} y1={420} />
			<ORow x={SX} y={ys['1s']} b={B} gap={G} cells={hund(1, 2)} t="s" label="1s" />
			<ORow x={SX} y={ys['2s']} b={B} gap={G} cells={hund(1, 2)} t="s" label="2s" />
			<ORow x={PX} y={ys['2p']} b={B} gap={G} cells={hund(3, 5)} t="p" label="2p" />
			<ORow x={SX} y={ys['3s']} b={B} gap={G} cells={hund(1, 2)} t="s" label="3s" />
			<ORow x={PX} y={ys['3p']} b={B} gap={G} cells={hund(3, 6)} t="p" label="3p" />
			<PenRing cx={gap[0]} cy={gap[1]} rx={40} ry={56} at={K12.full} color={ROSE_T} seed={4} />
			<Write x={1150} y={790} text="a gap lower down" at={K12.full + 6} size={46} color={ROSE_T} />
			<PenArrow a={[extra[0] + 44, extra[1] - 10]} b={[gap[0] + 38, gap[1] - 4]} at={K12.lowest} color={ROSE_T} bend={-0.6} />
			<Sx x={1560} y={745} text="not lowest energy" size={30} color={ROSE_T} weight={800} at={K12.lowest + 8} />
			<Plate p={CLJAR} x={1640} y={230} h={jh} />
			{void K12.warn}{void K12.can}{void K12.but}{void K12.won}{void K12.room}{void K12.total}
		</SVG>
	);
};

// ---------- 13. one line to remember ----------
const K13 = cues(sc('memory-line'), {here: "So here's", lowest: 'Lowest first', one: 'one per box', then: 'then pair', check: 'and check', fill: 'Fill from', remember: 'remembering four', spread: 'Spread out', make: 'And make', count: 'electron count'});
export const SceneMemoryLine: React.FC = () => {
	const rows: {p: typeof REDP; h: number; line: string; sum: string}[] = [
		{p: REDP, h: 200, line: 'P: 1s^{2} 2s^{2} 2p^{6} 3s^{2} 3p^{3}', sum: '2 + 2 + 6 + 2 + 3 = 15'},
		{p: CLJAR, h: 200, line: 'Cl: [Ne] 3s^{2} 3p^{5}', sum: '10 + 2 + 5 = 17'},
		{p: IRON, h: 170, line: 'Fe: [Ar] 3d^{6} 4s^{2}', sum: '18 + 6 + 2 = 26'},
	];
	return (
		<SVG>
			<Heading text="One line to remember" at={0} />
			<rect x={100} y={230} width={850} height={430} rx={22} fill="#fffdf8" stroke={NAVY_T} strokeWidth={5} />
			<Sx x={130} y={282} text="memory aid" size={34} color={INK} hand at={-1000} />
			<Write x={150} y={384} text="Lowest first," at={K13.lowest} size={68} color={S_INK} />
			<Write x={150} y={494} text="one per box, then pair," at={K13.one} size={68} color={P_INK} />
			<Write x={150} y={604} text="and check the total." at={K13.check} size={68} color={NAVY_T} />
			<Chip x={100} y={700} segs={[{t: '4s before 3d', c: D_INK}]} at={K13.remember} size={44} color={D_INK} />
			<Chip x={460} y={700} segs={[{t: 'spread out, then pair', c: P_INK}]} at={K13.spread} size={38} color={P_INK} />
			<Chip x={100} y={800} segs={[{t: 'raised numbers add up to the total', c: NAVY_T}]} at={K13.make} size={42} color={NAVY_T} />
			{rows.map((r, i) => {
				const y = 220 + i * 230;
				return (
					<g key={i}>
						<Plate p={r.p} x={1000 + (180 - pw(r.p, r.h)) / 2} y={y + (200 - r.h) / 2} h={r.h} />
						<Rich x={1200} y={y + 92} segs={[{t: r.line}]} size={50} />
						<Rich x={1200} y={y + 152} segs={[{t: r.sum, c: NAVY_T}]} size={38} />
						<TickMark x={1200 + sumW(r.sum, 38) + 30} y={y + 140} at={-1000} color={NAVY_T} />
					</g>
				);
			})}
			{void K13.here}{void K13.then}{void K13.fill}{void K13.count}
		</SVG>
	);
};
