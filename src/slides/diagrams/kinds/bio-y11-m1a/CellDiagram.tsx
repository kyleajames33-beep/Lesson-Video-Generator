// CellDiagram (bio11m1Cell) — a cut-away cell standing on a stone plinth, with
// its structures labelled one at a time as the narration names them.
//
// type 'prokaryote'  capsule, cell wall (peptidoglycan), cell membrane,
//                    cytoplasm, nucleoid (one circular chromosome), plasmids,
//                    ribosomes, a flagellum and pili. No nucleus, no
//                    membrane-bound organelles.
// type 'animal'      membrane, cytoplasm, nucleus (double membrane with pores,
//                    nucleolus), mitochondria (cristae), rough ER (ribosomes on
//                    it), smooth ER, Golgi body, free ribosomes, lysosomes,
//                    small vacuoles, centrioles, vesicles. No wall.
// type 'plant'       cellulose wall, membrane, cytoplasm, large central vacuole,
//                    nucleus pushed to the side, chloroplasts (grana),
//                    mitochondria, ER, Golgi body, ribosomes, vesicles.
//
// layout 'single'  one cell; `labels` pop into side columns with leader lines.
//                  Optional `route`: a new protein (glossy bead) travels
//                  ribosome/rough ER → Golgi → vesicle → membrane and out, a
//                  step chip naming each stage (the protein production line).
// layout 'pair'    two cells side by side on their own plinths (e.g. prokaryote
//                  and eukaryote, plant and animal) with a table of rows under
//                  them; each row pops on its beat and rings the matching part
//                  in each cell. Sizes are not to scale with each other; a
//                  size tag (props) says so.
//
// Every word on screen comes from props. Parts are drawn from fixed geometry;
// nothing is random. Hold: the outline breathes, ribosomes and organelles
// jostle, the flagellum beats and the newest label's ring pulses.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ReactNode} from 'react';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CELLPAL, Callouts, GlossDefs, H, Mark, W, clamp, fadeAt, popAt, textWidth, type Callout} from './shared';

export type CellType = 'prokaryote' | 'animal' | 'plant';
export type CellPart =
	| 'capsule' | 'wall' | 'membrane' | 'cytoplasm' | 'nucleoid' | 'plasmid' | 'ribosome' | 'flagellum' | 'pili'
	| 'nucleus' | 'nucleolus' | 'mitochondrion' | 'rer' | 'ser' | 'golgi' | 'lysosome' | 'vacuole' | 'centriole' | 'vesicle' | 'chloroplast' | 'dna';

type Label = {part: CellPart; text: string; note?: string; at: number; amber?: boolean; side?: 'left' | 'right'};
type RouteStep = {part: CellPart; text: string; at: number};
type Row = {label: string; cells: {text: string; ok?: boolean}[]; parts?: (CellPart | null)[]; at: number; amber?: boolean};
type PairCell = {type: CellType; title: string; size?: string; at?: number; hide?: CellPart[]; scale?: number};

export type CellProps = {
	layout?: 'single' | 'pair';
	type?: CellType;
	title?: string;
	labels?: Label[];
	hide?: CellPart[];
	route?: RouteStep[];
	cells?: PairCell[];
	rows?: Row[];
	caption?: {text: string; at: number; amber?: boolean}[];
	bridge?: {at: number; text?: string};
	delay?: number;
};

const ID = 'b11cell';
const ease = Easing.inOut(Easing.cubic);

// ---------- geometry (local coordinates, cell centred on 0,0) ----------

type Pt = {x: number; y: number; r: number};
const ANCHORS: Record<CellType, Partial<Record<CellPart, Pt>>> = {
	prokaryote: {
		capsule: {x: -40, y: -83, r: 10},
		wall: {x: 60, y: -73, r: 10},
		membrane: {x: 150, y: -40, r: 10},
		cytoplasm: {x: 60, y: 40, r: 14},
		nucleoid: {x: -20, y: 0, r: 58},
		dna: {x: -20, y: 0, r: 58},
		plasmid: {x: 98, y: -24, r: 16},
		ribosome: {x: -120, y: 30, r: 10},
		flagellum: {x: -228, y: 40, r: 16},
		pili: {x: 70, y: 96, r: 12},
	},
	animal: {
		membrane: {x: 183, y: -39, r: 10},
		cytoplasm: {x: -110, y: 40, r: 14},
		nucleus: {x: -79, y: -44, r: 60},
		dna: {x: -40, y: -5, r: 60},
		nucleolus: {x: -48, y: -12, r: 18},
		mitochondrion: {x: 110, y: 60, r: 34},
		rer: {x: -121, y: -34, r: 16},
		ser: {x: -70, y: 108, r: 18},
		golgi: {x: 96, y: -40, r: 30},
		ribosome: {x: 40, y: -68, r: 8},
		lysosome: {x: 60, y: 102, r: 16},
		vacuole: {x: -140, y: 68, r: 18},
		centriole: {x: 36, y: 36, r: 14},
		vesicle: {x: 150, y: 10, r: 10},
	},
	plant: {
		wall: {x: -186, y: -120, r: 10},
		membrane: {x: 176, y: 110, r: 10},
		cytoplasm: {x: -140, y: 112, r: 12},
		vacuole: {x: 20, y: 5, r: 70},
		nucleus: {x: -143, y: 0, r: 34},
		dna: {x: -143, y: 0, r: 34},
		nucleolus: {x: -148, y: -4, r: 10},
		chloroplast: {x: 20, y: -108, r: 34},
		mitochondrion: {x: 160, y: -40, r: 26},
		rer: {x: -140, y: 40, r: 12},
		golgi: {x: -134, y: -78, r: 18},
		ribosome: {x: 140, y: 120, r: 8},
		vesicle: {x: -105, y: -100, r: 8},
	},
};

const RIBOS: Record<CellType, [number, number][]> = {
	prokaryote: [[-130, -30], [-120, 30], [-100, -45], [-90, 45], [-140, 5], [40, -50], [60, 45], [130, 10], [140, -20], [30, 50], [-60, 52], [-70, -52], [150, 35], [80, 5], [-150, -15], [20, -55]],
	animal: [[40, -68], [60, -30], [20, 60], [-10, 110], [140, 90], [160, -80], [-120, -100], [-160, -20], [100, 120], [-30, -110], [0, -80], [120, -110]],
	plant: [[140, 120], [-60, 122], [120, -120], [-150, 60], [-160, -40], [165, 0], [-20, -125], [90, 124]],
};

const mitoShape = (x: number, y: number, rot: number, s: number, key: string, frame: number, i: number) => (
	<g key={key} transform={`translate(${x + idleBob(frame, i, 1.2)},${y + idleBob(frame, i + 3, 1)}) rotate(${rot}) scale(${s})`}>
		<ellipse rx={32} ry={15} fill={`url(#${ID}-ball-mito)`} stroke="#9a4a26" strokeWidth={1.5} />
		<path d="M -24 0 l 5 -9 l 5 16 l 5 -16 l 5 16 l 5 -16 l 5 16 l 5 -16 l 5 16 l 5 -9" fill="none" stroke="#fbe2c8" strokeWidth={2.2} strokeLinejoin="round" />
	</g>
);

const chloroShape = (x: number, y: number, rot: number, s: number, key: string, frame: number, i: number) => (
	<g key={key} transform={`translate(${x + idleBob(frame, i, 1)},${y}) rotate(${rot}) scale(${s})`}>
		<ellipse rx={32} ry={15} fill={`url(#${ID}-ball-chloro)`} stroke={CELLPAL.grana} strokeWidth={1.5} />
		{[-16, 0, 16].map((gx) => (
			<g key={gx}>
				{[-6, -2, 2, 6].map((gy) => (
					<rect key={gy} x={gx - 6} y={gy - 1.4} width={12} height={2.8} rx={1.2} fill={CELLPAL.grana} />
				))}
			</g>
		))}
	</g>
);

const golgiShape = (x: number, y: number, s: number, key: string, frame: number) => (
	<g key={key} transform={`translate(${x},${y}) scale(${s})`}>
		{[0, 1, 2, 3].map((k) => {
			const r = 45 + k * 12;
			const a0 = (150 * Math.PI) / 180;
			const a1 = (210 * Math.PI) / 180;
			const cx = 54;
			return (
				<path
					key={k}
					d={`M ${cx + r * Math.cos(a0)} ${r * Math.sin(a0)} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(a1)} ${r * Math.sin(a1)}`}
					fill="none"
					stroke={CELLPAL.golgi}
					strokeWidth={8}
					strokeLinecap="round"
				/>
			);
		})}
		{[[-6, -36], [-2, 38], [10, -44]].map(([vx, vy], k) => (
			<circle key={k} cx={vx + idleBob(frame, k + 20, 1.5)} cy={vy} r={5} fill={`url(#${ID}-ball-vesicle)`} />
		))}
	</g>
);

const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
	const p0 = {x: cx + r * Math.cos((a0 * Math.PI) / 180), y: cy + r * Math.sin((a0 * Math.PI) / 180)};
	const p1 = {x: cx + r * Math.cos((a1 * Math.PI) / 180), y: cy + r * Math.sin((a1 * Math.PI) / 180)};
	return `M ${p0.x} ${p0.y} A ${r} ${r} 0 0 1 ${p1.x} ${p1.y}`;
};

const erShape = (cx: number, cy: number, radii: number[], a0: number, a1: number, key: string, withRibo: boolean) => (
	<g key={key}>
		{radii.map((r) => (
			<g key={r}>
				<path d={arc(cx, cy, r, a0, a1)} fill="none" stroke={CELLPAL.er} strokeWidth={8} strokeLinecap="round" />
				{withRibo &&
					Array.from({length: Math.floor(((a1 - a0) * Math.PI * r) / 180 / 11)}, (_, k) => {
						const a = ((a0 + 4 + (k * 11 * 180) / (Math.PI * r)) * Math.PI) / 180;
						return <circle key={k} cx={cx + (r + 5.5) * Math.cos(a)} cy={cy + (r + 5.5) * Math.sin(a)} r={2.4} fill={CELLPAL.ribo} />;
					})}
			</g>
		))}
	</g>
);

/** Draw one cell (local coordinates). */
const drawCell = (type: CellType, frame: number, hide: Set<CellPart>): ReactNode => {
	const has = (p: CellPart) => !hide.has(p);
	const breathe = 1 + 0.008 * Math.sin(frame / 40);
	const ribos = has('ribosome')
		? RIBOS[type].map(([x, y], i) => <circle key={`r${i}`} cx={x + idleBob(frame, i, 1.4)} cy={y + idleBob(frame, i + 7, 1.4)} r={3.2} fill={CELLPAL.ribo} />)
		: null;

	if (type === 'prokaryote') {
		const wave = (k: number) => Math.sin(k * 0.55 - frame / 5) * 8;
		const flag = Array.from({length: 26}, (_, k) => {
			const t = k / 25;
			const x = -186 - t * 70;
			const y = 8 + t * 60 + wave(k) * t;
			return `${k === 0 ? 'M' : 'L'} ${x} ${y}`;
		}).join(' ');
		const loop = Array.from({length: 73}, (_, k) => {
			const th = (k / 72) * Math.PI * 2;
			const r = 40 + 9 * Math.sin(5 * th + 0.4) + 5 * Math.sin(11 * th);
			return `${k === 0 ? 'M' : 'L'} ${-20 + r * 1.55 * Math.cos(th)} ${r * 0.9 * Math.sin(th)}`;
		}).join(' ') + ' Z';
		const piliAt = [-120, -80, -30, 20, 70, 120];
		return (
			<g transform={`scale(${breathe})`}>
				{has('pili') &&
					piliAt.flatMap((px, k) =>
						[-1, 1].map((sd) => (
							<line key={`p${k}${sd}`} x1={px} y1={sd * 74} x2={px + 4 + idleBob(frame, k, 1.5)} y2={sd * (100 + (k % 2) * 4)} stroke={CELLPAL.flag} strokeWidth={2.2} strokeLinecap="round" />
						)),
					)}
				{has('flagellum') && <path d={flag} fill="none" stroke={CELLPAL.flag} strokeWidth={3.5} strokeLinecap="round" />}
				{has('capsule') && <rect x={-188} y={-88} width={376} height={176} rx={88} fill={CELLPAL.capsule} fillOpacity={0.45} stroke={CELLPAL.capsule} strokeWidth={2} strokeDasharray="6 5" />}
				{has('wall') && <rect x={-176} y={-76} width={352} height={152} rx={76} fill={CELLPAL.wallProk} />}
				<rect x={-168} y={-68} width={336} height={136} rx={68} fill={CELLPAL.cytoProk} stroke={CELLPAL.membrane} strokeWidth={has('membrane') ? 3.5 : 0} />
				{has('nucleoid') && (
					<g>
						<ellipse cx={-20} cy={0} rx={82} ry={46} fill={CELLPAL.dna} fillOpacity={0.08} />
						<path d={loop} fill="none" stroke={CELLPAL.dna} strokeWidth={3} strokeLinejoin="round" />
					</g>
				)}
				{has('plasmid') && (
					<g>
						<circle cx={98 + idleBob(frame, 2, 1.5)} cy={-24} r={12} fill="none" stroke={CELLPAL.dna} strokeWidth={3} />
						<circle cx={118} cy={30 + idleBob(frame, 4, 1.5)} r={9} fill="none" stroke={CELLPAL.dna} strokeWidth={3} />
					</g>
				)}
				{ribos}
			</g>
		);
	}

	if (type === 'animal') {
		const outline = Array.from({length: 61}, (_, k) => {
			const a = (k / 60) * Math.PI * 2;
			const w = 1 + 0.025 * Math.sin(3 * a + frame / 25) + 0.015 * Math.sin(5 * a - frame / 33);
			return `${k === 0 ? 'M' : 'L'} ${190 * w * Math.cos(a)} ${150 * w * Math.sin(a)}`;
		}).join(' ') + ' Z';
		return (
			<g>
				<path d={outline} fill={CELLPAL.cyto} stroke={CELLPAL.membrane} strokeWidth={has('membrane') ? 4 : 1} />
				{has('ser') && (
					<g>
						<path d="M -130 96 q 12 -12 24 0 t 24 0 t 24 0 t 24 0" fill="none" stroke={CELLPAL.er} strokeWidth={7} strokeLinecap="round" opacity={0.85} />
						<path d="M -118 116 q 12 -12 24 0 t 24 0 t 24 0 t 24 0" fill="none" stroke={CELLPAL.er} strokeWidth={7} strokeLinecap="round" opacity={0.85} />
					</g>
				)}
				{has('rer') && erShape(-40, -5, [72, 86, 100], 125, 232, 'rer', true)}
				{has('nucleus') && (
					<g>
						<circle cx={-40} cy={-5} r={57} fill={CELLPAL.nucleus} opacity={0.9} />
						<circle cx={-40} cy={-5} r={51} fill="#d9c6f0" />
						{[0, 60, 120, 180, 240, 300].map((a) => (
							<rect key={a} x={-44} y={-5 - 58} width={8} height={10} fill="#d9c6f0" transform={`rotate(${a + 20} -40 -5)`} />
						))}
						<path d="M -70 -20 q 10 -12 20 0 t 20 0 M -64 15 q 8 10 18 0 t 18 0 M -20 -30 q 6 8 14 2" fill="none" stroke={CELLPAL.dna} strokeWidth={2} opacity={0.6} />
						{has('nucleolus') && <circle cx={-48} cy={-10} r={15} fill={CELLPAL.nucleolus} />}
					</g>
				)}
				{has('golgi') && golgiShape(96, -40, 1, 'golgi', frame)}
				{has('mitochondrion') && [mitoShape(110, 60, 20, 1, 'm1', frame, 1), mitoShape(-120, -80, -30, 0.9, 'm2', frame, 2), mitoShape(30, -108, 8, 0.85, 'm3', frame, 3)]}
				{has('lysosome') &&
					[[60, 102, 12], [-150, 20, 10]].map(([x, y, r], k) => (
						<g key={`l${k}`} transform={`translate(${x + idleBob(frame, k + 9, 1.2)},${y})`}>
							<circle r={r} fill={`url(#${ID}-ball-lyso)`} />
							{[[-3, -3], [3, -2], [0, 3], [-4, 3]].map(([dx, dy], j) => (
								<circle key={j} cx={dx} cy={dy} r={1.4} fill="#fff" opacity={0.8} />
							))}
						</g>
					))}
				{has('vacuole') &&
					[[-140, 68, 14], [70, -80, 9]].map(([x, y, r], k) => <circle key={`v${k}`} cx={x} cy={y} r={r} fill={CELLPAL.vacuole} stroke="#7fb8d0" strokeWidth={1.5} />)}
				{has('centriole') && (
					<g transform="translate(36,36)">
						<rect x={-9} y={-3.5} width={18} height={7} rx={2} fill={CELLPAL.centriole} />
						<rect x={-3.5} y={-12} width={7} height={18} rx={2} fill={CELLPAL.centriole} transform="translate(12,4)" />
					</g>
				)}
				{has('vesicle') && [[150, 10], [165, -40], [130, 110]].map(([x, y], k) => <circle key={`ve${k}`} cx={x + idleBob(frame, k + 12, 1.6)} cy={y} r={6} fill={`url(#${ID}-ball-vesicle)`} />)}
				{ribos}
			</g>
		);
	}

	// plant
	return (
		<g>
			{has('wall') && <rect x={-192} y={-146} width={384} height={292} rx={14} fill={`url(#${ID}-ball-wall)`} />}
			<rect x={-180} y={-134} width={360} height={268} rx={10} fill={CELLPAL.cytoPlant} stroke={CELLPAL.membrane} strokeWidth={has('membrane') ? 3.5 : 0} />
			{has('vacuole') && <rect x={-104 - 2 * Math.sin(frame / 45)} y={-80} width={244 + 4 * Math.sin(frame / 45)} height={170} rx={36} fill={CELLPAL.vacuole} stroke="#7fb8d0" strokeWidth={2.5} />}
			{has('rer') && erShape(-143, 0, [42, 50], 55, 125, 'rer', true)}
			{has('nucleus') && (
				<g>
					<circle cx={-143} cy={0} r={31} fill={CELLPAL.nucleus} opacity={0.9} />
					<circle cx={-143} cy={0} r={26} fill="#d9c6f0" />
					{has('nucleolus') && <circle cx={-148} cy={-4} r={9} fill={CELLPAL.nucleolus} />}
				</g>
			)}
			{has('golgi') && golgiShape(-150, -80, 0.45, 'golgi', frame)}
			{has('chloroplast') && [chloroShape(-60, -107, 0, 1, 'c1', frame, 1), chloroShape(20, -108, 0, 1, 'c2', frame, 2), chloroShape(100, -107, 0, 1, 'c3', frame, 3), chloroShape(-30, 112, 0, 0.85, 'c4', frame, 4), chloroShape(60, 112, 0, 0.85, 'c5', frame, 5), chloroShape(160, 50, 90, 0.8, 'c6', frame, 6)]}
			{has('mitochondrion') && [mitoShape(160, -40, 90, 0.8, 'm1', frame, 1), mitoShape(-140, 90, 60, 0.75, 'm2', frame, 2)]}
			{has('vesicle') && [[-105, -100], [-95, -60]].map(([x, y], k) => <circle key={`ve${k}`} cx={x + idleBob(frame, k + 12, 1.4)} cy={y} r={5} fill={`url(#${ID}-ball-vesicle)`} />)}
			{ribos}
		</g>
	);
};

// ---------- component ----------

export const CellDiagram = ({layout = 'single', type = 'animal', title, labels = [], hide = [], route = [], cells = [], rows = [], caption = [], bridge, delay = 62}: CellProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);
	const top = title ? 44 : 0;
	const capH = caption.length > 0 ? 40 : 0;

	const defs = (
		<>
			<DioramaDefs id={ID} />
			<GlossDefs
				id={ID}
				colors={{mito: CELLPAL.mito, chloro: CELLPAL.chloro, lyso: CELLPAL.lyso, vesicle: CELLPAL.vesicle, protein: CELLPAL.protein, wall: CELLPAL.wall}}
			/>
		</>
	);

	const ring = (x: number, y: number, r: number, on: number, color: string) =>
		on > 0 ? <circle cx={x} cy={y} r={r + 6 + 3 * pulse} fill="none" stroke={color} strokeWidth={3} strokeDasharray="7 5" opacity={0.85 * on} /> : null;

	const captionEl =
		caption.length > 0
			? caption.map((c, i) => {
					const next = caption[i + 1]?.at;
					const on = fadeAt(frame, c.at, 10) * (next === undefined ? 1 : 1 - fadeAt(frame, next, 10));
					return (
						<text key={i} x={W / 2} y={top + 28} textAnchor="middle" fill={c.amber ? TOK.amberInk : theme.accent} fontSize={20} fontWeight={800} opacity={on}>
							{c.text}
						</text>
					);
				})
			: null;

	if (layout === 'pair') {
		const cx = [196, 566];
		const cy = top + capH + 126;
		const plY = cy + 100;
		const rowTop = plY + 64;
		const rowH = Math.min(56, (H - 4 - rowTop) / Math.max(1, rows.length));
		const labelW = 160;
		const colX = [labelW + (W - labelW) * 0.25, labelW + (W - labelW) * 0.75];
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Two cells compared'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				{defs}
				{title && <text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{title}</text>}
				{captionEl}
				{cells.slice(0, 2).map((c, i) => {
					const o = fadeAt(frame, c.at ?? 0, 16);
					const s = c.scale ?? (c.type === 'prokaryote' ? 0.5 : 0.56);
					const hideSet = new Set(c.hide ?? []);
					return (
						<g key={i} opacity={o}>
							<DioramaPlinth id={`${ID}-p${i}`} cx={cx[i]} cy={plY} rx={150} />
							<g transform={`translate(${cx[i]},${cy}) scale(${s})`}>{drawCell(c.type, frame, hideSet)}</g>
							{rows.map((r, k) => {
								const p = r.parts?.[i];
								if (!p) return null;
								const a = ANCHORS[c.type][p];
								if (!a) return null;
								const next = rows.slice(k + 1).find((rr) => rr.parts?.[i])?.at;
								const on = fadeAt(frame, r.at, 10) * (next === undefined ? 1 : 1 - fadeAt(frame, next, 10));
								return <g key={k}>{ring(cx[i] + a.x * s, cy + a.y * s, a.r * s, on, r.amber ? TOK.amber : theme.accent)}</g>;
							})}
							<text x={cx[i]} y={plY + 46} textAnchor="middle" fill={TOK.ink} fontSize={20} fontWeight={800}>{c.title}</text>
							{c.size && <text x={cx[i]} y={top + capH + 20} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800}>{c.size}</text>}
						</g>
					);
				})}
				{bridge && cells.length === 2 && (() => {
					const s0 = cells[0].scale ?? 0.5;
					const s1 = cells[1].scale ?? 0.5;
					const xa = cx[0] + 176 * s0;
					const xb = cx[1] - 176 * s1;
					const y = cy - 18;
					const grow = interpolate(frame, [bridge.at, bridge.at + 30], [0, 1], {...clamp, easing: ease});
					const move = interpolate(frame, [bridge.at + 40, bridge.at + 120], [0, 1], {...clamp, easing: ease});
					if (grow <= 0) return null;
					const ex = xa + (xb - xa) * grow;
					const px = xa + 20 + (xb - xa - 40) * move;
					return (
						<g>
							<path d={`M ${xa} ${y} Q ${(xa + ex) / 2} ${y - 16} ${ex} ${y}`} fill="none" stroke={CELLPAL.flag} strokeWidth={4} strokeLinecap="round" />
							{move > 0 && move < 1 && <circle cx={px} cy={y - 9} r={9} fill="none" stroke={CELLPAL.dna} strokeWidth={3} />}
							{move >= 1 && <circle cx={cx[1] + ANCHORS.prokaryote.plasmid!.x * s1} cy={cy + ANCHORS.prokaryote.plasmid!.y * s1} r={12 * s1 + 2} fill="none" stroke={TOK.amber} strokeWidth={3} opacity={0.6 + 0.4 * pulse} />}
							{move >= 1 && <circle cx={cx[1] + ANCHORS.prokaryote.plasmid!.x * s1} cy={cy + ANCHORS.prokaryote.plasmid!.y * s1} r={12 * s1} fill="none" stroke={CELLPAL.dna} strokeWidth={3} />}
							{bridge.text && <text x={(xa + xb) / 2} y={y - 34} textAnchor="middle" fill={theme.accent} fontSize={17} fontWeight={800} opacity={fadeAt(frame, bridge.at + 20)}>{bridge.text}</text>}
						</g>
					);
				})()}
				{rows.map((r, k) => {
					const p = popAt(frame, fps, r.at);
					if (p <= 0) return null;
					const y = rowTop + k * rowH;
					return (
						<g key={k} opacity={Math.min(1, p)}>
							<rect x={4} y={y} width={W - 8} height={rowH - 7} rx={10} fill={r.amber ? 'rgba(240,168,48,0.12)' : '#ffffff'} stroke={r.amber ? TOK.amber : 'rgba(0,0,0,0.1)'} strokeWidth={r.amber ? 2.5 : 1.5} />
							<text x={16} y={y + (rowH - 7) / 2 + 6} fill={r.amber ? TOK.amberInk : TOK.ink} fontSize={18} fontWeight={800}>{r.label}</text>
							{r.cells.slice(0, 2).map((c, j) => {
								const hasMark = c.ok !== undefined;
								const tw = textWidth(c.text, 17);
								const cxCol = r.cells.length === 1 ? (colX[0] + colX[1]) / 2 : colX[j];
								const x0 = cxCol - (tw + (hasMark ? 28 : 0)) / 2;
								return (
									<g key={j}>
										{hasMark && <Mark x={x0 + 11} y={y + (rowH - 7) / 2} ok={!!c.ok} r={11} />}
										<text x={x0 + (hasMark ? 28 : 0)} y={y + (rowH - 7) / 2 + 6} fill={TOK.ink} fontSize={17} fontWeight={700}>{c.text}</text>
									</g>
								);
							})}
						</g>
					);
				})}
			</svg>
		);
	}

	// ----- single -----
	const scale = type === 'prokaryote' ? 0.92 : 1.0;
	const gx = type === 'prokaryote' ? 412 : 380;
	const gy = top + capH + (type === 'prokaryote' ? 190 : 185);
	const plY = gy + (type === 'prokaryote' ? 128 : 178);
	const hideSet = new Set(hide);
	const toG = (p: CellPart) => {
		const a = ANCHORS[type][p];
		return a ? {x: gx + a.x * scale, y: gy + a.y * scale, r: a.r * scale} : null;
	};
	const items: Callout[] = labels
		.map((l) => {
			const a = toG(l.part);
			if (!a) return null;
			return {text: l.text, note: l.note, ax: a.x, ay: a.y, at: l.at, amber: l.amber, side: l.side ?? (a.x < gx ? 'left' : 'right')} as Callout;
		})
		.filter((c): c is Callout => c !== null);
	const newest = labels.reduce((m, l) => (l.at <= frame && l.at > (m?.at ?? -Infinity) ? l : m), null as Label | null);

	// protein route
	const pts = route.map((s) => toG(s.part)).filter((p): p is {x: number; y: number; r: number} => p !== null);
	let bead: {x: number; y: number} | null = null;
	let exit = 0;
	if (route.length > 0 && frame >= route[0].at) {
		let i = 0;
		while (i + 1 < route.length && frame >= route[i + 1].at) i++;
		const cur = pts[i];
		const nxt = pts[i + 1];
		if (nxt) {
			const t = interpolate(frame, [route[i + 1].at - 40, route[i + 1].at], [0, 1], {...clamp, easing: ease});
			bead = {x: cur.x + (nxt.x - cur.x) * t, y: cur.y + (nxt.y - cur.y) * t};
		} else {
			exit = interpolate(frame, [route[i].at + 10, route[i].at + 70], [0, 1], {...clamp, easing: ease});
			bead = {x: cur.x + 70 * exit, y: cur.y - 30 * exit};
		}
	}
	const step = route.reduce((m, s, k) => (frame >= s.at ? k : m), -1);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? `A labelled ${type} cell`} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			{defs}
			{title && <text x={W / 2} y={32} textAnchor="middle" fill={TOK.ink} fontSize={24} fontWeight={800}>{title}</text>}
			{captionEl}
			<g opacity={fadeAt(frame, 0, 16)}>
				<DioramaPlinth id={ID} cx={gx} cy={plY} rx={type === 'prokaryote' ? 210 : 196} />
				<g transform={`translate(${gx},${gy}) scale(${scale})`}>{drawCell(type, frame, hideSet)}</g>
			</g>
			{newest && (() => {
				const a = toG(newest.part);
				return a ? ring(a.x, a.y, a.r, fadeAt(frame, newest.at, 10), newest.amber ? TOK.amber : theme.accent) : null;
			})()}
			{pts.length > 0 && step >= 0 && (
				<g>
					{pts.map((p, k) =>
						k > 0 && k <= step ? <line key={k} x1={pts[k - 1].x} y1={pts[k - 1].y} x2={p.x} y2={p.y} stroke={CELLPAL.protein} strokeWidth={2.5} strokeDasharray="5 6" opacity={0.6} /> : null,
					)}
					{bead && (
						<g opacity={1 - 0.5 * exit}>
							<circle cx={bead.x} cy={bead.y} r={9 + 1.5 * pulse} fill={`url(#${ID}-ball-protein)`} stroke="#fff" strokeWidth={2} />
						</g>
					)}
					{route.map((s, k) => {
						const on = fadeAt(frame, s.at, 10) * (k + 1 < route.length ? 1 - fadeAt(frame, route[k + 1].at, 10) : 1);
						if (on <= 0) return null;
						const t = `${k + 1}  ${s.text}`;
						const w = textWidth(t, 19) + 30;
						return (
							<g key={k} opacity={on}>
								<rect x={W / 2 - w / 2} y={top + 6} width={w} height={34} rx={17} fill="#ffffff" stroke={theme.accent} strokeWidth={2.5} />
								<text x={W / 2} y={top + 29} textAnchor="middle" fill={theme.accent} fontSize={19} fontWeight={800}>{t}</text>
							</g>
						);
					})}
				</g>
			)}
			<Callouts items={items} frame={frame} fps={fps} accent={theme.accent} top={top + capH + 14} bottom={H - 10} colW={type === 'prokaryote' ? 136 : 150} size={19} noteSize={16} />
		</svg>
	);
};

