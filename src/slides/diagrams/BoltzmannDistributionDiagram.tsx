import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {
	temperatureLow: number;
	temperatureHigh: number;
	activationEnergy: number;
	delay?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Simplified Maxwell-Boltzmann energy distribution: f(E) ∝ sqrt(E) * exp(-E/T)
const maxwellBoltzmann = (E: number, T: number) => {
	if (E <= 0) return 0;
	return Math.sqrt(E) * Math.exp(-E / T);
};

const generateCurve = (T: number, eMax: number, steps = 120) => {
	const points: {x: number; y: number}[] = [];
	for (let i = 0; i <= steps; i++) {
		const E = (i / steps) * eMax;
		const y = maxwellBoltzmann(E, T);
		points.push({x: E, y});
	}
	return points;
};

const buildPath = (points: {x: number; y: number}[], xScale: number, yScale: number, xOffset: number, yOffset: number, height: number) => {
	if (points.length === 0) return '';
	let d = `M ${xOffset + points[0].x * xScale} ${yOffset + height - points[0].y * yScale}`;
	for (let i = 1; i < points.length; i++) {
		d += ` L ${xOffset + points[i].x * xScale} ${yOffset + height - points[i].y * yScale}`;
	}
	return d;
};

const buildAreaPath = (points: {x: number; y: number}[], xScale: number, yScale: number, xOffset: number, yOffset: number, height: number) => {
	if (points.length === 0) return '';
	let d = `M ${xOffset + points[0].x * xScale} ${yOffset + height}`;
	for (let i = 0; i < points.length; i++) {
		d += ` L ${xOffset + points[i].x * xScale} ${yOffset + height - points[i].y * yScale}`;
	}
	d += ` L ${xOffset + points[points.length - 1].x * xScale} ${yOffset + height} Z`;
	return d;
};

export const BoltzmannDistributionDiagram = ({temperatureLow, temperatureHigh, activationEnergy, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const axisP = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 120, mass: 1}});
	const curveP = spring({frame: frame - delay - 15, fps, config: {damping: 16, stiffness: 100, mass: 0.9}});
	const labelOpacity = interpolate(frame, [delay + 50, delay + 70], [0, 1], clamp);
	const eaLineP = spring({frame: frame - delay - 40, fps, config: {damping: 16, stiffness: 100, mass: 0.9}});

	// Plot area
	const plotX = 80;
	const plotY = 60;
	const plotW = 540;
	const plotH = 280;

	// Energy range: 0 to ~3x the higher temperature for nice spread
	const eMax = Math.max(activationEnergy * 2.5, temperatureHigh * 3);

	// Generate curves
	const lowTPoints = generateCurve(temperatureLow, eMax);
	const highTPoints = generateCurve(temperatureHigh, eMax);

	// Find max Y for scaling
	const allY = [...lowTPoints.map(p => p.y), ...highTPoints.map(p => p.y)];
	const maxY = Math.max(...allY) * 1.15;

	const xScale = plotW / eMax;
	const yScale = plotH / maxY;

	// Build paths
	const lowTPath = buildPath(lowTPoints, xScale, yScale, plotX, plotY, plotH);
	const highTPath = buildPath(highTPoints, xScale, yScale, plotX, plotY, plotH);
	const lowTArea = buildAreaPath(lowTPoints, xScale, yScale, plotX, plotY, plotH);
	const highTArea = buildAreaPath(highTPoints, xScale, yScale, plotX, plotY, plotH);

	// Ea line position
	const eaX = plotX + activationEnergy * xScale;

	// Animate path draw
	const pathLength = 1200;
	const drawLow = interpolate(curveP, [0, 1], [0, pathLength], clamp);
	const drawHigh = interpolate(curveP, [0, 1], [0, pathLength], clamp);

	return (
		<svg viewBox="0 0 700 430" className="diagram">
			{/* Axes */}
			<g opacity={axisP}>
				<line x1={plotX} y1={plotY + plotH} x2={plotX + plotW} y2={plotY + plotH} stroke="rgba(226,232,240,0.4)" strokeWidth="2.5" />
				<line x1={plotX} y1={plotY + plotH} x2={plotX} y2={plotY} stroke="rgba(226,232,240,0.4)" strokeWidth="2.5" />
				<text x={plotX + plotW / 2} y={plotY + plotH + 40} textAnchor="middle" fontSize="14" fontWeight="600" fill="#94a3b8">Kinetic energy</text>
				<text x={30} y={plotY + plotH / 2} textAnchor="middle" fontSize="14" fontWeight="600" fill="#94a3b8" transform={`rotate(-90, 30, ${plotY + plotH / 2})`}>Fraction of molecules</text>
			</g>

			{/* Low T area (under curve, past Ea) */}
			<g opacity={curveP}>
				<path d={lowTArea} fill="rgba(107, 220, 255, 0.12)" stroke="none" />
			</g>

			{/* High T area (under curve, past Ea) */}
			<g opacity={curveP}>
				<path d={highTArea} fill="rgba(245, 158, 11, 0.10)" stroke="none" />
			</g>

			{/* Low T curve */}
			<path d={lowTPath} fill="none" stroke="#6bdcff" strokeWidth="3" strokeLinecap="round"
				strokeDasharray={pathLength} strokeDashoffset={pathLength - drawLow} />

			{/* High T curve */}
			<path d={highTPath} fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"
				strokeDasharray={pathLength} strokeDashoffset={pathLength - drawHigh} />

			{/* Ea line */}
			<g opacity={eaLineP}>
				<line x1={eaX} y1={plotY} x2={eaX} y2={plotY + plotH} stroke="#ef4444" strokeWidth="2" strokeDasharray="6,4" />
				<text x={eaX} y={plotY - 10} textAnchor="middle" fontSize="13" fontWeight="700" fill="#ef4444">Eₐ</text>
			</g>

			{/* Labels */}
			<g opacity={labelOpacity}>
				<text x={plotX + plotW * 0.25} y={plotY + plotH * 0.35} textAnchor="middle" fontSize="13" fontWeight="600" fill="#6bdcff">
					Lower temperature
				</text>
				<text x={plotX + plotW * 0.55} y={plotY + plotH * 0.55} textAnchor="middle" fontSize="13" fontWeight="600" fill="#f59e0b">
					Higher temperature
				</text>
				<text x={eaX + 8} y={plotY + plotH - 20} textAnchor="start" fontSize="12" fontWeight="600" fill="#ef4444">
					Molecules with E ≥ Eₐ can react
				</text>
			</g>
		</svg>
	);
};
