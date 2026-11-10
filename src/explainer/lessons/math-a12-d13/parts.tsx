// Lesson parts for math-a12-d13 (Revision 4: the remaining composites a^□, log_a □ and tan □; drone camera
// anchor), built on the maths studio kit. Plates are the reused Physics side-view drone and ground strip, drawn at
// native aspect; the camera lens point (1665, 630) and the grass surface (row 490) were measured on the plates
// (10 Nov). The sight line, spot, angle arc and measures are coded on the panel's own scale (U px per unit height).
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, FONT_DISPLAY, FONT_HAND, INK, INK_SOFT} from '../../kit';
import {CARD, CARD_SHADOW, InnerSlot, usePlatePreload, vis, MATH_AMBER, MATH_ANSWER, MATH_BLUE, MATH_EXCLUDED, MATH_GRADIENT, MATH_MISTAKE, MATH_TEAL} from '../../math/studio';
import type {FnFamily, PlateSpec} from '../../math/studio';

export {Chip, CurveLabel, DISPLAY, Dot, Frac, PreRing, RecallChip, TanLine, gmap} from '../math-a12-d04/parts';
export {WholeRows} from '../math-a12-d05/parts';
export {Ring} from '../math-a12-d08/parts';
export {AmberStrip, AnswerBox, Line, Panel, QRadAxis, tl} from '../math-a12-d12/parts';

export const VIOLET = MATH_GRADIENT;
export const TEAL = MATH_TEAL;
export const BLUE = MATH_BLUE;
export const AMB = MATH_AMBER;
export const AMB_INK = '#7a4600';
export const GREEN = MATH_ANSWER;
export const RED = MATH_MISTAKE;
export const GREY = MATH_EXCLUDED;
export const PI = Math.PI;
export const LN3 = Math.log(3);

// ---------- role spans ----------
const glowBg = (rgb: string, g: number) => (g > 0.001 ? `rgba(${rgb},${0.85 * g})` : undefined);
/** The outside's slope at the inside, with its fixed part (teal). */
export const T: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: TEAL, background: glowBg('214,238,238', g), borderRadius: 8}}>{children}</span>;
/** The inside's slope (blue). */
export const B: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: BLUE, background: glowBg('220,234,247', g), borderRadius: 8}}>{children}</span>;
/** Domain conditions (amber ink). */
export const A: React.FC<{children: React.ReactNode; g?: number}> = ({children, g = 0}) => <span style={{color: AMB_INK, background: glowBg('248,232,200', g), borderRadius: 8}}>{children}</span>;
/** Inside slot (dashed grey). */
export const S: React.FC<{children?: React.ReactNode}> = ({children = '  '}) => <InnerSlot>{children}</InnerSlot>;
/** Raised power that keeps the line height stable. */
export const P: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.64em', position: 'relative', top: '-0.78em', marginLeft: '0.03em', whiteSpace: 'pre'}}>{children}</span>;
/** Lowered log base. */
export const Lb: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{fontSize: '0.62em', position: 'relative', top: '0.32em', marginLeft: '0.02em', whiteSpace: 'pre'}}>{children}</span>;

// ---------- plates ----------
/** Physics side-view drone (2000 x 1000; alpha box 185,274 to 1816,727; camera lens centre measured at 1665,630). */
export const DRONE: PlateSpec = {src: 'assets/physics/phys-y11-drone-side-v1.png', nat: [2000, 1000], box: [185, 274, 1816, 727]};
const LENS: [number, number] = [1665, 630];
/** Physics ground strip (2172 x 724; alpha box 63,125 to 2108,545; grass surface measured at row 490). */
export const GROUND: PlateSpec = {src: 'assets/physics/phys-y11-ground-strip-v1.png', nat: [2172, 724], box: [63, 125, 2108, 545]};
const GRASS = 490;

/**
 * DroneTilt: the painted ground along the panel's bottom and the painted drone hovering with its camera lens U px
 * (one unit) above the grass; a dashed "straight down" line, the sight line at tilt θ from straight down with its
 * angle arc, the filmed spot (a soft violet ellipse) tan θ ahead with a dashed measure, an edge arrow when the spot
 * leaves the panel, and the "gone" state (sight line along the horizon) once θ reaches π/2.
 */
export const DroneTilt: React.FC<{x: number; y: number; w: number; h: number; tilt: number; U?: number; lensX?: number; droneW?: number; at?: number; out?: number; measureO?: number; arcO?: number; goneTag?: number; size?: number}> = ({x, y, w, h, tilt, U = 220, lensX = 290, droneW = 300, at = -30, out, measureO = 1, arcO = 1, goneTag = 0, size = 34}) => {
	usePlatePreload([DRONE.src, GROUND.src]);
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const gs = w / (GROUND.box[2] - GROUND.box[0]);
	const stripTop = h - 56 - (GROUND.box[3] - GROUND.box[1]) * gs;
	const g = stripTop + (GRASS - GROUND.box[1]) * gs;
	const ly = g - U;
	const ds = droneW / (DRONE.box[2] - DRONE.box[0]);
	const dLeft = lensX - (LENS[0] - DRONE.box[0]) * ds, dTop = ly - (LENS[1] - DRONE.box[1]) * ds;
	const gone = tilt >= PI / 2 - 0.004;
	const sx = lensX + U * Math.tan(Math.min(tilt, PI / 2 - 0.004));
	const off = gone || sx > w - 24;
	const arcR = 70;
	const arcPath = Array.from({length: 24}, (_, i) => {const t = (Math.min(tilt, PI / 2) * i) / 23; return `${i ? 'L' : 'M'}${(lensX + arcR * Math.sin(t)).toFixed(1)},${(ly + arcR * Math.cos(t)).toFixed(1)}`;}).join(' ');
	const Tx: React.CSSProperties = {position: 'absolute', fontFamily: FONT_HAND, fontWeight: 700, fontSize: size, color: INK, whiteSpace: 'pre', textShadow: '0 0 6px #fffdf8, 0 0 10px #fffdf8'};
	const endX = gone ? w + 40 : Math.min(sx, w + 400), endY = gone ? ly : g;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, opacity: o, borderRadius: 20, overflow: 'hidden', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.12)', background: 'linear-gradient(180deg, #e3eef3 0%, #f3f2ea 85%)'}}>
			<svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display: 'block', position: 'absolute', inset: 0}}>
				<rect x={0} y={stripTop + (GROUND.box[3] - GROUND.box[1]) * gs - 8} width={w} height={80} fill="#d8c7a2" />
				<image href={staticFile(GROUND.src)} x={-GROUND.box[0] * gs} y={stripTop - GROUND.box[1] * gs} width={GROUND.nat[0] * gs} height={GROUND.nat[1] * gs} preserveAspectRatio="none" />
				<line x1={lensX} y1={ly} x2={lensX} y2={g} stroke={INK_SOFT} strokeWidth={3} strokeDasharray="9 8" />
				<polygon points={`${lensX},${ly} ${endX},${endY - 10} ${endX},${endY + 10}`} fill="rgba(107,79,160,0.14)" />
				<line x1={lensX} y1={ly} x2={endX} y2={endY} stroke={VIOLET} strokeWidth={4} strokeLinecap="round" />
				{arcO > 0.001 && tilt > 0.05 ? <path d={arcPath} fill="none" stroke={INK} strokeWidth={4} opacity={arcO} /> : null}
				{!off ? <ellipse cx={sx} cy={g} rx={26} ry={9} fill="rgba(107,79,160,0.55)" stroke={VIOLET} strokeWidth={3} /> : null}
				{measureO > 0.001 && !gone ? <g opacity={measureO}>
					<line x1={lensX} x2={Math.min(sx, w - 6)} y1={g + 26} y2={g + 26} stroke={INK} strokeWidth={3} strokeDasharray="8 6" />
					<line x1={lensX} x2={lensX} y1={g + 16} y2={g + 36} stroke={INK} strokeWidth={3} />
					{!off ? <line x1={sx} x2={sx} y1={g + 16} y2={g + 36} stroke={INK} strokeWidth={3} /> : null}
				</g> : null}
				{off ? <path d={`M${w - 62},${(gone ? ly : g) - 30} L${w - 18},${(gone ? ly : g) - 30} M${w - 36},${(gone ? ly : g) - 42} L${w - 16},${(gone ? ly : g) - 30} L${w - 36},${(gone ? ly : g) - 18}`} stroke={VIOLET} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null}
				<image href={staticFile(DRONE.src)} x={dLeft - DRONE.box[0] * ds} y={dTop - DRONE.box[1] * ds} width={DRONE.nat[0] * ds} height={DRONE.nat[1] * ds} preserveAspectRatio="none" />
			</svg>
			{arcO > 0.001 && tilt > 0.12 ? <div style={{...Tx, left: lensX + 92 * Math.sin(tilt / 2) - 10, top: ly + 92 * Math.cos(tilt / 2) - 24, opacity: arcO, fontSize: 38}}>θ</div> : null}
			{measureO > 0.001 && !gone ? <div style={{...Tx, left: lensX + 8, top: g + 34, opacity: measureO}}>tan θ ahead</div> : null}
			<div style={{...Tx, left: lensX - 196, top: (ly + g) / 2 - 20, fontSize: 30, color: INK_SOFT}}>straight down</div>
			{goneTag > 0.001 ? <div style={{...Tx, right: 22, top: ly - 70, opacity: goneTag, color: VIOLET, fontSize: 38}}>horizon: spot gone</div> : null}
		</div>
	);
};

/** Readouts under the drone: the tilt and the spot, then the two factors multiplied into the spot's speed. */
export const DroneBoard: React.FC<{x: number; y: number; w: number; tilt: number; rate: number; at?: number; out?: number; rateGlow?: number; secGlow?: number; numbers?: boolean}> = ({x, y, w, tilt, rate, at = -30, out, rateGlow = 0, secGlow = 0}) => {
	const f = useCurrentFrame();
	const o = vis(f, at, out, 14);
	if (o <= 0.001) return null;
	const gone = tilt >= PI / 2 - 0.004;
	const sec2 = 1 / Math.cos(tilt) ** 2;
	const num = (v: number, c: string, txt?: string) => <span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 52, color: c, fontVariantNumeric: 'tabular-nums', lineHeight: 1.1}}>{txt ?? v.toFixed(2)}</span>;
	const lab = (t: string, c: string) => <div style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: c, whiteSpace: 'pre'}}>{t}</div>;
	const cell = (bg?: number, rgb = '214,238,238'): React.CSSProperties => ({borderRadius: 12, padding: '0 10px', background: bg && bg > 0.001 ? `rgba(${rgb},${0.9 * bg})` : undefined});
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: CARD, borderRadius: 20, padding: '8px 20px 10px', boxShadow: CARD_SHADOW, border: '2.5px solid rgba(60,45,20,0.10)', boxSizing: 'border-box'}}>
			<div style={{display: 'flex', gap: 30}}>
				<div>{lab('tilt θ', INK)}<div style={{display: 'flex', alignItems: 'baseline', gap: 8}}>{num(tilt, INK)}<span style={{fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 28, color: INK_SOFT}}>rad</span></div></div>
				<div>{lab('spot ahead, tan θ', INK)}{num(Math.tan(tilt), INK, gone ? 'gone' : undefined)}</div>
			</div>
			<div style={{display: 'flex', alignItems: 'flex-end', gap: 12, borderTop: '2px solid #ede4d3', marginTop: 6, paddingTop: 4}}>
				<div style={cell(secGlow)}>{lab('sec²θ', TEAL)}{num(sec2, TEAL, gone ? 'none' : undefined)}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, paddingBottom: 4}}>×</div>
				<div style={cell(rateGlow, '220,234,247')}>{lab('tilt rate', BLUE)}{num(rate, BLUE)}</div>
				<div style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 48, color: INK, paddingBottom: 4}}>=</div>
				<div>{lab('spot speed', VIOLET)}{num(sec2 * rate, VIOLET, gone ? 'none' : undefined)}</div>
			</div>
		</div>
	);
};

// ---------- functions ----------
export const EXP3: FnFamily = {f: u => 3 ** u, df: u => LN3 * 3 ** u};
export const LOG3: FnFamily = {f: u => Math.log(u * u + 1) / LN3, df: u => (2 * u) / ((u * u + 1) * LN3)};
export const TANE_WALL = Math.log(PI / 2);
export const TANE: FnFamily = {f: u => Math.tan(Math.exp(u)), df: u => Math.exp(u) / Math.cos(Math.exp(u)) ** 2, excluded: [TANE_WALL, Math.log(3 * PI / 2)]};
export const EXP5: FnFamily = {f: u => 5 ** (u * u), df: u => 2 * u * Math.log(5) * 5 ** (u * u)};
export const LOG2: FnFamily = {f: u => Math.log(4 - u) / Math.log(2), df: u => -1 / ((4 - u) * Math.log(2)), domain: [{from: -Infinity, to: 4}]};
export const COS2: FnFamily = {f: u => Math.cos(2 * u), df: u => -2 * Math.sin(2 * u)};

// ---------- the slot table ----------
export type SlotGlow = {teal?: number; blue?: number; amber?: number};
/** d06's four rows and this video's three, in slot form: outside's part teal, □′ blue, conditions amber. */
export const slotRows = (g: SlotGlow = {}) => {
	const t = g.teal ?? 0, b = g.blue ?? 0, a = g.amber ?? 0;
	return {
		e: <>(e<P><S /></P>)′ = e<P><S /></P> × <B g={b}><S />′</B></>,
		ln: <>(ln <S />)′ = <Frac2 n={<B g={b}><S />′</B>} d={<S />} />,  <A g={a}><S /> &gt; 0</A></>,
		sin: <>(sin <S />)′ = <T g={t}>cos</T> <S /> × <B g={b}><S />′</B></>,
		cos: <>(cos <S />)′ = <T g={t}>−sin</T> <S /> × <B g={b}><S />′</B></>,
		a: <>(a<P><S /></P>)′ = a<P><S /></P> × <T g={t}>ln a</T> × <B g={b}><S />′</B></>,
		log: <>(log<Lb>a</Lb> <S />)′ = <Frac2 n={<B g={b}><S />′</B>} d={<><S /> <T g={t}>ln a</T></>} />,  <A g={a}><S /> &gt; 0</A></>,
		tan: <>(tan <S />)′ = <T g={t}>sec²</T><S /> × <B g={b}><S />′</B>,  <A g={a}><S /> ≠ π/2 + kπ</A></>,
		aL: <>(a<P><S /></P>)′ = </>,
		aR: <>a<P><S /></P> × <T g={t}>ln a</T> × <B g={b}><S />′</B></>,
		logL: <>(log<Lb>a</Lb> <S />)′ = </>,
		logR: <><Frac2 n={<B g={b}><S />′</B>} d={<><S /> <T g={t}>ln a</T></>} />,  <A g={a}><S /> &gt; 0</A></>,
		tanL: <>(tan <S />)′ = </>,
		tanR: <><T g={t}>sec²</T><S /> × <B g={b}><S />′</B>,  <A g={a}><S /> ≠ π/2 + kπ</A></>,
	};
};
/** Built-up fraction (inherits the row's size). */
export const Frac2: React.FC<{n: React.ReactNode; d: React.ReactNode}> = ({n, d}) => (
	<span style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', fontSize: '0.82em', lineHeight: 1.1, margin: '0 0.1em'}}>
		<span style={{padding: '0 0.16em'}}>{n}</span>
		<span style={{alignSelf: 'stretch', height: '0.075em', minHeight: 3, background: 'currentColor', borderRadius: 2}} />
		<span style={{padding: '0 0.16em'}}>{d}</span>
	</span>
);
/** One slot-table row on a card: the left side from the first frame, the right side on its cue, optional grey tag. */
export const SlotRow: React.FC<{x: number; y: number; w: number; at: number; lhs?: React.ReactNode; size?: number; tag?: React.ReactNode; children: React.ReactNode; glow?: number; cardAt?: number}> = ({x, y, w, at, lhs, size = 48, tag, children, glow = 0, cardAt = -30}) => (
	<Enter at={lhs ? cardAt : at} style={{position: 'absolute', left: x, top: y, width: w}}>
		<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: CARD, borderRadius: 18, padding: '6px 22px', minHeight: size * 1.6, boxShadow: CARD_SHADOW, border: `${glow > 0.001 ? 4 : 2.5}px solid ${glow > 0.001 ? `rgba(138,90,18,${0.4 + 0.6 * glow})` : 'rgba(60,45,20,0.10)'}`, boxSizing: 'border-box'}}>
			<span style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: size, color: INK, whiteSpace: 'pre'}}>{lhs}{lhs ? <Enter at={at} dy={8} style={{display: 'inline-block'}}>{children}</Enter> : children}</span>
			{tag ? <Enter at={at} dy={6} style={{display: 'inline-block'}}><span style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, color: '#4f4840', whiteSpace: 'pre', marginLeft: 16}}>{tag}</span></Enter> : null}
		</div>
	</Enter>
);
