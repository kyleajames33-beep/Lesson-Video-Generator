// CatalystBothDiagram (kind: chem12m5CatalystBoth) — why a catalyst cannot
// shift an equilibrium.
//
// An exothermic energy profile stands as a stone hill. Both activation
// energies are marked: forward (reactants → peak) and reverse (products →
// peak). On the catalyst beat a lower hump is drawn and BOTH Ea arrows shrink
// to it; the removed piece is the same amber bracket on each arrow ("same
// drop"). Rate meters on the right then rise by the same factor (chevrons in
// each bar run at a speed set by its rate), so their ratio, and with it Keq, the
// equilibrium position and ΔH, is unchanged. An inset concentration–time graph
// shows the catalysed run reaching the same plateau sooner. Notes (config) add
// the scene's extras on their beats.
//
// Qualitative on purpose: no kJ values (the scenes give none).

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {STONE, idlePulse} from '../../diorama';
import {Card, clamp, eramp, ramp} from './shared';
import {Arrow, Axes, Gap, Lines, PRODUCT, Tag, polyPath, wrap} from './lcKit';

export type CatalystBothProps = {
	delay?: number;
	/** 'ratio': bars show forward vs reverse rate at equal concentrations (unequal, ratio kept).
	 *  'equal': system already at equilibrium, rates equal and stay equal. */
	meterMode?: 'ratio' | 'equal';
	beats?: {
		/** catalysed path drawn */
		path?: number;
		/** both Ea arrows shrink + same-drop bracket */
		both?: number;
		/** rate meters rise */
		rates?: number;
		/** ratio / equal-rates verdict */
		ratio?: number;
		/** Keq / position / ΔH unchanged chips */
		unchanged?: number;
		/** inset concentration–time graph */
		inset?: number;
	};
	/** Extra notes in the bottom-right card, each on its beat. */
	notes?: {at: number; text: string; amber?: boolean}[];
};

const ID = 'c12m5cat';
const W = 760;
const GX0 = 96, GX1 = 478;
const YR = 212, YP = 292, BASE = 330;
const PEAK = 86, PEAK_CAT = 152;
const U_F = 0.2, U_R = 0.8;

const smooth = (t: number) => t * t * (3 - 2 * t);
const yAt = (u: number, peak: number) => {
	const base = YR + (YP - YR) * smooth(Math.max(0, Math.min(1, (u - 0.3) / 0.4)));
	const hump = Math.exp(-(((u - 0.5) / 0.12) ** 2));
	const mid = (YR + YP) / 2;
	return base - (mid - peak) * hump;
};
const xAt = (u: number) => GX0 + u * (GX1 - GX0);
const profile = (peak: number, u1 = 1) => {
	const pts: [number, number][] = [];
	for (let i = 0; i <= 90; i++) {
		const u = (i / 90) * u1;
		pts.push([xAt(u), yAt(u, peak)]);
	}
	return pts;
};

export const CatalystBothDiagram = ({
	delay = 62,
	meterMode = 'ratio',
	beats = {},
	notes = [],
}: CatalystBothProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {path: 110, both: 165, rates: 310, ratio: 440, unchanged: 560, inset: 670, ...beats};

	const pathIn = eramp(frame, b.path, 40);
	const shrink = eramp(frame, b.both + 20, 50);
	const bothIn = ramp(frame, b.both, 14);
	const bracketIn = ramp(frame, b.both + 60, 16);
	const peakNow = PEAK + (PEAK_CAT - PEAK) * shrink;

	// ── rates: forward/reverse at equal concentrations share one factor ──
	const FACTOR = 2.2;
	const baseF = meterMode === 'equal' ? 62 : 70;
	const baseR = meterMode === 'equal' ? 62 : 34;
	const rise = eramp(frame, b.rates, 40);
	const k = 1 + (FACTOR - 1) * rise;
	const barF = baseF * k, barR = baseR * k;

	const MX = 528, MW = 206;
	const chevrons = (x0: number, y: number, w: number, speed: number, dir: 1 | -1, color: string) => {
		const out = [];
		const gap = 26;
		const off = ((frame * speed) % gap + gap) % gap;
		for (let i = -1; i < w / gap + 1; i++) {
			const cx = dir === 1 ? x0 + i * gap + off : x0 + w - i * gap - off;
			if (cx < x0 + 6 || cx > x0 + w - 6) continue;
			out.push(<path key={i} d={`M ${cx - 4 * dir} ${y - 5} L ${cx + 3 * dir} ${y} L ${cx - 4 * dir} ${y + 5}`} fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />);
		}
		return out;
	};

	// ── inset: [product] vs time, uncatalysed vs catalysed ──
	const IX0 = 70, IX1 = 380, IY0 = 392, IY1 = 494;
	const plateau = IY0 + 18;
	const curve = (tau: number) => {
		const pts: [number, number][] = [];
		for (let i = 0; i <= 80; i++) {
			const t = i / 80;
			pts.push([IX0 + 4 + t * (IX1 - IX0 - 14), IY1 - (IY1 - plateau) * (1 - Math.exp(-t / tau))]);
		}
		return pts;
	};
	const slow = curve(0.3), fast = curve(0.3 / FACTOR);
	const insetIn = ramp(frame, b.inset, 14);
	const draw = interpolate(frame, [b.inset + 10, b.inset + 100], [0, 1], clamp);
	const knee = (tau: number) => IX0 + 4 + 3 * tau * (IX1 - IX0 - 14);

	const noteLines = notes.map((n) => ({...n, lines: wrap(n.text, 17, 290)}));
	let ny = 404;
	const notePos = noteLines.map((n) => {
		const y = ny;
		ny += n.lines.length * 22 + 12;
		return y;
	});
	const pulse = idlePulse(frame);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Exothermic energy profile: a catalyst lowers the forward and the reverse activation energy by the same amount, so both rates rise by the same factor; Keq, the equilibrium position and ΔH are unchanged and equilibrium is reached sooner" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<linearGradient id={`${ID}-hill`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={STONE.topLight} />
					<stop offset="60%" stopColor={STONE.top} />
					<stop offset="100%" stopColor={STONE.side} />
				</linearGradient>
				<linearGradient id={`${ID}-rock`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={STONE.side} />
					<stop offset="100%" stopColor={STONE.sideDark} />
				</linearGradient>
			</defs>

			{/* energy axis */}
			<g opacity={ramp(frame, 0)}>
				<line x1={GX0 - 22} y1={BASE + 6} x2={GX0 - 22} y2={50} stroke={TOK.inkMute} strokeWidth={2.2} />
				<path d={`M ${GX0 - 22} 42 l -6 11 l 12 0 Z`} fill={TOK.inkMute} />
				<text x={GX0 - 36} y={200} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} transform={`rotate(-90 ${GX0 - 36} 200)`}>energy</text>
				<text x={(GX0 + GX1) / 2} y={BASE + 36} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>reaction progress →</text>
			</g>

			{/* stone hill = uncatalysed profile */}
			<g opacity={ramp(frame, 2, 16)}>
				<path d={`${polyPath(profile(PEAK))} L ${GX1} ${BASE} L ${GX0} ${BASE} Z`} fill={`url(#${ID}-hill)`} />
				<rect x={GX0} y={BASE - 10} width={GX1 - GX0} height={14} rx={3} fill={`url(#${ID}-rock)`} />
				<path d={polyPath(profile(PEAK))} fill="none" stroke={STONE.sideDark} strokeWidth={4} strokeLinejoin="round" strokeDasharray={pathIn > 0.5 ? '9 7' : undefined} />
				<text x={xAt(0.1)} y={YR + 28} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>reactants</text>
				<text x={xAt(0.9)} y={YP + 26} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>products</text>
			</g>

			{/* catalysed pathway */}
			<g opacity={pathIn > 0 ? 1 : 0}>
				<path d={polyPath(profile(PEAK_CAT), pathIn)} fill="none" stroke={theme.accent} strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" />
				<text x={xAt(0.47)} y={PEAK_CAT + 104} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} opacity={ramp(frame, b.path + 30, 14)}>catalysed</text>
			</g>

			{/* activation energies, both directions */}
			<g opacity={ramp(frame, 20, 16)}>
				<line x1={xAt(U_F) - 8} y1={PEAK} x2={xAt(U_R) + 8} y2={PEAK} stroke={TOK.inkMute} strokeWidth={1.8} strokeDasharray="5 5" />
				<line x1={xAt(0.62)} y1={YP} x2={xAt(U_R) + 8} y2={YP} stroke={TOK.inkMute} strokeWidth={1.8} strokeDasharray="5 5" />
				<Arrow x1={xAt(U_F)} y1={YR} x2={xAt(U_F)} y2={peakNow} color={TOK.inkDim} w={4} g={ramp(frame, 24, 20)} />
				<Arrow x1={xAt(U_R)} y1={YP} x2={xAt(U_R)} y2={peakNow} color={PRODUCT} w={4} g={ramp(frame, 34, 20)} />
				<text x={xAt(U_F) - 10} y={(YR + peakNow) / 2 + 6} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={800}>Ea fwd</text>
				<text x={xAt(U_R) + 10} y={(YP + peakNow) / 2 + 6} fill={PRODUCT} fontSize={17} fontWeight={800}>Ea rev</text>
			</g>
			<g opacity={bothIn}>
				<line x1={xAt(U_F) - 8} y1={PEAK_CAT} x2={xAt(0.36)} y2={PEAK_CAT} stroke={theme.accent} strokeWidth={1.8} strokeDasharray="5 5" />
				<line x1={xAt(0.64)} y1={PEAK_CAT} x2={xAt(U_R) + 8} y2={PEAK_CAT} stroke={theme.accent} strokeWidth={1.8} strokeDasharray="5 5" />
			</g>
			{/* same-drop brackets */}
			<g opacity={bracketIn}>
				{[U_F, U_R].map((u, i) => {
					const x = xAt(u) + (i === 0 ? 16 : -16);
					return <Gap key={i} x={x} y1={PEAK} y2={PEAK_CAT} color={TOK.amber} w={3 + pulse * 1.2} head={9} />;
				})}
				<Tag x={xAt(0.5)} y={PEAK - 30} text="same drop both ways" color={TOK.amber} ink={TOK.amberInk} anchor="middle" size={17} />
			</g>

			{/* ΔH */}
			<g opacity={ramp(frame, b.unchanged + 40, 14)}>
				<line x1={xAt(0.3)} y1={YR} x2={GX1 + 22} y2={YR} stroke={theme.accent} strokeWidth={1.6} strokeDasharray="4 5" />
				<Arrow x1={GX1 + 14} y1={YR} x2={GX1 + 14} y2={YP - 2} color={theme.accent} w={3.5} head={10} g={ramp(frame, b.unchanged + 40, 20)} />
				<text x={GX1 + 22} y={(YR + YP) / 2 + 6} fill={theme.accent} fontSize={17} fontWeight={800}>ΔH</text>
			</g>

			{/* rate meters */}
			<g opacity={ramp(frame, 40, 16)}>
				<text x={MX} y={66} fill={TOK.ink} fontSize={18} fontWeight={800}>forward rate →</text>
				<rect x={MX} y={76} width={MW} height={20} rx={10} fill="rgba(0,0,0,0.06)" />
				<rect x={MX} y={76} width={barF} height={20} rx={10} fill={TOK.inkDim} />
				{chevrons(MX, 86, barF, 0.35 * k, 1, '#ffffff')}
				<text x={MX} y={130} fill={TOK.ink} fontSize={18} fontWeight={800}>← reverse rate</text>
				<rect x={MX} y={140} width={MW} height={20} rx={10} fill="rgba(0,0,0,0.06)" />
				<rect x={MX} y={140} width={barR} height={20} rx={10} fill={PRODUCT} />
				{chevrons(MX, 150, barR, 0.35 * k * (baseR / baseF), -1, '#ffffff')}
			</g>
			<text x={MX} y={188} fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={ramp(frame, b.rates + 30, 14)}>both × the same factor</text>
			<g opacity={ramp(frame, b.ratio, 14)}>
				<text x={MX} y={222} fill={theme.accent} fontSize={19} fontWeight={800}>
					{meterMode === 'equal' ? 'equal rates stay equal' : 'ratio of rates unchanged'}
				</text>
				<text x={MX} y={245} fill={TOK.inkDim} fontSize={17} fontWeight={700}>
					{meterMode === 'equal' ? '→ no shift' : '→ same equilibrium'}
				</text>
			</g>
			{/* unchanged chips */}
			{['Keq unchanged', 'position unchanged', 'ΔH unchanged'].map((t, i) => (
				<Tag key={t} x={MX} y={278 + i * 35} text={t} color={theme.accent} ink={theme.accent} size={17} opacity={ramp(frame, b.unchanged + i * 20, 12)} />
			))}

			{/* inset: same plateau, sooner */}
			<g opacity={insetIn}>
				<Card x={30} y={372} w={378} h={150} />
				<Axes x0={IX0} y0={IY0 - 6} x1={IX1} y1={IY1} xLabel="time" yLabel="[product]" size={15} />
				<line x1={IX0} y1={plateau} x2={IX1} y2={plateau} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="5 5" />
				<text x={IX1 - 4} y={plateau - 8} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>same equilibrium</text>
				<path d={polyPath(slow, draw)} fill="none" stroke={TOK.inkMute} strokeWidth={3.5} strokeDasharray="8 6" strokeLinecap="round" />
				<path d={polyPath(fast, draw)} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinecap="round" />
				<g opacity={ramp(frame, b.inset + 60, 14)}>
					<text x={knee(0.3 / FACTOR) + 6} y={IY1 - 36} fill={theme.accent} fontSize={15} fontWeight={800}>catalysed</text>
					<text x={knee(0.3) - 8} y={IY1 - 10} fill={TOK.inkDim} fontSize={15} fontWeight={800}>uncatalysed</text>
				</g>
			</g>

			{/* notes */}
			{noteLines.map((n, i) => (
				<g key={i} opacity={ramp(frame, n.at, 14)}>
					<circle cx={436} cy={notePos[i] - 6} r={5} fill={n.amber ? TOK.amber : theme.accent} />
					<Lines x={450} y={notePos[i]} lines={n.lines} size={17} gap={1.3} color={n.amber ? TOK.amberInk : TOK.ink} weight={n.amber ? 800 : 700} />
				</g>
			))}
		</svg>
	);
};
