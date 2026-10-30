// M8 B01 drawing parts: the thermometer with a coded column level (glass-coloured cover along the painted column axis,
// so the reading can fall and rise without redrawing the plate), a circular uniform zoom into a plate (receptor and
// control-centre slots; never stretched), the cold-loop ring (the shared LoopRing filled with the thermometer, the skin
// receptor zoom, the hypothalamus zoom, the shivering muscle and the response), and labels that dim to grey once the
// next label writes. Shared Module 8 parts live in ../m8-shared/parts; bio kit pieces are imported, never edited.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {pbPt} from '../bio-m5-b07/shared';
import type {PB} from '../bio-m5-b07/shared';
import {
	AMBER, AMBER_INK, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, StepChip, Sx, TEAL, WText, clamp01, lerp, prog,
	smooth, tw, vis,
} from '../bio-m7-b13/parts';
import {Lbl, CurveArrow} from '../bio-m6-b01/parts';
import {scribbleEllipse} from '../../kit';
import {COOL, LoopRing, RingArc, SignalPulse, TEAL8, WARM, ringPt, tremor} from '../m8-shared/parts';
import type {Pt, RG} from '../m8-shared/parts';
import {FEAT, PLATES} from './assets';

export {
	AMBER, AMBER_INK, CARD, CTag, CardBox, DrawPath, EDGE, GREYT, GREY_INK, GTag, INK, INK_SOFT, MistakeChip, Pl, PlainArrow, PlateB, StepChip, Sx, TEAL, WText, clamp01, lerp, prog,
	smooth, tw, vis, Lbl, CurveArrow, scribbleEllipse, pbPt, FEAT, PLATES,
};
export type {PB};
export const HEAD = 'How does negative feedback keep conditions in range?';
export const VIOLET = '#6a4fb0';

/** Ring geometry interpolated from a to b over [t0, t0 + d]. */
export const gMix = (f: number, a: RG, b: RG, t0 = 0, d = 24): RG => {
	const u = smooth(prog(f, t0, d));
	return {cx: lerp(a.cx, b.cx, u), cy: lerp(a.cy, b.cy, u), R: lerp(a.R, b.R, u), r: lerp(a.r, b.r, u)};
};

// ---------- thermometer with a coded level ----------
/** level(f) is the fraction of the painted column shown (1 = the full column as painted). */
export const Thermo: React.FC<{cx: number; cy: number; w: number; level?: (f: number) => number; o?: number}> = ({cx, cy, w, level, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const P = pbPt(PLATES.thermo, cx, cy, w);
	const k = w / (PLATES.thermo.box[2] - PLATES.thermo.box[0]);
	const L = level ? clamp01(level(f)) : 1;
	const [bx, by] = FEAT.bulb, [tx, ty] = FEAT.colTop;
	const lx = lerp(bx, tx, 0.12 + 0.88 * L), ly = lerp(by, ty, 0.12 + 0.88 * L);
	const [ax, ay] = P(lx, ly), [ex, ey] = P(tx + 12, ty - 7);
	return (
		<g opacity={o}>
			<PlateB p={PLATES.thermo} cx={cx} cy={cy} w={w} />
			{L < 0.999 ? <line x1={ax} y1={ay} x2={ex} y2={ey} stroke="#e9f1f4" strokeWidth={30 * k} strokeLinecap="round" /> : null}
		</g>
	);
};

// ---------- circular zoom ----------
export const Zoom: React.FC<{p: PB; cx: number; cy: number; r: number; u: number; v: number; k: number; id: string; o?: number; filter?: string}> = ({p, cx, cy, r, u, v, k, id, o = 1, filter}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><circle cx={cx} cy={cy} r={r} /></clipPath></defs>
			<g clipPath={`url(#${id})`} style={filter ? {filter} : undefined}>
				<circle cx={cx} cy={cy} r={r} fill="#f7efe6" />
				<image href={staticFile(p.src)} x={cx - u * k} y={cy - v * k} width={p.nat[0] * k} height={p.nat[1] * k} />
			</g>
		</g>
	);
};

// ---------- a label that dims when the next one writes ----------
export const DLbl: React.FC<{x: number; y: number; text: string; at: number; dimAt?: number; size?: number; maxW?: number; anchor?: 'start' | 'middle' | 'end'; color?: string; out?: number}> = ({x, y, text, at, dimAt, size = 30, maxW = 640, anchor = 'start', color = INK, out}) => {
	const f = useCurrentFrame();
	const dim = dimAt !== undefined && f >= dimAt;
	return <WText x={x} y={y} text={text} size={size} maxW={maxW} color={dim ? GREY_INK : color} hand weight={700} at={at} out={out} anchor={anchor} opacity={dim ? 0.85 : 1} />;
};

// ---------- the cold loop ring ----------
export type CR = {
	lit?: (number | undefined)[];
	/** when each slot's content appears (stimulus, receptor, control, effector, response) */
	show?: number[];
	thermo?: (f: number) => number;
	shiver?: (f: number) => number;
	names?: boolean;
	minus?: {at: number; signAt?: number; color?: string};
	pulses?: {a: number; b: number; at: number; until?: number; every?: number; fade?: (f: number) => number; color?: string}[];
	grey?: number;
};
export const ROLE = ['stimulus', 'receptor', 'control centre', 'effector', 'response'];
export const ColdRing: React.FC<{g: RG; c?: CR; at?: number; o?: number; id: string}> = ({g, c = {}, at = -100, o = 1, id}) => {
	const f = useCurrentFrame();
	const show = c.show ?? [-100, -100, -100, -100, -100];
	const S = (i: number) => vis(f, show[i], undefined, 14);
	const P = (i: number) => ringPt(g, i);
	const r = g.r;
	const sh = c.shiver ? c.shiver(f) : 0;
	const filter = c.grey ? `grayscale(${c.grey})` : undefined;
	return (
		<LoopRing g={g} at={at} o={o} lit={c.lit}>
			{S(0) > 0.01 ? <g opacity={S(0)}><Thermo cx={P(0)[0]} cy={P(0)[1]} w={r * 1.75} level={c.thermo} /></g> : null}
			{S(1) > 0.01 ? <g opacity={S(1)}><Zoom p={PLATES.skin} cx={P(1)[0]} cy={P(1)[1]} r={r - 4} u={FEAT.nerve[0]} v={FEAT.nerve[1] + 60} k={(r * 1.7) / 520} id={id + '-rz'} filter={filter} /></g> : null}
			{S(2) > 0.01 ? <g opacity={S(2)}><Zoom p={PLATES.brain} cx={P(2)[0]} cy={P(2)[1]} r={r - 4} u={FEAT.hypo[0]} v={FEAT.hypo[1] - 20} k={(r * 1.7) / 760} id={id + '-hz'} filter={filter} /></g> : null}
			{S(3) > 0.01 ? <g opacity={S(3)} transform={`translate(${tremor(f, sh, 2.5)},0)`}><Pl p={PLATES.muscle} cx={P(3)[0]} cy={P(3)[1]} w={r * 1.75} /></g> : null}
			{S(4) > 0.01 ? (
				<g opacity={S(4)}>
					<Sx x={P(4)[0]} y={P(4)[1] - r * 0.08} text="heat ↑" size={r * 0.36} color={WARM} anchor="middle" weight={800} at={-1000} />
					<Sx x={P(4)[0]} y={P(4)[1] + r * 0.36} text="loss ↓" size={r * 0.32} color={COOL} anchor="middle" weight={800} at={-1000} />
				</g>
			) : null}
			{c.names ? ROLE.map((t, i) => <Sx key={t} x={P(i)[0]} y={P(i)[1] + r + Math.max(20, r * 0.34)} text={t} size={Math.max(18, r * 0.27)} color={INK_SOFT} anchor="middle" hand weight={700} at={-1000} />) : null}
			{c.minus ? <RingArc g={g} i={4} at={c.minus.at} color={c.minus.color ?? AMBER} width={6} sign="−" signAt={c.minus.signAt ?? c.minus.at + 8} signSize={Math.max(34, r * 0.6)} /> : null}
			{(c.pulses ?? []).map((p, k) => <SignalPulse key={k} a={ringPt(g, p.a, g.R)} b={ringPt(g, p.b, g.R)} bow={0} at={p.at} until={p.until} every={p.every ?? 26} dur={22} color={p.color ?? AMBER} r={Math.max(6, r * 0.1)} track={false} fade={p.fade} />)}
		</LoopRing>
	);
};
/** A short vertical arrow (up or down) with a word. */
export const UpDown: React.FC<{x: number; y: number; up: boolean; text: string; at: number; color?: string; size?: number}> = ({x, y, up, text, at, color = AMBER_INK, size = 28}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 10);
	if (o <= 0.01) return null;
	const s = up ? -1 : 1;
	return (
		<g opacity={o}>
			<line x1={x} y1={y - s * 34} x2={x} y2={y + s * 34} stroke={color} strokeWidth={6} strokeLinecap="round" />
			<path d={`M${x - 14},${y + s * 20} L${x},${y + s * 36} L${x + 14},${y + s * 20}`} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />
			<Sx x={x + 22} y={y + 10} text={text} size={size} color={color} hand weight={700} at={-1000} />
		</g>
	);
};
export const DashCircle: React.FC<{cx: number; cy: number; rx: number; ry: number; at: number; color?: string}> = ({cx, cy, rx, ry, at, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	return <g opacity={0.7}><DrawPath d={`M${cx - rx},${cy} A${rx},${ry} 0 1 1 ${cx + rx},${cy} A${rx},${ry} 0 1 1 ${cx - rx},${cy}`} at={at} dur={30} color={color} width={3} dash="12 12" /></g>;
};
export {COOL, WARM, TEAL8, ringPt};
export type {Pt, RG};
