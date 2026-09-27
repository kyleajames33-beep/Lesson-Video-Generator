// ChargeCarriersDiagram — "conductivity needs mobile charges" as three test rigs.
//
// Three plinths (metal / ionic / covalent), each holding its particle model
// between two electrodes wired to a battery and a bulb. The metal's sea of
// delocalised electrons drifts all the time, so its bulb is lit. The ionic
// lattice holds its ions in place (bulb off) until the "molten or dissolved"
// beat, when the lattice loosens, the ions wander and the bulb lights: that
// change is the one amber thing. The covalent sample has only neutral
// molecules, so its bulb stays dark. A late note flags graphite as the
// exception.
//
// Config-driven: columns are given in `columns` (model 'metal' | 'ionic' |
// 'covalent', labels, beats); the exception note is optional. Defaults =
// Chem Y11 M1 L6 "formula" scene. Beats are frames after `delay`.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {Ball, GlossDefs, PARTICLE, clamp, fadeAt, popAt} from './shared';

export type CCModel = 'metal' | 'ionic' | 'covalent';
export type CCColumn = {
	model: CCModel;
	name: string;
	/** Carrier line under the name. For ionic, `carrierAfter` replaces it once mobile. */
	carrier: string;
	carrierAfter?: string;
	/** State chip text; for ionic `stateAfter` replaces it once mobile. */
	state: string;
	stateAfter?: string;
	/** Model + name appear. */
	at?: number;
	/** State chip appears. */
	stateAt?: number;
	/** Ionic only: the lattice frees its ions (molten or dissolved). */
	mobileAt?: number;
};
export type ChargeCarriersProps = {
	title?: string;
	columns?: CCColumn[];
	exception?: {title: string; lines: string[]; at: number};
	delay?: number;
};

const DEFAULT_COLUMNS: CCColumn[] = [
	{model: 'metal', name: 'Metal', carrier: 'free delocalised e⁻', state: 'solid ✓ · molten ✓', at: 128, stateAt: 263},
	{model: 'ionic', name: 'Ionic', carrier: 'ions locked in lattice', carrierAfter: 'ions free to move', state: 'solid ✗', stateAfter: 'molten / dissolved ✓', at: 286, stateAt: 350, mobileAt: 405},
	{model: 'covalent', name: 'Covalent', carrier: 'no free e⁻ or ions', state: "doesn't conduct ✗", at: 548, stateAt: 635},
];
const DEFAULT_EXCEPTION = {title: 'Exception: graphite', lines: ['one delocalised electron per C', '→ conducts within its layers'], at: 674};

const ID = 'c11cc';
const W = 760;
const H = 530;
const XS = [127, 380, 633];
const PY = 274;
const RX = 104;
const BULB_Y = 82;
const ROD_TOP = 120;
const ROD_BOT = 262;
const MS = 1.15; // particle-model scale inside the sample box
const NAME_Y = 354;
const CARRIER_Y = 378;
const STATE_Y = 414;
const CHIP_SIZE = 17;
const CAT = ELEMENT_COLORS.Na;
const AN = ELEMENT_COLORS.Cl;
const MOL = '#7f93a8';

const chipW = (t: string) => t.length * CHIP_SIZE * 0.56 + 28;

const StateChip = ({x, y, text, color, fill = TOK.bgLift, width = 2.5}: {x: number; y: number; text: string; color: string; fill?: string; width?: number}) => {
	const w = chipW(text);
	return (
		<g>
			<rect x={x - w / 2} y={y - 15.5} width={w} height={31} rx={15.5} fill={fill} stroke={color} strokeWidth={width} />
			<text x={x} y={y + CHIP_SIZE * 0.36} textAnchor="middle" fill={color === TOK.amber ? TOK.amberInk : color} fontSize={CHIP_SIZE} fontWeight={800}>{text}</text>
		</g>
	);
};

/** Battery + bulb + two electrodes. `lit` 0..1. */
const Circuit = ({cx, lit, frame}: {cx: number; lit: number; frame: number}) => {
	const L = cx - 90;
	const R = cx + 90;
	const wire = '#5d6b76';
	const bx = cx - 56; // battery position on the top-left wire
	return (
		<g>
			{/* wires */}
			<path d={`M ${L} ${ROD_TOP} L ${L} ${BULB_Y} L ${bx - 6} ${BULB_Y} M ${bx + 6} ${BULB_Y} L ${cx - 17} ${BULB_Y} M ${cx + 17} ${BULB_Y} L ${R} ${BULB_Y} L ${R} ${ROD_TOP}`} stroke={wire} strokeWidth={3.5} fill="none" strokeLinejoin="round" strokeLinecap="round" />
			{/* battery: long (+) and short (−) plates */}
			<line x1={bx - 6} y1={BULB_Y - 15} x2={bx - 6} y2={BULB_Y + 15} stroke={TOK.ink} strokeWidth={3.5} />
			<line x1={bx + 6} y1={BULB_Y - 8} x2={bx + 6} y2={BULB_Y + 8} stroke={TOK.ink} strokeWidth={6} />
			{/* electrodes */}
			{[L, R].map((x) => (
				<rect key={x} x={x - 5} y={ROD_TOP} width={10} height={ROD_BOT - ROD_TOP} rx={3} fill="#8c979f" stroke="#5d6b76" strokeWidth={1.5} />
			))}
			{/* bulb */}
			{lit > 0 && (
				<g opacity={lit}>
					<circle cx={cx} cy={BULB_Y} r={34 + idlePulse(frame, 40) * 3} fill="#ffe67a" opacity={0.35} />
					{Array.from({length: 8}, (_, k) => {
						const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
						return <line key={k} x1={cx + Math.cos(a) * 22} y1={BULB_Y + Math.sin(a) * 22} x2={cx + Math.cos(a) * 31} y2={BULB_Y + Math.sin(a) * 31} stroke="#e8b923" strokeWidth={3} strokeLinecap="round" />;
					})}
				</g>
			)}
			<circle cx={cx} cy={BULB_Y} r={17} fill={lit > 0.5 ? '#fff4b0' : '#eef1f3'} stroke={lit > 0.5 ? '#d9a91a' : '#8c979f'} strokeWidth={2.5} />
			<path d={`M ${cx - 17} ${BULB_Y} L ${cx - 8} ${BULB_Y} l 3 -6 l 3 12 l 3 -12 l 3 12 l 3 -6 L ${cx + 17} ${BULB_Y}`} stroke={lit > 0.5 ? '#c7860a' : '#8c979f'} strokeWidth={2} fill="none" strokeLinejoin="round" />
		</g>
	);
};

const MetalModel = ({cx, frame}: {cx: number; frame: number}) => {
	const ions: {x: number; y: number}[] = [];
	for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) ions.push({x: cx - 48 + c * 32, y: 180 + r * 30});
	// Electrons drift steadily left → right through the gaps, wrapping at the edges.
	const lanes = [168, 195, 225, 249];
	const eX0 = cx - 66;
	const span = 132;
	return (
		<g>
			{ions.map((p, i) => (
				<Ball key={i} id={ID} name="metal" color={PARTICLE.metal} x={p.x} y={p.y + idleBob(frame, i, 0.6)} r={12} label="+" labelColor="#3a4550" labelSize={16} />
			))}
			{Array.from({length: 16}, (_, k) => {
				const lane = lanes[k % 4];
				const u = (((k * 53 + frame * 0.9) % span) + span) % span;
				const edge = Math.min(u, span - u);
				const op = Math.min(1, edge / 10);
				const x = eX0 + u;
				const y = lane + Math.sin(frame / 9 + k) * 2.5;
				return <Ball key={`e${k}`} id={ID} name="electron" color={PARTICLE.electron} x={x} y={y} r={5.5} opacity={op} />;
			})}
		</g>
	);
};

const IonicModel = ({cx, frame, m}: {cx: number; frame: number; m: number}) => {
	const out = [] as {x: number; y: number; cat: boolean; i: number}[];
	let i = 0;
	for (let r = 0; r < 3; r++)
		for (let c = 0; c < 4; c++) {
			const gx = cx - 48 + c * 32;
			const gy = 180 + r * 30;
			const cat = (r + c) % 2 === 0;
			// Mobile: each ion wanders on its own slow loop inside the melt.
			const wx = Math.sin(frame / (23 + (i % 5) * 4) + i * 1.9) * 13 + Math.sin(frame / 47 + i) * 5;
			const wy = Math.cos(frame / (27 + (i % 4) * 5) + i * 1.3) * 9;
			const vib = idleBob(frame, i, 0.7) * (1 - m);
			// Stay inside the melt (sample box is cx ± 68, y 158–258).
			const x = Math.max(cx - 54, Math.min(cx + 54, gx + wx * m + vib * 0.6));
			const y = Math.max(172, Math.min(244, gy + wy * m + vib));
			out.push({x, y, cat, i});
			i++;
		}
	// Bigger anions first, then cations on top.
	const sorted = [...out.filter((p) => !p.cat), ...out.filter((p) => p.cat)];
	return (
		<g>
			{sorted.map((p) =>
				p.cat ? (
					<Ball key={p.i} id={ID} name="cat" color={CAT} x={p.x} y={p.y} r={9} label="+" labelSize={15} />
				) : (
					<Ball key={p.i} id={ID} name="an" color={AN} x={p.x} y={p.y} r={13.5} label="−" labelSize={19} />
				),
			)}
		</g>
	);
};

const CovalentModel = ({cx, frame}: {cx: number; frame: number}) => {
	const pos = [[-40, 188], [0, 180], [40, 190], [-40, 232], [0, 226], [40, 234]];
	return (
		<g>
			{pos.map(([dx, y], i) => {
				const rot = Math.sin(frame / 31 + i * 1.7) * 25 + i * 30;
				const x = cx + dx + idleBob(frame, i + 5, 1.2);
				const yy = y + idleBob(frame, i + 11, 1.2);
				const a = (rot * Math.PI) / 180;
				const ox = Math.cos(a) * 8;
				const oy = Math.sin(a) * 8;
				return (
					<g key={i}>
						<Ball id={ID} name="mol" color={MOL} x={x - ox} y={yy - oy} r={10} />
						<Ball id={ID} name="mol" color={MOL} x={x + ox} y={yy + oy} r={10} />
					</g>
				);
			})}
		</g>
	);
};

export const ChargeCarriersDiagram = ({
	title = 'No mobile charge carriers, no conductivity',
	columns = DEFAULT_COLUMNS,
	exception = DEFAULT_EXCEPTION,
	delay = 62,
}: ChargeCarriersProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const cols = columns.slice(0, 3);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Metals conduct in every state; ionic compounds only when molten or dissolved; covalent substances generally don't" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{metal: PARTICLE.metal, electron: PARTICLE.electron, cat: CAT, an: AN, mol: MOL}} />

			{title && (
				<text x={W / 2} y={30} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={fadeAt(frame, 0)}>
					{title}
				</text>
			)}

			{cols.map((c, i) => {
				const cx = XS[i];
				const at = c.at ?? 20 + i * 120;
				const show = fadeAt(frame, at, 14);
				const pop = popAt(frame, fps, at);
				const mobileAt = c.mobileAt ?? Infinity;
				const m = c.model === 'ionic' ? interpolate(frame, [mobileAt, mobileAt + 36], [0, 1], clamp) : 0;
				const lit =
					c.model === 'metal' ? fadeAt(frame, at + 18, 10) : c.model === 'ionic' ? fadeAt(frame, mobileAt + 40, 10) : 0;
				const after = c.model === 'ionic' && frame >= mobileAt + 30;
				const stateAt = c.stateAt ?? at + 40;
				const stateP = popAt(frame, fps, after ? mobileAt + 30 : stateAt);
				const stateText = after && c.stateAfter ? c.stateAfter : c.state;
				const stateColor = after ? TOK.amber : c.model === 'metal' ? theme.accent : TOK.inkDim;
				const carrierText = after && c.carrierAfter ? c.carrierAfter : c.carrier;
				return (
					<g key={i}>
						<g opacity={fadeAt(frame, 2 + i * 4)}>
							<DioramaPlinth id={ID} cx={cx} cy={PY} rx={RX} />
						</g>
						<g opacity={show}>
							<Circuit cx={cx} lit={lit} frame={frame} />
							{/* the sample region; turns into an amber-rimmed melt when ions free up */}
							<rect x={cx - 68 * MS} y={208 - 50 * MS} width={136 * MS} height={100 * MS} rx={18} fill={m > 0 ? `rgba(240,168,48,${0.16 * m})` : 'rgba(255,255,255,0.35)'} stroke={m > 0 ? TOK.amber : 'rgba(40,60,80,0.18)'} strokeWidth={m > 0 ? 2.5 + idlePulse(frame) * 1.5 * m : 1.5} strokeDasharray={m > 0 ? undefined : '5 5'} />
							<g transform={`translate(${cx},208) scale(${MS * (0.6 + 0.4 * Math.min(1, pop))}) translate(${-cx},-208)`}>
								{c.model === 'metal' && <MetalModel cx={cx} frame={frame} />}
								{c.model === 'ionic' && <IonicModel cx={cx} frame={frame} m={m} />}
								{c.model === 'covalent' && <CovalentModel cx={cx} frame={frame} />}
							</g>
						</g>
						<g opacity={fadeAt(frame, 6 + i * 4)}>
							<text x={cx} y={NAME_Y} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800}>{c.name}</text>
						</g>
						<text x={cx} y={CARRIER_Y} textAnchor="middle" fill={after ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={700} opacity={show}>
							{carrierText}
						</text>
						<g opacity={Math.min(1, stateP * 1.5)} transform={`translate(${cx},${STATE_Y}) scale(${0.7 + 0.3 * Math.min(1, stateP)}) translate(${-cx},${-STATE_Y})`}>
							<StateChip x={cx} y={STATE_Y} text={stateText} color={stateColor} width={after ? 3 : 2.5} />
						</g>
					</g>
				);
			})}

			{/* Exception note, pointing at the covalent column */}
			{exception && (() => {
				const covIdx = cols.findIndex((c) => c.model === 'covalent');
				const px = XS[covIdx >= 0 ? covIdx : 2];
				const p = popAt(frame, fps, exception.at);
				const x0 = 390;
				const x1 = 750;
				const y0 = 446;
				const y1 = 524;
				const hx = 712; // mini graphite layer
				const hy = 490;
				const s = 10;
				const hexPts = (ox: number) => Array.from({length: 6}, (_, k) => {
					const a = (Math.PI / 3) * k + Math.PI / 6;
					return [ox + Math.cos(a) * s, hy + Math.sin(a) * s];
				});
				const hA = hexPts(hx - s * 0.866);
				const hB = hexPts(hx + s * 0.866);
				const eU = ((frame * 0.6) % 36) / 36;
				return (
					<g opacity={Math.min(1, p * 1.5)} transform={`translate(${(x0 + x1) / 2},${y0}) scale(${0.8 + 0.2 * Math.min(1, p)}) translate(${-(x0 + x1) / 2},${-y0})`}>
						<path d={`M ${x0 + 14} ${y0} L ${px - 10} ${y0} L ${px} ${y0 - 12} L ${px + 10} ${y0} L ${x1 - 14} ${y0} Q ${x1} ${y0} ${x1} ${y0 + 14} L ${x1} ${y1 - 14} Q ${x1} ${y1} ${x1 - 14} ${y1} L ${x0 + 14} ${y1} Q ${x0} ${y1} ${x0} ${y1 - 14} L ${x0} ${y0 + 14} Q ${x0} ${y0} ${x0 + 14} ${y0} Z`} fill={TOK.bgLift} stroke={theme.accent} strokeWidth={2.5} strokeLinejoin="round" />
						<text x={x0 + 16} y={y0 + 24} fill={theme.accent} fontSize={19} fontWeight={800}>{exception.title}</text>
						{exception.lines.map((l, k) => (
							<text key={k} x={x0 + 16} y={y0 + 48 + k * 22} fill={TOK.ink} fontSize={17} fontWeight={700}>{l}</text>
						))}
						{[hA, hB].map((pts, k) => (
							<polygon key={k} points={pts.map((q) => q.join(',')).join(' ')} fill="none" stroke="#4a4a4a" strokeWidth={2} />
						))}
						{[...hA, ...hB].map(([x, y], k) => <circle key={k} cx={x} cy={y} r={3.2} fill={ELEMENT_COLORS.C} />)}
						<Ball id={ID} name="electron" color={PARTICLE.electron} x={hx - s * 1.7 + eU * s * 3.4} y={hy - s * 1.25} r={4.5} />
					</g>
				);
			})()}
		</svg>
	);
};
