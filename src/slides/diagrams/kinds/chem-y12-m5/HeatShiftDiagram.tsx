// HeatShiftDiagram (kind: chem12m5HeatShift) — heat written into the equation.
//
// Two rows. Exothermic forward: heat is written on the product side.
// Endothermic forward: heat on the reactant side. In each row a thermometer
// rises, and the equilibrium mixture on two plinths shifts toward the
// endothermic side (balls hop across, changing colour mid-air), while a Keq
// meter falls (exo) or rises (endo). The rule and the "only temperature
// changes Keq" contrast arrive on their beats.
//
// Generic reactants / products (no invented reaction), no numbers.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {AtomDefs, Ball, clamp, ease, ramp, textW} from './shared';
import {Arrow, PRODUCT, Tag} from './lcKit';

export type HeatShiftProps = {
	delay?: number;
	beats?: {
		exoIn?: number;
		exoHeat?: number;
		exoKeq?: number;
		endoIn?: number;
		endoHeat?: number;
		endoKeq?: number;
		rule?: number;
		onlyT?: number;
		cool?: number;
	};
	ruleText?: string;
	onlyTText?: string;
	coolText?: string;
	labels?: [string, string];
};

const ID = 'c12m5hs';
const W = 760;
const N_BALLS = 10;
const MOVES = 3;
const LX = 122, RX = 382, PRX = 86;
const HEAT = '#d8452f';

export const HeatShiftDiagram = ({
	delay = 62,
	beats = {},
	ruleText = 'Heating always shifts toward the endothermic direction',
	onlyTText = 'Only temperature changes Keq',
	coolText,
	labels = ['reactants', 'products'],
}: HeatShiftProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {exoIn: 142, exoHeat: 263, exoKeq: 399, endoIn: 436, endoHeat: 520, endoKeq: 557, rule: 648, onlyT: 799, cool: 1e9, ...beats};
	const pulse = idlePulse(frame);

	const row = (y0: number, exo: boolean) => {
		const inAt = exo ? b.exoIn : b.endoIn;
		const heatAt = exo ? b.exoHeat : b.endoHeat;
		const keqAt = exo ? b.exoKeq : b.endoKeq;
		const on = ramp(frame, inAt, 16);
		const PY = y0 + 142;
		// initial counts: exo favours products before heating; endo favours reactants
		const startLeft = exo ? 3 : 7;
		const heatUp = ease(interpolate(frame, [heatAt, heatAt + 60], [0, 1], clamp));
		// which balls move, and when
		const movers = Array.from({length: MOVES}, (_, k) => (exo ? startLeft + k : startLeft - 1 - k));
		const moveAt = (k: number) => heatAt + 34 + k * 26;
		const FLIGHT = 26;
		const slotsL = plinthSlots(LX, PY, PRX, N_BALLS);
		const slotsR = plinthSlots(RX, PY, PRX, N_BALLS);
		const balls = Array.from({length: N_BALLS}, (_, i) => {
			const left0 = i < startLeft;
			const k = movers.indexOf(i);
			let x: number, y: number, el: string, mix = 0;
			const sl = slotsL[i], sr = slotsR[N_BALLS - 1 - i];
			if (k < 0) {
				const s = left0 ? sl : sr;
				x = s.x;
				y = s.y + idleBob(frame, i + (exo ? 0 : 20), 1.6);
				el = left0 ? 'A' : 'B';
			} else {
				const t = interpolate(frame, [moveAt(k), moveAt(k) + FLIGHT], [0, 1], clamp);
				const u = ease(t);
				const from = left0 ? sl : sr, to = left0 ? sr : sl;
				x = from.x + (to.x - from.x) * u;
				y = from.y + (to.y - from.y) * u - Math.sin(Math.PI * u) * 70 + (t >= 1 || t <= 0 ? idleBob(frame, i + (exo ? 0 : 20), 1.6) : 0);
				mix = interpolate(t, [0.4, 0.6], [0, 1], clamp);
				el = left0 ? 'A' : 'B';
			}
			const other = el === 'A' ? 'B' : 'A';
			return {i, x, y, el, other, mix};
		});
		balls.sort((p, q) => p.y - q.y);
		const done = interpolate(frame, [moveAt(0), moveAt(MOVES - 1) + FLIGHT], [0, 1], clamp);
		const keqV = exo ? 0.72 - 0.44 * done : 0.28 + 0.44 * done;

		// equation with a heat token
		const EQ = 23;
		const parts = exo ? [`${labels[0]} ⇌ ${labels[1]} + `, 'heat'] : ['heat', ` + ${labels[0]} ⇌ ${labels[1]}`];
		const w0 = textW(parts[0], EQ), w1 = textW(parts[1], EQ);
		const ex = W - 16 - (w0 + w1);
		const heatX = exo ? ex + w0 : ex;
		const heatW = exo ? w1 : w0;
		const tokenGlow = heatUp > 0 ? 0.5 + 0.5 * pulse : 0;

		const thX = 252, thTop = y0 + 58, thBulb = y0 + 150;
		const level = thBulb - 14 - (thBulb - 14 - thTop - 6) * (0.25 + 0.6 * heatUp);

		return (
			<g opacity={on}>
				<rect x={6} y={y0} width={W - 12} height={206} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				<text x={20} y={y0 + 30} fill={theme.accent} fontSize={19} fontWeight={800}>{exo ? 'Exothermic forward (ΔH < 0)' : 'Endothermic forward (ΔH > 0)'}</text>
				{/* equation */}
				<rect x={heatX - 6} y={y0 + 10} width={heatW + 12} height={30} rx={15} fill={HEAT} opacity={0.12 + 0.18 * tokenGlow} />
				<text x={ex} y={y0 + 32} fill={TOK.ink} fontSize={EQ} fontWeight={800}>
					{exo ? (
						<>
							{parts[0]}
							<tspan fill={HEAT}>{parts[1]}</tspan>
						</>
					) : (
						<>
							<tspan fill={HEAT}>{parts[0]}</tspan>
							{parts[1]}
						</>
					)}
				</text>

				{/* plinths */}
				<DioramaPlinth id={`${ID}${exo ? 'x' : 'n'}l`} cx={LX} cy={PY} rx={PRX} />
				<DioramaPlinth id={`${ID}${exo ? 'x' : 'n'}r`} cx={RX} cy={PY} rx={PRX} />
				<text x={LX} y={PY + 56} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>{labels[0]}</text>
				<text x={RX} y={PY + 56} textAnchor="middle" fill={PRODUCT} fontSize={16} fontWeight={800}>{labels[1]}</text>
				{balls.map((p) => (
					<g key={p.i}>
						<Ball id={ID} el={p.el} x={p.x} y={p.y} r={11} opacity={1 - p.mix} shadow={p.mix === 0} />
						{p.mix > 0 && <Ball id={ID} el={p.other} x={p.x} y={p.y} r={11} opacity={p.mix} shadow={p.mix === 1} />}
					</g>
				))}

				{/* thermometer */}
				<rect x={thX - 8} y={thTop} width={16} height={thBulb - thTop} rx={8} fill="#ffffff" stroke={TOK.inkMute} strokeWidth={2} />
				<rect x={thX - 4} y={level} width={8} height={thBulb - level} fill={HEAT} />
				<circle cx={thX} cy={thBulb} r={13} fill={HEAT} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={thX} y={thTop - 8} textAnchor="middle" fill={HEAT} fontSize={16} fontWeight={800} opacity={ramp(frame, heatAt, 12)}>heat</text>

				{/* shift arrow */}
				<g opacity={ramp(frame, heatAt + 30, 14)}>
					{exo ? (
						<Arrow x1={RX - 30} y1={y0 + 70} x2={LX + 44} y2={y0 + 70} color={TOK.amber} w={4 + pulse} />
					) : (
						<Arrow x1={LX + 30} y1={y0 + 70} x2={RX - 44} y2={y0 + 70} color={TOK.amber} w={4 + pulse} />
					)}
					<text x={exo ? LX + 50 : RX - 50} y={y0 + 60} textAnchor={exo ? 'start' : 'end'} fill={TOK.amberInk} fontSize={17} fontWeight={800}>
						{exo ? 'shifts left' : 'shifts right'}
					</text>
				</g>

				{/* Keq meter */}
				<g>
					<text x={600} y={y0 + 86} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>Keq</text>
					<rect x={582} y={y0 + 98} width={36} height={86} rx={8} fill="rgba(0,0,0,0.05)" stroke={TOK.rule} strokeWidth={2} />
					<rect x={582} y={y0 + 184 - 86 * keqV} width={36} height={86 * keqV} rx={8} fill={theme.accent} />
					<g opacity={ramp(frame, keqAt, 14)}>
						<Arrow x1={650} y1={exo ? y0 + 110 : y0 + 176} x2={650} y2={exo ? y0 + 176 : y0 + 110} color={theme.accent} w={4} />
						<text x={668} y={y0 + 138} fill={theme.accent} fontSize={19} fontWeight={800}>{exo ? 'falls' : 'rises'}</text>
					</g>
				</g>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Heat written into the equation: for an exothermic forward reaction heat is a product, so heating shifts the equilibrium left and Keq falls; for an endothermic forward reaction heat is a reactant, so heating shifts right and Keq rises" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['A', 'B']} />
			{row(4, true)}
			{row(218, false)}
			<Tag x={W / 2} y={454} text={ruleText} color={TOK.amber} ink={TOK.amberInk} size={19} anchor="middle" opacity={ramp(frame, b.rule, 14)} strokeWidth={2 + pulse} />
			<Tag x={W / 2} y={500} text={onlyTText} color={theme.accent} ink={theme.accent} size={18} anchor="middle" opacity={ramp(frame, b.onlyT, 14)} />
			{coolText && (
				<text x={W - 20} y={206} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={ramp(frame, b.cool, 14)}>{coolText}</text>
			)}
		</svg>
	);
};
