import React from 'react';
import {SceneHook, SceneChromosomeSets, SceneDiploidHaploid} from './s1';
import {SceneWhyCopy, SceneTheCopy, SceneInterphase} from './s2';
import {ScenePhase, SceneAnaphase, SceneTelophase} from './s3';
import {SceneTracking, SceneIdentical, SceneNotPerfect} from './s4';
import {SceneUses, SceneAttempt, SceneFeedbackOne, SceneFeedbackTwo} from './s5';
import {SceneMemory, SceneNotes} from './s6';

export const SCENES: Record<string, React.FC> = {
	hook: SceneHook, 'chromosome-sets': SceneChromosomeSets, 'diploid-haploid': SceneDiploidHaploid,
	'why-copy-first': SceneWhyCopy, 'the-copy': SceneTheCopy, interphase: SceneInterphase,
	prophase: ScenePhase, anaphase: SceneAnaphase, 'telophase-cytokinesis': SceneTelophase,
	tracking: SceneTracking, identical: SceneIdentical, 'not-perfect': SceneNotPerfect,
	uses: SceneUses, attempt: SceneAttempt, 'feedback-one': SceneFeedbackOne, 'feedback-two': SceneFeedbackTwo,
	memory: SceneMemory, 'key-notes': SceneNotes,
};
