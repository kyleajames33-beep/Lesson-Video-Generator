// MembraneDiagram (bio11m1Membrane) — a slice of the fluid mosaic membrane
// laid across a stone slab: outside the cell above, cytoplasm below.
//
// The bilayer is a row of phospholipids (glossy hydrophilic heads facing the
// water on both sides, wavy hydrophobic tails meeting in the core). They
// jiggle and one marked lipid slides sideways (the "fluid"). `show` adds the
// mosaic's other parts, each fading in on its beat: a channel protein (a
// water-filled pore), an integral protein spanning the bilayer, a glycoprotein
// (a protein carrying a branched carbohydrate chain on the outer face), a
// peripheral protein on the inner face, and cholesterol between the tails.
// `labels` pin names to those parts in chips above and below the slab.
//
// `routes` show substances crossing, each at its own slot:
//   via 'bilayer'  small non-polar molecules pass straight through the core
//   via 'blocked'  an ion or polar molecule bounces off the hydrophobic core
//   via 'channel'  ions pass through a channel protein's pore
//   via 'carrier'  a carrier binds a molecule, changes shape, releases it
//   via 'pump'     active transport: ATP → ADP + Pᵢ changes the carrier's
//                  shape and the ion is moved from the low side to the high
//                  side (against its gradient)
// Every passive route runs from the crowded side to the sparse side; a pump
// runs the other way. Crowding is drawn from `high`/`low` counts, so the
// direction on screen always matches the gradient. All text from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ReactNode} from 'react';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {CELLPAL, Footer, GlossDefs, H, Mark, W, clamp, fadeAt, popAt, textWidth, wrap} from './shared';

type Part = 'head' | 'tails' | 'core' | 'bilayer' | 'channel' | 'integral' | 'glyco' | 'peripheral' | 'chol' | 'drift' | 'pump' | 'carrier';
type Particle = 'o2' | 'co2' | 'ion' | 'glucose' | 'water' | 'urea' | 'cl' | 'k';
type Route = {via: 'bilayer' | 'blocked' | 'channel' | 'carrier' | 'pump'; particle: Particle; dir: 'in' | 'out'; at: number; label?: string; sub?: string; high?: number; low?: number; amber?: boolean; col?: number};

export type MembraneProps = {
	title?: string;
	show?: {part: 'channel' | 'integral' | 'glyco' | 'peripheral' | 'chol'; at: number}[];
	labels?: {part: Part; text: string; note?: string; at: number; amber?: boolean}[];
	routes?: Route[];
	sides?: {outside?: string; inside?: string};
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b11mem';
const ease = Easing.inOut(Easing.cubic);
const N = 30;
const X0 = 44;
const DX = (W - 64) / (N - 1);
const colX = (c: number) => X0 + c * DX;

const PART_INFO: Record<Particle, {name: string; label: string; r: number}> = {
	o2: {name: 'o2', label: 'O₂', r: 12},
	co2: {name: 'co2', label: 'CO₂', r: 13},
	ion: {name: 'ion', label: 'Na⁺', r: 12},
	cl: {name: 'ion', label: 'Cl⁻', r: 12},
	k: {name: 'ion', label: 'K⁺', r: 12},
	glucose: {name: 'glucose', label: 'G', r: 12},
	water: {name: 'water', label: 'H₂O', r: 13},
	urea: {name: 'urea', label: 'urea', r: 14},
};

const MODEL_COLS = {channel: 7.5, integral: 13, glyco: 19, peripheral: 24, chol: [3.5, 16.5, 27.5]};

export const MembraneDiagram = ({title, show = [], labels = [], routes = [], sides = {}, footer = [], delay = 62}: MembraneProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	const mY = top + 258;
	const shown = new Map(show.map((s) => [s.part, s.at]));
	const vis = (p: string) => (shown.has(p as never) ? fadeAt(frame, shown.get(p as never) as number, 16) : 0);

	// slots for routes
	const bilayerCols = [3, 10, 17, 24];
	let bi = 0;
	const routeCol = routes.map((r) => {
		if (r.col !== undefined) return r.col;
		if (r.via === 'channel') return shown.has('channel') ? MODEL_COLS.channel : 10;
		if (r.via === 'carrier') return 18;
		if (r.via === 'pump') return 25.5;
		return bilayerCols[bi++ % bilayerCols.length];
	});
	// lipid columns taken by proteins
	const taken = new Set<number>();
	const takeAround = (c: number, w: number) => {
		for (let k = Math.ceil(c - w); k <= Math.floor(c + w); k++) taken.add(k);
	};
	if (shown.has('channel')) takeAround(MODEL_COLS.channel, 1);
	if (shown.has('integral')) takeAround(MODEL_COLS.integral, 1);
	if (shown.has('glyco')) takeAround(MODEL_COLS.glyco, 1);
	routes.forEach((r, i) => {
		if (r.via === 'channel' && !shown.has('channel')) takeAround(routeCol[i], 1);
		if (r.via === 'carrier' || r.via === 'pump') takeAround(routeCol[i], 1);
	});

	const driftCol = 1;
	const drift = 14 * Math.sin(frame / 50);

	const lipid = (c: number, k: number): ReactNode => {
		const x = colX(c) + (c === driftCol ? drift : 1.5 * Math.sin(frame / 23 + c * 1.3));
		const wig = (s: number) => Math.sin(frame / 18 + c + s) * 1.6;
		return (
			<g key={`l${k}`}>
				{[-1, 1].map((sd) => (
					<g key={sd}>
						<path
							d={`M ${x - 3.5} ${mY + sd * 18} q ${-3 + wig(1)} ${-sd * 6} 0 ${-sd * 11} t 0 ${-sd * 6} M ${x + 3.5} ${mY + sd * 18} q ${3 + wig(2)} ${-sd * 6} 0 ${-sd * 11} t 0 ${-sd * 6}`}
							fill="none"
							stroke={CELLPAL.tail}
							strokeWidth={2.2}
							strokeLinecap="round"
						/>
						<circle cx={x} cy={mY + sd * 26 + idleBob(frame, c + sd * 5, 0.8)} r={9.5} fill={`url(#${ID}-ball-${c === driftCol ? 'drift' : 'head'})`} />
					</g>
				))}
			</g>
		);
	};

	const glossProtein = (x: number, rx: number, ry: number, key: string, color = 'protein', o = 1) => (
		<ellipse key={key} cx={x} cy={mY} rx={rx} ry={ry} fill={`url(#${ID}-ball-${color})`} stroke="#2f5d94" strokeWidth={1.2} opacity={o} />
	);

	const carrierShape = (x: number, s: number, color: string, o: number, key: string) => {
		const a = 14 - 28 * s; // + : open to outside (top apart)
		return (
			<g key={key} opacity={o}>
				<rect x={x - 26} y={mY - 42} width={24} height={84} rx={11} fill={`url(#${ID}-ball-${color})`} transform={`rotate(${-a} ${x - 14} ${mY})`} />
				<rect x={x + 2} y={mY - 42} width={24} height={84} rx={11} fill={`url(#${ID}-ball-${color})`} transform={`rotate(${a} ${x + 14} ${mY})`} />
			</g>
		);
	};

	const particle = (p: Particle, x: number, y: number, o = 1, key?: string | number) => {
		const info = PART_INFO[p];
		const r = info.r;
		return (
			<g key={key} opacity={o}>
				{p === 'glucose' ? (
					<polygon points={Array.from({length: 6}, (_, k) => `${x + r * Math.cos((k * Math.PI) / 3)},${y + r * Math.sin((k * Math.PI) / 3)}`).join(' ')} fill={`url(#${ID}-ball-glucose)`} stroke="#a0741f" strokeWidth={1} />
				) : (
					<circle cx={x} cy={y} r={r} fill={`url(#${ID}-ball-${info.name})`} />
				)}
				<text x={x} y={y + 4.5} textAnchor="middle" fill="#fff" fontSize={info.label.length > 3 ? 10 : 12} fontWeight={800}>{info.label}</text>
			</g>
		);
	};

	// ----- routes -----
	const P = 96;
	const routeEls = routes.map((r, i) => {
		const o = fadeAt(frame, r.at, 14);
		if (o <= 0) return {under: null, over: null};
		const x = colX(routeCol[i]);
		const sgn = r.dir === 'in' ? 1 : -1; // +1: outside (top) → inside (bottom)
		const srcY = mY - sgn * 86;
		const dstY = mY + sgn * 86;
		const active = r.via === 'pump';
		const nHigh = r.high ?? 7;
		const nLow = r.low ?? 2;
		const nSrc = active ? nLow : nHigh;
		const nDst = active ? nHigh : nLow;
		const cluster = (cy: number, n: number, seed: number) =>
			Array.from({length: n}, (_, k) => {
				const col = k % 4;
				const row = Math.floor(k / 4);
				const cx = x - 45 + col * 30 + (row % 2) * 15;
				const yy = cy + (cy < mY ? -1 : 1) * row * 26;
				return particle(r.particle, cx + idleBob(frame, k + seed, 2), yy + idleBob(frame, k + seed + 3, 2), 1, `c${seed}${k}`);
			});
		const t = frame - r.at - 20;
		const movers: ReactNode[] = [];
		let s = 0;
		let atpEl: ReactNode = null;
		if (t > 0) {
			if (r.via === 'bilayer' || r.via === 'channel') {
				for (let k = 0; k < 2; k++) {
					const ph = ((t + (k * P) / 2) % P) / P;
					const y = interpolate(ph, [0, 1], [srcY, dstY], {easing: ease});
					movers.push(particle(r.particle, x + Math.sin(ph * 6 + k) * (r.via === 'channel' ? 1 : 5), y, interpolate(ph, [0, 0.12, 0.88, 1], [0, 1, 1, 0]), `m${k}`));
				}
			} else if (r.via === 'blocked') {
				const ph = (t % P) / P;
				const y = interpolate(ph, [0, 0.45, 1], [srcY, mY - sgn * 38, srcY], {easing: ease});
				movers.push(particle(r.particle, x + 10, y, interpolate(ph, [0, 0.1, 0.9, 1], [0, 1, 1, 0]), 'b'));
				movers.push(<g key="x" opacity={interpolate(ph, [0.35, 0.45, 0.7, 0.8], [0, 1, 1, 0], clamp)}><Mark x={x + 36} y={mY - sgn * 40} ok={false} r={11} /></g>);
			} else {
				const Pc = 130;
				const ph = (t % Pc) / Pc;
				s = interpolate(ph, [0.3, 0.5, 0.8, 0.98], [0, 1, 1, 0], clamp);
				if (sgn < 0) s = 1 - s;
				const y = interpolate(ph, [0, 0.28, 0.5, 0.72], [srcY, mY - sgn * 22, mY + sgn * 22, dstY], {...clamp, easing: ease});
				movers.push(particle(r.particle, x, y, interpolate(ph, [0, 0.08, 0.7, 0.8], [0, 1, 1, 0], clamp), 'c'));
				if (active) {
					const ay = mY + 84;
					const come = interpolate(ph, [0.05, 0.28], [0, 1], {...clamp, easing: ease});
					const split = interpolate(ph, [0.3, 0.5], [0, 1], clamp);
					atpEl = (
						<g>
							<g opacity={1 - split}>
								<circle cx={x + 50 - 22 * come} cy={ay - 30 * come} r={14} fill={`url(#${ID}-ball-atp)`} />
								<text x={x + 50 - 22 * come} y={ay - 30 * come + 4} textAnchor="middle" fill="#5a3a00" fontSize={10} fontWeight={800}>ATP</text>
							</g>
							<g opacity={split * (1 - fadeAt(ph * Pc, 0.85 * Pc, 10))}>
								<circle cx={x + 30 + 20 * split} cy={ay - 26 + 20 * split} r={12} fill={`url(#${ID}-ball-atp)`} opacity={0.7} />
								<text x={x + 30 + 20 * split} y={ay - 22 + 20 * split} textAnchor="middle" fill="#5a3a00" fontSize={9} fontWeight={800}>ADP</text>
								<circle cx={x + 30 + 44 * split} cy={ay - 30 + 4 * split} r={7} fill={`url(#${ID}-ball-atp)`} opacity={0.7} />
								<text x={x + 30 + 44 * split} y={ay - 26 + 4 * split} textAnchor="middle" fill="#5a3a00" fontSize={9} fontWeight={800}>Pᵢ</text>
							</g>
						</g>
					);
				}
			}
		}
		const protein =
			r.via === 'channel' && !shown.has('channel') ? (
				<g key="ch">{channelShape(x, 1)}</g>
			) : r.via === 'carrier' || r.via === 'pump' ? (
				carrierShape(x, s, r.via === 'pump' ? 'pump' : 'protein', 1, 'car')
			) : null;
		const labelLines = r.label ? wrap(r.label, 16) : [];
		const ly = mY + 150;
		return {
			under: (
				<g key={`u${i}`} opacity={o}>
					{cluster(srcY + (sgn > 0 ? -16 : 16), nSrc, i * 11)}
					{cluster(dstY + (sgn > 0 ? 16 : -16), nDst, i * 11 + 50)}
				</g>
			),
			over: (
				<g key={`o${i}`} opacity={o}>
					{protein}
					{movers}
					{atpEl}
					{labelLines.map((l, k) => (
						<text key={k} x={x} y={ly + 34 + k * 20} textAnchor="middle" fill={r.amber ? TOK.amberInk : theme.accent} fontSize={18} fontWeight={800}>{l}</text>
					))}
					{r.sub && <text x={x} y={ly + 34 + labelLines.length * 20} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{r.sub}</text>}
				</g>
			),
		};
	});

	function channelShape(x: number, o: number) {
		return (
			<g opacity={o}>
				<rect x={x - 28} y={mY - 44} width={21} height={88} rx={9} fill={`url(#${ID}-ball-protein)`} />
				<rect x={x + 7} y={mY - 44} width={21} height={88} rx={9} fill={`url(#${ID}-ball-protein)`} />
				<rect x={x - 7} y={mY - 40} width={14} height={80} fill={CELLPAL.water} opacity={0.35} />
			</g>
		);
	}

	// ----- labels (chips above / below with leaders) -----
	const anchor = (p: Part): {x: number; y: number; below: boolean} => {
		switch (p) {
			case 'head': return {x: colX(5), y: mY - 26, below: false};
			case 'tails': return {x: colX(11), y: mY + 10, below: true};
			case 'core': return {x: colX(21), y: mY, below: true};
			case 'bilayer': return {x: colX(27), y: mY - 30, below: false};
			case 'drift': return {x: colX(driftCol) + drift, y: mY - 30, below: false};
			case 'channel': return {x: colX(MODEL_COLS.channel), y: mY - 44, below: false};
			case 'integral': return {x: colX(MODEL_COLS.integral), y: mY - 46, below: false};
			case 'glyco': return {x: colX(MODEL_COLS.glyco), y: mY - 96, below: false};
			case 'peripheral': return {x: colX(MODEL_COLS.peripheral), y: mY + 50, below: true};
			case 'chol': return {x: colX(MODEL_COLS.chol[1]), y: mY + 12, below: true};
			case 'pump': {
				const k = routes.findIndex((r) => r.via === 'pump');
				return {x: colX(k >= 0 ? routeCol[k] : 25.5), y: mY - 46, below: false};
			}
			case 'carrier': {
				const k = routes.findIndex((r) => r.via === 'carrier');
				return {x: colX(k >= 0 ? routeCol[k] : 18), y: mY - 46, below: false};
			}
		}
	};
	type Placed = {l: (typeof labels)[number]; a: ReturnType<typeof anchor>; w: number; h: number; x: number; y: number; lines: string[]};
	const placed: Placed[] = labels.map((l) => {
		const a = anchor(l.part);
		const lines = l.note ? wrap(l.note, 20) : [];
		const w = Math.max(textWidth(l.text, 17), ...lines.map((q) => textWidth(q, 15))) + 22;
		const h = 30 + lines.length * 18;
		return {l, a, w, h, x: 0, y: 0, lines};
	});
	for (const below of [false, true]) {
		const grp = placed.filter((p) => p.a.below === below).sort((p, q) => p.a.x - q.a.x);
		const ends = [-999, -999];
		for (const p of grp) {
			const cx = Math.max(p.w / 2 + 4, Math.min(W - 4 - p.w / 2, p.a.x));
			let row = ends.findIndex((e) => cx - p.w / 2 > e + 8);
			if (row < 0) row = ends[0] <= ends[1] ? 0 : 1;
			ends[row] = cx + p.w / 2;
			p.x = cx;
			p.y = below ? mY + 142 + row * 56 : mY - 150 - row * 56 - p.h;
		}
	}
	const newest = labels.reduce((m, l) => (l.at <= frame && l.at > m ? l.at : m), -Infinity);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'The fluid mosaic membrane'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs
				id={ID}
				colors={{head: CELLPAL.head, drift: TOK.amber, protein: CELLPAL.protein, pump: '#6f5fc0', glyco: CELLPAL.glyco, chol: CELLPAL.chol, o2: CELLPAL.o2, co2: CELLPAL.co2, ion: CELLPAL.ion, glucose: CELLPAL.glucose, water: CELLPAL.water, urea: CELLPAL.urea, atp: CELLPAL.atp}}
			/>
			{title && <text x={W / 2} y={30} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{title}</text>}
			<g opacity={fadeAt(frame, 0, 16)}>
				{/* water on both sides, stone slab edge under the section */}
				<rect x={10} y={mY - 120} width={W - 20} height={84} rx={12} fill={CELLPAL.water} opacity={0.08} />
				<rect x={10} y={mY + 36} width={W - 20} height={84} rx={12} fill={CELLPAL.cyto} opacity={0.35} />
				<text x={0} y={0} transform={`translate(24 ${mY - 78}) rotate(-90)`} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{sides.outside ?? 'outside'}</text>
				<text x={0} y={0} transform={`translate(24 ${mY + 78}) rotate(-90)`} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{sides.inside ?? 'cytoplasm'}</text>
				<rect x={10} y={mY + 122} width={W - 20} height={10} rx={4} fill="#c9c5bd" />
			</g>
			{routeEls.map((r) => r.under)}
			{Array.from({length: N}, (_, c) => (taken.has(c) ? null : lipid(c, c)))}
			{MODEL_COLS.chol.map((c, k) => (
				<g key={`ch${k}`} opacity={vis('chol')}>
					{[-1, 1].map((sd) => (
						<ellipse key={sd} cx={colX(c)} cy={mY + sd * 9} rx={4.5} ry={10} fill={`url(#${ID}-ball-chol)`} stroke="#a88a10" strokeWidth={0.8} />
					))}
				</g>
			))}
			{shown.has('channel') && channelShape(colX(MODEL_COLS.channel), vis('channel'))}
			{shown.has('integral') && glossProtein(colX(MODEL_COLS.integral), 30, 46, 'int', 'protein', vis('integral'))}
			{shown.has('glyco') && (
				<g opacity={vis('glyco')}>
					{glossProtein(colX(MODEL_COLS.glyco), 26, 44, 'gp')}
					{(() => {
						const gx = colX(MODEL_COLS.glyco);
						const nodes: [number, number][] = [[0, -52], [0, -66], [-10, -78], [10, -78], [-18, -90], [0, -90], [18, -90]];
						return (
							<g transform={`rotate(${Math.sin(frame / 40) * 4} ${gx} ${mY - 44})`}>
								<path d={`M ${gx} ${mY - 44} V ${mY - 66} M ${gx} ${mY - 66} L ${gx - 10} ${mY - 78} L ${gx - 18} ${mY - 90} M ${gx - 10} ${mY - 78} L ${gx} ${mY - 90} M ${gx} ${mY - 66} L ${gx + 10} ${mY - 78} L ${gx + 18} ${mY - 90}`} stroke={CELLPAL.grana} strokeWidth={2} />
								{nodes.map(([dx, dy], k) => (
									<polygon key={k} points={Array.from({length: 6}, (_, j) => `${gx + dx + 5.5 * Math.cos((j * Math.PI) / 3)},${mY + dy + 5.5 * Math.sin((j * Math.PI) / 3)}`).join(' ')} fill={`url(#${ID}-ball-glyco)`} />
								))}
							</g>
						);
					})()}
				</g>
			)}
			{shown.has('peripheral') && <ellipse cx={colX(MODEL_COLS.peripheral)} cy={mY + 46 + idleBob(frame, 2, 1)} rx={32} ry={13} fill={`url(#${ID}-ball-protein)`} opacity={vis('peripheral')} />}
			{routeEls.map((r) => r.over)}
			{placed.map((p, i) => {
				const pp = popAt(frame, fps, p.l.at);
				if (pp <= 0) return null;
				const col = p.l.amber ? TOK.amberInk : p.l.at === newest ? theme.accent : TOK.ink;
				const edgeY = p.a.below ? p.y : p.y + p.h;
				return (
					<g key={i} opacity={Math.min(1, pp)}>
						<line x1={p.x} y1={edgeY} x2={p.a.x} y2={p.a.y} stroke={p.l.amber ? TOK.amber : col} strokeWidth={2} />
						<circle cx={p.a.x} cy={p.a.y} r={4.5} fill={p.l.amber ? TOK.amber : col} stroke="#fff" strokeWidth={1.5} />
						<rect x={p.x - p.w / 2} y={p.y} width={p.w} height={p.h} rx={10} fill="#ffffff" stroke={p.l.amber ? TOK.amber : col} strokeWidth={p.l.at === newest ? 2.5 + pulse : 1.5} />
						<text x={p.x} y={p.y + 21} textAnchor="middle" fill={col} fontSize={17} fontWeight={800}>{p.l.text}</text>
						{p.lines.map((q, k) => (
							<text key={k} x={p.x} y={p.y + 40 + k * 18} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{q}</text>
						))}
					</g>
				);
			})}
			<Footer lines={footer} frame={frame} y0={H - 8} amberInk={TOK.amberInk} dim={TOK.inkDim} />
		</svg>
	);
};
