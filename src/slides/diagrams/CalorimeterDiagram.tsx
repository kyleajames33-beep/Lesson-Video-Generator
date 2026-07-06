// CalorimeterDiagram — an insulated cup calorimeter: reaction inside warms
// the water, thermometer rises. Teaches q = mcΔT (heat measured via the
// water's temperature change). TOK palette.
//
// Beat plan (frames @ 30fps):
//   0    cup + water + thermometer fade in
//   14   labels reveal
//   20+  mercury rises and "heat" arrows pulse from reaction into water

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const CalorimeterDiagram = () => {
	const frame = useCurrentFrame();
	const t = frame / 30;

	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);

	// thermometer mercury rises over the scene
	const rise = interpolate(frame, [24, 150], [0, 1], clampOpts);
	const bulbY = 250; // bottom of column
	const colTop = 96;
	const mercTop = bulbY - rise * (bulbY - colTop);

	// heat arrows pulse
	const pulse = 0.5 + 0.5 * Math.sin(t * 2.2);

	const cupL = 250, cupR = 470, cupTop = 150, cupBottom = 380;

	return (
		<svg viewBox="0 0 720 440" role="img" aria-label="Insulated calorimeter with thermometer" style={{width: '100%'}}>
			{/* insulated cup walls (double line = insulation) */}
			<g opacity={fade}>
				<path d={`M ${cupL} ${cupTop} L ${cupL} ${cupBottom} Q ${cupL} ${cupBottom + 18} ${cupL + 18} ${cupBottom + 18} L ${cupR - 18} ${cupBottom + 18} Q ${cupR} ${cupBottom + 18} ${cupR} ${cupBottom} L ${cupR} ${cupTop}`}
					fill="none" stroke={TOK.inkDim} strokeWidth={4} strokeLinejoin="round" />
				<path d={`M ${cupL - 12} ${cupTop} L ${cupL - 12} ${cupBottom + 4} Q ${cupL - 12} ${cupBottom + 30} ${cupL + 14} ${cupBottom + 30} L ${cupR - 14} ${cupBottom + 30} Q ${cupR + 12} ${cupBottom + 30} ${cupR + 12} ${cupBottom + 4} L ${cupR + 12} ${cupTop}`}
					fill="none" stroke={TOK.inkMute} strokeWidth={3} strokeLinejoin="round" opacity={0.5} />
				{/* lid */}
				<rect x={cupL - 18} y={cupTop - 14} width={(cupR - cupL) + 36} height={14} rx={5} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={3} />
			</g>

			{/* water */}
			<rect x={cupL + 6} y={cupTop + 60} width={(cupR - cupL) - 12} height={cupBottom - cupTop - 64} rx={6}
				fill={`${TOK.chem2}22`} opacity={fade} />

			{/* reaction core at the bottom — glowing */}
			<circle cx={(cupL + cupR) / 2} cy={cupBottom - 50} r={34 + pulse * 4}
				fill={`${TOK.amber}${Math.round((0.25 + pulse * 0.25) * 255).toString(16).padStart(2, '0')}`} opacity={fade} />
			<circle cx={(cupL + cupR) / 2} cy={cupBottom - 50} r={20} fill={TOK.amber} opacity={fade * 0.8} />

			{/* heat arrows rising from reaction into water */}
			{[-40, 0, 40].map((dx, i) => {
				const a = (t * 0.9 + i * 0.33) % 1;
				const y = (cupBottom - 80) - a * 80;
				return <text key={i} x={(cupL + cupR) / 2 + dx} y={y} textAnchor="middle" fontSize={22} fill={TOK.amber} opacity={fade * (1 - a) * 0.9}>↑</text>;
			})}

			{/* thermometer */}
			<g opacity={fade}>
				<rect x={530} y={colTop - 8} width={20} height={bulbY - colTop + 8} rx={10} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={3} />
				<circle cx={540} cy={bulbY + 8} r={18} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={3} />
				{/* mercury */}
				<rect x={535} y={mercTop} width={10} height={bulbY + 8 - mercTop} fill={TOK.amber} />
				<circle cx={540} cy={bulbY + 8} r={12} fill={TOK.amber} />
			</g>

			{/* labels */}
			<text x={(cupL + cupR) / 2} y={cupBottom + 60} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={700} opacity={label(14)}>reaction releases heat</text>
			<text x={540} y={70} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={label(20)}>ΔT measured</text>
			<text x={360} y={428} textAnchor="middle" fill={TOK.chem1} fontSize={24} fontWeight={800} opacity={label(60)}>q = m c ΔT</text>
		</svg>
	);
};
