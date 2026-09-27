// GreenDiagram — green-chemistry metrics (Chem Y12 M8 L15).
//
// Modes:
//   metrics — atom economy vs E-factor side by side. Left: a reaction's atoms
//             split into the desired product and a by-product (atom economy =
//             M(desired product) ÷ M(all products) × 100%, higher is better,
//             theoretical). Right: a product block beside its waste pile
//             (E-factor = mass of waste ÷ mass of product, lower is better,
//             practical); solvents and washings join the waste pile, which
//             only E-factor counts (concept-metrics). No numbers: the scene
//             gives none.
//   routes  — three routes on three plinths, each with one block of product
//             and E blocks of waste (E-factor = waste ÷ product, so the stack
//             height IS the E-factor). Routes A and C share 74% atom economy;
//             Route C has the lowest E-factor, so it is greenest (concept-catalysts).
//
// Beats are frames after `delay`, placed where the voiceover says the words.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Ball, GlossDefs, Pill, ease, pop, ramp} from './shared';
import {Crate, Fraction} from './drug-parts';

type Mode = 'metrics' | 'routes';
type Route = {label: string; eFactor: number; atomEconomy?: number};

export type GreenProps = {
	delay?: number;
	mode?: Mode;
	/** Frames after `delay`; meaning depends on mode (see DEFAULT_BEATS). */
	beats?: number[];
	/** routes: E-factors (and atom economies where the scene gives them). */
	routes?: Route[];
	/** routes: optional footer line (Pfizer example). */
	footer?: string;
};

const W = 760;
const H = 530;
const GREY = '#9c9890';
const GREY_INK = '#6f6b64';

const DEFAULT_BEATS: Record<Mode, number[]> = {
	// AE title, AE formula + split, higher better, E title + formula, lower better, not identical, theoretical, practical, solvents
	metrics: [45, 80, 240, 400, 511, 594, 685, 789, 865],
	// plinths + product, AE tags, route B, route A, route C, greenest, one metric isn't enough, footer
	routes: [228, 305, 431, 480, 507, 540, 612, 829],
};

const DEFAULT_ROUTES: Route[] = [
	{label: 'Route A', eFactor: 2, atomEconomy: 74},
	{label: 'Route B', eFactor: 4},
	{label: 'Route C', eFactor: 1, atomEconomy: 74},
];

// ─────────────────────────────────────────────────────────────── metrics
const MetricsMode = ({frame, beats, id, accent, fps}: {frame: number; beats: number[]; id: string; accent: string; fps: number}) => {
	const [tAE, tSplit, tHigh, tE, tLow, tNeq, tTheo, tPrac, tSolv] = beats;
	const split = ease(ramp(frame, tSplit, 40));

	// Nine atoms of "all products": six end in the desired product, three in the by-product.
	const start = Array.from({length: 9}, (_, i) => ({x: 165 + (i % 3) * 30 + (Math.floor(i / 3) % 2) * 15, y: 282 + Math.floor(i / 3) * 22}));
	const prodPos = [
		{x: 108, y: 296}, {x: 138, y: 296}, {x: 168, y: 296}, {x: 123, y: 272}, {x: 153, y: 272}, {x: 138, y: 318},
	];
	const byPos = [{x: 250, y: 300}, {x: 280, y: 300}, {x: 265, y: 276}];
	const target = (i: number) => (i < 6 ? prodPos[i] : byPos[i - 6]);

	const solvIn = pop(frame, fps, tSolv);

	return (
		<g>
			{/* Left: atom economy */}
			<g opacity={ramp(frame, tAE, 16)}>
				<text x={195} y={40} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800}>Atom economy</text>
			</g>
			<g opacity={ramp(frame, tSplit, 16)}>
				<Fraction x={160} y={96} num="M(desired product)" den="M(all products)" size={18} />
				<text x={262} y={103} fill={TOK.ink} fontSize={18} fontWeight={700}>× 100%</text>
			</g>
			<DioramaPlinth id={`${id}a`} cx={195} cy={338} rx={150}>
				<g opacity={ramp(frame, 0, 16)}>
					{start.map((s, i) => {
						const t = target(i);
						const x = s.x + (t.x - s.x) * split + (split >= 1 ? idleBob(frame, i, 1) : 0);
						const y = s.y + (t.y - s.y) * split + (split >= 1 ? idleBob(frame + 30, i, 1) : 0);
						return <Ball key={i} id={id} name={i < 6 ? 'prod' : 'waste'} color={i < 6 ? accent : GREY} x={x} y={y} r={14} />;
					})}
				</g>
			</DioramaPlinth>
			<g opacity={ramp(frame, tSplit + 30, 14)}>
				<text x={138} y={240} textAnchor="middle" fill={accent} fontSize={17} fontWeight={800}>desired product</text>
				<text x={268} y={252} textAnchor="middle" fill={GREY_INK} fontSize={17} fontWeight={800}>by-product</text>
			</g>
			<g opacity={ramp(frame, tHigh, 16)}>
				<text x={195} y={430} textAnchor="middle" fill={accent} fontSize={21} fontWeight={800}>Higher is better</text>
				<text x={195} y={454} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>more atoms end in the wanted product</text>
			</g>
			<g opacity={ramp(frame, tTheo, 16)}>
				<text x={195} y={492} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>Theoretical</text>
				<text x={195} y={515} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>how the reaction's atoms are distributed</text>
			</g>

			{/* Divider + not identical */}
			<line x1={380} y1={24} x2={380} y2={516} stroke={TOK.rule} strokeWidth={2} opacity={ramp(frame, tE, 16)} />
			<g opacity={ramp(frame, tNeq, 16)}>
				<circle cx={380} cy={200} r={22} fill="#ffffff" stroke={TOK.inkDim} strokeWidth={2} />
				<text x={380} y={210} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800}>≠</text>
			</g>

			{/* Right: E-factor */}
			<g opacity={ramp(frame, tE, 16)}>
				<text x={570} y={40} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800}>E-factor</text>
				<Fraction x={570} y={96} num="mass of waste" den="mass of product" size={18} />
			</g>
			<DioramaPlinth id={`${id}b`} cx={570} cy={338} rx={150}>
				<g opacity={ramp(frame, tE, 16)}>
					<Crate x={484} y={352} size={58} color={accent} />
					{byPos.map((p, i) => (
						<Ball key={i} id={id} name="waste" color={GREY} x={p.x + 296 + idleBob(frame, i + 4, 1)} y={p.y + 28} r={14} />
					))}
				</g>
				{solvIn > 0 && (
					<g opacity={Math.min(1, solvIn)} transform={`translate(0, ${(1 - Math.min(1, solvIn)) * -30})`}>
						{/* solvent bottle */}
						<rect x={620} y={290} width={34} height={56} rx={7} fill="rgba(160,200,230,0.55)" stroke="rgba(70,90,110,0.6)" strokeWidth={2} />
						<rect x={629} y={278} width={16} height={14} rx={3} fill="#6f6b64" />
						{/* washings beaker */}
						<path d="M 664 306 L 664 346 Q 664 352 670 352 L 700 352 Q 706 352 706 346 L 706 306" fill="rgba(160,200,230,0.4)" stroke="rgba(70,90,110,0.6)" strokeWidth={2} />
					</g>
				)}
			</DioramaPlinth>
			<g opacity={ramp(frame, tE + 20, 14)}>
				<text x={484} y={262} textAnchor="middle" fill={accent} fontSize={17} fontWeight={800}>product</text>
				<text x={574} y={286} textAnchor="middle" fill={GREY_INK} fontSize={17} fontWeight={800}>waste</text>
			</g>
			<g opacity={ramp(frame, tSolv, 16)}>
				<rect x={606} y={266} width={114} height={98} rx={14} fill="none" stroke={TOK.amber} strokeWidth={2.5 + idlePulse(frame) * 1.5} strokeDasharray="7 5" />
				<text x={640} y={226} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>+ solvents, washings</text>
				<text x={640} y={248} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={700}>(atom economy ignores)</text>
			</g>
			<g opacity={ramp(frame, tLow, 16)}>
				<text x={570} y={430} textAnchor="middle" fill={accent} fontSize={21} fontWeight={800}>Lower is better</text>
				<text x={570} y={454} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>less waste per unit of product</text>
			</g>
			<g opacity={ramp(frame, tPrac, 16)}>
				<text x={570} y={492} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>Practical</text>
				<text x={570} y={515} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>the actual mass of waste generated</text>
			</g>
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── routes
const RoutesMode = ({frame, beats, id, accent, routes, footer}: {frame: number; beats: number[]; id: string; accent: string; routes: Route[]; footer?: string}) => {
	const [tIn, tAE, tB, tA, tC, tBest, tBoth, tFoot] = beats;
	const xs = routes.map((_, i) => 140 + i * 240);
	const PCY = 372;
	const S = 42;
	const minE = Math.min(...routes.map((r) => r.eFactor));
	const best = routes.findIndex((r) => r.eFactor === minE);
	// Waste stacks appear when the voiceover names each route: B, A, C by default.
	const stackBeat = (label: string) => (label.endsWith('A') ? tA : label.endsWith('B') ? tB : tC);
	const bothPulse = frame >= tBoth ? idlePulse(frame) : 0;

	return (
		<g>
			<g opacity={ramp(frame, 0, 16)}>
				<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={23} fontWeight={800}>E-factor = mass of waste ÷ mass of product</text>
				<text x={W / 2} y={64} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={700}>lower is better</text>
			</g>
			<g opacity={ramp(frame, tIn, 16)}>
				<Crate x={214} y={108} size={22} color={accent} />
				<text x={234} y={104} fill={accent} fontSize={17} fontWeight={800}>1 unit of product</text>
				<Crate x={444} y={108} size={22} color={GREY} />
				<text x={464} y={104} fill={GREY_INK} fontSize={17} fontWeight={800}>1 unit of waste</text>
			</g>
			<g opacity={ramp(frame, tBoth, 16)}>
				<text x={W / 2} y={140} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>Same atom economy, very different waste</text>
			</g>

			{routes.map((r, i) => {
				const cx = xs[i];
				const isBest = i === best;
				const sb = stackBeat(r.label);
				return (
					<g key={r.label}>
						{r.atomEconomy !== undefined && (
							<g opacity={ramp(frame, tAE, 16)}>
								<rect x={cx - 84} y={160} width={168} height={32} rx={16} fill="#ffffff" stroke={TOK.inkDim} strokeWidth={2 + bothPulse * 1.5} />
								<text x={cx} y={182} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800}>atom economy {r.atomEconomy}%</text>
							</g>
						)}
						<DioramaPlinth id={`${id}${i}`} cx={cx} cy={PCY} rx={100}>
							<g opacity={ramp(frame, tIn, 14)}>
								<Crate x={cx - 32} y={PCY + 6} size={S} color={accent} />
							</g>
							{Array.from({length: r.eFactor}, (_, j) => {
								const t0 = sb + j * 9;
								const drop = ease(ramp(frame, t0, 14));
								if (frame < t0) return null;
								return (
									<Crate key={j} x={cx + 28 + (frame > t0 + 20 ? idleBob(frame, j + i * 5, 0.5) : 0)} y={PCY + 6 - j * S - (1 - drop) * 60} size={S} color={GREY} opacity={Math.min(1, drop * 2)} stroke={isBest && frame >= tBest ? TOK.amber : undefined} />
								);
							})}
						</DioramaPlinth>
						<g opacity={ramp(frame, tIn, 14)}>
							<text x={cx} y={456} textAnchor="middle" fill={isBest && frame >= tBest ? TOK.amberInk : TOK.ink} fontSize={23} fontWeight={800}>{r.label}</text>
						</g>
						<g opacity={ramp(frame, sb, 14)}>
							<text x={cx} y={482} textAnchor="middle" fill={isBest && frame >= tBest ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800}>E-factor {r.eFactor}</text>
						</g>
						{isBest && (
							<g opacity={ramp(frame, tBest, 16)}>
								<Pill x={cx + 20} y={PCY - 6 - r.eFactor * S - 50} text="greenest" color={TOK.amber} textColor={TOK.amberInk} size={19} strokeWidth={2 + idlePulse(frame) * 1.5} />
								<Arrow x1={cx + 20} y1={PCY - 6 - r.eFactor * S - 32} x2={cx + 20} y2={PCY - 6 - r.eFactor * S - 8} color={TOK.amber} width={3} head={10} />
							</g>
						)}
					</g>
				);
			})}

			{footer && (
				<g opacity={ramp(frame, tFoot, 16)}>
					<text x={W / 2} y={516} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{footer}</text>
				</g>
			)}
		</g>
	);
};

// ─────────────────────────────────────────────────────────────── root
export const GreenDiagram = ({delay = 62, mode = 'routes', beats, routes = DEFAULT_ROUTES, footer}: GreenProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = beats && beats.length >= DEFAULT_BEATS[mode].length ? beats : DEFAULT_BEATS[mode];
	const id = `c12m8green${mode}`;
	const aria =
		mode === 'metrics'
			? 'Atom economy equals the molar mass of the desired product over the total molar mass of all products, times 100 percent; higher is better and it is theoretical. E-factor equals mass of waste over mass of product; lower is better and it is practical, counting solvents and washings that atom economy ignores.'
			: `E-factor compared across routes: ${routes.map((r) => `${r.label} ${r.eFactor}`).join(', ')}. Lower is better, so ${routes.reduce((a, r) => (r.eFactor < a.eFactor ? r : a)).label} is greenest.`;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={aria} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={id} />
			<GlossDefs id={id} colors={{prod: theme.accent, waste: GREY}} />
			{mode === 'metrics' ? (
				<MetricsMode frame={frame} beats={b} id={id} accent={theme.accent} fps={fps} />
			) : (
				<RoutesMode frame={frame} beats={b} id={id} accent={theme.accent} routes={routes} footer={footer} />
			)}
		</svg>
	);
};
