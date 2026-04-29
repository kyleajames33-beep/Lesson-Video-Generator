import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Callout} from './animations/AttentionPrimitives';
import {DoodleArrow, MistakeTag, UnitCancel} from './animations/DoodlePrimitives';
import {WhiteboardFormula} from './animations/WhiteboardFormula';
import {DiagramRenderer} from './slides/diagrams/DiagramRenderer';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const panelStyle = {
	background: 'rgba(255, 255, 255, 0.92)',
	border: '1.5px solid rgba(79, 70, 229, 0.16)',
	borderRadius: 10,
	boxShadow: '0 5px 24px rgba(28, 25, 23, 0.07)',
	padding: 26,
	minHeight: 260,
	position: 'relative' as const,
	overflow: 'hidden' as const,
};

const labelStyle = {
	color: '#4f46e5',
	fontSize: 18,
	fontWeight: 900,
	letterSpacing: 1,
	textTransform: 'uppercase' as const,
	marginBottom: 22,
};

const tokens = [
	{text: 'm', color: '#0068a5', italic: true, label: 'mass', labelAt: 44},
	{text: '=', color: '#44403c'},
	{text: ' n ', color: '#0068a5', italic: true, label: 'moles', labelAt: 62},
	{text: '×', color: '#44403c'},
	{text: ' M', color: '#0068a5', italic: true, label: 'molar mass', labelAt: 80, circleAt: 92},
];

export const ReferenceStyleGallery = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 18], [0, 1], clamp);
	const y = interpolate(frame, [0, 22], [24, 0], clamp);

	return (
		<AbsoluteFill className="video-shell" style={{padding: '74px 104px 70px'}}>
			<div style={{opacity, transform: `translateY(${y}px)`}}>
				<div style={{color: '#4f46e5', fontSize: 22, fontWeight: 900, letterSpacing: 1.5, textTransform: 'uppercase'}}>
					Reference style
				</div>
				<h1 style={{margin: '8px 0 26px', color: '#1c1917', fontSize: 58, lineHeight: 1, fontWeight: 850}}>
					Lesson building blocks
				</h1>
			</div>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1.08fr 0.92fr 1fr',
					gap: 20,
					opacity,
				}}
			>
				<div style={panelStyle}>
					<div style={labelStyle}>Formula build</div>
					<div style={{height: 128, display: 'grid', placeItems: 'center'}}>
						<WhiteboardFormula tokens={tokens} startAt={18} tokenStagger={18} tokenWrite={16} fontSize={80} />
					</div>
					<UnitCancel left="mol" right="g mol⁻¹" result="mass is left in grams" delay={78} compact />
				</div>

				<div style={panelStyle}>
					<div style={labelStyle}>Student thinking</div>
					<div style={{display: 'grid', gap: 28, alignContent: 'center', minHeight: 180}}>
						<Callout text="Pause: what are we finding?" delay={24} />
						<div style={{width: 140, justifySelf: 'end'}}>
							<DoodleArrow delay={54} />
						</div>
					</div>
				</div>

				<div style={panelStyle}>
					<div style={labelStyle}>Common trap</div>
					<div style={{display: 'grid', gap: 18, alignContent: 'center', minHeight: 180}}>
						<div style={{color: '#1c1917', fontSize: 35, fontWeight: 850, lineHeight: 1.05}}>
							Do not swap the quantities.
						</div>
						<MistakeTag text="Different quantities" delay={42} />
					</div>
				</div>

				<div style={{...panelStyle, minHeight: 330}}>
					<div style={labelStyle}>Comparison diagram</div>
					<DiagramRenderer
						diagram={{
							type: 'beforeAfter',
							beforeLabel: 'Molar mass',
							afterLabel: 'Mass',
							beforeContent: 'The mass of exactly one mole.',
							afterContent: 'The mass of the sample you have.',
						}}
					/>
				</div>

				<div style={{...panelStyle, minHeight: 330}}>
					<div style={labelStyle}>Scale diagram</div>
					<DiagramRenderer
						diagram={{
							type: 'barChart',
							unit: 'g',
							bars: [
								{label: 'He', value: 4},
								{label: 'C', value: 12},
								{label: 'CO₂', value: 44},
							],
						}}
					/>
				</div>

				<div style={{...panelStyle, minHeight: 330}}>
					<div style={labelStyle}>Bridge diagram</div>
					<DiagramRenderer diagram={{type: 'bridge'}} />
				</div>
			</div>
		</AbsoluteFill>
	);
};
