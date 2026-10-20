import React from 'react';
import {SceneCard, SceneHook, SceneIdentify, SceneVerbs} from './s1';
import {SceneBuild, SceneDescribe, SceneSetup, SceneWeak} from './s2';
import {SceneChemLadder, SceneDecision, SceneDrill1, SceneDrill2, SceneFeedback1, SceneFeedback2, SceneNotes, SceneTest} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-verbs': SceneVerbs, 'question-card': SceneCard, identify: SceneIdentify, describe: SceneDescribe, 'explain-setup': SceneSetup,
	'explain-build': SceneBuild, 'weak-vs-strong': SceneWeak, 'chem-ladder': SceneChemLadder, 'because-test': SceneTest,
	'drill-1': SceneDrill1, 'feedback-1': SceneFeedback1, 'drill-2': SceneDrill2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
