// QuadraticRootsDiagram (kind: chem12m5Quadratic) — solving the ICE quadratic
// and picking the real root. Symbolic on purpose: no invented numbers.
//
// Top: the Keq expression with the E row in x → ax² + bx + c = 0 → the
// quadratic formula. Then a parabola draws itself across a number line of x
// and crosses zero at two roots. The band of x where every concentration stays
// positive is shaded; one root falls outside it (a concentration would be
// negative), so its token is struck and tips off its plinth. The other root is
// kept (amber). Finally: substitute back into Keq to check.
//
// Beats are frames after `delay`.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {clamp, eramp, ramp} from './shared';
import {Frac, P, RED, Rich, kbW, partsW} from './kbKit';

export type QuadraticProps = {
	delay?: number;
	setupAt?: number;
	standardAt?: number;
	formulaAt?: number;
	rootsAt?: number;
	rejectAt?: number;
	keepAt?: number;
	checkAt?: number;
};

const W = 760;
// graph
const GX0 = 52, GX1 = 452, GY0 = 206, GY1 = 432, GZ = 350;
const D0 = -0.22, D1 = 1.42; // x domain (unitless)
const R1 = 0.3, R2 = 1.2; // roots: R1 inside the allowed band [0, 1], R2 outside
const K = 190;

export const QuadraticRootsDiagram = ({
	delay = 62,
	setupAt = 111,
	standardAt = 178,
	formulaAt = 298,
	rootsAt = 493,
	rejectAt = 591,
	keepAt = 771,
	checkAt = 883,
}: QuadraticProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const gx = (x: number) => GX0 + ((x - D0) / (D1 - D0)) * (GX1 - GX0);
	const gy = (x: number) => GZ - K * (x - R1) * (x - R2);

	// ── Row A: expression → standard form ──
	const chip1 = P('K_{eq} = (E row in terms of x)');
	const chip2 = P('ax^{2} + bx + c = 0');
	const c1w = partsW(chip1, 24) + 32;
	const c2w = partsW(chip2, 28) + 32;
	const rowAW = c1w + 60 + c2w;
	const c1x = W / 2 - rowAW / 2 + c1w / 2;
	const c2x = W / 2 + rowAW / 2 - c2w / 2;

	// ── Row B: the formula ──
	const num = [{t: '−b '}, {t: '±', c: theme.accent, wt: 900}, {t: ' √(b'}, {t: '2', pow: true}, {t: ' − 4ac)'}];
	const den = P('2a');
	const pm = ramp(frame, rootsAt, 10) * (1 - ramp(frame, rootsAt + 60, 20));

	// ── Parabola ──
	const draw = eramp(frame, rootsAt, 56);
	const xEnd = D0 + (D1 - D0) * draw;
	const pts: string[] = [];
	for (let i = 0; i <= 80; i++) {
		const x = D0 + ((D1 - D0) * i) / 80;
		if (x > xEnd) break;
		pts.push(`${i ? 'L' : 'M'} ${gx(x).toFixed(1)} ${gy(x).toFixed(1)}`);
	}
	if (draw > 0) pts.push(`L ${gx(xEnd).toFixed(1)} ${gy(xEnd).toFixed(1)}`);
	const r1In = xEnd >= R1 ? ramp(frame, rootsAt + ((R1 - D0) / (D1 - D0)) * 56, 8) : 0;
	const r2In = xEnd >= R2 ? ramp(frame, rootsAt + ((R2 - D0) / (D1 - D0)) * 56, 8) : 0;

	const rej = eramp(frame, rejectAt, 22);
	const keep = ramp(frame, keepAt, 14);
	const fall = interpolate(frame, [rejectAt + 20, rejectAt + 50], [0, 1], clamp);

	// Tokens on plinths
	const T1 = {cx: 548, cy: 318}, T2 = {cx: 680, cy: 318};
	const token = (cx: number, cy: number, label: string, color: string, extra: {rot?: number; dx?: number; dy?: number; op?: number; glow?: number}) => (
		<g transform={`translate(${cx + (extra.dx ?? 0)} ${cy - 30 + (extra.dy ?? 0)}) rotate(${extra.rot ?? 0})`} opacity={extra.op ?? 1}>
			{extra.glow ? <rect x={-38} y={-32} width={76} height={64} rx={16} fill={TOK.amber} opacity={0.18 + 0.12 * pulse} /> : null}
			<rect x={-30} y={-26} width={60} height={52} rx={11} fill="#ffffff" stroke={color} strokeWidth={3} />
			<Rich x={0} y={11} size={30} parts={P(label, color)} />
		</g>
	);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Substitute the E row into Keq, rearrange to ax squared plus bx plus c equals zero, apply the quadratic formula; the parabola crosses zero at two roots, one gives a negative concentration and is rejected, the other is kept, then substitute back into Keq to check" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<marker id="c12m5qr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
					<path d="M 0 0 L 10 5 L 0 10 z" fill={TOK.inkMute} />
				</marker>
			</defs>

			{/* Row A */}
			<g opacity={ramp(frame, setupAt, 14)}>
				<rect x={c1x - c1w / 2} y={16} width={c1w} height={48} rx={14} fill="#ffffff" stroke="rgba(0,0,0,0.14)" strokeWidth={2} />
				<Rich x={c1x} y={48} size={24} parts={chip1} />
			</g>
			<g opacity={ramp(frame, standardAt, 14)}>
				<path d={`M ${c1x + c1w / 2 + 10} 40 L ${c2x - c2w / 2 - 10} 40`} stroke={TOK.inkMute} strokeWidth={3} markerEnd="url(#c12m5qr-arrow)" />
				<rect x={c2x - c2w / 2} y={14} width={c2w} height={52} rx={14} fill={theme.soft} stroke={theme.accent} strokeWidth={2} />
				<Rich x={c2x} y={50} size={28} parts={chip2} />
			</g>

			{/* Row B: the quadratic formula */}
			<g opacity={ramp(frame, formulaAt, 14)}>
				<Rich x={W / 2 - 150} y={140} size={32} parts={P('x =')} anchor="end" />
				{pm > 0 && <circle cx={W / 2 - 150 + 30 + kbW('−b ', 32) + kbW('±', 32) / 2} cy={118} r={22} fill={theme.accent} opacity={0.18 * pm} />}
				<Frac x={W / 2 - 150 + 22 + (partsW(num, 32) + 16) / 2} y={129} size={32} num={num} den={den} />
			</g>

			{/* Graph */}
			<g opacity={ramp(frame, rootsAt - 20, 14)}>
				{/* bands: allowed (all concentrations positive) and impossible */}
				<rect x={gx(0)} y={GY0} width={gx(1) - gx(0)} height={GY1 - GY0} fill={theme.accent} opacity={0.1} />
				<rect x={GX0} y={GY0} width={gx(0) - GX0} height={GY1 - GY0} fill={RED} opacity={0.07} />
				<rect x={gx(1)} y={GY0} width={GX1 - gx(1)} height={GY1 - GY0} fill={RED} opacity={0.07} />
				<line x1={gx(1)} y1={GY0} x2={gx(1)} y2={GY1} stroke={RED} strokeOpacity={0.5} strokeWidth={2} strokeDasharray="5 5" />
				<text x={(gx(0) + gx(1)) / 2} y={GY0 + 24} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>every concentration &gt; 0</text>
				<text x={(gx(1) + GX1) / 2} y={GY0 + 24} textAnchor="middle" fill={RED} fontSize={16} fontWeight={800}>a conc.</text>
				<text x={(gx(1) + GX1) / 2} y={GY0 + 44} textAnchor="middle" fill={RED} fontSize={16} fontWeight={800}>&lt; 0</text>
				{/* axes */}
				<line x1={GX0} y1={GZ} x2={GX1 + 8} y2={GZ} stroke={TOK.ink} strokeWidth={2.5} />
				<line x1={gx(0)} y1={GY0} x2={gx(0)} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
				<text x={GX1 + 12} y={GZ + 6} fill={TOK.ink} fontSize={20} fontWeight={800}>x</text>
				<text x={gx(0) - 8} y={GZ + 24} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={800}>0</text>
				<Rich x={GX0 + 4} y={GY1 - 8} size={17} parts={P('y = ax^{2} + bx + c', TOK.inkDim)} anchor="start" />
			</g>
			<path d={pts.join(' ')} fill="none" stroke={TOK.ink} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
			{/* roots on the axis */}
			<g opacity={r1In}>
				<circle cx={gx(R1)} cy={GZ} r={9 + keep * pulse * 3} fill={keep > 0 ? TOK.amber : TOK.ink} stroke="#ffffff" strokeWidth={2.5} />
				<Rich x={gx(R1) - 16} y={GZ + 30} size={22} parts={P('x_{1}', keep > 0 ? TOK.amberInk : TOK.ink)} />
			</g>
			<g opacity={r2In}>
				<circle cx={gx(R2)} cy={GZ} r={9} fill={rej > 0 ? RED : TOK.ink} stroke="#ffffff" strokeWidth={2.5} />
				<Rich x={gx(R2) + 18} y={GZ + 30} size={22} parts={P('x_{2}', rej > 0 ? RED : TOK.ink)} />
			</g>

			{/* Root tokens on plinths */}
			<g opacity={ramp(frame, rootsAt + 30, 14)}>
				<text x={(T1.cx + T2.cx) / 2} y={218} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.08em">TWO ROOTS</text>
				<DioramaPlinth id="c12m5qr1" cx={T1.cx} cy={T1.cy} rx={56} />
				<DioramaPlinth id="c12m5qr2" cx={T2.cx} cy={T2.cy} rx={56} />
				{token(T1.cx, T1.cy, 'x_{1}', keep > 0 ? TOK.amberInk : TOK.ink, {dy: idleBob(frame, 1, 1.2), glow: keep})}
				{token(T2.cx, T2.cy, 'x_{2}', rej > 0 ? RED : TOK.ink, {rot: fall * 32, dx: fall * 26, dy: fall * 34 + idleBob(frame, 2, 1.2) * (1 - fall), op: 1 - fall * 0.45})}
				<g opacity={rej}>
					<text x={T2.cx} y={T2.cy + 58} textAnchor="middle" fill={RED} fontSize={18} fontWeight={900}>✗ a conc.</text>
					<text x={T2.cx} y={T2.cy + 80} textAnchor="middle" fill={RED} fontSize={18} fontWeight={900}>would be &lt; 0</text>
				</g>
				<g opacity={keep}>
					<text x={T1.cx} y={T1.cy + 58} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={900}>✓ all conc.</text>
					<text x={T1.cx} y={T1.cy + 80} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={900}>positive: keep</text>
				</g>
			</g>

			{/* Check */}
			{(() => {
				const t = P('substitute back into K_{eq}: you recover the value  ✓');
				const w = partsW(t, 21) + 40;
				return (
					<g opacity={ramp(frame, checkAt, 14)}>
						<rect x={W / 2 - w / 2} y={466} width={w} height={46} rx={23} fill={theme.soft} stroke={theme.accent} strokeWidth={2.5} />
						<Rich x={W / 2} y={496} size={21} parts={t} fill={theme.accent} />
					</g>
				);
			})()}
		</svg>
	);
};
