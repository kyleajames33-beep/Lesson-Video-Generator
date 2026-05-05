// TitleSlide — gold-standard re-skin (Phase 1.12, 2026-05-01).
//
// Pattern: docs/design-canvas-reference/scenes.jsx SceneTitle.
// Big topic, module context, one drawn accent. Confident and spacious.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {LessonData, TitleScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {ScribbleUnderline} from '../animations/DoodlePrimitives';
import {StampInTitle} from '../animations/MotionPrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_MONO, TYPE, TOK} from '../styles/tokens';

type TitleSlideProps = {
	lesson: LessonData;
	scene: TitleScene;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const TitleSlide = ({lesson, sceneIndex, totalScenes}: TitleSlideProps) => {
	const titleParts = splitTitle(lesson.title);

	return (
		<SlideFrame>
			<TitleBackdrop />
			<SlideChrome lesson={lesson} dot="2.1" topic="LESSON START" sceneType="title" />

			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: 64,
					right: 64,
					transform: 'translateY(-48%)',
				}}
			>
				<Eyebrow color={TOK.chem2}>{lesson.lesson} · {lesson.subject} · {lesson.yearLevel}</Eyebrow>

				<div
					style={{
						fontSize: 208,
						fontWeight: 840,
						lineHeight: 0.92,
						letterSpacing: '-0.045em',
						maxWidth: 1500,
					}}
				>
					<StampInTitle delay={14} color={TOK.ink} underlineColor={TOK.amber}>
						<div style={{fontSize: 208, fontWeight: 840, lineHeight: 0.92, letterSpacing: '-0.045em'}}>
							{titleParts.first}
						</div>
					</StampInTitle>
					<StampInTitle delay={26} color={TOK.chem1} underlineColor={TOK.amber}>
						<div style={{fontSize: 208, fontWeight: 840, lineHeight: 0.92, letterSpacing: '-0.045em'}}>
							{titleParts.second}.
						</div>
					</StampInTitle>
				</div>

				<FadeUp delay={44} durationFrames={14} dy={14}>
					<div style={{position: 'relative', marginTop: 34, width: 330, height: 28}}>
						<ScribbleUnderline
							width={320}
							color={TOK.amber}
							strokeWidth={5}
							seed={51}
							delay={50}
							durationFrames={16}
						/>
					</div>
				</FadeUp>

				<FadeUp delay={62} durationFrames={16} dy={22}>
					<p
						style={{
							margin: '28px 0 0',
							fontSize: TYPE.bodyLarge.fontSize,
							color: TOK.inkDim,
							maxWidth: 1050,
							lineHeight: TYPE.bodyLarge.lineHeight,
							fontWeight: TYPE.bodyLarge.fontWeight,
						}}
					>
						{lesson.subtitle}
					</p>
				</FadeUp>
			</div>
		</SlideFrame>
	);
};

const TitleBackdrop = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const reveal = interpolate(frame, [8, 44], [0, 1], clamp);
	const t = frame / fps;
	const xOffset = Math.sin(t * 0.9) * 8;
	const pulse = 0.5 + 0.5 * Math.sin(t * 1.2);

	return (
		<div
			aria-hidden
			style={{
				position: 'absolute',
				inset: 0,
				opacity: reveal,
				pointerEvents: 'none',
			}}
		>
			<div
				style={{
					position: 'absolute',
					right: 170 + xOffset,
					top: 215 - xOffset * 0.4,
					width: 520,
					height: 520,
					borderRadius: '50%',
					border: `1px solid ${TOK.rule}`,
					boxShadow: `0 0 ${90 + pulse * 30}px ${TOK.chem1}1f`,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					right: 295 - xOffset * 0.5,
					top: 342 + xOffset * 0.3,
					width: 270,
					height: 270,
					borderRadius: '50%',
					background: `radial-gradient(circle at 35% 30%, ${TOK.chem2}44 0%, ${TOK.chem3}30 45%, transparent 70%)`,
					filter: 'blur(1px)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					right: 130,
					bottom: 170,
					fontFamily: FONT_MONO,
					fontSize: 118,
					fontWeight: 700,
					color: TOK.chem3,
					opacity: 0.55,
					letterSpacing: '-0.08em',
				}}
			>
				N = n × Nₐ
			</div>
		</div>
	);
};

const splitTitle = (title: string): {first: string; second: string} => {
	const words = title.trim().split(/\s+/);
	if (words.length <= 1) return {first: title, second: ''};
	return {
		first: words.slice(0, -1).join(' '),
		second: words[words.length - 1],
	};
};
