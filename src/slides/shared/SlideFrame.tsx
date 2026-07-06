// SlideFrame — the dark cinematic 1920×1080 stage shared by gold-standard slides.
// See docs/visual-design-handbook.md for tokens and motion principles.

import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {SceneProgress} from './SceneProgress';

type SlideFrameProps = {
	children: ReactNode;
	/** Override the stage background. Defaults to TOK.bg (#0a0f0d). */
	background?: string;
	/** Apply a subtle vignette to focus attention on centre. Default: true. */
	vignette?: boolean;
	/**
	 * Scene duration in frames. When provided, renders the perimeter trace
	 * and corner dial that complete with the scene. Slides should pass
	 * `scene.durationInFrames` here.
	 */
	sceneDurationInFrames?: number;
	/** Override the trace/dial accent. Defaults to TOK.chem1. */
	progressColor?: string;
	style?: CSSProperties;
};

export const SlideFrame = ({
	children,
	background = TOK.bg,
	vignette = true,
	sceneDurationInFrames,
	progressColor,
	style,
}: SlideFrameProps) => {
	return (
		<AbsoluteFill
			style={{
				background,
				color: TOK.ink,
				fontFamily: FONT_DISPLAY,
				overflow: 'hidden',
				...style,
			}}
		>
			{children}
			{vignette ? (
				<div
					aria-hidden
					style={{
						position: 'absolute',
						inset: 0,
						pointerEvents: 'none',
						background:
							'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.12) 100%)',
					}}
				/>
			) : null}
			{/* SceneProgress (corner dial + perimeter trace) removed — was overlapping
			    the year/lesson chrome at top-right. Lesson progress is already shown
			    by the LessonProgressBar at the very top of the video. */}
		</AbsoluteFill>
	);
};
