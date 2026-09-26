// MolePathwayDiagram (kind: chem11m2Pathway): "moles are the bridge".
//
// Three plinths in a row. The GIVEN quantity stands on the left bank (a
// balance for mass, a balloon for a gas, a beaker for a solution), the MOLES
// island sits in the middle, and the WANTED quantity is on the right bank. A
// wooden footbridge is laid across each gap as the narration names that step,
// and a glowing packet carries the amount over it: in to moles, across the
// mole ratio (the only place the ratio can act), and out to the answer. The
// right bank can fork into two exits (e.g. "× M for mass" or "÷ total V for
// concentration"). One trap line in amber closes the build.
//
// Beat plan (frames relative to `delay`): props.beats = {in, ratio, out, trap};
// `out` may be an array (one per exit). Each step takes ~40 frames.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Chip, Footbridge, LANE, StationIcon, TrapLine, archPoint, clamp, pileSlots, type StationIconKind} from './parts';

type Station = {icon: StationIconKind; label: string; sub?: string; value?: string};
type Target = 'in' | 'ratio' | 'out' | 'out2' | 'given' | 'wanted' | 'wanted2' | 'none';

export type MolePathwayProps = {
	title?: string;
	given?: Station;
	wanted?: Station | Station[];
	inOp?: string;
	ratioOp?: string;
	outOp?: string | string[];
	molesGiven?: string;
	molesWanted?: string;
	/** Balls in the n(given) and n(wanted) piles: show the ratio's scaling. */
	piles?: [number, number];
	trap?: string;
	trapOn?: Target;
	beats?: {in?: number; ratio?: number; out?: number | number[]; trap?: number};
	delay?: number;
};

const ID = 'c11m2path';
const W = 760;
const VB_H = 520;
const GY = 330;
const GIVEN_X = 100, ISLAND_X = 380, WANT_X = 660;
const BANK_RX = 96, ISLAND_RX = 132;
const STEP = 40;

export const MolePathwayDiagram = ({
	title,
	given = {icon: 'mass', label: 'mass', sub: 'of given'},
	wanted = {icon: 'mass', label: 'mass', sub: 'of wanted'},
	inOp = '÷ M',
	ratioOp = '× wanted ÷ given',
	outOp = '× M',
	molesGiven = 'n(given)',
	molesWanted = 'n(wanted)',
	piles = [3, 6],
	trap,
	trapOn = 'none',
	beats = {},
	delay = 62,
}: MolePathwayProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const exits = Array.isArray(wanted) ? wanted : [wanted];
	const outOps = Array.isArray(outOp) ? outOp : [outOp];
	const fork = exits.length > 1;
	const bIn = beats.in ?? 60;
	const bRatio = beats.ratio ?? bIn + 150;
	const bOuts = Array.isArray(beats.out) ? beats.out : [beats.out ?? bRatio + 150];
	while (bOuts.length < exits.length) bOuts.push(bOuts[bOuts.length - 1] + 120);
	const bTrap = beats.trap ?? bOuts[bOuts.length - 1] + 150;

	const fade = (d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);
	const prog = (b: number) => interpolate(frame, [b, b + STEP], [0, 1], clamp);
	const pulse = idlePulse(frame);
	const trapIn = trap ? fade(bTrap, 14) : 0;
	const isTrap = (t: Target) => trapOn === t && trapIn > 0;

	// Exit geometry: one bank, or a fork of two smaller banks.
	const exitY = fork ? [GY - 115, GY + 75] : [GY];
	const exitRx = fork ? 78 : BANK_RX;
	const exitScale = fork ? 1 : 1.3;
	const trapY = fork ? 34 : VB_H - 24;

	// Bridge anchors (a little inside each plinth's rim).
	const inBridge = {x1: GIVEN_X + BANK_RX * 0.72, y1: GY, x2: ISLAND_X - ISLAND_RX * 0.8, y2: GY};
	const outBridge = (k: number) => ({x1: ISLAND_X + ISLAND_RX * 0.8, y1: GY, x2: WANT_X - exitRx * 0.72, y2: exitY[k]});

	// Island piles.
	const pileR = 15;
	const gPile = pileSlots(ISLAND_X - 62, GY + 12, piles[0], pileR);
	const wPile = pileSlots(ISLAND_X + 62, GY + 12, piles[1], pileR);
	const pIn = prog(bIn), pRatio = prog(bRatio);
	const pOut = bOuts.map((b) => prog(b));

	// The travelling packet: a glowing ball that rides each bridge as its step plays.
	const packet = (() => {
		const lift = 16;
		if (frame >= bIn && pIn < 1) {
			const p = archPoint(GIVEN_X, GY - 90, ISLAND_X - 56, GY - 30, 40, pIn, lift);
			return {...p, color: LANE.given};
		}
		if (frame >= bRatio && pRatio < 1) {
			const p = archPoint(ISLAND_X - 56, GY - 50, ISLAND_X + 56, GY - 50, 44, pRatio);
			return {...p, color: LANE.moles};
		}
		for (let k = 0; k < exits.length; k++) {
			if (frame >= bOuts[k] && pOut[k] < 1) {
				const p = archPoint(ISLAND_X + 56, GY - 30, WANT_X, exitY[k] - 90, 40, pOut[k], lift);
				return {...p, color: LANE.wanted};
			}
		}
		return null;
	})();

	const chipColor = (active: number, t: Target, base: string) => (isTrap(t) ? TOK.amber : active > 0 ? base : TOK.inkMute);
	const labelY = (y: number, rx: number) => y + rx * 0.2 + rx * 0.34 + 34;

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label={`${given.label} to moles, across the mole ratio, then to ${exits.map((e) => e.label).join(' or ')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<radialGradient id={`${ID}-glow`}>
					<stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
					<stop offset="60%" stopColor="#ffffff" stopOpacity={0.35} />
					<stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
				</radialGradient>
			</defs>

			{title && (
				<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={fade(0)}>
					{title}
				</text>
			)}

			{/* River under the bridges: the gap you can't jump directly. */}
			<g opacity={fade(0, 18) * 0.9}>
				<path d={`M 30 ${GY + 22} Q 380 ${GY + 4} 730 ${GY + 22} L 730 ${GY + 50} Q 380 ${GY + 32} 30 ${GY + 50} Z`} fill="#bfe0f2" opacity={0.55} />
			</g>

			{/* Plinths */}
			<g opacity={fade(0, 16)}>
				<DioramaPlinth id={ID} cx={GIVEN_X} cy={GY} rx={BANK_RX} />
				<DioramaPlinth id={ID} cx={ISLAND_X} cy={GY} rx={ISLAND_RX} />
			</g>
			{exits.map((_, k) => (
				<g key={k} opacity={fade(6 + k * 4, 16)}>
					<DioramaPlinth id={ID} cx={WANT_X} cy={exitY[k]} rx={exitRx} />
				</g>
			))}

			{/* Bridges, laid as each step is named */}
			<Footbridge {...inBridge} rise={30} progress={interpolate(frame, [bIn - 20, bIn + 10], [0, 1], clamp)} />
			{exits.map((_, k) => (
				<Footbridge key={k} {...outBridge(k)} rise={fork ? 20 : 30} progress={interpolate(frame, [bOuts[k] - 20, bOuts[k] + 10], [0, 1], clamp)} />
			))}

			{/* Given: on the left bank from the start */}
			<g opacity={fade(8)}>
				<StationIcon id={ID} icon={given.icon} x={GIVEN_X} baseY={GY + 4} value={given.value} frame={frame} color={LANE.given} scale={1.3} />
			</g>

			{/* Moles island piles */}
			{gPile.map((s, i) => {
				const pop = spring({frame: frame - bIn - STEP + 4 - i * 2, fps, config: {damping: 12, stiffness: 200, mass: 0.6}});
				return <Ball key={`g${i}`} x={s.x} y={s.y + idleBob(frame, i, 1.4)} r={pileR * Math.max(0, pop)} color={LANE.given} opacity={pop > 0.02 ? 1 : 0} />;
			})}
			{wPile.map((s, i) => {
				const pop = spring({frame: frame - bRatio - STEP + 4 - i * 2, fps, config: {damping: 12, stiffness: 200, mass: 0.6}});
				return <Ball key={`w${i}`} x={s.x} y={s.y + idleBob(frame, i + 9, 1.4)} r={pileR * Math.max(0, pop)} color={LANE.moles} opacity={pop > 0.02 ? 1 : 0} />;
			})}

			{/* Wanted: appears on its bank when the packet lands */}
			{exits.map((e, k) => {
				const land = spring({frame: frame - bOuts[k] - STEP + 6, fps, config: {damping: 13, stiffness: 170}});
				return (
					<g key={k} opacity={Math.min(1, Math.max(0, land) * 1.5)} transform={`translate(${WANT_X}, ${exitY[k] + 4}) scale(${0.6 + 0.4 * Math.max(0, Math.min(1, land))}) translate(${-WANT_X}, ${-(exitY[k] + 4)})`}>
						<StationIcon id={ID} icon={e.icon} x={WANT_X} baseY={exitY[k] + 4} value={e.value} frame={frame} scale={exitScale} color={LANE.wanted} />
					</g>
				);
			})}

			{/* Op chips over the bridges */}
			<Chip x={(inBridge.x1 + inBridge.x2) / 2 + 6} y={GY - 168} fontSize={22} text={inOp} color={chipColor(pIn, 'in', LANE.given)} on={pIn > 0 && pIn < 1} opacity={fade(bIn - 20)} strokeWidth={isTrap('in') ? 2.5 + pulse * 2 : 2.5} />
			<Chip x={ISLAND_X} y={GY - 112} fontSize={22} text={ratioOp} color={chipColor(pRatio, 'ratio', LANE.moles)} on={pRatio > 0 && pRatio < 1} opacity={fade(bRatio - 20)} strokeWidth={isTrap('ratio') ? 2.5 + pulse * 2 : 2.5} />
			{exits.map((_, k) => {
				const b = outBridge(k);
				const cy = fork ? (k === 0 ? GY - 150 : GY + 118) : GY - 168;
				const t: Target = k === 0 ? 'out' : 'out2';
				return <Chip key={k} x={fork ? (k === 0 ? 540 : 516) : (b.x1 + b.x2) / 2 - 6} y={cy} text={outOps[k] ?? ''} color={chipColor(pOut[k], t, LANE.wanted)} on={pOut[k] > 0 && pOut[k] < 1} opacity={fade(bOuts[k] - 20)} strokeWidth={isTrap(t) ? 2.5 + pulse * 2 : 2.5} fontSize={fork ? 19 : 22} />;
			})}

			{/* Packet */}
			{packet && (
				<g>
					<circle cx={packet.x} cy={packet.y} r={22} fill={`url(#${ID}-glow)`} />
					<Ball x={packet.x} y={packet.y} r={10} color={packet.color} />
				</g>
			)}

			{/* Labels */}
			<g opacity={fade(10)}>
				<text x={GIVEN_X} y={labelY(GY, BANK_RX)} textAnchor="middle" fill={isTrap('given') ? TOK.amberInk : LANE.given} fontSize={26} fontWeight={800}>{given.label}</text>
				{given.sub && <text x={GIVEN_X} y={labelY(GY, BANK_RX) + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>{given.sub}</text>}
			</g>
			<g opacity={fade(bIn + STEP - 6)}>
				<text x={ISLAND_X - 66} y={labelY(GY, ISLAND_RX) - 16} textAnchor="middle" fill={LANE.given} fontSize={20} fontWeight={800}>{molesGiven}</text>
			</g>
			<g opacity={fade(bRatio + STEP - 6)}>
				<text x={ISLAND_X + 66} y={labelY(GY, ISLAND_RX) - 16} textAnchor="middle" fill={LANE.moles} fontSize={20} fontWeight={800}>{molesWanted}</text>
			</g>
			<text x={ISLAND_X} y={labelY(GY, ISLAND_RX) + 10} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.08em" opacity={fade(bIn)}>
				MOLES
			</text>
			{exits.map((e, k) => {
				const y = fork ? (k === 0 ? exitY[k] - 138 : exitY[k] + exitRx * 0.54 + 30) : labelY(GY, BANK_RX);
				const t: Target = k === 0 ? 'wanted' : 'wanted2';
				return (
					<g key={k} opacity={fade(bOuts[k] + STEP - 6)}>
						<text x={WANT_X} y={y} textAnchor="middle" fill={isTrap(t) ? TOK.amberInk : LANE.wanted} fontSize={fork ? 22 : 26} fontWeight={800}>{e.label}</text>
						{e.sub && <text x={WANT_X} y={y + (fork ? 21 : 24)} textAnchor="middle" fill={TOK.inkDim} fontSize={fork ? 16 : 18} fontWeight={700}>{e.sub}</text>}
					</g>
				);
			})}

			{trap && <TrapLine x={W / 2} y={trapY} text={trap} opacity={trapIn} pulse={pulse} fontSize={21} />}
		</svg>
	);
};
