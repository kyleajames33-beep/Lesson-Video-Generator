// M7 C05 board pieces on the C01 molecule kit, C02's skeletal drawer and C03's strip, contact highlighter and water
// lattice. README for Claude:
// - alc(): a skeletal alcohol as a C02 Mol2 (the O is an extra point labelled "OH"; branches amber). AlcAt draws it with
//   the OH ringed red (pulse) and optional carbon letters (the carbon-skeleton style used for classifying).
// - Counter: the carbon counter: a red ring on the C–OH carbon and numbers popping on each carbon bonded to it.
// - Delta: a small δ− or δ+ label. LonePairs: two red dot pairs round a point.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {INK, Sx} from '../chem-m6-c01/parts';
import {BRANCH, CARDC, CLabels, NAVY, OXY, OXY_INK, outward, zig} from '../chem-m7-c01/molecules';
import type {Bond, V2} from '../chem-m7-c01/molecules';
import {SkelAt} from '../chem-m7-c02/parts';
import type {Mol2} from '../chem-m7-c02/parts';
import {vis} from '../chem-m7-c04a/parts';

export const RED = '#c4432f';
/** n-carbon zigzag (centred), OH on carbon `oh` (0-based), methyl branches on `br`. Returns the Mol2 and the O index. */
export const alc = (n: number, oh: number, br: number[] = [], dx = 100, dy = 58): {m: Mol2; o: number; c: number} => {
	const ch = zig(n, (-(n - 1) * dx) / 2, 0, dx, dy);
	const pts = [...ch];
	const bonds: Bond[] = Array.from({length: n - 1}, (_, i) => ({a: i, b: i + 1}));
	br.forEach(b => { pts.push(outward(ch, b, dx)); bonds.push({a: b, b: pts.length - 1, color: BRANCH}); });
	const out0 = n === 1 ? ([dx, 0] as V2) : outward(ch, oh, dx);
	const op: V2 = br.includes(oh) ? [2 * ch[oh][0] - out0[0], 2 * ch[oh][1] - out0[1]] : out0;
	pts.push(op);
	bonds.push({a: oh, b: pts.length - 1});
	return {m: {pts, bonds, labels: [{i: pts.length - 1, text: 'OH'}]}, o: pts.length - 1, c: oh};
};
export const P = (m: Mol2, x: number, y: number, s: number, i: number): V2 => [x + m.pts[i][0] * s, y + m.pts[i][1] * s];
export const AlcAt: React.FC<{a: ReturnType<typeof alc>; x: number; y: number; s?: number; at: number; out?: number; o?: number; ring?: number; letters?: boolean; ink?: boolean}> = ({a, x, y, s = 1, at, out, o = 1, ring, letters = false, ink = false}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out) * o;
	if (v <= 0.01) return null;
	const m = ink ? {...a.m, bonds: a.m.bonds.map(b => ({...b, color: undefined}))} : a.m;
	const op = P(m, x, y, s, a.o);
	const rp = ring === undefined ? 0 : prog(f, ring, 12);
	const pl = ring === undefined ? 0 : Math.max(0, Math.sin(Math.min(1, Math.max(0, (f - ring) / 24)) * Math.PI));
	const cpts = m.pts.map((_, i) => P(m, x, y, s, i)).filter((_, i) => i !== a.o);
	return (
		<g opacity={v}>
			<SkelAt m={m} x={x} y={y} s={s} at={at} />
			{letters ? <CLabels pts={cpts} at={at + 4} size={34 * Math.max(0.7, s)} /> : null}
			{rp > 0.01 ? <circle cx={op[0] + 12 * s} cy={op[1]} r={(38 + 8 * pl) * Math.max(0.7, s)} fill="none" stroke={RED} strokeWidth={4} opacity={rp} /> : null}
		</g>
	);
};
/** Carbon counter: red ring on carbon c, numbers popping on neighbours nb (from `at`, 14 frames apart). */
export const Counter: React.FC<{c: V2; nb: V2[]; at: number; out?: number; o?: number}> = ({c, nb, at, out, o = 1}) => {
	const f = useCurrentFrame();
	const v = vis(f, at - 10, out) * o;
	if (v <= 0.01) return null;
	return (
		<g opacity={v}>
			<circle cx={c[0]} cy={c[1]} r={30} fill="none" stroke={RED} strokeWidth={4} />
			{nb.map((p, i) => {
				const po = prog(f, at + i * 14, 8);
				if (po <= 0.01) return null;
				return <g key={i} opacity={po}><circle cx={p[0]} cy={p[1] - 44} r={20} fill={CARDC} stroke={NAVY} strokeWidth={3} /><Sx x={p[0]} y={p[1] - 35} text={String(i + 1)} size={26} color={NAVY} anchor="middle" weight={800} at={-1000} /></g>;
			})}
			{nb.length === 0 ? <g opacity={prog(f, at, 8)}><circle cx={c[0]} cy={c[1] - 50} r={20} fill={CARDC} stroke={NAVY} strokeWidth={3} /><Sx x={c[0]} y={c[1] - 41} text="0" size={26} color={NAVY} anchor="middle" weight={800} at={-1000} /></g> : null}
		</g>
	);
};
export const Delta: React.FC<{x: number; y: number; t: '−' | '+'; at: number; out?: number; size?: number}> = ({x, y, t, at, out, size = 30}) => <Sx x={x} y={y} text={'δ' + t} size={size} color={NAVY} anchor="middle" weight={800} at={at} out={out} />;
export const LonePairs: React.FC<{p: V2; at: number; out?: number; r?: number; a0?: number}> = ({p, at, out, r = 34, a0 = -2.2}) => {
	const f = useCurrentFrame();
	const v = vis(f, at, out);
	if (v <= 0.01) return null;
	return <g opacity={v}>{[a0, a0 + 1.3].map((a, k) => { const c: V2 = [p[0] + Math.cos(a) * r, p[1] + Math.sin(a) * r]; const t: V2 = [-Math.sin(a) * 6, Math.cos(a) * 6]; return <g key={k}><circle cx={c[0] + t[0]} cy={c[1] + t[1]} r={5} fill={RED} /><circle cx={c[0] - t[0]} cy={c[1] - t[1]} r={5} fill={RED} /></g>; })}</g>;
};
export {INK, OXY, OXY_INK};
