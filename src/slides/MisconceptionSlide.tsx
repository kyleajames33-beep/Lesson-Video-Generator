import {useVideoConfig} from 'remotion';
import type {TextScene} from '../lesson/types';
import {KenBurns, ShakeLayer, TypewriterText} from '../animations/MotionPrimitives';
import {Callout} from '../animations/AttentionPrimitives';
import {MistakeTag} from '../animations/DoodlePrimitives';
import {DiagramRenderer} from './diagrams/DiagramRenderer';
import {SceneAssetImage} from './shared/SceneAssetImage';
import {Reveal} from './shared/Reveals';
import {SlideLayout} from './shared/SlideLayout';

export const MisconceptionSlide = ({scene}: {scene: TextScene}) => {
  const {durationInFrames} = useVideoConfig();
  const at = (frac: number) => Math.round(frac * durationInFrames);

  const bodyDelay = at(0.12);
  const visualDelay = at(0.30);
  const secondaryDelay = at(0.52);

  const visual = scene.image ? (
    <SceneAssetImage name={scene.image} delay={visualDelay} />
  ) : (
    <Reveal delay={visualDelay}>
      <KenBurns delay={visualDelay}>
        <DiagramRenderer diagram={scene.diagram ?? {type: 'massComparison'}} />
      </KenBurns>
    </Reveal>
  );

  return (
    <SlideLayout eyebrow="Common trap" heading={scene.heading}>
      <div className="two-column">
        <ShakeLayer delay={bodyDelay}>
          <Reveal as="p" className="statement" delay={bodyDelay}>
            <TypewriterText text={scene.body} delay={bodyDelay + 4} speed={2.5} />
          </Reveal>
          {scene.secondary ? (
            <Reveal as="p" className="supporting" delay={secondaryDelay}>
              <TypewriterText text={scene.secondary} delay={secondaryDelay + 4} speed={2.5} />
            </Reveal>
          ) : null}
          {scene.callout ? (
            <Reveal className="thinking-callout" delay={at(0.72)}>
              <Callout text={scene.callout} delay={at(0.72) + 4} />
            </Reveal>
          ) : null}
          {scene.mistakeTag ? (
            <div className="mistake-tag-wrap">
              <MistakeTag text={scene.mistakeTag} delay={at(0.42)} />
            </div>
          ) : null}
        </ShakeLayer>
        {visual}
      </div>
    </SlideLayout>
  );
};
