import React from 'react';
import {SceneCataract, SceneFocus, SceneHook, SceneHyper, SceneMyopia} from './s1';
import {SceneGlasses, SceneLaser, SceneLensReplace, SceneMatched} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'how-the-eye-focuses': SceneFocus, myopia: SceneMyopia, 'hyperopia-astigmatism-presbyopia': SceneHyper, cataract: SceneCataract,
	'glasses-contacts': SceneGlasses, 'laser-surgery': SceneLaser, 'lens-replacement': SceneLensReplace, 'matched-not-ranked': SceneMatched,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
