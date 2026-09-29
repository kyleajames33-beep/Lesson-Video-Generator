// EyeRaysDiagram — side-view eyes on stone plinths with light rays that are
// actually ray-traced (paraxial thin-lens model), so where the rays meet is
// computed, never drawn by hand.
//
// Each eye has a cornea (≈70% of the focusing power) and a lens (≈30%). A
// "normal" eye's power is solved so parallel light meets exactly on the
// retina. A "long" eye (myopia) or "short" eye (hyperopia) keeps that power
// but moves the retina, so the focus lands in front of / behind it. A fix is
// then solved, not typed: a glasses or contact lens whose power puts the focus
// back on the retina (its sign decides "concave" or "convex"), LASIK re-solving
// the cornea's power (flatter or steeper), or accommodation (the lens bulges
// for a near object). Astigmatism traces two meridians of the cornea with
// different power, giving two focal points; a cylindrical lens corrects the
// steeper one only.
//
// Beats are frames after `delay`. Once built, photons keep travelling along
// the rays and the focus breathes (hold-state life, no new information).

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {COL, Note, NoteLine, alongPoly, drawPath, ease, fadeAt, polyD} from './shared';

type Mark = {part: 'cornea' | 'lens' | 'retina' | 'fovea' | 'nerve' | 'ciliary'; text: string; at: number; amber?: boolean};

export type EyePanel = {
	title: string;
	sub?: string;
	eye?: 'normal' | 'long' | 'short';
	astig?: boolean;
	fix?: 'glasses' | 'contact' | 'lasik' | 'cylindrical';
	/** Frame the panel appears; rays draw over the next ~40 frames. */
	at: number;
	/** Frame the fix slides in and the focus moves. */
	fixAt?: number;
	/** Near-object sequence (accommodation). */
	near?: {at: number; accommodateAt: number; farAt?: number};
	/** Anatomy labels (best on a single large panel). */
	marks?: Mark[];
	/** Optional caption shown once fixed (replaces the computed one). */
	fixedText?: string;
};

export type EyeRaysProps = {panels: EyePanel[]; notes?: Note[]; delay?: number};

const ID = 'b12m8eye';
const W = 760;
const H = 530;
const RY = 56; // globe half-height
const LENS_X = 30;
const L_NORMAL = 150;
const NEAR_S = 150; // near-object distance from the cornea
const X_START = -170;

type El = {x: number; p: number};

/** Trace a ray (height h at the cornea plane, slope s0 before the first element) through the elements. */
const trace = (els: El[], h0: number, s0: number, x0: number) => {
	let x = x0, h = h0 + s0 * (els[0].x - x0), s = s0;
	const pts: {x: number; y: number}[] = [{x: x0, y: h0}];
	for (let i = 0; i < els.length; i++) {
		if (i > 0) h += s * (els[i].x - x);
		x = els[i].x;
		pts.push({x, y: h});
		s -= h * els[i].p;
	}
	return {pts, h, s, x};
};

/** Axial crossing point for an on-axis source with vergence V (0 = far). */
const focusOf = (els: El[], V: number) => {
	// trace with the source vergence: height 1 at the first element, slope V
	let h = 1, s = V, x = els[0].x;
	for (let i = 0; i < els.length; i++) {
		if (i > 0) h += s * (els[i].x - x);
		x = els[i].x;
		s -= h * els[i].p;
	}
	return s < 0 ? x + h / -s : Infinity;
};

/** Bisection on one element's power so the focus lands at `target`. */
const solve = (build: (p: number) => El[], V: number, target: number, lo = -0.06, hi = 0.12) => {
	for (let i = 0; i < 80; i++) {
		const mid = (lo + hi) / 2;
		// more power → focus moves forward (smaller x)
		if (focusOf(build(mid), V) > target) lo = mid;
		else hi = mid;
	}
	return (lo + hi) / 2;
};

// Normal eye: cornea 70% / lens 30% of k, focus on the retina at L_NORMAL.
const K = solve((k) => [{x: 0, p: 0.7 * k}, {x: LENS_X, p: 0.3 * k}], 0, L_NORMAL, 0.0005, 0.2);
const PC = 0.7 * K;
const PL = 0.3 * K;
const lengthOf = (eye: EyePanel['eye']) => (eye === 'long' ? 182 : eye === 'short' ? 124 : L_NORMAL);
const ASTIG = 1.22; // steeper meridian's cornea power multiplier
const retinaX = (L: number, y: number) => L / 2 + (L / 2) * Math.sqrt(Math.max(0, 1 - (y / RY) ** 2));

const DevicePos = {glasses: -52, contact: -5, cylindrical: -52} as const;

export const EyeRaysDiagram = ({panels, notes = [], delay = 62}: EyeRaysProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const n = panels.length;
	const big = n === 1;
	const s = big ? 1.6 : 1;
	const rowH = big ? 400 : n === 2 ? 235 : 170;
	const top = big ? 70 : n === 2 ? 22 : -4;
	const X0 = big ? 20 - X_START * s : 20 - X_START;
	const RAY = theme.accent;
	const RAY2 = COL.violet;

	const panel = (pn: EyePanel, i: number) => {
		const L = lengthOf(pn.eye);
		const cy = big ? 250 : top + rowH * i + 70;
		const X = (x: number) => X0 + x * s;
		const Y = (y: number) => cy + y * s;
		const appear = fadeAt(frame, pn.at, 14);
		if (appear <= 0) return null;
		const drawT = ease(frame, pn.at + 8, pn.at + 48);
		const fixT = pn.fixAt !== undefined ? ease(frame, pn.fixAt, pn.fixAt + 45) : 0;

		// Source vergence and lens power (accommodation) over time.
		const Vn = 1 / NEAR_S;
		let V = 0, lensP = PL;
		const nearLens = solve((p) => [{x: 0, p: PC}, {x: LENS_X, p}], Vn, L, -0.02, 0.2);
		if (pn.near) {
			const toNear = ease(frame, pn.near.at, pn.near.at + 40);
			const acc = ease(frame, pn.near.accommodateAt, pn.near.accommodateAt + 45);
			const back = pn.near.farAt !== undefined ? ease(frame, pn.near.farAt, pn.near.farAt + 45) : 0;
			V = Vn * toNear * (1 - back);
			lensP = PL + (nearLens - PL) * acc * (1 - back);
		}

		// Cornea power (LASIK re-solves it) and the device power (glasses / contact / cylindrical).
		const lasikPc = pn.fix === 'lasik' ? solve((p) => [{x: 0, p}, {x: LENS_X, p: PL}], 0, L, 0.0, 0.2) : PC;
		const pc = PC + (lasikPc - PC) * fixT;
		const devX = pn.fix && pn.fix !== 'lasik' ? DevicePos[pn.fix] : null;
		const meridians = pn.astig ? [ASTIG, 1] : [1];
		const devPowerFor = (m: number) => {
			if (devX === null) return 0;
			if (pn.fix === 'cylindrical' && m === 1) return 0; // cylinder has no power along the other axis
			return solve((p) => [{x: devX, p}, {x: 0, p: PC * m}, {x: LENS_X, p: PL}], 0, L);
		};
		const devP = meridians.map(devPowerFor);
		const elsFor = (mi: number): El[] => {
			const base: El[] = [{x: 0, p: pc * meridians[mi]}, {x: LENS_X, p: lensP}];
			return devX === null ? base : [{x: devX, p: devP[mi] * fixT}, ...base];
		};

		const heights = [-30, -12, 12, 30];
		const rays = meridians.map((_, mi) => {
			const els = elsFor(mi);
			const foc = focusOf(els, V);
			const lines = heights.map((h) => {
				// ray heights are set at the first element; source is far (parallel) or a near point.
				const xFirst = els[0].x;
				const hFirst = h * (1 + V * xFirst);
				const xs = V > 0 ? Math.max(X_START, -1 / V) : X_START;
				const y0 = hFirst + h * V * (xs - xFirst);
				const tr = trace(els, y0, h * V, xs);
				// run to the retina
				let xe = L;
				for (let k = 0; k < 4; k++) xe = retinaX(L, tr.h + tr.s * (xe - tr.x));
				const ye = tr.h + tr.s * (xe - tr.x);
				const main = [...tr.pts, {x: xe, y: ye}];
				const ghost = foc > xe + 2 && Number.isFinite(foc) ? [{x: xe, y: ye}, {x: Math.min(foc, L + 110), y: tr.h + tr.s * (Math.min(foc, L + 110) - tr.x)}] : null;
				return {main, ghost};
			});
			return {foc, lines};
		});

		const status = (foc: number) => {
			if (!Number.isFinite(foc)) return 'no focus';
			const d = foc - L;
			if (Math.abs(d) < 3) return 'focus ON the retina';
			return d < 0 ? 'focus in front of the retina' : 'focus behind the retina';
		};
		const foci = rays.map((r) => r.foc);
		const onRetina = foci.every((f) => Math.abs(f - L) < 3);
		const statusText = pn.astig && Math.abs(foci[0] - foci[1]) > 3 ? 'two focal points, no single focus' : status(foci[0]);

		const bulge = 13 * (pc / PC);
		const lensHalfW = 5 + Math.max(-2, Math.min(7, (lensP / PL - 1) * 3));
		const cil = pn.near ? ease(frame, pn.near.accommodateAt, pn.near.accommodateAt + 45) * (1 - (pn.near.farAt !== undefined ? ease(frame, pn.near.farAt, pn.near.farAt + 45) : 0)) : 0;
		const bob = idleBob(frame, i, 0.8);
		const fs = (v: number) => v * (big ? 1.08 : 1);

		const deviceName = () => {
			if (pn.fix === 'cylindrical') return 'cylindrical lens';
			const p = devP[0];
			return p < 0 ? 'concave lens' : 'convex lens';
		};

		const markPos = (m: Mark) => {
			switch (m.part) {
				case 'cornea': return {x: -2, y: -44, lx: -70, ly: -112};
				case 'lens': return {x: LENS_X, y: -22, lx: 58, ly: -112};
				case 'ciliary': return {x: LENS_X + 2, y: 42, lx: -64, ly: 80};
				case 'retina': return {x: retinaX(L, -40), y: -40, lx: L + 18, ly: -100};
				case 'fovea': return {x: L - 1, y: 0, lx: L + 48, ly: -34};
				case 'nerve': return {x: L + 26, y: 28, lx: L + 36, ly: 40};
			}
		};

		const labelX = big ? 0 : X(L + 58);
		return (
			<g key={i} opacity={appear}>
				<g transform={`translate(0, ${bob})`}>
					<DioramaPlinth id={`${ID}${i}`} cx={X(L / 2)} cy={Y(RY - 2)} rx={(L / 2 + 14) * s} />
					{/* globe */}
					<ellipse cx={X(L / 2)} cy={Y(0)} rx={(L / 2) * s} ry={RY * s} fill={`url(#${ID}-sclera)`} stroke="#b9b2a6" strokeWidth={2} />
					<ellipse cx={X(L / 2)} cy={Y(0)} rx={(L / 2 - 6) * s} ry={(RY - 6) * s} fill="#f6fbff" opacity={0.55} />
					{/* retina */}
					<path
						d={polyD(Array.from({length: 25}, (_, k) => {
							const a = -1.05 + (2.1 * k) / 24;
							return {x: X(L / 2 + (L / 2 - 2) * Math.cos(a)), y: Y((RY - 2) * Math.sin(a))};
						}))}
						fill="none"
						stroke={COL.pink}
						strokeWidth={5 * s}
						strokeLinecap="round"
					/>
					<circle cx={X(L - 3)} cy={Y(0)} r={3.2 * s} fill="#c03a4c" />
					{/* optic nerve */}
					<path d={`M ${X(L - 6)} ${Y(14)} Q ${X(L + 16)} ${Y(20)} ${X(L + 30)} ${Y(30)}`} stroke={COL.nerve} strokeWidth={12 * s} fill="none" strokeLinecap="round" />
					{/* iris + ciliary */}
					{[-1, 1].map((sg) => (
						<g key={sg}>
							<line x1={X(LENS_X - 7)} y1={Y(sg * 26)} x2={X(LENS_X - 7)} y2={Y(sg * 44)} stroke="#5b7a9a" strokeWidth={5 * s} strokeLinecap="round" />
							<ellipse cx={X(LENS_X + 2)} cy={Y(sg * 42)} rx={(7 + cil * 2) * s} ry={(5 - cil) * s} fill={cil > 0.05 ? COL.red : COL.pink} opacity={0.9} />
							<line x1={X(LENS_X + 2)} y1={Y(sg * 37)} x2={X(LENS_X)} y2={Y(sg * 24)} stroke="#b8a89a" strokeWidth={1.5} />
						</g>
					))}
					{/* lens (thickness follows its power) */}
					<ellipse cx={X(LENS_X)} cy={Y(0)} rx={lensHalfW * s} ry={25 * s} fill={`url(#${ID}-lens)`} stroke="#8fb3cf" strokeWidth={1.5} />
					{/* cornea (bulge follows its power) */}
					<path d={`M ${X(8)} ${Y(-44)} Q ${X(8 - bulge * 2)} ${Y(0)} ${X(8)} ${Y(44)}`} fill="rgba(170,215,240,0.45)" stroke="#7fb7da" strokeWidth={3} />
				</g>

				{/* device (glasses / contact / cylindrical) */}
				{devX !== null && fixT > 0 && (
					<g opacity={fixT}>
						{(() => {
							const concave = pn.fix !== 'cylindrical' && devP[0] < 0;
							const x = X(devX);
							const hh = (pn.fix === 'contact' ? 40 : 46) * s;
							const w = (pn.fix === 'contact' ? 4 : 9) * s;
							const d = concave
								? `M ${x - w} ${cy - hh} Q ${x - 2} ${cy} ${x - w} ${cy + hh} L ${x + w} ${cy + hh} Q ${x + 2} ${cy} ${x + w} ${cy - hh} Z`
								: `M ${x} ${cy - hh} Q ${x - w * 2.2} ${cy} ${x} ${cy + hh} Q ${x + w * 2.2} ${cy} ${x} ${cy - hh} Z`;
							return (
								<g>
									<path d={d} fill="rgba(160,205,235,0.55)" stroke={theme.accent} strokeWidth={2} />
									{pn.fix === 'glasses' || pn.fix === 'cylindrical' ? (
										<line x1={x} y1={cy - hh - 2} x2={x + 40 * s} y2={cy - hh - 14 * s} stroke={TOK.inkMute} strokeWidth={3} strokeLinecap="round" />
									) : null}
									<text x={x - (pn.fix === 'contact' ? 18 : 0)} y={cy + hh + 22} textAnchor="middle" fill={theme.accent} fontSize={fs(16)} fontWeight={800}>
										{deviceName()}
									</text>
								</g>
							);
						})()}
					</g>
				)}
				{pn.fix === 'lasik' && fixT > 0 && (
					<text x={X(-40)} y={cy + 62 * s} textAnchor="middle" fill={theme.accent} fontSize={fs(16)} fontWeight={800} opacity={fixT}>
						{lasikPc < PC ? 'cornea flattened' : 'cornea steepened'}
					</text>
				)}

				{/* near object */}
				{V > 0 && (
					<g opacity={Math.min(1, V / Vn)}>
						<line x1={X(-1 / V)} y1={Y(0)} x2={X(-1 / V)} y2={Y(-22)} stroke={COL.green} strokeWidth={5} strokeLinecap="round" />
						<circle cx={X(-1 / V)} cy={Y(-24)} r={5} fill={COL.green} />
						<text x={X(-1 / V)} y={Y(-34)} textAnchor="middle" fill={COL.green} fontSize={fs(16)} fontWeight={800}>near object</text>
					</g>
				)}

				{/* rays */}
				{rays.map((r, mi) => (
					<g key={mi}>
						{r.lines.map((ln, k) => (
							<g key={k}>
								<path
									d={polyD(ln.main.map((p) => ({x: X(p.x), y: Y(p.y) + (p.x > 8 ? bob : 0)})))}
									stroke={mi === 0 ? RAY : RAY2}
									strokeWidth={2.4}
									fill="none"
									strokeLinejoin="round"
									strokeDasharray={mi === 1 ? '7 5' : undefined}
									{...(mi === 1 ? {opacity: drawT} : drawPath(drawT))}
								/>
								{ln.ghost && drawT > 0.98 && (
									<path d={polyD(ln.ghost.map((p) => ({x: X(p.x), y: Y(p.y) + bob})))} stroke={mi === 0 ? RAY : RAY2} strokeWidth={1.8} strokeDasharray="4 5" opacity={0.55} fill="none" />
								)}
								{/* photons: hold-state life */}
								{drawT >= 1 && (() => {
									const u = (((frame - pn.at + k * 23 + mi * 11) % 90) + 90) % 90 / 90;
									const p = alongPoly(ln.main, u);
									return <circle cx={X(p.x)} cy={Y(p.y) + (p.x > 8 ? bob : 0)} r={2.6} fill="#ffffff" stroke={mi === 0 ? RAY : RAY2} strokeWidth={1.2} opacity={0.9} />;
								})()}
							</g>
						))}
						{Number.isFinite(r.foc) && drawT > 0.9 && (
							<circle
								cx={X(Math.min(r.foc, L + 110))}
								cy={Y(0) + bob}
								r={(5 + idlePulse(frame, 50) * 2.5) * (big ? 1.2 : 1)}
								fill={TOK.amber}
								stroke="#ffffff"
								strokeWidth={1.5}
								opacity={fadeAt(frame, pn.at + 40, 10)}
							/>
						)}
					</g>
				))}

				{/* anatomy marks */}
				{(pn.marks ?? []).map((m, k) => {
					const p = markPos(m);
					const o = fadeAt(frame, m.at, 12);
					if (o <= 0) return null;
					return (
						<g key={k} opacity={o}>
							<line x1={X(p.x)} y1={Y(p.y)} x2={X(p.lx) + (m.part === 'nerve' ? -4 : 0)} y2={Y(p.ly) + (m.part === 'nerve' ? -6 : p.ly < 0 ? 8 : -18)} stroke={TOK.inkMute} strokeWidth={1.5} />
							{m.text.split('\n').map((line, li) => (
								<text key={li} x={X(p.lx)} y={Y(p.ly) + li * 21} textAnchor={m.part === 'nerve' ? 'start' : 'middle'} fill={m.amber ? TOK.amberInk : TOK.ink} fontSize={18} fontWeight={800}>{line}</text>
							))}
						</g>
					);
				})}

				{/* right-hand labels (stacked panels) */}
				{!big && (
					<g>
						<text x={labelX} y={cy - 26} fill={TOK.ink} fontSize={23} fontWeight={800}>{pn.title}</text>
						{pn.sub && <text x={labelX} y={cy} fill={TOK.inkDim} fontSize={17} fontWeight={700}>{pn.sub}</text>}
						<text x={labelX} y={cy + 28} fill={onRetina ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, pn.at + 44, 12)}>
							{fixT > 0.95 && pn.fixedText ? pn.fixedText : statusText}
						</text>
						{pn.astig && (
							<g opacity={fadeAt(frame, pn.at + 44, 12)}>
								<line x1={labelX} y1={cy + 50} x2={labelX + 26} y2={cy + 50} stroke={RAY} strokeWidth={3} />
								<text x={labelX + 32} y={cy + 56} fill={TOK.inkDim} fontSize={15} fontWeight={700}>one axis</text>
								<line x1={labelX + 110} y1={cy + 50} x2={labelX + 136} y2={cy + 50} stroke={RAY2} strokeWidth={3} strokeDasharray="7 5" />
								<text x={labelX + 142} y={cy + 56} fill={TOK.inkDim} fontSize={15} fontWeight={700}>the other axis</text>
							</g>
						)}
					</g>
				)}
				{big && (
					<g>
						<text x={W / 2} y={462} textAnchor="middle" fill={onRetina ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, pn.at + 44, 12)}>
							{statusText}
						</text>
					</g>
				)}
			</g>
		);
	};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={panels.map((p) => p.title).join(', ')} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<radialGradient id={`${ID}-sclera`} cx="40%" cy="32%" r="75%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="70%" stopColor="#f3efe8" />
					<stop offset="100%" stopColor="#d9d2c6" />
				</radialGradient>
				<radialGradient id={`${ID}-lens`} cx="38%" cy="30%" r="75%">
					<stop offset="0%" stopColor="#ffffff" />
					<stop offset="60%" stopColor="#d6ecfa" />
					<stop offset="100%" stopColor="#a9cbe4" />
				</radialGradient>
			</defs>
			{panels.map(panel)}
			{notes.map((nt, k) => (
				<NoteLine key={k} note={nt} x={W / 2} y={H - 14 - (notes.length - 1 - k) * 26} frame={frame} />
			))}
		</svg>
	);
};
