// B6a take02 finishing questions (Revision 5, owner: harder questions), in scene order:
// 12a attempt (cells X and Y described only by their DNA), 12b feedback-one, 12c attempt-two (type A and type B
// bacteria), 12d feedback-two. Question cards stay complete through each 10 s countdown. Feedback turns each
// evidence row into a picture (painted plates with coded DNA), writes one model-answer line per point and crosses
// out one classic mistake per question.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Countdown, ProcessClip} from '../../kit';
import {cues} from '../../cues';
import {
	AMBER, AMBER_INK, Beads, DnaRing, DrawPath, Envelope, FONT_DISPLAY, Fade, GREYT, GREY_INK, GhostRing, GreyCross, GreyTag, Grips, Heading, INK,
	INK_SOFT, MITO_IN_ANIMAL, Overlay, PL, PLUM, Pl, Plasmid, Ring2, S, Sx, TagP, kf, plPt, prog, scribbleEllipse, tw,
} from './shared';
import type {PDef} from './shared';
import {CLIP_ENDO} from './assets';
import {ENDO_CLIP_GEOM} from './s3';

// ---------- shared helpers ----------
/** Greedy line wrap using the board text measure. */
export const wrap = (text: string, size: number, maxW: number, hand = false): string[] => {
	const out: string[] = [];
	let line = '';
	for (const w of text.split(' ')) {
		const t = line ? line + ' ' + w : w;
		if (line && tw(t, size, hand) > maxW) { out.push(line); line = w; } else line = t;
	}
	if (line) out.push(line);
	return out;
};
const Letter: React.FC<{x: number; y: number; t: string; at: number; r?: number}> = ({x, y, t, at, r = 30}) => (
	<Fade at={at}>
		<circle cx={x} cy={y} r={r} fill={INK} />
		<text x={x} y={y + r * 0.4} textAnchor="middle" fill="#fffdf8" style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: r * 1.2}}>{t}</text>
	</Fade>
);
const Box: React.FC<{x: number; y: number; w: number; h: number; at: number; lines?: number; labels?: string[]}> = ({x, y, w, h, at, lines = 0, labels = []}) => (
	<Fade at={at}>
		<rect x={x} y={y} width={w} height={h} rx={12} fill="#fffdf8" stroke={INK_SOFT} strokeWidth={2.5} strokeDasharray="10 7" />
		{Array.from({length: lines}, (_, i) => {
			const ly = y + ((i + 1) * h) / (lines + 0.4);
			return (
				<g key={i}>
					{labels[i] ? <text x={x + 20} y={ly - 6} fill={INK_SOFT} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 28}}>{labels[i]}</text> : null}
					<path d={`M${x + (labels[i] ? 64 : 20)},${ly} L${x + w - 20},${ly}`} stroke="rgba(60,45,20,0.22)" strokeWidth={2} strokeDasharray="6 8" />
				</g>
			);
		})}
	</Fade>
);
/** A plate placed by the centre of its painted body (alpha bounding box), not by its reference point. */
const BODY: Record<string, [number, number]> = {bact: [1062, 448]};
const placeBody = (p: PDef, key: string, cx: number, cy: number, k: number) => ({x: cx - (BODY[key][0] - p.ref[0]) * k, y: cy - (BODY[key][1] - p.ref[1]) * k});
/** Shrinks a picture drawn around `from` to a small icon at `to`. */
const Shrink: React.FC<{from: [number, number]; to: [number, number]; s: number; at: number; children: React.ReactNode}> = ({from, to, s, at, children}) => {
	const f = useCurrentFrame();
	const u = prog(f, at, 20);
	const px = from[0] + (to[0] - from[0]) * u, py = from[1] + (to[1] - from[1]) * u, sc = 1 + (s - 1) * u;
	return <g transform={`translate(${px},${py}) scale(${sc}) translate(${-from[0]},${-from[1]})`}>{children}</g>;
};
/** A model-answer line: amber tick, then the line, written on at its cue. */
const ModelLine: React.FC<{y: number; text: string; at: number; x?: number; size?: number}> = ({y, text, at, x = 176, size = 28}) => (
	<g>
		<Fade at={at}><DrawPath d={`M${x - 26},${y - 10} L${x - 18},${y - 2} L${x - 6},${y - 20}`} at={at} dur={10} color={AMBER} width={5} /></Fade>
		<Sx x={x} y={y} text={text} size={size} color={INK} weight={600} at={at} />
	</g>
);
/** The classic-mistake chip: grey text that takes a grey scribble cross. */
const MistakeChip: React.FC<{x: number; y: number; text: string; at: number; cross: number; size?: number}> = ({x, y, text, at, cross, size = 30}) => {
	const w = tw(text, size) + 48;
	return (
		<Fade at={at}>
			<rect x={x} y={y} width={w} height={size + 28} rx={(size + 28) / 2} fill="#eceeef" stroke={GREYT} strokeWidth={2.5} />
			<Sx x={x + 24} y={y + size + 6} text={text} size={size} color={GREY_INK} weight={600} at={at} />
			<DrawPath d={scribbleEllipse(x + w / 2, y + (size + 28) / 2, w / 2 + 8, (size + 28) / 2 + 6, 7, 1.1)} at={cross} dur={16} color={GREYT} width={4} />
			<DrawPath d={`M${x + 10},${y + size + 20} L${x + w - 10},${y + 8}`} at={cross + 8} dur={10} color={GREYT} width={6} />
		</Fade>
	);
};
const Arrow: React.FC<{x1: number; y1: number; x2: number; y2: number; at: number; color?: string; width?: number; dash?: string}> = ({x1, y1, x2, y2, at, color = AMBER_INK, width = 4, dash}) => {
	const a = Math.atan2(y2 - y1, x2 - x1), h = 14;
	return (
		<g>
			<DrawPath d={`M${x1},${y1} L${x2},${y2}`} at={at} dur={14} color={color} width={width} dash={dash} />
			<Fade at={at + 10}><path d={`M${x2 - h * Math.cos(a - 0.5)},${y2 - h * Math.sin(a - 0.5)} L${x2},${y2} L${x2 - h * Math.cos(a + 0.5)},${y2 - h * Math.sin(a + 0.5)}`} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></Fade>
		</g>
	);
};

// ---------- the evidence (12a card, reused in 12b) ----------
export const EVX = ['Long, linear DNA molecules, wound on histones, inside a compartment with a membrane', 'Small circular DNA molecules in two different kinds of organelle'];
export const EVY = ['One long circular DNA molecule, coiled and held by proteins, with no membrane around it', 'Several small, separate rings of DNA; one carries an antibiotic resistance gene'];
/** A neutral grey cell outline with a question mark: gives no answer away (same shape for X and Y). */
const OutlineCell: React.FC<{cx: number; cy: number; at: number; rx?: number; ry?: number}> = ({cx, cy, at, rx = 82, ry = 50}) => {
	const d = Array.from({length: 73}, (_, i) => {
		const t = (i / 72) * Math.PI * 2;
		const w = 1 + 0.035 * Math.sin(3 * t + 0.6) + 0.02 * Math.cos(5 * t);
		return `${i ? 'L' : 'M'}${(cx + rx * w * Math.cos(t)).toFixed(1)},${(cy + ry * w * Math.sin(t)).toFixed(1)}`;
	}).join(' ') + ' Z';
	return (
		<g>
			<DrawPath d={d} at={at} dur={18} color={GREYT} width={4} />
			<Sx x={cx} y={cy + 18} text="?" size={52} color={GREYT} weight={800} anchor="middle" at={at + 10} />
		</g>
	);
};

// ---------- 12a. Attempt: two cells described by their DNA ----------
const A = 'attempt';
const KA = cues(S(A), {two: 'Two harder questions', first: 'First, cells X', described: 'described only by their DNA', say: 'Say what kind', precisely: 'as precisely as', then: 'Then explain why', pause: 'Pause here'});
const QA_SIZE = 30, QA_LH = 37, QA_W = 780;
const DEM_A = '(a) What kind of cell is X, and what kind is Y? Be as precise as you can, and give evidence from the card for each.';
const DEM_B = "(b) Explain why some of X's DNA is circular, like Y's.";
/** The demand line holding "precise": the word turns amber and takes an amber underline on "as precisely as you can". */
const PreciseLine: React.FC<{y: number; pre: string; post: string; at: number; lit: number}> = ({y, pre, post, at, lit}) => {
	const f = useCurrentFrame();
	const o = prog(f, at, 12), u = prog(f, lit, 10);
	if (o <= 0.001) return null;
	return (
		<text x={96} y={y} fill={INK} opacity={o} style={{fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 32, whiteSpace: 'pre'}}>
			{pre}
			<tspan fill={u > 0.5 ? AMBER_INK : INK} style={u > 0.01 ? {textDecoration: 'underline', textDecorationColor: AMBER, textDecorationThickness: 5, textUnderlineOffset: 6} : undefined}>precise</tspan>
			{post}
		</text>
	);
};
export const SceneAttemptB6: React.FC = () => {
	const h = S(A).responseHold as {startFrame: number; endFrame: number};
	const cols = [{x: 120, L: 'X', ev: EVX}, {x: 990, L: 'Y', ev: EVY}];
	const demA = wrap(DEM_A, 32, 1660);
	const pi = demA.findIndex(l => l.includes('precise'));
	const pre = pi >= 0 ? demA[pi].slice(0, demA[pi].indexOf('precise')) : '';
	const yA = 640, yAend = yA + (demA.length - 1) * 40;
	return (
		<>
			<Heading text="Your turn: question one" at={4} size={60} />
			<Overlay>
				<Fade at={KA.first - 6}>
					<rect x={80} y={190} width={1760} height={400} rx={22} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
					<path d="M960,290 L960,570" stroke="rgba(60,45,20,0.15)" strokeWidth={2} />
				</Fade>
				<Sx x={120} y={245} text="Two cells, described by their DNA" size={40} color={PLUM} hand at={KA.first} />
				{cols.map((c, ci) => {
					let y = 420;
					return (
						<g key={c.L}>
							<Letter x={c.x + 34} y={322} t={c.L} at={KA.first + 4 + ci * 4} />
							<OutlineCell cx={c.x + 190} cy={322} at={KA.first + 6 + ci * 4} />
							{c.ev.map((e, ri) => {
								const lines = wrap(e, QA_SIZE, QA_W);
								const y0 = y;
								y += lines.length * QA_LH + 16;
								const at = KA.described + 4 + (ci * 2 + ri) * 16;
								return (
									<g key={ri}>
										<Fade at={at}><circle cx={c.x + 6} cy={y0 - 10} r={6} fill={GREYT} /></Fade>
										{lines.map((l, li) => <Sx key={li} x={c.x + 24} y={y0 + li * QA_LH} text={l} size={QA_SIZE} color={INK} weight={600} at={at} />)}
									</g>
								);
							})}
						</g>
					);
				})}
				{demA.map((l, i) => (i === pi ? (
					<PreciseLine key={i} y={yA + i * 40} pre={pre} post={l.slice(pre.length + 'precise'.length)} at={KA.say + i * 4} lit={KA.precisely} />
				) : <Sx key={i} x={96} y={yA + i * 40} text={l} size={32} color={INK} weight={700} at={KA.say + i * 4} />))}
				<Box x={96} y={yAend + 22} w={1584} h={112} at={KA.say + 10} lines={2} labels={['X:', 'Y:']} />
				<Sx x={96} y={yAend + 186} text={DEM_B} size={32} color={INK} weight={700} at={KA.then} />
				<Box x={96} y={yAend + 204} w={1400} h={60} at={KA.then + 8} />
				<Sx x={96} y={1030} text="Pause here to answer." size={52} color={AMBER_INK} hand at={KA.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1700} y={900} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 12b. Feedback, item one ----------
const F1 = 'feedback-one';
const KF = cues(S(F1), {
	linear: 'linear and wound', inside: 'inside a compartment', nucleus: 'That is a nucleus', euk: 'X is a eukaryote', rings: 'Its small rings', two: 'two kinds of organelle',
	mito: 'mitochondria and chloroplasts', chloro: 'chloroplasts, so', plant: 'most likely a plant', animal: 'An animal cell', ymain: "Y's main DNA", onering: 'one ring with no',
	nomem: 'no membrane around', coiled: 'coiled and held', held: 'held by proteins', plus: 'plus plasmids', nonuc: 'There is no nucleus', prok: 'Y is a prokaryote',
	xorg: "X's organelles have", came: 'came from bacteria', kept: 'kept that kind', said: 'If you said', look: 'look again', xhas: 'X has a nucleus',
});
const CARD = {x: 60, w: 730, y: 175, size: 26, lh: 32, wrapW: 650};
type RowGeo = {y0: number; y1: number; lines: string[]};
const cardLayout = () => {
	const rows: RowGeo[] = [];
	const heads: number[] = [];
	let y = CARD.y + 52;
	[EVX, EVY].forEach(ev => {
		heads.push(y);
		y += 54;
		ev.forEach(e => {
			const lines = wrap(e, CARD.size, CARD.wrapW);
			rows.push({y0: y, y1: y + (lines.length - 1) * CARD.lh, lines});
			y += lines.length * CARD.lh + 14;
		});
		y += 18;
	});
	return {rows, heads, bottom: y - 18};
};
/** The 12a evidence, stacked in the left third; rows dim and light by stage. */
const EvidenceCard: React.FC<{rowO: number[]; lit: number[]; at?: number}> = ({rowO, lit, at = -100}) => {
	const {rows, heads, bottom} = cardLayout();
	return (
		<Fade at={at}>
			<rect x={CARD.x} y={CARD.y} width={CARD.w} height={bottom - CARD.y + 4} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			{['X', 'Y'].map((L, i) => (
				<g key={L} opacity={Math.max(rowO[i * 2], rowO[i * 2 + 1])}>
					<Letter x={CARD.x + 40} y={heads[i] - 10} t={L} at={-100} r={24} />
					<Sx x={CARD.x + 76} y={heads[i]} text={`Cell ${L}`} size={32} color={INK_SOFT} hand at={-100} />
				</g>
			))}
			{rows.map((r, i) => (
				<g key={i} opacity={rowO[i]}>
					{lit[i] > 0.01 ? <rect x={CARD.x + 12} y={r.y0 - CARD.size - 4} width={CARD.w - 24} height={r.y1 - r.y0 + CARD.size + 16} rx={10} fill="#f6d77a" opacity={0.45 * lit[i]} /> : null}
					<circle cx={CARD.x + 30} cy={r.y0 - 9} r={5} fill={GREYT} />
					{r.lines.map((l, k) => <Sx key={k} x={CARD.x + 46} y={r.y0 + k * CARD.lh} text={l} size={CARD.size} color={INK} weight={600} at={-100} />)}
				</g>
			))}
		</Fade>
	);
};
const rowMid = (i: number): [number, number] => { const r = cardLayout().rows[i]; return [CARD.x + CARD.w, (r.y0 + r.y1) / 2 - 8]; };
/** Dashed amber connector from an evidence row to its picture. */
const Connector: React.FC<{row: number; to: [number, number]; at: number; out: number}> = ({row, to, at, out}) => {
	const [x, y] = rowMid(row);
	return <Fade at={at} out={out}><DrawPath d={`M${x + 4},${y} C${x + 60},${y} ${to[0] - 60},${to[1]} ${to[0]},${to[1]}`} at={at} dur={16} color={AMBER_INK} width={3} dash="8 7" /></Fade>;
};
/** Nucleus picture: short linear DNA molecules wound on histones inside a dashed envelope. */
const NucleusPic: React.FC<{cx: number; cy: number; r: number; at: number; envAt: number}> = ({cx, cy, r, at, envAt}) => {
	const f = useCurrentFrame();
	const chains: [number, number, number][] = [[-0.42, -0.4, -18], [0.3, -0.22, 22], [-0.3, 0.32, 8], [0.36, 0.42, -28]];
	return (
		<g>
			<g opacity={prog(f, envAt, 14)}><Envelope cx={cx} cy={cy} r={r} width={4} /></g>
			{chains.map(([dx, dy, rot], i) => {
				const x = cx + dx * r, y = cy + dy * r;
				return (
					<g key={i} opacity={prog(f, at + i * 6, 12)} transform={`rotate(${rot} ${x} ${y})`}>
						<Beads xs={[x - 30, x, x + 30]} y={y} r={12} wind={[1, 1, 1]} x0={x - 54} x1={x + 54} width={3.5} />
						<circle cx={x - 54} cy={y} r={4.5} fill={AMBER} /><circle cx={x + 54} cy={y} r={4.5} fill={AMBER} />
					</g>
				);
			})}
		</g>
	);
};
const ML = [730, 782, 834, 886];
const MISTAKE1 = 'X has circular DNA, so X is a prokaryote.';
const ICON = (i: number): [number, number] => [104, ML[i] - 10];
export const SceneFeedbackOne: React.FC = () => {
	const f = useCurrentFrame();
	const st = (a: number, b: number) => prog(f, a, 12) * (1 - prog(f, b, 12));
	const dimX = 1 - 0.65 * st(KF.ymain - 6, KF.xorg);
	const dimY = 1 - 0.65 * (1 - prog(f, KF.ymain - 6, 12));
	const s4 = st(KF.came - 6, KF.said);
	const rowO = [Math.min(dimX, 1 - 0.65 * s4), dimX, dimY, Math.min(dimY, 1 - 0.65 * s4)];
	const lit = [st(KF.linear, KF.rings), Math.max(st(KF.two, KF.ymain), st(KF.came, KF.said)), Math.max(st(KF.onering, KF.plus), st(KF.came, KF.said)), st(KF.plus, KF.xorg)];
	// stage 1: nucleus
	const N1: [number, number] = [1180, 410];
	// stage 2: the organelles, then the plant cell
	const MI = {x: 960, y: 300, k: 0.11}, CH = {x: 960, y: 480, k: 0.12}, PLT = {x: 1330, y: 420, k: 0.2}, AN = {x: 1690, y: 355, k: 0.12};
	const anPt = plPt(PL.animal, AN.x, AN.y, AN.k);
	const s2pop = (at: number) => prog(f, at, 12);
	// stage 3: bacterium Y
	const BY = placeBody(PL.bact, 'bact', 1300, 400, 0.5);
	const byPt = plPt(PL.bact, BY.x, BY.y, 0.5);
	const patch = byPt(873, 434), pl1 = byPt(433, 413), pl2 = byPt(1220, 400);
	// stage 4: endosymbiosis replay (the same process clip, small) and the alike pair
	const EK = 0.25, endo = ENDO_CLIP_GEOM(1060, 380, EK);
	const MPx = 1420, BPx = 1710, PY = 320;
	const bIcon = placeBody(PL.bact, 'bact', BPx, PY, 0.12);
	const bIconPatch = plPt(PL.bact, bIcon.x, bIcon.y, 0.12)(873, 434);
	return (
		<>
			<Heading text="Check question one" at={4} size={60} />
			{/* the endosymbiosis clip replays small (HTML layer under the overlay) */}
			<div style={{position: 'absolute', inset: 0, opacity: prog(f, KF.xorg + 2, 12) * (1 - prog(f, KF.said, 12)), pointerEvents: 'none'}}>
				{f >= KF.xorg - 10 && f < KF.said + 14 ? <ProcessClip src={CLIP_ENDO} at={KF.xorg + 8} seconds={5} rate={1.2} {...endo.clip} crop={endo.crop} /> : null}
			</div>
			<Overlay>
				<EvidenceCard rowO={rowO} lit={lit} />
				{/* ---- stage 1: X's first row becomes a nucleus ---- */}
				<Connector row={0} to={[N1[0] - 160, N1[1]]} at={KF.linear + 4} out={KF.rings} />
				<Shrink from={N1} to={ICON(0)} s={0.17} at={KF.rings}>
					<NucleusPic cx={N1[0]} cy={N1[1]} r={150} at={KF.linear} envAt={KF.inside} />
				</Shrink>
				<Sx x={N1[0] + 150} y={N1[1] - 150} text="nucleus" size={52} color={AMBER_INK} hand at={KF.nucleus} out={KF.rings - 6} />
				<Sx x={N1[0]} y={N1[1] + 205} text="linear DNA on histones, in a membrane" size={30} color={INK_SOFT} hand anchor="middle" at={KF.inside + 10} out={KF.rings - 6} />
				<ModelLine y={ML[0]} text="X: linear DNA on histones, inside a membrane = a nucleus, so X is a eukaryote." at={KF.euk + 6} />
				{/* ---- stage 2: rings in two kinds of organelle; most likely a plant cell ---- */}
				<Connector row={1} to={[MI.x - 130, MI.y + 70]} at={KF.two} out={KF.ymain} />
				<Shrink from={[1140, 420]} to={ICON(1)} s={0.12} at={KF.ymain}>
					<g opacity={s2pop(KF.mito - 4)}>
						<Pl p={PL.mito} x={MI.x} y={MI.y} k={MI.k} />
						<DnaRing cx={MI.x} cy={MI.y} rx={22} ry={13} at={KF.mito} width={3.5} />
					</g>
					<g opacity={s2pop(KF.chloro - 4)}>
						<Pl p={PL.chloro} x={CH.x} y={CH.y} k={CH.k} />
						<DnaRing cx={CH.x} cy={CH.y} rx={22} ry={13} at={KF.chloro} width={3.5} />
					</g>
					<g opacity={s2pop(KF.plant - 6)}><Pl p={PL.plant} x={PLT.x} y={PLT.y} k={PLT.k} /></g>
				</Shrink>
				<Sx x={MI.x} y={MI.y + 86} text="mitochondrion" size={26} color={INK_SOFT} hand anchor="middle" at={KF.mito + 6} out={KF.ymain - 6} />
				<Sx x={CH.x} y={CH.y + 104} text="chloroplast" size={26} color={INK_SOFT} hand anchor="middle" at={KF.chloro + 6} out={KF.ymain - 6} />
				<Sx x={PLT.x} y={PLT.y + 236} text="most likely a plant cell" size={34} color={AMBER_INK} hand anchor="middle" at={KF.plant + 6} out={KF.ymain - 6} />
				<Fade at={KF.animal} out={KF.ymain - 6}>
					<Pl p={PL.animal} x={AN.x} y={AN.y} k={AN.k} />
					<DnaRing cx={anPt(MITO_IN_ANIMAL[0][0], MITO_IN_ANIMAL[0][1])[0]} cy={anPt(MITO_IN_ANIMAL[0][0], MITO_IN_ANIMAL[0][1])[1]} rx={13} ry={8} at={KF.animal + 8} width={3} />
					<ellipse cx={AN.x} cy={AN.y + 175} rx={46} ry={26} fill="none" stroke={GREYT} strokeWidth={3} strokeDasharray="9 7" />
					<GreyCross x={AN.x} y={AN.y + 175} at={KF.animal + 20} s={20} />
					<Sx x={AN.x} y={AN.y + 245} text="animal cell:" size={26} color={INK_SOFT} hand anchor="middle" at={KF.animal + 6} />
					<Sx x={AN.x} y={AN.y + 277} text="mitochondria only" size={26} color={INK_SOFT} hand anchor="middle" at={KF.animal + 10} />
				</Fade>
				<ModelLine y={ML[1]} text="X: rings in two kinds of organelle = mitochondria and chloroplasts, so most likely a plant cell." at={KF.plant + 40} />
				{/* ---- stage 3: Y's rows become a bacterium ---- */}
				<Connector row={2} to={[1010, 395]} at={KF.onering} out={KF.xorg} />
				<Shrink from={[1300, 400]} to={ICON(2)} s={0.13} at={KF.xorg}>
					<g opacity={prog(f, KF.ymain, 14)}>
						<Pl p={PL.bact} x={BY.x} y={BY.y} k={0.5} />
						<ellipse cx={patch[0]} cy={patch[1]} rx={150} ry={46} fill="#fff7e2" opacity={0.7} />
						<DnaRing cx={patch[0]} cy={patch[1]} rx={115} ry={33} at={KF.onering} coil={prog(f, KF.coiled, 30)} width={4} />
						<Grips cx={patch[0]} cy={patch[1]} rx={115} ry={33} at={KF.held} n={9} r={6} />
						<Plasmid cx={pl1[0]} cy={pl1[1]} r={15} at={KF.plus} gene={KF.plus + 8} />
						<Plasmid cx={pl2[0]} cy={pl2[1]} r={15} at={KF.plus + 4} />
					</g>
				</Shrink>
				<GhostRing cx={patch[0]} cy={patch[1]} rx={160} ry={54} at={KF.nomem} out={KF.xorg - 4} />
				<GreyCross x={patch[0] + 156} y={patch[1] - 44} at={KF.nomem + 6} s={16} out={KF.xorg - 4} />
				<TagP x={patch[0]} y={196} text="no membrane around it" anchor="middle" at={KF.nomem + 8} out={KF.xorg - 4} size={30} />
				<Ring2 cx={pl1[0]} cy={pl1[1]} rx={34} ry={30} at={KF.plus + 6} out={KF.xorg - 4} seed={4} />
				<Ring2 cx={pl2[0]} cy={pl2[1]} rx={34} ry={30} at={KF.plus + 10} out={KF.xorg - 4} seed={6} />
				<Sx x={1300} y={600} text="plasmids (one with the resistance gene)" size={32} color={PLUM} hand anchor="middle" at={KF.plus + 10} out={KF.xorg - 4} />
				<ModelLine y={ML[2]} text="Y: one ring, no membrane, held by proteins, plus plasmids: no nucleus, so a prokaryote (e.g. a bacterium)." at={KF.prok + 16} />
				{/* ---- stage 4: why X's organelle DNA is circular ---- */}
				<g opacity={1 - prog(f, KF.said, 12)}>
					<GreyTag x={1060} y={530} text="endosymbiosis" anchor="middle" at={KF.came} />
					<Sx x={1060} y={222} text="bacteria taken in by a larger cell" size={30} color={INK_SOFT} hand anchor="middle" at={KF.came} />
					<g opacity={prog(f, KF.kept - 10, 12)}>
						<Pl p={PL.mito} x={MPx} y={PY} k={0.1} />
						<DnaRing cx={MPx} cy={PY} rx={20} ry={12} width={3.5} />
						<Pl p={PL.bact} x={bIcon.x} y={bIcon.y} k={0.12} />
						<DnaRing cx={bIconPatch[0]} cy={bIconPatch[1]} rx={30} ry={9} width={3.5} />
					</g>
					<Fade at={KF.kept}>
						<path d={`M${MPx + 108},${PY} L${BPx - 92},${PY} M${MPx + 122},${PY - 12} L${MPx + 108},${PY} L${MPx + 122},${PY + 12} M${BPx - 106},${PY - 12} L${BPx - 92},${PY} L${BPx - 106},${PY + 12}`} fill="none" stroke={AMBER_INK} strokeWidth={4} strokeLinecap="round" />
					</Fade>
					<Sx x={(MPx + BPx) / 2} y={PY + 110} text="alike: rings, from bacteria" size={32} color={AMBER_INK} hand anchor="middle" at={KF.kept + 4} />
				</g>
				<ModelLine y={ML[3]} text="(b) Mitochondria and chloroplasts came from bacteria, so they kept circular DNA." at={KF.kept + 22} />
				{/* ---- the classic mistake ---- */}
				<g opacity={prog(f, KF.said, 14)}>
					<NucleusPic cx={1640} cy={380} r={105} at={-100} envAt={-100} />
				</g>
				<Sx x={1640} y={235} text="the nucleus decides" size={36} color={AMBER_INK} hand anchor="middle" at={KF.xhas} />
				<MistakeChip x={860} y={560} text={MISTAKE1} at={KF.said} cross={KF.look} />
				<Arrow x1={860 + tw(MISTAKE1, 30) + 60} y1={580} x2={1562} y2={462} at={KF.xhas} dash="10 8" />
			</Overlay>
		</>
	);
};
void kf;

// ---------- small bacteria for the populations (12c and 12d) ----------
/** A small bacterium (the b6a plate) centred on its body, with coded DNA drawn larger than scale for visibility. */
const Bug: React.FC<{x: number; y: number; k: number; grey?: boolean; gene?: 'plasmid' | 'main' | 'none'; o?: number; plasmids?: number; filterId?: string; extraPlasmid?: number}> = ({x, y, k, grey = false, gene = 'none', o = 1, filterId, extraPlasmid = 0}) => {
	const pos = placeBody(PL.bact, 'bact', x, y, k);
	const P = plPt(PL.bact, pos.x, pos.y, k);
	const [px, py] = P(873, 434);
	const s = k / 0.1;
	const plasmidAt = P(1300, 410);
	return (
		<g opacity={o}>
			<g filter={grey && filterId ? `url(#${filterId})` : undefined} opacity={grey ? 0.72 : 1}>
				<Pl p={PL.bact} x={pos.x} y={pos.y} k={k} />
			</g>
			<ellipse cx={px} cy={py} rx={20 * s} ry={6.5 * s} fill="none" stroke={grey ? '#9a9a9a' : PLUM} strokeWidth={Math.max(2, 2.6 * s)} />
			{gene === 'main' ? <circle cx={px + 20 * s} cy={py} r={5.5 * s} fill={AMBER} stroke={AMBER_INK} strokeWidth={1.6} /> : null}
			{gene === 'plasmid' ? (
				<g>
					<ellipse cx={plasmidAt[0]} cy={plasmidAt[1]} rx={6.5 * s} ry={5 * s} fill="none" stroke={PLUM} strokeWidth={Math.max(1.8, 2.2 * s)} />
					<circle cx={plasmidAt[0] + 6.5 * s} cy={plasmidAt[1]} r={3.6 * s} fill={AMBER} stroke={AMBER_INK} strokeWidth={1.4} />
					{extraPlasmid > 0.01 ? (
						<g opacity={extraPlasmid}>
							<ellipse cx={plasmidAt[0] - 16 * s * extraPlasmid} cy={plasmidAt[1] + 4 * s} rx={6.5 * s} ry={5 * s} fill="none" stroke={PLUM} strokeWidth={Math.max(1.8, 2.2 * s)} />
							<circle cx={plasmidAt[0] - 16 * s * extraPlasmid + 6.5 * s} cy={plasmidAt[1] + 4 * s} r={3.6 * s} fill={AMBER} stroke={AMBER_INK} strokeWidth={1.4} />
						</g>
					) : null}
				</g>
			) : null}
		</g>
	);
};
const GreyFilter: React.FC<{id: string}> = ({id}) => (
	<defs><filter id={id}><feColorMatrix type="saturate" values="0" /></filter></defs>
);
/** A small pill (antibiotic) icon. */
const Pill: React.FC<{x: number; y: number; s?: number; rot?: number}> = ({x, y, s = 1, rot = -25}) => (
	<g transform={`translate(${x},${y}) rotate(${rot}) scale(${s})`}>
		<rect x={-34} y={-14} width={68} height={28} rx={14} fill="#fffdf8" stroke={INK} strokeWidth={3} />
		<rect x={-34} y={-14} width={34} height={28} rx={14} fill="#e88a6a" stroke={INK} strokeWidth={3} />
	</g>
);

// ---------- 12c. Attempt-two: type A and type B ----------
const A2 = 'attempt-two';
const KA2 = cues(S(A2), {typeA: 'type A carry', gene: 'gene for antibiotic', plasmid: 'on a plasmid', typeB: 'Type B carry', main: 'main chromosome', mixed: 'Each type is mixed', lack: 'lack the gene', explain: 'Explain why', pause: 'Pause here'});
const DEM_C = 'Explain why the resistance gene can spread through the mixture faster from type A than from type B.';
export const SceneAttemptTwo: React.FC = () => {
	const f = useCurrentFrame();
	const h = S(A2).responseHold as {startFrame: number; endFrame: number};
	const panels = [
		{x0: 96, cx: 516, tag: 'Type A: gene on a plasmid', at: KA2.typeA, tagAt: KA2.plasmid, gene: 'plasmid' as const, geneAt: KA2.gene},
		{x0: 984, cx: 1404, tag: 'Type B: gene on the main chromosome', at: KA2.typeB, tagAt: KA2.main, gene: 'main' as const, geneAt: KA2.main},
	];
	const CK = 0.3, CY = 345;
	const cluster: [number, number][] = [[-285, 0], [-95, 0], [95, 0], [285, 0], [-237, 80], [-79, 80], [79, 80], [237, 80]];
	const demC = wrap(DEM_C, 32, 1720);
	return (
		<>
			<Heading text="Your turn: question two" at={4} size={60} />
			<Overlay>
				<GreyFilter id="b6a-grey-a2" />
				{panels.map((p, i) => {
					const pos = placeBody(PL.bact, 'bact', p.cx, CY, CK);
					const P = plPt(PL.bact, pos.x, pos.y, CK);
					const [px, py] = P(873, 434);
					const pl = P(1300, 410);
					const g = prog(f, p.geneAt, 10);
					return (
						<g key={i}>
							<Fade at={p.at - 6}>
								<rect x={p.x0} y={185} width={840} height={520} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
								<Pl p={PL.bact} x={pos.x} y={pos.y} k={CK} />
								<ellipse cx={px} cy={py} rx={95} ry={29} fill="#fff7e2" opacity={0.7} />
								<DnaRing cx={px} cy={py} rx={70} ry={20} coil={1} width={3.5} />
							</Fade>
							{p.gene === 'plasmid' ? (
								<g>
									<Plasmid cx={pl[0]} cy={pl[1]} r={16} at={p.at + 6} gene={p.geneAt} width={3.5} />
									<g opacity={g}><Pill x={pl[0] + 40} y={pl[1] + 112} s={0.75} /><path d={`M${pl[0] + 30},${pl[1] + 94} L${pl[0] + 18},${pl[1] + 14}`} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 5" /></g>
								</g>
							) : (
								<g opacity={g}>
									<circle cx={px + 70} cy={py - 8} r={9} fill={AMBER} stroke={AMBER_INK} strokeWidth={2.5} />
									<Pill x={px + 110} y={py + 118} s={0.75} />
									<path d={`M${px + 100},${py + 100} L${px + 74},${py + 14}`} stroke={AMBER_INK} strokeWidth={3} strokeDasharray="6 5" />
								</g>
							)}
							<Sx x={p.cx} y={240} text={p.tag} size={34} color={PLUM} hand anchor="middle" at={p.tagAt} />
							<g opacity={prog(f, KA2.mixed, 16)}>
								{cluster.map(([dx, dy], j) => <Bug key={j} x={p.cx + dx} y={520 + dy} k={0.09} grey filterId="b6a-grey-a2" />)}
							</g>
							<Sx x={p.cx} y={680} text="mixed with bacteria that lack the gene" size={28} color={INK_SOFT} hand anchor="middle" at={KA2.lack} />
						</g>
					);
				})}
				{demC.map((l, i) => <Sx key={i} x={96} y={768 + i * 40} text={l} size={32} color={INK} weight={700} at={KA2.explain + i * 4} />)}
				<Box x={96} y={768 + (demC.length - 1) * 40 + 22} w={1400} h={1000 - (768 + (demC.length - 1) * 40 + 22) - 20} at={KA2.explain + 10} lines={3} />
				<Sx x={96} y={1040} text="Pause here to answer." size={52} color={AMBER_INK} hand at={KA2.pause} />
				<Countdown start={h.startFrame} end={h.endFrame} x={1700} y={900} r={56} />
			</Overlay>
		</>
	);
};

// ---------- 12d. Feedback, item two ----------
const F2 = 'feedback-two';
const K2 = cues(S(F2), {
	main: 'main chromosome', usually: 'usually reaches', divides: 'divides', onlythat: "Only that cell's", offspring: 'offspring get it', inA: 'In type A', plasmid: 'plasmid is copied',
	copied: 'copied separately', conj: 'in conjugation', passes: 'passes a copy', neighbour: 'to a neighbour', keeps: 'keeps its own', also: 'also reaches', lacked: 'lacked it',
	each: 'each new carrier', passon: 'can pass it on', sideways: 'spreads sideways', down: 'down the generations', ifyou: 'If you called', fix: 'fix it', nonew: 'No new cell', copy: 'a copy of DNA moves',
});
const BK = 0.07;
const TREE_X = 630;
const NB = (y0: number) => Array.from({length: 15}, (_, i) => [960 + (i % 5) * 140, y0 + 50 + Math.floor(i / 5) * 90] as [number, number]);
const gen = (y0: number) => ({
	g0: [[TREE_X, y0 + 50]] as [number, number][],
	g1: [[TREE_X - 125, y0 + 140], [TREE_X + 125, y0 + 140]] as [number, number][],
	g2: [[TREE_X - 187.5, y0 + 230], [TREE_X - 62.5, y0 + 230], [TREE_X + 62.5, y0 + 230], [TREE_X + 187.5, y0 + 230]] as [number, number][],
});
/** A dividing family tree: each generation emerges from its parent; ancestors stay as faint ghosts. */
const Tree: React.FC<{y0: number; gene: 'plasmid' | 'main'; t1: number; t2: number; filterId: string; arrowsAt?: number}> = ({y0, gene, t1, t2, arrowsAt}) => {
	const f = useCurrentFrame();
	const G = gen(y0);
	const u1 = prog(f, t1, 22), u2 = prog(f, t2, 22);
	const lerp = (a: [number, number], b: [number, number], u: number): [number, number] => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
	const hot = arrowsAt !== undefined && f >= arrowsAt;
	const arrow = (a: [number, number], b: [number, number], at: number, key: string) => {
		const x1 = a[0] + (b[0] - a[0]) * 0.28, y1 = a[1] + 22, x2 = a[0] + (b[0] - a[0]) * 0.8, y2 = b[1] - 22;
		return <Arrow key={key} x1={x1} y1={y1} x2={x2} y2={y2} at={at} color={hot ? AMBER : 'rgba(60,45,20,0.4)'} width={hot ? 5 : 3} />;
	};
	return (
		<g>
			{G.g1.map((c, i) => arrow(G.g0[0], c, t1, 'a1' + i))}
			{G.g2.map((c, i) => arrow(G.g1[i >> 1], c, t2, 'a2' + i))}
			<Bug x={G.g0[0][0]} y={G.g0[0][1]} k={BK} gene={gene} o={1 - 0.7 * u1} />
			{u1 > 0.01 ? G.g1.map((c, i) => <Bug key={'b1' + i} x={lerp(G.g0[0], c, u1)[0]} y={lerp(G.g0[0], c, u1)[1]} k={BK} gene={gene} o={1 - 0.7 * u2} />) : null}
			{u2 > 0.01 ? G.g2.map((c, i) => <Bug key={'b2' + i} x={lerp(G.g1[i >> 1], c, u2)[0]} y={lerp(G.g1[i >> 1], c, u2)[1]} k={BK} gene={gene} />) : null}
		</g>
	);
};
const treeCount = (f: number, t1: number, t2: number) => (f >= t2 + 10 ? 4 : f >= t1 + 10 ? 2 : 1);
const Tube: React.FC<{a: [number, number]; b: [number, number]; at: number}> = ({a, b, at}) => {
	const f = useCurrentFrame();
	const p = prog(f, at, 12);
	if (p <= 0.01) return null;
	// start and end at the cell walls: horizontal neighbours are 57 px from centre to wall, vertical ones 18 px
	const horiz = Math.abs(b[0] - a[0]) > Math.abs(b[1] - a[1]);
	const sx = Math.sign(b[0] - a[0]), sy = Math.sign(b[1] - a[1]);
	const x1 = horiz ? a[0] + sx * 54 : a[0], y1 = horiz ? a[1] : a[1] + sy * 18;
	const x2 = horiz ? b[0] - sx * 54 : b[0], y2 = horiz ? b[1] : b[1] - sy * 18;
	const xe = x1 + (x2 - x1) * p, ye = y1 + (y2 - y1) * p;
	return (
		<g>
			<path d={`M${x1},${y1} L${xe},${ye}`} stroke="#b9a07a" strokeWidth={9} strokeLinecap="round" />
			<path d={`M${x1},${y1} L${xe},${ye}`} stroke="#efe2c6" strokeWidth={4} strokeLinecap="round" />
		</g>
	);
};
export const SceneFeedbackTwo: React.FC = () => {
	const f = useCurrentFrame();
	const YA = 172, YB = 466, PH = 280;
	const aO = 1 - 0.65 * (1 - prog(f, K2.inA - 6, 14));
	const bO = 1 - 0.65 * prog(f, K2.inA - 6, 14) * (1 - prog(f, K2.sideways - 6, 14));
	const nA = NB(YA), nB = NB(YB);
	const GA = gen(YA);
	// conjugation in A: [source, target neighbour index, tube time]; source -1 = the carrier
	const conj: [number, number, number][] = [[-1, 0, K2.conj], [0, 1, K2.also + 20], [0, 5, K2.also + 44], [1, 2, K2.lacked + 10], [1, 6, K2.each + 4], [5, 10, K2.each + 24], [6, 7, K2.passon]];
	const litAt = (i: number) => (i === 0 ? K2.neighbour + 14 : conj[i][2] + 18);
	const travel = prog(f, K2.passes, 34);
	const A1 = K2.also + 28, A2 = K2.each + 6; // A's own divisions continue
	const nLit = conj.filter((_, i) => f >= litAt(i)).length;
	const countA = treeCount(f, A1, A2) + nLit;
	const countB = treeCount(f, K2.divides, K2.offspring);
	const src = (s: number): [number, number] => (s < 0 ? GA.g0[0] : nA[conj[s][1]]);
	const panel = (y0: number, o: number, title: string, sub: string[]) => (
		<g opacity={o}>
			<rect x={96} y={y0} width={1728} height={PH} rx={20} fill="#fffdf8" stroke="rgba(60,45,20,0.25)" strokeWidth={3} />
			<Sx x={120} y={y0 + 62} text={title} size={46} color={PLUM} weight={800} at={-100} />
			{sub.map((s, i) => <Sx key={i} x={120} y={y0 + 100 + i * 30} text={s} size={26} color={INK_SOFT} hand at={-100} />)}
			<path d={`M892,${y0 + 24} L892,${y0 + PH - 24}`} stroke="rgba(60,45,20,0.12)" strokeWidth={2} />
		</g>
	);
	const counter = (y0: number, n: number, o: number, at: number) => (
		<g opacity={o * prog(f, at, 12)}>
			<text x={1730} y={y0 + 140} textAnchor="middle" fill={PLUM} style={{fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 76}}>{n}</text>
			<Sx x={1730} y={y0 + 182} text="cells with" size={24} color={INK_SOFT} hand anchor="middle" at={-100} />
			<Sx x={1730} y={y0 + 208} text="the gene" size={24} color={INK_SOFT} hand anchor="middle" at={-100} />
		</g>
	);
	return (
		<>
			<Heading text="Check question two" at={4} size={60} />
			<Overlay>
				<GreyFilter id="b6a-grey-f2" />
				{/* ---- panels ---- */}
				{panel(YA, aO, 'Type A', ['gene on a plasmid'])}
				{panel(YB, bO, 'Type B', ['gene on the main', 'chromosome'])}
				{/* neighbours: 15 grey cells in each panel (A's light up as they receive the plasmid) */}
				<g opacity={bO}>{nB.map((c, i) => <Bug key={i} x={c[0]} y={c[1]} k={BK} grey filterId="b6a-grey-f2" />)}</g>
				<g opacity={aO}>
					{nA.map((c, i) => {
						const ci = conj.findIndex(q => q[1] === i);
						const lit = ci >= 0 && f >= litAt(ci);
						return <Bug key={i} x={c[0]} y={c[1]} k={BK} grey={!lit} gene={lit ? 'plasmid' : 'none'} filterId="b6a-grey-f2" />;
					})}
					{conj.map(([s, t, at], i) => <Tube key={i} a={src(s)} b={nA[t]} at={at} />)}
					{/* the first copy travels across the first tube */}
					{f >= K2.passes && travel < 1 ? <Plasmid cx={GA.g0[0][0] + 54 + (nA[0][0] - 54 - GA.g0[0][0] - 54) * travel} cy={GA.g0[0][1]} r={8} at={-100} gene={-100} width={3} /> : null}
					{conj.slice(1).map(([s, t, at], i) => {
						const u = prog(f, at + 8, 12);
						if (u <= 0.01 || u >= 0.99) return null;
						const a = src(s), b = nA[t];
						return <Plasmid key={i} cx={a[0] + (b[0] - a[0]) * u} cy={a[1] + (b[1] - a[1]) * u} r={7} at={-100} gene={-100} width={2.5} />;
					})}
				</g>
				{/* family trees */}
				<g opacity={aO}>
					<Tree y0={YA} gene="plasmid" t1={A1} t2={A2} filterId="b6a-grey-f2" arrowsAt={K2.sideways} />
					{/* the carrier's plasmid is copied separately (pulse and split in place) */}
					{f >= K2.plasmid && f < A1 ? (
						<g>
							<circle cx={GA.g0[0][0] + 33} cy={GA.g0[0][1] - 1} r={14 + 8 * Math.sin(Math.min(1, (f - K2.plasmid) / 18) * Math.PI)} fill="none" stroke={AMBER} strokeWidth={3} opacity={1 - prog(f, K2.copied + 10, 10)} />
							<Bug x={GA.g0[0][0]} y={GA.g0[0][1]} k={BK} gene="plasmid" extraPlasmid={prog(f, K2.copied, 16)} />
						</g>
					) : null}
				</g>
				<g opacity={bO}><Tree y0={YB} gene="main" t1={K2.divides} t2={K2.offspring} filterId="b6a-grey-f2" arrowsAt={K2.down} /></g>
				<TagP x={TREE_X + 70} y={YA + 76} text="kept" at={K2.keeps} out={A1 - 4} size={26} />
				{/* counters */}
				{counter(YA, countA, aO, K2.inA)}
				{counter(YB, countB, bO, 0)}
				<GreyTag x={1824 - tw('illustration, not measured data', 22) - 36} y={YB + PH + 6} text="illustration, not measured data" at={K2.each} size={22} />
				{/* B: passed down only */}
				<Sx x={120} y={YB + 200} text="passed down to" size={28} color={AMBER_INK} hand at={K2.offspring + 10} out={K2.down - 4} />
				<Sx x={120} y={YB + 230} text="offspring only" size={28} color={AMBER_INK} hand at={K2.offspring + 14} out={K2.down - 4} />
				{/* sideways and down */}
				<g opacity={prog(f, K2.sideways, 10)}>
					{[YA + 95, YA + 185].map((y, i) => <Arrow key={i} x1={890} y1={y} x2={1600} y2={y} at={K2.sideways + i * 6} color={AMBER} width={6} />)}
				</g>
				<Sx x={120} y={YA + 196} text="sideways (conjugation)" size={28} color={AMBER_INK} hand at={K2.sideways + 10} />
				<Sx x={120} y={YA + 228} text="and down (division)" size={28} color={AMBER_INK} hand at={K2.down} />
				<Sx x={120} y={YB + 220} text="usually down only" size={34} color={AMBER_INK} hand at={K2.down + 6} />
				{/* model answer */}
				<ModelLine y={822} text="B: gene on the main chromosome, usually passed on when the cell divides, to its offspring." at={K2.offspring + 22} />
				<ModelLine y={866} text="A: the plasmid is copied separately; in conjugation a copy passes to a neighbour and the donor keeps one." at={K2.keeps + 18} />
				<ModelLine y={910} text="New carriers pass it on too, so the gene spreads faster through the mixture." at={K2.passon + 12} />
				{/* the classic mistake */}
				<MistakeChip x={96} y={944} text="conjugation is how bacteria reproduce" at={K2.ifyou} cross={K2.fix} />
				<Sx x={96 + tw('conjugation is how bacteria reproduce', 30) + 90} y={984} text="no new cell is made: a copy of DNA moves" size={34} color={AMBER_INK} hand at={K2.nonew} />
			</Overlay>
		</>
	);
};
void Grips; void GhostRing; void kf;
