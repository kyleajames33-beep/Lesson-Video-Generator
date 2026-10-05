import {readFileSync} from 'node:fs';
// Shared with the renderer; captions, chapters and review frames must agree.
const timing = JSON.parse(readFileSync(new URL('../src/lesson/timing-constants.json', import.meta.url), 'utf8'));
export const {TRANSITION_FRAMES, INTRO_STINGER_FRAMES} = timing;
