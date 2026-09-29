// ShoreDiagram (bio11m3Shore) — rocky-shore zonation, and the removal
// experiment (Connell, 1961) that showed abiotic and biotic factors set
// different edges of the same bands.
//
// A rock platform slopes from the high shore (left, out of the water longest)
// down into the sea (right). Two barnacle species occupy two bands: the
// upper-shore species (small, pale) and the lower-shore species (larger,
// tan). The boundary between the bands is one line on the rock, and the
// labels in the right-hand column point at it:
//   dry      the TOP edge of the lower species' band: it cannot survive drying
//            out any higher (abiotic tolerance limit).
//   compete  the BOTTOM edge of the upper species' band: it is crowded out by
//            the lower species there (biotic limit).
//   remove   the lower species is removed; the upper species spreads down into
//            the zone it was excluded from, because the competitor, not the
//            conditions, was keeping it out.
// Species labels are props; the site lesson doesn't name the species.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {ECO, Footer, H, Pill, Title, W, fadeAt, popAt, textWidth, type FooterLine} from './shared';
import {EcoGloss, EcoIcon} from './icons';

export type ShoreProps = {
	title?: string;
	upper?: string;
	lower?: string;
	beats?: Partial<{shore: number; upper: number; lower: number; dry: number; compete: number; remove: number}>;
	dryText?: string;
	competeText?: string;
	removeText?: string;
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3shore';

export const ShoreDiagram = ({
	title, upper = 'upper-shore barnacle', lower = 'lower-shore barnacle', beats = {},
	dryText = 'upper limit of lower species: drying out (abiotic)', competeText = 'lower limit of upper species: competitor (biotic)', removeText = 'competitor removed: upper species spreads down',
	footer = [], delay = 62,
}: ShoreProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {shore: 0, upper: 9999, lower: 9999, dry: 9999, compete: 9999, remove: 9999, ...beats};
	const top = title ? 50 : 10;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const pulse = idlePulse(frame);

	const base = H - footH - 96;
	const A = {x: 40, y: top + 96};
	const Bp = {x: 470, y: base - 30};
	const at = (s: number) => ({x: A.x + (Bp.x - A.x) * s, y: A.y + (Bp.y - A.y) * s});
	const U0 = 0.08;
	const MID = 0.46;
	const L1 = 0.84;
	const seaS = 0.8;
	const wave = Math.sin(frame / 24) * 3;
	const removed = frame > b.remove ? fadeAt(frame, b.remove, 20) : 0;

	const tokens = (s0: number, s1: number, n: number, seed: number) =>
		Array.from({length: n}, (_, k) => {
			const s = s0 + ((s1 - s0) * (k + 0.5)) / n;
			const p = at(s);
			return {x: p.x + ((k * 37 + seed) % 9) - 4, y: p.y - 9 - ((k * 13 + seed) % 3) * 4};
		});
	const upperT = tokens(U0, MID - 0.02, 8, 3);
	const lowerT = tokens(MID + 0.02, L1, 8, 7);
	const spreadT = tokens(MID + 0.04, L1 - 0.1, 5, 5);
	const edge = at(MID);

	// right-hand label column, leaders to the boundary
	const colX = 520;
	const label = (text: string, y: number, color: string, opacity: number, amber?: boolean) => {
		const w = Math.min(232, textWidth(text, 14) + 20);
		const lines = w >= 232 ? splitTwo(text) : [text];
		const h = lines.length * 18 + 10;
		return (
			<g opacity={opacity}>
				<line x1={colX - 4} y1={y} x2={edge.x + 8} y2={edge.y - 4} stroke={color} strokeWidth={2} strokeDasharray="5 4" />
				<rect x={colX - 4} y={y - h / 2} width={236} height={h} rx={10} fill={amber ? '#fff6e6' : '#ffffff'} stroke={color} strokeWidth={2} />
				{lines.map((l, i) => (
					<text key={i} x={colX + 8} y={y - h / 2 + 19 + i * 18} fill={amber ? TOK.amberInk : color} fontSize={14} fontWeight={800}>{l}</text>
				))}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Rocky shore'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, b.shore, 16)}>
				<DioramaPlinth id={`${ID}p`} cx={270} cy={base + 16} rx={250} />
				{/* rock platform */}
				<path d={`M ${A.x} ${A.y} L ${Bp.x + 30} ${Bp.y + 12} L ${Bp.x + 30} ${base + 8} L ${A.x} ${base + 8} Z`} fill={`url(#${ID}-ball-rock)`} stroke="#8f8474" strokeWidth={1.5} />
				<path d={`M ${A.x} ${A.y} L ${Bp.x + 30} ${Bp.y + 12}`} stroke="#7d7263" strokeWidth={3} />
				{/* sea over the low shore */}
				<path d={`M ${at(seaS).x} ${at(seaS).y + wave} L ${Bp.x + 40} ${at(seaS).y + wave} L ${Bp.x + 40} ${base + 8} L ${at(seaS).x} ${base + 8} Z`} fill={ECO.sea} opacity={0.35} />
				<path d={`M ${at(seaS).x - 20} ${at(seaS).y + wave} L ${Bp.x + 40} ${at(seaS).y + wave}`} stroke="#ffffff" strokeWidth={2.5} strokeOpacity={0.9} />
				<text x={A.x} y={A.y - 18} fill={TOK.inkDim} fontSize={15} fontWeight={800}>high shore: out of water longest</text>
				<text x={Bp.x + 36} y={base + 34} textAnchor="end" fill="#1f5f8a" fontSize={15} fontWeight={800}>low shore: under water longest</text>
			</g>
			{/* band boundary */}
			{frame > b.lower && (
				<line x1={edge.x - 6} y1={edge.y - 30} x2={edge.x + 10} y2={edge.y + 20} stroke={TOK.inkDim} strokeWidth={2} strokeDasharray="4 4" opacity={fadeAt(frame, b.lower + 20, 12)} />
			)}
			{upperT.map((t, i) => {
				const p = popAt(frame, fps, b.upper + i * 3);
				return <EcoIcon key={`u${i}`} id={ID} name="barnacle" x={t.x} y={t.y + idleBob(frame, i, 0.6)} s={0.3 * Math.min(1, p)} frame={frame} />;
			})}
			{lowerT.map((t, i) => {
				const p = popAt(frame, fps, b.lower + i * 3);
				return <EcoIcon key={`l${i}`} id={ID} name="barnacle" x={t.x} y={t.y + idleBob(frame, i + 20, 0.6)} s={0.46 * Math.min(1, p)} frame={frame} opacity={1 - removed} opts={{tone: 'shell'}} />;
			})}
			{frame > b.remove && spreadT.map((t, i) => {
				const p = popAt(frame, fps, b.remove + 24 + i * 6);
				return <EcoIcon key={`s${i}`} id={ID} name="barnacle" x={t.x + 6} y={t.y + idleBob(frame, i + 40, 0.6)} s={0.3 * Math.min(1, p)} frame={frame} />;
			})}
			{/* legend */}
			<g opacity={fadeAt(frame, b.upper, 12)}>
				<EcoIcon id={ID} name="barnacle" x={colX + 10} y={top + 20} s={0.3} frame={frame} />
				<text x={colX + 30} y={top + 26} fill={theme.accent} fontSize={15} fontWeight={800}>{upper}</text>
			</g>
			<g opacity={fadeAt(frame, b.lower, 12) * (1 - removed * 0.6)}>
				<EcoIcon id={ID} name="barnacle" x={colX + 10} y={top + 54} s={0.42} frame={frame} opts={{tone: 'shell'}} />
				<text x={colX + 30} y={top + 60} fill="#9a6a2a" fontSize={15} fontWeight={800}>{lower}</text>
			</g>
			{frame > b.dry && label(dryText, top + 118, '#c0562e', fadeAt(frame, b.dry, 14))}
			{frame > b.compete && label(competeText, top + 190, TOK.amber, fadeAt(frame, b.compete, 14) * (0.85 + 0.15 * pulse), true)}
			{frame > b.remove && label(removeText, top + 262, theme.accent, fadeAt(frame, b.remove + 30, 14))}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};

const splitTwo = (t: string) => {
	const words = t.split(' ');
	let best = 1;
	let bestDiff = Infinity;
	for (let i = 1; i < words.length; i++) {
		const a = words.slice(0, i).join(' ').length;
		const b = words.slice(i).join(' ').length;
		if (Math.abs(a - b) < bestDiff) {
			bestDiff = Math.abs(a - b);
			best = i;
		}
	}
	return [words.slice(0, best).join(' '), words.slice(best).join(' ')];
};
