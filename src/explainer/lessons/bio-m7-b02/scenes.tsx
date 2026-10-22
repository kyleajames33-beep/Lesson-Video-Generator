import React from 'react';
import {SceneBreak, SceneClearBroth, SceneHook, SceneOldIdeas, SceneSetup} from './s1';
import {SceneFindGrow, SceneGiveAgain, SceneLimits, SceneMemory, SceneShowed} from './s2';
import {SceneAttempt, SceneAttemptTwo, SceneDecision, SceneFeedbackOne, SceneFeedbackTwo, SceneNotes} from './s3';

// Playback order comes from the measured lesson (16 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'old-ideas': SceneOldIdeas, 'pasteur-setup': SceneSetup, 'clear-broth': SceneClearBroth, 'break-the-neck': SceneBreak,
	'what-pasteur-showed': SceneShowed, 'koch-find-grow': SceneFindGrow, 'koch-give-find-again': SceneGiveAgain, limits: SceneLimits, memory: SceneMemory,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'attempt-two': SceneAttemptTwo, 'feedback-two': SceneFeedbackTwo, 'decision-rule': SceneDecision, 'key-notes': SceneNotes,
};
