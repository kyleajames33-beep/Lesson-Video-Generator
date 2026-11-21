import React from 'react';
import {SceneDifference, SceneHFPrediction, SceneHook, SceneIonic, SceneNonPolar, ScenePolar, SceneSpectrum} from './s1';
import {SceneBoundary, SceneCO2, SceneConnection, SceneLewisIonic, SceneMgCl2, SceneWater} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, difference: SceneDifference, 'non-polar': SceneNonPolar, polar: ScenePolar, ionic: SceneIonic, spectrum: SceneSpectrum, prediction: SceneHFPrediction,
	boundary: SceneBoundary, 'lewis-ionic': SceneLewisIonic, 'magnesium-chloride': SceneMgCl2, 'lewis-water': SceneWater, 'double-bonds': SceneCO2, connection: SceneConnection,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
