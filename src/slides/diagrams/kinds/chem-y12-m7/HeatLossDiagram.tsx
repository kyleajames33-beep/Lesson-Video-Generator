// HeatLossDiagram (chem12m7HeatLoss): why a spirit-burner calorimetry result
// for the enthalpy of combustion is always low in magnitude.
//
// Left: the apparatus. A spirit burner heats a metal can of water. Energy
// parcels leave the flame; on the "heat loss" beat most of them veer away
// into the air, the can walls and the bench instead of the water. On the
// "incomplete combustion" beat soot builds on the can base and CO leaves the
// flame still holding chemical energy. On the "evaporation" beat fuel vapour
// leaves the wick without burning, so the measured mass loss is too big.
//
// Right: each cause is listed with its effect on q or n, and a gauge of the
// magnitude of the enthalpy of combustion slides down from the theoretical
// value into the typical 40 to 70 percent band, one push per cause. Then three
// repeat trials land close together, far from the theoretical value: precise,
// not accurate. A systematic error.
//
// The marker positions inside the band are illustrative; only the 40 to 70
// percent range comes from the scene text. Beats are frames after `delay`.

import type {ReactElement} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idleBob, idlePulse} from '../../diorama';
import {clamp, fadeAt, popAt} from './mol';

export type HeatLossProps = {
	at?: {
		apparatus?: number;
		heatLoss?: number;
		incomplete?: number;
		evaporation?: number;
		sameWay?: number;
		repeats?: number;
		rule?: number;
	};
	/** Typical experimental range, as a percentage of the theoretical magnitude. */
	band?: [number, number];
	ruleText?: string;
	delay?: number;
};

const ID = 'c12m7hl';
const W = 760;
const H = 530;
const CORAL = '#d9604a';
const FLAME = '#f08a24';
const STEEL = '#aeb6bd';

const ease = (frame: number, a: number, b: number) => {
	const t = interpolate(frame, [a, b], [0, 1], clamp);
	return t * t * (3 - 2 * t);
};
const hash01 = (n: number) => {
	const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return x - Math.floor(x);
};

// Apparatus geometry (left half).
const CAN = {x: 96, y: 150, w: 132, h: 104};
const BURNER = {x: 118, y: 372, w: 88, h: 70};
const WICK = {x: BURNER.x + BURNER.w / 2, y: BURNER.y - 10};
const FLAME_TIP = {x: WICK.x, y: WICK.y - 66};
const BENCH_Y = BURNER.y + BURNER.h;

// Energy parcel routes: from the flame to a destination. The first few go
// into the water; after the heat-loss beat most are diverted.
type Route = {to: {x: number; y: number}; kind: 'water' | 'air' | 'wall' | 'bench'};
const ROUTES: Route[] = [
	{to: {x: CAN.x + 50, y: CAN.y + 60}, kind: 'water'},
	{to: {x: CAN.x + 86, y: CAN.y + 70}, kind: 'water'},
	{to: {x: 24, y: 252}, kind: 'air'},
	{to: {x: 300, y: 262}, kind: 'air'},
	{to: {x: CAN.x - 6, y: CAN.y + 80}, kind: 'wall'},
	{to: {x: CAN.x + CAN.w + 6, y: CAN.y + 74}, kind: 'wall'},
	{to: {x: 30, y: BENCH_Y - 2}, kind: 'bench'},
	{to: {x: 300, y: BENCH_Y - 2}, kind: 'bench'},
];

export const HeatLossDiagram = ({at = {}, band = [40, 70], ruleText = 'Systematic error: repeats improve precision, not accuracy', delay = 62}: HeatLossProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = {
		apparatus: at.apparatus ?? 0,
		heatLoss: at.heatLoss ?? 180,
		incomplete: at.incomplete ?? 460,
		evaporation: at.evaporation ?? 740,
		sameWay: at.sameWay ?? 960,
		repeats: at.repeats ?? 1140,
		rule: at.rule ?? 1320,
	};
	const shown = fadeAt(frame, t.apparatus, 16);
	const lossOn = ease(frame, t.heatLoss, t.heatLoss + 40);

	// Flame flicker: deterministic, from the frame.
	const flick = Math.sin(frame / 3.1) * 0.06 + Math.sin(frame / 1.7) * 0.04;
	const flameH = 58 * (1 + flick);

	// ---- energy parcels ----
	const PERIOD = 46;
	const parcels: ReactElement[] = [];
	if (frame > t.apparatus + 20) {
		for (let k = 0; k < 10; k++) {
			const phase = ((frame + k * (PERIOD / 10) * 3.3) % PERIOD) / PERIOD;
			const cycle = Math.floor((frame + k * (PERIOD / 10) * 3.3) / PERIOD);
			// Before the heat-loss beat every parcel heads for the water; after it, only a few do.
			const routeIdx = lossOn < 0.5 ? (k % 2) : (k % 5 === 0 ? 0 : 2 + ((k + cycle) % 6));
			const r = ROUTES[routeIdx];
			const sx = FLAME_TIP.x + (hash01(k) - 0.5) * 10, sy = FLAME_TIP.y + 10;
			const mx = (sx + r.to.x) / 2 + (r.kind === 'water' ? 0 : (r.to.x < sx ? -30 : 30));
			const my = Math.min(sy, r.to.y) - 26;
			const u = phase;
			const x = (1 - u) * (1 - u) * sx + 2 * (1 - u) * u * mx + u * u * r.to.x;
			const y = (1 - u) * (1 - u) * sy + 2 * (1 - u) * u * my + u * u * r.to.y;
			const lost = r.kind !== 'water';
			parcels.push(
				<circle key={k} cx={x} cy={y} r={5.5} fill={lost ? CORAL : FLAME} opacity={Math.sin(u * Math.PI) * 0.95} />,
			);
		}
	}

	// ---- soot and CO (incomplete combustion) ----
	const soot = ease(frame, t.incomplete, t.incomplete + 90);
	const coDrift = (k: number) => ((frame - t.incomplete + k * 23) % 90) / 90;

	// ---- fuel vapour (evaporation) ----
	const vap = fadeAt(frame, t.evaporation, 16);
	const wisp = (k: number) => {
		const p = ((frame - t.evaporation + k * 30) % 90) / 90;
		const x0 = BURNER.x + 16 + k * 26;
		const y0 = BURNER.y - 4;
		return {x: x0 + Math.sin(p * 6 + k) * 8, y: y0 - p * 70, o: Math.sin(p * Math.PI)};
	};

	// ---- right panel: causes and the gauge ----
	const RX = 360;
	const causes = [
		{n: '1', text: 'heat lost to air, can and bench', eff: 'q too low', at: t.heatLoss},
		{n: '2', text: 'incomplete combustion: CO, soot', eff: 'q too low', at: t.incomplete},
		{n: '3', text: 'fuel evaporates without burning', eff: 'n too high', at: t.evaporation},
	];
	const G = {x0: RX + 20, x1: W - 30, y: 330};
	const gx = (pct: number) => G.x0 + ((G.x1 - G.x0) * pct) / 100;
	// Marker: 100% until the first cause, then one push down per cause.
	const p1 = ease(frame, t.heatLoss + 30, t.heatLoss + 70);
	const p2 = ease(frame, t.incomplete + 30, t.incomplete + 70);
	const p3 = ease(frame, t.evaporation + 30, t.evaporation + 70);
	const markerPct = 100 - 22 * p1 - 13 * p2 - 10 * p3;
	const gaugeShown = fadeAt(frame, t.heatLoss + 20, 16);
	const repeats = [51, 55, 58];
	const sameWay = fadeAt(frame, t.sameWay, 16);
	const pulse = 0.55 + 0.45 * idlePulse(frame, 54);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Spirit burner calorimetry: heat lost to surroundings, incomplete combustion and fuel evaporation all make the measured enthalpy of combustion smaller in magnitude than the theoretical value; repeats agree with each other but stay low, a systematic error" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<linearGradient id={`${ID}-can`} x1="0" x2="1">
					<stop offset="0%" stopColor="#c9d0d6" />
					<stop offset="45%" stopColor="#f1f3f5" />
					<stop offset="100%" stopColor="#a9b1b8" />
				</linearGradient>
				<linearGradient id={`${ID}-water`} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#bcdcf2" />
					<stop offset="100%" stopColor="#8fc0e3" />
				</linearGradient>
				<linearGradient id={`${ID}-glass`} x1="0" x2="1">
					<stop offset="0%" stopColor="#dfe9ee" />
					<stop offset="50%" stopColor="#f7fbfd" />
					<stop offset="100%" stopColor="#d2dde3" />
				</linearGradient>
				<radialGradient id={`${ID}-flame`} cx="50%" cy="75%" r="70%">
					<stop offset="0%" stopColor="#fff3c4" />
					<stop offset="45%" stopColor="#ffc24a" />
					<stop offset="100%" stopColor={FLAME} stopOpacity={0.15} />
				</radialGradient>
			</defs>

			{/* ---------- apparatus ---------- */}
			<g opacity={shown}>
				{/* bench */}
				<rect x={8} y={BENCH_Y} width={330} height={14} rx={4} fill="#d8cdb9" />
				<rect x={8} y={BENCH_Y + 14} width={330} height={5} rx={2} fill="#bfb29a" />
				{/* stand */}
				<rect x={296} y={110} width={8} height={BENCH_Y - 110} fill={STEEL} />
				<rect x={CAN.x + CAN.w - 4} y={CAN.y + 20} width={300 - CAN.x - CAN.w + 4} height={7} rx={3} fill={STEEL} />
				{/* can with water */}
				<rect x={CAN.x} y={CAN.y} width={CAN.w} height={CAN.h} rx={8} fill={`url(#${ID}-can)`} stroke="#8d969e" strokeWidth={2} />
				<rect x={CAN.x + 6} y={CAN.y + 26} width={CAN.w - 12} height={CAN.h - 32} rx={5} fill={`url(#${ID}-water)`} />
				<text x={CAN.x + CAN.w / 2} y={CAN.y + 74} textAnchor="middle" fill="#2f5d80" fontSize={15} fontWeight={800}>water</text>
				{/* thermometer */}
				<rect x={CAN.x + CAN.w - 34} y={CAN.y - 58} width={9} height={120} rx={4.5} fill="#ffffff" stroke="#9aa3ab" strokeWidth={1.5} />
				<rect x={CAN.x + CAN.w - 32} y={CAN.y + 6 - 26 * ease(frame, t.apparatus + 30, t.heatLoss + 200)} width={5} height={56 + 26 * ease(frame, t.apparatus + 30, t.heatLoss + 200)} rx={2.5} fill={CORAL} />
				<circle cx={CAN.x + CAN.w - 29.5} cy={CAN.y + 66} r={7} fill={CORAL} />
				{/* soot on the can base */}
				<path d={`M ${CAN.x + 8} ${CAN.y + CAN.h} Q ${CAN.x + CAN.w / 2} ${CAN.y + CAN.h + 12 * soot} ${CAN.x + CAN.w - 8} ${CAN.y + CAN.h}`} fill="#2b2b2b" opacity={0.85 * soot} />
				{/* burner */}
				<rect x={BURNER.x} y={BURNER.y} width={BURNER.w} height={BURNER.h} rx={12} fill={`url(#${ID}-glass)`} stroke="#9fb0ba" strokeWidth={2} />
				<rect x={BURNER.x + 6} y={BURNER.y + 26} width={BURNER.w - 12} height={BURNER.h - 32} rx={8} fill="#e9d9a8" opacity={0.85} />
				<text x={BURNER.x + BURNER.w / 2} y={BURNER.y + 56} textAnchor="middle" fill="#7a6326" fontSize={15} fontWeight={800}>alcohol</text>
				<rect x={WICK.x - 9} y={BURNER.y - 12} width={18} height={14} rx={3} fill="#9aa3ab" />
				<rect x={WICK.x - 2.5} y={WICK.y - 10} width={5} height={14} fill="#5a4a3a" />
				{/* flame */}
				<path
					d={`M ${WICK.x} ${WICK.y - 8 - flameH} C ${WICK.x + 22} ${WICK.y - 30 - flameH * 0.35}, ${WICK.x + 16} ${WICK.y - 6}, ${WICK.x} ${WICK.y - 4} C ${WICK.x - 16} ${WICK.y - 6}, ${WICK.x - 22} ${WICK.y - 30 - flameH * 0.35}, ${WICK.x} ${WICK.y - 8 - flameH}`}
					fill={`url(#${ID}-flame)`}
				/>
			</g>

			{/* energy parcels */}
			<g opacity={shown}>{parcels}</g>

			{/* heat-loss labels */}
			<g opacity={fadeAt(frame, t.heatLoss + 30, 14)}>
				<text x={12} y={232} fill={CORAL} fontSize={15} fontWeight={800}>to air</text>
				<text x={250} y={242} fill={CORAL} fontSize={15} fontWeight={800}>to air</text>
				<text x={12} y={BENCH_Y - 10} fill={CORAL} fontSize={15} fontWeight={800}>to bench</text>
				<text x={12} y={CAN.y - 30} fill={CORAL} fontSize={15} fontWeight={800}>can walls warm too</text>
			</g>

			{/* CO puffs leaving the flame */}
			{frame > t.incomplete &&
				[0, 1, 2].map((k) => {
					const p = coDrift(k);
					const x = FLAME_TIP.x + 28 + p * 70, y = FLAME_TIP.y + 14 - p * 30;
					return (
						<g key={`co${k}`} opacity={Math.sin(p * Math.PI) * fadeAt(frame, t.incomplete, 16)}>
							<circle cx={x} cy={y} r={13} fill="#f3f1ec" stroke="#8a8a8a" strokeWidth={1.5} />
							<text x={x} y={y + 5} textAnchor="middle" fill="#555" fontSize={12} fontWeight={800}>CO</text>
						</g>
					);
				})}
			<g opacity={fadeAt(frame, t.incomplete + 40, 14)}>
				<text x={CAN.x + CAN.w / 2} y={CAN.y + CAN.h + 34} textAnchor="middle" fill="#3a3a3a" fontSize={15} fontWeight={800}>soot</text>
			</g>

			{/* fuel vapour leaving unburnt */}
			{frame > t.evaporation &&
				[0, 1, 2].map((k) => {
					const w = wisp(k);
					return (
						<path key={`v${k}`} d={`M ${w.x} ${w.y} q 6 -9 0 -18 q -6 -9 0 -18`} fill="none" stroke="#b19a4a" strokeWidth={3} strokeLinecap="round" opacity={w.o * vap} />
					);
				})}
			<g opacity={fadeAt(frame, t.evaporation + 30, 14)}>
				<text x={BURNER.x + BURNER.w + 12} y={BURNER.y + 20} fill="#8a7431" fontSize={15} fontWeight={800}>vapour, unburnt</text>
			</g>

			{/* ---------- right panel ---------- */}
			<line x1={RX - 8} y1={40} x2={RX - 8} y2={H - 40} stroke={TOK.rule} strokeWidth={1.5} opacity={shown} />
			<text x={RX + 10} y={44} fill={theme.accent} fontSize={19} fontWeight={800} opacity={fadeAt(frame, t.heatLoss - 10, 14)}>three causes, one direction</text>
			{causes.map((c, k) => {
				const y = 86 + k * 58;
				const p = popAt(frame, fps, c.at);
				return (
					<g key={c.n} opacity={Math.min(1, p)} transform={`translate(${(1 - Math.min(1, p)) * 16},0)`}>
						<circle cx={RX + 22} cy={y} r={14} fill={CORAL} />
						<text x={RX + 22} y={y + 5} textAnchor="middle" fill="#ffffff" fontSize={15} fontWeight={800}>{c.n}</text>
						<text x={RX + 46} y={y - 3} fill={TOK.ink} fontSize={16} fontWeight={800}>{c.text}</text>
						<text x={RX + 46} y={y + 18} fill={CORAL} fontSize={15} fontWeight={800}>{c.eff}</text>
						<path d={`M ${W - 42} ${y - 10} L ${W - 42} ${y + 10} M ${W - 49} ${y + 3} L ${W - 42} ${y + 10} L ${W - 35} ${y + 3}`} fill="none" stroke={CORAL} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" opacity={sameWay * pulse + (1 - sameWay) * 0.35} />
					</g>
				);
			})}
			<text x={W - 42} y={70} textAnchor="middle" fill={CORAL} fontSize={14} fontWeight={800} opacity={sameWay}>|ΔH| down</text>

			{/* gauge */}
			<g opacity={gaugeShown}>
				<text x={G.x0} y={G.y - 46} fill={TOK.inkDim} fontSize={16} fontWeight={800}>
					size of ΔH<tspan fontSize={12} dy={4}>c</tspan>
					<tspan dy={-4}> measured, as % of theoretical</tspan>
				</text>
				<rect x={gx(band[0])} y={G.y - 22} width={gx(band[1]) - gx(band[0])} height={44} rx={6} fill={`rgba(${theme.cardTint},0.14)`} />
				<text x={(gx(band[0]) + gx(band[1])) / 2} y={G.y + 40} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>typical {band[0]} to {band[1]}%</text>
				<line x1={G.x0} y1={G.y} x2={G.x1} y2={G.y} stroke={TOK.inkMute} strokeWidth={3} strokeLinecap="round" />
				{[0, 25, 50, 75, 100].map((p) => (
					<g key={p}>
						<line x1={gx(p)} y1={G.y - 7} x2={gx(p)} y2={G.y + 7} stroke={TOK.inkMute} strokeWidth={2} />
						<text x={gx(p)} y={G.y + 24} textAnchor="middle" fill={TOK.inkMute} fontSize={13} fontWeight={700}>{p}</text>
					</g>
				))}
				<text x={gx(100) + 6} y={G.y - 28} textAnchor="end" fill={TOK.inkDim} fontSize={14} fontWeight={800}>theoretical</text>
				{/* measured marker */}
				<g transform={`translate(${gx(markerPct)},${G.y})`} opacity={1 - fadeAt(frame, t.repeats, 14)}>
					<path d="M 0 -6 L -9 -22 L 9 -22 Z" fill={CORAL} />
					<circle cx={0} cy={0} r={7} fill={CORAL} stroke="#ffffff" strokeWidth={2} />
				</g>
			</g>

			{/* repeat trials: precise, not accurate */}
			{repeats.map((p, k) => {
				const s = popAt(frame, fps, t.repeats + k * 14);
				return (
					<g key={`r${k}`} transform={`translate(${gx(p)},${G.y + idleBob(frame, k, 0.8) * fadeAt(frame, t.repeats + 60, 20)}) scale(${Math.min(1.1, s)})`} opacity={Math.min(1, s)}>
						<circle r={7} fill={CORAL} stroke="#ffffff" strokeWidth={2} />
					</g>
				);
			})}
			<g opacity={fadeAt(frame, t.repeats + 50, 16)}>
				<text x={gx(55)} y={G.y + 76} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800}>3 repeats: close together (precise)</text>
				<text x={gx(55)} y={G.y + 98} textAnchor="middle" fill={CORAL} fontSize={15} fontWeight={800}>but all far from theoretical (not accurate)</text>
			</g>

			<text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, t.rule, 16)}>{ruleText}</text>
		</svg>
	);
};
