// VesselsDiagram (bio11m2Vessels) — xylem and phloem in longitudinal section.
//
// xylem   A xylem vessel on a stone plinth: dead, empty cells joined end to end
//         with their end walls gone (only stubs remain), walls thickened with
//         rings of lignin. Water (blue) streams straight up the open pipe.
// phloem  A phloem sieve tube: living sieve-tube cells (thin cytoplasm lining,
//         no nucleus) joined by perforated sieve plates, each with a companion
//         cell alongside (nucleus, many mitochondria). Sugar (orange) flows
//         along the tube; at `reverse` the flow turns round, because phloem can
//         carry sap either way.
// both    The two side by side, with their headings.
// Tags point at named parts on their beats. All text from props. Hold: water
// and sugar keep flowing; mitochondria glint.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idlePulse} from '../../diorama';
import {Arrow, COL, GLOSS, GlossDefs, H, Notes, Tag, Title, W, clamp, fadeAt, popAt, type Note, type Tone} from './shared';

type Anchor = 'lignin' | 'end' | 'hollow' | 'water' | 'sieve' | 'plate' | 'companion' | 'sugar';
export type VesselsProps = {
	mode?: 'xylem' | 'phloem' | 'both';
	title?: string;
	at?: number;
	flow?: number;
	reverse?: number;
	headings?: {xylem: string; phloem: string; at: number};
	tags?: {text: string; at: number; anchor: Anchor; side?: 'left' | 'right'; dy?: number; tone?: Tone}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2ves';

const Xylem = ({x, y0, y1, w, frame, flowOn}: {x: number; y0: number; y1: number; w: number; frame: number; flowOn: number}) => {
	const n = 4;
	const seg = (y1 - y0) / n;
	return (
		<g>
			<rect x={x - w / 2} y={y0} width={w} height={y1 - y0} fill="#fbf4e8" />
			{flowOn > 0 && Array.from({length: 14}, (_, k) => {
				const t = ((frame * 0.01 + k / 14) % 1);
				return <circle key={k} cx={x + Math.sin(k * 2.3) * w * 0.25} cy={y1 - t * (y1 - y0)} r={5} fill={`url(#${ID}-ball-water)`} opacity={flowOn * Math.min(1, Math.sin(t * Math.PI) * 3)} />;
			})}
			{[-1, 1].map((s) => (
				<g key={s}>
					<rect x={s < 0 ? x - w / 2 - 8 : x + w / 2} y={y0} width={8} height={y1 - y0} fill={COL.xylem} />
					{Array.from({length: Math.floor((y1 - y0) / 14)}, (_, k) => (
						<rect key={k} x={s < 0 ? x - w / 2 - 2 : x + w / 2 - 6} y={y0 + 6 + k * 14} width={8} height={6} rx={2} fill={COL.lignin} />
					))}
				</g>
			))}
			{Array.from({length: n - 1}, (_, k) => {
				const yy = y0 + seg * (k + 1);
				return (
					<g key={k}>
						<rect x={x - w / 2} y={yy - 3} width={10} height={6} rx={2} fill={COL.xylem} />
						<rect x={x + w / 2 - 10} y={yy - 3} width={10} height={6} rx={2} fill={COL.xylem} />
					</g>
				);
			})}
		</g>
	);
};

const Phloem = ({x, y0, y1, w, frame, flowOn, dir}: {x: number; y0: number; y1: number; w: number; frame: number; flowOn: number; dir: number}) => {
	const n = 3;
	const seg = (y1 - y0) / n;
	const cw = w * 0.5;
	const cx = x + w / 2 + 6 + cw / 2;
	return (
		<g>
			{/* sieve tube cells */}
			<rect x={x - w / 2} y={y0} width={w} height={y1 - y0} fill="#fdf1dc" stroke="#b8894a" strokeWidth={3} />
			{[-1, 1].map((s) => <rect key={s} x={s < 0 ? x - w / 2 + 2 : x + w / 2 - 8} y={y0} width={6} height={y1 - y0} fill="#f3d6a4" opacity={0.9} />)}
			{Array.from({length: n - 1}, (_, k) => {
				const yy = y0 + seg * (k + 1);
				return (
					<g key={k}>
						<line x1={x - w / 2} x2={x + w / 2} y1={yy} y2={yy} stroke="#b8894a" strokeWidth={5} strokeDasharray="7 6" />
					</g>
				);
			})}
			{flowOn > 0 && Array.from({length: 12}, (_, k) => {
				const t = ((frame * 0.008 + k / 12) % 1);
				const yy = dir < 0 ? y0 + t * (y1 - y0) : y1 - t * (y1 - y0);
				return <circle key={k} cx={x + Math.sin(k * 1.9) * w * 0.22} cy={yy} r={5} fill={`url(#${ID}-ball-sugar)`} opacity={flowOn * Math.min(1, Math.sin(t * Math.PI) * 3)} />;
			})}
			{/* companion cells */}
			{Array.from({length: n}, (_, k) => {
				const cy0 = y0 + seg * k + 6;
				return (
					<g key={k}>
						<rect x={cx - cw / 2} y={cy0} width={cw} height={seg - 12} rx={8} fill="#f0dcc8" stroke="#a8784a" strokeWidth={2} />
						<ellipse cx={cx} cy={cy0 + seg * 0.32} rx={cw * 0.28} ry={10} fill={`url(#${ID}-ball-nucleus)`} />
						{[0, 1, 2].map((m) => (
							<ellipse key={m} cx={cx + (m % 2 ? 6 : -6)} cy={cy0 + seg * 0.55 + m * 12} rx={7} ry={3.5} fill={`url(#${ID}-ball-mito)`} opacity={0.75 + 0.25 * idlePulse(frame + m * 11 + k * 7, 40)} />
						))}
					</g>
				);
			})}
		</g>
	);
};

export const VesselsDiagram = ({mode = 'xylem', title, at = 0, flow = 40, reverse, headings, tags = [], notes = [], delay = 62}: VesselsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 56 : 16;
	const footH = notes.length * 25;
	const y0 = top + (headings ? 40 : 10);
	const y1 = H - 70 - footH;
	const on = Math.min(1, popAt(frame, fps, at) * 1.3);
	const flowOn = fadeAt(frame, flow, 20);
	const dir = reverse !== undefined && frame >= reverse ? 1 : -1;
	const turn = reverse !== undefined ? interpolate(frame, [reverse - 12, reverse, reverse + 12], [1, 0, 1], clamp) : 1;

	const xX = mode === 'both' ? 210 : W / 2;
	const pX = mode === 'both' ? 500 : W / 2 - 30;
	const xw = mode === 'both' ? 90 : 120;
	const pw = mode === 'both' ? 80 : 110;
	const anchors: Record<Anchor, {x: number; y: number}> = {
		lignin: {x: xX - xw / 2 - 4, y: y0 + 60},
		end: {x: xX + xw / 2 - 6, y: y0 + (y1 - y0) / 2},
		hollow: {x: xX, y: y0 + (y1 - y0) * 0.72},
		water: {x: xX, y: y0 + 30},
		sieve: {x: pX - pw / 2 + 4, y: y0 + (y1 - y0) * 0.2},
		plate: {x: pX, y: y0 + (y1 - y0) / 3},
		companion: {x: pX + pw / 2 + 6 + pw * 0.25, y: y0 + (y1 - y0) * 0.55},
		sugar: {x: pX, y: y0 + (y1 - y0) * 0.8},
	};
	const isX = (a: Anchor) => ['lignin', 'end', 'hollow', 'water'].includes(a);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Xylem and phloem'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={on}>
				{(mode === 'xylem' || mode === 'both') && (
					<g>
						<DioramaPlinth id={`${ID}x`} cx={xX} cy={y1 + 8} rx={mode === 'both' ? 110 : 140} />
						<Xylem x={xX} y0={y0} y1={y1} w={xw} frame={frame} flowOn={flowOn} />
						{flowOn > 0 && <Arrow x1={xX + xw / 2 + 34} y1={y1 - 40} x2={xX + xw / 2 + 34} y2={y0 + 40} color={COL.water} width={4} head={13} opacity={flowOn} />}
					</g>
				)}
				{(mode === 'phloem' || mode === 'both') && (
					<g>
						<DioramaPlinth id={`${ID}p`} cx={pX + 30} cy={y1 + 8} rx={mode === 'both' ? 110 : 140} />
						<Phloem x={pX} y0={y0} y1={y1} w={pw} frame={frame} flowOn={flowOn} dir={dir} />
						{flowOn > 0 && (
							<g opacity={flowOn * turn}>
								<Arrow x1={pX - pw / 2 - 30} y1={dir < 0 ? y0 + 40 : y1 - 40} x2={pX - pw / 2 - 30} y2={dir < 0 ? y1 - 40 : y0 + 40} color={COL.sugar} width={4} head={13} />
							</g>
						)}
					</g>
				)}
				{headings && (
					<g opacity={fadeAt(frame, headings.at)}>
						{(mode === 'xylem' || mode === 'both') && <text x={xX} y={top + 16} textAnchor="middle" fill="#2a6fa8" fontSize={21} fontWeight={800}>{headings.xylem}</text>}
						{(mode === 'phloem' || mode === 'both') && <text x={pX + 30} y={top + 16} textAnchor="middle" fill="#b0621a" fontSize={21} fontWeight={800}>{headings.phloem}</text>}
					</g>
				)}
			</g>
			{tags.map((t, i) => {
				const a = anchors[t.anchor];
				const right = t.side ? t.side === 'right' : mode === 'both' ? !isX(t.anchor) : a.x >= W / 2 - 40;
				const tx = mode === 'both'
					? (isX(t.anchor) ? (right ? 390 : 90) : (right ? 640 : 360))
					: (right ? 600 : 150);
				return <Tag key={i} frame={frame} fps={fps} at={t.at} x={tx} y={a.y + (t.dy ?? 0)} text={t.text} tone={t.tone} accent={theme.accent} tx={a.x} ty={a.y} size={18} />;
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
