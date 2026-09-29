// StrataDiagram (bio11m3Strata) — sedimentary rock layers as a cut-away cliff
// block on a stone plinth, with the fossils buried in each layer.
//
// Layers are given bottom-first. On its beat each layer settles onto the one
// below (sediment is deposited from above, so a layer can only form on top of
// an existing one); its fossils appear inside it, because a fossil takes the
// age of the layer it was buried in.
//   superposition  an "older ↓ / younger ↑" arrow, then the read-out: the
//                  fossils listed oldest (bottom) to youngest (top). The order
//                  on screen is computed from the layer order, never typed.
//   assemblage     each layer carries several fossils together (the
//                  assemblage) and a tag for the community/environment it
//                  indicates.
//   correlate      two cliffs far apart; the layers holding the same index
//                  fossil (amber) are joined by a dashed line: same age.
// Relative dating gives ORDER only: no ages in years appear anywhere.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Footer, H, Lines, Pill, Title, W, clamp, fadeAt, popAt, wrap, type FooterLine} from './shared';
import {EcoGloss, EcoIcon, type AnyIconName} from './icons';

export type Layer = {name?: string; fossils?: AnyIconName[]; at: number; tag?: string; amber?: boolean};
export type StrataProps = {
	mode?: 'superposition' | 'assemblage' | 'correlate';
	title?: string;
	layers: Layer[];
	/** correlate: the second cliff (bottom-first) and which layers match. */
	right?: Layer[];
	match?: {left: number; right: number; at: number; text?: string};
	labels?: {left?: string; right?: string};
	beats?: Partial<{arrow: number; read: number}>;
	readTitle?: string;
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3strata';
const BANDS = ['#c9b089', '#b99b74', '#d6c3a0', '#a98e6c', '#cdb895', '#b5a07e', '#d9caa9'];

const Block = ({x, w, layers, bottom, layerH, frame, fps, idp, showNames}: {
	x: number; w: number; layers: Layer[]; bottom: number; layerH: number; frame: number; fps: number; idp: string; showNames: boolean;
}) => {
	const depth = 16;
	return (
		<g>
			{layers.map((l, i) => {
				const p = interpolate(frame, [l.at, l.at + 18], [0, 1], clamp);
				if (p <= 0) return null;
				const yTarget = bottom - (i + 1) * layerH;
				const y = yTarget - (1 - p) * 60;
				const col = BANDS[i % BANDS.length];
				const fossils = l.fossils ?? [];
				return (
					<g key={i} opacity={Math.min(1, p * 1.5)}>
						{/* side face */}
						<path d={`M ${x + w} ${y} L ${x + w + depth} ${y - depth * 0.6} L ${x + w + depth} ${y + layerH - depth * 0.6} L ${x + w} ${y + layerH} Z`} fill={col} />
						<path d={`M ${x + w} ${y} L ${x + w + depth} ${y - depth * 0.6} L ${x + w + depth} ${y + layerH - depth * 0.6} L ${x + w} ${y + layerH} Z`} fill="rgba(0,0,0,0.16)" />
						{/* top face (only visible on the top layer, drawn for all; later layers cover it) */}
						<path d={`M ${x} ${y} L ${x + depth} ${y - depth * 0.6} L ${x + w + depth} ${y - depth * 0.6} L ${x + w} ${y} Z`} fill={col} />
						<path d={`M ${x} ${y} L ${x + depth} ${y - depth * 0.6} L ${x + w + depth} ${y - depth * 0.6} L ${x + w} ${y} Z`} fill="rgba(255,255,255,0.18)" />
						<rect x={x} y={y} width={w} height={layerH} fill={col} stroke="rgba(80,60,40,0.35)" strokeWidth={1} />
						{/* grain */}
						{Array.from({length: 6}, (_, k) => (
							<line key={k} x1={x + 8 + ((k * 53 + i * 31) % (w - 30))} y1={y + 8 + ((k * 17 + i * 7) % Math.max(8, layerH - 16))} x2={x + 22 + ((k * 53 + i * 31) % (w - 30))} y2={y + 8 + ((k * 17 + i * 7) % Math.max(8, layerH - 16))} stroke="rgba(80,60,40,0.18)" strokeWidth={1.5} />
						))}
						{l.amber && <rect x={x} y={y} width={w} height={layerH} fill="none" stroke={TOK.amber} strokeWidth={3 + 2 * idlePulse(frame)} />}
						{fossils.map((f, k) => {
							const fp = popAt(frame, fps, l.at + 16 + k * 6);
							const fx = x + (w * (k + 1)) / (fossils.length + 1);
							return <EcoIcon key={k} id={idp} name={f} x={fx} y={y + layerH / 2 + idleBob(frame, i * 4 + k, 0.8)} s={Math.min(0.62, layerH / 100) * Math.min(1, fp)} frame={frame} />;
						})}
					</g>
				);
			})}
		</g>
	);
};

export const StrataDiagram = ({mode = 'superposition', title, layers, right = [], match, labels = {}, beats = {}, readTitle = 'Oldest → youngest', footer = [], delay = 62}: StrataProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {arrow: 9999, read: 9999, ...beats};
	const top = title ? 56 : 18;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const plinthY = H - footH - 104;
	const bottom = plinthY + 8;

	if (mode === 'correlate') {
		const n = Math.max(layers.length, right.length);
		const layerH = Math.min(62, (bottom - top - 50) / n);
		const w = 200;
		const lx = 70;
		const rx2 = W - 70 - w - 16;
		const yOf = (i: number) => bottom - (i + 0.5) * layerH;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Rock layers'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<EcoGloss id={ID} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				<DioramaPlinth id={`${ID}L`} cx={lx + w / 2 + 8} cy={plinthY} rx={w / 2 + 24} />
				<DioramaPlinth id={`${ID}R`} cx={rx2 + w / 2 + 8} cy={plinthY} rx={w / 2 + 24} />
				<Block x={lx} w={w} layers={layers} bottom={bottom} layerH={layerH} frame={frame} fps={fps} idp={ID} showNames={false} />
				<Block x={rx2} w={w} layers={right} bottom={bottom} layerH={layerH} frame={frame} fps={fps} idp={ID} showNames={false} />
				{labels.left && <text x={lx + w / 2} y={top + 16} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>{labels.left}</text>}
				{labels.right && <text x={rx2 + w / 2} y={top + 16} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>{labels.right}</text>}
				{match && frame > match.at && (() => {
					const o = fadeAt(frame, match.at, 16);
					const y1 = yOf(match.left);
					const y2 = yOf(match.right);
					const t = interpolate(frame, [match.at, match.at + 24], [0, 1], clamp);
					const x1 = lx + w + 18;
					const x2 = rx2 - 4;
					return (
						<g opacity={o}>
							<line x1={x1} y1={y1} x2={x1 + (x2 - x1) * t} y2={y1 + (y2 - y1) * t} stroke={TOK.amber} strokeWidth={4} strokeDasharray="10 7" />
							{match.text && <Pill x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 24} text={match.text} size={15} color={TOK.amber} textColor={TOK.amberInk} />}
						</g>
					);
				})()}
				<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
			</svg>
		);
	}

	const n = layers.length;
	const layerH = Math.min(n <= 3 ? 96 : 72, (bottom - top - 24) / n);
	const w = 300;
	const x = 130;
	const yMid = (i: number) => bottom - (i + 0.5) * layerH;
	const assemblage = mode === 'assemblage';

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Rock layers'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<DioramaPlinth id={`${ID}p`} cx={x + w / 2 + 8} cy={plinthY} rx={w / 2 + 30} />
			<Block x={x} w={w} layers={layers} bottom={bottom} layerH={layerH} frame={frame} fps={fps} idp={ID} showNames={false} />
			{/* layer names / tags on the left or right */}
			{layers.map((l, i) => {
				const o = fadeAt(frame, l.at + 20, 14);
				return (
					<g key={i} opacity={o}>
						{l.name && <Lines x={x - 14} y={yMid(i) + 5} lines={wrap(l.name, 14)} size={15} color={TOK.inkDim} anchor="end" />}
						{assemblage && l.tag && <Pill x={x + w + 30 + Math.min(120, l.tag.length * 4.2)} y={yMid(i)} text={l.tag} size={15} color={l.amber ? TOK.amber : theme.accent} textColor={l.amber ? TOK.amberInk : theme.accent} />}
					</g>
				);
			})}
			{/* older / younger arrow */}
			{!assemblage && (
				<g opacity={fadeAt(frame, b.arrow, 14)}>
					<Arrow x1={x + w + 40} y1={bottom - 10} x2={x + w + 40} y2={bottom - n * layerH + 6} color={theme.accent} width={4} head={13} />
					<text x={x + w + 52} y={bottom - n * layerH + 18} fill={theme.accent} fontSize={17} fontWeight={800}>younger</text>
					<text x={x + w + 52} y={bottom - 12} fill={theme.accent} fontSize={17} fontWeight={800}>older</text>
				</g>
			)}
			{!assemblage && frame > b.read && (
				<g>
					<text x={W - 150} y={top + 70} fill={TOK.ink} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.read, 12)}>{readTitle}</text>
					{layers.filter((l) => l.name).map((l, i) => {
						const o = fadeAt(frame, b.read + 12 + i * 16, 12);
						const y = top + 102 + i * 32;
						return (
							<g key={i} opacity={o}>
								<circle cx={W - 138} cy={y - 5} r={12} fill={theme.accent} />
								<text x={W - 138} y={y} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={800}>{i + 1}</text>
								<text x={W - 118} y={y} fill={TOK.ink} fontSize={17} fontWeight={700}>{l.name ?? ''}</text>
							</g>
						);
					})}
				</g>
			)}
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
