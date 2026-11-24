// Lesson parts for phys-y12-m5-v12: the road cross-section stage with the painted rear-view car (kit
// road-cone.tsx), the roundabout board of last time's final frame, needed-versus-available bars, a "centre of
// the bend" pointer and small labelled force arrows. One force scale and the v11 colour key: forces amber,
// vertical balance blue, inward direction teal, acceleration violet, givens navy.
import React from 'react';
import {staticFile, useCurrentFrame} from 'remotion';
import {Enter, prog} from '../../kit';
import {CARD, CARD_SHADOW, INK, INK_SOFT, TYPE} from '../../shared/tokens';
import {DISPLAY, ROLE, VecArrow} from '../../physics/projectile/board';
import {IntoScreen, RearCar, RoadSection, Roundabout, TopCar, rearCarGeom} from '../../physics/circular/road-cone';
import {Lbl} from '../phys-y12-m5-v02/parts';

export {Lbl};
export const AMBER = ROLE.w;
export const SIDE_SRC = 'assets/biology/b4-car-blue-v1.png';
export const TRUCK_SRC = 'assets/physics/phys-y11-truck-side-v1.png';

/** The road stage: road centre (cx, cy), car `w` px wide. Returns the centre of mass for arrows. */
export const roadGeom = (cx = 640, cy = 800, w = 440) => rearCarGeom(cx, cy, w, 0);
export const RoadStage: React.FC<{cx?: number; cy?: number; w?: number; half?: number; pointer?: boolean; into?: boolean}> = ({cx = 640, cy = 800, w = 440, half = 540, pointer = true, into = true}) => (
	<g>
		<RoadSection cx={cx} cy={cy} half={half} />
		<RearCar cx={cx} cy={cy} w={w} />
		{into ? <IntoScreen x={cx + w * 0.62} y={cy - w * 0.62} /> : null}
		{pointer ? <g><line x1={cx - half + 150} x2={cx - half + 10} y1={cy - 300} y2={cy - 300} stroke={ROLE.given.stroke} strokeWidth={5} /><path d={`M${cx - half + 10},${cy - 300} l22,-14 l0,28 Z`} fill={ROLE.given.stroke} /></g> : null}
	</g>
);
export const PointerLabel: React.FC<{cx?: number; cy?: number; half?: number}> = ({cx = 640, cy = 800, half = 540}) => <Lbl x={cx - half + 10} y={cy - 346} color={ROLE.given.ink} size={30}>centre of the bend</Lbl>;

/** A force arrow from (x, y) of length L in direction `dir` ('up' | 'down' | 'left' | 'right'), drawn on at `at`. */
export const Force: React.FC<{x: number; y: number; L: number; dir: 'up' | 'down' | 'left' | 'right'; at?: number; color?: string; width?: number; dash?: string; out?: number}> = ({x, y, L, dir, at = -30, color = AMBER.stroke, width = 8, dash, out}) => {
	const d = {up: [0, -L], down: [0, L], left: [-L, 0], right: [L, 0]}[dir];
	return <VecArrow x={x} y={y} dx={d[0]} dy={d[1]} color={color} width={width} at={at} head={26} dash={dash} out={out} />;
};

/** Two vertical bars: amber "needed" and navy "available", heights in newtons on one scale. */
export const Bars: React.FC<{x: number; base: number; scale: number; need: number; have: number; at?: number; labels?: boolean; w?: number}> = ({x, base, scale, need, have, at = -30, labels = true, w = 90}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12);
	if (o <= 0.001) return null;
	const over = need > have * 1.0005;
	return (
		<g opacity={o}>
			<line x1={x - 20} x2={x + 2 * w + 60} y1={base} y2={base} stroke={INK} strokeWidth={3} />
			<rect x={x} y={base - need * scale} width={w} height={need * scale} fill={over ? ROLE.slate.soft : AMBER.soft} stroke={over ? ROLE.slate.stroke : AMBER.stroke} strokeWidth={4} />
			<rect x={x + w + 40} y={base - have * scale} width={w} height={have * scale} fill={ROLE.given.soft} stroke={ROLE.given.stroke} strokeWidth={4} />
			{labels ? <text x={x + w / 2} y={base + 34} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={AMBER.ink}>needed</text> : null}
			{labels ? <text x={x + 1.5 * w + 40} y={base + 34} textAnchor="middle" style={{fontFamily: 'Inter Tight, sans-serif', fontWeight: 800, fontSize: 28}} fill={ROLE.given.ink}>available</text> : null}
		</g>
	);
};

/** The roundabout board, at v11's final-frame geometry (centre (560, 600), radius 270, road 110 wide): car at angle phi (radians, 0 = 3 o'clock, anticlockwise). */
export const RB = {cx: 560, cy: 600, R: 270, w: 110};
/** v11's final frame puts the car at t = 2 s of a 12 s lap, 60 degrees anticlockwise from 3 o'clock. */
export const PHI_V11 = Math.PI / 3;
export const carOnRing = (phi: number, R = RB.R): [number, number] => [RB.cx + R * Math.cos(phi), RB.cy - R * Math.sin(phi)];
export const RingCar: React.FC<{phi: number; R?: number; arrows?: boolean; fAt?: number; aAt?: number}> = ({phi, R = RB.R, arrows = true}) => {
	const [x, y] = carOnRing(phi, R);
	const ux = Math.cos(phi), uy = -Math.sin(phi); // outward unit (screen)
	const tx = -Math.sin(phi), ty = -Math.cos(phi); // tangent (anticlockwise, screen)
	return (
		<g>
			<TopCar x={x} y={y} len={120} heading={(phi * 180) / Math.PI + 90} />
			{arrows ? <g>
				<VecArrow x={x + tx * 70} y={y + ty * 70} dx={tx * 90} dy={ty * 90} color={ROLE.x.stroke} width={6} head={20} />
				<VecArrow x={x} y={y} dx={-ux * 170} dy={-uy * 170} color={ROLE.a.stroke} width={9} head={26} />
			</g> : null}
		</g>
	);
};
export const RingBoard: React.FC<{phi: number; fNet?: boolean; pulse?: number}> = ({phi, fNet = true, pulse}) => {
	const f = useCurrentFrame();
	const [x, y] = carOnRing(phi);
	const ux = Math.cos(phi), uy = -Math.sin(phi), tx = -Math.sin(phi), ty = -Math.cos(phi);
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	return (
		<g>
			<Roundabout cx={RB.cx} cy={RB.cy} R={RB.R} w={RB.w} />
			<RingCar phi={phi} />
			{fNet ? <VecArrow x={x + tx * 50} y={y + ty * 50} dx={-ux * 170} dy={-uy * 170} color={AMBER.stroke} width={6 + 4 * pz} head={24} dash="12 8" /> : null}
		</g>
	);
};

/** Side-view chip of last time's frame: the side-view car with weight down and normal force up. */
export const SideChip: React.FC<{x: number; y: number; w?: number; pulse?: number; caption?: string}> = ({x, y, w = 534, pulse, caption = 'vertical: no help inwards'}) => {
	const f = useCurrentFrame();
	const pz = pulse === undefined ? 0 : Math.sin(Math.PI * Math.max(0, Math.min(1, (f - pulse) / 24)));
	const s = 230 / 1280;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: 250, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `3px solid ${INK}`}}>
			<svg width={w} height={250} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
				<image href={staticFile(SIDE_SRC)} x={10} y={80 - 136 * s} width={1600 * s} height={800 * s} preserveAspectRatio="none" />
				<VecArrow x={154} y={140} dx={0} dy={70} color={AMBER.stroke} width={6 + 3 * pz} head={18} />
				<VecArrow x={154} y={120} dx={0} dy={-80} color={AMBER.stroke} width={6 + 3 * pz} head={18} />
			</svg>
			<div style={{position: 'absolute', left: 300, top: 30, ...DISPLAY(28, AMBER.ink, 800)}}>normal force ↑</div>
			<div style={{position: 'absolute', left: 300, top: 150, ...DISPLAY(28, AMBER.ink, 800)}}>weight ↓</div>
			<div style={{position: 'absolute', left: 20, top: 200, ...DISPLAY(28, INK_SOFT, 800)}}>{caption}</div>
		</div>
	);
};

/** Three prediction chips; `crossAir`, `tickFric`, `crossCent` mark them on cue. */
export const ChoiceChips: React.FC<{x: number; y: number; at: number; crossAir?: number; tickFric?: number; crossCent?: number}> = ({x, y, at, crossAir, tickFric, crossCent}) => {
	const f = useCurrentFrame();
	const row = (t: string, i: number, mark?: number, kind?: 'x' | 'tick') => {
		const m = mark === undefined ? 0 : prog(f, mark, 12);
		return (
			<Enter key={t} at={at + i * 6} style={{marginBottom: 12}}>
				<div style={{display: 'inline-flex', alignItems: 'center', gap: 12, background: '#f1ebdf', border: `2.5px solid ${m > 0 && kind === 'tick' ? INK : 'rgba(60,45,20,0.16)'}`, borderRadius: 14, padding: '4px 18px 6px', ...DISPLAY(34, m > 0 && kind === 'x' ? ROLE.slate.ink : INK, 700), textDecoration: m > 0.5 && kind === 'x' ? 'line-through' : undefined}}>
					{t}{m > 0 ? <span style={{opacity: m, fontWeight: 900}}>{kind === 'tick' ? ' ✓' : ' ✗'}</span> : null}
				</div>
			</Enter>
		);
	};
	return (
		<div style={{position: 'absolute', left: x, top: y}}>
			{row('air resistance', 0, crossAir, 'x')}
			{row('friction from the road', 1, tickFric, 'tick')}
			{row('a centripetal force', 2, crossCent, 'x')}
		</div>
	);
};
export {TYPE};

/** A small top-view card: a roundabout from above, the car at 3 o'clock and an optional amber inward arrow. */
export const TopViewCard: React.FC<{x: number; y: number; w: number; h: number; title: string; r?: string; arrow?: string; at?: number}> = ({x, y, w, h, title, r, arrow, at = -30}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 14);
	if (o <= 0.001) return null;
	const R = Math.min(h - 90, w * 0.55) / 2, cx = R + 40, cy = h / 2 + 18;
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, height: h, background: CARD, borderRadius: 18, boxShadow: CARD_SHADOW, border: `3px solid ${INK}`, opacity: o}}>
			<div style={{position: 'absolute', left: 18, top: 10, ...DISPLAY(28, INK_SOFT, 800), textTransform: 'uppercase', letterSpacing: 1.5}}>{title}</div>
			<svg width={w} height={h} style={{position: 'absolute', left: 0, top: 0, overflow: 'visible'}}>
				<Roundabout cx={cx} cy={cy} R={R} w={R * 0.45} />
				<TopCar x={cx + R} y={cy} len={R * 0.7} heading={90} />
				{arrow ? <VecArrow x={cx + R - 26} y={cy} dx={-(R - 50)} dy={0} color={AMBER.stroke} width={7} head={20} /> : <line x1={cx} y1={cy} x2={cx + R} y2={cy} stroke={ROLE.given.stroke} strokeWidth={4} />}
			</svg>
			{r ? <div style={{position: 'absolute', left: cx + R + 50, top: cy - 40, ...DISPLAY(32, ROLE.given.ink, 800)}}>{r}</div> : null}
			{arrow ? <div style={{position: 'absolute', left: cx + R + 50, top: cy - 40, width: w - cx - R - 70, ...DISPLAY(30, AMBER.ink, 800), whiteSpace: 'normal'}}>{arrow}</div> : null}
		</div>
	);
};
