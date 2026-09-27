// StaticDynamicDiagram (kind: chem12m5StaticDynamic) — two ways to look still.
//
// Top row, STATIC: magnesium burns (2Mg + O₂ → 2MgO). Every Mg atom and O₂
// molecule flies across and becomes MgO, then nothing moves ever again: both
// rate chips read 0. It is deliberately motionless; the contrast is the lesson.
// Bottom row, DYNAMIC: a reversible A ⇌ B already at equilibrium. Particles hop
// both ways all the time (exchangeSim), the counters never change, and the two
// rate bars are equal and non-zero.
//
// Beat plan (frames after `delay`): static row reacts from `burnAt`; rates-zero
// chips at `zeroAt`; dynamic row enters at `dynamicAt`; equal-rates chip at
// `equalAt`; closing caption at `calmAt`.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {AtomDefs, Ball, Pill, clamp, ease, ramp} from './shared';
import {runExchange} from './exchangeSim';

export type StaticDynamicProps = {
	delay?: number;
	burnAt?: number;
	zeroAt?: number;
	dynamicAt?: number;
	equalAt?: number;
	calmAt?: number;
};

const ID = 'c12m5sd';
const W = 760;
const XS = [186, 574];
const RX = 104;
const Y1 = 150; // static row plinth
const Y2 = 398; // dynamic row plinth
const R = 12;
const PRODUCT = '#8a5cc9';
const N_MG = 6; // 2Mg + O₂ → 2MgO: 6 Mg + 3 O₂ → 6 MgO
const FLIGHT = 24;

export const StaticDynamicDiagram = ({
	delay = 62,
	burnAt = 70,
	zeroAt = 269,
	dynamicAt = 578,
	equalAt = 748,
	calmAt = 917,
}: StaticDynamicProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	// ── Static row: one-shot irreversible burn ──
	const slotsL = plinthSlots(XS[0], Y1, RX, 9);
	const slotsR = plinthSlots(XS[1], Y1, RX * 1.08, N_MG);
	const burnT = (k: number) => ease(interpolate(frame, [burnAt + k * 18, burnAt + k * 18 + 34], [0, 1], clamp));
	const reactants: {el: 'Mg' | 'O2'; slot: number; k: number}[] = [];
	for (let i = 0; i < N_MG; i++) reactants.push({el: 'Mg', slot: i, k: i});
	for (let j = 0; j < 3; j++) reactants.push({el: 'O2', slot: N_MG + j, k: j * 2 + 1});
	const burnDone = burnAt + (N_MG - 1) * 18 + 34;
	const mgLeft = reactants.filter((r) => r.el === 'Mg' && burnT(r.k) < 0.5).length;
	const madeMgO = Array.from({length: N_MG}, (_, i) => burnT(i) >= 0.5).filter(Boolean).length;
	const topIn = ramp(frame, 0, 14);

	// ── Dynamic row: A ⇌ B at equilibrium from the start ──
	const left0 = 4, right0 = 6;
	const aEq = left0;
	const kf = 1 / (20 * aEq);
	const kr = (kf * left0) / right0;
	const dStart = dynamicAt + 20;
	const run = runExchange({left0, right0, kf, kr, start: dStart, frames: dStart + 2400, flight: FLIGHT});
	const f = Math.max(0, Math.min(dStart + 2400, Math.floor(frame)));
	const dynIn = ramp(frame, dynamicAt, 16);
	const dynSlots = [plinthSlots(XS[0], Y2, RX, 6), plinthSlots(XS[1], Y2, RX, 8)];
	const occ = (side: 0 | 1, at: number) => {
		const g = Math.max(0, Math.min(dStart + 2400, at));
		return side === 0 ? run.onLeft[g] : run.onRight[g];
	};
	const flying: {x: number; y: number; t: number; dir: 'f' | 'r'; k: number}[] = [];
	run.events.forEach((e, k) => {
		const land = e.start + FLIGHT;
		if (frame < e.start || frame >= land) return;
		const src: 0 | 1 = e.dir === 'f' ? 0 : 1;
		const dst: 0 | 1 = e.dir === 'f' ? 1 : 0;
		const s0 = dynSlots[src][Math.max(0, occ(src, e.start - 1) - 1)] ?? {x: XS[src], y: Y2};
		const s1 = dynSlots[dst][Math.max(0, occ(dst, land) - 1)] ?? {x: XS[dst], y: Y2};
		const u = ease((frame - e.start) / FLIGHT);
		const H = e.dir === 'f' ? 62 : 28;
		flying.push({x: s0.x + (s1.x - s0.x) * u, y: s0.y + (s1.y - s0.y) * u - Math.sin(Math.PI * u) * H, t: u, dir: e.dir, k});
	});
	const MX = W / 2;
	const pop = (j: number, at: number) => Math.max(0, spring({frame: frame - at - j * 2, fps, config: {damping: 13, stiffness: 220, mass: 0.6}}));

	const MgO = ({x, y, s = 1}: {x: number; y: number; s?: number}) => (
		<g transform={`translate(${x},${y}) scale(${s})`}>
			<Ball id={ID} el="Mg" x={-7} y={0} r={R} />
			<Ball id={ID} el="O" x={8} y={1} r={R * 0.92} />
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Static equilibrium: burnt magnesium has stopped, both rates are zero. Dynamic equilibrium: particles keep changing both ways at equal rates while the amounts stay constant." style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['Mg', 'O', 'A', 'B']} />

			{/* ── STATIC ── */}
			<g opacity={topIn}>
				<Pill x={92} y={26} text="STATIC" color={TOK.inkDim} size={17} />
				<text x={150} y={32} fill={TOK.ink} fontSize={22} fontWeight={800}>2Mg + O₂ → 2MgO <tspan fill={TOK.inkDim} fontSize={17} fontWeight={700}> irreversible</tspan></text>
				<DioramaPlinth id={ID} cx={XS[0]} cy={Y1} rx={RX}>
					{reactants.map((r) => {
						const s = slotsL[r.slot];
						const t = burnT(r.k);
						const x = s.x + (XS[1] - s.x) * t * 0.6;
						const y = s.y - Math.sin(t * Math.PI) * 50;
						const o = interpolate(t, [0.5, 0.8], [1, 0], clamp);
						if (o <= 0) return null;
						return r.el === 'Mg' ? (
							<Ball key={r.slot} id={ID} el="Mg" x={x} y={y} r={R} opacity={o} scale={pop(r.slot, 0)} shadow />
						) : (
							<g key={r.slot} opacity={o} transform={`translate(${x},${y}) scale(${pop(r.slot, 0)})`}>
								<Ball id={ID} el="O" x={-7} y={0} r={R * 0.92} />
								<Ball id={ID} el="O" x={7} y={0} r={R * 0.92} />
							</g>
						);
					})}
				</DioramaPlinth>
				<text x={(XS[0] + XS[1]) / 2} y={Y1 + 10} textAnchor="middle" fill={TOK.inkDim} fontSize={40} fontWeight={700}>→</text>
				<DioramaPlinth id={ID} cx={XS[1]} cy={Y1} rx={RX}>
					{slotsR.map((s, i) => {
						const t = burnT(i);
						const sc = interpolate(t, [0.55, 0.8, 1], [0, 1.15, 1], clamp);
						return sc > 0 ? <MgO key={i} x={s.x} y={s.y} s={sc} /> : null;
					})}
				</DioramaPlinth>
				<text x={XS[0]} y={Y1 + 66} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>Mg × {mgLeft}</text>
				<text x={XS[1]} y={Y1 + 66} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>MgO × {madeMgO}</text>
				<g opacity={ramp(frame, Math.max(zeroAt, burnDone), 14)}>
					<Pill x={MX} y={Y1 + 58} text="forward 0 · reverse 0" color={TOK.inkDim} size={16} />
					<text x={MX} y={Y1 + 96} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>finished: nothing is happening at all</text>
				</g>
			</g>

			<line x1={40} y1={262} x2={W - 40} y2={262} stroke={TOK.rule} strokeWidth={2} opacity={dynIn} />

			{/* ── DYNAMIC ── */}
			<g opacity={dynIn}>
				<Pill x={100} y={286} text="DYNAMIC" color={theme.accent} size={17} />
				<text x={164} y={292} fill={TOK.ink} fontSize={22} fontWeight={800}>A ⇌ B <tspan fill={TOK.inkDim} fontSize={17} fontWeight={700}> reversible, closed</tspan></text>
				{[0, 1].map((side) => {
					const n = frame < dStart ? (side === 0 ? left0 : right0) : occ(side as 0 | 1, f);
					const el = side === 0 ? 'A' : 'B';
					return (
						<DioramaPlinth key={side} id={ID} cx={XS[side]} cy={Y2} rx={RX}>
							{dynSlots[side].slice(0, n).map((s, j) => (
								<Ball key={j} id={ID} el={el} x={s.x} y={s.y + idleBob(frame, j + side * 20, 1.6)} r={R} scale={pop(j, dynamicAt)} shadow />
							))}
						</DioramaPlinth>
					);
				})}
				{flying.map((p) => {
					const mix = interpolate(p.t, [0.4, 0.6], [0, 1], clamp);
					const from = p.dir === 'f' ? 'A' : 'B';
					const to = p.dir === 'f' ? 'B' : 'A';
					return (
						<g key={p.k}>
							<Ball id={ID} el={from} x={p.x} y={p.y} r={R} opacity={1 - mix} />
							<Ball id={ID} el={to} x={p.x} y={p.y} r={R} opacity={mix} />
						</g>
					);
				})}
				{/* rate bars: equal and non-zero */}
				<g>
					<text x={MX} y={Y2 - 4} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>forward →</text>
					<rect x={MX - 52} y={Y2 + 4} width={104} height={13} rx={6.5} fill={theme.accent} />
					<text x={MX} y={Y2 + 38} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>← reverse</text>
					<rect x={MX - 52} y={Y2 + 46} width={104} height={13} rx={6.5} fill={PRODUCT} />
				</g>
				<text x={XS[0]} y={Y2 + 66} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>A × {left0}</text>
				<text x={XS[1]} y={Y2 + 66} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>B × {right0}</text>
				<g opacity={ramp(frame, equalAt, 14)}>
					<Pill x={MX} y={Y2 + 90} text={`forward = reverse ≠ 0`} color={TOK.amber} ink={TOK.amberInk} size={17} strokeWidth={2 + idlePulse(frame) * 1.5} />
				</g>
			</g>

			<text x={W / 2} y={522} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700} opacity={ramp(frame, calmAt, 16)}>
				Same calm surface: one has stopped, one is a busy standstill
			</text>
		</svg>
	);
};
