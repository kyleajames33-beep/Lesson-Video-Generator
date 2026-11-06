import React from 'react';
import {SceneDecay, SceneFeed, SceneHook, SceneName, SceneNutrients, SceneSources} from './s1';
import {SceneBiological, SceneChemical, SceneOneLook, ScenePhysical, SceneWhy, SceneWorkedRead} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'nutrients-needed': SceneNutrients, sources: SceneSources, 'feed-bloom': SceneFeed, 'die-decay-suffocate': SceneDecay, 'name-memory-aid': SceneName,
	'one-look': SceneOneLook, physical: ScenePhysical, chemical: SceneChemical, biological: SceneBiological, 'worked-read': SceneWorkedRead, 'why-monitor': SceneWhy,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
