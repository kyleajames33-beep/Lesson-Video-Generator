// MathStudioKitDemo2: kit pass 2A check composition (no voice, no lesson). One 240-frame scene per part group.
import type {ExplainerConfig} from '../../types';
import {PLATES_A, SCENES_A} from './scenes-a';
import {PLATES_B, SCENES_B} from './scenes-b';

export const SCENE_LEN_2 = 240;
const SCENES = {...SCENES_A, ...SCENES_B};
const scenes = Object.keys(SCENES).map(id => ({id, durationInFrames: SCENE_LEN_2}));
export const config_math_studio_kit_demo2: ExplainerConfig = {
	id: 'MathStudioKitDemo2',
	lesson: {scenes},
	scenes: SCENES,
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'STUDIO KIT DEMO 2',
	accent: '#8a5a12',
	assets: [...new Set([...PLATES_A, ...PLATES_B].map(p => p.src))],
	burnCaptions: false,
};
