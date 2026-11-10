// SimGallery: catalogue composition for src/explainer/sims (no voice, no lesson). One 12 s scene per simulation
// or shared scene part; the key notes run 40 s, as they must in a lesson. Grade it with --frames 40.
import type {ExplainerConfig} from '../../types';
import {GALLERY_SCENES, SCENE_LEN} from './scenes';

export const config_sim_gallery: ExplainerConfig = {
	id: 'SimGallery',
	lesson: {scenes: Object.keys(GALLERY_SCENES).map(id => ({id, durationInFrames: id === 'key-notes' ? 1200 : SCENE_LEN}))},
	scenes: GALLERY_SCENES,
	subjectLabel: 'SIMULATIONS',
	topicLabel: 'GALLERY',
	accent: '#13767a',
	assets: [],
	burnCaptions: false,
};
