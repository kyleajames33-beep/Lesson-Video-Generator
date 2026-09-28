// MembraneDiagram (bio12m7Membrane) — an oily antimicrobial makes a microbe's
// membrane leak.
//
// A close-up of a microbe's cell membrane (a phospholipid bilayer: glossy
// heads, wavy tails) lies across a stone slab, cell contents and ions below.
// Oil molecules arrive, dissolve into the bilayer and push the lipids apart;
// gaps open, ions and contents leak out, and the cell's interior dims (it
// dies). Because the target is the membrane rather than one enzyme, chips
// show the range of microbes it acts on. All text from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, PAL, Title, W, bioBeats, clamp, fadeAt, popAt, textWidth, wrap} from './shared';
import {Icon, type IconName} from './icons';

type Beats = {source: number; oil: number; insert: number; leak: number; die: number};
export type MembraneProps = {
	title?: string;
	labels?: {source?: string; oil?: string; insert?: string; leak?: string; die?: string; outside?: string; inside?: string};
	range?: {text: string; icon?: IconName; at: number}[];
	footer?: {text: string; at: number; amber?: boolean}[];
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7mem';
const ease = Easing.inOut(Easing.cubic);
const OIL = '#c9c23a';

export const MembraneDiagram = ({title, labels = {}, range = [], footer = [], beats, delay = 62}: MembraneProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = bioBeats<Beats>({source: 10, oil: 100, insert: 200, leak: 320, die: 450}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;
	const mY = top + 170; // membrane centre line
	const N = 26;
	const x0 = 30;
	const dx = (W - 60) / (N - 1);
	const insert = interpolate(frame, [b.insert, b.insert + 70], [0, 1], {...clamp, easing: ease});
	const die = interpolate(frame, [b.die, b.die + 80], [0, 1], clamp);
	const gaps = [6, 13, 19];
	// lipids near a gap are pushed aside as the oil goes in
	const shift = (i: number) => {
		let s = 0;
		for (const g of gaps) {
			const d = i - g;
			if (d === 0) continue;
			if (Math.abs(d) <= 2) s += Math.sign(d) * (3 - Math.abs(d)) * 8 * insert;
		}
		return s;
	};
	const wave = (i: number) => Math.sin(i * 0.5 + frame / 30) * 2;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'An oil makes the membrane leak'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{...GLOSS, oil: OIL, head: '#e7a36a', ion: '#7a5fd0'}} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{/* inside of the cell */}
			<rect x={20} y={mY + 26} width={W - 40} height={170} rx={14} fill={PAL.cell} opacity={0.55 * (1 - 0.6 * die)} />
			<text x={40} y={mY + 190} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{labels.inside ?? 'inside the microbe'}</text>
			<text x={40} y={mY - 60} fill={TOK.inkDim} fontSize={15} fontWeight={800}>{labels.outside ?? 'outside'}</text>
			{/* stone slab under the section */}
			<rect x={14} y={mY + 196} width={W - 28} height={16} rx={5} fill="#c9c5bd" />
			{/* ions inside, leaking out through the gaps */}
			{Array.from({length: 18}, (_, k) => {
				const g = gaps[k % gaps.length];
				const home = {x: x0 + ((k * 97) % (W - 80)) + 10, y: mY + 60 + ((k * 37) % 110)};
				const leaks = k % 2 === 0;
				const t = leaks ? interpolate(frame, [b.leak + k * 10, b.leak + k * 10 + 90], [0, 1], {...clamp, easing: ease}) : 0;
				const gx = x0 + g * dx;
				const x = t < 0.5 ? home.x + (gx - home.x) * t * 2 : gx + (k % 3 - 1) * 30 * (t - 0.5) * 2;
				const y = t < 0.5 ? home.y + (mY - home.y) * t * 2 : mY - 90 * (t - 0.5) * 2;
				return (
					<g key={k} opacity={1 - 0.3 * die * (leaks ? 0 : 1)}>
						<circle cx={x + idleBob(frame, k, 1.5)} cy={y} r={9} fill={`url(#${ID}-ball-ion)`} />
						<text x={x + idleBob(frame, k, 1.5)} y={y + 5} textAnchor="middle" fill="#fff" fontSize={15} fontWeight={800}>+</text>
					</g>
				);
			})}
			{/* bilayer */}
			{Array.from({length: N}, (_, i) => {
				const x = x0 + i * dx + shift(i);
				return (
					<g key={i}>
						{[-1, 1].map((side) => (
							<g key={side}>
								<path d={`M ${x - 3} ${mY + side * 8} q -3 ${side * 5} 0 ${side * 10} M ${x + 3} ${mY + side * 8} q 3 ${side * 5} 0 ${side * 10}`} stroke="#b08a5a" strokeWidth={2} fill="none" transform={`translate(0, ${side > 0 ? -18 : 18})`} />
								<circle cx={x} cy={mY + side * 24 + wave(i) * side} r={8} fill={`url(#${ID}-ball-head)`} />
							</g>
						))}
					</g>
				);
			})}
			{/* oil molecules arriving and dissolving into the bilayer */}
			{frame >= b.oil &&
				gaps.map((g, k) =>
					[0, 1].map((q) => {
						const t = interpolate(frame, [b.oil + k * 16 + q * 10, b.insert + 40 + k * 10], [0, 1], {...clamp, easing: ease});
						const gx = x0 + g * dx + (q ? 6 : -6);
						return <ellipse key={`${k}${q}`} cx={gx + (1 - t) * (q ? 30 : -20)} cy={mY - 110 + (110 - 4 + q * 8) * t} rx={12} ry={6.5} fill={`url(#${ID}-ball-oil)`} transform={`rotate(${60 + q * 40} ${gx} ${mY})`} />;
					}),
				)}
			{/* source */}
			<g opacity={fadeAt(frame, b.source) * (1 - fadeAt(frame, b.insert, 20))}>
				<Icon id={ID} name="plant" x={120} y={top + 50} s={0.6} frame={frame} />
				<Lines x={160} y={top + 44} lines={wrap(labels.source ?? 'tea tree leaves, distilled', 30)} size={17} color={TOK.ink} anchor="start" />
			</g>
			<g opacity={fadeAt(frame, b.oil)}>
				<ellipse cx={W - 230} cy={top + 42} rx={9} ry={5} fill={`url(#${ID}-ball-oil)`} />
				<text x={W - 214} y={top + 48} fill={TOK.ink} fontSize={17} fontWeight={800}>{labels.oil ?? 'terpinen-4-ol'}</text>
			</g>
			{/* step captions */}
			{[
				{t: labels.insert ?? 'dissolves into the membrane', at: b.insert},
				{t: labels.leak ?? 'membrane leaks: ions and contents spill out', at: b.leak},
				{t: labels.die ?? 'respiration disrupted: the cell dies', at: b.die},
			].map((c, i, arr) => {
				const on = fadeAt(frame, c.at, 10) * (i < arr.length - 1 ? 1 - fadeAt(frame, arr[i + 1].at, 10) : 1);
				return <text key={i} x={W / 2} y={top + 92} textAnchor="middle" fill={i === 2 ? TOK.amberInk : theme.accent} fontSize={19} fontWeight={800} opacity={on}>{c.t}</text>;
			})}
			{/* range of microbes */}
			{range.map((r, i) => {
				const p = popAt(frame, fps, r.at);
				if (p <= 0) return null;
				const w = textWidth(r.text, 16) + 26 + (r.icon ? 34 : 0);
				const x = 70 + i * 330;
				const y = mY + 250;
				return (
					<g key={i} transform={`translate(${x + w / 2},${y}) scale(${Math.min(1, p)})`}>
						<rect x={-w / 2} y={-18} width={w} height={36} rx={18} fill="#ffffff" stroke={theme.accent} strokeWidth={2} />
						{r.icon && <Icon id={ID} name={r.icon} x={-w / 2 + 22} y={0} s={0.34} frame={frame} />}
						<text x={r.icon ? 17 : 0} y={6} textAnchor="middle" fill={theme.accent} fontSize={16} fontWeight={800}>{r.text}</text>
					</g>
				);
			})}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 10 - (footer.length - 1 - i) * 25} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
			{die > 0 && <rect x={20} y={mY + 26} width={W - 40} height={170} rx={14} fill="none" stroke={TOK.amber} strokeWidth={2 + pulse} opacity={0.4 * die} />}
		</svg>
	);
};
