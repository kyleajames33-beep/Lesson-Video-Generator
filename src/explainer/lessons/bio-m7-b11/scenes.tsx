import React from 'react';
import {SceneHook} from './s1';
import {SceneMemory} from './s2';
import {SceneDecision, SceneFeedbackOne, SceneFeedbackTwo} from './s3';
import {SceneAssessBig, SceneCombinationBig, SceneNoTargetBig, SceneResistanceBig, SceneSelectiveBig, SceneStepsBig, SceneStopNewBig, SceneTargetsBig, SceneUseWellBig} from './big';
import {SceneAttemptBig, SceneAttemptTwoBig, SceneNotesBig} from './exam';

// Playback order comes from the measured lesson (17 scenes). Quality fix (6 Nov 2026): the middle scenes, the two
// exam items and the key notes use the variants in big.tsx and exam.tsx; s1, s2 and s3 keep the earlier versions.
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'selective-toxicity': SceneSelectiveBig, 'antibiotic-targets': SceneTargetsBig, 'no-target-in-virus': SceneNoTargetBig,
	'antiviral-steps': SceneStepsBig, 'stop-new-viruses': SceneStopNewBig, resistance: SceneResistanceBig, combination: SceneCombinationBig,
	'use-well': SceneUseWellBig, assess: SceneAssessBig, memory: SceneMemory,
	attempt: SceneAttemptBig, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwoBig, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotesBig,
};
