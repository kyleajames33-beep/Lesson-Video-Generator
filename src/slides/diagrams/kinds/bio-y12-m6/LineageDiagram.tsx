// LineageDiagram — somatic versus germ-line change, followed into the next
// generation.
//
// Each panel is a parent's body: a cluster of body cells with two germ-line
// cells (tinted, labelled) on a stone plinth. On the panel's beat a change
// (amber dot) appears in one cell:
//   somatic   a body cell: its daughter cells in that tissue carry it too, but
//             the gamete comes from the germ line, so the offspring's cells are
//             all clear ("not inherited")
//   germline  a germ-line cell: the gamete carries it, and the offspring that
//             grows from that gamete has it in every cell ("inherited")
// The offspring's cell count and how many carry the change are computed from
// the cells drawn. Panel order, titles and tags come from props.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, GlossDefs, clamp, ease, fadeAt, popAt, textWidth} from './shared';

export type LineagePanel = {
	kind: 'somatic' | 'germline';
	title: string;
	at: number;
	/** when the change appears */
	changeAt?: number;
	/** when the gamete travels to the offspring */
	passAt?: number;
	tag: string;
	tagAt?: number;
	note?: string;
};
export type LineageProps = {panels: LineagePanel[]; footer?: {text: string; at: number; amber?: boolean}; delay?: number};

const ID = 'b12m6lin';
const W = 760;
const H = 530;
const BODY = '#cfe3f3';
const GERM = '#f6d9df';

// Parent body cells (relative to the plinth centre); the last two are germ line.
const PARENT = [
	[-66, -18], [-30, -26], [6, -28], [42, -22], [-50, 10], [-14, 4], [22, 6], [58, 12], [-28, 36], [8, 36], [46, 40],
] as const;
const GERMS = [[-70, 40], [-54, 60]] as const;
// Offspring cells
const CHILD = [[-44, -10], [-10, -16], [24, -10], [-28, 16], [8, 14], [42, 12], [-8, 38], [26, 38]] as const;

const Blob = ({x, y, r, fill, dot, o = 1, pulse = 0}: {x: number; y: number; r: number; fill: string; dot?: boolean; o?: number; pulse?: number}) => (
	<g opacity={o}>
		<circle cx={x} cy={y} r={r} fill={`url(#${ID}-g-${fill === GERM ? 'germ' : 'body'})`} stroke="rgba(40,70,100,0.35)" strokeWidth={1.2} />
		{dot && <circle cx={x + 1} cy={y + 1} r={r * 0.42 + pulse} fill={`url(#${ID}-g-mut)`} stroke="rgba(0,0,0,0.3)" strokeWidth={0.8} />}
	</g>
);

export const LineageDiagram = ({panels, footer, delay = 62}: LineageProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = panels.length;
	const colW = W / n;
	const PY = 150;
	const OY = 392;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Somatic versus germ-line change" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{body: BODY, germ: GERM, mut: AMBER}} />
			{panels.map((p, i) => {
				const cx = colW * (i + 0.5);
				const ch = p.changeAt ?? p.at + 30;
				const pass = p.passAt ?? ch + 60;
				const tagAt = p.tagAt ?? pass + 50;
				const germ = p.kind === 'germline';
				const chOn = frame >= ch;
				const pulse = idlePulse(frame) * 1.2;
				// somatic: the changed cell's neighbours become its daughters (a patch)
				const hit = germ ? -1 : 5;
				const patch = germ ? [] : [5, 1, 6];
				const spread = (k: number) => (patch.indexOf(k) <= 0 ? (k === hit ? 1 : 0) : fadeAt(frame, ch + 20 + patch.indexOf(k) * 12, 10));
				const g = ease(frame, pass, pass + 40);
				const gx0 = cx + GERMS[1][0];
				const gy0 = PY + GERMS[1][1];
				const gx = gx0 + (cx - gx0) * g;
				const gy = gy0 + 30 + (OY - 70 - gy0 - 30) * g;
				const childOn = fadeAt(frame, pass + 36, 14);
				const carriers = germ ? CHILD.length : 0;
				const tagText = p.tag;
				const tw = textWidth(tagText, 17) + 26;
				return (
					<g key={i} opacity={fadeAt(frame, p.at, 14)}>
						<text x={cx} y={34} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800}>{p.title}</text>
						<DioramaPlinth id={`${ID}p${i}`} cx={cx} cy={PY + 38} rx={128} />
						{PARENT.map(([dx, dy], k) => (
							<Blob key={k} x={cx + dx} y={PY + dy - 10 + idleBob(frame, k + i * 20, 0.8)} r={17} fill={BODY} dot={chOn && spread(k) > 0.5} pulse={k === hit ? pulse : 0} />
						))}
						{GERMS.map(([dx, dy], k) => (
							<Blob key={`g${k}`} x={cx + dx} y={PY + dy - 10 + idleBob(frame, k + 40 + i * 20, 0.8)} r={15} fill={GERM} dot={germ && chOn} pulse={germ && k === 1 ? pulse : 0} />
						))}
						<text x={cx - 98} y={PY + 84} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>germ cells</text>
						<text x={cx + 64} y={PY + 84} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>body cells</text>
						{/* where the change happened */}
						{chOn && (
							<text x={cx} y={62} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, ch)}>
								{germ ? 'change in a germ-line cell' : 'change in a body cell'}
							</text>
						)}
						{/* gamete to the next generation */}
						<g opacity={fadeAt(frame, pass - 6)}>
							<path d={`M ${gx0} ${gy0 + 26} Q ${cx - 40} ${(gy0 + OY) / 2} ${cx} ${OY - 64}`} fill="none" stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="5 6" />
							<text x={cx - 100} y={(PY + OY) / 2 + 40} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>gamete</text>
							{g < 1 && <Blob x={gx} y={gy} r={13} fill={GERM} dot={germ} />}
						</g>
						<g opacity={childOn}>
							<DioramaPlinth id={`${ID}o${i}`} cx={cx} cy={OY + 30} rx={92} />
							{CHILD.map(([dx, dy], k) => (
								<Blob key={k} x={cx + dx} y={OY + dy - 14 + idleBob(frame, k + 60 + i * 20, 0.8)} r={15} fill={BODY} dot={germ} o={Math.min(1, popAt(frame, fps, pass + 40 + k * 3))} pulse={germ ? pulse * 0.6 : 0} />
							))}
							<text x={cx} y={OY + 82} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>
								offspring: {carriers} of {CHILD.length} cells carry it
							</text>
						</g>
						<g opacity={fadeAt(frame, tagAt)} transform={`translate(${cx},${H - 22}) scale(${interpolate(popAt(frame, fps, tagAt), [0, 1], [0.6, 1], clamp)})`}>
							<rect x={-tw / 2} y={-16} width={tw} height={32} rx={16} fill={germ ? '#fff6e6' : '#ffffff'} stroke={germ ? AMBER : TOK.inkMute} strokeWidth={germ ? 2.5 + idlePulse(frame) : 2} />
							<text y={6} textAnchor="middle" fill={germ ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={800}>{tagText}</text>
						</g>
						{p.note && (
							<text x={cx} y={H - 44} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={fadeAt(frame, tagAt + 20)}>{p.note}</text>
						)}
					</g>
				);
			})}
			{footer && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
			)}
		</svg>
	);
};
