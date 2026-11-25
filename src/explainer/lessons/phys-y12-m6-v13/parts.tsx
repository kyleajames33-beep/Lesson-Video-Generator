// Lesson parts for phys-y12-m6-v13: the closed-core transformer circuit (kit gap 1: last time's coded schematic,
// extended with role-coloured windings, drawn turns in a set ratio, current dots whose speed follows the engine's
// currents, a lamp that lights, a load switch and a second lamp), the power ledger (kit gap 2: two amber bars), the
// ideal card, small exam-style schematics, and v12's parts re-exported.
// Colour roles (design, Revision 2): V_p, I_p, the primary winding and its dots orange; flux slate; V_s, I_s, the
// secondary winding, its dots and its opposing field rose; the core grey; power amber; turns and givens navy; answers
// in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {INK} from '../../shared/tokens';
import {ACSymbol, Bar, FlowDots, LampSymbol, SwitchSymbol} from '../../physics/electromagnetism/induction';
import {AssumptionCard, TRANSFORMER_KIT_PLATES, XCore, xGeom} from '../../physics/electromagnetism/transformer';
import type {CardItem} from '../../physics/electromagnetism/transformer';
import {AMBER, CardRect, FIELD1, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, V12_PLATES, fx} from '../phys-y12-m6-v12/parts';

export {AMBER, CardRect, FIELD1, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Shrunk, Strip, T, fx};
export const V13_PLATES = [...V12_PLATES, ...TRANSFORMER_KIT_PLATES];
export const FLUX = '#55606b';
type Pt = [number, number];

/** AC current dots swing back and forth: the swing (px) is 36 px per ampere, at a slowed visible frequency. */
export const swing = (f: number, amps: number, period = 40) => 36 * amps * Math.sin((2 * Math.PI * f) / period);
/** Built-up fraction that inherits the row's font size. */
export const Frac: React.FC<{n: React.ReactNode; d: React.ReactNode; color?: string}> = ({n, d, color}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', fontSize: '0.8em', lineHeight: 1.08, margin: '0 0.1em', color}}>
		<span style={{padding: '0 0.16em'}}>{n}</span>
		<span style={{alignSelf: 'stretch', height: '0.075em', minHeight: 3, background: 'currentColor', borderRadius: 2}} />
		<span style={{padding: '0 0.16em'}}>{d}</span>
	</span>
);
/** Inline text struck through in slate from `at` (a cancelled factor; the text stays solid). */
export const Strike: React.FC<{at: number; children: React.ReactNode; color?: string}> = ({at, children, color = '#8a8378'}) => {
	const p = prog(useCurrentFrame(), at, 12);
	return <span style={{position: 'relative', display: 'inline-block'}}>{children}<span style={{position: 'absolute', left: '-4%', top: '52%', height: '0.09em', minHeight: 4, width: `${108 * p}%`, background: color, transform: 'rotate(-12deg)', borderRadius: 3}} /></span>;
};
const W: React.FC<{d: string; width?: number}> = ({d, width = 4}) => <path d={d} fill="none" stroke={INK} strokeWidth={width} strokeLinejoin="round" />;

/** Geometry of a transformer circuit: the core, the AC source at x `ax` and the lamp at x `lx`, and the dot paths. */
export const xcGeom = (cx: number, cy: number, s: number, t: number, ax: number, lx: number) => {
	const g = xGeom(cx, cy, s, t), e = g.ends;
	const pTopPath: Pt[] = [[ax, cy - 34], [ax, e.pTop[1]], [e.pTop[0] + 40, e.pTop[1]]];
	const pBotPath: Pt[] = [[e.pBot[0] + 40, e.pBot[1]], [ax, e.pBot[1]], [ax, cy + 34]];
	const sTopPath: Pt[] = [[e.sTop[0] - 40, e.sTop[1]], [lx, e.sTop[1]], [lx, cy - 30]];
	const sBotPath: Pt[] = [[lx, cy + 30], [lx, e.sBot[1]], [e.sBot[0] - 40, e.sBot[1]]];
	return {...g, ax, lx, pTopPath, pBotPath, sTopPath, sBotPath};
};
/**
 * The transformer circuit: core (XCore), an AC source on the primary, a lamp on the secondary (optionally a load
 * switch on the secondary's top lead and a second lamp in parallel), orange and rose current dots.
 * `phaseP`/`phaseS` advance the dots (px); `flowP`/`flowS` fade them; `lit` lights the lamps.
 */
export const XCircuit: React.FC<{cx: number; cy: number; s: number; t: number; np: number; ns: number; ax: number; lx: number; phase?: number; flux?: number; pColor?: string; sColor?: string; sWidth?: number; phaseP?: number; phaseS?: number; flowP?: number; flowS?: number; lit?: number; sw?: number; lamp2?: number; heat?: number; leak?: number; glowP?: readonly number[]; glowS?: readonly number[]; pulseP?: number; pulseS?: number; lampR?: number; srcR?: number; opacity?: number}> = ({cx, cy, s, t, np, ns, ax, lx, phase = 0, flux = 1, pColor = ORANGE.stroke, sColor = ROSE.stroke, sWidth = 7, phaseP = 0, phaseS = 0, flowP = 0, flowS = 0, lit = 0, sw, lamp2 = 0, heat = 0, leak = 0, glowP, glowS, pulseP = 0, pulseS = 0, lampR = 30, srcR = 34, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const g = xcGeom(cx, cy, s, t, ax, lx), e = g.ends;
	const swX = (e.sTop[0] + lx) / 2 + 6;
	const l2 = lx + 150;
	return (
		<g opacity={opacity}>
			<W d={`M${ax},${cy - srcR} V${e.pTop[1]} H${e.pTop[0] + 40}`} />
			<W d={`M${ax},${cy + srcR} V${e.pBot[1]} H${e.pBot[0] + 40}`} />
			{sw === undefined ? <W d={`M${lx},${cy - lampR} V${e.sTop[1]} H${e.sTop[0] - 40}`} /> : <>
				<W d={`M${lx},${cy - lampR} V${e.sTop[1]} H${swX + 30}`} />
				<W d={`M${swX - 30},${e.sTop[1]} H${e.sTop[0] - 40}`} />
				<SwitchSymbol x1={swX - 30} x2={swX + 30} y={e.sTop[1]} open={sw} />
			</>}
			<W d={`M${lx},${cy + lampR} V${e.sBot[1]} H${e.sBot[0] - 40}`} />
			{lamp2 > 0.001 ? <g opacity={lamp2}>
				<W d={`M${lx},${e.sTop[1]} H${l2} V${cy - lampR}`} />
				<W d={`M${lx},${e.sBot[1]} H${l2} V${cy + lampR}`} />
				<circle cx={l2} cy={cy} r={lampR * 2} fill="#ffd76a" opacity={0.5 * lit} />
				<LampSymbol x={l2} y={cy} r={lampR} />
			</g> : null}
			<XCore cx={cx} cy={cy} s={s} t={t} np={np} ns={ns} phase={phase} flux={flux} pColor={pColor} sColor={sColor} sWidth={sWidth} heat={heat} leak={leak} glowP={glowP} glowS={glowS} pulseP={pulseP} pulseS={pulseS} />
			<ACSymbol x={ax} y={cy} r={srcR} />
			{lit > 0.01 ? <circle cx={lx} cy={cy} r={lampR * 2} fill="#ffd76a" opacity={0.5 * lit} /> : null}
			<LampSymbol x={lx} y={cy} r={lampR} />
			{flowP > 0.001 ? <g opacity={flowP}><FlowDots pts={g.pTopPath} phase={phaseP} color={ORANGE.stroke} r={7} gap={40} /><FlowDots pts={g.pBotPath} phase={phaseP} color={ORANGE.stroke} r={7} gap={40} /></g> : null}
			{flowS > 0.001 ? <g opacity={flowS}><FlowDots pts={g.sTopPath} phase={phaseS} color={ROSE.stroke} r={7} gap={40} /><FlowDots pts={g.sBotPath} phase={phaseS} color={ROSE.stroke} r={7} gap={40} /></g> : null}
		</g>
	);
};
/** A small exam-style transformer schematic (core, two windings, source and lamp), for cards and side panels. */
export const MiniXf: React.FC<{x: number; y: number; k?: number; np: number; ns: number; phase?: number; lamp?: boolean; opacity?: number; pColor?: string; sColor?: string}> = ({x, y, k = 1, np, ns, phase = 0, lamp = true, opacity = 1, pColor, sColor}) => (
	<g opacity={opacity} transform={`translate(${x} ${y}) scale(${k})`}>
		{lamp ? <XCircuit cx={0} cy={0} s={240} t={50} np={np} ns={ns} ax={-200} lx={200} phase={phase} lampR={24} srcR={26} pColor={pColor} sColor={sColor} /> : <XCore cx={0} cy={0} s={240} t={50} np={np} ns={ns} phase={phase} pColor={pColor} sColor={sColor} />}
	</g>
);

// ---------------------------------------------------------------- the power ledger (two amber bars)
/** An SVG subscript (for labels drawn inside an SVG). */
export const Sb: React.FC<{children: React.ReactNode}> = ({children}) => <tspan baselineShift="sub" fontSize="68%">{children}</tspan>;
/** Two power bars P_in and P_out side by side: heights are fractions of `h`; values above, labels below. */
export const PowerBars: React.FC<{x: number; base: number; h: number; w?: number; gap?: number; fin: number; fout: number; vin?: React.ReactNode; vout?: React.ReactNode; lin?: React.ReactNode; lout?: React.ReactNode; shake?: number; size?: number; opacity?: number; outColor?: string}> = ({x, base, h, w = 150, gap = 90, fin, fout, vin, vout, lin = <>P<Sb>in</Sb></>, lout = <>P<Sb>out</Sb></>, shake = 0, size = 34, opacity = 1, outColor = AMBER.stroke}) => {
	if (opacity <= 0.001) return null;
	const x2 = x + w + gap;
	return (
		<g opacity={opacity}>
			<Bar x={x} base={base} w={w} h={h} frac={fin} color={AMBER.stroke} />
			<g transform={shake ? `translate(${shake} 0)` : undefined}><Bar x={x2} base={base} w={w} h={h} frac={fout} color={outColor} /></g>
			<T x={x + w / 2} y={base + size + 12} size={size} color={INK} anchor="middle">{lin}</T>
			<T x={x2 + w / 2} y={base + size + 12} size={size} color={INK} anchor="middle">{lout}</T>
			{vin !== undefined ? <T x={x + w / 2} y={base - h * fin - 14} size={size} color={AMBER.ink} anchor="middle">{vin}</T> : null}
			{vout !== undefined ? <T x={x2 + w / 2 + shake} y={base - h * fout - 14} size={size} color={AMBER.ink} anchor="middle">{vout}</T> : null}
		</g>
	);
};

// ---------------------------------------------------------------- the ideal card
export const IDEAL_ITEMS = ['all flux links both coils', 'no resistance in the windings', 'no energy lost in the core'];
export const IdealCard: React.FC<{x: number; y: number; w?: number; marks?: readonly (CardItem['mark'])[]; markO?: readonly number[]; size?: number; opacity?: number; hi?: readonly number[]}> = ({x, y, w = 560, marks = ['none', 'none', 'none'], markO = [1, 1, 1], size = 30, opacity = 1, hi = [0, 0, 0]}) => (
	<AssumptionCard x={x} y={y} w={w} title="Ideal transformer" size={size} opacity={opacity} items={IDEAL_ITEMS.map((text, i) => ({text, mark: marks[i], markO: markO[i], hi: hi[i]}))} />
);

// ---------------------------------------------------------------- the worked-example board (final frame)
export const FB = {cx: 700, cy: 600, s: 420, t: 80, ax: 330, lx: 1070, np: 10, ns: 3};
export const FB_G = xcGeom(FB.cx, FB.cy, FB.s, FB.t, FB.ax, FB.lx);
/**
 * The worked-example transformer (1200 to 60 turns on 230 V; 11.5 V, 10 A; 115 W each side) with the two power bars
 * and the ideal card: the final frame of this lesson and the opening of the next. `warm` tints the windings and core;
 * `outQ` lowers the P_out bar a little and adds "?"; `cardQ` turns the card's ticks to "?".
 */
export const FB_BARS = {x: 1340, base: 800, h: 290, w: 150, gap: 110};
export type BarOverride = {fout: number; vout: React.ReactNode; lout: React.ReactNode};
export const FinalBoard: React.FC<{phase?: number; warm?: number; outQ?: number; cardQ?: number; flicker?: number; pulse?: number; extra?: React.ReactNode; bars?: BarOverride; cardO?: number; lamp2?: number; leak?: number; vsLabel?: React.ReactNode}> = ({phase = 0, warm = 1, outQ = 1, cardQ = 1, flicker = 0, pulse = 0, extra, bars, cardO = 1, lamp2 = 0, leak = 0, vsLabel = '11.5 V'}) => {
	const e = FB_G.ends;
	const fout = bars ? bars.fout : 1 - 0.1 * outQ + 0.02 * flicker;
	return (
		<g>
			<XCircuit cx={FB.cx} cy={FB.cy} s={FB.s} t={FB.t} np={FB.np} ns={FB.ns} ax={FB.ax} lx={FB.lx} phase={phase} lit={1} heat={0.5 * warm} pulseP={pulse} pulseS={pulse} lamp2={lamp2} leak={leak} />
			<T x={FB.cx - FB_G.m} y={FB.cy - FB_G.o - 26} size={36} color={NAVY.ink} anchor="middle">N<Sb>p</Sb> = 1200</T>
			<T x={FB.cx + FB_G.m} y={FB.cy - FB_G.o - 26} size={36} color={NAVY.ink} anchor="middle">N<Sb>s</Sb> = 60</T>
			<T x={FB.ax - 52} y={FB.cy + 12} size={36} color={ORANGE.ink} anchor="end">230 V ~</T>
			<T x={FB.ax - 52} y={FB.cy + 62} size={34} color={ORANGE.ink} anchor="end">I<Sb>p</Sb> = 0.50 A</T>
			<T x={FB.lx + 52 + (lamp2 > 0.5 ? 150 : 0)} y={FB.cy + 12} size={36} color={ROSE.ink}>{vsLabel}</T>
			{lamp2 > 0.5 ? null : <T x={FB.lx + 52} y={FB.cy + 62} size={34} color={ROSE.ink}>I<Sb>s</Sb> = 10 A</T>}
			<T x={FB.cx} y={e.pBot[1] + 140} size={28} color={INK} anchor="middle">not every turn drawn</T>
			<PowerBars x={FB_BARS.x} base={FB_BARS.base} h={FB_BARS.h} w={FB_BARS.w} gap={FB_BARS.gap} fin={1} fout={fout} vin="115 W" vout={bars ? bars.vout : outQ > 0.5 ? '?' : '115 W'} lin={<>P<Sb>in</Sb> = 115 W</>} lout={bars ? bars.lout : <>P<Sb>out</Sb> = 115 W (ideal)</>} size={28} />
			<IdealCard x={1320} y={150} w={540} size={28} opacity={cardO} marks={cardQ > 0.5 ? ['q', 'q', 'q'] : ['tick', 'tick', 'tick']} markO={[1, 1, 1]} />
			{extra}
		</g>
	);
};
