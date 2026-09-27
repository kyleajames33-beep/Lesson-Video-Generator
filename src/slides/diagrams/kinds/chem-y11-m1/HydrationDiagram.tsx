// HydrationDiagram — water pulling an ionic lattice apart, ion by ion.
//
// Left: one water molecule, large, with its δ− oxygen and δ+ hydrogens (the
// permanent dipole). Right: a plinth with a small ionic lattice and free water
// molecules. On the beats, waters turn their δ− oxygen towards a cation and a
// δ+ hydrogen towards an anion, the ion–dipole forces tug both ions out of the
// lattice, and each freed ion ends up inside a ring of water: its hydration
// shell (amber, the key idea). A last beat can add a caution note (for lattices
// too strong for hydration to pay back).
//
// Geometry is fixed and deterministic; the labels, beats and caution note come
// from props. Ions are drawn with CPK colours for the given elements.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, ELEMENT_COLORS, idleBob, idlePulse} from '../../diorama';
import {clamp, fadeAt, popAt, shade} from './shared';

export type HydrationProps = {
	title?: string;
	cation?: {el: string; label: string};
	anion?: {el: string; label: string};
	caution?: string;
	delay?: number;
	beats?: {dipole?: number; cation?: number; anion?: number; pull?: number; shell?: number; caution?: number};
};

const ID = 'c11hyd';
const W = 760;
const H = 530;
const ease = Easing.inOut(Easing.cubic);

// Water geometry: O–H distance and the 104.5° H–O–H angle (±52° about the axis).
const O_R = 12.5;
const H_R = 8.5;
const OH = 18;
const HALF = (52 * Math.PI) / 180;

const atomFill = (el: string) => `url(#${ID}-atom-${el})`;
const atomStroke = (el: string) => shade(ELEMENT_COLORS[el] ?? '#9a9a9a', -0.35);

/** A water molecule with O at (x, y); `axis` is the direction (rad) from O towards the H side. */
const Water = ({x, y, axis, scale = 1, opacity = 1}: {x: number; y: number; axis: number; scale?: number; opacity?: number}) => {
	const hs = [-1, 1].map((sg) => ({x: x + Math.cos(axis + sg * HALF) * OH * scale, y: y + Math.sin(axis + sg * HALF) * OH * scale}));
	// Paint back-to-front by y so overlaps look solid.
	const parts = [
		{el: 'O', x, y, r: O_R * scale},
		...hs.map((h) => ({el: 'H', x: h.x, y: h.y, r: H_R * scale})),
	].sort((a, b) => a.y - b.y);
	return (
		<g opacity={opacity}>
			{parts.map((p, i) => (
				<circle key={i} cx={p.x} cy={p.y} r={p.r} fill={atomFill(p.el)} stroke={atomStroke(p.el)} strokeWidth={1} />
			))}
		</g>
	);
};

const Ion = ({el, x, y, r, sign}: {el: string; x: number; y: number; r: number; sign: '+' | '−'}) => (
	<g>
		<circle cx={x} cy={y} r={r} fill={atomFill(el)} stroke={atomStroke(el)} strokeWidth={1} />
		<text x={x} y={y + r * 0.42} textAnchor="middle" fill="#ffffff" fontSize={r * 1.15} fontWeight={800}>
			{sign}
		</text>
	</g>
);

export const HydrationDiagram = ({
	title = "Water's dipoles wrap each ion",
	cation = {el: 'Na', label: 'Na⁺'},
	anion = {el: 'Cl', label: 'Cl⁻'},
	caution = 'BaSO₄, AgCl: lattice too strong, so insoluble',
	delay = 62,
	beats = {},
}: HydrationProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {dipole: 102, cation: 413, anion: 522, pull: 624, shell: 819, caution: 834, ...beats};

	// ── Main plinth + lattice ────────────────────────────────────────────
	const PC = {x: 480, y: 318, rx: 250};
	const SQUASH = 0.62; // a wide, low plinth
	const cols = 4;
	const rows = 3;
	const colW = 50;
	const rowH = 32;
	const L0 = {x: PC.x - ((cols - 1) * colW) / 2 - 8, y: PC.y - 62};
	const CAT_R = 14;
	const AN_R = 21;
	const cells = Array.from({length: rows * cols}, (_, k) => {
		const c = k % cols;
		const r = Math.floor(k / cols);
		return {c, r, x: L0.x + c * colW + r * 9, y: L0.y + r * rowH, cat: (c + r) % 2 === 0};
	});
	// The two ions that leave: front-left cation, front-right anion.
	const catCell = cells.find((q) => q.r === rows - 1 && q.c === 0)!;
	const anCell = cells.find((q) => q.r === rows - 1 && q.c === cols - 1)!;
	const pull = interpolate(frame, [b.pull, b.pull + 80], [0, 1], {...clamp, easing: ease});
	const catEnd = {x: PC.x - 148, y: PC.y + 30};
	const anEnd = {x: PC.x + 150, y: PC.y + 30};
	const catPos = {x: catCell.x + (catEnd.x - catCell.x) * pull, y: catCell.y + (catEnd.y - catCell.y) * pull + idleBob(frame, 1, 1.2) * pull};
	const anPos = {x: anCell.x + (anEnd.x - anCell.x) * pull, y: anCell.y + (anEnd.y - anCell.y) * pull + idleBob(frame, 2, 1.2) * pull};

	// ── Waters: each starts free on the plinth, then joins an ion's shell ──
	// Shell k around the cation: O towards the ion (axis points away from the ion).
	// Shell k around the anion: one O–H bond points straight at the ion.
	const SHELL_N = 6;
	const free = [
		[-205, -30], [-120, -78], [-40, -96], [150, -92], [210, -40], [232, 26],
		[-230, 30], [-80, 70], [60, 78], [120, 50], [-170, -70], [190, -80],
	];
	// Shells only start to turn once their ions are free (so no target drifts into the lattice).
	const shellAngle = (k: number) => (k / SHELL_N) * Math.PI * 2 + (Math.max(0, frame - b.pull) / 160) * pull;
	// Angles that point into the lattice wait until the ion is out.
	const intoLattice = (ang: number, side: -1 | 1) => {
		const dx = Math.cos(ang);
		const dy = Math.sin(ang);
		return dy < -0.35 || dx * side > 0.35;
	};
	const waterState = (k: number) => {
		const ionIdx = k < SHELL_N ? 0 : 1;
		const kk = k % SHELL_N;
		const start = {x: PC.x + free[k][0], y: PC.y + 6 + free[k][1] * 0.55};
		const ang = shellAngle(kk);
		const side = ionIdx === 0 ? -1 : 1; // lattice lies to the ion's right (cation) / left (anion)
		const join = ionIdx === 0 ? b.cation : b.anion;
		const waits = intoLattice((kk / SHELL_N) * Math.PI * 2, side === -1 ? 1 : -1);
		const t0 = waits ? b.pull + 30 : join + kk * 8;
		const t = interpolate(frame, [t0, t0 + 50], [0, 1], {...clamp, easing: ease});
		const ion = ionIdx === 0 ? catPos : anPos;
		let target: {x: number; y: number};
		let axis: number;
		if (ionIdx === 0) {
			const R = CAT_R + O_R + 7;
			target = {x: ion.x + Math.cos(ang) * R, y: ion.y + Math.sin(ang) * R * 0.9};
			axis = ang; // H side faces away from the cation
		} else {
			const R = AN_R + H_R + 4 + OH; // O sits beyond the pointing H
			target = {x: ion.x + Math.cos(ang) * R, y: ion.y + Math.sin(ang) * R * 0.9};
			axis = ang + Math.PI + HALF; // one O–H bond points back at the anion
		}
		const freeAxis = (k * 1.3 + frame / 90) % (Math.PI * 2);
		const x = start.x + (target.x - start.x) * t + idleBob(frame, k + 30, 1.6) * (1 - t);
		const y = start.y + (target.y - start.y) * t + idleBob(frame, k + 60, 1.6) * (1 - t);
		// Rotate the shortest way from the free orientation to the shell orientation.
		let d = axis - freeAxis;
		d = Math.atan2(Math.sin(d), Math.cos(d));
		return {x, y, axis: freeAxis + d * t, t};
	};
	const waters = Array.from({length: SHELL_N * 2}, (_, k) => waterState(k));

	const shell = fadeAt(frame, b.shell, 16);
	const catSeen = fadeAt(frame, b.cation - 20, 14);
	const anSeen = fadeAt(frame, b.anion - 20, 14);

	// Close-up water (left)
	const CU = {x: 108, y: 300};
	const cuIn = popAt(frame, fps, b.dipole);

	const drawOrder = [...cells.map((c) => ({kind: 'ion' as const, c, y: c.y})), ...waters.map((w, k) => ({kind: 'water' as const, k, y: w.y}))].sort((p, q) => p.y - q.y);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${title}: water molecules pull ${cation.label} and ${anion.label} out of the lattice into hydration shells`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['O', 'H', cation.el, anion.el]} />

			<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={fadeAt(frame, 0)}>
				{title}
			</text>

			{/* Close-up: one water molecule and its dipole */}
			<g opacity={Math.min(1, cuIn * 1.5)} transform={`translate(${CU.x},${CU.y + 90}) scale(${0.7 + 0.3 * Math.min(1, cuIn)}) translate(${-CU.x},${-CU.y - 90})`}>
				<DioramaPlinth id={ID} cx={CU.x} cy={CU.y + 90} rx={84} />
				<g transform={`translate(0, ${idleBob(frame, 5, 2)})`}>
					<Water x={CU.x} y={CU.y} axis={Math.PI / 2} scale={2.4} />
					<text x={CU.x} y={CU.y - 32} textAnchor="middle" fill="#c0392b" fontSize={24} fontWeight={800}>δ−</text>
					<text x={CU.x - 44} y={CU.y + 50} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={800}>δ+</text>
					<text x={CU.x + 44} y={CU.y + 50} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={800}>δ+</text>
				</g>
				<text x={CU.x} y={CU.y + 158} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>permanent</text>
				<text x={CU.x} y={CU.y + 180} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>dipole</text>
			</g>

			{/* Main plinth */}
			<g opacity={fadeAt(frame, 2)}>
				<g transform={`translate(0, ${PC.y}) scale(1, ${SQUASH}) translate(0, ${-PC.y})`}>
					<DioramaPlinth id={ID} cx={PC.x} cy={PC.y} rx={PC.rx} />
				</g>
			</g>

			{/* Hydration shells (behind the particles) */}
			{[{p: catPos, R: CAT_R + O_R + 7 + 16}, {p: anPos, R: AN_R + H_R + 4 + OH + 16}].map((s, i) => (
				<ellipse key={i} cx={s.p.x} cy={s.p.y} rx={s.R + 4} ry={(s.R + 4) * 0.9} fill={TOK.amber} fillOpacity={0.1 * shell} stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} strokeDasharray="6 5" opacity={shell} />
			))}

			{/* Lattice ions and waters, painted back to front */}
			<g opacity={fadeAt(frame, 4)}>
				{drawOrder.map((d) => {
					if (d.kind === 'ion') {
						const c = d.c;
						const moving = c === catCell ? catPos : c === anCell ? anPos : null;
						const x = moving ? moving.x : c.x + idleBob(frame, c.c + c.r * 4, 0.6);
						const y = moving ? moving.y : c.y;
						return <Ion key={`i${c.c}-${c.r}`} el={c.cat ? cation.el : anion.el} x={x} y={y} r={c.cat ? CAT_R : AN_R} sign={c.cat ? '+' : '−'} />;
					}
					const w = waters[d.k];
					return <Water key={`w${d.k}`} x={w.x} y={w.y} axis={w.axis} />;
				})}
			</g>

			{/* Orientation notes on the beats */}
			<g opacity={catSeen * (1 - fadeAt(frame, b.pull, 14))}>
				<text x={catCell.x - 50} y={L0.y - 38} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>δ− O faces {cation.label}</text>
			</g>
			<g opacity={anSeen * (1 - fadeAt(frame, b.pull, 14))}>
				<text x={anCell.x + 40} y={L0.y - 38} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>δ+ H faces {anion.label}</text>
			</g>

			{/* Ion labels once free */}
			<g opacity={fadeAt(frame, b.pull + 60, 14)}>
				<text x={catEnd.x} y={catEnd.y + 84} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{cation.label}</text>
				<text x={anEnd.x} y={anEnd.y + 100} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{anion.label}</text>
			</g>
			<g opacity={shell}>
				<text x={PC.x} y={PC.y - 128} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800}>hydration shells</text>
			</g>

			{/* Caution */}
			<g opacity={fadeAt(frame, b.caution + 30, 16)}>
				<text x={PC.x} y={514} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					{caution}
				</text>
			</g>
			{/* keep theme import used for future accents */}
			<g opacity={0}><rect width={1} height={1} fill={theme.accent} /></g>
		</svg>
	);
};
