// ConductometricDiagram: a scoped HCl/NaOH conductivity illustration.
//
// Left: a beaker of strong acid on a stone plinth, its ions drawn as glossy
// balls. Each unit of NaOH that drips in removes one
// H⁺ as water and leaves one Na⁺ behind; after the equivalence point the
// Na⁺ and OH⁻ just pile up. Right: the ion conductivities from the lesson as
// bars, and a relative conductivity graph from the same counts:
// Σ(λ × n) ÷ total volume, so the V-shape and its minimum at the equivalence
// point are computed for a checked parameter regime. Counts represent equal
// amount units; transport mechanisms and water equilibrium are omitted.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Beaker, GlossDefs, clamp, ease, fadeAt, hash01, popAt} from './shared';
import {interpolate} from 'remotion';
import {CONDUCTOMETRIC_LAMBDA, CONDUCTOMETRIC_DESCRIPTION, createConductometricModel, conductometricAddedAt, conductometricIonArrival, validateQuantitativeDiagram} from '../../quantitative-models.mjs';

export type ConductoProps = {
	/** Molar ionic conductivities from the lesson (H⁺, OH⁻, Cl⁻, Na⁺). */
	lambda?: {H: number; OH: number; Cl: number; Na: number};
	/** Conditions/units for supplied values; default values use the illustrative caption. */
	lambdaCaption?: string;
	/** Acid units in the flask; the titration adds 2 × this many base units. */
	units?: number;
	/** mL of acid, and mL per unit of base (sets the dilution). */
	vAcid?: number;
	vPerUnit?: number;
	barsAt?: number;
	beakerAt?: number;
	runAt?: number;
	epAt?: number;
	endAt?: number;
	minAt?: number;
	note?: {text: string; at: number};
	delay?: number;
};

const ID = 'c12m6cond';
const W = 760;
const H = 530;
const ION = {H: '#f4efe0', OH: '#e0433a', Cl: '#4fbf4a', Na: '#8e5bd6'};

export const ConductometricDiagram = ({
	lambda = CONDUCTOMETRIC_LAMBDA, lambdaCaption, units = 10, vAcid = 25, vPerUnit = 0.25,
	barsAt = 70, beakerAt = 220, runAt = 380, epAt = 590, endAt = 770, minAt = 800, note, delay = 62,
}: ConductoProps) => {
	validateQuantitativeDiagram({type: 'diorama', kind: 'chem12m6Conductometric', props: {lambda, units, vAcid, vPerUnit, barsAt, beakerAt, runAt, epAt, endAt, minAt, note, delay}});
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const N = units;
	const model = createConductometricModel({lambda, units, vAcid, vPerUnit});
	const total = model.totalUnits;
	// Base units added so far (continuous), paced so the EP lands on epAt.
	const added = conductometricAddedAt(frame, N, {runAt, epAt, endAt});
	const done = Math.floor(added + 1e-6);

	const counts = model.ions;
	const kappa = model.signal;
	const kMax = model.maximum;

	// Graph geometry
	const GX0 = 430, GX1 = 730, GY0 = 236, GY1 = 448;
	const gx = (k: number) => GX0 + (k / total) * (GX1 - GX0);
	const gy = (v: number) => GY1 - (v / kMax) * (GY1 - GY0) * 0.92;
	const pts: string[] = [];
	for (let i = 0; i <= 200; i++) {
		const k = (total * i) / 200;
		if (k > added) break;
		pts.push(`${i === 0 ? 'M' : 'L'} ${gx(k).toFixed(1)} ${gy(kappa(k)).toFixed(1)}`);
	}
	if (added > 0) pts.push(`L ${gx(added).toFixed(1)} ${gy(kappa(added)).toFixed(1)}`);

	// Beaker ions
	const cx = 190, baseY = 420, bw = 250, bh = 230;
	const c = counts(done);
	type P = {kind: keyof typeof ION; i: number};
	const balls: P[] = [];
	for (let i = 0; i < N; i++) balls.push({kind: 'Cl', i});
	for (let i = 0; i < c.H; i++) balls.push({kind: 'H', i});
	for (let i = 0; i < c.Na; i++) balls.push({kind: 'Na', i});
	for (let i = 0; i < c.OH; i++) balls.push({kind: 'OH', i});
	const place = (b: P) => {
		const seed = {H: 1, Cl: 2, Na: 3, OH: 4}[b.kind] * 100 + b.i;
		const x = cx - bw / 2 + 30 + hash01(seed) * (bw - 60);
		const y = baseY - 22 - hash01(seed + 57) * (bh * 0.62 - 40);
		// Equal gentle schematic motion, not a measured ion-speed model.
		return {x: x + idleBob(frame * 0.7, seed, 1.2), y: y + idleBob(frame * 0.7, seed + 9, 1.2)};
	};
	const label = {H: 'H⁺', OH: 'OH⁻', Cl: 'Cl⁻', Na: 'Na⁺'};
	const epLive = frame >= epAt;

	const bars = (['H', 'OH', 'Cl', 'Na'] as const);
	const barMax = Math.max(...bars.map((b) => lambda[b]));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={CONDUCTOMETRIC_DESCRIPTION} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={ION} />

			{/* Ion conductivity bars */}
			<g opacity={fadeAt(frame, barsAt)}>
				<text x={GX0 - 10} y={15} fill={TOK.inkDim} fontSize={16} fontWeight={800}>{lambdaCaption ?? (lambda === CONDUCTOMETRIC_LAMBDA ? 'Illustrative λ° / S cm² mol⁻¹, 25 °C' : 'Supplied ionic conductivity values')}</text>
				<text x={GX0 - 10} y={35} fill={TOK.inkDim} fontSize={16} fontWeight={800}>HCl + NaOH in dilute water</text>
				{bars.map((b, i) => {
					const y = 50 + i * 44;
					const w = (lambda[b] / barMax) * 160 * ease(frame, barsAt + i * 8, barsAt + i * 8 + 20);
					const hi = b === 'H';
					return (
						<g key={b}>
							<circle cx={GX0 + 8} cy={y + 14} r={13} fill={`url(#${ID}-g-${b})`} stroke="rgba(0,0,0,0.3)" />
							<text x={GX0 + 34} y={y + 20} fill={TOK.ink} fontSize={18} fontWeight={800}>{label[b]}</text>
							<rect x={GX0 + 84} y={y + 3} width={w} height={22} rx={6} fill={hi ? TOK.amber : theme.accent} opacity={hi ? 0.85 + 0.15 * idlePulse(frame) : 0.75} />
							<text x={GX0 + 92 + w} y={y + 21} fill={hi ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800}>{lambda[b]}</text>
						</g>
					);
				})}
			</g>

			{/* Beaker */}
			<g opacity={fadeAt(frame, beakerAt, 14)}>
				<DioramaPlinth id={ID} cx={cx} cy={baseY + 16} rx={160} />
				<Beaker cx={cx} baseY={baseY} w={bw} h={bh} level={0.66} liquid="rgba(150,190,225,0.22)">
					{balls.map((b, k) => {
						const p = place(b);
						const born = b.kind === 'Na' || b.kind === 'OH' ? popAt(frame, fps, conductometricIonArrival(b.kind, b.i, N, {runAt, epAt, endAt})) : 1;
						return (
							<g key={`${b.kind}${b.i}`} transform={`translate(${p.x},${p.y}) scale(${Math.min(1, born)})`}>
								<circle r={b.kind === 'H' ? 11 : 14} fill={`url(#${ID}-g-${b.kind})`} stroke="rgba(0,0,0,0.3)" />
								<text y={4.5} textAnchor="middle" fill={b.kind === 'H' ? '#333' : '#fff'} fontSize={b.kind === 'H' ? 11 : 12} fontWeight={800}>{label[b.kind]}</text>
							</g>
						);
					})}
				</Beaker>
				{added > 0 && added < total && (
					<circle cx={cx} cy={interpolate((frame % 10) / 10, [0, 1], [baseY - bh - 30, baseY - bh * 0.66])} r={5} fill="rgba(142,91,214,0.7)" />
				)}
				<text x={cx} y={130} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>
					{epLive ? (added > N ? 'after EP: excess OH⁻, Na⁺, Cl⁻' : 'EP: major ions Na⁺ and Cl⁻') : 'H⁺ + OH⁻ → H₂O; Na⁺ accumulates'}
				</text>
				<text x={cx} y={156} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>NaOH added: {done} of {total} units</text>
			</g>

			{/* Relative conductivity graph */}
			<g opacity={fadeAt(frame, beakerAt + 20, 14)}>
				<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<line x1={GX0} y1={GY0} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={(GX0 + GX1) / 2} y={GY1 + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>volume of NaOH →</text>
				<text x={GX0 - 12} y={(GY0 + GY1) / 2} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} transform={`rotate(-90 ${GX0 - 12} ${(GY0 + GY1) / 2})`}>relative conductivity</text>
				{pts.length > 0 && <path d={pts.join(' ')} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />}
				{added > 0 && <circle cx={gx(added)} cy={gy(kappa(added))} r={6} fill={theme.accent} />}
				<g opacity={fadeAt(frame, minAt)}>
					<line x1={gx(N)} y1={GY1} x2={gx(N)} y2={gy(kappa(N))} stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="6 5" />
					<circle cx={gx(N)} cy={gy(kappa(N))} r={8 + 2 * idlePulse(frame)} fill="#ffffff" stroke={TOK.amber} strokeWidth={3.5} />
					<text x={gx(N) + 6} y={gy(kappa(N)) - 64} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800}>HCl/NaOH EP</text>
				</g>
			</g>
			{note && (
				<g opacity={fadeAt(frame, note.at)}>
					{note.text.split('\n').map((ln, i) => (
						<text key={i} x={(GX0 + GX1) / 2} y={H - 30 + i * 22} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{ln}</text>
					))}
				</g>
			)}
		</svg>
	);
};
