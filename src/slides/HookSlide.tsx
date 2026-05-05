// HookSlide — gold-standard re-skin (Phase 1 validation, 2026-04-30).
//
// Pattern: docs/design-canvas-reference/animated-scenes-v3.jsx HookAnimated.
// Beat plan (timing values in frames @ 30fps):
//   0   chrome anchors (motion principle #2)
//   3   mono caption "↓ A QUESTION" reveals
//   12  central glyph fades up
//   30  hero question reveals word-by-word
//   ~80 scribble underline draws under key phrase
//   100 margin annotation "↑ one atom" + leader to glyph
//   165 callout reveals below question

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {LessonData, TextScene} from '../lesson/types';
import {FadeUp} from '../animations/FadeUp';
import {
	ScribbleAnnotation,
	ScribbleUnderline,
} from '../animations/DoodlePrimitives';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_MONO, TYPE, TOK} from '../styles/tokens';

type HookSlideProps = {
	scene: TextScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const HookSlide = ({scene, lesson, sceneIndex, totalScenes}: HookSlideProps) => {
	const keyPhrase = pickKeyPhrase(scene.body);
	const isLongHook = scene.body.length > 95;
	const atom = isLongHook
		? {x: 1420, y: 260, labelDx: 118, labelDy: -46}
		: {x: 960, y: 420, labelDx: 140, labelDy: -90};

	return (
		<SlideFrame>
			<SlideChrome lesson={lesson} dot="2.1" topic="A QUESTION" sceneType="hook" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			{/* Single iconic glyph — "one atom" */}
			<AtomGlyph delay={12} centerX={atom.x} centerY={atom.y} compact={isLongHook} />

			{/* Margin annotation pointing at the glyph */}
			<ScribbleAnnotation
				x={atom.x + 46}
				y={atom.y}
				dx={atom.labelDx}
				dy={atom.labelDy}
				label="↑ one atom"
				color={TOK.amber}
				seed={11}
				delay={100}
				leaderDurationFrames={14}
				labelDurationFrames={10}
			/>

			{/* Bottom hero panel */}
			<div
				style={{
					position: 'absolute',
					left: 64,
					right: 64,
					bottom: isLongHook ? 126 : 160,
				}}
			>
				<FadeUp delay={3} durationFrames={12}>
					<div
						style={{
							fontFamily: FONT_MONO,
							fontSize: 20,
							color: TOK.amber,
							letterSpacing: '0.2em',
							marginBottom: 28,
						}}
					>
						↓  A QUESTION
					</div>
				</FadeUp>

				<div
					style={{
						fontSize: fitHookQuestionSize(scene.body),
						fontWeight: 800,
						lineHeight: 1.05,
						letterSpacing: '-0.03em',
						maxWidth: isLongHook ? 1780 : 1500,
					}}
				>
					<HeroQuestion text={scene.body} keyPhrase={keyPhrase} startDelay={30} />
				</div>

				{scene.callout ? (
					<FadeUp delay={165} durationFrames={14} dy={20}>
						<div
							style={{
								marginTop: 28,
								fontSize: TYPE.callout.fontSize,
								fontStyle: 'italic',
								color: TOK.inkDim,
								fontWeight: 500,
								letterSpacing: '-0.01em',
							}}
						>
							{scene.callout}
						</div>
					</FadeUp>
				) : null}
			</div>
		</SlideFrame>
	);
};

// ─── AtomGlyph — a single glowing circle representing "one atom" ─────────
// Fulfills motion principle #7 (no dead frames) via slow ambient pulse on
// the outer halo. The amber accent obeys principle #3 (one accent per beat)
// — by design the glyph is the SECONDARY visual; the question is primary.

const AtomGlyph = ({
	delay = 0,
	centerX,
	centerY,
	compact = false,
}: {
	delay?: number;
	centerX: number;
	centerY: number;
	compact?: boolean;
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = (frame - delay) / fps;
	const reveal = interpolate(frame, [delay, delay + 18], [0, 1], clamp);
	// Slow halo pulse — 4s cycle, gentle (motion principle #7)
	const pulse = 0.5 + 0.5 * Math.sin((t / 4) * Math.PI * 2);
	const haloScale = 1 + pulse * 0.04;
	const haloOpacity = 0.18 + pulse * 0.12;

	return (
		<div
			style={{
				position: 'absolute',
				left: centerX,
				top: centerY,
				transform: 'translate(-50%, -50%)',
				opacity: reveal,
				pointerEvents: 'none',
			}}
			aria-hidden
		>
			{/* Outer glow halo */}
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: `translate(-50%, -50%) scale(${haloScale})`,
					width: compact ? 240 : 320,
					height: compact ? 240 : 320,
					borderRadius: '50%',
					background: `radial-gradient(circle, ${TOK.amber}40 0%, ${TOK.amber}00 60%)`,
					opacity: haloOpacity,
				}}
			/>
			{/* Mid-tone shell */}
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)',
					width: compact ? 136 : 180,
					height: compact ? 136 : 180,
					borderRadius: '50%',
					background: `radial-gradient(circle at 35% 30%, ${TOK.chem2}aa 0%, ${TOK.chem3} 60%, ${TOK.bg} 100%)`,
					boxShadow: `0 0 80px ${TOK.chem1}40`,
				}}
			/>
			{/* Core highlight */}
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)',
					width: compact ? 20 : 24,
					height: compact ? 20 : 24,
					borderRadius: '50%',
					background: TOK.ink,
					opacity: 0.85,
					filter: 'blur(2px)',
				}}
			/>
		</div>
	);
};

// ─── Helpers ──────────────────────────────────────────────────────────────

const KEY_PHRASES_BY_SCENE = ['count atoms', 'see or weigh', 'invisible particles'];

function pickKeyPhrase(body: string): string | null {
	const lower = body.toLowerCase();
	for (const phrase of KEY_PHRASES_BY_SCENE) {
		if (lower.includes(phrase)) return phrase;
	}
	return null;
}

const HeroQuestion = ({
	text,
	keyPhrase,
	startDelay,
}: {
	text: string;
	keyPhrase: string | null;
	startDelay: number;
}) => {
	if (!keyPhrase) {
		return (
			<FadeUp delay={startDelay} durationFrames={16} dy={18}>
				{text}
			</FadeUp>
		);
	}

	const lowerText = text.toLowerCase();
	const phraseStart = lowerText.indexOf(keyPhrase);
	if (phraseStart === -1) {
		return (
			<FadeUp delay={startDelay} durationFrames={16} dy={18}>
				{text}
			</FadeUp>
		);
	}

	const before = text.slice(0, phraseStart);
	const phrase = text.slice(phraseStart, phraseStart + keyPhrase.length);
	const after = text.slice(phraseStart + keyPhrase.length);

	const underlineDelay = startDelay + 22;

	return (
		<FadeUp delay={startDelay} durationFrames={16} dy={18}>
			<>
				{before}
				<span
					style={{
						position: 'relative',
						color: TOK.amber,
						fontStyle: 'italic',
						display: 'inline-block',
					}}
				>
					{phrase}
					<div style={{position: 'absolute', left: -8, bottom: -34, width: '100%', pointerEvents: 'none'}}>
						<ScribbleUnderline
							width={Math.max(180, phrase.length * 32)}
							color={TOK.chem2}
							strokeWidth={6}
							seed={7}
							strokes={2}
							delay={underlineDelay}
							durationFrames={15}
						/>
					</div>
				</span>
				{after}
			</>
		</FadeUp>
	);
};

const fitHookQuestionSize = (text: string) => {
	if (text.length > 130) return TYPE.h4.fontSize;
	if (text.length > 105) return TYPE.h3.fontSize;
	return TYPE.h1.fontSize;
};
