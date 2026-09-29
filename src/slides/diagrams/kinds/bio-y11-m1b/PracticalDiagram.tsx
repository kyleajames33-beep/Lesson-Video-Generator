// PracticalDiagram (bio11m1bPractical) — an enzyme practical on the bench:
// test tubes of catalase + hydrogen peroxide standing in water baths on a stone
// ledge. Oxygen bubbles rise and a foam column builds in each tube at a rate
// set by the tube's `rate` prop (0..1), so "most bubbles at 37 °C, few at 10 °C
// and 70 °C" is what the viewer actually sees. Bubbles are deterministic.
//
// Optional layers, each on its own beat:
//  • `chips`   the variables (independent / dependent / controlled), in rows;
//  • `trials`  three repeat readings per tube as small bars, with the mean
//              marked (the readings are the tube's rate × fixed small offsets,
//              so they are consistent but not identical, and the mean is
//              computed from them);
//  • a control tube (rate 0, e.g. boiled enzyme) is just another tube.
//
// Props: `tubes` [{label, sub?, rate, at, amber?}], `chips` [{tag, text, at}],
// `trialsAt`, `rule` {text, at}, `title`.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idlePulse} from '../../diorama';
import {fadeAt, hash01, Ledge, CORAL} from './shared';

type Tube = {label: string; sub?: string; subAt?: number; rate: number; at: number; amber?: boolean; bath?: 'cold' | 'warm' | 'hot'};
export type PracticalProps = {
	title?: string;
	tubes: Tube[];
	chips?: {tag: string; text: string; at: number}[];
	trialsAt?: number;
	rule?: {text: string; at: number};
	delay?: number;
};

const ID = 'b11m1bPrac';
const W = 760, H = 530;
const OFFSETS = [-0.08, 0.05, 0.03]; // fixed repeat-trial scatter

export const PracticalDiagram = ({title, tubes, chips = [], trialsAt, rule, delay = 62}: PracticalProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const n = tubes.length;
	const pulse = idlePulse(frame, 50);
	const benchY = chips.length ? 300 : 360;
	const span = 640 / n;
	const top = benchY - 190;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Catalase and hydrogen peroxide in test tubes at different conditions; oxygen bubbles show the rate" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{title && <text x={W / 2} y={30} textAnchor="middle" fill={TOK.ink} fontSize={18} fontWeight={800} opacity={fadeAt(frame, 0)}>{title}</text>}
			<Ledge x={40} y={benchY + 4} w={680} opacity={fadeAt(frame, 0)} />
			{tubes.map((t, i) => {
				const cx = 60 + span * (i + 0.5);
				const op = fadeAt(frame, t.at, 14);
				const run = Math.max(0, frame - t.at - 10);
				const foam = Math.min(1, run / 240) * t.rate; // foam column grows to its cap
				const bath = t.bath ?? (/7\d|hot|boil/i.test(t.label) ? 'hot' : /^1\d|cold/i.test(t.label) ? 'cold' : 'warm');
				const water = bath === 'hot' ? '#f3b8a4' : bath === 'cold' ? '#bfe0f5' : '#cfe7d8';
				const tubeTop = top + 20, tubeBot = benchY - 16, tw = 34;
				const liquidTop = tubeBot - 70;
				const foamTop = liquidTop - foam * 100;
				const nb = Math.round(t.rate * 7);
				return (
					<g key={i} opacity={op}>
						{/* water bath */}
						<rect x={cx - 62} y={benchY - 76} width={124} height={76} rx={12} fill={water} stroke="#9aa9b3" strokeWidth={2.5} opacity={0.85} />
						<rect x={cx - 62} y={benchY - 76} width={124} height={10} rx={5} fill="#ffffff" opacity={0.4} />
						{/* tube */}
						<rect x={cx - tw / 2} y={tubeTop} width={tw} height={tubeBot - tubeTop} rx={tw / 2} fill="#ffffff" fillOpacity={0.55} stroke="#8a96a0" strokeWidth={2.5} />
						<rect x={cx - tw / 2 + 3} y={liquidTop} width={tw - 6} height={tubeBot - liquidTop - 3} rx={(tw - 6) / 2} fill="#d9eef7" />
						{/* foam column */}
						{foam > 0.01 && <rect x={cx - tw / 2 + 3} y={foamTop} width={tw - 6} height={liquidTop - foamTop + 4} rx={8} fill="#ffffff" stroke="#c9d3da" strokeWidth={1.5} />}
						{/* rising bubbles */}
						{run > 0 && Array.from({length: nb}, (_, k) => {
							const period = 50 + hash01(i * 13 + k) * 30;
							const ph = ((run + hash01(k * 7 + i) * period) % period) / period;
							const bx = cx - 8 + hash01(k * 3 + i * 5) * 16;
							const by = tubeBot - 8 - ph * (tubeBot - 8 - Math.max(foamTop, tubeTop + 10));
							return <circle key={k} cx={bx} cy={by} r={3 + hash01(k + i) * 2.5} fill="#ffffff" stroke="#8fb3c9" strokeWidth={1.2} opacity={1 - ph * 0.4} />;
						})}
						{/* labels */}
						<text x={cx} y={benchY + 44} textAnchor="middle" fill={t.amber ? TOK.amberInk : TOK.ink} fontSize={18} fontWeight={800}>{t.label}</text>
						{t.sub && <text x={cx} y={benchY + 64} textAnchor="middle" fill={t.amber ? TOK.amberInk : TOK.inkDim} fontSize={15} fontWeight={800} opacity={fadeAt(frame, t.subAt ?? t.at + 40)}>{t.sub}</text>}
						{/* repeat trials */}
						{trialsAt !== undefined && (() => {
							const vals = OFFSETS.map((o) => Math.max(0, t.rate + (t.rate > 0 ? o * t.rate * 2 : 0)));
							const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
							const bw = 12, base = top - 4, hmax = 70;
							return (
								<g opacity={fadeAt(frame, trialsAt + i * 10)}>
									{vals.map((v, k) => (
										<rect key={k} x={cx - 24 + k * 17} y={base - v * hmax} width={bw} height={Math.max(2, v * hmax)} rx={3} fill={theme.accent} opacity={0.75} />
									))}
									<line x1={cx - 30} y1={base - mean * hmax} x2={cx + 30} y2={base - mean * hmax} stroke={TOK.amber} strokeWidth={3} opacity={0.8 + 0.2 * pulse} />
									<line x1={cx - 30} y1={base} x2={cx + 30} y2={base} stroke={TOK.inkMute} strokeWidth={1.5} />
								</g>
							);
						})()}
					</g>
				);
			})}
			{trialsAt !== undefined && (
				<g opacity={fadeAt(frame, trialsAt)}>
					<text x={40} y={top - 84} fill={theme.accent} fontSize={15} fontWeight={800}>3 trials each</text>
					<text x={W - 40} y={top - 84} textAnchor="end" fill={TOK.amberInk} fontSize={15} fontWeight={800}>— mean</text>
				</g>
			)}
			{chips.map((c, i) => (
				<g key={i} opacity={fadeAt(frame, c.at)}>
					<rect x={40} y={benchY + 82 + i * 40} width={680} height={34} rx={10} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
					<rect x={40} y={benchY + 82 + i * 40} width={60} height={34} rx={10} fill={i === 0 ? theme.accent : i === 1 ? CORAL : '#8f8b83'} />
					<text x={70} y={benchY + 105 + i * 40} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800}>{c.tag}</text>
					<text x={112} y={benchY + 105 + i * 40} fill={TOK.ink} fontSize={16} fontWeight={800}>{c.text}</text>
				</g>
			))}
			{rule && <text x={W / 2} y={H - 10} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, rule.at) * (0.82 + 0.18 * pulse)}>{rule.text}</text>}
		</svg>
	);
};
