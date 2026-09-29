// TubeTestsDiagram — qualitative ion tests in test tubes on stone plinths
// (Chem Y12 M8 L3). Two modes, each in two acts:
//
// mode "anion" (scene `definition`): Cl⁻ + AgNO₃ → white AgCl; SO₄²⁻ + BaCl₂ →
//   white BaSO₄; CO₃²⁻ + dilute acid → CO₂ bubbles, no precipitate. A dropper
//   drips the reagent in, the precipitate clouds then settles (or bubbles rise),
//   and the result is labelled under each plinth. Act 2 is the discriminator:
//   acid is added to BaSO₄ and to BaCO₃; BaSO₄ stays solid (amber), BaCO₃
//   dissolves and fizzes.
// mode "cation" (scene `concept-cations`): NaOH dropwise into Fe²⁺ (pale green
//   solution → green Fe(OH)₂), Fe³⁺ (yellow-brown → red-brown Fe(OH)₃), Cu²⁺
//   (blue → pale blue Cu(OH)₂), NH₄⁺ (no coloured solid; warmed → NH₃ gas), and
//   Ca²⁺ with Na₂CO₃ (white CaCO₃). Act 2 combines tests: blue-green flame +
//   pale blue precipitate = a strong case for Cu²⁺ (amber).
//
// Beats (frames after `delay`): for each tube a pair [reagent drips in, result
// label]; then three act-2 beats [act 2 appears, first result, second result].
// For a "warm" tube (NH₄⁺) the second beat is also when it is warmed.

import {interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {TestTube, clamp, ease, ramp} from './shared';
import {Burner, BurnerDefs, Dropper, Fizz, Flame, Specks, WireLoop, dropPhase} from './lab-parts';

type Tube = {
	ion: string;
	reagent: string;
	liquid: string;
	/** Precipitate colour, or omitted for no precipitate. */
	ppt?: string;
	/** 'fizz' = gas on adding the reagent; 'warm' = gas only when warmed (second beat). */
	gas?: 'fizz' | 'warm';
	title: string;
	sub: string;
};

export type TubeTestsProps = {
	delay?: number;
	mode?: 'anion' | 'cation';
	beats?: number[];
};

const W = 760;
const WHITE = '#f6f6f2';
const COLOURLESS = 'rgba(170,205,235,0.38)';

const ANION_TUBES: Tube[] = [
	{ion: 'Cl⁻', reagent: 'AgNO₃(aq)', liquid: COLOURLESS, ppt: WHITE, title: 'AgCl(s)', sub: 'white precipitate'},
	{ion: 'SO₄²⁻', reagent: 'BaCl₂(aq)', liquid: COLOURLESS, ppt: WHITE, title: 'BaSO₄(s)', sub: 'white precipitate'},
	{ion: 'CO₃²⁻', reagent: 'dilute acid', liquid: COLOURLESS, gas: 'fizz', title: 'CO₂ bubbles', sub: 'no precipitate'},
];
const CATION_TUBES: Tube[] = [
	{ion: 'Fe²⁺', reagent: 'NaOH', liquid: 'rgba(150,205,120,0.5)', ppt: '#5b8a3c', title: 'green', sub: 'Fe(OH)₂'},
	{ion: 'Fe³⁺', reagent: 'NaOH', liquid: 'rgba(214,160,60,0.5)', ppt: '#8e3b1c', title: 'red-brown', sub: 'Fe(OH)₃'},
	{ion: 'Cu²⁺', reagent: 'NaOH', liquid: 'rgba(40,120,210,0.6)', ppt: '#9fd3f3', title: 'pale blue', sub: 'Cu(OH)₂'},
	{ion: 'NH₄⁺', reagent: 'NaOH', liquid: COLOURLESS, gas: 'warm', title: 'no solid', sub: 'warm: NH₃(g)'},
	{ion: 'Ca²⁺', reagent: 'Na₂CO₃', liquid: COLOURLESS, ppt: WHITE, title: 'white', sub: 'CaCO₃'},
];

const DEFAULT_BEATS = {
	anion: [80, 150, 220, 290, 375, 430, 740, 790, 850],
	cation: [150, 180, 205, 240, 265, 300, 365, 490, 600, 660, 745, 800, 870],
};

const PLINTH_Y = 392;

export const TubeTestsDiagram = ({delay = 62, mode = 'anion', beats}: TubeTestsProps) => {
	const frame = useCurrentFrame() - delay;
	const ID = `c12m8tube${mode}`;
	const tubes = mode === 'anion' ? ANION_TUBES : CATION_TUBES;
	const b = beats ?? DEFAULT_BEATS[mode];
	const n = tubes.length;
	const [tAct2, tRes1, tRes2] = b.slice(n * 2, n * 2 + 3);
	const act1 = 1 - ramp(frame, tAct2, 18);
	const act2 = ramp(frame, tAct2 + 8, 18);
	const pulse = idlePulse(frame);

	const big = mode === 'anion';
	const xs = big ? [130, 380, 630] : [84, 232, 380, 528, 676];
	const prx = big ? 104 : 66;
	const tw = big ? 58 : 42;
	const th = big ? 212 : 198;
	const fill = 0.5;
	const tubeBase = PLINTH_Y - 2;
	const tubeTop = tubeBase - th;
	const tipY = tubeTop - 8;
	const liqTop = tubeBase - th * fill;

	// ── One test tube column (act 1) ────────────────────────────────
	const column = (t: Tube, i: number) => {
		const [tDrip, tRes] = [b[i * 2], b[i * 2 + 1]];
		const cx = xs[i];
		const appear = ramp(frame, i * 4, 14);
		const drop = dropPhase(frame, tDrip, 3, 10, 9);
		const dropperOp = ramp(frame, tDrip - 24, 12) * (1 - ramp(frame, tDrip + 44, 16));
		// Precipitate: clouds as the drops land, then settles.
		const cloudUp = ramp(frame, tDrip + 8, 24);
		const settle = ease(interpolate(frame, [tDrip + 60, tDrip + 150], [0, 1], clamp));
		const cloud = t.ppt ? cloudUp * (1 - 0.8 * settle) : 0;
		const solid = t.ppt ? settle : 0;
		// Gas
		const gasStart = t.gas === 'fizz' ? tDrip + 10 : tRes;
		const gasOn = t.gas ? ramp(frame, gasStart, 14) : 0;
		const labelIn = ramp(frame, t.gas === 'warm' ? tDrip + 40 : tRes, 14);
		const subIn = ramp(frame, tRes, 14);
		const r = tw / 2;
		return (
			<g key={i} opacity={appear}>
				<DioramaPlinth id={ID} cx={cx} cy={PLINTH_Y} rx={prx}>
					<TestTube cx={cx} baseY={tubeBase} w={tw} h={th} fill={fill} liquid={t.liquid} solid={solid} solidColor={t.ppt ?? WHITE} cloud={cloud}>
						{t.ppt && (
							<Specks x0={cx - r + 6} x1={cx + r - 6} y0={liqTop + 8} y1={tubeBase - r - 4} color={t.ppt} amount={cloudUp * (1 - settle)} seed={i + 3} n={big ? 18 : 12} drift={settle} />
						)}
						{t.gas && <Fizz frame={frame} x0={cx - r + 8} x1={cx + r - 8} y0={tubeBase - r} y1={liqTop + 4} n={big ? 11 : 7} seed={i + 5} opacity={gasOn} r={big ? 4.5 : 3.6} speed={t.gas === 'fizz' ? 2.2 : 1.2} />}
					</TestTube>
					{/* warming: heat shimmer under the tube, NH₃ wisps from the mouth */}
					{t.gas === 'warm' && (
						<g opacity={gasOn}>
							{[-1, 0, 1].map((k) => (
								<path key={k} d={`M ${cx + k * 16} ${tubeBase + 8} q 5 -6 0 -12 q -5 -6 0 -12`} fill="none" stroke="#e0782a" strokeWidth={2.4} strokeLinecap="round" transform={`translate(0 ${-Math.abs(Math.sin(frame / 8 + k)) * 3})`} />
							))}
							{[0, 1, 2].map((k) => {
								const ph = ((frame * 0.9 + k * 22) % 66) / 66;
								return (
									<path key={`w${k}`} d={`M ${cx - 6 + k * 6} ${tubeTop - 4 - ph * 44} q 7 -7 0 -14 q -7 -7 0 -14`} fill="none" stroke="#8a96a3" strokeWidth={2.2} strokeLinecap="round" opacity={Math.sin(ph * Math.PI)} />
								);
							})}
						</g>
					)}
				</DioramaPlinth>
				<Dropper x={cx} tipY={tipY} landY={liqTop} drop={drop} opacity={dropperOp} len={big ? 56 : 52} liquid={t.reagent === 'dilute acid' ? 'rgba(170,205,235,0.75)' : 'rgba(190,210,230,0.8)'} />
				{/* ion under test */}
				<text x={cx} y={big ? 46 : 80} textAnchor="middle" fill={TOK.ink} fontSize={big ? 30 : 26} fontWeight={800}>{t.ion}</text>
				{big && (
					<text x={cx} y={74} textAnchor="middle" fill={TOK.inkDim} fontSize={19} fontWeight={700} opacity={ramp(frame, tDrip - 24, 12)}>+ {t.reagent}</text>
				)}
				{t.gas === 'warm' && (
					<text x={cx + 30} y={tubeTop - 26} textAnchor="start" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={gasOn}>NH₃</text>
				)}
				{/* result */}
				<text x={cx} y={big ? 478 : 460} textAnchor="middle" fill={TOK.ink} fontSize={big ? 21 : 19} fontWeight={800} opacity={labelIn}>{t.title}</text>
				<text x={cx} y={big ? 502 : 484} textAnchor="middle" fill={TOK.inkDim} fontSize={big ? 17 : 16} fontWeight={700} opacity={subIn}>{t.sub}</text>
			</g>
		);
	};

	// Cation mode: reagent brackets over the tubes
	const bracket = (x0: number, x1: number, text: string, t0: number) => (
		<g opacity={ramp(frame, t0, 14)}>
			<text x={(x0 + x1) / 2} y={26} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800}>{text}</text>
			<path d={`M ${x0} 46 L ${x0} 38 L ${x1} 38 L ${x1} 46`} fill="none" stroke={TOK.inkMute} strokeWidth={2} />
		</g>
	);

	// ── Act 2 ─────────────────────────────────────────────────────
	const act2Anion = () => {
		const L = 220, R = 540;
		const aw = 60, ah = 222, r = aw / 2;
		const top = tubeBase - ah, lt = tubeBase - ah * 0.5;
		const dropL = dropPhase(frame, tRes1 - 30, 3, 10, 9);
		const dropR = dropPhase(frame, tRes2 - 30, 3, 10, 9);
		const dissolve = ease(interpolate(frame, [tRes2 - 12, tRes2 + 60], [0, 1], clamp));
		const fizzR = ramp(frame, tRes2 - 14, 10) * (1 - ramp(frame, tRes2 + 120, 30) * 0.6);
		return (
			<g opacity={act2}>
				<text x={W / 2} y={44} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800}>Sulfate or carbonate? Add dilute acid</text>
				{[L, R].map((cx, k) => (
					<DioramaPlinth key={k} id={`${ID}-a2`} cx={cx} cy={PLINTH_Y} rx={112}>
						<TestTube cx={cx} baseY={tubeBase} w={aw} h={ah} fill={0.5} liquid={COLOURLESS} solid={k === 0 ? 1 : 1 - dissolve} solidColor={WHITE}>
							{k === 1 && <Fizz frame={frame} x0={cx - r + 8} x1={cx + r - 8} y0={tubeBase - r} y1={lt + 4} n={11} seed={9} opacity={fizzR} r={4.5} speed={2.2} />}
						</TestTube>
					</DioramaPlinth>
				))}
				<Dropper x={L} tipY={top - 8} landY={lt} drop={dropL} len={64} opacity={ramp(frame, tRes1 - 50, 12) * (1 - ramp(frame, tRes1 + 20, 14))} liquid="rgba(170,205,235,0.75)" />
				<Dropper x={R} tipY={top - 8} landY={lt} drop={dropR} len={64} opacity={ramp(frame, tRes2 - 50, 12) * (1 - ramp(frame, tRes2 + 20, 14))} liquid="rgba(170,205,235,0.75)" />
				<text x={L - 50} y={338} textAnchor="end" fill={TOK.ink} fontSize={22} fontWeight={800}>BaSO₄(s)</text>
				<text x={R + 50} y={338} textAnchor="start" fill={TOK.ink} fontSize={22} fontWeight={800}>BaCO₃(s)</text>
				<g opacity={ramp(frame, tRes1, 14)}>
					<rect x={L - 92} y={454} width={184} height={34} rx={17} fill="#ffffff" stroke={TOK.amber} strokeWidth={2 + pulse * 1.5} />
					<text x={L} y={478} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800}>stays solid</text>
					<text x={L} y={510} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>insoluble in acid</text>
				</g>
				<g opacity={ramp(frame, tRes2, 14)}>
					<text x={R} y={478} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800}>dissolves, fizzes</text>
					<text x={R} y={510} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>CO₂ given off</text>
				</g>
			</g>
		);
	};

	const act2Cation = () => {
		const F = 150, T = 410;
		const aw = 50, ah = 196, r = aw / 2;
		const flameIn = ramp(frame, tAct2 + 10, 16);
		const tubeIn = ramp(frame, tRes1, 16);
		const verdict = ramp(frame, tRes2, 16);
		const lt = tubeBase - ah * 0.5;
		return (
			<g opacity={act2}>
				<text x={W / 2} y={44} textAnchor="middle" fill={TOK.ink} fontSize={25} fontWeight={800}>Combine the tests</text>
				<g opacity={flameIn}>
					<DioramaPlinth id={`${ID}-a2`} cx={F} cy={PLINTH_Y} rx={100}>
						<Burner id={ID} cx={F} baseY={PLINTH_Y + 2} barrelH={84} />
						<Flame id={ID} cx={F} baseY={PLINTH_Y - 82} h={170} w={64} color="#1fb5a0" mix={1} frame={frame} seed={4} />
						<WireLoop x={F + 12} y={PLINTH_Y - 150} bead="#7fc7bb" />
					</DioramaPlinth>
					<text x={F} y={478} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>blue-green flame</text>
				</g>
				<text x={282} y={290} textAnchor="middle" fill={TOK.inkDim} fontSize={44} fontWeight={800} opacity={tubeIn}>+</text>
				<g opacity={tubeIn}>
					<DioramaPlinth id={`${ID}-a2`} cx={T} cy={PLINTH_Y} rx={90}>
						<TestTube cx={T} baseY={tubeBase} w={aw} h={ah} fill={0.5} liquid="rgba(40,120,210,0.6)" solid={1} solidColor="#9fd3f3">
							<Specks x0={T - r + 6} x1={T + r - 6} y0={lt + 8} y1={tubeBase - r - 4} color="#9fd3f3" amount={0.6} seed={21} n={10} drift={0} />
						</TestTube>
					</DioramaPlinth>
					<text x={T} y={478} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>pale blue precipitate</text>
					<text x={T} y={502} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>with NaOH</text>
				</g>
				<text x={542} y={290} textAnchor="middle" fill={TOK.inkDim} fontSize={44} fontWeight={800} opacity={verdict}>=</text>
				<g opacity={verdict} transform={`translate(652 ${276 + idleBob(frame, 1, 1.5)})`}>
					<rect x={-88} y={-72} width={176} height={150} rx={22} fill="#ffffff" stroke={TOK.amber} strokeWidth={3 + pulse * 1.5} />
					<text x={0} y={-10} textAnchor="middle" fill={TOK.amberInk} fontSize={50} fontWeight={800}>Cu²⁺</text>
					<text x={0} y={24} textAnchor="middle" fill={TOK.ink} fontSize={19} fontWeight={800}>strong case</text>
					<text x={0} y={48} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>stronger than</text>
					<text x={0} y={66} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>either test alone</text>
				</g>
			</g>
		);
	};

	return (
		<svg
			viewBox={`0 0 ${W} 530`}
			role="img"
			aria-label={
				mode === 'anion'
					? 'Anion tests: chloride with silver nitrate gives white silver chloride, sulfate with barium chloride gives white barium sulfate, carbonate with dilute acid fizzes with carbon dioxide; with acid, barium sulfate stays solid while barium carbonate dissolves'
					: 'Cation tests with sodium hydroxide: iron(II) green, iron(III) red-brown, copper(II) pale blue, ammonium gives ammonia gas when warmed; calcium with sodium carbonate gives white; a blue-green flame plus a pale blue precipitate makes a strong case for copper(II)'
			}
			style={{width: '100%', fontFamily: FONT_DISPLAY}}
		>
			<DioramaDefs id={ID} />
			<DioramaDefs id={`${ID}-a2`} />
			<BurnerDefs id={ID} />
			{act1 > 0 && (
				<g opacity={act1}>
					{mode === 'cation' && bracket(xs[0] - 40, xs[3] + 40, 'add NaOH(aq) dropwise', b[0] - 110)}
					{mode === 'cation' && bracket(xs[4] - 58, xs[4] + 58, 'add Na₂CO₃(aq)', b[8] - 30)}
					{tubes.map(column)}
				</g>
			)}
			{act2 > 0 && (mode === 'anion' ? act2Anion() : act2Cation())}
		</svg>
	);
};

