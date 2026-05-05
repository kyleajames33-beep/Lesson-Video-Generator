// Eyebrow — shared mono label used at the top of nearly every slide.
// Standardises font, size, letter-spacing, and uppercase transform.
// Default colour is inkDim; pass amber only when the eyebrow IS the accent.

import {FadeUp} from '../../animations/FadeUp';
import {FONT_MONO, TOK} from '../../styles/tokens';

type EyebrowProps = {
	children: React.ReactNode;
	/** Defaults to inkDim. Override to amber ONLY when this is the single accent. */
	color?: string;
	delay?: number;
};

export const Eyebrow = ({children, color = TOK.inkDim, delay = 3}: EyebrowProps) => (
	<FadeUp delay={delay} durationFrames={12}>
		<div
			style={{
				fontFamily: FONT_MONO,
				fontSize: 22,
				color,
				letterSpacing: '0.15em',
				textTransform: 'uppercase',
			}}
		>
			{children}
		</div>
	</FadeUp>
);
