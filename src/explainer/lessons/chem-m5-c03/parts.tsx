// Drawing parts for the C3 lesson: species lens, painted/coded tubes, net arrow, stage table, reaction chip.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AMBER, AMBER_INK, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT, Plate, prog, rng} from '../../kit';
import {Bars, BARS, Pill} from '../chem-m5-c02/parts';
import {ESC, Fade, Overlay, SvgText, TEAL} from '../chem-m5-c01/parts';
import {CO_BLUE, CO_PINK, CO_PURPLE, FLASK_EQ, HAVE, IRON_DEEP, IRON_START, haveCobalt, haveIron} from './assets';
import {ChemH, ChemSvg, FE, HEAT, ICE, RED, SCN, SCN_INK, hexMix} from './common';

export {Bars, BARS, Pill, ESC, Fade, Overlay, SvgText, TEAL};
export const FWD = ESC;
export const REV = AMBER;
const smooth = (u: number) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));

// ---------- particle lens with species ----------
export type Species = {color: string; r: number};
export type LensGhost = {f0: number; kind: 'join' | 'split'; slot: number};
export const ghostTrain = (from: number, to: number, period: number, kind: 'join' | 'split', slots: number[]): LensGhost[] => {
	const out: LensGhost[] = [];
	let i = 0;
	for (let t = from; t < to; t += period, i++) out.push({f0: Math.round(t), kind, slot: slots[i % slots.length]});
	return out;
};
type SlotP = {p1: number; p2: number; p3: number; p4: number; w1: number; w2: number; w3: number; w4: number};
const slotCache = new Map<string, SlotP[]>();
const slotsFor = (seed: number, type: number): SlotP[] => {
	const k = `${seed}-${type}`;
	let s = slotCache.get(k);
	if (!s) {
		const r = rng(seed * 31 + type * 7 + 3);
		s = Array.from({length: 24}, () => ({p1: r() * 6.28, p2: r() * 6.28, p3: r() * 6.28, p4: r() * 6.28, w1: 0.012 + r() * 0.02, w2: 0.012 + r() * 0.02, w3: 0.02 + r() * 0.03, w4: 0.02 + r() * 0.03}));
		slotCache.set(k, s);
	}
	return s;
};
export const slotXY = (seed: number, type: number, i: number, f: number, cx: number, cy: number, r: number) => {
	const s = slotsFor(seed, type)[i];
	const A = r * 0.62;
	return {x: cx + A * (0.62 * Math.sin(f * s.w1 + s.p1) + 0.38 * Math.sin(f * s.w3 + s.p3)), y: cy + A * (0.62 * Math.sin(f * s.w2 + s.p2) + 0.38 * Math.sin(f * s.w4 + s.p4))};
};

export const SpeciesLens: React.FC<{cx: number; cy: number; r: number; counts: (f: number) => number[]; species: Species[]; rxn?: [number, number, number]; seed?: number; ghosts?: LensGhost[]; reveal?: number; tint?: string}> = ({cx, cy, r, counts, species, rxn = [0, 1, 2], seed = 4, ghosts = [], reveal = 1, tint = '#fffdf8'}) => {
	const f = useCurrentFrame();
	const c = counts(f).map(Math.round);
	const age = (t: number, idx: number) => {
		for (let k = 1; k <= 12; k++) if (Math.round(counts(f - k)[t]) <= idx) return k - 1;
		return 99;
	};
	return (
		<g opacity={reveal}>
			<circle cx={cx} cy={cy} r={r} fill={tint} stroke={INK} strokeWidth={6} />
			<path d={`M${cx - r * 0.74},${cy - r * 0.46} A${r * 0.88},${r * 0.88} 0 0 1 ${cx - r * 0.1},${cy - r * 0.86}`} fill="none" stroke="#ffffff" strokeOpacity={0.7} strokeWidth={9} strokeLinecap="round" />
			{species.map((sp, t) => Array.from({length: c[t]}, (_, i) => {
				const p = slotXY(seed, t, i, f, cx, cy, r);
				const g = Math.min(1, age(t, i) / 10);
				return <circle key={`s${t}-${i}`} cx={p.x} cy={p.y} r={sp.r * (0.4 + 0.6 * g)} fill={sp.color} stroke={INK} strokeWidth={2.5} />;
			}))}
			{ghosts.map((g, gi) => {
				const a = f - g.f0, dur = 24;
				if (a < 0 || a > dur) return null;
				const u = a / dur;
				const [ia, ib, ic] = rxn;
				const p = slotXY(seed, ic, g.slot, f, cx, cy, r);
				const ang = g.slot * 2.1;
				const dx = Math.cos(ang) * 46, dy = Math.sin(ang) * 46;
				if (g.kind === 'split') {
					return (
						<g key={gi} opacity={1 - u * u}>
							<circle cx={p.x} cy={p.y} r={14 + 30 * u} fill="none" stroke={ESC} strokeWidth={5} opacity={1 - u} />
							<circle cx={p.x + dx * u} cy={p.y + dy * u} r={species[ia].r} fill={species[ia].color} stroke={INK} strokeWidth={2.5} />
							<circle cx={p.x - dx * u} cy={p.y - dy * u} r={species[ib].r} fill={species[ib].color} stroke={INK} strokeWidth={2.5} />
						</g>
					);
				}
				const w = 1 - smooth(u), k = (u - 0.8) * 5;
				return (
					<g key={gi}>
						<circle cx={p.x + dx * w} cy={p.y + dy * w} r={species[ia].r} fill={species[ia].color} stroke={INK} strokeWidth={2.5} opacity={u < 0.85 ? 1 : 0} />
						<circle cx={p.x - dx * w} cy={p.y - dy * w} r={species[ib].r} fill={species[ib].color} stroke={INK} strokeWidth={2.5} opacity={u < 0.85 ? 1 : 0} />
						{u > 0.8 ? <><circle cx={p.x} cy={p.y} r={species[ic].r} fill={species[ic].color} stroke={INK} strokeWidth={2.5} opacity={1 - k} /><circle cx={p.x} cy={p.y} r={14 + 40 * k} fill="none" stroke={AMBER} strokeWidth={6} opacity={1 - k} /></> : null}
					</g>
				);
			})}
		</g>
	);
};
/** Moving pen rings around chosen particles of one species. */
export const SlotRings: React.FC<{cx: number; cy: number; r: number; type: number; slots: number[]; at: number; out?: number; color?: string; seed?: number}> = ({cx, cy, r, type, slots, at, out, color = ESC, seed = 4}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12) * (out === undefined ? 1 : 1 - prog(f, out, 10));
	if (o <= 0.01) return null;
	return <g opacity={o}>{slots.map(i => { const p = slotXY(seed, type, i, f, cx, cy, r); return <circle key={i} cx={p.x} cy={p.y} r={28} fill="none" stroke={color} strokeWidth={5} strokeDasharray="10 7" />; })}</g>;
};

export const LENS = {cx: 430, cy: 590, r: 235};

/** Iron system species and key. */
export const IRON_SP: Species[] = [{color: FE, r: 15}, {color: SCN, r: 12}, {color: RED, r: 15}];
export const IronKey: React.FC<{x: number; y: number; at: number; scale?: boolean; counts?: (f: number) => number[]; countsAt?: number}> = ({x, y, at, scale = true, counts, countsAt = -100}) => {
	const f = useCurrentFrame();
	const c = counts ? counts(f).map(Math.round) : null;
	const show = c !== null && f >= countsAt;
	const names = ['Fe^3+', 'SCN^-', 'FeSCN^2+'];
	const cols = [FE, SCN, RED];
	const rr = [14, 12, 14];
	const dx = [0, 175, 350];
	return (
		<Fade at={at}>
			{names.map((n, i) => (
				<g key={n}>
					<circle cx={x + dx[i]} cy={y} r={rr[i]} fill={cols[i]} stroke={INK} strokeWidth={2.5} />
					<ChemSvg x={x + dx[i] + 24} y={y + 12} text={show ? `${c![i]} ${n}` : n} size={32} color={INK} />
				</g>
			))}
			{scale ? <SvgText x={x - 14} y={y + 56} text="1 dot = 1 unit (made-up)" size={40} color={INK_SOFT} /> : null}
		</Fade>
	);
};

// ---------- colour strip ----------
export const ColourStrip: React.FC<{x: number; y: number; w: number; from: string; to: string; t: number; at: number; label?: string; h?: number; mark?: number}> = ({x, y, w, from, to, t, at, label = 'tube colour', h = 34, mark}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const id = `cs-${x}-${y}`;
	return (
		<g opacity={o}>
			<text x={x - 18} y={y + h - 4} textAnchor="end" fill={INK_SOFT} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38}}>{label}</text>
			<defs><linearGradient id={id} x1="0" x2="1"><stop offset="0" stopColor={from} /><stop offset="1" stopColor={to} /></linearGradient></defs>
			<rect x={x} y={y} width={w} height={h} rx={h / 2} fill={`url(#${id})`} stroke={INK} strokeWidth={3} />
			{mark !== undefined ? <path d={`M${x + w * mark},${y - 8} L${x + w * mark},${y + h + 8}`} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="5 5" /> : null}
			<circle cx={x + w * Math.max(0, Math.min(1, t))} cy={y + h / 2} r={h * 0.72} fill={hexMix(from, to, t)} stroke={INK} strokeWidth={4} />
		</g>
	);
};

// ---------- painted tubes with coded stand-ins ----------
export const IRON_CROP: [number, number, number, number] = [452, 195, 378, 1340];
export const IRON_NAT: [number, number] = [1280, 1792];
export const ironW = (h: number) => (IRON_CROP[2] / IRON_CROP[3]) * h;
export const IRON_PALE = '#f1c9b6', IRON_DEEPC = '#c23a2c';
/** t 0..1: pale red to deep red. Painted when present, a clean coded test tube otherwise. */
export const IronTube: React.FC<{x: number; y: number; h: number; t: number; opacity?: number}> = ({x, y, h, t, opacity = 1}) => {
	const w = ironW(h);
	if (haveIron()) {
		return (
			<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity}}>
				<Plate src={IRON_START} natural={IRON_NAT} crop={IRON_CROP} width={w} style={{left: 0, top: 0}} />
				{t > 0 ? <Plate src={IRON_DEEP} natural={IRON_NAT} crop={IRON_CROP} width={w} style={{left: 0, top: 0, opacity: Math.min(1, t)}} /> : null}
			</div>
		);
	}
	const tx = w * 0.246, tw = w * 0.514, topL = h * 0.26, bot = h * 0.89;
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, opacity, overflow: 'visible'}}>
			<path d={`M${tx},${h * 0.03} L${tx},${bot - tw / 2} A${tw / 2},${tw / 2} 0 0 0 ${tx + tw},${bot - tw / 2} L${tx + tw},${h * 0.03}`} fill="#eef5fa" fillOpacity={0.5} stroke={INK} strokeWidth={4} />
			<path d={`M${tx + 3},${topL} L${tx + 3},${bot - tw / 2} A${tw / 2 - 3},${tw / 2 - 3} 0 0 0 ${tx + tw - 3},${bot - tw / 2} L${tx + tw - 3},${topL} Z`} fill={hexMix(IRON_PALE, IRON_DEEPC, t)} />
			<path d={`M${tx + 14},${topL + 10} L${tx + 14},${bot - tw / 2 - 10}`} stroke="#fff" strokeOpacity={0.6} strokeWidth={6} strokeLinecap="round" />
			<path d={`M${w * 0.1},${h * 0.915} Q${w * 0.5},${h * 0.99} ${w * 0.9},${h * 0.915}`} fill="none" stroke={SCN_INK} strokeWidth={4} />
			<path d={`M${tx - 6},${h * 0.84} L${tx - 6},${h * 0.93} M${tx + tw + 6},${h * 0.84} L${tx + tw + 6},${h * 0.93}`} stroke={SCN_INK} strokeWidth={4} strokeLinecap="round" />
		</svg>
	);
};

export const CO_CROP: [number, number, number, number] = [300, 185, 682, 1385];
export const CO_NAT: [number, number] = [1280, 1792];
export const coW = (h: number) => (CO_CROP[2] / CO_CROP[3]) * h;
export const CO_PINKC = '#eaa3c4', CO_PURPLEC = '#9b6fd0', CO_BLUEC = '#3d6fd6';
export const coColour = (s: number) => (s <= 1 ? hexMix(CO_PINKC, CO_PURPLEC, s) : hexMix(CO_PURPLEC, CO_BLUEC, s - 1));
/** Beaker region (fractions of the plate): water level and walls. */
export const CO_BEAKER = {left: 0.073, right: 0.931, water: 0.54, bottom: 0.925, top: 0.343};
/** s 0 pink, 1 purple, 2 blue. */
export const CobaltTube: React.FC<{x: number; y: number; h: number; s: number; opacity?: number}> = ({x, y, h, s, opacity = 1}) => {
	const w = coW(h);
	if (haveCobalt()) {
		return (
			<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity}}>
				<Plate src={CO_PINK} natural={CO_NAT} crop={CO_CROP} width={w} style={{left: 0, top: 0}} />
				{s > 0 ? <Plate src={CO_PURPLE} natural={CO_NAT} crop={CO_CROP} width={w} style={{left: 0, top: 0, opacity: Math.min(1, s)}} /> : null}
				{s > 1 ? <Plate src={CO_BLUE} natural={CO_NAT} crop={CO_CROP} width={w} style={{left: 0, top: 0, opacity: Math.min(1, s - 1)}} /> : null}
			</div>
		);
	}
	const tx = w * 0.364, tw = w * 0.259, liq = h * 0.231, bot = h * 0.866;
	const b = CO_BEAKER;
	return (
		<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{position: 'absolute', left: x, top: y, opacity, overflow: 'visible'}}>
			<path d={`M${w * b.left},${h * b.top} L${w * (b.left + 0.03)},${h * b.bottom} Q${w * 0.5},${h * 0.96} ${w * (b.right - 0.03)},${h * b.bottom} L${w * b.right},${h * b.top}`} fill="#eef5fa" fillOpacity={0.45} stroke={INK} strokeWidth={4} />
			<path d={`M${w * (b.left + 0.01)},${h * b.water} L${w * (b.left + 0.03)},${h * b.bottom} Q${w * 0.5},${h * 0.955} ${w * (b.right - 0.03)},${h * b.bottom} L${w * (b.right - 0.01)},${h * b.water} Z`} fill="#cfe3f1" fillOpacity={0.55} />
			<path d={`M${tx},${h * 0.015} L${tx},${bot - tw / 2} A${tw / 2},${tw / 2} 0 0 0 ${tx + tw},${bot - tw / 2} L${tx + tw},${h * 0.015}`} fill="#eef5fa" fillOpacity={0.5} stroke={INK} strokeWidth={4} />
			<path d={`M${tx + 3},${liq} L${tx + 3},${bot - tw / 2} A${tw / 2 - 3},${tw / 2 - 3} 0 0 0 ${tx + tw - 3},${bot - tw / 2} L${tx + tw - 3},${liq} Z`} fill={coColour(s)} />
		</svg>
	);
};
/** Tint over the beaker water: hot (warm glow) or ice (pale blue with cubes). amount 0..1. */
export const BathTint: React.FC<{x: number; y: number; h: number; kind: 'hot' | 'ice'; amount: number}> = ({x, y, h, kind, amount}) => {
	const f = useCurrentFrame();
	const w = coW(h), b = CO_BEAKER;
	if (amount <= 0.01) return null;
	const L = x + w * (b.left + 0.012), R = x + w * (b.right - 0.012), T = y + h * b.water, B = y + h * (b.bottom - 0.02);
	return (
		<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', left: 0, top: 0, overflow: 'visible', pointerEvents: 'none'}}>
			<rect x={L} y={T} width={R - L} height={B - T} rx={26} fill={kind === 'hot' ? 'rgba(236,110,50,0.34)' : 'rgba(90,163,208,0.34)'} opacity={amount} />
			{kind === 'hot'
				? [0.25, 0.5, 0.75].map((u, i) => <path key={i} d={`M${L + (R - L) * u},${T - 6} q-14,-26 0,-52 q14,-26 0,-52`} fill="none" stroke={HEAT} strokeWidth={5} strokeLinecap="round" opacity={amount * (0.5 + 0.5 * Math.sin(f * 0.18 + i * 2))} transform={`translate(0,${-((f * 1.2 + i * 30) % 40)})`} />)
				: [[0.18, 0.2], [0.82, 0.15], [0.2, 0.7], [0.8, 0.62]].map(([u, v], i) => <rect key={i} x={L + (R - L) * u - 24} y={T + (B - T) * v - 24 + Math.sin(f * 0.06 + i) * 3} width={48} height={48} rx={9} fill="#e9f6fc" stroke={ICE} strokeWidth={3} opacity={amount} transform={`rotate(${i * 12 - 18} ${L + (R - L) * u} ${T + (B - T) * v})`} />)}
		</svg>
	);
};
export const Thermometer: React.FC<{x: number; y: number; h: number; temp: number; at: number; label?: string}> = ({x, y, h, temp, at, label}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const span = h - 70;
	const level = Math.max(0, Math.min(80, temp)) / 80;
	const col = temp >= 30 ? HEAT : temp <= 12 ? ICE : '#a05a8a';
	return (
		<g opacity={o}>
			<rect x={x - 16} y={y} width={32} height={span + 20} rx={16} fill="#fffdf8" stroke={INK} strokeWidth={4} />
			<circle cx={x} cy={y + span + 44} r={30} fill={col} stroke={INK} strokeWidth={4} />
			<rect x={x - 8} y={y + 12 + span * (1 - level)} width={16} height={span * level + 16} rx={8} fill={col} />
			{[0, 20, 40, 60, 80].map(v => <g key={v}><path d={`M${x + 18},${y + 12 + span * (1 - v / 80)} L${x + 34},${y + 12 + span * (1 - v / 80)}`} stroke={INK_SOFT} strokeWidth={3} /><text x={x + 42} y={y + 12 + span * (1 - v / 80) + 8} fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 24}}>{v}</text></g>)}
			<text x={x} y={y + span + 124} textAnchor="middle" fill={col} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 52}}>{label ?? `${Math.round(temp)} °C`}</text>
		</g>
	);
};
export const HeatIcon: React.FC<{x: number; y: number; dir: 'in' | 'out' | 'none'; at: number; size?: number; color?: string}> = ({x, y, dir, at, size = 1, color = HEAT}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.01) return null;
	const wave = (dx: number) => `M${dx},56 q-12,-18 0,-36 q12,-18 0,-36 q-12,-18 0,-36`;
	return (
		<g opacity={o} transform={`translate(${x},${y}) scale(${size})`}>
			{[-30, 0, 30].map(d => <path key={d} d={wave(d)} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />)}
			{dir === 'in' ? <path d="M-44,90 L0,126 L44,90" fill="none" stroke={color} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" /> : null}
			{dir === 'out' ? <path d="M-44,-96 L0,-132 L44,-96" fill="none" stroke={color} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" /> : null}
		</g>
	);
};

// ---------- horizontal net arrow ----------
export const NETH = {xc: 890, y: 330};
export const NetArrowH: React.FC<{gap: number; at: number; lines?: {text: string; at: number; color?: string}[]; zeroAt?: number; scale?: number}> = ({gap, at, lines = [], zeroAt, scale = 7}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const {xc, y} = NETH;
	const zero = zeroAt !== undefined && f >= zeroAt;
	const len = gap * scale;
	const dir = len >= 0 ? 1 : -1;
	const col = dir > 0 ? FWD : AMBER;
	const ink = dir > 0 ? FWD : AMBER_INK;
	return (
		<g opacity={o}>
			<path d={`M${xc},${y - 24} L${xc},${y + 24}`} stroke={INK_SOFT} strokeWidth={4} strokeLinecap="round" />
			{Math.abs(len) > 6 && !zero ? (
				<>
					<path d={`M${xc},${y} L${xc + len - dir * 14},${y}`} stroke={col} strokeWidth={16} strokeLinecap="round" fill="none" />
					<path d={`M${xc + len - dir * 30},${y - 26} L${xc + len + dir * 6},${y} L${xc + len - dir * 30},${y + 26} Z`} fill={col} stroke={col} strokeWidth={6} strokeLinejoin="round" />
				</>
			) : null}
			{zero ? (
				<g opacity={prog(f, zeroAt!, 14)}>
					<circle cx={xc} cy={y} r={34} fill="#fffdf8" stroke={TEAL} strokeWidth={6} />
					<path d={`M${xc - 18},${y} L${xc + 18},${y}`} stroke={TEAL} strokeWidth={7} strokeLinecap="round" />
					<text x={xc} y={y + 84} textAnchor="middle" fill={TEAL} style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 46}}>net change 0</text>
				</g>
			) : lines.map((l, i) => <SvgText key={i} x={xc} y={y + 76 + i * 44} text={l.text} size={40} color={l.color ?? ink} anchor="middle" at={l.at} />)}
		</g>
	);
};

// ---------- stage table ----------
export type TRow = {label: string; at: number; cells: [string, number][]; gap?: [string, number]; color?: string};
export type Head = {text: string; color: string};
const COLX = {label: 700, conc: [1010, 1120, 1235], fwd: 1375, rev: 1515, gap: 1695};
export const StageTable: React.FC<{rows: TRow[]; at: number; heads?: Head[]; gapAt?: number; rowH?: number; concTitle?: string}> = ({rows, at, heads = [], gapAt, rowH = 58, concTitle = 'concentration (units)'}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const newest = rows.reduce((s, r) => s + smooth((f - r.at) / 14), 0) - 1;
	const base0 = 862;
	const gapO = gapAt === undefined ? 1 : prog(f, gapAt, 14);
	const xs = [...COLX.conc.slice(0, heads.length), COLX.fwd, COLX.rev];
	const th = (x: number, text: string, color = INK, size = 28) => <ChemSvg key={text + x} x={x} y={808} text={text} size={size} weight={700} color={color} anchor="middle" />;
	return (
		<g opacity={o}>
			{heads.length ? <><SvgText x={(COLX.conc[0] + COLX.conc[heads.length - 1]) / 2} y={772} text={concTitle} size={26} hand={false} weight={600} color={INK_SOFT} anchor="middle" /><path d={`M${COLX.conc[0] - 60},782 L${COLX.conc[heads.length - 1] + 60},782`} stroke={INK_SOFT} strokeWidth={2.5} /></> : null}
			<SvgText x={(COLX.fwd + COLX.rev) / 2} y={772} text="rate (made-up units)" size={26} hand={false} weight={600} color={INK_SOFT} anchor="middle" />
			<path d={`M${COLX.fwd - 70},782 L${COLX.rev + 70},782`} stroke={INK_SOFT} strokeWidth={2.5} />
			{heads.map((h, i) => th(COLX.conc[i], h.text, h.color))}
			{th(COLX.fwd, 'forward', FWD)}{th(COLX.rev, 'reverse', AMBER_INK)}
			<g opacity={gapO}>
				<SvgText x={COLX.gap} y={772} text="gap" size={26} hand={false} weight={700} color={TEAL} anchor="middle" />
				<SvgText x={COLX.gap} y={808} text="forward - reverse" size={24} hand={false} weight={600} color={TEAL} anchor="middle" />
			</g>
			<path d={`M${COLX.label - 10},820 L${COLX.gap + 125},820`} stroke={INK} strokeWidth={3} />
			{rows.map((r, i) => {
				const p = newest - i;
				const op = p <= -1 ? 0 : p < 0 ? 1 + p : p < 1 ? 1 - 0.32 * p : Math.max(0, 0.68 * (2 - p));
				if (op <= 0.01) return null;
				const y = base0 + (1 - p) * rowH;
				const col = r.color ?? INK;
				return (
					<g key={r.label} opacity={op}>
						{r.color ? <rect x={COLX.label - 14} y={y - 40} width={COLX.gap + 140 - COLX.label} height={54} rx={12} fill="rgba(13,107,82,0.10)" /> : null}
						<SvgText x={COLX.label} y={y} text={r.label} size={28} hand={false} weight={700} color={col} />
						{r.cells.map(([t, at2], k) => <SvgText key={k} x={xs[k]} y={y} text={t} size={34} hand={false} weight={700} color={k === xs.length - 2 ? FWD : k === xs.length - 1 ? AMBER_INK : col} anchor="middle" at={at2} />)}
						{r.gap ? <g opacity={gapO}><SvgText x={COLX.gap} y={y} text={r.gap[0]} size={34} hand={false} weight={800} color={TEAL} anchor="middle" at={r.gap[1]} /></g> : null}
					</g>
				);
			})}
		</g>
	);
};

// ---------- reaction chip (HTML, auto layout) ----------
export type Piece = {t: string; color?: string; at?: number; cap?: string; capAt?: number; dot?: string};
const pulseOf = (f: number, at: number) => (f < at ? 0 : Math.max(0, Math.sin(Math.min(1, (f - at) / 36) * Math.PI)));
export const PieceRow: React.FC<{pieces: Piece[]; size: number}> = ({pieces, size}) => {
	const f = useCurrentFrame();
	return (
		<>
			{pieces.map((p, i) => (
				<span key={i} style={{position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 10, opacity: p.at === undefined ? 1 : prog(f, p.at, 12), marginRight: i < pieces.length - 1 ? 12 : 0}}>
					{p.dot ? <span style={{width: size * 0.5, height: size * 0.5, borderRadius: 999, background: p.dot, border: `3px solid ${INK}`}} /> : null}
					<ChemH text={p.t} size={size} color={p.color} />
					{p.cap ? <span style={{position: 'absolute', left: 0, right: 0, top: size * 1.28, textAlign: 'center', whiteSpace: 'nowrap', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 32, color: p.color ?? INK_SOFT, opacity: p.capAt === undefined ? 1 : prog(f, p.capAt, 12)}}>{p.cap}</span> : null}
				</span>
			))}
		</>
	);
};
export const HeatTagIcon: React.FC<{dir: 'in' | 'out'; color?: string}> = ({dir, color = HEAT}) => (
	<svg width={34} height={40} viewBox="-20 -22 40 48" style={{overflow: 'visible', marginRight: 8}}>
		{[-9, 0, 9].map(d => <path key={d} d={`M${d},14 q-4,-6 0,-12 q4,-6 0,-12`} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" />)}
		<path d={dir === 'in' ? 'M-12,18 L0,26 L12,18' : 'M-12,-14 L0,-22 L12,-14'} fill="none" stroke={color} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
export const RxnChip: React.FC<{x: number; y: number; at: number; left: Piece[]; right: Piece[]; size?: number; fwdLit?: number; revLit?: number; fwdWordAt?: number; revWordAt?: number; fwdTag?: {text: string; at: number; color?: string; icon?: 'in' | 'out'}; revTag?: {text: string; at: number; color?: string; icon?: 'in' | 'out'}; border?: string; words?: boolean; capPad?: number}> = ({x, y, at, left, right, size = 46, fwdLit, revLit, fwdWordAt, revWordAt, fwdTag, revTag, border = TEAL, words = true, capPad = 0}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.01) return null;
	const fl = fwdLit !== undefined && f >= fwdLit, rl = revLit !== undefined && f >= revLit;
	const pf = fwdWordAt === undefined ? 0 : pulseOf(f, fwdWordAt), pr = revWordAt === undefined ? 0 : pulseOf(f, revWordAt);
	const AW = size * 2.2;
	return (
		<div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `translateY(${(1 - o) * 14}px)`}}>
			<div style={{display: 'inline-flex', alignItems: 'center', gap: 20, background: '#fffdf8', border: `3px solid ${border}`, borderRadius: 18, padding: `${(fwdTag ? 62 : words ? 30 : 14)}px 26px ${(revTag ? 62 : words ? 30 : 14) + capPad + (revTag && capPad ? 44 : 0)}px`, boxShadow: '0 12px 28px rgba(60,45,20,0.10)'}}>
				<PieceRow pieces={left} size={size} />
				<div style={{position: 'relative', width: AW, height: size * 1.15}}>
					<svg width={AW} height={size * 1.15} viewBox={`0 0 ${AW} ${size * 1.15}`} style={{overflow: 'visible'}}>
						<path d={`M4,${size * 0.3} L${AW - 4},${size * 0.3} M${AW - 20},${size * 0.3 - 11} L${AW - 4},${size * 0.3} L${AW - 20},${size * 0.3 + 11}`} fill="none" stroke={fl || pf > 0.02 ? FWD : '#cfc7b8'} strokeWidth={5 + 4 * pf} strokeLinecap="round" strokeLinejoin="round" />
						<path d={`M${AW - 4},${size * 0.85} L4,${size * 0.85} M20,${size * 0.85 - 11} L4,${size * 0.85} L20,${size * 0.85 + 11}`} fill="none" stroke={rl || pr > 0.02 ? REV : '#cfc7b8'} strokeWidth={5 + 4 * pr} strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					{words && fwdWordAt !== undefined ? <div style={{position: 'absolute', left: 0, right: 0, top: -size * 0.66, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 0.7, color: FWD, opacity: prog(f, fwdWordAt, 12)}}>forward</div> : null}
					{words && revWordAt !== undefined ? <div style={{position: 'absolute', left: 0, right: 0, top: size * 1.1, textAlign: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size * 0.7, color: AMBER_INK, opacity: prog(f, revWordAt, 12)}}>reverse</div> : null}
					{fwdTag ? <div style={{position: 'absolute', left: AW / 2, bottom: size * 1.15 + 20, transform: 'translateX(-50%)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: fwdTag.color ?? HEAT, opacity: prog(f, fwdTag.at, 12)}}>{fwdTag.icon ? <HeatTagIcon dir={fwdTag.icon} color={fwdTag.color} /> : null}{fwdTag.text}</div> : null}
					{revTag ? <div style={{position: 'absolute', left: AW / 2, top: size * 1.15 + 20 + capPad * 1.3, transform: 'translateX(-50%)', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', fontFamily: FONT_HAND, fontWeight: 700, fontSize: 38, color: revTag.color ?? HEAT, opacity: prog(f, revTag.at, 12)}}>{revTag.icon ? <HeatTagIcon dir={revTag.icon} color={revTag.color} /> : null}{revTag.text}</div> : null}
				</div>
				<PieceRow pieces={right} size={size} />
			</div>
		</div>
	);
};

// ---------- small icons ----------
export const MiniBars: React.FC<{fw: number; rv: number; w?: number}> = ({fw, rv, w = 150}) => (
	<svg width={w} height={w * 0.74} viewBox="0 0 150 110" style={{overflow: 'visible'}}>
		<path d="M8,100 L142,100" stroke={INK} strokeWidth={4} strokeLinecap="round" />
		<rect x={22} y={100 - fw} width={44} height={fw} fill="#bcd6ee" stroke={FWD} strokeWidth={4} rx={3} />
		<rect x={84} y={Math.min(96, 100 - rv)} width={44} height={Math.max(4, rv)} fill="#f6dfae" stroke={AMBER} strokeWidth={4} rx={3} />
	</svg>
);
export const FlaskThumb: React.FC<{x: number; y: number; w: number; at: number; out: number}> = ({x, y, w, at, out}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14) * (1 - prog(f, out, 14));
	if (o <= 0.01 || !HAVE.has(FLASK_EQ)) return null;
	const crop: [number, number, number, number] = [240, 150, 544, 1460];
	const pw = w * 0.34;
	const fh = (crop[3] / crop[2]) * pw;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: fh + 100, opacity: o, transform: `translateY(${(1 - o) * 18}px)`, background: '#fffdf8', borderRadius: 22, border: '1.5px solid rgba(60,45,20,0.1)', boxShadow: '0 18px 40px rgba(60,45,20,0.12)'}}>
			<Plate src={FLASK_EQ} natural={[1024, 1792]} crop={crop} width={pw} style={{left: 22, top: 78}} />
			<div style={{position: 'absolute', left: 22, top: 18, fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: INK}}>the sealed flask</div>
			<div style={{position: 'absolute', left: w * 0.44, top: 110}}>
				<MiniBars fw={64} rv={64} w={w * 0.5} />
				<div style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 40, color: TEAL, marginTop: 8}}>equal rates</div>
			</div>
		</div>
	);
};
export const WrongChip: React.FC<{at: number; out: number; x: number; y: number; chip: string; fix: string; w?: number}> = ({at, out, x, y, chip, fix, w = 560}) => (
	<Fade at={at} out={out}>
		<rect x={x} y={y} width={w} height={62} rx={31} fill="#fffdf8" stroke="#c4432f" strokeWidth={3} />
		<text x={x + w / 2 - 20} y={y + 43} textAnchor="middle" fill="#c4432f" style={{fontFamily: FONT_HAND, fontWeight: 700, fontSize: 42}}>{chip}</text>
		<path d={`M${x + w - 52},${y + 20} L${x + w - 20},${y + 44} M${x + w - 20},${y + 20} L${x + w - 52},${y + 44}`} stroke="#c4432f" strokeWidth={7} strokeLinecap="round" />
		<SvgText x={x} y={y + 112} text={fix} size={38} color={INK} at={at + 50} />
	</Fade>
);
