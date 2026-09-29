// CubesDiagram (bio11m2Cubes) — surface-area-to-volume ratio with model cubes
// on stone plinths. Every number is computed from `sides`.
//
// calc     Cubes stand side by side; under each, SA = 6 × L², V = L³ and
//          SA:V = 6/L build row by row on their beats. The highest ratio is the
//          amber answer.
// diffuse  Each cube is shown cut in half. Acid advances the same depth into
//          every cube from all faces (the colour-changed rim grows inward); the
//          small cube is changed right through while the big one keeps an
//          unchanged core. Distance to centre (L / 2) is labelled.
// grow     One cube grows from `from` to `to`; live read-outs of SA, V and SA:V
//          fall/rise as computed, and a marker at the centre shifts from
//          "supplied" to "starved" as the ratio falls. Chips list the ways
//          organisms keep SA:V high.
// Hold: cubes bob gently; the amber highlight breathes.

import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {H, Lines, Notes, Tag, Title, W, clamp, fadeAt, mix, textWidth, type Note, type Tone} from './shared';

type Beats = {cubes: number; sa: number; v: number; ratio: number; verdict: number; start: number; end: number};
export type CubesProps = {
	mode?: 'calc' | 'diffuse' | 'grow';
	title?: string;
	sides?: number[];
	unit?: string;
	/** diffuse: depth (in units) the acid reaches by `end`. */
	depth?: number;
	/** grow: side length range. */
	from?: number;
	to?: number;
	beats?: Partial<Beats>;
	verdict?: string;
	chips?: {text: string; at: number; tone?: Tone}[];
	notes?: Note[];
	delay?: number;
};

const ID = 'b11m2cube';
const AGAR = '#d86aa6';
const CHANGED = '#f4e3a1';

const fmt = (n: number) => (Math.abs(n - Math.round(n)) < 1e-9 ? String(Math.round(n)) : n.toFixed(n < 10 ? 1 : 0));
const sup = (n: number) => (n === 2 ? '²' : '³');

/** An isometric-ish cube whose front face is (x - s/2 .. x + s/2) × (baseY - s .. baseY). */
const Cube = ({x, baseY, s, face, top, side, stroke = '#8a4a6c'}: {x: number; baseY: number; s: number; face: string; top: string; side: string; stroke?: string}) => {
	const d = s * 0.38;
	const l = x - s / 2 - d * 0.35;
	const f = baseY - s;
	return (
		<g>
			<path d={`M ${l} ${f} L ${l + d} ${f - d * 0.7} L ${l + s + d} ${f - d * 0.7} L ${l + s} ${f} Z`} fill={top} stroke={stroke} strokeWidth={1.5} />
			<path d={`M ${l + s} ${f} L ${l + s + d} ${f - d * 0.7} L ${l + s + d} ${baseY - d * 0.7} L ${l + s} ${baseY} Z`} fill={side} stroke={stroke} strokeWidth={1.5} />
			<rect x={l} y={f} width={s} height={s} fill={face} stroke={stroke} strokeWidth={1.5} />
		</g>
	);
};

export const CubesDiagram = ({
	mode = 'calc', title, sides = [1, 3], unit = 'cm', depth = 0.5, from = 1, to = 3, beats, verdict, chips = [], notes = [], delay = 62,
}: CubesProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b: Beats = {cubes: 0, sa: 60, v: 120, ratio: 180, verdict: 260, start: 40, end: 300, ...(beats ?? {})};
	const top = title ? 52 : 14;
	const footH = notes.length * 25;

	if (mode === 'grow') {
		const L = interpolate(frame, [b.start, b.end], [from, to], clamp);
		const sa = 6 * L * L;
		const v = L * L * L;
		const r = 6 / L;
		const tBad = (to === from) ? 0 : (L - from) / (to - from);
		const u = 150 / to;
		const cx = 190;
		const baseY = 330;
		const s = L * u;
		const core = mix('#3fa35a', '#c8433a', tBad);
		const pulse = idlePulse(frame);
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'A growing cube'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				<DioramaPlinth id={`${ID}g`} cx={cx} cy={baseY + 6} rx={150}>
					<g transform={`translate(0, ${idleBob(frame, 1, 1.2)})`}>
						<Cube x={cx} baseY={baseY} s={s} face={AGAR} top="#e79ac2" side="#b94e8a" />
						<circle cx={cx - s * 0.12} cy={baseY - s / 2} r={7 + 2 * pulse} fill={core} stroke="#fff" strokeWidth={2} opacity={fadeAt(frame, b.start)} />
					</g>
				</DioramaPlinth>
				<g opacity={fadeAt(frame, b.start)}>
					<Lines x={cx} y={baseY + 104} lines={tBad < 0.5 ? ['centre: supplied'] : ['centre: starved of O₂,', 'clogged with waste']} size={20} color={core} />
				</g>
				<g opacity={fadeAt(frame, b.start - 20)}>
					{[
						[`side L = ${L.toFixed(1)} ${unit}`, TOK.ink],
						[`SA = 6L² = ${sa.toFixed(1)} ${unit}²`, TOK.inkDim],
						[`V = L³ = ${v.toFixed(1)} ${unit}³`, TOK.inkDim],
					].map(([t, c], i) => (
						<text key={i} x={400} y={top + 56 + i * 38} fill={c} fontSize={24} fontWeight={800}>{t}</text>
					))}
					<text x={400} y={top + 180} fill={TOK.amberInk} fontSize={30} fontWeight={800}>{`SA:V = 6/L = ${r.toFixed(1)} : 1`}</text>
				</g>
				{chips.map((c, i) => (
					<Tag key={i} frame={frame} fps={fps} at={c.at} x={400 + (textWidth(c.text, 19) + 22) / 2} y={top + 236 + i * 44} text={c.text} tone={c.tone} accent={theme.accent} size={19} />
				))}
				<Notes frame={frame} notes={notes} />
			</svg>
		);
	}

	const n = sides.length;
	const colW = W / n;
	const maxS = Math.max(...sides);
	const u = Math.min(160 / maxS, (colW * 0.6) / maxS);
	const baseY = top + 40 + maxS * u * 1.3;
	const rxOf = (L: number) => Math.min(colW / 2 - 12, L * u * 0.75 + 34);
	const maxRx = Math.max(...sides.map(rxOf));
	const rowTop = baseY + 4 + maxRx * 0.54 + 34;
	const best = sides.indexOf(Math.min(...sides));

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Surface area to volume'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{sides.map((L, i) => {
				const cx = colW * (i + 0.5);
				const s = L * u;
				const on = fadeAt(frame, b.cubes + i * 12, 16);
				const bob = idleBob(frame, i, 1.2);
				const sa = 6 * L * L;
				const v = L ** 3;
				const r = sa / v;
				const isBest = i === best;
				// diffuse: depth reached so far, as a fraction of half-side
				const dNow = interpolate(frame, [b.start, b.end], [0, depth], clamp);
				const inner = Math.max(0, L - 2 * dNow);
				const full = inner <= 1e-6;
				const rowY = rowTop;
				return (
					<g key={i} opacity={on}>
						<DioramaPlinth id={`${ID}${i}`} cx={cx} cy={baseY + 4} rx={rxOf(L)}>
							<g transform={`translate(0, ${bob})`}>
								{mode === 'calc' ? (
									<Cube x={cx} baseY={baseY} s={s} face={AGAR} top="#e79ac2" side="#b94e8a" />
								) : (
									<g>
										<rect x={cx - s / 2} y={baseY - s} width={s} height={s} fill={CHANGED} stroke="#8a4a6c" strokeWidth={1.5} />
										{inner > 0 && <rect x={cx - (inner * u) / 2} y={baseY - s / 2 - (inner * u) / 2} width={inner * u} height={inner * u} fill={AGAR} />}
										<line x1={cx} y1={baseY - s / 2} x2={cx + s / 2} y2={baseY - s / 2} stroke={TOK.ink} strokeWidth={2} strokeDasharray="4 3" opacity={fadeAt(frame, b.sa)} />
										<circle cx={cx} cy={baseY - s / 2} r={3.5} fill={TOK.ink} opacity={fadeAt(frame, b.sa)} />
									</g>
								)}
							</g>
						</DioramaPlinth>
						<text x={cx} y={rowY - 6} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{`L = ${fmt(L)} ${unit}`}</text>
						{mode === 'calc' ? (
							<g>
								<text x={cx} y={rowY + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={800} opacity={fadeAt(frame, b.sa + i * 8)}>{`SA = 6 × ${fmt(L)}² = ${fmt(sa)} ${unit}²`}</text>
								<text x={cx} y={rowY + 56} textAnchor="middle" fill={TOK.inkDim} fontSize={22} fontWeight={800} opacity={fadeAt(frame, b.v + i * 8)}>{`V = ${fmt(L)}${sup(3)} = ${fmt(v)} ${unit}³`}</text>
								<g opacity={fadeAt(frame, b.ratio + i * 10)}>
									{isBest && <rect x={cx - 90} y={rowY + 68} width={180} height={42} rx={21} fill={TOK.amber} opacity={0.12 + 0.12 * idlePulse(frame)} />}
									<text x={cx} y={rowY + 97} textAnchor="middle" fill={isBest ? TOK.amberInk : theme.accent} fontSize={30} fontWeight={800}>{`SA:V = ${fmt(r)} : 1`}</text>
								</g>
							</g>
						) : (
							<g>
								<text x={cx} y={rowY + 26} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={800} opacity={fadeAt(frame, b.sa)}>{`to centre: ${fmt(L / 2)} ${unit}`}</text>
								<text x={cx} y={rowY + 54} textAnchor="middle" fill={TOK.inkDim} fontSize={21} fontWeight={800} opacity={fadeAt(frame, b.ratio)}>{`SA:V = ${fmt(r)} : 1`}</text>
								<text x={cx} y={rowY + 86} textAnchor="middle" fill={full ? TOK.amberInk : '#b94e8a'} fontSize={20} fontWeight={800} opacity={fadeAt(frame, b.verdict + i * 10)}>
									{full ? 'changed right through' : 'unchanged core'}
								</text>
							</g>
						)}
					</g>
				);
			})}
			{mode === 'diffuse' && (
				<g opacity={fadeAt(frame, b.start)}>
					<rect x={W / 2 - 170} y={top - 4} width={16} height={16} fill={CHANGED} stroke="#8a4a6c" />
					<text x={W / 2 - 148} y={top + 9} fill={TOK.inkDim} fontSize={18} fontWeight={800}>acid reached</text>
					<rect x={W / 2 + 20} y={top - 4} width={16} height={16} fill={AGAR} stroke="#8a4a6c" />
					<text x={W / 2 + 42} y={top + 9} fill={TOK.inkDim} fontSize={18} fontWeight={800}>not yet reached</text>
				</g>
			)}
			{verdict && (
				<text x={W / 2} y={H - 14 - footH} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800} opacity={fadeAt(frame, b.verdict + 20)}>{verdict}</text>
			)}
			<Notes frame={frame} notes={notes} />
		</svg>
	);
};

