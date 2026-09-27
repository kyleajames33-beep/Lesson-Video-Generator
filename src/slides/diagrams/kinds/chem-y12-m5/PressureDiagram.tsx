// PressureDiagram (kind: chem12m5Pressure) — the gas-mole count rule, shown
// in a piston cylinder of N₂, H₂ and NH₃ (CPK balls) standing on a plinth.
//
// Compress: the piston pushes in, the pressure gauge jumps, then the system
// shifts right: one N₂ and three H₂ gather and become two NH₃ (4 gas molecules
// → 2), the molecule count drops and the pressure partly recovers (Le
// Chatelier minimises the change, it does not undo it). Expanding runs the same
// thing backwards. A pressure trace records the jump-then-partial-recovery.
//
// The molecule counts are a consistent microstate, not just a cartoon: with
// Kc ∝ n(NH₃)²·V² / (n(N₂)·n(H₂)³), the states (4 N₂, 11 H₂, 5 NH₃) at V = 1
// and (3 N₂, 8 H₂, 7 NH₃) at V = 0.384 give the same Kc (to 0.2 %), so the
// shift shown is exactly what a fixed Keq demands.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idlePulse} from '../../diorama';
import {AtomDefs, bounce, clamp, ease, hash01, ramp, textW} from './shared';
import {Arrow, Axes, Tag} from './lcKit';
import {GasMolecule, type GasKind} from './lcMolecules';

export type PressureProps = {
	delay?: number;
	beats?: {
		/** piston pushes in (shift follows) */
		compress?: number;
		/** piston pulls back out (shift back follows) */
		expand?: number;
		/** "4 mol gas / 2 mol gas" counts under the equation */
		counts?: number;
		/** second push, with the amber "shift → fewer gas moles" arrow */
		compress2?: number;
	};
	/** Chips at the bottom right, each on its beat. */
	chips?: {at: number; text: string}[];
};

const ID = 'c12m5pr';
const W = 760;
// cylinder (inner gas box)
const CX0 = 86, CX1 = 334, CBOT = 440, CTOP = 150;
const H0 = 250; // gas height at V = 1
const V_SMALL = 0.384;
const GATHER = 36, EMERGE = 30, MOVE = 26;

// Species: 4 N₂, 11 H₂, 5 NH₃, plus 2 NH₃ that exist only in the shifted state.
type Mol = {kind: GasKind; grp: 'R' | 'P' | null};
const MOLS: Mol[] = [
	...Array.from({length: 4}, (_, i) => ({kind: 'N2' as GasKind, grp: i === 0 ? ('R' as const) : null})),
	...Array.from({length: 11}, (_, i) => ({kind: 'H2' as GasKind, grp: i < 3 ? ('R' as const) : null})),
	...Array.from({length: 5}, () => ({kind: 'NH3' as GasKind, grp: null})),
	{kind: 'NH3', grp: 'P'},
	{kind: 'NH3', grp: 'P'},
];

export const PressureDiagram = ({delay = 62, beats = {}, chips = []}: PressureProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = {compress: 30, expand: 271, counts: 456, compress2: 500, ...beats};

	// ── volume and group-state timeline ──
	const vAt = (f: number) => {
		let v = 1;
		v += (V_SMALL - 1) * ease(interpolate(f, [b.compress, b.compress + MOVE], [0, 1], clamp));
		v += (1 - V_SMALL) * ease(interpolate(f, [b.expand, b.expand + MOVE], [0, 1], clamp));
		v += (V_SMALL - 1) * ease(interpolate(f, [b.compress2, b.compress2 + MOVE], [0, 1], clamp));
		return v;
	};
	const shifts: {at: number; to: 'R' | 'P'}[] = [
		{at: b.compress + 44, to: 'P'},
		{at: b.expand + 44, to: 'R'},
		{at: b.compress2 + 44, to: 'P'},
	];
	const formAt = (f: number): 'R' | 'P' => {
		let s: 'R' | 'P' = 'R';
		shifts.forEach((e) => {
			if (f >= e.at + GATHER) s = e.to;
		});
		return s;
	};
	const nAt = (f: number) => (formAt(f) === 'R' ? 20 : 18);
	const pAt = (f: number) => nAt(f) / vAt(f);

	const V = vAt(frame);
	const gasH = H0 * V;
	const pistonY = CBOT - gasH;

	// ── free motion in normalised box coords ──
	// Each molecule jostles inside its own cell of a 6 × 4 grid, so the crowd
	// stays readable even when squeezed.
	const COLS = 6, ROWS = 4;
	const cellOf = (i: number) => {
		const order = [7, 2, 15, 10, 19, 0, 12, 5, 21, 17, 3, 9, 14, 23, 1, 20, 6, 11, 16, 4, 8, 22];
		return order[i % order.length];
	};
	const free = (i: number, f: number) => {
		const c = cellOf(i);
		const col = c % COLS, row = Math.floor(c / COLS);
		const pad = 0.18;
		const u0 = hash01(i * 13 + 1), v0 = hash01(i * 29 + 7);
		const su = (0.006 + hash01(i * 5 + 3) * 0.006) * (hash01(i + 11) > 0.5 ? 1 : -1);
		const sv = (0.008 + hash01(i * 17 + 5) * 0.008) * (hash01(i + 23) > 0.5 ? 1 : -1);
		const cu = bounce(u0, su, f + 400, pad, 1 - pad);
		const cv = bounce(v0, sv, f + 400, pad, 1 - pad);
		return {u: (col + cu) / COLS, v: (row + cv) / ROWS};
	};
	const toXY = (u: number, v: number) => ({x: CX0 + 4 + u * (CX1 - CX0 - 8), y: pistonY + 2 + v * (gasH - 4)});

	// meeting point of a shift: mean of the old form's free positions at the merge moment
	const meet = (e: {at: number; to: 'R' | 'P'}) => {
		const idx = MOLS.map((m, i) => ({m, i})).filter(({m}) => m.grp !== null && m.grp !== e.to);
		const pts = idx.map(({i}) => free(i, e.at + GATHER));
		return {u: pts.reduce((s, p) => s + p.u, 0) / pts.length, v: pts.reduce((s, p) => s + p.v, 0) / pts.length};
	};

	const drawn = MOLS.map((m, i) => {
		let {u, v} = free(i, frame);
		let op = 1;
		let s = 1;
		if (m.grp !== null) {
			const form = formAt(frame);
			op = m.grp === form ? 1 : 0;
			for (const e of shifts) {
				const M = meet(e);
				const tIn = (frame - e.at) / GATHER;
				const tOut = (frame - e.at - GATHER) / EMERGE;
				if (m.grp !== e.to && tIn >= 0 && tIn < 1) {
					const k = ease(tIn);
					u += (M.u - u) * k;
					v += (M.v - v) * k;
					op = 1;
					s = 1 - 0.25 * k;
				}
				if (m.grp === e.to && tOut >= 0 && tOut < 1) {
					const k = ease(tOut);
					const off = MOLS.filter((q) => q.grp === e.to).indexOf(m) === 0 ? -0.06 : 0.06;
					u = M.u + off + (u - M.u - off) * k;
					v = M.v + (v - M.v) * k;
					op = Math.min(1, tOut * 5);
				}
			}
		}
		const p = toXY(u, v);
		return {i, m, x: p.x, y: p.y, op, s};
	});

	// flashes at each merge
	const flashes = shifts.map((e) => {
		const M = meet(e);
		const t = (frame - e.at - GATHER + 6) / 18;
		if (t < 0 || t > 1) return null;
		const p = toXY(M.u, M.v);
		return <circle key={e.at} cx={p.x} cy={p.y} r={12 + 34 * t} fill="none" stroke={TOK.amber} strokeWidth={4} opacity={1 - t} />;
	});

	// ── gauge ──
	const GXc = 494, GYc = 204, GR = 54;
	const PMAX = 60;
	const ang = (p: number) => -210 + (Math.min(PMAX, p) / PMAX) * 240;
	const needle = ang(pAt(frame));
	const rad = (a: number) => (a * Math.PI) / 180;

	// ── pressure trace ──
	const TX0 = 436, TX1 = 734, TY0 = 300, TY1 = 374;
	const tEnd = b.compress2 + 140;
	const tx = (f: number) => TX0 + 6 + (f / tEnd) * (TX1 - TX0 - 16);
	const ty = (p: number) => TY1 - 4 - (p / PMAX) * (TY1 - TY0 - 10);
	const pen = Math.max(0, Math.min(tEnd, frame));
	const trace: string[] = [];
	for (let f = 0; f <= pen; f += 2) trace.push(`${f === 0 ? 'M' : 'L'} ${tx(f).toFixed(1)} ${ty(pAt(f)).toFixed(1)}`);

	// ── equation layout ──
	const EQ_SIZE = 26;
	const left = 'N₂(g) + 3H₂(g)', mid = ' ⇌ ', right = '2NH₃(g)';
	const wl = textW(left, EQ_SIZE), wm = textW(mid, EQ_SIZE) + 10, wr = textW(right, EQ_SIZE);
	const EQX = 590 - (wl + wm + wr) / 2;
	const leftC = EQX + wl / 2, rightC = EQX + wl + wm + wr / 2;
	const molL = 1 + 3, molR = 2; // coefficients of the gases on each side
	const countsIn = ramp(frame, b.counts, 14);
	const shiftArrow = ramp(frame, b.compress2 + 40, 14);

	const pulse = idlePulse(frame);
	const nNow = nAt(frame);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="A piston compresses a mixture of nitrogen, hydrogen and ammonia; the pressure jumps, then one nitrogen and three hydrogen molecules become two ammonia molecules, so the number of gas molecules falls and the pressure partly recovers" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<AtomDefs id={ID} elements={['N', 'H']} />
			<defs>
				<linearGradient id={`${ID}-steel`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#c9ccd1" />
					<stop offset="100%" stopColor="#8d9299" />
				</linearGradient>
				<linearGradient id={`${ID}-rod`} x1="0" x2="1" y1="0" y2="0">
					<stop offset="0%" stopColor="#a4a8ae" />
					<stop offset="50%" stopColor="#e3e5e8" />
					<stop offset="100%" stopColor="#8d9299" />
				</linearGradient>
			</defs>

			{/* plinth and cylinder */}
			<g opacity={ramp(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={(CX0 + CX1) / 2} cy={452} rx={150} />
				{/* gas */}
				<rect x={CX0} y={pistonY} width={CX1 - CX0} height={gasH} fill="rgba(120,190,235,0.16)" />
				{/* base */}
				<rect x={CX0 - 12} y={CBOT} width={CX1 - CX0 + 24} height={14} rx={5} fill={`url(#${ID}-steel)`} />
			</g>

			{/* molecules */}
			<g opacity={ramp(frame, 4, 14)}>
				{drawn.map((d) => (d.op > 0.01 ? (
					<GasMolecule key={d.i} id={ID} kind={d.m.kind} x={d.x} y={d.y} s={d.s * 1.2} opacity={d.op} rot={d.m.kind === 'NH3' ? 0 : Math.sin(frame / 23 + d.i) * 28} />
				) : null))}
				{flashes}
			</g>

			{/* glass walls, piston and rod (over the molecules) */}
			<g opacity={ramp(frame, 0, 14)}>
				<path d={`M ${CX0 - 4} ${CTOP} L ${CX0 - 4} ${CBOT} M ${CX1 + 4} ${CTOP} L ${CX1 + 4} ${CBOT}`} stroke="rgba(70,90,110,0.6)" strokeWidth={4} strokeLinecap="round" />
				<rect x={CX0 + 6} y={CTOP + 12} width={6} height={CBOT - CTOP - 30} rx={3} fill="#ffffff" opacity={0.5} />
				<rect x={(CX0 + CX1) / 2 - 8} y={pistonY - 150} width={16} height={136} fill={`url(#${ID}-rod)`} />
				<rect x={(CX0 + CX1) / 2 - 46} y={pistonY - 160} width={92} height={16} rx={8} fill={`url(#${ID}-steel)`} />
				<rect x={CX0 - 1} y={pistonY - 16} width={CX1 - CX0 + 2} height={16} rx={3} fill={`url(#${ID}-steel)`} stroke="#7c8188" strokeWidth={1} />
			</g>
			{/* push arrows while compressing */}
			{[b.compress, b.compress2].map((c) => (
				<g key={c} opacity={interpolate(frame, [c - 8, c, c + MOVE, c + MOVE + 10], [0, 1, 1, 0], clamp)}>
					<Arrow x1={CX1 + 32} y1={pistonY - 60} x2={CX1 + 32} y2={pistonY - 4} color={TOK.inkDim} w={4} />
				</g>
			))}
			<g opacity={interpolate(frame, [b.expand - 8, b.expand, b.expand + MOVE, b.expand + MOVE + 10], [0, 1, 1, 0], clamp)}>
				<Arrow x1={CX1 + 32} y1={pistonY + 10} x2={CX1 + 32} y2={pistonY - 50} color={TOK.inkDim} w={4} />
			</g>

			{/* what the shift did */}
			{shifts.map((e) => (
				<Tag key={e.at} x={(CX0 + CX1) / 2} y={CTOP - 30} anchor="middle" size={18} color={TOK.inkMute} ink={TOK.ink}
					text={e.to === 'P' ? 'N₂ + 3H₂ → 2NH₃: 4 molecules become 2' : '2NH₃ → N₂ + 3H₂: 2 molecules become 4'}
					opacity={interpolate(frame, [e.at, e.at + 10, e.at + GATHER + 80, e.at + GATHER + 96], [0, 1, 1, 0], clamp)} />
			))}

			{/* equation */}
			<g opacity={ramp(frame, 0, 14)}>
				<text x={EQX} y={42} fill={TOK.ink} fontSize={EQ_SIZE} fontWeight={800}>{left}</text>
				<text x={EQX + wl + wm / 2} y={42} textAnchor="middle" fill={TOK.ink} fontSize={EQ_SIZE} fontWeight={800}>⇌</text>
				<text x={EQX + wl + wm} y={42} fill={TOK.ink} fontSize={EQ_SIZE} fontWeight={800}>{right}</text>
			</g>
			<g opacity={countsIn}>
				<path d={`M ${leftC - wl / 2} 54 q 0 8 8 8 L ${leftC + wl / 2 - 8} 62 q 8 0 8 -8`} fill="none" stroke={theme.accent} strokeWidth={2} />
				<path d={`M ${rightC - wr / 2} 54 q 0 8 8 8 L ${rightC + wr / 2 - 8} 62 q 8 0 8 -8`} fill="none" stroke={theme.accent} strokeWidth={2} />
				<text x={leftC} y={86} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>{molL} mol gas</text>
				<text x={rightC} y={86} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>{molR} mol gas</text>
			</g>
			<g opacity={shiftArrow}>
				<Arrow x1={leftC + 50} y1={106} x2={rightC - 30} y2={106} color={TOK.amber} w={3.5 + pulse} head={11} />
				<text x={(leftC + rightC) / 2 + 10} y={130} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>shift to fewer gas moles</text>
			</g>

			{/* gauge */}
			<g opacity={ramp(frame, 8, 14)}>
				<circle cx={GXc} cy={GYc} r={GR + 6} fill={`url(#${ID}-steel)`} />
				<circle cx={GXc} cy={GYc} r={GR} fill="#ffffff" />
				{Array.from({length: 13}, (_, k) => {
					const a = rad(-210 + k * 20);
					const r1 = GR - (k % 3 === 0 ? 12 : 7);
					return <line key={k} x1={GXc + Math.cos(a) * r1} y1={GYc + Math.sin(a) * r1} x2={GXc + Math.cos(a) * (GR - 3)} y2={GYc + Math.sin(a) * (GR - 3)} stroke={TOK.inkDim} strokeWidth={k % 3 === 0 ? 2.4 : 1.4} />;
				})}
				<line x1={GXc} y1={GYc} x2={GXc + Math.cos(rad(needle)) * (GR - 12)} y2={GYc + Math.sin(rad(needle)) * (GR - 12)} stroke="#c0392b" strokeWidth={3.5} strokeLinecap="round" />
				<circle cx={GXc} cy={GYc} r={6} fill={TOK.ink} />
				<text x={GXc} y={GYc + 32} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>pressure</text>
			</g>
			{/* molecule count */}
			<g opacity={ramp(frame, 10, 14)}>
				<text x={574} y={190} fill={TOK.inkDim} fontSize={17} fontWeight={800}>gas molecules</text>
				<text x={574} y={228} fill={TOK.ink} fontSize={34} fontWeight={800}>{nNow}</text>
				<text x={574 + textW(String(nNow), 34) + 10} y={226} fill={TOK.inkDim} fontSize={16} fontWeight={700}>
					{formAt(frame) === 'P' ? '4 became 2' : ''}
				</text>
			</g>

			{/* pressure trace */}
			<g opacity={ramp(frame, 14, 14)}>
				<Axes x0={TX0} y0={TY0} x1={TX1} y1={TY1} xLabel="time" yLabel="pressure" size={15} />
				<path d={trace.join(' ')} fill="none" stroke={theme.accent} strokeWidth={3.5} strokeLinejoin="round" strokeLinecap="round" />
				<text x={TX0 + 10} y={TY0 - 12} fill={TOK.inkDim} fontSize={15} fontWeight={800}>jumps, then partly recovers</text>
			</g>

			{/* chips */}
			{chips.map((c, i) => (
				<Tag key={i} x={424} y={416 + i * 40} text={c.text} color={theme.accent} ink={theme.accent} size={17} opacity={ramp(frame, c.at, 12)} />
			))}
		</svg>
	);
};
