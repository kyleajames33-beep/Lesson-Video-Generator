import React from 'react';
import {SceneEquation, SceneHook, SceneHydration, SceneTwoPlayers} from './s1';
import {SceneEnergySteps, SceneEntropy, SceneHotCold, SceneSaltCancel} from './s2';
import {SceneAddedSolid, SceneAids, SceneRatesMeet, SceneSaturating, SceneTracer} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'two-players': SceneTwoPlayers, hydration: SceneHydration, equation: SceneEquation,
	'energy-steps': SceneEnergySteps, 'hot-cold-packs': SceneHotCold, 'salt-cancel': SceneSaltCancel, entropy: SceneEntropy,
	saturating: SceneSaturating, 'rates-meet': SceneRatesMeet, tracer: SceneTracer, 'added-solid': SceneAddedSolid, 'memory-aids': SceneAids,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
