import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {
	beforeLabel: string;
	afterLabel: string;
	beforeContent: string;
	afterContent: string;
	delay?: number;
};

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

const splitPanelContent = (label: string, content: string) => {
	const [rawValue, rawDescription] = content.split('—').map((part) => part.trim());
	if (rawDescription) {
		return {value: rawValue, description: rawDescription};
	}

	return content.length <= 18
		? {value: content, description: ''}
		: {value: '', description: content};
};

const wrapText = (text: string, maxChars: number) => {
	const words = text.split(/\s+/).filter(Boolean);
	const lines: string[] = [];
	let current = '';

	for (const word of words) {
		const next = current ? `${current} ${word}` : word;
		if (next.length > maxChars && current) {
			lines.push(current);
			current = word;
		} else {
			current = next;
		}
	}

	if (current) lines.push(current);
	return lines.slice(0, 3);
};

const getBadge = (label: string) => {
	const normalized = label.toLowerCase();
	if (normalized.includes('molar')) return 'g mol⁻¹';
	if (normalized === 'mass' || normalized.includes('sample')) return 'g';
	if (normalized.includes('moles') || normalized === 'n') return 'in mol';
	if (normalized.includes('particles') || normalized === 'n (particles)' || normalized === 'n') return 'no units';
	return '';
};

const labelFontSize = (label: string) => {
	if (label.length > 18) return 30;
	if (label.length > 12) return 34;
	return 42;
};

export const BeforeAfterDiagram = ({beforeLabel, afterLabel, beforeContent, afterContent, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const leftP  = spring({frame: frame - delay,      fps, config: {damping: 16, stiffness: 140, mass: 0.9}});
	const rightP = spring({frame: frame - delay - 14, fps, config: {damping: 16, stiffness: 140, mass: 0.9}});
	const neqP   = spring({frame: frame - delay - 22, fps, config: {damping: 14, stiffness: 160, mass: 0.8}});

	const leftX  = interpolate(leftP,  [0, 1], [-80, 0], clamp);
	const rightX = interpolate(rightP, [0, 1], [80,  0], clamp);
	const neqOp  = interpolate(neqP,   [0, 1], [0,   1], clamp);
	const neqScale = interpolate(neqP, [0, 0.5, 1], [0.4, 1.15, 1], clamp);

	// Box dimensions
	const boxX1 = 18, boxX2 = 372;
	const boxY = 28, boxW = 310, boxH = 310;
	const cx1 = boxX1 + boxW / 2;
	const cx2 = boxX2 + boxW / 2;
	const before = splitPanelContent(beforeLabel, beforeContent);
	const after = splitPanelContent(afterLabel, afterContent);
	const beforeLines = wrapText(before.description, 28);
	const afterLines = wrapText(after.description, 28);
	const beforeBadge = getBadge(beforeLabel);
	const afterBadge = getBadge(afterLabel);

	return (
		<svg viewBox="0 0 700 380" className="diagram">
			{/* Left box — N (particles) — amber */}
			<g transform={`translate(${leftX}, 0)`}>
				<rect x={boxX1} y={boxY} width={boxW} height={boxH} rx={16}
					fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5" />
				{/* Label */}
				<text x={cx1} y={boxY + 54} textAnchor="middle" fontSize={labelFontSize(beforeLabel)} fontWeight="900" fill="#d97706">
					{beforeLabel}
				</text>
				{/* Value */}
				{before.value ? (
					<text x={cx1} y={boxY + 152} textAnchor="middle" fontSize={before.value.length > 18 ? 28 : 36} fontWeight="800" fill="#92400e">
						{before.value}
					</text>
				) : null}
				{/* Description */}
				<text x={cx1} y={before.value ? boxY + 205 : boxY + 138} textAnchor="middle" fontSize="22" fontWeight="650" fill="#a16207">
					{beforeLines.map((line, index) => (
						<tspan key={line} x={cx1} dy={index === 0 ? 0 : 30}>{line}</tspan>
					))}
				</text>
				{/* Unit badge */}
				<rect x={cx1 - 68} y={boxY + 244} width={136} height={36} rx={8}
					fill="#fbbf24" opacity="0.35" />
				<text x={cx1} y={boxY + 267} textAnchor="middle" fontSize="18" fontWeight="700" fill="#92400e">
					{beforeBadge}
				</text>
			</g>

			{/* Centre ≠ symbol */}
			<text
				x={350} y={210} textAnchor="middle" fontSize="76" fontWeight="900" fill="#4f46e5"
				opacity={neqOp}
				transform={`scale(${neqScale}) translate(${350 * (1 - 1/neqScale)}, ${210 * (1 - 1/neqScale)})`}
			>
				≠
			</text>

			{/* Right box — n (moles) — indigo */}
			<g transform={`translate(${rightX}, 0)`}>
				<rect x={boxX2} y={boxY} width={boxW} height={boxH} rx={16}
					fill="#ede9fe" stroke="#4f46e5" strokeWidth="2.5" />
				{/* Label */}
				<text x={cx2} y={boxY + 54} textAnchor="middle" fontSize={labelFontSize(afterLabel)} fontWeight="900" fill="#4338ca">
					{afterLabel}
				</text>
				{/* Value */}
				{after.value ? (
					<text x={cx2} y={boxY + 148} textAnchor="middle" fontSize={after.value.length > 18 ? 28 : 50} fontWeight="900" fill="#3730a3">
						{after.value}
					</text>
				) : null}
				{/* Description */}
				<text x={cx2} y={after.value ? boxY + 205 : boxY + 138} textAnchor="middle" fontSize="22" fontWeight="650" fill="#4338ca">
					{afterLines.map((line, index) => (
						<tspan key={line} x={cx2} dy={index === 0 ? 0 : 30}>{line}</tspan>
					))}
				</text>
				{/* Unit badge */}
				<rect x={cx2 - 52} y={boxY + 244} width={104} height={36} rx={8}
					fill="#818cf8" opacity="0.3" />
				<text x={cx2} y={boxY + 267} textAnchor="middle" fontSize="18" fontWeight="700" fill="#3730a3">
					{afterBadge}
				</text>
			</g>
		</svg>
	);
};
