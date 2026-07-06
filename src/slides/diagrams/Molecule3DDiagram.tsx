// Molecule3DDiagram — 3D ball-and-stick VSEPR geometry, rendered in SVG via
// the shared engine3d pipeline (rotate → project → depthLerp → painter sort).
//
// Family-1 "radial" 3D diagram: a central atom at the origin with terminal
// atoms / lone pairs on unit vectors. The molecule turntables continuously
// (yaw from frame/fps, like OrbitDiagram) while entrance reveals draw bonds
// outward and pop atoms in. Fully deterministic — pure function of frame+props.
//
// Canonical uses: CH₄ tetrahedral, NH₃ trigonal pyramidal, H₂O bent, CO₂
// linear, BF₃ trigonal planar, PCl₅ / SF₆ for shapes-of-molecules lessons.

import type {ReactNode} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {depthLerp, paintersSort, project, rotate, slerp} from './engine3d';
import type {DepthItem, Vec3, ViewSpec} from './engine3d';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export type MoleculeGeometry =
	| 'linear'
	| 'trigonalPlanar'
	| 'bent'
	| 'trigonalPyramidal'
	| 'tetrahedral'
	| 'trigonalBipyramidal'
	| 'octahedral';

type Props = {
	geometry: MoleculeGeometry;
	/** Symbol inside the central atom, e.g. "C". */
	centralLabel: string;
	/** Symbol for every terminal atom, e.g. "H". */
	terminalLabel: string;
	/** Optional per-position overrides of terminalLabel (index-matched to bonds). */
	terminalLabels?: string[];
	/** Bond-angle annotation, e.g. "109.5°". Omit to hide the angle marker. */
	angleLabel?: string;
	/** Draw lone-pair lobes (bent / trigonalPyramidal only). Default true. */
	showLonePairs?: boolean;
	/** Seconds for one full turntable revolution. Default 14. */
	spinSeconds?: number;
	delay?: number;
};

// Unit bond / lone-pair directions per VSEPR geometry (y up, z toward camera).
// `arc` picks which bond pair the angle marker spans.
const S = Math.sin;
const C = Math.cos;
const B107 = (az: number): Vec3 => [0.9278 * C(az), -0.373, 0.9278 * S(az)];
const T3 = 1 / Math.sqrt(3);

const GEOMETRIES: Record<MoleculeGeometry, {bonds: Vec3[]; lonePairs: Vec3[]; arc: [number, number]}> = {
	linear: {
		bonds: [[1, 0, 0], [-1, 0, 0]],
		lonePairs: [],
		arc: [0, 1],
	},
	trigonalPlanar: {
		bonds: [[0, 1, 0], [0.866, -0.5, 0], [-0.866, -0.5, 0]],
		lonePairs: [],
		arc: [1, 2],
	},
	bent: {
		// 104.5° H–O–H, lone pairs mirrored above in the perpendicular plane.
		bonds: [[0.7908, -0.6122, 0], [-0.7908, -0.6122, 0]],
		lonePairs: [[0, 0.6122, 0.7908], [0, 0.6122, -0.7908]],
		arc: [0, 1],
	},
	trigonalPyramidal: {
		// 107° bond–bond, one lone pair straight up.
		bonds: [B107(Math.PI / 2), B107((7 * Math.PI) / 6), B107((11 * Math.PI) / 6)],
		lonePairs: [[0, 1, 0]],
		arc: [0, 2],
	},
	tetrahedral: {
		bonds: [[T3, T3, T3], [T3, -T3, -T3], [-T3, T3, -T3], [-T3, -T3, T3]],
		lonePairs: [],
		arc: [0, 1],
	},
	trigonalBipyramidal: {
		bonds: [[0, 1, 0], [0, -1, 0], [1, 0, 0], [-0.5, 0, 0.866], [-0.5, 0, -0.866]],
		lonePairs: [],
		arc: [2, 3],
	},
	octahedral: {
		bonds: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
		lonePairs: [],
		arc: [0, 2],
	},
};

const VIEW: ViewSpec = {cx: 360, cy: 214, unit: 148};
const R_CENTRAL = 46;
const R_TERMINAL = 32;
const PITCH = 0.32;

export const Molecule3DDiagram = ({
	geometry,
	centralLabel,
	terminalLabel,
	terminalLabels,
	angleLabel,
	showLonePairs = true,
	spinSeconds = 14,
	delay = 0,
}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = frame / fps;
	const yaw = -0.6 + (2 * Math.PI * t) / spinSeconds;

	const geo = GEOMETRIES[geometry];
	const items: DepthItem[] = [];

	// Central atom — springs in at `delay`, always at depth 0.
	const centralIn = spring({frame: frame - delay, fps, config: {damping: 16, stiffness: 160, mass: 0.8}});
	items.push({
		depth: 0,
		el: (
			<g key="central">
				<circle cx={VIEW.cx} cy={VIEW.cy} r={R_CENTRAL * centralIn} fill={theme.accent} />
				<text
					x={VIEW.cx}
					y={VIEW.cy + 8 * centralIn}
					textAnchor="middle"
					fontFamily={FONT_DISPLAY}
					fontSize={23 * centralIn}
					fontWeight={800}
					fill={TOK.bgLift}
				>
					{centralLabel}
				</text>
			</g>
		),
	});

	// Bonds draw outward, then terminal atoms pop at the far end.
	geo.bonds.forEach((dir, i) => {
		const end3 = rotate(dir, yaw, PITCH);
		const p = project(end3, VIEW);
		const zMid = end3[2] / 2;

		const drawP = interpolate(frame, [delay + 12 + i * 5, delay + 30 + i * 5], [0, 1], clamp);
		const rTerm = R_TERMINAL * p.scale;
		// Shorten the bond so it meets the terminal atom's edge, not its centre.
		const dx = p.x - VIEW.cx;
		const dy = p.y - VIEW.cy;
		const len = Math.hypot(dx, dy) || 1;
		const endX = p.x - (dx / len) * (rTerm - 2);
		const endY = p.y - (dy / len) * (rTerm - 2);
		const tipX = VIEW.cx + (endX - VIEW.cx) * drawP;
		const tipY = VIEW.cy + (endY - VIEW.cy) * drawP;

		items.push({
			depth: zMid,
			el: (
				<line
					key={`bond-${i}`}
					x1={VIEW.cx}
					y1={VIEW.cy}
					x2={tipX}
					y2={tipY}
					stroke={TOK.inkDim}
					strokeWidth={depthLerp(zMid, 3, 6.5)}
					strokeLinecap="round"
					opacity={depthLerp(zMid, 0.55, 0.95)}
				/>
			),
		});

		const pop = spring({frame: frame - (delay + 24 + i * 5), fps, config: {damping: 14, stiffness: 180, mass: 0.7}});
		const dim = depthLerp(end3[2], 0.45, 1);
		items.push({
			depth: end3[2],
			el: (
				<g key={`atom-${i}`}>
					<circle
						cx={p.x}
						cy={p.y}
						r={rTerm * pop}
						fill={TOK.bgLift}
						stroke={theme.accent2}
						strokeWidth={2.5 * p.scale}
						strokeOpacity={dim}
					/>
					<text
						x={p.x}
						y={p.y + 6.5 * p.scale * pop}
						textAnchor="middle"
						fontFamily={FONT_DISPLAY}
						fontSize={19 * p.scale * pop}
						fontWeight={700}
						fill={TOK.ink}
						opacity={dim}
					>
						{terminalLabels?.[i] ?? terminalLabel}
					</text>
				</g>
			),
		});
	});

	// Lone-pair lobes — dashed teardrops with a paired-dot core.
	if (showLonePairs) {
		const lpOpacity = interpolate(frame, [delay + 46, delay + 62], [0, 1], clamp);
		geo.lonePairs.forEach((dir, i) => {
			const centre3 = rotate([dir[0] * 0.58, dir[1] * 0.58, dir[2] * 0.58], yaw, PITCH);
			const base3 = rotate([dir[0] * 0.3, dir[1] * 0.3, dir[2] * 0.3], yaw, PITCH);
			const tip3 = rotate([dir[0] * 0.9, dir[1] * 0.9, dir[2] * 0.9], yaw, PITCH);
			const pC = project(centre3, VIEW);
			const pBase = project(base3, VIEW);
			const pTip = project(tip3, VIEW);
			const angle = (Math.atan2(pTip.y - pBase.y, pTip.x - pBase.x) * 180) / Math.PI;
			const dim = depthLerp(centre3[2], 0.5, 1);
			items.push({
				depth: centre3[2],
				el: (
					<g key={`lp-${i}`} transform={`translate(${pC.x} ${pC.y}) rotate(${angle})`} opacity={lpOpacity * dim}>
						<ellipse
							rx={34 * pC.scale}
							ry={20 * pC.scale}
							fill={`rgba(${theme.cardTint},0.10)`}
							stroke={theme.accent2}
							strokeWidth={2}
							strokeDasharray="5 4"
						/>
						<circle cx={0} cy={-6.5 * pC.scale} r={3.4 * pC.scale} fill={theme.accent2} />
						<circle cx={0} cy={6.5 * pC.scale} r={3.4 * pC.scale} fill={theme.accent2} />
					</g>
				),
			});
		});
	}

	// Bond-angle marker. The ARC is depth-sorted with the scene (it honestly
	// occludes behind the central sphere as the molecule turns); the LABEL is a
	// top overlay with a bg-coloured halo so the number is always legible.
	// amberDim only (matches LineGraph marker precedent, never amber).
	let angleOverlay: ReactNode = null;
	if (angleLabel) {
		const [ai, bi] = geo.arc;
		const a = geo.bonds[ai];
		const b = geo.bonds[bi];
		const dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
		const arcOpacity = interpolate(frame, [delay + 58, delay + 74], [0, 1], clamp);

		if (dot > -0.995) {
			const pts: string[] = [];
			for (let u = 0; u <= 16; u++) {
				const v = slerp(a, b, u / 16);
				const p = project(rotate([v[0] * 0.5, v[1] * 0.5, v[2] * 0.5], yaw, PITCH), VIEW);
				pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
			}
			const mid = slerp(a, b, 0.5);
			const arcMid3 = rotate([mid[0] * 0.5, mid[1] * 0.5, mid[2] * 0.5], yaw, PITCH);
			items.push({
				depth: arcMid3[2],
				el: (
					<polyline
						key="angle-arc"
						points={pts.join(' ')}
						fill="none"
						stroke={TOK.amberDim}
						strokeWidth={2.2}
						opacity={arcOpacity * depthLerp(arcMid3[2], 0.6, 1)}
					/>
				),
			});
			const pLabel = project(rotate([mid[0] * 1.02, mid[1] * 1.02, mid[2] * 1.02], yaw, PITCH), VIEW);
			angleOverlay = (
				<text
					x={pLabel.x}
					y={pLabel.y + 6}
					textAnchor="middle"
					fontFamily={FONT_DISPLAY}
					fontSize={20 * pLabel.scale}
					fontWeight={800}
					fill={TOK.amberDim}
					stroke={TOK.bg}
					strokeWidth={6}
					paintOrder="stroke"
					opacity={arcOpacity}
				>
					{angleLabel}
				</text>
			);
		} else {
			// 180° (linear) — no arc to draw; float the label above the axis.
			const pLabel = project(rotate([0, 0.42, 0], yaw, PITCH), VIEW);
			angleOverlay = (
				<text
					x={pLabel.x}
					y={pLabel.y}
					textAnchor="middle"
					fontFamily={FONT_DISPLAY}
					fontSize={20}
					fontWeight={800}
					fill={TOK.amberDim}
					opacity={arcOpacity}
				>
					{angleLabel}
				</text>
			);
		}
	}

	return (
		<svg viewBox="0 0 720 440" className="diagram" role="img" aria-label={`3D ${geometry} molecular geometry of ${centralLabel}`}>
			{paintersSort(items)}
			{angleOverlay}
		</svg>
	);
};
