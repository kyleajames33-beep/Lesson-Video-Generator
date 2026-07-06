// HandWriteReveal — text appears as if being written by a pen, left to right.
//
// Two layered effects produce the illusion:
//   1. Character-staggered fade-in: each char fades in at a handwriting pace
//      (50-90 ms/char). Looks like the strokes appearing.
//   2. Pen tip indicator: a small amber dot tracks along the writing edge so
//      the eye follows where new content is appearing.
//
// Use anywhere static text feels too "computed":
//   - Formulas    <HandWriteReveal text="N = n × Nₐ" font="hand" size={120} />
//   - Worked steps with the result line stamped in
//   - Mnemonic rules on the poster slide
//
// The component is deliberately layout-neutral — it uses display:inline-block
// and inherits color/font from the parent so you can drop it into any slide.

import {useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import type {CSSProperties} from 'react';
import {FONT_DISPLAY, FONT_HAND, FONT_MONO, TOK} from '../styles/tokens';

type HandWriteRevealProps = {
	text: string;
	/** Frame at which writing starts. Defaults to 0. */
	delay?: number;
	/** Milliseconds per character. 50-90 looks natural; defaults to 65. */
	msPerChar?: number;
	/** Font face. "hand" = Caveat handwritten, "display" = Inter Tight, "mono" = JetBrains. */
	font?: 'hand' | 'display' | 'mono';
	/** Font size in pixels. */
	size?: number;
	/** Font weight override. Defaults sensibly per font face. */
	weight?: number;
	/** Color of the text. Defaults to TOK.ink. */
	color?: string;
	/** Color of the moving pen tip. Defaults to TOK.amber. */
	penColor?: string;
	/** Show the pen tip indicator. Default true. */
	showPen?: boolean;
	/** Letter spacing. */
	letterSpacing?: string;
	/** Additional wrapper styles. */
	style?: CSSProperties;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const fontFor = (face: 'hand' | 'display' | 'mono') => {
	if (face === 'hand') return FONT_HAND;
	if (face === 'mono') return FONT_MONO;
	return FONT_DISPLAY;
};

const defaultWeightFor = (face: 'hand' | 'display' | 'mono') => {
	if (face === 'hand') return 700;
	if (face === 'mono') return 600;
	return 800;
};

export const HandWriteReveal = ({
	text,
	delay = 0,
	msPerChar = 65,
	font = 'hand',
	size = 64,
	weight,
	color = TOK.ink,
	penColor = TOK.amber,
	showPen = true,
	letterSpacing,
	style,
}: HandWriteRevealProps) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const framesPerChar = (msPerChar / 1000) * fps;
	const localFrame = frame - delay;
	const fontFamily = fontFor(font);
	const fontWeight = weight ?? defaultWeightFor(font);

	// Total writing duration. We use this to anchor the pen-tip position.
	const totalChars = text.length;
	const writingProgress = Math.min(1, Math.max(0, localFrame / Math.max(1, framesPerChar * totalChars)));

	return (
		<span
			style={{
				position: 'relative',
				display: 'inline-block',
				fontFamily,
				fontSize: size,
				fontWeight,
				lineHeight: 1,
				color,
				letterSpacing,
				whiteSpace: 'pre',
				...style,
			}}
		>
			{text.split('').map((ch, i) => {
				const startFrame = i * framesPerChar;
				const endFrame = startFrame + framesPerChar * 0.9;
				const opacity = interpolate(localFrame, [startFrame, endFrame], [0, 1], clamp);
				// Subtle origin jitter so it doesn't feel mechanically stamped.
				const dy = interpolate(localFrame, [startFrame, endFrame], [4, 0], clamp);
				const seed = (i * 37) % 3;
				const skew = interpolate(localFrame, [startFrame, endFrame], [seed === 1 ? -1.5 : seed === 2 ? 1 : 0, 0], clamp);
				return (
					<span
						key={`${ch}-${i}`}
						style={{
							display: 'inline-block',
							opacity,
							transform: `translateY(${dy}px) skewX(${skew}deg)`,
							willChange: 'transform, opacity',
						}}
					>
						{ch === ' ' ? ' ' : ch}
					</span>
				);
			})}

			{showPen && writingProgress < 1 ? (
				<span
					aria-hidden
					style={{
						position: 'absolute',
						left: `${writingProgress * 100}%`,
						bottom: -size * 0.05,
						transform: 'translateX(-50%)',
						width: size * 0.08,
						height: size * 0.08,
						borderRadius: '50%',
						background: penColor,
						boxShadow: `0 0 ${size * 0.18}px ${penColor}, 0 0 ${size * 0.06}px ${penColor}`,
						pointerEvents: 'none',
					}}
				/>
			) : null}
		</span>
	);
};
