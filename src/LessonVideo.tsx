import React from 'react';
import {AbsoluteFill, Series} from 'remotion';
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
import {MarginaliaSlide} from './slides/MarginaliaSlide';
import {LabFootageSlide} from './slides/LabFootageSlide';
import {EndCardSlide} from './slides/EndCardSlide';
import {MnemonicSlide} from './slides/MnemonicSlide';
import {SceneVoiceover} from './audio/SceneVoiceover';
import {BackgroundMusic} from './audio/BackgroundMusic';
import {IntroVoiceover} from './audio/IntroVoiceover';
// BurnedCaptions intentionally unused for YouTube exports — see comment
// inside the render where it would otherwise appear. Re-add for short-form.
// import {BurnedCaptions} from './slides/shared/BurnedCaptions';
import {IntroStinger} from './slides/shared/IntroStinger';
import {LessonProgressBar} from './slides/shared/LessonProgressBar';
import type {LessonData, SceneData} from './lesson/types';
import {AccentContext, themeFor} from './styles/theme';
import {TRANSITION_FRAMES, INTRO_STINGER_FRAMES} from './lesson/timing';
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

const renderSlide = (scene: SceneData, lesson: LessonData, sceneIndex: number, totalScenes: number) => {
  switch (scene.type) {
    case 'title':
      return <TitleSlide lesson={lesson} scene={scene} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'hook':
      return <HookSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'concept':
      return <ConceptSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'definition':
      return <DefinitionSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'formula':
      return <FormulaSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'workedExample':
      return <WorkedExampleSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'misconception':
      return <MisconceptionSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'quickCheck':
      return <QuickCheckSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'summary':
      return <SummarySlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'marginalia':
      return <MarginaliaSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'labFootage':
      return <LabFootageSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'endCard':
      return <EndCardSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    case 'mnemonic':
      return <MnemonicSlide scene={scene} lesson={lesson} sceneIndex={sceneIndex} totalScenes={totalScenes} />;
    default:
      return null;
  }
};

export const LessonVideo = ({lesson}: LessonVideoProps) => {
  const items: React.ReactNode[] = [];

  const TRANSITION_POOL_SIZE = transitionKinds.length + 1; // +1 for crashZoom slot

  // Collect all "you should now be able to" objectives. They render once
  // up-front in the intro stinger — pulling them out of per-scene
  // overlays so the teaching slides aren't visually cluttered.
  const objectives = lesson.scenes
    .map((s) => s.confidenceCheck)
    .filter((c): c is string => Boolean(c));

  lesson.scenes.forEach((scene, index) => {
    const sceneIndex = index + 1;
    const totalScenes = lesson.scenes.length;
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
        {renderSlide(scene, lesson, sceneIndex, totalScenes)}
        {/* Burned-in captions intentionally NOT rendered — viewers toggle
            them via YouTube's CC button instead, fed by the SRT in
            out/captions/. This gives users the choice and unlocks
            YouTube's auto-translate. The BurnedCaptions component
            stays in the tree for short-form cuts where CC toggle isn't
            available (TikTok / Reels / Shorts). */}
        <SceneVoiceover scene={scene} />
      </TransitionSeries.Sequence>
    );
  });

  // Total raw lesson length (after transitions) for the second Series slot.
  const lessonRawDuration = lesson.scenes.reduce((t, s) => t + s.durationInFrames, 0) - (lesson.scenes.length - 1) * TRANSITION_FRAMES;

  return (
    <AbsoluteFill className="video-shell">
      <AccentContext.Provider value={themeFor(lesson.subject)}>
      <Series>
        <Series.Sequence durationInFrames={INTRO_STINGER_FRAMES}>
          {/* Background music bed plays ONLY during the stinger — fills the
              otherwise-silent opener without competing with narration during
              the teaching scenes. No-op if lesson.backgroundMusic is unset. */}
          <BackgroundMusic
            src={lesson.backgroundMusic}
            volume={lesson.backgroundMusicVolume}
            playForFrames={INTRO_STINGER_FRAMES}
          />
          <IntroVoiceover src={lesson.introVoiceover?.audioFile} />
          <IntroStinger
            subjectLabel={lesson.subject}
            yearLabel={lesson.yearLevel}
            moduleLabel={lesson.module}
            objectives={objectives}
            nesaOutcomes={lesson.nesaOutcomes}
            inquiryQuestion={lesson.inquiryQuestion}
            syllabusDotPoints={lesson.syllabusDotPoints}
          />
        </Series.Sequence>
        <Series.Sequence durationInFrames={lessonRawDuration}>
          <TransitionSeries>{items}</TransitionSeries>
          <LessonProgressBar totalFrames={lessonRawDuration} />
        </Series.Sequence>
      </Series>
      </AccentContext.Provider>
    </AbsoluteFill>
  );
};
