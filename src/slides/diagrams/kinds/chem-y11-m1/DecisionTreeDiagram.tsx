// DecisionTreeDiagram — a "which one is it?" routine as a diorama signpost tree.
//
// Question cards hang above a row of plinths; each branch draws itself down to
// the next question or to an outcome plinth, in the order the narration asks
// them. Outcome plinths carry a small particle model or piece of apparatus so
// the answer is a picture, not just a word. Config-driven: any tree of
// questions (yes/no or multi-way) with any leaves, from the lesson JSON.
//
// Layout: leaves sit on one row of plinths (evenly spaced, in depth-first
// order); a question is centred over its direct children. Labels may contain
// "\n" for a manual line break.
//
// Beats: every question and leaf has an optional `at` (frames after `delay`).
// A branch draws in over the 14 frames before its child appears.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from '../../diorama';
import {Ball, GlossDefs, clamp, fadeAt, popAt, shade} from './shared';

export type TreeIcon =
	| 'element' | 'compound' | 'homogeneous' | 'heterogeneous'
	| 'filtration' | 'crystallisation' | 'distillation' | 'fractional' | 'chromatography'
	| 'hbond' | 'dipole' | 'dispersion';
export type TreeLeaf = {leaf: string; sub?: string; icon?: TreeIcon; at?: number};
export type TreeQuestion = {q: string; at?: number; branches: {label?: string; node: TreeNode}[]};
export type TreeNode = TreeLeaf | TreeQuestion;
export type DecisionTreeProps = {
	title?: string;
	root: TreeNode;
	/** Question text to mark in amber (the one question to ask first). */
	highlight?: string;
	delay?: number;
};

const ID = 'c11tree';
const W = 760;
const H = 530;
const LEAF_Y = 404;

const isLeaf = (n: TreeNode): n is TreeLeaf => (n as TreeLeaf).leaf !== undefined;

type Placed = {node: TreeNode; x: number; y: number; depth: number; at: number; parent?: Placed; branchLabel?: string};

// Particle-model colours for the classification icons (two generic "elements").
const A = '#3f6fd8';
const B = '#e0433a';

const Icon = ({icon, cx, cy, rx, frame, seed}: {icon: TreeIcon; cx: number; cy: number; rx: number; frame: number; seed: number}) => {
	const s = rx / 60; // icons are drawn for rx = 60
	const bob = (i: number) => idleBob(frame, seed * 10 + i, 1.4);
	switch (icon) {
		case 'element':
		case 'homogeneous':
		case 'heterogeneous': {
			// Two rows of single particles on the plinth top (local units, rx = 60).
			const pts = [[-30, -15], [-10, -15], [10, -15], [30, -15], [-40, 1], [-20, 1], [0, 1], [20, 1], [40, 1]];
			const kind = (k: number, x: number) =>
				icon === 'element' ? 'A' : icon === 'homogeneous' ? (k % 2 ? 'B' : 'A') : x < 0 ? 'A' : x > 0 ? 'B' : k === 6 ? 'B' : 'A';
			const gap = icon === 'element' ? 0.96 : 1.08; // pure solid packs tight; mixtures a touch looser
			return (
				<g>
					{pts.map(([x, y], k) => {
						const n = kind(k, x);
						return <Ball key={k} id={ID} name={n} color={n === 'A' ? A : B} x={cx + x * s * gap} y={cy + y * s + bob(k)} r={9 * s} />;
					})}
				</g>
			);
		}
		case 'compound': {
			// Identical A–B units: every particle is the same compound.
			const units = [[-21, -15], [21, -15], [-33, 2], [0, 2], [33, 2]];
			return (
				<g>
					{units.map(([x, y], k) => (
						<g key={k} transform={`translate(${cx + x * s},${cy + y * s + bob(k)})`}>
							<Ball id={ID} name="A" color={A} x={-5.5 * s} y={0} r={8 * s} />
							<Ball id={ID} name="B" color={B} x={5.5 * s} y={0} r={7 * s} />
						</g>
					))}
				</g>
			);
		}
		case 'filtration':
			return (
				<g transform={`translate(${cx},${cy}) scale(${s})`}>
					{/* beaker with clear filtrate */}
					<path d="M -20 -4 L -20 -34 L 20 -34 L 20 -4 Q 20 2 14 2 L -14 2 Q -20 2 -20 -4 Z" fill="rgba(170,215,240,0.35)" stroke="#6f8796" strokeWidth={2} />
					<rect x={-18} y={-18} width={36} height={18} fill="rgba(120,190,230,0.55)" />
					{/* funnel + paper cone with residue */}
					<path d="M -28 -72 L 28 -72 L 4 -46 L 4 -30 L -4 -30 L -4 -46 Z" fill="rgba(235,240,244,0.9)" stroke="#6f8796" strokeWidth={2} strokeLinejoin="round" />
					<path d="M -22 -70 L 22 -70 L 0 -48 Z" fill="#fbf7ec" stroke="#c9bfa6" strokeWidth={1.5} />
					{[-10, -3, 5, 12, -6, 2].map((x, k) => (
						<circle key={k} cx={x} cy={-64 + (k > 3 ? 6 : 0)} r={3.2} fill="#8a6a44" />
					))}
					<circle cx={0} cy={-26 + ((frame / 3) % 8)} r={2.2} fill="rgba(90,170,220,0.9)" />
				</g>
			);
		case 'crystallisation':
			return (
				<g transform={`translate(${cx},${cy - 6 * s}) scale(${s})`}>
					<path d="M -34 -18 Q 0 22 34 -18 Z" fill="#f4f1ea" stroke="#9a948a" strokeWidth={2} />
					<ellipse cx={0} cy={-18} rx={34} ry={6} fill="rgba(170,215,240,0.6)" stroke="#9a948a" strokeWidth={2} />
					{[[-14, -24], [0, -28], [13, -23], [-4, -20]].map(([x, y], k) => (
						<rect key={k} x={x - 5} y={y - 5 + bob(k) * 0.3} width={10} height={10} fill="#e9f4fb" stroke="#7fa6c0" strokeWidth={1.5} transform={`rotate(${k * 17} ${x} ${y})`} />
					))}
				</g>
			);
		case 'distillation':
		case 'fractional':
			return (
				<g transform={`translate(${cx - 10 * s},${cy}) scale(${s})`}>
					<circle cx={-8} cy={-18} r={16} fill="rgba(170,215,240,0.45)" stroke="#6f8796" strokeWidth={2} />
					<path d="M -24 -14 Q -8 -2 8 -14 L 8 -12 Q -8 0 -24 -12 Z" fill="rgba(120,190,230,0.6)" />
					{icon === 'fractional' ? (
						<g>
							<rect x={-12} y={-80} width={8} height={48} rx={3} fill="rgba(235,240,244,0.9)" stroke="#6f8796" strokeWidth={2} />
							{[-72, -62, -52, -42].map((y) => <circle key={y} cx={-8} cy={y} r={2.2} fill="#9fb3c0" />)}
							<line x1={-6} y1={-76} x2={34} y2={-50} stroke="#6f8796" strokeWidth={5} strokeLinecap="round" />
						</g>
					) : (
						<g>
							<rect x={-12} y={-50} width={8} height={18} fill="rgba(235,240,244,0.9)" stroke="#6f8796" strokeWidth={2} />
							<line x1={-6} y1={-46} x2={34} y2={-24} stroke="#6f8796" strokeWidth={5} strokeLinecap="round" />
						</g>
					)}
					<circle cx={36} cy={(icon === 'fractional' ? -46 : -20) + ((frame / 3) % 10)} r={2.4} fill="rgba(90,170,220,0.95)" />
				</g>
			);
		case 'chromatography':
			return (
				<g transform={`translate(${cx},${cy}) scale(${s})`}>
					<path d="M -20 -2 L -20 -44 L 20 -44 L 20 -2 Z" fill="rgba(170,215,240,0.25)" stroke="#6f8796" strokeWidth={2} />
					<rect x={-19} y={-14} width={38} height={12} fill="rgba(120,190,230,0.45)" />
					<rect x={-9} y={-78} width={18} height={72} fill="#fbf7ec" stroke="#c9bfa6" strokeWidth={1.5} />
					<circle cx={0} cy={-62} r={4} fill="#3f6fd8" />
					<circle cx={0} cy={-44} r={4} fill="#e0433a" />
					<circle cx={0} cy={-30} r={4} fill="#e2b330" />
				</g>
			);
		case 'hbond':
			return (
				<g>
					<Molecule id={ID} atoms={['O', 'H', 'H']} x={cx - 22 * s} y={cy - 16 * s + bob(0)} r={11 * s} />
					<Molecule id={ID} atoms={['O', 'H', 'H']} x={cx + 26 * s} y={cy - 22 * s + bob(1)} r={11 * s} />
					<line x1={cx - 12 * s} y1={cy - 8 * s} x2={cx + 18 * s} y2={cy - 24 * s} stroke={TOK.inkDim} strokeWidth={2.5} strokeDasharray="3 4" />
				</g>
			);
		case 'dipole':
			return (
				<g>
					{[-1, 1].map((d, i) => (
						<g key={d}>
							<Molecule id={ID} atoms={['H', 'Cl']} x={cx + d * 24 * s} y={cy - 16 * s + bob(i)} r={11 * s} />
						</g>
					))}
					<line x1={cx - 12 * s} y1={cy - 16 * s} x2={cx + 12 * s} y2={cy - 16 * s} stroke={TOK.inkDim} strokeWidth={2.5} strokeDasharray="3 4" />
					<text x={cx - 44 * s} y={cy - 36 * s} fill={TOK.inkDim} fontSize={15} fontWeight={800}>δ+</text>
					<text x={cx - 14 * s} y={cy - 36 * s} fill={TOK.inkDim} fontSize={15} fontWeight={800}>δ−</text>
				</g>
			);
		case 'dispersion':
			return (
				<g>
					{[-1, 1].map((d, i) => (
						<g key={d}>
							<ellipse cx={cx + d * 24 * s} cy={cy - 16 * s + bob(i)} rx={24 * s} ry={15 * s} fill="rgba(63,143,232,0.14)" />
							<Molecule id={ID} atoms={['Cl', 'Cl']} x={cx + d * 24 * s} y={cy - 16 * s + bob(i)} r={10 * s} />
						</g>
					))}
				</g>
			);
	}
};

export const DecisionTreeDiagram = ({title, root, highlight, delay = 62}: DecisionTreeProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	// ── Layout ────────────────────────────────────────────────────────────
	const leaves: TreeLeaf[] = [];
	const collect = (n: TreeNode) => (isLeaf(n) ? leaves.push(n) : n.branches.forEach((b) => collect(b.node)));
	collect(root);
	const nLeaves = leaves.length;
	const margin = 20;
	const slot = (W - margin * 2) / nLeaves;
	const plinthRx = Math.min(80, slot * 0.43);

	let qDepth = 0;
	const measure = (n: TreeNode, d: number) => {
		if (isLeaf(n)) return;
		qDepth = Math.max(qDepth, d + 1);
		n.branches.forEach((b) => measure(b.node, d + 1));
	};
	measure(root, 0);
	const qTop = title ? 96 : 60;
	const qBottom = LEAF_Y - 172;
	const rowY = (d: number) => (qDepth > 1 ? qTop + ((qBottom - qTop) * d) / (qDepth - 1) : qTop + 20);

	const placed: Placed[] = [];
	let leafIdx = 0;
	let order = 0;
	const place = (n: TreeNode, depth: number, parent?: Placed, branchLabel?: string): Placed => {
		const defaultAt = 10 + order++ * 60;
		if (isLeaf(n)) {
			const p: Placed = {node: n, x: margin + slot * (leafIdx++ + 0.5), y: LEAF_Y, depth, at: n.at ?? defaultAt, parent, branchLabel};
			placed.push(p);
			return p;
		}
		const p: Placed = {node: n, x: 0, y: rowY(depth), depth, at: n.at ?? defaultAt, parent, branchLabel};
		placed.push(p);
		const kids = n.branches.map((b) => place(b.node, depth + 1, p, b.label));
		p.x = kids.reduce((sum, k) => sum + k.x, 0) / kids.length;
		return p;
	};
	place(root, 0);

	const lines = (t: string) => t.split('\n');
	const qBox = (q: string) => {
		const ls = lines(q);
		const w = Math.max(...ls.map((l) => l.length)) * 12.2 + 36;
		const h = ls.length * 27 + 20;
		return {w, h, ls};
	};
	// How far above the plinth centre each icon reaches (branches end just above it).
	const iconTop = (icon?: TreeIcon) =>
		(icon === undefined ? 20 : ['element', 'compound', 'homogeneous', 'heterogeneous'].includes(icon) ? 34 : ['hbond', 'dipole', 'dispersion'].includes(icon) ? 44 : 84) * (plinthRx / 60);

	const edgeT = (p: Placed) => interpolate(frame, [p.at - 14, p.at], [0, 1], clamp);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Decision tree'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['O', 'H', 'Cl']} />
			<GlossDefs id={ID} colors={{A, B}} />

			{title && (
				<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={fadeAt(frame, 0)}>
					{title}
				</text>
			)}

			{/* Branches (behind everything) */}
			{placed.filter((p) => p.parent).map((p, i) => {
				const par = p.parent!;
				const pb = qBox((par.node as TreeQuestion).q);
				const x1 = par.x;
				const y1 = par.y + pb.h / 2;
				const x2 = p.x;
				const y2 = isLeaf(p.node) ? p.y - iconTop((p.node as TreeLeaf).icon) - 8 : p.y - qBox((p.node as TreeQuestion).q).h / 2;
				const my = (y1 + y2) / 2;
				const t = edgeT(p);
				const labelPos = {x: (x1 + x2) / 2, y: my};
				return (
					<g key={`e${i}`}>
						<path
							d={`M ${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}`}
							stroke={shade(theme.accent, 0.25)}
							strokeWidth={3.5}
							fill="none"
							strokeLinecap="round"
							pathLength={1}
							strokeDasharray="1 1"
							strokeDashoffset={1 - t}
						/>
						{p.branchLabel && (
							<g opacity={fadeAt(frame, p.at - 6, 10)}>
								<rect x={labelPos.x - p.branchLabel.length * 5.4 - 12} y={labelPos.y - 15} width={p.branchLabel.length * 10.8 + 24} height={30} rx={15} fill={TOK.bgLift} stroke={shade(theme.accent, 0.25)} strokeWidth={2} />
								<text x={labelPos.x} y={labelPos.y + 6} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>
									{p.branchLabel}
								</text>
							</g>
						)}
					</g>
				);
			})}

			{/* Outcome plinths */}
			{placed.filter((p) => isLeaf(p.node)).map((p, i) => {
				const leaf = p.node as TreeLeaf;
				const pop = popAt(frame, fps, p.at);
				const ls = lines(leaf.leaf);
				const labelY = LEAF_Y + plinthRx * 0.54 + 26;
				return (
					<g key={`l${i}`} opacity={Math.min(1, pop * 1.5)}>
						<g transform={`translate(${p.x},${LEAF_Y}) scale(${0.6 + 0.4 * Math.min(1, pop)}) translate(${-p.x},${-LEAF_Y})`}>
							<DioramaPlinth id={ID} cx={p.x} cy={LEAF_Y} rx={plinthRx}>
								{leaf.icon && <Icon icon={leaf.icon} cx={p.x} cy={LEAF_Y} rx={plinthRx} frame={frame} seed={i} />}
							</DioramaPlinth>
						</g>
						{ls.map((l, k) => (
							<text key={k} x={p.x} y={labelY + k * 24} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>
								{l}
							</text>
						))}
						{leaf.sub && (
							<text x={p.x} y={labelY + ls.length * 24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>
								{leaf.sub}
							</text>
						)}
					</g>
				);
			})}

			{/* Question cards */}
			{placed.filter((p) => !isLeaf(p.node)).map((p, i) => {
				const q = (p.node as TreeQuestion).q;
				const {w, h, ls} = qBox(q);
				const pop = popAt(frame, fps, p.at);
				const hi = highlight !== undefined && q.replace(/\n/g, ' ') === highlight.replace(/\n/g, ' ');
				const stroke = hi ? TOK.amber : theme.accent;
				return (
					<g key={`q${i}`} opacity={Math.min(1, pop * 1.5)} transform={`translate(${p.x},${p.y}) scale(${0.7 + 0.3 * Math.min(1, pop)})`}>
						<rect x={-w / 2 + 3} y={-h / 2 + 5} width={w} height={h} rx={14} fill="rgba(40,50,40,0.12)" />
						<rect x={-w / 2} y={-h / 2} width={w} height={h} rx={14} fill={TOK.bgLift} stroke={stroke} strokeWidth={hi ? 3 + idlePulse(frame) * 1.5 : 3} />
						{ls.map((l, k) => (
							<text key={k} x={0} y={-h / 2 + 10 + 21 + k * 27} textAnchor="middle" fill={hi ? TOK.amberInk : TOK.ink} fontSize={22} fontWeight={800}>
								{l}
							</text>
						))}
					</g>
				);
			})}
		</svg>
	);
};
