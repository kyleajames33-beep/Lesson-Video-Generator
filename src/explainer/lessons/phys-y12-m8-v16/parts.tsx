// Lesson parts for phys-y12-m8-v16: the colour roles (design "Colour key (Revision 2)" with root rule R1), the live
// mass-comparison balance with its pans' nucleons, mass formatting, an energy bar and v15's parts re-exported.
// Colour key: protons red "p"; neutrons grey "n"; electrons navy dots (trap scene); energy orange (bars and arrows);
// the binding curve ink with navy points, the fusion arrow amber and the fission arrow teal, both rising to the peak;
// strong-force links teal; repulsion lines rose; mass readouts ink; the A cursor navy; answers in dark-ink frames;
// mistakes slate (R1).
import React from 'react';
import {Balance, NucleonCluster, clusterLayout, panAt} from '../../physics/atom/decay';
import type {BalanceG} from '../../physics/atom/decay';
import {AMBER, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, V15_PLATES, fx, sci} from '../phys-y12-m8-v15/parts';
import {C12, spread} from '../phys-y12-m8-v15/s3';

export {AMBER, GREEN_C, GREY, Givens, INK, Lbl, NAVY, NEUTRON, NUC_RED, ORANGE, RED, ROSE, Shrunk, Strip, T, TEAL, fx, sci};
export const V16_PLATES = V15_PLATES;
export {C12};
/** Six decimals for masses in u. */
export const u6 = (v: number) => v.toFixed(6);
/** The separate nucleons of carbon-12 (two rows of six) in cluster units for a disc radius r. */
export const spreadDiscs = (r: number) => spread(0, 0).map(d => ({x: d.x / (2 * r), y: d.y / (2 * r), kind: d.kind as 'p' | 'n'}));
/** The live balance: packed carbon-12 on the left pan, separate nucleons on the right, tipped by deg (right down). */
export const LiveBalance: React.FC<{g: BalanceG; deg: number; r?: number; numbers?: number; opacity?: number; label?: string}> = ({g, deg, r = 20, numbers = 0, opacity = 1, label}) => {
	if (opacity <= 0.001) return null;
	const [pl, pr] = panAt(g, deg), sd = spreadDiscs(r);
	const k = r / 20;
	return (
		<g opacity={opacity}>
			<Balance g={g} deg={deg} panW={320 * k} label={label} />
			<NucleonCluster cx={pl[0]} cy={pl[1] - 60 * k} r={r} discs={C12} pFill={NUC_RED} nFill={NEUTRON} letters={r >= 17 && numbers <= 0.001} />
			<NucleonCluster cx={pr[0]} cy={pr[1]} r={r} discs={sd.map(d => ({...d, x: d.x * k, y: d.y * k}))} pFill={NUC_RED} nFill={NEUTRON} letters={r >= 17 && numbers <= 0.001} />
			{numbers > 0.001 ? C12.map((d, i) => <text key={`l${i}`} x={pl[0] + d.x * 2 * r} y={pl[1] - 60 * k + d.y * 2 * r + 7} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 20, fill: '#ffffff'}} opacity={Math.min(1, Math.max(0, numbers * 12 - i))}>{i + 1}</text>) : null}
			{numbers > 0.001 ? spreadDiscs(r).map((d, i) => <text key={`r${i}`} x={pr[0] + d.x * 2 * r * k} y={pr[1] + d.y * 2 * r * k + 7} textAnchor="middle" style={{fontFamily: 'Inter Tight', fontWeight: 800, fontSize: 20, fill: '#ffffff'}} opacity={Math.min(1, Math.max(0, numbers * 12 - i))}>{i + 1}</text>) : null}
		</g>
	);
};
/** An orange energy bar from x0 growing to w px, with an optional readout. */
export const EnergyBar: React.FC<{x: number; y: number; w: number; h?: number; opacity?: number}> = ({x, y, w, h = 30, opacity = 1}) => (opacity <= 0.001 || w <= 0.5 ? null : <rect x={x} y={y} width={w} height={h} rx={6} fill={ORANGE.stroke} opacity={opacity} />);
export {clusterLayout};
