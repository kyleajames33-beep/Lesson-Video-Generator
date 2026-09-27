// IceTableDiagram (kind: chem12m5IceTable) — an ICE table that fills in live.
//
// Columns are the species (with their coefficients), rows are Initial /
// Change / Equilibrium. Each row's label arrives on its beat and the cells pop
// in one by one. The Change row's coefficients are the key idea (amber), with
// the ratio read straight off the equation. Options:
//   trap      — the classic error row (±x for every species), struck out
//   positive  — "every E value must be positive" check
//   square    — the perfect-square solve for A + B ⇌ 2C with equal starts:
//               Keq = (2x)² / (a − x)² → 2x / (a − x) = √Keq → x, then a final
//               row of equilibrium values. Every number is computed here.
//
// Beats are frames after `delay`.

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idlePulse} from '../../diorama';
import {eramp, ramp} from './shared';
import {Frac, P, RED, Rich, Strike, VIOLET, kbW, partsW, sig, type Part} from './kbKit';

export type IceSpecies = {f: string; coef?: number; side: 'r' | 'p'};
export type IceRow = {label: string; name: string; labelAt: number; cells?: string[]; cellsAt?: number; step?: number; hint?: string; hintAt?: number};
export type IceTableProps = {
	delay?: number;
	species?: IceSpecies[];
	rows?: IceRow[];
	/** Index of the Change row (its coefficients are drawn amber). */
	changeRow?: number;
	ratioAt?: number;
	/** Show the amber ratio pill under the table (else only the row highlight). */
	ratioPill?: boolean;
	trap?: {at: number; strikeAt: number; cells: string[]};
	positiveAt?: number;
	square?: {keq: number; init: number; subAt: number; rootAt: number; rootValAt: number; xAt: number; finalAt: number};
	/** Compact layout (shorter rows) to leave room for the solve panel. */
	compact?: boolean;
};

const W = 760;

export const IceTableDiagram = ({
	delay = 62,
	species = [
		{f: 'N₂', coef: 1, side: 'r'},
		{f: 'H₂', coef: 3, side: 'r'},
		{f: 'NH₃', coef: 2, side: 'p'},
	],
	rows = [
		{label: 'I', name: 'Initial', labelAt: 60, cells: ['1.00', '3.00', '0'], cellsAt: 70},
		{label: 'C', name: 'Change', labelAt: 160, cells: ['−x', '−3x', '+2x'], cellsAt: 300},
		{label: 'E', name: 'Equilibrium', labelAt: 240, cells: ['1.00 − x', '3.00 − 3x', '2x'], cellsAt: 380},
	],
	changeRow = 1,
	ratioAt,
	ratioPill = true,
	trap,
	positiveAt,
	square,
	compact = false,
}: IceTableProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const sideCol = (s: 'r' | 'p') => (s === 'r' ? theme.accent : VIOLET);

	// ── Perfect-square solve (computed) ──
	const sq = square
		? (() => {
				const s = Math.sqrt(square.keq);
				const x = (square.init * s) / (2 + s);
				const dp = (String(square.init).split('.')[1] ?? '').length || 3;
				const initStr = square.init.toFixed(dp);
				return {s, x, sStr: sig(s, 3), xStr: sig(x, 3), initStr, rStr: (square.init - x).toFixed(dp), pStr: (2 * x).toFixed(dp)};
			})()
		: undefined;
	const allRows: IceRow[] = sq
		? [...rows, {label: 'E', name: 'values', labelAt: square!.finalAt, cells: [sq.rStr, sq.rStr, sq.pStr], cellsAt: square!.finalAt, step: 10}]
		: rows;

	// ── Geometry ──
	const EQY = compact ? 38 : 46;
	const X0 = 22, X1 = 738;
	const LW = compact ? 150 : 168;
	const colW = (X1 - X0 - LW) / species.length;
	const colX = (j: number) => X0 + LW + colW * (j + 0.5);
	const HY = compact ? 58 : 76; // header top
	const HH = compact ? 42 : 52;
	const RH = compact ? 46 : 70;
	const rowY = (r: number) => HY + HH + RH * r; // top of row r
	const CS = compact ? 27 : 32; // cell size
	const tableBottom = rowY(allRows.length);

	const firstP = species.findIndex((s) => s.side === 'p');
	const eqParts: Part[] = species.flatMap((sp, j) => {
		const sep: Part[] = j === 0 ? [] : [{t: j === firstP ? '  ⇌  ' : '  +  ', c: TOK.inkDim}];
		const c = sp.coef ?? 1;
		return [...sep, ...(c > 1 ? [{t: String(c), c: TOK.amberInk}] : []), {t: sp.f, c: sideCol(sp.side)}];
	});

	const pop = (at: number) => spring({frame: frame - at, fps, config: {damping: 12, stiffness: 220, mass: 0.5}});

	// Colour the coefficient in front of x amber (Change row).
	const cellParts = (txt: string, amber: boolean): Part[] => {
		if (!amber) return [{t: txt}];
		const m = txt.match(/^([+−-]?)(\d*)(x.*)$/);
		if (!m) return [{t: txt}];
		return [{t: m[1]}, ...(m[2] ? [{t: m[2], c: TOK.amberInk}] : []), {t: m[3]}];
	};

	const ratio = species.map((s) => s.coef ?? 1).join(' : ');
	const pulse = idlePulse(frame);

	// Solve panel geometry
	const SY1 = tableBottom + 56;
	const SY2 = SY1 + 92;
	const SS = 30;

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={`ICE table for ${species.map((s) => `${(s.coef ?? 1) > 1 ? s.coef : ''}${s.f}`).join(', ')}: the Change row follows the coefficient ratio ${ratio}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{/* Equation */}
			<Rich x={W / 2} y={EQY} size={compact ? 30 : 34} parts={eqParts} opacity={ramp(frame, 0, 12)} />

			{/* Table frame */}
			<g opacity={ramp(frame, 4, 14)}>
				<rect x={X0} y={HY} width={X1 - X0} height={tableBottom - HY} rx={14} fill="#ffffff" stroke="rgba(0,0,0,0.12)" strokeWidth={2} />
				<rect x={X0} y={HY} width={X1 - X0} height={HH} rx={14} fill={theme.soft} />
				<rect x={X0} y={HY + HH - 14} width={X1 - X0} height={14} fill={theme.soft} />
				{species.map((sp, j) => {
					const c = sp.coef ?? 1;
					return (
						<g key={j}>
							{j > 0 && <line x1={X0 + LW + colW * j} y1={HY} x2={X0 + LW + colW * j} y2={tableBottom} stroke="rgba(0,0,0,0.08)" strokeWidth={2} />}
							<Rich x={colX(j)} y={HY + HH / 2 + 10} size={compact ? 26 : 30} parts={[...(c > 1 ? [{t: String(c), c: TOK.amberInk}] : []), {t: sp.f, c: sideCol(sp.side)}]} />
						</g>
					);
				})}
				<line x1={X0 + LW} y1={HY} x2={X0 + LW} y2={tableBottom} stroke="rgba(0,0,0,0.12)" strokeWidth={2} />
				{allRows.map((_, r) => (r > 0 ? <line key={r} x1={X0} y1={rowY(r)} x2={X1} y2={rowY(r)} stroke="rgba(0,0,0,0.08)" strokeWidth={2} /> : null))}
			</g>

			{/* Rows */}
			{allRows.map((row, r) => {
				const y0 = rowY(r);
				const cy = y0 + RH / 2;
				const lab = ramp(frame, row.labelAt, 12);
				const isChange = r === changeRow;
				const isFinal = sq && r === allRows.length - 1;
				const hl = isChange && ratioAt !== undefined ? ramp(frame, ratioAt, 14) : 0;
				return (
					<g key={r}>
						{hl > 0 && <rect x={X0 + 3} y={y0 + 3} width={X1 - X0 - 6} height={RH - 6} rx={10} fill="#fff4dc" opacity={hl * (0.75 + 0.25 * pulse)} />}
						{isFinal && <rect x={X0 + 3} y={y0 + 3} width={X1 - X0 - 6} height={RH - 6} rx={10} fill={theme.soft} opacity={lab} />}
						<g opacity={lab}>
							<text x={X0 + 18} y={cy + (compact ? 10 : 12)} fill={theme.accent} fontSize={compact ? 30 : 38} fontWeight={900}>{row.label}</text>
							<text x={X0 + (compact ? 46 : 54)} y={cy + (row.hint ? -2 : 7)} fill={TOK.inkDim} fontSize={compact ? 18 : 20} fontWeight={800}>{row.name}</text>
							{row.hint && (
								<text x={X0 + (compact ? 46 : 54)} y={cy + 22} fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={ramp(frame, row.hintAt ?? row.labelAt, 12)}>{row.hint}</text>
							)}
						</g>
						{(row.cells ?? []).map((txt, j) => {
							if (row.cellsAt === undefined) return null;
							const at = row.cellsAt + j * (row.step ?? 16);
							const s = Math.max(0, pop(at));
							if (s <= 0.001) return null;
							return (
								<g key={j} transform={`translate(${colX(j)} ${cy}) scale(${Math.min(1.08, s)})`} opacity={Math.min(1, s * 1.5)}>
									<Rich x={0} y={CS * 0.36} size={CS} parts={cellParts(txt, isChange)} fill={isFinal ? theme.accent : TOK.ink} weight={isFinal ? 900 : 800} />
								</g>
							);
						})}
					</g>
				);
			})}

			{/* Ratio pill */}
			{ratioAt !== undefined && ratioPill && (() => {
				const txt = `${ratio}  from the coefficients`;
				const w = kbW(txt, 22) + 36;
				const y = tableBottom + 34;
				return (
					<g opacity={ramp(frame, ratioAt, 14)}>
						<rect x={W / 2 - w / 2} y={y - 22} width={w} height={44} rx={22} fill="#fff7e8" stroke={TOK.amber} strokeWidth={2 + pulse * 1.5} />
						<text x={W / 2} y={y + 8} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={900} style={{whiteSpace: 'pre'}}>{txt}</text>
					</g>
				);
			})()}

			{/* Trap row */}
			{trap && (() => {
				const y = tableBottom + 108;
				const tin = ramp(frame, trap.at, 14);
				return (
					<g opacity={tin}>
						<rect x={X0} y={y - 32} width={X1 - X0} height={60} rx={12} fill="#fdf1f0" stroke={RED} strokeOpacity={0.5} strokeWidth={2} strokeDasharray="7 6" />
						<text x={X0 + 18} y={y + 7} fill={RED} fontSize={21} fontWeight={900}>✗ ±x for all</text>
						{trap.cells.map((c, j) => {
							const w = kbW(c, 28);
							return (
								<g key={j}>
									<text x={colX(j)} y={y + 10} textAnchor="middle" fill={TOK.inkDim} fontSize={28} fontWeight={800}>{c}</text>
									<Strike x1={colX(j) - w / 2} x2={colX(j) + w / 2} y={y} p={eramp(frame, trap.strikeAt + j * 8, 14)} />
								</g>
							);
						})}
					</g>
				);
			})()}

			{/* Positive check */}
			{positiveAt !== undefined && (
				<g opacity={ramp(frame, positiveAt, 14)}>
					<text x={W / 2} y={tableBottom + (trap ? 180 : 110)} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>
						<tspan fill={theme.accent}>✓ </tspan>every E value must come out positive
					</text>
				</g>
			)}

			{/* Perfect-square solve */}
			{sq && square && (() => {
				const lhs1N = P('4x^{2}');
				const lhs1D = P(`(${sq.initStr} − x)^{2}`);
				const lhs2N = P('2x');
				const lhs2D = P(`(${sq.initStr} − x)`);
				const w1 = Math.max(partsW(lhs1N, SS), partsW(lhs1D, SS)) + SS * 0.5;
				const w2 = Math.max(partsW(lhs2N, SS), partsW(lhs2D, SS)) + SS * 0.5;
				const LX = 110;
				const r1 = P(` = ${square.keq}`);
				const r2a = P(` = √${square.keq}`);
				const r2b = P(` = ${sq.sStr}`);
				const r2aW = partsW(r2a, SS);
				const in1 = ramp(frame, square.subAt, 14);
				const in2 = ramp(frame, square.rootAt, 14);
				const in2b = ramp(frame, square.rootValAt, 14);
				const in3 = ramp(frame, square.xAt, 14);
				const tag = (y: number, t: string, o: number) => (
					<text x={X0 + 4} y={y + 8} fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={o}>{t}</text>
				);
				const xParts = P(`x = ${sq.xStr}`);
				const xW = partsW(xParts, 32);
				return (
					<g>
						{tag(SY1, 'E row', in1)}
						{tag(SY1 + 20, 'into K', in1)}
						<g opacity={in1}>
							<Frac x={LX + w1 / 2} y={SY1} size={SS} num={lhs1N} den={lhs1D} />
							<Rich x={LX + w1 + 4} y={SY1 + SS * 0.34} size={SS} parts={r1} anchor="start" />
						</g>
						{tag(SY2, '√ both', in2)}
						{tag(SY2 + 20, 'sides', in2)}
						<g opacity={in2}>
							<Frac x={LX + w2 / 2} y={SY2} size={SS} num={lhs2N} den={lhs2D} />
							<Rich x={LX + w2 + 4} y={SY2 + SS * 0.34} size={SS} parts={r2a} anchor="start" />
							<Rich x={LX + w2 + 4 + r2aW} y={SY2 + SS * 0.34} size={SS} parts={r2b} anchor="start" opacity={in2b} />
						</g>
						<g opacity={in3}>
							<rect x={560 - xW / 2 - 16} y={SY2 - 30} width={xW + 32} height={50} rx={12} fill="#ffffff" stroke={theme.accent} strokeWidth={2.5} />
							<Rich x={560} y={SY2 + 32 * 0.34 - 4} size={32} parts={xParts} />
							<text x={560} y={SY2 + 48} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>solve the linear equation</text>
						</g>
					</g>
				);
			})()}
		</svg>
	);
};
