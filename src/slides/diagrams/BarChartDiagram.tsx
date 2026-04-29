import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Bar = {label: string; value: number};
type Props = {bars: Bar[]; unit?: string; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};
const PALETTE = ['#4f46e5', '#7c3aed', '#f59e0b', '#0891b2', '#10b981', '#e11d48'];

const SUPERS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const toSup = (n: number) => String(n).split('').map(d => SUPERS[parseInt(d, 10)]).join('');
const formatPower = (v: number) => `10${toSup(v)}`;

export const BarChartDiagram = ({bars, unit = '', delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const n = bars.length;
	const maxVal = Math.max(1, ...bars.map(b => b.value));
	const chartTop = 36;
	const chartH = 240;
	const chartBottom = chartTop + chartH;
	const chartLeft = 58;
	const chartW = 590;
	const gap = chartW / n;
	const barW = Math.min(88, gap * 0.58);

	const viewH = 500;

	// Each bar's "spotlight moment" — when its callout pops on with focus
	const spotlightStart = delay + n * 12 + 30;
	const spotlightHold = 70;

	return (
		<svg viewBox={`0 0 700 ${viewH}`} className="diagram">
			{/* Y-axis */}
			<line x1={chartLeft} y1={chartTop} x2={chartLeft} y2={chartBottom + 4} stroke="#e7e5e4" strokeWidth="2" />
			<line x1={chartLeft} y1={chartBottom} x2={chartLeft + chartW + 8} y2={chartBottom} stroke="#e7e5e4" strokeWidth="2" />

			{/* Y-axis label */}
			<text
				x={14} y={chartTop + chartH / 2}
				textAnchor="middle" fontSize="17" fill="#a8a29e" fontWeight="600"
				transform={`rotate(-90, 14, ${chartTop + chartH / 2})`}
			>
				log₁₀ scale
			</text>

			{unit ? (
				<text x={chartLeft + chartW / 2} y={viewH - 6} textAnchor="middle" fontSize="18" fill="#a8a29e" fontWeight="500">
					{unit}
				</text>
			) : null}

			{bars.map((bar, i) => {
				const color = PALETTE[i % PALETTE.length];
				const barP = spring({
					frame: frame - delay - i * 12,
					fps,
					config: {damping: 20, stiffness: 140, mass: 0.85},
				});
				const barH = interpolate(barP, [0, 1], [0, chartH * (bar.value / maxVal)], clamp);
				const cx = chartLeft + gap * (i + 0.5);
				const x = cx - barW / 2;
				const y = chartBottom - barH;
				const numOpacity = interpolate(barP, [0.6, 1], [0, 1], clamp);

				// Spotlight: each bar gets a focused moment in sequence
				const spotAt = spotlightStart + i * spotlightHold;
				const spotEnd = spotAt + spotlightHold;
				const isSpot = frame >= spotAt && frame < spotEnd;
				const spotProgress = interpolate(frame, [spotAt, spotAt + 8, spotEnd - 8, spotEnd], [0, 1, 1, 0], clamp);

				// Glow ring scales up when this bar is the spotlight
				const glowR = interpolate(spotProgress, [0, 1], [barW * 0.3, barW * 0.85]);
				const glowOp = interpolate(spotProgress, [0, 1], [0, 0.45]);

				// Other bars dim slightly during a spotlight elsewhere
				const anyoneSpot = frame >= spotlightStart && frame < spotlightStart + n * spotlightHold;
				const dim = anyoneSpot && !isSpot ? 0.45 : 1;

				const powerLabel = formatPower(bar.value);
				const labelY = chartBottom + 18;

				// Callout bubble that pops up beside the bar during its spotlight
				const calloutY = y - 70;
				const calloutOp = spotProgress;
				const calloutScale = interpolate(spotProgress, [0, 1], [0.6, 1], clamp);
				const tx = cx;
				const ty = calloutY;

				return (
					<g key={i} opacity={dim}>
						{/* Spotlight glow */}
						{glowOp > 0 ? (
							<ellipse
								cx={cx}
								cy={y + barH / 2}
								rx={barW * 0.95}
								ry={glowR}
								fill={color}
								opacity={glowOp * 0.18}
							/>
						) : null}

						{/* Bar body */}
						<rect x={x} y={y} width={barW} height={barH} rx="6"
							fill={`${color}20`} stroke={color} strokeWidth={isSpot ? 4 : 2.5} />
						<rect x={x} y={y} width={barW} height={Math.min(6, barH)} rx="3"
							fill={color} opacity={numOpacity} />

						{/* Value label above bar */}
						<text x={cx} y={y - 10} textAnchor="middle" fontSize="24"
							fontWeight="800" fill={color} opacity={numOpacity}>
							{powerLabel}
						</text>

						{/* Bar label rotated 40° */}
						<text
							x={cx} y={labelY}
							textAnchor="end" fontSize="20" fontWeight="600" fill="#78716c"
							transform={`rotate(-40, ${cx}, ${labelY})`}
						>
							{bar.label}
						</text>

						{/* Callout bubble during spotlight */}
						{calloutOp > 0.02 ? (
							<g
								opacity={calloutOp}
								transform={`translate(${tx}, ${ty}) scale(${calloutScale}) translate(${-tx}, ${-ty})`}
							>
								<rect
									x={cx - 90} y={calloutY - 26}
									width={180} height={44} rx={22}
									fill={color} opacity={0.95}
								/>
								<text
									x={cx} y={calloutY + 4}
									textAnchor="middle" fontSize="22" fontWeight="800" fill="#ffffff"
								>
									{bar.label}
								</text>
								{/* Tail pointing down to bar */}
								<polygon
									points={`${cx - 8},${calloutY + 18} ${cx + 8},${calloutY + 18} ${cx},${calloutY + 32}`}
									fill={color}
								/>
							</g>
						) : null}
					</g>
				);
			})}
		</svg>
	);
};
