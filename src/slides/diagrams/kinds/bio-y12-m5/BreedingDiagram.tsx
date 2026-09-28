// BreedingDiagram — controlling which gametes meet, in three rows on stone
// ledges:
//   selective breeding       only the animals with the wanted trait (star)
//                            are allowed to breed; the rest are set aside
//   artificial insemination  one chosen male's semen reaches many females
//   embryo transfer          embryos from one elite female go into surrogates
// The closing line is the scene's key point: none of these changes the DNA;
// they change which existing alleles are passed on, and how often.
// Token counts are illustrative (the scene gives none).

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {Arrow, CORAL, GlossDefs, Ledge, ease, fadeAt, popAt} from './shared';

export type BreedingProps = {
	at?: {choose?: number; selective?: number; ai?: number; many?: number; embryo?: number; surrogate?: number; rule?: number};
	delay?: number;
};

const ID = 'b12m5brd';
const W = 760, H = 530;

const Animal = ({x, y, name, star = false, sex, frame, seed, s = 1, dim = 0}: {x: number; y: number; name: string; star?: boolean; sex?: '♂' | '♀'; frame: number; seed: number; s?: number; dim?: number}) => (
	<g transform={`translate(${x},${y + idleBob(frame, seed, 1.1)}) scale(${s})`} opacity={1 - dim * 0.6}>
		<ellipse cx={0} cy={16} rx={20} ry={5} fill="rgba(40,36,30,0.18)" />
		<ellipse cx={0} cy={0} rx={20} ry={16} fill={`url(#${ID}-g-${name})`} stroke="rgba(0,0,0,0.28)" />
		<circle cx={-6} cy={-4} r={2.2} fill="#1a1a1a" />
		<circle cx={6} cy={-4} r={2.2} fill="#1a1a1a" />
		{sex && <text x={0} y={34} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{sex}</text>}
		{star && <path d="M 0 -32 L 4 -24 L 13 -23 L 6 -17 L 8 -8 L 0 -13 L -8 -8 L -6 -17 L -13 -23 L -4 -24 Z" fill={TOK.amber} stroke={TOK.amberInk} strokeWidth={1} />}
	</g>
);

export const BreedingDiagram = ({at = {}, delay = 62}: BreedingProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tChoose = at.choose ?? 20, tSel = at.selective ?? 100, tAi = at.ai ?? 250, tMany = at.many ?? 400, tEmb = at.embryo ?? 450, tSur = at.surrogate ?? 600, tRule = at.rule ?? 800;
	const rows = [{y: 118, t: tSel, title: 'selective breeding'}, {y: 262, t: tAi, title: 'artificial insemination'}, {y: 406, t: tEmb, title: 'embryo transfer'}];
	const herd = [true, false, true, false, false, true];
	const sel = ease(frame, tSel + 40, tSel + 80);
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Selective breeding, artificial insemination and embryo transfer control which gametes combine" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{m: theme.accent, f: CORAL, emb: '#f0d9bd'}} />
			<text x={380} y={26} textAnchor="middle" fill={TOK.ink} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tChoose)}>humans choose which parents contribute gametes</text>
			{rows.map((r, k) => (
				<g key={k} opacity={fadeAt(frame, r.t - 10)}>
					<Ledge x={30} y={r.y + 34} w={700} />
					<text x={40} y={r.y - 50} fill={TOK.ink} fontSize={17} fontWeight={800}>{r.title}</text>
				</g>
			))}
			{/* selective breeding: starred animals step forward to breed */}
			{herd.map((star, k) => (
				<g key={k} opacity={popAt(frame, fps, tSel + k * 5)}>
					<Animal x={90 + k * 110} y={rows[0].y - (star ? sel * 8 : 0)} name={k % 2 ? 'f' : 'm'} star={star} frame={frame} seed={k} dim={star ? 0 : sel} />
				</g>
			))}
			<text x={720} y={rows[0].y - 50} textAnchor="end" fill={theme.accent} fontSize={15} fontWeight={800} opacity={sel}>only ★ animals breed</text>
			{/* AI: one bull → many cows */}
			<g opacity={popAt(frame, fps, tAi)}>
				<Animal x={90} y={rows[1].y} name="m" sex="♂" star frame={frame} seed={10} s={1.2} />
			</g>
			{Array.from({length: 6}, (_, k) => {
				const x = 260 + k * 80;
				const t = ease(frame, tAi + 30 + k * 10, tAi + 60 + k * 10);
				return (
					<g key={k}>
						<Arrow x1={118} y1={rows[1].y} x2={x - 24} y2={rows[1].y} color={theme.accent} width={1.6} head={7} t={k === 5 ? t : 0} />
						<g opacity={popAt(frame, fps, tAi + 30 + k * 10)}>
							<Animal x={x} y={rows[1].y} name="f" sex="♀" frame={frame} seed={20 + k} />
						</g>
						{t > 0 && t < 1 && <circle cx={118 + (x - 142) * t} cy={rows[1].y - 20} r={4} fill={theme.accent} />}
					</g>
				);
			})}
			<text x={720} y={rows[1].y - 50} textAnchor="end" fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tMany)}>one chosen male, many offspring</text>
			{/* embryo transfer */}
			<g opacity={popAt(frame, fps, tEmb)}>
				<Animal x={90} y={rows[2].y} name="f" sex="♀" star frame={frame} seed={30} s={1.2} />
			</g>
			{Array.from({length: 4}, (_, k) => {
				const x = 300 + k * 110;
				const t = ease(frame, tSur + k * 12, tSur + 40 + k * 12);
				return (
					<g key={k}>
						<circle cx={140 + (x - 140) * t} cy={rows[2].y - 30 * Math.sin(t * Math.PI)} r={7} fill={`url(#${ID}-g-emb)`} stroke="rgba(0,0,0,0.3)" opacity={fadeAt(frame, tEmb + 30) * (t < 1 ? 1 : 0)} />
						<g opacity={fadeAt(frame, tSur - 20)}>
							<Animal x={x} y={rows[2].y} name="f" sex="♀" frame={frame} seed={40 + k} />
							{t >= 1 && <circle cx={x} cy={rows[2].y} r={6} fill={`url(#${ID}-g-emb)`} stroke="rgba(0,0,0,0.3)" />}
						</g>
					</g>
				);
			})}
			<text x={720} y={rows[2].y - 50} textAnchor="end" fill={theme.accent} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tSur + 30)}>elite embryos, surrogate mothers</text>
			<g opacity={fadeAt(frame, tRule)}>
				<rect x={90} y={H - 42} width={580} height={32} rx={16} fill="#fff8ea" stroke={TOK.amber} strokeWidth={2 + idlePulse(frame) * 1.5} />
				<text x={380} y={H - 20} textAnchor="middle" fill={TOK.amberInk} fontSize={16} fontWeight={800}>DNA unchanged: it's which alleles pass on, and how often</text>
			</g>
		</svg>
	);
};
