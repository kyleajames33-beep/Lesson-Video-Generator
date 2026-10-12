import React from 'react';
import {useCurrentFrame} from 'remotion';
import lesson from '../../../../docs/production/claude-pm/lessons/b2c/measured/lesson.json';
import {AMBER, AMBER_INK, DrawPath, Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, PAPER_DEEP, Plate, prog} from '../../kit';
import type {CueScene} from '../../cues';
import * as A from './assets';

export {
	AMBER, AMBER_INK, Arrow, BLUE, Body, Card, Chip, CORAL, DrawPath, dim, Enter, FONT_DISPLAY, FONT_HAND, GREEN, HandText, Heading, INK,
	INK_SOFT, Label, Overlay, prog, RED, Tag, Underline, W, H,
} from '../bio-m5-b01/shared';
export {Scribble, Note, EggDot, SpermDot} from '../bio-m5-b02a/shared';

export const S = (id: string): CueScene & {durationInFrames: number} => {
	const s = (lesson.scenes as unknown as (CueScene & {durationInFrames: number})[]).find(x => x.id === id);
	if (!s) throw new Error(`scene ${id} missing`);
	return s;
};

// ---------- plates ----------
// Alpha boxes [x, y, w, h] measured with PIL (alpha > 20). Canvas 1800x1200. Each sequence shares one union box so its plates overlay exactly.
export type PDef = {src: string; nat: [number, number]; box: [number, number, number, number]};
const NAT: [number, number] = [1800, 1200];
const FIS: [number, number, number, number] = [233, 449, 1334, 323];
const BUD: [number, number, number, number] = [498, 127, 885, 875];
const AMO: [number, number, number, number] = [275, 218, 1270, 663];
export const PL: Record<string, PDef> = {
	fis1: {src: A.FISSION[0], nat: NAT, box: FIS}, fis2: {src: A.FISSION[1], nat: NAT, box: FIS}, fis3: {src: A.FISSION[2], nat: NAT, box: FIS},
	bud1: {src: A.BUDDING[0], nat: NAT, box: BUD}, bud2: {src: A.BUDDING[1], nat: NAT, box: BUD}, bud3: {src: A.BUDDING[2], nat: NAT, box: BUD},
	amo1: {src: A.AMOEBA[0], nat: NAT, box: AMO}, amo2: {src: A.AMOEBA[1], nat: NAT, box: AMO}, amo3: {src: A.AMOEBA[2], nat: NAT, box: AMO},
	para: {src: A.PARAMECIUM, nat: NAT, box: [193, 310, 1440, 550]},
	acin: {src: A.ACINETA, nat: NAT, box: [663, 110, 475, 958]},
	milk: {src: A.MILK, nat: NAT, box: [493, 228, 853, 756]},
	// single cells cropped from the fission plates (plate 1 cell; plate 3 left and right cell)
	cell1: {src: A.FISSION[0], nat: NAT, box: [574, 449, 654, 323]},
	cellL: {src: A.FISSION[2], nat: NAT, box: [233, 449, 654, 323]},
	cellR: {src: A.FISSION[2], nat: NAT, box: [912, 449, 654, 323]},
	yeast1: {src: A.BUDDING[0], nat: NAT, box: [498, 263, 506, 739]},
};
export const pH = (a: PDef, w: number) => (w * a.box[3]) / a.box[2];
/** Map canvas coordinates of a plate placed at x,y with width w to screen coordinates. */
export const pm = (a: PDef, x: number, y: number, w: number) => (cx: number, cy: number): [number, number] => [x + ((cx - a.box[0]) * w) / a.box[2], y + ((cy - a.box[1]) * w) / a.box[2]];

/** A painted plate (crop of its alpha box), or a labelled dashed stand-in when the file is not in HAVE. */
export const PArt: React.FC<{a: PDef; x: number; y: number; w: number; o?: number; style?: React.CSSProperties}> = ({a, x, y, w, o = 1, style}) => {
	if (!A.HAVE.has(a.src)) {
		return (
			<div style={{position: 'absolute', left: x, top: y, width: w, height: pH(a, w), border: `4px dashed ${INK_SOFT}`, borderRadius: 24, opacity: o, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_HAND, fontSize: 40, color: INK_SOFT, ...style}}>plate not delivered</div>
		);
	}
	return <Plate src={a.src} natural={a.nat} crop={a.box} width={w} style={{left: x, top: y, opacity: o, ...style}} />;
};

/** Crossfading sequence of plates on one placement. `at[k]` is the frame the (k+1)th plate starts to fade in. */
export const PSeq: React.FC<{arts: PDef[]; x: number; y: number; w: number; at: number[]; dur?: number; o?: number}> = ({arts, x, y, w, at, dur = 22, o = 1}) => {
	const f = useCurrentFrame();
	return (
		<>
			{arts.map((a, i) => {
				const inn = i === 0 ? 1 : prog(f, at[i - 1], dur);
				const out = i < arts.length - 1 ? 1 - prog(f, at[i], dur) : 1;
				return <PArt key={i} a={a} x={x} y={y} w={w} o={inn * out * o} />;
			})}
		</>
	);
};

// ---------- colours ----------
export const COPY = '#e08a1e';
export const SHARE = '#2a9d8f';
export const SPLIT = '#c4432f';
export const LOOP = '#d97a1a';
export const CELL_FILL = '#c9d98e';
export const CELL_LINE = '#6a8a2a';
export const YEAST = '#e9b44c';
export const POND = '#e3f0ec';

// ---------- coded drawings ----------
/** Coded DNA loop in the colours of the painted bacterium. */
export const Loop: React.FC<{x: number; y: number; s?: number; o?: number; rot?: number; ring?: number}> = ({x, y, s = 1, o = 1, rot = 0, ring = 0}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`} opacity={o}>
		{ring > 0 ? <circle r={92} fill="none" stroke={AMBER} strokeWidth={8} opacity={ring} /> : null}
		<ellipse rx={64} ry={44} fill="none" stroke="#a9560e" strokeWidth={9} />
		<ellipse rx={64} ry={44} fill="none" stroke="#f0a53a" strokeWidth={5} />
		<ellipse rx={44} ry={62} fill="none" stroke="#a9560e" strokeWidth={9} transform="rotate(28)" />
		<ellipse rx={44} ry={62} fill="none" stroke="#f6bd5a" strokeWidth={5} transform="rotate(28)" />
	</g>
);

export const Nucleus: React.FC<{x: number; y: number; r?: number; o?: number}> = ({x, y, r = 40, o = 1}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill="#b48ad2" stroke="#6c3f92" strokeWidth={5} opacity={0.92} />
		<circle cx={x} cy={y} r={r * 0.4} fill="#6c3f92" opacity={0.7} />
	</g>
);

export const Cross: React.FC<{x: number; y: number; s?: number; at: number; color?: string; width?: number}> = ({x, y, s = 1, at, color = '#c4432f', width = 7}) => (
	<g>
		<DrawPath d={`M${x - 22 * s},${y - 22 * s} L${x + 22 * s},${y + 22 * s}`} at={at} dur={8} color={color} width={width} />
		<DrawPath d={`M${x + 22 * s},${y - 22 * s} L${x - 22 * s},${y + 22 * s}`} at={at + 6} dur={8} color={color} width={width} />
	</g>
);

export const Tick: React.FC<{x: number; y: number; at: number; s?: number; color?: string}> = ({x, y, at, s = 1, color = '#2f8a5b'}) => (
	<DrawPath d={`M${x - 20 * s},${y} L${x - 5 * s},${y + 17 * s} L${x + 22 * s},${y - 20 * s}`} at={at} dur={12} color={color} width={8} />
);

export const Fade: React.FC<{at: number; out?: number; children: React.ReactNode; dur?: number}> = ({at, out, children, dur = 12}) => {
	const f = useCurrentFrame();
	return <g opacity={prog(f, at, dur) * (out === undefined ? 1 : 1 - prog(f, out, dur))}>{children}</g>;
};
export const FadeDiv: React.FC<{at: number; out?: number; children: React.ReactNode; style?: React.CSSProperties; dur?: number}> = ({at, out, children, style, dur = 14}) => {
	const f = useCurrentFrame();
	return <div style={{position: 'absolute', inset: 0, opacity: prog(f, at, dur) * (out === undefined ? 1 : 1 - prog(f, out, dur)), pointerEvents: 'none', ...style}}>{children}</div>;
};

/** Point at fraction t (0..1) along a polyline. */
export const along = (pts: [number, number][], t: number): [number, number] => {
	const lens: number[] = [];
	let total = 0;
	for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); lens.push(l); total += l; }
	let d = Math.max(0, Math.min(1, t)) * total;
	for (let i = 0; i < lens.length; i++) {
		if (d <= lens[i] || i === lens.length - 1) { const u = lens[i] ? Math.min(1, d / lens[i]) : 0; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u]; }
		d -= lens[i];
	}
	return pts[0];
};
export const pathOf = (pts: [number, number][]) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

/** Splits its children into a left and right half at screen x `cut` and slides them apart by `d` px. */
export const Split: React.FC<{cut: number; d: number; children: React.ReactNode; leftStyle?: React.CSSProperties; rightStyle?: React.CSSProperties}> = ({cut, d, children, leftStyle, rightStyle}) => (
	<>
		<div style={{position: 'absolute', inset: 0, clipPath: `polygon(-2000px 0, ${cut}px 0, ${cut}px 2000px, -2000px 2000px)`, transform: `translateX(${-d}px)`, ...leftStyle}}>{children}</div>
		<div style={{position: 'absolute', inset: 0, clipPath: `polygon(${cut}px 0, 4000px 0, 4000px 2000px, ${cut}px 2000px)`, transform: `translateX(${d}px)`, ...rightStyle}}>{children}</div>
	</>
);

export const Wall: React.FC<{x1: number; y1: number; x2: number; y2: number; at: number; dur?: number; width?: number; color?: string}> = ({x1, y1, x2, y2, at, dur = 22, width = 10, color = '#6f7f2a'}) => (
	<DrawPath d={`M${x1},${y1} L${x2},${y2}`} at={at} dur={dur} color={color} width={width} />
);

// ---------- copy, share, split strip ----------
type StepKind = 'copy' | 'share' | 'split';
export const StepIcon: React.FC<{k: StepKind; x: number; y: number; s?: number}> = ({k, x, y, s = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		{k === 'copy' ? (
			<>
				<ellipse cx={-10} cy={0} rx={14} ry={10} fill="none" stroke={COPY} strokeWidth={5} />
				<ellipse cx={14} cy={0} rx={14} ry={10} fill="none" stroke={COPY} strokeWidth={5} />
			</>
		) : null}
		{k === 'share' ? (
			<>
				<path d="M-4,0 L-26,0 M-26,0 L-17,-8 M-26,0 L-17,8" stroke={SHARE} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4,0 L26,0 M26,0 L17,-8 M26,0 L17,8" stroke={SHARE} strokeWidth={5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			</>
		) : null}
		{k === 'split' ? (
			<path d="M-24,-10 C-24,-18 -4,-18 -4,-10 L-4,10 C-4,18 -24,18 -24,10Z M4,-10 C4,-18 24,-18 24,-10 L24,10 C24,18 4,18 4,10Z" fill="none" stroke={SPLIT} strokeWidth={5} strokeLinejoin="round" />
		) : null}
	</g>
);
export const STEP_COL: Record<StepKind, string> = {copy: COPY, share: SHARE, split: SPLIT};
const STEP_TXT: Record<StepKind, string> = {copy: '1 copy', share: '2 share', split: '3 split'};
const lit = (f: number, toggles: number[]) => toggles.filter(t => f >= t).length % 2 === 1;
/** The numbered copy, share, split rail. `on[k]` lists toggle frames for chip k: lit while an odd number have passed. */
export const Strip: React.FC<{x?: number; y?: number; on: number[][]; enter?: number; cross?: {i: number; at: number}; scale?: number}> = ({x = 96, y = 884, on, enter = -30, cross, scale = 1}) => {
	const f = useCurrentFrame();
	const ks: StepKind[] = ['copy', 'share', 'split'];
	const p = prog(f, enter, 14);
	return (
		<div style={{position: 'absolute', left: x, top: y, display: 'flex', gap: 20 * scale, opacity: p, transform: `translateY(${(1 - p) * 16}px)`}}>
			{ks.map((k, i) => {
				const isOn = lit(f, on[i] ?? []);
				const col = STEP_COL[k];
				const crossP = cross && cross.i === i ? prog(f, cross.at, 10) : 0;
				return (
					<div key={k} style={{position: 'relative', width: 246 * scale, height: 66 * scale, borderRadius: 999, border: `4px solid ${isOn ? col : '#cfc6b4'}`, background: isOn ? '#fffdf8' : '#f1ebdd', display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 12 * scale, boxSizing: 'border-box', opacity: isOn ? 1 : 0.6, boxShadow: isOn ? '0 8px 18px rgba(60,45,20,0.10)' : undefined}}>
						<svg width={60 * scale} height={52 * scale} viewBox="-34 -26 68 52"><StepIcon k={k} x={0} y={0} s={0.95} /></svg>
						<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46 * scale, color: isOn ? col : INK_SOFT, lineHeight: 1}}>{STEP_TXT[k]}</span>
						{crossP > 0 ? <svg width={246 * scale} height={66 * scale} viewBox="0 0 246 66" style={{position: 'absolute', left: -4, top: -4, opacity: crossP}}><path d="M24,10 L222,54 M222,10 L24,54" stroke="#c4432f" strokeWidth={7} strokeLinecap="round" /></svg> : null}
					</div>
				);
			})}
		</div>
	);
};

// ---------- doubling crowd ----------
const gridPos = (n: number, i: number, cols: number, sp: number): [number, number] => {
	const rows = Math.ceil(n / cols);
	const row = Math.floor(i / cols);
	const rc = row === rows - 1 ? n - (rows - 1) * cols : Math.min(n, cols);
	const col = i % cols;
	return [(col - (rc - 1) / 2) * sp, (row - (rows - 1) / 2) * sp];
};
export const CellDot: React.FC<{x: number; y: number; r: number; o?: number; bead?: boolean; dead?: boolean}> = ({x, y, r, o = 1, bead, dead}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={dead ? '#d8d2c4' : CELL_FILL} stroke={dead ? '#a89c8a' : CELL_LINE} strokeWidth={4} />
		<ellipse cx={x} cy={y} rx={r * 0.5} ry={r * 0.36} fill="none" stroke={dead ? '#a89c8a' : LOOP} strokeWidth={4} />
		{bead ? <circle cx={x + r * 0.55} cy={y - r * 0.5} r={r * 0.26} fill="#7b4fb3" stroke="#fff" strokeWidth={2} /> : null}
	</g>
);
/** Crowd of dots; `stageAt[k]` is the frame the crowd doubles from 2^k to 2^(k+1). */
export const Crowd: React.FC<{cx: number; cy: number; stageAt: number[]; r?: number; sp?: number; cols?: number; o?: number}> = ({cx, cy, stageAt, r = 28, sp = 84, cols = 8, o = 1}) => {
	const f = useCurrentFrame();
	const s = stageAt.filter(t => f >= t).length;
	const n = 2 ** s;
	const p = s === 0 ? 1 : prog(f, stageAt[s - 1], 22);
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const [tx, ty] = gridPos(n, i, cols, sp);
				const [fx, fy] = s === 0 ? [tx, ty] : gridPos(n / 2, i >> 1, cols, sp);
				const x = cx + fx + (tx - fx) * p;
				const y = cy + fy + (ty - fy) * p;
				const pulse = s === 0 ? 1 : 1 + 0.22 * Math.sin(Math.PI * p);
				return <CellDot key={i} x={x} y={y} r={r * pulse} />;
			})}
		</g>
	);
};

export const Clock: React.FC<{x: number; y: number; r?: number; deg: number; o?: number}> = ({x, y, r = 70, deg, o = 1}) => (
	<g transform={`translate(${x},${y})`} opacity={o}>
		<circle r={r + 12} fill="#fffdf8" stroke="rgba(0,0,0,0.08)" strokeWidth={2} />
		<circle r={r} fill="none" stroke={INK_SOFT} strokeWidth={6} />
		{Array.from({length: 12}, (_, i) => <line key={i} x1={0} y1={-r + 6} x2={0} y2={-r + (i % 3 === 0 ? 20 : 13)} stroke={INK_SOFT} strokeWidth={4} transform={`rotate(${i * 30})`} />)}
		<line x1={0} y1={0} x2={0} y2={-r * 0.78} stroke={SPLIT} strokeWidth={7} strokeLinecap="round" transform={`rotate(${deg})`} />
		<circle r={7} fill={INK} />
	</g>
);

// ---------- text helpers ----------
export const Line: React.FC<{at: number; out?: number; x: number; y: number; w?: number; size?: number; color?: string; weight?: number; hand?: boolean; children: React.ReactNode}> = ({at, out, x, y, w, size = 36, color = INK, weight = 600, hand, children}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{fontFamily: hand ? FONT_HAND : FONT_DISPLAY, fontSize: size, fontWeight: hand ? 700 : weight, color, lineHeight: hand ? 1.05 : 1.22, whiteSpace: w ? undefined : 'nowrap'}}>{children}</div>
	</Enter>
);

export const Pill: React.FC<{at: number; out?: number; x: number; y: number; color?: string; size?: number; children: React.ReactNode; rot?: number}> = ({at, out, x, y, color = AMBER_INK, size = 42, children, rot = 0}) => (
	<Enter at={at} out={out} style={{position: 'absolute', left: x, top: y}}>
		<div style={{display: 'inline-block', transform: `rotate(${rot}deg)`, fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color, background: '#fffdf8', border: `3px solid ${color === AMBER_INK ? AMBER : color}`, borderRadius: 18, padding: '2px 22px 6px', whiteSpace: 'nowrap', boxShadow: '0 8px 18px rgba(60,45,20,0.08)'}}>{children}</div>
	</Enter>
);

export const Stamp: React.FC<{at: number; out?: number; x: number; y: number; text: string; color?: string; size?: number; rot?: number}> = ({at, out, x, y, text, color = '#c4432f', size = 34, rot = -4}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	const pop = p < 1 ? 1.25 - 0.25 * p : 1;
	const o = out === undefined ? 1 : 1 - prog(f, out, 12);
	return <div style={{position: 'absolute', left: x, top: y, transform: `rotate(${rot}deg) scale(${pop})`, opacity: p * o, fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, letterSpacing: 2, color, border: `5px solid ${color}`, borderRadius: 14, padding: '4px 18px', background: '#fffdf8', whiteSpace: 'nowrap'}}>{text}</div>;
};

/** Crossed-out wrong-answer chip. */
export const WrongChip: React.FC<{at: number; x: number; y: number; text: string; size?: number}> = ({at, x, y, text, size = 44}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	const strike = prog(f, at + 14, 14);
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: p, transform: `translateY(${(1 - p) * 14}px)`}}>
			<span style={{position: 'relative', display: 'inline-block', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color: INK_SOFT, background: '#fffdf8', border: `3px solid ${PAPER_DEEP}`, borderRadius: 999, padding: '0 24px 4px', whiteSpace: 'nowrap'}}>
				{text}
				<span style={{position: 'absolute', left: 8, right: 8, top: '52%', height: 5, background: '#c4432f', borderRadius: 3, transform: `scaleX(${strike})`, transformOrigin: 'left'}} />
			</span>
		</div>
	);
};

/** Coded counter chip: a label and n little cells. */
export const CountChip: React.FC<{at: number; x: number; y: number; label: string; n: number; color?: string}> = ({at, x, y, label, n, color = INK}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14);
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: p, transform: `translateY(${(1 - p) * 14}px)`, display: 'flex', alignItems: 'center', gap: 16, background: '#fffdf8', border: `4px solid ${color}`, borderRadius: 24, padding: '8px 24px'}}>
			<span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 54, color, lineHeight: 1}}>{label}</span>
			<svg width={n * 56 + 8} height={44} viewBox={`0 0 ${n * 56 + 8} 44`}>{Array.from({length: n}, (_, i) => <rect key={i} x={4 + i * 56} y={8} width={48} height={28} rx={14} fill={CELL_FILL} stroke={CELL_LINE} strokeWidth={4} />)}</svg>
		</div>
	);
};
