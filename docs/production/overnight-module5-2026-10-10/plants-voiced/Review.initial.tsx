import React,{useMemo,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player,type PlayerRef} from '@remotion/player';
import {AbsoluteFill,useCurrentFrame} from 'remotion';
import {createTikTokStyleCaptions} from '@remotion/captions';
import {LessonVideo} from '../../../../src/LessonVideo';
import type {LessonData} from '../../../../src/lesson/types';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';
import selected from './measured/lesson.json';

const lesson=selected as LessonData;
const timeline=lessonTimeline(lesson);
const Voiced=({captions}:{captions:boolean})=>{
 const frame=useCurrentFrame();
 const pages=useMemo(()=>timeline.scenes.flatMap(entry=>{
  const tokens=entry.scene.captions??[],hold=entry.scene.responseHold;
  const tracks=hold?[tokens.filter(t=>t.startMs<hold.startFrame/30*1000),tokens.filter(t=>t.startMs>=hold.endFrame/30*1000)]:[tokens];
  return tracks.flatMap(track=>createTikTokStyleCaptions({captions:track,combineTokensWithinMilliseconds:1400}).pages)
   .map(page=>({text:page.text,start:entry.startFrame+page.startMs/1000*30,end:entry.startFrame+Math.min(page.startMs+1400,Math.max(...page.tokens.map(t=>t.toMs)))/1000*30}));
 }),[]);
 const inHold=timeline.scenes.some(e=>e.scene.responseHold&&frame>=e.startFrame+e.scene.responseHold.startFrame&&frame<e.startFrame+e.scene.responseHold.endFrame);
 const active=captions&&!inHold?pages.find(p=>frame>=p.start&&frame<p.end):undefined;
 return <AbsoluteFill><LessonVideo lesson={lesson}/>{active&&<div style={{position:'absolute',left:160,right:160,top:900,height:120,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none',zIndex:100}}><div style={{background:'rgba(8,12,10,.9)',color:'white',fontFamily:'Inter Tight, sans-serif',fontSize:38,lineHeight:1.3,padding:'12px 24px',borderRadius:10,textAlign:'center'}}>{active.text}</div></div>}</AbsoluteFill>;
};
const Review=()=>{
 const [sceneId,setScene]=useState('b3-hook'),[captions,setCaptions]=useState(true),[width,setWidth]=useState(960);
 const player=useRef<PlayerRef>(null);
 const entry=timeline.scenes.find(e=>e.scene.id===sceneId)!;
 const hold=entry.scene.responseHold;
 return <main><h1>Plant reproduction: voiced review</h1>
 <p>How do pollen transfer, sperm delivery and fusion differ from a strawberry runner making a new plant? Current Year 12 Biology Module 5, plant contribution only.</p>
 <p>Fresh Simon narration, measured animation cues and a protected 12-second thinking pause. Complete viewing and human listening remain pending. This review is {Math.floor(timeline.durationInFrames/30/60)} minutes {Math.round(timeline.durationInFrames/30%60)} seconds.</p>
 <div className="controls"><label>Scene <select value={sceneId} onChange={e=>setScene(e.target.value)}>{lesson.scenes.map(s=><option key={s.id} value={s.id}>{'heading'in s?s.heading:s.id}</option>)}</select></label>
 <label><input type="checkbox" checked={captions} onChange={e=>setCaptions(e.target.checked)}/>Show captions</label>
 <button onClick={()=>setWidth(width===960?480:960)}>{width===960?'View at 480 pixels':'View at 960 pixels'}</button></div>
 <Player key={sceneId} ref={player} component={Voiced} inputProps={{captions}} durationInFrames={timeline.durationInFrames} initialFrame={entry.startFrame} fps={lesson.fps} compositionWidth={lesson.width} compositionHeight={lesson.height} controls showVolumeControls loop={false} style={{width,maxWidth:'100%',borderRadius:12}}/>
 <div className="controls"><button onClick={()=>player.current?.seekTo(0)}>Whole lesson start</button><button onClick={()=>player.current?.seekTo(entry.startFrame)}>Scene start</button><button onClick={()=>player.current?.seekTo(entry.startFrame+120)}>Scene after entrance</button>{hold&&<><button onClick={()=>player.current?.seekTo(entry.startFrame+hold.startFrame-60)}>Before thinking pause</button><button onClick={()=>player.current?.seekTo(entry.startFrame+hold.endFrame-60)}>Before feedback</button></>}</div>
 <details><summary>Narration for this scene</summary><p>{entry.scene.voiceover?.text??'Quiet optional notes. Pause to copy.'}</p></details>
 <p><a href="/module5-starter-voiced-review-2026-10-10-v2/">First lesson: reproduction and continuity</a> · <a href="/module5-seconds-notes-review-2026-10-10-v3/">Previous: animal reproduction</a></p>
 </main>;
};
createRoot(document.getElementById('root')!).render(<Review/>);
