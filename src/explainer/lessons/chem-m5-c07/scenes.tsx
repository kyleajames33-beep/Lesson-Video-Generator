import React from 'react';
import {SceneHook, SceneYield} from './s1';
import {SceneCatalyst, SceneThreeTemps, SceneTimeInReactor} from './s2';
import {ScenePressure, SceneRecycle} from './s3';
import {SceneAid, SceneAttempt, SceneModelAnswer} from './s4';
import {SceneDecision, SceneFeedbackPressure, SceneFeedbackTemp, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, yield: SceneYield, 'time-in-reactor': SceneTimeInReactor, 'three-temperatures': SceneThreeTemps, 'catalyst-speed': SceneCatalyst,
	'pressure-limit': ScenePressure, recycle: SceneRecycle, 'model-answer': SceneModelAnswer, 'memory-aid': SceneAid, attempt: SceneAttempt,
	'feedback-temperature': SceneFeedbackTemp, 'feedback-pressure-removal': SceneFeedbackPressure, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
