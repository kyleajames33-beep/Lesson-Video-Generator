import React from 'react';
import {SceneHook, SceneInfectious, SceneMacro, SceneMadeOfCells, SceneMicro} from './s1';
import {SceneMemory, ScenePlants, SceneTreatment, SceneViroidPrion, SceneViruses} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'infectious-pathogen-host': SceneInfectious, 'made-of-cells': SceneMadeOfCells, microorganisms: SceneMicro, macroorganisms: SceneMacro,
	viruses: SceneViruses, 'viroids-and-prions': SceneViroidPrion, 'plant-hosts': ScenePlants, treatment: SceneTreatment, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
