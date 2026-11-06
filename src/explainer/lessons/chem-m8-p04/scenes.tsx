import React from 'react';
import {SceneAim, SceneHook, SceneMeasure, SceneRange, SceneStandards, SceneWavelength} from './s1';
import {SceneAid, SceneRead, SceneRelAcc, SceneRisk, SceneUnknown, SceneValid} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'aim-variables': SceneAim, 'make-standards': SceneStandards, 'wavelength-blank': SceneWavelength, 'measure-carefully': SceneMeasure, 'plot-linear-range': SceneRange,
	'unknown-dilute': SceneUnknown, 'read-scale-back': SceneRead, 'reliable-accurate': SceneRelAcc, valid: SceneValid, risk: SceneRisk, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-handoff': SceneHandoff, 'key-notes': SceneNotes,
};
