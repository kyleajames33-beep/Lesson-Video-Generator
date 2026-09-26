// DioramaBarChart — the `barChart` diagram in the diorama look.
//
// Each bar is a painted column standing on its own plinth (the same build as
// CoefficientDivideDiagram), all plinths on one baseline so heights compare
// honestly from zero. Columns grow when the narration names them (else they
// stagger in) and their value counts up to the exact figure in the data.
// During the hold a slow sheen travels up each column and the caps glint, so
// the chart is never frozen; nothing new appears.
//
// Numbers are the data's own values, printed as written (0.08 stays 0.08).
// The unit comes from the scene's diagram config (DiagramRenderer doesn't pass
// it on): short units ride on the value (52%, 186 pm), longer ones become a
// caption above the chart.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {PaintDefs, clamp, idHash, shade, StonePlinth} from './paint';
import {buildStart, itemEntryFrames, sceneTimingFor} from './sceneSync';

type Bar = {label: string; value: number; color?: string};

const W = 760;
const H = 510;
const BASE_Y = 372;
const MAX_COL = 238;

const decimalsOf = (v: number) => (String(v).split('.')[1] ?? '').length;

const wrap = (text: string, maxChars: number) => {
	const words = text.split(/\s+/).filter(Boolean);
	const lines: string[] = [];
	let cur = '';
	for (const w of words) {
		const next = cur ? `${cur} ${w}` : w;
		if (next.length > maxChars && cur) {
			lines.push(cur);
			cur = w;
		} else cur = next;
	}
	if (cur) lines.push(cur);
	return lines;
};

export const DioramaBarChart = ({data, delay}: {data: Bar[]; delay?: number}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const timing = sceneTimingFor('barChart', data);
	const unitRaw = typeof timing?.diagram.unit === 'string' ? (timing.diagram.unit as string).trim() : '';
	const inlineUnit = ['%', 'pm', 'nm', '°C', 'K', 'g', 'kg', 'mL', 'L', 's'].includes(unitRaw) ? unitRaw : '';
	const caption = inlineUnit ? '' : unitRaw;

	const start = buildStart(delay, timing);
	const growAt = itemEntryFrames(
		data.map((d) => d.label),
		{timing, start: start + 12, stagger: 14},
	);

	const ID = `dbar-${idHash(data.map((d) => d.label + d.value).join('|'))}`;
	const n = Math.max(1, data.length);
	const slotW = (W - 40) / n;
	const rx = Math.min(108, slotW * 0.44);
	const colW = rx * 0.8;
	const capRy = colW * 0.17;
	const vMax = Math.max(...data.map((d) => d.value), 0) || 1;
	const hOf = (v: number) => (Math.max(0, v) / vMax) * MAX_COL;
	const labelSize = slotW < 150 ? 19 : 22;
	const labelChars = Math.max(8, Math.floor(slotW / (labelSize * 0.52)));
	const labelTop = BASE_Y + rx * 0.34 + rx * 0.2 + 30;

	const fadeIn = interpolate(frame, [start, start + 14], [0, 1], clamp);
	const fmt = (v: number, dp: number) => `${v.toFixed(dp)}${inlineUnit ? (inlineUnit === '%' ? '%' : ` ${inlineUnit}`) : ''}`;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Bar chart: ${data.map((d) => `${d.label} ${d.value}`).join(', ')}${unitRaw ? ` (${unitRaw})` : ''}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<PaintDefs id={ID} colors={{col: theme.accent2}} />
				<linearGradient id={`${ID}-sheen`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#ffffff" stopOpacity={0} />
					<stop offset="50%" stopColor="#ffffff" stopOpacity={0.5} />
					<stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
				</linearGradient>
			</defs>

			{caption ? (
				<text x={W / 2} y={30} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={700} letterSpacing="0.02em" opacity={fadeIn}>
					{caption}
				</text>
			) : null}

			{data.map((d, i) => {
				const cx = 20 + slotW * (i + 0.5);
				const g = spring({frame: frame - growAt[i], fps, config: {damping: 15, stiffness: 110, mass: 0.9}});
				const grow = Math.max(0, g);
				const h = hOf(d.value) * grow;
				const top = BASE_Y - h;
				const dp = decimalsOf(d.value);
				const settled = frame - growAt[i] > 40;
				const shown = settled ? fmt(d.value, dp) : fmt(d.value * Math.min(1, grow), dp);
				const valueO = interpolate(frame, [growAt[i] + 4, growAt[i] + 14], [0, 1], clamp);
				// Hold life: a slow sheen rising through the column, and a cap glint.
				const sheenT = ((frame + i * 37) % 150) / 150;
				const sheenY = BASE_Y - sheenT * (hOf(d.value) + 60) + 20;
				const glint = settled ? 0.18 + 0.22 * idlePulse(frame + i * 11, 80) : 0.18;
				const lines = wrap(d.label, labelChars).slice(0, 3);
				return (
					<g key={`${d.label}-${i}`} opacity={fadeIn}>
						<clipPath id={`${ID}-clip-${i}`}>
							<rect x={cx - colW / 2} y={top} width={colW} height={Math.max(0, h)} />
						</clipPath>
						<StonePlinth id={ID} cx={cx} cy={BASE_Y} rx={rx}>
							{h > 1 && (
								<g>
									{/* bottom rim first, so the column's foot reads as a rounded cylinder base */}
									<ellipse cx={cx} cy={BASE_Y} rx={colW / 2} ry={capRy} fill={shade(theme.accent2, -0.12)} />
									<rect x={cx - colW / 2} y={top} width={colW} height={h} fill={`url(#${ID}-col-side)`} />
									<rect x={cx - colW / 2} y={sheenY - 30} width={colW} height={60} fill={`url(#${ID}-sheen)`} opacity={0.35 * interpolate(frame - growAt[i], [30, 60], [0, 1], clamp)} clipPath={`url(#${ID}-clip-${i})`} />
									<rect x={cx - colW / 2 + colW * 0.14} y={top + 8} width={colW * 0.08} height={Math.max(0, h - 16)} rx={colW * 0.04} fill="#ffffff" opacity={0.26} />
									<ellipse cx={cx} cy={top} rx={colW / 2} ry={capRy} fill={shade(theme.accent2, 0.24)} />
									<ellipse cx={cx - colW * 0.12} cy={top - capRy * 0.15} rx={colW * 0.22} ry={capRy * 0.4} fill="#ffffff" opacity={glint} />
								</g>
							)}
						</StonePlinth>
						<text x={cx} y={top - capRy - 12} textAnchor="middle" fill={TOK.ink} fontSize={slotW < 150 ? 26 : 30} fontWeight={800} opacity={valueO}>
							{shown}
						</text>
						<text x={cx} y={labelTop} textAnchor="middle" fill={TOK.ink} fontSize={labelSize} fontWeight={750}>
							{lines.map((l, k) => (
								<tspan key={k} x={cx} dy={k === 0 ? 0 : labelSize * 1.15}>
									{l}
								</tspan>
							))}
						</text>
					</g>
				);
			})}
		</svg>
	);
};
