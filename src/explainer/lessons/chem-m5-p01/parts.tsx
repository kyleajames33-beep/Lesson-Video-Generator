// Drawing parts for P01 (reversibility and disturbance investigations): painted plates placed by alpha box with
// dashed stand-ins, aligned crossfades (iron, cobalt, crystals, magnesium), drops, steam, open/closed boundaries,
// the "push it, bring it back" loop, the six-tube row on a white tile, swatch bars, cards and tables.
// Text, chips, rings, arrows, the givens card, mistake chip, pause hold and key notes are the shared ones (C5, C6,
// C11, G03c, C6a); the countdown comes from the kit.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, DrawPath, INK, INK_SOFT, prog, rng} from '../../kit';
import {Arrow, Chip, Fade, GivensCard, KeyNotesBoard, MistakeChip, Overlay, PauseHold, PicH, Ring, Sx, TEAL, TaskLine, Tick, mw, picW, pulseAt, smooth} from '../chem-m5-c11/parts';
import {Push} from '../chem-m5-c06/parts';
import {HeatIcon, Thermometer} from '../chem-m5-c03/parts';
import {GREEN, HAZ, SW_STOCK, WATER_DROP, hexMix} from './common';
import {BURNER, COB, CRYS, DROPPER, IRON, STOPPER, have} from './assets';
import type {PDef} from './assets';

export {Arrow, Chip, Fade, GivensCard, KeyNotesBoard, MistakeChip, Overlay, PauseHold, PicH, Push, Ring, Sx, TEAL, TaskLine, Tick, HeatIcon, Thermometer, mw, picW, pulseAt, smooth};
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- plates with stand-ins ----------
/** Dashed stand-in for a plate that is not on disk (named, so the gap is obvious in review). */
export const Stand: React.FC<{p: PDef; x: number; y: number; h: number; o?: number}> = ({p, x, y, h, o = 1}) => {
	const w = picW(p, h);
	const name = p.src.split('/').pop() ?? '';
	return (
		<g opacity={o}>
			<rect x={x} y={y} width={w} height={h} rx={14} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={3} strokeDasharray="10 8" />
			<Sx x={x + w / 2} y={y + h / 2} text={name.replace(/-v\d+\.png$/, '')} size={Math.max(14, Math.min(26, w / 12))} color={INK_SOFT} anchor="middle" weight={600} at={-1000} />
		</g>
	);
};
/** Painted plate (top-left of the visible box at x, y; height h), or its stand-in. */
export const Pic: React.FC<{p: PDef; x: number; y: number; h: number; o?: number}> = ({p, x, y, h, o = 1}) =>
	o <= 0.005 ? null : have(p) ? <PicH p={p} x={x} y={y} h={h} o={o} /> : <Stand p={p} x={x} y={y} h={h} o={o} />;
/** Point inside a placed plate (u, v fractions of its visible box). */
export const pt = (p: PDef, x: number, y: number, h: number, u: number, v: number): [number, number] => [x + picW(p, h) * u, y + h * v];
/** Plate from native pixel coordinates. */
export const npt = (p: PDef, x: number, y: number, h: number, nx: number, ny: number): [number, number] => {
	const k = h / p.box[3];
	return [x + (nx - p.box[0]) * k, y + (ny - p.box[1]) * k];
};

// ---------- iron thiocyanate tube (C3 crop): stock, deep, faded with Fe(OH)3, and a coded dilution wash ----------
export const ironW = (h: number) => picW(IRON.start, h);
/** Mouth (top centre) and liquid geometry of the C3 iron tube, as fractions of the crop. */
export const IRON_G = {mouthU: 0.5, mouthV: 0.015, liqTop: 0.255, liqL: 0.262, liqR: 0.735, liqBot: 0.89};
export type IronState = {deep?: number; faded?: number; dil?: number; cloud?: number; pale?: number};
export const ITube: React.FC<{x: number; y: number; h: number; s?: IronState; o?: number}> = ({x, y, h, s = {}, o = 1}) => {
	const w = ironW(h);
	const g = IRON_G;
	const L = x + w * g.liqL, R = x + w * g.liqR, T = y + h * g.liqTop, B = y + h * g.liqBot, r = (R - L) / 2;
	const liquid = `M${L},${T} L${R},${T} L${R},${B - r} A${r},${r} 0 0 1 ${L},${B - r} Z`;
	return (
		<g opacity={o}>
			<Pic p={IRON.start} x={x} y={y} h={h} />
			{s.deep ? <Pic p={IRON.deep} x={x} y={y} h={h} o={clamp01(s.deep)} /> : null}
			{s.faded ? <Pic p={IRON.faded} x={x} y={y} h={h} o={clamp01(s.faded)} /> : null}
			{s.dil ? (
				<g opacity={clamp01(s.dil)}>
					<path d={liquid} fill="#fffaf6" opacity={0.3} />
					{/* the level sits a hair higher: the drops added volume */}
					<path d={`M${L + 2},${T - h * 0.006} L${R - 2},${T - h * 0.006}`} stroke="#e8b9a2" strokeWidth={Math.max(2, h * 0.005)} />
				</g>
			) : null}
			{s.pale ? <path d={liquid} fill="#fffaf6" opacity={0.42 * clamp01(s.pale)} /> : null}
			{s.cloud ? (
				<g opacity={clamp01(s.cloud)}>
					{/* a faint white silver chloride cloud settling at the bottom (attempt 1) */}
					<ellipse cx={(L + R) / 2} cy={B - r * 0.7} rx={r * 0.85} ry={r * 0.55} fill="#ffffff" opacity={0.75} />
					{Array.from({length: 14}, (_, i) => {
						const q = rng(40 + i);
						return <circle key={i} cx={L + 6 + (R - L - 12) * q()} cy={B - r * 1.6 - h * 0.12 * q()} r={Math.max(1.5, h * 0.004)} fill="#ffffff" opacity={0.85} />;
					})}
				</g>
			) : null}
		</g>
	);
};
export const ironMouth = (x: number, y: number, h: number): [number, number] => [x + ironW(h) * IRON_G.mouthU, y + h * IRON_G.mouthV];

// ---------- cobalt solution tube in its bath beaker (C3 crop), with stopper and bath tint ----------
export const coW = (h: number) => picW(COB.pink, h);
/** s 0 pink, 1 purple, 2 blue. */
export const CoTube: React.FC<{x: number; y: number; h: number; s: number; stopper?: number; hot?: number; ice?: number; o?: number}> = ({x, y, h, s, stopper = 0, hot = 0, ice = 0, o = 1}) => {
	const f = useCurrentFrame();
	const w = coW(h);
	// beaker water region (C3 CO_BEAKER fractions of the same crop)
	const bL = x + w * 0.085, bR = x + w * 0.919, bT = y + h * 0.54, bB = y + h * 0.905;
	const sw = w * 0.36, sh = sw * (772 / 861);
	const [mx, my] = [x + w * 0.497, y + h * 0.011];
	return (
		<g opacity={o}>
			<Pic p={COB.pink} x={x} y={y} h={h} />
			{s > 0 ? <Pic p={COB.purple} x={x} y={y} h={h} o={Math.min(1, s)} /> : null}
			{s > 1 ? <Pic p={COB.blue} x={x} y={y} h={h} o={Math.min(1, s - 1)} /> : null}
			{hot > 0.01 ? (
				<g>
					<rect x={bL} y={bT} width={bR - bL} height={bB - bT} rx={20} fill="rgba(236,110,50,0.3)" opacity={hot} />
					{[0.2, 0.8].map((u, i) => <path key={i} d={`M${bL + (bR - bL) * u},${bT - 8} q-12,-22 0,-44 q12,-22 0,-44`} fill="none" stroke="#c4582f" strokeWidth={4.5} strokeLinecap="round" opacity={hot * (0.5 + 0.5 * Math.sin(f * 0.18 + i * 2))} transform={`translate(0,${-((f * 1.1 + i * 25) % 34)})`} />)}
				</g>
			) : null}
			{ice > 0.01 ? <rect x={bL} y={bT} width={bR - bL} height={bB - bT} rx={20} fill="rgba(90,163,208,0.28)" opacity={ice} /> : null}
			{stopper > 0.01 && have(STOPPER) ? (
				<g opacity={stopper} transform={`translate(0,${(1 - stopper) * -40})`}>
					<PicH p={STOPPER} x={mx - sw / 2} y={my - sh * 0.62} h={sh} />
				</g>
			) : null}
		</g>
	);
};
/** Beaker water band of a placed CoTube (for floating ice cubes). */
export const coBath = (x: number, y: number, h: number) => {
	const w = coW(h);
	return {L: x + w * 0.085, R: x + w * 0.919, T: y + h * 0.54, B: y + h * 0.905};
};

// ---------- cobalt chloride crystals in a clamped tube, over a Bunsen ----------
export const crysW = (h: number) => picW(CRYS.pink, h);
/** Native points on the crystal plates: the crystal heap, the tube underside below it, the mouth and the inside top near the mouth. */
export const CRYS_N = {heap: [947, 588] as [number, number], under: [947, 628] as [number, number], mouth: [1700, 790] as [number, number], nearMouth: [1560, 742] as [number, number]};
export const CrystalRig: React.FC<{x: number; y: number; h: number; blue: number; burner?: number; droplets?: number; o?: number}> = ({x, y, h, blue, burner = 0, droplets = 0, o = 1}) => {
	const f = useCurrentFrame();
	const [ux, uy] = npt(CRYS.pink, x, y, h, ...CRYS_N.under);
	const [nx, ny] = npt(CRYS.pink, x, y, h, ...CRYS_N.nearMouth);
	// burner: flame tip just under the tube at the heap, base standing on the retort-stand base (native y 1745)
	const baseY = npt(CRYS.pink, x, y, h, 0, 1745)[1];
	const tipY = uy + h * 0.012;
	const bh = baseY - tipY;
	const bk = bh / BURNER.box[3];
	const bx = ux - (999 - BURNER.box[0]) * bk;
	const k = h / CRYS.pink.box[3];
	return (
		<g opacity={o}>
			<Pic p={CRYS.pink} x={x} y={y} h={h} />
			<Pic p={CRYS.blue} x={x} y={y} h={h} o={clamp01(blue)} />
			{droplets > 0.01 ? [[0, 0], [-34, 6], [28, 3], [-64, 10]].map(([dx, dy], i) => (
				<ellipse key={i} cx={nx + dx * k * 2.2} cy={ny + dy * k * 2.2} rx={7 * k * 3} ry={9 * k * 3} fill={WATER_DROP} stroke="#7aa9c9" strokeWidth={1.5} opacity={clamp01(droplets * 4 - i)} />
			)) : null}
			{burner > 0.01 ? (
				<g opacity={burner}>
					<Pic p={BURNER} x={bx} y={tipY} h={bh} />
					<ellipse cx={ux} cy={uy} rx={36 * k * 3} ry={10 * k * 3} fill="#ffb86b" opacity={0.25 + 0.1 * Math.sin(f * 0.3)} />
				</g>
			) : null}
		</g>
	);
};

// ---------- drops, crystals, steam ----------
/** Drops falling from (x, y0) to (x, y1): n drops, one every `every` frames from `at`. */
export const Drops: React.FC<{x: number; y0: number; y1: number; at: number; n?: number; every?: number; color?: string; kind?: 'liquid' | 'crystal'; r?: number}> = ({x, y0, y1, at, n = 1, every = 12, color = WATER_DROP, kind = 'liquid', r = 9}) => {
	const f = useCurrentFrame();
	return (
		<g>
			{Array.from({length: n}, (_, i) => {
				const t0 = at + i * every;
				const u = (f - t0) / 14;
				if (u < 0 || u > 1.15) return null;
				const yy = y0 + (y1 - y0) * Math.min(1, u * u);
				const o = u > 1 ? 1 - (u - 1) / 0.15 : 1;
				if (kind === 'crystal') {
					const q = rng(i + 7);
					return <g key={i} opacity={o}>{[0, 1, 2].map(j => <rect key={j} x={x - 10 + 10 * j + q() * 4} y={yy - 6 + q() * 8} width={r} height={r} fill={color} stroke={INK} strokeWidth={1.4} transform={`rotate(${q() * 60} ${x} ${yy})`} />)}</g>;
				}
				return <path key={i} d={`M${x},${yy - r * 1.6} Q${x + r},${yy - r * 0.2} ${x},${yy + r * 0.6} Q${x - r},${yy - r * 0.2} ${x},${yy - r * 1.6} Z`} fill={color} stroke="#6f9cbd" strokeWidth={2} opacity={o} />;
			})}
		</g>
	);
};
/** Steam wisps rising from (x, y) and drifting by (dx, dy). */
export const Wisp: React.FC<{x: number; y: number; at: number; out?: number; dx?: number; dy?: number; n?: number}> = ({x, y, at, out, dx = 60, dy = -90, n = 3}) => {
	const f = useCurrentFrame();
	if (f < at) return null;
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 12));
	return (
		<g opacity={o}>
			{Array.from({length: n}, (_, i) => {
				const t = ((f - at) / 50 + i / n) % 1;
				const px = x + dx * t + i * 12, py = y + dy * t;
				return <path key={i} d={`M${px},${py} q10,-14 0,-28 q-10,-14 0,-28`} fill="none" stroke="#9fb6c6" strokeWidth={4} strokeLinecap="round" opacity={Math.sin(t * Math.PI)} />;
			})}
		</g>
	);
};

// ---------- open / closed boundary ----------
/** Dashed outline (open: matter can cross) that turns solid teal when closed. */
export const Bound: React.FC<{x: number; y: number; w: number; h: number; at: number; closeAt?: number; out?: number; color?: string}> = ({x, y, w, h, at, closeAt, out, color = INK_SOFT}) => {
	const f = useCurrentFrame();
	const c = closeAt === undefined ? 0 : prog(f, closeAt, 14);
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={h} rx={28} fill="none" stroke={c > 0.5 ? TEAL : color} strokeWidth={4 + 2 * c} strokeDasharray={c > 0.5 ? undefined : '14 10'} />
		</Fade>
	);
};

// ---------- "push it, bring it back" loop ----------
/** Start and changed nodes joined by an out arrow (change) and a back arrow (reverse the change). */
export const PushLoop: React.FC<{x: number; y: number; w?: number; at: number; out?: number; changeAt: number; backAt: number; tickAt?: number; missing?: boolean; s?: number; labels?: boolean; endLabelAt?: number}> = ({x, y, w = 760, at, out, changeAt, backAt, tickAt, missing = false, s = 1, labels = true, endLabelAt}) => {
	const f = useCurrentFrame();
	const lc = prog(f, changeAt, 14), lb = prog(f, backAt, 14);
	const nw = 170 * s, nh = 66 * s;
	const ax = x + nw, bx = x + w - nw, cy = y + nh / 2;
	const col = (l: number, base: string) => hexMix('#cbbfa9', base, l);
	const fs = 34 * s;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={nw} height={nh} rx={nh / 2} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			<Sx x={x + nw / 2} y={cy + fs * 0.33} text="start" size={fs} anchor="middle" hand at={-100} />
			<rect x={bx} y={y} width={nw} height={nh} rx={nh / 2} fill="#fffdf8" stroke={INK} strokeWidth={3} />
			<Sx x={bx + nw / 2} y={cy + fs * 0.33} text="changed" size={fs} anchor="middle" hand at={-100} />
			{/* out arrow (over the top) */}
			<path d={`M${ax + 10},${cy - 16 * s} Q${(ax + bx) / 2},${cy - 120 * s} ${bx - 10},${cy - 16 * s}`} fill="none" stroke={col(lc, '#1f6fb2')} strokeWidth={6 * s} strokeLinecap="round" />
			<path d={`M${bx - 34 * s},${cy - 40 * s} L${bx - 10},${cy - 16 * s} L${bx - 42 * s},${cy - 8 * s}`} fill="none" stroke={col(lc, '#1f6fb2')} strokeWidth={6 * s} strokeLinecap="round" strokeLinejoin="round" />
			{labels ? <Sx x={(ax + bx) / 2} y={cy - 86 * s} text="change" size={fs} color={col(lc, '#1f6fb2')} anchor="middle" hand at={-100} /> : null}
			{/* back arrow (underneath) */}
			<path d={`M${bx - 10},${cy + 16 * s} Q${(ax + bx) / 2},${cy + 120 * s} ${ax + 10},${cy + 16 * s}`} fill="none" stroke={col(lb, TEAL)} strokeWidth={6 * s} strokeLinecap="round" strokeDasharray={missing && lb < 0.5 ? `${14 * s} ${12 * s}` : undefined} />
			<path d={`M${ax + 34 * s},${cy + 40 * s} L${ax + 10},${cy + 16 * s} L${ax + 42 * s},${cy + 8 * s}`} fill="none" stroke={col(lb, TEAL)} strokeWidth={6 * s} strokeLinecap="round" strokeLinejoin="round" />
			{labels ? <Sx x={(ax + bx) / 2} y={cy + 106 * s} text="reverse the change" size={fs} color={col(lb, TEAL)} anchor="middle" hand at={-100} /> : null}
			{missing ? <Sx x={(ax + bx) / 2} y={cy + 150 * s} text="missing" size={fs} color={HAZ} anchor="middle" hand at={at + 6} out={backAt} /> : null}
			{labels && !missing ? <Sx x={(ax + bx) / 2} y={cy + 150 * s} text="start comes back?" size={fs * 0.9} color={INK_SOFT} anchor="middle" hand at={endLabelAt ?? at + 10} /> : null}
			{tickAt !== undefined ? <Tick x={x + nw / 2} y={y - 34 * s} at={tickAt} s={44 * s} /> : null}
		</Fade>
	);
};

// ---------- six-tube row on a white tile ----------
export type RowG = {x0: number; dx: number; y: number; h: number};
export const rowX = (g: RowG, i: number) => g.x0 + i * g.dx;
export const rowC = (g: RowG, i: number): [number, number] => [g.x0 + i * g.dx + ironW(g.h) / 2, g.y];
/** A plain white tile standing behind the tubes (the comparison background). */
export const TileBack: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; pulse?: number; label?: boolean}> = ({x, y, w, h, at, out, pulse, label = true}) => {
	const f = useCurrentFrame();
	const s = pulse === undefined ? 1 : pulseAt(f, pulse, 0.03, 30);
	return (
		<Fade at={at} out={out}>
			<g transform={`translate(${x + w / 2},${y + h / 2}) scale(${s}) translate(${-(x + w / 2)},${-(y + h / 2)})`}>
				<rect x={x + 8} y={y + 12} width={w} height={h} rx={18} fill="rgba(60,45,20,0.10)" />
				<rect x={x} y={y} width={w} height={h} rx={18} fill="#ffffff" stroke="#d8cfbf" strokeWidth={3} />
				{label ? <Sx x={x + w - 10} y={y - 12} text="white tile" size={28} color={INK_SOFT} anchor="end" hand at={-100} /> : null}
			</g>
		</Fade>
	);
};
export type TubeSpec = {s?: IronState; o?: number; pulse?: number; dim?: number};
/** The numbered tube row. `tubes` gives each tube's state; numbers write under the tubes. */
export const TubeRow: React.FC<{g: RowG; at: number; tubes: TubeSpec[]; numbers?: boolean; slide?: number; tile?: boolean; tilePulse?: number; numSize?: number}> = ({g, at, tubes, numbers = true, slide, tile = true, tilePulse, numSize = 36}) => {
	const f = useCurrentFrame();
	const w = ironW(g.h);
	const span = (tubes.length - 1) * g.dx + w;
	return (
		<g>
			{tile ? <TileBack x={g.x0 - 40} y={g.y - g.h * 0.06} w={span + 80} h={g.h * 1.12} at={at} pulse={tilePulse} label={g.h > 330} /> : null}
			{tubes.map((t, i) => {
				const a = slide === undefined ? at : slide + i * 5;
				const e = smooth(prog(f, a, 20));
				if (e <= 0.01) return null;
				const x = rowX(g, i) + (1 - e) * 160;
				const s = t.pulse === undefined ? 1 : pulseAt(f, t.pulse, 0.07, 26);
				const cx = x + w / 2, cy = g.y + g.h / 2;
				return (
					<g key={i} opacity={e * (t.o ?? 1) * (1 - 0.6 * (t.dim ?? 0))} transform={`translate(${cx},${cy}) scale(${s}) translate(${-cx},${-cy})`}>
						<ITube x={x} y={g.y} h={g.h} s={t.s} />
						{numbers ? <Sx x={x + w / 2} y={g.y + g.h + numSize + 8} text={String(i + 1)} size={numSize} color={i === 0 ? TEAL : INK} anchor="middle" weight={800} at={-100} /> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Teal reference tag with a padlock over a tube. */
export const RefTag: React.FC<{x: number; y: number; at: number; text?: string; size?: number; out?: number}> = ({x, y, at, text = '1: reference, never changed', size = 30, out}) => {
	const w = mw(text, size, true) + 76;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={w} height={size + 26} rx={(size + 26) / 2} fill="#e5f2ec" stroke={TEAL} strokeWidth={3} />
			<rect x={x + 18} y={y + (size + 26) / 2 - 4} width={26} height={20} rx={4} fill={TEAL} />
			<path d={`M${x + 23},${y + (size + 26) / 2 - 4} L${x + 23},${y + (size + 26) / 2 - 11} A8,8 0 0 1 ${x + 39},${y + (size + 26) / 2 - 11} L${x + 39},${y + (size + 26) / 2 - 4}`} fill="none" stroke={TEAL} strokeWidth={4} />
			<Sx x={x + 56} y={y + size + 5} text={text} size={size} color={TEAL} hand at={-100} />
		</Fade>
	);
};

// ---------- swatch comparison bar ----------
export type Sw = {c: string; label: string};
export const SwatchBar: React.FC<{x: number; y: number; at: number; items: Sw[]; steps?: {from: number; text: string; at: number; color?: string; big?: boolean}[]; sw?: number; gap?: number; out?: number; title?: string}> = ({x, y, at, items, steps = [], sw = 120, gap = 70, out, title}) => (
	<Fade at={at} out={out}>
		{title ? <Sx x={x} y={y - 22} text={title} size={30} color={INK_SOFT} hand at={-100} /> : null}
		{items.map((it, i) => (
			<g key={i}>
				<rect x={x + i * (sw + gap)} y={y} width={sw} height={sw * 0.8} rx={14} fill={it.c} stroke={INK} strokeWidth={2.5} />
				<Sx x={x + i * (sw + gap) + sw / 2} y={y + sw * 0.8 + 36} text={it.label} size={28} anchor="middle" weight={700} at={-100} />
			</g>
		))}
		{steps.map((s, i) => {
			const x1 = x + s.from * (sw + gap) + sw / 2, x2 = x1 + sw + gap;
			const c = s.color ?? INK_SOFT;
			return (
				<g key={'s' + i}>
					<DrawPath d={`M${x1},${y - 8} Q${(x1 + x2) / 2},${y - (s.big ? 70 : 34)} ${x2},${y - 8}`} at={s.at} dur={16} color={c} width={s.big ? 6 : 4} />
					<Sx x={(x1 + x2) / 2} y={y - (s.big ? 60 : 32)} text={s.text} size={s.big ? 32 : 26} color={c} anchor="middle" hand at={s.at + 8} />
				</g>
			);
		})}
	</Fade>
);

// ---------- cards and tables ----------
export const Card: React.FC<{x: number; y: number; w: number; h: number; at: number; out?: number; stroke?: string; fill?: string; children?: React.ReactNode}> = ({x, y, w, h, at, out, stroke = 'rgba(60,45,20,0.2)', fill = '#fffdf8', children}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={h} rx={22} fill={fill} stroke={stroke} strokeWidth={3} />
		{children}
	</Fade>
);
export type Cell = string | string[];
export type TRow = {at: number; cells: Cell[]; colors?: (string | undefined)[]; icon?: React.ReactNode; lit?: [number, number]};
/** A coded table: header, then rows that write on at their cues. Cells may be several lines. */
export const Table: React.FC<{x: number; y: number; cols: number[]; head: string[]; rows: TRow[]; at: number; out?: number; rowH?: number; size?: number; headSize?: number; headColors?: string[]; iconW?: number}> = ({x, y, cols, head, rows, at, out, rowH = 60, size = 28, headSize = 30, headColors = [], iconW = 0}) => {
	const f = useCurrentFrame();
	const W = cols.reduce((a, b) => a + b, 0);
	const xs = cols.map((_, i) => x + cols.slice(0, i).reduce((a, b) => a + b, 0));
	const headH = headSize + 30;
	return (
		<Fade at={at} out={out}>
			<rect x={x} y={y} width={W} height={headH + rows.length * rowH} rx={16} fill="#fffdf8" stroke="rgba(60,45,20,0.22)" strokeWidth={3} />
			<rect x={x} y={y} width={W} height={headH} rx={16} fill={'#efe6d6'} />
			{head.map((t, i) => <Sx key={i} x={xs[i] + 16} y={y + headH / 2 + headSize * 0.34} text={t} size={headSize} color={headColors[i] ?? INK} hand at={-100} />)}
			{rows.map((r, j) => {
				const ry = y + headH + j * rowH;
				const o = prog(f, r.at, 12);
				if (o <= 0.01) return null;
				const glow = r.lit ? prog(f, r.lit[0], 10) * (1 - prog(f, r.lit[1], 12)) : 0;
				return (
					<g key={j} opacity={o}>
						{glow > 0.01 ? <rect x={x + 4} y={ry + 2} width={W - 8} height={rowH - 4} rx={10} fill="#f6d77a" opacity={0.45 * glow} /> : null}
						<path d={`M${x + 10},${ry} L${x + W - 10},${ry}`} stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
						{r.icon}
						{r.cells.map((c, i) => {
							const lines = Array.isArray(c) ? c : [c];
							const lh = size * 1.18;
							const top = ry + rowH / 2 - ((lines.length - 1) * lh) / 2 + size * 0.34;
							return lines.map((ln, k) => <Sx key={i + '-' + k} x={xs[i] + 16 + (i === 0 ? iconW : 0)} y={top + k * lh} text={ln} size={size} color={r.colors?.[i] ?? INK} weight={i === 0 ? 700 : 600} at={-100} />);
						})}
					</g>
				);
			})}
		</Fade>
	);
};

// ---------- small icons ----------
/** Coded clock face whose hand sweeps a full turn between `at` and `at + dur`. */
export const Clock: React.FC<{cx: number; cy: number; r: number; at: number; dur?: number; out?: number; label?: string}> = ({cx, cy, r, at, dur = 60, out, label}) => {
	const f = useCurrentFrame();
	const a = -Math.PI / 2 + 2 * Math.PI * prog(f, at, dur);
	return (
		<Fade at={at - 6} out={out}>
			<circle cx={cx} cy={cy} r={r} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			{Array.from({length: 12}, (_, i) => { const t = (i / 12) * Math.PI * 2; return <path key={i} d={`M${cx + Math.cos(t) * r * 0.8},${cy + Math.sin(t) * r * 0.8} L${cx + Math.cos(t) * r * 0.92},${cy + Math.sin(t) * r * 0.92}`} stroke={INK_SOFT} strokeWidth={3} />; })}
			<path d={`M${cx},${cy} L${cx},${cy - r * 0.5}`} stroke={INK} strokeWidth={5} strokeLinecap="round" />
			<path d={`M${cx},${cy} L${cx + Math.cos(a) * r * 0.75},${cy + Math.sin(a) * r * 0.75}`} stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />
			<circle cx={cx} cy={cy} r={5} fill={INK} />
			{label ? <Sx x={cx} y={cy + r + 40} text={label} size={32} color={INK_SOFT} anchor="middle" hand at={at} /> : null}
		</Fade>
	);
};
/** Abstract white glare (light burst), no drawn flame. */
export const Glare: React.FC<{cx: number; cy: number; r: number; at: number; out: number}> = ({cx, cy, r, at, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 8) * (1 - prog(f, out, 16));
	if (o <= 0.01) return null;
	const fl = 0.85 + 0.15 * Math.sin(f * 0.9);
	return (
		<g opacity={o}>
			<defs>
				<radialGradient id="p01-glare">
					<stop offset="0%" stopColor="#ffffff" stopOpacity={1} />
					<stop offset="45%" stopColor="#fffbe8" stopOpacity={0.85} />
					<stop offset="100%" stopColor="#fff6d0" stopOpacity={0} />
				</radialGradient>
			</defs>
			<circle cx={cx} cy={cy} r={r * fl} fill="url(#p01-glare)" />
			{Array.from({length: 12}, (_, i) => { const t = (i / 12) * Math.PI * 2 + f * 0.01; return <path key={i} d={`M${cx + Math.cos(t) * r * 0.35},${cy + Math.sin(t) * r * 0.35} L${cx + Math.cos(t) * r * 0.95 * fl},${cy + Math.sin(t) * r * 0.95 * fl}`} stroke="#fff3b0" strokeWidth={6} strokeLinecap="round" opacity={0.8} />; })}
		</g>
	);
};
/** One-way arrow for an equation line (open systems and irreversible reactions). */
export const OneWay: React.FC<{x: number; y: number; w: number; at: number; color?: string}> = ({x, y, w, at, color = INK}) => (
	<Fade at={at}>
		<path d={`M${x},${y} L${x + w},${y} M${x + w - 14},${y - 11} L${x + w},${y} L${x + w - 14},${y + 11}`} fill="none" stroke={color} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" />
	</Fade>
);
/** Text then a one-way arrow then text, laid out with measured widths. */
export const OneWayLine: React.FC<{x: number; y: number; left: string; right: string; size?: number; at: number; color?: string; prefix?: string; prefixColor?: string}> = ({x, y, left, right, size = 34, at, color = INK, prefix, prefixColor = INK_SOFT}) => {
	const pw = prefix ? mw(prefix, size, true) + size * 0.4 : 0;
	const lw = mw(left, size);
	const ax = x + pw + lw + size * 0.35, aw = size * 1.6;
	return (
		<g>
			{prefix ? <Sx x={x} y={y} text={prefix} size={size} color={prefixColor} hand at={at} /> : null}
			<Sx x={x + pw} y={y} text={left} size={size} color={color} at={at} />
			<OneWay x={ax} y={y - size * 0.32} w={aw} at={at} color={color} />
			<Sx x={ax + aw + size * 0.35} y={y} text={right} size={size} color={color} at={at} />
		</g>
	);
};
/** Small sideways arrow under an equation: shift right (blue) or left (amber). */
export const ShiftArrow: React.FC<{x: number; y: number; dir: 'right' | 'left'; at: number; w?: number; out?: number}> = ({x, y, dir, at, w = 220, out}) => {
	const f = useCurrentFrame();
	const e = smooth(prog(f, at, 18));
	const c = dir === 'right' ? '#1f6fb2' : AMBER;
	const d = dir === 'right' ? 1 : -1;
	const x0 = x - (d * w) / 2, x1 = x0 + d * w * e;
	return (
		<Fade at={at} out={out}>
			<path d={`M${x0},${y} L${x1},${y} M${x1 - d * 18},${y - 14} L${x1},${y} L${x1 - d * 18},${y + 14}`} fill="none" stroke={c} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
			<Sx x={x} y={y + 44} text={dir === 'right' ? 'shift right' : 'shift left'} size={32} color={dir === 'right' ? '#1f6fb2' : AMBER_INK} anchor="middle" hand at={at + 6} />
		</Fade>
	);
};
/** A hand-written line with an optional pen tick before it. */
export const Note: React.FC<{x: number; y: number; text: string; at: number; size?: number; color?: string; out?: number; hand?: boolean; weight?: number}> = ({x, y, text, at, size = 34, color = INK, out, hand = true, weight}) => <Sx x={x} y={y} text={text} size={size} color={color} hand={hand} at={at} out={out} weight={weight} />;
/** Counter tag ("10 drops") under a tube. */
export const DropCount: React.FC<{x: number; y: number; at: number; text?: string; out?: number}> = ({x, y, at, text = '10 drops', out}) => (
	<Fade at={at} out={out}>
		<rect x={x - 70} y={y - 34} width={140} height={46} rx={23} fill="#eef5fa" stroke="#6f9cbd" strokeWidth={2.5} />
		<Sx x={x} y={y} text={text} size={28} color="#2f6f9e" anchor="middle" hand at={-100} />
	</Fade>
);
export {AMBER, AMBER_INK, INK, INK_SOFT, GREEN, HAZ, SW_STOCK, DROPPER, DrawPath};
