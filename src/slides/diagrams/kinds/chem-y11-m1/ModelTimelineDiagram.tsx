// ModelTimelineDiagram — atomic models as a row of plinths along a timeline.
//
// Each model rises onto its plinth as the narration reaches its year. Between
// neighbours, an arrow carries the evidence that broke the older model (the
// electron, the gold foil result, stability and spectra); once the evidence
// lands, the old model dims and the new one takes over. The newest model stays
// bright. Config-driven: any list of models (from a small set of drawings) and
// the evidence between them, all text from the lesson JSON.
//
// Beats: each model and each evidence arrow has an `at` (frames after `delay`).

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, GlossDefs, PARTICLE, clamp, fadeAt, popAt, shade} from './shared';

export type AtomModelDrawing = 'solid' | 'pudding' | 'nuclear' | 'shells';
export type TimelineModel = {name: string; year: string; summary: string; model: AtomModelDrawing; at: number};
export type ModelTimelineProps = {
	title?: string;
	models?: TimelineModel[];
	/** Evidence between model i and model i + 1. */
	evidence?: {label: string; at: number}[];
	delay?: number;
};

const ID = 'c11tl';
const W = 760;
const H = 530;
const PLINTH_Y = 362;
const MODEL_Y = 268;

const DEFAULT_MODELS: TimelineModel[] = [
	{name: 'Dalton', year: '1803', summary: 'solid sphere', model: 'solid', at: 14},
	{name: 'Thomson', year: '1904', summary: 'plum pudding', model: 'pudding', at: 243},
	{name: 'Rutherford', year: '1911', summary: 'tiny dense nucleus', model: 'nuclear', at: 549},
	{name: 'Bohr', year: '1913', summary: 'energy-level shells', model: 'shells', at: 823},
];
const DEFAULT_EVIDENCE = [
	{label: 'electron, 1897', at: 152},
	{label: 'gold foil', at: 449},
	{label: 'spectra', at: 700},
];

const Model = ({kind, x, y, frame}: {kind: AtomModelDrawing; x: number; y: number; frame: number}) => {
	switch (kind) {
		case 'solid':
			return <circle cx={x} cy={y} r={40} fill={`url(#${ID}-ball-solid)`} stroke={shade('#5b6168', -0.3)} strokeWidth={1} />;
		case 'pudding': {
			// A ball of positive charge with electrons set through it.
			const es = [[-22, -18], [8, -28], [26, -6], [-6, 2], [-26, 14], [14, 20], [0, -12]];
			const pl = [[-10, -30], [20, -20], [-30, -2], [14, 4], [-14, 24], [30, 14], [-4, 34]];
			return (
				<g>
					<circle cx={x} cy={y} r={46} fill={`url(#${ID}-ball-pudding)`} stroke={shade('#f2a7a0', -0.3)} strokeWidth={1.5} opacity={0.95} />
					{pl.map(([dx, dy], k) => (
						<text key={`p${k}`} x={x + dx} y={y + dy + 5} textAnchor="middle" fill="#b0463d" fontSize={15} fontWeight={800} opacity={0.75}>+</text>
					))}
					{es.map(([dx, dy], k) => (
						<circle key={`e${k}`} cx={x + dx + idleBob(frame, k, 1)} cy={y + dy + idleBob(frame, k + 9, 1)} r={6} fill={`url(#${ID}-ball-electron)`} stroke={shade(PARTICLE.electron, -0.35)} strokeWidth={1} />
					))}
				</g>
			);
		}
		case 'nuclear': {
			// Tiny nucleus, electrons far out on tilted paths: mostly empty space.
			const paths = [0, 60, 120];
			return (
				<g>
					{paths.map((rot, k) => (
						<ellipse key={`o${k}`} cx={x} cy={y} rx={48} ry={17} fill="none" stroke="rgba(40,60,80,0.25)" strokeWidth={1.5} transform={`rotate(${rot} ${x} ${y})`} />
					))}
					<circle cx={x} cy={y} r={6} fill={`url(#${ID}-ball-nucleus)`} stroke={shade(PARTICLE.nucleus, -0.35)} strokeWidth={1} />
					{paths.map((rot, k) => {
						const a = frame / 22 + k * 2.1;
						const ex = Math.cos(a) * 48;
						const ey = Math.sin(a) * 17;
						const r = (rot * Math.PI) / 180;
						return (
							<circle key={`e${k}`} cx={x + ex * Math.cos(r) - ey * Math.sin(r)} cy={y + ex * Math.sin(r) + ey * Math.cos(r)} r={6} fill={`url(#${ID}-ball-electron)`} stroke={shade(PARTICLE.electron, -0.35)} strokeWidth={1} />
						);
					})}
				</g>
			);
		}
		case 'shells': {
			// Electrons fixed on concentric energy levels.
			const shells = [{r: 24, n: 2}, {r: 44, n: 6}];
			return (
				<g>
					{shells.map((s, k) => (
						<circle key={`s${k}`} cx={x} cy={y} r={s.r} fill="none" stroke="rgba(40,60,80,0.4)" strokeWidth={2} />
					))}
					<circle cx={x} cy={y} r={10} fill={`url(#${ID}-ball-nucleus)`} stroke={shade(PARTICLE.nucleus, -0.35)} strokeWidth={1} />
					{shells.map((s, k) =>
						Array.from({length: s.n}, (_, i) => {
							const a = (i / s.n) * Math.PI * 2 + frame / (70 + k * 30);
							return <circle key={`e${k}-${i}`} cx={x + Math.cos(a) * s.r} cy={y + Math.sin(a) * s.r} r={6} fill={`url(#${ID}-ball-electron)`} stroke={shade(PARTICLE.electron, -0.35)} strokeWidth={1} />;
						}),
					)}
				</g>
			);
		}
	}
};

export const ModelTimelineDiagram = ({
	title = 'Each model fell to new evidence',
	models = DEFAULT_MODELS,
	evidence = DEFAULT_EVIDENCE,
	delay = 62,
}: ModelTimelineProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();

	const n = models.length;
	const margin = 14;
	const slot = (W - margin * 2) / n;
	const xs = models.map((_, i) => margin + slot * (i + 0.5));
	const rx = Math.min(80, slot * 0.42);

	// A model dims once the next one has arrived.
	const dimOf = (i: number) => (i < n - 1 ? interpolate(frame, [models[i + 1].at, models[i + 1].at + 20], [1, 0.42], clamp) : 1);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Atomic models in order: ${models.map((m) => `${m.name} ${m.year}`).join(', ')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{solid: '#5b6168', pudding: '#f6c2b8', electron: PARTICLE.electron, nucleus: PARTICLE.nucleus}} />

			<text x={W / 2} y={36} textAnchor="middle" fill={TOK.ink} fontSize={28} fontWeight={800} opacity={fadeAt(frame, 0)}>
				{title}
			</text>

			{/* Timeline rail, running behind the plinths' soil bands */}
			<g opacity={fadeAt(frame, 0)}>
				<line x1={margin + 10} y1={PLINTH_Y + rx * 0.1} x2={W - margin - 10} y2={PLINTH_Y + rx * 0.1} stroke={shade(theme.accent, 0.3)} strokeWidth={6} strokeLinecap="round" opacity={0.55} />
			</g>

			{/* Evidence arrows between neighbours */}
			{evidence.slice(0, n - 1).map((ev, i) => {
				const t = fadeAt(frame, ev.at, 16);
				const x1 = xs[i] + 30;
				const x2 = xs[i + 1] - 30;
				const mid = (xs[i] + xs[i + 1]) / 2;
				const w = ev.label.length * 9.6 + 26;
				const glow = frame > ev.at + 16 ? idlePulse(frame + i * 18) : 0;
				return (
					<g key={`ev${i}`} opacity={t}>
						<path d={`M ${x1} ${MODEL_Y - 66} Q ${mid} ${MODEL_Y - 128} ${x2} ${MODEL_Y - 66}`} stroke={TOK.amber} strokeWidth={3} fill="none" strokeLinecap="round" strokeDasharray="1 1" pathLength={1} strokeDashoffset={1 - t} />
						<Arrow x1={x2 - 10} y1={MODEL_Y - 74} x2={x2 + 2} y2={MODEL_Y - 62} color={TOK.amber} width={3} head={11} />
						<rect x={mid - w / 2} y={MODEL_Y - 134 - 17} width={w} height={34} rx={17} fill={TOK.bgLift} stroke={TOK.amber} strokeWidth={2 + glow} />
						<text x={mid} y={MODEL_Y - 134 + 6} textAnchor="middle" fill={TOK.amberInk} fontSize={17} fontWeight={800}>
							{ev.label}
						</text>
					</g>
				);
			})}

			{/* Plinths, models and labels */}
			{models.map((m, i) => {
				const pop = popAt(frame, fps, m.at);
				const dim = dimOf(i);
				const labelY = PLINTH_Y + rx * 0.54 + 34;
				const rise = (1 - Math.min(1, pop)) * 40;
				return (
					<g key={m.name} opacity={Math.min(1, pop * 1.6)}>
						<DioramaPlinth id={ID} cx={xs[i]} cy={PLINTH_Y} rx={rx}>
							<ellipse cx={xs[i]} cy={PLINTH_Y - 2} rx={40} ry={10} fill="rgba(40,60,20,0.22)" />
						</DioramaPlinth>
						<g opacity={dim} transform={`translate(0, ${rise + idleBob(frame, i, 2)})`}>
							<g transform={`translate(${xs[i]},${MODEL_Y}) scale(1.22) translate(${-xs[i]},${-MODEL_Y})`}>
								<Model kind={m.model} x={xs[i]} y={MODEL_Y} frame={frame} />
							</g>
						</g>
						<g opacity={0.35 + 0.65 * dim}>
							<text x={xs[i]} y={labelY} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>
								{m.name}
							</text>
							<text x={xs[i]} y={labelY + 27} textAnchor="middle" fill={theme.accent} fontSize={22} fontWeight={800}>
								{m.year}
							</text>
							<text x={xs[i]} y={labelY + 51} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>
								{m.summary}
							</text>
						</g>
					</g>
				);
			})}
		</svg>
	);
};
