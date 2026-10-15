import React from 'react';
import {SceneBacteriumRing, SceneCoiling, SceneHook, ScenePlasmids, SceneTwoKinds} from './s1';
import {SceneLinear, SceneLoosen, SceneNucleosome, SceneTight, SceneWinds} from './s2';
import {SceneMemory, SceneOrganelle, SceneSideBySide, SceneWriting} from './s3';
import {SceneAttemptB6, SceneAttemptTwo, SceneDecisionB6, SceneFeedbackOne, SceneFeedbackTwo, SceneNotesB6} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'two-kinds-of-cell': SceneTwoKinds, 'bacterium-ring': SceneBacteriumRing, coiling: SceneCoiling, plasmids: ScenePlasmids,
	'eukaryote-linear': SceneLinear, 'why-thread-winds': SceneWinds, 'nucleosome-chromatin': SceneNucleosome, 'loosen-to-read': SceneLoosen,
	'tight-for-division': SceneTight, 'organelle-dna': SceneOrganelle, 'side-by-side': SceneSideBySide, 'writing-comparison': SceneWriting,
	memory: SceneMemory, attempt: SceneAttemptB6, 'attempt-two': SceneAttemptTwo, 'feedback-one': SceneFeedbackOne, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecisionB6, 'key-notes': SceneNotesB6,
};
