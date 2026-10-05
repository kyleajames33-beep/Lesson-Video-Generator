// SkeletalDiagram (chem12m8Skeletal): drug structures drawn as skeletal /
// structural formulas that build and highlight in sync with the narration.
//
// Modes
//   gallery  (M8 L11 concept-classify)      the five functional classes, then
//            aspirin / ibuprofen / paracetamol on plinths all tagged "analgesic":
//            same function, visibly different structures.
//   read     (M8 L11 concept-reading)       the three analgesics; each functional
//            group lights up (numbered halo + chip) as the voiceover names it,
//            then the behaviour it implies.
//   modify   (M8 L11 concept-pharmacophore) salicylic acid → aspirin in place:
//            -COOH pharmacophore kept (amber, protected), only the -OH is
//            converted to the -OCOCH₃ ester.
//   reaction (M8 L15 concept-aspirin-synth) salicylic acid + acetic anhydride →
//            aspirin + ethanoic acid, catalyst and heat on the arrow, then
//            crystallisation and filtration; the -OH → -OCOCH₃ acetylation glows.
//
// Structures come from mol-draw.tsx (connectivity checked there).
// Beats are frames after `delay`, placed where the voiceover says each thing.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Mark, Pill, clamp, ease, pop, ramp, textW} from './shared';
import {
	GroupHalo, MolDraw, aceticAnhydride, aspirin, atomXY, centreOn, ethanoicAcid, ibuprofen, paracetamol, salicylicAcid,
	type MolDef,
} from './mol-draw';
import {interpolate} from 'remotion';
import {validateReviewedMedicineDiagram} from '../../medicine-models.mjs';

export type SkeletalProps = {
	/** Isolated source-reviewed enrichment only; legacy output is the default. */
	reviewedMedicine?: boolean;
	mode?: 'gallery' | 'read' | 'modify' | 'reaction';
	delay?: number;
	beats?: number[];
};

const W = 760;
const H = 530;

const DEFAULT_BEATS: Record<NonNullable<SkeletalProps['mode']>, number[]> = {
	// byFunction, analgesic, antibiotic, antiviral, antacid, localAnaes, byStructure, trio, different,
	// functionHeader ("what it does"), structureHeader ("structural features": empty plinths)
	gallery: [210, 255, 285, 322, 329, 374, 457, 614, 718, 90, 150],
	// [ring, g2, g3, behaviour] × aspirin, paracetamol, ibuprofen
	read: [247, 270, 300, 315, 404, 427, 449, 464, 532, 554, 591, 614],
	// start, kept, pharmacophore, onlyOH, convert, result, irritation, cutsBothWays
	modify: [65, 155, 203, 292, 334, 375, 437, 698],
	// salicylic, anhydride, products, conditions, catalysts, heat, isolate, acetylation
	reaction: [94, 132, 208, 254, 308, 346, 400, 438],
};

const beatsFor = (mode: NonNullable<SkeletalProps['mode']>, beats?: number[]) => {
	const d = DEFAULT_BEATS[mode];
	return d.map((v, i) => (beats && typeof beats[i] === 'number' ? beats[i] : v));
};

/** Small numbered badge. */
const Badge = ({x, y, n, color, opacity = 1, scale = 1}: {x: number; y: number; n: number; color: string; opacity?: number; scale?: number}) => (
	<g opacity={opacity} transform={`translate(${x},${y}) scale(${scale})`}>
		<circle r={12} fill={color} stroke="#ffffff" strokeWidth={2} />
		<text y={5.5} textAnchor="middle" fontSize={15} fontWeight={800} fill="#ffffff">{n}</text>
	</g>
);

// ── gallery ─────────────────────────────────────────────────────────────────
const Gallery = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const [tFn, ...rest] = b;
	const tClasses = rest.slice(0, 5);
	const [tStruct, tTrio, tDiff, tFnHead, tStHead] = rest.slice(5);
	const ID = 'c12m8skel-gal';
	const classes = ['analgesic', 'antibiotic', 'antiviral', 'antacid', 'local anaesthetic'];
	const size = 18;
	const widths = classes.map((c) => textW(c, size) + 24);
	const gap = 12;
	const total = widths.reduce((a, w) => a + w, 0) + gap * (classes.length - 1);
	let cur = (W - total) / 2;
	const pillX = widths.map((w) => {
		const x = cur + w / 2;
		cur += w + gap;
		return x;
	});
	const PILL_Y = 70;
	const trio = ease(ramp(frame, tTrio, 18));
	const mols: {name: string; mol: MolDef}[] = [
		{name: 'Aspirin', mol: aspirin()},
		{name: 'Ibuprofen', mol: ibuprofen()},
		{name: 'Paracetamol', mol: paracetamol()},
	];
	const xs = [128, 380, 632];
	const S = 28, FONT = 18;
	const PL_Y = 420;
	const TAG_Y = 150;
	const pulse = idlePulse(frame);
	return (
		<g>
			<DioramaDefs id={ID} />
			<text x={W / 2} y={30} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.12em" opacity={ramp(frame, Math.min(tFnHead, tFn), 16)}>
				BY FUNCTION
			</text>
			{classes.map((c, i) => {
				const p = pop(frame, fps, tClasses[i]);
				const isA = i === 0;
				const amber = isA ? trio : 0;
				return (
					<g key={c} opacity={Math.min(1, p * 1.4)} transform={`translate(${pillX[i]},${PILL_Y}) scale(${0.6 + 0.4 * Math.min(p, 1.1)}) translate(${-pillX[i]},${-PILL_Y})`}>
						<Pill x={pillX[i]} y={PILL_Y} text={c} size={size} color={theme.accent} fill={theme.soft} opacity={1 - amber} />
						{isA && <Pill x={pillX[i]} y={PILL_Y} text={c} size={size} color={TOK.amber} fill="#fff6e6" textColor={TOK.amberInk} strokeWidth={2 + pulse * 1.5 * amber} opacity={amber} />}
					</g>
				);
			})}

			{/* divider: by structure */}
			<g opacity={ramp(frame, Math.min(tStHead, tStruct), 16)}>
				<line x1={40} y1={112} x2={W / 2 - 92} y2={112} stroke={TOK.rule} strokeWidth={2} />
				<line x1={W / 2 + 92} y1={112} x2={W - 40} y2={112} stroke={TOK.rule} strokeWidth={2} />
				<text x={W / 2} y={118} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} letterSpacing="0.12em">BY STRUCTURE</text>
			</g>

			{mols.map((m, i) => {
				const enter = pop(frame, fps, tStruct + 8 + i * 10);
				const {x, y, e} = centreOn(m.mol, S, FONT, xs[i], 0);
				const yy = y + (PL_Y - 6 - e.h / 2);
				const bob = idleBob(frame, i, 1.6);
				return (
					<g key={m.name}>
						<g opacity={Math.min(1, pop(frame, fps, Math.min(tStHead, tStruct) + 6 + i * 8) * 1.3)}>
							<DioramaPlinth id={`${ID}-${i}`} cx={xs[i]} cy={PL_Y} rx={92} />
						</g>
						<g opacity={Math.min(1, enter * 1.3)}>
							<text x={xs[i]} y={PL_Y + 84} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{m.name}</text>
						</g>
						<g opacity={Math.min(1, enter * 1.3)} transform={`translate(0,${(1 - Math.min(enter, 1)) * 30 + bob})`}>
							<MolDraw mol={m.mol} x={x} y={yy} s={S} font={FONT} width={2.8} />
						</g>
						<g opacity={trio} transform={`translate(0,${(1 - trio) * -8})`}>
							<Pill x={xs[i]} y={TAG_Y} text="analgesic" size={16} color={TOK.amber} fill="#fff6e6" textColor={TOK.amberInk} />
						</g>
					</g>
				);
			})}
			<SameDiffBanner frame={frame} t={tDiff} />
		</g>
	);
};

const SameDiffBanner = ({frame, t}: {frame: number; t: number}) => {
	const theme = useAccent();
	const o = ramp(frame, t, 16);
	if (o <= 0) return null;
	// Sits between the tags row and the molecules, across the middle columns.
	return (
		<g opacity={o}>
			{[254, 506].map((x) => (
				<text key={x} x={x} y={330} textAnchor="middle" fill={theme.accent} fontSize={30} fontWeight={800}>≠</text>
			))}
		</g>
	);
};

// ── read ────────────────────────────────────────────────────────────────────
type GroupSpec = {name: string; atoms: number[]; ring?: boolean; badge: [number, number]};
const READ: {name: string; mol: () => MolDef; groups: GroupSpec[]; behaviour: string}[] = [
	{
		name: 'Aspirin',
		mol: aspirin,
		groups: [
			{name: 'aromatic ring', atoms: [0, 1, 2, 3, 4, 5], ring: true, badge: [-1.75, 0.55]},
			{name: 'ester', atoms: [9, 10, 11], badge: [3.45, -1.85]},
			{name: 'carboxylic acid', atoms: [6, 7, 8], badge: [-1.95, -1.55]},
		],
		behaviour: 'acidic, hydrolysable',
	},
	{
		name: 'Paracetamol',
		mol: paracetamol,
		groups: [
			{name: 'aromatic ring', atoms: [0, 1, 2, 3, 4, 5], ring: true, badge: [-1.75, 0]},
			{name: 'phenol', atoms: [10], badge: [-1.0, 2.15]},
			{name: 'amide', atoms: [6, 7, 8], badge: [-1.95, -2.4]},
		],
		behaviour: 'polar, H-bonding',
	},
	{
		name: 'Ibuprofen',
		mol: ibuprofen,
		groups: [
			{name: 'aromatic ring', atoms: [0, 1, 2, 3, 4, 5], ring: true, badge: [-1.75, 0]},
			{name: 'carboxylic acid', atoms: [8, 9, 10], badge: [2.35, -3.25]},
			{name: 'branched hydrocarbon', atoms: [11, 12, 13, 14], badge: [-1.1, 3.0]},
		],
		behaviour: 'mixed polar / non-polar',
	},
];

const Read = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8skel-read';
	const xs = [128, 380, 632];
	const S = 26, FONT = 17;
	const PL_Y = 300;
	const pulse = idlePulse(frame);
	const lastBeat = b[11];
	return (
		<g>
			<DioramaDefs id={ID} />
			{READ.map((m, i) => {
				const mol = m.mol();
				const c = centreOn(mol, S, FONT, xs[i], 0);
				const x = c.x, y = c.y + (PL_Y - 4 - c.e.h / 2);
				const enter = pop(frame, fps, 4 + i * 8);
				const tb = b.slice(i * 4, i * 4 + 4);
				const activeUntil = (k: number) => (k < 2 ? tb[k + 1] : tb[3] + 40);
				const bob = idleBob(frame, i, 1.2);
				const dim = frame > tb[0] - 30 || frame > lastBeat ? 1 : 0.55;
				return (
					<g key={m.name}>
						<g opacity={Math.min(1, enter * 1.3)}>
							<DioramaPlinth id={`${ID}-${i}`} cx={xs[i]} cy={PL_Y} rx={86} />
							<text x={xs[i]} y={28} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>{m.name}</text>
						</g>
						<g opacity={Math.min(1, enter * 1.3) * (0.55 + 0.45 * dim)} transform={`translate(0,${bob})`}>
							{m.groups.map((g, k) => {
								const on = ramp(frame, tb[k], 12);
								const active = frame < activeUntil(k) || frame > lastBeat + 20 ? 1 : 0;
								const isActive = frame >= tb[k] && frame < activeUntil(k);
								const col = isActive ? TOK.amber : theme.accent;
								return (
									<GroupHalo
										key={k}
										mol={mol}
										x={x}
										y={y}
										s={S}
										atoms={g.atoms}
										color={col}
										opacity={on * (isActive ? 0.28 + 0.1 * pulse : active ? 0.2 : 0.16)}
										r={S * 0.55}
										fillRing={g.ring ? [0, 0] : undefined}
									/>
								);
							})}
							<MolDraw mol={mol} x={x} y={y} s={S} font={FONT} width={2.5} />
							{m.groups.map((g, k) => {
								const p = pop(frame, fps, tb[k]);
								const isActive = frame >= tb[k] && frame < activeUntil(k);
								return <Badge key={k} x={x + g.badge[0] * S} y={y + g.badge[1] * S} n={k + 1} color={isActive ? TOK.amber : theme.accent} opacity={Math.min(1, p * 1.5)} scale={Math.min(1.15, p)} />;
							})}
						</g>
						{/* chips */}
						{m.groups.map((g, k) => {
							const p = ramp(frame, tb[k], 12);
							const isActive = frame >= tb[k] && frame < activeUntil(k);
							const cy = 376 + k * 36;
							return (
								<g key={k} opacity={p} transform={`translate(${(1 - p) * -10},0)`}>
									<Badge x={xs[i] - 100} y={cy} n={k + 1} color={isActive ? TOK.amber : theme.accent} />
									<text x={xs[i] - 82} y={cy + 6} fill={isActive ? TOK.amberInk : TOK.ink} fontSize={17} fontWeight={800}>{g.name}</text>
								</g>
							);
						})}
						<g opacity={ramp(frame, tb[3], 14)}>
							<line x1={xs[i] - 104} y1={482} x2={xs[i] + 104} y2={482} stroke={TOK.rule} strokeWidth={2} />
							<text x={xs[i]} y={510} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800}>
								→ {m.behaviour}
							</text>
						</g>
					</g>
				);
			})}
		</g>
	);
};

// ── modify ──────────────────────────────────────────────────────────────────
const Modify = ({frame, fps, b, reviewedMedicine}: {frame: number; fps: number; b: number[]; reviewedMedicine: boolean}) => {
	const theme = useAccent();
	const ID = 'c12m8skel-mod';
	const [tStart, tKeep, tPharm, tOH, tConv, tResult, tIrr, tBoth] = b;
	const mol = aspirin();
	const S = 50, FONT = 24;
	const PL_Y = 372;
	// place so the finished aspirin is centred, standing on the plinth
	const c0 = centreOn(mol, S, FONT, 392, 0);
	const x = c0.x, y = c0.y + (PL_Y - 8 - c0.e.h / 2);
	const pulse = idlePulse(frame);
	const conv = ease(ramp(frame, tConv, 40));
	const hOut = ramp(frame, tConv - 4, 14);
	const bondP = (j: number) => (j < 10 ? 1 : ease(interpolate(conv, [0.15 + (j - 10) * 0.25, 0.55 + (j - 10) * 0.25], [0, 1], clamp)));
	const atomP = (i: number) => (i < 10 ? 1 : ramp(frame, tConv + 10 + (i - 10) * 8, 10));
	const O9 = atomXY(mol, 9, x, y, S);
	const COOH = atomXY(mol, 6, x, y, S);
	const enter = pop(frame, fps, 0);
	const titleSwap = ramp(frame, tConv + 20, 16);
	const keep = ramp(frame, tKeep, 14);
	const pharm = ramp(frame, tPharm, 14);
	const ohTag = ramp(frame, tOH, 14);
	const bob = idleBob(frame, 1, 1.2);
	return (
		<g>
			<DioramaDefs id={ID} />
			{/* title */}
			<g opacity={ramp(frame, tStart - 40, 14)}>
				<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={1 - titleSwap}>Salicylic acid</text>
				<text x={W / 2} y={34} textAnchor="middle" fill={TOK.ink} fontSize={27} fontWeight={800} opacity={titleSwap}>
					Aspirin <tspan fill={TOK.inkDim} fontSize={20} fontWeight={700}>{reviewedMedicine ? '(acetylsalicylic acid)' : '(Bayer, 1897)'}</tspan>
				</text>
			</g>
			<g opacity={Math.min(1, enter * 1.3)}>
				<DioramaPlinth id={ID} cx={W / 2} cy={PL_Y} rx={172} />
			</g>
			<g opacity={Math.min(1, enter * 1.3)} transform={`translate(0,${bob})`}>
				{/* pharmacophore halo (amber) */}
				<GroupHalo mol={mol} x={x} y={y} s={S} atoms={[6, 7, 8]} color={TOK.amber} opacity={keep * (0.3 + 0.1 * pulse)} r={S * 0.5} />
				{/* modified site (teal): the -OH, then the ester */}
				<GroupHalo mol={mol} x={x} y={y} s={S} atoms={[9]} color={theme.accent} opacity={ohTag * (1 - conv) * 0.22} r={S * 0.5} />
				<GroupHalo mol={mol} x={x} y={y} s={S} atoms={[9, 10, 11, 12]} color={theme.accent} opacity={conv * 0.2} r={S * 0.5} />
				<MolDraw mol={mol} x={x} y={y} s={S} font={FONT} width={3.4} bondP={bondP} atomP={atomP} />
				{/* the phenol H, which leaves when -OH becomes -OCOCH₃ */}
				<text x={O9.X + FONT * 0.3} y={O9.Y + FONT * 0.36 - hOut * 30} fontSize={FONT} fontWeight={800} fill={TOK.ink} opacity={1 - hOut} stroke="#ffffff" strokeWidth={4} paintOrder="stroke">H</text>
				{/* protected shield: dashed amber ring around -COOH */}
				<ellipse cx={COOH.X} cy={COOH.Y - S * 0.35} rx={S * 1.55 + pulse * 3} ry={S * 1.0 + pulse * 2} fill="none" stroke={TOK.amber} strokeWidth={3} strokeDasharray="8 7" opacity={pharm} />
			</g>
			{/* pharmacophore tag, left */}
			<g opacity={pharm}>
				<line x1={COOH.X - S * 1.55} y1={COOH.Y - S * 0.35} x2={196} y2={COOH.Y - S * 0.35} stroke={TOK.amber} strokeWidth={2.5} />
				<text x={104} y={COOH.Y - S * 0.35 - 42} textAnchor="middle" fill={TOK.amberInk} fontSize={21} fontWeight={800}>–COOH kept</text>
				<text x={104} y={COOH.Y - S * 0.35 - 16} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} letterSpacing="0.06em">{reviewedMedicine ? 'RETAINED GROUP' : 'PHARMACOPHORE'}</text>
				<text x={104} y={COOH.Y - S * 0.35 + 20} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{reviewedMedicine ? 'acid-base role' : 'inhibits COX'}</text>
				<text x={104} y={COOH.Y - S * 0.35 + 40} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{reviewedMedicine ? 'not sufficient' : 'enzymes'}</text>
				<text x={104} y={COOH.Y - S * 0.35 + 62} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>{reviewedMedicine ? 'to prove efficacy' : '→ pain relief'}</text>
			</g>
			{/* modified-site tag, right */}
			<g opacity={ohTag}>
				<text x={668} y={112} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800} opacity={1 - conv}>–OH</text>
				<text x={668} y={136} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={1 - conv}>{reviewedMedicine ? 'phenolic group' : 'irritating group'}</text>
				<text x={668} y={112} textAnchor="middle" fill={theme.accent} fontSize={21} fontWeight={800} opacity={conv}>–OCOCH₃</text>
				<text x={668} y={136} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700} opacity={conv}>now an ester</text>
				<line x1={668} y1={148} x2={O9.X + 26} y2={O9.Y + 30} stroke={theme.accent} strokeWidth={2.5} opacity={1 - conv} />
				<line x1={668} y1={148} x2={O9.X + S * 1.2} y2={O9.Y - S * 0.2} stroke={theme.accent} strokeWidth={2.5} opacity={conv} />
			</g>
			{/* outcomes */}
			{[
				{t: tResult, ok: true, text: reviewedMedicine ? 'acetyl group matters' : 'pain relief kept'},
				{t: tIrr, ok: true, text: reviewedMedicine ? 'safety needs evidence' : 'stomach irritation ↓'},
			].map((o, i) => {
				const p = pop(frame, fps, o.t);
				const cx = i === 0 ? 226 : 520;
				const w = textW(o.text, 19) * 0.92 + 36;
				return (
					<g key={i} opacity={Math.min(1, p * 1.4)} transform={`translate(${cx},480) scale(${Math.min(1.08, 0.7 + 0.3 * p)}) translate(${-w / 2},0)`}>
						<Mark x={14} y={0} ok={o.ok} size={14} color={theme.accent} />
						<text x={36} y={7} fill={TOK.ink} fontSize={19} fontWeight={800}>{o.text}</text>
					</g>
				);
			})}
			<text x={W / 2} y={518} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700} opacity={ramp(frame, tBoth, 16)}>
				{reviewedMedicine ? 'Structure alone cannot establish effectiveness or safety' : 'but reshape the pharmacophore and potency or effect can shift'}
			</text>
		</g>
	);
};

// ── reaction ────────────────────────────────────────────────────────────────
const Flame = ({x, y, frame}: {x: number; y: number; frame: number}) => {
	const f = 1 + Math.sin(frame / 4) * 0.06;
	return (
		<g transform={`translate(${x},${y}) scale(1,${f})`}>
			<path d="M 0 0 C -12 -4 -12 -20 -2 -34 C 0 -24 8 -22 6 -12 C 12 -16 12 -6 10 -2 C 8 2 4 2 0 0 Z" fill="#f08a24" />
			<path d="M 1 -2 C -5 -4 -5 -12 0 -20 C 1 -14 5 -12 4 -6 C 5 -4 4 -2 1 -2 Z" fill="#ffd257" />
		</g>
	);
};

const Reaction = ({frame, fps, b}: {frame: number; fps: number; b: number[]}) => {
	const theme = useAccent();
	const ID = 'c12m8skel-rxn';
	const [tSA, tAnh, tProd, tCond, tCat, tHeat, tIso, tAcet] = b;
	const S = 30, FONT = 18;
	const sa = salicylicAcid(), anh = aceticAnhydride(), asp = aspirin(), eth = ethanoicAcid();
	const ROW1 = 88;
	const PL_Y = 398;
	const pSA = centreOn(sa, S, FONT, 196, ROW1);
	const pAnh = centreOn(anh, S, FONT, 548, ROW1 + 10);
	const onPl = (m: MolDef, cx: number) => {
		const c = centreOn(m, S, FONT, cx, 0);
		return {x: c.x, y: c.y + (PL_Y - 6 - c.e.h / 2), e: c.e};
	};
	const pAsp = onPl(asp, 222);
	const pEth = onPl(eth, 560);
	const ROW2 = PL_Y - 6 - pAsp.e.h / 2;
	const pulse = idlePulse(frame);
	const acet = ramp(frame, tAcet, 16);
	const arrowP = ease(ramp(frame, tProd - 30, 26));
	const e = (t: number) => Math.min(1, pop(frame, fps, t) * 1.3);
	const bobA = idleBob(frame, 0, 1.2), bobB = idleBob(frame, 1, 1.2);
	return (
		<g>
			<DioramaDefs id={ID} />
			{/* reactants */}
			<g opacity={e(tSA)} transform={`translate(0,${bobA})`}>
				<GroupHalo mol={sa} x={pSA.x} y={pSA.y} s={S} atoms={[9]} color={TOK.amber} opacity={acet * (0.3 + 0.12 * pulse)} r={S * 0.55} />
				<MolDraw mol={sa} x={pSA.x} y={pSA.y} s={S} font={FONT} width={2.6} labelColor={(i) => (i === 9 && acet > 0.5 ? TOK.amberInk : undefined)} />
				<text x={196} y={ROW1 + pSA.e.h / 2 + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>salicylic acid</text>
			</g>
			<text x={372} y={ROW1 + 12} textAnchor="middle" fill={TOK.inkDim} fontSize={36} fontWeight={700} opacity={e(tAnh)}>+</text>
			<g opacity={e(tAnh)} transform={`translate(0,${bobB})`}>
				<GroupHalo mol={anh} x={pAnh.x} y={pAnh.y} s={S} atoms={[0, 1, 2]} color={theme.accent} opacity={acet * 0.22} r={S * 0.55} />
				<MolDraw mol={anh} x={pAnh.x} y={pAnh.y} s={S} font={FONT} width={2.6} />
				<text x={548} y={ROW1 + pSA.e.h / 2 + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>acetic anhydride</text>
			</g>

			{/* arrow + conditions */}
			<Arrow x1={W / 2} y1={176} x2={W / 2} y2={246} color={TOK.ink} width={3.5} head={13} progress={arrowP} />
			<g opacity={ramp(frame, tCond, 14)}>
				<text x={W / 2 - 24} y={204} textAnchor="end" fill={TOK.ink} fontSize={18} fontWeight={800}>acid catalyst</text>
				<text x={W / 2 - 24} y={228} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={700} opacity={ramp(frame, tCat, 14)}>H₃PO₄ or H₂SO₄</text>
			</g>
			<g opacity={ramp(frame, tHeat, 14)}>
				<Flame x={W / 2 + 40} y={226} frame={frame} />
				<text x={W / 2 + 60} y={216} fill={TOK.ink} fontSize={18} fontWeight={800}>gentle heat</text>
			</g>

			{/* products on plinths */}
			<g opacity={e(tProd)}>
				<DioramaPlinth id={`${ID}-a`} cx={222} cy={PL_Y} rx={116} />
				<DioramaPlinth id={`${ID}-b`} cx={560} cy={PL_Y} rx={96} />
			</g>
			<g opacity={e(tProd)} transform={`translate(0,${bobB})`}>
				<GroupHalo mol={asp} x={pAsp.x} y={pAsp.y} s={S} atoms={[10, 11, 12]} color={theme.accent} opacity={acet * 0.22} r={S * 0.55} />
				<GroupHalo mol={asp} x={pAsp.x} y={pAsp.y} s={S} atoms={[9]} color={TOK.amber} opacity={acet * (0.3 + 0.12 * pulse)} r={S * 0.55} />
				<MolDraw mol={asp} x={pAsp.x} y={pAsp.y} s={S} font={FONT} width={2.6} />
			</g>
			<text x={400} y={ROW2 + 12} textAnchor="middle" fill={TOK.inkDim} fontSize={36} fontWeight={700} opacity={e(tProd + 10)}>+</text>
			<g opacity={e(tProd + 10)} transform={`translate(0,${bobA})`}>
				<MolDraw mol={eth} x={pEth.x} y={pEth.y} s={S} font={FONT} width={2.6} />
			</g>
			<g opacity={e(tProd)}>
				<text x={222} y={PL_Y + 82} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>aspirin</text>
				<text x={560} y={PL_Y + 82} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800} opacity={e(tProd + 10)}>ethanoic acid</text>
			</g>
			{/* acetylation tag */}
			<g opacity={acet}>
				<Pill x={418} y={286} text="–OH → –OCOCH₃" size={17} color={TOK.amber} fill="#fff6e6" textColor={TOK.amberInk} strokeWidth={2 + pulse * 1.2} />
			</g>
			{/* isolation */}
			<g opacity={ramp(frame, tIso, 14)}>
				<text x={W / 2 - 130} y={516} textAnchor="end" fill={TOK.inkDim} fontSize={17} fontWeight={800}>then isolate:</text>
				<Pill x={W / 2 - 30} y={510} text="crystallisation" size={17} color={theme.accent} fill={theme.soft} />
				<Arrow x1={W / 2 + 56} y1={510} x2={W / 2 + 92} y2={510} color={TOK.inkDim} width={3} head={10} />
				<Pill x={W / 2 + 160} y={510} text="filtration" size={17} color={theme.accent} fill={theme.soft} />
			</g>
		</g>
	);
};

export const SkeletalDiagram = ({mode = 'gallery', delay = 62, beats, reviewedMedicine = false}: SkeletalProps) => {
	validateReviewedMedicineDiagram({type: 'diorama', kind: 'chem12m8Skeletal', props: {mode, reviewedMedicine}});
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const b = beatsFor(mode, beats);
	const label =
		mode === 'gallery' ? 'Aspirin, ibuprofen and paracetamol are all analgesics yet have different structures'
		: mode === 'read' ? 'Functional groups of aspirin, paracetamol and ibuprofen highlighted in turn'
		: mode === 'modify' ? (reviewedMedicine ? 'Salicylic acid becomes aspirin: the carboxylic acid is retained and the phenolic OH is acetylated. This does not establish equal efficacy or improved clinical safety.' : 'Salicylic acid becomes aspirin: the -COOH pharmacophore is kept and only the -OH becomes an -OCOCH3 ester')
		: 'Salicylic acid plus acetic anhydride gives aspirin plus ethanoic acid with an acid catalyst and gentle heat';
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{mode === 'gallery' && <Gallery frame={frame} fps={fps} b={b} />}
			{mode === 'read' && <Read frame={frame} fps={fps} b={b} />}
			{mode === 'modify' && <Modify frame={frame} fps={fps} b={b} reviewedMedicine={reviewedMedicine} />}
			{mode === 'reaction' && <Reaction frame={frame} fps={fps} b={b} />}
		</svg>
	);
};
