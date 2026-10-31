import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {PREVIEW_FRAMES, ProjectileKitPreview} from './preview';
import './fonts';

const Root: React.FC = () => <><Composition
	id="PhysicsProjectileKitPreview"
	component={ProjectileKitPreview}
	durationInFrames={PREVIEW_FRAMES}
	fps={30}
	width={1920}
	height={1080}
/>
	<Composition id="PhysicsProjectileKitPhone" component={ProjectileKitPreview} defaultProps={{phone: true}} durationInFrames={PREVIEW_FRAMES} fps={30} width={1080} height={2160} />
</>;

registerRoot(Root);
