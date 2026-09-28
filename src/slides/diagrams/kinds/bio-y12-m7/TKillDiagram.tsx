// TKillDiagram (bio12m7TKill) — how a cytotoxic T cell kills an infected cell.
//
// An infected body cell (viruses multiplying inside) loads viral peptide onto
// MHC class I on its surface: the flag. A cytotoxic T cell with the matching
// receptor docks on the flag; a helper T cell sends IL-2, and the killer
// clones. Then perforin opens pores in the target membrane, granzymes pass in,
// and the cell dies by apoptosis, breaking into fragments: the virus factory
// shuts down with it. Stage captions come from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, PAL, Title, W, bioBeats, clamp, fadeAt, popAt, shade, textWidth} from './shared';
import {Icon} from './icons';
import {Epitope} from './immune';

type Beats = {cell: number; mhc: number; flag: number; tc: number; helper: number; il2: number; clone: number; perforin: number; granzyme: number; apoptosis: number; done: number};
export type TKillProps = {
	title?: string;
	captions?: {text: string; at: number; amber?: boolean}[];
	labels?: {mhc?: string; il2?: string; perforin?: string; granzyme?: string};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7tk';
const ease = Easing.inOut(Easing.cubic);

export const TKillDiagram = ({title, captions = [], labels = {}, beats, delay = 62}: TKillProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = bioBeats<Beats>({cell: 20, mhc: 200, flag: 300, tc: 400, helper: 500, il2: 600, clone: 700, perforin: 800, granzyme: 900, apoptosis: 1000, done: 1100}, beats);
	const top = title ? 44 : 0;
	const pulse = idlePulse(frame);
	const C = {x: 480, y: top + 250};
	const RX = 138;
	const RY = 96;
	const apo = interpolate(frame, [b.apoptosis, b.apoptosis + 70], [0, 1], {...clamp, easing: ease});
	// MHC I flags on the left side of the target
	const flags = [158, 180, 202].map((deg) => {
		const a = (deg * Math.PI) / 180;
		return {x: C.x + Math.cos(a) * RX, y: C.y + Math.sin(a) * RY, a: deg};
	});
	const dock = {x: C.x - RX - 52, y: C.y};
	const tcIn = interpolate(frame, [b.tc, b.tc + 50], [0, 1], {...clamp, easing: ease});
	const tc = {x: -80 + (dock.x + 80) * tcIn, y: dock.y + idleBob(frame, 1, 1.2)};
	const helper = {x: 110, y: top + 110};
	const cap = [...captions].reverse().find((c) => frame >= c.at);

	// pores on the target membrane near the contact
	const pores = [168, 186, 150, 196, 176].map((deg, k) => {
		const a = (deg * Math.PI) / 180;
		return {x: C.x + Math.cos(a) * RX * 0.99, y: C.y + Math.sin(a) * RY * 0.99, at: b.perforin + k * 10};
	});

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'A cytotoxic T cell kills an infected cell'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{cap && (
				<g opacity={fadeAt(frame, cap.at, 10)}>
					<rect x={W / 2 - textWidth(cap.text, 20) / 2 - 20} y={top + 6} width={textWidth(cap.text, 20) + 40} height={40} rx={20} fill={cap.amber ? '#fff6e6' : '#ffffff'} stroke={cap.amber ? TOK.amber : theme.accent} strokeWidth={2.5} />
					<text x={W / 2} y={top + 33} textAnchor="middle" fill={cap.amber ? TOK.amberInk : theme.accent} fontSize={20} fontWeight={800}>{cap.text}</text>
				</g>
			)}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={C.x} cy={C.y + 80} rx={210} />
			</g>
			{/* the infected cell (breaks into fragments on apoptosis) */}
			<g opacity={fadeAt(frame, b.cell, 14)}>
				{apo < 1 && (
					<g opacity={1 - apo}>
						<ellipse cx={C.x} cy={C.y} rx={RX * (1 - 0.25 * apo)} ry={RY * (1 - 0.25 * apo)} fill={`url(#${ID}-ball-cell)`} stroke={shade(PAL.cell, -0.35)} strokeWidth={1.5} />
						<circle cx={C.x + 50} cy={C.y + 10} r={26} fill={`url(#${ID}-ball-nucleus)`} opacity={0.75} />
						{[[-40, -30], [0, -44], [10, 30], [-60, 20], [50, -40], [-20, 50]].map(([dx, dy], k) => (
							<Icon key={k} id={ID} name="virus" x={C.x + dx} y={C.y + dy + idleBob(frame, k, 1.5)} s={0.32} frame={frame} opacity={fadeAt(frame, b.cell + 20 + k * 12)} />
						))}
					</g>
				)}
				{apo > 0 &&
					Array.from({length: 9}, (_, k) => {
						const a = (k / 9) * Math.PI * 2 + 0.4;
						const d = 30 + 60 * apo + (k % 3) * 10;
						return <circle key={k} cx={C.x + Math.cos(a) * d * 1.25} cy={C.y + Math.sin(a) * d * 0.7 + idleBob(frame, k, 1)} r={16 + (k % 3) * 5} fill={`url(#${ID}-ball-cell)`} stroke={shade(PAL.cell, -0.35)} opacity={apo} />;
					})}
			</g>
			{/* MHC class I flags with viral peptide */}
			{flags.map((f, k) => (
				<g key={k} opacity={fadeAt(frame, b.mhc + k * 10) * (1 - apo)}>
					<g transform={`translate(${f.x},${f.y}) rotate(${f.a + 90})`}>
						<path d="M -9 0 L -9 -14 M 9 0 L 9 -14" stroke="#6a5a9a" strokeWidth={5} strokeLinecap="round" />
					</g>
					<Epitope x={f.x + Math.cos((f.a * Math.PI) / 180) * 16} y={f.y + Math.sin((f.a * Math.PI) / 180) * 16} shape="tri" size={7} />
					{k === 1 && frame >= b.flag && <circle cx={f.x - 14} cy={f.y} r={24 + pulse * 3} fill="none" stroke={TOK.amber} strokeWidth={2.5} opacity={fadeAt(frame, b.flag) * (1 - fadeAt(frame, b.tc + 40, 10))} />}
				</g>
			))}
			<text x={C.x + 30} y={C.y + RY + 90} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.mhc) * (1 - apo)}>{labels.mhc ?? 'viral peptide on MHC class I'}</text>
			{/* helper T and IL-2 */}
			{frame >= b.helper && (
				<g opacity={fadeAt(frame, b.helper)}>
					<Icon id={ID} name="helperT" x={helper.x} y={helper.y + idleBob(frame, 3, 1.2)} s={0.85} frame={frame} />
					<text x={helper.x + 40} y={helper.y - 26} fill={PAL.helper} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.il2)}>{labels.il2 ?? 'IL-2'}</text>
					{frame >= b.il2 &&
						[0, 1, 2, 3].map((k) => {
							const t = ((frame - b.il2 + k * 10) % 40) / 40;
							return <circle key={k} cx={helper.x + (tc.x - helper.x) * t} cy={helper.y + 20 + (tc.y - helper.y - 20) * t} r={4.5} fill={PAL.helper} opacity={(1 - t) * (1 - fadeAt(frame, b.perforin, 20))} />;
						})}
				</g>
			)}
			{/* clones */}
			{[[-110, -120], [-150, 70], [-60, 120]].map(([dx, dy], k) => {
				const p = popAt(frame, fps, b.clone + k * 10);
				if (p <= 0) return null;
				return (
					<g key={k} opacity={Math.min(1, p)}>
						<Icon id={ID} name="tcell" x={dock.x + dx * Math.min(1, p) * 0.9 + 30} y={dock.y + dy * Math.min(1, p) * 0.7 + idleBob(frame, k + 5, 1.2)} s={0.62} frame={frame} />
					</g>
				);
			})}
			{/* the cytotoxic T cell */}
			{frame >= b.tc && (
				<g>
					<Icon id={ID} name="tcell" x={tc.x} y={tc.y} s={1.15} frame={frame} />
					<text x={tc.x} y={tc.y + 58} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>cytotoxic T</text>
				</g>
			)}
			{/* perforin pores */}
			{pores.map((p, k) => (
				<g key={k} opacity={fadeAt(frame, p.at) * (1 - apo)}>
					<circle cx={p.x} cy={p.y} r={6} fill="#3a2a4a" stroke={PAL.protein} strokeWidth={2.5} />
				</g>
			))}
			<text x={C.x - 40} y={top + 100} textAnchor="middle" fill={PAL.protein} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.perforin) * (1 - fadeAt(frame, b.apoptosis, 10))}>{labels.perforin ?? 'perforin: pores'}</text>
			{/* granzymes flowing in */}
			{frame >= b.granzyme &&
				Array.from({length: 8}, (_, k) => {
					const t = ((frame - b.granzyme + k * 8) % 50) / 50;
					const p = pores[k % pores.length];
					return <circle key={k} cx={tc.x + 30 + (p.x + 30 - tc.x - 30) * t} cy={tc.y + (p.y - tc.y) * t} r={4} fill={TOK.amber} opacity={(1 - fadeAt(frame, b.apoptosis + 40, 20)) * (t < 0.95 ? 1 : 0)} />;
				})}
			<text x={C.x + 70} y={top + 124} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.granzyme) * (1 - fadeAt(frame, b.apoptosis, 10))}>{labels.granzyme ?? 'granzymes enter'}</text>
		</svg>
	);
};
