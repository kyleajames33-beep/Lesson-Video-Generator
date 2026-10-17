import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {cues} from '../../cues';
import {AN_INK, BLUE_CU, CAT_INK, COOL, Heading, WATER_INK, sc} from './common';
import {CUSO4_DISS, CUSO4_XTAL, THERMO_HOT, coldThermo} from './assets';
import {Arrow, Chip, EqLine, Fade, HBracket, HydratedIon, Ion, ION_R, Lattice, MistakeChip, Overlay, PicFit, PicH, Ring, Streaks, Sx, TEAL, Water, latKind, latXY, platePt, pulseAt, smooth} from './parts';
import type {EItem} from './parts';

const lerpAng = (a: number, b: number, t: number) => {
	let d = ((b - a + Math.PI) % (2 * Math.PI)) - Math.PI;
	if (d < -Math.PI) d += 2 * Math.PI;
	return a + d * t;
};

// ---------- 1. Hook: where does a dissolving crystal go? ----------
const H = 'hook';
const K1 = cues(sc(H), {watch: 'and watch', streaks: 'Blue streaks', shrinks: 'crystal shrinks', pale: 'evenly pale blue', copper: 'belongs to the copper ions', spread: 'ions spread out', held: 'held tightly together', pulls: 'what pulls them out', hot: 'water hot', cold: 'make it cold'});
const B1 = {x: 200, y: 210, h: 780};
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const q = prog(f, K1.watch + 6, K1.pale - K1.watch);
	const [cx, cy] = platePt(CUSO4_XTAL, B1.x, B1.y, B1.h, 0.5, 0.83);
	const L0 = {x0: 1000, y0: 330, s: 56};
	const pull = prog(f, K1.pulls, 40);
	const [ix, iy] = latXY(L0.x0, L0.y0, L0.s, 3, 0);
	const cold = coldThermo();
	return (
		<>
			<Heading text="Where does a dissolving crystal go?" at={4} size={60} />
			<Overlay>
				<PicH p={CUSO4_XTAL} x={B1.x} y={B1.y} h={B1.h} o={1 - q} />
				{q > 0.01 ? <PicH p={CUSO4_DISS} x={B1.x} y={B1.y} h={B1.h} o={q} /> : null}
				<Streaks cx={cx} cy={cy - 10} at={K1.watch} out={K1.pale + 30} spread={150} rise={380} />
				<Ring cx={cx} cy={cy} rx={78} ry={60} at={K1.shrinks} out={K1.pale + 10} color={'#d18a1c'} seed={4} width={5} />
				<Sx x={cx + 100} y={cy + 20} text="shrinks" size={40} color={INK_SOFT} hand at={K1.shrinks + 6} out={K1.pale + 10} />
				<Sx x={790} y={700} text="the blue spreads evenly" size={42} color={BLUE_CU} hand at={K1.pale} />
				<Sx x={790} y={755} text="copper ions spread out" size={42} color={TEAL} hand at={K1.copper} />
				<Arrow x1={780} y1={742} x2={690} y2={780} at={K1.copper + 6} color={TEAL} width={4} />
				{/* in a crystal the ions are held together; what pulls them out? */}
				<Lattice x0={L0.x0} y0={L0.y0} cols={4} rows={3} s={L0.s} at={K1.held - 10} build={24} hide={(i, j) => i === 3 && j === 0 && f >= K1.pulls} />
				<Sx x={L0.x0 - 30} y={L0.y0 + 3 * L0.s + 20} text="in a crystal: held tightly" size={38} color={INK} hand at={K1.held} />
				{f >= K1.pulls ? <Ion x={ix + pull * 130} y={iy - pull * 70} kind={latKind(3, 0)} /> : null}
				{f >= K1.pulls ? <DrawPath d={`M${ix + 26},${iy - 10} Q${ix + 80},${iy - 60} ${ix + 120},${iy - 66}`} at={K1.pulls + 10} dur={14} color={INK_SOFT} width={3} dash="7 7" /> : null}
				<Sx x={ix + 200} y={iy - 50} text="what pulls them out?" size={44} color={INK} hand at={K1.pulls + 12} />
				{/* hot and cold */}
				<Fade at={K1.hot}><PicH p={THERMO_HOT} x={1380} y={640} h={330} /></Fade>
				<Sx x={1398} y={1010} text="hot?" size={46} color={'#c4432f'} anchor="middle" hand at={K1.hot + 4} />
				<Fade at={K1.cold}><PicFit p={cold} x={1500} y={680} w={240} h={290} bottom /></Fade>
				<Sx x={1620} y={1010} text="cold?" size={46} color={COOL} anchor="middle" hand at={K1.cold + 4} />
				{void K1.streaks}{void K1.spread}
			</Overlay>
		</>
	);
};

// ---------- 2. The two players: a lattice and polar water ----------
const TP = 'two-players';
const K2 = cues(sc(TP), {salt: 'table salt', lattice: 'is a lattice', stack: 'regular stack', pos: 'positive sodium ions', neg: 'negative chloride ions', held: 'each ion is held', polar: 'are polar', oxygen: 'the oxygen end', hydrogen: 'two hydrogen ends', y11: 'Year 11'});
const L2 = {x0: 540, y0: 420, cols: 6, rows: 5, s: 64};
export const SceneTwoPlayers: React.FC = () => {
	const f = useCurrentFrame();
	const [px, py] = latXY(L2.x0, L2.y0, L2.s, 2, 2);
	const nb = [[1, 2], [3, 2], [2, 1], [2, 3]].map(([i, j]) => latXY(L2.x0, L2.y0, L2.s, i, j));
	const pu = pulseAt(f, K2.held, 0.25, 30);
	return (
		<>
			<Heading text="Two players: a lattice and polar water" at={4} size={60} />
			<Overlay>
				<Fade at={2}><PicH p={CUSO4_DISS} x={96} y={250} h={300} /></Fade>
				<Lattice x0={L2.x0} y0={L2.y0} cols={L2.cols} rows={L2.rows} s={L2.s} at={K2.lattice} build={50} />
				<Sx x={L2.x0 - 40} y={330} text="lattice: a regular stack of ions" size={42} color={INK} hand at={K2.stack} />
				<Fade at={K2.pos}><Ion x={560} y={790} kind="+" /><Sx x={590} y={802} text="sodium ion, Na^{+}" size={30} color={CAT_INK} weight={700} at={K2.pos} /></Fade>
				<Fade at={K2.neg}><Ion x={860} y={790} kind="-" /><Sx x={896} y={802} text="chloride ion, Cl^{-}" size={30} color={AN_INK} weight={700} at={K2.neg} /></Fade>
				{/* held by every neighbour */}
				{f >= K2.held ? <circle cx={px} cy={py} r={ION_R['+'] * pu + 8} fill="none" stroke="#d18a1c" strokeWidth={4} opacity={prog(f, K2.held, 10)} /> : null}
				{nb.map(([x, y], i) => <DrawPath key={i} d={`M${px},${py} L${px + (x - px) * 0.62},${py + (y - py) * 0.62}`} at={K2.held + 6 + i * 4} dur={10} color="#d18a1c" width={5} />)}
				<Sx x={L2.x0 - 40} y={880} text="each ion held by the opposite charges around it" size={36} color={INK_SOFT} hand at={K2.held + 10} />
				{/* polar water */}
				<Fade at={K2.polar}><Water x={1430} y={560} ang={-Math.PI / 2} s={4} deltaM={prog(f, K2.oxygen, 12)} deltaP={prog(f, K2.hydrogen, 12)} /></Fade>
				<Sx x={1430} y={380} text="a water molecule" size={38} color={WATER_INK} anchor="middle" hand at={K2.polar} />
				<Sx x={1140} y={800} text="polar: one end slightly negative," size={38} color={INK} hand at={K2.polar + 8} />
				<Sx x={1140} y={848} text="the other end slightly positive" size={38} color={INK} hand at={K2.polar + 14} />
				<Chip x={1440} y={930} w={330} text="Year 11 recap" size={36} color={INK_SOFT} at={K2.y11} />
				{void K2.salt}
			</Overlay>
		</>
	);
};

// ---------- 3. Water pulls the ions out: hydration ----------
const HY = 'hydration';
const K3 = cues(sc(HY), {crowd: 'crowd around the crystal', turn: 'turn to face the ions', oxy: 'oxygen ends point', hyd: 'hydrogen ends point', idp: 'ion-dipole attraction', corner: 'on a corner', fewest: 'fewest neighbours', easiest: 'easiest to pull away', out: "Once it's out", surround: 'surround it completely', hydrated: 'is hydrated', aq: 'aqueous means'});
const L3 = {x0: 560, y0: 560, cols: 6, rows: 4, s: 72, sc: 1.15};
type W3 = {x: number; y: number; ion: [number, number] | null; far: [number, number]; a0: number};
const waters3 = (): W3[] => {
	const r = rng(5);
	const out: W3[] = [];
	for (let i = 0; i < L3.cols; i++) { const [x, y] = latXY(L3.x0, L3.y0, L3.s, i, 0); out.push({x, y: y - 62, ion: [i, 0], far: [x + (r() - 0.5) * 120, y - 200 - r() * 80], a0: r() * 6.28}); }
	for (let j = 0; j < L3.rows; j++) { const [x, y] = latXY(L3.x0, L3.y0, L3.s, L3.cols - 1, j); out.push({x: x + 62, y, ion: [L3.cols - 1, j], far: [x + 200 + r() * 80, y + (r() - 0.5) * 100], a0: r() * 6.28}); }
	for (let k = 0; k < 6; k++) { const x = 620 + r() * 420, y = 390 + r() * 70; out.push({x, y, ion: null, far: [x + (r() - 0.5) * 200, y - 120], a0: r() * 6.28}); }
	return out;
};
const W3S = waters3();
export const SceneHydration: React.FC = () => {
	const f = useCurrentFrame();
	const crowd = prog(f, K3.crowd, 50);
	const leaveCl = prog(f, K3.easiest + 10, K3.surround - K3.easiest + 10);
	const leaveNa = prog(f, K3.surround + 40, 70);
	const [clx0, cly0] = latXY(L3.x0, L3.y0, L3.s, 5, 0);
	const [nax0, nay0] = latXY(L3.x0, L3.y0, L3.s, 4, 0);
	const CL = {x: clx0 + (1290 - clx0) * smooth(leaveCl), y: cly0 + (470 - cly0) * smooth(leaveCl)};
	const NA = {x: nax0 + (1600 - nax0) * smooth(leaveNa), y: nay0 + (660 - nay0) * smooth(leaveNa)};
	const clShell = Math.min(0.4, leaveCl) + 0.6 * prog(f, K3.surround, 30);
	const naShell = Math.min(1, leaveNa * 1.4);
	const gone = (i: number, j: number) => (i === 5 && j === 0 && f >= K3.easiest + 10) || (i === 4 && j === 0 && f >= K3.surround + 40);
	const [nx, ny] = latXY(L3.x0, L3.y0, L3.s, 0, 0);
	const idpO = prog(f, K3.idp, 10) * (1 - prog(f, K3.corner, 12));
	return (
		<>
			<Heading text="Water pulls the ions out" at={4} size={60} />
			<Overlay>
				<Lattice x0={L3.x0} y0={L3.y0} cols={L3.cols} rows={L3.rows} s={L3.s} scale={L3.sc} hide={gone} />
				{W3S.map((w, k) => {
					const t = smooth(crowd);
					const x = w.far[0] + (w.x - w.far[0]) * t + Math.sin(f * 0.04 + k) * 3 * (1 - t * 0.6);
					const y = w.far[1] + (w.y - w.far[1]) * t + Math.cos(f * 0.05 + k) * 3 * (1 - t * 0.6);
					let ang = w.a0 + f * 0.01 * (k % 2 ? 1 : -1);
					if (w.ion) {
						const [ix, iy] = latXY(L3.x0, L3.y0, L3.s, w.ion[0], w.ion[1]);
						const toIon = Math.atan2(iy - y, ix - x);
						const target = latKind(w.ion[0], w.ion[1]) === '+' ? toIon : toIon + Math.PI;
						ang = lerpAng(ang, target, prog(f, K3.turn + (k % 10) * 3, 24));
					}
					const nearGone = w.ion && ((w.ion[0] === 5 && w.ion[1] === 0 && f >= K3.easiest + 10) || (w.ion[0] === 4 && w.ion[1] === 0 && f >= K3.surround + 40));
					return <Water key={k} x={x} y={y} ang={ang} s={1.3} o={prog(f, 0, 14) * (nearGone ? 0 : 1)} />;
				})}
				{/* which end faces which ion */}
				<Fade at={K3.oxy} out={K3.idp - 6}>
					<Sx x={1150} y={300} text="oxygen (δ−) ends point at positive ions" size={36} color={CAT_INK} hand at={K3.oxy} />
					<Sx x={1150} y={352} text="hydrogen (δ+) ends point at negative ions" size={36} color={AN_INK} hand at={K3.hyd} />
				</Fade>
				{/* ion-dipole attraction */}
				{idpO > 0.01 ? <g opacity={idpO}><path d={`M${nx},${ny - 22} L${nx},${ny - 50}`} stroke={TEAL} strokeWidth={5 + 3 * Math.sin(f * 0.3)} strokeDasharray="6 5" /><circle cx={nx} cy={ny} r={34} fill="none" stroke={TEAL} strokeWidth={3} /></g> : null}
				<Fade at={K3.idp} out={K3.corner - 4}>
					<Sx x={1150} y={330} text="ion-dipole attraction" size={52} color={TEAL} hand at={K3.idp} />
					<Sx x={1150} y={386} text="the pull between an ion and the oppositely" size={32} color={INK} hand at={K3.idp + 8} />
					<Sx x={1150} y={426} text="charged end of a water molecule" size={32} color={INK} hand at={K3.idp + 12} />
				</Fade>
				{/* the corner ion: fewest neighbours */}
				<Ring cx={clx0} cy={cly0} rx={40} ry={40} at={K3.corner} out={K3.easiest + 10} color="#d18a1c" seed={6} width={5} />
				{f < K3.easiest + 10 ? <>
					<DrawPath d={`M${clx0},${cly0} L${clx0 - L3.s * 0.62},${cly0}`} at={K3.fewest} dur={10} color="#d18a1c" width={5} />
					<DrawPath d={`M${clx0},${cly0} L${clx0},${cly0 + L3.s * 0.62}`} at={K3.fewest + 5} dur={10} color="#d18a1c" width={5} />
				</> : null}
				<Fade at={K3.fewest} out={K3.out - 4}>
					<Sx x={1150} y={330} text="a corner ion: fewest neighbours" size={40} color={INK} hand at={K3.fewest} />
					<Sx x={1150} y={380} text="holding it, so easiest to pull away" size={40} color={INK} hand at={K3.easiest} />
				</Fade>
				{/* the corner chloride leaves and is surrounded; a sodium follows */}
				{f >= K3.easiest + 10 ? <HydratedIon x={CL.x} y={CL.y} kind="-" shell={clShell} r={ION_R['-'] * L3.sc} ws={1.2} n={6} rot={0.3} /> : null}
				{f >= K3.surround + 40 ? <HydratedIon x={NA.x} y={NA.y} kind="+" shell={naShell} r={ION_R['+'] * L3.sc} ws={1.2} n={6} rot={0.1} /> : null}
				<Sx x={1290} y={600} text="Cl^{-}(aq)" size={40} color={AN_INK} anchor="middle" weight={700} at={K3.hydrated} />
				<Sx x={1600} y={784} text="Na^{+}(aq)" size={40} color={CAT_INK} anchor="middle" weight={700} at={K3.hydrated + 6} />
				<Sx x={1150} y={330} text="water surrounds it completely" size={40} color={WATER_INK} hand at={K3.surround} />
				<Sx x={1150} y={900} text="hydrated: wrapped in water molecules" size={42} color={INK} hand at={K3.hydrated} />
				<Sx x={1150} y={956} text="(aq) = surrounded by water" size={42} color={TEAL} hand at={K3.aq} />
				{void K3.out}
			</Overlay>
		</>
	);
};

// ---------- 4. The equation: the ions were already there ----------
const EQ = 'equation';
const K4 = cues(sc(EQ), {written: 'is written as', nacl: 'sodium chloride solid', ions: 'sodium ions and chloride ions', cl: 'chloride ions', aqueous: 'both aqueous', nonew: 'no new ions', already: 'already there', separates: 'just separates', diss: 'the dissociation', wraps: 'wraps each one', nomol: 'no salt molecules'});
const NA4: [number, number] = [1220, 640], CL4: [number, number] = [1470, 640];
export const NACL_EQ = (ats: [number, number, number, number, number], from?: [[number, number], [number, number]]): EItem[] => [
	{t: 'NaCl(s)', at: ats[0]}, {op: '->', at: ats[1]}, {t: 'Na^{+}(aq)', color: CAT_INK, at: ats[2], from: from?.[0]}, {op: '+', at: ats[3]}, {t: 'Cl^{-}(aq)', color: AN_INK, at: ats[4], from: from?.[1]},
];
export const SceneEquation: React.FC = () => {
	const f = useCurrentFrame();
	return (
	<>
		<Heading text="Writing it as an equation" at={4} size={60} />
		<Overlay>
			<EqLine items={NACL_EQ([K4.nacl, K4.nacl + 20, K4.ions, K4.cl - 6, K4.cl], [[NA4[0], NA4[1] - 70], [CL4[0], CL4[1] - 70]])} x={520} y={300} size={62} />
			<Lattice x0={560} y0={570} cols={5} rows={3} s={72} scale={1.15} at={2} />
			<HydratedIon x={NA4[0]} y={NA4[1]} kind="+" shell={1} r={ION_R['+'] * 1.15} ws={1.1} n={6} o={prog(f, 2, 14)} />
			<HydratedIon x={CL4[0]} y={CL4[1]} kind="-" shell={1} r={ION_R['-'] * 1.15} ws={1.1} n={6} o={prog(f, 2, 14)} rot={0.3} />
			<Sx x={520} y={420} text="no new ions: they were already in the crystal" size={40} color={INK} hand at={K4.nonew} />
			<HBracket x1={530} x2={890} y={530} at={K4.separates} color={INK_SOFT} />
			<HBracket x1={1140} x2={1560} y={530} at={K4.separates + 6} color={INK_SOFT} />
			<Arrow x1={930} y1={640} x2={1110} y2={640} at={K4.separates} color={INK_SOFT} width={5} />
			<Sx x={560} y={812} text="same ions, now apart" size={42} color={INK} hand at={K4.separates + 8} />
			<Chip x={1110} y={760} w={640} text="dissociation: separating into ions" size={36} color={TEAL} at={K4.diss} />
			<Sx x={1110} y={872} text="each one wrapped in water" size={38} color={WATER_INK} hand at={K4.wraps} />
			<MistakeChip x={520} y={900} text="NaCl molecules in water" size={34} at={K4.nomol} note="only separate hydrated ions" />
			<Fade at={2}><PicH p={CUSO4_DISS} x={96} y={420} h={300} /></Fade>
			<Sx x={96} y={770} text="hydrated Cu^{2+}" size={34} color={BLUE_CU} weight={700} at={K4.wraps} />
			<Sx x={96} y={812} text="= the blue" size={34} color={BLUE_CU} hand at={K4.wraps + 6} />
			{void K4.written}{void K4.aqueous}{void K4.already}{void INK}
		</Overlay>
	</>
	);
};
