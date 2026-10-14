import React from 'react';
import {SceneHook, SceneWhyHalve} from './sA';
import {SceneModelAlleles, ScenePairUp, SceneCrossingWhat, SceneCrossingMakes} from './sB';
import {SceneMetaphaseOne, SceneAssortment, SceneFirstDivision, SceneSecondDivision} from './sC';
import {SceneFourCells, SceneTracking} from './sD';
import {SceneCombinations, SceneFertilisation} from './sE';
import {SceneCompare, SceneAttempt, SceneFeedbackOne, SceneFeedbackTwo} from './sF';
import {SceneMemory, SceneNotes} from './sG';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'why-halve': SceneWhyHalve, 'model-alleles': SceneModelAlleles, 'prophase-one': ScenePairUp,
	'crossing-what': SceneCrossingWhat, 'crossing-makes': SceneCrossingMakes, 'metaphase-one-line-up': SceneMetaphaseOne,
	'independent-assortment': SceneAssortment, 'first-division': SceneFirstDivision, 'second-division': SceneSecondDivision,
	'four-cells': SceneFourCells, tracking: SceneTracking, combinations: SceneCombinations, fertilisation: SceneFertilisation,
	compare: SceneCompare, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'feedback-two': SceneFeedbackTwo,
	memory: SceneMemory, 'key-notes': SceneNotes,
};
