// PrecipitateDiagram — ions meet and a solid drops out (Chem Y11 M3 L3).
//
// One beaker on a plinth holds two aqueous solutions behind a glass divider,
// already dissociated into ions. The divider lifts and the four kinds of ion
// mingle. The insoluble pairing (by default Ag⁺ + Cl⁻) locks together and sinks
// as a white solid on the beaker floor; the spectator ions (Na⁺, NO₃⁻) keep
// swimming. The caption line steps through the mechanism and ends on the net
// ionic equation.
//
// Motion is analytic (a triangle-wave bounce per ion), so every frame is
// deterministic and needs no stored state.
//
// Beats (frames after `delay`), timed to the concept voiceover:
//   mix 150 · re-pair 320 · lock 600 · settled/spectators 790 · net ionic 870

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Beaker, ExtraAtomDefs, bounce, clamp, hash01, ramp} from './shared';

type Ion = {label: string; charge: '+' | '−'; el: string; ink?: string};
export type PrecipitateProps = {
	delay?: number;
	/** Solution on the left of the divider: [cation, anion]. */
	left?: {name: string; ions: [Ion, Ion]};
	right?: {name: string; ions: [Ion, Ion]};
	/** The insoluble product formed from left cation + right anion. */
	precipitate?: string;
	/** The soluble new pairing (stays dissolved). */
	soluble?: string;
	/** Frames after delay: [mix, re-pair, lock, settled, net ionic]. */
	beats?: [number, number, number, number, number];
};

const ID = 'c11m3ppt';
const W = 760;
const BASE = 392;
const BW = 380;
const BH = 250;
const CX = W / 2;
const N = 4; // ions of each kind

const ease = (t: number) => t * t * (3 - 2 * t);

export const PrecipitateDiagram = ({
	delay = 90,
	left = {name: 'AgNO₃(aq)', ions: [{label: 'Ag⁺', charge: '+', el: 'Ag', ink: '#3a3f47'}, {label: 'NO₃⁻', charge: '−', el: 'N'}]},
	right = {name: 'NaCl(aq)', ions: [{label: 'Na⁺', charge: '+', el: 'Na'}, {label: 'Cl⁻', charge: '−', el: 'Cl'}]},
	precipitate = 'AgCl',
	soluble = 'NaNO₃',
	beats = [150, 320, 600, 790, 870],
}: PrecipitateProps) => {
	const frame = useCurrentFrame() - delay;
	const [tMix, tPair, tLock, tSettle, tNet] = beats;

	const x0 = CX - BW / 2 + 26, x1 = CX + BW / 2 - 26;
	const yTop = BASE - BH * 0.8 + 26, yBot = BASE - 26;
	const mix = ease(interpolate(frame, [tMix, tMix + 60], [0, 1], clamp));
	const divider = interpolate(frame, [tMix - 10, tMix + 30], [0, 1], clamp);

	// Swim position for ion k of kind `kind` (0..3) at time t. Left kinds start
	// in the left half, right kinds in the right half; after mixing, all roam.
	const swim = (kind: number, k: number, t: number, m: number) => {
		const seed = kind * 10 + k;
		const onLeft = kind < 2;
		const lo = onLeft ? x0 : x0 + (CX - x0 + 8) * (1 - m);
		const hi = onLeft ? x1 - (x1 - CX + 8) * (1 - m) : x1;
		const u = bounce(hash01(seed), (0.0026 + hash01(seed + 50) * 0.0022) * (hash01(seed + 7) > 0.5 ? 1 : -1), t, 0, 1);
		const v = bounce(hash01(seed + 90), (0.002 + hash01(seed + 23) * 0.002) * (hash01(seed + 3) > 0.5 ? 1 : -1), t, 0, 1);
		return {x: lo + u * (hi - lo), y: yTop + v * (yBot - yTop)};
	};

	const kinds: Ion[] = [left.ions[0], left.ions[1], right.ions[0], right.ions[1]];
	// The precipitating pair: left cation (kind 0) with right anion (kind 3).
	const lock = ease(interpolate(frame, [tLock, tLock + 45], [0, 1], clamp));
	const sink = ease(interpolate(frame, [tLock + 45, tLock + 110], [0, 1], clamp));
	const pileSlots = [
		{x: CX - 66, y: yBot + 6}, {x: CX, y: yBot + 6}, {x: CX + 66, y: yBot + 6}, {x: CX - 33, y: yBot - 26},
	];

	type Drawn = {key: string; el: string; x: number; y: number; label: string; ink?: string; spect: boolean};
	const drawn: Drawn[] = [];
	kinds.forEach((ion, kind) => {
		for (let k = 0; k < N; k++) {
			const live = swim(kind, k, frame, mix);
			let p = live;
			const pairs = kind === 0 || kind === 3;
			if (pairs && lock > 0) {
				const a = swim(0, k, tLock, 1);
				const b = swim(3, k, tLock, 1);
				const meet = {x: (a.x + b.x) / 2 + (kind === 0 ? -16 : 16), y: (a.y + b.y) / 2};
				const slot = pileSlots[k];
				const dest = {x: slot.x + (kind === 0 ? -16 : 16), y: slot.y};
				const settled = {x: meet.x + (dest.x - meet.x) * sink, y: meet.y + (dest.y - meet.y) * sink};
				// Before the lock beat the ion still swims; during the lock it glides from its live spot.
				p = lock < 1 ? {x: live.x + (meet.x - live.x) * lock, y: live.y + (meet.y - live.y) * lock} : settled;
			}
			if (sink >= 1 && pairs) p = {x: p.x + idleBob(frame, k, 0.6), y: p.y};
			drawn.push({key: `${kind}-${k}`, el: ion.el, x: p.x, y: p.y, label: ion.charge, ink: ion.ink, spect: !pairs});
		}
	});

	const pileIn = sink;
	const netIn = ramp(frame, tNet, 16);
	const caption =
		frame < tMix ? 'Two solutions: the ions are already apart'
		: frame < tPair ? 'Mixed: four kinds of ion in one beaker'
		: frame < tLock ? `New pairs possible: ${precipitate} and ${soluble}`
		: frame < tSettle ? `${precipitate} is insoluble: those ions lock together`
		: frame < tNet ? `Precipitate forms. ${kinds[1].label} and ${kinds[2].label} keep swimming`
		: '';
	const capKey = [tMix, tPair, tLock, tSettle, tNet].filter((t) => frame >= t).length;
	const capIn = ramp(frame, [0, tMix, tPair, tLock, tSettle][Math.min(capKey, 4)] + 4, 12);
	const allEls = Array.from(new Set(kinds.map((k) => k.el)));

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={`Mixing ${left.name} and ${right.name}: ${precipitate} is insoluble and precipitates; the other ions stay dissolved as spectators`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={allEls.filter((e) => ['N', 'Cl', 'Na', 'O', 'H'].includes(e))} />
			<ExtraAtomDefs id={ID} elements={allEls.filter((e) => !['N', 'Cl', 'Na', 'O', 'H'].includes(e))} />

			{/* Legend: the four ions, coloured as they swim */}
			<g opacity={ramp(frame, 0)}>
				{kinds.map((ion, i) => {
					const lx = 118 + i * 175;
					return (
						<g key={ion.label}>
							<Ball id={ID} el={ion.el} x={lx} y={30} r={15} label={ion.charge} labelSize={20} labelColor={ion.ink ?? '#ffffff'} />
							<text x={lx + 24} y={38} fill={TOK.ink} fontSize={22} fontWeight={800}>{ion.label}</text>
						</g>
					);
				})}
			</g>

			{/* Caption line / final net ionic equation */}
			<text x={W / 2} y={84} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={700} opacity={capIn}>
				{caption}
			</text>
			<g opacity={netIn}>
				<text x={W / 2} y={88} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800}>
					{kinds[0].label}(aq) + {kinds[3].label}(aq) → <tspan fill={TOK.amberInk}>{precipitate}(s)</tspan>
				</text>
			</g>

			<DioramaPlinth id={ID} cx={CX} cy={BASE} rx={250}>
				<Beaker cx={CX} baseY={BASE} w={BW} h={BH} level={0.84}>
					{/* solution names on each side until the divider lifts */}
					<g opacity={1 - ramp(frame, tMix - 10, 20)}>
						<text x={(x0 + CX) / 2} y={BASE - BH * 0.84 - 12} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{left.name}</text>
						<text x={(CX + x1) / 2} y={BASE - BH * 0.84 - 12} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{right.name}</text>
					</g>
					{/* white solid mound under the settled pairs */}
					<ellipse cx={CX} cy={yBot + 22} rx={120 * pileIn} ry={22 * pileIn} fill="#ffffff" opacity={0.9} />
					{drawn
						.slice()
						.sort((a, b) => a.y - b.y)
						.map((d) => (
							<Ball key={d.key} id={ID} el={d.el} x={d.x} y={d.y} r={17} label={d.label} labelSize={22} labelColor={d.ink ?? '#ffffff'} opacity={d.spect && frame > tSettle ? 0.95 : 1} />
						))}
					{/* glass divider: lifts out when the solutions are mixed */}
					<rect x={CX - 4} y={BASE - BH - 6 - 240 * divider} width={8} height={BH} rx={3} fill="rgba(170,200,225,0.75)" stroke="rgba(70,90,110,0.5)" strokeWidth={1.5} opacity={1 - divider} />
				</Beaker>
			</DioramaPlinth>

			{/* Precipitate tag */}
			<g opacity={pileIn}>
				<line x1={CX + 104} y1={yBot + 4} x2={CX + 178} y2={yBot - 40} stroke={TOK.amber} strokeWidth={2.5} />
				<rect x={CX + 176} y={yBot - 72} width={150} height={40} rx={20} fill="#ffffff" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<text x={CX + 251} y={yBot - 45} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>{precipitate}(s)</text>
			</g>
			<g opacity={ramp(frame, tSettle, 16)}>
				<text x={96} y={BASE - BH * 0.84 + 30} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.04em">SPECTATORS</text>
				<text x={96} y={BASE - BH * 0.84 + 54} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{kinds[1].label}, {kinds[2].label}</text>
			</g>
		</svg>
	);
};
