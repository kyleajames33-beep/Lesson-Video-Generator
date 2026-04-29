import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export type WhiteboardToken = {
	text: string;
	color?: string;
	italic?: boolean;
	subscript?: string;
	/** When set, a label appears above this token at this frame and fades back out. */
	label?: string;
	labelAt?: number;
	labelDuration?: number;
	/** When set, a circle is drawn around this token starting at this frame. */
	circleAt?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type Props = {
	tokens: WhiteboardToken[];
	/** Frame at which the first token starts being written. */
	startAt?: number;
	/** Frames between each token starting. */
	tokenStagger?: number;
	/** Frames per token write animation. */
	tokenWrite?: number;
	fontSize?: number;
};

export const WhiteboardFormula = ({
	tokens,
	startAt = 0,
	tokenStagger = 32,
	tokenWrite = 22,
	fontSize = 128,
}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<div className="whiteboard-formula">
			<div className="whiteboard-row">
				{tokens.map((token, i) => {
					const tokenStart = startAt + i * tokenStagger;
					const writeP = spring({
						frame: frame - tokenStart,
						fps,
						config: {damping: 14, stiffness: 200, mass: 0.7},
						durationInFrames: tokenWrite,
					});
					const opacity = interpolate(writeP, [0, 0.3], [0, 1], clamp);
					const scale = interpolate(writeP, [0, 1], [0.55, 1], clamp);
					const y = interpolate(writeP, [0, 1], [22, 0], clamp);

					// Pulse when this token is "active" (just written)
					const pulseStart = tokenStart + tokenWrite;
					const pulseEnd = pulseStart + 18;
					const pulseAmt = interpolate(
						frame,
						[pulseStart, pulseStart + 6, pulseEnd],
						[0, 0.12, 0],
						clamp,
					);

					const labelAt = token.labelAt ?? tokenStart + tokenWrite + 4;
					const labelDur = token.labelDuration ?? 70;
					const labelEnd = labelAt + labelDur;
					const labelP = spring({
						frame: frame - labelAt,
						fps,
						config: {damping: 14, stiffness: 170, mass: 0.85},
					});
					const labelFadeOut = interpolate(
						frame,
						[labelEnd - 16, labelEnd],
						[1, 0],
						clamp,
					);
					const labelOp = token.label
						? interpolate(labelP, [0, 0.5], [0, 1], clamp) * labelFadeOut
						: 0;
					const labelScale = interpolate(labelP, [0, 1], [0.7, 1], clamp);
					const labelY = interpolate(labelP, [0, 1], [12, 0], clamp);

					// Circle annotation
					const circleAt = token.circleAt ?? -1;
					const circleP = circleAt >= 0
						? spring({
							frame: frame - circleAt,
							fps,
							config: {damping: 12, stiffness: 140, mass: 0.9},
						  })
						: 0;
					const circleOp = circleAt >= 0
						? interpolate(circleP, [0, 0.4, 1], [0, 0.95, 0.85], clamp)
						: 0;

					const tokenColor = token.color ?? (token.italic ? '#0068a5' : '#1c1917');

					return (
						<div key={i} className="whiteboard-token-wrap">
							{/* Label callout above the token */}
							{token.label ? (
								<div
									className="whiteboard-label"
									style={{
										opacity: labelOp,
										transform: `translateY(${labelY - 12}px) scale(${labelScale})`,
									}}
								>
									<span>{token.label}</span>
									<svg className="whiteboard-label-arrow" viewBox="0 0 30 36">
										<line x1="15" y1="0" x2="15" y2="30" stroke="#dc2626" strokeWidth="2.5" />
										<polygon points="9,28 21,28 15,36" fill="#dc2626" />
									</svg>
								</div>
							) : null}

							{/* Token text */}
							<div
								className="whiteboard-token"
								style={{
									opacity,
									transform: `translateY(${y}px) scale(${scale * (1 + pulseAmt)})`,
									color: tokenColor,
									fontSize,
									fontStyle: token.italic ? 'italic' : 'normal',
								}}
							>
								<span style={{position: 'relative'}}>
									{token.text}
									{token.subscript ? (
										<span className="whiteboard-subscript">{token.subscript}</span>
									) : null}

									{/* Circle annotation around this token */}
									{circleOp > 0 ? (
										<svg
											className="whiteboard-token-circle"
											viewBox="0 0 100 100"
											preserveAspectRatio="none"
											style={{opacity: circleOp}}
										>
											<ellipse
												cx="50" cy="50" rx="48" ry="46"
												fill="none"
												stroke="#dc2626" strokeWidth="3"
												strokeDasharray="6 4"
											/>
										</svg>
									) : null}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
