// PathwayDiagram — gene expression as a row of stations on stone plinths
// (e.g. genotype → protein → effect → phenotype), each landing when the
// narration names it, with the tempting shortcut ("genes become traits
// directly") drawn as an arc overhead and struck out in amber.
//
// Station icons are generic teaching glyphs, not specific molecules:
//   dna      a short DNA ladder with one gene section highlighted
//   protein  a folded chain of amino-acid beads
//   effect   an enzyme-shaped protein turning a substrate into a product
//   trait    a flower (an observable feature)
// `inputs` add chips that feed into a station (e.g. "other proteins",
// "environment"); `highlight` marks the station the scene says students skip; it
// breathes in the hold.
//
// Props: `stations` [{label, sub?, icon, at}], `shortcut` {text, at},
// `inputs` [{to, text, at}], `highlight`, `rule` {text, at}.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, CORAL, GlossDefs, PURPLE, Pill, ease, fadeAt, popAt} from './shared';

type Icon = 'dna' | 'protein' | 'effect' | 'trait';
export type PathwayProps = {
	stations?: {label: string; sub?: string; icon: Icon; at: number}[];
	shortcut?: {text: string; at: number};
	inputs?: {to: number; text: string; at: number}[];
	highlight?: number;
	rule?: {text: string; at: number};
	delay?: number;
};

const ID = 'b12m5path';
const W = 760, H = 530;
const PY = 316; // plinth top

const Glyph = ({icon, x, y, frame, accent}: {icon: Icon; x: number; y: number; frame: number; accent: string}) => {
	if (icon === 'dna') {
		const rungs = Array.from({length: 7}, (_, k) => ({yy: y - 92 + k * 13, w: 22 * Math.cos(k * 0.8 + frame / 40)}));
		return (
			<g>
				<path d={rungs.map((r, k) => `${k ? 'L' : 'M'} ${x - r.w} ${r.yy}`).join(' ')} fill="none" stroke="#8f8b83" strokeWidth={4} strokeLinejoin="round" />
				<path d={rungs.map((r, k) => `${k ? 'L' : 'M'} ${x + r.w} ${r.yy}`).join(' ')} fill="none" stroke="#8f8b83" strokeWidth={4} strokeLinejoin="round" />
				{rungs.map((r, k) => (
					<line key={k} x1={x - r.w} y1={r.yy} x2={x + r.w} y2={r.yy} stroke={k >= 2 && k <= 4 ? accent : '#b7b1a6'} strokeWidth={4} strokeLinecap="round" />
				))}
				<rect x={x - 32} y={y - 72} width={64} height={40} rx={8} fill="none" stroke={accent} strokeWidth={2.5} strokeDasharray="5 4" />
			</g>
		);
	}
	if (icon === 'protein') {
		const pts = [[-22, -60], [-2, -70], [18, -60], [26, -40], [12, -24], [-10, -30], [-26, -16], [-14, 2], [8, -4], [24, 6]];
		return (
			<g>
				<path d={pts.map((p, k) => `${k ? 'L' : 'M'} ${x + p[0]} ${y + p[1] + idleBob(frame, k, 1)}`).join(' ')} fill="none" stroke="#9a948a" strokeWidth={4} />
				{pts.map((p, k) => <circle key={k} cx={x + p[0]} cy={y + p[1] + idleBob(frame, k, 1)} r={9} fill={`url(#${ID}-g-aa)`} stroke="rgba(0,0,0,0.25)" />)}
			</g>
		);
	}
	if (icon === 'effect') {
		const t = (frame % 90) / 90;
		return (
			<g>
				<path d={`M ${x - 34} ${y - 30} A 34 34 0 1 0 ${x + 20} ${y - 58} L ${x - 2} ${y - 34} L ${x + 26} ${y - 22} A 34 34 0 0 1 ${x - 34} ${y - 30} Z`} fill={`url(#${ID}-g-aa)`} stroke="rgba(0,0,0,0.25)" />
				<circle cx={x + 30 - t * 16} cy={y - 40} r={8} fill={`url(#${ID}-g-sub)`} opacity={1 - t} />
				<circle cx={x + 44 + t * 10} cy={y - 60 - t * 10} r={6} fill={`url(#${ID}-g-sub)`} opacity={t} />
				<circle cx={x + 50 + t * 12} cy={y - 34 + t * 6} r={6} fill={`url(#${ID}-g-sub)`} opacity={t} />
			</g>
		);
	}
	// trait: a flower
	return (
		<g>
			<line x1={x} y1={y - 44} x2={x} y2={y} stroke="#6b8f3a" strokeWidth={5} />
			{Array.from({length: 6}, (_, k) => {
				const a = (k / 6) * Math.PI * 2 + Math.sin(frame / 50) * 0.08;
				return <ellipse key={k} cx={x + Math.cos(a) * 16} cy={y - 60 + Math.sin(a) * 16} rx={13} ry={9} transform={`rotate(${(a * 180) / Math.PI} ${x + Math.cos(a) * 16} ${y - 60 + Math.sin(a) * 16})`} fill={`url(#${ID}-g-petal)`} stroke="rgba(0,0,0,0.2)" />;
			})}
			<circle cx={x} cy={y - 60} r={9} fill="#f0c93a" />
		</g>
	);
};

export const PathwayDiagram = ({stations = [], shortcut, inputs = [], highlight: keyIdx, rule, delay = 62}: PathwayProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = stations.length;
	const xs = stations.map((_, i) => (n === 1 ? 380 : 90 + (i * 580) / (n - 1)));
	const rx = n <= 3 ? 96 : 80;
	const gs = n <= 3 ? 1.45 : 1.3; // glyph scale
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={stations.map((s) => s.label).join(' → ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{aa: PURPLE, sub: '#f0c93a', petal: CORAL}} />
			{stations.map((s, i) => {
				const p = popAt(frame, fps, s.at);
				const isKey = i === keyIdx;
				return (
					<g key={i} opacity={Math.min(1, p * 1.2)}>
						<g transform={`translate(${xs[i]},${PY}) scale(${Math.min(1, 0.6 + p * 0.4)}) translate(${-xs[i]},${-PY})`}>
							<DioramaPlinth id={`${ID}${i}`} cx={xs[i]} cy={PY} rx={rx}>
								{isKey && frame > s.at + 40 && <ellipse cx={xs[i]} cy={PY - 44} rx={rx * 0.85} ry={80} fill={TOK.amber} opacity={0.12 + idlePulse(frame) * 0.12} />}
								<g transform={`translate(${xs[i]},${PY - 4}) scale(${gs}) translate(${-xs[i]},${-(PY - 4)})`}>
									<Glyph icon={s.icon} x={xs[i]} y={PY - 4} frame={frame} accent={theme.accent} />
								</g>
							</DioramaPlinth>
						</g>
						<text x={xs[i]} y={PY + rx * 0.34 + 50} textAnchor="middle" fill={isKey ? TOK.amberInk : TOK.ink} fontSize={19} fontWeight={800}>{s.label}</text>
						{s.sub && <text x={xs[i]} y={PY + rx * 0.34 + 72} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{s.sub}</text>}
						{i > 0 && <Arrow x1={xs[i - 1] + rx * 0.62} y1={PY - 60} x2={xs[i] - rx * 0.62} y2={PY - 60} color={TOK.inkMute} width={3} head={10} t={ease(frame, s.at - 16, s.at + 4)} />}
					</g>
				);
			})}
			{inputs.map((inp, k) => (
				<g key={k} opacity={popAt(frame, fps, inp.at)}>
					<Pill x={Math.min(xs[inp.to], 600)} y={PY + rx * 0.34 + 104 + k * 36} text={`+ ${inp.text}`} color={theme.accent} fill={theme.soft} size={15} />
				</g>
			))}
			{shortcut && n > 1 && (() => {
				const t = ease(frame, shortcut.at, shortcut.at + 30);
				const x0 = xs[0], x1 = xs[n - 1];
				const top = 50;
				const d = `M ${x0} ${PY - 130} C ${x0} ${top}, ${x1} ${top}, ${x1} ${PY - 130}`;
				const cx = (x0 + x1) / 2, cy = top + (PY - 130 - top) * 0.25;
				return (
					<g opacity={t}>
						<path d={d} fill="none" stroke={TOK.amber} strokeWidth={3} strokeDasharray="8 7" />
						<g transform={`translate(${cx},${cy + 4})`} opacity={fadeAt(frame, shortcut.at + 20)}>
							<circle r={18 + idlePulse(frame) * 2} fill="#ffffff" stroke={TOK.amber} strokeWidth={3} />
							<path d="M -7 -7 L 7 7 M 7 -7 L -7 7" stroke={TOK.amberInk} strokeWidth={4} strokeLinecap="round" />
						</g>
						<text x={cx} y={cy - 26} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{shortcut.text}</text>
					</g>
				);
			})()}
			{rule && <text x={380} y={H - 10} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800} opacity={fadeAt(frame, rule.at)}>{rule.text}</text>}
		</svg>
	);
};
