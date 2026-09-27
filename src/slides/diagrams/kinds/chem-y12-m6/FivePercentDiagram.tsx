// FivePercentDiagram — the weak-acid shortcut, checked on a glass gauge.
//
// Each case is a weak acid (Ka, c from props). The card works the shortcut
// x = √(Ka × c) step by step; beside it a glass "% ionised" tube stands on a
// stone plinth with the 5% line marked, and fills to x ÷ c × 100. Under 5%
// the tube settles green with a tick; at 5% or more it overflows the line in
// amber and the card swaps in the quadratic root. Every number is computed
// from Ka and c, so it can't drift from the chemistry.
//
// Optional mixing panel (for the "add the volumes" error): two beakers pour
// into one; c(excess) uses the total volume, and dividing by one volume alone
// is shown to be out by log(V total ÷ V one) pH units, computed.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Arrow, Beaker, clamp, ease, fadeAt, sci} from './shared';

export type FiveCase = {name: string; Ka: number; c: number; at: number; checkAt?: number; fixAt?: number};
export type FivePercentProps = {
	cases: FiveCase[];
	mixing?: {va: number; vb: number; at: number; wrongAt?: number};
	delay?: number;
};

const ID = 'c12m6five';
const W = 760;
const H = 530;
const GOOD = '#2f9a5a';

const sig = (v: number, sf = 3) => sci(v, sf, false);
const pctText = (p: number) => `${p < 1 ? p.toFixed(2) : p.toFixed(1)}%`;

export const FivePercentDiagram = ({cases, mixing, delay = 62}: FivePercentProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const rows = cases.length + (mixing ? 1 : 0);
	const rowH = (H - 10) / rows;

	const caseRow = (cs: FiveCase, i: number) => {
		const y0 = 6 + i * rowH;
		const x = Math.sqrt(cs.Ka * cs.c);
		const pct = (x / cs.c) * 100;
		const ok = pct < 5;
		const xq = (-cs.Ka + Math.sqrt(cs.Ka * cs.Ka + 4 * cs.Ka * cs.c)) / 2;
		const checkAt = cs.checkAt ?? cs.at + 60;
		const fixAt = cs.fixAt ?? checkAt + 60;
		// Gauge tube
		const gx = 640, tubeW = 46, tubeTop = y0 + 26, tubeH = rowH - 92;
		const gy = (p: number) => tubeTop + tubeH - (Math.min(p, 10) / 10) * tubeH;
		const fill = interpolate(frame, [checkAt, checkAt + 30], [0, pct], clamp);
		const verdict = fadeAt(frame, checkAt + 32);
		const lines: {t: string; at: number; color?: string; strike?: boolean}[] = [
			{t: `${cs.name}: Ka = ${sig(cs.Ka, 2)}, c = ${cs.c.toFixed(3)} mol L⁻¹`, at: cs.at},
			{t: `Ka ÷ c = ${sig(cs.Ka / cs.c, 2)}`, at: cs.at + 20},
			{t: `x = √(Ka × c) = ${sig(x)} mol L⁻¹`, at: cs.at + 40},
			{t: `x ÷ c × 100 = ${pctText(pct)}`, at: checkAt},
		];
		if (!ok) lines.push({t: `quadratic: x = ${sig(xq, 2)}, pH ${(-Math.log10(xq)).toFixed(2)}`, at: fixAt, color: TOK.amberInk});
		else lines.push({t: `valid: pH = ${(-Math.log10(x)).toFixed(2)}`, at: checkAt + 36, color: GOOD});
		return (
			<g key={i}>
				<rect x={14} y={y0 + 8} width={560} height={rowH - 26} rx={14} fill="#ffffff" stroke="rgba(0,0,0,0.1)" opacity={fadeAt(frame, cs.at - 6)} />
				{lines.map((ln, k) => (
					<text key={k} x={34} y={y0 + 44 + k * ((rowH - 60) / 5)} fill={ln.color ?? (k === 0 ? TOK.ink : TOK.inkDim)} fontSize={k === 0 ? 20 : 19} fontWeight={800} opacity={fadeAt(frame, ln.at)}>
						{ln.t}
					</text>
				))}
				{/* Gauge */}
				<g opacity={fadeAt(frame, cs.at)}>
					<DioramaPlinth id={`${ID}${i}`} cx={gx} cy={tubeTop + tubeH + 16} rx={64} />
					<rect x={gx - tubeW / 2} y={tubeTop} width={tubeW} height={tubeH} rx={tubeW / 2} fill="rgba(220,236,246,0.6)" stroke="rgba(70,90,110,0.5)" strokeWidth={2.5} />
					<clipPath id={`${ID}-clip${i}`}>
						<rect x={gx - tubeW / 2 + 4} y={tubeTop + 4} width={tubeW - 8} height={tubeH - 8} rx={(tubeW - 8) / 2} />
					</clipPath>
					<rect clipPath={`url(#${ID}-clip${i})`} x={gx - tubeW / 2} y={gy(fill)} width={tubeW} height={tubeTop + tubeH - gy(fill)} fill={ok ? GOOD : TOK.amber} opacity={0.85} />
					<line x1={gx - tubeW / 2 - 12} y1={gy(5)} x2={gx + tubeW / 2 + 12} y2={gy(5)} stroke={TOK.ink} strokeWidth={2.5} strokeDasharray="6 4" />
					<text x={gx + tubeW / 2 + 16} y={gy(5) + 6} fill={TOK.ink} fontSize={17} fontWeight={800}>5%</text>
					<text x={gx - tubeW / 2 - 14} y={gy(fill) + 6} textAnchor="end" fill={ok ? GOOD : TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, checkAt + 6)}>{pctText(pct)}</text>
					<g opacity={verdict} transform={`translate(${gx},${tubeTop - 2})`}>
						<circle r={15} fill="#ffffff" stroke={ok ? GOOD : TOK.amber} strokeWidth={ok ? 3 : 3 + idlePulse(frame)} />
						{ok ? (
							<path d="M -7 0 L -2 6 L 8 -6" fill="none" stroke={GOOD} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
						) : (
							<path d="M -6 -6 L 6 6 M 6 -6 L -6 6" stroke={TOK.amberInk} strokeWidth={3.5} strokeLinecap="round" />
						)}
					</g>
				</g>
			</g>
		);
	};

	const mixRow = () => {
		if (!mixing) return null;
		const y0 = 6 + cases.length * rowH;
		const vt = mixing.va + mixing.vb;
		const off = Math.log10(vt / mixing.va);
		const t = ease(frame, mixing.at, mixing.at + 40);
		const base = y0 + rowH - 46;
		const wrongAt = mixing.wrongAt ?? mixing.at + 90;
		return (
			<g opacity={fadeAt(frame, mixing.at - 6)}>
				<rect x={14} y={y0 + 8} width={W - 28} height={rowH - 20} rx={14} fill="#ffffff" stroke="rgba(0,0,0,0.1)" />
				<Beaker cx={80} baseY={base} w={62} h={86} level={0.7 * (1 - t) + 0.05} liquid="rgba(224,67,58,0.25)" />
				<text x={80} y={base + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{mixing.va.toFixed(1)} mL acid</text>
				<Beaker cx={190} baseY={base} w={62} h={86} level={0.7 * (1 - t) + 0.05} liquid="rgba(63,111,216,0.25)" />
				<text x={190} y={base + 24} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{mixing.vb.toFixed(1)} mL base</text>
				<Arrow x1={232} y1={base - 44} x2={290} y2={base - 44} color={TOK.inkMute} width={3} t={t} />
				<Beaker cx={345} baseY={base} w={84} h={110} level={0.08 + 0.64 * t} liquid="rgba(150,120,200,0.25)" />
				<text x={345} y={base + 24} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} opacity={t}>{vt.toFixed(1)} mL total</text>
				<text x={414} y={y0 + 58} fill={GOOD} fontSize={19} fontWeight={800} opacity={fadeAt(frame, mixing.at + 40)}>c = n(excess) ÷ {(vt / 1000).toFixed(4)} L ✓</text>
				<text x={414} y={y0 + 96} fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, wrongAt)}>n ÷ {(mixing.va / 1000).toFixed(4)} L alone: ✗</text>
				<text x={414} y={y0 + 128} fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, wrongAt + 30)}>{(vt / mixing.va).toFixed(0)}× too concentrated,</text>
				<text x={414} y={y0 + 152} fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, wrongAt + 30)}>pH out by {off.toFixed(2)}</text>
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Checking the 5% rule for the weak-acid shortcut" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{cases.map(caseRow)}
			{mixRow()}
		</svg>
	);
};
