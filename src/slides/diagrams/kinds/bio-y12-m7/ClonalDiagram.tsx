// ClonalDiagram (bio12m7Clonal) — clonal selection and expansion.
//
// A row of naive B cells, each carrying a different receptor (tip colour).
// The antigen arrives on a dendritic cell and binds the one B cell whose
// receptor matches (selection). A T helper cell gives the second,
// co-stimulatory signal. Only then does the selected cell divide into plasma
// cells (short-lived antibody factories, antibodies streaming off) and memory
// B cells (the long-lived reserve). The other naive cells stay idle. Optional
// footer carries the HIV consequence. All text from props.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, PAL, Title, W, bioBeats, clamp, fadeAt} from './shared';
import {Icon} from './icons';
import {Antibody, EP_COLORS, Epitope} from './immune';

type Beats = {naive: number; antigen: number; bind: number; helper: number; expand: number; plasma: number; memory: number; footer: number};
export type ClonalProps = {
	title?: string;
	labels?: {naive?: string; select?: string; helper?: string; plasma?: string; memory?: string; footer?: string};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7clo';
const ease = Easing.inOut(Easing.cubic);
const RECS = ['#e0a030', '#3f6fd8', EP_COLORS.tri, '#20a0b0', EP_COLORS.sq, EP_COLORS.round];
const MATCH = 2;

export const ClonalDiagram = ({title, labels = {}, beats, delay = 62}: ClonalProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = bioBeats<Beats>({naive: 20, antigen: 200, bind: 320, helper: 440, expand: 600, plasma: 700, memory: 800, footer: 1000}, beats);
	const top = title ? 44 : 0;
	const rowY = top + 150;
	const cx = (i: number) => 115 + i * 106;
	const pulse = idlePulse(frame);

	// dendritic cell carrying the antigen: enters from the left, docks above the match
	const dIn = interpolate(frame, [b.antigen, b.bind], [0, 1], {...clamp, easing: ease});
	const dc = {x: -60 + (cx(MATCH) - 60 + 60) * dIn, y: rowY - 70};
	const selected = frame >= b.bind;
	const lift = interpolate(frame, [b.bind, b.bind + 24], [0, 1], {...clamp, easing: ease});
	const helperIn = interpolate(frame, [b.helper, b.helper + 40], [0, 1], {...clamp, easing: ease});
	const hx = W + 60 - (W + 60 - (cx(MATCH) + 88)) * helperIn;
	const dcOut = fadeAt(frame, b.expand, 20);

	// expansion: daughters fly from the selected cell to the lower plinth
	const lowY = top + 330;
	const kids = Array.from({length: 8}, (_, k) => {
		const plasma = k < 5;
		const x = plasma ? 110 + k * 62 : 498 + (k - 5) * 60;
		const at = b.expand + k * 10;
		const t = interpolate(frame, [at, at + 30], [0, 1], {...clamp, easing: ease});
		return {k, plasma, x, t};
	});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Clonal selection and expansion'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{RECS.map((_, i) => (
				<g key={i} opacity={fadeAt(frame, 0, 14)}>
					<DioramaPlinth id={`${ID}${i}`} cx={cx(i)} cy={rowY + 30} rx={46} />
				</g>
			))}
			<text x={W / 2} y={rowY + 80} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.naive) * (1 - fadeAt(frame, b.bind, 10))}>{labels.naive ?? 'naive B cells: each has one unique receptor'}</text>
			{/* naive B cells */}
			{RECS.map((rec, i) => {
				const isM = i === MATCH;
				const dim = selected && !isM ? 0.45 : 1;
				const y = rowY + idleBob(frame, i, 1.3) - (isM ? lift * 16 : 0);
				return (
					<g key={i} opacity={fadeAt(frame, b.naive + i * 8) * dim}>
						{isM && selected && <circle cx={cx(i)} cy={y} r={40 + pulse * 3} fill={TOK.amber} opacity={0.18} />}
						<Icon id={ID} name="bcell" x={cx(i)} y={y} s={0.95} frame={frame} opts={{rec}} />
					</g>
				);
			})}
			{selected && <text x={W / 2} y={rowY + 80} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.bind + 10)}>{labels.select ?? 'selected: the one match'}</text>}
			{/* dendritic cell with antigen */}
			{frame >= b.antigen && (
				<g opacity={1 - dcOut}>
					<Icon id={ID} name="dendritic" x={dc.x} y={dc.y + idleBob(frame, 8, 1.2)} s={0.8} frame={frame} />
					<Epitope x={dc.x + 30} y={dc.y + 24} shape="tri" size={9} />
				</g>
			)}
			{/* T helper second signal */}
			{frame >= b.helper && (
				<g opacity={1 - dcOut * 0.4}>
					<Icon id={ID} name="helperT" x={hx} y={rowY - 60 + idleBob(frame, 9, 1.2)} s={0.8} frame={frame} />
					{helperIn >= 1 &&
						[0, 1, 2].map((k) => {
							const t = ((frame - b.helper - 40 + k * 12) % 36) / 36;
							return <circle key={k} cx={hx - 20 - t * 40} cy={rowY - 50 + t * 30} r={4} fill={PAL.helper} opacity={(1 - t) * (1 - dcOut)} />;
						})}
					<text x={hx - 10} y={rowY - 108} textAnchor="middle" fill={PAL.helper} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.helper + 30)}>{labels.helper ?? 'T helper: second signal'}</text>
				</g>
			)}
			{/* expansion */}
			<g opacity={fadeAt(frame, b.expand - 20, 16)}>
				<DioramaPlinth id={`${ID}l`} cx={234} cy={lowY + 26} rx={172} />
				<DioramaPlinth id={`${ID}m`} cx={558} cy={lowY + 26} rx={110} />
			</g>
			{kids.map(({k, plasma, x, t}) => {
				if (t <= 0) return null;
				const fx = cx(MATCH) + (x - cx(MATCH)) * t;
				const fy = rowY - 16 + (lowY - rowY + 16) * t - Math.sin(t * Math.PI) * 40;
				const show = plasma ? frame >= b.plasma || t < 1 : frame >= b.memory || t < 1;
				return (
					<g key={k} opacity={show ? 1 : 0.5}>
						<Icon id={ID} name={plasma && t >= 1 ? 'plasma' : 'bcell'} x={fx} y={fy + idleBob(frame, k + 10, 1.2)} s={0.62} frame={frame} opts={{rec: EP_COLORS.tri}} />
						{plasma && t >= 1 && frame >= b.plasma &&
							[0, 1].map((q) => {
								const u = ((frame - b.plasma + q * 30 + k * 7) % 60) / 60;
								return <Antibody key={q} x={fx + 14 + u * 20} y={fy - 34 - u * 44} s={0.42} rot={u * 60} tip="tri" opacity={1 - u} />;
							})}
					</g>
				);
			})}
			<text x={234} y={lowY + 146} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.plasma)}>{labels.plasma ?? 'plasma cells: antibody factories'}</text>
			<text x={558} y={lowY + 146} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.memory)}>{labels.memory ?? 'memory B cells: reserve'}</text>
			{labels.footer && <text x={W / 2} y={H - 8} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.footer)}>{labels.footer}</text>}
		</svg>
	);
};
