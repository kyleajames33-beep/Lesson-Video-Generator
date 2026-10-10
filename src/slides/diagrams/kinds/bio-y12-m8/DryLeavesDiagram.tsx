// DryLeavesDiagram (bio12m8DryLeaves): three Australian plants, three
// permanent structures, three physical reasons they cut water loss.
//
//   eucalypt   a horizontal leaf and a vertical (edge-on) leaf under the
//              midday sun: the sun's rays hit the flat face of the horizontal
//              leaf but only the edge of the hanging one, so it absorbs less
//              heat. A thick waxy cuticle line wraps the leaf.
//   banksia    a lower-leaf section: a stoma sunk in a pit lined with hairs.
//              Water vapour molecules collect in the pit (humid pocket), so
//              the gradient to the dry air outside is smaller; fewer escape.
//   spinifex   a leaf cross-section that rolls inward on the beat, enclosing
//              the stomata on its inner surface; less surface faces dry air.
// Each panel ends with the scene's "name the feature, give the physical
// reason" pairing. Leaf sections are schematic.
//
// Beats are frames after `delay`. Hold: vapour dots drift, rays shimmer.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {COL, ease, fadeAt, popAt} from './shared';

export type DryLeavesProps = {
	at?: {eucalypt?: number; banksia?: number; pits?: number; spinifex?: number; exam?: number};
	delay?: number;
};

const W = 760;
const H = 530;
const COLW = 236;
const GAP = (W - 3 * COLW) / 4;
const cx0 = (k: number) => GAP + k * (COLW + GAP);
const TOP = 18;
const BOX_H = 400;
const LEAF = '#6f9e57';
const LEAF_DARK = '#4f7d3c';
const WAX = '#d9c46a';
const SUN = '#f2b33d';
const VAPOUR = '#5f9dc8';

const hash01 = (n: number) => {
	const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
	return x - Math.floor(x);
};

export const DryLeavesDiagram = ({at = {}, delay = 62}: DryLeavesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const t = {
		eucalypt: at.eucalypt ?? 230,
		banksia: at.banksia ?? 510,
		pits: at.pits ?? 620,
		spinifex: at.spinifex ?? 800,
		exam: at.exam ?? 1010,
	};
	const beats = [t.eucalypt, t.banksia, t.spinifex];

	// ---------- eucalypt ----------
	const Eucalypt = () => {
		const x0 = cx0(0);
		const cx = x0 + COLW / 2;
		const sunY = TOP + 62;
		const rayEnd = TOP + 150;
		const shimmer = (k: number) => 0.6 + 0.4 * Math.sin(frame / 8 + k);
		const hang = ease(frame, t.eucalypt + 30, t.eucalypt + 80);
		return (
			<g>
				<circle cx={cx} cy={sunY} r={18} fill={SUN} />
				{[-50, -25, 0, 25, 50].map((dx, k) => (
					<line key={k} x1={cx + dx * 0.3} y1={sunY + 24} x2={cx + dx} y2={rayEnd} stroke={SUN} strokeWidth={3} strokeLinecap="round" strokeDasharray="6 6" opacity={shimmer(k)} />
				))}
				{/* the leaf turns from flat to hanging edge-on */}
				<g transform={`translate(${cx},${rayEnd + 50}) rotate(${90 * hang})`}>
					<path d="M -62 0 Q 0 -22 62 0 Q 0 22 -62 0 Z" fill={LEAF} stroke={WAX} strokeWidth={5 * fadeAt(frame, t.eucalypt + 100, 14) + 1} />
					<line x1={-58} y1={0} x2={58} y2={0} stroke={LEAF_DARK} strokeWidth={2} />
				</g>
				<text x={cx} y={rayEnd + 136} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={fadeAt(frame, t.eucalypt + 90, 14)}>hangs edge-on to midday sun</text>
				<text x={cx} y={rayEnd + 156} textAnchor="middle" fill="#9a8424" fontSize={14} fontWeight={800} opacity={fadeAt(frame, t.eucalypt + 110, 14)}>thick waxy cuticle</text>
			</g>
		);
	};

	// ---------- banksia ----------
	const Banksia = () => {
		const x0 = cx0(1);
		const cx = x0 + COLW / 2;
		const leafTop = TOP + 50;
		const surfY = TOP + 176; // lower leaf surface; the pit is sunk upward into the leaf
		const pitDepth = 76;
		const pitTop = surfY - pitDepth;
		const pits = fadeAt(frame, t.pits, 16);
		// Vapour leaves the stoma at the top of the pit. Before the pits beat the
		// dots stream out into the dry air; after it, most stay in the humid pit.
		const dots = Array.from({length: 10}, (_, k) => {
			const p = (((frame + k * 11) % 80) + 80) % 80 / 80;
			const keep = k < 7 && pits > 0.5;
			const x = cx + (hash01(k) - 0.5) * 30;
			if (keep) return {x: x + Math.sin(frame / 10 + k) * 5, y: pitTop + 10 + hash01(k + 4) * (pitDepth - 18) + Math.cos(frame / 12 + k) * 3, o: 0.9};
			return {x: x + (hash01(k + 7) - 0.5) * 70 * p, y: pitTop + 6 + p * (pitDepth + 90), o: Math.sin(p * Math.PI) * 0.9};
		});
		return (
			<g>
				{/* leaf tissue with a pit cut up into its lower surface */}
				<path d={`M ${x0 + 14} ${leafTop} L ${x0 + COLW - 14} ${leafTop} L ${x0 + COLW - 14} ${surfY} L ${cx + 30} ${surfY} L ${cx + 18} ${pitTop} L ${cx - 18} ${pitTop} L ${cx - 30} ${surfY} L ${x0 + 14} ${surfY} Z`} fill={LEAF} />
				<path d={`M ${x0 + 14} ${surfY} L ${cx - 30} ${surfY} L ${cx - 18} ${pitTop} M ${cx + 18} ${pitTop} L ${cx + 30} ${surfY} L ${x0 + COLW - 14} ${surfY}`} fill="none" stroke={WAX} strokeWidth={4} />
				{/* stoma (two guard cells) at the top of the pit */}
				<ellipse cx={cx - 8} cy={pitTop} rx={9} ry={5} fill={LEAF_DARK} />
				<ellipse cx={cx + 8} cy={pitTop} rx={9} ry={5} fill={LEAF_DARK} />
				{/* hairs lining the pit walls */}
				{Array.from({length: 8}, (_, k) => {
					const side = k < 4 ? -1 : 1;
					const j = k % 4;
					const f = (j + 1) / 5;
					const bx = cx + side * (18 + 12 * f), by = pitTop + pitDepth * f;
					return <path key={k} d={`M ${bx} ${by} q ${-side * 9} 4 ${-side * 15} 10`} fill="none" stroke="#c9b58a" strokeWidth={2.5} strokeLinecap="round" opacity={popAt(frame, fps, t.banksia + 30 + j * 4) > 0.5 ? 1 : 0} />;
				})}
				{dots.map((d, k) => (
					<circle key={k} cx={d.x} cy={d.y} r={4} fill={VAPOUR} opacity={d.o * fadeAt(frame, t.banksia + 20, 14)} />
				))}
				<text x={x0 + 24} y={leafTop + 24} fill="#e9f3e2" fontSize={13} fontWeight={800}>leaf</text>
				<text x={cx} y={surfY + 100} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800}>dry air outside</text>
				<g opacity={pits}>
					<text x={cx} y={surfY + 128} textAnchor="middle" fill={VAPOUR} fontSize={14} fontWeight={800}>humid air trapped in the pit</text>
					<text x={cx} y={surfY + 148} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800}>smaller vapour gradient</text>
				</g>
			</g>
		);
	};

	// ---------- spinifex ----------
	const Spinifex = () => {
		const x0 = cx0(2);
		const cx = x0 + COLW / 2;
		const cy = TOP + 150;
		const roll = ease(frame, t.spinifex + 40, t.spinifex + 110);
		// A strip of leaf drawn as an arc whose sweep grows from ~flat to almost closed.
		const sweep = 0.35 + roll * 1.45; // radians of half-angle
		const R = 30 + (1 - roll) * 140;
		const centreY = cy - R + 30;
		const arc = (r: number) => {
			const a0 = Math.PI / 2 - sweep, a1 = Math.PI / 2 + sweep;
			const p = (a: number) => `${cx + Math.cos(a) * r} ${centreY + Math.sin(a) * r}`;
			return `M ${p(a0)} A ${r} ${r} 0 ${sweep > Math.PI / 2 ? 1 : 0} 1 ${p(a1)}`;
		};
		const stomata = [-0.6, -0.2, 0.2, 0.6].map((f) => {
			const a = Math.PI / 2 + f * sweep;
			return {x: cx + Math.cos(a) * (R - 8), y: centreY + Math.sin(a) * (R - 8)};
		});
		return (
			<g>
				<path d={arc(R)} fill="none" stroke={LEAF} strokeWidth={16} strokeLinecap="round" />
				<path d={arc(R + 8)} fill="none" stroke={WAX} strokeWidth={3} strokeLinecap="round" />
				{stomata.map((s, k) => (
					<circle key={k} cx={s.x} cy={s.y} r={4} fill={LEAF_DARK} stroke="#ffffff" strokeWidth={1} />
				))}
				<text x={cx} y={cy + 92} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={fadeAt(frame, t.spinifex + 20, 14)}>stomata on the inner face</text>
				<text x={cx} y={cy + 112} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={fadeAt(frame, t.spinifex + 110, 14)}>rolled: less surface</text>
				<text x={cx} y={cy + 132} textAnchor="middle" fill={TOK.inkDim} fontSize={14} fontWeight={800} opacity={fadeAt(frame, t.spinifex + 120, 14)}>exposed to dry air</text>
			</g>
		);
	};

	const panels = [
		{title: 'eucalypt', art: Eucalypt, reason: 'less heat absorbed'},
		{title: 'banksia', art: Banksia, reason: 'smaller gradient'},
		{title: 'spinifex', art: Spinifex, reason: 'less exposed surface'},
	];
	const exam = fadeAt(frame, t.exam, 16);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Australian plants that reduce water loss: eucalypt leaves hang edge-on with a waxy cuticle, banksias have sunken stomata in hairy pits, spinifex rolls its leaves" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{panels.map((pnl, k) => {
				const p = Math.min(1, popAt(frame, fps, beats[k]));
				const x0 = cx0(k);
				const Art = pnl.art;
				return (
					<g key={pnl.title} opacity={p} transform={`translate(0,${(1 - p) * 14})`}>
						<rect x={x0} y={TOP} width={COLW} height={BOX_H} rx={16} fill="#ffffff" stroke={TOK.rule} strokeWidth={1.5} />
						<text x={x0 + COLW / 2} y={TOP + 32} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>{pnl.title}</text>
						<g opacity={p}>
							<Art />
						</g>
						<g opacity={exam}>
							<rect x={x0 + 16} y={TOP + BOX_H - 44} width={COLW - 32} height={32} rx={16} fill={`rgba(${theme.cardTint},0.12)`} stroke={theme.accent} strokeWidth={2} />
							<text x={x0 + COLW / 2} y={TOP + BOX_H - 22} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>{pnl.reason}</text>
						</g>
					</g>
				);
			})}
			<text x={W / 2} y={H - 46} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={exam}>Name the feature, then give the physical reason</text>
			<text x={W / 2} y={H - 18} textAnchor="middle" fill={TOK.inkMute} fontSize={13} fontWeight={700} opacity={fadeAt(frame, t.eucalypt + 20, 14)}>leaf sections drawn schematically</text>
		</svg>
	);
};
