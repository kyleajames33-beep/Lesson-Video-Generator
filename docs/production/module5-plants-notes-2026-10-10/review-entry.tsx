import React,{useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player,type PlayerRef} from '@remotion/player';
import {LessonVideo} from '../../../src/LessonVideo';
import type {LessonData} from '../../../src/lesson/types';
import source from './lesson.json';
const lesson={...source,introDurationInFrames:0,introVoiceover:undefined,backgroundMusic:undefined,scenes:[source.scenes[source.scenes.length-1]]} as LessonData;
const Review=()=>{const [width,setWidth]=useState(960);const p=useRef<PlayerRef>(null);return <main><h1>Plant quiet notes: silent fit review</h1><p>Exact current notes only. Parent cues and speech boundaries remain estimates. This page has no narration and supplies no voiced-preview, listening or release approval.</p><button onClick={()=>setWidth(width===960?480:960)}>View at {width===960?480:960} pixels</button><Player ref={p} component={LessonVideo} inputProps={{lesson}} durationInFrames={450} fps={30} compositionWidth={1920} compositionHeight={1080} controls loop={false} style={{width,maxWidth:'100%'}}/><button onClick={()=>p.current?.seekTo(0)}>Entrance</button><button onClick={()=>p.current?.seekTo(120)}>Stable notes</button><p>Scene: key-notes. Optional pause to copy.</p></main>};
createRoot(document.getElementById('root')!).render(<Review/>);
