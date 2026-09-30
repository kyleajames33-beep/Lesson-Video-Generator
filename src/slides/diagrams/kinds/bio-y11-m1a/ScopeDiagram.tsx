// ScopeDiagram (bio11m1Scope) — light-microscope practical work.
//
// mode 'mount'  Left: a wet mount built step by step, seen side-on on a stone
//               plinth: a drop of water on the slide, a thin layer of onion
//               epidermis laid in it, a drop of iodine stain, then the
//               coverslip lowered from one edge at about 45° with a mounting
//               needle, pushing air out ahead of the liquid (bubbles escape).
//               Right: the field of view: stained onion cells with firm walls,
//               pale cytoplasm and a darker nucleus, plus one trapped air
//               bubble (a dark-edged circle that is NOT a cell). Labels pop in
//               on their beats.
// mode 'grid'   The field of view with a stage grid laid beside the specimen.
//               A cell spans `span` squares of `squareUm` µm. The real size is
//               computed as span × squareUm (no division: the grid is
//               magnified with the cell). Then the equation is used forwards:
//               image = real size × magnification, converted to mm. Every
//               number is computed from props.
// Hold: the specimen shimmers slightly, the newest label pulses.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {CELLPAL, GlossDefs, H, Stat, W, clamp, fadeAt, popAt, textWidth} from './shared';

type Beat = {text: string; at: number};
export type ScopeProps = {
	mode?: 'mount' | 'grid';
	steps?: {water?: Beat; specimen?: Beat; stain?: Beat; coverslip?: Beat; focus?: Beat};
	view?: {at: number; labels?: {part: 'wall' | 'cytoplasm' | 'nucleus' | 'bubble'; text: string; at: number; amber?: boolean}[]};
	squareUm?: number;
	span?: number;
	mag?: number;
	fieldDiameterUm?: number;
	cellsAcross?: number;
	cellSizeUm?: number;
	at?: {grid?: number; cell?: number; count?: number; real?: number; forward?: number; image?: number};
	delay?: number;
};

const ID = 'b11scope';
const ease = Easing.inOut(Easing.cubic);
const IODINE = '#b8742a';
const fmt = (n: number) => (Math.round(n * 1000) / 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export const ScopeDiagram = ({mode = 'mount', steps = {}, view, squareUm = 100, span = 4, mag = 100, fieldDiameterUm, cellsAcross, cellSizeUm, at = {}, delay = 62}: ScopeProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const pulse = idlePulse(frame);

	if (mode === 'grid') {
		const cx = 236;
		const fieldMode = fieldDiameterUm !== undefined && cellsAcross !== undefined;
		const estimatedCellUm = cellSizeUm ?? (fieldMode ? fieldDiameterUm / cellsAcross : undefined);
		const cy = 250;
		const R = 196;
		const sq = 64;
		const tg = at.grid ?? 0;
		const tc = at.cell ?? 60;
		const tn = at.count ?? 120;
		const real = fieldMode ? estimatedCellUm! : span * squareUm;
		const imageUm = real * mag;
		const cellW = fieldMode ? (R * 2) / cellsAcross! : span * sq;
		const gx0 = fieldMode ? cx - R : cx - cellW / 2;
		const targetCount = fieldMode ? cellsAcross! : span;
		const count = Math.min(targetCount, Math.floor(interpolate(frame, [tn, tn + targetCount * 20], [0, targetCount + 0.999], clamp)));
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Measuring a cell with a stage grid" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<clipPath id={`${ID}-fov`}>
					<circle cx={cx} cy={cy} r={R - 6} />
				</clipPath>
				<circle cx={cx} cy={cy} r={R} fill="#fbfaf2" stroke="#2f2f2f" strokeWidth={10} />
				<g clipPath={`url(#${ID}-fov)`}>
					<g opacity={fadeAt(frame, tg, 16)}>
						{Array.from({length: 9}, (_, k) => (
							<g key={k}>
								<line x1={cx - 4 * sq + k * sq - sq / 2 + sq / 2} y1={cy - R} x2={cx - 4 * sq + k * sq} y2={cy + R} stroke="#6d8aa8" strokeWidth={1.8} opacity={0.7} />
								<line x1={cx - R} y1={cy - 4 * sq + k * sq} x2={cx + R} y2={cy - 4 * sq + k * sq} stroke="#6d8aa8" strokeWidth={1.8} opacity={0.7} />
							</g>
						))}
					</g>
					<g opacity={fadeAt(frame, tc, 16)} transform={`translate(0 ${idleBob(frame, 1, 0.8)})`}>
						{fieldMode ? Array.from({length: cellsAcross!}, (_, k) => (
							<g key={k}>
								<rect x={gx0 + k * cellW + 2} y={cy + 4} width={cellW - 4} height={56} rx={18} fill="#f3e3b8" stroke={IODINE} strokeWidth={3} />
								<ellipse cx={gx0 + k * cellW + cellW * 0.35} cy={cy + 32} rx={10} ry={8} fill={IODINE} opacity={0.8} />
							</g>
						)) : <>
							<rect x={gx0} y={cy + 6} width={cellW} height={52} rx={22} fill="#f3e3b8" stroke={IODINE} strokeWidth={4} />
							<ellipse cx={gx0 + 40} cy={cy + 32} rx={14} ry={10} fill={IODINE} opacity={0.8} />
						</>}
					</g>
					{Array.from({length: count}, (_, k) => (
						<g key={k}>
							<rect x={gx0 + k * sq + 2} y={cy + 2} width={sq - 4} height={sq - 4} fill={theme.accent} opacity={0.12} />
							<text x={gx0 + k * sq + sq / 2} y={cy - 12} textAnchor="middle" fill={theme.accent} fontSize={20} fontWeight={800}>{k + 1}</text>
						</g>
					))}
				</g>
				<g opacity={fadeAt(frame, tg + 20)}>
					<line x1={cx - R + 12} y1={cy + R - 34} x2={cx + R - 12} y2={cy + R - 34} stroke={TOK.ink} strokeWidth={3} />
					<text x={cx} y={cy + R - 44} textAnchor="middle" fill={TOK.ink} fontSize={16} fontWeight={800}>{fieldMode ? `field diameter = ${fmt(fieldDiameterUm!)} µm` : `${fmt(squareUm)} µm per square`}</text>
				</g>
				{/* working */}
				<g>
					<text x={590} y={70} textAnchor="middle" fill={TOK.inkDim} fontSize={17} fontWeight={800} opacity={fadeAt(frame, tg)}>{fieldMode ? `field diameter = ${fmt(fieldDiameterUm!)} µm` : `each square = ${fmt(squareUm)} µm`}</text>
					<Stat x={590} y={100} text={fieldMode ? `${fmt(fieldDiameterUm!)} µm ÷ ${cellsAcross} cells` : `${span} squares × ${fmt(squareUm)} µm`} opacity={fadeAt(frame, at.real ?? tn + 90)} />
					<Stat x={590} y={148} text={`estimated cell size = ${fmt(real)} µm`} border={TOK.amber} color={TOK.amberInk} size={21} opacity={fadeAt(frame, (at.real ?? tn + 90) + 30)} />
					<text x={590} y={214} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, (at.real ?? tn + 90) + 50)}>{fieldMode ? "field of view ÷ cells across" : "grid magnified too: no division"}</text>
					<g opacity={fadeAt(frame, at.forward ?? 400)}>
						<text x={590} y={272} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800}>forwards, at ×{fmt(mag)}:</text>
						<Stat x={590} y={288} text="image = real × magnification" size={17} />
					</g>
					<Stat x={590} y={340} text={`= ${fmt(real)} µm × ${fmt(mag)}`} size={18} opacity={fadeAt(frame, (at.image ?? 460) - 10)} />
					<Stat x={590} y={388} text={`= ${fmt(imageUm)} µm = ${fmt(imageUm / 1000)} mm`} size={18} border={theme.accent} opacity={fadeAt(frame, at.image ?? 460)} />
				</g>
			</svg>
		);
	}

	// ----- mount -----
	const bx = 20;
	const bw = 330;
	const sy = 330; // slide top surface
	const tW = steps.water?.at ?? 0;
	const tS = steps.specimen?.at ?? 60;
	const tI = steps.stain?.at ?? 120;
	const tC = steps.coverslip?.at ?? 180;
	const tF = steps.focus?.at;
	const drop = fadeAt(frame, tW, 18);
	const layer = interpolate(frame, [tS, tS + 40], [0, 1], {...clamp, easing: ease});
	const stain = interpolate(frame, [tI, tI + 50], [0, 1], clamp);
	const lower = interpolate(frame, [tC + 10, tC + 90], [45, 0], {...clamp, easing: ease});
	const hinge = {x: bx + 70, y: sy - 5};
	const csLen = 200;
	const rad = (lower * Math.PI) / 180;
	const tip = {x: hinge.x + Math.cos(rad) * csLen, y: hinge.y - Math.sin(rad) * csLen};
	const stepList = [steps.water, steps.specimen, steps.stain, steps.coverslip, steps.focus].filter((s): s is Beat => !!s);
	const cur = stepList.reduce((m, s, k) => (frame >= s.at ? k : m), -1);
	const vAt = view?.at ?? 99999;
	const fx = 572;
	const fy = 214;
	const fr = 158;
	const labels = view?.labels ?? [];
	const anchors = {wall: {x: fx + 20, y: fy + 44}, cytoplasm: {x: fx - 44, y: fy + 64}, nucleus: {x: fx - 14, y: fy}, bubble: {x: fx + 70, y: fy + 88}};
	const labelPos = {nucleus: {x: fx - 130, y: fy + fr + 36}, wall: {x: fx + 30, y: fy + fr + 36}, cytoplasm: {x: fx - 90, y: fy + fr + 84}, bubble: {x: fx + 96, y: fy + fr + 84}};
	const newest = labels.reduce((m, l) => (l.at <= frame && l.at > m ? l.at : m), -Infinity);

	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Preparing a wet mount and viewing onion cells" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={{water: CELLPAL.water, iodine: IODINE}} />
			<clipPath id={`${ID}-fov`}>
				<circle cx={fx} cy={fy} r={fr - 5} />
			</clipPath>
			{/* slide, side-on */}
			<DioramaPlinth id={ID} cx={bx + bw / 2} cy={sy + 60} rx={bw / 2 + 20} />
			<rect x={bx} y={sy} width={bw} height={16} rx={3} fill="rgba(216,238,247,0.9)" stroke="#8fb5c6" strokeWidth={2} />
			<ellipse cx={bx + 165} cy={sy} rx={90 * drop + (lower < 20 ? 25 * (1 - lower / 20) : 0)} ry={30 * drop * (lower < 30 ? 0.35 + (0.65 * lower) / 30 : 1)} fill={CELLPAL.water} opacity={0.45} />
			<rect x={bx + 105} y={sy - 8 - 30 * (1 - layer)} width={120 * layer} height={6} fill="#e9d9a8" opacity={layer} />
			<ellipse cx={bx + 165} cy={sy - 4} rx={75 * stain} ry={16 * stain * (lower < 30 ? 0.4 : 1)} fill={IODINE} opacity={0.35 * stain} />
			{frame >= tI - 20 && frame < tI + 60 && (
				<g opacity={1 - fadeAt(frame, tI + 40, 20)}>
					<rect x={bx + 157} y={sy - 150} width={16} height={70} rx={5} fill="#e8e8e8" stroke="#9a9a9a" />
					<circle cx={bx + 165} cy={interpolate(frame, [tI - 10, tI + 10], [sy - 74, sy - 8], clamp)} r={6} fill={`url(#${ID}-ball-iodine)`} opacity={frame < tI + 10 ? 1 : 0} />
				</g>
			)}
			{frame >= tC && (
				<g opacity={fadeAt(frame, tC, 10)}>
					<line x1={hinge.x} y1={hinge.y} x2={tip.x} y2={tip.y} stroke="#7fa9bd" strokeWidth={6} strokeLinecap="round" />
					<line x1={tip.x - 4} y1={tip.y - 2} x2={tip.x + 50} y2={tip.y - 50} stroke="#555" strokeWidth={4} strokeLinecap="round" />
					{lower > 25 && <text x={hinge.x + 40} y={hinge.y - 20} fill={TOK.inkDim} fontSize={16} fontWeight={800}>45°</text>}
					{[0, 1, 2].map((k) => {
						const ph = interpolate(frame, [tC + 30 + k * 15, tC + 100 + k * 10], [0, 1], clamp);
						return ph > 0 && ph < 1 ? <circle key={k} cx={bx + 170 + ph * 90} cy={sy - 6 - k * 4} r={4} fill="none" stroke="#6b8a9a" strokeWidth={1.5} opacity={1 - ph} /> : null;
					})}
				</g>
			)}
			{stepList.map((s, k) => {
				const o = fadeAt(frame, s.at, 10);
				return (
					<text key={k} x={14} y={36 + k * 32} fill={k === cur ? theme.accent : TOK.inkDim} fontSize={k === cur ? 21 : 19} fontWeight={800} opacity={o * (k === cur ? 1 : 0.8)}>
						{k + 1}. {s.text}
					</text>
				);
			})}
			{tF !== undefined && frame >= tF && <text x={bx + bw / 2} y={sy + 172} textAnchor="middle" fill={theme.accent} fontSize={18} fontWeight={800} opacity={fadeAt(frame, tF)}>low power first, then high power</text>}
			{/* field of view */}
			<g opacity={fadeAt(frame, vAt, 18)}>
				<circle cx={fx} cy={fy} r={fr} fill="#fbf6e6" stroke="#2f2f2f" strokeWidth={9} />
				<g clipPath={`url(#${ID}-fov)`}>
					{Array.from({length: 7}, (_, row) =>
						Array.from({length: 4}, (_, c) => {
							const w = 120;
							const h = 52;
							const x = fx - 220 + c * w + (row % 2) * (w / 2);
							const y = fy - 3.5 * h + row * h;
							return (
								<g key={`${row}-${c}`}>
									<rect x={x} y={y} width={w} height={h} fill="#f6e7bf" stroke="#8a5a1e" strokeWidth={3.5} />
									<ellipse cx={x + 22 + ((row + c) % 3) * 4} cy={y + h / 2 + idleBob(frame, row * 4 + c, 0.6)} rx={11} ry={8} fill={IODINE} opacity={0.85} />
								</g>
							);
						}),
					)}
					<circle cx={anchors.bubble.x} cy={anchors.bubble.y} r={22} fill="rgba(255,255,255,0.6)" stroke="#1f1f1f" strokeWidth={6} />
				</g>
			</g>
			{labels.map((l, i) => {
				const p = popAt(frame, fps, l.at);
				if (p <= 0) return null;
				const a = anchors[l.part];
				const lp = labelPos[l.part];
				const col = l.amber ? TOK.amberInk : l.at === newest ? theme.accent : TOK.ink;
				const w = textWidth(l.text, 17) + 22;
				const lx = Math.max(w / 2 + 4, Math.min(W - 4 - w / 2, lp.x));
				return (
					<g key={i} opacity={Math.min(1, p)}>
						<line x1={lx} y1={lp.y - 14} x2={a.x} y2={a.y} stroke={l.amber ? TOK.amber : col} strokeWidth={2.2} />
						<circle cx={a.x} cy={a.y} r={5} fill={l.amber ? TOK.amber : col} stroke="#fff" strokeWidth={1.5} />
						<rect x={lx - w / 2} y={lp.y - 16} width={w} height={32} rx={10} fill="#fff" stroke={l.amber ? TOK.amber : col} strokeWidth={l.at === newest ? 2.5 + pulse : 1.5} />
						<text x={lx} y={lp.y + 6} textAnchor="middle" fill={col} fontSize={17} fontWeight={800}>{l.text}</text>
					</g>
				);
			})}
		</svg>
	);
};
