// PolymerJoinDiagram — monomers joining into a polymer chain, on a long stage.
//
// mode "addition": ethene-style monomers. Each C=C opens (the second bond
// fades), the monomers slide together and new C–C single bonds form between
// neighbours. An atom count (atoms in = atoms in the chain, computed from the
// monomer count) makes "nothing is lost" visible, then the R group cycles
// through the configured side groups (H → polyethylene, Cl → PVC, …).
//
// mode "condensation": alternating diol and diacid monomers, each with a
// reactive group at both ends. As each link forms, the H from the alcohol's
// –OH and the –OH from the acid's –COOH leave together as H₂O and float off to
// a tally; the link left behind is an ester link. Links = monomers − 1, and
// one H₂O per link, both computed.
//
// Beats (frames after `delay`) are all props so they can follow the narration.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {Chip, clamp, fadeAt, popAt, shade} from './shared';

export type RGroup = {r: 'H' | 'Cl' | 'CH₃'; polymer: string; monomer: string; at: number};
export type PolymerJoinProps = {
	mode?: 'addition' | 'condensation';
	title?: string;
	monomers?: number;
	delay?: number;
	/** addition beats */
	beats?: {
		doubleBond?: number; open?: number; join?: number; count?: number; rGroup?: number;
		/** condensation */
		ends?: number; link?: number; esterLabel?: number; nylon?: number; headline?: number;
	};
	rGroups?: RGroup[];
	nylonNote?: string;
	headline?: string;
};

const ID = 'c11poly';
const W = 760;
const H = 530;
const CHAIN_Y = 300;
const STAGE_Y = 330;
// Addition molecules are drawn at unit size, then scaled up about the chain's centre.
const ADD_K = 1.35;
const ADD_CHAIN_Y = 318;
const COND_K = 1.05;
const BOND = '#6d6d6d';

const ease = Easing.inOut(Easing.cubic);

const Atom = ({el, x, y, r, opacity = 1, label}: {el: string; x: number; y: number; r: number; opacity?: number; label?: string}) => (
	<g opacity={opacity}>
		<circle cx={x} cy={y} r={r} fill={`url(#${ID}-atom-${el})`} stroke={shade(ELEMENT_COLORS[el] ?? '#9a9a9a', -0.35)} strokeWidth={1} />
		{label && (
			<text x={x} y={y + 5} textAnchor="middle" fill="#ffffff" fontSize={13} fontWeight={800}>
				{label}
			</text>
		)}
	</g>
);

const Bond = ({x1, y1, x2, y2, opacity = 1, color = BOND, width = 5}: {x1: number; y1: number; x2: number; y2: number; opacity?: number; color?: string; width?: number}) => (
	<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeLinecap="round" opacity={opacity} />
);

const Stage = ({cx, cy, rx}: {cx: number; cy: number; rx: number}) => (
	// A long, low plinth: the standard plinth squashed vertically.
	<g transform={`translate(0, ${cy}) scale(1, 0.42) translate(0, ${-cy})`}>
		<DioramaPlinth id={ID} cx={cx} cy={cy} rx={rx} />
	</g>
);

// ── Addition ────────────────────────────────────────────────────────────────
const DEFAULT_R: RGroup[] = [
	{r: 'H', polymer: 'polyethylene', monomer: 'ethene', at: 881},
	{r: 'Cl', polymer: 'PVC', monomer: 'vinyl chloride', at: 914},
	{r: 'CH₃', polymer: 'polypropylene', monomer: 'propene', at: 955},
];

const Addition = ({frame, fps, n, beats, rGroups, title, accent}: {frame: number; fps: number; n: number; beats: Required<PolymerJoinProps>['beats']; rGroups: RGroup[]; title: string; accent: string}) => {
	const b = {doubleBond: 120, open: 211, join: 245, count: 591, rGroup: 782, ...beats};
	const open = fadeAt(frame, b.open, 22);
	const slide = interpolate(frame, [b.join, b.join + 70], [0, 1], {...clamp, easing: ease});
	const newBond = interpolate(slide, [0.82, 1], [0, 1], clamp);
	const newBondGlow = interpolate(frame, [b.join + 70, b.join + 130], [1, 0], clamp);

	const spread = 128;
	const tight = 76; // C–C spacing 38 everywhere once joined (before ADD_K)
	const cx = (i: number) => W / 2 + (i - (n - 1) / 2) * (spread + (tight - spread) * slide);
	const cc = 19; // half the C=C / C–C length

	// Side-group choice: H until the R-group beats, then cycle once the last is shown.
	let rIdx = -1;
	rGroups.forEach((g, k) => {
		if (frame >= g.at) rIdx = k;
	});
	const lastAt = rGroups.length ? rGroups[rGroups.length - 1].at : Infinity;
	if (rGroups.length && frame > lastAt + 70) rIdx = Math.floor((frame - lastAt - 70) / 60) % rGroups.length;
	const r = rIdx >= 0 ? rGroups[rIdx] : undefined;
	const rRing = fadeAt(frame, b.rGroup, 14);

	const atomsIn = n * 6; // C₂H₄: 2 C + 4 H

	return (
		<g>
			<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={fadeAt(frame, 0)}>
				{title}
			</text>
			<g opacity={fadeAt(frame, 2)}>
				<Stage cx={W / 2} cy={ADD_CHAIN_Y + 54} rx={330} />
			</g>

			<g transform={`translate(${W / 2}, ${ADD_CHAIN_Y}) scale(${ADD_K}) translate(${-W / 2}, ${-CHAIN_Y})`}>
			{/* Dangling bonds at the chain ends: it carries on both ways */}
			<g opacity={newBond}>
				<Bond x1={cx(0) - cc} y1={CHAIN_Y} x2={cx(0) - cc - 30} y2={CHAIN_Y} />
				<Bond x1={cx(n - 1) + cc} y1={CHAIN_Y} x2={cx(n - 1) + cc + 30} y2={CHAIN_Y} />
				<text x={cx(0) - cc - 52} y={CHAIN_Y + 7} textAnchor="middle" fill={TOK.inkDim} fontSize={24} fontWeight={800}>…</text>
				<text x={cx(n - 1) + cc + 52} y={CHAIN_Y + 7} textAnchor="middle" fill={TOK.inkDim} fontSize={24} fontWeight={800}>…</text>
			</g>

			{Array.from({length: n}, (_, i) => {
				const pop = popAt(frame, fps, 8 + i * 6);
				const x = cx(i);
				const y = CHAIN_Y + idleBob(frame, i, 1.6) * (1 - slide) + idleBob(frame, i, 0.8) * slide;
				const c1 = x - cc;
				const c2 = x + cc;
				// H positions: angled out (monomer) → straight up/down (chain unit).
				const hy = 26 + 6 * slide;
				const hs = [
					{x: c1 - 16 + 16 * slide, y: y - hy, c: c1, key: 'h1'},
					{x: c1 - 16 + 16 * slide, y: y + hy, c: c1, key: 'h2'},
					{x: c2 + 16 - 16 * slide, y: y - hy, c: c2, key: 'h3'},
				];
				const rPos = {x: c2 + 16 - 16 * slide, y: y + hy};
				return (
					<g key={i} opacity={Math.min(1, pop * 1.5)}>
						{/* new C–C bond to the next monomer */}
						{i < n - 1 && (
							<Bond x1={c2} y1={y} x2={cx(i + 1) - cc} y2={CHAIN_Y} opacity={newBond} color={newBondGlow > 0 ? TOK.amber : BOND} width={5 + newBondGlow * 2} />
						)}
						{/* C=C: first bond stays, second opens */}
						<Bond x1={c1} y1={y - (1 - open) * 5} x2={c2} y2={y - (1 - open) * 5} />
						<Bond x1={c1} y1={y + 5} x2={c2} y2={y + 5} opacity={1 - open} color={open > 0 && open < 1 ? TOK.amber : BOND} />
						{hs.map((h) => <Bond key={`b${h.key}`} x1={h.c} y1={y} x2={h.x} y2={h.y} width={4} />)}
						<Bond x1={c2} y1={y} x2={rPos.x} y2={rPos.y} width={4} />
						<Atom el="C" x={c1} y={y} r={13} />
						<Atom el="C" x={c2} y={y} r={13} />
						{hs.map((h) => <Atom key={h.key} el="H" x={h.x} y={h.y} r={9} />)}
						{/* the R position */}
						{r?.r === 'Cl' ? (
							<Atom el="Cl" x={rPos.x} y={rPos.y + 4} r={14} />
						) : r?.r === 'CH₃' ? (
							<Atom el="C" x={rPos.x} y={rPos.y + 4} r={13} label="CH₃" />
						) : (
							<Atom el="H" x={rPos.x} y={rPos.y} r={9} />
						)}
						<circle cx={rPos.x} cy={rPos.y + 3} r={21} fill="none" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} opacity={rRing} strokeDasharray="5 4" />
					</g>
				);
			})}

			{/* "C=C" callout on the first monomer, before it opens */}
			<g opacity={fadeAt(frame, b.doubleBond) * (1 - fadeAt(frame, b.join + 40, 16))}>
				<Chip x={cx(0)} y={CHAIN_Y - 80} text="C=C double bond" color={accent} size={18} />
				<line x1={cx(0)} y1={CHAIN_Y - 62} x2={cx(0)} y2={CHAIN_Y - 16} stroke={accent} strokeWidth={2} strokeDasharray="4 4" />
			</g>
			</g>
			<g opacity={fadeAt(frame, b.join + 60, 16) * (1 - rRing)}>
				<text x={W / 2} y={ADD_CHAIN_Y - 96} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700}>
					each C=C opens → new C–C single bonds to its neighbours
				</text>
			</g>

			{/* R group names */}
			{r && (
				<g opacity={rRing}>
					<text x={W / 2} y={ADD_CHAIN_Y - 112} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800}>
						R = {r.r}: <tspan fill={accent}>{r.polymer}</tspan>
					</text>
					<text x={W / 2} y={ADD_CHAIN_Y - 84} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
						from {r.monomer}
					</text>
				</g>
			)}
			{!r && (
				<text x={W / 2} y={ADD_CHAIN_Y - 96} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800} opacity={rRing}>
					the R group sets the properties
				</text>
			)}

			{/* Atom count (for the ethene chain; it fades when the side group starts changing) */}
			<g opacity={fadeAt(frame, b.count, 14) * (1 - rRing)}>
				<text x={W / 2} y={482} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>
					{n} × C₂H₄ = {atomsIn} atoms in → {atomsIn} atoms in the chain
				</text>
				<text x={W / 2} y={514} textAnchor="middle" fill={TOK.amberInk} fontSize={23} fontWeight={800}>
					nothing lost: atom economy 100%
				</text>
			</g>
			<text x={W / 2} y={490} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={fadeAt(frame, 30) * (1 - fadeAt(frame, b.count - 12, 12))}>
				{n} ethene monomers, C₂H₄
			</text>
		</g>
	);
};

// ── Condensation ───────────────────────────────────────────────────────────
// Local geometry (unit spacing): a monomer body spans ±30; each end carries its
// reactive group. Diol ends: O at ±44, H at ±62. Diacid ends: C at ±44 (with a
// C=O pointing up), then the –OH as one labelled ball at ±66. When a diol's right end meets
// a diacid's left end, the diol's H and the diacid's O–H leave as H₂O and the
// diol's O bonds to the diacid's C (an ester link).
const Condensation = ({frame, fps, n, beats, title, nylonNote, headline, accent}: {frame: number; fps: number; n: number; beats: Required<PolymerJoinProps>['beats']; title: string; nylonNote: string; headline: string; accent: string}) => {
	const b = {ends: 88, link: 388, esterLabel: 560, nylon: 777, headline: 936, ...beats};
	const links = n - 1;
	// Approach, then the H₂O leaves each junction, then the gap closes into the ester link.
	const approach = interpolate(frame, [b.link, b.link + 30], [0, 1], {...clamp, easing: ease});
	const close = interpolate(frame, [b.link + 40 + (n - 2) * 22 + 20, b.link + 40 + (n - 2) * 22 + 60], [0, 1], {...clamp, easing: ease});
	const spread = 172;
	const near = 150; // H and OH side by side
	const tight = 110; // O(diol) … C(acid) bond of ~22 once joined
	const gapNow = spread + (near - spread) * approach + (tight - near) * close;
	const mx = (i: number) => W / 2 + (i - (n - 1) / 2) * gapNow;
	const isAcid = (i: number) => i % 2 === 1;
	// Link k (between monomer k and k+1) releases its water at:
	const releaseAt = (k: number) => b.link + 34 + k * 22;
	const released = Array.from({length: links}, (_, k) => fadeAt(frame, releaseAt(k), 30));
	const waterCount = released.filter((t) => t >= 0.5).length;
	const tally = {x: 660, y: 118};

	return (
		<g>
			<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={fadeAt(frame, 0)}>
				{title}
			</text>
			<g opacity={fadeAt(frame, 2)}>
				<Stage cx={W / 2} cy={ADD_CHAIN_Y + 54} rx={330} />
				<DioramaPlinth id={ID} cx={tally.x} cy={tally.y + 30} rx={62} />
			</g>
			<text x={tally.x} y={tally.y + 90} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800} opacity={fadeAt(frame, b.link)}>
				H₂O released: <tspan fill={TOK.amberInk}>{waterCount}</tspan>
			</text>
			<g transform={`translate(${W / 2}, ${ADD_CHAIN_Y}) scale(${COND_K}) translate(${-W / 2}, ${-CHAIN_Y})`}>

			{Array.from({length: n}, (_, i) => {
				const pop = popAt(frame, fps, 10 + i * 8);
				const x = mx(i);
				const y = CHAIN_Y + idleBob(frame, i, 1.4);
				const acid = isAcid(i);
				const body = acid ? '#8e7cc3' : '#5aa0c8';
				// Which ends are joined (and so lose atoms)?
				const leftLink = i > 0 ? i - 1 : -1;
				const rightLink = i < n - 1 ? i : -1;
				const gone = (k: number) => (k >= 0 ? released[k] : 0);
				const end = (side: -1 | 1) => {
					const k = side < 0 ? leftLink : rightLink;
					const g = gone(k);
					if (!acid) {
						// –OH: the H leaves when this end links.
						return (
							<g key={side}>
								<Bond x1={x + side * 30} y1={y} x2={x + side * 44} y2={y} />
								<Bond x1={x + side * 44} y1={y} x2={x + side * 62} y2={y} opacity={1 - g} width={4} />
								<Atom el="O" x={x + side * 44} y={y} r={12} />
								<Atom el="H" x={x + side * 62} y={y} r={8.5} opacity={1 - g} />
							</g>
						);
					}
					// –COOH: the O–H leaves when this end links.
					return (
						<g key={side}>
							<Bond x1={x + side * 30} y1={y} x2={x + side * 44} y2={y} />
							<Bond x1={x + side * 41} y1={y} x2={x + side * 41} y2={y - 24} width={4} />
							<Bond x1={x + side * 47} y1={y} x2={x + side * 47} y2={y - 24} width={4} />
							<Bond x1={x + side * 44} y1={y} x2={x + side * 66} y2={y} opacity={1 - g} />
							<Atom el="O" x={x + side * 44} y={y - 26} r={11} />
							<Atom el="C" x={x + side * 44} y={y} r={12} />
							<Atom el="O" x={x + side * 66} y={y} r={13} opacity={1 - g} label="OH" />
						</g>
					);
				};
				return (
					<g key={i} opacity={Math.min(1, pop * 1.5)}>
						{/* ester bond to the next monomer once joined */}
						{i < n - 1 && (
							<Bond x1={x + 44} y1={y} x2={mx(i + 1) - 44} y2={CHAIN_Y} opacity={close} color={close < 1 || frame < releaseAt(n - 2) + 110 ? TOK.amber : BOND} />
						)}
						<rect x={x - 30} y={y - 13} width={60} height={26} rx={13} fill={body} stroke={shade(body, -0.3)} strokeWidth={1.5} />
						<rect x={x - 22} y={y - 9} width={30} height={5} rx={2.5} fill="#ffffff" opacity={0.35} />
						{end(-1)}
						{end(1)}
					</g>
				);
			})}

			</g>

			{/* Released water: H (from the diol) + OH (from the acid) float up to the tally */}
			{Array.from({length: links}, (_, k) => {
				const t = released[k];
				if (t <= 0) return null;
				const jx = W / 2 + ((mx(k) + mx(k + 1)) / 2 - W / 2) * COND_K;
				const fly = interpolate(frame, [releaseAt(k) + 10, releaseAt(k) + 70], [0, 1], {...clamp, easing: ease});
				const spots = [[-26, 8], [26, 8], [0, 26], [-50, 24], [50, 24], [0, -8]];
				const [sx, sy] = spots[k % spots.length];
				const slot = {x: tally.x + sx, y: tally.y + sy};
				const x = jx + (slot.x - jx) * fly;
				const y = ADD_CHAIN_Y - 34 - Math.sin(fly * Math.PI) * 60 + (slot.y - ADD_CHAIN_Y + 34) * fly + (fly >= 1 ? idleBob(frame, k + 20, 1.2) : 0);
				return (
					<g key={`w${k}`} opacity={Math.min(1, t * 2)}>
						<Atom el="H" x={x - 12} y={y + 8} r={7.5} />
						<Atom el="H" x={x + 12} y={y + 8} r={7.5} />
						<Atom el="O" x={x} y={y - 2} r={11} />
					</g>
				);
			})}

			{/* Labels */}
			<g opacity={fadeAt(frame, 20) * (1 - fadeAt(frame, b.link - 10, 12))}>
				<text x={W / 2 + (mx(0) - W / 2) * COND_K} y={ADD_CHAIN_Y + 58} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>diol</text>
				<text x={W / 2 + (mx(1) - W / 2) * COND_K} y={ADD_CHAIN_Y + 58} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>diacid</text>
			</g>
			<g opacity={fadeAt(frame, b.ends) * (1 - fadeAt(frame, b.link - 10, 12))}>
				<Chip x={W / 2 + (mx(1) - W / 2) * COND_K} y={ADD_CHAIN_Y - 96} text="two reactive ends" color={accent} size={18} />
				<line x1={W / 2 + (mx(1) - W / 2) * COND_K - 20} y1={ADD_CHAIN_Y - 80} x2={W / 2 + (mx(1) - 82 - W / 2) * COND_K} y2={ADD_CHAIN_Y - 16} stroke={accent} strokeWidth={2} strokeDasharray="4 4" />
				<line x1={W / 2 + (mx(1) - W / 2) * COND_K + 20} y1={ADD_CHAIN_Y - 80} x2={W / 2 + (mx(1) + 82 - W / 2) * COND_K} y2={ADD_CHAIN_Y - 16} stroke={accent} strokeWidth={2} strokeDasharray="4 4" />
			</g>
			<g opacity={fadeAt(frame, b.esterLabel, 14)}>
				{Array.from({length: links}, (_, k) => {
					const jx = W / 2 + ((mx(k) + mx(k + 1)) / 2 - W / 2) * COND_K;
					return (
						<text key={k} x={jx} y={ADD_CHAIN_Y + 56} textAnchor="middle" fill={accent} fontSize={17} fontWeight={800}>
							ester link
						</text>
					);
				})}
				<text x={W / 2 - 90} y={ADD_CHAIN_Y - 92} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>
					polyester (PET): diol + diacid
				</text>
			</g>
			<g opacity={fadeAt(frame, b.nylon, 14)}>
				<text x={W / 2} y={478} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700}>
					{nylonNote}
				</text>
			</g>
			<g opacity={fadeAt(frame, b.headline, 14)}>
				<text x={W / 2} y={512} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800}>
					{headline}
				</text>
			</g>
		</g>
	);
};

export const PolymerJoinDiagram = ({
	mode = 'addition',
	title,
	monomers,
	delay = 62,
	beats = {},
	rGroups = DEFAULT_R,
	nylonNote = 'Nylon: diamine + diacid → amide links, also losing H₂O',
	headline = 'Addition loses nothing; condensation loses H₂O at every link',
}: PolymerJoinProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = monomers ?? 4;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={mode === 'addition' ? 'Addition polymerisation: C=C bonds open and join, nothing is lost' : 'Condensation polymerisation: monomers join and release water at each link'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['C', 'H', 'O', 'Cl']} />
			{mode === 'addition' ? (
				<Addition frame={frame} fps={fps} n={n} beats={beats} rGroups={rGroups} title={title ?? 'Open the C=C, join the chain, lose nothing'} accent={theme.accent} />
			) : (
				<Condensation frame={frame} fps={fps} n={n} beats={beats} title={title ?? 'Join two reactive ends, lose H₂O'} nylonNote={nylonNote} headline={headline} accent={theme.accent} />
			)}
		</svg>
	);
};
