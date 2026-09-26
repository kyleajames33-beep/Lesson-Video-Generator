// MolarMassScaleDiagram (kind: chem11m2MolarScale): one mole on the balance.
//
// Up to three columns. Each has a periodic-table tile (symbol + relative
// atomic mass) and, below it, a balance on a plinth. When the narration names
// the element, a heap labelled "1 mol" drops onto the pan and the readout
// settles on the mass: the same number as on the tile, now in grams. That
// equality (Ar on the table = grams in one mole) is the whole point, so a
// header can state it, and one column can be flagged as the defining one
// (carbon-12: exactly 12 g).

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {Balance, Ball, LANE, clamp, pileSlots, shade} from './parts';

type El = {sym: string; name: string; ar: string; grams: string; beat?: number; labelBeat?: number; tileTop?: string};

export type MolarMassScaleProps = {
	elements?: El[];
	header?: {text: string; beat: number};
	hero?: {index: number; text: string; beat: number};
	pulseBeat?: number;
	delay?: number;
};

const ID = 'c11m2mms';
const W = 760;
const VB_H = 520;
const XS = [130, 380, 630];
const BASE = 372;

export const MolarMassScaleDiagram = ({
	elements = [
		{sym: 'H', name: 'hydrogen', ar: '1.008', grams: '1.008 g', beat: 30},
		{sym: 'C', name: 'carbon', ar: '12.01', grams: '12.01 g', beat: 150},
		{sym: 'O', name: 'oxygen', ar: '16.00', grams: '16.00 g', beat: 270},
	],
	header,
	hero,
	pulseBeat,
	delay = 62,
}: MolarMassScaleProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const fade = (d: number | undefined, len = 12) => (d === undefined ? 0 : interpolate(frame, [d, d + len], [0, 1], clamp));
	const pulse = idlePulse(frame);
	const glow = pulseBeat !== undefined && frame >= pulseBeat ? pulse : 0;

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label={`One mole of each element weighs its relative atomic mass in grams: ${elements.map((e) => `${e.sym} ${e.grams}`).join(', ')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />

			{/* Top line: the hero fact first (amber), then the general rule. */}
			{hero && (
				<text x={W / 2} y={32} textAnchor="middle" fill={TOK.amberInk} fontSize={24} fontWeight={800} opacity={fade(hero.beat + 30) * (header ? 1 - fade(header.beat - 12) : 1)}>
					{hero.text}
				</text>
			)}
			{header && (
				<text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800} opacity={fade(header.beat)}>
					{header.text}
				</text>
			)}

			{elements.slice(0, 3).map((e, i) => {
				const x = XS[i];
				const beat = e.beat ?? 30 + i * 120;
				const isHero = hero?.index === i;
				const heroOn = isHero && frame >= (hero?.beat ?? Infinity);
				const land = spring({frame: frame - beat - 26, fps, config: {damping: 13, stiffness: 150}});
				const drop = Math.max(0, Math.min(1, land));
				const settled = frame >= beat + 44;
				const color = ELEMENT_COLORS[e.sym] ?? '#999';
				const panTop = BASE + 4 - 46 * 1.5;
				const heap = pileSlots(x, panTop - 1, 10, 11);
				const tileY = 60;
				const tileStroke = heroOn ? TOK.amber : LANE.moles;
				return (
					<g key={e.sym + i}>
						{/* periodic tile */}
						<g opacity={fade(beat, 14)}>
							<rect x={x - 56} y={tileY} width={112} height={118} rx={10} fill={TOK.bgLift} stroke={tileStroke} strokeWidth={heroOn ? 3 + pulse * 2 : 3 + glow * 1.5} />
							<text x={x - 46} y={tileY + 24} fill={TOK.inkDim} fontSize={17} fontWeight={800}>{e.tileTop ?? ''}</text>
							<text x={x} y={tileY + 74} textAnchor="middle" fill={TOK.ink} fontSize={50} fontWeight={900}>{e.sym}</text>
							<text x={x} y={tileY + 104} textAnchor="middle" fill={LANE.moles} fontSize={20} fontWeight={900}>{e.ar}</text>
						</g>
						{/* arrow tile → balance */}
						<g opacity={fade(beat + 14)}>
							<line x1={x} y1={tileY + 124} x2={x} y2={tileY + 150} stroke={TOK.inkMute} strokeWidth={3} strokeLinecap="round" />
							<path d={`M ${x - 7} ${tileY + 146} L ${x} ${tileY + 156} L ${x + 7} ${tileY + 146}`} fill="none" stroke={TOK.inkMute} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
						</g>
						{/* balance */}
						<g opacity={fade(beat, 14)}>
							<DioramaPlinth id={ID} cx={x} cy={BASE + 10} rx={112} />
							<Balance x={x} y={BASE + 4} readout={settled ? e.grams : '0.000 g'} heapScale={0} scale={1.5} />
						</g>
						{heap.map((p, j) => (
							<Ball key={j} x={p.x} y={p.y - (1 - drop) * 120 + (settled ? idleBob(frame, j + i * 10, 0.8) : 0)} r={11} color={color} opacity={drop > 0.01 ? 1 : 0} />
						))}
						<g opacity={fade(beat + 30)}>
							<rect x={x + 30} y={panTop - 70} width={50} height={24} rx={12} fill={shade(LANE.moles, 0)} />
							<text x={x + 55} y={panTop - 52} textAnchor="middle" fill="#ffffff" fontSize={15} fontWeight={900}>1 mol</text>
						</g>
						<g opacity={fade(e.labelBeat ?? beat + 44)}>
							<text x={x} y={BASE + 92} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>{e.name}</text>
							<text x={x} y={BASE + 120} textAnchor="middle" fill={LANE.moles} fontSize={22} fontWeight={900}>{`M = ${e.grams} mol⁻¹`}</text>
						</g>
					</g>
				);
			})}

		</svg>
	);
};
