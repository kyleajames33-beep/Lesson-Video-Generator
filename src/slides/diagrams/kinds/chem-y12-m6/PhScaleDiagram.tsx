// PhScaleDiagram — the pH scale as a painted ruler on a stone ledge, with the
// log made visible.
//
// Pins drop onto a 0–14 ruler at each pH from the props, each carrying its
// [H₃O⁺] = 10^(−pH). Below, a glass tile per pinned pH holds one glossy H₃O⁺
// ball per unit of concentration relative to the most basic tile (pH 5 → 1,
// pH 4 → 10, pH 3 → 100), so "ten times" is something you can count. Hop arcs
// between pins carry the factor 10^ΔpH, computed, never typed. An optional
// arrow marks "more acidic" towards low pH.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, GlossDefs, PROTON, clamp, ease, fadeAt, phColor, popAt, sup} from './shared';
import {interpolate} from 'remotion';

export type PhPin = {pH: number; at: number; tile?: boolean};
export type PhHop = {from: number; to: number; at: number; amber?: boolean; note?: string};
export type PhScaleProps = {
	pins: PhPin[];
	hops?: PhHop[];
	/** Frame the "more acidic ←" arrow appears. */
	acidicAt?: number;
	delay?: number;
};

const ID = 'c12m6ph';
const W = 760;
const H = 530;
const X0 = 50, X1 = 710, RY = 170, RH = 30;
const px = (pH: number) => X0 + ((X1 - X0) * pH) / 14;

const factorText = (d: number) => {
	const f = 10 ** Math.abs(d);
	return f >= 10000 ? `×10${sup(String(Math.abs(d)))}` : `×${f.toLocaleString('en-US')}`;
};

export const PhScaleDiagram = ({pins, hops = [], acidicAt, delay = 62}: PhScaleProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tiles = pins.filter((p) => p.tile);
	const basePH = Math.max(...tiles.map((p) => p.pH));
	const tileW = 150, tileY = 282, tileH = 122;
	const tileXs = tiles.map((_, i) => W / 2 + (i - (tiles.length - 1) / 2) * 210);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The pH scale is logarithmic: each unit is a tenfold change in hydronium ions" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{proton: PROTON, h3o: '#e0433a'}} />
			<defs>
				<linearGradient id={`${ID}-ruler`} x1="0" x2="1" y1="0" y2="0">
					{Array.from({length: 15}, (_, i) => (
						<stop key={i} offset={`${(i / 14) * 100}%`} stopColor={phColor(i)} />
					))}
				</linearGradient>
			</defs>

			{/* Ruler on a stone ledge */}
			<g opacity={fadeAt(frame, 0, 14)}>
				<rect x={X0 - 18} y={RY + RH - 2} width={X1 - X0 + 36} height={20} rx={6} fill="#bdb8ae" />
				<rect x={X0 - 18} y={RY + RH + 10} width={X1 - X0 + 36} height={10} rx={4} fill="#8f8b83" />
				<rect x={X0} y={RY} width={X1 - X0} height={RH} rx={8} fill={`url(#${ID}-ruler)`} stroke="rgba(0,0,0,0.2)" />
				<rect x={X0 + 6} y={RY + 4} width={X1 - X0 - 12} height={6} rx={3} fill="#ffffff" opacity={0.35} />
				{Array.from({length: 15}, (_, i) => (
					<text key={i} x={px(i)} y={RY + RH + 22} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{i}</text>
				))}
				<text x={X0 - 40} y={RY + 21} fill={TOK.inkDim} fontSize={16} fontWeight={800} letterSpacing="0.06em">pH</text>
			</g>
			{acidicAt !== undefined && (
				<g opacity={fadeAt(frame, acidicAt)}>
					<Arrow x1={px(6.2)} y1={RY + RH + 48} x2={px(1)} y2={RY + RH + 48} color={TOK.ink} width={3} t={ease(frame, acidicAt, acidicAt + 18)} />
					<text x={px(6.6)} y={RY + RH + 54} fill={TOK.ink} fontSize={17} fontWeight={800}>lower pH = more acidic = more H₃O⁺</text>
				</g>
			)}

			{/* Pins */}
			{pins.map((p, i) => {
				const pop = popAt(frame, fps, p.at);
				if (pop <= 0) return null;
				const x = px(p.pH);
				const y = RY - 8 - 30 * (1 - Math.min(1, pop));
				return (
					<g key={i}>
						<path d={`M ${x} ${RY + 4} L ${x - 9} ${y - 12} L ${x + 9} ${y - 12} Z`} fill={TOK.ink} opacity={0.85} />
						<circle cx={x} cy={y - 22} r={15} fill="#ffffff" stroke={TOK.ink} strokeWidth={2.5} />
						<text x={x} y={y - 16} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>{p.pH}</text>
					</g>
				);
			})}

			{/* Hop arcs with the computed factor */}
			{hops.map((h, i) => {
				const t = ease(frame, h.at, h.at + 22);
				if (t <= 0) return null;
				const a = px(Math.min(h.from, h.to)), b = px(Math.max(h.from, h.to));
				const lift = 26 + Math.abs(h.to - h.from) * 11;
				const yBase = RY - 52;
				const color = h.amber ? TOK.amber : theme.accent;
				const d = `M ${a} ${yBase} Q ${(a + b) / 2} ${yBase - lift * 2} ${b} ${yBase}`;
				return (
					<g key={i}>
						<path d={d} fill="none" stroke={color} strokeWidth={h.amber ? 3.5 + idlePulse(frame) : 3} pathLength={1} strokeDasharray={`${t} 1`} strokeLinecap="round" />
						<text x={(a + b) / 2} y={yBase - lift - 8} textAnchor="middle" fill={h.amber ? TOK.amberInk : color} fontSize={h.amber ? 20 : 17} fontWeight={800} opacity={fadeAt(frame, h.at + 16)}>
							{factorText(h.to - h.from)}{h.note ? ` ${h.note}` : ''}
						</text>
					</g>
				);
			})}

			{/* Tiles: one H₃O⁺ ball per unit, relative to the least acidic tile */}
			{tiles.map((p, i) => {
				const n = Math.round(10 ** (basePH - p.pH));
				const x = tileXs[i];
				const appear = fadeAt(frame, p.at + 10, 14);
				const cols = n >= 100 ? 10 : n >= 10 ? 5 : 1;
				const rows = Math.ceil(n / cols);
				const r = n >= 100 ? 4.8 : 8;
				const gap = n >= 100 ? 11.4 : 20;
				const fill = interpolate(frame, [p.at + 14, p.at + 44], [0, n], clamp);
				return (
					<g key={i} opacity={appear}>
						<path d={`M ${px(p.pH)} ${RY + RH + 28} L ${x} ${tileY - 6}`} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="4 5" opacity={0.7} />
						<DioramaPlinth id={`${ID}${i}`} cx={x} cy={tileY + tileH + 8} rx={88} />
						<rect x={x - tileW / 2} y={tileY} width={tileW} height={tileH} rx={12} fill="rgba(220,236,246,0.55)" stroke="rgba(70,90,110,0.45)" strokeWidth={2.5} />
						{Array.from({length: n}, (_, k) => {
							if (k >= fill) return null;
							const c = k % cols, rr = Math.floor(k / cols);
							const bx = x + (c - (cols - 1) / 2) * gap + idleBob(frame, k + i * 100, 1.1);
							const by = tileY + tileH / 2 + (rr - (rows - 1) / 2) * gap + idleBob(frame, k + i * 100 + 50, 1.1);
							return <circle key={k} cx={bx} cy={by} r={r} fill={`url(#${ID}-g-h3o)`} stroke="rgba(0,0,0,0.25)" strokeWidth={0.8} />;
						})}
						<g opacity={fadeAt(frame, p.at + 40)}>
							<rect x={x + tileW / 2 - 44} y={tileY - 14} width={52} height={26} rx={13} fill={TOK.ink} />
							<text x={x + tileW / 2 - 18} y={tileY + 5} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800}>{n}</text>
						</g>
						<text x={x} y={tileY + tileH + 62} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>pH {p.pH}</text>
						<text x={x} y={tileY + tileH + 84} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>[H₃O⁺] = 10{sup(String(-p.pH))}</text>
					</g>
				);
			})}
			{/* ×10 chips between neighbouring tiles (factor computed from their pH gap) */}
			{tiles.slice(1).map((p, i) => {
				const a = tiles[i];
				const x = (tileXs[i] + tileXs[i + 1]) / 2;
				const y = tileY + tileH / 2;
				const t = fadeAt(frame, p.at + 40, 12);
				return (
					<g key={`gap${i}`} opacity={t}>
						<rect x={x - 26} y={y - 16} width={52} height={32} rx={16} fill="#ffffff" stroke={theme.accent} strokeWidth={2} />
						<text x={x} y={y + 6} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>{factorText(p.pH - a.pH)}</text>
					</g>
				);
			})}
			{tiles.length > 0 && (
				<text x={W / 2} y={H - 8} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={fadeAt(frame, tiles[0].at + 30)}>
					each ball = the H₃O⁺ in pH {basePH}
				</text>
			)}
		</svg>
	);
};
