import React from 'react';
import {SceneDecisionBoard, SceneHookBoard, SceneNotesG3a} from './s1';
import {SceneDirectK, SceneIceOneValue} from './s2';
import {SceneQAnswer, SceneQQuestion} from './s3';
import {SceneAttemptG3a, SceneFeedbackG3a} from './s4';

export const SCENES: Record<string, React.FC> = {
	'hook-board': SceneHookBoard, 'direct-k': SceneDirectK, 'ice-one-value': SceneIceOneValue, 'q-vs-k-question': SceneQQuestion,
	'q-vs-k-answer': SceneQAnswer, attempt: SceneAttemptG3a, feedback: SceneFeedbackG3a, 'decision-board': SceneDecisionBoard, 'key-notes': SceneNotesG3a,
};
