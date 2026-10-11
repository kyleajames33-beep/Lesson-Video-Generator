import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {MOULD_TOTAL, MouldClaude} from './MouldClaude';

const ExperimentRoot: React.FC = () =>
	React.createElement(Composition, {id: 'MouldClaude', component: MouldClaude, durationInFrames: MOULD_TOTAL, fps: 30, width: 1920, height: 1080});

registerRoot(ExperimentRoot);
