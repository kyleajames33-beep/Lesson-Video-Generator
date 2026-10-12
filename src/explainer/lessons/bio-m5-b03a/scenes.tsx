import React from 'react';
import {SceneHook, SceneMeeting, SceneGametes, SceneZygote} from './s1';
import {SceneCleavage, SceneBlastocyst, SceneLining, SceneProgesterone} from './s2';
import {SceneImplantation, SceneHcg} from './s3';
import {SceneHandover, SceneExchange} from './s4';
import {SceneAttempt, SceneFeedbackOne, SceneFeedbackTwo, SceneFeedbackThree, SceneMemory, SceneNotes} from './s5';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, meeting: SceneMeeting, gametes: SceneGametes, zygote: SceneZygote,
	cleavage: SceneCleavage, blastocyst: SceneBlastocyst, lining: SceneLining, progesterone: SceneProgesterone,
	implantation: SceneImplantation, hcg: SceneHcg, handover: SceneHandover, exchange: SceneExchange,
	attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'feedback-two': SceneFeedbackTwo, 'feedback-three': SceneFeedbackThree,
	memory: SceneMemory, 'key-notes': SceneNotes,
};
