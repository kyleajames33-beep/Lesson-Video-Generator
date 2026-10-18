import React from 'react';
import {SceneAgreeP03, SceneAimP03, SceneDefineP03, SceneHookP03, SceneMethodP03} from './s1';
import {SceneBeadsP03, SceneGraphP03, ScenePoolP03, SceneRecordP03} from './s2';
import {SceneLimitsP03, SceneRelationP03, SceneTrendP03} from './s3';
import {SceneAttemptP03, SceneDecisionP03, SceneFeedbackP03, SceneNotesP03} from './s4';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookP03, 'aim-characteristic': SceneAimP03, 'agreement-privacy': SceneAgreeP03, 'define-categories': SceneDefineP03, method: SceneMethodP03,
	'record-frequency': SceneRecordP03, pool: ScenePoolP03, 'column-graph': SceneGraphP03, 'bead-model': SceneBeadsP03, 'analyse-trend-pattern': SceneTrendP03,
	'analyse-relationship': SceneRelationP03, limitations: SceneLimitsP03, attempt: SceneAttemptP03, feedback: SceneFeedbackP03, 'decision-rule': SceneDecisionP03,
	'key-notes': SceneNotesP03,
};
