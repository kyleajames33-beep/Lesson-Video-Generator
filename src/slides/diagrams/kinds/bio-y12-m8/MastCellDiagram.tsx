// MastCellDiagram — the two-stage allergy trap on stone plinths. Stage 1
// (sensitisation): the allergen reaches a B cell, which makes IgE that docks
// on the mast cell, with no symptoms. Stage 2 (re-exposure): the allergen
// bridges two neighbouring IgE (cross-linking), which is the trigger: the mast
// cell's granules empty and histamine pours out, then its effects are listed.
// Degranulation only starts once a cross-link exists (the allergen touches two
// docked IgE), so the order on screen is the mechanism's order.
//
// Beats are frames after `delay`. Hold: histamine keeps drifting out and the
// cross-link glows.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, GlossDefs, Note, NoteLine, Pill, ease, fadeAt, hash01} from './shared';

export type MastCellProps = {
	stage1At: number;
	igeAt: number;
	dockAt: number;
	calmAt: number;
	stage2At: number;
	crossAt: number;
	degranAt: number;
	effects: {text: string; at: number}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8mast';
const W = 760;
const H = 530;
const M = {x: 400, y: 250, r: 82};
const B = {x: 128, y: 262};
const DOCK = [-150, -126, -102, -78, -54, -30].map((d) => (d * Math.PI) / 180);

const Y_ = ({x, y, a, s = 1, color}: {x: number; y: number; a: number; s?: number; color: string}) => (
	<g transform={`translate(${x} ${y}) rotate(${(a * 180) / Math.PI + 90}) scale(${s})`}>
		<path d="M 0 12 L 0 0 M 0 0 L -8 -11 M 0 0 L 8 -11" stroke={color} strokeWidth={4.5} strokeLinecap="round" fill="none" />
	</g>
);

const Allergen = ({x, y, r = 11, glow = 0}: {x: number; y: number; r?: number; glow?: number}) => (
	<g>
		{glow > 0 && <circle cx={x} cy={y} r={r * 2} fill={TOK.amber} opacity={0.3 * glow} />}
		<path
			d={Array.from({length: 16}, (_, k) => {
				const a = (k / 16) * Math.PI * 2;
				const rr = k % 2 === 0 ? r : r * 0.62;
				return `${k ? 'L' : 'M'} ${x + Math.cos(a) * rr} ${y + Math.sin(a) * rr}`;
			}).join(' ') + ' Z'}
			fill={COL.red}
			stroke="#8a2a22"
			strokeWidth={1}
		/>
	</g>
);

export const MastCellDiagram = ({stage1At, igeAt, dockAt, calmAt, stage2At, crossAt, degranAt, effects, notes = [], delay = 62}: MastCellProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const s1 = fadeAt(frame, stage1At, 14);
	const s2 = fadeAt(frame, stage2At, 14);

	// Stage-1 allergen: drifts to the B cell, then fades (processed).
	const a1 = ease(frame, stage1At, stage1At + 60);
	const a1Fade = 1 - fadeAt(frame, igeAt, 20);
	// IgE made by the B cell, travelling to dock sites.
	const dockT = (k: number) => ease(frame, igeAt + k * 18, dockAt + k * 12);
	// Stage-2 allergen: lands between dock 2 and dock 3 (the cross-link).
	const dockPos = (k: number) => ({x: M.x + Math.cos(DOCK[k]) * (M.r + 12), y: M.y + Math.sin(DOCK[k]) * (M.r + 12)});
	const midA = (DOCK[2] + DOCK[3]) / 2;
	const linkPos = {x: M.x + Math.cos(midA) * (M.r + 34), y: M.y + Math.sin(midA) * (M.r + 34)};
	const a2 = ease(frame, stage2At + 20, crossAt);
	const a2x = 520 + (linkPos.x - 520) * a2;
	const a2y = 70 + (linkPos.y - 70) * a2;
	const crossed = frame >= crossAt;
	const burst = crossed ? ease(frame, Math.max(degranAt, crossAt + 10), Math.max(degranAt, crossAt + 10) + 50) : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Allergy: sensitisation loads mast cells with IgE; re-exposure cross-links IgE and releases histamine" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{mast: '#e8c9a8', b: '#9fc3e8', gran: COL.violet}} />

			{/* stage banner */}
			<g>
				<g opacity={s1 * (1 - s2)}>
					<Pill x={W / 2} y={28} text="Stage 1: sensitisation (first exposure)" color={theme.accent} size={18} />
				</g>
				<g opacity={s2}>
					<Pill x={W / 2} y={28} text="Stage 2: re-exposure" color={COL.red} size={18} />
				</g>
			</g>

			{/* B cell */}
			<g opacity={s1}>
				<DioramaPlinth id={`${ID}b`} cx={B.x} cy={B.y + 30} rx={74} />
				<circle cx={B.x} cy={B.y + idleBob(frame, 1, 1.2)} r={34} fill={`url(#${ID}-g-b)`} stroke="rgba(0,0,0,0.25)" />
				<text x={B.x} y={B.y + 5} textAnchor="middle" fill="#1f4a73" fontSize={15} fontWeight={800}>B cell</text>
				<text x={B.x} y={B.y + 92} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={fadeAt(frame, igeAt, 12)}>helper T cells push</text>
				<text x={B.x} y={B.y + 110} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={fadeAt(frame, igeAt, 12)}>it to make IgE</text>
				{a1Fade > 0 && <g opacity={a1Fade}><Allergen x={40 + (B.x - 44 - 40) * a1} y={120 + (B.y - 30 - 120) * a1} /></g>}
			</g>

			{/* Mast cell */}
			<g opacity={s1}>
				<DioramaPlinth id={`${ID}m`} cx={M.x} cy={M.y + M.r - 10} rx={130} />
				<circle cx={M.x} cy={M.y} r={M.r} fill={`url(#${ID}-g-mast)`} stroke="#b89572" strokeWidth={2} />
				<text x={M.x} y={M.y + M.r + 70} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>mast cell</text>
				{/* granules: inside until degranulation, then out as histamine */}
				{Array.from({length: 16}, (_, k) => {
					const a = hash01(k * 3.3) * Math.PI * 2;
					const rr = 14 + hash01(k * 7.1) * (M.r - 30);
					const x0 = M.x + Math.cos(a) * rr, y0 = M.y + Math.sin(a) * rr;
					const drift = burst > 0 ? (((frame - degranAt + k * 13) % 120) + 120) % 120 / 120 : 0;
					const out = burst * (0.35 + drift * 0.65);
					const x = x0 + (210 + hash01(k) * 60) * out;
					const y = y0 + (Math.sin(k) * 60) * out - 20 * out;
					const o = burst > 0 ? 1 - Math.max(0, drift - 0.75) / 0.25 : 1;
					return <circle key={k} cx={x + idleBob(frame, k, 1)} cy={y + idleBob(frame, k + 8, 1)} r={6} fill={`url(#${ID}-g-gran)`} opacity={o} />;
				})}
				{burst > 0 && <text x={M.x + 200} y={M.y - 96} textAnchor="middle" fill={COL.violet} fontSize={17} fontWeight={800} opacity={burst}>histamine</text>}
			</g>

			{/* IgE travelling from the B cell and docking */}
			{DOCK.map((a, k) => {
				const t = dockT(k);
				if (t <= 0) return null;
				const d = dockPos(k);
				const x = B.x + 40 + (d.x - B.x - 40) * t;
				const y = B.y - 20 + (d.y - B.y + 20) * t - Math.sin(t * Math.PI) * 50;
				return <Y_ key={k} x={x} y={y} a={a} color={theme.accent} />;
			})}
			<text x={M.x - M.r - 36} y={M.y - M.r - 10} textAnchor="end" fill={theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, dockAt, 12)}>IgE coats the mast cell</text>
			<text x={M.x} y={M.y + M.r + 94} textAnchor="middle" fill={COL.green} fontSize={17} fontWeight={800} opacity={fadeAt(frame, calmAt, 12) * (1 - s2)}>no symptoms yet: now sensitised</text>

			{/* Stage-2 allergen and cross-link */}
			{s2 > 0 && (
				<g>
					<Allergen x={a2x} y={a2y} r={13} glow={crossed ? 0.6 + 0.4 * idlePulse(frame, 50) : 0} />
					{crossed && (
						<g opacity={fadeAt(frame, crossAt, 10)}>
							<line x1={linkPos.x} y1={linkPos.y} x2={dockPos(2).x} y2={dockPos(2).y} stroke={TOK.amber} strokeWidth={3} />
							<line x1={linkPos.x} y1={linkPos.y} x2={dockPos(3).x} y2={dockPos(3).y} stroke={TOK.amber} strokeWidth={3} />
							<text x={linkPos.x - 30} y={linkPos.y - 26} textAnchor="end" fill={TOK.amberInk} fontSize={17} fontWeight={800}>cross-links two IgE</text>
						</g>
					)}
				</g>
			)}

			{/* effects */}
			{effects.map((e, k) => (
				<text key={k} x={k % 2 ? 560 : 220} y={456 + Math.floor(k / 2) * 28} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800} opacity={fadeAt(frame, e.at, 12)}>{e.text}</text>
			))}

			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 8 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
