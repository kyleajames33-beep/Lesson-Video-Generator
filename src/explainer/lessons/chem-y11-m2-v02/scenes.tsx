import React from 'react';
import {SceneHook} from './hook';
import {SceneAtomsToMoles, SceneCountNotMass, SceneEquationMoles, SceneMemoryLine, SceneMolesToAtoms, SceneNameParticle, ScenePrediction} from './s2';
import {SceneCounting, SceneMoleAvogadro, SceneNandN, SceneScale, SceneWhyNumber} from './s1';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'counting-unit': SceneCounting, 'mole-and-avogadro': SceneMoleAvogadro, scale: SceneScale, 'why-this-number': SceneWhyNumber, 'n-and-N': SceneNandN,
	prediction: ScenePrediction, 'count-not-mass': SceneCountNotMass, 'moles-to-atoms': SceneMolesToAtoms, 'atoms-to-moles': SceneAtomsToMoles, 'name-the-particle': SceneNameParticle,
	'equation-in-moles': SceneEquationMoles, 'memory-line': SceneMemoryLine,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
