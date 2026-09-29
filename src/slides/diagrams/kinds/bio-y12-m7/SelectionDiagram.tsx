// SelectionDiagram (bio12m7Selection) — resistance as natural selection.
//
// A population stands on a stone plinth. A few individuals already carry a
// resistance mutation (amber ring: the thing that matters) before any drug
// arrives. The antibiotic (or pesticide spray) kills the susceptible ones; the
// resistant survivors reproduce and fill the plinth, so the next generation is
// mostly resistant. Optional: a plasmid carries the resistance gene into a
// bacterium of a different species (horizontal gene transfer).
//
// The drug never touches the resistant ones' DNA: the rings are there from
// the first beat, which is the point (selection, not creation). Counts are a
// stylised picture; no numbers are shown.

import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, PAL, Title, W, bioBeats, clamp, fadeAt, textWidth} from './shared';
import {Icon, hash01} from './icons';

type Beats = {pop: number; mutants: number; drug: number; survive: number; reproduce: number; hgt: number};
export type SelectionProps = {
	organism?: 'bacterium' | 'mosquito';
	drug?: 'antibiotic' | 'spray';
	title?: string;
	captions?: {text: string; at: number; amber?: boolean}[];
	legend?: string;
	hgt?: {text: string};
	beats?: Partial<Beats>;
	footer?: {text: string; at: number; amber?: boolean}[];
	delay?: number;
};

const ID = 'b12m7sel';
const ease = Easing.inOut(Easing.cubic);
const COLS = 5;
const ROWS = 3;
const RESISTANT = [6, 13];
const LUCKY = 3; // one susceptible individual the drug happens to miss

export const SelectionDiagram = ({organism = 'bacterium', drug = 'antibiotic', title, captions = [], legend = 'resistance mutation', hgt, beats, footer = [], delay = 62}: SelectionProps) => {
	const frame = useCurrentFrame() - delay;
	const theme = useAccent();
	const b = bioBeats<Beats>({pop: 0, mutants: 100, drug: 200, survive: 260, reproduce: 360, hgt: 600}, beats);
	const top = title ? 50 : 10;
	const cx = hgt ? 330 : W / 2;
	const cy = top + 230;
	const rx = hgt ? 240 : 270;
	const ry = rx * 0.34;
	const N = COLS * ROWS;
	const slots = Array.from({length: N}, (_, k) => {
		const r = Math.floor(k / COLS);
		const c = k % COLS;
		const fy = -0.6 + (1.2 * r) / (ROWS - 1);
		const halfW = rx * 0.8 * Math.sqrt(1 - fy * fy * 0.55);
		return {x: cx + (-1 + (2 * c) / (COLS - 1)) * halfW * 0.92 + (r % 2 ? 22 : -8), y: cy + fy * ry - 22};
	});
	const s = organism === 'mosquito' ? 0.78 : 0.72;

	const kill = interpolate(frame, [b.drug + 30, b.survive], [0, 1], {...clamp, easing: ease});
	const refill = (k: number) => {
		// offspring fill the emptied slots one by one, from the nearest survivor
		const order = (k * 4) % N;
		return interpolate(frame, [b.reproduce + order * 8, b.reproduce + order * 8 + 26], [0, 1], {...clamp, easing: ease});
	};
	const survivors = [...RESISTANT, LUCKY];
	const nearest = (k: number) => {
		let best = survivors[0];
		for (const sIdx of survivors) if (Math.hypot(slots[sIdx].x - slots[k].x, slots[sIdx].y - slots[k].y) < Math.hypot(slots[best].x - slots[k].x, slots[best].y - slots[k].y)) best = sIdx;
		return best;
	};
	const ringOn = fadeAt(frame, b.mutants, 16);

	// drug particles
	const drugOn = fadeAt(frame, b.drug, 8) * (1 - fadeAt(frame, b.survive + 20, 20));
	const drops = Array.from({length: 16}, (_, k) => {
		const fall = ((frame - b.drug) * 3.2 + hash01(k) * 160) % 170;
		return {x: cx - rx * 0.85 + ((k * 37) % 100) / 100 * rx * 1.7, y: top + 70 + fall};
	});

	// HGT
	const other = {x: cx + rx + 58, y: cy - 10};
	const hT = hgt ? interpolate(frame, [b.hgt, b.hgt + 60], [0, 1], {...clamp, easing: ease}) : 0;
	const src = slots[RESISTANT[1]];

	const renderOne = (k: number) => {
		const res = RESISTANT.includes(k);
		const lucky = k === LUCKY;
		const alive = res || lucky ? 1 : 1 - kill;
		const f = refill(k);
		const isChild = !res && !lucky && frame >= b.reproduce && f > 0;
		const childRes = isChild && ![0, 11].includes(k); // mostly resistant; a couple of offspring from the lucky one
		const pos = slots[k];
		const bob = idleBob(frame, k, 1.4);
		if (isChild) {
			const from = slots[childRes ? nearest(k) : LUCKY];
			const x = from.x + (pos.x - from.x) * f;
			const y = from.y + (pos.y - from.y) * f - Math.sin(f * Math.PI) * 18;
			return (
				<g key={k}>
					<Icon id={ID} name={organism} x={x} y={y + bob} s={s * (0.6 + 0.4 * f)} frame={frame + k * 9} />
					{childRes && <ellipse cx={x} cy={y + bob} rx={30 * s * 1.3} ry={22 * s * 1.3} fill="none" stroke={TOK.amber} strokeWidth={3} />}
				</g>
			);
		}
		if (alive <= 0.02) return null;
		return (
			<g key={k} opacity={res || lucky ? 1 : 0.25 + 0.75 * alive}>
				<g transform={`translate(0, ${(1 - alive) * 6})`}>
					<Icon id={ID} name={organism} x={pos.x} y={pos.y + bob * alive} s={s} frame={frame + k * 9} opts={alive < 0.99 ? {tone: 'grey'} : {}} />
				</g>
				{res && (
					<ellipse cx={pos.x} cy={pos.y + bob} rx={30 * s * 1.3} ry={22 * s * 1.3} fill="none" stroke={TOK.amber} strokeWidth={3 + (frame > b.survive ? idlePulse(frame) * 1.5 : 0)} opacity={ringOn} />
				)}
			</g>
		);
	};

	// captions: the latest one whose beat has passed
	const cap = [...captions].reverse().find((c) => frame >= c.at);
	const capO = cap ? fadeAt(frame, cap.at, 10) : 0;

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Selection for resistance'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			{cap && (
				<g opacity={capO}>
					<rect x={W / 2 - textWidth(cap.text, 20) / 2 - 20} y={top + 4} width={textWidth(cap.text, 20) + 40} height={40} rx={20} fill={cap.amber ? '#fff6e6' : '#ffffff'} stroke={cap.amber ? TOK.amber : theme.accent} strokeWidth={2.5} />
					<text x={W / 2} y={top + 31} textAnchor="middle" fill={cap.amber ? TOK.amberInk : theme.accent} fontSize={20} fontWeight={800}>{cap.text}</text>
				</g>
			)}
			<g opacity={fadeAt(frame, b.pop - 10, 14)}>
				<DioramaPlinth id={ID} cx={cx} cy={cy} rx={rx} />
			</g>
			<g opacity={fadeAt(frame, b.pop, 14)}>{slots.map((_, k) => k).sort((a, c) => slots[a].y - slots[c].y).map(renderOne)}</g>
			{/* drug */}
			{drugOn > 0 && (
				<g opacity={drugOn}>
					{drops.map((d, k) =>
						drug === 'antibiotic' ? (
							<Icon key={k} id={ID} name="pill" x={d.x} y={d.y} s={0.28} frame={frame} />
						) : (
							<circle key={k} cx={d.x} cy={d.y} r={5 + (k % 3)} fill={PAL.grey} opacity={0.45} />
						),
					)}
				</g>
			)}
			{/* legend */}
			<g opacity={ringOn}>
				<ellipse cx={40} cy={H - 30 - footer.length * 25} rx={16} ry={12} fill="none" stroke={TOK.amber} strokeWidth={3} />
				<text x={64} y={H - 24 - footer.length * 25} fill={TOK.amberInk} fontSize={17} fontWeight={800}>{legend}</text>
			</g>
			{/* horizontal gene transfer */}
			{hgt && (
				<g opacity={fadeAt(frame, b.hgt - 30, 16)}>
					<DioramaPlinth id={`${ID}o`} cx={other.x} cy={other.y + 30} rx={56} />
					<circle cx={other.x} cy={other.y} r={22} fill={`url(#${ID}-ball-protozoan)`} stroke={PAL.protozoan} strokeWidth={1} />
					<text x={other.x} y={other.y + 88} textAnchor="middle" fill={TOK.inkDim} fontSize={15} fontWeight={800}>another species</text>
					{hT > 0 && hT < 1 && (
						<g>
							<path d={`M ${src.x} ${src.y} Q ${(src.x + other.x) / 2} ${src.y - 110} ${other.x} ${other.y}`} fill="none" stroke={TOK.amber} strokeWidth={2} strokeDasharray="4 5" />
						</g>
					)}
					{hT > 0 && (() => {
						const t = hT;
						const qx = (1 - t) * (1 - t) * src.x + 2 * (1 - t) * t * ((src.x + other.x) / 2) + t * t * other.x;
						const qy = (1 - t) * (1 - t) * src.y + 2 * (1 - t) * t * (src.y - 110) + t * t * other.y;
						return <circle cx={qx} cy={qy} r={t < 1 ? 9 : 7} fill="none" stroke={TOK.amber} strokeWidth={4} />;
					})()}
					{hT >= 1 && <circle cx={other.x} cy={other.y} r={30} fill="none" stroke={TOK.amber} strokeWidth={3 + idlePulse(frame) * 1.5} />}
					<text x={other.x} y={other.y - 44} textAnchor="middle" fill={TOK.amberInk} fontSize={15} fontWeight={800} opacity={fadeAt(frame, b.hgt)}>plasmid</text>
				</g>
			)}
			{footer.map((f, i) => (
				<text key={i} x={W / 2} y={H - 10 - (footer.length - 1 - i) * 25} textAnchor="middle" fill={f.amber ? TOK.amberInk : TOK.inkDim} fontSize={18} fontWeight={800} opacity={fadeAt(frame, f.at)}>{f.text}</text>
			))}
		</svg>
	);
};
