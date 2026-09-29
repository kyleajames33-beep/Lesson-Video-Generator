// MineralsDiagram (bio11m2Minerals) — mineral ions a plant takes from the soil,
// and what it builds with each.
//
// Rows build on their beats: a glossy ion token, its element, and the molecule
// or job it is needed for. A green leaf stands on a plinth on the right. At the
// `deficiency` beat one ion is crossed out and the leaf's green fades to
// yellow (chlorosis), with the reason under it. All text from props.
// Hold: ion tokens bob; the yellowing leaf's label breathes.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GLOSS, GlossDefs, H, LeafShape, Lines, Mark, Notes, Title, Token, W, clamp, fadeAt, mix, popAt, wrap, type Note} from './shared';

export type MineralsProps = {
	title?: string;
	ions: {ion: string; name: string; use: string; at: number}[];
	leafAt?: number;
	deficiency?: {index: number; at: number; text: string};
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2min';

export const MineralsDiagram = ({title, ions, leafAt = 0, deficiency, notes = [], delay = 62}: MineralsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 56 : 18;
	const rowH = Math.min(96, (H - top - 70) / ions.length);
	const tint = deficiency ? interpolate(frame, [deficiency.at + 10, deficiency.at + 80], [0, 1], clamp) : 0;
	const leafX = 560;
	const leafY = top + 220;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Mineral nutrients'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{ions.map((r, i) => {
				const p = popAt(frame, fps, r.at);
				if (p <= 0) return null;
				const y = top + 30 + i * rowH;
				const crossed = deficiency && deficiency.index === i ? fadeAt(frame, deficiency.at, 12) : 0;
				return (
					<g key={i} opacity={Math.min(1, p * 1.4)} transform={`translate(${(1 - Math.min(1, p)) * -20}, 0)`}>
						<g transform={`translate(0, ${idleBob(frame, i, 1.2)})`}>
							<Token id={ID} name="mineral" x={58} y={y + 12} r={30} label={r.ion} size={r.ion.length > 3 ? 14 : 17} opacity={1 - crossed * 0.5} />
						</g>
						<text x={104} y={y + 4} fill={TOK.ink} fontSize={21} fontWeight={800} opacity={1 - crossed * 0.5}>{r.name}</text>
						<Lines x={104} y={y + 28} lines={wrap(r.use, 28)} size={19} color={crossed > 0 ? TOK.inkMute : theme.accent} anchor="start" />
						{crossed > 0 && <Mark x={86} y={y - 8} ok={false} r={13} opacity={crossed} />}
					</g>
				);
			})}
			<g opacity={Math.min(1, popAt(frame, fps, leafAt) * 1.3)}>
				<DioramaPlinth id={`${ID}l`} cx={leafX} cy={leafY + 70} rx={150} />
				<g transform={`translate(0, ${idleBob(frame, 7, 1.5)})`}>
					<path d={`M ${leafX - 110} ${leafY + 60} L ${leafX - 80} ${leafY + 30}`} stroke={COL.stem} strokeWidth={5} strokeLinecap="round" />
					<LeafShape x={leafX - 80} y={leafY + 30} len={210} angle={-18} fill={mix(COL.leaf, COL.yellow, tint)} />
					{/* veins stay green longer: interveinal yellowing */}
					{tint > 0 && [0.3, 0.5, 0.7].map((f, k) => (
						<path key={k} d={`M ${leafX - 80 + 210 * f * Math.cos(-0.314)} ${leafY + 30 + 210 * f * Math.sin(-0.314)} l ${k % 2 ? 18 : -10} ${k % 2 ? -22 : 24}`} stroke={COL.leafDark} strokeWidth={2} opacity={0.6 * tint} />
					))}
				</g>
			</g>
			{deficiency && (
				<g opacity={fadeAt(frame, deficiency.at + 40)}>
					<rect x={leafX - 140} y={leafY - 150} width={280} height={40} rx={20} fill={TOK.amber} opacity={0.12 + 0.1 * idlePulse(frame)} />
					<Lines x={leafX} y={leafY - 123} lines={wrap(deficiency.text, 30)} size={21} color={TOK.amberInk} />
				</g>
			)}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
