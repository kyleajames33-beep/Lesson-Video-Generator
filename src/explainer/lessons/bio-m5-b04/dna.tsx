// Reusable coded DNA pieces for B4: base tiles with jigsaw outlines, sugar-phosphate backbones, strand rows,
// ladders with hydrogen bonds that unzip and copy, a twisting helix, a single nucleotide, enzyme icons.
// Everything is frame-driven SVG in 1920 x 1080 screen coordinates.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, prog} from '../../kit';

// ---------- colours ----------
/** Original strands. */
export const ORIG = '#1f6fb2';
/** New strands. */
export const NEWC = '#2f8a5b';
/** Neutral backbone before a strand is called old or new. */
export const NEUT = '#8a7a63';
/** Pair families: A coral and T sand (warm), C plum and G lilac (purple). */
export const FILL: Record<string, string> = {A: '#f4b5a4', T: '#f2d99d', C: '#d3a2dc', G: '#adb6ee'};
export const LINE: Record<string, string> = {A: '#b4533e', T: '#a68220', C: '#8b4f9b', G: '#4e5bb2'};
export const partner = (l: string) => ({A: 'T', T: 'A', C: 'G', G: 'C'} as Record<string, string>)[l] ?? '?';
export const bondN = (l: string) => (l === 'A' || l === 'T' ? 2 : 3);
/** Mix two #rrggbb colours (t 0..1). */
export const mix = (a: string, b: string, t: number) => {
	const pa = [1, 3, 5].map(i => parseInt(a.slice(i, i + 2), 16)), pb = [1, 3, 5].map(i => parseInt(b.slice(i, i + 2), 16));
	const k = Math.max(0, Math.min(1, t));
	return '#' + pa.map((v, i) => Math.round(v + (pb[i] - v) * k).toString(16).padStart(2, '0')).join('');
};
/** 0..1..0 bump around frame `at` (for pulses). */
export const pulse = (f: number, at: number, len = 26) => {
	const t = (f - at) / len;
	return t < 0 || t > 1 ? 0 : Math.sin(Math.PI * t);
};

// ---------- base tile ----------
const FEAT = 13;
/** Centred tile outline: body hangs from the top edge, pairing face at the bottom. A and C bump out, T and G are notched. */
export const tilePath = (l: string, w: number, h: number) => {
	const x2 = w / 2, y2 = h / 2, fw = w * 0.2, r = 11;
	const bump = l === 'A' || l === 'C';
	const tri = l === 'A' || l === 'T';
	const sg = bump ? 1 : -1;
	const feat = tri ? `L${fw},${y2} L0,${y2 + sg * FEAT} L${-fw},${y2}` : `L${fw},${y2} C${fw},${y2 + sg * FEAT * 1.35} ${-fw},${y2 + sg * FEAT * 1.35} ${-fw},${y2}`;
	return `M${-x2 + r},${-y2} L${x2 - r},${-y2} Q${x2},${-y2} ${x2},${-y2 + r} L${x2},${y2 - r} Q${x2},${y2} ${x2 - r},${y2} ${feat} L${-x2 + r},${y2} Q${-x2},${y2} ${-x2},${y2 - r} L${-x2},${-y2 + r} Q${-x2},${-y2} ${-x2 + r},${-y2} Z`;
};

export type TileSpec = {l: string; o?: number; dx?: number; dy?: number; s?: number; rot?: number; tone?: 'grey' | 'ghost' | 'amber'; glow?: number};

/** A base tile attached at x,y (the centre of its backbone edge). face 'down' hangs below, 'up' rises above. */
export const Tile: React.FC<{x: number; y: number; face: 'down' | 'up'; w?: number; h?: number} & TileSpec> = ({x, y, face, w = 96, h = 72, l, o = 1, dx = 0, dy = 0, s = 1, rot = 0, tone, glow = 0}) => {
	const cy = y + (face === 'down' ? h / 2 : -h / 2);
	const fill = tone === 'grey' ? '#d3d6da' : tone === 'ghost' ? 'none' : FILL[l] ?? '#ddd';
	const stroke = tone === 'grey' ? GREYL : tone === 'ghost' ? INK_SOFT : tone === 'amber' ? AMBER : LINE[l] ?? INK;
	const sw = tone === 'amber' ? 7 : 4;
	const fs = h * 0.62;
	return (
		<g transform={`translate(${x + dx},${cy + dy}) rotate(${rot}) scale(${s})`} opacity={o}>
			{glow > 0 ? <path d={tilePath(l, w + 14, h + 14)} fill={AMBER} opacity={0.55 * glow} transform={face === 'up' ? 'scale(1,-1)' : undefined} /> : null}
			<g transform={face === 'up' ? 'scale(1,-1)' : undefined}>
				<path d={tilePath(l, w, h)} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" strokeDasharray={tone === 'ghost' ? '10 8' : undefined} />
			</g>
			<text x={0} y={fs * 0.36} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: fs}} fill={tone === 'grey' ? GREY_TXT : tone === 'ghost' ? INK_SOFT : INK}>{l}</text>
		</g>
	);
};
const GREYL = '#8d949b';
const GREY_TXT = '#5d646b';

// ---------- backbone pieces ----------
const pent = (r: number) => Array.from({length: 5}, (_, k) => `${(Math.cos(((-90 + 72 * k) * Math.PI) / 180) * r).toFixed(1)},${(Math.sin(((-90 + 72 * k) * Math.PI) / 180) * r).toFixed(1)}`).join(' ');

export const Sugar: React.FC<{x: number; y: number; r?: number; color: string; o?: number; glow?: number; fill?: string}> = ({x, y, r = 17, color, o = 1, glow = 0, fill = '#fffdf8'}) => (
	<g transform={`translate(${x},${y})`} opacity={o}>
		{glow > 0 ? <polygon points={pent(r + 10)} fill={AMBER} opacity={0.6 * glow} /> : null}
		<polygon points={pent(r)} fill={fill} stroke={color} strokeWidth={4} strokeLinejoin="round" />
	</g>
);
export const Phos: React.FC<{x: number; y: number; r?: number; color: string; o?: number; glow?: number}> = ({x, y, r = 11, color, o = 1, glow = 0}) => (
	<g opacity={o}>
		{glow > 0 ? <circle cx={x} cy={y} r={r + 9} fill={AMBER} opacity={0.6 * glow} /> : null}
		<circle cx={x} cy={y} r={r} fill={color} stroke="#fffdf8" strokeWidth={2} />
	</g>
);

/**
 * One strand: phosphate, sugar and base tile per column, with the bars that make the backbone.
 * dir 1 means the strand is read left to right (phosphate on the left of each sugar), -1 right to left.
 * unit(i) is how present nucleotide i is (0..1); link(i) draws the bond from sugar i to the next phosphate (0..1).
 */
export const StrandRow: React.FC<{
	x: number; y: number; n: number; pitch: number; face: 'down' | 'up'; dir?: 1 | -1; color: string; tiles: (TileSpec | null)[];
	tw?: number; th?: number; so?: number; dyOf?: (i: number) => number; unit?: (i: number) => number; link?: (i: number) => number;
	linkColor?: string; o?: number; thick?: number; hideStalk?: boolean; glowS?: (i: number) => number; glowL?: (i: number) => number;
}> = ({x, y, n, pitch, face, dir = 1, color, tiles, tw = 96, th = 72, so = 26, dyOf, unit, link, linkColor, o = 1, thick = 10, hideStalk, glowS, glowL}) => {
	const sg = face === 'down' ? 1 : -1;
	const cx = (i: number) => x + i * pitch;
	const dy = (i: number) => (dyOf ? dyOf(i) : 0);
	const u = (i: number) => (unit ? unit(i) : 1);
	const out: React.ReactNode[] = [];
	// bars first
	for (let i = 0; i < n; i++) {
		const ui = u(i);
		if (ui > 0) {
			const px = cx(i) - dir * pitch * 0.5;
			out.push(<line key={'b' + i} x1={px} y1={y + dy(i)} x2={px + (cx(i) - px) * ui} y2={y + dy(i)} stroke={color} strokeWidth={thick} strokeLinecap="round" opacity={o} />);
		}
		const j = i + dir;
		if (j >= 0 && j < n && u(i) > 0 && u(j) > 0) {
			const lp = link ? link(i) : 1;
			if (lp > 0) {
				const x1 = cx(i), y1 = y + dy(i), x2 = cx(j) - dir * pitch * 0.5, y2 = y + dy(j);
				const gl = glowL ? glowL(i) : 0;
				if (gl > 0) out.push(<line key={'lg' + i} x1={x1} y1={y1} x2={x1 + (x2 - x1) * lp} y2={y1 + (y2 - y1) * lp} stroke={AMBER} strokeWidth={thick + 12} strokeLinecap="round" opacity={0.6 * gl * o} />);
				out.push(<line key={'l' + i} x1={x1} y1={y1} x2={x1 + (x2 - x1) * lp} y2={y1 + (y2 - y1) * lp} stroke={linkColor ?? color} strokeWidth={thick} strokeLinecap="round" opacity={o} />);
			}
		}
	}
	for (let i = 0; i < n; i++) {
		const ui = u(i);
		const t = tiles[i];
		if (ui > 0) {
			out.push(<Phos key={'p' + i} x={cx(i) - dir * pitch * 0.5} y={y + dy(i)} color={color} o={o * ui} />);
			if (t && !hideStalk) out.push(<line key={'s' + i} x1={cx(i)} y1={y + dy(i) + sg * 14} x2={cx(i)} y2={y + dy(i) + sg * so} stroke={color} strokeWidth={5} opacity={o * ui} />);
			out.push(<Sugar key={'g' + i} x={cx(i)} y={y + dy(i)} color={color} o={o * ui} glow={glowS ? glowS(i) : 0} />);
		}
		if (t) out.push(<Tile key={'t' + i} x={cx(i)} y={y + dy(i) + sg * so} face={face} w={tw} h={th} {...t} o={(t.o ?? 1) * o} />);
	}
	return <g>{out}</g>;
};

/** Dotted hydrogen bonds between two tile faces. */
export const HBonds: React.FC<{x: number; y1: number; y2: number; n: number; p: number; w?: number; color?: string; o?: number; width?: number}> = ({x, y1, y2, n, p, w = 96, color = '#6b5a45', o = 1, width = 6}) => {
	if (p <= 0) return null;
	const offs = n === 2 ? [-0.3, 0.3] : [-0.34, 0, 0.34];
	return (
		<g opacity={o}>
			{offs.map((k, i) => <line key={i} x1={x + k * w} x2={x + k * w} y1={y1} y2={y1 + (y2 - y1) * p} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray="0.1 10" />)}
		</g>
	);
};

// ---------- ladder ----------
export const ladderGeom = (p: {x: number; y: number; pitch: number; n: number; th?: number; so?: number; gap?: number}) => {
	const th = p.th ?? 72, so = p.so ?? 26, gap = p.gap ?? 46;
	const yTop = p.y, yBot = p.y + 2 * so + 2 * th + gap;
	return {th, so, gap, yTop, yBot, topFace: yTop + so + th, botFace: yBot - so - th, colX: (i: number) => p.x + i * p.pitch, midY: (yTop + yBot) / 2, w: (p.n - 1) * p.pitch};
};

/**
 * A ladder: a top strand (tiles hang down, read left to right by default), a bottom strand (tiles rise up, read right to left)
 * and hydrogen bonds. open(i) 0..1 pulls the strands apart at column i (a fork when it varies by column).
 */
export const Ladder: React.FC<{
	x: number; y: number; n: number; pitch: number; top: (TileSpec | null)[]; bot: (TileSpec | null)[];
	topColor?: string; botColor?: string; dirTop?: 1 | -1; tw?: number; th?: number; so?: number; gap?: number;
	topUnit?: (i: number) => number; botUnit?: (i: number) => number; topLink?: (i: number) => number; botLink?: (i: number) => number;
	bond?: (i: number) => number; bondColor?: (i: number) => string; open?: (i: number) => number; openDist?: number; o?: number;
	glowS?: (i: number) => number; glowL?: (i: number) => number; topLinkColor?: string; botLinkColor?: string; topDy?: number; botDy?: number; thick?: number;
}> = ({x, y, n, pitch, top, bot, topColor = NEUT, botColor = NEUT, dirTop = 1, tw = 96, th = 72, so = 26, gap = 46, topUnit, botUnit, topLink, botLink, bond, bondColor, open, openDist = 150, o = 1, glowS, glowL, topLinkColor, botLinkColor, topDy = 0, botDy = 0, thick}) => {
	const g = ladderGeom({x, y, pitch, n, th, so, gap});
	const op = (i: number) => (open ? open(i) : 0);
	const bdir = (dirTop === 1 ? -1 : 1) as 1 | -1;
	const bonds: React.ReactNode[] = [];
	for (let i = 0; i < n; i++) {
		const t = top[i], b = bot[i];
		if (!t || !b) continue;
		const bp = bond ? bond(i) : 1;
		const fade = 1 - Math.min(1, op(i) * 2.2);
		if (bp <= 0 || fade <= 0) continue;
		const y1 = g.topFace - op(i) * openDist + topDy, y2 = g.botFace + op(i) * openDist + botDy;
		bonds.push(<HBonds key={i} x={g.colX(i)} y1={y1} y2={y2} n={bondN(t.l)} p={bp} w={tw} color={bondColor ? bondColor(i) : undefined} o={Math.min(t.o ?? 1, b.o ?? 1) * o * fade} />);
	}
	return (
		<g>
			{bonds}
			<StrandRow x={x} y={y + topDy} n={n} pitch={pitch} face="down" dir={dirTop} color={topColor} tiles={top} tw={tw} th={th} so={so} dyOf={i => -op(i) * openDist} unit={topUnit} link={topLink} linkColor={topLinkColor} o={o} glowS={glowS} glowL={glowL} thick={thick} />
			<StrandRow x={x} y={g.yBot + botDy} n={n} pitch={pitch} face="up" dir={bdir} color={botColor} tiles={bot} tw={tw} th={th} so={so} dyOf={i => op(i) * openDist} unit={botUnit} link={botLink} linkColor={botLinkColor} o={o} glowS={glowS} glowL={glowL} thick={thick} />
		</g>
	);
};

/** Tile specs from a string of letters (space or empty slots allowed as '.'), with optional per-index appear function. */
export const tilesOf = (letters: string, o?: (i: number) => number, extra?: (i: number) => Partial<TileSpec>): (TileSpec | null)[] =>
	letters.split('').map((l, i) => (l === '.' ? null : {l, o: o ? o(i) : 1, ...(extra ? extra(i) : {})}));

// ---------- direction arrow and end tags ----------
export const DirArrow: React.FC<{x1: number; x2: number; y: number; at: number; color?: string; dur?: number; width?: number}> = ({x1, x2, y, at, color = AMBER_INK, dur = 22, width = 7}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, dur);
	const s = x2 > x1 ? 1 : -1;
	const tipX = x1 + (x2 - x1) * p;
	return (
		<g opacity={p > 0 ? 1 : 0}>
			<line x1={x1} y1={y} x2={tipX} y2={y} stroke={color} strokeWidth={width} strokeLinecap="round" />
			<path d={`M${tipX - s * 24},${y - 18} L${tipX},${y} L${tipX - s * 24},${y + 18}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
		</g>
	);
};

export const EndTag: React.FC<{x: number; y: number; t: string; at: number; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; out?: number}> = ({x, y, t, at, color = INK, size = 56, anchor = 'middle', out}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	return <text x={x} y={y + (1 - p) * 10} textAnchor={anchor} opacity={p} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: size}} fill={color}>{t}</text>;
};

// ---------- single nucleotide ----------
/** A nucleotide at x,y (the sugar centre) at scale s: phosphate group, deoxyribose sugar and base tile. */
export const Nucleotide: React.FC<{x: number; y: number; s?: number; l: string; o?: number; hlS?: number; hlP?: number; hlB?: number; notches?: number; color?: string; showBase?: number}> = ({x, y, s = 1, l, o = 1, hlS = 0, hlP = 0, hlB = 0, notches = 0, color = NEUT, showBase = 1}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<line x1={-70} y1={0} x2={0} y2={0} stroke={color} strokeWidth={10} strokeLinecap="round" />
		<Phos x={-70} y={0} r={27} color="#b7823a" glow={hlP} />
		<text x={-70} y={9} textAnchor="middle" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 24}} fill="#fffdf8">P</text>
		<line x1={0} y1={30} x2={0} y2={62} stroke={color} strokeWidth={6} opacity={showBase} />
		<Sugar x={0} y={0} r={40} color={color} glow={hlS} fill="#fdf0d5" />
		<g opacity={showBase}><Tile x={0} y={62} face="down" w={110} h={92} l={l} glow={hlB} /></g>
		{notches > 0 ? (
			<g opacity={notches}>
				<rect x={34} y={-20} width={14} height={14} rx={3} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} transform="rotate(-18 41 -13)" />
				<rect x={-104} y={-7} width={14} height={14} rx={3} fill={AMBER} stroke={AMBER_INK} strokeWidth={2} />
			</g>
		) : null}
	</g>
);

// ---------- helix ----------
/** Two strands twisting about a horizontal axis. tw 1 is fully twisted, 0 is the flat ladder (with phase pi/2). */
export const TwistHelix: React.FC<{x: number; y: number; w: number; amp: number; turns?: number; tw?: number; phase?: number; p?: number; c1?: string; c2?: string; rungs?: number; o?: number; width?: number}> = ({x, y, w, amp, turns = 2.5, tw = 1, phase = 0, p = 1, c1 = NEUT, c2 = NEUT, rungs = 12, o = 1, width = 6}) => {
	if (p <= 0) return null;
	const N = 90;
	const th = (u: number, off: number) => 2 * Math.PI * turns * tw * u + phase + off;
	const segs: React.ReactNode[] = [];
	for (let k = 0; k < N; k++) {
		if ((k + 1) / N > p) break;
		const u0 = k / N, u1 = (k + 1) / N;
		for (const [off, c] of [[0, c1], [Math.PI, c2]] as [number, string][]) {
			const z = Math.cos(th((u0 + u1) / 2, off));
			segs.push(<line key={`${k}${off}`} x1={x + w * u0} y1={y + amp * Math.sin(th(u0, off))} x2={x + w * u1} y2={y + amp * Math.sin(th(u1, off))} stroke={c} strokeWidth={width + 3 * z} strokeLinecap="round" opacity={0.55 + 0.45 * ((z + 1) / 2)} />);
		}
	}
	const rs: React.ReactNode[] = [];
	for (let k = 0; k < rungs; k++) {
		const u = (k + 0.5) / rungs;
		if (u > p) break;
		const yy = amp * Math.sin(th(u, 0));
		const warm = k % 2 === 0;
		rs.push(<line key={'r' + k} x1={x + w * u} y1={y + yy} x2={x + w * u} y2={y - yy} stroke={warm ? '#e8a591' : '#bf94cf'} strokeWidth={7} strokeLinecap="round" opacity={0.9} />);
	}
	return <g opacity={o}>{rs}{segs}</g>;
};

// ---------- enzyme icons ----------
/** Helicase: a wedge that pushes the strands apart. Tip at x,y pointing right. */
export const Helicase: React.FC<{x: number; y: number; s?: number; o?: number; label?: boolean}> = ({x, y, s = 1, o = 1, label = true}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<path d="M-96,-52 L24,0 L-96,52 Q-116,0 -96,-52Z" fill="#e7a64a" stroke={AMBER_INK} strokeWidth={5} strokeLinejoin="round" />
		<circle cx={-70} cy={0} r={9} fill="#fff6e0" opacity={0.8} />
		{label ? <text x={-48} y={-68} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}} fill={AMBER_INK}>helicase</text> : null}
	</g>
);
/** DNA polymerase: a clamp around the strand. */
export const Polymerase: React.FC<{x: number; y: number; s?: number; o?: number; label?: boolean; color?: string}> = ({x, y, s = 1, o = 1, label = true, color = '#7b4fb3'}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<path d="M-52,-44 C-52,-82 52,-82 52,-44 L52,44 C52,82 -52,82 -52,44" fill="none" stroke={color} strokeWidth={22} strokeLinecap="round" />
		<path d="M-52,-44 C-52,-82 52,-82 52,-44 L52,44 C52,82 -52,82 -52,44" fill="none" stroke="#e5dbf5" strokeWidth={8} strokeLinecap="round" />
		{label ? <text x={0} y={-104} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill={color}>DNA polymerase</text> : null}
	</g>
);
/** Repair proteins: a magnifier that checks the strand. */
export const RepairIcon: React.FC<{x: number; y: number; s?: number; o?: number; label?: boolean}> = ({x, y, s = 1, o = 1, label = true}) => (
	<g transform={`translate(${x},${y}) scale(${s})`} opacity={o}>
		<circle cx={0} cy={0} r={42} fill="#e3f3f0" fillOpacity={0.7} stroke="#2a9d8f" strokeWidth={10} />
		<line x1={30} y1={30} x2={72} y2={72} stroke="#2a9d8f" strokeWidth={14} strokeLinecap="round" />
		{label ? <text x={0} y={-66} textAnchor="middle" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40}} fill="#1f7a6f">repair proteins</text> : null}
	</g>
);

// ---------- legend ----------
/** Strand key chip: blue bar original strand, green bar new strand. */
export const StrandKey: React.FC<{at: number; out?: number; x?: number; y?: number; hot?: number; only?: 'orig' | 'new'}> = ({at, out, x = 96, y = 868, hot = 0, only}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 14) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: p, transform: `translateY(${(1 - p) * 12}px)`, display: 'flex', gap: 28, alignItems: 'center', background: '#fffdf8', border: `3px solid ${hot > 0 ? AMBER : 'rgba(60,45,20,0.12)'}`, borderRadius: 18, padding: '8px 22px', boxShadow: '0 8px 18px rgba(60,45,20,0.08)'}}>
			{only !== 'new' ? <div style={{display: 'flex', alignItems: 'center', gap: 12}}><div style={{width: 54, height: 12, borderRadius: 6, background: ORIG}} /><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: ORIG, lineHeight: 1}}>original strand</span></div> : null}
			{only !== 'orig' ? <div style={{display: 'flex', alignItems: 'center', gap: 12}}><div style={{width: 54, height: 12, borderRadius: 6, background: NEWC}} /><span style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: NEWC, lineHeight: 1}}>new strand</span></div> : null}
		</div>
	);
};

/** Half-and-half icon: blue and green halves ("half old, half new"). */
export const HalfIcon: React.FC<{x: number; y: number; r?: number; p?: number; o?: number}> = ({x, y, r = 40, p = 1, o = 1}) => (
	<g transform={`translate(${x},${y})`} opacity={o}>
		<circle r={r} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={4} />
		<path d={`M0,${-r} A${r},${r} 0 0 0 0,${r} Z`} fill={ORIG} opacity={p} />
		<path d={`M0,${-r} A${r},${r} 0 0 1 0,${r} Z`} fill={NEWC} opacity={p} />
	</g>
);
