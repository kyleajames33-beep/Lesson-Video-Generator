// Drawing parts for the simulation engines: the particle box, its count graph,
// the field-motion stage and a plain readout board. Everything reads the stored
// run or path, so the picture, the graph and the numbers always agree.
// Sizes and colours come from src/explainer/shared/tokens.ts.
import React, {useMemo} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_HAND} from '../kit';
import {CARD, CARD_BORDER, CARD_SHADOW, INK, INK_SOFT, TONES, TRACK, TYPE, Tone, ToneName, rgba, tone} from '../shared/tokens';
import {BoxRun, boxFrame} from './particle-box';
import {MotionPath, MotionState, boundsOf, stateAt, trailTo} from './field-motion';

const clamp01 = (u: number) => Math.min(1, Math.max(0, u));
const fade = (f: number, at?: number, out?: number, dur = 12) => (at === undefined ? 1 : clamp01((f - at) / dur)) * (out === undefined ? 1 : 1 - clamp01((f - out) / dur));
/** Fixed decimals with a true minus sign and no "-0.0". */
export const simNum = (v: number, digits = 1) => { const r = Math.abs(v) < 0.5 * 10 ** -digits ? 0 : v; return (r < 0 ? '−' : '') + Math.abs(r).toFixed(digits); };

// ---------------------------------------------------------------- particle box
export type ParticleLook = {
	tone: ToneName | Tone;
	/** Draw the particle as two joined atoms in these tones (a product made from two reactants). */
	pair?: readonly [ToneName | Tone, ToneName | Tone];
};
export type BoxClock = {
	/** Scene frame at which the simulation starts (it shows its first frame before then). */
	at?: number;
	/** Simulation frames per scene frame (default 1). Use 0.5 for slow motion. */
	rate?: number;
};
/** Simulation frame for the current scene frame. Use the same clock for the box, the graph and the readouts. */
export const useBoxFrame = (run: BoxRun, clock: BoxClock = {}) => boxFrame(run, (useCurrentFrame() - (clock.at ?? 0)) * (clock.rate ?? 1));

/**
 * The particle box. `x`, `y` place its top-left corner in frame pixels; `scale` sizes it
 * (the box is run.config.w x run.config.h simulation pixels). Give every species a look.
 */
export const ParticleBoxView: React.FC<{
	run: BoxRun; x: number; y: number; scale?: number; clock?: BoxClock;
	looks: Record<string, ParticleLook>;
	/** Ring flash where a reaction happens (default true). `failed` also marks collisions without enough energy. */
	flashes?: boolean; failed?: boolean;
	/** Slot number of one particle to follow with a trail (find one with run.sp). */
	follow?: number;
	/** Tint the box edge by temperature: cool blue below 1, warm above. */
	heat?: boolean;
	opacity?: number;
}> = ({run, x, y, scale = 1, clock, looks, flashes = true, failed = false, follow, heat = false, opacity = 1}) => {
	const sf = useBoxFrame(run, clock);
	const {w, h, species, membrane} = run.config;
	const eventStart = useMemo(() => {
		// first event index at or after each frame, so a frame only looks at its own few events
		const first = new Int32Array(run.frames + 1).fill(run.events.length);
		for (let i = run.events.length - 1; i >= 0; i--) first[run.events[i].f] = i;
		for (let f = run.frames - 1; f >= 0; f--) if (first[f] > first[f + 1]) first[f] = first[f + 1];
		return first;
	}, [run]);
	const base = sf * run.slots, wall = run.wallX[sf], T = run.temperature[sf];
	const hasPiston = typeof run.config.volume !== 'undefined' && typeof run.config.volume !== 'number';
	const edge = !heat ? INK : T >= 1 ? mix(INK, TONES.warm.stroke, clamp01((T - 1) / 1)) : mix(INK, TONES.cool.stroke, clamp01((1 - T) / 0.6));
	const lookOf = (s: number) => looks[species[s].id] ?? {tone: 'grey' as ToneName};
	const dots: React.ReactNode[] = [];
	for (let i = 0; i < run.slots; i++) {
		const s = run.sp[base + i];
		if (s < 0) continue;
		const px = run.x[base + i], py = run.y[base + i], r = species[s].r ?? 12, look = lookOf(s);
		if (look.pair) {
			const a = i * 2.4 + sf * 0.045, dx = Math.cos(a) * r * 0.42, dy = Math.sin(a) * r * 0.42, t0 = tone(look.pair[0]), t1 = tone(look.pair[1]);
			dots.push(<g key={i}><circle cx={px - dx} cy={py - dy} r={r * 0.68} fill={t0.stroke} stroke={t0.ink} strokeWidth={1.6} /><circle cx={px + dx} cy={py + dy} r={r * 0.68} fill={t1.stroke} stroke={t1.ink} strokeWidth={1.6} /></g>);
		} else {
			const t = tone(look.tone);
			dots.push(<circle key={i} cx={px} cy={py} r={r} fill={t.stroke} stroke={t.ink} strokeWidth={1.6} />);
		}
	}
	const rings: React.ReactNode[] = [];
	if (flashes) for (let f0 = Math.max(0, sf - 14), i = eventStart[f0]; i < run.events.length && run.events[i].f <= sf; i++) {
		const e = run.events[i], age = (sf - e.f) / 14;
		if (e.ok) rings.push(<circle key={i} cx={e.x} cy={e.y} r={12 + age * 26} fill="none" stroke={TONES.amber.stroke} strokeWidth={5 * (1 - age)} opacity={1 - age} />);
		else if (failed) rings.push(<circle key={i} cx={e.x} cy={e.y} r={8 + age * 10} fill="none" stroke={INK_SOFT} strokeWidth={2.5} opacity={0.7 * (1 - age)} strokeDasharray="4 5" />);
	}
	let trail: React.ReactNode = null;
	if (follow !== undefined) {
		const pts: string[] = [];
		for (let f = Math.max(0, sf - 45); f <= sf; f++) if (run.sp[f * run.slots + follow] >= 0) pts.push(`${run.x[f * run.slots + follow].toFixed(1)},${run.y[f * run.slots + follow].toFixed(1)}`);
		if (pts.length > 1) trail = <polyline points={pts.join(' ')} fill="none" stroke={TONES.amber.stroke} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={0.75} />;
	}
	return (
		<svg width={(w + 70) * scale} height={h * scale} viewBox={`0 0 ${w + 70} ${h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<rect x={0} y={0} width={wall} height={h} rx={10} fill={CARD} stroke={edge} strokeWidth={5} />
			{membrane ? <line x1={membrane.x * w} x2={membrane.x * w} y1={6} y2={h - 6} stroke={INK_SOFT} strokeWidth={6} strokeDasharray="16 12" strokeLinecap="round" /> : null}
			{trail}
			{dots}
			{rings}
			{hasPiston ? <g><rect x={wall - 4} y={-6} width={18} height={h + 12} rx={6} fill={INK_SOFT} stroke={INK} strokeWidth={3} /><rect x={wall + 14} y={h / 2 - 9} width={w + 50 - wall - 14} height={18} rx={6} fill={TRACK} stroke={INK} strokeWidth={3} /><rect x={w + 44} y={h / 2 - 36} width={18} height={72} rx={8} fill={INK_SOFT} stroke={INK} strokeWidth={3} /></g> : null}
		</svg>
	);
};
const mix = (a: string, b: string, u: number) => { const p = parseInt(a.slice(1), 16), q = parseInt(b.slice(1), 16); const ch = (s: number) => Math.round(((p >> s) & 255) + (((q >> s) & 255) - ((p >> s) & 255)) * u); return `rgb(${ch(16)},${ch(8)},${ch(0)})`; };

/**
 * Number-against-time graph read from the same run, drawing itself up to the current
 * simulation frame. `lines` picks species; `marks` adds dashed event lines with a hand label.
 */
export const BoxCountGraph: React.FC<{
	run: BoxRun; x: number; y: number; w: number; h: number; clock?: BoxClock;
	lines: readonly {species: string; tone: ToneName | Tone; label: string}[];
	marks?: readonly {f: number; label: string}[];
	yMax?: number; smooth?: number; xLabel?: string; yLabel?: string; opacity?: number;
}> = ({run, x, y, w, h, clock, lines, marks = [], yMax, smooth = 12, xLabel = 'time', yLabel = 'number of particles', opacity = 1}) => {
	const sf = useBoxFrame(run, clock);
	const series = useMemo(() => lines.map(l => {
		const raw = run.counts[run.config.species.findIndex(s => s.id === l.species)];
		const out = new Float32Array(run.frames);
		let sum = 0;
		for (let f = 0; f < run.frames; f++) { sum += raw[f]; if (f >= smooth) sum -= raw[f - smooth]; out[f] = sum / Math.min(f + 1, smooth); }
		return out;
	}), [run, lines, smooth]);
	const top = yMax ?? Math.max(1, ...series.map(s => s.reduce((m, v) => Math.max(m, v), 0))) * 1.12;
	const L = 70, B = 56, pw = w - L - 20, ph = h - B - 16;
	const X = (f: number) => L + (f / (run.frames - 1)) * pw, Y = (v: number) => 16 + ph - (v / top) * ph;
	const step = Math.max(1, Math.floor(run.frames / 400));
	const ends = lines.map((l, i) => ({i, y: Y(series[i][sf])})).sort((a, b) => a.y - b.y);
	for (let k = 1; k < ends.length; k++) if (ends[k].y - ends[k - 1].y < 40) ends[k].y = ends[k - 1].y + 40; // keep end labels apart
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, overflow: 'visible', opacity}}>
			<rect x={L} y={16} width={pw} height={ph} fill={CARD} opacity={0.75} />
			{marks.filter(m => m.f <= sf).map(m => <g key={m.f}><line x1={X(m.f)} x2={X(m.f)} y1={16} y2={16 + ph} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 9" /><text x={X(m.f) + 10} y={46} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall}} fill={INK_SOFT}>{m.label}</text></g>)}
			{lines.map((l, i) => {
				let d = '';
				for (let f = 0; f <= sf; f += step) d += `${f ? 'L' : 'M'}${X(f).toFixed(1)},${Y(series[i][f]).toFixed(1)} `;
				d += `L${X(sf).toFixed(1)},${Y(series[i][sf]).toFixed(1)}`;
				const t = tone(l.tone), end = ends.find(e => e.i === i)!;
				const right = X(sf) > L + pw * 0.72;
				return <g key={l.species}><path d={d} fill="none" stroke={t.stroke} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /><circle cx={X(sf)} cy={Y(series[i][sf])} r={9} fill={t.stroke} stroke={CARD} strokeWidth={3} /><text x={X(sf) + (right ? -16 : 16)} y={end.y + 11} textAnchor={right ? 'end' : 'start'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall}} fill={t.ink} stroke={CARD} strokeWidth={7} paintOrder="stroke">{l.label}</text></g>;
			})}
			<path d={`M${L},16 V${16 + ph} H${L + pw}`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			<text x={L + pw / 2} y={h - 8} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.label}} fill={INK}>{xLabel}</text>
			<text transform={`translate(30,${16 + ph / 2}) rotate(-90)`} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.label}} fill={INK}>{yLabel}</text>
		</svg>
	);
};

// -------------------------------------------------------------------- readouts
export type SimReadoutRow = {label: React.ReactNode; value: number | string; digits?: number; unit?: React.ReactNode; tone?: ToneName | Tone; at?: number};
/** Live readout board: 52 px numbers that tick in place, 30 px labels. Pass values read from the run for this frame. */
export const SimReadout: React.FC<{x: number; y: number; w?: number; rows: readonly SimReadoutRow[]; title?: string; at?: number; out?: number}> = ({x, y, w = 460, rows, title, at, out}) => {
	const f = useCurrentFrame();
	const o = fade(f, at, out);
	if (o <= 0.001) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, boxSizing: 'border-box', opacity: o, background: CARD, borderRadius: 20, padding: '14px 26px 12px', boxShadow: CARD_SHADOW, border: `2.5px solid ${CARD_BORDER}`}}>
			{title ? <div style={{fontFamily: FONT_DISPLAY, fontSize: TYPE.label, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', color: INK_SOFT, marginBottom: 4}}>{title}</div> : null}
			{rows.map((r, i) => {
				const c = r.tone ? tone(r.tone).ink : INK;
				return (
					<div key={i} style={{opacity: fade(f, r.at), borderTop: i ? `2px solid ${TRACK}` : undefined, padding: '7px 0 5px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16}}>
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: TYPE.support, color: c}}>{r.label}</span>
						<span style={{display: 'flex', alignItems: 'baseline', gap: 10, whiteSpace: 'pre'}}>
							<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: TYPE.working, color: c, fontVariantNumeric: 'tabular-nums', letterSpacing: -0.5}}>{typeof r.value === 'number' ? simNum(r.value, r.digits ?? 1) : r.value}</span>
							{r.unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: TYPE.label, color: INK_SOFT}}>{r.unit}</span> : null}
						</span>
					</div>
				);
			})}
		</div>
	);
};

// ---------------------------------------------------------------- field motion
export type MotionClock = {
	/** Scene frame at which the motion starts. */
	at?: number;
	/** Scene seconds the whole path takes to play (default 6). */
	seconds?: number;
	/** Play again from the start every time it finishes, after a pause of `rest` seconds (default: play once and hold). */
	loop?: boolean; rest?: number;
};
/** Time along the path (in the path's own seconds) for the current scene frame. */
export const useMotionTime = (path: MotionPath, clock: MotionClock = {}) => {
	const f = useCurrentFrame();
	const {fps} = useVideoConfig();
	const span = (clock.seconds ?? 6) * fps, local = f - (clock.at ?? 0);
	if (local <= 0) return 0;
	if (!clock.loop) return path.duration * clamp01(local / span);
	const cycle = span + (clock.rest ?? 0.8) * fps;
	return path.duration * clamp01((local % cycle) / span);
};
export type MotionStage = {x: number; y: number; w: number; h: number; world?: {x0: number; x1: number; y0: number; y1: number}; pad?: number};
/** World-to-frame mapping with equal scale on both axes (so circles stay circles) and y pointing up. */
export const motionScale = (path: MotionPath, stage: MotionStage) => {
	const b = stage.world ?? boundsOf(path), pad = stage.pad ?? 40;
	const k = Math.min((stage.w - 2 * pad) / Math.max(1e-12, b.x1 - b.x0), (stage.h - 2 * pad) / Math.max(1e-12, b.y1 - b.y0));
	const ox = stage.x + (stage.w - (b.x1 - b.x0) * k) / 2, oy = stage.y + (stage.h + (b.y1 - b.y0) * k) / 2;
	return {k, sx: (wx: number) => ox + (wx - b.x0) * k, sy: (wy: number) => oy - (wy - b.y0) * k};
};
export type VectorSpec = {
	tone: ToneName | Tone;
	/** Frame pixels per unit of the quantity (per m/s for velocity, per m/s squared for acceleration). */
	scale: number;
	label?: string;
	/** Also draw the horizontal and vertical components as dashed arrows. */
	components?: boolean;
	at?: number; out?: number;
};
const Arrow: React.FC<{x: number; y: number; dx: number; dy: number; color: string; width?: number; dash?: string; label?: string; labelColor?: string}> = ({x, y, dx, dy, color, width = 6, dash, label, labelColor}) => {
	const len = Math.hypot(dx, dy);
	if (len < 6) return null;
	const ux = dx / len, uy = dy / len, hx = x + dx, hy = y + dy, head = Math.min(22, len * 0.45);
	return (
		<g>
			<line x1={x} y1={y} x2={hx - ux * head * 0.6} y2={hy - uy * head * 0.6} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash} />
			<path d={`M${hx},${hy} L${hx - ux * head - uy * head * 0.5},${hy - uy * head + ux * head * 0.5} L${hx - ux * head + uy * head * 0.5},${hy - uy * head - ux * head * 0.5} Z`} fill={color} />
			{label ? <text x={hx + ux * 16 + (ux >= 0 ? 0 : -4)} y={hy + uy * 16 + 12} textAnchor={ux >= -0.3 ? 'start' : 'end'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.hand}} fill={labelColor ?? color} stroke={CARD} strokeWidth={7} paintOrder="stroke">{label}</text> : null}
		</g>
	);
};

/**
 * The moving body on its path: trail, strobe images at equal time steps, velocity and
 * acceleration arrows, an optional ground line, central body or field marks.
 * Put labels and readouts beside it using motionScale() and useMotionTime() with the same stage and clock.
 */
export const FieldMotionView: React.FC<{
	path: MotionPath; stage: MotionStage; clock?: MotionClock;
	body?: {r?: number; tone?: ToneName | Tone};
	trail?: {tone?: ToneName | Tone; width?: number; whole?: boolean};
	/** Strobe: this many evenly timed images of the body left behind along the path. */
	strobe?: number;
	velocity?: VectorSpec; acceleration?: VectorSpec;
	/** Ground line at this world height. */
	ground?: number;
	/** Central body drawn at the field centre (planet, nucleus). Radius in world units. */
	centre?: {r: number; tone?: ToneName | Tone; label?: string};
	/** Field marks across the stage: dots (out of the page), crosses (into the page) or arrows in a direction. */
	marks?: {kind: 'dots' | 'crosses' | 'down' | 'up' | 'left' | 'right'; tone?: ToneName | Tone; gap?: number};
	opacity?: number;
}> = ({path, stage, clock, body = {}, trail = {}, strobe = 0, velocity, acceleration, ground, centre, marks, opacity = 1}) => {
	const f = useCurrentFrame();
	const t = useMotionTime(path, clock);
	const S = useMemo(() => motionScale(path, stage), [path, stage.x, stage.y, stage.w, stage.h, stage.pad, stage.world?.x0, stage.world?.x1, stage.world?.y0, stage.world?.y1]);
	const s = stateAt(path, t);
	const bt = tone(body.tone ?? 'blue'), tt = tone(trail.tone ?? 'grey'), r = body.r ?? 18;
	const pts = trailTo(path, trail.whole ? path.duration : t).map(([wx, wy]) => `${S.sx(wx).toFixed(1)},${S.sy(wy).toFixed(1)}`).join(' ');
	const ghosts: MotionState[] = [];
	for (let i = 0; i <= strobe && strobe > 0; i++) { const gt = (path.duration * i) / strobe; if (gt <= t + 1e-9) ghosts.push(stateAt(path, gt)); }
	const mt = marks ? tone(marks.tone ?? 'grey') : null, gap = marks?.gap ?? 110;
	const markNodes: React.ReactNode[] = [];
	if (marks && mt) for (let my = stage.y + gap / 2; my < stage.y + stage.h; my += gap) for (let mx = stage.x + gap / 2; mx < stage.x + stage.w; mx += gap) {
		const key = `${mx}-${my}`;
		if (marks.kind === 'dots') markNodes.push(<g key={key}><circle cx={mx} cy={my} r={11} fill="none" stroke={mt.stroke} strokeWidth={3} /><circle cx={mx} cy={my} r={3.5} fill={mt.stroke} /></g>);
		else if (marks.kind === 'crosses') markNodes.push(<path key={key} d={`M${mx - 9},${my - 9} L${mx + 9},${my + 9} M${mx + 9},${my - 9} L${mx - 9},${my + 9}`} stroke={mt.stroke} strokeWidth={3.5} strokeLinecap="round" />);
		else { const [dx, dy] = marks.kind === 'down' ? [0, 1] : marks.kind === 'up' ? [0, -1] : marks.kind === 'left' ? [-1, 0] : [1, 0]; markNodes.push(<Arrow key={key} x={mx - dx * 26} y={my - dy * 26} dx={dx * 52} dy={dy * 52} color={rgba(mt.stroke, 0.55)} width={4} />); }
	}
	const vec = (spec: VectorSpec | undefined, vx: number, vy: number) => {
		if (!spec) return null;
		const o = fade(f, spec.at, spec.out);
		if (o <= 0.001) return null;
		const c = tone(spec.tone), x0 = S.sx(s.x), y0 = S.sy(s.y), dx = vx * spec.scale, dy = -vy * spec.scale;
		return <g opacity={o}>{spec.components ? <><Arrow x={x0} y={y0} dx={dx} dy={0} color={c.stroke} width={4} dash="9 8" /><Arrow x={x0} y={y0} dx={0} dy={dy} color={c.stroke} width={4} dash="9 8" /></> : null}<Arrow x={x0} y={y0} dx={dx} dy={dy} color={c.stroke} label={spec.label} labelColor={c.ink} /></g>;
	};
	const field = path.config.field;
	const cx = field.kind === 'central' ? field.cx ?? 0 : 0, cy = field.kind === 'central' ? field.cy ?? 0 : 0;
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', inset: 0, overflow: 'visible', opacity}}>
			{markNodes}
			{ground !== undefined ? <line x1={stage.x} x2={stage.x + stage.w} y1={S.sy(ground)} y2={S.sy(ground)} stroke={INK} strokeWidth={5} strokeLinecap="round" /> : null}
			{centre ? <g><circle cx={S.sx(cx)} cy={S.sy(cy)} r={Math.max(10, centre.r * S.k)} fill={tone(centre.tone ?? 'teal').soft} stroke={tone(centre.tone ?? 'teal').stroke} strokeWidth={5} />{centre.label ? <text x={S.sx(cx)} y={S.sy(cy) + 12} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: TYPE.handSmall}} fill={tone(centre.tone ?? 'teal').ink}>{centre.label}</text> : null}</g> : null}
			<polyline points={pts} fill="none" stroke={tt.stroke} strokeWidth={trail.width ?? 5} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={trail.whole ? '4 12' : undefined} opacity={0.9} />
			{ghosts.map((g, i) => <circle key={i} cx={S.sx(g.x)} cy={S.sy(g.y)} r={r * 0.72} fill={bt.soft} stroke={bt.stroke} strokeWidth={3} />)}
			{vec(acceleration, s.ax, s.ay)}
			{vec(velocity, s.vx, s.vy)}
			<circle cx={S.sx(s.x)} cy={S.sy(s.y)} r={r} fill={bt.stroke} stroke={bt.ink} strokeWidth={3} />
		</svg>
	);
};
