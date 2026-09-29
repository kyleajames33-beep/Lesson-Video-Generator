// ProbeStripDiagram — a SNP test only reads the positions it was built to read.
//
// A gene lies on a stone rail, dense with tick marks for the known harmful
// variants (the scene's "more than a thousand"; the ticks are a schematic
// crowd, not a count). The test's few probes (the scene's "three") light up
// and read their positions: all normal, so the result says "clear". But this
// person's variant sits between the probes, unread, so a clear result does
// not rule risk out. Then the scene's other limits land as small tags.
//
// Props: `gene`, `probes` (count read), `known` (text for the known-variant
// total), `limits` [{text, at}], `at`.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {GlossDefs, Ledge, Pill, ease, fadeAt, hash01, popAt} from './shared';

export type ProbeStripProps = {
	gene?: string;
	probes?: number;
	known?: string;
	limits?: {text: string; at: number}[];
	rule?: string;
	at?: {reads?: number; probes?: number; known?: number; clear?: number; rule?: number};
	delay?: number;
};

const ID = 'b12m5probe';
const W = 760, H = 530;
const X0 = 60, X1 = 700, Y = 160;

export const ProbeStripDiagram = ({gene = 'BRCA genes', probes = 3, known = 'more than 1,000 known harmful variants', limits = [], rule = 'a SNP test reads a sample of the genome, not the whole story', at = {}, delay = 62}: ProbeStripProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tReads = at.reads ?? 20, tProbe = at.probes ?? 120, tKnown = at.known ?? 220, tClear = at.clear ?? 380, tRule = at.rule ?? 900;
	const N_TICKS = 110;
	const ticks = Array.from({length: N_TICKS}, (_, k) => X0 + 14 + ((X1 - X0 - 28) * (k + hash01(k) * 0.8)) / N_TICKS);
	const probeX = Array.from({length: probes}, (_, k) => X0 + ((X1 - X0) * (k + 0.5)) / probes);
	const missX = (probeX[0] + probeX[1 % probes]) / 2 + 18;
	const scan = ease(frame, tProbe, tProbe + 50);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A SNP test reads only a few chosen positions out of many known variants" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{gene: theme.accent, probe: '#9aa7b4'}} />
			<g opacity={fadeAt(frame, 0, 14)}>
				<Ledge x={X0 - 20} y={Y + 44} w={X1 - X0 + 40} />
				<rect x={X0} y={Y - 18} width={X1 - X0} height={36} rx={18} fill={`url(#${ID}-r-gene)`} stroke="rgba(0,0,0,0.25)" />
				<text x={X0} y={Y - 34} fill={TOK.ink} fontSize={19} fontWeight={800}>{gene}</text>
			</g>
			{/* known harmful variants */}
			<g opacity={fadeAt(frame, tKnown)}>
				{ticks.map((x, k) => <line key={k} x1={x} y1={Y - 16} x2={x} y2={Y + 16} stroke="#ffffff" strokeWidth={1.6} opacity={fadeAt(frame, tKnown + (k % 20), 6) * 0.85} />)}
				<text x={X1} y={Y - 34} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{known}</text>
			</g>
			{/* probes */}
			{probeX.map((x, k) => {
				const p = popAt(frame, fps, tProbe + k * 8);
				const lit = scan > (k + 0.5) / probes;
				return (
					<g key={k} opacity={Math.min(1, p)}>
						<line x1={x} y1={Y + 20} x2={x} y2={Y + 92} stroke="#9aa7b4" strokeWidth={3} />
						<circle cx={x} cy={Y + 104} r={15} fill={`url(#${ID}-g-probe)`} stroke={lit ? theme.accent : 'rgba(0,0,0,0.25)'} strokeWidth={lit ? 3 : 1} />
						<rect x={x - 8} y={Y - 24} width={16} height={48} rx={6} fill="none" stroke={theme.accent} strokeWidth={3} opacity={lit ? 1 : 0} />
						<text x={x} y={Y + 140} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800} opacity={lit ? fadeAt(frame, tClear) : 0}>normal</text>
					</g>
				);
			})}
			<g opacity={fadeAt(frame, tProbe + 20)}>
				<text x={380} y={Y + 176} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>the test reads {probes} positions</text>
			</g>
			{/* the unread variant + the "clear" result */}
			<g opacity={fadeAt(frame, tClear)}>
				<circle cx={missX} cy={Y} r={16 + idlePulse(frame) * 3} fill="none" stroke={TOK.amber} strokeWidth={3.5} />
				<line x1={missX} y1={Y - 20} x2={missX} y2={Y - 60} stroke={TOK.amber} strokeWidth={2.5} />
				<text x={missX} y={Y - 66} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>this person's variant: not read</text>
				<Pill x={380} y={Y + 214} text='result: "clear"  ≠  no risk' color={TOK.amberInk} fill="#fff8ea" size={17} />
			</g>
			{/* the other limits */}
			{limits.map((l, k) => (
				<g key={k} opacity={popAt(frame, fps, l.at)}>
					<Pill x={380} y={Y + 250 + k * 36} text={l.text} color={TOK.inkDim} size={15} />
				</g>
			))}
			<text x={380} y={H - 8} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tRule)}>{rule}</text>
		</svg>
	);
};
