import {interpolate, useCurrentFrame} from 'remotion';

export const CaptionBar = ({text}: {text: string}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [18, 34], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const y = interpolate(frame, [18, 34], [16, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div className="caption-bar" style={{opacity, transform: `translateY(${y}px)`}}>
      {text}
    </div>
  );
};
