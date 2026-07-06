import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {
	leftMetal: string;
	leftIon: string;
	rightMetal: string;
	rightIon: string;
	delay?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const GalvanicCellDiagram = ({leftMetal, leftIon, rightMetal, rightIon, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const containerP = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 120, mass: 1}});
	const bridgeP = spring({frame: frame - delay - 12, fps, config: {damping: 18, stiffness: 120, mass: 1}});
	const wireP = spring({frame: frame - delay - 20, fps, config: {damping: 18, stiffness: 120, mass: 1}});
	const labelOpacity = interpolate(frame, [delay + 40, delay + 60], [0, 1], clamp);
	const electronOpacity = interpolate(frame, [delay + 55, delay + 70], [0, 1], clamp);

	const leftY = interpolate(containerP, [0, 1], [480, 0]);
	const rightY = interpolate(containerP, [0, 1], [480, 0]);
	const bridgeY = interpolate(bridgeP, [0, 1], [-80, 0]);
	const wireScale = interpolate(wireP, [0, 1], [0, 1]);

	const electronProgress = (frame - delay - 60) % 40;
	const eX = interpolate(electronProgress, [0, 20], [180, 520], clamp);

	return (
		<svg viewBox="0 0 700 430" className="diagram">
			{/* Left half-cell container */}
			<g transform={`translate(0, ${leftY})`}>
				{/* Solution */}
				<rect x="80" y="180" width="200" height="160" rx="6"
					fill="rgba(107,220,255,0.08)" stroke="rgba(107,220,255,0.35)" strokeWidth="2" />
				{/* Electrode */}
				<rect x="165" y="80" width="30" height="120" rx="4"
					fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
				{/* Metal label on electrode */}
				<text x="180" y="145" textAnchor="middle" fontSize="16" fontWeight="700" fill="#e2e8f0">{leftMetal}</text>
				{/* Solution label */}
				<text x="180" y="280" textAnchor="middle" fontSize="16" fontWeight="600" fill="#6bdcff">{leftIon}</text>
			</g>

			{/* Right half-cell container */}
			<g transform={`translate(0, ${rightY})`}>
				{/* Solution */}
				<rect x="420" y="180" width="200" height="160" rx="6"
					fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.35)" strokeWidth="2" />
				{/* Electrode */}
				<rect x="505" y="80" width="30" height="120" rx="4"
					fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
				{/* Metal label on electrode */}
				<text x="520" y="145" textAnchor="middle" fontSize="16" fontWeight="700" fill="#e2e8f0">{rightMetal}</text>
				{/* Solution label */}
				<text x="520" y="280" textAnchor="middle" fontSize="16" fontWeight="600" fill="#f59e0b">{rightIon}</text>
			</g>

			{/* Salt bridge */}
			<g transform={`translate(0, ${bridgeY})`} opacity={bridgeP}>
				<path d="M 280 200 Q 280 140, 350 140 Q 420 140, 420 200"
					fill="none" stroke="rgba(226,232,240,0.45)" strokeWidth="12" strokeLinecap="round" />
				<path d="M 280 200 Q 280 140, 350 140 Q 420 140, 420 200"
					fill="none" stroke="rgba(226,232,240,0.15)" strokeWidth="8" strokeLinecap="round" />
				<text x="350" y="130" textAnchor="middle" fontSize="13" fontWeight="600" fill="#cbd5e1">salt bridge</text>
			</g>

			{/* External wire */}
			<g opacity={wireScale}>
				<path d="M 180 80 Q 180 30, 350 30 Q 520 30, 520 80"
					fill="none" stroke="#94a3b8" strokeWidth="3" />
				{/* Voltmeter */}
				<circle cx="350" cy="30" r="18" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
				<text x="350" y="35" textAnchor="middle" fontSize="12" fontWeight="700" fill="#e2e8f0">V</text>
			</g>

			{/* Electron flow */}
			<g opacity={electronOpacity}>
				<circle cx={eX} cy="30" r="5" fill="#f59e0b" />
				<text x="350" y="58" textAnchor="middle" fontSize="13" fontWeight="600" fill="#f59e0b">e⁻ flow</text>
			</g>

			{/* Labels */}
			<g opacity={labelOpacity}>
				<text x="180" y="370" textAnchor="middle" fontSize="15" fontWeight="700" fill="#6bdcff">ANODE</text>
				<text x="180" y="390" textAnchor="middle" fontSize="13" fontWeight="500" fill="#94a3b8">oxidation</text>

				<text x="520" y="370" textAnchor="middle" fontSize="15" fontWeight="700" fill="#f59e0b">CATHODE</text>
				<text x="520" y="390" textAnchor="middle" fontSize="13" fontWeight="500" fill="#94a3b8">reduction</text>
			</g>
		</svg>
	);
};
