// MicrobesDiagram — fast asexual copying, on three stone plinths.
//
//   yeast: budding           a bud swells off the parent cell and breaks away
//   mould: spores            a sporangium bursts; spores drift off to disperse
//   bacterium: binary fission  the circular chromosome is copied, the cell
//                            lengthens and splits into two daughter cells
// Each plays when the narration reaches it and then loops gently (the hold's
// life). A protist chip and the closing line land on their beats.
//
// Props: `at` (frames after `delay`): budding / spores / fission / protists /
// rule.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob} from '../../diorama';
import {GlossDefs, Pill, ease, fadeAt, hash01, lerp, popAt} from './shared';

export type MicrobesProps = {
	at?: {budding?: number; spores?: number; fission?: number; protists?: number; rule?: number};
	delay?: number;
};

const ID = 'b12m5mic';
const W = 760, H = 530;
const XS = [128, 380, 632];
const PY = 300;

export const MicrobesDiagram = ({at = {}, delay = 62}: MicrobesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tBud = at.budding ?? 20, tSpore = at.spores ?? 150, tFis = at.fission ?? 300, tPro = at.protists ?? 500, tRule = at.rule ?? 700;
	const loop = (t0: number, len: number) => (frame < t0 ? 0 : ((frame - t0) % len) / len);

	// Budding: bud grows 0→1, then detaches.
	const bud = frame < tBud ? 0 : loop(tBud, 150);
	const budSize = ease(bud * 150, 0, 90);
	const budAway = ease(bud * 150, 95, 140);
	// Spores: burst then drift, repeating.
	const sp = loop(tSpore + 20, 160);
	// Fission: copy (0–0.35), elongate (0.35–0.65), split (0.65–1).
	const fis = frame < tFis ? 0 : loop(tFis, 170);
	const copy = ease(fis * 170, 10, 55);
	const elong = ease(fis * 170, 55, 105);
	const split = ease(fis * 170, 105, 150);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Yeast budding, mould spores and bacterial binary fission" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{yeast: '#e2c98f', mould: '#9fb07a', spore: '#6f7d4f', bact: theme.accent, chrom: '#f4efe6'}} />
			{/* Yeast */}
			<g opacity={fadeAt(frame, tBud - 10)}>
				<text x={XS[0]} y={60} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>yeast</text>
				<text x={XS[0]} y={82} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>budding</text>
				<DioramaPlinth id={`${ID}a`} cx={XS[0]} cy={PY} rx={104}>
					<g transform={`translate(0,${idleBob(frame, 1, 1)})`}>
						<ellipse cx={XS[0] - 16} cy={PY - 60} rx={42} ry={36} fill={`url(#${ID}-g-yeast)`} stroke="rgba(0,0,0,0.25)" />
						{budSize > 0 && <ellipse cx={XS[0] + 22 + budAway * 36} cy={PY - 78 - budAway * 20} rx={lerp(4, 22, budSize)} ry={lerp(4, 20, budSize)} fill={`url(#${ID}-g-yeast)`} stroke="rgba(0,0,0,0.25)" />}
					</g>
				</DioramaPlinth>
			</g>
			{/* Mould */}
			<g opacity={fadeAt(frame, tSpore - 10)}>
				<text x={XS[1]} y={60} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>mould</text>
				<text x={XS[1]} y={82} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>spores</text>
				<DioramaPlinth id={`${ID}b`} cx={XS[1]} cy={PY} rx={104}>
					{[-30, 0, 30].map((dx, k) => (
						<g key={k}>
							<path d={`M ${XS[1] + dx} ${PY - 6} Q ${XS[1] + dx + 6} ${PY - 50} ${XS[1] + dx} ${PY - 86}`} fill="none" stroke="#8a9a64" strokeWidth={4} />
							<circle cx={XS[1] + dx} cy={PY - 94} r={12} fill={`url(#${ID}-g-mould)`} stroke="rgba(0,0,0,0.25)" opacity={k === 1 && sp > 0.02 && sp < 0.5 ? 0.35 : 1} />
						</g>
					))}
					{frame > tSpore + 20 && Array.from({length: 10}, (_, k) => {
						const a = -Math.PI / 2 + (hash01(k + 3) - 0.5) * 2.2;
						const d = sp * 150;
						return <circle key={k} cx={XS[1] + Math.cos(a) * d + Math.sin(frame / 20 + k) * 4} cy={PY - 94 + Math.sin(a) * d * 0.9} r={4} fill={`url(#${ID}-g-spore)`} opacity={1 - sp} />;
					})}
				</DioramaPlinth>
				<text x={XS[1]} y={PY + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tSpore + 60)}>disperse · survive harsh conditions</text>
			</g>
			{/* Bacterium */}
			<g opacity={fadeAt(frame, tFis - 10)}>
				<text x={XS[2]} y={60} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800}>bacterium</text>
				<text x={XS[2]} y={82} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>binary fission</text>
				<DioramaPlinth id={`${ID}c`} cx={XS[2]} cy={PY} rx={104}>
					{[-1, 1].map((s) => {
						const half = split > 0;
						const len = half ? lerp(54, 36, split) : lerp(36, 54, elong);
						const cx = XS[2] + (half ? s * lerp(22, 44, split) : 0);
						if (!half && s > 0) return null;
						return (
							<g key={s}>
								<rect x={cx - len} y={PY - 86} width={len * 2} height={40} rx={20} fill={`url(#${ID}-g-bact)`} stroke="rgba(0,0,0,0.25)" />
								{/* circular chromosome(s) */}
								{half ? (
									<circle cx={cx} cy={PY - 66} r={9} fill="none" stroke="#ffffff" strokeWidth={2.5} />
								) : (
									<g>
										<circle cx={XS[2] - lerp(0, 18, copy) * (elong > 0 ? 1 : copy)} cy={PY - 66} r={9} fill="none" stroke="#ffffff" strokeWidth={2.5} />
										{copy > 0 && <circle cx={XS[2] + lerp(0, 18, copy) * (elong > 0 ? 1 : copy)} cy={PY - 66} r={9} fill="none" stroke="#ffffff" strokeWidth={2.5} opacity={copy} />}
									</g>
								)}
							</g>
						);
					})}
				</DioramaPlinth>
				<text x={XS[2]} y={PY + 70} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tFis + 60)}>copy chromosome, then split</text>
			</g>
			<g opacity={popAt(frame, fps, tPro)}>
				<Pill x={380} y={430} text="protists: mostly binary fission or budding" color={theme.accent} fill={theme.soft} size={16} />
			</g>
			<text x={380} y={H - 14} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>no mate, no gametes: just rapid cell division</text>
		</svg>
	);
};
