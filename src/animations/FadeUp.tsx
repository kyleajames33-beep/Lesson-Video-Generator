// FadeUp — the workhorse reveal primitive.
//
// Implements motion principle #1 from docs/visual-design-handbook.md:
//   "Reveal, don't announce. Type slides up 16px and fades in over 400ms
//    with cubic-bezier(.2,.7,.3,1). Stagger between siblings: 60ms for words,
//    120ms for blocks."
//
// Use FadeUp directly for blocks, and FadeUpStagger for splitting a string
// into word-by-word reveals.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {CSSProperties, ReactNode} from 'react';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// cubic-bezier(.2,.7,.3,1) — the gold-standard reveal ease
const REVEAL_EASE = Easing.bezier(0.2, 0.7, 0.3, 1);

type FadeUpProps = {
	children: ReactNode;
	/** Frame at which the reveal starts. */
	delay?: number;
	/** Reveal duration in frames. Default 12 (≈400ms @ 30fps). */
	durationFrames?: number;
	/** Pixels to translate up from. Default 16. */
	dy?: number;
	className?: string;
	style?: CSSProperties;
};

export const FadeUp = ({
	children,
	delay = 0,
	durationFrames = 12,
	dy = 16,
	className,
	style,
}: FadeUpProps) => {
	const frame = useCurrentFrame();
	const progress = interpolate(frame, [delay, delay + durationFrames], [0, 1], clamp);
	const eased = REVEAL_EASE(progress);
	const opacity = eased;
	const translateY = (1 - eased) * dy;

	return (
		<div
			className={className}
			style={{
				opacity,
				transform: `translateY(${translateY}px)`,
				willChange: 'transform, opacity',
				...style,
			}}
		>
			{children}
		</div>
	);
};

type FadeUpStaggerProps = {
	/** String to split into per-word reveals. */
	text: string;
	/** Frame at which the FIRST word starts revealing. */
	delay?: number;
	/** Frames between each word's start. Default 2 (≈60ms @ 30fps). */
	staggerFrames?: number;
	/** Reveal duration per word, in frames. */
	durationFrames?: number;
	/** Pixels to translate up from. */
	dy?: number;
	/** Style applied to each word's wrapper span. Useful for color/weight. */
	wordStyle?: CSSProperties;
	/** Style applied to the outer container. */
	style?: CSSProperties;
	className?: string;
};

/**
 * Word-by-word stagger reveal. Splits text on whitespace and fades each word
 * up in turn. Use for hook questions, definitional reveals, anything where
 * the rhythm of reading should match the rhythm of the voiceover.
 *
 * For finer control (per-word color, italics, scribble underlines on a
 * specific word), build the markup yourself and wrap each word in <FadeUp>.
 */
export const FadeUpStagger = ({
	text,
	delay = 0,
	staggerFrames = 2,
	durationFrames = 12,
	dy = 16,
	wordStyle,
	style,
	className,
}: FadeUpStaggerProps) => {
	const words = text.split(/(\s+)/); // keep whitespace as separate tokens

	return (
		<span className={className} style={style}>
			{words.map((word, i) => {
				if (word.trim() === '') return word;
				const wordIndex = words.slice(0, i).filter((w) => w.trim() !== '').length;
				return (
					<span key={i} style={{display: 'inline-block', ...wordStyle}}>
						<FadeUp
							delay={delay + wordIndex * staggerFrames}
							durationFrames={durationFrames}
							dy={dy}
							style={{display: 'inline-block'}}
						>
							{word}
						</FadeUp>
					</span>
				);
			})}
		</span>
	);
};

/**
 * Helper for converting seconds to frames at the current composition fps.
 * Use in slide layouts when timing values are easier to think about in
 * seconds than frames.
 */
export const useFrames = () => {
	const {fps} = useVideoConfig();
	return (seconds: number) => Math.round(seconds * fps);
};
