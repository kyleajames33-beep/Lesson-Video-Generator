import lesson from '../../../../docs/production/claude-pm/lessons/m8g01/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';
// Quiet reading tails only. Keep measured narration and alignment immutable.
// Cumulative caption export must use the playback lesson snapshot, not measured offsets.
const readingTails: Record<string, number> = {'q1-data-ratio': 60, 'q2-outlier': 60};
export const config_m8g01: ExplainerConfig = {
 id: 'Explainer-chem-m8-g01',
 lesson: {...lesson, scenes: lesson.scenes.map(s => ({...s, durationInFrames: s.id === 'key-notes' ? 1800 : s.durationInFrames + (readingTails[s.id] ?? 0)}))},
 scenes: SCENES, subjectLabel: 'CHEMISTRY', topicLabel: 'TITRATION AND GRAVIMETRY PRACTICE', accent: '#0d6b52', assets: ASSETS,
};
