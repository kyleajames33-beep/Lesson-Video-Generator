import {useVideoConfig} from 'remotion';
import type {QuickCheckScene} from '../lesson/types';
import {Heartbeat, OdometerText, ParticleEmitter} from '../animations/MotionPrimitives';
import {Callout, Checkmark} from '../animations/AttentionPrimitives';
import {calculationStepLabel, getCalculationStepKind} from './shared/calculationSteps';
import {Reveal, SlideReveal, useVisibleAfter} from './shared/Reveals';
import {SlideLayout} from './shared/SlideLayout';

export const QuickCheckSlide = ({scene}: {scene: QuickCheckScene}) => {
  const {durationInFrames} = useVideoConfig();

  const questionDelay = Math.round(0.08 * durationInFrames);
  const answerFrame = Math.round(0.50 * durationInFrames);
  const showAnswer = useVisibleAfter(answerFrame);

  const n = scene.answerSteps.length;
  const stepsStart = Math.round(0.54 * durationInFrames);
  const stepsEnd = Math.round(0.82 * durationInFrames);
  const stepInterval = n > 1 ? Math.round((stepsEnd - stepsStart) / (n - 1)) : Math.round(0.14 * durationInFrames);

  return (
    <SlideLayout eyebrow="Quick check" heading={scene.heading}>
      <div className="worked-layout">
        <Reveal className="question-panel check" delay={questionDelay}>
          {scene.question}
        </Reveal>
        <div className="worked-board quick-check-board">
          {showAnswer ? (
            scene.answerSteps.map((step, index) => {
              const delay = stepsStart + index * stepInterval;
              const isFinal = index === n - 1;
              const kind = getCalculationStepKind(step, index, n);

              return isFinal ? (
                <SlideReveal delay={delay} key={step} className="worked-board-reveal answer">
                  <Heartbeat className="worked-board-card answer" delay={delay + 8}>
                    <div className="worked-step-label">{calculationStepLabel[kind]}</div>
                    <OdometerText text={step} delay={delay + 4} />
                    <div className="solution-checkmark">
                      <Checkmark delay={delay + 12} size={52} color="#4f46e5" />
                    </div>
                    <ParticleEmitter delay={delay + 8} />
                  </Heartbeat>
                </SlideReveal>
              ) : (
                <SlideReveal className={`worked-board-card ${kind}`} delay={delay} key={step}>
                  <div className="worked-step-label">{calculationStepLabel[kind]}</div>
                  <OdometerText text={step} delay={delay + 4} />
                </SlideReveal>
              );
            })
          ) : (
            <Reveal className="pause-card" delay={questionDelay + 20}>
              <Callout text={scene.pausePrompt ?? 'Pause and try it first.'} delay={questionDelay + 28} />
            </Reveal>
          )}
        </div>
      </div>
    </SlideLayout>
  );
};
