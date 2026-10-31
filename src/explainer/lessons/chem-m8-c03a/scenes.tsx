import React from 'react';
import {SceneEvidence, SceneFlame, SceneHook, SceneSilverLead, SceneStep1, SceneStep2} from './s1';
import {SceneAid, SceneComplexes, SceneFlameLimits, SceneFlowchart, SceneIronTrap, SceneOrder, SceneStep3} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneFeedback1, SceneFeedback2, SceneHandoff, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'three-kinds-of-evidence': SceneEvidence, 'step-1-chloride': SceneStep1, 'silver-or-lead': SceneSilverLead, 'step-2-sulfate': SceneStep2, 'flame-tests': SceneFlame,
	'flame-limits': SceneFlameLimits, 'step-3-hydroxide': SceneStep3, 'why-this-order': SceneOrder, 'iron-two-trap': SceneIronTrap, 'complexes-confirm': SceneComplexes, flowchart: SceneFlowchart,
	'memory-aid': SceneAid, 'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, handoff: SceneHandoff, 'key-notes': SceneNotes,
};
