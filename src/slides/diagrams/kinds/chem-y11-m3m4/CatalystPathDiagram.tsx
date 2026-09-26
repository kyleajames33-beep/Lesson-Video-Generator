// CatalystPathDiagram — the catalysed energy profile as a mountain with a
// tunnel (Chem Y11 M4 L5).
//
// The uncatalysed profile is a painted hill between a reactant plateau and a
// lower product plateau (exothermic). Reactant molecules keep trying to climb
// it: only those with enough energy get over, the rest roll back. On the
// catalyst beat a tunnel opens through the hill along the catalysed profile (a
// lower hump); now more of the same molecules make it through. Ea arrows show
// the lower barrier, and the ΔH arrow shows the start and finish levels have
// not moved.
//
// Molecule energies are fixed per molecule, so the "more molecules get over"
// claim is literally true on screen: 1 of 3 before, 2 of 3 after.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, STONE, idlePulse} from '../../diorama';
import {Ball, ExtraAtomDefs, clamp, ramp} from './shared';

export type CatalystPathProps = {
	delay?: number;
	/** Frames after delay: [Ea arrow, tunnel opens, lower-Ea arrow, ΔH unchanged]. */
	beats?: [number, number, number, number];
};

const ID = 'c11m4cat';
const W = 760;
const GX0 = 86, GX1 = 720;
const YR = 300; // reactant level
const YP = 384; // product level (lower: exothermic)
const PEAK = 118; // uncatalysed peak
const PEAK_CAT = 222; // catalysed peak
const ENERGIES = [0.35, 0.72, 1.08]; // per molecule, as a fraction of the uncatalysed barrier (YR − PEAK)

const smooth = (t: number) => t * t * (3 - 2 * t);
// Profile height at progress u ∈ [0, 1] for a given peak y.
const yAt = (u: number, peak: number) => {
	const base = YR + (YP - YR) * smooth(Math.max(0, Math.min(1, (u - 0.25) / 0.5)));
	const baseMid = (YR + YP) / 2;
	const hump = Math.exp(-(((u - 0.5) / 0.13) ** 2));
	return base - (baseMid - peak) * hump;
};
const xAt = (u: number) => GX0 + u * (GX1 - GX0);
const pathFor = (peak: number, u0 = 0, u1 = 1) => {
	const pts: string[] = [];
	for (let i = 0; i <= 80; i++) {
		const u = u0 + ((u1 - u0) * i) / 80;
		pts.push(`${i === 0 ? 'M' : 'L'} ${xAt(u).toFixed(1)} ${yAt(u, peak).toFixed(1)}`);
	}
	return pts.join(' ');
};

export const CatalystPathDiagram = ({delay = 60, beats = [310, 450, 960, 1170]}: CatalystPathProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const [tEa, tCat, tLow, tDH] = beats;

	const tunnel = ramp(frame, tCat, 30);
	const barrier = YR - PEAK;

	// One molecule's position: tries every `period` frames, starting at `start`.
	const molecule = (k: number) => {
		const period = 150;
		const start = 20 + k * 50;
		const t = frame - start;
		if (t < 0) return {u: 0.07, o: ramp(frame, 10 + k * 6, 12), cat: false};
		const cycle = Math.floor(t / period);
		const ph = (t % period) / period;
		const cycleStart = start + cycle * period;
		const cat = cycleStart >= tCat + 20;
		const peak = cat ? PEAK_CAT : PEAK;
		const need = YR - peak; // energy needed on this path
		const has = ENERGIES[k] * barrier;
		const passes = has >= need;
		// turning point: furthest u on the rising side reachable with this energy
		let uTurn = 0.5;
		if (!passes) {
			for (let u = 0.07; u <= 0.5; u += 0.005) {
				if (YR - yAt(u, peak) > has) { uTurn = u; break; }
			}
		}
		let u: number;
		let o = 1;
		if (passes) {
			u = 0.07 + (0.93 - 0.07) * smooth(Math.min(1, ph / 0.75));
			o = ph > 0.85 ? Math.max(0, 1 - (ph - 0.85) * 8) : ph < 0.05 ? ph * 20 : 1;
		} else {
			const up = Math.min(1, ph / 0.4), down = Math.max(0, (ph - 0.4) / 0.4);
			u = ph < 0.4 ? 0.07 + (uTurn - 0.07) * Math.sin((up * Math.PI) / 2) : uTurn - (uTurn - 0.07) * smooth(Math.min(1, down));
		}
		return {u, o, cat};
	};

	const eaIn = ramp(frame, tEa, 16);
	const lowIn = ramp(frame, tLow, 16);
	const dhIn = ramp(frame, tDH, 16);
	const peakX = xAt(0.5);
	const grow = (at: number) => interpolate(frame, [at, at + 30], [0, 1], clamp);

	const arrow = (x: number, yFrom: number, yTo: number, g: number, color: string, w = 4) => {
		const y = yFrom + (yTo - yFrom) * g;
		const dir = yTo < yFrom ? -1 : 1;
		return (
			<g>
				<line x1={x} y1={yFrom} x2={x} y2={y - dir * 10} stroke={color} strokeWidth={w} strokeLinecap="round" />
				<path d={`M ${x} ${y} L ${x - 8} ${y - dir * 13} L ${x + 8} ${y - dir * 13} Z`} fill={color} />
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Energy profile: a catalyst provides an alternative pathway with a lower activation energy; the reactant and product levels, and so ΔH, are unchanged" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<ExtraAtomDefs id={ID} elements={['A']} />
			<defs>
				<linearGradient id={`${ID}-hill`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={STONE.topLight} />
					<stop offset="55%" stopColor={STONE.top} />
					<stop offset="100%" stopColor={STONE.side} />
				</linearGradient>
				<clipPath id={`${ID}-hillclip`}>
					<path d={`${pathFor(PEAK)} L ${GX1} 462 L ${GX0} 462 Z`} />
				</clipPath>
				<linearGradient id={`${ID}-rock`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={STONE.side} />
					<stop offset="100%" stopColor={STONE.sideDark} />
				</linearGradient>
			</defs>

			{/* axes */}
			<g opacity={ramp(frame, 0)}>
				<line x1={GX0 - 20} y1={440} x2={GX0 - 20} y2={70} stroke={TOK.inkMute} strokeWidth={2.5} />
				<path d={`M ${GX0 - 20} 62 l -8 14 l 16 0 Z`} fill={TOK.inkMute} />
				<text x={GX0 - 34} y={255} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} transform={`rotate(-90 ${GX0 - 34} 255)`}>energy</text>
				<text x={(GX0 + GX1) / 2} y={496} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>reaction progress →</text>
			</g>

			{/* the hill (uncatalysed profile) standing on a stone base */}
			<g opacity={ramp(frame, 2)}>
				<path d={`${pathFor(PEAK)} L ${GX1} 462 L ${GX0} 462 Z`} fill={`url(#${ID}-hill)`} />
				<rect x={GX0} y={440} width={GX1 - GX0} height={22} fill={`url(#${ID}-rock)`} />
				<path d={pathFor(PEAK)} fill="none" stroke={STONE.sideDark} strokeWidth={4} strokeDasharray={tunnel > 0 ? '9 7' : undefined} />
			</g>

			{/* the tunnel: the catalysed path through the hill */}
			<g opacity={tunnel} clipPath={`url(#${ID}-hillclip)`}>
				<path d={pathFor(PEAK_CAT, 0.2, 0.8)} fill="none" stroke="#4a4640" strokeWidth={44} transform="translate(0 -18)" opacity={0.9} />
				<path d={pathFor(PEAK_CAT, 0.2, 0.8)} fill="none" stroke="#6d6860" strokeWidth={34} transform="translate(0 -18)" />
			</g>
			<g opacity={tunnel}>
				<path d={pathFor(PEAK_CAT)} fill="none" stroke={theme.accent2} strokeWidth={5} />
				<text x={peakX} y={PEAK_CAT + 120} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>catalysed path</text>
			</g>

			{/* level labels */}
			<g opacity={ramp(frame, 8)}>
				<text x={xAt(0.08)} y={YR + 44} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>reactants</text>
				<text x={xAt(0.9)} y={YP + 38} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>products</text>
			</g>

			{/* molecules trying to get over */}
			{ENERGIES.map((_, k) => {
				const m = molecule(k);
				const peak = m.cat ? PEAK_CAT : PEAK;
				return <Ball key={k} id={ID} el="A" x={xAt(m.u)} y={yAt(m.u, peak) - 15} r={14} opacity={m.o} />;
			})}

			{/* Ea (uncatalysed) */}
			<g opacity={eaIn}>
				<line x1={GX0} y1={YR} x2={peakX - 30} y2={YR} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="5 5" />
				{arrow(peakX - 30, YR, PEAK + 4, grow(tEa), TOK.inkDim)}
				<rect x={peakX - 92} y={(YR + PEAK) / 2 - 58} width={50} height={32} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
				<text x={peakX - 67} y={(YR + PEAK) / 2 - 35} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={800}>Ea</text>
			</g>
			{/* lower Ea (catalysed) */}
			<g opacity={lowIn}>
				{arrow(peakX + 30, YR, PEAK_CAT + 4, grow(tLow), TOK.amber, 4 + idlePulse(frame) * 1.5)}
				<rect x={peakX + 42} y={(YR + PEAK_CAT) / 2 - 18} width={104} height={34} rx={17} fill="#ffffff" stroke={TOK.amber} strokeWidth={2} />
				<text x={peakX + 94} y={(YR + PEAK_CAT) / 2 + 6} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>lower Ea</text>
			</g>

			{/* ΔH unchanged */}
			<g opacity={dhIn}>
				<line x1={GX0 + 40} y1={YR} x2={GX1 - 40} y2={YR} stroke={theme.accent} strokeWidth={2} strokeDasharray="5 5" />
				{arrow(GX1 - 40, YR, YP - 2, grow(tDH), theme.accent)}
				<text x={GX1 - 52} y={YR - 12} textAnchor="end" fill={theme.accent} fontSize={19} fontWeight={800}>ΔH unchanged</text>
			</g>
		</svg>
	);
};
