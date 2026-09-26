// ExplodeDiagram — a whole that bursts into its labelled parts and snaps back
// together, in the diorama family: each part is a glossy painted marble, the
// group floats over a soft ground shadow, and in the hold the parts drift
// gently (idleBob) while the reassembled whole breathes.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_DISPLAY} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from './diorama';
import {PaintDefs, clamp, idHash, shade} from './kinds/restyle-generic/paint';

type Part = {label: string; color?: string};
type Props = {parts: Part[]; delay?: number};

export const ExplodeDiagram = ({parts, delay = 0}: Props) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const ID = `explode-${idHash(parts.map((p) => p.label).join('|'))}`;
	const n = parts.length;
	const cx = 350;
	const cy = 215;
	const r = Math.min(160, 80 + n * 18);
	const palette = [theme.accent, theme.accent2, '#b8683c', '#7d8b96', shade(theme.accent, 0.18), '#8e5bd6'];
	const colorOf = (i: number) => parts[i].color ?? palette[i % palette.length];

	const explodeP = spring({frame: frame - delay - 8, fps, config: {damping: 6, stiffness: 300, mass: 0.65}});
	const reassembleP = spring({frame: frame - delay - 52, fps, config: {damping: 18, stiffness: 160, mass: 0.9}});
	const netOffset = Math.max(0, interpolate(explodeP, [0, 1], [0, 1], clamp) - interpolate(reassembleP, [0, 1], [0, 1], clamp));
	const hold = interpolate(frame - delay, [90, 120], [0, 1], clamp);

	return (
		<svg viewBox="0 0 700 460" className="diagram" role="img" aria-label={`Parts: ${parts.map((p) => p.label).join(', ')}`} style={{fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<PaintDefs id={ID} colors={Object.fromEntries(parts.map((_, i) => [`p${i}`, colorOf(i)]))} />
			</defs>
			<ellipse cx={354} cy={430} rx={120 + netOffset * 120} ry={14} fill="rgba(58,40,18,0.16)" filter={`url(#${ID}-blur)`} />
			{parts.map((part, i) => {
				const angle = (2 * Math.PI * i) / n - Math.PI / 2;
				const appear = spring({frame: frame - delay - i * 3, fps, config: {damping: 14, stiffness: 260, mass: 0.6}});
				const s = interpolate(appear, [0, 1], [0, 1], clamp);
				const px = cx + Math.cos(angle) * r * netOffset + idleBob(frame, i, 1.8) * hold;
				const py = cy + Math.sin(angle) * r * netOffset + idleBob(frame, i + 7, 1.8) * hold;
				const c = colorOf(i);
				return (
					<g key={i} transform={`translate(${px} ${py}) scale(${s})`}>
						<circle r={36} fill={`url(#${ID}-p${i}-ball)`} stroke={shade(c, -0.3)} strokeWidth={1.2} />
						<text y={7} textAnchor="middle" fontSize={20} fontWeight={800} fill="#ffffff" style={{textShadow: '0 1px 2px rgba(0,0,0,0.35)'}}>
							{part.label}
						</text>
					</g>
				);
			})}
			<circle cx={cx} cy={cy} r={48 + 6 * idlePulse(frame, 70)} fill="none" stroke={theme.accent2} strokeWidth={2} opacity={0.35 * hold} />
		</svg>
	);
};
