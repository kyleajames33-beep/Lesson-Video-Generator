// GasVolumeComparisonDiagram — teaches Avogadro's law directly:
// two flasks of the SAME volume, one holding 12 tiny helium atoms, the
// other holding 12 much larger CO₂ molecules. Same particle COUNT,
// very different molecule size, identical volume, different mass.
//
// Built with TOK tokens (not the legacy indigo diagram CSS) so it
// matches the current light/chem-green gold-standard palette.
//
// Design notes (v2, after review):
//   - Strong size contrast (He r=6 vs CO₂ r=15) so "different molecule"
//     reads instantly.
//   - Particles fill the conical flask shape (rows widen toward the base)
//     and drift gently, so it reads as GAS, not settled liquid.
//   - Identical 2-3-3-4 layout both sides so the eye can match the count
//     1:1. No confusing internal fill-line — identical flask outlines +
//     verdict text carry "same volume".

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

const clampOpts = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// 12 particles, arranged to fill a conical flask: narrow at top (neck),
// wide at the base. Identical layout both sides so count is matchable.
// dx = horizontal offset from flask centre; y = absolute svg y.
const LAYOUT: {dx: number; y: number}[] = [
	{dx: -26, y: 196}, {dx: 26, y: 196},
	{dx: -48, y: 244}, {dx: 0, y: 244}, {dx: 48, y: 244},
	{dx: -60, y: 290}, {dx: 0, y: 290}, {dx: 60, y: 290},
	{dx: -80, y: 334}, {dx: -27, y: 334}, {dx: 27, y: 334}, {dx: 80, y: 334},
];

export const GasVolumeComparisonDiagram = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const t = frame / fps;

	const flaskOpacity = interpolate(frame, [0, 16], [0, 1], clampOpts);
	const labelOpacity = (delay: number) => interpolate(frame, [delay, delay + 12], [0, 1], clampOpts);

	const particleScale = (i: number) => {
		const p = spring({frame: frame - 24 - i * 2.2, fps, config: {damping: 13, stiffness: 240, mass: 0.6}});
		return Math.max(0, p);
	};

	const massProgress = (delay: number) =>
		spring({frame: frame - delay, fps, config: {damping: 11, stiffness: 300, mass: 0.6}});
	const heMass = massProgress(80);
	const coMass = massProgress(86);
	const numScale = (p: number) => Math.max(0, p);
	const numOpacity = (p: number) => interpolate(p, [0, 0.3], [0, 1], {extrapolateRight: 'clamp'});

	const verdictOpacity = interpolate(frame, [104, 120], [0, 1], clampOpts);

	const Flask = ({
		base,
		accent,
		fillTint,
		particleR,
		particleFill,
		label,
		labelDelay,
		gradId,
	}: {
		base: number;
		accent: string;
		fillTint: string;
		particleR: number;
		particleFill: string;
		label: string;
		labelDelay: number;
		gradId: string;
	}) => {
		const cx = base + 120;
		const neckL = base + 102;
		const neckR = base + 138;
		const bulbL = base + 40;
		const bulbR = base + 200;
		const bulbBottom = 362;

		return (
			<g opacity={flaskOpacity}>
				<defs>
					<linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor={fillTint} stopOpacity={0.05} />
						<stop offset="100%" stopColor={fillTint} stopOpacity={0.22} />
					</linearGradient>
				</defs>

				{/* base shadow */}
				<ellipse cx={cx} cy={bulbBottom + 16} rx={96} ry={12} fill="rgba(0,0,0,0.10)" />

				{/* flask body (conical) */}
				<path
					d={`M ${neckL} 150 L ${bulbL} ${bulbBottom - 28}
					    Q ${bulbL} ${bulbBottom} ${bulbL + 28} ${bulbBottom}
					    L ${bulbR - 28} ${bulbBottom}
					    Q ${bulbR} ${bulbBottom} ${bulbR} ${bulbBottom - 28}
					    L ${neckR} 150 Z`}
					fill={`url(#${gradId})`}
					stroke={TOK.inkDim}
					strokeWidth={3.5}
					strokeLinejoin="round"
				/>
				{/* neck */}
				<rect x={neckL} y={92} width={neckR - neckL} height={62} rx={5}
					fill={`url(#${gradId})`} stroke={TOK.inkDim} strokeWidth={3.5} />
				{/* rim */}
				<rect x={neckL - 8} y={84} width={(neckR - neckL) + 16} height={12} rx={6}
					fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={3} />

				{/* particles — same count, drift gently (gas in motion) */}
				{LAYOUT.map((pos, i) => {
					const s = particleScale(i);
					const phase = i * 0.7;
					const driftX = Math.sin(t * 0.7 + phase) * 3;
					const driftY = Math.cos(t * 0.55 + phase) * 2.4;
					const px = cx + pos.dx + driftX;
					const py = pos.y + driftY;
					return (
						<circle
							key={i}
							cx={px}
							cy={py}
							r={particleR}
							fill={particleFill}
							stroke={accent}
							strokeWidth={2}
							transform={`translate(${px},${py}) scale(${s}) translate(${-px},${-py})`}
							opacity={interpolate(s, [0, 0.25], [0, 1], {extrapolateRight: 'clamp'})}
						/>
					);
				})}

				{/* gas label */}
				<text x={cx} y={70} textAnchor="middle" fill={TOK.ink} fontSize={30} fontWeight={800}
					opacity={labelOpacity(labelDelay)}>
					{label}
				</text>
			</g>
		);
	};

	return (
		<svg viewBox="0 0 720 470" role="img" aria-label="Two equal-volume flasks: helium and carbon dioxide" style={{width: '100%'}}>
			{/* He — 12 tiny particles */}
			<Flask base={40} accent={TOK.chem2} fillTint={TOK.chem2} particleR={6} particleFill={TOK.chem3}
				label="1 mol He" labelDelay={14} gradId="heGrad" />
			{/* CO₂ — 12 much larger particles, same count */}
			<Flask base={400} accent={TOK.amber} fillTint={TOK.amber} particleR={15} particleFill="#fdeccb"
				label="1 mol CO₂" labelDelay={18} gradId="coGrad" />

			{/* centre divider */}
			<line x1={360} y1={104} x2={360} y2={372} stroke={TOK.rule} strokeWidth={2} strokeDasharray="10 10" opacity={flaskOpacity} />

			{/* mass numbers pop */}
			<g transform={`translate(160,412) scale(${numScale(heMass)}) translate(-160,-412)`} opacity={numOpacity(heMass)}>
				<text x={160} y={412} textAnchor="middle" fill={TOK.chem1} fontSize={36} fontWeight={900}>4 g</text>
			</g>
			<g transform={`translate(520,412) scale(${numScale(coMass)}) translate(-520,-412)`} opacity={numOpacity(coMass)}>
				<text x={520} y={412} textAnchor="middle" fill={TOK.amberDim} fontSize={36} fontWeight={900}>44 g</text>
			</g>

			{/* verdict */}
			<text x={360} y={456} textAnchor="middle" fill={TOK.inkDim} fontSize={24} fontWeight={700} opacity={verdictOpacity}>
				same count, same volume — different mass
			</text>
		</svg>
	);
};
