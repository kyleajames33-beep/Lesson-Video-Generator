import React from 'react';
import {FONT_DISPLAY, TOK} from '../../../styles/tokens';
import {flightTime, projectileState, type ProjectileModel} from './model';

export const PHYS = {
	ink: '#252a2d', muted: '#59636a', rule: '#cbd3d6', paper: '#f7f7f5',
	horizontal: '#176f88', vertical: '#9a4d68', trajectory: TOK.phys1,
};

const fmt = (n: number, digits = 1) => Math.abs(n) < 0.05 ? '0' : n.toFixed(digits);

export type Point = {x: number; y: number};

/** SVG arrow in screen coordinates. The caller supplies direction, including negative y. */
export const VectorArrow: React.FC<{from: Point; to: Point; color: string; width?: number; label?: string; labelOffset?: Point; opacity?: number}> =
	({from, to, color, width = 6, label, labelOffset = {x: 0, y: -15}, opacity = 1}) => {
		const angle = Math.atan2(to.y - from.y, to.x - from.x);
		const length = Math.hypot(to.y - from.y, to.x - from.x);
		const head = Math.min(17, length * 0.45);
		const back = {x: to.x - head * Math.cos(angle), y: to.y - head * Math.sin(angle)};
		const normal = {x: -Math.sin(angle), y: Math.cos(angle)};
		return <g opacity={opacity}>
			<path d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`} stroke={color} strokeWidth={width} strokeLinecap="round" />
			<path d={`M ${to.x} ${to.y} L ${back.x + normal.x * head * 0.47} ${back.y + normal.y * head * 0.47} L ${back.x - normal.x * head * 0.47} ${back.y - normal.y * head * 0.47} Z`} fill={color} />
			{label && <text x={(from.x + to.x) / 2 + labelOffset.x} y={(from.y + to.y) / 2 + labelOffset.y} fill={color} fontFamily={FONT_DISPLAY} fontWeight={750} fontSize={30} textAnchor="middle">{label}</text>}
		</g>;
	};

/** Current horizontal and vertical velocity at a projectile, with a resultant. */
export const VelocityDecomposition: React.FC<{origin: Point; vx: number; vy: number; scale?: number; showResultant?: boolean}> =
	({origin, vx, vy, scale = 6.4, showResultant = true}) => {
		const horizontal = {x: origin.x + vx * scale, y: origin.y};
		const tip = {x: horizontal.x, y: origin.y - vy * scale};
		return <g>
			{showResultant && <VectorArrow from={origin} to={tip} color={PHYS.trajectory} width={4} label="v" labelOffset={{x: -vx * scale / 2 - 36, y: vy * scale / 2 - 28}} />}
			<VectorArrow from={origin} to={horizontal} color={PHYS.horizontal} label="vₓ" labelOffset={{x: 0, y: vy < -1e-8 ? -18 : 40}} />
			{Math.abs(vy) > 1e-8 && <VectorArrow from={horizontal} to={tip} color={PHYS.vertical} width={Math.min(6, Math.abs(vy) * scale * 0.4)} label="vᵧ" labelOffset={{x: 29, y: 8}} />}
			{Math.abs(vy) <= 1e-8 && <text x={horizontal.x + 23} y={horizontal.y - 15} fill={PHYS.vertical} fontFamily={FONT_DISPLAY} fontSize={28} fontWeight={750}>vᵧ = 0</text>}
		</g>;
	};

const PLOT = {left: 140, bottom: 666, xScale: 20.5, yScale: 20.5};
export const pointOnStage = (model: ProjectileModel, time: number): Point => {
	const s = projectileState(model, time);
	return {x: PLOT.left + s.x * PLOT.xScale, y: PLOT.bottom - s.y * PLOT.yScale};
};

export const MovingProjectile: React.FC<{model: ProjectileModel; time: number; showVectors?: boolean}> = ({model, time, showVectors = true}) => {
	const end = flightTime(model);
	const samples = Array.from({length: 81}, (_, i) => pointOnStage(model, end * i / 80));
	const current = pointOnStage(model, time);
	const path = samples.map((p, i) => `${i ? 'L' : 'M'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ');
	const state = projectileState(model, time);
	return <g>
		<path d={path} fill="none" stroke={PHYS.rule} strokeWidth={4} strokeDasharray="10 11" />
		<path d={`M ${samples[0].x} ${samples[0].y} ${samples.filter((_, i) => i > 0 && i / 80 <= state.t / end).map(p => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ')} L ${current.x} ${current.y}`} fill="none" stroke={PHYS.trajectory} strokeWidth={7} strokeLinecap="round" />
		<path d="M 104 668 L 979 668" stroke={PHYS.ink} strokeWidth={4} strokeLinecap="round" />
		<text x={103} y={712} fill={PHYS.muted} fontFamily={FONT_DISPLAY} fontSize={27}>launch</text>
		<text x={834} y={712} fill={PHYS.muted} fontFamily={FONT_DISPLAY} fontSize={27}>landing</text>
		<circle cx={current.x} cy={current.y} r={27} fill={TOK.phys1} stroke="#fff" strokeWidth={6} />
		<circle cx={current.x - 7} cy={current.y - 8} r={7} fill="#ffd7bd" />
		{showVectors && <VelocityDecomposition origin={{x: current.x + 13, y: current.y - 12}} vx={state.vx} vy={state.vy} />}
	</g>;
};

export const VelocityTimeGraph: React.FC<{x: number; y: number; width: number; height: number; model: ProjectileModel; time: number; component: 'vx' | 'vy'; largeLabels?: boolean}> =
	({x, y, width, height, model, time, component, largeLabels = false}) => {
		const horizontal = component === 'vx';
		const color = horizontal ? PHYS.horizontal : PHYS.vertical;
		const left = x + 76, right = x + width - 38;
		const top = y + 76, bottom = y + height - 86;
		const tMax = flightTime(model);
		const t = projectileState(model, time).t;
		const tx = (n: number) => left + n / tMax * (right - left);
		const value = (n: number) => horizontal ? model.vx0 : model.vy0 - model.g * n;
		const min = horizontal ? 0 : -model.vy0;
		const max = horizontal ? model.vx0 * 1.25 : model.vy0;
		const vy = (n: number) => bottom - (n - min) / (max - min) * (bottom - top);
		const zeroY = vy(0);
		return <g>
			<rect x={x} y={y} width={width} height={height} rx={22} fill="#fff" stroke={PHYS.rule} strokeWidth={2} />
			<text x={x + 28} y={y + 42} fill={color} fontFamily={FONT_DISPLAY} fontSize={largeLabels ? 38 : 30} fontWeight={760}>{horizontal ? 'Horizontal velocity' : 'Vertical velocity'} (m/s)</text>
			<path d={`M ${left} ${top} L ${left} ${bottom} L ${right} ${bottom}`} stroke={PHYS.ink} strokeWidth={3} fill="none" />
			{!horizontal && <path d={`M ${left} ${zeroY} L ${right} ${zeroY}`} stroke={PHYS.rule} strokeWidth={2} strokeDasharray="8 7" />}
			{[0, tMax / 2, tMax].map((v, i) => <g key={i}><path d={`M ${tx(v)} ${bottom} v 8`} stroke={PHYS.ink} strokeWidth={2} /><text x={tx(v)} y={bottom + 34} textAnchor="middle" fill={PHYS.muted} fontFamily={FONT_DISPLAY} fontSize={largeLabels ? 34 : 25}>{fmt(v)}</text></g>)}
			{(horizontal ? [0, model.vx0] : [-model.vy0, 0, model.vy0]).map((v, i) => <g key={i}><path d={`M ${left - 8} ${vy(v)} h 8`} stroke={PHYS.ink} strokeWidth={2} /><text x={left - 15} y={vy(v) + 7} textAnchor="end" fill={PHYS.muted} fontFamily={FONT_DISPLAY} fontSize={largeLabels ? 34 : 25}>{fmt(v, 0)}</text></g>)}
			<text x={(left + right) / 2} y={bottom + 73} textAnchor="middle" fill={PHYS.muted} fontFamily={FONT_DISPLAY} fontSize={largeLabels ? 34 : 25}>time (s)</text>
			<path d={`M ${left} ${vy(value(0))} L ${tx(t)} ${vy(value(t))}`} stroke={color} strokeWidth={6} strokeLinecap="round" fill="none" />
			<circle cx={tx(t)} cy={vy(value(t))} r={9} fill={color} stroke="#fff" strokeWidth={3} />
		</g>;
	};
