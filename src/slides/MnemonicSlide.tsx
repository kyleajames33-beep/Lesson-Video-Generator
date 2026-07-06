// MnemonicSlide — the screenshot moment. A poster-card rule that
// students can pause on, screenshot, and stick in their notes. Designed
// to be the single most memorable visual in the lesson.
//
// Pattern: hand-drawn poster on the dark stage with a deliberate hold —
// no narration required (works as a silent beat) but supports voiceover.

import {useCurrentFrame, useVideoConfig, interpolate, spring} from 'remotion';
import type {LessonData, MnemonicScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {StampInTitle} from '../animations/MotionPrimitives';
import {ScribbleUnderline, ScribbleStar} from '../animations/DoodlePrimitives';
import {HandWriteReveal} from '../animations/HandWriteReveal';
import {AmbientBorderPulse, AmbientGlow} from '../animations/AmbientMotion';
import {ConceptText} from './shared/ConceptText';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_HAND, FONT_MONO, TOK} from '../styles/tokens';
import {useAccent} from '../styles/theme';

type MnemonicSlideProps = {
	scene: MnemonicScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const MnemonicSlide = ({scene, lesson, sceneIndex, totalScenes}: MnemonicSlideProps) => {
	const rd = scene.revealDelays ?? {};
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const ruleDelay = rd.heading ?? 22;
	const glossDelay = rd.body ?? ruleDelay + 28;
	const pairsDelay = rd.bulletsStart ?? glossDelay + 20;
	const anchorDelay = rd.callout ?? Math.max(pairsDelay + 60, scene.durationInFrames - 90);

	// Card bounces in
	const cardSpring = spring({frame: frame - 10, fps, config: {damping: 16, stiffness: 140, mass: 0.7}});
	const cardScale = interpolate(cardSpring, [0, 1], [0.94, 1], clamp);
	const cardOpacity = interpolate(frame, [10, 22], [0, 1], clamp);

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} topic="LOCK THIS IN" sceneType="concept" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			<AmbientGlow left="20%" top={300} width="60%" height={520} delay={0} opacity={0.10} speedSeconds={6.4} />

			<div style={{position: 'absolute', top: 152, left: 64, right: 64}}>
				<Eyebrow color={TOK.amber}>◆ LOCK THIS IN</Eyebrow>
			</div>

			{/* Mnemonic poster card */}
			<div
				style={{
					position: 'absolute',
					top: 220,
					left: '50%',
					transform: `translateX(-50%) scale(${cardScale})`,
					opacity: cardOpacity,
					width: 1380,
					padding: '60px 72px 68px',
					borderRadius: 18,
					border: `2px dashed ${TOK.amber}`,
					background: 'linear-gradient(135deg, rgba(240,168,48,0.10), rgba(15,22,20,0.78))',
					boxShadow: '0 38px 130px rgba(240,168,48,0.18)',
				}}
			>
				<AmbientBorderPulse delay={ruleDelay + 30} color={TOK.amber} opacity={0.14} style={{borderRadius: 18}} />

				{/* Star sticker */}
				<div style={{position: 'absolute', top: -28, left: -22, transform: 'rotate(-12deg)'}}>
					<ScribbleStar size={70} color={TOK.amber} seed={11} delay={ruleDelay + 8} durationFrames={18} />
				</div>

				{/* Rule — hand-written character by character */}
				<div style={{textAlign: 'center'}}>
					<HandWriteReveal
						text={scene.rule}
						delay={ruleDelay}
						msPerChar={55}
						font="hand"
						size={scene.rule.length > 60 ? 88 : scene.rule.length > 40 ? 108 : 124}
						weight={700}
						color={TOK.ink}
						penColor={TOK.amber}
						letterSpacing="-0.012em"
					/>
				</div>

				{scene.gloss ? (
					<FadeUp delay={glossDelay} durationFrames={14} dy={18}>
						<div
							style={{
								marginTop: 26,
								fontSize: 30,
								fontWeight: 500,
								color: TOK.inkDim,
								textAlign: 'center',
								letterSpacing: '-0.005em',
								lineHeight: 1.36,
								maxWidth: 980,
								marginLeft: 'auto',
								marginRight: 'auto',
							}}
						>
							<ConceptText baseColor={TOK.inkDim}>{scene.gloss}</ConceptText>
						</div>
					</FadeUp>
				) : null}

				{scene.pairs && scene.pairs.length > 0 ? (
					<div style={{marginTop: 44, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: 60, rowGap: 16, maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto'}}>
						{scene.pairs.flatMap((p, i) => [
							<FadeUp key={`L-${i}`} delay={pairsDelay + i * 18} durationFrames={14} dy={14}>
								<div style={{textAlign: 'right', fontFamily: FONT_HAND, fontSize: 52, fontWeight: 700, color: p.leftColor ?? TOK.amber, lineHeight: 1.1}}>
									{p.left}
								</div>
							</FadeUp>,
							<FadeUp key={`R-${i}`} delay={pairsDelay + i * 18 + 8} durationFrames={14} dy={14}>
								<div style={{textAlign: 'left', fontFamily: FONT_HAND, fontSize: 52, fontWeight: 700, color: p.rightColor ?? theme.accent2, lineHeight: 1.1}}>
									↔ {p.right}
								</div>
							</FadeUp>,
						])}
					</div>
				) : null}

				{/* Anchor / hashtag */}
				{scene.anchor ? (
					<FadeUp delay={anchorDelay} durationFrames={14} dy={14}>
						<div
							style={{
								marginTop: 40,
								fontFamily: FONT_MONO,
								fontSize: 18,
								letterSpacing: '0.16em',
								color: TOK.inkMute,
								textAlign: 'center',
								textTransform: 'uppercase',
							}}
						>
							{scene.anchor}
						</div>
					</FadeUp>
				) : null}

				<div style={{position: 'absolute', bottom: 24, left: 120, right: 120, opacity: 0.55, pointerEvents: 'none'}}>
					<ScribbleUnderline width={900} color={TOK.amber} strokeWidth={4} seed={29} strokes={2} delay={ruleDelay + 36} durationFrames={20} />
				</div>
			</div>

			{/* "Screenshot this" hint */}
			<div style={{position: 'absolute', bottom: 90, left: 0, right: 0, textAlign: 'center'}}>
				<FadeUp delay={anchorDelay + 20} durationFrames={14} dy={12}>
					<div
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: 12,
							padding: '8px 22px',
							borderRadius: 999,
							background: 'rgba(15,22,20,0.7)',
							border: `1px solid rgba(255,255,255,0.08)`,
							fontFamily: FONT_HAND,
							fontSize: 26,
							color: TOK.amber,
						}}
					>
						📸 screenshot this
					</div>
				</FadeUp>
			</div>
		</SlideFrame>
	);
};
