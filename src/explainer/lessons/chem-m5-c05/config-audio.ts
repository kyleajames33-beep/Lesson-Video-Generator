import type {ExplainerConfig} from '../../types';
import {config_c05} from './config';

/** Audio pilot (owner approved 14 Oct): the same C5 video with a light soundtrack, for side-by-side comparison. Pixabay Content License files, see docs/production/claude-pm/assets/audio-pilot-provenance.json. */
const A = 'assets/audio/pilot/';
const soundtrack = {sting: A + 'intro-sting-soft-piano.wav', countdownBed: A + 'countdown-bed-piano-serenity.mp3', keynotesBed: A + 'keynotes-bed-gentle-piano.mp3', tick: A + 'sfx-clock-tick-soft.wav', transition: A + 'sfx-page-turn.wav'};
export const config_c05_audio: ExplainerConfig = {...config_c05, id: 'Explainer-chem-m5-c05-audio', soundtrack, assets: [...config_c05.assets, ...Object.values(soundtrack)]};
