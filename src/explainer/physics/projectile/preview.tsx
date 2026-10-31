import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../../styles/tokens';
import {MovingProjectile, PHYS, VelocityTimeGraph} from './components';
import {PILOT_MODEL, flightTime, projectileState} from './model';

export const PREVIEW_FRAMES = 360;

/** Silent asset demonstration. It is intentionally separate from the lesson registry. */
export const ProjectileKitPreview: React.FC<{phone?: boolean}> = ({phone = false}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = Math.max(0, Math.min(1, (frame / fps - 2) / 8));
	const time = progress * flightTime(PILOT_MODEL);
	const state = projectileState(PILOT_MODEL, time);
	const signed = (n: number) => `${n > 0.04 ? '+' : ''}${Math.abs(n) < 0.05 ? '0.0' : n.toFixed(1)}`;
	if (phone) return <AbsoluteFill style={{background: TOK.bg, fontFamily: FONT_DISPLAY}}>
		<svg viewBox="0 0 1080 2160" width="100%" height="100%">
			<text x="66" y="104" fill={PHYS.trajectory} fontSize="33" fontWeight="760">PHYSICS VISUAL KIT</text>
			<text x="66" y="179" fill={PHYS.ink} fontSize="61" fontWeight="800">One launch, two velocities</text>
			<text x="66" y="237" fill={PHYS.muted} fontSize="36">Up is positive. No air resistance.</text>
			<text x="66" y="305" fill={PHYS.muted} fontSize="34">Launch: vₓ = 16 m/s, vᵧ = +12 m/s</text>
			<text x="66" y="357" fill={PHYS.muted} fontSize="34">g = 10 m/s² downward</text>
			<g transform="translate(-15 0)"><MovingProjectile model={PILOT_MODEL} time={time} /></g>
			<rect x="61" y="790" width="958" height="166" rx="20" fill={TOK.phys3} />
			<text x="88" y="842" fill={PHYS.muted} fontSize="35">Current moment: {state.t.toFixed(1)} s</text>
			<text x="88" y="909" fill={PHYS.horizontal} fontSize="43" fontWeight="760">vₓ  {state.vx.toFixed(1)} m/s</text>
			<text x="566" y="909" fill={PHYS.vertical} fontSize="43" fontWeight="760">vᵧ  {signed(state.vy)} m/s</text>
			<VelocityTimeGraph x={61} y={1000} width={958} height={432} component="vx" model={PILOT_MODEL} time={time} largeLabels />
			<VelocityTimeGraph x={61} y={1480} width={958} height={432} component="vy" model={PILOT_MODEL} time={time} largeLabels />
			<text x="66" y="2020" fill={PHYS.muted} fontSize="33">Motion slowed: 2.4 s shown in 8 s.</text>
			<text x="66" y="2072" fill={PHYS.muted} fontSize="33">v is the orange resultant velocity arrow.</text>
		</svg>
	</AbsoluteFill>;
	return <AbsoluteFill style={{background: TOK.bg, fontFamily: FONT_DISPLAY}}>
		<svg viewBox="0 0 1920 1080" width="100%" height="100%" role="img" aria-label="A projectile moves while its horizontal and vertical velocity graphs update together">
			<rect x="0" y="0" width="1920" height="1080" fill={TOK.bg} />
			<rect x="72" y="48" width="1776" height="944" rx="31" fill="#fffdf9" stroke="#e4e1db" strokeWidth="2" />
			<text x="112" y="117" fill={PHYS.ink} fontSize="58" fontWeight="800" letterSpacing="-2">One launch, two velocities</text>
			<text x="114" y="164" fill={PHYS.muted} fontSize="29">The ball travels right while gravity changes its upward velocity.</text>
			<path d="M 114 184 H 1805" stroke="#e1e5e6" strokeWidth="2" />
			<text x="112" y="245" fill={PHYS.trajectory} fontSize="29" fontWeight="760">PROJECTILE PATH</text>
			<text x="112" y="283" fill={PHYS.muted} fontSize="25">Launch: vₓ = 16 m/s, vᵧ = +12 m/s; g = 10 m/s² downward</text>
			<text x="112" y="360" fill={PHYS.horizontal} fontSize="34" fontWeight="750">vₓ stays constant.</text>
			<text x="112" y="411" fill={PHYS.vertical} fontSize="34" fontWeight="750">vᵧ falls through zero.</text>
			<text x="112" y="455" fill={PHYS.muted} fontSize="25">v is the orange resultant velocity arrow.</text>
			<MovingProjectile model={PILOT_MODEL} time={time} />
			<rect x="103" y="758" width="984" height="94" rx="18" fill={TOK.phys3} />
			<text x="132" y="797" fill={PHYS.muted} fontSize="25">Current values at t = {state.t.toFixed(1)} s</text>
			<circle cx="142" cy="824" r="8" fill={PHYS.horizontal} />
			<text x="161" y="835" fill={PHYS.horizontal} fontSize="32" fontWeight="760">vₓ  {state.vx.toFixed(1)} m/s</text>
			<circle cx="520" cy="824" r="8" fill={PHYS.vertical} />
			<text x="540" y="835" fill={PHYS.vertical} fontSize="32" fontWeight="760">vᵧ  {signed(state.vy)} m/s</text>
			<text x="1158" y="245" fill={PHYS.trajectory} fontSize="29" fontWeight="760">SAME MOMENT ON BOTH GRAPHS</text>
			<VelocityTimeGraph x={1155} y={271} width={623} height={278} component="vx" model={PILOT_MODEL} time={time} />
			<VelocityTimeGraph x={1155} y={570} width={623} height={278} component="vy" model={PILOT_MODEL} time={time} />
			<path d="M 112 899 H 1807" stroke="#e1e5e6" strokeWidth="2" />
			<text x="115" y="945" fill={PHYS.muted} fontSize="27">Idealised motion: no air resistance. Up is positive.</text>
			<text x="1785" y="945" textAnchor="end" fill={PHYS.trajectory} fontSize="27" fontWeight="750">Motion slowed: 2.4 s shown in 8 s.</text>
		</svg>
	</AbsoluteFill>;
};
