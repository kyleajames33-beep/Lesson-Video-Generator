// CamouflageDiagram (bio11m3aCamouflage) — natural selection by predation,
// generation by generation.
//
// A habitat board (soot-darkened bark, pale lichen bark, or patterned green
// fabric for the classroom model) stands on a stone plinth, with prey on it in
// two heritable colours: one camouflaged, one easy to see. Each generation's
// counts come from props. Between generations a predator (a bird, or the
// student's forceps in the model) takes prey: the individuals missing from the
// next generation are removed, then the survivors' offspring pop in. Nobody
// changes colour: an individual keeps its colour from the moment it appears.
//
// Beside the board a bar chart draws one bar per generation. Every percentage
// is COMPUTED from the counts (camouflaged ÷ total × 100, rounded), so the
// chart and the board always agree. Optional numbered step chips across the
// top land on their own beats (e.g. the four-step natural selection sequence).
//
// Beats are frames after `delay`. Hold: prey jostle, the last bar breathes.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {Beat, Foot, H, PAL, Tag, W, clamp, fadeAt, hash01, popAt, shade, textWidth} from './shared';

type Gen = {camo: number; visible: number; at: number; label?: string};
export type CamouflageProps = {
	habitat?: 'darkBark' | 'paleBark' | 'fabric';
	prey?: 'moth' | 'beetle' | 'dot';
	predator?: 'bird' | 'forceps';
	/** colour names for the legend, camouflaged first */
	legend?: [string, string];
	chartLabel?: string;
	/** print each bar's computed percentage (off when the counts are only a picture) */
	showPct?: boolean;
	generations: Gen[];
	steps?: {text: string; at: number}[];
	footer?: Beat[];
	delay?: number;
};

const ID = 'b11m3cam';
const ease = Easing.inOut(Easing.cubic);
const BX0 = 40;
const BX1 = 430;
const MAXN = 24;

const HAB = {
	darkBark: {base: PAL.barkDark, streak: '#2e2924', camo: PAL.dark, vis: PAL.pale},
	paleBark: {base: PAL.barkPale, streak: '#9d9587', camo: PAL.pale, vis: PAL.dark},
	fabric: {base: PAL.fabric, streak: '#557f36', camo: '#5b8a3a', vis: PAL.red},
} as const;

const Prey = ({kind, color, x, y, s, rot}: {kind: 'moth' | 'beetle' | 'dot'; color: string; x: number; y: number; s: number; rot: number}) => {
	const edge = shade(color, -0.3);
	if (kind === 'dot') return <circle cx={x} cy={y} r={9 * s} fill={color} stroke={edge} strokeWidth={1.2} />;
	if (kind === 'beetle')
		return (
			<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
				<ellipse cx={0} cy={0} rx={9} ry={13} fill={color} stroke={edge} strokeWidth={1.2} />
				<circle cx={0} cy={-14} r={4.5} fill={edge} />
				<line x1={0} y1={-12} x2={0} y2={12} stroke={edge} strokeWidth={1} />
			</g>
		);
	return (
		<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
			<path d="M 0 -4 L -19 -9 Q -22 4 -8 10 L 0 5 Z" fill={color} stroke={edge} strokeWidth={1.2} />
			<path d="M 0 -4 L 19 -9 Q 22 4 8 10 L 0 5 Z" fill={color} stroke={edge} strokeWidth={1.2} />
			<ellipse cx={0} cy={1} rx={2.6} ry={8} fill={edge} />
		</g>
	);
};

const Bird = ({x, y, flap}: {x: number; y: number; flap: number}) => (
	<g transform={`translate(${x},${y})`}>
		<ellipse cx={0} cy={4} rx={16} ry={8} fill="#5b4a3a" />
		<circle cx={15} cy={-1} r={7} fill="#5b4a3a" />
		<path d="M 21 -1 L 30 1 L 21 3 Z" fill={TOK.amber} />
		<circle cx={17} cy={-3} r={1.6} fill="#fff" />
		<path d={`M -4 2 Q -14 ${-18 - flap * 10} -30 ${-10 - flap * 14} Q -14 ${-2} 4 4 Z`} fill="#6e5b48" />
		<path d="M -14 4 L -28 0 L -26 10 Z" fill="#4c3d30" />
	</g>
);

const Forceps = ({x, y, open}: {x: number; y: number; open: number}) => (
	<g transform={`translate(${x},${y}) rotate(-35)`}>
		<line x1={0} y1={0} x2={-8 - open * 6} y2={-90} stroke="#8a8f99" strokeWidth={5} strokeLinecap="round" />
		<line x1={0} y1={0} x2={8 + open * 6} y2={-90} stroke="#b0b5be" strokeWidth={5} strokeLinecap="round" />
	</g>
);

export const CamouflageDiagram = ({habitat = 'darkBark', prey = 'moth', predator = 'bird', legend = ['camouflaged', 'visible'], chartLabel = '% camouflaged', showPct = true, generations, steps = [], footer = [], delay = 62}: CamouflageProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const hab = HAB[habitat];
	const top = steps.length ? 92 : 40;
	const BY0 = top + 10;
	const BY1 = footer.length ? 372 : 392;
	const plY = BY1 + 6;

	// slots: jittered grid on the board, in a fixed scattered order
	const cols = 6;
	const rows = 4;
	const slots = Array.from({length: cols * rows}, (_, k) => {
		const c = k % cols;
		const r = Math.floor(k / cols);
		const cw = (BX1 - BX0 - 40) / cols;
		const rh = (BY1 - BY0 - 30) / rows;
		return {
			x: BX0 + 20 + cw * (c + 0.5) + (hash01(k * 3.1) - 0.5) * cw * 0.45,
			y: BY0 + 18 + rh * (r + 0.5) + (hash01(k * 7.7) - 0.5) * rh * 0.4,
			rot: (hash01(k * 5.3) - 0.5) * 50,
		};
	});
	const order = slots.map((_, k) => k).sort((a, b) => hash01(a * 11.3) - hash01(b * 11.3));

	// individuals: persistent identities. Each keeps its colour for life; it has a
	// birth beat and, if eaten, a death beat.
	type Ind = {slot: number; camo: boolean; born: number; dieFrom?: number};
	const inds: Ind[] = [];
	const free = [...order];
	const scaled = generations.map((g) => {
		const k = Math.min(1, MAXN / (g.camo + g.visible));
		return {c: Math.round(g.camo * k), v: Math.round(g.visible * k)};
	});
	for (let i = 0; i < scaled[0].c + scaled[0].v; i++) inds.push({slot: free.shift() as number, camo: i < scaled[0].c, born: generations[0].at + i * 2});
	for (let g = 1; g < generations.length; g++) {
		const gen = generations[g];
		const hunt = gen.at - 70;
		const alive = inds.filter((d) => d.dieFrom === undefined);
		let killV = Math.max(0, alive.filter((d) => !d.camo).length - scaled[g].v);
		let killC = Math.max(0, alive.filter((d) => d.camo).length - scaled[g].c);
		let kIdx = 0;
		for (const d of alive) {
			if (!d.camo && killV > 0) {
				d.dieFrom = hunt + (kIdx++ % 6) * 8;
				free.push(d.slot);
				killV--;
			} else if (d.camo && killC > 0) {
				d.dieFrom = hunt + (kIdx++ % 6) * 8 + 4;
				free.push(d.slot);
				killC--;
			}
		}
		const still = inds.filter((d) => d.dieFrom === undefined);
		const addC = Math.max(0, scaled[g].c - still.filter((d) => d.camo).length);
		const addV = Math.max(0, scaled[g].v - still.filter((d) => !d.camo).length);
		for (let i = 0; i < addC + addV && free.length; i++) inds.push({slot: free.shift() as number, camo: i < addC, born: gen.at + 8 + i * 3});
	}

	// predator path during each hunt
	const hunts = generations.slice(1).map((g) => g.at - 70);
	const activeHunt = hunts.find((h) => frame >= h - 20 && frame <= h + 70);
	const huntT = activeHunt !== undefined ? interpolate(frame, [activeHunt - 20, activeHunt + 70], [0, 1], clamp) : -1;

	// chart
	const CX0 = 488;
	const CX1 = 736;
	const CY0 = top + 40;
	const CY1 = BY1 - 10;
	const n = generations.length;
	const bw = Math.min(46, (CX1 - CX0 - 20) / n - 12);
	const pct = (g: Gen) => Math.round((g.camo / (g.camo + g.visible)) * 100);
	const lastBar = n - 1;
	const curGen = generations.reduce((acc, g, i) => (frame >= g.at ? i : acc), 0);

	const cw = (BX1 - BX0 - 40) / cols;
	const s = prey === 'dot' ? 1.1 : Math.min(1.3, cw / 44);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Selection by predation across generations" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<clipPath id={`${ID}-board`}>
					<rect x={BX0} y={BY0} width={BX1 - BX0} height={BY1 - BY0} rx={14} />
				</clipPath>
			</defs>

			{steps.map((st, i) => {
				const w = (W - 20) / steps.length;
				const x = 10 + w * (i + 0.5);
				const on = fadeAt(frame, st.at, 14);
				const lit = i === steps.reduce((acc, s2, j) => (frame >= s2.at ? j : acc), -1);
				const label = `${i + 1}  ${st.text}`;
				const size = textWidth(label, 17) + 24 > w - 8 ? 15 : 17;
				return <Tag key={i} x={x} y={30} text={label} size={size} color={lit ? theme.accent : TOK.inkDim} fill={lit ? '#eef5fc' : '#ffffff'} opacity={on} strokeW={lit ? 3 : 2} />;
			})}

			<DioramaPlinth id={`${ID}-p`} cx={(BX0 + BX1) / 2} cy={plY} rx={(BX1 - BX0) / 2 - 6} />
			{/* the habitat board */}
			<rect x={BX0 + 6} y={BY0 + 8} width={BX1 - BX0} height={BY1 - BY0} rx={14} fill="rgba(40,36,30,0.18)" />
			<rect x={BX0} y={BY0} width={BX1 - BX0} height={BY1 - BY0} rx={14} fill={hab.base} stroke={shade(hab.base, -0.25)} strokeWidth={2} />
			<g clipPath={`url(#${ID}-board)`}>
				{habitat === 'fabric'
					? Array.from({length: 60}, (_, k) => (
							<circle key={k} cx={BX0 + (k % 10) * 40 + 20 + (Math.floor(k / 10) % 2) * 20} cy={BY0 + Math.floor(k / 10) * 44 + 20} r={9} fill={hab.streak} opacity={0.55} />
						))
					: Array.from({length: 22}, (_, k) => {
							const x = BX0 + 10 + k * 18 + hash01(k) * 8;
							return <path key={k} d={`M ${x} ${BY0} Q ${x + 6 - hash01(k + 3) * 12} ${(BY0 + BY1) / 2} ${x + 3} ${BY1}`} stroke={hab.streak} strokeWidth={2 + hash01(k + 9) * 3} fill="none" opacity={0.7} />;
						})}
				{inds.map((d, k) => {
					const sl = slots[d.slot];
					const born = popAt(frame, fps, d.born);
					if (born <= 0.001) return null;
					let o = 1;
					let dy = 0;
					if (d.dieFrom !== undefined) {
						const t = interpolate(frame, [d.dieFrom, d.dieFrom + 24], [0, 1], clamp);
						o = 1 - t;
						dy = -t * 40;
						if (o <= 0) return null;
					}
					const col = d.camo ? hab.camo : hab.vis;
					return (
						<g key={k} opacity={o} transform={`translate(0,${dy})`}>
							<Prey kind={prey} color={col} x={sl.x + idleBob(frame, k, 1.2)} y={sl.y + idleBob(frame, k + 5, 1)} s={s * Math.min(1, born)} rot={sl.rot} />
						</g>
					);
				})}
			</g>
			<text x={(BX0 + BX1) / 2} y={BY1 + 46} textAnchor="middle" fontSize={20} fontWeight={800} fill={TOK.ink} opacity={fadeAt(frame, generations[0].at)}>
				{generations[curGen].label ?? `Generation ${curGen + 1}`}
			</text>

			{huntT >= 0 &&
				(predator === 'bird' ? (
					<g opacity={Math.min(1, huntT * 6, (1 - huntT) * 6)}>
						<Bird x={BX0 - 40 + huntT * (BX1 - BX0 + 80)} y={BY0 + 40 + Math.sin(huntT * Math.PI * 3) * 60 + 60} flap={Math.sin(frame / 3)} />
					</g>
				) : (
					<g opacity={Math.min(1, huntT * 6, (1 - huntT) * 6)}>
						<Forceps x={BX0 + 40 + huntT * (BX1 - BX0 - 80)} y={BY0 + 90 + Math.sin(huntT * Math.PI * 4) * 70 + 50} open={0.5 + 0.5 * Math.sin(frame / 4)} />
					</g>
				))}

			{/* chart */}
			<g opacity={fadeAt(frame, generations[0].at + 10)}>
				<text x={(CX0 + CX1) / 2} y={CY0 - 16} textAnchor="middle" fontSize={19} fontWeight={800} fill={TOK.ink}>
					{chartLabel}
				</text>
				<line x1={CX0} y1={CY1} x2={CX1} y2={CY1} stroke={TOK.inkDim} strokeWidth={2} />
				<line x1={CX0} y1={CY0} x2={CX0} y2={CY1} stroke={TOK.inkDim} strokeWidth={2} />
				{(showPct ? [0, 50, 100] : []).map((v) => {
					const y = CY1 - (v / 100) * (CY1 - CY0);
					return (
						<g key={v}>
							<line x1={CX0 - 5} y1={y} x2={CX1} y2={y} stroke={TOK.rule} strokeWidth={v ? 1.2 : 0} />
							<text x={CX0 - 9} y={y + 5} textAnchor="end" fontSize={15} fill={TOK.inkDim} fontWeight={700}>
								{v}
							</text>
						</g>
					);
				})}
			</g>
			{generations.map((g, i) => {
				const x = CX0 + 16 + i * ((CX1 - CX0 - 16) / n) + ((CX1 - CX0 - 16) / n - bw) / 2;
				const grow = interpolate(frame, [g.at + 16, g.at + 46], [0, 1], {...clamp, easing: ease});
				const hgt = (pct(g) / 100) * (CY1 - CY0) * grow;
				const isLast = i === lastBar;
				const amberNow = isLast && frame > g.at + 46;
				return (
					<g key={i} opacity={fadeAt(frame, g.at + 10)}>
						<rect x={x} y={CY1 - hgt} width={bw} height={hgt} rx={5} fill={hab.camo === PAL.pale ? '#cbbfa6' : hab.camo} stroke={amberNow ? TOK.amber : shade(hab.camo, -0.3)} strokeWidth={amberNow ? 2.5 + idlePulse(frame) * 1.5 : 1.2} />
						{showPct && (
							<text x={x + bw / 2} y={CY1 - hgt - 8} textAnchor="middle" fontSize={17} fontWeight={800} fill={amberNow ? TOK.amberInk : TOK.ink} opacity={grow}>
								{pct(g)}%
							</text>
						)}
						<text x={x + bw / 2} y={CY1 + 20} textAnchor="middle" fontSize={15} fontWeight={700} fill={TOK.inkDim}>
							{`G${i + 1}`}
						</text>
					</g>
				);
			})}
			{/* legend */}
			<g opacity={fadeAt(frame, generations[0].at + 10)}>
				{legend.map((l, i) => (
					<g key={i} transform={`translate(${CX0 + 8}, ${CY1 + 44 + i * 26})`}>
						<Prey kind={prey} color={i === 0 ? hab.camo : hab.vis} x={10} y={0} s={0.7} rot={0} />
						<text x={30} y={6} fontSize={16} fontWeight={700} fill={TOK.inkDim}>
							{l}
						</text>
					</g>
				))}
			</g>

			<Foot lines={footer} frame={frame} fade={fadeAt} />
		</svg>
	);
};
