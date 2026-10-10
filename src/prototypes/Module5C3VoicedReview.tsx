import React, {useMemo, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {createTikTokStyleCaptions} from '@remotion/captions';
import {LessonVideo} from '../LessonVideo';
import type {LessonData} from '../lesson/types';
import {lessonTimeline} from '../lesson/timeline.mjs';
import source from '../../docs/production/module5-c3-voiced-preparation-2026-10-10/lesson-v2.json';
import report from '../../docs/production/module5-c3-voiced-preparation-2026-10-10/measured-cue-report-v2.json';

const lesson = source as LessonData;
const timeline = lessonTimeline(lesson);
type Cue = {phrase: string; frame: number; purpose: string; key?: string; mode?: string};
const cueScenes = report.scenes as Array<{sceneId: string; cues: Cue[]}>;

// Optional review captions use the exact measured tokens. No source is changed.
const VoicedLesson = ({lesson, captions}: {lesson: LessonData; captions: boolean}) => {
  const frame = useCurrentFrame();
  const pages = useMemo(() => lessonTimeline(lesson).scenes.flatMap(entry => {
    const tokens = entry.scene.captions ?? [];
    const hold = entry.scene.responseHold;
    // Separate prompt and feedback pagination across the deliberate silence.
    const tracks = hold ? [tokens.filter(token => token.startMs < hold.startFrame / lesson.fps * 1000),
      tokens.filter(token => token.startMs >= hold.endFrame / lesson.fps * 1000)] : [tokens];
    const groups = tracks.flatMap(track => createTikTokStyleCaptions({captions:track, combineTokensWithinMilliseconds:1400}).pages);
    return groups.map((page, index) => ({text: page.text,
      start: entry.startFrame + page.startMs / 1000 * lesson.fps,
      end: entry.startFrame + Math.min(groups[index + 1]?.startMs ?? page.startMs + 1400, page.startMs + 1400,
        Math.max(...page.tokens.map(token => token.toMs))) / 1000 * lesson.fps}));
  }), [lesson]);
  const inHold = timeline.scenes.some(entry => entry.scene.responseHold && frame >= entry.startFrame + entry.scene.responseHold.startFrame
    && frame < entry.startFrame + entry.scene.responseHold.endFrame);
  const active = captions && !inHold ? pages.find(page => frame >= page.start && frame < page.end) : undefined;
  return <AbsoluteFill><LessonVideo lesson={lesson} />{active && <div style={{position:'absolute', left:160, right:160, top:900, height:120,
    display:'flex', alignItems:'center', justifyContent:'center', pointerEvents:'none', zIndex:100}}>
    <div style={{background:'rgba(8,12,10,.9)', color:'#fff', fontFamily:'Inter Tight, sans-serif', fontSize:38,
      lineHeight:1.3, padding:'12px 24px', borderRadius:10, textAlign:'center', maxWidth:'100%'}}>{active.text}</div>
  </div>}</AbsoluteFill>;
};

const Review = () => {
  const [sceneId, setSceneId] = useState('c3-hook');
  const [captions, setCaptions] = useState(false);
  const player = useRef<PlayerRef>(null);
  const entry = timeline.scenes.find(item => item.scene.id === sceneId) ?? timeline.scenes[0];
  const cues = cueScenes.find(item => item.sceneId === entry.scene.id)?.cues ?? [];
  const jump = (frame: number) => player.current?.seekTo(Math.max(0, Math.min(timeline.durationInFrames - 1, Math.round(frame))));
  return <main className="voiced-review">
    <h1>Concentration and temperature at equilibrium</h1>
    <p>Voiced teaching preview. Human listening and final release review are pending.</p>
    <div className="review-selectors"><label>Teaching scene <select value={sceneId} onChange={event => {
      setSceneId(event.target.value); jump(timeline.scenes.find(item => item.scene.id === event.target.value)!.startFrame);
    }}>{lesson.scenes.map(scene => <option key={scene.id} value={scene.id}>{'heading' in scene ? scene.heading : scene.id}</option>)}</select></label>
    <label className="caption-toggle"><input type="checkbox" checked={captions} onChange={event => setCaptions(event.target.checked)} /> Show captions</label></div>
    <Player ref={player} component={VoicedLesson} inputProps={{lesson, captions}} durationInFrames={timeline.durationInFrames}
      initialFrame={entry.startFrame} fps={lesson.fps} compositionWidth={lesson.width} compositionHeight={lesson.height}
      controls showVolumeControls loop={false} style={{width:'100%', borderRadius:12}} />
    <p>Play the whole lesson, or jump to a measured teaching cue:</p>
    <div className="cue-buttons"><button onClick={() => jump(0)}>Whole lesson start</button><button onClick={() => jump(entry.startFrame)}>Scene start</button>
      {cues.map((cue, index) => <button key={`${cue.key ?? cue.phrase}:${index}`} title={cue.phrase}
        onClick={() => jump(entry.startFrame + cue.frame)}>{cue.phrase}</button>)}</div>
    <details><summary>Narration for the selected scene</summary><p className="narration">{entry.scene.voiceover?.text}</p></details>
    <p className="review-note">Captions follow the measured narration. Caption fit, continuous playback and student readability still need review.</p>
  </main>;
};
createRoot(document.getElementById('root')!).render(<Review />);
