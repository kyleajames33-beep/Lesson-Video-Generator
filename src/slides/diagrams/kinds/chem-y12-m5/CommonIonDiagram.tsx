// CommonIonDiagram (kind: chem12m5CommonIon) — adding a shared ion lowers
// solubility, and Ksp stays put.
//
// Left: a beaker of saturated AgCl on a plinth. A small AgCl crystal sits on
// the floor; a few Ag⁺ and Cl⁻ ions swim, and some keep docking onto the
// crystal and leaving again (the dissolution equilibrium is dynamic). On the
// add beat, Na⁺ and Cl⁻ rain in from above (NaCl added). Qsp > Ksp, the
// equilibrium shifts left (arrow under the equation) and Ag⁺ ions pair with
// Cl⁻ and join the crystal: fewer Ag⁺ stay dissolved.
//
// Right: readouts. Solubility in pure water is √Ksp; in the NaCl solution
// [Ag⁺] = Ksp ÷ [Cl⁻] (amber). Ksp itself is computed from the scene's own
// numbers ([Ag⁺] in NaCl × [Cl⁻]) and shown on an "unchanged" chip.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AtomDefs, Ball, Beaker, Card, Pill, bounce, clamp, ease, hash01, ramp, sci, textW} from './shared';

export type CommonIonProps = {
	delay?: number;
	equation?: string;
	salt?: string;
	added?: string;
	/** [Ag⁺] (mol L⁻¹) in the common-ion solution, as the scene states it. */
	agInCommon?: number;
	/** Concentration (mol L⁻¹) of the common ion supplied. */
	common?: number;
	commonLabel?: string;
	beats?: {add?: number; qsp?: number; ppt?: number; less?: number; pure?: number; inCommon?: number; thousands?: number; ksp?: number; temp?: number};
};

const ID = 'c12m5ci';
const W = 760;
const H = 530;
const AG = {el: 'Ag', ink: '#3a3f47'};
const CL = {el: 'Cl'};
const NA = {el: 'Na'};

// Beaker geometry
const BX = 200;
const BASE = 432;
const BWD = 270;
const BHT = 236;
const LEVEL = 0.8;
const R = 13;

export const CommonIonDiagram = ({
	delay = 62,
	equation = 'AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)',
	salt = 'AgCl',
	added = 'NaCl(aq)',
	agInCommon = 1.8e-9,
	common = 0.1,
	commonLabel = 'NaCl',
	beats = {},
}: CommonIonProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const bt = {add: 105, qsp: 243, ppt: 353, less: 380, pure: 463, inCommon: 642, thousands: 822, ksp: 856, temp: 1035, ...beats};

	// ── Chemistry, computed from the scene's numbers ──
	const ksp = agInCommon * common; // Ksp = [Ag⁺][Cl⁻]
	const sPure = Math.sqrt(ksp); // s² = Ksp in pure water
	const commonText = common.toFixed(2);

	// ── Swim region ──
	const x0 = BX - BWD / 2 + 22, x1 = BX + BWD / 2 - 22;
	const y0 = BASE - BHT * LEVEL + 20, y1 = BASE - 70;
	const swim = (seed: number) => ({
		x: bounce(x0 + hash01(seed) * (x1 - x0), (0.3 + hash01(seed + 1) * 0.3) * (hash01(seed + 2) > 0.5 ? 1 : -1), frame, x0, x1),
		y: bounce(y0 + hash01(seed + 3) * (y1 - y0), (0.2 + hash01(seed + 4) * 0.25) * (hash01(seed + 5) > 0.5 ? 1 : -1), frame, y0, y1),
	});

	// ── Crystal: rows of alternating Ag / Cl on the floor ──
	const cell = 21;
	const crystal: {x: number; y: number; el: string}[] = [];
	for (let r = 0; r < 2; r++)
		for (let c = 0; c < 6; c++) crystal.push({x: BX - 2.5 * cell + c * cell + (r % 2) * 5, y: BASE - 20 - r * 17, el: (r + c) % 2 === 0 ? 'Ag' : 'Cl'});
	// Growth slots (third row) for precipitated pairs, and dock slots for the exchange.
	const growSlot = (i: number) => ({x: BX - 2.5 * cell + (i + 0.5) * cell, y: BASE - 20 - 2 * 17});
	const dockSlot = (i: number) => ({x: BX - 2.5 * cell + (4.8 + (i % 2) * 0.9) * cell, y: BASE - 20 - 2 * 17 - (i > 1 ? 17 : 0)});

	// ── Ions ──
	type Ion = {key: string; el: string; sign: '+' | '−'; ink?: string; born: number; drop: boolean; ppt?: number; pptSlot?: number; dock?: number};
	const ions: Ion[] = [];
	for (let k = 0; k < 4; k++) ions.push({key: `ag${k}`, ...AG, sign: '+', born: 0, drop: false, dock: k < 2 ? k : undefined});
	for (let k = 0; k < 4; k++) ions.push({key: `cl${k}`, ...CL, sign: '−', born: 0, drop: false, dock: k < 2 ? k + 2 : undefined});
	for (let k = 0; k < 5; k++) {
		ions.push({key: `na${k}`, ...NA, sign: '+', born: bt.add + k * 9, drop: true});
		ions.push({key: `xc${k}`, ...CL, sign: '−', born: bt.add + 4 + k * 9, drop: true});
	}
	// Precipitation: three Ag⁺ pair with three Cl⁻ (two of them from the added NaCl).
	const pptAg = ['ag0', 'ag1', 'ag2'];
	const pptCl = ['cl0', 'xc0', 'xc1'];
	pptAg.forEach((k, i) => {
		const ion = ions.find((q) => q.key === k)!;
		ion.ppt = bt.ppt + i * 26;
		ion.pptSlot = i * 2;
	});
	pptCl.forEach((k, i) => {
		const ion = ions.find((q) => q.key === k)!;
		ion.ppt = bt.ppt + i * 26;
		ion.pptSlot = i * 2 + 1;
	});

	const PERIOD = 170;
	const drawn = ions.map((ion, i) => {
		const seed = i * 17 + 3;
		const sw = swim(seed);
		let x = sw.x, y = sw.y;
		let op = ion.drop ? ramp(frame, ion.born, 10) : ramp(frame, 4 + i * 2, 10);
		if (ion.drop) {
			const d = ease(ramp(frame, ion.born, 26));
			const sx = BX - 40 + hash01(seed + 9) * 80;
			x = sx + (sw.x - sx) * d;
			y = BASE - BHT - 40 + (sw.y - (BASE - BHT - 40)) * d;
		}
		// Dynamic exchange: dock on the crystal, sit, leave again (stops once precipitation starts).
		if (ion.dock !== undefined && (ion.ppt === undefined || frame < ion.ppt - 40)) {
			const ph = (frame + ion.dock * 42) % PERIOD;
			const ds = dockSlot(ion.dock);
			const inAmt = ph < 110 ? 0 : ph < 128 ? ease((ph - 110) / 18) : ph < 152 ? 1 : 1 - ease((ph - 152) / 18);
			x += (ds.x - x) * inAmt;
			y += (ds.y - y) * inAmt;
		}
		if (ion.ppt !== undefined) {
			const u = ease(interpolate(frame, [ion.ppt - 30, ion.ppt + 10], [0, 1], clamp));
			const gs = growSlot(ion.pptSlot!);
			x += (gs.x - x) * u;
			y += (gs.y - y) * u;
		}
		return {ion, x: x + idleBob(frame, i, 0.8), y, op};
	});

	// ── Readouts ──
	const RX0 = 420;
	const logIn = (at: number) => ramp(frame, at, 14);
	const arrowIn = ramp(frame, bt.qsp, 14) * (1 - 0.6 * ramp(frame, bt.less + 40, 30));
	const kspOn = ramp(frame, bt.ksp, 16);
	const eqW = textW(equation, 26);
	const eqX0 = W / 2 - eqW / 2;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Common ion effect: adding ${added} to saturated ${salt} pushes Qsp above Ksp, the equilibrium shifts left and ${salt} precipitates; solubility falls from ${sci(sPure)} to ${sci(agInCommon)} mol per litre while Ksp stays ${sci(ksp)}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['Ag', 'Cl', 'Na']} />

			{/* Equation + shift arrow */}
			<text x={W / 2} y={38} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={ramp(frame, 0)}>{equation}</text>
			<g opacity={arrowIn}>
				<line x1={eqX0 + eqW * 0.82} y1={60} x2={eqX0 + eqW * 0.16} y2={60} stroke={theme.accent} strokeWidth={5} strokeLinecap="round" />
				<path d={`M ${eqX0 + eqW * 0.16 - 8} 60 L ${eqX0 + eqW * 0.16 + 12} 49 L ${eqX0 + eqW * 0.16 + 12} 71 Z`} fill={theme.accent} />
				<text x={eqX0 + eqW * 0.49} y={88} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>shifts left</text>
			</g>

			{/* Add label */}
			<g opacity={interpolate(frame, [bt.add - 10, bt.add + 4, bt.add + 70, bt.add + 100], [0, 1, 1, 0], clamp)}>
				<text x={BX} y={150} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>+ {added}</text>
				<path d={`M ${BX} 160 L ${BX} 180`} stroke={TOK.ink} strokeWidth={3} strokeLinecap="round" />
				<path d={`M ${BX - 7} 175 L ${BX} 184 L ${BX + 7} 175`} stroke={TOK.ink} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
			</g>

			{/* Beaker */}
			<g opacity={ramp(frame, 2)}>
				<DioramaPlinth id={ID} cx={BX} cy={BASE + 4} rx={172}>
					<Beaker cx={BX} baseY={BASE} w={BWD} h={BHT} level={LEVEL}>
						{crystal.map((c, i) => (
							<Ball key={`x${i}`} id={ID} el={c.el} x={c.x} y={c.y} r={11} />
						))}
						{drawn
							.slice()
							.sort((p, q) => p.y - q.y)
							.map(({ion, x, y, op}) => (
								<Ball key={ion.key} id={ID} el={ion.el} x={x} y={y} r={ion.ppt !== undefined && frame > ion.ppt ? 11 : R} label={ion.ppt !== undefined && frame > ion.ppt ? undefined : ion.sign} labelSize={17} labelColor={ion.ink ?? '#ffffff'} opacity={op} />
							))}
					</Beaker>
				</DioramaPlinth>
				<g opacity={ramp(frame, bt.ppt + 60, 16)}>
					<line x1={BX + 50} y1={BASE - 40} x2={BX + 96} y2={BASE - 62} stroke={TOK.inkMute} strokeWidth={2} />
					<text x={BX + 100} y={BASE - 60} fill={TOK.ink} fontSize={17} fontWeight={800}>{salt}(s) grows</text>
				</g>
			</g>

			{/* Right panel */}
			<g opacity={ramp(frame, 6)}>
				{[
					{el: 'Ag', t: 'Ag⁺', s: '+', ink: AG.ink},
					{el: 'Cl', t: 'Cl⁻', s: '−'},
					{el: 'Na', t: 'Na⁺', s: '+'},
				].map((it, i) => (
					<g key={i}>
						<Ball id={ID} el={it.el} x={RX0 + 14 + i * 100} y={116} r={R} label={it.s} labelSize={17} labelColor={it.ink ?? '#ffffff'} />
						<text x={RX0 + 34 + i * 100} y={122} fill={TOK.ink} fontSize={18} fontWeight={800}>{it.t}</text>
					</g>
				))}
			</g>
			<g>
				<text x={RX0} y={160} fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={logIn(0)}>saturated: Qsp = Ksp</text>
				<text x={RX0} y={186} fill={TOK.ink} fontSize={18} fontWeight={800} opacity={logIn(bt.qsp)}>more Cl⁻, so Qsp {'>'} Ksp</text>
				<text x={RX0} y={212} fill={TOK.ink} fontSize={18} fontWeight={800} opacity={logIn(bt.ppt)}>{salt} precipitates, [Ag⁺] falls</text>
			</g>

			<Card x={RX0 - 12} y={230} w={W - RX0 + 4} h={200} opacity={logIn(bt.pure - 10)}>
				<text x={RX0} y={256} fill={TOK.inkDim} fontSize={16} fontWeight={800} letterSpacing="0.05em">SOLUBILITY OF {salt}</text>
				<g opacity={logIn(bt.pure)}>
					<text x={RX0} y={284} fill={TOK.ink} fontSize={18} fontWeight={800}>in pure water:</text>
					<text x={RX0} y={310} fill={TOK.ink} fontSize={20} fontWeight={800}>≈ {sci(sPure)} mol L⁻¹</text>
				</g>
				<g opacity={logIn(bt.inCommon)}>
					<text x={RX0} y={344} fill={TOK.ink} fontSize={18} fontWeight={800}>in {commonText} mol L⁻¹ {commonLabel}:</text>
					<text x={RX0} y={370} fill={TOK.ink} fontSize={20} fontWeight={800}>[Ag⁺] = Ksp ÷ {commonText}</text>
					<text x={RX0 + 60} y={404} fill={TOK.amberInk} fontSize={22} fontWeight={800}>= {sci(agInCommon)} mol L⁻¹</text>
				</g>
			</Card>
			<text x={RX0} y={458} fill={theme.accent} fontSize={18} fontWeight={800} opacity={logIn(bt.thousands)}>thousands of times less soluble</text>

			<g opacity={kspOn}>
				<Pill x={RX0 + 150} y={490} text={`Ksp = ${sci(ksp)}: unchanged`} color={TOK.ink} ink={TOK.ink} size={18} strokeWidth={2 + (frame > bt.ksp + 20 ? idlePulse(frame) * 1.2 : 0)} />
			</g>
			<text x={RX0 + 150} y={524} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={logIn(bt.temp)}>only temperature changes Ksp</text>
		</svg>
	);
};
