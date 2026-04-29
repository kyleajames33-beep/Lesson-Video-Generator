import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

type ChemSymbol = {
	x: number;
	startY: number;
	speed: number;
	size: number;
	phase: number;
	maxOpacity: number;
	symbol: string;
	color: string;
};

const CHEM_SYMBOLS: ChemSymbol[] = [
	{x: 4,  startY: 80, speed: 38, size: 52, phase: 0,   maxOpacity: 0.07, symbol: 'H',      color: '#4f46e5'},
	{x: 12, startY: 55, speed: 52, size: 34, phase: 1.8, maxOpacity: 0.06, symbol: 'mol',    color: '#0891b2'},
	{x: 22, startY: 90, speed: 32, size: 66, phase: 0.5, maxOpacity: 0.05, symbol: 'C',      color: '#4f46e5'},
	{x: 30, startY: 35, speed: 46, size: 44, phase: 3.1, maxOpacity: 0.09, symbol: 'Nₐ',    color: '#f59e0b'},
	{x: 40, startY: 72, speed: 40, size: 56, phase: 1.2, maxOpacity: 0.06, symbol: 'N',      color: '#4f46e5'},
	{x: 48, startY: 20, speed: 36, size: 30, phase: 4.4, maxOpacity: 0.07, symbol: '6.022',  color: '#0891b2'},
	{x: 57, startY: 88, speed: 50, size: 44, phase: 0.9, maxOpacity: 0.05, symbol: 'O',      color: '#4f46e5'},
	{x: 65, startY: 45, speed: 30, size: 58, phase: 2.6, maxOpacity: 0.08, symbol: '×10²³', color: '#f59e0b'},
	{x: 72, startY: 68, speed: 44, size: 40, phase: 1.5, maxOpacity: 0.06, symbol: 'n',      color: '#4f46e5'},
	{x: 80, startY: 28, speed: 56, size: 46, phase: 3.8, maxOpacity: 0.05, symbol: 'H₂O',   color: '#0891b2'},
	{x: 88, startY: 78, speed: 34, size: 36, phase: 0.3, maxOpacity: 0.08, symbol: 'e⁻',    color: '#4f46e5'},
	{x: 95, startY: 50, speed: 48, size: 54, phase: 2.0, maxOpacity: 0.07, symbol: '12g',   color: '#f59e0b'},
	{x: 16, startY: 12, speed: 42, size: 46, phase: 5.2, maxOpacity: 0.05, symbol: 'Na',    color: '#4f46e5'},
	{x: 52, startY: 58, speed: 58, size: 28, phase: 1.1, maxOpacity: 0.07, symbol: '→',     color: '#0891b2'},
	{x: 76, startY: 95, speed: 36, size: 52, phase: 3.5, maxOpacity: 0.05, symbol: 'CO₂',  color: '#4f46e5'},
	{x: 35, startY: 8,  speed: 43, size: 38, phase: 2.9, maxOpacity: 0.06, symbol: 'ΔH',   color: '#f59e0b'},
	{x: 8,  startY: 30, speed: 28, size: 48, phase: 6.1, maxOpacity: 0.05, symbol: '⁻¹',   color: '#0891b2'},
	{x: 62, startY: 15, speed: 54, size: 42, phase: 0.7, maxOpacity: 0.06, symbol: 'mol⁻¹',color: '#4f46e5'},
];

export const AnimatedBackground = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const t = frame / fps;
	const sceneProgress = interpolate(frame, [0, Math.max(1, durationInFrames - 1)], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Dot grid drifts diagonally
	const gridX = (t * 1.8 + sceneProgress * 24) % 52;
	const gridY = (t * 1.2 + sceneProgress * 14) % 52;

	// Gradient blobs drift on slow sine paths
	const blob1X = Math.sin(t * 0.14) * 36;
	const blob1Y = Math.cos(t * 0.09) * 22;
	const blob2X = Math.cos(t * 0.11) * 28;
	const blob2Y = Math.sin(t * 0.13) * 30;
	const blob3X = Math.sin(t * 0.08 + 1.2) * 20;
	const blob3Y = Math.cos(t * 0.10 + 0.8) * 18;

	// Focus blur on entry
	const focusBlur = interpolate(frame, [0, 24, 60], [2.2, 0.4, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<>
			{/* Base background */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background: '#fafaf9',
					pointerEvents: 'none',
				}}
			/>

			{/* Drifting dot grid */}
			<div
				style={{
					position: 'absolute',
					inset: '-5%',
					backgroundImage: 'radial-gradient(circle, rgba(79, 70, 229, 0.11) 1.5px, transparent 1.5px)',
					backgroundSize: '52px 52px',
					WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 10%, #000 88%, transparent)',
					maskImage: 'linear-gradient(to bottom, transparent, #000 10%, #000 88%, transparent)',
					opacity: 0.9,
					transform: `translate(${gridX}px, ${gridY}px)`,
					filter: focusBlur > 0 ? `blur(${focusBlur * 0.5}px)` : undefined,
					pointerEvents: 'none',
				}}
			/>

			{/* Indigo blob — top right */}
			<div
				style={{
					position: 'absolute',
					top: '-30%',
					right: '-20%',
					width: '75%',
					height: '85%',
					borderRadius: '50%',
					background: 'radial-gradient(circle at 38% 38%, rgba(79, 70, 229, 0.18) 0%, rgba(99, 102, 241, 0.10) 45%, transparent 68%)',
					transform: `translate(${blob1X}px, ${blob1Y}px)`,
					pointerEvents: 'none',
				}}
			/>

			{/* Amber blob — bottom left */}
			<div
				style={{
					position: 'absolute',
					bottom: '-25%',
					left: '-20%',
					width: '65%',
					height: '75%',
					borderRadius: '50%',
					background: 'radial-gradient(circle at 60% 62%, rgba(245, 158, 11, 0.16) 0%, rgba(251, 191, 36, 0.08) 48%, transparent 68%)',
					transform: `translate(${blob2X}px, ${blob2Y}px)`,
					pointerEvents: 'none',
				}}
			/>

			{/* Violet blob — center */}
			<div
				style={{
					position: 'absolute',
					top: '25%',
					left: '-12%',
					width: '50%',
					height: '55%',
					borderRadius: '50%',
					background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 62%)',
					transform: `translate(${blob3X}px, ${blob3Y}px)`,
					pointerEvents: 'none',
				}}
			/>

			{/* Floating chemistry text symbols */}
			{CHEM_SYMBOLS.map((sym, i) => {
				const startYPx = (sym.startY / 100) * 1080;
				const movedUp = ((t + sym.phase) * sym.speed) % 1080;
				const yPx = ((startYPx - movedUp) % 1080 + 1080) % 1080;

				const opacity = interpolate(
					yPx,
					[0, 90, 920, 1080],
					[0, sym.maxOpacity, sym.maxOpacity, 0],
					{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
				);

				// Subtle horizontal sway
				const swayX = Math.sin(t * 0.31 + sym.phase) * 8;

				return (
					<div
						key={i}
						style={{
							position: 'absolute',
							left: `${sym.x}%`,
							top: yPx,
							transform: `translateX(${swayX}px)`,
							color: sym.color,
							fontSize: sym.size,
							fontWeight: 700,
							fontFamily: 'monospace',
							opacity,
							pointerEvents: 'none',
							userSelect: 'none',
							whiteSpace: 'nowrap',
							lineHeight: 1,
						}}
					>
						{sym.symbol}
					</div>
				);
			})}
		</>
	);
};
