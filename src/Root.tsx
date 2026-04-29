import {AbsoluteFill, Composition} from 'remotion';
import {LessonVideo, VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH} from './LessonVideo';
import {AssetShowcase} from './AssetShowcase';
import {ReferenceStyleGallery} from './ReferenceStyleGallery';
import {lessons} from './data/lessonRegistry';
import {getLessonDurationInFrames} from './lesson/timing';

const Hi = () => (
  <AbsoluteFill style={{background: '#f5f8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 32}}>
    <div style={{fontSize: 240, fontWeight: 900, color: '#0098cc', fontFamily: 'Inter, sans-serif', lineHeight: 1}}>hi</div>
    <div style={{fontSize: 52, fontWeight: 700, color: '#344a6b', fontFamily: 'Inter, sans-serif'}}>latest version — light theme loaded ✓</div>
  </AbsoluteFill>
);

export const Root = () => {
  return (
    <>
      <Composition id="Hi" component={Hi} durationInFrames={60} fps={VIDEO_FPS} width={VIDEO_WIDTH} height={VIDEO_HEIGHT} />
      <Composition id="AssetShowcase" component={AssetShowcase} durationInFrames={180} fps={VIDEO_FPS} width={VIDEO_WIDTH} height={VIDEO_HEIGHT} />
      <Composition id="ReferenceStyleGallery" component={ReferenceStyleGallery} durationInFrames={180} fps={VIDEO_FPS} width={VIDEO_WIDTH} height={VIDEO_HEIGHT} />
      {lessons.map(({id, data}) => (
        <Composition
          id={id}
          component={LessonVideo}
          durationInFrames={getLessonDurationInFrames(data)}
          fps={VIDEO_FPS}
          height={VIDEO_HEIGHT}
          key={id}
          width={VIDEO_WIDTH}
          defaultProps={{lesson: data}}
        />
      ))}
    </>
  );
};
