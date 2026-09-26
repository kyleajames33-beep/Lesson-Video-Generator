// hdMitosis — one cell goes through mitosis, drawn in the hand-drawn style.
//
// A diploid cell with two homologous pairs (2n = 4; one long pair, one short
// pair; maternal and paternal copies in the two accent shades) runs through
// interphase → prophase → metaphase → anaphase → telophase + cytokinesis and
// ends as two daughter cells with the same four chromosomes. A stage strip
// along the bottom tracks where we are; one handwritten note per stage says
// what is happening.
//
// Beat plan (frames @30 fps, relative to `delay`, default 62; S = stageFrames,
// default 60):
//   0·S  interphase: nucleus with loose chromatin (DNA has replicated)
//   1·S  prophase: chromatin condenses into X-shaped chromosomes (two sister
//        chromatids each), nuclear envelope breaks down, centrosomes to poles
//   2·S  metaphase: chromosomes line up on the equator, spindle fibres attach
//   3·S  anaphase: sister chromatids separate and move to opposite poles
//   4·S  telophase + cytokinesis: nuclei reform, the cell pinches in two
//   5·S  hold: two genetically identical daughter cells
//
// Biology checks: sisters (not homologues) separate in anaphase; each daughter
// receives one chromatid from every chromosome, so both get the full set of
// four (long + short, maternal + paternal) = identical to the parent.

import {useCurrentFrame} from 'remotion';
import {TOK} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {Hand, HandSvg, PENCIL, ramp} from './shared';

const ID = 'hdmit';
const CX = 380;
const CY = 232;
const POLE_L = 196;
const POLE_R = 564;
const STAGES = ['interphase', 'prophase', 'metaphase', 'anaphase', 'telophase'];
const NOTES = [
	'DNA has been copied; chromatin is loose',
	'chromosomes condense; the nuclear envelope breaks down',
	'chromosomes line up on the equator',
	'sister chromatids are pulled to opposite poles',
	'nuclei re-form; cytokinesis splits the cell',
];
const DONE_NOTE = 'two genetically identical daughter cells';

// `pole`: where this chromosome's chromatid sits in each daughter group (dx, dy).
type Chromo = {len: number; shade: 0 | 1; pro: [number, number, number]; metaY: number; pole: [number, number]};
const CHROMOS: Chromo[] = [
	{len: 56, shade: 0, pro: [332, 196, 30], metaY: 150, pole: [-14, -24]},
	{len: 56, shade: 1, pro: [428, 206, -24], metaY: 212, pole: [14, -24]},
	{len: 36, shade: 0, pro: [344, 280, -40], metaY: 268, pole: [-14, 30]},
	{len: 36, shade: 1, pro: [420, 276, 16], metaY: 312, pole: [14, 30]},
];

const MATERNAL_ALT = '#c65a70';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export type HdMitosisProps = {delay?: number; stageFrames?: number; notes?: boolean};

export const HdMitosis = ({delay = 62, stageFrames = 60, notes = true}: HdMitosisProps) => {
	const f = useCurrentFrame() - delay;
	const theme = useAccent();
	const S = stageFrames;
	// maternal vs paternal copy of each pair: the subject accent vs a warm rose,
	// so homologues are told apart at a glance (two same-hue blues were not)
	const shades = [theme.accent, MATERNAL_ALT];
	const stage = Math.max(0, Math.min(5, Math.floor(f / S)));
	const st = (k: number) => ramp(f, k * S, (k + 1) * S); // progress through stage k

	const condense = ramp(f, 1 * S, 1.6 * S);
	const envelope = 1 - ramp(f, 1.4 * S, 2 * S);
	const toPoles = ramp(f, 1 * S, 1.8 * S);
	const line = ramp(f, 2 * S, 2.6 * S);
	const fibres = ramp(f, 2.2 * S, 2.8 * S) * (1 - ramp(f, 4 * S, 4.4 * S));
	const split = ramp(f, 3 * S, 3.85 * S);
	const newNuclei = ramp(f, 4 * S, 4.5 * S);
	const pinch = ramp(f, 4.2 * S, 5 * S);

	// Cell outline: two ellipses whose union is the cell; they drift apart in cytokinesis.
	const sep = 132 * pinch;
	const rx = lerp(188, 122, pinch);
	const ry = lerp(148, 128, pinch);

	const chromatid = (key: string, x: number, y: number, rot: number, len: number, color: string, o = 1) => (
		<rect
			key={key}
			x={x - 5.5}
			y={y - len / 2}
			width={11}
			height={len}
			rx={5.5}
			fill={color}
			stroke={PENCIL.ink}
			strokeWidth={2}
			opacity={o}
			transform={`rotate(${rot} ${x} ${y})`}
		/>
	);

	const drawStages = f >= 0 ? stage : 0;

	return (
		<HandSvg id={ID}>
			{/* cell (two-ellipse union: strokes first, fills on top hide the inner edges) */}
			<g opacity={ramp(f, 0, 8)}>
				<ellipse cx={CX - sep} cy={CY} rx={rx} ry={ry} fill="none" stroke={PENCIL.ink} strokeWidth={7} />
				<ellipse cx={CX + sep} cy={CY} rx={rx} ry={ry} fill="none" stroke={PENCIL.ink} strokeWidth={7} />
				<ellipse cx={CX - sep} cy={CY} rx={rx} ry={ry} fill={theme.soft} />
				<ellipse cx={CX + sep} cy={CY} rx={rx} ry={ry} fill={theme.soft} />
			</g>

			{/* interphase nucleus + chromatin */}
			{envelope > 0 && (
				<g opacity={envelope * ramp(f, 2, 12)}>
					<circle cx={CX} cy={CY} r={96} fill={PENCIL.paper} stroke={PENCIL.ink} strokeWidth={3} strokeDasharray={stage >= 1 ? '10 8' : undefined} />
					<circle cx={CX + 38} cy={CY - 34} r={14} fill={`url(#${ID}-hatch)`} stroke={PENCIL.inkSoft} strokeWidth={1.6} />
				</g>
			)}
			{condense < 1 &&
				CHROMOS.map((c, i) => {
					const [px, py] = c.pro;
					const pts = Array.from({length: 9}, (_, k) => `${px - 36 + k * 9},${py + Math.sin(k * 1.7 + i) * 10 + (k % 2 ? 5 : -5)}`).join(' ');
					return <polyline key={i} points={pts} fill="none" stroke={shades[c.shade]} strokeWidth={2.4} strokeLinejoin="round" opacity={(1 - condense) * ramp(f, 4, 14)} />;
				})}

			{/* centrosomes */}
			{f >= S &&
				[-1, 1].map((side) => {
					const x = lerp(CX + side * 30, side < 0 ? POLE_L : POLE_R, toPoles);
					const y = lerp(CY - 104, CY, toPoles);
					return (
						<g key={side} stroke={PENCIL.ink} strokeWidth={2.4} strokeLinecap="round" opacity={1 - ramp(f, 4.4 * S, 4.8 * S)}>
							{[0, 45, 90, 135].map((a) => (
								<line key={a} x1={x - 10 * Math.cos((a * Math.PI) / 180)} y1={y - 10 * Math.sin((a * Math.PI) / 180)} x2={x + 10 * Math.cos((a * Math.PI) / 180)} y2={y + 10 * Math.sin((a * Math.PI) / 180)} />
							))}
						</g>
					);
				})}

			{/* equator (amber: the metaphase idea) */}
			<line x1={CX} y1={CY - 132} x2={CX} y2={CY + 132} stroke={TOK.amber} strokeWidth={3} strokeDasharray="9 9" opacity={line * (1 - ramp(f, 3.2 * S, 3.6 * S))} />
			{line > 0 && f < 3.4 * S && (
				<Hand x={CX + 14} y={CY - 118} size={24} anchor="start" color={TOK.amberInk} o={line}>
					equator
				</Hand>
			)}

			{/* chromosomes / chromatids */}
			{condense > 0 &&
				CHROMOS.map((c, i) => {
					const [px, py, prot] = c.pro;
					const mx = lerp(px, CX, line);
					const my = lerp(py, c.metaY, line);
					const rot = lerp(prot, 0, line);
					const ay = lerp(my, CY + c.pole[1], split);
					const gap = 6.5 * ramp(f, 1 * S, 1.6 * S); // sisters side by side
					const lx = lerp(mx - gap, POLE_L + 56 + c.pole[0], split);
					const rxp = lerp(mx + gap, POLE_R - 56 + c.pole[0], split);
					const scale = lerp(0.45, 1, condense);
					const len = c.len * scale;
					const o = condense;
					// after telophase the chromatids sit inside the new nuclei and relax
					const relax = 1 - 0.35 * newNuclei;
					return (
						<g key={i}>
							{chromatid(`${i}a`, lx, ay, rot, len, shades[c.shade], o * relax)}
							{chromatid(`${i}b`, rxp, ay, rot, len, shades[c.shade], o * relax)}
							{split < 0.05 && <circle cx={mx} cy={my} r={4.5 * condense} fill={PENCIL.ink} />}
						</g>
					);
				})}

			{/* spindle fibres: pole → each chromatid's centromere */}
			{fibres > 0 &&
				CHROMOS.flatMap((c, i) => {
					const my = lerp(c.pro[1], c.metaY, line);
					const ay = lerp(my, CY + c.pole[1], split);
					const lx = lerp(CX - 6.5, POLE_L + 56 + c.pole[0], split);
					const rxp = lerp(CX + 6.5, POLE_R - 56 + c.pole[0], split);
					return [
						<line key={`l${i}`} x1={POLE_L} y1={CY} x2={lx} y2={ay} stroke={PENCIL.inkSoft} strokeWidth={1.6} opacity={fibres} />,
						<line key={`r${i}`} x1={POLE_R} y1={CY} x2={rxp} y2={ay} stroke={PENCIL.inkSoft} strokeWidth={1.6} opacity={fibres} />,
					];
				})}

			{/* re-forming nuclei */}
			{newNuclei > 0 &&
				[POLE_L + 56, POLE_R - 56].map((x, k) => (
					<circle
						key={k}
						cx={x}
						cy={CY}
						r={62}
						fill="none"
						stroke={PENCIL.ink}
						strokeWidth={2.6}
						pathLength={1}
						strokeDasharray="1 1"
						strokeDashoffset={1 - newNuclei}
					/>
				))}

			{/* stage strip */}
			{STAGES.map((s, k) => {
				const x = 96 + k * 142;
				const current = k === Math.min(4, drawStages) && f < 5 * S;
				const past = k < drawStages || f >= 5 * S;
				return (
					<g key={s}>
						<Hand x={x} y={430} size={26} color={current ? theme.accent : past ? PENCIL.ink : PENCIL.hatch} weight={current ? 700 : 600}>
							{s}
						</Hand>
						{current && <path d={`M${x - 50},${440} q50,${8} 100,0`} stroke={theme.accent} strokeWidth={3} fill="none" strokeLinecap="round" />}
						{k < 4 && <Hand x={x + 71} y={430} size={22} color={PENCIL.hatch}>→</Hand>}
					</g>
				);
			})}
			{notes && (
				<Hand x={380} y={486} size={28} color={f >= 5 * S ? TOK.amberInk : PENCIL.ink} o={ramp(f, 0, 10)}>
					{f >= 5 * S ? DONE_NOTE : NOTES[Math.min(4, drawStages)]}
				</Hand>
			)}
			{/* per-stage progress tick so the build never looks stalled */}
			<rect x={96 - 50 + Math.min(4, drawStages) * 142} y={450} width={100 * (f >= 5 * S ? 1 : st(Math.min(4, drawStages)))} height={3} fill={theme.accent2} opacity={f < 5 * S ? 0.5 : 0} />
		</HandSvg>
	);
};
