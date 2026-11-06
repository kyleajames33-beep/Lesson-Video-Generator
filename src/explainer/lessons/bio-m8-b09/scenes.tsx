import React from 'react';
import {SceneCycle, SceneHook, SceneMitosis, SceneP53, SceneSeveral} from './s1';
import {SceneAccelerator, SceneBenign, SceneBrakes, SceneMelanoma, SceneMetastasis, SceneWhySpread} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'mitosis-without-control': SceneMitosis, 'cell-cycle-checkpoints': SceneCycle, 'p53-apoptosis': SceneP53, 'several-changes': SceneSeveral,
	accelerator: SceneAccelerator, brakes: SceneBrakes, 'melanoma-uv': SceneMelanoma, 'benign-malignant': SceneBenign, metastasis: SceneMetastasis, 'why-spread-matters': SceneWhySpread,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
