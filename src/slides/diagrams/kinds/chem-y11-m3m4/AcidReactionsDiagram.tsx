// AcidReactionsDiagram — two acid reactions, two product sets (Chem Y11 M3 L5).
//
// Row 1: acid + hydroxide → salt + water (HCl + NaOH → NaCl + H₂O), a calm
// beaker. Row 2: acid + carbonate → salt + water + CO₂ (the lesson's worked
// example, 2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂), a fizzing beaker. The salt
// chip starts blank; a sodium ball flies in from the base and a chloride ball
// from the acid, so the salt visibly takes its cation from the base and its
// anion from the acid. Finally CO₂ is picked out as the fizz.
//
// Beats (frames after `delay`), timed to the concept voiceover:
//   carbonate row 180 · cation from base 330 · anion from acid 450 ·
//   NaCl example 530 · fizz 720

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Ball, Beaker, clamp, colorOf, ramp} from './shared';

export type AcidReactionsProps = {
	delay?: number;
	/** Frames after delay: [carbonate row, cation flies, anion flies, salt example, fizz]. */
	beats?: [number, number, number, number, number];
};

const ID = 'c11m3acid';
const W = 760;
const NA = colorOf('Na');
const CL = '#2f9a2b';

type Chip = {key: string; w: number; parts: {t: string; c?: string}[]; role?: 'acid' | 'base' | 'salt' | 'co2'};
type Row = {y: number; pattern: string; chips: (Chip | string)[]; fizz: boolean};

const ROWS: Row[] = [
	{
		y: 118,
		pattern: 'acid + hydroxide → salt + water',
		fizz: false,
		chips: [
			{key: 'a', w: 84, role: 'acid', parts: [{t: 'H'}, {t: 'Cl', c: CL}]},
			'+',
			{key: 'b', w: 104, role: 'base', parts: [{t: 'Na', c: NA}, {t: 'OH'}]},
			'→',
			{key: 's', w: 96, role: 'salt', parts: [{t: 'Na', c: NA}, {t: 'Cl', c: CL}]},
			'+',
			{key: 'w', w: 76, parts: [{t: 'H₂O'}]},
		],
	},
	{
		y: 352,
		pattern: 'acid + carbonate → salt + water + CO₂',
		fizz: true,
		chips: [
			{key: 'a', w: 84, role: 'acid', parts: [{t: '2H'}, {t: 'Cl', c: CL}]},
			'+',
			{key: 'b', w: 108, role: 'base', parts: [{t: 'Na₂', c: NA}, {t: 'CO₃'}]},
			'→',
			{key: 's', w: 104, role: 'salt', parts: [{t: '2'}, {t: 'Na', c: NA}, {t: 'Cl', c: CL}]},
			'+',
			{key: 'w', w: 72, parts: [{t: 'H₂O'}]},
			'+',
			{key: 'c', w: 72, role: 'co2', parts: [{t: 'CO₂'}]},
		],
	},
];

const X0 = 150;
const OP_W = 22;
const layout = (row: Row) => {
	let x = X0;
	return row.chips.map((c) => {
		const w = typeof c === 'string' ? (c === '→' ? 30 : OP_W) : c.w;
		const out = {c, x: x + w / 2, w};
		x += w + 4;
		return out;
	});
};

export const AcidReactionsDiagram = ({delay = 90, beats = [180, 330, 450, 530, 720]}: AcidReactionsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const [tRow2, tCat, tAn, tEx, tFizz] = beats;

	const rowIn = [ramp(frame, 0, 14), ramp(frame, tRow2, 14)];
	const flyCat = interpolate(frame, [tCat, tCat + 40], [0, 1], clamp);
	const flyAn = interpolate(frame, [tAn, tAn + 40], [0, 1], clamp);
	const saltPop = spring({frame: frame - tAn - 40, fps, config: {damping: 10, stiffness: 200, mass: 0.6}});
	const saltKnown = frame >= tAn + 40;
	const exIn = ramp(frame, tEx, 14);
	const fizzHi = ramp(frame, tFizz, 16);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Acid plus hydroxide gives salt and water; acid plus carbonate gives salt, water and carbon dioxide. The salt's cation comes from the base and its anion from the acid." style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['Na', 'Cl']} />

			{ROWS.map((row, ri) => {
				const cells = layout(row);
				const find = (role: Chip['role']) => cells.find((c) => typeof c.c !== 'string' && c.c.role === role)!;
				const acid = find('acid'), base = find('base'), salt = find('salt');
				const chipY = row.y;
				const arc = (t: number, from: number, to: number) => ({x: from + (to - from) * t, y: chipY + 6 + Math.sin(t * Math.PI) * 50});
				const cat = arc(flyCat, base.x - base.w * 0.22, salt.x - 12);
				const an = arc(flyAn, acid.x + acid.w * 0.18, salt.x + 18);
				const beakerBase = row.y + 70;
				// Fizz: bubbles rise continuously once the row is shown.
				const bubbles = row.fizz
					? Array.from({length: 9}, (_, k) => {
							const period = 46 + (k % 3) * 10;
							const ph = (((frame - tRow2 + k * 13) % period) + period) % period / period;
							return {x: 70 + ((k * 37) % 60) - 30 + Math.sin(frame / 9 + k) * 3, y: beakerBase - 8 - ph * 70, r: 3 + (k % 3), o: frame > tRow2 + 10 ? (1 - ph) : 0};
						})
					: [];
				return (
					<g key={ri} opacity={rowIn[ri]}>
						<text x={X0} y={row.y - 58} fill={TOK.inkDim} fontSize={19} fontWeight={800} letterSpacing="0.02em">{row.pattern}</text>

						{/* small beaker on its plinth */}
						<DioramaPlinth id={ID} cx={70} cy={beakerBase + 4} rx={62}>
							<Beaker cx={70} baseY={beakerBase} w={80} h={96} level={0.66} liquid={row.fizz ? 'rgba(150,200,235,0.4)' : 'rgba(150,200,235,0.3)'}>
								{bubbles.map((b, k) => (
									<circle key={k} cx={b.x} cy={b.y} r={b.r * (1 + fizzHi * 0.3)} fill="#ffffff" stroke="rgba(70,110,150,0.5)" strokeWidth={1} opacity={b.o} />
								))}
							</Beaker>
						</DioramaPlinth>
						<text x={70} y={beakerBase + 72} textAnchor="middle" fill={row.fizz ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800} opacity={row.fizz ? fizzHi : exIn}>
							{row.fizz ? 'fizz!' : 'no fizz'}
						</text>

						{/* equation chips */}
						{cells.map(({c, x, w}, i) => {
							if (typeof c === 'string') {
								return <text key={i} x={x} y={chipY + 9} textAnchor="middle" fill={TOK.inkDim} fontSize={26} fontWeight={700}>{c}</text>;
							}
							const isSalt = c.role === 'salt';
							const isCO2 = c.role === 'co2';
							const stroke = isCO2 && fizzHi > 0 ? TOK.amber : isSalt && exIn > 0 && ri === 0 ? theme.accent : 'rgba(0,0,0,0.14)';
							const sw = isCO2 && fizzHi > 0 ? 2.5 + idlePulse(frame) * 1.5 : isSalt && exIn > 0 && ri === 0 ? 3 : 1.5;
							const sc = isSalt && saltKnown ? 1 + 0.1 * (1 - Math.min(1, Math.max(0, saltPop))) : 1;
							return (
								<g key={c.key} transform={`translate(${x} ${chipY}) scale(${sc})`}>
									<rect x={-w / 2} y={-24} width={w} height={48} rx={14} fill="#ffffff" stroke={stroke} strokeWidth={sw} />
									<text y={9} textAnchor="middle" fontSize={23} fontWeight={800} fill={isCO2 && fizzHi > 0 ? TOK.amberInk : TOK.ink}>
										{isSalt && !saltKnown ? (
											<tspan fill={TOK.inkMute}>salt</tspan>
										) : (
											c.parts.map((p, k) => (
												<tspan key={k} fill={p.c ?? undefined}>{p.t}</tspan>
											))
										)}
									</text>
									<text y={44} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
										{c.role === 'acid' ? 'acid' : c.role === 'base' ? (ri === 0 ? 'hydroxide' : 'carbonate') : c.role === 'salt' ? 'salt' : c.key === 'w' ? 'water' : 'gas'}
									</text>
								</g>
							);
						})}

						{/* cation from the base, anion from the acid */}
						{flyCat > 0 && flyCat < 1 && <Ball id={ID} el="Na" x={cat.x} y={cat.y} r={19} label="Na" labelSize={15} />}
						{flyAn > 0 && flyAn < 1 && <Ball id={ID} el="Cl" x={an.x} y={an.y} r={19} label="Cl" labelSize={15} />}
						{/* source tags under the salt */}
						<g opacity={ramp(frame, tCat + 30, 12)}>
							<text x={salt.x} y={chipY + 72} textAnchor="middle" fontSize={16} fontWeight={800} fill={NA}>
								Na from the base
							</text>
						</g>
						<g opacity={ramp(frame, tAn + 30, 12)}>
							<text x={salt.x} y={chipY + 92} textAnchor="middle" fontSize={16} fontWeight={800} fill={CL}>
								Cl from the acid
							</text>
						</g>
					</g>
				);
			})}
		</svg>
	);
};
