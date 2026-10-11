import React, {useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player,type PlayerRef} from '@remotion/player';
import {LessonVideo} from '../LessonVideo';
import type {LessonData} from '../lesson/types';
import {lessonTimeline} from '../lesson/timeline.mjs';
import c2source from '../../docs/production/module5-seconds-notes-2026-10-10/chemistry/teaching-reset/lesson.json';
import c3source from '../../docs/production/module5-c3-reference-feedback-2026-10-10/teaching-reset/lesson.json';
export const C2_DRAFT=c2source as unknown as LessonData;
export const C3_DRAFT=c3source as unknown as LessonData;
export const C2TeachingReset=()=> <LessonVideo lesson={C2_DRAFT}/>;
export const C3TeachingReset=()=> <LessonVideo lesson={C3_DRAFT}/>;
const Review=()=>{
 const [subject,setSubject]=useState<'C2'|'C3'>('C2'),[width,setWidth]=useState(960),[sceneIndex,setSceneIndex]=useState(0),ref=useRef<PlayerRef>(null);
 const lesson=subject==='C2'?C2_DRAFT:C3_DRAFT,timeline=lessonTimeline(lesson);
 const choose=(i:number)=>{setSceneIndex(i);ref.current?.seekTo(timeline.scenes[i].startFrame+90);};
 return <main><h1>C2 and C3: silent teaching cuts</h1><p>Actual LessonVideo renderer, new unrecorded narration. Graphs and teaching cues are provisional until speech is recorded. Independent science, student learning, motion and listening reviews remain pending.</p><div className="controls"><button onClick={()=>{setSubject(subject==='C2'?'C3':'C2');setSceneIndex(0);}}>View {subject==='C2'?'C3':'C2'}</button><button onClick={()=>setWidth(width===960?480:960)}>Width: {width}px</button><select value={sceneIndex} onChange={e=>choose(Number(e.target.value))}>{lesson.scenes.map((s,i)=><option key={s.id} value={i}>{'heading'in s?s.heading:s.id}</option>)}</select></div><div style={{width,maxWidth:'100%'}}><Player key={subject} ref={ref} component={LessonVideo} inputProps={{lesson}} durationInFrames={timeline.durationInFrames} fps={30} compositionWidth={1920} compositionHeight={1080} controls style={{width:'100%'}}/></div><h2>Draft narration</h2><p>{lesson.scenes[sceneIndex].voiceover?.text||'Quiet reading hold.'}</p><p>Selected source and audio from earlier versions are preserved. This page is a silent candidate review, not release approval.</p></main>;
};
if(typeof document!=='undefined'&&document.getElementById('reset-review-root')) createRoot(document.getElementById('reset-review-root')!).render(<Review/>);
