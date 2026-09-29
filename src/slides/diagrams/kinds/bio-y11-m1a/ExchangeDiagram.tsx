// ExchangeDiagram (bio11m1Exchange) — what a cell takes in and gives out.
//
// mode 'gradient'  A respiring cell on a stone plinth beside a blood
//                  capillary. Its mitochondria use O₂ (so O₂ is low inside)
//                  and make CO₂ (so CO₂ is high inside). O₂ molecules drift
//                  from the blood into the cell and vanish at a mitochondrion;
//                  CO₂ molecules appear at the mitochondria and drift out into
//                  the blood, which carries them away and brings fresh O₂:
//                  that flow keeps both gradients steep. Two gauge columns
//                  show outside vs inside for each gas (qualitative: no
//                  numbers), and each gas's arrow always runs from its high
//                  column to its low column.
// mode 'needs'     A cell in the middle (animal or plant) with up to six raw
//                  materials in slots around it. Each item's arrow runs into
//                  (or out of) the organelle that uses (or makes) it, with the
//                  requirement it meets as a tag. Particles stream along the
//                  arrows. All text from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ReactNode} from 'react';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, CELLPAL, Footer, GlossDefs, H, Lines, W, clamp, fadeAt, popAt, wrap} from './shared';

type Mat = 'glucose' | 'o2' | 'co2' | 'water' | 'amino' | 'ion';
type Target = 'mito' | 'ribo' | 'chloro' | 'cyto' | 'membrane';
type Item = {mat: Mat; dir: 'in' | 'out'; target: Target; tag: string; at: number; amber?: boolean};

export type ExchangeProps = {
	mode?: 'gradient' | 'needs';
	cell?: 'animal' | 'plant';
	items?: Item[];
	at?: {o2?: number; co2?: number; flow?: number};
	labels?: {blood?: string; cell?: string};
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b11exch';
const ease = Easing.inOut(Easing.cubic);
const MAT: Record<Mat, {label: string; color: string; name: string}> = {
	glucose: {label: 'glucose', color: CELLPAL.glucose, name: 'glucose'},
	o2: {label: 'O₂', color: CELLPAL.o2, name: 'o2'},
	co2: {label: 'CO₂', color: CELLPAL.co2, name: 'co2'},
	water: {label: 'H₂O', color: CELLPAL.water, name: 'water'},
	amino: {label: 'amino acids', color: CELLPAL.amino, name: 'amino'},
	ion: {label: 'ions', color: CELLPAL.ion, name: 'ion'},
};

const mito = (x: number, y: number, rot: number, s: number, frame: number, i: number) => (
	<g key={`mt${i}`} transform={`translate(${x + idleBob(frame, i, 1)},${y}) rotate(${rot}) scale(${s})`}>
		<ellipse rx={32} ry={15} fill={`url(#${ID}-ball-mito)`} stroke="#9a4a26" strokeWidth={1.5} />
		<path d="M -24 0 l 5 -9 l 5 16 l 5 -16 l 5 16 l 5 -16 l 5 16 l 5 -16 l 5 16 l 5 -9" fill="none" stroke="#fbe2c8" strokeWidth={2.2} />
	</g>
);

const token = (m: Mat, x: number, y: number, o = 1, key?: string | number) => {
	const info = MAT[m];
	const short = m === 'glucose' ? 'G' : m === 'amino' ? 'aa' : m === 'ion' ? 'Na⁺' : info.label;
	return (
		<g key={key} opacity={o}>
			{m === 'glucose' ? (
				<polygon points={Array.from({length: 6}, (_, k) => `${x + 12 * Math.cos((k * Math.PI) / 3)},${y + 12 * Math.sin((k * Math.PI) / 3)}`).join(' ')} fill={`url(#${ID}-ball-glucose)`} />
			) : (
				<circle cx={x} cy={y} r={12} fill={`url(#${ID}-ball-${info.name})`} />
			)}
			<text x={x} y={y + 4.5} textAnchor="middle" fill="#fff" fontSize={short.length > 2 ? 10 : 12} fontWeight={800}>{short}</text>
		</g>
	);
};

export const ExchangeDiagram = ({mode = 'gradient', cell = 'animal', items = [], at = {}, labels = {}, footer = [], delay = 62}: ExchangeProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const defs = (
		<>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{mito: CELLPAL.mito, chloro: CELLPAL.chloro, rbc: CELLPAL.rbc, glucose: CELLPAL.glucose, o2: CELLPAL.o2, co2: CELLPAL.co2, water: CELLPAL.water, amino: CELLPAL.amino, ion: CELLPAL.ion}} />
		</>
	);

	if (mode === 'gradient') {
		const tO = at.o2 ?? 30;
		const tC = at.co2 ?? 200;
		const tF = at.flow ?? 380;
		const capY = 80;
		const cx = 250;
		const cy = 300;
		const mitos = [[200, 290, 20], [300, 330, -15], [250, 260, 5]];
		const flowPh = (frame / 3) % 60;
		const gauge = (x: number, title: string, color: string, hiOutside: boolean, t0: number) => {
			const o = fadeAt(frame, t0, 14);
			const hOut = hiOutside ? 150 : 40;
			const hIn = hiOutside ? 40 : 150;
			const baseY = 400;
			return (
				<g opacity={o}>
					<text x={x + 55} y={170} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>{title}</text>
					{[['blood', hOut, 0], ['cell', hIn, 1]].map(([lab, h, k]) => (
						<g key={lab as string}>
							<rect x={x + (k as number) * 70} y={baseY - (h as number)} width={40} height={h as number} rx={6} fill={color} opacity={0.85} />
							<text x={x + (k as number) * 70 + 20} y={baseY + 22} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{lab as string}</text>
						</g>
					))}
					<Arrow x1={hiOutside ? x + 44 : x + 66} y1={baseY - 100} x2={hiOutside ? x + 66 : x + 44} y2={baseY - 100} color={TOK.ink} width={3.5} head={10} />
					<text x={x + 55} y={baseY + 46} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800}>{hiOutside ? 'diffuses in' : 'diffuses out'}</text>
				</g>
			);
		};
		const o2s = frame >= tO ? [0, 1, 2, 3].map((k) => {
			const ph = (((frame - tO) + k * 25) % 100) / 100;
			const m = mitos[k % 3];
			const x = interpolate(ph, [0, 1], [150 + k * 40, m[0]]);
			const y = interpolate(ph, [0, 1], [capY + 20, m[1]], {easing: ease});
			return token('o2', x, y, interpolate(ph, [0, 0.1, 0.85, 1], [0, 1, 1, 0]), `o${k}`);
		}) : [];
		const co2s = frame >= tC ? [0, 1, 2].map((k) => {
			const ph = (((frame - tC) + k * 33) % 100) / 100;
			const m = mitos[(k + 1) % 3];
			const x = interpolate(ph, [0, 1], [m[0], 170 + k * 60]);
			const y = interpolate(ph, [0, 1], [m[1], capY + 16], {easing: ease});
			return token('co2', x, y, interpolate(ph, [0, 0.12, 0.9, 1], [0, 1, 1, 0]), `c${k}`);
		}) : [];
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Gas exchange down concentration gradients" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				{defs}
				{/* capillary */}
				<rect x={10} y={capY - 30} width={470} height={62} rx={30} fill="#f3c2bb" stroke="#c9544a" strokeWidth={3} />
				{Array.from({length: 7}, (_, k) => {
					const x = 20 + ((k * 70 + (frame >= tF ? flowPh * 4 : 0)) % 460);
					return <ellipse key={k} cx={x} cy={capY + (k % 2 ? 8 : -8)} rx={16} ry={10} fill={`url(#${ID}-ball-rbc)`} />;
				})}
				<text x={20} y={capY - 40} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{labels.blood ?? 'blood capillary'}</text>
				{frame >= tF && <Arrow x1={380} y1={capY - 44} x2={470} y2={capY - 44} color={theme.accent} width={3} head={9} opacity={fadeAt(frame, tF)} />}
				{frame >= tF && <text x={375} y={capY - 40} textAnchor="end" fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tF)}>flow keeps gradients steep</text>}
				<DioramaPlinth id={ID} cx={cx} cy={cy + 110} rx={190} />
				<ellipse cx={cx} cy={cy} rx={170 * (1 + 0.01 * Math.sin(frame / 30))} ry={110} fill={CELLPAL.cyto} stroke={CELLPAL.membrane} strokeWidth={4} />
				<text x={cx} y={cy + 86} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{labels.cell ?? 'respiring cell'}</text>
				{mitos.map(([x, y, r], i) => mito(x, y, r, 0.9, frame, i))}
				{o2s}
				{co2s}
				{gauge(500, 'O₂', CELLPAL.o2, true, tO)}
				{gauge(630, 'CO₂', CELLPAL.co2, false, tC)}
				<Footer lines={footer} frame={frame} y0={H - 8} amberInk={TOK.amberInk} dim={TOK.inkDim} />
			</svg>
		);
	}

	// ----- needs -----
	const cx = W / 2;
	const cy = 262;
	const plant = cell === 'plant';
	const targets: Record<Target, {x: number; y: number}> = {
		mito: {x: cx + 40, y: cy + 40},
		ribo: {x: cx - 40, y: cy - 40},
		chloro: {x: cx - 36, y: cy + 44},
		cyto: {x: cx + 96, y: cy + 70},
		membrane: {x: cx - 150, y: cy + 10},
	};
	const slots = [
		{x: 104, y: 110}, {x: 104, y: 262}, {x: 104, y: 414},
		{x: W - 104, y: 110}, {x: W - 104, y: 262}, {x: W - 104, y: 414},
	];
	const order = [0, 3, 1, 4, 2, 5];
	const newest = items.reduce((m, it) => (it.at <= frame && it.at > m ? it.at : m), -Infinity);
	const els: ReactNode[] = items.slice(0, 6).map((it, i) => {
		const p = popAt(frame, fps, it.at);
		if (p <= 0) return null;
		const s = slots[order[i]];
		const left = s.x < cx;
		const tg = it.target === 'membrane' ? {x: left ? cx - (plant ? 150 : 162) : cx + (plant ? 150 : 162), y: s.y < cy ? cy - 30 : cy + 30} : targets[it.target];
		const ax = s.x + (left ? 44 : -44);
		const ay = s.y;
		const [x1, y1, x2, y2] = it.dir === 'in' ? [ax, ay, tg.x + (left ? -18 : 18), tg.y] : [tg.x + (left ? -18 : 18), tg.y, ax, ay];
		const col = it.amber ? TOK.amberInk : it.at === newest ? theme.accent : TOK.ink;
		const tagL = wrap(it.tag, 18);
		const movers = [0, 1].map((k) => {
			const ph = (((frame - it.at) + k * 45) % 90) / 90;
			return token(it.mat, x1 + (x2 - x1) * ph, y1 + (y2 - y1) * ph, interpolate(ph, [0, 0.15, 0.85, 1], [0, 1, 1, 0]), `mv${k}`);
		});
		return (
			<g key={i} opacity={Math.min(1, p)}>
				<Arrow x1={x1} y1={y1} x2={x2} y2={y2} color={it.amber ? TOK.amber : MAT[it.mat].color} width={3.5} head={11} opacity={0.75} />
				{movers}
				{token(it.mat, s.x, s.y - 30, 1, 'tok')}
				<text x={s.x} y={s.y + 4} textAnchor="middle" fill={col} fontSize={20} fontWeight={800}>{MAT[it.mat].label} {it.dir === 'in' ? 'in' : 'out'}</text>
				<Lines x={s.x} y={s.y + 26} lines={tagL} size={16} color={TOK.inkDim} />
				{it.at === newest && <circle cx={s.x} cy={s.y - 30} r={20 + 2 * pulse} fill="none" stroke={it.amber ? TOK.amber : theme.accent} strokeWidth={2.5} />}
			</g>
		);
	});
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A cell's raw materials" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{defs}
			<g opacity={fadeAt(frame, 0, 16)}>
				<DioramaPlinth id={ID} cx={cx} cy={cy + 140} rx={190} />
				{plant ? (
					<g>
						<rect x={cx - 170} y={cy - 120} width={340} height={240} rx={14} fill={CELLPAL.wall} />
						<rect x={cx - 160} y={cy - 110} width={320} height={220} rx={10} fill={CELLPAL.cytoPlant} stroke={CELLPAL.membrane} strokeWidth={3} />
						<rect x={cx - 60} y={cy - 70} width={130} height={90} rx={24} fill={CELLPAL.vacuole} stroke="#7fb8d0" strokeWidth={2} />
					</g>
				) : (
					<ellipse cx={cx} cy={cy} rx={172} ry={122} fill={CELLPAL.cyto} stroke={CELLPAL.membrane} strokeWidth={4} />
				)}
				{mito(targets.mito.x, targets.mito.y, -10, 0.9, frame, 1)}
				{plant && (
					<g transform={`translate(${targets.chloro.x},${targets.chloro.y})`}>
						<ellipse rx={32} ry={15} fill={`url(#${ID}-ball-chloro)`} stroke={CELLPAL.grana} strokeWidth={1.5} />
						{[-14, 0, 14].map((gx) => <rect key={gx} x={gx - 5} y={-6} width={10} height={12} rx={2} fill={CELLPAL.grana} />)}
					</g>
				)}
				{Array.from({length: 7}, (_, k) => (
					<circle key={k} cx={targets.ribo.x - 20 + (k % 4) * 12 + idleBob(frame, k, 1)} cy={targets.ribo.y - 6 + Math.floor(k / 4) * 12} r={3.4} fill={CELLPAL.ribo} />
				))}
			</g>
			{els}
			<Footer lines={footer} frame={frame} y0={H - 8} amberInk={TOK.amberInk} dim={TOK.inkDim} />
		</svg>
	);
};

