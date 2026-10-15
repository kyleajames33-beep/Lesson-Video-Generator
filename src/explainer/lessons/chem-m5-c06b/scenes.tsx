import React from 'react';
import {SceneCheckB, SceneHookB, SceneSolveB, SceneSubstituteB} from './s1';
import {SceneSquareCondition, SceneTinyDrop, SceneTinySetup} from './s2';
import {SceneNoQuadratic, SceneTinyCheck, SceneTinySolve} from './s3';
import {SceneAttemptB, SceneFeedbackSlipsB, SceneFeedbackSquare, SceneFeedbackTiny} from './s4';
import {SceneDecisionB, SceneNotesB} from './s5';
// Reused C6 takes with character-identical captions (same word timings): the C6 scene components are used as built.
import {SceneKGiven} from '../chem-m5-c06/s2';
import {SceneUnknownX} from '../chem-m5-c06/s3';
import {SceneAid} from '../chem-m5-c06/s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB, 'k-given': SceneKGiven, 'unknown-x': SceneUnknownX, substitute: SceneSubstituteB, solve: SceneSolveB, check: SceneCheckB,
	'memory-aid': SceneAid, 'square-condition': SceneSquareCondition, 'tiny-k-setup': SceneTinySetup, 'tiny-k-drop': SceneTinyDrop,
	'tiny-k-solve': SceneTinySolve, 'tiny-k-check': SceneTinyCheck, 'no-quadratic': SceneNoQuadratic, attempt: SceneAttemptB,
	'feedback-square': SceneFeedbackSquare, 'feedback-tiny-k': SceneFeedbackTiny, 'feedback-slips': SceneFeedbackSlipsB,
	'decision-rule': SceneDecisionB, 'key-notes': SceneNotesB,
};
