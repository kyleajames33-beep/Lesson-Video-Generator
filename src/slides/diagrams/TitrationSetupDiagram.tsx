// TitrationSetupDiagram — a burette clamped above a conical flask, with a
// drop falling and the flask liquid shifting toward the endpoint colour.
// Teaches the physical setup of a titration. TOK palette.
//
// Beat plan (frames @ 30fps):
//   0    stand + burette + flask fade in
//   18   labels reveal
//   30+  drops fall on a loop; flask colour deepens toward endpoint

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

export const TitrationSetupDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;

	const setupOpacity = interpolate(frame, [0, 18], [0, 1], clampOpts);
	const labelOpacity = (d: number) => interpolate(frame, [d, d + 12], [0, 1], clampOpts);

	// Falling drop on a ~1.1s loop, starting after frame 30.
	const dropPhase = ((frame - 30) % 33) / 33; // 0..1
	const dropVisible = frame > 30;
	const dropY = 250 + dropPhase * 95;
	const dropOpacity = dropVisible ? interpolate(dropPhase, [0, 0.1, 0.85, 1], [0, 1, 1, 0]) : 0;

	// Flask liquid deepens toward a soft pink endpoint over the scene.
	const pinkMix = interpolate(frame, [40, 220], [0, 1], clampOpts);
	const flaskFill = `rgba(${Math.round(232 - pinkMix * 20)}, ${Math.round(239 - pinkMix * 120)}, ${Math.round(233 - pinkMix * 90)}, 0.6)`;

	const buretteX = 360;
	const flaskCx = 360;

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label="Titration setup: burette above a conical flask" style={{width: '100%'}}>
			{/* retort stand */}
			<g opacity={setupOpacity}>
				<rect x={150} y={420} width={150} height={12} rx={4} fill={TOK.inkDim} />
				<rect x={205} y={70} width={10} height={356} rx={4} fill={TOK.inkDim} />
				{/* clamp arm to burette */}
				<rect x={215} y={150} width={150} height={9} rx={4} fill={TOK.inkMute} />
			</g>

			{/* burette */}
			<g opacity={setupOpacity}>
				<rect x={buretteX - 16} y={90} width={32} height={170} rx={8} fill={`${TOK.chem2}14`} stroke={TOK.inkDim} strokeWidth={3} />
				{/* standard solution level */}
				<rect x={buretteX - 13} y={120} width={26} height={137} rx={4} fill={`${TOK.chem2}33`} />
				{/* tap + tip */}
				<rect x={buretteX - 6} y={260} width={12} height={20} fill={TOK.inkDim} />
				<path d={`M ${buretteX - 6} 280 L ${buretteX + 6} 280 L ${buretteX} 296 Z`} fill={TOK.inkDim} />
			</g>

			{/* falling drop */}
			<circle cx={flaskCx} cy={dropY} r={6} fill={TOK.chem2} opacity={dropOpacity} />

			{/* conical flask */}
			<g opacity={setupOpacity}>
				{/* liquid inside (triangle clipped) */}
				<path d={`M ${flaskCx - 70} 410 L ${flaskCx - 30} 360 L ${flaskCx + 30} 360 L ${flaskCx + 70} 410 Z`} fill={flaskFill} />
				{/* flask outline */}
				<path d={`M ${flaskCx - 18} 300 L ${flaskCx - 18} 330 L ${flaskCx - 78} 414
				          Q ${flaskCx - 80} 420 ${flaskCx - 72} 420 L ${flaskCx + 72} 420
				          Q ${flaskCx + 80} 420 ${flaskCx + 78} 414 L ${flaskCx + 18} 330 L ${flaskCx + 18} 300 Z`}
					fill="none" stroke={TOK.inkDim} strokeWidth={3.5} strokeLinejoin="round" />
				{/* neck rim */}
				<rect x={flaskCx - 24} y={296} width={48} height={9} rx={4} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={3} />
			</g>

			{/* labels */}
			<text x={buretteX + 70} y={150} textAnchor="start" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={labelOpacity(18)}>burette</text>
			<text x={buretteX + 70} y={178} textAnchor="start" fill={TOK.inkDim} fontSize={18} fontWeight={600} opacity={labelOpacity(24)}>standard solution</text>
			<text x={flaskCx} y={452} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={700} opacity={labelOpacity(30)}>add to the endpoint colour change</text>
		</svg>
	);
};
