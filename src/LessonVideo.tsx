import React from 'react';
import {AbsoluteFill} from 'remotion';
import {TransitionSeries, springTiming} from '@remotion/transitions';
import {TitleSlide} from './slides/TitleSlide';
import {HookSlide} from './slides/HookSlide';
import {ConceptSlide} from './slides/ConceptSlide';
import {DefinitionSlide} from './slides/DefinitionSlide';
import {FormulaSlide} from './slides/FormulaSlide';
import {WorkedExampleSlide} from './slides/WorkedExampleSlide';
import {MisconceptionSlide} from './slides/MisconceptionSlide';
import {QuickCheckSlide} from './slides/QuickCheckSlide';
import {SummarySlide} from './slides/SummarySlide';
import {CaptionBar} from './slides/shared/CaptionBar';
import {SceneVoiceover} from './audio/SceneVoiceover';
import type {LessonData, SceneData} from './lesson/types';
import {TRANSITION_FRAMES} from './lesson/timing';
import type {TransitionPresentation} from '@remotion/transitions';
import {cinematicTransition, transitionKinds} from './transitions/cinematicTransitions';
import {crashZoom} from './transitions/crashZoom';
import './styles.css';

export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const VIDEO_FPS = 30;

type LessonVideoProps = {
  lesson: LessonData;
};

const renderSlide = (scene: SceneData, lesson: LessonData) => {
  switch (scene.type) {
    case 'title':
      return <TitleSlide lesson={lesson} scene={scene} />;
    case 'hook':
      return <HookSlide scene={scene} />;
    case 'concept':
      return <ConceptSlide scene={scene} />;
    case 'definition':
      return <DefinitionSlide scene={scene} />;
    case 'formula':
      return <FormulaSlide scene={scene} />;
    case 'workedExample':
      return <WorkedExampleSlide scene={scene} />;
    case 'misconception':
      return <MisconceptionSlide scene={scene} />;
    case 'quickCheck':
      return <QuickCheckSlide scene={scene} />;
    case 'summary':
      return <SummarySlide scene={scene} />;
    default:
      return null;
  }
};

export const LessonVideo = ({lesson}: LessonVideoProps) => {
  const items: React.ReactNode[] = [];

  const TRANSITION_POOL_SIZE = transitionKinds.length + 1; // +1 for crashZoom slot

  lesson.scenes.forEach((scene, index) => {
    if (index > 0) {
      const slot = (index - 1) % TRANSITION_POOL_SIZE;
      const useCrashZoom = slot === TRANSITION_POOL_SIZE - 1;
      const kind = transitionKinds[slot % transitionKinds.length];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const presentation: TransitionPresentation<any> = useCrashZoom
        ? crashZoom()
        : cinematicTransition({accent: index % 2 === 0 ? '#6bdcff' : '#0098cc', kind});

      items.push(
        <TransitionSeries.Transition
          key={`t-${scene.id}`}
          presentation={presentation}
          timing={springTiming({
            config: {damping: 15, stiffness: 180, mass: 0.55},
            durationInFrames: TRANSITION_FRAMES,
          })}
        />
      );
    }
    items.push(
      <TransitionSeries.Sequence key={scene.id} durationInFrames={scene.durationInFrames}>
        {renderSlide(scene, lesson)}
        <CaptionBar text={scene.caption} />
        <SceneVoiceover scene={scene} />
      </TransitionSeries.Sequence>
    );
  });

  return (
    <AbsoluteFill className="video-shell">
      <TransitionSeries>{items}</TransitionSeries>
    </AbsoluteFill>
  );
};
