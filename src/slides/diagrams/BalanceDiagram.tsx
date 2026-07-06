import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK} from '../../styles/tokens';

type Props = {leftLabel: string; rightLabel: string; leftValue: number; rightValue: number; delay?: number};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

// Brand palette for this diagram. Beam + left pan use the chem teal,
// right-pan and accent callouts use amber (the universal emphasis
// colour). Keeps the diagram visually consistent with the rest of the
// system instead of using off-palette indigo + orange.
const BEAM = TOK.chem1;
const BEAM_DARK = TOK.chem2;
const LEFT_ACCENT = TOK.chem2;
const RIGHT_ACCENT = TOK.amber;
const CALLOUT = TOK.amber;
const TEXT_DIM = 'rgba(232,239,233,0.78)';

export const BalanceDiagram = ({leftLabel, rightLabel, leftValue, rightValue, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const appear = spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 160, mass: 0.8}});
	const tiltSpring = spring({frame: frame - delay - 22, fps, config: {damping: 16, stiffness: 90, mass: 1.4}});

	const opacity = interpolate(appear, [0, 1], [0, 1], clamp);
	const total = leftValue + rightValue;
	const tiltTarget = total > 0 ? ((rightValue - leftValue) / total) * 12 : 0;
	const tilt = interpolate(tiltSpring, [0, 1], [0, tiltTarget]);

	// Coordinates centred for a 700×460 viewBox
	const px = 350;
	const py = 175;
	const arm = 210;          // beam half-length (was 192)
	const panW = 132;         // pan width (was 108)
	const panH = 86;          // pan height (was 74)
	const ropeLen = 56;

	// Annotation timing
	const circleAt = delay + 70;
	const circleP = spring({frame: frame - circleAt, fps, config: {damping: 15, stiffness: 130, mass: 0.9}});
	const circleR = interpolate(circleP, [0, 1], [12, 92], clamp);
	const circleOp = interpolate(circleP, [0, 0.4, 1], [0, 0.85, 0.78], clamp);

	const labelAt = circleAt + 24;
	const labelP = spring({frame: frame - labelAt, fps, config: {damping: 14, stiffness: 160, mass: 0.8}});
	const labelOp = interpolate(labelP, [0, 0.5], [0, 1], clamp);

	return (
		<svg viewBox="0 0 700 460" className="diagram" style={{opacity}}>
			{/* Post + base — fixed (outside rotating group) */}
			<rect x={px - 7} y={py} width="14" height="132" rx="4" fill="#6b7770" />
			<polygon
				points={`${px - 50},${py + 132} ${px + 50},${py + 132} ${px},${py + 180}`}
				fill="#4a544e"
			/>
			<rect x={px - 80} y={py + 180} width="160" height="12" rx="5" fill="#6b7770" />

			{/* Rotating assembly */}
			<g transform={`rotate(${tilt},${px},${py})`}>
				{/* Beam */}
				<rect
					x={px - arm - 16}
					y={py - 8}
					width={(arm + 16) * 2}
					height="16"
					rx="8"
					fill={BEAM}
				/>
				<circle cx={px} cy={py} r="14" fill={BEAM_DARK} />

				{/* Left rope + pan */}
				<line x1={px - arm} y1={py + 8} x2={px - arm} y2={py + ropeLen} stroke={BEAM_DARK} strokeWidth="3" opacity="0.85" />
				<rect
					x={px - arm - panW / 2}
					y={py + ropeLen}
					width={panW}
					height={panH}
					rx="14"
					fill="rgba(20,138,111,0.12)"
					stroke={LEFT_ACCENT}
					strokeWidth="2.5"
				/>

				{/* Left pan label — counter-rotated to stay upright */}
				<g transform={`rotate(${-tilt},${px - arm},${py + ropeLen + panH / 2})`}>
					<text
						x={px - arm}
						y={py + ropeLen + panH / 2 - 6}
						textAnchor="middle"
						fontSize="34"
						fontWeight="800"
						fill={LEFT_ACCENT}
					>
						{leftValue}
					</text>
					<text
						x={px - arm}
						y={py + ropeLen + panH / 2 + 22}
						textAnchor="middle"
						fontSize="17"
						fontWeight="600"
						fill={TEXT_DIM}
					>
						{leftLabel}
					</text>
				</g>

				{/* Right rope + pan */}
				<line x1={px + arm} y1={py + 8} x2={px + arm} y2={py + ropeLen} stroke={BEAM_DARK} strokeWidth="3" opacity="0.85" />
				<rect
					x={px + arm - panW / 2}
					y={py + ropeLen}
					width={panW}
					height={panH}
					rx="14"
					fill="rgba(240,168,48,0.12)"
					stroke={RIGHT_ACCENT}
					strokeWidth="2.5"
				/>

				{/* Right pan label */}
				<g transform={`rotate(${-tilt},${px + arm},${py + ropeLen + panH / 2})`}>
					<text
						x={px + arm}
						y={py + ropeLen + panH / 2 - 6}
						textAnchor="middle"
						fontSize="34"
						fontWeight="800"
						fill={RIGHT_ACCENT}
					>
						{rightValue}
					</text>
					<text
						x={px + arm}
						y={py + ropeLen + panH / 2 + 22}
						textAnchor="middle"
						fontSize="17"
						fontWeight="600"
						fill={TEXT_DIM}
					>
						{rightLabel}
					</text>
				</g>
			</g>

			{/* Circle annotation around the right pan */}
			{circleOp > 0 ? (
				<circle
					cx={px + arm}
					cy={py + ropeLen + panH / 2}
					r={circleR}
					fill="none"
					stroke={CALLOUT}
					strokeWidth="3.5"
					strokeDasharray="6 5"
					opacity={circleOp}
				/>
			) : null}

			{/* "exactly 12.000 g" callout — positioned BELOW the pan instead
			    of off the right edge, so it never overflows the diagram bounds. */}
			{labelOp > 0 ? (
				<g opacity={labelOp}>
					<line
						x1={px + arm}
						y1={py + ropeLen + panH + 14}
						x2={px + arm}
						y2={py + ropeLen + panH + 50}
						stroke={CALLOUT}
						strokeWidth="2.5"
						strokeDasharray="4 4"
					/>
					<rect
						x={px + arm - 100}
						y={py + ropeLen + panH + 50}
						width={200}
						height={60}
						rx={10}
						fill={CALLOUT}
					/>
					<text
						x={px + arm}
						y={py + ropeLen + panH + 78}
						textAnchor="middle"
						fontSize="22"
						fontWeight="800"
						fill="#0f1612"
					>
						exactly
					</text>
					<text
						x={px + arm}
						y={py + ropeLen + panH + 100}
						textAnchor="middle"
						fontSize="20"
						fontWeight="700"
						fill="#0f1612"
					>
						12.000 g
					</text>
				</g>
			) : null}

			{/* The "1 mol C-12 = 12.000 g" bottom-equation that used to sit
			    here was removed: it competed for the same area as the
			    "exactly 12.000 g" callout and the dashed circle, so the
			    visual ended up cluttered. The callout + circle already
			    deliver the "exactly 12 g" idea cleanly. */}
		</svg>
	);
};
