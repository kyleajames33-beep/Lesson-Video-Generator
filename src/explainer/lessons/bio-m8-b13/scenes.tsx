import React from 'react';
import {SceneDesign, SceneHook, SceneKnowing, SceneLadder, SceneLevels} from './s1';
import {SceneEquity, SceneHowSure, SceneImpact, SceneOutcome} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'prevention-levels': SceneLevels, 'design-frame': SceneDesign, 'knowing-doing': SceneKnowing, 'evidence-ladder': SceneLadder,
	'impact-evidence': SceneImpact, 'outcome-evidence': SceneOutcome, 'how-sure': SceneHowSure, 'equity-improve': SceneEquity,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
