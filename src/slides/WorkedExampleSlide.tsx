import {useVideoConfig} from 'remotion';
import type {WorkedExampleScene} from '../lesson/types';
import {Heartbeat, OdometerText, ParticleEmitter} from '../animations/MotionPrimitives';
import {KineticExit} from '../animations/LayoutComposition';
import {Checkmark} from '../animations/AttentionPrimitives';
import {DoodleArrow, UnitCancel} from '../animations/DoodlePrimitives';
import {calculationStepLabel, getCalculationStepKind} from './shared/calculationSteps';
import {Reveal, SlideReveal} from './shared/Reveals';
import {SlideLayout} from './shared/SlideLayout';

export const WorkedExampleSlide = ({scene}: {scene: WorkedExampleScene}) => {
  const {durationInFrames} = useVideoConfig();

  const n = scene.steps.length;
  const questionDelay = Math.round(0.06 * durationInFrames);
  const stepsStart = Math.round(0.18 * durationInFrames);
  const stepsEnd = Math.round(0.78 * durationInFrames);
  const stepInterval = n > 1 ? Math.round((stepsEnd - stepsStart) / (n - 1)) : stepsEnd - stepsStart;
  const finalStepDelay = stepsStart + Math.max(0, n - 1) * stepInterval;

  return (
    <SlideLayout eyebrow="Worked example" heading={scene.heading}>
      <KineticExit direction="left" distance={100} rotate={3} exitStartOffset={20}>
        <div className="worked-layout">
          <Reveal className="question-panel" delay={questionDelay}>
            {scene.question}
            {scene.coachNote ? <div className="coach-note">{scene.coachNote}</div> : null}
            {scene.coachNote ? (
              <div className="coach-arrow">
                <DoodleArrow delay={questionDelay + 28} />
              </div>
            ) : null}
            {scene.unitCancel ? (
              <div className="question-unit-cancel">
                <UnitCancel
                  left={scene.unitCancel.left}
                  right={scene.unitCancel.right}
                  result={scene.unitCancel.result}
                  delay={finalStepDelay + 34}
                  compact
                />
              </div>
            ) : null}
          </Reveal>
          <div className="worked-board">
            {scene.steps.map((step, index) => {
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
            })}
          </div>
        </div>
      </KineticExit>
    </SlideLayout>
  );
};
