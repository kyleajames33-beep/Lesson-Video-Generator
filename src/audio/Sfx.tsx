// Sfx — short sound effect played at a specific frame within a scene.
//
// Use for: bullet reveals, callout pops, "trap" warning stings,
// quick-check pause-resume cues. Each effect is a tiny MP3 in
// public/audio/sfx/.
//
// Usage:
//   <Sfx name="tick" at={30} />
//   <Sfx name="sting" at={callout-12} volume={0.6} />
//
// Convention: name = filename without extension. The component resolves
// to public/audio/sfx/<name>.mp3 via staticFile().

import {Audio} from '@remotion/media';
import {Sequence, staticFile} from 'remotion';

type SfxProps = {
	/** SFX pack file name (without .mp3 extension). */
	name: string;
	/** Frame at which the SFX plays. Defaults to 0 (start of parent sequence). */
	at?: number;
	/** Volume 0–1. Defaults to 0.5 (SFX sit under narration). */
	volume?: number;
	/** Cap the SFX length in frames. Defaults to 30 (1s — short by design). */
	durationInFrames?: number;
};

export const Sfx = ({name, at = 0, volume = 0.5, durationInFrames = 30}: SfxProps) => {
	return (
		<Sequence from={at} durationInFrames={durationInFrames}>
			<Audio src={staticFile(`audio/sfx/${name}.mp3`)} volume={volume} />
		</Sequence>
	);
};
