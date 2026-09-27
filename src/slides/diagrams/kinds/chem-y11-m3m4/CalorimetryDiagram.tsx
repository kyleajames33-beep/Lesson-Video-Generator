// CalorimetryDiagram — calorimetry as a working bench diorama (Chem Y11 M4).
//
// mode 'combustion' (L2): a spirit burner heats a can of water held by a clamp
// stand; heat waves rise into the can, the thermometer column climbs, and later
// a few grey waves escape sideways (heat lost, so measured answers come out a
// little low). Step cards on the right build the method: q = mcΔT, then
// ΔHc = −q ÷ n, negative because combustion releases heat.
//
// mode 'neutralisation' (L3): an acid beaker and a base beaker pour into one
// polystyrene cup; the combined solution warms. Cards: m = total mass of
// solution, c = 4.18 J g⁻¹ °C⁻¹, n = moles of water formed (c × V of the
// limiting reactant), ΔHn = −q ÷ n.
//
// No measured values are drawn (the concept scenes are qualitative); the
// thermometer only shows the temperature rising.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Beaker, clamp, ramp} from './shared';

type Card = {at: number; title: string; eq: string; key?: boolean};
export type CalorimetryProps = {
	delay?: number;
	mode?: 'combustion' | 'neutralisation';
	cards?: Card[];
	/** combustion: [heat leak shown]; neutralisation: [pour, temperature starts rising]. */
	beats?: number[];
	/** Short note under the rig, shown at `at`. */
	note?: {at: number; text: string};
};

const ID = 'c11m4cal';
const W = 760;
const PX = 196; // rig centre
const PY = 404; // plinth top

const COMBUSTION_CARDS: Card[] = [
	{at: 20, title: '① Heat gained by the water', eq: 'q = mcΔT'},
	{at: 140, title: '② Divide by moles of fuel', eq: 'ΔHc = −q ÷ n'},
	{at: 1000, title: 'Combustion releases heat', eq: 'so ΔHc is negative', key: true},
];
const NEUTRAL_CARDS: Card[] = [
	{at: 500, title: 'm = total mass of solution', eq: 'acid + base combined', key: true},
	{at: 760, title: 'c = 4.18 J g⁻¹ °C⁻¹', eq: 'dilute solution ≈ water'},
	{at: 890, title: 'n = moles of water formed', eq: 'c × V of limiting reactant'},
	{at: 1120, title: 'ΔHn = −q ÷ n', eq: 'negative: heat released'},
];

const Thermometer = ({x, top, bottom, level}: {x: number; top: number; bottom: number; level: number}) => {
	const colTop = bottom - 16 - (bottom - top - 30) * level;
	return (
		<g>
			<rect x={x - 7} y={top} width={14} height={bottom - top} rx={7} fill="#f4f8fb" stroke="rgba(70,90,110,0.6)" strokeWidth={2} />
			<rect x={x - 3} y={colTop} width={6} height={bottom - colTop - 6} rx={3} fill="#d8412f" />
			<circle cx={x} cy={bottom} r={10} fill="#d8412f" stroke="rgba(120,30,20,0.6)" strokeWidth={1.5} />
			{[0.2, 0.4, 0.6, 0.8].map((f) => (
				<line key={f} x1={x + 7} y1={bottom - 16 - (bottom - top - 30) * f} x2={x + 13} y2={bottom - 16 - (bottom - top - 30) * f} stroke="rgba(70,90,110,0.6)" strokeWidth={1.5} />
			))}
		</g>
	);
};

const Flame = ({x, y, frame, s}: {x: number; y: number; frame: number; s: number}) => {
	const h = 44 * s * (1 + Math.sin(frame / 3.3) * 0.06 + Math.sin(frame / 5.1) * 0.05);
	const w = 13 * s;
	const sway = Math.sin(frame / 7) * 2.5;
	return (
		<g>
			<path d={`M ${x - w} ${y} C ${x - w * 1.2} ${y - h * 0.45}, ${x + sway - w * 0.3} ${y - h * 0.8}, ${x + sway} ${y - h} C ${x + sway + w * 0.3} ${y - h * 0.8}, ${x + w * 1.2} ${y - h * 0.45}, ${x + w} ${y} Z`} fill="#f7a824" />
			<path d={`M ${x - w * 0.5} ${y} C ${x - w * 0.5} ${y - h * 0.3}, ${x} ${y - h * 0.5}, ${x + sway * 0.4} ${y - h * 0.58} C ${x + w * 0.2} ${y - h * 0.45}, ${x + w * 0.5} ${y - h * 0.3}, ${x + w * 0.5} ${y} Z`} fill="#ffe98a" />
		</g>
	);
};

const Wave = ({x, y, dir, color, o}: {x: number; y: number; dir: 'up' | 'left' | 'right'; color: string; o: number}) => {
	const d =
		dir === 'up'
			? `M ${x} ${y} q -7 -6 0 -12 q 7 -6 0 -12 q -7 -6 0 -12`
			: `M ${x} ${y} q ${dir === 'left' ? -6 : 6} -7 ${dir === 'left' ? -12 : 12} 0 q ${dir === 'left' ? -6 : 6} 7 ${dir === 'left' ? -12 : 12} 0 q ${dir === 'left' ? -6 : 6} -7 ${dir === 'left' ? -12 : 12} 0`;
	return <path d={d} fill="none" stroke={color} strokeWidth={3.5} strokeLinecap="round" opacity={o} />;
};

export const CalorimetryDiagram = ({delay = 90, mode = 'combustion', cards, beats, note}: CalorimetryProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const list = cards ?? (mode === 'combustion' ? COMBUSTION_CARDS : NEUTRAL_CARDS);
	const b = beats ?? (mode === 'combustion' ? [650] : [300, 620]);

	const cardY0 = mode === 'combustion' ? 120 : 66;
	const cardGap = mode === 'combustion' ? 128 : 112;
	const cardH = mode === 'combustion' ? 104 : 94;

	// ── combustion rig ─────────────────────────────────────────────────────
	const leak = mode === 'combustion' ? ramp(frame, b[0], 20) : 0;
	const tempRise = mode === 'combustion' ? interpolate(frame, [0, 1100], [0.15, 0.85], clamp) : interpolate(frame, [b[1], b[1] + 360], [0.2, 0.8], clamp);
	const waves = (n: number, period: number) =>
		Array.from({length: n}, (_, k) => {
			const ph = (((frame + (k * period) / n) % period) + period) % period / period;
			return {ph, k};
		});

	// ── neutralisation rig ─────────────────────────────────────────────────
	const pour = mode === 'neutralisation' ? interpolate(frame, [b[0], b[0] + 70], [0, 1], clamp) : 0;
	const tilt = mode === 'neutralisation' ? Math.min(1, pour * 2.2) : 0;
	const cupLevel = 0.15 + 0.6 * pour;

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={mode === 'combustion' ? 'Combustion calorimetry: burning fuel heats water; q = mcΔT, then divide by moles of fuel; ΔHc is negative' : 'Neutralisation calorimetry: acid and base mixed in a cup; use the total solution mass in q = mcΔT, divide by moles of water formed; ΔHn is negative'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />

			<DioramaPlinth id={ID} cx={PX} cy={PY} rx={160}>
				{mode === 'combustion' ? (
					<g>
						{/* clamp stand */}
						<rect x={PX - 150} y={PY - 6} width={70} height={12} rx={4} fill="#5b6470" />
						<rect x={PX - 121} y={80} width={10} height={PY - 80} fill="#8a939e" />
						<rect x={PX - 121} y={176} width={96} height={9} rx={3} fill="#6d7680" />
						{/* can of water */}
						<g>
							<rect x={PX - 60} y={150} width={120} height={120} rx={10} fill="#c98a5a" stroke="#8a5a34" strokeWidth={2} />
							<rect x={PX - 52} y={178} width={104} height={84} rx={6} fill="rgba(90,160,225,0.75)" />
							<ellipse cx={PX} cy={150} rx={60} ry={10} fill="#e0a878" stroke="#8a5a34" strokeWidth={2} />
							<rect x={PX - 50} y={160} width={8} height={100} rx={4} fill="#ffffff" opacity={0.35} />
							<text x={PX} y={228} textAnchor="middle" fill="#ffffff" fontSize={18} fontWeight={800}>water</text>
						</g>
						<Thermometer x={PX + 36} top={88} bottom={250} level={tempRise} />
						{/* spirit burner */}
						<ellipse cx={PX} cy={PY + 2} rx={40} ry={9} fill="rgba(40,60,20,0.25)" />
						<path d={`M ${PX - 34} ${PY} L ${PX - 30} ${PY - 50} Q ${PX} ${PY - 62} ${PX + 30} ${PY - 50} L ${PX + 34} ${PY} Z`} fill="rgba(200,225,240,0.8)" stroke="rgba(70,90,110,0.6)" strokeWidth={2} />
						<rect x={PX - 30} y={PY - 32} width={60} height={30} fill="rgba(120,170,220,0.5)" />
						<rect x={PX - 3} y={PY - 70} width={6} height={14} fill="#5b4a36" />
						<text x={PX} y={PY - 12} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800}>fuel</text>
						<Flame x={PX} y={PY - 68} frame={frame} s={1} />
						{/* heat into the water */}
						{waves(3, 48).map(({ph, k}) => (
							<Wave key={k} x={PX - 24 + k * 24} y={PY - 118 - ph * 22} dir="up" color="#e0632e" o={Math.min(1, Math.min(ph, 1 - ph) * 5)} />
						))}
						{/* heat lost to the surroundings */}
						{leak > 0 &&
							waves(2, 60).map(({ph, k}) => (
								<Wave key={`l${k}`} x={k === 0 ? PX - 70 - ph * 24 : PX + 70 + ph * 24} y={PY - 120 + k * 8} dir={k === 0 ? 'left' : 'right'} color="#8a939e" o={leak * Math.min(1, Math.min(ph, 1 - ph) * 5)} />
							))}
					</g>
				) : (
					<g>
						{/* polystyrene cup with lid */}
						<path d={`M ${PX - 58} ${PY - 150} L ${PX - 46} ${PY - 4} Q ${PX} ${PY + 6} ${PX + 46} ${PY - 4} L ${PX + 58} ${PY - 150} Z`} fill="#fbfbf8" stroke="#c9c7bd" strokeWidth={2.5} />
						<path d={`M ${PX - 54} ${PY - 150 + 146 * (1 - cupLevel)} L ${PX - 46} ${PY - 6} Q ${PX} ${PY + 3} ${PX + 46} ${PY - 6} L ${PX + 54} ${PY - 150 + 146 * (1 - cupLevel)} Z`} fill="rgba(120,185,235,0.55)" />
						{[0.25, 0.5, 0.75].map((f) => <line key={f} x1={PX - 56 + 10 * f} y1={PY - 150 + 146 * f} x2={PX + 56 - 10 * f} y2={PY - 150 + 146 * f} stroke="#e7e4da" strokeWidth={1.5} />)}
						<rect x={PX - 64} y={PY - 160} width={128} height={12} rx={5} fill="#eceae2" stroke="#c9c7bd" strokeWidth={2} opacity={pour >= 1 ? 1 : 0} />
						<Thermometer x={PX + 14} top={PY - 250} bottom={PY - 40} level={tempRise} />
						{/* acid and base beakers pour in */}
						{[
							{side: -1, label: 'acid', liquid: 'rgba(235,120,110,0.45)'},
							{side: 1, label: 'base', liquid: 'rgba(120,120,235,0.4)'},
						].map((bk) => {
							const bx = PX + bk.side * 112;
							const cyB = PY - 42;
							const ang = -bk.side * 72 * tilt;
							const dx = -bk.side * 42 * tilt, dy = -128 * tilt;
							return (
								<g key={bk.label} transform={`translate(${bx + dx} ${cyB + dy}) rotate(${ang}) translate(${-bx} ${-cyB})`} opacity={1 - Math.max(0, pour - 0.8) * 5}>
									<Beaker cx={bx} baseY={PY} w={66} h={84} level={0.7 * (1 - pour)} liquid={bk.liquid} />
									<text x={bx} y={PY - 96} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={1 - tilt}>{bk.label}</text>
								</g>
							);
						})}
						{/* pour streams */}
						{tilt > 0.9 && pour < 0.9 && [-1, 1].map((sd) => (
							<path key={sd} d={`M ${PX + sd * 44} ${PY - 196} Q ${PX + sd * 30} ${PY - 190} ${PX + sd * 20} ${PY - 110}`} fill="none" stroke={sd < 0 ? 'rgba(235,120,110,0.7)' : 'rgba(120,120,235,0.7)'} strokeWidth={7} strokeLinecap="round" />
						))}
						{/* heat spreading through the whole mixture */}
						{frame > b[1] && waves(3, 54).map(({ph, k}) => (
							<Wave key={k} x={PX - 30 + k * 30} y={PY - 60 - ph * 50} dir="up" color="#e0632e" o={Math.min(1, Math.min(ph, 1 - ph) * 5) * ramp(frame, b[1], 20)} />
						))}
					</g>
				)}
			</DioramaPlinth>

			{mode === 'neutralisation' && (
				<g opacity={ramp(frame, list[0].at, 14)}>
					<text x={PX} y={PY + 116} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800}>m = mass of acid + base</text>
				</g>
			)}
			{note && (
				<text x={PX} y={PY + 116} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} opacity={ramp(frame, note.at, 14)}>{note.text}</text>
			)}

			{/* Method cards */}
			{list.map((c, i) => {
				const s = Math.max(0, spring({frame: frame - c.at, fps, config: {damping: 14, stiffness: 160}}));
				const y = cardY0 + i * cardGap;
				const hot = c.key;
				return (
					<g key={i} opacity={Math.min(1, s * 1.5)} transform={`translate(${(1 - s) * 30} 0)`}>
						<rect x={420} y={y} width={330} height={cardH} rx={16} fill="#ffffff" stroke={hot ? TOK.amber : TOK.rule} strokeWidth={hot ? 2.5 + idlePulse(frame) * 1.5 : 1.5} />
						<text x={440} y={y + 34} fill={hot ? TOK.amberInk : theme.accent} fontSize={19} fontWeight={800}>{c.title}</text>
						<text x={440} y={y + (mode === 'combustion' ? 78 : 72)} fill={TOK.ink} fontSize={mode === 'combustion' ? 30 : 22} fontWeight={800}>{c.eq}</text>
					</g>
				);
			})}
		</svg>
	);
};
