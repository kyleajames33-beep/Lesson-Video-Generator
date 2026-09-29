// DilutionDiagram (bio12m7Dilution) — serial dilution and plate count.
//
// A sample tube and a row of dilution tubes. 1 mL moves into 9 mL of sterile
// water at each step, so each tube is one tenth as concentrated as the one
// before (1 in 10, 1 in 100, 1 in 1000; the tube tint fades accordingly).
// Each dilution is spread on a plate beneath it. Colony counts are computed:
// the last plate carries `countable` colonies and each earlier plate ten times
// as many, so one plate is a confluent smear, one is too many to count (over
// 300) and one falls in the 30–300 window and is counted. Plates flip to
// incubate upside down. Nothing on screen is a made-up measurement: the
// colony dots are a picture of the ×10 steps, not a result.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Arrow, GLOSS, GlossDefs, H, Lines, Mark, PAL, Title, W, bioBeats, clamp, fadeAt, popAt, wrap} from './shared';
import {Icon} from './icons';

type Beats = {collect: number; dilute: number; t1: number; t2: number; t3: number; confluent: number; window: number; plate: number; invert: number; count: number};
export type DilutionProps = {
	title?: string;
	countable?: number;
	labels?: {sample?: string; water?: string; confluent?: string; tooMany?: string; window?: string; invert?: string; count?: string};
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7dil';
const ease = Easing.inOut(Easing.cubic);

export const DilutionDiagram = ({title, countable = 45, labels = {}, beats, delay = 62}: DilutionProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = bioBeats<Beats>({collect: 20, dilute: 200, t1: 300, t2: 400, t3: 440, confluent: 560, window: 700, plate: 760, invert: 900, count: 1000}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	const xs = [100, 270, 440, 610];
	const tubeTop = top + 40;
	const tubeH = 130;
	const tAt = [b.collect, b.t1, b.t2, b.t3];
	const conc = [1, 0.1, 0.01, 0.001];
	const plateY = top + 350;
	// colonies per plate under dilution i (i = 1..3): countable × 10^(3 - i)
	const colonies = (i: number) => countable * 10 ** (3 - i);

	const tube = (i: number) => {
		const x = xs[i];
		const on = i === 0 ? fadeAt(frame, b.collect) : fadeAt(frame, b.dilute - 20 + i * 8);
		const filled = i === 0 ? 1 : interpolate(frame, [tAt[i], tAt[i] + 20], [0, 1], clamp);
		// tint: log-scaled so 1/10, 1/100, 1/1000 are visibly different steps
		const tint = i === 0 ? 1 : filled * (1 + Math.log10(conc[i]) / 4);
		return (
			<g key={i} opacity={on}>
				<rect x={x - 22} y={tubeTop} width={44} height={tubeH} rx={20} fill="#eef7fb" stroke="#8aa6b4" strokeWidth={2} />
				<rect x={x - 19} y={tubeTop + 50} width={38} height={tubeH - 53} rx={17} fill="#dcecf5" />
				<rect x={x - 19} y={tubeTop + 50} width={38} height={tubeH - 53} rx={17} fill={PAL.bacterium} opacity={0.12 + 0.6 * tint} />
				<ellipse cx={x - 8} cy={tubeTop + 70} rx={4} ry={22} fill="#ffffff" opacity={0.5} />
				<rect x={x - 25} y={tubeTop - 8} width={50} height={12} rx={4} fill="#b9c6ce" />
				<text x={x} y={tubeTop + tubeH + 24} textAnchor="middle" fill={i === 0 ? TOK.ink : theme.accent} fontSize={18} fontWeight={800}>
					{i === 0 ? labels.sample ?? 'sample' : `1 in ${10 ** i}`}
				</text>
			</g>
		);
	};

	const transfer = (i: number) => {
		// 1 mL moves from tube i-1 to tube i
		const at = tAt[i];
		const t = interpolate(frame, [at - 30, at], [0, 1], {...clamp, easing: ease});
		if (t <= 0) return null;
		const x1 = xs[i - 1] + 18;
		const x2 = xs[i] - 18;
		const y = tubeTop - 18;
		return (
			<g key={i}>
				<path d={`M ${x1} ${y} Q ${(x1 + x2) / 2} ${y - 46} ${x1 + (x2 - x1) * t} ${y - 4 * (1 - t)}`} fill="none" stroke={TOK.inkMute} strokeWidth={2.5} strokeDasharray="5 5" />
				{t >= 1 && <Arrow x1={x2 - 10} y1={y - 10} x2={x2} y2={y} color={TOK.inkMute} width={2.5} head={9} />}
				<text x={(x1 + x2) / 2} y={y - 32} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>1 mL</text>
			</g>
		);
	};

	const invert = interpolate(frame, [b.invert, b.invert + 30], [0, 1], {...clamp, easing: ease});
	const countOn = frame >= b.count;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Serial dilution and plate count'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{[0, 1, 2, 3].map(tube)}
			{[1, 2, 3].map(transfer)}
			<g opacity={fadeAt(frame, b.dilute)}>
				<text x={(xs[1] + xs[3]) / 2} y={tubeTop + tubeH + 48} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800}>{labels.water ?? 'each tube: 9 mL sterile water'}</text>
			</g>
			{/* plates */}
			{[1, 2, 3].map((i) => {
				const n = colonies(i);
				const lawn = n > 3000;
				const at = i === 3 ? b.window : b.confluent + (i - 1) * 30;
				const p = popAt(frame, fps, at);
				if (p <= 0) return null;
				const flip = 1 - 2 * invert;
				const isCount = i === 3;
				const verdict = lawn ? labels.confluent ?? 'confluent smear' : n > 300 ? labels.tooMany ?? 'too many to count' : labels.window ?? '30 to 300: count';
				return (
					<g key={i} opacity={Math.min(1, p * 1.4)}>
						<DioramaPlinth id={`${ID}${i}`} cx={xs[i]} cy={plateY + 26} rx={80} />
						{isCount && countOn && <ellipse cx={xs[i]} cy={plateY} rx={80 + pulse * 3} ry={32 + pulse} fill="none" stroke={TOK.amber} strokeWidth={3} />}
						<g transform={`translate(${xs[i]},${plateY + idleBob(frame, i, 0.8)}) scale(1.75, ${1.75 * (Math.abs(flip) < 0.05 ? 0.05 : flip)})`}>
							<Icon id={ID} name="dish" x={0} y={0} s={1} frame={frame} opts={{colonies: Math.min(n, 600), lawn}} />
						</g>
						<Lines x={xs[i]} y={plateY + 100} lines={wrap(verdict, 18)} size={16} color={isCount ? TOK.amberInk : TOK.inkDim} />
						{isCount && <Mark x={xs[i] + 64} y={plateY - 28} ok r={12} opacity={fadeAt(frame, b.window + 10)} />}
					</g>
				);
			})}
			{/* invert note */}
			<g opacity={fadeAt(frame, b.invert)}>
				<text x={xs[0]} y={plateY - 10} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{'incubate'}</text>
				<text x={xs[0]} y={plateY + 10} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>{'upside down'}</text>
				<Lines x={xs[0]} y={plateY + 34} lines={wrap(labels.invert ?? 'so condensation can’t drip', 16)} size={15} color={TOK.inkMute} weight={700} />
			</g>
		</svg>
	);
};
