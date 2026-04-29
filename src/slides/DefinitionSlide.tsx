import {useVideoConfig} from 'remotion';
import type {TextScene} from '../lesson/types';
import {Heartbeat, ParticleEmitter, TypewriterText} from '../animations/MotionPrimitives';
import {Card3D} from '../animations/LayoutComposition';
import {Callout} from '../animations/AttentionPrimitives';
import {DiagramRenderer} from './diagrams/DiagramRenderer';
import {SceneAssetImage} from './shared/SceneAssetImage';
import {Reveal, ScaleReveal} from './shared/Reveals';
import {SlideLayout} from './shared/SlideLayout';

export const DefinitionSlide = ({scene}: {scene: TextScene}) => {
  const {durationInFrames} = useVideoConfig();
  const at = (frac: number) => Math.round(frac * durationInFrames);

  const cardDelay = at(0.10);
  const secondaryDelay = at(0.38);
  const visualDelay = at(0.32);

  const hasVisual = !!(scene.diagram || scene.image);
  return (
    <SlideLayout eyebrow="Definition" heading={scene.heading}>
      <div className={hasVisual ? 'two-column definition-layout' : 'center-stack'}>
        <div>
          <ScaleReveal delay={cardDelay}>
            <Card3D tiltAmount={5} shadowIntensity={0.18} pulseSpeed={6}>
              <Heartbeat className="definition-card" delay={cardDelay + 8}>
                <TypewriterText text={scene.body} delay={cardDelay + 12} />
                <ParticleEmitter delay={cardDelay + 16} />
              </Heartbeat>
            </Card3D>
          </ScaleReveal>
          {scene.secondary ? (
            <Reveal as="p" className="supporting center" delay={secondaryDelay}>
              {scene.secondary}
            </Reveal>
          ) : null}
          {scene.callout ? (
            <Reveal className="thinking-callout center" delay={at(0.62)}>
              <Callout text={scene.callout} delay={at(0.62) + 4} />
            </Reveal>
          ) : null}
        </div>
        {scene.image ? (
          <SceneAssetImage name={scene.image} delay={visualDelay} />
        ) : scene.diagram ? (
          <Reveal className="diagram-card" delay={visualDelay}>
            <DiagramRenderer diagram={scene.diagram} />
          </Reveal>
        ) : null}
      </div>
    </SlideLayout>
  );
};
