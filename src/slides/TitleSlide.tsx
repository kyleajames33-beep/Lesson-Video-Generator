import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {LessonData, TitleScene} from '../lesson/types';
import {CameraFrame, ScrambleText, WordReveal, useAmbientFloat} from '../animations/MotionPrimitives';
import {Reveal} from './shared/Reveals';
import {AnimatedBackground} from './shared/AnimatedBackground';

type TitleSlideProps = {
  lesson: LessonData;
  scene: TitleScene;
};

export const TitleSlide = ({lesson}: TitleSlideProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const seconds = frame / fps;
  const orbitOpacity = interpolate(frame, [8, 42], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cardProgress = interpolate(frame, [28, 58], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cardFloat = useAmbientFloat(5, 4.8, 1.2);

  return (
    <div className="title-slide">
      <AnimatedBackground />
      <div
        className="title-orbit"
        style={{
          opacity: orbitOpacity,
          transform: `rotate(${seconds * 5}deg) scale(${interpolate(orbitOpacity, [0, 1], [0.94, 1])})`,
        }}
      />
      <div
        className="slide-accent-line"
        style={{
          transform: `scaleX(${interpolate(frame, [4, 44], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })})`,
        }}
      />
      <div
        className="title-system-card"
        style={{
          opacity: cardProgress,
          transform: `translateY(${interpolate(cardProgress, [0, 1], [-18, 0]) + cardFloat}px)`,
        }}
      >
        <span>HSC Science Explainer</span>
        {lesson.subject} · {lesson.title}
      </div>
      <CameraFrame className="title-camera">
        <div className="title-content">
          <Reveal className="eyebrow" delay={4}>
            <ScrambleText text={`${lesson.subject} · ${lesson.yearLevel} · ${lesson.module}`} delay={4} />
          </Reveal>
          <Reveal as="h1" delay={14}>
            <WordReveal text={lesson.title} delay={16} />
          </Reveal>
          <Reveal as="p" delay={30}>
            {lesson.subtitle}
          </Reveal>
        </div>
        <Reveal className="lesson-chip" delay={48}>
          {lesson.lesson}
        </Reveal>
      </CameraFrame>
    </div>
  );
};
