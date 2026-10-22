// M6 G02 coded diagrams (abstract only; organisms are painted plates): an insect glyph cluster that grows and
// shrinks, a refuge strip of ten farm squares, a gene-pool ring cluster (founder colours plus returning colours), the
// nuclear-transfer strip (a frozen cell's nucleus into an emptied domestic egg), the 100-embryo dot grid, the three
// bearer icons (a hospital-bed outline with no figure, a ring of dots), a four-rung evidence ladder, the viral-copy
// strip, the b19 test chips and the hook's card thumbnails. B13 and B19 parts are imported, never edited.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, CARD, DrawPath, GREY, GREY_FILL, GREY_INK, INK, INK_SOFT, Plate, T, TEAL, clamp01, lerp, plateW, prog, smooth, vis} from '../skills-shared';
import type {PDef} from '../skills-shared';
import {InsectG} from '../bio-m6-b13/parts';
import {Dot, TestIcon} from '../bio-m6-b19/parts';
import type {DotK, TestK} from '../bio-m6-b19/parts';

export {InsectG, Dot, TestIcon};
export type {DotK, TestK};

// ---------- insect cluster ----------
const INSECT_PTS: [number, number][] = [[0, 0], [70, -30], [-60, -40], [40, 50], [-80, 30], [120, 20], [-20, -90], [100, -80], [-120, -20], [10, 100], [150, 70], [-140, 80]];
/** Insect glyphs: `n` (fractional) of them shown around (x, y); `dashed` draws a dashed outline (gain at risk). */
export const InsectCluster: React.FC<{x: number; y: number; n: number; o?: number; dashed?: number; s?: number}> = ({x, y, n, o = 1, dashed = 0, s = 0.8}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{dashed > 0.01 ? <ellipse cx={x} cy={y} rx={190} ry={140} fill="none" stroke={GREY} strokeWidth={3} strokeDasharray="10 8" opacity={dashed} /> : null}
			{INSECT_PTS.map(([dx, dy], i) => {
				const v = clamp01(n - i);
				return v > 0.01 ? <InsectG key={i} x={x + dx} y={y + dy} s={s} o={v} color={i % 3 === 0 ? '#6b7f4a' : INK_SOFT} /> : null;
			})}
		</g>
	);
};

// ---------- refuge squares ----------
export const RefugeSquares: React.FC<{x: number; y: number; p: number; shaded?: number; o?: number}> = ({x, y, p, shaded = 3, o = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: 10}, (_, i) => {
				const v = clamp01(p * 10 - i);
				return <rect key={i} x={x + (i % 5) * 44} y={y + Math.floor(i / 5) * 44} width={38} height={38} rx={6} fill={i < shaded ? '#f7f0dc' : '#e6efd8'} stroke={i < shaded ? '#b7a65f' : '#7c9a5a'} strokeWidth={2} strokeDasharray={i < shaded ? '5 4' : undefined} opacity={v} />;
			})}
		</g>
	);
};

// ---------- gene pool ring clusters ----------
export const POOL_C = ['#c4632e', '#3d7fb0', '#e2b13b', '#5e9c5a', '#8e6bb3', '#d0708f', '#4aa9a5', '#9a7b54', '#e08a3c', '#2f5f8f', '#b5483a', '#7da33a', '#c9962e', '#6b4a8c', '#3f8f6f', '#d4a5c0', '#8aa0b8', '#a8665a'];
/** A cluster of allele rings: `cols` colour indices; each ring appears at its own frame (`at[i]`, default -100). */
export const Pool: React.FC<{x: number; y: number; cols: number[]; at?: number[]; per?: number; o?: number; glow?: (i: number) => number; r?: number; grey?: number}> = ({x, y, cols, at = [], per = 7, o = 1, glow, r = 12, grey = 0}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{cols.map((c, i) => {
				const a = at[i] ?? -100;
				const v = prog(f, a, 10);
				if (v <= 0.01) return null;
				const px = x + (i % per) * (r * 2.7), py = y + Math.floor(i / per) * (r * 2.7) - (1 - smooth(prog(f, a, 14))) * 40;
				const g = glow ? glow(i) : 0;
				return (
					<g key={i} opacity={v}>
						{g > 0.01 ? <circle cx={px} cy={py} r={r + 8} fill={AMBER} opacity={0.35 * g} /> : null}
						<circle cx={px} cy={py} r={r} fill="none" stroke={grey > 0.5 ? '#b9b4ab' : POOL_C[c % POOL_C.length]} strokeWidth={6} />
					</g>
				);
			})}
		</g>
	);
};

// ---------- nuclear transfer strip ----------
/** Frozen cell (with nucleus) -> its nucleus moves into an emptied domestic egg -> embryo; `t` 0..1. */
export const NTStrip: React.FC<{x: number; y: number; t: number; o?: number}> = ({x, y, t, o = 1}) => {
	if (o <= 0.01) return null;
	const mv = smooth(clamp01(t * 1.6));
	const nx = lerp(x + 40, x + 240, mv);
	return (
		<g opacity={o}>
			<circle cx={x + 40} cy={y} r={40} fill="#e8f1f7" stroke="#7d93a6" strokeWidth={3} />
			<T x={x + 40} y={y + 66} text="frozen cell" size={18} color={GREY_INK} weight={700} anchor="middle" />
			<circle cx={x + 240} cy={y} r={56} fill="#fbf1e2" stroke="#b38a5a" strokeWidth={3} />
			<T x={x + 240} y={y + 82} text="domestic egg, nucleus removed" size={18} color={GREY_INK} weight={700} anchor="middle" />
			<circle cx={nx} cy={y} r={16} fill="#8e6bb3" stroke="#5b3f7a" strokeWidth={2} />
			{t > 0.7 ? <g opacity={prog(t * 100, 70, 20)}>
				<path d={`M${x + 310},${y} l40,0 m-10,-8 l10,8 l-10,8`} fill="none" stroke={INK_SOFT} strokeWidth={3} />
				<circle cx={x + 400} cy={y} r={30} fill="#fbf1e2" stroke="#b38a5a" strokeWidth={3} />
				<circle cx={x + 400} cy={y} r={11} fill="#8e6bb3" />
				<T x={x + 400} y={y + 56} text="clone" size={18} color={GREY_INK} weight={700} anchor="middle" />
			</g> : null}
		</g>
	);
};

// ---------- embryo grid ----------
export const EmbryoGrid: React.FC<{x: number; y: number; p: number; amber: number; o?: number}> = ({x, y, p, amber, o = 1}) => {
	if (o <= 0.01) return null;
	return (
		<g opacity={o}>
			{Array.from({length: 100}, (_, i) => {
				const v = clamp01(p * 100 - i);
				if (v <= 0.01) return null;
				const lit = (i === 23 || i === 71) && amber > 0.01;
				return <circle key={i} cx={x + (i % 10) * 24} cy={y + Math.floor(i / 10) * 24} r={8} fill={lit ? AMBER : '#dedad2'} stroke={lit ? AMBER_INK : GREY} strokeWidth={1.5} opacity={v} />;
			})}
		</g>
	);
};

// ---------- bearer icons (no people) ----------
export const BedOutline: React.FC<{x: number; y: number; s?: number; o?: number}> = ({x, y, s = 1, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o} transform={`translate(${x},${y}) scale(${s})`} fill="none" stroke={INK_SOFT} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
		<path d="M-50,10 L50,10 L50,-6 L-20,-6 L-20,-14 L-50,-14 Z" fill={CARD} />
		<path d="M-50,-24 L-50,28 M50,10 L50,28" />
		<rect x={-46} y={-30} width={22} height={14} rx={5} fill={CARD} />
	</g>
));
export const DotRing: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 34, o = 1}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		{Array.from({length: 9}, (_, i) => {
			const a = (i / 9) * Math.PI * 2;
			return <circle key={i} cx={x + Math.cos(a) * r} cy={y + Math.sin(a) * r} r={7} fill={CARD} stroke={INK_SOFT} strokeWidth={2.5} />;
		})}
	</g>
));

// ---------- the evidence ladder (b11 style, four rungs) ----------
export const RUNGS4 = ['idea', 'lab', 'first patients', 'proven'];
export const Ladder4: React.FC<{x: number; y: number; lit: number; o?: number; notYet?: number}> = ({x, y, lit, o = 1, notYet = 0}) => {
	if (o <= 0.01) return null;
	const rh = 62;
	return (
		<g opacity={o}>
			<line x1={x} y1={y - 3 * rh - 20} x2={x} y2={y + 20} stroke={GREY} strokeWidth={4} strokeLinecap="round" />
			<line x1={x + 70} y1={y - 3 * rh - 20} x2={x + 70} y2={y + 20} stroke={GREY} strokeWidth={4} strokeLinecap="round" />
			{RUNGS4.map((t, k) => {
				const yy = y - k * rh;
				const on = k <= lit;
				return (
					<g key={t}>
						<line x1={x} x2={x + 70} y1={yy} y2={yy} stroke={k === lit ? AMBER : on ? '#d9b26a' : GREY} strokeWidth={k === lit ? 7 : 4} strokeLinecap="round" />
						<T x={x + 90} y={yy + 9} text={t} size={24} color={k === lit ? INK : GREY_INK} weight={700} />
						{k === 3 && notYet > 0.01 ? <T x={x + 200} y={yy + 9} text="not yet" size={24} color={GREY_INK} hand weight={700} o={notYet} /> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- the viral-copy strip ----------
/** A coded pig DNA strip with grey virus-copy blocks; each block takes a small cross from `cross` (staggered). */
export const ViralCopyStrip: React.FC<{x: number; y: number; w: number; at: number; cross: number}> = ({x, y, w, at, cross}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const blocks = [0.12, 0.34, 0.55, 0.78];
	return (
		<g opacity={o}>
			<rect x={x} y={y - 9} width={w} height={18} rx={9} fill="#f2d9cf" stroke="#b9786a" strokeWidth={2} />
			{blocks.map((b, i) => (
				<g key={i}>
					<rect x={x + w * b} y={y - 13} width={w * 0.1} height={26} rx={6} fill="#c9cdd1" stroke={GREY} strokeWidth={2} />
					{f >= cross + i * 6 ? <DrawPath d={`M${x + w * b + 4},${y - 16} L${x + w * (b + 0.1) - 4},${y + 16} M${x + w * (b + 0.1) - 4},${y - 16} L${x + w * b + 4},${y + 16}`} at={cross + i * 6} dur={8} color={GREY_INK} width={3.5} /> : null}
				</g>
			))}
		</g>
	);
};

// ---------- b19 test chips ----------
const TESTS3 = ['Better than what?', 'Shown how?', 'Who gets it?'];
export const TestChip: React.FC<{k: TestK; x: number; y: number; w?: number; fill?: string; dot?: DotK; fillAt?: number; at: number; o?: number}> = ({k, x, y, w = 470, fill, dot, fillAt = 1e9, at, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at) * o;
	if (v <= 0.01) return null;
	const fo = prog(f, fillAt, 12);
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={fill && fo > 0.01 ? 96 : 52} rx={14} fill={CARD} stroke={fo > 0.5 ? AMBER : 'rgba(60,45,20,0.22)'} strokeWidth={2.5} />
			<TestIcon k={k} x={x + 32} y={y + 26} s={0.6} />
			<T x={x + 64} y={y + 35} text={TESTS3[k]} size={24} color={GREY_INK} weight={700} />
			{fill && fo > 0.01 ? <T x={x + 22} y={y + 80} text={fill} size={28} color={INK} hand weight={700} o={fo} /> : null}
			{dot && fo > 0.01 ? <Dot x={x + w - 30} y={y + 70} k={dot} r={13} o={fo} /> : null}
		</g>
	);
};

// ---------- hook thumbnails ----------
export const CardThumb: React.FC<{x: number; y: number; n: number; p: PDef; at: number; o?: number; h?: number}> = ({x, y, n, p, at, o = 1, h = 130}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 14) * o;
	if (v <= 0.01) return null;
	const w = 250;
	const rot = (n - 2) * 4 * (1 - 0.6 * smooth(prog(f, at, 20)));
	const pw = plateW(p, h);
	return (
		<g opacity={v} transform={`rotate(${rot} ${x + w / 2} ${y + 110})`}>
			<rect x={x} y={y} width={w} height={220} rx={14} fill={CARD} stroke="rgba(60,45,20,0.24)" strokeWidth={2.5} />
			<T x={x + 18} y={y + 38} text={`Q${n}`} size={30} color={AMBER_INK} weight={800} />
			<Plate p={p} x={x + (w - Math.min(pw, w - 30)) / 2} y={y + 60} h={Math.min(h, ((w - 30) / pw) * h)} />
		</g>
	);
};
export {GREY_FILL, TEAL, INK};

// ---------- the crossed classic mistake (grey chip, grey scribble cross; wraps at maxW) ----------
export const CrossedGrey: React.FC<{x: number; y: number; text: string; at: number; cross: number; size?: number; maxW?: number}> = ({x, y, text, at, cross, size = 30, maxW = 480}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, undefined, 10);
	if (v <= 0.01) return null;
	// Widths are estimated generously (0.5 em per character) so the chip never clips the hand font.
	const cw = size * 0.5;
	const lines: string[] = [];
	let cur = '';
	for (const wd of text.split(' ')) {
		const t = cur ? cur + ' ' + wd : wd;
		if (t.length * cw > maxW - size * 1.2 && cur) { lines.push(cur); cur = wd; } else cur = t;
	}
	if (cur) lines.push(cur);
	const w = Math.max(...lines.map(l => l.length)) * cw + size * 1.2, lh = size * 1.18, h = lines.length * lh + size * 0.62;
	return (
		<g opacity={v}>
			<rect x={x} y={y} width={w} height={h} rx={Math.min(h / 2, 26)} fill={GREY_FILL} stroke={GREY} strokeWidth={2.5} />
			{lines.map((t, i) => <T key={i} x={x + size * 0.55} y={y + size * 0.31 + size * 0.82 + i * lh} text={t} size={size} color={GREY_INK} hand weight={700} />)}
			{f >= cross ? <DrawPath d={scribbleEllipseG(x + w / 2, y + h / 2, w / 2 + 12, h / 2 + 10)} at={cross} dur={14} color={GREY} width={4.5} /> : null}
			{f >= cross + 8 ? <DrawPath d={`M${x + 14},${y + h - 8} L${x + w - 14},${y + 8}`} at={cross + 8} dur={9} color={GREY} width={6} /> : null}
		</g>
	);
};
const scribbleEllipseG = (cx: number, cy: number, rx: number, ry: number) => {
	let d = '';
	for (let i = 0; i <= 80; i++) {
		const a = (i / 80) * Math.PI * 2 * 1.12 - 0.4;
		const k = 1 + 0.05 * Math.sin(i * 1.7);
		d += `${i ? 'L' : 'M'}${(cx + Math.cos(a) * rx * k).toFixed(1)},${(cy + Math.sin(a) * ry * k).toFixed(1)} `;
	}
	return d;
};
/** A small coded egg glyph (domestic egg) and a clone glyph (embryo). */
export const EggG: React.FC<{x: number; y: number; r?: number; o?: number; nucleus?: string}> = ({x, y, r = 30, o = 1, nucleus}) => (o <= 0.01 ? null : (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#fbf1e2" stroke="#b38a5a" strokeWidth={3} />
		{nucleus ? <circle cx={x} cy={y} r={r * 0.36} fill={nucleus} /> : null}
	</g>
));
