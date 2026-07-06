// QuickCheckSlide — gold-standard re-skin (Phase 1.10, 2026-05-01).
//
// Active recall moment: question first, explicit pause, then answer board.
// Uses the Claude quiz reference for timing/handwritten pause treatment, but
// keeps the HSC calculation answer restrained and copyable.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {LessonData, QuickCheckScene} from '../lesson/types';
import {ASSETS, type AssetName} from '../assets';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleMark, ScribbleStar, ScribbleUnderline} from '../animations/DoodlePrimitives';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {MathText} from './shared/MathText';
import {calculationStepLabel, getCalculationStepKind} from './shared/calculationSteps';
import {StampInTitle} from '../animations/MotionPrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_HAND, FONT_MONO, TYPE, TOK} from '../styles/tokens';
import {useAccent} from '../styles/theme';

type QuickCheckSlideProps = {
	scene: QuickCheckScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const QuickCheckSlide = ({scene, lesson, sceneIndex, totalScenes}: QuickCheckSlideProps) => {
	const rd = scene.revealDelays ?? {};
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const answerStart = rd.answerStart ?? 360;
	const pauseStartFrame = (rd.pausePrompt ?? 70) + 24;
	const answerProgress = interpolate(frame, [answerStart - 24, answerStart + 24], [0, 1], clamp);
	const pauseOpacity = interpolate(frame, [answerStart - 28, answerStart + 8], [1, 0], clamp);

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} dot="2.1" topic="YOUR TURN" sceneType="quickCheck" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<FadeUp
				delay={rd.pauseBadge ?? 14}
				durationFrames={16}
				dy={26}
				style={{
					position: 'absolute',
					top: 128,
					right: 88,
					transform: 'rotate(7deg)',
					opacity: pauseOpacity,
				}}
			>
				<PauseBadge />
			</FadeUp>

			<div style={{position: 'absolute', top: 180, left: 64, right: 64}}>
				<Eyebrow color={TOK.inkDim}>QUICK CHECK · TRY IT FIRST</Eyebrow>

				{scene.image && ASSETS[scene.image as AssetName] && (
					<FadeUp delay={rd.diagram ?? 30} durationFrames={16} dy={16}>
						<img
							src={ASSETS[scene.image as AssetName]}
							alt=""
							style={{
								position: 'absolute',
								right: 64,
								top: 180,
								width: 440,
								maxHeight: 280,
								objectFit: 'contain',
								filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.14))',
							}}
						/>
					</FadeUp>
				)}

				<FadeUp delay={rd.heading ?? 24} durationFrames={16} dy={24}>
					<StampInTitle delay={24} color={TOK.ink} underlineColor={TOK.amber}>
						<div
							style={{
								marginTop: 18,
								fontSize: scene.question.length > 200 ? 32 : scene.question.length > 130 ? 38 : 46,
								fontWeight: 700,
								lineHeight: 1.28,
								letterSpacing: '-0.015em',
								color: TOK.ink,
								maxWidth: 1700,
							}}
						>
							{scene.question}
						</div>
					</StampInTitle>
				</FadeUp>

				{scene.pausePrompt ? (
					<div
						style={{
							marginTop: 28,
							opacity: pauseOpacity,
						}}
					>
						<FadeUp delay={rd.pausePrompt ?? 70} durationFrames={14} dy={18}>
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									gap: 14,
									fontSize: TYPE.callout.fontSize,
									color: TOK.inkDim,
									fontWeight: TYPE.callout.fontWeight,
									fontStyle: 'italic',
								}}
							>
								<span style={{fontFamily: FONT_MONO, fontStyle: 'normal', fontSize: 24}}>→</span>
								<span>{scene.pausePrompt}</span>
							</div>
						</FadeUp>
					</div>
				) : null}
			</div>

			{answerProgress < 0.98 ? (
				<>
					<PauseCountdown
						startFrame={pauseStartFrame}
						endFrame={answerStart}
						fps={fps}
						opacity={pauseOpacity}
					/>
					<PauseInstruction opacity={pauseOpacity} />
				</>
			) : null}

			<div
				style={{
					position: 'absolute',
					left: 64,
					right: 64,
					top: 540,
					opacity: answerProgress,
				}}
			>
				<AmbientGlow left="10%" top={-16} width="80%" height={430} delay={answerStart + 260} opacity={0.07} speedSeconds={6.2} />
				<AnswerBoard steps={scene.answerSteps} startDelay={answerStart} />
			</div>
		</SlideFrame>
	);
};

const PauseBadge = () => (
	<div
		style={{
			position: 'relative',
			fontFamily: FONT_HAND,
			fontSize: 96,
			color: TOK.amber,
			fontWeight: 700,
			lineHeight: 1,
		}}
	>
		pause!
		<div style={{position: 'absolute', left: -24, top: 28, transform: 'rotate(-15deg)'}}>
			<ScribbleStar size={62} color={TOK.amber} seed={2} delay={28} durationFrames={16} />
		</div>
	</div>
);

// Visual countdown is a fixed 3-second beat regardless of the actual
// gap between pause prompt and answer reveal. Users who want longer
// can pause the player. This keeps the visual element from dominating
// the slide while the narrator continues talking through the gap.
const COUNTDOWN_SECONDS = 3;

const PauseCountdown = ({
	startFrame,
	endFrame: _endFrame,
	fps,
	opacity,
}: {
	startFrame: number;
	endFrame: number;
	fps: number;
	opacity: number;
}) => {
	const frame = useCurrentFrame();
	if (frame < startFrame) return null;
	const totalSec = COUNTDOWN_SECONDS;
	const elapsedSec = (frame - startFrame) / fps;
	if (elapsedSec >= totalSec) return null;
	const remainSec = Math.max(0, Math.ceil(totalSec - elapsedSec));
	const progress = Math.min(1, elapsedSec / totalSec);

	const SIZE = 168;
	const STROKE = 10;
	const RADIUS = (SIZE - STROKE) / 2;
	const CIRC = 2 * Math.PI * RADIUS;
	const dashOffset = CIRC * progress;

	// Subtle entrance fade
	const enter = interpolate(frame, [startFrame, startFrame + 14], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 252,
				display: 'flex',
				justifyContent: 'center',
				pointerEvents: 'none',
				opacity: opacity * enter,
			}}
		>
			<div style={{position: 'relative', width: SIZE, height: SIZE}}>
				<svg width={SIZE} height={SIZE} style={{transform: 'rotate(-90deg)'}}>
					<circle
						cx={SIZE / 2}
						cy={SIZE / 2}
						r={RADIUS}
						stroke={TOK.rule}
						strokeWidth={STROKE}
						fill="none"
					/>
					<circle
						cx={SIZE / 2}
						cy={SIZE / 2}
						r={RADIUS}
						stroke={TOK.amber}
						strokeWidth={STROKE}
						fill="none"
						strokeLinecap="round"
						strokeDasharray={CIRC}
						strokeDashoffset={dashOffset}
					/>
				</svg>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						color: TOK.ink,
					}}
				>
					<div style={{fontFamily: FONT_MONO, fontSize: 56, fontWeight: 700, lineHeight: 1, color: TOK.amber}}>{remainSec}</div>
					<div style={{fontFamily: FONT_MONO, fontSize: 14, color: TOK.inkDim, letterSpacing: '0.18em', marginTop: 6}}>SECONDS</div>
				</div>
			</div>
		</div>
	);
};

const PauseInstruction = ({opacity}: {opacity: number}) => (
	<div
		style={{
			position: 'absolute',
			left: 64,
			right: 64,
			bottom: 168,
			opacity,
		}}
	>
		<FadeUp delay={112} durationFrames={14} dy={18}>
			<div
				style={{
					width: 'fit-content',
					margin: '0 auto',
					fontFamily: FONT_HAND,
					fontSize: 42,
					color: TOK.inkDim,
					transform: 'rotate(-1deg)',
				}}
			>
				take the pause — then keep watching
			</div>
		</FadeUp>
	</div>
);

const AnswerBoard = ({steps, startDelay}: {steps: string[]; startDelay: number}) => {
	const n = steps.length;

	return (
		<div
			style={{
				display: 'grid',
				gap: 22,
				maxWidth: 1580,
				margin: '0 auto',
			}}
		>
			{steps.map((step, index) => {
				const delay = startDelay + 16 + index * 68;
				const isFinal = index === n - 1;
				const kind = getCalculationStepKind(step, index, n);

				return (
					<AnswerStep
						key={`${index}-${step}`}
						step={step}
						label={calculationStepLabel[kind] ?? `Step ${index + 1}`}
						delay={delay}
						isFinal={isFinal}
					/>
				);
			})}
		</div>
	);
};

const AnswerStep = ({
	step,
	label,
	delay,
	isFinal,
}: {
	step: string;
	label: string;
	delay: number;
	isFinal: boolean;
}) => {
	const theme = useAccent();
	return (
		<FadeUp delay={delay} durationFrames={16} dy={22}>
			<div
				style={{
					position: 'relative',
					display: 'grid',
					gridTemplateColumns: '128px minmax(0, 1fr) 64px',
					gap: 30,
					alignItems: 'center',
					minHeight: isFinal ? 98 : 82,
					padding: '10px 16px 10px 0',
					borderBottom: `1px solid ${isFinal ? 'transparent' : TOK.rule}`,
				}}
			>
				{isFinal ? (
					<AmbientBorderPulse
						delay={delay + 42}
						color={TOK.amber}
						opacity={0.12}
						style={{borderRadius: 8, inset: -6}}
					/>
				) : null}
				<div
					style={{
						fontFamily: FONT_MONO,
						fontSize: 22,
						color: TOK.inkMute,
						letterSpacing: '0.12em',
						textTransform: 'uppercase',
					}}
				>
					{label}
				</div>
				<div
					style={{
						fontFamily: FONT_MONO,
						fontSize: isFinal ? 44 : 38,
						fontWeight: isFinal ? 760 : 600,
						lineHeight: 1.2,
						color: isFinal ? TOK.amber : TOK.ink,
						letterSpacing: '-0.035em',
					}}
				>
					<MathText text={step} isFinal={isFinal} />
					{isFinal ? (
						<div style={{position: 'relative', height: 18, marginTop: 2, width: Math.min(980, step.length * 18)}}>
							<ScribbleUnderline
								width={Math.min(980, Math.max(360, step.length * 18))}
								color={TOK.amber}
								strokeWidth={4}
								seed={22}
								strokes={2}
								delay={delay + 22}
								durationFrames={16}
							/>
						</div>
					) : null}
				</div>
				{isFinal ? (
					<ScribbleMark
						kind="check"
						size={58}
						color={theme.accent}
						strokeWidth={6}
						seed={24}
						delay={delay + 18}
						durationFrames={14}
					/>
				) : (
					<div />
				)}
			</div>
		</FadeUp>
	);
};

const fitQuestionSize = (question: string) => {
	if (question.length > 88) return TYPE.h4.fontSize;
	if (question.length > 70) return TYPE.h3.fontSize;
	return TYPE.h2.fontSize;
};
