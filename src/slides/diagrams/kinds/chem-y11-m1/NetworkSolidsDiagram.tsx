// NetworkSolidsDiagram — the network solids to know, as three 3/4-view lattice
// fragments on plinths.
//
// Every fragment is generated from real geometry, so the valences are honest:
//  • 'diamond'  — diamond-cubic sites grown two bonds out from one C: every C
//                 has 4 tetrahedral bonds (edge atoms show short stubs where the
//                 network carries on).
//  • 'graphite' — flat honeycomb layers (each C bonded to 3, stubs at the patch
//                 edge), stacked with dashed weak forces between layers and
//                 delocalised electrons drifting within each layer.
//  • 'sio2'     — idealised Si–O network: Si on diamond sites, an O bridging
//                 every Si–Si pair, so each Si has 4 O and each O has 2 Si.
// Property chips come from the lesson text. A late amber bracket links two
// columns ("both pure carbon") and the chips marked `flip` turn amber with it.
//
// Config-driven: `solids` (model, name, subline, chips, beats) and `bracket`.
// Defaults = Chem Y11 M1 L9 "formula" scene. Beats are frames after `delay`.

import type {ReactElement} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idlePulse} from '../../diorama';
import {Ball, GlossDefs, PARTICLE, clamp, fadeAt, popAt} from './shared';

export type NSolidModel = 'diamond' | 'graphite' | 'sio2';
export type NSolidChip = {text: string; at?: number; flip?: boolean};
export type NSolidSpec = {
	model: NSolidModel;
	name: string;
	/** Sub-line under the name; "Si" and "O" are tinted as a colour key. */
	sub?: string;
	subAt?: number;
	chips?: NSolidChip[];
	at?: number;
	/** graphite: electrons appear. */
	electronsAt?: number;
	/** graphite: layers start sliding over each other. */
	slideAt?: number;
};
export type NetworkSolidsProps = {
	solids?: NSolidSpec[];
	bracket?: {from: number; to: number; title: string; sub?: string; at: number; flipAt?: number};
	delay?: number;
};

const DEFAULT_SOLIDS: NSolidSpec[] = [
	{model: 'diamond', name: 'Diamond', sub: 'each C bonded to 4', at: 10, subAt: 113, chips: [{text: 'hardest', at: 153, flip: true}, {text: 'non-conducting', at: 249, flip: true}, {text: 'MP 3550 °C', at: 177}]},
	{model: 'graphite', name: 'Graphite', sub: 'each C bonded to 3', at: 320, subAt: 384, electronsAt: 456, slideAt: 583, chips: [{text: 'soft, slippery', at: 623, flip: true}, {text: 'conducts within layers', at: 512, flip: true}]},
	{model: 'sio2', name: 'Silicon dioxide', sub: '3D Si–O–Si network', at: 647, subAt: 679, chips: [{text: 'MP 1713 °C', at: 711}, {text: 'very hard', at: 743}, {text: 'insoluble', at: 767}]},
];
const DEFAULT_BRACKET = {from: 0, to: 1, title: 'Both pure carbon', sub: 'same element, opposite properties', at: 778, flipAt: 822};

const ID = 'c11net';
const W = 760;
const H = 530;
const XS = [130, 380, 630];
const PY = 274;
const RX = 104;
const FRAG_Y = 182; // fragment centre
const NAME_Y = 354;
const SUB_Y = 378;
const CHIP_Y0 = 412;
const CHIP_DY = 37;
const CHIP_SIZE = 17;
const SI_INK = '#9a6224';
const O_INK = '#c8352c';

// ── 3D helpers ─────────────────────────────────────────────────────────────
type V3 = [number, number, number];
const TH = (22 * Math.PI) / 180; // turn about the vertical axis
const PH = (24 * Math.PI) / 180; // camera tilt (looking down)
/** Project (x right, y up, z towards viewer) → screen offset + depth (bigger = nearer). */
const proj = ([x, y, z]: V3, s: number, th = TH, ph = PH) => {
	const x1 = x * Math.cos(th) + z * Math.sin(th);
	const z1 = -x * Math.sin(th) + z * Math.cos(th);
	const y2 = y * Math.cos(ph) - z1 * Math.sin(ph);
	const z2 = y * Math.sin(ph) + z1 * Math.cos(ph);
	return {x: x1 * s, y: -y2 * s, d: z2};
};
const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
const key = (a: V3) => a.map((v) => Math.round(v * 100)).join(',');
// Diamond-cubic nearest-neighbour vectors (units of a/4) for A sites; B sites use the negatives.
const TET: V3[] = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]];

type Atom = {p: V3; el: string; depth: number};
type Seg = {a: V3; b: V3; stub?: boolean; hi?: boolean};

/** Diamond fragment: BFS `levels` bonds out from an A site; stubs where the network continues. */
const diamondNet = (levels: number) => {
	const atoms: Atom[] = [{p: [0, 0, 0], el: 'C', depth: 0}];
	const sub = new Map<string, number>([[key([0, 0, 0]), 1]]);
	const segs: Seg[] = [];
	let frontier = [atoms[0]];
	for (let lv = 1; lv <= levels; lv++) {
		const next: Atom[] = [];
		for (const at of frontier) {
			const sgn = sub.get(key(at.p))!;
			for (const v of TET) {
				const q = add(at.p, mul(v, sgn));
				if (sub.has(key(q))) continue;
				sub.set(key(q), -sgn);
				const na = {p: q, el: 'C', depth: lv};
				atoms.push(na);
				next.push(na);
				segs.push({a: at.p, b: q, hi: lv === 1});
			}
		}
		frontier = next;
	}
	for (const at of frontier) {
		const sgn = sub.get(key(at.p))!;
		for (const v of TET) {
			const q = add(at.p, mul(v, sgn));
			if (!sub.has(key(q))) segs.push({a: at.p, b: add(at.p, mul(v, sgn * 0.42)), stub: true});
		}
	}
	return {atoms, segs};
};

/** Idealised SiO₂: Si on diamond sites (centre + 4), an O between every Si–Si pair. */
const silicaNet = () => {
	const si: V3[] = [[0, 0, 0], ...TET];
	const atoms: Atom[] = si.map((p, i) => ({p, el: 'Si', depth: i === 0 ? 0 : 1}));
	const segs: Seg[] = [];
	// O around the centre Si
	for (const v of TET) {
		const o = mul(v, 0.5);
		atoms.push({p: o, el: 'O', depth: 1});
		segs.push({a: [0, 0, 0], b: o}, {a: o, b: v});
	}
	// Each outer Si (a B site) has 3 more O leading to Si beyond the fragment.
	for (const v of TET) {
		for (const w of TET) {
			if (w === v) continue;
			const dir = mul(w, -1);
			const o = add(v, mul(dir, 0.5));
			atoms.push({p: o, el: 'O', depth: 2});
			segs.push({a: v, b: o}, {a: o, b: add(o, mul(dir, 0.3)), stub: true});
		}
	}
	return {atoms, segs};
};

/** One honeycomb patch (3 fused hexagons) in the layer plane; stubs complete each C's 3 bonds. */
const honeycomb = (b: number) => {
	const pts: [number, number][] = [];
	const seen = new Set<string>();
	for (let i = -1; i <= 1; i++) {
		const cx = i * Math.sqrt(3) * b;
		for (let k = 0; k < 6; k++) {
			const a = (Math.PI / 180) * (30 + 60 * k);
			const p: [number, number] = [cx + Math.cos(a) * b, Math.sin(a) * b];
			const kk = p.map((v) => Math.round(v * 100)).join(',');
			if (!seen.has(kk)) {
				seen.add(kk);
				pts.push(p);
			}
		}
	}
	const bonds: [number, number][] = [];
	const deg = pts.map(() => [] as number[]);
	pts.forEach((p, i) =>
		pts.forEach((q, j) => {
			if (j <= i) return;
			const dd = Math.hypot(p[0] - q[0], p[1] - q[1]);
			if (Math.abs(dd - b) < 0.01 * b) {
				bonds.push([i, j]);
				const ang = (Math.atan2(q[1] - p[1], q[0] - p[0]) * 180) / Math.PI;
				deg[i].push(ang);
				deg[j].push(ang + 180);
			}
		}),
	);
	const norm = (a: number) => ((Math.round(a) % 360) + 360) % 360;
	const setA = [90, 210, 330];
	const setB = [30, 150, 270];
	const stubs: {p: [number, number]; q: [number, number]}[] = [];
	pts.forEach((p, i) => {
		const have = deg[i].map(norm);
		const set = have.every((a) => setA.includes(a)) ? setA : setB;
		for (const a of set)
			if (!have.includes(a)) {
				const r = (a * Math.PI) / 180;
				stubs.push({p, q: [p[0] + Math.cos(r) * b * 0.42, p[1] + Math.sin(r) * b * 0.42]});
			}
	});
	return {pts, bonds, stubs};
};

const BOND = '#55595e';

const Fragment = ({atoms, segs, cx, cy, s, th, ph, frame, fps, at, hiT, radius, colors}: {
	atoms: Atom[]; segs: Seg[]; cx: number; cy: number; s: number; th: number; ph: number; frame: number; fps: number; at: number; hiT: number;
	radius: (el: string) => number; colors: (el: string) => string;
}) => {
	const theme = useAccent();
	// Centre the fragment's projected bounding box (atoms and stubs) on (cx, cy).
	const all = [...atoms.map((a) => proj(a.p, s, th, ph)), ...segs.map((g) => proj(g.b, s, th, ph))];
	const ox = (Math.min(...all.map((q) => q.x)) + Math.max(...all.map((q) => q.x))) / 2;
	const oy = (Math.min(...all.map((q) => q.y)) + Math.max(...all.map((q) => q.y))) / 2;
	const P = (p: V3) => {
		const q = proj(p, s, th, ph);
		return {x: cx + q.x - ox, y: cy + q.y - oy, d: q.d};
	};
	// Depth cue: far atoms and bonds are fogged towards the background.
	const ds = atoms.map((a) => proj(a.p, s, th, ph).d);
	const dMin = Math.min(...ds);
	const dMax = Math.max(...ds);
	const near = (d: number) => (dMax > dMin ? (d - dMin) / (dMax - dMin) : 1);
	const depthOf = (p: V3) => atoms.find((a) => key(a.p) === key(p))?.depth ?? 0;
	const segEls = segs
		.map((sg, i) => {
			const A = P(sg.a);
			const B = P(sg.b);
			const dep = Math.max(depthOf(sg.a), sg.stub ? depthOf(sg.a) : depthOf(sg.b));
			const show = fadeAt(frame, at + dep * 10 + 6, 10);
			return {d: (A.d + B.d) / 2, el: (
				<line key={`s${i}`} x1={A.x} y1={A.y} x2={B.x} y2={B.y}
					stroke={sg.hi && hiT > 0 ? theme.accent : BOND}
					strokeWidth={sg.stub ? 3 : sg.hi ? 4 + hiT * 2.5 : 4}
					strokeLinecap="round" opacity={show * (sg.stub ? 0.55 : 1) * (0.45 + 0.55 * near((A.d + B.d) / 2))} />
			)};
		})
		.sort((a, b) => a.d - b.d)
		.map((x) => x.el);
	const atomEls = atoms
		.map((a, i) => {
			const q = P(a.p);
			const pop = popAt(frame, fps, at + a.depth * 10);
			const sc = Math.min(1.1, pop) * (1 + q.d * 0.03);
			return {d: q.d, el: (
				<g key={`a${i}`} opacity={Math.min(1, pop * 1.5)}>
					{a.depth === 0 && hiT > 0 && <circle cx={q.x} cy={q.y} r={radius(a.el) + 6} fill="none" stroke={theme.accent} strokeWidth={3} opacity={hiT} />}
					<Ball id={ID} name={a.el} color={colors(a.el)} x={q.x} y={q.y} r={radius(a.el) * sc} />
					<circle cx={q.x} cy={q.y} r={radius(a.el) * sc + 0.5} fill={TOK.bg} opacity={(1 - near(q.d)) * 0.35} />
				</g>
			)};
		})
		.sort((a, b) => a.d - b.d)
		.map((x) => x.el);
	return <g>{segEls}{atomEls}</g>;
};

const Graphite = ({cx, cy, frame, fps, at, electronsAt, slideAt}: {cx: number; cy: number; frame: number; fps: number; at: number; electronsAt: number; slideAt: number}) => {
	const b = 1; // honeycomb in bond units, scaled by s
	const s = 29;
	const {pts, bonds, stubs} = honeycomb(b);
	const gapY = 1.75; // layer spacing (bond units)
	const slide = interpolate(frame, [slideAt, slideAt + 20], [0, 1], clamp);
	const out: ReactElement[] = [];
	const layers = [-1, 0, 1];
	const eShow = fadeAt(frame, electronsAt, 14);
	// Weak forces: dashed links between neighbouring layers, drawn behind.
	const weak: ReactElement[] = [];
	// Each layer shears sideways once the layers start sliding; the middle layer
	// sits half a bond back (AB stacking).
	const layerOff = (L: number) => ({du: slide * Math.sin((frame - slideAt) / 26) * 0.45 * L, dw: L === 0 ? 0.5 : 0});
	const PL = (L: number, u: number, w: number) => {
		const {du, dw} = layerOff(L);
		const q = proj([u + du, L * gapY, w + dw], s);
		return {x: cx + q.x, y: cy + q.y};
	};
	layers.forEach((L, li) => {
		const P = (u: number, w: number) => PL(L, u, w);
		const show = popAt(frame, fps, at + li * 10);
		const op = Math.min(1, show * 1.5);
		if (li < layers.length - 1) {
			[-2.2, 0, 2.2].forEach((u, k) => {
				const A = P(u, -0.4);
				const B = PL(layers[li + 1], u, -0.4);
				weak.push(<line key={`w${li}${k}`} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={TOK.inkMute} strokeWidth={2} strokeDasharray="3 5" opacity={fadeAt(frame, at + 30, 12)} />);
			});
		}
		out.push(
			<g key={`L${li}`} opacity={op}>
				{stubs.map((st, k) => {
					const A = P(st.p[0], st.p[1]);
					const B = P(st.q[0], st.q[1]);
					return <line key={`st${k}`} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={BOND} strokeWidth={2.5} strokeLinecap="round" opacity={0.55} />;
				})}
				{bonds.map(([i, j], k) => {
					const A = P(pts[i][0], pts[i][1]);
					const B = P(pts[j][0], pts[j][1]);
					return <line key={`b${k}`} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke={BOND} strokeWidth={3.5} strokeLinecap="round" />;
				})}
				{[...pts].map((p, k) => ({p, k, d: proj([p[0], 0, p[1]], s).d})).sort((a, c) => a.d - c.d).map(({p, k}) => {
					const A = P(p[0], p[1]);
					return <Ball key={`c${k}`} id={ID} name="C" color={ELEMENT_COLORS.C} x={A.x} y={A.y} r={6.5} />;
				})}
				{/* delocalised electrons drifting within this layer */}
				{eShow > 0 && [0, 1].map((k) => {
					const span = 5.6;
					const u = (((frame * 0.035 + k * 2.8 + li * 1.3) % span) + span) % span - span / 2;
					const edge = Math.min(u + span / 2, span / 2 - u);
					const A = P(u, k === 0 ? -0.5 : 0.5);
					return <Ball key={`e${k}`} id={ID} name="electron" color={PARTICLE.electron} x={A.x} y={A.y - 7} r={6} opacity={eShow * Math.min(1, edge / 0.5)} />;
				})}
			</g>,
		);
	});
	return <g>{weak}{out}</g>;
};

export const NetworkSolidsDiagram = ({solids = DEFAULT_SOLIDS, bracket = DEFAULT_BRACKET, delay = 62}: NetworkSolidsProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const sol = solids.slice(0, 3);
	const dia = diamondNet(2);
	const sil = silicaNet();
	const flipT = bracket ? fadeAt(frame, bracket.flipAt ?? bracket.at + 20, 12) : 0;

	const subText = (t: string) => {
		// Tint "Si" and "O" so the sub-line doubles as a colour key.
		const parts = t.split(/(Si|O)/);
		return parts.map((p, k) =>
			p === 'Si' ? <tspan key={k} fill={SI_INK} fontWeight={900}>Si</tspan> : p === 'O' ? <tspan key={k} fill={O_INK} fontWeight={900}>O</tspan> : <tspan key={k}>{p}</tspan>,
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Network solids: diamond, graphite and silicon dioxide" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{C: ELEMENT_COLORS.C, Si: PARTICLE.Si, O: ELEMENT_COLORS.O, electron: PARTICLE.electron}} />

			{sol.map((sp, i) => {
				const cx = XS[i];
				const at = sp.at ?? 10 + i * 300;
				const subAt = sp.subAt ?? at + 40;
				const hiT = sp.model === 'diamond' ? interpolate(frame, [subAt, subAt + 10, subAt + 90, subAt + 110], [0, 1, 1, 0], clamp) * (0.75 + 0.25 * idlePulse(frame, 30)) : 0;
				return (
					<g key={i}>
						<g opacity={fadeAt(frame, 2 + i * 4)}>
							<DioramaPlinth id={ID} cx={cx} cy={PY} rx={RX} />
						</g>
						{sp.model === 'diamond' && (
							<Fragment atoms={dia.atoms} segs={dia.segs} cx={cx} cy={FRAG_Y} s={29} th={(6 * Math.PI) / 180} ph={(21 * Math.PI) / 180} frame={frame} fps={fps} at={at} hiT={hiT} radius={() => 9.5} colors={() => ELEMENT_COLORS.C} />
						)}
						{sp.model === 'sio2' && (
							<Fragment atoms={sil.atoms} segs={sil.segs} cx={cx} cy={FRAG_Y} s={44} th={(12 * Math.PI) / 180} ph={(15 * Math.PI) / 180} frame={frame} fps={fps} at={at} hiT={0} radius={(el) => (el === 'Si' ? 11.5 : 8)} colors={(el) => (el === 'Si' ? PARTICLE.Si : ELEMENT_COLORS.O)} />
						)}
						{sp.model === 'graphite' && (
							<Graphite cx={cx} cy={FRAG_Y + 6} frame={frame} fps={fps} at={at} electronsAt={sp.electronsAt ?? at + 60} slideAt={sp.slideAt ?? Infinity} />
						)}
						<text x={cx} y={NAME_Y} textAnchor="middle" fill={TOK.ink} fontSize={26} fontWeight={800} opacity={fadeAt(frame, at + 4)}>{sp.name}</text>
						{sp.sub && (
							<text x={cx} y={SUB_Y} textAnchor="middle" fill={hiT > 0.05 ? theme.accent : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, subAt)}>
								{subText(sp.sub)}
							</text>
						)}
						{(sp.chips ?? []).map((c, k) => {
							const p = popAt(frame, fps, c.at ?? at + 60 + k * 30);
							const y = CHIP_Y0 + k * CHIP_DY;
							const w = c.text.length * CHIP_SIZE * 0.56 + 28;
							const amber = c.flip && flipT > 0;
							return (
								<g key={k} opacity={Math.min(1, p * 1.5)} transform={`translate(${cx},${y}) scale(${0.7 + 0.3 * Math.min(1, p)}) translate(${-cx},${-y})`}>
									<rect x={cx - w / 2} y={y - 15.5} width={w} height={31} rx={15.5} fill={TOK.bgLift} stroke={theme.accent} strokeWidth={2.5} />
									{amber && <rect x={cx - w / 2} y={y - 15.5} width={w} height={31} rx={15.5} fill="rgba(240,168,48,0.12)" stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 1.2} opacity={flipT} />}
									<text x={cx} y={y + CHIP_SIZE * 0.36} textAnchor="middle" fill={amber && flipT > 0.5 ? TOK.amberInk : theme.accent} fontSize={CHIP_SIZE} fontWeight={800}>{c.text}</text>
								</g>
							);
						})}
					</g>
				);
			})}

			{/* Amber bracket: same element, opposite properties */}
			{bracket && (() => {
				const x0 = XS[bracket.from] ?? XS[0];
				const x1 = XS[bracket.to] ?? XS[1];
				const draw = interpolate(frame, [bracket.at, bracket.at + 16], [0, 1], clamp);
				const mid = (x0 + x1) / 2;
				const yb = 74;
				const pulse = idlePulse(frame);
				return (
					<g>
						<path d={`M ${x0} ${yb + 12} L ${x0} ${yb} L ${x1} ${yb} L ${x1} ${yb + 12}`} fill="none" stroke={TOK.amber} strokeWidth={4 + pulse * 1.2} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - draw} />
						<g opacity={fadeAt(frame, bracket.at + 8, 12)}>
							<text x={mid} y={32} textAnchor="middle" fill={TOK.amberInk} fontSize={25} fontWeight={800}>{bracket.title}</text>
							{bracket.sub && <text x={mid} y={58} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={700}>{bracket.sub}</text>}
						</g>
					</g>
				);
			})()}
		</svg>
	);
};

