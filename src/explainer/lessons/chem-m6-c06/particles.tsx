// Particle views for M6 C06 (quality fix, 6 Nov 2026). Ball-and-stick species in the C01 style (same atom colours,
// teal moved H, charge badge), extended with phosphorus so the phosphate chain can be drawn. ProtonSwap shows one
// proton leaving a donor and landing on an acceptor (and back on odd events), with formula labels that change on the
// landing. Only C06 and C07 use this file.
import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, PAPER_DEEP, prog} from '../../kit';
import {ACID_INK, BASE_INK, INK, PROTON, PROTON_INK, PROTON_SOFT, Proton, Sx, clamp01, smooth} from '../chem-m6-c05/parts';

type E = 'H' | 'N' | 'O' | 'Cl' | 'C' | 'P';
const ATOM: Record<E, {r: number; fill: string; text: string}> = {
	H: {r: 15, fill: '#ffffff', text: INK},
	N: {r: 24, fill: '#5b7fd1', text: '#ffffff'},
	O: {r: 23, fill: '#d9604f', text: '#ffffff'},
	Cl: {r: 27, fill: '#5fae62', text: '#ffffff'},
	C: {r: 22, fill: '#4c4a47', text: '#ffffff'},
	P: {r: 26, fill: '#e38b2c', text: '#ffffff'},
};
export const PAtom: React.FC<{x: number; y: number; el: E; s?: number; o?: number; moved?: boolean; glow?: number}> = ({x, y, el, s = 1, o = 1, moved = false, glow = 0}) => {
	if (o <= 0.01) return null;
	const a = ATOM[el];
	const r = a.r * s;
	return (
		<g opacity={o}>
			{glow > 0.01 ? <circle cx={x} cy={y} r={r + 12 * s} fill={PROTON} opacity={0.45 * glow} /> : null}
			<circle cx={x} cy={y} r={r} fill={moved ? PROTON_SOFT : a.fill} stroke={moved ? PROTON_INK : INK} strokeWidth={2.4 * Math.max(0.8, s * 0.8)} />
			<ellipse cx={x - r * 0.32} cy={y - r * 0.36} rx={r * 0.34} ry={r * 0.2} fill="#ffffff" opacity={el === 'H' ? 0 : 0.28} />
			<text x={x} y={y + r * 0.36} textAnchor="middle" fill={moved ? PROTON_INK : a.text} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * (el === 'Cl' ? 0.82 : 0.98)}}>{el}</text>
		</g>
	);
};

export type Sp = {atoms: {el: E; u: number; v: number}[]; bonds: [number, number][]; mob?: number; slot?: {u: number; v: number; to: number}; q: number; R: number};
const H2O_A = [{el: 'O' as E, u: 0, v: 0}, {el: 'H' as E, u: -0.8, v: 0.6}, {el: 'H' as E, u: 0.8, v: 0.6}];
const NH3_A = [{el: 'N' as E, u: 0, v: 0}, {el: 'H' as E, u: -0.92, v: 0.42}, {el: 'H' as E, u: 0.92, v: 0.42}, {el: 'H' as E, u: 0, v: 1.0}];
const CO3_A = [{el: 'C' as E, u: 0, v: 0}, {el: 'O' as E, u: 0, v: -1.12}, {el: 'O' as E, u: -0.98, v: 0.58}, {el: 'O' as E, u: 0.98, v: 0.58}];
const PO4_A = [{el: 'P' as E, u: 0, v: 0}, {el: 'O' as E, u: 0, v: -1.18}, {el: 'O' as E, u: -1.14, v: 0.22}, {el: 'O' as E, u: 1.14, v: 0.22}, {el: 'O' as E, u: 0, v: 1.2}];
const PO4_B: [number, number][] = [[0, 1], [0, 2], [0, 3], [0, 4]];
const H = (u: number, v: number) => ({el: 'H' as E, u, v});
/** Species library. mob: the H that leaves when the species donates; slot: where an arriving H lands. */
export const SP = {
	H2O: {atoms: H2O_A, bonds: [[0, 1], [0, 2]], mob: 2, slot: {u: 0, v: -1.0, to: 0}, q: 0, R: 1.5} as Sp,
	H3O: {atoms: [...H2O_A, H(0, -1.0)], bonds: [[0, 1], [0, 2], [0, 3]], mob: 3, q: 1, R: 1.5} as Sp,
	OH: {atoms: [H2O_A[0], H2O_A[2]], bonds: [[0, 1]], slot: {u: -0.8, v: 0.6, to: 0}, q: -1, R: 1.3} as Sp,
	NH3: {atoms: NH3_A, bonds: [[0, 1], [0, 2], [0, 3]], slot: {u: 0, v: -1.0, to: 0}, q: 0, R: 1.55} as Sp,
	NH4: {atoms: [...NH3_A, H(0, -1.0)], bonds: [[0, 1], [0, 2], [0, 3], [0, 4]], mob: 4, q: 1, R: 1.55} as Sp,
	HCO3: {atoms: [...CO3_A, H(0.8, -1.75)], bonds: [[0, 1], [0, 2], [0, 3], [1, 4]], mob: 4, slot: {u: -1.75, v: 1.0, to: 2}, q: -1, R: 1.85} as Sp,
	H2CO3: {atoms: [...CO3_A, H(0.8, -1.75), H(-1.75, 1.0)], bonds: [[0, 1], [0, 2], [0, 3], [1, 4], [2, 5]], mob: 4, q: 0, R: 1.85} as Sp,
	CO3: {atoms: CO3_A, bonds: [[0, 1], [0, 2], [0, 3]], slot: {u: 0.8, v: -1.75, to: 1}, q: -2, R: 1.85} as Sp,
	H3PO4: {atoms: [...PO4_A, H(0.8, -1.85), H(-1.98, -0.3), H(1.98, -0.3)], bonds: [...PO4_B, [1, 5], [2, 6], [3, 7]], mob: 7, q: 0, R: 2.0} as Sp,
	H2PO4: {atoms: [...PO4_A, H(0.8, -1.85), H(-1.98, -0.3)], bonds: [...PO4_B, [1, 5], [2, 6]], mob: 6, slot: {u: 1.98, v: -0.3, to: 3}, q: -1, R: 2.0} as Sp,
	HPO4: {atoms: [...PO4_A, H(0.8, -1.85)], bonds: [...PO4_B, [1, 5]], mob: 5, slot: {u: -1.98, v: -0.3, to: 2}, q: -2, R: 2.0} as Sp,
	PO4: {atoms: PO4_A, bonds: PO4_B, slot: {u: 0.8, v: -1.85, to: 1}, q: -3, R: 2.0} as Sp,
	HCl: {atoms: [H(-0.62, 0), {el: 'Cl' as E, u: 0.48, v: 0}], bonds: [[0, 1]], mob: 0, q: 0, R: 1.3} as Sp,
	Cl: {atoms: [{el: 'Cl' as E, u: 0, v: 0}], bonds: [], slot: {u: -1.1, v: 0, to: 0}, q: -1, R: 1.0} as Sp,
	CO2: {atoms: [{el: 'C' as E, u: 0, v: 0}, {el: 'O' as E, u: -1.15, v: 0}, {el: 'O' as E, u: 1.15, v: 0}], bonds: [[0, 1], [0, 2]], q: 0, R: 1.7} as Sp,
};
export const BOND2 = 44;
const qText = (q: number) => (q === 0 ? '' : q === 1 ? '+' : q === -1 ? '−' : q > 0 ? `${q}+` : `${-q}−`);
const pt = (sp: Sp, x: number, y: number, s: number, u: number, v: number): [number, number] => [x + u * BOND2 * s, y + v * BOND2 * s];
export const mobPos = (sp: Sp, x: number, y: number, s = 1): [number, number] => {
	const a = sp.atoms[sp.mob ?? 0];
	return pt(sp, x, y, s, a.u, a.v);
};
export const slotPos = (sp: Sp, x: number, y: number, s = 1): [number, number] => pt(sp, x, y, s, sp.slot?.u ?? 0, sp.slot?.v ?? -1);
/** Radius (px) of a species drawing. */
export const spR = (sp: Sp, s = 1) => sp.R * BOND2 * s;

/** A species. has 0..1: its mobile H is present; got 0..1: a moved (teal) H sits in its slot; glowMob: glow on the
 *  mobile H (it is about to leave). The charge badge follows the transfer. */
export const GMol: React.FC<{x: number; y: number; sp: Sp; s?: number; o?: number; has?: number; got?: number; glowMob?: number; charge?: boolean; tealMob?: boolean}> = ({x, y, sp, s = 1, o = 1, has = 1, got = 0, glowMob = 0, charge = true, tealMob = false}) => {
	if (o <= 0.01) return null;
	const q = sp.q - (sp.mob !== undefined && has < 0.5 ? 1 : 0) + (got >= 0.5 ? 1 : 0);
	const sl = sp.slot ? pt(sp, x, y, s, sp.slot.u, sp.slot.v) : null;
	return (
		<g opacity={o}>
			{sp.bonds.map(([a, b], i) => {
				const isMob = sp.mob !== undefined && (a === sp.mob || b === sp.mob);
				const [x1, y1] = pt(sp, x, y, s, sp.atoms[a].u, sp.atoms[a].v), [x2, y2] = pt(sp, x, y, s, sp.atoms[b].u, sp.atoms[b].v);
				return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth={6 * s} strokeLinecap="round" opacity={isMob ? has : 1} />;
			})}
			{sl && sp.slot && got > 0.01 ? (() => {
				const [tx, ty] = pt(sp, x, y, s, sp.atoms[sp.slot.to].u, sp.atoms[sp.slot.to].v);
				return <line x1={tx} y1={ty} x2={sl[0]} y2={sl[1]} stroke={PROTON_INK} strokeWidth={6 * s} strokeLinecap="round" opacity={got} />;
			})() : null}
			{sp.atoms.map((a, i) => {
				const isMob = i === sp.mob;
				if (isMob && has <= 0.01) return null;
				const [ax, ay] = pt(sp, x, y, s, a.u, a.v);
				return <PAtom key={i} x={ax} y={ay} el={a.el} s={s} o={isMob ? has : 1} glow={isMob ? glowMob : 0} moved={isMob && tealMob} />;
			})}
			{sl && got > 0.01 ? <PAtom x={sl[0]} y={sl[1]} el="H" s={s} moved o={got} /> : null}
			{charge && q !== 0 ? <text x={x + sp.R * BOND2 * s * 0.78} y={y - sp.R * BOND2 * s * 0.62} textAnchor="middle" fill={q > 0 ? ACID_INK : BASE_INK} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 34 * s}}>{qText(q)}</text> : null}
		</g>
	);
};

/** Donor at a, acceptor at b. events: frames at which the proton moves (even: donor to acceptor; odd: back).
 *  Labels under each species change when the proton lands. */
export type SwapLabels = {a: [string, string]; b: [string, string]; size?: number; dy?: number; at?: number};
export const ProtonSwap: React.FC<{a: [number, number]; b: [number, number]; da: Sp; ac: Sp; events: number[]; s?: number; o?: number; dur?: number; bow?: number; labels?: SwapLabels; glow?: number; tealMob?: boolean}> = ({a, b, da, ac, events, s = 1, o = 1, dur = 28, bow = -80, labels, glow, tealMob = false}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	let n = 0, cur = -1;
	events.forEach((t, i) => { if (f >= t + dur) n = i + 1; else if (f >= t) cur = i; });
	const fly = cur >= 0;
	const fwd = cur % 2 === 0;
	const state = n % 2; // 0: before, 1: after (proton on acceptor)
	const has = fly ? 0 : state === 0 ? 1 : 0;
	const got = fly ? 0 : state === 1 ? 1 : 0;
	const from = fwd ? mobPos(da, a[0], a[1], s) : slotPos(ac, b[0], b[1], s);
	const to = fwd ? slotPos(ac, b[0], b[1], s) : mobPos(da, a[0], a[1], s);
	const p = fly ? smooth(clamp01((f - events[cur]) / dur)) : 0;
	const mx = (from[0] + to[0]) / 2, my = (from[1] + to[1]) / 2 + (fwd ? bow : -bow);
	const px = (1 - p) * (1 - p) * from[0] + 2 * (1 - p) * p * mx + p * p * to[0], py = (1 - p) * (1 - p) * from[1] + 2 * (1 - p) * p * my + p * p * to[1];
	const g = glow === undefined ? 0 : Math.max(0, Math.sin(clamp01((f - glow) / 30) * Math.PI));
	// label switch: the last landing time
	const lastLand = n > 0 ? events[n - 1] + dur : -1e9;
	const sw = n > 0 ? prog(f, lastLand, 10) : 0;
	const lab = (side: 'a' | 'b') => {
		if (!labels) return null;
		const [t0, t1] = labels[side];
		const sp = side === 'a' ? da : ac, [x, y] = side === 'a' ? a : b;
		const size = labels.size ?? 40, ly = y + spR(sp, s) + (labels.dy ?? size + 8);
		const o0 = state === 0 ? (n === 0 ? 1 : sw) : 1 - sw;
		const o1 = state === 1 ? sw : n === 0 ? 0 : 1 - sw;
		return (
			<g>
				{o0 > 0.01 ? <Sx x={x} y={ly} text={t0} size={size} color={INK} anchor="middle" weight={800} at={labels.at ?? -1000} opacity={o0} /> : null}
				{o1 > 0.01 ? <Sx x={x} y={ly} text={t1} size={size} color={INK} anchor="middle" weight={800} at={-1000} opacity={o1} /> : null}
			</g>
		);
	};
	return (
		<g opacity={o}>
			<GMol x={a[0]} y={a[1]} sp={da} s={s} has={has} glowMob={g} tealMob={tealMob} />
			<GMol x={b[0]} y={b[1]} sp={ac} s={s} got={got} />
			{fly ? (
				<g>
					<path d={`M${from[0]},${from[1]} Q${mx},${my} ${to[0]},${to[1]}`} fill="none" stroke={PROTON} strokeWidth={4} strokeDasharray="8 8" opacity={0.6 * Math.sin(p * Math.PI)} />
					<Proton x={px} y={py} s={s * 1.05} />
				</g>
			) : null}
			{lab('a')}{lab('b')}
		</g>
	);
};

/** A species whose mobile H flies off and fades (a proton leaving into the solution). */
export const LoseH: React.FC<{x: number; y: number; sp: Sp; s?: number; at: number; o?: number; dx?: number; dy?: number}> = ({x, y, sp, s = 1, at, o = 1, dx = 70, dy = -90}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const p = smooth(prog(f, at, 30));
	const [hx, hy] = mobPos(sp, x, y, s);
	const fo = 1 - prog(f, at + 26, 14);
	return (
		<g opacity={o}>
			<GMol x={x} y={y} sp={sp} s={s} has={f < at ? 1 : 0} />
			{f >= at && fo > 0.01 ? <Proton x={hx + dx * p} y={hy + dy * p} s={s * 0.95} o={fo} /> : null}
		</g>
	);
};

/** Countdown for thinking holds (kit style), kept on screen at 0 after the hold ends instead of fading. */
export const CountdownKeep: React.FC<{start: number; end: number; x: number; y: number; r?: number}> = ({start, end, x, y, r = 64}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < start - 10) return null;
	const appear = prog(frame, start - 10, 12);
	const left = Math.max(0, 1 - (frame - start) / (end - start));
	const secs = Math.ceil(((end - start) * left) / fps);
	const c = 2 * Math.PI * r;
	const done = frame >= end;
	return (
		<g opacity={appear} transform={`translate(${x},${y}) scale(${0.85 + 0.15 * appear})`}>
			<circle r={r + 16} fill="#fffdf8" stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
			<circle r={r} fill="none" stroke={PAPER_DEEP} strokeWidth={14} />
			<circle r={r} fill="none" stroke={AMBER} strokeWidth={14} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - left)} transform="rotate(-90)" />
			<text y={16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}} fill={INK}>{done ? '0' : secs}</text>
			<text y={r + 62} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>{done ? 'check your answer' : 'think it through'}</text>
		</g>
	);
};
export const PauseHoldKeep: React.FC<{h: {startFrame: number; endFrame: number}; at: number; x: number; y: number; cx: number; cy: number}> = ({h, at, x, y, cx, cy}) => (
	<>
		<Sx x={x} y={y} text="Pause here to answer." size={56} color={AMBER_INK} hand at={at} />
		<CountdownKeep start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={64} />
	</>
);
