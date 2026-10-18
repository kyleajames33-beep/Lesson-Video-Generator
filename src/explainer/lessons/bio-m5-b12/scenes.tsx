import React from 'react';
import {SceneFamilyB12, SceneHookB12, SceneSequencingB12, SceneTwoToolsB12} from './s1';
import {SceneChildBandsB12, SceneGelB12, SceneManyMarkersB12, SceneStrB12} from './s2';
import {SceneChooseB12, SceneLimitsB12, SceneMemoryB12} from './s3';
import {SceneAttemptB12, SceneAttemptTwoB12, SceneDecisionB12, SceneFeedbackOneB12, SceneFeedbackTwoB12, SceneNotesB12} from './s4';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB12, 'two-tools': SceneTwoToolsB12, 'how-sequencing-works': SceneSequencingB12, 'sequencing-a-family': SceneFamilyB12,
	'short-tandem-repeats': SceneStrB12, gel: SceneGelB12, 'child-bands': SceneChildBandsB12, 'many-markers': SceneManyMarkersB12,
	'choose-the-tool': SceneChooseB12, 'tool-limits': SceneLimitsB12, memory: SceneMemoryB12, attempt: SceneAttemptB12, 'feedback-one': SceneFeedbackOneB12,
	'attempt-two': SceneAttemptTwoB12, 'feedback-two': SceneFeedbackTwoB12, 'decision-rule': SceneDecisionB12, 'key-notes': SceneNotesB12,
};
