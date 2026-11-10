// SimGallery: catalogue composition for src/explainer/sims (no voice, no lesson). One 12 s scene per simulation.
import type {ExplainerConfig} from '../../types';
import {GALLERY_SCENES, SCENE_LEN} from './scenes';

export const config_sim_gallery: ExplainerConfig = {
	id: 'SimGallery',
	lesson: {scenes: Object.keys(GALLERY_SCENES).map(id => ({id, durationInFrames: SCENE_LEN}))},
	scenes: GALLERY_SCENES,
	subjectLabel: 'SIMULATIONS',
	topicLabel: 'GALLERY',
	accent: '#13767a',
	assets: [],
	burnCaptions: false,
};
