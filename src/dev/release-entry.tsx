import {Composition, registerRoot} from 'remotion';
import {LessonVideo} from '../LessonVideo';
import type {LessonData} from '../lesson/types';
import {lessonTimeline} from '../lesson/timeline.mjs';

const placeholder: LessonData = {title: 'Release preview', subtitle: '', subject: 'Chemistry', yearLevel: 'Year 11',
  module: 'Module 2', lesson: 'Lesson 2', fps: 30, width: 1920, height: 1080, introDurationInFrames: 0,
  scenes: [{id: 'title', type: 'title', caption: 'Release preview', durationInFrames: 90}]};
const ReleaseRoot = () => <Composition id="Lesson-release" component={LessonVideo}
  defaultProps={{lesson: placeholder}} durationInFrames={90} fps={30} width={1920} height={1080}
  calculateMetadata={({props}) => ({durationInFrames: lessonTimeline(props.lesson).durationInFrames,
    fps: props.lesson.fps, width: props.lesson.width, height: props.lesson.height})} />;
registerRoot(ReleaseRoot);
