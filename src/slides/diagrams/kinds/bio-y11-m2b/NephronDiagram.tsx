// NephronDiagram (bio11m2Nephron) — filtration, selective reabsorption and
// secretion along one nephron, laid out flat on a stone slab.
//
// Top left: the glomerulus (a knot of capillaries) inside the cup of Bowman's
// capsule, fed by a wide arteriole and drained by a narrower one (the pressure
// that drives filtration). The tubule runs right from the capsule, then down
// to "urine". A blood capillary runs alongside the tubule.
//
// Each particle species has a fate from props:
//  - "large"    (blood cells, proteins): never leaves the blood.
//  - "reabsorb" (glucose, amino acids, most water and salts): filtered into
//               the capsule; once reabsorption starts it crosses back from the
//               tubule into the capillary. Before that beat it runs on to the
//               urine, which is the point: filtration alone is not selective.
//  - "stay"     (urea): filtered, not reabsorbed, carried to the urine.
//  - "secrete"  (extra wastes, ions): moves from the capillary into the tubule
//               once secretion starts.
// Labels and process chips come from props. Hold: the flows keep running.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, STONE, idleBob} from '../../diorama';
import {Chip2, Foot, FootLine, GLOSS, GlossDefs, H, PAL, W, alongPoly, fadeAt, popAt} from './shared';

type Fate = 'large' | 'reabsorb' | 'stay' | 'secrete';
type Label = {text: string; at: number};
export type NephronProps = {
	labels: {glomerulus: Label; capsule: Label; tubule: Label; capillary: Label; urine?: Label};
	/** `leave`: how many of a reabsorbed species' particles still reach the urine ("most", not all). */
	species: {key: keyof typeof PAL; label: string; fate: Fate; leave?: number}[];
	filterAt: number;
	reabsorbAt?: number;
	secreteAt?: number;
	chips?: {text: string; at: number; where: 'filter' | 'reabsorb' | 'secrete' | 'urine'; amber?: boolean}[];
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2neph';
const GC = {x: 142, y: 196};
const TY = 196, CY = 320, TX1 = 652, UY = 452;
const TUBE = [{x: GC.x + 16, y: TY}, {x: 214, y: TY}, {x: TX1, y: TY}, {x: TX1, y: UY}];
const CAP_OUT = [{x: GC.x, y: GC.y}, {x: 104, y: 262}, {x: 150, y: CY}, {x: 720, y: CY}];
const CHIP_AT = {filter: {x: 142, y: 70}, reabsorb: {x: 330, y: 258}, secrete: {x: 540, y: 258}, urine: {x: 652, y: 494}};

export const NephronDiagram = ({labels, species, filterAt, reabsorbAt = 1e9, secreteAt = 1e9, chips = [], footer = [], delay = 62}: NephronProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const on = fadeAt(frame, 0, 16);
	const T = 170;

	const particle = (fate: Fate, k: number, sIdx: number) => {
		const u = (((frame - filterAt) / T + k * 0.137 + sIdx * 0.31) % 1 + 1) % 1;
		const born = frame - filterAt - (u * T);
		if (fate === 'large') {
			// loop in the glomerulus, then out along the capillary
			if (u < 0.35) {
				const a = u * 40 + k;
				return {x: GC.x + Math.cos(a) * 24, y: GC.y + Math.sin(a) * 22, o: 1};
			}
			const p = alongPoly(CAP_OUT, (u - 0.35) / 0.65);
			return {...p, o: 1};
		}
		if (frame < filterAt) return null;
		if (fate === 'secrete') {
			if (frame < secreteAt) return null;
			const xs = 470 + ((k * 43) % 140);
			const path = [{x: xs, y: CY}, {x: xs, y: TY}, {x: TX1, y: TY}, {x: TX1, y: UY}];
			return {...alongPoly(path, u), o: 1};
		}
		const reab = fate === 'reabsorb' && born + filterAt >= reabsorbAt - T * 0.3;
		if (reab) {
			const xr = 250 + ((k * 61) % 220);
			const path = [{x: GC.x, y: GC.y}, {x: 214, y: TY}, {x: xr, y: TY}, {x: xr, y: CY}, {x: 720, y: CY}];
			return {...alongPoly(path, u), o: 1};
		}
		const p = alongPoly([{x: GC.x, y: GC.y}, ...TUBE.slice(1)], u);
		return {...p, o: 1};
	};

	const counts: Record<Fate, number> = {large: 3, reabsorb: 5, stay: 5, secrete: 4};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${labels.glomerulus.text}, ${labels.capsule.text}, ${labels.tubule.text}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<g opacity={on}>
				<rect x={16} y={146} width={W - 32} height={350} rx={26} fill={STONE.shadow} transform="translate(6, 10)" />
				<rect x={16} y={146} width={W - 32} height={350} rx={26} fill="#f3f0ea" stroke={STONE.topEdge} strokeWidth={3} />
				{/* capillary: arterioles, glomerulus knot, capillary alongside the tubule */}
				<path d={`M 20 150 L ${GC.x - 30} ${GC.y - 14}`} stroke={PAL.blood} strokeWidth={22} strokeLinecap="round" />
				<path d={`M ${GC.x - 26} ${GC.y + 20} L 104 262 L 150 ${CY} L 730 ${CY}`} stroke={PAL.blood} strokeWidth={14} fill="none" strokeLinejoin="round" opacity={0.85} />
				{/* tubule */}
				<path d={`M 196 ${TY} L ${TX1} ${TY} L ${TX1} ${UY + 6}`} stroke="#f2d9a8" strokeWidth={30} fill="none" strokeLinejoin="round" />
				<path d={`M 196 ${TY} L ${TX1} ${TY} L ${TX1} ${UY + 6}`} stroke="#fbf1dc" strokeWidth={22} fill="none" strokeLinejoin="round" />
				{/* Bowman's capsule: a cup around the glomerulus, open to the tubule */}
				<circle cx={GC.x} cy={GC.y} r={70} fill="#fbf1dc" stroke="#d9b877" strokeWidth={8} />
				{Array.from({length: 7}, (_, i) => {
					const a = (i / 7) * Math.PI * 2 + frame / 400;
					return <circle key={i} cx={GC.x + Math.cos(a) * 20} cy={GC.y + Math.sin(a) * 18} r={17} fill="none" stroke={PAL.blood} strokeWidth={8} opacity={0.9} />;
				})}
			</g>

			{/* particles */}
			{species.map((sp, si) =>
				Array.from({length: counts[sp.fate]}, (_, k) => {
					const p = particle(sp.fate === 'reabsorb' && k < (sp.leave ?? 0) ? 'stay' : sp.fate, k, si);
					if (!p) return null;
					const big = sp.fate === 'large';
					return <circle key={`${si}-${k}`} cx={p.x + idleBob(frame, k + si * 5, 1.2)} cy={p.y + idleBob(frame, k + si * 7, 1.2)} r={big ? 9 : 6} fill={`url(#${ID}-g-${sp.key})`} stroke="#ffffff" strokeWidth={1} opacity={p.o} />;
				}),
			)}

			{/* labels */}
			{[
				{l: labels.glomerulus, x: 142, y: 300, a: 'middle' as const},
				{l: labels.capsule, x: 222, y: 128, a: 'start' as const},
				{l: labels.tubule, x: 430, y: 160, a: 'middle' as const},
				{l: labels.capillary, x: 430, y: 356, a: 'middle' as const},
				...(labels.urine ? [{l: labels.urine, x: 612, y: 470, a: 'end' as const}] : []),
			].map(({l, x, y, a}, i) => (
				<text key={i} x={x} y={y} textAnchor={a} fill={i === 3 ? PAL.bloodDark : TOK.ink} fontSize={19} fontWeight={800} opacity={fadeAt(frame, l.at, 14)}>{l.text}</text>
			))}

			{chips.map((c, i) => {
				const p = CHIP_AT[c.where];
				return <Chip2 key={i} x={p.x} y={p.y} text={c.text} color={c.amber ? TOK.amber : theme.accent} textColor={c.amber ? TOK.amberInk : undefined} t={popAt(frame, fps, c.at)} size={18} />;
			})}

			{/* legend */}
			<g opacity={fadeAt(frame, filterAt, 14)}>
				{species.map((sp, i) => {
					const x = 30 + i * (700 / species.length);
					return (
						<g key={i}>
							<circle cx={x + 8} cy={24} r={8} fill={`url(#${ID}-g-${sp.key})`} />
							<text x={x + 22} y={30} fill={TOK.inkDim} fontSize={16} fontWeight={800}>{sp.label}</text>
						</g>
					);
				})}
			</g>
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};
