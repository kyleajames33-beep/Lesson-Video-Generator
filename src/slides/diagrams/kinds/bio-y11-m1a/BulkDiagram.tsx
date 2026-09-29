// BulkDiagram (bio11m1Bulk) — bulk transport by vesicles, side by side.
//
// Each panel is a patch of cell membrane (outside above, cytoplasm below) on a
// stone slab.
//   endocytosis  a large particle sits outside; the membrane folds inward
//                around it, the fold deepens, the neck pinches off and the
//                particle is carried into the cytoplasm inside a vesicle.
//   exocytosis   a vesicle full of product rises to the membrane, fuses with
//                it (its membrane becomes part of the cell membrane) and the
//                contents spill outside.
// Both show an ATP chip being spent while the membrane moves: moving and
// fusing vesicles costs energy. Step captions come from props, each on its
// own beat. Hold: after a run the panel repeats the cycle slowly.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ReactNode} from 'react';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob} from '../../diorama';
import {CELLPAL, Footer, GlossDefs, H, Lines, W, clamp, fadeAt, wrap} from './shared';

type Panel = {kind: 'endo' | 'exo'; title: string; at: number; steps?: {text: string; at: number}[]; example?: string};
export type BulkProps = {panels: Panel[]; footer?: {text: string; at: number; amber?: boolean}[]; delay?: number};

const ID = 'b11bulk';
const ease = Easing.inOut(Easing.cubic);
const RUN = 200;

export const BulkDiagram = ({panels, footer = [], delay = 62}: BulkProps) => {
	const frame = useCurrentFrame() - delay;
	useVideoConfig();
	const theme = useAccent();
	const n = panels.length;
	const pw = W / n;
	const base = 210;

	const membranePath = (x0: number, x1: number, cx: number, d: number, w: number, off: number) =>
		Array.from({length: 61}, (_, k) => {
			const x = x0 + ((x1 - x0) * k) / 60;
			const y = base + off + d * Math.exp(-(((x - cx) / w) ** 2));
			return `${k === 0 ? 'M' : 'L'} ${x} ${y}`;
		}).join(' ');

	const panel = (p: Panel, i: number): ReactNode => {
		const x0 = pw * i + 14;
		const x1 = pw * (i + 1) - 14;
		const cx = (x0 + x1) / 2;
		const o = fadeAt(frame, i === 0 ? 0 : p.at - 40, 16);
		const t = frame - p.at;
		// first run plays on the beat; afterwards it loops gently
		const u = t < 0 ? 0 : t < RUN + 60 ? Math.min(1, t / RUN) : ((t - RUN - 60) % (RUN + 60)) / RUN;
		const uu = Math.min(1, u);
		let d = 0;
		let vesicle: {x: number; y: number; open: number} | null = null;
		let content: ReactNode = null;
		if (p.kind === 'endo') {
			d = interpolate(uu, [0, 0.45, 0.55, 0.62], [0, 100, 100, 0], {...clamp, easing: ease});
			const py = uu < 0.55 ? base - 30 + d * 0.72 : interpolate(uu, [0.55, 1], [base + 70, base + 150], {...clamp, easing: ease});
			if (uu >= 0.55) vesicle = {x: cx, y: py, open: 0};
			content = (
				<g transform={`translate(${cx},${py})`}>
					<rect x={-22} y={-11} width={44} height={22} rx={11} fill={`url(#${ID}-ball-bact)`} />
				</g>
			);
		} else {
			const vy = interpolate(uu, [0, 0.4], [base + 150, base + 34], {...clamp, easing: ease});
			d = interpolate(uu, [0.4, 0.5, 0.9], [0, 60, 0], {...clamp, easing: ease});
			if (uu < 0.45) vesicle = {x: cx, y: vy, open: 0};
			const spill = interpolate(uu, [0.5, 1], [0, 1], {...clamp, easing: Easing.out(Easing.quad)});
			content = (
				<g>
					{[-14, -5, 5, 14, 0, -9, 9].map((dx, k) => {
						const sx = cx + dx * 0.8;
						const sy = uu < 0.45 ? vy + ((k % 3) - 1) * 7 : base + 30 - spill * (60 + (k % 3) * 25);
						const ex = cx + dx * (1 + spill * 4);
						return <circle key={k} cx={uu < 0.45 ? sx : ex} cy={sy + idleBob(frame, k, 1)} r={5} fill={`url(#${ID}-ball-prod)`} />;
					})}
				</g>
			);
		}
		const atpOn = t >= 0 && u > 0.05 && u < 0.7;
		const steps = p.steps ?? [];
		const cur = steps.reduce((m, s, k) => (frame >= s.at ? k : m), -1);
		return (
			<g key={i} opacity={o}>
				<text x={cx} y={30} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800}>{p.title}</text>
				{p.example && <Lines x={cx} y={54} lines={wrap(p.example, 30)} size={15} color={TOK.inkDim} />}
				<rect x={x0} y={base - 110} width={x1 - x0} height={100} rx={10} fill={CELLPAL.water} opacity={0.08} />
				<rect x={x0} y={base + 10} width={x1 - x0} height={190} rx={10} fill={CELLPAL.cyto} opacity={0.45} />
				<text x={x0 + 8} y={base - 92} fill={TOK.inkDim} fontSize={15} fontWeight={800}>outside</text>
				<text x={x0 + 8} y={base + 192} fill={TOK.inkDim} fontSize={15} fontWeight={800}>cytoplasm</text>
				<rect x={x0 - 4} y={base + 204} width={x1 - x0 + 8} height={12} rx={4} fill="#c9c5bd" />
				{content}
				{[-6, 6].map((off) => (
					<path key={off} d={membranePath(x0, x1, cx, d, p.kind === 'endo' ? 42 : 30, off)} fill="none" stroke={CELLPAL.membrane} strokeWidth={5} strokeLinecap="round" />
				))}
				{vesicle && <circle cx={vesicle.x} cy={vesicle.y} r={p.kind === 'endo' ? 32 : 26} fill="none" stroke={CELLPAL.membrane} strokeWidth={5} />}
				<g opacity={atpOn ? 1 : 0.25}>
					<circle cx={x1 - 36} cy={base + 150} r={17} fill={`url(#${ID}-ball-atp)`} />
					<text x={x1 - 36} y={base + 155} textAnchor="middle" fill="#5a3a00" fontSize={12} fontWeight={800}>ATP</text>
				</g>
				{steps.map((s, k) => (
					<g key={k} opacity={fadeAt(frame, s.at, 10) * (k === cur ? 1 : 0.55)}>
						<Lines x={cx} y={base + 250 + k * 24} lines={[`${k + 1}. ${s.text}`]} size={17} color={k === cur ? theme.accent : TOK.ink} />
					</g>
				))}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Endocytosis and exocytosis" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{bact: '#5fa34a', prod: CELLPAL.vesicle, atp: CELLPAL.atp}} />
			{panels.map(panel)}
			{n === 2 && <line x1={W / 2} y1={70} x2={W / 2} y2={base + 200} stroke="rgba(0,0,0,0.08)" strokeWidth={2} />}
			<Footer lines={footer} frame={frame} y0={H - 8} amberInk={TOK.amberInk} dim={TOK.inkDim} />
		</svg>
	);
};
