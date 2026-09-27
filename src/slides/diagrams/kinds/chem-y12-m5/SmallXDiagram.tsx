// SmallXDiagram (kind: chem12m5SmallX) — the small-x assumption and its 5 % rule.
//
// Top: the initial concentration as a bar. x is a thin sliver cut from its
// end; the bar that is left is barely shorter, so initial − x ≈ initial (only
// because the sliver is tiny). Below, two gauges stand on plinths: the
// PRE-CHECK (Keq ÷ [initial] × 100) before assuming and the POST-CHECK
// (x ÷ [initial] × 100) after solving, each with the 5 % line in amber. The
// post-check needle first settles under 5 % (keep the answer), then shows the
// other case: over 5 %, bin the answer and solve the quadratic.
// Qualitative on purpose: no invented values, only the 5 % threshold.
//
// Beats are frames after `delay`.

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idlePulse} from '../../diorama';
import {clamp, eramp, ramp} from './shared';
import {P, RED, Rich, VIOLET, kbW} from './kbKit';

export type SmallXProps = {
	delay?: number;
	barAt?: number;
	sliceAt?: number;
	preAt?: number;
	preReadAt?: number;
	approxAt?: number;
	postAt?: number;
	postReadAt?: number;
	failAt?: number;
	binAt?: number;
	summaryAt?: number;
};

const W = 760;
const BX0 = 70, BX1 = 620, BY = 58, BH = 44;
const SL = 12; // sliver width (qualitative: tiny)
const GY = 370; // dial centre y
const GR = 86;

export const SmallXDiagram = ({
	delay = 62,
	barAt = 45,
	sliceAt = 229,
	preAt = 292,
	preReadAt = 405,
	approxAt = 462,
	postAt = 632,
	postReadAt = 680,
	failAt = 794,
	binAt = 865,
	summaryAt = 922,
}: SmallXProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);

	// ── Bar and sliver ──
	const barIn = eramp(frame, barAt, 20);
	const cut = eramp(frame, sliceAt, 26);
	const slX = BX1 - SL + cut * 34;
	const slY = BY + cut * 44;

	// ── Gauges ──
	const needle = (at: number, target: number, from = 0) => {
		const s = spring({frame: frame - at, fps, config: {damping: 9, stiffness: 90, mass: 0.8}});
		return from + (target - from) * s;
	};
	const preV = frame < preReadAt ? 0 : needle(preReadAt, 0.22);
	const postPass = frame < postReadAt ? 0 : needle(postReadAt, 0.24);
	const postV = frame < failAt ? postPass : needle(failAt, 0.8, 0.24);
	const jitter = (i: number) => Math.sin(frame / 11 + i) * 0.006 + Math.sin(frame / 23 + i * 2) * 0.004;

	const Gauge = ({cx, v, title, formula, at, k}: {cx: number; v: number; title: string; formula: string; at: number; k: number}) => {
		const a = ramp(frame, at, 16);
		const ang = Math.PI * (1 - Math.max(0, Math.min(1, v + (frame > at + 60 ? jitter(k) : 0))));
		const arc = (f0: number, f1: number, r: number) => {
			const p = (f: number) => {
				const t = Math.PI * (1 - f);
				return `${cx + r * Math.cos(t)} ${GY - r * Math.sin(t)}`;
			};
			return `M ${p(f0)} A ${r} ${r} 0 0 1 ${p(f1)}`;
		};
		const over = v > 0.5;
		return (
			<g opacity={a}>
				<text x={cx} y={GY - GR - 64} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.08em">{title}</text>
				<Rich x={cx} y={GY - GR - 32} size={21} parts={P(formula)} />
				<DioramaPlinth id={`c12m5sx${k}`} cx={cx} cy={GY + 14} rx={GR + 30}>
					{/* dial face */}
					<path d={`${arc(0, 1, GR + 8)} L ${cx + GR + 8} ${GY + 6} L ${cx - GR - 8} ${GY + 6} Z`} fill="#ffffff" stroke="rgba(0,0,0,0.14)" strokeWidth={2} />
					<path d={arc(0.02, 0.5, GR - 12)} fill="none" stroke={theme.accent} strokeOpacity={0.35} strokeWidth={16} />
					<path d={arc(0.5, 0.98, GR - 12)} fill="none" stroke={RED} strokeOpacity={0.3} strokeWidth={16} />
					<line x1={cx} y1={GY - GR + 30} x2={cx} y2={GY - GR - 2} stroke={TOK.amber} strokeWidth={4 + pulse * 1.5} strokeLinecap="round" />
					<text x={cx} y={GY - GR + 48} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={900}>5 %</text>
					<text x={cx - GR + 22} y={GY - 6} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>under</text>
					<text x={cx + GR - 22} y={GY - 6} textAnchor="middle" fill={RED} fontSize={16} fontWeight={800}>over</text>
					<line x1={cx} y1={GY} x2={cx + (GR - 22) * Math.cos(ang)} y2={GY - (GR - 22) * Math.sin(ang)} stroke={over ? RED : TOK.ink} strokeWidth={5} strokeLinecap="round" />
					<circle cx={cx} cy={GY} r={9} fill={TOK.ink} />
				</DioramaPlinth>
			</g>
		);
	};

	const preOk = ramp(frame, preReadAt + 26, 12);
	const postOk = ramp(frame, postReadAt + 26, 12) * (frame < failAt ? 1 : 0.45);
	const failIn = ramp(frame, failAt + 24, 12);
	const binIn = eramp(frame, binAt, 22);
	const sumIn = ramp(frame, summaryAt, 14);

	// Bin (the answer card drops into it)
	const BINX = 716, BINY = 490;
	const cardDrop = interpolate(frame, [binAt + 6, binAt + 34], [0, 1], clamp);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Small-x assumption: x is a tiny sliver of the initial concentration, so initial minus x is about initial; check Keq over initial times 100 is under 5 percent before, and x over initial times 100 is under 5 percent after, otherwise solve the quadratic" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<defs>
				<linearGradient id="c12m5sx-bar" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor={theme.accent2} />
					<stop offset="100%" stopColor={theme.accent} />
				</linearGradient>
			</defs>

			{/* ── The bar ── */}
			<g opacity={Math.min(1, barIn * 1.5)}>
				<text x={BX0} y={BY - 14} fill={TOK.ink} fontSize={22} fontWeight={800}>[initial]</text>
				{/* ghost outline of the full bar once x is cut */}
				<rect x={BX0} y={BY} width={BX1 - BX0} height={BH} rx={10} fill="none" stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="6 5" opacity={cut} />
				<rect x={BX0} y={BY} width={(BX1 - BX0 - SL * cut) * barIn} height={BH} rx={10} fill="url(#c12m5sx-bar)" />
				<text x={(BX0 + BX1) / 2} y={BY + 30} textAnchor="middle" fill="#ffffff" fontSize={22} fontWeight={800} opacity={barIn}>
					{cut > 0.5 ? 'initial − x' : 'initial concentration'}
				</text>
				{/* the x sliver */}
				<rect x={slX} y={slY} width={SL} height={BH} rx={3} fill={VIOLET} opacity={barIn} />
				<text x={slX + SL + 10} y={slY + 30} fill={VIOLET} fontSize={24} fontWeight={900} opacity={cut}>x</text>
			</g>
			<g opacity={ramp(frame, sliceAt + 20, 14)}>
				<Rich x={W / 2} y={BY + BH + 50} size={26} parts={[{t: 'initial − x '}, {t: '≈', c: theme.accent, wt: 900}, {t: ' initial'}]} opacity={1} />
				<text x={W / 2} y={BY + BH + 76} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>only when the x sliver is tiny</text>
				{approxAt !== undefined && (
					<circle cx={W / 2 - kbW('initial − x ≈ initial', 26) / 2 + kbW('initial − x ', 26) + kbW('≈', 26) / 2} cy={BY + BH + 42} r={20} fill="none" stroke={theme.accent} strokeWidth={2.5} opacity={ramp(frame, approxAt, 12) * (0.5 + 0.5 * pulse)} />
				)}
			</g>

			{/* ── Gauges ── */}
			<Gauge cx={190} v={preV} title="PRE-CHECK · BEFORE" formula="K_{eq} ÷ [initial] × 100 < 5 %?" at={preAt} k={0} />
			<Gauge cx={570} v={postV} title="POST-CHECK · AFTER" formula="x ÷ [initial] × 100 < 5 %?" at={postAt} k={1} />

			{/* assume → solve arrow between the gauges */}
			<g opacity={ramp(frame, approxAt, 14)}>
				<path d="M 322 340 L 428 340" stroke={TOK.inkMute} strokeWidth={3} markerEnd="url(#c12m5sx-arrow)" />
				<defs>
					<marker id="c12m5sx-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
						<path d="M 0 0 L 10 5 L 0 10 z" fill={TOK.inkMute} />
					</marker>
				</defs>
				<text x={374} y={318} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>assume,</text>
				<text x={374} y={368} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>solve</text>
			</g>

			{/* outcomes */}
			<text x={190} y={472} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800} opacity={preOk}>✓ under 5 %: x negligible</text>
			<text x={570} y={472} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800} opacity={postOk}>✓ under 5 %: keep the answer</text>
			<g opacity={failIn}>
				<text x={404} y={498} fill={RED} fontSize={20} fontWeight={900}>✗ over 5 %: bin that answer</text>
				<text x={404} y={524} fill={TOK.ink} fontSize={20} fontWeight={800} opacity={binIn}>→ solve the full quadratic</text>
			</g>
			<g opacity={binIn}>
				{/* answer card falling into the bin */}
				<g transform={`translate(${BINX} ${BINY - 60 + cardDrop * 52}) rotate(${cardDrop * 24})`} opacity={1 - ramp(frame, binAt + 30, 8)}>
					<rect x={-17} y={-12} width={34} height={24} rx={4} fill="#ffffff" stroke={RED} strokeWidth={2} />
					<text x={0} y={6} textAnchor="middle" fill={RED} fontSize={16} fontWeight={900}>x</text>
				</g>
				<path d={`M ${BINX - 22} ${BINY - 12} L ${BINX + 22} ${BINY - 12} L ${BINX + 17} ${BINY + 30} L ${BINX - 17} ${BINY + 30} Z`} fill="#dcd8d0" stroke="#8f8b83" strokeWidth={2} />
				<rect x={BINX - 26} y={BINY - 19} width={52} height={8} rx={3} fill="#bdb8ae" stroke="#8f8b83" strokeWidth={1.5} />
				{[-9, 0, 9].map((d) => (
					<line key={d} x1={BINX + d} y1={BINY - 4} x2={BINX + d * 0.8} y2={BINY + 24} stroke="#8f8b83" strokeWidth={1.5} />
				))}
			</g>

			{/* summary: both checks breathe */}
			{sumIn > 0 && (
				<g opacity={sumIn * (0.35 + 0.35 * pulse)}>
					<rect x={60} y={GY - GR - 88} width={260} height={GR + 170} rx={18} fill="none" stroke={theme.accent} strokeWidth={2.5} />
					<rect x={440} y={GY - GR - 88} width={260} height={GR + 170} rx={18} fill="none" stroke={theme.accent} strokeWidth={2.5} />
				</g>
			)}
		</svg>
	);
};
