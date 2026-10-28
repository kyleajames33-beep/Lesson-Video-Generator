import React from 'react';
import {SceneCarboxyl, SceneDimers, SceneHook, SceneNaming, SceneSeries, SceneWeak} from './s1';
import {SceneAid, SceneLitmus, SceneReactions, SceneShared, SceneTest} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'carboxyl-group': SceneCarboxyl, 'naming-acids': SceneNaming, 'dimers-boiling': SceneDimers, 'series-solubility': SceneSeries, 'weak-acid': SceneWeak,
	'shared-charge': SceneShared, litmus: SceneLitmus, 'acid-reactions': SceneReactions, 'hydrogen-carbonate-test': SceneTest, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
