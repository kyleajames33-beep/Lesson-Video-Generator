import React from 'react';
import {SceneHook, SceneMale, SceneFemale} from './s1';
import {ScenePollination, ScenePollenTube} from './s2';
import {SceneFertilisation, SceneSeedFruit, SceneDispersal} from './s3';
import {SceneVegetative, SceneSeedsBetter, SceneWorkedOutline} from './s4';
import {SceneAttempt, SceneFeedback, SceneMemory, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'male-side': SceneMale, 'female-side': SceneFemale, pollination: ScenePollination, 'pollen-tube': ScenePollenTube, fertilisation: SceneFertilisation,
	'seed-fruit': SceneSeedFruit, dispersal: SceneDispersal, vegetative: SceneVegetative, 'seeds-better': SceneSeedsBetter, 'worked-outline': SceneWorkedOutline,
	attempt: SceneAttempt, feedback: SceneFeedback, memory: SceneMemory, 'key-notes': SceneNotes,
};
