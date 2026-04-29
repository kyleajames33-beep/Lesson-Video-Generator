import type {ReactNode} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {FocusLayer, WordReveal, ScrambleText, useAmbientFloat} from '../../animations/MotionPrimitives';
import {TravelingDotProgress, KineticExit} from '../../animations/LayoutComposition';
import {Spotlight, UnderlineDraw} from '../../animations/AttentionPrimitives';
import {CameraStage, type CameraKeyframe} from '../../animations/CameraStage';
import {AnimatedBackground} from './AnimatedBackground';

type SlideLayoutProps = {
  eyebrow?: string;
  heading: string;
  children: ReactNode;
  cameraKeyframes?: CameraKeyframe[];
  /** When true, the heading band stays at full chrome the whole scene. */
  pinHeading?: boolean;
};

export const SlideLayout = ({eyebrow, heading, children, cameraKeyframes, pinHeading}: SlideLayoutProps) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const at = (frac: number) => Math.round(frac * durationInFrames);
  const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

  const headerProgress = interpolate(frame, [0, 24], [0, 1], clamp);
  const lineProgress = interpolate(frame, [4, 46], [0, 1], clamp);

  // After the intro phase, the chrome dims slightly (still legible) to give the canvas focus
  const chromeFade = pinHeading
    ? 1
    : interpolate(frame, [at(0.22), at(0.40)], [1, 0.7], clamp);
  const accentFade = pinHeading
    ? 1
    : interpolate(frame, [at(0.20), at(0.34)], [1, 0.15], clamp);
  const badgeFade = pinHeading
    ? 1
    : interpolate(frame, [at(0.22), at(0.36)], [1, 0.4], clamp);

  const badgeFloat = useAmbientFloat(4, 4.4, 1.7);

  return (
    <div className="slide">
      <AnimatedBackground />
      <div
        className="slide-accent-line"
        style={{transform: `scaleX(${lineProgress})`, opacity: accentFade}}
      />
      <div
        className="slide-header"
        style={{
          opacity: headerProgress * chromeFade,
          transform: `translateY(${interpolate(headerProgress, [0, 1], [-18, 0])}px)`,
        }}
      >
        <div>
          {eyebrow ? (
            <div className="slide-kicker">
              <div className="eyebrow">
                <ScrambleText text={eyebrow} delay={2} />
              </div>
            </div>
          ) : null}
          <h1>
            <UnderlineDraw delay={30} color="#06b6d4">
              <WordReveal text={heading} delay={14} />
            </UnderlineDraw>
          </h1>
        </div>
        <div
          className="slide-index-mark"
          style={{transform: `translateY(${badgeFloat}px)`, opacity: badgeFade}}
        >
          HSC
        </div>
      </div>
      <TravelingDotProgress
        className="scene-progress-track"
        color="#4f46e5"
        dotSize={10}
      />
      <Spotlight intensity={0.08} delay={22} />
      <CameraStage keyframes={cameraKeyframes} className="slide-camera">
        <KineticExit direction="up" distance={30} rotate={0} exitStartOffset={16}>
          <FocusLayer className="slide-body">{children}</FocusLayer>
        </KineticExit>
      </CameraStage>
    </div>
  );
};
