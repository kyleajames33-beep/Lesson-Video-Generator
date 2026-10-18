import React from 'react';
import {SceneHookB13, SceneScaleB13, SceneSickleB13, SceneStreamsB13} from './s1';
import {SceneConservationB13, SceneHumanB13, SceneMalariaB13, SceneNotProofB13} from './s2';
import {SceneImprovesB13, SceneMemoryB13} from './s3';
import {SceneAttemptB13, SceneAttemptTwoB13, SceneDecisionB13, SceneFeedbackOneB13, SceneFeedbackTwoB13, SceneNotesB13} from './s4';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB13, 'why-scale': SceneScaleB13, 'sickle-puzzle': SceneSickleB13, 'three-streams': SceneStreamsB13,
	'malaria-overlay': SceneMalariaB13, 'match-not-proof': SceneNotProofB13, conservation: SceneConservationB13, 'human-evolution': SceneHumanB13,
	'improves-not-removes': SceneImprovesB13, memory: SceneMemoryB13, attempt: SceneAttemptB13, 'feedback-one': SceneFeedbackOneB13,
	'attempt-two': SceneAttemptTwoB13, 'feedback-two': SceneFeedbackTwoB13, 'decision-rule': SceneDecisionB13, 'key-notes': SceneNotesB13,
};
