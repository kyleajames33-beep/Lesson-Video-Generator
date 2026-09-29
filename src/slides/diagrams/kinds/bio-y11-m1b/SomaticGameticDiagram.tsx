// SomaticGameticDiagram (bio11m1bSomaticGametic) — body cells versus sex
// cells, side by side on two stone plinths, with the comparison rows building
// underneath.
//
// Left: three somatic cells (skin, muscle, nerve), each nucleus holding two
// sets of chromosomes (accent + coral = one set from each parent). Right: a
// sperm and an egg, each nucleus holding one set. The model draws a set as a
// long + a short chromosome; the human numbers (46 / 23) come from props, and
// the diploid/haploid tags are computed from the sets drawn (2 sets = 2n,
// 1 set = n). Rows: number, ploidy, made by, role (props, each on a beat).
//
// Props: `at`: somatic / gametic / rows: [{label, left, right, at}] /
// `numbers` {somatic: '46', gametic: '23'}; `rule` {text, at}.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {fadeAt, popAt, CORAL, GlossDefs, Chromosome} from './shared';

export type SomaticGameticProps = {
	at?: {somatic?: number; gametic?: number};
	numbers?: {somatic: string; gametic: string};
	rows?: {label: string; left: string; right: string; at: number; rightAt?: number}[];
	rule?: {text: string; at: number};
	delay?: number;
};

const ID = 'b11m1bSG';
const W = 760, H = 530;

/** A nucleus with `sets` chromosome sets (1 or 2), each a long + short chromosome. */
const Nucleus = ({x, y, r, sets, frame, seed}: {x: number; y: number; r: number; sets: 1 | 2; frame: number; seed: number}) => (
	<g>
		<circle cx={x} cy={y} r={r} fill={`url(#${ID}-nuc)`} stroke="#9fb2c6" strokeWidth={2} />
		{Array.from({length: sets}, (_, s) => {
			const ox = sets === 2 ? (s === 0 ? -r * 0.3 : r * 0.3) : 0;
			return (
				<g key={s}>
					<Chromosome id={ID} x={x + ox - r * 0.13} y={y + idleBob(frame, seed + s, 0.8)} len={r * 0.95} w={r * 0.2} color={s === 0 ? 'pat' : 'mat'} chromatids={1} angle={-8} />
					<Chromosome id={ID} x={x + ox + r * 0.15} y={y + r * 0.12 + idleBob(frame, seed + s + 5, 0.8)} len={r * 0.6} w={r * 0.2} color={s === 0 ? 'pat' : 'mat'} chromatids={1} angle={10} />
				</g>
			);
		})}
	</g>
);

export const SomaticGameticDiagram = ({at = {}, numbers = {somatic: '46', gametic: '23'}, rows = [], rule, delay = 62}: SomaticGameticProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tS = at.somatic ?? 10, tG = at.gametic ?? 90;
	const pulse = idlePulse(frame, 50);
	const cellStroke = '#b9ab93';
	const pS = (k: number) => Math.min(1, popAt(frame, fps, tS + k * 8));
	const pG = (k: number) => Math.min(1, popAt(frame, fps, tG + k * 8));
	const sw = (k: number) => Math.sin(frame / 4 + k) * 6;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Somatic cells are diploid body cells; gametes are haploid sperm and egg cells" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{pat: theme.accent, mat: CORAL}} />

			{/* SOMATIC */}
			<g opacity={fadeAt(frame, tS, 12)}>
				<DioramaPlinth id={`${ID}a`} cx={190} cy={170} rx={160} />
				<text x={190} y={30} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800}>somatic (body) cells</text>
				<text x={190} y={52} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>2 sets: diploid, 2n = {numbers.somatic}</text>
			</g>
			{/* skin: flat polygon */}
			<g transform={`translate(${96},${150}) scale(${pS(0)})`}>
				<path d="M -44 -18 L 40 -24 L 48 14 L -38 22 Z" fill={`url(#${ID}-cyto)`} stroke={cellStroke} strokeWidth={3} />
				<Nucleus x={2} y={-1} r={17} sets={2} frame={frame} seed={1} />
				<text y={46} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>skin</text>
			</g>
			{/* muscle: long spindle */}
			<g transform={`translate(${196},${118}) scale(${pS(1)})`}>
				<path d="M -62 0 Q 0 -26 62 0 Q 0 26 -62 0 Z" fill={`url(#${ID}-cyto)`} stroke={cellStroke} strokeWidth={3} />
				<Nucleus x={0} y={0} r={16} sets={2} frame={frame} seed={3} />
				<text y={-28} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>muscle</text>
			</g>
			{/* nerve: body with dendrites and an axon */}
			<g transform={`translate(${288},${150}) scale(${pS(2)})`}>
				{[-2.4, -1.6, -0.8, 2.3].map((a, k) => <line key={k} x1={0} y1={0} x2={Math.cos(a) * 38} y2={Math.sin(a) * 38} stroke={cellStroke} strokeWidth={5} strokeLinecap="round" />)}
				<path d="M 18 6 Q 40 22 58 16" fill="none" stroke={cellStroke} strokeWidth={5} strokeLinecap="round" />
				<circle r={26} fill={`url(#${ID}-cyto)`} stroke={cellStroke} strokeWidth={3} />
				<Nucleus x={0} y={0} r={16} sets={2} frame={frame} seed={5} />
				<text y={46} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>nerve</text>
			</g>

			{/* GAMETIC */}
			<g opacity={fadeAt(frame, tG, 12)}>
				<DioramaPlinth id={`${ID}b`} cx={570} cy={170} rx={160} />
				<text x={570} y={30} textAnchor="middle" fill={CORAL} fontSize={20} fontWeight={800}>gametic (sex) cells</text>
				<text x={570} y={52} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>1 set: haploid, n = {numbers.gametic}</text>
			</g>
			{/* sperm */}
			<g transform={`translate(${486},${140}) scale(${pG(0)})`}>
				<path d={`M 22 0 Q 44 ${sw(0)} 66 ${sw(1) * 0.6} T 104 ${sw(2) * 0.4}`} fill="none" stroke={cellStroke} strokeWidth={4} strokeLinecap="round" />
				<ellipse rx={26} ry={18} fill={`url(#${ID}-cyto)`} stroke={cellStroke} strokeWidth={3} />
				<Nucleus x={-2} y={0} r={13} sets={1} frame={frame} seed={7} />
				<text x={30} y={40} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>sperm: tail to swim</text>
			</g>
			{/* egg */}
			<g transform={`translate(${650},${128}) scale(${pG(1)})`}>
				<circle r={44} fill="#fbf1dc" stroke={cellStroke} strokeWidth={3} />
				{[[-24, -14], [20, -22], [26, 16], [-18, 22], [0, 30], [-30, 6]].map(([gx, gy], k) => <circle key={k} cx={gx} cy={gy} r={3.5} fill="#e7c98a" />)}
				<Nucleus x={2} y={0} r={15} sets={1} frame={frame} seed={9} />
				<text y={62} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>egg: large, food store</text>
			</g>

			{/* comparison rows */}
			{rows.map((r, i) => {
				const y = 292 + i * 44;
				return (
					<g key={i} opacity={fadeAt(frame, r.at)}>
						<rect x={20} y={y - 24} width={720} height={36} rx={10} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
						<text x={34} y={y} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{r.label}</text>
						<text x={300} y={y} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>{r.left}</text>
						<text x={590} y={y} textAnchor="middle" fill={CORAL} fontSize={16} fontWeight={800} opacity={r.rightAt !== undefined ? fadeAt(frame, r.rightAt) : 1}>{r.right}</text>
					</g>
				);
			})}
			{rule && <text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, rule.at) * (0.82 + 0.18 * pulse)}>{rule.text}</text>}
		</svg>
	);
};
