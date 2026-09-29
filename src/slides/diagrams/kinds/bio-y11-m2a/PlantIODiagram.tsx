// PlantIODiagram (bio11m2PlantIO) — what a whole plant takes in and gives out.
//
// A potted plant (glass pot, so the roots show) stands on a stone plinth.
// `flows` are labelled streams of glossy tokens (CO₂, O₂, water, vapour,
// minerals, light) moving into or out of a leaf, the roots, or up the stem,
// each switching on at its beat. `phases` switch the sky between day and night
// (a flow tagged with a sky only shows under that sky), so the same leaf can
// swap from "CO₂ in, O₂ out" to "O₂ in, CO₂ out". `chips` build a list in the
// right-hand column (e.g. the four uses of water). All text from props.
// Hold: tokens keep streaming, the plant sways, the sun turns.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth} from '../../diorama';
import {Arrow, COL, GLOSS, GlossDefs, H, Lines, Moon, Notes, PlantArt, Sun, Title, Token, W, clamp, fadeAt, plantGeom, popAt, wrap, type Note, type Tone, toneColor} from './shared';

type TokenKind = 'co2' | 'o2' | 'water' | 'vapour' | 'mineral' | 'light';
export type Flow = {
	at: number;
	until?: number;
	where: 'leaf' | 'root' | 'stem';
	dir: 'in' | 'out';
	token: TokenKind;
	label?: string;
	sky?: 'day' | 'night';
	/** leaf: 0 upper left, 1 right, 2 lower left. root: 0 left, 1 right. */
	slot?: number;
};
export type PlantIOProps = {
	title?: string;
	at?: number;
	phases?: {at: number; sky: 'day' | 'night'; label?: string}[];
	flows?: Flow[];
	chips?: {text: string; at: number; tone?: Tone}[];
	chipsTitle?: {text: string; at: number};
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2pio';
const TOKEN_LABEL: Record<TokenKind, string> = {co2: 'CO₂', o2: 'O₂', water: 'H₂O', vapour: 'H₂O', mineral: 'ion', light: ''};
const TOKEN_COL: Record<TokenKind, keyof typeof COL> = {co2: 'co2', o2: 'o2', water: 'water', vapour: 'vapour', mineral: 'mineral', light: 'sun'};

export const PlantIODiagram = ({title, at = 0, phases = [{at: 0, sky: 'day'}], flows = [], chips = [], chipsTitle, notes = [], delay = 62}: PlantIOProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const top = title ? 50 : 8;
	const hasChips = chips.length > 0;
	const cx = hasChips ? 250 : 330;
	const groundY = top + 268;
	const G = plantGeom(cx, groundY, 212);

	// current sky + blend
	let sky: 'day' | 'night' = phases[0]?.sky ?? 'day';
	let lastAt = -1e9;
	for (const p of phases) if (frame >= p.at) {
		sky = p.sky;
		lastAt = p.at;
	}
	const dayT = phases.reduce((v, p) => {
		const t = interpolate(frame, [p.at, p.at + 24], [0, 1], clamp);
		return v + ((p.sky === 'day' ? 1 : 0) - v) * t;
	}, phases[0]?.sky === 'night' ? 0 : 1);
	const skyLabel = [...phases].reverse().find((p) => frame >= p.at)?.label;

	const leafPts = [0, 1, 2].map((i) => {
		const L = G.leaves[i];
		const tip = {x: L.x + L.side * 76, y: L.y - 14};
		const out = {x: L.x + L.side * 178, y: L.y - 52};
		return {tip, out, side: L.side};
	});
	const rootPts = [-1, 1].map((s) => ({tip: {x: cx + s * 26, y: G.potTop + 52}, out: {x: cx + s * 140, y: G.potTop + 52}, side: s}));

	const visible = (f: Flow) => frame >= f.at && (f.until === undefined || frame < f.until) && (!f.sky || f.sky === sky);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Plant inputs and outputs'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<rect x={0} y={0} width={W} height={H} rx={18} fill="#1c2b4a" opacity={(1 - dayT) * 0.16} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<Sun x={hasChips ? 430 : 640} y={top + 46} r={22} frame={frame} opacity={dayT * fadeAt(frame, at)} />
			<Moon x={hasChips ? 430 : 640} y={top + 46} r={20} opacity={(1 - dayT) * fadeAt(frame, at)} />
			{skyLabel && (
				<text x={hasChips ? 430 : 640} y={top + 96} textAnchor="middle" fill={dayT > 0.5 ? '#b0801a' : '#3a4a7a'} fontSize={17} fontWeight={800} opacity={fadeAt(frame, lastAt)}>{skyLabel}</text>
			)}
			<g opacity={Math.min(1, popAt(frame, fps, at) * 1.3)}>
				<DioramaPlinth id={`${ID}p`} cx={cx} cy={G.potBottom + 8} rx={150} />
				<PlantArt id={ID} cx={cx} groundY={groundY} h={212} frame={frame} />
			</g>
			{flows.map((f, i) => {
				if (!visible(f)) return null;
				const o = Math.min(fadeAt(frame, Math.max(f.at, lastAt), 14), f.until !== undefined ? 1 - fadeAt(frame, f.until - 10, 10) : 1);
				if (f.where === 'stem') {
					return (
						<g key={i} opacity={o}>
							{Array.from({length: 5}, (_, k) => {
								const t = ((frame * 0.012 + k / 5) % 1);
								const y = G.potTop + 40 - t * (G.potTop + 40 - G.top - 20);
								return <circle key={k} cx={cx + 0.5} cy={f.dir === 'in' ? y : G.potTop + 40 - (y - G.top - 20)} r={4} fill={`url(#${ID}-ball-water)`} />;
							})}
							{f.label && <Lines x={cx + 18} y={G.top + 150} lines={wrap(f.label, 14)} size={18} color="#2a6fa8" anchor="start" />}
						</g>
					);
				}
				const P = f.where === 'leaf' ? leafPts[f.slot ?? 0] : rootPts[f.slot ?? 0];
				const a = f.dir === 'in' ? P.out : P.tip;
				const b = f.dir === 'in' ? P.tip : P.out;
				const col = TOKEN_COL[f.token];
				return (
					<g key={i} opacity={o}>
						{f.token === 'light' ? (
							<Arrow x1={a.x} y1={a.y} x2={b.x} y2={b.y} color="#e0a82a" width={3} head={10} dash="7 6" />
						) : (
							<g>
								<line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={toneColor('ink', '')} strokeOpacity={0.18} strokeWidth={2} strokeDasharray="4 5" />
								<Arrow x1={a.x + (b.x - a.x) * 0.6} y1={a.y + (b.y - a.y) * 0.6} x2={b.x} y2={b.y} color={TOK.inkMute} width={2} head={9} />
								{[0, 1].map((k) => {
									const t = ((frame * 0.011 + k * 0.5 + i * 0.13) % 1);
									return <Token key={k} id={ID} name={col} x={a.x + (b.x - a.x) * t} y={a.y + (b.y - a.y) * t} r={21} label={TOKEN_LABEL[f.token]} size={13} opacity={Math.min(1, Math.sin(t * Math.PI) * 2.2)} />;
								})}
							</g>
						)}
						{f.label && (
							<Lines
								x={P.out.x + (P.side < 0 ? 0 : 0)}
								y={f.where === 'leaf' ? P.out.y - 28 : P.out.y + 40}
								lines={wrap(f.label, 13)}
								size={20}
								color={f.token === 'o2' ? '#b3261e' : f.token === 'co2' ? TOK.ink : f.token === 'mineral' ? '#6a3fb0' : f.token === 'light' ? '#a0701a' : '#2a6fa8'}
							/>
						)}
					</g>
				);
			})}
			{chipsTitle && (
				<text x={500} y={top + 136} fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, chipsTitle.at)}>{chipsTitle.text}</text>
			)}
			{chips.map((c, i) => {
				const p = popAt(frame, fps, c.at);
				if (p <= 0) return null;
				const lines = wrap(c.text, 24);
				const y = top + 170 + i * 66;
				const col = toneColor(c.tone, theme.accent);
				return (
					<g key={i} opacity={Math.min(1, p * 1.4)} transform={`translate(${(1 - Math.min(1, p)) * 20}, 0)`}>
						<rect x={492} y={y - 24} width={256} height={lines.length > 1 ? 56 : 36} rx={12} fill={c.tone === 'amber' ? '#fff6e6' : '#ffffff'} stroke={col} strokeWidth={2} />
						<Lines x={506} y={y} lines={lines} size={17} color={col} anchor="start" />
					</g>
				);
			})}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};
