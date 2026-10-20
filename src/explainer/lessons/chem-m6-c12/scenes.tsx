import React from 'react';
import {SceneApparatus, SceneConcordant, SceneEndpoint, SceneHook, SceneStandard} from './s1';
import {SceneAid, SceneWe1Conc, SceneWe1Moles, SceneWe2Burette, SceneWe2Ratio} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'idea-apparatus': SceneApparatus, 'equivalence-endpoint': SceneEndpoint, 'primary-standard': SceneStandard, 'concordant-titres': SceneConcordant,
	'we1-moles': SceneWe1Moles, 'we1-concentration': SceneWe1Conc, 'we2-ratio': SceneWe2Ratio, 'we2-burette-unknown': SceneWe2Burette, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
