// SpeciationDiagram (bio11m3aSpeciation) — how one population becomes many.
//
// mode 'split'     One population on a stone plinth. A river cuts across it
//                  (isolation: no more interbreeding). The two sides take on
//                  different environments (dry sand / damp shade) and, over
//                  generations, the two groups diverge: circles on one side,
//                  squares on the other. The river then dries up, two
//                  individuals meet in the middle, and a cross shows they can
//                  no longer produce fertile offspring: two species.
// mode 'tree'      Adaptive radiation: one ancestor branches, generation after
//                  generation, into several species at the tips, each with its
//                  own niche (optional finch-head glyph with a beak shaped for
//                  its food). Optional extinct branches end in a cross.
// mode 'patterns'  Divergent vs convergent evolution side by side. Left: one
//                  ancestor, descendants become different. Right: two lineages
//                  that last shared an ancestor long ago end up looking alike
//                  (similar pressures), e.g. a thylacine and a grey wolf.
//
// All labels come from props. Beats are frames after `delay`. Hold: tokens
// jostle, the key label breathes.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Beat, Foot, H, Ledge, Mark, PAL, Tag, W, clamp, fadeAt, popAt, shade, textWidth} from './shared';

type BeakTip = {label: string; beak?: {depth: number; length: number}};
export type SpeciationProps = {
	mode: 'split' | 'tree' | 'patterns';
	// split
	steps?: {text: string; at: number}[];
	sideLabels?: [string, string];
	beats?: {pop?: number; barrier?: number; diverge?: number; reunite?: number; species?: number};
	speciesLabels?: [string, string];
	// tree
	ancestor?: {label: string; at: number};
	tips?: BeakTip[];
	tipsAt?: number;
	growAt?: number;
	extinct?: {at: number; label?: string};
	// patterns
	divergent?: {title: string; ancestor: string; tips: BeakTip[]; at: number};
	convergent?: {title: string; left: {label: string; group: string}; right: {label: string; group: string}; root: string; at: number; alikeAt: number; alikeText: string};
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3spec';
const ease = Easing.inOut(Easing.cubic);

export const FinchHead = ({x, y, depth, length, s = 1, color = '#7a6048'}: {x: number; y: number; depth: number; length: number; s?: number; color?: string}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<ellipse cx={-6} cy={10} rx={18} ry={12} fill={shade(color, -0.08)} />
		<circle cx={0} cy={0} r={15} fill={color} stroke="rgba(0,0,0,0.25)" />
		<circle cx={5} cy={-4} r={2.6} fill="#fff" />
		<circle cx={5.6} cy={-4} r={1.3} fill="#222" />
		<path d={`M 11 ${-2 - depth * 0.5} Q ${14 + length * 0.6} ${-1 - depth * 0.2} ${13 + length} 2 Q ${14 + length * 0.5} ${4 + depth * 0.45} 11 ${4 + depth * 0.45} Z`} fill="#3b3430" />
	</g>
);

const Canid = ({x, y, s = 1, color, stripes}: {x: number; y: number; s?: number; color: string; stripes?: boolean}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		<path d="M -34 -2 Q -52 -6 -58 8" stroke={shade(color, -0.1)} strokeWidth={7} fill="none" strokeLinecap="round" />
		<ellipse cx={-6} cy={0} rx={30} ry={13} fill={color} stroke="rgba(0,0,0,0.25)" />
		{[-24, -12, 12].map((lx, k) => (
			<rect key={k} x={lx - 3.5} y={8} width={7} height={22} rx={3} fill={shade(color, -0.12)} />
		))}
		<rect x={20} y={6} width={7} height={24} rx={3} fill={shade(color, -0.12)} />
		<path d="M 18 -6 L 30 -18 L 52 -12 L 56 -8 L 34 -2 Z" fill={color} stroke="rgba(0,0,0,0.25)" />
		<path d="M 28 -16 L 30 -28 L 36 -17 Z" fill={shade(color, -0.15)} />
		<circle cx={40} cy={-12} r={1.8} fill="#222" />
		{stripes && [-26, -18, -10, -2].map((sx, k) => <path key={k} d={`M ${sx} -12 Q ${sx + 3} -4 ${sx} 2`} stroke="#3a2a1c" strokeWidth={3} fill="none" />)}
	</g>
);

const Token = ({x, y, t, side, s = 1}: {x: number; y: number; t: number; side: 0 | 1; s?: number}) => {
	// t: 0 = ancestral (blue circle) → 1 = diverged (orange circle / teal square)
	const from = [0x5b, 0x8f, 0xd6];
	const to = side === 0 ? [0xe0, 0x84, 0x3a] : [0x2a, 0x9d, 0x8f];
	const c = `rgb(${from.map((v, i) => Math.round(v + (to[i] - v) * t)).join(',')})`;
	const r = side === 1 ? 12 * (1 - t) + 3 * t : 12;
	return <rect x={x - 12 * s} y={y - 12 * s} width={24 * s} height={24 * s} rx={r * s} fill={c} stroke="rgba(0,0,0,0.3)" strokeWidth={1.3} />;
};

export const SpeciationDiagram = (props: SpeciationProps) => {
	const {mode, footer = [], delay = 62} = props;
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	if (mode === 'split') {
		const b = {pop: 0, barrier: 80, diverge: 200, reunite: 400, species: 480, ...(props.beats ?? {})};
		const steps = props.steps ?? [];
		const cx = W / 2;
		const cy = 300;
		const rx = 330;
		const ry = rx * 0.34;
		const riverT = interpolate(frame, [b.barrier, b.barrier + 30], [0, 1], {...clamp, easing: ease}) * (1 - fadeAt(frame, b.reunite, 30));
		const envT = fadeAt(frame, b.barrier + 20, 30);
		const div = interpolate(frame, [b.diverge, b.diverge + 150], [0, 1], {...clamp, easing: ease});
		const meet = interpolate(frame, [b.reunite + 20, b.reunite + 60], [0, 1], {...clamp, easing: ease});
		const pos = Array.from({length: 14}, (_, k) => {
			const side = (k < 7 ? 0 : 1) as 0 | 1;
			const j = k % 7;
			const row = j < 4 ? 0 : 1;
			const col = row ? j - 4 : j;
			const n = row ? 3 : 4;
			const x = (side ? cx + 84 : cx - 84 - (n - 1) * 60 - (row ? 30 : 0)) + col * 60 + (row ? 30 : 0) * (side ? 1 : 1);
			return {x, y: cy - 36 + row * 50, side};
		});
		const stepIdx = steps.reduce((acc, st, i) => (frame >= st.at ? i : acc), -1);
		const clipId = `${ID}-top`;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Allopatric speciation: isolation, divergence, reproductive isolation" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<defs>
					<clipPath id={clipId}>
						<ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
					</clipPath>
				</defs>
				{steps.map((st, i) => {
					const w = (W - 20) / steps.length;
					const label = `${i + 1}  ${st.text}`;
					const size = textWidth(label, 16) + 24 > w - 6 ? 14 : 16;
					return <Tag key={i} x={10 + w * (i + 0.5)} y={30} text={label} size={size} color={i === stepIdx ? theme.accent : TOK.inkDim} fill={i === stepIdx ? '#eef5fc' : '#fff'} strokeW={i === stepIdx ? 3 : 2} opacity={fadeAt(frame, st.at)} />;
				})}
				<DioramaPlinth id={`${ID}-p`} cx={cx} cy={cy} rx={rx} />
				<g clipPath={`url(#${clipId})`}>
					<rect x={cx - rx} y={cy - ry} width={rx} height={ry * 2} fill={PAL.sand} opacity={envT * 0.75} />
					<rect x={cx} y={cy - ry} width={rx} height={ry * 2} fill={PAL.shadeGreen} opacity={envT * 0.55} />
					<path d={`M ${cx - 8} ${cy - ry} C ${cx + 26} ${cy - 40}, ${cx - 30} ${cy + 20}, ${cx + 6} ${cy + ry}`} stroke={PAL.water} strokeWidth={34 * riverT} fill="none" opacity={riverT} />
					<path d={`M ${cx - 8} ${cy - ry} C ${cx + 26} ${cy - 40}, ${cx - 30} ${cy + 20}, ${cx + 6} ${cy + ry}`} stroke="#bfe3f5" strokeWidth={6 * riverT} fill="none" opacity={riverT * 0.8} strokeDasharray="14 18" strokeDashoffset={-frame * 1.5} />
				</g>
				{props.sideLabels && (
					<g opacity={envT}>
						<text x={cx - rx * 0.55} y={cy + ry + 70} textAnchor="middle" fontSize={17} fontWeight={800} fill="#9a7a3a">
							{props.sideLabels[0]}
						</text>
						<text x={cx + rx * 0.55} y={cy + ry + 70} textAnchor="middle" fontSize={17} fontWeight={800} fill="#3f6f3a">
							{props.sideLabels[1]}
						</text>
					</g>
				)}
				{pos.map((p, k) => {
					const on = popAt(frame, fps, b.pop + k * 3);
					const isMover = k === 3 || k === 7;
					const mx = isMover ? (k === 3 ? cx - 30 - p.x : cx + 30 - p.x) * meet : 0;
					const my = isMover ? (cy + 34 - p.y) * meet : 0;
					return (
						<g key={k} opacity={Math.min(1, on)}>
							<Token x={p.x + mx + idleBob(frame, k, 1.4)} y={p.y + my + idleBob(frame, k + 9, 1.2)} t={div} side={p.side} s={Math.min(1, on)} />
						</g>
					);
				})}
				<g opacity={fadeAt(frame, b.reunite + 60)}>
					<Mark x={cx} y={cy + 34} ok={false} s={1.1} />
					<Tag x={cx} y={cy + ry + 30} text="no fertile offspring" color={PAL.stop} size={17} />
				</g>
				{props.speciesLabels && (
					<g opacity={fadeAt(frame, b.species)}>
						<Tag x={cx - rx * 0.55} y={cy - ry - 26} text={props.speciesLabels[0]} color="#b5562e" size={18} strokeW={2.5 + idlePulse(frame)} />
						<Tag x={cx + rx * 0.55} y={cy - ry - 26} text={props.speciesLabels[1]} color={PAL.teal} size={18} strokeW={2.5 + idlePulse(frame)} />
					</g>
				)}
				<Foot lines={footer} frame={frame} fade={fadeAt} />
			</svg>
		);
	}

	if (mode === 'tree') {
		const tips = props.tips ?? [];
		const n = tips.length;
		const growAt = props.growAt ?? 30;
		const tipsAt = props.tipsAt ?? growAt + 120;
		const baseY = H - 70 - Math.max(0, footer.length - 1) * 28;
		const tipY = 150;
		const x0 = 90;
		const x1 = W - 90;
		const tipX = (i: number) => (n === 1 ? W / 2 : x0 + ((x1 - x0) * i) / (n - 1));
		type Node = {x: number; y: number; depth: number; kids: Node[]; tip?: number};
		let maxDepth = 0;
		const build = (lo: number, hi: number, depth: number): Node => {
			maxDepth = Math.max(maxDepth, depth);
			if (lo === hi) return {x: tipX(lo), y: tipY, depth, kids: [], tip: lo};
			const mid = Math.floor((lo + hi) / 2);
			const a = build(lo, mid, depth + 1);
			const c = build(mid + 1, hi, depth + 1);
			return {x: (a.x + c.x) / 2, y: 0, depth, kids: [a, c]};
		};
		const root = build(0, n - 1, 0);
		const levelY = (d: number) => baseY - 40 - ((baseY - 40 - tipY - 30) * d) / Math.max(1, maxDepth);
		const edges: {x1: number; y1: number; x2: number; y2: number; d: number}[] = [];
		const walk = (nd: Node) => {
			const y = nd.tip !== undefined ? tipY : levelY(nd.depth);
			nd.y = y;
			for (const k of nd.kids) {
				const ky = k.tip !== undefined ? tipY + 30 : levelY(k.depth);
				edges.push({x1: nd.x, y1: y, x2: k.x, y2: ky, d: nd.depth});
				walk(k);
			}
		};
		walk(root);
		const per = (tipsAt - growAt) / Math.max(1, maxDepth + 1);
		const ext = props.extinct;
		// extinct lineages: short stubs off the two first branches, pointing outward
		const extBranches = ext
			? edges
					.filter((e) => e.d === 0)
					.map((e, k) => {
						const mx = e.x1 + (e.x2 - e.x1) * 0.55;
						const my = e.y1 + (e.y2 - e.y1) * 0.55;
						const dir = e.x2 < e.x1 ? -1 : 1;
						return {mx, my, ex: mx + dir * 70, ey: my - 30, k};
					})
			: [];
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Adaptive radiation from one ancestor" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<Ledge x0={60} x1={W - 60} y={baseY + 14} />
				<line x1={root.x} y1={baseY + 14} x2={root.x} y2={root.y} stroke={theme.accent} strokeWidth={6} strokeLinecap="round" opacity={fadeAt(frame, growAt - 20)} />
				{edges.map((e, k) => {
					const t = interpolate(frame, [growAt + e.d * per, growAt + (e.d + 1) * per], [0, 1], {...clamp, easing: ease});
					return <path key={k} d={`M ${e.x1} ${e.y1} L ${e.x1 + (e.x2 - e.x1) * t} ${e.y1 + (e.y2 - e.y1) * t}`} stroke={theme.accent} strokeWidth={5} strokeLinecap="round" fill="none" />;
				})}
				{extBranches.map((b2, k) => {
					const t = interpolate(frame, [ext!.at, ext!.at + 30], [0, 1], {...clamp, easing: ease});
					return (
						<g key={k}>
							<path d={`M ${b2.mx} ${b2.my} L ${b2.mx + (b2.ex - b2.mx) * t} ${b2.my + (b2.ey - b2.my) * t}`} stroke={TOK.inkMute} strokeWidth={4} strokeLinecap="round" strokeDasharray="2 7" />
							<Mark x={b2.ex} y={b2.ey} ok={false} s={0.85} opacity={fadeAt(frame, ext!.at + 26)} />
						</g>
					);
				})}
				{ext?.label && (
					<text x={extBranches[1]?.ex + 22} y={extBranches[1]?.ey + 6} fontSize={15} fontWeight={800} fill={TOK.inkDim} opacity={fadeAt(frame, ext.at + 30)}>
						{ext.label}
					</text>
				)}
				{props.ancestor && (
					<g opacity={fadeAt(frame, props.ancestor.at)}>
						<circle cx={root.x} cy={baseY - 4} r={14 + idlePulse(frame) * 1.5} fill={theme.accent} stroke="#fff" strokeWidth={3} />
						<text x={root.x + 24} y={baseY + 2} fontSize={17} fontWeight={800} fill={TOK.ink}>
							{props.ancestor.label}
						</text>
					</g>
				)}
				{tips.map((tp, i) => {
					const o = fadeAt(frame, tipsAt + i * 12, 14);
					const lines = tp.label.split('\n');
					return (
						<g key={i} opacity={o}>
							{tp.beak ? <FinchHead x={tipX(i) - 6} y={tipY - 6 + idleBob(frame, i, 1.3)} depth={tp.beak.depth} length={tp.beak.length} s={1.05} /> : <circle cx={tipX(i)} cy={tipY} r={12} fill={theme.accent} />}
							{lines.map((ln, k) => (
								<text key={k} x={tipX(i)} y={tipY - 40 - (lines.length - 1 - k) * 18} textAnchor="middle" fontSize={15} fontWeight={800} fill={TOK.ink}>
									{ln}
								</text>
							))}
						</g>
					);
				})}
				<Foot lines={footer} frame={frame} fade={fadeAt} />
			</svg>
		);
	}

	// patterns
	const dv = props.divergent;
	const cv = props.convergent;
	const baseY = H - 64 - Math.max(0, footer.length - 1) * 28;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Divergent versus convergent evolution" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<line x1={W / 2} y1={20} x2={W / 2} y2={baseY + 20} stroke={TOK.rule} strokeWidth={2} />
			{dv && (() => {
				const t = interpolate(frame, [dv.at, dv.at + 50], [0, 1], {...clamp, easing: ease});
				const ax = 190;
				const ay = baseY - 20;
				const tx = [70, 190, 310];
				const ty = 190;
				return (
					<g opacity={fadeAt(frame, dv.at)}>
						<Ledge x0={24} x1={W / 2 - 24} y={baseY + 6} />
						<text x={ax} y={34} textAnchor="middle" fontSize={21} fontWeight={800} fill={theme.accent}>
							{dv.title}
						</text>
						{tx.map((x, i) => (
							<path key={i} d={`M ${ax} ${ay} C ${ax} ${ay - 90}, ${x} ${ty + 120}, ${x} ${ty + 40}`} stroke={theme.accent} strokeWidth={5} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - t} />
						))}
						<circle cx={ax} cy={ay} r={13} fill={theme.accent} stroke="#fff" strokeWidth={3} />
						<text x={ax} y={ay + 36} textAnchor="middle" fontSize={16} fontWeight={800} fill={TOK.ink}>
							{dv.ancestor}
						</text>
						{dv.tips.map((tp, i) => {
							const lines = tp.label.split('\n');
							return (
								<g key={i} opacity={fadeAt(frame, dv.at + 40 + i * 10)}>
									<FinchHead x={tx[i] - 6} y={ty + idleBob(frame, i, 1.2)} depth={tp.beak?.depth ?? 8} length={tp.beak?.length ?? 16} s={1} />
									{lines.map((ln, k) => (
										<text key={k} x={tx[i]} y={ty - 36 - (lines.length - 1 - k) * 17} textAnchor="middle" fontSize={15} fontWeight={800} fill={TOK.ink}>
											{ln}
										</text>
									))}
								</g>
							);
						})}
					</g>
				);
			})()}
			{cv && (() => {
				const t = interpolate(frame, [cv.at, cv.at + 60], [0, 1], {...clamp, easing: ease});
				const rootX = 570;
				const rootY = baseY - 10;
				const lx = 470;
				const rx2 = 670;
				const ty = 200;
				return (
					<g opacity={fadeAt(frame, cv.at)}>
						<Ledge x0={W / 2 + 24} x1={W - 24} y={baseY + 6} />
						<text x={rootX} y={34} textAnchor="middle" fontSize={21} fontWeight={800} fill={PAL.orange}>
							{cv.title}
						</text>
						{[lx, rx2].map((x, i) => (
							<path key={i} d={`M ${rootX} ${rootY} C ${x} ${rootY - 10}, ${x} ${rootY - 60}, ${x} ${ty + 50}`} stroke={i ? '#6b7a88' : '#b5562e'} strokeWidth={5} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - t} />
						))}
						<circle cx={rootX} cy={rootY} r={11} fill={TOK.inkMute} stroke="#fff" strokeWidth={3} />
						<text x={rootX} y={rootY + 32} textAnchor="middle" fontSize={15} fontWeight={800} fill={TOK.inkDim}>
							{cv.root}
						</text>
						{[cv.left, cv.right].map((sp, i) => {
							const x = i ? rx2 : lx;
							return (
								<g key={i} opacity={fadeAt(frame, cv.at + 50 + i * 12)}>
									<Canid x={x + 4} y={ty + idleBob(frame, i + 4, 1.2)} s={0.95} color={i ? '#8d8f94' : '#c49a64'} stripes={i === 0} />
									<text x={x} y={ty - 48} textAnchor="middle" fontSize={17} fontWeight={800} fill={TOK.ink}>
										{sp.label}
									</text>
									<text x={x} y={ty - 28} textAnchor="middle" fontSize={14} fontWeight={700} fill={TOK.inkDim}>
										{sp.group}
									</text>
								</g>
							);
						})}
						<g opacity={fadeAt(frame, cv.alikeAt)}>
							<path d={`M ${lx + 50} ${ty + 58} Q ${rootX} ${ty + 90} ${rx2 - 50} ${ty + 58}`} stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 1.5} fill="none" strokeDasharray="6 6" />
							<text x={rootX} y={ty + 80} textAnchor="middle" fontSize={14} fontWeight={800} fill={TOK.amberInk}>
								{cv.alikeText}
							</text>
						</g>
					</g>
				);
			})()}
			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
