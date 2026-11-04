import React from 'react';
import {FONT_DISPLAY} from '../../../styles/tokens';
import {balanceGeometry, clamp, formatSize, gapStateAt, INSTRUMENT_LIMITS, SIZE_TICKS_NM, sizePosition} from './model';
import type {GapSimulation} from './model';

const C = {paper: '#f6f1e7', ink: '#26231f', muted: '#6b6358', rule: '#cbbda9', teal: '#1b766a', plum: '#7a4a8c', blue: '#2b7db0', amber: '#b86e0a'};
const wrap = (text: string, maxChars = 26) => {
	const lines: string[] = [];
	for (const word of text.split(/\s+/)) {
		if (!lines.length || lines[lines.length - 1].length + word.length + 1 > maxChars) lines.push(word);
		else lines[lines.length - 1] += ` ${word}`;
	}
	return lines;
};
type BoxProps = {width?: number | string; height?: number | string; className?: string};
const Text: React.FC<{x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number}> = ({x, y, children, size = 28, fill = C.ink, anchor = 'start', weight = 500}) => <text x={x} y={y} fontFamily={FONT_DISPLAY} fontSize={size} fill={fill} textAnchor={anchor} fontWeight={weight}>{children}</text>;

export type LadderThumbnail = {id: string; label: string; sizeNm: number; href?: string; naturalWidth?: number; naturalHeight?: number; labelOffsetY?: number};
export type SizeLadderProps = BoxProps & {
	/** Frame-derived transition progress between light and electron instrument limits. */
	progress?: number; resolveNm?: number; thumbnails?: readonly LadderThumbnail[]; showAuthorNotes?: boolean;
};
/** Logarithmic positions represent measured size; thumbnail artwork remains a readable illustration. */
export const SizeLadder: React.FC<SizeLadderProps> = ({width = 1100, height = 780, className, progress = 0, resolveNm, showAuthorNotes = false, thumbnails = [
	{id: 'cell', label: 'Cheek cell', sizeNm: 50_000}, {id: 'mito', label: 'Mitochondrion', sizeNm: 1000},
	{id: 'ribosome', label: 'Ribosome', sizeNm: 25}, {id: 'membrane', label: 'Membrane', sizeNm: 7},
]}) => {
	const top = 92, bottom = 660, axis = 380, p = clamp(progress, 0, 1);
	const limit = resolveNm ?? 10 ** (Math.log10(200) + p * (Math.log10(0.2) - Math.log10(200)));
	const y = (nm: number) => top + clamp(sizePosition(nm), 0, 1) * (bottom - top);
	return <svg width={width} height={height} viewBox="0 0 1100 780" role="img" aria-label="Logarithmic size ladder and microscopy resolution limits" className={className}>
		<Text x={42} y={44} size={32} weight={650}>Size and resolving detail</Text>
		<rect x={axis - 18} y={top} width={36} height={Math.max(0, y(limit) - top)} fill={C.blue} opacity={0.13}/>
		<line x1={axis} y1={top} x2={axis} y2={bottom} stroke={C.ink} strokeWidth={3}/>
		{SIZE_TICKS_NM.map(nm => <g key={nm}><line x1={axis - 18} y1={y(nm)} x2={axis + 18} y2={y(nm)} stroke={C.ink} strokeWidth={2}/><Text x={axis - 32} y={y(nm) + 8} anchor="end" size={26}>{formatSize(nm)}</Text></g>)}
		{INSTRUMENT_LIMITS.map(a => <g key={a.id} opacity={a.id === 'electron' ? 0.35 + 0.65 * p : 1}>
			<line x1={axis + 26} y1={y(a.sizeNm)} x2={1050} y2={y(a.sizeNm)} stroke={a.id === 'electron' ? C.plum : C.blue} strokeWidth={2} strokeDasharray="7 7"/>
			<Text x={670} y={y(a.sizeNm) - 12} size={27}>{a.label}</Text>
			<Text x={670} y={y(a.sizeNm) + 23} size={23} fill={C.muted}>{a.detail}</Text>
		</g>)}
		{thumbnails.map(a => {
			const yy = y(a.sizeNm), available = a.sizeNm >= limit;
			const box = 56, nw = a.naturalWidth ?? 1, nh = a.naturalHeight ?? 1, scale = box / Math.max(nw, nh);
			return <g key={a.id} opacity={available ? 1 : 0.38}>
				<circle cx={axis} cy={yy} r={6} fill={C.teal}/><line x1={axis} y1={yy} x2={440} y2={yy + (a.labelOffsetY ?? 0)} stroke={C.rule} strokeWidth={2}/>
				{a.href ? <image href={a.href} x={446 + (box - nw * scale) / 2} y={yy + (a.labelOffsetY ?? 0) - box / 2} width={nw * scale} height={nh * scale} preserveAspectRatio="xMidYMid meet"/> : null}
				<Text x={a.href ? 514 : 450} y={yy + (a.labelOffsetY ?? 0) + 8} size={25}>{a.label}</Text>
				<Text x={a.href ? 514 : 450} y={yy + (a.labelOffsetY ?? 0) + 35} size={22} fill={C.muted}>{formatSize(a.sizeNm)}</Text>
			</g>;
		})}
		<line x1={axis - 12} y1={y(limit)} x2={axis + 34} y2={y(limit)} stroke={C.teal} strokeWidth={6}/>
		<Text x={42} y={716} size={25} fill={C.teal}>Shaded scale: at or above the current resolving limit</Text>
		<Text x={42} y={752} size={23} fill={C.muted}>Cell samples usually give about 1 to 2 nm detail.{showAuthorNotes || thumbnails.some(a => a.href) ? ' Thumbnails are not to scale.' : ''}</Text>
	</svg>;
};

export type AssessmentChip = {id: string; label: string; progress?: number};
export type AssessBalanceProps = BoxProps & {
	criterion: string; impact: readonly AssessmentChip[]; limitations: readonly AssessmentChip[];
	judgement?: string; tiltDegrees?: number; leftLabel?: string; rightLabel?: string; showAuthorNotes?: boolean;
};
/** A judgement diagram, never an evidence-counting vote or a quantitative weighing device. */
export const AssessBalance: React.FC<AssessBalanceProps> = ({width = 1100, height = 780, className, criterion, impact, limitations, judgement, tiltDegrees = 0, leftLabel = 'Impact', rightLabel = 'Limits', showAuthorNotes = false}) => {
	const g = balanceGeometry(tiltDegrees), pivot = {x: 550, y: 185};
	const side = (items: readonly AssessmentChip[], offset: {x: number; y: number}, label: string) => {
		const cx = pivot.x + offset.x, trayY = 560 + offset.y;
		const rows = items.map(item => ({item, lines: wrap(item.label)}));
		const heights = rows.map(row => 15 + row.lines.length * 27);
		if (heights.reduce((a, b) => a + b, 0) > 370) throw new Error('Evidence labels exceed the pan. Show fewer chips at this cue rather than shrink or truncate them.');
		return <g>
			<path d={`M${cx},${pivot.y + offset.y} L${cx - 170},${trayY} M${cx},${pivot.y + offset.y} L${cx + 170},${trayY}`} stroke={C.rule} strokeWidth={2} fill="none"/>
			<path d={`M${cx - 178},${trayY} Q${cx},${trayY + 40} ${cx + 178},${trayY}`} stroke={C.ink} strokeWidth={3} fill="none"/>
			{rows.map(({item, lines}, index) => {
				const p = clamp(item.progress ?? 1, 0, 1), yy = trayY - 10 - heights.slice(index).reduce((a, b) => a + b, 0) - (1 - p) * 55;
				return <g key={item.id} opacity={p}><rect x={cx - 155} y={yy} width={310} height={heights[index] - 4} rx={7} fill="#fffdf8" stroke={C.rule}/>{lines.map((line, j) => <Text key={j} x={cx} y={yy + 27 + j * 27} size={24} anchor="middle">{line}</Text>)}</g>;
			})}
			<Text x={cx} y={trayY + 72} size={30} anchor="middle" weight={650}>{label}</Text>
		</g>;
	};
	return <svg width={width} height={height} viewBox="0 0 1100 780" role="img" aria-label="Assessing discoveries and limitations against a stated criterion" className={className}>
		<Text x={550} y={43} size={30} anchor="middle" weight={650}>Criterion</Text><Text x={550} y={88} anchor="middle" size={28}>{criterion}</Text>
		<path d="M550,185 L520,630 L580,630 Z" fill={C.rule} opacity={0.5}/><line x1={pivot.x + g.left.x} y1={pivot.y + g.left.y} x2={pivot.x + g.right.x} y2={pivot.y + g.right.y} stroke={C.ink} strokeWidth={7} strokeLinecap="round"/>
		<circle cx={pivot.x} cy={pivot.y} r={12} fill={C.teal}/>
		{side(impact, g.left, leftLabel)}{side(limitations, g.right, rightLabel)}
		{judgement ? <Text x={550} y={710} anchor="middle" size={29} fill={C.teal} weight={650}>{judgement}</Text> : null}
		{showAuthorNotes ? <Text x={550} y={755} anchor="middle" size={23} fill={C.muted}>Tilt expresses a judgement against the criterion, not a count of chips.</Text> : null}
	</svg>;
};

export type GapBoxProps = BoxProps & {
	simulation: GapSimulation; frame: number; fps: number; modelStepsPerSecond?: number;
	showCounters?: boolean; showTotals?: boolean; title?: string; counterKind?: string; showAuthorNotes?: boolean;
};
/** Supply the composition frame. Random paths, side counts and crossings all come from the same simulation. */
export const GapBox: React.FC<GapBoxProps> = ({width = 1100, height = 780, className, simulation, frame, fps, modelStepsPerSecond = 30, showCounters = true, showTotals = false, title = 'Particles cross in both directions', counterKind, showAuthorNotes = false}) => {
	if (!(fps > 0 && modelStepsPerSecond > 0 && Number.isFinite(frame))) throw new Error('Use finite frame and positive fps and modelStepsPerSecond.');
	const {state, recent, elapsedWindowSteps} = gapStateAt(simulation, Math.max(0, frame) / fps * modelStepsPerSecond);
	const {config} = simulation, kind = counterKind ?? config.kinds[0].id;
	if (!state.counts[kind]) throw new Error('Counter species must exist in this simulation.');
	const selected = config.kinds.find(k => k.id === kind)!, totals = state.totals[kind], rates = recent[kind], net = rates.right - rates.left;
	const totalNet = totals.right - totals.left;
	const sx = 940 / config.width, sy = 370 / config.height, origin = {x: 80, y: 200}, mid = origin.x + 470;
	const gapLow = origin.y + (config.height - config.gapHeight) / 2 * sy, gapHigh = origin.y + (config.height + config.gapHeight) / 2 * sy;
	const arrow = Math.min(125, Math.abs(net) * 10), sign = Math.sign(net);
	return <svg width={width} height={height} viewBox="0 0 1100 780" role="img" aria-label="Seeded random particle model with measured crossings and conserved particle counts" className={className}>
		<Text x={45} y={45} size={31} weight={650}>{title}</Text>
		<Text x={45} y={88} size={24} fill={C.muted}>Particles keep moving. The overall result can vary between intervals.</Text>
		{showCounters ? <>
			<Text x={550} y={135} anchor="middle" size={26}>{selected.label}: {elapsedWindowSteps < config.windowSteps ? 'crossings so far' : 'crossings in the latest equal-time interval'}</Text>
			<Text x={405} y={178} anchor="middle" size={30} fill={C.teal}>→ {rates.right}</Text><Text x={690} y={178} anchor="middle" size={30} fill={C.plum}>← {rates.left}</Text>
		</> : null}
		<rect x={origin.x} y={origin.y} width={940} height={370} rx={12} fill="#fffdf8" stroke={C.rule} strokeWidth={2}/>
		{config.divider !== 'none' ? <path d={`M${mid},${origin.y} V${gapLow} M${mid},${gapHigh} V${origin.y + 370}`} stroke={C.ink} strokeWidth={5} strokeDasharray={config.divider === 'membrane' ? '8 5' : undefined}/> : null}
		{state.particles.map(p => {
			const k = config.kinds.find(a => a.id === p.kind)!, x = origin.x + p.x * sx, y = origin.y + p.y * sy, r = p.radius * Math.min(sx, sy);
			return k.shape === 'hexagon' ? <polygon key={p.id} points={Array.from({length: 6}, (_, j) => `${x + r * Math.cos(j * Math.PI / 3)},${y + r * Math.sin(j * Math.PI / 3)}`).join(' ')} fill={k.color ?? C.amber}/> : <circle key={p.id} cx={x} cy={y} r={r} fill={k.color ?? C.blue}/>;
		})}
		{showCounters && arrow > 0 ? <g><line x1={550 - sign * arrow / 2} y1={615} x2={550 + sign * arrow / 2} y2={615} stroke={C.teal} strokeWidth={5}/><path d={`M${550 + sign * arrow / 2 - sign * 13},604 L${550 + sign * arrow / 2},615 L${550 + sign * arrow / 2 - sign * 13},626`} fill="none" stroke={C.teal} strokeWidth={5}/></g> : null}
		{showCounters ? <><Text x={270} y={613} anchor="middle" size={27}>Left: {state.counts[kind].left}</Text><Text x={830} y={613} anchor="middle" size={27}>Right: {state.counts[kind].right}</Text></> : null}
		{showCounters ? <Text x={550} y={657} anchor="middle" size={25}>Overall in this interval: {net > 0 ? `→ ${net}` : net < 0 ? `← ${-net}` : 'no net crossing'}</Text> : null}
		{showCounters && showTotals ? <Text x={550} y={699} anchor="middle" size={24} fill={C.muted}>Crossings since the start: → {totals.right}, ← {totals.left}. Overall change: {Math.abs(totalNet)}{totalNet ? ` to the ${totalNet > 0 ? 'right' : 'left'}` : ''}.</Text> : null}
		<Text x={550} y={739} anchor="middle" size={23} fill={C.muted}>{config.kinds.map(k => `${k.label}: ${config.divider === 'none' || k.passes ? 'can cross' : 'blocked'}`).join('   ·   ')}</Text>
		{showAuthorNotes ? <Text x={550} y={772} anchor="middle" size={20} fill={C.muted}>Illustrative model; window {elapsedWindowSteps} steps. No target counts are imposed.</Text> : null}
	</svg>;
};
