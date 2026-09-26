// GalvanicCellDiagram — two half-cells on plinths joined by a wire (with a
// voltmeter) and a salt bridge. Electrons stream through the wire from the
// anode to the cathode; in the salt bridge, anions drift towards the anode
// and cations towards the cathode, keeping both solutions neutral.
//
// Fix (v2): the anode is no longer assumed to be the left half-cell. It is
// the half-cell with the LOWER standard reduction potential, looked up from
// the ion label. For Pt | Fe³⁺/Fe²⁺ against Cu | Cu²⁺ (Chem Y11 M3 L10),
// E°(Fe³⁺/Fe²⁺) = +0.77 V is above E°(Cu²⁺/Cu) = +0.34 V, so Cu is the anode
// and the Pt electrode is the cathode; the old diagram had them swapped.
// Unknown couples fall back to left = anode, the old behaviour.
//
// Diorama restyle: glass beakers on plinths, metal electrodes with painted
// sheen, tinted solutions (Cu²⁺ blue, Fe³⁺ pale amber), a glass salt bridge
// with drifting ions, glossy electrons that never stop moving, and an "inert"
// note on Pt / graphite electrodes.
//
// Props are unchanged. Timing: `delay` is now a floor under the card reveal:
// the build starts at max(delay, 90) (both lessons reveal the card at 90).
// Beat plan (frames after the start):
//   0     plinths, beakers, solutions
//   20    electrodes; 40 salt bridge; 60 wire + voltmeter
//   100   anode / cathode plaques
//   130   electrons flow and ions drift (continuous for the hold)

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../styles/tokens';
import {DioramaDefs, DioramaPlinth} from './diorama';
import {Ball, BallDefs, GLASS_EDGE, GlassDefs, clamp, drawProps, fadeAt, shade} from './kinds/restyle-chem-specials/props';

type Props = {
	leftMetal: string;
	leftIon: string;
	rightMetal: string;
	rightIon: string;
	delay?: number;
};

const ID = 'galv';
const W = 760;

// Standard reduction potentials (V) keyed by the ion label as lessons write it.
const E0: Record<string, number> = {
	'Mg²⁺': -2.37, 'Al³⁺': -1.68, 'Zn²⁺': -0.76, 'Fe²⁺': -0.44, 'Ni²⁺': -0.24, 'Sn²⁺': -0.14, 'Pb²⁺': -0.13,
	'H⁺': 0.0, 'Cu²⁺': 0.34, 'Fe³⁺/Fe²⁺': 0.77, 'Fe²⁺/Fe³⁺': 0.77, 'Ag⁺': 0.8,
};
const METAL_COLOR: Record<string, string> = {Zn: '#9aa7b4', Cu: '#c7773f', Ag: '#d6dadf', Pt: '#e2e4e7', Mg: '#c4c9cd', Fe: '#7d8085', Ni: '#b6b09a', Pb: '#7f8791', Sn: '#c9cccf', Al: '#cfd4d8', C: '#3f3f3f'};
const SOLUTION_COLOR = (ion: string) => (ion.startsWith('Cu') ? '#4a90d9' : ion.includes('Fe³⁺') ? '#d9a84a' : ion.startsWith('Ni') ? '#58b368' : '#b9d4dc');
const INERT = new Set(['Pt', 'C', 'graphite']);

const CX = [190, 570];
const PLINTH_Y = 432;
const B_TOP = 250, B_BOT = 420, B_HW = 90, LIQ = 292;
const E_TOP = 150, E_BOT = 364, E_HW = 17;
const WIRE_Y = 74;

export const GalvanicCellDiagram = ({leftMetal, leftIon, rightMetal, rightIon, delay = 0}: Props) => {
	const start = Math.max(delay, 90);
	const frame = useCurrentFrame() - start;
	const {fps} = useVideoConfig();
	const f = frame + start;

	const eL = E0[leftIon.replace(/\s/g, '')];
	const eR = E0[rightIon.replace(/\s/g, '')];
	const anode = eL !== undefined && eR !== undefined && eL > eR ? 1 : 0; // index of the anode half-cell
	const cathode = 1 - anode;
	const metals = [leftMetal, rightMetal];
	const ions = [leftIon, rightIon];

	const drop = (d: number) => spring({frame: frame - d, fps, config: {damping: 14, stiffness: 140, mass: 0.8}});
	const wire = interpolate(frame, [60, 90], [0, 1], clamp);
	const flow = fadeAt(frame, 130, 20);

	// Wire path from electrode top (left) up, across, down to the right electrode.
	const wirePts = [
		{x: CX[0], y: E_TOP}, {x: CX[0], y: WIRE_Y}, {x: CX[1], y: WIRE_Y}, {x: CX[1], y: E_TOP},
	];
	const segLen = [E_TOP - WIRE_Y, CX[1] - CX[0], E_TOP - WIRE_Y];
	const total = segLen.reduce((a, b) => a + b, 0);
	const pointAt = (u: number) => {
		let d = u * total;
		for (let i = 0; i < 3; i++) {
			if (d <= segLen[i]) {
				const a = wirePts[i], b = wirePts[i + 1];
				const t = d / segLen[i];
				return {x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t};
			}
			d -= segLen[i];
		}
		return wirePts[3];
	};

	const halfCell = (i: number) => {
		const cx = CX[i];
		const metal = metals[i];
		const mc = METAL_COLOR[metal] ?? '#9aa3ad';
		const sc = SOLUTION_COLOR(ions[i]);
		const e = Math.max(0, drop(20 + i * 6));
		const isAnode = i === anode;
		return (
			<g>
				<DioramaPlinth id={ID} cx={cx} cy={PLINTH_Y} rx={140}>
					<path d={`M ${cx - B_HW + 4} ${LIQ} L ${cx + B_HW - 4} ${LIQ} L ${cx + B_HW - 4} ${B_BOT - 12} Q ${cx + B_HW - 4} ${B_BOT - 4} ${cx + B_HW - 12} ${B_BOT - 4} L ${cx - B_HW + 12} ${B_BOT - 4} Q ${cx - B_HW + 4} ${B_BOT - 4} ${cx - B_HW + 4} ${B_BOT - 12} Z`} fill={sc} fillOpacity={0.28} />
					<ellipse cx={cx} cy={LIQ} rx={B_HW - 4} ry={6} fill={sc} fillOpacity={0.4} />
					{/* electrode */}
					<g opacity={Math.min(1, e * 2)} transform={`translate(0, ${(1 - Math.min(1, e)) * -60})`}>
						<rect x={cx - E_HW} y={E_TOP} width={E_HW * 2} height={E_BOT - E_TOP} rx={4} fill={`url(#${ID}-metal-${i})`} stroke={shade(mc, -0.35)} strokeWidth={1.5} />
						<rect x={cx - E_HW + 4} y={E_TOP + 6} width={5} height={E_BOT - E_TOP - 12} rx={2.5} fill="#ffffff" opacity={0.45} />
						<text x={cx} y={E_TOP + 44} textAnchor="middle" fill={shade(mc, -0.6)} fontSize={21} fontWeight={900}>{metal}</text>
					</g>
					<text x={cx} y={B_BOT - 18} textAnchor="middle" fill={shade(sc, -0.45)} fontSize={21} fontWeight={800}>{ions[i]}</text>
					{/* beaker glass */}
					<path d={`M ${cx - B_HW} ${B_TOP} L ${cx - B_HW} ${B_BOT - 10} Q ${cx - B_HW} ${B_BOT} ${cx - B_HW + 10} ${B_BOT} L ${cx + B_HW - 10} ${B_BOT} Q ${cx + B_HW} ${B_BOT} ${cx + B_HW} ${B_BOT - 10} L ${cx + B_HW} ${B_TOP}`} fill={`url(#${ID}-glass)`} stroke={GLASS_EDGE} strokeWidth={3.5} strokeLinejoin="round" />
					<path d={`M ${cx - B_HW + 10} ${B_TOP + 14} L ${cx - B_HW + 10} ${B_BOT - 18}`} stroke="#ffffff" strokeOpacity={0.8} strokeWidth={5} strokeLinecap="round" />
				</DioramaPlinth>
				{/* role plaque on the plinth front */}
				<g opacity={fadeAt(frame, 100)}>
					<rect x={cx - 78} y={446} width={156} height={50} rx={10} fill="#fffdf6" stroke={isAnode ? '#8e5bd6' : TOK.chem2} strokeWidth={2.5} />
					<text x={cx} y={468} textAnchor="middle" fill={isAnode ? '#6a3fb0' : TOK.chem1} fontSize={20} fontWeight={900} letterSpacing="0.05em">{isAnode ? 'ANODE' : 'CATHODE'}</text>
					<text x={cx} y={488} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{isAnode ? 'oxidation' : 'reduction'}</text>
				</g>
				{INERT.has(metal) ? (
					<text x={cx + 6} y={E_TOP + 136} textAnchor="middle" fill={shade(mc, -0.62)} fontSize={16} fontWeight={800} opacity={fadeAt(frame, 110)} transform={`rotate(-90 ${cx + 6} ${E_TOP + 136})`}>
						inert: conducts only
					</text>
				) : null}
			</g>
		);
	};

	// Salt bridge: an inverted U of glass between the two beakers.
	const SB = {l: CX[0] + 42, r: CX[1] - 42, top: 196, bot: 356};
	const sbPath = `M ${SB.l} ${SB.bot} L ${SB.l} ${SB.top + 30} Q ${SB.l} ${SB.top} ${SB.l + 30} ${SB.top} L ${SB.r - 30} ${SB.top} Q ${SB.r} ${SB.top} ${SB.r} ${SB.top + 30} L ${SB.r} ${SB.bot}`;
	const bridgeIn = interpolate(frame, [40, 64], [0, 1], clamp);
	const ionDir = anode === 0 ? -1 : 1; // anions move toward the anode's side

	return (
		<svg viewBox={`0 0 ${W} 500`} role="img" aria-label={`Galvanic cell: ${metals[anode]} anode, ${metals[cathode]} cathode; electrons flow through the wire from anode to cathode`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlassDefs id={ID} />
			<BallDefs id={ID} colors={{e: '#f0a830', an: '#3f6fd8', cat: '#d65a4a'}} />
			<defs>
				{metals.map((m, i) => {
					const c = METAL_COLOR[m] ?? '#9aa3ad';
					return (
						<linearGradient key={i} id={`${ID}-metal-${i}`} x1="0" x2="1">
							<stop offset="0%" stopColor={shade(c, -0.12)} />
							<stop offset="40%" stopColor={shade(c, 0.14)} />
							<stop offset="100%" stopColor={shade(c, -0.25)} />
						</linearGradient>
					);
				})}
			</defs>

			<g opacity={fadeAt(frame, -start, 16)}>
				{/* salt bridge, behind the beakers' front glass */}
				<g opacity={bridgeIn}>
					<path d={sbPath} fill="none" stroke={GLASS_EDGE} strokeWidth={26} strokeLinejoin="round" />
					<path d={sbPath} fill="none" stroke="#eef4f1" strokeWidth={20} strokeLinejoin="round" />
					<text x={(SB.l + SB.r) / 2} y={SB.top - 14} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={800}>salt bridge</text>
				</g>
				{halfCell(0)}
				{halfCell(1)}
			</g>

			{/* ions drifting in the bridge (top section): anions → anode side, cations → cathode side */}
			<g opacity={flow}>
				{Array.from({length: 6}, (_, k) => {
					const anion = k % 2 === 0;
					const dir = anion ? ionDir : -ionDir;
					const span = SB.r - SB.l - 70;
					const p = ((((f * 0.6 + k * 53) % span) + span) % span) / span;
					const x = (SB.l + SB.r) / 2 + dir * (p - 0.5) * span;
					return (
						<g key={k} opacity={interpolate(p, [0, 0.1, 0.9, 1], [0, 1, 1, 0])}>
							<Ball id={ID} fill={anion ? 'an' : 'cat'} edge={anion ? '#3f6fd8' : '#d65a4a'} x={x} y={SB.top} r={8}>
								<text y={5} textAnchor="middle" fill="#ffffff" fontSize={13} fontWeight={900}>{anion ? '−' : '+'}</text>
							</Ball>
						</g>
					);
				})}
			</g>

			{/* wire + voltmeter */}
			<path d={`M ${CX[0]} ${E_TOP} L ${CX[0]} ${WIRE_Y} L ${CX[1]} ${WIRE_Y} L ${CX[1]} ${E_TOP}`} fill="none" stroke="#6c7378" strokeWidth={5} strokeLinejoin="round" {...drawProps(wire)} />
			<g opacity={fadeAt(frame, 80)}>
				<circle cx={W / 2} cy={WIRE_Y} r={28} fill="#ffffff" stroke="#6c7378" strokeWidth={4} />
				<text x={W / 2} y={WIRE_Y + 9} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={900}>V</text>
			</g>
			{/* electrons: anode → cathode along the wire */}
			<g opacity={flow}>
				{Array.from({length: 7}, (_, k) => {
					const u0 = ((((f * 0.004 + k / 7) % 1) + 1) % 1);
					const u = anode === 0 ? u0 : 1 - u0;
					const pt = pointAt(u);
					if (Math.abs(pt.x - W / 2) < 34 && Math.abs(pt.y - WIRE_Y) < 4) return null;
					return <Ball key={k} id={ID} fill="e" edge="#f0a830" x={pt.x} y={pt.y} r={7} />;
				})}
				<text x={anode === 0 ? W / 2 - 150 : W / 2 + 150} y={WIRE_Y - 16} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={850}>
					{anode === 0 ? 'e⁻ flow →' : '← e⁻ flow'}
				</text>
			</g>
		</svg>
	);
};
