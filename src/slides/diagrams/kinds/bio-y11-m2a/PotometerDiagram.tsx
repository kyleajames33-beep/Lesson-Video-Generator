// PotometerDiagram (bio11m2Potometer) — measuring the rate of water uptake.
//
// A leafy shoot is sealed with a bung into a water-filled potometer standing
// on a stone plinth; a graduated capillary (0–`scaleMax` mm) runs from it with
// one air bubble. Each `run` plays on its beat: a stopwatch counts the minutes
// while the bubble travels the run's distance towards the shoot (optionally
// with a fan blowing on the leaves), then a results row appears with
// rate = distance ÷ time, computed here. `average` adds the mean of the runs'
// rates. `proxy` shows that some absorbed water is used in photosynthesis and
// turgor rather than transpired. `tags` label the variables. All numbers are
// computed from props. Hold: leaves sway, the fan keeps turning.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {COL, GLOSS, GlossDefs, H, LeafShape, Lines, Notes, Tag, Title, W, clamp, fadeAt, popAt, wrap, type Note, type Tone} from './shared';

export type PotRun = {label: string; mm: number; min: number; at: number; dur?: number; fan?: boolean};
export type PotometerProps = {
	title?: string;
	at?: number;
	runs?: PotRun[];
	scaleMax?: number;
	average?: {at: number; label?: string};
	proxy?: {at: number; text: string};
	tags?: {text: string; at: number; anchor: 'shoot' | 'bubble' | 'scale' | 'fan' | 'cut'; tone?: Tone}[];
	showTable?: boolean;
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2pot';
const fmt = (n: number) => (Math.abs(n - Math.round(n)) < 0.05 ? String(Math.round(n)) : n.toFixed(1));

export const PotometerDiagram = ({title, at = 0, runs = [], scaleMax = 50, average, proxy, tags = [], showTable = true, notes = [], delay = 62}: PotometerProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 46 : 6;
	const tubeX = 190;
	const capY = top + 262;
	const cx0 = 250;
	const cx1 = 720;
	const pxmm = (cx1 - cx0 - 20) / scaleMax;
	const startMm = scaleMax - 2;

	// current run
	let ri = -1;
	runs.forEach((r, i) => {
		if (frame >= r.at) ri = i;
	});
	const run = ri >= 0 ? runs[ri] : undefined;
	const dur = run?.dur ?? 120;
	const prog = run ? interpolate(frame, [run.at, run.at + dur], [0, 1], clamp) : 0;
	const bubbleMm = run ? startMm - run.mm * prog : startMm;
	const bubbleX = cx0 + 10 + bubbleMm * pxmm;
	const minutes = run ? run.min * prog : 0;
	const fanOn = run?.fan ? 1 : 0;
	const sway = Math.sin(frame / (fanOn ? 6 : 30)) * (fanOn ? 5 : 1.5);
	const shootTop = top + 40;

	const rates = runs.map((r) => r.mm / r.min);
	const rowsShown = runs.filter((r) => frame >= r.at + (r.dur ?? 120));
	const mean = rates.length ? rates.reduce((a, b) => a + b, 0) / rates.length : 0;

	const anchors = {
		shoot: {x: tubeX + 40, y: shootTop + 80},
		bubble: {x: bubbleX, y: capY},
		scale: {x: cx0 + 200, y: capY + 18},
		fan: {x: 70, y: shootTop + 80},
		cut: {x: tubeX, y: top + 170},
	};
	const tagPos = {
		shoot: {x: 470, y: shootTop + 10},
		bubble: {x: 560, y: capY - 60},
		scale: {x: 470, y: capY + 140},
		fan: {x: 110, y: shootTop - 14 + 250},
		cut: {x: 470, y: top + 150},
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Potometer'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={Math.min(1, popAt(frame, fps, at) * 1.3)}>
				<DioramaPlinth id={`${ID}p`} cx={tubeX + 20} cy={capY + 40} rx={110} />
				{/* shoot */}
				<path d={`M ${tubeX} ${top + 176} C ${tubeX + 2} ${shootTop + 120}, ${tubeX + sway} ${shootTop + 60}, ${tubeX + sway} ${shootTop}`} fill="none" stroke={COL.stem} strokeWidth={6} strokeLinecap="round" />
				{[0, 1, 2, 3].map((k) => (
					<LeafShape key={k} x={tubeX + sway * (1 - k * 0.2)} y={shootTop + 16 + k * 30} len={62} angle={(k % 2 ? -24 : 204) + sway * 2} fill={COL.leaf} />
				))}
				{/* bung + water-filled tube */}
				<rect x={tubeX - 20} y={top + 170} width={40} height={20} rx={4} fill="#6a4a3a" />
				<rect x={tubeX - 16} y={top + 190} width={32} height={capY - top - 190 + 12} fill="#cfe6f5" stroke="#8fa9b6" strokeWidth={2} />
				{/* capillary */}
				<rect x={tubeX - 16} y={capY - 8} width={cx1 - tubeX + 16} height={16} rx={8} fill="#cfe6f5" stroke="#8fa9b6" strokeWidth={2} />
				{Array.from({length: scaleMax + 1}, (_, mm) => (
					mm % 5 === 0 ? <line key={mm} x1={cx0 + 10 + mm * pxmm} x2={cx0 + 10 + mm * pxmm} y1={capY + 10} y2={capY + (mm % 10 === 0 ? 22 : 16)} stroke={TOK.inkDim} strokeWidth={1.5} /> : null
				))}
				{Array.from({length: Math.floor(scaleMax / 10) + 1}, (_, k) => (
					<text key={k} x={cx0 + 10 + k * 10 * pxmm} y={capY + 40} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{k * 10}</text>
				))}
				<text x={cx1} y={capY + 58} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={700}>mm</text>
				{/* bubble */}
				<ellipse cx={bubbleX} cy={capY} rx={11} ry={6} fill="#ffffff" stroke="#3f7fae" strokeWidth={2} />
				{run && prog > 0 && prog < 1 && <path d={`M ${bubbleX + 20} ${capY - 16} l -14 0`} stroke="#3f7fae" strokeWidth={2.5} markerEnd="" />}
			</g>
			{/* fan */}
			<g opacity={runs.some((r) => r.fan) ? (fanOn ? 1 : 0.35) * fadeAt(frame, at, 10) : 0}>
				<g transform={`translate(58, ${shootTop + 80})`}>
					<circle r={28} fill="#ffffff" stroke={TOK.inkDim} strokeWidth={2} />
					<g transform={`rotate(${fanOn ? frame * 18 : 20})`}>
						{[0, 120, 240].map((a) => <ellipse key={a} cx={0} cy={-13} rx={6} ry={13} fill="#9ab" transform={`rotate(${a})`} />)}
					</g>
					<rect x={-4} y={28} width={8} height={40} fill="#9a9a9a" />
				</g>
				{fanOn > 0 && [0, 1, 2].map((k) => {
					const x = 96 + ((frame * 4 + k * 20) % 50);
					return <line key={k} x1={x} x2={x + 22} y1={shootTop + 60 + k * 20} y2={shootTop + 60 + k * 20} stroke="#7a9ab0" strokeWidth={3} strokeLinecap="round" />;
				})}
			</g>
			{/* stopwatch */}
			{run && (
				<g transform={`translate(670, ${top + 60})`} opacity={fadeAt(frame, run.at, 10)}>
					<circle r={40} fill="#ffffff" stroke={TOK.ink} strokeWidth={3} />
					<rect x={-6} y={-52} width={12} height={10} rx={2} fill={TOK.ink} />
					<line x1={0} y1={0} x2={Math.sin(prog * Math.PI * 2) * 30} y2={-Math.cos(prog * Math.PI * 2) * 30} stroke={TOK.amber} strokeWidth={4} strokeLinecap="round" />
					<text y={70} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>{`${fmt(minutes)} min`}</text>
					<text y={94} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{run.label}</text>
				</g>
			)}
			{/* results */}
			{showTable && rowsShown.length > 0 && (
				<g>
					{rowsShown.map((r, i) => {
						const y = capY + 96 + i * 34;
						const o = fadeAt(frame, r.at + (r.dur ?? 120), 12);
						return (
							<g key={i} opacity={o}>
								<text x={336} y={y} fill={TOK.ink} fontSize={18} fontWeight={800}>{r.label}</text>
								<text x={476} y={y} fill={TOK.inkDim} fontSize={18} fontWeight={800}>{`${fmt(r.mm)} mm ÷ ${fmt(r.min)} min =`}</text>
								<text x={740} y={y} textAnchor="end" fill={theme.accent} fontSize={19} fontWeight={800}>{`${fmt(r.mm / r.min)} mm/min`}</text>
							</g>
						);
					})}
				</g>
			)}
			{average && (
				<g opacity={fadeAt(frame, average.at, 14)}>
					<rect x={326} y={capY + 96 + rowsShown.length * 34 - 22} width={420} height={34} rx={17} fill={TOK.amber} opacity={0.1 + 0.1 * idlePulse(frame)} />
					<text x={340} y={capY + 96 + rowsShown.length * 34} fill={TOK.amberInk} fontSize={19} fontWeight={800}>{average.label ?? 'mean'}</text>
					<text x={740} y={capY + 96 + rowsShown.length * 34} textAnchor="end" fill={TOK.amberInk} fontSize={20} fontWeight={800}>{`${fmt(mean)} mm/min`}</text>
				</g>
			)}
			{proxy && (
				<g opacity={fadeAt(frame, proxy.at, 14)}>
					<Lines x={40} y={capY + 110} lines={wrap(proxy.text, 22)} size={18} color={TOK.amberInk} anchor="start" />
				</g>
			)}
			{tags.map((t, i) => {
				const p = tagPos[t.anchor];
				const a = anchors[t.anchor];
				return <Tag key={i} frame={frame} fps={fps} at={t.at} x={p.x} y={p.y} text={t.text} tone={t.tone} accent={theme.accent} tx={a.x} ty={a.y} size={18} />;
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
