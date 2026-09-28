// LineageDiagram — continuity is about the lineage, not the individual.
//
// Four generations stand on stone plinths along a time line. Each organism
// appears, passes a copy of its DNA to its offspring, and then greys out (every
// individual dies). The DNA ribbon running under all of them never breaks:
// that is the continuity. The two jobs of reproduction and the two conditions
// light up as the narration names them: (1) offspring are made and DNA is
// transferred to them; (2) the offspring are viable, i.e. survive to
// reproduce again.
//
// Props: `at` (frames after `delay`): parade / ribbon / offspring / transfer /
// viable / rule.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, GlossDefs, Pill, ease, fadeAt, lerp, popAt} from './shared';

export type LineageProps = {
	at?: {parade?: number; ribbon?: number; offspring?: number; transfer?: number; viable?: number; rule?: number};
	delay?: number;
};

const ID = 'b12m5lin';
const W = 760, H = 530;
const XS = [110, 290, 470, 650];
const PY = 226;

const Helix = ({x, y, s = 1, frame}: {x: number; y: number; s?: number; frame: number}) => (
	<g transform={`translate(${x},${y}) scale(${s})`}>
		{Array.from({length: 5}, (_, k) => {
			const w = 9 * Math.cos(k * 1.1 + frame / 18);
			return <line key={k} x1={-w} y1={-16 + k * 8} x2={w} y2={-16 + k * 8} stroke="#ffffff" strokeWidth={2.5} />;
		})}
	</g>
);

export const LineageDiagram = ({at = {}, delay = 62}: LineageProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tParade = at.parade ?? 40, tRib = at.ribbon ?? 120, tOff = at.offspring ?? 300, tTr = at.transfer ?? 400, tVia = at.viable ?? 600, tRule = at.rule ?? 900;
	const step = 70;
	const born = (k: number) => (k === 0 ? 0 : tParade + (k - 1) * step);
	const dies = (k: number) => (k < XS.length - 1 ? born(k + 1) + 40 : 1e9);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Individuals die, but DNA passed to viable offspring carries the lineage forward" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{live: theme.accent, dead: '#a9a49b', dna: theme.accent}} />
			{/* DNA ribbon: the lineage */}
			<g opacity={fadeAt(frame, tRib)}>
				<path d={`M 40 386 C 200 362, 300 414, 460 386 S 640 362, 720 386`} fill="none" stroke={theme.accent} strokeWidth={10} strokeLinecap="round" opacity={0.85} />
				<path d={`M 40 398 C 200 374, 300 426, 460 398 S 640 374, 720 398`} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinecap="round" opacity={0.4} />
				<text x={380} y={440} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>the genetic information continues</text>
			</g>
			{XS.map((x, k) => {
				const p = popAt(frame, fps, born(k));
				const d = ease(frame, dies(k), dies(k) + 30);
				return (
					<g key={k} opacity={Math.min(1, p)}>
						<DioramaPlinth id={`${ID}${k}`} cx={x} cy={PY + 40} rx={74}>
							<g transform={`translate(${x},${PY - 14 + (d > 0 ? d * 8 : idleBob(frame, k, 1.5))}) scale(${Math.min(1, p)})`}>
								<ellipse cx={0} cy={0} rx={34} ry={36} fill={`url(#${ID}-g-${d > 0.5 ? 'dead' : 'live'})`} stroke="rgba(0,0,0,0.25)" />
								<circle cx={-10} cy={-10} r={4} fill="#1a1a1a" opacity={1 - d} />
								<circle cx={10} cy={-10} r={4} fill="#1a1a1a" opacity={1 - d} />
								<Helix x={0} y={16} s={0.9} frame={frame} />
							</g>
						</DioramaPlinth>
						<text x={x} y={PY + 100} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>generation {k + 1}</text>
						{d > 0 && <text x={x} y={PY - 70} textAnchor="middle" fill={TOK.inkMute} fontSize={15} fontWeight={800} opacity={d}>dies</text>}
						{/* DNA copy handed on */}
						{k > 0 && (() => {
							const t = ease(frame, born(k) - 30, born(k));
							return t > 0 && t < 1 ? <circle cx={lerp(XS[k - 1], x, t)} cy={PY - 20 - Math.sin(t * Math.PI) * 50} r={9} fill={`url(#${ID}-g-dna)`} stroke="#ffffff" strokeWidth={2} /> : null;
						})()}
					</g>
				);
			})}
			{/* the two jobs / conditions, on the first hand-over */}
			<g opacity={fadeAt(frame, tOff)}>
				<Arrow x1={XS[1] + 60} y1={PY - 104} x2={XS[2] - 60} y2={PY - 104} color={theme.accent} width={3} head={10} t={ease(frame, tOff, tOff + 20)} />
				<text x={(XS[1] + XS[2]) / 2} y={PY - 150} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>1 · makes offspring</text>
			</g>
			<g opacity={fadeAt(frame, tTr)}>
				<text x={(XS[1] + XS[2]) / 2} y={PY - 126} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>and transfers the DNA</text>
			</g>
			<g opacity={popAt(frame, fps, tVia)}>
				<Pill x={XS[3] - 90} y={PY - 190} text="2 · viable: survives to reproduce again" color={TOK.amberInk} fill="#fff8ea" size={15} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<line x1={XS[3]} y1={PY - 176} x2={XS[3]} y2={PY - 62} stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="5 5" />
			</g>
			<Arrow x1={40} y1={H - 52} x2={720} y2={H - 52} color={TOK.inkMute} width={2.5} head={10} t={fadeAt(frame, 0)} />
			<text x={720} y={H - 62} textAnchor="end" fill={TOK.inkMute} fontSize={15} fontWeight={800}>time</text>
			<text x={380} y={H - 14} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>species persist by passing on DNA, not by keeping one alive</text>
		</svg>
	);
};
