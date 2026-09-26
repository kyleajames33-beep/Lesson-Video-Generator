// RateFactorsDiagram — the four ways to change a rate, as four little dioramas.
//
// 1 Concentration: two live tanks, few vs many particles; the more crowded
//   tank's collision counter runs away.
// 2 Temperature: same particles, slow vs fast; counts hits hard enough to beat
//   Ea (the faster tank gets far more).
// 3 Surface area: one lump splits into eight small cubes; the newly exposed
//   faces light up.
// 4 Catalyst: an energy profile whose barrier drops (lower Ea), ΔH unchanged.
//
// Each panel appears on its bullet's beat. The mini-tanks use collisionSim in
// 'count' mode (nothing reacts), so the counters show pure collision frequency.

import type {ReactNode} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Ball, ExtraAtomDefs, clamp, ramp} from './shared';
import {runSim, type SimConfig} from './collisionSim';

export type RateFactorsProps = {
	delay?: number;
	/** Frames after delay each panel appears: [concentration, temperature, surface area, catalyst]. */
	panels?: [number, number, number, number];
};

const ID = 'c11m3rf';
const W = 760;
const PW = 372, PH = 256;
const TW = 150, TH = 96;

const MiniTank = ({x, y, cfg, t, label, count, hi}: {x: number; y: number; cfg: SimConfig; t: number; label: string; count: 'all' | 'hard'; hi: boolean}) => {
	const run = runSim(cfg);
	const f = Math.max(0, Math.min(cfg.frames, Math.floor(t)));
	const n = count === 'all' ? run.collisionsBy[f] : run.effectiveBy[f];
	const flashes = run.events.filter((e) => e.f <= f && f - e.f < 8 && (count === 'all' || e.effective));
	return (
		<g>
			<DioramaPlinth id={ID} cx={x + TW / 2} cy={y + TH + 4} rx={92}>
				<rect x={x} y={y} width={TW} height={TH} rx={8} fill="rgba(215,235,248,0.6)" stroke="rgba(70,90,110,0.5)" strokeWidth={2} />
				{flashes.map((e, i) => (
					<circle key={i} cx={x + e.x} cy={y + e.y} r={5 + (f - e.f) * 1.2} fill="none" stroke={count === 'hard' ? TOK.amber : '#7d8790'} strokeWidth={2} opacity={1 - (f - e.f) / 8} />
				))}
				{run.frames[f].map((p, i) =>
					p.alive ? <Ball key={i} id={ID} el={p.kind === 'A' ? 'B' : 'A'} x={x + p.x} y={y + p.y} r={cfg.r} /> : null,
				)}
			</DioramaPlinth>
			<text x={x + TW / 2} y={y + TH + 72} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{label}</text>
			<text x={x + TW / 2} y={y + TH + 96} textAnchor="middle" fill={hi ? TOK.ink : TOK.inkDim} fontSize={19} fontWeight={800}>
				{count === 'all' ? 'collisions' : 'hits ≥ Ea'} {n}
			</text>
		</g>
	);
};

export const RateFactorsDiagram = ({delay = 90, panels = [30, 270, 540, 780]}: RateFactorsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const [t1, t2, t3, t4] = panels;

	const base = {w: TW, h: TH, r: 8, orientTol: 0.9, frames: 1400, mode: 'count' as const};
	const concLow: SimConfig = {...base, nA: 2, nB: 2, speed: [1, 2.4], threshold: 99, seed: 1};
	const concHigh: SimConfig = {...base, nA: 6, nB: 6, speed: [1, 2.4], threshold: 99, seed: 1};
	const tempLow: SimConfig = {...base, nA: 4, nB: 4, speed: [0.6, 1.5], threshold: 2.2, seed: 3};
	const tempHigh: SimConfig = {...base, nA: 4, nB: 4, speed: [1.6, 3.4], threshold: 2.2, seed: 3};

	const pIn = (t: number) => Math.max(0, spring({frame: frame - t, fps, config: {damping: 15, stiffness: 140}}));
	const origin = [
		{x: 4, y: 4}, {x: W - PW - 4, y: 4}, {x: 4, y: 530 - PH - 4}, {x: W - PW - 4, y: 530 - PH - 4},
	];

	const panel = (i: number, t: number, title: string, body: ReactNode) => {
		const s = pIn(t);
		const o = origin[i];
		return (
			<g key={i} opacity={Math.min(1, s * 1.5)} transform={`translate(${o.x} ${o.y + (1 - s) * 20})`}>
				<rect x={0} y={0} width={PW} height={PH} rx={16} fill="rgba(255,255,255,0.72)" stroke={TOK.rule} strokeWidth={1.5} />
				<circle cx={24} cy={26} r={14} fill={theme.accent} />
				<text x={24} y={32} textAnchor="middle" fill="#ffffff" fontSize={17} fontWeight={800}>{i + 1}</text>
				<text x={46} y={33} fill={TOK.ink} fontSize={21} fontWeight={800}>{title}</text>
				{frame >= t ? body : null}
			</g>
		);
	};

	// Surface area: one 2×2×2 lump → eight 1×1×1 cubes.
	const split = interpolate(frame, [t3 + 40, t3 + 90], [0, 1], clamp);
	const faceHi = ramp(frame, t3 + 100, 20);
	const cube = (cx: number, by: number, s: number, key: string, glow: number) => {
		const d = s * 0.45; // depth offset for the 3/4 view
		return (
			<g key={key}>
				<path d={`M ${cx - s / 2} ${by - s} l ${d} ${-d} l ${s} 0 l ${-d} ${d} Z`} fill="#d9d2c4" stroke={glow > 0 ? TOK.amber : '#8b806c'} strokeWidth={glow > 0 ? 2 + glow : 1.2} />
				<path d={`M ${cx + s / 2} ${by - s} l ${d} ${-d} l 0 ${s} l ${-d} ${d} Z`} fill="#a89e8a" stroke={glow > 0 ? TOK.amber : '#8b806c'} strokeWidth={glow > 0 ? 2 + glow : 1.2} />
				<rect x={cx - s / 2} y={by - s} width={s} height={s} fill="#c4bba9" stroke={glow > 0 ? TOK.amber : '#8b806c'} strokeWidth={glow > 0 ? 2 + glow : 1.2} />
			</g>
		);
	};
	// The lump is literally the eight small cubes stacked 2 × 2 × 2, so the
	// split shows the same mass spread out.
	const CS = 30, CD = CS * 0.45, CC = PW / 2 - 8, CB = 164;
	const pieces = [1, 0].flatMap((j) => [0, 1].flatMap((k) => [0, 1].map((i) => {
		const col = k * 2 + i;
		const lump = {x: CC + (i - 0.5) * CS + j * CD, y: CB - k * CS - j * CD};
		const spread = {x: CC - 72 + col * 48 + j * 16, y: CB + 10 - j * 32};
		return {key: `${i}${j}${k}`, x: lump.x + (spread.x - lump.x) * split, y: lump.y + (spread.y - lump.y) * split};
	})));

	// Catalyst: energy profile, barrier lowers.
	const cat = interpolate(frame, [t4 + 50, t4 + 100], [0, 1], clamp);
	const gx0 = 40, gx1 = 350, gyR = 158, gyP = 190, peak = 64, peakCat = 112;
	const curve = (pk: number) => `M ${gx0} ${gyR} L ${gx0 + 60} ${gyR} C ${gx0 + 110} ${gyR}, ${gx0 + 120} ${pk}, ${(gx0 + gx1) / 2} ${pk} C ${gx1 - 120} ${pk}, ${gx1 - 110} ${gyP}, ${gx1 - 60} ${gyP} L ${gx1} ${gyP}`;
	const mid = (gx0 + gx1) / 2;

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Four factors that increase rate: higher concentration, higher temperature, larger surface area, and a catalyst that lowers the activation energy" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<ExtraAtomDefs id={ID} elements={['A', 'B']} />

			{panel(0, t1, 'Concentration', (
				<g>
					<MiniTank x={22} y={56} cfg={concLow} t={frame - t1} label="dilute" count="all" hi={false} />
					<MiniTank x={200} y={56} cfg={concHigh} t={frame - t1} label="concentrated" count="all" hi />
				</g>
			))}
			{panel(1, t2, 'Temperature', (
				<g>
					<MiniTank x={22} y={56} cfg={tempLow} t={frame - t2} label="cold (slow)" count="hard" hi={false} />
					<MiniTank x={200} y={56} cfg={tempHigh} t={frame - t2} label="hot (fast)" count="hard" hi />
				</g>
			))}
			{panel(2, t3, 'Surface area', (
				<g>
					<DioramaPlinth id={ID} cx={PW / 2} cy={160} rx={112}>
						{pieces.map((p) => cube(p.x, p.y, CS, p.key, split > 0.98 ? faceHi * (1 + idlePulse(frame)) : 0))}
					</DioramaPlinth>
					<text x={PW / 2} y={PH - 12} textAnchor="middle" fill={faceHi > 0 ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800}>
						{split < 0.5 ? 'one lump' : 'crushed: more exposed surface'}
					</text>
				</g>
			))}
			{panel(3, t4, 'Catalyst', (
				<g>
					<line x1={gx0} y1={50} x2={gx0} y2={200} stroke={TOK.inkMute} strokeWidth={2} />
					<line x1={gx0} y1={200} x2={gx1} y2={200} stroke={TOK.inkMute} strokeWidth={2} />
					<text x={gx0 - 10} y={125} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} transform={`rotate(-90 ${gx0 - 10} 125)`}>energy</text>
					<path d={curve(peak)} fill="none" stroke={TOK.inkMute} strokeWidth={3.5} strokeDasharray={cat > 0 ? '7 6' : undefined} />
					<path d={curve(peak + (peakCat - peak) * cat)} fill="none" stroke={theme.accent} strokeWidth={4} opacity={cat} />
					{/* barrier heights, measured from the reactant level */}
					<line x1={mid - 9} y1={gyR} x2={mid - 9} y2={peak + 4} stroke={TOK.inkDim} strokeWidth={2.5} />
					<line x1={mid + 9} y1={gyR} x2={mid + 9} y2={peakCat + 4} stroke={TOK.amber} strokeWidth={3.5} opacity={cat} />
					<g fontSize={16} fontWeight={800}>
						<line x1={gx0 + 6} y1={222} x2={gx0 + 34} y2={222} stroke={TOK.inkMute} strokeWidth={3} strokeDasharray="6 5" />
						<text x={gx0 + 42} y={228} fill={TOK.inkDim}>no catalyst</text>
						<g opacity={cat}>
							<line x1={gx0 + 170} y1={222} x2={gx0 + 198} y2={222} stroke={theme.accent} strokeWidth={4} />
							<text x={gx0 + 206} y={228} fill={theme.accent}>catalyst</text>
							<text x={PW / 2} y={250} textAnchor="middle" fill={TOK.amberInk}>lower Ea, same ΔH</text>
						</g>
					</g>
				</g>
			))}
		</svg>
	);
};
