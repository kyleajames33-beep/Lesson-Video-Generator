// Lab pieces shared by the chem-y12-m8 "lab" group (qualitative tests and
// spectroscopy): dropper, Bunsen burner + coloured flame, equation chips and a
// deterministic "swimming" motion for ions. Lane-local; could be promoted.

import {TOK} from '../../../../styles/tokens';
import {hash01, shade} from './shared';

/** Triangle wave in [0,1]: a point bouncing between two walls. */
export const tri = (u: number) => {
	const m = ((u % 2) + 2) % 2;
	return m < 1 ? m : 2 - m;
};

/** Deterministic wander inside a box for particle `seed` at frame `t`. */
export const swim = (seed: number, t: number, x0: number, x1: number, y0: number, y1: number, speed = 1) => {
	const sx = (0.0028 + hash01(seed + 50) * 0.0022) * speed * (hash01(seed + 7) > 0.5 ? 1 : -1);
	const sy = (0.0022 + hash01(seed + 23) * 0.002) * speed * (hash01(seed + 3) > 0.5 ? 1 : -1);
	return {x: x0 + tri(hash01(seed) * 2 + t * sx) * (x1 - x0), y: y0 + tri(hash01(seed + 90) * 2 + t * sy) * (y1 - y0)};
};

/**
 * A glass dropper hanging tip-down at (x, tipY). `drop` (0..1) is the
 * progress of one falling drop from the tip down to `landY`; 0 or ≥1 hides it.
 */
export const Dropper = ({
	x, tipY, landY, drop = 0, liquid = 'rgba(150,200,235,0.6)', opacity = 1, len = 70,
}: {x: number; tipY: number; landY: number; drop?: number; liquid?: string; opacity?: number; len?: number}) => {
	const top = tipY - len;
	const dy = tipY + 6 + (landY - tipY - 6) * drop * drop;
	return (
		<g opacity={opacity}>
			{/* rubber bulb */}
			<path d={`M ${x - 11} ${top + 4} Q ${x - 13} ${top - 26} ${x} ${top - 30} Q ${x + 13} ${top - 26} ${x + 11} ${top + 4} Z`} fill="#b8423a" stroke={shade('#b8423a', -0.25)} strokeWidth={1.5} />
			<ellipse cx={x - 4} cy={top - 18} rx={3} ry={6} fill="#ffffff" opacity={0.35} />
			<rect x={x - 12} y={top + 2} width={24} height={6} rx={2} fill="#8f332d" />
			{/* glass stem tapering to the tip */}
			<path d={`M ${x - 7} ${top + 8} L ${x - 7} ${tipY - 16} L ${x - 2} ${tipY} L ${x + 2} ${tipY} L ${x + 7} ${tipY - 16} L ${x + 7} ${top + 8} Z`} fill="rgba(230,240,248,0.55)" stroke="rgba(70,90,110,0.55)" strokeWidth={2} strokeLinejoin="round" />
			<path d={`M ${x - 5} ${top + 30} L ${x - 5} ${tipY - 16} L ${x - 1.5} ${tipY - 3} L ${x + 1.5} ${tipY - 3} L ${x + 5} ${tipY - 16} L ${x + 5} ${top + 30} Z`} fill={liquid} />
			{drop > 0 && drop < 1 && <path d={`M ${x} ${dy - 7} Q ${x + 5} ${dy} ${x} ${dy + 4} Q ${x - 5} ${dy} ${x} ${dy - 7} Z`} fill={liquid} stroke="rgba(70,90,110,0.5)" strokeWidth={1} />}
		</g>
	);
};

/** Progress (0..1) of the current drop when drops fall every `every` frames from `start`, `n` drops. */
export const dropPhase = (frame: number, start: number, n = 3, every = 9, fall = 8) => {
	for (let k = 0; k < n; k++) {
		const s = start + k * every;
		if (frame >= s && frame < s + fall) return (frame - s) / fall;
	}
	return 0;
};

/** A Bunsen burner standing on its base at (cx, baseY); returns the barrel top y via `barrelH`. */
export const Burner = ({id, cx, baseY, barrelH = 70, scale = 1}: {id: string; cx: number; baseY: number; barrelH?: number; scale?: number}) => {
	const bw = 16 * scale;
	const top = baseY - barrelH;
	return (
		<g>
			<ellipse cx={cx + 4} cy={baseY + 2} rx={30 * scale} ry={6 * scale} fill="rgba(40,36,30,0.2)" />
			<path d={`M ${cx - 28 * scale} ${baseY} L ${cx - 22 * scale} ${baseY - 10 * scale} L ${cx + 22 * scale} ${baseY - 10 * scale} L ${cx + 28 * scale} ${baseY} Z`} fill="#5d6268" />
			<rect x={cx - bw / 2} y={top} width={bw} height={barrelH - 8 * scale} rx={2} fill={`url(#${id}-barrel)`} stroke="#555a60" strokeWidth={1} />
			<rect x={cx - bw / 2 - 2} y={baseY - 30 * scale} width={bw + 4} height={9 * scale} rx={2} fill="#7c8288" />
			<rect x={cx - bw / 2 - 1.5} y={top - 3} width={bw + 3} height={5} rx={1.5} fill="#8b9197" />
		</g>
	);
};

/** Metal-barrel gradient used by Burner (render once per svg). */
export const BurnerDefs = ({id}: {id: string}) => (
	<defs>
		<linearGradient id={`${id}-barrel`} x1="0" x2="1" y1="0" y2="0">
			<stop offset="0%" stopColor="#8d949b" />
			<stop offset="35%" stopColor="#d7dce0" />
			<stop offset="100%" stopColor="#6c7278" />
		</linearGradient>
	</defs>
);

/**
 * A flame sitting on a burner mouth at (cx, baseY), height h. `color` is the
 * outer flame (an emission colour, or null for the plain blue Bunsen flame);
 * `mix` 0..1 blends from the plain flame to that colour. Flickers with frame.
 */
export const Flame = ({
	id, cx, baseY, h, w, color, mix = 1, frame, seed = 0, opacity = 1, mouth = 18,
}: {id: string; cx: number; baseY: number; h: number; w: number; color: string | null; mix?: number; frame: number; seed?: number; opacity?: number; mouth?: number}) => {
	const fl = Math.sin(frame / 3.1 + seed) * 0.04 + Math.sin(frame / 5.3 + seed * 2) * 0.03;
	const sway = Math.sin(frame / 7 + seed) * w * 0.07;
	const H = h * (1 + fl);
	// Narrow at the burner mouth, widest about a third of the way up, tapering to a tip.
	const shape = (hh: number, ww: number, m: number) =>
		`M ${cx - m / 2} ${baseY} C ${cx - ww * 0.62} ${baseY - hh * 0.14} ${cx - ww * 0.5} ${baseY - hh * 0.55} ${cx + sway * 1.6} ${baseY - hh} C ${cx + ww * 0.5} ${baseY - hh * 0.55} ${cx + ww * 0.62} ${baseY - hh * 0.14} ${cx + m / 2} ${baseY} Z`;
	const gid = `${id}-fl-${seed}`;
	return (
		<g opacity={opacity}>
			<defs>
				<linearGradient id={`${gid}-plain`} x1="0" x2="0" y1="1" y2="0">
					<stop offset="0%" stopColor="#5b8cff" stopOpacity={0.7} />
					<stop offset="100%" stopColor="#a9c8ff" stopOpacity={0.3} />
				</linearGradient>
				{color && (
					<>
						<linearGradient id={`${gid}-col`} x1="0" x2="0" y1="1" y2="0">
							<stop offset="0%" stopColor={shade(color, 0.14)} stopOpacity={0.95} />
							<stop offset="50%" stopColor={color} stopOpacity={0.95} />
							<stop offset="100%" stopColor={shade(color, 0.08)} stopOpacity={0.5} />
						</linearGradient>
						<radialGradient id={`${gid}-glow`} cx="50%" cy="55%" r="50%">
							<stop offset="0%" stopColor={color} stopOpacity={0.32} />
							<stop offset="100%" stopColor={color} stopOpacity={0} />
						</radialGradient>
					</>
				)}
			</defs>
			{color && mix > 0 && <ellipse cx={cx} cy={baseY - H * 0.48} rx={w * 1.25} ry={H * 0.72} fill={`url(#${gid}-glow)`} opacity={mix} />}
			<path d={shape(H * 0.82, w * 0.8, mouth)} fill={`url(#${gid}-plain)`} opacity={1 - mix * 0.85} />
			{color && mix > 0 && <path d={shape(H, w, mouth)} fill={`url(#${gid}-col)`} opacity={mix} />}
			{/* inner blue cone */}
			<path d={shape(H * 0.3, mouth * 1.1, mouth * 0.9)} fill="#3d6fe0" opacity={0.78} />
			<path d={shape(H * 0.3, mouth * 1.1, mouth * 0.9)} fill="none" stroke="#c4d6ff" strokeWidth={1.2} opacity={0.7} />
		</g>
	);
};

/** A wire loop on a holder rod, loop centred at (x, y), rod going up-right. */
export const WireLoop = ({x, y, opacity = 1, bead, scale = 1}: {x: number; y: number; opacity?: number; bead?: string; scale?: number}) => (
	<g opacity={opacity} transform={`translate(${x} ${y}) scale(${scale}) translate(${-x} ${-y})`}>
		<line x1={x + 6} y1={y - 4} x2={x + 70} y2={y - 90} stroke="#9aa0a6" strokeWidth={2.5} strokeLinecap="round" />
		<line x1={x + 60} y1={y - 76} x2={x + 92} y2={y - 121} stroke="#6b4a2e" strokeWidth={8} strokeLinecap="round" />
		<circle cx={x} cy={y} r={6} fill={bead ?? 'none'} stroke="#9aa0a6" strokeWidth={2.5} />
	</g>
);

/**
 * An equation term drawn as a rounded chip: optional glossy colour dot on the
 * left (ties the term to its ball in the picture), optional strike-through.
 * (x, y) is the chip centre. Returns nothing if opacity is 0.
 */
export const Chip = ({
	x, y, text, dot, size = 21, strike = 0, opacity = 1, border = 'rgba(0,0,0,0.14)', borderW = 1.5, fill = '#ffffff', textColor = TOK.ink, glossId,
}: {x: number; y: number; text: string; dot?: string; size?: number; strike?: number; opacity?: number; border?: string; borderW?: number; fill?: string; textColor?: string; glossId?: string}) => {
	if (opacity <= 0) return null;
	const w = chipW(text, size, Boolean(dot));
	const h = size + 16;
	const tx = dot ? x + 11 : x;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={10} fill={fill} stroke={border} strokeWidth={borderW} />
			{dot && <circle cx={x - w / 2 + 16} cy={y} r={8} fill={glossId ? `url(#${glossId})` : dot} stroke={shade(dot, -0.35)} strokeWidth={1} />}
			<text x={tx} y={y + size * 0.36} textAnchor="middle" fill={textColor} fontSize={size} fontWeight={800}>
				{text}
			</text>
			{strike > 0 && (
				<line x1={x - w / 2 - 4} y1={y + h / 2 - 3} x2={x - w / 2 - 4 + (w + 8) * strike} y2={y + h / 2 - 3 - (h - 6) * strike} stroke="#c0392b" strokeWidth={3.5} strokeLinecap="round" />
			)}
		</g>
	);
};

/** Width of a Chip (matches Chip's own layout). */
export const chipW = (text: string, size = 21, dot = false) => text.length * size * 0.54 + 22 + (dot ? 22 : 0);

/** Rising gas bubbles with a visible outline (readable on a light card). */
export const Fizz = ({
	frame, x0, x1, y0, y1, n = 9, seed = 1, opacity = 1, r = 4, speed = 1.6, stroke = 'rgba(60,90,120,0.7)',
}: {frame: number; x0: number; x1: number; y0: number; y1: number; n?: number; seed?: number; opacity?: number; r?: number; speed?: number; stroke?: string}) => {
	if (opacity <= 0) return null;
	const span = y0 - y1;
	return (
		<g opacity={opacity}>
			{Array.from({length: n}, (_, i) => {
				const h = hash01(seed * 31 + i);
				const t = ((frame * speed + h * span * 3) % span) / span;
				const x = x0 + (x1 - x0) * hash01(seed * 17 + i * 3) + Math.sin(frame / 9 + i) * 2;
				return <circle key={i} cx={x} cy={y0 - t * span} r={r * (0.6 + 0.6 * h) * (0.7 + 0.5 * t)} fill="rgba(255,255,255,0.85)" stroke={stroke} strokeWidth={1.4} />;
			})}
		</g>
	);
};

/** Suspended precipitate specks drifting down through a liquid column. */
export const Specks = ({
	x0, x1, y0, y1, color, amount, seed = 1, n = 16, drift = 0,
}: {x0: number; x1: number; y0: number; y1: number; color: string; amount: number; seed?: number; n?: number; drift?: number}) => {
	if (amount <= 0) return null;
	const edge = color.startsWith('#') ? shade(color, -0.3) : 'rgba(0,0,0,0.3)';
	return (
		<g opacity={amount}>
			{Array.from({length: n}, (_, i) => {
				const u = hash01(seed * 13 + i * 7);
				const v = Math.min(0.97, hash01(seed * 29 + i * 11) * 0.9 + drift * (0.4 + 0.6 * u));
				return <circle key={i} cx={x0 + (x1 - x0) * u} cy={y0 + (y1 - y0) * v} r={2.2 + 1.6 * hash01(i + seed)} fill={color} stroke={edge} strokeWidth={0.8} />;
			})}
		</g>
	);
};
