import React from 'react';
import {SceneAimP01, SceneCutP01, SceneHookP01, SceneMakeP01} from './s1';
import {SceneBuildP01, SceneRecordP01, SceneReplicateP01} from './s2';
import {SceneResultsP01, SceneTranscribeP01, SceneTranslateP01} from './s3';
import {SceneImproveP01, SceneLimitsP01, SceneStrengthsP01} from './s4';
import {SceneAttemptP01, SceneDecisionP01, SceneFeedbackP01, SceneNotesP01} from './s5';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookP01, 'aim-kit': SceneAimP01, 'cut-nucleotides': SceneCutP01, 'make-synthesis-pieces': SceneMakeP01, 'build-molecule': SceneBuildP01,
	replicate: SceneReplicateP01, 'record-check': SceneRecordP01, transcribe: SceneTranscribeP01, translate: SceneTranslateP01, 'results-table': SceneResultsP01,
	'assess-strengths': SceneStrengthsP01, 'assess-limits': SceneLimitsP01, improvements: SceneImproveP01, attempt: SceneAttemptP01, feedback: SceneFeedbackP01,
	'decision-rule': SceneDecisionP01, 'key-notes': SceneNotesP01,
};
