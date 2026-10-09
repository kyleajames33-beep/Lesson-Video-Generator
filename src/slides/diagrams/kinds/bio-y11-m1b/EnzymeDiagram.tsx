// EnzymeDiagram (bio11m1bEnzyme) — an enzyme and its substrate on a stone
// plinth, in seven teaching modes. The shapes are geometry, not pictures: the
// active site is a notch cut into the enzyme and the substrate is the block
// whose lower part has exactly that notch's shape, so "fits" and "doesn't fit"
// are literally true on screen.
//
// mode 'cycle'       substrate binds at the active site → enzyme–substrate
//                    complex → products released → the SAME enzyme takes the
//                    next substrate. A counter of reactions catalysed is
//                    computed from the loops played; a wrong-shaped molecule
//                    is turned away (specificity).
// mode 'lockKey'     rigid active site: the substrate slots in, the site never
//                    changes shape; a wrong shape is rejected.
// mode 'inducedFit'  the site starts as a looser, open shape and moulds around
//                    the correct substrate as it binds (grips, strains its
//                    bonds); a wrong shape induces no change and is rejected.
// mode 'compare'     both models side by side, with the "same" and "different"
//                    rows building underneath.
// mode 'specific'    three enzymes, three substrate shapes: each substrate only
//                    fits its own enzyme; then one enzyme is switched off and
//                    only its reaction stops (independent control).
// mode 'denature'    heat or extreme pH distorts the active site permanently;
//                    the substrate no longer fits and bounces off.
// mode 'saturation'  a fixed number of enzymes; as substrate is added the sites
//                    fill until every one is busy and the extra substrate waits.
//
// Beats (`at`, frames after `delay`) are named per mode below; all labels are
// props or fixed biology terms. Hold: the counter/loop keeps going (cycle,
// saturation) or the pieces jostle (idleBob). Readable labels stay stable.

import type {ReactNode} from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {TOK, FONT_DISPLAY} from '../../../../styles/tokens';
import {useAccent} from '../../../../styles/theme';
import {DioramaDefs, DioramaPlinth, idleBob, idlePulse} from '../../diorama';
import {fadeAt, ease, lerp, mix, shade, CORAL, PURPLE, SLATE, Verdict, Flame, Ledge} from './shared';

type Mode = 'cycle' | 'lockKey' | 'inducedFit' | 'compare' | 'specific' | 'denature' | 'saturation';
export type EnzymeProps = {
	mode?: Mode;
	at?: Record<string, number>;
	/** 'specific': names under the three enzymes and substrates. */
	names?: {enzyme: string; substrate: string}[];
	/** 'denature': what causes it. */
	cause?: 'heat' | 'pH';
	/** 'compare': the two summary rows. */
	same?: string;
	different?: string;
	rule?: string;
	bindingLabel?: string;
	delay?: number;
};

const ID = 'b11m1bEnz';
const W = 760, H = 530;

// Notch geometry (the matching substrate uses the same numbers).
const TW = 64, BW = 34, D = 44, CAP = 26;
export type Notch = {tw: number; bw: number; d: number; round: number};
export const FIT: Notch = {tw: TW, bw: BW, d: D, round: 0};
const OPEN: Notch = {tw: 108, bw: 76, d: 40, round: 16};

/** Enzyme body with a notch in its top edge; (cx, top) = top-centre. */
export const enzymePath = (cx: number, top: number, w: number, h: number, n: Notch, shape: 'trap' | 'round' | 'square' = 'trap', warp = 0) => {
	const l = cx - w / 2, r = cx + w / 2, b = top + h, rr = h * 0.42;
	let notch: string;
	if (shape === 'round') {
		notch = `L ${cx + 30} ${top} A 30 30 0 0 1 ${cx - 30} ${top}`;
	} else if (shape === 'square') {
		notch = `L ${cx + 26} ${top} L ${cx + 26} ${top + 42} L ${cx - 26} ${top + 42} L ${cx - 26} ${top}`;
	} else {
		const wob = warp * 18;
		notch = `L ${cx + n.tw / 2 + wob} ${top - wob * 0.4} L ${cx + n.bw / 2 - wob * 0.8} ${top + n.d - wob} ` +
			(n.round > 0 ? `Q ${cx} ${top + n.d + n.round} ` : `L `) + `${cx - n.bw / 2 + wob * 1.2} ${top + n.d + wob * 0.6} L ${cx - n.tw / 2 - wob * 0.3} ${top + wob * 0.8}`;
	}
	const bulge = warp * 16;
	return `M ${cx - (shape === 'trap' ? n.tw / 2 : 30)} ${top} L ${l + rr} ${top - bulge * 0.3} Q ${l - bulge} ${top} ${l} ${top + rr} L ${l - bulge * 0.5} ${b - rr} Q ${l} ${b} ${l + rr} ${b} L ${r - rr} ${b + bulge * 0.3} Q ${r + bulge} ${b} ${r} ${b - rr} L ${r + bulge * 0.4} ${top + rr} Q ${r} ${top} ${r - rr} ${top} ${notch} Z`;
};

/** The matching substrate, anchored at its bottom-centre (sits on the notch floor). */
export const substratePath = (x: number, y: number, shape: 'trap' | 'round' | 'square' = 'trap') => {
	if (shape === 'round') return `M ${x - 28} ${y - 30} A 28 28 0 0 0 ${x + 28} ${y - 30} L ${x + 28} ${y - 52} Q ${x + 28} ${y - 62} ${x + 18} ${y - 62} L ${x - 18} ${y - 62} Q ${x - 28} ${y - 62} ${x - 28} ${y - 52} Z`;
	if (shape === 'square') return `M ${x - 24} ${y} L ${x + 24} ${y} L ${x + 24} ${y - 62} L ${x - 24} ${y - 62} Z`;
	return `M ${x - BW / 2} ${y} L ${x + BW / 2} ${y} L ${x + TW / 2} ${y - D} L ${x + TW / 2} ${y - D - CAP + 8} Q ${x + TW / 2} ${y - D - CAP} ${x + TW / 2 - 8} ${y - D - CAP} L ${x - TW / 2 + 8} ${y - D - CAP} Q ${x - TW / 2} ${y - D - CAP} ${x - TW / 2} ${y - D - CAP + 8} L ${x - TW / 2} ${y - D} Z`;
};
/** Half of the substrate after the reaction (side −1 left, +1 right). */
const productPath = (x: number, y: number, side: -1 | 1) => {
	const s = side;
	return `M ${x} ${y} L ${x + (s * BW) / 2} ${y} L ${x + (s * TW) / 2} ${y - D} L ${x + (s * TW) / 2} ${y - D - CAP} L ${x} ${y - D - CAP} Z`;
};

const Glossy = ({d, fill, stroke, opacity = 1, strokeWidth = 2.5}: {d: string; fill: string; stroke?: string; opacity?: number; strokeWidth?: number}) => (
	<g opacity={opacity}>
		<path d={d} fill={fill} stroke={stroke ?? shade(fill, -0.3)} strokeWidth={strokeWidth} strokeLinejoin="round" />
		<path d={d} fill={`url(#${ID}-sheen)`} />
	</g>
);

const Label = ({x, y, text, color = TOK.ink, size = 16, anchor = 'middle', opacity = 1}: {x: number; y: number; text: string; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end'; opacity?: number}) => (
	<text x={x} y={y} textAnchor={anchor} fill={color} fontSize={size} fontWeight={800} opacity={opacity}>{text}</text>
);

/** A pointer line from a label to a feature. */
const Pointer = ({x1, y1, x2, y2, opacity}: {x1: number; y1: number; x2: number; y2: number; opacity: number}) => (
	<g opacity={opacity}>
		<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={TOK.inkMute} strokeWidth={2} />
		<circle cx={x2} cy={y2} r={3.5} fill={TOK.inkMute} />
	</g>
);

export const EnzymeDiagram = (props: EnzymeProps) => {
	const {mode = 'cycle', delay = 62} = props;
	const frame = useCurrentFrame() - delay;
	const {fps} = useVideoConfig();
	const theme = useAccent();
	const ctx = {frame, fps, accent: theme.accent, at: props.at ?? {}, p: props};
	let body: ReactNode;
	if (mode === 'cycle') body = <Cycle {...ctx} />;
	else if (mode === 'lockKey' || mode === 'inducedFit') body = <Model {...ctx} kind={mode} cx={W / 2} top={250} big />;
	else if (mode === 'compare') body = <Compare {...ctx} />;
	else if (mode === 'specific') body = <Specific {...ctx} />;
	else if (mode === 'denature') body = <Denature {...ctx} />;
	else body = <Saturation {...ctx} />;
	return (
		<svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Enzyme and substrate at the active site" style={{width: '100%', fontFamily: FONT_DISPLAY}}>
			<DioramaDefs id={ID} />
			<defs>
				<linearGradient id={`${ID}-sheen`} x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stopColor="#ffffff" stopOpacity={0.35} />
					<stop offset="45%" stopColor="#ffffff" stopOpacity={0.05} />
					<stop offset="100%" stopColor="#000000" stopOpacity={0.12} />
				</linearGradient>
			</defs>
			{body}
			{props.rule && (
				<text x={W / 2} y={H - 12} textAnchor="middle" fill={TOK.amberInk} fontSize={20} fontWeight={800} opacity={fadeAt(frame, props.at?.rule ?? 9999)}>{props.rule}</text>
			)}
		</svg>
	);
};

type Ctx = {frame: number; fps: number; accent: string; at: Record<string, number>; p: EnzymeProps};

// ── cycle ────────────────────────────────────────────────────────────────
const Cycle = ({frame, accent, at}: Ctx) => {
	const cx = 380, top = 262, w = 250, h = 124;
	const tE = at.enzyme ?? 10, tS = at.substrate ?? 60, tB = at.bind ?? 110, tX = at.react ?? 170, tP = at.release ?? 220, tA = at.again ?? 300, tWr = at.wrong ?? 9999;
	const tLab = at.labels ?? tE + 20;
	// After `again`, the cycle loops every LOOP frames: each loop = one more reaction.
	const LOOP = 96;
	const loops = frame < tA ? 0 : Math.floor((frame - tA) / LOOP) + 1;
	const lf = frame < tA ? -1 : (frame - tA) % LOOP;
	// Phase values for the current substrate
	let approach: number, split: number, leave: number;
	if (lf < 0) {
		approach = ease(frame, tS, tB);
		split = ease(frame, tX, tX + 24);
		leave = ease(frame, tP, tP + 50);
	} else {
		approach = ease(lf, 0, 30);
		split = ease(lf, 38, 52);
		leave = ease(lf, 56, 90);
	}
	const count = (frame >= tX + 12 ? 1 : 0) + Math.max(0, loops - 1) + (lf >= 44 ? 1 : 0);
	const seatY = top + D;
	const sx = lerp(cx + 170, cx, approach), sy = lerp(seatY - 150, seatY, approach);
	const showSub = frame >= tS - 10 && (lf >= 0 || split < 1);
	// Old products from previous cycle drifting off (both sides)
	const prod = (side: -1 | 1) => {
		const px = cx + side * lerp(0, 150, leave), py = seatY - lerp(0, 120, leave) + (1 - leave) * 0;
		return <Glossy key={side} d={productPath(px + side * 6 * split, py, side)} fill={mix(CORAL, '#ffffff', 0.25)} opacity={1 - Math.max(0, leave - 0.75) * 4} />;
	};
	// Wrong-shaped molecule: approaches from the left, bounces off
	const wr = frame - tWr;
	const wrongX = wr < 0 ? -100 : wr < 34 ? lerp(cx - 230, cx - 60, ease(wr, 0, 34)) : lerp(cx - 60, cx - 250, ease(wr, 34, 70));
	const wrongY = wr < 34 ? lerp(seatY - 140, seatY - 60, ease(wr, 0, 34)) : lerp(seatY - 60, seatY - 180, ease(wr, 34, 70));
	const inLoop = frame > tA + 20;
	return (
		<g>
			<g opacity={fadeAt(frame, tE, 14)}>
				<DioramaPlinth id={ID} cx={cx} cy={top + h + 6} rx={200} />
				<Glossy d={enzymePath(cx, top + idleBob(frame, 1, inLoop ? 0.6 : 0), w, h, FIT)} fill={accent} />
			</g>
			{/* products */}
			{(split > 0) && [-1, 1].map((sd) => prod(sd as -1 | 1))}
			{/* substrate (whole) */}
			{showSub && split <= 0 && <Glossy d={substratePath(sx, sy)} fill={CORAL} />}
			{/* wrong shape */}
			{wr >= 0 && wr < 80 && (
				<g>
					<circle cx={wrongX} cy={wrongY} r={30} fill={PURPLE} stroke={shade(PURPLE, -0.3)} strokeWidth={2.5} />
					{wr > 26 && wr < 60 && <Verdict x={wrongX + 30} y={wrongY - 30} ok={false} r={12} />}
				</g>
			)}
			{/* labels */}
			<Label x={cx} y={top + h - 30} text="enzyme" color="#ffffff" size={20} opacity={fadeAt(frame, tLab)} />
			<Pointer x1={cx - 190} y1={top - 60} x2={cx - 26} y2={top + 20} opacity={fadeAt(frame, tLab + 10)} />
			<Label x={cx - 190} y={top - 68} text="active site" opacity={fadeAt(frame, tLab + 10)} />
			<Label x={cx + 200} y={top - 150} text="substrate" color={CORAL} opacity={fadeAt(frame, tS) * (1 - fadeAt(frame, tB))} />
			<Label x={cx} y={top - 110} text="enzyme–substrate complex" color={TOK.ink} opacity={fadeAt(frame, tB) * (1 - fadeAt(frame, tX + 10))} />
			<Label x={cx} y={top - 150} text="products released" color={CORAL} opacity={fadeAt(frame, tP) * (1 - fadeAt(frame, tA))} />
			<Label x={cx} y={top - 150} text="enzyme unchanged: used again" color={TOK.amberInk} size={18} opacity={fadeAt(frame, tA)} />
			{/* step strip */}
			{[['1', 'binds', tB], ['2', 'reacts', tX], ['3', 'released', tP]].map(([n, t, b], i) => (
				<g key={i} opacity={fadeAt(frame, b as number)}>
					<circle cx={180 + i * 200} cy={40} r={15} fill={accent} />
					<text x={180 + i * 200} y={46} textAnchor="middle" fill="#ffffff" fontSize={16} fontWeight={800}>{n}</text>
					<Label x={202 + i * 200} y={46} text={t as string} anchor="start" />
				</g>
			))}
			{/* counter */}
			<g opacity={fadeAt(frame, tA)}>
				<rect x={W - 178} y={H - 96} width={166} height={44} rx={12} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				<Label x={W - 95} y={H - 67} text={`reactions: ${count}`} color={TOK.ink} size={18} />
			</g>
		</g>
	);
};

// ── lock-and-key / induced fit ───────────────────────────────────────────
const Model = ({frame, accent, at, p, kind, cx, top, big}: Ctx & {kind: 'lockKey' | 'inducedFit'; cx: number; top: number; big?: boolean}) => {
	const pre = big ? '' : kind === 'lockKey' ? 'l_' : 'i_';
	const g = (k: string, d: number) => at[pre + k] ?? at[k] ?? d;
	const tE = g('enzyme', 10), tS = g('substrate', 60), tFit = g('fit', 120), tMould = g('mould', 120), tGrip = g('grip', 170), tStrain = g('strain', 9999), tWr = g('wrong', 9999), tCx = g('complex', tFit + 40);
	const s = big ? 1 : 0.85;
	const w = 250 * s, h = 124 * s;
	const induced = kind === 'inducedFit';
	const approach = ease(frame, tS, g('approach', induced ? tMould : tFit));
	const mould = induced ? ease(frame, tMould, tGrip) : 1;
	const notch: Notch = induced ? {tw: lerp(OPEN.tw, TW, mould), bw: lerp(OPEN.bw, BW, mould), d: lerp(OPEN.d, D, mould), round: lerp(OPEN.round, 0, mould)} : FIT;
	const seatY = D;
	const sy = lerp(seatY - 170, seatY, approach);
	const strain = induced ? fadeAt(frame, tStrain) : 0;
	const settled = frame > (induced ? tGrip : tFit) + 20;
	const wr = frame - tWr;
	const wrongY = wr < 0 ? -999 : wr < 30 ? lerp(-150, -6, ease(wr, 0, 30)) : lerp(-6, -170, ease(wr, 30, 64));
	const wrongX = wr < 30 ? lerp(140, 70, ease(wr, 0, 30)) : lerp(70, 180, ease(wr, 30, 64));
	return (
		<g transform={`translate(${cx},${top}) scale(${s}) translate(${-cx},${-top})`}>
			<g opacity={fadeAt(frame, tE, 14)}>
				<DioramaPlinth id={`${ID}${pre}`} cx={cx} cy={top + h / s + 6} rx={big ? 190 : 150} />
				<Glossy d={enzymePath(cx, top, 250, 124, notch)} fill={accent} />
				{induced && mould > 0 && <path d={enzymePath(cx, top, 250, 124, OPEN)} fill="none" stroke={TOK.inkDim} strokeWidth={2.5} strokeDasharray="6 6" opacity={0.7 * mould} />}
				<Label x={cx} y={top + 94} text="enzyme" color="#ffffff" size={20} />
			</g>
			{/* substrate */}
			<g opacity={fadeAt(frame, tS - 8, 10)} transform={`translate(0,${settled ? idleBob(frame, 2, 0.6) : 0})`}>
				<Glossy d={substratePath(cx, top + sy)} fill={CORAL} />
				{strain > 0 && (
					<g opacity={strain * (0.6 + 0.4 * idlePulse(frame, 30))}>
						{[-1, 1].map((sd) => (
							<path key={sd} d={`M ${cx + sd * 8} ${top + sy - 58} l ${sd * 6} 8 l ${-sd * 6} 8 l ${sd * 6} 8`} fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
						))}
					</g>
				)}
			</g>
			{/* wrong shape: a square block that cannot enter */}
			{wr >= 0 && wr < 70 && (
				<g>
					<rect x={cx + wrongX - 30} y={top + wrongY - 60} width={60} height={60} rx={6} fill={PURPLE} stroke={shade(PURPLE, -0.3)} strokeWidth={2.5} />
					{wr > 22 && wr < 56 && <Verdict x={cx + wrongX + 34} y={top + wrongY - 64} ok={false} r={13} />}
				</g>
			)}
			{/* labels */}
			{big && (
				<>
					<Pointer x1={cx - 210} y1={top - 70} x2={cx - notch.tw / 2 + 6} y2={top + 10} opacity={fadeAt(frame, tE + 20)} />
					<Label x={cx - 210} y={top - 78} text={induced ? 'active site (flexible)' : 'active site (rigid)'} opacity={fadeAt(frame, tE + 20)} />
					<Label x={cx + 200} y={top - 150} text="substrate" color={CORAL} opacity={fadeAt(frame, tS) * (1 - fadeAt(frame, tCx))} />
					{induced && <Label x={cx + 200} y={top - 40} text="site moulds around it" color={accent} opacity={fadeAt(frame, tMould) * (1 - fadeAt(frame, tGrip + 30))} />}
					{induced && <Label x={cx + 200} y={top - 40} text={p.bindingLabel ?? 'grips it tightly'} color={accent} opacity={fadeAt(frame, tGrip + 30)} />}
					{!induced && <Label x={cx + 200} y={top - 40} text="exact fit, no change" color={accent} opacity={fadeAt(frame, tFit + 10)} />}
					<Label x={cx} y={top - 190} text="enzyme–substrate complex" opacity={fadeAt(frame, tCx)} size={18} />
					{induced && <Label x={cx} y={top - 150} text="the tight grip strains the substrate's bonds" color={TOK.inkDim} size={16} opacity={strain} />}
				</>
			)}
		</g>
	);
};

// ── compare ──────────────────────────────────────────────────────────────
const Compare = (c: Ctx) => {
	const {frame, at, p} = c;
	const tSame = at.same ?? 9999, tDiff = at.different ?? 9999;
	return (
		<g>
			<Label x={200} y={40} text="lock-and-key" size={20} color={TOK.ink} opacity={fadeAt(c.frame, at.l_enzyme ?? 0)} />
			<Label x={200} y={62} text="Fischer, 1894" size={15} color={TOK.inkDim} opacity={fadeAt(c.frame, at.l_enzyme ?? 0)} />
			<Label x={560} y={40} text="induced fit" size={20} color={TOK.ink} opacity={fadeAt(c.frame, at.i_enzyme ?? 0)} />
			<Label x={560} y={62} text="Koshland, 1958" size={15} color={TOK.inkDim} opacity={fadeAt(c.frame, at.i_enzyme ?? 0)} />
			<Model {...c} kind="lockKey" cx={200} top={214} />
			<Model {...c} kind="inducedFit" cx={560} top={214} />
			<g opacity={fadeAt(frame, tSame)}>
				<rect x={40} y={390} width={680} height={42} rx={12} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				<Verdict x={66} y={411} ok r={11} />
				<Label x={86} y={417} anchor="start" text={`Same: ${p.same ?? 'both explain specificity; both form a complex'}`} size={16} />
			</g>
			<g opacity={fadeAt(frame, tDiff)}>
				<rect x={40} y={440} width={680} height={42} rx={12} fill="#ffffff" stroke={TOK.rule} strokeWidth={2} />
				<text x={66} y={468} textAnchor="middle" fill={TOK.amberInk} fontSize={22} fontWeight={800}>≠</text>
				<Label x={86} y={467} anchor="start" text={`Different: ${p.different ?? 'rigid site vs flexible site'}`} size={16} />
			</g>
		</g>
	);
};

// ── specific ─────────────────────────────────────────────────────────────
const Specific = ({frame, accent, at, p}: Ctx) => {
	const shapes: ('trap' | 'round' | 'square')[] = ['trap', 'round', 'square'];
	const cols = [mix(accent, '#ffffff', 0.0), shade(accent, -0.12), mix(accent, '#2a9d8f', 0.5)];
	const names = p.names ?? [{enzyme: 'enzyme A', substrate: 'substrate A'}, {enzyme: 'enzyme B', substrate: 'substrate B'}, {enzyme: 'enzyme C', substrate: 'substrate C'}];
	const tE = at.enzymes ?? 10, tS = at.substrates ?? 70, tM = at.match ?? 140, tOff = at.off ?? 9999, tRun = at.run ?? tM + 60;
	const xs = [140, 380, 620], top = 262;
	// Substrates start shuffled on top (order: square, trap, round), then drop into their own enzyme.
	const startX = [380, 620, 140];
	const LOOP = 90;
	return (
		<g>
			<Ledge x={30} y={top + 96} w={700} />
			<Label x={380} y={96} text="each active site fits only its own substrate" size={18} opacity={fadeAt(frame, tM)} />
			{shapes.map((sh, i) => {
				const off = i === 1 && frame >= tOff;
				const offT = ease(frame, tOff, tOff + 20);
				const fill = i === 1 ? mix(cols[i], SLATE, offT) : cols[i];
				const m = ease(frame, tM + i * 12, tM + i * 12 + 36);
				const sx = lerp(startX[i], xs[i], m), sy = lerp(top - 120, top + (sh === 'trap' ? D : sh === 'square' ? 42 : 30), m);
				// After tRun, each working enzyme keeps turning substrate over (products fade upward).
				const lf = frame < tRun ? -1 : (frame - tRun + i * 30) % LOOP;
				const pulseOut = lf >= 0 && !off ? ease(lf, 0, 40) : 0;
				return (
					<g key={i}>
						<g opacity={fadeAt(frame, tE + i * 8, 12)}>
							<Glossy d={enzymePath(xs[i], top, 200, 96, FIT, sh)} fill={fill} />
							<Label x={xs[i]} y={top + 150} text={names[i].enzyme} color={off ? SLATE : TOK.ink} size={16} />
						</g>
						<g opacity={fadeAt(frame, tS + i * 6, 12) * (off && m >= 1 ? 1 - offT * 0.5 : 1)}>
							<Glossy d={substratePath(sx, sy - (lf >= 0 && !off ? pulseOut * 0 : 0), sh)} fill={CORAL} />
							<Label x={sx} y={sy - 76} text={names[i].substrate} color={CORAL} size={15} opacity={1 - m * 0.0} />
						</g>
						{lf >= 0 && !off && (
							<g opacity={1 - pulseOut}>
								<circle cx={xs[i] - 20} cy={top - 70 - pulseOut * 40} r={7} fill={mix(CORAL, '#ffffff', 0.3)} />
								<circle cx={xs[i] + 20} cy={top - 70 - pulseOut * 40} r={7} fill={mix(CORAL, '#ffffff', 0.3)} />
							</g>
						)}
						{off && (
							<g opacity={offT}>
								<Verdict x={xs[i] + 80} y={top + 10} ok={false} r={14} />
								<Label x={xs[i]} y={top + 172} text="switched off" color={TOK.amberInk} size={16} />
							</g>
						)}
						{m >= 1 && !off && <Verdict x={xs[i] + 80} y={top + 10} ok r={13} opacity={fadeAt(frame, tM + i * 12 + 36)} />}
					</g>
				);
			})}
		</g>
	);
};

// ── denature ─────────────────────────────────────────────────────────────
const Denature = ({frame, accent, at, p}: Ctx) => {
	const cx = 380, top = 262;
	const tE = at.enzyme ?? 10, tFit = at.fit ?? 60, tC = at.cause ?? 140, tWarp = at.warp ?? 180, tNo = at.nofit ?? 240, tPerm = at.permanent ?? 9999;
	const fit = ease(frame, tFit, tFit + 30);
	const leaveFirst = ease(frame, tC - 10, tC + 20); // the bound substrate is released before the damage
	const warp = ease(frame, tWarp, tWarp + 50);
	const seatY = D;
	const sx = cx + lerp(160, 0, fit) + lerp(0, 170, leaveFirst);
	const sy = top + lerp(seatY - 160, seatY, fit) - lerp(0, 150, leaveFirst);
	const nr = frame - tNo;
	const noX = nr < 0 ? cx + 170 : nr < 34 ? lerp(cx + 170, cx + 8, ease(nr, 0, 34)) : lerp(cx + 8, cx + 190, ease(nr, 34, 70));
	const noY = nr < 34 ? top + lerp(-120, -4, ease(Math.max(0, nr), 0, 34)) : top + lerp(-4, -150, ease(nr, 34, 70));
	const heat = p.cause !== 'pH';
	return (
		<g>
			<g opacity={fadeAt(frame, tE, 14)}>
				<DioramaPlinth id={ID} cx={cx} cy={top + 130} rx={200} />
				<Glossy d={enzymePath(cx, top + idleBob(frame, 3, warp > 0 ? 0.8 : 0), 250, 124, FIT, 'trap', warp)} fill={mix(accent, SLATE, warp * 0.45)} />
				<Label x={cx} y={top + 94} text={warp > 0.5 ? 'denatured enzyme' : 'enzyme'} color="#ffffff" size={19} />
			</g>
			{frame < tNo && <Glossy d={substratePath(sx, sy)} fill={CORAL} opacity={fadeAt(frame, tFit - 10)} />}
			<Label x={cx} y={top - 176} text="fits at the optimum" color={accent} opacity={fadeAt(frame, tFit + 20) * (1 - fadeAt(frame, tC))} />
			{/* cause */}
			<g opacity={fadeAt(frame, tC)}>
				{heat ? (
					<>
						{[-150, 0, 150].map((dx, i) => <Flame key={i} x={cx + dx} y={top + 188} s={0.8} frame={frame + i * 9} />)}
						<Label x={cx - 250} y={top - 120} text="too hot" color="#c0473a" size={20} />
					</>
				) : (
					<Label x={cx - 250} y={top - 120} text="pH too far from the optimum" color="#c0473a" size={18} anchor="start" />
				)}
			</g>
			<Label x={cx} y={top - 176} text="bonds holding the shape break" color="#c0473a" opacity={fadeAt(frame, tWarp) * (1 - fadeAt(frame, tNo))} />
			{nr >= 0 && (
				<g>
					<Glossy d={substratePath(noX, noY)} fill={CORAL} />
					{nr > 26 && <Verdict x={noX + 44} y={noY - 80} ok={false} r={14} opacity={nr < 70 ? 1 : 1} />}
				</g>
			)}
			<Label x={cx} y={top - 176} text="active site changed: substrate no longer fits" color={TOK.ink} opacity={fadeAt(frame, tNo + 20)} />
			<Label x={cx} y={top - 150} text="permanent" color={TOK.amberInk} size={18} opacity={fadeAt(frame, tPerm)} />
		</g>
	);
};

// ── saturation ───────────────────────────────────────────────────────────
const Saturation = ({frame, accent, at}: Ctx) => {
	const N = 4, top = 250, xs = [118, 292, 468, 642];
	// Beats: enzymes, low (1 substrate), more (3), full (4 = every site), extra (queue of 3 waiting).
	const tE = at.enzymes ?? 10, tLow = at.low ?? 60, tMore = at.more ?? 120, tFull = at.full ?? 180, tX = at.extra ?? 240;
	const bound = frame >= tFull ? 4 : frame >= tMore ? 3 : frame >= tLow ? 1 : 0;
	const waiting = frame >= tX ? 3 : 0;
	const cycleT = (i: number) => ((frame + i * 23) % 60) / 60;
	return (
		<g>
			<Ledge x={30} y={top + 80} w={700} />
			{xs.map((x, i) => {
				const has = i < bound;
				const tIn = i === 0 ? tLow : i < 3 ? tMore + (i - 1) * 8 : tFull;
				const inT = ease(frame, tIn, tIn + 26);
				return (
					<g key={i} opacity={fadeAt(frame, tE + i * 6, 12)}>
						<Glossy d={enzymePath(x, top, 150, 80, {tw: TW * 0.8, bw: BW * 0.8, d: D * 0.8, round: 0})} fill={accent} />
						{has && (
							<g transform={`translate(${x},${top + D * 0.8}) scale(0.8) translate(${-x},${-(top + D * 0.8)})`}>
								<Glossy d={substratePath(x, top + D * 0.8 - lerp(160, 0, inT) + (frame > tX ? Math.sin(cycleT(i) * Math.PI * 2) * 2 : 0))} fill={CORAL} />
							</g>
						)}
						<Verdict x={x + 56} y={top + 8} ok={has} r={11} opacity={fadeAt(frame, tFull + 10) * (has ? 1 : 0)} />
					</g>
				);
			})}
			{/* queue of extra substrate waiting */}
			{Array.from({length: waiting}, (_, k) => {
				const p = ease(frame, tX + k * 8, tX + k * 8 + 24);
				return (
					<g key={k} transform={`translate(${250 + k * 130},${lerp(20, 120, p) + idleBob(frame, k + 4, 1.6)}) scale(0.7)`}>
						<Glossy d={substratePath(0, 0)} fill={mix(CORAL, '#ffffff', 0.2)} />
					</g>
				);
			})}
			<Label x={380} y={top + 170} text={frame >= tFull ? 'every active site is busy: saturated' : bound > 0 ? `${bound} of ${N} active sites busy` : `${N} enzymes, ${N} active sites`} color={frame >= tFull ? TOK.amberInk : TOK.ink} size={19} opacity={fadeAt(frame, tE + 10)} />
			<Label x={380} y={40} text="extra substrate has to wait" color={TOK.inkDim} size={17} opacity={fadeAt(frame, tX + 20)} />
		</g>
	);
};
