import React from 'react';
import {SceneHook, SceneMoment, SceneTubeEq} from './s1';
import {SceneGraphs, SceneNewEq, SceneResponse} from './s2';
import {SceneHeatCobalt, ScenePrinciple, SceneRemoval, SceneWarming} from './s3';
import {SceneHeatAid, SceneTempResponse} from './s4';
import {SceneAttempt, SceneDecision, SceneFeedback, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'tube-equilibrium': SceneTubeEq, 'moment-of-change': SceneMoment, response: SceneResponse, 'new-equilibrium': SceneNewEq, graphs: SceneGraphs,
	removal: SceneRemoval, principle: ScenePrinciple, 'heat-cobalt': SceneHeatCobalt, warming: SceneWarming, 'temperature-response': SceneTempResponse, 'heat-aid': SceneHeatAid,
	attempt: SceneAttempt, feedback: SceneFeedback, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
