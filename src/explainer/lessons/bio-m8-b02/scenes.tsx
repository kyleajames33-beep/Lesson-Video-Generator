import React from 'react';
import {SceneEndo, SceneHook, SceneNeural, SceneSweat, SceneVaso} from './s1';
import {SceneCold, SceneLimits, SceneMemory, SceneRoo, SceneTrends, SceneTypes} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, endotherms: SceneEndo, 'neural-pathway': SceneNeural, vasodilation: SceneVaso, sweating: SceneSweat, 'cold-and-hormones': SceneCold,
	'three-types': SceneTypes, 'red-kangaroo': SceneRoo, trends: SceneTrends, limits: SceneLimits, memory: SceneMemory, attempt: SceneAttempt,
	'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
