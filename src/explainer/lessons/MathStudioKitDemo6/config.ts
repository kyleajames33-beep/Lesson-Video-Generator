// MathStudioKitDemo6: Year 11 Advanced wave 3 (graph transformations, probability and data) kit check composition
// (brief 245; no voice, no lesson). One 300-frame scene per part group: TransformationTracer, PointImageTable,
// StretchFromAxis, TransformQueue, FeatureLedger, CircleTracer, TwoSquareTiles, SetBraces, SubsetTest, OutcomeArray,
// VennDiagram, ProbabilityTree, TwoWayTable, DotsVsInterval, FrequencyTable and the histogram layers.
import type {ExplainerConfig} from '../../types';
import {SCENES_A} from './scenes-a';
import {SCENES_B} from './scenes-b';

export const SCENE_LEN_6 = 300;
const SCENES = {...SCENES_A, ...SCENES_B};
const scenes = Object.keys(SCENES).map(id => ({id, durationInFrames: SCENE_LEN_6}));
export const config_math_studio_kit_demo6: ExplainerConfig = {
	id: 'MathStudioKitDemo6',
	lesson: {scenes},
	scenes: SCENES,
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'STUDIO KIT DEMO 6',
	accent: '#8a5a12',
	assets: [],
	burnCaptions: false,
};
