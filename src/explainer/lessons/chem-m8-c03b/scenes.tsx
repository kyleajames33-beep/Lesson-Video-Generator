import React from 'react';
import {SceneAcetate, SceneAcid, SceneHalides, SceneHook, SceneSulfate, SceneWhyAcid} from './s1';
import {SceneAid, SceneAmmonia, SceneFlowchart, SceneHydroxide, ScenePhosphate} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'step-1-acid': SceneAcid, acetate: SceneAcetate, 'why-acidify': SceneWhyAcid, 'step-2-sulfate': SceneSulfate, 'step-3-halides': SceneHalides,
	'ammonia-confirms': SceneAmmonia, phosphate: ScenePhosphate, hydroxide: SceneHydroxide, flowchart: SceneFlowchart, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
