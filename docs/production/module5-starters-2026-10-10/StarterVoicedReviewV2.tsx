import React, {useMemo, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {createTikTokStyleCaptions} from '@remotion/captions';
import {LessonVideo} from '../../../src/LessonVideo';
import type {LessonData} from '../../../src/lesson/types';
import {lessonTimeline} from '../../../src/lesson/timeline.mjs';
import chemistry from './chemistry/measured-v2/lesson.json';
import biology from './biology/measured-v2/lesson.json';

const lessons: Record<string, LessonData> = {chemistry:chemistry as LessonData, biology:biology as LessonData};
const VoicedLesson = ({lesson, captions}: {lesson:LessonData; captions:boolean}) => {
  const frame = useCurrentFrame();
  const timeline = lessonTimeline(lesson);
  const pages = useMemo(() => lessonTimeline(lesson).scenes.flatMap(entry => {
    const tokens = entry.scene.captions ?? [];
    const hold = entry.scene.responseHold;
    const tracks = hold ? [tokens.filter(token => token.startMs < hold.startFrame / lesson.fps * 1000),
      tokens.filter(token => token.startMs >= hold.endFrame / lesson.fps * 1000)] : [tokens];
    return tracks.flatMap(track => createTikTokStyleCaptions({captions:track, combineTokensWithinMilliseconds:1400}).pages)
      .map(page => ({text:page.text, start:entry.startFrame + page.startMs / 1000 * lesson.fps,
        end:entry.startFrame + Math.min(page.startMs + 1400, Math.max(...page.tokens.map(token=>token.toMs))) / 1000 * lesson.fps}));
  }), [lesson]);
  const inHold = timeline.scenes.some(entry=>entry.scene.responseHold && frame>=entry.startFrame+entry.scene.responseHold.startFrame
    && frame<entry.startFrame+entry.scene.responseHold.endFrame);
  const active = captions && !inHold ? pages.find(page=>frame>=page.start && frame<page.end) : undefined;
  return <AbsoluteFill><LessonVideo lesson={lesson} />{active && <div style={{position:'absolute',left:160,right:160,top:900,height:120,
    display:'flex',alignItems:'center',justifyContent:'center',pointerEvents:'none',zIndex:100}}>
    <div style={{background:'rgba(8,12,10,.9)',color:'white',fontFamily:'Inter Tight, sans-serif',fontSize:38,
      lineHeight:1.3,padding:'12px 24px',borderRadius:10,textAlign:'center'}}>{active.text}</div>
  </div>}</AbsoluteFill>;
};
const Review = () => {
  const [subject,setSubject] = useState('chemistry');
  const [sceneId,setSceneId] = useState('hook');
  const [captions,setCaptions] = useState(false);
  const [width,setWidth] = useState(960);
  const player = useRef<PlayerRef>(null);
  const lesson = lessons[subject];
  const timeline = lessonTimeline(lesson);
  const entry = timeline.scenes.find(item=>item.scene.id===sceneId)!;
  return <main><h1>Module 5 opening lessons: voiced review</h1>
    <p>Existing measured narration with measured reveals and response gaps. These are the first lessons in each course. Human listening and full release checks remain pending.</p>
    <div className="controls"><label>Subject <select value={subject} onChange={event=>{setSubject(event.target.value);setSceneId('hook');}}>
      <option value="chemistry">Chemistry: static and dynamic equilibrium</option><option value="biology">Biology: reproduction and continuity</option>
    </select></label><label>Scene <select value={sceneId} onChange={event=>setSceneId(event.target.value)}>
      {lesson.scenes.map(scene=><option key={scene.id} value={scene.id}>{'heading' in scene ? scene.heading : scene.id}</option>)}
    </select></label><label><input type="checkbox" checked={captions} onChange={event=>setCaptions(event.target.checked)} />Show captions</label>
    <button onClick={()=>setWidth(width===960?480:960)}>{width===960?'View at 480 pixels':'View at 960 pixels'}</button></div>
    <Player key={`${subject}:${sceneId}`} ref={player} component={VoicedLesson} inputProps={{lesson,captions}}
      durationInFrames={timeline.durationInFrames} initialFrame={entry.startFrame} fps={lesson.fps} compositionWidth={lesson.width}
      compositionHeight={lesson.height} controls showVolumeControls loop={false} style={{width,maxWidth:'100%',borderRadius:12}} />
    <div className="controls"><button onClick={()=>player.current?.seekTo(0)}>Whole lesson start</button>
      <button onClick={()=>player.current?.seekTo(entry.startFrame)}>Scene start</button>
      <button onClick={()=>player.current?.seekTo(entry.startFrame+120)}>Scene after entrance</button></div>
    <details><summary>Narration for this scene</summary><p>{entry.scene.voiceover?.text ?? 'Quiet optional notes. Pause to copy.'}</p></details>
    <p>Next: Chemistry approaches equilibrium; Biology reproduction in animals.</p></main>;
};
createRoot(document.getElementById('root')!).render(<Review />);
