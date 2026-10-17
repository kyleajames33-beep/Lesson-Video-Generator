import React from 'react';
import {SceneHookB6c, SceneRibosome, SceneWhyThree} from './s1';
import {SceneCodonAnticodon, SceneCodonChart, SceneTrna} from './s2';
import {SceneBothRnas, SceneElongate, ScenePolyProtein, SceneStart, SceneStop} from './s3';
import {SceneAttemptB6c, SceneAttemptTwoB6c, SceneDecisionB6c, SceneFeedbackOneB6c, SceneFeedbackTwoB6c, SceneMemoryB6c, SceneNotesB6c} from './s4';

// Playback order comes from the measured lesson (18 scenes).
export const SCENES: Record<string, React.FC> = {
	hook: SceneHookB6c, 'why-three': SceneWhyThree, ribosome: SceneRibosome, 'trna-adaptor': SceneTrna, 'codon-anticodon': SceneCodonAnticodon, 'codon-chart': SceneCodonChart,
	start: SceneStart, elongate: SceneElongate, stop: SceneStop, 'polypeptide-to-protein': ScenePolyProtein, 'both-rnas': SceneBothRnas, memory: SceneMemoryB6c,
	attempt: SceneAttemptB6c, 'feedback-one': SceneFeedbackOneB6c, 'attempt-two': SceneAttemptTwoB6c, 'feedback-two': SceneFeedbackTwoB6c, 'decision-rule': SceneDecisionB6c, 'key-notes': SceneNotesB6c,
};
