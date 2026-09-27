// HaberLoopDiagram (kind: chem12m5HaberLoop) — a Haber plant diorama.
//
// N₂ + H₂ feed in from the left, pass up through the reactor's iron catalyst
// beds, and on to a separator. Only some molecules leave the reactor as NH₃
// (about 1 in 7 of the balls, standing in for "15 % per pass"); those drop out
// as product, and the unreacted N₂ + H₂ ride the recycle loop back to the
// reactor inlet. Condition cards on the right arrive on their beats, each
// lighting up its part of the plant (the reactor warms, the gauge needle
// rises, the catalyst beds shimmer, the recycle loop pulses).
//
// Only numbers from the scene: 400–500 °C, about 300 °C, 150–300 atm, 15 % per
// pass, over 95 % overall.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idlePulse} from '../../diorama';
import {AtomDefs, colorOf, hash01, ramp, shade} from './shared';
import {polyAt, wrap} from './lcKit';
import {GasMolecule} from './lcMolecules';

type CardSpec = {at: number; title: string; lines: {at: number; text: string}[]};

export type HaberLoopProps = {
	delay?: number;
	cards?: CardSpec[];
};

const ID = 'c12m5hb';
const W = 760;
// plant geometry
const R_X0 = 132, R_X1 = 228, R_Y0 = 148, R_Y1 = 372;
const S_X0 = 298, S_X1 = 362, S_Y0 = 196, S_Y1 = 346;
const JX = 60, FEED_Y = 346, LOOP_Y = 82;

const P_FEED: [number, number][] = [[6, FEED_Y], [JX, FEED_Y]];
const P_MAIN: [number, number][] = [
	[JX, FEED_Y], [R_X0 + 20, FEED_Y], [180, FEED_Y - 8], [180, R_Y0 + 22], [R_X1 + 10, R_Y0 + 22], [268, R_Y0 + 22], [268, 226], [S_X0 + 18, 226], [330, 250],
];
const P_LOOP: [number, number][] = [[330, 250], [338, S_Y0 + 6], [338, LOOP_Y], [JX, LOOP_Y], [JX, FEED_Y]];
const P_OUT: [number, number][] = [[330, 250], [330, 318], [S_X1 + 4, 318], [400, 318]];

const len = (p: [number, number][]) => p.slice(1).reduce((s, q, i) => s + Math.hypot(q[0] - p[i][0], q[1] - p[i][1]), 0);
// arc-length resample so particles move at constant speed
const resample = (p: [number, number][], n = 120): [number, number][] => {
	const L = len(p);
	const out: [number, number][] = [];
	let seg = 0, acc = 0;
	for (let k = 0; k <= n; k++) {
		const target = (k / n) * L;
		while (seg < p.length - 2 && acc + Math.hypot(p[seg + 1][0] - p[seg][0], p[seg + 1][1] - p[seg][1]) < target) {
			acc += Math.hypot(p[seg + 1][0] - p[seg][0], p[seg + 1][1] - p[seg][1]);
			seg++;
		}
		const sl = Math.hypot(p[seg + 1][0] - p[seg][0], p[seg + 1][1] - p[seg][1]) || 1;
		const f = Math.min(1, (target - acc) / sl);
		out.push([p[seg][0] + (p[seg + 1][0] - p[seg][0]) * f, p[seg][1] + (p[seg + 1][1] - p[seg][1]) * f]);
	}
	return out;
};
const RM = resample(P_MAIN), RL = resample(P_LOOP), RO = resample(P_OUT, 40), RF = resample(P_FEED, 20);
const SPEED = 2.6;
const T_MAIN = len(P_MAIN) / SPEED, T_LOOP = len(P_LOOP) / SPEED;
const T_OUT = len(P_OUT) / SPEED, T_FEED = len(P_FEED) / SPEED;

const DEFAULT_CARDS: CardSpec[] = [
	{at: 47, title: '400–500 °C', lines: [
		{at: 90, text: 'Colder gives a better yield, but far too slow'},
		{at: 227, text: 'Iron catalyst inactive below about 300 °C'},
	]},
	{at: 427, title: '150–300 atm', lines: [
		{at: 470, text: 'Helps both yield and rate'},
		{at: 651, text: 'Limit is engineering cost, not chemistry'},
	]},
	{at: 708, title: 'Iron catalyst', lines: [
		{at: 730, text: 'Lifts the rate, so a moderate T is enough'},
		{at: 814, text: 'Does nothing to the yield'},
	]},
	{at: 845, title: 'Recycling', lines: [
		{at: 932, text: '15% per pass → over 95% overall'},
	]},
];

export const HaberLoopDiagram = ({delay = 62, cards = DEFAULT_CARDS}: HaberLoopProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const [cT, cP, cC, cR] = [cards[0]?.at ?? 1e9, cards[1]?.at ?? 1e9, cards[2]?.at ?? 1e9, cards[3]?.at ?? 1e9];

	// ── particles: each cycles main path → (loop | out + feed) ──
	const N = 18;
	const CYCLE = T_MAIN + T_LOOP;
	const t = frame + 400;
	const parts = Array.from({length: N}, (_, k) => {
		const ph = (k / N) * CYCLE;
		const tt = t + ph;
		const pass = Math.floor(tt / CYCLE);
		const u = tt - pass * CYCLE;
		const conv = hash01(k * 31 + pass * 7) < 0.15;
		const kind = k % 4 === 0 ? 'N2' : 'H2';
		if (u < T_MAIN) {
			const s = u / T_MAIN;
			const [x, y] = polyAt(RM, s);
			// converted molecules change to NH₃ on the top catalyst bed
			const isNH3 = conv && y < R_Y0 + 60 && x >= 179;
			return {x, y, kind: isNH3 ? 'NH3' : kind, op: 1};
		}
		const v = u - T_MAIN;
		if (!conv) {
			const [x, y] = polyAt(RL, v / T_LOOP);
			return {x, y, kind, op: 1};
		}
		if (v < T_OUT) {
			const [x, y] = polyAt(RO, v / T_OUT);
			return {x, y, kind: 'NH3', op: Math.min(1, (400 - x) / 14)};
		}
		// fresh feed replaces it, entering from the left at the end of the slot
		const rest = v - T_OUT;
		const start = T_LOOP - T_OUT - T_FEED;
		if (rest < start) return {x: RF[0][0], y: RF[0][1], kind, op: 0};
		const [x, y] = polyAt(RF, (rest - start) / T_FEED);
		return {x, y, kind, op: Math.min(1, (x - 4) / 14)};
	});

	const pipe = (p: [number, number][], hi = 0, color = TOK.amber) => {
		const d = p.map((q, i) => `${i ? 'L' : 'M'} ${q[0]} ${q[1]}`).join(' ');
		return (
			<g>
				<path d={d} fill="none" stroke="#8d9299" strokeWidth={16} strokeLinejoin="round" strokeLinecap="round" />
				<path d={d} fill="none" stroke="#e6e8eb" strokeWidth={10} strokeLinejoin="round" strokeLinecap="round" />
				{hi > 0 && <path d={d} fill="none" stroke={color} strokeWidth={4 + pulse * 2} strokeLinejoin="round" strokeLinecap="round" opacity={hi * 0.55} />}
			</g>
		);
	};

	const warm = ramp(frame, cT, 30);
	const press = ramp(frame, cP, 40);
	const cat = ramp(frame, cC, 20);
	const rec = ramp(frame, cR, 20);
	const fe = colorOf('Fe');

	// ── cards ──
	const CX = 414, CW = 338;
	let cy = 30;
	const laid = cards.map((c) => {
		const ls = c.lines.map((l) => ({...l, rows: wrap(l.text, 17, CW - 44)}));
		const h = 44 + ls.reduce((s, l) => s + l.rows.length * 22 + 4, 0) + 8;
		const y = cy;
		cy += h + 10;
		return {...c, ls, h, y};
	});

	const needleA = (-200 + 150 * press) * (Math.PI / 180);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Haber plant: nitrogen and hydrogen feed through a reactor with iron catalyst beds at 400 to 500 °C and 150 to 300 atm; ammonia is separated out and the unreacted nitrogen and hydrogen are recycled, turning 15 % per pass into over 95 % overall" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['N', 'H']} />
			<defs>
				<linearGradient id={`${ID}-steel`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor="#b9bdc3" />
					<stop offset="45%" stopColor="#eef0f2" />
					<stop offset="100%" stopColor="#9398a0" />
				</linearGradient>
				<linearGradient id={`${ID}-hot`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor="#e9a36a" />
					<stop offset="45%" stopColor="#f7d9b8" />
					<stop offset="100%" stopColor="#d9844a" />
				</linearGradient>
			</defs>

			<g opacity={ramp(frame, 0, 16)}>
				<DioramaPlinth id={`${ID}r`} cx={180} cy={392} rx={84} />
				<DioramaPlinth id={`${ID}s`} cx={330} cy={392} rx={56} />

				{/* pipes: recycle loop (behind), feed, main, out */}
				{pipe(P_LOOP, rec)}
				{pipe(P_FEED)}
				{pipe([[JX, FEED_Y], [R_X0, FEED_Y]])}
				{pipe([[R_X1, R_Y0 + 22], [268, R_Y0 + 22], [268, 226], [S_X0, 226]])}
				{pipe(P_OUT.slice(1))}

				{/* reactor */}
				<rect x={R_X0} y={R_Y0} width={R_X1 - R_X0} height={R_Y1 - R_Y0} rx={30} fill={`url(#${ID}-steel)`} stroke="#7c8188" strokeWidth={2} />
				<rect x={R_X0} y={R_Y0} width={R_X1 - R_X0} height={R_Y1 - R_Y0} rx={30} fill={`url(#${ID}-hot)`} opacity={warm * (0.75 + 0.25 * pulse)} />
				<rect x={R_X0 + 12} y={R_Y0 + 14} width={R_X1 - R_X0 - 24} height={R_Y1 - R_Y0 - 28} rx={18} fill="rgba(255,255,255,0.55)" />
				{/* catalyst beds */}
				{[0, 1, 2].map((i) => {
					const y = R_Y0 + 70 + i * 62;
					return (
						<g key={i}>
							<rect x={R_X0 + 16} y={y} width={R_X1 - R_X0 - 32} height={16} rx={4} fill={shade(fe, -0.1)} />
							{Array.from({length: 6}, (_, j) => (
								<circle key={j} cx={R_X0 + 26 + j * 12} cy={y + 8} r={3.2} fill={shade(fe, 0.25 + 0.2 * cat * Math.sin(frame / 6 + j + i * 2))} />
							))}
						</g>
					);
				})}
				{/* separator */}
				<rect x={S_X0} y={S_Y0} width={S_X1 - S_X0} height={S_Y1 - S_Y0} rx={20} fill={`url(#${ID}-steel)`} stroke="#7c8188" strokeWidth={2} />
				<rect x={S_X0 + 9} y={S_Y1 - 50} width={S_X1 - S_X0 - 18} height={38} rx={10} fill="rgba(138,92,201,0.25)" />
			</g>

			{/* flowing molecules */}
			<g opacity={ramp(frame, 8, 16)}>
				{parts.map((p, k) => (p.op > 0.02 ? <GasMolecule key={k} id={ID} kind={p.kind as 'N2' | 'H2' | 'NH3'} x={p.x} y={p.y} s={0.72} opacity={p.op} /> : null))}
			</g>

			{/* gauge on the reactor */}
			<g opacity={ramp(frame, 0, 16)}>
				<circle cx={R_X0 - 4} cy={R_Y0 + 44} r={22} fill="#8d9299" />
				<circle cx={R_X0 - 4} cy={R_Y0 + 44} r={18} fill="#ffffff" />
				<line x1={R_X0 - 4} y1={R_Y0 + 44} x2={R_X0 - 4 + Math.cos(needleA) * 14} y2={R_Y0 + 44 + Math.sin(needleA) * 14} stroke="#c0392b" strokeWidth={3} strokeLinecap="round" />
				<circle cx={R_X0 - 4} cy={R_Y0 + 44} r={3} fill={TOK.ink} />
			</g>

			{/* plant labels */}
			<g opacity={ramp(frame, 10, 16)}>
				<text x={180} y={454} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>reactor</text>
				<text x={330} y={454} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>separator</text>
				<text x={8} y={FEED_Y + 34} fill={TOK.inkDim} fontSize={16} fontWeight={800}>N₂ + H₂ in</text>
				<text x={398} y={300} textAnchor="end" fill={shade('#8a5cc9', -0.1)} fontSize={16} fontWeight={800}>NH₃ out</text>
				<text x={200} y={LOOP_Y - 18} textAnchor="middle" fill={rec > 0 ? TOK.amberInk : TOK.inkDim} fontSize={16} fontWeight={800}>unreacted N₂ + H₂ recycled</text>
			</g>

			{/* condition cards */}
			{laid.map((c, i) => {
				const on = ramp(frame, c.at, 14);
				const isRec = i === 3;
				return (
					<g key={i} opacity={on} transform={`translate(0 ${(1 - on) * 10})`}>
						<rect x={CX} y={c.y} width={CW} height={c.h} rx={14} fill="#ffffff" stroke={isRec ? TOK.amber : TOK.rule} strokeWidth={isRec ? 2.5 : 2} />
						<rect x={CX} y={c.y + 12} width={5} height={c.h - 24} rx={2.5} fill={isRec ? TOK.amber : theme.accent} />
						<text x={CX + 20} y={c.y + 30} fill={isRec ? TOK.amberInk : theme.accent} fontSize={21} fontWeight={800}>{c.title}</text>
						{(() => {
							let ly = c.y + 58;
							return c.ls.map((l, j) => {
								const y0 = ly;
								ly += l.rows.length * 22 + 4;
								return (
									<g key={j} opacity={ramp(frame, l.at, 12)}>
										{l.rows.map((r, q) => (
											<text key={q} x={CX + 20} y={y0 + q * 22} fill={TOK.ink} fontSize={17} fontWeight={700}>{r}</text>
										))}
									</g>
								);
							});
						})()}
					</g>
				);
			})}
		</svg>
	);
};
