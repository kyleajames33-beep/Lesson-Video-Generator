import React from 'react';
import {SceneDecisionB3, SceneHookB3, SceneNotesG3b} from './s1';
import {SceneTypeThreeRecall} from './s2';
import {SceneHugeSetup, SceneHugeSolve, SceneHugeTest} from './s3';
import {SceneAddAnswer, SceneAddIce, SceneAddK, SceneAddSetup} from './s4';

// Revision 2 (16 Oct): "All 5 types". Tiny-K scenes cut; hook-board, type-three-recall and decision-board are new.
export const SCENES: Record<string, React.FC> = {
	'hook-board': SceneHookB3, 'type-three-recall': SceneTypeThreeRecall,
	'huge-k-setup': SceneHugeSetup, 'huge-k-solve': SceneHugeSolve, 'huge-k-test-and-reactant-start': SceneHugeTest,
	'addition-setup': SceneAddSetup, 'addition-ice-table': SceneAddIce, 'addition-k-equation': SceneAddK, 'addition-answer-and-slips': SceneAddAnswer,
	'decision-board': SceneDecisionB3, 'key-notes': SceneNotesG3b,
};
