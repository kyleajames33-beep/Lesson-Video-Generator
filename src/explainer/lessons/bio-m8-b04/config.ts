import lesson from '../../../../docs/production/claude-pm/lessons/m8b04/measured/lesson.json';
import type {ExplainerConfig} from '../../types';
import {SCENES} from './scenes';
import {ASSETS} from './assets';
// Quality fix (6 Nov, root): the quiet notes hold is about 40 s in all (house standard), not the earlier minute.
const source=lesson as unknown as ExplainerConfig['lesson'];
const l={...source,scenes:source.scenes.map(s=>s.id==='key-notes'?{...s,durationInFrames:Math.max(1200,s.durationInFrames)}:s)};
const missing=l.scenes.filter(s=>!SCENES[s.id]).map(s=>s.id);
if(missing.length)throw new Error('Missing scenes: '+missing.join(', '));
export const config_m8b04:ExplainerConfig={id:'Explainer-bio-m8-b04',lesson:l,scenes:SCENES,subjectLabel:'BIOLOGY',topicLabel:'KIDNEYS AND WATER BALANCE',assets:ASSETS};
