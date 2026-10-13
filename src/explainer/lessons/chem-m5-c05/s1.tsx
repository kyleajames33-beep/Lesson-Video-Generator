import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cueFrame, cues} from '../../cues';
import {IronTube} from '../chem-m5-c03/parts';
import {Arrow, FWD, Fade, Frac, Line, Overlay, RateBars, Ring, Sx, TEAL, fracGeom, rowXs, Tick} from './parts';
import type {Term} from './parts';
import {Heading, FE, FE_INK, RED, RED_INK, SCN_INK, SCN, cw, kf, sc} from './common';

const FEs: Term = {t: 'Fe^{3+}', at: 0, color: FE_INK};
const SCNs: Term = {t: 'SCN^{−}', at: 0, color: SCN_INK};
const REDs: Term = {t: 'FeSCN^{2+}', at: 0, color: RED_INK};

// ---------- 1. Hook ----------
const H = 'hook';
const K1 = cues(sc(H), {add: 'add more iron', settles: 'settles again', every: 'Every amount has changed', yet: 'Yet one thing', take: 'Take the red ion', tenth1: 'is a tenth', also: 'also a tenth', ratio: 'this ratio', tag: 'Here is the iron'});
const T_RED = cw(H, 'Take the red ion', 2);
const T_FE = cw(H, 'divide by the iron times the thiocyanate', 3);
const T_SCN = cw(H, 'divide by the iron times the thiocyanate', 6);
const A_ = (k: number) => cw(H, 'Ten over ten times ten', k);
const B_ = (k: number) => cw(H, 'Twelve over fifteen times eight', k);
const T_A_TENTH = cw(H, 'is a tenth', 2);
const T_B_EQ = cw(H, 'is also a tenth', 0);
const T_B_TENTH = cw(H, 'also a tenth', 2);
const BX_BEFORE = 690, BX_AFTER = 830;
const BROW = {fe: 410, scn: 520, red: 630};
const NSZ = 60;
export const SceneHook: React.FC = () => {
	const f = useCurrentFrame();
	const t = kf(f, [[K1.add + 10, 0], [K1.settles + 40, 0.75]]);
	const after = (a: number, b: number) => Math.round(kf(f, [[K1.settles, a], [K1.settles + 45, b]]));
	const nA = (v: number) => tw0(String(v));
	const tubeCx = 150 + 0.282 * 560 / 2;
	const drops = [0, 1, 2, 3, 4, 5, 6].map(i => {
		const t0 = K1.add + 4 + i * 6;
		const u = Math.max(0, Math.min(1, (f - t0) / 34));
		return {i, u, x: tubeCx + (i - 3) * 8, y: 205 + u * 210, o: u <= 0 ? 0 : u < 0.7 ? 1 : 1 - (u - 0.7) / 0.3};
	});
	const bf = (col: number, row: number): [number, number] => [col - nA(10) / 2, row];
	const symCx = 1300, symCy = 300;
	const g = fracGeom(symCx, symCy, 64, [REDs], [FEs, SCNs]);
	const aNum: Term[] = [{t: '10', br: false, at: A_(0), from: bf(BX_BEFORE, BROW.red), color: RED_INK}];
	const aDen: Term[] = [{t: '10', br: false, at: A_(2), from: bf(BX_BEFORE, BROW.fe), color: FE_INK}, {t: '×', br: false, at: A_(3)}, {t: '10', br: false, at: A_(4), from: bf(BX_BEFORE, BROW.scn), color: SCN_INK}];
	const bNum: Term[] = [{t: '12', br: false, at: B_(0), from: bf(BX_AFTER, BROW.red), color: RED_INK}];
	const bDen: Term[] = [{t: '15', br: false, at: B_(2), from: bf(BX_AFTER, BROW.fe), color: FE_INK}, {t: '×', br: false, at: B_(3)}, {t: '8', br: false, at: B_(4), from: bf(BX_AFTER, BROW.scn), color: SCN_INK}];
	const yA = 540, yB = 800;
	return (
		<>
			<Heading text="What stays the same?" at={4} size={68} />
			<IronTube x={150} y={260} h={560} t={t} opacity={prog(f, 4, 16)} />
			<Overlay>
				{/* iron drops in */}
				<Arrow x1={tubeCx} y1={190} x2={tubeCx} y2={252} at={K1.add} color={FE_INK} width={6} out={K1.add + 50} />
				{drops.map(d => d.o > 0.01 ? <circle key={d.i} cx={d.x} cy={d.y} r={11} fill={FE} stroke={FE_INK} strokeWidth={2.5} opacity={d.o} /> : null)}
				{/* counts board */}
				<Fade at={6}>
					<Sx x={BX_BEFORE} y={346} text="before" size={42} color={INK_SOFT} anchor="middle" hand at={6} />
				</Fade>
				<Sx x={BX_AFTER} y={346} text="after" size={42} color={INK_SOFT} anchor="middle" hand at={K1.add + 10} />
				{[{y: BROW.fe, c: FE, ink: FE_INK, n: 'Fe^{3+}', a: [10, 15]}, {y: BROW.scn, c: SCN, ink: SCN_INK, n: 'SCN^{−}', a: [10, 8]}, {y: BROW.red, c: RED, ink: RED_INK, n: 'FeSCN^{2+}', a: [10, 12]}].map((r, i) => (
					<g key={i}>
						<Fade at={8 + i * 4}>
							<circle cx={420} cy={r.y - 18} r={15} fill={r.c} stroke={INK} strokeWidth={2.5} />
							<Sx x={450} y={r.y} text={r.n} size={40} color={r.ink} at={8 + i * 4} />
							<Sx x={BX_BEFORE} y={r.y} text="10" size={NSZ} color={r.ink} anchor="middle" at={10 + i * 4} />
						</Fade>
						<Sx x={BX_AFTER} y={r.y} text={String(after(r.a[0], r.a[1]))} size={NSZ} color={r.ink} anchor="middle" at={K1.add + 12} />
					</g>
				))}
				<DrawPath d="M410,672 L410,690 L870,690 L870,672" at={K1.every} dur={20} color={AMBER_INK} width={6} />
				<Sx x={640} y={748} text="every amount has changed" size={46} color={AMBER_INK} anchor="middle" hand at={K1.every + 8} />
				{/* symbolic ratio */}
				<Frac cx={symCx} cy={symCy} size={64} num={[{...REDs, at: T_RED}]} den={[{...FEs, at: T_FE}, {...SCNs, at: T_SCN}]} barAt={K1.take} />
				<Ring cx={symCx} cy={symCy + 24} rx={g.W / 2 + 56} ry={118} at={K1.ratio} color={TEAL} seed={4} />
				{/* first mixture */}
				<Sx x={900} y={yA - 100} text="first mixture" size={40} color={INK_SOFT} hand at={A_(0) - 10} />
				<Frac cx={1040} cy={yA} size={56} num={aNum} den={aDen} barAt={A_(0)} />
				<Sx x={1180} y={yA + 18} text="=" size={56} at={T_A_TENTH - 20} />
				<Frac cx={1290} cy={yA} size={56} num={[{t: '10', br: false, at: T_A_TENTH - 14}]} den={[{t: '100', br: false, at: T_A_TENTH - 10}]} barAt={T_A_TENTH - 14} />
				<Sx x={1400} y={yA + 18} text="=" size={56} at={T_A_TENTH} />
				<Sx x={1440} y={yA + 26} text="0.1" size={72} color={TEAL} at={T_A_TENTH + 4} />
				{/* second mixture */}
				<Sx x={900} y={yB - 100} text="second mixture, after more iron" size={40} color={INK_SOFT} hand at={B_(0) - 10} />
				<Frac cx={1010} cy={yB} size={56} num={bNum} den={bDen} barAt={B_(0)} />
				<Sx x={1150} y={yB + 18} text="=" size={56} at={T_B_EQ} />
				<Frac cx={1280} cy={yB} size={56} num={[{t: '12', br: false, at: T_B_EQ + 6}]} den={[{t: '120', br: false, at: T_B_EQ + 10}]} barAt={T_B_EQ + 6} />
				<Sx x={1400} y={yB + 18} text="=" size={56} at={T_B_TENTH - 4} />
				<Sx x={1440} y={yB + 26} text="0.1" size={72} color={TEAL} at={T_B_TENTH} />
				{/* same value */}
				<DrawPath d={`M1580,${yA + 8} L1612,${yA + 8} L1612,${yB + 8} L1580,${yB + 8}`} at={T_B_TENTH + 6} dur={26} color={TEAL} width={6} dash="12 10" />
				<Sx x={1634} y={(yA + yB) / 2 + 16} text="same value" size={46} color={TEAL} hand at={T_B_TENTH + 16} />
				<Tick x={1700} y={(yA + yB) / 2 + 80} at={T_B_TENTH + 30} s={40} />
				{/* chip */}
				<Fade at={K1.tag}>
					<rect x={96} y={900} width={1000} height={62} rx={31} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={596} y={942} text="made-up numbers to show the pattern, units as in earlier videos" size={36} color={INK_SOFT} anchor="middle" hand at={K1.tag} />
				</Fade>
			</Overlay>
		</>
	);
};
const tw0 = (s: string) => s.length * 33;
void FWD; void RED;

// ---------- 2a. The two rates, set equal ----------
const R = 'rates-equal';
const K2 = cues(sc(R), {brackets: 'square brackets', remember: 'Now remember the rates', joining: 'joining runs at', splitting: 'splitting runs at', equal: 'the rates are equal'});
const fw = (k: number) => cw(R, 'point three times the iron times the thiocyanate', k);
const rv = (k: number) => cw(R, 'three times the red ion', k);
const fin = (k: number) => cw(R, 'so point three times iron times thiocyanate equals three times the red ion', k);
export const SceneRates: React.FC = () => {
	const f = useCurrentFrame();
	const s = kf(f, [[0, 0], [44, 1]]);
	const th = 560 + (300 - 560) * s, tx = 150 + (1690 - 150) * s, ty = 260 + (150 - 260) * s;
	const SZ = 52;
	const fwdItems: Term[] = [
		{t: 'forward =', br: false, hand: true, color: FWD, at: K2.joining},
		{t: '0.3', br: false, at: fw(0)}, {t: '×', br: false, at: fw(2)},
		{...FEs, at: fw(4)}, {...SCNs, at: fw(7)},
	];
	const revItems: Term[] = [
		{t: 'reverse =', br: false, hand: true, color: AMBER_INK, at: K2.splitting},
		{t: '3', br: false, at: rv(0)}, {t: '×', br: false, at: rv(1)},
		{...REDs, at: rv(3)},
	];
	const fx = rowXs(fwdItems, SZ, 640), rx = rowXs(revItems, SZ, 640);
	const comb: Term[] = [
		{t: '0.3', br: false, at: fin(1)}, {t: '×', br: false, at: fin(3)}, {...FEs, at: fin(4)}, {...SCNs, at: fin(6)},
		{t: '=', br: false, at: fin(7)}, {t: '3', br: false, at: fin(8)}, {t: '×', br: false, at: fin(9)}, {...REDs, at: fin(11)},
	];
	const br0: Term = {...FEs, at: K2.brackets + 20};
	const bx = rowXs([br0], 80, 640);
	return (
		<>
			<Heading text="The two rates, set equal" at={4} size={68} />
			<IronTube x={tx} y={ty} h={th} t={0.75} opacity={1} />
			<Overlay>
				<RateBars x0={170} base={730} scale={9} fwd={30} rev={30} at={K2.remember} fwdLabel="30" revLabel="30" eqAt={K2.equal} bw={110} gx={230} axisLabel="rate (units per tick)" />
				{/* square brackets mean amount per litre */}
				<Line x={640} y={262} size={80} items={[br0]} />
				<Sx x={bx[0].x + bx[0].w + 36} y={262} text="= the amount of Fe^{3+} per litre" size={46} hand color={INK_SOFT} at={K2.brackets + 34} />
				{/* rate lines */}
				<Line x={640} y={400} size={SZ} items={fwdItems} />
				<Line x={640} y={540} size={SZ} items={revItems} />
				<Ring cx={fx[3].x + fx[3].w / 2} cy={400 - 16} rx={fx[3].w / 2 + 14} ry={52} at={fw(4) + 14} color={FWD} seed={2} />
				<Ring cx={fx[4].x + fx[4].w / 2} cy={400 - 16} rx={fx[4].w / 2 + 14} ry={52} at={fw(7) + 14} color={FWD} seed={5} />
				<Ring cx={rx[3].x + rx[3].w / 2} cy={540 - 16} rx={rx[3].w / 2 + 14} ry={52} at={rv(3) + 14} color={AMBER_INK} seed={7} />
				{/* the two lines join */}
				<DrawPath d="M600,350 Q566,400 566,470 Q566,540 600,590" at={K2.equal} dur={22} color={TEAL} width={7} />
				<Sx x={520} y={494} text="=" size={90} color={TEAL} anchor="middle" at={K2.equal + 10} />
				<Fade at={fin(0) - 10}>
					<rect x={600} y={650} width={1080} height={130} rx={26} fill="#fffdf8" stroke={TEAL} strokeWidth={4} />
				</Fade>
				<Line x={640} y={738} size={62} items={comb} />
			</Overlay>
		</>
	);
};

// ---------- 2b. The ratio that stays put, and its name ----------
const N = 'ratio-name';
const K3 = cues(sc(N), {both3: 'Divide both sides by three', andBy: 'and by the iron', ratioIs: 'The red ion over', oh: 'equals point three over three', fixed: 'fixed', eqc: 'the equilibrium constant', kk: 'K also written', keq: 'also written Keq', name: 'a name'});
export const SceneRatio: React.FC = () => {
	const f = useCurrentFrame();
	const SZ = 56;
	const l1: Term[] = [
		{t: '0.3', br: false, at: -1000}, {t: '×', br: false, at: -1000}, {...FEs, at: -1000, strike: K3.andBy + 16}, {...SCNs, at: -1000, strike: K3.andBy + 22},
		{t: '=', br: false, at: -1000}, {t: '3', br: false, at: -1000, strike: K3.both3 + 14}, {t: '×', br: false, at: -1000, strike: K3.both3 + 20}, {...REDs, at: -1000},
	];
	const L1X = 960 - 150;
	const xs = rowXs(l1, SZ, L1X, 'middle');
	const l1y = 280;
	const cell = (i: number): [number, number] => [xs[i].x + 17, l1y];
	const gfr = fracGeom(560, 640, 60, [REDs], [FEs, SCNs]);
	const num: Term[] = [{...REDs, at: K3.ratioIs, from: cell(7), dur: 30}];
	const den: Term[] = [{...FEs, at: K3.andBy + 24, from: cell(2), dur: 30}, {...SCNs, at: K3.andBy + 34, from: cell(3), dur: 30}];
	const p3 = (k: number) => cw(N, 'equals point three over three', k);
	const tenth = cw(N, 'a tenth', 1);
	const eqX = gfr.x2 + 38;
	return (
		<>
			<Heading text="The ratio that stays put" at={4} size={68} />
			<IronTube x={1690} y={150} h={300} t={0.75} opacity={1} />
			<Overlay>
				<Line x={L1X} y={l1y} size={SZ} items={l1} anchor="middle" />
				{/* divide both sides by 3 */}
				<Sx x={xs[0].x + xs[0].w / 2} y={l1y + 74} text="÷ 3" size={46} hand color={INK} anchor="middle" at={K3.both3 + 6} />
				<Sx x={xs[5].x + (xs[7].x + xs[7].w - xs[5].x) / 2} y={l1y + 74} text="÷ 3" size={46} hand color={INK} anchor="middle" at={K3.both3 + 14} />
				<Fade at={K3.andBy}>
					<Sx x={xs[2].x + (xs[3].x + xs[3].w - xs[2].x) / 2} y={l1y + 74} text="÷ [Fe^{3+}][SCN^{−}]" size={42} hand color={INK} anchor="middle" at={K3.andBy + 4} />
					<Sx x={xs[7].x + xs[7].w / 2} y={l1y + 126} text="÷ [Fe^{3+}][SCN^{−}]" size={42} hand color={INK} anchor="middle" at={K3.andBy + 10} />
				</Fade>
				{/* the new ratio */}
				<Frac cx={560} cy={640} size={60} num={num} den={den} barAt={K3.andBy + 20} />
				<Sx x={eqX + 12} y={658} text="=" size={56} anchor="middle" at={K3.oh} />
				<Frac cx={gfr.x2 + 200} cy={640} size={60} num={[{t: '0.3', br: false, at: p3(1)}]} den={[{t: '3', br: false, at: p3(3)}]} barAt={p3(1)} />
				<Sx x={gfr.x2 + 332} y={658} text="=" size={56} anchor="middle" at={tenth - 4} />
				<Sx x={gfr.x2 + 372} y={664} text="0.1" size={68} color={TEAL} at={tenth} />
				<Ring cx={gfr.x2 + 200} cy={650} rx={96} ry={104} at={K3.fixed} color={AMBER_INK} seed={3} />
				<Sx x={gfr.x2 + 200} y={800} text="fixed at one temperature" size={46} hand color={AMBER_INK} anchor="middle" at={K3.fixed + 8} />
				{/* the name */}
				<Arrow x1={gfr.x2 + 480} y1={640} x2={gfr.x2 + 590} y2={700} at={K3.eqc - 6} color={TEAL} width={6} />
				<Sx x={1330} y={560} text="the equilibrium constant" size={58} hand color={TEAL} at={K3.eqc} />
				<Sx x={1280} y={800} text="K" size={230} hand color={TEAL} at={K3.kk} />
				<Sx x={1450} y={740} text="also written Keq" size={46} hand color={INK_SOFT} at={K3.keq} />
				<Fade at={K3.kk + 20}>
					<Sx x={1450} y={800} text="the value the ratio settles at," size={36} color={INK_SOFT} at={K3.kk + 20} />
					<Sx x={1450} y={846} text="at a given temperature" size={36} color={INK_SOFT} at={K3.kk + 26} />
				</Fade>
				{f < 0 ? null : null}
			</Overlay>
		</>
	);
};
void cueFrame; void prog; void INK;
