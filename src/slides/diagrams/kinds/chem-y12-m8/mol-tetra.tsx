// mol-tetra: a glossy 3D-ish ball-and-stick tetrahedral centre for the
// chem-y12-m8 "molecules" group (ChiralityDiagram). A carbon with four groups:
// group 0 points straight up, groups 1-3 point down-and-out at azimuths
// `az` (degrees; 90 = towards the viewer). The model is projected with a
// slight top-down camera tilt, painted back-to-front.
//
// Mirror image: `mirror` reflects x → −x AFTER `rot` (so a mirror pair turned by
// +w and −w stays a true mirror pair), then `rot2` turns the reflected copy
// (used for the "try to superimpose" spin). Swapping any two groups of a
// tetrahedral centre also gives the enantiomer (used by the receptor scene).

import {shade} from './shared';

export type TetraGroup = {label: string; name: string; color: string; r?: number; ink?: string};

const TILT = (18 * Math.PI) / 180;
const rad = (d: number) => (d * Math.PI) / 180;

/** Unit 3D direction of group i (y up = −1 in SVG). */
export const tetraDir = (i: number, az: [number, number, number], rot = 0, mirror = false, rot2 = 0) => {
	let x: number, y: number, z: number;
	if (i === 0) { x = 0; y = -1; z = 0; }
	else {
		const a = rad(az[i - 1]);
		x = 0.943 * Math.cos(a); y = 1 / 3; z = 0.943 * Math.sin(a);
	}
	const turn = (px: number, pz: number, r: number) => [px * Math.cos(rad(r)) - pz * Math.sin(rad(r)), px * Math.sin(rad(r)) + pz * Math.cos(rad(r))];
	[x, z] = turn(x, z, rot);
	if (mirror) x = -x;
	[x, z] = turn(x, z, rot2);
	return {x, y, z};
};

/** Project a 3D offset (bond-length units) to screen offset + depth (bigger = nearer). */
export const project = (v: {x: number; y: number; z: number}) => ({
	sx: v.x,
	sy: v.y * Math.cos(TILT) + v.z * Math.sin(TILT),
	depth: v.z * Math.cos(TILT) - v.y * Math.sin(TILT),
});

export const TetraModel = ({
	id, cx, cy, R, groups, az = [30, 150, 270], rot = 0, mirror = false, rot2 = 0, opacity = 1, centreGlow = 0, centreColor = '#3b3b3b',
	ghost = false, groupScale,
}: {
	id: string; cx: number; cy: number; R: number; groups: TetraGroup[]; az?: [number, number, number]; rot?: number; mirror?: boolean; rot2?: number;
	opacity?: number; centreGlow?: number; centreColor?: string; ghost?: boolean; groupScale?: (i: number) => number;
}) => {
	const items = groups.map((g, i) => {
		const p = project(tetraDir(i, az, rot, mirror, rot2));
		return {g, i, ...p};
	});
	const sorted = [...items, {g: null, i: -1, sx: 0, sy: 0, depth: 0}].sort((a, b) => a.depth - b.depth);
	const cr = R * 0.25;
	return (
		<g opacity={opacity}>
			{/* soft ground shadow */}
			{!ghost && <ellipse cx={cx} cy={cy + R * 1.05} rx={R * 1.1} ry={R * 0.22} fill="rgba(40,36,30,0.16)" />}
			{sorted.map((it) => {
				if (!it.g) {
					return (
						<g key="c">
							{centreGlow > 0 && <circle cx={cx} cy={cy} r={cr + 9} fill="none" stroke="#f0a830" strokeWidth={5} opacity={centreGlow} />}
							<circle cx={cx} cy={cy} r={cr} fill={`url(#${id}-g-C)`} stroke={shade(centreColor, -0.3)} strokeWidth={1} />
						</g>
					);
				}
				const persp = 1 + 0.14 * it.depth;
				const gx = cx + it.sx * R, gy = cy + it.sy * R;
				const gr = (it.g.r ?? 0.3) * R * persp * (groupScale ? groupScale(it.i) : 1);
				return (
					<g key={it.i}>
						<line x1={cx} y1={cy} x2={gx} y2={gy} stroke="#8c877f" strokeWidth={R * 0.1 * persp} strokeLinecap="round" />
						<line x1={cx} y1={cy} x2={gx} y2={gy} stroke="#cfcac2" strokeWidth={R * 0.04 * persp} strokeLinecap="round" opacity={0.8} />
						<circle cx={gx} cy={gy} r={gr} fill={`url(#${id}-g-${it.g.name})`} stroke={ghost ? '#5a5a5a' : shade(it.g.color, -0.35)} strokeWidth={ghost ? 2 : 1} strokeDasharray={ghost ? '5 4' : undefined} />
						{it.g.label && (() => {
							const fs = Math.max(15, Math.min(gr * 0.8, (2 * gr * 0.95) / (it.g.label.length * 0.6)));
							const fits = it.g.label.length * fs * 0.6 <= 2 * gr * 1.02;
							return (
								<text x={gx} y={gy + fs * 0.36} textAnchor="middle" fontSize={fs} fontWeight={800} fill={fits ? it.g.ink ?? '#ffffff' : '#1a1a1a'} stroke={fits ? undefined : '#ffffff'} strokeWidth={fits ? undefined : 3.5} paintOrder="stroke">
									{it.g.label}
								</text>
							);
						})()}
					</g>
				);
			})}
			<text x={cx} y={cy + cr * 0.34} textAnchor="middle" fontSize={Math.max(15, cr * 0.95)} fontWeight={800} fill="#ffffff" stroke="#3b3b3b" strokeWidth={2} paintOrder="stroke">C</text>
		</g>
	);
};

/** Screen position of group i of a TetraModel with the same parameters. */
export const tetraGroupXY = (i: number, cx: number, cy: number, R: number, az: [number, number, number], rot = 0, mirror = false, rot2 = 0) => {
	const p = project(tetraDir(i, az, rot, mirror, rot2));
	return {x: cx + p.sx * R, y: cy + p.sy * R, depth: p.depth};
};
