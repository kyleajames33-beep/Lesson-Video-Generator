// PlantDiagram (bio12m7Plant) — a whole plant on a plinth, for diseases and
// defences that travel through its transport tissue.
//
// panama  A banana plant. Spores sit in the soil; the fungus enters the roots
//         and grows up the xylem, the water flow (blue) stops, the leaves
//         yellow and wilt. The plant plugs its xylem (tyloses, gums) too late.
//         Spores persist in the soil. Then a row of identical Cavendish clones
//         appears: no variation, all susceptible.
// sar     One leaf is infected (a local lesion). A signal (salicylic acid)
//         travels in the phloem to the uninfected leaves, which switch on PR
//         genes and are primed: the whole plant is readied. Comparison chips
//         with animal immune memory close the scene.
// All text from props.

import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {GLOSS, GlossDefs, H, Lines, PAL, Title, W, bioBeats, clamp, fadeAt, popAt, shade, textWidth, wrap} from './shared';

type Beats = {
	plant: number; spores: number; roots: number; xylem: number; block: number; wilt: number; tyloses: number; late: number; persist: number; clones: number; noVar: number; history: number;
	lesion: number; signal: number; phloem: number; pr: number; whole: number; compare: number; broad: number; short: number;
};
export type PlantProps = {
	mode?: 'panama' | 'sar';
	title?: string;
	labels?: Partial<Record<'fungus' | 'xylem' | 'block' | 'wilt' | 'tyloses' | 'late' | 'persist' | 'clones' | 'noVar' | 'history' | 'lesion' | 'signal' | 'pr' | 'whole' | 'compare' | 'broad' | 'short', string>>;
	beats?: Partial<Beats>;
	delay?: number;
};

const ID = 'b12m7pl';
const ease = Easing.inOut(Easing.cubic);
const GREEN = '#5f9e3a';
const YELLOW = '#d6c040';
const BROWN = '#8a6a3a';
const mix = (a: string, c: string, t: number) => {
	const pa = parseInt(a.slice(1), 16);
	const pc = parseInt(c.slice(1), 16);
	const ch = (s: number) => Math.round(((pa >> s) & 255) * (1 - t) + ((pc >> s) & 255) * t);
	return `#${((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1)}`;
};

/** A long banana leaf from (x, y) at angle a (deg), drooping by `droop` (0..1). */
const BananaLeaf = ({x, y, a, len, color, droop}: {x: number; y: number; a: number; len: number; color: string; droop: number}) => {
	const ang = ((a + droop * (a > -90 ? 50 : -50)) * Math.PI) / 180;
	const ex = x + Math.cos(ang) * len;
	const ey = y + Math.sin(ang) * len + droop * len * 0.35;
	const mx = x + Math.cos(ang) * len * 0.5;
	const my = y + Math.sin(ang) * len * 0.5 - 14 * (1 - droop);
	const nx = -Math.sin(ang) * 20;
	const ny = Math.cos(ang) * 20;
	return (
		<g>
			<path d={`M ${x} ${y} Q ${mx + nx} ${my + ny} ${ex} ${ey} Q ${mx - nx} ${my - ny} ${x} ${y} Z`} fill={color} stroke={shade(color, -0.3)} strokeWidth={1.2} />
			<path d={`M ${x} ${y} Q ${mx} ${my} ${ex} ${ey}`} fill="none" stroke={shade(color, -0.25)} strokeWidth={2} />
		</g>
	);
};

export const PlantDiagram = ({mode = 'panama', title, labels = {}, beats, delay = 62}: PlantProps) => {
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const b = bioBeats<Beats>({
		plant: 10, spores: 100, roots: 200, xylem: 260, block: 360, wilt: 500, tyloses: 600, late: 700, persist: 800, clones: 1000, noVar: 1100, history: 1300,
		lesion: 10, signal: 200, phloem: 260, pr: 400, whole: 600, compare: 800, broad: 950, short: 1100,
	}, beats);
	const pulse = idlePulse(frame);
	const top = title ? 40 : 0;

	if (mode === 'panama') {
		const cx = 250;
		const soilY = top + 330; // plinth top / soil surface
		const stemTop = top + 170;
		const fungus = interpolate(frame, [b.roots, b.block], [0, 1], {...clamp, easing: ease});
		const wilt = interpolate(frame, [b.wilt, b.wilt + 120], [0, 1], {...clamp, easing: ease});
		const flowOn = 1 - fadeAt(frame, b.block, 30);
		const leafColor = mix(mix(GREEN, YELLOW, Math.min(1, wilt * 1.4)), BROWN, Math.max(0, wilt - 0.6) * 1.5);
		const clonesOn = popAt(frame, fps, b.clones);
		const cloneX = [520, 610, 700];
		const cloneWilt = interpolate(frame, [b.noVar, b.noVar + 90], [0, 1], {...clamp, easing: ease});
		const Mini = ({x, i}: {x: number; i: number}) => {
			const c = mix(GREEN, YELLOW, cloneWilt);
			return (
				<g transform={`translate(0, ${(1 - Math.min(1, clonesOn)) * 30})`} opacity={Math.min(1, clonesOn * 1.4)}>
					<DioramaPlinth id={`${ID}m${i}`} cx={x} cy={soilY + 6} rx={42} />
					<rect x={x - 5} y={soilY - 70} width={10} height={72} rx={4} fill="#9aa860" />
					{[-150, -110, -70, -30].map((a, k) => <BananaLeaf key={k} x={x} y={soilY - 68} a={a} len={46} color={c} droop={cloneWilt * 0.8} />)}
				</g>
			);
		};
		return (
			<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Panama disease'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
				<DioramaDefs id={ID} />
				<GlossDefs id={ID} colors={GLOSS} />
				{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
				<g opacity={fadeAt(frame, 0, 14)}>
					<DioramaPlinth id={ID} cx={cx} cy={soilY} rx={190} />
				</g>
				{/* soil cut-away in the plinth front */}
				<g opacity={fadeAt(frame, b.plant, 14)}>
					<path d={`M ${cx - 110} ${soilY + 6} L ${cx + 110} ${soilY + 6} L ${cx + 100} ${soilY + 92} L ${cx - 100} ${soilY + 92} Z`} fill="#8a6440" stroke="#5a3f28" strokeWidth={2} />
					{/* roots */}
					{[-60, -25, 20, 55].map((dx, k) => (
						<path key={k} d={`M ${cx} ${soilY + 8} Q ${cx + dx * 0.5} ${soilY + 40} ${cx + dx} ${soilY + 78}`} fill="none" stroke="#d9c79a" strokeWidth={4} strokeLinecap="round" />
					))}
					{/* fungus in the roots */}
					{[-60, -25, 20, 55].map((dx, k) => (
						<path key={`f${k}`} d={`M ${cx + dx} ${soilY + 78} Q ${cx + dx * 0.5} ${soilY + 40} ${cx} ${soilY + 8}`} fill="none" stroke={PAL.fungus} strokeWidth={4} strokeLinecap="round" pathLength={1} strokeDasharray={`${Math.min(1, fungus * 2.5)} 1`} />
					))}
				</g>
				{/* spores in the soil */}
				<g opacity={fadeAt(frame, b.spores)}>
					{Array.from({length: 12}, (_, k) => (
						<circle key={k} cx={cx - 90 + ((k * 53) % 180)} cy={soilY + 20 + ((k * 29) % 64)} r={4 + (frame >= b.persist ? pulse * 1.5 : 0)} fill={`url(#${ID}-ball-fungus)`} />
					))}
				</g>
				{/* pseudostem with xylem */}
				<g opacity={fadeAt(frame, b.plant, 14)}>
					<rect x={cx - 22} y={stemTop} width={44} height={soilY - stemTop + 4} rx={12} fill="#a9b56a" stroke="#6f7a3e" strokeWidth={1.5} />
					<rect x={cx - 4} y={stemTop + 10} width={8} height={soilY - stemTop - 4} rx={4} fill="#dfeaf2" />
					{/* water flow up the xylem */}
					{flowOn > 0 &&
						Array.from({length: 7}, (_, k) => {
							const t = ((frame * 1.4 + k * 18) % 126) / 126;
							return <rect key={k} x={cx - 3} y={soilY - 8 - t * (soilY - stemTop - 20)} width={6} height={10} rx={3} fill={PAL.water} opacity={flowOn * (0.4 + 0.6 * Math.sin(t * Math.PI))} />;
						})}
					{/* fungus up the xylem */}
					<rect x={cx - 4} y={soilY - (soilY - stemTop - 10) * Math.max(0, fungus - 0.35) / 0.65} width={8} height={(soilY - stemTop - 10) * Math.max(0, fungus - 0.35) / 0.65} rx={4} fill={PAL.fungus} />
					{/* tyloses and gums: plugs, too late */}
					{[0.25, 0.5, 0.72].map((f, k) => (
						<circle key={k} cx={cx} cy={soilY - (soilY - stemTop) * f} r={7} fill="#f0e2b0" stroke="#b09a5a" strokeWidth={1.5} opacity={fadeAt(frame, b.tyloses + k * 12)} />
					))}
					{[-160, -125, -95, -60, -25].map((a, k) => (
						<BananaLeaf key={k} x={cx} y={stemTop + 6} a={a} len={165 - Math.abs(a + 92) * 0.35} color={leafColor} droop={wilt * 0.9 + Math.sin(frame / 40 + k) * 0.02} />
					))}
				</g>
				{/* labels */}
				<Lines x={cx - 150} y={soilY + 128} lines={wrap(labels.fungus ?? 'soil fungus: Fusarium oxysporum', 40)} size={16} color={PAL.fungus} anchor="start" opacity={fadeAt(frame, b.spores)} />
				<g opacity={fadeAt(frame, b.xylem) * (1 - fadeAt(frame, b.block, 10))}>
					<text x={cx + 180} y={top + 190} fill={PAL.water} fontSize={16} fontWeight={800}>{labels.xylem ?? 'enters roots, grows up the xylem'}</text>
				</g>
				<g opacity={fadeAt(frame, b.block) * (1 - fadeAt(frame, b.tyloses, 10))}>
					<text x={cx + 180} y={top + 190} fill={PAL.stop} fontSize={16} fontWeight={800}>{labels.block ?? 'xylem blocked: no water up'}</text>
				</g>
				<g opacity={fadeAt(frame, b.tyloses)}>
					<Lines x={cx + 180} y={top + 190} lines={wrap(labels.tyloses ?? 'tyloses, gums, antifungals', 26)} size={16} color={TOK.inkDim} anchor="start" />
					<text x={cx + 180} y={top + 236} fill={TOK.amberInk} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.late)}>{labels.late ?? 'too slow'}</text>
				</g>
				<text x={cx} y={top + 24} textAnchor="middle" fill={shade(YELLOW, -0.35)} fontSize={17} fontWeight={800} opacity={fadeAt(frame, b.wilt + 40)}>{labels.wilt ?? 'leaves yellow, wilt, die'}</text>
				<Lines x={cx - 150} y={soilY + 150} lines={wrap(labels.persist ?? 'spores survive in soil for decades', 40)} size={16} color={TOK.inkDim} anchor="start" opacity={fadeAt(frame, b.persist)} />
				{/* clones */}
				{frame >= b.clones && cloneX.map((x, i) => <Mini key={i} x={x} i={i} />)}
				<Lines x={610} y={soilY + 70} lines={wrap(labels.clones ?? 'Cavendish: grown from suckers, all clones', 24)} size={16} color={theme.accent} opacity={fadeAt(frame, b.clones + 20)} />
				<Lines x={610} y={soilY + 112} lines={wrap(labels.noVar ?? 'no variation: all susceptible', 24)} size={16} color={TOK.amberInk} opacity={fadeAt(frame, b.noVar)} />
				{labels.history && <text x={W / 2} y={H - 8} textAnchor="middle" fill={TOK.inkDim} fontSize={16} fontWeight={800} opacity={fadeAt(frame, b.history)}>{labels.history}</text>}
			</svg>
		);
	}

	// ── SAR ──
	const cx = 290;
	const baseY = top + 380;
	const stemTop = top + 90;
	const leaves = [
		{y: 0.84, s: -1},
		{y: 0.68, s: 1},
		{y: 0.52, s: -1},
		{y: 0.38, s: 1},
		{y: 0.24, s: -1},
		{y: 0.12, s: 1},
	].map((l) => ({...l, py: stemTop + (baseY - stemTop) * l.y}));
	const infected = 0;
	const sigT = (i: number) => interpolate(frame, [b.phloem + Math.abs(leaves[i].y - leaves[infected].y) * 200, b.phloem + Math.abs(leaves[i].y - leaves[infected].y) * 200 + 40], [0, 1], clamp);
	const primed = (i: number) => (i === infected ? 0 : fadeAt(frame, b.pr + i * 16, 16));
	const chip = (text: string, x: number, y: number, at: number, c: string, fill = '#ffffff') => {
		const p = popAt(frame, fps, at);
		if (p <= 0) return null;
		const w = textWidth(text, 16) + 24;
		return (
			<g transform={`translate(${x},${y}) scale(${Math.min(1, p)})`}>
				<rect x={-w / 2} y={-15} width={w} height={30} rx={15} fill={fill} stroke={c} strokeWidth={2} />
				<text y={6} textAnchor="middle" fill={c} fontSize={16} fontWeight={800}>{text}</text>
			</g>
		);
	};
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title ?? 'Systemic acquired resistance'} style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<GlossDefs id={ID} colors={GLOSS} />
			{title && <Title text={title} opacity={fadeAt(frame, 0)} />}
			<g opacity={fadeAt(frame, 0, 14)}>
				<DioramaPlinth id={ID} cx={cx} cy={baseY} rx={160} />
			</g>
			<g opacity={fadeAt(frame, b.lesion - 10, 14)}>
				<rect x={cx - 7} y={stemTop} width={14} height={baseY - stemTop} rx={6} fill={shade(GREEN, -0.1)} />
				{/* phloem path */}
				<line x1={cx} y1={stemTop + 6} x2={cx} y2={baseY - 4} stroke="#e8f0c8" strokeWidth={3} opacity={fadeAt(frame, b.phloem)} />
				{leaves.map((l, i) => {
					const lx = cx + l.s * 8;
					const ex = cx + l.s * 150;
					const ey = l.py - 26 + Math.sin(frame / 38 + i) * 2;
					const pr = primed(i);
					return (
						<g key={i}>
							{pr > 0 && <path d={`M ${lx} ${l.py} Q ${cx + l.s * 80} ${l.py - 60} ${ex} ${ey} Q ${cx + l.s * 80} ${l.py + 16} ${lx} ${l.py} Z`} fill="none" stroke={theme.accent} strokeWidth={6 + pulse * 2} opacity={0.35 * pr} />}
							<path d={`M ${lx} ${l.py} Q ${cx + l.s * 80} ${l.py - 60} ${ex} ${ey} Q ${cx + l.s * 80} ${l.py + 16} ${lx} ${l.py} Z`} fill={`url(#${ID}-ball-plant)`} stroke={shade(GREEN, -0.3)} strokeWidth={1.2} />
							<path d={`M ${lx} ${l.py} Q ${cx + l.s * 80} ${l.py - 22} ${ex} ${ey}`} fill="none" stroke={shade(GREEN, -0.25)} strokeWidth={1.5} />
							{i === infected && (
								<g opacity={fadeAt(frame, b.lesion)}>
									<ellipse cx={cx + l.s * 90} cy={l.py - 18} rx={16} ry={10} fill={BROWN} stroke="#5a3f28" />
									<ellipse cx={cx + l.s * 90} cy={l.py - 18} rx={24} ry={15} fill="none" stroke={BROWN} strokeWidth={2} strokeDasharray="3 3" />
								</g>
							)}
							{/* signal dots travelling along the leaf vein into the stem / out to the leaf */}
							{i !== infected && sigT(i) > 0 && sigT(i) < 1 && <circle cx={cx + l.s * 80 * sigT(i)} cy={l.py - 12 * sigT(i)} r={6} fill={theme.accent} />}
							{pr > 0 && i === 2 && <text x={cx + l.s * 164} y={l.py - 30} textAnchor={l.s > 0 ? 'start' : 'end'} fill={theme.accent} fontSize={15} fontWeight={800} opacity={pr}>PR proteins</text>}
						</g>
					);
				})}
				{/* signal up/down the phloem */}
				{frame >= b.phloem &&
					Array.from({length: 6}, (_, k) => {
						const t = ((frame - b.phloem + k * 14) % 84) / 84;
						return <circle key={k} cx={cx} cy={leaves[infected].py - t * (leaves[infected].py - stemTop)} r={5} fill={theme.accent} opacity={Math.sin(t * Math.PI) * (1 - fadeAt(frame, b.whole + 200, 40))} />;
					})}
			</g>
			<Lines x={cx - 170} y={leaves[infected].py + 30} lines={wrap(labels.lesion ?? 'local infection: HR lesion', 20)} size={16} color={BROWN} anchor="start" opacity={fadeAt(frame, b.lesion)} />
			<g opacity={fadeAt(frame, b.signal)}>
				<Lines x={cx + 30} y={baseY - 30} lines={wrap(labels.signal ?? 'salicylic acid travels in the phloem', 24)} size={16} color={theme.accent} anchor="start" />
			</g>
			<text x={cx} y={top + 40} textAnchor="middle" fill={TOK.amberInk} fontSize={19} fontWeight={800} opacity={fadeAt(frame, b.whole)}>{labels.whole ?? 'One local hit, whole-plant readiness'}</text>
			{/* comparison with animal immune memory */}
			<g opacity={fadeAt(frame, b.compare)}>
				<rect x={W - 246} y={top + 150} width={236} height={196} rx={14} fill="#ffffff" stroke={TOK.rule} />
				<Lines x={W - 128} y={top + 180} lines={wrap(labels.compare ?? 'vs animal immune memory', 18)} size={16} color={TOK.ink} />
			</g>
			{chip(labels.broad ?? 'broad, not specific', W - 128, top + 250, b.broad, TOK.inkDim)}
			{chip(labels.short ?? 'days to weeks, not life', W - 128, top + 300, b.short, TOK.inkDim)}
		</svg>
	);
};
