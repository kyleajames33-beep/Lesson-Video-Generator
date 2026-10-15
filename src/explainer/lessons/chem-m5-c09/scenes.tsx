import React from 'react';
import {SceneCause, SceneHook, SceneStayedFixed} from './s1';
import {SceneBackwards, SceneEvidence, SceneReasonRule} from './s2';
import {SceneFourChanges, SceneMixtureMoves, SceneNewK} from './s3';
import {SceneAttempt, SceneFeedbackHeating, SceneMemoryAid} from './s4';
import {SceneDecision, SceneExtraCheck, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'k-stayed-fixed': SceneStayedFixed, 'temperature-cause': SceneCause, evidence: SceneEvidence, backwards: SceneBackwards,
	'reason-and-rule': SceneReasonRule, 'four-changes': SceneFourChanges, 'new-k': SceneNewK, 'mixture-moves': SceneMixtureMoves,
	'memory-aid': SceneMemoryAid, attempt: SceneAttempt, 'feedback-heating': SceneFeedbackHeating, 'feedback-extra-check': SceneExtraCheck,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
