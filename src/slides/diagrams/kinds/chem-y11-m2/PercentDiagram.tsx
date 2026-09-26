// PercentDiagram (kind: chem11m2Percent): purity at the start, yield at the end.
//
// Up to two panels, each on its own plinth:
//  • purity: a weighed heap on a balance, made of pure grains and impurity
//    grains in the true proportion (e.g. 17 of 20 for 85 %). The impurity falls
//    away, leaving the pure mass. % = pure ÷ sample × 100.
//  • yield: a collection jar with the theoretical yield marked as a dashed
//    100 % line; the product fills to the actual yield and can never pass the
//    line. % = actual ÷ theoretical × 100.
//  • direction: one sample, two arrows: × purity to scale a weighed mass down
//    to the real substance, ÷ purity to work back to the mass to weigh out.
// Every percentage and mass shown is computed from the props.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Balance, Ball, Chip, LANE, TrapLine, clamp, pileSlots} from './parts';

type Purity = {type: 'purity'; sample: number; pure: number; unit?: string; substance: string; sampleName?: string; dp?: number; title?: string; beat?: number; workBeat?: number; showFormula?: boolean};
type Yield = {type: 'yield'; theoretical: number; actual: number; unit?: string; substance: string; dp?: number; title?: string; beat?: number; workBeat?: number; showFormula?: boolean};
type Direction = {type: 'direction'; sample: number; purity: number; unit?: string; substance: string; sampleDp?: number; pureDp?: number; beat?: number; downBeat?: number; upBeat?: number};
type Panel = Purity | Yield | Direction;

export type PercentProps = {
	panels?: Panel[];
	/** Small label on the arrow between two panels, e.g. "start → end". */
	between?: string;
	highlight?: {panel: number; beat: number; text: string}[];
	trap?: {text: string; beat: number; panel?: number};
	delay?: number;
};

const ID = 'c11m2pct';
const W = 760;
const VB_H = 520;
const BASE = 306;
const PURE = '#f6f5ef';
const IMPURE = '#9b6b3d';
const PRODUCT = '#c9b6ec';

const num = (x: number, dp: number) => {
	const s = x.toFixed(dp);
	return s;
};
// Smallest grain count (10..30) that shows the fraction exactly, else 20.
const grainCount = (frac: number) => {
	for (let n = 10; n <= 30; n++) if (Math.abs(frac * n - Math.round(frac * n)) < 1e-6) return n;
	return 20;
};

export const PercentDiagram = ({
	panels = [
		{type: 'purity', sample: 20, pure: 17, unit: 'g', substance: 'CaCO₃', sampleName: 'limestone', dp: 0, title: 'PURITY · at the start'},
		{type: 'yield', theoretical: 8, actual: 6.4, unit: 'g', substance: 'SO₃', dp: 1, title: 'YIELD · at the end'},
	],
	between,
	highlight = [],
	trap,
	delay = 62,
}: PercentProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const fade = (d: number | undefined, len = 12) => (d === undefined ? 0 : interpolate(frame, [d, d + len], [0, 1], clamp));
	const pulse = idlePulse(frame);
	const two = panels.length > 1;
	const cxs = two ? [190, 572] : [380];

	const purityPanel = (p: Purity, cx: number, k: number) => {
		const unit = p.unit ?? 'g';
		const dp = p.dp ?? 0;
		const frac = p.pure / p.sample;
		const n = grainCount(frac);
		const nPure = Math.round(frac * n);
		const nImp = n - nPure;
		const beat = p.beat ?? 0;
		const work = p.workBeat ?? beat + 90;
		const sep = interpolate(frame, [work, work + 30], [0, 1], clamp);
		const panTop = BASE - 46 * 1.45;
		const slots = pileSlots(cx, panTop - 2, n, 9.5);
		// Spread the impurity grains evenly through the heap.
		const isImp = (i: number) => Math.floor(((i + 1) * nImp) / n) > Math.floor((i * nImp) / n);
		const pct = (p.pure / p.sample) * 100;
		return (
			<g key={k}>
				<g opacity={fade(beat, 14)}>
					<DioramaPlinth id={ID} cx={cx} cy={BASE + 8} rx={112} />
					<Balance x={cx} y={BASE + 4} readout={`${num(p.sample, dp)} ${unit}`} heapScale={0} scale={1.45} />
				</g>
				{slots.map((s, i) => {
					const imp = isImp(i);
					const pop = spring({frame: frame - beat - 6 - i * 1.5, fps, config: {damping: 12, stiffness: 200, mass: 0.6}});
					const dx = imp ? (i % 2 ? 1 : -1) * 70 * sep : 0;
					const dy = imp ? sep * 60 : 0;
					return <Ball key={i} x={s.x + dx} y={s.y + dy + (sep >= 1 ? idleBob(frame, i, 1) : 0)} r={9.5 * Math.max(0, pop)} color={imp ? IMPURE : PURE} opacity={(pop > 0.02 ? 1 : 0) * (imp ? 1 - sep * 0.55 : 1)} />;
				})}
				<g opacity={fade(beat + 10)}>
					<text x={cx} y={BASE + 92} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>{`${num(p.sample, dp)} ${unit} ${p.sampleName ?? 'sample'}`}</text>
				</g>
				<g opacity={fade(work + 20)}>
					<text x={cx} y={BASE + 116} textAnchor="middle" fill={LANE.given} fontSize={21} fontWeight={800}>{`${num(p.pure, dp)} ${unit} is pure ${p.substance}`}</text>
				</g>
				{p.showFormula && (
					<text x={cx} y={60} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={fade(beat + 20)}>% purity = pure ÷ sample × 100</text>
				)}
				<Chip x={cx} y={BASE + 152} text={p.showFormula ? `${num(p.pure, dp)} ÷ ${num(p.sample, dp)} × 100 = ${Math.round(pct)}%` : `${Math.round(pct)}% pure`} color={LANE.given} on fontSize={20} opacity={fade(work + 30)} />
			</g>
		);
	};

	const yieldPanel = (p: Yield, cx: number, k: number, capGlow: boolean) => {
		const unit = p.unit ?? 'g';
		const dp = p.dp ?? 1;
		const beat = p.beat ?? 0;
		const work = p.workBeat ?? beat + 90;
		const jw = 120, jh = 190, full = 156;
		const top = BASE - jh;
		const fill = interpolate(frame, [beat + 16, work], [0, p.actual / p.theoretical], clamp);
		const fy = BASE - 6 - full * fill;
		const lineY = BASE - 6 - full;
		const pct = (p.actual / p.theoretical) * 100;
		const lx = cx - jw / 2 - 12;
		return (
			<g key={k}>
				<g opacity={fade(beat, 14)}>
					<DioramaPlinth id={ID} cx={cx} cy={BASE + 8} rx={112} />
					<ellipse cx={cx} cy={BASE + 2} rx={jw * 0.58} ry={9} fill="rgba(40,60,20,0.22)" />
					{/* product */}
					<rect x={cx - jw / 2 + 5} y={fy} width={jw - 10} height={BASE - 6 - fy} rx={4} fill={PRODUCT} />
					{fill > 0.01 && <ellipse cx={cx} cy={fy} rx={jw / 2 - 5} ry={6} fill="#e3d8f6" />}
					{/* jar */}
					<rect x={cx - jw / 2} y={top} width={jw} height={jh} rx={12} fill={LANE.glass} stroke={LANE.glassEdge} strokeWidth={3} />
					<rect x={cx - jw / 2 + 9} y={top + 14} width={7} height={jh - 30} rx={3.5} fill="#ffffff" opacity={0.45} />
					{/* 100 % line */}
					<line x1={cx - jw / 2 - 6} x2={cx + jw / 2 + 6} y1={lineY} y2={lineY} stroke={capGlow ? TOK.amber : LANE.wanted} strokeWidth={capGlow ? 3 + pulse * 2 : 3} strokeDasharray="8 6" />
				</g>
				<g opacity={fade(beat + 10)}>
					<text x={lx} y={lineY + 6} textAnchor="end" fill={capGlow ? TOK.amberInk : LANE.wanted} fontSize={18} fontWeight={900}>{`100% = ${num(p.theoretical, Number.isInteger(p.theoretical) ? 0 : dp)} ${unit}`}</text>
				</g>
				<g opacity={fade(work - 10)}>
					<text x={lx} y={Math.max(fy + 6, lineY + 30)} textAnchor="end" fill={TOK.ink} fontSize={18} fontWeight={900}>{`${num(p.actual, dp)} ${unit}`}</text>
				</g>
				<g opacity={fade(beat + 10)}>
					<text x={cx} y={BASE + 92} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>{`${num(p.theoretical, Number.isInteger(p.theoretical) ? 0 : dp)} ${unit} ${p.substance} possible`}</text>
				</g>
				<g opacity={fade(work)}>
					<text x={cx} y={BASE + 116} textAnchor="middle" fill={LANE.wanted} fontSize={21} fontWeight={800}>{`${num(p.actual, dp)} ${unit} actually collected`}</text>
				</g>
				{p.showFormula && (
					<text x={cx} y={60} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={fade(beat + 20)}>% yield = actual ÷ theoretical × 100</text>
				)}
				<Chip x={cx} y={BASE + 152} text={p.showFormula ? `${num(p.actual, dp)} ÷ ${num(p.theoretical, Number.isInteger(p.theoretical) ? 0 : dp)} × 100 = ${Math.round(pct)}%` : `${Math.round(pct)}% yield`} color={LANE.wanted} on fontSize={20} opacity={fade(work + 10)} />
			</g>
		);
	};

	const directionPanel = (p: Direction, k: number) => {
		const unit = p.unit ?? 'g';
		const f = p.purity / 100;
		const pure = p.sample * f;
		const back = pure / f;
		const sDp = p.sampleDp ?? 0, pDp = p.pureDp ?? 1;
		const beat = p.beat ?? 0;
		const down = p.downBeat ?? beat + 90;
		const up = p.upBeat ?? down + 150;
		const n = grainCount(f);
		const nPure = Math.round(f * n);
		const lx = 178, rx = 582;
		const panTop = BASE - 46 * 1.45;
		const lSlots = pileSlots(lx, panTop - 2, n, 9.5);
		const rSlots = pileSlots(rx, panTop - 2, nPure, 9.5);
		const isImp = (i: number) => Math.floor(((i + 1) * (n - nPure)) / n) > Math.floor((i * (n - nPure)) / n);
		const rightIn = fade(down + 24, 16);
		const arrowOn = (b: number) => frame >= b && frame < b + 80;
		return (
			<g key={k}>
				<g opacity={fade(beat, 14)}>
					<DioramaPlinth id={ID} cx={lx} cy={BASE + 8} rx={112} />
					<Balance x={lx} y={BASE + 4} readout={`${num(p.sample, sDp)} ${unit}`} heapScale={0} scale={1.45} />
					{lSlots.map((s, i) => (
						<Ball key={i} x={s.x} y={s.y + idleBob(frame, i, 0.8)} r={9.5} color={isImp(i) ? IMPURE : PURE} />
					))}
					<text x={lx} y={BASE + 92} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>{`${num(p.sample, sDp)} ${unit} weighed out`}</text>
					<text x={lx} y={BASE + 116} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{`${p.purity}% pure ${p.substance}`}</text>
				</g>
				<g opacity={rightIn}>
					<DioramaPlinth id={ID} cx={rx} cy={BASE + 8} rx={112} />
					<Balance x={rx} y={BASE + 4} readout={`${num(pure, pDp)} ${unit}`} heapScale={0} scale={1.45} />
					{rSlots.map((s, i) => (
						<Ball key={i} x={s.x} y={s.y + idleBob(frame, i + 40, 0.8)} r={9.5} color={PURE} />
					))}
					<text x={rx} y={BASE + 92} textAnchor="middle" fill={LANE.given} fontSize={21} fontWeight={800}>{`${num(pure, pDp)} ${unit} real ${p.substance}`}</text>
				</g>
				{/* forward: multiply */}
				<g opacity={fade(down)}>
					<path d={`M 300 150 Q 380 112 460 150`} fill="none" stroke={LANE.given} strokeWidth={arrowOn(down) ? 6 : 4} strokeLinecap="round" markerEnd={`url(#${ID}-arr-g)`} />
					<Chip x={380} y={104} text={`× ${num(f, 2)}`} color={LANE.given} on={arrowOn(down)} fontSize={22} />
					<text x={380} y={170} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>scale the mass down</text>
				</g>
				{/* backward: divide */}
				<g opacity={fade(up)}>
					<path d={`M 460 232 Q 380 270 300 232`} fill="none" stroke={LANE.wanted} strokeWidth={arrowOn(up) ? 6 : 4} strokeLinecap="round" markerEnd={`url(#${ID}-arr-w)`} />
					<Chip x={380} y={282} text={`÷ ${num(f, 2)}`} color={LANE.wanted} on={arrowOn(up)} fontSize={22} />
					<text x={380} y={222} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>work back to what to weigh</text>
					<text x={380} y={BASE + 152} textAnchor="middle" fill={LANE.wanted} fontSize={20} fontWeight={800}>{`${num(pure, pDp)} ÷ ${num(f, 2)} = ${num(back, sDp)} ${unit} to weigh out`}</text>
				</g>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label="Percentage purity and percentage yield" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<marker id={`${ID}-arr-g`} viewBox="0 0 10 10" refX={7} refY={5} markerWidth={4} markerHeight={4} orient="auto">
					<path d="M 0 0 L 10 5 L 0 10 Z" fill={LANE.given} />
				</marker>
				<marker id={`${ID}-arr-w`} viewBox="0 0 10 10" refX={7} refY={5} markerWidth={4} markerHeight={4} orient="auto">
					<path d="M 0 0 L 10 5 L 0 10 Z" fill={LANE.wanted} />
				</marker>
			</defs>

			{panels.map((p, i) => {
				if (p.type === 'direction') return directionPanel(p, i);
				const cx = cxs[i] ?? 380;
				const title = p.title;
				const hl = highlight.filter((h) => h.panel === i && frame >= h.beat);
				const capGlow = trap !== undefined && trap.panel === i && frame >= trap.beat;
				return (
					<g key={i}>
						{title && (
							<text x={cx} y={30} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} letterSpacing="0.08em" opacity={fade(p.beat ?? 0)}>{title}</text>
						)}
						{p.type === 'purity' ? purityPanel(p, cx, i) : yieldPanel(p, cx, i, capGlow)}
						{hl.length > 0 && (
							<g opacity={fade(hl[hl.length - 1].beat)}>
								<Chip x={cx} y={p.showFormula ? 94 : 72} text={hl[hl.length - 1].text} color={p.type === 'purity' ? LANE.given : LANE.wanted} fontSize={19} strokeWidth={2.5 + pulse * 1.5} />
							</g>
						)}
					</g>
				);
			})}

			{two && between && panels[1] && (
				<g opacity={fade((panels[1] as Purity | Yield).beat ?? 0)}>
					<path d="M 356 196 L 404 196" stroke={TOK.inkMute} strokeWidth={4} strokeLinecap="round" markerEnd={`url(#${ID}-arr-w)`} />
					<text x={380} y={180} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{between}</text>
				</g>
			)}

			{trap && <TrapLine x={W / 2} y={VB_H - 20} text={trap.text} opacity={fade(trap.beat, 14)} pulse={pulse} />}
		</svg>
	);
};
