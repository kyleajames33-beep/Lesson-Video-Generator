import {useCallback, useState, type ComponentProps, type CSSProperties} from 'react';
import {Img} from 'remotion';
import {useAccent} from '../../styles/theme';

// Drop-in replacement for Remotion's <Img> for lesson assets.
//
// public/assets/ is not committed, so a registered image can be missing on
// disk (fresh clone, cloud session, un-synced machine). Remotion's <Img>
// cancels the WHOLE render when an image fails to load; this wrapper catches
// that, logs a warning (visible in render logs) and draws a quiet subject-
// tinted placeholder so the scene keeps its composition.
//
// `npm run audit:production` is still the gate for missing assets — this only
// stops one missing file from killing a 10-minute render.

type Props = ComponentProps<typeof Img>;

export const AssetImg = (props: Props) => {
	const [failed, setFailed] = useState(false);
	const {src} = props;

	const onError = useCallback(() => {
		console.warn(`[AssetImg] missing image, drawing placeholder: ${src}`);
		setFailed(true);
	}, [src]);

	if (failed) {
		return <AssetPlaceholder style={props.style} className={props.className} />;
	}

	return <Img {...props} maxRetries={0} onError={onError} />;
};

const AssetPlaceholder = ({style, className}: {style?: CSSProperties; className?: string}) => {
	const accent = useAccent();

	return (
		<svg
			viewBox="0 0 400 400"
			aria-hidden
			className={className}
			// Inherit the image's placement (absolute position, width, max sizes)
			// so the placeholder occupies exactly the slot the image would have.
			style={{width: '62%', maxHeight: '88%', aspectRatio: '1 / 1', ...style, objectFit: undefined, filter: undefined}}
		>
			<circle cx={200} cy={200} r={170} fill={accent.soft} />
			{[140, 104, 68].map((r, i) => (
				<circle
					key={r}
					cx={200}
					cy={200}
					r={r}
					fill="none"
					stroke={accent.accent}
					strokeOpacity={0.14 + i * 0.06}
					strokeWidth={2}
					strokeDasharray={i === 1 ? '6 10' : undefined}
				/>
			))}
			<circle cx={200} cy={200} r={10} fill={accent.accent} fillOpacity={0.35} />
		</svg>
	);
};
