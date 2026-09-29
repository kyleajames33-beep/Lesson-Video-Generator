// ShiftDiagram (bio11m3aShift) — a selective pressure shifts a population's
// distribution of a heritable trait.
//
// The "before" population is a bell curve (number of individuals against the
// trait) that draws itself, with its mean marked. The pressure then acts:
// every point of the curve is multiplied by a survival chance that depends on
// the trait (a smooth step: e.g. deep beaks survive a drought, or large fish
// are caught). The survivors' curve is therefore computed from the before
// curve, so it always sits inside it, and its mean is computed from it too.
// Optionally the next generation is drawn around the survivors' mean (the
// trait is heritable). The arrow from old mean to new mean is the one amber
// thing. No axis numbers: the scenes give none.
//
// Small glyphs at each end of the x axis show what low and high values look
// like (a finch head with a shallow or deep beak, a small or large fish).
//
// Beats are frames after `delay`. Hold: the shift arrow breathes.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Beat, Foot, H, Ledge, PAL, Tag, W, clamp, fadeAt} from './shared';

export type ShiftProps = {
	title?: string;
	xLabel: string;
	yLabel?: string;
	ends?: [string, string];
	glyph?: 'beak' | 'fish';
	before: {mean: number; sd: number; label: string; at: number};
	/** survival: 'high' favours high trait values, 'low' favours low values */
	pressure: {favours: 'high' | 'low'; edge: number; width?: number; label: string; at: number};
	survivors: {label: string; at: number};
	offspring?: {label: string; at: number};
	shiftText?: {text: string; at: number};
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3shift';
const ease = Easing.inOut(Easing.cubic);
const GX0 = 92;
const GX1 = 712;
const N = 121;

const Beak = ({x, y, depth, s = 1}: {x: number; y: number; depth: number; s?: number}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<circle cx={0} cy={0} r={17} fill="#7a6048" />
		<circle cx={5} cy={-4} r={2.6} fill="#fff" />
		<circle cx={5.6} cy={-4} r={1.3} fill="#222" />
		<path d={`M 13 ${-4 - depth * 0.5} Q ${22 + depth * 0.5} ${-2} ${30} 2 Q ${20 + depth * 0.4} ${6 + depth * 0.45} 13 ${6 + depth * 0.45} Z`} fill="#3b3430" />
	</g>
);

const Fish = ({x, y, s = 1}: {x: number; y: number; s?: number}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<ellipse cx={0} cy={0} rx={22} ry={9} fill="#7d8f9c" />
		<path d="M -20 0 L -32 -9 L -32 9 Z" fill="#6a7b87" />
		<circle cx={13} cy={-2} r={1.8} fill="#222" />
	</g>
);

export const ShiftDiagram = ({title, xLabel, yLabel = 'Number of individuals', ends, glyph, before, pressure, survivors, offspring, shiftText, footer = [], delay = 62}: ShiftProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const GY0 = title ? 70 : 34;
	const GY1 = H - 120 - Math.max(0, footer.length - 1) * 28;
	const hMax = GY1 - GY0 - 30;
	const xs = Array.from({length: N}, (_, i) => (i / (N - 1)) * 100);
	const bell = (x: number, m: number, sd: number) => Math.exp(-((x - m) ** 2) / (2 * sd * sd));
	const w = pressure.width ?? 6;
	const surv = (x: number) => {
		const z = (x - pressure.edge) / w;
		const up = 1 / (1 + Math.exp(-z));
		return pressure.favours === 'high' ? up : 1 - up;
	};
	const b = xs.map((x) => bell(x, before.mean, before.sd));
	const sv = xs.map((x, i) => b[i] * surv(x));
	const meanOf = (ys: number[]) => {
		const tot = ys.reduce((a, v) => a + v, 0);
		return ys.reduce((a, v, i) => a + v * xs[i], 0) / tot;
	};
	const mB = meanOf(b);
	const mS = meanOf(sv);
	const o = offspring ? xs.map((x) => bell(x, mS, before.sd)) : [];
	const gx = (x: number) => GX0 + (x / 100) * (GX1 - GX0);
	const gy = (v: number) => GY1 - v * hMax;
	const path = (ys: number[], upto = 1) => {
		const last = Math.max(1, Math.round((N - 1) * upto));
		return ys.slice(0, last + 1).map((v, i) => `${i ? 'L' : 'M'} ${gx(xs[i]).toFixed(1)} ${gy(v).toFixed(1)}`).join(' ');
	};
	const area = (ys: number[]) => `${path(ys)} L ${gx(100)} ${GY1} L ${gx(0)} ${GY1} Z`;

	const drawB = interpolate(frame, [before.at, before.at + 45], [0, 1], {...clamp, easing: ease});
	const pOn = fadeAt(frame, pressure.at, 16);
	const drawS = interpolate(frame, [survivors.at, survivors.at + 40], [0, 1], {...clamp, easing: ease});
	const drawO = offspring ? interpolate(frame, [offspring.at, offspring.at + 45], [0, 1], {...clamp, easing: ease}) : 0;
	const newMean = offspring ? mS : mS;
	const arrowAt = offspring ? offspring.at + 40 : survivors.at + 40;
	const arrowT = interpolate(frame, [arrowAt, arrowAt + 25], [0, 1], {...clamp, easing: ease});
	const pulse = idlePulse(frame);
	const lostSide = pressure.favours === 'high' ? 'left' : 'right';

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${before.label} shifts under ${pressure.label}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{title && (
				<text x={W / 2} y={30} textAnchor="middle" fontSize={23} fontWeight={800} fill={TOK.ink}>
					{title}
				</text>
			)}
			{/* stone ledge under the graph */}
			<Ledge x0={GX0 - 30} x1={GX1 + 30} y={GY1 + 2} />
			{/* axes */}
			<line x1={GX0} y1={GY1} x2={GX1 + 10} y2={GY1} stroke={TOK.ink} strokeWidth={2.5} />
			<line x1={GX0} y1={GY1} x2={GX0} y2={GY0} stroke={TOK.ink} strokeWidth={2.5} />
			<text x={GX0 - 16} y={(GY0 + GY1) / 2} textAnchor="middle" fontSize={17} fontWeight={800} fill={TOK.inkDim} transform={`rotate(-90 ${GX0 - 16} ${(GY0 + GY1) / 2})`}>
				{yLabel}
			</text>
			<text x={(GX0 + GX1) / 2} y={GY1 + 88} textAnchor="middle" fontSize={18} fontWeight={800} fill={TOK.ink}>
				{xLabel}
			</text>
			{ends && (
				<g>
					<text x={GX0 + 4} y={GY1 + 88} fontSize={16} fontWeight={700} fill={TOK.inkDim}>
						{ends[0]}
					</text>
					<text x={GX1 - 4} y={GY1 + 88} textAnchor="end" fontSize={16} fontWeight={700} fill={TOK.inkDim}>
						{ends[1]}
					</text>
				</g>
			)}
			{glyph === 'beak' && (
				<g opacity={fadeAt(frame, before.at)}>
					<Beak x={GX0 + 30} y={GY1 + 50 + idleBob(frame, 1, 1)} depth={4} s={0.9} />
					<Beak x={GX1 - 50} y={GY1 + 50 + idleBob(frame, 2, 1)} depth={18} s={0.9} />
				</g>
			)}
			{glyph === 'fish' && (
				<g opacity={fadeAt(frame, before.at)}>
					<Fish x={GX0 + 34} y={GY1 + 50 + idleBob(frame, 1, 1)} s={0.7} />
					<Fish x={GX1 - 44} y={GY1 + 50 + idleBob(frame, 2, 1)} s={1.35} />
				</g>
			)}

			{/* before */}
			<g opacity={Math.min(1, drawB * 3)}>
				<path d={area(b)} fill={theme.soft} opacity={drawB >= 1 ? 1 - 0.45 * pOn : 0} />
				<path d={path(b, drawB)} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinejoin="round" />
				<g opacity={fadeAt(frame, before.at + 40)}>
					<line x1={gx(mB)} y1={GY1} x2={gx(mB)} y2={gy(1) - 8} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="6 5" />
				</g>
			</g>

			{/* pressure: the side that is lost gets a warm haze */}
			<g opacity={pOn}>
				<path d={`${xs.map((x, i) => `${i ? 'L' : 'M'} ${gx(x).toFixed(1)} ${gy(b[i]).toFixed(1)}`).join(' ')} ${xs
					.slice()
					.reverse()
					.map((x, j) => `L ${gx(x).toFixed(1)} ${gy(sv[N - 1 - j]).toFixed(1)}`)
					.join(' ')} Z`} fill="rgba(210,70,60,0.18)" />
				<Tag x={lostSide === 'left' ? gx(20) : gx(80)} y={GY0 + 20} text={pressure.label} color={PAL.stop} size={16} />
			</g>

			{/* survivors */}
			<g opacity={Math.min(1, drawS * 3)}>
				<path d={path(sv, drawS)} fill="none" stroke={offspring ? TOK.inkDim : TOK.ink} strokeWidth={3.5} strokeDasharray="9 6" />
			</g>

			{/* next generation */}
			{offspring && (
				<g opacity={Math.min(1, drawO * 3)}>
					<path d={path(o, drawO)} fill="none" stroke={PAL.teal} strokeWidth={4} />
				</g>
			)}

			{/* mean shift arrow (amber) */}
			<g opacity={arrowT}>
				<line x1={gx(newMean)} y1={GY1} x2={gx(newMean)} y2={gy(offspring ? 1 : Math.max(...sv)) - 4} stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="6 5" />
				{(() => {
					const y = GY1 - 22;
					const x1 = gx(mB);
					const x2 = x1 + (gx(newMean) - x1) * arrowT;
					const dir = Math.sign(gx(newMean) - x1) || 1;
					return (
						<g>
							<line x1={x1} y1={y} x2={x2 - dir * 10} y2={y} stroke={TOK.amber} strokeWidth={5 + pulse * 1.5} strokeLinecap="round" />
							<path d={`M ${x2} ${y} L ${x2 - dir * 14} ${y - 9} L ${x2 - dir * 14} ${y + 9} Z`} fill={TOK.amber} />
						</g>
					);
				})()}
				{shiftText && (
					<Tag x={lostSide === 'left' ? gx(16) : gx(84)} y={GY0 + 62} text={shiftText.text} color={TOK.amberInk} fill="#fff6e6" size={16} opacity={fadeAt(frame, shiftText.at)} />
				)}
			</g>

			{/* legend, on the side the population is NOT pushed away from */}
			{(() => {
				const lx = lostSide === 'left' ? gx(66) : gx(3);
				const rows: {label: string; at: number; stroke: string; dash?: string}[] = [
					{label: before.label, at: before.at, stroke: theme.accent},
					{label: survivors.label, at: survivors.at, stroke: offspring ? TOK.inkDim : TOK.ink, dash: '9 6'},
					...(offspring ? [{label: offspring.label, at: offspring.at, stroke: PAL.teal}] : []),
				];
				return rows.map((r, i) => (
					<g key={i} opacity={fadeAt(frame, r.at + 10)}>
						<line x1={lx} y1={GY0 + 12 + i * 26} x2={lx + 30} y2={GY0 + 12 + i * 26} stroke={r.stroke} strokeWidth={4} strokeDasharray={r.dash} />
						<text x={lx + 38} y={GY0 + 18 + i * 26} fontSize={16} fontWeight={800} fill={TOK.ink}>
							{r.label}
						</text>
					</g>
				));
			})()}

			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
