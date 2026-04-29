import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const BridgeDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const panelOpacity = interpolate(frame, [0, 18], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Side nodes — slide in from outside
	const leftProgress = spring({frame, fps, config: {damping: 18, stiffness: 140, mass: 0.9}});
	const rightProgress = spring({frame: frame - 10, fps, config: {damping: 18, stiffness: 140, mass: 0.9}});
	const leftX = interpolate(leftProgress, [0, 1], [-90, 0]);
	const rightX = interpolate(rightProgress, [0, 1], [90, 0]);
	const sideOpacity = (p: number) => interpolate(p, [0, 0.4], [0, 1], {extrapolateRight: 'clamp'});

	// Arc draws itself using pathLength normalisation
	const arcOffset = interpolate(frame, [18, 80], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.16, 1, 0.3, 1),
	});

	// Horizontal line draws left → right
	const lineOffset = interpolate(frame, [22, 58], [100, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.bezier(0.16, 1, 0.3, 1),
	});

	// Centre mole node — scales up from its own centre
	const moleProgress = spring({frame: frame - 42, fps, config: {damping: 14, stiffness: 200, mass: 0.7}});
	const moleScale = Math.max(0, moleProgress);
	const moleOpacity = interpolate(moleProgress, [0, 0.35], [0, 1], {extrapolateRight: 'clamp'});

	const arrowOpacity = interpolate(frame, [56, 68], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const footerOpacity = interpolate(frame, [82, 98], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<svg
			className="diagram"
			viewBox="0 0 720 480"
			role="img"
			aria-label="Particles to moles to lab scale bridge"
		>
			<rect
				x="42" y="70" width="636" height="330" rx="8"
				className="diagram-panel"
				opacity={panelOpacity}
			/>

			{/* Arc — draws via strokeDashoffset */}
			<path
				d="M100 300 C220 130, 500 130, 620 300"
				className="bridge-arc"
				pathLength={100}
				strokeDasharray={100}
				strokeDashoffset={arcOffset}
			/>

			{/* Base line — draws left to right */}
			<line
				x1="120" y1="300" x2="600" y2="300"
				className="bridge-line"
				pathLength={100}
				strokeDasharray={100}
				strokeDashoffset={lineOffset}
			/>

			{/* Chevron arrow */}
			<path d="M332 300 l28 24 l28 -24" className="bridge-arrow" opacity={arrowOpacity} />

			{/* Left node — slides from left */}
			<g transform={`translate(${leftX}, 0)`} opacity={sideOpacity(leftProgress)}>
				<circle cx="120" cy="300" r="56" className="node" />
				<text x="120" y="292" textAnchor="middle" className="node-label">particles</text>
				<text x="120" y="324" textAnchor="middle" className="node-small">atoms</text>
			</g>

			{/* Centre mole node — scales from centre */}
			<g
				transform={`translate(360,178) scale(${moleScale}) translate(-360,-178)`}
				opacity={moleOpacity}
			>
				<circle cx="360" cy="178" r="70" className="node middle" />
				<circle cx="360" cy="178" r="98" className="particle-shell" />
				<text x="360" y="172" textAnchor="middle" className="node-label">moles</text>
				<text x="360" y="206" textAnchor="middle" className="node-small">counting unit</text>
			</g>

			{/* Right node — slides from right */}
			<g transform={`translate(${rightX}, 0)`} opacity={sideOpacity(rightProgress)}>
				<circle cx="600" cy="300" r="56" className="node" />
				<text x="600" y="292" textAnchor="middle" className="node-label">lab</text>
				<text x="600" y="324" textAnchor="middle" className="node-small">samples</text>
			</g>

			<text
				x="360" y="382"
				textAnchor="middle"
				className="diagram-footer"
				opacity={footerOpacity}
			>
				the mole bridges invisible particles to measurable samples
			</text>
		</svg>
	);
};
