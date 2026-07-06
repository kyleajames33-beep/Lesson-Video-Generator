// HessCycleDiagram — Hess's law as a triangle: the direct route from
// reactants to products has the same ΔH as the indirect route through an
// intermediate. Teaches path-independence of enthalpy. TOK palette.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const HessCycleDiagram = () => {
	const frame = useCurrentFrame();
	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const directDraw = interpolate(frame, [30, 50], [0, 1], clampOpts);
	const indirectDraw = interpolate(frame, [54, 86], [0, 1], clampOpts);
	const verdict = interpolate(frame, [96, 112], [0, 1], clampOpts);

	// Triangle nodes
	const R = {x: 150, y: 150};   // reactants (top-left)
	const P = {x: 570, y: 150};   // products (top-right)
	const I = {x: 360, y: 360};   // intermediate (bottom)

	const Node = ({n, text, delay}: {n: {x: number; y: number}; text: string; delay: number}) => (
		<g opacity={label(delay)}>
			<rect x={n.x - 80} y={n.y - 30} width={160} height={60} rx={12} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={3} />
			<text x={n.x} y={n.y + 7} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{text}</text>
		</g>
	);

	return (
		<svg viewBox="0 0 720 440" role="img" aria-label="Hess cycle: direct route equals sum of indirect routes" style={{width: '100%'}}>
			{/* direct arrow R -> P (top) */}
			<line x1={R.x + 82} y1={R.y} x2={R.x + 82 + directDraw * (P.x - R.x - 164)} y2={R.y}
				stroke={TOK.chem2} strokeWidth={4} markerEnd={directDraw > 0.95 ? 'url(#hessArrowGreen)' : undefined} opacity={fade} />
			<text x={360} y={132} textAnchor="middle" fill={TOK.chem1} fontSize={22} fontWeight={800} opacity={interpolate(frame, [44, 56], [0, 1], clampOpts)}>direct ΔH</text>

			{/* indirect R -> I -> P */}
			<line x1={R.x + 40} y1={R.y + 30} x2={R.x + 40 + indirectDraw * (I.x - R.x - 90)} y2={R.y + 30 + indirectDraw * (I.y - R.y - 60)}
				stroke={TOK.amber} strokeWidth={4} opacity={fade} />
			<line x1={I.x + 90} y1={I.y - 30} x2={I.x + 90 + indirectDraw * (P.x - I.x - 130)} y2={I.y - 30 + indirectDraw * (P.y - I.y + 60)}
				stroke={TOK.amber} strokeWidth={4} opacity={fade} />
			<text x={210} y={290} textAnchor="middle" fill={TOK.amber} fontSize={19} fontWeight={700} opacity={interpolate(frame, [70, 82], [0, 1], clampOpts)}>ΔH₁</text>
			<text x={510} y={290} textAnchor="middle" fill={TOK.amber} fontSize={19} fontWeight={700} opacity={interpolate(frame, [78, 90], [0, 1], clampOpts)}>ΔH₂</text>

			<defs>
				<marker id="hessArrowGreen" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto"><polygon points="0 0, 10 4, 0 8" fill={TOK.chem2} /></marker>
			</defs>

			<Node n={R} text="reactants" delay={6} />
			<Node n={P} text="products" delay={10} />
			<Node n={I} text="intermediate" delay={58} />

			<text x={360} y={424} textAnchor="middle" fill={TOK.chem1} fontSize={23} fontWeight={800} opacity={verdict}>
				direct ΔH = ΔH₁ + ΔH₂  (path doesn't matter)
			</text>
		</svg>
	);
};
