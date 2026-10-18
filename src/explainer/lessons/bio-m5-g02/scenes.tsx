import React from 'react';
import {SceneHookG2, SceneQ1ChanceG2, SceneQ1MistakeG2, SceneQ1ModelG2, SceneQ1QuestionG2} from './s1';
import {SceneQ2MistakeG2, SceneQ2QuestionG2, SceneQ2Square, SceneQ2WhyFemale} from './s2';
import {SceneQ3QuestionG2, SceneQ3Sure, SceneQ3TwoThirds, SceneQ3Update} from './s3';
import {SceneDecisionG2, SceneNotesG2, SceneQ4BothFit, SceneQ4MoreLikely, SceneQ4QuestionG2, SceneQ4RuleOut} from './s4';

// Playback order comes from the measured lesson (19 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookG2,
	'q1-question': SceneQ1QuestionG2, 'q1-model': SceneQ1ModelG2, 'q1-chance': SceneQ1ChanceG2, 'q1-mistake': SceneQ1MistakeG2,
	'q2-question': SceneQ2QuestionG2, 'q2-why-female': SceneQ2WhyFemale, 'q2-square': SceneQ2Square, 'q2-mistake': SceneQ2MistakeG2,
	'q3-question': SceneQ3QuestionG2, 'q3-sure': SceneQ3Sure, 'q3-two-thirds': SceneQ3TwoThirds, 'q3-update': SceneQ3Update,
	'q4-question': SceneQ4QuestionG2, 'q4-rule-out': SceneQ4RuleOut, 'q4-both-fit': SceneQ4BothFit, 'q4-more-likely': SceneQ4MoreLikely,
	'decision-board': SceneDecisionG2, 'key-notes': SceneNotesG2,
};
