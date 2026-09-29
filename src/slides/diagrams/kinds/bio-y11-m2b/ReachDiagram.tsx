// ReachDiagram (bio11m2Reach) — why a large animal needs organ systems.
//
// Left: a single-celled organism on a small plinth; supply arrows reach its
// centre at once. Right: a block of body tissue shown as a grid of cells on a
// large plinth. Supply diffuses in from the surface, but it only lights the
// outer ring or two of cells (diffusion is fast only over short distances); the
// deep cells stay dim, "too far". Then a branching blood vessel grows through
// the block and each cell lights as the vessel passes near it: bulk flow brings
// supply to within a short diffusion distance of every cell, and diffusion only
// does the last step. Every label comes from props. Hold: supply dots keep
// flowing along the vessel and jostling across the surface.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Chip2, Foot, FootLine, GLOSS, GlossDefs, H, Lines, PAL, W, fadeAt, mix, popAt, wrap} from './shared';
import {Organ} from './organs';

export type ReachProps = {
	small: {label: string; at: number};
	large: {label: string; at: number};
	/** Diffusion into the block starts. */
	diffuseAt: number;
	/** Deep cells marked as unreached. */
	tooFar: {label: string; at: number};
	/** The vessel network grows in. */
	vessels: {label: string; at: number};
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2reach';
const COLS = 8, ROWS = 6, CW = 52, CH = 42;
const BX = 300, BY = 96;

// Vessel: enters at the left edge of row 1, runs along row 1, drops down col 4,
// runs along row 4 both ways. Cells within one cell of the vessel are supplied.
const VESSEL = [
	{x: BX - 30, y: BY + CH * 1.5},
	{x: BX + CW * 4.5, y: BY + CH * 1.5},
	{x: BX + CW * 4.5, y: BY + CH * 4.5},
	{x: BX + CW * 0.8, y: BY + CH * 4.5},
];
const VESSEL2 = [
	{x: BX + CW * 4.5, y: BY + CH * 4.5},
	{x: BX + CW * 7.3, y: BY + CH * 4.5},
];

export const ReachDiagram = ({small, large, diffuseAt, tooFar, vessels, footer = [], delay = 62}: ReachProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const lit = mix('#ffffff', PAL.oxygen, 0.55);
	const dim = '#d9d4cc';

	const sp = popAt(frame, fps, small.at);
	const lp = popAt(frame, fps, large.at);
	const vOn = fadeAt(frame, vessels.at, 60);

	// distance (in cells) from each cell to the block surface and to the vessel
	const cells = [] as {c: number; r: number; edge: number; vessel: number}[];
	for (let r = 0; r < ROWS; r++)
		for (let c = 0; c < COLS; c++) {
			const edge = Math.min(c, r, COLS - 1 - c, ROWS - 1 - r);
			const onRow1 = r >= 0 && r <= 2 && c <= 5;
			const onCol4 = c >= 3 && c <= 5 && r >= 1 && r <= 5;
			const onRow4 = r >= 3 && r <= 5;
			const vessel = onRow1 ? (r === 1 ? 0 : 1) : onCol4 ? (c === 4 ? 0 : 1) : onRow4 ? (r === 4 ? 0 : 1) : 9;
			cells.push({c, r, edge, vessel});
		}
	// order in which the vessel reaches each cell (0..1 along its growth)
	const reachT = (c: number, r: number) => {
		if (r <= 2 && c <= 5) return (c + 1) / 12;
		if (c >= 3 && c <= 5 && r <= 4) return 0.5 + (r - 1) / 12;
		return 0.75 + Math.abs(c - 4) / 20;
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${small.label}; ${large.label}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />

			{/* small organism */}
			<g opacity={Math.min(1, sp * 1.4)} transform={`translate(0, ${(1 - Math.min(1, sp)) * 24})`}>
				<DioramaPlinth id={`${ID}s`} cx={130} cy={330} rx={80} />
				<Organ id={ID} name="amoeba" x={130} y={286 + idleBob(frame, 1, 1.2)} s={1.9} frame={frame} />
				{[0, 1, 2, 3, 4, 5].map((k) => {
					const a = (k / 6) * Math.PI * 2 + 0.3;
					const t = fadeAt(frame, small.at + 20 + k * 4, 14);
					const pulse = ((frame / 40 + k / 6) % 1);
					return (
						<g key={k} opacity={t}>
							<Arrow x1={130 + Math.cos(a) * 96} y1={286 + Math.sin(a) * 70} x2={130 + Math.cos(a) * 52} y2={286 + Math.sin(a) * 38} color={PAL.oxygen} width={3} head={9} />
							<circle cx={130 + Math.cos(a) * (96 - pulse * 44)} cy={286 + Math.sin(a) * (70 - pulse * 32)} r={4} fill={PAL.oxygen} opacity={1 - pulse} />
						</g>
					);
				})}
				<Lines x={130} y={398} lines={wrap(small.label, 18)} size={19} color={theme.accent} />
			</g>

			{/* large block of tissue */}
			<g opacity={Math.min(1, lp * 1.4)} transform={`translate(0, ${(1 - Math.min(1, lp)) * 24})`}>
				<DioramaPlinth id={`${ID}l`} cx={BX + (COLS * CW) / 2} cy={BY + ROWS * CH + 22} rx={COLS * CW * 0.62} />
				<rect x={BX - 6} y={BY - 6} width={COLS * CW + 12} height={ROWS * CH + 12} rx={12} fill={PAL.skin} stroke="#c9a88c" strokeWidth={2} />
				{cells.map(({c, r, edge, vessel}, i) => {
					const byDiff = edge <= 0 ? fadeAt(frame, diffuseAt + 10, 20) : edge === 1 ? fadeAt(frame, diffuseAt + 50, 30) * 0.55 : 0;
					const byVessel = vessel <= 1 ? fadeAt(frame, vessels.at + reachT(c, r) * 60, 16) : 0;
					const s = Math.max(byDiff, byVessel);
					const deep = edge >= 2 && vessel > 1;
					const flag = deep ? 0 : 0;
					return (
						<g key={i}>
							<rect x={BX + c * CW + 2} y={BY + r * CH + 2} width={CW - 4} height={CH - 4} rx={8} fill={mix(dim, lit, s)} stroke={s > 0.5 ? PAL.oxygen : '#bdb5a8'} strokeWidth={1.2} />
							<circle cx={BX + c * CW + CW / 2} cy={BY + r * CH + CH / 2} r={5.5} fill={s > 0.5 ? PAL.nucleus : '#a79f93'} opacity={0.7 + flag} />
						</g>
					);
				})}
				{/* supply dots arriving at the surface */}
				{fadeAt(frame, diffuseAt, 12) > 0 &&
					Array.from({length: 14}, (_, k) => {
						const side = k % 4;
						const u = ((frame / 55 + k * 0.37) % 1);
						const along = (k * 0.29) % 1;
						const out = 26 * (1 - u);
						const x = side === 0 ? BX - 6 - out : side === 1 ? BX + COLS * CW + 6 + out : BX + along * COLS * CW;
						const y = side === 2 ? BY - 6 - out : side === 3 ? BY + ROWS * CH + 6 + out : BY + along * ROWS * CH;
						return <circle key={k} cx={x} cy={y} r={4} fill={PAL.oxygen} opacity={fadeAt(frame, diffuseAt, 12) * (1 - u * 0.6)} />;
					})}
				{/* vessel */}
				{vOn > 0 && (
					<g>
						{[VESSEL, VESSEL2].map((pts, k) => {
							const t = k === 0 ? Math.min(1, vOn * 1.3) : Math.max(0, vOn * 1.3 - 0.3);
							const d = pts.map((p, j) => `${j ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ');
							return (
								<g key={k}>
									<path d={d} fill="none" stroke={PAL.bloodDark} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - t} />
									<path d={d} fill="none" stroke={PAL.blood} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - t} />
								</g>
							);
						})}
						{vOn >= 1 &&
							Array.from({length: 6}, (_, k) => {
								const u = ((frame / 90 + k / 6) % 1);
								const pts = VESSEL;
								const seg = [0, 1, 2].map((j) => Math.hypot(pts[j + 1].x - pts[j].x, pts[j + 1].y - pts[j].y));
								let want = u * seg.reduce((a, b) => a + b, 0);
								let j = 0;
								while (j < 2 && want > seg[j]) want -= seg[j++];
								const f = Math.min(1, want / seg[j]);
								return <circle key={k} cx={pts[j].x + (pts[j + 1].x - pts[j].x) * f} cy={pts[j].y + (pts[j + 1].y - pts[j].y) * f} r={3.5} fill="#ffffff" opacity={0.85} />;
							})}
					</g>
				)}
				<Lines x={BX + (COLS * CW) / 2} y={BY + ROWS * CH + 78} lines={wrap(large.label, 34)} size={19} color={theme.accent} />
			</g>

			{/* too far */}
			{(() => {
				const t = popAt(frame, fps, tooFar.at);
				const fade = 1 - fadeAt(frame, vessels.at + 40, 20);
				return <Chip2 x={BX + (COLS * CW) / 2} y={BY + CH * 3} text={tooFar.label} color={TOK.amber} textColor={TOK.amberInk} t={t * fade} size={18} fill={mix('#ffffff', TOK.amber, 0.08 + 0.08 * idlePulse(frame))} />;
			})()}
			<Chip2 x={BX + (COLS * CW) / 2} y={BY - 32} text={vessels.label} color={PAL.blood} t={popAt(frame, fps, vessels.at + 30)} size={18} />
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
