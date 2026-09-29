// NetIonicDiagram — why every strong + strong neutralisation is the same
// reaction.
//
// One wide beaker on a stone plinth, split by a glass divider: strong acid
// ions (H⁺, Cl⁻) on the left, strong base ions (Na⁺, OH⁻) on the right, all
// already separate. The divider lifts; each H⁺ finds an OH⁻ and they become a
// glossy water molecule with a flash of heat, while Na⁺ and Cl⁻ just drift
// (tagged "spectators"). Then the net ionic equation and its enthalpy, and a
// second acid/base pair giving the very same equation.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from '../../diorama';
import {GlossDefs, clamp, ease, fadeAt, hash01} from './shared';

export type NetIonicProps = {
	acid?: {cation: string; anion: string};
	base?: {cation: string; anion: string};
	pairs?: number;
	ionsAt?: number;
	mixAt?: number;
	spectatorAt?: number;
	equationAt?: number;
	/** Other strong pairs that give the same net equation, and when. */
	others?: {text: string; at: number}[];
	heat?: string;
	delay?: number;
};

const ID = 'c12m6net';
const W = 760;
const H = 530;
const C = {H: '#f4efe0', OH: '#e0433a', An: '#4fbf4a', Cat: '#8e5bd6'};

export const NetIonicDiagram = ({
	acid = {cation: 'H⁺', anion: 'Cl⁻'}, base = {cation: 'Na⁺', anion: 'OH⁻'}, pairs = 6,
	ionsAt = 0, mixAt = 260, spectatorAt = 440, equationAt = 610, others = [], heat = 'ΔHn ≈ −57 kJ mol⁻¹', delay = 62,
}: NetIonicProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const cx = 380, baseY = 360, bw = 600, bh = 220;
	const lift = ease(frame, mixAt, mixAt + 24);
	const specOn = fadeAt(frame, spectatorAt, 14);
	const pos = (seed: number, side: -1 | 1) => ({
		x: cx + side * (60 + hash01(seed) * (bw / 2 - 110)),
		y: baseY - 26 - hash01(seed + 31) * (bh * 0.6 - 50),
	});
	const meetAt = (i: number) => mixAt + 30 + i * 22;
	const formed = Array.from({length: pairs}, (_, i) => frame >= meetAt(i) + 30).filter(Boolean).length;

	const ion = (label: string, color: string, x: number, y: number, r: number, dark = false, opacity = 1) => (
		<g transform={`translate(${x},${y})`} opacity={opacity}>
			<circle r={r} fill={`url(#${ID}-g-${color.slice(1)})`} stroke="rgba(0,0,0,0.3)" />
			<text y={4.5} textAnchor="middle" fill={dark ? '#333' : '#fff'} fontSize={12} fontWeight={800}>{label}</text>
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Strong acid plus strong base: only H⁺ and OH⁻ react" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['O', 'H']} />
			<GlossDefs id={ID} colors={Object.fromEntries(Object.values(C).map((c) => [c.slice(1), c]))} />
			<g opacity={fadeAt(frame, ionsAt, 14)}>
				<text x={cx - bw / 4} y={112} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={1 - lift}>strong acid: all ions</text>
				<text x={cx + bw / 4} y={112} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={1 - lift}>strong base: all ions</text>
				<DioramaPlinth id={ID} cx={cx} cy={baseY + 14} rx={316} />
				<rect x={cx - bw / 2} y={baseY - bh * 0.62} width={bw} height={bh * 0.62} rx={12} fill="rgba(150,190,225,0.22)" />
				{/* divider */}
				<rect x={cx - 3} y={baseY - bh + 10 - lift * 200} width={6} height={bh - 16} rx={3} fill="rgba(70,90,110,0.5)" opacity={1 - lift} />
				{/* spectators */}
				{Array.from({length: pairs}, (_, i) => {
					const a = pos(i * 4 + 1, -1), b = pos(i * 4 + 2, 1);
					const drift = lift * 40;
					const op = 1 - specOn * 0.45;
					return (
						<g key={`s${i}`}>
							{ion(acid.anion, C.An, a.x + drift * 0.6 + idleBob(frame, i, 2), a.y + idleBob(frame, i + 9, 1.6), 15, false, op)}
							{ion(base.cation, C.Cat, b.x - drift * 0.6 + idleBob(frame, i + 20, 2), b.y + idleBob(frame, i + 29, 1.6), 15, false, op)}
						</g>
					);
				})}
				{/* H⁺ + OH⁻ → H₂O */}
				{Array.from({length: pairs}, (_, i) => {
					const a = pos(i * 4 + 3, -1), b = pos(i * 4 + 4, 1);
					const m = {x: (a.x + b.x) / 2 + (hash01(i + 77) - 0.5) * 60, y: Math.min(a.y, b.y) - 10};
					const t = ease(frame, meetAt(i), meetAt(i) + 30);
					const flash = interpolate(frame, [meetAt(i) + 28, meetAt(i) + 34, meetAt(i) + 56], [0, 1, 0], clamp);
					if (t >= 1) {
						return (
							<g key={`w${i}`}>
								{flash > 0 && <circle cx={m.x} cy={m.y} r={34} fill={TOK.amber} opacity={0.45 * flash} />}
								<Molecule id={ID} atoms={['O', 'H', 'H']} x={m.x} y={m.y + idleBob(frame, i + 40, 1.6)} r={13} />
							</g>
						);
					}
					return (
						<g key={`p${i}`}>
							{ion(acid.cation, C.H, a.x + (m.x - a.x) * t + idleBob(frame, i + 50, 2.4) * (1 - t), a.y + (m.y - a.y) * t, 12, true)}
							{ion(base.anion, C.OH, b.x + (m.x - b.x) * t + idleBob(frame, i + 60, 2) * (1 - t), b.y + (m.y - b.y) * t, 15)}
						</g>
					);
				})}
				<path d={`M ${cx - bw / 2 - 8} ${baseY - bh} Q ${cx - bw / 2} ${baseY - bh} ${cx - bw / 2} ${baseY - bh + 8} L ${cx - bw / 2} ${baseY - 12} Q ${cx - bw / 2} ${baseY} ${cx - bw / 2 + 12} ${baseY} L ${cx + bw / 2 - 12} ${baseY} Q ${cx + bw / 2} ${baseY} ${cx + bw / 2} ${baseY - 12} L ${cx + bw / 2} ${baseY - bh + 8} Q ${cx + bw / 2} ${baseY - bh} ${cx + bw / 2 + 8} ${baseY - bh}`} fill="none" stroke="rgba(70,90,110,0.55)" strokeWidth={3} />
			</g>
			<g opacity={specOn}>
				<text x={cx} y={baseY + 104} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{acid.anion} and {base.cation}: spectators, no reaction, no heat</text>
			</g>
			<text x={cx} y={40} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, mixAt + 30)}>water formed: {formed}</text>
			<g opacity={fadeAt(frame, equationAt)}>
				<rect x={cx - 250} y={52} width={500} height={44} rx={22} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame)} />
				<text x={cx} y={82} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>H⁺ + OH⁻ → H₂O   <tspan fill={TOK.amberInk}>{heat}</tspan></text>
			</g>
			{others.map((o, i) => (
				<text key={i} x={cx} y={baseY + 132 + i * 26} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} opacity={fadeAt(frame, o.at)}>{o.text}</text>
			))}
		</svg>
	);
};
