import React from 'react';
import {useCurrentFrame} from 'remotion';
import {LessonVideo} from '../../../../../src/LessonVideo';
import {lessonTimeline} from '../../../../../src/lesson/timeline.mjs';
import type {LessonData} from '../../../../../src/lesson/types';
type Stage={at:number;phrase:string;label:string;anchor:string};
export const FungiStagedVideo=({lesson}:{lesson:LessonData})=>{
 const frame=useCurrentFrame();const timeline=lessonTimeline(lesson);
 const scenes=lesson.scenes.map(scene=>{const stages=(scene as unknown as {estimatedStages?:Stage[]}).estimatedStages;if(!stages)return scene;const entry=timeline.scenes.find(e=>e.scene.id===scene.id)!;const local=frame-entry.startFrame;const stage=stages.reduce((current,candidate)=>local>=candidate.at?candidate:current,stages[0]);
 return {...scene,bullets:[{text:stage.anchor,at:stage.at/lesson.fps}],diagram:{type:'flow' as const,delay:Math.max(60,stage.at),nodes:[{id:'current',label:stage.label}],edges:[]}};
 });return <LessonVideo lesson={{...lesson,scenes}}/>;
};
