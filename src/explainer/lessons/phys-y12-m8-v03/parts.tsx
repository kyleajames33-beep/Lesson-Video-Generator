// Lesson parts for phys-y12-m8-v03: the colour roles (design "Colour key (Revision 2)" with root rule R1), the feature
// thermometers (horizontal bars on a shared temperature axis, hotter to the left), the hydrogen atom panels and v02's
// parts re-exported.
// Colour key: spectra true to wavelength (anything below 380 nm drawn as a grey UV band); energy levels navy, electrons
// rose, photons in their line's true colour when visible, otherwise amber; temperature T and the slider red; λmax teal;
// class swatches blue (O) to orange-red (M); answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY, prog} from '../../kit';
import {CARD, TONES} from '../../shared/tokens';
import {LAMP, TUBE, VCELL} from '../../physics/light/plates';
import {levelY} from '../../physics/light/spectrum';
import {AMBER, BLUE, GREY, Givens, INK, Lbl, NAVY, NEUTRON, ORANGE, RED, ROSE, Shrunk, Strip, TEAL, V02_PLATES, fx, sci} from '../phys-y12-m8-v02/parts';

export {AMBER, BLUE, GREY, Givens, INK, Lbl, NAVY, NEUTRON, ORANGE, RED, ROSE, Shrunk, Strip, TEAL, fx, sci};
export const VIOLET = TONES.violet;
export const V03_PLATES = [...new Set([...V02_PLATES, LAMP.src, TUBE.src, VCELL.src])];
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

/** Feature thermometers: a log temperature axis, hot (40 000 K) on the left, cool (3000 K) on the right. */
export type FeatBox = {x: number; w: number; y: number; row: number; h: number};
export const ftX = (b: FeatBox, temp: number) => b.x + ((Math.log10(40000) - Math.log10(temp)) / (Math.log10(40000) - Math.log10(3000))) * b.w;
export type Feature = {name: string; hot: number; cool: number; color: string; at?: number; hump?: boolean; grey?: boolean};
/** The feature bars (one row each) and their temperature axis; `marker` draws a vertical line at a temperature. */
export const FeatureBars: React.FC<{b: FeatBox; feats: readonly Feature[]; f: number; marker?: {T: number; at: number}; size?: number; axisAt?: number}> = ({b, feats, f, marker, size = 26, axisAt = -30}) => {
	const base = b.y + feats.length * b.row + 10;
	return (
		<g>
			<g opacity={prog(f, axisAt, 12)}>
				<line x1={b.x} y1={base} x2={b.x + b.w + 10} y2={base} stroke={INK} strokeWidth={3.5} />
				{[40000, 20000, 10000, 5000, 3000].map(t => <g key={t}><line x1={ftX(b, t)} y1={base} x2={ftX(b, t)} y2={base + 10} stroke={INK} strokeWidth={3} /><text x={ftX(b, t)} y={base + 14 + size} textAnchor="middle" style={T(size, INK, 700)}>{t.toLocaleString('en-AU').replace(/,/g, ' ')}</text></g>)}
				<text x={b.x + b.w} y={base + 2 * size + 24} textAnchor="end" style={T(size, INK)}>temperature (K, log scale), hotter to the left</text>
			</g>
			{feats.map((ft, i) => {
				const o = prog(f, ft.at ?? -30, 14);
				if (o <= 0.001) return null;
				const y = b.y + i * b.row, x0 = ftX(b, ft.hot), x1 = ftX(b, ft.cool);
				return <g key={ft.name} opacity={o * (ft.grey ? 0.35 : 1)}>
					<text x={b.x - 14} y={y + b.h * 0.75} textAnchor="end" style={T(size + 2, ft.color)}>{ft.name}</text>
					{ft.hump ? <path d={Array.from({length: 41}, (_, k) => { const lt = Math.log10(ft.hot) + ((Math.log10(ft.cool) - Math.log10(ft.hot)) * k) / 40; const s = Math.exp(-0.5 * ((lt - 4) / 0.2) ** 2); return `${k ? 'L' : 'M'}${ftX(b, 10 ** lt).toFixed(1)},${(y + b.h - s * b.h).toFixed(1)}`; }).join(' ') + ` L${x1},${y + b.h} L${x0},${y + b.h} Z`} fill={ft.color} opacity={0.85} />
						: <rect x={x0} y={y} width={Math.max(4, x1 - x0)} height={b.h} rx={8} fill={ft.color} opacity={0.85} />}
				</g>;
			})}
			{marker && f >= marker.at ? <line x1={ftX(b, marker.T)} y1={b.y - 20} x2={ftX(b, marker.T)} y2={base + 6} stroke={RED.stroke} strokeWidth={5} opacity={prog(f, marker.at, 12)} /> : null}
		</g>
	);
};

/** One atom panel: hydrogen levels n = 1, 2, 3 and the ionised line, with electrons at given levels (0: stripped off, leaving upwards by `escape`). */
export const AtomPanel: React.FC<{x: number; y: number; w: number; h: number; title: string; e: readonly number[]; escape?: number; hi2?: boolean; arrow?: number; opacity?: number}> = ({x, y, w, h, title, e, escape = 0, hi2 = false, arrow = 0, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const top = y + 80, bot = y + h - 30, lx = x + 110, lw = w - 150;
	return (
		<g opacity={opacity}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill={CARD} stroke="rgba(60,45,20,0.25)" strokeWidth={2.5} />
			<text x={x + 16} y={y + 38} style={T(28, INK)}>{title}</text>
			{[1, 2, 3].map(n => <g key={n}><line x1={lx} y1={levelY(n, top, bot)} x2={lx + lw} y2={levelY(n, top, bot)} stroke={NAVY.stroke} strokeWidth={n === 2 && hi2 ? 7 : 4} /><text x={lx - 12} y={levelY(n, top, bot) + 9} textAnchor="end" style={T(26, NAVY.ink, 700)}>{`n = ${n}`}</text></g>)}
			<line x1={lx} y1={top} x2={lx + lw} y2={top} stroke={NAVY.stroke} strokeWidth={3} strokeDasharray="10 7" />
			<text x={lx} y={top - 10} style={T(26, NAVY.ink, 700)}>ionised</text>
			{e.map((lv, i) => {
				const ex = lx + 24 + i * ((lw - 48) / Math.max(1, e.length - 1));
				const ey = lv === 0 ? top - 10 - 120 * escape : levelY(lv, top, bot);
				return <circle key={i} cx={ex} cy={ey} r={11} fill={ROSE.stroke} stroke={CARD} strokeWidth={2.5} opacity={lv === 0 ? 1 - escape : 1} />;
			})}
			{arrow > 0.001 ? <g opacity={arrow}><line x1={lx + lw - 30} y1={levelY(2, top, bot)} x2={lx + lw - 30} y2={levelY(3, top, bot) + 14} stroke={RED.stroke} strokeWidth={5} /><path d={`M${lx + lw - 30},${levelY(3, top, bot)} l-10,16 h20 z`} fill={RED.stroke} /></g> : null}
		</g>
	);
};
