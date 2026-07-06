import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {
	exothermic: boolean;
	ea: number;
	deltaH: number;
	showCatalyst?: boolean;
	delay?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const EnergyProfileDiagram = ({exothermic, ea, deltaH, showCatalyst = false, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const axisP = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 120, mass: 1}});
	const pathP = spring({frame: frame - delay - 15, fps, config: {damping: 16, stiffness: 100, mass: 0.9}});
	const labelOpacity = interpolate(frame, [delay + 40, delay + 60], [0, 1], clamp);
	const catalystP = spring({frame: frame - delay - 50, fps, config: {damping: 16, stiffness: 100, mass: 0.9}});

	const reactantY = exothermic ? 140 : 280;
	const productY = exothermic ? 280 : 140;
	const peakY = 100;
	const catalystPeakY = 160;

	// Build the main reaction path
	const mainPath = `M 180 ${reactantY} Q 280 ${peakY} 350 ${peakY} Q 420 ${peakY} 520 ${productY}`;
	const catalystPath = `M 180 ${reactantY} Q 260 ${catalystPeakY} 350 ${catalystPeakY} Q 440 ${catalystPeakY} 520 ${productY}`;

	// Animate path draw
	const pathLength = 800;
	const drawMain = interpolate(pathP, [0, 1], [0, pathLength], clamp);
	const drawCatalyst = interpolate(catalystP, [0, 1], [0, pathLength], clamp);

	return (
		<svg viewBox="0 0 700 430" className="diagram">
			{/* Axes */}
			<g opacity={axisP}>
				{/* Y-axis */}
				<line x1="60" y1="360" x2="60" y2="60" stroke="rgba(226,232,240,0.4)" strokeWidth="2.5" />
				{/* X-axis */}
				<line x1="60" y1="360" x2="640" y2="360" stroke="rgba(226,232,240,0.4)" strokeWidth="2.5" />
				{/* Y-axis label */}
				<text x="30" y="100" textAnchor="middle" fontSize="14" fontWeight="600" fill="#94a3b8" transform="rotate(-90, 30, 100)">Energy</text>
				{/* X-axis label */}
				<text x="350" y="400" textAnchor="middle" fontSize="14" fontWeight="600" fill="#94a3b8">Reaction progress</text>
			</g>

			{/* Reactants line */}
			<g opacity={pathP}>
				<line x1="80" y1={reactantY} x2="180" y2={reactantY}
					stroke="#6bdcff" strokeWidth="3" strokeLinecap="round" />
				<text x="130" y={reactantY - 12} textAnchor="middle" fontSize="15" fontWeight="700" fill="#6bdcff">Reactants</text>
			</g>

			{/* Products line */}
			<g opacity={pathP}>
				<line x1="520" y1={productY} x2="620" y2={productY}
					stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
				<text x="570" y={productY - 12} textAnchor="middle" fontSize="15" fontWeight="700" fill="#f59e0b">Products</text>
			</g>

			{/* Main reaction path */}
			<path d={mainPath} fill="none" stroke="#e2e8f0" strokeWidth="3.5" strokeLinecap="round"
				strokeDasharray={pathLength} strokeDashoffset={pathLength - drawMain} />

			{/* Catalyst path */}
			{showCatalyst && (
				<path d={catalystPath} fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8,6"
					strokeDashoffset={pathLength - drawCatalyst} />
			)}

			{/* Labels */}
			<g opacity={labelOpacity}>
				{/* Ea label */}
				<line x1="350" y1={peakY} x2="350" y2={peakY - 40} stroke="#cbd5e1" strokeWidth="1.5" />
				<text x="350" y={peakY - 50} textAnchor="middle" fontSize="14" fontWeight="700" fill="#e2e8f0">Eₐ = {ea} kJ/mol</text>

				{/* ΔH label */}
				<line x1="580" y1={reactantY} x2="580" y2={productY} stroke="#cbd5e1" strokeWidth="1.5" />
				<text x="600" y={(reactantY + productY) / 2} textAnchor="start" fontSize="14" fontWeight="700" fill="#e2e8f0">ΔH = {deltaH > 0 ? '+' : ''}{deltaH} kJ/mol</text>

				{/* Catalyst label */}
				{showCatalyst && (
					<text x="350" y={catalystPeakY - 15} textAnchor="middle" fontSize="13" fontWeight="600" fill="#94a3b8">Catalyst</text>
				)}
			</g>
		</svg>
	);
};
