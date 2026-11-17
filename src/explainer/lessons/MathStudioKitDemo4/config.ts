// MathStudioKitDemo4: Year 11 Advanced wave 1 kit check composition (brief 245; no voice, no lesson). One 300-frame
// scene per part group: FactorStack, AlgebraTileGrid, CompleteSquareTiles, RootExtract and exact surds, NumberLineRay,
// MappingDiagram, VerticalLineSweep, FunctionMachine, ModelCard and RegionLabels, AxisShadow, CrossingCounter.
import type {ExplainerConfig} from '../../types';
import {SCENES_A} from './scenes-a';
import {SCENES_B} from './scenes-b';

export const SCENE_LEN_4 = 300;
const SCENES = {...SCENES_A, ...SCENES_B};
const scenes = Object.keys(SCENES).map(id => ({id, durationInFrames: SCENE_LEN_4}));
export const config_math_studio_kit_demo4: ExplainerConfig = {
	id: 'MathStudioKitDemo4',
	lesson: {scenes},
	scenes: SCENES,
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'STUDIO KIT DEMO 4',
	accent: '#8a5a12',
	assets: [],
	burnCaptions: false,
};
