import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {ScaleReveal} from './slides/shared/Reveals';
import {AmbientFloat} from './animations/MotionPrimitives';

const ASSETS = [
	{src: staticFile('assets/Character.png'), label: 'Character'},
	{src: staticFile('assets/mole.png'), label: 'Mole'},
	{src: staticFile('assets/Beaker.png'), label: 'Beaker'},
	{src: staticFile('assets/Flask.png'), label: 'Flask'},
	{src: staticFile('assets/testtube.png'), label: 'Test Tube'},
	{src: staticFile('assets/scale.png'), label: 'Balance'},
	{src: staticFile('assets/pendulum.png'), label: 'Pendulum'},
	{src: staticFile('assets/magnifying glass.png'), label: 'Magnifier'},
	{src: staticFile('assets/gold coin.png'), label: 'Gold Coin'},
	{src: staticFile('assets/Salt.png'), label: 'Salt'},
];

const clamp = {
	extrapolateLeft: 'clamp' as const,
	extrapolateRight: 'clamp' as const,
};

export const AssetShowcase = () => {
	const frame = useCurrentFrame();
	const titleOpacity = interpolate(frame, [0, 18], [0, 1], clamp);
	const titleY = interpolate(frame, [0, 24], [30, 0], clamp);

	return (
		<AbsoluteFill className="video-shell" style={{padding: '100px 140px 140px'}}>
			{/* Header */}
			<div
				style={{
					textAlign: 'center',
					marginBottom: 60,
					opacity: titleOpacity,
					transform: `translateY(${titleY}px)`,
				}}
			>
				<div style={{fontSize: 28, fontWeight: 800, color: '#4f46e5', letterSpacing: 2, textTransform: 'uppercase'}}>
					Asset Showcase
				</div>
				<h1 style={{fontSize: 72, fontWeight: 600, color: '#1c1917', margin: '16px 0 0', lineHeight: 1}}>
					New 3D Props
				</h1>
				<p style={{fontSize: 32, color: '#78716c', fontWeight: 600, marginTop: 16}}>
					Testing transparency, scale, and animation compatibility
				</p>
			</div>

			{/* Grid */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(5, 1fr)',
					gap: 36,
					maxWidth: 1400,
					margin: '0 auto',
				}}
			>
				{ASSETS.map((asset, i) => (
					<ScaleReveal key={asset.label} delay={24 + i * 6}>
						<AmbientFloat delay={i * 12}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									padding: '28px 20px',
									borderRadius: 16,
									background: '#ffffff',
									border: '1.5px solid rgba(79, 70, 229, 0.12)',
									boxShadow: '0 6px 28px rgba(28, 25, 23, 0.06)',
								}}
							>
								<Img
									src={asset.src}
									alt={asset.label}
									style={{
										width: 140,
										height: 140,
										objectFit: 'contain',
									}}
								/>
								<span
									style={{
										marginTop: 16,
										fontSize: 20,
										fontWeight: 700,
										color: '#44403c',
									}}
								>
									{asset.label}
								</span>
							</div>
						</AmbientFloat>
					</ScaleReveal>
				))}
			</div>

			{/* Footer note */}
			<div
				style={{
					position: 'absolute',
					bottom: 48,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontSize: 22,
					color: '#a8a29e',
					fontWeight: 600,
					opacity: interpolate(frame, [60, 90], [0, 1], clamp),
				}}
			>
				Assets rendered at 1920×1080 with transparent PNG compositing
			</div>
		</AbsoluteFill>
	);
};
