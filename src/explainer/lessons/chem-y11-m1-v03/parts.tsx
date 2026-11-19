// Drawing parts for Y11 Chem M1 V03. Reuses the M1 V01 and V02 parts (glyphs, particle views, lattices, text, chips,
// readouts, plates). New here: a faceted sand grain, the goal checklist, a pour stream with drips, a liquid fill clipped
// to the painted flask, the dashed inset card (replaces the design's ghost previews), a vertical saturation meter, coded
// steam wisps, the pause ring that stays full from "Pause here to answer." and the filter-rig geometry helper.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown} from '../../kit';
import {AMB_INK, GREEN, INK, P, Sx, TickMark, Write, plateMap, prog, simF, slotXY, smooth, vis} from '../chem-y11-m1-v02/parts';
import {Glyph as Glyph1} from '../chem-y11-m1-v01/parts';
import type {BoxRun, GKind} from '../chem-y11-m1-v01/parts';
import {FUN_E} from './common';
import type {PDef} from './common';

export * from '../chem-y11-m1-v02/parts';

// ---------- ions with drawn signs (the shared glyph writes its sign as text far below 18 px) ----------
/** Na+ (violet) or Cl- (green) with the sign drawn as strokes. */
export const Ion: React.FC<{k: 'Na' | 'Cl'; x: number; y: number; u: number; o?: number}> = ({k, x, y, u, o = 1}) => {
	const r = (k === 'Na' ? 0.85 : 1.2) * u, s = r * 0.5;
	return (
		<g opacity={o}>
			<circle cx={x} cy={y} r={r} fill={k === 'Na' ? P.Na : P.Cl} stroke="rgba(35,28,20,0.7)" strokeWidth={Math.max(1.6, r * 0.13)} />
			<line x1={x - s} x2={x + s} y1={y} y2={y} stroke="#fff" strokeWidth={Math.max(2, r * 0.22)} strokeLinecap="round" />
			{k === 'Na' ? <line x1={x} x2={x} y1={y - s} y2={y + s} stroke="#fff" strokeWidth={Math.max(2, r * 0.22)} strokeLinecap="round" /> : null}
		</g>
	);
};
/** Glyph with drawn ion signs (overrides the shared one for this lesson). */
export const Glyph: React.FC<{k: GKind; x: number; y: number; u: number; rot?: number; o?: number}> = props => (props.k === 'Na' || props.k === 'Cl' ? <Ion k={props.k} x={props.x} y={props.y} u={props.u} o={props.o} /> : <Glyph1 {...props} />);
/** Particles of a run, drawn with the glyph above. */
export const Particles: React.FC<{run: BoxRun; cx: number; cy: number; kinds: Record<string, GKind>; u: number; f0?: number; rate?: number; spin?: number; dim?: (id: string, slot: number) => number}> = ({run, cx, cy, kinds, u, f0 = 0, rate = 1, spin = 0.6, dim}) => {
	const f = useCurrentFrame();
	const sf = simF(run, (f + f0) * rate);
	const out: React.ReactNode[] = [];
	for (let i = 0; i < run.slots; i++) {
		const s = run.sp[sf * run.slots + i];
		if (s < 0) continue;
		const id = run.config.species[s].id;
		const [x, y] = slotXY(run, i, sf, cx, cy);
		const o = dim ? dim(id, i) : 1;
		if (o <= 0.01) continue;
		out.push(<Glyph key={i} k={kinds[id]} x={x} y={y} u={u} rot={(i * 47 + sf * spin) % 360} o={o} />);
	}
	return <>{out}</>;
};

// ---------- colour roles (design colour key) ----------
export const SAND_C = '#cf9f55'; // grain fill
export const SAND_INK = '#7f5212'; // golden-brown text and strokes for "undissolved"
export const VIOL = '#6b4fa0'; // "dissolved" words
export const TEAL = '#13767a'; // impurity particles
export const WATER_C = 'rgba(150,190,225,0.55)';

/** A faceted sand grain (a clump of particles), radius r. */
export const Grain: React.FC<{x: number; y: number; r: number; rot?: number; o?: number}> = ({x, y, r, rot = 0, o = 1}) => {
	const pts = [0, 1, 2, 3, 4, 5, 6].map(i => { const a = (i / 7) * Math.PI * 2; const k = 0.82 + 0.18 * Math.abs(Math.sin(i * 2.7)); return `${(Math.cos(a) * r * k).toFixed(1)},${(Math.sin(a) * r * k).toFixed(1)}`; }).join(' ');
	return (
		<g transform={`translate(${x},${y}) rotate(${rot})`} opacity={o}>
			<polygon points={pts} fill={SAND_C} stroke="#6d4a1a" strokeWidth={Math.max(2, r * 0.07)} strokeLinejoin="round" />
			<path d={`M${-r * 0.5},${-r * 0.2} L${r * 0.1},${-r * 0.55} M${-r * 0.2},${r * 0.35} L${r * 0.45},${r * 0.05}`} stroke="#9a7230" strokeWidth={Math.max(1.5, r * 0.05)} />
		</g>
	);
};

/** The goal checklist at the top right: "dry sand" and "dry salt", amber until ticked, then green with a tick. */
export const Checklist: React.FC<{sandAt?: number; saltAt?: number; o?: number}> = ({sandAt = 1e9, saltAt = 1e9, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const chip = (x: number, t: string, at: number) => {
		const done = prog(f, at, 12);
		const col = done > 0.5 ? GREEN : '#c08a2a';
		return (
			<g key={t}>
				<rect x={x} y={34} width={186} height={54} rx={27} fill="#fffdf8" stroke={col} strokeWidth={4} />
				<Sx x={x + 22} y={72} text={t} size={32} color={done > 0.5 ? '#23704a' : AMB_INK} weight={800} at={-1000} />
				{f >= at ? <TickMark x={x + 168} y={60} at={at} s={0.7} /> : null}
			</g>
		);
	};
	return <g opacity={o}>{chip(1432, 'dry sand', sandAt)}{chip(1636, 'dry salt', saltAt)}</g>;
};

/** Pour stream between points (a curved coded stream of liquid), visible while on. */
export const Stream: React.FC<{d: string; on: number; color?: string; width?: number}> = ({d, on, color = 'rgba(120,170,215,0.85)', width = 7}) => {
	const f = useCurrentFrame();
	if (on <= 0.01) return null;
	return (
		<g opacity={on}>
			<path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" />
			<path d={d} fill="none" stroke="#ffffff" strokeWidth={width * 0.35} strokeLinecap="round" strokeDasharray="10 22" strokeDashoffset={-f * 4} opacity={0.9} />
		</g>
	);
};
/** Drops falling from (x, y0) to y1 while on. */
export const Drips: React.FC<{x: number; y0: number; y1: number; on: number; every?: number}> = ({x, y0, y1, on, every = 14}) => {
	const f = useCurrentFrame();
	if (on <= 0.01) return null;
	const out: React.ReactNode[] = [];
	for (let k = 0; k < 6; k++) {
		const a = ((f + k * every) % (every * 6)) / (every * 6);
		const y = y0 + a * a * (y1 - y0);
		out.push(<ellipse key={k} cx={x} cy={y} rx={5} ry={8} fill="rgba(110,160,210,0.9)" stroke="#4a7aa5" strokeWidth={1.5} />);
	}
	return <g opacity={on}>{out}</g>;
};

/** Geometry of the filter rig drawn at (x, y) with height h (native plate coordinates to the screen). */
export const rigGeo = (x: number, y: number, h: number) => {
	const m = plateMap(FUN_E, x, y, h);
	return {...m, h, rim: [m.X(522), m.Y(150)] as [number, number], tip: [m.X(522), m.Y(520)] as [number, number], stem: [m.X(522), m.Y(880)] as [number, number], liq: m.Y(1100), bot: m.Y(1392)};
};
/** Coded filtrate in the flask of the rig, from the bottom up to native level `lvl` (1392 empty, 1100 full). */
export const FlaskFill: React.FC<{x: number; y: number; h: number; lvl: number; o?: number; id: string}> = ({x, y, h, lvl, o = 1, id}) => {
	const g = rigGeo(x, y, h);
	if (o <= 0.01 || lvl >= 1390) return null;
	const poly: [number, number][] = [[470, 820], [574, 820], [800, 1280], [792, 1360], [700, 1394], [345, 1394], [252, 1360], [244, 1280]];
	const pts = poly.map(([u, v]) => `${g.X(u)},${g.Y(v)}`).join(' ');
	return (
		<g opacity={o}>
			<defs><clipPath id={id}><polygon points={pts} /></clipPath></defs>
			<g clipPath={`url(#${id})`}>
				<rect x={g.X(200)} y={g.Y(lvl)} width={g.X(850) - g.X(200)} height={g.Y(1400) - g.Y(lvl)} fill="rgba(170,205,235,0.55)" />
				<line x1={g.X(200)} x2={g.X(850)} y1={g.Y(lvl)} y2={g.Y(lvl)} stroke="#6f9cc4" strokeWidth={3} />
			</g>
		</g>
	);
};

/** Solid inset card with a dashed border and a dark-ink title (replaces the design's ghost previews). */
export const Inset: React.FC<{x: number; y: number; w: number; h: number; title: string; at: number; out?: number; children?: React.ReactNode; stroke?: string}> = ({x, y, w, h, title, at, out, children, stroke = INK}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out, 12);
	if (v <= 0.01) return null;
	const s = 0.94 + 0.06 * smooth(prog(f, at, 14));
	return (
		<g opacity={v} transform={`translate(${x + w / 2},${y + h / 2}) scale(${s}) translate(${-(x + w / 2)},${-(y + h / 2)})`}>
			<rect x={x} y={y} width={w} height={h} rx={18} fill="#fffdf8" stroke={stroke} strokeWidth={4} strokeDasharray="14 9" />
			<Sx x={x + 22} y={y + 44} text={title} size={34} color={INK} weight={800} at={-1000} />
			{children}
		</g>
	);
};

/** Vertical meter (0 to 1) with a label; reads "saturated" at the top line. */
export const Meter: React.FC<{x: number; y: number; h: number; v: number; at?: number; color?: string; label?: string}> = ({x, y, h, v, at = -1000, color = '#d18f1f', label = 'saturated'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const fill = Math.max(0, Math.min(1, v)) * (h - 8);
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={56} height={h} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<rect x={x + 4} y={y + h - 4 - fill} width={48} height={fill} rx={10} fill={color} />
			<line x1={x - 12} x2={x + 68} y1={y + 4} y2={y + 4} stroke={INK} strokeWidth={4} strokeDasharray="8 6" />
			<Sx x={x + 80} y={y + 16} text={label} size={34} color={INK} weight={800} at={-1000} />
		</g>
	);
};

/** Coded steam wisps rising from a band (x0..x1 at y) and drifting up off the frame. */
export const Wisps: React.FC<{x0: number; x1: number; y: number; n?: number; on?: number; top?: number}> = ({x0, x1, y, n = 6, on = 1, top = -40}) => {
	const f = useCurrentFrame();
	if (on <= 0.01) return null;
	const span = y - top;
	return (
		<g opacity={on}>
			{Array.from({length: n}, (_, i) => {
				const ph = ((f * 1.4 + i * (span / n)) % span) / span;
				const cx = x0 + ((i * 0.37 + 0.13) % 1) * (x1 - x0) + Math.sin(ph * 6 + i) * 22;
				const cy = y - ph * span;
				const a = ph < 0.15 ? ph / 0.15 : 1 - Math.max(0, (ph - 0.75) / 0.25);
				return <path key={i} d={`M${cx},${cy + 40} q-18,-20 0,-40 q18,-20 0,-40`} fill="none" stroke="#ffffff" strokeWidth={9} strokeLinecap="round" opacity={a} style={{filter: 'drop-shadow(0 0 1.5px rgba(70,90,120,0.9))'}} />;
			})}
		</g>
	);
};

/** "Pause here to answer." and the countdown ring, full from the pause cue until the timed count starts. */
export const PauseRing: React.FC<{h: {startFrame: number; endFrame: number}; at: number; x: number; y: number; cx: number; cy: number; whole?: boolean}> = ({h, at, x, y, cx, cy, whole = false}) => (
	<>
		{whole ? <Sx x={x} y={y} text="Pause here to answer." size={56} color={AMB_INK} hand weight={700} at={at} /> : <Write x={x} y={y} text="Pause here to answer." at={at} size={56} color={AMB_INK} />}
		<Countdown start={h.startFrame} end={h.endFrame} x={cx} y={cy} r={64} ringFrom={at} />
	</>
);

/** A plate's on-screen width for a given height. */
export const pw = (p: PDef, h: number) => plateMap(p, 0, 0, h).w;
/** A plate's on-screen height for a given width. */
export const ph = (p: PDef, w: number) => (w / p.box[2]) * p.box[3];
