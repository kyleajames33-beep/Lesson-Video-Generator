import {Composition,registerRoot} from 'remotion';
import {ExplainerVideo} from '../ExplainerVideo';
import type {ExplainerConfig} from '../types';
import {STRAND_COMPONENTS,STRAND_SCENES} from './strand-pilot';
const config:ExplainerConfig={id:'Maths-Strand-Parts-Pilot',lesson:{scenes:STRAND_SCENES},scenes:STRAND_COMPONENTS,subjectLabel:'MATHS ADVANCED',topicLabel:'STRAND KIT · SILENT PILOT',accent:'#8a5a12',assets:[]};
registerRoot(()=><Composition id={config.id} component={()=><ExplainerVideo config={config}/>} durationInFrames={1080} fps={30} width={1920} height={1080}/>);
