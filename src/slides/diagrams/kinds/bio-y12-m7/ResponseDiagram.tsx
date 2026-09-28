// ResponseDiagram (bio12m7Response) — antibody level against time, drawing
// itself as the narration walks through it.
//
// Modes
//  primary        one exposure; IgM rises first, then IgG; a figure shows you
//                 fall ill before the peak; memory cells are laid down on the
//                 plinth afterwards and just wait.
//  both           first and second exposure. The primary is a small, slow
//                 bump; the secondary rises almost at once and towers over it.
//                 Lag brackets and the peak comparison carry the scene's own
//                 numbers (props). The plinth shows the one matching naive
//                 cell before, and a crowd of memory cells after, the first
//                 response: the whole difference.
//  activePassive  active (your own response: lag, then high and lasting, with
//                 memory) against passive (borrowed antibodies: instant, then
//                 fading to nothing, no memory).
//
// The time axis carries no tick numbers: curve shapes are qualitative and the
// only numbers on screen are the scene's own labels. In `both`, the secondary
// peak is drawn 10× the primary (the low end of the scene's 10–100×).

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Ball, GLOSS, GlossDefs, H, Lines, PAL, Title, W, bioBeats, clamp, fadeAt, popAt, wrap} from './shared';
import {Icon} from './icons';

type Beats = {
	axes: number; exp1: number; draw1: number; draw1End: number; lag1: number; ill: number; memory: number;
	exp2: number; draw2: number; draw2End: number; lag2: number; ratio: number; well: number; verdict: number;
	igg: number; iggEnd: number;
};
export type ResponseProps = {
	mode?: 'primary' | 'both' | 'activePassive';
	title?: string;
	yLabel?: string;
	labels?: {
		exp1?: string; exp2?: string; lag1?: string; lag2?: string; ratio?: string; ill?: string; well?: string;
		memory?: string; naive?: string; curve1?: string; curve2?: string; verdict?: string; igm?: string; igg?: string;
	};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7resp';
const ease = Easing.inOut(Easing.cubic);
// graph box
const GX0 = 92;
const GX1 = 720;
const GY0 = 74; // top
const GY1 = 318; // baseline
const px = (t: number) => GX0 + (GX1 - GX0) * t;
const py = (v: number) => GY1 - (GY1 - GY0) * v;

/** Rise to 1 at u = k (smooth), then exponential decay with time constant tau. */
const pulse = (u: number, k: number, tau: number) => {
	if (u <= 0) return 0;
	if (u < k) {
		const r = u / k;
		return r * r * Math.exp(2 * (1 - r));
	}
	return Math.exp(-(u - k) / tau);
};

type Curve = {f: (t: number) => number; from: number; start: number; end: number; color: string; width: number; label?: string; labelAt?: number; dash?: string};

export const ResponseDiagram = ({mode = 'both', title, yLabel = 'Antibody level', labels = {}, beats, delay = 62}: ResponseProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = bioBeats<Beats>({axes: 0, exp1: 30, draw1: 60, draw1End: 300, lag1: 200, ill: 260, memory: 360, exp2: 480, draw2: 500, draw2End: 640, lag2: 560, ratio: 640, well: 700, verdict: 900, igg: 200, iggEnd: 500}, beats);
	const PRIMARY = '#8a94a6';

	// exposure positions (graph fraction)
	const e1 = mode === 'both' ? 0.05 : 0.08;
	const e2 = 0.5;
	let curves: Curve[] = [];
	if (mode === 'primary') {
		curves = [
			{f: (t) => 0.42 * pulse(t - e1 - 0.1, 0.12, 0.09), from: e1, start: b.draw1, end: b.draw1End, color: PRIMARY, width: 4, label: labels.igm ?? 'IgM', labelAt: e1 + 0.22},
			{f: (t) => 0.62 * pulse(t - e1 - 0.16, 0.16, 0.45), from: e1, start: b.igg, end: b.iggEnd, color: theme.accent, width: 5, label: labels.igg ?? 'IgG', labelAt: e1 + 0.36},
		];
	} else if (mode === 'both') {
		const prim = (t: number) => 0.088 * pulse(t - e1 - 0.07, 0.13, 0.1);
		const sec = (t: number) => 0.88 * pulse(t - e2 - 0.01, 0.075, 0.5);
		curves = [
			{f: prim, from: e1, start: b.draw1, end: b.draw1End, color: PRIMARY, width: 4.5, label: labels.curve1, labelAt: e1 + 0.2},
			{f: (t) => (t < e2 ? prim(t) : prim(t) + sec(t)), from: e2, start: b.draw2, end: b.draw2End, color: theme.accent, width: 5, label: labels.curve2, labelAt: e2 + 0.2},
		];
	} else {
		curves = [
			{f: (t) => 0.58 * pulse(t - e1, 0.012, 0.13), from: e1, start: b.draw2, end: b.draw2End, color: '#b5562e', width: 4.5, label: labels.curve2 ?? 'passive', labelAt: e1 + 0.24, dash: undefined},
			{f: (t) => 0.7 * pulse(t - e1 - 0.1, 0.2, 2.2), from: e1, start: b.draw1, end: b.draw1End, color: theme.accent, width: 5, label: labels.curve1 ?? 'active', labelAt: e1 + 0.5},
		];
	}

	const N = 160;
	const pathFor = (c: Curve) => {
		const prog = interpolate(frame, [c.start, c.end], [0, 1], {...clamp, easing: ease});
		if (prog <= 0) return {d: '', tip: null as null | {x: number; y: number}};
		const tEnd = c.from + (1 - c.from) * prog;
		const pts: string[] = [];
		for (let i = 0; i <= N; i++) {
			const t = c.from + ((tEnd - c.from) * i) / N;
			pts.push(`${i ? 'L' : 'M'} ${px(t).toFixed(1)} ${py(Math.min(0.98, c.f(t))).toFixed(1)}`);
		}
		return {d: pts.join(' '), tip: prog < 1 ? {x: px(tEnd), y: py(Math.min(0.98, c.f(tEnd)))} : null};
	};

	// peaks (for brackets)
	const peakOf = (c: Curve, lo: number, hi: number) => {
		let best = {t: lo, v: 0};
		for (let i = 0; i <= 400; i++) {
			const t = lo + ((hi - lo) * i) / 400;
			const v = c.f(t);
			if (v > best.v) best = {t, v};
		}
		return best;
	};

	const Exposure = ({t, at, text, icon}: {t: number; at: number; text?: string; icon: 'virus' | 'syringe'}) => {
		const p = popAt(frame, fps, at);
		if (p <= 0) return null;
		return (
			<g opacity={Math.min(1, p * 1.4)}>
				<line x1={px(t)} y1={GY1} x2={px(t)} y2={GY0 - 6} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="4 5" />
				<Icon id={ID} name={icon} x={px(t)} y={GY1 + 30 - (1 - Math.min(1, p)) * 20} s={0.42} frame={frame} />
				{text && <text x={px(t) + 20} y={GY1 + 38} fill={TOK.inkDim} fontSize={16} fontWeight={800}>{text}</text>}
			</g>
		);
	};

	const Bracket = ({x1, x2, y, text, at, color = TOK.ink}: {x1: number; x2: number; y: number; text: string; at: number; color?: string}) => (
		<g opacity={fadeAt(frame, at)}>
			<path d={`M ${x1} ${y + 6} L ${x1} ${y} L ${x2} ${y} L ${x2} ${y + 6}`} fill="none" stroke={color} strokeWidth={2} />
			<text x={(x1 + x2) / 2} y={y - 8} textAnchor="middle" fill={color} fontSize={16} fontWeight={800}>{text}</text>
		</g>
	);

	// memory plinth
	const memCount = mode === 'activePassive' ? 7 : 11;
	const memGrow = interpolate(frame, [b.memory, b.memory + 70], [0, memCount], clamp);
	const plX = mode === 'both' ? 200 : 190;
	const plY = 452;
	const naiveOn = mode === 'both' && labels.naive ? fadeAt(frame, b.exp1 - 10) * (1 - fadeAt(frame, b.memory, 16)) : 0;

	const c1 = curves[0];
	const pk1 = peakOf(c1, c1.from, mode === 'both' ? e2 : 1);
	const c2 = curves[1];
	const pk2 = peakOf(c2, mode === 'both' ? e2 : c2.from, 1);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Antibody response over time'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* axes */}
			<g opacity={fadeAt(frame, b.axes)}>
				<rect x={GX0} y={GY0 - 10} width={GX1 - GX0} height={GY1 - GY0 + 10} rx={8} fill="#ffffff" opacity={0.6} />
				<Arrow x1={GX0} y1={GY1} x2={GX0} y2={GY0 - 14} color={TOK.ink} width={2.5} head={9} />
				<Arrow x1={GX0} y1={GY1} x2={GX1 + 8} y2={GY1} color={TOK.ink} width={2.5} head={9} />
				<text x={GX1} y={GY1 + 60} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>time</text>
				<text transform={`translate(${GX0 - 16}, ${(GY0 + GY1) / 2}) rotate(-90)`} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{yLabel}</text>
			</g>
			{mode !== 'activePassive' && <Exposure t={e1} at={b.exp1} text={labels.exp1} icon="virus" />}
			{mode === 'activePassive' && <line x1={px(e1)} y1={GY1} x2={px(e1)} y2={GY0 - 6} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="4 5" opacity={fadeAt(frame, b.exp1)} />}
			{mode === 'both' && <Exposure t={e2} at={b.exp2} text={labels.exp2} icon="virus" />}
			{/* curves */}
			{curves.map((c, i) => {
				const {d, tip} = pathFor(c);
				if (!d) return null;
				const glow = mode === 'both' && i === 1 ? idlePulse(frame) : 0;
				return (
					<g key={i}>
						{glow > 0 && frame > c.end && <path d={d} fill="none" stroke={TOK.amber} strokeWidth={10} strokeOpacity={0.12 + 0.12 * glow} strokeLinecap="round" />}
						<path d={d} fill="none" stroke={c.color} strokeWidth={c.width} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={c.dash} />
						{tip && <circle cx={tip.x} cy={tip.y} r={6} fill={c.color} />}
						{c.label && c.labelAt !== undefined && (
							<text x={px(c.labelAt) + 10} y={py(Math.min(0.9, c.f(c.labelAt))) - 12} fill={c.color} fontSize={17} fontWeight={800} opacity={fadeAt(frame, c.start + (c.end - c.start) * 0.5)}>
								{c.label}
							</text>
						)}
					</g>
				);
			})}
			{/* brackets and figures */}
			{mode !== 'activePassive' && labels.lag1 && (
				<Bracket x1={px(e1)} x2={px(pk1.t)} y={mode === 'both' ? py(pk1.v) - 30 : py(0.66)} text={labels.lag1} at={b.lag1} />
			)}
			{mode === 'both' && labels.lag2 && <Bracket x1={px(e2)} x2={px(pk2.t)} y={py(pk2.v) - 12} text={labels.lag2} at={b.lag2} color={theme.accent} />}
			{mode === 'both' && labels.ratio && (
				<g opacity={fadeAt(frame, b.ratio)}>
					<line x1={px(pk1.t)} y1={py(pk1.v)} x2={px(e2) - 18} y2={py(pk1.v)} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 4" />
					<line x1={px(e2) - 24} y1={py(pk2.v)} x2={px(pk2.t)} y2={py(pk2.v)} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 4" />
					<Arrow x1={px(e2) - 18} y1={py(pk1.v)} x2={px(e2) - 18} y2={py(pk2.v) + 2} color={TOK.amber} width={3.5} head={11} />
					<text x={px(e2) - 30} y={(py(pk1.v) + py(pk2.v)) / 2 + 6} textAnchor="end" fill={TOK.amberInk} fontSize={19} fontWeight={800}>{labels.ratio}</text>
				</g>
			)}
			{labels.ill && (
				<g opacity={fadeAt(frame, b.ill)}>
					<Icon id={ID} name="sickPerson" x={mode === 'both' ? px(0.15) : px(0.2)} y={mode === 'both' ? py(0.5) : py(0.86)} s={0.5} frame={frame} />
					<text x={mode === 'both' ? px(0.15) : px(0.2)} y={mode === 'both' ? py(0.5) - 30 : py(0.86) - 30} textAnchor="middle" fill={PAL.sick} fontSize={16} fontWeight={800}>{labels.ill}</text>
				</g>
			)}
			{mode === 'both' && labels.well && (
				<g opacity={fadeAt(frame, b.well)}>
					<Icon id={ID} name="person" x={px(0.9)} y={py(0.3)} s={0.5} frame={frame} />
					<text x={px(0.9)} y={py(0.3) + 42} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>{labels.well}</text>
				</g>
			)}
			{/* memory cells on a plinth */}
			<g opacity={fadeAt(frame, mode === 'both' ? b.exp1 - 10 : b.memory - 10)}>
				<DioramaPlinth id={ID} cx={plX} cy={plY} rx={120} />
			</g>
			{naiveOn > 0 && (
				<g opacity={naiveOn}>
					<Ball id={ID} name="immune" color={PAL.immune} x={plX} y={plY - 14 + idleBob(frame, 0, 1.5)} r={12} />
					<text x={plX + 140} y={plY + 6} fill={TOK.inkDim} fontSize={16} fontWeight={800}>{labels.naive ?? ''}</text>
				</g>
			)}
			{Array.from({length: memCount}, (_, k) => {
				const o = Math.max(0, Math.min(1, memGrow - k));
				if (o <= 0) return null;
				const row = k < 6 ? 0 : 1;
				const col = row === 0 ? k : k - 6;
				const n = row === 0 ? Math.min(6, memCount) : memCount - 6;
				const x = plX + (col - (n - 1) / 2) * 30 + (row ? 0 : 0);
				const y = plY - 20 + row * 16 + idleBob(frame, k, 1.6);
				return <Ball key={k} id={ID} name="immune" color={PAL.immune} x={x} y={y - (1 - o) * 30} r={11} opacity={o} />;
			})}
			{labels.memory && (
				<text x={plX + 140} y={plY + 6} fill={theme.accent} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.memory + 20)}>{labels.memory}</text>
			)}
			{labels.verdict && (
				<Lines x={plX + 140} y={plY + 40} lines={wrap(labels.verdict, 36)} size={19} color={TOK.amberInk} anchor="start" opacity={fadeAt(frame, b.verdict)} />
			)}
		</svg>
	);
};
