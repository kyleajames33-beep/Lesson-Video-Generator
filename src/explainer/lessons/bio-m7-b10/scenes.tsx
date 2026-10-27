import React from 'react';
import {SceneEnvironmental, SceneHands, SceneHook, SceneWhichLink} from './s1';
import {SceneAirRoute, SceneBorder, SceneIsolation, SceneQuarantine} from './s2';
import {SceneHerd, SceneHowMany, SceneJudge, SceneMemory} from './s3';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s4';

// Playback order comes from the measured lesson (18 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'which-link': SceneWhichLink, hands: SceneHands, environmental: SceneEnvironmental,
	'air-route': SceneAirRoute, isolation: SceneIsolation, quarantine: SceneQuarantine, border: SceneBorder,
	'herd-immunity': SceneHerd, 'how-many': SceneHowMany, judge: SceneJudge, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo,
	'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
