import React from 'react';
import {SceneHook, SceneFshLh} from './s1';
import {SceneBrake, SceneThermostat, SceneBrakeStaysOn} from './s2';
import {SceneOestrogen, SceneTrigger, SceneLoopCloses, SceneTwoKinds} from './s3';
import {SceneExplain, SceneMilkJobs, SceneMilkTrigger} from './s4';
import {SceneAttempt, SceneFeedbackOne, SceneFeedbackTwo, SceneFeedbackThree, SceneMemory, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'fsh-lh': SceneFshLh, brake: SceneBrake, thermostat: SceneThermostat, 'brake-stays-on': SceneBrakeStaysOn,
	oestrogen: SceneOestrogen, trigger: SceneTrigger, 'loop-closes': SceneLoopCloses, 'two-kinds': SceneTwoKinds, 'explain-answer': SceneExplain,
	'milk-jobs': SceneMilkJobs, 'milk-trigger': SceneMilkTrigger,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'feedback-two': SceneFeedbackTwo, 'feedback-three': SceneFeedbackThree,
	memory: SceneMemory, 'key-notes': SceneNotes,
};
