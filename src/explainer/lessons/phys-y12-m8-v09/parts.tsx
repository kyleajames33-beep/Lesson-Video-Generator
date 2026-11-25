// Lesson parts for phys-y12-m8-v09: the colour roles (design "Colour key (Revision 2)" with root rule R1), the beam
// line of painted plates (source vessel, lead bricks, paraffin wax or the nitrogen gas cell, ionisation chamber) with
// its coded radiation stream, the wax close-up, vertical energy bars and v08's parts re-exported.
// Colour key: photons amber packets "γ"; neutrons grey discs "n" (no charge sign); protons red discs "p"; nitrogen
// nuclei larger red discs "N"; alpha particles amber; electrons navy; kinetic-energy bars orange; recoil speeds teal
// arrows; target mass purple; field lines blue with slate crosses; the energy-available line slate; answers in
// dark-ink frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD} from '../../shared/tokens';
import {LPlate} from '../../physics/light/plates';
import type {Place} from '../../physics/light/plates';
import {VCELL, ANCHOR} from '../../physics/light/plates';
import {STEEL_BALL} from '../../physics/light/frames';
import {GOLD_RING} from '../../physics/atom/elements';
import {Packet} from '../../physics/light/photo';
import {Disc, ION, IonChamber, LEAD, NEUTRON_AT, NEUTRON_PLATES, PO_BE, WAX, at} from '../../physics/atom/neutron';
import {ORANGE} from '../phys-y12-m8-v01/parts';
import {AMBER, Alpha, BLUE, GREEN, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, NucPlus, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, V08_PLATES, VIOLET, fx, sci} from '../phys-y12-m8-v08/parts';

export {AMBER, Alpha, BLUE, GREEN, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, NucPlus, ORANGE, PURPLE, RED, ROSE, Shrunk, Strip, TEAL, VIOLET, fx, sci};
export const V09_PLATES = [...new Set([...V08_PLATES, ...NEUTRON_PLATES, GOLD_RING.src, VCELL.src, STEEL_BALL.src])];
export const SLATE = GREY;
const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);

// ---------------------------------------------------------------- particles
export const P: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 20, opacity = 1}) => <Disc x={x} y={y} r={r} fill={NUC_RED} text="p" opacity={opacity} />;
export const N: React.FC<{x: number; y: number; r?: number; opacity?: number; text?: string}> = ({x, y, r = 20, opacity = 1, text = 'n'}) => <Disc x={x} y={y} r={r} fill={NEUTRON} text={text} opacity={opacity} />;
export const Nit: React.FC<{x: number; y: number; r?: number; opacity?: number}> = ({x, y, r = 34, opacity = 1}) => <Disc x={x} y={y} r={r} fill={NUC_RED} text="N" opacity={opacity} />;
export const Gam: React.FC<{x: number; y: number; deg?: number; len?: number; opacity?: number; label?: string}> = ({x, y, deg = 0, len = 70, opacity = 1, label}) => <Packet x={x} y={y} deg={deg} len={len} color={AMBER.stroke} opacity={opacity} label={label} size={28} />;

// ---------------------------------------------------------------- the beam line (stage B)
/** Plate placements on the beam line; the beam axis is y = 560. */
export const BL = {
	axis: 560,
	src: {x: 96, y: 441, w: 440} as Place,
	lead: {x: 600, y: 506, w: 300} as Place,
	wax: {x: 960, y: 447, w: 200} as Place,
	cell: {x: 906, y: 528, w: 300} as Place,
	ion: {x: 1213, y: 393, w: 560} as Place,
} as const;
export const blPts = () => {
	const po = at(PO_BE, BL.src, NEUTRON_AT.po[0], NEUTRON_AT.po[1]), be = at(PO_BE, BL.src, NEUTRON_AT.be[0], NEUTRON_AT.be[1]), win = at(PO_BE, BL.src, NEUTRON_AT.window[0], NEUTRON_AT.window[1]);
	const slabL = at(WAX, BL.wax, NEUTRON_AT.slabX[0], NEUTRON_AT.slab[1]), slabR = at(WAX, BL.wax, NEUTRON_AT.slabX[1], NEUTRON_AT.slab[1]);
	const ionWin = at(ION, BL.ion, NEUTRON_AT.ionWindow[0], NEUTRON_AT.ionWindow[1]);
	const cellL = at(VCELL, BL.cell, 711, ANCHOR.cellAxisY), cellR = at(VCELL, BL.cell, 1231, ANCHOR.cellAxisY);
	return {po, be, win, slabL, slabR, ionWin, cellL, cellR};
};
export type StreamKind = 'unknown' | 'gamma' | 'neutron';
/** Alpha dots crossing from the polonium disc to the beryllium disc (time t in frames). */
export const AlphaDots: React.FC<{t: number; opacity?: number}> = ({t, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const {po, be} = blPts();
	return <g opacity={opacity}>{[0, 1, 2].map(i => { const u = ((t / 26 + i / 3) % 1); return <circle key={i} cx={po[0] + 22 + (be[0] - po[0] - 44) * u} cy={po[1] + (be[1] - po[1]) * u + (i - 1) * 10} r={7} fill={AMBER.stroke} stroke={INK} strokeWidth={1.5} />; })}</g>;
};
/** The radiation stream from the source window to x1: a grey dashed line, gamma packets or neutron discs moving along it. */
export const Stream: React.FC<{x1: number; t: number; kind: StreamKind; draw?: number; opacity?: number; y?: number; x0?: number}> = ({x1, t, kind, draw = 1, opacity = 1, y = BL.axis, x0}) => {
	if (opacity <= 0.001 || draw <= 0.001) return null;
	const start = x0 ?? blPts().win[0];
	const xe = start + (x1 - start) * Math.min(1, draw);
	const n = Math.max(1, Math.round((x1 - start) / 170));
	return (
		<g opacity={opacity}>
			<line x1={start} y1={y} x2={xe} y2={y} stroke={GREY.stroke} strokeWidth={5} strokeDasharray="16 10" />
			{kind !== 'unknown' ? Array.from({length: n}, (_, i) => {
				const u = ((t / 70 + i / n) % 1), x = start + (x1 - start) * u;
				if (x > xe) return null;
				return kind === 'gamma' ? <Gam key={i} x={x} y={y} len={54} /> : <N key={i} x={x} y={y} r={15} />;
			}) : null}
		</g>
	);
};
/** The beam line plates: source and lead always; the wax or the gas cell and the chamber when asked. */
export const BeamPlates: React.FC<{wax?: number; cell?: number; ion?: number; reading?: number; src?: number; lead?: number}> = ({wax = 0, cell = 0, ion = 0, reading = 0, src = 1, lead = 1}) => (
	<g>
		<LPlate spec={PO_BE} p={BL.src} opacity={src} />
		<LPlate spec={LEAD} p={BL.lead} opacity={lead} />
		<LPlate spec={WAX} p={BL.wax} opacity={wax} />
		<LPlate spec={VCELL} p={BL.cell} opacity={cell} />
		<IonChamber p={BL.ion} reading={reading} opacity={ion} />
	</g>
);
/** A needle reading that flicks with each arriving particle (deterministic). */
export const flicker = (f: number, base: number, seed = 1) => { const s = Math.sin((f + seed * 17) * 12.9898) * 43758.5453; const r = s - Math.floor(s); return Math.max(0, Math.min(1, base + 0.12 * (r - 0.5))); };

// ---------------------------------------------------------------- the wax close-up (coded chain molecules)
/** Paraffin chains: carbon zigzags (dark) with hydrogen (white, small) above and below each carbon. */
export const WaxChains: React.FC<{x: number; y: number; w: number; rows?: number; opacity?: number; hiH?: number}> = ({x, y, w, rows = 2, opacity = 1, hiH = 0}) => {
	if (opacity <= 0.001) return null;
	const n = Math.floor(w / 46);
	return (
		<g opacity={opacity}>
			{Array.from({length: rows}, (_, r) => {
				const yy = y + r * 96;
				const pts = Array.from({length: n}, (_, i) => [x + 23 + i * 46, yy + (i % 2 ? 14 : -14)] as const);
				return <g key={r}>
					<polyline points={pts.map(q => q.join(',')).join(' ')} fill="none" stroke={INK} strokeWidth={4} />
					{pts.map(([cx, cy], i) => <g key={i}>
						<line x1={cx} y1={cy} x2={cx - 10} y2={cy + (i % 2 ? 26 : -26)} stroke={INK} strokeWidth={2.5} />
						<line x1={cx} y1={cy} x2={cx + 10} y2={cy + (i % 2 ? 26 : -26)} stroke={INK} strokeWidth={2.5} />
						<circle cx={cx - 10} cy={cy + (i % 2 ? 26 : -26)} r={8} fill={hiH > 0.5 ? '#f3c7c1' : '#ffffff'} stroke={hiH > 0.5 ? NUC_RED : INK} strokeWidth={2} />
						<circle cx={cx + 10} cy={cy + (i % 2 ? 26 : -26)} r={8} fill={hiH > 0.5 ? '#f3c7c1' : '#ffffff'} stroke={hiH > 0.5 ? NUC_RED : INK} strokeWidth={2} />
						<circle cx={cx} cy={cy} r={11} fill="#3d3a36" />
					</g>)}
				</g>;
			})}
		</g>
	);
};

// ---------------------------------------------------------------- vertical energy bars (MeV)
/** A vertical bar standing on `base` (px), `k` px per MeV, of value v; `grow` (0 to 1) raises it. */
export const VBar: React.FC<{x: number; base: number; k: number; v: number; w?: number; color: string; soft?: string; grow?: number; opacity?: number; label?: string; size?: number; hatchFrom?: number}> = ({x, base, k, v, w = 90, color, soft, grow = 1, opacity = 1, label, size = 28, hatchFrom}) => {
	if (opacity <= 0.001) return null;
	const h = k * v * Math.max(0, Math.min(1, grow));
	const id = `hatch-${Math.round(x)}-${Math.round(base)}`;
	return (
		<g opacity={opacity}>
			<defs><pattern id={id} width={14} height={14} patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width={14} height={14} fill={soft ?? CARD} /><line x1={0} y1={0} x2={0} y2={14} stroke={GREY.stroke} strokeWidth={6} /></pattern></defs>
			<rect x={x} y={base - h} width={w} height={h} fill={soft ?? color} stroke={color} strokeWidth={3} />
			{hatchFrom !== undefined && h > k * hatchFrom ? <rect x={x} y={base - h} width={w} height={h - k * hatchFrom} fill={`url(#${id})`} stroke={GREY.stroke} strokeWidth={3} /> : null}
			{label ? <text x={x + w / 2} y={base - h - 12} textAnchor="middle" style={T(size, INK)}>{label}</text> : null}
		</g>
	);
};
/** A horizontal slate line across bars at value v (the energy available). */
export const Level: React.FC<{x0: number; x1: number; base: number; k: number; v: number; opacity?: number; color?: string}> = ({x0, x1, base, k, v, opacity = 1, color = GREY.stroke}) => (opacity <= 0.001 ? null : <line x1={x0} y1={base - k * v} x2={x1} y2={base - k * v} stroke={color} strokeWidth={5} strokeDasharray="14 8" opacity={opacity} />);

// ---------------------------------------------------------------- field region (no deflection)
/** Blue electric field lines (top to bottom) and slate crosses (B into the page) over a region. */
export const FieldRegion: React.FC<{x: number; y: number; w: number; h: number; opacity?: number}> = ({x, y, w, h, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={10} fill="none" stroke={BLUE.stroke} strokeWidth={2.5} strokeDasharray="8 6" />
		{Array.from({length: Math.floor(w / 70)}, (_, i) => { const lx = x + 35 + i * 70; return <g key={i}><line x1={lx} y1={y + 10} x2={lx} y2={y + h - 22} stroke={BLUE.stroke} strokeWidth={3} /><path d={`M${lx},${y + h - 10} l-8,-14 l16,0 Z`} fill={BLUE.stroke} /></g>; })}
		{Array.from({length: Math.floor(w / 70)}, (_, i) => [0.25, 0.75].map((v, j) => { const cx = x + 70 + i * 70, cy = y + h * v; return cx < x + w - 20 ? <g key={`${i}-${j}`} stroke={GREY.stroke} strokeWidth={3}><line x1={cx - 8} y1={cy - 8} x2={cx + 8} y2={cy + 8} /><line x1={cx + 8} y1={cy - 8} x2={cx - 8} y2={cy + 8} /></g> : null; }))}
	</g>
));
