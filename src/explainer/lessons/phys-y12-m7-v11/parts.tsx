// Lesson parts for phys-y12-m7-v11: the colour roles (design colour key, Revision 2, with root rule R1), the sodium
// data table, the gap inset where electrons climb against the reverse voltage (each electron's flight is a run of the
// field motion engine), the current-voltage traces (the photoelectric engine's photocurrent model) and v10's parts.
// Colour key: photon energy amber; ϕ slate; K_max orange; data points navy; best-fit line ink; dashed extension grey;
// metal 2 line violet; electrons navy; the field arrow E ink and the force on an electron amber; answers in dark-ink
// frames; mistakes slate (root rule R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {CARD, INK, TONES} from '../../shared/tokens';
import {FRAME_PLATES} from '../../physics/light/frames';
import {HEATER} from '../../physics/light/thermal';
import {Electron} from '../../physics/light/photo';
import {runMotion, stateAt} from '../../sims/field-motion';
import {photocurrent} from '../../sims/photoelectric';
import {AMBER, GREY, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, UV, UV_INK, V10_PLATES, fx, h01, lampAp, sci} from '../phys-y12-m7-v10/parts';
import {DATA_F, DATA_V, PHI_M} from './common';

export {AMBER, GREY, INK, Lbl, NAVY, ORANGE, SLATE, Shrunk, Strip, UV, UV_INK, fx, h01, lampAp, sci};
export const VIOLET = TONES.violet;
export const V11_PLATES = [...new Set([...V10_PLATES, ...FRAME_PLATES, HEATER.src, 'assets/physics/phys-y11-low-voltage-supply-v1.png'])];

/** The sodium data table (site worked example): f row and V_stop row; `lit` highlights one column. */
export const DataTable: React.FC<{x: number; y: number; at?: number; lit?: number; size?: number; pulse?: number}> = ({x, y, at = -30, lit = -1, size = 36, pulse = 0}) => {
	const cell = (t: string, i: number, head = false) => <div key={i} style={{padding: '4px 14px', minWidth: head ? 210 : 96, textAlign: head ? 'left' : 'center', background: i === lit ? TONES.violet.soft : 'transparent', borderRadius: 8, fontFamily: 'Inter Tight', fontWeight: 800, fontSize: size, color: head ? INK : NAVY.ink}}>{t}</div>;
	return (
		<Enter at={at} style={{position: 'absolute', left: x, top: y}}>
			<div style={{background: CARD, border: `3px solid ${NAVY.stroke}`, borderRadius: 16, padding: '10px 14px', transform: `scale(${1 + 0.05 * pulse})`, transformOrigin: 'left top'}}>
				<div style={{fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, color: INK, marginBottom: 6}}>sodium (site worked example)</div>
				<div style={{display: 'flex'}}>{cell('f (× 10¹⁴ Hz)', -2, true)}{DATA_F.map((v, i) => cell(fx(v, 1), i))}</div>
				<div style={{display: 'flex'}}>{cell('V_stop (V)', -2, true)}{DATA_V.map((v, i) => cell(fx(v, 2), i))}</div>
			</div>
		</Enter>
	);
};

/**
 * The gap between cathode (left) and anode (right), magnified: a reverse voltage v (V) decelerates each electron
 * (field motion engine, uniform field, model units e = m = 1, gap 1). Electron k leaves with kinetic energy
 * K_max × u_k (spread from 0 up to K_max), so only the fastest reach the anode when v approaches V_stop.
 */
export const GapInset: React.FC<{x: number; y: number; w: number; h: number; t: number; v: number; kmax: number; n?: number; opacity?: number}> = ({x, y, w, h, t, v, kmax, n = 9, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const period = 2.4;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill="#fffdf8" stroke="rgba(60,45,20,0.2)" strokeWidth={2.5} />
			<rect x={x + 30} y={y + 20} width={16} height={h - 40} rx={4} fill="#9a958c" stroke={INK} strokeWidth={2} />
			<rect x={x + w - 46} y={y + 20} width={16} height={h - 40} rx={4} fill="#9a958c" stroke={INK} strokeWidth={2} />
			{Array.from({length: n}, (_, k) => {
				const K = kmax * (0.08 + 0.92 * h01(k, 11));
				const path = runMotion({field: {kind: 'uniform', ax: -v, ay: 0}, start: {x: 0, y: 0, vx: Math.sqrt(2 * K), vy: 0}, duration: period, steps: 90, stopWhen: s => s.x < -0.001 || s.x > 1});
				const age = (((t - (k / n) * period) % period) + period) % period;
				if (age > path.duration) return null;
				const s = stateAt(path, age);
				const px = x + 52 + Math.max(0, Math.min(1, s.x)) * (w - 104);
				return <Electron key={k} x={px} y={y + 50 + ((k * 37) % (h - 100))} r={9} color={NAVY.stroke} />;
			})}
		</g>
	);
};

/** Current-voltage trace points from the photoelectric engine (light at f14 × 10¹⁴ Hz, relative brightness b). */
export const ivPts = (f14: number, b: number, v0: number, v1: number, px: (v: number) => number, py: (i: number) => number, upTo = v1) => {
	const pts: string[] = [];
	for (let i = 0; i <= 120; i++) { const v = v0 + ((v1 - v0) * i) / 120; if (v > upTo) break; pts.push(`${i ? 'L' : 'M'}${px(v).toFixed(1)},${py(photocurrent({frequency: f14 * 1e14}, PHI_M, b, v)).toFixed(1)}`); }
	return pts.join(' ');
};
/** A small pulse helper (0 to 1 and back over len frames after at). */
export const usePulse = (at: number, len = 24) => { const f = useCurrentFrame(); return f < at ? 0 : Math.sin(Math.PI * Math.min(1, (f - at) / len)); };
export {prog};
