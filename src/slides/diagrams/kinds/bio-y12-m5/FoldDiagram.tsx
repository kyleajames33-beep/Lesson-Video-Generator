// FoldDiagram — sequence sets shape, shape sets function.
//
// Two stone plinths. Left: a chain of amino-acid beads folds into a cup whose
// pocket fits a substrate (function ✓). Right: the same chain with ONE amino
// acid changed (the amber bead) folds differently; the pocket closes, and the
// substrate no longer fits (function ✗). The chain of logic along the foot
// lights up link by link as the narration says it:
// sequence → folding → shape → function.
// Schematic: bead positions are illustrative, not a real protein structure.
//
// Props: `at` (frames after `delay`): fold / change / refold / shape / fail /
// rule; `chain` labels (optional).

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GlossDefs, PURPLE, ease, fadeAt, lerp} from './shared';

export type FoldProps = {
	at?: {fold?: number; change?: number; refold?: number; shape?: number; fail?: number; rule?: number};
	changed?: number;
	delay?: number;
};

const ID = 'b12m5fold';
const W = 760, H = 530;
const N = 9;
const CUP = [320, 348, 16, 50, 90, 130, 164, 196, 224].map((d) => (d * Math.PI) / 180); // gap at the top = the pocket
const LUMP = [300, 20, 70, 110, 150, 200, 250, 330, 260].map((d) => (d * Math.PI) / 180);
const LUMP_R = [58, 60, 50, 62, 56, 48, 60, 22, 30];

export const FoldDiagram = ({at = {}, changed = 4, delay = 62}: FoldProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const tFold = at.fold ?? 30, tChange = at.change ?? 200, tRefold = at.refold ?? 320, tShape = at.shape ?? 380, tFail = at.fail ?? 460, tRule = at.rule ?? 700;
	const panels = [
		{cx: 200, fold: ease(frame, tFold, tFold + 60), mutant: false, title: 'normal sequence', show: 0},
		{cx: 560, fold: ease(frame, tRefold, tRefold + 60), mutant: true, title: 'one amino acid changed', show: tChange - 20},
	];
	const CY = 250;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A protein's amino acid sequence sets its folded shape, and the shape sets its function" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{aa: PURPLE, mut: TOK.amber, sub: theme.accent}} />
			{panels.map((p, pi) => {
				const o = fadeAt(frame, p.show, 16);
				const settled = frame > (pi ? tRefold : tFold) + 80;
				const pos = (i: number) => {
					const lx = p.cx - ((N - 1) * 30) / 2 + i * 30, ly = 116;
					const a = p.mutant ? LUMP[i] : CUP[i];
					const r = p.mutant ? LUMP_R[i] : 62;
					const fx = p.cx + Math.cos(a) * r, fy = CY + Math.sin(a) * r;
					const b = settled ? idleBob(frame, i + pi * 20, 1.2) : 0;
					return {x: lerp(lx, fx, p.fold) + b, y: lerp(ly, fy, p.fold) + b * 0.6};
				};
				const pts = Array.from({length: N}, (_, i) => pos(i));
				// Substrate: fits the cup; bounces off the mutant.
				const subIn = pi === 0 ? ease(frame, tShape - 30, tShape + 10) : ease(frame, tFail, tFail + 24);
				const bounce = pi === 1 ? ease(frame, tFail + 24, tFail + 50) : 0;
				const subY = lerp(96, pi === 0 ? CY - 16 : CY - 96, subIn) - bounce * 50;
				const subX = p.cx + (pi === 1 ? bounce * 50 : 0);
				return (
					<g key={pi} opacity={o}>
						<text x={p.cx} y={36} textAnchor="middle" fill={p.mutant ? TOK.amberInk : TOK.ink} fontSize={19} fontWeight={800}>{p.title}</text>
						<DioramaPlinth id={`${ID}${pi}`} cx={p.cx} cy={CY + 96} rx={150} />
						<path d={pts.map((q, i) => `${i ? 'L' : 'M'} ${q.x} ${q.y}`).join(' ')} fill="none" stroke="#9a948a" strokeWidth={5} strokeLinejoin="round" />
						{pts.map((q, i) => {
							const isMut = p.mutant && i === changed;
							return <circle key={i} cx={q.x} cy={q.y} r={15} fill={`url(#${ID}-g-${isMut ? 'mut' : 'aa'})`} stroke={isMut ? TOK.amberInk : 'rgba(0,0,0,0.25)'} strokeWidth={isMut ? 2 + idlePulse(frame) : 1} />;
						})}
						{/* substrate */}
						<g opacity={fadeAt(frame, pi === 0 ? tShape - 40 : tFail - 20)}>
							<path d={`M ${subX - 16} ${subY - 10} L ${subX + 16} ${subY - 10} L ${subX} ${subY + 16} Z`} fill={`url(#${ID}-g-sub)`} stroke="rgba(0,0,0,0.25)" />
						</g>
						<text x={p.cx} y={CY + 202} textAnchor="middle" fill={pi === 0 ? theme.accent : TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, pi === 0 ? tShape + 20 : tFail + 40)}>
							{pi === 0 ? 'fits the pocket: works ✓' : 'shape changed: no fit ✗'}
						</text>
					</g>
				);
			})}
			{/* chain of logic */}
			{['sequence', 'folding', 'shape', 'function'].map((w, k) => {
				const t = [tChange, tRefold, tShape + 60, tFail][k];
				return (
					<g key={w} opacity={fadeAt(frame, t)}>
						<text x={170 + k * 140} y={H - 14} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{w}</text>
						{k < 3 && <text x={240 + k * 140} y={H - 14} textAnchor="middle" fill={TOK.inkMute} fontSize={19} fontWeight={800}>→</text>}
					</g>
				);
			})}
			<text x={380} y={H - 46} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tRule)}>sequence sets shape; shape sets function</text>
		</svg>
	);
};
