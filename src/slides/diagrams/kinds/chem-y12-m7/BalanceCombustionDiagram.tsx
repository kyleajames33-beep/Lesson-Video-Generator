// BalanceCombustionDiagram (chem12m7BalanceCombustion): balancing a complete
// combustion equation in the fixed order C, then H, then O.
//
// Config-driven: give the fuel as counts {C, H, O?} and every coefficient is
// computed here, never typed in, so the equation on screen is always balanced.
//   step C   CO₂ coefficient = number of C atoms in the fuel
//   step H   H₂O coefficient = half the number of H atoms
//   step O   O₂ coefficient = (O atoms on the right − O in the fuel) ÷ 2;
//            if that is a fraction, every coefficient is doubled
// Under the equation an atom tally (left | right) fills in as each step lands,
// and the element being balanced is the only highlighted row.
//
// Beats are frames after `delay`. Hold: the finished equation stays still (it
// is the reading task); only the tally's tick marks breathe.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {idlePulse} from '../../diorama';
import {fadeAt} from './mol';

export type BalanceCombustionProps = {
	fuel: {C: number; H: number; O?: number};
	/** Display name, e.g. "butane". */
	name?: string;
	at?: {equation?: number; carbon?: number; hydrogen?: number; oxygen?: number; double?: number; rule?: number};
	ruleText?: string;
	delay?: number;
};

const ID = 'c12m7bc';
const W = 760;
const H = 530;
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const sub = (n: number) => (n === 1 ? '' : String(n).replace(/\d/g, (d) => SUB[Number(d)]));
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

export const formulaOfFuel = (f: {C: number; H: number; O?: number}) => `C${sub(f.C)}H${sub(f.H)}${f.O ? `O${sub(f.O)}` : ''}`;

/** Coefficients for complete combustion, smallest whole numbers. */
export const combustionCoefficients = (f: {C: number; H: number; O?: number}) => {
	// Work in halves: fuel 1, CO2 C, H2O H/2, O2 = (2C + H/2 - O)/2.
	const o = f.O ?? 0;
	const twiceO2 = 2 * f.C + f.H / 2 - o; // = 2 × (O₂ coefficient)
	const half = {fuel: 2, co2: 2 * f.C, h2o: f.H, o2: twiceO2}; // everything ×2
	const g = [half.fuel, half.co2, half.h2o, half.o2].reduce(gcd);
	return {
		firstPass: {fuel: 1, co2: f.C, h2o: f.H / 2, o2: twiceO2 / 2},
		final: {fuel: half.fuel / g, co2: half.co2 / g, h2o: half.h2o / g, o2: half.o2 / g},
		doubled: g === 1,
	};
};

const fmt = (x: number) => (Number.isInteger(x) ? String(x) : `${Math.round(x * 2)}/2`);

export const BalanceCombustionDiagram = ({fuel, name, at = {}, ruleText = 'Balance C, then H, then O last', delay = 62}: BalanceCombustionProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const t = {
		equation: at.equation ?? 0,
		carbon: at.carbon ?? 120,
		hydrogen: at.hydrogen ?? 260,
		oxygen: at.oxygen ?? 420,
		double: at.double ?? 560,
		rule: at.rule ?? 720,
	};
	const {firstPass, final, doubled} = combustionCoefficients(fuel);
	const o = fuel.O ?? 0;
	const dbl = doubled ? fadeAt(frame, t.double, 14) > 0.5 : false;
	const coef = dbl ? final : firstPass;

	// Which coefficients are shown yet (1 is written as blank, as in chemistry).
	const showC = frame >= t.carbon;
	const showH = frame >= t.hydrogen;
	const showO = frame >= t.oxygen;
	const active: 'C' | 'H' | 'O' | null = frame >= t.rule ? null : showO ? 'O' : showH ? 'H' : showC ? 'C' : null;

	// Equation layout: [coef][fuel] + [coef]O₂ → [coef]CO₂ + [coef]H₂O
	const EQ_Y = 132;
	const SIZE = 40;
	const fuelF = formulaOfFuel(fuel);
	const parts: {key: string; coef: string; formula: string; visible: boolean; tAt: number; hi: boolean}[] = [
		{key: 'fuel', coef: dbl ? fmt(coef.fuel) : '', formula: fuelF, visible: true, tAt: t.double, hi: false},
		{key: 'o2', coef: showO ? fmt(coef.o2) : '', formula: 'O₂', visible: true, tAt: t.oxygen, hi: active === 'O'},
		{key: 'co2', coef: showC ? fmt(coef.co2) : '', formula: 'CO₂', visible: true, tAt: t.carbon, hi: active === 'C'},
		{key: 'h2o', coef: showH ? fmt(coef.h2o) : '', formula: 'H₂O', visible: true, tAt: t.hydrogen, hi: active === 'H'},
	];
	// Atom tally. Left side counts fuel + O₂; right side counts CO₂ + H₂O.
	const n = coef;
	const left = {C: fuel.C * n.fuel, H: fuel.H * n.fuel, O: o * n.fuel + (showO ? 2 * n.o2 : 0)};
	const right = {C: showC ? n.co2 : 0, H: showH ? 2 * n.h2o : 0, O: (showC ? 2 * n.co2 : 0) + (showH ? n.h2o : 0)};
	const rows: {el: 'C' | 'H' | 'O'; tAt: number; done: boolean}[] = [
		{el: 'C', tAt: t.carbon, done: showC},
		{el: 'H', tAt: t.hydrogen, done: showH},
		{el: 'O', tAt: t.oxygen, done: showO},
	];
	const TX = 210, TY = 228, RH = 62;
	const pulse = 0.6 + 0.4 * idlePulse(frame, 60);

	const stepText: Record<'C' | 'H' | 'O', string> = {
		C: `1  carbon first: ${fuel.C} C, so ${fuel.C} CO₂`,
		H: `2  hydrogen next: ${fuel.H} H, so ${fuel.H / 2} H₂O`,
		O: `3  oxygen last: ${2 * fuel.C + fuel.H / 2}${o ? ` − ${o}` : ''} O on the right ÷ 2 = ${fmt(firstPass.o2)} O₂`,
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Balancing the complete combustion of ${name ?? fuelF}: carbon first, then hydrogen, then oxygen`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{name && (
				<text x={W / 2} y={46} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800} opacity={fadeAt(frame, t.equation, 14)}>
					complete combustion of {name}
				</text>
			)}

			{/* equation: one text run, so the font sets the spacing */}
			<text x={W / 2} y={EQ_Y} textAnchor="middle" fontSize={SIZE} fontWeight={800} fill={TOK.ink} opacity={fadeAt(frame, t.equation, 16)}>
				{parts.map((p, i) => (
					<tspan key={p.key}>
						{i === 1 && <tspan fill={TOK.inkDim}> + </tspan>}
						{i === 2 && <tspan fill={TOK.inkDim}> → </tspan>}
						{i === 3 && <tspan fill={TOK.inkDim}> + </tspan>}
						{p.coef && (
							<tspan fill={theme.accent} textDecoration={p.hi ? 'underline' : undefined} opacity={fadeAt(frame, p.tAt, 10)}>
								{p.coef}
							</tspan>
						)}
						<tspan>{p.formula}</tspan>
					</tspan>
				))}
			</text>

			{/* atom tally */}
			<g opacity={fadeAt(frame, t.carbon - 20, 14)}>
				<text x={TX + 120} y={TY - 22} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>atoms on the left</text>
				<text x={TX + 330} y={TY - 22} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>atoms on the right</text>
				{rows.map((r, k) => {
					const y = TY + k * RH;
					const isActive = active === r.el;
					const l = left[r.el], rr = right[r.el];
					const ok = r.done && l === rr;
					return (
						<g key={r.el}>
							<rect x={TX - 60} y={y - 4} width={460} height={RH - 12} rx={12} fill={isActive ? `rgba(${theme.cardTint},0.14)` : '#ffffff'} stroke={isActive ? theme.accent : TOK.rule} strokeWidth={isActive ? 2.5 : 1.5} />
							<text x={TX - 30} y={y + 32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{r.el}</text>
							<text x={TX + 120} y={y + 32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{r.el === 'O' && !showO ? '?' : fmt(l)}</text>
							<text x={TX + 225} y={y + 32} textAnchor="middle" fill={TOK.inkMute} fontSize={22} fontWeight={800}>{ok ? '=' : '|'}</text>
							<text x={TX + 330} y={y + 32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={r.done ? 1 : 0.25}>{r.done ? fmt(rr) : '?'}</text>
							{ok && (
								<path d={`M ${TX + 372} ${y + 22} l 8 9 l 16 -18`} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" opacity={(frame >= t.rule ? pulse : 1) * fadeAt(frame, r.tAt + 10, 10)} />
							)}
						</g>
					);
				})}
			</g>

			{/* step notes: each replaces the previous */}
			{rows.map((r, k) => {
				const next = rows[k + 1]?.tAt ?? (doubled ? t.double : t.rule);
				return (
					<text key={r.el} x={W / 2} y={428} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800} opacity={fadeAt(frame, r.tAt, 12) * (1 - fadeAt(frame, next, 10))}>
						{stepText[r.el]}
					</text>
				);
			})}
			{doubled && (
				<text x={W / 2} y={428} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800} opacity={fadeAt(frame, t.double, 12) * (1 - fadeAt(frame, t.rule, 10))}>
					a fraction: double every coefficient
				</text>
			)}

			<text x={W / 2} y={H - 30} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, t.rule, 16)}>{ruleText}</text>
		</svg>
	);
};
