import React from 'react';
import {SceneAim, SceneAnion, SceneCation, SceneControls, SceneHook, SceneSmall} from './s1';
import {SceneAid, SceneJustify, SceneRecord, SceneRisk, SceneVRA} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'aim-plan': SceneAim, 'blank-known-unknown': SceneControls, 'small-scale': SceneSmall, 'unknown-c-cation': SceneCation, 'unknown-c-anion': SceneAnion,
	record: SceneRecord, justify: SceneJustify, 'valid-reliable-accurate': SceneVRA, risk: SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
