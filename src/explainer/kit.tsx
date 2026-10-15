// Shared helpers for the explainer engine (paper, hand-drawn editorial style).
import React, {useMemo} from 'react';
import {continueRender, delayRender, Easing, Freeze, Img, interpolate, OffthreadVideo, Sequence, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_HAND, TOK} from '../styles/tokens';

// Lean font loader for the explainer engine: only the two latin faces used, with a
// safety release so one slow request cannot stall a render tab.
if (typeof document !== 'undefined' && !(window as unknown as {__explainerFonts?: boolean}).__explainerFonts) {
	(window as unknown as {__explainerFonts?: boolean}).__explainerFonts = true;
	const handle = delayRender('Loading explainer fonts', {timeoutInMilliseconds: 60000});
	let released = false;
	const release = () => { if (!released) { released = true; continueRender(handle); } };
	const faces = [
		new FontFace('Caveat', `url(${staticFile('fonts/caveat-latin-wght-normal.woff2')}) format('woff2')`, {weight: '400 700'}),
		new FontFace('Inter Tight', `url(${staticFile('fonts/inter-tight-latin-wght-normal.woff2')}) format('woff2')`, {weight: '100 900'}),
	];
	Promise.all(faces.map(face => face.load().then(f => { document.fonts.add(f); }))).then(release, release);
	setTimeout(release, 20000);
}

export const PAPER = '#f6f1e7';
export const PAPER_DEEP = '#ede4d3';
export const INK = '#26231f';
export const INK_SOFT = '#6b6358';
export const BLUE = TOK.bio1;
export const BLUE_SOFT = '#d9e8f6';
export const AMBER = TOK.amber;
export const AMBER_INK = TOK.amberInk;
export const THREAD = '#b9a98f';
export const THREAD_DARK = '#8a7a63';
export const SPORE = '#2f2a26';
export const NUTRIENT = '#e2a63b';
export {FONT_DISPLAY, FONT_HAND};

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
const ease = Easing.bezier(0.22, 1, 0.36, 1);

/** 0..1 progress between two local frames, eased. */
export const prog = (frame: number, from: number, dur = 20, easing = ease) =>
	interpolate(frame, [from, from + dur], [0, 1], {...clamp, easing});

export const useLocal = () => useCurrentFrame();

/** Deterministic random generator so every render is identical. */
export const rng = (seed: number) => {
	let s = (Math.imul((seed + 1) ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(seed + 7, 0xc2b2ae35)) >>> 0 || 1;
	const next = () => {
		s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0;
		return s / 4294967296;
	};
	next(); next(); next();
	return next;
};

/** Pop-in scale using a spring, starting at `at`. */
export const usePop = (at: number, damping = 12) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	return spring({frame: frame - at, fps, config: {damping, stiffness: 140, mass: 0.7}});
};

/** Fade and lift in, plus optional fade out. */
export const Enter: React.FC<{at: number; out?: number; dy?: number; children: React.ReactNode; style?: React.CSSProperties}> = ({at, out, dy = 18, children, style}) => {
	const frame = useCurrentFrame();
	const p = prog(frame, at, 16);
	const o = out === undefined ? 1 : 1 - prog(frame, out, 12);
	return <div style={{opacity: p * o, transform: `translateY(${(1 - p) * dy}px)`, ...style}}>{children}</div>;
};

/** Handwritten text that writes itself on, character by character, with a clipped reveal. */
export const HandText: React.FC<{text: string; at: number; size?: number; color?: string; cps?: number; style?: React.CSSProperties; weight?: number}> = ({text, at, size = 64, color = INK, cps = 22, style, weight = 700}) => {
	const frame = useCurrentFrame();
	const chars = Math.max(0, Math.min(text.length, Math.floor(((frame - at) / 30) * cps)));
	const p = text.length ? chars / text.length : 1;
	return (
		<span style={{position: 'relative', display: 'inline-block', fontFamily: FONT_HAND, fontWeight: weight, fontSize: size, color, lineHeight: 1.05, whiteSpace: 'pre', paddingRight: '0.12em', ...style}}>
			<span style={{visibility: 'hidden'}}>{text}</span>
			<span style={{position: 'absolute', inset: 0, clipPath: p >= 1 ? undefined : `inset(-30% ${100 - p * 100}% -30% -8%)`}}>{text}</span>
		</span>
	);
};

/** A hand-drawn wobbly path that draws on. */
export const DrawPath: React.FC<{d: string; at: number; dur?: number; color?: string; width?: number; dash?: string; opacity?: number; cap?: 'round' | 'butt'}> = ({d, at, dur = 24, color = INK, width = 4, dash, opacity = 1, cap = 'round'}) => {
	const frame = useCurrentFrame();
	const p = prog(frame, at, dur);
	if (dash) {
		return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap={cap} strokeDasharray={dash} opacity={opacity * Math.min(1, p * 3)} style={{clipPath: `inset(0 ${100 - p * 100}% 0 0)`}} />;
	}
	return <path d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap={cap} strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} opacity={opacity} />;
};

/** Wobbly ellipse path for scribble circles drawn in SVG coordinates. */
export const scribbleEllipse = (cx: number, cy: number, rx: number, ry: number, seed = 1, loops = 1.25) => {
	const r = rng(seed);
	let d = '';
	const steps = Math.round(60 * loops);
	for (let i = 0; i <= steps; i++) {
		const t = -Math.PI / 2 + (i / 60) * Math.PI * 2;
		const j = 1 + (r() - 0.5) * 0.07 + (i / steps) * 0.06;
		d += `${i ? 'L' : 'M'}${(cx + rx * j * Math.cos(t)).toFixed(1)},${(cy + ry * j * Math.sin(t)).toFixed(1)} `;
	}
	return d;
};

/** Hand-drawn tick or cross. */
export const Mark: React.FC<{x: number; y: number; at: number; kind?: 'tick' | 'cross'; size?: number; color?: string}> = ({x, y, at, kind = 'tick', size = 40, color}) => {
	const c = color ?? (kind === 'tick' ? '#2f8a5b' : '#c4432f');
	const s = size;
	if (kind === 'tick') return <DrawPath d={`M${x - s * 0.5},${y} L${x - s * 0.12},${y + s * 0.42} L${x + s * 0.55},${y - s * 0.5}`} at={at} dur={12} color={c} width={7} />;
	return (
		<g>
			<DrawPath d={`M${x - s * 0.45},${y - s * 0.45} L${x + s * 0.45},${y + s * 0.45}`} at={at} dur={8} color={c} width={7} />
			<DrawPath d={`M${x + s * 0.45},${y - s * 0.45} L${x - s * 0.45},${y + s * 0.45}`} at={at + 6} dur={8} color={c} width={7} />
		</g>
	);
};

/** Label with a drawn leader line from a point to the text. Coordinates in a 1920x1080 SVG overlay. */
export const Callout: React.FC<{from: [number, number]; to: [number, number]; at: number; text: string; sub?: string; color?: string; align?: 'left' | 'right'; size?: number}> = ({from, to, at, text, sub, color = BLUE, align = 'left', size = 46}) => {
	const frame = useCurrentFrame();
	const mid: [number, number] = [(from[0] + to[0]) / 2 + 10, (from[1] + to[1]) / 2 - 18];
	const dot = prog(frame, at, 8);
	const textOpacity = prog(frame, at + 14, 12);
	return (
		<g>
			<circle cx={from[0]} cy={from[1]} r={8 * dot} fill={color} />
			<DrawPath d={`M${from[0]},${from[1]} Q${mid[0]},${mid[1]} ${to[0]},${to[1]}`} at={at + 2} dur={16} color={color} width={3.5} />
			<text x={to[0] + (align === 'left' ? 14 : -14)} y={to[1] + 12} textAnchor={align === 'left' ? 'start' : 'end'} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={color} opacity={textOpacity}>
				{text}
			</text>
			{sub ? (
				<text x={to[0] + (align === 'left' ? 14 : -14)} y={to[1] + 12 + size * 0.85} textAnchor={align === 'left' ? 'start' : 'end'} style={{fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: size * 0.52}} fill={INK_SOFT} opacity={prog(frame, at + 22, 12)}>
					{sub}
				</text>
			) : null}
		</g>
	);
};

/** Crop a region of a raster asset and place it, using transparent artwork. */
export const Plate: React.FC<{src: string; natural: [number, number]; crop: [number, number, number, number]; width: number; style?: React.CSSProperties}> = ({src, natural, crop, width, style}) => {
	const [cx, cy, cw, ch] = crop;
	const scale = width / cw;
	return (
		<div style={{position: 'absolute', width, height: ch * scale, overflow: 'hidden', ...style}}>
			<Img src={staticFile(src)} style={{position: 'absolute', width: natural[0] * scale, height: natural[1] * scale, left: -cx * scale, top: -cy * scale, maxWidth: 'none'}} />
		</div>
	);
};

/**
 * A short AI "process clip" (start and end frames are our own painted plates, on a white
 * background). Before `at` it shows the first frame, from `at` it plays once (optionally
 * slowed by `rate` < 1), then holds the last frame. Multiply blending drops the white
 * background onto the paper, so slight background drift in the clip never shows.
 * List the clip file in the lesson config's assets like a plate.
 */
export const ProcessClip: React.FC<{src: string; at: number; seconds?: number; rate?: number; x: number; y: number; width: number; height: number; style?: React.CSSProperties; crop?: {x: number; y: number; w: number; h: number}}> = ({src, at, seconds = 5, rate = 1, x, y, width, height, style, crop}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const span = Math.round((seconds * fps) / rate);
	// Hold the first frame before `at` and the last frame after the clip, but let the video play
	// naturally in between. (Freezing it frame by frame forces a seek on every frame, which stalls
	// the browser preview, voice included.)
	const phase = frame < at ? 'before' : frame < at + span ? 'play' : 'after';
	// The scene wrapper (transform) is an isolated compositing group, so a multiply blend there sees no paper
	// behind it. The clip therefore carries its own copy of the paper (grain tile and gradient, aligned to the
	// frame) in an isolated box and multiplies onto that. `crop` (frame coordinates) limits the box to the
	// object so the paper copy never covers neighbouring content.
	const box = crop ?? {x, y, w: width, h: height};
	return (
		<div style={{position: 'absolute', left: box.x, top: box.y, width: box.w, height: box.h, overflow: 'hidden', isolation: 'isolate',
			background: `url(${staticFile(CLIP_PAPER_GRAIN)}) ${-box.x}px ${-box.y}px repeat, radial-gradient(ellipse at 50% 40%, #fbf7ef 0%, ${PAPER} 55%, #efe6d6 100%) ${-box.x}px ${-box.y}px / 1920px 1080px no-repeat`, ...style}}>
			<div style={{position: 'absolute', left: x - box.x, top: y - box.y, width, height, mixBlendMode: 'multiply'}}>
				{phase === 'play' ? null : (
					<Freeze frame={phase === 'before' ? 0 : span - 1}>
						<OffthreadVideo src={staticFile(src)} muted playbackRate={rate} pauseWhenBuffering={false} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
					</Freeze>
				)}
				<Sequence from={at} durationInFrames={span} layout="none">
					<OffthreadVideo src={staticFile(src)} muted playbackRate={rate} pauseWhenBuffering={false} style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain'}} />
				</Sequence>
			</div>
		</div>
	);
};
const CLIP_PAPER_GRAIN = 'assets/explainer-paper-grain.png';

/** Procedural branching hyphae grown from an origin. Returns segments with a birth time 0..1. */
export type Seg = {d: string; born: number; len: number; tip: [number, number]; depth: number};
export const growHyphae = (seed: number, origin: [number, number], {spread = 520, depth = 5, baseAngle = 0, angleSpread = Math.PI * 2, step = 70, down = 0, flat = 1, roots = 5} = {}): Seg[] => {
	const r = rng(seed);
	const segs: Seg[] = [];
	const walk = (x: number, y: number, a: number, d: number, t: number) => {
		if (d > depth) return;
		const n = 3 + Math.floor(r() * 2);
		let px = x, py = y, ang = a, path = `M${x.toFixed(1)},${y.toFixed(1)}`;
		for (let i = 0; i < n; i++) {
			ang += (r() - 0.5) * 0.7;
			px += Math.cos(ang) * step * (0.7 + r() * 0.5);
			py += Math.sin(ang) * step * (0.7 + r() * 0.5) * flat + down;
			path += ` L${px.toFixed(1)},${py.toFixed(1)}`;
		}
		const dist = Math.hypot(px - origin[0], py - origin[1]);
		if (dist > spread * 1.25) return;
		segs.push({d: path, born: t, len: n, tip: [px, py], depth: d});
		const kids = d < 2 ? 3 : 2;
		for (let k = 0; k < kids; k++) {
			if (r() < 0.25 && d > 1) continue;
			walk(px, py, ang + (r() - 0.5) * 1.6, d + 1, t + 1 / (depth + 1));
		}
	};
	for (let i = 0; i < roots; i++) walk(origin[0], origin[1], baseAngle + (i / roots) * angleSpread + r() * 0.4, 0, 0);
	return segs;
};

/** Draws hyphae growing over time; `p` 0..1 overall growth. */
export const Hyphae: React.FC<{segs: Seg[]; p: number; color?: string; width?: number; highlight?: number; highlightColor?: string}> = ({segs, p, color = THREAD, width = 3.2, highlight = -1, highlightColor = BLUE}) => (
	<g>
		{segs.map((s, i) => {
			const local = Math.max(0, Math.min(1, (p - s.born) / 0.22));
			if (local <= 0) return null;
			const isHi = i === highlight;
			return <path key={i} d={s.d} fill="none" stroke={isHi ? highlightColor : color} strokeWidth={isHi ? width * 2.2 : Math.max(1.4, width - s.depth * 0.35)} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - local} opacity={isHi ? 1 : 0.92} />;
		})}
	</g>
);

/** Circular countdown ring for thinking holds. */
export const Countdown: React.FC<{start: number; end: number; x: number; y: number; r?: number}> = ({start, end, x, y, r = 64}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	if (frame < start - 10) return null;
	const appear = prog(frame, start - 10, 12);
	const left = Math.max(0, 1 - (frame - start) / (end - start));
	const secs = Math.ceil(((end - start) * left) / fps);
	const c = 2 * Math.PI * r;
	const done = frame >= end;
	return (
		<g opacity={appear * (1 - prog(frame, end, 10))} transform={`translate(${x},${y}) scale(${0.85 + 0.15 * appear})`}>
			<circle r={r + 16} fill="#fffdf8" stroke="rgba(0,0,0,0.06)" strokeWidth={2} />
			<circle r={r} fill="none" stroke={PAPER_DEEP} strokeWidth={14} />
			<circle r={r} fill="none" stroke={AMBER} strokeWidth={14} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - left)} transform="rotate(-90)" />
			<text y={16} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52}} fill={INK}>{done ? '0' : secs}</text>
			<text y={r + 62} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={AMBER_INK}>think it through</text>
		</g>
	);
};

/** Spore particle positions along an air-current path. */
export const sporeField = (seed: number, count: number) => {
	const r = rng(seed);
	return Array.from({length: count}, (_, i) => ({i, lane: r(), delay: r(), wobble: r() * Math.PI * 2, size: 5 + r() * 4, speed: 0.75 + r() * 0.5}));
};
