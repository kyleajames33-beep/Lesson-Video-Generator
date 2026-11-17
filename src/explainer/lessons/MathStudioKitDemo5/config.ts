// MathStudioKitDemo5: Year 11 Advanced wave 2 (trigonometry) kit check composition (brief 245; no voice, no lesson).
// One 300-frame scene per part group: StudioCirclePoint, CircleToGraph, RadiusWrap, SectorSegment, StudioTriangle
// (with SSAConstruction, HingeBars and MinutesDial), BearingRose, BearingJourney and ElevationView.
import type {ExplainerConfig} from '../../types';
import {SCENES_A} from './scenes-a';
import {SCENES_B} from './scenes-b';

export const SCENE_LEN_5 = 300;
const SCENES = {...SCENES_A, ...SCENES_B};
const scenes = Object.keys(SCENES).map(id => ({id, durationInFrames: SCENE_LEN_5}));
export const config_math_studio_kit_demo5: ExplainerConfig = {
	id: 'MathStudioKitDemo5',
	lesson: {scenes},
	scenes: SCENES,
	subjectLabel: 'MATHEMATICS ADVANCED',
	topicLabel: 'STUDIO KIT DEMO 5',
	accent: '#8a5a12',
	assets: [],
	burnCaptions: false,
};
