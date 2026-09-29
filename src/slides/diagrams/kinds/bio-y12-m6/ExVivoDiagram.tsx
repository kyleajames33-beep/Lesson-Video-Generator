// ExVivoDiagram — an ex vivo gene therapy as a loop out of the body and back.
//
// Left: the patient's bone marrow on a stone plinth, with the red cells it
// makes (sickled at first). Right: a lab dish. On the narration's beats:
//   collect  blood stem cells travel along the upper arc into the dish
//   edit     each cell's switch flips off (the edit), labelled from props
//   clear    the marrow's remaining stem cells fade (chemotherapy)
//   infuse   the edited cells travel back along the lower arc, settle in the
//            marrow, and the red cells it now makes are mostly round
// An outcome chip and footer carry the scene's own figures. Step chips track
// the method. Frames relative to `delay`.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {AMBER, GlossDefs, StepChips, clamp, ease, fadeAt, popAt, textWidth} from './shared';

export type ExVivoProps = {
	steps: {label: string; tool?: string; at: number}[];
	beats: {collect: number; edit: number; clear: number; infuse: number; outcome: number};
	editLabel: string;
	outcome: string;
	footer?: {text: string; at: number; amber?: boolean};
	delay?: number;
};

const ID = 'b12m6exv';
const W = 760;
const H = 530;
const STEM = '#c8b6e6';
const RBC = '#d8454d';

const RedCell = ({x, y, sickle, o = 1}: {x: number; y: number; sickle: boolean; o?: number}) =>
	sickle ? (
		<path opacity={o} transform={`translate(${x},${y})`} d="M -16 4 Q 0 -16 16 4 Q 0 -6 -16 4 Z" fill={RBC} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
	) : (
		<g opacity={o} transform={`translate(${x},${y})`}>
			<ellipse rx={13} ry={9} fill={RBC} stroke="rgba(0,0,0,0.3)" strokeWidth={1} />
			<ellipse rx={5} ry={3} fill="#b3343b" />
		</g>
	);

export const ExVivoDiagram = ({steps, beats, editLabel, outcome, footer, delay = 62}: ExVivoProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const BX = 190;
	const LX = 570;
	const PY = 318;
	const b = beats;
	const go = ease(frame, b.collect, b.collect + 60);
	const edit = ease(frame, b.edit + 10, b.edit + 40);
	const clear = fadeAt(frame, b.clear, 30);
	const back = ease(frame, b.infuse, b.infuse + 60);
	const settled = back >= 1;
	const cellsOut = [[-26, -4], [0, 8], [26, -4]];
	const marrowStay = [[-60, 4], [60, 4]];
	const rbcBefore = [[-66, -96], [-22, -104], [22, -104], [66, -96]];
	// arc points (quadratic) from marrow to dish (upper) and back (lower)
	const arc = (t: number, upper: boolean) => {
		const x0 = upper ? BX : LX;
		const x1 = upper ? LX : BX;
		const y0 = PY - 18;
		const cy = upper ? PY - 190 : PY + 120;
		const x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * ((BX + LX) / 2) + t * t * x1;
		const y = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y0;
		return {x, y};
	};
	const ow = textWidth(outcome, 17) + 28;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Ex vivo gene therapy: cells edited outside the body and returned" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{stem: STEM}} />
			<StepChips steps={steps} frame={frame} fps={fps} accent={theme.accent} />
			{/* zone labels */}
			<text x={BX} y={104} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>In the body</text>
			<text x={LX} y={104} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>Outside the body (lab)</text>
			{/* arcs */}
			<g opacity={fadeAt(frame, b.collect - 10)}>
				<path d={`M ${BX} ${PY - 18} Q ${(BX + LX) / 2} ${PY - 190} ${LX} ${PY - 18}`} fill="none" stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="6 7" />
			</g>
			<g opacity={fadeAt(frame, b.infuse - 10)}>
				<path d={`M ${LX} ${PY - 18} Q ${(BX + LX) / 2} ${PY + 120} ${BX} ${PY - 18}`} fill="none" stroke={AMBER} strokeWidth={2.5} strokeDasharray="6 7" />
			</g>
			{/* marrow */}
			<DioramaPlinth id={`${ID}m`} cx={BX} cy={PY} rx={110} />
			<text x={BX} y={PY + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>bone marrow</text>
			{marrowStay.map(([dx, dy], k) => (
				<circle key={k} cx={BX + dx} cy={PY - 14 + dy + idleBob(frame, k, 1)} r={15} fill={`url(#${ID}-g-stem)`} stroke="rgba(80,60,120,0.4)" opacity={1 - clear} />
			))}
			{/* red cells made by the marrow: sickled before, mostly round after */}
			{rbcBefore.map(([dx, dy], k) => (
				<RedCell key={k} x={BX + dx} y={PY + dy + idleBob(frame, k + 4, 1.4)} sickle={settled ? k === 3 : true} o={settled ? fadeAt(frame, b.infuse + 70 + k * 8, 12) : 1 - clear * 0.8} />
			))}
			<text x={BX} y={PY - 134} textAnchor="middle" fill={RBC} fontSize={16} fontWeight={800}>
				{settled ? 'fetal haemoglobin: fewer sickled cells' : 'sickled red cells'}
			</text>
			{/* lab dish */}
			<g opacity={fadeAt(frame, b.collect - 20)}>
				<DioramaPlinth id={`${ID}l`} cx={LX} cy={PY} rx={110} />
				<ellipse cx={LX} cy={PY - 12} rx={80} ry={26} fill="rgba(200,225,240,0.5)" stroke="rgba(70,110,140,0.5)" strokeWidth={2} />
				<text x={LX} y={PY + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={700}>lab dish</text>
			</g>
			{/* the collected cells: out, edited, back */}
			{cellsOut.map(([dx, dy], k) => {
				let x: number;
				let y: number;
				if (!settled && back > 0) {
					const p = arc(Math.max(0, Math.min(1, back * 1.15 - k * 0.07)), false);
					const f = 1 - 0.4 * Math.sin(Math.max(0, Math.min(1, back * 1.15 - k * 0.07)) * Math.PI);
					x = p.x + dx * f;
					y = p.y + 4 + dy * f;
				} else if (settled) {
					x = BX + dx;
					y = PY - 14 + dy;
				} else {
					const t = Math.max(0, Math.min(1, go * 1.15 - k * 0.07));
					const a = arc(t, true);
					const f = 1 - 0.4 * Math.sin(t * Math.PI);
					x = a.x + dx * f;
					y = a.y + 4 + dy * f;
					if (t >= 1) {
						x = LX + dx;
						y = PY - 14 + dy;
					}
				}
				const bob = idleBob(frame, k + 10, 1);
				return (
					<g key={k} transform={`translate(${x},${y + bob})`}>
						<circle r={15} fill={`url(#${ID}-g-stem)`} stroke={edit > 0.5 ? AMBER : 'rgba(80,60,120,0.4)'} strokeWidth={edit > 0.5 ? 2.5 : 1} />
						{/* the switch: on (grey) → off (amber) */}
						{go >= 1 && (
							<g transform="translate(0,-26)">
								<rect x={-12} y={-6} width={24} height={12} rx={6} fill={edit > 0.5 ? '#fff6e6' : '#e6e8ec'} stroke={edit > 0.5 ? AMBER : TOK.inkMute} strokeWidth={1.5} />
								<circle cx={interpolate(edit, [0, 1], [6, -6], clamp)} cy={0} r={4.5} fill={edit > 0.5 ? AMBER : TOK.inkMute} />
							</g>
						)}
					</g>
				);
			})}
			<text x={LX} y={PY - 100} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.edit + 30) * (1 - fadeAt(frame, b.infuse, 14))}>
				{editLabel}
			</text>
			<text x={BX} y={PY + 96} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700} opacity={clear * (1 - fadeAt(frame, b.infuse + 40, 14))}>
				chemotherapy clears the marrow
			</text>
			{/* outcome */}
			<g opacity={fadeAt(frame, b.outcome)} transform={`translate(${W / 2},${H - 58}) scale(${Math.min(1, popAt(frame, fps, b.outcome))})`}>
				<rect x={-ow / 2} y={-17} width={ow} height={34} rx={17} fill="#fff6e6" stroke={AMBER} strokeWidth={2.5 + idlePulse(frame)} />
				<text y={6} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>{outcome}</text>
			</g>
			{footer && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={footer.amber ? TOK.amberInk : TOK.inkDim} fontSize={19} fontWeight={800} opacity={fadeAt(frame, footer.at)}>{footer.text}</text>
			)}
		</svg>
	);
};
