// Y11 Chem M1 V17 opening: V16's final frame itself (its exported handoff scene frozen on its last frame, imported
// read-only). On "Now we go inside it" the camera pushes into V16's enlarged nucleus: the frozen frame scales about
// the nucleus and moves it to the centre while it fades, over V17's own redraw of the same nucleus (identical
// geometry), so the atom and the old labels shrink away and the nucleus stays.
import React from 'react';
import {Freeze, useCurrentFrame} from 'remotion';
import {NUC17, SceneHandoff as V16Handoff} from '../chem-y11-m1-v16/s3';
import {dur as v16dur} from '../chem-y11-m1-v16/common';
import {Burst, INK, Nucleus, PAPER, Sx, prog, smooth} from './parts';

/** The push: the frozen frame's nucleus point (NUC17) moves to C and scales by S. */
export const PUSH = {C: [960, 620] as [number, number], S: 1.12, d: 40};
export const pushT = (f: number, at: number) => smooth(prog(f, at, PUSH.d));
const tf = (t: number) => {
	const s = 1 + (PUSH.S - 1) * t;
	const cx = NUC17.cx + (PUSH.C[0] - NUC17.cx) * t, cy = NUC17.cy + (PUSH.C[1] - NUC17.cy) * t;
	return `translate(${cx},${cy}) scale(${s}) translate(${-NUC17.cx},${-NUC17.cy})`;
};
const tfCss = (t: number) => {
	const s = 1 + (PUSH.S - 1) * t;
	const cx = NUC17.cx + (PUSH.C[0] - NUC17.cx) * t, cy = NUC17.cy + (PUSH.C[1] - NUC17.cy) * t;
	return `translate(${cx}px,${cy}px) scale(${s}) translate(${-NUC17.cx}px,${-NUC17.cy}px)`;
};
/** V17's redraw of V16's enlarged nucleus panel (paper circle, nucleus, red burst and "?"), in V16 coordinates. */
const Panel: React.FC<{burstO?: number}> = ({burstO = 1}) => (
	<g>
		<circle cx={NUC17.cx} cy={NUC17.cy} r={250} fill={PAPER} stroke={INK} strokeWidth={4} />
		<Nucleus cx={NUC17.cx} cy={NUC17.cy} p={11} n={12} r={NUC17.r} />
		<g opacity={burstO}>
			<Burst cx={NUC17.cx + 250} cy={NUC17.cy - 200} r={80} at={-1000} />
			<Sx x={NUC17.cx + 250} y={NUC17.cy - 176} text="?" size={72} color={INK} anchor="middle" weight={800} at={-1000} />
		</g>
	</g>
);
/** Drawn under everything in scene 1: the nucleus panel, then V16's frame on top until the push ends. */
export const Opening: React.FC<{at: number; burstOut?: number}> = ({at, burstOut = 1e9}) => {
	const f = useCurrentFrame();
	const t = pushT(f, at);
	const old = 1 - smooth(prog(f, at + 4, PUSH.d - 6));
	return (
		<>
			<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
				<g transform={tf(t)}><Panel burstO={1 - prog(f, burstOut, 12)} /></g>
			</svg>
			{old > 0.005 ? (
				<div style={{position: 'absolute', inset: 0, opacity: old, transformOrigin: '0 0', transform: tfCss(t)}}>
					<Freeze frame={v16dur('handoff') - 1}><V16Handoff /></Freeze>
				</div>
			) : null}
		</>
	);
};
