import type {TransitionPresentation} from '@remotion/transitions';

type TransitionKind =
	| 'shapeWipe'
	| 'iris'
	| 'morphCut'
	| 'zoomThrough'
	| 'colorFlash'
	| 'elasticPull';

type CinematicTransitionProps = {
	accent?: string;
	kind: TransitionKind;
};

const easeOut = (value: number) => 1 - Math.pow(1 - value, 3);
const easeIn = (value: number) => value * value * value;
const clamp = (value: number) => Math.max(0, Math.min(1, value));

const baseLayer = {
	position: 'absolute',
	inset: 0,
	overflow: 'hidden',
} as const;

const flashOpacity = (progress: number, strength = 0.78) =>
	(1 - Math.abs(progress - 0.5) * 2) * strength;

const shapeWipeStyle = (progress: number, entering: boolean) => {
	const eased = easeOut(progress);
	const cover = entering ? eased * 115 : 100;
	const exitScale = entering ? 1 : 1 + progress * 0.035;

	return {
		clipPath: entering
			? `polygon(0 0, ${cover}% 0, ${Math.max(0, cover - 18)}% 100%, 0 100%)`
			: 'inset(0 0 0 0)',
		opacity: entering ? 1 : 1 - progress * 0.28,
		transform: `scale(${exitScale})`,
		transformOrigin: 'center',
	};
};

const irisStyle = (progress: number, entering: boolean) => {
	const radius = entering ? easeOut(progress) * 145 : 145 - easeIn(progress) * 18;

	return {
		clipPath: entering
			? `circle(${radius}% at 50% 50%)`
			: 'circle(145% at 50% 50%)',
		opacity: entering ? 1 : 1 - progress * 0.22,
		transform: `scale(${entering ? 1.035 - progress * 0.035 : 1 + progress * 0.06})`,
		transformOrigin: 'center',
	};
};

const morphCutStyle = (progress: number, entering: boolean) => {
	const eased = easeOut(progress);
	const x = entering ? (1 - eased) * 34 : -progress * 18;
	const scale = entering ? 0.985 + eased * 0.015 : 1 + progress * 0.025;

	return {
		opacity: entering ? clamp((progress - 0.18) / 0.72) : 1 - progress * 0.34,
		transform: `translateX(${x}px) scale(${scale})`,
		transformOrigin: '68% 34%',
	};
};

const zoomThroughStyle = (progress: number, entering: boolean) => {
	const eased = entering ? easeOut(progress) : easeIn(progress);
	const scale = entering ? 1.44 - eased * 0.44 : 1 + eased * 1.55;
	const opacity = entering ? clamp((progress - 0.1) / 0.82) : 1 - progress * 0.18;

	return {
		opacity,
		transform: `scale(${scale})`,
		transformOrigin: '62% 44%',
	};
};

const colorFlashStyle = (progress: number, entering: boolean) => ({
	opacity: entering ? clamp((progress - 0.08) / 0.72) : 1 - progress * 0.16,
	transform: `scale(${entering ? 1.04 - progress * 0.04 : 1 + progress * 0.04})`,
	transformOrigin: 'center',
});

const elasticPullStyle = (progress: number, entering: boolean) => {
	const eased = easeOut(progress);
	const exitX = progress * -72;
	const enterX = (1 - eased) * 72;
	const stretch = entering
		? 1 + Math.sin(progress * Math.PI) * 0.08
		: 1 + Math.sin(progress * Math.PI) * 0.18;

	return {
		opacity: entering ? 1 : 1 - progress * 0.3,
		transform: entering
			? `translateX(${enterX}px) scaleX(${stretch})`
			: `translateX(${exitX}px) scaleX(${stretch})`,
		transformOrigin: entering ? 'left center' : 'right center',
	};
};

const getSceneStyle = (kind: TransitionKind, progress: number, entering: boolean) => {
	switch (kind) {
		case 'shapeWipe':
			return shapeWipeStyle(progress, entering);
		case 'iris':
			return irisStyle(progress, entering);
		case 'morphCut':
			return morphCutStyle(progress, entering);
		case 'zoomThrough':
			return zoomThroughStyle(progress, entering);
		case 'colorFlash':
			return colorFlashStyle(progress, entering);
		case 'elasticPull':
			return elasticPullStyle(progress, entering);
		default:
			return {};
	}
};

const TransitionOverlay = ({
	accent,
	kind,
	progress,
}: {
	accent: string;
	kind: TransitionKind;
	progress: number;
}) => {
	if (kind === 'shapeWipe') {
		const width = easeOut(progress) * 135;
		return (
			<div
				style={{
					...baseLayer,
					background: accent,
					clipPath: `polygon(${Math.max(0, width - 24)}% 0, ${width}% 0, ${Math.max(0, width - 12)}% 100%, ${Math.max(0, width - 36)}% 100%)`,
					opacity: 0.78,
					pointerEvents: 'none',
				}}
			/>
		);
	}

	if (kind === 'iris') {
		return (
			<div
				style={{
					...baseLayer,
					background: accent,
					clipPath: `circle(${easeOut(progress) * 118}% at 50% 50%)`,
					opacity: flashOpacity(progress, 0.5),
					pointerEvents: 'none',
				}}
			/>
		);
	}

	if (kind === 'morphCut') {
		const scale = 0.72 + Math.sin(progress * Math.PI) * 0.3;
		return (
			<div
				style={{
					position: 'absolute',
					right: 168,
					top: 138,
					width: 168,
					height: 168,
					borderRadius: 999,
					border: `3px solid ${accent}`,
					background: 'rgba(255,255,255,0.34)',
					boxShadow: `0 0 52px ${accent}`,
					opacity: 0.32 + flashOpacity(progress, 0.28),
					transform: `scale(${scale})`,
					pointerEvents: 'none',
				}}
			/>
		);
	}

	if (kind === 'zoomThrough') {
		return (
			<div
				style={{
					...baseLayer,
					background: '#ffffff',
					opacity: flashOpacity(progress, 0.96),
					pointerEvents: 'none',
				}}
			/>
		);
	}

	if (kind === 'colorFlash') {
		const active = progress > 0.42 && progress < 0.58 ? 1 : flashOpacity(progress, 0.56);
		return (
			<div
				style={{
					...baseLayer,
					background: progress > 0.5 ? '#ffffff' : accent,
					opacity: active,
					pointerEvents: 'none',
				}}
			/>
		);
	}

	return (
		<div
			style={{
				...baseLayer,
				background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
				opacity: flashOpacity(progress, 0.5),
				transform: `translateX(${(progress - 0.5) * 120}%) scaleX(${1 + Math.sin(progress * Math.PI) * 0.5})`,
				pointerEvents: 'none',
			}}
		/>
	);
};

export const cinematicTransition = (
	props: CinematicTransitionProps,
): TransitionPresentation<CinematicTransitionProps> => {
	return {
		component: ({children, presentationDirection, presentationProgress, passedProps}) => {
			const entering = presentationDirection === 'entering';
			const accent = passedProps.accent ?? '#0098cc';
			const progress = clamp(presentationProgress);

			return (
				<div
					style={{
						...baseLayer,
						...getSceneStyle(passedProps.kind, progress, entering),
					}}
				>
					{children}
					<TransitionOverlay accent={accent} kind={passedProps.kind} progress={progress} />
				</div>
			);
		},
		props,
	};
};

export const transitionKinds: TransitionKind[] = [
	'shapeWipe',
	'iris',
	'morphCut',
	'zoomThrough',
	'colorFlash',
	'elasticPull',
];
