// Plate rigs for maths anchors: generic, plate-agnostic parts that move painted plates from a value.
// Every plate is drawn at its native aspect (SvgPlate scales one width; never stretched). Positions on a
// plate are given in its FILE pixels, so a delivered plate only needs its measured points.
import React, {useEffect, useId, useState} from 'react';
import {continueRender, delayRender, staticFile, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog, rng} from '../../kit';
import {CARD, CARD_SHADOW, FrameSvg, PlateSpec, SvgPlate, fmtNum, vis} from './primitives';
import {MATH_AMBER, MATH_GRADIENT, MATH_ROLES, RoleKey, roleInk} from './roles';
import {LiveReadoutBoard} from './readouts';

/** Frame-space mapping for a plate whose alpha box's top left sits at (x, y) and whose box is w wide. */
export const plateMap = (plate: PlateSpec, x: number, y: number, w: number) => {
	const s = w / (plate.box[2] - plate.box[0]);
	return {s, at: (fx: number, fy: number): [number, number] => [x + (fx - plate.box[0]) * s, y + (fy - plate.box[1]) * s]};
};

// ---------- plate decoding ----------
const decoded = new Map<string, Promise<void>>();
/**
 * Hold the frame until these plates are fully decoded. A large PNG in an SVG <image> does not delay the
 * render by itself and can be captured half drawn; every rig below calls this for the plates it draws.
 */
export const usePlatePreload = (srcs: readonly string[]) => {
	const key = srcs.join('|');
	const [handle] = useState(() => (srcs.length ? delayRender('Decoding plates: ' + key, {timeoutInMilliseconds: 60000}) : null));
	useEffect(() => {
		if (handle === null) return;
		let live = true;
		Promise.all(srcs.map(src => {
			if (!decoded.has(src)) {
				const img = new Image();
				img.src = staticFile(src);
				decoded.set(src, img.decode().catch(() => undefined));
			}
			return decoded.get(src)!;
		})).then(() => requestAnimationFrame(() => requestAnimationFrame(() => {if (live) continueRender(handle);})));
		return () => {live = false; continueRender(handle);};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key, handle]);
};
/** Drop-in component form of usePlatePreload for lesson scenes that draw plates with SvgPlate or PlateImg. */
export const PreloadPlates: React.FC<{plates: readonly PlateSpec[]}> = ({plates}) => {usePlatePreload(plates.map(p => p.src)); return null;};

// ---------- RotatingPlate ----------
export type RigSprite = {
	plate: PlateSpec;
	/** Attachment point on the rotating plate (file pixels), or polar about the pivot (radians anticlockwise, radius in file pixels). */
	attach: [number, number] | {angle: number; r: number};
	/** The sprite's own hanging point (its file pixels) placed on the attachment point. */
	hang: [number, number];
	/** Display width of the sprite's alpha box (frame pixels). */
	w: number;
	/** Keep the sprite upright (default) or let it turn with the plate. */
	upright?: boolean;
	/** Draw behind the rotating plate. */
	behind?: boolean;
	opacity?: number;
};
export type RotatingGeometry = {pivot: [number, number]; angle: number; s: number; sprites: [number, number][]; onPlate: (fx: number, fy: number) => [number, number]};

/**
 * Rotates a plate about a pivot (file pixels) placed at (cx, cy), by `angle` radians anticlockwise. The plate
 * only rotates and is never scaled out of aspect. Child sprites hang from attachment points and stay upright
 * (Ferris wheel cabins, level pedals). `unitCircle` overlays the maths: the circle, the arc travelled from
 * the start ray, the radius to the marked point and its height bar above the hub level, with live labels.
 */
export const RotatingPlate: React.FC<{
	plate: PlateSpec; pivot: [number, number]; cx: number; cy: number; w: number; angle: number;
	sprites?: readonly RigSprite[]; at?: number; out?: number; plateOpacity?: number;
	unitCircle?: {r: number; theta: number; at: number; out?: number; arc?: boolean; heightBar?: boolean; angleLabel?: (theta: number) => string; heightLabel?: (theta: number) => string; colorArc?: string; colorHeight?: string};
	overlay?: (g: RotatingGeometry) => React.ReactNode;
}> = ({plate, pivot, cx, cy, w, angle, sprites = [], at = 0, out, plateOpacity = 1, unitCircle, overlay}) => {
	usePlatePreload([plate.src, ...sprites.map(sp => sp.plate.src)]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const s = w / (plate.box[2] - plate.box[0]);
	const deg = (-angle * 180) / Math.PI; // SVG rotates clockwise
	const rot = (fx: number, fy: number): [number, number] => {
		const dx = (fx - pivot[0]) * s, dy = (fy - pivot[1]) * s;
		const c = Math.cos(-angle), sn = Math.sin(-angle);
		return [cx + dx * c - dy * sn, cy + dx * sn + dy * c];
	};
	const attachPts = sprites.map(sp => {
		if (Array.isArray(sp.attach)) return rot(sp.attach[0], sp.attach[1]);
		const a = sp.attach.angle + angle;
		return [cx + Math.cos(a) * sp.attach.r * s, cy - Math.sin(a) * sp.attach.r * s] as [number, number];
	});
	const spriteEl = (sp: RigSprite, i: number) => {
		const [ax, ay] = attachPts[i];
		const k = sp.w / (sp.plate.box[2] - sp.plate.box[0]);
		const left = ax - (sp.hang[0] - sp.plate.box[0]) * k, top = ay - (sp.hang[1] - sp.plate.box[1]) * k;
		const tr = sp.upright === false ? `rotate(${deg} ${ax} ${ay})` : undefined;
		return <g key={i} transform={tr} opacity={sp.opacity ?? 1}><SvgPlate plate={sp.plate} x={left} y={top} w={sp.w} /></g>;
	};
	const geo: RotatingGeometry = {pivot: [cx, cy], angle, s, sprites: attachPts, onPlate: rot};
	const uc = unitCircle;
	const ucO = uc ? vis(f, uc.at, uc.out) : 0;
	return (
		<>
			<FrameSvg style={{opacity: o}}>
				{sprites.map((sp, i) => (sp.behind ? spriteEl(sp, i) : null))}
				<g transform={`rotate(${deg} ${cx} ${cy})`} opacity={plateOpacity}>
					<SvgPlate plate={plate} x={cx - (pivot[0] - plate.box[0]) * s} y={cy - (pivot[1] - plate.box[1]) * s} w={w} />
				</g>
				{sprites.map((sp, i) => (!sp.behind ? spriteEl(sp, i) : null))}
				{uc && ucO > 0.001 ? (() => {
					const R = uc.r, th = uc.theta;
					const px = cx + R * Math.cos(th), py = cy - R * Math.sin(th);
					const large = Math.abs(th) % (2 * Math.PI) > Math.PI ? 1 : 0;
					const sweep = th >= 0 ? 0 : 1;
					const arcR = R * 0.32;
					const arcEnd = [cx + arcR * Math.cos(th), cy - arcR * Math.sin(th)];
					const full = Math.abs(th) >= 2 * Math.PI - 1e-3;
					return <g opacity={ucO}>
						<circle cx={cx} cy={cy} r={R} fill="none" stroke={INK} strokeWidth={4} strokeDasharray="3 11" strokeLinecap="round" />
						<line x1={cx - R - 30} x2={cx + R + 30} y1={cy} y2={cy} stroke={INK_SOFT} strokeWidth={3} />
						<line x1={cx} x2={cx} y1={cy - R - 30} y2={cy + R + 30} stroke={INK_SOFT} strokeWidth={3} />
						{uc.arc !== false ? <path d={full ? `M${cx + arcR},${cy} A${arcR},${arcR} 0 1 0 ${cx - arcR},${cy} A${arcR},${arcR} 0 1 0 ${cx + arcR},${cy}` : `M${cx + arcR},${cy} A${arcR},${arcR} 0 ${large} ${sweep} ${arcEnd[0]},${arcEnd[1]}`} fill="none" stroke={uc.colorArc ?? MATH_GRADIENT} strokeWidth={7} strokeLinecap="round" /> : null}
						{uc.arc !== false ? <path d={full ? `M${cx + R},${cy} A${R},${R} 0 1 0 ${cx - R},${cy} A${R},${R} 0 1 0 ${cx + R},${cy}` : `M${cx + R},${cy} A${R},${R} 0 ${large} ${sweep} ${px},${py}`} fill="none" stroke={uc.colorArc ?? MATH_GRADIENT} strokeWidth={8} strokeLinecap="round" opacity={0.85} /> : null}
						<line x1={cx} y1={cy} x2={px} y2={py} stroke={INK} strokeWidth={4.5} strokeLinecap="round" />
						{uc.heightBar !== false ? <line x1={px} y1={cy} x2={px} y2={py} stroke={uc.colorHeight ?? MATH_ROLES.a.stroke} strokeWidth={9} strokeLinecap="round" /> : null}
						<circle cx={px} cy={py} r={13} fill={MATH_GRADIENT} stroke={CARD} strokeWidth={5} />
						<circle cx={cx} cy={cy} r={8} fill={INK} />
						{uc.angleLabel ? <text x={cx + arcR + 16} y={cy - 18} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: uc.colorArc ?? MATH_GRADIENT}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{uc.angleLabel(th)}</text> : null}
						{uc.heightLabel ? <text x={px + (Math.cos(th) >= 0 ? 22 : -22)} y={(py + cy) / 2 + 12} textAnchor={Math.cos(th) >= 0 ? 'start' : 'end'} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 36, fill: uc.colorHeight ?? MATH_ROLES.a.ink}} stroke={CARD} strokeWidth={8} paintOrder="stroke">{uc.heightLabel(th)}</text> : null}
					</g>;
				})() : null}
			</FrameSvg>
			{overlay ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', opacity: o}}>{overlay(geo)}</div> : null}
		</>
	);
};

// ---------- ContainerFill ----------
/**
 * A container plate with a fill level (0 to 1) and sprites dropping in at a rate. With a `full` plate the
 * pair cross-fades by the level (part-full to full); otherwise a coded fill rises inside `interior`.
 * Drops spawn from the mouth at `rate(frame)` per second (deterministic, seeded), fall to the surface and
 * merge. Drive level and rate from the same function as the graph and readouts.
 */
export const ContainerFill: React.FC<{
	x: number; y: number; w: number; container: PlateSpec; full?: PlateSpec;
	/** Fillable interior in container file pixels [x0, yTop, x1, yBottom]. */
	interior: [number, number, number, number];
	level: number; fillColor?: string; fillOpacity?: number;
	drops?: {rate: (frame: number) => number; from: number; sprite?: PlateSpec; size?: number; color?: string; seed?: number; fall?: number};
	at?: number; out?: number;
}> = ({x, y, w, container, full, interior, level, fillColor = '#e2b23b', fillOpacity = 0.55, drops, at = 0, out}) => {
	usePlatePreload([container.src, ...(full ? [full.src] : []), ...(drops?.sprite ? [drops.sprite.src] : [])]);
	const f = useCurrentFrame();
	const id = `cf-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(container, x, y, w);
	const [ix0, iyT, ix1, iyB] = interior;
	const [X0, YT] = m.at(ix0, iyT), [X1, YB] = m.at(ix1, iyB);
	const L = Math.max(0, Math.min(1, level));
	const surf = YB - (YB - YT) * L;
	const items: React.ReactNode[] = [];
	if (drops) {
		const fall = drops.fall ?? 22, size = drops.size ?? 46;
		const r = rng(drops.seed ?? 11);
		const jitter = Array.from({length: 400}, () => r());
		// cumulative drops from `from`: spawn i when the integral of rate passes i + 1
		let acc = 0, spawned = 0;
		for (let g = drops.from; g <= f; g++) {
			acc += Math.max(0, drops.rate(g)) / 30;
			while (acc >= spawned + 1) {
				const age = f - g;
				if (age <= fall + 8) {
					const u = Math.min(1, age / fall);
					const dx = X0 + (X1 - X0) * (0.2 + 0.6 * jitter[spawned % 400]);
					const yTop = YT - size * 2.2;
					const yy = yTop + (surf - size * 0.3 - yTop) * u * u;
					const op = u < 1 ? 1 : 1 - (age - fall) / 8;
					const rotDeg = (jitter[(spawned * 7) % 400] - 0.5) * 80 + age * 6;
					items.push(drops.sprite
						? <g key={spawned} opacity={op} transform={`rotate(${rotDeg} ${dx} ${yy})`}><SvgPlate plate={drops.sprite} x={dx - size / 2} y={yy - (size * (drops.sprite.box[3] - drops.sprite.box[1])) / (drops.sprite.box[2] - drops.sprite.box[0]) / 2} w={size} /></g>
						: <g key={spawned} opacity={op}><ellipse cx={dx} cy={yy} rx={size / 2} ry={size / 2 * (0.55 + 0.45 * Math.abs(Math.cos(age * 0.35 + spawned)))} fill={drops.color ?? '#e2b23b'} stroke="#9c6a12" strokeWidth={3} /></g>);
				}
				spawned++;
			}
		}
	}
	return (
		<FrameSvg style={{opacity: o}}>
			<defs><clipPath id={id}><rect x={X0} y={YT} width={X1 - X0} height={YB - YT} rx={18} /></clipPath></defs>
			<SvgPlate plate={container} x={x} y={y} w={w} />
			{full ? <SvgPlate plate={full} x={x} y={y} w={w} opacity={L} /> : <g clipPath={`url(#${id})`}>
				<rect x={X0} y={surf} width={X1 - X0} height={YB - surf} fill={fillColor} opacity={fillOpacity} />
				<line x1={X0} x2={X1} y1={surf} y2={surf} stroke="#9c6a12" strokeWidth={4} opacity={L > 0.005 ? 0.8 : 0} />
			</g>}
			{items}
		</FrameSvg>
	);
};

// ---------- ScreenCounter, StopwatchHand, PlateReadout ----------
/**
 * Live rows on a plate's blank screen (phone, dashboard or meter display). The screen rectangle is in the
 * plate's file pixels; text is sized from the screen height (never below 26 px) in light ink.
 */
export const ScreenCounter: React.FC<{
	plate: PlateSpec; x: number; y: number; w: number; screen: readonly [number, number, number, number];
	rows: readonly {label?: string; value: number | string; digits?: number; unit?: string; color?: string}[];
	drawPlate?: boolean; at?: number; out?: number; size?: number; align?: 'left' | 'center';
}> = ({plate, x, y, w, screen, rows, drawPlate = true, at = 0, out, size, align = 'center'}) => {
	usePlatePreload(drawPlate ? [plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(plate, x, y, w);
	const [sx0, sy0] = m.at(screen[0], screen[1]), [sx1, sy1] = m.at(screen[2], screen[3]);
	const hh = sy1 - sy0;
	// Fit the widest row inside the screen (display digits are about 0.58 em wide), never below 26 px.
	const rowChars = (r: (typeof rows)[number]) => (typeof r.value === 'number' ? fmtNum(r.value, r.digits ?? 0) : r.value).length + ((r.label?.length ?? 0) + (r.unit?.length ?? 0)) * 0.42 + (r.label ? 0.5 : 0) + (r.unit ? 0.5 : 0);
	const widest = Math.max(...rows.map(rowChars), 1);
	const big = Math.max(26, size ?? Math.min(110, (hh / rows.length) * 0.56, ((sx1 - sx0) * 0.9) / (widest * 0.6)));
	const small = Math.max(26, big * 0.42);
	return (
		<>
			{drawPlate ? <FrameSvg style={{opacity: o}}><SvgPlate plate={plate} x={x} y={y} w={w} /></FrameSvg> : null}
			<div style={{position: 'absolute', left: sx0, top: sy0, width: sx1 - sx0, height: hh, opacity: o, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: align === 'center' ? 'center' : 'flex-start', padding: align === 'left' ? '0 4%' : undefined, boxSizing: 'border-box', gap: 2}}>
				{rows.map((r, i) => (
					<div key={i} style={{display: 'flex', alignItems: 'baseline', gap: 12, whiteSpace: 'pre'}}>
						{r.label ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: small, color: '#cfe3df'}}>{r.label}</span> : null}
						<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: big, color: r.color ?? '#ffffff', fontVariantNumeric: 'tabular-nums', lineHeight: 1}}>{typeof r.value === 'number' ? fmtNum(r.value, r.digits ?? 0) : r.value}</span>
						{r.unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: small, color: '#cfe3df'}}>{r.unit}</span> : null}
					</div>
				))}
			</div>
		</>
	);
};

/**
 * A coded stopwatch hand (and optional coded face when no plate is supplied): angle from elapsed seconds,
 * one turn per `period` seconds, clockwise from 12 o'clock. Place cx, cy on a painted face's hub.
 */
export const StopwatchHand: React.FC<{cx: number; cy: number; r: number; seconds: number; period?: number; face?: boolean; color?: string; at?: number; out?: number; label?: string}> = ({cx, cy, r, seconds, period = 60, face = false, color = '#b8322a', at = 0, out, label}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const a = (seconds / period) * 2 * Math.PI;
	const hx = cx + Math.sin(a) * r, hy = cy - Math.cos(a) * r;
	const tx = cx - Math.sin(a) * r * 0.18, ty = cy + Math.cos(a) * r * 0.18;
	return (
		<FrameSvg style={{opacity: o}}>
			{face ? <>
				<circle cx={cx} cy={cy} r={r * 1.18} fill={CARD} stroke={INK} strokeWidth={6} />
				{Array.from({length: 12}, (_, i) => {const t = (i / 12) * 2 * Math.PI; return <line key={i} x1={cx + Math.sin(t) * r * 1.0} y1={cy - Math.cos(t) * r * 1.0} x2={cx + Math.sin(t) * r * 1.1} y2={cy - Math.cos(t) * r * 1.1} stroke={INK} strokeWidth={i % 3 === 0 ? 6 : 3} strokeLinecap="round" />;})}
			</> : null}
			{face && seconds > 0 ? <path d={`M${cx},${cy - r * 0.94} A${r * 0.94},${r * 0.94} 0 ${a % (2 * Math.PI) > Math.PI ? 1 : 0} 1 ${cx + Math.sin(a) * r * 0.94},${cy - Math.cos(a) * r * 0.94}`} fill="none" stroke={MATH_AMBER} strokeWidth={10} opacity={0.35} /> : null}
			<line x1={tx} y1={ty} x2={hx} y2={hy} stroke={color} strokeWidth={Math.max(5, r * 0.05)} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={Math.max(8, r * 0.07)} fill={color} stroke={CARD} strokeWidth={3} />
			{label ? <text x={cx} y={cy + r * 0.5} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: Math.max(30, r * 0.26), fill: INK, fontVariantNumeric: 'tabular-nums'}}>{label}</text> : null}
		</FrameSvg>
	);
};

/**
 * A readout pinned to a plate: either written inside a display region of the plate (file pixels), or on a
 * card at (cardX, cardY) joined by a leader to an anchor point on the plate (guitar string, meter tip).
 */
export const PlateReadout: React.FC<{
	plate: PlateSpec; x: number; y: number; w: number; drawPlate?: boolean;
	region?: readonly [number, number, number, number];
	anchor?: [number, number]; card?: {x: number; y: number; width?: number};
	label?: React.ReactNode; value: number | string; digits?: number; unit?: string; role?: RoleKey;
	at?: number; out?: number;
}> = ({plate, x, y, w, drawPlate = true, region, anchor, card, label, value, digits = 1, unit, role, at = 0, out}) => {
	usePlatePreload(drawPlate ? [plate.src] : []);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const m = plateMap(plate, x, y, w);
	const txt = typeof value === 'number' ? fmtNum(value, digits) : value;
	return (
		<>
			{drawPlate ? <FrameSvg style={{opacity: o}}><SvgPlate plate={plate} x={x} y={y} w={w} /></FrameSvg> : null}
			{region ? (() => {
				const [a0, b0] = m.at(region[0], region[1]), [a1, b1] = m.at(region[2], region[3]);
				const hh = b1 - b0, big = Math.max(30, Math.min(hh * 0.62, ((a1 - a0) / Math.max(3, txt.length + (unit ? unit.length * 0.5 : 0))) * 1.7));
				return <div style={{position: 'absolute', left: a0, top: b0, width: a1 - a0, height: hh, opacity: o, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, whiteSpace: 'pre'}}>
					<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: big, color: '#d9f2e8', fontVariantNumeric: 'tabular-nums', lineHeight: 1}}>{txt}</span>
					{unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: Math.max(26, big * 0.45), color: '#cfe3df'}}>{unit}</span> : null}
				</div>;
			})() : null}
			{anchor && card ? (() => {
				const [ax, ay] = m.at(anchor[0], anchor[1]);
				const cw = card.width ?? 360;
				const ex = Math.max(card.x, Math.min(card.x + cw, ax)), ey = ay < card.y ? card.y : card.y + 110;
				return <>
					<FrameSvg style={{opacity: o}}>
						<line x1={ax} y1={ay} x2={ex} y2={ey} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="8 7" />
						<circle cx={ax} cy={ay} r={10} fill={role ? MATH_ROLES[role].stroke : INK} stroke={CARD} strokeWidth={4} />
					</FrameSvg>
					<div style={{position: 'absolute', left: card.x, top: card.y, width: cw, boxSizing: 'border-box', opacity: o, background: CARD, borderRadius: 18, padding: '10px 22px', boxShadow: CARD_SHADOW, border: `3px solid ${role ? MATH_ROLES[role].stroke : 'rgba(60,45,20,0.12)'}`}}>
						{label ? <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: roleInk(role, INK)}}>{label}</div> : null}
						<div style={{display: 'flex', alignItems: 'baseline', gap: 10}}>
							<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: roleInk(role, INK), fontVariantNumeric: 'tabular-nums'}}>{txt}</span>
							{unit ? <span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>{unit}</span> : null}
						</div>
					</div>
				</>;
			})() : null}
		</>
	);
};

// ---------- TripSim ----------
export type SpeedStop = {frame: number; speed: number};
export type TripState = {hours: number; km: number; speed: number; average: number};
/** Trip state at a frame from a piecewise-constant speed schedule (km/h), `hoursPerFrame` of trip time per video frame. */
export const tripAt = (schedule: readonly SpeedStop[], frame: number, hoursPerFrame: number): TripState => {
	if (!schedule.length) return {hours: 0, km: 0, speed: 0, average: NaN};
	const start = schedule[0].frame;
	let km = 0, speed = 0;
	for (let i = 0; i < schedule.length; i++) {
		const a = schedule[i].frame, b = i + 1 < schedule.length ? schedule[i + 1].frame : Infinity;
		if (frame <= a) break;
		km += schedule[i].speed * (Math.min(frame, b) - a) * hoursPerFrame;
		speed = schedule[i].speed;
	}
	if (frame < start) speed = 0;
	const hours = Math.max(0, frame - start) * hoursPerFrame;
	return {hours, km, speed, average: hours > 0 ? km / hours : NaN};
};
export const fmtHours = (h: number) => {
	const hh = Math.floor(h + 1e-9), mm = Math.floor((h - hh) * 60 + 1e-6);
	return `${hh} h ${String(mm).padStart(2, '0')} min`;
};

/**
 * Road trip: a horizontally tiling road plate scrolls at a speed proportional to the car's speed (tiles are
 * drawn at native aspect, never stretched), the car sprite rides on it, a dashboard plate shows a coded
 * needle and live screen text, and a readout board carries distance, time and average. One trip state
 * drives everything. Without a road plate a coded road band is drawn (dummy and test use only).
 */
export const TripSim: React.FC<{
	schedule: readonly SpeedStop[]; hoursPerFrame: number;
	road: {x: number; y: number; w: number; h: number; plate?: PlateSpec; pxPerKm: number};
	car?: {plate: PlateSpec; x: number; y: number; w: number};
	dashboard?: {plate: PlateSpec; x: number; y: number; w: number; dial: {cx: number; cy: number; r: number; startDeg: number; endDeg: number}; maxSpeed?: number; screen?: readonly [number, number, number, number]; screenSmall?: readonly [number, number, number, number]};
	readout?: {x: number; y: number; width?: number; at?: number};
	at?: number; out?: number;
	overlay?: (s: TripState) => React.ReactNode;
}> = ({schedule, hoursPerFrame, road, car, dashboard, readout, at = 0, out, overlay}) => {
	usePlatePreload([road.plate, car?.plate, dashboard?.plate].filter((p): p is PlateSpec => !!p).map(p => p.src));
	const f = useCurrentFrame();
	const id = `trip-${useId().replace(/:/g, '')}`;
	const o = vis(f, at, out, 14);
	const st = tripAt(schedule, f, hoursPerFrame);
	if (o <= 0.001) return null;
	const offset = st.km * road.pxPerKm;
	const tiles: React.ReactNode[] = [];
	if (road.plate) {
		const tw = road.h * (road.plate.box[2] - road.plate.box[0]) / (road.plate.box[3] - road.plate.box[1]);
		const start = -(offset % tw);
		for (let k = -1; start + k * tw < road.w + tw; k++) tiles.push(<SvgPlate key={k} plate={road.plate} x={road.x + start + k * tw} y={road.y} w={tw} />);
	} else {
		const dash = 120, start = -(offset % (dash * 2));
		tiles.push(<rect key="r" x={road.x} y={road.y + road.h * 0.35} width={road.w} height={road.h * 0.5} fill="#7b766e" />);
		tiles.push(<rect key="v" x={road.x} y={road.y + road.h * 0.85} width={road.w} height={road.h * 0.15} fill="#9bb07a" />);
		tiles.push(<rect key="g" x={road.x} y={road.y} width={road.w} height={road.h * 0.35} fill="#c9d9a5" />);
		for (let k = 0; start + k * dash * 2 < road.w; k++) tiles.push(<rect key={'d' + k} x={road.x + start + k * dash * 2} y={road.y + road.h * 0.58} width={dash} height={8} fill="#f4efe2" />);
	}
	const bob = Math.sin(f * 0.9) * (st.speed > 0 ? 1.5 : 0);
	let dash: React.ReactNode = null;
	if (dashboard) {
		const m = plateMap(dashboard.plate, dashboard.x, dashboard.y, dashboard.w);
		const [dcx, dcy] = m.at(dashboard.dial.cx, dashboard.dial.cy);
		const R = dashboard.dial.r * m.s * 0.72;
		const frac = Math.max(0, Math.min(1, st.speed / (dashboard.maxSpeed ?? 160)));
		const ang = ((dashboard.dial.startDeg + (dashboard.dial.endDeg - dashboard.dial.startDeg) * frac) * Math.PI) / 180;
		const nx = dcx + Math.cos(ang) * R, ny = dcy - Math.sin(ang) * R;
		dash = <>
			<FrameSvg style={{opacity: o}}>
				<SvgPlate plate={dashboard.plate} x={dashboard.x} y={dashboard.y} w={dashboard.w} />
				<line x1={dcx - Math.cos(ang) * R * 0.15} y1={dcy + Math.sin(ang) * R * 0.15} x2={nx} y2={ny} stroke="#e8562f" strokeWidth={Math.max(5, R * 0.05)} strokeLinecap="round" />
				<circle cx={dcx} cy={dcy} r={Math.max(9, R * 0.1)} fill="#2b2b2e" stroke="#9a9aa0" strokeWidth={3} />
			</FrameSvg>
			{dashboard.screen ? <ScreenCounter plate={dashboard.plate} x={dashboard.x} y={dashboard.y} w={dashboard.w} screen={dashboard.screen} drawPlate={false} rows={[{value: st.km, digits: 0, unit: 'km'}, {label: 'avg', value: Number.isFinite(st.average) ? fmtNum(st.average, 0) : 'none yet', unit: Number.isFinite(st.average) ? 'km/h' : undefined}]} at={at} out={out} /> : null}
			{dashboard.screenSmall ? <ScreenCounter plate={dashboard.plate} x={dashboard.x} y={dashboard.y} w={dashboard.w} screen={dashboard.screenSmall} drawPlate={false} rows={[{value: fmtHours(st.hours)}]} at={at} out={out} /> : null}
		</>;
	}
	return (
		<>
			<FrameSvg style={{opacity: o}}>
				<defs><clipPath id={id}><rect x={road.x} y={road.y} width={road.w} height={road.h} rx={22} /></clipPath></defs>
				<g clipPath={`url(#${id})`}>{tiles}</g>
				<rect x={road.x} y={road.y} width={road.w} height={road.h} rx={22} fill="none" stroke={INK} strokeWidth={3} opacity={0.25} />
				{car ? <SvgPlate plate={car.plate} x={car.x} y={car.y + bob} w={car.w} /> : null}
			</FrameSvg>
			{dash}
			{readout ? <LiveReadoutBoard x={readout.x} y={readout.y} width={readout.width ?? 520} at={readout.at ?? at} out={out} inline rows={[
				{label: 'distance', value: st.km, digits: 0, unit: 'km', role: 'b'},
				{label: 'time', value: st.hours, digits: 2, unit: 'h', role: 'a'},
				{label: 'average', value: Number.isFinite(st.average) ? st.average : 0, text: Number.isFinite(st.average) ? undefined : 'not yet', digits: 0, unit: Number.isFinite(st.average) ? 'km/h' : undefined, role: 'gradient'},
			]} /> : null}
			{overlay ? <div style={{position: 'absolute', inset: 0, pointerEvents: 'none'}}>{overlay(st)}</div> : null}
		</>
	);
};

/** Small hand caption helper for rigs (hand font, role colour, at least 34 px). */
export const RigTag: React.FC<{x: number; y: number; text: string; role?: RoleKey; size?: number; at?: number; anchor?: 'start' | 'middle' | 'end'}> = ({x, y, text, role, size = 40, at = 0, anchor = 'start'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	return <div style={{position: 'absolute', left: x, top: y - size * 0.6, transform: `translateX(${anchor === 'start' ? 0 : anchor === 'middle' ? -50 : -100}%)`, opacity: o, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color: roleInk(role, INK), whiteSpace: 'pre'}}>{text}</div>;
};
