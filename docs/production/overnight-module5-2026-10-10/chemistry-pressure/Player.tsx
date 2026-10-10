import React,{useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {Player,PlayerRef} from '@remotion/player';
import {Candidate} from './Candidate';
import lesson from './lesson.json';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';
const timeline=lessonTimeline(lesson);
const Review=()=>{const ref=useRef<PlayerRef>(null);return <main style={{maxWidth:960,margin:'auto',padding:20,fontFamily:'system-ui'}}><h1>Gas pressure and volume</h1><p>Full silent Remotion Player. Accepted narration is unchanged. Cues are estimates. Human listening and voiced review are pending.</p><Player ref={ref} component={Candidate} durationInFrames={timeline.durationInFrames} fps={30} compositionWidth={1920} compositionHeight={1080} controls style={{width:'100%'}}/><p>{timeline.scenes.map(({scene,startFrame}:any)=><button key={scene.id} onClick={()=>ref.current?.seekTo(startFrame+30)} style={{margin:4,padding:8}}>{scene.heading}</button>)}</p><details><summary>Exact script</summary>{lesson.scenes.map(scene=><section key={scene.id}><h2>{scene.heading}</h2><p>{scene.voiceover.text}</p></section>)}</details></main>};createRoot(document.getElementById('root')!).render(<Review/>);
