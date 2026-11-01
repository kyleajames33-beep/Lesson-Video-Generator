import {registerRoot, Composition} from 'remotion';
import {ExplainerVideo} from '../ExplainerVideo';
import type {ExplainerConfig} from '../types';
import {MATH_PILOT_FRAMES, MathsTangentPilot} from './pilot';

const config: ExplainerConfig = {
	id: 'MathsAdvanced-Tangent-Pilot',
	lesson: {scenes: [{id: 'tangent', durationInFrames: MATH_PILOT_FRAMES}]},
	scenes: {tangent: MathsTangentPilot},
	subjectLabel: 'MATHS ADVANCED',
	topicLabel: 'TANGENT SLOPE',
	accent: '#8a5a12',
	assets: [],
};

registerRoot(() => <Composition id={config.id} component={() => <ExplainerVideo config={config} />} durationInFrames={MATH_PILOT_FRAMES} fps={30} width={1920} height={1080} />);
