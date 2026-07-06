// BackgroundMusic — the underscore bed that runs under the whole lesson.
//
// Renders an <Audio> at low volume, loops to fill the lesson duration,
// and fades in at the start of teaching content (after the stinger) and
// out at the end of the end-card.
//
// Activation:
//   1. Drop a royalty-free MP3 at public/audio/music/<name>.mp3
//   2. Set lesson.backgroundMusic = "music/<name>.mp3" in the JSON
//
// Without those, the component renders nothing — silent video as before.

import {Audio} from '@remotion/media';
import {staticFile, useVideoConfig, interpolate} from 'remotion';

type BackgroundMusicProps = {
	src?: string;
	/** 0–1. Defaults to 0.18 (music-bed level — present but never competing). */
	volume?: number;
	/** Frames to fade in at start. Defaults to 20 (~0.7s at 30fps). */
	fadeInFrames?: number;
	/** Frames to fade out at end. Defaults to 40 (~1.3s). */
	fadeOutFrames?: number;
	/**
	 * Total frames the music should play for. Defaults to the parent
	 * sequence's duration (via useVideoConfig). Pass explicitly when
	 * embedded in a longer composition but you want it to fade out at a
	 * specific point (e.g. end of the stinger).
	 */
	playForFrames?: number;
};

export const BackgroundMusic = ({
	src,
	volume = 0.18,
	fadeInFrames = 20,
	fadeOutFrames = 40,
	playForFrames,
}: BackgroundMusicProps) => {
	const {durationInFrames} = useVideoConfig();
	if (!src) return null;

	const totalFrames = playForFrames ?? durationInFrames;

	const volumeCurve = (f: number) => {
		const fadeIn = interpolate(f, [0, fadeInFrames], [0, 1], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
		const fadeOut = interpolate(
			f,
			[totalFrames - fadeOutFrames, totalFrames],
			[1, 0],
			{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
		);
		return Math.min(fadeIn, fadeOut) * volume;
	};

	return <Audio src={staticFile(src)} volume={volumeCurve} loop />;
};
