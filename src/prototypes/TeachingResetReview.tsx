import React, {useMemo, useRef, useState} from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {Player, type PlayerRef} from '@remotion/player';
import {createTikTokStyleCaptions} from '@remotion/captions';
import {LessonVideo} from '../LessonVideo';
import type {LessonData} from '../lesson/types';
import {lessonTimeline} from '../lesson/timeline.mjs';

/** This exact-production preview uses the same scene dispatch and audio as exports. */
export const TeachingResetVideo = ({lesson, captions = true}: {lesson:LessonData;captions?:boolean}) => {
  const frame = useCurrentFrame();
  const timeline = lessonTimeline(lesson);
  const pages = useMemo(() => lessonTimeline(lesson).scenes.flatMap(entry => {
    const tokens = entry.scene.captions ?? [];
    const groups = createTikTokStyleCaptions({captions:tokens,combineTokensWithinMilliseconds:1400}).pages;
    return groups.map(page => ({text:page.text,start:entry.audioStartMs/1000*lesson.fps+page.startMs/1000*lesson.fps,
      end:entry.audioStartMs/1000*lesson.fps+Math.max(...page.tokens.map(token=>token.toMs))/1000*lesson.fps}));
  }),[lesson]);
  const inHold = timeline.scenes.some(entry => entry.scene.responseHold && frame >= entry.startFrame+entry.scene.responseHold.startFrame && frame < entry.startFrame+entry.scene.responseHold.endFrame);
  const active = captions && !inHold ? pages.find(page=>frame>=page.start&&frame<page.end) : undefined;
  return <AbsoluteFill><LessonVideo lesson={lesson}/>{active&&<div style={{position:'absolute',left:120,right:120,top:965,height:95,display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none',zIndex:100}}><div style={{background:'rgba(8,12,10,.9)',color:'#fff',font:'38px/1.25 Inter Tight, sans-serif',padding:'8px 20px',borderRadius:8,textAlign:'center'}}>{active.text}</div></div>}</AbsoluteFill>;
};

export const TeachingResetReview = ({lesson}: {lesson:LessonData}) => {
  const player=useRef<PlayerRef>(null),[width,setWidth]=useState(960),[selected,setSelected]=useState(0),[captions,setCaptions]=useState(true);
  const timeline=lessonTimeline(lesson),entry=timeline.scenes[selected];
  const hasAudio=lesson.scenes.some(scene=>scene.voiceover?.audioFile);
  const select=(index:number)=>{setSelected(index);player.current?.pause();player.current?.seekTo(timeline.scenes[index].startFrame+Math.min(45,lesson.scenes[index].durationInFrames-1));};
  const recovery = Boolean((lesson as LessonData & {visualRecovery?:unknown}).visualRecovery);
  return <main><h1>{lesson.title}</h1><p>{recovery?'Motion pilot using the existing Simon recording. Watch how the explanation unfolds; this is a visual comparison, not a finished release.':hasAudio?'Fresh narration with measured captions and scene cues. Independent exact playback, human listening and release checks remain pending.':'Silent teaching draft with provisional timings. Playback review remains pending.'}</p>
    <div className="controls"><button onClick={()=>{setSelected(0);player.current?.seekTo(0);player.current?.play();}}>Play from start</button><button onClick={()=>setWidth(width===960?480:960)}>View at {width===960?480:960}px</button><label><input type="checkbox" checked={captions} onChange={event=>setCaptions(event.target.checked)}/>Captions</label></div>
    <Player ref={player} component={TeachingResetVideo} inputProps={{lesson,captions}} durationInFrames={timeline.durationInFrames} fps={lesson.fps} compositionWidth={lesson.width} compositionHeight={lesson.height} controls showVolumeControls style={{width,maxWidth:'100%'}}/>
    <div className="controls">{lesson.scenes.map((scene,index)=><button key={scene.id} onClick={()=>select(index)}>{'heading' in scene?scene.heading:scene.id}</button>)}</div>
    <div className="controls"><button onClick={()=>player.current?.seekTo(entry.startFrame)}>Selected scene start</button>{entry.scene.responseHold&&<button onClick={()=>player.current?.seekTo(entry.startFrame+entry.scene.responseHold!.startFrame+60)}>Thinking hold</button>}</div>
    <details><summary>Selected narration</summary><p>{entry.scene.voiceover?.text||'Quiet notes hold.'}</p></details><details><summary>Complete script</summary>{lesson.scenes.map(scene=><section key={scene.id}><h3>{'heading' in scene?scene.heading:scene.id}</h3><p>{scene.voiceover?.text||'Quiet notes hold.'}</p></section>)}</details>
    <p>Old recordings are preserved separately. This review uses the selected source through LessonVideo, rather than a substitute diagram-only composition.</p></main>;
};
