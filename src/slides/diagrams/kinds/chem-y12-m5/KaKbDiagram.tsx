// KaKbDiagram (kind: chem12m5KaKb) — Ka × Kb = Kw for a conjugate pair.
//
// The Ka expression (HA ⇌ H⁺ + A⁻) and the Kb expression
// (A⁻ + H₂O ⇌ HA + OH⁻) sit side by side and are multiplied. [HA] cancels,
// then [A⁻] cancels (red strikes), leaving [H⁺][OH⁻] = Kw = 1.0 × 10⁻¹⁴ at
// 25 °C (amber). Then Kb = Kw ÷ Ka, and a seesaw on a stone plinth: the
// stronger acid (bigger Ka) goes down, its weaker conjugate base (smaller Kb)
// goes up, with "Ka × Kb = Kw" pinned on the pivot. The seesaw is
// qualitative: no values on it.
//
// Beats are frames after `delay`.

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idlePulse} from '../../diorama';
import {eramp, ramp} from './shared';
import {P, Rich, Strike, VIOLET, partsW, type Part} from './kbKit';

export type KaKbProps = {
	delay?: number;
	kaAt?: number;
	kbAt?: number;
	multiplyAt?: number;
	cancelHAAt?: number;
	cancelAAt?: number;
	kwAt?: number;
	kwValueAt?: number;
	kbFromKwAt?: number;
	seesawAt?: number;
	tiltAt?: number;
	pinnedAt?: number;
	/** Kw text, e.g. "1.0 × 10⁻¹⁴". */
	kw?: string;
	temp?: string;
};

const W = 760;
const ES = 34;
const BAR = 76;

export const KaKbDiagram = ({
	delay = 62,
	kaAt = 142,
	kbAt = 207,
	multiplyAt = 265,
	cancelHAAt = 316,
	cancelAAt = 338,
	kwAt = 374,
	kwValueAt = 454,
	kbFromKwAt = 664,
	seesawAt = 715,
	tiltAt = 758,
	pinnedAt = 954,
	kw = '1.0 × 10⁻¹⁴',
	temp = '25 °C',
}: KaKbProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const A = theme.accent;

	// ── Row 1: Ka × Kb, bracket by bracket so the cancels can be struck ──
	const kaNum: Part[][] = [P('[H⁺]'), P('[A⁻]')];
	const kaDen: Part[][] = [P('[HA]')];
	const kbNum: Part[][] = [P('[HA]'), P('[OH⁻]')];
	const kbDen: Part[][] = [P('[A⁻]')];
	const flat = (l: Part[][]) => l.flat();
	const fw = (n: Part[][], d: Part[][]) => Math.max(partsW(flat(n), ES), partsW(flat(d), ES)) + ES * 0.5;
	const kaLab = P('K_{a} = ');
	const kbLab = P('K_{b} = ');
	const labW = partsW(kaLab, ES);
	const kaW = fw(kaNum, kaDen);
	const kbW2 = fw(kbNum, kbDen);
	const timesW = 54;
	const total = labW + kaW + timesW + labW + kbW2;
	const x0 = W / 2 - total / 2;
	const kaCX = x0 + labW + kaW / 2;
	const kbX0 = x0 + labW + kaW + timesW;
	const kbCX = kbX0 + labW + kbW2 / 2;
	const numY = BAR - ES * 0.36;
	const denY = BAR + ES * 1.02;
	// x-range of bracket i in a centred row
	const box = (row: Part[][], cx: number, i: number) => {
		const w = partsW(flat(row), ES);
		let x = cx - w / 2;
		for (let k = 0; k < i; k++) x += partsW(row[k], ES);
		return {x1: x, x2: x + partsW(row[i], ES)};
	};

	const kaIn = ramp(frame, kaAt, 14);
	const kbIn = ramp(frame, kbAt, 14);
	const cHA = eramp(frame, cancelHAAt, 14);
	const cA = eramp(frame, cancelAAt, 14);
	const dimHA = 1 - 0.55 * cHA;
	const dimA = 1 - 0.55 * cA;

	const Fracs = ({cx, num, den, dimN, dimD}: {cx: number; num: Part[][]; den: Part[][]; dimN: number[]; dimD: number[]}) => {
		const w = fw(num, den);
		const nw = partsW(flat(num), ES), dw = partsW(flat(den), ES);
		let nx = cx - nw / 2, dx = cx - dw / 2;
		return (
			<g>
				{num.map((p, i) => {
					const x = nx;
					nx += partsW(p, ES);
					return <Rich key={`n${i}`} x={x} y={numY} size={ES} parts={p} anchor="start" opacity={dimN[i]} />;
				})}
				<line x1={cx - w / 2} y1={BAR} x2={cx + w / 2} y2={BAR} stroke={TOK.ink} strokeWidth={3} strokeLinecap="round" />
				{den.map((p, i) => {
					const x = dx;
					dx += partsW(p, ES);
					return <Rich key={`d${i}`} x={x} y={denY} size={ES} parts={p} anchor="start" opacity={dimD[i]} />;
				})}
			</g>
		);
	};

	const haNum = box(kbNum, kbCX, 0);
	const haDen = box(kaDen, kaCX, 0);
	const aNum = box(kaNum, kaCX, 1);
	const aDen = box(kbDen, kbCX, 0);

	// ── Row 2: result ──
	const r2: Part[] = [...P('K_{a} × K_{b} = [H⁺][OH⁻] = K_{w}')];
	const r2v: Part[] = P(` = ${kw}`);
	const R2S = 32;
	const r2W = partsW(r2, R2S), r2vW = partsW(r2v, R2S);
	const r2x = W / 2 - (r2W + r2vW) / 2;
	const R2Y = 196;
	const kwIn = ramp(frame, kwAt, 14);
	const kwvIn = ramp(frame, kwValueAt, 14);

	// ── Row 3: Kb = Kw ÷ Ka ──
	const r3 = P('K_{b} = K_{w} ÷ K_{a}');
	const r3W = partsW(r3, 28) + 36;

	// ── Seesaw ──
	const PX = 380, PY = 396, HALF = 214;
	const sIn = ramp(frame, seesawAt, 16);
	const tilt = spring({frame: frame - tiltAt, fps, config: {damping: 8, stiffness: 60, mass: 1}});
	const rock = frame > tiltAt + 60 ? Math.sin((frame - tiltAt) / 38) * 1.4 : 0;
	const ang = (11 * tilt + rock * tilt) * (Math.PI / 180); // left end down
	const kaS = 1 + 0.35 * tilt + rock * 0.012;
	const kbS = 1 - 0.35 * tilt - rock * 0.012;
	const endL = {x: PX - HALF * Math.cos(ang), y: PY + HALF * Math.sin(ang)};
	const endR = {x: PX + HALF * Math.cos(ang), y: PY - HALF * Math.sin(ang)};
	const weight = (x: number, y: number, s: number, label: string, color: string) => {
		const w = 76 * s, h = 58 * s;
		return (
			<g transform={`translate(${x} ${y}) rotate(${(-ang * 180) / Math.PI})`}>
				<rect x={-w / 2} y={-h - 6} width={w} height={h} rx={10 * s} fill="#ffffff" stroke={color} strokeWidth={3} />
				<rect x={-w / 2} y={-h - 6} width={w} height={8 * s} rx={4 * s} fill={color} opacity={0.85} />
				<Rich x={0} y={-h / 2 + 4 + 10 * s} size={28 * s} parts={P(label, color)} />
			</g>
		);
	};
	const lab = ramp(frame, tiltAt + 20, 16);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={`Ka times Kb: [HA] and [A⁻] cancel, leaving [H⁺][OH⁻] = Kw = ${kw} at ${temp}; so Kb = Kw ÷ Ka, and a stronger acid has a weaker conjugate base`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{/* Row 1 */}
			<g opacity={kaIn}>
				<Rich x={x0} y={BAR + ES * 0.34} size={ES} parts={kaLab} anchor="start" />
				<Fracs cx={kaCX} num={kaNum} den={kaDen} dimN={[1, dimA]} dimD={[dimHA]} />
				<text x={kaCX} y={BAR + 78} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>acid: HA ⇌ H⁺ + A⁻</text>
			</g>
			<text x={x0 + labW + kaW + timesW / 2} y={BAR + 12} textAnchor="middle" fill={TOK.ink} fontSize={36} fontWeight={800} opacity={ramp(frame, multiplyAt, 12)}>×</text>
			<g opacity={kbIn}>
				<Rich x={kbX0} y={BAR + ES * 0.34} size={ES} parts={kbLab} anchor="start" />
				<Fracs cx={kbCX} num={kbNum} den={kbDen} dimN={[dimHA, 1]} dimD={[dimA]} />
				<text x={kbCX} y={BAR + 78} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>base: A⁻ + H₂O ⇌ HA + OH⁻</text>
			</g>
			{/* cancels */}
			<Strike x1={haNum.x1} x2={haNum.x2} y={numY - 11} p={cHA} />
			<Strike x1={haDen.x1} x2={haDen.x2} y={denY - 11} p={eramp(frame, cancelHAAt + 6, 14)} />
			<Strike x1={aNum.x1} x2={aNum.x2} y={numY - 11} p={cA} />
			<Strike x1={aDen.x1} x2={aDen.x2} y={denY - 11} p={eramp(frame, cancelAAt + 6, 14)} />

			{/* Row 2 */}
			<g opacity={kwIn}>
				<rect x={r2x - 16} y={R2Y - 36} width={r2W + (kwvIn > 0 ? r2vW : 0) + 32} height={52} rx={14} fill="#fff7e8" stroke={TOK.amber} strokeWidth={2 + pulse * 1.4} />
				<Rich x={r2x} y={R2Y} size={R2S} parts={r2} anchor="start" />
				<Rich x={r2x + r2W} y={R2Y} size={R2S} parts={r2v} anchor="start" opacity={kwvIn} fill={TOK.amberInk} />
			</g>
			<text x={r2x + r2W + r2vW + 14} y={R2Y + 34} textAnchor="end" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={kwvIn}>at {temp}</text>

			{/* Row 3 */}
			<g opacity={ramp(frame, kbFromKwAt, 14)}>
				<rect x={W / 2 - r3W / 2} y={234} width={r3W} height={46} rx={23} fill={theme.soft} stroke={A} strokeWidth={2} />
				<Rich x={W / 2} y={266} size={28} parts={r3} />
			</g>

			{/* Seesaw */}
			<g opacity={sIn}>
				<DioramaPlinth id="c12m5kk" cx={PX} cy={466} rx={118}>
					<path d={`M ${PX - 34} 468 L ${PX + 34} 468 L ${PX} ${PY + 4} Z`} fill="#bdb8ae" stroke="#8f8b83" strokeWidth={2} />
				</DioramaPlinth>
				<Rich x={PX} y={512} size={19} parts={P('K_{a} × K_{b} = K_{w}', TOK.amberInk)} opacity={0.8 + 0.2 * (frame > pinnedAt ? pulse : 0)} />
				{/* beam */}
				<line x1={endL.x} y1={endL.y} x2={endR.x} y2={endR.y} stroke="#8f8b83" strokeWidth={10} strokeLinecap="round" />
				<line x1={endL.x} y1={endL.y - 2} x2={endR.x} y2={endR.y - 2} stroke="#d3cfc7" strokeWidth={4} strokeLinecap="round" />
				<circle cx={PX} cy={PY} r={8} fill={TOK.amber} stroke="#ffffff" strokeWidth={2.5} />
				{weight(endL.x + 52 * Math.cos(ang), endL.y - 52 * Math.sin(ang), kaS, 'K_{a}', A)}
				{weight(endR.x - 52 * Math.cos(ang), endR.y + 52 * Math.sin(ang), kbS, 'K_{b}', VIOLET)}
				<g opacity={lab}>
					<text x={endL.x + 22} y={endL.y + 36} textAnchor="middle" fill={A} fontSize={19} fontWeight={800}>stronger acid</text>
					<text x={endL.x + 22} y={endL.y + 58} textAnchor="middle" fill={A} fontSize={19} fontWeight={800}>(bigger Ka)</text>
					<text x={endR.x - 30} y={endR.y + 36} textAnchor="middle" fill={VIOLET} fontSize={19} fontWeight={800}>weaker conjugate</text>
					<text x={endR.x - 30} y={endR.y + 58} textAnchor="middle" fill={VIOLET} fontSize={19} fontWeight={800}>base (smaller Kb)</text>
				</g>
			</g>
		</svg>
	);
};
