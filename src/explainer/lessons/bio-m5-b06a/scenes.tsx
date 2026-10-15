import React from 'react';
import {SceneBacteriumRing, SceneCoiling, SceneHook, ScenePlasmids, SceneTwoKinds} from './s1';
import {SceneLinear, SceneLoosen, SceneNucleosome, SceneTight, SceneWinds} from './s2';
import {SceneMemory, SceneOrganelle, SceneSideBySide, SceneWriting} from './s3';
import {SceneDecisionB6, SceneNotesB6} from './s4';
import {SceneAttemptB6, SceneAttemptTwo, SceneFeedbackOne, SceneFeedbackTwo} from './s5';

// Playback order comes from the measured lesson (take02): ... memory, attempt, feedback-one, attempt-two, feedback-two, decision-rule, key-notes.
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'two-kinds-of-cell': SceneTwoKinds, 'bacterium-ring': SceneBacteriumRing, coiling: SceneCoiling, plasmids: ScenePlasmids,
	'eukaryote-linear': SceneLinear, 'why-thread-winds': SceneWinds, 'nucleosome-chromatin': SceneNucleosome, 'loosen-to-read': SceneLoosen,
	'tight-for-division': SceneTight, 'organelle-dna': SceneOrganelle, 'side-by-side': SceneSideBySide, 'writing-comparison': SceneWriting,
	memory: SceneMemory, attempt: SceneAttemptB6, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecisionB6, 'key-notes': SceneNotesB6,
};
