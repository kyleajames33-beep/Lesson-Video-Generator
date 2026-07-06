// BondEnergyDiagram — breaking bonds absorbs energy (in), forming bonds
// releases energy (out); ΔH is the net. Two panels: reactant bonds
// breaking (endothermic, up arrows) vs product bonds forming (exothermic,
// down arrows), with the net shown. TOK palette.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const BondEnergyDiagram = () => {
	const frame = useCurrentFrame();
	const fade = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const label = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);
	const verdict = interpolate(frame, [96, 112], [0, 1], clampOpts);
	const grow = interpolate(frame, [20, 44], [0, 1], clampOpts);

	return (
		<svg viewBox="0 0 720 430" role="img" aria-label="Bond breaking absorbs energy, bond forming releases energy" style={{width: '100%'}}>
			{/* LEFT: breaking bonds — absorb (arrow up, chem green) */}
			<text x={180} y={80} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={label(8)}>breaking bonds</text>
			<text x={180} y={108} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={600} opacity={label(14)}>absorbs energy (+)</text>
			{/* two atoms pulling apart */}
			<g opacity={fade}>
				<circle cx={150 - grow * 16} cy={200} r={26} fill={TOK.chem3} stroke={TOK.chem2} strokeWidth={3} />
				<circle cx={210 + grow * 16} cy={200} r={26} fill={TOK.chem3} stroke={TOK.chem2} strokeWidth={3} />
				<line x1={176} y1={200} x2={184} y2={200} stroke={TOK.inkMute} strokeWidth={4} strokeDasharray="3 5" />
			</g>
			<text x={180} y={300} textAnchor="middle" fontSize={40} fill={TOK.chem2} opacity={fade}>↑</text>
			<text x={180} y={336} textAnchor="middle" fill={TOK.chem1} fontSize={20} fontWeight={700} opacity={label(40)}>energy in</text>

			{/* divider */}
			<line x1={360} y1={120} x2={360} y2={340} stroke={TOK.rule} strokeWidth={2} strokeDasharray="10 10" opacity={fade} />

			{/* RIGHT: forming bonds — release (arrow down, amber) */}
			<text x={540} y={80} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={label(11)}>forming bonds</text>
			<text x={540} y={108} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={600} opacity={label(17)}>releases energy (−)</text>
			<g opacity={fade}>
				<circle cx={512 + grow * 14} cy={200} r={26} fill="#fdeccb" stroke={TOK.amber} strokeWidth={3} />
				<circle cx={568 - grow * 14} cy={200} r={26} fill="#fdeccb" stroke={TOK.amber} strokeWidth={3} />
				<line x1={538} y1={200} x2={542} y2={200} stroke={TOK.amber} strokeWidth={5} />
			</g>
			<text x={540} y={300} textAnchor="middle" fontSize={40} fill={TOK.amber} opacity={fade}>↓</text>
			<text x={540} y={336} textAnchor="middle" fill={TOK.amber} fontSize={20} fontWeight={700} opacity={label(46)}>energy out</text>

			{/* verdict */}
			<text x={360} y={404} textAnchor="middle" fill={TOK.chem1} fontSize={23} fontWeight={800} opacity={verdict}>
				ΔH = energy in (break) − energy out (form)
			</text>
		</svg>
	);
};
