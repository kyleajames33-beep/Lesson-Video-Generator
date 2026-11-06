import {Composition, registerRoot} from 'remotion';
import {ExplainerVideo} from '../ExplainerVideo';
import type {ExplainerConfig} from '../types';
import {STUDIO_COMPONENTS, STUDIO_SCENES} from './studio-pilot';
import {MA12_PLATE_FILES} from './studio';

const config: ExplainerConfig = {id: 'MathsAdvanced-Studio-Kit-Pilot', lesson: {scenes: STUDIO_SCENES}, scenes: STUDIO_COMPONENTS, subjectLabel: 'MATHEMATICS ADVANCED', topicLabel: 'EXPONENTIAL DERIVATIVES · STUDIO KIT PILOT (SILENT)', accent: '#8a5a12', assets: MA12_PLATE_FILES};
registerRoot(() => <Composition id={config.id} component={() => <ExplainerVideo config={config} />} durationInFrames={STUDIO_SCENES.reduce((n, s) => n + s.durationInFrames, 0)} fps={30} width={1920} height={1080} />);
