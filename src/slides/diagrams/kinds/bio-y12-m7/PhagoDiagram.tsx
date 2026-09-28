// PhagoDiagram (bio12m7Phago) — phagocytosis in five steps on one plinth.
//
//  1 chemotaxis    the phagocyte crawls up a chemokine gradient to a bacterium
//  2 adherence     its receptors bind the bacterium's surface
//  3 ingestion     pseudopods wrap round it and seal it in a phagosome
//  4 digestion     a lysosome fuses; the bacterium is broken into fragments
//  5 presentation  fragments are displayed on MHC on the cell surface and a T
//                  cell arrives: the hand-off to adaptive immunity
// A row of step chips at the bottom lights the current step. Optional
// opsonisation note: antibodies coat the bacterium (speeds up adherence).

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, PAL, Title, W, bioBeats, clamp, fadeAt, shade, textWidth} from './shared';
import {Icon} from './icons';
import {Antibody, Epitope} from './immune';

type Beats = {s1: number; s2: number; s3: number; seal: number; s4: number; fuse: number; s5: number; mhc: number; tcell: number; opson: number};
export type PhagoProps = {
	title?: string;
	steps?: string[];
	labels?: {gradient?: string; phagosome?: string; lysosome?: string; mhc?: string; tcell?: string; opson?: string};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7phg';
const K = 1.3;
const ease = Easing.inOut(Easing.cubic);

export const PhagoDiagram = ({title, steps = ['Chemotaxis', 'Adherence', 'Ingestion', 'Digestion', 'Presentation'], labels = {}, beats, delay = 62}: PhagoProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = bioBeats<Beats>({s1: 40, s2: 200, s3: 360, seal: 520, s4: 560, fuse: 620, s5: 800, mhc: 900, tcell: 1000, opson: 1200}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	const floorY = top + 300;
	const B = {x: 470, y: floorY - 40};
	const move = interpolate(frame, [b.s1 + 10, b.s2], [0, 1], {...clamp, easing: ease});
	const C = {x: 140 + (B.x - 110 - 140) * move, y: floorY - 44};
	const wrapP = interpolate(frame, [b.s3, b.seal], [0, 1], {...clamp, easing: ease});
	const sealed = interpolate(frame, [b.seal, b.seal + 30], [0, 1], {...clamp, easing: ease});
	const fuse = interpolate(frame, [b.fuse, b.fuse + 40], [0, 1], {...clamp, easing: ease});
	const digest = interpolate(frame, [b.fuse + 30, b.fuse + 90], [0, 1], clamp);
	const present = interpolate(frame, [b.mhc, b.mhc + 50], [0, 1], {...clamp, easing: ease});
	const tIn = interpolate(frame, [b.tcell, b.tcell + 50], [0, 1], {...clamp, easing: ease});
	const cur = [b.s1, b.s2, b.s3, b.s4, b.s5].reduce((acc, at, i) => (frame >= at ? i : acc), -1);
	// engulfed-state body: centred between the old centre and the bacterium
	const E = {x: B.x - 40, y: floorY - 50};
	const bodyC = sealed > 0 ? {x: C.x + (E.x - C.x) * sealed, y: C.y + (E.y - C.y) * sealed} : C;
	const bodyRX = 72 + 46 * sealed;
	const bodyRY = 54 + 18 * sealed;
	const arm = (sign: 1 | -1) => {
		const a0 = sign * 150;
		const a1 = sign * (150 - 150 * wrapP);
		const pts: string[] = [`M ${C.x + 46} ${C.y + sign * 26}`];
		for (let i = 0; i <= 12; i++) {
			const a = ((a0 + ((a1 - a0) * i) / 12) * Math.PI) / 180;
			pts.push(`L ${B.x + Math.cos(a) * 46} ${B.y + Math.sin(a) * 40}`);
		}
		return pts.join(' ');
	};
	const frags = [[-10, -6], [8, -10], [0, 8], [12, 6]];
	const mhcPos = [[-40, -1], [0, -1], [40, -1]].map(([dx]) => ({x: E.x + dx, y: E.y - bodyRY + 4 + Math.abs(dx) * 0.18}));
	const chipW = (i: number) => textWidth(`${i + 1} ${steps[i]}`, 15) + 20;
	const chip = (i: number) => {
		const total = steps.reduce((sum, _, k) => sum + chipW(k), 0) + (steps.length - 1) * 8;
		let x = W / 2 - total / 2;
		for (let k = 0; k < i; k++) x += chipW(k) + 8;
		return {x, w: chipW(i)};
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Phagocytosis'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={W / 2} cy={floorY} rx={330} />
			</g>
			<g transform={`translate(${380 * (1 - K)},${(floorY - 40) * (1 - K)}) scale(${K})`}>
			{/* chemokine gradient */}
			<g opacity={fadeAt(frame, b.s1) * (1 - sealed)}>
				{Array.from({length: 26}, (_, k) => {
					const r = 30 + k * 11;
					const a = k * 2.4;
					return <circle key={k} cx={B.x - Math.abs(Math.cos(a)) * r} cy={B.y - 70 + Math.sin(a) * r * 0.35 + idleBob(frame, k, 1.5)} r={3} fill={theme.accent} opacity={Math.max(0.08, 0.7 - k * 0.025)} />;
				})}
				<text x={B.x + 60} y={top + 110} fill={theme.accent} fontSize={16} fontWeight={800}>{labels.gradient ?? 'chemokine gradient'}</text>
			</g>
			{/* bacterium (inside the phagosome once sealed) */}
			<g opacity={1 - digest}>
				<Icon id={ID} name="bacterium" x={B.x} y={B.y + (sealed > 0 ? idleBob(frame, 3, 1) : 0)} s={0.62 - 0.12 * fuse} frame={frame} />
			</g>
			{/* opsonisation: antibodies coat the bacterium */}
			{frame >= b.opson && (
				<g opacity={fadeAt(frame, b.opson)}>
					<text x={196} y={top + 98} fill={TOK.inkDim} fontSize={16} fontWeight={800}>{labels.opson ?? 'opsonisation: coated pathogens are bound faster'}</text>
				</g>
			)}
			{/* phagocyte */}
			<g>
				{sealed < 1 && (
					<g opacity={1 - sealed}>
						{wrapP > 0 && [1, -1].map((sg) => (
							<g key={sg}>
								<path d={arm(sg as 1 | -1)} fill="none" stroke={shade(PAL.macro, -0.25)} strokeWidth={26} strokeLinecap="round" strokeLinejoin="round" />
								<path d={arm(sg as 1 | -1)} fill="none" stroke={PAL.macro} strokeWidth={22} strokeLinecap="round" strokeLinejoin="round" />
							</g>
						))}
					</g>
				)}
				<ellipse cx={bodyC.x} cy={bodyC.y} rx={bodyRX} ry={bodyRY} fill={`url(#${ID}-ball-macro)`} stroke={shade(PAL.macro, -0.35)} strokeWidth={1.2} />
				<ellipse cx={bodyC.x - bodyRX * 0.45} cy={bodyC.y + 6} rx={18} ry={14} fill={shade(PAL.macro, -0.28)} opacity={0.6} />
				{/* adherence glow */}
				{frame >= b.s2 && sealed < 1 && <circle cx={B.x - 44} cy={B.y} r={10 + pulse * 3} fill={TOK.amber} opacity={0.35 * (1 - wrapP)} />}
			</g>
			{/* phagosome */}
			{sealed > 0 && (
				<g opacity={sealed}>
					<circle cx={B.x} cy={B.y} r={40} fill={fuse > 0 ? PAL.granule : '#ffffff'} fillOpacity={0.12 + 0.12 * fuse} stroke={shade(PAL.macro, -0.4)} strokeWidth={2} strokeDasharray="5 4" />
					<text x={B.x + 50} y={B.y + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={1 - fadeAt(frame, b.s4, 10)}>{labels.phagosome ?? 'phagosome'}</text>
				</g>
			)}
			{/* lysosome fuses */}
			{frame >= b.s4 && (
				<g opacity={1 - fuse}>
					<circle cx={E.x - 60 + (B.x - 20 - (E.x - 60)) * fuse} cy={E.y + 20 - 20 * fuse} r={15} fill={`url(#${ID}-ball-granule)`} />
					<text x={E.x - 70} y={E.y + 58} textAnchor="middle" fill={PAL.granule} fontSize={15} fontWeight={800}>{labels.lysosome ?? 'lysosome'}</text>
				</g>
			)}
			{/* fragments → MHC on the surface */}
			{digest > 0 &&
				frags.map(([dx, dy], k) => {
					const target = mhcPos[k % mhcPos.length];
					const show = k < 3;
					const x = B.x + dx + (show ? (target.x - B.x - dx) * present : 0);
					const y = B.y + dy + (show ? (target.y - 14 - B.y - dy) * present : 0);
					return <Epitope key={k} x={x} y={y} shape="tri" size={6} opacity={digest * (show ? 1 : 1 - present)} />;
				})}
			{present > 0 &&
				mhcPos.map((m, k) => (
					<path key={k} d={`M ${m.x - 8} ${m.y - 2} L ${m.x - 8} ${m.y - 14} M ${m.x + 8} ${m.y - 2} L ${m.x + 8} ${m.y - 14}`} stroke="#6a5a9a" strokeWidth={4} strokeLinecap="round" opacity={present} />
				))}
			{present > 0 && <text x={E.x} y={E.y - bodyRY - 36} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={present}>{labels.mhc ?? 'antigen on MHC'}</text>}
			{/* T cell arrives */}
			{tIn > 0 && (
				<g>
					<Icon id={ID} name="tcell" x={W + 40 - (W + 40 - (E.x + bodyRX + 48)) * tIn} y={E.y - 30 + idleBob(frame, 5, 1.2)} s={0.8} frame={frame} />
					<text x={E.x + bodyRX + 48} y={E.y + 30} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.tcell + 40)}>{labels.tcell ?? 'T cell'}</text>
				</g>
			)}
			{frame >= b.opson &&
				[-1, 1].map((d) => <Antibody key={d} x={164 + d * 16} y={top + 96} s={0.55} rot={d * 10} tip="round" tipColor={PAL.bacterium} opacity={fadeAt(frame, b.opson)} />)}
			</g>
			{/* step chips */}
			{steps.map((s, i) => {
				const {x, w} = chip(i);
				const on = cur === i;
				const done = cur > i;
				return (
					<g key={i} opacity={fadeAt(frame, [b.s1, b.s2, b.s3, b.s4, b.s5][i] - 6)}>
						<rect x={x} y={H - 44} width={w} height={32} rx={16} fill={on ? '#fff6e6' : '#ffffff'} stroke={on ? TOK.amber : theme.accent} strokeWidth={on ? 2.5 + pulse : 1.5} opacity={done ? 0.7 : 1} />
						<text x={x + w / 2} y={H - 23} textAnchor="middle" fill={on ? TOK.amberInk : theme.accent} fontSize={15} fontWeight={800}>{`${i + 1} ${s}`}</text>
					</g>
				);
			})}
		</svg>
	);
};
