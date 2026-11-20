// Y11 Chem M1 V16 opening: V15's final frame itself (its exported handoff scene frozen on its last frame, imported
// read-only), which slides out to the left on "Now put" while the painted burner slides in.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {SceneHandoff as V15Handoff} from '../chem-y11-m1-v15/s3';
import {dur as v15dur} from '../chem-y11-m1-v15/common';
import {prog, smooth} from './parts';

export const Opening: React.FC<{out: number}> = ({out}) => {
	const f = useCurrentFrame();
	const p = smooth(prog(f, out, 28));
	if (p >= 0.999) return null;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: 1 - p, transform: `translateX(${-p * 500}px)`}}>
			<Freeze frame={v15dur('handoff') - 1}><V15Handoff /></Freeze>
		</div>
	);
};
