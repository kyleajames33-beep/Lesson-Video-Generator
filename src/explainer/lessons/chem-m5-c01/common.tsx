import React from 'react';
import lesson from '../../../../docs/production/claude-pm/lessons/c1/measured/lesson.json';
import {HandText, INK, Plate, prog} from '../../kit';
import type {CueScene} from '../../cues';
import {useCurrentFrame} from 'remotion';
import {BOTTLE_CROP, BOTTLE_NAT, BOTTLE_OPEN, BOTTLE_SEALED} from './assets';

const L = lesson as unknown as {scenes: (CueScene & {durationInFrames: number})[]};
export const sc = (id: string) => {
	const s = L.scenes.find(x => x.id === id);
	if (!s) throw new Error('scene not found ' + id);
	return s;
};

export const Heading: React.FC<{text: string; at?: number; size?: number; color?: string; out?: number}> = ({text, at = 4, size = 84, color = INK, out}) => {
	const f = useCurrentFrame();
	const o = out === undefined ? 1 : 1 - prog(f, out, 10);
	return <div style={{position: 'absolute', left: 96, top: 92, opacity: o}}><HandText text={text} at={at} size={size} cps={30} color={color} /></div>;
};

/** Painted bottle pair. `open` 0..1 crossfades sealed (cap on) to open (cap off). Plate is s * 600 wide. */
export const Bottle: React.FC<{x: number; y: number; s: number; open?: number; opacity?: number}> = ({x, y, s, open = 0, opacity = 1}) => (
	<>
		<Plate src={BOTTLE_SEALED} natural={BOTTLE_NAT} crop={BOTTLE_CROP} width={600 * s} style={{left: x, top: y, opacity: (1 - open) * opacity}} />
		{open > 0 ? <Plate src={BOTTLE_OPEN} natural={BOTTLE_NAT} crop={BOTTLE_CROP} width={600 * s} style={{left: x, top: y, opacity: open * opacity}} /> : null}
	</>
);
/** Geometry of the bottle plate. */
export const bottleGeo = (x: number, y: number, s: number) => ({cx: x + 223 * s, surfaceY: y + 610 * s, capY: y + 118 * s, left: x + 33 * s, right: x + 413 * s, bottom: y + 1330 * s});
