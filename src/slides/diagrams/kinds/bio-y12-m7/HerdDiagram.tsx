// HerdDiagram (bio12m7Herd) — herd immunity.
//
// Left: a population on a plinth, mostly immune (blue, with a shield ring),
// with a few who can't be vaccinated (amber ring: newborns, the
// immunocompromised, non-responders). One infected person tries to pass the
// pathogen on; every attempt hits an immune neighbour, so the chain breaks
// and the vulnerable are protected without being immune themselves.
// Right: the threshold curve, computed as 1 − 1/R₀, drawing itself; bands mark
// the scene's R₀ ranges (e.g. measles 12–18, polio 5–7) with the coverage
// figures the scene quotes as labels. Axis ticks are only 0, 50 and 100 %.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, GLOSS, GlossDefs, H, Lines, Mark, PAL, Title, W, bioBeats, clamp, fadeAt, wrap} from './shared';
import {Icon} from './icons';

type Beats = {pop: number; spread: number; protect: number; threshold: number; formula: number; curve: number; wall: number; vulnerable: number};
export type HerdProps = {
	title?: string;
	rMax?: number;
	bands?: {name: string; r0: [number, number]; label: string; at: number}[];
	labels?: {spread?: string; protect?: string; threshold?: string; formula?: string; wall?: string; vulnerable?: string};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7herd';
const ease = Easing.inOut(Easing.cubic);
const COLS = 6;
const ROWS = 4;
const INFECTED = 9;
const VULN = [2, 19];

export const HerdDiagram = ({title, rMax = 20, bands = [], labels = {}, beats, delay = 62}: HerdProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = bioBeats<Beats>({pop: 20, spread: 150, protect: 300, threshold: 450, formula: 550, curve: 600, wall: 700, vulnerable: 900}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	// population
	const pc = {x: 190, y: top + 250};
	const slots = Array.from({length: COLS * ROWS}, (_, k) => {
		const r = Math.floor(k / COLS);
		const c = k % COLS;
		return {x: pc.x - 125 + c * 50 + (r % 2 ? 12 : -6), y: pc.y - 64 + r * 34};
	});
	const neighbours = [INFECTED - 1, INFECTED + 1, INFECTED - COLS, INFECTED + COLS];
	// graph
	const gx0 = 430;
	const gx1 = 730;
	const gy0 = top + 90;
	const gy1 = top + 360;
	const X = (r0: number) => gx0 + ((r0 - 1) / (rMax - 1)) * (gx1 - gx0);
	const Y = (p: number) => gy1 - p * (gy1 - gy0);
	const thr = (r0: number) => Math.max(0, 1 - 1 / r0);
	const prog = interpolate(frame, [b.curve, b.curve + 90], [0, 1], {...clamp, easing: ease});
	const N = 80;
	const pts: string[] = [];
	for (let i = 0; i <= N * prog; i++) {
		const r0 = 1 + ((rMax - 1) * i) / N;
		pts.push(`${i ? 'L' : 'M'} ${X(r0).toFixed(1)} ${Y(thr(r0)).toFixed(1)}`);
	}

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Herd immunity'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* population */}
			<g opacity={fadeAt(frame, b.pop - 10, 14)}>
				<DioramaPlinth id={ID} cx={pc.x} cy={pc.y + 36} rx={175} />
			</g>
			{[...slots.keys()].map((k) => {
				const p = slots[k];
				const inf = k === INFECTED;
				const vul = VULN.includes(k);
				const on = fadeAt(frame, b.pop + (k % COLS) * 4, 12);
				return (
					<g key={k} opacity={on}>
						{!inf && !vul && <ellipse cx={p.x} cy={p.y + 2} rx={17} ry={21} fill="none" stroke={theme.accent} strokeWidth={2} opacity={0.6} />}
						{vul && <ellipse cx={p.x} cy={p.y + 2} rx={17} ry={21} fill={TOK.amber} fillOpacity={0.12} stroke={TOK.amber} strokeWidth={2.5 + (frame >= b.vulnerable ? pulse * 1.5 : 0)} />}
						<Icon id={ID} name={inf ? 'sickPerson' : 'person'} x={p.x} y={p.y + idleBob(frame, k, 0.8)} s={vul ? 0.36 : 0.44} frame={frame} opts={vul ? {tone: 'grey'} : {}} />
					</g>
				);
			})}
			{/* spread attempts: each hits an immune neighbour */}
			{frame >= b.spread &&
				neighbours.map((n, i) => {
					const a = slots[INFECTED];
					const t = interpolate(frame, [b.spread + i * 14, b.spread + i * 14 + 30], [0, 1], {...clamp, easing: ease});
					const bx = slots[n].x;
					const by = slots[n].y;
					const ex = a.x + (bx - a.x) * 0.62 * t;
					const ey = a.y + (by - a.y) * 0.62 * t;
					return (
						<g key={i}>
							<Arrow x1={a.x} y1={a.y} x2={ex} y2={ey} color={PAL.sick} width={2.5} head={8} opacity={t > 0 ? 1 : 0} />
							{t >= 1 && <Mark x={(a.x + bx) / 2} y={(a.y + by) / 2 - 12} ok={false} r={8} />}
						</g>
					);
				})}
			<Lines x={pc.x} y={pc.y + 150} lines={wrap(labels.spread ?? 'every route hits an immune person: the chain breaks', 34)} size={16} color={TOK.ink} opacity={fadeAt(frame, b.protect)} />
			<Lines x={pc.x} y={top + 58} lines={wrap(labels.vulnerable ?? 'can’t be vaccinated: protected indirectly', 34)} size={16} color={TOK.amberInk} opacity={fadeAt(frame, b.vulnerable)} />
			{/* threshold graph */}
			<g opacity={fadeAt(frame, b.threshold)}>
				<Arrow x1={gx0} y1={gy1} x2={gx0} y2={gy0 - 14} color={TOK.ink} width={2.5} head={9} />
				<Arrow x1={gx0} y1={gy1} x2={gx1 + 10} y2={gy1} color={TOK.ink} width={2.5} head={9} />
				{[0, 0.5, 1].map((p) => (
					<g key={p}>
						<line x1={gx0 - 5} y1={Y(p)} x2={gx0} y2={Y(p)} stroke={TOK.ink} strokeWidth={2} />
						<text x={gx0 - 9} y={Y(p) + 5} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{`${p * 100}%`}</text>
					</g>
				))}
				<line x1={gx0} y1={Y(1)} x2={gx1} y2={Y(1)} stroke={TOK.inkMute} strokeDasharray="3 5" />
				<text x={(gx0 + gx1) / 2} y={gy1 + 30} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>R₀ (how contagious) →</text>
				<Lines x={gx0 + 10} y={gy0 - 30} lines={wrap(labels.threshold ?? 'immune share needed', 30)} size={16} color={TOK.inkDim} anchor="start" />
			</g>
			<text x={(gx0 + gx1) / 2} y={gy1 + 58} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800} opacity={fadeAt(frame, b.formula)}>{labels.formula ?? 'threshold = 1 − 1/R₀'}</text>
			{pts.length > 1 && <path d={pts.join(' ')} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinecap="round" />}
			{bands.map((band, i) => {
				const o = fadeAt(frame, band.at);
				if (o <= 0) return null;
				const [a0, a1] = band.r0;
				return (
					<g key={i} opacity={o}>
						<rect x={X(a0)} y={gy0} width={X(a1) - X(a0)} height={gy1 - gy0} fill={TOK.amber} opacity={0.1 + (i === 0 ? 0.06 * pulse : 0)} />
						<line x1={X(a0)} y1={Y(thr(a0))} x2={X(a1)} y2={Y(thr(a1))} stroke={TOK.amber} strokeWidth={7} strokeLinecap="round" />
						<Lines x={(X(a0) + X(a1)) / 2} y={Y(0.42)} lines={wrap(`${band.name}: ${band.label}`, 16)} size={15} color={TOK.amberInk} />
					</g>
				);
			})}
			<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.wall)}>{labels.wall ?? 'higher R₀, higher wall of immunity'}</text>
		</svg>
	);
};
