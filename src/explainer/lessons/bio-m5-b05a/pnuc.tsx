import React from 'react';
import {CD, PL, usePlates} from './cd';
import {P_DUP, P_SINGLE} from './chrom';

// ---------- B5a quality fix (6 Nov 2026): painted nucleus close-up for the model scenes ----------
// The audit rejected the coded outline cells with chromosome bars (why-copy-first, the-copy, interphase, not-perfect).
// These scenes now sit the painted chromosomes (ChromP) inside the painted nucleus close-up (cd-nucleus-zoom-empty),
// as the owner asked on 20 Oct ("a nucleus zoom instead of the whole cell", large 2n = 4 model). Lesson-local file:
// cd.tsx and chrom.tsx are imported by B5b, B6a and Module 6 lessons, so they are not edited.

export const NZ_EMPTY = CD('nucleus-zoom', true);
/** Envelope radius of the nucleus on the 2000 px canvas (anchors: nucleusZoom r 765). */
export const NZ_R = 765;
/** The nucleolus sits right of and below the centre: offset (+0.39 r, +0.16 r), radius 0.3 r. Chromosome rows go
 *  above it, at about -0.33 r. */
export const NZ_ROW = -0.33;

/** Preload the nucleus plate and the painted chromosome plates (SVG <image> is not tracked by Remotion, so a still can
 *  otherwise catch a chromosome plate before it has decoded). */
const PRELOAD = [NZ_EMPTY, ...Object.values(P_SINGLE).map(p => p.src), ...Object.values(P_DUP).map(p => p.src)];
export const usePNuc = () => usePlates(PRELOAD);

/** The painted nucleus close-up with its envelope centred at (cx, cy) and envelope radius r (screen px). The whole
 *  plate (cell rim included) reaches about 1.3 r from the centre. Uniform scale only. */
export const PNuc: React.FC<{cx: number; cy: number; r: number; o?: number}> = ({cx, cy, r, o = 1}) => (o > 0.004 ? <PL src={NZ_EMPTY} at={[cx, cy, r / NZ_R]} o={o} /> : null);
