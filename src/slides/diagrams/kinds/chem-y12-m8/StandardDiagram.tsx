// StandardDiagram (chem12m8Standard): a measured value only means something
// against a standard (Chemistry-Y12-M8-L6 `concept-standards`).
//
// Left: a water sample on a plinth with its "measured value" tag and a "?"
// (a number alone decides nothing). A gauge appears beside it; the ADWG limit
// line drops in and the same reading is now judged (✓ within limit). Under it,
// chips: what the ADWG covers (chemical, physical, microbiological) and what
// its limits protect (health; taste, odour, appearance).
// Right: the SAME reading on two gauges with different acceptable limits
// (ecosystem / intended use): fine in one, concerning in the other.
// Footer (amber): the takeaway. No scale numbers are drawn: gauge levels are
// schematic fractions (props), never values.
//
// Beats (frames after `delay`): [compare, ADWG limit, covers, protects,
// contexts, verdicts, footer].

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Beaker, Mark, Pill, clamp, pop, ramp} from './shared';
import {interpolate} from 'remotion';

export type StandardContext = {label: string; limit: number; verdict: string};
export type StandardProps = {
	delay?: number;
	sampleLabel?: string;
	standardName?: string;
	leftHeader?: string;
	/** Reading as a fraction of the gauge height (schematic, no values). */
	reading?: number;
	/** The main standard's limit as a fraction of the gauge height. */
	limit?: number;
	leftVerdict?: string;
	covers?: string[];
	coversLabel?: string;
	protects?: string[];
	protectsLabel?: string;
	rightHeader?: string;
	contexts?: StandardContext[];
	rightNote?: [string, string];
	footer?: string;
	beats?: number[];
};

const ID = 'c12m8std';
const W = 760;
const H = 530;
const PL_Y = 232;

export const StandardDiagram = ({
	delay = 62,
	sampleLabel = 'measured value',
	standardName = 'ADWG limit',
	leftHeader = 'Compare with the standard',
	reading = 0.48,
	limit = 0.74,
	leftVerdict = 'within limit',
	covers = ['chemical', 'physical', 'microbiological'],
	coversLabel = 'ADWG limits cover',
	protects = ['health', 'taste, odour, appearance'],
	protectsLabel = 'limits protect',
	rightHeader = 'Same reading, new context',
	contexts = [
		{label: 'Ecosystem A', limit: 0.74, verdict: 'fine'},
		{label: 'Ecosystem B', limit: 0.28, verdict: 'concerning'},
	],
	rightNote = ['Acceptable ranges differ', 'by ecosystem and use'],
	footer = 'A number alone decides nothing; the standard does.',
	beats = [82, 193, 296, 359, 485, 628, 738],
}: StandardProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const [bCompare, bLimit, bCovers, bProtects, bCtx, bVerdict, bFooter] = beats;
	const pulse = idlePulse(frame);

	// A vertical gauge standing at (x, baseY). Levels are fractions of its height.
	const Gauge = ({x, baseY, h, level, lim, limIn, fillIn, limLabel, tag}: {x: number; baseY: number; h: number; level: number; lim: number; limIn: number; fillIn: number; limLabel?: string; tag: string}) => {
		const w = 36;
		const top = baseY - h;
		const ly = baseY - 10 - (h - 20) * level * fillIn;
		const limY = baseY - 10 - (h - 20) * lim;
		const drop = interpolate(limIn, [0, 1], [-40, 0], clamp);
		return (
			<g>
				<ellipse cx={x + 5} cy={baseY + 3} rx={w * 0.75} ry={6} fill="rgba(40,36,30,0.18)" />
				<rect x={x - w / 2} y={top} width={w} height={h} rx={w / 2} fill="rgba(255,255,255,0.7)" />
				<defs>
					<clipPath id={`${ID}-${tag}-clip`}>
						<rect x={x - w / 2 + 3} y={top + 3} width={w - 6} height={h - 6} rx={w / 2 - 3} />
					</clipPath>
				</defs>
				<rect x={x - w / 2} y={ly} width={w} height={baseY - ly} fill={theme.accent2} opacity={0.55} clipPath={`url(#${ID}-${tag}-clip)`} />
				<line x1={x - w / 2 + 3} x2={x + w / 2 - 3} y1={ly} y2={ly} stroke={theme.accent} strokeWidth={3} opacity={fillIn} />
				{Array.from({length: 7}, (_, i) => (
					<line key={i} x1={x + w / 2 - 10} x2={x + w / 2 - 3} y1={baseY - 18 - i * ((h - 36) / 6)} y2={baseY - 18 - i * ((h - 36) / 6)} stroke="rgba(60,70,80,0.45)" strokeWidth={1.5} />
				))}
				<rect x={x - w / 2} y={top} width={w} height={h} rx={w / 2} fill="none" stroke="rgba(70,90,110,0.55)" strokeWidth={2.6} />
				<rect x={x - w / 2 + 6} y={top + 14} width={5} height={h - 40} rx={2.5} fill="#ffffff" opacity={0.55} />
				{/* limit line */}
				<g opacity={limIn} transform={`translate(0,${drop})`}>
					<line x1={x - w / 2 - 10} x2={x + w / 2 + 10} y1={limY} y2={limY} stroke={TOK.ink} strokeWidth={3.5} strokeLinecap="round" />
					{limLabel && (
						<text x={x + w / 2 + 16} y={limY + 6} fill={TOK.ink} fontSize={17} fontWeight={800}>
							{limLabel}
						</text>
					)}
				</g>
			</g>
		);
	};

	// ── Left panel ───────────────────────────────────────────────────────
	const LX = 180;
	const jarX = 96;
	const gX = 232;
	const gBase = PL_Y + 10;
	const gH = 176;
	const readY = gBase - 10 - (gH - 20) * reading;
	const cmpIn = ramp(frame, bCompare, 14);
	const limIn = ramp(frame, bLimit, 16);
	const verdIn = ramp(frame, bLimit + 30, 14);
	const qIn = 1 - ramp(frame, bLimit + 20, 10);

	const chipRow = (items: string[], y: number, start: number) => {
		const size = 17;
		const ws = items.map((s) => s.length * size * 0.56 + 18);
		const total = ws.reduce((a, b) => a + b, 0) + 8 * (items.length - 1);
		let x = 196 - total / 2;
		return items.map((s, i) => {
			const cx = x + ws[i] / 2;
			x += ws[i] + 8;
			return <Pill key={s} x={cx} y={y} text={s} color={theme.accent} size={size} padX={9} opacity={ramp(frame, start + i * 8, 12)} />;
		});
	};

	// ── Right panel ──────────────────────────────────────────────────────
	const rxs = [508, 666];
	const ctxIn = ramp(frame, bCtx, 14);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A measured value is compared against the ADWG limit; the same reading can be fine in one context and concerning in another" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			{/* LEFT: a reading, then the standard */}
			<text x={LX} y={32} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={cmpIn}>
				{leftHeader}
			</text>
			<DioramaPlinth id={ID} cx={LX} cy={PL_Y} rx={148}>
				<Beaker cx={jarX} baseY={PL_Y + 12} w={78} h={100} level={0.74} liquid="rgba(120,175,225,0.42)" />
			</DioramaPlinth>
			<Pill x={jarX} y={PL_Y - 122} text={sampleLabel} color={theme.accent} size={18} />
			{/* the "?" : on its own the value decides nothing */}
			<g opacity={qIn} transform={`translate(${jarX},${PL_Y - 172}) scale(${1 + 0.06 * pulse})`}>
				<circle r={20} fill="#ffffff" stroke={TOK.inkDim} strokeWidth={2.5} />
				<text y={9} textAnchor="middle" fill={TOK.inkDim} fontSize={26} fontWeight={800}>?</text>
			</g>
			<g opacity={verdIn} transform={`translate(0,${(1 - verdIn) * 8})`}>
				<Mark x={jarX - 58} y={PL_Y - 172} ok size={15} />
				<text x={jarX - 36} y={PL_Y - 165} fill={TOK.chem2} fontSize={19} fontWeight={800}>
					{leftVerdict}
				</text>
			</g>
			<g opacity={cmpIn} transform={`translate(${gX},${gBase}) scale(${Math.min(1, pop(frame, fps, bCompare))}) translate(${-gX},${-gBase})`}>
				<Gauge x={gX} baseY={gBase} h={gH} level={reading} lim={limit} limIn={limIn} fillIn={ramp(frame, bCompare + 6, 24)} limLabel={standardName} tag="main" />
			</g>
			{/* reading pointer from the sample to the gauge */}
			<g opacity={ramp(frame, bCompare + 24, 12)}>
				<line x1={jarX + 44} x2={gX - 24} y1={readY} y2={readY} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="6 5" />
				<path d={`M ${gX - 20} ${readY} L ${gX - 30} ${readY - 7} L ${gX - 30} ${readY + 7} Z`} fill={theme.accent} />
			</g>

			<text x={196} y={334} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={750} opacity={ramp(frame, bCovers, 12)}>
				{coversLabel}
			</text>
			{chipRow(covers, 362, bCovers + 4)}
			<text x={196} y={404} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={750} opacity={ramp(frame, bProtects, 12)}>
				{protectsLabel}
			</text>
			{chipRow(protects, 432, bProtects + 4)}

			{/* divider */}
			<line x1={392} x2={392} y1={20} y2={456} stroke="rgba(0,0,0,0.08)" strokeWidth={2} opacity={ctxIn} />

			{/* RIGHT: same reading, different standards */}
			<g opacity={ctxIn}>
				<text x={587} y={32} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>
					{rightHeader}
				</text>
				{contexts.slice(0, 2).map((c, i) => {
					const x = rxs[i];
					return (
						<g key={i}>
							<DioramaPlinth id={ID} cx={x} cy={PL_Y} rx={70}>
								<Gauge x={x} baseY={gBase} h={gH} level={reading} lim={c.limit} limIn={ramp(frame, bCtx + 20 + i * 14, 14)} fillIn={ramp(frame, bCtx + 8, 20)} limLabel="limit" tag={`c${i}`} />
							</DioramaPlinth>
							<text x={x} y={322} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>
								{c.label}
							</text>
						</g>
					);
				})}
				{/* the same reading across both gauges */}
				<line x1={rxs[0] + 20} x2={rxs[1] - 20} y1={readY} y2={readY} stroke={theme.accent} strokeWidth={2.5} strokeDasharray="6 5" />
				<text x={(rxs[0] + rxs[1]) / 2} y={readY + 24} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>
					same reading
				</text>
			</g>
			{contexts.slice(0, 2).map((c, i) => {
				const ok = reading <= c.limit;
				const a = ramp(frame, bVerdict + i * 16, 14);
				const w = c.verdict.length * 19 * 0.56 + 34;
				const x0 = rxs[i] - w / 2;
				return (
					<g key={i} opacity={a} transform={`translate(0,${(1 - a) * 8})`}>
						<Mark x={x0 + 13} y={356} ok={ok} size={13} />
						<text x={x0 + 34} y={363} fill={ok ? TOK.chem2 : '#c0392b'} fontSize={19} fontWeight={800}>
							{c.verdict}
						</text>
					</g>
				);
			})}
			<g opacity={ramp(frame, bCtx + 40, 14)}>
				<text x={587} y={410} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					{rightNote[0]}
				</text>
				<text x={587} y={436} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					{rightNote[1]}
				</text>
			</g>

			{/* takeaway */}
			<g opacity={ramp(frame, bFooter, 14)}>
				<rect x={30} y={474} width={700} height={48} rx={24} fill="#ffffff" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.2} />
				<text x={W / 2} y={506} textAnchor="middle" fill={TOK.amberInk} fontSize={23} fontWeight={800}>
					{footer}
				</text>
			</g>
		</svg>
	);
};
