// ReductionPotentialLadderDiagram — a vertical E° scale with H⁺/H₂ = 0 as
// the reference. More positive (top) = stronger oxidant/cathode; more
// negative (bottom) = stronger reductant/anode. A shaded gap between a
// chosen cathode and anode shows E°cell = E°(cathode) − E°(anode).
// Illustrative (representative half-cells). TOK palette.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Representative standard reduction potentials (V).
const CELLS = [
	{label: 'Ag⁺ / Ag', e: 0.80},
	{label: 'Cu²⁺ / Cu', e: 0.34},
	{label: 'H⁺ / H₂', e: 0.00},
	{label: 'Zn²⁺ / Zn', e: -0.76},
	{label: 'Mg²⁺ / Mg', e: -2.37},
];

export const ReductionPotentialLadderDiagram = () => {
	const frame = useCurrentFrame();
	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const gap = interpolate(frame, [70, 92], [0, 1], clampOpts);

	// map E° (+0.9..-2.5) to y (top..bottom)
	const yTop = 70, yBot = 380, eMax = 0.95, eMin = -2.55;
	const yOf = (e: number) => yTop + ((eMax - e) / (eMax - eMin)) * (yBot - yTop);
	const axisX = 300;

	const cathode = CELLS[0]; // Ag (top)
	const anode = CELLS[4];   // Mg (bottom)

	return (
		<svg viewBox="0 0 720 440" role="img" aria-label="Standard reduction potential ladder" style={{width: '100%'}}>
			{/* axis */}
			<line x1={axisX} y1={yTop - 10} x2={axisX} y2={yBot + 10} stroke={TOK.inkDim} strokeWidth={4} opacity={fade} />
			<text x={axisX} y={40} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={label(6)}>E° (volts)</text>
			{/* top/bottom descriptors */}
			<text x={axisX + 150} y={yTop + 6} textAnchor="middle" fill={TOK.amber} fontSize={16} fontWeight={700} opacity={label(50)}>stronger oxidant</text>
			<text x={axisX + 150} y={yBot + 6} textAnchor="middle" fill={TOK.chem1} fontSize={16} fontWeight={700} opacity={label(56)}>stronger reductant</text>

			{/* shaded cell gap (Ag cathode to Mg anode) */}
			<rect x={axisX - 6} y={yOf(cathode.e)} width={12} height={yOf(anode.e) - yOf(cathode.e)} fill={`${TOK.chem2}44`} opacity={gap} />
			<text x={axisX - 60} y={(yOf(cathode.e) + yOf(anode.e)) / 2} textAnchor="middle" fill={TOK.chem1} fontSize={18} fontWeight={800} opacity={gap} transform={`rotate(-90 ${axisX - 60} ${(yOf(cathode.e) + yOf(anode.e)) / 2})`}>E°cell = +3.17 V</text>

			{/* tick marks + labels */}
			{CELLS.map((c, i) => {
				const y = yOf(c.e);
				const isZero = c.e === 0;
				return (
					<g key={i} opacity={fade}>
						<line x1={axisX - 10} y1={y} x2={axisX + 10} y2={y} stroke={isZero ? TOK.inkDim : TOK.inkMute} strokeWidth={isZero ? 4 : 3} />
						<circle cx={axisX} cy={y} r={7} fill={c === cathode ? TOK.amber : c === anode ? TOK.chem1 : TOK.inkMute} />
						<text x={axisX + 28} y={y + 6} textAnchor="start" fill={TOK.ink} fontSize={20} fontWeight={isZero ? 800 : 600} opacity={label(8 + i * 5)}>
							{c.label}
						</text>
						<text x={axisX - 28} y={y + 6} textAnchor="end" fontFamily="monospace" fill={TOK.inkDim} fontSize={18} opacity={label(8 + i * 5)}>
							{c.e > 0 ? '+' : ''}{c.e.toFixed(2)}
						</text>
						{isZero ? <text x={axisX + 150} y={y - 8} textAnchor="middle" fill={TOK.inkMute} fontSize={14} fontWeight={600} opacity={label(40)}>reference = 0</text> : null}
					</g>
				);
			})}

			<text x={360} y={424} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700} opacity={gap}>
				E°cell = E°(cathode) − E°(anode)
			</text>
		</svg>
	);
};
