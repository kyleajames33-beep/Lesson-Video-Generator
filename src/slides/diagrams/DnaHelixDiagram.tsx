// DnaHelixDiagram — a labelled DNA double helix, in the diorama family: a
// glossy model standing on a stone display plinth. Two antiparallel sugar-
// phosphate backbones (5′→3′ and 3′→5′) are glossy tubes; base-pair rungs
// connect them, coloured by pair type (A–T one colour, C–G another), each
// base a small glossy bead carrying its letter. Rungs reveal top→bottom.
// Fixed example (not data-driven beyond {type}).
//
// Once built, the model turns slowly on its stand (the hold life): rungs
// swing through the back (dimmer, letters hidden while edge-on) and front.
// Pairings never change while it turns: A always sits across from T, C from G.
//
// Beat plan (frames after the card appears):
//   0    plinth + backbones draw in
//   18+  rungs, one by one, top to bottom
//   ~70  labels + legend; then the slow turn

import {interpolate, useCurrentFrame} from 'remotion';
import {FONT_DISPLAY, TOK} from '../../styles/tokens';
import {useAccent} from '../../styles/theme';
import {DioramaDefs, DioramaPlinth} from './diorama';
import {PaintDefs, clamp, shade} from './kinds/restyle-generic/paint';
import {buildStart, sceneTimingFor} from './kinds/restyle-generic/sceneSync';

// Fixed base sequence read down the left strand; the right strand is the
// Watson–Crick complement. AT pairs vs CG pairs get different colours.
const LEFT_BASES = ['A', 'T', 'G', 'C', 'A', 'C', 'G', 'T', 'A', 'G'] as const;
const COMPLEMENT: Record<string, string> = {A: 'T', T: 'A', G: 'C', C: 'G'};

const ID = 'dnahelix';

export const DnaHelixDiagram = ({delay}: {delay?: number}) => {
	const frame = useCurrentFrame();
	const theme = useAccent();
	const start = buildStart(delay, sceneTimingFor('dnaHelix', 'dnaHelix'));
	const f = frame - start;

	const n = LEFT_BASES.length;
	const topY = 70, botY = 372;
	const cx = 360;          // helix centre line
	const amp = 128;         // horizontal sweep amplitude
	const turns = 1.6;       // how many half-twists across the height

	// Slow turn on the stand once built (≈ one revolution per 17 s).
	const buildEnd = 18 + n * 5 + 20;
	const rot = Math.max(0, f - buildEnd - 30) * 0.012;

	const phase = (t: number) => t * turns * Math.PI * 2 + rot;
	const leftX = (t: number) => cx - amp * Math.cos(phase(t));
	const rightX = (t: number) => cx + amp * Math.cos(phase(t));
	// Depth: +1 = left strand at the front, −1 = at the back.
	const depthL = (t: number) => Math.sin(phase(t));
	const yAt = (t: number) => topY + t * (botY - topY);

	const SAMPLES = 80;
	const buildPath = (xfn: (t: number) => number) => {
		let d = '';
		for (let i = 0; i <= SAMPLES; i++) {
			const t = i / SAMPLES;
			d += `${i === 0 ? 'M' : 'L'} ${xfn(t).toFixed(1)} ${yAt(t).toFixed(1)} `;
		}
		return d;
	};
	const leftPath = buildPath(leftX);
	const rightPath = buildPath(rightX);

	const backboneLen = botY - topY + amp * 5;
	const draw = interpolate(f, [4, 28], [0, 1], clamp);

	const atColor = theme.accent;
	const cgColor = '#b8683c'; // warm clay: clearly distinct from the accent in every subject
	const backbone = '#8a8f96';

	const tube = (d: string, key: string) => (
		<g key={key}>
			<path d={d} fill="none" stroke={shade(backbone, -0.18)} strokeWidth={11} strokeLinecap="round" strokeDasharray={backboneLen} strokeDashoffset={backboneLen * (1 - draw)} />
			<path d={d} fill="none" stroke={backbone} strokeWidth={7} strokeLinecap="round" strokeDasharray={backboneLen} strokeDashoffset={backboneLen * (1 - draw)} />
			<path d={d} fill="none" stroke="#ffffff" strokeOpacity={0.45} strokeWidth={2.5} strokeLinecap="round" transform="translate(-2 -1)" strokeDasharray={backboneLen} strokeDashoffset={backboneLen * (1 - draw)} />
		</g>
	);

	const rungs = LEFT_BASES.map((b, i) => {
		const t = (i + 0.5) / n;
		const lx = leftX(t), rx = rightX(t), y = yAt(t);
		const comp = COMPLEMENT[b];
		const color = b === 'A' || b === 'T' ? atColor : cgColor;
		const s = 18 + i * 5;
		const op = interpolate(f, [s, s + 12], [0, 1], clamp);
		const zl = depthL(t);
		// Edge-on rungs are short; hide the letters so they don't pile up.
		const width = Math.abs(rx - lx);
		const letters = interpolate(width, [60, 110], [0, 1], clamp);
		const beadL = {x: lx, z: zl, base: b, k: 'l'};
		const beadR = {x: rx, z: -zl, base: comp, k: 'r'};
		const mid = (lx + rx) / 2;
		return {i, y, op, color, letters, beads: [beadL, beadR], mid, lx, rx, zl};
	});

	const bead = (x: number, y: number, z: number, base: string, color: string, letters: number, key: string) => {
		const depth = interpolate(z, [-1, 1], [0.55, 1]);
		return (
			<g key={key} opacity={depth}>
				<circle cx={x} cy={y} r={14 * (0.85 + 0.15 * depth)} fill={`url(#${ID}-${color === atColor ? 'at' : 'cg'}-ball)`} stroke={shade(color, -0.3)} strokeWidth={1} />
				<text x={x} y={y + 5.5} textAnchor="middle" fill="#ffffff" fontSize={15} fontWeight={800} opacity={letters * (z > -0.2 ? 1 : 0.6)} style={{textShadow: '0 1px 1px rgba(0,0,0,0.35)'}}>
					{base}
				</text>
			</g>
		);
	};

	const labelsIn = interpolate(f, [buildEnd - 10, buildEnd + 4], [0, 1], clamp);

	return (
		<svg viewBox="0 0 720 500" role="img" aria-label="DNA double helix with complementary base pairs on antiparallel backbones" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<PaintDefs id={ID} colors={{at: atColor, cg: cgColor}} />
			</defs>

			<g opacity={interpolate(f, [0, 12], [0, 1], clamp)}>
				<DioramaPlinth id={ID} cx={cx} cy={402} rx={150} />
			</g>

			{/* back halves of rungs first, then the tubes, then the front halves (a simple depth sort) */}
			{rungs.map((r) => (
				<g key={`rb${r.i}`} opacity={r.op}>
					<line x1={r.lx} y1={r.y} x2={r.rx} y2={r.y} stroke={r.color} strokeWidth={6} strokeLinecap="round" opacity={0.75} />
					{r.beads.filter((b) => b.z <= 0).map((b) => bead(b.x, r.y, b.z, b.base, r.color, r.letters, `b${b.k}`))}
				</g>
			))}
			{tube(leftPath, 'L')}
			{tube(rightPath, 'R')}
			{rungs.map((r) => (
				<g key={`rf${r.i}`} opacity={r.op}>{r.beads.filter((b) => b.z > 0).map((b) => bead(b.x, r.y, b.z, b.base, r.color, r.letters, `f${b.k}`))}</g>
			))}

			{/* strand-end labels ride with the strands as the model turns */}
			<g opacity={labelsIn} fontSize={19} fontWeight={800} fill={TOK.inkDim}>
				<text x={leftX(0)} y={topY - 20} textAnchor="middle">5′</text>
				<text x={rightX(0)} y={topY - 20} textAnchor="middle">3′</text>
				<text x={leftX(1) + (Math.cos(phase(1)) >= 0 ? -28 : 28)} y={botY + 6} textAnchor="middle">3′</text>
				<text x={rightX(1) + (Math.cos(phase(1)) >= 0 ? 28 : -28)} y={botY + 6} textAnchor="middle">5′</text>
			</g>

			{/* legend */}
			<g opacity={labelsIn} fontSize={17} fontWeight={650} fill={TOK.inkDim}>
				<rect x={40} y={100} width={22} height={10} rx={5} fill={atColor} />
				<text x={70} y={110}>A–T pair</text>
				<rect x={40} y={132} width={22} height={10} rx={5} fill={cgColor} />
				<text x={70} y={142}>C–G pair</text>
			</g>
			<text x={cx} y={492} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800} opacity={labelsIn}>
				antiparallel sugar–phosphate backbones
			</text>
		</svg>
	);
};
