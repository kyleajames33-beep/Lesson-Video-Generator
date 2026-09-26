// PolymerChainsDiagram — "structure controls properties" as four small plinths.
//
// A 2×2 grid of plinths, one per structural feature. Polymer chains are bead
// strings (glossy carbon beads) that gently wiggle; each plinth compares two
// cases side by side (or shows one case across the whole plinth) and ends with
// a short effect chip. Forces and links between chains are drawn in the accent
// colour: contact between long chains, covalent cross-links, and C–Cl dipole
// attractions (δ⁺/δ⁻). Cross-linked chains barely wiggle: they are locked.
//
// Config-driven: each panel has a title, an effect chip and one or two
// "halves", each drawing a chain arrangement. All `at` values are frames after
// `delay`. The four empty plinths are on screen from the start so the grid
// reads as a checklist that fills in with the narration.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS} from '../../diorama';
import {Ball, GlossDefs, fadeAt, popAt, shade} from './shared';

export type ChainKind = 'short' | 'long' | 'linear' | 'branched' | 'crosslinked' | 'pvc' | 'pe';
export type PolymerHalf = {kind: ChainKind; label?: string; at?: number};
export type PolymerPanel = {title: string; chip: string; halves: PolymerHalf[]; at?: number; chipAt?: number; forcesAt?: number};
export type PolymerChainsProps = {panels?: PolymerPanel[]; delay?: number};

const ID = 'c11poly';
const W = 760;
const H = 530;
const PW = 380;
const PH = 265;
const RX = 152;
const BEAD = 6.2;
const SP = 11.5;
const C = ELEMENT_COLORS.C;
const CL = ELEMENT_COLORS.Cl;

const DEFAULT_PANELS: PolymerPanel[] = [
	{title: '1. Chain length', chip: 'Longer → ↑ MP & strength', at: 245, chipAt: 395, forcesAt: 330,
		halves: [{kind: 'short', label: 'short', at: 245}, {kind: 'long', label: 'long', at: 270}]},
	{title: '2. Branching', chip: 'Branched → less dense, flexible', at: 453, chipAt: 545,
		halves: [{kind: 'linear', label: 'linear', at: 453}, {kind: 'branched', label: 'branched', at: 470}]},
	{title: '3. Cross-linking', chip: 'Rigid, heat-resistant (bakelite)', at: 661, chipAt: 777, forcesAt: 677,
		halves: [{kind: 'crosslinked', label: 'covalent cross-links', at: 661}]},
	{title: '4. Polarity', chip: 'C–Cl dipoles → PVC stiffer', at: 819, chipAt: 960, forcesAt: 910,
		halves: [{kind: 'pvc', label: 'PVC', at: 830}, {kind: 'pe', label: 'polyethylene', at: 860}]},
];

type Pt = {x: number; y: number};

/** Bead positions for a gently waving chain starting at (x0, y0). */
const chainPts = (x0: number, y0: number, n: number, angle: number, frame: number, seed: number, amp = 2.4, live = 1): Pt[] =>
	Array.from({length: n}, (_, k) => {
		const wob = Math.sin(k * 1.1 + seed * 1.7) * amp + Math.sin(frame / 19 + k * 0.7 + seed) * 1.6 * live;
		return {
			x: x0 + k * SP * Math.cos(angle) - wob * Math.sin(angle) * 0.4,
			y: y0 + k * SP * Math.sin(angle) + wob * Math.cos(angle),
		};
	});

const Chain = ({pts, opacity = 1}: {pts: Pt[]; opacity?: number}) => (
	<g opacity={opacity}>
		<polyline points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={shade(C, 0.25)} strokeWidth={3} strokeLinejoin="round" />
		{pts.map((p, k) => (
			<Ball key={k} id={ID} name="C" color={C} x={p.x} y={p.y} r={BEAD} />
		))}
	</g>
);

/** Dashed attraction between two points (forces between chains). */
const Pull = ({a, b, color, opacity}: {a: Pt; b: Pt; color: string; opacity: number}) => (
	<line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={color} strokeWidth={3} strokeDasharray="4 4" strokeLinecap="round" opacity={opacity} />
);

const Arrangement = ({
	kind, cx, cy, half, frame, forces, accent, fps, at,
}: {kind: ChainKind; cx: number; cy: number; half: number; frame: number; forces: number; accent: string; fps: number; at: number}) => {
	// cx, cy: centre of this half's area on the plinth top; half: usable half-width.
	const grow = (i: number) => Math.min(1, Math.max(0, popAt(frame, fps, at + i * 5)) * 1.3);
	switch (kind) {
		case 'short': {
			const spots: [number, number, number][] = [[-52, -26, -0.3], [4, -32, 0.35], [-40, 4, 0.25], [18, 0, -0.4], [-10, 26, 0.1]];
			return (
				<g>
					{spots.map(([dx, dy, a], i) => (
						<Chain key={i} pts={chainPts(cx + dx, cy + dy, 4, a, frame, i, 1.5)} opacity={grow(i)} />
					))}
				</g>
			);
		}
		case 'long': {
			const rows = [-22, 2, 26];
			const chains = rows.map((dy, i) => chainPts(cx - half + 4 + (i % 2) * 5, cy + dy, 11, 0, frame, i + 3, 1.6));
			return (
				<g>
					{chains.slice(0, -1).map((ch, i) =>
						[2, 5, 8].map((k) => <Pull key={`${i}-${k}`} a={ch[k]} b={chains[i + 1][k]} color={accent} opacity={forces} />),
					)}
					{chains.map((ch, i) => <Chain key={i} pts={ch} opacity={grow(i)} />)}
				</g>
			);
		}
		case 'linear': {
			const rows = [-21, -7, 7, 21];
			return (
				<g>
					{rows.map((dy, i) => (
						<Chain key={i} pts={chainPts(cx - half + 4 + (i % 2) * 5, cy + dy, 11, 0, frame, i + 5, 1.2)} opacity={grow(i)} />
					))}
				</g>
			);
		}
		case 'branched': {
			const rows = [-18, 26];
			return (
				<g>
					{rows.map((dy, i) => {
						const back = chainPts(cx - half + 8 + i * 8, cy + dy, 10, i ? -0.06 : 0.06, frame, i + 9, 2);
						// outer branches point away from the other chain, a short middle one toward it
						const out = i === 0 ? -1 : 1;
						const branches = (i === 0 ? [2, 5, 8] : [1, 4, 7]).map((k, j) => {
							const up = j === 1 ? -out : out;
							const len = j === 1 ? 2 : 3;
							return chainPts(back[k].x, back[k].y, len + 1, up * (Math.PI / 2 - 0.35), frame, k + i, 1).slice(0);
						});
						return (
							<g key={i} opacity={grow(i)}>
								{branches.map((br, j) => <Chain key={j} pts={br} />)}
								<Chain pts={back} />
							</g>
						);
					})}
				</g>
			);
		}
		case 'crosslinked': {
			const rows = [-26, 2, 30];
			const chains = rows.map((dy, i) => chainPts(cx - half + 8, cy + dy, 22, 0, frame, i + 11, 1.6, 0.15));
			const links: [number, number][] = [[0, 3], [0, 10], [0, 17], [1, 6], [1, 14], [1, 20]];
			return (
				<g>
					{links.map(([row, k], i) => (
						<line key={i} x1={chains[row][k].x} y1={chains[row][k].y} x2={chains[row + 1][k].x} y2={chains[row + 1][k].y} stroke={accent} strokeWidth={5} strokeLinecap="round" opacity={forces} />
					))}
					{chains.map((ch, i) => <Chain key={i} pts={ch} opacity={grow(i)} />)}
				</g>
			);
		}
		case 'pvc':
		case 'pe': {
			const pvc = kind === 'pvc';
			const rows = [-28, 24];
			const chains = rows.map((dy, i) => chainPts(cx - half + 8 + i * 6, cy + dy, 10, 0, frame, i + 15, 1.4));
			// Cl on every other carbon, pointing down toward the next chain.
			const clOf = (ch: Pt[]) => [1, 5, 9].map((k) => ({k, x: ch[k].x, y: ch[k].y + 12}));
			return (
				<g>
					{pvc &&
						chains.slice(0, -1).map((ch, i) =>
							clOf(ch).map((cl, j) => {
								// δ− Cl attracts the δ+ carbon (the one carrying a Cl) on the next chain.
								const target = chains[i + 1][cl.k];
								return <Pull key={`${i}-${j}`} a={{x: cl.x, y: cl.y + 5}} b={{x: target.x, y: target.y - 5}} color={accent} opacity={forces} />;
							}),
						)}
					{!pvc &&
						chains.map((ch, i) => (
							<ellipse key={`h${i}`} cx={(ch[0].x + ch[9].x) / 2} cy={ch[4].y} rx={half * 0.62} ry={13} fill={TOK.inkMute} opacity={0.12 * grow(i)} />
						))}
					{chains.map((ch, i) => (
						<g key={i} opacity={grow(i)}>
							{pvc && clOf(ch).map((cl, j) => (
								<g key={j}>
									<line x1={ch[cl.k].x} y1={ch[cl.k].y} x2={cl.x} y2={cl.y} stroke={shade(C, 0.25)} strokeWidth={3} />
									<Ball id={ID} name="Cl" color={CL} x={cl.x} y={cl.y} r={7} />
								</g>
							))}
							<Chain pts={ch} />
						</g>
					))}
					{pvc && (
						<g opacity={forces}>
							<text x={chains[0][5].x} y={chains[0][5].y - 11} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>δ⁺</text>
							<text x={chains[0][5].x - 11} y={chains[0][5].y + 24} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={800}>δ⁻</text>
						</g>
					)}
				</g>
			);
		}
	}
};

export const PolymerChainsDiagram = ({panels = DEFAULT_PANELS, delay = 62}: PolymerChainsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chain length, branching, cross-linking and polarity set a polymer's properties" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{C, Cl: CL}} />

			{panels.slice(0, 4).map((p, i) => {
				const px = (i % 2) * PW;
				const py = Math.floor(i / 2) * PH;
				const cx = px + PW / 2;
				const cy = py + 142;
				const at = p.at ?? 30 + i * 150;
				const shown = fadeAt(frame, at, 10);
				const two = p.halves.length > 1;
				const half = two ? 64 : 128;
				const chipText = p.chip;
				const chipSize = 17;
				const chipW = chipText.length * chipSize * 0.56 + 28;
				const chipIn = fadeAt(frame, p.chipAt ?? at + 60, 12);
				const forces = fadeAt(frame, p.forcesAt ?? at + 30, 16);
				return (
					<g key={i}>
						{/* plinth (always there: an empty slot waiting for its feature) */}
						<g opacity={fadeAt(frame, i * 5, 14) * (0.55 + 0.45 * shown)}>
							<DioramaPlinth id={ID} cx={cx} cy={cy} rx={RX} />
						</g>
						{two && (
							<line x1={cx} y1={cy - 40} x2={cx} y2={cy + 40} stroke="#ffffff" strokeWidth={2} strokeDasharray="4 6" opacity={0.7 * shown} />
						)}
						<text x={cx} y={py + 30} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800} opacity={shown}>
							{p.title}
						</text>
						{p.halves.map((h, j) => {
							const hx = two ? cx + (j === 0 ? -72 : 72) : cx;
							const hAt = h.at ?? at + j * 25;
							return (
								<g key={j}>
									{h.label && (
										<text x={hx} y={py + 58} textAnchor="middle" fill={h.kind === 'crosslinked' ? theme.accent : TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, hAt, 10)}>
											{h.label}
										</text>
									)}
									{frame >= hAt - 2 && (
										<Arrangement kind={h.kind} cx={hx} cy={cy - 12} half={half} frame={frame} forces={forces} accent={theme.accent} fps={fps} at={hAt} />
									)}
								</g>
							);
						})}
						<g opacity={chipIn}>
							<rect x={cx - chipW / 2} y={py + 232} width={chipW} height={30} rx={15} fill={TOK.bgLift} stroke={theme.accent} strokeWidth={2.5} />
							<text x={cx} y={py + 253} textAnchor="middle" fill={theme.accent} fontSize={chipSize} fontWeight={800}>
								{chipText}
							</text>
						</g>
					</g>
				);
			})}
		</svg>
	);
};
