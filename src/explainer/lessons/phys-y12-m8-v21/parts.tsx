// Lesson parts for phys-y12-m8-v21: the colour roles (design "Colour key (Revision 2)" with root rule R1), the painted
// detector, boats and Sun, the Standard Model table (cells, geometry and the board that draws them; v22 opens on it)
// and v20's parts re-exported.
// Colour key: up-type quarks amber, down-type teal; leptons navy (neutrinos grey); antiparticles the same dot with a
// bar over the label and a dashed outline; carriers diamonds (photon amber, gluon violet, W and Z slate); the Higgs a
// gold ring; gravity a grey box outside the table; answers in dark-ink frames; mistakes slate (R1).
import React from 'react';
import {FONT_DISPLAY} from '../../kit';
import {CARD, TONES} from '../../shared/tokens';
import type {Tone} from '../../shared/tokens';
import type {LightSpec} from '../../physics/light/plates';
import {SUN} from '../../physics/light/plates';
import {GridTable} from '../../physics/atom/particles';
import type {CellState, GridCell} from '../../physics/atom/particles';
import {AMBER, Arrow, DOWN, GREEN_C, GREY, INK, LEP, Lbl, NAVY, NU, NUC_RED, NEUTRON, ROSE, SLATE, Shrunk, Strip, T, TEAL, UP, fr3, fx, sci} from '../phys-y12-m8-v20/parts';

export {AMBER, Arrow, DOWN, GREEN_C, GREY, INK, LEP, Lbl, NAVY, NU, NUC_RED, NEUTRON, ROSE, SLATE, Shrunk, Strip, SUN, T, TEAL, UP, fr3, fx, sci};
/** The painted CMS-style detector (1536 x 1024; visible box from the alpha channel, threshold 20, 26 November 2026). */
export const CMS: LightSpec = {src: 'assets/physics/y12p-cms-detector-v1.png', W: 1536, H: 1024, box: [280, 240, 1258, 795]};
/** The painted top-view boats (1000 x 2000; bow up; visible box measured the same day). */
export const BOAT_W: LightSpec = {src: 'assets/physics/phys-y11-boat-top-white-v1.png', W: 1000, H: 2000, box: [197, 180, 802, 1819]};
export const BOAT_R: LightSpec = {src: 'assets/physics/phys-y11-boat-top-red-v1.png', W: 1000, H: 2000, box: [197, 180, 802, 1819]};
export const V21_PLATES = [CMS.src, BOAT_W.src, BOAT_R.src, SUN.src];
export const VIOLET: Tone = TONES.violet;
export const GOLD: Tone = {ink: '#7a5c00', stroke: '#c9a227', soft: '#f6ecc8'};
export const GAMMA: Tone = TONES.amber;
export const WZ: Tone = {ink: '#3b4650', stroke: '#4a5560', soft: '#dfe3e7'};

// ---------------------------------------------------------------- the Standard Model table
export type SMGeom = {x: number; y: number; cw: number; ch: number; gap: number; lgap: number; cx: number; hx: number; hy: number; hr: number};
/** Full-width table (scenes 3 and 4). */
export const SM_FULL: SMGeom = {x: 260, y: 300, cw: 230, ch: 112, gap: 20, lgap: 40, cx: 1080, hx: 1690, hy: 420, hr: 84};
/** The table with its carriers and the Higgs (scenes 11 and 12, the handoff and v22's opening). */
export const SM_MID: SMGeom = {x: 250, y: 240, cw: 210, ch: 100, gap: 16, lgap: 30, cx: 960, hx: 1520, hy: 345, hr: 76};
/** Compact (the memory card scene). */
export const SM_SMALL: SMGeom = {x: 120, y: 250, cw: 170, ch: 90, gap: 14, lgap: 24, cx: 700, hx: 1080, hy: 340, hr: 62};
const rowY = (g: SMGeom, r: number) => g.y + r * (g.ch + g.gap) + (r >= 2 ? g.lgap : 0);
const colX = (g: SMGeom, c: number) => g.x + c * (g.cw + g.gap);
type Def = {id: string; sym: string; name: string; note: string; mass?: string; r: number; c: number; tone: Tone};
export const SM_DEFS: readonly Def[] = [
	{id: 'u', sym: 'u', name: 'up', note: '+⅔', mass: '2.2 MeV', r: 0, c: 0, tone: UP},
	{id: 'c', sym: 'c', name: 'charm', note: '+⅔', mass: '1.27 GeV', r: 0, c: 1, tone: UP},
	{id: 't', sym: 't', name: 'top', note: '+⅔', mass: '173 GeV', r: 0, c: 2, tone: UP},
	{id: 'd', sym: 'd', name: 'down', note: '−⅓', mass: '4.7 MeV', r: 1, c: 0, tone: DOWN},
	{id: 's', sym: 's', name: 'strange', note: '−⅓', mass: '93 MeV', r: 1, c: 1, tone: DOWN},
	{id: 'b', sym: 'b', name: 'bottom', note: '−⅓', mass: '4.18 GeV', r: 1, c: 2, tone: DOWN},
	{id: 'e', sym: 'e⁻', name: 'electron', note: '−1', mass: '0.511 MeV', r: 2, c: 0, tone: LEP},
	{id: 'mu', sym: 'μ⁻', name: 'muon', note: '−1', mass: '106 MeV', r: 2, c: 1, tone: LEP},
	{id: 'tau', sym: 'τ⁻', name: 'tau', note: '−1', mass: '1.78 GeV', r: 2, c: 2, tone: LEP},
	{id: 've', sym: 'νe', name: 'neutrino', note: '0', r: 3, c: 0, tone: NU},
	{id: 'vm', sym: 'νμ', name: 'neutrino', note: '0', r: 3, c: 1, tone: NU},
	{id: 'vt', sym: 'ντ', name: 'neutrino', note: '0', r: 3, c: 2, tone: NU},
];
export const CARRIER_DEFS: readonly Def[] = [
	{id: 'gamma', sym: 'γ', name: 'photon', note: 'EM', r: 0, c: 0, tone: GAMMA},
	{id: 'g', sym: 'g', name: 'gluon', note: 'strong', r: 0, c: 1, tone: VIOLET},
	{id: 'Z', sym: 'Z⁰', name: 'Z boson', note: 'weak', r: 1, c: 0, tone: WZ},
	{id: 'W', sym: 'W±', name: 'W boson', note: 'weak', r: 1, c: 1, tone: WZ},
];
export const smCells = (g: SMGeom): GridCell[] => [
	...SM_DEFS.map(d => ({id: d.id, sym: d.sym, name: d.name, note: d.note, mass: d.mass, x: colX(g, d.c), y: rowY(g, d.r), tone: d.tone})),
	...CARRIER_DEFS.map(d => ({id: d.id, sym: d.sym, name: d.name, note: d.note, x: g.cx + d.c * (g.cw + g.gap), y: rowY(g, d.r), tone: d.tone})),
];
/** Centre of a cell (for lines from the Higgs ring and pen marks). */
export const cellC = (g: SMGeom, id: string): [number, number] => {
	const c = smCells(g).find(k => k.id === id);
	return c ? [c.x + g.cw / 2, c.y + g.ch / 2] : [0, 0];
};
export const QUARKS = ['u', 'c', 't', 'd', 's', 'b'], LEPTONS = ['e', 'mu', 'tau', 've', 'vm', 'vt'], CARRIERS = ['gamma', 'g', 'Z', 'W'];
const TS = (size: number, color: string, weight = 800): React.CSSProperties => ({fontFamily: FONT_DISPLAY, fontWeight: weight, fontSize: size, fill: color, paintOrder: 'stroke', stroke: CARD, strokeWidth: 6, strokeLinejoin: 'round'} as React.CSSProperties);
/** The table: column heads, row labels, cells by state, the carriers block, the gold Higgs ring and the grey gravity box. */
export const SMBoard: React.FC<{g: SMGeom; state: (id: string) => CellState; heads?: number; carriers?: number; higgs?: number; higgsLit?: number; gravity?: number; gravityAt?: [number, number]; symSize?: number; nameSize?: number; tagColor?: string; rowLabels?: boolean}> = ({g, state, heads = 1, carriers = 1, higgs = 0, higgsLit = 0, gravity = 0, gravityAt, symSize, nameSize = 26, tagColor = GOLD.stroke, rowLabels = true}) => {
	const cells = smCells(g);
	const ss = symSize ?? Math.round(g.ch * 0.4);
	const lx = g.x - 16;
	return (
		<g>
			<g opacity={heads}>
				{[0, 1, 2].map(c => <text key={c} x={colX(g, c) + g.cw / 2} y={g.y - 16} textAnchor="middle" style={TS(26, INK, 700)}>{`generation ${c + 1}`}</text>)}
				{rowLabels ? <>
					<text x={lx} y={rowY(g, 0) + g.ch + g.gap / 2 + 10} textAnchor="end" style={TS(30, INK)}>quarks</text>
					<text x={lx} y={rowY(g, 2) + g.ch + g.gap / 2 + 10} textAnchor="end" style={TS(30, INK)}>leptons</text>
				</> : null}
			</g>
			<GridTable cells={cells.filter(c => !CARRIERS.includes(c.id))} w={g.cw} h={g.ch} state={state} symSize={ss} nameSize={nameSize} tagColor={tagColor} />
			<g opacity={carriers}>
				<text x={g.cx + g.cw + g.gap / 2} y={g.y - 16} textAnchor="middle" style={TS(26, INK, 700)}>force carriers</text>
				<GridTable cells={cells.filter(c => CARRIERS.includes(c.id))} w={g.cw} h={g.ch} state={state} symSize={ss} nameSize={nameSize} tagColor={tagColor} />
			</g>
			{higgs > 0.001 ? <g opacity={higgs} transform={`translate(${g.hx},${g.hy}) scale(${1 + 0.25 * Math.min(1, state('H').big ?? 0)}) translate(${-g.hx},${-g.hy})`}>
				{higgsLit > 0.01 ? <circle cx={g.hx} cy={g.hy} r={g.hr + 14} fill="none" stroke={GOLD.stroke} strokeWidth={6} opacity={higgsLit} /> : null}
				<circle cx={g.hx} cy={g.hy} r={g.hr} fill={GOLD.soft} stroke={GOLD.stroke} strokeWidth={8} />
				<text x={g.hx} y={g.hy + ss * 0.36} textAnchor="middle" style={TS(ss + 4, GOLD.ink)}>H</text>
				<text x={g.hx} y={g.hy + g.hr + 34} textAnchor="middle" style={TS(26, INK, 700)}>Higgs</text>
				{(state('H').tag ?? 0) > 0.01 ? <circle cx={g.hx + g.hr * 0.7} cy={g.hy - g.hr * 0.7} r={15} fill={tagColor} stroke={CARD} strokeWidth={4} opacity={state('H').tag} /> : null}
			</g> : null}
			{gravity > 0.001 && gravityAt ? <g opacity={gravity}>
				<rect x={gravityAt[0]} y={gravityAt[1]} width={420} height={90} rx={14} fill="#ece8e1" stroke={GREY.stroke} strokeWidth={3} strokeDasharray="10 7" />
				<text x={gravityAt[0] + 20} y={gravityAt[1] + 38} style={TS(28, GREY.ink)}>gravity: not in the</text>
				<text x={gravityAt[0] + 20} y={gravityAt[1] + 72} style={TS(28, GREY.ink)}>Standard Model</text>
			</g> : null}
		</g>
	);
};
/** A small "made in collisions" legend for the gold badge. */
export const BadgeLegend: React.FC<{x: number; y: number; opacity?: number}> = ({x, y, opacity = 1}) => (opacity <= 0.001 ? null : (
	<g opacity={opacity}><circle cx={x} cy={y} r={15} fill={GOLD.stroke} stroke={CARD} strokeWidth={4} /><text x={x + 26} y={y + 10} style={TS(28, GOLD.ink)}>made in collisions</text></g>
));
