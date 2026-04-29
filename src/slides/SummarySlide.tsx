import {useVideoConfig} from 'remotion';
import type {SummaryScene} from '../lesson/types';
import {TypewriterText} from '../animations/MotionPrimitives';
import {Callout} from '../animations/AttentionPrimitives';
import {ElasticStagger} from '../animations/LayoutComposition';
import {Reveal} from './shared/Reveals';
import {SlideLayout} from './shared/SlideLayout';

export const SummarySlide = ({scene}: {scene: SummaryScene}) => {
  const {durationInFrames} = useVideoConfig();

  const n = scene.points.length;
  const baseDelay = Math.round(0.10 * durationInFrames);
  const staggerDelay = n > 1
    ? Math.round((0.65 - 0.10) * durationInFrames / (n - 1))
    : Math.round(0.15 * durationInFrames);

  return (
    <SlideLayout eyebrow="Summary" heading={scene.heading}>
      <ElasticStagger
        className="summary-list"
        baseDelay={baseDelay}
        staggerDelay={staggerDelay}
        direction="left"
      >
        {scene.points.map((point, index) => {
          const pointDelay = baseDelay + index * staggerDelay;
          return (
            <div className="summary-item" key={point}>
              <span>{index + 1}</span>
              <p><TypewriterText text={point} delay={pointDelay + 8} speed={2.8} /></p>
            </div>
          );
        })}
      </ElasticStagger>
      {scene.finalPrompt ? (
        <Reveal className="summary-exit-prompt" delay={Math.round(0.78 * durationInFrames)}>
          <Callout text={scene.finalPrompt} delay={Math.round(0.78 * durationInFrames) + 4} />
        </Reveal>
      ) : null}
    </SlideLayout>
  );
};
