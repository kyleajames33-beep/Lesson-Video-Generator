// MathStudioKitDemo: kit check composition (no voice, no lesson). One 240-frame scene per studio-kit part.
import type {ExplainerConfig} from '../../types';
import {MATHS_SHARED_PLATES} from '../../math/studio';
import {BEAKER, DEMO_SCENES, SCENE_LEN} from './scenes';

const P = MATHS_SHARED_PLATES;
const scenes = Object.keys(DEMO_SCENES).map(id => ({id, durationInFrames: SCENE_LEN}));
export const config_math_studio_kit_demo: ExplainerConfig = {
	id: 'MathStudioKitDemo',
	lesson: {scenes},
	scenes: DEMO_SCENES,
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'STUDIO KIT DEMO',
	accent: '#8a5a12',
	assets: [P.bikeWheel, P.sealedJar, P.phoneTripod, P.soundMeter, P.guitar, P.car, P.dashboard, BEAKER].map(p => p.src),
	burnCaptions: false,
};
