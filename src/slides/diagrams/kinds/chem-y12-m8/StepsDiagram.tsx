// StepsDiagram — an ordered chain of stages in the diorama look (Chem Y12 M8).
//
// Two layouts, both config-driven from the lesson JSON:
//   • 'row'    — stone plinths left to right, each carrying a coded object (lab
//                apparatus, trial participants, an approval stamp) or a count
//                of glossy molecule tokens (e.g. the Winkler chain 1 O₂ → 2 MnO₂
//                → 2 I₂ → 4 S₂O₃²⁻). A marker travels along the chain.
//   • 'stairs' — a calculation pathway as stone steps walked down one at a time,
//                each step's face carrying its formula ("walk the moles back").
// One stage may be `highlight`ed in amber (the trap or the answer), and a
// closing `note` card states the takeaway. Stages appear on `beat`s (frames
// after `delay`) timed to the voiceover; after the last beat the chain holds
// with idle life (the marker bobs, the highlight breathes).

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, STONE, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {Arrow, Ball, GlossDefs, clamp, ease, pop, ramp, shade, textW} from './shared';
import {StepIcon, type StepIconName} from './steps-icons';

export type StepToken = {text: string; count: number; color: string; pair?: boolean};
export type StepStage = {
	label: string;
	sub?: string;
	formula?: string;
	icon?: StepIconName;
	iconCount?: number;
	tokens?: StepToken;
	/** Small label over the arrow INTO this stage (e.g. "+ I⁻"). */
	via?: string;
	beat: number;
};
export type StepsNote = {text: string; sub?: string; beat: number; amber?: boolean};
export type StepsProps = {
	delay?: number;
	layout?: 'row' | 'stairs';
	title?: string;
	stages?: StepStage[];
	highlight?: number;
	highlightBeat?: number;
	/** Short amber tag drawn on the highlighted stage (e.g. "precipitate's M"). */
	highlightTag?: string;
	note?: StepsNote;
};

const ID = 'c12m8steps';
const W = 760;
const H = 530;

export const StepsDiagram = ({
	delay = 62,
	layout = 'row',
	title,
	stages = [],
	highlight,
	highlightBeat,
	highlightTag,
	note,
}: StepsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = Math.max(1, stages.length);
	const hlOn = highlight !== undefined ? ramp(frame, highlightBeat ?? stages[highlight]?.beat ?? 0, 14) : 0;
	const lastBeat = Math.max(...stages.map((s) => s.beat), 0);
	const tokenColors = Object.fromEntries(stages.filter((s) => s.tokens).map((s, i) => [`t${i}`, s.tokens!.color]));
	const tokenNames = new Map(stages.filter((s) => s.tokens).map((s, i) => [s, `t${i}`] as const));

	// Traveller: sits on the latest revealed stage, gliding between stages.
	const travelT = (() => {
		let pos = 0;
		stages.forEach((s, i) => {
			if (i === 0) return;
			pos += ease(interpolate(frame, [s.beat - 4, s.beat + 18], [0, 1], clamp));
		});
		return pos;
	})();
	const titleH = title ? 50 : 0;

	const noteCard = (y: number) => {
		if (!note) return null;
		const o = ramp(frame, note.beat, 16);
		if (o <= 0) return null;
		const amber = note.amber ?? false;
		const size = 22;
		const w = Math.min(W - 40, Math.max(textW(note.text, size), note.sub ? textW(note.sub, 16) : 0) + 56);
		const h = note.sub ? 70 : 48;
		const pulse = amber ? idlePulse(frame) : 0;
		return (
			<g opacity={o} transform={`translate(0,${(1 - o) * 10})`}>
				<rect x={W / 2 - w / 2} y={y} width={w} height={h} rx={14} fill={amber ? '#fff7e8' : '#ffffff'} stroke={amber ? TOK.amber : theme.accent} strokeWidth={2.5 + pulse * 1.5} />
				<text x={W / 2} y={y + 32} textAnchor="middle" fill={amber ? TOK.amberInk : theme.accent} fontSize={size} fontWeight={800}>
					{note.text}
				</text>
				{note.sub && (
					<text x={W / 2} y={y + 56} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={600}>
						{note.sub}
					</text>
				)}
			</g>
		);
	};

	if (layout === 'stairs') {
		// ── Stone steps walked down one at a time ───────────────────────────
		const faceW = 420, faceH = 60, topH = 14;
		const x0 = 26, y0 = titleH + 18;
		const avail = (note ? 404 : 490) - y0;
		const dy = Math.min(84, (avail - faceH - topH) / Math.max(1, n - 1));
		const dx = (W - 2 * x0 - faceW) / Math.max(1, n - 1);
		const stepPos = (i: number) => ({x: x0 + i * dx, y: y0 + topH + i * dy});
		const ti = Math.min(n - 1, travelT);
		const k = Math.floor(ti), f = ti - k;
		const a = stepPos(k), b = stepPos(Math.min(n - 1, k + 1));
		const ballX = a.x + faceW - 30 + (b.x - a.x) * f;
		const ballY = a.y - 16 + (b.y - a.y) * f - Math.sin(f * Math.PI) * 34 + (f === 0 ? idleBob(frame, 3, 1.6) : 0);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? stages.map((s) => s.label).join(', then ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={{marker: theme.accent}} />
				{title && (
					<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={ramp(frame, 0)}>
						{title}
					</text>
				)}
				{stages.map((s, i) => {
					const o = pop(frame, fps, s.beat);
					if (o <= 0.001) return null;
					const {x, y} = stepPos(i);
					const isHl = highlight === i;
					const hl = isHl ? hlOn : 0;
					const stroke = hl > 0 ? TOK.amber : STONE.sideDark;
					return (
						<g key={i} opacity={Math.min(1, o)} transform={`translate(0,${(1 - Math.min(1, o)) * 16})`}>
							{/* top face */}
							<path d={`M ${x} ${y} L ${x + 14} ${y - topH} L ${x + faceW + 14} ${y - topH} L ${x + faceW} ${y} Z`} fill={STONE.topLight} stroke={STONE.topEdge} strokeWidth={1.5} />
							{/* side face */}
							<path d={`M ${x + faceW} ${y} L ${x + faceW + 14} ${y - topH} L ${x + faceW + 14} ${y + faceH - topH} L ${x + faceW} ${y + faceH} Z`} fill={STONE.sideDark} />
							{/* front face */}
							<rect x={x} y={y} width={faceW} height={faceH} fill={hl > 0 ? '#fff4df' : STONE.sideLight} stroke={stroke} strokeWidth={hl > 0 ? 2.5 + idlePulse(frame) * 2 * hl : 1.5} />
							<circle cx={x + 26} cy={y + faceH / 2} r={15} fill={hl > 0.5 ? TOK.amber : theme.accent} />
							<text x={x + 26} y={y + faceH / 2 + 6} textAnchor="middle" fill="#ffffff" fontSize={17} fontWeight={800}>
								{i + 1}
							</text>
							<text x={x + 52} y={y + 24} fill={hl > 0.5 ? TOK.amberInk : TOK.inkDim} fontSize={15} fontWeight={700}>
								{s.label}
							</text>
							<text x={x + 52} y={y + 50} fill={TOK.ink} fontSize={22} fontWeight={800}>
								{s.formula ?? ''}
							</text>
							{isHl && highlightTag && (
								<text x={x + faceW - 12} y={y + 24} textAnchor="end" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={hl}>
									{highlightTag}
								</text>
							)}
						</g>
					);
				})}
				{/* walker */}
				<g opacity={ramp(frame, stages[0]?.beat ?? 0, 12)}>
					<ellipse cx={ballX + 3} cy={ballY + 16} rx={13} ry={4} fill="rgba(40,36,30,0.2)" />
					<Ball id={ID} name="marker" color={theme.accent} x={ballX} y={ballY} r={13} />
				</g>
				{noteCard(Math.min(438, y0 + (n - 1) * dy + faceH + 24))}
			</svg>
		);
	}

	// ── Row of plinths ────────────────────────────────────────────────────
	const margin = 18;
	const pitch = (W - 2 * margin) / n;
	const rx = Math.min(78, pitch / 2 - 8);
	const plinthY = titleH + (note ? 292 : 312);
	const cxOf = (i: number) => margin + pitch * (i + 0.5);
	const iconScale = Math.min(1.5, rx / 47);
	const ti = Math.min(n - 1, travelT);
	const k = Math.floor(ti), f = ti - k;
	const markX = cxOf(k) + (cxOf(Math.min(n - 1, k + 1)) - cxOf(k)) * f;
	const markY = plinthY + rx * 0.34 + rx * 0.2 + 16;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? stages.map((s) => s.label).join(', then ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={[]} />
			<GlossDefs id={ID} colors={{...tokenColors, marker: theme.accent}} />
			{title && (
				<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={ramp(frame, 0)}>
					{title}
				</text>
			)}
			{stages.map((s, i) => {
				const o = pop(frame, fps, s.beat);
				const on = Math.min(1, o);
				const cx = cxOf(i);
				const isHl = highlight === i;
				const hl = isHl ? hlOn : 0;
				const tokenName = tokenNames.get(s);
				const arrowP = ease(interpolate(frame, [s.beat - 6, s.beat + 14], [0, 1], clamp));
				const labelY = plinthY + rx * 0.34 + rx * 0.2 + 44;
				return (
					<g key={i}>
						{i > 0 && (
							<g>
								<Arrow x1={cxOf(i - 1) + rx * 0.7} y1={plinthY - 6} x2={cx - rx * 0.7} y2={plinthY - 6} color={TOK.inkMute} width={3} head={10} progress={arrowP} />
								{s.via && (
									<text x={(cxOf(i - 1) + cx) / 2} y={plinthY - 20} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={arrowP}>
										{s.via}
									</text>
								)}
							</g>
						)}
						<g opacity={on} transform={`translate(${cx},${plinthY}) scale(${0.7 + 0.3 * on}) translate(${-cx},${-plinthY})`}>
							<DioramaPlinth id={`${ID}-${i}`} cx={cx} cy={plinthY} rx={rx}>
								{hl > 0 && <ellipse cx={cx} cy={plinthY} rx={rx * 0.95} ry={rx * 0.32} fill="none" stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 2 * hl} opacity={hl} />}
								{s.icon && (
									<g transform={`translate(${cx},${plinthY + 4 + idleBob(frame, i, 0.8) * ramp(frame, s.beat + 20, 20)}) scale(${iconScale})`}>
										<StepIcon name={s.icon} frame={frame} count={s.iconCount} accent={theme.accent} />
									</g>
								)}
								{s.tokens && tokenName &&
									plinthSlots(cx, plinthY - 6, rx * 0.95, s.tokens.count).map((p, j) => {
										const tp = pop(frame, fps, s.beat + 6 + j * 5);
										const r = Math.min(17, rx * 0.26);
										const bob = idleBob(frame, j + i * 7, 1.6);
										return s.tokens!.pair ? (
											<g key={j} transform={`translate(${p.x},${p.y - r + bob}) scale(${tp})`}>
												<Ball id={ID} name={tokenName} color={s.tokens!.color} x={-r * 0.55} y={0} r={r * 0.8} />
												<Ball id={ID} name={tokenName} color={s.tokens!.color} x={r * 0.55} y={0} r={r * 0.8} />
											</g>
										) : (
											<Ball key={j} id={ID} name={tokenName} color={s.tokens!.color} x={p.x} y={p.y - r + bob} r={r} scale={tp} />
										);
									})}
							</DioramaPlinth>
						</g>
						<g opacity={ramp(frame, s.beat + 4, 12)}>
							<text x={cx} y={labelY} textAnchor="middle" fill={hl > 0.5 ? TOK.amberInk : TOK.ink} fontSize={s.tokens ? 22 : 19} fontWeight={800}>
								{s.tokens ? `${s.tokens.count} ${s.tokens.text}` : s.label}
							</text>
							{(s.tokens ? s.label : s.sub) && (
								<text x={cx} y={labelY + 22} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={600}>
									{s.tokens ? s.label : s.sub}
								</text>
							)}
							{s.tokens && s.sub && (
								<text x={cx} y={labelY + 41} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={600}>
									{s.sub}
								</text>
							)}
						</g>
					</g>
				);
			})}
			{/* travelling marker under the plinths */}
			<g opacity={ramp(frame, stages[0]?.beat ?? 0, 12) * (1 - ramp(frame, lastBeat + 40, 20) * 0.35)}>
				<path d={`M ${markX - 9} ${markY + 8} L ${markX + 9} ${markY + 8} L ${markX} ${markY - 4} Z`} fill={shade(theme.accent, 0.1)} transform={`translate(0,${idleBob(frame, 2, 1.4)})`} />
			</g>
			{noteCard(note?.sub ? 440 : 456)}
		</svg>
	);
};
