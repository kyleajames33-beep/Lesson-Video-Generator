// TrendCompassDiagram — several periodic trends side by side, then their common cause.
//
// Each trend is a mini periodic-table board (a faint silhouette of the table)
// standing on its own plinth, with direction arrows drawn over it: an across
// arrow (left → right along a period) and/or down/up arrows (along a group,
// optionally on the left = metals or right = non-metals side). Each arrow is
// labelled with what the trend does in that direction. The boards arrive in
// narration order. Then two cause cards appear (one per factor) and light up in
// turn; while a card is lit, the arrows it explains (across or vertical) stay
// bright and the others dim. An amber banner lands the "one cause" line.
//
// Config-driven: any panels/arrows/causes/banner; beats are frames after `delay`.
// Text may contain "Z_eff", drawn as Z with a subscript "eff".

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse, STONE} from '../../diorama';
import {Arrow, clamp, fadeAt, popAt} from './shared';

export type CompassArrow = {
	dir: 'across' | 'down' | 'up';
	text: string;
	/** For down/up: which side of the table (left = metals side). Default left. */
	side?: 'left' | 'right';
	/** Optional region tag written at the arrow's top (e.g. "metals"). */
	tag?: string;
	at?: number;
};
export type CompassPanel = {title: string; at?: number; arrows: CompassArrow[]};
export type CompassCause = {
	/** Which arrows this cause explains. */
	explains: 'across' | 'vertical';
	/** Factor name, shown from `causesAt`. */
	factor: string;
	heading: string;
	line: string;
	sub?: string;
	at?: number;
};
export type TrendCompassProps = {
	panels?: CompassPanel[];
	causes?: CompassCause[];
	causesAt?: number;
	banner?: {text: string; at?: number};
	delay?: number;
};

const DEFAULT_PANELS: CompassPanel[] = [
	{
		title: 'Atomic radius',
		at: 49,
		arrows: [
			{dir: 'across', text: 'decreases', at: 62},
			{dir: 'down', text: 'increases', at: 100},
		],
	},
	{
		title: 'Electronegativity',
		at: 136,
		arrows: [
			{dir: 'across', text: 'increases', at: 176},
			{dir: 'down', text: 'decreases', at: 214},
		],
	},
	{
		title: 'Reactivity',
		at: 263,
		arrows: [
			{dir: 'down', side: 'left', tag: 'metals', text: 'more reactive', at: 311},
			{dir: 'up', side: 'right', tag: 'non-metals', text: 'more reactive', at: 366},
		],
	},
];
const DEFAULT_CAUSES: CompassCause[] = [
	{explains: 'across', factor: 'effective nuclear charge, Z_eff', heading: 'Across →', line: 'rising Z_eff dominates', sub: 'atoms shrink, pull electrons harder', at: 596},
	{explains: 'vertical', factor: 'number of occupied shells', heading: 'Down ↓', line: 'extra shells + shielding', sub: 'atoms grow, hold electrons loosely', at: 723},
];

const ID = 'c11cmp';
const W = 760;
const H = 530;
const BW = 224;
const BH = 156;
const BY = 54;
const PLINTH_Y = 248;
const CARD_Y = 334;
const CARD_H = 106;

/** Text with "Z_eff" rendered as Z + subscript eff. */
const Rich = ({text, size}: {text: string; size: number}) => {
	const parts = text.split('Z_eff');
	return (
		<>
			{parts.map((p, i) => (
				<tspan key={i}>
					{p}
					{i < parts.length - 1 && (
						<>
							<tspan>Z</tspan>
							<tspan fontSize={size * 0.68} dy={size * 0.22}>eff</tspan>
							<tspan dy={-size * 0.22}>{'​'}</tspan>
						</>
					)}
				</tspan>
			))}
		</>
	);
};

// Periodic-table silhouette cells (18 columns × 7 rows, no f-block).
const TABLE_CELLS: [number, number][] = [];
for (let r = 0; r < 7; r++)
	for (let c = 0; c < 18; c++) {
		const ok = r === 0 ? c === 0 || c === 17 : r < 3 ? c < 2 || c > 11 : true;
		if (ok) TABLE_CELLS.push([r, c]);
	}

const LabelChip = ({x, y, text, color, size = 18, opacity = 1}: {x: number; y: number; text: string; color: string; size?: number; opacity?: number}) => {
	const w = text.length * size * 0.55 + 22;
	const h = size + 13;
	return (
		<g opacity={opacity}>
			<rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={h / 2} fill={TOK.bgLift} stroke={color} strokeWidth={2.5} />
			<text x={x} y={y + size * 0.36} textAnchor="middle" fill={color} fontSize={size} fontWeight={800}>
				{text}
			</text>
		</g>
	);
};

export const TrendCompassDiagram = ({
	panels = DEFAULT_PANELS,
	causes = DEFAULT_CAUSES,
	causesAt = 445,
	banner = {text: 'One cause, three trends', at: 865},
	delay = 62,
}: TrendCompassProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const n = panels.length;
	const slot = W / n;
	const pxs = panels.map((_, i) => slot * (i + 0.5));

	// Which arrow kind is emphasised right now (null = all bright).
	const litCause = [...causes].reverse().find((c) => frame >= (c.at ?? Infinity));
	const bannerOn = banner ? frame >= (banner.at ?? Infinity) : false;
	const emph = bannerOn ? null : litCause?.explains ?? null;
	const emphT = (kind: 'across' | 'vertical') => {
		if (!litCause || bannerOn) return 1;
		const t = interpolate(frame, [litCause.at ?? 0, (litCause.at ?? 0) + 14], [0, 1], clamp);
		return emph === kind ? 1 : 1 - 0.65 * t;
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Periodic trends and their common cause" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			{panels.map((p, i) => {
				const cx = pxs[i];
				const bx0 = cx - BW / 2;
				const bx1 = cx + BW / 2;
				const pop = popAt(frame, fps, p.at ?? i * 60);
				const hasAcross = p.arrows.some((a) => a.dir === 'across');
				const cellW = (BW - 24) / 18;
				const cellH = (BH - 24) / 7;
				return (
					<g key={i} opacity={Math.min(1, pop * 1.5)}>
						<g transform={`translate(${cx},${PLINTH_Y}) scale(${0.7 + 0.3 * Math.min(1, pop)}) translate(${-cx},${-PLINTH_Y})`}>
							<DioramaPlinth id={ID} cx={cx} cy={PLINTH_Y} rx={Math.min(104, slot * 0.42)}>
								{[-1, 1].map((s) => (
									<rect key={s} x={cx + s * 64 - 5} y={BY + BH - 4} width={10} height={PLINTH_Y - BY - BH + 8} rx={3} fill={STONE.side} stroke={STONE.sideDark} strokeWidth={1.5} />
								))}
								<rect x={bx0 + 4} y={BY + 6} width={BW} height={BH} rx={14} fill="rgba(40,50,40,0.14)" />
								<rect x={bx0} y={BY} width={BW} height={BH} rx={14} fill={TOK.bgLift} stroke={TOK.cardBorder} strokeWidth={2} />
								{TABLE_CELLS.map(([r, c]) => (
									<rect
										key={`${r}-${c}`}
										x={bx0 + 12 + c * cellW + 0.8}
										y={BY + 12 + r * cellH + 0.8}
										width={cellW - 1.6}
										height={cellH - 1.6}
										rx={1.5}
										fill={theme.accent}
										opacity={0.1}
									/>
								))}
							</DioramaPlinth>
						</g>
						<text x={cx} y={36} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>
							{p.title}
						</text>

						{p.arrows.map((a, k) => {
							const at = a.at ?? (p.at ?? 0) + 20 + k * 30;
							const t = interpolate(frame, [at, at + 16], [0, 1], clamp);
							if (t <= 0) return null;
							const kind = a.dir === 'across' ? 'across' : 'vertical';
							const o = emphT(kind);
							const lit = emph === kind;
							const w = lit ? 5 + idlePulse(frame, 40) * 1.2 : 4;
							if (a.dir === 'across') {
								const y = BY + 42;
								const x0 = bx0 + 16;
								const x1 = bx1 - 14;
								return (
									<g key={k} opacity={o}>
										<Arrow x1={x0} y1={y} x2={x0 + (x1 - x0) * t} y2={y} color={theme.accent} width={w} head={15} />
										<LabelChip x={cx} y={y} text={a.text} color={theme.accent} opacity={fadeAt(frame, at + 8, 10)} />
									</g>
								);
							}
							const x = a.side === 'right' ? bx1 - 70 : bx0 + (hasAcross ? 62 : 70);
							const yTop = hasAcross ? BY + 70 : BY + 36;
							const yBot = BY + BH - 8;
							const [y0, y1] = a.dir === 'down' ? [yTop, yBot] : [yBot, yTop];
							const chipY = hasAcross ? BY + 112 : a.dir === 'down' ? BY + 116 : BY + 74;
							return (
								<g key={k} opacity={o}>
									{a.tag && (
										<text x={x} y={BY + 25} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800} opacity={fadeAt(frame, at - 4, 10)}>
											{a.tag}
										</text>
									)}
									<Arrow x1={x} y1={y0} x2={x} y2={y0 + (y1 - y0) * t} color={theme.accent} width={w} head={15} />
									<LabelChip x={x} y={chipY} text={a.text} color={theme.accent} size={a.text.length > 10 ? 16 : 18} opacity={fadeAt(frame, at + 8, 10)} />
								</g>
							);
						})}
					</g>
				);
			})}

			{/* Cause cards */}
			{causes.map((c, i) => {
				const cw = (W - 48 - 20 * (causes.length - 1)) / causes.length;
				const x0 = 24 + i * (cw + 20);
				const inT = fadeAt(frame, causesAt + i * 10, 14);
				const litT = fadeAt(frame, c.at ?? Infinity, 14);
				const isLit = frame >= (c.at ?? Infinity) && (emph === c.explains || bannerOn);
				const midX = x0 + cw / 2;
				return (
					<g key={i} opacity={inT} transform={`translate(0, ${(1 - inT) * 12})`}>
						<rect x={x0 + 3} y={CARD_Y + 5} width={cw} height={CARD_H} rx={16} fill="rgba(40,50,40,0.10)" />
						<rect x={x0} y={CARD_Y} width={cw} height={CARD_H} rx={16} fill={TOK.bgLift} stroke={theme.accent} strokeWidth={isLit ? 3.5 : 2} strokeOpacity={isLit ? 1 : 0.45} />
						<text x={midX} y={CARD_Y + 28} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>
							<Rich text={c.factor} size={18} />
						</text>
						<g opacity={litT}>
							<text x={midX} y={CARD_Y + 60} textAnchor="middle" fontSize={22} fontWeight={800}>
								<tspan fill={theme.accent}>{c.heading} </tspan>
								<tspan fill={TOK.ink}>
									<Rich text={c.line} size={22} />
								</tspan>
							</text>
							{c.sub && (
								<text x={midX} y={CARD_Y + 88} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>
									{c.sub}
								</text>
							)}
						</g>
					</g>
				);
			})}

			{/* Banner: the one cause */}
			{banner && (() => {
				const pop = popAt(frame, fps, banner.at ?? Infinity);
				if (pop <= 0) return null;
				const size = 24;
				const w = banner.text.length * size * 0.56 + 44;
				const y = 486 + (frame > (banner.at ?? 0) + 30 ? idleBob(frame, 2, 1.2) : 0);
				const glow = idlePulse(frame);
				return (
					<g opacity={Math.min(1, pop * 1.5)} transform={`translate(${W / 2},${y}) scale(${0.8 + 0.2 * Math.min(1, pop)})`}>
						<rect x={-w / 2} y={-24} width={w} height={48} rx={24} fill={TOK.bgLift} stroke={TOK.amber} strokeWidth={3 + glow * 1.5} />
						<text x={0} y={size * 0.36} textAnchor="middle" fill={TOK.amberInk} fontSize={size} fontWeight={800}>
							{banner.text}
						</text>
					</g>
				);
			})()}
		</svg>
	);
};
