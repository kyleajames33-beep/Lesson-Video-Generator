// FlowerDiagram — a flower in cut-away on a stone plinth: anthers on their
// filaments, and the carpel (stigma, style, ovary with an ovule).
//
// mode 'pollination'  pollen moves from an anther to the stigma (pollination:
//                     delivery only); then a pollen tube grows down the style
//                     to the ovule and the male gamete fuses with the female
//                     gamete (fertilisation) → zygote → seed. A second plinth
//                     shows the asexual route: a runner making a genetically
//                     identical daughter plant.
// mode 'handcross'    a controlled cross: remove the anthers (emasculation),
//                     bag the flower, brush on pollen from the chosen male
//                     parent, rebag and label; then managed hives and
//                     mechanical application as chips.
//
// Props: `mode`, `at` (frames after `delay`).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CORAL, GlossDefs, Pill, ease, fadeAt, lerp, popAt} from './shared';

export type FlowerProps = {
	mode?: 'pollination' | 'handcross';
	at?: Record<string, number>;
	delay?: number;
};

const ID = 'b12m5flw';
const W = 760, H = 530;

/** Cut-away flower centred at (x, base y). */
const Flower = ({x, y, frame, anthers = 1, petals = CORAL, ovuleGlow = 0, s = 1}: {x: number; y: number; frame: number; anthers?: number; petals?: string; ovuleGlow?: number; s?: number}) => {
	const sway = Math.sin(frame / 40) * 1.2;
	return (
		<g transform={`translate(${x},${y}) scale(${s}) rotate(${sway})`}>
			<path d="M 0 0 L 0 -60" stroke="#6b8f3a" strokeWidth={8} />
			{/* petals (cut-away: two sides) */}
			<path d="M -12 -70 C -90 -100, -110 -170, -70 -190 C -50 -150, -30 -110, -8 -84 Z" fill={petals} opacity={0.85} stroke="rgba(0,0,0,0.15)" />
			<path d="M 12 -70 C 90 -100, 110 -170, 70 -190 C 50 -150, 30 -110, 8 -84 Z" fill={petals} opacity={0.85} stroke="rgba(0,0,0,0.15)" />
			{/* receptacle + ovary */}
			<ellipse cx={0} cy={-76} rx={30} ry={20} fill="#9fbf5a" stroke="rgba(0,0,0,0.2)" />
			<ellipse cx={0} cy={-80} rx={9} ry={11} fill="#fff4d6" stroke="#c9a24a" strokeWidth={2} />
			{ovuleGlow > 0 && <circle cx={0} cy={-80} r={16} fill={TOK.amber} opacity={0.35 * ovuleGlow} />}
			{/* style + stigma */}
			<rect x={-4} y={-170} width={8} height={78} fill="#b6cf73" />
			<ellipse cx={0} cy={-174} rx={14} ry={7} fill="#8fae4a" stroke="rgba(0,0,0,0.2)" />
			{/* stamens */}
			{[-1, 1].map((sd) => (
				<g key={sd} opacity={anthers}>
					<path d={`M ${sd * 16} -88 Q ${sd * 34} -130 ${sd * 38} -158`} fill="none" stroke="#cdb77a" strokeWidth={3.5} />
					<ellipse cx={sd * 40} cy={-164} rx={9} ry={13} fill="#e6b93c" stroke="rgba(0,0,0,0.25)" />
				</g>
			))}
		</g>
	);
};

export const FlowerDiagram = ({mode = 'pollination', at = {}, delay = 62}: FlowerProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const FX = mode === 'pollination' ? 250 : 300, FY = mode === 'pollination' ? 390 : 356;
	const stigma = {x: FX, y: FY - 174 * 1.3};
	const anther = {x: FX + 40 * 1.3, y: FY - 164 * 1.3};
	const ovule = {x: FX, y: FY - 80 * 1.3};

	if (mode === 'pollination') {
		const tPol = at.pollination ?? 30, tAnth = at.anther ?? 100, tStig = at.stigma ?? 160, tFert = at.fertilisation ?? 250, tOv = at.ovule ?? 400, tSeed = at.seed ?? 500, tVeg = at.vegetative ?? 800, tRun = at.runners ?? 850;
		const fly = ease(frame, tStig - 30, tStig + 10);
		const tube = ease(frame, tFert, tFert + 90);
		const fuse = ease(frame, tOv, tOv + 30);
		const seed = popAt(frame, fps, tSeed);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Pollination moves pollen to the stigma; fertilisation is the later fusion of gametes in the ovule" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={{pollen: '#e6b93c', seed: '#8a6a3c'}} />
				<DioramaPlinth id={ID} cx={FX} cy={FY} rx={150} />
				<Flower x={FX} y={FY} frame={frame} s={1.3} ovuleGlow={fuse} />
				{/* labels */}
				<g opacity={fadeAt(frame, tAnth)}>
					<text x={FX + 150} y={anther.y + 6} fill={TOK.inkDim} fontSize={15} fontWeight={800}>anther (male)</text>
				</g>
				<g opacity={fadeAt(frame, tStig)}>
					<text x={stigma.x - 20} y={stigma.y - 40} textAnchor="end" fill={TOK.inkDim} fontSize={15} fontWeight={800}>stigma (female)</text>
				</g>
				{/* pollen grains: anther → stigma */}
				{[0, 1, 2].map((k) => {
					const t = Math.max(0, Math.min(1, fly * 1.4 - k * 0.2));
					if (frame < tStig - 40) return null;
					return <circle key={k} cx={lerp(anther.x, stigma.x + (k - 1) * 7, t)} cy={lerp(anther.y, stigma.y - 6, t) - Math.sin(t * Math.PI) * 40} r={5} fill={`url(#${ID}-g-pollen)`} stroke="rgba(0,0,0,0.25)" />;
				})}
				<g opacity={fadeAt(frame, tStig + 10)}>
					<Pill x={FX + 236} y={96} text="1 · pollination: pollen delivered" color={theme.accent} fill={theme.soft} size={15} />
				</g>
				{/* pollen tube down the style */}
				{tube > 0 && <path d={`M ${stigma.x + 2} ${stigma.y} L ${stigma.x + 2} ${lerp(stigma.y, ovule.y - 10, tube)}`} stroke="#d9a52c" strokeWidth={3.5} strokeDasharray="4 3" />}
				<g opacity={fadeAt(frame, tFert + 30)}>
					<Pill x={FX + 236} y={136} text="2 · fertilisation: gametes fuse in the ovule" color={TOK.amberInk} fill="#fff8ea" size={15} strokeWidth={2 + (frame > tOv ? idlePulse(frame) : 0)} />
				</g>
				<g opacity={fadeAt(frame, tOv)}>
					<text x={ovule.x + 36} y={ovule.y + 34} fill={TOK.inkDim} fontSize={15} fontWeight={800}>ovule → zygote</text>
				</g>
				<g opacity={seed}>
					<ellipse cx={FX + 130} cy={FY - 40} rx={16} ry={11} fill={`url(#${ID}-g-seed)`} stroke="rgba(0,0,0,0.3)" />
					<text x={FX + 156} y={FY - 34} fill={TOK.ink} fontSize={15} fontWeight={800}>seed (varied)</text>
				</g>
				{/* asexual route: runner */}
				<g opacity={fadeAt(frame, tVeg)}>
					<text x={630} y={250} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>asexual:</text>
					<text x={630} y={272} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>vegetative propagation</text>
					<DioramaPlinth id={`${ID}r`} cx={630} cy={400} rx={100} />
					{[570, 690].map((x, k) => (
						<g key={k} opacity={k === 0 ? 1 : popAt(frame, fps, tRun + 30)}>
							{[-1, 0, 1].map((d) => <ellipse key={d} cx={x + d * 14} cy={372 - Math.abs(d) * 4} rx={12} ry={18} transform={`rotate(${d * 30} ${x + d * 14} ${372})`} fill="#5f9a3e" stroke="rgba(0,0,0,0.2)" />)}
						</g>
					))}
					<path d={`M 580 392 Q 630 ${412 + idleBob(frame, 3, 1)} ${lerp(580, 680, ease(frame, tRun, tRun + 30))} 392`} fill="none" stroke="#6b8f3a" strokeWidth={3} />
					<text x={630} y={470} textAnchor="middle" fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tRun + 40)}>runner → identical clone</text>
				</g>
			</svg>
		);
	}

	// handcross
	const tHand = at.hand ?? 20, tRemove = at.remove ?? 100, tEmas = at.emasculation ?? 200, tBag = at.bag ?? 300, tBrush = at.brush ?? 400, tRebag = at.rebag ?? 500, tHives = at.hives ?? 700, tMech = at.mech ?? 800;
	const cut = ease(frame, tRemove, tRemove + 40);
	const bag1 = ease(frame, tBag, tBag + 30) * (1 - ease(frame, tBrush - 30, tBrush - 5));
	const brush = ease(frame, tBrush, tBrush + 50);
	const bag2 = ease(frame, tRebag, tRebag + 30);
	const bag = Math.max(bag1, bag2);
	const steps = ['remove anthers', 'bag flower', 'brush on chosen pollen', 'rebag and label'];
	const stepAt = [tRemove, tBag, tBrush, tRebag];
	const bx = lerp(640, stigma.x + 18, brush), by = lerp(140, stigma.y - 8, brush);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Hand pollination: remove anthers, bag, brush on chosen pollen, rebag and label" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pollen: '#e6b93c'}} />
			<DioramaPlinth id={ID} cx={FX} cy={FY} rx={150} />
			<Flower x={FX} y={FY} frame={frame} s={1.3} anthers={1 - cut} />
			{/* falling anthers */}
			{cut > 0 && cut < 1 && [-1, 1].map((sd) => (
				<ellipse key={sd} cx={FX + sd * 52 + sd * cut * 30} cy={FY - 213 + cut * 190} rx={9} ry={13} fill="#e6b93c" opacity={1 - cut} />
			))}
			<g opacity={fadeAt(frame, tEmas) * (1 - fadeAt(frame, tBag - 10))}>
				<text x={FX} y={60} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>emasculation: it can't pollinate itself</text>
			</g>
			{/* bag */}
			<g opacity={bag}>
				<path d={`M ${FX - 110} ${FY - 110} L ${FX - 96} ${FY - 290} Q ${FX} ${FY - 318} ${FX + 96} ${FY - 290} L ${FX + 110} ${FY - 110} Z`} fill="#efe6d2" opacity={0.78} stroke="#b9ab93" strokeWidth={2.5} />
				<line x1={FX - 112} y1={FY - 112} x2={FX + 112} y2={FY - 112} stroke="#8a7a5c" strokeWidth={4} />
				{bag2 > 0.5 && (
					<g>
						<line x1={FX + 100} y1={FY - 112} x2={FX + 150} y2={FY - 80} stroke="#8a7a5c" strokeWidth={2} />
						<rect x={FX + 140} y={FY - 80} width={70} height={36} rx={5} fill="#ffffff" stroke="#8a7a5c" strokeWidth={2} />
						<text x={FX + 175} y={FY - 57} textAnchor="middle" fill={TOK.ink} fontSize={15} fontWeight={800}>♀ × ♂</text>
					</g>
				)}
			</g>
			{/* brush with pollen from the chosen male parent */}
			<g opacity={fadeAt(frame, tBrush - 20) * (1 - fadeAt(frame, tRebag - 20))}>
				<line x1={bx + 6} y1={by - 6} x2={bx + 70} y2={by - 70} stroke="#8a6a3c" strokeWidth={6} strokeLinecap="round" />
				<ellipse cx={bx} cy={by} rx={9} ry={14} transform={`rotate(-45 ${bx} ${by})`} fill={`url(#${ID}-g-pollen)`} />
				<text x={640} y={112} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={1 - brush}>pollen from the chosen male parent</text>
			</g>
			{/* steps */}
			{steps.map((s, k) => {
				const on = frame >= stepAt[k];
				return (
					<g key={k} opacity={fadeAt(frame, stepAt[k])}>
						<circle cx={532} cy={236 + k * 44} r={14} fill={on ? theme.accent : '#ffffff'} stroke={theme.accent} strokeWidth={2} />
						<text x={532} y={241 + k * 44} textAnchor="middle" fill="#ffffff" fontSize={15} fontWeight={800}>{k + 1}</text>
						<text x={554} y={242 + k * 44} fill={TOK.ink} fontSize={16} fontWeight={800}>{s}</text>
					</g>
				);
			})}
			<g opacity={popAt(frame, fps, tHives)}>
				<Pill x={380} y={470} text="managed pollinators: hired hives in orchards" color={theme.accent} fill={theme.soft} size={15} />
			</g>
			<g opacity={popAt(frame, fps, tMech)}>
				<Pill x={380} y={506} text="mechanical: collected pollen dusted or blown on" color={theme.accent} fill={theme.soft} size={15} />
			</g>
			<text x={FX} y={30} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tHand)}>hand pollination: a controlled cross</text>
		</svg>
	);
};
