// ReactionMapDiagram — functional groups as plinths, reactions as arrows.
//
// Each functional group is a small stone plinth with its name and group
// formula; reactions are arrows between them, drawn on their beats with a short
// label. A glowing traveller token can then run a `route` along the arrows, one
// arrow per step, with a live step counter (steps = arrows travelled). Optional
// `rings` mark a start and a target, and `steps` fill a bottom strip with the
// planning method, lighting up in turn.
//
// Config-driven: node positions, edges, labels and routes all come from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Chip, Title, clamp, fadeAt, popAt} from './shared';

export type MapNode = {id: string; label: string; sub?: string; x: number; y: number; at: number; key?: boolean};
export type MapEdge = {from: string; to: string; label?: string; at: number; bend?: number; dashed?: boolean; key?: boolean; labelDx?: number; labelDy?: number};
export type MapProps = {
	title?: string;
	nodes?: MapNode[];
	edges?: MapEdge[];
	route?: {path: string[]; at: number; framesPerStep?: number};
	rings?: {node: string; text: string; at: number; textAbove?: boolean}[];
	steps?: {text: string; at: number}[];
	footer?: {text: string; at: number};
	delay?: number;
};

const ID = 'c12m7map';
const W = 760;
const H = 530;
const RX = 56;
const ease = Easing.inOut(Easing.cubic);

/** Point on a quadratic from a to b bowed by `bend` px (perpendicular), at t. */
const bez = (a: {x: number; y: number}, b: {x: number; y: number}, bend: number, t: number) => {
	const mx = (a.x + b.x) / 2;
	const my = (a.y + b.y) / 2;
	const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
	const cx = mx + (-(b.y - a.y) / len) * bend;
	const cy = my + ((b.x - a.x) / len) * bend;
	return {
		x: (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * cx + t * t * b.x,
		y: (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * cy + t * t * b.y,
		cx,
		cy,
	};
};

export const ReactionMapDiagram = ({title = '', nodes = [], edges = [], route, rings = [], steps = [], footer, delay = 62}: MapProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
	// Arrows attach just outside the plinth tops.
	const anchor = (n: MapNode) => ({x: n.x, y: n.y - 8});
	const trim = (a: {x: number; y: number}, b: {x: number; y: number}, bend: number) => {
		// walk the curve from each end until clear of the node ellipse
		const inside = (p: {x: number; y: number}, c: {x: number; y: number}) => ((p.x - c.x) / (RX + 14)) ** 2 + ((p.y - c.y) / (RX * 0.34 + 34)) ** 2 < 1;
		let t0 = 0;
		let t1 = 1;
		while (t0 < 0.45 && inside(bez(a, b, bend, t0), a)) t0 += 0.01;
		while (t1 > 0.55 && inside(bez(a, b, bend, t1), b)) t1 -= 0.01;
		return [t0, t1];
	};

	// Route traveller
	let traveller: {x: number; y: number} | null = null;
	let stepsDone = 0;
	const fps0 = route?.framesPerStep ?? 50;
	const activeEdges = new Set<string>();
	if (route && frame >= route.at) {
		const tt = (frame - route.at) / fps0;
		const k = Math.min(route.path.length - 1, Math.floor(tt));
		stepsDone = Math.min(route.path.length - 1, Math.floor(tt + 0.0001));
		for (let i = 0; i < Math.min(route.path.length - 1, Math.ceil(tt)); i++) activeEdges.add(`${route.path[i]}>${route.path[i + 1]}`);
		if (k >= route.path.length - 1) {
			const n = byId[route.path[route.path.length - 1]];
			traveller = {x: n.x, y: n.y - 64 + idleBob(frame, 3, 2)};
		} else {
			const a = byId[route.path[k]];
			const b = byId[route.path[k + 1]];
			const e = edges.find((x) => x.from === a.id && x.to === b.id);
			const f = ease(Math.max(0, Math.min(1, tt - k)));
			const p = bez(anchor(a), anchor(b), e?.bend ?? 0, f);
			traveller = {x: p.x, y: p.y - 56 - 26 * Math.sin(f * Math.PI)};
		}
	}
	const stripY = H - 34;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title || 'Reaction map'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<defs>
				<radialGradient id={`${ID}-tok`} cx="38%" cy="32%" r="70%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="35%" stopColor={TOK.amber} />
					<stop offset="100%" stopColor={TOK.amberDim} />
				</radialGradient>
			</defs>
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}

			{/* plinths first so arrows draw over them */}
			{nodes.map((n, i) => (
				<g key={n.id} opacity={0.35 + 0.65 * fadeAt(frame, n.at, 10)}>
					<DioramaPlinth id={ID} cx={n.x} cy={n.y} rx={n.key ? RX + 10 : RX} />
					{n.key && <ellipse cx={n.x} cy={n.y} rx={RX + 14} ry={(RX + 10) * 0.34 + 4} fill="none" stroke={TOK.amber} strokeWidth={2.5 + pulse * 1.5} opacity={fadeAt(frame, n.at + 10, 12)} />}
					<g opacity={Math.min(1, popAt(frame, fps, n.at) * 1.2)} transform={`translate(0, ${idleBob(frame, i, 1)})`}>
						<Chip x={n.x} y={n.y - 30} text={n.label} color={n.key ? TOK.amberInk : theme.accent} size={17} padX={10} />
					</g>
					{n.sub && (
						<text x={n.x} y={n.y + RX * 0.34 + 32} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, n.at + 6, 10)}>
							{n.sub}
						</text>
					)}
				</g>
			))}

			{edges.map((e, i) => {
				const a = byId[e.from];
				const b = byId[e.to];
				if (!a || !b) return null;
				const bend = e.bend ?? 0;
				const A = anchor(a);
				const B = anchor(b);
				const [t0, t1] = trim(A, B, bend);
				const draw = interpolate(frame, [e.at, e.at + 20], [0, 1], clamp);
				if (draw <= 0) return null;
				const tEnd = t0 + (t1 - t0) * draw;
				const pts = Array.from({length: 17}, (_, k) => bez(A, B, bend, t0 + ((tEnd - t0) * k) / 16));
				const last = pts[pts.length - 1];
				const prev = pts[pts.length - 2];
				const on = activeEdges.has(`${e.from}>${e.to}`);
				const col = on || e.key ? TOK.amber : TOK.inkDim;
				const mid = bez(A, B, bend, (t0 + t1) / 2);
				return (
					<g key={i}>
						<polyline points={pts.slice(0, -1).map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={col} strokeWidth={on ? 5 : 3.5} strokeDasharray={e.dashed ? '7 6' : undefined} strokeLinecap="round" />
						<Arrow x1={prev.x} y1={prev.y} x2={last.x} y2={last.y} color={col} width={on ? 5 : 3.5} head={13} />
						{e.label && (
							<text x={mid.x + (e.labelDx ?? 0)} y={mid.y + (e.labelDy ?? -8)} textAnchor="middle" fill={on || e.key ? TOK.amberInk : TOK.ink} fontSize={15} fontWeight={800} opacity={fadeAt(frame, e.at + 10, 10)} stroke={TOK.bg} strokeWidth={4} paintOrder="stroke">
								{e.label}
							</text>
						)}
					</g>
				);
			})}

			{rings.map((r, i) => {
				const n = byId[r.node];
				if (!n) return null;
				return (
					<g key={i} opacity={fadeAt(frame, r.at, 12)}>
						<ellipse cx={n.x} cy={n.y - 6} rx={RX + 24} ry={54} fill="none" stroke={theme.accent} strokeWidth={3} strokeDasharray="6 5" />
						<text x={n.x} y={r.textAbove ? n.y - 68 : n.y + 66} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={900}>{r.text}</text>
					</g>
				);
			})}

			{traveller && (
				<g>
					<circle cx={traveller.x} cy={traveller.y} r={13 + pulse * 1.5} fill={`url(#${ID}-tok)`} stroke={TOK.amberDim} strokeWidth={1} />
				</g>
			)}
			{route && frame >= route.at && (
				<text x={16} y={title ? 70 : 30} textAnchor="start" fill={TOK.amberInk} fontSize={20} fontWeight={800}>
					steps: {stepsDone}
				</text>
			)}

			{steps.length > 0 && (
				<g>
					{steps.map((s, i) => {
						const w = (W - 20) / steps.length;
						const x = 10 + w * (i + 0.5);
						const on = fadeAt(frame, s.at, 12);
						const cur = frame >= s.at && (i === steps.length - 1 || frame < steps[i + 1].at);
						return (
							<g key={i} opacity={0.3 + 0.7 * on}>
								<rect x={x - w / 2 + 4} y={stripY - 18} width={w - 8} height={40} rx={20} fill={TOK.bgLift} stroke={cur ? TOK.amber : theme.accent} strokeWidth={cur ? 3 + pulse : 2} />
								<text x={x} y={stripY + 8} textAnchor="middle" fill={cur ? TOK.amberInk : theme.accent} fontSize={17} fontWeight={800}>
									{i + 1}. {s.text}
								</text>
							</g>
						);
					})}
				</g>
			)}
			{footer && (
				<text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800} opacity={fadeAt(frame, footer.at, 14)}>
					{footer.text}
				</text>
			)}
		</svg>
	);
};
