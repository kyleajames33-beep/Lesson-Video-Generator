// BurnedCaptions — narrator-paced caption strip with word-level
// highlighting on the active token, built on @remotion/captions.
//
// Architecture (per the Remotion captions skill):
//   1. Word-level captions come from build-captions.mjs (one Caption per word).
//   2. createTikTokStyleCaptions() groups them into screen-sized pages.
//   3. Each page renders inside its own <Sequence> so only the active page is
//      mounted at any time — performant for long lessons.
//   4. Inside a page, we compare absoluteTimeMs against each token's
//      fromMs/toMs and color the active token in amber.

import {useMemo} from 'react';
import {Sequence, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {createTikTokStyleCaptions, type Caption, type TikTokPage} from '@remotion/captions';
import {TOK} from '../../styles/tokens';

type BurnedCaptionsProps = {
	captions?: Caption[];
};

// How often the caption strip swaps pages (ms). 1400 ms = ~5–7 words per
// page for our narrator's pace — enough to read at a glance, short enough
// to keep up with the audio.
const SWITCH_CAPTIONS_EVERY_MS = 1400;

const FADE_FRAMES = 4;

export const BurnedCaptions = ({captions}: BurnedCaptionsProps) => {
	const {fps} = useVideoConfig();

	const pages = useMemo<TikTokPage[]>(() => {
		if (!captions || captions.length === 0) return [];
		return createTikTokStyleCaptions({
			captions,
			combineTokensWithinMilliseconds: SWITCH_CAPTIONS_EVERY_MS,
		}).pages;
	}, [captions]);

	if (pages.length === 0) return null;

	return (
		<>
			{pages.map((page, index) => {
				const nextPage = pages[index + 1] ?? null;
				const startFrame = Math.floor((page.startMs / 1000) * fps);
				const endFrame = Math.min(
					nextPage ? Math.floor((nextPage.startMs / 1000) * fps) : Number.MAX_SAFE_INTEGER,
					startFrame + Math.ceil((SWITCH_CAPTIONS_EVERY_MS / 1000) * fps),
				);
				const durationInFrames = endFrame - startFrame;
				if (durationInFrames <= 0) return null;

				return (
					<Sequence
						key={`cap-${index}-${page.startMs}`}
						from={startFrame}
						durationInFrames={durationInFrames}
						layout="none"
					>
						<CaptionPage page={page} durationInFrames={durationInFrames} />
					</Sequence>
				);
			})}
		</>
	);
};

const CaptionPage = ({
	page,
	durationInFrames,
}: {
	page: TikTokPage;
	durationInFrames: number;
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Fade pill in and out so successive pages don't pop hard.
	const opacity = interpolate(
		frame,
		[0, FADE_FRAMES, durationInFrames - FADE_FRAMES, durationInFrames],
		[0, 1, 1, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
	);

	// Sequence-local frame → absolute lesson-local time for token highlighting.
	const currentTimeMs = (frame / fps) * 1000;
	const absoluteTimeMs = page.startMs + currentTimeMs;

	return (
		<div
			style={{
				position: 'absolute',
				bottom: 32,
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				pointerEvents: 'none',
				zIndex: 50,
				opacity,
			}}
		>
			<div
				style={{
					maxWidth: '70%',
					padding: '10px 22px',
					background: 'rgba(8, 12, 10, 0.78)',
					borderRadius: 8,
					border: `1px solid rgba(255,255,255,0.08)`,
					backdropFilter: 'blur(6px)',
					WebkitBackdropFilter: 'blur(6px)',
					fontSize: 28,
					fontWeight: 600,
					lineHeight: 1.25,
					letterSpacing: '-0.005em',
					textAlign: 'center',
					textShadow: '0 1px 2px rgba(0,0,0,0.4)',
					whiteSpace: 'pre',
				}}
			>
				{page.tokens.map((token, i) => {
					const isActive = token.fromMs <= absoluteTimeMs && token.toMs > absoluteTimeMs;
					return (
						<span
							key={`${token.fromMs}-${i}`}
							style={{
								color: isActive ? TOK.amber : TOK.ink,
								// Subtle bump on the active word so the eye finds it.
								fontWeight: isActive ? 720 : 600,
								transition: 'none',
							}}
						>
							{token.text}
						</span>
					);
				})}
			</div>
		</div>
	);
};
