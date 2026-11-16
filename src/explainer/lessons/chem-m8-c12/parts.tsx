// C8-12 coded parts (combining spectra). Imports every spectroscopy part from c09 (stick spectrum, gap bracket,
// candidate strip), c10 (IR trace, band marker, range shade, data sheet), c11a (carbon-13 spectrum, data sheet) and
// c11b (proton multiplets, integration, full structures). New here:
// - Ledger: the evidence ledger (MS, IR, carbon-13, proton rows) as a narrow column; a row writes its finding and ticks.
// - SPEC12: measured spectra used only here (butanone full NIST list; 2-chloropropane NIST 229273).
// Nothing here draws people.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, CARD, EDGE, GREYT, INK, NAVY, Sx, prog, pulse, vis} from '../chem-m8-c11b/parts';
import type {SBar} from '../chem-m8-c11b/parts';

export * from '../chem-m8-c11b/parts';
export type LRow = {label: string; at?: number; text?: string; textAt?: number; tick?: number; hot?: number; note?: string; noteAt?: number; noteOut?: number};
/** The evidence ledger at (x, y): one row per technique. */
export const Ledger: React.FC<{x?: number; y?: number; w?: number; rowH?: number; rows: LRow[]; at?: number; size?: number; o?: number}> = ({x = 1580, y = 140, w = 244, rowH = 128, rows, at = -1000, size = 30, o = 1}) => {
	const f = useCurrentFrame();
	const v = prog(f, at, 12) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			{rows.map((r, i) => {
				const yy = y + i * (rowH + 10);
				const tk = r.tick === undefined ? 0 : prog(f, r.tick, 10);
				const hot = r.hot === undefined ? 0 : pulse(f, r.hot, 40);
				const tv = r.text ? prog(f, r.textAt ?? -1000, 12) : 0;
				const nv = r.note ? vis(f, r.noteAt ?? -1000, r.noteOut, 12) : 0;
				return (
					<g key={i}>
						{hot > 0.01 ? <rect x={x - 8} y={yy - 8} width={w + 16} height={rowH + 16} rx={20} fill={AMBER} opacity={0.35 * hot} /> : null}
						<rect x={x} y={yy} width={w} height={rowH} rx={16} fill={CARD} stroke={tk > 0.5 ? '#2f8a5b' : EDGE} strokeWidth={tk > 0.5 ? 4 : 2.5} />
						<Sx x={x + 14} y={yy + 34} text={r.label} size={28} color={NAVY} weight={800} at={-1000} />
						{tv > 0.01 ? <g opacity={tv * (nv > 0.5 ? 0.25 : 1)}>{(r.text as string).split('|').map((ln, k) => <Sx key={k} x={x + 14} y={yy + 70 + k * (size + 6)} text={ln} size={size} color={INK} weight={700} at={-1000} />)}</g> : null}
						{nv > 0.01 ? <g opacity={nv}>{(r.note as string).split('|').map((ln, k) => <Sx key={k} x={x + 14} y={yy + 70 + k * (size + 4)} text={ln} size={26} color={GREYT} hand weight={700} at={-1000} />)}</g> : null}
						{tk > 0.01 ? <path opacity={tk} d={`M${x + w - 44},${yy + 26} l10,12 l20,-26`} fill="none" stroke="#2f8a5b" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Butanone, NIST MS 50206 (all 14 peaks), and 2-chloropropane, NIST MS 229273 / AIST MS-NW-4938. */
export const SPEC12: Record<string, SBar[]> = {
	butanone: [[15, 4], [26, 1], [27, 8], [28, 3], [29, 17], [39, 2], [41, 1], [42, 3], [43, 100], [44, 3], [57, 8], [71, 1], [72, 25], [73, 1]],
	chloropropane: [[27, 29.29], [39, 8.49], [41, 21.79], [42, 6.59], [43, 100], [63, 16.99], [65, 5.69], [78, 8.99], [80, 3.09]],
};
