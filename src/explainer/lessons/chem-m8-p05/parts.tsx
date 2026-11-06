// Drawing parts for M8 P05 (testing unknown organic liquids practical). Re-exports M8 C08 (and through it C04 to the M5
// chain: chips, crossed chips, plates, question text, countdown, key notes, row cards, framed answer, rack tubes,
// thumbnails, gas path, spatula, skeletal molecules with group rings) and imports M8 P03's risk grid, glow, write-on
// text, icon fit and the control colours (all read-only). New here:
// - LBot: the painted dropper bottle with a coded letter; RoleBox: a role outline (blank grey, known teal, unknown navy);
// - Card: a titled card; Bath: the water-bath pair with name chips, leader lines, result chips, drops and heat lines;
// - Clock: a small coded dial that sweeps a few minutes; Bung: a coded bung with the delivery tube to the limewater;
// - Table4: the results table writer (Liquid | Test | Observation | Inference; the inference unlocks after the
//   observation); ClaimTable: the claims card (supported | not detected | can't tell) with observed-state thumbnails.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {AMB, ANS8, CC, COOH, GREYS, INK, INK_SOFT, NAVY, OHV, PicF, Sx, Thumb, clamp01, mw, natPt, smooth, tubeW, vis} from '../chem-m8-c08/parts';
import {BLANKC, GOOD, Glow, HAZ, IconP, KNOWNC, RiskGrid, UNKN, Wr} from '../chem-m8-p03/parts';
import type {RiskRow} from '../chem-m8-p03/parts';
import {BATH, BATH_A, DBOT, DBOT_A} from './common';
import type {PDef} from './common';

export * from '../chem-m8-c08/parts';
export {BLANKC, GOOD, Glow, HAZ, IconP, KNOWNC, RiskGrid, UNKN, Wr};
export type {RiskRow};

export const CARDF = '#fffdf8', EDGE = 'rgba(60,45,20,0.24)';
export const CR6 = '#b5502b', GREYC = '#5f584c';

// ---------- bottles and roles ----------
export const LBot: React.FC<{x: number; y: number; h: number; letter?: string; letterAt?: number; at?: number; out?: number; o?: number; glow?: [number, number]}> = ({x, y, h, letter, letterAt = -1000, at = -1000, out, o = 1, glow}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const [lx, ly] = natPt(DBOT, x, y, h, DBOT_A.label[0], DBOT_A.label[1]);
	const w = tubeW(DBOT, h);
	const g = glow ? vis(f, glow[0], glow[1], 10) : 0;
	return (
		<g opacity={v}>
			{g > 0.01 ? <ellipse cx={x + w / 2} cy={y + h * 0.55} rx={w * 0.85} ry={h * 0.6} fill="#f6d77a" opacity={0.45 * g} /> : null}
			<PicF p={DBOT} x={x} y={y} h={h} />
			{letter ? <Sx x={lx} y={ly + h * 0.07} text={letter} size={h * 0.2} color={NAVY} anchor="middle" weight={800} at={letterAt} /> : null}
		</g>
	);
};
export type Role = 'blank' | 'known' | 'unk';
export const roleC = (r: Role) => (r === 'blank' ? BLANKC : r === 'known' ? KNOWNC : UNKN);
export const RoleBox: React.FC<{x: number; y: number; w: number; h: number; role: Role; at: number; glow?: number}> = ({x, y, w, h, role, at, glow}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	const g = glow === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - glow) / 40) * Math.PI));
	return (
		<g opacity={v}>
			{g > 0.01 ? <rect x={x - 8} y={y - 8} width={w + 16} height={h + 16} rx={26} fill="#f6d77a" opacity={0.35 * g} /> : null}
			<rect x={x} y={y} width={w} height={h} rx={22} fill="none" stroke={roleC(role)} strokeWidth={role === 'blank' ? 4 : 5} strokeDasharray={role === 'blank' ? '12 9' : undefined} />
		</g>
	);
};

// ---------- a titled card ----------
export const Card: React.FC<{x: number; y: number; w: number; h: number; title?: string; at?: number; out?: number; color?: string; o?: number; titleSize?: number; fill?: string}> = ({x, y, w, h, title, at = -1000, out, color = NAVY, o = 1, titleSize = 40, fill = CARDF}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={22} fill={fill} stroke={color === NAVY ? EDGE : color} strokeWidth={3} />
			{title ? <Sx x={x + 28} y={y + titleSize + 14} text={title} size={titleSize} color={color} hand weight={700} at={-1000} /> : null}
		</g>
	);
};
/** A short chip with a coloured outline (Inter), anchored at its left or centre. */
export const Pill: React.FC<{x: number; y: number; text: string; at: number; out?: number; color?: string; size?: number; anchor?: 'start' | 'middle'; fill?: string; o?: number}> = ({x, y, text, at, out, color = NAVY, size = 30, anchor = 'start', fill = CARDF, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12) * o;
	if (v <= 0.01) return null;
	const w = mw(text, size, false, 800) + size * 1.2, h = size * 1.6;
	const x0 = anchor === 'middle' ? x - w / 2 : x;
	return (
		<g opacity={v}>
			<rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={fill} stroke={color} strokeWidth={3.5} />
			<Sx x={x0 + w / 2} y={y + h / 2 + size * 0.35} text={text} size={size} color={color} anchor="middle" weight={800} at={-1000} />
		</g>
	);
};
export const pillW = (text: string, size = 30) => mw(text, size, false, 800) + size * 1.2;

// ---------- the water bath with chips ----------
export const bathPt = (x: number, y: number, h: number, nx: number, ny: number) => natPt(BATH.before, x, y, h, nx, ny);
export type BathChip = {name: string; at: number; color?: string; res?: 'green' | 'orange'; resAt?: number};
const RES_C = {green: '#2c8a3a', orange: '#d0661a'};
/** The bath plate (before, cross-fading to after from `swap`) with name chips spread above (leader lines to the tube
 *  mouths) and result chips spread below the plate. */
export const Bath: React.FC<{x: number; y: number; h: number; swap?: number; chips: BathChip[]; spread?: number; size?: number; at?: number; out?: number; o?: number; chipY?: number; resY?: number; after?: boolean}> = ({x, y, h, swap, chips, spread = 230, size = 30, at = -1000, out, o = 1, chipY, resY, after = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const q = after ? 1 : swap === undefined ? 0 : prog(f, swap, 30);
	const xs = BATH_A.tubes.map(nx => bathPt(x, y, h, nx, BATH_A.mouth)[0]);
	const my = bathPt(x, y, h, 1000, BATH_A.mouth)[1];
	const ly = bathPt(x, y, h, 1000, BATH_A.liquid)[1];
	const cx = (xs[0] + xs[3]) / 2;
	const cy = chipY ?? y - 70;
	const ry = resY ?? y + h + 26;
	return (
		<g opacity={v}>
			{q < 0.999 ? <PicF p={BATH.before} x={x} y={y} h={h} /> : null}
			{q > 0.01 ? <PicF p={BATH.after} x={x} y={y} h={h} o={q} /> : null}
			{chips.map((c, i) => {
				const p = prog(f, c.at, 12);
				const tx = cx + (i - 1.5) * spread;
				const col = c.color ?? NAVY;
				const r = c.res && c.resAt !== undefined ? prog(f, c.resAt, 12) : 0;
				return (
					<g key={i}>
						{p > 0.01 ? (
							<g opacity={p}>
								<path d={`M${tx},${cy + size * 1.6} L${xs[i]},${my - 6}`} stroke={col} strokeWidth={2.5} strokeDasharray="6 6" fill="none" />
								<Pill x={tx} y={cy} text={c.name} at={-1000} color={col} size={size} anchor="middle" />
							</g>
						) : null}
						{r > 0.01 && c.res ? (
							<g opacity={r}>
								<path d={`M${xs[i]},${ly + 20} L${tx},${ry}`} stroke={RES_C[c.res]} strokeWidth={2.5} strokeDasharray="6 6" fill="none" />
								<Pill x={tx} y={ry} text={c.res} at={-1000} color={RES_C[c.res]} size={size} anchor="middle" fill={c.res === 'green' ? '#eaf6ea' : '#fdf0e4'} />
							</g>
						) : null}
					</g>
				);
			})}
		</g>
	);
};
/** Heat shimmer lines (no flame) under a span. */
export const Heat: React.FC<{x: number; y: number; w: number; at: number; out?: number}> = ({x, y, w, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{[0, 1, 2, 3, 4].map(i => {
				const xx = x + (i + 0.5) * (w / 5);
				let d = '';
				for (let k = 0; k <= 9; k++) d += `${k ? 'L' : 'M'}${(xx + Math.sin(k * 0.9 + f * 0.22 + i) * 6).toFixed(1)},${(y - k * 6).toFixed(1)} `;
				return <path key={i} d={d} fill="none" stroke="#e07a3a" strokeWidth={4} strokeLinecap="round" opacity={0.75} />;
			})}
		</g>
	);
};
/** A small coded dial: the hand sweeps once between `from` and `to`; label under it. */
export const Clock: React.FC<{cx: number; cy: number; r?: number; at: number; from: number; to: number; label?: string; out?: number}> = ({cx, cy, r = 54, at, from, to, label, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const t = smooth(clamp01((f - from) / Math.max(1, to - from)));
	const a = -Math.PI / 2 + t * Math.PI * 2 * (5 / 12);
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill={CARDF} stroke={INK} strokeWidth={4} />
			{t > 0.01 ? <path d={`M${cx},${cy} L${cx},${cy - r + 8} A${r - 8},${r - 8} 0 ${t * 5 / 12 > 0.5 ? 1 : 0} 1 ${cx + (r - 8) * Math.cos(a)},${cy + (r - 8) * Math.sin(a)} Z`} fill="#f6d77a" opacity={0.7} /> : null}
			{Array.from({length: 12}, (_, i) => { const b = (i / 12) * Math.PI * 2; return <line key={i} x1={cx + (r - 10) * Math.cos(b)} y1={cy + (r - 10) * Math.sin(b)} x2={cx + (r - 3) * Math.cos(b)} y2={cy + (r - 3) * Math.sin(b)} stroke={INK} strokeWidth={3} />; })}
			<line x1={cx} y1={cy} x2={cx + (r - 14) * Math.cos(a)} y2={cy + (r - 14) * Math.sin(a)} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			{label ? <Sx x={cx} y={cy + r + 40} text={label} size={32} color={INK} anchor="middle" hand weight={700} at={-1000} /> : null}
		</g>
	);
};
/** A coded bung in a tube mouth with a bent glass delivery tube running to (bx, by). */
export const Bung: React.FC<{m: [number, number]; b: [number, number]; at: number; w?: number; top?: number}> = ({m, b, at, w = 44, top}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14);
	if (v <= 0.01) return null;
	const ty = top ?? Math.min(m[1], b[1]) - 70;
	const d = `M${m[0]},${m[1] - 10} L${m[0]},${ty} L${b[0]},${ty} L${b[0]},${b[1]}`;
	return (
		<g opacity={v}>
			<path d={d} fill="none" stroke="#9aa6b0" strokeWidth={13} strokeLinejoin="round" />
			<path d={d} fill="none" stroke="#eef3f6" strokeWidth={7} strokeLinejoin="round" />
			<path d={`M${m[0] - w / 2},${m[1] - 14} L${m[0] + w / 2},${m[1] - 14} L${m[0] + w * 0.38},${m[1] + 24} L${m[0] - w * 0.38},${m[1] + 24} Z`} fill="#5b4a3d" stroke={INK} strokeWidth={2.5} />
		</g>
	);
};

// ---------- the results table writer (four columns) ----------
export type T4Row = {cells: [string, string, string, string]; at: number; pre?: number; obsAt: number; infAt: number; grey?: boolean; thumb?: PDef; thumb2?: PDef};
export const Table4: React.FC<{x: number; y: number; cols: number[]; rows: T4Row[]; size?: number; rowH?: number; headGlow?: [number, number, number][]; glowCell?: {row: number; col: number; at: number}}> = ({x, y, cols, rows, size = 32, rowH = 130, headGlow = [], glowCell}) => {
	const f = useCurrentFrame();
	const W = cols.reduce((a, b) => a + b, 0);
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, b) => a + b, 0));
	const HH = 66;
	const head = ['Liquid', 'Test', 'Observation', 'Inference'];
	return (
		<g>
			<rect x={x} y={y} width={W} height={HH + rows.length * rowH} rx={16} fill={CARDF} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
			<rect x={x} y={y} width={W} height={HH} rx={16} fill="#efe6d6" />
			{xs.slice(1).map((cx, i) => <line key={i} x1={cx} x2={cx} y1={y} y2={y + HH + rows.length * rowH} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />)}
			{head.map((t, i) => {
				const g = headGlow.filter(h => h[0] === i).reduce((m, h) => Math.max(m, vis(f, h[1], h[2], 10)), 0);
				return (
					<g key={i}>
						{g > 0.01 ? <rect x={xs[i] + 4} y={y + 4} width={cols[i] - 8} height={HH - 8} rx={12} fill="#f6d77a" opacity={0.8 * g} /> : null}
						<Sx x={xs[i] + 16} y={y + 46} text={t} size={36} color={INK} hand weight={700} at={-1000} />
					</g>
				);
			})}
			{rows.map((r, j) => {
				const ry = y + HH + j * rowH;
				const c = r.grey ? '#5d574d' : INK;
				const lock = 1 - prog(f, r.infAt, 10);
				const gc = glowCell && glowCell.row === j ? Math.max(0, Math.sin(clamp01((f - glowCell.at) / 60) * Math.PI)) : 0;
				const cell = (i: number, t: string, at: number) => {
					const lines = t.split('\n');
					const lh = size * 1.18, top = ry + rowH / 2 - ((lines.length - 1) * lh) / 2 + size * 0.34;
					return lines.map((ln, k) => <Wr key={i + '-' + k} x={xs[i] + 16} y={top + k * lh} text={ln} at={at + k * 8} size={size} color={i === 3 ? (r.grey ? KNOWNC : NAVY) : c} weight={i >= 2 ? 700 : 600} />);
				};
				return (
					<g key={j}>
						<line x1={x + 8} x2={x + W - 8} y1={ry} y2={ry} stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
						{gc > 0.01 && glowCell ? <rect x={xs[glowCell.col] + 6} y={ry + 8} width={cols[glowCell.col] - 12} height={rowH - 16} rx={12} fill="#f6d77a" opacity={0.6 * gc} /> : null}
						{cell(0, r.cells[0], r.pre ?? r.at)}
						{cell(1, r.cells[1], (r.pre ?? r.at) + 6)}
						{cell(2, r.cells[2], r.obsAt)}
						{lock > 0.01 ? (
							<g opacity={lock * prog(f, r.pre ?? r.at, 10)}>
								<rect x={xs[3] + 12} y={ry + 14} width={cols[3] - 24} height={rowH - 28} rx={10} fill="#e9e3d6" />
								<rect x={xs[3] + cols[3] / 2 - 14} y={ry + rowH / 2 - 6} width={28} height={22} rx={4} fill={INK_SOFT} />
								<path d={`M${xs[3] + cols[3] / 2 - 9},${ry + rowH / 2 - 6} v-8 a9,9 0 0 1 18,0 v8`} fill="none" stroke={INK_SOFT} strokeWidth={4} />
							</g>
						) : null}
						{f >= r.infAt ? <DrawPath d={`M${xs[3] + 18},${ry + rowH / 2} l10,12 l20,-26`} at={r.infAt} dur={10} color={GOOD} width={5} /> : null}
						{f >= r.infAt ? <g transform="translate(40,0)">{cell(3, r.cells[3], r.infAt + 8)}</g> : null}
						{r.thumb ? <Thumb p={r.thumb} x={x - 128 - (r.thumb2 ? 70 : 0)} y={ry + 8} h={rowH - 16} at={r.obsAt} /> : null}
						{r.thumb2 ? <Thumb p={r.thumb2} x={x - 108} y={ry + 8} h={rowH - 16} at={r.obsAt} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the claims card ----------
export type ClaimRow = {k: string; at: number; thumbs: (PDef | null)[]; sup: string; supC?: string; nd: string; ct: string; ctAt?: number; glow?: [number, number]};
export const CLAIM_HEAD: [string, string][] = [['supported', ANS8], ['not detected', '#4d4840'], ["can't tell", AMB]];
export const ClaimTable: React.FC<{x: number; y: number; rows: ClaimRow[]; cols?: number[]; rowH?: number; size?: number; th?: number; headAt?: number[]; tick?: {row: number; at: number}}> = ({x, y, rows, cols = [90, 330, 360, 520, 440], rowH = 150, size = 32, th = 118, headAt = [-1000, -1000, -1000], tick}) => {
	const f = useCurrentFrame();
	const W = cols.reduce((a, b) => a + b, 0);
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, b) => a + b, 0));
	const HH = 62;
	return (
		<g>
			<rect x={x} y={y} width={W} height={HH + rows.length * rowH} rx={18} fill={CARDF} stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
			<rect x={x} y={y} width={W} height={HH} rx={18} fill="#efe6d6" />
			<Sx x={xs[1] + 16} y={y + 44} text="fizz · fade · green" size={30} color={INK} hand weight={700} at={-1000} />
			{CLAIM_HEAD.map(([t, c], i) => <Sx key={t} x={xs[i + 2] + 16} y={y + 44} text={t} size={36} color={c} hand weight={700} at={headAt[i]} />)}
			{xs.slice(2).map((cx, i) => <line key={i} x1={cx} x2={cx} y1={y} y2={y + HH + rows.length * rowH} stroke="rgba(60,45,20,0.2)" strokeWidth={2} />)}
			{rows.map((r, j) => {
				const ry = y + HH + j * rowH;
				const p = prog(f, r.at, 12);
				const g = r.glow ? vis(f, r.glow[0], r.glow[1], 12) : 0;
				const block = (i: number, t: string, col: string, at: number) => {
					const lines = t.split('\n');
					const lh = size * 1.2, top = ry + rowH / 2 - ((lines.length - 1) * lh) / 2 + size * 0.34;
					return lines.map((ln, k) => <Wr key={i + '-' + k} x={xs[i] + 16} y={top + k * lh} text={ln} at={at + k * 8} size={size} color={col} weight={800} />);
				};
				return (
					<g key={j}>
						<line x1={x + 8} x2={x + W - 8} y1={ry} y2={ry} stroke="rgba(60,45,20,0.18)" strokeWidth={2} />
						{g > 0.01 ? <rect x={x + 6} y={ry + 4} width={W - 12} height={rowH - 8} rx={14} fill="#fff1c9" opacity={g} /> : null}
						<Sx x={xs[0] + cols[0] / 2} y={ry + rowH / 2 + 22} text={r.k} size={60} color={NAVY} anchor="middle" weight={800} at={-1000} />
						{r.thumbs.map((t, i) => t ? <Thumb key={i} p={t} x={xs[1] + 12 + i * ((cols[1] - 20) / 3)} y={ry + (rowH - th) / 2} h={th} /> : (
							<g key={i}>
								<rect x={xs[1] + 18 + i * ((cols[1] - 20) / 3)} y={ry + (rowH - th) / 2 + 6} width={(cols[1] - 20) / 3 - 14} height={th - 12} rx={10} fill="none" stroke={GREYS} strokeWidth={3} strokeDasharray="8 7" />
								<Sx x={xs[1] + 12 + (i + 0.5) * ((cols[1] - 20) / 3)} y={ry + rowH / 2 + 10} text="not run" size={26} color="#5d574d" anchor="middle" hand weight={700} at={-1000} />
							</g>
						))}
						{p > 0.01 ? (
							<g>
								{block(2, r.sup, r.supC ?? ANS8, r.at)}
								{block(3, r.nd, INK, r.at + 14)}
								{block(4, r.ct, AMB, r.ctAt ?? r.at + 28)}
							</g>
						) : null}
						{tick && tick.row === j && f >= tick.at ? <DrawPath d={`M${xs[4] + cols[4] - 70},${ry + rowH / 2} l16,20 l34,-42`} at={tick.at} dur={10} color={GOOD} width={8} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the method card ----------
/** A card whose lines write on at their cues (current line full ink; earlier lines stay full ink, smaller numbers). */
export const MethodCard: React.FC<{x: number; y: number; w: number; title: string; lines: {t: string; at: number; color?: string; size?: number}[]; lh?: number; size?: number; at?: number; color?: string; h?: number; chip?: string}> = ({x, y, w, title, lines, lh = 74, size = 38, at = -1000, color = NAVY, h, chip}) => {
	const H = h ?? 90 + lines.length * lh;
	return (
		<g>
			<Card x={x} y={y} w={w} h={H} title={title} at={at} color={color} />
			{chip ? <Pill x={x + w - 24 - pillW(chip, 26)} y={y + 16} text={chip} at={at} color={GREYC} size={26} /> : null}
			{lines.map((l, i) => <Wr key={i} x={x + 30} y={y + 112 + i * lh} text={l.t} at={l.at} size={l.size ?? size} color={l.color ?? INK} weight={700} />)}
		</g>
	);
};
void CC; void COOH; void OHV; void HAZ; void IconP; void RiskGrid;
