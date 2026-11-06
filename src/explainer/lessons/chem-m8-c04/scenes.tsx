import React from 'react';
import {SceneBeer, SceneComplex, SceneHook, SceneSpectrum, SceneUVVis, SceneWhichLight} from './s1';
import {SceneAid, SceneAtomise, SceneCalib, SceneDilute, SceneMethod, SceneRead, SceneSpecific} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'which-light': SceneWhichLight, 'uv-visible': SceneUVVis, spectrum: SceneSpectrum, complex: SceneComplex, 'beer-lambert': SceneBeer,
	'aas-atomise-absorb': SceneAtomise, 'aas-specific': SceneSpecific, calibration: SceneCalib, 'worked-dilute': SceneDilute, 'worked-read': SceneRead, 'which-method': SceneMethod, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
