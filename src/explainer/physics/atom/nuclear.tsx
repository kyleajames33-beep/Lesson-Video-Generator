// Module 8 kit, part 3: nuclear reactions in stars (additive kit file, 26 November 2026; first used by phys-y12-m8-v05
// and v06). Course-neutral: every label, number and colour of meaning comes from the lesson.
// - Binding-energy curve: binding energy per nucleon against mass number on a compressed (square-root) A axis, so the
//   light nuclei have room for labels and arrows. Values are AME2020 binding energies per nucleon (MeV): a broad
//   iron-group peak (iron-56 8.790, nickel-62 8.795), helium-4 above its neighbours. bcX / bcY / bindingAt / BindingCurve.
//   The axis is labelled "compressed scale" by the lesson (the root rule for log or compressed scales).
// - NucEq: a nuclear equation in HTML with mass number over atomic number stacked before each symbol (HSC style).
// - Tally: one conservation tally line ("A: 1 + 1 = 2") with a green tick that draws on when it balances.
// - NeutrinoDot: a small grey neutrino (or antineutrino) dot with its symbol.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, prog} from '../../kit';
import {INK, TONES} from '../../shared/tokens';

const T = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color});

// ---------------------------------------------------------------- the binding-energy curve
/** Binding energy per nucleon (MeV) against mass number A (AME2020 values; helium-4 a bump above its neighbours). */
export const BE_POINTS: readonly (readonly [number, number])[] = [[1, 0], [2, 1.112], [3, 2.573], [4, 7.074], [6, 5.332], [7, 5.606], [9, 6.463], [11, 6.928], [12, 7.68], [16, 7.976], [20, 8.032], [24, 8.261], [28, 8.448], [32, 8.493], [40, 8.551], [48, 8.666], [56, 8.79], [62, 8.795], [80, 8.71], [100, 8.6], [120, 8.51], [150, 8.27], [180, 8.04], [208, 7.87], [238, 7.57]];
/** The curve's plotting box: A from 0 to aMax on a square-root scale, B from 0 to bMax (MeV per nucleon). */
export type BCBox = {x: number; y: number; w: number; h: number; aMax?: number; bMax?: number};
export const bcX = (b: BCBox, A: number) => b.x + (Math.sqrt(Math.max(0, A)) / Math.sqrt(b.aMax ?? 240)) * b.w;
export const bcY = (b: BCBox, B: number) => b.y + b.h - (B / (b.bMax ?? 9)) * b.h;
/** Binding energy per nucleon at A by linear interpolation between the table's points (for a marker riding the curve). */
export const bindingAt = (A: number) => {
	const p = BE_POINTS;
	if (A <= p[0][0]) return p[0][1];
	for (let i = 1; i < p.length; i++) if (A <= p[i][0]) { const [a0, b0] = p[i - 1], [a1, b1] = p[i]; return b0 + ((b1 - b0) * (A - a0)) / (a1 - a0); }
	return p[p.length - 1][1];
};
/** The curve's path up to mass number `upTo`. */
export const bcPath = (b: BCBox, upTo = 999) => {
	const pts: string[] = [];
	for (let i = 0; i < BE_POINTS.length; i++) {
		const [A, B] = BE_POINTS[i];
		if (A > upTo) { const [a0] = BE_POINTS[i - 1]; if (upTo > a0) pts.push(`L${bcX(b, upTo).toFixed(1)},${bcY(b, bindingAt(upTo)).toFixed(1)}`); break; }
		pts.push(`${i ? 'L' : 'M'}${bcX(b, A).toFixed(1)},${bcY(b, B).toFixed(1)}`);
	}
	return pts.join(' ');
};
export type BCLabel = {A: number; text: string; dy?: number; dx?: number; anchor?: 'start' | 'middle' | 'end'; o?: number; color?: string};
/** Axes, ticks and the curve drawn up to `upTo` (mass number), with nuclide dots and labels. */
export const BindingCurve: React.FC<{b: BCBox; upTo?: number; labels?: readonly BCLabel[]; size?: number; opacity?: number; axes?: number; ticksA?: readonly number[]; ticksB?: readonly number[]; xTitle?: string; yTitle?: string; color?: string; width?: number}> = ({b, upTo = 999, labels = [], size = 28, opacity = 1, axes = 1, ticksA = [1, 4, 16, 56, 100, 150, 238], ticksB = [0, 2, 4, 6, 8], xTitle = 'mass number A (compressed scale)', yTitle = 'binding energy per nucleon (MeV)', color = INK, width = 5}) => {
	if (opacity <= 0.001) return null;
	return (
		<g opacity={opacity}>
			<g opacity={axes}>
				<line x1={b.x} y1={b.y + b.h} x2={b.x + b.w + 20} y2={b.y + b.h} stroke={INK} strokeWidth={4} />
				<line x1={b.x} y1={b.y + b.h} x2={b.x} y2={b.y - 20} stroke={INK} strokeWidth={4} />
				{ticksA.map(A => <g key={`a${A}`}><line x1={bcX(b, A)} y1={b.y + b.h} x2={bcX(b, A)} y2={b.y + b.h + 12} stroke={INK} strokeWidth={3} /><text x={bcX(b, A)} y={b.y + b.h + 14 + size} textAnchor="middle" style={T(size, INK, 700)}>{A}</text></g>)}
				{ticksB.map(B => <g key={`b${B}`}><line x1={b.x - 12} y1={bcY(b, B)} x2={b.x} y2={bcY(b, B)} stroke={INK} strokeWidth={3} /><text x={b.x - 18} y={bcY(b, B) + size * 0.35} textAnchor="end" style={T(size, INK, 700)}>{B}</text></g>)}
				{xTitle ? <text x={b.x + b.w} y={b.y + b.h + 30 + 2 * size} textAnchor="end" style={T(size, INK)}>{xTitle}</text> : null}
				{yTitle ? <text x={b.x + 14} y={b.y - 34} style={T(size, INK)}>{yTitle}</text> : null}
			</g>
			<path d={bcPath(b, upTo)} fill="none" stroke={color} strokeWidth={width} strokeLinejoin="round" strokeLinecap="round" />
			{labels.map((l, i) => {
				const o = l.o ?? 1;
				if (o <= 0.001 || l.A > upTo) return null;
				const x = bcX(b, l.A), y = bcY(b, bindingAt(l.A));
				return <g key={i} opacity={o}><circle cx={x} cy={y} r={9} fill={l.color ?? INK} stroke="#fffdf8" strokeWidth={2.5} /><text x={x + (l.dx ?? 0)} y={y + (l.dy ?? -22)} textAnchor={l.anchor ?? 'middle'} style={{...T(size, l.color ?? INK), paintOrder: 'stroke', stroke: '#fffdf8', strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties}>{l.text}</text></g>;
			})}
		</g>
	);
};

// ---------------------------------------------------------------- nuclear equations
export type NucTerm = string | {A: number | string; Z: number | string; s: string; k?: string | number; color?: string};
/** A nuclide with its mass number over its atomic number (HTML, inline). */
export const NucSym: React.FC<{A: number | string; Z: number | string; s: string; k?: string | number; color?: string}> = ({A, Z, s, k, color}) => (
	<span style={{display: 'inline-flex', alignItems: 'center', color}}>
		{k !== undefined ? <span style={{marginRight: '0.18em'}}>{k}</span> : null}
		<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '0.55em', lineHeight: 1.0, marginRight: '0.05em'}}><span>{A}</span><span>{Z}</span></span>
		<span>{s}</span>
	</span>
);
/** A nuclear equation from terms (strings are written as they are, for example "+", "→", "ν", "γ"). */
export const NucEq: React.FC<{terms: readonly NucTerm[]; size?: number; color?: string; weight?: number}> = ({terms, size = 48, color = INK, weight = 800}) => (
	<span style={{display: 'inline-flex', alignItems: 'center', gap: '0.28em', fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, color, whiteSpace: 'nowrap', lineHeight: 1.15}}>
		{terms.map((t, i) => (typeof t === 'string' ? <span key={i}>{t}</span> : <NucSym key={i} {...t} />))}
	</span>
);

// ---------------------------------------------------------------- conservation tallies
/** One tally line, for example "A: 1 + 1 = 2", with a green tick drawn on from `tickAt`. */
export const Tally: React.FC<{label: string; sum: string; tickAt?: number; size?: number; color?: string}> = ({label, sum, tickAt, size = 32, color = INK}) => {
	const f = useCurrentFrame();
	const p = tickAt === undefined ? 0 : prog(f, tickAt, 12);
	return (
		<span style={{display: 'inline-flex', alignItems: 'center', gap: '0.3em', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color, whiteSpace: 'nowrap'}}>
			<span>{label}: {sum}</span>
			<svg width="0.9em" height="0.9em" viewBox="0 0 40 40" style={{overflow: 'visible', opacity: p > 0 ? 1 : 0}}><path d="M6,22 L16,32 L35,8" fill="none" stroke={TONES.green.stroke} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} /></svg>
		</span>
	);
};

// ---------------------------------------------------------------- small particles
/** A neutrino (or antineutrino) as a small grey dot with its symbol beside it. */
export const NeutrinoDot: React.FC<{x: number; y: number; text?: string; r?: number; size?: number; opacity?: number; color?: string}> = ({x, y, text = 'ν', r = 9, size = 28, opacity = 1, color = TONES.grey.stroke}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={color} stroke="#fffdf8" strokeWidth={2} />
		<text x={x + r + 4} y={y + size * 0.35} style={T(size, TONES.grey.ink)}>{text}</text>
	</g>
));
