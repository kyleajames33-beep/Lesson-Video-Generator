import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {leftLabel: string; rightLabel: string; leftValue: number; rightValue: number; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const BalanceDiagram = ({leftLabel, rightLabel, leftValue, rightValue, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const appear = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 160, mass: 0.8}});
	const tiltSpring = spring({frame: frame - delay - 22, fps, config: {damping: 16, stiffness: 90, mass: 1.4}});

	const opacity = interpolate(appear, [0, 1], [0, 1], clamp);
	const total = leftValue + rightValue;
	const tiltTarget = total > 0 ? ((rightValue - leftValue) / total) * 18 : 0;
	const tilt = interpolate(tiltSpring, [0, 1], [0, tiltTarget]);

	const px = 350, py = 175;
	const arm = 192;

	// Annotation timing — circle pops on the right pan, then label appears
	const circleAt = delay + 70;
	const circleP = spring({frame: frame - circleAt, fps, config: {damping: 15, stiffness: 130, mass: 0.9}});
	const circleR = interpolate(circleP, [0, 1], [10, 78], clamp);
	const circleOp = interpolate(circleP, [0, 0.4, 1], [0, 0.9, 0.85], clamp);

	const labelAt = circleAt + 20;
	const labelP = spring({frame: frame - labelAt, fps, config: {damping: 14, stiffness: 160, mass: 0.8}});
	const labelOp = interpolate(labelP, [0, 0.5], [0, 1], clamp);
	const labelX = interpolate(labelP, [0, 1], [40, 0], clamp);

	// Equals callout — connects the two pans visually
	const equalsAt = delay + 130;
	const equalsP = spring({frame: frame - equalsAt, fps, config: {damping: 14, stiffness: 160, mass: 0.85}});
	const equalsOp = interpolate(equalsP, [0, 0.5], [0, 1], clamp);
	const equalsScale = interpolate(equalsP, [0, 0.5, 1], [0.4, 1.18, 1], clamp);

	return (
		<svg viewBox="0 0 700 460" className="diagram" style={{opacity}}>
			{/* Post + base — fixed (outside rotating group) */}
			<rect x={px - 6} y={py} width="12" height="128" rx="4" fill="#a8a29e" />
			<polygon points={`${px - 46},${py + 128} ${px + 46},${py + 128} ${px},${py + 172}`} fill="#78716c" />
			<rect x={px - 72} y={py + 172} width="144" height="10" rx="4" fill="#a8a29e" />

			{/* Rotating assembly */}
			<g transform={`rotate(${tilt},${px},${py})`}>
				{/* Beam */}
				<rect x={px - arm - 14} y={py - 7} width={(arm + 14) * 2} height="14" rx="7" fill="#4f46e5" opacity="0.88" />
				<circle cx={px} cy={py} r="12" fill="#3730a3" />

				{/* Left arm */}
				<line x1={px - arm} y1={py + 7} x2={px - arm} y2={py + 56} stroke="#4f46e5" strokeWidth="2.5" opacity="0.65" />
				<rect x={px - arm - 54} y={py + 56} width="108" height="74" rx="12" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" />

				{/* Left labels — counter-rotated to stay upright */}
				<g transform={`rotate(${-tilt},${px - arm},${py + 93})`}>
					<text x={px - arm} y={py + 88} textAnchor="middle" fontSize="30" fontWeight="800" fill="#4f46e5">{leftValue}</text>
					<text x={px - arm} y={py + 112} textAnchor="middle" fontSize="19" fontWeight="600" fill="#78716c">{leftLabel}</text>
				</g>

				{/* Right arm */}
				<line x1={px + arm} y1={py + 7} x2={px + arm} y2={py + 56} stroke="#4f46e5" strokeWidth="2.5" opacity="0.65" />
				<rect x={px + arm - 54} y={py + 56} width="108" height="74" rx="12" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />

				{/* Right labels */}
				<g transform={`rotate(${-tilt},${px + arm},${py + 93})`}>
					<text x={px + arm} y={py + 88} textAnchor="middle" fontSize="30" fontWeight="800" fill="#f59e0b">{rightValue}</text>
					<text x={px + arm} y={py + 112} textAnchor="middle" fontSize="19" fontWeight="600" fill="#78716c">{rightLabel}</text>
				</g>
			</g>

			{/* Circle annotation around the right pan */}
			{circleOp > 0 ? (
				<circle
					cx={px + arm}
					cy={py + 93}
					r={circleR}
					fill="none"
					stroke="#dc2626"
					strokeWidth="3.5"
					strokeDasharray="6 4"
					opacity={circleOp}
				/>
			) : null}

			{/* "12.000 grams exactly" callout — floats below right pan */}
			{labelOp > 0 ? (
				<g opacity={labelOp} transform={`translate(${labelX}, 0)`}>
					<line
						x1={px + arm + 60} y1={py + 100}
						x2={px + arm + 130} y2={py + 175}
						stroke="#dc2626" strokeWidth="2.5"
					/>
					<rect
						x={px + arm + 100} y={py + 175}
						width={170} height={56} rx={10}
						fill="#dc2626"
					/>
					<text
						x={px + arm + 185} y={py + 200}
						textAnchor="middle" fontSize="22" fontWeight="800" fill="#ffffff"
					>
						exactly
					</text>
					<text
						x={px + arm + 185} y={py + 222}
						textAnchor="middle" fontSize="19" fontWeight="700" fill="#fef2f2"
					>
						12.000 g
					</text>
				</g>
			) : null}

			{/* Equals sign in middle linking the two */}
			{equalsOp > 0 ? (
				<g opacity={equalsOp}>
					<text
						x={px} y={py + 280}
						textAnchor="middle" fontSize="44" fontWeight="900" fill="#3730a3"
						transform={`scale(${equalsScale}) translate(${px * (1 - 1/equalsScale)}, ${(py + 280) * (1 - 1/equalsScale)})`}
					>
						1 mol C-12  =  12.000 g
					</text>
				</g>
			) : null}
		</svg>
	);
};
