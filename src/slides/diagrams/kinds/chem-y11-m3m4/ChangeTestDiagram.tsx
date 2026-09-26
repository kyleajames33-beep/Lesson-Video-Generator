// ChangeTestDiagram — "did the atoms get rearranged?" as two dioramas.
//
// Left plinth: ice melts. The same six H₂O molecules leave their ordered block
// and jostle as a liquid: nothing new is made, so it is PHYSICAL. Right plinth:
// iron rusts. Four Fe atoms and three O₂ molecules break apart and regroup as
// two Fe₂O₃ units (4Fe + 3O₂ → 2Fe₂O₃): a new substance, so it is CHEMICAL.
// A tally under each plinth shows the atom counts are identical before and
// after (conservation of mass).
//
// Beats (frames after `delay`), timed to the concept voiceover:
//   melt 300 · "physical" 520 · rust 570 · "chemical" 750 · conservation 1000

import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, Molecule, idleBob, idlePulse} from '../../diorama';
import {Ball, ExtraAtomDefs, clamp, ramp} from './shared';

export type ChangeTestProps = {
	delay?: number;
	/** Frames after delay: [melt, physical verdict, rust, chemical verdict, conservation]. */
	beats?: [number, number, number, number, number];
};

const ID = 'c11m3chg';
const W = 760;
const PY = 238;
const RX = 168;
const L = 192;
const R = 568;

const ease = (t: number) => t * t * (3 - 2 * t);

export const ChangeTestDiagram = ({delay = 90, beats = [300, 520, 570, 750, 1000]}: ChangeTestProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const [tMelt, tPhys, tRust, tChem, tCons] = beats;

	const melt = ease(interpolate(frame, [tMelt, tMelt + 70], [0, 1], clamp));
	const rust = ease(interpolate(frame, [tRust, tRust + 80], [0, 1], clamp));
	const enter = (i: number) => Math.max(0, spring({frame: frame - 8 - i * 3, fps, config: {damping: 13, stiffness: 200, mass: 0.6}}));

	// Ice: a 3 × 2 lattice. Liquid: the same molecules, jumbled across the plinth.
	const iceSlots = [-60, 0, 60].flatMap((dx) => [-16, 22].map((dy) => ({x: L + dx, y: PY + dy - 10})));
	const liquidSlots = [
		{x: L - 100, y: PY + 8}, {x: L - 34, y: PY - 22}, {x: L + 38, y: PY + 18},
		{x: L + 102, y: PY - 6}, {x: L - 50, y: PY + 34}, {x: L + 22, y: PY - 34},
	];
	const water = iceSlots.map((s, i) => {
		const t = s;
		const d = liquidSlots[i];
		const wob = melt * idleBob(frame, i * 3, 4.5);
		return {x: t.x + (d.x - t.x) * melt + wob * 0.6, y: t.y + (d.y - t.y) * melt + wob, i};
	});

	// Rust: 4 Fe + 3 O₂ → 2 Fe₂O₃. Each Fe₂O₃ is drawn as 2 Fe with 3 O around them.
	const fe0 = [{x: R - 108, y: PY + 20}, {x: R - 36, y: PY + 30}, {x: R + 36, y: PY + 20}, {x: R + 108, y: PY + 30}];
	const o0 = [
		{x: R - 96, y: PY - 26}, {x: R - 68, y: PY - 26}, {x: R - 14, y: PY - 32},
		{x: R + 14, y: PY - 32}, {x: R + 68, y: PY - 26}, {x: R + 96, y: PY - 26},
	];
	const clusterC = [{x: R - 70, y: PY + 4}, {x: R + 70, y: PY + 4}];
	const feOff = [{x: -17, y: 8}, {x: 17, y: 8}];
	const oOff = [{x: 0, y: -18}, {x: -38, y: -4}, {x: 38, y: -4}];
	const atoms = [
		...fe0.map((p, i) => {
			const c = clusterC[Math.floor(i / 2)];
			const d = {x: c.x + feOff[i % 2].x, y: c.y + feOff[i % 2].y};
			return {el: 'Fe', r: 18, x: p.x + (d.x - p.x) * rust, y: p.y + (d.y - p.y) * rust - Math.sin(rust * Math.PI) * 26, k: i};
		}),
		...o0.map((p, i) => {
			const c = clusterC[Math.floor(i / 3)];
			const d = {x: c.x + oOff[i % 3].x, y: c.y + oOff[i % 3].y};
			return {el: 'O', r: 14, x: p.x + (d.x - p.x) * rust, y: p.y + (d.y - p.y) * rust - Math.sin(rust * Math.PI) * 34, k: i + 4};
		}),
	]
		.map((a) => ({...a, y: a.y + idleBob(frame, a.k + 11, 1.6)}))
		.sort((a, b) => a.y - b.y);

	const physIn = ramp(frame, tPhys, 14);
	const chemIn = ramp(frame, tChem, 14);
	const consIn = ramp(frame, tCons, 16);
	const tagY = 374;

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label="Ice melting keeps the same H₂O molecules (physical change); iron rusting rearranges atoms into iron oxide (chemical change); atom counts are unchanged in both" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={['H', 'O']} />
			<ExtraAtomDefs id={ID} elements={['Fe']} />

			<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={ramp(frame, 0)}>
				Did the atoms get rearranged?
			</text>

			{/* Column titles */}
			{[
				{x: L, t: 'Ice melting', s: 'H₂O(s) → H₂O(l)'},
				{x: R, t: 'Iron rusting', s: 'iron + oxygen → iron oxide'},
			].map((c, i) => (
				<g key={c.t} opacity={ramp(frame, 4 + i * 6)}>
					<text x={c.x} y={96} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{c.t}</text>
					<text x={c.x} y={122} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>{c.s}</text>
				</g>
			))}

			{/* Left: ice → water */}
			<g opacity={ramp(frame, 2)}>
				<DioramaPlinth id={ID} cx={L} cy={PY} rx={RX}>
					{/* puddle spreads as it melts */}
					<ellipse cx={L} cy={PY + 4} rx={130 * melt} ry={38 * melt} fill="rgba(110,180,230,0.45)" />
					{/* ice block */}
					<g opacity={1 - melt}>
						<rect x={L - 98} y={PY - 66 + 30 * melt} width={196} height={96 - 30 * melt} rx={12} fill="rgba(200,230,248,0.62)" stroke="rgba(120,170,210,0.8)" strokeWidth={2} />
						<rect x={L - 80} y={PY - 54 + 30 * melt} width={60} height={8} rx={4} fill="#ffffff" opacity={0.7} />
					</g>
					{water
						.slice()
						.sort((a, b) => a.y - b.y)
						.map((m) => (
							<Molecule key={m.i} id={ID} atoms={['O', 'H', 'H']} x={m.x} y={m.y} r={17} scale={enter(m.i)} />
						))}
				</DioramaPlinth>
			</g>

			{/* Right: iron + oxygen → iron oxide */}
			<g opacity={ramp(frame, 8)}>
				<DioramaPlinth id={ID} cx={R} cy={PY} rx={RX}>
					{/* rust bloom on the grass once the new substance exists */}
					<ellipse cx={R} cy={PY + 4} rx={136} ry={40} fill="#b5532b" opacity={0.22 * rust} />
					{/* O₂ bonds (drawn only while the pairs are intact) */}
					{[0, 1, 2].map((k) => (
						<line key={k} x1={o0[2 * k].x} y1={o0[2 * k].y} x2={o0[2 * k + 1].x} y2={o0[2 * k + 1].y} stroke="#9a2a22" strokeWidth={5} opacity={(1 - Math.min(1, rust * 4)) * ramp(frame, 12)} />
					))}
					{atoms.map((a) => (
						<Ball key={`${a.el}${a.k}`} id={ID} el={a.el} x={a.x} y={a.y} r={a.r} scale={enter(a.k)} />
					))}
				</DioramaPlinth>
			</g>

			{/* Formula labels that change with the substance */}
			<text x={L} y={378} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>
				{melt < 0.5 ? 'H₂O (ice)' : 'H₂O (water)'}
			</text>
			<text x={R} y={378} textAnchor="middle" fill={rust > 0.5 ? '#9c4020' : TOK.ink} fontSize={22} fontWeight={800}>
				{rust < 0.5 ? '4Fe + 3O₂' : '2Fe₂O₃ (iron oxide)'}
			</text>

			{/* Verdicts */}
			<g opacity={physIn}>
				<text x={L} y={tagY + 38} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} letterSpacing="0.05em">
					SAME SUBSTANCE → PHYSICAL
				</text>
			</g>
			<g opacity={chemIn}>
				<text x={R} y={tagY + 38} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} letterSpacing="0.05em" opacity={0.75 + 0.25 * idlePulse(frame)}>
					ATOMS REARRANGED → CHEMICAL
				</text>
			</g>

			{/* Conservation tally: identical atom counts before and after */}
			<g opacity={consIn}>
				<text x={L} y={tagY + 72} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					atoms: H 12 · O 6 → H 12 · O 6
				</text>
				<text x={R} y={tagY + 72} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>
					atoms: Fe 4 · O 6 → Fe 4 · O 6
				</text>
				<text x={W / 2} y={tagY + 116} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>
					Atoms are never created or destroyed, only rearranged
				</text>
			</g>
		</svg>
	);
};
