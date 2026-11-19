// Lesson parts for math-a12-g03 (Revision 3: which financial or probability model do the givens justify?), on the
// maths studio kit, g02's parts (board parts, ModelRows, InvestStage, the tank; imported read-only), s01's spinner
// geometry, s06's cookie and f13's statement sheet (read-only). Lesson-local rigs:
// - the hook's two series (simple ink, compound blue) with amber gap bars, sharing one clock with the two jars;
// - balanceAt: the reducing-balance loan A_n = P(1 + r)^n − M[(1 + r)^n − 1]/r, drawn to zero with P as a dial;
// - normPdf for the block-and-bell axis; small coded icons for the finance and probability rows.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CARD, MATH_ROLES, MATHS_KIT2_PLATES, plateHeight} from '../../math/studio';
import type {PlateSpec} from '../../math/studio';
import {prog} from '../../kit';
import {FONT_DISPLAY, GREY, INK, KR} from '../math-a12-g02/parts';
import type {InvestLayout} from '../math-a12-g02/parts';

export * from '../math-a12-g02/parts';
export {G02FinalFrame} from '../math-a12-g02/s3';
export {QCard} from '../math-a12-g02/s1';
export {PillBar} from '../math-a12-g02/s2';
export {SPIN_BASE, SPIN_PTR, SPIN_DISC} from '../math-a12-s01/parts';
export {Cookie, COOKIE, CHIP} from '../math-a12-s06/parts';
export {SuperSheet, SUPER, superW} from '../math-a12-f13/parts';

// ---------- colour roles (finance: decision 47; probability: decision 53) ----------
export const BAL = MATH_ROLES.balance, INT = MATH_ROLES.interest, REP = MATH_ROLES.repay, DEP = MATH_ROLES.deposit, UNK = MATH_ROLES.gradient;
export const DENS = MATH_ROLES.b, PAREA = MATH_ROLES.k, DATA = MATH_ROLES.a;

// ---------- plates (alpha boxes as measured in their strand lessons) ----------
export const HOUSE: PlateSpec = {src: 'assets/physics/phys-y11-house-v1.png', nat: [1774, 887], box: [219, 134, 1549, 782]};
export const VAN: PlateSpec = {src: 'assets/maths/ma12-delivery-van-v1.png', nat: [1642, 958], box: [236, 222, 1406, 790]};
export const CHIP_BAG: PlateSpec = {src: 'assets/maths/ma12-chip-bag-v1.png', nat: [1086, 1448], box: [122, 189, 939, 1265]};
export const SKATE = MATHS_KIT2_PLATES.skateboard;
export const G03_PLATES: PlateSpec[] = [HOUSE, VAN, CHIP_BAG, SKATE];
export const pH = plateHeight;

// ---------- money ----------
const group = (v: number, d: number) => {const [a, b] = Math.abs(v).toFixed(d).split('.'); return a.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (b ? '.' + b : '');};
/** "$12,345.67" (a minus sign for negatives). */
export const money = (v: number, d = 2) => `${v < 0 ? '−' : ''}$${group(v, d)}`;

// ---------- the hook's two series ----------
export const simpleB = (y: number) => 10000 + 600 * y;
export const compB = (y: number) => 10000 * 1.06 ** y;
/** The compact layout of the investment stage in g03's hook (strips smaller, at the top). */
export const INVEST_TOP: InvestLayout = {jx: 70, y1: 160, y2: 345, jh: 165, sx: 220, sw: 900, size: 32};

// ---------- the loan ----------
export const LOAN = {M: 2800, r: 0.004, n: 300};
export const G300 = 1.004 ** 300;
/** Balance after n monthly repayments for amount borrowed P. */
export const balanceAt = (P: number, n: number) => {const g = (1 + LOAN.r) ** n; return P * g - (LOAN.M * (g - 1)) / LOAN.r;};
export const P_STAR = (LOAN.M * (G300 - 1)) / (LOAN.r * G300);

// ---------- the normal density ----------
export const normPdf = (x: number, mu: number, s: number) => Math.exp(-0.5 * ((x - mu) / s) ** 2) / (s * Math.sqrt(2 * Math.PI));

// ---------- an underline that draws on at `at` (amber) ----------
export const UL: React.FC<{at: number; children: React.ReactNode; color?: string}> = ({at, children, color = KR.stroke}) => {
	const f = useCurrentFrame();
	const u = prog(f, at, 16);
	return <span style={{position: 'relative', fontWeight: 800}}>{children}<span style={{position: 'absolute', left: 0, bottom: -2, height: 5, borderRadius: 3, width: `${u * 100}%`, background: color}} /></span>;
};

// ---------- small coded icons (150 × ~110) for the decision rows ----------
const IW = 150, IH = 110;
export const IconLine: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}>{[0, 1, 2, 3, 4, 5].map(i => <circle key={i} cx={14 + i * 24} cy={96 - i * 14} r={8} fill={INK} />)}<line x1={4} x2={146} y1={104} y2={104} stroke={INK} strokeWidth={3} /></svg>;
export const IconBend: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}>{[0, 1, 2, 3, 4, 5].map(i => <circle key={i} cx={14 + i * 24} cy={96 - 6 * (1.55 ** i - 1)} r={8} fill={DEP.stroke} />)}<line x1={4} x2={146} y1={104} y2={104} stroke={INK} strokeWidth={3} /></svg>;
export const IconAnnuity: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}><line x1={4} x2={146} y1={90} y2={90} stroke={INK} strokeWidth={3} />{[0, 1, 2, 3, 4].map(i => {const x = 20 + i * 28, cap = (4 - i) * 9; return <g key={i}><line x1={x} x2={x} y1={88} y2={48} stroke={DEP.stroke} strokeWidth={5} /><path d={`M${x - 8},${56} L${x},${44} L${x + 8},${56}`} fill="none" stroke={DEP.stroke} strokeWidth={4} />{cap ? <rect x={x - 7} y={40 - cap} width={14} height={cap} fill={INT.soft} stroke={INT.stroke} strokeWidth={2} /> : null}</g>;})}</svg>;
export const IconLoan: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}><path d="M8,14 Q80,24 140,100" fill="none" stroke={INK} strokeWidth={5} /><line x1={4} x2={146} y1={100} y2={100} stroke={INK} strokeWidth={3} /><circle cx={140} cy={100} r={8} fill={MATH_ROLES.answer.stroke} /><text x={70} y={92} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 26, fill: REP.ink}}>A = 0</text></svg>;
export const IconBars: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}>{[1, 2, 3, 4].map(i => <rect key={i} x={6 + (i - 1) * 36} y={100 - i * 20} width={26} height={i * 20} fill={DATA.soft} stroke={DATA.stroke} strokeWidth={3} />)}<line x1={0} x2={150} y1={100} y2={100} stroke={INK} strokeWidth={3} /></svg>;
export const IconDensity: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}><path d="M60,100 L60,52 Q80,40 100,46 L100,100 Z" fill={PAREA.soft} stroke={PAREA.stroke} strokeWidth={3} /><path d="M6,96 Q40,20 75,40 T146,90" fill="none" stroke={DENS.stroke} strokeWidth={5} /><line x1={0} x2={150} y1={100} y2={100} stroke={INK} strokeWidth={3} /></svg>;
export const IconFlat: React.FC = () => <svg width={IW} height={IH} style={{overflow: 'visible'}}><rect x={24} y={50} width={100} height={50} fill={DENS.soft} stroke={DENS.stroke} strokeWidth={4} /><line x1={0} x2={150} y1={100} y2={100} stroke={INK} strokeWidth={3} /></svg>;
export const IconBell: React.FC = () => {let d = ''; for (let i = 0; i <= 40; i++) {const x = 4 + (i / 40) * 142, z = (x - 75) / 24; d += `${i ? 'L' : 'M'}${x.toFixed(1)},${(100 - 82 * Math.exp(-0.5 * z * z)).toFixed(1)}`;} return <svg width={IW} height={IH} style={{overflow: 'visible'}}><path d={d} fill="none" stroke={DENS.stroke} strokeWidth={5} /><line x1={0} x2={150} y1={100} y2={100} stroke={INK} strokeWidth={3} /></svg>;};

/** A labelled dashed slot (the two shapes a question might mean). */
export const DashSlot: React.FC<{x: number; y: number; w: number; at: number; children: React.ReactNode}> = ({x, y, w, at, children}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	return <div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, boxSizing: 'border-box', border: `3px dashed ${GREY}`, borderRadius: 14, background: CARD, padding: '4px 14px', textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 30, color: INK}}>{children}</div>;
};
