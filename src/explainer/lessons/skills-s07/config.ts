import lesson from '../../../../docs/production/claude-pm/lessons/skills07/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SKILLS_ACCENT} from '../skills-shared/theme';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Shared series (Chemistry and Biology): series eyebrow and neutral accent, as s01 to s05.
const l = lesson as unknown as ExplainerConfig['lesson'];
const missing = l.scenes.filter(s => !SCENES[s.id]).map(s => s.id);
if (missing.length) throw new Error('S07 scenes missing: ' + missing.join(', '));
export const config_skills07: ExplainerConfig = {
	id: 'Explainer-skills-s07',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'HSC EXAM SKILLS',
	topicLabel: 'PRACTICAL QUESTIONS: FIXES THAT FIX',
	accent: SKILLS_ACCENT,
	assets: ASSETS,
};
