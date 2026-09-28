// CellCycleDiagram — the cell cycle as a stone ring (G1 → S → G2 → M) with a
// self-drawing graph of DNA per cell beside it.
//
// A marker walks round the ring as the narration names each phase, and the
// graph's pen moves with it:
//   G1  the cell grows; DNA per cell stays at 1×
//   S   DNA replicates, 1× → 2×; the chromosome in the model cell becomes two
//       sister chromatids joined at a centromere
//   G2  more growth and a DNA check (tick); still 2×
//   M   mitosis then cytokinesis: two cells, each back to 1×
// Interphase (G1 + S + G2) is drawn as most of the ring and M as a short arc;
// the arc sizes are schematic (the scene gives no times), only the order and
// the DNA amounts are facts. "Copy first, in S. Divide later, in M."
//
// Props: `at` (frames after `delay`): interphase / g1 / s / g2 / m / rule.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {CORAL, CellBody, Chromosome, GlossDefs, ease, fadeAt, lerp, mix} from './shared';

export type CellCycleProps = {
	at?: {interphase?: number; g1?: number; s?: number; g2?: number; m?: number; rule?: number};
	delay?: number;
};

const ID = 'b12m5cyc';
const W = 760, H = 530;
const CX = 190, CY = 262, R = 138, TH = 42;
// Schematic arc shares (start fraction, end fraction), clockwise from the top.
const ARCS = [
	{key: 'g1', label: 'G1', sub: 'grow', a0: 0, a1: 0.4},
	{key: 's', label: 'S', sub: 'copy DNA', a0: 0.4, a1: 0.68},
	{key: 'g2', label: 'G2', sub: 'check, prepare', a0: 0.68, a1: 0.88},
	{key: 'm', label: 'M', sub: 'divide', a0: 0.88, a1: 1},
] as const;

const pt = (f: number, r: number) => {
	const a = f * Math.PI * 2 - Math.PI / 2;
	return {x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r};
};
const arcPath = (f0: number, f1: number, r0: number, r1: number) => {
	const large = f1 - f0 > 0.5 ? 1 : 0;
	const a = pt(f0, r1), b = pt(f1, r1), c = pt(f1, r0), d = pt(f0, r0);
	return `M ${a.x} ${a.y} A ${r1} ${r1} 0 ${large} 1 ${b.x} ${b.y} L ${c.x} ${c.y} A ${r0} ${r0} 0 ${large} 0 ${d.x} ${d.y} Z`;
};

// Graph box
const GX0 = 430, GX1 = 730, GY0 = 150, GY1 = 360;

export const CellCycleDiagram = ({at = {}, delay = 62}: CellCycleProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const tI = at.interphase ?? 40, tG1 = at.g1 ?? 80, tS = at.s ?? 300, tG2 = at.g2 ?? 600, tM = at.m ?? 900, tR = at.rule ?? 1100;
	const beats = [tG1, tS, tG2, tM];

	// Position round the ring (0..1): each phase is walked over from its beat to the next.
	const walk = (() => {
		for (let k = ARCS.length - 1; k >= 0; k--) {
			if (frame >= beats[k]) {
				const next = k < 3 ? beats[k + 1] : beats[k] + 90;
				const t = ease(frame, beats[k], Math.min(next, beats[k] + 150));
				return lerp(ARCS[k].a0, ARCS[k].a1, t);
			}
		}
		return 0;
	})();
	const activeIdx = beats.reduce((acc, b, k) => (frame >= b ? k : acc), -1);

	// DNA per cell at ring position f (1 → 2 across S, back to 1 at the end of M).
	const dnaAt = (f: number) => {
		if (f <= ARCS[1].a0) return 1;
		if (f <= ARCS[1].a1) return 1 + (f - ARCS[1].a0) / (ARCS[1].a1 - ARCS[1].a0);
		if (f < 0.97) return 2;
		return 1;
	};
	const gx = (f: number) => GX0 + f * (GX1 - GX0);
	const gy = (v: number) => GY1 - ((v - 0.5) / 2) * (GY1 - GY0) * 1.15;
	const penD = (() => {
		const steps = 80;
		let d = '';
		for (let i = 0; i <= steps; i++) {
			const f = (walk * i) / steps;
			if (f > 0.97 && f - walk / steps <= 0.97) d += ` L ${gx(0.97)} ${gy(2)} L ${gx(0.97)} ${gy(1)}`;
			d += `${i === 0 ? 'M' : ' L'} ${gx(f)} ${gy(dnaAt(f))}`;
		}
		return d;
	})();

	const marker = pt(walk, R - TH / 2);
	const replicated = ease(frame, tS + 30, tS + 150);
	const grow = lerp(0.82, 1, ease(frame, tG1, tG1 + 120));
	const divide = ease(frame, tM + 60, tM + 160);
	const settled = frame > tM + 170;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Cell cycle: G1 growth, S DNA replication, G2 preparation, then M phase division" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: theme.accent, mat: CORAL}} />

			{/* Ring: a stone collar with the four phases painted on */}
			<g opacity={fadeAt(frame, 0, 16)}>
				<ellipse cx={CX + 8} cy={CY + R + 18} rx={R * 0.95} ry={16} fill="rgba(40,36,30,0.16)" />
				<circle cx={CX} cy={CY + 8} r={R + 4} fill="#8f8b83" />
				<circle cx={CX} cy={CY} r={R + 4} fill="#cfccc5" />
				<circle cx={CX} cy={CY} r={R - TH - 4} fill="#f7f7f5" />
				{ARCS.map((a, k) => {
					const on = k === activeIdx;
					const base = a.key === 'm' ? CORAL : a.key === 's' ? theme.accent : mix(theme.accent, '#ffffff', 0.55);
					return (
						<g key={a.key}>
							<path d={arcPath(a.a0 + 0.004, a.a1 - 0.004, R - TH, R)} fill={base} opacity={on ? 1 : 0.75} stroke={on ? TOK.ink : 'none'} strokeWidth={on ? 2 : 0} />
						</g>
					);
				})}
				{ARCS.map((a) => {
					const p = pt((a.a0 + a.a1) / 2, R - TH / 2);
					return <text key={a.key} x={p.x} y={p.y + 7} textAnchor="middle" fill="#ffffff" fontSize={20} fontWeight={800}>{a.label}</text>;
				})}
			</g>
			{/* interphase bracket label */}
			<g opacity={fadeAt(frame, tI)}>
				<path d={arcPath(0.004, 0.876, R + 10, R + 16)} fill={TOK.inkMute} />
				<text x={CX - R + 4} y={CY - R + 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>interphase</text>
			</g>

			{/* The model cell in the middle of the ring */}
			<g opacity={fadeAt(frame, 6)}>
				{divide <= 0 ? (
					<g transform={`translate(${CX},${CY}) scale(${grow}) translate(${-CX},${-CY})`}>
						<CellBody id={ID} cx={CX} cy={CY} rx={66} ry={58} />
						<Chromosome id={ID} x={CX} y={CY + idleBob(frame, 1, 1.2)} len={50} w={12} color="pat" chromatids={replicated > 0.5 ? 2 : 1} splay={lerp(0, 7, replicated)} />
						{frame > tG2 + 40 && frame < tM + 60 && (
							<g opacity={fadeAt(frame, tG2 + 40)}>
								<circle cx={CX + 44} cy={CY - 38} r={14} fill={theme.accent} />
								<path d={`M ${CX + 37} ${CY - 38} L ${CX + 42} ${CY - 32} L ${CX + 51} ${CY - 44}`} fill="none" stroke="#ffffff" strokeWidth={3.5} strokeLinecap="round" />
							</g>
						)}
					</g>
				) : (
					<g>
						<CellBody id={ID} cx={CX} cy={CY} rx={66} ry={58} split={divide} gap={6 * divide} />
						{[-1, 1].map((s) => (
							<Chromosome key={s} id={ID} x={CX + s * lerp(4, 40, divide)} y={CY + idleBob(frame, s + 3, settled ? 1.2 : 0)} len={50} w={12} color="pat" chromatids={1} />
						))}
					</g>
				)}
			</g>

			{/* Marker on the ring */}
			{activeIdx >= 0 && (
				<g>
					<circle cx={marker.x} cy={marker.y} r={14 + idlePulse(frame, 40) * 2} fill="#ffffff" stroke={TOK.ink} strokeWidth={3} />
				</g>
			)}

			{/* Graph: DNA per cell */}
			<g opacity={fadeAt(frame, tI)}>
				<text x={(GX0 + GX1) / 2} y={GY0 - 36} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>DNA per cell</text>
				<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={GX0} y1={GY0 - 10} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				{[1, 2].map((v) => (
					<g key={v}>
						<line x1={GX0} y1={gy(v)} x2={GX1} y2={gy(v)} stroke={TOK.rule} strokeWidth={1.5} strokeDasharray="4 5" />
						<text x={GX0 - 10} y={gy(v) + 6} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{v}×</text>
					</g>
				))}
				{ARCS.map((a) => (
					<g key={a.key}>
						<line x1={gx(a.a1)} y1={GY1} x2={gx(a.a1)} y2={GY1 + 6} stroke={TOK.inkMute} strokeWidth={2} />
						<text x={gx((a.a0 + a.a1) / 2)} y={GY1 + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{a.label}</text>
					</g>
				))}
				<path d={penD} fill="none" stroke={theme.accent} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
				{activeIdx >= 0 && <circle cx={gx(walk)} cy={gy(dnaAt(walk))} r={7} fill={theme.accent} stroke="#ffffff" strokeWidth={2} />}
			</g>
			{/* Phase note under the graph */}
			{ARCS.map((a, k) => (
				<text key={a.key} x={(GX0 + GX1) / 2} y={GY1 + 66} textAnchor="middle" fill={a.key === 'm' ? CORAL : theme.accent} fontSize={19} fontWeight={800} opacity={k === activeIdx ? fadeAt(frame, beats[k]) : 0}>
					{a.label}: {a.sub}
				</text>
			))}

			{/* Rule */}
			<g opacity={fadeAt(frame, tR)}>
				<text x={W / 2} y={505} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>Copy first, in S. Divide later, in M.</text>
			</g>
		</svg>
	);
};
