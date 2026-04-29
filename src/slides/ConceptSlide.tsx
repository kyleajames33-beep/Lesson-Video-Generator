import {useVideoConfig} from 'remotion';
import type {TextScene} from '../lesson/types';
import {KenBurns, TypewriterText} from '../animations/MotionPrimitives';
import {KineticExit} from '../animations/LayoutComposition';
import {Callout} from '../animations/AttentionPrimitives';
import {DiagramRenderer} from './diagrams/DiagramRenderer';
import {SceneAssetImage} from './shared/SceneAssetImage';
import {Reveal} from './shared/Reveals';
import {SlideLayout} from './shared/SlideLayout';

export const ConceptSlide = ({scene}: {scene: TextScene}) => {
  const {durationInFrames} = useVideoConfig();
  const at = (frac: number) => Math.round(frac * durationInFrames);

  const visualDelay = at(0.30);
  const visual = scene.image ? (
    <SceneAssetImage name={scene.image} delay={visualDelay} />
  ) : (
    <Reveal delay={visualDelay}>
      <KenBurns delay={visualDelay}>
        <DiagramRenderer diagram={scene.diagram ?? {type: 'bridge'}} />
      </KenBurns>
    </Reveal>
  );

  return (
    <SlideLayout eyebrow="Core idea" heading={scene.heading}>
      <KineticExit direction="up" distance={120} rotate={4} exitStartOffset={22}>
        <div className="two-column">
          <div>
            <Reveal as="p" className="statement" delay={at(0.12)}>
              <TypewriterText text={scene.body} delay={at(0.12) + 4} speed={2.5} />
            </Reveal>
            {scene.secondary ? (
              <Reveal as="p" className="supporting" delay={at(0.52)}>
                <TypewriterText text={scene.secondary} delay={at(0.52) + 4} speed={2.5} />
              </Reveal>
            ) : null}
            {scene.callout ? (
              <Reveal className="thinking-callout" delay={at(0.72)}>
                <Callout text={scene.callout} delay={at(0.72) + 4} />
              </Reveal>
            ) : null}
          </div>
          {visual}
        </div>
      </KineticExit>
    </SlideLayout>
  );
};
