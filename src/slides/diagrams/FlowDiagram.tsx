// FlowDiagram — process chains and small trees, laid out top-to-bottom in
// layers (depth = longest path from a root). Nodes are rounded cards with
// wrapped labels; edges draw on after their source node lands.
//
// Replaces the legacy version (fixed-size circles in a single row, hard-coded
// indigo): labels up to ~30 chars overflowed the circles, 5–7 node chains were
// squeezed into one line, and branching flows (8 lessons) drew over each other.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, FONT_MONO, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';

type FlowNode = {id: string; label: string};
type FlowEdge = {from: string; to: string};
type Props = {nodes: FlowNode[]; edges: FlowEdge[]; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Sized to the concept VisualStage's inner box (~744×554).
const W = 740;
const MAX_H = 550;
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

export const FlowDiagram = ({nodes, edges, delay = 0}: Props) => {
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

	const appearAt = (id: string) => delay + depth[id] * 16 + (pos[id]?.order ?? 0) * 3;

	return (
		<div style={{position: 'relative', width: W, height: H, fontFamily: FONT_DISPLAY}}>
			<svg width={W} height={H} style={{position: 'absolute', inset: 0, overflow: 'visible'}}>
				<defs>
					<marker id="flow-arrow" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
						<path d="M0,0 L10,4 L0,8 z" fill={theme.accent2} />
					</marker>
				</defs>
				{edges.map(({from, to}, i) => {
					const a = pos[from];
					const b = pos[to];
					if (!a || !b) return null;
					const x1 = a.x + a.w / 2;
					const y1 = a.y + a.h;
					const x2 = b.x + b.w / 2;
					const y2 = b.y - 6;
					const midY = (y1 + y2) / 2;
					const d = `M${x1},${y1} C${x1},${midY} ${x2},${midY} ${x2},${y2}`;
					const len = Math.hypot(x2 - x1, y2 - y1) * 1.25 + 10;
					const t = interpolate(frame, [appearAt(from) + 10, appearAt(from) + 26], [0, 1], clamp);
					return (
						<path
							key={`${from}-${to}-${i}`}
							d={d}
							fill="none"
							stroke={theme.accent2}
							strokeWidth={3}
							strokeLinecap="round"
							strokeDasharray={len}
							strokeDashoffset={(1 - t) * len}
							markerEnd={t > 0.92 ? 'url(#flow-arrow)' : undefined}
							opacity={0.85}
						/>
					);
				})}
			</svg>

			{nodes.map((node, i) => {
				const p = pos[node.id];
				const s = spring({frame: frame - appearAt(node.id), fps, config: {damping: 18, stiffness: 190, mass: 0.7}});
				const isRoot = depth[node.id] === 0;
				return (
					<div
						key={node.id}
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
							background: isRoot ? theme.soft : TOK.card,
							border: `2px solid ${isRoot ? theme.accent : `${theme.accent}40`}`,
							boxShadow: TOK.cardShadow,
							opacity: interpolate(s, [0, 0.5], [0, 1], clamp),
							transform: `translateY(${interpolate(s, [0, 1], [14, 0])}px)`,
						}}
					>
						{showStepNumbers ? (
							<span style={{fontFamily: FONT_MONO, fontSize: p.f * 0.62, color: theme.accent, letterSpacing: '0.08em'}}>
								{String(i + 1).padStart(2, '0')}
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
				);
			})}
		</div>
	);
};
