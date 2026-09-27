// Silent preview renders (scripts/render-scene-previews.mjs) set
// REMOTION_NO_AUDIO=1 via Remotion's envVariables. Audio files are not in git,
// and Remotion downloads every <Audio> asset even for a muted render, so a
// lesson with wired narration would otherwise fail with a 404.
export const audioDisabled = (): boolean =>
	typeof process !== 'undefined' && process.env?.REMOTION_NO_AUDIO === '1';
