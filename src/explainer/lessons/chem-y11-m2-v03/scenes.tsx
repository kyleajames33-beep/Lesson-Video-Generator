import React from 'react';
import {SceneCompounds, SceneElementMole, SceneGramsToMoles, SceneHook, SceneMolarMass, SceneWhyMatches} from './s1';
import {SceneMemoryLine, ScenePrediction, SceneRibbonChain, SceneSameMass, SceneSodiumChloride, SceneWater} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'element-mole': SceneElementMole, 'why-it-matches': SceneWhyMatches, 'molar-mass': SceneMolarMass, compounds: SceneCompounds, 'grams-to-moles': SceneGramsToMoles,
	water: SceneWater, prediction: ScenePrediction, 'same-mass': SceneSameMass, 'sodium-chloride': SceneSodiumChloride, 'ribbon-chain': SceneRibbonChain, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
