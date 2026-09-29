// ScaleDiagram (bio11m1Scale) — sizes and resolving power on one log ruler, or
// magnification versus resolution.
//
// mode 'ruler'    A stone rail runs across the stage, each tick ten times the
//                 one before (a log scale). `items` (cells, organelles, a
//                 virus…) stand on it at their real size, computed from `nm`.
//                 `limits` (the eye, the light microscope, the electron
//                 microscope) drop in as markers under the rail at their
//                 resolution, also from `nm`. When a limit lands, everything
//                 at least that big lights up and everything smaller stays
//                 blurred: what that tool can and cannot resolve follows from
//                 the positions, never from a hand-set flag.
// mode 'resolve'  Two points a fixed distance apart. Seen with a tool whose
//                 resolution is coarser than the gap they blur into one; more
//                 magnification only makes the blur bigger ("empty
//                 magnification"); a finer-resolving tool shows two points.
//                 Which panel resolves is computed from `gapNm` and each
//                 panel's `resNm`.
//
// All text from props. Hold: items bob gently; the newest limit pulses.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ReactNode} from 'react';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CELLPAL, Footer, GlossDefs, H, Lines, W, clamp, fadeAt, popAt, textWidth, wrap} from './shared';

type ItemIcon = 'cell' | 'bacterium' | 'mito' | 'ribosome' | 'virus' | 'membrane' | 'nucleus' | 'rbc' | 'atom';
type Item = {name: string; nm: number; icon: ItemIcon; at: number; size?: string};
type Limit = {name: string; nm: number; label: string; at: number; amber?: boolean};
type Panel = {name: string; resNm: number; zoom?: number; at: number};

export type ScaleProps = {
	mode?: 'ruler' | 'resolve';
	title?: string;
	fromNm?: number;
	toNm?: number;
	items?: Item[];
	limits?: Limit[];
	gapNm?: number;
	gapLabel?: string;
	panels?: Panel[];
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b11scale';
const ease = Easing.inOut(Easing.cubic);

const unitLabel = (nm: number) => {
	if (nm >= 1e9) return `${nm / 1e9} m`;
	if (nm >= 1e6) return `${nm / 1e6} mm`;
	if (nm >= 1e3) return `${nm / 1e3} µm`;
	return `${nm} nm`;
};

const icon = (k: ItemIcon, x: number, y: number, s: number, frame: number, i: number): ReactNode => {
	const b = idleBob(frame, i, 1.5);
	switch (k) {
		case 'cell':
			return (
				<g transform={`translate(${x},${y + b}) scale(${s})`}>
					<ellipse rx={26} ry={20} fill={CELLPAL.cyto} stroke={CELLPAL.membrane} strokeWidth={2.5} />
					<circle cx={-4} cy={-2} r={8} fill={CELLPAL.nucleus} />
				</g>
			);
		case 'rbc':
			return (
				<g transform={`translate(${x},${y + b}) scale(${s})`}>
					<ellipse rx={22} ry={16} fill={`url(#${ID}-ball-rbc)`} />
					<ellipse rx={10} ry={6} fill="#a8322a" opacity={0.5} />
				</g>
			);
		case 'bacterium':
			return (
				<g transform={`translate(${x},${y + b}) scale(${s})`}>
					<rect x={-24} y={-11} width={48} height={22} rx={11} fill={CELLPAL.cytoProk} stroke={CELLPAL.wallProk} strokeWidth={3} />
					<path d="M -8 0 q 4 -6 8 0 t 8 0" fill="none" stroke={CELLPAL.dna} strokeWidth={2} />
				</g>
			);
		case 'mito':
			return (
				<g transform={`translate(${x},${y + b}) scale(${s})`}>
					<ellipse rx={24} ry={11} fill={`url(#${ID}-ball-mito)`} />
					<path d="M -16 0 l 4 -6 l 4 12 l 4 -12 l 4 12 l 4 -12 l 4 12 l 4 -6" fill="none" stroke="#fbe2c8" strokeWidth={1.8} />
				</g>
			);
		case 'nucleus':
			return <circle cx={x} cy={y + b} r={14 * s} fill={CELLPAL.nucleus} />;
		case 'ribosome':
			return (
				<g transform={`translate(${x},${y + b}) scale(${s})`}>
					<ellipse cx={0} cy={-5} rx={10} ry={7} fill={CELLPAL.ribo} />
					<ellipse cx={0} cy={6} rx={7} ry={5} fill="#7d6ab0" />
				</g>
			);
		case 'virus':
			return (
				<g transform={`translate(${x},${y + b}) scale(${s}) rotate(${frame / 3})`}>
					{Array.from({length: 10}, (_, j) => {
						const a = (j / 10) * Math.PI * 2;
						return <line key={j} x1={Math.cos(a) * 11} y1={Math.sin(a) * 11} x2={Math.cos(a) * 17} y2={Math.sin(a) * 17} stroke="#9a3a5a" strokeWidth={2.5} strokeLinecap="round" />;
					})}
					<circle r={11} fill={`url(#${ID}-ball-virus)`} />
				</g>
			);
		case 'membrane':
			return (
				<g transform={`translate(${x},${y + b}) scale(${s})`}>
					{[-12, -4, 4, 12].map((dx) => (
						<g key={dx}>
							<circle cx={dx} cy={-9} r={3.5} fill={CELLPAL.head} />
							<circle cx={dx} cy={9} r={3.5} fill={CELLPAL.head} />
							<line x1={dx} y1={-5} x2={dx} y2={5} stroke={CELLPAL.tail} strokeWidth={1.6} />
						</g>
					))}
				</g>
			);
		case 'atom':
			return <circle cx={x} cy={y + b} r={7 * s} fill="#9aa4ae" />;
	}
};

export const ScaleDiagram = ({mode = 'ruler', title, fromNm = 0.1, toNm = 1e6, items = [], limits = [], gapNm = 100, gapLabel, panels = [], footer = [], delay = 62}: ScaleProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const top = title ? 44 : 6;
	const defs = (
		<>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{mito: CELLPAL.mito, rbc: CELLPAL.rbc, virus: '#c2527a', dot: '#3a3a3a'}} />
			<filter id={`${ID}-soft`} x="-100%" y="-100%" width="300%" height="300%">
				<feGaussianBlur stdDeviation="3" />
			</filter>
		</>
	);

	if (mode === 'resolve') {
		const n = Math.max(1, panels.length);
		const pw = (W - 20) / n;
		const cy = top + 190;
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Magnification versus resolution'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				{defs}
				{title && <text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{title}</text>}
				{panels.map((p, i) => {
					const o = fadeAt(frame, p.at, 16);
					if (o <= 0) return null;
					const cx = 10 + pw * (i + 0.5);
					const resolves = gapNm >= p.resNm;
					const zoom = p.zoom ?? 1;
					const grow = interpolate(frame, [p.at + 10, p.at + 60], [1, zoom], {...clamp, easing: ease});
					const sep = 34 * grow;
					const blurR = resolves ? 9 * grow : 26 * grow;
					const r = Math.min(pw / 2 - 20, 118);
					return (
						<g key={i} opacity={o}>
							<DioramaPlinth id={`${ID}-p${i}`} cx={cx} cy={cy + r + 22} rx={pw / 2 - 26} />
							<circle cx={cx} cy={cy} r={r} fill="#fbfbf8" stroke="#3a3a3a" strokeWidth={6} />
							<clipPath id={`${ID}-clip${i}`}>
								<circle cx={cx} cy={cy} r={r - 3} />
							</clipPath>
							<g clipPath={`url(#${ID}-clip${i})`}>
								{resolves ? (
									[-1, 1].map((sd) => <circle key={sd} cx={cx + (sd * sep) / 2} cy={cy + idleBob(frame, i, 0.8)} r={blurR} fill={`url(#${ID}-ball-dot)`} />)
								) : (
									<g filter={`url(#${ID}-soft)`}>
										<ellipse cx={cx} cy={cy} rx={blurR + sep / 2} ry={blurR} fill="#3a3a3a" opacity={0.75} />
									</g>
								)}
							</g>
							<Lines x={cx} y={cy + r + 70} lines={wrap(p.name, 24)} size={18} color={TOK.ink} />
							<text x={cx} y={top + 26} textAnchor="middle" fill={resolves ? theme.accent : TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, p.at + 40)}>
								{resolves ? 'two points: resolved' : zoom > 1 ? 'bigger, still one blur' : 'one blur'}
							</text>
						</g>
					);
				})}
				{gapLabel && <text x={W / 2} y={H - 60} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, panels[0]?.at ?? 0)}>{gapLabel}</text>}
				<Footer lines={footer} frame={frame} y0={H - 12} amberInk={TOK.amberInk} dim={TOK.inkDim} />
			</svg>
		);
	}

	// ----- ruler -----
	const x0 = 40;
	const x1 = W - 40;
	const lo = Math.log10(fromNm);
	const hi = Math.log10(toNm);
	const xAt = (nm: number) => x0 + ((Math.log10(nm) - lo) / (hi - lo)) * (x1 - x0);
	const railY = top + 262;
	const decades: number[] = [];
	for (let e = Math.ceil(lo); e <= Math.floor(hi); e++) decades.push(10 ** e);
	const shown = limits.filter((l) => frame >= l.at);
	const current = shown.length ? shown.reduce((m, l) => (l.at > m.at ? l : m)) : null;
	// label rows: each item takes the lowest row where its label block fits
	const fit = <T,>(list: T[], x: (t: T) => number, w: (t: T) => number, rowsN: number) => {
		const ends: number[] = Array(rowsN).fill(-999);
		const m = new Map<T, number>();
		for (const t of list) {
			const l = x(t) - w(t) / 2;
			let lvl = ends.findIndex((e) => l > e + 10);
			if (lvl < 0) lvl = ends.indexOf(Math.min(...ends));
			m.set(t, lvl);
			ends[lvl] = x(t) + w(t) / 2;
		}
		return m;
	};
	const place = fit([...items].sort((a, b) => a.nm - b.nm), (it) => xAt(it.nm), (it) => Math.max(textWidth(it.name, 17), it.size ? textWidth(it.size, 15) : 0), 3);
	const limPlace = fit([...limits].sort((a, b) => a.nm - b.nm), (l) => xAt(l.nm), (l) => Math.max(textWidth(l.name, 17), textWidth(l.label, 17)) + 20, 2);
	const clampX = (x: number, w: number) => Math.max(8 + w / 2, Math.min(W - 8 - w / 2, x));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Sizes and resolution on a log scale'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{defs}
			{title && <text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{title}</text>}
			{/* the rail */}
			<g opacity={fadeAt(frame, 0, 16)}>
				<rect x={x0 - 16} y={railY} width={x1 - x0 + 32} height={18} rx={6} fill="#d3cfc7" />
				<rect x={x0 - 16} y={railY + 18} width={x1 - x0 + 32} height={10} rx={4} fill="#a9a59d" />
				{decades.map((d) => (
					<g key={d}>
						<line x1={xAt(d)} y1={railY - 2} x2={xAt(d)} y2={railY + 18} stroke="#6d6a64" strokeWidth={2} />
						<text x={xAt(d)} y={railY + 46} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{unitLabel(d)}</text>
					</g>
				))}
				<text x={W / 2} y={top + 14} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>log scale: each tick is 10× the one before</text>
			</g>
			{/* what the newest tool resolves: from its limit upward */}
			{current && (
				<rect x={xAt(current.nm)} y={railY + 2} width={x1 + 16 - xAt(current.nm)} height={14} rx={5} fill={current.amber ? TOK.amber : theme.accent} opacity={0.55 * fadeAt(frame, current.at, 20)} />
			)}
			{items.map((it, i) => {
				const p = popAt(frame, fps, it.at);
				if (p <= 0) return null;
				const x = xAt(it.nm);
				const lvl = place.get(it) ?? 0;
				const seen = current ? it.nm >= current.nm : true;
				const iy = railY - 40 - lvl * 74;
				const w = Math.max(textWidth(it.name, 17), it.size ? textWidth(it.size, 15) : 0);
				const lx = clampX(x, w);
				return (
					<g key={i} opacity={Math.min(1, p)}>
						<line x1={x} y1={iy + 16} x2={x} y2={railY} stroke={TOK.inkMute} strokeWidth={1.5} strokeDasharray="3 4" />
						<g opacity={seen ? 1 : 0.35} filter={seen ? undefined : `url(#${ID}-soft)`}>{icon(it.icon, x, iy, 1.3, frame, i)}</g>
						<text x={lx} y={iy - 32} textAnchor="middle" fill={seen ? TOK.ink : TOK.inkMute} fontSize={18} fontWeight={800}>{it.name}</text>
						{it.size && <text x={lx} y={iy - 52} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{it.size}</text>}
					</g>
				);
			})}
			{limits.map((l, i) => {
				const p = popAt(frame, fps, l.at);
				if (p <= 0) return null;
				const x = xAt(l.nm);
				const lvl = limPlace.get(l) ?? 0;
				const y = railY + 70 + lvl * 58;
				const isCur = current === l;
				const col = l.amber ? TOK.amberInk : isCur ? theme.accent : TOK.inkDim;
				const w = Math.max(textWidth(l.name, 17), textWidth(l.label, 17)) + 20;
				const lx = clampX(x, w);
				return (
					<g key={i} opacity={Math.min(1, p)}>
						<line x1={x} y1={railY + 28} x2={x} y2={y - 16} stroke={col} strokeWidth={isCur ? 3 + pulse : 2.5} />
						<path d={`M ${x - 7} ${railY + 30} L ${x + 7} ${railY + 30} L ${x} ${railY + 20} Z`} fill={col} />
						<rect x={lx - w / 2} y={y - 16} width={w} height={46} rx={10} fill="#ffffff" stroke={col} strokeWidth={isCur ? 2.5 : 1.5} />
						<text x={lx} y={y + 3} textAnchor="middle" fill={col} fontSize={17} fontWeight={800}>{l.name}</text>
						<text x={lx} y={y + 23} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{l.label}</text>
					</g>
				);
			})}
			<Footer lines={footer} frame={frame} y0={H - 8} amberInk={TOK.amberInk} dim={TOK.inkDim} />
		</svg>
	);
};
