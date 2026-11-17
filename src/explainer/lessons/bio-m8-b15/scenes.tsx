import React from 'react';
import {SceneAid, SceneCochlea, SceneHook, SceneOuterMiddle, SceneTwoKinds} from './s1';
import {SceneBone, SceneImplant, SceneMatched, SceneStory} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'outer-middle-ear': SceneOuterMiddle, 'cochlea-hair-cells': SceneCochlea, 'two-kinds-of-loss': SceneTwoKinds, 'hearing-aid': SceneAid,
	'cochlear-implant': SceneImplant, 'australian-story-limits': SceneStory, 'bone-conduction': SceneBone, 'matched-not-ranked': SceneMatched,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
