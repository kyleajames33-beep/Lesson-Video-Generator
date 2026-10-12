import React from 'react';
import {SceneHook, SceneProblemCopy, SceneShareSplit} from './s1';
import {SceneDoubling} from './s2';
import {SceneYeast, SceneProtists, SceneAcineta} from './s3';
import {SceneConjugation, SceneSamePattern} from './s4';
import {SceneAttempt, SceneFeedback, SceneMemory, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'problem-copy': SceneProblemCopy, 'share-split': SceneShareSplit, doubling: SceneDoubling, 'yeast-budding': SceneYeast, 'protist-fission': SceneProtists, acineta: SceneAcineta,
	conjugation: SceneConjugation, 'same-pattern': SceneSamePattern, attempt: SceneAttempt, feedback: SceneFeedback, memory: SceneMemory, 'key-notes': SceneNotes,
};
