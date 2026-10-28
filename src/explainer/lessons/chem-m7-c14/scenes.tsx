import React from 'react';
import {SceneBackwards, SceneHook, SceneRepeat, SceneSolid, SceneZipper} from './s1';
import {SceneAid, SceneLdpe, ScenePs, ScenePtfe, ScenePvc} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'open-double-bond': SceneZipper, 'draw-repeat-unit': SceneRepeat, 'monomer-from-unit': SceneBackwards, 'solid-thermoplastic': SceneSolid,
	'ldpe-hdpe': SceneLdpe, pvc: ScenePvc, polystyrene: ScenePs, ptfe: ScenePtfe, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
