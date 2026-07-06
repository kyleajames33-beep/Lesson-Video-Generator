import {spring, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {ASSETS, type AssetName} from '../../assets';
import {KenBurns} from '../../animations/MotionPrimitives';

type Props = {name: string; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const SceneAssetImage = ({name, delay = 26}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const src = ASSETS[name as AssetName];
	if (!src) return null;

	const appear = spring({frame: frame - delay, fps, config: {damping: 16, stiffness: 180, mass: 0.8}});
	const scale = interpolate(appear, [0, 1], [0.88, 1], clamp);
	const opacity = interpolate(frame - delay, [0, 14], [0, 1], clamp);

	return (
		<div className="scene-asset-image-wrap" style={{transform: `scale(${scale})`, opacity}}>
			<KenBurns delay={delay}>
				<img src={src} alt="" className="scene-asset-image" />
			</KenBurns>
		</div>
	);
};
