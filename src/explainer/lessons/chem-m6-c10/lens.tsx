// M6 C10 quality fix (6 Nov 2026): particle views that sit beside the working. Kept in their own file because C11, C12
// and G02 re-export ./parts. HSC conventions: acid molecules amber with their H, hydronium a teal proton on water,
// anions grey with a minus, hydroxide violet.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {prog} from '../../kit';
import {An, H3O, HA, INK, INK_SOFT, LensFrame, OHg, PROTON, PROTON_INK, Sx, WaterT, lerp, smooth, vis} from './parts';

const wob = (f: number, i: number, amp = 3): [number, number] => [Math.sin(f * 0.035 + i * 1.7) * amp, Math.cos(f * 0.03 + i * 2.3) * amp];
/** Even spots in a disc (sunflower pattern), as unit offsets. */
const spots = (n: number, fill = 0.78) => Array.from({length: n}, (_, i) => {
	const t = (i + 0.5) / n, a = i * 2.39996;
	const d = Math.sqrt(t) * fill;
	return [d * Math.cos(a), d * Math.sin(a)] as [number, number];
});

/** A weak acid at equilibrium: `n` spots, the listed `ions` spots hold a hydronium and an anion side by side, the rest
 * whole acid molecules. `ionRing` rings the ions (numerator), `molRing` rings the molecules (denominator). */
export const AcidLens: React.FC<{cx: number; cy: number; r: number; at: number; out?: number; n?: number; ions: number[]; s?: number; ionRing?: [number, number]; molRing?: [number, number]; split?: {i: number; at: number}; title?: string; titleAt?: number; o?: number}> = ({cx, cy, r, at, out, n = 16, ions, s = 1.3, ionRing, molRing, split, title, titleAt, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const pts = spots(n);
	const ir = ionRing ? vis(f, ionRing[0], ionRing[1], 10) : 0;
	const mr = molRing ? vis(f, molRing[0], molRing[1], 10) : 0;
	return (
		<g opacity={o}>
			<LensFrame cx={cx} cy={cy} r={r} at={at} out={out} title={title} titleAt={titleAt}>
				<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#eef6fb" />
				{pts.map(([u, v], i) => {
					const [dx, dy] = wob(f, i);
					const x = cx + u * r + dx, y = cy + v * r + dy;
					const isIon = ions.includes(i);
					const sp = split && split.i === i ? smooth(prog(f, split.at, 24)) : isIon ? 1 : 0;
					if (sp > 0.01) {
						return (
							<g key={i}>
								<H3O x={x - 20 * s * sp} y={y - 6 * s} s={s} />
								<An x={x + 20 * s * sp} y={y + 6 * s} s={s} />
								{ir > 0.01 ? <circle cx={x} cy={y} r={36 * s} fill="none" stroke={PROTON} strokeWidth={5} opacity={ir} /> : null}
							</g>
						);
					}
					return (
						<g key={i}>
							<HA x={x} y={y} s={s} a={i * 0.9} />
							{mr > 0.01 ? <circle cx={x} cy={y} r={24 * s} fill="none" stroke="#c98a16" strokeWidth={4} opacity={mr} /> : null}
						</g>
					);
				})}
			</LensFrame>
		</g>
	);
};

/** Ethanoate takes a proton back from water: the proton hops at `hop`, leaving ethanoic acid and hydroxide. */
export const ConjLens: React.FC<{cx: number; cy: number; r: number; at: number; hop: number; out?: number; o?: number}> = ({cx, cy, r, at, hop, out, o = 1}) => {
	const f = useCurrentFrame();
	if (o <= 0.01) return null;
	const p = smooth(prog(f, hop, 26));
	const s = 3;
	const ax = cx - r * 0.38, wx = cx + r * 0.38, y = cy + 6;
	const px = lerp(wx + 10 * s, ax + 17 * s * Math.cos(-0.6), p), py = lerp(y - 12 * s, y + 17 * s * Math.sin(-0.6), p) - Math.sin(p * Math.PI) * 50;
	return (
		<g opacity={o}>
			<LensFrame cx={cx} cy={cy} r={r} at={at} out={out}>
				<rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill="#eef6fb" />
				{p < 0.98 ? <An x={ax} y={y} s={s} /> : <HA x={ax} y={y} s={s} />}
				{p < 0.02 ? <WaterT x={wx} y={y} s={s * 0.95} /> : <OHg x={wx} y={y} s={s} />}
				{p > 0.02 && p < 0.98 ? <circle cx={px} cy={py} r={6.5 * s} fill={PROTON} stroke={PROTON_INK} strokeWidth={2} /> : null}
				{p < 0.02 ? <circle cx={wx + 10 * s} cy={y - 12 * s} r={6.5 * s} fill="#ffffff" stroke={INK} strokeWidth={1.8} /> : null}
			</LensFrame>
			<Sx x={ax} y={cy + r + 44} text={p > 0.98 ? 'CH_3COOH' : 'CH_3COO^{-}'} size={30} color={INK} anchor="middle" weight={700} at={at} />
			<Sx x={wx} y={cy + r + 44} text={p > 0.98 ? 'OH^{-}' : 'H_2O'} size={30} color={p > 0.98 ? '#6a4a9c' : INK_SOFT} anchor="middle" weight={700} at={at} />
		</g>
	);
};
