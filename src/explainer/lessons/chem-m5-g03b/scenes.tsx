import React from 'react';
import {SceneDecisionB3, SceneHookB3, SceneNotesG3b} from './s1';
import {SceneTinyQuestion, SceneTinySetupG3, SceneTinySolveG3} from './s2';
import {SceneHugeSetup, SceneHugeSolve, SceneHugeTest} from './s3';
import {SceneAddAnswer, SceneAddIce, SceneAddK, SceneAddSetup} from './s4';

export const SCENES: Record<string, React.FC> = {
	'hook-board': SceneHookB3, 'tiny-k-question': SceneTinyQuestion, 'tiny-k-setup': SceneTinySetupG3, 'tiny-k-solve-and-test': SceneTinySolveG3,
	'huge-k-setup': SceneHugeSetup, 'huge-k-solve': SceneHugeSolve, 'huge-k-test-and-reactant-start': SceneHugeTest,
	'addition-setup': SceneAddSetup, 'addition-ice-table': SceneAddIce, 'addition-k-equation': SceneAddK, 'addition-answer-and-slips': SceneAddAnswer,
	'decision-board': SceneDecisionB3, 'key-notes': SceneNotesG3b,
};
