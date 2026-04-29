import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const DOTS = Array.from({length: 12}, (_, i) => i);
const CLOUD = Array.from({length: 96}, (_, i) => i);

export const DozenMoleDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const panelOpacity = interpolate(frame, [0, 14], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const labelOpacity = (delay: number) =>
		interpolate(frame, [delay, delay + 12], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

	// 12 dozen dots — spring in one by one, 4 frames apart
	const dotScale = (i: number) => {
		const p = spring({
			frame: frame - 15 - i * 4,
			fps,
			config: {damping: 12, stiffness: 220, mass: 0.6},
		});
		return Math.max(0, p);
	};

	// Mole cloud — animate 4 row groups (24 particles each)
	const rowOpacity = (row: number) =>
		interpolate(frame, [22 + row * 6, 38 + row * 6], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

	const shellOpacity = interpolate(frame, [20, 36], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Numbers — big spring pop after content is in
	const dozenNumProgress = spring({
		frame: frame - 64,
		fps,
		config: {damping: 12, stiffness: 250, mass: 0.65},
	});
	const moleNumProgress = spring({
		frame: frame - 68,
		fps,
		config: {damping: 12, stiffness: 250, mass: 0.65},
	});
	const numScale = (p: number) => Math.max(0, p);
	const numOpacity = (p: number) =>
		interpolate(p, [0, 0.3], [0, 1], {extrapolateRight: 'clamp'});

	const footerOpacity = interpolate(frame, [85, 100], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<svg
			className="diagram"
			viewBox="0 0 720 480"
			role="img"
			aria-label="Dozen and mole comparison"
		>
			<rect x="24" y="42" width="292" height="360" rx="8" className="diagram-panel" opacity={panelOpacity} />
			<rect x="404" y="42" width="292" height="360" rx="8" className="diagram-panel accent" opacity={panelOpacity} />
			<line x1="360" y1="78" x2="360" y2="392" className="diagram-divider" opacity={panelOpacity} />

			<rect x="72" y="122" width="196" height="144" rx="8" className="diagram-badge" opacity={panelOpacity} />

			<text x="170" y="104" textAnchor="middle" className="diagram-title" opacity={labelOpacity(4)}>
				Dozen
			</text>
			<text x="550" y="104" textAnchor="middle" className="diagram-title" opacity={labelOpacity(8)}>
				Mole
			</text>
			<text x="170" y="304" textAnchor="middle" className="diagram-muted" opacity={labelOpacity(60)}>
				everyday counting
			</text>

			{/* 12 dots — spring in one by one */}
			{DOTS.map((dot) => {
				const scale = dotScale(dot);
				const cx = 90 + (dot % 4) * 54;
				const cy = 172 + Math.floor(dot / 4) * 54;
				return (
					<circle
						key={dot}
						cx={cx}
						cy={cy}
						r="16"
						className="particle"
						transform={`translate(${cx},${cy}) scale(${scale}) translate(${-cx},${-cy})`}
						opacity={interpolate(scale, [0, 0.3], [0, 1], {extrapolateRight: 'clamp'})}
					/>
				);
			})}

			{/* Mole shells */}
			<circle cx="550" cy="222" r="114" className="particle-shell" opacity={shellOpacity} />
			<circle cx="550" cy="222" r="82" className="particle-shell" opacity={shellOpacity} />

			{/* Mole cloud — 4 rows fade in sequentially */}
			{CLOUD.map((p) => {
				const row = Math.floor((p / 96) * 4);
				return (
					<circle
						key={p}
						cx={462 + (p % 12) * 16}
						cy={142 + Math.floor(p / 12) * 22}
						r={p % 5 === 0 ? 4.5 : 3.5}
						className="particle tiny"
						opacity={rowOpacity(row)}
					/>
				);
			})}

			{/* Numbers — spring pop */}
			<g
				transform={`translate(170,342) scale(${numScale(dozenNumProgress)}) translate(-170,-342)`}
				opacity={numOpacity(dozenNumProgress)}
			>
				<text x="170" y="342" textAnchor="middle" className="diagram-number">12</text>
			</g>

			<g
				transform={`translate(550,342) scale(${numScale(moleNumProgress)}) translate(-550,-342)`}
				opacity={numOpacity(moleNumProgress)}
			>
				<text x="550" y="342" textAnchor="middle" className="diagram-number">6.022 × 10²³</text>
				<text x="550" y="374" textAnchor="middle" className="diagram-footer">particles per mole</text>
			</g>

			<text x="360" y="434" textAnchor="middle" className="diagram-footer" opacity={footerOpacity}>
				a mole is just a very large dozen
			</text>
		</svg>
	);
};
