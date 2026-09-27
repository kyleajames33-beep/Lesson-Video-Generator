// RouteChainDiagram — a calculation route as a row of diorama "stations".
//
// Each quantity (mass of precipitate, moles of precipitate, …) is a plinth with
// a small prop on it; each conversion is a hop arrow with a chip ("÷ M",
// "× mole ratio", …). A tempting one-step shortcut arcs over the top of the
// whole route and is struck out with a red ✗. The "bridge" link (the mole
// ratio) is the one amber thing. After the last hop, a glowing token walks the
// route station by station (gentle life that restates "go through every step").
//
// Config-driven: any 3–5 stations, the links between consecutive stations, an
// optional shortcut (from station → to station), and timed captions. Labels may
// contain "\n" for a manual line break. All `at` values are frames after `delay`.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, GlossDefs, clamp, fadeAt, popAt, shade} from './shared';

export type RouteProp = 'balance' | 'units' | 'ions' | 'balanceIons';
export type RouteStation = {label: string; prop?: RouteProp; at?: number};
export type RouteLink = {label: string; sub?: string; at?: number; bridge?: boolean};
export type RouteShortcut = {label: string; from?: number; to?: number; at?: number; strikeAt?: number};
export type RouteCaption = {text: string; at: number; tone?: 'warn' | 'plain' | 'key'};
export type RouteChainProps = {
	stations?: RouteStation[];
	links?: RouteLink[];
	shortcut?: RouteShortcut;
	captions?: RouteCaption[];
	/** Frame (after delay) when the token starts walking the route. */
	walkAt?: number;
	delay?: number;
};

const ID = 'c11route';
const W = 760;
const H = 530;
const PY = 330; // plinth top centre
const LABEL_Y = 394;
const CHIP_Y = 186;
const SUB_Y = 150;
const CAPTION_Y = 494;
const RED = '#d8453b';
const ION = '#3f6fd8';
const PARTNER = '#e9e6dc';

const DEFAULT_STATIONS: RouteStation[] = [
	{label: 'mass of\nprecipitate', prop: 'balance', at: 0},
	{label: 'moles of\nprecipitate', prop: 'units', at: 164},
	{label: 'moles of\ntarget ion', prop: 'ions', at: 285},
	{label: 'mass of\ntarget ion', prop: 'balanceIons', at: 6},
];
const DEFAULT_LINKS: RouteLink[] = [
	{label: '÷ M', sub: 'n = m ÷ M', at: 164},
	{label: '× mole ratio', sub: 'balanced equation', at: 285, bridge: true},
	{label: '× M of ion', sub: 'm = n × M', at: 421},
];
const DEFAULT_SHORTCUT: RouteShortcut = {label: 'one-step shortcut', from: 0, to: 3, at: 24, strikeAt: 96};
const DEFAULT_CAPTIONS: RouteCaption[] = [
	{text: 'Never go straight from precipitate mass to ion mass', at: 30, tone: 'warn'},
	{text: 'Go through moles and the mole ratio', at: 134, tone: 'plain'},
	{text: 'Mass → moles → ratio → moles → mass', at: 534, tone: 'key'},
	{text: 'Ratio not 1 : 1? The shortcut gives a wrong answer', at: 782, tone: 'warn'},
];

// Six particles in two rows on a plinth top (local offsets for rx ≈ 78).
const PILE = [[-26, -14], [0, -16], [26, -14], [-38, 4], [-12, 5], [14, 5], [40, 4]] as const;

const Prop = ({prop, cx, cy, frame, seed}: {prop: RouteProp; cx: number; cy: number; frame: number; seed: number}) => {
	const bob = (i: number) => idleBob(frame, seed * 10 + i, 1.2);
	if (prop === 'balance' || prop === 'balanceIons') {
		const ions = prop === 'balanceIons';
		return (
			<g transform={`translate(${cx},${cy}) scale(1.2)`}>
				{/* digital balance body */}
				<path d="M -46 2 L -40 -22 L 40 -22 L 46 2 Q 46 8 40 8 L -40 8 Q -46 8 -46 2 Z" fill="#dfe3e6" stroke="#8c979f" strokeWidth={2} />
				<rect x={-24} y={-14} width={48} height={16} rx={3} fill="#24323a" />
				<text x={0} y={-1} textAnchor="middle" fill="#8ff0c4" fontSize={15} fontWeight={800} fontFamily="monospace">
					{ions ? '?' : 'm'}
				</text>
				{/* pan */}
				<rect x={-3} y={-30} width={6} height={9} fill="#8c979f" />
				<ellipse cx={0} cy={-31} rx={38} ry={8} fill="#eef1f3" stroke="#8c979f" strokeWidth={2} />
				{ions ? (
					// a small heap of the target ion's particles
					[[-12, -40], [0, -41], [12, -40], [-6, -50], [6, -50]].map(([x, y], k) => (
						<Ball key={k} id={ID} name="ion" color={ION} x={x} y={y + bob(k) * 0.3} r={7} />
					))
				) : (
					// a heap of dried white precipitate
					<path d="M -28 -33 Q -20 -44 -8 -48 Q 0 -54 10 -48 Q 22 -44 28 -33 Z" fill="#f7f5ee" stroke="#c9c3b3" strokeWidth={1.5} />
				)}
			</g>
		);
	}
	if (prop === 'units') {
		// Counted precipitate formula units: pale partner + target ion, locked together.
		return (
			<g transform={`translate(${cx},${cy}) scale(1.15) translate(${-cx},${-cy})`}>
				{PILE.map(([x, y], k) => (
					<g key={k} transform={`translate(${cx + x},${cy + y - 8 + bob(k)})`}>
						<Ball id={ID} name="partner" color={PARTNER} x={-5} y={0} r={10} />
						<Ball id={ID} name="ion" color={ION} x={6} y={2} r={7} />
					</g>
				))}
			</g>
		);
	}
	// ions: the same count of target-ion particles on their own
	return (
		<g transform={`translate(${cx},${cy}) scale(1.15) translate(${-cx},${-cy})`}>
			{PILE.map(([x, y], k) => (
				<Ball key={k} id={ID} name="ion" color={ION} x={cx + x} y={cy + y - 6 + bob(k)} r={9} />
			))}
		</g>
	);
};

export const RouteChainDiagram = ({
	stations = DEFAULT_STATIONS,
	links = DEFAULT_LINKS,
	shortcut = DEFAULT_SHORTCUT,
	captions = DEFAULT_CAPTIONS,
	walkAt = 534,
	delay = 62,
}: RouteChainProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const n = stations.length;
	const margin = 8;
	const slot = (W - margin * 2) / n;
	const rx = Math.min(86, slot * 0.45);
	const xs = stations.map((_, i) => margin + slot * (i + 0.5));
	const propTop = PY - 72; // hops start/end just above the props
	const stAt = (i: number) => stations[i].at ?? i * 60;
	const lkAt = (i: number) => links[i]?.at ?? stAt(i + 1);

	// ── The walking token: station → station along the hops, looping ────────
	const hopLen = 40; // frames per hop
	const pause = 16;
	const cycle = (n - 1) * (hopLen + pause) + 40;
	const wt = frame - walkAt;
	const walking = wt >= 0;
	let tokenX = xs[0];
	let tokenY = propTop - 8;
	let tokenHop = -1;
	if (walking) {
		const c = wt % cycle;
		const hop = Math.floor(c / (hopLen + pause));
		const within = c - hop * (hopLen + pause);
		if (hop < n - 1) {
			const t = interpolate(within, [0, hopLen], [0, 1], clamp);
			const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
			const x1 = xs[hop] + 18;
			const x2 = xs[hop + 1] - 18;
			tokenX = x1 + (x2 - x1) * e;
			tokenY = propTop - 8 - Math.sin(e * Math.PI) * (propTop - CHIP_Y - 10);
			tokenHop = within < hopLen ? hop : -1;
		} else {
			tokenX = xs[n - 1] - 18;
		}
	}
	const tokenOpacity = walking ? interpolate(wt % cycle, [0, 8, cycle - 16, cycle - 4], [0, 1, 1, 0], clamp) : 0;

	// ── Caption (latest one whose beat has passed) ─────────────────────────
	const capIdx = captions.reduce((best, c, i) => (frame >= c.at ? i : best), -1);
	const cap = capIdx >= 0 ? captions[capIdx] : undefined;
	const capIn = cap ? fadeAt(frame, cap.at, 12) : 0;
	const capColor = cap?.tone === 'warn' ? RED : cap?.tone === 'key' ? theme.accent : TOK.inkDim;

	// ── Shortcut geometry ──────────────────────────────────────────────────
	const sFrom = shortcut ? xs[shortcut.from ?? 0] - rx * 0.45 : 0;
	const sTo = shortcut ? xs[shortcut.to ?? n - 1] + rx * 0.45 : 0;
	const sY0 = propTop + 4;
	const sCtl = 10;
	const sApexY = sY0 + (sCtl - sY0) * 0.75;
	const sDraw = shortcut ? interpolate(frame, [shortcut.at ?? 0, (shortcut.at ?? 0) + 30], [0, 1], clamp) : 0;
	const strike = shortcut ? popAt(frame, fps, shortcut.strikeAt ?? 90) : 0;
	const struck = shortcut ? frame >= (shortcut.strikeAt ?? 90) : false;
	// Re-flash the ✗ when the last warning caption lands.
	const lastWarn = captions.filter((c) => c.tone === 'warn').slice(-1)[0];
	const reflash = lastWarn && frame > lastWarn.at ? Math.max(0, 1 - (frame - lastWarn.at) / 40) : 0;

	const lines = (t: string) => t.split('\n');

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Calculation route: mass to moles, apply the mole ratio, moles back to mass; never take the one-step shortcut" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{ion: ION, partner: PARTNER, token: TOK.chem2}} />

			{/* Shortcut arc over the top, then struck out */}
			{shortcut && (
				<g opacity={sDraw > 0 ? 1 : 0}>
					<path
						d={`M ${sFrom} ${sY0} C ${sFrom} ${sCtl}, ${sTo} ${sCtl}, ${sTo} ${sY0}`}
						stroke={struck ? RED : TOK.inkMute}
						strokeOpacity={struck ? 0.55 : 1}
						strokeWidth={3.5}
						fill="none"
						strokeLinecap="round"
						pathLength={1}
						strokeDasharray={sDraw < 1 ? `${sDraw} 1` : '0.012 0.012'}
					/>
					{/* arrowhead at the far end, once drawn */}
					<path d={`M ${sTo} ${sY0 + 4} l -8 -14 l 16 0 Z`} fill={struck ? RED : TOK.inkMute} opacity={fadeAt(frame, (shortcut.at ?? 0) + 26, 6) * (struck ? 0.55 : 1)} />
					<g opacity={fadeAt(frame, (shortcut.at ?? 0) + 10, 12)}>
						<rect x={W / 2 - 108} y={sApexY - 50} width={216} height={34} rx={17} fill={TOK.bgLift} stroke={struck ? RED : TOK.inkMute} strokeWidth={2.5} />
						<text x={W / 2} y={sApexY - 26} textAnchor="middle" fill={struck ? RED : TOK.inkDim} fontSize={20} fontWeight={800} textDecoration={struck ? 'line-through' : undefined}>
							{shortcut.label}
						</text>
					</g>
					{frame >= (shortcut.strikeAt ?? 90) && (
						<g transform={`translate(${W / 2},${sApexY}) scale(${Math.max(0, strike) * (1 + reflash * 0.25)})`}>
							<circle r={21} fill={TOK.bgLift} stroke={RED} strokeWidth={3} />
							<path d="M -10 -10 L 10 10 M 10 -10 L -10 10" stroke={RED} strokeWidth={5.5} strokeLinecap="round" />
						</g>
					)}
				</g>
			)}

			{/* Hops between consecutive stations */}
			{links.slice(0, n - 1).map((lk, i) => {
				const at = lkAt(i);
				const x1 = xs[i] + 18;
				const x2 = xs[i + 1] - 18;
				const t = interpolate(frame, [at, at + 22], [0, 1], clamp);
				const bridge = !!lk.bridge;
				const col = bridge ? TOK.amber : shade(theme.accent, 0.18);
				const ink = bridge ? TOK.amberInk : theme.accent;
				const lit = tokenHop === i ? 1 : 0;
				const pulse = bridge && frame > at + 30 ? idlePulse(frame, 60) : 0;
				const chipW = lk.label.length * 20 * 0.56 + 30;
				return (
					<g key={i}>
						<path
							d={`M ${x1} ${propTop} C ${x1} ${CHIP_Y - 16}, ${x2} ${CHIP_Y - 16}, ${x2} ${propTop}`}
							stroke={col}
							strokeWidth={bridge ? 4.5 + pulse * 1.5 : 3.5}
							fill="none"
							strokeLinecap="round"
							pathLength={1}
							strokeDasharray="1 1"
							strokeDashoffset={1 - t}
						/>
						<path d={`M ${x2} ${propTop + 6} l -7 -13 l 14 0 Z`} fill={col} opacity={fadeAt(frame, at + 18, 6)} />
						<g opacity={fadeAt(frame, at + 8, 10)}>
							<rect x={(x1 + x2) / 2 - chipW / 2} y={CHIP_Y - 17} width={chipW} height={34} rx={17} fill={bridge ? '#fff6e3' : TOK.bgLift} stroke={col} strokeWidth={bridge ? 3 + pulse * 1.2 : 2.5 + lit} />
							<text x={(x1 + x2) / 2} y={CHIP_Y + 7} textAnchor="middle" fill={ink} fontSize={20} fontWeight={800}>
								{lk.label}
							</text>
							{lk.sub && (
								<text x={(x1 + x2) / 2} y={SUB_Y} textAnchor="middle" fill={bridge ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={700}>
									{lk.sub}
								</text>
							)}
						</g>
					</g>
				);
			})}

			{/* Stations */}
			{stations.map((st, i) => {
				const pop = popAt(frame, fps, stAt(i));
				const s = 0.6 + 0.4 * Math.min(1, pop);
				const here = walking && tokenHop === -1 && Math.abs(tokenX - xs[i]) < 30 && tokenOpacity > 0.5;
				return (
					<g key={i} opacity={Math.min(1, pop * 1.5)}>
						<g transform={`translate(${xs[i]},${PY}) scale(${s}) translate(${-xs[i]},${-PY})`}>
							<DioramaPlinth id={ID} cx={xs[i]} cy={PY} rx={rx}>
								{st.prop && <Prop prop={st.prop} cx={xs[i]} cy={PY} frame={frame} seed={i} />}
							</DioramaPlinth>
						</g>
						{lines(st.label).map((l, k) => (
							<text key={k} x={xs[i]} y={LABEL_Y + k * 25} textAnchor="middle" fill={here ? theme.accent : TOK.ink} fontSize={21} fontWeight={800}>
								{l}
							</text>
						))}
					</g>
				);
			})}

			{/* Walking token */}
			{walking && <Ball id={ID} name="token" color={TOK.chem2} x={tokenX} y={tokenY} r={9} opacity={tokenOpacity} />}

			{/* Caption */}
			{cap && (
				<text x={W / 2} y={CAPTION_Y} textAnchor="middle" fill={capColor} fontSize={23} fontWeight={800} opacity={capIn}>
					{cap.text}
				</text>
			)}
		</svg>
	);
};
