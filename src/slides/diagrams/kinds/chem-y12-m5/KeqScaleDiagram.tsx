// KeqScaleDiagram (kind: chem12m5KeqScale) — what the size of Keq means.
//
// A long log scale of Keq with three bands (reactants favoured below 10⁻³,
// both present around 1, products favoured above 10³) lights up band by band.
// Then each reaction lands on the scale in turn: a pin drops at its Keq and a
// card below shows the equation, the value and a mini plinth with the mixture
// at equilibrium (mostly reactant molecules, a real mix, or mostly product).
// A caution chip closes it: magnitude is position, not rate.
//
// Beats are frames after `delay`.

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, Molecule, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {AtomDefs, eramp, ramp, sup} from './shared';
import {P, Rich, VIOLET, kbW} from './kbKit';

export type KeqScaleReaction = {
	eq: string;
	/** log10 of Keq (position on the scale). */
	logK: number;
	/** Text for the value, e.g. "10⁻³⁰" or "54". */
	value: string;
	/** Molecules on the plinth: atoms per molecule and how many. */
	mix: {atoms: string[]; n: number}[];
	label: string;
	at: number;
};
export type KeqScaleProps = {
	delay?: number;
	min?: number;
	max?: number;
	bandsAt?: {products: number; both: number; reactants: number};
	reactions?: KeqScaleReaction[];
	cautionAt?: number;
	caution?: string;
};

const ID = 'c12m5ks';
const W = 760;
const AX0 = 44, AX1 = 716;
const BY0 = 108, BY1 = 160;

export const KeqScaleDiagram = ({
	delay = 62,
	min = -30,
	max = 12,
	bandsAt = {products: 121, both: 319, reactants: 412},
	reactions = [
		{eq: 'N₂ + O₂ ⇌ 2NO', logK: -30, value: '10⁻³⁰', mix: [{atoms: ['N', 'N'], n: 3}, {atoms: ['O', 'O'], n: 3}], label: 'almost all reactants', at: 586},
		{eq: 'H₂ + I₂ ⇌ 2HI', logK: Math.log10(54), value: '54', mix: [{atoms: ['H', 'H'], n: 1}, {atoms: ['I', 'I'], n: 1}, {atoms: ['I', 'H'], n: 7}], label: 'both present', at: 710},
		{eq: '2NO + O₂ ⇌ 2NO₂', logK: 12, value: '10¹²', mix: [{atoms: ['N', 'O', 'O'], n: 6}], label: 'almost all product', at: 791},
	],
	cautionAt = 884,
	caution = 'Magnitude tells you position, not rate',
}: KeqScaleProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const xOf = (v: number) => AX0 + ((v - min) / (max - min)) * (AX1 - AX0);
	const xm3 = xOf(-3), x0 = xOf(0), x3 = xOf(3);

	const bands = [
		{x0: AX0, x1: xm3, fill: theme.accent, at: bandsAt.reactants, lines: ['reactants favoured'], lx: (AX0 + xm3) / 2},
		{x0: xm3, x1: x3, fill: '#8a8a8a', at: bandsAt.both, lines: ['both', 'present'], lx: x0},
		{x0: x3, x1: AX1, fill: VIOLET, at: bandsAt.products, lines: ['products', 'favoured'], lx: (x3 + AX1) / 2},
	];
	const ticks: {v: number; t: string}[] = [];
	for (let v = Math.ceil(min / 10) * 10; v <= max - 3; v += 10) if (v !== 0) ticks.push({v, t: `10${sup(v)}`});
	ticks.push({v: -3, t: '10⁻³'}, {v: 0, t: '1'}, {v: 3, t: '10³'});
	if (!ticks.some((t) => t.v === max)) ticks.push({v: max, t: `10${sup(max)}`});

	const cardX = [128, 380, 632];
	const CARD_Y = 222, CARD_H = 250, CARD_W = 236;
	const els = Array.from(new Set(reactions.flatMap((r) => r.mix.flatMap((m) => m.atoms))));

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="A log scale of Keq: below 10⁻³ reactants are favoured, around 1 both are present, above 10³ products are favoured; three reactions placed on it" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={els} />

			{/* Bands */}
			{bands.map((b, i) => {
				const a = ramp(frame, b.at, 16);
				return (
					<g key={i}>
						<rect x={b.x0} y={BY0} width={b.x1 - b.x0} height={BY1 - BY0} fill={b.fill} opacity={0.08 + 0.2 * a} />
						<g opacity={a}>
							{b.lines.map((l, j) => (
								<text key={j} x={b.lx} y={b.lines.length === 1 ? 92 : 70 + j * 24} textAnchor="middle" fill={b.fill === '#8a8a8a' ? TOK.inkDim : b.fill} fontSize={21} fontWeight={800}>{l}</text>
							))}
						</g>
					</g>
				);
			})}
			<g opacity={ramp(frame, 0, 14)}>
				<rect x={AX0} y={BY0} width={AX1 - AX0} height={BY1 - BY0} fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth={2} />
				<line x1={AX0} y1={BY1} x2={AX1} y2={BY1} stroke={TOK.ink} strokeWidth={3} />
				{ticks.map((t) => (
					<g key={t.v}>
						<line x1={xOf(t.v)} y1={BY1} x2={xOf(t.v)} y2={BY1 + 9} stroke={TOK.ink} strokeWidth={2} />
						<text x={xOf(t.v)} y={BY1 + 30} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{t.t}</text>
					</g>
				))}
				<Rich x={AX0} y={34} size={20} parts={P('size of K_{eq}  (log scale)', TOK.inkDim)} anchor="start" />
			</g>

			{/* Reactions: pin + card */}
			{reactions.map((r, i) => {
				const px = xOf(r.logK);
				const drop = spring({frame: frame - r.at, fps, config: {damping: 11, stiffness: 160, mass: 0.7}});
				if (frame < r.at) return null;
				const cin = ramp(frame, r.at + 8, 16);
				const cx = cardX[i];
				const molecules = r.mix.flatMap((m) => Array.from({length: m.n}, () => m.atoms));
				const slots = plinthSlots(cx, CARD_Y + 170, 102, molecules.length);
				const order = molecules.map((atoms, j) => ({atoms, j, s: slots[j]})).sort((a, b) => a.s.y - b.s.y);
				const newest = reactions.filter((q) => frame >= q.at).length - 1 === i;
				const pulse = newest ? idlePulse(frame, 40) : 0;
				return (
					<g key={i}>
						{/* leader */}
						<path d={`M ${px} ${BY1 + 4} C ${px} ${BY1 + 40}, ${cx} ${CARD_Y - 34}, ${cx} ${CARD_Y}`} fill="none" stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="4 5" opacity={cin} />
						{/* pin */}
						<g transform={`translate(${px} ${BY0 - 4 - (1 - drop) * 60})`} opacity={Math.min(1, drop * 2)}>
							<circle cx={0} cy={26} r={11 + pulse * 3} fill={TOK.amber} opacity={0.25} />
							<circle cx={0} cy={26} r={8} fill={TOK.ink} stroke="#ffffff" strokeWidth={2.5} />
							<line x1={0} y1={34} x2={0} y2={BY1 - BY0 + 4} stroke={TOK.ink} strokeWidth={3} />
						</g>
						{/* card */}
						<g opacity={cin} transform={`translate(0 ${(1 - eramp(frame, r.at + 8, 16)) * 16})`}>
							<rect x={cx - CARD_W / 2} y={CARD_Y} width={CARD_W} height={CARD_H} rx={16} fill="#ffffff" stroke="rgba(0,0,0,0.1)" strokeWidth={2} />
							<text x={cx} y={CARD_Y + 32} textAnchor="middle" fill={TOK.ink} fontSize={Math.min(22, (CARD_W - 20) / (kbW(r.eq, 1) || 1))} fontWeight={800}>{r.eq}</text>
							<Rich x={cx} y={CARD_Y + 68} size={26} parts={P(`K_{eq} ≈ ${r.value}`)} />
							<DioramaPlinth id={`${ID}p${i}`} cx={cx} cy={CARD_Y + 170} rx={102}>
								{order.map(({atoms, j, s}) => (
									<Molecule key={j} id={ID} atoms={atoms} x={s.x} y={s.y - 10 + idleBob(frame, j + i * 20, 1.3)} r={atoms.length === 3 ? 12.5 : 14} />
								))}
							</DioramaPlinth>
							<text x={cx} y={CARD_Y + 236} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={800}>{r.label}</text>
						</g>
					</g>
				);
			})}

			{/* Caution */}
			{(() => {
				const w = kbW(caution, 21) + 40;
				return (
					<g opacity={ramp(frame, cautionAt, 16)}>
						<rect x={W / 2 - w / 2} y={486} width={w} height={40} rx={20} fill="#fff7e8" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.4} />
						<text x={W / 2} y={513} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={900}>{caution}</text>
					</g>
				);
			})()}
		</svg>
	);
};
