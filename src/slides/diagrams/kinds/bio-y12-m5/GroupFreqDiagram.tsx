// GroupFreqDiagram — a case–control comparison of one SNP allele.
//
// Each group stands on its own stone plinth as a crowd of allele beads (two
// per person). The beads carrying the allele of interest light up, the group's
// frequency (hits ÷ total alleles) is computed and a bar for each group draws
// itself. The group where the allele is clearly more common gets the
// "associated" tag, and the closing line is the scene's own caution:
// associated means found together more often, not "causes".
//
// Props: `allele`, `groups` [{label, sub, people, hits}], `at`, `rule`.

import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse, plinthSlots} from '../../diorama';
import {Ball, GlossDefs, PURPLE, Pill, ease, fadeAt, popAt} from './shared';

export type GroupFreqProps = {
	allele?: string;
	groups?: {label: string; sub?: string; people: number; hits: number}[];
	note?: string;
	rule?: string;
	at?: {groups?: number; second?: number; read?: number; count?: number; compare?: number; tag?: number; rule?: number};
	delay?: number;
};

const ID = 'b12m5grp';
const W = 760, H = 530;

export const GroupFreqDiagram = ({allele = 'T', groups = [], note, rule = 'associated means found together more often, not "causes"', at = {}, delay = 62}: GroupFreqProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const tG = at.groups ?? 20, tG2 = at.second ?? 120, tRead = at.read ?? 220, tCount = at.count ?? 300, tCmp = at.compare ?? 420, tTag = at.tag ?? 520, tRule = at.rule ?? 700;
	const xs = [200, 560];
	const PY = 190, PRX = 150;
	const freq = groups.map((g) => g.hits / (g.people * 2));
	const top = freq.indexOf(Math.max(...freq));
	// Bars
	const BX0 = 120, BX1 = 690, BY = [408, 452];
	const bw = (f: number) => (BX1 - BX0 - 170) * (f / Math.max(0.5, Math.max(...freq) * 1.25));
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Case versus control frequency of allele ${allele}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{other: '#d8d3ca', hit: PURPLE}} />
			{groups.map((g, gi) => {
				const n = g.people * 2;
				const slots = plinthSlots(xs[gi], PY, PRX, n);
				// Deterministic but spread-out choice of which beads carry the allele.
				const hitSet = new Set(Array.from({length: g.hits}, (_, k) => Math.floor(((k + 0.5) * n) / g.hits + gi) % n));
				const show = gi === 0 ? tG : tG2;
				return (
					<g key={gi} opacity={fadeAt(frame, show - 10, 14)}>
						<text x={xs[gi]} y={36} textAnchor="middle" fill={TOK.ink} fontSize={21} fontWeight={800}>{g.label}</text>
						{g.sub && <text x={xs[gi]} y={60} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={700}>{g.sub}</text>}
						<DioramaPlinth id={`${ID}${gi}`} cx={xs[gi]} cy={PY} rx={PRX}>
							{slots.map((s, k) => {
								const lit = hitSet.has(k) && frame > tRead + k * 2;
								const pop = popAt(frame, fps, show + k * 1.5);
								return <Ball key={k} id={ID} name={lit ? 'hit' : 'other'} x={s.x} y={s.y - 10 + idleBob(frame, k + gi * 40, 1.4)} r={11} scale={pop} label={lit ? allele : undefined} labelSize={12} />;
							})}
						</DioramaPlinth>
						<text x={xs[gi]} y={PY + 96} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, tCount)}>
							{g.people} people × 2 = {n} alleles
						</text>
					</g>
				);
			})}
			{/* frequency bars */}
			<g opacity={fadeAt(frame, tCount)}>
				<text x={BX0} y={BY[0] - 36} fill={TOK.ink} fontSize={17} fontWeight={800}>{allele} allele frequency</text>
				<line x1={BX0 + 110} y1={BY[0] - 24} x2={BX0 + 110} y2={BY[1] + 22} stroke={TOK.inkMute} strokeWidth={2} />
				{groups.map((g, gi) => {
					const t = ease(frame, tCount + 10 + gi * 20, tCount + 60 + gi * 20);
					const f = freq[gi];
					const hi = gi === top && frame > tTag;
					return (
						<g key={gi}>
							<text x={BX0 + 100} y={BY[gi] + 6} textAnchor="end" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{g.label}</text>
							<rect x={BX0 + 112} y={BY[gi] - 14} width={bw(f) * t} height={28} rx={8} fill={PURPLE} stroke={hi ? TOK.amber : 'none'} strokeWidth={hi ? 2.5 + idlePulse(frame) * 1.5 : 0} />
							<text x={BX0 + 122 + bw(f) * t} y={BY[gi] + 6} fill={PURPLE} fontSize={17} fontWeight={800} opacity={t}>
								{g.hits}/{g.people * 2} = {Math.round(f * 100)}%
							</text>
						</g>
					);
				})}
			</g>
			{groups.length === 2 && (
				<g opacity={popAt(frame, fps, tTag)}>
					<Pill x={640} y={BY[0] - 40} text={`${allele} is associated`} color={TOK.amberInk} fill="#fff8ea" size={16} />
				</g>
			)}
			{note && <text x={380} y={H - 38} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, tCmp)}>{note}</text>}
			<text x={380} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tRule)}>{rule}</text>
		</svg>
	);
};
