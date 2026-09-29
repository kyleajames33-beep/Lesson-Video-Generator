// ZipperDiagram (bio11m1bZipper) — why DNA is held by hydrogen bonds: weak one
// at a time, strong in their millions, so the strands are stable yet easy to
// unzip.
//
// A straight stretch of double-stranded DNA on a stone ledge: two antiparallel
// sugar–phosphate backbones, base pairs between them (partners computed from
// the `sequence`, A–T and C–G), and the hydrogen bonds drawn per pair (2 for
// A–T, 3 for C–G). The running total of hydrogen bonds is COUNTED from the
// pairs drawn. Beats: one bond is singled out and snaps (weak alone); all of
// them glow (strong together); then a wedge unzips the strands from the left,
// breaking only hydrogen bonds while both backbones stay whole.
//
// Props: `sequence` (top strand, 5′→3′), `at`: strands / pairs / bonds / one /
// many / anti / unzip / rule; `rule` text.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {fadeAt, ease, lerp, PURPLE, GlossDefs, BaseTile, PAIR_DNA, baseTone, Ledge} from './shared';

export type ZipperProps = {
	sequence?: string;
	at?: {strands?: number; pairs?: number; bonds?: number; one?: number; many?: number; anti?: number; unzip?: number; rule?: number};
	rule?: string;
	delay?: number;
};

const ID = 'b11m1bZip';
const W = 760, H = 530;
const YT = 190, YB = 330; // backbone centre lines

export const ZipperDiagram = ({sequence = 'ATGCCGTAGCAT', at = {}, rule, delay = 62}: ZipperProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const top = sequence.toUpperCase().split('');
	const bot = top.map((b) => PAIR_DNA[b] ?? '?');
	const n = top.length;
	const x0 = 80, x1 = 690, dx = (x1 - x0) / (n - 1);
	const tS = at.strands ?? 10, tP = at.pairs ?? 60, tB = at.bonds ?? 120, tOne = at.one ?? 200, tMany = at.many ?? 280, tAnti = at.anti ?? 9999, tU = at.unzip ?? 360, tR = at.rule ?? 500;
	const bondsPer = top.map((b) => (b === 'C' || b === 'G' ? 3 : 2));
	const total = bondsPer.reduce((a, b) => a + b, 0);
	const pulse = idlePulse(frame, 44);
	// Unzipping: the wedge travels from the left to about two-thirds of the way.
	const zx = frame < tU ? -100 : lerp(x0 - 60, x0 + dx * (n * 0.62), ease(frame, tU, tU + 150));
	const open = (x: number) => Math.max(0, Math.min(1, (zx - x) / 90)); // 0 closed … 1 fully open
	const sep = (x: number) => open(x) * 46;
	const oneIdx = 3; // the single bond we pick out
	const snap = ease(frame, tOne + 40, tOne + 52);
	const backbone = (y: number, dir: -1 | 1) => {
		let d = '';
		for (let i = 0; i <= 60; i++) {
			const x = x0 - 30 + ((x1 - x0 + 60) * i) / 60;
			d += `${i === 0 ? 'M' : ' L'} ${x.toFixed(1)} ${(y + dir * sep(x)).toFixed(1)}`;
		}
		return d;
	};
	const glow = frame >= tMany ? 0.55 + 0.45 * pulse : 0;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Hydrogen bonds between base pairs: weak individually, strong together, broken when DNA unzips" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{at: theme.accent, cg: PURPLE}} />
			<Ledge x={40} y={YB + 64} w={680} opacity={fadeAt(frame, tS)} />
			{/* backbones */}
			<g opacity={fadeAt(frame, tS, 14)}>
				{[YT, YB].map((y, k) => (
					<g key={k}>
						<path d={backbone(y, k === 0 ? -1 : 1)} fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth={17} strokeLinecap="round" />
						<path d={backbone(y, k === 0 ? -1 : 1)} fill="none" stroke="#b9ab93" strokeWidth={14} strokeLinecap="round" />
						<path d={backbone(y, k === 0 ? -1 : 1)} fill="none" stroke="#ffffff" strokeOpacity={0.4} strokeWidth={4} strokeLinecap="round" transform="translate(0,-3)" />
					</g>
				))}
				<text x={x1 + 44} y={YB + 44} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>sugar–phosphate backbones</text>
			</g>
			{/* antiparallel arrows */}
			<g opacity={fadeAt(frame, tAnti)}>
				<text x={x1 + 44} y={YT - 18} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>5′ → 3′</text>
				<text x={x0 - 30} y={YB + 44} fill={TOK.inkDim} fontSize={15} fontWeight={800}>3′ ← 5′</text>
			</g>
			{/* pairs and bonds */}
			{top.map((b, i) => {
				const x = x0 + i * dx;
				const s = sep(x);
				const shown = fadeAt(frame, tP + i * 4, 10);
				const bonded = open(x) < 0.35;
				const nb = bondsPer[i];
				const yA = YT + 38 - s, yB = YB - 38 + s;
				return (
					<g key={i}>
						<line x1={x} y1={YT - s} x2={x} y2={yA - 16} stroke="#b9ab93" strokeWidth={5} opacity={shown} />
						<line x1={x} y1={YB + s} x2={x} y2={yB + 16} stroke="#b9ab93" strokeWidth={5} opacity={shown} />
						<BaseTile id={ID} x={x} y={yA + (frame > tR ? idleBob(frame, i, 0.8) : 0)} b={b} size={32} opacity={shown} tone={baseTone(b)} />
						<BaseTile id={ID} x={x} y={yB + (frame > tR ? idleBob(frame, i + 20, 0.8) : 0)} b={bot[i]} size={32} opacity={shown} tone={baseTone(bot[i])} />
						{bonded && Array.from({length: nb}, (_, k) => {
							const bx = x + (k - (nb - 1) / 2) * 8;
							const isOne = i === oneIdx && k === 0 && frame >= tOne && frame < tMany;
							const gap = isOne ? snap * 10 : 0;
							return (
								<g key={k} opacity={fadeAt(frame, tB + i * 3, 10)}>
									<line x1={bx} y1={yA + 18} x2={bx} y2={(yA + yB) / 2 - gap} stroke={isOne ? TOK.amber : TOK.inkDim} strokeWidth={isOne ? 3.5 : 2.5} strokeDasharray="4 4" />
									<line x1={bx} y1={(yA + yB) / 2 + gap} x2={bx} y2={yB - 18} stroke={isOne ? TOK.amber : TOK.inkDim} strokeWidth={isOne ? 3.5 : 2.5} strokeDasharray="4 4" />
									{glow > 0 && <line x1={bx} y1={yA + 18} x2={bx} y2={yB - 18} stroke={theme.accent} strokeWidth={6} opacity={glow * 0.35} />}
								</g>
							);
						})}
					</g>
				);
			})}
			{/* the wedge */}
			{frame >= tU && (
				<g transform={`translate(${zx},${(YT + YB) / 2})`}>
					<path d="M 34 0 L -8 -26 L -8 26 Z" fill={theme.accent} stroke="#ffffff" strokeWidth={2} />
				</g>
			)}
			{/* captions */}
			<text x={W / 2} y={60} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tOne) * (1 - fadeAt(frame, tMany))}>one hydrogen bond is weak: it breaks easily</text>
			<g opacity={fadeAt(frame, tMany)}>
				<text x={W / 2} y={50} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>{`${total} hydrogen bonds in just these ${n} base pairs`}</text>
				<text x={W / 2} y={74} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>millions along a real molecule: stable together</text>
			</g>
			<g opacity={fadeAt(frame, tB)}>
				<text x={x1 + 40} y={YB + 102} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>A–T: 2 hydrogen bonds · C–G: 3</text>
			</g>
			<text x={x0 - 30} y={YB + 102} fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tU + 60)}>unzipped: bonds broken, backbones whole</text>
			{rule && <text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, tR) * (0.82 + 0.18 * pulse)}>{rule}</text>}
		</svg>
	);
};
