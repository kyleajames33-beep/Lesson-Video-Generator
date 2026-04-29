import {useVideoConfig} from 'remotion';
import type {TextScene} from '../lesson/types';
import {KenBurns, TypewriterText} from '../animations/MotionPrimitives';
import {Card3D} from '../animations/LayoutComposition';
import {Callout} from '../animations/AttentionPrimitives';
import {DiagramRenderer} from './diagrams/DiagramRenderer';
import {SceneAssetImage} from './shared/SceneAssetImage';
import {Reveal, ScaleReveal} from './shared/Reveals';
import {SlideLayout} from './shared/SlideLayout';

export const HookSlide = ({scene}: {scene: TextScene}) => {
  const {durationInFrames} = useVideoConfig();
  const at = (frac: number) => Math.round(frac * durationInFrames);

  const bodyDelay = at(0.10);
  const visualDelay = at(0.30);

  const visual = scene.image ? (
    <SceneAssetImage name={scene.image} delay={visualDelay} />
  ) : (
    <Reveal delay={visualDelay}>
      <KenBurns delay={visualDelay}>
        <DiagramRenderer diagram={scene.diagram ?? {type: 'dozenMole'}} />
      </KenBurns>
    </Reveal>
  );

  return (
    <SlideLayout eyebrow="Start here" heading={scene.heading}>
      <div className="two-column">
        <ScaleReveal delay={bodyDelay}>
          <Card3D tiltAmount={4} shadowIntensity={0.16} pulseSpeed={5.5}>
            <div className="statement huge">
              <TypewriterText text={scene.body} delay={bodyDelay + 8} speed={2.2} />
            </div>
          </Card3D>
          {scene.callout ? (
            <div className="thinking-callout">
              <Callout text={scene.callout} delay={at(0.58)} />
            </div>
          ) : null}
        </ScaleReveal>
        {visual}
      </div>
    </SlideLayout>
  );
};
