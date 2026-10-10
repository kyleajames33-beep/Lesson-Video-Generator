import React from 'react';
import {registerRoot, Composition} from 'remotion';
import {FungiStagedVideo as LessonVideo} from './FungiStagedVideo';
import {lessonTimeline} from '../../../../../src/lesson/timeline.mjs';
import type {LessonData} from '../../../../../src/lesson/types';
import source from './lesson.json';
const lesson=source as unknown as LessonData;
const Root=()=> <Composition id="FungiCandidate" component={LessonVideo} defaultProps={{lesson}} durationInFrames={lessonTimeline(lesson).durationInFrames} fps={30} width={1920} height={1080}/>;
registerRoot(Root);
