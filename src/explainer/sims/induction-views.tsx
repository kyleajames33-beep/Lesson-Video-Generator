// Drawing parts for the induction engine (induction.ts): the flux and emf strips on one
// time axis, a centre-zero meter needle, a coil turning in a uniform field, and a magnet
// moving along a coil's axis with the induced current marked. All read the same run and the
// same time. Labels come from the lesson. Sizes and colours come from tokens.ts.
import React from 'react';
import {FONT_DISPLAY} from '../kit';
import {CARD, INK, INK_SOFT, TRACK, TYPE, Tone, ToneName, tone} from '../shared/tokens';
import {InductionRun, LenzSense} from './induction';
import {SeriesGraph, SeriesMark} from './series-views';

const text: React.CSSProperties = {fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.support};
const peakOf = (a: ArrayLike<number>) => { let m = 0; for (let i = 0; i < a.length; i++) m = Math.max(m, Math.abs(a[i])); return m || 1; };

/**
 * Two strips sharing one time axis: flux (or flux linkage) above, induced emf below. The
 * emf is the steepness of the flux strip turned upside down, which is what the pair shows.
 */
export const FluxEmfStrips: React.FC<{
	run: InductionRun; now?: number; x: number; y: number; w: number; h: number;
	/** Plot flux through one turn (default) or the flux linkage N x flux. */
	quantity?: 'flux' | 'linkage';
	fluxLabel?: string; emfLabel?: string; xLabel?: string;
	fluxTone?: ToneName | Tone; emfTone?: ToneName | Tone;
	/** Multiply the plotted values, for example 1000 to show mWb or mV. */
	fluxScale?: number; emfScale?: number;
	marks?: readonly SeriesMark[]; whole?: boolean; gap?: number; opacity?: number;
}> = ({run, now, x, y, w, h, quantity = 'flux', fluxLabel = 'flux (Wb)', emfLabel = 'emf (V)', xLabel = 'time (s)', fluxTone = 'cool', emfTone = 'red', fluxScale = 1, emfScale = 1, marks, whole, gap = 10, opacity}) => {
	const phi = Float64Array.from(quantity === 'flux' ? run.flux : run.linkage, v => v * fluxScale), emf = Float64Array.from(run.emf, v => v * emfScale);
	const top = (h - gap - 40) / 2, pm = peakOf(phi) * 1.15, em = peakOf(emf) * 1.15;
	const zero: SeriesMark = {axis: 'y', value: 0, tone: 'grey'};
	return (
		<>
			<SeriesGraph lines={[{t: run.t, v: phi, tone: fluxTone}]} x={x} y={y} w={w} h={top} xRange={[0, run.duration]} yRange={[-pm, pm]} now={now} whole={whole} marks={[zero, ...(marks ?? [])]} yLabel={fluxLabel} yTicks={[-pm / 1.15, 0, pm / 1.15]} format={v => String(+v.toPrecision(2))} opacity={opacity} />
			<SeriesGraph lines={[{t: run.t, v: emf, tone: emfTone}]} x={x} y={y + top + gap} w={w} h={top + 40} xRange={[0, run.duration]} yRange={[-em, em]} now={now} whole={whole} marks={[zero, ...(marks ?? [])]} xLabel={xLabel} yLabel={emfLabel} yTicks={[-em / 1.15, 0, em / 1.15]} format={v => String(+v.toPrecision(2))} opacity={opacity} />
		</>
	);
};

/** A centre-zero meter: the needle swings left or right of zero by value / full (clamped). A diagram, not a painted meter. */
export const MeterNeedle: React.FC<{
	value: number; full: number; x: number; y: number; size?: number;
	label?: string; tone?: ToneName | Tone; opacity?: number;
}> = ({value, full, x, y, size = 260, label, tone: needleTone = 'red', opacity = 1}) => {
	const r = size / 2, cx = r, cy = r + 8, u = Math.max(-1, Math.min(1, value / full)), ang = (-90 + 62 * u) * (Math.PI / 180), c = tone(needleTone);
	const P = (deg: number, rr: number) => [cx + rr * Math.cos(((deg - 90) * Math.PI) / 180), cy + rr * Math.sin(((deg - 90) * Math.PI) / 180)];
	return (
		<svg width={size} height={r + (label ? 62 : 24)} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<path d={`M${P(-70, r).join(',')} A${r},${r} 0 0 1 ${P(70, r).join(',')} L${cx + 46},${cy} L${cx - 46},${cy} Z`} fill={CARD} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
			{[-60, -30, 0, 30, 60].map(d => { const [ax, ay] = P(d, r - 12), [bx, by] = P(d, r - (d === 0 ? 40 : 28)); return <line key={d} x1={ax} y1={ay} x2={bx} y2={by} stroke={d === 0 ? INK : INK_SOFT} strokeWidth={d === 0 ? 5 : 3} strokeLinecap="round" />; })}
			<line x1={cx} y1={cy} x2={cx + (r - 26) * Math.cos(ang)} y2={cy + (r - 26) * Math.sin(ang)} stroke={c.stroke} strokeWidth={6} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={10} fill={INK} />
			{label ? <text x={cx} y={cy + 46} textAnchor="middle" style={text} fill={INK}>{label}</text> : null}
		</svg>
	);
};

/**
 * A flat coil seen edge on, turning in a uniform field that runs left to right. `angle` is
 * between the coil's normal and the field (0: face on, all the lines pass through). The
 * field lines that pass through the coil are drawn in the field tone; the rest are grey.
 */
export const RotatingCoilView: React.FC<{
	angle: number; x: number; y: number; w: number; h: number;
	lines?: number; fieldTone?: ToneName | Tone; coilTone?: ToneName | Tone;
	normalLabel?: string; fieldLabel?: string; opacity?: number;
}> = ({angle, x, y, w, h, lines = 7, fieldTone = 'cool', coilTone = 'amber', normalLabel, fieldLabel, opacity = 1}) => {
	const cx = w / 2, cy = h / 2, half = h * 0.4, ft = tone(fieldTone), ct = tone(coilTone);
	// The normal makes `angle` with the field (+x); the coil lies at right angles to its normal.
	const nx = Math.cos(angle), ny = -Math.sin(angle), tx = -ny, ty = nx, reach = Math.abs(nx) * half;
	const through = (ly: number) => Math.abs(ly - cy) <= reach - 1e-6;
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			{Array.from({length: lines}, (_, i) => {
				const ly = cy + (i - (lines - 1) / 2) * ((h * 0.86) / (lines - 1)), on = through(ly), col = on ? ft.stroke : TRACK;
				return <g key={i}><line x1={10} y1={ly} x2={w - 26} y2={ly} stroke={col} strokeWidth={on ? 5 : 4} strokeLinecap="round" /><polygon points={`${w - 6},${ly} ${w - 30},${ly - 10} ${w - 30},${ly + 10}`} fill={col} /></g>;
			})}
			<line x1={cx - tx * half} y1={cy - ty * half} x2={cx + tx * half} y2={cy + ty * half} stroke={ct.stroke} strokeWidth={12} strokeLinecap="round" />
			<line x1={cx} y1={cy} x2={cx + nx * half * 0.62} y2={cy + ny * half * 0.62} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<polygon points={`${cx + nx * (half * 0.62 + 14)},${cy + ny * (half * 0.62 + 14)} ${cx + nx * half * 0.62 - ny * 11},${cy + ny * half * 0.62 + nx * 11} ${cx + nx * half * 0.62 + ny * 11},${cy + ny * half * 0.62 - nx * 11}`} fill={INK} />
			<circle cx={cx} cy={cy} r={8} fill={INK} />
			{normalLabel ? <text x={cx + nx * (half * 0.62 + 34)} y={cy + ny * (half * 0.62 + 34) + 11} textAnchor={nx > 0.3 ? 'start' : nx < -0.3 ? 'end' : 'middle'} style={text} fill={INK} stroke={CARD} strokeWidth={7} paintOrder="stroke">{normalLabel}</text> : null}
			{fieldLabel ? <text x={14} y={30} style={text} fill={ft.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{fieldLabel}</text> : null}
		</svg>
	);
};

/**
 * A bar magnet on the axis of a coil, both seen from the side. `position` is where the
 * magnet's centre sits, from -1 (far left of the stage) to +1 (far right); the coil is at 0
 * and its normal points right. The coil is drawn cut through: its turns show a dot or a
 * cross according to the induced current, and an arrow shows the induced field.
 */
export const MagnetCoilView: React.FC<{
	position: number; lenz: LenzSense; x: number; y: number; w: number; h: number;
	turns?: number; poles?: {north: string; south: string};
	/** True (default) when the magnet's north end points right, along the coil's normal. */
	northRight?: boolean;
	inducedLabel?: string; coilTone?: ToneName | Tone; inducedTone?: ToneName | Tone; opacity?: number;
}> = ({position, lenz, x, y, w, h, turns = 5, poles, northRight = true, inducedLabel, coilTone = 'amber', inducedTone = 'red', opacity = 1}) => {
	const cx = w / 2, cy = h / 2, R = h * 0.3, len = Math.min(w * 0.4, (turns - 1) * 42), L = w * 0.24, W = h * 0.2;
	const mx = cx + position * (w / 2 - L / 2 - 6), ct = tone(coilTone), it = tone(inducedTone), nt = tone('red'), st = tone('blue');
	const mark = (px: number, py: number, kind: 'dot' | 'cross' | 'none', key: string) => {
		const r = 17, d = r * 0.5;
		return <g key={key}><circle cx={px} cy={py} r={r} fill={CARD} stroke={ct.stroke} strokeWidth={5} />{kind === 'dot' ? <circle cx={px} cy={py} r={5} fill={ct.stroke} /> : kind === 'cross' ? <path d={`M${px - d},${py - d} L${px + d},${py + d} M${px - d},${py + d} L${px + d},${py - d}`} stroke={ct.stroke} strokeWidth={5} strokeLinecap="round" /> : null}</g>;
	};
	// A current that is anticlockwise seen from the right comes out of the page at the top of the coil.
	const topKind = lenz.current === 'none' ? 'none' : lenz.current === 'anticlockwise' ? 'dot' : 'cross', bottomKind = topKind === 'none' ? 'none' : topKind === 'dot' ? 'cross' : 'dot';
	const dir = lenz.inducedField, ax0 = cx - dir * 60, ax1 = cx + dir * 60;
	return (
		<svg width={w} height={h} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<line x1={0} y1={cy} x2={w} y2={cy} stroke={TRACK} strokeWidth={3} strokeDasharray="10 12" />
			<g transform={`translate(${mx},${cy})`}>
				<rect x={-L / 2} y={-W / 2} width={L / 2} height={W} fill={(northRight ? st : nt).soft} />
				<rect x={0} y={-W / 2} width={L / 2} height={W} fill={(northRight ? nt : st).soft} />
				<rect x={-L / 2} y={-W / 2} width={L} height={W} fill="none" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
				{poles ? <><text x={L / 4} y={11} textAnchor="middle" style={text} fill={(northRight ? nt : st).ink}>{northRight ? poles.north : poles.south}</text><text x={-L / 4} y={11} textAnchor="middle" style={text} fill={(northRight ? st : nt).ink}>{northRight ? poles.south : poles.north}</text></> : null}
			</g>
			{Array.from({length: turns}, (_, i) => { const px = cx + (turns === 1 ? 0 : -len / 2 + (len * i) / (turns - 1)); return <g key={i}>{mark(px, cy - R, topKind, 't')}{mark(px, cy + R, bottomKind, 'b')}</g>; })}
			{dir !== 0 ? <g>
				<line x1={ax0} y1={cy - R - 46} x2={ax1} y2={cy - R - 46} stroke={it.stroke} strokeWidth={6} strokeLinecap="round" />
				<polygon points={`${ax1 + dir * 18},${cy - R - 46} ${ax1 - dir * 6},${cy - R - 58} ${ax1 - dir * 6},${cy - R - 34}`} fill={it.stroke} />
				{inducedLabel ? <text x={cx} y={cy - R - 66} textAnchor="middle" style={text} fill={it.ink}>{inducedLabel}</text> : null}
			</g> : null}
		</svg>
	);
};
