import React from 'react';
import {SceneClassify, SceneHBonds, SceneHook, SceneHydroxyl, SceneNaming, SceneNotBranching, SceneWins} from './s1';
import {SceneAid, SceneIsomers, SceneLonger, SceneSame, SceneSeries, SceneSolubility} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'hydroxyl-group': SceneHydroxyl, 'naming-alcohols': SceneNaming, 'oh-wins-numbering': SceneWins, 'classify-alcohols': SceneClassify,
	'class-not-branching': SceneNotBranching, 'hydrogen-bonds': SceneHBonds, 'same-electrons': SceneSame, 'along-the-series': SceneSeries, 'isomers-shape': SceneIsomers,
	'solubility-water': SceneSolubility, 'longer-chain-solubility': SceneLonger, 'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1,
	'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
