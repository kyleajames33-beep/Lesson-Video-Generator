import React from 'react';
import {SceneHook, SceneHypothesis, SceneInquiry, ScenePrimary} from './s1';
import {SceneChecks, SceneEvidence, SceneJudging, SceneModify, SceneSorting} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'inquiry-question': SceneInquiry, hypothesis: SceneHypothesis, 'primary-secondary': ScenePrimary, judging: SceneJudging, 'reading-the-checks': SceneChecks,
	'new-evidence': SceneEvidence, 'sorting-evidence': SceneSorting, modifying: SceneModify, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2,
	'feedback-2': SceneFeedback2, 'conclusion-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
