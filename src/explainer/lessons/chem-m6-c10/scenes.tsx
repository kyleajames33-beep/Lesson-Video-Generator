import React from 'react';
import {SceneHook, SceneHookAnswer, SceneKaNumber, SceneWeHyd, SceneWeIce} from './s1';
import {SceneAid, SceneKaKb, ScenePka, SceneRanking, SceneReadPka, SceneStrongWeak} from './s2';
import {SceneAttempt1, SceneAttempt2, SceneDecision, SceneFeedback1, SceneFeedback2, SceneNotes} from './s3';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'ka-is-the-number': SceneKaNumber, 'we-hydronium': SceneWeHyd, 'we-ice-backwards': SceneWeIce, 'hook-answer': SceneHookAnswer,
	pka: ScenePka, 'reading-pka': SceneReadPka, 'strong-weak': SceneStrongWeak, 'ka-kb-kw': SceneKaKb, 'conjugate-ranking': SceneRanking, 'memory-aid': SceneAid,
	'attempt-1': SceneAttempt1, 'feedback-1': SceneFeedback1, 'attempt-2': SceneAttempt2, 'feedback-2': SceneFeedback2, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
