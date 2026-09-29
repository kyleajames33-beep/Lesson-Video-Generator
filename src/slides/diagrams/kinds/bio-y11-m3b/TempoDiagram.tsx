// TempoDiagram (bio11m3Tempo) — the two tempos of evolution read off a
// phylogenetic tree.
//
// Each tree grows up out of a stone plinth (the common ancestor at its base).
// Time runs UP the page; horizontal distance is change in form. The pen draws
// every lineage upward through time, so the viewer watches the shape appear:
//   gradual      every branch slopes steadily: form changes a little all the
//                time, with many intermediate forms.
//   punctuated   branches run straight up (stasis: no change in form) and jump
//                sideways in a short burst at each split (rapid change at
//                speciation), then run straight up again.
// Both trees have the SAME branch points (nodes = common ancestors) at the
// same times and end at the same four species, because the two models share
// common descent and natural selection and differ only in rate and timing.
// The bursts are drawn as short but not instant (a few per cent of the time
// axis): "sudden" still means thousands of generations.
//
// mode 'compare' (both, side by side) | 'gradual' | 'punctuated' (one, large).
// Beats (frames after `delay`): axes, gradual, punctuated, nodes, slope,
// stasis, burst; each tree draws over `drawFrames`.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Arrow, Footer, H, Pill, Title, W, easeT, fadeAt, type FooterLine} from './shared';
import {EcoGloss} from './icons';

type Pt = [number, number]; // [form -1..1, time 0..1]
type Tree = {lineages: Pt[][]; nodes: Pt[]; tips: Pt[]};

const NODE_T = [0.24, 0.42, 0.6];
const J = 0.035; // duration of a burst, as a fraction of the time axis

const GRADUAL: Tree = {
	lineages: [
		[[0, 0], [0.05, NODE_T[0]]],
		[[0.05, NODE_T[0]], [-0.3, NODE_T[1]], [-0.78, 1]],
		[[-0.3, NODE_T[1]], [-0.12, 1]],
		[[0.05, NODE_T[0]], [0.45, NODE_T[2]], [0.3, 1]],
		[[0.45, NODE_T[2]], [0.86, 1]],
	],
	nodes: [[0.05, NODE_T[0]], [-0.3, NODE_T[1]], [0.45, NODE_T[2]]],
	tips: [[-0.78, 1], [-0.12, 1], [0.3, 1], [0.86, 1]],
};

const PUNCTUATED: Tree = {
	lineages: [
		[[0.05, 0], [0.05, NODE_T[0]]],
		[[0.05, NODE_T[0]], [-0.3, NODE_T[0] + J], [-0.3, NODE_T[1]], [-0.78, NODE_T[1] + J], [-0.78, 1]],
		[[-0.3, NODE_T[1]], [-0.12, NODE_T[1] + J], [-0.12, 1]],
		[[0.05, NODE_T[0]], [0.45, NODE_T[0] + J], [0.45, NODE_T[2]], [0.3, NODE_T[2] + J], [0.3, 1]],
		[[0.45, NODE_T[2]], [0.86, NODE_T[2] + J], [0.86, 1]],
	],
	nodes: [[0.05, NODE_T[0]], [-0.3, NODE_T[1]], [0.45, NODE_T[2]]],
	tips: [[-0.78, 1], [-0.12, 1], [0.3, 1], [0.86, 1]],
};

/** The part of a polyline drawn up to time T. */
const clipTo = (pts: Pt[], T: number): Pt[] => {
	const out: Pt[] = [pts[0]];
	if (T <= pts[0][1]) return [];
	for (let i = 1; i < pts.length; i++) {
		const [x0, t0] = pts[i - 1];
		const [x1, t1] = pts[i];
		if (t1 <= T) out.push(pts[i]);
		else {
			const f = (T - t0) / (t1 - t0 || 1);
			out.push([x0 + (x1 - x0) * f, T]);
			break;
		}
	}
	return out;
};

export type TempoProps = {
	mode?: 'compare' | 'gradual' | 'punctuated';
	title?: string;
	labels?: {gradual?: string; punctuated?: string};
	species?: string[];
	beats?: Partial<{axes: number; gradual: number; punctuated: number; nodes: number; slope: number; stasis: number; burst: number}>;
	drawFrames?: number;
	notes?: {gradual?: string; punctuated?: string};
	footer?: FooterLine[];
	delay?: number;
};

const ID = 'b11m3tempo';

export const TempoDiagram = ({mode = 'compare', title, labels = {}, species = ['A', 'B', 'C', 'D'], beats = {}, drawFrames = 150, notes = {}, footer = [], delay = 62}: TempoProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {axes: 0, gradual: 20, punctuated: 20, nodes: 9999, slope: 9999, stasis: 9999, burst: 9999, ...beats};
	const top = title ? 50 : 12;
	const footH = footer.length * 24 + (footer.length ? 6 : 0);
	const panels = mode === 'compare' ? (['gradual', 'punctuated'] as const) : ([mode] as const);
	const pw = (W - 20) / panels.length;
	const pulse = idlePulse(frame);

	const renderPanel = (kind: 'gradual' | 'punctuated', pi: number) => {
		const tree = kind === 'gradual' ? GRADUAL : PUNCTUATED;
		const x0 = 10 + pi * pw;
		const cx = x0 + pw / 2 + 12;
		const halfW = pw / 2 - 58;
		const plinthY = H - footH - 44;
		const baseY = plinthY - 12;
		const topY = top + 64;
		const px = (f: number) => cx + f * halfW;
		const py = (t: number) => baseY - t * (baseY - topY);
		const start = kind === 'gradual' ? b.gradual : b.punctuated;
		const T = easeT(frame, start, start + drawFrames);
		const on = fadeAt(frame, Math.min(b.axes, start - 10), 14);
		const path = (pts: Pt[]) => pts.map((p, i) => `${i ? 'L' : 'M'} ${px(p[0])} ${py(p[1])}`).join(' ');
		const heading = kind === 'gradual' ? labels.gradual ?? 'Gradualism' : labels.punctuated ?? 'Punctuated equilibrium';
		const note = kind === 'gradual' ? notes.gradual : notes.punctuated;

		// highlight picks
		const slopeSeg: Pt[] = GRADUAL.lineages[1].slice(0, 2);
		const stasisSeg: Pt[] = [[-0.3, NODE_T[0] + J], [-0.3, NODE_T[1]]];
		const burstSeg: Pt[] = [[0.05, NODE_T[0]], [0.45, NODE_T[0] + J]];
		return (
			<g key={kind} opacity={on}>
				<text x={cx - 6} y={top + 20} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800}>{heading}</text>
				{note && <text x={cx - 6} y={top + 42} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={fadeAt(frame, start + drawFrames * 0.6)}>{note}</text>}
				{/* axes */}
				<Arrow x1={x0 + 26} y1={baseY + 4} x2={x0 + 26} y2={topY - 8} color={TOK.inkMute} width={2.5} head={10} />
				<text x={x0 + 18} y={(baseY + topY) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} transform={`rotate(-90 ${x0 + 18} ${(baseY + topY) / 2})`}>time</text>
				<DioramaPlinth id={`${ID}${kind}`} cx={px(0.05)} cy={plinthY} rx={46} />
				<text x={px(0.05) - 56} y={plinthY + 6} fill={TOK.inkDim} fontSize={15} fontWeight={700} textAnchor="end">ancestor</text>
				{/* lineages */}
				{tree.lineages.map((l, i) => {
					const pts = clipTo(l, T);
					if (pts.length < 2) return null;
					return <path key={i} d={path(pts)} fill="none" stroke={theme.accent} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />;
				})}
				{/* nodes */}
				{tree.nodes.map((nd, i) => {
					if (T < nd[1]) return null;
					const hi = frame > b.nodes ? 1 : 0;
					return <circle key={i} cx={px(nd[0])} cy={py(nd[1])} r={7 + hi * (2 + 2 * pulse)} fill="#ffffff" stroke={theme.accent} strokeWidth={3} />;
				})}
				{/* tips */}
				{tree.tips.map((tp, i) => (T >= 0.999 ? (
					<g key={i} opacity={fadeAt(frame, start + drawFrames, 12)}>
						<circle cx={px(tp[0])} cy={py(tp[1])} r={11} fill={theme.accent} />
						<text x={px(tp[0])} y={py(tp[1]) + 5} textAnchor="middle" fill="#fff" fontSize={14} fontWeight={800}>{species[i] ?? ''}</text>
					</g>
				) : null))}
				{/* highlights */}
				{kind === 'gradual' && frame > b.slope && (
					<g opacity={fadeAt(frame, b.slope, 14)}>
						<path d={path(slopeSeg)} fill="none" stroke={TOK.amber} strokeWidth={9} strokeOpacity={0.35 + 0.3 * pulse} strokeLinecap="round" />
						<Pill x={px(-0.2) - 58} y={py(0.33)} text="steady change" size={15} color={TOK.amber} textColor={TOK.amberInk} />
					</g>
				)}
				{kind === 'punctuated' && frame > b.stasis && (
					<g opacity={fadeAt(frame, b.stasis, 14)}>
						<path d={path(stasisSeg)} fill="none" stroke={theme.accent} strokeWidth={10} strokeOpacity={0.25 + 0.2 * pulse} strokeLinecap="round" />
						<Pill x={px(-0.3) - 46} y={py((NODE_T[0] + NODE_T[1]) / 2 + 0.01)} text="stasis" size={15} color={theme.accent} />
					</g>
				)}
				{kind === 'punctuated' && frame > b.burst && (
					<g opacity={fadeAt(frame, b.burst, 14)}>
						<path d={path(burstSeg)} fill="none" stroke={TOK.amber} strokeWidth={10} strokeOpacity={0.4 + 0.3 * pulse} strokeLinecap="round" />
						<Pill x={px(0.5)} y={py(NODE_T[0]) + 24} text="rapid burst" size={15} color={TOK.amber} textColor={TOK.amberInk} />
					</g>
				)}
				{frame > b.nodes && T >= NODE_T[2] && (
					<g opacity={fadeAt(frame, b.nodes, 14)}>
						<Pill x={px(0.45) + 8} y={py(NODE_T[2]) - (kind === 'gradual' ? 26 : 28)} text="node = common ancestor" size={14} color={TOK.inkDim} />
					</g>
				)}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Tempo of evolution'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<EcoGloss id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{panels.map((k, i) => renderPanel(k, i))}
			{panels.length === 2 && <line x1={W / 2 + 4} y1={top + 4} x2={W / 2 + 4} y2={H - footH - 20} stroke={TOK.rule} strokeWidth={2} />}
			<text x={W / 2} y={H - footH - 4} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, b.axes, 14)}>across = change in form</text>
			<Footer lines={footer} frame={frame} fade={fadeAt} height={H} />
		</svg>
	);
};
