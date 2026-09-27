// hdActionPotential — a neuron fires, drawn in the hand-drawn stop-motion style.
//
// Stimulus sparks run in along the dendrites, the cell body charges, and an
// action potential travels down the axon to the axon terminals, which release
// neurotransmitter. Myelinated (default): the impulse jumps from node of
// Ranvier to node of Ranvier (saltatory conduction). `myelinated: false`: the
// impulse creeps continuously along the bare membrane, visibly slower, for a
// compare-the-two scene.
//
// Beat plan (frames @30 fps, relative to `delay`, default 62):
//   +0   neuron draws itself on (dendrites, axon, sheaths, terminals)
//   +26  labels fade in
//   +34  stimulus sparks travel in along three dendrites
//   +62  impulse fires at the axon hillock and travels to the terminals
//   end  terminals flash and release neurotransmitter
//   then the cycle repeats every `cycleFrames` (default 150) while the scene holds
//
// Biology checks: signal direction dendrite → cell body → axon → terminals;
// nodes of Ranvier are the gaps between myelin sheaths; saltatory conduction
// only in myelinated axons; neurotransmitter released at the terminals.

import {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {Glow, Hand, HandArrow, HandSvg, PENCIL, hash01, ramp} from './shared';

const ID = 'hdap';
const SOMA = {x: 118, y: 250, r: 40};
const AXON_START = SOMA.x + SOMA.r - 4;
const AXON_END = 590;
const axonY = (x: number) => 250 + Math.sin((x - AXON_START) / 90) * 5;
const SHEATH_LEN = 82;
const GAP = 16;
const SHEATHS = [190, 190 + (SHEATH_LEN + GAP), 190 + 2 * (SHEATH_LEN + GAP), 190 + 3 * (SHEATH_LEN + GAP)];
const NODES = SHEATHS.slice(0, -1).map((s) => s + SHEATH_LEN + GAP / 2);
const BOUTONS = [
	{x: 684, y: 168},
	{x: 712, y: 226},
	{x: 710, y: 286},
	{x: 680, y: 344},
];

type Seg = {x1: number; y1: number; cx: number; cy: number; x2: number; y2: number; depth: number; primary: number};

const growDendrites = (): Seg[] => {
	const segs: Seg[] = [];
	const grow = (x: number, y: number, ang: number, len: number, depth: number, p: number, key: string) => {
		const rad = (ang * Math.PI) / 180;
		const x2 = x + Math.cos(rad) * len;
		const y2 = y + Math.sin(rad) * len;
		const bend = (hash01(key + 'b') - 0.5) * len * 0.35;
		segs.push({
			x1: x,
			y1: y,
			cx: (x + x2) / 2 + Math.cos(rad + Math.PI / 2) * bend,
			cy: (y + y2) / 2 + Math.sin(rad + Math.PI / 2) * bend,
			x2,
			y2,
			depth,
			primary: p,
		});
		if (depth < 2) {
			const spread = 24 + hash01(key + 's') * 16;
			grow(x2, y2, ang - spread, len * 0.66, depth + 1, p, key + 'L');
			grow(x2, y2, ang + spread, len * 0.66, depth + 1, p, key + 'R');
		}
	};
	[112, 142, 170, 196, 222, 250].forEach((a, i) => {
		const rad = (a * Math.PI) / 180;
		grow(SOMA.x + Math.cos(rad) * SOMA.r * 0.9, SOMA.y + Math.sin(rad) * SOMA.r * 0.9, a, 40 + hash01('len' + i) * 10, 0, i, 'd' + i);
	});
	return segs;
};

const qPoint = (s: Seg, t: number) => ({
	x: (1 - t) ** 2 * s.x1 + 2 * (1 - t) * t * s.cx + t ** 2 * s.x2,
	y: (1 - t) ** 2 * s.y1 + 2 * (1 - t) * t * s.cy + t ** 2 * s.y2,
});

export type HdActionPotentialProps = {
	delay?: number;
	/** true (default): saltatory conduction between nodes. false: continuous, slower. */
	myelinated?: boolean;
	/** Show structure labels (default true). */
	labels?: boolean;
	/** Override the bottom caption. */
	caption?: string;
	/** Frames between repeat firings once the first cycle has run (default 150). */
	cycleFrames?: number;
};

export const HdActionPotential = ({delay = 62, myelinated = true, labels = true, caption, cycleFrames = 150}: HdActionPotentialProps) => {
	const f = useCurrentFrame() - delay;
	const theme = useAccent();
	const dendrites = useMemo(growDendrites, []);

	// The stimulus → release cycle, repeating while the scene holds.
	const STOPS = myelinated ? [AXON_START + 8, ...NODES, AXON_END] : [];
	const travelFrames = myelinated ? STOPS.length * 12 : 150; // bare axon: slower
	const cycleLen = Math.max(cycleFrames, 62 + travelFrames + 40);
	const c = f < 34 ? f : 34 + ((f - 34) % cycleLen); // frame within cycle (after first draw-on)
	const fireAt = 62;
	const releaseAt = fireAt + travelFrames;
	const drawn = (a: number, b: number) => ramp(f, a, b);

	let sigX: number | null = null;
	let prevX: number | null = null;
	if (c >= fireAt && c < releaseAt) {
		if (myelinated) {
			const i = Math.min(STOPS.length - 1, Math.floor((c - fireAt) / 12));
			sigX = STOPS[i];
			prevX = i > 0 ? STOPS[i - 1] : null;
		} else {
			sigX = AXON_START + 8 + (AXON_END - AXON_START - 8) * ramp(c, fireAt, releaseAt);
		}
	}
	const release = c >= releaseAt ? c - releaseAt : -1;
	const somaCharge = c >= 44 && c < fireAt + 10 ? ramp(c, 44, fireAt) : 0;
	const labelO = labels ? drawn(26, 34) : 0;

	const axonPath = Array.from({length: 40}, (_, i) => {
		const x = AXON_START + ((AXON_END - AXON_START) * i) / 39;
		return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${axonY(x).toFixed(1)}`;
	}).join(' ');
	const dash = (p: number) => ({pathLength: 1, strokeDasharray: '1 1', strokeDashoffset: 1 - p});

	return (
		<HandSvg id={ID}>
			{/* dendrites */}
			<g fill="none" stroke={PENCIL.ink} strokeLinecap="round">
				{dendrites.map((s, i) => (
					<path key={i} d={`M${s.x1},${s.y1} Q${s.cx},${s.cy} ${s.x2},${s.y2}`} strokeWidth={[4.2, 2.8, 1.8][s.depth]} {...dash(drawn(s.depth * 6, s.depth * 6 + 12))} />
				))}
			</g>

			{/* stimulus sparks (inward along three dendrites) */}
			{c >= 34 && c < 60 &&
				dendrites
					.filter((s) => s.depth === 0 && [1, 3, 5].includes(s.primary))
					.map((s, i) => {
						const t = 1 - ramp(c, 34 + i * 3, 58);
						const pt = qPoint(s, t);
						return <Glow key={i} id={ID} x={pt.x} y={pt.y} r={16} o={t > 0.02 ? 1 : 0} />;
					})}

			{/* axon */}
			<path d={axonPath} stroke={PENCIL.ink} strokeWidth={11} fill="none" strokeLinecap="round" {...dash(drawn(4, 22))} />
			<path d={axonPath} stroke={PENCIL.paper} strokeWidth={6} fill="none" strokeLinecap="round" {...dash(drawn(4, 22))} />

			{/* myelin sheaths */}
			{myelinated &&
				SHEATHS.map((x, i) => {
					const y = axonY(x + SHEATH_LEN / 2);
					return (
						<g key={i} opacity={drawn(12 + i * 2, 16 + i * 2)}>
							<rect x={x} y={y - 17} width={SHEATH_LEN} height={34} rx={17} fill={theme.soft} />
							<rect x={x} y={y - 17} width={SHEATH_LEN} height={34} rx={17} fill={`url(#${ID}-hatchX)`} stroke={theme.accent} strokeWidth={2.6} />
						</g>
					);
				})}

			{/* terminals + boutons */}
			<g fill="none" stroke={PENCIL.ink} strokeLinecap="round" strokeWidth={3}>
				{BOUTONS.map((b, i) => (
					<path key={i} d={`M${AXON_END},${axonY(AXON_END)} Q${(AXON_END + b.x) / 2},${axonY(AXON_END) + (b.y - 250) * 0.2} ${b.x - 12},${b.y}`} {...dash(drawn(18, 30))} />
				))}
			</g>
			{BOUTONS.map((b, i) => {
				const lit = release >= 0 && release < 30;
				return (
					<g key={i} opacity={drawn(26, 30)}>
						<circle cx={b.x} cy={b.y} r={13} fill={lit ? '#fde7b8' : PENCIL.paper} />
						<circle cx={b.x} cy={b.y} r={13} fill={`url(#${ID}-hatch)`} stroke={lit ? TOK.amber : PENCIL.ink} strokeWidth={2.6} />
					</g>
				);
			})}

			{/* neurotransmitter release */}
			{release >= 0 &&
				BOUTONS.flatMap((b, i) =>
					[0, 1, 2, 3, 4].map((k) => {
						const ang = -0.8 + (k / 4) * 1.6 + (hash01(`n${i}${k}`) - 0.5) * 0.4;
						const d = 16 + release * (1.1 + hash01(`v${i}${k}`) * 0.7);
						return (
							<circle
								key={`${i}-${k}`}
								cx={Math.min(750, b.x + Math.cos(ang) * d)}
								cy={b.y + Math.sin(ang) * d}
								r={3.6}
								fill="none"
								stroke={TOK.amberInk}
								strokeWidth={2}
								opacity={1 - ramp(release, 10, 40)}
							/>
						);
					}),
				)}

			{/* cell body (on top of dendrite roots) */}
			<g opacity={drawn(0, 6)}>
				<circle cx={SOMA.x} cy={SOMA.y} r={SOMA.r} fill={theme.soft} />
				<circle cx={SOMA.x} cy={SOMA.y} r={SOMA.r} fill={`url(#${ID}-hatch)`} stroke={PENCIL.ink} strokeWidth={3.4} />
				<circle cx={SOMA.x - 4} cy={SOMA.y - 3} r={14} fill={PENCIL.paper} stroke={PENCIL.ink} strokeWidth={2.4} />
				<circle cx={SOMA.x - 2} cy={SOMA.y - 4} r={4.5} fill={theme.accent} />
			</g>
			{somaCharge > 0 && <Glow id={ID} x={SOMA.x} y={SOMA.y} r={34 + somaCharge * 26} o={somaCharge * 0.55} />}

			{/* the impulse */}
			{sigX !== null && (
				<>
					{prevX !== null && <Glow id={ID} x={prevX} y={axonY(prevX)} r={20} o={0.3} />}
					<Glow id={ID} x={sigX} y={axonY(sigX)} r={40} />
					<Hand x={sigX} y={axonY(sigX) - 30} size={26} color={TOK.amberInk}>+ +</Hand>
					<Hand x={sigX} y={axonY(sigX) + 46} size={26} color={TOK.amberInk}>+ +</Hand>
				</>
			)}

			{/* labels */}
			<Hand x={52} y={96} o={labelO}>dendrites</Hand>
			<Hand x={150} y={172} o={labelO} anchor="start">cell body</Hand>
			<HandArrow x1={168} y1={180} x2={SOMA.x + 18} y2={SOMA.y - SOMA.r - 2} o={labelO} bow={-0.15} />
			{myelinated ? (
				<>
					<Hand x={SHEATHS[1] + SHEATH_LEN / 2} y={196} o={labelO}>myelin sheath</Hand>
					<Hand x={NODES[1]} y={352} o={labelO}>node of Ranvier</Hand>
					<HandArrow x1={NODES[1] - 4} y1={328} x2={NODES[1]} y2={axonY(NODES[1]) + 12} o={labelO} bow={0.06} />
				</>
			) : (
				<Hand x={(AXON_START + AXON_END) / 2} y={206} o={labelO}>axon (no myelin)</Hand>
			)}
			<Hand x={694} y={128} o={labelO}>axon terminals</Hand>
			<Hand x={380} y={470} size={30} o={ramp(f, fireAt + 20, fireAt + 29)} color={theme.accent}>
				{caption ?? (myelinated ? 'the impulse jumps from node to node: saltatory conduction' : 'the impulse travels continuously along the membrane: slower')}
			</Hand>
		</HandSvg>
	);
};
