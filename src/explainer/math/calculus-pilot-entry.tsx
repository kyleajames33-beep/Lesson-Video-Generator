import {Composition, registerRoot} from 'remotion';
import {ExplainerVideo} from '../ExplainerVideo';
import type {ExplainerConfig} from '../types';
import {CALCULUS_COMPONENTS, CALCULUS_SCENES} from './calculus-pilot';

const config: ExplainerConfig = {id: 'MathsAdvanced-Calculus-Kit-Pilot', lesson: {scenes: CALCULUS_SCENES}, scenes: CALCULUS_COMPONENTS, subjectLabel: 'MATHS ADVANCED', topicLabel: 'CALCULUS KIT · SILENT PILOT', accent: '#8a5a12', assets: []};
registerRoot(() => <Composition id={config.id} component={() => <ExplainerVideo config={config} />} durationInFrames={CALCULUS_SCENES.reduce((n, scene) => n + scene.durationInFrames, 0)} fps={30} width={1920} height={1080} />);
