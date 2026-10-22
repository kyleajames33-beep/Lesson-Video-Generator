import React from 'react';
import {SceneColony, SceneFates, SceneHook, SceneWho} from './s1';
import {SceneControl, SceneFair, SceneGraph, SceneRelative, SceneThree} from './s2';
import {SceneMeasure, SceneRisk, SceneSupports, SceneVRA} from './s3';
import {SceneAttemptOne, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (19 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'what-a-colony-is': SceneColony, 'four-fates': SceneFates, 'who-collects': SceneWho, 'fair-test': SceneFair,
	'control-same': SceneControl, 'three-plates': SceneThree, 'relative-survival': SceneRelative, graph: SceneGraph, supports: SceneSupports,
	'measure-mutation': SceneMeasure, 'validity-reliability': SceneVRA, 'risk-assessment': SceneRisk, 'attempt-1': SceneAttemptOne,
	'feedback-1': SceneFeedbackOne, 'attempt-2': SceneAttemptTwo, 'feedback-2': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
