import React from 'react';
import {SceneDisplay, SceneFindT, SceneHelper, SceneHook, SceneReceptor, SceneVirusEnters} from './s1';
import {SceneApoptosis, SceneCytoFind, SceneMemory, SceneNK, SceneTwoArms} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (17 scenes; no scene 12).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'virus-enters': SceneVirusEnters, 'display-pieces': SceneDisplay, 't-cell-receptor': SceneReceptor, 'find-t-cells': SceneFindT,
	'helper-t-cells': SceneHelper, 'cytotoxic-find': SceneCytoFind, apoptosis: SceneApoptosis, 'nk-cells': SceneNK, 'two-arms': SceneTwoArms, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
