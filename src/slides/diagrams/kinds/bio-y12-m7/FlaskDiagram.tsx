// FlaskDiagram (bio12m7Flask) — Pasteur's swan-neck flask experiment.
//
// Two flasks of boiled broth stand on a plinth. Air flows into both. In the
// swan-neck flask airborne particles settle in the bend and never reach the
// broth, so it stays clear; in the straight-neck flask they fall straight in
// and the broth turns cloudy. Then the swan neck is snapped off: particles
// reach the broth and it clouds too. The only thing that changed was the
// particles' path (the independent variable); cloudiness is the dependent
// variable. Chips and captions come from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, Title, W, bioBeats, clamp, fadeAt, popAt, textWidth, wrap} from './shared';

type Beats = {swan: number; air: number; settle: number; boil: number; open: number; clear: number; straight: number; snap: number; growth: number; iv: number; dv: number; constant: number};
export type FlaskProps = {
	title?: string;
	labels?: {swan?: string; straight?: string; clear?: string; cloudy?: string; snapped?: string; iv?: string; dv?: string; constant?: string};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7fl';
const ease = Easing.inOut(Easing.cubic);
const CLEAR = '#f4e6a6';
const CLOUDY = '#c2a86a';
const GLASS = '#dff1f8';
const GLASS_EDGE = '#8aa6b4';

const mix = (a: string, c: string, t: number) => {
	const pa = parseInt(a.slice(1), 16);
	const pc = parseInt(c.slice(1), 16);
	const ch = (s: number) => Math.round(((pa >> s) & 255) * (1 - t) + ((pc >> s) & 255) * t);
	return `#${((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1)}`;
};

export const FlaskDiagram = ({title, labels = {}, beats, delay = 62}: FlaskProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = bioBeats<Beats>({swan: 20, air: 120, settle: 250, boil: 400, open: 480, clear: 560, straight: 660, snap: 850, growth: 1000, iv: 1100, dv: 1220, constant: 1400}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	const baseY = top + 272;
	const R = 70;
	const L = {x: 250};
	const Rr = {x: 520};
	const neckTop = baseY - 2 * R - 6;
	const snapT = interpolate(frame, [b.snap, b.snap + 30], [0, 1], {...clamp, easing: ease});
	const leftCloud = interpolate(frame, [b.growth - 60, b.growth + 60], [0, 1], clamp);
	const rightCloud = interpolate(frame, [b.straight + 40, b.straight + 160], [0, 1], clamp);
	const boil = fadeAt(frame, b.boil, 10) * (1 - fadeAt(frame, b.open - 10, 20));

	// swan neck path: up, over, down into a bend, then up to the opening
	const sx = L.x;
	const swan = `M ${sx} ${neckTop + 10} L ${sx} ${neckTop - 50} C ${sx} ${neckTop - 110} ${sx + 70} ${neckTop - 110} ${sx + 80} ${neckTop - 50} C ${sx + 86} ${neckTop - 10} ${sx + 110} ${neckTop + 4} ${sx + 124} ${neckTop - 20} L ${sx + 150} ${neckTop - 86}`;
	const stub = `M ${sx} ${neckTop + 10} L ${sx} ${neckTop - 50}`;
	const bend = {x: sx + 100, y: neckTop - 4};
	const opening = {x: sx + 150, y: neckTop - 86};

	const Flask = ({x, cloud, neck, neckOpacity = 1}: {x: number; cloud: number; neck: string; neckOpacity?: number}) => {
		const cy = baseY - R;
		const liquid = baseY - R * 0.9;
		return (
			<g>
				<path d={neck} fill="none" stroke={GLASS_EDGE} strokeWidth={22} strokeLinecap="round" strokeLinejoin="round" opacity={neckOpacity} />
				<path d={neck} fill="none" stroke={GLASS} strokeWidth={17} strokeLinecap="round" strokeLinejoin="round" opacity={neckOpacity} />
				<circle cx={x} cy={cy} r={R} fill={GLASS} stroke={GLASS_EDGE} strokeWidth={2.5} />
				<clipPath id={`${ID}-clip-${x}`}>
					<circle cx={x} cy={cy} r={R - 3} />
				</clipPath>
				<g clipPath={`url(#${ID}-clip-${x})`}>
					<rect x={x - R} y={liquid} width={R * 2} height={R * 2} fill={mix(CLEAR, CLOUDY, cloud)} />
					{cloud > 0 &&
						Array.from({length: 22}, (_, k) => (
							<circle key={k} cx={x - R + 10 + ((k * 37) % (R * 2 - 20))} cy={liquid + 10 + ((k * 23) % 50) + idleBob(frame, k, 1.2)} r={2} fill="#8a7440" opacity={cloud * 0.7} />
						))}
				</g>
				<ellipse cx={x - R * 0.35} cy={cy - R * 0.4} rx={R * 0.22} ry={R * 0.34} fill="#ffffff" opacity={0.5} transform={`rotate(-25 ${x - R * 0.35} ${cy - R * 0.4})`} />
			</g>
		);
	};

	// airborne particles: fall from above; in the swan flask they stop in the bend (until snapped)
	const particles = (x0: number, path: 'swan' | 'straight', seed: number) =>
		Array.from({length: 6}, (_, k) => {
			const cycle = 110;
			const t = ((frame - b.air + k * (cycle / 6) + seed * 13) % cycle) / cycle;
			if (frame < b.air) return null;
			let px: number;
			let py: number;
			if (path === 'straight') {
				px = x0 + Math.sin(k * 2.1) * 5;
				py = top + 40 + (baseY - R * 0.6 - top - 40) * t;
			} else if (snapT >= 1) {
				px = sx + Math.sin(k * 2.1) * 5;
				py = top + 40 + (baseY - R * 0.6 - top - 40) * t;
			} else {
				// down into the opening, along to the bend, stop there
				const u = Math.min(1, t * 1.6);
				px = opening.x + (bend.x - opening.x) * Math.max(0, (u - 0.5) * 2) + 10 * (1 - Math.min(1, u * 2));
				py = u < 0.5 ? top + 30 + (opening.y - top - 30) * (u * 2) : opening.y + (bend.y - opening.y) * ((u - 0.5) * 2);
			}
			return <circle key={`${path}${k}`} cx={px} cy={py} r={3.6} fill="#7a6a4a" opacity={0.85} />;
		});
	// particles that have settled in the bend
	const settled = fadeAt(frame, b.settle) * (1 - snapT);

	const chip = (text: string, x: number, y: number, at: number, amber = false) => {
		const p = popAt(frame, fps, at);
		if (p <= 0) return null;
		const w = textWidth(text, 16) + 24;
		return (
			<g transform={`translate(${x},${y}) scale(${Math.min(1, p)})`}>
				<rect x={-w / 2} y={-15} width={w} height={30} rx={15} fill={amber ? '#fff6e6' : '#ffffff'} stroke={amber ? TOK.amber : theme.accent} strokeWidth={amber ? 2.5 + pulse : 2} />
				<text y={6} textAnchor="middle" fill={amber ? TOK.amberInk : theme.accent} fontSize={16} fontWeight={800}>{text}</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? "Pasteur's swan-neck flask"} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={385} cy={baseY - 10} rx={265} />
			</g>
			{/* air arrows */}
			<g opacity={fadeAt(frame, b.air) * (1 - fadeAt(frame, b.boil - 20, 20)) }>
				{[opening.x, Rr.x].map((x, k) => (
					<g key={k}>
						{[0, 1, 2].map((q) => {
							const t = ((frame + q * 14 + k * 7) % 42) / 42;
							return <path key={q} d={`M ${x - 30 + q * 12} ${top + 20 + t * 30} q 6 -6 12 0 t 12 0`} fill="none" stroke="#7fb3d4" strokeWidth={2.5} opacity={1 - t} />;
						})}
					</g>
				))}
				<text x={Rr.x + 110} y={top + 60} textAnchor="middle" fill="#5a8fb0" fontSize={16} fontWeight={800}>air flows in</text>
			</g>
			{/* left: swan neck */}
			<g opacity={fadeAt(frame, b.swan, 14)}>
				<Flask x={L.x} cloud={leftCloud} neck={snapT > 0.5 ? stub : swan} />
				{snapT > 0 && snapT < 1 && (
					<path d={swan} fill="none" stroke={GLASS_EDGE} strokeWidth={20} strokeLinecap="round" opacity={1 - snapT} transform={`translate(${60 * snapT}, ${-40 * snapT}) rotate(${25 * snapT} ${sx} ${neckTop - 50})`} />
				)}
				{Array.from({length: 5}, (_, k) => <circle key={k} cx={bend.x - 8 + k * 4} cy={bend.y + 2 - (k % 2) * 3} r={3.4} fill="#7a6a4a" opacity={settled} />)}
				<text x={L.x} y={baseY + 150} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>{frame >= b.snap ? labels.snapped ?? 'neck snapped off' : labels.swan ?? 'swan neck'}</text>
			</g>
			{/* right: straight neck */}
			<g opacity={fadeAt(frame, b.straight - 30, 16)}>
				<Flask x={Rr.x} cloud={rightCloud} neck={`M ${Rr.x} ${neckTop + 10} L ${Rr.x} ${neckTop - 90}`} />
				<text x={Rr.x} y={baseY + 150} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>{labels.straight ?? 'straight neck'}</text>
			</g>
			{/* boiling */}
			{boil > 0 &&
				[L.x, ...(frame >= b.straight - 30 ? [Rr.x] : [])].map((x) =>
					Array.from({length: 6}, (_, k) => {
						const t = ((frame + k * 9) % 40) / 40;
						return <circle key={`${x}${k}`} cx={x - 30 + k * 12} cy={baseY - 20 - t * 30} r={3 + t * 2} fill="none" stroke="#ffffff" strokeWidth={1.5} opacity={boil * (1 - t)} />;
					}),
				)}
			{/* particles */}
			<g opacity={fadeAt(frame, b.settle - 40)}>{particles(L.x, 'swan', 1)}</g>
			<g opacity={fadeAt(frame, b.straight)}>{particles(Rr.x, 'straight', 2)}</g>
			{/* result chips */}
			{chip(frame >= b.growth ? labels.cloudy ?? 'cloudy: growth' : labels.clear ?? 'stays clear', L.x, top + 58, frame >= b.growth ? b.growth : b.clear, frame >= b.growth)}
			{chip(labels.cloudy ?? 'cloudy: growth', Rr.x, top + 58, b.straight + 110)}
			{/* variables */}
			<g opacity={fadeAt(frame, b.iv)}>
				<Lines x={W / 2} y={baseY + 184} lines={wrap(labels.iv ?? 'IV: can airborne particles reach the broth?', 72)} size={16} color={TOK.amberInk} />
			</g>
			<g opacity={fadeAt(frame, b.dv)}>
				<Lines x={W / 2} y={baseY + 208} lines={wrap(labels.dv ?? 'DV: microbial growth, seen as cloudiness', 72)} size={16} color={TOK.ink} />
			</g>
			<g opacity={fadeAt(frame, b.constant)}>
				<Lines x={W / 2} y={baseY + 232} lines={wrap(labels.constant ?? 'Kept constant: broth, temperature, sterilising', 72)} size={16} color={TOK.inkDim} />
			</g>
		</svg>
	);
};
