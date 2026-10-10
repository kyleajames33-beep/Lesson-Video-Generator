import React, {useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {LessonVideo} from '../LessonVideo';
import type {LessonData} from '../lesson/types';
import {lessonTimeline} from '../lesson/timeline.mjs';
import {TRANSITION_FRAMES} from '../lesson/timing';
import chemistry from '../../docs/production/drafts/module5-rich-visuals-2026-10-10/chemistry/lesson.json';
import biology from '../../docs/production/drafts/module5-rich-visuals-2026-10-10/biology/lesson.json';
import record from '../../docs/production/drafts/module5-rich-visuals-2026-10-10/integration-record.json';

const lessons: Record<string, LessonData> = {chemistry: chemistry as LessonData, biology: biology as LessonData};
const cueLabels: Record<string, Record<string,string>> = {
  additionHook: {event:'Add A',response:'B forms by reaction'},
  addA: {event:'Add A',rateReason:'Why the rates change',response:'Reaction responds',limit:'Compare the final reference'},
  removeB: {event:'Remove B',response:'Reaction responds',originalCompare:'Compare with the original'},
  fixedK: {defineK:'Introduce K',sameK:'Same temperature, same K'},
  associationHeat: {association:'Molecules join',exothermic:'Joining releases heat',reverse:'Splitting absorbs heat',heating:'Heat the mixture',cooling:'Cool the mixture'},
  temperatureResponse: {event:'Raise the temperature',continuousConcentrations:'No immediate concentration jump',defineNewK:'K changes with temperature',response:'Composition responds'},
  locations: {anther:'Anther',stigma:'Stigma',pollenDetail:'Pollen and sperm',style:'Style',ovary:'Ovary',ovule:'Ovule',embryoSac:'Embryo sac',egg:'Egg cell'},
  delivery: {pollination:'Pollen reaches the stigma',pollenTube:'The tube grows',spermDelivery:'Sperm delivery',fusion:'Sperm joins egg',zygote:'Zygote forms'},
  seed: {zygote:'Zygote inside the ovule',embryo:'Embryo develops',seed:'Seed forms',fruit:'Fruit surrounds seeds'},
  runner: {runner:'A stem grows',node:'A suitable node',rootsShoot:'Roots and shoot',noFusion:'No gamete fusion',independent:'A rooted new plant'},
  selfCross: {self:'Same plant',cross:'Different plants',conditionalFusion:'Fusion is still needed'},
};
const Review = () => {
  const [subject, setSubject] = useState('chemistry');
  const [sceneId, setSceneId] = useState('c3-add');
  const player = useRef<PlayerRef>(null);
  const lesson = lessons[subject];
  const timeline = lessonTimeline(lesson);
  const selection = record.lessons.find(item => item.subject === subject)!;
  const scenes = lesson.scenes.filter(scene => selection.changedSceneIds.includes(scene.id));
  const entry = timeline.scenes.find(item => item.scene.id === sceneId)!;
  const previewStart = entry.startFrame + TRANSITION_FRAMES;
  const cues = selection.cueRecords.filter(cue => cue.sceneId === sceneId);
  const chooseSubject = (value: string) => {
    setSubject(value);
    setSceneId(value === 'chemistry' ? 'c3-add' : 'b3-flower');
  };
  return <main className="rich-review">
    <h1>Teaching models in motion</h1>
    <p>Silent working preview. These are the actual lesson components, with estimated narration cues. Recording and visual review remain separate checks.</p>
    <div className="review-selectors">
      <label>Subject <select value={subject} onChange={event => chooseSubject(event.target.value)}>
        <option value="chemistry">Chemistry: concentration and temperature</option>
        <option value="biology">Biology: flowering plants</option>
      </select></label>
      <label>Teaching scene <select value={sceneId} onChange={event => setSceneId(event.target.value)}>
        {scenes.map(scene => <option key={scene.id} value={scene.id}>{'heading' in scene ? scene.heading : scene.id}</option>)}
      </select></label>
    </div>
    <Player key={`${subject}:${sceneId}`} ref={player} component={LessonVideo}
      inputProps={{lesson}} durationInFrames={timeline.durationInFrames} initialFrame={previewStart}
      fps={lesson.fps} compositionWidth={lesson.width} compositionHeight={lesson.height}
      controls showVolumeControls={false} loop={false} style={{width: '100%', borderRadius: 12}} />
    <p>Play from the scene start, or jump to an estimated teaching beat:</p>
    <div className="cue-buttons">
      <button onClick={() => player.current?.seekTo(previewStart)}>Scene start</button>
      {cues.map(cue => <button key={cue.key} onClick={() => player.current?.seekTo(entry.startFrame + cue.localFrame)}>{cueLabels[cue.mode]?.[cue.key] ?? cue.key}</button>)}
    </div>
    <details><summary>Accepted narration for this scene</summary><p className="narration">{entry.scene.voiceover?.text}</p></details>
    <p className="review-note">Cues are drafting estimates, not measured speech alignment. Thinking prompts and feedback remain in their original sequence. This preview has no narration audio.</p>
  </main>;
};
createRoot(document.getElementById('root')!).render(<Review />);
