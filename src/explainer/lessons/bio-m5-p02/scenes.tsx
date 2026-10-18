import React from 'react';
import {SceneAimP02, SceneBuildP02, SceneCopyP02, SceneHookP02} from './s1';
import {SceneCrossP02, SceneDivideP02, SceneRecordP02} from './s2';
import {SceneFertiliseP02, SceneMutateP02, SceneResultsP02} from './s3';
import {SceneLimitsP02, SceneStrengthsP02, SceneValidP02} from './s4';
import {SceneAttemptP02, SceneDecisionP02, SceneFeedbackP02, SceneNotesP02} from './s5';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookP02, 'aim-kit': SceneAimP02, 'build-parent': SceneBuildP02, copy: SceneCopyP02, 'cross-over': SceneCrossP02, 'line-up-divide': SceneDivideP02,
	'record-gametes': SceneRecordP02, fertilise: SceneFertiliseP02, mutate: SceneMutateP02, results: SceneResultsP02, 'assess-strengths': SceneStrengthsP02,
	'assess-limits': SceneLimitsP02, 'valid-reliable': SceneValidP02, attempt: SceneAttemptP02, feedback: SceneFeedbackP02, 'decision-rule': SceneDecisionP02, 'key-notes': SceneNotesP02,
};
