// BulletReveal — narrator-paced dotpoint reveal.
//
// Each bullet appears as the narrator reaches it. Per-bullet `at` (seconds
// from scene start) gives precise control; otherwise bullets distribute
// evenly across the audio span between `startFrame` and `endFrame`.

import {useVideoConfig} from 'remotion';
import type {CSSProperties} from 'react';
import {FadeUp} from './FadeUp';
import {MathText} from '../slides/shared/MathText';
import {FONT_MONO, TOK, TYPE} from '../styles/tokens';

export type BulletItem =
	| string
	| {
			text: string;
			/** Seconds from scene start. Overrides even-distribution timing. */
			at?: number;
			/** Optional emphasis colour for the bullet marker. */
			accent?: string;
	  };

type BulletRevealProps = {
	bullets: BulletItem[];
	/** Frame at which the FIRST bullet should appear at the earliest. */
	startFrame: number;
	/** Frame by which the LAST bullet should be on screen. */
	endFrame: number;
	/** Reveal duration per bullet, in frames. Default 14. */
	durationFrames?: number;
	/** Pixel translate-up amount per bullet. Default 18. */
	dy?: number;
	/** Default marker color. Default TOK.chem1. */
	markerColor?: string;
	/** Bullet text size. Default TYPE.bodyLarge.fontSize. */
	fontSize?: number;
	/** Outer container style. */
	style?: CSSProperties;
};

export const BulletReveal = ({
	bullets,
	startFrame,
	endFrame,
	durationFrames = 14,
	dy = 18,
	markerColor = TOK.chem1,
	fontSize = TYPE.bodyLarge.fontSize,
	style,
}: BulletRevealProps) => {
	const {fps} = useVideoConfig();
	const items = bullets.map((b) => (typeof b === 'string' ? {text: b} : b));

	const span = Math.max(1, endFrame - startFrame);
	const slot = items.length > 1 ? span / (items.length - 1) : 0;

	const delays = items.map((item, i) => {
		if (item.at !== undefined) return Math.round(item.at * fps);
		return Math.round(startFrame + i * slot);
	});

	return (
		<ul
			style={{
				listStyle: 'none',
				margin: 0,
				padding: 0,
				display: 'grid',
				gap: 22,
				...style,
			}}
		>
			{items.map((item, i) => (
				<li key={`${i}-${item.text}`} style={{display: 'block'}}>
					<FadeUp delay={delays[i]} durationFrames={durationFrames} dy={dy}>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '44px minmax(0, 1fr)',
								gap: 18,
								alignItems: 'baseline',
							}}
						>
							<span
								aria-hidden
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'flex-start',
									fontFamily: FONT_MONO,
									fontSize: 22,
									letterSpacing: '0.08em',
									color: item.accent ?? markerColor,
									fontWeight: 600,
									lineHeight: 1,
									paddingTop: 8,
								}}
							>
								<span
									style={{
										display: 'inline-block',
										width: 14,
										height: 14,
										borderRadius: 3,
										background: item.accent ?? markerColor,
										marginRight: 12,
									}}
								/>
								{String(i + 1).padStart(2, '0')}
							</span>
							<div
								style={{
									fontSize,
									fontWeight: 600,
									lineHeight: 1.32,
									color: TOK.ink,
									letterSpacing: '-0.012em',
								}}
							>
								<MathText text={item.text} />
							</div>
						</div>
					</FadeUp>
				</li>
			))}
		</ul>
	);
};
