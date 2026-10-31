// Drawing parts for M8 P02 (gravimetric practical). Reuses M8 C02 (method strip, crystal zoom, beaker, balance readout,
// lens frame, chips, working lines, givens card, question text, countdown, key notes) and, in the scene files, M6 P02's
// titled card and risk table, M7 P04's large risk row, M7 C01's tag and tick, and S07's fix rail. New here:
// - RecGauge: the recovery gauge (0 to 110%, a fixed 100% line with its label, fills per set on their own rows, a "?"
//   fill, the hatched region above 100% for extra mass, and pulses for the lost and extra regions);
// - ClockArc: a small clock arc that sweeps once (digestion time);
// - GlassRod: a coded glass rod that circles in a beaker (stirring, no hands);
// - Tongs: a coded tongs outline (no hands);
// - SetPill: a lane label pill in a set colour.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {DrawPath, prog} from '../../kit';
import {INK, INK_SOFT, NAVY, Sx, clamp01, mw, smooth, vis} from '../chem-m8-c02/parts';

export * from '../chem-m8-c02/parts';

export const SETA = '#5b7fa6', SETB = '#2a8a84', HAZ = '#b5502b', GREENC = '#2f8a5b', GREYX = '#9a948a', WARMC = '#d9822b';

// ---------- recovery gauge ----------
export type GFill = {v: number; at: number; color: string; row?: number; label?: string};
export type GaugeP = {x: number; y: number; w: number};
export const gx = (G: GaugeP, v: number) => G.x + (G.w * v) / 110;
const GH = 40;
export const RecGauge: React.FC<{G: GaugeP; at: number; out?: number; o?: number; label: (f: number) => string; fills?: GFill[]; q?: number; qOut?: number; hatch?: number; rows?: number; lostPulse?: number; extraPulse?: number; size?: number; ticks?: boolean}> = ({G, at, out, o = 1, label, fills = [], q, qOut, hatch, rows = 1, lostPulse, extraPulse, size = 26, ticks = true}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 14) * o;
	if (v <= 0.01) return null;
	const x100 = gx(G, 100), xEnd = gx(G, 110);
	const H = rows * GH + (rows - 1) * 12;
	const rowY = (r: number) => G.y + r * (GH + 12);
	const pulse = (t?: number) => (t === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - t) / 60) * Math.PI)));
	const lp = pulse(lostPulse), ep = pulse(extraPulse);
	const hv = hatch === undefined ? 0 : prog(f, hatch, 14);
	return (
		<g opacity={v}>
			{Array.from({length: rows}, (_, r) => <rect key={r} x={G.x} y={rowY(r)} width={G.w * (100 / 110)} height={GH} rx={8} fill="#f4f1ea" stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />)}
			{lp > 0.01 ? <rect x={G.x - 6} y={G.y - 6} width={x100 - G.x + 6} height={H + 12} rx={10} fill={SETA} opacity={0.35 * lp} /> : null}
			{hv > 0.01 ? (
				<g opacity={hv}>
					<rect x={x100} y={G.y} width={xEnd - x100} height={H} fill="#eeebe4" stroke="rgba(60,45,20,0.2)" strokeWidth={2} />
					{Array.from({length: Math.ceil((xEnd - x100 + H) / 16)}, (_, i) => {
						const x0 = x100 + i * 16;
						const a = Math.max(x100, x0 - H), b = Math.min(xEnd, x0);
						if (b <= a) return null;
						return <line key={i} x1={a} y1={G.y + H - (a - (x0 - H))} x2={b} y2={G.y + H - (b - (x0 - H))} stroke={GREYX} strokeWidth={2} />;
					})}
				</g>
			) : null}
			{ep > 0.01 ? <rect x={x100} y={G.y - 6} width={xEnd - x100 + 6} height={H + 12} rx={10} fill={GREYX} opacity={0.45 * ep} /> : null}
			{fills.map((fl, i) => {
				const p = smooth(prog(f, fl.at, 30));
				if (p <= 0.01) return null;
				const y = rowY(fl.row ?? 0);
				const x1 = G.x + (gx(G, fl.v) - G.x) * p;
				return (
					<g key={i}>
						<rect x={G.x + 3} y={y + 5} width={Math.max(0, x1 - G.x - 6)} height={GH - 10} rx={6} fill={fl.color} opacity={0.85} />
						{fl.label ? <Sx x={G.x + 16} y={y + GH / 2 + 9} text={fl.label} size={24} color="#fffdf8" weight={800} at={-1000} opacity={prog(f, fl.at + 24, 10)} /> : null}
					</g>
				);
			})}
			{q !== undefined ? <Sx x={G.x + G.w * 0.45} y={G.y + GH / 2 + 13} text="?" size={40} color={INK_SOFT} anchor="middle" hand weight={700} at={q} out={qOut} /> : null}
			<line x1={x100} x2={x100} y1={G.y - 18} y2={G.y + H + 18} stroke={NAVY} strokeWidth={4} />
			<Sx x={x100} y={G.y - 30} text={label(f)} size={size} color={NAVY} anchor="middle" weight={700} at={-1000} />
			{ticks ? [0, 50, 100].map(t => <Sx key={t} x={gx(G, t)} y={G.y + H + 44} text={`${t}%`} size={20} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />) : null}
		</g>
	);
};

// ---------- clock arc ----------
export const ClockArc: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; dur?: number; label?: string; color?: string}> = ({cx, cy, r, at, out, dur = 50, label, color = WARMC}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const p = smooth(prog(f, at, dur));
	const a = -Math.PI / 2 + p * 2 * Math.PI * 0.999;
	const ex = cx + r * Math.cos(a), ey = cy + r * Math.sin(a);
	return (
		<g opacity={v}>
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke="rgba(60,45,20,0.3)" strokeWidth={3} />
			{p > 0.01 ? <path d={`M${cx},${cy} L${cx},${cy - r} A${r},${r} 0 ${p > 0.5 ? 1 : 0} 1 ${ex},${ey} Z`} fill={color} opacity={0.35} /> : null}
			<line x1={cx} y1={cy} x2={ex} y2={ey} stroke={color} strokeWidth={4} strokeLinecap="round" />
			{label ? <Sx x={cx + r + 12} y={cy + 10} text={label} size={26} color={color} hand weight={700} at={-1000} /> : null}
		</g>
	);
};

// ---------- glass rod (stirring, no hands) ----------
export const GlassRod: React.FC<{cx: number; top: number; bottom: number; amp: number; at: number; out?: number}> = ({cx, top, bottom, amp, at, out}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	const dx = Math.sin((f - at) / 7) * amp;
	return (
		<g opacity={v}>
			<line x1={cx + dx * 0.35} y1={top} x2={cx + dx} y2={bottom} stroke="#cfe2ee" strokeWidth={11} strokeLinecap="round" />
			<line x1={cx + dx * 0.35} y1={top} x2={cx + dx} y2={bottom} stroke={INK_SOFT} strokeWidth={2.5} strokeLinecap="round" opacity={0.7} />
		</g>
	);
};

// ---------- tongs outline ----------
export const Tongs: React.FC<{x: number; y: number; s?: number; at: number; out?: number; rot?: number}> = ({x, y, s = 1, at, out, rot = -20}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	return (
		<g opacity={v} transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
			<path d="M0,0 C40,-6 120,-14 200,-30 L206,-22 C130,-4 50,8 4,10 Z" fill="#d7dadc" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
			<path d="M0,0 C40,6 120,14 200,30 L206,22 C130,4 50,-8 4,-10 Z" fill="#c9cdd0" stroke={INK} strokeWidth={3} strokeLinejoin="round" />
			<circle cx={4} cy={0} r={9} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		</g>
	);
};

// ---------- lane label pill ----------
export const SetPill: React.FC<{x: number; y: number; text: string; color: string; at: number; out?: number; size?: number}> = ({x, y, text, color, at, out, size = 28}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const w = mw(text, size, true, 700) + 44;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={size + 26} rx={(size + 26) / 2} fill="#fffdf8" stroke={color} strokeWidth={4} />
			<Sx x={x + 22} y={y + size + 4} text={text} size={size} color={color} hand weight={700} at={-1000} />
		</g>
	);
};
export const pillW = (text: string, size = 28) => mw(text, size, true, 700) + 44;

/** A short dashed pointer from a to b (no head). */
export const Lead: React.FC<{a: [number, number]; b: [number, number]; at: number; out?: number; color?: string}> = ({a, b, at, out, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 10);
	if (v <= 0.01) return null;
	return <g opacity={v}><DrawPath d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} at={at} dur={10} color={color} width={3} dash="6 6" /></g>;
};
export {INK};
