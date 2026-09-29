// MembraneDiagram — a glass exchange tank on a stone plinth: blood flows along
// the top channel, a porous membrane divides it from the lower channel, and
// glossy particles either cross or stay, decided by the config for each
// species (size, and for dialysis whether a concentration gradient exists).
//
// mode "filtration": the lower channel is Bowman's capsule; pressure forces
//   every small particle through, large ones stay (sorting by size).
// mode "dialysis": the lower channel is dialysate flowing the opposite way.
//   Species with a gradient (urea) diffuse down it; species set at normal
//   blood levels on both sides show no net movement; large ones stay. A small
//   graph of urea along the membrane is computed from a counter-current
//   exchange model (equal flows), so the steady gap between the two lines is
//   real, not drawn.
//
// Beats are frames after `delay`. Hold: both streams keep flowing.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import type {ReactElement} from 'react';
import {Arrow, COL, GlossDefs, Note, NoteLine, drawPath, ease, fadeAt, hash01, polyD} from './shared';

type Species = {
	key: string;
	label: string;
	color: keyof typeof COL | string;
	size: 'small' | 'large';
	/** filtration: small species cross. dialysis: "gradient" crosses, "balanced" stays level on both sides. */
	behaviour: 'cross' | 'stay' | 'balanced';
	count?: number;
	at?: number;
};

export type MembraneProps = {
	mode: 'filtration' | 'dialysis';
	topLabel: string;
	bottomLabel: string;
	species: Species[];
	/** Frame the crossing starts. */
	crossAt: number;
	pressureAt?: number;
	counterAt?: number;
	graphAt?: number;
	notes?: Note[];
	delay?: number;
};

const ID = 'b12m8mem';
const W = 760;
const H = 530;
const TX0 = 40, TX1 = 720;

const colorOf = (c: string) => (c in COL ? COL[c as keyof typeof COL] : c);

// Counter-current exchange, equal flow rates, unit exchange coefficient:
// dCb/dx = -k (Cb - Cd), dCd/dx = -k (Cb - Cd) (dialysate flows toward x = 0),
// with Cb(0) = 1 and Cd(1) = 0. Solved by shooting on Cd(0).
const counterCurrent = (k = 1.6, n = 60) => {
	const run = (cd0: number) => {
		let cb = 1, cd = cd0;
		const out = [{cb, cd}];
		for (let i = 0; i < n; i++) {
			const d = (cb - cd) * k / n;
			cb -= d;
			cd -= d;
			out.push({cb, cd});
		}
		return out;
	};
	let lo = 0, hi = 1;
	for (let i = 0; i < 50; i++) {
		const mid = (lo + hi) / 2;
		if (run(mid)[n].cd > 0) hi = mid; else lo = mid;
	}
	return run((lo + hi) / 2);
};

export const MembraneDiagram = ({mode, topLabel, bottomLabel, species, crossAt, pressureAt, counterAt, graphAt, notes = [], delay = 62}: MembraneProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const dial = mode === 'dialysis';
	const top0 = dial ? 54 : 80, top1 = dial ? 150 : 196;
	const memY = top1 + 8;
	const bot0 = memY + 8, bot1 = bot0 + (top1 - top0);
	const plinthY = bot1 + 16;
	const width = TX1 - TX0;
	const vTop = 1.1;
	const vBot = dial ? -1.1 : 0.7;

	const particles: ReactElement[] = [];
	let idx = 0;
	species.forEach((sp, si) => {
		const count = sp.count ?? (sp.size === 'large' ? 3 : 5);
		const shown = fadeAt(frame, sp.at ?? 0, 12);
		const r = sp.size === 'large' ? 13 : 7;
		const lanes = sp.behaviour === 'balanced' ? 2 : 1;
		for (let lane = 0; lane < lanes; lane++) {
			for (let k = 0; k < count; k++) {
				const seed = idx++;
				const x0 = hash01(seed * 3.1 + si) * width;
				const yTopBase = top0 + r + 4 + hash01(seed * 7.7) * (top1 - top0 - 2 * r - 8);
				const yBotBase = bot0 + r + 4 + hash01(seed * 5.3) * (bot1 - bot0 - 2 * r - 8);
				const startsBottom = sp.behaviour === 'balanced' && lane === 1;
				let x: number, y: number;
				let fade = 1;
				if (sp.behaviour === 'cross' && dial && frame > crossAt) {
					// Fresh blood keeps arriving with urea: each particle cycles blood → across → away in the dialysate.
					const P = 260;
					const tt = frame - crossAt + ((k * 53 + si * 17) % P);
					const cyc = Math.floor(tt / P);
					const ph = (tt % P) / P;
					const xs = hash01(seed * 3.1 + cyc * 7.3) * width;
					const d1 = 0.35 * P, d2 = 0.5 * P;
					const tIn = ph * P;
					const xt = tIn < d1 ? xs + vTop * tIn : tIn < d2 ? xs + vTop * d1 + ((vTop + vBot) / 2) * (tIn - d1) : xs + vTop * d1 + ((vTop + vBot) / 2) * (d2 - d1) + vBot * (tIn - d2);
					x = TX0 + ((xt % width) + width) % width;
					const c = interpolate(tIn, [d1, d2], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
					y = yTopBase + (yBotBase - yTopBase) * c * c * (3 - 2 * c);
					fade = Math.min(1, ph / 0.05, (1 - ph) / 0.08);
				} else if (sp.behaviour === 'cross') {
					const tc = crossAt + (k * 37 + si * 13) % 160;
					const c = ease(frame, tc, tc + 34);
					const xt = x0 + vTop * Math.min(frame, tc) + vBot * Math.max(0, frame - tc - 34) + (vTop + vBot) / 2 * 34 * c;
					x = TX0 + ((xt % width) + width) % width;
					y = yTopBase + (yBotBase - yTopBase) * c;
				} else if (sp.behaviour === 'stay' && sp.size === 'large') {
					const xt = x0 + vTop * frame;
					x = TX0 + ((xt % width) + width) % width;
					// pressed against the membrane, then bounced back
					const press = pressureAt !== undefined ? Math.max(0, Math.sin(((frame - pressureAt) / 70 + k) * Math.PI)) * fadeAt(frame, pressureAt, 20) : 0;
					y = yTopBase + (top1 - r - 3 - yTopBase) * press * 0.8;
				} else {
					const v = startsBottom ? vBot : vTop;
					const xt = x0 + v * frame;
					x = TX0 + ((xt % width) + width) % width;
					y = startsBottom ? yBotBase : yTopBase;
				}
				y += idleBob(frame, seed, 1.4);
				// fade near the wrap edges so particles don't pop
				const edge = Math.min(1, (x - TX0) / 18, (TX1 - x) / 18);
				particles.push(
					sp.size === 'large' ? (
						<ellipse key={seed} cx={x} cy={y} rx={r} ry={r * (sp.key === 'cells' ? 0.72 : 1)} fill={`url(#${ID}-g-${si})`} stroke="rgba(0,0,0,0.25)" opacity={shown * fade * Math.max(0, edge)} />
					) : (
						<circle key={seed} cx={x} cy={y} r={r} fill={`url(#${ID}-g-${si})`} stroke="rgba(0,0,0,0.25)" opacity={shown * fade * Math.max(0, edge)} />
					),
				);
			}
		}
	});

	// pores
	const pores = Array.from({length: 22}, (_, k) => TX0 + 14 + (k * (width - 28)) / 21);

	// graph (dialysis)
	const cc = counterCurrent();
	const GX0 = 120, GX1 = 640, GY0 = 398, GY1 = 478;
	const gT = graphAt !== undefined ? ease(frame, graphAt, graphAt + 60) : 0;
	const gx = (i: number) => GX0 + (i / (cc.length - 1)) * (GX1 - GX0);
	const gy = (c: number) => GY1 - c * (GY1 - GY0);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${topLabel} and ${bottomLabel} across a membrane`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={Object.fromEntries(species.map((sp, si) => [String(si), colorOf(sp.color)]))} />
			<g opacity={fadeAt(frame, 0, 16)}>
				<DioramaPlinth id={`${ID}p`} cx={150} cy={plinthY} rx={96} />
				<DioramaPlinth id={`${ID}q`} cx={610} cy={plinthY} rx={96} />
				{/* tank */}
				<rect x={TX0 - 6} y={top0 - 6} width={width + 12} height={bot1 - top0 + 12} rx={16} fill="rgba(255,255,255,0.55)" stroke="#b9c2cc" strokeWidth={2.5} />
				<rect x={TX0} y={top0} width={width} height={top1 - top0} rx={10} fill="#f9d9d9" opacity={0.75} />
				<rect x={TX0} y={bot0} width={width} height={bot1 - bot0} rx={10} fill={dial ? '#dcecf8' : '#fff3cf'} opacity={0.8} />
				{/* membrane */}
				<line x1={TX0} y1={memY} x2={TX1} y2={memY} stroke="#8b96a3" strokeWidth={6} />
				{pores.map((px, k) => <line key={k} x1={px - 4} y1={memY} x2={px + 4} y2={memY} stroke="#ffffff" strokeWidth={7} />)}
				<text x={TX1 - 6} y={memY - 8} textAnchor="end" fill={TOK.inkDim} fontSize={14} fontWeight={800}>{dial ? 'semi-permeable membrane' : 'capillary wall (filter)'}</text>
				{particles}
				{/* channel labels + flow arrows */}
				<text x={TX0 + 10} y={top0 + 20} fill={COL.red} fontSize={17} fontWeight={800}>{topLabel}</text>
				<Arrow x1={TX0 + 10} y1={top0 + 34} x2={TX0 + 90} y2={top0 + 34} color={COL.red} width={3} head={9} />
				<text x={dial ? TX1 - 10 : TX0 + 10} y={bot1 - 12} textAnchor={dial ? 'end' : 'start'} fill={dial ? COL.blue : '#9a7414'} fontSize={17} fontWeight={800}>{bottomLabel}</text>
				{dial ? (
					<g opacity={counterAt !== undefined ? fadeAt(frame, counterAt, 12) : 1}>
						<Arrow x1={TX1 - 10} y1={bot1 - 34} x2={TX1 - 90} y2={bot1 - 34} color={COL.blue} width={3} head={9} />
					</g>
				) : (
					<Arrow x1={TX0 + 10} y1={bot1 - 34} x2={TX0 + 90} y2={bot1 - 34} color="#9a7414" width={3} head={9} />
				)}
				{/* pressure arrows */}
				{pressureAt !== undefined && (
					<g opacity={fadeAt(frame, pressureAt, 12)}>
						{[200, 380, 560].map((x, k) => (
							<Arrow key={k} x1={x} y1={top0 - 40} x2={x} y2={top0 - 8 + idlePulse(frame, 30) * 4} color={theme.accent} width={4} head={11} />
						))}
						<text x={290} y={top0 - 28} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>high blood pressure</text>
					</g>
				)}
			</g>

			{/* legend */}
			{!dial && (
				<g>
					{species.map((sp, si) => {
						const x = 60 + (si % 4) * 176;
						const y = plinthY + 86 + Math.floor(si / 4) * 30;
						const verdict = sp.behaviour === 'cross' ? 'passes' : 'stays';
						return (
							<g key={sp.key} opacity={fadeAt(frame, sp.at ?? 0, 12)}>
								<circle cx={x} cy={y - 5} r={sp.size === 'large' ? 9 : 6} fill={`url(#${ID}-g-${si})`} stroke="rgba(0,0,0,0.25)" />
								<text x={x + 14} y={y} fill={TOK.ink} fontSize={15} fontWeight={800}>{sp.label} <tspan fill={sp.behaviour === 'cross' ? COL.green : COL.red}>{verdict}</tspan></text>
							</g>
						);
					})}
				</g>
			)}
			{dial && (
				<g>
					{species.map((sp, si) => {
						const x = [30, 210, 490, 620][si] ?? 30 + si * 180;
						const y = plinthY + 62;
						const verdict = sp.behaviour === 'cross' ? 'diffuses out' : sp.behaviour === 'balanced' ? 'no net movement' : 'too big';
						return (
							<g key={sp.key} opacity={fadeAt(frame, sp.at ?? 0, 12)}>
								<circle cx={x} cy={y - 5} r={sp.size === 'large' ? 9 : 6} fill={`url(#${ID}-g-${si})`} stroke="rgba(0,0,0,0.25)" />
								<text x={x + 14} y={y} fill={TOK.ink} fontSize={15} fontWeight={800}>{sp.label}: <tspan fill={sp.behaviour === 'cross' ? COL.green : TOK.inkDim}>{verdict}</tspan></text>
							</g>
						);
					})}
					{graphAt !== undefined && (
						<g opacity={fadeAt(frame, graphAt, 14)}>
							<text x={GX0} y={GY0 - 10} fill={TOK.ink} fontSize={16} fontWeight={800}>urea along the membrane</text>
							<line x1={GX0} y1={GY1} x2={GX1} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
							<line x1={GX0} y1={GY0} x2={GX0} y2={GY1} stroke={TOK.inkMute} strokeWidth={2} />
							<path d={polyD(cc.map((c, i) => ({x: gx(i), y: gy(c.cb)})))} stroke={COL.red} strokeWidth={4} fill="none" {...drawPath(gT)} />
							<path d={polyD(cc.map((c, i) => ({x: gx(cc.length - 1 - i), y: gy(cc[cc.length - 1 - i].cd)})))} stroke={COL.blue} strokeWidth={4} fill="none" {...drawPath(gT)} />
							<text x={GX1 + 6} y={gy(cc[cc.length - 1].cb) + 5} fill={COL.red} fontSize={15} fontWeight={800} opacity={gT}>blood</text>
							<text x={GX0 + 8} y={gy(cc[0].cd) + 22} fill={COL.blue} fontSize={15} fontWeight={800} opacity={gT}>dialysate</text>
							<g opacity={fadeAt(frame, (graphAt ?? 0) + 60, 14)}>
								<line x1={(GX0 + GX1) / 2} y1={gy(cc[30].cb)} x2={(GX0 + GX1) / 2} y2={gy(cc[30].cd)} stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 1.5} />
								<text x={(GX0 + GX1) / 2} y={gy(cc[30].cb) - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800}>gradient stays steep all along</text>
							</g>
						</g>
					)}
				</g>
			)}
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 10 - (notes.length - 1 - k) * 24} frame={frame} size={18} />
			))}
		</svg>
	);
};
