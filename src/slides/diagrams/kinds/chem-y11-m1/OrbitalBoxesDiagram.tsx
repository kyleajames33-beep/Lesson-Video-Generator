// OrbitalBoxesDiagram — orbital-box ("arrows in boxes") diagrams for an atom and its ions.
//
// Each stage (e.g. Fe → Fe²⁺ → Fe³⁺) is a station: a board with one s box and
// five d boxes, standing on a plinth with the noble-gas core as a glossy badge,
// and the configuration written underneath. Boxes are filled by Hund's rule:
// one electron (↑) in each d box before any pairs (↓). A new station arrives
// holding the previous stage's electrons, then the electrons that are removed
// fly off: s electrons first (amber: the rule), then d electrons (highest-filled
// first). Config labels are computed from the counts, so they always match.
//
// Config-driven: element stages with d/s counts, core, subshell names, beats
// (frames after `delay`). Defaults = iron (Chem Y11 M1 L19 concept-transition).

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DIO, DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, Ball, GlossDefs, clamp, fadeAt, popAt} from './shared';

export type OrbitalStage = {label: string; d: number; s: number; at?: number};
export type OrbitalBoxesProps = {
	core?: string;
	dLabel?: string;
	sLabel?: string;
	stages?: OrbitalStage[];
	rule?: {text: string; at?: number};
	/** Beat at which the first stage's configuration is emphasised. */
	focusAt?: number;
	delay?: number;
};

const DEFAULT_STAGES: OrbitalStage[] = [
	{label: 'Fe', d: 6, s: 2, at: 0},
	{label: 'Fe²⁺', d: 6, s: 0, at: 648},
	{label: 'Fe³⁺', d: 5, s: 0, at: 750},
];

const ID = 'c11orb';
const W = 760;
const H = 530;
const BOX = 38;
const S_Y = 114; // 4s box centre
const D_Y = 192; // 3d row centre
const BOARD_Y0 = 70;
const BOARD_Y1 = 222;
const PLINTH_Y = 292;
const CORE_COLOR = '#6b7a8c';

const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const sup = (n: number) => String(n).split('').map((c) => SUP[Number(c)]).join('');

/** Hund's-rule slot for the k-th electron in a subshell with `boxes` orbitals. */
const slot = (k: number, boxes: number) => ({box: k % boxes, down: k >= boxes});

const HalfArrow = ({x, y, down, color, opacity = 1}: {x: number; y: number; down: boolean; color: string; opacity?: number}) => {
	const dx = down ? 7 : -7;
	const [y1, y2] = down ? [y - 13, y + 13] : [y + 13, y - 13];
	return <Arrow x1={x + dx} y1={y1} x2={x + dx} y2={y2} color={color} width={3.2} head={9} opacity={opacity} />;
};

export const OrbitalBoxesDiagram = ({
	core = '[Ar]',
	dLabel = '3d',
	sLabel = '4s',
	stages = DEFAULT_STAGES,
	rule = {text: '4s electrons are removed before 3d', at: 385},
	focusAt = 567,
	delay = 62,
}: OrbitalBoxesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const n = stages.length;
	const slotW = W / n;
	const xs = stages.map((_, i) => slotW * (i + 0.5));
	const ruleAt = rule?.at ?? Infinity;
	const ruleOn = fadeAt(frame, ruleAt, 14);
	const ink = TOK.ink;

	const config = (st: OrbitalStage) => `${core}${st.d > 0 ? dLabel + sup(st.d) : ''}${st.s > 0 ? sLabel + sup(st.s) : ''}`;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Orbital boxes: ${stages.map(config).join(', ')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{core: CORE_COLOR}} />

			{stages.map((st, i) => {
				const x = xs[i];
				const at = st.at ?? i * 120;
				const pop = popAt(frame, fps, at);
				if (pop <= 0) return null;
				const prev = i > 0 ? stages[i - 1] : undefined;
				// Removal animation: electrons present in prev but not in this stage.
				const rmStart = at + 14;
				const lostS = prev ? Math.max(0, prev.s - st.s) : 0;
				const lostD = prev ? Math.max(0, prev.d - st.d) : 0;
				const sRm = interpolate(frame, [rmStart, rmStart + 36], [0, 1], clamp);
				const dRm = interpolate(frame, [rmStart + (lostS ? 44 : 0), rmStart + (lostS ? 44 : 0) + 36], [0, 1], clamp);
				const startS = prev ? prev.s : st.s;
				const startD = prev ? prev.d : st.d;
				// First stage: electrons drop in one by one (s first, then d by Hund's rule).
				const fillAt = (k: number) => (i === 0 ? at + 16 + k * 7 : -1e6);
				const labelAt = prev ? rmStart + 30 + (lostS && lostD ? 44 : 0) : at + 10;
				const isFocus = i === 0 && frame >= focusAt && frame < focusAt + 60;
				const s = 0.7 + 0.3 * Math.min(1, pop);
				const dx0 = x - (5 * BOX) / 2;

				const electron = (key: string, bx: number, by: number, down: boolean, k: number, leaving: number, leaveColor: string) => {
					const inT = fadeAt(frame, fillAt(k), 6);
					if (inT <= 0 || leaving >= 1) return null;
					const lx = bx + leaving * 46;
					const ly = by - leaving * 70 - (1 - inT) * 12;
					const col = leaving > 0 ? leaveColor : ink;
					return (
						<g key={key}>
							<HalfArrow x={lx} y={ly} down={down} color={col} opacity={inT * (1 - Math.max(0, (leaving - 0.45) / 0.55))} />
						</g>
					);
				};

				return (
					<g key={i} opacity={Math.min(1, pop * 1.5)}>
						{/* header: stage label + removal arrow from the previous stage */}
						<text x={x} y={42} textAnchor="middle" fill={TOK.ink} fontSize={32} fontWeight={800}>
							{st.label}
						</text>
						{prev && (
							<g opacity={fadeAt(frame, at, 12)}>
								<Arrow x1={xs[i - 1] + 44} y1={32} x2={x - 50} y2={32} color={TOK.inkDim} width={3} head={11} />
								{(() => {
									const lost = prev.s + prev.d - st.s - st.d;
									const t = `−${lost}e⁻`;
									const cx = (xs[i - 1] + x) / 2 - 3;
									const w = t.length * 11 + 20;
									return (
										<g>
											<rect x={cx - w / 2} y={16} width={w} height={32} rx={16} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={2} />
											<text x={cx} y={39} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={800}>
												{t}
											</text>
										</g>
									);
								})()}
							</g>
						)}

						<g transform={`translate(${x},${PLINTH_Y}) scale(${s}) translate(${-x},${-PLINTH_Y})`}>
							<DioramaPlinth id={ID} cx={x} cy={PLINTH_Y} rx={Math.min(108, slotW * 0.43)}>
								{[-1, 1].map((sd) => (
									<rect key={sd} x={x + sd * 70 - 5} y={BOARD_Y1 - 4} width={10} height={PLINTH_Y - BOARD_Y1 + 6} rx={3} fill={DIO.soil} stroke={DIO.soilDark} strokeWidth={1.5} />
								))}
								<rect x={x - 112 + 4} y={BOARD_Y0 + 6} width={224} height={BOARD_Y1 - BOARD_Y0} rx={14} fill="rgba(40,50,40,0.14)" />
								<rect x={x - 112} y={BOARD_Y0} width={224} height={BOARD_Y1 - BOARD_Y0} rx={14} fill={TOK.bgLift} stroke={TOK.cardBorder} strokeWidth={2} />
								{/* core badge on the grass */}
								<Ball id={ID} name="core" color={CORE_COLOR} x={x} y={PLINTH_Y - 6 + (frame > at + 30 ? idleBob(frame, i, 1.2) : 0)} r={27} label={core} labelSize={17} />
							</DioramaPlinth>

							{/* s subshell */}
							<text x={x - BOX / 2 - 10} y={S_Y + 7} textAnchor="end" fill={TOK.inkDim} fontSize={20} fontWeight={800}>
								{sLabel}
							</text>
							<rect
								x={x - BOX / 2}
								y={S_Y - BOX / 2}
								width={BOX}
								height={BOX}
								fill={TOK.bgLift}
								stroke={i === 0 && ruleOn > 0 ? TOK.amber : TOK.inkDim}
								strokeWidth={i === 0 && ruleOn > 0 ? 2.5 + ruleOn * 1.5 + (frame > ruleAt + 14 ? idlePulse(frame, 40) : 0) : 2.5}
							/>
							{/* d subshell */}
							<text x={x} y={D_Y - BOX / 2 - 9} textAnchor="middle" fill={TOK.inkDim} fontSize={20} fontWeight={800}>
								{dLabel}
							</text>
							{Array.from({length: 5}, (_, b) => (
								<rect key={b} x={dx0 + b * BOX} y={D_Y - BOX / 2} width={BOX} height={BOX} fill={TOK.bgLift} stroke={TOK.inkDim} strokeWidth={2.5} />
							))}

							{/* electrons */}
							{Array.from({length: startS}, (_, k) => {
								const sl = slot(k, 1);
								const leaving = k >= st.s ? sRm : 0;
								return electron(`s${k}`, x, S_Y, sl.down, k, leaving, TOK.amber);
							})}
							{Array.from({length: startD}, (_, k) => {
								const sl = slot(k, 5);
								const leaving = k >= st.d ? dRm : 0;
								return electron(`d${k}`, dx0 + (sl.box + 0.5) * BOX, D_Y, sl.down, startS + k, leaving, theme.accent);
							})}
						</g>

						{/* configuration */}
						<text
							x={x}
							y={388}
							textAnchor="middle"
							fill={TOK.ink}
							fontSize={isFocus ? 27 : 25}
							fontWeight={800}
							opacity={fadeAt(frame, labelAt, 12)}
						>
							{config(st)}
						</text>
					</g>
				);
			})}

			{/* the rule */}
			{rule && ruleOn > 0 && (() => {
				const size = 22;
				const w = rule.text.length * size * 0.56 + 40;
				const glow = frame > ruleAt + 14 ? idlePulse(frame) : 0;
				const pop = popAt(frame, fps, ruleAt);
				return (
					<g opacity={Math.min(1, pop * 1.5)} transform={`translate(${W / 2}, 462) scale(${0.85 + 0.15 * Math.min(1, pop)})`}>
						<rect x={-w / 2} y={-24} width={w} height={48} rx={24} fill={TOK.bgLift} stroke={TOK.amber} strokeWidth={3 + glow * 1.5} />
						<text x={0} y={size * 0.36} textAnchor="middle" fill={TOK.amberInk} fontSize={size} fontWeight={800}>
							{rule.text}
						</text>
					</g>
				);
			})()}
		</svg>
	);
};
