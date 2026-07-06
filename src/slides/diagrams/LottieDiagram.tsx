// LottieDiagram — renders a Lottie animation from a JSON file in
// public/assets/lottie/. Lets us drop in designer-controlled vector
// animations (from LottieFiles.com, After Effects + Bodymovin, etc.)
// that Remotion renders deterministically frame-by-frame.
//
// Usage in lesson JSON:
//   "diagram": { "type": "lottie", "src": "assets/lottie/balloon.json", "loop": true }
//
// How to add a Lottie file:
//   1. Download a .json Lottie from lottiefiles.com (or export from AE).
//   2. Save it under public/assets/lottie/<name>.json
//   3. Reference it with src "assets/lottie/<name>.json" in a scene diagram.
//
// Notes:
//   - Lottie playback is tied to Remotion's frame clock, so renders are
//     deterministic (no drift between re-renders).
//   - Keep the artwork on-palette (chem green / amber / ink) so it sits
//     well against the light slide background.

import {useEffect, useState} from 'react';
import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';
import {Lottie, type LottieAnimationData} from '@remotion/lottie';

type LottieDiagramProps = {
	src: string;
	loop?: boolean;
	speed?: number;
};

export const LottieDiagram = ({src, loop = true, speed = 1}: LottieDiagramProps) => {
	const [data, setData] = useState<LottieAnimationData | null>(null);
	const [handle] = useState(() => delayRender('Loading Lottie: ' + src));

	useEffect(() => {
		fetch(staticFile(src))
			.then((res) => res.json())
			.then((json) => {
				setData(json);
				continueRender(handle);
			})
			.catch((err) => {
				cancelRender(err);
			});
	}, [handle, src]);

	if (!data) {
		return null;
	}

	return (
		<Lottie
			animationData={data}
			loop={loop}
			playbackRate={speed}
			style={{width: '100%', height: '100%'}}
		/>
	);
};
