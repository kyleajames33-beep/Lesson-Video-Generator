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
import {ASSETS, type AssetName} from '../assets';
import {FadeUp} from '../animations/FadeUp';
import {
	ScribbleAnnotation,
	ScribbleUnderline,
} from '../animations/DoodlePrimitives';
import {BulletReveal} from '../animations/BulletReveal';
import {SlideFrame} from './shared/SlideFrame';
import {SlideChrome} from './shared/SlideChrome';
import {Eyebrow} from './shared/Eyebrow';
import {FONT_MONO, TYPE, TOK} from '../styles/tokens';
import {useAccent} from '../styles/theme';

type HookSlideProps = {
	scene: TextScene;
	lesson: LessonData;
	sceneIndex?: number;
	totalScenes?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const HookSlide = ({scene, lesson, sceneIndex, totalScenes}: HookSlideProps) => {
	const rd = scene.revealDelays ?? {};
	const keyPhrase = pickKeyPhrase(scene.body);
	const isLongHook = scene.body.length > 95;
	const atom = isLongHook
		? {x: 1420, y: 260, labelDx: 118, labelDy: -46}
		: {x: 960, y: 420, labelDx: 140, labelDy: -90};

	return (
		<SlideFrame sceneDurationInFrames={scene.durationInFrames}>
			<SlideChrome lesson={lesson} topic="A QUESTION" sceneType="hook" sceneIndex={sceneIndex} totalScenes={totalScenes} />

			{scene.image && ASSETS[scene.image as AssetName] ? (
				<FadeUp delay={rd.glyph ?? 12} durationFrames={18} dy={16}>
					<img
						src={ASSETS[scene.image as AssetName]}
						alt=""
						style={{
							position: 'absolute',
							left: atom.x,
							top: atom.y,
							transform: 'translate(-50%, -50%)',
							maxWidth: isLongHook ? 520 : 640,
							maxHeight: isLongHook ? 340 : 420,
							objectFit: 'contain',
							filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.18))',
						}}
					/>
				</FadeUp>
			) : (
				<AtomGlyph delay={rd.glyph ?? 12} centerX={atom.x} centerY={atom.y} compact={isLongHook} />
			)}

			{/* Margin annotation pointing at the glyph */}
			{!scene.image && (
				<ScribbleAnnotation
					x={atom.x + 46}
					y={atom.y}
					dx={atom.labelDx}
					dy={atom.labelDy}
					label="↑ one atom"
					color={TOK.amber}
					seed={11}
					delay={rd.annotation ?? 100}
					leaderDurationFrames={14}
					labelDurationFrames={10}
				/>
			)}

			{/* Bottom hero panel */}
			<div
				style={{
					position: 'absolute',
					left: 64,
					right: 64,
					bottom: isLongHook ? 126 : 160,
				}}
			>
				<Eyebrow color={TOK.inkDim}>↓ A QUESTION</Eyebrow>

				{scene.bullets && scene.bullets.length > 0 ? (
					<HookBulletList
						scene={scene}
						bulletStart={rd.bulletsStart ?? rd.body ?? 30}
						bulletEnd={Math.max((rd.bulletsStart ?? rd.body ?? 30) + 60, scene.durationInFrames - 90)}
					/>
				) : (
					<>
						{scene.heading ? (
							<FadeUp delay={rd.heading ?? 6} durationFrames={14} dy={16}>
								<h1
									style={{
										margin: '6px 0 18px',
										fontSize: 56,
										fontWeight: 800,
										lineHeight: 1.05,
										letterSpacing: '-0.025em',
										color: TOK.ink,
										maxWidth: 1700,
									}}
								>
									{scene.heading}
								</h1>
							</FadeUp>
						) : null}
						<div
							style={{
								fontSize: fitHookQuestionSize(scene.body),
								fontWeight: 700,
								lineHeight: 1.1,
								letterSpacing: '-0.02em',
								maxWidth: isLongHook ? 1780 : 1500,
								color: scene.heading ? TOK.inkDim : undefined,
							}}
						>
							<HeroQuestion text={scene.body} keyPhrase={keyPhrase} startDelay={rd.body ?? 30} />
						</div>
					</>
				)}

				{scene.callout ? (
					<FadeUp delay={rd.callout ?? 165} durationFrames={14} dy={20}>
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

// ─── HookBulletList — bullet form of the hook question ─────────────────
// Used when the hook scene supplies `bullets` instead of relying on a long
// prose body. The hook stays high-impact: heading is still the strongest
// visual element via short bold text, and bullets land in narrator order.

const HookBulletList = ({
	scene,
	bulletStart,
	bulletEnd,
}: {
	scene: TextScene;
	bulletStart: number;
	bulletEnd: number;
}) => (
	<>
		{scene.heading ? (
			<FadeUp delay={Math.max(0, bulletStart - 12)} durationFrames={14} dy={18}>
				<h1
					style={{
						margin: '0 0 18px',
						fontSize: 64,
						fontWeight: 800,
						lineHeight: 1.04,
						letterSpacing: '-0.025em',
						color: TOK.ink,
						maxWidth: 1700,
					}}
				>
					{scene.heading}
				</h1>
			</FadeUp>
		) : null}
		<BulletReveal
			bullets={scene.bullets!}
			startFrame={bulletStart}
			endFrame={bulletEnd}
			markerColor={TOK.amber}
			fontSize={34}
		/>
	</>
);

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
	const theme = useAccent();
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
					background: `radial-gradient(circle at 35% 30%, ${theme.accent2}aa 0%, ${theme.soft} 60%, ${TOK.bg} 100%)`,
					boxShadow: `0 0 80px ${theme.accent}40`,
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
	const theme = useAccent();
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
							color={theme.accent2}
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
