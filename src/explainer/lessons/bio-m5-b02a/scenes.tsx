import React from 'react';
import {SceneHook, SceneMeeting} from './s1';
import {SceneExternalWhere, SceneExternalTiming, SceneOdds} from './s2';
import {SceneInternal, SceneTrap, SceneNumbersCare} from './s3';
import {SceneWorked, SceneBadYear} from './s4';
import {SceneAttempt, SceneFeedback, SceneMemory, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, meeting: SceneMeeting, 'external-where': SceneExternalWhere, 'external-timing': SceneExternalTiming, odds: SceneOdds,
	internal: SceneInternal, trap: SceneTrap, 'numbers-care': SceneNumbersCare, 'worked-explain': SceneWorked, 'bad-year': SceneBadYear,
	attempt: SceneAttempt, feedback: SceneFeedback, memory: SceneMemory, 'key-notes': SceneNotes,
};
