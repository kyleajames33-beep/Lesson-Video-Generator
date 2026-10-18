// HSC exam-style Punnett square (owner review 18 Oct, B10 and G02): a thin-line grid on the paper, gamete alleles as
// plain serif text across the top and down the side, offspring genotypes as text in each box and an optional small
// phenotype word under each genotype. No gamete cell discs, no painted animals in boxes, no heavy fills; a highlighted
// box gets only a subtle tint (hi) or a thin amber ring (ring).
// Same props and timing as genetics.tsx's Punnett (gridAt, topAt, sideAt, fillAt, ring, hi, dim), so cues and beats
// carry over: each box still fills with one allele travelling from its column gamete and one from its row gamete.
// Gamete labels sit at pgeom's top/side anchors, so annotations placed with pgeom still line up.
// B9 keeps using Punnett unchanged; this file is separate so the published B9 renders identically.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, DrawPath, FONT_DISPLAY, INK, INK_SOFT, clamp01, lerp, prog} from '../bio-m5-b08/shared';
import {AText, aw, pgeom} from './genetics';
import type {CrossResult} from './genetics';

export type PunnettHSCProps = {
	x: number; y: number; cell: number; res: CrossResult; top: [string, string]; side: [string, string];
	gridAt: number; topAt: number; sideAt: number; fillAt: (i: number) => number;
	/** kept for pgeom compatibility: the gamete label anchors match the old disc positions */
	discR?: number; o?: number; ring?: (i: number) => number; hi?: (i: number) => number;
	/** genotype text size is chipR * 1.45 when given (matches the old chip scale) */
	chipR?: number;
	dim?: (i: number) => number;
	/** phenotype word under each genotype: true shows it shortly after its box fills; a function gives its opacity */
	phen?: boolean | ((i: number) => number);
	phenText?: (i: number) => string;
	phenSize?: number;
};

/** Split a phenotype into at most two lines when it would overflow the box. */
const phenLines = (t: string, size: number, room: number): string[] => {
	const wide = (s: string) => s.length * size * 0.52;
	if (wide(t) <= room || !t.includes(' ')) return [t];
	const words = t.split(' ');
	let best: string[] = [t], bestW = Infinity;
	for (let k = 1; k < words.length; k++) {
		const a = words.slice(0, k).join(' '), b = words.slice(k).join(' ');
		const w = Math.max(wide(a), wide(b));
		if (w < bestW) { bestW = w; best = [a, b]; }
	}
	return best;
};

export const PunnettHSC: React.FC<PunnettHSCProps> = ({x, y, cell, res, top, side, gridAt, topAt, sideAt, fillAt, discR, o = 1, ring, hi, chipR, dim, phen, phenText, phenSize}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const G = pgeom(x, y, cell, discR ?? cell * 0.2);
	const lsz = Math.max(18, Math.min(42, cell * 0.21));
	const topXY = (c: number): [number, number] => [G.top(c)[0], y - lsz * 0.55];
	const sideXY = (r: number): [number, number] => [x - lsz * 0.6, G.side(r)[1] + lsz * 0.34];
	const gp = prog(f, gridAt, 18);
	const L = 2 * cell;
	return (
		<g opacity={o}>
			{gp > 0.01 ? (
				<g>
					<DrawPath d={`M${x},${y} L${x + L},${y} L${x + L},${y + L} L${x},${y + L} Z`} at={gridAt} dur={18} color={INK} width={2.5} />
					<DrawPath d={`M${x + cell},${y} L${x + cell},${y + L}`} at={gridAt + 6} dur={12} color={INK} width={2} />
					<DrawPath d={`M${x},${y + cell} L${x + L},${y + cell}`} at={gridAt + 6} dur={12} color={INK} width={2} />
				</g>
			) : null}
			{[0, 1].map(c => {
				const p = prog(f, topAt + c * 6, 14);
				const [tx, ty] = topXY(c);
				return <AText key={'t' + c} x={tx} y={ty - (1 - p) * 10} t={top[c]} size={lsz} o={p} />;
			})}
			{[0, 1].map(r => {
				const p = prog(f, sideAt + r * 6, 14);
				const [sx, sy] = sideXY(r);
				return <AText key={'s' + r} x={sx - (1 - p) * 10} y={sy} t={side[r]} size={lsz} anchor="end" o={p} />;
			})}
			{res.cells.map(cl => {
				const [bx, by] = G.box(cl.i);
				const at = fillAt(cl.i);
				if (f < at - 1) return null;
				const t = prog(f, at, 16);
				const d = dim ? dim(cl.i) : 1;
				const h = hi ? hi(cl.i) : 0;
				const tight = cl.pair.every(a => a.length === 1);
				let gsz = chipR ? chipR * 1.45 : Math.max(18, Math.min(40, cell * 0.26));
				const unit = (aw(cl.pair[0], 1) + aw(cl.pair[1], 1) + (tight ? 0 : 0.5));
				gsz = Math.min(gsz, (cell - 22) / unit);
				const w0 = aw(cl.pair[0], gsz), w1 = aw(cl.pair[1], gsz);
				const gap = tight ? 0 : gsz * 0.5;
				const tot = w0 + w1 + gap;
				const po = phen === undefined || phen === false ? 0 : phen === true ? prog(f, at + 12, 12) : phen(cl.i);
				const word = phen ? (phenText ? phenText(cl.i) : cl.ph) : '';
				let psz = phenSize ?? Math.max(15, Math.min(26, cell * 0.14));
				const lines = phen ? phenLines(word, psz, cell - 16) : [];
				if (lines.length) psz = Math.min(psz, (cell - 16) / (Math.max(...lines.map(s => s.length)) * 0.52));
				// vertical layout: genotype alone sits centred; with a phenotype word the block (genotype + lines) is centred
				const blockH = gsz + (lines.length ? gsz * 0.35 + lines.length * psz * 1.15 : 0);
				const top0 = by - blockH / 2;
				const gBase = lines.length ? top0 + gsz * 0.8 : by + gsz * 0.34;
				const dest = [bx - tot / 2 + w0 / 2, bx + tot / 2 - w1 / 2];
				return (
					<g key={cl.i} opacity={d}>
						{h > 0.01 ? <rect x={bx - cell / 2 + 3} y={by - cell / 2 + 3} width={cell - 6} height={cell - 6} rx={4} fill={AMBER} opacity={0.16 * h} /> : null}
						{cl.pair.map((a, k) => {
							const from = cl.src[k] === 'top' ? topXY(cl.c) : sideXY(cl.r);
							const fx = cl.src[k] === 'top' ? from[0] : from[0] - aw(side[cl.r], lsz) / 2;
							return <AText key={k} x={lerp(fx, dest[k], t)} y={lerp(from[1], gBase, t)} t={a} size={lerp(lsz, gsz, t)} o={clamp01(t * 3)} />;
						})}
						{po > 0.01 ? lines.map((s, k) => (
							<text key={'p' + k} x={bx} y={top0 + gsz * 1.35 + psz * (0.85 + 1.15 * k)} textAnchor="middle" opacity={po} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: psz}} fill={INK_SOFT}>{s}</text>
						)) : null}
						{ring && ring(cl.i) > 0.01 ? <rect x={bx - cell / 2 + 5} y={by - cell / 2 + 5} width={cell - 10} height={cell - 10} rx={6} fill="none" stroke={AMBER} strokeWidth={4} opacity={ring(cl.i)} /> : null}
					</g>
				);
			})}
		</g>
	);
};
