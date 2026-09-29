// BloodDiagram (bio11m2Blood) — what's in blood.
//
// mode "tube": a centrifuged tube of blood on a stone plinth. It starts evenly
//   red, then separates on its beat: straw-coloured plasma on top (its share
//   labelled from props), a thin pale layer of white cells and platelets, red
//   cells packed at the bottom. Chips for what plasma carries float up into
//   the plasma layer on their beats.
// mode "cells": red cell, white cell and platelets on their own plinths (not
//   to scale with each other). The red cell is shown face-on (biconcave: pale
//   centre) with a side profile; the white cell keeps a lobed nucleus and puts
//   out a pseudopod to engulf a bacterium; the platelets are small fragments.
//   Feature lines build under each on their beats.
// All text from props. Hold: cells bob, the white cell keeps engulfing.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob} from '../../diorama';
import {Chip2, Foot, FootLine, GLOSS, GlossDefs, H, Lines, PAL, W, clamp, fadeAt, popAt, wrap} from './shared';

type Col = {name: string; at: number; lines?: {text: string; at: number; amber?: boolean}[]};
export type BloodProps = {
	mode: 'tube' | 'cells';
	tube?: {
		spinAt: number;
		plasma: {label: string; share: number};
		cellsLabel: string;
		buffyLabel?: string;
		carries?: {text: string; at: number}[];
	};
	red?: Col;
	white?: Col;
	platelets?: Col;
	scaleNote?: string;
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2blood';

const RedCell = ({x, y}: {x: number; y: number}) => (
	<g transform={`translate(${x},${y})`}>
		<defs>
			<radialGradient id={`${ID}-rbc`} cx="50%" cy="50%" r="50%">
				<stop offset="0%" stopColor="#ef9a90" />
				<stop offset="45%" stopColor="#e2685d" />
				<stop offset="80%" stopColor="#c8433a" />
				<stop offset="100%" stopColor="#9c2c25" />
			</radialGradient>
		</defs>
		<circle r={40} fill={`url(#${ID}-rbc)`} stroke={PAL.bloodDark} strokeWidth={1.5} />
		<circle r={19} fill="#f0a197" stroke="#b8453b" strokeWidth={2} strokeOpacity={0.5} />
		<ellipse cx={-20} cy={-22} rx={9} ry={4} fill="#ffffff" opacity={0.3} transform="rotate(-35,-20,-22)" />
		{/* side profile: thick rim, thin middle */}
		<g transform="translate(66, 0)">
			<path d="M 0 -32 C 15 -32 15 -14 6 0 C 15 14 15 32 0 32 C -15 32 -15 14 -6 0 C -15 -14 -15 -32 0 -32 Z" fill="#d4544a" stroke={PAL.bloodDark} strokeWidth={1.2} />
		</g>
	</g>
);

const WhiteCell = ({x, y, frame}: {x: number; y: number; frame: number}) => {
	// engulf cycle: pseudopod reaches out and wraps a bacterium, which is drawn in
	const T = 180;
	const u = ((frame % T) + T) % T / T;
	const reach = u < 0.4 ? u / 0.4 : u < 0.7 ? 1 : 1 - (u - 0.7) / 0.3;
	const bx = 66 - 50 * Math.max(0, (u - 0.4) / 0.6);
	return (
		<g transform={`translate(${x},${y})`}>
			<path
				d={`M -40 0 C -40 -26 -18 -42 4 -40 C 26 -38 ${34 + 22 * reach} ${-24 - 6 * reach} ${40 + 26 * reach} ${-6} C ${36 + 24 * reach} ${14 + 6 * reach} 26 34 4 38 C -22 42 -40 24 -40 0 Z`}
				fill={`url(#${ID}-g-wbc)`}
				stroke="#9aa7bf"
				strokeWidth={1.5}
			/>
			<g opacity={u > 0.95 ? 0 : 1}>
				<rect x={bx - 11} y={-12} width={22} height={11} rx={5.5} fill={PAL.amino} stroke="#2f6f3c" />
			</g>
			<path d="M -22 -6 C -26 -20 -8 -22 -6 -10 C -2 -22 14 -18 10 -4 C 16 6 4 16 -4 8 C -12 18 -26 10 -22 -6 Z" fill={`url(#${ID}-g-nucleus)`} stroke="#5d3a93" strokeWidth={1} />
		</g>
	);
};

const Platelets = ({x, y, frame}: {x: number; y: number; frame: number}) => (
	<g transform={`translate(${x},${y})`}>
		{[[-30, -10], [-6, -22], [18, -6], [-14, 12], [12, 18], [34, 10]].map(([px, py], i) => (
			<path
				key={i}
				transform={`translate(${px + idleBob(frame, i, 2)}, ${py + idleBob(frame, i + 5, 2)}) rotate(${i * 47})`}
				d="M -9 -3 C -8 -8 2 -9 7 -5 C 11 -1 8 6 2 7 C -4 8 -10 3 -9 -3 Z"
				fill={`url(#${ID}-g-platelet)`}
				stroke="#9c7426"
				strokeWidth={1}
			/>
		))}
	</g>
);

export const BloodDiagram = ({mode, tube, red, white, platelets, scaleNote, footer = [], delay = 62}: BloodProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	if (mode === 'tube' && tube) {
		const TX = 230, TTOP = 70, TBOT = 440, TW = 96;
		const sep = interpolate(frame, [tube.spinAt, tube.spinAt + 50], [0, 1], clamp);
		const Hh = TBOT - TTOP - 40;
		const plasmaH = Hh * tube.plasma.share * sep;
		const buffyH = 7 * sep;
		const liquidTop = TTOP + 40;
		const spin = frame < tube.spinAt + 50 && frame > tube.spinAt - 20 ? Math.sin(frame / 2) * 3 : 0;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${tube.plasma.label}; ${tube.cellsLabel}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={GLOSS} />
				<DioramaPlinth id={`${ID}p`} cx={TX} cy={TBOT + 22} rx={120} />
				<g transform={`rotate(${spin}, ${TX}, ${TBOT})`}>
					<clipPath id={`${ID}-tc`}><rect x={TX - TW / 2} y={TTOP} width={TW} height={TBOT - TTOP} rx={TW / 2} /></clipPath>
					<g clipPath={`url(#${ID}-tc)`}>
						<rect x={TX - TW / 2} y={liquidTop} width={TW} height={TBOT - liquidTop} fill={PAL.blood} />
						<rect x={TX - TW / 2} y={liquidTop} width={TW} height={plasmaH} fill={PAL.plasma} />
						<rect x={TX - TW / 2} y={liquidTop + plasmaH} width={TW} height={buffyH} fill="#f4f1ea" />
					</g>
					<rect x={TX - TW / 2} y={TTOP} width={TW} height={TBOT - TTOP} rx={TW / 2} fill="none" stroke="#8fb4c8" strokeWidth={3} />
					<rect x={TX - TW / 2 + 10} y={TTOP + 20} width={10} height={TBOT - TTOP - 60} rx={5} fill="#ffffff" opacity={0.45} />
				</g>
				{/* labels */}
				<g opacity={fadeAt(frame, tube.spinAt + 40, 16)}>
					<line x1={TX + TW / 2 + 6} x2={TX + TW / 2 + 40} y1={liquidTop + plasmaH / 2} y2={liquidTop + plasmaH / 2} stroke={TOK.inkMute} strokeWidth={2} />
					<Lines x={TX + TW / 2 + 48} y={liquidTop + plasmaH / 2 + 7} anchor="start" lines={wrap(tube.plasma.label, 18)} size={20} color={TOK.ink} />
					{tube.buffyLabel && (
						<>
							<line x1={TX - TW / 2 - 6} x2={TX - TW / 2 - 30} y1={liquidTop + plasmaH + 3} y2={liquidTop + plasmaH + 3} stroke={TOK.inkMute} strokeWidth={2} />
							<Lines x={TX - TW / 2 - 36} y={liquidTop + plasmaH - 6} anchor="end" lines={wrap(tube.buffyLabel, 14)} size={16} color={TOK.inkDim} weight={700} />
						</>
					)}
					<line x1={TX + TW / 2 + 6} x2={TX + TW / 2 + 40} y1={(liquidTop + plasmaH + TBOT) / 2 + 10} y2={(liquidTop + plasmaH + TBOT) / 2 + 10} stroke={TOK.inkMute} strokeWidth={2} />
					<Lines x={TX + TW / 2 + 48} y={(liquidTop + plasmaH + TBOT) / 2 + 17} anchor="start" lines={wrap(tube.cellsLabel, 18)} size={20} color={TOK.ink} />
				</g>
				{(tube.carries ?? []).map((c, k) => {
					const t = popAt(frame, fps, c.at);
					return <Chip2 key={k} x={590} y={120 + k * 44 + idleBob(frame, k, 1.5)} text={c.text} color={theme.accent} t={t} size={18} />;
				})}
				<Foot lines={footer} frame={frame} />
			</svg>
		);
	}

	const cols = [
		{c: red, draw: 'red'},
		{c: white, draw: 'white'},
		{c: platelets, draw: 'plt'},
	].filter((x) => x.c) as {c: Col; draw: string}[];
	const colW = W / cols.length;
	const PY = 250;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={cols.map((x) => x.c.name).join(', ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{scaleNote && <text x={W / 2} y={24} textAnchor="middle" fill={TOK.inkMute} fontSize={15} fontWeight={700}>{scaleNote}</text>}
			{cols.map(({c, draw}, i) => {
				const x = colW * (i + 0.5);
				const p = popAt(frame, fps, c.at);
				const on = Math.min(1, p * 1.4);
				let y = PY + 84;
				return (
					<g key={draw}>
						<g opacity={on} transform={`translate(0, ${(1 - Math.min(1, p)) * 24})`}>
							<DioramaPlinth id={`${ID}${i}`} cx={x} cy={PY} rx={104} />
							<g transform={`translate(0, ${idleBob(frame, i, 1)})`}>
								{draw === 'red' && <g transform={`translate(${x - 24}, ${PY - 84}) scale(1.4)`}><RedCell x={0} y={0} /></g>}
								{draw === 'white' && <g transform={`translate(${x - 14}, ${PY - 84}) scale(1.45)`}><WhiteCell x={0} y={0} frame={frame - c.at} /></g>}
								{draw === 'plt' && <g transform={`translate(${x}, ${PY - 62}) scale(1.5)`}><Platelets x={0} y={0} frame={frame} /></g>}
							</g>
							<Lines x={x} y={PY + 76} lines={wrap(c.name, 16)} size={23} color={theme.accent} />
						</g>
						{(c.lines ?? []).map((ln, k) => {
							const lines = wrap(ln.text, Math.max(20, Math.floor(colW / 11)));
							const y0 = y + 22;
							y += lines.length * 21 + 12;
							return <Lines key={k} x={x} y={y0} lines={lines} size={18} color={ln.amber ? TOK.amberInk : TOK.ink} weight={700} opacity={fadeAt(frame, ln.at, 12)} />;
						})}
					</g>
				);
			})}
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
