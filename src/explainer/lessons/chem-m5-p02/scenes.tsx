import React from 'react';
import {SceneAbsorbance, SceneColourimeter, SceneHook} from './s1';
import {SceneCalibration, SceneReadMixture, SceneStandards} from './s2';
import {SceneDilution, SceneFindK, SceneIce, SceneRepeats} from './s3';
import {SceneAid, SceneAttempt, SceneDecision, SceneFeedback, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, colourimeter: SceneColourimeter, absorbance: SceneAbsorbance, standards: SceneStandards, calibration: SceneCalibration,
	'read-mixture': SceneReadMixture, dilution: SceneDilution, 'ice-table': SceneIce, 'find-k': SceneFindK, repeats: SceneRepeats,
	'memory-aid': SceneAid, attempt: SceneAttempt, feedback: SceneFeedback, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
