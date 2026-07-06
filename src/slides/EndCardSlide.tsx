// EndCardSlide — the polished "watch the next part" moment.
//
// Used at the end of Part A (or any lesson that splits into halves). The
// goal is to make the next-watch CTA *feel* like a YouTube end card so
// students naturally roll into Part B rather than bouncing.

import {useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import type {LessonData, EndCardScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {StampInTitle} from '../animations/MotionPrimitives';
import {ScribbleUnderline} from '../animations/DoodlePrimitives';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {BulletReveal} from '../animations/BulletReveal';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_HAND, FONT_MONO, TYPE, TOK} from '../styles/tokens';

type EndCardSlideProps = {
	scene: EndCardScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const EndCardSlide = ({scene, lesson, sceneIndex, totalScenes}: EndCardSlideProps) => {
	const rd = scene.revealDelays ?? {};
	const headingDelay = rd.heading ?? 18;
	const bulletStart = rd.bulletsStart ?? rd.body ?? 90;
	const bulletEnd = Math.max(bulletStart + 60, scene.durationInFrames - 130);
	const ctaDelay = rd.callout ?? Math.max(bulletEnd + 30, scene.durationInFrames - 90);

	const frame = useCurrentFrame();
	const ctaPulse = interpolate(
		frame,
		[ctaDelay - 8, ctaDelay, ctaDelay + 20, ctaDelay + 60, ctaDelay + 90],
		[0, 1, 1.02, 1, 1.015],
		clamp,
	);

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} topic="UP NEXT" sceneType="concept" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<AmbientGlow left="50%" top={520} width="70%" height={420} delay={ctaDelay - 30} opacity={0.10} speedSeconds={6.0} />

			{/* Left half — the stamped headline */}
			<div style={{position: 'absolute', top: 220, left: 80, width: 900}}>
				<Eyebrow color={TOK.amber}>◆ UP NEXT</Eyebrow>
				<FadeUp delay={headingDelay} durationFrames={18} dy={32}>
					<StampInTitle delay={headingDelay} color={TOK.ink} underlineColor={TOK.amber}>
						<h1
							style={{
								margin: '14px 0 0',
								fontSize: 156,
								fontWeight: 840,
								lineHeight: 0.92,
								letterSpacing: '-0.05em',
								color: TOK.ink,
							}}
						>
							{scene.partLabel}
							<span style={{color: TOK.amber}}>.</span>
						</h1>
					</StampInTitle>
				</FadeUp>
				{scene.partSubtitle ? (
					<FadeUp delay={headingDelay + 14} durationFrames={14} dy={20}>
						<div
							style={{
								marginTop: 18,
								fontSize: 48,
								fontWeight: 700,
								color: TOK.inkDim,
								letterSpacing: '-0.025em',
								lineHeight: 1.1,
							}}
						>
							{scene.partSubtitle}
						</div>
					</FadeUp>
				) : null}
			</div>

			{/* Right half — what's in the next part */}
			<div style={{position: 'absolute', top: 250, left: 1020, right: 80}}>
				{scene.body ? (
					<FadeUp delay={rd.body ?? 56} durationFrames={14} dy={18}>
						<div
							style={{
								fontSize: 30,
								lineHeight: 1.4,
								color: TOK.inkDim,
								letterSpacing: '-0.012em',
								marginBottom: 30,
								maxWidth: 760,
							}}
						>
							{scene.body}
						</div>
					</FadeUp>
				) : null}
				{scene.bullets && scene.bullets.length > 0 ? (
					<BulletReveal
						bullets={scene.bullets}
						startFrame={bulletStart}
						endFrame={bulletEnd}
						markerColor={TOK.amber}
						fontSize={TYPE.bodyLarge.fontSize}
						style={{maxWidth: 760}}
					/>
				) : null}
			</div>

			{/* CTA — the YouTube-style call to action */}
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 130,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{frame >= ctaDelay ? (
					<div
						style={{
							position: 'relative',
							transform: `scale(${ctaPulse})`,
							transformOrigin: 'center',
						}}
					>
						<AmbientBorderPulse delay={ctaDelay + 18} color={TOK.amber} opacity={0.20} style={{borderRadius: 14, inset: -8}} />
						<div
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: 28,
								padding: '24px 60px 26px',
								borderRadius: 14,
								border: `2px solid ${TOK.amber}`,
								background: 'linear-gradient(135deg, rgba(240,168,48,0.18), rgba(15,22,20,0.7))',
								boxShadow: '0 32px 100px rgba(240,168,48,0.20)',
							}}
						>
							<div
								style={{
									fontSize: 64,
									fontWeight: 800,
									color: TOK.ink,
									letterSpacing: '-0.025em',
									lineHeight: 1,
								}}
							>
								{scene.ctaLabel ?? `Watch ${scene.partLabel} →`}
							</div>
						</div>
						{scene.callout ? (
							<div
								style={{
									position: 'absolute',
									top: -42,
									left: '50%',
									transform: 'translateX(-50%) rotate(-2deg)',
									fontFamily: FONT_HAND,
									fontSize: 32,
									color: TOK.amber,
									whiteSpace: 'nowrap',
								}}
							>
								{scene.callout}
							</div>
						) : null}
					</div>
				) : null}
			</div>

			{/* Hand-drawn underline behind the heading for warmth */}
			<div style={{position: 'absolute', top: 530, left: 80, pointerEvents: 'none', opacity: 0.5}}>
				<ScribbleUnderline
					width={520}
					color={TOK.amber}
					strokeWidth={5}
					seed={31}
					strokes={2}
					delay={headingDelay + 24}
					durationFrames={20}
				/>
			</div>
		</SlideFrame>
	);
};
