import type {TransitionPresentation} from '@remotion/transitions';

type CrashZoomProps = {
	color?: string;
};

export const crashZoom = (props: CrashZoomProps = {}): TransitionPresentation<CrashZoomProps> => {
	return {
		component: ({children, presentationDirection, presentationProgress, passedProps}) => {
			const entering = presentationDirection === 'entering';
			const scale = entering
				? 1.16 - presentationProgress * 0.16
				: 1 + presentationProgress * 0.42;
			const opacity = entering ? presentationProgress : 1 - presentationProgress * 0.34;
			const flashOpacity = 1 - Math.abs(presentationProgress - 0.5) * 2;

			return (
				<div
					style={{
						position: 'absolute',
						inset: 0,
						opacity,
						overflow: 'hidden',
						transform: `scale(${scale})`,
						transformOrigin: 'center',
					}}
				>
					{children}
					<div
						style={{
							position: 'absolute',
							inset: 0,
							background: passedProps.color ?? '#f7fbff',
							opacity: flashOpacity * 0.92,
							pointerEvents: 'none',
						}}
					/>
				</div>
			);
		},
		props,
	};
};
