import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER_INK, DrawPath, INK, INK_SOFT, prog} from '../../kit';
import {cueFrame, cues} from '../../cues';
import {IronTube} from '../chem-m5-c03/parts';
import {Arrow, FWD, Fade, Frac, Line, Overlay, Ring, Sx, TEAL, fracGeom, termW, Tick} from './parts';
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

// ---------- 2. Square brackets, and the name K ----------
const N = 'ratio-name';
const K2 = cues(sc(N), {
	first: 'First, some notation', brackets: 'Square brackets', conc: 'mean its concentration', amount: 'its amount per litre', moles: 'in moles per litre',
	red: 'So the red ion', iron: 'the iron times', thio: 'the thiocyanate in brackets', ratio: 'is our ratio', any: 'For any settled mixture', temp: 'at one temperature',
	same: 'it comes out the same', tenth: 'a tenth in both', name: 'a name', eqc: 'the equilibrium constant', kk: 'K also written', keq: 'also written Keq',
});
const brW = (k: number) => cw(N, 'in brackets', 1, k);
export const SceneRatio: React.FC = () => {
	const f = useCurrentFrame();
	// the evidence: the hook's two fractions, smaller, on the left
	const EX = 300, eA = 520, eB = 760, ES = 50;
	const ev = (n: string, d1: string, d2: string, cy: number, label: string) => (
		<>
			<Sx x={EX - 190} y={cy - 92} text={label} size={36} color={INK_SOFT} hand at={6} />
			<Frac cx={EX} cy={cy} size={ES} num={[{t: n, br: false, at: 6, color: RED_INK}]} den={[{t: d1, br: false, at: 6, color: FE_INK}, {t: '×', br: false, at: 6}, {t: d2, br: false, at: 6, color: SCN_INK}]} barAt={4} />
			<Sx x={EX + 122} y={cy + 17} text="=" size={ES} anchor="middle" at={8} />
			<Sx x={EX + 152} y={cy + 24} text="0.1" size={64} color={TEAL} at={8} />
		</>
	);
	// the symbolic ratio, built as the narration names each species
	const RS = 64, RCX = 1050, RCY = 560;
	const num: Term[] = [{...REDs, at: K2.red + 8}];
	const den: Term[] = [{...FEs, at: K2.iron + 2}, {...SCNs, at: K2.thio + 2}];
	const g = fracGeom(RCX, RCY, RS, num, den);
	return (
		<>
			<Heading text="Square brackets, and the name K" at={4} size={64} />
			<IronTube x={1690} y={150} h={300} t={0.75} opacity={prog(f, 0, 14)} />
			<Overlay>
				{/* evidence kept from the hook */}
				{ev('10', '10', '10', eA, 'first mixture')}
				{ev('12', '15', '8', eB, 'after more iron')}
				<DrawPath d={`M${EX + 262},${eA + 6} L${EX + 292},${eA + 6} L${EX + 292},${eB + 6} L${EX + 262},${eB + 6}`} at={10} dur={20} color={TEAL} width={6} dash="12 10" />
				<Sx x={EX + 310} y={(eA + eB) / 2 + 14} text="same value" size={40} color={TEAL} hand at={14} />
				<Fade at={8}>
					<rect x={96} y={880} width={560} height={58} rx={29} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} />
					<Sx x={376} y={919} text="units, as in earlier videos" size={36} color={INK_SOFT} anchor="middle" hand at={8} />
				</Fade>
				{/* square brackets mean concentration */}
				<Line x={860} y={300} size={84} items={[{...FEs, at: K2.brackets}]} />
				<Ring cx={860 + termW({...FEs, at: 0}, 84) / 2} cy={274} rx={termW({...FEs, at: 0}, 84) / 2 + 22} ry={70} at={K2.brackets + 18} out={K2.red} color={TEAL} seed={2} />
				<Sx x={1110} y={268} text="concentration:" size={46} color={INK} hand at={K2.conc} />
				<Sx x={1110} y={322} text="amount per litre (mol/L)" size={46} color={INK} hand at={K2.amount} />
				{/* the ratio in bracket form, each pair ringed as it is spoken */}
				<Frac cx={RCX} cy={RCY} size={RS} num={num} den={den} barAt={K2.red} />
				<Ring cx={g.num[0].x + g.num[0].w / 2} cy={g.yn - RS * 0.3} rx={g.num[0].w / 2 + 14} ry={52} at={brW(1)} out={K2.ratio + 4} color={RED_INK} seed={3} />
				<Ring cx={g.den[0].x + g.den[0].w / 2} cy={g.yd - RS * 0.3} rx={g.den[0].w / 2 + 12} ry={50} at={K2.iron + 14} out={K2.ratio + 4} color={FE_INK} seed={5} />
				<Ring cx={g.den[1].x + g.den[1].w / 2} cy={g.yd - RS * 0.3} rx={g.den[1].w / 2 + 12} ry={50} at={brW(2)} out={K2.ratio + 4} color={SCN_INK} seed={7} />
				<Ring cx={RCX} cy={RCY + 22} rx={g.W / 2 + 22} ry={104} at={K2.ratio} color={TEAL} seed={4} />
				<Sx x={RCX} y={RCY + 176} text="any settled mixture of this reaction" size={40} color={INK_SOFT} anchor="middle" hand at={K2.any} />
				<Sx x={RCX} y={RCY + 226} text="at one temperature" size={46} color={AMBER_INK} anchor="middle" hand at={K2.temp} />
				{/* = 0.1, the same value as both pieces of evidence */}
				<Sx x={g.x2 + 50} y={RCY + 18} text="= 0.1" size={64} color={TEAL} at={K2.tenth} />
				<Ring cx={EX + 204} cy={eA + 4} rx={54} ry={46} at={K2.tenth + 4} color={TEAL} seed={6} />
				<Ring cx={EX + 204} cy={eB + 4} rx={54} ry={46} at={K2.tenth + 10} color={TEAL} seed={8} />
				{/* the name */}
				<Arrow x1={g.x2 + 110} y1={RCY + 50} x2={1490} y2={690} at={K2.name} color={TEAL} width={6} />
				<Sx x={1500} y={830} text="K" size={200} hand color={TEAL} at={K2.kk} />
				<Sx x={1420} y={890} text="the equilibrium constant" size={44} hand color={TEAL} at={K2.eqc} />
				<Sx x={1420} y={946} text="also written Keq" size={40} hand color={INK_SOFT} at={K2.keq} />
			</Overlay>
		</>
	);
};
void cueFrame; void INK; void K2.first; void K2.moles; void K2.same;
