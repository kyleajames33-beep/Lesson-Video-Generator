import lesson from '../../../../docs/production/claude-pm/lessons/m8b05/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';
// The design asks for about 60 seconds to copy notes. Extend only the quiet tail.
const playback={...lesson,scenes:lesson.scenes.map(s=>s.id==='key-notes'?{...s,durationInFrames:1800}:s)};
export const config_m8b05:ExplainerConfig={id:'Explainer-bio-m8-b05',lesson:playback,scenes:SCENES,subjectLabel:'BIOLOGY',topicLabel:'PLANT WATER BALANCE',assets:ASSETS};
