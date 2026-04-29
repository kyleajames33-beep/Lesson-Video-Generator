import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Token = {
	text: string;
	kind: 'variable' | 'operator' | 'equals' | 'subscript-pair';
	sub?: string;
};

type FormulaBuildProps = {
	tokens: Token[];
	framesPerToken?: number;
	fontSize?: number;
};

const TOKEN_COLORS: Record<Token['kind'], string> = {
	variable: '#0068a5',
	operator: '#344a6b',
	equals: '#344a6b',
	'subscript-pair': '#0068a5',
};

const TokenEl = ({token, progress}: {token: Token; progress: number}) => {
	const scale = interpolate(progress, [0, 1], [0.4, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity = interpolate(progress, [0, 0.35], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const y = interpolate(progress, [0, 1], [24, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<span
			style={{
				display: 'inline-block',
				color: TOKEN_COLORS[token.kind],
				opacity,
				transform: `translateY(${y}px) scale(${scale})`,
				transformOrigin: 'bottom center',
				fontFamily: 'Georgia, "Times New Roman", serif',
				fontStyle: token.kind === 'variable' ? 'italic' : 'normal',
				whiteSpace: 'pre',
			}}
		>
			{token.text}
			{token.sub ? (
				<sub
					style={{
						fontSize: '0.55em',
						verticalAlign: 'sub',
						fontStyle: 'normal',
					}}
				>
					{token.sub}
				</sub>
			) : null}
		</span>
	);
};

export const FormulaBuild = ({
	tokens,
	framesPerToken = 14,
	fontSize = 128,
}: FormulaBuildProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'baseline',
				justifyContent: 'center',
				gap: '0.18em',
				fontSize,
				lineHeight: 1,
			}}
		>
			{tokens.map((token, i) => {
				const startFrame = i * framesPerToken;
				const progress = spring({
					frame: frame - startFrame,
					fps,
					config: {damping: 14, stiffness: 180, mass: 0.7},
					durationInFrames: framesPerToken + 10,
				});
				return <TokenEl key={i} token={token} progress={progress} />;
			})}
		</div>
	);
};

export type {Token};
