import React from 'react';
import {SceneEnding, SceneFour, SceneHook, SceneStem, SceneThree} from './s1';
import {SceneBranches, SceneLongest, SceneMultiple, SceneNumber} from './s2';
import {SceneAid, SceneName, SceneWins} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'four-bonds': SceneFour, 'three-drawings': SceneThree, 'rule-stem': SceneStem, 'rule-ending': SceneEnding, 'rule-longest-chain': SceneLongest,
	'rule-number': SceneNumber, 'rule-several-branches': SceneBranches, 'multiple-bonds': SceneMultiple, 'bond-wins': SceneWins, 'name-to-structure': SceneName,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
