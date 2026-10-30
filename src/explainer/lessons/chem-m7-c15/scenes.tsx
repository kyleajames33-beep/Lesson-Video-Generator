import React from 'react';
import {SceneBuildPet, SceneHook, SceneNylon, SceneRepeat, SceneTwoEnds} from './s1';
import {SceneAid, SceneBackwards, SceneCompare, SceneNylonProps, ScenePetProps} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'two-ends': SceneTwoEnds, 'build-pet': SceneBuildPet, 'draw-repeat-unit': SceneRepeat, nylon: SceneNylon,
	'monomers-back': SceneBackwards, compare: SceneCompare, 'nylon-properties': SceneNylonProps, 'pet-properties': ScenePetProps, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
