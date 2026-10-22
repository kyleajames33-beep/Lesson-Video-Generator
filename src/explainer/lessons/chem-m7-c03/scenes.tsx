import React from 'react';
import {SceneHook, SceneLinear, SceneTetra, SceneTrig} from './s1';
import {SceneAlkenes, SceneIntra, SceneSeries, SceneSeriesIso} from './s2';
import {SceneAid, SceneBetween, SceneBranch, SceneChain, SceneSol} from './s3';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s4';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, tetrahedral: SceneTetra, 'trigonal-planar': SceneTrig, 'linear-and-local-shape': SceneLinear, 'homologous-series': SceneSeries,
	'alkene-alkyne-series': SceneAlkenes, 'series-vs-isomers': SceneSeriesIso, 'intra-vs-inter': SceneIntra, 'chain-length': SceneChain, branching: SceneBranch,
	'between-series': SceneBetween, solubility: SceneSol, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
