// KspDissolveDiagram (kind: chem12m5KspDissolve) — a saturated solution and
// its Ksp algebra, config-driven.
//
// Left: a beaker on a stone plinth with a crystal of the salt on its floor.
// Ions keep leaving the crystal and rejoining it (dynamic equilibrium), in the
// salt's own ratio (1 : 1, or 1 : 2 for CaF₂, so twice as many anions swim).
// The salt can change on a beat (stages). Right: equation lines that appear
// (and can leave) on their beats, with optional amber / accent boxes, a red
// strike for a common error, and ✓ / ✗ marks. Markup in line text:
// `_{sp}` subscript, `^{2}` power, `*{..}` amber, `!{..}` red.
//
// Beats are frames after `delay`.

import {useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaPlinth, idlePulse} from '../../diorama';
import {Beaker, bounce, eramp, hash01, ramp} from './shared';
import {CBall, ColorBallDefs, P, RED, Rich, Strike, partsW} from './kbKit';

export type KspIon = {label: string; color: string; ink?: string; r?: number};
export type KspStage = {at: number; name: string; cation: KspIon; anion: KspIon; ratio: number; caption?: string};
export type KspLine = {
	at: number;
	out?: number;
	y: number;
	t: string;
	x?: number;
	size?: number;
	anchor?: 'start' | 'middle' | 'end';
	color?: string;
	box?: 'amber' | 'accent';
	strikeAt?: number;
	mark?: '✓' | '✗';
	weight?: number;
};
export type KspDissolveProps = {
	delay?: number;
	stages?: KspStage[];
	lines?: KspLine[];
	/** Centre x of the right-hand text column. */
	colX?: number;
};

const W = 760;
const BCX = 178, BASE = 390, BW = 250, BH = 290;
const FLOOR = BASE - 16;

const GENERIC: KspStage = {
	at: 0,
	name: 'MX(s)',
	cation: {label: '+', color: '#2f9e8f'},
	anion: {label: '−', color: '#8a5cc9'},
	ratio: 1,
	caption: 'MX(s) ⇌ M⁺ + X⁻',
};

export const KspDissolveDiagram = ({
	delay = 62,
	stages = [GENERIC],
	lines = [],
	colX = 552,
}: KspDissolveProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const pulse = idlePulse(frame);

	const colors: Record<string, string> = {};
	stages.forEach((s, k) => {
		colors[`c${k}`] = s.cation.color;
		colors[`a${k}`] = s.anion.color;
	});

	const liquidTop = BASE - BH * 0.8;
	const X0 = BCX - BW / 2 + 22, X1 = BCX + BW / 2 - 22;
	const Y0 = liquidTop + 22, Y1 = FLOOR - 70;

	const drawStage = (st: KspStage, k: number, op: number) => {
		if (op <= 0) return null;
		const nC = 3, nA = 3 * st.ratio;
		const rC = st.cation.r ?? 12, rA = st.anion.r ?? 14;
		// crystal: 2 rows, pattern follows the ratio
		const cols = 7;
		const pattern = (i: number) => (st.ratio === 1 ? i % 2 === 0 : i % 3 === 0);
		const crystal: {x: number; y: number; cat: boolean}[] = [];
		for (let row = 0; row < 2; row++)
			for (let c = 0; c < cols; c++) crystal.push({x: BCX - 72 + c * 24 + (row ? 12 : 0), y: FLOOR - 12 - row * 20, cat: pattern(c + row)});
		const topY = FLOOR - 12 - 2 * 20;
		const ions = [
			...Array.from({length: nC}, (_, i) => ({cat: true, i})),
			...Array.from({length: nA}, (_, i) => ({cat: false, i})),
		];
		const drawn = ions.map((ion, j) => {
			const seed = j * 13 + k * 101 + 7;
			const P0 = 250 + Math.floor(hash01(seed) * 140);
			const t = (frame + hash01(seed + 1) * P0 + P0 * 4) % P0;
			const u = t < 34 ? eramp(t, 0, 34) : t > P0 - 34 ? 1 - eramp(t, P0 - 34, 34) : 1;
			const sx = X0 + bounce(hash01(seed + 2), (0.0022 + hash01(seed + 3) * 0.002) * (hash01(seed + 4) > 0.5 ? 1 : -1), frame, 0, 1) * (X1 - X0);
			const sy = Y0 + bounce(hash01(seed + 5), (0.0018 + hash01(seed + 6) * 0.0016) * (hash01(seed + 8) > 0.5 ? 1 : -1), frame, 0, 1) * (Y1 - Y0);
			const dx = BCX - 60 + ((j * 37) % 120);
			const dy = topY;
			return {x: dx + (sx - dx) * u, y: dy + (sy - dy) * u, cat: ion.cat, j};
		});
		const ball = (d: {x: number; y: number; cat: boolean}, key: string) => {
			const ion = d.cat ? st.cation : st.anion;
			return <CBall key={key} id="c12m5ksp" name={`${d.cat ? 'c' : 'a'}${k}`} color={ion.color} x={d.x} y={d.y} r={d.cat ? rC : rA} label={ion.label} labelColor={ion.ink ?? '#ffffff'} labelSize={d.cat ? rC * 1.05 : rA * 1.2} />;
		};
		return (
			<g opacity={op}>
				{crystal.map((c, i) => ball(c, `x${i}`))}
				{drawn.sort((a, b) => a.y - b.y).map((d) => ball(d, `i${d.j}`))}
			</g>
		);
	};

	// active stage & crossfade
	let cur = 0;
	stages.forEach((s, k) => {
		if (frame >= s.at) cur = k;
	});

	return (
		<svg viewBox={`0 0 ${W} 530`} role="img" aria-label={`A saturated solution: ions leave and rejoin the crystal; ${lines.map((l) => l.t.replace(/[_^*!]\{([^}]*)\}/g, '$1')).join('; ')}`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<ColorBallDefs id="c12m5ksp" colors={colors} />

			{/* Beaker on its plinth */}
			<g opacity={ramp(frame, 0, 14)}>
				<DioramaPlinth id="c12m5ksp" cx={BCX} cy={BASE + 6} rx={150}>
					<Beaker cx={BCX} baseY={BASE} w={BW} h={BH} level={0.8}>
						{stages.map((st, k) => {
							const inO = k === 0 ? 1 : ramp(frame, st.at, 20);
							const outO = k + 1 < stages.length ? 1 - ramp(frame, stages[k + 1].at, 20) : 1;
							return <g key={k}>{drawStage(st, k, Math.min(inO, outO))}</g>;
						})}
					</Beaker>
				</DioramaPlinth>
				<text x={BCX} y={BASE - BH - 38} textAnchor="middle" fill={TOK.inkDim} fontSize={18} fontWeight={800} letterSpacing="0.06em">SATURATED SOLUTION</text>
				<text x={BCX} y={BASE - BH - 14} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={700}>ions leave and rejoin the crystal</text>
				{stages.map((st, k) => {
					const o = (k === 0 ? 1 : ramp(frame, st.at, 16)) * (k + 1 < stages.length ? 1 - ramp(frame, stages[k + 1].at - 12, 12) : 1);
					return (
						<g key={k} opacity={o}>
							<Rich x={BCX} y={500} size={22} parts={P(st.name)} />
							{st.caption && <Rich x={BCX} y={524} size={18} parts={P(st.caption, TOK.inkDim)} />}
						</g>
					);
				})}
			</g>

			{/* Right-hand lines */}
			{lines.map((l, i) => {
				const size = l.size ?? 26;
				const inO = ramp(frame, l.at, 14);
				const outO = l.out !== undefined ? 1 - ramp(frame, l.out, 14) : 1;
				const o = Math.min(inO, outO);
				if (o <= 0) return null;
				const parts = P(l.t, l.color);
				const w = partsW(parts, size);
				const anchor = l.anchor ?? 'middle';
				const x = l.x ?? colX;
				const left = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x;
				const slide = (1 - eramp(frame, l.at, 14)) * 10;
				return (
					<g key={i} opacity={o} transform={`translate(0 ${slide})`}>
						{l.box && (
							<rect x={left - 14} y={l.y - size * 0.95} width={w + 28} height={size * 1.45} rx={12}
								fill={l.box === 'amber' ? '#fff7e8' : theme.soft}
								stroke={l.box === 'amber' ? TOK.amber : theme.accent}
								strokeWidth={2 + (l.box === 'amber' ? pulse * 1.4 : 0)} />
						)}
						<Rich x={x} y={l.y} size={size} parts={parts} anchor={anchor} weight={l.weight ?? 800} />
						{l.mark && (
							<text x={left + w + (l.box ? 24 : 12)} y={l.y} fill={l.mark === '✓' ? theme.accent : RED} fontSize={size} fontWeight={900}>{l.mark}</text>
						)}
						{l.strikeAt !== undefined && <Strike x1={left} x2={left + w} y={l.y - size * 0.32} p={eramp(frame, l.strikeAt, 16)} />}
					</g>
				);
			})}
		</svg>
	);
};

