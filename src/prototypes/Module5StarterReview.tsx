import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {LessonVideo} from '../LessonVideo';
import type {LessonData} from '../lesson/types';
import {lessonTimeline} from '../lesson/timeline.mjs';
import chemistry from '../../docs/production/module5-starters-2026-10-10/chemistry/lesson.json';
import biology from '../../docs/production/module5-starters-2026-10-10/biology/lesson.json';

const lessons: Record<string, LessonData> = {chemistry: chemistry as LessonData, biology: biology as LessonData};
const Review = () => {
  const [subject, setSubject] = useState('chemistry');
  const [sceneId, setSceneId] = useState('hook');
  const [width, setWidth] = useState(960);
  const player = useRef<PlayerRef>(null);
  const lesson = lessons[subject];
  const timeline = lessonTimeline(lesson);
  const entry = timeline.scenes.find(item => item.scene.id === sceneId)!;
  const jump = (frame: number) => player.current?.seekTo(frame);
  return <main>
    <h1>Module 5 opening lessons</h1>
    <p>Silent Remotion preview with the reviewed scripts and estimated cues. These are the first lessons in each course. Narration and final timing are still to come.</p>
    <div className="controls">
      <label>Subject <select value={subject} onChange={event => {setSubject(event.target.value); setSceneId('hook');}}>
        <option value="chemistry">Chemistry: static and dynamic equilibrium</option>
        <option value="biology">Biology: reproduction and continuity</option>
      </select></label>
      <label>Scene <select value={sceneId} onChange={event => setSceneId(event.target.value)}>
        {lesson.scenes.map(scene => <option key={scene.id} value={scene.id}>{'heading' in scene ? scene.heading : scene.id}</option>)}
      </select></label>
      <button onClick={() => setWidth(width === 960 ? 480 : 960)}>{width === 960 ? 'View at 480 pixels' : 'View at 960 pixels'}</button>
    </div>
    <Player key={`${subject}:${sceneId}`} ref={player} component={LessonVideo} inputProps={{lesson}}
      durationInFrames={timeline.durationInFrames} initialFrame={entry.startFrame} fps={lesson.fps}
      compositionWidth={lesson.width} compositionHeight={lesson.height} controls showVolumeControls={false}
      loop={false} style={{width, maxWidth:'100%', borderRadius:12}} />
    <div className="controls">
      <button onClick={() => jump(0)}>Whole lesson start</button>
      <button onClick={() => jump(entry.startFrame)}>Scene start</button>
      <button onClick={() => jump(Math.min(entry.startFrame + 120, timeline.durationInFrames - 1))}>Scene after entrance</button>
    </div>
    <details><summary>Narration for this scene</summary><p>{entry.scene.voiceover?.text ?? 'Quiet optional book notes. Pause to copy.'}</p></details>
    <p>Next: Chemistry approaches equilibrium; Biology reproduction in animals. Later videos will follow their prerequisites in the syllabus route.</p>
  </main>;
};
createRoot(document.getElementById('root')!).render(<Review />);
