// hdCollisionTheory — collision theory, hand-drawn style.
//
// Particles of A and B bounce around a box (a small, deterministic 2D
// simulation: elastic collisions, run once per render in useMemo, no
// randomness). When an A meets a B, the collision energy is the relative speed
// along the line of centres. At or above the activation-energy threshold they
// react and join into AB (amber flash, "≥ Ea"); below it they just bounce
// ("< Ea"). Counters tally A–B collisions and successful ones.
//
// `compare: true` puts a low-temperature box next to a high-temperature box
// (same particles, same starting positions, speeds × `hotFactor`), so the
// class can see both effects of heating: more collisions, and a bigger share
// of them with enough energy.
//
// Beat plan (frames @30 fps, relative to `delay`, default 62):
//   +0    box(es) and particles draw on
//   +20   particles start moving; collisions tallied live
//   +60   caption
//   hold  the simulation keeps running for the whole scene (never frozen)
//
// Chemistry checks: reaction needs a collision AND energy ≥ Ea (orientation is
// not modelled: say so in narration if it matters); energy is conserved in
// bounces; heating raises particle speed, collision rate and the fraction of
// collisions at or above Ea.

import {useMemo} from 'react';
import {useCurrentFrame} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {Hand, HandSvg, PENCIL, hash01, ramp} from './shared';

const ID = 'hdcol';
const R = 12;
const B_COLOR = '#c65a70';
const SIM_FRAMES = 1200;
const START = 20;

type P = {x: number; y: number; vx: number; vy: number; kind: 'A' | 'B' | 'AB'; alive: boolean};
type Ev = {t: number; x: number; y: number; ok: boolean};
export type Box = {x0: number; y0: number; x1: number; y1: number};

const radius = (p: P) => (p.kind === 'AB' ? R * 1.5 : R);
const mass = (p: P) => (p.kind === 'AB' ? 2 : 1);

/** Run the whole simulation once. Returns positions per frame and the event log. */
export const simulate = (box: Box, nEach: number, speed: number, ea: number) => {
	const ps: P[] = [];
	const cols = 4;
	const rows = Math.ceil((nEach * 2) / cols);
	for (let i = 0; i < nEach * 2; i++) {
		const c = i % cols;
		const r = Math.floor(i / cols);
		const ang = hash01(`ang${i}`) * Math.PI * 2;
		const sp = speed * (0.55 + hash01(`sp${i}`) * 0.9);
		ps.push({
			x: box.x0 + ((c + 0.5) / cols) * (box.x1 - box.x0) + (hash01(`jx${i}`) - 0.5) * 18,
			y: box.y0 + ((r + 0.5) / rows) * (box.y1 - box.y0) + (hash01(`jy${i}`) - 0.5) * 18,
			vx: Math.cos(ang) * sp,
			vy: Math.sin(ang) * sp,
			kind: (r + c) % 2 === 0 ? 'A' : 'B',
			alive: true,
		});
	}
	const frames: {x: number; y: number; kind: P['kind']}[][] = [];
	const events: Ev[] = [];
	for (let t = 0; t < SIM_FRAMES; t++) {
		frames.push(ps.filter((p) => p.alive).map((p) => ({x: p.x, y: p.y, kind: p.kind})));
		for (const p of ps) {
			if (!p.alive) continue;
			p.x += p.vx;
			p.y += p.vy;
			const r = radius(p);
			if (p.x < box.x0 + r) { p.x = box.x0 + r; p.vx = Math.abs(p.vx); }
			if (p.x > box.x1 - r) { p.x = box.x1 - r; p.vx = -Math.abs(p.vx); }
			if (p.y < box.y0 + r) { p.y = box.y0 + r; p.vy = Math.abs(p.vy); }
			if (p.y > box.y1 - r) { p.y = box.y1 - r; p.vy = -Math.abs(p.vy); }
		}
		for (let i = 0; i < ps.length; i++) {
			for (let j = i + 1; j < ps.length; j++) {
				const a = ps[i];
				const b = ps[j];
				if (!a.alive || !b.alive) continue;
				const dx = b.x - a.x;
				const dy = b.y - a.y;
				const d = Math.hypot(dx, dy);
				if (d === 0 || d >= radius(a) + radius(b)) continue;
				const nx = dx / d;
				const ny = dy / d;
				const vn = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny; // closing speed along the centres
				if (vn <= 0) continue; // already separating
				const pairAB = (a.kind === 'A' && b.kind === 'B') || (a.kind === 'B' && b.kind === 'A');
				if (pairAB && vn >= ea) {
					// react: A + B → AB, momentum conserved
					a.x = (a.x + b.x) / 2;
					a.y = (a.y + b.y) / 2;
					a.vx = (a.vx + b.vx) / 2;
					a.vy = (a.vy + b.vy) / 2;
					a.kind = 'AB';
					b.alive = false;
					events.push({t, x: a.x, y: a.y, ok: true});
					continue;
				}
				if (pairAB) events.push({t, x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, ok: false});
				// elastic bounce (unequal masses allowed: AB is twice as heavy)
				const ma = mass(a);
				const mb = mass(b);
				const jImp = (2 * vn) / (ma + mb);
				a.vx -= jImp * mb * nx;
				a.vy -= jImp * mb * ny;
				b.vx += jImp * ma * nx;
				b.vy += jImp * ma * ny;
				const overlap = radius(a) + radius(b) - d;
				a.x -= (nx * overlap) / 2;
				a.y -= (ny * overlap) / 2;
				b.x += (nx * overlap) / 2;
				b.y += (ny * overlap) / 2;
			}
		}
	}
	return {frames, events};
};

export type HdCollisionTheoryProps = {
	delay?: number;
	/** Side-by-side low vs high temperature (default false = one box). */
	compare?: boolean;
	/** Single-box mode: 'low' or 'high' temperature (default 'low'). */
	temperature?: 'low' | 'high';
	/** Particles of each reactant per box (default 8). */
	particlesEach?: number;
	/** Speed multiplier for the hot box (default 1.6). */
	hotFactor?: number;
	caption?: string;
};

// Tuned so the cold box sees a reaction only rarely and the hot box often
// (≈4% vs ≈28% of A–B collisions over the first ~9 s with 8 of each).
const BASE_SPEED = 2.8;
const EA = 5.8; // closing speed needed to react (px/frame)

export const HdCollisionTheory = ({delay = 62, compare = false, temperature = 'low', particlesEach = 8, hotFactor = 1.6, caption}: HdCollisionTheoryProps) => {
	const f = useCurrentFrame() - delay;
	const theme = useAccent();

	const boxes = useMemo(() => {
		const specs: {box: Box; hot: boolean}[] = compare
			? [
					{box: {x0: 24, y0: 58, x1: 364, y1: 368}, hot: false},
					{box: {x0: 396, y0: 58, x1: 736, y1: 368}, hot: true},
				]
			: [{box: {x0: 90, y0: 40, x1: 670, y1: 368}, hot: temperature === 'high'}];
		return specs.map((s) => ({...s, sim: simulate(s.box, particlesEach, BASE_SPEED * (s.hot ? hotFactor : 1), EA)}));
	}, [compare, temperature, particlesEach, hotFactor]);

	const t = Math.max(0, Math.min(SIM_FRAMES - 1, f - START));
	const drawIn = ramp(f, 0, 12);

	return (
		<HandSvg id={ID}>
			{boxes.map(({box, hot, sim}, bi) => {
				const shown = sim.frames[t];
				const past = f >= START ? sim.events.filter((e) => e.t <= t) : [];
				const ok = past.filter((e) => e.ok).length;
				const w = box.x1 - box.x0;
				return (
					<g key={bi}>
						<rect x={box.x0} y={box.y0} width={w} height={box.y1 - box.y0} rx={10} fill={PENCIL.paper} stroke={PENCIL.ink} strokeWidth={3.4} opacity={drawIn} />
												<Hand x={box.x0 + w / 2} y={box.y0 - 14} size={26} o={drawIn} color={hot ? TOK.phys1 : theme.accent}>
								{hot ? 'high temperature (fast)' : 'low temperature (slow)'}
							</Hand>
						{/* recent collision marks */}
						{past
							.filter((e) => t - e.t < 18)
							.map((e, k) =>
								e.ok ? (
									<g key={k} opacity={1 - (t - e.t) / 18}>
										<circle cx={e.x} cy={e.y} r={30} fill={TOK.amber} opacity={0.35} filter={`url(#${ID}-glow)`} />
										{[0, 1, 2, 3, 4, 5, 6, 7].map((q) => {
											const a = (q * Math.PI) / 4;
											return <line key={q} x1={e.x + Math.cos(a) * 20} y1={e.y + Math.sin(a) * 20} x2={e.x + Math.cos(a) * 30} y2={e.y + Math.sin(a) * 30} stroke={TOK.amber} strokeWidth={3} strokeLinecap="round" />;
										})}
										<Hand x={e.x} y={e.y - 34} size={22} color={TOK.amberInk}>≥ Ea</Hand>
									</g>
								) : (
									<g key={k} opacity={1 - (t - e.t) / 18} stroke={PENCIL.inkSoft} strokeWidth={2.2} strokeLinecap="round">
										<line x1={e.x - 14} y1={e.y - 14} x2={e.x - 6} y2={e.y - 6} />
										<line x1={e.x + 14} y1={e.y - 14} x2={e.x + 6} y2={e.y - 6} />
										<line x1={e.x} y1={e.y - 18} x2={e.x} y2={e.y - 9} />
										<Hand x={e.x} y={e.y - 22} size={20} color={PENCIL.inkSoft}>{'< Ea'}</Hand>
									</g>
								),
							)}
						{/* particles */}
						{shown.map((p, k) =>
							p.kind === 'AB' ? (
								<g key={k} opacity={drawIn}>
									<circle cx={p.x - 8} cy={p.y} r={R} fill={theme.accent} stroke={PENCIL.ink} strokeWidth={2.4} />
									<circle cx={p.x + 8} cy={p.y} r={R} fill={B_COLOR} stroke={PENCIL.ink} strokeWidth={2.4} />
								</g>
							) : (
								<circle key={k} cx={p.x} cy={p.y} r={R} fill={p.kind === 'A' ? theme.accent : B_COLOR} stroke={PENCIL.ink} strokeWidth={2.4} opacity={drawIn} />
							),
						)}
						{/* tallies */}
						<Hand x={box.x0 + w / 2} y={box.y1 + 34} size={25} o={drawIn}>
							{`${past.length} A–B collisions · ${ok} reacted`}
						</Hand>
					</g>
				);
			})}

			{/* legend + caption */}
			<g opacity={drawIn}>
				<circle cx={200} cy={440} r={R} fill={theme.accent} stroke={PENCIL.ink} strokeWidth={2.4} />
				<Hand x={220} y={448} size={24} anchor="start">A</Hand>
				<circle cx={290} cy={440} r={R} fill={B_COLOR} stroke={PENCIL.ink} strokeWidth={2.4} />
				<Hand x={310} y={448} size={24} anchor="start">B</Hand>
				<circle cx={392} cy={440} r={R} fill={theme.accent} stroke={PENCIL.ink} strokeWidth={2.4} />
				<circle cx={408} cy={440} r={R} fill={B_COLOR} stroke={PENCIL.ink} strokeWidth={2.4} />
				<Hand x={430} y={448} size={24} anchor="start">AB (product)</Hand>
			</g>
			<Hand x={380} y={500} size={28} color={TOK.amberInk} o={ramp(f, 60, 69)}>
				{caption ?? (compare ? 'hotter: a bigger share of collisions have energy ≥ Ea' : 'only collisions with energy ≥ Ea react')}
			</Hand>
		</HandSvg>
	);
};
