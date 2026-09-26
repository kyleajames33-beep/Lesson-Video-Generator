// FlowDiagram — process chains and small trees in the diorama family, laid
// out top-to-bottom in layers (depth = longest path from a root).
//
// Nodes are painted blocks standing on a stone lip, lit from the top-left;
// chains get a glossy numbered marble per step. Edges draw on once their
// source has landed, then a small glossy bead keeps travelling down each edge
// during the hold, so the direction of the process stays visible and the
// scene is never frozen. Nodes land when the narration names them (falling
// back to a stagger when it doesn't; see kinds/restyle-generic/sceneSync.ts),
// and never before the node that leads into them.
//
// Replaces the legacy version (fixed-size circles in a single row, hard-coded
// indigo): labels up to ~30 chars overflowed the circles, 5–7 node chains were
// squeezed into one line, and branching flows (8 lessons) drew over each other.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {idlePulse} from './diorama';
import {STONE, clamp, marbleStyle, shade} from './kinds/restyle-generic/paint';
import {buildStart, itemEntryFrames, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

type FlowNode = {id: string; label: string};
type FlowEdge = {from: string; to: string};
type Props = {nodes: FlowNode[]; edges: FlowEdge[]; delay?: number};

// Sized to the concept VisualStage's inner box (~744×554).
const W = 740;
const MAX_H = 540;
const LIP = 6;
const GAP_X = 20;
const CHAR_EM = 0.52; // Inter Tight 600, average glyph width

const layerOf = (nodes: FlowNode[], edges: FlowEdge[]) => {
	const depth: Record<string, number> = Object.fromEntries(nodes.map((n) => [n.id, 0]));
	// Longest-path layering; n passes is enough for any DAG, and the cap also
	// stops a malformed cycle from looping forever.
	for (let pass = 0; pass < nodes.length; pass++) {
		let changed = false;
		for (const {from, to} of edges) {
			if (depth[from] === undefined || depth[to] === undefined) continue;
			if (depth[to] < depth[from] + 1) {
				depth[to] = depth[from] + 1;
				changed = true;
			}
		}
		if (!changed) break;
	}
	return depth;
};

const linesFor = (text: string, widthPx: number, fontSize: number) =>
	Math.max(1, Math.ceil(text.length / Math.max(6, Math.floor(widthPx / (fontSize * CHAR_EM)))));

export const FlowDiagram = ({nodes, edges, delay}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const depth = layerOf(nodes, edges);
	const layerCount = Math.max(...nodes.map((n) => depth[n.id])) + 1;
	const layers: FlowNode[][] = Array.from({length: layerCount}, () => []);
	nodes.forEach((n) => layers[depth[n.id]].push(n));
	const widest = Math.max(...layers.map((l) => l.length));

	// Single-column chains get "01, 02…" step numbers beside the label, which
	// take width the label can't use (without this, labels overflowed their box).
	const showStepNumbers = widest === 1 && layerCount >= 3;
	const labelInset = showStepNumbers ? 80 : 32;

	// Each layer shares the width between its own nodes, so a single root
	// isn't squeezed to the width of a 4-wide leaf row.
	const widthOf = (layerSize: number) => Math.min(500, (W - GAP_X * (layerSize - 1)) / layerSize);
	const nodeWOf: Record<string, number> = {};
	layers.forEach((layer) => layer.forEach((n) => (nodeWOf[n.id] = widthOf(layer.length))));

	// Font size is chosen per layer — a crowded 4-wide leaf row shouldn't
	// shrink the root. Within a layer: the largest size (≤ cap) at which the
	// longest single word fits its node (words can't wrap). The cap steps down
	// until every layer fits MAX_H.
	const layerFont = (layer: FlowNode[], cap: number) => {
		const w = widthOf(layer.length);
		for (let f = cap; f > 16; f -= 1) {
			const longest = Math.max(...layer.map((n) => Math.max(...n.label.split(/\s+/).map((word) => word.length))));
			if (longest * f * 0.5 <= w - labelInset + 8) return f;
		}
		return 16;
	};
	let fonts: number[] = [];
	let heights: number[] = [];
	let gapY = 0;
	for (let cap = 34; cap >= 16; cap -= 2) {
		fonts = layers.map((layer) => layerFont(layer, cap));
		heights = layers.map((layer, li) => {
			const lines = Math.max(...layer.map((n) => linesFor(n.label, nodeWOf[n.id] - labelInset, fonts[li])));
			return lines * fonts[li] * 1.18 + 28;
		});
		const content = heights.reduce((a, h) => a + h, 0);
		gapY = layerCount > 1 ? Math.min(64, (MAX_H - content) / (layerCount - 1)) : 0;
		if (layerCount === 1 || gapY >= 26) break;
	}
	gapY = Math.max(22, gapY);
	const layerTop = heights.map((_, li) => heights.slice(0, li).reduce((a, h) => a + h, 0) + li * gapY);
	const H = layerTop[layerCount - 1] + heights[layerCount - 1];

	const pos: Record<string, {x: number; y: number; w: number; h: number; f: number; order: number}> = {};
	let order = 0;
	layers.forEach((layer, li) => {
		const w = widthOf(layer.length);
		const rowW = layer.length * w + (layer.length - 1) * GAP_X;
		const x0 = (W - rowW) / 2;
		layer.forEach((n, i) => {
			pos[n.id] = {x: x0 + i * (w + GAP_X), y: layerTop[li], w, h: heights[li], f: fonts[li], order: order++};
		});
	});

	// Timing: order nodes by layer (the order they read in), sync each to the
	// narration, then make sure no node lands before the node leading into it.
	const timing = sceneTimingFor('flow', [nodes, edges]);
	const start = buildStart(delay, timing);
	const readOrder = [...nodes].sort((a, b) => pos[a.id].order - pos[b.id].order);
	const synced = itemEntryFrames(readOrder.map((n) => n.label), {timing, start, stagger: 14});
	const at: Record<string, number> = {};
	readOrder.forEach((n, i) => (at[n.id] = synced[i]));
	for (let pass = 0; pass < nodes.length; pass++) {
		for (const {from, to} of edges) {
			if (at[from] !== undefined && at[to] !== undefined && at[to] < at[from] + 12) at[to] = at[from] + 12;
		}
	}
	const appearAt = (id: string) => at[id] ?? start;
	// The node the narration is on: latest to land, glowing until the next lands.
	const current = readOrder.reduce<string | null>((cur, n) => (frame >= appearAt(n.id) && (cur === null || appearAt(n.id) >= appearAt(cur)) ? n.id : cur), null);
	const lastLanded = Math.max(...nodes.map((n) => appearAt(n.id)));
	const glowFade = interpolate(frame, [lastLanded + 150, lastLanded + 190], [1, 0], clamp);

	const edgeGeom = edges.map(({from, to}) => {
		const a = pos[from];
		const b = pos[to];
		if (!a || !b) return null;
		const x1 = a.x + a.w / 2;
		const y1 = a.y + a.h + LIP;
		const x2 = b.x + b.w / 2;
		const y2 = b.y - 6;
		const midY = (y1 + y2) / 2;
		// Cubic Bézier: P0 (x1,y1), P1 (x1,midY), P2 (x2,midY), P3 (x2,y2).
		const at = (t: number) => {
			const u = 1 - t;
			return {
				x: u * u * u * x1 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x2,
				y: u * u * u * y1 + 3 * u * u * t * midY + 3 * u * t * t * midY + t * t * t * y2,
			};
		};
		return {from, to, d: `M${x1},${y1} C${x1},${midY} ${x2},${midY} ${x2},${y2}`, len: Math.hypot(x2 - x1, y2 - y1) * 1.25 + 10, at};
	});

	return (
		<div style={{position: 'relative', width: W, height: H + LIP, fontFamily: FONT_DISPLAY}}>
			<svg width={W} height={H + LIP} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<defs>
					<marker id="flow-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
						<path d="M0,0 L10,4 L0,8 z" fill={theme.accent2} />
					</marker>
					<radialGradient id="flow-bead" cx="38%" cy="32%" r="70%" fx="32%" fy="26%">
						<stop offset="0%" stopColor="#ffffff" />
						<stop offset="28%" stopColor={shade(theme.accent2, 0.1)} />
						<stop offset="100%" stopColor={shade(theme.accent, -0.1)} />
					</radialGradient>
				</defs>
				{edgeGeom.map((e, i) => {
					if (!e) return null;
					// The edge draws into its target as the target lands (never into an empty slot).
					const t0 = Math.max(appearAt(e.from) + 10, appearAt(e.to) - 14);
					const t = interpolate(frame, [t0, t0 + 16], [0, 1], clamp);
					// Bead: one trip every 70 frames once the edge has drawn and its target
					// has landed.
					const beadStart = t0 + 30;
					const cycle = 70;
					const bt = frame > beadStart ? ((frame - beadStart + i * 13) % cycle) / cycle : -1;
					const beadP = bt >= 0 ? e.at(bt) : null;
					const beadO = bt >= 0 ? interpolate(bt, [0, 0.12, 0.85, 1], [0, 1, 1, 0], clamp) * interpolate(frame, [beadStart, beadStart + 20], [0, 1], clamp) : 0;
					return (
						<g key={`${e.from}-${e.to}-${i}`}>
							<path
								d={e.d}
								fill="none"
								stroke={theme.accent2}
								strokeWidth={3}
								strokeLinecap="round"
								strokeDasharray={e.len}
								strokeDashoffset={(1 - t) * e.len}
								markerEnd={t > 0.92 ? 'url(#flow-arrow)' : undefined}
								opacity={0.85}
							/>
							{beadP ? <circle cx={beadP.x} cy={beadP.y} r={5.5} fill="url(#flow-bead)" opacity={beadO} /> : null}
						</g>
					);
				})}
			</svg>

			{nodes.map((node) => {
				const p = pos[node.id];
				const s = spring({frame: frame - appearAt(node.id), fps, config: {damping: 18, stiffness: 190, mass: 0.7}});
				const isRoot = depth[node.id] === 0;
				const glow = node.id === current ? glowFade * interpolate(frame - appearAt(node.id), [0, 12], [0, 1], clamp) : 0;
				const ghost = interpolate(frame, [start, start + 14], [0, 0.4], clamp) * (1 - interpolate(s, [0, 0.5], [0, 1], clamp));
				const marble = Math.max(18, Math.round(p.f * 0.9));
				const face = isRoot ? theme.soft : '#ffffff';
				return (
					<div key={node.id}>
						{/* ghost slot, so the shape of the process is there before the narration reaches it */}
						<div
							aria-hidden
							style={{position: 'absolute', left: p.x, top: p.y, width: p.w, height: p.h, borderRadius: 14, border: `1.5px dashed ${theme.accent}55`, opacity: ghost}}
						/>
						<div
							style={{
								position: 'absolute',
								left: p.x,
								top: p.y,
								width: p.w,
								height: p.h,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								gap: 12,
								padding: '0 18px',
								borderRadius: 14,
								background: `linear-gradient(160deg, #ffffff 0%, ${face} 55%, ${shade(isRoot ? theme.soft : '#f1f1ee', -0.03)} 100%)`,
								border: `2px solid ${isRoot ? theme.accent : `${theme.accent}40`}`,
								boxShadow: `inset 0 1px 0 rgba(255,255,255,0.9), 0 ${LIP}px 0 ${STONE.lip}, 0 ${LIP + 4}px 14px rgba(58,40,18,0.16), 0 0 0 ${glow * 4}px ${theme.accent2}33`,
								opacity: interpolate(s, [0, 0.5], [0, 1], clamp),
								transform: `translateY(${interpolate(s, [0, 1], [14, 0])}px)`,
							}}
						>
							{showStepNumbers ? (
								<span
									style={{
										...marbleStyle(theme.accent2, marble),
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										color: '#ffffff',
										fontSize: marble * 0.56,
										fontWeight: 800,
										textShadow: '0 1px 1px rgba(0,0,0,0.3)',
										transform: `scale(${1 + 0.07 * (node.id === current ? idlePulse(frame, 60) : 0)})`,
									}}
								>
									{depth[node.id] + 1}
								</span>
							) : null}
							<span
								style={{
									fontSize: p.f,
									fontWeight: 650,
									lineHeight: 1.18,
									color: TOK.ink,
									textAlign: 'center',
									letterSpacing: '-0.01em',
								}}
							>
								{node.label}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};
