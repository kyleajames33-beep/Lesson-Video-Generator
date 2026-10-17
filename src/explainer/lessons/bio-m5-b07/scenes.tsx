import React from 'react';
import {SceneFoldB7, SceneHookB7, SceneJobsB7, SceneShapeB7} from './s1';
import {SceneNoShortcutB7, SceneSickleBaseB7, SceneSickleTraitB7} from './s2';
import {SceneEnvironmentB7, SceneGenesEnvB7, SceneMemoryB7, SceneWhySynthesisB7} from './s3';
import {SceneAttemptB7, SceneAttemptTwoB7, SceneDecisionB7, SceneFeedbackOneB7, SceneFeedbackTwoB7, SceneNotesB7} from './s4';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB7, 'protein-jobs': SceneJobsB7, 'why-fold': SceneFoldB7, 'shape-job': SceneShapeB7, 'sickle-base': SceneSickleBaseB7, 'sickle-trait': SceneSickleTraitB7,
	'no-shortcut': SceneNoShortcutB7, environment: SceneEnvironmentB7, 'genes-and-environment': SceneGenesEnvB7, 'why-synthesis': SceneWhySynthesisB7, memory: SceneMemoryB7,
	attempt: SceneAttemptB7, 'feedback-one': SceneFeedbackOneB7, 'attempt-two': SceneAttemptTwoB7, 'feedback-two': SceneFeedbackTwoB7, 'decision-rule': SceneDecisionB7, 'key-notes': SceneNotesB7,
};
