// GibbsSpontaneityDiagram — ΔG sign decides spontaneity. A number line with
// ΔG < 0 (spontaneous, green), ΔG = 0 (equilibrium), ΔG > 0 (non-spontaneous,
// red/amber), plus the defining equation ΔG = ΔH − TΔS. TOK palette.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const NEG = '#d65a4a';

export const GibbsSpontaneityDiagram = () => {
	const frame = useCurrentFrame();
	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const eq = interpolate(frame, [70, 86], [0, 1], clampOpts);

	const axisY = 230, x0 = 90, x1 = 630, mid = (x0 + x1) / 2;
	const draw = interpolate(frame, [20, 44], [0, 1], clampOpts);

	return (
		<svg viewBox="0 0 720 380" role="img" aria-label="Gibbs free energy sign and spontaneity" style={{width: '100%'}}>
			{/* equation up top */}
			<text x={360} y={90} textAnchor="middle" fill={TOK.ink} fontSize={34} fontWeight={850} opacity={label(6)}>ΔG = ΔH − TΔS</text>

			{/* number line */}
			<line x1={x0} y1={axisY} x2={x0 + draw * (x1 - x0)} y2={axisY} stroke={TOK.inkDim} strokeWidth={4} opacity={fade} />
			{/* zero tick */}
			<line x1={mid} y1={axisY - 16} x2={mid} y2={axisY + 16} stroke={TOK.inkDim} strokeWidth={3} opacity={fade} />
			<text x={mid} y={axisY + 44} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700} opacity={label(48)}>ΔG = 0</text>
			<text x={mid} y={axisY - 28} textAnchor="middle" fill={TOK.inkMute} fontSize={16} fontWeight={600} opacity={label(54)}>equilibrium</text>

			{/* left zone: spontaneous (green) */}
			<rect x={x0} y={axisY + 10} width={mid - x0} height={6} fill={TOK.chem2} opacity={fade * 0.5} />
			<text x={(x0 + mid) / 2} y={axisY - 30} textAnchor="middle" fill={TOK.chem1} fontSize={24} fontWeight={850} opacity={label(40)}>ΔG &lt; 0</text>
			<text x={(x0 + mid) / 2} y={axisY + 44} textAnchor="middle" fill={TOK.chem1} fontSize={20} fontWeight={700} opacity={label(46)}>spontaneous</text>

			{/* right zone: non-spontaneous */}
			<rect x={mid} y={axisY + 10} width={x1 - mid} height={6} fill={NEG} opacity={fade * 0.5} />
			<text x={(mid + x1) / 2} y={axisY - 30} textAnchor="middle" fill={NEG} fontSize={24} fontWeight={850} opacity={label(44)}>ΔG &gt; 0</text>
			<text x={(mid + x1) / 2} y={axisY + 44} textAnchor="middle" fill={NEG} fontSize={20} fontWeight={700} opacity={label(50)}>non-spontaneous</text>

			{/* verdict */}
			<text x={360} y={336} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={700} opacity={eq}>
				the sign of ΔG decides whether a reaction goes
			</text>
		</svg>
	);
};
