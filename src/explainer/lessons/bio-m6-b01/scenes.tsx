import React from 'react';
import {SceneHook, SceneNewAllele, SceneOneCopy, SceneThreeLevels} from './s1';
import {ScenePassingOn, SceneRandom, SceneReplica, SceneSelection} from './s2';
import {SceneMemory, SceneSources, SceneWhatNext} from './s3';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (17 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-levels': SceneThreeLevels, 'new-allele': SceneNewAllele, 'one-copy': SceneOneCopy,
	'passing-on': ScenePassingOn, 'random-not-needed': SceneRandom, 'replica-plates': SceneReplica, selection: SceneSelection,
	sources: SceneSources, 'what-next': SceneWhatNext, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
