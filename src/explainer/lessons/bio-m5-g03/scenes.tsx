import React from 'react';
import {SceneGroupG03, SceneHookG03, SceneNotCertainG03, SceneWhyG03} from './s1';
import {SceneCarrierG03, SceneHoldG03} from './s2';
import {SceneMemoryG03, SceneRelativesG03, SceneWordingG03} from './s3';
import {SceneAttemptG03, SceneAttemptTwoG03, SceneDecisionG03, SceneFeedbackOneG03, SceneFeedbackTwoG03, SceneNotesG03} from './s4';

// Playback order comes from the measured lesson (15 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookG03, 'group-not-person': SceneGroupG03, 'why-not-decided': SceneWhyG03, 'not-certain': SceneNotCertainG03,
	'carrier-estimate': SceneCarrierG03, 'when-predictions-hold': SceneHoldG03, 'shared-with-relatives': SceneRelativesG03, 'strong-wording': SceneWordingG03,
	memory: SceneMemoryG03, attempt: SceneAttemptG03, 'feedback-one': SceneFeedbackOneG03, 'attempt-two': SceneAttemptTwoG03, 'feedback-two': SceneFeedbackTwoG03,
	'decision-rule': SceneDecisionG03, 'key-notes': SceneNotesG03,
};
