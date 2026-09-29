// FanDiagram — several causes converging on one outcome, or one cause fanning
// out into several outcomes, as glossy markers on stone plinths joined by
// arrows that carry travelling pulses. Each branch names its mechanism (props,
// the scene's own words), because the point of these scenes is "name the
// mechanism, not just the link". An optional chain of steps can build along
// the bottom (e.g. the steps of metastasis).
//
// Beats are frames after `delay`. Hold: pulses keep running along every
// branch and the hub breathes.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, ease, fadeAt, popAt, textWidth} from './shared';

type Node = {label: string; sub?: string; at: number};
export type FanProps = {
	direction: 'converge' | 'diverge';
	hub: Node;
	items: Node[];
	chain?: {title?: string; titleAt?: number; steps: {text: string; at: number}[]};
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8fan';
const W = 760;
const H = 530;
const ITEM_COLS = ['a', 'b', 'c', 'd'] as const;

export const FanDiagram = ({direction, hub, items, chain, notes = [], delay = 62}: FanProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const conv = direction === 'converge';
	const n = items.length;
	const hasChain = Boolean(chain);
	const yTop = 70, yBot = hasChain ? 318 : 400;
	const ys = items.map((_, i) => (n === 1 ? (yTop + yBot) / 2 : yTop + ((yBot - yTop) * i) / (n - 1)));
	const hubY = (yTop + yBot) / 2;
	const itemX = conv ? 70 : 380;
	const hubX = conv ? 610 : 110;
	const labelX = itemX + 44;

	const hubIn = fadeAt(frame, hub.at, 14);
	const hubPop = popAt(frame, fps, hub.at);

	const branch = (i: number) => {
		const it = items[i];
		const t = ease(frame, it.at, it.at + 30);
		const labW = Math.max(textWidth(it.label, 19), ...(it.sub ?? '').split('\n').map((l) => textWidth(l, 15)));
		const from = conv ? {x: labelX + labW + 14, y: ys[i]} : {x: hubX + 52, y: hubY};
		const to = conv ? {x: hubX - 56, y: hubY} : {x: itemX - 30, y: ys[i]};
		// a gentle curve; the label column sits beside the item, so the curve avoids it
		const c1 = {x: conv ? from.x + 60 : from.x + 100, y: from.y};
		const c2 = {x: conv ? to.x - 60 : to.x - 120, y: to.y};
		const d = `M ${from.x} ${from.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${to.x} ${to.y}`;
		const bez = (u: number) => {
			const v = 1 - u;
			return {
				x: v * v * v * from.x + 3 * v * v * u * c1.x + 3 * v * u * u * c2.x + u * u * u * to.x,
				y: v * v * v * from.y + 3 * v * v * u * c1.y + 3 * v * u * u * c2.y + u * u * u * to.y,
			};
		};
		const pulseU = t >= 1 ? (((frame - it.at + i * 30) % 100) + 100) % 100 / 100 : -1;
		const p = pulseU >= 0 ? bez(pulseU) : null;
		const end = bez(0.98), pre = bez(0.9);
		const a = Math.atan2(end.y - pre.y, end.x - pre.x);
		return (
			<g key={`b${i}`} opacity={t}>
				<path d={d} stroke={TOK.inkMute} strokeWidth={3} fill="none" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - t} />
				<path d={`M ${to.x} ${to.y} L ${to.x - Math.cos(a) * 12 - Math.sin(a) * 7} ${to.y - Math.sin(a) * 12 + Math.cos(a) * 7} L ${to.x - Math.cos(a) * 12 + Math.sin(a) * 7} ${to.y - Math.sin(a) * 12 - Math.cos(a) * 7} Z`} fill={TOK.inkMute} opacity={t >= 1 ? 1 : 0} />
				{p && <circle cx={p.x} cy={p.y} r={6} fill={TOK.amber} stroke="#fff" strokeWidth={1.5} />}
			</g>
		);
	};

	// chain layout
	const size = 15;
	const steps = chain?.steps ?? [];
	const widths = steps.map((c) => textWidth(c.text, size) + 22);
	const rows: number[][] = [[]];
	let rowW = 0;
	widths.forEach((w, i) => {
		if (rowW + w + 30 > 720 && rows[rows.length - 1].length) {
			rows.push([]);
			rowW = 0;
		}
		rows[rows.length - 1].push(i);
		rowW += w + 30;
	});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={conv ? `${items.map((i) => i.label).join(', ')} → ${hub.label}` : `${hub.label} → ${items.map((i) => i.label).join(', ')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{hub: theme.accent, a: COL.red, b: COL.violet, c: COL.teal, d: COL.green}} />

			{items.map((_, i) => branch(i))}

			{/* hub */}
			<g opacity={hubIn}>
				<DioramaPlinth id={`${ID}h`} cx={hubX} cy={hubY + 42} rx={86} />
				<circle cx={hubX} cy={hubY + idleBob(frame, 0, 1.2)} r={46 * Math.min(1.06, 0.8 + 0.2 * hubPop) + idlePulse(frame, 60) * 2} fill={`url(#${ID}-g-hub)`} stroke="rgba(0,0,0,0.25)" />
				<text x={hubX} y={hubY + 112} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>{hub.label}</text>
				{hub.sub?.split('\n').map((ln, k) => (
					<text key={k} x={hubX} y={hubY + 134 + k * 19} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{ln}</text>
				))}
			</g>

			{/* items */}
			{items.map((it, i) => {
				const o = fadeAt(frame, it.at, 14);
				if (o <= 0) return null;
				const pop = popAt(frame, fps, it.at);
				return (
					<g key={i} opacity={o}>
						<DioramaPlinth id={`${ID}i${i}`} cx={itemX} cy={ys[i] + 22} rx={40} />
						<circle cx={itemX} cy={ys[i] + idleBob(frame, i + 3, 1.2)} r={24 * Math.min(1.08, pop)} fill={`url(#${ID}-g-${ITEM_COLS[i % 4]})`} stroke="rgba(0,0,0,0.25)" />
						<text x={labelX} y={ys[i] - 4} fill={TOK.ink} fontSize={19} fontWeight={800}>{it.label}</text>
						{it.sub?.split('\n').map((ln, k) => (
							<text key={k} x={labelX} y={ys[i] + 17 + k * 18} fill={TOK.inkDim} fontSize={15} fontWeight={700}>{ln}</text>
						))}
					</g>
				);
			})}

			{/* chain */}
			{chain && (
				<g>
					{chain.title && (
						<text x={W / 2} y={398} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, chain.titleAt ?? steps[0]?.at ?? 0, 12)}>{chain.title}</text>
					)}
					{rows.map((row, r) => {
						const total = row.reduce((a, i) => a + widths[i], 0) + (row.length - 1) * 30;
						let x = W / 2 - total / 2;
						return row.map((i) => {
							const el = (
								<g key={i} opacity={fadeAt(frame, steps[i].at, 12)}>
									<Pill x={x} y={432 + r * 36} text={steps[i].text} color={i === steps.length - 1 ? COL.red : TOK.inkDim} size={size} anchor="start" />
									{i < steps.length - 1 && <text x={x + widths[i] + 15} y={438 + r * 36} textAnchor="middle" fill={TOK.inkMute} fontSize={18} fontWeight={800}>→</text>}
								</g>
							);
							x += widths[i] + 30;
							return el;
						});
					})}
				</g>
			)}

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
