// Circuit3DDiagram — a series circuit drawn as a 3D loop lying on a "bench",
// viewed from a tilted camera, rendered in SVG via the shared engine3d
// pipeline (rotate → project → depthLerp → painter sort).
//
// Family-2 "path-based" 3D diagram: a rounded-rectangle wire loop in the xz
// plane, sampled into depth-sorted segments; components sit in gaps along the
// path, billboarded to the projected wire tangent. The camera sways gently
// (yaw from frame/fps) so the tilt reads as 3D without labels ever flipping.
//
// Beats: wire draws around the loop clockwise from the first component →
// components pop in as the wire reaches them → (showCurrent) the switch
// closes → current dots begin to flow and any lamp glows accent2.
// Fully deterministic — pure function of frame+props.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {depthLerp, paintersSort, project, rotate} from './engine3d';
import type {DepthItem, Vec3, ViewSpec} from './engine3d';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export type CircuitComponentKind = 'battery' | 'resistor' | 'lamp' | 'switch' | 'ammeter' | 'voltmeter';

type Props = {
	/** Placed clockwise around the loop; components[0] sits front-centre. */
	components: {kind: CircuitComponentKind; label?: string}[];
	/** Animate current dots around the loop (closes any switch first). Default false. */
	showCurrent?: boolean;
	delay?: number;
};

// ── Loop path: rounded rectangle in the xz plane (y = 0), arc-length
//    parameterised s ∈ [0,1), s = 0 at front-centre, clockwise from above. ──
const A = 1.18; // x half-extent
const B = 0.78; // z half-extent
const R = 0.2; // corner radius
const EDGE_X = A - R;
const EDGE_Z = B - R;
const ARC = (Math.PI / 2) * R;
const PERIM = 4 * EDGE_X + 4 * EDGE_Z + 4 * ARC;

type Seg = {len: number; at: (u: number) => [number, number]};
const corner = (cx: number, cz: number, from: number, sweep: number): Seg => ({
	len: ARC,
	at: (u) => [cx + R * Math.cos(from + sweep * u), cz + R * Math.sin(from + sweep * u)],
});
const SEGS: Seg[] = [
	{len: EDGE_X, at: (u) => [u * EDGE_X, B]},
	corner(EDGE_X, EDGE_Z, Math.PI / 2, -Math.PI / 2),
	{len: 2 * EDGE_Z, at: (u) => [A, EDGE_Z - u * 2 * EDGE_Z]},
	corner(EDGE_X, -EDGE_Z, 0, -Math.PI / 2),
	{len: 2 * EDGE_X, at: (u) => [EDGE_X - u * 2 * EDGE_X, -B]},
	corner(-EDGE_X, -EDGE_Z, -Math.PI / 2, -Math.PI / 2),
	{len: 2 * EDGE_Z, at: (u) => [-A, -EDGE_Z + u * 2 * EDGE_Z]},
	corner(-EDGE_X, EDGE_Z, Math.PI, -Math.PI / 2),
	{len: EDGE_X, at: (u) => [-EDGE_X + u * EDGE_X, B]},
];

const loopPoint = (s: number): Vec3 => {
	let d = ((s % 1) + 1) % 1 * PERIM;
	for (const seg of SEGS) {
		if (d <= seg.len) {
			const [x, z] = seg.at(d / seg.len);
			return [x, 0, z];
		}
		d -= seg.len;
	}
	const [x, z] = SEGS[SEGS.length - 1].at(1);
	return [x, 0, z];
};

const VIEW: ViewSpec = {cx: 360, cy: 192, unit: 222};
const PITCH = 0.62;
const GAP_HALF = 0.03; // param half-width of each component's wire gap
const HALF_PX = GAP_HALF * PERIM * VIEW.unit; // local px from symbol centre to wire end
const Z_RANGE = 1.0;

// ── Component symbols, drawn in local coords with the wire along local x. ──
const symbolFor = (
	kind: CircuitComponentKind,
	accent: string,
	accent2: string,
	litProgress: number,
	switchAngle: number,
	/** Screen rotation of the whole symbol group — counter-rotate text so meter faces stay upright. */
	tangent: number,
) => {
	const stub = (bodyHalf: number) => (
		<g>
			<line x1={-HALF_PX} y1={0} x2={-bodyHalf} y2={0} stroke={TOK.inkDim} strokeWidth={3.4} strokeLinecap="round" />
			<line x1={bodyHalf} y1={0} x2={HALF_PX} y2={0} stroke={TOK.inkDim} strokeWidth={3.4} strokeLinecap="round" />
		</g>
	);
	switch (kind) {
		case 'battery':
			return (
				<g>
					{stub(9)}
					<line x1={-6} y1={-21} x2={-6} y2={21} stroke={accent} strokeWidth={3.5} strokeLinecap="round" />
					<line x1={7} y1={-11} x2={7} y2={11} stroke={TOK.ink} strokeWidth={7} strokeLinecap="round" />
					<g transform={`rotate(${-tangent} -15 -26)`}>
						<text x={-15} y={-26} textAnchor="middle" fontFamily={FONT_DISPLAY} fontSize={17} fontWeight={800} fill={accent}>
							+
						</text>
					</g>
				</g>
			);
		case 'resistor':
			return (
				<g>
					{stub(32)}
					<rect x={-32} y={-11} width={64} height={22} rx={2} fill={TOK.bgLift} stroke={TOK.ink} strokeWidth={3} />
				</g>
			);
		case 'lamp':
			return (
				<g>
					{stub(17)}
					{litProgress > 0 ? <circle r={30} fill={accent2} opacity={0.35 * litProgress} /> : null}
					<circle r={17} fill={TOK.bgLift} stroke={TOK.ink} strokeWidth={3} />
					<line x1={-12} y1={-12} x2={12} y2={12} stroke={TOK.ink} strokeWidth={2.5} />
					<line x1={-12} y1={12} x2={12} y2={-12} stroke={TOK.ink} strokeWidth={2.5} />
				</g>
			);
		case 'switch': {
			const rad = (switchAngle * Math.PI) / 180;
			return (
				<g>
					{stub(24)}
					<circle cx={-24} cy={0} r={3.6} fill={TOK.ink} />
					<circle cx={24} cy={0} r={3.6} fill={TOK.ink} />
					<line
						x1={-24}
						y1={0}
						x2={-24 + 48 * Math.cos(rad)}
						y2={48 * Math.sin(rad)}
						stroke={TOK.ink}
						strokeWidth={3}
						strokeLinecap="round"
					/>
				</g>
			);
		}
		case 'ammeter':
		case 'voltmeter':
			return (
				<g>
					{stub(17)}
					<circle r={17} fill={TOK.bgLift} stroke={TOK.ink} strokeWidth={3} />
					<g transform={`rotate(${-tangent})`}>
						<text y={6.5} textAnchor="middle" fontFamily={FONT_DISPLAY} fontSize={18} fontWeight={800} fill={TOK.ink}>
							{kind === 'ammeter' ? 'A' : 'V'}
						</text>
					</g>
				</g>
			);
	}
};

export const Circuit3DDiagram = ({components, showCurrent = false, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = frame / fps;
	// Gentle sway instead of full turntable — labels must stay readable.
	const yaw = -0.38 + 0.24 * Math.sin((2 * Math.PI * t) / 11);

	const n = Math.max(1, components.length);
	const slots = components.map((_, i) => i / n);
	const items: DepthItem[] = [];

	// Wire draws clockwise from just past components[0] all the way around.
	const drawP = interpolate(frame, [delay + 6, delay + 64], [0, 1], clamp);

	// Depth-sorted wire: each inter-component span splits into chunks so
	// stroke width/opacity can vary with depth along the path.
	const CHUNKS = 4;
	const SAMPLES = 7;
	slots.forEach((s0, i) => {
		const s1 = (i + 1 < n ? slots[i + 1] : 1) - GAP_HALF;
		const start = s0 + GAP_HALF;
		for (let c = 0; c < CHUNKS; c++) {
			const ca = start + ((s1 - start) * c) / CHUNKS;
			const cb = start + ((s1 - start) * (c + 1)) / CHUNKS;
			const visible = Math.min(1, Math.max(0, (drawP - ca) / (cb - ca)));
			if (visible <= 0) continue;
			const pts: {x: number; y: number}[] = [];
			let zSum = 0;
			for (let k = 0; k <= SAMPLES; k++) {
				const sk = ca + (cb - ca) * visible * (k / SAMPLES);
				const p3 = rotate(loopPoint(sk), yaw, PITCH);
				zSum += p3[2];
				const p = project(p3, VIEW);
				pts.push({x: p.x, y: p.y});
			}
			const zAvg = zSum / (SAMPLES + 1);
			items.push({
				depth: zAvg,
				el: (
					<polyline
						key={`wire-${i}-${c}`}
						points={pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')}
						fill="none"
						stroke={TOK.inkDim}
						strokeWidth={depthLerp(zAvg, 3.2, 5.2, Z_RANGE)}
						strokeOpacity={depthLerp(zAvg, 0.65, 1, Z_RANGE)}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				),
			});
		}
	});

	// showCurrent beat: the switch lever closes, then current starts.
	const switchAngle = showCurrent ? interpolate(frame, [delay + 64, delay + 74], [-28, -3], clamp) : -28;
	const currentOn = showCurrent ? interpolate(frame, [delay + 76, delay + 90], [0, 1], clamp) : 0;

	// Components pop in as the wire draw reaches their slot.
	const labelEls: DepthItem['el'][] = [];
	components.forEach((comp, i) => {
		const s = slots[i];
		const p3 = rotate(loopPoint(s), yaw, PITCH);
		const p = project(p3, VIEW);
		const pA = project(rotate(loopPoint(s - 0.012), yaw, PITCH), VIEW);
		const pB = project(rotate(loopPoint(s + 0.012), yaw, PITCH), VIEW);
		const tangent = (Math.atan2(pB.y - pA.y, pB.x - pA.x) * 180) / Math.PI;
		const pop = spring({frame: frame - (delay + 10 + Math.round(58 * s)), fps, config: {damping: 14, stiffness: 170, mass: 0.7}});
		const dim = depthLerp(p3[2], 0.6, 1, Z_RANGE);

		items.push({
			depth: p3[2],
			el: (
				<g
					key={`comp-${i}`}
					transform={`translate(${p.x} ${p.y}) rotate(${tangent}) scale(${p.scale * pop})`}
					opacity={dim}
				>
					{symbolFor(comp.kind, theme.accent, theme.accent2, comp.kind === 'lamp' ? currentOn : 0, switchAngle, tangent)}
				</g>
			),
		});

		if (comp.label) {
			// Labels stay screen-space horizontal, pushed outward from the loop
			// centre so they never collide with the wire. Drawn above the 3D scene.
			const dx = p.x - VIEW.cx;
			const dy = p.y - VIEW.cy;
			const dLen = Math.hypot(dx, dy) || 1;
			const lx = p.x + (dx / dLen) * 58 * p.scale;
			const ly = p.y + (dy / dLen) * 52 * p.scale + 6;
			labelEls.push(
				<text
					key={`label-${i}`}
					x={lx}
					y={ly}
					textAnchor="middle"
					fontFamily={FONT_DISPLAY}
					fontSize={17 * p.scale}
					fontWeight={700}
					fill={TOK.inkDim}
					opacity={Math.min(1, pop) * dim}
				>
					{comp.label}
				</text>,
			);
		}
	});

	// Conventional-current dots orbit the loop, hidden inside component gaps.
	if (currentOn > 0) {
		const DOTS = 9;
		for (let j = 0; j < DOTS; j++) {
			const s = (t * 0.085 + j / DOTS) % 1;
			const nearComponent = slots.some((sc) => {
				const d = Math.abs(s - sc);
				return Math.min(d, 1 - d) < GAP_HALF * 1.4;
			});
			if (nearComponent) continue;
			const p3 = rotate(loopPoint(s), yaw, PITCH);
			const p = project(p3, VIEW);
			items.push({
				depth: p3[2] + 0.01,
				el: (
					<circle
						key={`dot-${j}`}
						cx={p.x}
						cy={p.y}
						r={4.6 * p.scale}
						fill={theme.accent2}
						opacity={currentOn * depthLerp(p3[2], 0.6, 1, Z_RANGE)}
					/>
				),
			});
		}
	}

	return (
		<svg viewBox="0 0 720 440" className="diagram" role="img" aria-label="3D series circuit diagram">
			{paintersSort(items)}
			<g>{labelEls}</g>
		</svg>
	);
};
