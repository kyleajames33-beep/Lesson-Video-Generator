import {LineageDiagram} from './LineageDiagram';
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

const ReadableLineageDiagram = ({at = {}, delay = 62}: LineageProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tParade = at.parade ?? 40, tRib = at.ribbon ?? 120, tOff = at.offspring ?? 300, tTr = at.transfer ?? 400, tVia = at.viable ?? 600, tRule = at.rule ?? 900;
	const step = 70;
	const born = (k: number) => (k === 0 ? 0 : tParade + (k - 1) * step);
	const dies = (k: number) => (k < XS.length - 1 ? born(k + 1) + 40 : 1e9);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A selected lineage passes inherited DNA across generations; time is compressed" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{live: theme.accent, dead: '#a9a49b', dna: theme.accent}} />
			{/* DNA ribbon: the lineage */}
			<g opacity={fadeAt(frame, tRib)}>
				<path d={`M 40 386 C 200 362, 300 414, 460 386 S 640 362, 720 386`} fill="none" stroke={theme.accent} strokeWidth={10} strokeLinecap="round" opacity={0.85} />
				<path d={`M 40 398 C 200 374, 300 426, 460 398 S 640 374, 720 398`} fill="none" stroke={theme.accent} strokeWidth={4} strokeLinecap="round" opacity={0.4} />
				<text x={380} y={440} textAnchor="middle" fill={theme.accent} fontSize={34} fontWeight={800}>Inherited information continues</text>
			</g>
			{XS.map((x, k) => {
				const p = popAt(frame, fps, born(k));
				const d = ease(frame, dies(k), dies(k) + 30);
				return (
					<g key={k}>
						<g opacity={Math.min(1, p)}>
						<DioramaPlinth id={`${ID}${k}`} cx={x} cy={PY + 40} rx={74}>
							<g transform={`translate(${x},${PY - 14 + (d > 0 ? d * 8 : idleBob(frame, k, 1.5))}) scale(${Math.min(1, p)})`}>
								<ellipse cx={0} cy={0} rx={34} ry={36} fill={`url(#${ID}-g-${d > 0.5 ? 'dead' : 'live'})`} stroke="rgba(0,0,0,0.25)" />
								<circle cx={-10} cy={-10} r={4} fill="#1a1a1a" opacity={1 - d} />
								<circle cx={10} cy={-10} r={4} fill="#1a1a1a" opacity={1 - d} />
								<Helix x={0} y={16} s={0.9} frame={frame} />
							</g>
						</DioramaPlinth>
						<text x={x} y={PY + 100} textAnchor="middle" fill={TOK.inkDim} fontSize={32} fontWeight={800}>Gen {k + 1}</text>
						{d > 0 && <text x={x} y={PY - 70} textAnchor="middle" fill={TOK.inkMute} fontSize={28} fontWeight={800} opacity={d}>dies</text>}
						</g>
						{/* DNA copy handed on */}
						{k > 0 && (() => {
							const t = ease(frame, born(k) - 30, born(k));
							return t > 0 && t < 1 ? <circle data-lineage-transfer={k} cx={lerp(XS[k - 1], x, t)} cy={PY - 20 - Math.sin(t * Math.PI) * 50} r={14} fill={`url(#${ID}-g-dna)`} stroke="#ffffff" strokeWidth={2} /> : null;
						})()}
					</g>
				);
			})}
			{/* the two jobs / conditions, on the first hand-over */}
			<g opacity={fadeAt(frame, tOff)}>
				<Arrow x1={XS[1] + 60} y1={PY - 104} x2={XS[2] - 60} y2={PY - 104} color={theme.accent} width={3} head={10} t={ease(frame, tOff, tOff + 20)} />
				<text x={(XS[1] + XS[2]) / 2} y={PY - 160} textAnchor="middle" fill={TOK.ink} fontSize={42} fontWeight={800}>Makes offspring</text>
			</g>
			<g opacity={fadeAt(frame, tTr)}>
				<text x={(XS[1] + XS[2]) / 2} y={PY - 111} textAnchor="middle" fill={theme.accent} fontSize={44} fontWeight={800}>Inherited DNA</text>
			</g>
			<g opacity={popAt(frame, fps, tVia)}>
				<Pill x={XS[3] - 90} y={PY - 190} text="Viable: able to live and develop" color={TOK.amberInk} fill="#fff8ea" size={15} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<line x1={XS[3]} y1={PY - 176} x2={XS[3]} y2={PY - 62} stroke={TOK.amber} strokeWidth={2.5} strokeDasharray="5 5" />
			</g>
			<Arrow x1={40} y1={H - 52} x2={720} y2={H - 52} color={TOK.inkMute} width={2.5} head={10} t={fadeAt(frame, 0)} />
			<text x={720} y={H - 62} textAnchor="end" fill={TOK.inkMute} fontSize={30} fontWeight={800}>time</text>
			<text x={380} y={H - 14} textAnchor="middle" fill={TOK.amberInk} fontSize={30} fontWeight={800} opacity={fadeAt(frame, tRule)}>Selected lineage; time compressed</text>
		</svg>
	);
};

// Only the additive selected draft uses the larger teaching labels.
export const Module5LineageSelector = (props: LineageProps & {labelPresentation?: 'module5'}) =>
  props.labelPresentation === 'module5' ? <ReadableLineageDiagram {...props} /> : <LineageDiagram {...props} />;
