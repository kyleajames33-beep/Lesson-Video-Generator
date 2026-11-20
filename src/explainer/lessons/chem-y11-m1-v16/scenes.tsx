import React from 'react';
import {SceneCause, SceneColours, SceneHook, SceneMethod, SceneReasons, SceneShows} from './s1';
import {SceneContamination, SceneMemoryLine, SceneNoColour, SceneOverlap, ScenePrediction, SceneSpectroscope} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, cause: SceneCause, method: SceneMethod, 'reasons-safety': SceneReasons, colours: SceneColours, 'what-it-shows': SceneShows,
	prediction: ScenePrediction, overlap: SceneOverlap, contamination: SceneContamination, 'no-colour': SceneNoColour, spectroscope: SceneSpectroscope, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
