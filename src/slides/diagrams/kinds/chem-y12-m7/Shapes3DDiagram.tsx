// Shapes3DDiagram (chem12m7Shapes3D) — up to three small molecules as glossy
// 3D ball-and-stick models, each rocking slowly over its own stone plinth, with
// the shape name and bond angle underneath. Built on the shared engine3d
// pipeline (rotate → project → painter sort), so the geometry is real 3D:
// tetrahedral H–C–H is 109.5°, the ethene fork is 120° in a plane, ethyne is a
// straight line. Presets: methane, ethane, ethene, ethyne; or pass `atoms`
// (el, x, y, z) and `bonds` for any other small molecule.
//
// Each model springs in on its own beat; the angle arc and its label follow.
// Hold: the models keep rocking (and bob), so the card is never frozen.

import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {depthLerp, paintersSort, project, rotate, slerp} from '../../engine3d';
import type {DepthItem, Vec3} from '../../engine3d';
import {EL_COLOR, MolDefs, fadeAt, shade} from './mol';

type Atom3 = [string, number, number, number];
export type Model3D = {
	preset?: 'methane' | 'ethane' | 'ethene' | 'ethyne';
	atoms?: Atom3[];
	/** [i, j, order] */
	bonds?: [number, number, number][];
	/** Angle marker: atoms a–centre–b, with its text (e.g. "109.5°"). */
	angle?: {a: number; c: number; b: number; text: string};
	name?: string;
	shape?: string;
	at?: number;
	/** Frame the angle arc and label appear. Default at + 40. */
	angleAt?: number;
};
export type Shapes3DProps = {models: Model3D[]; spinSeconds?: number; delay?: number};

const ID = 'c12m7s3';
const W = 760;
const CH = 0.56; // C–H length (model units)

const norm = (v: Vec3): Vec3 => {
	const l = Math.hypot(v[0], v[1], v[2]) || 1;
	return [v[0] / l, v[1] / l, v[2] / l];
};
const add = (a: Vec3, b: Vec3, k = 1): Vec3 => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];

// Tetrahedral directions with one bond along `axis` (unit), the other three
// at 109.47° from it, spaced 120° apart starting at azimuth `phi0`.
const tetraFrom = (axis: 'x+' | 'x-' | 'y+', phi0: number): Vec3[] => {
	const c = -1 / 3, s = Math.sqrt(8 / 9);
	return [0, 1, 2].map((k) => {
		const p = phi0 + (k * 2 * Math.PI) / 3;
		if (axis === 'y+') return [s * Math.cos(p), c, s * Math.sin(p)] as Vec3;
		const sign = axis === 'x+' ? 1 : -1;
		return [c * sign, s * Math.cos(p), s * Math.sin(p)] as Vec3;
	});
};

const PRESETS: Record<NonNullable<Model3D['preset']>, Required<Pick<Model3D, 'atoms' | 'bonds' | 'angle'>>> = {
	methane: (() => {
		const hs = [[0, 1, 0] as Vec3, ...tetraFrom('y+', Math.PI / 2)];
		return {
			atoms: [['C', 0, 0, 0], ...hs.map((d) => ['H', d[0] * CH * 1.15, d[1] * CH * 1.15, d[2] * CH * 1.15] as Atom3)],
			bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]],
			angle: {a: 1, c: 0, b: 2, text: '109.5°'},
		};
	})(),
	ethane: (() => {
		const c1: Vec3 = [-0.38, 0, 0], c2: Vec3 = [0.38, 0, 0];
		const h1 = tetraFrom('x-', Math.PI / 2).map((d) => add(c1, d, CH));
		const h2 = tetraFrom('x+', -Math.PI / 2).map((d) => add(c2, d, CH));
		return {
			atoms: [['C', ...c1], ['C', ...c2], ...[...h1, ...h2].map((p) => ['H', ...p] as Atom3)] as Atom3[],
			bonds: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1], [1, 5, 1], [1, 6, 1], [1, 7, 1]],
			angle: {a: 2, c: 0, b: 3, text: '109.5°'},
		};
	})(),
	ethene: (() => {
		const c1: Vec3 = [-0.36, 0, 0], c2: Vec3 = [0.36, 0, 0];
		const at = (c: Vec3, deg: number) => add(c, [Math.cos((deg * Math.PI) / 180), Math.sin((deg * Math.PI) / 180), 0], CH);
		return {
			atoms: [['C', ...c1], ['C', ...c2], ['H', ...at(c1, 120)], ['H', ...at(c1, 240)], ['H', ...at(c2, 60)], ['H', ...at(c2, -60)]] as Atom3[],
			bonds: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]],
			angle: {a: 2, c: 0, b: 1, text: '120°'},
		};
	})(),
	ethyne: {
		atoms: [['C', -0.3, 0, 0], ['C', 0.3, 0, 0], ['H', -0.3 - CH, 0, 0], ['H', 0.3 + CH, 0, 0]],
		bonds: [[0, 1, 3], [0, 2, 1], [1, 3, 1]],
		angle: {a: 2, c: 0, b: 1, text: '180°'},
	},
};

const R_ATOM: Record<string, number> = {C: 0.2, H: 0.13, O: 0.19, N: 0.19, Cl: 0.22, Br: 0.24};

export const Shapes3DDiagram = ({models, spinSeconds = 9, delay = 62}: Shapes3DProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const n = models.length;
	const slot = W / n;
	const plinthY = 330;
	const unit = Math.min(135, slot * 0.5);

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Molecule shapes and bond angles" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<MolDefs id={ID} />
			{models.map((m, mi) => {
				const spec = m.preset ? {...PRESETS[m.preset], ...m} : m;
				const atoms = (spec.atoms ?? []) as Atom3[];
				const bonds = spec.bonds ?? [];
				const at = m.at ?? 0;
				const cx = slot * (mi + 0.5);
				const pop = spring({frame: frame - at, fps, config: {damping: 14, stiffness: 150, mass: 0.8}});
				const shown = fadeAt(frame, at, 10);
				const bob = idleBob(frame, mi, 3);
				const view = {cx, cy: 200 + bob, unit: unit * Math.max(0.001, pop)};
				// Rock rather than spin: a linear or flat molecule seen end-on hides its shape.
				const yaw = 0.25 + 0.55 * Math.sin((2 * Math.PI * (frame + delay)) / fps / spinSeconds + mi * 1.3);
				const pitch = 0.28;
				const P = atoms.map((a) => {
					const r = rotate([a[1], a[2], a[3]], yaw, pitch);
					return {el: a[0], r, p: project(r, view)};
				});
				const items: DepthItem[] = [];
				bonds.forEach(([i, j, order], k) => {
					const A = P[i].p, B = P[j].p;
					const z = (P[i].r[2] + P[j].r[2]) / 2;
					const dx = B.x - A.x, dy = B.y - A.y;
					const len = Math.hypot(dx, dy) || 1;
					const nx = -dy / len, ny = dx / len;
					const gap = 7 * A.scale * pop;
					items.push({
						depth: z - 0.001,
						el: (
							<g key={`b${k}`} opacity={depthLerp(z, 0.7, 1)}>
								{Array.from({length: order}, (_, l) => {
									const off = (l - (order - 1) / 2) * gap;
									return <line key={l} x1={A.x + nx * off} y1={A.y + ny * off} x2={B.x + nx * off} y2={B.y + ny * off} stroke="#6f6c66" strokeWidth={depthLerp(z, 4, 6.5) * Math.min(1, pop)} strokeLinecap="round" />;
								})}
							</g>
						),
					});
				});
				P.forEach((q, i) => {
					const r = (R_ATOM[q.el] ?? 0.2) * view.unit * q.p.scale;
					items.push({
						depth: q.r[2],
						el: <circle key={`a${i}`} cx={q.p.x} cy={q.p.y} r={Math.max(0, r)} fill={`url(#${ID}-el-${q.el})`} stroke={shade(EL_COLOR[q.el] ?? '#888888', -0.35)} strokeWidth={1} />,
					});
				});

				// Angle arc (in 3D, so it turns with the model).
				const ang = spec.angle;
				const angleIn = fadeAt(frame, m.angleAt ?? at + 40, 14);
				let arc = null;
				if (ang && angleIn > 0) {
					const c3: Vec3 = [atoms[ang.c][1], atoms[ang.c][2], atoms[ang.c][3]];
					const va = norm([atoms[ang.a][1] - c3[0], atoms[ang.a][2] - c3[1], atoms[ang.a][3] - c3[2]]);
					const vb = norm([atoms[ang.b][1] - c3[0], atoms[ang.b][2] - c3[1], atoms[ang.b][3] - c3[2]]);
					const straight = Math.abs(va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2] + 1) < 1e-3;
					const rad = 0.3;
					const pts: string[] = [];
					for (let s = 0; s <= 24; s++) {
						let v: Vec3;
						if (straight) {
							// 180°: sweep through the perpendicular (up) direction.
							const th = (s / 24) * Math.PI;
							v = [va[0] * Math.cos(th), Math.sin(th), va[2] * Math.cos(th)];
						} else v = slerp(va, vb, s / 24);
						const p = project(rotate(add(c3, v, rad), yaw, pitch), view);
						pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
					}
					const mid = pts[12].split(',').map(Number);
					const pc = project(rotate(c3, yaw, pitch), view);
					const lx = pc.x + (mid[0] - pc.x) * 2.1;
					const ly = pc.y + (mid[1] - pc.y) * 2.1;
					arc = (
						<g opacity={angleIn}>
							<polyline points={pts.join(' ')} fill="none" stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 1.5} strokeLinecap="round" />
							<text x={lx} y={ly + 7} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800} stroke="#ffffff" strokeWidth={4} paintOrder="stroke">
								{ang.text}
							</text>
						</g>
					);
				}

				return (
					<g key={mi} opacity={shown}>
						<DioramaPlinth id={ID} cx={cx} cy={plinthY} rx={Math.min(108, slot * 0.42)} />
						<ellipse cx={cx} cy={plinthY - 2} rx={Math.min(60, slot * 0.24)} ry={9} fill="rgba(40,36,30,0.16)" />
						{paintersSort(items)}
						{arc}
						<text x={cx} y={plinthY + 80} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>
							{m.name}
						</text>
						<text x={cx} y={plinthY + 110} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800} opacity={angleIn}>
							{m.shape}
						</text>
						<text x={cx} y={plinthY + 138} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={angleIn}>
							{ang?.text}
						</text>
					</g>
				);
			})}
		</svg>
	);
};
