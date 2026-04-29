import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Part = {label: string; color?: string};
type Props = {parts: Part[]; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const PALETTE = ['#4f46e5', '#0891b2', '#d97706', '#dc2626', '#059669', '#7c3aed'];

export const ExplodeDiagram = ({parts, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const n = parts.length;
	const cx = 350, cy = 215;
	const r = Math.min(160, 80 + n * 18);

	const explodeP = spring({frame: frame - delay - 8,  fps, config: {damping: 6,  stiffness: 300, mass: 0.65}});
	const reassembleP = spring({frame: frame - delay - 52, fps, config: {damping: 18, stiffness: 160, mass: 0.9}});

	return (
		<svg viewBox="0 0 700 430" className="diagram">
			{parts.map((part, i) => {
				const angle = (2 * Math.PI * i) / n - Math.PI / 2;
				const tx = Math.cos(angle) * r;
				const ty = Math.sin(angle) * r;

				const appearP = spring({frame: frame - delay - i * 3, fps, config: {damping: 14, stiffness: 260, mass: 0.6}});
				const appearScale = interpolate(appearP, [0, 1], [0, 1], clamp);

				const netOffset = Math.max(0, interpolate(explodeP, [0, 1], [0, 1], clamp) - interpolate(reassembleP, [0, 1], [0, 1], clamp));
				const px = cx + tx * netOffset;
				const py = cy + ty * netOffset;

				const color = part.color ?? PALETTE[i % PALETTE.length];

				return (
					<g key={i} style={{transformOrigin: `${cx}px ${cy}px`, transform: `scale(${appearScale})`}}>
						<circle cx={px} cy={py} r={34} fill={`${color}22`} stroke={color} strokeWidth="2.5" />
						<text x={px} y={py + 7} textAnchor="middle" fontSize="20" fontWeight="800" fill={color}>
							{part.label}
						</text>
					</g>
				);
			})}

			{/* Centre pulse when reassembled */}
			{(() => {
				const holdP = interpolate(frame - (delay + 78), [0, 14], [0, 1], clamp);
				return (
					<circle cx={cx} cy={cy} r={interpolate(holdP, [0, 1], [0, 22], clamp)}
						fill="none" stroke="#4f46e5" strokeWidth="2"
						opacity={interpolate(holdP, [0, 0.5, 1], [0, 0.5, 0], clamp)} />
				);
			})()}
		</svg>
	);
};
