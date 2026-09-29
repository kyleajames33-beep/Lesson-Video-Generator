// CardsDiagram (chem12m8Cards): a config-driven gallery of 2–5 stone plinths.
//
// Each plinth carries one or two small coded objects from gallery-icons.tsx
// (the objects carry the meaning), with a big short title and one to three
// short lines under it. Optional per-card `ask` pill above the object
// ("What is it?") and `tag` pill under the lines ("→ drinking water").
// Cards appear on beats timed to the voiceover; an optional `highlight` card
// turns amber (ring + title) as the single most important thing; an optional
// `footer` band lands last (text, optional sub-line, optional small icons such
// as sources), amber when it is the scene's takeaway.
//
// Beats (frames after `delay`): one per card, then one per footer item, then
// the footer text. Missing beats fall back to an even stagger.
// Defaults reproduce Chemistry-Y12-M8-L3 `concept` (qualitative vs quantitative).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {GalleryDefs, GalleryIcon, iconBox, type IconSpec} from './gallery-icons';
import {Pill, pop, ramp} from './shared';

export type GalleryCard = {
	icons: IconSpec[];
	title: string;
	lines?: string[];
	ask?: string;
	tag?: string;
	/** Frames after delay when the title + lines appear (default: the card's beat). */
	linesAt?: number;
	/** Frames after delay when the tag appears (default: after the lines). */
	tagAt?: number;
};
export type GalleryFooter = {
	text: string;
	sub?: string;
	amber?: boolean;
	items?: {icon: IconSpec; label: string}[];
};
export type CardsProps = {
	delay?: number;
	header?: string;
	/** Frames after delay when the header appears (default 0). */
	headerAt?: number;
	cards?: GalleryCard[];
	highlight?: number;
	footer?: GalleryFooter;
	beats?: number[];
	ariaLabel?: string;
};

const ID = 'c12m8cards';
const W = 760;
const H = 530;

const DEFAULT_CARDS: GalleryCard[] = [
	{
		ask: 'What is it?',
		icons: [{name: 'testTube', label: '+ AgNO₃'}],
		title: 'Qualitative',
		lines: ['identity', 'Cl⁻ may be present'],
	},
	{
		ask: 'How much?',
		icons: [{name: 'burette'}, {name: 'balance', load: 'crucible'}],
		title: 'Quantitative',
		lines: ['amount', 'titration, gravimetry'],
	},
	{
		icons: [{name: 'evidenceStack'}],
		title: 'Build the case',
		lines: ['one test rarely', 'proves it'],
	},
];
const DEFAULT_FOOTER: GalleryFooter = {text: 'Identity, not amount, and never from a single test.', amber: true};

/** Largest font size ≤ `size` (≥ `min`) at which `s` fits in `w`. */
const fit = (s: string, size: number, w: number, min = 15) => Math.max(min, Math.min(size, w / (s.length * 0.56)));

export const CardsDiagram = ({
	delay = 62,
	header,
	headerAt = 0,
	cards = DEFAULT_CARDS,
	highlight,
	footer = DEFAULT_FOOTER,
	beats = [47, 345, 498, 669],
	ariaLabel,
}: CardsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = Math.max(1, Math.min(5, cards.length));
	const list = cards.slice(0, n);
	const nItems = footer?.items?.length ?? 0;
	const beatAt = (i: number) => beats[i] ?? (beats.length ? beats[beats.length - 1] + 40 * (i - beats.length + 1) : 20 + i * 60);

	// ── Layout ────────────────────────────────────────────────────────────
	const margin = 10;
	const colW = (W - margin * 2) / n;
	const cxs = list.map((_, i) => margin + colW * (i + 0.5));
	const headerH = header ? 44 : 0;
	const hasAsk = list.some((c) => c.ask);
	const topY = headerH + (hasAsk ? 52 : 8);

	const footerH = footer ? (nItems ? 132 : footer.sub ? 84 : 58) : 0;
	const footerTop = H - 6 - footerH;

	const titleSize = n <= 2 ? 30 : n === 3 ? 27 : n === 4 ? 23 : 20;
	const lineSize = n <= 2 ? 21 : n === 3 ? 20 : n === 4 ? 18 : 16.5;
	const maxLines = Math.max(0, ...list.map((c) => c.lines?.length ?? 0));
	const hasTag = list.some((c) => c.tag);
	const labelsH = titleSize + 6 + maxLines * (lineSize + 6) + (hasTag ? 40 : 0);

	const rx = Math.min(n <= 2 ? 118 : 94, colW * 0.42);
	const ry = rx * 0.34;
	const depth = rx * 0.2;
	const plinthY = (footer ? footerTop - 12 : H - 10) - labelsH - (ry + depth) - 14;
	const titleY = plinthY + ry + depth + 12 + titleSize;
	const standY = plinthY + ry * 0.3;

	// Fit each card's objects; then centre the whole build in any spare height.
	const gap = 8;
	const fits = list.map((c) => {
		const boxes = c.icons.map(iconBox);
		const totW = boxes.reduce((sum, bx) => sum + bx.w, 0) + gap * Math.max(0, boxes.length - 1);
		const maxH = Math.max(1, ...boxes.map((bx) => bx.h));
		const sc = Math.min(1.3, (colW * 0.92) / totW, (standY - topY - 4) / maxH);
		return {boxes, totW, sc, usedH: maxH * sc};
	});
	const slack = Math.max(0, standY - topY - 4 - Math.max(...fits.map((f) => f.usedH)));
	const shift = -slack / 2;
	const askY = standY - Math.max(...fits.map((f) => f.usedH)) - 30;

	const hl = highlight !== undefined && highlight >= 0 && highlight < n ? highlight : -1;
	const hlOn = hl >= 0 ? ramp(frame, beatAt(hl) + 14, 14) : 0;
	const pulse = idlePulse(frame);

	const card = (c: GalleryCard, i: number) => {
		const b = beatAt(i);
		const cx = cxs[i];
		const inA = ramp(frame, b, 12);
		const lift = (1 - inA) * 18;
		const p = pop(frame, fps, b + 4);
		const isHl = i === hl;
		const {boxes, totW, sc} = fits[i];
		let x = cx - (totW * sc) / 2;
		const textWMax = colW - 10;
		const lb = c.linesAt ?? b;
		const tSize = fit(c.title, titleSize, textWMax, 17);
		return (
			<g key={i} opacity={inA}>
				<g transform={`translate(0,${lift})`}>
					{isHl && (
						<ellipse cx={cx} cy={plinthY + depth * 0.5} rx={rx + 10} ry={ry + 8} fill="none" stroke={TOK.amber} strokeWidth={3 + pulse * 2} opacity={hlOn} />
					)}
					<DioramaPlinth id={ID} cx={cx} cy={plinthY} rx={rx} />
					{c.icons.map((ic, j) => {
						const bx = boxes[j];
						const icx = x + (bx.w * sc) / 2;
						x += bx.w * sc + gap * sc;
						return (
							<g key={j} transform={`translate(${icx},${standY}) scale(${p}) translate(${-icx},${-standY})`}>
								<GalleryIcon id={ID} uid={`${ID}-${i}-${j}`} spec={ic} x={icx} y={standY} scale={sc / (ic.scale ?? 1)} t={frame - b} accent={theme.accent} />
							</g>
						);
					})}
				</g>
				{c.ask && <Pill x={cx} y={askY} text={c.ask} color={theme.accent} size={fit(c.ask, 20, textWMax - 30, 16)} opacity={ramp(frame, b, 10)} />}
				<text x={cx} y={titleY} textAnchor="middle" fill={isHl && hlOn > 0.5 ? TOK.amberInk : TOK.ink} fontSize={tSize} fontWeight={800} opacity={ramp(frame, lb + 6, 12)}>
					{c.title}
				</text>
				{(c.lines ?? []).map((ln, j) => (
					<text key={j} x={cx} y={titleY + 8 + (j + 1) * (lineSize + 6) - 4} textAnchor="middle" fill={TOK.inkDim} fontSize={fit(ln, lineSize, textWMax)} fontWeight={650} opacity={ramp(frame, lb + 12 + j * 7, 12)}>
						{ln}
					</text>
				))}
				{c.tag && (
					<Pill
						x={cx}
						y={titleY + 8 + maxLines * (lineSize + 6) + 22}
						text={c.tag}
						color={isHl ? TOK.amberInk : theme.accent}
						size={fit(c.tag, lineSize, textWMax - 26)}
						opacity={ramp(frame, c.tagAt ?? lb + 14 + (c.lines?.length ?? 0) * 7, 12)}
					/>
				)}
			</g>
		);
	};

	const renderFooter = () => {
		if (!footer) return null;
		const fb = beatAt(n + nItems);
		const tIn = ramp(frame, fb, 14);
		const bandIn = nItems ? ramp(frame, beatAt(n), 12) : tIn;
		const stroke = footer.amber ? TOK.amber : 'rgba(0,0,0,0.1)';
		const ink = footer.amber ? TOK.amberInk : TOK.ink;
		const items = footer.items ?? [];
		const itemW = 170;
		const textX0 = 16 + (nItems ? nItems * itemW + 16 : 0);
		const textCx = (textX0 + 744) / 2;
		const textWMax = 744 - textX0 - 24;
		const mainSize = fit(footer.text, 26, textWMax, 18);
		const cy = footerTop + footerH / 2;
		return (
			<g>
				<rect x={16} y={footerTop} width={728} height={footerH} rx={18} fill="#ffffff" fillOpacity={0.92} stroke={stroke} strokeWidth={footer.amber ? 2.5 + (tIn >= 1 ? pulse * 1.5 : 0) * 1 : 1.5} opacity={bandIn} />
				{items.map((it, j) => {
					const ib = beatAt(n + j);
					const a = ramp(frame, ib, 12);
					const ix = 16 + 16 + itemW * (j + 0.5);
					const box = iconBox(it.icon);
					const isc = Math.min(1, 84 / box.h, (itemW - 30) / box.w);
					return (
						<g key={j} opacity={a}>
							<GalleryIcon id={ID} uid={`${ID}-f${j}`} spec={it.icon} x={ix} y={footerTop + 96} scale={isc} t={frame - ib} accent={theme.accent} />
							<text x={ix} y={footerTop + 120} textAnchor="middle" fill={TOK.inkDim} fontSize={fit(it.label, 17, itemW - 8)} fontWeight={750}>
								{it.label}
							</text>
						</g>
					);
				})}
				<g opacity={tIn}>
					<text x={textCx} y={footer.sub ? cy - 6 : cy + mainSize * 0.36} textAnchor="middle" fill={ink} fontSize={mainSize} fontWeight={800}>
						{footer.text}
					</text>
					{footer.sub && (
						<text x={textCx} y={cy + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={fit(footer.sub, 19, textWMax, 16)} fontWeight={650}>
							{footer.sub}
						</text>
					)}
				</g>
			</g>
		);
	};

	return (
		<svg
			viewBox={`0 0 ${W} ${H}`}
			role="img"
			aria-label={ariaLabel ?? `${list.map((c) => c.title).join(', ')}${footer ? `. ${footer.text}` : ''}`}
			style={{width: '100%', fontFamily: FONT_DISPLAY}}
		>
			<DioramaDefs id={ID} />
			<GalleryDefs id={ID} />
			{header && (
				<text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={fit(header, 24, W - 40)} fontWeight={800} opacity={ramp(frame, headerAt, 12)}>
					{header}
				</text>
			)}
			<g transform={`translate(0,${shift})`}>
				{list.map(card)}
				{renderFooter()}
			</g>
		</svg>
	);
};
