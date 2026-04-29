import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type FlowNode = {id: string; label: string};
type FlowEdge = {from: string; to: string};
type Props = {nodes: FlowNode[]; edges: FlowEdge[]; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const R = 46;

export const FlowDiagram = ({nodes, edges, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const n = nodes.length;

	const pos: Record<string, {x: number; y: number}> = {};
	nodes.forEach((node, i) => {
		pos[node.id] = {
			x: n === 1 ? 350 : Math.round(80 + (540 / (n - 1)) * i),
			y: 180,
		};
	});

	return (
		<svg viewBox="0 0 700 360" className="diagram">
			<defs>
				<marker id="fdarrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
					<polygon points="0 0, 10 3.5, 0 7" fill="#4f46e5" opacity="0.75" />
				</marker>
			</defs>

			{/* Edges — draw themselves after nodes appear */}
			{edges.map(({from, to}, i) => {
				const src = pos[from];
				const tgt = pos[to];
				if (!src || !tgt) return null;
				const x1 = src.x + R;
				const y1 = src.y;
				const x2 = tgt.x - R - 8;
				const y2 = tgt.y;
				const len = Math.hypot(x2 - x1, y2 - y1);
				const edgeDelay = delay + 22 + i * 16;
				const ep = interpolate(frame - edgeDelay, [0, 20], [0, 1], clamp);
				const eased = 1 - Math.pow(1 - ep, 2);

				return (
					<line key={`e${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
						stroke="#4f46e5" strokeWidth="3" opacity="0.65"
						strokeDasharray={len} strokeDashoffset={(1 - eased) * len}
						markerEnd="url(#fdarrow)" />
				);
			})}

			{/* Nodes */}
			{nodes.map((node, i) => {
				const p = pos[node.id];
				const np = spring({frame: frame - delay - i * 10, fps, config: {damping: 16, stiffness: 200, mass: 0.7}});
				const scale = interpolate(np, [0, 1], [0, 1], clamp);
				return (
					<g key={node.id} style={{transform: `scale(${scale})`, transformOrigin: `${p.x}px ${p.y}px`}}>
						<circle cx={p.x} cy={p.y} r={R} className="node" />
						<text x={p.x} y={p.y + 7} textAnchor="middle" fontSize="21" fontWeight="700" fill="#1c1917">
							{node.label}
						</text>
					</g>
				);
			})}
		</svg>
	);
};
