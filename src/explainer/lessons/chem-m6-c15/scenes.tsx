import React from 'react';
import {SceneBackIdea, SceneBoil, SceneDirect, SceneHook} from './s1';
import {SceneDilution, SceneHidden, SceneLines, SceneVinegar, SceneWeAdded, SceneWeUsed} from './s2';
import {SceneAid, SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'direct-fails': SceneDirect, 'back-titration-idea': SceneBackIdea, 'boil-off-co2': SceneBoil, 'we-added-left': SceneWeAdded, 'we-used-mass': SceneWeUsed,
	'hidden-endpoint': SceneHidden, 'lines-cross': SceneLines, dilution: SceneDilution, 'vinegar-reading': SceneVinegar, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
