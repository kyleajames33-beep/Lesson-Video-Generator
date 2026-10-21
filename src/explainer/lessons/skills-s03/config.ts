import lesson from '../../../../docs/production/claude-pm/lessons/skills03/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SKILLS_ACCENT} from '../skills-shared/theme';
import {SCENES} from './scenes';
import {ASSETS} from './assets';

// Shared series (lesson.json subject "Chemistry and Biology"): series eyebrow and neutral accent, as s01 and s02.
const l = lesson as unknown as ExplainerConfig['lesson'];
export const config_skills03: ExplainerConfig = {
	id: 'Explainer-skills-s03',
	lesson: l,
	scenes: Object.fromEntries(l.scenes.map(s => [s.id, SCENES[s.id]])),
	subjectLabel: 'HSC EXAM SKILLS',
	topicLabel: 'COMPARE, CONTRAST, DISTINGUISH',
	accent: SKILLS_ACCENT,
	assets: ASSETS,
};
