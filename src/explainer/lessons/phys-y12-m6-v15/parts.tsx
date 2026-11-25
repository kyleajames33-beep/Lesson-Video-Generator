// Lesson parts for phys-y12-m6-v15: the transmission line (kit gap 1: v14's handoff line; a straight model line with a
// resistor zigzag, charges whose spacing follows the engine's current and a heat glow that follows I^2R; the
// one-circuit model with outgoing and return wires, a load box and two voltage brackets), the loss ledger, the P_loss
// against V graph, the grid chain (kit gap 2: plates in a row with coded transformer symbols, per-stage tags and charge
// spacing that changes at each transformer), the lab chain of the handoff, and v14's parts re-exported.
// Colour roles (design, Revision 2): current orange; power sent amber; loss and heat warm red; received green;
// transmission voltage navy (tall bracket); drop along the line violet (short bracket); line resistance ink zigzag;
// answers in dark-ink frames; mistakes slate (root rule R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, INK, TONES} from '../../shared/tokens';
import {Plate} from '../../physics/electromagnetism/bench';
import type {Place} from '../../physics/electromagnetism/bench';
import {FlowDots} from '../../physics/electromagnetism/induction';
import {Arrow2} from '../../physics/electromagnetism/magnetic';
import {ANCHOR, HEAT, HOUSE, HotWire, POLE_XFMR, STATION, SUBSTATION, TOWER, XCore, Zigzag, anchorAt, byHeight, sagPts} from '../../physics/electromagnetism/transformer';
import {AMBER, CardRect, FLUX, GL, GridLandscape, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Sb, Shrunk, Strip, T, V14_PLATES, Ws, fx} from '../phys-y12-m6-v14/parts';

export {AMBER, CardRect, FLUX, GL, GridLandscape, Givens, Lbl, NAVY, ORANGE, ROSE, Ring, Sb, Shrunk, Strip, T, Ws, fx};
export const V15_PLATES = [...V14_PLATES];
export const GREEN = TONES.green, VIOLET = TONES.violet;
type Pt = [number, number];
const svgText = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 7, strokeLinejoin: 'round'} as React.CSSProperties);

/** Charge spacing (px) for a current: twice the current, half the spacing (2000 A at 44 px). */
export const gapFor = (I: number, ref = 2000, at = 44) => Math.max(14, Math.min(400, (at * ref) / I));

// ---------------------------------------------------------------- a straight model line
/**
 * A straight line from x1 to x2 at y with a resistor zigzag in the middle, charges spaced by `gap` (px) moving by
 * `phase`, and a heat glow `tint`. `left`/`right` are drawn by the lesson (boxes, plates).
 */
export const ModelLine: React.FC<{x1: number; x2: number; y: number; gap?: number; phase?: number; dots?: number; tint?: number; zw?: number; opacity?: number}> = ({x1, x2, y, gap = 44, phase = 0, dots = 1, tint = 0, zw = 160, opacity = 1}) => {
	const zm = (x1 + x2) / 2;
	return (
		<g opacity={opacity}>
			<HotWire pts={[[x1, y], [zm - zw / 2, y]]} tint={tint} width={5} />
			<HotWire pts={[[zm + zw / 2, y], [x2, y]]} tint={tint} width={5} />
			{tint > 0.01 ? <line x1={zm - zw / 2} y1={y} x2={zm + zw / 2} y2={y} stroke={HEAT} strokeWidth={22} opacity={0.5 * tint} strokeLinecap="round" /> : null}
			<Zigzag x1={zm - zw / 2} y1={y} x2={zm + zw / 2} y2={y} n={6} amp={16} width={5} />
			{dots > 0.001 ? <FlowDots pts={[[x1, y], [x2, y]]} phase={phase} gap={gap} r={8} color={ORANGE.stroke} opacity={dots} /> : null}
		</g>
	);
};
/** A labelled box at an end of a model line ("power station", "city"). */
export const EndBox: React.FC<{x: number; y: number; w: number; h: number; label: string; color?: string; size?: number; opacity?: number}> = ({x, y, w, h, label, color = INK, size = 30, opacity = 1}) => (
	<g opacity={opacity}>
		<rect x={x} y={y} width={w} height={h} rx={14} fill={CARD} stroke={color} strokeWidth={4} />
		<text x={x + w / 2} y={y + h / 2 + size * 0.36} textAnchor="middle" style={svgText(size, color)}>{label}</text>
	</g>
);

// ---------------------------------------------------------------- the one-circuit model (scene 2)
export const MC = {st: byHeight(STATION, 60, 360, 220), top: 420, bot: 690, x1: 470, x2: 1480, load: {x: 1480, y: 380, w: 260, h: 350}};
/** The station plate, an outgoing wire (top) and a return wire (bottom) with a zigzag on each, to a "city" load. */
export const ModelCircuit: React.FC<{phase?: number; gap?: number; dots?: number; tint?: number}> = ({phase = 0, gap = 44, dots = 1, tint = 0}) => {
	const st = MC.st, sx = st.x + st.w - 10;
	const loop: Pt[] = [[sx, MC.top], [MC.x2, MC.top], [MC.x2 + 30, MC.top], [MC.x2 + 30, MC.bot], [MC.x2, MC.bot], [sx, MC.bot]];
	const zm = (MC.x1 + MC.x2) / 2;
	return (
		<g>
			<Plate spec={STATION} p={st} />
			<HotWire pts={[[sx, MC.top], [zm - 90, MC.top]]} tint={tint} width={5} /><HotWire pts={[[zm + 90, MC.top], [MC.x2, MC.top]]} tint={tint} width={5} />
			<HotWire pts={[[sx, MC.bot], [zm - 90, MC.bot]]} tint={tint} width={5} /><HotWire pts={[[zm + 90, MC.bot], [MC.x2, MC.bot]]} tint={tint} width={5} />
			<Zigzag x1={zm - 90} y1={MC.top} x2={zm + 90} y2={MC.top} n={6} amp={16} width={5} />
			<Zigzag x1={zm - 90} y1={MC.bot} x2={zm + 90} y2={MC.bot} n={6} amp={16} width={5} />
			<line x1={sx} y1={MC.top} x2={sx} y2={MC.bot} stroke={INK} strokeWidth={0} />
			<EndBox x={MC.load.x} y={MC.load.y} w={MC.load.w} h={MC.load.h} label="city (load)" />
			{dots > 0.001 ? <FlowDots pts={loop} phase={phase} gap={gap} r={8} color={ORANGE.stroke} opacity={dots} /> : null}
		</g>
	);
};
/** A bracket: a vertical (or horizontal) span with end ticks. */
export const Bracket2: React.FC<{x1: number; y1: number; x2: number; y2: number; color: string; width?: number; tick?: number; opacity?: number}> = ({x1, y1, x2, y2, color, width = 6, tick = 16, opacity = 1}) => {
	if (opacity <= 0.001) return null;
	const v = x1 === x2;
	return (
		<g opacity={opacity} stroke={color} strokeWidth={width} strokeLinecap="round" fill="none">
			<line x1={x1} y1={y1} x2={x2} y2={y2} />
			{v ? <><line x1={x1 - tick} y1={y1} x2={x1 + tick} y2={y1} /><line x1={x2 - tick} y1={y2} x2={x2 + tick} y2={y2} /></> : <><line x1={x1} y1={y1 - tick} x2={x1} y2={y1 + tick} /><line x1={x2} y1={y2 - tick} x2={x2} y2={y2 + tick} /></>}
		</g>
	);
};

// ---------------------------------------------------------------- the loss ledger (horizontal)
/** A sent-power bar split into received (green) and lost (warm red) slices, with labels. */
export const Ledger: React.FC<{x: number; y: number; w: number; h?: number; sent: number; lost: number; grow?: number; size?: number; opacity?: number; reveal?: number}> = ({x, y, w, h = 56, sent, lost, grow = 1, size = 30, opacity = 1, reveal = 1}) => {
	if (opacity <= 0.001) return null;
	const lw = Math.max(4, (w * lost) / sent) * grow;
	return (
		<g opacity={opacity}>
			<text x={x} y={y - 14} style={svgText(size, AMBER.ink)}>sent {fx(sent, 0)} MW</text>
			<rect x={x} y={y} width={w} height={h} rx={8} fill={AMBER.soft} stroke={AMBER.stroke} strokeWidth={3} />
			<g opacity={reveal}>
				<rect x={x} y={y} width={(w - lw) * grow + (1 - grow) * w} height={h} rx={8} fill={GREEN.stroke} opacity={0.85} />
				<rect x={x + w - lw} y={y} width={lw} height={h} fill={HEAT} />
				<text x={x} y={y + h + size + 8} style={svgText(size, GREEN.ink)}>received {fx(sent - lost, lost < 1 ? 2 : 0)} MW</text>
				<text x={x + w} y={y + h + size + 8} textAnchor="end" style={svgText(size, HEAT)}>lost {fx(lost, lost < 1 ? 2 : 1)} MW</text>
			</g>
		</g>
	);
};

// ---------------------------------------------------------------- P_loss against V (same power, same line)
export type GraphBox = {x: number; y: number; w: number; h: number; vmax: number; lmax: number};
export const gMap = (g: GraphBox) => ({X: (v: number) => g.x + (v / g.vmax) * g.w, Y: (l: number) => g.y + g.h - (l / g.lmax) * g.h});
/** Axes, ticks and the falling 1/V^2 curve of P_loss (MW) against V (kV), for P = 500 MW and R = 2.0 ohm. */
export const LossGraph: React.FC<{g: GraphBox; loss: (kv: number) => number; xTicks: readonly number[]; yTicks: readonly number[]; grow?: number; opacity?: number}> = ({g, loss, xTicks, yTicks, grow = 1, opacity = 1}) => {
	const m = gMap(g);
	const v0 = Math.sqrt((loss(1) * 1) / g.lmax) * 1.001;
	const pts: Pt[] = [];
	for (let i = 0; i <= 200; i++) { const v = v0 + ((g.vmax - v0) * i) / 200; if (i / 200 <= grow) pts.push([m.X(v), m.Y(loss(v))]); }
	return (
		<g opacity={opacity}>
			<line x1={g.x} y1={g.y + g.h} x2={g.x + g.w + 20} y2={g.y + g.h} stroke={INK} strokeWidth={4} />
			<line x1={g.x} y1={g.y + g.h} x2={g.x} y2={g.y - 20} stroke={INK} strokeWidth={4} />
			{xTicks.map(t => <g key={t}><line x1={m.X(t)} y1={g.y + g.h} x2={m.X(t)} y2={g.y + g.h + 12} stroke={INK} strokeWidth={3} /><text x={m.X(t)} y={g.y + g.h + 46} textAnchor="middle" style={svgText(28, INK, 700)}>{t}</text></g>)}
			{yTicks.map(t => <g key={t}><line x1={g.x - 12} y1={m.Y(t)} x2={g.x} y2={m.Y(t)} stroke={INK} strokeWidth={3} /><text x={g.x - 20} y={m.Y(t) + 10} textAnchor="end" style={svgText(28, INK, 700)}>{t}</text></g>)}
			{pts.length > 1 ? <path d={pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')} fill="none" stroke={HEAT} strokeWidth={6} /> : null}
		</g>
	);
};

// ---------------------------------------------------------------- the grid chain (scenes 8, 9)
export const CH = (() => {
	const ground = 690;
	const st: Place = byHeight(STATION, 40, ground - 200, 200);
	const t1: Place = byHeight(TOWER, 560, ground - 380, 380), t2: Place = byHeight(TOWER, 820, ground - 380, 380);
	const sub: Place = byHeight(SUBSTATION, 1080, ground - 170, 170);
	const pole: Place = byHeight(POLE_XFMR, 1400, ground - 300, 300);
	const ho: Place = byHeight(HOUSE, 1590, ground - 130, 130);
	const up = {cx: 440, cy: ground - 150, s: 120};
	const a = anchorAt(STATION, st, ANCHOR.station);
	const t1l = anchorAt(TOWER, t1, ANCHOR.tower.uL), t1r = anchorAt(TOWER, t1, ANCHOR.tower.uR), t2l = anchorAt(TOWER, t2, ANCHOR.tower.uL), t2r = anchorAt(TOWER, t2, ANCHOR.tower.uR);
	const si = anchorAt(SUBSTATION, sub, ANCHOR.substation), pa = anchorAt(POLE_XFMR, pole, ANCHOR.pole.arm), pl = anchorAt(POLE_XFMR, pole, ANCHOR.pole.lv), h = anchorAt(HOUSE, ho, ANCHOR.houseEave);
	const upIn: Pt = [up.cx - up.s / 2 - 30, up.cy - 30], upOut: Pt = [up.cx + up.s / 2 + 30, up.cy - 30];
	const seg = {
		gen: [a, [upIn[0], a[1]], upIn] as Pt[],
		tx: [upOut, ...sagPts(upOut, t1l, 20).slice(1), t1r, ...sagPts(t1r, t2l, 26).slice(1), t2r, ...sagPts(t2r, si, 26).slice(1)] as Pt[],
		dist: sagPts([si[0] + 40, si[1]], pa, 26) as Pt[],
		home: sagPts(pl, h, 18) as Pt[],
	};
	return {ground, st, t1, t2, sub, pole, ho, up, seg};
})();
/** The chain: plates and the step-up symbol in a row on one line; charges spaced by stage (current cut at step-up). */
export const GridChain: React.FC<{phase?: number; show?: readonly number[]; flux?: number; pulse?: number}> = ({phase = 0, show = [1, 1, 1, 1, 1], flux = 0, pulse = 0}) => {
	const [s0, s1, s2, s3, s4] = show;
	return (
		<g>
			<line x1={30} y1={CH.ground} x2={1890} y2={CH.ground} stroke={INK} strokeWidth={4} />
			<g opacity={s0}><Plate spec={STATION} p={CH.st} /><HotWire pts={CH.seg.gen} width={4} /><FlowDots pts={CH.seg.gen} phase={phase} gap={18} r={7} color={ORANGE.stroke} /></g>
			<g opacity={s1}>
				<rect x={CH.up.cx - CH.up.s / 2 - 46} y={CH.up.cy - CH.up.s / 2 - 46} width={CH.up.s + 92} height={CH.up.s + 92} rx={14} fill={CARD} stroke="rgba(60,45,20,0.3)" strokeWidth={2.5} />
				<XCore cx={CH.up.cx} cy={CH.up.cy} s={CH.up.s} t={26} np={2} ns={5} phase={phase * 1.5} flux={flux} pColor={ORANGE.stroke} sColor={ROSE.stroke} pWidth={5} sWidth={5} pulseP={pulse} pulseS={pulse} />
			</g>
			<g opacity={s2}><Plate spec={TOWER} p={CH.t1} /><Plate spec={TOWER} p={CH.t2} /><HotWire pts={CH.seg.tx} width={4} /><FlowDots pts={CH.seg.tx} phase={phase} gap={110} r={7} color={ORANGE.stroke} /></g>
			<g opacity={s3}><Plate spec={SUBSTATION} p={CH.sub} /><HotWire pts={CH.seg.dist} width={4} /><FlowDots pts={CH.seg.dist} phase={phase} gap={44} r={7} color={ORANGE.stroke} /></g>
			<g opacity={s4}><Plate spec={POLE_XFMR} p={CH.pole} /><Plate spec={HOUSE} p={CH.ho} /><HotWire pts={CH.seg.home} width={4} /><FlowDots pts={CH.seg.home} phase={phase} gap={16} r={7} color={ORANGE.stroke} /></g>
		</g>
	);
};

// ---------------------------------------------------------------- exam-style line diagram (attempts)
/** Sending end, two wires with a zigzag each, receiving end; optional labels and the two brackets. */
export const LineDiagram: React.FC<{vLabel?: string; rLabel?: string; tall?: number; short?: number; pulse?: number}> = ({vLabel, rLabel, tall = 0, short = 0, pulse = 0}) => (
	<svg width={678} height={560} style={{overflow: 'visible'}}>
		<EndBox x={20} y={150} w={150} h={260} label="send" size={32} />
		<EndBox x={510} y={150} w={150} h={260} label="receive" size={32} />
		<line x1={170} y1={190} x2={260} y2={190} stroke={INK} strokeWidth={5} /><Zigzag x1={260} y1={190} x2={420} y2={190} n={6} amp={16} width={5} /><line x1={420} y1={190} x2={510} y2={190} stroke={INK} strokeWidth={5} />
		<line x1={170} y1={370} x2={260} y2={370} stroke={INK} strokeWidth={5} /><Zigzag x1={260} y1={370} x2={420} y2={370} n={6} amp={16} width={5} /><line x1={420} y1={370} x2={510} y2={370} stroke={INK} strokeWidth={5} />
		{rLabel ? <text x={340} y={150} textAnchor="middle" style={svgText(34, INK)}>{rLabel}</text> : null}
		{vLabel ? <text x={95} y={470} textAnchor="middle" style={svgText(34, NAVY.ink)}>{vLabel}</text> : null}
		<Bracket2 x1={200} y1={196} x2={200} y2={364} color={NAVY.stroke} opacity={tall} />
		<Bracket2 x1={260} y1={150} x2={420} y2={150} color={VIOLET.stroke} width={6 + 4 * pulse} opacity={short} />
		{short > 0.01 ? <text x={340} y={120} textAnchor="middle" opacity={short} style={svgText(32, VIOLET.ink)}>IR</text> : null}
	</svg>
);
export {Arrow2, Ring as PenRing, GL as GRID};
