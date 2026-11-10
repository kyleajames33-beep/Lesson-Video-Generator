// MathStudioKitDemo3: kit pass 2B check composition (no voice, no lesson). One 240-frame scene per part group.
import type {ExplainerConfig} from '../../types';
import {PLATES_A, SCENES_A} from './scenes-a';
import {PLATES_B, SCENES_B} from './scenes-b';

export const SCENE_LEN_3 = 240;
const SCENES = {...SCENES_A, ...SCENES_B};
const scenes = Object.keys(SCENES).map(id => ({id, durationInFrames: SCENE_LEN_3}));
export const config_math_studio_kit_demo3: ExplainerConfig = {
	id: 'MathStudioKitDemo3',
	lesson: {scenes},
	scenes: SCENES,
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'STUDIO KIT DEMO 3',
	accent: '#8a5a12',
	assets: [...new Set([...PLATES_A, ...PLATES_B].map(p => p.src))],
	burnCaptions: false,
};
