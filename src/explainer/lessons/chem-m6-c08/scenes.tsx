import React from 'react';
import {SceneHook, SceneWe1Check, SceneWe1Drop, SceneWe1Ice, SceneWhyWeak} from './s1';
import {SceneAid, SceneCheckFails, SceneStrongWeak, SceneWeakBase, SceneWeakBasePh} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'why-weak': SceneWhyWeak, 'we1-ice-table': SceneWe1Ice, 'we1-drop-x': SceneWe1Drop, 'we1-check-ph': SceneWe1Check, 'check-fails': SceneCheckFails,
	'weak-base': SceneWeakBase, 'weak-base-ph': SceneWeakBasePh, 'strong-or-weak': SceneStrongWeak, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
