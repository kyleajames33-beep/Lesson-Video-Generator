// AmideLonePairDiagram — why an amine is a base and an amide is not.
//
// Two plinths. Right: ethanamide, whose nitrogen lone pair is drawn, then
// delocalised into the carbonyl with curly arrows (lone pair → C–N, C=O π → O).
// Left: ethylamine, the comparison: its lone pair sits free on N. On the
// proton beat an H⁺ drops toward each nitrogen: the amine's lone pair takes it
// (the structure becomes ethylammonium, CH₃CH₂NH₃⁺), while the amide's H⁺
// bounces off (✗, no free lone pair). A final chip adds the bonus property:
// N–H donors plus a C=O acceptor give amides the highest boiling points.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Ball, Chip, CurlyArrow, ELEMENTS, LonePair, Mol, Title, atomPos, clamp, fadeAt, popAt} from './shared';

export type AmideLonePairProps = {
	title?: string;
	beats?: {amide?: number; lonePair?: number; amine?: number; delocalise?: number; proton?: number; verdict?: number; bonus?: number};
	delay?: number;
};

const ID = 'c12m7amide';
const W = 760;
const H = 530;
const BOND = 70;
const ease = Easing.inOut(Easing.cubic);
const STOP = '#b3261e';

export const AmideLonePairDiagram = ({title = 'Same lone pair, different job', beats = {}, delay = 62}: AmideLonePairProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = {amide: 142, lonePair: 310, amine: 418, delocalise: 598, proton: 970, verdict: 1198, bonus: 1270, ...beats};
	const pulse = idlePulse(frame);

	// Amine (left)
	const ax = 196;
	const ay = 262 + idleBob(frame, 1, 1.4);
	const amineIn = Math.min(1, popAt(frame, fps, b.amine) * 1.2);
	const nA = atomPos('ethylamine', 2, ax, ay, BOND);
	// Keep N fixed when ethylamine becomes ethylammonium (their bounding boxes differ).
	const nAm = atomPos('ethylammonium', 2, ax, ay, BOND);
	const amX = ax + nA.x - nAm.x;
	const amY = ay + nA.y - nAm.y;
	// Amide (right)
	const mx = 560;
	const my = 262 + idleBob(frame, 2, 1.4);
	const amideIn = Math.min(1, popAt(frame, fps, b.amide) * 1.2);
	const nM = atomPos('ethanamide', 3, mx, my, BOND);
	const cM = atomPos('ethanamide', 1, mx, my, BOND);
	const oM = atomPos('ethanamide', 2, mx, my, BOND);

	// Protons
	const drop = interpolate(frame, [b.proton, b.proton + 40], [0, 1], {...clamp, easing: ease});
	const bonded = frame >= b.proton + 40;
	const bounce = interpolate(frame, [b.proton + 40, b.proton + 80], [0, 1], {...clamp, easing: Easing.out(Easing.quad)});
	const hAy = nA.y - 150 + (150 - 34) * drop;
	const hMstart = {x: nM.x + 40, y: nM.y - 170};
	const hMclose = {x: nM.x + 38, y: nM.y - 50};
	const hMx = hMstart.x + (hMclose.x - hMstart.x) * drop + 50 * bounce;
	const hMy = hMstart.y + (hMclose.y - hMstart.y) * drop - 90 * bounce;
	const deloc = fadeAt(frame, b.delocalise, 12);
	const arrowGrow = interpolate(frame, [b.delocalise, b.delocalise + 30], [0, 1], clamp);
	const lpAngle = 30;
	const lp = {x: nM.x + Math.cos((lpAngle * Math.PI) / 180) * 30, y: nM.y + Math.sin((lpAngle * Math.PI) / 180) * 30};

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="An amine's lone pair accepts a proton; an amide's lone pair is delocalised into C=O and cannot" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} elements={ELEMENTS} />
			<Title text={title} opacity={fadeAt(frame, 0)} />

			{/* plinths */}
			<g opacity={0.45 + 0.55 * fadeAt(frame, b.amine - 6, 10)}>
				<DioramaPlinth id={ID} cx={ax} cy={372} rx={165} />
			</g>
			<g opacity={fadeAt(frame, 2)}>
				<DioramaPlinth id={ID} cx={mx} cy={372} rx={165} />
			</g>

			{/* amine */}
			<g opacity={amineIn}>
				{bonded ? (
					<Mol id={ID} mol="ethylammonium" x={amX} y={amY} bond={BOND} ballScale={1.1} frame={frame} highlight={[5]} highlightOpacity={1 - fadeAt(frame, b.proton + 120, 30)} highlightColor={theme.accent} />
				) : (
					<>
						<Mol id={ID} mol="ethylamine" x={ax} y={ay} bond={BOND} ballScale={1.1} frame={frame} />
						<LonePair x={nA.x} y={nA.y} angle={-90} dist={32} />
					</>
				)}
			</g>
			{!bonded && drop > 0 && (
				<g>
					<Ball id={ID} el="H" x={nA.x} y={hAy} r={13} />
					<text x={nA.x + 16} y={hAy - 10} fill={TOK.ink} fontSize={18} fontWeight={900}>+</text>
				</g>
			)}
			<text x={ax} y={456} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fadeAt(frame, b.amine + 6, 12)}>
				{bonded ? 'ethylammonium ion' : 'ethylamine (amine)'}
			</text>
			<text x={ax} y={482} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.amine + 20, 12)}>
				{bonded ? 'lone pair took the H⁺: a base' : 'lone pair free on N'}
			</text>

			{/* amide */}
			<g opacity={amideIn}>
				<Mol id={ID} mol="ethanamide" x={mx} y={my} bond={BOND} ballScale={1.1} frame={frame} />
				<LonePair x={nM.x} y={nM.y} angle={lpAngle} dist={30} opacity={fadeAt(frame, b.lonePair, 12)} />
				{deloc > 0 && (
					<>
						<CurlyArrow x1={lp.x + 6} y1={lp.y + 8} x2={(nM.x + cM.x) / 2 + 2} y2={(nM.y + cM.y) / 2 + 10} bow={-44} progress={arrowGrow} opacity={deloc} />
						<CurlyArrow x1={(cM.x + oM.x) / 2 - 12} y1={(cM.y + oM.y) / 2} x2={oM.x - 26} y2={oM.y + 2} bow={34} progress={interpolate(frame, [b.delocalise + 24, b.delocalise + 54], [0, 1], clamp)} opacity={deloc} />
					</>
				)}
			</g>
			{drop > 0 && (
				<g opacity={1 - fadeAt(frame, b.proton + 140, 20)}>
					<Ball id={ID} el="H" x={hMx} y={hMy} r={13} />
					<text x={hMx + 16} y={hMy - 10} fill={TOK.ink} fontSize={18} fontWeight={900}>+</text>
				</g>
			)}
			<g opacity={fadeAt(frame, b.proton + 44, 8)}>
				<g transform={`translate(${nM.x + 70}, ${nM.y - 70}) scale(${1 + pulse * 0.06})`}>
					<circle r={17} fill={STOP} />
					<path d="M -7 -7 L 7 7 M 7 -7 L -7 7" stroke="#ffffff" strokeWidth={4} strokeLinecap="round" />
				</g>
			</g>
			<text x={mx} y={456} textAnchor="middle" fill={TOK.ink} fontSize={22} fontWeight={800} opacity={fadeAt(frame, b.amide + 6, 12)}>
				ethanamide (amide)
			</text>
			<text x={mx} y={482} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, b.delocalise + 30, 12)}>
				lone pair delocalised into C=O
			</text>

			<g opacity={fadeAt(frame, b.verdict, 14) * (1 - fadeAt(frame, b.bonus - 4, 10))}>
				<Chip x={W / 2} y={H - 18} text="no free lone pair → no proton → amides are neutral" color={TOK.amberInk} size={19} />
			</g>
			<g opacity={fadeAt(frame, b.bonus, 14)}>
				<Chip x={W / 2} y={H - 18} text="bonus: N–H donors + C=O acceptor → highest boiling points" color={theme.accent} size={18} />
			</g>
		</svg>
	);
};
