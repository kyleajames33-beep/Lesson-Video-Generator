import React from 'react';
import {registerRoot,Composition} from 'remotion';
import {Candidate} from './CandidateConditions';
import lesson from './lesson.json';
import {lessonTimeline} from '../../../../src/lesson/timeline.mjs';
registerRoot(()=> <Composition id="Pressure" component={Candidate} durationInFrames={lessonTimeline(lesson).durationInFrames} fps={30} width={1920} height={1080}/>);
