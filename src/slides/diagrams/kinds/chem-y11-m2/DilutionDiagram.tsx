// DilutionDiagram (kind: chem11m2Dilution): "same moles, more volume".
//
// One tall graduated beaker on a plinth. The solute particles are counted in
// at V₁ and stay the same particles for the whole scene; water pours in from a
// jug, the level climbs to V₂, the particles spread out through the bigger
// volume and the tint pales, so concentration visibly drops while the amount
// of solute does not. A side panel keeps score (moles same, volume up,
// concentration down) and writes c₁V₁ = c₂V₂, with the lesson's numbers if
// given (c₂ is computed: c₁ × V₁ ÷ V₂). An optional bracket marks the water
// added, for the trap "V₂ is the total volume, not the water added".

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, LANE, TrapLine, clamp, shade} from './parts';

export type DilutionProps = {
	/** Volumes (numbers) for numeric mode; omit for a symbolic V₁ → V₂ build. */
	v1?: number;
	v2?: number;
	unit?: string;
	c1?: number;
	cUnit?: string;
	c1Dp?: number;
	c2Dp?: number;
	particles?: number;
	beats?: {before?: number; pour?: number; same?: number; drop?: number; formula?: number; added?: number; trap?: number};
	trap?: string;
	delay?: number;
};

const ID = 'c11m2dil';
const W = 760;
const VB_H = 520;
const BX = 214, BASE = 404, BW = 184, BH = 318;
const POUR = 110;

const fmt = (x: number, dp: number) => x.toFixed(dp);

export const DilutionDiagram = ({
	v1,
	v2,
	unit = 'mL',
	c1,
	cUnit = 'mol L⁻¹',
	c1Dp = 0,
	c2Dp = 1,
	particles = 14,
	beats = {},
	trap,
	delay = 62,
}: DilutionProps) => {
	const frame = useCurrentFrame() - delay;
	const fade = (d: number | undefined, len = 12) => (d === undefined ? 0 : interpolate(frame, [d, d + len], [0, 1], clamp));
	const pulse = idlePulse(frame);
	const numeric = v1 !== undefined && v2 !== undefined;
	const V1 = v1 ?? 1, V2 = v2 ?? 3;
	const cap = numeric ? V2 * 1.2 : V2 * 1.25;
	const bPour = beats.pour ?? 60;
	const pour = interpolate(frame, [bPour, bPour + POUR], [0, 1], clamp);
	const vol = V1 + (V2 - V1) * pour;
	const level = vol / cap;
	const liqTop = BASE - 4 - (BH - 8) * level;
	const conc = V1 / vol; // relative to c₁
	const c2 = c1 !== undefined && numeric ? (c1 * V1) / V2 : undefined;

	// Particles: fixed set, spread through whatever liquid there is.
	const pts = Array.from({length: particles}, (_, i) => ({
		u: 0.08 + 0.84 * ((i * 0.618034) % 1),
		v: 0.1 + 0.8 * ((i * 0.414214 + 0.13) % 1),
	}));
	const deep = '#2f6fb5';
	const tintOpacity = 0.14 + 0.62 * conc;

	// Graduation marks (numeric: every 100 mL; symbolic: V₁ and V₂ only).
	const yOf = (v: number) => BASE - 4 - (BH - 8) * (v / cap);
	const step = numeric ? (V2 >= 400 ? 100 : 50) : 0;
	const marks = numeric ? Array.from({length: Math.floor(cap / step)}, (_, i) => (i + 1) * step) : [];

	const volText = (v: number, sym: string) => (numeric ? `${Math.round(v)} ${unit}` : sym);
	const pouring = frame > bPour - 6 && frame < bPour + POUR + 4;
	const jugTilt = interpolate(frame, [bPour - 20, bPour, bPour + POUR, bPour + POUR + 20], [0, 1, 1, 0], clamp);

	const panelX = 486;
	const row = (y: number, label: string, value: string, color: string, opacity: number, strong = false) => (
		<g opacity={opacity}>
			<text x={panelX} y={y} fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.06em">{label}</text>
			<text x={panelX} y={y + 30} fill={color} fontSize={strong ? 27 : 25} fontWeight={900}>{value}</text>
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label="Dilution: the same moles of solute spread through a larger volume, so the concentration falls" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<clipPath id={`${ID}-liq`}>
					<rect x={BX - BW / 2 + 4} y={liqTop} width={BW - 8} height={BASE - 4 - liqTop} />
				</clipPath>
			</defs>

			<g opacity={fade(0, 16)}>
				<DioramaPlinth id={ID} cx={BX} cy={BASE + 6} rx={170} />
			</g>

			{/* Jug pouring water */}
			<g opacity={fade(bPour - 30, 16) * (1 - fade(bPour + POUR + 40, 20))}>
				<g transform={`translate(${BX + 150}, ${BASE - BH - 8}) rotate(${-38 * jugTilt})`}>
					<path d="M -30 -40 L 30 -40 L 26 36 Q 26 44 18 44 L -18 44 Q -26 44 -26 36 Z" fill={LANE.glass} stroke={LANE.glassEdge} strokeWidth={2.5} />
					<path d="M -28 -8 L 28 -8 L 26 36 Q 26 42 18 42 L -18 42 Q -24 42 -24 36 Z" fill={LANE.liquid} opacity={0.35} />
					<path d="M -30 -40 L -42 -48 L -30 -30" fill="none" stroke={LANE.glassEdge} strokeWidth={2.5} />
					<path d="M 30 -26 Q 48 -16 30 14" fill="none" stroke={LANE.glassEdge} strokeWidth={4} />
				</g>
				{pouring && (
					<path d={`M ${BX + 108} ${BASE - BH - 24} Q ${BX + 60} ${BASE - BH - 20} ${BX + 44} ${liqTop}`} stroke={LANE.liquid} strokeWidth={7} fill="none" opacity={0.75} strokeLinecap="round" />
				)}
			</g>

			{/* Liquid + particles */}
			<g opacity={fade(4, 14)}>
				<rect x={BX - BW / 2 + 4} y={liqTop} width={BW - 8} height={BASE - 4 - liqTop} fill={shade(deep, 0.25)} opacity={tintOpacity} />
				<ellipse cx={BX} cy={liqTop} rx={BW / 2 - 4} ry={7} fill={shade(deep, 0.4)} opacity={tintOpacity * 0.9} />
				<g clipPath={`url(#${ID}-liq)`}>
					{pts.map((p, i) => {
						const x = BX - BW / 2 + 14 + p.u * (BW - 28) + idleBob(frame, i, 2.4);
						const y = BASE - 12 - p.v * (BASE - 16 - liqTop - 14) + idleBob(frame, i + 30, 2.4);
						return <Ball key={i} x={x} y={y} r={11} color={LANE.given} />;
					})}
				</g>
			</g>

			{/* Glass */}
			<g opacity={fade(0, 14)}>
				<path d={`M ${BX - BW / 2 - 8} ${BASE - BH} L ${BX - BW / 2} ${BASE - BH + 8} L ${BX - BW / 2} ${BASE - 8} Q ${BX - BW / 2} ${BASE} ${BX - BW / 2 + 8} ${BASE} L ${BX + BW / 2 - 8} ${BASE} Q ${BX + BW / 2} ${BASE} ${BX + BW / 2} ${BASE - 8} L ${BX + BW / 2} ${BASE - BH}`} fill={LANE.glass} stroke={LANE.glassEdge} strokeWidth={3} strokeLinejoin="round" />
				<rect x={BX - BW / 2 + 10} y={BASE - BH + 16} width={8} height={BH - 36} rx={4} fill="#ffffff" opacity={0.45} />
				{marks.map((m) => (
					<g key={m}>
						<line x1={BX + BW / 2 - 22} x2={BX + BW / 2 - 4} y1={yOf(m)} y2={yOf(m)} stroke={LANE.glassEdge} strokeWidth={2} />
						<text x={BX + BW / 2 - 28} y={yOf(m) + 5} textAnchor="end" fill={TOK.inkMute} fontSize={15} fontWeight={700}>{m}</text>
					</g>
				))}
			</g>

			{/* V₁ / V₂ level tags on the left of the beaker */}
			<g opacity={fade(beats.before ?? 0)}>
				<line x1={BX - BW / 2 - 14} x2={BX - BW / 2 + 6} y1={yOf(V1)} y2={yOf(V1)} stroke={LANE.given} strokeWidth={3} />
				<text x={BX - BW / 2 - 18} y={yOf(V1) + 7} textAnchor="end" fill={LANE.given} fontSize={21} fontWeight={900}>V₁</text>
			</g>
			<g opacity={fade(bPour + POUR - 10)}>
				<line x1={BX - BW / 2 - 14} x2={BX - BW / 2 + 6} y1={yOf(V2)} y2={yOf(V2)} stroke={LANE.moles} strokeWidth={3} />
				<text x={BX - BW / 2 - 18} y={yOf(V2) + 7} textAnchor="end" fill={LANE.moles} fontSize={21} fontWeight={900}>V₂</text>
			</g>

			{/* Water-added bracket (numeric trap) */}
			{numeric && beats.added !== undefined && (
				<g opacity={fade(beats.added)}>
					<path d={`M ${BX + BW / 2 + 12} ${yOf(V1)} h 10 V ${yOf(V2)} h -10`} fill="none" stroke={TOK.inkMute} strokeWidth={2.5} />
					<text x={BX + BW / 2 + 30} y={(yOf(V1) + yOf(V2)) / 2 - 4} fill={TOK.inkDim} fontSize={17} fontWeight={800}>water</text>
					<text x={BX + BW / 2 + 30} y={(yOf(V1) + yOf(V2)) / 2 + 16} fill={TOK.inkDim} fontSize={17} fontWeight={800}>added</text>
					<text x={BX + BW / 2 + 30} y={(yOf(V1) + yOf(V2)) / 2 + 38} fill={TOK.inkDim} fontSize={18} fontWeight={900}>{Math.round(V2 - V1)} {unit}</text>
				</g>
			)}

			{/* Score panel */}
			{row(118, 'MOLES OF SOLUTE', 'the same', LANE.given, fade(beats.same ?? bPour + POUR))}
			{row(190, 'VOLUME', `${volText(V1, 'V₁')} → ${volText(V2, 'V₂')}`, LANE.moles, fade(bPour + POUR - 10))}
			{row(262, 'CONCENTRATION', c1 !== undefined && c2 !== undefined ? `${fmt(c1, c1Dp)} → ${fmt(c2, c2Dp)} ${cUnit}` : 'c₁ → lower c₂', LANE.moles, fade(beats.drop ?? bPour + POUR + 30))}

			<g opacity={fade(beats.formula)}>
				<rect x={panelX - 14} y={318} width={268} height={c2 !== undefined ? 124 : 70} rx={16} fill={TOK.bgLift} stroke={LANE.moles} strokeWidth={2.5} />
				<text x={panelX + 120} y={364} textAnchor="middle" fill={TOK.ink} fontSize={32} fontWeight={900}>c₁V₁ = c₂V₂</text>
				{c1 !== undefined && c2 !== undefined && (
					<g>
						<text x={panelX + 120} y={398} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={800}>{`${fmt(c1, c1Dp)} × ${V1} = c₂ × ${V2}`}</text>
						<text x={panelX + 120} y={428} textAnchor="middle" fill={LANE.moles} fontSize={23} fontWeight={900}>{`c₂ = ${fmt(c2, c2Dp)} ${cUnit}`}</text>
					</g>
				)}
			</g>

			{trap && <TrapLine x={W / 2} y={34} text={trap} opacity={fade(beats.trap, 14)} pulse={pulse} />}
		</svg>
	);
};
