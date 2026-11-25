// Crossed-field stage (additive kit file, 25 November 2026; kit gap 6, first used by phys-y12-m6-v05's handoff and
// phys-y12-m6-v06, offered to Thomson's experiment later in the course). Course-neutral: labels, colours of meaning
// and numbers come from the lesson. Two coded plates with field lines between them, a grid of magnetic-field
// crosses filling the same gap, an optional slit barrier on the centre line, and a particle run that adds the
// electric acceleration to the magnetic one on the field motion engine (a `custom` field), so a balanced run is
// a straight line and an unbalanced one curves towards the stronger force.
import React from 'react';
import {runMotion} from '../../sims/field-motion';
import type {MotionPath} from '../../sims/field-motion';
import {CrossRegion, FieldLines, PlatePair} from './plates';
import type {PG} from './plates';
import {SlitBarrier} from './magnetic';

/** Plates g, field lines down (top +), crosses in the gap, and a slit barrier at `barrierX` (omit for none). */
export const CrossedStage: React.FC<{g: PG; barrierX?: number; slitHalf?: number; crossStep?: number; linesStep?: number; crossOpacity?: number; linesOpacity?: number; barrierOpacity?: number; children?: React.ReactNode}> = ({g, barrierX, slitHalf = 24, crossStep = 90, linesStep = 120, crossOpacity = 1, linesOpacity = 1, barrierOpacity = 1, children}) => {
	const mid = (g.yTop + g.yBot) / 2;
	return (
		<g>
			<FieldLines g={g} step={linesStep} opacity={linesOpacity} width={3.5} />
			<CrossRegion x={g.x1} y={g.yTop} w={g.x2 - g.x1} h={g.yBot - g.yTop} step={crossStep} border={false} opacity={crossOpacity} />
			<PlatePair g={g} />
			{barrierX !== undefined ? <SlitBarrier x={barrierX} y1={g.yTop - 40} y2={g.yBot + 40} y={mid} half={slitHalf} opacity={barrierOpacity} /> : null}
			{children}
		</g>
	);
};

/**
 * A charge entering crossed fields in screen units (px, frames; y up). `aE` is the electric acceleration (px per
 * frame², up positive, already signed for the charge); the field into the page turns the charge at `w` radians per
 * frame, so its magnetic acceleration is sign × w × (−vy, vx). For an electron with E down, aE > 0 and the run is a
 * straight line when aE = w × v. The run ends where the charge reaches x = length (or a plate, |y| = halfGap).
 */
export const crossedRun = (o: {v: number; aE: number; w: number; sign: 1 | -1; length: number; halfGap?: number; steps?: number}): MotionPath =>
	runMotion({
		field: {kind: 'custom', accel: (x, _y, vx, vy) => (x <= o.length ? [-o.sign * o.w * vy, o.aE + o.sign * o.w * vx] : [0, 0])},
		start: {x: 0, y: 0, vx: o.v, vy: 0},
		duration: (o.length / o.v) * 3,
		steps: o.steps ?? 1200,
		stopWhen: s => s.x >= o.length || (o.halfGap !== undefined && Math.abs(s.y) >= o.halfGap),
	});
