// VilliDiagram (bio11m2Villi) — absorption across the small intestine wall.
//
// A cut-away block of intestine wall on a stone plinth: the lumen above, the
// wall folded into finger-like villi, each fringed with microvilli and holding
// a capillary loop. Small digested molecules (glucose, amino acids) drift down
// through the lumen, cross into the villi and are carried off in the blood to
// a vessel labelled with where they go next. The villi grow up out of a flat
// lining on their beat, so the gain in surface is seen. All labels from props. Hold:
// molecules keep being absorbed and carried away.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Chip2, Foot, FootLine, GLOSS, GlossDefs, H, PAL, W, fadeAt, popAt} from './shared';

export type VilliProps = {
	lumenLabel: string;
	villi: {label: string; at: number};
	microvilli?: {label: string; at: number};
	absorb: {at: number; molecules?: string[]};
	blood: {label: string; at: number};
	footer?: FootLine[];
	delay?: number;
};

const ID = 'b11m2villi';
const X0 = 70, X1 = 690, BASE = 390, TOP = 214;
const NV = 5;

export const VilliDiagram = ({lumenLabel, villi, microvilli, absorb, blood, footer = [], delay = 62}: VilliProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const vOn = fadeAt(frame, villi.at, 30);
	const span = (X1 - X0) / NV;
	const vx = Array.from({length: NV}, (_, i) => X0 + span * (i + 0.5));
	const vw = span * 0.62;
	const grow = vOn; // villi rise out of a flat lining
	const tipY = BASE - (BASE - TOP) * grow;

	// outline of the wall: flat between villi, finger up at each villus
	const outline = () => {
		let d = `M ${X0} ${BASE}`;
		vx.forEach((x) => {
			d += ` L ${x - vw / 2} ${BASE} L ${x - vw / 2} ${tipY + vw / 2} A ${vw / 2} ${vw / 2} 0 0 1 ${x + vw / 2} ${tipY + vw / 2} L ${x + vw / 2} ${BASE}`;
		});
		return d + ` L ${X1} ${BASE}`;
	};
	const wallD = outline() + ` L ${X1} ${BASE + 40} L ${X0} ${BASE + 40} Z`;

	const mols = absorb.molecules ?? ['glucose', 'amino'];
	const absOn = fadeAt(frame, absorb.at, 12);
	const mvOn = microvilli ? fadeAt(frame, microvilli.at, 20) : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${villi.label}; ${blood.label}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			<DioramaPlinth id={`${ID}p`} cx={W / 2} cy={BASE + 52} rx={330} />
			{/* lumen */}
			<rect x={X0} y={120} width={X1 - X0} height={BASE - 120} rx={14} fill={PAL.glass} opacity={0.55} />
			<text x={X0 + 14} y={144} fill={TOK.inkDim} fontSize={17} fontWeight={800}>{lumenLabel}</text>

			{/* wall */}
			<path d={wallD} fill={PAL.gut} stroke="#b9776a" strokeWidth={2} />
			{/* microvilli fringe */}
			{mvOn > 0 &&
				vx.map((x, i) =>
					Array.from({length: 9}, (_, k) => {
						const a = Math.PI + (k / 8) * Math.PI;
						const cx = x + Math.cos(a) * (vw / 2);
						const cy = tipY + vw / 2 + Math.sin(a) * (vw / 2);
						return <line key={`${i}-${k}`} x1={cx} y1={cy} x2={cx + Math.cos(a) * 7} y2={cy + Math.sin(a) * 7} stroke="#b9776a" strokeWidth={2} opacity={mvOn} />;
					}),
				)}
			{/* capillary loops */}
			{vx.map((x, i) => (
				<path key={i} d={`M ${x - vw * 0.18} ${BASE + 24} L ${x - vw * 0.18} ${tipY + vw * 0.55} A ${vw * 0.18} ${vw * 0.18} 0 0 1 ${x + vw * 0.18} ${tipY + vw * 0.55} L ${x + vw * 0.18} ${BASE + 24}`} fill="none" stroke={PAL.blood} strokeWidth={5} opacity={0.3 + 0.7 * vOn} />
			))}
			{/* vessel along the base */}
			<rect x={X0} y={BASE + 20} width={X1 - X0} height={12} rx={6} fill={PAL.blood} opacity={0.3 + 0.7 * fadeAt(frame, blood.at, 16)} />

			{/* molecules: fall through the lumen, enter a villus, run down its capillary, then along the vessel */}
			{absOn > 0 &&
				Array.from({length: 14}, (_, k) => {
					const T = 150;
					const u = (((frame - absorb.at) / T + k / 14) % 1 + 1) % 1;
					const v = k % NV;
					const side = k % 2 ? 1 : -1;
					const sx = vx[v] + side * (vw / 2 + 12);
					let x: number, y: number;
					if (u < 0.45) {
						const t = u / 0.45;
						x = sx + idleBob(frame, k, 3);
						y = 160 + (tipY + 40 - 160) * t;
					} else if (u < 0.55) {
						const t = (u - 0.45) / 0.1;
						x = sx + (vx[v] + side * vw * 0.18 - sx) * t;
						y = tipY + 40 + 10 * t;
					} else if (u < 0.8) {
						const t = (u - 0.55) / 0.25;
						x = vx[v] + side * vw * 0.18;
						y = tipY + 50 + (BASE + 26 - tipY - 50) * t;
					} else {
						const t = (u - 0.8) / 0.2;
						x = vx[v] + side * vw * 0.18 + (X1 - vx[v]) * t;
						y = BASE + 26;
					}
					const m = mols[k % mols.length] as keyof typeof PAL;
					return <circle key={k} cx={x} cy={y} r={7} fill={`url(#${ID}-g-${m})`} stroke="#ffffff" strokeWidth={1} opacity={absOn} />;
				})}

			<Chip2 x={vx[1]} y={tipY - 44} text={villi.label} color={theme.accent} t={popAt(frame, fps, villi.at + 30)} size={17} />
			{microvilli && <Chip2 x={vx[3]} y={tipY - 44} text={microvilli.label} color={theme.accent} t={popAt(frame, fps, microvilli.at + 10)} size={17} />}
			<Chip2 x={X1 - 90} y={BASE + 84} text={blood.label} color={PAL.blood} t={popAt(frame, fps, blood.at)} size={17} fill={`rgba(255,255,255,${0.9 + 0.1 * idlePulse(frame)})`} />
			<Foot lines={footer} frame={frame} />
		</svg>
	);
};

