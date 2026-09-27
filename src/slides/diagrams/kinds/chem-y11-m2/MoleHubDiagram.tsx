// MoleHubDiagram (kind: chem11m2MoleHub): "n is the hub".
//
// A big MOLES plinth in the middle, with up to four measurable quantities on
// their own plinths around it (particles, mass, gas volume, solution, or a
// formula signpost). Each spoke is a two-lane road: the formula INTO moles on
// one lane, the formula OUT of moles on the other. Spokes appear one at a time
// as the narration names them, and a packet runs in to the hub and back out,
// so the picture says "every conversion passes through n".
//
// Optional: a centre chip (e.g. "× mole ratio") and a beat that lights every
// outbound lane ("then out to what you want").

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Chip, LANE, StationIcon, TrapLine, clamp, pileSlots, shade, textW, type StationIconKind} from './parts';

type Spoke = {icon: StationIconKind | 'formula'; label: string; into: string; out: string; value?: string; beat?: number};

export type MoleHubProps = {
	spokes?: Spoke[];
	/** Line over the hub, e.g. "1 mol = 6.022 × 10²³ particles". */
	note?: string;
	noteBeat?: number;
	centreChip?: string;
	centreBeat?: number;
	/** Frame at which every outbound lane lights up. */
	outBeat?: number;
	trap?: string;
	trapBeat?: number;
	delay?: number;
};

const ID = 'c11m2hub';
const W = 760;
const VB_H = 520;
const HUB = {x: 380, y: 262, rx: 104};
// Corner satellites: TL, TR, BL, BR.
const SAT = [
	{x: 104, y: 158},
	{x: 656, y: 158},
	{x: 104, y: 392},
	{x: 656, y: 392},
];
const SAT_RX = 70;

const DEFAULT_SPOKES: Spoke[] = [
	{icon: 'particles', label: 'particles', into: 'n = N ÷ Nₐ', out: 'N = n × Nₐ'},
	{icon: 'mass', label: 'mass', into: 'n = m ÷ M', out: 'm = n × M'},
	{icon: 'gas', label: 'gas volume', into: 'n = V ÷ Vₘ', out: 'V = n × Vₘ'},
	{icon: 'solution', label: 'solution', into: 'n = c × V', out: 'c = n ÷ V'},
];

const Signpost = ({x, y, text}: {x: number; y: number; text: string}) => {
	const w = Math.max(96, textW(text, 20) + 26);
	return (
		<g>
			<rect x={x - 5} y={y - 92} width={10} height={92} rx={3} fill={LANE.woodDark} />
			<rect x={x - w / 2} y={y - 104} width={w} height={44} rx={8} fill={shade(LANE.wood, 0.12)} stroke={LANE.woodDark} strokeWidth={2.5} />
			<text x={x} y={y - 75} textAnchor="middle" fill="#ffffff" fontSize={20} fontWeight={800}>{text}</text>
		</g>
	);
};

export const MoleHubDiagram = ({
	spokes = DEFAULT_SPOKES,
	note,
	noteBeat = 0,
	centreChip,
	centreBeat,
	outBeat,
	trap,
	trapBeat,
	delay = 62,
}: MoleHubProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const fade = (d: number, len = 12) => interpolate(frame, [d, d + len], [0, 1], clamp);
	const pulse = idlePulse(frame);
	const beats = spokes.map((s, i) => s.beat ?? 30 + i * 150);
	const hubPile = pileSlots(HUB.x, HUB.y + 14, 10, 14);
	const outOn = outBeat !== undefined ? fade(outBeat, 16) : 0;

	return (
		<svg viewBox={`0 0 ${W} ${VB_H}`} role="img" aria-label={`Moles at the centre, linked to ${spokes.map((s) => s.label).join(', ')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				{(['in', 'out', 'outOn'] as const).map((k) => (
					<marker key={k} id={`${ID}-arr-${k}`} viewBox="0 0 10 10" refX={7} refY={5} markerWidth={5} markerHeight={5} orient="auto-start-reverse">
						<path d="M 0 0 L 10 5 L 0 10 Z" fill={k === 'in' ? LANE.given : k === 'out' ? shade(LANE.wanted, 0.2) : LANE.wanted} />
					</marker>
				))}
			</defs>

			{note && (
				<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800} opacity={fade(noteBeat)}>
					{note}
				</text>
			)}

			{/* Roads first, so plinths sit on top of their ends */}
			{spokes.slice(0, 4).map((s, i) => {
				const sat = SAT[i];
				const on = fade(beats[i], 18);
				const ax = sat.x, ay = sat.y - 6, bx = HUB.x, by = HUB.y - 6;
				const len = Math.hypot(bx - ax, by - ay);
				const ux = (bx - ax) / len, uy = (by - ay) / len;
				const px = -uy, py = ux;
				const off = 8;
				const trim0 = SAT_RX * 0.95, trim1 = HUB.rx * 0.9;
				const draw = interpolate(frame, [beats[i], beats[i] + 22], [0, 1], clamp);
				const seg = (sgn: number) => {
					const x0 = ax + ux * trim0 + px * off * sgn, y0 = ay + uy * trim0 + py * off * sgn;
					const x1 = bx - ux * trim1 + px * off * sgn, y1 = by - uy * trim1 + py * off * sgn;
					return {x0, y0, x1: x0 + (x1 - x0) * draw, y1: y0 + (y1 - y0) * draw, fx: x1, fy: y1};
				};
				const a = seg(1), b = seg(-1);
				// Packet: into the hub along lane a, then back out along lane b.
				const t = interpolate(frame, [beats[i] + 24, beats[i] + 64, beats[i] + 70, beats[i] + 110], [0, 1, 1, 2], clamp);
				const pk = t <= 1
					? {x: a.x0 + (a.fx - a.x0) * t, y: a.y0 + (a.fy - a.y0) * t, c: LANE.given}
					: {x: b.fx + (b.x0 - b.fx) * (t - 1), y: b.fy + (b.y0 - b.fy) * (t - 1), c: LANE.wanted};
				const showPk = frame > beats[i] + 24 && frame < beats[i] + 110;
				// Formula labels either side of the road, placed toward the outside of the frame.
				const outGlow = outOn > 0;
				return (
					<g key={i} opacity={on}>
						<line x1={a.x0} y1={a.y0} x2={a.x1} y2={a.y1} stroke={LANE.given} strokeWidth={5} strokeLinecap="round" markerEnd={draw > 0.95 ? `url(#${ID}-arr-in)` : undefined} />
						<line x1={b.fx} y1={b.fy} x2={b.fx + (b.x0 - b.fx) * draw} y2={b.fy + (b.y0 - b.fy) * draw} stroke={outGlow ? LANE.wanted : shade(LANE.wanted, 0.2)} strokeWidth={outGlow ? 5 + pulse * 2 : 5} strokeLinecap="round" markerEnd={draw > 0.95 ? `url(#${ID}-arr-${outGlow ? 'outOn' : 'out'})` : undefined} />
						{showPk && <Ball x={pk.x} y={pk.y} r={8} color={pk.c} />}
					</g>
				);
			})}

			{/* Hub */}
			<g opacity={fade(0, 16)}>
				<DioramaPlinth id={ID} cx={HUB.x} cy={HUB.y} rx={HUB.rx}>
					<ellipse cx={HUB.x} cy={HUB.y} rx={HUB.rx * (0.9 + pulse * 0.04)} ry={HUB.rx * 0.34 * (0.9 + pulse * 0.04)} fill="none" stroke={LANE.moles} strokeWidth={2.5} opacity={0.35 + pulse * 0.25} />
				</DioramaPlinth>
			</g>
			{hubPile.map((p, i) => {
				const pop = spring({frame: frame - 6 - i * 2, fps, config: {damping: 12, stiffness: 200, mass: 0.6}});
				return <Ball key={i} x={p.x} y={p.y + idleBob(frame, i, 1.4)} r={15 * Math.max(0, pop)} color={LANE.moles} opacity={pop > 0.02 ? 1 : 0} />;
			})}
			<g opacity={fade(8)}>
				<text x={HUB.x} y={HUB.y + 82} textAnchor="middle" fill={LANE.moles} fontSize={30} fontWeight={900}>n</text>
				<text x={HUB.x} y={HUB.y + 104} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.08em">MOLES</text>
			</g>
			{centreChip && centreBeat !== undefined && (
				<Chip x={HUB.x} y={HUB.y - 110} text={centreChip} color={LANE.moles} on={frame > centreBeat && frame < centreBeat + 60} opacity={fade(centreBeat)} fontSize={21} />
			)}

			{/* Satellites */}
			{spokes.slice(0, 4).map((s, i) => {
				const sat = SAT[i];
				const pop = spring({frame: frame - beats[i], fps, config: {damping: 13, stiffness: 170}});
				const k = Math.max(0, Math.min(1, pop));
								return (
					<g key={i} opacity={Math.min(1, Math.max(0, pop) * 1.5)}>
						<DioramaPlinth id={ID} cx={sat.x} cy={sat.y} rx={SAT_RX} />
						<g transform={`translate(${sat.x}, ${sat.y + 4}) scale(${0.7 + 0.3 * k}) translate(${-sat.x}, ${-(sat.y + 4)})`}>
							{s.icon === 'formula' ? (
								<Signpost x={sat.x} y={sat.y + 4} text={s.value ?? 'EF × n'} />
							) : (
								<StationIcon id={`${ID}${i}`} icon={s.icon} x={sat.x} baseY={sat.y + 4} value={s.value} frame={frame} color={LANE.given} scale={s.icon === 'gas' ? 0.85 : 1} />
							)}
						</g>
						<text x={sat.x} y={sat.y + 58} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{s.label}</text>
						<g opacity={fade(beats[i] + 12)}>
							<text x={sat.x} y={sat.y + 83} textAnchor="middle" fill={LANE.given} fontSize={19} fontWeight={800}>{s.into}</text>
							<text x={sat.x} y={sat.y + 106} textAnchor="middle" fill={outOn > 0 ? LANE.wanted : shade(LANE.wanted, 0.1)} fontSize={19} fontWeight={800}>{s.out}</text>
						</g>
					</g>
				);
			})}

			{trap && trapBeat !== undefined && <TrapLine x={W / 2} y={VB_H - 22} text={trap} opacity={fade(trapBeat, 14)} pulse={pulse} />}
		</svg>
	);
};
