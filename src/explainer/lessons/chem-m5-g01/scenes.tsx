import React from 'react';
import {SceneHook, SceneNonEq, SceneRecallG, SceneRecallHeat} from './s1';
import {SceneGlucose, SceneHeading, SceneHowStrong} from './s2';
import {SceneAid, ScenePhotoLeaf, ScenePhotoReverse} from './s3';
import {SceneAttempt, SceneDecision, SceneFeedback, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'non-equilibrium': SceneNonEq, 'recall-heat-spread': SceneRecallHeat, 'recall-delta-g': SceneRecallG, glucose: SceneGlucose,
	'how-strong': SceneHowStrong, 'heading-not-speed': SceneHeading, 'photo-reverse': ScenePhotoReverse, 'photo-leaf': ScenePhotoLeaf, aid: SceneAid,
	attempt: SceneAttempt, feedback: SceneFeedback, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
