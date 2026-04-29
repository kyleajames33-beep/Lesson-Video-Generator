import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const HE_PARTICLES = Array.from({length: 20}, (_, i) => i);
const C_PARTICLES = Array.from({length: 20}, (_, i) => i);

export const MassComparisonDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const panelOpacity = interpolate(frame, [0, 16], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const labelOpacity = (delay: number) =>
		interpolate(frame, [delay, delay + 14], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

	// Particles stagger in — 2.5 frames apart, starting at frame 22
	const particleScale = (i: number) => {
		const p = spring({
			frame: frame - 22 - i * 2.5,
			fps,
			config: {damping: 12, stiffness: 260, mass: 0.55},
		});
		return Math.max(0, p);
	};

	// Mass numbers — big spring reveal (the "aha" moment after all particles are in)
	const massProgress = (delay: number) =>
		spring({
			frame: frame - delay,
			fps,
			config: {damping: 11, stiffness: 300, mass: 0.6},
		});

	const heNum = massProgress(84);
	const cNum = massProgress(90);
	const numScale = (p: number) => Math.max(0, p);
	const numOpacity = (p: number) =>
		interpolate(p, [0, 0.3], [0, 1], {extrapolateRight: 'clamp'});

	const dividerOpacity = interpolate(frame, [8, 22], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const footerOpacity = interpolate(frame, [100, 116], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<svg
			className="diagram"
			viewBox="0 0 720 480"
			role="img"
			aria-label="Equal particle count with different mass"
		>
			<rect x="72" y="80" width="238" height="300" rx="8" className="diagram-panel" opacity={panelOpacity} />
			<rect x="410" y="80" width="238" height="300" rx="8" className="diagram-panel accent" opacity={panelOpacity} />
			<line x1="360" y1="114" x2="360" y2="364" className="diagram-divider" opacity={dividerOpacity} />

			{/* Labels */}
			<text x="191" y="140" textAnchor="middle" className="diagram-title" opacity={labelOpacity(5)}>
				1 mol He
			</text>
			<text x="529" y="140" textAnchor="middle" className="diagram-title" opacity={labelOpacity(8)}>
				1 mol C
			</text>
			<text x="191" y="166" textAnchor="middle" className="diagram-muted" opacity={labelOpacity(16)}>
				same particle count
			</text>
			<text x="529" y="166" textAnchor="middle" className="diagram-muted" opacity={labelOpacity(19)}>
				same particle count
			</text>

			{/* He particles — small, spring in */}
			{HE_PARTICLES.map((i) => {
				const scale = particleScale(i);
				const cx = 126 + (i % 5) * 32;
				const cy = 190 + Math.floor(i / 5) * 32;
				return (
					<circle
						key={i}
						cx={cx}
						cy={cy}
						r="9"
						className="particle"
						transform={`translate(${cx},${cy}) scale(${scale}) translate(${-cx},${-cy})`}
						opacity={interpolate(scale, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})}
					/>
				);
			})}

			{/* C particles — bigger, same stagger */}
			{C_PARTICLES.map((i) => {
				const scale = particleScale(i);
				const cx = 464 + (i % 5) * 32;
				const cy = 190 + Math.floor(i / 5) * 32;
				return (
					<circle
						key={i}
						cx={cx}
						cy={cy}
						r="14"
						className="particle carbon"
						transform={`translate(${cx},${cy}) scale(${scale}) translate(${-cx},${-cy})`}
						opacity={interpolate(scale, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})}
					/>
				);
			})}

			{/* Mass numbers — spring pop reveal */}
			<g
				transform={`translate(191,336) scale(${numScale(heNum)}) translate(-191,-336)`}
				opacity={numOpacity(heNum)}
			>
				<text x="191" y="336" textAnchor="middle" className="diagram-number">4.00 g</text>
			</g>

			<g
				transform={`translate(529,336) scale(${numScale(cNum)}) translate(-529,-336)`}
				opacity={numOpacity(cNum)}
			>
				<text x="529" y="336" textAnchor="middle" className="diagram-number">12.01 g</text>
			</g>

			<text
				x="360" y="434"
				textAnchor="middle"
				className="diagram-footer"
				opacity={footerOpacity}
			>
				same number of particles does not mean same mass
			</text>
		</svg>
	);
};
